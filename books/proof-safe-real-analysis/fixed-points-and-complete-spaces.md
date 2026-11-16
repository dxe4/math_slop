
# Fixed Points and Complete Metric Spaces

An equation can often be rewritten as a fixed-point problem

\(x=T(x)\).

That reformulation is useful only if iteration is controlled. The Banach contraction theorem supplies existence, uniqueness, convergence of an algorithm, and explicit error bounds from one quantitative hypothesis. Completeness ensures the computed Cauchy orbit lands inside the space; invariance ensures every iteration remains in the audited region.

This chapter treats the theorem as both a proof and a verification pattern. It then applies the pattern to scalar equations, parameter sensitivity, integral equations, and local differential-equation existence.

There are three logically distinct questions behind any fixed-point computation.

1. **Existence:** is there an \(x_*\) for which \(T(x_*)=x_*\)?
2. **Identification:** if a fixed point exists, is it the only one in the region under study?
3. **Computation:** does the recursively defined orbit \(x_{n+1}=T(x_n)\) reach it, and how can finite computation certify the error?

Many existence theorems answer only the first question. The contraction principle answers all three at once. Its price is a strong, checkable inequality. That trade is especially valuable in numerical analysis: the same estimate that proves the theorem becomes an error bar for the algorithm.

Throughout, \(T^n\) means the \(n\)-fold composition of \(T\), with \(T^0\) the identity. A **fixed point** is not the same thing as a zero: it is a solution of \(T(x)=x\). A zero of \(F\) becomes a fixed point only after one chooses a rearrangement, and the choice of rearrangement is part of the mathematics.

## 1. Contractions shrink every pair

Let \((X,d)\) be a metric space. A map \(T:X\to X\) is a **contraction** if there is \(q\in [0,1)\) such that

\[d(Tx,Ty)\le q d(x,y)\]

for all \(x,y\in X\).

The strict inequality \(q<1\) is global and quantitative. A map satisfying only \(d(Tx,Ty)<d(x,y)\) for unequal points need not have a uniform rate or a fixed point on a noncompact space.

The constant need not be the smallest possible one. The number

\[Lip_D(T)=\sup_{x\ne y \in D} d(Tx,Ty)/d(x,y)\]

is the optimal Lipschitz constant on \(D\) when the supremum is finite. Any verified upper bound \(q<1\) is enough for the theorem, but a sharper bound produces sharper convergence and stability estimates. It is therefore useful to distinguish the **true contraction factor**, which may be hard to compute, from a **certified contraction factor**, which is an explicit safe upper bound.

On a real interval, the mean value theorem gives a standard certificate. If \(D\) is an interval, \(T\) is differentiable on an interval containing \(D\), and

