
# Quantifiers

## A different choice for every challenge

Consider two promises about the integers. The first says: for every integer $n$, there is an integer greater than $n$. The second says: there is an integer greater than every integer. The words are almost the same, but the first promise is true and the second is false. In the first, after receiving $n$ we may choose $n+1$. In the second, one fixed integer must defeat every challenge. Whatever integer $M$ is proposed, $M+1$ is a larger integer and defeats that proposal.

The difference is the order of choices. Quantifiers make that order visible. They also tell us precisely what would count as a counterexample, whether a proposed witness is allowed, and which variable a choice may depend on. This chapter develops domains, scope, free and bound variables, negation, order and uniqueness. Its central practice is to move between a formula, a precise sentence and an argument without changing any of them along the way.

## Preparation and conventions

You should know the classical connectives, especially implication and negation, from [Statements and Truth Tables](statements-truth-tables.md). A set is a collection with specified membership; $x\in D$ means that $x$ is an element of $D$. We write $\mathbb Z$ for integers, $\mathbb R$ for real numbers, and $\varnothing$ for the empty set. An integer $a$ is even if $a=2k$ for some integer $k$; it is odd if $a=2k+1$ for some integer $k$.

We permit empty domains explicitly in this chapter. Some first-order logic conventions instead require a nonempty overall universe. Here a phrase “for every $x$ in $D$” is allowed even when $D=\varnothing$, and its truth is defined below. The convention matters for the edge cases; once chosen, we use it consistently.

## Predicates, domains and scope

**Definition 2.1 (Predicate).** A predicate $P(x)$ is an open sentence whose truth can be evaluated after a suitable value of $x$ is supplied. For example, with domain $D=\mathbb Z$, the predicate $P(n)$ can mean “$n^2\ge n$.” At $n=2$ it is true; at $n=-1$ it is also true. The predicate itself, with $n$ unassigned, is not yet a closed proposition. The domain is part of the statement: without it, “for every $x$, $x^2\ge x$” leaves the intended objects unclear.

**Definition 2.2 (Quantifiers).** The universal statement $\forall x\in D\,P(x)$ is true exactly when $P(x)$ is true for every element of $D$. The existential statement $\exists x\in D\,P(x)$ is true exactly when at least one element of $D$ makes $P$ true. An element that establishes the existential claim is a **witness**; it must belong to the specified domain and satisfy the whole condition.

For a finite domain $D=\{a,b,c\}$, a universal is the conjunction $P(a)\land P(b)\land P(c)$, while an existential is the disjunction $P(a)\lor P(b)\lor P(c)$. For an infinite domain, this finite list cannot generally be completed. We instead use an argument that works for an arbitrary element, or produce an explicit witness for an existential claim. Testing many cases can expose a false universal statement but does not prove an infinite one.

The **scope** of a quantifier is the part of the formula to which it applies. Parentheses are a practical way to make scope visible. In $\forall x\in\mathbb R\,(x^2\ge0\Rightarrow x+1>0)$, the entire implication is in scope; the statement is false at $x=-2$. In $(\forall x\in\mathbb R\,x^2\ge0)\Rightarrow Q$, the quantifier applies only to the first assertion, and $Q$ is a separate proposition. Omitting parentheses when the reading is unclear is an avoidable source of errors.

A variable occurrence is **bound** when it lies in the scope of a quantifier that binds it; otherwise it is **free**. In $\forall x\in\mathbb R\,(x<y)$, the occurrence of $x$ is bound but $y$ is free. Assigning $y=3$ still leaves a false statement, because $x=4$ is a counterexample. Assigning a different real value to $y$ also leaves a false statement, but that fact itself needs an argument: take $x=y+1$. A formula with a free variable is not made into a closed statement merely by placing a quantifier somewhere else in it.

Bound variable names can be changed consistently without changing meaning, provided the new name does not accidentally bind a previously free variable. Thus $\forall x\in\mathbb R\,(x<y)$ is equivalent to $\forall t\in\mathbb R\,(t<y)$. Replacing the bound $x$ by $y$ in the first expression, however, produces $\forall y\in\mathbb R\,(y<y)$, which has lost the free $y$ and has different meaning. This mistake is called variable capture. Keep names distinct when rewriting a formula.

