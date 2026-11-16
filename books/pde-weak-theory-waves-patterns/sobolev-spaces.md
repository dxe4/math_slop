
# Sobolev Spaces: Derivatives, Boundaries and Weak Equations

The equation $-u''=f$ appears to demand two classical derivatives. Integration by parts suggests a different contract: require one square-integrable derivative of the unknown, and interpret the equation against test functions. This permits corners, rough coefficients and limits of finite-energy approximations without discarding the boundary conditions. The function space becomes part of the equation's meaning.

The prerequisite [classical PDE course](#/books/partial-differential-equations) introduces differential equations and boundary models. Here we construct the first Sobolev framework. We use Lebesgue integration, completeness of $L^2$, Cauchy–Schwarz, density of smooth test functions in $L^2$, and the [Hilbert-space Riesz representation theorem](../functional-analysis/orthonormal-bases-riesz.md) as stated analysis inputs. The arguments below prove uniqueness of weak derivatives, completeness, interval representative and trace estimates, Poincaré coercivity, and the bounded-coercive existence theorem from Riesz. Higher-dimensional trace, extension and compact-embedding theorems require further domain hypotheses; none is silently assumed from the word domain.

## Weak derivatives are integral identities

Let $\Omega\subset\mathbb R^n$ be open. A locally integrable function $g_i$ is the **weak derivative** $D_i u$ of a locally integrable $u$ if

$$\int_\Omega u\,\partial_i\varphi\,dx=-\int_\Omega g_i\varphi\,dx\qquad(\varphi\in C_c^\infty(\Omega)).$$

The test is smooth and compactly supported, so there is no boundary term. A continuously differentiable function satisfies this identity with its ordinary derivative. The definition works with equivalence classes modulo equality almost everywhere: changing a value at one point changes no integral. It does not assign classical derivatives to an arbitrary representative at every point.

Weak derivatives are unique almost everywhere. If $g$ and $h$ both work, their difference integrates to zero against every compactly supported smooth test. The fundamental lemma for locally integrable functions, obtained for example by local smoothing with approximate identities, says that this difference vanishes almost everywhere. Thus the derivative is an operator on equivalence classes, rather than a discretionary choice at each singular point.

More generally a distributional derivative is the functional $\varphi\mapsto-\int u\partial_i\varphi$. Every locally integrable function has that distributional derivative, but it need not be represented by a locally integrable function. Sobolev membership asks for a specific integrability class of representative. A Dirac point mass is a distribution, not an $L^2$ function.

## Worked example 1: a corner with finite energy

On $(-1,1)$ let $u(x)=|x|$. Splitting at zero gives

$$\int_{-1}^1 |x|\varphi'(x)\,dx
=\int_{-1}^0(-x)\varphi'\,dx+\int_0^1x\varphi'\,dx
=-\int_{-1}^1\operatorname{sign}(x)\varphi(x)\,dx.$$

The boundary terms at zero vanish because the function is continuous there with value zero; the exterior terms vanish by compact support. Therefore $u'=\operatorname{sign}(x)$ weakly. Both functions are square integrable, and $\|u\|_2^2=2/3$, $\|u'\|_2^2=2$. Its $H^1$ norm squared is $8/3$, despite the classical corner. The value assigned to $\operatorname{sign}(0)$ is irrelevant.

The second distributional derivative is $2\delta_0$, since the sign function jumps by two. Consequently $u$ is not in $H^2(-1,1)$. The statement “weak derivatives allow corners” concerns a specified derivative order: it does not mean every number of weak derivatives is square integrable. Nor is the corner a solution of $-u''=0$ distributionally; its second derivative contains a concentrated source.

## Sobolev spaces are complete

Define

$$H^1(\Omega)=\{u\in L^2(\Omega):D_iu\in L^2(\Omega),\ i=1,\ldots,n\},$$

with inner product $(u,v)_{H^1}=\int uv+\sum_i\int D_iuD_iv$ for real functions. Complex spaces use conjugation in the second factor under the corresponding convention. Higher integer spaces $H^k$ require every weak derivative of order at most $k$ to lie in $L^2$. More generally $W^{k,p}$ uses $L^p$; this chapter stays with the Hilbert case $p=2$.

**Theorem 1.1 (Completeness).** $H^1(\Omega)$ with this inner product is a Hilbert space for every open $\Omega$.

*Proof.* A Cauchy sequence $u_j$ in this norm has limits $u\in L^2$ and $g_i\in L^2$ for each derivative component by completeness of $L^2$. For a fixed compactly supported smooth $\varphi$, Cauchy–Schwarz allows passing to the limit in

$$\int u_j\partial_i\varphi=-\int D_iu_j\varphi.$$

It follows that $\int u\partial_i\varphi=-\int g_i\varphi$, hence $g_i=D_i u$. Thus $u\in H^1$, and convergence of all components is convergence in its norm. The inner product is positive definite on equivalence classes, which completes the proof. This closed-graph argument is the reason derivatives survive an energy-norm limit. Merely bounding the functions without controlling their derivatives would not suffice.

## Worked example 2: why a jump is different

Let $s(x)=0$ for $x<0$ and $s(x)=1$ for $x>0$ on $(-1,1)$. Then $\int s\varphi'=-\varphi(0)$, so its distributional derivative is $\delta_0$. Suppose an $L^2$ function $g$ represented it. Choose a fixed smooth bump $\psi$ supported in $(-1,1)$ with $\psi(0)=1$, and put $\varphi_\epsilon(x)=\psi(x/\epsilon)$. The alleged identity would give

$$1=\int g\varphi_\epsilon\le\|g\|_2\|\varphi_\epsilon\|_2=\|g\|_2\sqrt\epsilon\,\|\psi\|_2,$$

impossible as $\epsilon\downarrow0$. Thus $s\notin H^1$. The distinction is continuity across the interface, rather than whether a plot looks almost smooth. Smooth ramps converging to this step in $L^2$ must have unbounded derivative energy: their unit change over a width $\epsilon$ costs at least $1/\epsilon$ in squared derivative norm by Cauchy–Schwarz. Completeness therefore does not force this $L^2$ limit into $H^1$.

## Interval representatives and boundary values

On $I=(0,\ell)$, $\ell>0$, each $u\in H^1(I)$ has an absolutely continuous representative $\widetilde u$ satisfying

$$\widetilde u(x)-\widetilde u(y)=\int_y^x u'(t)\,dt.$$

Here is a proof of the representation. Define $G(x)=\int_0^x u'(t)dt$. It is absolutely continuous, belongs to $H^1$, and has weak derivative $u'$. Thus $w=u-G$ has weak derivative zero. Every compactly supported smooth function of integral zero is the derivative of another compactly supported smooth function, so $w$ integrates to zero against all such zero-mean tests. Fix a test $\rho$ with integral one. Subtracting $(\int\varphi)\rho$ from an arbitrary test shows $\int w\varphi=c\int\varphi$, with $c=\int w\rho$. The fundamental lemma gives $w=c$ almost everywhere. Therefore $G+c$ is the required representative.

Cauchy–Schwarz now yields

$$|\widetilde u(x)-\widetilde u(y)|\le |x-y|^{1/2}\|u'\|_2.$$

In particular the endpoint values exist. Averaging the identity $\widetilde u(0)=\widetilde u(x)-\int_0^x u'$ gives the continuous trace estimate

$$|\widetilde u(0)|\le\ell^{-1/2}\|u\|_2+\ell^{1/2}\|u'\|_2,$$

and similarly at $\ell$. An equivalence class thus has well-defined traces through its distinguished continuous representative, although a version modified at one endpoint need not display them. The one-dimensional continuity estimate does not generalize to pointwise continuity of all $H^1$ functions in higher dimensions.

Define $H_0^1(\Omega)$ as the closure of $C_c^\infty(\Omega)$ in the $H^1$ norm. It is a closed Hilbert subspace on every open set. On an interval its elements have zero endpoint traces by the trace estimate. Conversely a zero-endpoint $H^1$ function belongs to that closure: extend it by zero, use the absence of endpoint jumps to retain an $L^2$ weak derivative, compress its support into the interval, and smooth inside the remaining margin. Continuity of translations and dilations in $L^2$, followed by approximate-identity convergence for both function and derivative, gives the required $H^1$ convergence. This supplies the interval identification; the higher-dimensional trace characterization on Lipschitz domains is a separate theorem.

For $v\in C_c^\infty(0,\ell)$, $v(x)=\int_0^xv'$, so $|v(x)|^2\le\ell\|v'\|_2^2$. Integrating and extending by density proves the convenient, nonsharp **Poincaré inequality**

$$\|v\|_2\le\ell\|v'\|_2\qquad(v\in H_0^1(0,\ell)).$$

The derivative norm is therefore equivalent to the full $H^1$ norm on this space. It is not a norm on all of $H^1$: nonzero constants have derivative zero. On general bounded domains zero-extension arguments also yield Poincaré inequalities for $H_0^1$, while other boundary spaces and disconnected Neumann problems require their own normalization.

## A weak equation and a coercive form

For a smooth solution of $-u''=f$ with zero endpoints, integration by parts gives $\int u'v'=\int fv$. The weak problem makes this its definition: find $u\in H_0^1(0,\ell)$ such that

$$\int_0^\ell u'v'\,dx=F(v)\qquad(v\in H_0^1(0,\ell)).$$

The data can be any bounded linear functional $F$ for the derivative norm. This dual space is denoted $H^{-1}$ here. If $f\in L^2$, then $F(v)=\int fv$ is bounded by $\ell\|f\|_2\|v'\|_2$. Testing with compactly supported smooth functions gives the distributional equation; density and continuity extend that identity to all tests in $H_0^1$. Membership of the unknown in the boundary space supplies information missing from the interior distributional equation alone.

For measurable $a$ with $0<a_0\le a(x)\le a_1$ almost everywhere and bounded $c\ge0$, the form

$$A(u,v)=\int_0^\ell au'v'+cuv$$

is bounded in the derivative norm, with constant at most $a_1+\ell^2\|c\|_\infty$, and coercive: $A(v,v)\ge a_0\|v'\|_2^2$. These are quantitative properties, not synonyms for smooth coefficients.

**Theorem 1.2 (Bounded-coercive existence (Lax–Milgram, real Hilbert case)).** If $V$ is a real Hilbert space, $A$ a bounded bilinear form with $A(v,v)\ge\alpha\|v\|^2$, $\alpha>0$, and $F\in V^*$, there is a unique $u\in V$ with $A(u,v)=F(v)$ for all $v$, and $\|u\|\le\|F\|/\alpha$.

*Proof from Riesz representation.* Define a bounded operator $T:V\to V$ by $(Tu,v)=A(u,v)$ and let $b$ represent $F$. Coercivity and Cauchy–Schwarz imply $\|Tu\|\ge\alpha\|u\|$. Hence $T$ is injective and its range is closed: a convergent sequence $Tu_j$ makes $u_j$ Cauchy, so completeness gives its preimage limit. If $w$ is orthogonal to the range, then $A(u,w)=0$ for every $u$; choosing $u=w$ forces $w=0$. The range is therefore dense as well as closed, hence all of $V$. Solve $Tu=b$. The lower bound gives the estimate and uniqueness. Symmetry was not needed. Applied to the interval form, this proves weak existence without assuming two classical derivatives, and the solution's energy depends continuously on the data.

## Worked example 3: a point load with an ordinary energy solution

For $0<a<1$, point evaluation $F(v)=v(a)$ is bounded on $H_0^1(0,1)$ because $|v(a)|\le\sqrt a\|v'\|_2$. The solution of the zero-boundary weak problem $-u''=\delta_a$ is

$$u(x)=\begin{cases}x(1-a),&0\le x\le a,\\a(1-x),&a\le x\le1.\end{cases}$$

It is continuous and piecewise affine, with an $L^2$ derivative. For every $v\in H_0^1$, the representative formula proves

$$\int_0^1u'v'=(1-a)[v(a)-v(0)]-a[v(1)-v(a)]=v(a).$$

Its energy is $\int|u'|^2=a(1-a)=u(a)$, in agreement with testing the equation by $u$. This is a genuine weak solution with a corner. The source is not an $L^2$ function, yet it is in $H^{-1}$ in this dimension. In higher dimensions a point load need not define a bounded functional on $H_0^1$, so the same existence argument cannot simply be copied. Nor does the point source become an ordinary second derivative: $-u''=\delta_a$ is a distributional identity.

## Compactness in an interval has a concrete proof

A bounded sequence in the interval Sobolev space has a uniformly convergent subsequence of its continuous representatives. The representative estimate already proves a common one-half Hölder modulus: a uniform derivative bound makes every difference at two nearby points uniformly small. The trace estimate, or averaging at an arbitrary point, also gives a common supremum bound from the common Sobolev bound. Thus neither an arbitrary additive constant nor rapid narrow oscillations can escape these two controls.

Here is a direct subsequence argument rather than an appeal to the name of a compactness theorem. Choose a countable dense set of interval points containing the endpoints. Boundedness of the values at its first point gives a convergent subsequence by finite-dimensional compactness. Repeat within that subsequence at the second point and so on. The diagonal sequence converges at every selected point. For any positive tolerance choose a finite grid so fine that the common Hölder modulus is smaller than one third of that tolerance between adjacent grid points. At sufficiently late indices the diagonal sequence differs by less than one third of the tolerance at every grid point. Comparing each arbitrary point to a nearby grid point proves that it is uniformly Cauchy on the whole closed interval. Completeness of the continuous-function supremum norm supplies the uniform limit.

Uniform convergence implies strong square-integrable convergence. This is a special case of compact Sobolev embedding, with every step visible. It does not say that the derivatives converge strongly: the functions $u_j(x)=\sin(jx)/j$ on a fixed interval converge uniformly to zero while their derivatives can retain a positive amount of squared norm. Weak compactness of the derivative sequence, together with the defining test identities, still identifies any weak derivative limit with the derivative of the strong function limit. This combination is often exactly what a variational existence proof needs.

The argument is dimension dependent because its common pointwise modulus came from the interval representative theorem. In higher dimensions a bounded first-Sobolev sequence can fail to have any continuous representative. Compact embedding into square-integrable functions on a bounded Lipschitz domain is a different theorem, with extension and translation estimates replacing the interval modulus. On an unbounded domain, translated bumps can remain bounded in the Sobolev norm while escaping every strongly convergent square-integrable subsequence. The location and geometry of the domain are therefore part of a compactness assertion.

## Why the point-load example is dimension specific

In dimensions greater than two, choose a smooth bump supported near an interior point, equal to one at that point, and shrink its spatial scale to epsilon. Multiply its height by $\epsilon^{(2-n)/2}$. A change of variables shows that its gradient norm stays constant while its function norm is proportional to epsilon. Its value at the centre tends to infinity. Consequently point evaluation cannot be bounded by the first-Sobolev norm. The construction lies inside one fixed interior ball for all sufficiently small scales, so neither boundary roughness nor a trace question causes this failure.

Dimension two is critical: the same power scaling keeps the bump height constant. A logarithmic profile supplies the missing example. In a unit interior disk, take a radial function equal to $\sqrt{\log(1/\epsilon)}$ inside radius epsilon, equal to $\log(1/r)/\sqrt{\log(1/\epsilon)}$ between radius epsilon and one, and zero outside. Its squared gradient integral on the annulus is $2\pi$, because the radial integral is the logarithm that cancels its normalization. Its function norm is bounded, while its central value tends to infinity.

For each fixed epsilon this radial function is a legitimate first-Sobolev function with zero outer value. To obtain smooth compact test functions, first choose the disk strictly inside the domain and smooth the profile at a scale smaller than its central plateau. Convolution does not increase the function or gradient square-integrable norms, its support remains inside the domain when the surrounding margin is respected, and its centre retains the plateau value. A fixed rescaling handles an interior disk of radius other than one. This gives smooth compact tests with uniformly bounded Sobolev norms and unbounded values at their common centre.

If a Dirac point mass were a bounded functional on the zero-boundary first-Sobolev space in either case, applying its bound to these tests would give a contradiction. Hence the one-dimensional triangular point-load solution cannot be transplanted into the same energy space in dimensions two or higher. Other distributional solution spaces can still accommodate point sources. What fails is this particular dual-space contract, rather than the possibility of interpreting the differential equation at all.

This also explains a numerical trap. A finite-dimensional trial space has bounded point evaluation automatically, because every linear functional on a fixed finite-dimensional normed space is bounded. The corresponding bound can diverge as the spaces resolve smaller scales. A solvable discrete point-load system therefore does not prove that the continuous load belongs to the energy dual. Uniform bounds, not just finite-dimensional solvability, are what permit a meaningful limiting argument.

## Ten exercises with staged support

<a id="sobolev-spaces-ex-1"></a>

### Exercise 1

Find the weak derivative and $H^1$ norm squared of $u(x)=|x|$ on $(-1,1)$. Is it in $H^2$?

<details>
<summary>Hint 1</summary>

Split the test integral at the corner and retain both interface terms.

</details>

<details>
<summary>Hint 2</summary>

The first derivative has a jump of size two. Compare its second distributional derivative with an $L^2$ function.

</details>

<details>
<summary>Full solution</summary>

The first derivative is $\operatorname{sign}(x)$ almost everywhere. Integration of $x^2$ gives $2/3$, and the derivative's square integrates to two, so the norm squared is $8/3$. The derivative of the sign function is $2\delta_0$, which cannot be represented in $L^2$ by the shrinking-bump argument. Thus the function is in $H^1$ but not $H^2$.

</details>

<a id="sobolev-spaces-ex-2"></a>

### Exercise 2

For $\alpha>0$, determine when $u(x)=x^\alpha$ belongs to $H^1(0,1)$. Explain the endpoint case.

<details>
<summary>Hint 1</summary>

The function itself is square integrable for every positive exponent.

</details>

<details>
<summary>Hint 2</summary>

Its weak derivative agrees with the classical derivative on compact subintervals, so examine the integral of $x^{2\alpha-2}$ near zero.

</details>

<details>
<summary>Full solution</summary>

Any weak derivative must equal $\alpha x^{\alpha-1}$ locally, by uniqueness and the smooth calculation away from zero. This derivative is in $L^2(0,1)$ precisely when $2\alpha-2>-1$, or $\alpha>1/2$. For these exponents integration against compact tests verifies the identity, so membership follows. At $\alpha=1/2$ its squared derivative has a logarithmically divergent integral; no alternative weak derivative can repair it. The excluded value $\alpha=0$ would instead give a constant with zero derivative.

</details>

<a id="sobolev-spaces-ex-3"></a>

### Exercise 3

Can changing the value of a step function at its jump make it belong to $H^1$? Can changing the value of $|x|$ at zero remove its weak derivative?

<details>
<summary>Hint 1</summary>

Lebesgue integrals are insensitive to changes on a set of measure zero.

</details>

<details>
<summary>Hint 2</summary>

Sobolev spaces consist of equivalence classes; their continuous interval representatives carry separate information.

</details>

<details>
<summary>Full solution</summary>

Neither modification changes any test integral or $L^2$ class. The step still has the distributional derivative $\delta_0$ and is not in $H^1$. The modified absolute-value function still represents an $H^1$ class with weak derivative sign. Its continuous representative is the original $|x|$, even if an arbitrarily altered pointwise version is discontinuous. Weak derivative existence is not a statement about classical differentiability of every representative.

</details>

<a id="sobolev-spaces-ex-4"></a>

### Exercise 4

Prove that $\|v'\|_2$ is a norm equivalent to $\|v\|_{H^1}$ on $H_0^1(0,\ell)$. Why does the claim fail on $H^1(0,\ell)$?

<details>
<summary>Hint 1</summary>

Apply the proved Poincaré inequality to the function part of the norm.

</details>

<details>
<summary>Hint 2</summary>

A nonzero constant detects whether the derivative seminorm separates points in the larger space.

</details>

<details>
<summary>Full solution</summary>

The inequalities are $\|v'\|_2\le\|v\|_{H^1}\le\sqrt{1+\ell^2}\|v'\|_2$. In particular zero derivative forces zero norm on $H_0^1$, and completeness follows from equivalence with its complete original norm. On all of $H^1$, any nonzero constant has positive function norm but derivative norm zero. Zero-boundary data remove that kernel; they cannot be omitted from the argument.

</details>

<a id="sobolev-spaces-ex-5"></a>

### Exercise 5

Solve the weak zero-boundary problem $-u''=2$ on $(0,1)$ and prove uniqueness directly.

<details>
<summary>Hint 1</summary>

Try a quadratic that vanishes at both endpoints.

</details>

<details>
<summary>Hint 2</summary>

For uniqueness subtract two weak equations and test with their difference.

</details>

<details>
<summary>Full solution</summary>

$u=x(1-x)$ has zero traces and derivative $1-2x$. Integration by parts gives $\int u'v'=2\int v$ first for smooth compact tests, then for all $H_0^1$ tests by density. If two solutions exist, their difference $w$ satisfies $\int w'v'=0$. Taking $v=w$ gives $\|w'\|_2=0$; Poincaré yields $w=0$. The solution is positive inside despite the operator's minus sign.

</details>

<a id="sobolev-spaces-ex-6"></a>

### Exercise 6

For the point-load solution in Worked Example 3, determine the jump in $u'$ and derive the sign of its distributional second derivative.

<details>
<summary>Hint 1</summary>

The left slope is $1-a$ and the right slope is $-a$.

</details>

<details>
<summary>Hint 2</summary>

The distributional derivative of a piecewise constant function contains its right-minus-left jump times the point mass.

</details>

<details>
<summary>Full solution</summary>

The jump is $-a-(1-a)=-1$. Thus $u''=-\delta_a$ and $-u''=\delta_a$, agreeing with the positive test functional. One can verify the sign without a rule: $\langle u'',\varphi\rangle=-\int u'\varphi'=-\varphi(a)$. The function remains in $H_0^1$ because its first derivative is an ordinary bounded piecewise function; the singularity occurs at second order.

</details>

<a id="sobolev-spaces-ex-7"></a>

### Exercise 7

Let $a\ge2$, $a\le5$, $0\le c\le3$ on $(0,1)$. Give continuity and coercivity constants in the derivative norm and a bound for the weak solution with data $F$.

<details>
<summary>Hint 1</summary>

Use the nonsharp interval Poincaré constant one for the zero-boundary space.

</details>

<details>
<summary>Hint 2</summary>

Bound each term with Cauchy–Schwarz; only the derivative term is needed for the lower bound.

</details>

<details>
<summary>Full solution</summary>

$|A(u,v)|\le5\|u'\|_2\|v'\|_2+3\|u\|_2\|v\|_2\le8\|u'\|_2\|v'\|_2$. Also $A(v,v)\ge2\|v'\|_2^2$. Thus $M=8$, $\alpha=2$ are valid constants and $\|u'\|_2\le\|F\|_{H^{-1}}/2$. They are sufficient estimates, not asserted optimal constants. Existence uses measurability and these bounds, without classical differentiability of $a$.

</details>

<a id="sobolev-spaces-ex-8"></a>

### Exercise 8

Show that $A(u,v)=\int_0^1u'v'-\pi^2uv$ fails coercivity on $H_0^1(0,1)$. What happens to uniqueness for zero data?

<details>
<summary>Hint 1</summary>

Use $u=\sin\pi x$.

</details>

<details>
<summary>Hint 2</summary>

Integrate the sine's second derivative against an arbitrary zero-boundary test.

</details>

<details>
<summary>Full solution</summary>

For this nonzero sine, the derivative energy and $\pi^2$ times function energy are equal, so $A(u,u)=0$ and no positive coercivity constant exists. Since $-u''=\pi^2u$, integration by parts also gives $A(u,v)=0$ for every test. Every scalar multiple is a homogeneous weak solution, so uniqueness fails. Losing coercivity in general does not always prove nonuniqueness; this explicit eigenfunction supplies the additional kernel calculation.

</details>

<a id="sobolev-spaces-ex-9"></a>

### Exercise 9

If $F,G\in H^{-1}$ have weak solutions $u,w$ for the same coercive form, prove continuous dependence in the energy-space norm.

<details>
<summary>Hint 1</summary>

Subtract their equations and choose the difference as test.

</details>

<details>
<summary>Hint 2</summary>

Use the coercivity constant on the left and the dual norm on the right; handle the zero difference separately.

</details>

<details>
<summary>Full solution</summary>

Writing $z=u-w$, $\alpha\|z\|^2\le A(z,z)=(F-G)(z)\le\|F-G\|\|z\|$. If $z=0$ the bound is immediate; otherwise divide by its norm to obtain $\|u-w\|\le\|F-G\|/\alpha$. The bound uses the same fixed coefficients and boundary space for both problems. It controls the energy norm; a pointwise or higher-derivative error needs additional estimates.

</details>

<a id="sobolev-spaces-ex-10"></a>

### Exercise 10

Let $u_j\to u$ in $L^2$ and suppose their weak derivatives converge in $L^2$ to $g$. Prove that $g=u'$ weakly. Why does mere convergence of the functions not give this conclusion?

<details>
<summary>Hint 1</summary>

Use the defining identity for each $u_j$ with one fixed compact test.

</details>

<details>
<summary>Hint 2</summary>

Pass to the limit by Cauchy–Schwarz on both sides. Compare with smooth ramps approximating a step when no derivative control is available.

</details>

<details>
<summary>Full solution</summary>

For every test $\varphi$, $\int u_j\varphi'=-\int u_j'\varphi$. The two strong $L^2$ limits give $\int u\varphi'=-\int g\varphi$, proving the weak derivative identity. Without the derivative convergence or suitable weaker compactness information there may be no $L^2$ derivative limit: ramps approaching a step converge as functions while their derivative energies diverge. Function convergence alone cannot establish Sobolev membership of the limit.

</details>

## What this chapter establishes

A weak derivative is an integral identity, not a visual smoothing convention. Completeness allows energy-norm limits to retain derivatives; traces and the boundary space fix the intended boundary problem; coercivity then gives existence, uniqueness and continuous dependence. The corner, jump and point-load examples distinguish the function, derivative, and data spaces explicitly. Elliptic regularity, higher-dimensional embeddings, time-dependent equations and nonlinear limits remain separate subjects. The next elliptic chapter develops those boundary forms without promoting weak existence to unproved classical smoothness.
