# Sequences and series: controlling an infinite process

## Where this chapter fits

Allow two study sessions: one for definitions and test selection, another for approximation and proof. Review [limits](limits-continuity.md), [improper integrals](improper-integrals.md), and [algebraic manipulation](../lucent-refresher/algebra-functions.md). You should be able to integrate a power and distinguish a necessary condition from a sufficient one.

By the end, you should be able to distinguish terms from accumulated totals, select a convergence test by checking its hypotheses, classify conditional convergence, and specify how many terms a requested accuracy needs. The central question is not simply “does this get smaller?” It is “does the total remaining contribution become arbitrarily small?”

## Two different limiting objects

A **sequence** assigns a real number \(a_n\) to each positive integer \(n\). We write \(a_n\to L\) when, for every \(\varepsilon>0\), there is an integer \(N\) such that \(n\ge N\) implies \(|a_n-L|<\varepsilon\). The threshold \(N\) may depend on \(\varepsilon\); it must work for every later index. For \(a_n=1/n\), choosing any integer \(N>1/\varepsilon\) proves convergence to zero.

A **series** \(\sum_{n=1}^{\infty}a_n\) is defined through its partial sums

$$
s_1=a_1,\qquad s_2=a_1+a_2,\qquad
s_N=\sum_{n=1}^{N}a_n.
$$

The series converges to \(S\) precisely when \(s_N\to S\). Infinite addition is therefore a limit of finite additions. It is not an instruction to finish infinitely many arithmetic operations.

If \(s_N\to S\), then \(a_N=s_N-s_{N-1}\to S-S=0\). This proves the **term test**: a nonzero or nonexistent term limit forces divergence. Its converse is false. Terms becoming small is necessary, but their combined tail can still be large.

One useful structural fact is that a nonnegative series converges exactly when its partial sums are bounded above. Its partial sums are increasing, so this follows from the completeness property of the real numbers: every increasing bounded sequence converges. Removing or changing finitely many terms changes a sum but never changes whether a series converges.

## Worked example 1: a geometric sum and its exact remainder

Let \(s_N=1+r+\cdots+r^N\), where the first index is zero. Subtracting \(rs_N\) cancels every middle term:

$$
(1-r)s_N=1-r^{N+1}.
$$

Thus, for \(r\ne1\), \(s_N=(1-r^{N+1})/(1-r)\). If \(|r|<1\), the powers \(r^{N+1}\) tend to zero, giving \(S=1/(1-r)\). The exact remainder is

$$
S-s_N=\frac{r^{N+1}}{1-r}.
$$

At \(r=1/2\), the error after indices \(0\) through \(N\) is \(2^{-N}\). Taking \(N=10\) gives error \(1/1024<0.001\); this uses eleven terms. At \(r=-1/2\), successive partial sums lie alternately above and below \(2/3\). At \(|r|\ge1\) the terms fail the term test, including the oscillating case \(r=-1\).

### Visual laboratory: terms versus totals

```mathviz
scene "Geometric terms, totals, and their limit";
domain 1 24;
range -1 11;
param r = 0.65 from -0.9 to 0.9;
fn term(x) = r^floor(x);
fn total(x) = (1-r^(floor(x)+1))/(1-r);
fn sumlimit(x) = 1/(1-r);
plot term color teal;
plot total color blue;
plot sumlimit color amber;
```

**Predict.** For r = 0.8, which curve tends to zero, and which tends to five? What changes when r becomes negative?

**Explore.** Move r through 0.3, 0.8, and −0.8. Teal shows individual terms, blue accumulated totals, and amber the infinite sum. Horizontal steps extend each integer value across a unit interval for readability; the mathematical sequence is defined at integer indices. The plot starts at index one; the index-zero term, already included in every blue total, is one. At r = 0 all terms shown in teal are zero.

**Explain.** Use the remainder formula to explain both slower convergence as |r| approaches one and alternating overshoot when r < 0. A finite window can conceal how long a tail lasts.

**Transfer.** Change the functions to model a first payment of three units: multiply the term, total, and limit expressions by three. Derive the new remainder before running the scene.

## Why the harmonic series diverges

The harmonic terms \(1/n\) approach zero, yet their sum diverges. Group successive terms in blocks of lengths \(1,2,4,8,\ldots\). In the block from \(n=2^k+1\) through \(2^{k+1}\), every term is at least \(1/2^{k+1}\), and there are \(2^k\) terms. Each block therefore contributes at least \(1/2\). Arbitrarily many such blocks make the partial sums arbitrarily large.

