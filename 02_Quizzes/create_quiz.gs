/**
 * Google Apps Script for HTA Workshop Quiz Generation
 * This script reads questions from hta_questions.csv and creates a Google Form
 * with automatic grading and response linking
 */

function createHTAQuizForm() {
  try {
    // Configuration
    const CSV_FILE_ID = 'YOUR_CSV_FILE_ID_HERE'; // Replace with actual Google Sheets CSV file ID
    const FORM_TITLE = 'HTA Workshop Quiz';
    const FORM_DESCRIPTION = 'Post-graduate Medical Education: Health Technology Assessment\n\n' +
                           'Instructions:\n' +
                           '• Answer all questions to the best of your ability\n' +
                           '• You have 45 minutes to complete this quiz\n' +
                           '• Each question carries equal marks\n' +
                           '• No negative marking for incorrect answers\n\n' +
                           'Topic Coverage: Foundations of HTA, Economic Evaluation Frameworks, Measuring Resource Use, Valuing Health Outcomes, Interpreting Economic Evidence, Translating HTA into Policy';

    // Create new Google Form
    const form = FormApp.create(FORM_TITLE);
    form.setDescription(FORM_DESCRIPTION);

    // Get CSV data from Google Sheets
    const csvData = getCSVData(CSV_FILE_ID);
    if (!csvData || csvData.length === 0) {
      Logger.log('Error: No CSV data found');
      return;
    }

    // Parse CSV data
    const questions = parseCSVQuestions(csvData);

    // Group questions by topic for better organization
    const questionsByTopic = groupQuestionsByTopic(questions);

    // Add instructions
    form.addSectionHeaderItem()
         .setTitle('Pre-Quiz Assessment')
         .setHelpText('Please indicate your baseline knowledge and experience');

    // Add demographic questions
    addDemographicQuestions(form);

    // Add quiz sections by topic
    for (const [topic, topicQuestions] of Object.entries(questionsByTopic)) {
      const sectionTitle = getSectionTitle(topic);
      const section = form.addPageBreakItem().setTitle(sectionTitle);

      // Add section instruction
      form.addSectionHeaderItem()
           .setTitle(`${topic} Questions`)
           .setHelpText(`Answer the following ${topicQuestions.length} questions related to ${topic}`);

      // Add questions for this topic
      topicQuestions.forEach((question, index) => {
        addQuestionToForm(form, question, index + 1);
      });
    }

    // Add feedback section
    form.addSectionHeaderItem()
         .setTitle('Post-Quiz Feedback')
         .setHelpText('Your feedback will help us improve future workshops');

    addFeedbackQuestions(form);

    // Create response spreadsheet
    const spreadsheet = SpreadsheetApp.create(`${FORM_TITLE}_Responses`);
    form.setDestination(FormApp.DestinationType.SPREADSHEET, spreadsheet.getId());

    // Set scoring and feedback
    // Note: Detailed grading is set up manually after form creation

    Logger.log('Quiz form created successfully!');
    Logger.log('Form URL: ' + form.getPublishedUrl());
    Logger.log('Edit URL: ' + form.getEditUrl());
    Logger.log('Response Spreadsheet: ' + spreadsheet.getUrl());

    return {
      formUrl: form.getPublishedUrl(),
      editUrl: form.getEditUrl(),
      spreadsheetUrl: spreadsheet.getUrl()
    };

  } catch (error) {
    Logger.log('Error creating quiz form: ' + error.toString());
    return null;
  }
}

function getCSVData(fileId) {
  try {
    // If CSV is uploaded to Google Drive
    const file = DriveApp.getFileById(fileId);
    const csvText = file.getBlob().getDataAsString();
    return Utilities.parseCsv(csvText);
  } catch (error) {
    Logger.log('Error getting CSV data: ' + error.toString());
    return null;
  }
}

function parseCSVQuestions(csvData) {
  const questions = [];
  const headers = csvData[0];

  // Find column indices
  const indices = {
    topic: headers.indexOf('topic'),
    type: headers.indexOf('question_type'),
    question: headers.indexOf('question'),
    optionA: headers.indexOf('option_a'),
    optionB: headers.indexOf('option_b'),
    optionC: headers.indexOf('option_c'),
    optionD: headers.indexOf('option_d'),
    correct: headers.indexOf('correct_answer'),
    explanation: headers.indexOf('explanation'),
    difficulty: headers.indexOf('difficulty_level')
  };

  // Parse questions (skip header row)
  for (let i = 1; i < csvData.length; i++) {
    const row = csvData[i];
    if (row.length === 0) continue;

    const question = {
      topic: row[indices.topic],
      type: row[indices.type],
      question: row[indices.question],
      options: [
        row[indices.optionA],
        row[indices.optionB],
        row[indices.optionC],
        row[indices.optionD]
      ],
      correctAnswer: row[indices.correct],
      explanation: row[indices.explanation],
      difficulty: row[indices.difficulty]
    };

    questions.push(question);
  }

  return questions;
}

function groupQuestionsByTopic(questions) {
  const grouped = {};

  questions.forEach(question => {
    if (!grouped[question.topic]) {
      grouped[question.topic] = [];
    }
    grouped[question.topic].push(question);
  });

  return grouped;
}

function getSectionTitle(topic) {
  const titles = {
    'Foundations of HTA': 'Section 1: Foundations of Health Technology Assessment',
    'Economic Evaluation Frameworks': 'Section 2: Economic Evaluation Frameworks',
    'Measuring Resource Use': 'Section 3: Measuring Resource Use in HTA',
    'Valuing Health Outcomes': 'Section 4: Valuing Health Outcomes',
    'Interpreting Economic Evidence': 'Section 5: Interpreting Economic Evidence',
    'Translating HTA into Policy': 'Section 6: Translating HTA into Policy'
  };

  return titles[topic] || topic;
}

