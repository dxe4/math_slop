# 6. Function limits, continuity, and inverse maps

## Purpose and prerequisites

You should prove a function limit with an explicit \(\delta\), translate between limits and sequences, prove the intermediate and extreme value theorems, and decide when a monotone function has a continuous inverse. The prerequisites are sequence limits, completeness, and compactness. A picture cannot establish these theorems’ hypotheses.

## Limits and continuity are different assertions

Let \(f:D\to\mathbb R\) and let \(a\) be an accumulation point of \(D\). We write \(\lim_{x\to a}f(x)=L\) if
\[
\forall\varepsilon>0\ \exists\delta>0\ \forall x\in D:
0<|x-a|<\delta\Longrightarrow |f(x)-L|<\varepsilon.
\]
The puncture excludes \(a\) itself. The value \(f(a)\) may be absent or different from \(L\).

For \(a\in D\), \(f\) is **continuous at \(a\)** if, for every \(\varepsilon>0\), some \(\delta>0\) makes \(x\in D\) and \(|x-a|<\delta\) imply \(|f(x)-f(a)|<\varepsilon\). At an accumulation point this says the limit equals \(f(a)\). At an isolated domain point, continuity holds automatically. At an interval endpoint, the restriction \(x\in D\) makes continuity one-sided.

For \(f(x)=x^2\), prove the limit at \(1\) is \(1\). Factor \(|x^2-1|=|x-1||x+1|\). If \(|x-1|<1\), then \(|x+1|<3\). Given \(\varepsilon>0\), choose \(\delta=\min(1,\varepsilon/3)\). Then \(0<|x-1|<\delta\) gives \(|x^2-1|<\varepsilon\). Restricting \(x\) first is what controls the second factor.

## A visual experiment

```mathviz
scene "A controlled limit at one";
domain -1 3;
range -1 6;
param eps = 0.6 from 0.05 to 1;
param d = 0.15 from 0.01 to 0.8;
fn f(x) = x^2;
plot f color blue;
epsilon_delta f at 1 limit 1 epsilon eps delta d;
```

Reduce ε, then adjust δ until the curve inside the horizontal input window stays inside the output band. These are numerical observations, not a proof over every real input. The preceding inequality provides that proof and a rule δ = min(1, ε/3) that works for every ε.

## The sequential criterion

**Theorem 6.1.** The limit of f at a is L exactly when f(xₙ) → L for every sequence xₙ ∈ D ∖ {a} with xₙ → a.

**Proof.** If the limit definition holds, fix ε and its δ. Eventually |xₙ − a| < δ, so eventually |f(xₙ) − L| < ε. Conversely, failure of the limit gives some ε₀ > 0 such that every δ permits an x with 0 < |x − a| < δ but |f(x) − L| ≥ ε₀. Choosing δ = 1/n constructs a sequence contradicting the stated sequential property. ∎

The analogous criterion for continuity permits xₙ = a and requires f(xₙ) → f(a). It is particularly effective when a compactness argument has already produced a convergent subsequence.

### How the limit laws spend an error budget

Suppose \(f(x)\to A\) and \(g(x)\to B\) as \(x\to a\) through a common domain. To show \(f+g\to A+B\), ask for an error below \(\varepsilon/2\) from each term and take the smaller of the two resulting input tolerances. For the product, first require \(|f(x)-A|<1\), which bounds \(|f(x)|\) by \(|A|+1\). Then
\[
|f(x)g(x)-AB|\leq |f(x)|\,|g(x)-B|+|B|\,|f(x)-A|
\]
gives a fixed, finite error budget: demand each summand be below \(\varepsilon/2\). The quotient law additionally needs \(B\ne0\). First make \(|g(x)-B|<|B|/2\), so \(|g(x)|>|B|/2\); only then control the numerator. A zero limiting denominator is a failed hypothesis, even if numerical samples look stable.

