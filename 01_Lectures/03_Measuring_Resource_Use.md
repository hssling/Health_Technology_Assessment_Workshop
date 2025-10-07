# Lecture 3: Measuring Resource Use in Health Technology Assessment

## Learning Objectives
After completing this lecture, participants will be able to:
1. Understand different types of costs in economic evaluation
2. Identify and measure healthcare resource utilization
3. Apply appropriate methods for valuing different types of resources
4. Conduct basic cost analysis using Indian healthcare data
5. Address challenges in resource measurement in resource-constrained settings

## Introduction to Resource Measurement

Resource measurement is the foundation of any credible economic evaluation. It involves identifying, quantifying, and valuing all relevant costs associated with healthcare interventions. Accurate measurement ensures that decision-makers have reliable information about the true economic impact of health technologies.

### Why Resource Measurement Matters
- **Accuracy**: Incorrect cost estimates lead to wrong decisions
- **Comparability**: Standardized methods allow fair comparisons
- **Policy Impact**: Cost data informs budget allocation and pricing decisions
- **Sustainability**: Understanding true costs ensures long-term viability

## Types of Costs in Economic Evaluation

### 1. Direct Medical Costs
Costs directly related to the provision of healthcare:
- **Hospitalization costs**: Room charges, nursing care, diagnostic tests
- **Medication costs**: Drug acquisition, dispensing, administration
- **Procedure costs**: Surgery, chemotherapy, dialysis
- **Diagnostic costs**: Laboratory tests, imaging, consultations

### 2. Direct Non-Medical Costs
Costs borne by patients and families:
- **Transportation**: Travel to healthcare facilities
- **Informal care**: Time spent by family members caring for patients
- **Special equipment**: Wheelchairs, home modifications
- **Rehabilitation services**: Physiotherapy, occupational therapy

### 3. Indirect Costs
Costs resulting from lost productivity:
- **Patient time**: Lost work days, reduced productivity
- **Caregiver time**: Time off work to provide care
- **Premature mortality**: Lost future earnings and productivity
- **Presenteeism**: Working while ill, reduced effectiveness

### 4. Intangible Costs
Non-monetary costs difficult to quantify:
- **Pain and suffering**: Psychological distress
- **Reduced quality of life**: Social isolation, stigma
- **Bereavement costs**: Impact on family and community

## Framework for Resource Identification

### 1. Define the Research Question
- Which interventions to compare?
- What perspective to adopt?
- What time horizon to consider?

### 2. Develop Resource List
- **Patient-level resources**: Consultations, tests, medications
- **Provider-level resources**: Staff time, equipment utilization
- **System-level resources**: Infrastructure, administrative costs

### 3. Data Collection Methods
- **Retrospective analysis**: Hospital records, claims data
- **Prospective measurement**: Direct observation, patient diaries
- **Expert opinion**: Physician surveys, Delphi panels

### 4. Valuation Approaches
- **Market prices**: Actual prices paid for resources
- **Standardized prices**: Government tariffs, international references
- **Shadow prices**: Opportunity costs for scarce resources

## Measuring Direct Medical Costs

### Hospitalization Costs
**Components**:
- Room charges (general ward, private room)
- Intensive care unit costs
- Diagnostic procedures
- Medications and consumables
- Professional fees

**Indian Context Example**:
```python
# Simplified cost calculation for appendectomy
room_charge = 5000  # per day
surgery_fee = 25000
medication = 3000
total_cost = room_charge + surgery_fee + medication
# Total: ₹33,000
```

### Medication Costs
**Considerations**:
- Acquisition costs vs retail prices
- Generic vs branded medications
- Dosage regimens and duration
- Waste and unused medications

**Indian Example**:
- Generic metformin (500mg): ₹2-5 per strip
- Branded equivalent: ₹15-25 per strip
- Annual cost difference: ₹600-7,200 per patient

### Diagnostic and Procedure Costs
**Categories**:
- Laboratory investigations
- Imaging studies (X-ray, CT, MRI)
- Surgical procedures
- Interventional radiology

## Measuring Direct Non-Medical Costs

### Transportation Costs
**Methods**:
- Patient-reported distances traveled
- Standard unit costs per kilometer
- Mode of transport (public, private, ambulance)

**Indian Example**:
- Average round-trip cost for tertiary care: ₹500-2,000
- Rural patients often incur higher proportional costs

### Informal Care Costs
**Challenges**:
- Valuing unpaid caregiver time
- Different approaches: replacement cost, opportunity cost
- Cultural context in family caregiving

### Productivity Losses
**Human Capital Approach**:
- Wage rates for lost work time
- Age and gender-specific earnings
- Discounting for future earnings

