/**
 * Google Apps Script for HTA Workshop Registration Form
 * Creates automated registration form with QR code confirmation emails
 */

function createRegistrationForm() {
  try {
    // Configuration
    const FORM_TITLE = 'Health Technology Assessment Workshop Registration - Shridevi Institute';
    const FORM_DESCRIPTION = `🩺 Shridevi Institute Presents

**Health Technology Assessment**
*Bringing Evidence-Based Healthcare to Practice*

📅 **Date:** February 15-16, 2025
📍 **Venue:** Shridevi Institute of Medical Sciences and Research Hospital, Tumkur
🎯 **Target:** Postgraduate medical residents, healthcare professionals, researchers
👨‍🏫 **Resource Person:** Dr Siddalingaiah H S, Professor, Community Medicine

**Registration Fees:**
• PG Residents: ₹2,000
• Faculty & Researchers: ₹3,000

**Important Notes:**
• Limited seats available (50 participants)
• Registration will be confirmed on payment receipt
• Cancellation policy: Full refund 7 days prior, 50% within 72 hours
• All meals and workshop materials included

**For any queries:**
📧 Dr Siddalingaiah H S: drshs@shrideviinstitutes.edu.in
📧 Workshop Coordinator: hta2025@shrideviinstitutes.edu.in
📱 +91-9845678901 / +91-8136210200`;

    // Create new Google Form
    const form = FormApp.create(FORM_TITLE);
    form.setDescription(FORM_DESCRIPTION);

    // Set form settings
    form.setCollectEmail(true);
    form.setShowLinkToRespondAgain(false);
    form.setAllowResponseEdits(true);
    form.setLimitOneResponsePerUser(true);

    // Add confirmation message
    form.setConfirmationMessage(
      '🎉 **Registration Submitted Successfully!**\n\n' +
      'You will receive a confirmation email with payment instructions and your QR code within 24 hours.\n\n' +
      '📧 Check your email for next steps\n' +
      '💳 Complete payment to confirm your seat\n\n' +
      'For queries: hta2025@shrideviinstitutes.edu.in | +91-8136210200\n\n' +
      'We look forward to welcoming you to the HTA Workshop 2025!'
    );

    // BASIC INFORMATION SECTION
    form.addSectionHeaderItem()
         .setTitle('📋 Participant Information')
         .setHelpText('Please provide your basic details for registration');

    // Personal Information
    form.addTextItem()
        .setTitle('Full Name (as per ID)')
        .setHelpText('Enter your complete name as mentioned on your ID proof')
        .setRequired(true);

    form.addTextItem()
        .setTitle('Current Designation/Position')
        .setHelpText('e.g., PG Resident (MD/MS), Assistant Professor, Researcher, etc.')
        .setRequired(true);

    form.addTextItem()
        .setTitle('Institution/Organization')
        .setHelpText('Medical college, hospital, research institute name')
        .setRequired(true);

    form.addTextItem()
        .setTitle('Department/Specialty')
        .setHelpText('e.g., Community Medicine, Internal Medicine, Pediatrics, etc.')
        .setRequired(true);

    // Contact Information
    form.addTextItem()
        .setTitle('Mobile Number')
        .setHelpText('Active WhatsApp number for workshop updates')
        .setValidation(FormApp.createTextValidation()
                     .setHelpText('Please enter a valid 10-digit mobile number')
                     .requireTextMatchesPattern('^[6-9][0-9]{9}$')
                     .build())
        .setRequired(true);

    form.addTextItem()
        .setTitle('Alternate Contact Number')
        .setHelpText('Emergency contact number')
        .setRequired(false);

    form.addTextItem()
        .setTitle('Address for Correspondence')
        .setHelpText('Complete postal address for sending certificates')
        .setRequired(true);

    // ACADEMIC/PROFESSIONAL DETAILS
    form.addSectionHeaderItem()
         .setTitle('🎓 Academic & Professional Background')
         .setHelpText('Help us customize the workshop content');

    form.addMultipleChoiceItem()
        .setTitle('Highest Qualification')
        .setChoiceValues([
          'MBBS', 'MD/MS', 'DM/MCh', 'PhD',
          'Masters in Public Health (MPH)', 'MBA',
          'Other Medical Qualification', 'Non-Medical'
        ])
        .setRequired(true);

    form.addTextItem()
        .setTitle('Year of Passing')
        .setHelpText('Year you completed your highest qualification')
        .setRequired(true);

    form.addTextItem()
        .setTitle('Professional Experience (in years)')
        .setHelpText('Total years of work experience in healthcare/medical field')
        .setRequired(true);

    form.addMultipleChoiceItem()
        .setTitle('Prior knowledge of Health Technology Assessment')
        .setChoiceValues([
          'None - Complete beginner',
          'Basic - Heard the term, minimal understanding',
          'Intermediate - Have studied/read about HTA',
          'Advanced - Have worked on HTA projects/research',
          'Expert - Published research/conducted HTA studies'
        ])
        .setRequired(true);

    // PAYMENT SECTION
    form.addSectionHeaderItem()
         .setTitle('💳 Registration Fee & Payment')
         .setHelpText('Payment details for workshop registration');

    form.addMultipleChoiceItem()
        .setTitle('Registration Category')
        .setChoiceValues([
          'PG Resident (₹2,000)',
          'Faculty/Researcher (₹3,000)'
        ])
        .setRequired(true);

    form.addParagraphTextItem()
        .setTitle('Payment Instructions')
        .setHelpText('READ CAREFULLY BEFORE PROCEEDING')
        .setValidation(FormApp.createParagraphTextValidation()
                     .setHelpText('Please acknowledge that you have read the payment instructions')
                     .requireTextContainsPattern('.')
                     .build());

    form.addTextItem()
        .setTitle('Transaction Reference Number')
        .setHelpText('UTR/Reference number from bank after payment')
        .setRequired(true);

    form.addTextItem()
        .setTitle('Transaction Date')
        .setHelpText('Date when payment was made (DD/MM/YYYY)')
        .setRequired(true);

    form.addTextItem()
        .setTitle('Amount Paid (₹)')
        .setValidation(FormApp.createTextValidation()
                     .setHelpText('Please enter valid amount')
                     .requireNumberGreaterThan(0)
                     .build())
        .setRequired(true);

    // File upload for payment proof
    form.addFileUploadItem()
        .setTitle('Upload Payment Proof')
        .setHelpText('Upload scanned copy/PDF of payment receipt, screenshot of transaction, or bank statement')
        .setRequired(true);

    // ACCOMMODATION SECTION
    form.addSectionHeaderItem()
         .setTitle('🏨 Accommodation Requirements')
         .setHelpText('Limited accommodation available for outstation participants');

    form.addMultipleChoiceItem()
        .setTitle('Do you need accommodation?')
        .setChoiceValues([
          'Yes - Guest House accommodation preferred',
          'Yes - Budget hotel/motel',
          'Yes - Any accommodation available',
          'No - I will arrange my own accommodation'
        ])
        .setRequired(true);

    form.addTextItem()
        .setTitle('Number of accompanying persons')
        .setHelpText('Spouse/family members (if any)')
        .setRequired(false);

    // SPECIAL REQUIREMENTS
    form.addSectionHeaderItem()
         .setTitle('♿ Special Requirements & Accessibility')
         .setHelpText('Help us ensure a comfortable learning environment');

    form.addMultipleChoiceItem()
        .setTitle('Do you have any special dietary requirements?')
        .setChoiceValues([
          'Vegetarian',
          'Vegan',
          'Jain food',
          'Halal',
          'Other (please specify below)',
          'No special requirements'
        ])
        .setRequired(true);

    form.addTextItem()
        .setTitle('Dietary Restrictions (if any)')
        .setHelpText('e.g., allergies, food restrictions, medical dietary requirements')
        .setRequired(false);

    form.addMultipleChoiceItem()
        .setTitle('Do you require any accessibility support?')
        .setChoiceValues([
          'Wheelchair access',
          'Sign language interpreter',
          'Hearing assistance device',
          'Large print materials',
          'Other (please specify below)',
          'No support needed'
        ])
        .setRequired(true);

    form.addTextItem()
        .setTitle('Accessibility Details')
        .setHelpText('Please provide specific requirements for support')
        .setRequired(false);

    // EXPECTATIONS & FEEDBACK
    form.addSectionHeaderItem()
         .setTitle('🎯 Workshop Expectations')
         .setHelpText('Help us understand your learning goals');

    form.addParagraphTextItem()
        .setTitle('What are your main expectations from this HTA workshop?')
        .setHelpText('Describe what you hope to learn and achieve')
        .setRequired(true);

    form.addMultipleChoiceItem()
        .setTitle('How did you hear about this workshop?')
        .setChoiceValues([
          'NAMSCON website/announcement',
          'PGIMER notice board/website',
          'Email from department/institution',
          'WhatsApp/group message',
          'Social media (LinkedIn/Facebook)',
          'Colleague/friend recommendation',
          'Other (please specify below)'
        ])
        .setRequired(true);

    form.addTextItem()
        .setTitle('Other (source of information)')
        .setRequired(false);

    // DATA PRIVACY CONSENT
    form.addSectionHeaderItem()
         .setTitle('🔒 Data Privacy & Terms')
         .setHelpText('Your privacy and rights matter to us');

    form.addMultipleChoiceItem()
        .setTitle('Consent for Data Processing')
        .setChoiceValues([
          'I agree to the collection and processing of my personal data for workshop administration',
          'I do not agree (note: registration cannot proceed without consent)'
        ])
        .setRequired(true);

    form.addMultipleChoiceItem()
        .setTitle('Marketing Communications Consent')
        .setChoiceValues([
          'Yes, I would like to receive future updates about HTA workshops and educational events',
          'No, I do not wish to receive promotional communications'
        ])
        .setRequired(true);

    form.addParagraphTextItem()
        .setTitle('Additional Comments')
        .setHelpText('Any other information you would like to share')
        .setRequired(false);

    // Create response spreadsheet
    const spreadsheet = SpreadsheetApp.create(`${FORM_TITLE}_Registrations`);
    form.setDestination(FormApp.DestinationType.SPREADSHEET, spreadsheet.getId());

    // Set up automated email functionality
    setupEmailAutomation(form, spreadsheet);

    Logger.log('Registration form created successfully!');
    Logger.log('Form URL: ' + form.getPublishedUrl());
    Logger.log('Edit URL: ' + form.getEditUrl());
    Logger.log('Response Spreadsheet: ' + spreadsheet.getUrl());

    return {
      formUrl: form.getPublishedUrl(),
      editUrl: form.getEditUrl(),
      spreadsheetUrl: spreadsheet.getUrl()
    };

  } catch (error) {
    Logger.log('Error creating registration form: ' + error.toString());
    return null;
  }
}

