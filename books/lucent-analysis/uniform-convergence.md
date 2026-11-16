# 10. Uniform convergence: one threshold for every input

**Learning goals.** Distinguish pointwise from uniform convergence by quantifier order; construct a moving witness; use the uniform Cauchy criterion and the Weierstrass M-test; prove continuity survives a uniform limit. Prerequisites: sequences, completeness of \(\mathbb R\), continuity, numerical series, and the previously constructed logarithm and exponential for the peak-limit example.

A function sequence has two variables: the input \(x\) and the index \(n\). Fixing \(x\) first makes an ordinary numerical sequence. To carry a property across all inputs, we need a threshold that works at all inputs together.

## Quantifiers and the supremum error

Let \(D\ne\varnothing\) and let \(f_n,f:D\to\mathbb R\).

- **Pointwise convergence** means \(\forall x\in D\;\forall\varepsilon>0\;\exists N=N(x,\varepsilon)\;\forall n\ge N:\ |f_n(x)-f(x)|<\varepsilon\).
- **Uniform convergence** means \(\forall\varepsilon>0\;\exists N=N(\varepsilon)\;\forall n\ge N\;\forall x\in D:\ |f_n(x)-f(x)|<\varepsilon\).

Uniform convergence implies pointwise convergence. The converse can fail because the pointwise threshold may grow without bound as \(x\) moves. Set \(E_n=\sup_{x\in D}|f_n(x)-f(x)|\), allowing \(E_n=+\infty\). Then \(f_n\to f\) uniformly exactly when \(E_n\to0\). To prove the forward direction, choose the uniform threshold for \(\varepsilon/2\), which gives \(E_n\le\varepsilon/2<\varepsilon\). The reverse direction follows because every individual error is at most \(E_n\).

The negation is useful: convergence is **not** uniform if some \(\varepsilon_0>0\) has the property that, for every \(N\), there are \(n\ge N\) and \(x_n\in D\) with \(|f_n(x_n)-f(x_n)|\ge\varepsilon_0\). The input can depend on \(n\). An unattained supremum can therefore obstruct uniformity.

## Guided visual argument: follow the witness that a fixed input misses

Let \(f_n(x)=x^n\) on \([0,1]\). Move through the stages in order: first hold the input fixed, then permit it to move with \(n\), and finally change the domain and the sequence. Save a reason before opening each diagram. The mathematical sequence uses positive integer values of \(n\); noninteger slider positions are exploratory interpolation, not additional sequence terms. Exact inequalities, rather than rendered samples, decide uniformity.

