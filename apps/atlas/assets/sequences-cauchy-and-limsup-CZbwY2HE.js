var e=`---
parent_id: book-proof-safe-real-analysis
chapter_id: sequences-cauchy-and-limsup
title: "Sequences, Cauchy Control, and Persistent Tail Behavior"
level: advanced-undergraduate
estimated_minutes: 190
license: CC BY-SA 4.0
---

# Sequences, Cauchy Control, and Persistent Tail Behavior

A sequence is the first genuinely infinite object in analysis. Its entries arrive one at a time, but convergence makes a claim about the entire unending tail. The phrase “the terms get close to \\(L\\)” is not enough: early terms do not matter, every requested accuracy must eventually be met, and every later term must obey the same threshold.

This chapter develops four complementary ways to control a real sequence:

- compare every sufficiently late term with a proposed limit;
- trap the tail between two simpler sequences;
- use order and boundedness to construct a limit;
- compare late terms with one another when the limit is not yet known.

The final sections explain \\(\\limsup\\) and \\(\\liminf\\), which retain meaningful information even when a bounded sequence does not converge. These ideas supply the missing foundation for infinite series, compactness, numerical stopping rules, and later convergence theorems.

The chapter assumes the Archimedean property and least-upper-bound property from [Ordered Fields and the Architecture of the Real Numbers](#/item/book-proof-safe-real-analysis?chapter=ordered-fields-and-number-systems), together with the quantifier habits of [Quantifiers, Suprema, and Completeness](#/item/book-proof-safe-real-analysis?chapter=quantifiers-completeness).

## 1. A limit is a uniform promise about a tail

A real sequence is a function \\(a:N\\to R\\); we write its value at \\(n\\) as \\(a_n\\). The statement

\\[a_n\\to L\\]

means

\\(for every \\varepsilon>0, there exists N\\in N such that n\\ge N implies |a_n-L|<\\varepsilon\\).

The index threshold \\(N\\) may depend on the requested tolerance \\(\\varepsilon\\). It may also depend on the particular sequence and proposed limit. Once chosen, however, it must work for **every** \\(n\\ge N\\). A few good terms are not enough.

### Worked example 1 (a reciprocal threshold)

### Worked proof: \\(1/n\\to 0\\)

Let \\(\\varepsilon>0\\). By the Archimedean property, choose a natural number \\(N>1/\\varepsilon\\). If \\(n\\ge N\\), then

\\(0<1/n\\le 1/N<\\varepsilon\\),

so \\(|1/n-0|<\\varepsilon\\). This proves convergence.

The proof was discovered by solving the desired inequality \\(1/n<\\varepsilon\\) for \\(n\\). The polished proof presents the choices in their legal logical order: receive \\(\\varepsilon\\), choose \\(N\\), then verify every later index.

### Worked example 2 (a displaced limit)

### Worked proof with a displaced limit

For \\(a_n=(3n-2)/(n+4)\\), divide or subtract the proposed limit:

\\(|(3n-2)/(n+4)-3|=14/(n+4)\\le 14/n\\).

Given \\(\\varepsilon>0\\), choose \\(N>14/\\varepsilon\\). Then \\(n\\ge N\\) makes the last expression smaller than \\(\\varepsilon\\), proving \\(a_n\\to 3\\).

A useful proof-search habit is to work backward from \\(|a_n-L|<\\varepsilon\\), find a sufficient condition on \\(n\\), and then rewrite the proof forward. The backward scratch work discovers \\(N\\); it is not itself the quantified proof.

## 2. Negating convergence without reversing the wrong clause

The statement that \\((a_n)\\) does **not** converge to \\(L\\) is

\\(there exists \\varepsilon_0>0 such that for every N there exists n\\ge N with |a_n-L|\\ge \\varepsilon_0\\).

The same positive obstruction \\(\\varepsilon_0\\) must recur arbitrarily far out. Exhibiting one remote bad term is insufficient because a convergence threshold could lie beyond it.

For \\(a_n=(-1)^n\\), the sequence does not converge to \\(1\\). Take \\(\\varepsilon_0=1\\). Given any \\(N\\), choose an odd \\(n\\ge N\\); then \\(a_n=-1\\) and \\(|a_n-1|=2\\ge 1\\).

To prove that \\((-1)^n\\) has no limit at all, let \\(L\\) be arbitrary. If both \\(|1-L|<1\\) and \\(|-1-L|<1\\) held, the triangle inequality would imply

\\(2=|1-(-1)|\\le |1-L|+|L-(-1)|<2\\),

which is impossible. Thus at least one parity stays at distance at least \\(1\\) from \\(L\\), and that parity occurs beyond every threshold.

### Eventual properties

A property \\(P(n)\\) holds **eventually** if some \\(N\\) makes it true for every \\(n\\ge N\\). Convergence is an eventual assertion at each accuracy. Changing, deleting, or inserting finitely many terms cannot change whether a sequence converges or what its limit is. This is why \\(a_1\\) never appears in a correct large-\\(n\\) argument except as part of a harmless finite exception.

## 3. Limits are unique and convergent sequences are bounded

Two elementary theorems prevent many later ambiguities.

**Theorem 3.1 (Uniqueness).** A real sequence has at most one limit.

Suppose \\(a_n\\to L\\) and \\(a_n\\to M\\). If \\(L\\ne M\\), set \\(\\varepsilon=|L-M|/3\\). Eventually both \\(|a_n-L|<\\varepsilon\\) and \\(|a_n-M|<\\varepsilon\\). For such an index,

\\(|L-M|\\le |L-a_n|+|a_n-M|<2|L-M|/3\\),

a contradiction.

The two convergence thresholds may differ. Taking their maximum produces a common tail on which both estimates hold. This “maximum of finitely many thresholds” maneuver recurs throughout analysis.

**Theorem 3.2 (Boundedness).** Every convergent real sequence is bounded.

If \\(a_n\\to L\\), choose a threshold \\(N\\) for \\(\\varepsilon=1\\). Then \\(|a_n|\\le |L|+1\\) for \\(n\\ge N\\). The finite collection \\(|a_1|,\\ldots,|a_{N-1}|\\) has a maximum. The larger of that maximum and \\(|L|+1\\) bounds the whole sequence.

The converse fails: \\((-1)^n\\) is bounded but divergent. Boundedness prevents escape to infinity; it does not prevent oscillation.

## 4. Algebra of limits is finite-error bookkeeping

Suppose \\(a_n\\to A\\) and \\(b_n\\to B\\). Then

- \\(a_n+b_n\\to A+B\\);
- \\(c a_n\\to cA\\) for every constant \\(c\\);
- \\(a_n b_n\\to AB\\);
- if \\(B\\ne 0\\), then \\(a_n/b_n\\to A/B\\), provided the quotients are eventually defined.

The sum proof splits an error budget. Given \\(\\varepsilon>0\\), make \\(|a_n-A|<\\varepsilon/2\\) and \\(|b_n-B|<\\varepsilon/2\\) on a common tail. Then

\\(|(a_n+b_n)-(A+B)|\\le |a_n-A|+|b_n-B|<\\varepsilon\\).

The product proof needs boundedness, not wishful symbol substitution:

\\(|a_n b_n-AB|\\le |a_n||b_n-B|+|B||a_n-A|\\).

Because \\((a_n)\\) converges, it is bounded, say \\(|a_n|\\le M\\). It is then enough to make the two errors smaller than \\(\\varepsilon/[2(M+|B|+1)]\\). The added \\(1\\) keeps the denominator positive even in degenerate cases.

For reciprocals, \\(b_n\\to B\\ne 0\\) implies \\(|b_n|\\ge |B|/2\\) eventually. Indeed, require \\(|b_n-B|<|B|/2\\) and use the reverse triangle inequality. On that tail,

\\(|1/b_n-1/B|=|b_n-B|/(|b_n||B|)\\le 2|b_n-B|/|B|^2\\).

The condition \\(B\\ne 0\\) is doing real work. Although \\(1/n\\to 0\\), its reciprocal sequence \\(n\\) does not converge in \\(R\\).

## 5. Order passes to limits—with strictness warnings

If \\(a_n\\le b_n\\) eventually and \\(a_n\\to A\\), \\(b_n\\to B\\), then \\(A\\le B\\). If instead \\(A>B\\), choose \\(\\varepsilon=(A-B)/3\\). Eventually \\(a_n>A-\\varepsilon\\) and \\(b_n<B+\\varepsilon\\), which would give \\(a_n>b_n\\), contradicting the eventual order.

Strict inequalities need care. From \\(a_n<b_n\\) for every \\(n\\), one may conclude only \\(A\\le B\\), not \\(A<B\\). The sequences \\(a_n=0\\) and \\(b_n=1/n\\) have equal limits.

**Theorem 3.3 (Squeeze).** If \\(a_n\\le b_n\\le c_n\\) eventually and both outer sequences tend to \\(L\\), then \\(b_n\\to L\\).

For example,

\\(0\\le n/(n^2+1)\\le 1/n\\),

so \\(n/(n^2+1)\\to 0\\). The squeeze theorem is especially effective when signs or oscillations make direct algebra awkward: since \\(|\\sin n|\\le 1\\),

\\(|\\sin n/n|\\le 1/n\\to 0\\),

and therefore \\(\\sin n/n\\to 0\\).

## 6. Monotone convergence constructs a limit from order

A sequence is nondecreasing if \\(a_n\\le a_{n+1}\\) and nonincreasing if the reverse inequality holds. It is monotone if it has either form.

**Theorem 3.4 (Monotone convergence).** Every nondecreasing sequence that is bounded above converges. Every nonincreasing sequence that is bounded below converges.

For the first statement, let \\(S=\\{a_n:n\\in N\\}\\) and set \\(L=\\sup S\\). Given \\(\\varepsilon>0\\), \\(L-\\varepsilon\\) is not an upper bound, so some \\(a_N>L-\\varepsilon\\). Monotonicity then gives

\\[L-\\varepsilon<a_N\\le a_n\\le L\\]

for every \\(n\\ge N\\). Thus \\(|a_n-L|<\\varepsilon\\).

The proof identifies the limit: an increasing bounded sequence converges to the supremum of its range. Completeness enters through the existence of that supremum. Over the rational numbers, an increasing bounded rational sequence may approach an irrational gap.

### Worked recurrence: an iterative square root

Let \\(x_1=2\\) and

\\(x_{n+1}=(x_n+2/x_n)/2\\).

All terms are positive. Moreover,

\\(x_{n+1}-\\sqrt{2}=(x_n-\\sqrt{2})^2/(2x_n)\\ge 0\\),

so \\(x_n\\ge \\sqrt{2}\\) for \\(n\\ge 2\\). Also

\\[x_{n+1}-x_n=(2-x_n^2)/(2x_n)\\le 0\\]

once \\(x_n\\ge \\sqrt{2}\\). Hence the sequence decreases and is bounded below by \\(\\sqrt{2}\\), so it converges to some \\(L\\ge \\sqrt{2}\\). Passing to the limit in the recurrence is legal because \\(L>0\\) and the algebra-of-limits theorem applies:

\\(L=(L+2/L)/2\\),

which yields \\(L^2=2\\) and therefore \\(L=\\sqrt{2}\\).

The recurrence equation alone does not prove convergence. First establish invariant bounds and monotonicity; only then identify the limit.

## 7. Cauchy control removes the unknown destination

A sequence \\((a_n)\\) is **Cauchy** if

\\(for every \\varepsilon>0, there exists N such that m,n\\ge N implies |a_m-a_n|<\\varepsilon\\).

Instead of comparing late terms with a known \\(L\\), a Cauchy estimate compares them with one another. This is useful when an approximation scheme produces candidates but the limiting object has not yet been constructed.

Every convergent sequence is Cauchy. If \\(a_n\\to L\\), make both \\(|a_m-L|\\) and \\(|a_n-L|\\) smaller than \\(\\varepsilon/2\\); the triangle inequality gives \\(|a_m-a_n|<\\varepsilon\\).

The converse is the completeness theorem for \\(R\\): every Cauchy real sequence converges to a real number. Here is a proof architecture that displays its ingredients.

1. A Cauchy sequence is bounded. Use the Cauchy condition with \\(\\varepsilon=1\\) to bound a tail near one chosen term, then absorb the finite prefix.
2. A bounded real sequence has a convergent subsequence by Bolzano–Weierstrass.
3. If \\(a_{n_k}\\to L\\), then Cauchy control pulls the entire sequence toward that same \\(L\\): choose a late subsequence term close to \\(L\\), and compare every sufficiently late \\(a_n\\) with it.

Step 2 ultimately rests on completeness as well. In an incomplete space, a Cauchy sequence can point toward a missing limit.

### A quantitative Cauchy estimate

Suppose successive approximations satisfy

\\(|a_{n+1}-a_n|\\le 2^{-n}\\).

For \\(m>n\\), the triangle inequality gives

\\(|a_m-a_n|\\le \\sum_{k=n}^{m-1} |a_{k+1}-a_k|\\le \\sum_{k=n}^\\infty2^{-k}=2^{1-n}\\).

The bound is independent of \\(m\\), so the sequence is Cauchy. Completeness produces a limit \\(L\\), and letting \\(m\\to \\infty\\) in the estimate gives the certified remainder

\\(|L-a_n|\\le 2^{1-n}\\).

This is stronger than merely knowing that a limit exists: it tells us how much accuracy the \\(n\\)th approximation guarantees.

## 8. Rates and stopping rules are extra information

The definition \\(a_n\\to L\\) says that a threshold exists for each tolerance; it need not supply a usable formula. A **rate of convergence** gives an explicit bound

\\(|a_n-L|\\le r_n\\), where \\(r_n\\to 0\\).

To guarantee error at most \\(\\tau\\), solve \\(r_n\\le \\tau\\). For \\(r_n=3/n\\), one may choose \\(n\\ge 3/\\tau\\). For \\(r_n=2^{-n}\\), logarithmic growth of \\(n\\) suffices.

Do not confuse a small update with a small error. The observation \\(|a_{n+1}-a_n|<10^{-8}\\) does not by itself imply that \\(a_n\\) is close to the limit. The harmonic partial sums have updates \\(1/(n+1)\\to 0\\) but diverge. A valid stopping rule needs a tail theorem, contraction estimate, monotone enclosure, residual-to-error bound, or another argument connecting computable data to the unknown error.

### Relative error near zero

The ratio \\(|a_n-L|/|L|\\) is meaningless when \\(L=0\\) and unstable when \\(L\\) is tiny. Absolute error is the correct default there. In numerical work, a mixed criterion such as

\\[|a_n-L|\\le \\tau_abs+\\tau_rel|L|\\]

separates the scale-independent floor from the scale-dependent allowance. If \\(L\\) is unknown, a justified surrogate or residual estimate must replace it; silently substituting \\(a_n\\) changes the claim.

## 9. Infinite limits and the extended real line

We write \\(a_n\\to +\\infty\\) when

\\(for every M\\in R, there exists N such that n\\ge N implies a_n>M\\).

This is not convergence to a real number. The symbol \\(+\\infty\\) records eventual escape beyond every finite bound. Similarly, \\(a_n\\to -\\infty\\) means eventual descent below every real threshold.

For \\(a_n=n^2-3n\\), given \\(M\\), choose \\(N\\) large enough that \\(n\\ge N\\) implies \\(n^2/2>M\\) and \\(n\\ge 6\\). Then \\(n^2-3n\\ge n^2/2>M\\), proving divergence to \\(+\\infty\\).

Arithmetic with extended symbols requires hypotheses. From \\(a_n\\to +\\infty\\) and \\(b_n\\to +\\infty\\), the sum tends to \\(+\\infty\\); from \\(a_n\\to +\\infty\\) and \\(b_n\\to -\\infty\\), the form \\(a_n+b_n\\) is indeterminate. Examples include

- \\(n+(-n)=0\\);
- \\(n+(-n+\\sqrt{n})=\\sqrt{n}\\to +\\infty\\);
- \\(n+(-2n)=-n\\to -\\infty\\).

An “indeterminate form” is not an answer. It means the displayed information alone does not determine the outcome.

## 10. Tail suprema and infima

Let \\((a_n)\\) be bounded. Define

\\(s_n=\\sup\\{a_k:k\\ge n\\}\\) and \\(t_n=\\inf\\{a_k:k\\ge n\\}\\).

As the tail loses terms, its supremum cannot increase and its infimum cannot decrease. Thus \\((s_n)\\) is decreasing and bounded below, while \\((t_n)\\) is increasing and bounded above. Both converge by monotone convergence. We define

\\(\\limsup a_n=\\lim s_n\\) and \\(\\liminf a_n=\\lim t_n\\).

Equivalently,

\\(\\limsup a_n=\\inf_n \\sup_{k\\ge n} a_k\\),

\\(\\liminf a_n=\\sup_n \\inf_{k\\ge n} a_k\\).

The order of operations matters. The tail supremum asks how high the sequence can still reach after a cutoff; taking the infimum over cutoffs discards finite early spikes. Thus limsup records the largest value approached persistently, not necessarily a value ever attained.

### Worked example

Let \\(a_n=(-1)^n+1/n\\). Every tail contains even terms just above \\(1\\) and odd terms just above \\(-1\\). The largest persistent tail behavior tends to \\(1\\), while the smallest tends to \\(-1\\). Hence

\\(\\limsup a_n=1\\) and \\(\\liminf a_n=-1\\).

For \\(b_n=1+(-1)^n/n\\), both quantities equal \\(1\\); the oscillation shrinks, and the sequence converges.

**Convergence criterion.** A bounded real sequence converges exactly when its limsup and liminf are equal. If both equal \\(L\\), then eventually the tail infimum is above \\(L-\\varepsilon\\) and the tail supremum is below \\(L+\\varepsilon\\), trapping every late term. Conversely, ordinary convergence forces every tail eventually into every neighborhood of \\(L\\).

### Subsequence interpretation

For a bounded real sequence, \\(\\limsup a_n\\) is the greatest subsequential limit, and \\(\\liminf a_n\\) is the least. To construct a subsequence approaching the limsup \\(S\\), set \\(m_j=\\max\\{j,n_{j-1}+1\\}\\), with \\(n_0=0\\). By the defining supremum property of \\(s_{m_j}=\\sup_{k\\ge m_j}a_k\\), choose \\(n_j\\ge m_j\\) such that

\\(s_{m_j}-1/j<a_{n_j}\\le s_{m_j}.\\)

Then \\((n_j)\\) is strictly increasing, \\(m_j\\to\\infty\\), and \\(s_{m_j}\\to S\\); the squeeze theorem gives \\(a_{n_j}\\to S\\). Every subsequential limit is at most every sufficiently early tail supremum, hence at most \\(S\\).

This interpretation connects tail bounds with compactness: Bolzano–Weierstrass ensures subsequential limits exist, while limsup and liminf identify their extremes.

## 11. A sequence proof audit

Before accepting a limit argument, ask:

1. Is the target a finite real limit, an infinite limit, or only a cluster value?
2. Does the threshold depend only on quantities allowed to precede it?
3. Does the estimate control every term in a tail, or merely a chosen subsequence?
4. If limit algebra is used, were boundedness and a nonzero denominator established where needed?
5. If a recurrence is involved, was convergence proved before the limiting equation was solved?
6. If computation stops on small updates, what theorem converts update size into solution error?
7. If limsup appears, are the supremum and the tail cutoff taken in the correct order?

These checks catch common but subtle mistakes: solving a fixed-point equation without proving attraction, proving one good subsequence and claiming full convergence, or using floating-point stabilization as a mathematical certificate.

## 12. Exercises with complete solutions

### ANA-CH03-E001 — Exercise 1: Build a threshold

Prove directly that \\((5n+7)/(2n-1)\\to 5/2\\).

<details><summary>Hint 1</summary>

Subtract 5/2 and combine the fractions.

</details>

<details><summary>Hint 2</summary>

For n at least 1, use 2n-1 at least n to bound the exact error by 19/(2n).

</details>

<details><summary>Solution</summary>

#### ANA-CH03-E001 — Solution

For \\(n\\ge 1\\),

\\(|(5n+7)/(2n-1)-5/2|=|10n+14-10n+5|/[2(2n-1)]=19/[2(2n-1)]\\le 19/(2n)\\).

Given \\(\\varepsilon>0\\), choose a natural number \\(N>19/(2\\varepsilon)\\). Then every \\(n\\ge N\\) gives the desired error below \\(\\varepsilon\\).

</details>

### ANA-CH03-E002 — Exercise 2: A square-root rate

Prove \\(\\sqrt{n^2+n}-n\\to 1/2\\) without using a Taylor series.

<details><summary>Hint 1</summary>

Multiply the difference of roots by its conjugate.

</details>

<details><summary>Hint 2</summary>

Divide numerator and denominator by n to expose 1/(sqrt(1+1/n)+1).

</details>

<details><summary>Solution</summary>

#### ANA-CH03-E002 — Solution

Rationalize:

\\(\\sqrt{n^2+n}-n=n/[\\sqrt{n^2+n}+n]=1/[\\sqrt{1+1/n}+1]\\).

Since \\(1/n\\to 0\\), continuity of the square-root function and quotient limit law give the limit \\(1/(1+1)=1/2\\). For a direct error estimate, subtract \\(1/2\\), rationalize again, and use \\(\\sqrt{1+1/n}\\ge 1\\) to obtain an error at most \\(1/(8n)\\).

</details>

### ANA-CH03-E003 — Exercise 3: Negate a proposed limit

Show that \\(a_n=\\cos(n\\pi/2)\\) does not converge to \\(0\\).

<details><summary>Hint 1</summary>

Find an infinite residue class on which the cosine equals 1.

</details>

<details><summary>Hint 2</summary>

Fix tolerance one half, and select a multiple of four beyond every proposed threshold.

</details>

<details><summary>Solution</summary>

#### ANA-CH03-E003 — Solution

Choose \\(\\varepsilon_0=1/2\\). For every \\(N\\), select a multiple of four \\(n\\ge N\\). Then \\(a_n=1\\), so \\(|a_n-0|=1\\ge \\varepsilon_0\\). The zeros at odd indices do not help because convergence must control every sufficiently late index.

</details>

### ANA-CH03-E004 — Exercise 4: Finite changes

Suppose \\(a_n=b_n\\) for every \\(n\\ge 100\\) and \\(a_n\\to L\\). Prove \\(b_n\\to L\\).

<details><summary>Hint 1</summary>

Combine the convergence threshold with the first index at which the tails agree.

</details>

<details><summary>Hint 2</summary>

Use the larger of that threshold and 100.

</details>

<details><summary>Solution</summary>

#### ANA-CH03-E004 — Solution

Given \\(\\varepsilon>0\\), choose \\(N_1\\) so that \\(n\\ge N_1\\) implies \\(|a_n-L|<\\varepsilon\\). Set \\(N=\\max(N_1,100)\\). For \\(n\\ge N\\), equality of the tails gives \\(|b_n-L|=|a_n-L|<\\varepsilon\\).

</details>

### ANA-CH03-E005 — Exercise 5: Use uniqueness

Assume \\(a_{2n}\\to A\\) and \\(a_{2n+1}\\to A\\) as positive integers \\(n\\to\\infty\\). Prove \\(a_n\\to A\\); the omitted first term does not affect convergence.

<details><summary>Hint 1</summary>

Obtain one threshold for each parity subsequence.

</details>

<details><summary>Hint 2</summary>

Translate those subsequence indices into a single threshold for the original sequence.

</details>

<details><summary>Solution</summary>

#### ANA-CH03-E005 — Solution

Given \\(\\varepsilon>0\\), choose \\(N_e\\) and \\(N_o\\) controlling the even and odd subsequences. If \\(n\\ge 2 \\max(N_e,N_o)+1\\), then its parity representation uses a subsequence index at least the corresponding threshold. Hence \\(|a_n-A|<\\varepsilon\\) in either case.

</details>

### ANA-CH03-E006 — Exercise 6: Product proof dependency

Explain why the statement “\\(a_n\\to A\\), so \\((a_n)\\) is bounded” is needed in the standard proof that \\(a_n b_n\\to AB\\).

<details><summary>Hint 1</summary>

Expand the product error by adding and subtracting a_n B.

</details>

<details><summary>Hint 2</summary>

Identify the varying multiplier of b_n-B and replace it by a constant bound.

</details>

<details><summary>Solution</summary>

#### ANA-CH03-E006 — Solution

The decomposition

\\[|a_n b_n-AB|\\le |a_n||b_n-B|+|B||a_n-A|\\]

contains the varying factor \\(|a_n|\\). Boundedness replaces it by one constant \\(M\\), allowing a single threshold for \\(b_n-B\\). Without controlling that coefficient, making \\(b_n-B\\) small would not necessarily make the product term small.

</details>

### ANA-CH03-E007 — Exercise 7: Eventual denominator safety

If \\(b_n\\to -3\\), prove that \\(1/b_n\\) is eventually defined and bounded in magnitude by \\(2/3\\).

<details><summary>Hint 1</summary>

Keep b_n a positive distance from zero using its limit -3.

</details>

<details><summary>Hint 2</summary>

Request error below 3/2 and use the reverse triangle inequality before taking reciprocals.

</details>

<details><summary>Solution</summary>

#### ANA-CH03-E007 — Solution

Choose a threshold such that \\(|b_n+3|<3/2\\). Then the reverse triangle inequality gives \\(|b_n|>3-3/2=3/2\\). Thus \\(b_n\\ne 0\\) and \\(|1/b_n|<2/3\\) on that tail.

</details>

### ANA-CH03-E008 — Exercise 8: Squeeze an oscillation

Prove \\((-1)^n/(n+1)\\to 0\\).

<details><summary>Hint 1</summary>

Take absolute values to remove the alternating sign.

</details>

<details><summary>Hint 2</summary>

The resulting magnitude is 1/(n+1), which tends to zero.

</details>

<details><summary>Solution</summary>

#### ANA-CH03-E008 — Solution

Its absolute value is \\(1/(n+1)\\), which tends to zero. Therefore

\\(-1/(n+1)\\le (-1)^n/(n+1)\\le 1/(n+1)\\),

and both outer sequences tend to zero. The squeeze theorem finishes the proof.

</details>

### ANA-CH03-E009 — Exercise 9: Strict order can disappear

Give sequences with \\(a_n<b_n\\) for every \\(n\\) but equal limits.

<details><summary>Hint 1</summary>

Keep one sequence constant at the proposed common limit.

</details>

<details><summary>Hint 2</summary>

Let the other approach it from strictly above, for example through positive reciprocal gaps.

</details>

<details><summary>Solution</summary>

#### ANA-CH03-E009 — Solution

Take \\(a_n=0\\) and \\(b_n=1/n\\). The inequality is strict at every positive index, yet both sequences tend to zero. Limit passage preserves non-strict order only.

</details>

### ANA-CH03-E010 — Exercise 10: Monotone but divergent

Give a monotone sequence that does not converge in \\(R\\) and identify the missing hypothesis.

<details><summary>Hint 1</summary>

Consider a simple increasing unbounded sequence.

</details>

<details><summary>Hint 2</summary>

Check which hypothesis of monotone convergence is missing for a_n=n.

</details>

<details><summary>Solution</summary>

#### ANA-CH03-E010 — Solution

The sequence \\(a_n=n\\) is increasing but unbounded above. It diverges to \\(+\\infty\\), so the boundedness hypothesis in monotone convergence cannot be removed.

</details>

### ANA-CH03-E011 — Exercise 11: A bounded recurrence

Let \\(a_1=0\\) and \\(a_{n+1}=\\sqrt{2+a_n}\\). Prove that \\((a_n)\\) converges and find its limit.

<details><summary>Hint 1</summary>

Find an interval preserved by the recurrence before solving any limit equation.

</details>

<details><summary>Hint 2</summary>

Prove monotonicity inductively, apply bounded monotone convergence, then retain only a fixed point inside that interval.

</details>

<details><summary>Solution</summary>

#### ANA-CH03-E011 — Solution

Inductively, \\(0\\le a_n\\le 2\\): if \\(a_n\\le 2\\), then \\(a_{n+1}\\le 2\\). The square-root function is increasing. Since \\(a_2\\ge a_1\\), induction on the recurrence shows \\(a_{n+1}\\ge a_n\\). Thus the sequence is increasing and bounded above, so it converges to some \\(L\\in [0,2]\\). Passing to the limit gives \\(L=\\sqrt{2+L}\\), hence \\((L-2)(L+1)=0\\); the interval restriction selects \\(L=2\\).

</details>

### ANA-CH03-E012 — Exercise 12: Fixed points are not convergence proofs

The recurrence \\(x_{n+1}=2x_n\\) has fixed point \\(0\\). Explain why solving the fixed-point equation does not prove convergence to \\(0\\).

<details><summary>Hint 1</summary>

Write the explicit iterate in terms of x_1.

</details>

<details><summary>Hint 2</summary>

A nonzero initial point produces geometric growth despite the existence of a fixed point.

</details>

<details><summary>Solution</summary>

#### ANA-CH03-E012 — Solution

If \\(x_1\\ne 0\\), then \\(x_n=2^{n-1}x_1\\), whose magnitude tends to infinity. The equation \\(L=2L\\) only says that any finite limit would have to be zero; it does not show a limit exists or that the iteration approaches the fixed point.

</details>

### ANA-CH03-E013 — Exercise 13: Cauchy implies bounded

Prove directly that every Cauchy real sequence is bounded.

<details><summary>Hint 1</summary>

Use the Cauchy condition at tolerance 1.

</details>

<details><summary>Hint 2</summary>

Compare the whole tail with its first term and absorb the finite prefix by a maximum.

</details>

<details><summary>Solution</summary>

#### ANA-CH03-E013 — Solution

Choose \\(N\\) so that \\(m,n\\ge N\\) implies \\(|a_m-a_n|<1\\). Fix \\(n=N\\). Then \\(|a_m|\\le |a_N|+1\\) for all \\(m\\ge N\\). The finite prefix has a maximum absolute value. The larger of it and \\(|a_N|+1\\) bounds every term.

</details>

### ANA-CH03-E014 — Exercise 14: A geometric increment certificate

Suppose \\(|a_{n+1}-a_n|\\le 3^{-n}\\) for all \\(n\\). Prove \\((a_n)\\) converges and bound \\(|L-a_n|\\).

<details><summary>Hint 1</summary>

Telescope the difference between two distant terms.

</details>

<details><summary>Hint 2</summary>

Bound the resulting sum by the infinite geometric tail, use completeness, then send the later index to infinity.

</details>

<details><summary>Solution</summary>

#### ANA-CH03-E014 — Solution

For \\(m>n\\),

\\(|a_m-a_n|\\le \\sum_{k=n}^{m-1}3^{-k}\\le \\sum_{k=n}^\\infty3^{-k}=3^{1-n}/2\\).

The bound tends to zero, so the sequence is Cauchy and therefore converges in \\(R\\). Letting \\(m\\to \\infty\\) yields \\(|L-a_n|\\le 3^{1-n}/2\\).

</details>

### ANA-CH03-E015 — Exercise 15: Small updates are insufficient

Find a sequence with \\(a_{n+1}-a_n\\to 0\\) that does not converge to a finite real number.

<details><summary>Hint 1</summary>

Look for an unbounded sequence whose increments can be rationalized.

</details>

<details><summary>Hint 2</summary>

Try sqrt(n); its successive difference is a reciprocal of a sum of roots.

</details>

<details><summary>Solution</summary>

#### ANA-CH03-E015 — Solution

Let \\(a_n=\\sqrt{n}\\). Then

\\(a_{n+1}-a_n=1/(\\sqrt{n+1}+\\sqrt{n})\\to 0\\),

but \\(a_n\\to +\\infty\\). Therefore update size alone is not an error certificate.

</details>

### ANA-CH03-E016 — Exercise 16: Infinite-limit arithmetic

Prove that if \\(a_n\\to +\\infty\\) and \\(b_n\\) is bounded below, then \\(a_n+b_n\\to +\\infty\\).

<details><summary>Hint 1</summary>

Name a single lower bound C for every b_n.

</details>

<details><summary>Hint 2</summary>

Given an output threshold M, ask a_n to exceed M-C.

</details>

<details><summary>Solution</summary>

#### ANA-CH03-E016 — Solution

Choose \\(C\\) with \\(b_n\\ge C\\) for all \\(n\\). Given \\(M\\), use \\(a_n\\to +\\infty\\) to find \\(N\\) such that \\(n\\ge N\\) implies \\(a_n>M-C\\). Then \\(a_n+b_n>M-C+C=M\\).

</details>

### ANA-CH03-E017 — Exercise 17: Tail extrema of a periodic sequence

Find the limsup and liminf of the repeating sequence \\(2,-1,0,2,-1,0,\\ldots\\).

<details><summary>Hint 1</summary>

Determine which values occur in every tail.

</details>

<details><summary>Hint 2</summary>

Tail supremum and infimum do not change when all periodic values continue to recur.

</details>

<details><summary>Solution</summary>

#### ANA-CH03-E017 — Solution

Every tail contains all three values. Thus every tail supremum is \\(2\\) and every tail infimum is \\(-1\\). Their limits are \\(2\\) and \\(-1\\), respectively.

</details>

### ANA-CH03-E018 — Exercise 18: A shrinking oscillation

Compute \\(\\limsup a_n\\) and \\(\\liminf a_n\\) for \\(a_n=4+(-1)^n/n\\).

<details><summary>Hint 1</summary>

Estimate the absolute distance to 4.

</details>

<details><summary>Hint 2</summary>

Once the sequence is shown convergent, use the equality of limsup and liminf for convergent sequences.

</details>

<details><summary>Solution</summary>

#### ANA-CH03-E018 — Solution

Since \\(|a_n-4|=1/n\\to 0\\), the full sequence converges to \\(4\\). Consequently both limsup and liminf equal \\(4\\). Directly, the extreme tail deviations shrink to zero.

</details>

### ANA-CH03-E019 — Exercise 19: Limsup under negation

For a bounded sequence, prove \\(\\limsup(-a_n)=-\\liminf a_n\\).

<details><summary>Hint 1</summary>

Establish the supremum-of-negatives identity on each tail.

</details>

<details><summary>Hint 2</summary>

Take the limit after replacing a tail supremum by the negative tail infimum.

</details>

<details><summary>Solution</summary>

#### ANA-CH03-E019 — Solution

On each tail,

\\(\\sup_{k\\ge n}(-a_k)=-\\inf_{k\\ge n}a_k\\).

Take limits of both sides. Scalar limit algebra then yields the identity. Similarly, \\(\\liminf(-a_n)=-\\limsup a_n\\).

</details>

### ANA-CH03-E020 — Exercise 20: Convergence from tail width

Let \\((a_n)\\) be bounded and suppose

\\(\\sup_{k\\ge n}a_k-\\inf_{k\\ge n}a_k\\to 0\\).

Prove that \\((a_n)\\) converges.

<details><summary>Hint 1</summary>

Name the tail supremum and infimum sequences separately.

</details>

<details><summary>Hint 2</summary>

Their limits exist by monotonicity; the shrinking width forces those two limits to coincide.

</details>

<details><summary>Solution</summary>

#### ANA-CH03-E020 — Solution

Write \\(s_n\\) and \\(t_n\\) for the tail supremum and infimum. They converge to \\(S=\\limsup a_n\\) and \\(T=\\liminf a_n\\). The hypothesis and limit algebra give \\(S-T=0\\), so \\(S=T\\). The limsup–liminf convergence criterion then proves that \\((a_n)\\) converges to their common value.

</details>

## ANA-CH03-I001 — Further investigations

1. Implement a table that records an iterative approximation, its update size, and a theorem-backed error bound. Construct one example where the update is misleading and explain the difference.
2. For a bounded data stream, plot or tabulate the running tail envelopes on a finite horizon. Which apparent limsup features could still be artifacts of truncation?
3. Compare Cauchy sequences in \\(Q\\), \\(R\\), and the open interval \\((0,1)\\). In each case, distinguish a property of the sequence from a property of the ambient space.

The next chapter, [Infinite Series, Tests, and Rearrangements](#/item/book-proof-safe-real-analysis?chapter=series-tests-and-rearrangements), applies Cauchy control to partial sums. [Sequences, Subsequences, and Compactness](#/item/book-proof-safe-real-analysis?chapter=sequences-compactness) then asks what coherent behavior can be extracted when the full sequence does not converge.

## Summary

Convergence controls every term of a sufficiently late tail. Cauchy control compares tail terms without knowing their destination, and completeness supplies that destination in the real line. Monotonicity needs boundedness, fixed-point equations need an independent convergence argument, and small successive updates need a summable error certificate. Tail suprema and infima retain persistent upper and lower behavior; their equality characterizes convergence of bounded real sequences.
`;export{e as default};