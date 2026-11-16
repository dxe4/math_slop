var e=`---
parent_id: book-introduction-to-proof
chapter_id: statements-truth-tables
title: "Statements and Truth Tables"
level: undergraduate
license: CC BY-SA 4.0
---

# Statements and Truth Tables

## A promise and a counterexample

A notice says, “If the light is red, the gate is closed.” You observe a red light and an open gate. That observation contradicts the notice. But if the light is green and the gate is closed, the observation does not contradict it: the notice made no promise about a green light. The direction of a mathematical implication has the same asymmetry. Learning to keep its hypothesis and conclusion in place is a practical first step toward proving the right claim.

This chapter develops statements, the classical connectives, truth tables, implications, converses and biconditionals. You will build tables rather than guess from an English sentence, explain why an implication with a false hypothesis is true in classical logic, and use a truth assignment to disprove a proposed equivalence. Later chapters will address quantified statements and give proofs about mathematical objects. A truth table establishes a relationship between statement forms; it does not by itself establish an unexamined numerical premise.

## Preparation and notation

You need ordinary arithmetic, familiarity with sets and the distinction between an example and a general claim. The [logic and proof refresher](/lucent/#/course/refresher/logic-proof) gives a short companion discussion. We use $\\mathbb Z$ for the integers and $\\mathbb R$ for the real numbers. Here “or” includes the possibility that both alternatives hold, and a mathematical statement is treated in classical logic as true or false. This is a convention for the argument, not a claim that every sentence in everyday language is immediately decidable.

A **definition** fixes how a word or symbol will be used. A **theorem** is a claim supported by a proof under its stated hypotheses. A table below is a proof about the listed truth-functional forms because it exhausts every possible assignment of truth values to their component statements. When a formula contains variables such as $x$, give those variables values or bind them with quantifiers before calling the resulting sentence a statement.

## Statements and logical form

**Definition 1.1 (Statement).** A statement, or proposition, is a declarative sentence with a definite truth value, true (T) or false (F), in the specified mathematical setting. The sentence “$11$ is prime” is a true statement; “$15$ is prime” is false. Both qualify as statements. “Close the gate” is an instruction, not a proposition. “Is $11$ prime?” is a question, not a proposition. Neither has a truth value in the sense used here.

The expression “$x>2$” is an **open sentence**: whether it is true depends on the free variable $x$. At $x=3$ it gives a true statement; at $x=1$ it gives a false statement. It is also incomplete until we specify what kind of object $x$ is: the comparison has the usual meaning for real numbers, but not for arbitrary sets. The next chapter studies how quantifiers turn suitable open sentences into statements.

Let $P$ mean “$6$ is even” and $Q$ mean “$6$ is divisible by $4$.” Thus $P$ is true and $Q$ is false. The symbol $P$ abbreviates the whole statement, not the number six. We can investigate a form such as $P\\land Q$ by considering all possible T/F combinations, even though this particular choice supplies only one row. This separation of form from interpretation is useful: the same logical argument may apply to divisibility, continuity or a geometric construction.

A truth table is exhaustive only relative to the atomic statements and classical truth values listed. For example, a table with columns $P$ and $Q$ has four assignments. Some assignments might be impossible for a particular interpretation: if $P$ says “$n$ is divisible by four” and $Q$ says “$n$ is even,” there is no integer making $P$ true and $Q$ false. We nevertheless include that row when proving an identity of *all* statement forms. The interpretation may have extra mathematical facts that the bare letters do not encode.

## Negation, conjunction and disjunction

**Definition 1.2 (Connectives).** The negation $\\neg P$ is true exactly when $P$ is false. The conjunction $P\\land Q$ is true exactly when both $P$ and $Q$ are true. The inclusive disjunction $P\\lor Q$ is true exactly when at least one of $P,Q$ is true. In particular, “at least one” allows both. These rules determine the following table completely.

| $P$ | $Q$ | $\\neg P$ | $P\\land Q$ | $P\\lor Q$ |
|---|---|---|---|---|
| T | T | F | T | T |
| T | F | F | F | T |
| F | T | T | F | T |
| F | F | T | F | F |

For two real numbers, “$x=1$ or $x=2$” is exclusive only because a real number cannot equal two distinct numbers at once. The word “or” itself has not become exclusive. On the other hand, “$x\\ge0$ or $x\\le1$” holds for $x=1/2$ with both alternatives true. If an everyday instruction means exactly one alternative, say so explicitly: $(P\\lor Q)\\land\\neg(P\\land Q)$.

**Worked example 1.** Let $P$ be “$12$ is divisible by $3$” and $Q$ be “$12$ is odd.” The values are $P=\\mathrm T$, $Q=\\mathrm F$. Therefore $\\neg Q$ is true, $P\\land Q$ is false, and $P\\lor Q$ is true. The disjunction remains true even though one of its alternatives is false. To evaluate $P\\land\\neg Q$, first negate $Q$, obtaining T, and then combine T with T; the result is true. Reading from the inside out prevents a sign from being applied to the wrong statement.

**Theorem 1.3 (De Morgan's laws for statements).** For all statements $P,Q$, the forms $\\neg(P\\land Q)$ and $(\\neg P)\\lor(\\neg Q)$ have the same truth value; so do $\\neg(P\\lor Q)$ and $(\\neg P)\\land(\\neg Q)$.

**Proof.** If both $P,Q$ are true, $P\\land Q$ is true and its negation is false; both negations on the right are false, so their disjunction is also false. In each of the other three assignments at least one of $P,Q$ is false, so both sides of the first equivalence are true. For the second equivalence, if both are false then the original disjunction is false and both negations are true. In each of the remaining assignments the original disjunction is true and at least one of the negations is false, making both sides false. These cases exhaust the four assignments. $\\square$

These are logical statements about whole propositions. They do not say that $\\neg(P\\land Q)$ is the same as $(\\neg P)\\land(\\neg Q)$. To refute that incorrect rewrite, take $P$ true and $Q$ false. The negated conjunction is true, while the conjunction of both negations is false. A single row of disagreement disproves an alleged equivalence.

## Conditional statements and vacuity

**Definition 1.4 (Implication).** The conditional $P\\Rightarrow Q$, read “if $P$, then $Q$,” is false exactly when $P$ is true and $Q$ is false. It is true in the other three cases. Here $P$ is the hypothesis or antecedent and $Q$ is the conclusion or consequent. A proof of the conditional may begin by assuming $P$ and must establish $Q$ under that assumption.

| $P$ | $Q$ | $P\\Rightarrow Q$ | $Q\\Rightarrow P$ |
|---|---|---|---|
| T | T | T | T |
| T | F | F | T |
| F | T | T | F |
| F | F | T | T |

The second conditional is the **converse** of the first. The middle rows differ, so a conditional and its converse are not equivalent as forms. They can happen to have the same truth value for a specific pair of statements, or both can be true because of additional mathematics, but neither follows from the other by form alone.

Why call the conditional true when its hypothesis is false? Under this definition the conditional is the promise that no case has $P$ true and $Q$ false. If $P$ is false, that forbidden case has not occurred. Thus “if $9$ is divisible by $4$, then $9$ is even” is true as a material conditional, even though its conclusion is false and the sentence is not a useful way to prove $9$ even. This is **vacuous truth**, not evidence that a false assumption causes anything. The choice makes the conditional agree with the ordinary practice of checking a theorem only on objects satisfying its hypothesis.

Distinguish a single conditional from a general theorem. The claim “for every integer $n$, if $4$ divides $n$ then $n$ is even” requires checking all integers, not just a single vacuous case such as $n=3$. A direct proof writes $n=4k$ for some integer $k$, then $n=2(2k)$; since $2k$ is an integer, $n$ is even. The argument covers every integer satisfying the hypothesis. The converse is false: $n=6$ is even but not divisible by four.

**Worked example 2.** Set $P$ to “an integer $n$ is divisible by $6$” and $Q$ to “$n$ is divisible by $3$.” If $P$ holds, $n=6k=3(2k)$ for an integer $k$, so $Q$ holds. This proves $P\\Rightarrow Q$ for each integer. The converse would say every multiple of $3$ is a multiple of $6$. Take $n=9$: $Q$ is true but $P$ is false. Hence the converse fails. At $n=5$, both $P,Q$ are false and both individual conditionals are true by the final row; that one instance does not prove either universal claim.

## Equivalence, converse and contrapositive

**Definition 1.5 (Equivalence).** Two statement forms are logically equivalent when they have the same truth value for every assignment of truth values to their atomic statements. The biconditional $P\\Leftrightarrow Q$, read “$P$ if and only if $Q$,” means $(P\\Rightarrow Q)\\land(Q\\Rightarrow P)$. It is true when $P,Q$ have the same truth value and false when they differ. To prove a mathematical biconditional directly, prove both implications; name which direction is being proved.

The **contrapositive** of $P\\Rightarrow Q$ is $\\neg Q\\Rightarrow\\neg P$. It reverses the order *and* negates both components. The **inverse** $\\neg P\\Rightarrow\\neg Q$ is instead the contrapositive of the converse. Confusing these names is less serious than confusing their actual forms, so write the formulas before relying on a name.

**Theorem 1.6 (Conditional identities).** For any statements $P,Q$, the forms $P\\Rightarrow Q$, $\\neg P\\lor Q$, and $\\neg Q\\Rightarrow\\neg P$ are logically equivalent.

**Proof.** The first form is false exactly on the assignment $P=\\mathrm T$, $Q=\\mathrm F$. The disjunction $\\neg P\\lor Q$ is false exactly when both of its terms are false, that is, exactly when $P=\\mathrm T$ and $Q=\\mathrm F$. The contrapositive is false exactly when its antecedent $\\neg Q$ is true and its consequent $\\neg P$ is false, again exactly on that assignment. On the other three assignments each form is true. Therefore their values agree in every case. $\\square$

A contrapositive proof is consequently a proof of the original conditional, not a proof of its converse. For example, from “if an integer is divisible by $4$, then it is even,” the contrapositive says “if an integer is not even, then it is not divisible by $4$.” The different sentence “if it is even, then it is divisible by $4$” is the false converse found above. The falsity of that converse does not weaken the original theorem.

**Worked example 3.** Decide whether $(P\\Rightarrow Q)\\land(Q\\Rightarrow P)$ is equivalent to $P\\Leftrightarrow Q$. It is, directly by the definition of the biconditional. For an explicit table, use rows TT, TF, FT, FF. The two implications have values T,T; F,T; T,F; T,T respectively, so their conjunction gives T,F,F,T. That is exactly the “same truth value” column. Notice especially the last row: both false makes each implication true. Agreement in this row is part of the definition, not a claim that the false statements are correct.

## Truth tables as a proof tool

**Worked example 4.** Is $P\\Rightarrow(Q\\land R)$ equivalent to $(P\\Rightarrow Q)\\land(P\\Rightarrow R)$? If $P$ is false, the conditional on the left is true and both conditionals on the right are true. If $P$ is true, the left has the truth value of $Q\\land R$, while the right has the value of $Q\\land R$ as well: each implication reduces to its consequent. These two cases cover all eight assignments of $P,Q,R$, so the forms are equivalent. This case argument is a compact truth table, not an appeal to a few examples.

By contrast, $(P\\lor Q)\\Rightarrow R$ is not equivalent to $P\\lor(Q\\Rightarrow R)$. Take $P$ true and $R$ false, with either value for $Q$. The left antecedent is true and its conclusion false, so the left is false; the right is true because $P$ is true. A counterassignment is a complete refutation of a universal claim of logical equivalence.

A truth table can also check whether an argument form is **valid**: every row in which all premises are true must make the conclusion true. If there is no such row, the form is valid vacuously, although inconsistent premises are a poor basis for ordinary mathematical work. Validity is not the same as the actual truth of the premises. “If $5$ is even then $5$ is divisible by $2$; $5$ is even; therefore $5$ is divisible by $2$” has the valid form of modus ponens, even though its second premise is false. Conversely, true premises may accidentally accompany an invalid form if some other assignment gives true premises and a false conclusion.

## Diagnosing a proposed argument

Consider an argument about a real function $f$: “If $f$ is differentiable at $a$, then it is continuous at $a$. The function is continuous at $a$. Therefore it is differentiable at $a$.” The first premise is a theorem of calculus, with the usual meaning of differentiability on an open interval around $a$. The argument nonetheless has the invalid form $P\\Rightarrow Q$, $Q$, therefore $P$. Take $f(x)=|x|$ and $a=0$: the function is continuous at zero, but its left and right difference quotients approach different values, $-1$ and $1$. This is a mathematical counterexample to the conclusion under these premises, not merely an abstract row in a truth table.

Now consider the closely related form $P\\Rightarrow Q$, $\\neg Q$, therefore $\\neg P$. It is valid. If both premises hold and $P$ were true, the conditional would force $Q$, contradicting $\\neg Q$; thus $P$ must be false. In the same setting, if a function is not continuous at a point, it cannot be differentiable there. This is an application of the contrapositive of the differentiability theorem. The logical step is sound only after the theorem's hypotheses and the meaning of “at a point” have been checked.

Do not expect a truth table to reveal every mathematical consequence of a particular statement. If $P$ abbreviates “$n$ is divisible by six” and $Q$ abbreviates “$n$ is divisible by three,” their letters do not encode the arithmetic proof that $P$ implies $Q$. Treating all four assignments as possible is appropriate when investigating a general propositional identity, but the arithmetic interpretation rules out one of them. The table tells us what would have to be established; a proof using divisibility establishes it for integers. This division of work is useful: logical form organizes a proof, while definitions and established theorems supply its mathematical content.

## Exercises

Try each question before opening its hints. In a table, include every row; in a counterexample, state the domain and check both parts.

<a id="statements-truth-tables-ex1"></a>

### Exercise 1: Recognizing statements

Classify “$7$ is odd”, “$x+1=4$” with $x$ unspecified, and “write a proof”. Explain each classification.

<details>
<summary>Hint 1</summary>

A statement is a declarative sentence with a definite truth value.

</details>
<details>
<summary>Hint 2</summary>

Ask whether changing an unassigned variable changes the value.

</details>
<details>
<summary>Solution</summary>

The first is a true statement because $7=2\\cdot3+1$. The second is an open sentence: it is true at $x=3$ and false at $x=0$. The third is an instruction, so it has no truth value.

</details>

<a id="statements-truth-tables-ex2"></a>

### Exercise 2: Inclusive or

For real $x=1$, evaluate “$x\\ge1$ or $x\\le2$” and its negation.

<details>
<summary>Hint 1</summary>

Evaluate each inequality first.

</details>
<details>
<summary>Hint 2</summary>

Inclusive or permits both alternatives.

</details>
<details>
<summary>Solution</summary>

Both inequalities are true. The disjunction is therefore true, and its negation is false. Both alternatives being true does not make inclusive or false.

</details>

<a id="statements-truth-tables-ex3"></a>

### Exercise 3: Negating a conjunction

Negate “$P$ and $Q$” and give a row showing that “not $P$ and not $Q$” is not equivalent to it.

<details>
<summary>Hint 1</summary>

Use the first De Morgan law.

</details>
<details>
<summary>Hint 2</summary>

Try one true statement and one false statement.

</details>
<details>
<summary>Solution</summary>

The negation is $\\neg P\\lor\\neg Q$. If $P$ is true and $Q$ false, this is true while $\\neg P\\land\\neg Q$ is false. Thus the latter is too strong.

</details>

<a id="statements-truth-tables-ex4"></a>

### Exercise 4: Conditional cases

Give the truth value of $P\\Rightarrow Q$ for $(P,Q)=(\\mathrm T,\\mathrm F)$ and $(\\mathrm F,\\mathrm F)$, and explain the difference.

<details>
<summary>Hint 1</summary>

There is exactly one false row.

</details>
<details>
<summary>Hint 2</summary>

Identify whether the hypothesis actually holds.

</details>
<details>
<summary>Solution</summary>

The first conditional is false: its hypothesis holds and conclusion fails. The second is true vacuously: the hypothesis is false, so that forbidden combination does not occur. Neither conclusion is true in these two assignments.

</details>

<a id="statements-truth-tables-ex5"></a>

### Exercise 5: Converse and counterexample

Over $\\mathbb Z$, prove “if $n$ is divisible by $8$, then $n$ is divisible by $4$,” and decide its converse.

<details>
<summary>Hint 1</summary>

Write a multiple of eight as $8k$.

</details>
<details>
<summary>Hint 2</summary>

Find a multiple of four that is not a multiple of eight.

</details>
<details>
<summary>Solution</summary>

If $n=8k$ for $k\\in\\mathbb Z$, then $n=4(2k)$, so $4$ divides $n$. The converse is false: $n=4$ is divisible by $4$, but $4=8k$ has no integer solution $k$.

</details>

<a id="statements-truth-tables-ex6"></a>

### Exercise 6: Contrapositive

Write the contrapositive of “if $n$ is divisible by $5$, then $n^2$ is divisible by $5$,” for integer $n$, and prove it by proving the original.

<details>
<summary>Hint 1</summary>

Reverse and negate the two complete statements.

</details>
<details>
<summary>Hint 2</summary>

If $n=5k$, factor $n^2$.

</details>
<details>
<summary>Solution</summary>

The contrapositive is “if $5$ does not divide $n^2$, then $5$ does not divide $n$.” If $5$ divides $n$, write $n=5k$ with integer $k$. Then $n^2=25k^2=5(5k^2)$, so $5$ divides $n^2$. The proven conditional is equivalent to its contrapositive.

</details>

<a id="statements-truth-tables-ex7"></a>

### Exercise 7: Biconditional

For integer $n$, prove that $n$ is even if and only if $n+3$ is odd.

<details>
<summary>Hint 1</summary>

Prove the two directions separately.

</details>
<details>
<summary>Hint 2</summary>

Write even integers as $2k$ and odd integers as $2k+1$.

</details>
<details>
<summary>Solution</summary>

If $n=2k$, then $n+3=2(k+1)+1$ is odd. Conversely, if $n+3=2j+1$, then $n=2j-2=2(j-1)$ is even. Both parameters are integers, so both implications hold.

</details>

<a id="statements-truth-tables-ex8"></a>

### Exercise 8: An inequivalence

Disprove the proposed equivalence $\\neg(P\\Rightarrow Q)\\equiv\\neg P\\Rightarrow\\neg Q$.

<details>
<summary>Hint 1</summary>

Try the row in which both $P$ and $Q$ are true.

</details>
<details>
<summary>Hint 2</summary>

On that row the conditional on the left is true, while the right conditional has a false antecedent.

</details>
<details>
<summary>Solution</summary>

Take $P=\\mathrm T$, $Q=\\mathrm T$: the left is false, whereas $\\neg P\\Rightarrow\\neg Q$ is true because its antecedent is false. Thus the forms differ. In fact $\\neg(P\\Rightarrow Q)\\equiv P\\land\\neg Q$.

</details>

<a id="statements-truth-tables-ex9"></a>

### Exercise 9: Validity

Is “$P\\Rightarrow Q$; $Q$; therefore $P$” a valid argument form?

<details>
<summary>Hint 1</summary>

Look for true premises and a false conclusion.

</details>
<details>
<summary>Hint 2</summary>

Take $Q$ true but $P$ false.

</details>
<details>
<summary>Solution</summary>

No. With $P=\\mathrm F$, $Q=\\mathrm T$, the conditional is true and the second premise is true, but the conclusion is false. This invalid pattern is affirming the consequent.

</details>

<a id="statements-truth-tables-ex10"></a>

### Exercise 10: Distributing a hypothesis

Prove that $(P\\lor Q)\\Rightarrow R$ is equivalent to $(P\\Rightarrow R)\\land(Q\\Rightarrow R)$.

<details>
<summary>Hint 1</summary>

Use $A\\Rightarrow B\\equiv\\neg A\\lor B$.

</details>
<details>
<summary>Hint 2</summary>

Separate the cases $R$ true and $R$ false.

</details>
<details>
<summary>Solution</summary>

If $R$ is true, all three conditionals are true. If $R$ is false, the left conditional is true exactly when $P\\lor Q$ is false, namely when both $P,Q$ are false. The two conditionals on the right are then true exactly under the same condition. These cases cover every assignment, proving equivalence.

</details>

## Sources

Richard Hammack, [*Book of Proof*, third edition](https://richardhammack.github.io/BookOfProof/), Chapter 2, provides another introduction to statements and truth tables. The examples and exercises here are independently written. Euler's Lucent refresher and shared foundations notes provide complementary preparation; their content and licences remain with those sources.

## Summary

Statements have truth values in a specified setting; open sentences require values or quantifiers. Negation reverses a truth value, conjunction requires both terms, and inclusive disjunction requires at least one. A conditional fails only when its hypothesis is true and conclusion false. Its contrapositive is equivalent, while its converse need not be. A biconditional requires both directions. Truth tables prove equivalence by exhausting assignments; a single disagreement disproves it. The next chapter adds quantifiers, where the domain and order of choices become as important as the connective.
`;export{e as default};