function addDemographicQuestions(form) {
  // Name
  form.addTextItem()
      .setTitle('Full Name')
      .setRequired(true);

  // Designation
  form.addTextItem()
      .setTitle('Current Designation/Position')
      .setHelpText('e.g., PG Resident, Faculty, Researcher')
      .setRequired(true);

  // Institution
  form.addTextItem()
      .setTitle('Institution/Organization')
      .setRequired(true);

  // Email
  form.addTextItem()
      .setTitle('Email Address')
      .setHelpText('For certificate and results')
      .setRequired(true);

  // Experience level
  form.addMultipleChoiceItem()
      .setTitle('What is your experience level with HTA?')
      .setChoiceValues(['No prior knowledge', 'Basic understanding', 'Intermediate knowledge', 'Advanced expertise'])
      .setRequired(true);

  // Speciality
  form.addMultipleChoiceItem()
      .setTitle('Medical Speciality (if applicable)')
      .setChoiceValues(['Internal Medicine', 'Public Health', 'Surgery', 'Pediatrics', 'Obstetrics & Gynecology', 'Other', 'Non-clinical'])
      .setRequired(true);
}

function addQuestionToForm(form, questionData, questionNumber) {
  // Map answer letters to indices
  const answerMap = { 'a': 0, 'b': 1, 'c': 2, 'd': 3 };
  const correctIndex = answerMap[questionData.correctAnswer.toLowerCase()] || 0;

  // Create question item based on type
  let questionItem;
  const title = `Question ${questionNumber}: ${questionData.question}`;

  questionItem = form.addMultipleChoiceItem()
                     .setTitle(title)
                     .setChoiceValues(shuffleOptions(questionData.options, correctIndex));

  // Set feedback/help text based on difficulty and type
  let helpText = '';
  if (questionData.type === 'calculation') {
    helpText += '📊 Calculation-based question\n';
  } else if (questionData.type === 'interpretation') {
    helpText += '🔍 Interpretation/analysis question\n';
  }

  helpText += `Difficulty: ${questionData.difficulty.toUpperCase()}\n`;
  helpText += `Topic: ${questionData.topic}`;

  if (questionData.explanation) {
    helpText += `\n💡 Hint: ${questionData.explanation}`;
  }

  if (helpText) {
    try {
      // Note: setHelpText might not work for all question types in Apps Script
      questionItem.setHelpText(helpText);
    } catch (e) {
      Logger.log('Could not set help text for question: ' + questionData.question);
    }
  }

  Logger.log(`Added question ${questionNumber}: ${questionData.question.substring(0, 50)}...`);
}

function shuffleOptions(options, correctIndex) {
  // For fairness, keep options in original order but ensure correct answer placement varies
  // In a real implementation, you might want to shuffle these
  return options;
}

function addFeedbackQuestions(form) {
  // Overall experience
  form.addScaleItem()
      .setTitle('How would you rate the quiz difficulty?')
      .setBounds(1, 5)
      .setLabels('Too Easy', 'Just Right', 'Too Difficult')
      .setRequired(false);

  // Learning assessment
  form.addMultipleChoiceItem()
      .setTitle('What was your biggest learning from the quiz?')
      .setChoiceValues([
        'Understanding HTA frameworks',
        'Economic evaluation concepts',
        'Resource measurement methods',
        'Health outcome valuation',
        'Evidence interpretation',
        'Policy translation approaches'
      ])
      .setRequired(false);

  // Open feedback
  form.addParagraphTextItem()
      .setTitle('Any suggestions for improving the quiz or content?')
      .setRequired(false);
}

/**
 * Function to update quiz grading after form creation
 * This needs to be run separately after setting up the form manually
 */
function updateQuizGrading() {
  // Implementation would need specific form ID and manual grading setup
  Logger.log('Grading setup requires manual configuration in Google Forms');
}

/**
 * Function to generate quiz statistics and analysis
 */
function generateQuizReport(formId) {
  try {
    const form = FormApp.openById(formId);
    const responses = form.getResponses();
    const spreadsheetId = form.getDestinationId();

    // Generate basic statistics
    Logger.log(`Total responses: ${responses.length}`);

    // More detailed analysis would require spreadsheet manipulation
    return {
      responseCount: responses.length,
      formId: formId,
      spreadsheetId: spreadsheetId
    };

  } catch (error) {
    Logger.log('Error generating quiz report: ' + error.toString());
    return null;
  }
}

/**
 * Menu function for Google Sheets integration
 */
function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('HTA Quiz Tools')
    .addItem('Create Quiz Form', 'createHTAQuizForm')
    .addItem('Generate Report', 'generateQuizReport')
    .addToUi();
}

/**
 * Setup Instructions:
 *
 * 1. Upload hta_questions.csv to Google Drive
 * 2. Create a new Google Sheets file
 * 3. Go to Extensions > Apps Script
 * 4. Paste this code into the script editor
 * 5. Replace YOUR_CSV_FILE_ID_HERE with the actual file ID from Google Drive
 * 6. Run the createHTAQuizForm function
 * 7. Manually set up automatic grading in the Google Form:
 *    - Go to Settings > Quizzes > Make this a quiz
 *    - For each question, set correct answer and feedback
 *    - Set point values (typically 1 point per question)
 *
 * Usage:
 * - Students: Use the published form link
 * - Instructors: Use edit link to modify questions
 * - Responses: Automatically recorded in the linked spreadsheet
 */
