
# Quantity, Evidence, and Teaching: Ratios to Research Claims

<!-- euler-course-route -->

## Current course route

Use the [course page](#/courses/atlas-quantity-evidence-and-teaching) for its present preparation and available study steps. This Outline keeps its original explanations and exercises while a complete primary-book syllabus is being assigned.

A denominator answers a question: a fraction of what, a ratio to what, or an amount per which unit? The same care is needed when reading an education study. An average over classes and an average over students can answer different questions even when both calculations are correct.

This course carries one mixture problem from numeracy through an inequality proof into a small, fully synthetic study-design studio. It teaches how to calculate, explain, diagnose a written response, and keep an educational claim within its evidence. All responses and study data below are authored examples. No people were recruited, observed, assessed, or assigned a teaching routine. The exact mathematical results do not establish the effectiveness of a teaching method.

**Preparation and route.** Begin with whole-number arithmetic, fraction simplification, and the meaning of a negative number. The first four sessions develop the required algebra as it is used. Revisit [Formulas from Science](#/books/algebra-from-stories/formulas-from-science), especially Exercise 4, for the original mixture calculation, and [Inequalities and Regions](#/books/algebra-from-stories/inequalities-and-regions) for order reasoning. The specialist sessions additionally require means, weighted means, combinations, and the distinction between sampling and random assignment. Read [Mathematics Education Research Methods and Claim Boundaries](#/courses/atlas-mathematics-education-research-methods) before interpreting their causal estimand. You can complete the quantitative and teaching tasks without claiming readiness for research.

The seven hours are an suggested planning estimate, not observed learner workload: roughly 90 minutes on quantities, 75 on proof and bounds, 60 on response diagnosis, 45 on changed and return work, 90 on the first protocol, and 60 on the changed protocol. Use more than one sitting. A self-reported study mark, this public rubric, and comparison with a public key do not become graded Practice evidence, a mastery certificate, or a teaching qualification.

By the end, aim to produce:

- three quantities with their references and units kept distinct;
- a universal comparison proved under stated positivity hypotheses;
- sharp bounds with feasible equality cases;
- a response diagnosis with a discriminating follow-up and mathematical repair;
- a protocol that fixes its outcome, estimand, assignment, analysis, and forbidden stronger claim;
- a changed solution and a later return that do not merely repeat the original numbers.

## 1. Quantities, references, and the first task

### Write before opening the solution

There are 15 g of salt dissolved in 250 g of water. The measured **total mixture volume** is 260 mL. Assume the salt and water remain in the mixture and no other substance is present.

1. Find the salt mass fraction, the salt-to-water mass ratio, and the salt concentration in grams per litre. Explain each denominator.
2. Explain why the three answers need not have the same numerical value.
3. Would the two masses alone determine grams per litre? State the extra measurement or model you would need.
4. Later, prove how the mass fraction changes when salt or water changes, and bound it when salt mass is in [14,16] g and water mass is in [240,260] g. Every pair in that rectangle is admissible.

**Hint 1.** Name salt mass, water mass, total mass, and total volume separately.  
**Hint 2.** The mass of the whole mixture is the sum of two masses; its measured volume is a separate quantity.  
**Hint 3.** One litre contains 1,000 mL. A unit fraction such as $1000\text{ mL}/1\text{ L}$ can change a denominator's unit without changing the physical quantity.

### Full first-task solution

Let salt mass be $m$, water mass be $w$, and total mixture volume be $V$. Here $m=15$ g, $w=250$ g, and $V=260$ mL. Conservation under the stated model gives total mass $m+w=265$ g.

The salt **mass fraction** uses the entire mixture as its reference:

$$
f=\frac{m}{m+w}=\frac{15}{265}=\frac{3}{53}.
$$

This is dimensionless because grams divide grams. As a percentage it is $300/53\%$, approximately $5.66\%$. The percent sign already means “per hundred”; do not append g/L.

The **salt-to-water mass ratio** compares salt with water, excluding salt from the reference:

$$
r=\frac{m}{w}=\frac{15}{250}=\frac{3}{50},
\qquad \text{salt:water}=3:50.
$$

It is also dimensionless. It is not the fraction of the entire mixture. A strip model can name 3 equal mass parts of salt and 50 of water: there are 53 parts altogether.

The **mass concentration** compares salt mass with total mixture volume:

$$
c=\frac{m}{V}
=\frac{15\text{ g}}{260\text{ mL}}
 \frac{1000\text{ mL}}{1\text{ L}}
=\frac{750}{13}\text{ g/L}
\approx57.7\text{ g/L}.
$$

Here $V=0.260$ L. Both $15/260$ g/mL and $750/13$ g/L describe the same concentration. The numerical values differ because one litre is 1,000 millilitres.

The ratio $3/50$ exceeds $3/53$ because its positive denominator is smaller. Concentration carries mass/volume units; comparing its bare numeral with a dimensionless fraction would discard the meanings of the numbers. Changing the unit from litres to millilitres changes the concentration's numeral but not either mass ratio.

Masses alone do not specify total volume. For example, the stated masses together with hypothetical measured volumes 250 mL and 260 mL would give 60 g/L and $750/13$ g/L respectively. One cannot select between those values from masses alone. A measured final volume, or an explicitly justified density/volume model for the mixture, is needed. Water's density alone does not determine the final solution volume. This is a mathematical measurement exercise, not a recipe or a chemical safety model.

### A reversible check and a useful identity

Multiply back: $(3/53)(265\text{ g})=15$ g and $(750/13\text{ g/L})(0.260\text{ L})=15$ g. The units and recovered salt mass agree.

Since $w>0$, divide numerator and denominator by $w$:

$$
f=\frac{m/w}{m/w+1}=\frac{r}{1+r}.
$$

Conversely, if $0\le f<1$, then $r=f/(1-f)$. Thus a part-to-part ratio and a part-to-whole fraction are related, but are different quantities. When $r=3/50$, the relation gives $f=(3/50)/(53/50)=3/53$.

**Quick repair.** If an answer says “the salt fraction is 6%,” ask which mass was used as the reference. Six percent is the salt mass as a percentage of the water mass here. The salt percentage of the whole is approximately 5.66%. A denominator can be arithmetically correct for a different question.

## 2. Proof and sharp uncertainty bounds

A few successful substitutions cannot prove a statement about every permitted pair of masses. Work with symbols and keep the sign assumptions visible.

### Increasing salt with water fixed

Let $w>0$ and $0\le m_1<m_2$. Both denominators are positive. Therefore multiplication by their product preserves order, and

$$
\frac{m_1}{m_1+w}<\frac{m_2}{m_2+w}
\quad\Longleftrightarrow\quad
m_1(m_2+w)<m_2(m_1+w)
\quad\Longleftrightarrow\quad
m_1w<m_2w.
$$

The last inequality follows from $m_1<m_2$ and $w>0$. Thus adding salt while holding water fixed strictly increases the fraction. This proof includes $m_1=0$ and requires no calculus.

### Increasing water with salt fixed

Let $m>0$ and $0\le w_1<w_2$. Again the denominators are positive, and

$$
\frac{m}{m+w_2}<\frac{m}{m+w_1}
\quad\Longleftrightarrow\quad
m(m+w_1)<m(m+w_2)
\quad\Longleftrightarrow\quad
mw_1<mw_2.
$$

Hence adding water while holding positive salt mass fixed strictly decreases the fraction. If $m=0$ and water is positive, the fraction stays zero, so the strict statement would be false. If $w=0$ and salt is positive, the fraction stays one as salt changes. If $m=w=0$, the expression is undefined. These are reasons for the hypotheses.

### Full uncertainty solution

Now require $14\le m\le16$ and $240\le w\le260$, in grams, with every pair allowed. The first proof says the minimum uses the least salt; the second says it uses the most water. The maximum uses the most salt and the least water. Therefore

$$
\frac{7}{137}=\frac{14}{14+260}
\le \frac{m}{m+w}\le
\frac{16}{16+240}=\frac{1}{16}.
$$

The lower endpoint is attained at $(m,w)=(14,260)$ and the upper at $(16,240)$. Thus these bounds are **sharp**: neither endpoint can be improved while retaining every allowed pair. The percentage lies between $700/137\%$ and $6.25\%$, approximately 5.11% to 6.25%.

Notice that $m$ occurs in both numerator and denominator. Treating $m$ and $m+w$ as separately adjustable gives the weaker interval

$$
\frac{14}{276}=\frac{7}{138}
\le \frac{m}{m+w}\le
\frac{16}{254}=\frac{8}{127}.
$$

Those are valid conservative bounds, since $254\le m+w\le276$, but they are not sharp. Achieving numerator 14 and denominator 276 would require $w=262$, outside the allowed range; numerator 16 and denominator 254 would require $w=238$. The issue is shared-variable dependence, not a specified probabilistic correlation. No probability distribution or coverage probability was supplied. If a further physical constraint excludes a corner, rederive sharp bounds on that smaller feasible set.

### Proof-repair task and answer

**Attempt.** “When salt increases, both top and bottom increase, so the fraction increases. The lowest fraction is $14/276$.”

**Repair.** Increasing both numerator and denominator alone has no universal direction: $1/2<2/3$, whereas $1/2>2/100$. Here the linked changes have the special form $m/(m+w)$ with fixed $w>0$, and cross multiplication leaves $m_1w<m_2w$. The lower sharp corner is $(14,260)$, giving $14/274=7/137$. Calling $14/276$ the minimum confuses a conservative bound with an attainable minimum.

## 3. Diagnose responses and repair the mathematics

The [Learning progressions are hypotheses](#/books/teaching-for-mathematical-understanding/learning-progressions) chapter treats a response as evidence for a next question, with its task, representation, and help recorded. Apply that principle here. A written line may admit several explanations; it does not identify a permanent learner type.

### Four synthetic responses

These are authored strings, not records about learners.

| Response ID | Written response to the first task | Provisional issue code |
| --- | --- | --- |
| D | “Fraction of the mixture: $15/250=3/50$. I used the water because the salt was put into it.” | DENOMINATOR |
| U | “Salt fraction $15/265=3/53$. Concentration $15/260=3/52$ g/L.” | UNIT |
| A | “Whole mass $15+250=265$ g; fraction $15/265=3/52$. Concentration $15/0.260=750/13$ g/L.” | ARITHMETIC |
| I | “The word concentration could mean $15/265$, $15/250$, or $15/260$. I need to know which reference is intended.” | UNDERDETERMINED-INTERPRETATION |

For **D**, the valid calculation answers salt-to-water, while the stated whole is the mixture. Ask, “If all the mixture were split into 53 equal mass parts, how many parts would be water and how many salt?” A response of 50 and 3 supports a reference-selection repair: write the label “total mixture mass” under 265, then recompute $15/265=3/53$. If the response cannot preserve the 265 g total, investigate the quantity representation before inferring a denominator rule.

For **U**, the first fraction is correct. The second calculation is $3/52$ **g/mL**; multiplying by 1,000 gives $750/13$ g/L. Ask, “Would one litre contain the salt from one such 260 mL portion, or from $1000/260$ portions?” Keeping g/mL and converting it is valid. The written unit error does not show whether the author misunderstood concentration or omitted a conversion.

For **A**, the whole and concentration are correctly represented. Reducing $15/265$ requires dividing both by 5, giving $3/53$, not $3/52$. Ask for the inverse check $3\cdot265$ versus $15\cdot52$: 795 differs from 780. Preserve the valid setup and repair the arithmetic; do not reteach an assumed denominator misconception from this line.

For **I**, the author correctly notices that “concentration” alone can leave a reference unstated. The complete first-task wording specifies three references and total volume, so answer all three with units. If a prompt supplies only the masses and asks for g/L, the volume is genuinely missing. Ask the author to state which version of the prompt they are interpreting. Distinguish careful clarification from an inability to compute.

A code attaches to the observed written issue. After a follow-up, revise or retire it. Keep a possibility such as a copying slip or a different prompt interpretation alive until evidence distinguishes it. No number of codes in these four invented responses estimates how frequently any issue occurs.

### A public mathematical rubric, maximum 8

Use the same four dimensions on the first, changed, and return mathematical tasks. An equivalent exact expression or a sensible rounded value with its derivation earns the same credit.

| Dimension | 2 points | 1 point | 0 points |
| --- | --- | --- | --- |
| Q: quantities and references | Correct mass fraction and salt-to-water ratio, each with its stated reference | One correct reference and calculation, or correct numbers without reference explanations | Neither reference is supported |
| U: units and concentration | Correct mass/total-volume expression, conversion, result, and g/L unit | A correct mass/volume setup with a conversion, unit, or arithmetic error | No meaningful mass/total-volume setup |
| J: justified comparisons | Both monotonicity claims proved by valid order reasoning with positivity and boundary conditions | One valid proof, or correct directions supported only by examples or intuition | Directions unsupported or a false universal argument |
| B: bounded uncertainty | Correct sharp endpoints with feasible attainment and shared-variable explanation | A valid conservative bound, or correct sharp endpoints without why they are sharp | Invalid bounds or no usable bound |

The rubric is a transparent task-specific scoring convention. It does not validate an achievement scale or justify treating point gains as equally important educational changes. Record the dimension profile beside the sum; a score of 4 can conceal very different reasoning.

**Worked scoring example.** Consider this complete invented submission:

> “The whole weighs 265 g, so salt is $3/53$ of the mixture; salt:water is $3:50$. Concentration is $15/260=3/52$ g/L. More salt increases and more water decreases the mass fraction; I checked $15/265$ and $16/266$, but have no general proof. With uncertain masses I get $7/138\le f\le8/127$ using total mass between 254 and 276.”

Its profile is Q=2, U=1, J=1, B=1, total 5/8. Q is fully supported. U has the meaningful mass/volume setup but the wrong unit conversion. J states correct directions with empirical support only. B supplies valid conservative bounds, without a sharpness argument. Repair U using 1,000 mL per litre; repair J by the two cross multiplications; repair B using feasible corners. A successful rewrite reaches 8/8 on this public task, but does not establish independent transfer.

### A complete teaching sequence to try on the authored examples

First name the physical quantities in words or a plain table. Next compare the two valid denominators $w$ and $m+w$. Then annotate response D while preserving its valid ratio calculation. Fade to the prompts “reference, expression, units, check” for the changed task, and finally remove the prompts on the return task.

This is a **proposed** sequence. Its mechanism conjecture is that explicitly comparing references might help authors distinguish part-to-part from part-to-whole statements. A different representation may work better; these materials contain no observation of that claim. A nonvisual route lists quantities, references, and equations in reading order; speech with a verbatim transcript, typed text, or a static labelled strip can carry equivalent mathematics. Colour, dragging, and speed of reading are unnecessary.

## 4. Changed task and a return check

### Changed task: new measurements and a missing measurement

A mixture now contains 18 g of salt and 282 g of water. Its measured total volume is 250 mL.

Find the three quantities, justify their references and units, and use the earlier proof to obtain sharp mass-fraction bounds when $17\le m\le19$ and $272\le w\le292$, in grams, with all pairs admissible. Then remove the volume from the prompt: decide which answers remain determined and explain why.

**Hint.** Write all four physical quantities before calculating. The uncertainty rectangle belongs to this changed task, not the first task.

### Full changed-task solution

Total mass is $18+282=300$ g. Hence

$$
f=\frac{18}{300}=\frac{3}{50}=6\%,\qquad
r=\frac{18}{282}=\frac{3}{47},
\qquad
c=\frac{18}{0.250}=72\text{ g/L}.
$$

The fraction uses all 300 g; the ratio uses only 282 g of water; concentration uses the measured 0.250 L of mixture. The relation $f=r/(1+r)$ gives $(3/47)/(50/47)=3/50$, checking the distinction.

For uncertainty, monotonicity under positive masses gives

$$
\frac{17}{309}=\frac{17}{17+292}
\le f\le
\frac{19}{19+272}=\frac{19}{291}.
$$

Both endpoints are attained at their indicated corners; the proof and the shared-variable warning transfer without assuming a fixed total mass. Removing volume leaves $3/50$ and $3/47$ determined. It leaves g/L undetermined: volumes 0.250 L and 0.300 L would produce 72 g/L and 60 g/L with the same stated masses. Supplying water's mass does not settle final mixture volume.

**Changed response to repair.** “Because the changed mixture has fraction $3/50$, the salt-to-water ratio is also $3/50$, and concentration is 6 g/L.”

**Full repair.** The valid whole fraction is $3/50$. Its complement $47/50$ is water's fraction, so salt:water is $(3/50):(47/50)=3:47$. Six percent is dimensionless; concentration requires $18\text{ g}/0.250\text{ L}=72\text{ g/L}$. Ask for the reference in each denominator before inferring whether the author is copying a number, confusing units, or confusing part-to-part with part-to-whole.

### Later return, with full key

After a break, close the earlier solutions. Use 12 g salt, 288 g water, and measured total volume 240 mL. Compute all three quantities; derive sharp bounds for $11\le m\le13$, $278\le w\le298$, with every pair admissible; and explain why “both numerator and denominator increased” is not a proof. Record any help used before comparing with this public key.

**Key.** Total mass is 300 g. Mass fraction $12/300=1/25=4\%$; salt-to-water ratio $12/288=1/24$; concentration $12/0.240=50$ g/L. The sharp fraction bounds are $11/(11+298)=11/309$ and $13/(13+278)=13/291$, attained at $(11,298)$ and $(13,278)$. Use the positive cross-multiplication proofs from Session 2 for direction; two increasing numbers alone do not determine the direction of their quotient. This is a public retrieval/self-review task, not a secure independent assessment.

If Q or U needs repair, return to the labelled quantities in Session 1 and the source formula chapter. If J or B needs repair, rewrite the hypotheses, the cross multiplication, and the corner attainment in Session 2. Then choose a fresh numerical case yourself and check it by multiplying back; a self-chosen case remains self-study evidence.

## 5. Specialist studio: build an auditable synthetic protocol

The mathematical fraction $m/(m+w)$ has a known meaning and a deductive proof. Whether a proposed teaching sequence changes later performance is an empirical question. The following studio teaches how to specify that question and audit a finite calculation. It supplies a complete hypothetical protocol and invented data so no human trial is required.

### Protocol P: worked model

#### Protocol P — Operational givens

**Question and construct.** For six fixed hypothetical classes, compare assignment to a 12-minute reference-comparison routine R with assignment to a 12-minute worked-example routine C. The narrow construct is performance on the complete first mathematical task, including proof and bounds, under the public 0–8 rubric. It does not stand for general numeracy, enduring understanding, or teacher quality.

**Materials and routines.** Both conditions receive the same first task, source explanation, changed task, and total time. In R, minutes 0–2 name salt, water, total mass, and final volume; minutes 2–5 compare $m/(m+w)$, $m/w$, and $m/V$; minutes 5–8 repair response D; minutes 8–12 attempt the changed task with the four fading prompts. In C, minutes 0–4 read the complete first-task worked solution; minutes 4–8 reproduce it and check arithmetic by multiplication; minutes 8–12 attempt the same changed task. Both get the same written changed-task key afterward. These are operational scripts for a hypothetical contrast; they carry no effectiveness claim.

**Units, timing, and outcome.** Classes are assignment units. A class has a fixed roster before assignment. Each fictional roster member attempts the complete first task before the routine and seven days afterward, with the same allowed tools and recorded help. The outcome for class $j$ is the mean individual rubric-score gain, post minus pre, on that repeated task. Retesting the same public task bounds the interpretation to performance on that task; it is not evidence of unfamiliar transfer. The synthetic dataset gives class mean gains, not individual work or within-class variation.

**Scoring and records.** Keep Q,U,J,B separately, allow equivalent correct methods, and use the sum only as the declared 0–8 score. A model coding procedure removes condition labels from written responses, has two scorers apply the fixed rubric independently, records their initial disagreements, and reconciles with written reasons. No scorer agreement was observed here. Do not infer a learner label from a code or a total. In real work, reading access, language, allowed tools, accessibility, consent, privacy, and permission to decline would need a reviewed plan; this studio neither recruits people nor supplies ethical approval.

**Missingness and deviations.** The finite example assumes every roster member has both scores and no class is lost. Retain all classes by assigned condition; record help, timing, or script deviations rather than silently removing inconvenient results. If outcomes are missing, do not turn them into zeros or silently analyze a changed roster. Report the missing counts and reasons by arm, revise the analysis with explicit assumptions or bounds, and label the complete-data calculation inapplicable. In a real protocol, decide that policy before outcomes are inspected.

#### Protocol P — Worked estimand

**Estimand.** For this fixed six-class population, let $Y_j(z)$ be the class's mean gain if its entire fixed roster is assigned $z$, with $z=1$ for R and $z=0$ for C. The primary finite-population estimand is

$$
\tau_C=\frac{1}{6}\sum_{j=1}^6\{Y_j(1)-Y_j(0)\}.
$$

It weights each class equally. This potential-outcome notation assumes that a class's outcome depends on its own assigned routine, with the version of each routine fixed; interference across classes or changes in versions would require a richer definition. The observed mean contrast estimates an assignment effect for these classes under actual random assignment, consistency, and the stated outcome/retention assumptions. It does not identify a national effect or the effect of compliance.

#### Protocol P — Assignment givens

**Assignment and analysis fixed in advance.** Hypothetically choose exactly three of six labelled classes uniformly, so each of the $\binom63=20$ allocations has probability $1/20$. Assign the other three to C. The statistic is the mean class gain in R minus the mean class gain in C. Use a two-sided randomization tail at least as large in absolute value as observed, counting ties. No subgroups, alternative endpoints, or student-level independent-assignment test are primary.

### Supplied synthetic data and two different averages

| Class | Assigned routine | Fixed roster size | Mean rubric-score gain |
| --- | --- | --- | --- |
| A | R | 5 | 2 |
| B | R | 5 | 2 |
| C | R | 20 | 8 |
| D | C | 10 | 1 |
| E | C | 10 | 2 |
| F | C | 10 | 3 |

#### Protocol P — Worked contrasts

The class means are 4 in R and 2 in C, giving the primary observed contrast $D_C=2$ score points. The student-weighted means are

$$
\frac{5(2)+5(2)+20(8)}{30}=6,\qquad
\frac{10(1)+10(2)+10(3)}{30}=2,
$$

so the observed student-weighted arm contrast is $D_S=4$ points. The arithmetic is correct in both cases. The larger treated class has the largest gain, so changing weights changes the question.

A finite student-average causal target would instead be $\tau_S=(\sum_j n_j)^{-1}\sum_j n_j\{Y_j(1)-Y_j(0)\}$ for fixed roster sizes $n_j$. Do not silently relabel $D_C$ as estimating $\tau_S$, or reuse a class-statistic randomization result for a student-weighted statistic. The realized student-weighted arm contrast is a ratio estimator whose denominators can vary across class allocations; it is not automatically design-unbiased for $\tau_S$. An estimator and randomization test for that different target must be specified separately.

There are six assignment units under the hypothetical design, not sixty independently assigned students. Choosing exactly three classes makes their treatment indicators dependent; it does not create independent Bernoulli assignments. Copying a class mean five or twenty times does not create additional random assignments or reveal the unprovided individual gains.

### Exact sharp-null calculation: all 20 allocations

For the **sharp null**, suppose every class would have exactly the same gain under either assigned routine: $Y_j(1)=Y_j(0)$ for each $j$. This is stronger than $\tau_C=0$. Under it the six observed outcomes can be held fixed while labels are reassigned according to the stated uniform design. If the original assignment were voluntary or unknown, these 20 allocations would not automatically be equally likely and this p-value would not be justified.

The sum of the six outcomes is 18. For an allocated treated triple with sum $s$,

$$
D_C=\frac{s}{3}-\frac{18-s}{3}=\frac{2s-18}{3}.
$$

Observed ABC has $s=12$ and $D_C=2$. Thus a tail allocation satisfies $|D_C|\ge2$, equivalently $s\le6$ or $s\ge12$.

| Treated triple | Sum s | Class contrast D_C | In two-sided tail |
| --- | --- | --- | --- |
| ABC | 12 | 2 | yes |
| ABD | 5 | -8/3 | yes |
| ABE | 6 | -2 | yes |
| ABF | 7 | -4/3 | no |
| ACD | 11 | 4/3 | no |
| ACE | 12 | 2 | yes |
| ACF | 13 | 8/3 | yes |
| ADE | 5 | -8/3 | yes |
| ADF | 6 | -2 | yes |
| AEF | 7 | -4/3 | no |
| BCD | 11 | 4/3 | no |
| BCE | 12 | 2 | yes |
| BCF | 13 | 8/3 | yes |
| BDE | 5 | -8/3 | yes |
| BDF | 6 | -2 | yes |
| BEF | 7 | -4/3 | no |
| CDE | 11 | 4/3 | no |
| CDF | 12 | 2 | yes |
| CEF | 13 | 8/3 | yes |
| DEF | 6 | -2 | yes |

There are fourteen tail allocations, so the exact conditional randomization p-value is $14/20=7/10=0.7$. This is a complete enumeration, so no simulation standard error or plus-one Monte Carlo correction is needed. Complementary triples reverse the sign, providing a check on the table.

At a hypothetical prespecified 0.05 threshold, this calculation would not reject the sharp null. It does not prove zero effect, equivalence, a 70% probability that the null is true, or that the routine harms or helps anyone. A weak average null permits individual effects that cancel and does not generally allow this sharp-null imputation. The invented data have no empirical evidential force.

### Protocol audit task and full key

**Proposed report.** “The new routine raises understanding by four points. There are sixty students, so analyze sixty independent observations. The p-value 0.7 shows a 70% chance that the routines are equal.”

**Repair.** The prespecified class contrast is two rubric-score points on a repeated task in six fictional classes. Four is the distinct student-weighted descriptive contrast. Assignment was hypothetical at class level, so an analysis cannot manufacture sixty independent assignment units. Under the hypothetical uniform allocation and sharp null, 14 of 20 allowed class allocations yield a class contrast at least as extreme as two. That tail probability is not a posterior probability of the null or a proof of equality. A correct final sentence is: “For these supplied synthetic outcomes, the class contrast is 2 and the exact hypothetical sharp-null tail proportion is 0.7; no teaching-effectiveness conclusion follows.”

## 6. Changed protocol, full key, and claim boundary

### Protocol Q: write a complete changed plan first

Use four new fictional classes, with fixed roster sizes and observed gains below. Define the same narrow repeated-task outcome and two scripted routines as Protocol P, but assign **exactly two of four** classes uniformly. Let classes A and B be the displayed R allocation.

| Class | Assigned routine | Fixed roster size | Mean rubric-score gain |
| --- | --- | --- | --- |
| A | R | 4 | 1 |
| B | R | 12 | 5 |
| C | C | 8 | 0 |
| D | C | 8 | 2 |

Before reading the key, submit the question, construct, outcome/timing, equal-class estimand, design, statistic, missingness policy, scoring/review procedure, all allowed sharp-null allocations, both observed weighting schemes, and one warranted and one forbidden conclusion. Changing only the labels in Protocol P is insufficient: the sample size, roster weights, assignment set, statistic denominator, and reference distribution have changed.

### Full changed-protocol model

The question concerns assignment to R versus C for these four fixed classes on the complete first mathematical task's repeated 0–8 rubric score, seven days after the scripted routine. Keep fixed rosters, identical allowed tools, the same script durations and changed-task practice, recorded help/deviations, dimension scores, masked double scoring with a disagreement ledger, and the no-missingness finite assumption. For missing outcomes, report them and withdraw the complete-data result until an explicit missing-data analysis is defined; neither condition changes nor automatic zero scores are permitted.

The target is $\tau_C=(1/4)\sum_{j=1}^4\{Y_j(1)-Y_j(0)\}$ for these classes, with the same consistency and no-between-class-interference definitions. Choose one of $\binom42=6$ labelled pairs uniformly before outcomes; its probability is $1/6$. The primary statistic remains the difference between equally weighted mean class gains. For displayed AB, it is $(1+5)/2-(0+2)/2=2$.

The student-weighted contrast is $(4(1)+12(5))/16-(8(0)+8(2))/16=4-1=3$, a different descriptive average. Four class assignments, rather than 32 student assignments, generate the reference distribution. As before, a student-average causal target would need its own fixed-weight estimand and prespecified estimator.

Under the classwise sharp null, fix gains $(1,5,0,2)$, total 8. An assigned pair with sum $s$ has $D_C=s/2-(8-s)/2=s-4$. Count $|D_C|\ge2$ including ties:

| Treated pair | Sum s | Class contrast D_C | In two-sided tail |
| --- | --- | --- | --- |
| AB | 6 | 2 | yes |
| AC | 1 | -3 | yes |
| AD | 3 | -1 | no |
| BC | 5 | 1 | no |
| BD | 7 | 3 | yes |
| CD | 2 | -2 | yes |

The exact hypothetical p-value is $4/6=2/3$. The warranted statement is the class contrast and tail count for this invented dataset under this declared design and sharp null. It is not an estimate of how often real learners make errors, evidence of effectiveness, a validated score scale, or evidence of equivalence. A real causal interpretation would additionally require an implemented randomized assignment, retained valid outcomes, consistency, appropriate interference assumptions, and a defensible measurement argument; broader generalization would require separate support.

### Protocol rubric and worked review

Score each of four dimensions 0–2: give 2 for an explicit correct contract, 1 for a partly specified contract with a repairable omission, and 0 when absent or contradicted. Keep this protocol profile separate from the mathematical 0–8 score.

| Protocol dimension | Required evidence for 2 points |
| --- | --- |
| Target and measurement | Fixed population, equal-class causal estimand, task-specific construct, outcome/timing, rubric limits |
| Design and records | Actual hypothetical assignment probabilities, fixed rosters, reproducible scripts, scoring/disagreement records, missingness/deviations policy |
| Analysis and arithmetic | Appropriate assignment unit/statistic, all allocations with ties, correct p-value, separate student-weighted contrast |
| Claim boundary | Sharp versus average null, causal conditions, no null-probability/equivalence/effectiveness/generalization claim from synthetic data |

**Worked review of an incomplete Q submission.** Suppose it correctly defines the four-class target and repeated-task outcome, says “randomize two classes” without stating the six equiprobable pairs or recording missingness, computes class contrast 2 and student contrast 3 but omits the allocation table, and explicitly restricts conclusions to synthetic sharp-null arithmetic while explaining why this is not an effectiveness result. Its protocol profile is target=2, design=1, analysis=1, boundary=2, total 6/8. Repair design by naming all six equally likely pairs and the missingness/deviation policy; repair analysis by the complete six-row enumeration and $4/6$ tail proportion. The full model above earns 8/8 under the declared public rubric; that is an authored exemplar, not an empirical validation of the rubric.

## 7. Capstone and next study

Submit one compact portfolio: the original mathematical solution and proof; the changed solution; a before-and-after response repair naming the unresolved interpretation; a completed P or Q protocol; its full allocation table; the two rubric profiles; and a paragraph separating deductive certainty from educational uncertainty. Include your later return attempt and help record if you completed it. Do not invent observations, consent, scorer agreement, citations, or participants.

A model portfolio uses the exact fractions and attainable bounds in Sessions 1–4, the Q=2/U=1/J=1/B=1 diagnosis before repair and 8/8 public mathematical exemplar after repair, and the complete protocol with its own separate scoring profile. Its strongest conclusion is that these finite mathematical results and design calculations follow from their stated assumptions. The proposed instructional sequence remains a conjecture.

For mathematical continuation, use [Algebra from Stories](#/books/algebra-from-stories) to develop functions and equivalent expressions. For teaching continuation, revisit the learning-progressions chapter and [Formative assessment is an inference process](#/books/teaching-for-mathematical-understanding/formative-assessment). For specialist continuation, use the native research-methods course to develop a measurement argument, qualitative response analysis, missing-data sensitivity plan, and an ethically reviewed evaluation design. Those next steps expand the present finite studio; no public answer comparison or study checkmark certifies that they have already been completed.
