
# Contrapositive and Contradiction

Sometimes the conclusion of a theorem is easier to deny than to prove directly. Instead of starting with the original hypothesis, we can start with the negation of the conclusion and see what it forces. On other occasions, an assumption leads to two statements that cannot both hold. Both approaches are standard in classical mathematics, but they answer slightly different questions and must be written with care.

Throughout, $\mathbb Z$ is the set of all integers, including zero and negative integers; $\mathbb Z_{>0}$ is the set of positive integers; and $\mathbb R$ is the set of real numbers. An integer is even if it equals $2k$ for an integer $k$, and odd if it equals $2k+1$ for an integer $k$. We use the division algorithm and the fact that each integer is exactly one of even and odd. For real numbers, a square is nonnegative, and a square is zero exactly when its base is zero.

## The contrapositive of a conditional

Consider a statement “if $P$, then $Q$.” Its **contrapositive** is “if not $Q$, then not $P$.” In classical logic the original conditional and its contrapositive are equivalent: each is false in exactly the situation where $P$ is true and $Q$ is false. Consequently, establishing the contrapositive establishes the original conditional. Both $P$ and $Q$ keep their original meanings and their variables remain in the original domain.

The **converse** is different: it says “if $Q$, then $P$.” Its truth is not guaranteed by the original statement. For example, for real $x$, if $x>2$ then $x^2>4$, because $x>2>0$ and multiplication preserves the appropriate inequalities. The converse says that $x^2>4$ implies $x>2$; this is false at the admissible real number $x=-3$. The contrapositive, in contrast, is “if $x^2\le4$, then $x\le2$.” It is equivalent to the original statement. Neither $x^2\le4$ nor $x\le2$ should be negated as a strict inequality: the negation of $x>2$ is $x\le2$, including equality.

For a quantified statement, keep the quantifier in view. The contrapositive of “for every integer $n$, if $n^2$ is even then $n$ is even” is “for every integer $n$, if $n$ is not even then $n^2$ is not even.” The integer domain is unchanged. Since an integer is not even exactly when it is odd, this can be written as an assertion about odd integers. We have not exchanged $n$ for a different variable or assumed the conclusion; we have rewritten the same implication for each individual integer.

### Worked example 1: even squares

**Claim.** For every integer $n$, if $n^2$ is even, then $n$ is even.

**Proof by contrapositive.** Suppose that $n\in\mathbb Z$ is not even. By the parity classification it is odd, so $n=2k+1$ for an integer $k$. Then

$$n^2=(2k+1)^2=2(2k^2+2k)+1.$$

Thus $n^2$ is odd and hence not even. We have proved that if $n$ is not even then $n^2$ is not even. This is the contrapositive of the claim, so the claim follows.

The proof uses both parts of the parity classification: every non-even integer is odd, and an odd integer cannot also be even. Neither fact depends on positivity, so the argument includes negative integers and zero. A reader can check the direction by labelling $P$ as “$n^2$ is even” and $Q$ as “$n$ is even”: we assumed not $Q$ and obtained not $P$.

The converse of this particular theorem happens to be true: if $n=2k$, then $n^2=2(2k^2)$ is even. But it is a second claim with its own proof. The fact that one converse is true does not turn a converse into a generally valid proof technique.

## Negating a statement precisely

Negation is an operation on the whole statement, not a request to attach the word “not” wherever it is convenient. For real numbers the negation of $x<3$ is $x\ge3$. The negation of $x=0$ is $x\ne0$. The negation of “$a$ and $b$ are both positive” is “$a$ is not positive or $b$ is not positive”; both may fail. The negation of “$a=0$ or $b=0$” is “$a\ne0$ and $b\ne0$.”

Quantifiers also change. The negation of “every integer has property $P$” is “there exists an integer that does not have property $P$.” The negation of “there exists a real $x$ with $Q(x)$” is “every real $x$ fails $Q(x)$.” The domain stays fixed. Thus to refute “all real numbers have property $P$” it is enough to give one real number without it; a number outside the real domain would not do.

