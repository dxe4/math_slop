# Fixed points, iteration errors, and a local differential equation

**Prerequisites.** Complete metric spaces, continuous functions, and the Fundamental Theorem of Calculus. **Outcome.** Prove the contraction theorem, certify an approximate fixed point with an explicit evaluation-error budget, and verify the domain and Lipschitz conditions for a Picard operator.

A fixed-point equation \(T(x)=x\) identifies *candidates*. It does not say that repeated application of \(T\) approaches one. The map \(T(x)=1-x\) on \([0,1]\) has fixed point \(1/2\), but the orbit starting at 0 alternates \(0,1,0,1,\ldots\). To infer convergence, we need a property controlling distances between successive iterates.

## Session 1: turn an orbit into a certified answer

The useful unknown is often the fixed point itself. We can compute \(x_0,x_1,\ldots\), but we cannot initially compute \(d(x_n,x_*)\) because \(x_*\) has not yet been constructed. The proof below bounds that unknown error using *observable steps* \(d(x_{k+1},x_k)\). The geometric tail is why the hypothesis asks for a **single** factor \(q<1\) on the whole chosen domain.

## The contraction theorem, with the estimate exposed

Let \((X,d)\) be a nonempty complete metric space and \(T:X\to X\) satisfy \(d(Tx,Ty)\le qd(x,y)\) for all \(x,y\in X\), with a fixed \(0\le q<1\). Such a map is a **contraction**.

**Theorem 36.1.** \(T\) has one fixed point \(x_*\). From any \(x_0\in X\), the iterates \(x_{n+1}=T(x_n)\) converge to it, and

\[
d(x_n,x_*)\le\frac{q^n}{1-q}d(x_1,x_0),\qquad
d(x_n,x_*)\le\frac{d(x_{n+1},x_n)}{1-q}.
\]

**Proof.** Repeated contraction gives \(d(x_{n+1},x_n)\le q^n d(x_1,x_0)\). For \(m>n\), the triangle inequality and a finite geometric sum yield

\[
d(x_m,x_n)\le\sum_{k=n}^{m-1}d(x_{k+1},x_k)
\le\frac{q^n}{1-q}d(x_1,x_0).
\]

This tends to zero uniformly over \(m>n\), so \((x_n)\) is Cauchy. Completeness supplies \(x_*\in X\). Because \(T\) is Lipschitz, \(T(x_*)=\lim T(x_n)=\lim x_{n+1}=x_*\). If \(y_*\) is another fixed point, \(d(x_*,y_*)\le qd(x_*,y_*)\), forcing equality of points. Letting \(m\to\infty\) in the finite tail inequality gives the first error bound; starting that inequality at \(n\) with the measured next step gives the second. ∎

The first estimate is **a priori**: it uses \(x_0,x_1\) and a planned iteration count. The second is **a posteriori**: after computing \(x_{n+1}\), it turns the latest step into an error certificate. Neither requires a formula for \(x_*\). For a target error \(\eta\), solve \(q^n d(x_1,x_0)/(1-q)<\eta\) before computing; then compare that sufficient count with the measured-step certificate as you iterate. A smaller actual error can occur sooner than either certificate says.

Each hypothesis matters. On incomplete \((0,1)\), \(T(x)=x/2\) is a contraction of the space into itself; its iterates approach 0, which is absent. If \(q=1\), the oscillating \(1-x\) example shows a fixed point need not attract an orbit. Neither counterexample is fixed by merely solving \(T(x)=x\).

## Change the rule, inspect the orbit, then prove it

On \(X=[1,2]\), set \(T(x)=(x+3)/(x+2)\). Its values range from \(4/3\) at 1 to \(5/4\) at 2, so \(T(X)\subseteq X\). For \(x,y\in X\),

\[
|T(x)-T(y)|=\frac{|x-y|}{(x+2)(y+2)}\le\frac19|x-y|.
\]

The theorem applies with \(q=1/9\). The fixed point solves \(x^2+x-3=0\); only \((\sqrt{13}-1)/2\) lies in \([1,2]\). For \(x_0=1\), \(d(x_1,x_0)=1/3\), so after \(n\) iterations the theorem certifies error at most \(3(1/9)^n/8\).

