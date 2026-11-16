var e=`---
parent_id: book-teaching-for-mathematical-understanding
chapter_id: teaching-fractions-proportional-reasoning
title: "Teaching Fractions and Proportional Reasoning"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Teaching Fractions and Proportional Reasoning

A fraction names a number, but a fraction problem can ask about a measure, a share, a quotient or a scaling operation. Those meanings connect through a common mathematical structure. Teaching requires making the connections visible without pretending that one picture automatically explains every operation. In this chapter, an instructional proposal is a **teaching conjecture**. A response attributed to a learner is a **fictional case for analysis**. No response, prevalence estimate or intervention effect is reported as observed research.

Before beginning, you should be able to calculate with rational numbers and explain equality, order and distributivity. The earlier chapters on representations, misconceptions and formative assessment supply the design framework. Our goal is to construct tasks that distinguish particular mathematical explanations of an answer, then choose a response whose mathematical purpose is explicit. A proposed response still needs evidence in its actual setting before anyone can claim that it helps learners there.

## Units before rules

For a positive integer $b$, the fraction $a/b$ is $a$ copies of the unit $1/b$. To interpret $1/b$ as a length, partition one chosen unit length into $b$ equal lengths. Equal parts and a fixed whole are hypotheses. Four differently sized regions do not establish quarters merely because there are four of them. Conversely the regions need not have the same shape when area, rather than congruence, is the quantity being divided.

Distinguish a fraction from a fraction **of a quantity**. The numbers $1/2$ and $1/3$ have a fixed order. Half of a two-metre length and a third of a six-metre length are one metre and two metres respectively. There is no contradiction: different quantities were scaled. A comparison task whose diagrams have different wholes may therefore measure attention to the task's convention rather than the intended understanding of fraction order.

The number line provides one common magnitude scale. Mark zero and one, divide their distance into $b$ equal intervals, and count $a$ such intervals from zero. The construction allows improper fractions without changing the unit: $7/4$ lies beyond one at seven quarter-steps. Negative fractions extend the same scale to the left. An area picture confined to one rectangle needs a second rectangle or a different chosen whole to show $7/4$ honestly.

**Worked example 1 (One answer, two wholes).** A fictional learner says that a shaded half is smaller than a shaded third. The first drawing is half of a rectangle of area $6$ square units; the second is a third of a rectangle of area $12$ square units. Their shaded areas are $3$ and $4$. The statement is correct as an area comparison and incorrect if intended as the numerical claim $1/2<1/3$. Ask the learner to label the whole and the shaded area in each drawing, then place both numbers on the same zero-to-one interval. Do not infer a fraction misconception from the original sentence alone: its reference quantities were ambiguous.

This example gives a design rule with a deductive rationale: when the target is numerical fraction order, keep the reference unit fixed or ask explicitly how it changes. It does not establish the empirical claim that one number-line lesson will correct every comparison error. The teacher must still inspect the learner's explanation on another problem.

## Equivalent fractions preserve a quantity

For integers $a$ and nonzero integers $b,k$,
$$\\frac{a}{b}=\\frac{ka}{kb}.$$
Algebraically, multiplying numerator and denominator by $k$ multiplies the represented number by $k/k=1$. For positive $b,k$, a partition interpretation says to replace each old part by $k$ equal subparts. There are $k$ times as many selected pieces, each $1/k$ as large. Merely adding the same integer to numerator and denominator has no corresponding preservation law.

The formal equality criterion is $a/b=c/d$ exactly when $ad=bc$, for nonzero $b,d$. Multiplication by $bd$ proves the forward implication; division by $bd$ proves the reverse. For order comparisons we normally use positive denominators, because then multiplication by $bd$ preserves the inequality direction. The equality criterion needs nonzero denominators but no positivity. Teaching these two statements as one undifferentiated cross-multiplication rule hides a material distinction.

A useful variation sequence keeps the value fixed while changing the partition: $2/3=4/6=6/9$. Follow with $2/3$ and $3/4$, where adding one to both entries changes the value. Indeed $2\\cdot4=8$ while $3\\cdot3=9$. Ask for a diagram or an equality calculation explaining why the first family agrees and the second pair does not. A correct answer selected from these examples is evidence about that task; a general explanation addresses the whole transformation.

## Addition and multiplication ask different questions

Addition combines quantities expressed in a common unit. For positive denominators,
$$\\frac ab+\\frac cd=\\frac{ad+bc}{bd}.$$
The two terms are first renamed as $ad$ and $bc$ copies of $1/(bd)$; those like units can then be counted together. A least common denominator can shorten the calculation, but $bd$ already proves a general rule. Teaching the least common multiple before the reason for a common unit can make an efficient choice look like an unexplained requirement.

**Worked example 2 (Diagnosing componentwise addition).** A fictional written solution gives $2/3+1/4=3/7$. Ask first what the denominator $7$ counts. Then keep one unit strip fixed and partition it into twelve equal intervals. Two thirds occupies eight intervals and one quarter three, so the sum is eleven twelfths. The componentwise answer also fails a magnitude check: $3/7<1/2<2/3$, although adding a positive quantity must increase $2/3$. These are two different explanations: common-unit construction establishes the answer; order supplies an independent reason the proposed answer cannot work. A follow-up $1/2+1/2$ distinguishes the false rule from a slip in the initial arithmetic.

Multiplication by a positive fraction scales a quantity. To find $2/3$ of $3/4$, partition a unit rectangle into four columns and three rows, all with equal spacing. Three columns represent $3/4$ of its area; two of the three rows select $2/3$ of that area. Six of twelve equal cells remain, giving $1/2$. The rectangle explains multiplication of nonnegative magnitudes. Signed multiplication needs the distributive laws and additive inverses, rather than an attempt to draw a negative shaded area.

In general, rational multiplication gives $(a/b)(c/d)=ac/(bd)$. The denominator is the size of the common fine partition for this product construction, while addition needs a conversion before counts are combined. Reusing a familiar diagram is helpful only when the teacher states which operation it represents. “Draw some pieces” is too vague to distinguish these structures.

## Division and the quantity being counted

Measurement division asks how many copies of a divisor fit into a dividend. The quotient need not be an integer: $3/4$ litre contains $3/2$ portions of size $1/2$ litre. One full portion uses $1/2$ litre and half of another uses $1/4$ litre. Dividing quantities with the same physical unit leaves a dimensionless count. If the divisor instead has units litres per bottle, the answer has units bottles.

**Worked example 3 (Explaining the reciprocal rule).** Solve $q(2/3)=5/4$. Multiplying both sides by $3/2$ gives $q=(5/4)(3/2)=15/8$. Thus $(5/4)\\div(2/3)=15/8$. To interpret it in common units, $5/4=15/12$ and $2/3=8/12$: fifteen twelfths contains fifteen eighths of a group of eight twelfths. The two derivations agree because they solve the same missing-factor equation. A teacher can ask which quantity is one group before saying “invert and multiply”; otherwise an apparently correct rule may be attached to the wrong operand.

The rule $x\\div y=x(1/y)$ assumes $y\\ne0$. Dividing by a positive number less than one increases a positive dividend; dividing by a number greater than one decreases it. “Division makes smaller” records a pattern from a restricted earlier domain. Showing its failure does not make the learner's earlier examples false. An instructional response can locate exactly which condition made that pattern hold and extend the model.

## Ratios and proportional relationships

A ratio compares two quantities in a specified order. A proportional relationship has the form $y=kx$ over its stated domain, with fixed $k$. For nonzero inputs, $y/x=k$; for a domain including zero it must also have $y(0)=0$. A constant difference instead gives an additive relationship, such as $y=x+3$, which is generally not proportional.

**Proposition 12.1 (Scaling in a proportional relation).** If $y(x)=kx$ and both $x$ and $tx$ belong to the domain, then $y(tx)=t y(x)$.

*Proof.* Substitute the definition: $y(tx)=k(tx)=t(kx)=t y(x)$, using associativity and commutativity of multiplication. The domain condition matters because the second input must be allowed. ∎

The converse needs care. Checking a few scale changes in a table does not prove a rule at all unlisted inputs. A real-world proportional model additionally assumes the same mechanism and rate throughout the stated range. A fixed fee, a capacity limit or a change of material may invalidate that model even though the algebra of $y=kx$ is sound.

**Worked classroom case (Fictional recipe discussion).** A recipe uses three cups of flour for two cups of liquid. One fictional response to “use six cups of liquid” is seven cups of flour, adding four to each quantity. A second response is nine cups, multiplying both by three. The first preserves difference; the second preserves ratio. Ask each learner to state what stays fixed, then compare the implied flour per cup of liquid: $7/6$ versus $9/6=3/2$. If the task states that ingredient proportions remain unchanged, nine is warranted. If an actual recipe behaves differently at scale, that practical question needs evidence beyond this mathematical model.

## Planning a discriminating sequence

Write the target before choosing manipulatives: for example, “justify equivalent fractions by keeping the represented quantity fixed while refining the partition.” Then design contrasting tasks whose interpretations are clear. One task can preserve the whole and change the denominator; another can preserve the written fraction and change the whole. Ask for explanations, because the same answer can result from valid scaling, a guessed pattern or an unrelated rule.

A short sequence might use a fraction on a number line, an equivalent partition of the same interval, an improper fraction, and finally a fraction of a labelled measurement. Permit a structured verbal description or tactile interval when seeing the drawing is irrelevant to the goal. Keep the same unit and the same mathematical demand across those response modes. Removing the need to compare magnitudes would change the goal; describing the equal intervals differently need not.

Record what the learner actually did before interpreting it. “Marked $3/4$ to the left of $2/3$” is a task-specific description. “Cannot understand fractions” exceeds that evidence. A follow-up might ask for common units or an estimate relative to $1/2$; the choice depends on the competing explanation being investigated. Predetermine what response would challenge your current interpretation so that the activity can change your mind.

## Exercises

### Exercise 1
<a id="teaching-fractions-proportional-reasoning-ex-1"></a>
Two drawings shade $2/3$ of an area of $9$ square units and $3/4$ of an area of $4$ square units. Compare the shaded areas and the two fraction numbers. Explain the different answers.

<details><summary>Hint 1</summary>

Calculate each shaded area with its own labelled whole.

</details>
<details><summary>Hint 2</summary>

For the numbers alone, use denominator twelve.

</details>
<details><summary>Solution</summary>

The shaded areas are $6$ and $3$ square units, so the first is larger. The numbers satisfy $2/3=8/12<9/12=3/4$. The different comparisons concern different quantities: the first scales different areas; the second uses a common unit number. A diagram without whole labels would not distinguish these interpretations. Ask the learner which comparison they intend before treating either answer as an error.

</details>

### Exercise 2
<a id="teaching-fractions-proportional-reasoning-ex-2"></a>
Prove that $(a+1)/(b+1)=a/b$, for $b>0$ and $a\\ge0$, holds exactly when $a=b$. What does this say about adding one to both entries?

<details><summary>Hint 1</summary>

Both denominators are nonzero.

</details>
<details><summary>Hint 2</summary>

Expand the cross products and cancel $ab$.

</details>
<details><summary>Solution</summary>

Equality is equivalent to $b(a+1)=a(b+1)$, hence $ab+b=ab+a$ and $b=a$. Conversely $a=b$ makes both fractions one. Thus adding one preserves these fractions only in that special case; it is not a general equivalence operation. A teaching sequence using only examples equal to one would accidentally conceal the failure. Include both an equal-entry case and a different-entry case, then ask for the condition explaining the contrast.

</details>

### Exercise 3
<a id="teaching-fractions-proportional-reasoning-ex-3"></a>
Explain $3/5+1/10$ using a common unit and give an independent magnitude check.

<details><summary>Hint 1</summary>

Rename fifths as tenths.

</details>
<details><summary>Hint 2</summary>

Adding a positive tenth must increase $3/5$.

</details>
<details><summary>Solution</summary>

Each fifth is two tenths, so $3/5=6/10$ and the sum is $7/10$. The result exceeds $6/10$ and is less than one, agreeing with addition of a small positive quantity. The false componentwise answer $4/15$ is below $3/5$ and fails that check. A complete teaching explanation names tenths as the counted unit rather than saying only that the denominators must match.

</details>

### Exercise 4
<a id="teaching-fractions-proportional-reasoning-ex-4"></a>
Design a task distinguishing “larger denominator means larger fraction” from correct unit-fraction reasoning. Give the mathematical answer and one follow-up.

<details><summary>Hint 1</summary>

Keep the numerator and reference unit fixed.

</details>
<details><summary>Hint 2</summary>

Compare equal intervals partitioned into three and six pieces.

</details>
<details><summary>Solution</summary>

Ask whether $1/3$ or $1/6$ is larger and require an explanation on one common interval. Since $1/3=2/6>1/6$, the third is larger: fewer equal parts of the same whole means each part is larger. Follow with $2/3$ versus $5/6$ so that a memorised instruction to choose the smaller denominator no longer suffices. This follow-up has $4/6<5/6$. Neither answer alone establishes a general conception; the explanation shows which quantities were compared.

</details>

### Exercise 5
<a id="teaching-fractions-proportional-reasoning-ex-5"></a>
Explain $7/6\\div(2/3)$ by a missing-factor equation and common measurement units.

<details><summary>Hint 1</summary>

Write $q(2/3)=7/6$.

</details>
<details><summary>Hint 2</summary>

The divisor is four sixths.

</details>
<details><summary>Solution</summary>

Multiply the equation by $3/2$ to obtain $q=(7/6)(3/2)=7/4$. In sixth-units, seven such units contain seven fourths of a group of four units. One full group uses four sixths, leaving three sixths, which is three quarters of another group. Both interpretations give $1+3/4$. Naming the group size prevents taking the reciprocal of the dividend by an unexamined pattern.

</details>

### Exercise 6
<a id="teaching-fractions-proportional-reasoning-ex-6"></a>
For positive $x,y$, prove precisely when $x/y>x$. Use the result to repair “division makes smaller.”

<details><summary>Hint 1</summary>

Divide the inequality by positive $x$.

</details>
<details><summary>Hint 2</summary>

Compare $1/y$ with one.

</details>
<details><summary>Solution</summary>

Since $x>0$, $x/y>x$ is equivalent to $1/y>1$. Multiplication by positive $y$ makes this $1>y$. Thus the quotient increases exactly for $0<y<1$, is unchanged for $y=1$, and decreases for $y>1$. The repaired statement names the domain and the divisor condition. Dividing by zero is undefined, and signed dividends require a fresh order analysis; neither should be silently included in the positive proof.

</details>

### Exercise 7
<a id="teaching-fractions-proportional-reasoning-ex-7"></a>
A fictional learner scales a $4:3$ mixture to $10:9$. Identify the preserved quantity, explain the intended proportional answer for nine units of the second ingredient, and propose a follow-up.

<details><summary>Hint 1</summary>

Compare differences and ratios separately.

</details>
<details><summary>Hint 2</summary>

The second ingredient has been multiplied by three.

</details>
<details><summary>Solution</summary>

The response preserves a difference of one, but $10/9$ differs from $4/3$. Preserving mixture ratio requires $12:9$, multiplying both original quantities by three. Ask for the amount of the first ingredient when the second is six: proportional reasoning gives eight, whereas the fixed-difference rule gives seven. Require the learner to name what stays unchanged. This is a discriminating fictional task, not evidence that the response is common in a population.

</details>

### Exercise 8
<a id="teaching-fractions-proportional-reasoning-ex-8"></a>
A service charges $y=5+2x$ pounds for $x\\ge0$ units. Show that the relationship is not proportional and explain why two successive equal increases can mislead.

<details><summary>Hint 1</summary>

Inspect the value at zero.

</details>
<details><summary>Hint 2</summary>

Compare $y(2)$ with $2y(1)$.

</details>
<details><summary>Solution</summary>

Here $y(0)=5$, whereas a proportional rule on this domain has $y(0)=0$. Also $y(2)=9$ but $2y(1)=14$, so doubling input does not double output. Equal input increments produce equal output increments of twice the input change; this expresses constant slope, not direct proportionality. A task containing only differences could therefore support a correct constant-rate observation while failing to reveal the fixed fee.

</details>

### Exercise 9
<a id="teaching-fractions-proportional-reasoning-ex-9"></a>
Adapt a fraction-order task for a learner who cannot use its visual diagram, preserving its mathematical demand. State what would change the goal.

<details><summary>Hint 1</summary>

Identify whether the intended reasoning concerns magnitude or visual decoding.

</details>
<details><summary>Hint 2</summary>

A tactile interval or explicit equal-part description can preserve one common unit.

</details>
<details><summary>Solution</summary>

If the goal is to justify $3/4>2/3$, provide a tactile zero-to-one interval partitioned into twelfths, or describe that interval and ask the learner to compare nine and eight twelfth-steps. Retain the need to identify the common whole and explain order. Asking only which numerator is larger changes the mathematical task and can endorse an invalid general rule. Whether a particular format is usable must be checked with the learner; the mathematical analysis alone does not establish access.

</details>

### Exercise 10
<a id="teaching-fractions-proportional-reasoning-ex-10"></a>
Write a three-column record separating a fictional observation, an interpretation and a follow-up for the answer $1/2+1/3=2/5$. Include a possible result that would weaken the interpretation.

<details><summary>Hint 1</summary>

Record the written response without a trait label.

</details>
<details><summary>Hint 2</summary>

An immediate correct explanation on another sum could point to a slip.

</details>
<details><summary>Solution</summary>

Observation: the fictional script writes the displayed equality. Interpretation: perhaps numerator and denominator were added componentwise. Follow-up: ask for $1/2+1/2$ and why its units can be added. A response of $2/4$ with the same explanation supports the proposed rule on these tasks. A response of one, followed by a correct twelfths or sixths explanation repairing the original sum, weakens the claim of a stable componentwise rule. Neither outcome warrants a population frequency or an intervention effect.

</details>

## Summary

Fractions require a reference unit, and equivalent partitions preserve the represented quantity. Addition counts common units; multiplication scales; division solves a missing-factor problem with a nonzero divisor. Proportional relationships preserve a ratio through coordinated scaling. In each case, a diagnostic response is evidence about a particular task, while an interpretation of that response remains open to challenge. Carry that distinction into algebra, where equality, variable roles and reversible operations require equally explicit mathematical explanations.

## Sources and further study

The mathematical arguments are developed in this chapter. Liping Ma, *Knowing and Teaching Elementary Mathematics*, is the comparison text for explaining elementary procedures through their mathematical relations, as commissioned for this book. The earlier chapters and their bibliography distinguish research findings from design proposals. All classroom cases above are invented for analysis; the chapter claims no measured learning improvement. The next chapter carries the same attention to units, equality and evidence into algebra.
`;export{e as default};