A useful preparatory exercise is to write the original implication, the contrapositive and the converse on separate lines. Check each inequality at equality and check whether every quantifier applies to the same domain. Only then begin a proof. This small pause prevents a surprisingly common mistake: proving the converse and reporting it as the original statement.

### Worked example 2: a product and a zero factor

**Claim.** For real numbers $a$ and $b$, if $ab=0$ then $a=0$ or $b=0$.

**Proof by contrapositive.** Suppose $a\ne0$ and $b\ne0$. The reciprocal of each nonzero real exists. If $ab$ were zero, multiplying the equation $ab=0$ by $1/a$ would give $b=0$, contrary to $b\ne0$. Hence $ab\ne0$. We have shown that when neither factor is zero the product is not zero, which is the contrapositive of the claim.

This proof mentions a contradiction inside an argument whose main structure is contrapositive: methods may be combined, provided every local assumption is clear. An alternative direct argument uses cases: if $a=0$ the conclusion is immediate; if $a\ne0$, multiply $ab=0$ by $1/a$ to obtain $b=0$. In both versions the reciprocal is introduced only after establishing that its denominator is nonzero.

The domain matters. In the integers modulo six, represented by the residue classes $[0],\ldots,[5]$, one has $[2][3]=[0]$ although neither $[2]$ nor $[3]$ is $[0]$. Thus the real-number theorem cannot be transferred to every algebraic system without an appropriate hypothesis. A proof tells us which facts about its objects it uses; it is not merely a rearrangement of familiar symbols.

## Contradiction and the scope of an assumption

A **contradiction** is a pair of assertions of the form $R$ and not $R$, or any explicitly justified impossibility. To prove a statement $S$ by contradiction in classical logic, assume not $S$ and derive a contradiction using established facts. The assumption not $S$ must then be false, so $S$ holds.

For a conditional $P\Rightarrow Q$, its negation is $P$ and not $Q$. Thus a contradiction proof of that conditional assumes both $P$ and not $Q$ and derives an impossibility. By contrast, a contrapositive proof assumes only not $Q$ and establishes not $P$. In the latter proof, it is often useful to temporarily suppose $P$ as well to show why $P$ cannot hold; if so, name that temporary supposition and state the contradiction before discharging it.

It is not enough to arrive at a result that seems unexpected. “This number is larger than I expected” is not a contradiction. “This integer is both even and odd” is a contradiction once the parity classification has been established. Similarly, $1=0$ is impossible in the real numbers, and a positive integer strictly smaller than the least member of a nonempty set of positive integers contradicts the well-ordering principle. State the exact fact that fails; a reader should not have to guess which line is meant to be impossible.

### Worked example 3: the irrationality of $\sqrt2$

A real number is **rational** if it can be written as $p/q$ with integers $p,q$ and $q\ne0$. Every rational number has a representation with $q>0$ in lowest terms: the integers $p$ and $q$ have no common prime factor, or equivalently their greatest common divisor is one. We use the parity result from Worked example 1 as a lemma: if the square of an integer is even, the integer is even.

**Theorem 4.1.** $\sqrt2$ is irrational.

**Proof.** Suppose, for contradiction, that $\sqrt2$ is rational. Choose a representation $\sqrt2=p/q$ with integers $p,q$, $q>0$, and $p$ and $q$ in lowest terms. Squaring and multiplying by $q^2$ gives

$$p^2=2q^2.$$

The right side is even, so $p^2$ is even. By the parity lemma, $p$ is even; write $p=2r$ for an integer $r$. Substituting gives $4r^2=2q^2$, hence $q^2=2r^2$. Thus $q^2$ is even, and the same lemma shows that $q$ is even.

Both $p$ and $q$ are therefore divisible by two. This contradicts the choice of $p/q$ in lowest terms. The supposition that $\sqrt2$ is rational is false, and $\sqrt2$ is irrational.

