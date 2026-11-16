var e=`---
parent_id: book-teaching-for-mathematical-understanding
chapter_id: teaching-algebra-arithmetic-to-symbols
title: "Teaching Algebra: From Arithmetic to Symbols"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Teaching Algebra: From Arithmetic to Symbols

Algebra extends arithmetic by expressing relationships for unspecified numbers, describing families of values and solving conditions on those values. The transition asks learners to reinterpret familiar signs as well as encounter new ones. An equals sign can relate two expressions rather than announce the next answer. A letter can stand for one unknown, an arbitrary input or a quantity that varies with another. Parentheses can describe a whole expression on which an operation acts. A teaching task should say which of these ideas it is asking the learner to coordinate.

This chapter assumes the earlier discussions of explicit goals, representations, fictional learner responses and formative inference. Its mathematics uses elementary real algebra. Every classroom response below is an **invented case for analysis**, and every proposed instructional move is a **teaching conjecture**. Mathematical deductions receive proofs or calculations. No learner observation, research finding or treatment effect is invented to justify a suggestion.

## Equality relates two values

For expressions $E$ and $F$ over a stated domain, the equation $E=F$ says that their values agree at the assigned values of their variables. It is symmetric: if $E=F$, then $F=E$. An equality chain $E=F=G$ asserts all three values agree. It is not a sequence of unrelated calculator instructions.

The distinction matters even without letters. The line $8+4=12+3=15$ is false: its first equality claims $12=15$. A correct account can write $8+4=12$, followed by $12+3=15$, or $(8+4)+3=15$. The calculation was sequentially meaningful, but its notation asserted a different mathematical relation. Asking what each equals sign claims can therefore be more informative than asking whether the final number is correct.

**Worked example 1 (An open number sentence).** Consider $8+4=\\square+5$. Since the left side is twelve, the box must be seven. The explanation is not “the answer goes after equals”; it is that both expressions must name the same number. A fictional answer of twelve in the box might result from treating the box as an answer position. It might also result from overlooking the $+5$. Ask the learner to read the entire equation aloud and substitute their proposed value. A response of seven on a structurally different equation, such as $5+\\square=4+8$, supplies useful further evidence, but one corrected answer does not identify the original cause with certainty.

Balance language can express preserving equal quantities, but a physical balance has limits. Negative numbers and nonlinear expressions need conventions that an actual pair of scales does not directly display. The mathematical principle is substitution of equal values and application of the same function to both sides. A representation should clarify that principle rather than silently replace the real-number domain by positive weights.

## Letters have roles

In $x+5=12$, $x$ is an unknown to be determined. In $a+b=b+a$, the letters are arbitrary reals under a universal claim. In $y=3x+2$, $x$ can be an input and $y$ the corresponding output. In $y=mx+b$, the letters $m,b$ may be fixed parameters specifying one member of a family of functions. The printed alphabet does not determine these roles; the statement and its quantifiers do.

Substitution provides a common meaning. An expression such as $2x+3$ is a rule for obtaining a value after an allowed value of $x$ has been supplied. At $x=4$ its value is eleven. An equation imposes a further condition: $2x+3=11$ is true at four and false at five. An identity such as $2(x+3)=2x+6$ is true at every real assignment, by distributivity.

Distinguish a variable name from a unit abbreviation. If $c$ is a number of cups, $3c$ means three times that number. Writing “$c$ means cups” can conceal whether $c$ is a quantity, a numerical measure or a label. Naming units in the surrounding sentence helps: “$c$ is the number of cups of flour, and $p$ is the price in pounds.” Then $p=2c$ has a specified interpretation and a coefficient of two pounds per cup.

A diagnostic sequence can hold a written expression fixed and change the question. Evaluate $3n+1$ at $n=2$; solve $3n+1=10$; explain whether $3n+1$ is odd for every integer $n$. These are three different demands. The third claim is false at $n=1$ and true when $n$ is even. The teacher must not judge all three by whether the learner can produce one numerical answer.

## Expressions and equivalence

Two real expressions are equivalent on a domain if they are defined there and have equal values at every assignment in that domain. Distributivity proves $a(b+c)=ab+ac$. The cancellation
$$\\frac{x^2-1}{x-1}=x+1$$
is valid only where $x\\ne1$, because the left expression is undefined at one. Agreeing at many chosen inputs illustrates equivalence; a general law proves it on the stated domain.

**Worked example 2 (Negative signs act on a whole).** Simplify $-(x-3)$. Since negation is multiplication by $-1$, distributivity gives $(-1)x+(-1)(-3)=-x+3$. A fictional response of $-x-3$ can be challenged at $x=5$: the original has value $-2$, whereas the proposed expression has value $-8$. The counterexample disproves equivalence but does not itself prove the correct identity. The distributive calculation supplies that proof. Ask the learner to connect each of the two products to its term before trying $-2(x-3)$, where distributing only a sign no longer suffices.

Use such numerical checks selectively. At $x=0$, some different expressions coincide, concealing an error; at $x=3$, the inner difference is zero and may conceal a misunderstanding of sign placement. Choosing $x=5$ here exposes the proposed mistake. A carefully selected example can refute a universal claim, while a thousand successful examples cannot establish an unrestricted identity without a further argument.

## Equation solving preserves a solution set

Let $D$ be the domain of an equation. Its solution set is the subset of $D$ at which the equation is true. A solving step is an equivalence when the old and new equations have exactly the same solution set. Adding the same expression to both sides preserves equality in both directions because subtraction reverses the operation. Multiplying both sides by a fixed nonzero number is similarly reversible. Multiplication by zero is not.

**Proposition 13.1 (A linear equation).** For fixed real numbers $a,b,c$, the equation $ax+b=c$ has the unique solution $(c-b)/a$ if $a\\ne0$. If $a=0$, it has every real number as a solution when $b=c$, and no solutions otherwise.

*Proof.* Subtracting $b$ gives the equivalent equation $ax=c-b$. For $a\\ne0$, multiplying by $1/a$ gives $x=(c-b)/a$; substituting this value satisfies the original equation, proving existence and uniqueness. When $a=0$, the equation reduces to $b=c$, which is independent of $x$. Its truth gives all reals, and its falsity gives none. ∎

The zero-coefficient case is useful teaching material rather than a technical annoyance. It distinguishes “find the number” from “determine all values making the relation true.” Equations can have none, one, finitely many or infinitely many solutions. A task sequence containing only unique solutions can encourage an expectation that every correct procedure must end at one numeral.

**Worked example 3 (An unknown on both sides).** Solve $3(x-2)=2x+5$ over the reals. Distributivity gives $3x-6=2x+5$. Subtract $2x$ from both sides to obtain $x-6=5$, then add six to obtain $x=11$. Substitution yields $3(11-2)=27=2\\cdot11+5$. The substitution checks the proposed answer, while reversibility of every step establishes that no other solution was lost. “Move the term and change its sign” abbreviates subtraction from both sides; asking for that underlying operation makes the abbreviation accountable.

## Nonreversible operations need a return check

Squaring equal real values preserves equality, but equal squares may have opposite signs. Thus squaring an equation can introduce solutions. Dividing by an expression can remove solutions where that expression vanishes. The issue is not whether these operations are always forbidden; it is whether the argument tracks the missing cases.

**Worked example 4 (A lost solution).** From $x(x-2)=0$, dividing by $x$ gives $x-2=0$ only under $x\\ne0$. The original equation also has solution zero. A complete method splits cases: if $x=0$, the original holds; otherwise division is legitimate and gives $x=2$. Alternatively, use the zero-product property of the reals to infer $x=0$ or $x-2=0$. A fictional script containing only $x=2$ might show an unrecorded assumption rather than difficulty multiplying out. Ask which values made the division step permissible.

The same discipline applies to inequalities. Multiplication by a positive real preserves order, and multiplication by a negative real reverses it. Multiplying by an expression with unknown sign requires cases or a different argument. For example, multiplying $1/x>1$ by $x$ without a sign condition obscures the domain and can give a wrong solution set. On $x>0$ it becomes $1>x$, giving $0<x<1$; on $x<0$ the inequality is false because the left side is negative. Zero is excluded from the start.

## From patterns to generalisation

A finite list does not determine a unique generating rule. Given values $1,3,5$ at inputs $1,2,3$, the rule $2n-1$ fits, but so does $2n-1+(n-1)(n-2)(n-3)$. The second rule differs at input four. A pattern task must provide a structural construction, a recurrence or an explicit model assumption if it expects one justified general formula.

A growing square-border diagram can supply that structure. A square of side $n$ has $n^2$ unit cells. Increasing the side to $n+1$ adds $2n+1$ cells, because
$$ (n+1)^2-n^2=2n+1.$$
Describe the added border as one row of $n+1$ cells and one column of $n$ further cells, preventing double counting of the corner. The geometry and algebra now describe the same change for every positive integer $n$. The formula follows from the construction, not merely from three recorded totals.

Generalisation also requires the intended domain. A rule about a number of tiles may start at positive integers; an algebraic identity may hold over all reals. Extending a diagram-based formula to negative inputs can be mathematically valid through algebra while lacking the same literal counting interpretation. The teacher should distinguish extending the expression from extending the physical story.

## A fictional classroom planning case

Suppose the goal is to distinguish expression simplification from equation solving. Prepare the three tasks: simplify $2(x+4)-x$; solve $2(x+4)-x=13$; decide whether $2(x+4)-x=x+8$ is an identity. The first gives an equivalent expression $x+8$. The second gives the one solution five. The third is true for every real input. The shared left expression holds arithmetic complexity roughly constant while the question changes.

In the fictional discussion, one response gives $x=8$ for every task. Record that response before interpreting it. Possible explanations include treating every letter task as a solve-for-$x$ instruction, overlooking the stated verbs, or confusing the simplified constant term with the value of the variable. Ask the learner to substitute $x=0$ and describe what each task is requesting. Do not label the person from the initial line.

A revised teaching conjecture is to pair each symbolic task with a sentence about its solution object: an expression, a set of inputs or a universally true relation. That proposal has a mathematical rationale, but its effectiveness is empirical. A later task using $3(t-1)+2t$ can investigate transfer without merely repeating the original numerical answer. If the learner distinguishes the tasks verbally but still makes a distributive error, the next response should address that different issue.

## Exercises

### Exercise 1
<a id="teaching-algebra-arithmetic-to-symbols-ex-1"></a>
Repair $6+7=13-4=9$ in two ways and explain what the original equality chain falsely asserted.

<details><summary>Hint 1</summary>

Evaluate the expression between the equals signs.

</details>
<details><summary>Hint 2</summary>

Separate calculations, or put the whole calculation in one expression.

</details>
<details><summary>Solution</summary>

The middle expression $13-4$ equals nine, whereas $6+7$ equals thirteen, so the first equality is false. Write $6+7=13$, then $13-4=9$, as two calculations. Alternatively write $(6+7)-4=9$. The repair preserves the intended sequence of operations while removing the false assertion that all displayed expressions name the same number. Asking only for the final value would miss the notational issue.

</details>

### Exercise 2
<a id="teaching-algebra-arithmetic-to-symbols-ex-2"></a>
Explain the roles of the letters in $u+2=7$, $a(b+c)=ab+ac$ and $y=mx+1$ when $m$ is fixed and $x$ varies.

<details><summary>Hint 1</summary>

Distinguish solving a condition from stating an identity.

</details>
<details><summary>Hint 2</summary>

One letter specifies a member of a function family.

</details>
<details><summary>Solution</summary>

In the first equation $u$ is an unknown real constrained to five. In the second, $a,b,c$ are arbitrary real inputs in a universal distributive identity; no one value is being sought. In the third, fixed $m$ is a parameter specifying the slope, $x$ is an input variable and $y$ its dependent output. Other interpretations are possible in other contexts, so a teacher should state the role rather than infer it from the printed letter alone.

</details>

### Exercise 3
<a id="teaching-algebra-arithmetic-to-symbols-ex-3"></a>
A fictional solution gives $-2(x-4)=-2x-8$. Supply a revealing counterexample and a general proof of the correct expression.

<details><summary>Hint 1</summary>

Try a value where the original inner difference is positive.

</details>
<details><summary>Hint 2</summary>

Distribute the full factor $-2$ to both terms.

</details>
<details><summary>Solution</summary>

At $x=5$, the original is $-2$, while the proposed expression is $-18$, disproving equivalence. Distributivity gives $-2(x-4)=(-2)x+(-2)(-4)=-2x+8$ for every real $x$. The example refutes the wrong claim and the law proves the correction. A follow-up should ask what factor multiplies the second term; simply replacing a sign without explanation could hide the same issue on a new problem.

</details>

### Exercise 4
<a id="teaching-algebra-arithmetic-to-symbols-ex-4"></a>
Solve $4x+3=2x+11$ and explain why substitution and reversible steps supply different information.

<details><summary>Hint 1</summary>

Subtract $2x$ from both sides.

</details>
<details><summary>Hint 2</summary>

Reverse every operation to compare solution sets.

</details>
<details><summary>Solution</summary>

Subtracting $2x$ gives $2x+3=11$; subtracting three gives $2x=8$; dividing by two gives $x=4$. Substitution produces nineteen on each side, establishing that four is a solution. Reversibility establishes equivalence of the equations and hence that every original solution must be four. A substitution check alone would not rule out additional solutions to a different equation with several roots.

</details>

### Exercise 5
<a id="teaching-algebra-arithmetic-to-symbols-ex-5"></a>
Determine all real solutions of $2(x+1)=2x+2$ and $2(x+1)=2x+3$. Explain their value in a teaching sequence.

<details><summary>Hint 1</summary>

Expand the left sides in both equations.

</details>
<details><summary>Hint 2</summary>

The resulting statements no longer depend on $x$.

</details>
<details><summary>Solution</summary>

The first reduces to $2x+2=2x+2$, true for all real $x$. The second reduces, after subtracting $2x+2$, to $0=1$, false for every real $x$. Thus their solution sets are $\\mathbb R$ and the empty set. Together with a unique-solution example, they expose the assumption that solving must always produce one number. A learner should explain the remaining truth condition, rather than treat cancellation of the variable as a procedural failure.

</details>

### Exercise 6
<a id="teaching-algebra-arithmetic-to-symbols-ex-6"></a>
Find the lost solution when $x(x+3)=0$ is divided by $x$. Give a complete solution with the necessary cases.

<details><summary>Hint 1</summary>

Division requires a nonzero divisor.

</details>
<details><summary>Hint 2</summary>

Inspect zero separately before dividing.

</details>
<details><summary>Solution</summary>

At $x=0$ the original equation is true. If $x\\ne0$, dividing is legitimate and gives $x+3=0$, hence $x=-3$. Both values satisfy the original, so the complete solution set is $\\{0,-3\\}$. The division-only method loses zero because its extra hypothesis excludes it. The zero-product property gives the same two cases directly. The teaching issue is tracking the condition on an operation, not banning cancellation in every context.

</details>

### Exercise 7
<a id="teaching-algebra-arithmetic-to-symbols-ex-7"></a>
Squaring $x=-2$ gives $x^2=4$. Compare the solution sets and formulate a precise instruction for handling the squared equation.

<details><summary>Hint 1</summary>

Equal squares can have opposite roots.

</details>
<details><summary>Hint 2</summary>

Return the proposed values to the original condition.

</details>
<details><summary>Solution</summary>

The original has solution set $\\{-2\\}$; the squared equation has $\\{-2,2\\}$. Squaring preserves the implication from old solutions to new ones but is not reversible on all real values. Solve the squared condition to generate candidates and then check each in the original: two fails and negative two succeeds. The return check is essential because the operation enlarged the set, rather than merely providing optional arithmetic reassurance.

</details>

### Exercise 8
<a id="teaching-algebra-arithmetic-to-symbols-ex-8"></a>
Give two polynomial rules agreeing with $2,4,6$ at inputs $1,2,3$ but disagreeing at four. Explain what additional information would warrant choosing the simpler rule.

<details><summary>Hint 1</summary>

Start with $2n$.

</details>
<details><summary>Hint 2</summary>

Add a polynomial vanishing at the first three inputs.

</details>
<details><summary>Solution</summary>

Use $f(n)=2n$ and $g(n)=2n+(n-1)(n-2)(n-3)$. The added product vanishes at one, two and three, but equals six at four; the outputs there are eight and fourteen. A supplied construction adding two units at every stage, or an explicit assumption of an affine rule, would warrant $2n$ from these initial values. A preference for simplicity is a modelling choice rather than a proof that finite data determine the continuation.

</details>

### Exercise 9
<a id="teaching-algebra-arithmetic-to-symbols-ex-9"></a>
Design three questions using $3(t-1)+2t$ that respectively ask for an expression, a solution set and an identity judgement. Supply full mathematical answers.

<details><summary>Hint 1</summary>

Change the requested object while holding the expression fixed.

</details>
<details><summary>Hint 2</summary>

Simplification gives $5t-3$.

</details>
<details><summary>Solution</summary>

Ask “simplify”: distributivity gives $3t-3+2t=5t-3$. Ask “solve $3(t-1)+2t=12$ over the reals”: equivalence gives $5t=15$, so the solution set is $\\{3\\}$. Ask “is $3(t-1)+2t=5t-3$ an identity?”: yes, because the distributive calculation holds for every real input. Asking learners to name their answer object distinguishes the three demands; identical arithmetic does not make them the same question.

</details>

### Exercise 10
<a id="teaching-algebra-arithmetic-to-symbols-ex-10"></a>
Prepare a fictional record for a learner who writes $x=8$ when asked to simplify $2(x+4)-x$. Separate the response, two rival interpretations and a follow-up that could distinguish them.

<details><summary>Hint 1</summary>

Avoid assigning a permanent trait to the learner.

</details>
<details><summary>Hint 2</summary>

One interpretation concerns the task; another concerns combining terms.

</details>
<details><summary>Solution</summary>

Record exactly that the fictional script gives $x=8$. Perhaps the learner believes every letter task asks for a numerical solution; alternatively they have distributed correctly but incorrectly cancelled $2x-x$ to zero. Ask first what simplification requests, then ask them to expand the expression and retain a line for combining its variable terms. A correct description of the task with $2x-x=0$ supports the second interpretation locally. Correct combination followed by insisting on one fixed $x$ supports the first. Neither record is an actual empirical finding.

</details>

## Summary and sources

Equality is a relation between values. Letters receive their roles from the question and its domain. Expression equivalence quantifies over allowed assignments; solving identifies the assignments satisfying a condition. Reversible steps preserve the whole solution set, while nonreversible steps require explicit case analysis or a return check. Structural patterns warrant general rules when their construction, rather than only a finite list, is supplied.

The examples and proofs in this chapter are new mathematical teaching cases. Liping Ma's *Knowing and Teaching Elementary Mathematics* is the book's comparison text for mathematical explanations of elementary procedures. Existing chapters and the combined research bibliography supply the education references; no new empirical conclusion is attributed to those sources here. Continue with Reading Educational Evidence to examine the different warrants needed for an instructional effect claim.
`;export{e as default};