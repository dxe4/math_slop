var e=`---
id: course-applied-modeling-entry
title: "Build a First Model: Units, Balance and Uncertainty"
level: secondary
estimated_minutes: null
license: CC BY-SA 4.0
---

# Build a First Model: Units, Balance and Uncertainty

<!-- euler-course-route -->

## Current course route

Use the [course page](/courses/atlas-applied-modeling-entry/) for its present preparation and available study steps. This Outline keeps its original explanations and exercises while a complete primary-book syllabus is being assigned.

A gallery needs an exhibit card that another person can check: how many tile packs, how much painted surface, what a mixture label means, and what a dot rule actually promises. A single impressive number will not answer all four questions. We will build a small model by naming its purpose, quantities, assumptions and checks, then change its inputs and repair its failures.

This course starts with school arithmetic. It teaches the fractions, powers, rounding, simple algebra, inequalities and finite probability used below. No calculus, programming, participant study or physical mixture preparation is required. A calculator may check a division; the written explanation must still name what was divided by what. Every new fixture, coordinate and response here is explicitly authored for learning. They are not measurements, learner records or evidence about a teaching method. Mixtures are mathematical examples, not preparation instructions.

The complete study time depends on the selected reading, attempts and corrections. Existing source estimates describe their own resources and do not add up to an estimate for this course. Work in sittings that suit you; no speed target or timed mastery claim belongs to the route.

## Start here: preparation, route and records

You need addition, subtraction, multiplication and division of positive numbers. A **variable** is a name for a quantity that can take different values; a **function** is a rule assigning an output to each allowed input. An interval such as [11,13] includes both endpoints and every number between them. Read $a\\le b$ as “a is at most b.” This route teaches how to use those ideas rather than assuming an algebra course.

Follow this order: diagnostic; units and mural model; scaling; mixture balance; sharp bounds; dot probabilities; the ten source selections; then AP-ENTRY-P, AP-ENTRY-C and AP-ENTRY-R. The source-selection table names the required questions and their complete public keys. Other exercises in linked resources are optional. The model-cycle and scaling article questions fit after the corresponding explanations; Quantity Sessions 1–2 fit after the mixture and bounds explanations; finish with sensitivity and random art before the portfolios.

Keep your own worksheet trail. For each stable task ID AP-ENTRY-P, AP-ENTRY-C and AP-ENTRY-R, retain three separate texts: **first**, **comparison**, **revised**. In first, write your solution and list any help already used. In comparison, name the public model or other support you opened and record each agreement, disagreement and its consequence. In revised, correct the reasoning while preserving first; explain one change that affects a decision or claim. Plain text, a labelled paper worksheet, or speech with a verbatim transcript can carry the same mathematics. For digital files, names such as \`AP-ENTRY-P-first.txt\` keep identity independent of a course step's position.

These are learner-owned worksheet records, not new registered writing tasks. The shared reading note is one mutable string and does not automatically preserve these three versions. Save or download your separate documents before replacing text; do not overwrite an earlier attempt. Public models are visible below, so record what you actually consulted. Self-reported study checkmarks and a comparison with a public key are not grades, verified independence or certified mastery.

## Diagnostic with a complete key and repairs

Before reading the key, answer D1–D6 and keep the original. This selects a useful repair; it assigns no score.

1. **D1 — Units.** Convert 25 cm to metres. Find the area of a square of that side in m².
2. **D2 — Whole packs.** You need 41 tiles; packs contain 20. How many packs suffice, and why do two fail?
3. **D3 — References.** A conserved mixture contains 6 g salt and 94 g water. Find the salt fraction of the whole and the salt-to-water ratio.
4. **D4 — Scale.** Every length of a rectangle doubles. What happens to its area? What if only its width doubles?
5. **D5 — A changing denominator.** With 6 g salt fixed, does adding water increase or decrease its fraction of the mixture? Explain using positive denominators.
6. **D6 — Declared chance.** Each of two independent uniform dots on the unit square has chance 1/2 to be left. What is the chance both are left? Does that probability prove a supplied picture was randomly generated?

**Complete key.** D1: $25/100=0.25$ m, so square area $0.25\\times0.25=0.0625$ m². D2: two packs supply 40, which is less than 41; three supply 60, so three is the least sufficient count. D3: total mass $6+94=100$ g, whole fraction $6/100=3/50$, and salt-to-water ratio $6/94=3/47$ or $3:47$. D4: two changed lengths give $2\\times2=4$ times the area; width alone gives a factor 2. D5: for positive salt mass the numerator stays fixed and the positive denominator grows, so the fraction decreases; for example $6/100>6/110$. The general proof is in the bounds section. D6: independence gives $(1/2)(1/2)=1/4$. This is a consequence of the stipulated rule, not evidence of how a picture was made.

**Repairs.** For D1, write $100\\text{ cm}=1\\text{ m}$ and convert the side before multiplying two sides. For D2, make a table 1 pack→20, 2→40, 3→60 and find the first sufficient entry. For D3, label the denominator “whole” or “water” before simplifying; divide both top and bottom by the same nonzero number. For D4, expand area as width times height. For D5, compare fractions by multiplying by their positive denominators; do not infer a rule merely because two numbers increased. For D6, list the four equally likely left/right patterns LL, LR, RL, RR; only LL works. If basic operations still need attention, use [Signed Numbers to Equations](#/item/course-signed-numbers-to-equations) for balance and checking, or [Powers, Roots, and Scale](#/item/course-foundations-powers-roots-scale) for repeated multiplication, then return to the failed diagnostic item. You may use the worked repair while continuing.

## A model cycle: units, area, grid and packs

First write the decision in words: “For this rectangular panel, choose the least number of packs sufficient under the stated grid and spare-tile rules.” This fixes the target. It does not yet answer price, labour, colour or whether a different cutting plan is better. A useful cycle is: frame; name quantities; state assumptions; compute; check; revise a named assumption.

One metre is 100 centimetres and one litre is 1,000 millilitres. To convert centimetres to metres divide by 100. A square area multiplies two lengths: a 20 cm tile is 0.20 m on each side, hence $0.20^2=0.20\\times0.20=0.04$ m². Squaring means multiplying a number by itself; cubing means three factors. Converting an area by dividing by 100 would miss the second length: $1\\text{ m}^2=10{,}000\\text{ cm}^2$.

For positive panel width $W$, height $H$ and square-tile side $a$, in the same length unit, the **continuous area quotient** is $WH/a^2$. Its units cancel: m²/m² is dimensionless. That quotient may describe ideal coverage with reusable cuts. It need not be a whole-tile purchase count. Under an axis-aligned rectangular grid, negligible seams, cuts allowed at the outside edges and **no reuse of offcuts**, the rule is

$$G=\\lceil W/a\\rceil\\lceil H/a\\rceil.$$

The **ceiling** $\\lceil x\\rceil$ is the least integer at least $x$: ceiling(4)=4, ceiling(4.01)=5. Count columns and rows separately, rounding each upward, then multiply. For a 1.01 m square panel and 0.50 m tiles, the area quotient is $1.0201/0.25=4.0804$, but each direction needs three tiles: the stipulated grid needs nine. Rounding the area quotient to five cannot make that grid cover its partial third row and column. A different cutting/reuse rule requires a different model.

Let $b$ be a nonnegative extra-tile fraction and $p$ a positive whole number of tiles per pack. Here extra tiles are **additional stock**, not a bound on unknown damage. Our rule orders $S=\\lceil bG\\rceil$ spare tiles, requires $T=G+S$, and buys $B=\\lceil T/p\\rceil$ packs. A purchase is minimal under this rule if $(B-1)p<T\\le Bp$. State the rule before rounding; a fraction of breakages and a fraction added as spare stock have different denominators. These portfolios use the latter.

The smooth comparison $N=(WH/a^2)(1+b)$ is useful for sensitivity, but never replaces the specified grid order. A finite change means recalculate after changing one named input and holding the others fixed. Raising $x$ by $r\\%$ adds $x(r/100)$, so the new value is $x(1+r/100)$. Thus a 4% increase from 0.25 m gives $0.25(1.04)=0.26$ m. If side changes from $a$ to $a'$, the exact smooth ratio is $(a/a')^2$. A waste rate rising from 10% to 20% increases by ten **percentage points** and doubles that rate; its multiplier $1+b$ rises only from 1.1 to 1.2. Name the reference before interpreting a percentage change. Pack counts can stay constant or jump. For packs of 20, requirements 179 and 180 both need nine packs, while 181 needs ten. A derivative is a limiting rate for very small changes; the sensitivity article's optional derivative explanation is not required here. Its smooth elasticity −2 is not an exact rule for a finite change or a pack count.

Read [A model begins with a question](/articles/mathematical-modelling-model-cycle/) and later [Which assumption matters most?](/articles/mathematical-modelling-sensitivity/) with these distinctions in mind. A correct units check can reject nonsense, but cannot prove the cutting assumptions fit an actual panel. A mock-up of the partial edge would test them; none has been performed for these authored fixtures.

## Scale follows the lengths that actually change

If every corresponding length changes by the same positive factor $s$, shapes are **similar**. A rectangular face changes from $LW$ to $(sL)(sW)=s^2LW$; box volume changes from $LWH$ to $(sL)(sW)(sH)=s^3LWH$. This proves the area and volume powers by multiplication. No calculus is involved. If tiles also enlarge by $s$, numerator and denominator of the ideal tile quotient both multiply by $s^2$; if tile side stays fixed, only the panel area changes. Name what stays fixed.

Use an open-front cube with five painted square faces, original edge 1 m. Original painted area is 5 m² and its enclosing box volume is 1 m³. At uniform factor $3/2$, each face is $(3/2)^2=9/4$ m², giving $45/4$ m² painted area; volume is $(3/2)^3=27/8$ m³. A stipulated one-coat coverage of 5 m²/L gives $(45/4)/5=9/4$ L of paint. Cans of 1 L require three cans, since two litres fall short. Coverage times litres recovers area, a useful inverse check.

If only the front width becomes 1.5 m while depth and height stay 1 m, compute each face. Back, floor and ceiling have area 1.5 m² each; two sides have area 1 m² each. Total painted area is $3(1.5)+2(1)=6.5$ m², and volume is $1.5\\times1\\times1=1.5$ m³. There is no common scale factor for all lengths, so $5(1.5)^2=11.25$ m² answers a different question. Units alone would not catch that false geometry.

Read [Build a miniature gallery that scales](/articles/mathematical-modelling-scaling/). The [Powers, Roots, and Scale Explorer](#/item/visual-lab-foundations-powers-roots-scale) is optional. Text alternatives are the products above and the portfolio face counts below; dragging, colour and animation supply no required information.

## Balance first, then choose the mixture denominator

Let $m$ be salt mass in grams, $w$ water mass in grams and $V$ the **final mixture volume** in litres. Assume no other material and no losses, so the total mass is $M=m+w$. Conservation is a balance statement: what enters remains unless a specified removal takes it out. Adding grams to millilitres is meaningless. Mass conservation does not make final volume equal to water volume.

Three legitimate questions have three answers:

| Question | Expression | Reference and unit |
| --- | --- | --- |
| What fraction of mixture mass is salt? | $f=m/(m+w)$ | Whole mass; dimensionless |
| How much salt relative to water? | $r=m/w$ | Water mass; dimensionless; also write salt:water |
| How much salt per litre of final mixture? | $c=m/V$ | Final mixture volume; g/L |

For 12 g salt, 188 g water and a hypothetical reported final volume of 190 mL, $M=200$ g, $f=12/200=3/50=6\\%$, $r=12/188=3/47$, and $c=12/0.190=1200/19$ g/L. Percent means per hundred: multiply a fraction by 100 to express its percentage. A percent is not g/L. Fraction simplification divides numerator and denominator by the same nonzero number. Fraction division reverses multiplication: $12/(190/1000)=12(1000/190)$.

Check by multiplying back: $(3/50)(200\\text{ g})=12$ g and $(1200/19\\text{ g/L})(19/100\\text{ L})=12$ g. Also $f=r/(1+r)$, because dividing both numerator and denominator of $m/(m+w)$ by positive $w$ gives $(m/w)/(m/w+1)$. Thus different correct ratios remain related without becoming interchangeable.

Adding 40 g pure water gives new salt 12 g, water 228 g and total 240 g. Salt fraction becomes $12/240=1/20$. No final volume after addition was supplied; its concentration is undetermined. It is not legitimate to add 40 mL or assume a mixture density from a water mass. Two possible final volumes 0.230 L and 0.240 L would give $1200/23$ g/L and 50 g/L with those same masses.

For a well-stirred mixture, we **stipulate** a homogeneous-withdrawal model: removing a fraction $q$ of total mass removes that fraction of salt and water separately. In a 150 g mixture, a 30 g withdrawal has $q=30/150=1/5$; remaining component masses are each $4/5$ of their old values. This is a model hypothesis, not a consequence of total mass alone. Subsequent pure water changes water mass only. The changed portfolio uses this rule and checks both component balances.

Read [Quantity, Evidence, and Teaching](#/item/course-quantity-evidence-and-teaching), Session 1 only at this stage. Its later research protocols and scoring conventions are outside this entry route. The optional [What Does This Quotient Measure?](#/item/visual-lab-quantity-division) offers another way to explore division; the table, equations and multiply-back checks here provide the complete arithmetic alternative.

## Sharp bounds are feasible extremes, not probabilities

An uncertainty interval here declares allowed inputs. It does not say they are equally likely, independently random or measured with a stated confidence level. “Every pair allowed” describes a feasible set, not a probability distribution. A **sharp** bound is one that cannot be improved because an allowed input actually attains it. In the proof, **expanding** uses the distributive law $a(b+c)=ab+ac$; **cancelling** subtracts the same term from both sides. Multiplying an inequality by a positive number preserves its direction.

For $w>0$ and $0\\le m_1<m_2$, denominators are positive. Multiplying an inequality by their positive product keeps its direction. Comparing $m_1/(m_1+w)$ and $m_2/(m_2+w)$ reduces, after expanding and cancelling $m_1m_2$, to $m_1w<m_2w$. Hence more salt with water fixed increases the fraction. For $m>0$ and $0\\le w_1<w_2$, the same positive-denominator comparison gives $m/(m+w_2)<m/(m+w_1)$. More water with salt fixed decreases it. When $m=0$ the fraction is zero for positive water, not strictly decreasing; at $m=w=0$ it is undefined. Hypotheses protect the claim.

With $m\\in[11,13]$ and $w\\in[178,198]$ g, every pair allowed, the least fraction uses the smallest salt mass and largest water mass, $11/(11+198)=11/209$. The greatest uses the largest salt mass and smallest water mass, $13/(13+178)=13/191$. Those corners are allowed, so both bounds are attained and sharp. A table of a few samples would not prove the universal assertion; the monotonic comparison does.

Total mass ranges from 189 to 211 g. Treating it independently of salt produces $11/211\\le f\\le13/189$, a valid conservative enclosure, but neither endpoint is feasible: $m=11,M=211$ would need $w=200$, while $m=13,M=189$ would need $w=176$. Shared variables make a difference. Do not call a valid loose enclosure a sharp minimum and maximum.

If also $V\\in[185,195]$ mL and every triple is allowed, concentration is smallest at the smallest salt mass and largest volume: $11/0.195=2200/39$ g/L. It is greatest at the largest salt mass and smallest volume: $13/0.185=2600/37$ g/L. Increasing a positive denominator reduces a positive quotient. These concentration bounds are sharp because the relevant triples are feasible. If instead a further equation fixes $m+w=200$, the salt/water corners must obey it; rederive bounds on that smaller set. AP-ENTRY-R makes this change explicit.

Complete the selected Session 2 proofs and uncertainty question in [Quantity, Evidence, and Teaching](#/item/course-quantity-evidence-and-teaching). Keep its hypotheses and distinction between a conservative bound and an attained extreme. The source's authored mathematical key is a comparison resource, not learner evidence.

## Declare a dot rule before multiplying chances

A coordinate pair $(x,y)$ locates a dot horizontally and vertically. The unit square is $0\\le x\\le1$, $0\\le y\\le1$. A **uniform** dot on it has probability equal to a region's area. A rectangle of width $u$ and height $v$ therefore has probability $uv$. A boundary line has zero area in this continuous ideal model. **Independent** draws mean one dot's stipulated chances are unaffected by earlier dots; **identically distributed** means each uses the same rule. Together these are abbreviated iid.

If the chosen region has probability $p$, one dot avoids it with probability $1-p$; “avoid” is the **complement** of “inside.” For $n$ independent dots the chance all avoid it is $(1-p)^n$, a product of $n$ identical factors. The expected count is $np$: assign each dot a 1 when inside and 0 otherwise, with average contribution $p$, then add these contributions. Expected count need not be an integer or match a particular picture. This expectation argument does not require independence, although the avoidance product does.

For four dots and the top quarter $y>0.75$, $p=1/4$, so no dot there has probability $(3/4)^4=81/256$ and expected count $4/4=1$. Read [Rules, randomness and repeatability in art](/articles/mathematical-modelling-random-art/) and its two questions. A supplied coordinate table can be reproduced by copying it. It supplies no evidence that iid sampling produced it. An optional computer implementation must state generator, version, seed and coordinate rule; a seed alone does not define those choices. No program or generated image is required for these portfolios.

Choosing a preferred preview changes the distribution of exhibited pictures. In AP-ENTRY-C, two independent three-dot previews are compared and the one with fewer top-right-quadrant dots is selected. A preview has zero such dots with probability $q=(3/4)^3=27/64$. The selected image has zero if at least one preview has zero. Both nonzero has probability $(1-q)^2$, so selected-zero probability is $1-(1-q)^2=2727/4096$. That uses independence **between previews** as well as within each. The original single-preview expectation cannot simply be relabelled as the selected-picture expectation.

Rejecting a dot near an earlier dot changes the later accepted positions. A minimum-distance rule therefore breaks the stipulated iid law, even if a saved algorithm and seed reproduce its output. Repeatability, a probability model and aesthetic judgement answer separate questions. The static tables below are authored illustrations, not random samples.

## Required source questions and exact public-key addresses

Complete every row. The four canonical article links open their pages; each page's worked answer is inside its named practice section. The summaries below are exact readable addresses, not invented per-question permalinks. Attempt the named question before opening its answer when possible; record any prior viewing in comparison. The final column is a brief check, not a replacement for the source's full reasoning.

| Selection | Required question | Full key address in that reading | Check |
| --- | --- | --- | --- |
| MC1 — [model cycle](/articles/mathematical-modelling-model-cycle/) | “Test the model”, Question 1: 2.4 m by 1.8 m panel, 30 cm squares; area and grid, with explanation | “Test the model” → “Fully worked answer to question 1” | 4.32/0.09 = 48; 8 columns × 6 rows |
| MC2 — same reading | “Test the model”, Question 2: tile side “20” without a unit, teammate uses 6/400; diagnose and request a check | “Test the model” → “Fully worked answer to question 2” | Ask the tile unit; if cm, 6/0.04 = 150 and check 15 × 10 |
| SC1 — [scaling](/articles/mathematical-modelling-scaling/) | “Scale a new display”, Question 1: height 0.8→1.2 m, original area 3 m² and volume 0.4 m³ | “Scale a new display” → “Fully worked answer to question 1” | s = 1.5; 6.75 m²; 1.35 m³ |
| SC2 — same reading | “Scale a new display”, Question 2: wall 4 m by 3 m, width alone becomes 6 m; challenge squared factor | “Scale a new display” → “Fully worked answer to question 2” | 18 m², not 27; common scaling of both lengths is absent |
| QE1 — [Quantity](#/item/course-quantity-evidence-and-teaching) | Session 1, “Write before opening the solution”, Questions 1–3: 15 g salt, 250 g water, final volume 260 mL; distinguish references, units and missing-volume information | “1. Quantities, references, and the first task” → “Full first-task solution”, followed by “A reversible check and a useful identity” | 3/53; 3/50; 750/13 g/L; masses alone do not fix volume |
| QE2 — same reading | Session 1 Question 4 via Session 2: prove both directions; all pairs m∈[14,16], w∈[240,260]; sharp bounds. Also repair the attempted proof in Session 2 | “2. Proof and sharp uncertainty bounds” → “Increasing salt with water fixed”, “Increasing water with salt fixed”, “Full uncertainty solution”, and “Proof-repair task and answer” | 7/137 to 1/16, attained; 7/138 to 8/127 is conservative only |
| SE1 — [sensitivity](/articles/mathematical-modelling-sensitivity/) | “Choose a useful check”, Question 1: A = 8 m², a = 0.25 m, w = 0.05; then side +4%, others fixed | “Choose a useful check” → “Fully worked answer to question 1” | 134.4; new/old = 625/676; new ≈124.26, not the local −8% shortcut |
| SE2 — same reading | “Choose a useful check”, Question 2: 20-tile packs, requirements 165 and 163; is smooth elasticity exact? | “Choose a useful check” → “Fully worked answer to question 2” | Both nine packs; 160→161 crosses eight→nine |
| RA1 — [random art](/articles/mathematical-modelling-random-art/) | “Separate rule, draw and judgement”, Question 1: four iid dots; none in top quarter and expected count | “Separate rule, draw and judgement” → “Fully worked answer to question 1” | 81/256 and 1, under the declared iid rule |
| RA2 — same reading | “Separate rule, draw and judgement”, Question 2: redraw dots within 0.1 of earlier ones; iid? seed useful? | “Separate rule, draw and judgement” → “Fully worked answer to question 2” | Accepted positions depend on earlier dots; reproduce the changed rule, do not retain the old iid calculation |

The original Unhurried mathematical-modelling sampler remains a separate resource with its own assignment and conventions. This route does not assign its capstone or carry over its scoring or time allowance. The fixed AP-ENTRY portfolios below supply the complete models required here. None of the source readings is rewritten by this course.

## Exhibit portfolio contract: twelve deliverables each time

Complete AP-ENTRY-P, then the changed AP-ENTRY-C, then AP-ENTRY-R in a later sitting if useful. “Return” describes a public self-study opportunity; no elapsed delay, unseen attempt or independent transfer is verified. Each uses the following twelve deliverables. Its inputs and full model are both public.

1. State the exhibit decision, information available and scope. Specify grid, spare stock, paint and dot assumptions; name a practical question left unanswered.
2. Make an input/output table, convert tile side to metres and mixture volume to litres, and attach units before calculating.
3. Calculate area quotient, columns, rows, grid, extra stock, required tiles and least packs. Show that one fewer pack fails. Explain any difference from the smooth area order.
4. Derive the booth's painted area and volume from its actual changed dimensions. Find paint litres and least whole cans; distinguish surface from volume.
5. Calculate initial total mixture mass, whole fraction, salt-to-water ratio and concentration. Name each denominator and multiply back to recover salt mass.
6. Give separate salt and water balance lines for the prescribed change. Calculate final mass, fraction and salt-to-water ratio. Explain what is missing for final g/L.
7. Prove the monotonic directions under positive quantities; give sharp fraction and initial-concentration bounds with feasible attainment. Obey any additional feasible-set equation.
8. Recompute the specified finite sensitivity scenario. Hold other inputs fixed; compare the smooth ratio with grid and pack outcomes. Explain one pack threshold.
9. Derive region probability, unselected expected count and no-region probability. Count the provided coordinates. For C, also derive the selected-zero probability; disclose selection or rejection limitations.
10. Propose one specific real-world check that could falsify an assumption, say what observation would make you revise it, and describe the replacement model's required input. Distinguish this proposal from a performed measurement.
11. Repair the supplied consequential error in words and numbers; state the changed decision or forbidden claim, preserving any valid work.
12. Keep first, comparison and revised separately, with task ID, help used, model opened, a consequential correction and an unresolved limitation. Preserve the earlier text.

Use these as completion criteria, without points or grades. A missing unit calls for a unit repair; a correct result without a derivation calls for an explanation; an infeasible equality case calls for a new bounds argument. The complete models are comparison support. Equivalent fractions and transparently rounded decimals are acceptable, but a rounded count must still satisfy the exact pack or can inequality.

## AP-ENTRY-P: primary exhibit and full model

### P — Printed inputs

Every value in this table is authored. All salt/water/volume triples in its three intervals are allowed; there is no fixed-total constraint on those uncertain triples. The nominal mass total is not an extra constraint on them. Use the grid and spare-stock rules already stated, and one coat of paint.

| Input | Authored value |
| --- | --- |
| Panel width | 3.10 m |
| Panel height | 2.10 m |
| Tile side | 20 cm |
| Tiles per pack | 20 |
| Extra-tile fraction | 1/10 |
| Booth original edge | 1 m |
| Booth change | all lengths × 3/2 |
| Paint coverage | 5 m²/L |
| Can volume | 1 L |
| Salt mass | 12 g |
| Water mass | 188 g |
| Total mixture volume | 190 mL |
| Salt interval | [11,13] g |
| Water interval | [178,198] g |
| Volume interval | [185,195] mL |
| Mixture change | add 40 g pure water |
| Dot count | 6 |
| Dot region | x < 1/3 |
| Preview count | 1 |
| Sensitivity change | tile side 25 cm |

Use six authored coordinate pairs in the printed order: (0.10,0.10), (0.20,0.80), (0.40,0.20), (0.50,0.70), (0.70,0.40), (0.90,0.90). Treat this as a static exhibit design; separately calculate what the declared iid uniform model would imply. Write twelve deliverables before comparing as far as practical.

### P — Complete public model

**Decision and assumptions.** Choose minimum tile packs and paint cans for this specified exhibit design. Tiles form an aligned grid; edge cuts are discarded, seams have zero width, and extra stock is an addition of one tenth of the grid count rounded upward. The five booth faces scale uniformly; coverage is a stipulated constant for one coat. Mixture components are conserved. Dot probabilities concern unselected iid uniform drawings, while these listed points are authored. The card does not determine installation labour or actual losses.

**Tile and scale derivation.** Side is 0.20 m. Panel area is $3.10(2.10)=6.51$ m² and tile area is 0.04 m², so continuous quotient is $651/4=162.75$. Width needs ceiling(15.5)=16 columns; height needs ceiling(10.5)=11 rows, so $G=176$. Extra stock is ceiling(17.6)=18, giving $T=194$ and ten packs: $9(20)=180<194\\le200=10(20)$. The smooth allowance is $162.75(1.1)=179.025$, whose nine-pack purchase would supply only 180, insufficient for this grid-plus-stock rule. At scale $3/2$, five faces give $5(3/2)^2=45/4$ m²; box volume is $27/8$ m³. Paint is $9/4$ L. Two 1 L cans fail and three suffice.

**Mixture and bounds.** Initial $M=200$ g, $f=3/50$, $r=3/47$, $c=1200/19$ g/L. The earlier multiply-back checks recover 12 g. After addition, salt $12+0=12$ g and water $188+40=228$ g give $M'=240$ g, $f'=1/20$, $r'=1/19$. Final volume is absent, so final concentration is undetermined; two different final volumes with these masses give different g/L. For the initial allowed triples, monotonicity proved above gives $11/209\\le f\\le13/191$, attained at $(m,w)=(11,198)$ and $(13,178)$. Concentration is between $2200/39$ and $2600/37$ g/L, attained at $(m,V)=(11,195\\text{ mL})$ and $(13,185\\text{ mL})$; choose any allowed water there. The bounds have no coverage probability.

**Sensitivity and dots.** Changing only tile side to 0.25 m gives 13 columns and nine rows, hence $G=117$, extra stock ceiling(11.7)=12, requirement 129 and seven packs: $120<129\\le140$. Smooth count ratio is $(20/25)^2=16/25$, while pack ratio is $7/10$. They answer different questions. For six iid uniform dots, left-third area is $p=1/3$, expected count is 2 and no-region chance is $(2/3)^6=64/729$. The authored table has exactly two left-third dots. Agreement with expectation does not establish how the coordinates were produced, independence or aesthetic quality.

| P key quantity | Exact model value |
| --- | --- |
| Area quotient | 651/4 |
| Grid count | 176 |
| Extra tiles | 18 |
| Required tiles | 194 |
| Packs | 10 |
| Purchased tiles | 200 |
| Booth painted area | 45/4 m² |
| Booth box volume | 27/8 m³ |
| Paint | 9/4 L |
| Cans | 3 |
| Initial total mass | 200 g |
| Salt fraction | 3/50 |
| Salt/water ratio | 3/47 |
| Concentration | 1200/19 g/L |
| Final salt mass | 12 g |
| Final water mass | 228 g |
| Final total mass | 240 g |
| Final salt fraction | 1/20 |
| Final salt/water ratio | 1/19 |
| Fraction lower bound | 11/209 |
| Fraction upper bound | 13/191 |
| Concentration lower bound | 2200/39 g/L |
| Concentration upper bound | 2600/37 g/L |
| Changed grid count | 117 |
| Changed extra tiles | 12 |
| Changed required tiles | 129 |
| Changed packs | 7 |
| Smooth count ratio | 16/25 |
| Region probability | 1/3 |
| Unselected expected count | 2 |
| Unselected no-region probability | 64/729 |
| Authored region count | 2 |

**Proposed check and consequential repair.** A trial layout at the upper-right edge could reveal that seams occupy non-negligible width. If measured tile-plus-seam pitch differs from 0.20 m, record that pitch and the boundary convention, then rebuild row/column counts; this trial has not been carried out. The authored bad response “area with extras is 179.025, so nine packs are sufficient” has valid continuous arithmetic but solves a different procurement rule. Repair the row/column model and buy ten packs under the declared rule. Also repair “the interval is a 95% confidence interval” by removing 95%: only deterministic admissibility was given. In your comparison, record whether either change affected your own first card; preserve it, and in revised state the corrected order and claim boundary.

## AP-ENTRY-C: changed exhibit and full model

### C — Printed inputs

These new inputs are authored, not observations of a new learner or physical exhibit. All initial triples in the intervals are allowed independently as a feasible set. The nominal 150 g total does not constrain those triples. For the mixture change, use the nominal masses and the stipulated homogeneous withdrawal rule; the uncertainty question concerns the initial mixture only.

| Input | Authored value |
| --- | --- |
| Panel width | 2.65 m |
| Panel height | 1.35 m |
| Tile side | 30 cm |
| Tiles per pack | 12 |
| Extra-tile fraction | 3/20 |
| Booth original edge | 1 m |
| Booth change | width only × 3/2 |
| Paint coverage | 5 m²/L |
| Can volume | 1 L |
| Salt mass | 9 g |
| Water mass | 141 g |
| Total mixture volume | 125 mL |
| Salt interval | [8,10] g |
| Water interval | [131,151] g |
| Volume interval | [120,130] mL |
| Mixture change | withdraw 30 g homogeneous mixture, then add 30 g pure water |
| Dot count | 3 |
| Dot region | x > 1/2 and y > 1/2 |
| Preview count | 2 |
| Sensitivity change | tile side 27 cm |

Authored preview A is (0.20,0.20), (0.70,0.80), (0.90,0.90); preview B is (0.10,0.90), (0.80,0.10), (0.40,0.40). Select the preview with fewer region dots, breaking a tie in favour of A. Derive probabilities separately under the stipulated experiment of two independent iid uniform previews. A static pair of authored tables does not execute that experiment.

### C — Complete public model

**Decision and changed geometry.** Retain the same grid and no-offcut-reuse rule, now with 15% extra stock and packs of 12. The continuous quotient is $(2.65)(1.35)/0.30^2=3.5775/0.09=159/4=39.75$. Columns ceiling(53/6)=9 and rows ceiling(9/2)=5 give $G=45$. Extra stock ceiling($45\\times3/20$)=7 gives $T=52$, hence five packs: $4(12)=48<52\\le60=5(12)$. The smooth allowance $39.75(1.15)=45.7125$ would buy four packs and fail the grid-plus-stock rule. Only booth width changes: back, floor and ceiling are each 1.5 m², two sides each 1 m². Area is $13/2$ m² and volume $3/2$ m³. Paint is $13/10$ L; one can fails, two suffice. Similarity is absent.

**Mixture balance.** Initially total is 150 g, $f=9/150=3/50$, $r=9/141=3/47$ and $c=9/0.125=72$ g/L. Multiplying by 150 g and 0.125 L recovers 9 g respectively. Withdrawal fraction $30/150=1/5$ removes $9/5$ g salt and $141/5$ g water; those sum to 30 g. Remaining salt is $9-9/5=36/5$ g; water is $141-141/5=564/5$ g. Adding 30 g water gives $714/5$ g water and total $(36+714)/5=150$ g. Final fraction is $6/125$ and salt-to-water ratio $6/119$. Total mass returned to 150 g, but salt mass did not return to 9 g. No final-volume measurement was given, so final g/L remains undetermined.

**Bounds and finite change.** The initial rectangle and positive-denominator comparison yield $8/159\\le f\\le10/141$, at $(8,151)$ and $(10,131)$. Initial concentration bounds are $800/13\\le c\\le250/3$ g/L, at $(m,V)=(8,130\\text{ mL})$ and $(10,120\\text{ mL})$; compatible water values are allowed. All are attained. Changing only side to 0.27 m needs ceiling(265/27)=10 columns and ceiling(5)=5 rows: $G=50$. Extra stock ceiling(7.5)=8 gives $T=58$, still five packs because $48<58\\le60$. The smooth ratio is $(30/27)^2=100/81>1$, yet pack count does not change. This is a sensitivity statement about the stipulated scenario, not an estimate of actual tile uncertainty.

**Dots and selection.** The region has width 1/2 and height 1/2, hence $p=1/4$. One unselected three-dot preview has expected count $3/4$ and probability $(3/4)^3=27/64$ of zero region dots. Preview A's table has two, B's has zero, so select B. For the declared independent-preview experiment, selected-zero probability is $1-(37/64)^2=2727/4096$. Selection increases this probability above $27/64$; do not use the unselected iid statement as the exhibited-image law or claim the authored B demonstrates chance sampling.

| C key quantity | Exact model value |
| --- | --- |
| Area quotient | 159/4 |
| Grid count | 45 |
| Extra tiles | 7 |
| Required tiles | 52 |
| Packs | 5 |
| Purchased tiles | 60 |
| Booth painted area | 13/2 m² |
| Booth box volume | 3/2 m³ |
| Paint | 13/10 L |
| Cans | 2 |
| Initial total mass | 150 g |
| Salt fraction | 3/50 |
| Salt/water ratio | 3/47 |
| Concentration | 72 g/L |
| Final salt mass | 36/5 g |
| Final water mass | 714/5 g |
| Final total mass | 150 g |
| Final salt fraction | 6/125 |
| Final salt/water ratio | 6/119 |
| Fraction lower bound | 8/159 |
| Fraction upper bound | 10/141 |
| Concentration lower bound | 800/13 g/L |
| Concentration upper bound | 250/3 g/L |
| Changed grid count | 50 |
| Changed extra tiles | 8 |
| Changed required tiles | 58 |
| Changed packs | 5 |
| Smooth count ratio | 100/81 |
| Region probability | 1/4 |
| Unselected expected count | 3/4 |
| Unselected no-region probability | 27/64 |
| Selected no-region probability | 2727/4096 |
| Authored A region count | 2 |
| Authored B region count | 0 |
| Authored selected region count | 0 |

**Proposed check and consequential repair.** A component assay of a real withdrawn portion could challenge homogeneity; a different salt fraction would require measured component removal, not a blanket one-fifth rule. No assay is performed here. Repair the authored response “the final mass is 150 g again, so it still contains 9 g salt and is 6% salt.” Its total is valid, but it overlooks removed salt: final salt is $36/5$ g, fraction $6/125=4.8\\%$, with no justified final g/L. Repair also “width factor 1.5 gives 11.25 m²”: count the five faces to obtain 6.5 m² and two paint cans rather than three. Preserve valid arithmetic while correcting its interpretation. Retain all three C worksheet versions; in revised explain the role of changed geometry, removal and preview selection, not merely the new numerals.

## AP-ENTRY-R: public return and full model

### R — Printed inputs

Close previous models before attempting if useful, and declare any you reopen. All inputs and coordinates remain authored. **This time total initial mass is fixed at 200 g:** allowed salt masses lie in [7,9] g and water is exactly $200-m$ g, hence in [191,193] g. Each allowed salt mass can accompany each allowed volume in [195,205] mL. Do not import the independent rectangle from P or C.

| Input | Authored value |
| --- | --- |
| Panel width | 2.40 m |
| Panel height | 1.81 m |
| Tile side | 30 cm |
| Tiles per pack | 12 |
| Extra-tile fraction | 1/10 |
| Booth original edge | 1 m |
| Booth change | all lengths × 1/2 |
| Paint coverage | 5 m²/L |
| Can volume | 1 L |
| Salt mass | 8 g |
| Water mass | 192 g |
| Total mixture volume | 200 mL |
| Salt interval | [7,9] g |
| Water interval | [191,193] g |
| Feasible-set rule | m + w = 200 g |
| Volume interval | [195,205] mL |
| Mixture change | add 50 g pure water |
| Dot count | 5 |
| Dot region | x < 1/2 |
| Preview count | 1 |
| Sensitivity change | panel height 1.80 m |

Authored coordinates are (0.10,0.20), (0.30,0.80), (0.40,0.40), (0.60,0.70), (0.90,0.10). The declared probability experiment is one unselected five-dot iid uniform preview. Also explain why adding a rule to reject dots near earlier ones would require a new probability model. Submit the same twelve deliverables with an R first/comparison/revised trail.

### R — Complete public model

**Counts, scale and balance.** Tile side is 0.30 m. The area quotient is $2.40(1.81)/0.09=724/15$. Width needs eight columns, height needs ceiling(181/30)=7 rows, so $G=56$. Extras ceiling(5.6)=6 give $T=62$, and six packs are least: $60<62\\le72$. The smooth allowance is $(724/15)(11/10)=3982/75$, which suggests five packs, insufficient under this rule. Uniform factor 1/2 gives five faces of area 1/4 each: $5/4$ m², enclosing volume $1/8$ m³, paint $1/4$ L and one 1 L can. A zero-can purchase cannot cover the positive area.

Initial mass is 200 g, $f=8/200=1/25$, $r=8/192=1/24$, $c=8/0.200=40$ g/L. Multiplying fraction by total mass and concentration by volume each recovers 8 g. Addition gives salt 8 g, water $192+50=242$ g, total 250 g, $f'=4/125$ and $r'=4/121$. Final concentration is undetermined without final volume; conserved masses do not supply it.

**Changed feasible set and sensitivity.** Since $m+w=200$, fraction is exactly $m/200$, so its sharp bounds are $7/200$ and $9/200$. Attainment uses $(m,w)=(7,193)$ and $(9,191)$, both feasible. Combining salt 7 with water 191 is forbidden because their sum is 198. The independent-interval enclosure $7/200$ to $9/200$ happens to have the same extrema here because those opposite corners satisfy the total constraint, but the proof must respect the smaller set; treating total mass as separately adjustable would give a loose enclosure $7/202$ to $9/198$. Concentration bounds are $1400/41$ and $600/13$ g/L, at triples $(7,193,205\\text{ mL})$ and $(9,191,195\\text{ mL})$. These are feasible and sharp; they are not confidence intervals.

Changing only panel height from 1.81 m to 1.80 m removes a partial row: eight columns × six rows gives $G=48$. Extras ceiling(4.8)=5 give $T=53$, so five packs suffice: $48<53\\le60$. Smooth ratio is $1.80/1.81=180/181$, while pack ratio is $5/6$. The small length change crosses a grid boundary and then a pack boundary. For this pack size, 60 required tiles need five packs and 61 need six; the exact thresholds govern the order.

**Dot claim and limits.** The left-half region has $p=1/2$, expected count $5/2$, and avoidance probability $(1/2)^5=1/32$. Three authored coordinates lie left. A noninteger expectation does not invalidate an integer observed count. A rejection rule depending on earlier dots destroys the stipulated independence and changes accepted-position distributions; the formula cannot be carried over just because its seed or output is reproducible.

| R key quantity | Exact model value |
| --- | --- |
| Area quotient | 724/15 |
| Grid count | 56 |
| Extra tiles | 6 |
| Required tiles | 62 |
| Packs | 6 |
| Purchased tiles | 72 |
| Booth painted area | 5/4 m² |
| Booth box volume | 1/8 m³ |
| Paint | 1/4 L |
| Cans | 1 |
| Initial total mass | 200 g |
| Salt fraction | 1/25 |
| Salt/water ratio | 1/24 |
| Concentration | 40 g/L |
| Final salt mass | 8 g |
| Final water mass | 242 g |
| Final total mass | 250 g |
| Final salt fraction | 4/125 |
| Final salt/water ratio | 4/121 |
| Fraction lower bound | 7/200 |
| Fraction upper bound | 9/200 |
| Concentration lower bound | 1400/41 g/L |
| Concentration upper bound | 600/13 g/L |
| Changed grid count | 48 |
| Changed extra tiles | 5 |
| Changed required tiles | 53 |
| Changed packs | 5 |
| Smooth count ratio | 180/181 |
| Region probability | 1/2 |
| Unselected expected count | 5/2 |
| Unselected no-region probability | 1/32 |
| Authored region count | 3 |

**Proposed check and consequential repair.** A documented weighing procedure could test the stipulated fixed initial total: if a real allowed record had total 201 g, this feasible set would not contain it, so revise the total constraint before bounding. Such a procedure is proposed, not performed. Repair the authored response “7/202 is the sharp minimum because total can be 202 g.” The arithmetic comes from independently combining maxima in interval notation, but 202 g violates the fixed-total equation. The actual attained minimum is 7/200. Also repair “expected count is 2.5, so round to three and claim every picture has three”: expectation describes the model's average over possible pictures, not a prescribed count. Keep those repaired claims and the five-versus-six pack threshold visible in the revised R card.

## Compare, repair and choose a continuation

For each task, compare all twelve deliverables with its complete model, without awarding a grade. A concise comparison can read: “AP-ENTRY-P; opened P complete model after first; my nine-pack order omitted partial rows; corrected to ten because 180 < 194; no layout trial performed.” A revised card repeats the corrected calculation and scope in a form another reader can follow. If your first answer was already correct, preserve it and explain an independently checked equality or a limitation; a fabricated error is unnecessary.

If units fail, return to the side/area conversion and multiply-back checks. If packs fail, list columns and rows and test one fewer pack. If balance fails, keep separate salt and water ledgers through removal and addition. If sharpness fails, show an allowed equality case for each endpoint. If probability fails, name the region, complement and independence assumption before multiplying; if selection changed, derive the changed event. Rework the affected deliverable, not just its final numeral.

The optional readings and visual instruments support exploration, while the printed tables and products make every required task possible in text. Continue to [Models Before Answers](#/item/deep-dive-models-before-answers) for a broader sampler of modelling questions. [Applied Modeling: From Mechanisms to Decisions](#/item/course-applied-modeling-standard) is a later course with additional algebra, probability and calculus preparation; finishing this entry route alone does not supply all of it. Quantity's later education-study protocols likewise require their own preparation and are not an entry-course assessment. These public authored examples establish mathematical consequences under stated assumptions, with learning outcomes still unmeasured.
`;export{e as default};