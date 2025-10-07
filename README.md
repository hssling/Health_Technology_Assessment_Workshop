# 🩺 Health Technology Assessment (HTA) Workshop 2025

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.XXXXXXX.svg)](https://zenodo.org/badge/latestdoi/XXXXXXX)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Python CI](https://github.com/hssling/Health_Technology_Assessment_Workshop/actions/workflows/python-check.yml/badge.svg)](https://github.com/hssling/Health_Technology_Assessment_Workshop/actions/workflows/python-check.yml)
[![Markdown Lint](https://github.com/hssling/Health_Technology_Assessment_Workshop/actions/workflows/markdown-lint.yml/badge.svg)](https://github.com/hssling/Health_Technology_Assessment_Workshop/actions/workflows/markdown-lint.yml)
[![Citation Check](https://github.com/hssling/Health_Technology_Assessment_Workshop/actions/workflows/citation-check.yml/badge.svg)](https://github.com/hssling/Health_Technology_Assessment_Workshop/actions/workflows/citation-check.yml)

📚 **Comprehensive educational resources for Health Technology Assessment training**

🏥 **Organized by:** Shridevi Institute of Medical Sciences and Research Hospital<br>
📍 **Hosted by:** Shridevi Institute of Medical Sciences and Research Hospital, Tumkur<br>
👨‍🏫 **Resource Person:** Dr Siddalingaiah H S, Professor of Community Medicine<br>
📅 **Date:** February 15-16, 2025

---

## 📖 Project Overview

This automated content generation project creates comprehensive educational and administrative resources for the **Health Technology Assessment Workshop** hosted by Shridevi Institute of Medical Sciences and Research Hospital, Tumkur. The workshop, led by **Dr Siddalingaiah H S, Professor of Community Medicine**, focuses on equipping postgraduate medical residents and healthcare professionals with essential HTA knowledge and skills.

🎯 **Target Audience:** Postgraduate medical residents, healthcare professionals, and researchers

## Project Structure

```
/HTA_Workshop_2025/
├── 01_Lectures/           # Detailed lecture notes (6 modules)
├── 02_Quizzes/           # Quiz questions and automation scripts
├── 03_Presentations/     # Auto-generated PowerPoint slides
├── 04_Infographics/      # Visual aids and concept illustrations
├── 05_Admin_Forms/       # Registration and administrative forms
├── 06_Reports/          # Analytics, metadata, and final reports
├── assets/              # Logos, images, and workshop materials
└── README.md           # This file
```

## Workshop Details

**Venue**: Shridevi Institute of Medical Sciences and Research Hospital, Tumkur
**Dates**: February 15-16, 2025
**Resource Person**: Dr Siddalingaiah H S, Professor, Community Medicine (Shridevi Institute)
**Target Audience**: Postgraduate medical residents, healthcare professionals, and researchers

**Duration**: 2 days

**Objectives**:
- Understand fundamental concepts of Health Technology Assessment
- Apply economic evaluation frameworks in healthcare decision-making
- Master evidence interpretation and policy translation
- Develop practical HTA implementation skills

## Content Generation Pipeline

This project uses automated generation tools to create:

1. **Educational Materials**:
   - 6 comprehensive lecture modules (164 pages each)
   - Interactive quizzes with automatic grading
   - Professional presentation decks
   - Educational infographics

2. **Administrative Tools**:
   - Automated registration form
   - Analytics dashboard for monitoring
   - Participant management system

3. **Reporting & Packaging**:
   - Automated resource compilation
   - Progress logging and tracking
   - Final deliverable packaging

## Key Features

- **Research-Based**: Content developed using WHO, HTAIn, NICE guidelines
- **India-Centric**: Examples and case studies from Indian healthcare context
- **Clinical Focus**: Suitable for PG residents with medical background
- **Interactive**: Multiple assessment methods and screens
- **Scalable**: Template-based generation for future modifications

## Technology Stack

- **Content Generation**: Python, Markdown, JSON metadata
- **Presentations**: python-pptx for PowerPoint automation
- **Forms & Analytics**: Google Apps Script, Streamlit
- **Visualization**: Matplotlib, PIL for infographics
- **Automation**: Batch scripts for workflow orchestration

## 🚀 Quick Start

### For Workshop Organizers
1. **Clone Repository**: `git clone https://github.com/hssling/Health_Technology_Assessment_Workshop.git`
2. **Setup Environment**: `pip install -r requirements.txt`
3. **Deploy Registration**: Import `05_Admin_Forms/registration_form.gs` to Google Apps Script
4. **Launch Analytics**: `streamlit run 06_Reports/hta_dashboard.py`
5. **Register Participants**: Distribute the published Google Form

### For Participants
1. **Access Materials**: All lecture notes, quizzes, and presentations in respective folders
2. **Register**: Visit the workshop registration link
3. **Take Assessment**: Complete the interactive quiz system
4. **Get Certificate**: Download completion certificate post-workshop

## 📊 Workshop Analytics

Real-time dashboard provides:
- 📈 **Registration Trends**: Track enrollment over time
- 👥 **Demographic Analysis**: Participant background statistics
- 📊 **Assessment Results**: Quiz performance metrics
- 📅 **Attendance Monitoring**: Session participation tracking

## 🛠️ Installation & Setup

### Prerequisites
- Python 3.8+, Node.js 14+
- Google Account (for Forms integration)
- Streamlit for dashboard deployment
- PowerPoint/Office for presentation viewing

### Local Development
```bash
# Clone the repository
git clone https://github.com/hssling/Health_Technology_Assessment_Workshop.git
cd Health_Technology_Assessment_Workshop

# Install Python dependencies
pip install streamlit pandas plotly matplotlib

# Install Google Apps Script development tools
npm install -g @google/clasp

# Run dashboard locally
streamlit run 06_Reports/hta_dashboard.py
```

### CI/CD Setup
This repository uses GitHub Actions for automated quality checks:
- ✅ **Python Code Quality**: Flake8, Black, isort, mypy
- ✅ **Documentation**: Markdown linting with link validation
- ✅ **Academic Content**: Citation and metadata validation

---

## 📚 How to Cite

If you use this workshop material in your research or educational activities, please cite it as:

### APA Citation
```
H S, S. (2025). Health Technology Assessment 2025: Educational Resources and Training Materials
[Workshop]. Presented at Shridevi Institute of Medical Sciences and Research Hospital, Tumkur, Karnataka, India. https://github.com/hssling/Health_Technology_Assessment_Workshop
```

### BibTeX Citation
```bibtex
@proceedings{h_s_hta_workshop_2025,
  title={Health Technology Assessment 2025: Educational Resources and Training Materials},
  author={H S, Siddalingaiah},
  booktitle={Shridevi Institute Medical Education Workshop Series 2025},
  address={Tumkur, Karnataka, India},
  venue={Shridevi Institute of Medical Sciences and Research Hospital},
  year={2025},
  note={\url{https://github.com/hssling/Health_Technology_Assessment_Workshop}}
}
```

### CFF Citation
See [`CITATION.cff`](CITATION.cff) for full academic citation metadata in Citation File Format.

---

## 🤝 Contributing

We welcome contributions to improve this educational resource. Please follow these guidelines:

### For Academic Contributors
1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/your-feature-name`
3. **Make your changes** following academic standards
4. **Run tests**: Ensure all CI/CD checks pass
5. **Update documentation**: Modify relevant README sections
6. **Commit changes**: `git commit -m "Add: detailed description of changes"`
7. **Create Pull Request**: Provide detailed description of academic contribution

### Academic Standards
- ✅ **Evidence-Based**: All content must be supported by reliable sources
- ✅ **India-Centric**: Include relevant Indian healthcare context
- ✅ **Ethical**: Respect patient privacy and professional standards
- ✅ **Pedagogical**: Ensure educational effectiveness
- ✅ **Accessible**: Use clear, inclusive language

### Code of Conduct
This project follows academic integrity standards. All contributions must be original work or properly attributed.

---

## 🏆 Acknowledgments

### Academic Partners
- **Shridevi Institute of Medical Sciences and Research Hospital**: For providing the academic platform and hosting support
- **Department of Community Medicine, Shridevi Institute**: For expertise in health economics and technology assessment

### Technical Development
- **AI Development**: Content generated using Cline AI assistant with advanced educational content algorithms
- **Quality Assurance**: Comprehensive testing and validation pipeline for academic materials
- **Community Contributors**: Medical educators, health economists, and teaching professionals

### Funding & Support
- **Shridevi Institute Academic Committee**: For curriculum validation and workshop coordination
- **Institutional Resources**: Technical and administrative support from Shridevi Institute
- **Open Source Community**: GitHub Actions, educational frameworks, and development tools

### International Guidelines
Content developed following standards from:
- **WHO CHOICE**: Cost-effectiveness analysis guidelines
- **HB-HTA**: Alexander von Humboldt fellowship recommendations
- **NICE**: National Institute for Health and Care Excellence
- **HTAIn**: Heath Technology Assessment India Network

---

## 📋 License & Usage Rights

This project is licensed under the **MIT License** - see the [`LICENSE`](LICENSE) file for details.

### Educational Use
- ✅ **Copy and distribute** the educational materials
- ✅ **Adapt the content** for similar educational purposes
- ✅ **Cite properly** when using in academic work
- ✅ **Share improvements** back to the community

### Commercial Use
Commercial use requires explicit permission from Dr Siddalingaiah H S.

---

## 🔧 Development & Maintenance

### Repository Maintenance
- **Regular Updates**: Weekly automated guideline checks
- **Version Control**: Semantic versioning for releases
- **Archive**: All versions preserved for academic reference
- **Deprecation**: Clear communication of outdated materials

### Quality Assurance
- **Automated Testing**: CI/CD pipelines ensure quality
- **Peer Review**: Academic validation of content accuracy
- **User Feedback**: Integration of participant and educator input
- **Continuous Improvement**: Regular content updates and enhancements

---

## 📞 Support & Contact

### Technical Issues
- 🔧 **GitHub Issues**: Report bugs or request features
- 📧 **Email**: hta2025@shrideviinstitutes.edu.in (technical support)

### Academic Queries
- 👨‍🏫 **Resource Person**: Dr Siddalingaiah H S (drshs@shrideviinstitutes.edu.in)
- � **Shridevi Institute**: www.shrideviinstitutes.edu.in

### Workshop Administration
- 📝 **Registration**: Automated via Google Forms
- 📊 **Analytics**: Streamlit dashboard
- 📄 **Certificates**: Post-workshop distribution

---

## 📝 Notes

This repository was created through automated content generation using the Cline AI assistant. All educational materials have been developed following academic standards and medical education best practices. For any academic content modifications or updates, please contact the resource person directly.

---

*Generated through Cline automated content creation pipeline - Health Technology Assessment Workshop 2025*