The contradiction is not that a fraction represents $\sqrt2$ before we have proved irrationality; that would assume the conclusion. It is the specific conflict between “$p,q$ have no common factor greater than one” and “both are divisible by two.” We also did not infer that an even product has two even factors, a false assertion: $2\cdot3$ is even although $3$ is odd. Instead, we used the separately established lemma about a square.

### Worked example 4: infinitely many primes

A **prime** is an integer $p>1$ whose positive divisors are exactly $1$ and $p$. Every integer greater than one has a prime divisor. For completeness, this follows by the well-ordering principle: if some integer greater than one has no prime divisor, choose the least such integer $m$. It cannot be prime, so $m=ab$ with $1<a<m$ and $1<b<m$. By minimality, $a$ has a prime divisor, which also divides $m$, a contradiction.

**Theorem 4.2.** There are infinitely many primes.

**Proof.** Suppose there are only finitely many primes, listed as $p_1,\ldots,p_r$. The list is nonempty because $2$ is prime. Form

$$N=p_1p_2\cdots p_r+1.$$

Then $N>1$, so the preceding fact supplies a prime divisor $q$ of $N$. By the assumed completeness of the list, $q=p_i$ for some $i$, and therefore $q$ also divides the product $p_1\cdots p_r$. Since $q$ divides both $N$ and that product, it divides their difference, which is $1$. No prime greater than one divides $1$. This contradiction proves that the list cannot contain all primes, so infinitely many primes exist.

The argument does **not** say that $N$ itself is always prime. For example, using the first six primes gives $2\cdot3\cdot5\cdot7\cdot11\cdot13+1=30031=59\cdot509$. The proof needs only a prime divisor of $N$, and shows that such a divisor is absent from the proposed finite list. It also does not depend on being given the first $r$ primes; any allegedly complete finite list leads to the same contradiction.

## When to use which method

A direct proof is often shortest when the hypothesis immediately provides a useful expression. A contrapositive is useful when the negated conclusion has a concrete form, as oddness does in the even-square theorem. Contradiction is especially natural when denying an existence or nonexistence claim produces an object with incompatible properties, as in the lowest-terms argument. These are guides, not rules of correctness: the same theorem can admit several valid proofs.

If an attempted contradiction begins “assume the theorem is false,” write out what that means before calculating. For “every $x$ satisfying $P(x)$ also satisfies $Q(x)$,” the assumption is that there exists an $x$ satisfying $P(x)$ and not $Q(x)$. Select such an $x$ and keep it fixed through the argument. For “no $x$ satisfies $P(x)$,” the contrary assumption is the existence of an $x$ that does satisfy $P(x)$. Swapping these quantifiers incorrectly can make an argument prove a different statement.

At the end, name the contradicted statement and discharge the temporary assumption. Avoid saying merely “this is absurd” after a long calculation. The reader needs to know whether the conflict is with a hypothesis, a definition, an earlier theorem, or an elementary property of the domain. Explicit closure is particularly important in a proof with several nested cases or temporary assumptions.