```visual-story
{
  "id": "pointwise-versus-uniform-powers",
  "title": "One input at a time is not every input at once",
  "prompt": "A fixed observer sees xⁿ fall toward zero, but a moving observer can stay inside the shrinking boundary layer. Decide which observer matches each quantifier order.",
  "stages": [
    {
      "title": "Hold one input fixed",
      "body": "Fix a=0.7 before choosing the index. Translate the requested error into an inequality in n, paying attention to the sign of the logarithm.",
      "question": "For epsilon=0.01, how would you solve 0.7ⁿ<epsilon for a sufficient n? Which part of the answer depends on a?",
      "checkpoint": {
        "hint": "Take logarithms and remember that log(0.7)<0, so division reverses the inequality.",
        "explanation": "For fixed 0<a<1, aⁿ<ε is equivalent to n log a<log ε. Since log a<0, division reverses the order: n>log(ε)/log(a). With a=0.7 and ε=0.01, this ratio is about 12.91, so the least positive integer threshold is N=13. The threshold may depend on the already fixed input a and on ε; that dependence is exactly what pointwise convergence permits.",
        "criteria": [
          "Reverses the inequality when dividing by log(a)<0.",
          "Finds the least integer N=13 for the authored values.",
          "Identifies dependence on both a and epsilon."
        ]
      },
      "transition": "none",
      "focus": ["curve-f", "point-fixed"],
      "scene": [
        "scene \"1. A fixed input sees decay\";",
        "domain 0 1;",
        "range 0 1.1;",
        "param n = 4 from 1 to 60;",
        "param a = 0.7 from 0.1 to 0.95;",
        "fn f(x) = x^n;",
        "plot f color blue;",
        "point fixed = (a,f(a));"
      ]
    },
    {
      "title": "Check the endpoint separately",
      "body": "The fixed-input calculation used 0≤x<1. Treat the remaining endpoint as a separate case before stating a function on the whole closed interval.",
      "question": "Why does the endpoint not disprove pointwise convergence, yet immediately prevent convergence to the zero function on the closed interval?",
      "checkpoint": {
        "hint": "Evaluate f_n(1) for every n, then write the limit with two domain cases.",
        "explanation": "For each fixed x with 0≤x<1, xⁿ→0. At x=1, however, f_n(1)=1 for every n, so the scalar sequence converges to 1. Therefore the actual pointwise limit on [0,1] is f(x)=0 for 0≤x<1 and f(1)=1. The endpoint does not obstruct pointwise convergence because it has its own scalar limit; it does rule out pointwise convergence to the zero function on the whole closed interval. The resulting limit is discontinuous at 1.",
        "criteria": [
          "Evaluates the endpoint sequence separately.",
          "States the pointwise limit on all of [0,1] with both cases.",
          "Rejects the claim that the pointwise limit is zero everywhere."
        ]
      },
      "transition": "transform",
      "focus": ["curve-f", "point-endpoint"],
      "scene": [
        "scene \"2. The endpoint belongs to the pointwise limit\";",
        "domain 0 1;",
        "range 0 1.1;",
        "param n = 12 from 1 to 60;",
        "fn f(x) = x^n;",
        "plot f color blue;",
        "point endpoint = (1,1) color amber;"
      ]
    },
    {
      "title": "Let the input move with n",
      "body": "A uniform claim must survive inputs chosen after the index is known. Find a legal input below the endpoint whose error remains fixed as n changes.",
      "question": "Write the quantifiers that allow xₙ to depend on n. Why can no single uniform threshold defeat this witness?",
      "checkpoint": {
        "hint": "Solve xⁿ=1/2 for x and compare the resulting input with 1.",
        "explanation": "Take x_n=2^(−1/n). Since n is a positive integer, 0<x_n<1, so the pointwise limit at x_n is f(x_n)=0, while f_n(x_n)=(2^(−1/n))^n=1/2. With ε₀=1/2, the negation is: there exists ε₀>0 such that for every N there exist n≥N and x_n∈[0,1] with |f_n(x_n)−f(x_n)|≥ε₀. Choosing any n≥N and this x_n supplies the witness. The input is allowed to depend on n because it is chosen after the proposed threshold.",
        "criteria": [
          "Derives x_n=2^(−1/n) and checks x_n<1.",
          "Computes the exact error 1/2.",
          "Writes the full negation of uniform convergence in the correct quantifier order."
        ]
      },
      "transition": "indicate",
      "focus": ["point-witness"],
      "scene": [
        "scene \"3. A moving witness remains at error one half\";",
        "domain 0 1;",
        "range 0 1.1;",
        "param n = 8 from 1 to 60;",
        "fn f(x) = x^n;",
        "plot f color blue;",
        "point witness = (2^(-1/n),0.5) color rose;"
      ]
    },
    {
      "title": "Fix a smaller domain",
      "body": "Now fix a right endpoint r<1 before choosing a threshold. Determine the largest error on that domain and track exactly which choices the threshold may depend on.",
      "question": "Given epsilon>0, derive one N that works for every x in [0,0.8] and every n≥N.",
      "checkpoint": {
        "hint": "For 0≤x≤r, monotonicity gives x^n≤r^n. Solve r^N<epsilon as in stage one.",
        "explanation": "For every fixed 0≤r<1 and positive integer n, x↦xⁿ is nondecreasing on [0,r], so sup_{x∈[0,r]}xⁿ=rⁿ. If r=0 the error is identically zero. If 0<r<1, choose an integer N>log(ε)/log(r); then for n≥N and every x∈[0,r], 0≤xⁿ≤rⁿ≤r^N<ε. For r=0.8 this is one threshold for the whole chosen domain. It may depend on r and ε, which were fixed first, but not on a later x.",
        "criteria": [
          "Proves the supremum error is r^n rather than reading it from the graph.",
          "Gives one threshold for all x in the fixed domain.",
          "Distinguishes dependence on r from forbidden dependence on a later input."
        ]
      },
      "transition": "camera",
      "focus": ["curve-f", "point-worst"],
      "scene": [
        "scene \"4. A fixed smaller interval has uniform decay\";",
        "domain 0 0.8;",
        "range 0 1.1;",
        "param n = 8 from 1 to 60;",
        "fn f(x) = x^n;",
        "plot f color blue;",
        "point worst = (0.8,0.8^n) color rose;"
      ]
    },
    {
      "title": "Change the sequence, not the domain",
      "body": "Keep [0,1] but change the family explicitly to g_n(x)=x^n/n. Decide whether the obstruction from the moving input survives this change.",
      "question": "Prove uniform convergence directly from the supremum error. Which visual feature changed, and which exact inequality carries the proof?",
      "checkpoint": {
        "hint": "Maximize x^n/n on 0≤x≤1 before choosing N from epsilon.",
        "explanation": "For 0≤x≤1, 0≤xⁿ/n≤1/n, and equality occurs at x=1. Hence ||g_n||_∞=1/n. Given ε>0, choose an integer N>1/ε. Then every n≥N and every x∈[0,1] satisfy |g_n(x)|≤1/n≤1/N<ε. Comparing xⁿ and xⁿ/n at the same index n changes only the vertical scale; as n varies, both families' boundary layers also narrow. It is the exact supremum-height estimate, not a claim about peak width, that proves uniform convergence.",
        "criteria": [
          "Proves the exact supremum norm is 1/n.",
          "Chooses N>1/epsilon and quantifies over every later n and x.",
          "Attributes uniformity to shrinking height rather than shrinking width."
        ]
      },
      "transition": "compare",
      "focus": ["curve-original", "curve-scaled", "point-maximum"],
      "scene": [
        "scene \"5. Scaling the height changes the uniform conclusion\";",
        "domain 0 1;",
        "range 0 1.1;",
        "param n = 6 from 1 to 60;",
        "fn original(x) = x^n;",
        "fn scaled(x) = x^n/n;",
        "plot original color blue;",
        "plot scaled color teal;",
        "point maximum = (1,1/n) color rose;"
      ]
    }
  ]
}
```