This argument explains why a graph with a small vertical scale can mislead: logarithmic growth looks almost flat over a short window. Slow divergence is still divergence. The nearby series ∑1/n² does converge, so a reliable decision needs a theorem that distinguishes the exponents.

## Choosing a convergence test

Start with the term test, then inspect the algebraic structure. The table gives usable hypotheses, not merely names to memorize. “Eventually” means after a fixed finite index.

| Structure | Test and precise conclusion |
| --- | --- |
| Geometric powers | \(\sum_{n=0}^{\infty}ar^n\) converges for \(|r|<1\). For \(a\ne0\) it diverges when \(|r|\ge1\). |
| Powers of \(n\) | The \(p\)-series \(\sum_{n=1}^{\infty}n^{-p}\) converges exactly when \(p>1\). |
| Nonnegative terms with an inequality | If \(0\le a_n\le b_n\) eventually and \(\sum b_n\) converges, then \(\sum a_n\) converges. If \(\sum a_n\) diverges, then \(\sum b_n\) diverges. |
| Comparable positive expressions | If \(a_n/b_n\to L\) with \(0<L<\infty\), positive series \(\sum a_n\) and \(\sum b_n\) have the same behavior. |
| A useful integral | If \(f\) is positive, continuous, and decreasing eventually, \(\sum f(n)\) and \(\int f(x)\,dx\) have the same convergence behavior. Their values generally differ. |
| Factorials or products | If \(L=\lim|a_{n+1}/a_n|\) exists, with \(a_n\) eventually nonzero, \(L<1\) gives absolute convergence; \(L>1\) gives divergence. |
| An \(n\)th power | If \(L=\lim|a_n|^{1/n}\) exists, the same root-test conclusions hold. |
| Alternating signs | If \(b_n\ge0\) decreases to zero, then \(\sum_{n=1}^{\infty}(-1)^{n-1}b_n\) converges. Eventual decrease suffices. |

For the ratio and root tests, \(L=1\) is **inconclusive**. Both \(\sum1/n\) and \(\sum1/n^2\) produce that result. For signed terms, investigate \(\sum|a_n|\) first when possible. Absolute convergence implies convergence; convergence without absolute convergence is called **conditional**.

The ratio test works because a limit below one gives an eventual ratio bounded above by some q < 1. Subsequent magnitudes are then bounded by a convergent geometric tail. This mechanism matters more than the visual appearance of the original formula.

```exercise
{"id":"calc-r3-series-test-choice","type":"choice","prompt":"A positive series has terms \\(a_n=1/[n(\\ln n)^2]\\) for \\(n\\ge2\\). Which first route is justified and informative?","options":[{"label":"Use the ratio test because its limit is one.","correct":false,"feedback":"A ratio limit of one gives no conclusion, as harmonic and square-power series show."},{"label":"Use the term test because a_n tends to zero.","correct":false,"feedback":"A zero term limit is necessary for convergence but does not decide it."},{"label":"Use the integral test after checking positivity, continuity, and eventual decrease.","correct":true,"feedback":"Yes. The substitution u=ln x then tests the tail by an improper integral."}],"hints":["Choose a test whose conclusion remains useful after its hypotheses are checked."]}
```

## Worked example 2: select the comparison in the correct direction

Consider \(\sum_{n=1}^{\infty}1/(n^2+3n)\). Its dominant denominator term suggests \(b_n=1/n^2\). The ratio

$$
\frac{1/(n^2+3n)}{1/n^2}
=\frac{n^2}{n^2+3n}\longrightarrow1
$$

proves convergence by limit comparison. Direct comparison also works because \(0<1/(n^2+3n)\le1/n^2\). Comparing it instead with \(1/n\) would give an upper bound by a divergent series, which proves nothing.

There is even an exact sum. Partial fractions give
\(1/[n(n+3)]=\tfrac13(1/n-1/(n+3))\). Hence

$$
s_N=\frac13\left(1+\frac12+\frac13
-\frac1{N+1}-\frac1{N+2}-\frac1{N+3}\right),
$$

so \(S=11/18\). A convergence test need not determine the sum; telescoping happens to give more information here.

## Worked example 3: conditional convergence with a useful guarantee

For \(\sum_{n=1}^{\infty}(-1)^{n-1}/\sqrt n\), magnitudes decrease to zero, so the alternating test applies. The absolute-value series has \(p=1/2\) and diverges; convergence is conditional.

