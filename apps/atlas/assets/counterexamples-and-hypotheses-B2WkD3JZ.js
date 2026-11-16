var e=`---
id: deep-dive-counterexamples-and-hypotheses
title: "One Counterexample, Better Theorems"
license: CC BY-SA 4.0
---

# One Counterexample, Better Theorems

**Before reading.** Read [Addition and Subtraction](../books/number-and-arithmetic/addition-subtraction.md) and [Equivalent Expressions](../books/algebra-from-stories/equivalent-expressions.md). These are preparation for the ideas used below.

You test $4(y-5)=4y-20$ at $y=7$ and both sides equal 8. That is a useful check. It cannot establish equality for *every* $y$: the incorrect expression $4y-20+(y-7)$ also equals 8 at $y=7$. A general identity needs a reason that covers every allowed input, such as the distributive law. One successful case is evidence; one failing case is decisive against a universal claim.

That asymmetry makes counterexamples powerful. They do more than embarrass a proposed theorem. A well-chosen failure tells us which hypothesis, domain, or quantifier the claim needs.

## Read the promise before testing it

“For every $x$ in $D$, $P(x)$” promises that no allowed $x$ breaks $P$. To refute it, find one $x\\in D$ for which $P(x)$ is false. By contrast, “There exists $x$ in $D$ with $P(x)$” is proved by one valid witness and refuted only by ruling out *all* allowed candidates. Swap these logical jobs and a pile of examples can masquerade as a proof.

Consider “Every prime number is odd.” The number 2 is prime and even, so the claim is false. The failure suggests a precise repair: **every prime greater than 2 is odd**. To prove the repaired statement, suppose a prime $p>2$ were even. Then 2 divides $p$ and $2<p$, so $p$ has a nontrivial divisor, contradicting primality. The exception did not make the subject arbitrary; it exposed the missing hypothesis.

Sometimes a repair requires changing the conclusion instead. “The square of a negative number is negative” fails at $-3$, whose square is 9. The useful theorem is that every real square is nonnegative. A counterexample can redirect the entire idea, not merely add a footnote.

## The domain is part of the theorem

Over the real numbers, $ab=0$ implies $a=0$ or $b=0$. Divide by a nonzero factor to see why. But this is false for arithmetic modulo 6: $2\\cdot3\\equiv0\\pmod6$, although neither 2 nor 3 is congruent to 0 modulo 6. The property belongs to the number system, not to the typography of the equation. In a general ring, nonzero factors whose product is zero are called *zero divisors*.

This example is a warning about borrowed proofs. A step valid in real algebra can fail in modular arithmetic, matrix algebra, or functions. Before cancelling a factor, ask whether it may be zero and whether the algebraic structure permits cancellation. The domain is not background decoration; it supplies the rules.

## Search the edges, then explain the failure

A productive counterexample search has an order:

1. Try zero, one, negative values, repeated values, empty sets, and endpoints, when they belong to the domain.
2. Test the first case where a hypothesis barely fails: discontinuity near a continuity theorem, a noninvertible matrix near an inverse formula, or a dependent vector list near a basis statement.
3. If a computation fails, simplify the example until the reason is visible. A small exact counterexample is easier to inspect than a large decimal one.
4. State precisely which promised conclusion is false. Merely calling an example “weird” does not refute a theorem.

For example, “A continuous function on $(0,1)$ attains a maximum” fails for $f(x)=x$. Its values approach 1 but never equal 1, because 1 is not in the domain. Adding the missing endpoint changes the story: the extreme value theorem guarantees a maximum and minimum for a real continuous function on a *closed bounded interval*. That theorem is imported here, not proved by drawing a graph. The counterexample points to a hypothesis about the domain.

## A worked counterexample can be a program specification

**Worked example.**

Suppose a program claims to simplify $(a+b)^2$ to $a^2+b^2$ for all real inputs. Testing $a=0$ passes, as does testing $b=0$; those are poor cases for detecting the omitted cross term. Set $a=b=1$: the original is 4 and the proposed result is 2. The smallest useful test chooses inputs that activate the part of the rule most likely to be missing.

After finding the failure, derive the correct identity:

$$(a+b)^2=(a+b)(a+b)=a^2+2ab+b^2.$$

The algebra proves the formula for all real $a,b$; the test protects an implementation against this particular error. A finite suite of tests is not a proof of a universal algebraic statement, unless the exact domain is finite and every case has actually been checked.

The same habit catches false matrix laws. A program may claim
\\((A+B)^2=A^2+2AB+B^2\\) for all square matrices. Choose

\\[
A=\\begin{pmatrix}0&1\\\\0&0\\end{pmatrix},\\qquad
B=\\begin{pmatrix}0&0\\\\1&0\\end{pmatrix}.
\\]

Here \\(AB\\ne BA\\). Direct expansion gives
\\((A+B)^2=A^2+AB+BA+B^2\\), so replacing the two middle terms by \\(2AB\\)
is unjustified. The scalar identity silently used commutativity. The repaired
matrix statement either retains \\(AB+BA\\) or adds the hypothesis \\(AB=BA\\).
This counterexample identifies the exact borrowed rule that failed.

## Three common repairs

**Restrict the domain.** “Every number has a multiplicative inverse” becomes “Every nonzero real number has a multiplicative inverse.” Zero is not an awkward exception to hide; it tells us why the inverse operation is partial.

**Add a hypothesis.** “A continuous function attains its maximum” needs an appropriate compact domain, such as a closed bounded interval in the real line. Continuity alone does not control what happens at a missing endpoint or at infinity.

**Weaken the conclusion.** “The sum of two irrational numbers is irrational” fails for $\\sqrt2+(-\\sqrt2)=0$. One may instead say that the sum *can* be irrational, or study additional conditions. Do not force a tidy universal theorem where the phenomenon is genuinely conditional.

A repair must itself be proved or labeled as a conjecture. Adding hypotheses until all tested cases pass is a discovery method, not a publication certificate.

## Practice: break, repair, prove

<a id="deep-dive-counterexamples-and-hypotheses-ex-1"></a>

### Exercise 1

1. The expression $n^2+n+41$ is prime for $n=0,1,2$. Test the universal claim that it is prime for every nonnegative integer $n$. Give an exact counterexample.

<details>
<summary>Hint 1</summary>

To refute a universal prime claim, seek an input that makes the expression visibly divisible.
</details>

<details>
<summary>Hint 2</summary>

Try an input equal to the constant term and factor the resulting sum.
</details>

<details>
<summary>Solution</summary>

At $n=41$, the value is $41^2+41+41=41(41+2)$, so it is composite. The first few primes were a pattern, not a proof.

</details>

<a id="deep-dive-counterexamples-and-hypotheses-ex-2"></a>

### Exercise 2

2. “If a differentiable function has derivative zero at $x=0$, it has a local maximum or minimum there.” Find a counterexample and identify the missing inference.

<details>
<summary>Hint 1</summary>

A zero derivative is necessary at many interior extrema but is not sufficient.
</details>

<details>
<summary>Hint 2</summary>

Look for a differentiable function that passes through the candidate while increasing on both sides.
</details>

<details>
<summary>Solution</summary>

Take $f(x)=x^3$. Its derivative at zero is zero, but the function increases through zero. A zero derivative marks a candidate, not an extremum guarantee.

</details>

### Further exercises

3. “For real $a,b$, if $a^2=b^2$, then $a=b$.” Find a counterexample, then state and prove a correct conclusion.
4. A student checks an identity at ten integer values and calls it proved for all real numbers. What has the student established? When could exhaustive testing prove a universal statement?

**Solutions.**

(3) $a=1,b=-1$ gives equal squares but unequal numbers. Factoring $a^2-b^2=(a-b)(a+b)=0$ over the reals shows the correct conclusion: $a=b$ **or** $a=-b$. (4) The student has verified those ten inputs, assuming the calculations are correct. Exhaustive testing can prove a finite-domain claim if the domain and computation are exact and every case is covered; it cannot cover all real inputs.


## A final proof habit

Before trying to prove a universal statement, spend a few minutes trying to break it. When you find a counterexample, keep it beside the repaired theorem and state what it teaches. When you do not find one, say only that the claim survived your tests. The proof still has to explain why no allowed counterexample exists.
`;export{e as default};