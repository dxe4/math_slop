var e=`---
id: course-foundations-advanced
title: "Numeracy, Measurement, and Evidence: Advanced Foundations"
level: advanced-undergraduate
estimated_minutes: null
license: CC BY-SA 4.0
---

# Numeracy, Measurement, and Evidence: Advanced Foundations

<!-- euler-course-route -->

## Current course route

This is an Outline seminar in a selected theme. Use its [course page](/courses/atlas-foundations-advanced/) for the preparation courses, then attempt the mathematical investigations below. A general graduate chapter syllabus has not yet been assigned.

Preparation courses: [Statistics I: data and inference](/courses/atlas-statistics-data-decisions/) · [Introduction to proof](/courses/atlas-proof-foundations/).

The earlier mathematical explanations, proofs, assignments and complete solutions remain below with their original task identities. Their first-attempt, comparison and correction requirements still apply when you choose that earlier work. Existing notes and study marks keep their original scope.

A correct number can answer the wrong question. A display reading is not always a length, two written fractions may refer to different units, and the same data support different averages when their targets differ. Explaining these distinctions requires proof as well as calculation. Interpreting someone else's explanation adds another uncertainty: the visible line need not reveal why it was written.

This course develops **numeracy in uncertainty, data and teaching, with repair of proof readiness**. Work progresses from quantities and references through positional notation, fractions as measures, weighted data and a finite probability model, then joins those ideas in three complete teaching portfolios. The original mixture and research-methods cases supply precise source comparisons; the new teaching below extends to other mathematical contexts. All quantities, responses and datasets here are authored fixtures. No learner was recruited, observed or diagnosed, and no teaching effectiveness is established.

This Outline seminar has no complete study-time estimate. The native Quantity course's 420-minute estimate, the Methods page's 240-minute overview and its separate 570-minute complete-programme allocation retain their own stated scopes. None is an estimate for this course or an additive total. Count overlapping work once, record actual help and model exposure, and allow separate time for repair and the elapsed return. Programming is optional for these supplied exact calculations. Public models, study marks and self-review are not grades, verified retention, a qualification or an unseen assessment.

The frontmatter licence covers this newly authored text. Linked readings retain their attribution and terms.

## Entry, selected sources and preparation

Bring whole-number operations, signed quantities and elementary fractions. The lessons below teach the general algebra, finite probability and proof moves they use. A matrix or calculus course is not a hidden prerequisite. For quantified claims or induction needing repair, use [Lucent's logic and proof refresher](/lucent/web/#/course/refresher/logic-proof), especially its written exercises with inline solutions. Preserve the difference between an arbitrary object and a tested example.

Answer before comparing these five entry keys:

1. Explain why $205=2(100)+0(10)+5$. **Key:** positions encode powers of ten; zero retains the missing tens position. Removing it changes the numeral's place assignments.
2. Compare $5/8$ and $3/4$ of the same metre. **Key:** $3/4=6/8$, so $5/8<3/4$; common-sized pieces make the order comparison meaningful.
3. Does doubling the numeral on an instrument always double the physical quantity? **Key:** not if its scale has a nonzero offset; specify and invert the measurement relation first.
4. Is a deterministic compatibility interval a 95% confidence interval? **Key:** no probability law or repeated sampling has been supplied by a feasible set alone.
5. Does a correct subtraction plus “I just borrowed” identify the author's understanding? **Key:** it establishes that answer, while remembered procedure, quantity-preserving reasoning and difficulty expressing it remain rival explanations. Ask for a regrouping with a quantity check and record the prompt.

Follow the selection in this table before the new lessons. The exact public keys remain in their native readers.

| Stage | Required selection and exact key | What the selection establishes |
| --- | --- | --- |
| S1. Quantity and proof | [Quantity, Evidence, and Teaching](#/item/course-quantity-evidence-and-teaching), Sessions 1–4: first task Questions 1–4, both monotonicity proofs, sharp uncertainty solution, four D/U/A/I response analyses, worked Q/U/J/B profile, changed task and later return, with their full adjacent solutions | References, units, positivity, attainable bounds and task-specific response repair. For original preparation use [Formulas from Science](#/item/book-algebra-from-stories?chapter=formulas-from-science), Exercise 4 and Solution, and [Inequalities and Regions](#/item/book-algebra-from-stories?chapter=inequalities-and-regions), Exercises 1, 2 and 5 with Solutions |
| S2. Teaching interpretation | [Learning progressions are hypotheses](#/item/book-teaching-for-mathematical-understanding?chapter=learning-progressions), all four practice exercises and Solutions; [prerequisite diagnostic](#/item/book-teaching-for-mathematical-understanding?section=front%3Aprerequisite-diagnostic), Questions 1–8 and Answers | Regrouping preserves a quantity; compensation preserves a difference. A successful or unsuccessful response does not establish a fixed stage. The diagnostic's interval and association questions prepare the Methods selection |
| S3. Methods selection | [Mathematics Education Research Methods and Claim Boundaries](#/item/course-mathematics-education-research-methods), Entry diagnostic/map, Sections 1–6, and all five exercises in Section 10 with their Solutions | Question/construct/design alignment, sampling and measurement, assignment units, interval restraint, qualitative transfer and dependent reports. Introductory inference and learning-progression preparation remain required for these interpretations. If the diagnostic's interval/association keys need repair, select the [statistics course](#/item/course-statistics-data-decisions), entry diagnostic, Modules 1–5 and Practice 1–3 with Answers; that selection does not assign its full R work or capstone |
| S4. Compare distinct probability warrants | Quantity Sessions 5–6: reconstruct Protocol P's 20 allocation rows and Q's six rows, full models and audit repair; compare Methods ED-METHODS-P001's Complete primary model and feedback, ED-METHODS-P002's Complete changed model and feedback, and ED-METHODS-R001's audit and Complete return model | P's class contrast 2, student-weighted contrast 4 and sharp-null tail 14/20 differ from Q's 2, 3 and 4/6. Voluntary assignment plus missing C in [-2,2] gives only the stated attainable sensitivity ranges [1,3] and [2,4]; it does not inherit randomization. These existing cases are comparisons, not a new intervention |
| S5. New joined work | Lessons 1–5 below; FND-ADV-Q01–Q12; all eight fields of FND-ADV-P001/C001/R001 and their complete public models | Measurement, representation, fraction measure, weighted data, finite sampling and response interpretation across changed contexts, followed by specific repair and a later return |

This is a named selection of Methods, not completion or waiver of its ten-field final project and ED-METHODS-P001/P002/R001 programme. Its full route retains all stated preparation, allocation and requirements. The wider statistics course likewise retains its source work and programming requirements when that whole course is chosen. Prior completed source work is cited with its actual exposure instead of repeated under a fresh label.

## Lesson 1 — Measurement, calibration and deterministic uncertainty

Suppose an instrument is **stipulated** to obey

$$r=z+sL,\\qquad s>0,$$

where $L$ is length in centimetres, $r$ is a display reading in ticks, $z$ is a fixed zero offset in ticks and $s$ is a fixed number of ticks per centimetre. The model gives $L=(r-z)/s$. It is an assumption of this exercise, not an empirical finding that an actual instrument is linear, accurate or stable.

**FND-ADV-T01 — Order and bounds.** With fixed $z,s$, if $r_1<r_2$, subtraction gives $L_2-L_1=(r_2-r_1)/s>0$. Thus a closed feasible reading interval $r\\in[r_-,r_+]$, with $z\\le r_-\\le r_+$, gives exactly

$$L\\in[(r_--z)/s,(r_+-z)/s].$$

Every length in that interval produces an allowed reading by the same affine relation; in particular both endpoints are attained. The bound is sharp for that feasible set. If a length model additionally requires $L\\ge0$ and an allowed reading is below $z$, intersect the inverse interval with $[0,\\infty)$; an empty intersection rejects the assumptions. Do not retain an impossible negative length as an attainable endpoint.

Differences have no offset: $r_2-r_1=s(L_2-L_1)$. Ratios generally do. When $L_2\\ne0$ and $z+sL_2\\ne0$, positive or negative signs aside, equality of the two defined ratios satisfies

$$\\frac{z+sL_1}{z+sL_2}=\\frac{L_1}{L_2}
\\quad\\Longleftrightarrow\\quad z(L_2-L_1)=0.$$

Cross multiplying the nonzero denominators and cancelling $sL_1L_2$ proves the equivalence. Distinct lengths therefore preserve their ratio in the display only if $z=0$. Changing centimetres to millimetres multiplies the length's numeral by ten while preserving the physical length; it is different from adding a physical length or changing the display's zero.

If $s=0$, all lengths give reading $z$ and inversion fails. If $s<0$, inversion exists but the interval endpoints reverse order. If $z$ or $s$ are uncertain, specify their joint feasible set: independently varying a slope and intercept derived from the same calibration observations may introduce impossible combinations.

Rounding also needs a convention. Under nearest-integer rounding with exact half-ties sent upward, a displayed integer $d$ means $d-1/2\\le r<d+1/2$. Its upper endpoint is a supremum, not an attained maximum. Neither a closed compatibility interval nor that half-open rounding interval has a probability distribution by itself.

## Lesson 2 — Place value, division and quantity-preserving algorithms

For an integer base $B\\ge2$, a finite digit string $d_m\\ldots d_0$ represents

$$V_B(d_m\\ldots d_0)=\\sum_{j=0}^m d_j B^j,$$

where each canonical digit satisfies $0\\le d_j<B$. Leading zeros are excluded for a canonical positive numeral; zero is the one-character numeral 0. A fixed-width padded string can represent the same number, and is deliberately not called a distinct canonical representation.

**FND-ADV-T02 — Existence and uniqueness.** For every nonnegative integer $n$, take the largest integer $q$ in the finite set $\\{0,\\ldots,n\\}$ such that $Bq\\le n$. Put $d=n-Bq$. Maximality gives $0\\le d<B$. For $n>0$, $q\\le n/2<n$, so recursively dividing $q$ terminates and yields a finite expansion. To prove uniqueness, reduce two expansions modulo $B$. Their last digits differ by a multiple of $B$ with absolute value less than $B$, hence are equal. Subtract that digit, divide by $B$ and repeat. Excluding leading zeros completes uniqueness. This is an induction argument about every nonnegative integer, not evidence from a few decimal examples.

**FND-ADV-T03 — Regrouping.** For $j\\ge1$, replacing neighboring coefficients $c_j,c_{j-1}$ by $c_j-1,c_{j-1}+B$ preserves value because

$$c_jB^j+c_{j-1}B^{j-1}
=(c_j-1)B^j+(c_{j-1}+B)B^{j-1}.$$

The intermediate coefficients need not be canonical digits. For subtraction, such exchanges preserve the minuend; subtracting the subtrahend's positional sum then preserves the intended difference. For example $(4,0,3,2)$ in base ten can become $(3,9,12,12)$, permitting subtraction of $(1,7,8,5)$ to get $(2,2,4,7)$. These tuples list ordinary integer coefficients, not new multi-character digits.

Compensation has another invariant: $(a-t)-(b-t)=a-b$. It changes both operands while preserving their difference. Explaining compensation alone does not explain why one ten may become ten ones while the minuend itself stays fixed. A correct answer reached by counting up is also valid; ask for the invariant appropriate to the method actually used.

For finite decimal fractions extend the value sum to a specified finite number of negative powers. Thus $0.25=25/100=1/4$ and appending a trailing zero does not change value. This finite convention does not prove a statement about an infinite decimal string; infinite notation requires its own limiting definition. No infinite-decimal theorem is being smuggled into the finite digit proof.

## Lesson 3 — Fractions as measures and units larger than one

Choose a physical reference unit. A centimetre length $L\\ge0$ measured using a tile of length $u>0$ centimetres has numerical measure $q=L/u$. The measure may exceed one. Partitioning each centimetre into $b$ equal pieces makes $a/b$ centimetres $a$ such pieces; multiple reference units are available when $a>b$.

**FND-ADV-T04 — Scaling and division.** If $L=a/b$ and $u=c/d$ centimetres with a nonnegative integer $a$ and positive integers $b,c,d$, then

$$q=\\frac{a/b}{c/d}=\\frac{ad}{bc}.$$

Indeed $(ad/(bc))(c/d)=a/b$; multiplying a candidate count by the positive tile length is an inverse check and establishes its uniqueness. Replacing $u$ by $ku$ with $k>0$ divides the numerical measure by $k$ and preserves $qu=L$. This is a change of measuring unit, not a change in the object.

For positive integer $N$ full tiles fit exactly when $Nu\\le L$. More generally let $N=\\lfloor q\\rfloor$, the unique nonnegative integer with $N\\le q<N+1$. Then

$$L=Nu+e,\\qquad 0\\le e<u.$$

For existence choose an integer $M>q$, then take the largest integer in the finite set $\\{0,\\ldots,M\\}$ not exceeding $q$. For the rational measures here, a positive-integer numerator plus one already supplies such a bound; the general real formulation uses the elementary Archimedean property. Uniqueness follows because two distinct such integers differ by at least one. The case $L=0$ has $N=e=0$. If $q$ is an integer, the remainder is zero; if $u=0$ no numerical measure $L/u$ is defined. For an uncertain $L\\in[L_-,L_+]$ and fixed $u>0$, the exact count interval is $[L_-/u,L_+/u]$, with feasible endpoints retained.

For fractions of a **common** unit and $b,d>0$,

$$a/b<c/d\\quad\\Longleftrightarrow\\quad ad<bc.$$

Multiplying by $bd>0$ proves the equivalence. At equality the same proof gives $ad=bc$. With a negative denominator the corresponding multiplication reverses order; normalize its sign first. One half of a two-metre strip and one half of a one-metre strip are different lengths. Adding their bare part-fractions as if the reference whole were unchanged loses that information. Conversely $1/2+1/3=5/6$ is valid when the addends are numbers measured in the same reference unit.

## Lesson 4 — Data targets, weights and changes of composition

Suppose two groups have positive sizes $n_1,n_2$ and means $y_1,y_2$. The equal-group mean $G=(y_1+y_2)/2$ and the individual-weighted mean $W=(n_1y_1+n_2y_2)/(n_1+n_2)$ answer different questions. Multiplying out gives the useful identity

$$W-G=\\frac{(n_1-n_2)(y_1-y_2)}{2(n_1+n_2)}.$$

Thus $W=G$ exactly when the sizes are equal or the means are equal. Empty groups do not have an ordinary group mean, so this statement assumes positive sizes. Group means and sizes determine the aggregate mean but do not reconstruct individual observations, their variation or a causal effect.

A change of composition can even reverse comparisons. In this wholly synthetic table, X has the larger success proportion within each named stratum:

| Stratum | X successes | X total | Y successes | Y total |
| --- | --- | --- | --- | --- |
| Easy | 9 | 10 | 80 | 100 |
| Hard | 1 | 10 | 0 | 1 |

The easy proportions are $9/10>4/5$ and the hard proportions $1/10>0$. Yet pooling gives $X=10/20=1/2<80/101=Y$. There is no contradiction: Y's pooled result gives its easier stratum weight $100/101$, whereas X weights its two strata equally. Standardizing both to equal stratum weights gives $X=1/2$ and $Y=2/5$, recovering a comparison with a common composition. The data alone do not establish that choosing X causes success, nor whether these strata are adequate for a causal argument. Means and percentages always need their denominators and target.

## Lesson 5 — A finite probability model and what coverage means

Fix $N\\ge2$ labelled objects with fixed real values $y_1,\\ldots,y_N$. Choose **exactly** $k$ labels uniformly from all $\\binom Nk$ subsets, where $1\\le k\\le N$. This is simple random sampling without replacement of objects, not random assignment of a teaching method. Define $\\mu=N^{-1}\\sum y_i$, the sample mean $\\overline Y$ and $S^2=(N-1)^{-1}\\sum(y_i-\\mu)^2$. Expectation is the probability-weighted mean over this finite list of subsets; variance is $E[(\\overline Y-E\\overline Y)^2]$.

**FND-ADV-T05 — Mean and variance under this design.** Let $I_i$ indicate whether label $i$ is selected. Counting subsets gives

$$E I_i=\\frac{k}{N},\\qquad E(I_iI_j)=\\frac{k(k-1)}{N(N-1)}\\quad(i\\ne j).$$

For $k=1$ the joint event is empty, agreeing with zero in the second expression. Linearity, proved simply by exchanging two finite sums, gives $E\\overline Y=\\mu$. Put $x_i=y_i-\\mu$, so $\\sum x_i=0$ and $\\sum_{i\\ne j}x_ix_j=-\\sum x_i^2$. Expanding the square yields

$$\\begin{aligned}
\\operatorname{Var}(\\overline Y)
&=\\frac1{k^2}\\left\\{\\frac{k}{N}\\sum_i x_i^2+
\\frac{k(k-1)}{N(N-1)}\\sum_{i\\ne j}x_ix_j\\right\\}\\\\
&=\\frac{N-k}{kN(N-1)}\\sum_i x_i^2
=\\frac{1-k/N}{k}S^2.
\\end{aligned}$$

The inclusion indicators are dependent unless degenerate: their covariance is $-k(N-k)/[N^2(N-1)]$ for distinct labels. Treating draws as independent would omit the finite-population correction. If $k=N$, the sample is the whole population and the variance is zero. Constant populations also give zero. For $N=k=1$ the mean is known and variance is zero directly; $S^2$ above is undefined and is not used. A sample with $k=0$ has no ordinary mean and is refused.

For a prespecified $h\\ge0$, consider the interval rule $J(S)=[\\overline y_S-h,\\overline y_S+h]$. Its exact **coverage for this fixed population and sampling design** is

$$\\frac{\\#\\{S:|\\overline y_S-\\mu|\\le h,\\ |S|=k\\}}{\\binom Nk}.$$

Ties count because the intervals are closed. This is repeated-draw probability over the sampling subsets, not a probability assigned to the already fixed $\\mu$ after seeing one subset. A rule may have coverage $2/3$ for one population and $1/3$ for another; neither is a general 95% procedure. Choosing $h$ after inspecting the data changes the procedure. A purposeful selection has no uniform-subset probabilities unless an additional genuine probability mechanism is supplied. Complete finite enumeration is exact arithmetic under the design, not empirical population representativeness or a causal effect.

## Twelve checkpoints with complete feedback

Attempt each before reading its Model. Name a failed hypothesis before changing a theorem.

**FND-ADV-Q01.** In $r=2+3L$, compare readings for $L=5,10$ and their ratio. **Model:** readings are 17 and 32, whose ratio $17/32$ differs from $1/2$. Differences give $32-17=3(10-5)=15$. Subtracting offset first recovers the length ratio. The zero length has reading 2.

**FND-ADV-Q02.** A reading rounded to integer 5 uses half-ties upward; $r=2+3L$. Give the exact compatible lengths and an endpoint check. **Model:** $9/2\\le r<11/2$, so $5/6\\le L<7/6$. The lower endpoint is allowed and the upper is excluded. This is a deterministic half-open set with an attained minimum and an unattained supremum; no coverage percentage follows.

**FND-ADV-Q03.** Prove that changing coefficients $(4,0,3,2)$ to $(3,9,12,12)$ in base ten preserves value, then compare compensation. **Model:** borrow one ten, one thousand and one hundred in succession: $(4,0,3,2)\\to(4,0,2,12)\\to(3,10,2,12)\\to(3,9,12,12)$. Each move is T03, so both sums are 4032. Compensation instead changes $4032-1785$ to $3032-785$ and preserves the difference, not the minuend.

**FND-ADV-Q04.** Is $00101_2$ a second canonical expansion of five? Does the finite theorem prove anything about $0.999\\ldots$? **Model:** $00101_2=1(4)+0(2)+1=5$ is a padded version of canonical $101_2$, not a second canonical numeral. The infinite string has no value defined by the finite sum alone; a limiting definition and separate proof are needed. The finite uniqueness theorem has not failed.

**FND-ADV-Q05.** Measure $5/4$ metres using a $1/3$ metre tile. **Model:** $(5/4)/(1/3)=15/4$ tiles, so three full tiles occupy one metre and the remainder is $1/4$ metre, less than $1/3$. Multiplying the numerical measure by the tile length recovers $5/4$. A measure exceeding one is meaningful because the reference unit may be repeated.

**FND-ADV-Q06.** Compare $-1/2$ and $1/(-3)$, and audit a claim that $1/2+1/3=2/5$. **Model:** normalize the second to $-1/3=-2/6$; $-1/2=-3/6<-2/6$. The usual positive-denominator comparison is now applicable. For the sum of numbers of the same unit, sixths give $3/6+2/6=5/6$, not $2/5$. If they referred to different physical wholes, name and convert those wholes first.

**FND-ADV-Q07.** Show exactly when the two means in Lesson 4 agree. **Model:** common denominators give $2(n_1y_1+n_2y_2)-(n_1+n_2)(y_1+y_2)=(n_1-n_2)(y_1-y_2)$. The denominator $2(n_1+n_2)>0$, so equality occurs precisely when one factor vanishes. If a group is empty its mean must not silently be invented as zero.

**FND-ADV-Q08.** Explain the pooled reversal in the easy/hard table. **Model:** within-stratum differences are $1/10$ in both strata. The pooled weights differ, giving $1/2<80/101$; cross multiplication gives $101<160$. Equal-stratum standardization gives X $1/2$, Y $(4/5+0)/2=2/5$. These are distinct descriptive targets, and neither comparison establishes causation or a learner trait.

**FND-ADV-Q09.** For four labelled values $(1,1,3,3)$, list every two-object sample mean and compute its design variance. **Model:** AB,AC,AD,BC,BD,CD give $1,2,2,2,2,3$, each probability $1/6$. Their mean is 2 and mean squared deviation from 2 is $(1+0+0+0+0+1)/6=1/3$. The population $S^2=4/3$ gives $(1-2/4)(4/3)/2=1/3$, checking the general formula.

**FND-ADV-Q10.** For Q09, find coverage when $h=1/2$ and when $h=1$, including equality. **Model:** four centers equal 2, so half-width $1/2$ covers $4/6=2/3$. With half-width 1 all six cover, including centers 1 and 3 at equality. Neither result makes the half-width rule a calibrated population-independent 95% rule. With $k=4$ the mean is exactly 2 and even half-width zero covers with probability one under the census design.

**FND-ADV-Q11.** A synthetic response gives the correct $43-18=25$ but says “the four just changes to three.” Give two hypotheses, a follow-up and branch repairs. **Model:** remembered syntax and quantity-preserving regrouping with limited verbal expression both fit the line; an omitted explanation is another possibility. Ask for $43=4(10)+3=3(10)+13$ using text, a static diagram or objects, then $52-27$. If value is preserved but notation is not connected, connect the representation to the columns. If the exchange changes the total, repair conservation. A valid counting-up explanation is accepted; it supports a different invariant and does not by itself answer the exchange question. Record prompts; no permanent stage follows.

**FND-ADV-Q12.** A memo says “our chosen pair hit the population mean, so the next pair has 95% coverage and the explanation routine works.” **Model:** one hit establishes that finite comparison only. A repeated-draw probability needs the actual selection law and interval rule; a causal claim needs a separate intervention, design and measurement argument. A purposeful pair supplies neither. Return to Methods' sampling ledger and its null/qualitative/dependent-report exercises, then rewrite the strongest supported sentence without inventing new observations.

## Mixed primary, changed and later-return tasks

Use only the row named by the task. All readings and intervals below are stipulations in the exercise; calibration constants and tile lengths are exact. The reading interval is closed and every point in it is feasible. Objects A–D are labelled physical reference objects, not people or classes.

| Form | r | z | s | u cm | r lower | r upper | Base | Minuend | Subtrahend |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FND-ADV-P001 | 47 | 2 | 3 | 2/3 | 46 | 48 | 10 | 4032 | 1785 |
| FND-ADV-C001 | 35 | -1 | 4 | 3/4 | 34 | 36 | 8 | 4032 | 1575 |
| FND-ADV-R001 | 26 | 2 | 4 | 4/5 | 25 | 27 | 2 | 10010 | 01101 |

| Form | Object A | Object B | Object C | Object D | Sample size | Interval half-width | Displayed pair | Selection rule |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FND-ADV-P001 | 1 | 1 | 3 | 3 | 2 | 1/2 | AB | uniform |
| FND-ADV-C001 | 0 | 2 | 2 | 4 | 2 | 1/2 | AB | uniform |
| FND-ADV-R001 | 1 | 3 | 5 | 7 | 2 | 1/2 | AD | purposeful |

The object values are fixed centimetre measurements given for the finite sampling exercise; they are not reconstructed from one instrument reading. Uniform means each of the six labelled pairs has probability $1/6$. The return's purposeful AD is a selection stipulated without a random mechanism. For that return enumerate the hypothetical uniform rule for comparison, then state why it is not the actual selection law.

| Form | Group 1 size | Group 2 size | Group 1 mean | Group 2 mean |
| --- | --- | --- | --- | --- |
| FND-ADV-P001 | 2 | 6 | 3 | 7 |
| FND-ADV-C001 | 3 | 1 | 2 | 10 |
| FND-ADV-R001 | 1 | 3 | -2 | 2 |

These group summaries are a separate synthetic descriptive dataset; a negative mean may denote signed change. Do not combine their units with an object length or invent individual observations from a group average.

### Eight required fields for each portfolio

1. **Measurement:** invert the row's calibration, derive its exact compatible length interval with endpoint attainment, and explain a failed raw-reading ratio claim using T01.
2. **Place value and proof:** evaluate both finite base numerals, perform subtraction with value-preserving coefficient exchanges, state its canonical result and inverse check, and reconstruct T02's existence/uniqueness argument.
3. **Fraction measure:** find $q=L/u$, the number of full tiles and the physical remainder; multiply back and derive the exact uncertain-count interval. State the positivity/common-unit conditions and the zero/remainder equality case.
4. **Finite data and probability:** enumerate all six sample means in label order AB,AC,AD,BC,BD,CD; derive the population mean, $S^2$, design mean/variance and the half-width rule's exact uniform-design coverage including ties. Give the displayed interval and whether it contains the fixed mean. For the return distinguish the hypothetical uniform comparison from actual purposeful selection.
5. **Weights and targets:** derive the equal-group and individual-weighted means and their difference, reconstruct the identity and equality conditions, then explain the complete easy/hard reversal without a causal claim.
6. **Rival response interpretation:** analyze both authored responses below. For each retain its valid part, give at least two plausible explanations, one discriminating next question, branch feedback and a changed request with a complete mathematical answer.
7. **Teaching and proof repair:** propose a quantity-to-symbol-to-general-argument sequence, choose an invariant at each stage, fade a supplied prompt for the changed task and remove it on the later return. State one counterexample and one hypothesis repair, a nonvisual alternative and the limits of a prompted success.
8. **Claim and record ledger:** distinguish deductive results, deterministic bounds, design probabilities and teaching conjectures. Name the exact source/key and exposure, preserve first/comparison/corrected work and an explicit change, and state what would require a new actual study.

### Authored response packets

| Form | Response M | Response F |
| --- | --- | --- |
| FND-ADV-P001 | “I divided 47 by 3 and got 47/3 cm; doubling the display doubles the length.” | “22 full tiles means the object is 22 cm long.” |
| FND-ADV-C001 | “The base-eight subtraction is 2247 because the written minuend stayed 4032.” | “Twelve tiles is impossible because a fraction must be less than one.” |
| FND-ADV-R001 | “The chosen AD pair hit the mean, so the uniform sampling theorem validates the selection.” | “Borrowing changes the amount, while subtracting the same amount from both numbers also changes the difference.” |

These strings are not actual learner records. A code describes a visible issue in this task; it is revised or retired after a discriminating response. A total score cannot identify the cause of an error.

### FND-ADV-P001 — Complete primary model

1. The calibration gives $L=(47-2)/3=15$ cm and $L\\in[44/3,46/3]$ cm. The two endpoints give readings 46 and 48 exactly, so both are feasible and sharp. Zero length reads 2 ticks. Doubling the reading to 94 gives $(94-2)/3=92/3$ cm, rather than $30$ cm. Subtracting the zero before comparing ratios repairs the claim; differences still scale by 3.
2. In base ten the values are 4032 and 1785. The coefficient chain is $(4,0,3,2)\\to(4,0,2,12)\\to(3,10,2,12)\\to(3,9,12,12)$. Subtract $(1,7,8,5)$ to get $(2,2,4,7)$, so the result is canonical $2247_{10}$; $2247+1785=4032$ checks it. Each exchange is T03. T02 exists by repeated division by 10 with a smaller quotient; uniqueness fixes the last digit modulo 10 and repeats after division, excluding leading zeros. Borrowing preserves the minuend; compensation changes both operands while preserving their difference.
3. The tile count is $15/(2/3)=45/2$. Thus 22 full tiles have length $44/3$ cm and the remainder is $15-44/3=1/3$ cm, strictly less than $2/3$. The inverse check is $(45/2)(2/3)=15$. Dividing the length interval by $2/3>0$ gives exactly $[22,23]$ tiles; endpoints correspond to the feasible reading endpoints. An integer count would have zero remainder, while zero length has zero tiles and zero remainder. The numeral 22 denotes a tile count, not 22 centimetres.
4. The full sample means are $1,2,2,2,2,3$. The population mean is 2, $S^2=4/3$, the design mean is 2 and variance is $1/3$, either by the six squared deviations or T05. Four of six half-width-$1/2$ intervals contain 2, giving exact design coverage $2/3$. Displayed AB has interval $[1/2,3/2]$, which misses 2; a procedure with coverage $2/3$ allows this failure. The uniform selection is a stipulated probability law over objects, unrelated to any teaching assignment or posterior probability for the fixed mean.
5. Equal-group mean is $(3+7)/2=5$ and individual-weighted mean is $(2(3)+6(7))/8=6$. Their difference 1 equals $(-4)(-4)/(2(8))$. Expanding the common-denominator numerator proves the identity; equality requires equal group sizes or equal means. In the easy/hard table X exceeds Y by $1/10$ in both strata, but different weights yield pooled $1/2<80/101$. Equal weighting gives $1/2>2/5$. The targets and compositions explain the change; no individual scores or causal effect are recovered from these summaries.
6. M correctly divides by the scale but omits the offset; it may treat the display as a true-origin length or simply have copied the wrong formula. Ask what reading corresponds to $L=0$. If the answer is 2 with an explanation, retain that understanding and repair the omitted subtraction; if it is 0, revisit the stipulated display relation before calculations. A changed reading 32 gives $L=(32-2)/3=10$ cm, not $32/3$. F correctly identifies the number of complete tiles but attaches the wrong unit. It may confuse count with length or omit the tile conversion while knowing it. Ask for the length of two tiles. If it gives $4/3$ cm, connect the count to multiplication; otherwise rebuild the repeated-unit meaning. For three tiles the complete answer is $3(2/3)=2$ cm; the object's leftover $1/3$ cm must still be retained.
7. Start with a text quantity table giving reading, offset, scale, length and tile unit; invert and check by substitution. Use positional sums and an exchange to preserve the minuend, then express the general base identity. Repeated tiles lead to $qu=L$ before symbolic fraction division. A full six-row table precedes the general indicator proof. Fade to “reference, invariant, assumptions, check” on C001 and remove that scaffold on R001; record whether it was used. T01's $17/32\\ne1/2$ refutes a raw-ratio assertion with nonzero offset, while T03 proves a valid universal exchange. A plain ordered list of coefficients, equations and pair labels supplies all mathematics without colour, dragging or timed speech. This sequence is a proposed teaching design; a prompted correct answer would not establish unaided transfer or a fixed developmental stage.
8. Record length/tile/subtraction/weighted identities as deductive calculations under stipulated models, the closed length interval as deterministic compatibility, and $2/3$ as coverage conditional on uniform pairs and the fixed object values. Record improved explanation as a conjecture rather than a result. Cite S1–S4 and the exact task keys actually opened, preserve dated first, comparison and corrected worksheets, and identify the offset correction as one consequential revision. There are no learners, scorer-agreement observations or teaching effects. A real successor would need its own bounded construct, actual sampling/assignment and measurement, permissions and records; this worked portfolio does not supply them.

### FND-ADV-C001 — Complete changed model

Attempt all eight fields with the changed row before opening this model. A base, an equality case, weights and the coverage probability have changed.

1. $L=(35-(-1))/4=9$ cm, with exact compatible interval $[35/4,37/4]$ cm attained at readings 34 and 36. The zero reading for zero length is -1, so raw-reading ratios are inappropriate. Doubling display 35 to 70 gives $71/4$ cm instead of 18. Fixed scale 4 preserves the relation between reading differences and length differences; centimetre-to-millimetre conversion still preserves the object.
2. $4032_8=4(512)+3(8)+2=2074$ and $1575_8=512+5(64)+7(8)+5=893$. Using ordinary integer coefficient tuples, $(4,0,3,2)\\to(4,0,2,10)\\to(3,8,2,10)\\to(3,7,10,10)$. Subtracting $(1,5,7,5)$ gives $(2,2,3,5)$, hence $2235_8=1181$, and $1181+893=2074$. The base determines the value of each place and the amount exchanged. Existence uses division by 8, and uniqueness uses equal last digits modulo 8 followed by the same argument on the quotients; the base-ten result cannot simply be copied.
3. $q=9/(3/4)=12$ tiles. All twelve fit exactly, giving remainder zero; $12(3/4)=9$ cm. The uncertain-count interval is $[35/3,37/3]$, attained at the two reading endpoints. The central equality does not assert that every feasible length has twelve complete tiles: the lower endpoint has only eleven full tiles. A fraction as numerical measure can exceed one, and a fraction-valued measuring unit may be repeated.
4. For values $(0,2,2,4)$ the pair means are $1,1,2,2,3,3$. Population and design means are 2. Squared population deviations sum to 8, so $S^2=8/3$ and the sample-mean variance is $2/3$. Directly the six squared deviations from 2 sum to 4, giving the same variance. Only AD and BC have centers within $1/2$ of 2, so coverage is $2/6=1/3$. Displayed AB gives $[1/2,3/2]$ and misses. The same half-width rule had different coverage in P001; copying $2/3$ would alter the fixed data. This is still a sampling probability, not the sharp-null tail $2/3$ of native Protocol Q, despite a coincident numeral in other examples.
5. Equal-group mean is $(2+10)/2=6$, while individual-weighted mean is $(3(2)+1(10))/4=4$. Difference $-2$ equals $(2)(-8)/(2(4))$. Its sign changes because the larger group has the smaller mean. Equality would require a zero factor, which these values lack. The easy/hard table still gives the fully stated within-stratum differences $1/10$, pooled $1/2<80/101$ and common-composition $1/2>2/5$; weighting changes the descriptive target and does not prove causation or characterize an individual.
6. M recognizes a subtraction problem but imports a base-ten result. Possible explanations include overlooking the subscript or interpreting “base eight” as a label that leaves place values unchanged. Ask for the value of $10_8$. If it gives 8, repair the copied computation using coefficient exchanges of eight; if it gives 10, connect one next-place unit to eight current-place units. A changed check is $10_8-1_8=7_8$, with inverse $7+1=8$. F may restrict fractions to a part of one whole, or interpret “twelve tiles” as twelve parts of one single tile. Ask for the physical length of four $3/4$-cm tiles. The answer is 3 cm, showing repeated units; if it instead attempts a subunit fraction, lay out the same unit four times in a text sum. A changed $15/4$-cm object contains five such tiles exactly: $(15/4)/(3/4)=5$. Preserve any valid part-whole interpretation while expanding the stated measuring task.
7. Begin with the negative offset and substitute the recovered 9 into $-1+4L=35$. Connect repeated eighths-of-a-place exchanges to T03, then repeat T02's last-digit proof for an arbitrary base. Use the zero tile remainder as an equality check, not a reason to reject measures over one. Construct all six pair means before the coverage count and compare with P001. Use the faded “reference, invariant, assumptions, check” prompts and record their exposure. A counterexample to copying numerals across bases is $10_8=8\\ne10_{10}$; the repaired claim explicitly fixes the base. Typed coefficient tuples and spoken descriptions with a transcript are alternatives to a visual tile arrangement; support and an authored response do not establish a successful intervention.
8. Keep the changed base, exact-fit condition and new coverage in the claim ledger. Deductive arithmetic supports 9 cm, 12 tiles, $2235_8$, and the two descriptive means; deterministic compatibility supports its two attainable intervals. Uniform-pair design supports coverage $1/3$ for this fixed population only. The proposed sequence and rival explanations remain hypotheses. Preserve first/comparison/corrected versions, actual source/key openings and one substantive change such as correcting a copied base-ten result. No score gain, learner prevalence or teaching effectiveness was observed.

### FND-ADV-R001 — Complete later-return model

At another sitting, close earlier models and reconstruct all eight fields without their prompts. Declare earlier exposure. The public return has no enforced delay or claim of unseen assessment.

1. $L=(26-2)/4=6$ cm and the sharp length interval is $[23/4,25/4]$ cm, with both endpoints producing their allowed readings 25 and 27. Doubling the raw reading gives $(52-2)/4=25/2$ cm rather than 12; the offset still matters. Differences obey $\\Delta r=4\\Delta L$. If a lower reading were below 2, the nonnegative-length constraint would need explicit intersection rather than an impossible negative endpoint.
2. $10010_2=16+2=18$ and padded $01101_2=8+4+1=13$. A value-preserving coefficient chain is $(1,0,0,1,0)\\to(1,0,0,0,2)\\to(0,2,0,0,2)\\to(0,1,2,0,2)$. Subtract $(0,1,1,0,1)$ to obtain $(0,0,1,0,1)$, or fixed-width $00101_2=5$. Canonical positive notation removes leading zeros, giving $101_2$; $5+13=18$ is the inverse check. Each exchange replaces one left-place unit by two adjacent right-place units and preserves 18. Existence and uniqueness follow from successively dividing by 2 and fixing equal last digits modulo 2, not a claim that padded strings are distinct canonical representations.
3. $q=6/(4/5)=15/2$. Seven full tiles occupy $28/5$ cm and leave $6-28/5=2/5$ cm, less than the $4/5$-cm unit. The count check is $(15/2)(4/5)=6$. Dividing the sharp length endpoints by $4/5$ gives $[115/16,125/16]$, with feasible attainment. Every count in this interval is between 7 and 8, so all its feasible lengths contain seven complete tiles; a fractional remainder is still part of the object. Zero length or integer numerical measure would give the equality cases described in T04.
4. The complete hypothetical uniform pair table is $2,3,4,4,5,6$. Its mean is the population mean 4. Population squared deviations sum to 20, so $S^2=20/3$ and the uniform-design sample-mean variance is $5/3$; the six squared deviations sum to 10, again giving $10/6=5/3$. Only AD and BC cover 4 with half-width $1/2$, so the **hypothetical uniform** coverage is $1/3$. Actual stipulated selection is purposeful AD, with interval $[7/2,9/2]$, which contains 4. That hit does not establish an actual uniform sampling law or a 95% guarantee. For the fixed fixture one can state that the chosen interval contains its given mean; a probabilistic performance claim for this purposeful rule requires a separately specified probability mechanism and target.
5. Equal-group mean is $(-2+2)/2=0$; individual-weighted mean is $(1(-2)+3(2))/4=1$. Difference 1 equals $(-2)(-4)/(2(4))$. Positive group sizes make the denominator valid even when means are signed. Equality is absent here because both factors are nonzero. The easy/hard example's arithmetic still separates within-stratum comparisons $9/10>4/5$, $1/10>0$, pooled $1/2<80/101$, and common-composition $1/2>2/5$. These descriptive comparisons are not causal estimates, and aggregate means do not reveal individual variation.
6. M correctly notices that AD's mean is 4 but may confuse a realized hit with procedural coverage, or may have assumed the earlier uniform rule persisted. Ask how AD was selected and what probability each alternative pair had. If it explicitly says purposeful, preserve the hit and withdraw the unsupported uniform-law inference; if it supplies six equal probabilities, compare that account with the task's changed selection rule. A changed purposeful AB pair would have interval $[3/2,5/2]$ and miss 4, demonstrating that a convenient hit is not a general guarantee. F may treat coefficient changes as physical loss, or confuse regrouping with compensation. Ask to evaluate both $(1,0,0,1,0)$ and $(1,0,0,0,2)$ in base two; both equal 18. Then ask whether $(18-1)-(13-1)$ equals $18-13$; both equal 5. If value is conserved but language is unclear, connect labels to the two invariants; otherwise reconstruct each identity separately. Changed $10_2-1_2=1_2$ conserves the minuend by exchanging one two for two ones, and $9-4=8-3=5$ illustrates compensation.
7. Rebuild the quantity table, base-value sum, repeated-unit equation, complete sample list and general proofs without copying the old numbers. Keep calibration positivity, base $B\\ge2$, nonzero tile unit and the actual selection rule explicit. The failed-hypothesis counterexample is purposeful AB missing a mean despite the favorable AD result; repair by naming a genuine sampling design rather than asserting one retrospectively. Distinguish that failure from the valid deterministic intervals. Allow text tuples, labelled tables, audio with a transcript or static number-line descriptions; no compulsory timed manipulation is needed. Record any restored prompts and their role. This is a proposal for the next mathematical task, not evidence of an actual learner's change or a universal progression.
8. Retain the exact-hit fact, the hypothetical uniform table and the loss of its actual-design warrant as separate ledger rows. Preserve the deterministic interval, positional proof, tile remainder and weighted target distinctions. Cite the public models used and keep first/comparison/corrected work with the consequential selection-rule correction rather than overwriting the earlier claim. A real teaching inquiry would need a bounded construct, records, measurement/selection argument and its own permissions; none appears here. This return cannot establish verified delay, retention, learner prevalence or intervention effectiveness.

### Exact output tables for comparison

These are results to derive from the printed inputs, not replacements for the proofs.

| Form | L cm | L lower | L upper | Tile count | Full tiles | Remainder cm | Count lower | Count upper | Difference value | Canonical difference |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FND-ADV-P001 | 15 | 44/3 | 46/3 | 45/2 | 22 | 1/3 | 22 | 23 | 2247 | 2247 |
| FND-ADV-C001 | 9 | 35/4 | 37/4 | 12 | 12 | 0 | 35/3 | 37/3 | 1181 | 2235 |
| FND-ADV-R001 | 6 | 23/4 | 25/4 | 15/2 | 7 | 2/5 | 115/16 | 125/16 | 5 | 101 |

| Form | Population mean | S squared | Uniform mean variance | Hypothetical uniform coverage | Displayed sample mean | Displayed interval lower | Displayed interval upper | Equal-group mean | Individual-weighted mean |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FND-ADV-P001 | 2 | 4/3 | 1/3 | 2/3 | 1 | 1/2 | 3/2 | 5 | 6 |
| FND-ADV-C001 | 2 | 8/3 | 2/3 | 1/3 | 1 | 1/2 | 3/2 | 6 | 4 |
| FND-ADV-R001 | 4 | 20/3 | 5/3 | 1/3 | 4 | 7/2 | 9/2 | 0 | 1 |

| Form | AB mean | AC mean | AD mean | BC mean | BD mean | CD mean |
| --- | --- | --- | --- | --- | --- | --- |
| FND-ADV-P001 | 1 | 2 | 2 | 2 | 2 | 3 |
| FND-ADV-C001 | 1 | 1 | 2 | 2 | 3 | 3 |
| FND-ADV-R001 | 2 | 3 | 4 | 4 | 5 | 6 |

## Feedback, records and continuation

| First consequential error | Targeted mathematical repair and changed check |
| --- | --- |
| Display treated as true-origin length | Substitute zero length, subtract the offset, then invert a changed reading |
| Closed error bound called 95% coverage | Specify the feasible set and endpoint attainment; separately enumerate a genuinely specified sampling rule |
| A rounding supremum called an attained maximum | Apply the half-tie convention to the exact upper endpoint and retain the half-open set |
| Base-ten result copied to another base | Evaluate positional sums, perform one exchange of B right-place units and multiply back |
| Regrouping and compensation conflated | Show separately that the minuend is unchanged and that subtracting the same t from two operands preserves their difference |
| Fraction greater than one rejected | Repeat an explicit common unit and verify count times unit equals length |
| Count and physical length given the same unit | Record L, u, L/u and remainder in a labelled equation before changing units |
| Equal-group and individual means conflated | Derive both means and their difference identity; name the target and equality condition |
| Sampling treated as independent draws | Count pair inclusions, restore negative indicator covariance and check the census boundary |
| Coverage copied after population or selection changes | Re-enumerate all allowed subsets and state which law, if any, supplies their probabilities |
| A written issue treated as fixed learner cognition | Preserve a rival interpretation, ask a discriminating prompt and revise the next mathematical task |
| Correct prompted work called proven teaching success | Retain the prompt/exposure and restrict the claim to the supplied response and calculation |

For every field mark complete, revise or missing with a supporting mathematical line. A complete field includes hypotheses, valid method, exact result or proof, boundary check and a justified interpretation; a correct numeral with a false central argument needs revision. These are descriptive public self-review criteria, not an automatically graded achievement scale. Use the native Q/U/J/B and Methods rubrics only for their own tasks, rather than converting these portfolios into unvalidated score gains.

Keep dated first, comparison and corrected worksheets, exact task/source versions, public-model exposure, prompts/help and the reason for a change. The [worksheet portfolio guide](/guide/learner-records/#keep-a-worksheet-portfolio) explains the distinction between learner-owned files, native stores and shared notes: a shared reading note is one mutable string; notebook backup does not automatically include separate files or native records. Existing export controls have their stated scopes. No immutable draft history, observed delay, grading or additional shared writing contract is created here.

Stop after the named source selection, all twelve checkpoints, three complete mixed portfolios and recorded repairs. Further specialist intervention design, measurement validation, multilevel estimation or actual learning research needs a separately bounded programme. This course teaches the stated advanced numeracy progression; it does not claim an actual study, a whole-book release, human approval, observed accessibility conformance or calibrated workload.
`;export{e as default};