The alternating-series remainder theorem states \(|S-s_N|\le b_{N+1}\). The remainder has the sign of the first omitted term, and \(S\) lies between consecutive partial sums. Here error at most \(0.01\) is guaranteed by

$$
\frac1{\sqrt{N+1}}\le0.01
\quad\Longleftrightarrow\quad N\ge9999.
$$

This is a sufficient term count, not necessarily the smallest possible count. If monotonicity begins only later, apply this remainder estimate only once the remaining tail is decreasing. Changing the order of a conditionally convergent series can change its sum; keep the given order.

### Why alternating tails shrink, and why order matters

Write \(S_{2m}=b_1-b_2+\cdots+b_{2m-1}-b_{2m}\), with \(b_n\) nonnegative, decreasing, and tending to zero. The even partial sums increase because \(S_{2m+2}-S_{2m}=b_{2m+1}-b_{2m+2}\ge0\). The odd partial sums decrease because \(S_{2m+3}-S_{2m+1}=-b_{2m+2}+b_{2m+3}\le0\). Each even sum lies below each subsequent odd sum, and their gap is \(b_{2m+1}\to0\). Completeness gives a common limit. The same nesting shows that the sum lies between any two consecutive partial sums and proves the first-omitted-term bound. Merely having signs alternate is insufficient: \(b_n\) must tend to zero and eventually decrease.

For a concrete rearrangement, the alternating harmonic series has sum \(\ln 2\), as proved by integrating the finite geometric identity in the next chapter. Place *two* unused positive odd terms before each unused negative even term:

\[
1+\frac13-\frac12+\frac15+\frac17-\frac14+\cdots .
\]

After \(m\) blocks its partial sum is
\[
H_{4m}-\tfrac12H_{2m}-\tfrac12H_m
=(H_{4m}-H_{2m})+\tfrac12(H_{2m}-H_m),
\qquad H_n=\sum_{k=1}^n\frac1k.
\]
The integral bounds for \(1/x\) show \(H_{2m}-H_m\to\ln2\) and \(H_{4m}-H_{2m}\to\ln2\), so these block sums tend to \(\tfrac32\ln2\). The one or two intermediate partial sums within each block differ by terms tending to zero, so the full rearranged sequence has that limit. Every original term appears exactly once, yet the sum changes. An absolutely convergent series cannot behave this way: its unsigned tails control any rearrangement.

```notebook
# Change the upper index and compare a term with a partial total.
fn harmonic(x) = 1/x;
sum harmonic from 1 to 8 as total;
show total;
show harmonic(8);
```

**Predict before running.** Doubling the upper index makes the eighth term much smaller than the fourth. Will it make the partial total nearly stop growing? Run at 8, then edit the upper index to 16, 32, and 64; record the *difference of totals*. The code computes finite floating-point sums, so the block proof above, rather than a finite table, settles divergence. Now replace `harmonic` by `1/x^2`. Explain why an upper bound by a convergent integral becomes available.

```exercise
{"id":"calc-series-rearrangement-proof","type":"written","prompt":"A student says a convergent series keeps its sum when the terms are reordered because addition is commutative. Explain precisely why the finite rule is insufficient. Use the displayed two-positive-one-negative rearrangement to compute its limiting sum.","hints":["Write the sum after exactly m three-term blocks using H_n.","Separate H_4m−H_2m and H_2m−H_m; use integral bounds."],"rubric":["Distinguishes finite commutativity from a limit of changing partial sums","Derives H_4m−H_2m/2−H_m/2 after m blocks","Uses harmonic block limits to obtain 3 ln 2 / 2","Notes that terms within each block tend to zero"],"solution":"After m blocks all odd reciprocals through 4m−1 and even reciprocals through 2m have appeared, giving H_4m−H_2m/2−H_m/2. This equals (H_4m−H_2m)+(H_2m−H_m)/2. Each parenthesized harmonic block tends to ln 2 by comparison with its corresponding logarithmic integral, hence the block sums tend to 3 ln 2 / 2. At most two terms separate an arbitrary partial sum from a block sum, and those terms tend to zero. Finite commutativity never claimed that a changed sequence of partial sums preserves a limit; absolute convergence supplies the tail control that makes rearrangement safe."}
```

### A convergence test for the entire tail