Here the first terms are \(x_0=1\), \(x_1=4/3\), \(x_2=13/10\), and \(x_3=43/33\). The orbit alternates around \(x_*\) because \(T\) is decreasing. At \(n=2\), the a priori error is at most \(1/216\). The measured step \(|x_3-x_2|=1/330\) gives the sharper a posteriori bound \(3/880\). Both exceed the true error \(|13/10-(\sqrt{13}-1)/2|\); a certificate is a guarantee, not an exact error report.

```notebook
fn update(x) = (x+3)/(x+2);
iterate update from 1 count 12 as orbit;
table orbit;
scatter orbit;
```

The table and scatter plot display **actual iterates**, not samples of a continuous curve. Before running, predict whether they alternate around the fixed point: the map is decreasing. Then change the initial value within \([1,2]\) and compare the observed error with the proved envelope. The theorem covers every allowed initial value, not only displayed points.

**Checkpoint.** If a map satisfies \(|T'(x)|\le0.8\) only on \([1,2]\), can you start at 4? The derivative bound says nothing about an orbit outside that interval. First prove the interval is invariant and choose \(x_0\) inside it. A local derivative calculation alone is not a global contraction theorem.

## Session 2: a small step needs an error certificate

The notebook computes a finite approximation to an orbit. The theorem above concerns exact iterates. To connect them, separate three quantities: distance to the unknown answer, the fixed-point residual, and error introduced when evaluating the update.

**Predict before opening the argument.** On \([0,2]\), consider
\[
T_q(x)=qx+(1-q),\qquad 0\le q<1.
\]
It maps the interval into itself and has fixed point 1. Keep a candidate \(z=1.6\) fixed while increasing \(q\) from \(1/2\) to \(99/100\). Does the candidate become more accurate merely because \(|z-T_q(z)|\) gets smaller? Write down the two distances before using the diagram. The map and diagonal almost coincide when \(q\) is near 1, so their vertical separation can be visually misleading.

<details><summary>Derive the residual certificate</summary>

A **residual** tests how nearly the equation holds at a candidate: \(r(z)=d(z,Tz)\). For any \(z\in X\), the triangle inequality and contraction give
\[
d(z,x_*)\le d(z,Tz)+d(Tz,Tx_*)
\le r(z)+q\,d(z,x_*).
\]
Rearranging the inequality proves
\[
\boxed{d(z,x_*)\le\frac{r(z)}{1-q}}.
\]
Existence of \(x_*\) still comes from the complete, nonempty, invariant contraction space. Once that is proved, the certificate applies to *any* candidate in that space, including one produced by a different algorithm. It does not require that the candidate belong to an exact orbit.

For the affine family, \(z-T_q(z)=(1-q)(z-1)\), so this bound is an equality. At \(z=1.6\), the true error stays \(0.6\). The residual changes from \(0.3\) at \(q=1/2\) to \(0.006\) at \(q=99/100\); dividing by \(1-q\) recovers the same error. A residual alone has no universal conversion to distance without control of that factor.

</details>

The blue curve below is \(y=T_q(x)\), and the violet curve is \(y=x\). The rose vertical segment joins \((z,T_q(z))\) to \((z,z)\), so its length is the residual. The amber horizontal segment at height \(0.15\) has length \(|z-1|\); that height only separates it from the horizontal axis. The fixed point is marked at \((1,1)\). Compare the readouts at \(q=0\), \(1/2\), and \(99/100\), then move the candidate to the other side of 1. The algebra above proves the relation for every allowed setting; the rendered curves and decimal readouts do not certify rounding error.

```mathviz
scene "A candidate, an update, and the diagonal";
domain 0 2;
range 0 2;
param q = 0.5 from 0 to 0.99;
param z = 1.6 from 0 to 2;
fn diagonal(x) = x;
fn update(x) = q*x+(1-q);
plot diagonal color violet;
plot update color blue;
point fixed = (1,1) color teal;
point input = (z,z) color rose;
point output = (z,update(z)) color blue;
segment residual_segment from (z,update(z)) to (z,z) color rose;
segment solution_distance from (1,0.15) to (z,0.15) color amber;
measure residual = abs(z-update(z));
measure contraction_factor = q;
measure residual_multiplier = 1/(1-q);
measure error_bound = abs(z-update(z))/(1-q);
measure actual_distance = abs(z-1);
```

**Which iterate does the bound certify?** If \(w=Tz\) is an *exact* update, then
\[
d(w,x_*)\le q\,d(z,x_*)\le\frac{q}{1-q}d(z,w).
\]
The observed step \(d(z,w)\) therefore certifies \(z\) with factor \(1/(1-q)\), and the newer point \(w\) with the sharper factor \(q/(1-q)\). Name the point being returned before writing a stopping condition. For \(q=0\), the exact update already is the fixed point.

### Account for an approximate update

Suppose a computation returns \(w\in X\), with a *justified* bound
\[
d(w,Tz)\le\eta.
\]
The number \(\eta\ge0\) must include the errors in evaluating the update, rather than being inferred from the number of printed digits. Suppose also that \(\rho\) is an upper bound on the measured distance \(d(z,w)\); if that distance is evaluated approximately, its error must be included in \(\rho\). Then
\[
r(z)\le d(z,w)+d(w,Tz)\le\rho+\eta,
\qquad
\boxed{d(z,x_*)\le\frac{\rho+\eta}{1-q}}.
\]
This is a certificate for the candidate \(z\). To certify a strict target \(d(z,x_*)<\tau\), it suffices to prove
\[
\rho+\eta<(1-q)\tau.
\]
A failed sufficient test leaves the desired accuracy unproved; it does not prove the candidate inaccurate. If the returned point is \(w\), instead use
\[
\begin{aligned}
d(w,x_*)&\le d(w,Tz)+d(Tz,Tx_*)\\
&\le \eta+q\,d(z,x_*)\\
&\le\frac{q\rho+\eta}{1-q}.
\end{aligned}
\]
The evaluation-error term is not multiplied by \(q\); simply multiplying the candidate's entire certificate by \(q\) would lose part of that error budget. A new evaluation of the residual at \(w\) can also certify that point directly.

**Stagnation can give a zero computed step.** In an idealized decimal rounding model, evaluate \(T(x)=0.9x+0.1\) exactly and round the result to the nearest hundredth. At \(z=0.96\), the exact result is \(0.964\), while the rounded output is \(w=0.96\). The computed step is zero but the true distance to the fixed point 1 is \(0.04\). Nearest-hundredth rounding has error at most \(\eta=0.005\), giving the valid bound \((0+0.005)/(1-0.9)=0.05\). Repeating the same rounded update will not improve this candidate. Real floating-point evaluation can introduce additional error before final rounding; this decimal model does not supply a bound for the notebook's implementation.

For an explicit budget, take \(q=0.8\), \(\rho=2\times10^{-5}\), and \(\eta=10^{-5}\). The certificate is \(1.5\times10^{-4}\), so it does not establish a strict \(10^{-4}\) target. With this same evaluation bound, the sufficient condition is \(\rho<10^{-5}\). Even a zero observed step cannot establish a tolerance below \(\eta/(1-q)\) using this estimate alone. Reducing evaluation error can therefore be more useful than running more iterations.

```exercise
{"id":"analysis-contraction-residual-scale","type":"choice","prompt":"A proved contraction on a complete invariant space has \\(q=0.999\\). At a candidate \\(z\\), the exact residual is \\(r(z)=0.00001\\). Which statement does the residual certificate justify?","options":[{"label":"The error is at most 0.01; this test does not establish error below 0.001.","correct":true,"feedback":"Divide the residual by 1−q=0.001. The bound is sufficient and may be conservative."},{"label":"The error is at most 0.00001 because that is the residual.","correct":false,"feedback":"The residual must be scaled by 1/(1−q). The affine family shows that this amplification can be attained."},{"label":"The error is exactly 0.01 for every contraction.","correct":false,"feedback":"The theorem gives an upper bound. Equality holds in the displayed affine example, not for every map."}],"hints":["Start with \\(d(z,x_*)\\le r(z)+q\\,d(z,x_*)\\), and isolate the unknown distance."],"solution":"The theorem gives \\(d(z,x_*)\\le 0.00001/(1-0.999)=0.01\\). This bound is too large to certify error below \\(0.001\\). It does not show that the actual error exceeds \\(0.001\\)."}
```

```exercise
{"id":"analysis-contraction-rounded-certificate","type":"written","prompt":"On \\(X=[0,1]\\), let \\(T(x)=(x+2)/(x+3)\\) and \\(z=73/100\\).\n\n1. Prove the contraction theorem applies, compute the exact residual at \\(z\\), and decide whether it certifies \\(|z-x_*|<3/1000\\).\n2. Give the sharper certificate for the exact next point \\(Tz\\).\n3. Suppose an implementation returns \\(w=0.732\\) and guarantees \\(|w-Tz|\\le 1/10000\\). Using only \\(z,w\\), the guaranteed evaluation bound, and your global contraction factor, can you still certify \\(|z-x_*|<3/1000\\)?\n\nTreat the stated decimals as exact rational data. State why printing \\(w\\) alone would not supply the evaluation-error guarantee.","hints":["\\(T([0,1])=[2/3,3/4]\\), and \\(|T(x)-T(y)|=|x-y|/((x+3)(y+3))\\).","Compute \\(T(73/100)=273/373\\) exactly before subtracting.","For the approximate output, use \\(\\rho=|0.732-0.73|\\) and add \\(\\eta\\) before dividing by \\(1-q\\)."],"rubric":["Checks completeness, invariance, and one global contraction factor","Computes the residual using exact rational arithmetic","Separates the certificate for z from the certificate for Tz","Includes the justified evaluation-error bound in the approximate-output certificate","Explains why a sufficient upper bound and printed digits have different roles"],"solution":"The closed interval is nonempty and complete. \\(T\\) is increasing, and \\(T([0,1])=[2/3,3/4]\\subseteq[0,1]\\). The difference identity gives a contraction factor \\(q=1/9\\).\n\nAt \\(z=73/100\\), \\(Tz=273/373\\), so \\(r(z)=273/373-73/100=71/37300\\). Therefore\n\\[\n\\begin{aligned}\n|z-x_*|&\\le\\frac98\\frac{71}{37300}\\\\\n&=\\frac{639}{298400}<\\frac3{1000}.\n\\end{aligned}\n\\]\nFor the exact next point,\n\\[\n\\begin{aligned}\n|Tz-x_*|&\\le\\frac18\\frac{71}{37300}\\\\\n&=\\frac{71}{298400}.\n\\end{aligned}\n\\]\n\nWith approximate output \\(w=183/250=0.732\\), \\(\\rho=1/500\\) and \\(\\eta=1/10000\\) give\n\\[\n\\begin{aligned}\n|z-x_*|&\\le\\frac98\\frac{21}{10000}\\\\\n&=\\frac{189}{80000}\\\\\n&=0.0023625<0.003.\n\\end{aligned}\n\\]\nThus the target remains certified. The guarantee about \\(|w-Tz|\\) is an assumption to justify by an error analysis or enclosing computation; the displayed digits alone do not prove it.\n\nThe given bound is consistent with the exact values:\n\\[\n\\begin{aligned}\n\\left|\\frac{183}{250}-\\frac{273}{373}\\right|\n&=\\frac9{93250}\\\\\n&<\\frac1{10000}.\n\\end{aligned}\n\\]","transfer":"Replace \\(T\\) by \\(S(x)=(x+1)/(x+3)\\) on \\([0,1]\\), and take \\(z=2/5\\). Find a global contraction factor, the exact residual, and a bound for the candidate’s error without solving the fixed-point equation. Does this bound certify a strict error below \\(1/100\\)?","transferSolution":"The map \\(S\\) sends \\([0,1]\\) to \\([1/3,1/2]\\), and\n\\[\n\\begin{aligned}\n|S(x)-S(y)|&=\\frac{2|x-y|}{(x+3)(y+3)}\\\\\n&\\le\\frac29|x-y|.\n\\end{aligned}\n\\]\nThus \\(q=2/9\\) is valid. At \\(z=2/5\\), \\(Sz=7/17\\), and \\(r(z)=7/17-2/5=1/85\\). The bound is\n\\[\n\\frac{1/85}{1-2/9}=\\frac9{595},\n\\]\nabout \\(0.01513\\). It does not certify error below \\(0.01\\); that failure alone does not establish the opposite inequality."}
```

### Computation reference and limits

The distinction between iteration count and an error estimate is also developed in [Tobias von Petersdorff's University of Maryland fixed-point notes, Sections 1.2–1.4](https://www.math.umd.edu/~petersd/466/fixedpoint.pdf). The residual and evaluation-error arguments here follow directly from the displayed triangle inequalities.

In a general computer algebra system, requesting numerical digits and proving this contraction certificate are separate tasks. Wolfram's [`FindRoot` reference](https://reference.wolfram.com/language/ref/FindRoot.html) describes a numerical search controlled by accuracy, precision, and iteration settings; [`WorkingPrecision`](https://reference.wolfram.com/language/ref/WorkingPrecision.html) specifies internal computational precision. Those options do not establish this lesson's invariant set, contraction factor, or evaluation bound. Lucent's finite notebook uses bounded exact rational arithmetic where supported and approximate arithmetic for transcendental values; its plotted readouts do not implement interval arithmetic or automatic rounding-error certificates. The proofs and exact rational checks above supply the guarantees claimed here.

## Picard iteration: the same proof in a function space

Consider \(y'(t)=F(t,y(t))\), \(y(t_0)=y_0\). Assume \(F\) is continuous on the closed rectangle \(R=\{(t,y):|t-t_0|\le h,\ |y-y_0|\le b\}\), \(|F(t,y)|\le M\) there, and \(|F(t,y)-F(t,z)|\le L|y-z|\) for points in \(R\) with the same \(t\). Choose positive \(h,b\) so \(Mh\le b\) and \(Lh<1\). If \(M=0\), the first condition is automatic.

Let \(X\) be the continuous functions \(g:[t_0-h,t_0+h]\to\mathbb R\) with \(|g(t)-y_0|\le b\) for every \(t\), equipped with sup distance. It is a closed subset of the complete sup-norm function space, hence complete. Define

\[
(Pg)(t)=y_0+\int_{t_0}^{t}F(s,g(s))\,ds.
\]

Here is the completeness step in full. If \((g_n)\) is Cauchy in sup distance, then \((g_n(t))\) is Cauchy in \(\mathbb R\) at every \(t\), so define \(g(t)=\lim_n g_n(t)\). Choose \(N\) so \(\|g_n-g_m\|_\infty<\varepsilon\) for \(m,n\ge N\). Letting \(m\to\infty\) at each \(t\) gives \(|g_n(t)-g(t)|\le\varepsilon\) for every \(t\) and \(n\ge N\), hence convergence is uniform. A uniform limit of continuous functions is continuous. Also \(|g_n(t)-y_0|\le b\) passes to the limit, so \(g\in X\). The rectangle restriction is a closed, complete working space, not merely a bound on a diagram.

For \(g\in X\), \(|Pg(t)-y_0|\le M|t-t_0|\le Mh\le b\), so \(P:X\to X\). For \(g,k\in X\), the Lipschitz condition gives \(\|Pg-Pk\|_\infty\le Lh\|g-k\|_\infty\). The contraction theorem yields a unique fixed point in \(X\). The Fundamental Theorem of Calculus makes that fixed point continuously differentiable and a solution of the initial-value problem. The theorem gives the explicit estimate

\[
\|g_n-g_*\|_\infty\le\frac{(Lh)^n}{1-Lh}\|g_1-g_0\|_\infty,
\quad g_{n+1}=Pg_n.
\]

Both inequalities have distinct jobs. \(Mh\le b\) keeps every new curve inside the rectangle where \(F\)'s bounds are known. \(Lh<1\) shrinks the distance between any two curves. The factor is \(Lh\), rather than \(2Lh\), because \(|\int_{t_0}^{t}\cdot\,ds|\) uses an interval of length at most \(|t-t_0|\le h\), even for \(t<t_0\). If either condition fails for a proposed \(h\), shorten the interval or choose a justified larger \(b\); do not use the bounds outside the rectangle.

This is a **local** existence and uniqueness result on the stated interval and inside the rectangle. It does not assert a global solution or cover a function \(F\) that is merely continuous without the stated Lipschitz bound.

For \(F(t,y)=y\), \(t_0=0\), \(y_0=1\), take \(b=1\), \(h=1/4\), \(M=2\), \(L=1\). The constant start \(g_0(t)=1\) gives \(g_1(t)=1+t\), \(g_2(t)=1+t+t^2/2\), and the error is controlled on \([-1/4,1/4]\) with contraction factor \(1/4\). The polynomial iterates reveal how an ODE solution grows from repeated integration.

The next iterate is \(g_3(t)=1+t+t^2/2+t^3/6\). Since \(\|g_1-g_0\|_\infty=1/4\), the theorem gives \(\|g_n-g_*\|_\infty\le (1/4)^{n+1}/(3/4)\) on the *whole* interval. At \(n=3\), this is \(1/192\). The exact solution happens to be \(e^t\), but the construction and error bound did not require knowing it in advance.

**A failed interval choice.** For \(y'=y^2\), \(y(0)=1\), take \(h=b=1\). On \(|t|\le1,\ |y-1|\le1\), one may take \(M=4\) and \(L=4\), so \(Mh=4>b\) and \(Lh=4>1\). These bounds do not establish an invariant contracting Picard space. The actual solution \(1/(1-t)\) blows up as \(t\uparrow1\), so the claimed interval would have been impossible. A smaller interval can satisfy the local conditions. Failure of one chosen rectangle does not mean local existence fails.

```exercise
{"id":"analysis-fixed-orbit","type":"choice","prompt":"On [0,1], T(x)=1−x has a fixed point at 1/2. What happens to the orbit starting at 0?","options":[{"label":"It alternates between 0 and 1; a fixed point alone does not imply orbit convergence.","correct":true,"feedback":"The Lipschitz factor is 1, so the contraction theorem does not apply."},{"label":"It converges to 1/2 because the fixed point is unique.","correct":false,"feedback":"Compute the first few iterates before claiming convergence."},{"label":"It leaves [0,1], so iteration is undefined.","correct":false,"feedback":"The map sends the interval to itself."}],"hints":["Compute T(0), T(T(0)), then repeat."]}
```

```exercise
{"id":"analysis-picard-hypothesis","type":"choice","prompt":"For a Picard operator on curves satisfying \\(|y-y_0|\\le b\\) over \\(|t-t_0|\\le h\\), which checks have different roles?","options":[{"label":"\\(Lh<1\\) alone keeps the operator inside the rectangle.","correct":false,"feedback":"A distance bound between two outputs does not bound one output's distance from y₀."},{"label":"\\(Mh\\le b\\) keeps the operator in the curve set; \\(Lh<1\\) makes it contract there.","correct":true,"feedback":"Invariance and contraction are separate claims, both needed before the fixed-point theorem applies."},{"label":"\\(Mh\\le b\\) alone proves successive curves converge.","correct":false,"feedback":"Invariance alone gives no shrinking factor."}],"hints":["Ask whether each inequality controls a single curve or the distance between two curves."]}
```

```exercise
{"id":"analysis-contract-certified-orbit","type":"written","prompt":"For \\(T(x)=\\cos(x)/2\\) on \\([0,1]\\), start at \\(x_0=0\\). Verify self-map and contraction hypotheses, give the first two iterates, and find the least \\(n\\) guaranteed by the a priori estimate to have \\(|x_n-x_*|<10^{-3}\\). You need not solve for \\(x_*\\).","hints":["The range is \\([\\cos(1)/2,1/2]\\) and \\(|T'|\\le1/2\\).","Use \\(d(x_1,x_0)=1/2\\) and \\(q=1/2\\); compare \\(n=9\\) and \\(n=10\\)."],"rubric":["Checks [0,1] is complete and T maps it into itself","Derives a global Lipschitz factor 1/2","Computes x₁=1/2 and x₂=cos(1/2)/2","Obtains 2^(−n) and least certified n=10","Distinguishes a sufficient certificate from actual first success"],"solution":"For \\(x\\in[0,1]\\), \\(T(x)\\in[\\cos(1)/2,1/2]\\subseteq[0,1]\\), and the closed interval is complete. By the mean-value theorem, \\(|T(x)-T(y)|\\le|x-y|/2\\), since \\(|T'(u)|=|\\sin u|/2\\le1/2\\). Thus \\(q=1/2\\). The iterates start \\(x_1=1/2\\) and \\(x_2=\\cos(1/2)/2\\). The a priori estimate is \\(q^n|x_1-x_0|/(1-q)=2^{-n}\\). Since \\(2^{-9}>10^{-3}\\) and \\(2^{-10}<10^{-3}\\), \\(n=10\\) is the least count this bound certifies. The true orbit may reach the tolerance sooner.","transfer":"On \\([0,1]\\), replace \\(T\\) by \\(S(x)=\\cos(x)/3\\). From \\(x_0=0\\), give a valid contraction factor and a sufficient count for error below \\(10^{-4}\\).","transferSolution":"\\(S([0,1])\\subseteq[\\cos(1)/3,1/3]\\subseteq[0,1]\\), and \\(|S'|\\le1/3\\), so \\(q=1/3\\). The first step is \\(1/3\\) and the a priori error is \\((1/3)^n(1/3)/(2/3)=3^{-n}/2\\). At \\(n=7\\) it is about \\(2.29\\times10^{-4}\\); at \\(n=8\\) it is about \\(7.62\\times10^{-5}\\), so \\(n=8\\) is least for this bound."}
```

```exercise
{"id":"analysis-picard-changed-data","type":"written","prompt":"For \\(y'=2t+y,\\ y(0)=0\\), use \\(|t|\\le1/5\\) and \\(|y|\\le1\\). Choose \\(M,L,h,b\\), verify that the Picard operator contracts on the closed set of admissible continuous curves, and compute \\(g_1,g_2\\) from \\(g_0=0\\). State the precise existence and uniqueness conclusion.","hints":["On the rectangle, \\(|2t+y|\\le2/5+1\\) and \\(|F(t,y)-F(t,z)|=|y-z|\\).","Integrate \\(2s+g(s)\\), including the orientation when \\(t<0\\)."],"rubric":["Selects M=7/5, L=1, h=1/5, b=1","Checks Mh=7/25≤1 and Lh=1/5<1","Names the complete closed curve space","Computes g₁=t² and g₂=t²+t³/3","States local existence and uniqueness for curves in the rectangle"],"solution":"On the rectangle, take \\(M=7/5\\) and \\(L=1\\). With \\(h=1/5,b=1\\), \\(Mh=7/25\\le1\\), so \\(P\\) maps \\(X=\\{g\\in C([-1/5,1/5]):|g(t)|\\le1\\}\\) into itself. Also \\(\\|Pg-Pk\\|_\\infty\\le\\|g-k\\|_\\infty/5\\). This \\(X\\) is closed in a complete sup-norm space, so the contraction theorem applies. \\(P0(t)=\\int_0^t2s\\,ds=t^2\\) and \\(P(g_1)(t)=\\int_0^t(2s+s^2)\\,ds=t^2+t^3/3\\). The fixed point is a differentiable solution on \\([-1/5,1/5]\\), unique among solutions that remain in the rectangle.","transfer":"Try the same rectangle height \\(b=1\\) but \\(h=3/4\\). Explain exactly which advertised inequalities fail, without concluding that the ODE has no solution.","transferSolution":"On the enlarged rectangle, take \\(M=2h+b=5/2\\) and \\(L=1\\). Then \\(Mh=(5/2)(3/4)=15/8>1\\), so invariance is not certified; \\(Lh=3/4<1\\) still certifies shrinking for curves that remain inside. The failed invariance check blocks this application of the theorem, not other existence proofs or a smaller rectangle."}
```

**Independent transfer.** For \(T(x)=1/(2+x)\) on \([0,1]\), show the interval is invariant, find a valid contraction factor, compute the fixed point, and obtain a numerical iteration count guaranteeing error below \(10^{-4}\) from \(x_0=0\). Then explain why solving the quadratic before verifying convergence would leave the orbit question unanswered.

<details><summary>Worked solution</summary>

\(T([0,1])=[1/3,1/2]\subseteq[0,1]\). For \(x,y\in[0,1]\), \(|T(x)-T(y)|=|x-y|/((2+x)(2+y))\le|x-y|/4\), so \(q=1/4\). The fixed-point equation is \(x^2+2x-1=0\), whose member of \([0,1]\) is \(\sqrt2-1\). Here \(x_1=1/2\), and the a priori error after \(n\) steps is at most \((1/4)^n(1/2)/(3/4)=(2/3)4^{-n}\). At \(n=7\) this is about \(4.07\times10^{-5}<10^{-4}\); \(n=6\) gives about \(1.63\times10^{-4}\). The algebra identifies a candidate. Invariance, contraction, and completeness prove that this particular orbit converges to it.

</details>
