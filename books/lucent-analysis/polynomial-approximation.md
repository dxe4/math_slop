# Why continuous functions can be approximated by polynomials

**Prerequisites.** Uniform continuity on a compact interval, finite binomial identities, and nonnegative weighted sums. **Outcome.** Construct explicit approximants, prove a uniform error bound, and distinguish approximation of values from approximation of derivatives.

A smooth curve on a screen can be approximated by a polynomial, but pixels do not show whether one polynomial works uniformly at *every* point. Here the approximation is constructive: sample the function at \(n+1\) points, blend those values with weights that concentrate near the input, and prove that the worst error tends to zero.

## Session 1: build the polynomial from samples

For continuous \(f:[0,1]\to\mathbb R\) and each integer \(n\ge1\), define the Bernstein polynomial

\[
B_nf(x)=\sum_{k=0}^{n}f(k/n)\binom nk x^k(1-x)^{n-k}.
\]

The terms are polynomials in \(x\). The weights \(w_{n,k}(x)=\binom nkx^k(1-x)^{n-k}\) are nonnegative and sum to 1 by the binomial theorem. Their weighted mean sampling point is \(x\), and their weighted squared deviation is

\[
\sum_{k=0}^n w_{n,k}(x)\frac{k}{n}=x,\qquad
\sum_{k=0}^n w_{n,k}(x)(k/n-x)^2=\frac{x(1-x)}{n}\le\frac1{4n}.
\]

For completeness, \(\sum k\binom nk x^k(1-x)^{n-k}=nx\) follows from \(k\binom nk=n\binom{n-1}{k-1}\) and the binomial theorem. For \(n\ge2\), \(k(k-1)\binom nk=n(n-1)\binom{n-2}{k-2}\), giving \(\sum k(k-1)w_{n,k}=n(n-1)x^2\); for \(n=1\), both sides are zero directly. Expand \(k^2=k(k-1)+k\) and then the square to obtain the displayed deviation identity. No probability theory is required, although the weights are binomial probabilities.

The identities give three immediate tests of the construction. Constants are reproduced because the weights sum to one: \(B_n1=1\). The function \(t\mapsto t\) is reproduced because the weighted mean is \(x\): \(B_nt=x\). For \(t^2\), the variance identity gives \(B_nt^2=x^2+x(1-x)/n\); the quadratic is *not* reproduced exactly. These checks catch a common error: treating \(B_nf\) as an interpolating polynomial through every sample. In general it only matches \(f\) at the two endpoints.

For a small calculation, let \(n=2\). The weights at \(x=1/2\) are \(1/4,1/2,1/4\). For \(f(t)=t^2\), the sampled values are \(0,1/4,1\), so \(B_2f(1/2)=3/8\) while \(f(1/2)=1/4\). The positive error \(1/8\) matches \(x(1-x)/n\). For \(f(t)=|t-1/2|\), the same weights combine \(1/2,0,1/2\) to give \(B_2f(1/2)=1/4\), filling in the corner. This source function is continuous but has no derivative at the corner; the theorem below needs continuity, not differentiability.

**Checkpoint.** Why are the weights nonnegative only on \([0,1]\)? Outside that interval, \(x\) or \(1-x\) changes sign, so the convex-average and near/far arguments no longer apply as stated. The polynomial still has values outside \([0,1]\), but this proof concerns approximation on the specified interval.

## The uniform estimate

Let \(M=\sup_{[0,1]}|f|\) and \(\omega_f(\delta)=\sup\{|f(u)-f(v)|:u,v\in[0,1],\,|u-v|\le\delta\}\). Continuity on the compact interval gives \(\omega_f(\delta)\to0\) as \(\delta\downarrow0\). For each \(x\), split the weighted error into sampling points within \(\delta\) of \(x\) and those farther away.

Why split? Uniform continuity controls \(|f(k/n)-f(x)|\) only when \(k/n\) is close to \(x\). Far samples can differ by as much as \(2M\), but the squared-deviation identity says their *total weight* is small. Neither fact alone handles all terms. In formulas, write \(B_nf(x)-f(x)=\sum_k w_{n,k}(x)(f(k/n)-f(x))\) and apply the triangle inequality before splitting the indices.