A series converges exactly when its partial sums are Cauchy. In concrete terms: for every \(\varepsilon>0\) there is \(N\) such that *every* block \(a_{n+1}+\cdots+a_m\), with \(m>n\ge N\), has magnitude below \(\varepsilon\). This follows because \(s_m-s_n\) is that block and the real numbers are complete. The term test checks only blocks of length one, which explains its weakness. For the harmonic series, the block from \(n+1\) through \(2n\) is at least \(n\cdot(1/(2n))=1/2\) for every \(n\). That one inequality disproves the Cauchy condition without needing an estimate of \(H_n\) itself.

## Positive tails and integral error bounds

Suppose \(f\) is positive, continuous, and decreasing on \([N,\infty)\), and its integral converges. Rectangle comparisons give

$$
\int_{N+1}^{\infty}f(x)\,dx
\le R_N=\sum_{n=N+1}^{\infty}f(n)
\le\int_N^{\infty}f(x)\,dx.
$$

Decreasing \(f\) satisfies
\(\int_n^{n+1}f(x)\,dx\le f(n)\le\int_{n-1}^{n}f(x)\,dx\).
Summing these inequalities for \(n\ge N+1\) explains the one-unit shift. For \(f(x)=x^{-p}\), \(p>1\),

$$
\frac{(N+1)^{1-p}}{p-1}
\le R_N\le
\frac{N^{1-p}}{p-1}.
$$

At \(p=2\), the tail after \(100\) terms lies between \(1/101\) and \(1/100\). Therefore adding \(0.01\) to \(s_{100}\) slightly overestimates \(S\), with error at most \(1/100-1/101=1/10100\).

```exercise
{"id":"calc-r3-series-tail","type":"written","prompt":"For \\(S=\\sum_{n=1}^{\\infty}n^{-3}\\), choose an integer \\(N\\) that certifies \\(|S-s_N|\\le10^{-4}\\). Show why your integral inequality bounds the omitted tail and why the ratio test alone cannot supply \\(N\\).","hints":["Use the decreasing function f(x)=x⁻³ and integrate from N to infinity.","Solve \\(1/(2N^2)\\le10^{-4}\\) and round upward."],"rubric":["Checks positivity and decrease of x⁻³","Uses the correct upper bound \\(R_N\\le\\int_N^\\infty x^{-3}\\,dx=1/(2N^2)\\)","Selects N=71 or another valid larger integer","Distinguishes a convergence verdict from a finite error certificate"],"solution":"The function \\(f(x)=x^{-3}\\) is positive and decreasing for \\(x\\ge1\\). Each omitted term is no larger than the area under \\(f\\) on the interval immediately to its left. Therefore \\(R_N\\le\\int_N^\\infty x^{-3}\\,dx=1/(2N^2)\\). Requiring \\(1/(2N^2)\\le10^{-4}\\) gives \\(N^2\\ge5000\\); \\(N=71\\) is the least integer certified by this bound. The ratio limit is \\(1\\), so that test is inconclusive and supplies no error certificate.","transfer":"Changed case: use ∑1/n² and certify an error at most 10⁻³ using the same integral method. Compare the term counts and explain the source of the difference.","transferSolution":"For \\(\\sum n^{-2}\\), the integral bound is \\(R_N\\le\\int_N^\\infty x^{-2}\\,dx=1/N\\). Thus \\(N=1000\\) suffices for \\(R_N\\le10^{-3}\\). Its tail bound falls as \\(N^{-1}\\), slower than the \\(N^{-2}\\) bound for \\(\\sum n^{-3}\\), so a looser tolerance can still need more terms."}
```

### Visual laboratory: how much work does accuracy require?

```mathviz
scene "Integral bounds on a p-series tail";
domain 1 40;
range 0 6;
param p = 2 from 1.2 to 4;
fn upper(x) = x^(1-p)/(p-1);
fn lower(x) = (x+1)^(1-p)/(p-1);
plot upper color amber;
plot lower color teal;
```

**Predict.** Does moving p toward one make the remainder smaller or larger at the same term count?

**Explore.** Compare p = 3, 2, and 1.2. Read horizontal positions as N. The two curves are continuous formulas bounding a discrete tail at positive integer N; neither is the exact tail itself.

**Explain.** At p = 1.2, the factor 1/(p − 1) is large and N^(1−p) decreases slowly. Every such series converges, but a fixed accuracy can require vastly different work.

