# Recitation E. What is being integrated?

**Role:** guided recitation after [Riemann integration](integration.md). A numerical value is meaningful only after a bounded function passes an existence test. This recitation separates three questions: can one make the Darboux gap small, can one evaluate the resulting integral, and can one differentiate the accumulation function at a chosen point?

## Case 1: one partition versus every tolerance

For \(f(x)=x\) on \([0,1]\), the uniform \(n\)-cell partition has lower sum \((n-1)/(2n)\), upper sum \((n+1)/(2n)\), and gap \(1/n\). No finite \(n\) gives a zero gap, yet for every \(\varepsilon>0\) choosing \(n>1/\varepsilon\) gives a gap below \(\varepsilon\). The integral exists and is \(1/2\). A statement such as “my plot has 100 cells and looks stable” gives one observed tolerance; the proof gives a partition for **every** tolerance.

On \([0,1]\), the rational indicator has lower sum \(0\) and upper sum \(1\) for every partition, so refinement never helps. The step function \(s(x)=0\) for \(x<1/2\) and \(s(x)=1\) for \(x\ge1/2\) has only one uncertain neighborhood; surround it by a cell of width below \(\varepsilon\), and the remaining cells have zero oscillation. The difference is where the large oscillation persists: everywhere or in a shrinking region.

## Case 2: the FTC asks a pointwise continuity question

Let \(h(x)=x\) except that \(h(0)=7\). It is Riemann integrable because changing one value does not change tagged-sum limits. Its accumulation from zero is \(H(x)=x^2/2\). Thus \(H'(0)=0\), while \(h(0)=7\). The correct FTC I statement differentiates accumulation at points where the integrand is continuous; it does not promise the assigned spike value as a derivative. By contrast, FTC II can still evaluate an integral of a discontinuous integrable function if a valid antiderivative with the stated endpoint regularity is actually supplied.

To justify FTC II from first principles, partition \([a,b]\), apply MVT to the proposed antiderivative on **each** cell, telescope its increments, and then use integrability to pass the tagged sum to the integral. This order does not assume the desired value before proving that it exists.

## Case 3: a substitution can turn around

Take \(g(t)=1-t^2\) on \([-1,1]\), with \(f(u)=u\). From \(t=-1\) to \(0\), \(g\) travels from \(0\) to \(1\), and from \(0\) to \(1\), it returns to \(0\). The two oriented pieces of \(\int f(g(t))g'(t)\,dt\) are \(\int_0^1u\,du=1/2\) and \(\int_1^0u\,du=-1/2\). Their sum is zero. The function \(g\) need not be one-to-one for the chain-rule substitution; orientation is encoded by \(g'\). Replacing \(g'\) with \(|g'|\) would answer an unsigned accumulation question instead.

## Case 4: finite intervals before infinite ones

The construction \(\log x=\int_1^x dt/t\) uses only finite positive intervals. FTC first proves its derivative; the multiplication law and the range argument then justify an inverse exponential. Once these facts exist, one can use substitution in an improper integral, but the substitution must be made at a finite cutoff \(R\) and only then may \(R\to\infty\). For instance, \(u=\log x\) changes \(\int_e^R dx/[x(\log x)^2]\) to \(\int_1^{\log R}u^{-2}du=1-1/\log R\). Since \(\log R\to\infty\), the improper integral is \(1\). This order makes every intermediate integral an ordinary Riemann integral and exposes the endpoint limit.

**Recitation check:** Before calculating, write one sentence saying whether your next step is a partition construction, an evaluation, or a local continuity check. The attempts below focus on that selection.

```exercise
{"id":"analysis-integral-recitation-choice","type":"choice","prompt":"For \\(f(x)=\\sin(1/x)\\) when \\(x>0\\), with \\(f(0)=0\\), what is the productive first move to prove Riemann integrability on \\([0,1]\\)?","options":[{"label":"Differentiate f at zero.","correct":false,"feedback":"Differentiability at zero is irrelevant to Darboux integrability here."},{"label":"Make [0,delta] short, then use uniform continuity on [delta,1].","correct":true,"feedback":"Yes. Boundedness controls the short part, and compact continuity controls the rest."},{"label":"Apply FTC II with an antiderivative on [0,1].","correct":false,"feedback":"That assumes an integrability or antiderivative route before the existence question is settled."}],"hints":["Locate where oscillation persists; bound its contribution by interval length."],"solution":"Choose a short initial interval \\([0,\\delta]\\), whose Darboux gap is at most \\(2\\delta\\) because \\(|f|\\le1\\). On the compact interval \\([\\delta,1]\\), \\(f\\) is continuous and hence uniformly continuous, giving a partition with arbitrarily small remaining gap. Joining these partitions proves integrability."}
```

```exercise
{"id":"analysis-integral-recitation-ftc","type":"written","prompt":"Let \\(k(x)=x\\) for \\(x\\ne0\\), \\(k(0)=7\\), and \\(K(x)=\\int_0^x k(t)\\,dt\\). Explain why \\(K'(0)\\ne k(0)\\) without claiming FTC I is false. State exactly which hypothesis fails at zero.","hints":["Changing one function value does not change its Riemann integral.","Calculate K directly, then inspect continuity of k at zero."],"rubric":["Justifies integrability and unchanged integral after one-point modification","Calculates K(x)=x²/2 and K'(0)=0","States k(0)=7 and k discontinuous at zero","Distinguishes the failed hypothesis from a failure of the theorem"],"solution":"The function \\(t\\mapsto t\\) is integrable; changing its value at one point preserves each integral. Therefore \\(K(x)=\\int_0^x t\\,dt=x^2/2\\) and \\(K'(0)=0\\), while \\(k(0)=7\\). FTC I requires continuity of the integrand at the point where accumulation is differentiated. Here \\(\\lim_{x\\to0}k(x)=0\\ne7\\), so the theorem makes no assertion at zero."}
```