**Theorem 6.2 (Composition).** If \(f:D\to E\) is continuous at \(a\in D\) and \(g:E\to\mathbb R\) is continuous at \(f(a)\), then \(g\circ f\) is continuous at \(a\). Given \(\varepsilon\), continuity of \(g\) supplies an input tolerance \(\eta\) around \(f(a)\); continuity of \(f\) supplies a \(\delta\) that makes \(|f(x)-f(a)|<\eta\). The domain inclusion \(f(D)\subseteq E\) ensures the intermediate value is a legal input to \(g\). For a punctured-limit variant \(f(x)\to b\), \(g(f(x))\to g(b)\) follows if \(g\) is continuous at \(b\) and \(f(x)\in E\) near \(a\). Mere knowledge of a punctured limit for \(g\) at \(b\) does not suffice if \(f(x)=b\) infinitely often and \(g(b)\) differs from that limit.

**Guided decision.** You know \(\lim_{x\to0}x^2=0\) and \(\lim_{t\to0}g(t)=1\), while \(g(0)=9\). Before writing \(\lim_{x\to0}g(x^2)\), ask whether \(x^2\) ever equals \(0\) at allowed punctured inputs. It does not; the composite limit is \(1\). If the inner function were \(h(x)=0\) for every \(x\), the composite limit would instead be \(9\). The difference is a domain and value question.

## Intermediate values

**Theorem 6.3 (Intermediate value).** If f is continuous on [a, b] and f(a) < y < f(b), some c ∈ (a, b) satisfies f(c) = y. Reversing the endpoint inequalities gives the same conclusion.

**Proof.** Let S = {x ∈ [a, b] : f(x) < y} and c = sup S. The set is nonempty and bounded. Continuity at a and b implies a < c < b: values near a remain below y, while values near b remain above y. If f(c) < y, continuity puts a point greater than c in S. If f(c) > y, continuity gives a neighborhood of c disjoint from S, contradicting the defining approximation property of the supremum. Both alternatives fail, so f(c) = y. ∎

## Extreme values

**Theorem 6.4 (Extreme value).** A continuous f: K → ℝ on a nonempty compact K attains both a maximum and a minimum.

First f is bounded: otherwise choose xₙ ∈ K with |f(xₙ)| > n. A convergent subsequence in K and continuity would make its function values converge, contradicting unbounded magnitude. Let M = sup f(K). Choose xₙ with f(xₙ) > M − 1/n. Extract xₙₖ → c ∈ K. Continuity gives f(c) = M. Apply the same argument to −f for the minimum. On (0, 1), the continuous function f(x) = x attains neither endpoint value; compactness cannot be dropped.

### Monotonicity and inverse continuity

A strictly increasing continuous \(f:[a,b]\to\mathbb R\) takes every value between \(f(a)\) and \(f(b)\) by IVT, and never takes one value twice. It therefore has an inverse \(f^{-1}:[f(a),f(b)]\to[a,b]\).

**Why is the inverse continuous?** Fix \(y=f(x)\). Suppose \(y_n\to y\) in the range. Each \(x_n=f^{-1}(y_n)\) lies in compact \([a,b]\). If \(x_n\not\to x\), some subsequence stays at distance at least \(\varepsilon_0>0\) from \(x\). That subsequence has a further subsequence converging to \(z\in[a,b]\). Continuity gives \(f(z)=\lim y_{n_k}=y=f(x)\), so injectivity forces \(z=x\), contradicting the distance bound. The sequential criterion proves continuity of \(f^{-1}\), including at the range endpoints. This proof uses compactness to extract \(z\), continuity to pass through \(f\), and strict monotonicity for injectivity.

Continuity is essential for the full interval to be the range. A strictly increasing function can jump: \(f(x)=x\) for \(x<0\), and \(f(x)=x+1\) for \(x\geq0\), on \([-1,1]\). It never attains any value in \((0,1)\). Conversely, a continuous function such as \(x^2\) on \([-1,1]\) is not injective; restricting its domain to \([0,1]\) gives an inverse.

For a new inverse problem, check in this order: (1) the proposed domain, (2) continuity there, (3) injectivity, and (4) the claimed range. The inverse function theorem from calculus gives an additional local derivative formula under stronger hypotheses; it is not needed for continuity of this inverse.

### Why a monotone discontinuity is a jump