function setupEmailAutomation(form, spreadsheet) {
  // Create trigger for email automation
  const trigger = ScriptApp.newTrigger('sendConfirmationEmail')
                           .forForm(form)
                           .onFormSubmit()
                           .create();

  Logger.log('Email automation trigger created');
}

function sendConfirmationEmail(e) {
  try {
    const response = e.response;
    const itemResponses = response.getItemResponses();

    // Extract participant details
    const participantData = extractParticipantData(itemResponses);

    // Generate QR code (placeholder - would need external library)
    const qrCodeUrl = generateConfirmationQR(participantData.name, participantData.email);

    // Send confirmation email
    const emailBody = createConfirmationEmailHTML(participantData, qrCodeUrl);
    const subject = 'HTA Workshop 2025 Registration Confirmed';

    MailApp.sendEmail({
      to: participantData.email,
      subject: subject,
      htmlBody: emailBody,
      replyTo: 'coordinator@pgimer.edu.in'
    });

    // Send coordinator notification
    sendCoordinatorNotification(participantData);

    Logger.log('Confirmation email sent to: ' + participantData.email);

  } catch (error) {
    Logger.log('Error sending confirmation email: ' + error.toString());
  }
}

function extractParticipantData(itemResponses) {
  const data = {};

  itemResponses.forEach(response => {
    const title = response.getItem().getTitle().toLowerCase();
    const value = response.getResponse();

    if (title.includes('name')) data.name = value;
    if (title.includes('email')) data.email = value;
    if (title.includes('mobile')) data.mobile = value;
    if (title.includes('designation')) data.designation = value;
    if (title.includes('institution')) data.institution = value;
    if (title.includes('amount')) data.amount = value;
    if (title.includes('reference')) data.reference = value;
  });

  return data;
}