**Worked example 1.** Decide $\forall n\in\mathbb Z\,(n^2\ge n)$ and $\forall x\in\mathbb R\,(x^2\ge x)$. For an integer $n$, either $n\ge1$ or $n\le0$. In the first case both $n$ and $n-1$ are nonnegative, so $n(n-1)\ge0$. In the second both are nonpositive, so again their product is nonnegative. Hence $n^2-n\ge0$ for every integer $n$. Over the reals, choose $x=1/2$: then $x^2=1/4<1/2=x$. The same predicate is universally true on $\mathbb Z$ and false on $\mathbb R$; the domains cannot be dropped.

## Restricted quantifiers and empty sets

A restricted quantifier can be expressed relative to a larger specified universe $U$. If $D\subseteq U$, then

$$
\forall x\in D\,P(x)\quad\text{means}\quad
\forall x\in U\,(x\in D\Rightarrow P(x)),
$$

while

$$
\exists x\in D\,P(x)\quad\text{means}\quad
\exists x\in U\,(x\in D\land P(x)).
$$

The implication and conjunction are different for a reason. A universal makes a promise only about members of $D$; an existential must provide a member of $D$ that has the property. Writing $\forall x\in U\,(x\in D\land P(x))$ instead would additionally require every member of $U$ to lie in $D$. Writing $\exists x\in U\,(x\in D\Rightarrow P(x))$ may choose an element outside $D$, where the implication is vacuously true, and so need not provide any desired witness.

**Theorem 2.3 (Empty-domain convention).** For every predicate $P$ with a specified empty domain, $\forall x\in\varnothing\,P(x)$ is true and $\exists x\in\varnothing\,P(x)$ is false.

**Proof.** The universal is false only if an element of its domain fails $P$. The empty set contains no element, and therefore no counterexample. Hence the universal is true. The existential requires an element of the empty set satisfying $P$, but no element of that set exists; therefore the existential is false. Neither conclusion asserts that an object satisfying $P$ exists elsewhere. $\square$

**Worked example 2.** Let $D=\{n\in\mathbb Z: n^2=-1\}$. For each integer $n$, $n^2\ge0$, so $D=\varnothing$. The statement “every $n\in D$ is even” is true, while “some $n\in D$ is even” is false. It would be incorrect to infer from the first statement that there is an even integer in $D$. This example also explains why a theorem of the form $\forall x\in D\,P(x)$ may need a separate assumption that $D$ is nonempty when the later argument chooses an element of $D$.

## Negation: change the quantifier and the claim

**Theorem 2.4 (Quantifier negation).** For any domain $D$ and predicate $P$,

$$
\neg\bigl(\forall x\in D\,P(x)\bigr)
\iff \exists x\in D\,\neg P(x),
\qquad
\neg\bigl(\exists x\in D\,P(x)\bigr)
\iff \forall x\in D\,\neg P(x).
$$

**Proof.** The universal statement fails exactly when some permitted element fails $P$; that element is precisely a witness for the existential on the right. Similarly, an existential fails exactly when there is no permitted witness, which means every permitted element fails $P$. These descriptions also cover $D=\varnothing$: the first pair is false on both sides and the second pair is true on both sides. Thus each pair has the same truth value for every domain. $\square$

Negate the entire predicate, including strictness and logical connectives. Over the reals, the negation of $x>0$ is $x\le0$, not $x<0$: zero must be included. The negation of $P(x)\Rightarrow Q(x)$ is $P(x)\land\neg Q(x)$, because a conditional fails exactly when its hypothesis holds and its conclusion does not. Consequently, to disprove “every even integer is divisible by four,” exhibit an integer that is even **and** not divisible by four. The integer $6$ does both.

**Worked example 3.** Negate “every real number in $[0,2]$ has square at least itself.” In symbols the claim is $\forall x\in[0,2]\,(x^2\ge x)$. Its negation is $\exists x\in[0,2]\,(x^2<x)$. The witness $x=1/2$ lies in the stated interval and satisfies $1/4<1/2$. Thus the original is false. The different sentence “every $x$ in the interval has $x^2<x$” is not the negation: it fails at $x=0$, even though the original also fails.

When there are several quantifiers, move the negation through them one at a time. For a relation $R(x,y)$ with domains $D,E$,

$$
\neg\left(\forall x\in D\,\exists y\in E\,R(x,y)\right)
\iff \exists x\in D\,\forall y\in E\,\neg R(x,y).
$$

The order of the quantifiers is not reversed; each symbol is replaced in its original position. In words, failure means one $x$ defeats every possible $y$. Writing merely “there is an $x$ and there is a $y$ for which $R$ fails” is too weak: a different $y$ might still work for that $x$.

## Order controls dependence

