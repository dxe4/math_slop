var e=`---
id: course-data-prediction-entry
title: "From Rows to Predictions: A First Data Course"
level: secondary
estimated_minutes: null
license: CC BY-SA 4.0
---

# From Rows to Predictions: A First Data Course

<!-- euler-course-route -->

## Current course route

Use the [course page](/courses/atlas-data-prediction-entry/) for its present preparation and available study steps. This Outline keeps its original explanations and exercises while a complete primary-book syllabus is being assigned.

A table does not arrive with instructions for using it. We choose what one row represents, which information can be known in time, what to predict, and how an error will count. Algebra then turns a proposed rule into checkable predictions. Probability can average those errors under a stated drawing rule. Each step needs an explanation; a small error number cannot supply the missing assumptions.

This course connects the existing first data encounter to three introductory linear-algebra lessons, then builds the bridge between them. The whole investigation uses the **same five hypothetical seedlings** already printed in that encounter. These are teaching observations, not a newly collected dataset. Work by hand, with a spoken table, or with an ordinary calculator. No programming, calculus, R or prior matrix course is needed. The complete study time depends on the selected reading, attempts and corrections; there is no combined study-time estimate.

Your destination is a small auditable portfolio: define an input, solve two coefficient equations, check the remaining training row, compare a line with a training-only baseline, and explain exactly which finite probability statement follows. You will also repair a feature that loses information and revisit the same public fixture with the training and testing roles reversed. These are public self-study tasks, not graded Practice attempts, learner-run evidence or a certificate of readiness for all statistical learning.

## Preparation and diagnostic repair

You need signed subtraction, multiplication of decimals or fractions, squaring a signed number, averages, coordinates and solving a simple equation by applying the same operation to both sides. A pair $(u,v)$ has a first and second coordinate; adding pairs means adding matching coordinates. A mean divides a sum by the number of included values, not by the number of columns.

Before reading the answers, try: (a) compute $1.6-1.55$ and its square; (b) average $1.1,2.0,2.9$; (c) solve $2b=0.9$ and then $a+2b=1.1$; (d) compute $(1,2)+(1,4)$; (e) if two possible rows have probabilities $1/2$ each and losses $0.0025,0.0625$, what is the weighted mean? Write a reason for each denominator.

**Complete diagnostic key.** (a) The residual is $0.05$, whose square is $0.0025$; $(-0.05)^2$ is also $0.0025$. (b) The sum is 6, so the mean is $6/3=2$. (c) Divide both sides by 2 to obtain $b=0.45$; substitution gives $a=1.1-0.9=0.2$. (d) The result is $(2,6)$, not $(1,6)$. (e) The result is $(0.0025+0.0625)/2=0.0325$. The two weights sum to 1. In the diagnostic the decimals are exact teaching inputs; no claim about measurement precision is being made.

**Repair with a worked check.** If (a) failed, write $1.60-1.55=5/100$ and square the fraction: $25/10000=0.0025$. Parentheses make the sign part of the squared input. If (b) or (e) failed, name the objects being averaged before dividing. If (c) failed, subtract the same $0.9$ from both sides of $a+0.9=1.1$, then substitute both answers into the original equations. If (d) failed, keep separate first-coordinate and second-coordinate lists.

For a fuller arithmetic repair, use [Signed Numbers to Equations](#/item/course-signed-numbers-to-equations). Its **Session 3 — Products must respect the old arithmetic laws**, subsection **Parentheses decide what is being squared**, explains the sign issue. Its **Mixed practice: choose the operation yourself**, Questions 5, 7 and 8, has the complete correspondingly numbered keys in **Worked solutions**: Q5 obtains $x=-1$ and checks $2(-1-3)=-8$; Q7 obtains the point $(3,-4)$ and distance $\\sqrt{74}$; Q8 obtains $15-8=7$. These are preparation repairs, not extra data observations. Return to the diagnostic after repairing the relevant operation.

## Required source sequence and complete-key addresses

Read the following sources in the printed order. For each assigned question, write a first answer before comparing with its public key, then write one correction or a reason that your answer already agrees. A complete-key address below is a native item/article identity plus its actual section and printed question number. The article links deliberately open their canonical article pages; find the stated section within the page.

| Order | Required source and assignment | Native complete-key address and what to check |
| --- | --- | --- |
| 1 | [Data, Patterns, and Prediction: A First Encounter](#/item/deep-dive-data-prediction-first-encounter): read the whole encounter; answer all five questions in **Worked exercises** | Native item \`deep-dive-data-prediction-first-encounter\`, **Worked exercises**, Q1–5, the **Answer.** immediately after each question. Q1: future follow-up calls are unavailable at discharge; Q2: training MSE is $2/3$; Q3: keep a patient's images together; Q4: compare the fixed split without a deployment guarantee; Q5: association does not identify the effect of intervening on sunlight. |
| 2 | [A walk is a vector](/articles/ga-la-vector-addition/): read the article and answer both questions in **Try two independent checks** | Native article \`ga-la-vector-addition\`, section \`practice\`, **Worked solution for question 1** and **Worked solution for question 2**. Q1: net displacement $(0,1)$ and final point $(5,-1)$; Q2: both arrows have displacement $(2,1)$ although the endpoints differ. |
| 3 | [A matrix is a rule for moving space](/articles/ga-la-linear-map/): read the article and answer both questions in **Try the rule yourself** | Native article \`ga-la-linear-map\`, section \`practice\`, **Worked solution for question 1** and **Worked solution for question 2**. Q1: $U(x,y)=(x+2y,-x+3y)$ and $U(4,-2)=(0,-10)$; Q2: the proposed translation sends zero to $(1,0)$ and is not linear. |
| 4 | [When two equations meet](/articles/ga-la-systems/): read the article and answer both questions in **Classify as well as solve** | Native article \`ga-la-systems\`, section \`practice\`, **Worked solution for question 1** and **Worked solution for question 2**. Q1: $(x,y)=(2,1)$, with substitution in both equations; Q2: the contradiction $0=1$ proves no solution, rather than a new pair of coordinates. |

These three articles are exactly the selected foundation lessons of the existing \`ga-la-primer\`. The required work here is the five literacy questions and six article questions, followed by DATA-ENTRY-P, DATA-ENTRY-C and DATA-ENTRY-R below. Reading a source's answer is support, not evidence of an unseen attempt. The source encounter's all-five mean 2.06 is correct for its stated five-row calculation; our primary training set has only three rows and a different mean.

## From a row to a feature and a prediction

Here is the existing fixture, reproduced so the calculations can be read without moving between pages. A row is one seedling; it is not a vector operation or one variable. The outcome $y$ is the recorded weekly growth in centimetres. The feature $x$ is the numerical sunlight measurement in hours. For the prediction exercise we **stipulate** that this sunlight input is available when a prediction must be issued. The source does not establish a real collection schedule. If the intended input instead requires future measurements, the proposed deployment must change or obtain an available input.

| Seedling | Sunlight hours x | Weekly growth y (cm) | Primary role |
| --- | ---: | ---: | --- |
| A | 2 | 1.1 | train |
| B | 3 | 1.6 | test |
| C | 4 | 2.0 | train |
| D | 5 | 2.7 | test |
| E | 6 | 2.9 | train |

Taking the feature means extracting $x$ from a row; taking the target means extracting $y$. A prediction rule takes an available feature and returns a predicted growth $\\widehat y$, in cm. The row label A is an identity used to track records, not a numeric feature. A model that memorizes the letters has no stated way to handle a new seedling.

Our family of candidate rules is $f(x)=a+bx$. The intercept $a$ is in cm and the slope $b$ is in cm per sunlight hour. Multiplication $bx$ therefore has the same unit as $a$. The formula can be evaluated at zero hours, but the fixture has no zero-hour row; an algebraic intercept is not evidence for growth in darkness. Likewise, evaluating at ten hours would be an extrapolation beyond this fixture.

Call the residual $r=y-\\widehat y$, in cm. A positive residual means the rule predicted too little. The squared loss $\\ell=r^2$ is in $\\text{cm}^2$. The mean squared error on a nonempty set of $n$ rows is $\\sum r_i^2/n$, also in $\\text{cm}^2$. Squaring gives more weight to large errors. It does not decide whether overpredicting and underpredicting have equal consequences in a real garden. That cost choice would need its own decision model.

## Equations and the linear feature map

To make the line match A and C exactly, impose $a+2b=1.1$ and $a+4b=2.0$. Subtract the first equation from the second: $2b=0.9$, so $b=0.45$. Substituting in the first gives $a=0.2$. Check E separately: $0.2+0.45(6)=2.9$. Thus one line matches all three primary training rows. This is an exact property of these decimal inputs; noisy observations do not usually line up exactly.

Why are the coefficients unique? If two coefficient pairs satisfy A and C, subtract their equations: $\\Delta a+2\\Delta b=0$ and $\\Delta a+4\\Delta b=0$. Hence $2\\Delta b=0$, then $\\Delta a=0$. More generally two distinct feature values determine at most one affine line with prescribed outputs, because the same subtraction has the nonzero factor $x_2-x_1$. A third row can agree or contradict that line. This is a direct equation argument, not an application of a theorem about invertible plane-to-plane maps.

The scalar rule $f(x)=0.2+0.45x$ is **affine**, and is not a linear map from $\\mathbb R$ to $\\mathbb R$: $f(0)=0.2\\ne0$. Introduce the augmented feature $\\phi(x)=(1,x)$ and define a different map $L:\\mathbb R^2\\to\\mathbb R$ by $L(u,v)=0.2u+0.45v$. Then $f(x)=L(\\phi(x))$. The map $L$ is linear on its whole two-coordinate domain: for any $p=(p_1,p_2)$, $q=(q_1,q_2)$ and real $c$,

$$
L(p+q)=0.2(p_1+q_1)+0.45(p_2+q_2)=L(p)+L(q),
\\qquad L(cp)=cL(p).
$$

These identities follow by distributivity and prove the claim for all inputs. The feature lift $\\phi$ itself is not linear: $\\phi(0)=(1,0)$ and $\\phi(2)+\\phi(4)=(2,6)$ whereas $\\phi(6)=(1,6)$. The first coordinate keeps a constant intercept contribution, rather than another sunlight measurement. Units belong with the weights: 0.2 cm multiplies dimensionless 1, and 0.45 cm/hour multiplies hours. For algebraic linearity we use numerical coordinates in these fixed units.

The article about two output arrows explained plane-to-plane maps. Here $L$ has one output, so its coefficient row is $[0.2\\;0.45]$, a one-by-two matrix. Its two basis images are the scalars 0.2 and 0.45. The **training design** has a different job: it has three rows $(1,2),(1,4),(1,6)$ and maps a coefficient pair $(a,b)$ to the three fitted outputs. Confusing those two maps would confuse fitting a parameter with predicting a growth.

**Hand and table construction.** Make two columns headed 1 and x, and a third headed $0.2(1)+0.45x$. At x=2,4,6 the third column is 1.1,2.0,2.9. To illustrate $L$ on arbitrary pairs, use $(1,2),(1,4)$ and their sum $(2,6)$: their outputs are 1.1,2.0 and 3.1, and $1.1+2.0=3.1$. Then compare $f(6)=2.9$. This exact table and the general identities above are the complete alternative to a grid picture; no instrument is required.

## DATA-ENTRY-P — Primary prediction audit

Keep the fixed primary split **A,C,E for training; B,D for testing**. Treat this as a procedure specified for an already public teaching fixture. The test outcomes are visible here and in the original source; this is not an unseen evaluation of you or an empirical validation of a newly designed method.

Write a first portfolio that names the row unit, available feature, outcome and units; derives the affine coefficients from A and C and checks E; states the augmented feature and proves $L$ linear; and compares the line with the mean of **only the training outcomes**. Give predictions, signed residuals, squared losses and both training and testing MSEs. Divide each MSE by its own row count. Before the probability calculation, adopt this explicit finite drawing rule: **J is B or D, each with probability 1/2**. Compute expected squared loss for one draw J under each fixed predictor, and the probability that the line's absolute residual exceeds 0.2 cm. End with one sampling limit and one causal limit.

### DATA-ENTRY-P — Complete public model

The row unit is one hypothetical seedling. The stipulated available input is sunlight in hours; the outcome is weekly growth in cm. The coefficient equations and feature-map proof are given above, yielding $a=0.2$ and $b=0.45$. The training-only constant baseline is $(1.1+2.0+2.9)/3=2$ cm. It is fixed before evaluating the test role; using 2.06 from all five rows would allow test outcomes to influence the baseline.

| P row | Role | Observed cm | Line prediction cm | Line residual cm | Line square cm² | Baseline prediction cm | Baseline residual cm | Baseline square cm² |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| A | train | 1.1 | 1.1 | 0 | 0 | 2 | -0.9 | 0.81 |
| C | train | 2.0 | 2.0 | 0 | 0 | 2 | 0 | 0 |
| E | train | 2.9 | 2.9 | 0 | 0 | 2 | 0.9 | 0.81 |
| B | test | 1.6 | 1.55 | 0.05 | 0.0025 | 2 | -0.4 | 0.16 |
| D | test | 2.7 | 2.45 | 0.25 | 0.0625 | 2 | 0.7 | 0.49 |

Training line MSE is $0/3=0$; training baseline MSE is $(0.81+0+0.81)/3=0.54$. Test line MSE is $(0.0025+0.0625)/2=0.0325$; test baseline MSE is $(0.16+0.49)/2=0.325$. All four MSEs use $\\text{cm}^2$. No parameter-count correction belongs in these descriptive prediction-loss averages: they average the actual included losses.

Under the **stipulated** law $P(J=B)=P(J=D)=1/2$, the random loss takes two possible values. Consequently

$$
\\mathbb E[\\ell_f(J)]=\\tfrac12(0.0025)+\\tfrac12(0.0625)=0.0325,
\\qquad \\mathbb E[\\ell_{\\rm base}(J)]=\\tfrac12(0.16)+\\tfrac12(0.49)=0.325.
$$

This expectation equals the two-row mean because the law assigns equal probabilities. If the law instead gave B probability $p$ and D probability $1-p$, with $0\\le p\\le1$, the line's expectation would be $0.0025p+0.0625(1-p)$. A probability model includes its weights, not just its support. In the stipulated equal-weight law, only D has absolute line residual greater than 0.2 cm, so that event has probability $1/2$.

These are exact expectations for a draw from two **fixed public records**. There is no supplied law for drawing a new seedling, no random sampling design, confidence interval or population error guarantee. Repeating draws from this two-record law would repeat these known outcomes; it would not add new plants. A zero training loss does not remove measurement error, model uncertainty or season changes. Water and variety may affect both sunlight and growth, so the fitted slope is not the causal effect of adding sunlight.

## DATA-ENTRY-C — Changed information and exact constraints

Keep the original outcomes and primary split. Change only the available feature: the instrument now reports the broad band $z=1$ for **every sunlight value from 2 through 6 hours**, including the endpoints. All five original seedlings therefore have the same reported feature. Fit candidates $h(z)=a+bz$. The band code z is dimensionless; both changed coefficients a and b carry cm (b per unit band code), so h(z) is in cm. Do not manufacture extra plants or replace the original measurements.

In a new portfolio: first ask what coefficient pairs exactly fit **C alone**. Then ask whether any pair exactly fits A,C,E together. If there is no exact interpolant, decide whether this also prevents a least-squares fit. Derive the full family of least-squares minimizers and its training MSE. Evaluate that family's predictions on B,D under the primary finite law. Explain what is and is not identifiable, and diagnose the proposed repair “add end-of-week growth as a feature for a prediction issued at the start of that week.”

### DATA-ENTRY-C — Complete public model

The changed-feature rows below retain the original seedlings and outcomes. They are a recoding of the same fixture, not an independent sample.

| C row | z | Observed cm | Role |
| --- | ---: | ---: | --- |
| A | 1 | 1.1 | train |
| C | 1 | 2.0 | train |
| E | 1 | 2.9 | train |
| B | 1 | 1.6 | test |
| D | 1 | 2.7 | test |

C alone imposes $a+b=2$, giving infinitely many pairs $(a,b)=(2-t,t)$ for real $t$. For example $(2,0)$ and $(1,1)$ agree at z=1 but give different values at z=0. Repeating C's record would supply the same equation, not another independent constraint or another seedling. All rows of this design are $(1,1)$: the two columns are equal, their span has dimension one, and the coefficient change $(1,-1)$ changes no fitted value. This is rank one and coefficient nonidentification, expressed in the small system itself.

A and C together would demand both $a+b=1.1$ and $a+b=2.0$. Subtraction gives $0=0.9$, an impossibility. Adding E cannot repair it. Thus no affine rule in this changed feature exactly interpolates the three training outcomes. Repeated feature values with equal outcomes can leave coefficients nonunique; repeated feature values with unequal outcomes can make exact interpolation inconsistent. Repetition somewhere in a larger dataset does not by itself force nonuniqueness: another distinct feature value may identify the coefficients. Check the whole system.

Least squares asks a different question: minimize squared mismatch rather than force each mismatch to zero. Put $s=a+b$. Direct expansion around the training mean 2 gives

$$
\\frac{(1.1-s)^2+(2.0-s)^2+(2.9-s)^2}{3}
=0.54+(s-2)^2.
$$

The nonnegative last square is minimized exactly when $s=2$. Therefore least-squares fits **exist**, with every pair $(a,b)=(2-t,t)$ a minimizer. The coefficients are nonunique; the fitted value at the observed feature z=1 is uniquely 2 cm. Their training MSE is 0.54, and their B,D loss is the baseline loss 0.325 under the primary equal-weight law. At an unobserved feature z=0 they would predict $2-t$, so those predictions are not identified by these data. A future band would need a defined encoding and new evidence; choosing $t=0$ is a convention, not a discovery about it. For a general finite real linear least-squares system, a minimizer exists because the attainable output vectors form a finite-dimensional subspace and a nearest vector exists; its coefficients need not be unique. The displayed square identity proves existence directly for this case, without assuming exact consistency.

Adding the target $y$ itself as a feature would allow the rule “predict y” and make every displayed residual zero. End-of-week growth is unavailable at the stipulated start-of-week prediction time. That is **future-feature leakage**, not an answer to rank deficiency or inconsistent interpolation. The repair is to restrict features to information actually available when predicting, retain the banded model's honest residuals, and either obtain a better available measurement or state the limitation. A penalty or a chosen coefficient convention can select among fits but cannot recover lost sunlight distinctions from this band alone.

## DATA-ENTRY-R — Later public role swap

On a later sitting chosen by you, use the **same already public fixture** but train on **B,D** and test on **A,C,E**. Return to the original numerical sunlight feature x. Record the date and disclose which sources, earlier portfolios and public models you have seen. This later return cannot establish a verified delay, unseen work or independent performance. Its changed target is a uniform draw from A,C,E rather than a draw from B,D; it is not a second population study or additional independent evidence.

Write the coefficient equations from B,D, solve and check them, calculate their training-only mean baseline, and give full training and test loss tables. Define the new finite law explicitly and recompute both expected losses. Explain why the earlier primary expectation is not automatically the answer to this new question. Finally distinguish the affine scalar rule from its linear augmented-feature map and revisit one consequence of the banded feature.

### DATA-ENTRY-R — Complete public model

B and D impose $a+3b=1.6$ and $a+5b=2.7$. Subtracting yields $2b=1.1$, hence $b=0.55$ and $a=-0.05$. Substitution checks $-0.05+0.55(3)=1.6$ and $-0.05+0.55(5)=2.7$. The training-only baseline is $(1.6+2.7)/2=2.15$ cm. There is no requirement to reuse the primary coefficients when the fitting rows have changed.

| R row | Role | Observed cm | Line prediction cm | Line residual cm | Line square cm² | Baseline prediction cm | Baseline residual cm | Baseline square cm² |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| B | train | 1.6 | 1.6 | 0 | 0 | 2.15 | -0.55 | 0.3025 |
| D | train | 2.7 | 2.7 | 0 | 0 | 2.15 | 0.55 | 0.3025 |
| A | test | 1.1 | 1.05 | 0.05 | 0.0025 | 2.15 | -1.05 | 1.1025 |
| C | test | 2.0 | 2.15 | -0.15 | 0.0225 | 2.15 | -0.15 | 0.0225 |
| E | test | 2.9 | 3.25 | -0.35 | 0.1225 | 2.15 | 0.75 | 0.5625 |

Training line MSE is $0/2=0$ and training baseline MSE is $(0.3025+0.3025)/2=0.3025$. Test line MSE is $(0.0025+0.0225+0.1225)/3=59/1200$, approximately 0.0491667. Test baseline MSE is $(1.1025+0.0225+0.5625)/3=0.5625$. Each is in $\\text{cm}^2$.

Stipulate $P(K=A)=P(K=C)=P(K=E)=1/3$. Then $\\mathbb E[\\ell_{f_R}(K)]=59/1200$ and $\\mathbb E[\\ell_{{\\rm base},R}(K)]=0.5625$. These are new finite expectations with three equally weighted possibilities. The primary law had two other possibilities, different fitted rules and denominator 2. Comparing their bare numbers cannot establish improvement over time on one common deployment target. The return's predictions at A and E also extrapolate beyond its training x range [3,5], even though those rows remain part of the public fixture.

The return scalar rule has $f_R(0)=-0.05$, so it too is affine rather than linear. Its augmented-feature map $L_R(u,v)=-0.05u+0.55v$ is linear by the same distributive proof. The banded feature would still collapse distinctions and could not force different outcomes at the same z to agree exactly. None of these calculations proves a causal effect or population accuracy.

## Feedback, records and continuation

Keep separate dated text files for every portfolio. For example use \`2026-11-03-DATA-ENTRY-P-first.txt\`, \`2026-11-03-DATA-ENTRY-P-comparison.txt\` and \`2026-11-03-DATA-ENTRY-P-revised.txt\`; use your actual dates and corresponding C/R filenames. In each first file, state support already seen. In the comparison file, identify the public key and the exact line of reasoning you would change. In the revised file, rewrite the reasoning and give an original-equation or row check. Save the first file before comparing and do not overwrite it. Use new version names if you revise again. Ordinary editable files are not automatically immutable or independently timestamped.

The shared notebook can hold a short reflection, but one mutable note is not a three-version worksheet portfolio. Keep these files yourself and include them in your own backup routine. These personal worksheets are separate from recorded Practice attempts. A study checkmark remains your report that you studied something; neither a checkmark nor the comparison is a grade.

Use this feedback as a decision about the next repair, without adding points:

| Consequential error | Discriminating check | Worked repair and evidence to keep |
| --- | --- | --- |
| Uses 2.06 as the primary baseline | Which outcomes entered the sum? | Cross out B,D from the fitting calculation; $(1.1+2+2.9)/3=2$. Keep both baseline computations labelled by their different row sets. |
| Calls $0.2+0.45x$ linear because its graph is straight | What happens at zero? | $f(0)=0.2$ disproves scalar linearity. State $\\phi(x)=(1,x)$ and prove the different map $L$ preserves addition and scaling. |
| Divides primary test square sum by 5 or by a parameter correction | Which losses are actually averaged? | There are two test losses, so $0.065/2=0.0325\\ \\text{cm}^2$. Training and test denominators answer separate questions. |
| Treats $0=0.9$ as a coefficient value, or says least squares cannot exist | Is exact equality the same requirement as minimum mismatch? | Reject exact interpolation; expand the changed mean loss to $0.54+(a+b-2)^2$. Exhibit $(2,0)$ and $(1,1)$ as different minimizing coefficient pairs. |
| Repairs a fit using future growth | Was that feature available when the prediction was issued? | Remove the future target feature. Keep its attractive zero error as a labelled leakage counterexample, not as a competing deployable result. |
| Reports a population or causal claim from the finite expectation | What random variable or intervention was actually specified? | State the finite draw law and its support. No new-plant sampling law or intervention was supplied; replace the stronger claim with the exact finite comparison. |
| Reuses the primary expectation after the role swap | Which records now carry probability mass, and which fitted rule is evaluated? | Recompute under uniform A,C,E with the B,D-fitted line; keep $59/1200$ and the denominator 3 beside the original two-row calculation. |

You are ready to continue this route when you can explain all three portfolios and repair a missed row or equation without treating the public answer as evidence of prior success. For a later, substantially more demanding route, [Mathematics for Machine Learning](#/item/course-mathematics-for-machine-learning) names additional linear algebra, probability, calculus and optimization preparation. Completing this entry course does not supply all of it. The present course stops at finite rows, elementary equations, an explicit feature map and finite probability weights.
`;export{e as default};