Suppose \(f\) is nondecreasing on an interval and \(c\) is an interior point. The sets of values to the left and right of \(c\) are bounded locally by monotonicity. Set
\[
L=\sup_{x<c}f(x),\qquad R=\inf_{x>c}f(x).
\]
Then \(L\leq f(c)\leq R\). These are the left and right limits. To verify the left claim from the definition of supremum, fix \(\varepsilon>0\) and choose \(x_0<c\) with \(f(x_0)>L-\varepsilon\). For every \(x_0<x<c\), monotonicity gives \(L-\varepsilon<f(x)\leq L\); the right proof is parallel using the infimum. Thus \(f\) is continuous at \(c\) exactly when \(L=f(c)=R\). Its possible discontinuity has an actual missing band of output values.

If a monotone function takes every intermediate value between any two of its values, it cannot have such a jump: when \(L<f(c)\), any number strictly between them is omitted; when \(f(c)<R\), the same argument applies on the right. Therefore the intermediate value property forces a monotone function to be continuous at every interior point. This implication is special to monotone functions; a function can have the intermediate value property without being continuous in general. At an endpoint use the corresponding one-sided limit.

### A proof attempt worth repairing

“A continuous \(f:(0,1)\to\mathbb R\) is bounded because the interval is bounded.” This substitutes a property of the inputs for a property of the outputs. Take \(f(x)=1/x\). The correct compactness argument above needs the domain to retain every limit of sequences chosen inside it; \((0,1)\) loses the endpoint \(0\). If \(f\) has a continuous extension to \([0,1]\), apply EVT to the extension and then restrict the resulting bound to \((0,1)\). The extension need not attain its extrema on the smaller domain.

## Exercises

1. Prove lim as x → 2 of (3x − 1) = 5 using an explicit δ.
2. Prove that x³ + x − 1 has exactly one zero in (0, 1).
3. Define g(0) = 1 and g(x) = x² for x ≠ 0. Find its limit at zero and decide continuity there.

<details><summary>Hints</summary>

1. Factor the output error. 2. Combine the intermediate value theorem with strict increase. 3. A limit ignores the value at its center.

</details>

<details><summary>Solutions</summary>

1. Choose δ = ε/3; then |(3x − 1) − 5| = 3|x − 2| < ε.
2. The polynomial is continuous and has values −1 and 1 at the endpoints. For v > u, its increase is (v − u)(v² + uv + u² + 1), which is positive. Existence follows from the theorem and strict increase gives uniqueness.
3. The limit is 0, since δ = √ε controls x². Because g(0) = 1, the function is not continuous at zero.

</details>

## Workshop: a discontinuity hidden from every finite grid

Define D(x)=1 when x is rational and D(x)=0 when x is irrational. Every interval contains rationals and irrationals. At any a, choose one sequence of rationals and another of irrationals approaching a. Their D-values remain 1 and 0 respectively, so the sequential limit criterion rules out a limit at a. Assigning a different value D(a) cannot repair this two-sequence conflict. A finite plot samples only finitely many inputs, and floating-point inputs cannot represent the full rational/irrational distinction; this example must be reasoned about symbolically.

Now define T(x)=xD(x). At zero, |T(x)|≤|x|, so δ=ε proves continuity. At any a≠0, rational and irrational sequences approaching a produce function values tending to a and 0; hence T is discontinuous there. This pair shows how a bound can force continuity at one point even when the inner factor has no limit anywhere. It also demonstrates why “a product of a continuous function and a discontinuous one is discontinuous” is false without further conditions.

An attempted proof of continuity of x² on ℝ says: “Choose δ=ε/(2|a|). Then |x²−a²|=|x−a||x+a|<ε.” It fails when a=0, and it never proves |x+a|≤2|a| for nearby x. The repair begins with |x−a|<1, which gives |x+a|≤|x−a|+2|a|<1+2|a|. Then δ=min(1, ε/(1+2|a|)) works at every real a. The preliminary restriction is a standard move: make an uncontrolled factor locally bounded before allocating the error tolerance.