function generateConfirmationQR(name, email) {
  // Placeholder - in real implementation, use QR code generation API
  // For now, return a placeholder URL
  return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=HTA25_${encodeURIComponent(name)}_${encodeURIComponent(email)}`;
}

function createConfirmationEmailHTML(data, qrCodeUrl) {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; color: #333; }
            .header { background: #0066CC; color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; }
            .qr-code { text-align: center; margin: 20px 0; }
            .footer { background: #f5f5f5; padding: 15px; font-size: 12px; }
            .highlight { background: #FFFF00; padding: 2px 4px; }
            .contact-info { background: #e6f3ff; padding: 15px; border-left: 4px solid #0066CC; }
        </style>
    </head>
    <body>
        <div class="header">
            <h1>🎉 Registration Confirmed!</h1>
            <h2>Health Technology Assessment</h2>
            <p>S H R I D E V I  I N S T I T U T E • T U M K U R</p>
        </div>

        <div class="content">
            <p>Dear <strong>${data.name}</strong>,</p>

            <p>Congratulations! Your registration for the <strong class="highlight">Health Technology Assessment Workshop</strong> has been successfully confirmed.</p>

            <h3>📅 Workshop Details</h3>
            <ul>
                <li><strong>Date:</strong> February 15-16, 2025</li>
                <li><strong>Venue:</strong> Shridevi Institute of Medical Sciences and Research Hospital, Tumkur</li>
                <li><strong>Timings:</strong> 9:00 AM - 5:00 PM both days</li>
                <li><strong>Payment Amount:</strong> ₹${data.amount}</li>
                <li><strong>Reference ID:</strong> ${data.reference}</li>
            </ul>

            <h3>📱 Your Digital Entry Pass</h3>
            <div class="qr-code">
                <img src="${qrCodeUrl}" alt="QR Code" width="200" height="200">
                <p><em>Present this QR code at workshop registration desk</em></p>
            </div>

            <h3>🏨 Accommodation Information</h3>
            <p>If you requested accommodation, our team will contact you within 48 hours with confirmed arrangements. Please keep your mobile number active.</p>

            <h3>📚 Pre-Workshop Preparation</h3>
            <ul>
                <li>Review basic epidemiology concepts</li>
                <li>Familiarize yourself with basic economic terminology</li>
                <li>Install required software (provided in welcome email)</li>
                <li>Prepare questions for interactive sessions</li>
            </ul>

            <h3>⚠️ Important Instructions</h3>
            <ol>
                <li>Arrive at least 30 minutes before start time</li>
                <li>Bring your original ID proof and printed QR code</li>
                <li>All meals and workshop materials are included</li>
                <li>Certificates will be distributed on Day 2</li>
                <li>For any changes, contact us immediately</li>
            </ol>

            <div class="contact-info">
            <div class="contact-info">
                <h3>📞 Contact Information</h3>
                <p><strong>Resource Person:</strong> Dr Siddalingaiah H S</p>
                <p><strong>Professor, Community Medicine</strong></p>
                <p><strong>Email:</strong> drshs@shrideviinstitutes.edu.in</p>
                <p><strong>Phone:</strong> +91-9845678901</p>
                <hr>
                <p><strong>Workshop Coordinator:</strong></p>
                <p><strong>Email:</strong> hta2025@shrideviinstitutes.edu.in</p>
                <p><strong>Phone:</strong> +91-8136210200</p>
            </div>

            <p>We look forward to welcoming you to what promises to be an engaging and insightful learning experience!</p>

            <p>Best regards,<br>
            <strong>Health Technology Assessment Organizing Team</strong><br>
            Shridevi Institute of Medical Sciences and Research Hospital</p>
        </div>

        <div class="footer">
            <p><strong>Note:</strong> This is an automated confirmation email. Please do not reply to this message. For any queries, use the contact details provided above.</p>
            <p>&copy; 2025 Shridevi Institute of Medical Sciences and Research Hospital. All rights reserved.</p>
        </div>
    </body>
    </html>
  `;

  return html;
}

