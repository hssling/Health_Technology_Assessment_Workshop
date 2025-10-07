# Lecture 5: Interpreting Economic Evidence in Health Technology Assessment

## Learning Objectives
After completing this lecture, participants will be able to:
1. Interpret incremental cost-effectiveness ratios (ICER) and willingness-to-pay thresholds
2. Apply decision rules for HTA recommendations
3. Conduct and interpret sensitivity and uncertainty analyses
4. Understand value of information analysis for research prioritization
5. Navigate real-world decision-making challenges in Indian HTA context

## Introduction to Interpreting Economic Evidence

The ultimate goal of HTA is to provide evidence-based recommendations for healthcare decision-making. Interpreting economic evidence involves translating technical findings into actionable policy recommendations while accounting for uncertainty and contextual factors.

### Key Challenges in Evidence Interpretation
- **Uncertainty**: All evidence has limitations and assumptions
- **Context dependence**: Results may vary across settings
- **Multiple perspectives**: Different stakeholders may interpret evidence differently
- **Dynamic environment**: Evidence needs regular updates

## Decision Rules and Cost-Effectiveness Acceptability

### Cost-Effectiveness Acceptability Curve (CEAC)
Visual representation showing probability that an intervention is cost-effective at different willingness-to-pay thresholds.

**Interpretation**:
- **Y-axis**: Probability of cost-effectiveness
- **X-axis**: Willingness-to-pay threshold
- **Curve shape**: Probability increases as threshold increases

### Cost-Effectiveness Acceptability Frontier
Shows the optimal intervention choice across different budget levels.
- Identifies dominated and extendedly dominated interventions
- Helps determine which intervention to adopt at different budgets

## Incremental Cost-Effectiveness Ratios (ICER) Interpretation

### Basic ICER Calculation
ICER = (Cost_new - Cost_comparator) / (Effect_new - Effect_comparator)

### Decision Rules Using ICERs

#### Rule 1: Dominance
- **Strong dominance**: New intervention costs more AND provides less benefit
- **Weak dominance**: New intervention costs more but benefit is unclear
- **Extended dominance**: Intervention dominated by combination of alternatives

#### Rule 2: Cost-Effectiveness Threshold
- **ICER < Threshold**: Cost-effective (adopt)
- **ICER > Threshold**: Not cost-effective (reject)
- **ICER = Threshold**: On acceptability boundary

### Threshold Values: International Benchmarking

#### UK (NICE)
- Primary threshold: £20,000-£30,000 per QALY
- End-of-life treatments: Up to £50,000 per QALY
- Highly specialized technologies: Up to £100,000 per QALY

#### WHO-CHOICE (Global)
- Cost-effective: <1× GDP per capita per DALY averted
- Very cost-effective: <3× GDP per capita per DALY averted
- India GDP per capita (2023): ~$2,100 USD → Threshold: ~$2,100-$6,300 per DALY

#### US (Second Panel)
- No fixed threshold
- Range: $50,000-$150,000 per QALY (disease-specific)

## Uncertainty Analysis Techniques

### 1. Deterministic Sensitivity Analysis
Testing model robustness by varying one parameter at a time.

**Types**:
- **One-way sensitivity analysis**: Change one parameter, examine impact
- **Multi-way sensitivity analysis**: Change multiple parameters simultaneously
- **Best/worst case scenarios**: Extremes of parameter ranges

**Example**: Vaccine cost-effectiveness
- Base case ICER: ₹5,000 per QALY
- Vaccine cost ±50%: ICER range ₹3,000-₹7,000 per QALY

### 2. Probabilistic Sensitivity Analysis (PSA)
Monte Carlo simulation using probability distributions for all uncertain parameters.

**Advantages**:
- Considers parameter correlations
- Provides confidence intervals
- Enables cost-effectiveness acceptability curves

**Implementation**:
1. Assign probability distributions to parameters
2. Run 1,000-10,000 simulations
3. Calculate probability of cost-effectiveness at different thresholds
4. Generate CEAC and credibility intervals

### 3. Value of Information (VOI) Analysis
Quantifies the value of reducing uncertainty through additional research.

**Expected Value of Perfect Information (EVPI)**:
- Maximum amount society should pay for perfect information
- Formula: EVPI = Expected benefit with perfect information - Expected benefit with current information

**Expected Value of Perfect Parameter Information (EVPPI)**:
- EVPI for specific parameters
- Identifies research priorities
- Helps allocate research budgets

## Decision-Making Frameworks

### 1. Expected Utility Theory
- Maximizes expected utility of outcomes
- Accounts for risk preferences
- Requires explicit utility functions

### 2. Multi-Criteria Decision Analysis (MCDA)
- **Beyond cost-effectiveness**: Considers equity, feasibility, acceptability
- **Structured approach**: Explicit weights for different criteria
- **Stakeholder involvement**: Incorporates diverse perspectives

**MCDA Criteria for Indian HTA**:
1. **Clinical effectiveness** (weight: 25%)
2. **Cost-effectiveness** (weight: 25%)
3. **Equity impact** (weight: 15%)
4. **Implementation feasibility** (weight: 15%)
5. **Patient acceptability** (weight: 10%)
6. **System capacity** (weight: 10%)

