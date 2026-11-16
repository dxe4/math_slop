var e=`---
parent_id: book-teaching-for-mathematical-understanding
matter_id: earlier-mathematical-design-cases
title: "Mathematical Design Cases"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Mathematical Design Cases

These earlier teaching examples retain their original mathematical arguments and source references. Their old chapter numbering describes the earlier arrangement.

# Teaching for Mathematical Understanding

Knowing mathematics and knowing how learners may encounter it are related but not identical. A teacher must solve a problem, choose examples that expose its structure, interpret unfinished reasoning, distinguish a slip from a durable conception, and decide what evidence would justify the next instructional move.

This compact book is for tutors, teachers, curriculum writers, mentors, and mathematically curious learners. It does not offer a universal teaching script. Educational evidence is conditional on age, setting, language, curriculum, implementation, and outcome measure. Instead, it builds a reusable cycle around real mathematics:

$goal \\to task \\to anticipated reasoning \\to representation \\to evidence \\to response$.

## 1. Mathematical proficiency is braided

The US National Research Council’s consensus report [*Adding It Up*](https://www.nationalacademies.org/publications/9822) describes five interdependent strands: conceptual understanding, procedural fluency, strategic competence, adaptive reasoning, and productive disposition. A learner is not well served by forcing these into a contest.

Consider $18\\times 25$.

- A standard written algorithm can be accurate and efficient.
- $25\\times (20-2)=500-50=450$ exposes distributivity.
- Four 25s make 100, so eighteen 25s make four groups of 100 plus two 25s: 450.
- Estimating $20\\times 25=500$ checks magnitude.
- Explaining why both decompositions agree exercises reasoning.

Fluency practiced without attention to meaning can transfer poorly, while reasoning that has not become fluent can remain effortful. The instructional aim here is to connect them; how well a particular design does so is an empirical question.

### Task audit

“Calculate $18\\times 25$” may reveal an answer. “Find two methods, connect each line to distributivity, and say which you would use mentally” reveals more kinds of knowledge without abandoning calculation.

## 2. Begin with an explicit mathematical goal

“Learn fractions” is too broad. A usable goal names an object, relation, and evidence:

> Learners will compare positive fractions by constructing a common unit, and justify the comparison with a number line or equivalent fractions.

Now task and assessment can align. To compare $5/8$ and $2/3$, one method uses denominator 24:

$5/8=15/24$, $2/3=16/24$, so $2/3>5/8$.

A number-line method partitions the same unit interval. If two diagrams use different wholes, their shaded areas cannot justify the comparison. The phrase “same whole” is a material hypothesis.

### Nonexample

Teaching “cross multiply and see which product is bigger” may generate correct decisions:

$5\\cdot 3=15$, $2\\cdot 8=16$.

But without derivation the rule is arbitrary. Derive it for positive denominators:

$a/b<c/d$ iff $ad<bc$, because multiplying both sides by positive $bd$ preserves order. Negative or zero denominators require renewed care.

## 3. Representations are tools, not decorations

A representation highlights some relations and hides others. The National Academies notes that connected representations are an indicator of conceptual understanding; CAST’s [UDL guidance for notation and symbols](https://udlguidelines.cast.org/representation/language-symbols/text-notation-symbols/) also recommends flexible access to formulas, words, and graphs when decoding is not the learning target.

For $y=2x+1$:

- words: start at output 1 when the input is 0, and add 2 to the output for each unit increase in the input;
- table: $(0,1),(1,3),(2,5)$;
- graph: a line with vertical intercept 1 and slope 2;
- machine: multiply the input by 2, then add 1;
- equation: a compact rule for every input.

Ask what remains invariant across forms: the ordered pairs. Ask what can go wrong: a table with uneven $x$ steps can make “change in y” alone look like slope.

### Representation sequence

1. Let learners act or build the relation.
2. Name quantities and units.
3. Record a table.
4. Coordinate a graph and equation.
5. Remove supports only when the connection, not the prop, carries meaning.

Manipulatives do not contain concepts automatically. Ten blocks can reinforce “bigger piece means bigger number” unless exchanges and units are discussed.

## 4. Examples define the conceptual boundary

One example shows possibility; a designed set shows structure.

To teach “quadrilateral,” compare:

- a square;
- a long non-square rectangle;
- a concave dart;
- a slanted parallelogram;
- an open four-segment chain (nonexample);
- a shape with one curved side (nonexample).

If every example is upright and convex, learners may mistake orientation or convexity for defining properties.

### Variation with algebra

For distributivity, sequence:

$3(4+5)$, $7(x+2)$, $-2(x-3)$, $(a+b)c$, then compare the nonexample $3(4\\cdot 5)$ where distributing would not preserve the original grouping in the same way.

Hold the structure constant while varying superficial features; then vary one structural feature at a time.

## 5. A misconception is not just a wrong answer

An arithmetic slip may be unstable. A misconception produces a systematic pattern because a locally sensible rule has been overgeneralized.

Example:

$1/3+1/4=2/7$.

The learner may be applying componentwise whole-number addition. Saying “wrong—use common denominators” repairs a procedure but may not repair units.

Use a contrast:

- $1 metre + 1 metre = 2 metres$ adds common units.
- thirds and fourths are different-sized units.
- rename both in twelfths: $4/12+3/12=7/12$.

Then test transfer with $2/5+1/10$ and boundary cases such as $1/2+1/2=1$, where the false componentwise rule gives $2/4=1/2$.

The Education Endowment Foundation’s [misconception guidance](https://educationendowmentfoundation.org.uk/news/eef-blog-integrating-evidence-into-mathematics-teaching-minimising-misconceptions) recommends using assessment to locate strengths and weaknesses and examining the partial truth behind persistent errors. This is guidance, not a guarantee that one counterexample changes every learner’s model.

## 6. Learning progressions are hypotheses

A progression describes increasingly powerful ways of reasoning. It is not a law that every learner follows in one order.

For place value, a possible progression is:

1. count individual objects;
2. make groups of ten while retaining the total;
3. coordinate tens and ones verbally;
4. connect groups to written positions;
5. regroup flexibly, for example $43=4 tens+3 ones=3 tens+13 ones$;
6. generalize to powers of ten and decimals.

The subtraction $43-18$ becomes meaningful through regrouping:

$43 = 30+13$, so $(30+13)-(10+8)=20+5=25$.

If a learner can execute borrowing but says that the crossed-out 4 “turns into 3 for no reason,” the notation has detached from equivalence.

Progressions should be tested against learner work, adapted for prior knowledge, and not used to deny advanced ideas until a rigid age checkpoint.

## 7. Problem solving can be taught without reducing it to a mnemonic

The US Institute of Education Sciences publishes a [practice guide for mathematical problem solving](https://ies.ed.gov/ncee/WWC/PracticeGuide/16/Published), while EEF guidance emphasizes planning, monitoring, and evaluation. Heuristics are prompts, not algorithms guaranteed to solve unfamiliar problems.

Problem: A rectangle has perimeter 34 and integer side lengths. Which dimensions maximize area?

Let sides be $a,b>0$. Then $2a+2b=34$, so $a+b=17$. List integer pairs:

$(1,16),(2,15),…,(8,9)$.

Areas are $16,30,42,52,60,66,70,72$; maximum 72 at $8\\times 9$.

A teacher think-aloud might model:

- **plan:** convert perimeter into a constraint;
- **monitor:** check whether every integer pair is represented once;
- **evaluate:** verify units and compare the final pair with nearby alternatives;
- **generalize:** for fixed sum, why are closer factors better?

The algebraic proof uses

$ab = ((a+b)/2)^{2} - ((a-b)/2)^{2}$.

With fixed sum, area is largest when $\\lvert a-b\\rvert$ is smallest. The table discovers; the identity explains.

## 8. Proof teaching coordinates examples and necessity

Examples can generate a conjecture but not prove a universal claim.

Conjecture: the sum of the first $n$ odd positive integers is $n^{2}$.

Visual construction: an $n\\times n$ square grows from an $(n-1)\\times (n-1)$ square by an L-shaped border of $2n-1$ unit squares. Therefore

$(n-1)^{2}+(2n-1)=n^{2}$.

Induction formalizes the same growth:

- base $n=1$: $1=1^{2}$;
- assume $1+3+⋯+(2k-1)=k^{2}$;
- add next odd $2k+1$ to get $k^{2}+2k+1=(k+1)^{2}$.

Ask learners to link the algebraic $2k+1$ to the visual border. Multiple representations should converge on the same reason, not become separate performances.

## 9. Formative assessment is an inference process

An assessment response is evidence about thinking under specific conditions. It is not a permanent label.

Design a hinge question for $-(x-3)$:

A. $-x-3$

B. $-x+3$

C. $x-3$

D. $3x$

Correct answer B follows because $-1(x-3)=-x+3$. Distractor A suggests the negative was applied only to the first sign pattern incorrectly; C ignores negation; D conflates subtraction with multiplication.

But a selected option does not prove a reasoning path. Follow with: “Choose a value of $x$ and check the original and your expression.” At $x=5$, original is $-2$; only B gives $-2$.

Assessment quality involves validity: does the task support the inference we want? Reading load, unfamiliar context, inaccessible notation, time pressure, and language may measure unintended barriers.

## 10. Teacher mathematical knowledge is specialized

For division by a fraction, $3 ÷ 1/2 = 6$. “Invert and multiply” computes it, but teaching may require several explanations:

- measurement: how many halves fit in 3? Six.
- missing factor: $(1/2)x=3$, so $x=6$.
- scaling: dividing by a number below 1 asks how many small units fit, so the result can exceed 3.
- algebra: for nonzero $a/b$, division multiplies by its reciprocal because $(a/b)(b/a)=1$.

Specialized knowledge includes selecting a representation, explaining why a rule works, seeing when an explanation fails, and connecting a learner’s unconventional method to valid mathematics.

## 11. Inclusion changes design, not mathematical ambition

NCTM’s [access and equity position](https://www.nctm.org/Standards-and-Positions/Position-Statements/Access-and-Equity-in-Mathematics-Education/) argues for responsiveness to learners’ backgrounds and for access to challenging mathematics with needed support. CAST recommends multiple means of representation, action, and expression.

An accessible graph lesson might provide:

- an equation and data table;
- a high-contrast plot with point shapes and line labels, not colour alone;
- a verbal description of intercept, direction, and rate;
- keyboard-operable controls;
- tactile graph or coordinate grid where available;
- time to decode notation, plus a glossary;
- several response modes while preserving the reasoning goal.

Removing graph reading entirely for a blind learner changes the goal. Providing tactile or structured-table access preserves it. Accommodation and dilution are not synonyms.

## 12. Read educational evidence with mathematical care

When a study reports an average effect, ask:

- Who participated and who did not?
- What was the comparison condition?
- Which outcome and timescale were measured?
- Was assignment randomized, plausibly controlled, or observational?
- How variable were effects across settings?
- What implementation and training were required?
- Are harms, access, workload, and opportunity costs reported?

A statistically significant average is not a universal lesson prescription. A null average does not prove no learner benefited. Mechanism, context, uncertainty interval, attrition, and replication matter.

## Exercises and design studios

### 1. Repair a fraction task

Create one example and one nonexample testing whether learners use the same whole.

**Worked response.** Example: show $1/2$ and $1/3$ on two equal-length strips; the common whole makes the shaded lengths comparable. Nonexample: show $1/2$ of a short strip beside $1/3$ of a much longer strip; physical shaded length no longer establishes which fraction is larger. Ask learners to name what must stay the same and then redraw both fractions on one common whole.

### 2. Build a hinge question

Write four options for the slope between $(1,2)$ and $(4,8)$.

**Worked response.** Correct slope $(8-2)/(4-1)=2$. Distinct distractors: $6$ (change in $y$ only), $1/2$ (reciprocal), and $-2$ (reversing the subtraction order in the numerator but not the denominator). Follow by asking for units of $y$ per unit $x$.

### 3. Connect representations

Explain $2(x+3)=2x+6$ with an area model.

**Solution.** A rectangle of height 2 and total width $x+3$ splits into widths $x$ and 3, with areas $2x$ and 6. Additive area gives the identity.

### 4. Evaluate a claim

“Manipulatives improve learning.” What is missing?

**Solution.** Specify learners, mathematics, tool, instructional use, comparison, outcome, duration, access, and uncertainty. Objects can support or obstruct depending on how their relations are made explicit.

### 5. Teach a counterexample

Refute $\\sqrt{a+b}=\\sqrt{a}+\\sqrt{b}$.

**Solution.** Let $a=b=1$: the left side is $\\sqrt{2}$ and the right side is $2$. Then investigate valid boundaries: if one value is zero the equality holds; over nonnegative reals, squaring shows equality would require $2\\sqrt{ab}=0$, hence $ab=0$.

## Evidence and scope note

The National Academies, IES, EEF, NCTM, and CAST sources cited here synthesize or guide within particular educational systems. They do not erase professional judgment or local knowledge, and organizations differ in methods and aims. This book’s worked mathematics is independently checkable; its design recommendations should be piloted, observed, and revised with learners.

Continue with learning progressions, representations, misconception diagnosis, formative assessment, inclusive mathematics, and [Teaching Proof and Problem Solving](#/item/course-teaching-proof-problem-solving).
`;export{e as default};