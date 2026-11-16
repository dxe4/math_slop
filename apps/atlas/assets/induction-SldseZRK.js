var e=`---
parent_id: book-introduction-to-proof
chapter_id: induction
title: "Induction"
level: undergraduate
license: CC BY-SA 4.0
---

# Induction

A pattern can hold for the first million integers and still fail at the next one. Checking examples is useful for discovering a statement and finding mistakes, but a finite collection of checks does not by itself establish an assertion for every natural number. Induction replaces an infinite list of separate verifications with a base case and a proof that one case forces the next.

We use $\\mathbb N_0=\\{0,1,2,\\ldots\\}$. The chapter assumes basic algebra, divisibility of integers and the logic of implications. A sum with no terms is $0$, and a product with no factors is $1$. Those conventions allow formulas to include $n=0$ without inventing an exceptional calculation.

## The principle and its obligations

**Principle 6.1 (ordinary induction).** Let $n_0\\in\\mathbb N_0$ and let $P(n)$ be a statement for every integer $n\\ge n_0$. If $P(n_0)$ is true and, for every $k\\ge n_0$, the implication $P(k)\\Rightarrow P(k+1)$ is true, then $P(n)$ is true for every integer $n\\ge n_0$.

We take the well-ordering property of $\\mathbb N_0$ as a standard assumption: every nonempty subset has a least element. The induction principle follows from this property. This is a justification from an accepted property of the natural numbers, not a proof of induction without any foundational assumption.

**Proof from well-ordering.** Suppose the base and step hold but some $n\\ge n_0$ fails $P(n)$. The nonempty set of counterexamples has a least element $m$. The base says $m\\ne n_0$, so $m-1\\ge n_0$. By minimality, $P(m-1)$ holds. The step applied at $k=m-1$ gives $P(m)$, contradicting the choice of $m$. Thus no counterexample exists. ∎

A successful induction has a clear target, an initial index, a base, and a step. In the step, choose one arbitrary $k$ in the permitted range and assume the **inductive hypothesis** $P(k)$. The work is to derive $P(k+1)$ using that assumption and established facts. One may not assume $P(k+1)$, nor silently use a different value of $k$. The step proves a conditional; the base supplies the first true case.

The starting index can be $0$, $1$, or another natural number. The hypothesis $k\\ge n_0$ is available in the step, and it can matter when multiplying inequalities or comparing expressions. A formula beginning at $n_0=3$ does not automatically say anything about $0,1,2$. Conversely, checking those extra values cannot repair a step that fails for some allowed $k$.

### Worked example 6.1: the sum of odd numbers

**Theorem 6.1.** For every $n\\in\\mathbb N_0$,

$$\\sum_{j=1}^{n}(2j-1)=n^2.$$

**Proof.** Let $P(n)$ be the displayed equality. At $n=0$, the left side is the empty sum $0$, equal to $0^2$. Now fix $k\\ge0$ and assume $\\sum_{j=1}^{k}(2j-1)=k^2$. Adding the next term gives

$$\\sum_{j=1}^{k+1}(2j-1)=k^2+(2(k+1)-1)=k^2+2k+1=(k+1)^2.$$

This is $P(k+1)$. The principle proves the identity for all $n\\ge0$. ∎

The algebra after the hypothesis is not merely decoration: it shows why adding the particular next odd number creates the next square. The proof also works at $k=0$, where the old sum has no terms. A geometric arrangement of square tiles can suggest the same formula, but a labelled base and step make its range explicit.

### Worked example 6.2: a divisibility statement

**Theorem 6.2.** For each $n\\in\\mathbb N_0$, the integer $4^n-1$ is divisible by $3$.

**Proof.** At $n=0$, $4^0-1=0=3\\cdot0$. Suppose for some $k\\ge0$ that $4^k-1=3q$ for an integer $q$. Then

$$4^{k+1}-1=4(4^k-1)+3=3(4q+1).$$

The factor $4q+1$ is an integer, so the next difference is divisible by $3$. Induction establishes the claim. ∎

The proof uses divisibility in both directions: the hypothesis supplies an integer factor, and the conclusion exhibits another. It does not divide by $4^k-1$, which would be zero at the base case. An equivalent calculation is $4\\equiv1\\pmod3$ and hence $4^n\\equiv1\\pmod3$, but the induction shows the propagation directly.

### Worked example 6.3: an inequality

**Theorem 6.3.** For every $n\\in\\mathbb N_0$, $2^n\\ge n+1$.

**Proof.** At $n=0$, both sides are $1$. Let $k\\ge0$ and assume $2^k\\ge k+1$. Multiplication by the positive number $2$ preserves the inequality, so

$$2^{k+1}\\ge2(k+1)=k+2+k\\ge k+2=(k+1)+1.$$

The second inequality uses $k\\ge0$. Therefore the claim propagates and holds for all $n\\in\\mathbb N_0$. ∎

The intermediate comparison matters. The hypothesis initially gives a bound involving $2(k+1)$, whereas the goal is a bound by $k+2$. A proof should say why the former is at least the latter rather than simply writing the desired result after the hypothesis.

## Choosing and repairing a statement

When a formula seems plausible, calculate small cases first and state the proposed range. For example, $2^n>n^2$ is false at $n=2,3,4$, but true at $n=5$. To prove it for all $n\\ge5$, one needs a step: if $2^k>k^2$ and $k\\ge5$, then $2^{k+1}>2k^2$, and $2k^2\\ge(k+1)^2$ because $k^2-2k-1\\ge0$ in this range. The calculation has to be justified, not inferred merely from the example $k=5$.

Sometimes $P(k)$ does not contain enough information to prove $P(k+1)$. One can strengthen the claim, provided the stronger claim is true and implies the original. For example, a recurrence involving two previous terms may require carrying both $P(k)$ and $P(k-1)$ in a single statement. A stronger hypothesis can make a step easier, but it also imposes a stronger base obligation. It is not permission to assume a convenient fact without proving it.

### The horse argument and its missing overlap

A famous false argument claims that all horses in any finite group have the same colour. It proves the one-horse base case. For the step it removes one horse, applies the hypothesis to the remaining $k$, then removes a different horse and applies it to another group of $k$. If those groups overlap, a horse in the overlap transfers the common colour from one group to the other.

The flaw is the transition from one horse to two. When the original group has two horses, each reduced group has one horse and the groups do not overlap. The asserted common member does not exist, so the step at $k=1$ is unproved. The base can be correct and the argument can work for larger $k$ while the induction still fails at its first link. This illustrates a general practice: verify that every object invoked in the step exists at the smallest permitted index.

## Strong induction and smaller cases

**Principle 6.2 (strong induction).** Suppose $P(n_0)$ holds and, for every $k\\ge n_0$, the truth of all $P(j)$ for $n_0\\le j\\le k$ implies $P(k+1)$. Then $P(n)$ holds for every $n\\ge n_0$.

Strong induction is not a stronger axiom than ordinary induction. Given its hypotheses, define $Q(k)$ to mean that all $P(j)$ with $n_0\\le j\\le k$ hold. The base gives $Q(n_0)$. If $Q(k)$ holds, the strong step gives $P(k+1)$; together these yield $Q(k+1)$. Ordinary induction proves every $Q(k)$ and hence every $P(k)$.

The practical difference is the shape of the assumption. Ordinary induction gives the immediately preceding case. Strong induction gives every earlier case in the specified range. It is useful when a composite object can split into pieces whose sizes are smaller but not necessarily one less. Those pieces must actually lie in the range covered by the hypothesis.

### Worked example 6.4: existence of prime factors

**Theorem 6.4.** Every integer $n\\ge2$ is a product of one or more primes.

**Proof.** The integer $2$ is prime, so it is a one-factor product. Let $k\\ge2$ and suppose every integer from $2$ through $k$ is a product of primes. If $k+1$ is prime, it is itself such a product. Otherwise it is composite, so $k+1=ab$ for integers $a,b$ satisfying $2\\le a,b<k+1$. Both lie between $2$ and $k$; by the strong hypothesis each is a product of primes. Concatenating those products expresses $k+1$ as a product of primes. Strong induction proves existence for all $n\\ge2$. ∎

This argument does not prove uniqueness of prime factorization. Existence says that at least one prime product is available. Uniqueness would compare any two such products and requires further work. The prime case must be stated: it is not legitimate to factor a prime into two smaller integers greater than one.

### Worked example 6.5: making amounts with two denominations

**Theorem 6.5.** Every integer $n\\ge8$ can be written as $3a+5b$ with $a,b\\in\\mathbb N_0$.

**Proof.** The three starting cases are $8=3+5$, $9=3+3+3$ and $10=5+5$. Let $k\\ge10$ and suppose the claim holds for every integer from $8$ through $k$. Since $k+1-3=k-2$ lies between $8$ and $k$, write $k-2=3a+5b$. Then $k+1=3(a+1)+5b$, with nonnegative integer coefficients. The three initial cases and the step prove the assertion for every $n\\ge8$. ∎

Why three bases? The step obtains a new case from one three places earlier. Starting only with $8$ would reach $11,14,17,\\ldots$, not the other two residue classes. Equivalently, one can formulate a step $P(n)\\Rightarrow P(n+3)$ and prove a separate base for each of the three chains.

## Recursive objects and well-founded progress

Recursion defines an object from earlier objects; induction proves a property of the resulting objects. For example, let $F_0=0$, $F_1=1$ and $F_n=F_{n-1}+F_{n-2}$ for $n\\ge2$. The two starting values are part of the definition. A proof that every $F_n$ is nonnegative needs both bases, followed by the fact that a sum of two nonnegative integers is nonnegative. Writing the recurrence alone does not establish a closed formula or prove that an arbitrary program using it terminates.

A similar method applies to a recursively defined full binary tree: either it is a single leaf, or it consists of a root with two full binary subtrees. Let $i$ be the number of internal vertices. The leaf case has $i=0$ and one leaf. If the left and right subtrees have $i_L+1$ and $i_R+1$ leaves, joining them under a new root yields $i=1+i_L+i_R$ internal vertices and $i_L+i_R+2=i+1$ leaves. This is structural induction: the base and step follow the constructors in the definition. It covers finite trees built by those constructors; it makes no claim about arbitrary infinite graphs.

A recursive procedure also needs an argument that recursive calls eventually stop. If a positive integer $n$ is replaced by $\\lfloor n/2\\rfloor$, the new value is a smaller nonnegative integer. An infinite chain of such decreases would give a nonempty set of visited values with a least member followed by a still smaller one, contradicting well-ordering. A decreasing measure proves termination; a separate invariant or postcondition is still needed to prove that the final answer is correct.

## How the hypothesis controls the next case

A useful way to plan a step is to write the desired next statement before starting the proof. For the sum formula $1+\\cdots+n=n(n+1)/2$, the target at $k+1$ contains the old sum plus exactly one new summand. The hypothesis can replace the old sum because it is an equality. By contrast, an inequality hypothesis can replace an expression only in a direction justified by the inequality. Multiplying by a negative quantity reverses that direction, and multiplying by an expression of unknown sign is not justified until its sign has been established.

As an illustration, suppose we want to prove $1+x+\\cdots+x^n\\ge n+1$ when $x\\ge1$. The base $n=0$ says $1\\ge1$. Fix such an $x$, assume the bound at $k$, and add the nonnegative next term $x^{k+1}$. Since $x\\ge1$, its nonnegative integer power is at least $1$; this follows by a separate induction on the exponent, starting at $x^0=1$ and multiplying by $x\\ge1$. The next sum is therefore at least $(k+1)+1=k+2$. The argument works for every fixed real $x\\ge1$. Without that hypothesis, for example at $x=0$, the claimed bound already fails at $n=1$.

A proof may introduce an auxiliary claim, as in the preceding power comparison, but should not hide a circular argument. The auxiliary claim must be established independently of the statement it is used to prove. It is also helpful to distinguish two quantifier orders: “for every $x\\ge1$, for every $n$” can be proved by fixing an arbitrary permitted $x$ and inducting on $n$. The inductive hypothesis then refers to that same fixed $x$. It does not permit changing $x$ midway through the step.

Minimal-counterexample arguments are another presentation of the same well-ordering idea. Suppose a statement about all integers from $n_0$ onward is false. Choose its least counterexample $m$. All permitted cases smaller than $m$ are then true, not because we checked infinitely many of them, but because a smaller false case would contradict the choice of $m$. If a construction reduces $m$ to smaller valid cases and the conclusion can be rebuilt, the counterexample cannot exist. The reduction must remain in the stated domain: applying the minimality claim to a value below $n_0$ would be unjustified.

For example, consider again the prime-factor existence theorem. If a least counterexample $m\\ge2$ existed, it could not itself be prime. It would therefore have factors $a,b$ with $2\\le a,b<m$. Neither factor could be a counterexample, so both would be products of primes; multiplying those products would express $m$ as a product of primes after all. This is the strong-induction proof reorganized around a least failure. It uses well-ordering and proves existence, with no additional assertion of uniqueness.

Finally, a termination argument has a different conclusion from an induction formula. A strictly decreasing nonnegative integer measure rules out an infinite sequence of moves, but the terminal state could still be wrong. For the subtraction version of Euclid's algorithm, the sum of the two positive entries decreases whenever the larger is replaced by their difference. Separately, the common divisors are unchanged because a number divides $a$ and $b$ exactly when it divides $b$ and $a-b$. When the two entries agree, their common value is the original greatest common divisor. The decreasing measure establishes that the algorithm stops; the invariant establishes what its answer means.

### A product inequality with an explicit range

As another example, prove Bernoulli's inequality $(1+x)^n\\ge1+nx$ for every $n\\in\\mathbb N_0$ and every real $x\\ge-1$. Fix $x$ in this range. At $n=0$ the two sides equal $1$. If $(1+x)^k\\ge1+kx$, then $1+x\\ge0$, so multiplying by it preserves the inequality. The result is at least $(1+kx)(1+x)=1+(k+1)x+kx^2$. Since $k\\ge0$ and $x^2\\ge0$, the final term $kx^2$ is nonnegative. We obtain $(1+x)^{k+1}\\ge1+(k+1)x$ and the induction is complete.

The condition $x\\ge-1$ is needed by this particular step: it makes the multiplier nonnegative. It is not enough to observe that $kx^2$ is nonnegative after multiplication if the multiplication itself could reverse the inequality. At the boundary $x=-1$, the multiplier is zero; the argument still applies. At $n=0$ the convention for the zeroth power gives the base, and all subsequent powers use ordinary multiplication.

This example also shows why a clear statement comes before a proof. The same inequality written for arbitrary negative $x$ and every $n$ is false: with $x=-3$ and $n=2$, its left side is $4$ and its right side is $-5$, but at $n=3$ the left side is $-8$ and the right side is $-8$, so those examples alone do not expose failure; with $x=-4$ and $n=3$, the left side is $-27$ while the right side is $-11$. The claimed inequality fails there. Stating and using the domain prevents the method from being applied to a false generalization.

## Exercises

Use the stated range in every base and step. In a divisibility proof exhibit the integer multiple; in an inequality proof identify the sign that permits each multiplication.

<a id="induction-ex-1"></a>
### Exercise 6.1

Prove $\\sum_{j=1}^{n}j=n(n+1)/2$ for all $n\\in\\mathbb N_0$.

<details><summary>Hint 1</summary>Use the empty sum at $n=0$.</details>
<details><summary>Hint 2</summary>Add $k+1$ to the expression supplied by the hypothesis.</details>
<details><summary>Solution</summary>At $n=0$ both sides are $0$. Assume the formula at $k\\ge0$. Then the next sum is $k(k+1)/2+(k+1)=(k+1)(k+2)/2$, the required expression at $k+1$. Induction proves the formula.</details>

<a id="induction-ex-2"></a>
### Exercise 6.2

Prove $3\\mid(7^n-1)$ for every $n\\in\\mathbb N_0$.

<details><summary>Hint 1</summary>The base difference is zero.</details>
<details><summary>Hint 2</summary>Rewrite $7^{k+1}-1$ using $7^k-1$.</details>
<details><summary>Solution</summary>At $0$ the difference is $0$. If $7^k-1=3q$, then $7^{k+1}-1=7(7^k-1)+6=3(7q+2)$. The next difference is divisible by $3$, completing induction.</details>

<a id="induction-ex-3"></a>
### Exercise 6.3

Prove $n\\le2^n$ for every $n\\in\\mathbb N_0$.

<details><summary>Hint 1</summary>Check zero separately.</details>
<details><summary>Hint 2</summary>For the step, use $2^{k+1}=2^k+2^k$ and $2^k\\ge1$.</details>
<details><summary>Solution</summary>At zero, $0\\le1$. For $k\\ge0$, assume $k\\le2^k$. Since $2^k\\ge1$, we get $k+1\\le2^k+1\\le2^k+2^k=2^{k+1}$. This proves the step and hence the claim.</details>

<a id="induction-ex-4"></a>
### Exercise 6.4

Prove $1+3+\\cdots+(2n-1)=n^2$ for $n\\ge1$, explicitly identifying the next term.

<details><summary>Hint 1</summary>At $n=1$ there is one term.</details>
<details><summary>Hint 2</summary>The term indexed by $k+1$ is $2(k+1)-1$.</details>
<details><summary>Solution</summary>The base sum is $1=1^2$. If the sum through $k$ equals $k^2$, then the sum through $k+1$ is $k^2+2(k+1)-1=(k+1)^2$. Induction applies for $k\\ge1$.</details>

<a id="induction-ex-5"></a>
### Exercise 6.5

A proposed proof of $P(n)$ for $n\\ge0$ establishes $P(0)$ and $P(k)\\Rightarrow P(k+2)$ for every $k\\ge0$. What is missing? Give a repair.

<details><summary>Hint 1</summary>List the indices reached from zero.</details>
<details><summary>Hint 2</summary>There are two separate chains of indices.</details>
<details><summary>Solution</summary>The argument reaches only even indices $0,2,4,\\ldots$. Adding the base $P(1)$ starts the odd chain $1,3,5,\\ldots$. Both chains then follow by repeatedly applying the stated step; equivalently, ordinary induction can prove $P(2m)$ and $P(2m+1)$ simultaneously.</details>

<a id="induction-ex-6"></a>
### Exercise 6.6

Find the first false step in the claim that every group of horses has one colour, using the two-overlapping-subgroups argument.

<details><summary>Hint 1</summary>Examine a group of two horses.</details>
<details><summary>Hint 2</summary>Do the two one-horse subgroups share a horse?</details>
<details><summary>Solution</summary>The step from one to two horses fails. Removing different horses produces two singleton groups with empty intersection. Their individually uniform colours need not agree, so no common horse transfers colour between them. The one-horse base does not establish the two-horse case.</details>

<a id="induction-ex-7"></a>
### Exercise 6.7

Use strong induction to show every integer $n\\ge2$ is a sum of twos and threes with nonnegative integer coefficients.

<details><summary>Hint 1</summary>Use bases $2$ and $3$.</details>
<details><summary>Hint 2</summary>For $n\\ge4$, subtract $2$.</details>
<details><summary>Solution</summary>The bases are $2=2$ and $3=3$. Suppose the statement holds for every integer from $2$ through $k$, where $k\\ge3$. Then $k+1-2=k-1$ lies in that range. Write $k-1=2a+3b$ and add one further $2$: $k+1=2(a+1)+3b$. Strong induction covers all $n\\ge2$.</details>

<a id="induction-ex-8"></a>
### Exercise 6.8

Prove $1+2+4+\\cdots+2^n=2^{n+1}-1$ for $n\\ge0$.

<details><summary>Hint 1</summary>At $n=0$ the sum has one term.</details>
<details><summary>Hint 2</summary>The new term in the step is $2^{k+1}$.</details>
<details><summary>Solution</summary>At zero, the sum is $1=2^1-1$. If the sum through $k$ is $2^{k+1}-1$, the next sum is $2^{k+1}-1+2^{k+1}=2^{k+2}-1$, as required. Induction proves the identity.</details>

<a id="induction-ex-9"></a>
### Exercise 6.9

A sequence satisfies $a_0=1$, $a_1=2$, and $a_n=a_{n-1}+a_{n-2}$ for $n\\ge2$. Prove $a_n\\ge1$ for all $n\\in\\mathbb N_0$.

<details><summary>Hint 1</summary>Two initial values appear in the recurrence.</details>
<details><summary>Hint 2</summary>For $k+1\\ge2$, both indices $k$ and $k-1$ are earlier.</details>
<details><summary>Solution</summary>The bases $a_0=1$ and $a_1=2$ satisfy the claim. Suppose $k\\ge1$ and all earlier values through $a_k$ are at least $1$. Then $a_{k+1}=a_k+a_{k-1}\\ge2\\ge1$. Strong induction, with the two bases, proves the result.</details>

<a id="induction-ex-10"></a>
### Exercise 6.10

Prove that $n^3-n$ is divisible by $3$ for every $n\\in\\mathbb N_0$.

<details><summary>Hint 1</summary>Compare the expression at $k+1$ with that at $k$.</details>
<details><summary>Hint 2</summary>The difference is $3k(k+1)$.</details>
<details><summary>Solution</summary>At $n=0$ the expression is zero. If $k^3-k=3q$, then $(k+1)^3-(k+1)=(k^3-k)+3k^2+3k=3(q+k^2+k)$. The last factor is an integer, so divisibility passes to $k+1$. Induction completes the proof.</details>

## Summary

Induction is an implication chain anchored by an initial truth. The base must match the range and every step must be justified at its boundary. Strong induction permits all earlier cases and is especially useful for decomposition; it follows from ordinary induction by packaging the earlier cases together. Structural induction follows a recursive definition, while a decreasing natural-number measure can establish termination. In each setting, the proof must name the objects, hypotheses and conclusion; checking examples alone does not prove a universal claim.

## Sources and further reading

Richard Hammack, [*Book of Proof*, third edition](https://richardhammack.github.io/BookOfProof/), Chapter 10, develops induction, strong induction and smallest-counterexample arguments. The present exposition is independently written; that book retains its own licence. Euler's [discrete mathematics chapter](../discrete-mathematics-proof-counting-structure/proof-induction-invariants.md) develops induction alongside recursive structures, invariants and extremal arguments.
`;export{e as default};