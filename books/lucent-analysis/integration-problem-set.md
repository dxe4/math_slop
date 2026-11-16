# Problem set E. Existence before evaluation

**Role:** independent problem set after [the integration recitation](integration-recitation.md). Suggested total: 70 points, ten per problem. Each item asks for a partition or continuity decision before any antiderivative calculation. Keep the saved first attempt, compare the complete solution with the rubric, then submit a revised proof. Problems 2, 3, and 5 deliberately change a hypothesis used in the lesson.

## 1. An interval shifted away from zero

For \(f(x)=x^2\) on \([1,2]\), use equal-width partitions to prove integrability by calculating the exact upper–lower gap. Then use an antiderivative, with its FTC hypotheses stated, to evaluate the integral. Distinguish the existence proof from the value calculation.

## 2. Oscillation crowded near one endpoint

Define \(f(0)=0\) and \(f(x)=\sin(1/x)\) for \(0<x\le1\). Prove \(f\) is Riemann integrable on \([0,1]\) although it is not continuous at zero. Construct the partition from a short interval near zero and a controlled partition away from zero; do not claim that infinitely many oscillations disappear.

## 3. An improper integral is a different question

Set \(g(0)=0\) and \(g(x)=1/\sqrt{x}\) for \(0<x\le1\). Decide whether \(g\) is Riemann integrable on \([0,1]\) under this chapter's definition. Then calculate \(\lim_{\delta\downarrow0}\int_\delta^1g(x)\,dx\). Explain why the finite limit does not change your first answer.

## 4. A moving endpoint