For another presentation of these techniques, see Richard Hammack, [*Book of Proof*, third edition](https://richardhammack.github.io/BookOfProof/), chapters 5 and 6. The explanations and exercises here are independent; the linked book is a further reading source.

## A second look at logical structure

A negated conclusion can be easier to use because it places an object in a familiar class. In the even-square proof, “not even” becomes “odd” only because the domain is the integers and parity has already been classified. Over the real numbers that replacement would be meaningless: a real number such as one half is neither an even integer nor an odd integer. The logical transformation remains valid in any fixed domain, but the mathematical interpretation of a negation depends on that domain.

The two methods can also be compared through the claim that, for real numbers $x$ and $y$, if $x+y>10$ then $x>5$ or $y>5$. Its contrapositive assumes $x\le5$ and $y\le5$. Adding these inequalities gives $x+y\le10$, exactly the negation of the original hypothesis. Therefore the original implication holds. A contradiction version would assume simultaneously $x+y>10$, $x\le5$ and $y\le5$, then obtain $x+y\le10$ in conflict with the first assumption. Both arguments use the same arithmetic, but they present its logical role differently.

The word “or” in these statements is inclusive: at least one of the alternatives holds, and both are allowed. Its negation requires both alternatives to fail. Negating “$x>5$ or $y>5$” therefore gives “$x\le5$ and $y\le5$.” If the original had instead said “both are greater than five,” its negation would require only one of the two inequalities to fail. Keeping this distinction explicit is important when a conclusion has several parts.

A proof by contradiction may establish that a proposed object cannot exist, but it does not automatically construct some different object. Euclid's argument does produce an unlisted prime because, after constructing an integer greater than one, it invokes the already proved existence of a prime divisor. Without that existence fact, saying “choose a prime divisor” would be an unsupported step. The proof separates the construction of the integer, the existence of its divisor, and the argument that the divisor is not listed.

When reading a completed proof, track temporary assumptions as if each were inside a labelled box. A contradiction closes the box whose assumption it refutes; it does not invalidate the theorem's permanent hypotheses. In a proof of a conditional by contradiction, the hypothesis $P$ is retained while the temporary assumption not $Q$ is rejected. Writing that distinction in a margin can make a nested argument much easier to follow.

## Exercises

Give the relevant domain and name the contradiction or the contrapositive in each proof. Two hints precede each complete solution.

### Exercise 1 {#contrapositive-contradiction-exercise-01}

Write the contrapositive and the converse of: for $x\in\mathbb R$, if $x>4$ then $x>1$.

<details>
<summary>Hint 1</summary>

Reverse the two propositions and negate each for the contrapositive.

</details>
<details>
<summary>Hint 2</summary>

The negation of $x>1$ includes equality.

</details>
<details>
<summary>Solution</summary>

The contrapositive is: if $x\le1$, then $x\le4$. The converse is: if $x>1$, then $x>4$. The original and contrapositive are true, while the converse is false at the real number $x=2$.

</details>

### Exercise 2 {#contrapositive-contradiction-exercise-02}

Prove by contrapositive that if $n^2$ is odd for an integer $n$, then $n$ is odd.

<details>
<summary>Hint 1</summary>

What does it mean for an integer not to be odd?

</details>
<details>
<summary>Hint 2</summary>

Square an even integer.

</details>
<details>
<summary>Solution</summary>

If $n$ is not odd, parity classification says that $n=2k$ for some integer $k$. Then $n^2=2(2k^2)$ is even and therefore not odd. This proves the contrapositive and hence the original implication.

</details>

### Exercise 3 {#contrapositive-contradiction-exercise-03}

For integers $a,b$, prove by contrapositive: if $ab$ is odd then both $a$ and $b$ are odd.

<details>
<summary>Hint 1</summary>

Negate “both are odd.”

</details>
<details>
<summary>Hint 2</summary>

If either factor is even, what can you say about the product?

</details>
<details>
<summary>Solution</summary>

If at least one factor is not odd, it is even. If $a=2k$, then $ab=2(kb)$ is even; the same calculation applies if $b$ is even. Thus $ab$ is not odd. This is the contrapositive of the stated claim.

</details>

### Exercise 4 {#contrapositive-contradiction-exercise-04}

Prove that for a real number $x$, if $x^2=0$ then $x=0$, using the contrapositive.

<details>
<summary>Hint 1</summary>

Start from $x\ne0$.

</details>
<details>
<summary>Hint 2</summary>

A nonzero real square is strictly positive.

</details>
<details>
<summary>Solution</summary>

If $x\ne0$, then $x^2>0$ and hence $x^2\ne0$. This is the contrapositive of “if $x^2=0$ then $x=0$.”

</details>

### Exercise 5 {#contrapositive-contradiction-exercise-05}

Negate the statement “for every real number $x$, if $x>0$ then $x^2>x$” and establish the negation.

<details>
<summary>Hint 1</summary>

The negation has an existential quantifier.

</details>
<details>
<summary>Hint 2</summary>

Try a real number strictly between zero and one.

</details>
<details>
<summary>Solution</summary>

The negation is: there exists a real $x$ such that $x>0$ and $x^2\le x$. Take $x=1/2$: it is positive and $x^2=1/4\le1/2$. The original universal claim is therefore false.

</details>

### Exercise 6 {#contrapositive-contradiction-exercise-06}

Prove by contradiction that no integer is both even and odd.

<details>
<summary>Hint 1</summary>

Assume there are integer witnesses for both forms.

</details>
<details>
<summary>Hint 2</summary>

Subtract the two expressions for the same integer.

</details>
<details>
<summary>Solution</summary>

Suppose $n=2r=2s+1$ for integers $r,s$. Then $1=2(r-s)$. If $r-s\le0$ the right side is at most zero; if $r-s\ge1$ it is at least two. Neither equals one, a contradiction. Hence no such integer exists.

</details>

### Exercise 7 {#contrapositive-contradiction-exercise-07}

Show that no rational number has square equal to two.

<details>
<summary>Hint 1</summary>

Assume such a rational exists and write it in lowest terms.

</details>
<details>
<summary>Hint 2</summary>

Use the even-square lemma twice.

</details>
<details>
<summary>Solution</summary>

Suppose $p/q$ in lowest terms, with $q>0$, satisfies $(p/q)^2=2$. Then $p^2=2q^2$, so $p$ is even. Writing $p=2r$ gives $q^2=2r^2$, so $q$ is even too. The common factor two contradicts lowest terms. No such rational exists.

</details>

### Exercise 8 {#contrapositive-contradiction-exercise-08}

Use contradiction to prove that there is no largest integer.

<details>
<summary>Hint 1</summary>

Assume an integer $M$ is largest.

</details>
<details>
<summary>Hint 2</summary>

Consider $M+1$.

</details>
<details>
<summary>Solution</summary>

Suppose $M\in\mathbb Z$ is at least every integer. But $M+1\in\mathbb Z$ and $M+1>M$, contrary to that assumption. Therefore no largest integer exists.

</details>

### Exercise 9 {#contrapositive-contradiction-exercise-09}

For $x\in\mathbb R$, disprove the converse of “if $x>3$ then $x^2>9$.”

<details>
<summary>Hint 1</summary>

The converse starts with $x^2>9$.

</details>
<details>
<summary>Hint 2</summary>

Choose a sufficiently negative real number.

</details>
<details>
<summary>Solution</summary>

The converse says that $x^2>9$ implies $x>3$. At $x=-4$, the hypothesis is true because $16>9$, but the conclusion is false. Thus the converse fails; the original implication is unaffected.

</details>

### Exercise 10 {#contrapositive-contradiction-exercise-10}

Suppose $p_1,\ldots,p_r$ is a finite list of primes. Prove that some prime is not on the list.

<details>
<summary>Hint 1</summary>

Consider the product of the listed primes plus one.

</details>
<details>
<summary>Hint 2</summary>

Choose a prime divisor; do not assume the product plus one is prime.

</details>
<details>
<summary>Solution</summary>

If the list is empty, $2$ is an unlisted prime. Otherwise let $N=p_1\cdots p_r+1$. Since $N>1$, it has a prime divisor $q$. If $q$ were listed, it would divide both $N$ and the product, and hence divide $1$, impossible for a prime. Therefore $q$ is not on the list.

</details>

## Summary

The contrapositive of $P\Rightarrow Q$ is $\neg Q\Rightarrow\neg P$; in classical logic it is equivalent to the original conditional. The converse $Q\Rightarrow P$ is a separate claim. Negating a quantified statement changes “every” to “there exists” or conversely, while retaining the domain. A contradiction proof assumes the negation of the target and identifies a precise conflict with an established fact. The proof that $\sqrt2$ is irrational uses a lowest-terms representation and the even-square lemma; Euclid's proof uses a prime divisor of the product plus one and never requires that product plus one to be prime. In each argument the temporary assumption is discharged only after the contradiction has been explained.