**Worked example 4.** Over $\mathbb R$, the claim $\forall x\in\mathbb R\,\exists y\in\mathbb R\,(y>x)$ is true. Given an arbitrary real $x$, choose $y=x+1$. This witness is real and satisfies $y>x$. The choice is allowed to depend on $x$ because the existential comes after the universal. The reversed claim $\exists y\in\mathbb R\,\forall x\in\mathbb R\,(y>x)$ is false. Given any proposed $y$, choose $x=y+1$; then $y>x$ is false. The same algebra $+1$ therefore supplies a witness in the first proof and a counterexample to every proposed witness in the second.

The order also appears in bounds. A set $A\subseteq\mathbb R$ is bounded above when $\exists M\in\mathbb R\,\forall x\in A\,(x\le M)$. One $M$ must work for all members. The weaker claim $\forall x\in A\,\exists M\in\mathbb R\,(x\le M)$ is true for every real set: choose $M=x$ separately for each $x$. It says nothing about a common upper bound. For $A=\mathbb R$, the weaker claim is true and the stronger false: for any proposed $M$, the member $M+1$ exceeds it.

**Theorem 2.5 (One valid order change).** For any domains $D,E$ and relation $R$, $\exists y\in E\,\forall x\in D\,R(x,y)$ implies $\forall x\in D\,\exists y\in E\,R(x,y)$. The converse need not hold.

**Proof.** Suppose the first statement holds, with a witness $y_0\in E$. Then $R(x,y_0)$ holds for every $x\in D$. Given any particular $x\in D$, choose that same $y_0$ to establish the existential required by the second statement. This argument remains valid if $D$ is empty: the second universal is then true; the hypothesis already includes a witness in $E$. For the converse, take $D=E=\mathbb R$ and $R(x,y)$ to mean $y>x$. Worked example 4 proves the second statement and disproves the first. $\square$

A witness construction should state what it depends on. If the claim is $\forall x\,\exists y\,\forall z\,R(x,y,z)$, the selected $y$ may depend on $x$ but must work for every later $z$. A rule that chooses $y$ after seeing $z$ instead proves a different, weaker statement. In analysis, the order “for every tolerance $\varepsilon>0$ there exists a tolerance $\delta>0$ such that every suitable $x$ works” gives $\delta$ permission to depend on $\varepsilon$, but not on the later input $x$.

## Existence and uniqueness are separate obligations

**Definition 2.6 (Unique existence).** The statement $\exists!x\in D\,P(x)$ means that there is an element $x\in D$ satisfying $P$ and every element of $D$ satisfying $P$ equals that $x$. Explicitly,

$$
\exists x\in D\,\bigl(P(x)\land\forall y\in D\,(P(y)\Rightarrow y=x)\bigr).
$$

It has two jobs. **Existence** supplies at least one witness. **Uniqueness** proves that any two witnesses are equal. Saying “suppose $u,v$ both satisfy $P$; then $u=v$” proves at most one witness. It does not prove one exists. For example, there is at most one real solution of $x^2=-1$—indeed there are none—but there is no unique real solution. Conversely, finding one witness without excluding a second proves existence but not uniqueness.

**Worked example 5.** Prove $\exists!x\in\mathbb R\,(3x+2=11)$. For existence choose $x=3$; then $3(3)+2=11$. For uniqueness, suppose $u,v\in\mathbb R$ both satisfy the equation. Subtracting their equations gives $3(u-v)=0$. Since $3\ne0$, division gives $u-v=0$, hence $u=v$. Thus the witnessed solution is the only real solution. The same statement over $\mathbb Z$ is also true because the witness $3$ is an integer; for $3x+2=10$ the real solution $8/3$ is not an integer, so existence over $\mathbb Z$ fails.

The negation of unique existence is “either there is no witness, or there are two distinct witnesses.” Formally it is

$$
(\forall x\in D\,\neg P(x))\ \lor\
\bigl(\exists u,v\in D\,(u\ne v\land P(u)\land P(v))\bigr).
$$

These alternatives are not interchangeable: a no-solution example and a two-solution example refute uniqueness for different reasons. When a problem asks for a unique solution, make both parts visible in the proof.

## Reading and writing a quantified proof

A useful discipline is to mark the role of each variable before calculating. In $\forall x\in D\,\exists y\in E\,R(x,y)$, begin with an arbitrary $x$ in $D$. The word “arbitrary” does not mean that $x$ is mysterious or random: it means the proof may use only the stated fact that $x$ belongs to $D$, together with assumptions already available for every element. Next give a rule or construction for $y$, verify that $y$ belongs to $E$, and establish $R(x,y)$. A value that works in an example can guide the rule, but it does not establish that the rule works for all $x$.