The near contribution is at most \(\omega_f(\delta)\) because the weights sum to at most 1. The far contribution is at most \(2M\) times the far weight. For \(|k/n-x|>\delta\), \(1\le(k/n-x)^2/\delta^2\), so the deviation identity bounds the far weight by \(1/(4n\delta^2)\). Therefore, uniformly in \(x\),

\[
\|B_nf-f\|_\infty\le\omega_f(\delta)+\frac{M}{2n\delta^2}.
\]

Given \(\varepsilon>0\), first choose \(\delta\) with \(\omega_f(\delta)<\varepsilon/2\), then choose \(n\) large enough that \(M/(2n\delta^2)<\varepsilon/2\). This proves \(\|B_nf-f\|_\infty\to0\). The order of these choices is part of the proof. Letting \(\delta\to0\) and \(n\to\infty\) vaguely “together” would not control the denominator.

There is also a valid linked choice: \(\delta_n=n^{-1/4}\) makes \(\omega_f(\delta_n)\to0\) and the far term \(M/(2\sqrt n)\to0\). Choosing \(\delta_n=n^{-1/2}\) is too fast for this estimate: its far term remains \(M/2\). That does *not* mean the theorem is false; it means this particular bound no longer proves it. The fixed-\(\delta\)-then-large-\(n\) proof works for every continuous \(f\) without needing to guess a rate for its modulus of continuity.

If \(f\) is Lipschitz with constant \(L\), a sharper bound follows from the weighted Cauchy–Schwarz inequality:

\[
|B_nf(x)-f(x)|\le L\sum_k w_{n,k}|k/n-x|
\le L\sqrt{x(1-x)/n}\le\frac{L}{2\sqrt n}.
\]

This is an explicit error certificate. It is often conservative; the exact error for a particular function can be much smaller.

The weighted Cauchy–Schwarz step uses \(\sum_k w_{n,k}=1\): \((\sum_k w_{n,k}|k/n-x|)^2\le(\sum_k w_{n,k})(\sum_k w_{n,k}(k/n-x)^2)\). The variance identity then supplies the stated square-root bound. A numerical plot or sampled maximum can test its plausibility for a particular \(n\), but the bound comes from the identities and holds at *every* input.

## A worked model and a boundary of the theorem

For \(f(t)=t^2\), the second-moment identity gives \(B_nf(x)=x^2+x(1-x)/n\). Its exact worst error is \(1/(4n)\) at \(x=1/2\). To guarantee error at most \(0.001\), \(n=250\) suffices and is minimal for this exact family.