### 3. Budget Impact Analysis
- **Affordability assessment**: Impact on healthcare budgets
- **Population-level effects**: Total costs for implementing intervention
- **Transition costs**: One-time costs for system changes

## Contextual Factors in Decision-Making

### 1. Budget Constraints
- **Opportunity costs**: Adopting one intervention displaces others
- **Budget caps**: Cannot fund everything that is cost-effective
- **Priority setting**: Maximizing health gain within constraints

### 2. Equity Considerations
- **Horizontal equity**: Equal treatment for equal need
- **Vertical equity**: Priority for disadvantaged groups
- **Geographic equity**: Addressing rural-urban disparities

### 3. Political and Stakeholder Factors
- **Public opinion**: Media influence on decision process
- **Industry pressure**: Manufacturer lobbying and pricing negotiations
- **Professional societies**: Specialist recommendations

## Indian HTA Decision-Making Context

### Current Landscape
- **Limited formalized HTA**: No national HTA agency yet
- **State-level initiatives**: Kerala, Maharashtra developing HTA capacity
- **Insurance-based decisions**: TPA and insurance companies use basic HTA
- **Essential medicines**: National List of Essential Medicines uses cost considerations

### Decision-Making Challenges
1. **Data limitations**: Insufficient local cost-effectiveness data
2. **Institutional fragmentation**: Multiple decision-making bodies
3. **Political pressures**: Competing health priorities
4. **Implementation gaps**: Approved technologies not reaching patients

### Proposed Decision Framework for India
1. **Tier 1**: Clinical effectiveness review
2. **Tier 2**: Cost-effectiveness evaluation
3. **Tier 3**: Budget impact and implementation analysis
4. **Tier 4**: Multi-stakeholder deliberation

## Case Studies: Interpreting HTA Evidence

### Case Study 1: Cervical Cancer Screening
**Intervention**: HPV DNA testing vs conventional cytology

**Evidence Summary**:
- Clinical effectiveness: 60-70% reduction in cervical cancer incidence
- Cost per QALY: ₹45,000
- Threshold: ₹1,50,000 (3× GDP per capita)

**Decision Factors**:
- Strong clinical evidence
- Highly cost-effective
- Implementation challenges in rural areas
- Recommendation: Conditional adoption with implementation research

### Case Study 2: Coronary Artery Stenting
**Intervention**: Drug-eluting stents vs bare metal stents

**Evidence Assessment**:
- Additional clinical benefit: 20-30% reduction in restenosis
- Additional cost: ₹80,000 per patient
- ICER: ₹4,00,000 per QALY
- Below standard threshold but above WHO threshold

**Indian Context Decision**:
- Limited to high-risk patients
- Insurance coverage for selected indications
- Government hospitals encouraged to use less expensive alternatives

### Case Study 3: Oral Rehydration Solution
**Intervention**: Low-osmolarity ORS vs standard ORS

**Economic Evidence**:
- Cost difference: ₹2 per treatment packet
- Mortality reduction: 25% in severe dehydration
- Cost per life saved: ₹160
- Extremely cost-effective

**Policy Recommendation**:
- National adoption across all programs
- Training and implementation support
- Continuous monitoring of usage

## Communicating HTA Results

### 1. Executive Summary
- Key findings in plain language
- Strengths and limitations
- Policy implications

### 2. Technical Report
- Detailed methodology
- Full results and analyses
- Sensitivity analyses
- Appendices with data sources

### 3. Stakeholder Presentations
- **Policy-makers**: Focus on budget impact and population health
- **Clinicians**: Emphasize patient benefits and implementation
- **Patient groups**: Highlight quality of life improvements
- **Industry**: Address pricing and market access issues

### 4. Plain Language Summary
- Avoid technical jargon
- Use infographics and simple charts
- Include patient stories where appropriate

## Addressing Uncertainty in Decision-Making

### Risk-Based Approaches
1. **Precautionary principle**: Adopt when benefits outweigh risks of uncertainty
2. **Adaptive pathways**: Phased adoption with evidence generation
3. **Conditional coverage**: Time-limited approval with further research

### Managing Implementation Uncertainty
1. **Pilot programs**: Test interventions in controlled settings
2. **Real-world monitoring**: Track outcomes post-implementation
3. **Conditional reimbursement**: Link payment to performance

### Research Prioritization
1. **Value of Information**: Identify parameters with highest uncertainty
2. **Research portfolio**: Balance investment across disease areas
3. **Learning health systems**: Continuous evidence generation

## Future Directions in HTA Interpretation

### 1. Real-World Evidence Integration
- **Administrative data**: Claims and electronic health records
- **Patient registries**: Long-term outcomes and safety data
- **Machine learning**: Predictive modeling and risk stratification

### 2. Personalized Health Technology Assessment
- **Precision medicine**: Individualized cost-effectiveness
- **Genetic testing**: Targeted prevention and treatment
- **Biomarker-driven decisions**: Personalized thresholds