function sendCoordinatorNotification(data) {
  try {
    const coordinatorEmail = 'coordinator@pgimer.edu.in'; // Replace with actual coordinator email
    const subject = 'New HTA Workshop Registration - ' + data.name;

    const body = `
New workshop registration received:

NAME: ${data.name}
DESIGNATION: ${data.designation}
INSTITUTION: ${data.institution}
MOBILE: ${data.mobile}
PAYMENT: ₹${data.amount}
REFERENCE: ${data.reference}

Please verify payment and accommodation requirements.

HTA Workshop 2025 System
    `;

    MailApp.sendEmail(coordinatorEmail, subject, body);

  } catch (error) {
    Logger.log('Error sending coordinator notification: ' + error.toString());
  }
}

/**
 * Function to export registration data
 */
function exportRegistrationData() {
  // Implementation for exporting data to external systems
  Logger.log('Registration data export functionality');
}

/**
 * Function to generate registration statistics
 */
function generateRegistrationReport() {
  // Implementation for generating attendance and demographic reports
  Logger.log('Registration report generation');
}

/**
 * Setup Instructions:
 *
 * 1. Create a new Google Sheets file
 * 2. Go to Extensions > Apps Script
 * 3. Paste this code into the script editor
 * 4. Replace coordinator email addresses with actual ones
 * 5. Run the createRegistrationForm() function
 * 6. Configure form settings as needed
 * 7. Test the form submission and email automation
 *
 * Features:
 * - Automated QR code generation for participants
 * - Professional confirmation emails with workshop details
 * - Coordinator notifications for new registrations
 * - Form validation for key fields
 * - Comprehensive participant data collection
 */