**Transfer.** Solve N^(1−p)/(p − 1) ≤ ε symbolically. You obtain N ≥ [1/((p − 1)ε)]^(1/(p − 1)); round upward to an integer. Compare the counts for p = 2 and p = 3 at ε = 0.001.

## Practice: computation, proof, and diagnosis

1. Prove \((3n+1)/(n+2)\to3\) using an explicit \(\varepsilon\)-dependent index.
2. Classify \(\sum n/(n+1)\). State the quickest decisive test.
3. Determine the sum of \(\sum_{n=1}^{\infty}1/[n(n+1)]\) and its exact remainder after \(N\) terms.
4. Test \(\sum_{n=0}^{\infty}3^n/n!\) and explain what your test does not compute.
5. Classify \(\sum_{n=1}^{\infty}(-1)^{n-1}/n\) and give a sufficient \(N\) for error at most \(0.002\).
6. For \(\sum1/n^3\), find a sufficient term count for error at most \(0.0001\) using the integral remainder bound.
7. A student finds ratio-test limit one for \(\sum1/n^2\) and concludes divergence. Correct the argument.
8. Test \(\sum_{n=2}^{\infty}1/[n(\ln n)^2]\), checking every integral-test hypothesis.
9. Prove directly that a convergent series must have terms tending to zero. Identify where the converse fails.

<details><summary>First hints: choose a route</summary>

1. Subtract three before estimating. 2. Examine the terms. 3. Use partial fractions. 4. Cancel neighboring factorials. 5. Separate signed and absolute-value series. 6. Integrate x^(−3) from N to infinity. 7. An inconclusive test has no verdict. 8. Substitute u = ln x. 9. Express a term using two partial sums.

</details>

<details><summary>Second hints: set up the decisive step</summary>

1. The absolute error is \(5/(n+2)\). 3. Write \(1/n-1/(n+1)\). 4. The ratio is \(3/(n+1)\). 5. Require \(1/(N+1)\le0.002\). 6. Require \(1/(2N^2)\le0.0001\). 8. Differentiate \(f(x)\); both resulting contributions are negative for \(x>1\).

</details>

<details><summary>Full solutions</summary>

1. \(\left|(3n+1)/(n+2)-3\right|=5/(n+2)\). Take \(N=\lfloor5/\varepsilon\rfloor+1\). For \(n\ge N\), \(n>5/\varepsilon\), so the error is less than \(\varepsilon\).
2. \(n/(n+1)\to1\). The series diverges by the term test.
3. \(s_N=1-1/(N+1)\), so \(S=1\) and \(R_N=1/(N+1)\).
4. \(|a_{n+1}/a_n|=3/(n+1)\to0\). The series converges absolutely. The ratio test alone does not supply its sum; the next chapter identifies it as \(e^3\).
5. Magnitudes decrease to zero, but their harmonic series diverges, so convergence is conditional. The alternating bound is \(1/(N+1)\); \(N\ge499\) suffices.
6. \(R_N\le1/(2N^2)\). Thus \(N\ge\sqrt{5000}\), and \(N=71\) suffices. This is a certified sufficient count.
7. Limit one means the ratio test cannot decide. Compare with the \(p\)-series theorem: \(p=2>1\), so the series converges.
8. \(f(x)=1/[x(\ln x)^2]\) is positive and continuous for \(x\ge2\). Its derivative is \(-x^{-2}(\ln x)^{-2}-2x^{-2}(\ln x)^{-3}<0\). Substitution gives \(\int_2^\infty f(x)\,dx=1/\ln2\), which is finite; the series converges. The integral is not the series sum.
9. If \(s_N\to S\), then \(s_{N-1}\to S\) and \(a_N=s_N-s_{N-1}\to0\). The harmonic series disproves the converse: its terms tend to zero while its partial sums are unbounded.

</details>

## Recap and next step

Check that you can explain why a zero term limit is insufficient, why comparison direction matters, and why a convergence theorem may give no useful numerical accuracy. Never treat a ratio limit of one as a verdict or an integral as an exact series sum. In [power and Taylor series](taylor-series.md), the terms will depend on x; convergence and remainder estimates then become tools for representing and computing functions.

For a parallel university treatment, use [MIT 18.01SC: Exploring the Infinite](https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/pages/unit-5-exploring-the-infinite/) and [OpenStax Calculus Volume 2, Chapter 5](https://openstax.org/books/calculus-volume-2/pages/5-introduction). The explanations and exercises here are independently written.