## Debrief: the moving boundary layer

The checkpoints establish that the pointwise limit is \(f(x)=0\) for \(x<1\) and \(f(1)=1\). Each \(f_n\) is continuous, but \(f\) is discontinuous at \(1\). At the legal moving input \(x_n=2^{-1/n}\), the error is exactly \(1/2\) for every \(n\). In fact \(E_n=1\): the errors \(x^n\) approach \(1\) as \(x\uparrow1\), though none reaches \(1\) at an input where \(f=0\). The same witness works on \([0,1)\), so merely removing \(1\) does not give uniform convergence. On each fixed \([0,r]\), \(0\le r<1\), the exact supremum error \(r^n\) tends to zero.

The linked investigation makes the quantifier question visible in two coordinated views. **Before changing \(n\) or \(r\), write whether you expect one index threshold to work for every input on \([0,1]\), and predict the worst error on \([0,r]\).** Set \(r=1\), increase \(n\), and inspect both the moving point \(2^{-1/n}\) and its output \(1/2\). Then hold a fixed \(r<1\), increase \(n\), and inspect the maximum \(r^n\) in the restricted view.

```investigation
uniform-powers
```

The exact argument answers the question the pixels cannot. For \(r=1\), take \(\varepsilon=1/4\). For *every* proposed \(N\), choose \(n\ge N\) and \(x=2^{-1/n}<1\); then \(|x^n-f(x)|=1/2>\varepsilon\). On a fixed \([0,r]\) with \(0<r<1\), \(\sup_{x\in[0,r]}|x^n-0|=r^n\to0\), so given any \(\varepsilon>0\), choose \(N\) with \(r^N<\varepsilon\); the same \(N\) works for every \(n\ge N\) and every \(x\in[0,r]\). The choice depends on \(r\), and that is permitted only after the domain is fixed. Revise your saved explanation to identify that dependence.

