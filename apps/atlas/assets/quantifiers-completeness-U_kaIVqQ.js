var e=`---
parent_id: book-proof-safe-real-analysis
chapter_id: quantifiers-completeness
title: "Quantifiers, Suprema, and Completeness"
level: advanced-undergraduate
estimated_minutes: 80
license: CC BY-SA 4.0
---

# Quantifiers, Suprema, and Completeness

Real analysis begins with a change of habit. In calculus, a graph or symbolic calculation often suggests the answer. In analysis, the main question is why the answer must be true and which hypothesis prevents it from failing. That work is controlled by quantifiers and by the completeness of the real numbers.

This chapter assumes comfort with algebra, inequalities, functions, and ordinary calculus notation. It does not assume prior proof-based analysis. Keep a scrap-paper “dependency ledger” beside you: whenever a proof chooses a number, record which earlier quantities it is allowed to depend on.

## 1. A limit is a promise with an order

A sequence \\((a_n)\\) converges to \\(L\\) when, for every \\(\\varepsilon>0\\), there exists a natural number \\(N\\) such that every \\(n\\ge N\\) satisfies \\(|a_n-L|<\\varepsilon\\). Symbolically,

\\(\\forall \\varepsilon>0 \\exists N \\forall n\\ge N: |a_n-L|<\\varepsilon\\).

The order matters. An examiner chooses the requested accuracy \\(\\varepsilon\\); only then may we choose \\(N\\). Once \\(N\\) has been chosen, every later index must work. The statement would be much weaker if we could choose a new \\(N\\) after seeing each troublesome \\(n\\).

**Worked example 1 (a limit threshold).**

**Worked proof.** Let \\(a_n=(3n+1)/(n+2)\\). We claim \\(a_n\\to 3\\). The exact error is

\\(|a_n-3|=|(3n+1-3n-6)/(n+2)|=5/(n+2)\\).

Given \\(\\varepsilon>0\\), it is enough to make \\(5/(n+2)<\\varepsilon\\). Choose any integer \\(N>5/\\varepsilon\\); then \\(n\\ge N\\) gives \\(n+2>N>5/\\varepsilon\\), so the error is below \\(\\varepsilon\\). The important part is not the particular ceiling formula. It is that \\(N\\) depends only on \\(\\varepsilon\\), not on a later value of \\(n\\).

In an exploratory calculation you may work backward from \\(5/(n+2)<\\varepsilon\\) to discover a suitable \\(N\\). In the final proof, present the choices forward: receive \\(\\varepsilon\\), choose \\(N\\), take an arbitrary \\(n\\ge N\\), and verify the inequality.

## 2. Negation reverses the game

To negate a quantified statement, change every \\(\\forall\\) to \\(\\exists\\), every \\(\\exists\\) to \\(\\forall\\), and negate the final condition. Thus \\((a_n)\\) does not converge to \\(L\\) exactly when

\\(\\exists \\varepsilon_0>0 \\forall N \\exists n\\ge N: |a_n-L|\\ge \\varepsilon_0\\).

One early bad term does not disprove convergence. A finite number of terms is irrelevant to the tail. To disprove a proposed limit, one fixed positive tolerance must be violated arbitrarily far along the sequence.

**Worked example 2 (persistent oscillation).**

**Worked disproof.** The sequence \\(a_n=(-1)^n\\) does not converge to \\(1\\). Choose \\(\\varepsilon_0=1\\). Whatever \\(N\\) is proposed, select an odd \\(n\\ge N\\). Then \\(a_n=-1\\), so \\(|a_n-1|=2\\ge 1\\). To show the sequence has no limit at all, suppose it converged to some \\(L\\). Its even subsequence would converge to \\(L\\) but is constantly \\(1\\), so \\(L=1\\); its odd subsequence would also converge to \\(L\\) but is constantly \\(-1\\), so \\(L=-1\\). This contradiction rules out every candidate at once.

Quantifier negation also governs continuity. Continuity of \\(f\\) at \\(a\\) says

\\(\\forall \\varepsilon>0 \\exists \\delta>0 \\forall x: |x-a|<\\delta \\Rightarrow |f(x)-f(a)|<\\varepsilon\\).

Discontinuity at \\(a\\) says some \\(\\varepsilon_0>0\\) defeats every proposed \\(\\delta\\): inside every \\(\\delta\\)-neighborhood there is an \\(x\\) whose output remains at least \\(\\varepsilon_0\\) away. The witness \\(x\\) may depend on \\(\\delta\\); the tolerance \\(\\varepsilon_0\\) may not.

## 3. Upper bounds and the least upper bound

Let \\(S\\) be a subset of the real numbers. A number \\(u\\) is an **upper bound** for \\(S\\) if every \\(s\\in S\\) satisfies \\(s\\le u\\). The set is **bounded above** when at least one upper bound exists. A number \\(L\\) is the **supremum**, written \\(\\sup S\\), when:

1. \\(L\\) is an upper bound of \\(S\\);
2. every number below \\(L\\) fails to be an upper bound.

The second condition is often used in its approximation form: for every \\(\\varepsilon>0\\), there is an \\(s\\in S\\) with \\(L-\\varepsilon<s\\le L\\). Notice that \\(L\\) need not belong to \\(S\\). For \\(S=(0,1)\\), the supremum is \\(1\\), but the set has no maximum.

**Worked supremum proof.** Consider \\(S=\\{x\\in R:x^2<2\\}\\) restricted to nonnegative \\(x\\). We will not yet prove the full existence of \\(\\sqrt{2}\\); instead, suppose \\(L=\\sup S\\) and show why the approximation clause is powerful. For every \\(\\varepsilon>0\\), there is an \\(x\\in S\\) with \\(L-\\varepsilon<x\\). So members of \\(S\\) can be forced as close to \\(L\\) from below as desired. A full argument then rules out \\(L^2<2\\) by nudging \\(L\\) upward while remaining in \\(S\\), and rules out \\(L^2>2\\) by nudging the upper bound downward. Hence \\(L^2=2\\). The existence of \\(L\\) is the completeness step.

The **least-upper-bound property** states that every nonempty subset of \\(R\\) that is bounded above has a real supremum. It is not a consequence of ordered-field algebra alone: the rational numbers have addition, multiplication, and order, but the rational set \\(\\{q\\ge 0:q^2<2\\}\\) has no rational supremum.

## 4. Completeness closes missing points

For an Archimedean ordered field, several central statements are equivalent descriptions of completeness; in particular they describe completeness of \\(R\\):

- every nonempty set bounded above has a supremum;
- every Cauchy sequence converges to a real number;
- every bounded monotone real sequence converges;
- every nested sequence of nonempty closed bounded intervals whose lengths tend to zero has one common point.

“Equivalent” here uses both the ordered-field structure and the Archimedean property. The least-upper-bound property itself implies the Archimedean property: if the positive integers had an upper bound and \\(u\\) were their supremum, some integer would exceed \\(u-1\\), and its successor would exceed \\(u\\). Starting instead from Cauchy completeness requires the Archimedean property as a separate hypothesis. An ordered field can be Cauchy complete without having least upper bounds. The remaining equivalence proofs lie outside this selection; different problems favor different forms.

A sequence is **Cauchy** if its tail terms become close to one another:

\\(\\forall \\varepsilon>0 \\exists N \\forall m,n\\ge N: |a_m-a_n|<\\varepsilon\\).

This definition does not name the limit. It detects that a sequence internally wants to converge. Completeness guarantees that the wanted point is actually present in the ambient space.

For example, rational decimal truncations \\(1, 1.4, 1.41, 1.414, \\ldots\\) of \\(\\sqrt{2}\\) form a Cauchy sequence of rational numbers. They do not converge in \\(Q\\), because the only possible limit squares to \\(2\\) and is irrational. They do converge in \\(R\\). The same sequence can therefore be Cauchy in both spaces but convergent in only one; completeness is a property of the space, not merely of the formula for the sequence.

## 5. Monotone convergence with every hypothesis visible

Suppose \\((a_n)\\) is increasing and bounded above. Let \\(S=\\{a_n:n\\in N\\}\\). The set is nonempty and bounded above, so completeness supplies \\(L=\\sup S\\). Given \\(\\varepsilon>0\\), the number \\(L-\\varepsilon\\) is not an upper bound of \\(S\\); otherwise it would be an upper bound smaller than the least upper bound. Therefore some \\(a_N>L-\\varepsilon\\). Because the sequence is increasing, for every \\(n\\ge N\\),

\\(L-\\varepsilon<a_N\\le a_n\\le L\\).

Consequently \\(|a_n-L|<\\varepsilon\\), so \\(a_n\\to L\\).

The ledger is exact:

- nonempty: there are sequence values to put in \\(S\\);
- bounded above: \\(S\\) is eligible for the least-upper-bound property;
- completeness of \\(R\\): the supremum exists in the space;
- increasing: one good index makes every later index good.

Remove boundedness and \\(a_n=n\\) escapes to infinity. Remove monotonicity and \\(a_n=(-1)^n\\) oscillates despite being bounded. Replace \\(R\\) by \\(Q\\) and an increasing bounded rational approximation to \\(\\sqrt{2}\\) has no rational limit.

## 6. Constructing a limit without guessing it

**Worked example 3 (monotone square-root iteration).**

Define \\(a_1=2\\) and \\(a_{n+1}=(a_n+2/a_n)/2\\). This is Newton's iteration for \\(\\sqrt{2}\\). A calculator suggests convergence, but a proof should not rely on rounded evidence.

First, if \\(a_n>0\\), then \\(a_{n+1}>0\\). Also

\\(a_{n+1}^2-2 = (a_n-2/a_n)^2/4 \\ge 0\\),

so \\(a_{n+1}\\ge \\sqrt{2}\\) once the real square root has been constructed. Next, when \\(a_n\\ge \\sqrt{2}\\), we have \\(2/a_n\\le a_n\\), hence \\(a_{n+1}\\le a_n\\). Thus the sequence is decreasing and bounded below by \\(\\sqrt{2}\\), so monotone convergence gives a limit \\(L\\ge \\sqrt{2}\\). Passing to the limit in the recurrence—justified because addition, division away from zero, and scalar multiplication are continuous—gives \\(L=(L+2/L)/2\\), hence \\(L^2=2\\). Positivity selects \\(L=\\sqrt{2}\\).

A text-only numerical alternative makes the mechanism visible: the first four values are \\(2\\), \\(1.5\\), approximately \\(1.4167\\), and approximately \\(1.4142\\). The proof explains why they cannot cross below \\(\\sqrt{2}\\) and why each step descends; the decimals merely illustrate the two inequalities.

## 7. Common proof failures

- **Choosing \\(N\\) before receiving \\(\\varepsilon\\).** A convergence threshold normally must respond to the requested tolerance.
- **Proving only that many terms are close.** The definition requires every term after \\(N\\).
- **Using a moving tolerance to disprove convergence.** A nonconvergence proof needs one fixed \\(\\varepsilon_0\\) that causes infinitely persistent trouble.
- **Treating a supremum as a maximum.** A supremum is an ambient boundary and may lie outside the set.
- **Calling a sequence Cauchy because consecutive terms approach each other.** The condition \\(|a_{n+1}-a_n|\\to 0\\) is insufficient; the harmonic partial sums have shrinking consecutive gaps but diverge.
- **Invoking monotone convergence without an ambient completeness assumption.** The theorem can fail in an incomplete subspace.

## 8. Exercises with worked answers

### ANA-CH01-E001 — Exercise 1: build a threshold

Prove directly that \\((7n-4)/(2n+3)\\to 7/2\\).

<details><summary>Hint 1</summary>

Subtract the proposed limit using one common denominator.

</details>

<details><summary>Hint 2</summary>

Bound the error by 29/(4n), then choose an integer threshold from the requested tolerance.

</details>

<details><summary>Solution</summary>

#### ANA-CH01-E001 — Worked answer

The error is

\\(|(7n-4)/(2n+3)-7/2|=|14n-8-14n-21|/(4n+6)=29/(4n+6)\\).

Given \\(\\varepsilon>0\\), choose an integer \\(N>29/(4\\varepsilon)\\). If \\(n\\ge N\\), then \\(4n+6>4N>29/\\varepsilon\\), so the error is below \\(\\varepsilon\\).

</details>

### ANA-CH01-E002 — Exercise 2: negate correctly

Write the exact negation of “\\(f_n\\) converges pointwise to \\(f\\) on \\(E\\).”

<details><summary>Hint 1</summary>

Write every quantifier in pointwise convergence before negating.

</details>

<details><summary>Hint 2</summary>

Fix one point and one positive tolerance; arbitrarily late indices may depend on the proposed threshold.

</details>

<details><summary>Solution</summary>

#### ANA-CH01-E002 — Worked answer

Pointwise convergence is \\(\\forall x\\in E \\forall \\varepsilon>0 \\exists N \\forall n\\ge N: |f_n(x)-f(x)|<\\varepsilon\\). Its negation is \\(\\exists x_0\\in E \\exists \\varepsilon_0>0 \\forall N \\exists n\\ge N: |f_n(x_0)-f(x_0)|\\ge \\varepsilon_0\\). One fixed point and one fixed tolerance witness persistent failure.

</details>

### ANA-CH01-E003 — Exercise 3: supremum versus maximum

Find the supremum and determine whether a maximum exists for \\(S=\\{1-1/n:n\\ge 1\\}\\).

<details><summary>Hint 1</summary>

Separate proving an upper bound from proving that it is the least upper bound.

</details>

<details><summary>Hint 2</summary>

For a proposed smaller bound u, make 1/n smaller than 1-u; then check whether any term equals 1.

</details>

<details><summary>Solution</summary>

#### ANA-CH01-E003 — Worked answer

Every term is below \\(1\\), so \\(1\\) is an upper bound. Given \\(\\varepsilon>0\\), choose \\(n>1/\\varepsilon\\); then \\(1-1/n>1-\\varepsilon\\), so no number below \\(1\\) is an upper bound. Therefore \\(\\sup S=1\\). No term equals \\(1\\), so there is no maximum.

</details>

### ANA-CH01-E004 — Exercise 4: a false Cauchy test

Explain why \\(a_n=1+1/2+\\ldots+1/n\\) disproves the claim that \\(|a_{n+1}-a_n|\\to 0\\) implies \\((a_n)\\) is Cauchy.

<details><summary>Hint 1</summary>

Compare two partial sums whose indices differ by a factor of two.

</details>

<details><summary>Hint 2</summary>

The N terms from N+1 through 2N each contribute at least 1/(2N), even though each consecutive gap vanishes.

</details>

<details><summary>Solution</summary>

#### ANA-CH01-E004 — Worked answer

Consecutive gaps equal \\(1/(n+1)\\), which tend to zero. But for any \\(N\\), choose \\(m\\ge 2N\\). Then \\(a_m-a_N\\) includes the terms from \\(N+1\\) through \\(2N\\), each at least \\(1/(2N)\\), so the difference is at least \\(N/(2N)=1/2\\). The Cauchy condition fails for \\(\\varepsilon=1/2\\).

</details>

### ANA-CH01-E005 — Exercise 5: prove a rational limit from the definition

Prove directly that \\(n/(n+1)\\to 1\\). Your threshold must be an integer and its permitted dependencies must be visible.

<details><summary>Hint 1</summary>

Calculate the exact error after subtracting 1.

</details>

<details><summary>Hint 2</summary>

Choose a natural N greater than 1/epsilon, and verify the inequality for every n at least N.

</details>

<details><summary>Solution</summary>

#### ANA-CH01-E005 — Worked answer

Let \\(\\varepsilon>0\\) be given. The error is

\\(|n/(n+1)-1|=1/(n+1)\\).

Choose a natural number \\(N>1/\\varepsilon\\); the Archimedean property guarantees that such an integer exists. If \\(n\\ge N\\), then \\(n+1>N>1/\\varepsilon\\), so \\(1/(n+1)<\\varepsilon\\). Thus every term in the tail beginning at \\(N\\) lies within \\(\\varepsilon\\) of \\(1\\). The choice \\(N\\) depends on \\(\\varepsilon\\) only. A ceiling formula such as \\(N=\\lfloor 1/\\varepsilon \\rfloor+1\\) also works, but the proof needs existence and the inequality, not a unique threshold.

</details>

### ANA-CH01-E006 — Exercise 6: prove uniqueness of sequential limits

Assume \\(a_n\\to L\\) and \\(a_n\\to M\\). Prove \\(L=M\\) without using an unproved rule that a sequence “obviously cannot go two places.”

<details><summary>Hint 1</summary>

Assume the two proposed limits differ and use their positive distance as a scale.

</details>

<details><summary>Hint 2</summary>

Use one third of that distance for both convergence estimates and combine their thresholds by a maximum.

</details>

<details><summary>Solution</summary>

#### ANA-CH01-E006 — Worked answer

Suppose instead that \\(L\\ne M\\), and set \\(\\varepsilon=|L-M|/3>0\\). Convergence to \\(L\\) supplies \\(N_L\\) such that \\(n\\ge N_L\\) implies \\(|a_n-L|<\\varepsilon\\). Convergence to \\(M\\) supplies \\(N_M\\) such that \\(n\\ge N_M\\) implies \\(|a_n-M|<\\varepsilon\\). Choose \\(n\\ge \\max(N_L,N_M)\\). The triangle inequality gives

\\(|L-M|\\le |L-a_n|+|a_n-M|<2\\varepsilon=2|L-M|/3\\),

which is impossible. Hence \\(L=M\\). The maximum combines two tail schedules; choosing only one of them would leave one estimate unavailable.

</details>

### ANA-CH01-E007 — Exercise 7: convergent sequences are bounded

Prove that every convergent real sequence is bounded. Explain why controlling only the tail is enough.

<details><summary>Hint 1</summary>

Use convergence with the single tolerance 1 to bound a tail.

</details>

<details><summary>Hint 2</summary>

Take a maximum of that tail bound and the finitely many earlier absolute values.

</details>

<details><summary>Solution</summary>

#### ANA-CH01-E007 — Worked answer

Suppose \\(a_n\\to L\\). Apply the definition with \\(\\varepsilon=1\\). There is \\(N\\) such that \\(n\\ge N\\) implies \\(|a_n-L|<1\\), hence \\(|a_n|\\le |L|+1\\). Only the finite set of early magnitudes \\(|a_1|,\\ldots,|a_{N-1}|\\) remains. Define

\\[M=\\max(|a_1|,\\ldots,|a_{N-1}|,|L|+1)\\]

(omitting the finite list if \\(N=1\\)). Then \\(|a_n|\\le M\\) for every \\(n\\). Convergence controls a tail; a maximum absorbs finitely many exceptions. It would be invalid to claim that the epsilon-one estimate automatically covers indices below \\(N\\).

</details>

### ANA-CH01-E008 — Exercise 8: identify a supremum-built limit

Let \\(a_n=2-1/n\\). Prove that the sequence is increasing, bounded above, and has supremum \\(2\\). Conclude its limit using monotone convergence.

<details><summary>Hint 1</summary>

Check the sign of the difference between consecutive terms.

</details>

<details><summary>Hint 2</summary>

To establish leastness of the upper bound 2, defeat each u<2 by choosing 1/n<2-u.

</details>

<details><summary>Solution</summary>

#### ANA-CH01-E008 — Worked answer

We have

\\(a_{n+1}-a_n=1/n-1/(n+1)=1/(n(n+1))>0\\),

so the sequence is increasing. Every term is below \\(2\\), so \\(2\\) is an upper bound. If \\(u<2\\), put \\(\\varepsilon=2-u>0\\) and choose \\(n>1/\\varepsilon\\). Then \\(1/n<\\varepsilon\\), so \\(a_n=2-1/n>2-\\varepsilon=u\\). Thus no number below \\(2\\) is an upper bound, and \\(\\sup\\{a_n\\}=2\\). Monotone convergence now gives \\(a_n\\to 2\\). This proof separates algebraic monotonicity, boundedness, completeness, and identification of the supremum.

</details>

### ANA-CH01-E009 — Exercise 9: infimum without a minimum

For \\(S=\\{1/n:n\\in N\\}\\), prove \\(\\inf S=0\\) and prove that \\(S\\) has no minimum equal to its infimum.

<details><summary>Hint 1</summary>

Check first that zero is a lower bound.

</details>

<details><summary>Hint 2</summary>

Any positive proposed lower bound b is defeated by n>1/b; membership decides whether the infimum is attained.

</details>

<details><summary>Solution</summary>

#### ANA-CH01-E009 — Worked answer

Every member of \\(S\\) is positive, so \\(0\\) is a lower bound. Let \\(b>0\\). By the Archimedean property choose \\(n>1/b\\); then \\(0<1/n<b\\). Therefore no positive \\(b\\) is a lower bound, so \\(0\\) is the greatest lower bound. Since \\(1/n>0\\) for every natural \\(n\\), the number \\(0\\) is not in \\(S\\). Consequently the infimum is not a minimum. The approximation clause for an infimum approaches from above: for every \\(\\varepsilon>0\\), some \\(s\\in S\\) satisfies \\(0\\le s<\\varepsilon\\).

</details>

### ANA-CH01-E010 — Exercise 10: derive the Archimedean property from completeness

Assume the positive integers were bounded above in \\(R\\). Use a supremum to obtain a contradiction.

<details><summary>Hint 1</summary>

Let L be the alleged supremum of the natural numbers.

</details>

<details><summary>Hint 2</summary>

Use L-1 to find a natural n>L-1, and remember that n+1 is also natural.

</details>

<details><summary>Solution</summary>

#### ANA-CH01-E010 — Worked answer

Under the false assumption, completeness gives \\(L=\\sup N\\). Since \\(L-1<L\\), the number \\(L-1\\) cannot be an upper bound. Hence some natural number \\(n\\) satisfies \\(n>L-1\\). Adding one gives \\(n+1>L\\). But \\(n+1\\) is also a natural number, contradicting that \\(L\\) is an upper bound of \\(N\\). Therefore \\(N\\) is not bounded above: for every real \\(x\\), there is \\(n\\in N\\) with \\(n>x\\). The proof uses the “anything below a supremum fails to bound” clause, not an assumption that the supremum is itself an integer.

</details>

### ANA-CH01-E011 — Exercise 11: place a rational between two reals

Given real numbers \\(a<b\\), prove that some rational \\(m/n\\) lies strictly between them. You may use the Archimedean property and the existence of a least integer greater than a real number.

<details><summary>Hint 1</summary>

Choose the denominator before choosing the numerator.

</details>

<details><summary>Hint 2</summary>

Make n(b-a)>1 and take the least integer m strictly exceeding na; minimality supplies the other bound.

</details>

<details><summary>Solution</summary>

#### ANA-CH01-E011 — Worked answer

Choose \\(n\\in N\\) so large that \\(n(b-a)>1\\). Let \\(m\\) be the least integer strictly greater than \\(na\\). Then \\(m>na\\), so \\(m/n>a\\). Minimality gives \\(m-1\\le na\\), hence

\\(m\\le na+1<na+n(b-a)=nb\\).

Dividing by positive \\(n\\) yields \\(m/n<b\\). Thus \\(a<m/n<b\\). The mesh choice comes first; the integer choice comes second and depends on that mesh. Merely saying that decimal expansions can be truncated would presuppose representation facts that this structural proof does not need.

</details>

### ANA-CH01-E012 — Exercise 12: negate uniform convergence and build the witnesses

Write the negation of uniform convergence \\(f_n\\to f\\) on a set \\(E\\). Then use it to show that \\(f_n(x)=x^n\\) does not converge uniformly to its pointwise limit on \\([0,1]\\).

<details><summary>Hint 1</summary>

Negate uniform convergence while allowing the bad point to vary with the index.

</details>

<details><summary>Hint 2</summary>

For x^n choose a point below 1 whose nth power is exactly one half.

</details>

<details><summary>Solution</summary>

#### ANA-CH01-E012 — Worked answer

Uniform convergence means

\\(\\forall \\varepsilon>0 \\exists N \\forall n\\ge N \\forall x\\in E: |f_n(x)-f(x)|<\\varepsilon\\).

Its negation is

\\(\\exists \\varepsilon_0>0 \\forall N \\exists n\\ge N \\exists x\\in E: |f_n(x)-f(x)|\\ge \\varepsilon_0\\).

The pointwise limit equals \\(0\\) on \\([0,1)\\) and \\(1\\) at \\(1\\). Fix \\(\\varepsilon_0=1/2\\). Given \\(N\\), take any \\(n\\ge N\\) and choose \\(x_n=2^{-1/n}\\), which lies in \\([0,1)\\). Then \\(f(x_n)=0\\) while \\(f_n(x_n)=1/2\\). Thus the fixed tolerance is violated arbitrarily late. The moving point is allowed to depend on \\(n\\); requiring one fixed bad point would negate pointwise rather than uniform convergence.

</details>

### ANA-CH01-E013 — Exercise 13: negate the Cauchy condition

Write the exact negation of the Cauchy condition. Apply it to the harmonic partial sums \\(s_n=\\sum_{k=1}^n 1/k\\).

<details><summary>Hint 1</summary>

The negation needs two arbitrarily late indices and one fixed tolerance.

</details>

<details><summary>Hint 2</summary>

Choose indices N and 2N and estimate the whole block of reciprocals between them.

</details>

<details><summary>Solution</summary>

#### ANA-CH01-E013 — Worked answer

Failure of the Cauchy property is

\\(\\exists \\varepsilon_0>0 \\forall N \\exists m,n\\ge N: |s_m-s_n|\\ge \\varepsilon_0\\).

Fix \\(\\varepsilon_0=1/2\\). Given \\(N\\), set \\(n=N\\) and \\(m=2N\\). Then

\\(s_{2N}-s_N=\\sum_{k=N+1}^{2N} 1/k \\ge N\\cdot 1/(2N)=1/2\\).

Both selected indices are at least \\(N\\), so the negation is satisfied. This proves that the partial sums are not Cauchy and hence do not converge in \\(R\\). The fact that the consecutive differences \\(s_{n+1}-s_n\\) tend to zero is strictly weaker.

</details>

### ANA-CH01-E014 — Exercise 14: convergence implies Cauchy

Prove in an arbitrary metric space that every convergent sequence is Cauchy. Identify the one place where the triangle inequality enters.

<details><summary>Hint 1</summary>

Compare both tail terms to their common limit.

</details>

<details><summary>Hint 2</summary>

Ask convergence for tolerance epsilon/2 and apply the triangle inequality through that limit.

</details>

<details><summary>Solution</summary>

#### ANA-CH01-E014 — Worked answer

Suppose \\(x_n\\to x\\). Given \\(\\varepsilon>0\\), convergence supplies \\(N\\) such that \\(n\\ge N\\) implies \\(d(x_n,x)<\\varepsilon/2\\). If \\(m,n\\ge N\\), the triangle inequality through the common limit gives

\\(d(x_m,x_n)\\le d(x_m,x)+d(x,x_n)<\\varepsilon/2+\\varepsilon/2=\\varepsilon\\).

Thus the tail terms are mutually close. No completeness assumption is used: convergence already names a point in the space. Completeness is needed for the reverse implication, from internal Cauchy control to existence of a limit.

</details>

### ANA-CH01-E015 — Exercise 15: audit the closed-interval hypothesis

Show that the nested closed intervals \\(I_n=[0,1/n]\\) have exactly one common point. Then replace them by \\(J_n=(0,1/n]\\) and determine what fails.

<details><summary>Hint 1</summary>

Identify all points that could remain below 1/n for every n.

</details>

<details><summary>Hint 2</summary>

Zero survives in the closed intervals; a positive candidate is excluded by the Archimedean property.

</details>

<details><summary>Solution</summary>

#### ANA-CH01-E015 — Worked answer

The intervals \\(I_n\\) are nonempty, closed, bounded, nested, and have lengths tending to zero. The point \\(0\\) belongs to every \\(I_n\\). If \\(x>0\\), choose \\(n>1/x\\); then \\(1/n<x\\), so \\(x\\) is not in \\(I_n\\). Negative points are in none of them. Hence the intersection is exactly \\(\\{0\\}\\).

The sets \\(J_n\\) remain nonempty, bounded, and nested, with shrinking diameters, but their intersection is empty. Any common point would be positive and at most \\(1/n\\) for every \\(n\\), contradicting the Archimedean property; \\(0\\) is excluded. The lost closedness allowed the only possible landing point to escape.

</details>

### ANA-CH01-E016 — Exercise 16: repair a circular epsilon choice

A proposed proof of \\(a_n\\to L\\) says: “For each \\(n\\), choose \\(\\varepsilon=|a_n-L|\\). Then \\(|a_n-L|\\le \\varepsilon\\), so the sequence converges.” Diagnose every relevant failure.

<details><summary>Hint 1</summary>

Check whether the proposed tolerance is independent of the later index.

</details>

<details><summary>Hint 2</summary>

Look separately for an arbitrary positive tolerance, a tail threshold, and the required strict inequality.

</details>

<details><summary>Solution</summary>

#### ANA-CH01-E016 — Worked answer

The convergence game begins with an arbitrary tolerance chosen independently of the later index. The proposed argument reverses that dependence by choosing \\(\\varepsilon\\) after seeing \\(n\\). It proves only the tautology \\(|a_n-L|\\le |a_n-L|\\), uses a non-strict inequality where the definition asks for a strict one, supplies no tail threshold \\(N\\), and never shows that all later indices work. A repaired proof must begin “let \\(\\varepsilon>0\\)” and derive an \\(N(\\varepsilon)\\) from information about the sequence. If no such derivation is available, the proposed limit remains an unsupported guess.

</details>

### ANA-CH01-E017 — Exercise 17: locate incompleteness in the rationals

Let \\(S=\\{q\\in Q:q\\ge 0 \\text{ and } q^2<2\\}\\). Explain why \\(S\\) is nonempty and bounded above in \\(Q\\), yet has no rational supremum.

<details><summary>Hint 1</summary>

Assume a rational supremum r exists and compare its square with 2.

</details>

<details><summary>Hint 2</summary>

Small rational perturbations rule out either strict inequality; equality contradicts the irrationality of the square root.

</details>

<details><summary>Solution</summary>

#### ANA-CH01-E017 — Worked answer

The value \\(0\\) lies in \\(S\\), and \\(2\\) is an upper bound because \\(q\\ge 2\\) implies \\(q^2\\ge 4\\). Suppose a rational \\(r\\) were \\(\\sup_Q S\\). The algebraic nudge argument for square roots shows that \\(r^2<2\\) would permit a slightly larger rational still having square below \\(2\\), contradicting upper-bound status; \\(r^2>2\\) would permit a slightly smaller rational upper bound, contradicting leastness. Thus a rational supremum would satisfy \\(r^2=2\\). But the standard parity argument proves no rational has square \\(2\\). Therefore the bounded rational set has no supremum in \\(Q\\). In \\(R\\), its supremum is \\(\\sqrt{2}\\). The order formula is unchanged; the ambient space determines whether the boundary point exists.

</details>

### ANA-CH01-E018 — Exercise 18: compare local and uniform dependency ledgers

Write the quantifier definitions of continuity and uniform continuity for \\(f:R\\to R\\). Use the pairs \\(x_n=n\\), \\(y_n=n+1/n\\) to show that \\(f(x)=x^2\\) is not uniformly continuous on \\(R\\), even though it is continuous at every point.

<details><summary>Hint 1</summary>

Record whether delta may depend on a base point in each definition.

</details>

<details><summary>Hint 2</summary>

Factor the squared-output difference for the given pairs and compare its lower bound with their vanishing input distance.

</details>

<details><summary>Solution</summary>

#### ANA-CH01-E018 — Worked answer

Continuity at every point says

\\(\\forall a\\in R \\forall \\varepsilon>0 \\exists \\delta>0 \\forall x\\in R: |x-a|<\\delta \\Rightarrow |f(x)-f(a)|<\\varepsilon\\),

where \\(\\delta\\) may depend on both \\(a\\) and \\(\\varepsilon\\). Uniform continuity says

\\(\\forall \\varepsilon>0 \\exists \\delta>0 \\forall x,y\\in R: |x-y|<\\delta \\Rightarrow |f(x)-f(y)|<\\varepsilon\\),

so one \\(\\delta\\) must work everywhere. For the proposed pairs, \\(|x_n-y_n|=1/n\\to 0\\), while

\\(|y_n^2-x_n^2|=(1/n)(2n+1/n)=2+1/n^2\\ge 2\\).

Fix \\(\\varepsilon_0=1\\). Every proposed \\(\\delta>0\\) is defeated by choosing \\(n>1/\\delta\\): the inputs are closer than \\(\\delta\\), but the outputs stay more than one apart. Local continuity survives because a neighborhood size may shrink as the base point grows; uniform continuity forbids that dependence.

</details>

## 9. Where this chapter leads

The next chapter, [Sequences and Compactness](#/item/book-proof-safe-real-analysis?chapter=sequences-compactness), turns completeness into a method for extracting convergent behavior and preventing limits from escaping a domain. Later, [Uniform Convergence](#/item/book-proof-safe-real-analysis?chapter=uniform-convergence) will reuse the same quantifier discipline: the crucial issue will be whether one threshold works for every point.

Return to the [book overview](#/item/book-proof-safe-real-analysis) whenever you want the theorem-and-counterexample map rather than a linear reading route.

## Summary

Limit proofs require one tail threshold chosen after the tolerance; their negations require one fixed tolerance defeated arbitrarily late. Suprema combine an upper-bound assertion with approximation from below. Completeness turns bounded monotone behavior into an actual real limit, while examples in the rational field show why the ambient space matters. These quantifier and completeness tools will govern the sequence and compactness arguments that follow.
`;export{e as default};