### 3. Advanced Modeling Techniques
- **Agent-based models**: Complex system interactions
- **Markov chain Monte Carlo**: Advanced uncertainty analysis
- **Bayesian networks**: Incorporating expert judgment

### 4. Policy Integration
- **Health Technology Assessment alongside regulation**
- **Coverage with evidence development**
- **Learning from international experiences**

## Practical Exercise: HTA Decision-Making

### Scenario: New Diabetes Drug
**Intervention**: Novel GLP-1 receptor agonist for type 2 diabetes

**Clinical Evidence**:
- HbA1c reduction: 1.5% points
- Weight reduction: 3 kg average
- Cardiovascular risk reduction: 15%

**Economic Evidence**:
- Base case ICER: ₹2,50,000 per QALY
- PSA results: 45% probability cost-effective at ₹1,50,000 threshold
- Budget impact: ₹500 crore annually

**Assignment**:
1. Interpret the ICER and probability results
2. Recommend decision considering Indian context
3. Identify key uncertainties requiring further research
4. Suggest implementation strategy

## Ethical Considerations in HTA Decisions

### 1. Transparency and Accountability
- **Open decision-making**: Clear criteria and processes
- **Stakeholder involvement**: Inclusive deliberation
- **Appeal mechanisms**: Challenge and review processes

### 2. Equity and Fair Process
- **Procedural justice**: Fair representation of interests
- **Priority setting**: Explicit rationing criteria
- **Accountability for reasonableness**: Legitimacy of decisions

### 3. Adaptation to Local Contexts
- **Cultural appropriateness**: Respect diverse values systems
- **Global vs local evidence**: Appropriate use of international data
- **Capacity building**: Strengthening local HTA expertise

## Summary

Interpreting economic evidence in HTA requires balancing technical rigor with practical decision-making. While cost-effectiveness ratios provide a quantitative foundation, ultimate recommendations must consider uncertainty, context, and stakeholder perspectives.

Key principles for effective HTA interpretation include:
1. Clear decision rules based on local willingness-to-pay thresholds
2. Comprehensive uncertainty analysis using probabilistic methods
3. Multi-criteria frameworks incorporating equity and feasibility
4. Transparent communication of findings to diverse audiences
5. Adaptive approaches accounting for implementation challenges

In India's diverse healthcare landscape, HTA interpretation must balance clinical, economic, and social considerations while building local evidence and capacity.

## Key Take-Home Points

1. HTA interpretation involves translating technical economic evidence into policy recommendations using decision rules and thresholds.

2. Uncertainty analysis (deterministic and probabilistic) is essential for robust decision-making and identifying research priorities.

3. Multi-criteria decision analysis provides a framework for incorporating equity, feasibility, and other non-economic factors.

4. Indian HTA decisions must consider limited budgets, diverse populations, and implementation challenges.

5. Effective communication of HTA findings requires audience-specific messaging and transparent processes.

6. Adaptive approaches and real-world evidence integration will become increasingly important for future HTA practice.

## Discussion Questions

1. How should decision-makers in low- and middle-income countries like India determine appropriate cost-effectiveness thresholds?

2. What role should equity considerations play in HTA decision-making for universal health coverage programs?

3. How can HTA processes be made more transparent and inclusive while maintaining scientific rigor?

4. What are the advantages and disadvantages of using international HTA guidelines in the Indian context?

5. How might machine learning and real-world evidence change HTA interpretation in the future?

## References

1. National Institute for Health and Care Excellence (NICE). Guide to the methods of technology appraisal. https://www.nice.org.uk/process/pmg9

2. WHO Commission on Macroeconomics and Health. Macroeconomics and health: investing in health for economic development. World Health Organization; 2001.

3. Claxton K, Palmer S, Longworth L, et al. Informing a decision framework for when NICE should recommend the use of health technologies only in the context of an appropriately designed programme of evidence development. Health Technology Assessment. 2012;16(46).

4. Chalkidou K, Glassman A, Marten R, et al. Priority-setting for achieving universal health coverage. Bulletin of the World Health Organization. 2016;94(6):462-467.

5. Drummond MF, Sculpher MJ, Claxton K, et al. Methods for the Economic Evaluation of Health Care Programmes. 4th ed. Oxford University Press; 2015.

## Further Reading

- Banta D, Jonsson E. History of HTA: Introduction. International Journal of Technology Assessment in Health Care. 2009;25(Suppl 1):1-6.

- Clement FM, Harris A, Li JJ, et al. Using effectiveness and cost-effectiveness to make drug coverage decisions: a comparison of Britain, Australia and Canada. JAMA. 2009;302(13):1437-1443.

- Garrison LP, Neumann PJ, Willke RJ, et al. A health economics approach to US value assessment frameworks: introduction and economic theory. Value in Health. 2018;21(6):654-658.

- IJzerman MJ, Steuten LMG. Early assessment of medical technologies to inform product development and market access: a review of methods and applications. Applied Health Economics and Health Policy. 2011;9(5):277-287.

- Sculpher M, Claxton K. Establishing the cost-effectiveness of new pharmaceuticals under conditions of uncertainty: when is there sufficient evidence? Value in Health. 2005;8(4):433-446.