Now change the family to \(g_n(x)=nx(1-x)^n\) on \([0,1]\). Every fixed input tends to zero: for \(0<x<1\), geometric decay beats the factor \(n\), and the endpoint values are zero. Differentiation gives \(g_n'(x)=n(1-x)^{n-1}(1-(n+1)x)\). Hence its maximum occurs at \(x_n=1/(n+1)\), where
\[
\|g_n\|_\infty
=\frac{n}{n+1}\left(\frac{n}{n+1}\right)^n
=\left(1+\frac1n\right)^{-(n+1)}
\longrightarrow e^{-1}>0.
\]
So \(g_n\to0\) pointwise but not uniformly, even though its pointwise limit is continuous. To verify the last limit without assuming a formula for \(e\), take logarithms: \((n+1)\log(1+1/n)\to1\), for instance by the integral bounds \(t/(1+t)\le\log(1+t)\le t\) at \(t=1/n\).

**Transfer investigation.** Predict whether the shrinking region of large \(g_n\)-values makes convergence uniform. Move \(n\) and read the maximizing input and height. Save a revised argument that begins with the exact maximizing formula, rather than the apparent width of a plotted peak.

```investigation
uniform-transfer
```

For a fixed \(d>0\), the domain change to \([d,1]\) gives \(0\le g_n(x)\le n(1-d)^n\to0\) uniformly. On \([0,1]\), the moving input \(1/(n+1)\) stays legal and its value stays at least \(1/4\). This is the opposite side of the interval from the \(x^n\) boundary layer, so a memorized rule about “near \(1\)” would fail. Use the independent moving-peak problem below to check that your quantified argument transfers to a new family.

## Worked proof: continuity passes to a uniform limit

**Theorem 10.1.** If each \(f_n:D\to\mathbb R\) is continuous relative to \(D\) and \(f_n\to f\) uniformly on \(D\), then \(f\) is continuous relative to \(D\). Compactness of \(D\) is not required.

Fix \(c\in D\) and \(\varepsilon>0\). Uniform convergence gives an index \(N\) such that \(|f(x)-f_N(x)|<\varepsilon/3\) for *every* \(x\in D\). Continuity of this one \(f_N\) at \(c\) gives \(\delta>0\) such that \(x\in D\) and \(|x-c|<\delta\) imply \(|f_N(x)-f_N(c)|<\varepsilon/3\). For such \(x\), the triangle inequality yields
\[
|f(x)-f(c)|
\le |f(x)-f_N(x)|+|f_N(x)-f_N(c)|+|f_N(c)-f(c)|
<\varepsilon.
\]
Since \(c\) was arbitrary, \(f\) is continuous. Pointwise convergence gives no single \(N\) valid for all nearby \(x\), exactly where this proof needs one.

The same argument transfers **uniform continuity**: if each \(f_n\) is uniformly continuous on \(D\) and \(f_n\to f\) uniformly, choose \(N\) for the two outer \(\varepsilon/3\) errors and use a \(\delta\) for \(f_N\) that works for all pairs \(x,y\in D\). This does not require \(D\) to be compact either.

## The uniform Cauchy criterion

**Theorem 10.2.** A sequence \(f_n:D\to\mathbb R\) converges uniformly to a real-valued function if and only if
\[
\forall\varepsilon>0\;\exists N\;\forall m,n\ge N\;\forall x\in D:
|f_m(x)-f_n(x)|<\varepsilon.
\]

If \(f_n\to f\) uniformly, make both \(|f_n-f|\) and \(|f_m-f|\) smaller than \(\varepsilon/2\), then use the triangle inequality. Conversely, the displayed condition makes \((f_n(x))\) Cauchy for each fixed \(x\). Completeness of \(\mathbb R\) gives a limit \(f(x)\). Apply the condition with \(\varepsilon/2\), fix \(n\ge N\) and \(x\), and let \(m\to\infty\). Then \(|f_n(x)-f(x)|\le\varepsilon/2<\varepsilon\), uniformly in \(x\). The completeness step is essential: in a target space that is not complete, pointwise limits may leave the space.

This criterion is especially useful for a function series \(\sum_{k=0}^{\infty}u_k(x)\). Its partial sums converge uniformly exactly when their finite tails become uniformly small:
\[
\forall\varepsilon>0\;\exists N\;\forall m>n\ge N\;\forall x\in D:
\left|\sum_{k=n+1}^{m}u_k(x)\right|<\varepsilon.
\]

## Worked proof: the Weierstrass M-test

Suppose \(|u_k(x)|\le M_k\) for every \(x\in D\), where \(M_k\ge0\) and the numerical series \(\sum_{k=0}^{\infty}M_k\) converges. For \(m>n\),
\[
\sup_{x\in D}\left|\sum_{k=n+1}^{m}u_k(x)\right|
\le\sum_{k=n+1}^{m}M_k.
\]
The numerical Cauchy criterion makes the right side arbitrarily small independently of \(x\). The uniform Cauchy criterion therefore gives uniform convergence of \(\sum u_k\). Also \(\sum_k|u_k(x)|\le\sum_kM_k<\infty\) at every fixed \(x\), so the convergence is absolute pointwise. This proves the **M-test**, rather than merely giving a comparison rule.

For example, \(\sum_{k=1}^{\infty}\sin(kx)/k^2\) converges uniformly on \(\mathbb R\), since \(M_k=1/k^2\). Every partial sum is continuous, so its sum is continuous on \(\mathbb R\). The test is sufficient, not necessary: \(\sum_{k=1}^{\infty}(-1)^{k-1}x^k/k\) converges uniformly on \([0,1]\) by the alternating remainder estimate \( |S(x)-S_N(x)|\le x^{N+1}/(N+1)\le1/(N+1)\), while the natural majorants \(\sup_{[0,1]}|x^k/k|=1/k\) form a divergent series. At \(x=1\) this series is conditional.

## Guided decisions

For each claim, decide first whether the domain and the index allow one bound for every input. Then open the feedback.

1. A student writes, “\(x^n\to0\) for all \(x\in[0,1)\), so the convergence is uniform there.” Which quantifier is missing?
2. A student uses the continuity theorem backward: “The pointwise limit of \(g_n\) above is continuous, so convergence is uniform.” Identify the failed implication.
3. A series has \(|u_k(x)|\le2^{-k}\) on an unbounded domain. Does the size of the domain affect the M-test?

<details><summary>Decision feedback</summary>

1. The student has \(\forall x\;\exists N(x,\varepsilon)\) but needs \(\exists N(\varepsilon)\;\forall x\). The moving input \(2^{-1/n}\) has error \(1/2\) at every stage.
2. The theorem says uniform convergence of continuous functions *implies* a continuous limit. A continuous limit alone does not control the supremum error; \(g_n\) has a moving peak.
3. No. The bound \(\sum_{k>N}2^{-k}\) is independent of \(x\), so the series converges uniformly on the entire domain.

</details>

## Independent practice

Work without a numerical plot first. A written proof should display the bound or moving witness and the quantifier it answers.

```exercise
{"id":"analysis-uniform-moving-wave","type":"written","prompt":"Let \\(h_n(x)=\\sin(nx)/(1+nx)\\) on \\([0,1]\\). Prove pointwise convergence to zero. Find a moving input whose error stays positive, and decide whether convergence is uniform on each fixed \\([d,1]\\) with \\(d>0\\).","hints":["At each fixed \\(x>0\\), use \\(|\\sin(nx)|\\le1\\); check \\(x=0\\) separately.","Try \\(x_n=\\pi/(2n)\\). On \\([d,1]\\), bound the denominator from below by \\(1+nd\\)."],"rubric":["Proves pointwise zero at positive inputs and at zero","Uses a legal moving input with a nonvanishing error","Proves a uniform bound tending to zero on each fixed [d,1]","Explains why the threshold depends on d"],"solution":"For fixed \\(x>0\\), \\(|h_n(x)|\\le1/(1+nx)\\to0\\), and \\(h_n(0)=0\\). For \\(n\\ge2\\), \\(x_n=\\pi/(2n)\\) lies in \\([0,1]\\), and \\(h_n(x_n)=1/(1+\\pi/2)>0\\), so convergence is not uniform on \\([0,1]\\). On fixed \\([d,1]\\), \\(|h_n(x)|\\le1/(1+nd)\\to0\\) uniformly. The threshold depends on the distance \\(d\\) from zero.","transfer":"Changed case: analyze \\(k_n(x)=\\sin(nx)/(1+nx^2)\\) on \\([0,1]\\). Is its pointwise zero limit uniform there or on a fixed \\([d,1]\\)?","transferSolution":"For fixed \\(x>0\\), \\(|k_n(x)|\\le1/(1+nx^2)\\to0\\), and \\(k_n(0)=0\\). At \\(x_n=\\pi/(2n)\\), the value is \\(1/(1+\\pi^2/(4n))\\to1\\), so convergence is not uniform on \\([0,1]\\). On fixed \\([d,1]\\), the error is at most \\(1/(1+nd^2)\\to0\\)."}
```

```exercise
{"id":"analysis-uniform-mtest-choice","type":"choice","prompt":"Suppose |u_k(x)|<=1/k^2 for all real x and all k>=1. Which conclusion follows without additional hypotheses?","options":[{"label":"The series converges uniformly and its sum is continuous.","feedback":"Uniform convergence follows. Continuity of the sum requires continuity of every summand.","correct":false},{"label":"The series converges uniformly and absolutely at each x.","correct":true,"feedback":"The numerical tail of sum 1/k^2 bounds every function tail."},{"label":"The series converges pointwise but may fail to converge uniformly because R is unbounded.","feedback":"The majorant is independent of x, so the unbounded domain does not weaken it.","correct":false},{"label":"The derivative series converges uniformly.","feedback":"Nothing was assumed about derivatives, which may not even exist.","correct":false}],"solution":"The M-test bounds every tail by the convergent numerical tail sum_(k>N)1/k^2. It also bounds the absolute series at each input. Continuity and differentiability require separate assumptions.","hints":["Bound every function-series tail by the same numerical tail of sum 1/k²; ask whether that estimate depends on the input x.", "Separate uniform and absolute convergence from continuity or differentiation: those latter conclusions require additional hypotheses on the summands."]}
```

```exercise
{"id":"analysis-uniform-cauchy-repair","type":"written","prompt":"A proposed proof says: 'For each x, the partial sums of sum u_k(x) are Cauchy. Hence the series converges uniformly.' Repair the claim by stating the missing uniform tail condition. Then apply it to u_k(x)=x^k on [0,r], where 0<r<1, and explain why the same bound fails on [0,1).","hints":["Move the index threshold before the phrase 'for all x'.","Use the geometric tail bound r^(n+1)/(1-r); examine x near 1 if the domain is [0,1)."],"rubric":["States the uniform Cauchy quantifiers correctly","Supplies a bound independent of x on [0,r]","Uses the bound to prove uniform convergence there","Gives a moving-input or supremum reason the argument fails on [0,1)"],"solution":"The required condition is: for every epsilon>0, one N works for all m>n>=N and all x in the domain, making |sum_(k=n+1)^m u_k(x)|<epsilon. On [0,r], the absolute tail is at most sum_(k=n+1)^infinity r^k=r^(n+1)/(1-r), which tends to zero. On [0,1), the sum function is 1/(1-x), and the tail after n terms is x^(n+1)/(1-x), whose supremum is infinite as x approaches 1. The threshold cannot be uniform."}
```

```exercise
{"id":"analysis-uniform-changed-polynomial-layer","type":"written","prompt":"On [0,1], compare p_n(x)=x^(2n)(1-x^n) with q_n(x)=x^(2n)(1-x^n)/n. Prove the pointwise limit of each, determine each exact supremum norm, and decide uniform convergence. Do not infer a supremum from a finite plot.","hints":["For fixed x<1 use geometric decay and check x=1 separately.","Set t=x^n. As x runs over [0,1], t also runs over [0,1]; maximize t²(1−t)."],"rubric":["Proves both pointwise limits are zero, including both endpoints","Justifies the substitution t=x^n over the full closed interval","Maximizes t²(1−t) exactly at t=2/3","Obtains norms 4/27 and 4/(27n)","Uses a moving maximizer or norm criterion to distinguish nonuniform from uniform convergence"],"solution":"For each fixed 0≤x<1, x^(2n) tends to zero while 0≤1−x^n≤1; at x=1 both functions are zero. Thus both pointwise limits are zero. Put t=x^n. The map x↦x^n sends [0,1] onto [0,1], and p_n=t²(1−t). Its derivative in t is t(2−3t), so the maximum occurs at t=2/3 and equals (4/9)(1/3)=4/27. It is attained at x_n=(2/3)^(1/n), so ||p_n||∞=4/27 for every n and convergence is not uniform. Scaling gives ||q_n||∞=4/(27n)→0, so q_n converges uniformly to zero.","transfer":"Changed scaling: for a real α>0, classify uniform convergence of x^(2n)(1−x^n)/n^α on [0,1], and give an explicit epsilon threshold.","transferSolution":"The same maximization gives supremum norm 4/(27n^α), which tends to zero for every α>0. Given epsilon>0, any integer N>(4/(27epsilon))^(1/α) makes the norm smaller than epsilon for every n≥N. At α=0 the norm remains 4/27, showing why the positive exponent matters."}
```

**Later retrieval.** When proving that a series of continuous functions defines a continuous function, identify whether you have uniform tails on the actual domain before applying the continuity theorem. [Exchanging limits, integrals, and derivatives](exchanging-limits.md) uses precisely this decision before interchanging derivatives and integrals.