\(\sup_{x \in D}|T'(x)|\le q<1\),

then \(|T(x)-T(y)|\le q|x-y|\) for \(x,y\in D\). In several dimensions the analogous argument uses a bound on the operator norm of the derivative. The chosen norm matters: the same derivative may have operator norm above one in one norm and below one in another.

Every contraction is Lipschitz and uniformly continuous. More importantly, repeated application compounds the rate:

\(d(T^n x,T^n y)\le q^n d(x,y)\).

This inequality describes loss of memory. Two orbits started at different points become exponentially indistinguishable. It does not yet show that either orbit has a limit: both could, in principle, run toward a missing boundary point. Completeness is the hypothesis that closes precisely that gap.

## 2. Banach contraction theorem

**Theorem 18.1.** If \(X\) is nonempty and complete and \(T:X\to X\) is a contraction with constant \(q<1\), then:

1. \(T\) has a unique fixed point \(x_*\);
2. for every starting point \(x_0\in X\), the iteration \(x_{n+1}=T(x_n)\) converges to \(x_*\);
3. the a priori error satisfies
   \(d(x_n,x_*)\le q^n d(x_0,x_1)/(1-q)\);
4. the a posteriori error satisfies
   \(d(x_n,x_*)\le q d(x_n,x_{n-1})/(1-q)\).

The nonempty hypothesis merely permits a starting point. The self-map hypothesis \(T:X\to X\) is essential: without it, the second iterate may not even be defined. The contraction estimate then turns the first observed displacement into control of the entire infinite tail.

### The orbit is Cauchy

Successive steps obey

\(d(x_{n+1},x_n)\le q^n d(x_1,x_0)\).

For \(m>n\), the triangle inequality gives

\(d(x_m,x_n)\le \sum_{k=n}^{m-1}d(x_{k+1},x_k)\le d(x_1,x_0)\sum_{k=n}^\infty q^k\).

Hence

\(d(x_m,x_n)\le q^n d(x_1,x_0)/(1-q)\to 0\).

Completeness supplies \(x_n\to x_*\in X\).

This calculation contains the core geometric-series mechanism. It also gives the more precise finite-tail inequality

\(d(x_m,x_n)\le q^n(1-q^{m-n})d(x_1,x_0)/(1-q)\).

Letting \(m\to \infty\) after the limit has been constructed yields the a priori estimate. Alternatively, start the same tail calculation at \(n\) and use

\[d(x_{n+1},x_n)\le q d(x_n,x_{n-1})\]

to obtain the a posteriori estimate. The two estimates use different information: the first can be planned before iteration begins; the second adapts to the steps actually observed.

### The limit is fixed

Uniform continuity of \(T\) gives \(T(x_n)\to T(x_*)\). But \(T(x_n)=x_{n+1}\to x_*\), so uniqueness of limits yields \(T(x_*)=x_*\).

### The fixed point is unique

If \(x_*\) and \(y_*\) are fixed,

\(d(x_*,y_*)=d(Tx_*,Ty_*)\le q d(x_*,y_*)\).

Since \(q<1\), the distance must be zero.

### A proof ledger

It is worth recording exactly where each assumption entered.

- The contraction inequality controlled successive steps and later proved uniqueness.
- The triangle inequality converted control of steps into control of long displacements.
- The convergence of the geometric series used \(q<1\).
- Completeness produced a limit belonging to \(X\).
- Continuity of \(T\), already implied by contraction, passed the fixed-point equation to the limit.
- Nonemptiness supplied \(x_0\).

This ledger is a diagnostic tool. When a proposed generalization fails, it identifies which line must be replaced rather than merely saying that “Banach does not apply.”

### Nested certified balls

The residual estimate has a geometric reading. For every \(x\in X\), define

\(r(x)=d(x,Tx)/(1-q)\).

Then the unique fixed point belongs to the closed ball \(closedBall(x,r(x))\). During iteration this produces certified enclosures centered at computable iterates. The radii decrease at least geometrically because

\(d(x_n,x_{n+1})\le q^n d(x_0,x_1)\).

For the exact iterates these residual balls are nested. Indeed,
\(r(x_{n+1})\le q r(x_n)\) and
\(d(x_n,x_{n+1})=(1-q)r(x_n)\), so the triangle inequality gives
\(\overline B(x_{n+1},r(x_{n+1}))\subseteq
\overline B(x_n,r(x_n))\). Residual balls around unrelated trial points need
not be nested. Every certified ball still contains the same fixed point.

## 3. Completeness and invariance do different jobs

**Worked example 2 (a missing fixed point).**

On the incomplete space \((0,1)\) with ordinary distance, \(T(x)=x/2\) is a contraction with constant \(1/2\), but its only possible fixed point is zero, outside the space. Iteration is Cauchy and converges in \(R\); completeness is what would keep the limit in the domain.

In applications, one often proves that a closed subset \(D\) of a complete space is mapped into itself. Then \(D\) is complete under the inherited metric, and the theorem applies to \(T:D\to D\).

The two checks are separate:

- **invariance:** \(T(D)\subseteq D\), so iterates remain legal;
- **contraction:** one \(q<1\) controls every pair in \(D\).

A derivative bound can prove contraction on an interval, but it does not prove invariance.

Nor does boundedness prove completeness. The open interval \((0,1)\) is bounded and not complete; the closed but unbounded set \([0,\infty)\) is complete as a subset of \(R\). In a complete ambient metric space, closedness is the convenient route to completeness. In an arbitrary ambient space, saying that \(D\) is closed is not enough: for example, the entire incomplete space is closed in itself.

There is also a common domain mismatch. Suppose a derivative bound is known on \(D\) but \(T(D)\) is not contained in \(D\). One cannot silently use the bound at later iterates, because they may leave the audited region. The safe workflow is:

1. declare the exact set and metric;
2. prove that set is complete;
3. prove the image remains in the set;
4. prove one uniform contraction estimate there;
5. only then start the iteration.

For an interval \(D=[a,b]\), invariance can sometimes be checked from monotonicity by bounding the endpoint values. Without monotonicity, one must bound the whole range \(T(D)\), often through derivative information, convexity, or interval arithmetic.

## 4. Scalar fixed-point design

To solve \(F(x)=0\), choose a rearrangement \(x=T(x)\). Different rearrangements of the same equation can have very different contraction constants.

### Worked example: \(x=\cos x\)

On \(D=[0,1]\), \(\cos x\in [cos1,1]\subseteq [0,1]\), so the interval is invariant. Also

\(|T'(x)|=|\sin x|\le sin1<1\).

The mean value theorem makes \(T\) a contraction. Therefore the equation has exactly one solution in \([0,1]\), and iteration from any point in that interval converges to it.

The theorem does not claim there are no solutions outside the audited interval. That requires a separate global argument.

For this equation a global argument is available. Any solution must lie in \([-1,1]\) because \(|\cos x|\le 1\). On that interval \(h(x)=x-\cos x\) has derivative \(h'(x)=1+\sin x\ge 1-\sin 1>0\). Hence \(h\) is strictly increasing on \([-1,1]\), so the fixed point already found is the unique real solution. This illustrates the separation between a contraction certificate on one interval and a global root count.

Starting at \(x_0=1\), the first displacement is \(1-\cos 1\). With \(q=\sin 1\), Banach gives

\(|x_n-x_*|\le (\sin 1)^n(1-\cos 1)/(1-\sin 1)\).

This bound is rigorous but conservative: the derivative becomes much smaller than \(\sin 1\) near the fixed point. A global constant gives a uniform guarantee, not necessarily a faithful prediction of late-stage speed.

### Designing a rearrangement

If \(F(x)=0\), the relaxed map

\[T_\alpha(x)=x-\alpha F(x)\]

has the same fixed points as \(F\) for \(\alpha\ne 0\). On an interval where \(m\le F'(x)\le M\) with \(0<m\le M\), choosing \(\alpha>0\) gives

\(T_\alpha'(x)=1-\alpha F'(x)\).

The worst-case derivative magnitude is bounded by \(\max(|1-\alpha m|,|1-\alpha M|)\). Balancing the endpoint magnitudes gives \(\alpha=2/(m+M)\) and the factor

\(q=(M-m)/(M+m)\).

This elementary optimization is the one-dimensional ancestor of step-size selection in gradient methods. It also exposes conditioning: when \(M/m\) is large, even the best uniform factor is close to one.

This calculation certifies shrinkage only. The selected interval must still be invariant under \(T_\alpha\); optimization of the rate cannot replace that domain check.

## 5. Stopping rules from observable data

The true error \(d(x_n,x_*)\) contains the unknown solution. The a posteriori estimate replaces it with the last observed step:

\(d(x_n,x_*)\le [q/(1-q)]d(x_n,x_{n-1})\).

Thus to certify error below \(\varepsilon\), stop when

\[d(x_n,x_{n-1})\le [(1-q)/q]\varepsilon\]

for \(q>0\).

An a priori iteration count follows from

\(q^n d(x_0,x_1)/(1-q)\le \varepsilon\).

Taking logarithms requires care because \(\log q<0\); solve the inequality with the direction reversed when dividing.

The rate degrades as \(q\) approaches one. A contraction constant is not merely a proof checkbox; it predicts computational cost.

More explicitly, if \(0<q<1\) and \(A=d(x_0,x_1)/(1-q)>0\), it is enough to choose

\(n\ge \log(\varepsilon/A)/\log q\).

Because \(\log q<0\), this lower bound is meaningful when \(\varepsilon<A\). The smallest guaranteed integer is the ceiling of the right-hand side, truncated below by zero. If \(A=0\), the starting point is already fixed and no logarithm is needed. A proof-safe implementation should avoid informal sign manipulation and should account for rounding when it reports a certificate.

### Residual versus step size

For any trial point \(x\), not necessarily an iterate,

\(d(x,x_*)\le d(x,Tx)/(1-q)\).

The quantity \(d(x,Tx)\) is the fixed-point residual. It is especially useful when an external solver proposes \(x\): evaluating the map once turns that proposal into a certified approximation. The reverse inequality

\[d(x,Tx)\le (1+q)d(x,x_*)\]

follows from the triangle inequality. Thus residual and error are equivalent up to known constants for a contraction. A small residual is meaningful because the factor \(1/(1-q)\) has been audited; without stability, a small residual alone can be misleading.

If evaluation is performed in floating-point arithmetic, the computed residual is not automatically the mathematical residual. One must add a rounding or evaluation-error bound. If an enclosure proves \(d(x,Tx)\le \rho\), then \(\rho/(1-q)\) is safe.

## 6. Perturbing the map perturbs the fixed point

Let \(T\) and \(S\) be contractions on the same complete space with a common constant at most \(q<1\). Let their fixed points be \(x_T\) and \(x_S\), and suppose

\(\sup_x d(Tx,Sx)\le \eta\).

Then

\[d(x_T,x_S)=d(Tx_T,Sx_S)\]

\[\le d(Tx_T,Tx_S)+d(Tx_S,Sx_S)\]

\(\le q d(x_T,x_S)+\eta\).

Therefore

\(d(x_T,x_S)\le \eta/(1-q)\).

The factor \(1/(1-q)\) is a condition number for the fixed point. Strong contraction gives robustness; near-noncontraction amplifies model or numerical error.

The same argument handles parameterized maps. Suppose \(T_p:D\to D\) is a contraction with a uniform factor \(q<1\) for every parameter \(p\), and

\[d(T_p x,T_r x)\le L_p |p-r|\]

uniformly in \(x\). If \(x(p)\) denotes the fixed point, then

\(d(x(p),x(r))\le L_p |p-r|/(1-q)\).

Thus uniform contraction proves Lipschitz dependence on parameters without differentiating the solution. This is a simple implicit-function principle with an explicit constant.

### Inexact iteration

Real computations often produce \(y_{n+1}\) satisfying

\[d(y_{n+1},T(y_n))\le \delta_n\]

rather than exact equality. Comparing with the fixed point gives

\(d(y_{n+1},x_*)\le q d(y_n,x_*)+\delta_n\).

Iterating this inequality yields

\(d(y_n,x_*)\le q^n d(y_0,x_*)+\sum_{k=0}^{n-1}q^{n-1-k}\delta_k\).

If \(\delta_k\le \delta\), then the persistent error is at most \(\delta/(1-q)\) in the limit superior. If \(\delta_k\to 0\), a short head-and-tail argument in the convolution shows \(y_n\to x_*\). The theorem is therefore robust to vanishing computation error, while fixed error creates a predictable accuracy floor.

## 7. An iterate can be contractive even when the map is not

If some power \(T^m\) is a contraction, then \(T^m\) has a unique fixed point \(x_*\). Moreover,

\(T^m(Tx_*)=T(T^m x_*)=Tx_*\),

so \(Tx_*\) is also a fixed point of \(T^m\). Uniqueness gives \(Tx_*=x_*\). Thus \(T\) has the same unique fixed point.

Iteration in blocks of \(m\) converges. This extension is useful for dynamical systems whose one-step behavior does not visibly shrink but whose multi-step behavior does.

There is a subtle distinction between convergence of the block subsequence and convergence of the entire orbit. Banach applied to \(T^m\) gives \(T^{mn}x\to x_*\). For each residue \(r\in \{0,\ldots,m-1\}\), apply the same theorem to the legal starting point \(T^r x\):

\(T^{mn+r}x=(T^m)^n(T^r x)\to x_*\).

Hence the full sequence converges. This argument does not require continuity of \(T\); merely knowing that one subsequence converges would not be enough.

An important instance occurs for Volterra integral operators. Their one-step norm can exceed one on a long interval, while repeated integration supplies a factorial denominator. If

\[(Au)(t)=\int _0^t K(t,s)u(s)ds\]

and \(|K|\le M\) on \(0\le s\le t\le T\), then an induction over the integration simplex gives

\(\lVert A^n u\rVert_\infty\le (MT)^n\lVert u\rVert_\infty/n!\).

Consequently, a sufficiently high power of \(\lambda A\) has norm below one for every fixed \(\lambda\) and \(T\). The “contractive iterate” principle can therefore solve some Volterra equations even when the direct bound \(|\lambda|MT<1\) fails.

This factorial estimate certifies shrinkage, not the self-map property. On
\(C([0,T])\), impose enough continuity on the kernel so that \(A\) maps continuous
functions to continuous functions; on an \(L^\infty\) space, verify the corresponding
measurability and essential-boundedness statements. The affine Volterra map
\(u\mapsto g+\lambda Au\) must act on one declared complete space before the contractive-iterate
argument applies.

## 8. Fixed points in function spaces

Let \(C([0,T])\) carry the uniform norm; it is complete. Consider the integral equation

\(u(t)=u_0+\int _0^t f(s,u(s))ds\).

Define

\((Tu)(t)=u_0+\int _0^t f(s,u(s))ds\).

If \(f\) is Lipschitz in its second argument with constant \(L\), then

\(\lVert Tu-Tv\rVert_\infty\le LT\lVert u-v\rVert_\infty\).

Choose \(T\) small enough that \(LT<1\). If a closed ball of functions is invariant under the map, Banach's theorem gives a unique fixed point, which is a solution of the integral equation.

This is the Picard–Lindelöf existence-and-uniqueness mechanism for ordinary differential equations. Local time is chosen to buy contraction.

Several analytic facts are compressed into this construction. First, \(C([0,T])\) is complete in the uniform norm: a uniformly Cauchy sequence converges uniformly to a function, and a uniform limit of continuous functions is continuous. Second, if \(f\) is continuous, then \(Tu\) is continuous. Third, the integral equation implies differentiability and the differential equation

\[u'(t)=f(t,u(t)), u(0)=u_0\]

by the fundamental theorem of calculus. Conversely, integrating any classical solution recovers the integral equation. The fixed-point and initial-value formulations are therefore equivalent under these hypotheses.

### Successive approximations

With \(u_0(t)\) chosen as the constant initial value, Picard iteration produces

\(u_{n+1}(t)=u_0+\int _0^t f(s,u_n(s))ds\).

For the linear equation \(u'=au\), \(u(0)=c\), the successive approximations are

\(u_n(t)=c \sum_{k=0}^n (at)^k/k!\).

Their fixed-point limit is \(ce^{at}\). This familiar power series is not guessed; it is generated by the same iteration whose convergence Banach certifies on a suitable interval.

## 9. Proving the invariant ball

Suppose \(|f(t,y)|\le M\) on a rectangle

\(0\le t\le T\), \(|y-u_0|\le R\).

For any function \(u\) staying in that vertical ball,

\(|(Tu)(t)-u_0|\le \int _0^tM ds\le MT\).

Thus choosing \(T\le R/M\) makes the ball invariant. Simultaneously require \(LT<1\) for contraction.

The existence interval must satisfy both conditions:

\[T\le \min(R/M,1/L)\]

with strictness in the contraction bound when needed.

Ignoring invariance is a common circular argument: the Lipschitz and size bounds may only be known inside the rectangle, so one must prove iterates never leave it.

To make endpoint strictness unambiguous, one may choose

\(0<T\le R/M \text{ and } 0<T<1/L\).

If \(M=0\), the invariance restriction is automatic; if \(L=0\), the contraction factor is zero. The rectangle should include every point \((t,u(t))\) reached by every function in the ball. When negative time is also desired, use \([-T,T]\) and replace \(t\) by \(|t|\) in the size estimate.

The result is local because \(M\) and \(L\) were assumed only on a local rectangle. Extending a solution beyond this interval is a separate continuation problem. One typically starts again from the endpoint and asks whether the solution remains inside a region where the required bounds hold.

## 10. Weighted norms enlarge time intervals

On \(C([0,T])\), define the Bielecki norm

\(\lVert u\rVert_\beta=\max_{0\le t\le T}e^{-\beta t}|u(t)|\).

For the Picard operator,

\[e^{-\beta t}|(Tu)(t)-(Tv)(t)|\le L\int _0^t e^{-\beta(t-s)} e^{-\beta s}|u(s)-v(s)|ds\]

\(\le (L/\beta)\lVert u-v\rVert_\beta\).

Choosing \(\beta>L\) makes the operator contractive regardless of \(T\), provided invariance or a global growth condition is available. Equivalent norms can expose contraction that the ordinary uniform norm hides.

For fixed finite \(T\), the weighted and ordinary norms satisfy

\(e^{-\beta T}\lVert u\rVert_\infty\le \lVert u\rVert_\beta\le \lVert u\rVert_\infty\).

They therefore define the same convergent sequences and the same complete space. Changing the norm has not added missing limits; it has changed the quantitative geometry so that integration carries the favorable factor \(1/\beta\).

The displayed contraction estimate follows by inserting

\[|u(s)-v(s)|\le e^{\beta s}\lVert u-v\rVert_\beta\]

and computing

\(e^{-\beta t}\int _0^t e^{\beta s}ds=(1-e^{-\beta t})/\beta\le 1/\beta\).

This derivation shows exactly where the factor comes from and why \(\beta>0\) is required.

## 11. Integral equations with kernels

For continuous \(g\) and \(K\),

\(u(x)=g(x)+\lambda\int _a^b K(x,t)u(t)dt\),

define \(T\) by the right side. If \(|K(x,t)|\le M\), then

\(\lVert Tu-Tv\rVert_\infty\le |\lambda|M(b-a)\lVert u-v\rVert_\infty\).

When \(|\lambda|M(b-a)<1\), the equation has a unique continuous solution. Continuity of both \(g\) and the kernel is what makes the displayed right side a self-map of \(C([a,b])\). The iterates generate the Neumann series

\(u=g+\lambda Ag+\lambda^2A^2g+\ldots\),

where \(A\) is the integral operator. The geometric contraction estimate controls the truncation error.

Continuity of \(K\) in both variables ensures that \(A\) maps continuous functions to continuous functions. If the kernel is merely bounded but not suitably regular in \(x\), the operator may fail to map \(C([a,b])\) into itself; the norm estimate alone does not repair a failed self-map hypothesis. One may instead work in a complete space such as \(L^\infty\), provided the integral operator and equality are interpreted appropriately.

Starting with the zero function, the \(n\)th partial sum is

\(u_n=\sum_{k=0}^{n-1}\lambda^k A^k g\).

If \(r=|\lambda| \lVert A\rVert<1\), the tail satisfies

\(\lVert u-u_n\rVert_\infty\le r^n \lVert g\rVert_\infty/(1-r)\).

This is simultaneously a convergence proof for the operator series and an error bound for truncating it.

## 12. Newton maps and local contraction

Newton's method for \(F(x)=0\) uses

\(T(x)=x-F(x)/F'(x)\).

To invoke Banach, one must find a closed interval \(D\) such that \(T(D)\subseteq D\) and \(\sup_D|T'|<1\). Near a simple root, \(T'(r)=0\), so a sufficiently small neighborhood is often contractive.

More precisely, assume \(F\) is twice continuously differentiable near a simple
root \(r\) and restrict to a neighborhood on which \(F'\) has no zeros. Then
differentiating gives

\(T'(x)=F(x)F''(x)/(F'(x))^2\).

At the simple root, \(F(r)=0\) and \(F'(r)\ne 0\), so \(T'(r)=0\). Continuity of this derivative produces a neighborhood with \(|T'|<1\). Without the stated smoothness, the displayed differentiation and continuity inference are not automatic. Contraction alone is not enough; a usable theorem still requires a closed interval that the Newton map sends into itself.

A convenient one-dimensional certification is to choose a center \(x_0\) and radius \(R\), set \(D=[x_0-R,x_0+R]\), and verify

\(|T'(x)|\le q<1\) for \(x\in D\), and \(|T(x_0)-x_0|\le (1-q)R\).

Then for any \(x\in D\),

\(|T(x)-x_0|\le |T(x)-T(x_0)|+|T(x_0)-x_0|\le qR+(1-q)R=R\).

Thus the second inequality proves invariance while the first proves contraction. This center-radius test converts range control into bounds that interval arithmetic can often verify automatically.

This yields more than a local error formula: once the interval is certified, iteration cannot escape and convergence is guaranteed. Interval arithmetic can rigorously enclose \(T(D)\) and \(T'(D)\), turning numerical root finding into a proof.

### Systems and choice of norm

For \(F:R^d\to R^d\), a fixed-point map has a matrix derivative. A bound

\[\sup_{x\in D}\lVert DT(x)\rVert_{op}\le q<1\]

in the operator norm induced by the chosen vector norm proves contraction on a convex set \(D\). Scaling the coordinates changes that norm and can reveal contraction hidden by disparate units. If \(P\) is invertible, measuring \(x\) by \(\lVert Px\rVert\) replaces \(DT\) by \(P DT P^{-1}\) in the norm estimate. The fixed points do not change, but the certificate can improve.

For coupled equations it is often useful to derive componentwise estimates

\[d_i(T_i x,T_i y)\le \sum_j a_{ij}d_j(x_j,y_j)\]

with a nonnegative matrix \(A=(a_{ij})\). Positive coordinate weights can turn these inequalities into a contraction in a weighted maximum metric when the weighted row sums are below one. This is a finite-dimensional analogue of choosing a Bielecki norm.

## 13. Non-contractive maps may still have fixed points

The identity map has every point fixed but contraction constant one. The map \(T(x)=x^2\) on \([0,1]\) has fixed points 0 and 1 and cannot be a contraction because uniqueness would fail.

Brouwer's fixed-point theorem guarantees a fixed point for continuous self-maps of nonempty compact convex subsets of finite-dimensional space without uniqueness or a convergent iteration rate. Banach is stronger in conclusions and stronger in hypotheses.

Failure to verify contraction does not prove failure of existence; it means this particular theorem does not certify it.

Even the pointwise strict inequality

\(d(Tx,Ty)<d(x,y)\) whenever \(x\ne y\)

is weaker than a contraction on a noncompact space. On \([0,\infty)\), let

\(T(x)=x+1/(x+1)\).

The derivative is \(T'(x)=1-1/(x+1)^2\), which belongs to \([0,1)\) at every finite \(x\). The mean value theorem therefore gives \(|T(x)-T(y)|<|x-y|\) for unequal points. Yet \(T(x)>x\) for every \(x\), so there is no fixed point. The ratios of distances can approach one far out on the half-line, and no uniform \(q<1\) exists. Compactness can sometimes upgrade strict shrinkage arguments, but noncompactness makes the missing uniformity visible.

At the other extreme, an isometry can have a unique fixed point while ordinary iteration fails. The map \(T(x)=-x\) on \(R\) has the unique fixed point zero, but an orbit started at \(x_0\ne 0\) alternates between \(x_0\) and \(-x_0\). Existence and uniqueness alone do not imply convergence of the naive fixed-point iteration.

Different fixed-point theorems encode different geometries. Brouwer uses finite-dimensional compactness and convexity. Schauder extends a compactness mechanism to suitable infinite-dimensional settings. Monotone fixed-point arguments use order. Banach uses metric shrinkage. These theorems are not ranked substitutes: each answers a different combination of existence, uniqueness, and computability questions.

## 14. Linear equations and the Neumann principle

Let \(X\) be a Banach space, let \(A:X\to X\) be a bounded linear operator with \(\lVert A\rVert<1\), and consider

\(x=b+Ax\).

The affine map \(T(x)=b+Ax\) is a contraction with factor \(\lVert A\rVert\). Hence there is a unique solution for every \(b\in X\). Iterating from zero produces

\(x_n=b+Ab+\ldots+A^{n-1}b\).

The limit is the Neumann series

\(x=\sum_{k=0}^\infty A^k b\).

In operator notation this says that \(I-A\) is invertible and

\((I-A)^{-1}=\sum_{k=0}^\infty A^k\),    \(\lVert (I-A)^{-1}\rVert\le 1/(1-\lVert A\rVert)\).

The bound follows either by summing operator norms or by applying the fixed-point perturbation estimate to different right-hand sides. It is a quantitative solvability statement: changing \(b\) to \(b+e\) changes the solution by at most \(\lVert e\rVert/(1-\lVert A\rVert)\).

This argument is not confined to matrices. It applies unchanged to operators on sequence and function spaces once completeness and the operator norm estimate are established. The Fredholm integral equation above is one example with \(A\) an integral operator.

The condition \(\lVert A\rVert<1\) is sufficient, not necessary, for invertibility of \(I-A\). For example, \(A=2I\) has norm two while \(I-A=-I\) is invertible. Banach supplies a particularly transparent certificate and convergent series; failure of that certificate says nothing conclusive about invertibility.

## 15. A reusable verification protocol

A rigorous fixed-point argument can be organized as a short certificate.

**Space.** State \(X\), its metric or norm, and why it is complete. If using a subset \(D\), prove it is closed in a complete ambient space or prove completeness directly.

**Map.** Write a genuine self-map \(T:D\to D\). Check that every operation defining \(T\) is legal and that its output has the required regularity.

**Invariance.** Bound \(T(D)\) without assuming the existence of the desired solution. For balls, split the estimate at the center; for intervals, use range bounds; for function spaces, use integral or derivative estimates.

**Shrinkage.** Produce one explicit \(q<1\) valid for every pair in \(D\). Name the norm used. If a derivative proves the estimate, state the mean-value or integral argument connecting the derivative bound to the Lipschitz bound.

**Conclusion.** State existence and uniqueness relative to \(D\), declare the permitted starting points, and give an error bound. Do not silently promote uniqueness on \(D\) to global uniqueness.

**Computation.** Record whether the stopping rule is a priori, step-based, or residual-based. Include evaluation and rounding errors when a numerical result is advertised as rigorous.

This protocol is deliberately modular. If a calculation fails, it reveals whether the obstacle is domain design, completeness, range control, or insufficient shrinkage. Often the repair is to choose a smaller invariant set, a better rearrangement, a shorter time interval, or an equivalent weighted norm.

## 16. Misconceptions and boundaries

- **A map that shrinks most pairs is a contraction.** One uniform \(q<1\) must work for every pair in the domain.
- **A derivative bound below one proves everything.** Invariance and completeness remain separate checks.
- **The iteration converges only from a lucky starting point.** A global contraction on the complete invariant domain converges from every point there.
- **Cauchy iteration automatically has a legal limit.** The domain must be complete.
- **A fixed point from Banach might not be unique globally.** It is unique in the stated contraction domain; points outside that domain require another analysis.
- **No contraction means no fixed point.** Other fixed-point theorems use different mechanisms.
- **A small residual always means a small solution error.** A stability factor such as \(1/(1-q)\) is needed.

### A dependency map for the chapter

The scalar examples depend on the mean value theorem and completeness of closed intervals. The function-space examples additionally depend on completeness of \(C([a,b])\) in the uniform norm and on the fundamental theorem of calculus. Integral equations use bounded-operator estimates, while the Neumann-series viewpoint uses completeness to pass from Cauchy partial sums to a limit. None of these applications changes the contraction theorem; they change only the domain and the way the four hypotheses are verified.

The next conceptual step is to separate compactness-based existence from contraction-based uniqueness and rate. Later functional analysis replaces scalar derivative bounds by operator norms and studies when a map is compact, monotone, or differentiable between Banach spaces.


### Worked example 3 (a perturbed affine solver)

For \(T_b(x)=x/2+b\) on the complete space \(\mathbb R\), every map has contraction constant \(1/2\). The fixed-point equation gives \(x_b=2b\), and subtracting that equation from the iteration gives \(x_n-2b=2^{-n}(x_0-2b)\). Thus existence, uniqueness and convergence can all be checked explicitly. If the parameter changes from b to c, the uniform difference between the maps is \(|b-c|\). The stability theorem therefore predicts \(|x_b-x_c|\le |b-c|/(1-1/2)=2|b-c|\). The explicit fixed points attain equality, so the amplification factor is sharp for this family. An approximate solver with residual \(|x-T_bx|\le\eta\) likewise has error \(|x-2b|\le2\eta\), agreeing exactly with the residual bound.

## Exercises with complete solutions

### ANA-CH20-E001 — Exercise 1: Iterated shrinkage

Prove \(d(T^n x,T^n y)\le q^n d(x,y)\).

<details><summary>Hint 1</summary>

Apply the contraction estimate repeatedly.

</details>

<details><summary>Hint 2</summary>

Prove the n+1 case from the n case by multiplying the existing bound by q.

</details>

<details><summary>Solution</summary>

#### ANA-CH20-E001 — Solution

Induct on \(n\). The case \(n=1\) is the contraction property. If true at \(n\), then
\(d(T^{n+1}x,T^{n+1}y)\le q d(T^nx,T^ny)\le q^{n+1}d(x,y)\).

</details>

### ANA-CH20-E002 — Exercise 2: Uniqueness

Why can a contraction have at most one fixed point?

<details><summary>Hint 1</summary>

Apply contraction to the two alleged fixed points.

</details>

<details><summary>Hint 2</summary>

Their unchanged distance must be at most q times itself, with q<1.

</details>

<details><summary>Solution</summary>

#### ANA-CH20-E002 — Solution

Fixed points \(x,y\) satisfy \(d(x,y)=d(Tx,Ty)\le q d(x,y)\). Since \(1-q>0\), this forces \(d(x,y)=0\), hence \(x=y\).

</details>

### ANA-CH20-E003 — Exercise 3: Incomplete failure

Verify \(T(x)=x/2\) is a contraction on \((0,1)\) with no fixed point there.

<details><summary>Hint 1</summary>

Verify the self-map property as well as shrinkage.

</details>

<details><summary>Hint 2</summary>

The only solution to x=x/2 is the missing endpoint zero.

</details>

<details><summary>Solution</summary>

#### ANA-CH20-E003 — Solution

We have \(|T(x)-T(y)|=(1/2)|x-y|\), and \(T\) maps \((0,1)\) into itself. Solving \(x=x/2\) gives \(x=0\), which is not in the space. The missing completeness hypothesis explains the failure.

</details>

### ANA-CH20-E004 — Exercise 4: Affine map

For \(T(x)=ax+b\) on \(R\) with \(|a|<1\), find the fixed point.

<details><summary>Hint 1</summary>

Solve the scalar fixed-point equation algebraically.

</details>

<details><summary>Hint 2</summary>

Use |a|<1 to justify the nonzero denominator and the contraction property.

</details>

<details><summary>Solution</summary>

#### ANA-CH20-E004 — Solution

Solve \(x=ax+b\), giving \(x_*=b/(1-a)\). The map is a contraction with constant \(|a|\), so this fixed point is unique and every iteration converges to it.

</details>

### ANA-CH20-E005 — Exercise 5: A priori error

If \(q=1/2\) and \(d(x_0,x_1)=3\), bound \(d(x_5,x_*)\). How many iterations guarantee an error at most \(3/512\)?

<details><summary>Hint 1</summary>

Insert the data into q^n times the first step divided by 1-q.

</details>

<details><summary>Hint 2</summary>

For the iteration count solve 6 times 2^-n at most 3/512.

</details>

<details><summary>Solution</summary>

#### ANA-CH20-E005 — Solution

The a priori bound is \((1/2)^5\cdot 3/(1-1/2)=3/16\). In general the bound here is \(6\cdot 2^{-n}\). We require \(6\cdot 2^{-n}\le 3/512\), equivalently \(2^n\ge 1024=2^10\). Thus \(n=10\) iterations suffice. This is a guarantee from the declared global factor; observed convergence may be faster.

</details>

### ANA-CH20-E006 — Exercise 6: A posteriori error

If \(q=0.2\) and the last step has length \(0.004\), bound the current error.

<details><summary>Hint 1</summary>

Use the bound based on the last step, not the first step.

</details>

<details><summary>Hint 2</summary>

Multiply 0.004 by q/(1-q)=0.2/0.8.

</details>

<details><summary>Solution</summary>

#### ANA-CH20-E006 — Solution

The bound is \([0.2/(1-0.2)]0.004=0.001\).

</details>

### ANA-CH20-E007 — Exercise 7: Invariant interval

Show \(T(x)=(x+2)/3\) maps \([0,1]\) into itself, is contractive, and determine its iterates explicitly.

<details><summary>Hint 1</summary>

Find the image of the interval by evaluating the affine endpoints.

</details>

<details><summary>Hint 2</summary>

Subtract the fixed point 1 from the recurrence to get a geometric error formula.

</details>

<details><summary>Solution</summary>

#### ANA-CH20-E007 — Solution

Its image is \([2/3,1]\subseteq [0,1]\). Also \(|T(x)-T(y)|=(1/3)|x-y|\), so \(q=1/3\). The fixed point solves \(x=(x+2)/3\), hence \(x_*=1\). Subtracting the fixed-point identity from the recurrence gives \(x_{n+1}-1=(x_n-1)/3\); induction yields \(x_n=1+(x_0-1)3^{-n}\). Here the exact error contracts by the certified factor at every step.

</details>

### ANA-CH20-E008 — Exercise 8: Rearrangement choice

For \(x^2=2\), compare \(T_1(x)=2/x\) and \(T_2(x)=(x+2/x)/2\) near \(\sqrt{2}\). Verify a complete contraction certificate for \(T_2\) on \([1,2]\).

<details><summary>Hint 1</summary>

Compare the derivatives of the two rearrangements at the root.

</details>

<details><summary>Hint 2</summary>

For the averaged map on [1,2], check both a derivative bound below one and image containment; then invoke completeness.

</details>

<details><summary>Solution</summary>

#### ANA-CH20-E008 — Solution

We have \(T_1'(sqrt2)=-1\), so no strict local contraction is certified at the root. For \(T_2\), \(T_2'(x)=(1-2/x^2)/2\), which equals zero at the root. On \([1,2]\), this derivative increases from \(-1/2\) to \(1/4\), so \(|T_2'|\le 1/2\). Also the arithmetic-geometric mean inequality gives \(T_2(x)\ge sqrt2\), while direct endpoint evaluation and convexity give \(T_2(x)\le 3/2\); thus \(T_2([1,2])\subseteq [sqrt2,3/2]\subseteq [1,2]\). The interval is closed in \(R\), hence complete, so Banach certifies a unique fixed point in it and convergence from every start in \([1,2]\).

</details>

### ANA-CH20-E009 — Exercise 9: Perturbation bound

If two maps have common contraction constant \(0.8\) and differ uniformly by at most \(0.01\), bound the fixed-point distance.

<details><summary>Hint 1</summary>

Use the fixed-point stability bound with the common contraction factor.

</details>

<details><summary>Hint 2</summary>

Divide the uniform map discrepancy by 1-q, here 0.2.

</details>

<details><summary>Solution</summary>

#### ANA-CH20-E009 — Solution

The stability estimate gives \(0.01/(1-0.8)=0.05\).

</details>

### ANA-CH20-E010 — Exercise 10: Contractive square

If \(T^2\) is a contraction on a complete space, prove a fixed point of \(T^2\) is fixed by \(T\), and prove the full orbit under \(T\) converges to it.

<details><summary>Hint 1</summary>

Show T sends any fixed point of T squared to another such fixed point.

</details>

<details><summary>Hint 2</summary>

Use uniqueness for T squared and apply its convergence theorem separately to the even and odd orbits.

</details>

<details><summary>Solution</summary>

#### ANA-CH20-E010 — Solution

If \(T^2x=x\), then \(T^2(Tx)=T(T^2x)=Tx\), so \(Tx\) is another fixed point of \(T^2\). Uniqueness for the contraction \(T^2\) gives \(Tx=x\). For any start \(y\), Banach gives \(T^{2n}y\to x\). Since a map whose square is Lipschitz is not automatically continuous for arbitrary pathological maps, use the contraction estimate for \(T^2\) separately on the odd subsequence: \(T^{2n+1}y=(T^2)^n(Ty)\to x\), because the contraction \(T^2\) converges from the legal start \(Ty\). Hence both parity subsequences, and therefore the full orbit, converge to \(x\).

</details>

### ANA-CH20-E011 — Exercise 11: Picard contraction factor

If \(f\) is 5-Lipschitz in \(u\), how small must \(T\) be for the Picard map to be a contraction in the uniform norm?

<details><summary>Hint 1</summary>

Estimate the Picard integral difference by Lipschitz constant times time length.

</details>

<details><summary>Hint 2</summary>

The uniform-norm factor is 5T; strict contraction requires it below one.

</details>

<details><summary>Solution</summary>

#### ANA-CH20-E011 — Solution

The contraction factor is at most \(5T\). We require \(5T<1\), so any \(T<1/5\) works, subject also to invariance.

</details>

### ANA-CH20-E012 — Exercise 12: Invariant function ball

If \(|f|\le 4\) and the vertical ball has radius 1, what time bound ensures invariance?

<details><summary>Hint 1</summary>

Bound the integral displacement using the uniform height bound on f.

</details>

<details><summary>Hint 2</summary>

Ensure 4T does not exceed the allowed vertical radius 1.

</details>

<details><summary>Solution</summary>

#### ANA-CH20-E012 — Solution

The Picard displacement is at most \(4T\). Requiring \(4T\le 1\) gives \(T\le 1/4\).

</details>

### ANA-CH20-E013 — Exercise 13: Integral kernel

Suppose \(g\) is continuous and \(K\) is continuous and bounded by 2 on \([0,1]^2\). Find a condition on \(\lambda\) for contraction of the associated Fredholm map on \(C([0,1])\), and explain the role of continuity.

<details><summary>Hint 1</summary>

Bound the kernel integral of the difference between two functions.

</details>

<details><summary>Hint 2</summary>

The estimate is 2|lambda| times uniform distance; separately use continuity to ensure the output is continuous.

</details>

<details><summary>Solution</summary>

#### ANA-CH20-E013 — Solution

For \(u,v\in C([0,1])\),
\(|(Tu)(x)-(Tv)(x)|\le |\lambda|\int _0^1 2|u(t)-v(t)|dt\le 2|\lambda|\lVert u-v\rVert_\infty\).
Thus \(2|\lambda|<1\), or \(|\lambda|<1/2\), is sufficient. Continuity of \(K\) and \(u\) ensures that the integral depends continuously on \(x\), so \(T\) really maps \(C([0,1])\) to itself. The boundedness estimate proves shrinkage but, by itself, would not prove this self-map property.

</details>

### ANA-CH20-E014 — Exercise 14: Geometric tail

If a Neumann iteration has contraction factor \(q\), bound the error after \(n\) updates in terms of the first step.

<details><summary>Hint 1</summary>

Treat Neumann iteration as a contraction orbit.

</details>

<details><summary>Hint 2</summary>

Sum the geometric tail beginning after the nth update using the first-step norm.

</details>

<details><summary>Solution</summary>

#### ANA-CH20-E014 — Solution

Banach's a priori bound gives \(q^n\lVert u_1-u_0\rVert/(1-q)\) in the chosen norm.

</details>

### ANA-CH20-E015 — Exercise 15: Weighted norm

Why does choosing \(\beta=2L\) in the Bielecki norm help the Picard map when \(L>0\)? Prove that this norm is equivalent to the uniform norm on \([0,T]\).

<details><summary>Hint 1</summary>

Substitute beta=2L into the weighted contraction factor L/beta.

</details>

<details><summary>Hint 2</summary>

Bound the exponential weight between exp(-beta T) and one to compare the two norms.

</details>

<details><summary>Solution</summary>

#### ANA-CH20-E015 — Solution

The contraction factor becomes at most \(L/\beta=1/2\), independent of the interval length, though invariance or growth bounds must still be checked. Since \(e^{-\beta T}\le e^{-\beta t}\le 1\), taking maxima gives
\(e^{-\beta T}\lVert u\rVert_\infty\le \lVert u\rVert_\beta\le \lVert u\rVert_\infty\).
Thus convergence and Cauchy behavior are the same in the two norms. In particular, completeness transfers from the uniform norm to the weighted norm.

</details>

### ANA-CH20-E016 — Exercise 16: Identity map

Explain why Banach's theorem does not apply to \(T(x)=x\) despite many fixed points.

<details><summary>Hint 1</summary>

Compute the distance between two image points under the identity.

</details>

<details><summary>Hint 2</summary>

On a space with two distinct points it equals the original distance, so no factor below one works.

</details>

<details><summary>Solution</summary>

#### ANA-CH20-E016 — Solution

On a space with at least two points, its best Lipschitz constant is 1, not strictly below 1. The uniqueness and geometric convergence conclusions would be false, so the missing strict contraction is essential. On a singleton the identity is the constant map and has best contraction constant 0.

</details>

### ANA-CH20-E017 — Exercise 17: Residual certificate

For a contraction, show
\((1-q)d(x,x_*)\le d(x,Tx)\le (1+q)d(x,x_*)\).

<details><summary>Hint 1</summary>

Apply the triangle inequality through Tx for one direction and through x_* for the other.

</details>

<details><summary>Hint 2</summary>

Use Tx_*=x_* and the contraction bound to move the q times error term to the appropriate side.

</details>

<details><summary>Solution</summary>

#### ANA-CH20-E017 — Solution

The triangle inequality and contraction give
\(d(x,x_*)\le d(x,Tx)+d(Tx,Tx_*)\le d(x,Tx)+q d(x,x_*)\).
Rearranging proves the lower bound on the residual. In the other direction,
\(d(x,Tx)\le d(x,x_*)+d(Tx_*,Tx)\le (1+q)d(x,x_*)\).
Consequently the residual and true error are quantitatively equivalent when \(q<1\).

</details>

### ANA-CH20-E018 — Exercise 18: Closed subset completeness

Prove a closed subset \(D\) of a complete metric space is complete. Show by example why completeness of the ambient space cannot be omitted.

<details><summary>Hint 1</summary>

Let the ambient completeness theorem first supply the limit.

</details>

<details><summary>Hint 2</summary>

Closedness retains it in D; taking D to be a whole incomplete ambient space shows why the other hypothesis matters.

</details>

<details><summary>Solution</summary>

#### ANA-CH20-E018 — Solution

A Cauchy sequence in \(D\) is Cauchy in the ambient space, so it converges to some ambient point. Closedness of \(D\) keeps that limit in \(D\), proving completeness. For the warning, take the ambient space \(X=(0,1)\) and the subset \(D=X\). The whole space is closed in itself, but it is incomplete: the sequence \(1/n\) for \(n\ge 2\) is Cauchy and has no limit in \(X\).

</details>

## ANA-CH20-I001 — Investigation: certify a nonlinear solver

Choose a scalar nonlinear equation and two different fixed-point rearrangements. For each, propose a closed interval, prove or disprove invariance, bound the derivative to obtain the best contraction factor you can certify, and compute a priori and a posteriori stopping rules. Run both iterations from the same declared start. Separate empirical speed from guaranteed speed, and use the residual bound to report an interval containing the true fixed point.

## Chapter synthesis

The contraction theorem joins analysis and algorithm: a common shrinkage factor makes every orbit Cauchy, completeness supplies its limit, continuity makes the limit fixed, and the same factor proves uniqueness and error bounds. Invariance ensures the entire argument stays inside the region where its estimates are valid.

Whenever iteration is proposed, demand four objects: a complete domain, a self-map, a contraction constant, and a stopping certificate. Without all four, convergence may be plausible but is not yet proved.

## Summary

A strict contraction on a nonempty complete invariant domain has one fixed point and geometrically convergent iterates. Completeness supplies the limit, invariance keeps every iterate legal, and contraction supplies both uniqueness and quantitative tails. Residual and successive-step estimates turn the theorem into a stopping rule; perturbation estimates control sensitivity. Function-space applications must prove their self-map property as well as shrinkage, and changing to an equivalent weighted norm does not remove the need for an invariant domain.