**Friction Cost Approach**:
- Cost of replacing a worker
- Time to find and train replacement
- More relevant for short-term absences

## Resource Measurement Methods

### 1. Top-Down Approach
- **Method**: Allocate total costs across activities
- **Advantages**: Comprehensive, uses existing data
- **Disadvantages**: Less precise allocation

### 2. Bottom-Up Approach
- **Method**: Measure individual resource components
- **Advantages**: Detailed and accurate
- **Disadvantages**: Time-consuming, resource-intensive

### 3. Hybrid Approaches
- **Method**: Combine top-down and bottom-up methods
- **Application**: Major costs allocated, minor costs micro-costed

## Valuation Challenges in Indian Context

### 1. Price Variations
- **Inter-state differences**: Procurement costs vary by state
- **Public vs private sector**: Different pricing structures
- **Subsidized care**: Government hospitals charge below cost

### 2. Data Availability
- **Limited databases**: Few comprehensive cost databases
- **Outdated information**: Prices change frequently
- **Quality issues**: Incomplete or inaccurate records

### 3. Context-Specific Issues
- **Dual healthcare system**: Public and private sectors
- **Insurance coverage**: Varying reimbursement rates
- **Patient co-payments**: Actual out-of-pocket expenditures

## Costing Studies: Case Examples

### Example 1: Diabetes Management in Kerala
**Intervention**: Community-based diabetes care vs hospital care

**Resource Measurement**:
- Community health worker time: ₹200 per visit
- Glucometer strips: ₹50 per test
- Patient transportation: ₹100 per visit
- Hospital consultations: ₹300 per visit

**Total Annual Cost per Patient**:
- Community care: ₹8,000
- Hospital care: ₹15,000
- Savings: ₹7,000 per patient

### Example 2: TB Treatment in Delhi
**DOTS Strategy Implementation**:

**Direct Costs**:
- Anti-TB drugs: ₹1,500 (6 months)
- Laboratory investigations: ₹800
- Staff supervision: ₹300
- Transportation vouchers: ₹200

**Indirect Costs**:
- Patient productivity loss: ₹5,000
- Caregiver time: ₹2,000

**Total Treatment Cost**: ₹9,800 per patient

### Example 3: Cancer Care in Tata Memorial Hospital
**Breast Cancer Treatment Cost Analysis**:

**Hospital Perspective Costs**:
- Surgery: ₹50,000-100,000
- Chemotherapy: ₹40,000-80,000
- Radiation therapy: ₹30,000-60,000
- Follow-up care: ₹10,000

**Patient Perspective Costs**:
- Travel and accommodation: ₹25,000
- Nutrition support: ₹15,000
- Lost wages: ₹20,000

## Practical Approaches for Indian HTA

### 1. Unit Cost Development
- **Government schedules**: Central procurement prices
- **WHO-CHOICE**: International reference prices
- **Primary collection**: Facility-based surveys

### 2. Cost-Effectiveness Analysis Framework
- **Reference year**: Specify all costs in same year
- **Currency**: Use Indian Rupees with USD equivalents
- **Discounting**: Apply 3-5% annual discount rate

### 3. Sensitivity Analysis
- **Price variation**: Test different cost scenarios
- **Utilization rates**: Vary resource use assumptions
- **Time horizons**: Test different analytical perspectives

## Tools and Software for Costing

### 1. Excel-Based Tools
- **Simple spreadsheets**: For basic cost calculations
- **Templates**: WHO and IHME costing tools
- **Validation**: Built-in error checking

### 2. Specialized Software
- **TreeAge**: Decision tree modeling with costs
- **R and Stata**: Statistical costing analysis
- **Custom databases**: Local institutional cost repositories

### 3. Reference Sources
- **State drug schedules**: Official procurement prices
- **NABH standards**: Standardized hospital costing
- **Insurance claims data**: Real-world cost utilization

## Quality Assurance in Costing

### 1. Internal Validity
- **Data completeness**: Check for missing values
- **Consistency**: Verify units and currencies
- **Accuracy**: Cross-validate against known benchmarks

### 2. External Validity
- **Generalizability**: Consider applicability to other settings
- **Transferability**: Adjust for local price differences
- **Relevance**: Ensure costs reflect current practice

### 3. Transparency
- **Methodology**: Document all assumptions and methods
- **Data sources**: Cite original references
- **Limitations**: Clearly state study constraints

## Common Pitfalls and Solutions

### 1. Double-Counting Costs
**Problem**: Counting same resource multiple times
**Solution**: Create comprehensive resource list, use checklists

### 2. Missing Indirect Costs
**Problem**: Underestimating total economic impact
**Solution**: Include productivity losses where appropriate

