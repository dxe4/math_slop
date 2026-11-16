var e=`---
parent_id: book-introduction-to-proof
chapter_id: direct-proof-cases
title: "Direct Proof and Proof by Cases"
level: undergraduate
estimated_minutes: 120
license: CC BY-SA 4.0
---

# Direct Proof and Proof by Cases

A proof is an explanation that establishes a precise claim from stated assumptions. It is not a collection of examples that happen to work, although examples are often an excellent way to find the right explanation. In this chapter we will prove statements about integers and real numbers by tracing the consequences of their definitions. We will also learn to divide an argument into cases without leaving any possibility unexamined.

Our basic domains are the integers $\\mathbb Z=\\{\\ldots,-2,-1,0,1,2,\\ldots\\}$ and the real numbers $\\mathbb R$. When a statement concerns positive integers we write $\\mathbb Z_{>0}$. Zero and negative integers are integers, and a proof that mentions only positive examples does not automatically cover them. Whenever we write a fraction, its denominator is required to be nonzero. We use the familiar rules of integer and real arithmetic and the order rule that adding the same real number to both sides preserves an inequality.

## What a direct proof promises

A common mathematical claim has the form “for every object in a specified domain, if $P$ holds, then $Q$ holds.” The hypothesis $P$ tells us what we may assume; the conclusion $Q$ tells us what we must establish. A direct proof chooses an arbitrary object in the stated domain, assumes its hypothesis, and deduces the conclusion. Since the object was arbitrary and no further restriction was imposed, the conclusion holds for all objects to which the theorem applies.

**Definition 3.1.** An integer $n$ is **even** if $n=2k$ for some integer $k$. It is **odd** if $n=2k+1$ for some integer $k$. The integer $k$ is a witness: its existence supplies the certificate required by the definition. For instance, $-6$ is even with witness $-3$, and $-3$ is odd with witness $-2$. Zero is even, with witness zero. These examples matter because a proof using parity must include them as well as familiar positive numbers.

The witness may depend on the integer. If $a$ and $b$ are both even, write $a=2r$ and $b=2s$ for integers $r$ and $s$; there is no reason to use the same witness for both. To prove that a resulting integer is even, we must exhibit it as twice an integer. Merely writing “the answer is even” omits the step that connects the calculation to the definition.

### Worked example 1: adding two odd integers

**Claim.** If $a,b\\in\\mathbb Z$ are odd, then $a+b$ is even.

**Proof.** Since $a$ and $b$ are odd, there are integers $r$ and $s$ such that $a=2r+1$ and $b=2s+1$. Therefore

$$a+b=(2r+1)+(2s+1)=2(r+s+1).$$

The integer $r+s+1$ is a witness that $a+b$ is even. This proves the claim. No positivity was used, so the argument includes negative integers and any odd integers on opposite sides of zero.

Notice the direction of work. We did not start by assuming that $a+b$ is even. We started with what oddness gives us and constructed a witness for the conclusion. In private scratch work it can be useful to look backwards: the desired form is $2t$, so perhaps collecting a factor of two will help. The finished proof still gives a forward chain whose reasons are explicit.

## Divisibility is an existential statement

**Definition 3.2.** For integers $a,b$, we say $a$ **divides** $b$, written $a\\mid b$, if there is an integer $k$ with $b=ak$. We allow $a=0$ in this definition: $0\\mid0$, because $0=0k$ for any integer $k$, whereas $0$ divides no nonzero integer. Some books impose $a\\ne0$ by convention; when comparing statements, check which convention is in force. None of the arguments below divides by the integer $a$.

For example, $-3\\mid12$ because $12=(-3)(-4)$, and every integer divides zero because $0=a\\cdot0$. The notation $a\\mid b$ is not a fraction and does not assert that $b\\mid a$. The statement $3\\mid12$ is true, but $12\\mid3$ is false: no integer multiple of twelve equals three.

### Worked example 2: a linear combination

**Claim.** Let $a,b,c,u,v\\in\\mathbb Z$. If $a\\mid b$ and $a\\mid c$, then $a\\mid(ub+vc)$.

**Proof.** By the divisibility hypotheses there are integers $r,s$ for which $b=ar$ and $c=as$. Substitution gives

$$ub+vc=u(ar)+v(as)=a(ur+vs).$$

Because $ur+vs$ is an integer, it is a witness that $a\\mid(ub+vc)$. The proof includes $a=0$: in that case the hypotheses force $b=c=0$ and the conclusion is $0\\mid0$. No cancellation of $a$ is needed.

The same idea proves transitivity. If $a\\mid b$ and $b\\mid c$, choose integers $r,s$ with $b=ar$ and $c=bs$. Then $c=a(rs)$, hence $a\\mid c$. This is a small proof, but each step has a role: the hypotheses provide witnesses, multiplication supplies a new witness, and the definition gives the result.

## Keeping inequalities in the right domain

**Theorem 3.3.** For every $x\\in\\mathbb R$, $x^2+1\\ge 2x$, with equality exactly when $x=1$.

**Proof.** Every real square is nonnegative, so $(x-1)^2\\ge0$. Expanding gives $x^2-2x+1\\ge0$; adding $2x$ to both sides gives $x^2+1\\ge2x$. Equality holds precisely when $(x-1)^2=0$, which occurs precisely when $x-1=0$, or $x=1$. Thus both the inequality and its equality condition have been justified.

A direct proof of an inequality must respect operations that can change its direction. Multiplying by a positive number preserves order; multiplying by a negative number reverses it. Multiplication by a quantity of unknown sign cannot be used in either way without further reasoning. Squaring both sides is likewise unsafe without sign information: $-3<2$ but $9>4$. The square in the preceding proof is safe because we apply the independently known fact that a square is nonnegative, rather than squaring an existing inequality.

## What counts as a case?

A proof by cases divides the objects satisfying the hypothesis into a collection of subcases. The cases must **cover** every allowed object, and each case must lead to the desired conclusion. They may overlap, provided the argument is valid in the overlap. Disjoint cases are often easier to read, but disjointness is not a substitute for coverage.

For each integer $n$, exactly one of $n=2k$ or $n=2k+1$ holds for some integer $k$. One way to justify this is the division algorithm with divisor two: there are integers $q,r$ with $n=2q+r$ and $0\\le r<2$, so $r$ is zero or one. This formulation works for negative $n$ as well; for example $-3=2(-2)+1$. Thus “even or odd” is an exhaustive division of the integers, not merely an observed pattern among the first few positive integers.

For a real number $x$, the cases $x\\ge0$ and $x<0$ cover all possibilities and do not overlap. The alternatives $x>0$ and $x<0$ leave out zero. If the hypothesis explicitly says $x\\ne0$, the latter two cases do cover the permitted domain. Coverage is always judged relative to the statement being proved.

### Worked example 3: consecutive integers

**Claim.** For every integer $n$, the product $n(n+1)$ is even.

**Proof.** By the parity classification, $n$ is even or odd.

If $n$ is even, write $n=2k$ with $k\\in\\mathbb Z$. Then $n(n+1)=2[k(n+1)]$, and the bracket is an integer.

If $n$ is odd, write $n=2k+1$. Then $n+1=2(k+1)$, so $n(n+1)=2[n(k+1)]$, again twice an integer.

In either case the product is even. The cases include $n=0$, where the product is zero, and all negative integers. Since the two cases exhaust $\\mathbb Z$, the proof is complete.

The structure is more important than the number of cases. A proof of a statement about a nonzero real might use the cases $x>0$ and $x<0$; a proof about all reals must also handle $x=0$, either separately or by using $x\\ge0$ in one branch. A case cannot be dismissed merely because a calculation would require a division by zero: instead, examine the zero case directly or avoid dividing.

### Worked example 4: a bound for absolute value

**Definition 3.4.** For $x\\in\\mathbb R$, the absolute value is $|x|=x$ when $x\\ge0$ and $|x|=-x$ when $x<0$.

**Claim.** For all real $x$, $|x|\\ge x$.

**Proof.** If $x\\ge0$, the definition gives $|x|=x$, so the inequality holds with equality. If $x<0$, then $-x>0>x$, and the definition gives $|x|=-x>x$. The cases $x\\ge0$ and $x<0$ cover all real numbers, including zero. Therefore the claim holds for every real $x$.

The equality statement can also be read from these two branches: $|x|=x$ exactly when $x\\ge0$. Stating the branches makes it possible to check that zero belongs to the equality case. It also shows why replacing $|x|$ with $x$ without a sign hypothesis would be incorrect.

## Examples, counterexamples and scope

Checking $n(n+1)$ for $n=1,2,3$ suggests the preceding theorem but does not establish it for every integer. A proof explains why an arbitrary integer is covered. In contrast, to disprove a universal statement, one admissible counterexample suffices. The statement “for every real $x$, $x^2\\ge x$” is false: $x=\\tfrac12$ belongs to $\\mathbb R$, but $x^2=\\tfrac14<\\tfrac12$. This single calculation does not prove the inequality for all other values; it only disproves the universal claim.

A counterexample must satisfy the original hypotheses. The value $x=\\tfrac12$ would not refute a statement restricted to integers. Likewise, $x=-1$ does not refute a claim about positive real numbers. When a proposed conditional fails, identify an object for which the hypothesis is true and the conclusion false. A case where both are false is not a counterexample to the conditional.

The **converse** of “if $P$ then $Q$” is “if $Q$ then $P$.” A proof of the original need not prove its converse. For integers, $4\\mid n$ implies that $n$ is even, since $n=4k=2(2k)$. The converse is false: $n=6$ is even but is not a multiple of four. An “if and only if” theorem contains two implications, so its proof needs both directions.

## Writing a proof a reader can check

Before writing, identify the domain and rewrite the claim in an if–then form where possible. Expand the definitions on both sides. Mark which symbols are arbitrary and which are witnesses obtained from a hypothesis. Try a few examples, including boundary values, but use them to guide the argument rather than to replace it. If you split into cases, write the covering statement before proving the separate branches.

Then write complete sentences around the calculation. A line of algebra may be correct but uninformative if it is unclear why it is relevant. Name the hypothesis that supplies a witness, justify operations such as multiplication or cancellation, and explain how the final expression matches the conclusion. Finally, check that you have not used an unproved converse or introduced an unstated assumption such as positivity.

For further reading on direct proof and proof by cases, see Richard Hammack, [*Book of Proof*, third edition](https://richardhammack.github.io/BookOfProof/), chapters 4 and 7. The arguments and exercises in this chapter are written independently; the reference is a complementary account of these methods.

## A proof workshop: making each step necessary

Consider the assertion that the sum of three consecutive integers is divisible by three. The phrase “consecutive integers” describes a relationship among three objects; it is not a licence to choose just one convenient triple. Let the first integer be $n$. Then the next two are $n+1$ and $n+2$, including when $n$ is negative. Their sum is $n+(n+1)+(n+2)=3n+3=3(n+1)$. Since $n+1$ is an integer, the definition of divisibility proves the claim. The proof is short because the parameter $n$ records every permitted triple at once.

Now compare a tempting but incomplete explanation: “The sum is $3n+3$, which is clearly divisible by three.” This is correct, but an early proof becomes easier to audit if it identifies the witness $n+1$. In a longer argument, such a witness may be an expression assembled from several earlier choices. Naming it makes clear that it is an integer and that no hidden division has occurred. It also helps detect a missing hypothesis: if the expression were $n/2$, its integrality would require a reason.

A useful revision exercise is to read a proof backwards without changing its direction. Ask what final fact makes the conclusion true, then locate the preceding line that supplies it. Continue until you reach the stated assumptions. If a step cannot be connected to an earlier fact, either justify it or state the missing hypothesis. For an inequality, mark every place where an operation depends on sign. For divisibility, make sure each witness is an integer. For a case argument, list the cases and check their union against the original domain.

The distinction between a sufficient condition and a necessary condition also helps organise these arguments. In “if $P$ then $Q$,” the hypothesis $P$ is sufficient for $Q$, while $Q$ is necessary for $P$. Neither phrase by itself asserts the converse. For example, divisibility by four is sufficient for an integer to be even, while being even is necessary for divisibility by four; being even alone is not sufficient, as six shows. A proof is clearer when it writes the implication rather than relying on an ambiguous phrase such as “depends on.”

Finally, cases need not be chosen by parity or sign. If a problem concerns membership in a set $A$, the alternatives “in $A$” and “not in $A$” are exhaustive within the stated universe. If it concerns a real parameter compared with a threshold $c$, the alternatives $x<c$, $x=c$ and $x>c$ are exhaustive. Whether splitting is useful depends on the conclusion: a proof that repeats the same calculation in every branch may be replaced by one direct argument. Conversely, when a formula or an operation changes at a boundary, a separate branch can prevent a real gap.

### Checking the converse in context

Suppose a claim says that a whole number divisible by six is divisible by three. Its direct proof starts with a witness for divisibility by six, rewrites the number as three times an integer, and ends. A reader may reasonably ask whether every multiple of three is also a multiple of six. That is the converse, not a missing line in the first proof. Trying the integer three settles this new question: three is a multiple of three but not of six. The direct theorem and its false converse can coexist without any logical conflict.

This distinction is particularly useful when a worked calculation seems reversible. From an equality you may sometimes reverse each algebraic step, but a proof containing an inequality, a change of domain or a one-way implication may not reverse. Even a reversible calculation proves a converse only after its starting and finishing assumptions have been checked. Dividing by a variable, for instance, might exclude zero from one direction. To establish an equivalence, write each implication and say where its own hypotheses are used.

One final habit helps when working with another person's argument. First restate the claim in your own words and determine what an admissible object looks like. Then attempt to follow each step without filling gaps from memory. A correction can be very small: a missing boundary case, a missing integer witness, or a sign condition. The aim is not to make proofs needlessly long, but to make the reason for the conclusion visible to someone who did not discover it.

## Exercises

Each exercise includes two hints and a full solution. Attempt the statement before opening the hints, and write down the domain and the conclusion you need.

### Exercise 1 {#direct-proof-cases-exercise-01}

Prove that the sum of two even integers is even.

<details>
<summary>Hint 1</summary>

Use separate witnesses for the two even integers.

</details>
<details>
<summary>Hint 2</summary>

Factor two from their sum.

</details>
<details>
<summary>Solution</summary>

Let $a=2r$ and $b=2s$ with $r,s\\in\\mathbb Z$. Then $a+b=2(r+s)$, and $r+s$ is an integer. Hence $a+b$ is even.

</details>

### Exercise 2 {#direct-proof-cases-exercise-02}

Prove that the product of an even integer and any integer is even.

<details>
<summary>Hint 1</summary>

Write the even factor as twice an integer.

</details>
<details>
<summary>Hint 2</summary>

The other factor can be zero or negative.

</details>
<details>
<summary>Solution</summary>

Let $a=2k$ and let $b\\in\\mathbb Z$. Then $ab=2(kb)$, where $kb$ is an integer. Thus $ab$ is even for every integer $b$.

</details>

### Exercise 3 {#direct-proof-cases-exercise-03}

Prove that the square of an odd integer is odd.

<details>
<summary>Hint 1</summary>

Let the integer be $2k+1$.

</details>
<details>
<summary>Hint 2</summary>

After expanding, collect everything except one into a factor of two.

</details>
<details>
<summary>Solution</summary>

If $n=2k+1$ with $k\\in\\mathbb Z$, then $n^2=4k^2+4k+1=2(2k^2+2k)+1$. The quantity in parentheses is an integer, so $n^2$ is odd.

</details>

### Exercise 4 {#direct-proof-cases-exercise-04}

Prove that if $a\\mid b$ then $a\\mid bc$ for every integer $c$.

<details>
<summary>Hint 1</summary>

Introduce the witness supplied by $a\\mid b$.

</details>
<details>
<summary>Hint 2</summary>

Do not divide by $a$.

</details>
<details>
<summary>Solution</summary>

Write $b=ak$ for an integer $k$. Then $bc=a(kc)$, and $kc$ is an integer. Consequently $a\\mid bc$, including the case $a=0$ under our convention.

</details>

### Exercise 5 {#direct-proof-cases-exercise-05}

If $a,b,c\\in\\mathbb Z$, $a\\mid b$ and $a\\mid(b+c)$, prove $a\\mid c$.

<details>
<summary>Hint 1</summary>

Subtract $b$ from $b+c$.

</details>
<details>
<summary>Hint 2</summary>

Write both multiples using witnesses and subtract their coefficients.

</details>
<details>
<summary>Solution</summary>

There are integers $r,s$ with $b=ar$ and $b+c=as$. Subtracting gives $c=a(s-r)$, and $s-r\\in\\mathbb Z$. Hence $a\\mid c$.

</details>

### Exercise 6 {#direct-proof-cases-exercise-06}

Prove that for all $x\\in\\mathbb R$, $x^2-4x+5\\ge1$. When is there equality?

<details>
<summary>Hint 1</summary>

Complete the square.

</details>
<details>
<summary>Hint 2</summary>

A real square is zero at exactly one value of its base.

</details>
<details>
<summary>Solution</summary>

We have $x^2-4x+5=(x-2)^2+1\\ge1$. Equality holds exactly when $x-2=0$, that is, when $x=2$.

</details>

### Exercise 7 {#direct-proof-cases-exercise-07}

Prove by cases that $n^2+n+2$ is even for every integer $n$.

<details>
<summary>Hint 1</summary>

Split according to the parity of $n$.

</details>
<details>
<summary>Hint 2</summary>

In each case, one of $n$ and $n+1$ is even.

</details>
<details>
<summary>Solution</summary>

If $n$ is even, $n(n+1)$ is even. If $n$ is odd, $n+1$ is even, so $n(n+1)$ is even. In either case $n^2+n+2=n(n+1)+2$ is a sum of two even integers and is even. The parity cases cover all integers.

</details>

### Exercise 8 {#direct-proof-cases-exercise-08}

Prove that $|x|\\ge -x$ for every real $x$, and identify equality.

<details>
<summary>Hint 1</summary>

Consider $x\\ge0$ and $x<0$.

</details>
<details>
<summary>Hint 2</summary>

Remember that zero is in the first case.

</details>
<details>
<summary>Solution</summary>

If $x\\ge0$, then $|x|=x\\ge -x$, with equality only at $x=0$. If $x<0$, then $|x|=-x$, so equality holds throughout that case. Thus equality holds exactly when $x\\le0$.

</details>

### Exercise 9 {#direct-proof-cases-exercise-09}

Give a counterexample in $\\mathbb R$ to “if $x^2>1$ then $x>1$.” Explain why it is admissible.

<details>
<summary>Hint 1</summary>

Try a negative real number.

</details>
<details>
<summary>Hint 2</summary>

Choose one whose magnitude is larger than one.

</details>
<details>
<summary>Solution</summary>

Take $x=-2$. It is real and satisfies $x^2=4>1$, but $-2>1$ is false. Thus the hypothesis holds while the conclusion fails.

</details>

### Exercise 10 {#direct-proof-cases-exercise-10}

Decide whether the converse of “if $6\\mid n$ then $3\\mid n$” holds for every integer $n$.

<details>
<summary>Hint 1</summary>

Write the converse explicitly.

</details>
<details>
<summary>Hint 2</summary>

Try a multiple of three that is odd.

</details>
<details>
<summary>Solution</summary>

The converse says that $3\\mid n$ implies $6\\mid n$. It is false: $n=3$ is an integer divisible by three, but $3=6k$ has no integer solution $k$. This does not affect the original implication, which follows from $n=6k=3(2k)$.

</details>

## Summary

A direct proof begins with the hypotheses and constructs the conclusion using definitions and established facts. Parity and divisibility definitions supply integer witnesses; the final expression should show the witness required by the conclusion. An inequality proof must justify each order-preserving operation. A case proof states an exhaustive division of the permitted domain and completes every branch, including boundary cases such as zero. Examples can guide discovery; a single valid counterexample disproves a universal assertion. A converse is a separate statement and must be proved or refuted separately.
`;export{e as default};