To disprove that same statement, reverse the proof obligations using its negation. Find one permitted $x_0$ and show that every permitted $y$ fails to satisfy $R(x_0,y)$. If the witness set $E$ is infinite, trying several values of $y$ cannot justify “every”: give an argument that treats an arbitrary candidate. If $E$ is finite, checking each of its members is a complete argument provided the list is exhaustive. If $E$ is empty and $D$ is nonempty, any element of $D$ demonstrates failure of the original: no witness $y$ can be selected.

For a concrete example, let $D=E=\mathbb Z$ and let $R(x,y)$ mean $x=2y$. The claim $\forall x\in\mathbb Z\,\exists y\in\mathbb Z\,(x=2y)$ is false. Choose $x_0=1$. If an integer $y$ satisfied $1=2y$, it would make an odd integer equal to an even integer, which is impossible; equivalently $y=1/2$ is not an integer. Thus this one integer defeats every allowed witness. By contrast, replacing $D$ with the set of even integers makes the claim true: by definition, each element of that new domain has the required form. The proof has changed the domain explicitly rather than quietly assuming that an arbitrary integer is even.

## Exercises

Write domains and the full negation before trying to determine truth. Every existential witness must be checked against all stated conditions.

<a id="quantifiers-ex1"></a>

### Exercise 1: Free and bound variables

In $\forall x\in\mathbb R\,(x+y>0)$ identify the free and bound variables. Is the formula a closed statement?

<details>
<summary>Hint 1</summary>

Find the quantifier and its scope.

</details>
<details>
<summary>Hint 2</summary>

No quantifier assigns a value to $y$.

</details>
<details>
<summary>Solution</summary>

The occurrence of $x$ is bound by $\forall x$; $y$ is free. The formula is not closed until $y$ is assigned or bound. For each fixed real $y$ the resulting statement is false: $x=-y$ gives $x+y=0$.

</details>

<a id="quantifiers-ex2"></a>

### Exercise 2: Domain changes truth

Determine whether $\exists x\,(x^2=2)$ holds over $\mathbb R$ and over $\mathbb Z$.

<details>
<summary>Hint 1</summary>

A square root supplies a real witness.

</details>
<details>
<summary>Hint 2</summary>

If an integer has absolute value at least two, its square is at least four.

</details>
<details>
<summary>Solution</summary>

Over $\mathbb R$, $x=\sqrt2$ is a witness. Over $\mathbb Z$, if $|x|\ge2$ then $x^2\ge4$; if $|x|\le1$, then $x^2$ is $0$ or $1$. Thus no integer square equals $2$.

</details>

<a id="quantifiers-ex3"></a>

### Exercise 3: Empty domain

For $D=\varnothing$, decide $\forall x\in D\,(x=7)$ and $\exists x\in D\,(x=7)$.

<details>
<summary>Hint 1</summary>

Ask whether a counterexample or witness can be in $D$.

</details>
<details>
<summary>Hint 2</summary>

There are no elements in the domain.

</details>
<details>
<summary>Solution</summary>

The universal is true because there is no member of $D$ that fails the property. The existential is false because there is no member of $D$ to serve as a witness. This does not imply that $7$ belongs to $D$.

</details>

<a id="quantifiers-ex4"></a>

### Exercise 4: Negating an implication

Negate: “Every positive integer divisible by $3$ is divisible by $6$.” Determine its truth.

<details>
<summary>Hint 1</summary>

To negate a universal implication, find a permitted input with true hypothesis and false conclusion.

</details>
<details>
<summary>Hint 2</summary>

Try the smallest positive multiple of three.

</details>
<details>
<summary>Solution</summary>

The negation says there exists a positive integer divisible by $3$ and not divisible by $6$. The witness $3$ satisfies both conditions. Hence the original universal implication is false.

</details>

<a id="quantifiers-ex5"></a>

### Exercise 5: Strict inequalities

Negate $\exists x\in\mathbb R\,(x>0\land x^2<0)$ and prove the resulting statement.

<details>
<summary>Hint 1</summary>

Exchange the existential for a universal and negate the conjunction.

</details>
<details>
<summary>Hint 2</summary>

The negation of $x^2<0$ is $x^2\ge0$.

</details>
<details>
<summary>Solution</summary>

The negation is $\forall x\in\mathbb R\,(x\le0\lor x^2\ge0)$. Every real square is nonnegative, so the second disjunct holds for every real $x$. The negation is true and the original existential is false.