```exercise
{"id":"analysis-continuity-quantifier","type":"choice","prompt":"To disprove continuity of T(x)=xD(x) at a nonzero a, what is enough?","options":[{"label":"A plot with a visible gap near a.","correct":false,"feedback":"A finite plot cannot resolve the rational and irrational inputs in every neighborhood."},{"label":"Two sequences approaching a whose T-values have different limits.","correct":true,"feedback":"Yes. Density provides rational and irrational sequences with output limits a and 0."},{"label":"One input x near a where T(x) differs from T(a).","correct":false,"feedback":"Continuity allows differences; they must stay large for arbitrarily close inputs."}],"hints":["Use the sequential criterion and the density facts from completeness."]}
```

```exercise
{"id":"analysis-ivthypotheses","type":"written","prompt":"A proposed proof says: ‘f(−1)<0<f(1), so f has a zero between them’ for f(x)=1/x. Identify every failed hypothesis of the intermediate value theorem as stated in this chapter, and give a corrected existence problem where the theorem does apply.","hints":["Evaluate the endpoint signs, then inspect the whole interval.","A polynomial such as x³+x−1 gives a continuous replacement with opposite endpoint signs on a suitable interval."],"rubric":["Checks the actual endpoint inequalities rather than assuming them","Notes f is undefined at zero and therefore not continuous on [−1,1]","States a valid continuous function and interval with verified opposite signs","Concludes existence, without claiming uniqueness from IVT alone"],"solution":"For 1/x, f(−1)=−1 and f(1)=1, so the sign condition holds. But f is undefined at 0 and is not a continuous function on [−1,1], so IVT cannot apply. For g(x)=x³+x−1, g is continuous on [0,1], g(0)=−1 and g(1)=1; IVT gives c∈(0,1) with g(c)=0. Uniqueness needs an additional argument, such as strict increase."}
```

## Independent proof decisions

The next problems ask for a diagnosis before a computation. Save a first attempt, use one hint if needed, and write a revised argument after seeing the worked solution.

```exercise
{"id":"analysis-composition-hole","type":"written","prompt":"Let g(t)=1 for t≠0 and g(0)=7. Compare lim as x→0 of g(x²) with lim as x→0 of g(0·x). State exactly why the usual composition limit slogan cannot give both answers from lim as t→0 of g(t).","hints":["A punctured x-neighborhood need not map into a punctured t-neighborhood.","Evaluate both composites at every allowed x≠0 before taking a limit."],"rubric":["Computes the first composite limit as 1","Computes the second composite limit as 7","Explains that the second inner map equals the exceptional point on every punctured input","States a valid repair: g continuous at 0, or the inner map avoids 0 near the source limit"],"solution":"For x≠0, x²≠0, so g(x²)=1 and its limit is 1. For every x, 0·x=0, so g(0·x)=g(0)=7 and its limit is 7. A punctured limit of g at 0 constrains g(t) only when t≠0; composition is justified here only if g is continuous at 0 or if the inner function avoids 0 at punctured inputs sufficiently near 0."}
```

```exercise
{"id":"analysis-inverse-domain","type":"written","prompt":"A student writes: ‘x² is continuous on [−1,1], hence its inverse on [0,1] is continuous.’ Repair the statement by specifying a valid domain restriction, range, inverse, and a reason for continuity. Then explain why the original domain fails.","hints":["An inverse function requires unique outputs for each input in the range.","Restrict x² to one side of zero, then use the continuous monotone inverse theorem."],"rubric":["Recognizes x² on [−1,1] is not injective","Gives [0,1] as a valid restricted domain with range [0,1]","Identifies the inverse as sqrt(y)","Justifies inverse continuity using the theorem or a direct estimate"],"solution":"On [−1,1], x² takes the same value at x and −x for any nonzero x, so it has no inverse function there. Restrict f(x)=x² to [0,1]. It is continuous and strictly increasing, with range [0,1] by IVT; its inverse is f⁻¹(y)=√y, continuous by the compact monotone inverse theorem. Directly, |√u−√v|≤√|u−v| on [0,1]."}
```

**Delayed retrieval.** In two days, prove the inverse continuity result without looking at its name. Say which line fails if the domain is not compact and which line fails if the function is not injective.
