var e=`---
parent_id: book-number-theory-proof-reference
chapter_id: integer-logic-induction-extremal
title: "Integer Logic, Induction, and Extremal Proofs"
level: advanced-undergraduate
estimated_minutes: 180
license: CC BY-SA 4.0
---

# Integer Logic, Induction, and Extremal Proofs {#section-1-integer-logic-induction-and-extremal-proofs}

Number theory makes elementary-looking claims whose logical shape controls the proof. “Every integer greater than one has a prime divisor” is not proved by checking a long list. “There are infinitely many primes” does not say that a particular formula always produces a prime. This chapter establishes the proof desk used throughout the book: quantifiers, divisibility, well-ordering, induction, minimal counterexamples, and infinite descent.

The local prerequisite is comfort with integers, sets, and direct proof. After the chapter you should be able to negate quantified statements, use divisibility without illegal division, choose between induction and well-ordering, and audit descent arguments for a genuinely smaller positive object.

<a id="section-5-1-statements-carry-quantifiers"></a>
## 1. Statements carry quantifiers {#section-7-1-statements-carry-quantifiers}

For integers $a,b$, write $a \\mid b$ when an integer $k$ exists with $b=ak$. The witness $k$ belongs to the definition. In particular, every nonzero integer divides zero, $1$ divides every integer, and $0 \\mid b$ holds only when $b=0$.

A universal statement has the form “for every allowed input, a conclusion holds.” Its negation needs one allowed counterexample. An existential statement needs one witness; its negation must exclude every candidate.

The negation of

\\[\\forall n\\in\\mathbb{Z},\\ \\exists p\\in P\\text{ such that }p\\mid n\\]

is

$\\exists n \\in \\mathbb{Z}$ such that, for every $p \\in P$, $p \\nmid n$.

The order of quantifiers matters. Every integer $n>1$ has some prime divisor, but no single prime divides every integer greater than one.

<a id="section-21-worked-example-an-implication-and-its-contrapositive"></a>
### Worked example: an implication and its contrapositive {#section-23-worked-example-an-implication-and-its-contrapositive}

Claim: if $n^{2}$ is odd, then $n$ is odd. The contrapositive says that if $n$ is even, then $n^{2}$ is even. Write $n=2k$; then $n^{2}=2(2k^{2})$. This proves the contrapositive and therefore the original claim.

The converse happens also to be true, but a proof of an implication never automatically proves its converse.

<a id="section-27-2-divisibility-is-algebra-of-witnesses"></a>
## 2. Divisibility is algebra of witnesses {#section-29-2-divisibility-is-algebra-of-witnesses}

If $a\\mid b$ and $a\\mid c$, choose integers $r,s$ with $b=ar$ and $c=as$. For all integers $x,y$,

$xb+yc=a(xr+ys)$,

so $a \\mid xb+yc$. This linear-combination principle is more useful than treating divisibility as a fraction.

If $a\\mid b$ and $b\\mid c$, then $b=ar$ and $c=bs$ give $c=a(rs)$, so $a\\mid c$. If $a\\mid b$ and $b\\mid a$ with both positive, then the positive witnesses multiply to one, hence both are one and $a=b$. Without positivity the correct conclusion is $\\lvert a\\rvert=\\lvert b\\rvert$.

<a id="section-37-failure-clinic-cancellation-needs-a-condition"></a>
### Failure clinic: cancellation needs a condition {#section-39-failure-clinic-cancellation-needs-a-condition}

From $ac\\mid bc$, cancellation of $c$ is valid when $c$ is nonzero: $bc=ack$ gives $b=ak$. If $c=0$, the premise $0\\mid 0$ is true for every $a,b$, while $a\\mid b$ need not be. Recording $c \\ne 0$ is not pedantry; it is the theorem’s boundary.

<a id="section-41-3-well-ordering-creates-least-witnesses"></a>
## 3. Well-ordering creates least witnesses {#section-43-3-well-ordering-creates-least-witnesses}

**Well-ordering principle.** Every nonempty subset of the positive integers has a least element.

This turns existence into leverage. Suppose a set of counterexamples is nonempty and choose its least member. If the argument manufactures a smaller counterexample, the assumption collapses.

**Theorem 1.2.** Every integer $n>1$ has a prime divisor.

**Proof.** Let $S$ be the set of positive divisors of $n$ that exceed one. It is nonempty because $n$ belongs to it. Let $d$ be its least element. If $d=uv$ with $1<u<d$ and $1<v<d$, then $u\\mid d\\mid n$, so $u$ would be a smaller member of $S$. Thus no such factorization exists and $d$ is prime. $\\square$

The proof does not yet establish unique factorization; it establishes only existence of a prime divisor.

<a id="section-53-4-induction-and-strong-induction"></a>
## 4. Induction and strong induction {#section-55-4-induction-and-strong-induction}

Ordinary induction proves a base case $P(n_{0})$ and an implication $P(k)\\Rightarrow P(k+1)$. Strong induction may assume every earlier case $P(n_{0}),\\ldots,P(k)$ when proving the next one. Both express well-ordering in a convenient form.

**Theorem 1.3.** Every integer $n\\ge 2$ is a product of primes.

**Proof.** Use strong induction. The integer $2$ is prime. Assume the claim for all integers from $2$ through $n-1$. If $n$ is prime, it is already a one-factor product. Otherwise $n=ab$ with $2\\le a,b<n$; the induction hypothesis expresses each factor as a product of primes, so their product does too. $\\square$

<a id="section-61-worked-example-a-recurrence-with-residue-information"></a>
### Worked example: a recurrence with residue information {#section-63-worked-example-a-recurrence-with-residue-information}

Let $u_{0}=0$, $u_{1}=1$, and $u_{n+2}=u_{n+1}+u_{n}$. We prove $u_{n}$ is even exactly when $3\\mid n$. Modulo $2$, the ordered pairs evolve

$(0,1) \\to (1,1) \\to (1,0) \\to (0,1)$.

The state repeats every three steps, so the first coordinate is zero precisely at indices divisible by three. This finite-state proof is clearer than an induction split into several residue cases.

<a id="section-69-5-extremal-proofs-and-descent"></a>
## 5. Extremal proofs and descent {#section-71-5-extremal-proofs-and-descent}

An **extremal proof** chooses an object minimizing or maximizing a numerical parameter. An **infinite descent** assumes a solution exists and constructs a strictly smaller positive solution of the same kind. Repetition would create an impossible infinite decreasing sequence of positive integers.

**Theorem 1.4.** $\\sqrt{2}$ is irrational.

**Proof by descent.** Suppose positive integers $a,b$ satisfy $a^{2}=2b^{2}$, and choose a solution with least $a+b$. Since $a^{2}$ is even, $a$ is even; write $a=2c$. Then $b^{2}=2c^{2}$, so $b=2d$. Substitution gives $c^{2}=2d^{2}$, a new positive solution with $c+d=(a+b)/2<a+b$, contradiction. $\\square$

The decrease parameter must be a positive integer. Saying merely that a new solution is “simpler” does not complete a descent proof.

<a id="section-79-6-euclid-s-infinitude-argument"></a>
## 6. Euclid’s infinitude argument {#section-81-6-euclid-s-infinitude-argument}

**Theorem 1.5.** There are infinitely many primes.

**Proof.** If the primes were exactly $p_{1},\\ldots,p_{r}$, consider $N=p_{1}\\ldots p_{r}+1$. Since $N>1$, it has a prime divisor $q$. If $q$ were one of the listed primes, it would divide both the product and $N$, hence their difference $1$, impossible. Thus a prime was omitted. $\\square$

The argument does not claim that $N$ is prime. For $2*3*5*7*11*13+1=30031=59*509$, the constructed number is composite, but each of its prime divisors is new relative to the chosen finite list.

<a id="section-87-7-proof-audit-checklist"></a>
## 7. Proof audit checklist {#section-89-7-proof-audit-checklist}

Before accepting an integer proof, ask:

1. What are the domains and quantifiers?
2. Where is each divisibility witness introduced?
3. Did a cancellation divide by zero or a nonunit?
4. If a least object is chosen, why is the candidate set nonempty?
5. If induction is used, do the hypotheses cover every required smaller case?
6. If descent is used, what positive integer decreases strictly?
7. Is the conclusion existence, uniqueness, computation, or only an obstruction?

<a id="section-99-exercises-with-complete-solutions"></a>
## From a search to a checkable integer witness {#section-361-from-a-search-to-a-checkable-integer-witness}

A proof may be easy to check after it has been hard to find. Suppose someone proposes that $7$ divides $301$. Trying successive multiples is one search method, but the eventual proof can be the single equality $301=7\\cdot43$. The integer $43$ is the witness demanded by the definition. The verifier needs neither the search history nor confidence in the person who found it. Conversely, a screen of tested multiples ending at $294$ does not prove nondivisibility: the search would need a bound or a division argument before an unsuccessful search became a certificate.

Keep the object being certified precise. To prove $d\\mid a$ and $d\\mid b$, give two integers $u,v$ with $a=du$ and $b=dv$. The same data certify every combination because $ax+by=d(ux+vy)$ for integers $x,y$. This is a transformation of witnesses, not a new appeal to a pattern in examples. For instance, $84=6\\cdot14$ and $30=6\\cdot5$ give $84x+30y=6(14x+5y)$. The coefficients in parentheses remain integers even when $x$ or $y$ is negative.

A common divisor has not yet been certified as the greatest common divisor. The integer $2$ divides $84$ and $30$, but so does $6$. A further identity $6=-84+3\\cdot30$ closes the gap: every common divisor divides its right side, hence divides $6$, while $6$ already divides both inputs. This anticipates the next chapter's universal gcd property. The proof has two directions with different jobs, and losing either direction changes the claim. The number $114=84+30$ is an integer combination, but it is not a common divisor.

A counterexample is also a witness, now for the negation of a universal claim. To refute “every product of two nonzero integers is positive,” exhibit $1$ and $-1$ and check every hypothesis before checking the failed conclusion. The value $0$ would not refute this statement because the hypotheses exclude it. A useful counterexample is often small because the verification is short, but smallness is not a logical requirement.

This distinction guides proof search. Numerical experiments can suggest an identity; algebra can turn that suggestion into a formula valid for every permitted input. In the divisibility claim $a-b\\mid a^2-b^2$, the factorization $a^2-b^2=(a-b)(a+b)$ provides an integer witness $a+b$ uniformly. It also handles $a=b$: the conclusion becomes $0\\mid0$, which is true under the book's convention. A cancellation argument that divided by $a-b$ would unnecessarily lose that case.

<a id="section-371-quantifier-order-and-the-domain-of-a-witness"></a>
## Quantifier order and the domain of a witness {#section-373-quantifier-order-and-the-domain-of-a-witness}

The order in which objects are chosen determines what a proof may use. In “for every integer $n$ there exists an integer $k$ with $n(n+1)=2k$,” the witness $k$ may depend on $n$. When $n=2h$, take $k=h(n+1)$; when $n=2h+1$, take $k=n(h+1)$. Both witnesses are integers. The two cases cover negative integers as well: every integer is even or odd with an integer $h$. No positivity assumption entered the argument.

Moving the existential quantifier to the front asks for one fixed integer $k$ working for every $n$. Taking $n=1$ forces $k=1$, while $n=2$ forces $k=3$, so that stronger statement is false. The first claim can therefore be true while its reordered version fails. Writing $k=k(n)$ during proof search is a useful reminder of allowable dependence, even when the final proof simply says “choose $k$.”

Parameters fixed earlier are available to a later witness. If a nonzero integer $a$ is fixed and $a\\mid b$, the witness in $b=au$ may depend on both $a$ and $b$. A proof cannot assume $u$ is positive: $3\\mid-12$ has witness $-4$. Nor can it infer uniqueness when $a=0$: the equality $0=0u$ holds for every integer $u$. Existence, uniqueness and sign are separate conclusions. When $a\\ne0$, uniqueness follows by cancellation from $au=av$, and that cancellation is precisely where the nonzero premise is used.

Negating a nested statement reverses both quantifiers and the final predicate. The negation of “for every $n\\ge1$ there is a prime $p>n$” is “there exists $n\\ge1$ such that every prime $p$ satisfies $p\\le n$.” It is not the assertion that there is one prime below every $n$. The least-counterexample method needs the correctly negated statement to build its set of failures. A wrong negation can make a valid minimality argument prove an unrelated claim.

Inequalities also belong to the certificate. If a theorem seeks a prime above a real bound $B>0$, producing a prime above $\\lfloor B\\rfloor$ does not automatically display the intended argument unless the integer-to-real step is stated. The earlier factorial proof avoids ambiguity by choosing an integer $m>B$ first, then showing that a prime divisor of $m!+1$ exceeds $m$. The nondivisibility step uses only the fact that every prime at most $m$ divides $m!$. The factorial expression itself need not be prime.

These examples suggest a practical way to begin a proof: write the domain of each variable and say which choices come first. That preliminary sentence is mathematical work. It prevents a rational quotient from being used as an integer divisibility witness and prevents a witness chosen for one input from silently being reused for all inputs.

<a id="section-385-why-the-induction-principles-are-interchangeable"></a>
## Why the induction principles are interchangeable {#section-387-why-the-induction-principles-are-interchangeable}

Write $\\mathbb Z_{\\ge0}=\\{0,1,2,\\ldots\\}$ in this section; the book otherwise uses $N$ for positive integers. The well-ordering principle says that every nonempty subset of $\\mathbb Z_{\\ge0}$ has a least element. Its positive-integer version is equivalent by adding or subtracting one. It is a statement about arbitrary subsets, not just subsets whose first few members have been computed.

To obtain strong induction from well-ordering, suppose a property $P(n)$ has the following rule: for each $n\\ge0$, if $P(j)$ holds for every integer $0\\le j<n$, then $P(n)$ holds. At $n=0$ the antecedent has no instances, so the rule includes the base case. If some $P(n)$ were false, its failure set would have a least element $m$. Every smaller index would satisfy $P$, making the rule prove $P(m)$, a contradiction. The proof uses minimality only after establishing that the failure set is nonempty.

Ordinary induction implies strong induction by strengthening the induction claim. Define $Q(n)$ to mean that $P(0),P(1),\\ldots,P(n)$ all hold. The strong rule at $0$ proves $Q(0)$. If $Q(n)$ holds, the strong rule at $n+1$ gives $P(n+1)$, and the already known earlier cases remain true; thus $Q(n+1)$ holds. Ordinary induction proves every $Q(n)$ and therefore every $P(n)$. The strengthening stores precisely the information the next step needs.

In the reverse direction, ordinary induction follows from the strong rule by using only $P(n-1)$ when proving $P(n)$ for $n\\ge1$, with $P(0)$ supplied separately. These are different presentations of the same discrete ordering mechanism. A least-counterexample proof often reads more naturally for a factorization problem; an induction proof may organize a recursively constructed witness more transparently. Choosing one is a matter of exposing the needed predecessor, not selecting a stronger source of truth.

One can also recover well-ordering from ordinary induction. Let $S\\subseteq\\mathbb Z_{\\ge0}$ be nonempty and suppose it has no least element. Prove that none of $0,\\ldots,n$ belongs to $S$. For $n=0$, membership of $0$ would make it least. If none of $0,\\ldots,n$ belongs, membership of $n+1$ would make $n+1$ least, so it too is absent. Induction makes $S$ empty, contradicting the premise. Notice that this proof applies induction to a finite initial segment, not to an unexplained “next member” of $S$.

For a statement beginning at an integer $n_0$, shift the index: apply the principle to $P(n_0+j)$ for $j\\ge0$. To cover all integers, one forward chain from $0$ is insufficient. Prove the nonnegative cases by a forward step and the negative cases by a second argument, such as induction on $j$ for the inputs $-j$. There is no least integer from which ordinary forward induction could start over all of $\\mathbb Z$.

<a id="section-399-how-a-recurrence-determines-the-needed-base-cases"></a>
## How a recurrence determines the needed base cases {#section-401-how-a-recurrence-determines-the-needed-base-cases}

An induction step has a dependency pattern. If a proof of $P(n)$ uses $P(n-3)$, the initial cases must cover each possible remainder modulo $3$. Proving $P(0)$ and then a step from $n$ to $n+3$ reaches $0,3,6,\\ldots$ but says nothing about $1$ or $2$. Three chains are needed. Strong induction can hide these chains in its notation, but it cannot manufacture missing initial cases.

Here is a worked representation theorem with a different step size. Every integer $n\\ge12$ can be written as $4a+5b$ with $a,b\\ge0$ integers. The four initial cases are
$$
12=4\\cdot3,\\qquad13=4\\cdot2+5,\\qquad
14=4+5\\cdot2,\\qquad15=5\\cdot3.
$$
For $n\\ge16$, the integer $n-4$ is at least $12$. By the induction hypothesis it is $4a+5b$, so $n=4(a+1)+5b$. The witness update preserves integrality and nonnegativity. The proof would fail at $n=13$ if it attempted to use the unavailable predecessor $9$; this explains why the four displayed cases precede the step.

This proof gives an actual construction. Repeatedly subtract $4$ until reaching one of $12,13,14,15$, use its displayed pair, then add one to the first coordinate for each subtraction. For $n=26$, the chain $26,22,18,14$ reaches $14=4+2\\cdot5$ and returns $26=4\\cdot4+2\\cdot5$. The finite chain is a search trace; the equality at the end is the compact certificate. The representation is not claimed unique, and the proof does not address the smallest possible threshold.

A second dependency pattern arises in recursive factorization. To construct a prime factorization of $n\\ge2$, a composite input splits as $uv$ with $1<u<n$ and $1<v<n$. Both factors decrease, but neither is necessarily $n-1$. Strong induction supplies factorizations for both. Multiplying those factorizations proves existence for $n$. The mechanism establishes existence alone; it does not prove that a different sequence of splits yields the same prime list. Uniqueness requires the additional prime-divisor argument developed with Euclid's lemma.

The recursion terminates because every branch is a strictly decreasing sequence of positive integers. Merely saying “split until prime” omits this reason. A single branch cannot keep descending forever, and a finite branching construction of this particular kind is justified recursively by the strong-induction proof itself: each smaller input already comes with a finite completed construction. There is no need to assume in advance that all possible splitting choices terminate uniformly after the same number of steps.

When a proposed induction stalls, inspect the dependency before strengthening the conclusion at random. If the next case needs two adjacent values of a recurrence, carry both as the induction state. If it needs all smaller factors, use strong induction. If it needs a predecessor outside the claimed domain, add legitimate initial cases or change the statement. A gap in the step is not repaired by displaying many unrelated examples.

<a id="section-418-descent-needs-a-preserved-problem-and-a-discrete-measur"></a>
## Descent needs a preserved problem and a discrete measure {#section-420-descent-needs-a-preserved-problem-and-a-discrete-measur}

Infinite descent is a least-counterexample argument applied to solutions. Suppose a set of admissible integer objects is nonempty. Attach to each object a positive integer $\\mu$, and prove that every admissible object produces another admissible object with a smaller $\\mu$. The set of occurring measures then has a least member by well-ordering. Applying the construction to an object attaining it gives a smaller member, a contradiction. No actual infinite sequence needs to be written.

There are two obligations in the construction. The new object must satisfy the same defining conditions, and its measure must decrease strictly. In the square-root-of-two argument, division of both numerator and denominator by $2$ is legal only after proving both are even. The smaller pair remains integral and still satisfies the same square equation. If one divides before establishing parity, one may leave the integer problem and obtain no contradiction.

A positive real measure alone is inadequate. The sequence $1,1/2,1/4,\\ldots$ decreases forever while remaining positive. A measure taking integer values bounded below is sufficient: subtract the lower bound to reduce to nonnegative integers. A measure taking arbitrary integer values without a lower bound is insufficient, since $0,-1,-2,\\ldots$ continues indefinitely. Thus “gets smaller” is a conclusion about an ordering, not yet a termination proof.

Consider the attempted descent on positive odd integers $n\\mapsto n-2$. It decreases whenever it stays positive, but at $n=1$ the result is $-1$, outside the set. This cannot prove that positive odd integers do not exist. A genuine descent argument must handle its minimal possible object, usually by showing that an admissible solution could not have that size in the first place. The missing case at the bottom often reveals the entire error.

Sometimes no single coordinate decreases, but a combination does. For positive integer pairs, a transformation that decreases $x+y$ while allowing $x$ to rise still terminates. For example, replacing $(x,y)$ with $(x+1,y-2)$ when $y\\ge3$ decreases the sum by one and preserves positivity. It cannot continue after $y$ becomes $1$ or $2$; a proof using this move must either accept those as terminal cases or supply a separate contradiction there. The measure justifies termination, not the conclusion assigned to the terminal state.

Descent and induction face opposite directions along the same order. Induction assumes completed smaller cases to build a larger one. Descent assumes a counterexample and builds a smaller counterexample. In Diophantine applications, the descent map often contains the main arithmetic insight: parity, divisibility or a factorization makes the smaller object integral. Naming “infinite descent” cannot replace verification of that map. Later chapters use the same architecture with valuations and rational points, where preserving the admissibility conditions requires even greater care.

<a id="section-432-obstructions-constructive-proofs-and-a-usable-dependenc"></a>
## Obstructions, constructive proofs, and a usable dependency chain {#section-434-obstructions-constructive-proofs-and-a-usable-dependenc}

A necessary condition can rule out solutions without constructing any. Squares are $0$ or $1$ modulo $4$: an even integer is $2h$ and has square $4h^2$, while an odd integer is $2h+1$ and has square $4h(h+1)+1$. Consequently $x^2=4y+2$ has no integer solution. This is a complete obstruction because every integer $x$ falls into one of the two parity classes. The calculation does not require a table over a large interval.

Passing an obstruction is weaker. The number $5$ is $1$ modulo $4$, but it is not an integer square: a nonnegative integer $x$ is either at most $2$, giving $x^2\\le4$, or at least $3$, giving $x^2\\ge9$; negative $x$ has the same square as $-x$. Thus the residue condition narrows possibilities without proving existence. In later local methods, the same distinction becomes more elaborate, but it is already visible in this tiny example.

Constructive existence requires an output whose defining conditions can be checked. In a linear equation $ax+by=c$, a single pair $(x,y)$ proves solvability but says nothing about all solutions. A parametrization must prove both that every parameter gives a solution and that every solution appears. The second direction is often where divisibility enters. The next chapter derives it from Bézout's identity, rather than assuming that a pattern in a few solutions is exhaustive.

Proof dependencies should follow the direction actually used. A least-divisor argument proves that every integer $n>1$ has a prime divisor without unique factorization. Strong induction then proves existence of a prime factorization. Euclid's lemma, obtained from Bézout in the next chapter, supplies the cancellation needed for uniqueness. A proof that uses unique factorization before this chain is complete must explicitly import it, as the earlier square-root exercise does. That local import is legitimate, but it should not be mistaken for a proof of the imported theorem.

The same care applies to a certificate's scope. The identity $1=3\\cdot5-2\\cdot7$ proves that every common divisor of $5$ and $7$ divides $1$. It does not assert that the displayed coefficients are unique, and it does not establish a general algorithm for finding them. Euclid's algorithm adds the search method while preserving the simple verification equation. Keeping the theorem, construction and verification separate makes it possible to reuse the certificate without rerunning the discovery.

A finished argument can therefore be read as a short chain of legal transitions: specify the objects, construct or obstruct the required witness, justify termination when a search is involved, and check the exact conclusion. This chain leaves room for experimentation at the beginning and for alternative proofs at the end. Its value is that another reader can locate the step that fails when a hypothesis changes, instead of having to accept the argument as an indivisible block.

<a id="section-446-exercises-witness-dependence-and-descent"></a>

## Summary

<a id="section-358-chapter-summary"></a>
Integer proofs begin by fixing domains and quantifiers. Divisibility is an existential witness relation; linear combinations preserve it. Well-ordering supports least-divisor and minimal-counterexample arguments, while induction packages the same logic sequentially. A descent proof needs a strictly smaller positive integer measure. These contracts support Euclid’s algorithm and factorization in the next chapters.
<a id="section-359-from-a-search-to-a-checkable-integer-witness"></a>

## Exercises {#section-101-exercises-with-complete-solutions}

<a id="section-101-1-divisibility-at-zero"></a>
### 1. Divisibility at zero {#section-103-1-divisibility-at-zero}

Determine all integers $a$ for which $a\\mid 0$, and all integers $b$ for which $0\\mid b$.

**Hint 1.** Use the definition with an integer multiplier.

**Hint 2.** For the second direction, every multiple of zero is zero.

<details><summary>Full solution</summary>

**Solution.** For every $a$, $0=a*0$, so $a\\mid 0$. If $0\\mid b$, then $b=0*k=0$; conversely $0\\mid 0$ using any integer witness. Thus every integer divides zero, while zero divides only zero.

</details>

<a id="section-115-2-audit-a-false-linear-combination-claim"></a>
### 2. Audit a false linear-combination claim {#section-117-2-audit-a-false-linear-combination-claim}

Is it true that $7\\mid a+2b$ and $7\\mid 3a-b$ force $7\\mid a$ and $7\\mid b$? Prove the implication or give a counterexample, and diagnose the tempting proof.

**Hint 1.** Form combinations that isolate a multiple of each variable.

**Hint 2.** The resulting coefficient is seven, so cancellation modulo seven is unavailable; try a nonzero solution of the first congruence.

<details><summary>Full solution</summary>

**Solution.** The combinations $(a+2b)+2(3a-b)=7a$ and $3(a+2b)-(3a-b)=7b$ are divisible by $7$. This alone gives $7\\mid 7a$, which is automatic, so it does not yet prove the claim—the proposed statement is false. Take $a=1,b=3$: both given expressions are $7$ and $0$, but neither variable is divisible by $7$. The determinant is $-7$, not a unit modulo $7$; cancellation was the trap.

</details>

<a id="section-129-3-repair-the-previous-claim"></a>
### 3. Repair the previous claim {#section-131-3-repair-the-previous-claim}

Replace $7$ by $5$ in Exercise 2 and prove the result.

**Hint 1.** Reuse the same two linear combinations.

**Hint 2.** Seven is invertible modulo five, so a Bezout identity now permits cancellation.

<details><summary>Full solution</summary>

**Solution.** The same combinations show $5\\mid 7a$ and $5\\mid 7b$. Since $\\gcd(5,7)=1$, Bezout gives $1=3*5-2*7$; if $5\\mid 7a$, then $5\\mid 2*7a$, and of course $5\\mid 3*5a$, so $5\\mid a$. Likewise $5\\mid b$.

</details>

<a id="section-143-4-negate-carefully"></a>
### 4. Negate carefully {#section-145-4-negate-carefully}

Negate: “For every positive integer $n$, if $n$ is composite then there exists a prime $p\\le \\sqrt{n}$ dividing $n$.”

**Hint 1.** Negate the universal quantifier first.

**Hint 2.** The negation of an implication requires a composite input and failure of the existential conclusion.

<details><summary>Full solution</summary>

**Solution.** The negation is: “There exists a positive composite integer $n$ such that every prime $p\\le \\sqrt{n}$ fails to divide $n$.” The implication’s negation requires the premise true and conclusion false.

</details>

<a id="section-157-5-small-prime-factor"></a>
### 5. Small prime factor {#section-159-5-small-prime-factor}

Prove every composite $n>1$ has a prime divisor at most $\\sqrt{n}$.

**Hint 1.** Write the composite as a product of two factors in increasing order.

**Hint 2.** The smaller factor is at most the square root and has a prime divisor.

<details><summary>Full solution</summary>

**Solution.** Write $n=ab$ with $1<a\\le b$; otherwise swap factors. Then $a^{2}\\le ab=n$, so $a\\le \\sqrt{n}$. By the least-divisor theorem, $a$ has a prime divisor $p$; then $p\\mid n$ and $p\\le a\\le \\sqrt{n}$.

</details>

<a id="section-171-6-sum-of-odd-numbers"></a>
### 6. Sum of odd numbers {#section-173-6-sum-of-odd-numbers}

Prove $1+3+\\ldots+(2n-1)=n^{2}$ for $n\\ge 1$.

**Hint 1.** Compare the proposed sums at consecutive indices.

**Hint 2.** Adding the next odd term changes a square to the next square.

<details><summary>Full solution</summary>

**Solution.** The base case is $1=1^{2}$. If the sum through $2n-1$ is $n^{2}$, adding the next odd number $2n+1$ gives $n^{2}+2n+1=(n+1)^{2}$.

</details>

<a id="section-185-7-a-false-induction"></a>
### 7. A false induction {#section-187-7-a-false-induction}

Where does the standard “all horses have the same colour” induction fail?

**Hint 1.** Examine the very first transition from one object to two.

**Hint 2.** The two one-element subcollections have no common member.

<details><summary>Full solution</summary>

**Solution.** In passing from one horse to two, the two overlapping subcollections of size one have empty intersection. There is no common horse transferring the color equality. The inductive argument silently needs $n\\ge 2$, so it cannot establish the first transition.

</details>

<a id="section-199-8-product-of-consecutive-integers"></a>
### 8. Product of consecutive integers {#section-201-8-product-of-consecutive-integers}

Prove $6\\mid n(n-1)(n+1)$ for every integer $n$.

**Hint 1.** Separate divisibility by two and by three.

**Hint 2.** Three consecutive integers contain a multiple of three and at least one even member.

<details><summary>Full solution</summary>

**Solution.** Among three consecutive integers one is divisible by $3$. At least one is even. Since $2$ and $3$ are coprime, their product $6$ divides the three-factor product.

</details>

<a id="section-213-9-square-parity"></a>
### 9. Square parity {#section-215-9-square-parity}

Prove $n$ and $n^{2}$ have the same parity.

**Hint 1.** Use the two possible remainders modulo two.

**Hint 2.** Expand the square in each case.

<details><summary>Full solution</summary>

**Solution.** If $n=2k$, then $n^{2}=2(2k^{2})$ is even. If $n=2k+1$, then $n^{2}=2(2k^{2}+2k)+1$ is odd. The two cases exhaust the integers.

</details>

<a id="section-227-10-least-nonrepresentable-amount"></a>
### 10. Least nonrepresentable amount {#section-229-10-least-nonrepresentable-amount}

Prove every integer $n\\ge 8$ has the form $3a+5b$ with nonnegative integers $a,b$.

**Hint 1.** Check three consecutive starting values.

**Hint 2.** For every later value, subtract three and apply strong induction.

<details><summary>Full solution</summary>

**Solution.** The base values are $8=3+5$, $9=3+3+3$, and $10=5+5$. Strong induction now works: for $n\\ge 11$, the integer $n-3\\ge 8$ has a representation, and adding one to its $a$ coefficient represents $n$.

</details>

<a id="section-241-11-consecutive-squares"></a>
### 11. Consecutive squares {#section-243-11-consecutive-squares}

Show no square lies strictly between $n^{2}$ and $(n+1)^{2}$ for $n\\ge 0$.

**Hint 1.** Replace a possibly negative square root index by its absolute value.

**Hint 2.** There is no integer strictly between consecutive nonnegative integers.

<details><summary>Full solution</summary>

**Solution.** If $m^{2}$ were strictly between them, nonnegativity and monotonicity of squaring on $[0,\\infty)$ would give $n<|m|<n+1$, impossible because $|m|$ is an integer.

</details>

<a id="section-255-12-irrational-square-roots"></a>
### 12. Irrational square roots {#section-257-12-irrational-square-roots}

If positive integer $d$ is not a square, prove $\\sqrt{d}$ is irrational, assuming unique prime factorization.

**Hint 1.** Clear a rational denominator in lowest terms.

**Hint 2.** Choose a prime with odd exponent in the nonsquare integer and compare exponents.

<details><summary>Full solution</summary>

**Solution.** If $\\sqrt{d}=a/b$ in lowest terms, then $a^{2}=db^{2}$. In a square every prime exponent is even. Because $d$ is not a square, some prime has odd exponent in $d$; its exponent on the right remains odd after adding the even exponent from $b^{2}$, contradicting the even exponent in $a^{2}$.

</details>

<a id="section-269-13-euclid-number-boundary"></a>
### 13. Euclid number boundary {#section-271-13-euclid-number-boundary}

Explain why $p_{1}\\ldots p_{r}-1$ does not work verbatim in Euclid’s proof.

**Hint 1.** Ask whether the constructed positive integer must exceed one.

**Hint 2.** The subtraction version can equal one for the initial prime list consisting only of two.

<details><summary>Full solution</summary>

**Solution.** It is congruent to $-1$ modulo each listed prime, so no listed prime divides it, but it may equal $1$ when the list contains only $2$. Then it has no prime divisor. The $+1$ construction is always greater than one.

</details>

<a id="section-283-14-minimal-counterexample-induction"></a>
### 14. Minimal counterexample induction {#section-285-14-minimal-counterexample-induction}

Show the well-ordering principle implies ordinary induction.

**Hint 1.** Suppose the set of failed induction conclusions is nonempty.

**Hint 2.** Its least member cannot be the base case and contradicts the previous inductive step.

<details><summary>Full solution</summary>

**Solution.** Suppose $P(n_{0})$ holds and $P(k)\\Rightarrow P(k+1)$, but some $P(n)$ fails. Choose the least failing $m$. It is not $n_{0}$. Hence $m-1\\ge n_{0}$ and, by minimality, $P(m-1)$ holds; the induction step gives $P(m)$, contradiction.

</details>

<a id="section-297-15-unbounded-primes"></a>
### 15. Unbounded primes {#section-299-15-unbounded-primes}

Prove for every positive $B$ there is a prime exceeding $B$.

**Hint 1.** List every prime not exceeding the proposed bound.

**Hint 2.** A prime divisor of their product plus one lies outside that finite list.

<details><summary>Full solution</summary>

**Solution.** Let $m=\\lceil B\\rceil+1$, so $m$ is an integer with $m\\ge 2$ and $m>B$. Set $N=m!+1$ and choose a prime divisor $q$ of $N$. If $q\\le m$, then $q\\mid m!$, so it would divide the difference $1$, impossible. Thus $q>m>B$. This also covers a positive bound $B$ that is not an integer.

</details>

<a id="section-311-16-a-descent-audit"></a>
### 16. A descent audit {#section-313-16-a-descent-audit}

Why is “replace $(a,b)$ by $(a/2,b/2)$” insufficient in the irrationality proof unless parity is first proved?

**Hint 1.** Check that the new pair consists of integers before comparing its size.

**Hint 2.** Both coordinates must first be proved even so the smaller object stays in the admissible family.

<details><summary>Full solution</summary>

**Solution.** A descent object must remain in the allowed set. Without showing both $a$ and $b$ even, the halves might not be integers and therefore would not constitute another integer solution.

</details>

<a id="section-325-17-difference-of-powers"></a>
### 17. Difference of powers {#section-327-17-difference-of-powers}

Prove $a-b \\mid a^n-b^n$ for integers $a,b$ and positive $n$.

**Hint 1.** Factor the difference of powers.

**Hint 2.** Multiplication of the geometric sum by the difference telescopes.

<details><summary>Full solution</summary>

**Solution.** The factorization
\\[a^n-b^n=(a-b)(a^{n-1}+a^{n-2}b+\\ldots+b^{n-1})\\]
exhibits an integer divisibility witness.

</details>

<a id="section-341-18-transfer-check"></a>
### 18. Transfer check {#section-343-18-transfer-check}

If a proof checks a congruence modulo $2$, $3$, and $5$, has it proved the congruence modulo $30$?

**Hint 1.** State that the same integer difference is divisible by each modulus.

**Hint 2.** Pairwise coprimality then makes their product divide that difference.

<details><summary>Full solution</summary>

**Solution.** Yes for equality of two integers: if each of $2,3,5$ divides their difference and the moduli are pairwise coprime, then $30$ divides the difference. The statement would need repair for non-pairwise-coprime moduli if one simply multiplied them.

</details>


<a id="section-356-chapter-summary"></a>

<a id="section-448-exercises-witness-dependence-and-descent"></a>
### 19. NTP-01-E19: one witness or a witness for each input {#section-450-ntp-01-e19-one-witness-or-a-witness-for-each-input}

For every integer $n$, give an integer witness for $2\\mid n(n+1)$. Explain why this does not imply that one integer $k$ satisfies $n(n+1)=2k$ for every integer $n$. Include negative inputs in the reasoning.

**Hint 1.** Separate even and odd n to choose a witness for each input.

**Hint 2.** Compare inputs zero and one to disprove the existence of one constant witness.

<a id="section-456-ntp-01-e20-diagnose-a-purported-descent"></a>
### 20. NTP-01-E20: diagnose a purported descent {#section-458-ntp-01-e20-diagnose-a-purported-descent}

A proposed proof says that positive odd integers cannot exist because $n\\mapsto n-2$ produces a smaller odd integer. Identify the failed descent condition. Separately explain why the map $x\\mapsto x/2$ on positive real numbers does not contradict well-ordering of the positive integers.

**Hint 1.** At the smallest positive odd input, subtracting two leaves the allowed domain.

**Hint 2.** Positive reals do admit infinite descending sequences, so integer well-ordering does not apply.

<a id="section-464-solutions-witness-dependence-and-descent"></a>

## Solutions: witness dependence and descent {#section-466-solutions-witness-dependence-and-descent}

<a id="section-466-ntp-01-e19-one-witness-or-a-witness-for-each-input-solu"></a>
### NTP-01-E19: one witness or a witness for each input — solution {#section-468-ntp-01-e19-one-witness-or-a-witness-for-each-input-solu}

<details><summary>Full solution</summary>

If $n=2h$ with $h\\in\\mathbb Z$, choose $k=h(2h+1)$. If $n=2h+1$, choose $k=(2h+1)(h+1)$. In both cases $n(n+1)=2k$, and the parity division covers every integer, including negative ones. A fixed $k$ would have to equal $1$ when $n=1$ and $3$ when $n=2$, which is impossible. The valid witness depends on the input.

</details>

<a id="section-474-ntp-01-e20-diagnose-a-purported-descent-solution"></a>
### NTP-01-E20: diagnose a purported descent — solution {#section-476-ntp-01-e20-diagnose-a-purported-descent-solution}

<details><summary>Full solution</summary>

The map preserves oddness and decreases the integer, but it fails to preserve positivity at $n=1$. The least positive odd integer is therefore not sent to another object in the same admissible set; no contradiction follows. For real inputs, all iterates $x/2^j$ remain positive and decrease. Positive reals do not have the well-ordering property asserted for positive integers. A decreasing positive real measure, without an additional discrete lower-bound argument, supplies no descent contradiction.

</details>

`;export{e as default};