Let \(A(x)=\int_0^{x^2}1/(1+t^2)\,dt\) for real \(x\). Find \(A'(x)\), including at zero, without first naming an elementary antiderivative. State which theorem handles the accumulating integral and which rule handles the moving endpoint.

## 5. A positive value with zero total

A proposed proof says: “If \(f\ge0\) on \([0,1]\) and \(f(c)>0\) for one \(c\), then \(\int_0^1 f>0\).” Give a bounded Riemann-integrable counterexample. Repair the claim by adding a pointwise hypothesis at \(c\) and prove the repaired version using a lower bound on an interval.

## 6. An apparent antiderivative shortcut

Let \(D\) be \(1\) on rational points and \(0\) on irrational points of \([0,1]\). A student proposes \(G(x)=0\), argues that \(G'=D\) at irrational points, and concludes \(\int_0^1D=0\). Diagnose both gaps in that argument. Give a direct upper/lower-sum proof of the actual integrability conclusion.

## 7. A logarithmic tail

Let \(e=\exp(1)\), with \(\exp\) constructed as the inverse of the integral-defined logarithm. For real \(p\), decide exactly when

\[
\int_e^\infty\frac{dx}{x(\log x)^p}
\]

converges. First make the substitution on \([e,R]\) with finite \(R\), then pass to the limit. Explain why a formal change of symbols without the cutoff is incomplete.

**Later retrieval:** Revisit Problems 2 and 5 after function sequences. Ask whether a sequence of integrable functions can have a pointwise limit that is not integrable, and check what type of convergence would justify passing limits through integrals.

```exercise
{"id":"analysis-integral-pset-shifted","type":"written","prompt":"Submit Problem 1: calculate the equal-cell Darboux gap for \\(x^2\\) on \\([1,2]\\), prove existence, and then evaluate by FTC II.","hints":["For an increasing function, the cell extrema occur at its endpoints and the difference telescopes.","Use \\(G(x)=x^3/3\\) only after the gap proves the integral exists."],"rubric":["Uses monotonicity to identify lower and upper cell values","Derives exact gap 3/n on n equal cells","Invokes the Darboux criterion for existence","States G is continuous/differentiable with G'=x² and obtains 7/3"],"solution":"The function \\(x^2\\) is increasing on \\([1,2]\\). For n equal cells of width \\(1/n\\), \\(U-L=(1/n)\\sum_i(x_i^2-x_{i-1}^2)=(1/n)(2^2-1^2)=3/n\\to0\\). Hence it is Riemann integrable by the Darboux criterion. The polynomial \\(G(x)=x^3/3\\) is continuous on \\([1,2]\\), differentiable inside, and \\(G'=x^2\\). FTC II therefore gives \\(\\int_1^2x^2dx=G(2)-G(1)=8/3-1/3=7/3\\)."}
```

```exercise
{"id":"analysis-integral-pset-oscillation","type":"written","prompt":"Submit Problem 2: prove the Riemann integrability of \\(f(0)=0\\), \\(f(x)=\\sin(1/x)\\) for \\(x>0\\), using an epsilon-dependent partition.","hints":["Bound the oscillation contribution on [0,delta] by 2 delta.","On [delta,1], invoke uniform continuity and choose a mesh that makes the remaining gap small."],"rubric":["Notes boundedness |f|≤1 despite oscillation","Chooses delta>0 with 2 delta<epsilon/2","Uses continuity/uniform continuity on [delta,1] to obtain a partition with gap<epsilon/2","Joins partitions and concludes by the Darboux criterion without asserting continuity at zero"],"solution":"Fix \\(\\varepsilon>0\\). Since \\(|f|\\le1\\), choose \\(0<\\delta<1\\) with \\(2\\delta<\\varepsilon/2\\). On \\([0,\\delta]\\) the oscillation is at most 2, so its contribution to any partition gap is at most \\(2\\delta\\). On the compact interval \\([\\delta,1]\\), \\(f\\) is continuous and uniformly continuous, so a sufficiently fine partition there has gap below \\(\\varepsilon/2\\). Join it to the cell \\([0,\\delta]\\). The total gap is below \\(\\varepsilon\\), proving integrability. The function's lack of a limit at zero does not affect this partition estimate."}
```

```exercise
{"id":"analysis-integral-pset-improper","type":"written","prompt":"Submit Problem 3: decide ordinary Riemann integrability of \\(g(0)=0\\), \\(g(x)=1/\\sqrt{x}\\) for x>0, calculate its improper endpoint limit, and separate the two definitions.","hints":["The boundedness requirement is part of the ordinary Riemann definition.","On [delta,1], integrate x^{-1/2} and then let delta decrease to zero."],"rubric":["States g is unbounded near zero and so is not Riemann integrable on [0,1] under the chapter definition","Computes the finite-cutoff integral 2(1-sqrt(delta))","Takes the limit 2 as delta decreases to zero","Explains that improper convergence does not retroactively satisfy ordinary boundedness"],"solution":"For every \\(M>0\\), choose \\(0<x<1/M^2\\); then \\(g(x)>M\\). Thus g is unbounded on \\([0,1]\\) and fails the boundedness requirement for an ordinary Riemann integral. For \\(\\delta>0\\), g is continuous on \\([\\delta,1]\\), and the power antiderivative gives \\(\\int_\\delta^1x^{-1/2}dx=[2\\sqrt{x}]_\\delta^1=2(1-\\sqrt\\delta)\\). Its limit as \\(\\delta\\downarrow0\\) is 2. That is a convergent improper integral, defined by a separate limit, not an ordinary Riemann integral on the closed interval."}
```

```exercise
{"id":"analysis-integral-pset-moving","type":"written","prompt":"Submit Problem 4: differentiate \\(A(x)=\\int_0^{x^2}1/(1+t^2)\\,dt\\) for all real x, including zero, and justify each theorem used.","hints":["First let \\(F(u)=\\int_0^u1/(1+t^2)\\,dt\\).","FTC I gives F'(u); then use the chain rule on F(x²)."],"rubric":["States the integrand is continuous on every relevant compact interval","Applies FTC I to F(u)=integral from 0 to u","Applies the chain rule and obtains 2x/(1+x⁴)","Checks the formula at x=0 rather than excluding it"],"solution":"Let \\(F(u)=\\int_0^u(1+t^2)^{-1}dt\\) for \\(u\\ge0\\). The integrand is continuous, so FTC I gives \\(F'(u)=1/(1+u^2)\\) for u>0 and the same right derivative at u=0. Since \\(A(x)=F(x^2)\\), the chain rule at x≠0 gives \\(A'(x)=F'(x^2)2x=2x/(1+x^4)\\). At zero, \\(0\\le A(h)\\le h^2\\) because the integrand lies between 0 and 1 on [0,h²], so \\(|A(h)/h|\\le|h|\\to0\\). Thus A'(0)=0, matching the formula. The endpoint check avoids invoking a two-sided derivative of F outside its domain."}
```

```exercise
{"id":"analysis-integral-pset-positive","type":"written","prompt":"Submit Problem 5: disprove the claim that one positive value of a nonnegative integrable function forces a positive integral, then repair and prove the claim.","hints":["Set f to 1 at one point and 0 elsewhere.","If f is continuous at c and f(c)>0, find an interval where f≥f(c)/2."],"rubric":["Gives a bounded integrable single-point spike with zero integral","States continuity at the positive point as a sufficient repair","Uses continuity to produce a positive-length one-sided or two-sided interval with positive lower bound","Uses monotonicity/additivity of the integral to conclude total integral>0"],"solution":"Fix \\(c\\in[0,1]\\) and set \\(f(c)=1\\), \\(f(x)=0\\) elsewhere. This differs from zero at one point, so it is Riemann integrable with integral zero, despite \\(f\\ge0\\) and \\(f(c)>0\\). Add continuity of f at c. If \\(f(c)=m>0\\), continuity yields \\(\\delta>0\\) such that \\(f(x)>m/2\\) for all \\(x\\in[0,1]\\) with \\(|x-c|<\\delta\\). This relative neighborhood contains a closed subinterval J of positive length, even if c is an endpoint. Monotonicity and additivity give \\(\\int_0^1 f\\ge\\int_J f\\ge(m/2)|J|>0\\)."}
```

```exercise
{"id":"analysis-integral-pset-dirichlet","type":"written","prompt":"Submit Problem 6: diagnose the proposed antiderivative shortcut for the rational indicator D, then prove directly whether D is Riemann integrable.","hints":["FTC II requires equality of G' and the integrand throughout the open interval, plus integrability of the integrand.","Each partition cell contains both rational and irrational points."],"rubric":["Notes G'=0 differs from D at every rational interior point","Notes that integrability cannot be inferred from the proposed derivative on irrational points","Shows every lower sum is 0 and every upper sum is 1","Concludes D is not Riemann integrable on [0,1]"],"solution":"The derivative of \\(G=0\\) is zero everywhere, while \\(D=1\\) at every rational interior point. Equality only at irrational points is not the FTC II hypothesis. Moreover the theorem assumes the integrand is already Riemann integrable; it cannot be used here to manufacture that fact. Every nontrivial partition cell contains rational and irrational points, so its infimum is 0 and supremum is 1. Thus \\(L(D,P)=0\\) and \\(U(D,P)=1\\) for every partition. The Darboux gap never shrinks, and D is not Riemann integrable."}
```

```exercise
{"id":"analysis-integral-pset-logtail","type":"written","prompt":"Submit Problem 7: classify convergence of \\(\\int_e^\\infty dx/[x(\\log x)^p]\\) for every real p, using finite-cutoff substitution before the limiting step.","hints":["For finite R>e, set \\(u=\\log x\\); then \\(du=dx/x\\) and the new upper endpoint is \\(\\log R\\).","Apply the p-integral test on [1,infinity), remembering the separate case p=1."],"rubric":["Justifies log and exp from the prior integral construction and identifies e=exp(1)","Performs substitution on [e,R], giving integral from 1 to log R of u^{-p}","Uses log R→infinity and the p-integral criterion correctly","Concludes convergence exactly for p>1 and explains the need for separate cutoff limits"],"solution":"The integral-defined logarithm is continuously differentiable and strictly increasing, with \\(\\log e=1\\) and \\(\\log R\\to\\infty\\). For finite \\(R>e\\), substitution \\(u=\\log x\\), \\(du=dx/x\\), gives \\(\\int_e^R dx/[x(\\log x)^p]=\\int_1^{\\log R}u^{-p}du\\). If \\(p\\ne1\\), this equals \\(((\\log R)^{1-p}-1)/(1-p)\\); for \\(p=1\\), it is \\(\\log(\\log R)\\). As \\(R\\to\\infty\\), the first expression has a finite limit \\(1/(p-1)\\) exactly when \\(p>1\\), and the other cases diverge. The finite-cutoff identity is an equality of ordinary Riemann integrals; only after it is established is the infinite-endpoint limit legitimate."}
```