### 3. Inflated Estimates
**Problem**: Using charge data instead of actual costs
**Solution**: Use bottom-up costing methods

### 4. Outdated Prices
**Problem**: Using old cost data in current analyses
**Solution**: Regular price updates, inflation adjustments

## Future Directions in Resource Measurement

### 1. Digital Health Integration
- **Electronic health records**: Automated cost capture
- **Blockchain technology**: Transparent cost tracking
- **Artificial intelligence**: Automated resource identification

### 2. Real-World Evidence
- **Administrative data**: Claims and billing databases
- **Patient registries**: Longitudinal cost patterns
- **Big data analytics**: Population-level cost trends

### 3. Standardization Efforts
- **Global initiatives**: WHO cost collection standards
- **National databases**: Centralized cost repositories
- **Methodological guidelines**: Standardized costing protocols

## Practical Exercise

### Cost Calculation Worksheet
Estimate the cost of managing acute myocardial infarction in a district hospital:

**Given Data**:
- Hospital stay: 7 days at ₹3,000/day = ₹21,000
- Cardiology consultation: ₹500 × 2 visits = ₹1,000
- Investigations: ECG ₹300, Echo ₹1,500, Cardiac enzymes ₹800 = ₹2,600
- Medications: Streptokinase ₹5,000, Other drugs ₹2,000 = ₹7,000
- Staff time: Physician ₹2,000, Nursing ₹1,500 = ₹3,500

**Total Direct Medical Cost**: Calculate sum of all components

**Additional Costs to Consider**:
- Patient transportation: ₹1,500
- Family accommodation: ₹2,100
- Lost productivity: ₹10,000
- Follow-up costs: ₹3,000

## Summary

Measuring resource use is both an art and a science that requires careful consideration of multiple factors. In the Indian context, where healthcare systems vary widely and resource constraints are significant, accurate costing is particularly challenging but essential.

Key principles for effective resource measurement include:
1. Clearly defining the perspective and scope of analysis
2. Using systematic methods for identifying all relevant resources
3. Applying appropriate valuation techniques based on context
4. Considering uncertainty and conducting sensitivity analysis
5. Ensuring transparency and documentation of methods

## Key Take-Home Points

1. Resource measurement involves identifying, quantifying, and valuing all costs associated with healthcare interventions.

2. Costs can be classified as direct medical, direct non-medical, and indirect costs, each requiring different measurement approaches.

3. Bottom-up costing provides more accurate estimates than top-down approaches, particularly for detailed economic evaluations.

4. Indian healthcare costing faces unique challenges including price variations, limited data availability, and diverse healthcare systems.

5. Standardization of costing methods and development of local cost databases are essential for improving HTA quality in India.

6. Sensitivity analysis and quality assurance are critical for ensuring the reliability of cost estimates.

## Discussion Questions

1. How do India's diverse healthcare systems (public, private, traditional medicine) affect resource measurement in HTA?

2. What are the most significant challenges in obtaining accurate cost data for Indian healthcare interventions?

3. How should researchers handle the valuation of informal care and productivity losses in low-income settings?

4. What role can digital health technologies play in improving resource measurement and costing in India?

5. How can cost measurement methodologies be adapted for traditional medicine systems like Ayurveda and Unani?

## References

1. Johns B, Baltussen R, Hutubessy R. Programme costs in the economic evaluation of health interventions. Cost Eff Resour Alloc. 2003;1(1):1.

2. Tan-Torres Edejer T, Baltussen R, Adam T, et al. Making choices in health: WHO guide to cost-effectiveness analysis. World Health Organization; 2003.

3. Prinja S, Bahuguna P, Pinto AD, et al. The cost of universal health care in India: a model based estimate. PLoS One. 2012;7(1):e30362.

4. Ministry of Health and Family Welfare. Basic health package for Ayushman Bharat. Government of India; 2018.

5. National Health Systems Resource Centre. Guidelines for health technology assessment in India. New Delhi; 2020.

## Further Reading

- Creese A, Floyd K, Alban A, et al. Cost-effectiveness of HIV/AIDS interventions in Africa. World Health Organization; 2002.

- Hutubessy R, Chisholm D, Edejer TT. Generalized cost-effectiveness analysis for national-level priority setting in the health sector. Cost Eff Resour Alloc. 2003;1(1):8.

- Walker DG, Kumaranayake L. Allowing for differential timing in cost analyses: discounting and annualization. Health Policy Plan. 2002;17(1):31-4.

- Marseille E, Larson B, Kazi DS, et al. Thresholds for the cost-effectiveness of interventions: alternative approaches. Bull World Health Organ. 2015;93(2):118-24.