</details>

<a id="quantifiers-ex6"></a>

### Exercise 6: Order and witnesses

Over $\mathbb Z$, decide $\forall n\,\exists m\,(m=n+2)$ and $\exists m\,\forall n\,(m=n+2)$.

<details>
<summary>Hint 1</summary>

For the first, choose $m$ after receiving $n$.

</details>
<details>
<summary>Hint 2</summary>

For the second, compare the required values at $n=0$ and $n=1$.

</details>
<details>
<summary>Solution</summary>

The first is true: given integer $n$, choose the integer $m=n+2$. The second is false: taking $n=0$ would require $m=2$, whereas taking $n=1$ would require $m=3$. One fixed integer cannot equal both.

</details>

<a id="quantifiers-ex7"></a>

### Exercise 7: Negating two quantifiers

Negate $\forall x\in\mathbb R\,\exists y\in\mathbb R\,(x+y=0)$, and determine whether the negation is true.

<details>
<summary>Hint 1</summary>

Change each quantifier in place.

</details>
<details>
<summary>Hint 2</summary>

For an arbitrary $x$, test $y=-x$ against the proposed negation.

</details>
<details>
<summary>Solution</summary>

The negation is $\exists x\in\mathbb R\,\forall y\in\mathbb R\,(x+y\ne0)$. It is false: for any proposed $x$, the allowed choice $y=-x$ makes $x+y=0$. In fact that same rule proves the original statement.

</details>

<a id="quantifiers-ex8"></a>

### Exercise 8: A common bound

Let $A=\{1,2,3,\ldots\}$. Compare $\forall n\in A\,\exists M\in\mathbb R\,(n\le M)$ with $\exists M\in\mathbb R\,\forall n\in A\,(n\le M)$.

<details>
<summary>Hint 1</summary>

For the first choose $M$ depending on $n$.

</details>
<details>
<summary>Hint 2</summary>

For the second use the Archimedean property of the real numbers.

</details>
<details>
<summary>Solution</summary>

The first is true, taking $M=n$. The second is false: by the Archimedean property, for every real $M$ there is a positive integer $n>M$. Thus no single real $M$ bounds all of $A$. The appeal to the Archimedean property is a named property of $\mathbb R$, not a conclusion drawn from finitely many examples.

</details>

<a id="quantifiers-ex9"></a>

### Exercise 9: Unique existence

Does $\exists!x\in\mathbb R\,(x^2=9)$ hold? Address existence and uniqueness separately.

<details>
<summary>Hint 1</summary>

Find both signs of a square root.

</details>
<details>
<summary>Hint 2</summary>

Two distinct witnesses disprove uniqueness.

</details>
<details>
<summary>Solution</summary>

Existence holds: $3^2=9$. Uniqueness fails because $(-3)^2=9$ as well and $-3\ne3$. Therefore the unique-existence statement is false, although there are solutions.

</details>

<a id="quantifiers-ex10"></a>

### Exercise 10: An at-most-one trap

A student says: “If real $u,v$ both satisfy $2x+1=0$, subtraction gives $u=v$, so a solution exists.” Explain the gap and complete a correct proof of unique existence.

<details>
<summary>Hint 1</summary>

The comparison assumes two hypothetical solutions.

</details>
<details>
<summary>Hint 2</summary>

Substitute a candidate before arguing uniqueness.

</details>
<details>
<summary>Solution</summary>

The comparison proves at most one solution; it supplies no solution. For existence, $x=-1/2$ is real and $2(-1/2)+1=0$. If $u,v$ are real solutions, subtraction gives $2(u-v)=0$, so $u=v$ because $2\ne0$. The witness and the at-most-one argument together prove unique existence.

</details>

## Sources

Richard Hammack, [*Book of Proof*, third edition](https://richardhammack.github.io/BookOfProof/), Chapter 2, gives another introduction to quantifiers and negation. The examples and exercises in this chapter are independently written. Euler's Lucent logic refresher and shared foundations logic notes are complementary local preparation; the source files remain unchanged.

## Summary

A quantifier binds a variable over a specified domain and has a defined scope. To prove a universal, take an arbitrary permitted input; to prove an existential, give a permitted witness. The empty domain makes a universal true and an existential false. Negation exchanges each quantifier in place and negates the predicate, including strict inequalities and implications. A later choice may depend on earlier choices, so quantifier order cannot generally be swapped. Unique existence requires both a witness and a proof that every witness equals it. These distinctions let the next chapters turn carefully stated claims into rigorous proof strategies.
