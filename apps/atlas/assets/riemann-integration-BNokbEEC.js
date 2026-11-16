var e=`---
parent_id: book-proof-safe-real-analysis
chapter_id: riemann-integration
title: "Riemann Integration from Upper and Lower Sums"
level: advanced-undergraduate
estimated_minutes: 180
license: CC BY-SA 4.0
---

# Riemann Integration from Upper and Lower Sums

Integration begins with an approximation question: can every sufficiently fine partition force all reasonable area estimates to agree? The Riemann integral answers by trapping a bounded function between lower and upper step functions. If the trap can be made arbitrarily tight, the function is integrable and the common limiting value is its integral.

This point of view does more than justify area. It exposes why continuous and monotone functions are integrable, why a function that oscillates between \\(0\\) and \\(1\\) in every interval is not, why changing finitely many values has no effect, and which hypotheses the fundamental theorem of calculus needs.

The chapter assumes completeness, compactness on closed intervals, and elementary continuity. For convergence tools and tail discipline, see [Infinite Series, Tests, and Rearrangements](#/item/book-proof-safe-real-analysis?chapter=series-tests-and-rearrangements). The later measure chapter will replace interval partitions with a more flexible notion of size.

## 1. Partitions turn a continuum into finite data

Fix \\(a<b\\) and let \\(f:[a,b]\\to R\\) be bounded. The degenerate endpoint convention used later is \\(\\int_a^a f=0\\); the partition construction below concerns positive-length intervals. A **partition** of \\([a,b]\\) is a finite ordered set

\\[P=\\{x_0,x_1,\\ldots,x_n\\}\\]

with

\\(a=x_0<x_1<\\ldots<x_n=b\\).

Write \\(\\Delta x_i=x_i-x_{i-1}\\) and let the **mesh** be

\\(\\lVert P\\rVert=\\max_i \\Delta x_i\\).

On each subinterval \\(I_i=[x_{i-1},x_i]\\), define

\\(m_i=\\inf_{x\\in I_i}f(x)\\) and \\(M_i=\\sup_{x\\in I_i}f(x)\\).

The **lower Darboux sum** and **upper Darboux sum** are

\\(L(f,P)=\\sum m_i\\Delta x_i\\),

\\(U(f,P)=\\sum M_i\\Delta x_i\\).

Boundedness ensures the local value sets have real infima and suprema. Completeness is already present before any limit over partitions.

For every partition,

\\(L(f,P)\\le U(f,P)\\).

The gap is

\\(U(f,P)-L(f,P)=\\sum(M_i-m_i)\\Delta x_i\\).

Each factor \\(M_i-m_i\\) measures oscillation of \\(f\\) on one subinterval. Integrability means partitions can make the total oscillation-weighted width arbitrarily small.

## 2. Refinement improves the trap

A partition \\(Q\\) **refines** \\(P\\) when every point of \\(P\\) also belongs to \\(Q\\). Adding a partition point can only raise a lower sum and lower an upper sum:

\\(L(f,P)\\le L(f,Q)\\le U(f,Q)\\le U(f,P)\\).

To see why, split one interval into smaller pieces. Each new infimum is at least the old infimum, while each new supremum is at most the old supremum. Multiplying by widths and adding preserves the inequalities.

If \\(P\\) and \\(Q\\) are arbitrary partitions, their union is a common refinement. Therefore every lower sum is at most every upper sum:

\\(L(f,P)\\le U(f,Q)\\).

This cross-partition inequality is crucial. It says the set of all lower sums is bounded above by every upper sum.

Define the **lower integral** and **upper integral** by

\\(\\int _a^b f lower = \\sup_P L(f,P)\\),

\\(\\int _a^b f upper = \\inf_P U(f,P)\\).

The function is **Riemann integrable** when these two numbers agree. Their common value is written

\\(\\int _a^b f(x)dx\\).

## 3. The epsilon criterion is the working definition

**Darboux criterion.** A bounded function \\(f:[a,b]\\to R\\) is Riemann integrable exactly when, for every \\(\\varepsilon>0\\), there is a partition \\(P\\) such that

\\(U(f,P)-L(f,P)<\\varepsilon\\).

### Why the criterion is sufficient

Let \\(L*\\) be the supremum of lower sums and \\(U*\\) the infimum of upper sums. For every partition,

\\(0\\le U*-L*\\le U(f,P)-L(f,P)\\).

If a partition makes the right side smaller than every positive \\(\\varepsilon\\), then \\(U*-L*=0\\).

### Why it is necessary

If \\(L*=U*=I\\), choose a partition \\(P_1\\) with \\(L(f,P_1)>I-\\varepsilon/2\\) and a partition \\(P_2\\) with \\(U(f,P_2)<I+\\varepsilon/2\\). Their common refinement \\(P\\) improves both bounds, so

\\(U(f,P)-L(f,P)<\\varepsilon\\).

The proof uses the approximation property of supremum and infimum, plus finite refinement. It does not assume a uniform grid.

## 4. Riemann sums connect samples to Darboux control

Choose a sample point \\(t_i\\in [x_{i-1},x_i]\\) in each subinterval. The associated **Riemann sum** is

\\(R(f,P,t)=\\sum f(t_i)\\Delta x_i\\).

Because \\(m_i\\le f(t_i)\\le M_i\\),

\\(L(f,P)\\le R(f,P,t)\\le U(f,P)\\).

For an integrable function, sufficiently controlled partitions force every tagged Riemann sum close to the integral. The tags may be left endpoints, right endpoints, midpoints, or arbitrary points. What matters is not a favored sampling rule but the shrinking Darboux trap.

One must state the partition condition correctly. For arbitrary nonuniform partitions, “the number of intervals tends to infinity” does not imply the mesh tends to zero; one interval could remain wide forever. The reliable condition is \\(\\lVert P\\rVert\\to 0\\), together with the integrability theorem appropriate to the function.

## 5. Continuous functions are integrable

Let \\(f\\) be continuous on \\([a,b]\\). Compactness gives uniform continuity: for every \\(\\eta>0\\), there is \\(\\delta>0\\) such that

\\(|x-y|<\\delta \\Rightarrow |f(x)-f(y)|<\\eta\\).

Choose a partition with mesh below \\(\\delta\\). On every subinterval, the oscillation satisfies \\(M_i-m_i\\le \\eta\\). Hence

\\(U(f,P)-L(f,P)\\le \\sum\\eta\\Delta x_i=\\eta(b-a)\\).

Given \\(\\varepsilon>0\\), choose \\(\\eta=\\varepsilon/[2(b-a)]\\) when \\(a<b\\). The Darboux gap is then at most \\(\\varepsilon/2<\\varepsilon\\), proving integrability.

This proof has a precise dependency chain:

1. continuity on a compact interval gives uniform continuity;
2. one \\(\\delta\\) controls every subinterval;
3. a fine partition turns local oscillation control into a global area bound.

Pointwise continuity without compactness need not supply one scale for an unbounded domain. Riemann integration here is defined on a closed bounded interval.

## 6. Monotone functions are integrable even with jumps

Suppose \\(f\\) is increasing on \\([a,b]\\). Use the uniform partition with \\(n\\) equal pieces of width \\(h=(b-a)/n\\). On interval \\(I_i\\),

\\(m_i=f(x_{i-1})\\) and \\(M_i=f(x_i)\\).

Therefore

\\[U(f,P)-L(f,P)=h\\sum[f(x_i)-f(x_{i-1})]\\]

\\(=h[f(b)-f(a)]\\).

This tends to zero as \\(n\\to \\infty\\). Thus bounded monotone functions are integrable. Continuity was sufficient, not necessary.

The same proof works for decreasing functions after reversing signs or using absolute endpoint difference. A monotone function may have jump discontinuities, but its total oscillation across a uniform partition telescopes.

## 7. A function oscillating everywhere can fail

**Worked example 1 (persistent full-height oscillation).**

Define the Dirichlet function on \\([0,1]\\) by

\\(f(x)=1\\) when \\(x\\in Q\\), and \\(f(x)=0\\) when \\(x\\notin Q\\).

Every nontrivial interval contains both rationals and irrationals. Thus on every partition subinterval,

\\(m_i=0\\) and \\(M_i=1\\).

Consequently

\\(L(f,P)=0\\) and \\(U(f,P)=1\\)

for every partition. The gap never shrinks, so the function is not Riemann integrable.

The obstruction is persistent oscillation, not merely having many discontinuities in a cardinal sense. A function may differ from zero at every rational and still be Riemann integrable if the nonzero values become sufficiently small with denominator; proving that requires a more delicate finite-exception argument.

## 8. Finite changes do not affect the integral

Suppose bounded functions \\(f\\) and \\(g\\) differ at only one point \\(c\\in [a,b]\\). Choose \\(M>0\\) with \\(|f|,|g|\\le M\\). Choose a partition that isolates \\(c\\) inside an interval of width less than \\(\\varepsilon/(4M)\\); outside that interval, the functions agree. The possible change in any upper or lower sum is confined to area at most \\(2M\\) times that small width. It can therefore be made arbitrarily small.

By repeating the argument, changing finitely many values preserves integrability and the integral.

More generally, changing values on a sufficiently small set can preserve the integral, but “small” must be defined carefully. Measure theory makes this principle exact. Countability alone is not the whole explanation: the Dirichlet function differs from zero only on the countable rationals yet is not Riemann integrable because the values do not decay and the exceptional set is dense in every subinterval.

## 9. Algebra and order of the integral

If \\(f,g\\) are Riemann integrable on \\([a,b]\\) and \\(\\alpha,\\beta\\in R\\), then

\\(\\int (\\alpha f+\\beta g)=\\alpha\\int f+\\beta\\int g\\).

Also:

- if \\(f\\le g\\), then \\(\\int f\\le \\int g\\);
- \\(|\\int f|\\le \\int |f|\\);
- if \\(c\\in [a,b]\\), then \\(\\int _a^b f=\\int _a^c f+\\int _c^b f\\);
- if \\(m\\le f\\le M\\), then \\(m(b-a)\\le \\int f\\le M(b-a)\\).

These are theorems, not formal permissions. For example, proving linearity can be done with tagged sums or by showing the Darboux criterion for combinations and squeezing their sums.

The product \\(fg\\) is integrable as well. Boundedness controls

\\(|f(x)g(x)-f(y)g(y)|\\le |f(x)||g(x)-g(y)|+|g(y)||f(x)-f(y)|\\),

allowing oscillation estimates.

### Absolute value is one-way

The inequality

\\[|\\int f|\\le \\int |f|\\]

can be strict because positive and negative regions cancel on the left. Equality requires compatible sign behavior; it is not automatic.

## 10. The mean-value theorem for integrals

If \\(f\\) is continuous on \\([a,b]\\), then there is \\(c\\in [a,b]\\) with

\\(\\int _a^b f(x)dx=f(c)(b-a)\\).

Let \\(m\\) and \\(M\\) be the attained minimum and maximum. Order bounds give

\\(m\\le [1/(b-a)]\\int _a^b f\\le M\\).

The intermediate value theorem supplies a point where \\(f\\) equals this average value.

Continuity matters for attainment of every intermediate height. For a merely integrable function, the average lies between infimum and supremum but need not equal an actual function value.

## 11. Accumulation creates a continuous function

Let \\(f\\) be Riemann integrable and bounded by \\(|f|\\le M\\). Define

\\(F(x)=\\int _a^x f(t)dt\\).

Then

\\(|F(y)-F(x)|=|\\int _x^y f(t)dt|\\le M|y-x|\\).

Thus \\(F\\) is Lipschitz and therefore uniformly continuous, even when \\(f\\) has discontinuities.

This is an important smoothing effect: integration turns bounded integrable data into a continuous accumulation function.

## 12. The fundamental theorem, first direction

**Theorem 11.1 (Fundamental of calculus, Part I).** If \\(f\\) is continuous on \\([a,b]\\) and

\\(F(x)=\\int _a^x f(t)dt\\),

then \\(F\\) is differentiable on \\((a,b)\\) and \\(F'(x)=f(x)\\).

For small nonzero \\(h\\),

\\([F(x+h)-F(x)]/h=[1/h]\\int _x^{x+h} f(t)dt\\).

Subtract \\(f(x)\\):

\\([F(x+h)-F(x)]/h-f(x)=[1/h]\\int _x^{x+h}[f(t)-f(x)]dt\\).

Its absolute value is at most the maximum of \\(|f(t)-f(x)|\\) between \\(x\\) and \\(x+h\\), which tends to zero by continuity at \\(x\\). Therefore the difference quotient tends to \\(f(x)\\).

Continuity at the particular point is the local hypothesis doing the work. If \\(f\\) is Riemann integrable and continuous at \\(x\\), the same conclusion holds at that \\(x\\) even if \\(f\\) is discontinuous elsewhere.

## 13. The fundamental theorem, evaluation direction

**Theorem 11.2 (Fundamental of calculus, Part II).** If \\(G\\) is differentiable on \\([a,b]\\) in the one-sided endpoint sense and \\(G'\\) is Riemann integrable, then

\\(\\int _a^b G'(x)dx=G(b)-G(a)\\).

One proof applies the mean value theorem on each partition interval. For every \\(i\\), some \\(t_i\\) satisfies

\\(G(x_i)-G(x_{i-1})=G'(t_i)\\Delta x_i\\).

Summing telescopes to \\(G(b)-G(a)\\). As the mesh shrinks, the tagged sums for integrable \\(G'\\) converge to the integral.

Textbooks often assume \\(G'\\) is continuous, which guarantees its Riemann integrability and simplifies the theorem. The weaker version above states the actual extra need for this proof route.

The two directions should not be merged carelessly. Part I differentiates an integral and uses continuity of the integrand at the point. Part II integrates a derivative and needs enough integrability of that derivative.

## 14. Substitution and orientation

Define oriented integrals by

\\(\\int _b^a f=-\\int _a^b f\\) and \\(\\int _a^a f=0\\).

If \\(\\varphi:[\\alpha,\\beta]\\to [a,b]\\) is continuously differentiable and \\(f\\) is continuous on the relevant range, then

\\(\\int _\\alpha^\\beta f(\\varphi(t))\\varphi'(t)dt=\\int _{\\varphi(\\alpha)}^{\\varphi(\\beta)} f(x)dx\\).

The formula remains correct when \\(\\varphi\\) decreases because the endpoint orientation records the sign. A substitution is not merely symbol replacement; it is the chain rule integrated through the fundamental theorem.

If \\(\\varphi\\) is not one-to-one, the endpoint formula can still hold for an antiderivative-based argument, but interpreting it as a simple change of geometric region requires care about repeated coverage.

## 15. Numerical quadrature inherits theorem hypotheses

For a partition of equal width \\(h=(b-a)/n\\), common rules include:

- left and right endpoint sums;
- midpoint sums;
- the composite trapezoid rule.

Convergence for continuous functions follows from Riemann integrability as mesh tends to zero. Quantitative rates require derivatives.

If \\(f\\) has a continuous second derivative with \\(|f''(x)|\\le M\\), the composite trapezoid error satisfies

\\(|\\int _a^b f-T_n|\\le (b-a)M h^2/12\\).

This is a guarantee under a named smoothness bound. A visually smooth plot is not evidence that \\(M\\) is small, and a nonsmooth point can change the rate.

Adaptive quadrature refines intervals where an error indicator is large. The indicator is not automatically a proof of error; a reliable algorithm ties it to smoothness assumptions or compares against certified bounds. Oscillatory spikes between sample points can fool rules that inspect too few values.

## 16. Improper integrals are limits of proper integrals

The Riemann integral above assumes a bounded function on a finite closed interval. An integral such as

\\[\\int _1^\\infty 1/x^2 dx\\]

is **improper** and means

\\(\\lim_{R\\to \\infty}\\int _1^R1/x^2dx=1\\).

Likewise,

\\[\\int _0^1 x^{-1/2}dx\\]

means a limit as the lower endpoint approaches zero from the right.

Every singular endpoint and every infinite direction needs its own limiting audit. For a two-sided integral over \\(R\\), convergence of

\\[\\lim_{R\\to \\infty}\\int _{-R}^R f\\]

is only principal-value convergence and does not by itself prove that the two improper tails converge separately. The function \\(f(x)=x\\) has symmetric principal value zero over \\([-R,R]\\), but neither one-sided improper integral converges.

## 17. A failure atlas

| Tempting claim | Missing condition or counterexample |
| --- | --- |
| Every bounded function is Riemann integrable | Dirichlet function |
| Many partition points guarantee accuracy | Mesh may not shrink |
| Every discontinuity destroys integrability | Monotone functions may have jumps |
| Changing countably many values never matters | Dense unit-height changes produce the Dirichlet function |
| An integral’s average value is always attained | Continuity is needed for the mean-value conclusion |
| If \\(F(x)=\\int f\\), then \\(F'=f\\) everywhere | Only at continuity points of \\(f\\) under the stated hypotheses |
| Every derivative can be integrated by elementary FTC wording | The derivative must meet the integration framework’s conditions |
| Numerical agreement between two grids certifies the error | Both grids may miss the same feature |
| Symmetric principal value equals improper convergence | \\(f(x)=x\\) over the whole line |


### Worked example 2 (an exact Darboux trap)

Let \\(f(x)=2x+1\\) on \\([0,1]\\), with the uniform partition into \\(n\\) intervals. The function is increasing, so the lower values are \\(1+2(i-1)/n\\), and the upper values are \\(1+2i/n\\). Multiplying their sums by the common width \\(1/n\\) gives \\(L_n=2-1/n\\) and \\(U_n=2+1/n\\). Their gap is \\(2/n\\), which tends to zero. The Darboux criterion proves integrability, and the two limits force the integral to be 2. The proof computes both bounding families before asserting their common value.

### Worked example 3 (one changed endpoint)

On \\([0,1]\\), let \\(g(0)=100\\) and \\(g(x)=0\\) for \\(x>0\\). For a partition whose first positive point is \\(h\\), every lower contribution is zero. Only the first interval contributes to the upper sum, giving \\(U=100h\\). Choosing \\(h<\\varepsilon/100\\) makes the gap below \\(\\varepsilon\\). Thus \\(g\\) is integrable with integral zero, despite its large isolated value. Its upper sum does depend on a partition that sees the exceptional endpoint, but that dependence vanishes as the endpoint interval shrinks.

## 18. Exercises

### ANA-CH12-E001 — Exercise 1: upper and lower sums

For \\(f(x)=x\\) on \\([0,1]\\) and the uniform partition into \\(n\\) pieces, compute \\(L(f,P_n)\\), \\(U(f,P_n)\\), and their gap.

<details><summary>Hint 1</summary>

Identify the endpoint extrema on each increasing linear piece.

</details>

<details><summary>Hint 2</summary>

Sum i/n and (i-1)/n and multiply each total by the width 1/n.

</details>

### ANA-CH12-E002 — Exercise 2: refinement proof

Prove directly that inserting one point into a partition cannot decrease the lower sum or increase the upper sum.

<details><summary>Hint 1</summary>

Compare the old infimum with the infima on the two new pieces.

</details>

<details><summary>Hint 2</summary>

Both new infima are at least the old one; use the reversed comparison for suprema.

</details>

### ANA-CH12-E003 — Exercise 3: a step function

Let \\(f(x)=0\\) for \\(x<1/2\\) and \\(f(x)=1\\) for \\(x\\ge 1/2\\) on \\([0,1]\\). Prove it is integrable and find its integral.

<details><summary>Hint 1</summary>

Confine the jump to intervals of arbitrarily small total width.

</details>

<details><summary>Hint 2</summary>

Outside those intervals oscillation is zero; the assigned value at the jump does not affect the integral.

</details>

### ANA-CH12-E004 — Exercise 4: finitely many spikes

Let \\(f\\) be zero on \\([0,1]\\) except at five points, where it takes arbitrary finite values. Prove \\(f\\) is integrable with integral zero.

<details><summary>Hint 1</summary>

Bound the magnitudes of all five spike heights by one constant.

</details>

<details><summary>Hint 2</summary>

Place their locations inside intervals of small total length; all other oscillations vanish.

</details>

### ANA-CH12-E005 — Exercise 5: continuous integrability budget

Suppose \\(|f(x)-f(y)|\\le 7|x-y|\\) on \\([0,3]\\). Give a mesh size that guarantees \\(U(f,P)-L(f,P)<0.001\\).

<details><summary>Hint 1</summary>

Bound each interval oscillation using the Lipschitz constant and mesh.

</details>

<details><summary>Hint 2</summary>

Summing gives 7 times mesh times the total interval length 3.

</details>

### ANA-CH12-E006 — Exercise 6: monotone gap

For increasing \\(f\\) on \\([a,b]\\), derive the uniform-partition Darboux gap and choose \\(n\\) to make it below \\(\\varepsilon\\).

<details><summary>Hint 1</summary>

For an increasing function, extrema on each subinterval occur at endpoints.

</details>

<details><summary>Hint 2</summary>

The uniform width factors out and the successive endpoint increments telescope.

</details>

### ANA-CH12-E007 — Exercise 7: everywhere oscillation

Define \\(g(x)=2\\) on rationals and \\(g(x)=-1\\) on irrationals in \\([0,2]\\). Compute every lower and upper Darboux sum and decide integrability.

<details><summary>Hint 1</summary>

Use density of both rational and irrational numbers in every subinterval.

</details>

<details><summary>Hint 2</summary>

Every infimum is -1 and every supremum 2, independently of the partition.

</details>

### ANA-CH12-E008 — Exercise 8: order bound

If \\(f\\) is Riemann integrable on \\([1,4]\\) and \\(2\\le f(x)\\le 5\\), bound its integral as sharply as the given information permits.

<details><summary>Hint 1</summary>

Integrate the two constant pointwise bounds.

</details>

<details><summary>Hint 2</summary>

The interval has length 3; check that constant functions attain both resulting endpoints.

</details>

### ANA-CH12-E009 — Exercise 9: absolute integral inequality

Prove \\(|\\int f|\\le \\int |f|\\) using \\(-|f|\\le f\\le |f|\\).

<details><summary>Hint 1</summary>

Apply monotonicity separately to the upper and lower inequalities.

</details>

<details><summary>Hint 2</summary>

The pair of integral inequalities bounds the signed integral between opposite copies of the integral of |f|.

</details>

### ANA-CH12-E010 — Exercise 10: average value

Find the average value of \\(f(x)=x^2\\) on \\([0,3]\\) and every point where the function attains it.

<details><summary>Hint 1</summary>

Divide the integral by the length of its domain.

</details>

<details><summary>Hint 2</summary>

After computing the average, solve x squared equal to that value within [0,3].

</details>

### ANA-CH12-E011 — Exercise 11: Lipschitz accumulation

Let \\(f\\) be Riemann integrable on an interval \\(I\\) containing \\(0\\), with \\(|f|\\le4\\). Prove \\(F(x)=\\int _0^x f\\) is \\(4\\)-Lipschitz on \\(I\\).

<details><summary>Hint 1</summary>

Express an accumulator increment as an integral over the interval between the two inputs.

</details>

<details><summary>Hint 2</summary>

Bound its absolute value by 4 times that interval's length, taking orientation into account.

</details>

### ANA-CH12-E012 — Exercise 12: derivative at a jump

For the step function in Exercise 3, define \\(F(x)=\\int _0^x f\\). Find \\(F\\) explicitly and determine where it is differentiable.

<details><summary>Hint 1</summary>

Compute the accumulation separately before and after the jump.

</details>

<details><summary>Hint 2</summary>

Compare the left and right slopes at one half.

</details>

### ANA-CH12-E013 — Exercise 13: FTC hypothesis audit

Explain why the statement “if \\(f\\) is Riemann integrable, then the derivative of \\(\\int _a^x f\\) equals \\(f(x)\\) everywhere” is false.

<details><summary>Hint 1</summary>

Use a Riemann-integrable step function.

</details>

<details><summary>Hint 2</summary>

Its accumulation has a corner at the jump, so the local continuity hypothesis cannot be dropped.

</details>

### ANA-CH12-E014 — Exercise 14: substitution with decreasing map

Evaluate \\(\\int _0^1 2t \\cos(1-t^2)dt\\) by substitution, tracking orientation.

<details><summary>Hint 1</summary>

Set u=1-t squared and transform both endpoints.

</details>

<details><summary>Hint 2</summary>

The minus sign in the differential cancels the reversed orientation.

</details>

### ANA-CH12-E015 — Exercise 15: trapezoid certificate

How large must \\(n\\) be for the composite trapezoid approximation to \\(\\int _0^1 e^x dx\\) to have certified error below \\(10^{-6}\\) using the second-derivative bound?

<details><summary>Hint 1</summary>

Use the maximum of the absolute second derivative on [0,1].

</details>

<details><summary>Hint 2</summary>

The composite trapezoid bound becomes e/(12n squared); solve the strict tolerance inequality.

</details>

### ANA-CH12-E016 — Exercise 16: improper p-integral

Classify \\(\\int _1^\\infty x^{-p}dx\\) for real \\(p\\).

<details><summary>Hint 1</summary>

Truncate at a finite upper endpoint R first.

</details>

<details><summary>Hint 2</summary>

Treat p=1 separately and examine the limit of R^(1-p) in the other cases.

</details>

### ANA-CH12-E017 — Exercise 17: principal value trap

Show the symmetric principal value of \\(\\int _{-\\infty}^\\infty x dx\\) is zero while the improper integral does not converge.

<details><summary>Hint 1</summary>

Compare symmetric truncation with the two independently defined one-sided integrals.

</details>

<details><summary>Hint 2</summary>

Odd symmetry cancels the symmetric finite integral, although each one-sided limit diverges.

</details>

### ANA-CH12-E018 — Exercise 18: design a missed spike

Given finitely many sample points in \\([0,1]\\), construct a continuous nonnegative function that vanishes at every sample but has integral greater than \\(100\\).

<details><summary>Hint 1</summary>

Find an open interval missing every one of the finitely many samples.

</details>

<details><summary>Hint 2</summary>

Place a continuous triangular bump there and choose its height to make half its base times height exceed 100.

</details>

### ANA-CH12-E019 — Exercise 19: Riemann-sum indexing

For \\(f(x)=1/x\\) on \\([1,2]\\), write the right-endpoint sum for \\(n\\) equal pieces without evaluating its limit. Identify the sample point and width exactly.

<details><summary>Hint 1</summary>

Write the width and the ith right endpoint before inserting f.

</details>

<details><summary>Hint 2</summary>

The sample is 1+i/n, not i/n, and the width 1/n multiplies the whole sum.

</details>

### ANA-CH12-E020 — Exercise 20: dependency classification

For each result—continuous integrability, monotone integrability, FTC Part I, trapezoid error—name the strongest central hypothesis doing the work and give one failure mode when it is removed.

<details><summary>Hint 1</summary>

Match each theorem to the control used in its proof.

</details>

<details><summary>Hint 2</summary>

Distinguish uniform oscillation, telescoping variation, local continuity, and a bounded second derivative.

</details>

### ANA-CH12-E021 — Exercise 21: Lipschitz composition preserves integrability

Let \\(f:[a,b]\\to R\\) be Riemann integrable and let \\(\\varphi:R\\to R\\) be Lipschitz on an interval containing the range of \\(f\\), with constant \\(L\\). Prove \\(\\varphi\\circ f\\) is Riemann integrable directly from oscillations. Treat the case \\(L=0\\) explicitly.

<details><summary>Hint 1</summary>

Compare the oscillation of the composition with that of f on each interval.

</details>

<details><summary>Hint 2</summary>

For positive L choose the original Darboux gap below epsilon/L; handle L=0 as a constant function.

</details>

### ANA-CH12-E022 — Exercise 22: tagged sums with arbitrary samples

Let \\(f\\) be continuous on \\([a,b]\\). For a partition \\(P\\), choose an arbitrary tag \\(t_i\\) in each subinterval and form \\(S(P,f)=\\sum f(t_i)\\Delta x_i\\). Prove that every tagged sum is within \\(\\varepsilon\\) of \\(\\int _a^b f\\) once the mesh of \\(P\\) is sufficiently small, independently of the tags.

<details><summary>Hint 1</summary>

Use compactness to turn continuity into one oscillation scale.

</details>

<details><summary>Hint 2</summary>

Every tagged sum and the integral lie between the same lower and upper sums.

</details>

## 19. Complete solutions

<details><summary>Solution</summary>

### ANA-CH12-E001 — Solution 1

On interval \\([(i-1)/n,i/n]\\), the infimum is \\((i-1)/n\\) and supremum is \\(i/n\\), with width \\(1/n\\). Thus

\\(L=(1/n^2)\\sum_{i=1}^n(i-1)=(n-1)/(2n)\\),

\\(U=(1/n^2)\\sum_{i=1}^n i=(n+1)/(2n)\\).

The gap is \\(1/n\\), and both sums tend to \\(1/2\\).

</details>

<details><summary>Solution</summary>

### ANA-CH12-E002 — Solution 2

Suppose interval \\([u,v]\\) is split at \\(c\\). If its old infimum is \\(m\\), each new infimum is at least \\(m\\), so

\\(m(c-u)+m(v-c)\\le m_1(c-u)+m_2(v-c)\\).

Thus the lower contribution cannot decrease. Each new supremum is at most the old supremum \\(M\\), giving the reverse inequality for upper contributions. All other intervals are unchanged.

</details>

<details><summary>Solution</summary>

### ANA-CH12-E003 — Solution 3

Choose \\(0<\\delta<1/2\\) and use the partition \\(0,1/2-\\delta,1/2,1\\). Only \\([1/2-\\delta,1/2]\\) has nonzero oscillation, equal to one. Thus the Darboux gap is \\(\\delta\\), arbitrarily small. The function agrees with zero on \\([0,1/2)\\) and one on \\((1/2,1]\\); the single endpoint value does not matter. Its integral is \\(1/2\\).

</details>

<details><summary>Solution</summary>

### ANA-CH12-E004 — Solution 4

Choose \\(M>0\\) bounding the absolute spike heights. Around each of the five points choose intervals of total length below \\(\\varepsilon/(2M)\\) and include all endpoints in a partition. Outside these intervals the oscillation is zero; inside, it is at most \\(2M\\). The Darboux gap is below \\(\\varepsilon\\). Lower and upper integrals squeeze to zero because the function is zero off arbitrarily short intervals.

</details>

<details><summary>Solution</summary>

### ANA-CH12-E005 — Solution 5

On a subinterval of width at most \\(h\\), oscillation is at most \\(7h\\). Therefore

\\(U-L\\le 7h(b-a)=21h\\).

It is enough to take \\(h<0.001/21\\), approximately \\(4.762\\cdot 10^{-5}\\). A uniform partition with \\(n>63000\\) suffices.

</details>

<details><summary>Solution</summary>

### ANA-CH12-E006 — Solution 6

With \\(h=(b-a)/n\\), telescoping gives

\\(U-L=h[f(b)-f(a)]\\).

If \\(f(b)=f(a)\\), the function is constant and every \\(n\\) works. Otherwise choose

\\(n>(b-a)[f(b)-f(a)]/\\varepsilon\\).

</details>

<details><summary>Solution</summary>

### ANA-CH12-E007 — Solution 7

Every interval contains both rational and irrational points, so each infimum is \\(-1\\) and each supremum is \\(2\\). On \\([0,2]\\), every lower sum is \\(-1\\cdot 2=-2\\), while every upper sum is \\(2\\cdot 2=4\\). The gap is always \\(6\\); the function is not integrable.

</details>

<details><summary>Solution</summary>

### ANA-CH12-E008 — Solution 8

Order bounds give

\\(2(4-1)\\le \\int _1^4f\\le 5(4-1)\\),

so \\(6\\le \\int f\\le 15\\). Both bounds are attainable by the constant functions \\(2\\) and \\(5\\), so no sharper universal bounds follow.

</details>

<details><summary>Solution</summary>

### ANA-CH12-E009 — Solution 9

From \\(-|f|\\le f\\le |f|\\), monotonicity gives

\\(-\\int |f|\\le \\int f\\le \\int |f|\\).

This pair of inequalities is equivalent to \\(|\\int f|\\le \\int |f|\\).

</details>

<details><summary>Solution</summary>

### ANA-CH12-E010 — Solution 10

The average is

\\((1/3)\\int _0^3x^2dx=(1/3)[x^3/3]_0^3=3\\).

On \\([0,3]\\), \\(x^2=3\\) at \\(x=\\sqrt{3}\\), the only nonnegative solution.

</details>

<details><summary>Solution</summary>

### ANA-CH12-E011 — Solution 11

For \\(x<y\\),

\\(|F(y)-F(x)|=|\\int _x^y f|\\le \\int _x^y|f|\\le 4(y-x)\\).

Symmetry handles either order, giving \\(|F(y)-F(x)|\\le 4|y-x|\\).

</details>

<details><summary>Solution</summary>

### ANA-CH12-E012 — Solution 12

For \\(x\\le 1/2\\), \\(F(x)=0\\). For \\(x\\ge 1/2\\), the contribution from \\([1/2,x]\\) is \\(x-1/2\\), so \\(F(x)=x-1/2\\). The left derivative at \\(1/2\\) is \\(0\\) and the right derivative is \\(1\\), so \\(F\\) is not differentiable there. Elsewhere \\(F'=f\\).

</details>

<details><summary>Solution</summary>

### ANA-CH12-E013 — Solution 13

Riemann integrability permits jump discontinuities. At a discontinuity, averages over shrinking intervals need not approach the assigned point value. The step function has an accumulation function with unequal one-sided derivatives at its jump. The correct local theorem requires continuity of \\(f\\) at the differentiation point.

</details>

<details><summary>Solution</summary>

### ANA-CH12-E014 — Solution 14

Let \\(u=1-t^2\\), so \\(du=-2t dt\\). When \\(t=0\\), \\(u=1\\); when \\(t=1\\), \\(u=0\\). Therefore

\\(\\int _0^1 2t \\cos(1-t^2)dt=-\\int _1^0 \\cos u du=\\int _0^1 \\cos u du=\\sin 1\\).

The negative differential and reversed endpoints cancel.

</details>

<details><summary>Solution</summary>

### ANA-CH12-E015 — Solution 15

For \\(f(x)=e^x\\) on \\([0,1]\\), \\(|f''(x)|=e^x\\le e\\). With \\(h=1/n\\),

\\(|error|\\le e/(12n^2)\\).

We require \\(n^2>e/(12\\cdot 10^{-6})\\), so \\(n>\\sqrt{e/0.000012}\\approx 475.96\\). Thus \\(n=476\\) suffices.

</details>

<details><summary>Solution</summary>

### ANA-CH12-E016 — Solution 16

For \\(p\\ne 1\\),

\\(\\int _1^R x^{-p}dx=[R^{1-p}-1]/(1-p)\\).

If \\(p>1\\), \\(R^{1-p}\\to 0\\) and the integral converges to \\(1/(p-1)\\). If \\(p<1\\), the power grows and the integral diverges. At \\(p=1\\), the integral is \\(\\log R\\), which diverges. Hence convergence occurs exactly for \\(p>1\\).

</details>

<details><summary>Solution</summary>

### ANA-CH12-E017 — Solution 17

For every \\(R>0\\), odd symmetry gives

\\(\\int _{-R}^R x dx=0\\).

Thus the symmetric principal value is zero. But

\\[\\int _0^R x dx=R^2/2\\to \\infty\\]

and the negative-side integral tends to \\(-\\infty\\); the one-sided improper integrals are not finite, so the whole improper integral does not converge.

</details>

<details><summary>Solution</summary>

### ANA-CH12-E018 — Solution 18

Because the sample set is finite, choose a small open interval containing none of its points. Inside it place a triangular continuous bump of base width \\(w\\) and height \\(H\\), zero outside. Its integral is \\(Hw/2\\). Choose \\(H>200/w\\). The function is continuous, nonnegative, vanishes at every sample, and has integral above \\(100\\). Finite sampling alone cannot certify an unrestricted continuous integrand.

</details>

<details><summary>Solution</summary>

### ANA-CH12-E019 — Solution 19

The width is \\(\\Delta x=1/n\\). The right endpoint of interval \\(i\\) is

\\(x_i=1+i/n\\).

Therefore the right sum is

\\(R_n=(1/n)\\sum_{i=1}^n 1/(1+i/n)\\).

Writing only \\(\\sum1/i\\) would lose both the shifted sample point and the width.

</details>

<details><summary>Solution</summary>

### ANA-CH12-E020 — Solution 20

Continuous integrability uses uniform continuity, obtained from continuity on compact \\([a,b]\\); on a noncompact setting one global oscillation scale may fail. Monotone integrability uses finite endpoint variation and telescoping; without monotonicity, dense full-height oscillation can keep every Darboux gap open. FTC Part I uses continuity at the differentiation point; a jump gives unequal one-sided averages. The trapezoid error bound uses a uniform second-derivative bound; without that smoothness, convergence may be slower and the stated constant has no justification.

</details>

<details><summary>Solution</summary>

### ANA-CH12-E021 — Solution 21

If \\(L=0\\), the Lipschitz condition forces \\(\\varphi\\) to be constant on the range interval, so \\(\\varphi\\circ f\\) is constant and integrable. Suppose \\(L>0\\). Given \\(\\varepsilon>0\\), choose a partition \\(P\\) for which

\\(U(f,P)-L(f,P)<\\varepsilon/L\\).

On each subinterval \\(I_i\\), the oscillation of \\(\\varphi\\circ f\\) is at most \\(L\\) times the oscillation of \\(f\\): for any \\(x,y\\in I_i\\),

\\(|\\varphi(f(x))-\\varphi(f(y))|\\le L|f(x)-f(y)|\\le L(M_i-m_i)\\).

Therefore

\\(U(\\varphi\\circ f,P)-L(\\varphi\\circ f,P)\\le L\\sum(M_i-m_i)\\Delta x_i=L[U(f,P)-L(f,P)]<\\varepsilon\\).

The Darboux criterion proves integrability. The argument shows exactly where uniform Lipschitz control is used; mere continuity of \\(\\varphi\\) would require first restricting to the compact closure of the bounded range and invoking uniform continuity.

</details>

<details><summary>Solution</summary>

### ANA-CH12-E022 — Solution 22

If \\(a=b\\), both the sum and integral are zero. Assume \\(a<b\\). Continuity on compact \\([a,b]\\) is uniform. Given \\(\\varepsilon>0\\), choose \\(\\delta>0\\) so that \\(|x-y|<\\delta\\) implies

\\(|f(x)-f(y)|<\\varepsilon/[2(b-a)]\\).

Take any partition with mesh below \\(\\delta\\) and any tags. Any two points in the same subinterval \\(I_i\\) are less than \\(\\delta\\) apart, so the oscillation \\(M_i-m_i\\) is at most \\(\\varepsilon/[2(b-a)]\\). In particular, the tagged value lies between the lower and upper values, and

\\[m_i\\le f(t_i)\\le M_i\\]

and \\(M_i-m_i\\le \\varepsilon/[2(b-a)]\\). Thus the tagged sum lies between the lower and upper sums, while

\\(U(f,P)-L(f,P)\\le\\sum [\\varepsilon/[2(b-a)]]\\Delta x_i=\\varepsilon/2<\\varepsilon\\).

The integral also lies between those Darboux sums, so \\(|S(P,f)-\\int f|<\\varepsilon\\). The same \\(\\delta\\) works for every placement of partition points and every tag choice; only the mesh matters.

</details>

## 20. Chapter synthesis

Riemann integration is a controlled agreement among finite approximations. Lower sums rise, upper sums fall, and integrability means completeness leaves no gap between their best possible values. Continuity controls local oscillation uniformly; monotonicity controls total oscillation by telescoping; dense persistent oscillation defeats every partition.

The integral then becomes an operator with linearity, order, additivity, and smoothing properties. The fundamental theorem links it to differentiation under precise local and global hypotheses. Numerical rules inherit those hypotheses, and improper integrals add a separate limiting layer that must not be hidden by notation.

The next stages ask what happens when functions themselves form sequences and when sets more complicated than intervals need a notion of size. The uniform-convergence chapter controls interchanging limits; the measure chapters replace partitions with countable set operations and almost-everywhere reasoning.

## Summary

Darboux integration traps a bounded function between lower and upper sums. Refinement tightens that trap, uniform continuity controls all short-interval oscillations, and monotonicity offers a different telescoping mechanism. Persistent full-height oscillation defeats integrability, while finitely many exceptional values can be isolated. Once existence is established, order and integral bounds support accumulation, the fundamental theorem and numerical error estimates. Improper integrals require a further endpoint limit, independently of any finite-interval antiderivative.
`;export{e as default};