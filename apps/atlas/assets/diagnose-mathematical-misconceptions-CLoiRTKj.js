var e=`---
id: recipe-diagnose-mathematical-misconceptions
title: "Diagnose a Mathematical Misconception Without Guessing"
license: CC BY-SA 4.0
---

# Diagnose a Mathematical Misconception Without Guessing

**Before reading.** Read [Fractions](/resources/library:book-number-and-arithmetic:fractions/), [Linear Equations, Inequalities, and Systems](/resources/library:book-algebra-and-functions:linear-equations-inequalities-systems/).

A wrong answer is evidence, but it is not yet a diagnosis. The same answer can arise from a durable idea, a copied procedure, a reading difficulty, or a one-off slip. This recipe turns an answer into a small, testable model of the learner's reasoning and then chooses a response that preserves the mathematics.

It is written for teachers, tutors, curriculum authors, and study partners. The method is not mind-reading and does not attach a label to a person. A misconception is a *hypothesis about a strategy in a context*. The hypothesis should predict what the learner will do on a carefully varied next task.

The Education Endowment Foundation's guidance on [minimising misconceptions](https://educationendowmentfoundation.org.uk/news/eef-blog-integrating-evidence-into-mathematics-teaching-minimising-misconceptions) makes the same important distinction: errors can be systematic or accidental, and teachers need evidence before selecting a response. The US Institute of Education Sciences' [fractions practice guide](https://ies.ed.gov/ncee/wwc/Docs/PracticeGuide/fractions_pg_093010.pdf) gives research-based recommendations, with evidence ratings, rather than promising a universal script.

## The six-step diagnostic cycle

1. **Record the evidence exactly.** Keep the prompt, answer, intermediate work, units, tools, and any spoken explanation.
2. **Generate at least two hypotheses.** Include a simple slip as one possibility.
3. **Write a contrasting task.** Choose numbers or representations on which the hypotheses predict different answers.
4. **Ask for a prediction and explanation.** “What were you thinking?” alone often invites retrospective invention. A fresh task tests the model.
5. **Respond to the inferred structure.** Use a counterexample, a connected representation, a derivation, or deliberately varied practice.
6. **Retest after a delay and in a new form.** Immediate imitation is not durable change.

The cycle is scientific in miniature: observation, competing models, discriminating experiment, revision.

## Case 1: adding fractions

### Worked example: discriminate a rule from a slip

A learner writes

$1/3 + 1/4 = 2/7$.

Possible hypotheses include:

- H1: add numerators and denominators componentwise;
- H2: remember “add the top numbers” but make an accidental denominator error;
- H3: treat the written pair $(numerator, denominator)$ as two independent counts;
- H4: copy a pattern from multiplying fractions.

Do not begin with ten nearly identical exercises. Ask contrasts:

1. $1/5 + 1/5 = ?$
2. Is $1/2 + 1/2$ less than, equal to, or greater than 1?
3. Draw both addends in $1/3 + 1/4$ on the same length-one strip.
4. Does the proposed answer $2/7$ exceed each positive addend?

H1 predicts $2/10$ on the first question. Yet two fifths of the *same whole* are $2/5$: the denominator names the unit, not a count to combine. The magnitude check is decisive too. Because $1/3$ and $1/4$ are positive, their sum must exceed $1/3$; but $2/7 < 1/3$ because $2\\cdot 3=6<7\\cdot 1=7$.

Now rebuild the operation:

$1/3 = 4/12$, $1/4 = 3/12$, so $1/3+1/4=7/12$.

The common denominator does not come from a chant. It constructs a common unit, twelfths, which can be counted together.

### Counterexample design principle

Use the smallest counterexample that exposes the structure. $1/2+1/2$ is often more diagnostic than $7/12+5/18$, because the expected magnitude is visible.

## Case 2: the equal sign

Prompt:

$8 + 4 = □ + 5$.

A learner writes $12$. That could mean “the equal sign announces the answer” rather than “both expressions name the same value.” Test with three forms:

- $7 = 7$
- $9 + 3 = 10 + 2$
- $□ + 6 = 15$

If only answer-on-the-right forms are accepted, treat equality as a relation. A balance representation gives

$8+4 = x+5$.

Both sides must remain equal. Since the left side is 12, $x+5=12$, and subtracting 5 from both sides gives $x=7$. Check: $8+4=12$ and $7+5=12$.

Avoid replacing every equal sign with an arrow. $3+4 \\to 7$ can describe a calculation step, but $3+4=7$ states an equality. Those are different mathematical roles.

## Case 3: decimal place value

A learner claims $0.45 > 0.8$ because “45 is bigger than 8.” Competing hypotheses: compare the digits as whole numbers; think more digits means a larger number; or temporarily ignore the decimal point.

Use a boundary set:

- compare $0.4$ and $0.35$;
- compare $0.40$ and $0.4$;
- place $0.08$, $0.45$, and $0.8$ on a number line from 0 to 1;
- write each number in hundredths.

$0.45=45/100$, while $0.8=80/100$, so $0.45<0.8$. Appending a zero does not change value because $0.4=4/10=40/100=0.40$. A money context can help, but it is not sufficient: currency conventions may hide thousandths and negative values. Connect context back to place value.

## Case 4: notation and operation order

Ask for $-3^{2}$. One learner answers 9; another answers −9. The written convention gives exponentiation priority over the leading negation:

$-3^{2} = -(3^{2}) = -9$.

But $(-3)^{2}=9$. A diagnostic set varies one feature at a time:

| Expression | Value | Reason |
|---|---:|---|
| $-3^{2}$ | −9 | square 3, then negate |
| $(-3)^{2}$ | 9 | the negative number is the base |
| $(-3)^{3}$ | −27 | odd product of three negative factors |
| $-(3^{3})$ | −27 | cube, then negate |

This may be a notation-reading issue rather than weak knowledge of negative multiplication. Name that distinction.

## Case 5: overgeneralising a true property

A learner expands $(a+b)^{2}$ as $a^{2}+b^{2}$. The pattern resembles the true identity $(ab)^{2}=a^{2}b^{2}$. Ask for a numerical test: with $a=b=1$, the proposed rule gives $4=2$, which is false.

An area model or distributivity derives the missing term:

$(a+b)^{2}=(a+b)(a+b)=a^{2}+ab+ba+b^{2}=a^{2}+2ab+b^{2}$.

Now test nearby cases:

- $(a-b)^{2}=a^{2}-2ab+b^{2}$;
- $(a+b)(a-b)=a^{2}-b^{2}$;
- if $ab=0$, then $(a+b)^{2}=a^{2}+b^{2}$ does happen to hold.

The last boundary case matters. One successful example does not validate an identity; it may sit inside a special condition.

## Build a diagnostic hinge question

A useful multiple-choice question gives each option a reason. For $3/4 - 1/6$, consider:

A. $2/2$ — subtract numerators and denominators  
B. $2/10$ — subtract numerators, add denominators  
C. $7/12$ — construct twelfths correctly  
D. $1/2$ — perhaps subtract $1/4$ instead of $1/6$

The correct computation is

$3/4=9/12$, $1/6=2/12$, hence $3/4-1/6=7/12$.

Options must not be treated as psychological facts. A learner can choose A for a different reason, or choose C by guessing. Follow with “Show how you know” or a parallel non-multiple-choice task.

## Match response to diagnosis

| Evidence pattern | Provisional response |
|---|---|
| isolated arithmetic slip, method otherwise coherent | invite self-check; do not reteach the entire concept |
| stable rule contradicted by magnitude | use an estimate or smallest counterexample, then derive a replacement |
| symbols disconnected from quantities | coordinate words, manipulable objects, diagram, table, and symbols |
| correct routine fails after superficial change | vary nonessential features and ask what remains invariant |
| explanation is sound but notation is ambiguous | teach the convention explicitly and compare interpretations |
| several errors plus heavy reading demand | reduce irrelevant language load while preserving the mathematical goal |

Never ask a representation to do more than it can. A pie diagram is awkward for negative fractions; a calculator can expose a counterexample but does not explain why an identity fails.

## A compact record template

\`\`\`text
Goal:
Original task and exact response:
Hypothesis A / predicted next response:
Hypothesis B / predicted next response:
Contrasting task:
Learner explanation or work:
Instructional response:
Delayed transfer task:
What remains uncertain:
\`\`\`

Keep uncertainty explicit. Group patterns can guide task design, but they do not determine an individual learner's reasoning. Language background, disability, anxiety, prior instruction, and the task format can all affect observed performance; none should be inferred from one item.

## Exercises with hints and complete solutions

### Exercise 1: Linear overgeneralisation
<a id="diagnose-mathematical-misconceptions-ex-1"></a>

A learner says $\\sqrt{9+16}=\\sqrt{9}+\\sqrt{16}=7$. Design one discriminating task and repair the claim.

<details><summary>Hint 1</summary>

Choose a sum whose alleged square-root additivity gives a clearly wrong magnitude.

</details>
<details><summary>Hint 2</summary>

Square the proposed sum and inspect its extra cross term.

</details>
<details><summary>Solution</summary>

Ask for $\\sqrt{1+1}$. The proposed rule gives 2, while squaring shows $\\sqrt{2}$ cannot be 2. The square-root function is not additive. For nonnegative $a,b$,

$(\\sqrt{a}+\\sqrt{b})^{2}=a+b+2\\sqrt{ab}$,

so equality with $\\sqrt{a+b}$ requires $ab=0$. For the original task, $\\sqrt{25}=5$, not 7.

</details>

### Exercise 2: Slope
<a id="diagnose-mathematical-misconceptions-ex-2"></a>

A learner finds the slope through $(1,2)$ and $(4,8)$ as $8/4=2$. Why is the correct answer not evidence that the method is valid?

<details><summary>Hint 1</summary>

A correct answer can arise from two different methods on one convenient example.

</details>
<details><summary>Hint 2</summary>

Translate the points so the line's slope stays fixed but y divided by x changes.

</details>
<details><summary>Solution</summary>

Slope is change in output divided by change in input: $(8-2)/(4-1)=6/3=2$. The shortcut happens to agree. Test $(2,3)$ and $(5,9)$: correct slope $(9-3)/(5-2)=2$, shortcut $9/5$. Ask what translation of the coordinate axes should leave unchanged; slope does, $y/x$ generally does not.

</details>

### Exercise 3: Diagnose your diagnosis
<a id="diagnose-mathematical-misconceptions-ex-3"></a>

A student writes $2(x+3)=2x+3$. Give two hypotheses and one contrast.

<details><summary>Hint 1</summary>

The written line alone does not tell you whether the error is systematic.

</details>
<details><summary>Hint 2</summary>

Ask a parallel numeric task and a representation task before choosing an explanation.

</details>
<details><summary>Solution</summary>

H1: distribute only to the first term. H2: a copying slip. Ask for $5(10+2)$ in two ways and $3(a+b)$ with an area diagram. Repeated partial distribution supports H1; correct reasoning across contrasts makes a slip more plausible. Rebuild from $2(x+3)=(x+3)+(x+3)=2x+6$.

</details>

## Source and scope note

The examples here are mathematical diagnostic designs, not validated clinical instruments. The [EEF mathematics guidance for ages 7–14](https://educationendowmentfoundation.org.uk/education-evidence/guidance-reports/maths-ks-2-3) and IES guide synthesise particular bodies of research under stated methods and evidence ratings. Their recommendations should be read in the original context and adapted with local curriculum knowledge. “Misconception” is used here for a reproducible reasoning pattern, never as a fixed trait or deficit label.

## Where next

Use *Teaching for Mathematical Understanding* to place diagnosis inside a full goal–task–evidence cycle. Continue to the proof and problem-solving course for think-alouds, worked examples, and faded scaffolds. The accessible-lesson recipe shows how to remove barriers without removing the mathematical distinction a diagnostic task must reveal.
`;export{e as default};