Uniform approximation of *values* does not imply uniform approximation of derivatives. The continuous function \(f(t)=|t-1/2|\) is not differentiable at \(1/2\), while every \(B_nf\) is a polynomial. A sharper example keeps the limit differentiable: \(p_n(x)=x^n/n\) tends uniformly to zero on \([0,1]\), since \(\|p_n\|_\infty=1/n\), but \(p_n'(1)=1\) for every \(n\), while the derivative of the limit is zero. The theorem still gives uniform convergence of \(B_nf\) to \(f\). Any derivative claim needs different hypotheses and proof. Likewise, approximability by polynomials does not make every continuous function analytic.

An affine change of variable \(t=(x-a)/(b-a)\) transfers the result from \([0,1]\) to any nondegenerate closed interval \([a,b]\). The case \(a=b\) is trivial: a constant polynomial matches the sole value.

## Session 2: edit the approximant, then explain it

This notebook constructs a real callable Bernstein polynomial from the named source \(f\). Change \(n\), the witness input, the near/far radius \(\delta\), or the definition of \(f\). One run updates the curves, marked witness, error curve, node weights, and readouts. Before running, predict whether \(B_nf\) lies above the square function at the witness. At \(n=8\), \(x=1/2\), and \(\delta=0.2\), predict which sample indices are near. After that, change the source to `abs(x-0.5)` and predict what happens at the corner. You can also try `x`, which the first-moment identity reproduces exactly in mathematics.

```notebook
param n = 8 from 1 to 24;
param witness = 0.5 from 0 to 1;
param delta = 0.2 from 0.05 to 0.5;
fn f(x) = x^2;
bernstein f degree n as b;
overlay f, b from 0 to 1 at witness;
weights b at witness radius delta;
fn error(x) = abs(b(x)-f(x));
plot error from 0 to 1;
show f(witness);
show b(witness);
show error(witness);
table b from 0 to 1 count 9;
```

The weight view makes the proof's split visible. At the default values, indices \(3,4,5\) are near because their sample locations are within \(0.2\) of \(1/2\); all other indices are far. The far mass is \(74/256=0.2890625\). The second moment is \(1/32\), so the proof certifies far mass at most \((1/32)/(0.2)^2=0.78125\). The certificate is looser than the observed mass, but it works without inspecting every weight. Increase \(n\): the distribution concentrates near the witness. Increase \(\delta\): more nodes count as near, while the polynomial and its actual error stay the same. Change \(f\): the weights and far-mass bound stay the same at fixed \(n,x,\delta\), but the weighted gaps change. These three comparisons explain why the near and far parts of the proof need different facts.

The interactive degree is bounded at 24 to keep every rerun small. The earlier \(n=250\) threshold for the square function is a **mathematical calculation**, outside this interactive range; the finite visual is not a substitute for that guarantee. The plotted coefficients and values use floating-point arithmetic, so exact reproduction of \(x\) may show rounding at machine precision. The weight chart and node table describe **one** witness, not all \(x\). Their highest displayed error need not be the true supremum. For the square function the proven identity \(B_nf-f=x(1-x)/n\) supplies that supremum; for the cusp, the Lipschitz estimate supplies a global upper bound even though the plot alone cannot.

**Explain before revealing anything.** The chart has a far-weight certificate, but it has no computable value of \(\omega_f(\delta)\) for an arbitrary edited function. State which part of the written proof supplies that missing uniform information. Then say why choosing \(\delta\) first and \(n\) second matters.

For the cusp at \(x=1/2\), \(B_2f(1/2)=1/4\) and \(B_4f(1/2)=3/16\). A learner can check those two values from the binomial weights before inspecting a curve. The falling witness error is consistent with the theorem, but two plotted values cannot establish uniform convergence. Return to the near/far proof: continuity controls *near* samples, and the variance identity makes the total *far* weight vanish. Write a revised explanation that names both mechanisms.

**Boundary of the hypothesis.** If you edit \(f\) into a discontinuous step, the notebook can still compute finite Bernstein polynomials, but the uniform convergence theorem above does not apply. Each approximant is continuous; a uniform limit of continuous functions would be continuous. The error display may reveal a persistent transition, but the proof of nonuniformity comes from that continuity theorem or a direct witness, not a few pixels.

```exercise
{"id":"analysis-bernstein-far-certificate","type":"choice","prompt":"At degree 4, witness x=1/2 and radius δ=0.2, the variance bound gives far mass at most 1/(4nδ²)=1.5625. The actual far mass is at most 1. What should you conclude?","options":[{"label":"The inequality is valid but uninformative for these settings; changing δ or n may make it useful.","correct":true,"feedback":"An upper bound larger than one is still true. It cannot by itself show that far mass is small."},{"label":"The Bernstein second-moment identity is false because a mass cannot exceed one.","correct":false,"feedback":"An upper bound may exceed the quantity it bounds. The identity and inequality remain valid."},{"label":"Discard all far nodes, because the bound exceeds one.","correct":false,"feedback":"Far nodes still contribute. The proof must control their total weight, not delete them."}],"hints":["Compare the assertion ‘mass ≤ 1.5625’ with the independent fact ‘mass ≤ 1’. Is either assertion false?"]}
```

```exercise
{"id":"analysis-bernstein-weight-split","type":"written","prompt":"For n=4 and witness x=1/2, list the Bernstein weights. Classify near and far nodes first with δ=0.2, then with δ=0.3, and calculate the far mass in each case. For f(t)=t(1-t), compute B₄f(1/2) and its signed error. Explain why changing δ changes the displayed split but cannot change this error, and why neither finite split proves uniform convergence.","hints":["At x=1/2 the five weights are the coefficients of (1+1)^4 divided by 16. The node locations are 0,1/4,1/2,3/4,1.","Use f=t-t² and the first two Bernstein moments to calculate B₄f before comparing the two radii."],"rubric":["Lists weights 1,4,6,4,1 over 16 and identifies the near nodes for both radii","Computes far masses 10/16 and 2/16","Computes B₄f(1/2)=3/16 and signed error −1/16","Explains that δ only partitions the same weighted sum","Distinguishes a finite witness from the uniform argument using continuity and the second moment"],"solution":"The weights at x=1/2 are (1,4,6,4,1)/16 at the five equally spaced nodes. At δ=0.2 only the central node 1/2 is near, so the far mass is (1+4+4+1)/16=10/16. At δ=0.3 the nodes 1/4,1/2,3/4 are near, leaving far mass (1+1)/16=2/16. Since B₄t=x and B₄t²=x²+x(1-x)/4, for f=t-t² we have B₄f(x)=x(1-x)(1-1/4). Thus B₄f(1/2)=3/16, while f(1/2)=1/4, giving signed error −1/16. The radius is used only to partition fixed summands; it does not enter B₄f. A computation at one witness cannot show a uniform claim. The proof uses uniform continuity to choose δ for every x, then the second-moment inequality to control far mass for all x with one sufficiently large n.","transfer":"Keep x=1/2 and δ=0.2 but use n=8 and f(t)=t². Determine the near indices, exact far mass, and exact signed approximation error. Which of these numbers can the second-moment identity establish without inspecting the plotted bars?","transferSolution":"The near indices are 3,4,5, with mass (56+70+56)/256=182/256; far mass is 74/256=37/128. For f=t², the moment identity gives B₈f(1/2)-f(1/2)=x(1-x)/8=1/32. The same identity gives the variance 1/32 and therefore the far-mass bound (1/32)/(0.2)²=25/32. It does not by itself give the exact far mass 37/128; that requires the relevant binomial weights or another exact calculation."}
```

```exercise
{"id":"analysis-bernstein-quantifiers","type":"choice","prompt":"In the uniform Bernstein estimate, what order of choices proves convergence?","options":[{"label":"Choose δ from uniform continuity, then choose n to control M/(2nδ²).","correct":true,"feedback":"Fixing δ first prevents the far-weight denominator from escaping control."},{"label":"Choose n=δ and send both to zero.","correct":false,"feedback":"n is an integer tending to infinity; an unexamined joint limit does not bound the error."},{"label":"Choose a different n for each x and call the result uniform.","correct":false,"feedback":"Uniform convergence requires one n that works for every x."}],"hints":["Read which term of the error bound depends on δ alone."]}
```

```exercise
{"id":"analysis-bernstein-delta-choice","type":"choice","prompt":"Which linked scale \\(\\delta_n\\) makes the displayed near/far estimate tend to zero for every continuous \\(f\\) on \\([0,1]\\)?","options":[{"label":"\\(\\delta_n=1\\), because no sampled point is farther than one.","correct":false,"feedback":"That leaves the near term \\(\\omega_f(1)\\) fixed and generally positive."},{"label":"\\(\\delta_n=n^{-1/4}\\), because \\(\\omega_f(\\delta_n)\\to0\\) and \\(1/(n\\delta_n^2)=1/\\sqrt n\\to0\\).","correct":true,"feedback":"Both near and far terms vanish; the same \\(n\\) works across the interval."},{"label":"\\(\\delta_n=n^{-1/2}\\), because the far term becomes a constant.","correct":false,"feedback":"A constant upper bound on the far term does not prove it tends to zero."}],"hints":["Substitute each scale into 1/(nδ²) as well as ω_f(δ)."]}
```

```exercise
{"id":"analysis-bernstein-affine","type":"written","prompt":"Prove from the weights that \\(B_n\\) reproduces every affine function \\(f(t)=a+bt\\) on \\([0,1]\\). Why might the error plot for \\(f(t)=t\\) show tiny floating-point residuals without contradicting the identity?","hints":["Use the total-weight and first-moment identities separately.","Distinguish exact polynomial identities from finite-precision evaluation."],"rubric":["Expands Bₙ(a+bt) as two weighted sums","Uses Σw=1 and Σ(k/n)w=x","Concludes Bₙf(x)=a+bx at every x","Explains floating-point roundoff without treating samples as proof"],"solution":"Linearity of the finite sum gives \\(B_nf(x)=a\\sum_kw_{n,k}(x)+b\\sum_k(k/n)w_{n,k}(x)\\). The first sum is \\(1\\) and the second is \\(x\\), so \\(B_nf(x)=a+bx\\) for every \\(x\\in[0,1]\\) and \\(n\\ge1\\). An implementation evaluates rounded binary numbers and may accumulate a tiny residual; the exact finite identity has zero error.","transfer":"For \\(f(t)=t(1-t)\\), determine \\(B_nf-f\\) exactly and find its uniform norm.","transferSolution":"Since \\(f=t-t^2\\), \\(B_nf=x-(x^2+x(1-x)/n)=f(x)-x(1-x)/n\\). Therefore \\(\\|B_nf-f\\|_\\infty=1/(4n)\\), attained at \\(x=1/2\\)."}
```

```exercise
{"id":"analysis-bernstein-root","type":"written","prompt":"Let \\(f(x)=\\sqrt x\\) on \\([0,1]\\). Prove \\(|\\sqrt u-\\sqrt v|\\le\\sqrt{|u-v|}\\). Use the Bernstein weights and second-moment identity to derive a uniform error bound tending to zero. Why is differentiability at \\(0\\) irrelevant?","hints":["For \\(u\\ge v\\), prove \\((\\sqrt u-\\sqrt v)^2\\le u-v\\).","Apply weighted Cauchy–Schwarz twice: first to the mean of \\(\\sqrt{|D|}\\), then to the mean of \\(|D|\\)."],"rubric":["Proves the half-Hölder bound","Bounds the weighted value error by a weighted square-root deviation","Uses the second moment to obtain (1/(4n))^(1/4)","States the resulting uniform convergence and separates it from differentiability"],"solution":"For \\(u\\ge v\\ge0\\), \\((\\sqrt u-\\sqrt v)^2=u+v-2\\sqrt{uv}\\le u-v\\), because \\(\\sqrt{uv}\\ge v\\). Thus \\(|\\sqrt u-\\sqrt v|\\le\\sqrt{|u-v|}\\). Put \\(D=k/n-x\\) and use nonnegative weights of total one: \\(|B_nf(x)-f(x)|\\le\\sum_kw_{n,k}\\sqrt{|D|}\\le(\\sum_kw_{n,k}|D|)^{1/2}\\le(\\sum_kw_{n,k}D^2)^{1/4}\\le(1/(4n))^{1/4}\\). The bound is independent of \\(x\\) and tends to zero. The source is continuous, though its derivative is unbounded near zero; Bernstein approximation needs continuity, not differentiability.","transfer":"For the same \\(f\\), find a degree sufficient under this bound to certify error at most \\(0.1\\). Can the notebook display that degree?","transferSolution":"Require \\((1/(4n))^{1/4}\\le0.1\\). Raising to the fourth power gives \\(1/(4n)\\le10^{-4}\\), hence \\(n\\ge2500\\). This is a sufficient analytic certificate, beyond the notebook's interactive degree limit of \\(24\\)."}
```

**Independent transfer.** On \([-1,1]\), let \(f(x)=x^2\). Transport the Bernstein construction using \(t=(x+1)/2\). Derive the resulting polynomial and exact uniform error. Then explain why a sample grid that misses \(x=0\) can underreport that error.

<details><summary>Worked solution</summary>

Writing \(g(t)=f(2t-1)=(2t-1)^2\), linearity of \(B_n\), \(B_n1=1\), \(B_nt=t\), and \(B_nt^2=t^2+t(1-t)/n\) give \(B_ng(t)=(2t-1)^2+4t(1-t)/n\). Since \(4t(1-t)=1-x^2\), the transferred polynomial is \(x^2+(1-x^2)/n\). The error is \((1-x^2)/n\), maximal at \(x=0\) with value \(1/n\). A grid omitting zero can show smaller errors at every displayed point while the true supremum remains \(1/n\).

</details>
