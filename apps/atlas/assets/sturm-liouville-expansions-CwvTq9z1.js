var e=`---
parent_id: book-partial-differential-equations
chapter_id: sturm-liouville-expansions
title: "Regular Sturm–Liouville Problems and Complete Expansions"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Regular Sturm–Liouville Problems and Complete Expansions

Sines are eigenfunctions of a particular boundary problem. Variable material properties replace them by less explicit modes, but symmetry, positivity and completeness can survive. The important question is why those modes recover arbitrary data in the chosen norm. Orthogonality alone does not prove completeness: an orthogonal family can omit an entire subspace.

We prove a regular Dirichlet expansion theorem on [0,L]. Assume p∈C1[0,L], q,w∈C[0,L], with p>0, w>0 and q≥0. The eigenvalue equation is

\\[
 -(p\\phi')'+q\\phi=\\lambda w\\phi,
 \\qquad \\phi(0)=\\phi(L)=0.
\\]

The weight w determines the inner product, not the differential expression alone. Regularity means a finite interval with coefficients bounded away from degeneracy where required. Singular endpoints and vanishing p or w need different theory. The full compact positive-operator argument is proved here in its required form, so the L3 reader is not silently assigned the entire L4 functional-analysis book.

The Hilbert space H is the completion of continuous functions on [0,L] in the norm ||f||w²=∫_0^Lw|f|². This uses the same Cauchy-sequence construction as the [Fourier mean-square chapter](../fourier-analysis/mean-square-parseval.md). Positive upper and lower bounds for w make this norm equivalent to the unweighted square norm. Integration against any fixed continuous function extends by Cauchy–Schwarz. Identifying H with Lebesgue L2(w dx) is available after Measure and Integration, but is unnecessary for the completion argument below.

## 1. Symmetry, reality and orthogonality

For C2 endpoint-zero functions u,v, integration by parts gives

\\[
 \\int_0^L\\bigl(-(pu')'+qu\\bigr)\\overline v
 =\\int_0^L(pu'\\overline{v'}+qu\\overline v).
\\]

The boundary term vanishes because v has zero endpoints. The right side is conjugate symmetric. For an eigenfunction, taking v=u gives

\\[
 \\lambda\\int_0^Lw|u|^2
 =\\int_0^L(p|u'|^2+q|u|^2)>0.
\\]

Strict positivity holds for a nonzero Dirichlet function: if its derivative vanished identically it would be a constant with zero endpoints. Thus every eigenvalue is real and positive. Subtracting the identities for two eigenfunctions gives (λ−μ)∫wφ conjugate ψ=0, proving weighted orthogonality when λ≠μ.

Every Dirichlet eigenvalue is simple. At the left endpoint an eigenfunction has value zero; its derivative cannot also vanish, because uniqueness for the equivalent first-order ODE system would make it zero everywhere. Two eigenfunctions at the same λ can therefore be scaled to have the same initial derivative, after which ODE uniqueness makes them identical. This argument proves simplicity without requiring a zero-counting theorem.

**Worked example 9.1: a constant string.** If p=P>0, w=W>0 and q=Q≥0 are constant, the eigenfunctions are sin(nπx/L), and λn=(P(nπ/L)²+Q)/W. Their weighted normalization factor is sqrt(2/(WL)). Both inertia W and stiffness P matter. Increasing Q shifts all eigenvalues by Q/W rather than multiplying their frequencies by a common factor.

## 2. Constructing the inverse Green operator

Let a solve −(pa')'+qa=0 with a(0)=0 and p(0)a'(0)=1. Let b solve the same equation with b(L)=0 and p(L)b'(L)=−1. ODE theory gives C2 solutions. The function a is positive and increasing for x>0: while a>0, (pa')'=qa≥0 keeps pa'≥1, so a cannot turn or return to zero. Continuation establishes this over the interval. Reversing the coordinate proves b>0 for x<L and b'<0.

The weighted Wronskian W0=p(a'b−ab') is constant, because differentiating it and substituting the two ODEs cancels all terms. At zero it equals b(0)>0. Define

\\[
 G(x,y)=\\frac{a(\\min(x,y))b(\\max(x,y))}{W_0}.
\\]

This kernel is continuous and symmetric, zero at x=0,L, and solves the homogeneous equation off x=y. Its first x derivative has jump satisfying p(y)(Gx(y+,y)−Gx(y−,y))=−1. For continuous f, split the integral

\\[
 (Kf)(x)=\\int_0^LG(x,y)w(y)f(y)\\,dy
\\]

at y=x. Differentiating the two ordinary integrals shows that u=Kf is C2 and satisfies −(pu')'+qu=wf, with zero endpoints. The derivative jump supplies exactly the source term; the terms from differentiating the first split cancel because G is continuous. Uniqueness follows from the positive energy identity for the difference of two solutions.

**Worked example 9.2: zero potential.** If p=1,q=0, then a=x,b=L−x,W0=L, so G=min(x,y)(L−max(x,y))/L. A nonconstant weight changes K's integration factor w(y), not this particular Green kernel for the differential expression −d²/dx². The resulting eigenfunctions are nevertheless generally no longer sines, because w appears on the right side of the eigenvalue equation.

## 3. Compactness without an unproved spectral theorem

For f∈H define Kf(x) by the continuous functional with kernel G(x,·). Cauchy–Schwarz gives |Kf(x)|≤||G(x,·)||w||f||w. Since G is uniformly continuous on the compact square, x↦G(x,·) is uniformly continuous in the weighted square norm. Therefore the images of the unit ball of H are uniformly bounded and equicontinuous functions of x, vanishing at the endpoints. Arzelà–Ascoli gives a uniformly convergent subsequence from any sequence of such images. Uniform convergence implies convergence in H. Thus K is compact on H.

Symmetry of G gives <Kf,g>w=<f,Kg>w first for continuous f,g by the finite double integral and then for all H by continuity and density. Positivity follows first for continuous f from

\\[
 \\langle Kf,f\\rangle_w
 =\\int_0^L(p|u'|^2+q|u|^2),\\qquad u=Kf,
\\]

using the differential equation and integration by parts. Approximation extends nonnegativity to H.

The operator is injective. Suppose Kf=0. For any smooth compactly supported ψ in (0,L), put h=(-(pψ')'+qψ)/w, a continuous function. The Green construction gives Kh=ψ. Self-adjointness then gives <f,ψ>w=<f,Kh>w=<Kf,h>w=0. Such ψ are dense in H: approximate a continuous function first by cutting it off in short endpoint intervals, whose norm contribution is small by boundedness; approximate the resulting compactly supported continuous function uniformly by smooth local averages, keeping support inside the interval. Hence f is orthogonal to a dense set and is zero.

These statements are the exact compactness, symmetry, positivity and injectivity properties needed next. No boundary regularity theorem or unbounded-operator domain theorem has been invoked.

## 4. The compact positive spectral argument

Let K be a nonzero compact positive self-adjoint operator on a Hilbert space. Set μ=sup_{||v||=1}<Kv,v>. Positivity implies μ>0. The quadratic form obeys Cauchy–Schwarz,

\\[
 |\\langle Kv,z\\rangle|^2
 \\le\\langle Kv,v\\rangle\\langle Kz,z\\rangle.
\\]

To prove this, expand the nonnegative form of v+tz and choose the real or complex scalar t minimizing the resulting quadratic; a zero diagonal term is handled by the same expansion for arbitrarily large t. Taking the supremum over unit z gives ||Kv||²≤μ<Kv,v>, hence ||K||≤μ; the reverse inequality is immediate.

Choose unit vj with <Kvj,vj>→μ. Then

\\[
 \\|Kv_j-\\mu v_j\\|^2
 \\le\\mu^2-\\mu\\langle Kv_j,v_j\\rangle\\longrightarrow0.
\\]

Compactness gives a subsequence Kvj converging to y. The residual estimate makes vj converge to y/μ, a unit eigenvector of K at eigenvalue μ. Its orthogonal complement is invariant under K by self-adjointness. Repeat the argument on that complement as long as the restriction is nonzero.

The resulting positive eigenvalues, repeated by multiplicity, decrease to zero if infinitely many occur. Otherwise an orthonormal sequence ej with eigenvalues bounded below would make Kej pairwise separated, contradicting compactness. Each positive eigenspace is finite-dimensional by the same argument. On the common orthogonal complement of all chosen eigenvectors, K must be zero: a nonzero restriction would attain a positive maximum there, whereas its norm is bounded by every preceding maximum and hence by their limit zero. If K is injective, this complement is zero. Thus its eigenvectors form a complete orthonormal family.

Our H is infinite-dimensional, and K is injective, so the family cannot be finite. This proof supplies completeness rather than importing it from the eigenfunction notation.

## 5. Returning to the differential equation

Let Kφn=μnφn with μn>0 and ||φn||w=1. Since K maps H to continuous functions, φn is continuous. The classical Green calculation now applies, showing φn∈C2 and

\\[
 -(p\\phi_n')'+q\\phi_n=\\lambda_nw\\phi_n,
 \\qquad \\lambda_n=1/\\mu_n.
\\]

The eigenvalues are simple by the earlier ODE argument. Consequently they can be indexed strictly increasingly, 0<λ1<λ2<⋯, with λn→∞. Every f∈H has the expansion

\\[
 f=\\sum_{n\\ge1}f_n\\phi_n\\quad\\hbox{in }H,
 \\qquad f_n=\\langle f,\\phi_n\\rangle_w,
 \\qquad \\|f\\|_w^2=\\sum_{n\\ge1}|f_n|^2.
\\]

These are norm assertions. They do not state convergence at every point for arbitrary H elements, for which point values may not be meaningful. For the boundary problem Au=f, where A=w^−1(−(pu')'+qu), the inverse formula is Kf=Σ(f_n/λn)φn in H. If f is continuous, the Green construction supplies the stronger classical solution and its boundary values. Coefficient algebra and regularity complement each other rather than replacing one another.

**Worked example 9.3: expansion of a source.** If f=φj, then the zero-boundary solution of Au=f is φj/λj. For f=αφj+βφk, superposition gives αφj/λj+βφk/λk. These exact finite cases show why small eigenvalues produce a larger response and why an eigenvalue zero, if allowed by a different boundary problem, would obstruct arbitrary inversion.

## 6. Variational ordering and an eigenvalue bound

For a nonzero C2 Dirichlet function v define the Rayleigh quotient R(v)=∫(p|v'|²+q|v|²)/∫w|v|². Integration by parts against φn shows that the nth coefficient of Av is λn times that of v. Parseval and Cauchy–Schwarz therefore give <Av,v>w=Σλn|vn|². This proves

\\[
 \\lambda_n=\\min_{\\dim S=n}\\ \\max_{0\\ne v\\in S}R(v),
\\]

where S ranges over n-dimensional subspaces of these C2 Dirichlet functions. Any such S contains a nonzero vector orthogonal to φ1,…,φn−1, by solving n−1 homogeneous linear conditions. Its quotient is at least λn. Conversely S spanned by the first n eigenfunctions has maximum λn. This establishes both directions without presupposing a variational theorem.

Let pmin=min p and wmax=max w. Since q≥0, R(v)≥(pmin/wmax)∫|v'|²/∫|v|². Applying the same established characterization to the explicit unweighted sine problem gives

\\[
 \\lambda_n\\ge\\frac{p_{\\min}}{w_{\\max}}
 \\left(\\frac{n\\pi}{L}\\right)^2.
\\]

Thus regular eigenvalues grow at least quadratically. This estimate is sufficient for summing exponentially damped mode derivatives in heat problems. It is not the sharper asymptotic formula for variable coefficients, which would require additional argument.

## 7. Evolution, coefficient shifts and boundaries

The weighted diffusion equation w u_t=(pu_x)_x−qu has modal factors e^−λnt, and the weighted wave equation w u_tt=(pu_x)_x−qu has factors cos(sqrtλnt), sin(sqrtλnt)/sqrtλn. Finite combinations are exact classical solutions. The complete expansions give norm evolutions for arbitrary H data by square-summable coefficient estimates; stronger initial or positive-time classical claims need derivative estimates as well.

For continuous real q of either sign, choose M large enough that q+Mw≥0. Apply the proved theorem to this shifted problem. Eigenfunctions are unchanged and all eigenvalues shift by M. Subtracting M gives a complete expansion for the original regular Dirichlet problem, whose eigenvalues are real, bounded below and tend to infinity, but can include negative or zero values. In wave evolution a negative eigenvalue gives hyperbolic growth rather than an oscillation; division by sqrtλ without checking its sign is invalid.

Separated Robin or Neumann conditions require the corresponding Green construction and boundary form. The preceding chapter proved their elementary positivity identities. Our complete theorem here is the Dirichlet case; no general singular-endpoint or arbitrary-boundary theorem is asserted from that proof. The ODE boundary chapter provides the bridge, while the L4 functional-analysis spectral route supplies broader operator formulations.

## 8. Positivity of the first mode and coefficient comparison

The Green kernel is strictly positive for interior x,y, since a and b are positive and W0>0. This proves a useful additional property of the first mode. Choose a real normalized eigenfunction φ1 for the largest eigenvalue μ1 of K; a real choice is possible because the real and imaginary parts of any eigenfunction separately satisfy the real equation. Replacing φ1 by |φ1| cannot decrease the quadratic form: the double integral of the positive kernel times |φ1(x)||φ1(y)| is at least the integral with φ1(x)φ1(y). Its norm is unchanged. Since μ1 is already the maximum, |φ1| is also a maximizing vector.

The residual inequality in the spectral proof makes every maximizing unit vector an eigenvector. Thus K|φ1|=μ1|φ1|. For any interior x, the left side is strictly positive: |φ1| is nonzero and continuous, hence positive on some nonempty interior subinterval, where G(x,y)w(y)>0. Consequently |φ1(x)|>0 throughout the interior. Continuity then prevents φ1 from changing sign. Choose its sign to make φ1 positive there. Every higher real eigenfunction must change sign, because its weighted integral against the positive φ1 is zero and it is not identically zero.

Zeros of a nonzero eigenfunction are simple. If both φ and φ' vanished at one point, ODE uniqueness would force the zero function. There can be only finitely many zeros on the closed interval: an accumulating sequence of zeros, together with Rolle's theorem and continuity of the derivative, would produce both value and derivative zero at an accumulation point, including either regular endpoint. This proves finite nodal structure. The completeness and variational ordering above do not require the exact zero count; a phase-angle proof of that sharper statement follows below.

The Rayleigh characterization also gives coefficient monotonicity. If p is increased pointwise while q,w remain fixed, every quotient increases, hence each λn increases or stays equal. The same is true if q is increased. If w is increased while p,q remain fixed under the nonnegative-potential assumptions, the denominator increases and the nonnegative quotient decreases, so each eigenvalue decreases or stays equal. These comparisons refer to the same interval and boundary conditions.

For a quantitative example, suppose only the potential changes and |qtilde−q|≤εw. Every Rayleigh quotient changes by at most ε. Taking maxima over a fixed finite-dimensional subspace and then the variational minimum shows |λtilde_n−λn|≤ε for every n. This is a genuine stability bound, independent of the mode index. It controls eigenvalues, not eigenfunction phases or their closeness; simplicity alone does not supply such a uniform eigenfunction estimate. The comparison remains valid after a common sufficiently large potential shift, so the two perturbed potentials need not themselves be nonnegative, provided the same positive weight and regular Dirichlet domain are retained.

## 9. Counting zeros by a phase angle

The exact nodal count can also be proved within regular ODE theory. Let y(x;λ) solve the eigenvalue equation with y(0)=0 and v(0)=1, where v=py'. The vector (y,v) never vanishes, by ODE uniqueness. Write y=r sinθ, v=r cosθ with the continuous angle chosen as θ(0)=0. Differentiation gives

\\[
 \\theta'=\\frac{v^2/p+(\\lambda w-q)y^2}{y^2+v^2}.
\\]

The angle need not increase at every x. However, at a zero of y its derivative is 1/p>0, so it crosses every integer multiple of π upward. It can never recross such a level downward. The endpoint condition y(L;λ)=0 is therefore θ(L;λ)=kπ, and such a solution has k−1 interior zeros.

It remains to determine which integer corresponds to the ordered eigenvalue. Dependence of ODE solutions on λ is C1. Put dots for λ derivatives and S=v dot y−y dot v. From y'=v/p and v'=(q−λw)y, direct differentiation gives S'=wy² and S(0)=0. Hence

\\[
 \\partial_\\lambda\\theta(L;\\lambda)
 =\\frac{\\int_0^Lw(x)y(x;\\lambda)^2dx}
 {y(L;\\lambda)^2+v(L;\\lambda)^2}>0.
\\]

The numerator is positive because the initial derivative is nonzero. Thus the endpoint angle is strictly increasing with λ. At λ=0 the solution is the positive increasing function a constructed earlier, with v>0, so 0<θ(L;0)<π/2.

Finally the endpoint angle tends to infinity with λ. For λ>0 write y=R sinϑ and v/sqrtλ=R cosϑ, choosing ϑ(0)=0. Then

\\[
 \\vartheta'=\\sqrt\\lambda\\left(
 \\frac{\\cos^2\\vartheta}{p}+
 (w-q/\\lambda)\\sin^2\\vartheta\\right).
\\]

For sufficiently large λ, w−q/λ≥wmin/2. Consequently ϑ'≥sqrtλ min(1/pmax,wmin/2), giving ϑ(L)→∞. Scaling the second coordinate positively leaves each quadrant unchanged, so θ and ϑ differ by less than π/2 with their continuous angle choices; θ(L) also tends to infinity. Continuity and strict monotonicity imply that each positive level kπ is reached exactly once. These are all the positive Dirichlet eigenvalues, already known to be the complete ordered sequence. Therefore the nth eigenfunction has exactly n−1 interior zeros.

This proof explains both why zero crossings are ordered and why the mode index counts them. The possibility that θ' is negative between zeros is harmless; assuming it positive everywhere without checking q and λ would have been an incorrect shortcut. Regular endpoints and positive p,w are essential to the argument as stated.

## 10. A justified positive-time diffusion expansion

The eigenvalue bound allows a classical diffusion construction even for initial data in H. Here are the required estimates. For a normalized real eigenfunction, the energy identity gives ||φn'||2≤sqrt(λn/pmin). Since φn(0)=0, integration and Cauchy–Schwarz give ||φn||∞≤sqrt(Lλn/pmin). There is a point z where |φn'(z)|≤||φn'||2/sqrt L. Integrating (pφn')'=(q−λnw)φn from that point bounds ||pφn'||∞ by a constant times (1+λn)^{3/2}. Dividing by pmin bounds ||φn'||∞. Finally the differential equation

\\[
 \\phi_n''=\\frac{q-\\lambda_nw}{p}\\phi_n
 -\\frac{p'}p\\phi_n'
\\]

bounds ||φn''||∞ by another fixed constant times (1+λn)^{3/2}. These constants depend on the coefficient bounds and interval, not on n.

For f∈H, |fn|≤||f||w. Therefore the series u=Σfn e^−λntφn, its first time derivative and its first two spatial derivatives converge uniformly on every t≥τ>0. Each differentiated term has a fixed polynomial factor in λn multiplied by e^−λnτ. For large λ this product is decreasing after replacing τ by τ/2; the quadratic lower bound for λn then compares its tail with a convergent Gaussian series in n. This supplies the summability that λn→∞ alone would not guarantee.

Termwise differentiation now proves w u_t=(pu_x)_x−qu for t>0, with zero endpoint values. Parseval and the finite-block/tail argument give u(t)→f in H as t decreases to zero. For arbitrary H data the initial conclusion is norm recovery, not a continuous pointwise trace. The positive-time spatial regularity proved is C2 under the stated C1/continuous coefficient assumptions; one cannot claim arbitrarily many spatial derivatives when the coefficients themselves lack them.

## Exercises

### PDE-SL-E001 — Weighted normalization
Normalize sin(nπx/L) when w=W is constant and positive.
<details><summary>Hint 1</summary>Its unweighted squared norm is L/2.</details>
<details><summary>Hint 2</summary>Include W before taking the square root.</details>
<details><summary>Full solution</summary>The normalized function is sqrt(2/(WL))sin(nπx/L). Its weighted squared integral is (2/(WL))W(L/2)=1. Using sqrt(2/L) would leave norm squared W.</details>

### PDE-SL-E002 — Reality
Why is the eigenvalue real even if the eigenfunction is complex?
<details><summary>Hint 1</summary>Multiply by its complex conjugate.</details>
<details><summary>Hint 2</summary>The energy and weighted norm are real.</details>
<details><summary>Full solution</summary>The identity λ∫w|φ|²=∫(p|φ'|²+q|φ|²) has positive real denominator and real numerator. Thus λ is real; under q≥0 its numerator is strictly positive for a nonzero Dirichlet function, so λ>0.</details>

### PDE-SL-E003 — Simple eigenvalues
Show why two eigenfunctions at one λ must be proportional.
<details><summary>Hint 1</summary>Both have left value zero.</details>
<details><summary>Hint 2</summary>Match their nonzero initial derivatives and use ODE uniqueness.</details>
<details><summary>Full solution</summary>Neither initial derivative can vanish, since zero initial value and derivative force the zero solution. Scale one derivative to equal the other. The two functions then solve the same second-order linear ODE with the same initial data, so their difference is zero.</details>

### PDE-SL-E004 — Wronskian
Differentiate p(a'b−ab') and prove it is constant.
<details><summary>Hint 1</summary>Group derivatives as (pa')'b−a(pb')'.</details>
<details><summary>Hint 2</summary>Each grouped derivative equals q times its solution.</details>
<details><summary>Full solution</summary>The derivative equals (pa')'b−a(pb')'=qab−aqb=0. Thus the Wronskian is constant. Its value b(0)>0 follows from a(0)=0 and p(0)a'(0)=1.</details>

### PDE-SL-E005 — Kernel jump
Compute p(y)(Gx(y+,y)−Gx(y−,y)).
<details><summary>Hint 1</summary>Differentiate each side of the min/max formula.</details>
<details><summary>Hint 2</summary>The numerator is the negative Wronskian.</details>
<details><summary>Full solution</summary>The right derivative is a(y)b'(y)/W0 and the left is a'(y)b(y)/W0. Multiplying their difference by p(y) gives −W0/W0=−1. This produces the positive unit source for the negative differential operator.</details>

### PDE-SL-E006 — Compactness mechanism
Why does uniform convergence of Kfj imply convergence in H?
<details><summary>Hint 1</summary>The interval is finite.</details>
<details><summary>Hint 2</summary>The weight has a finite integral.</details>
<details><summary>Full solution</summary>One has ||Kfj−v||w≤(∫w)^1/2||Kfj−v||∞. Thus the right side tends to zero. Arzelà–Ascoli's uniformly convergent subsequence therefore gives precisely the compactness needed in the completed weighted norm.</details>

### PDE-SL-E007 — Missing completeness
Give an orthogonal family that is not complete in the sine space.
<details><summary>Hint 1</summary>Discard one sine mode.</details>
<details><summary>Hint 2</summary>The omitted mode remains orthogonal to every retained one.</details>
<details><summary>Full solution</summary>The family sin(nπx/L) for n≥2 is orthogonal, but sin(πx/L) is nonzero and orthogonal to its entire closed span. Thus orthogonality by itself cannot establish recovery of arbitrary data.</details>

### PDE-SL-E008 — Rayleigh bound
If p≥2 and w≤3 on an interval of length π, give the stated lower bound on λn when q≥0.
<details><summary>Hint 1</summary>Use pmin/wmax.</details>
<details><summary>Hint 2</summary>The factor (nπ/L)² becomes n².</details>
<details><summary>Full solution</summary>λn≥(2/3)n². This is a lower bound, with equality only in special coefficient configurations; it does not determine the exact eigenvalues of a variable-coefficient problem.</details>

### PDE-SL-E009 — Source mode
Solve Au=5φ3 with zero endpoints.
<details><summary>Hint 1</summary>Apply A to a scalar multiple of φ3.</details>
<details><summary>Hint 2</summary>The eigenvalue λ3 is positive.</details>
<details><summary>Full solution</summary>u=(5/λ3)φ3. It satisfies the endpoints and Au=5φ3. The positive energy identity makes the homogeneous Dirichlet kernel zero, so the solution is unique in the classical class.</details>

### PDE-SL-E010 — Potential shift
What happens to the eigenvalues when q is replaced by q+7w?
<details><summary>Hint 1</summary>Insert an existing eigenfunction into the new equation.</details>
<details><summary>Hint 2</summary>The added term is seven times the weighted function.</details>
<details><summary>Full solution</summary>The equation becomes Lφ+7wφ=(λ+7)wφ. Eigenfunctions are unchanged and eigenvalues increase by seven. Completeness and weighted normalization are unchanged because neither the space nor the eigenfunctions changed.</details>

### PDE-SL-E011 — Zero eigenvalue obstruction
If a shifted-back problem has λj=0, why can Au=φj not have a classical zero-boundary solution?
<details><summary>Hint 1</summary>Take the weighted inner product with φj.</details>
<details><summary>Hint 2</summary>Move A by the symmetric boundary identity.</details>
<details><summary>Full solution</summary>Symmetry gives <Au,φj>w=<u,Aφj>w=0. The proposed right side gives <φj,φj>w=1. This contradiction proves the obstruction. It is exactly why the positive inverse construction required the nonnegative-potential Dirichlet setting.</details>

### PDE-SL-E012 — Norm tail
If f=Σfnφn, give the best n-mode approximation error in the weighted square norm.
<details><summary>Hint 1</summary>Use orthogonal projection onto the first n modes.</details>
<details><summary>Hint 2</summary>Apply Parseval to the omitted coefficients.</details>
<details><summary>Full solution</summary>The orthogonal projection is Σ_{j≤n}fjφj and its squared error is Σ_{j>n}|fj|². For any other combination of those first n modes, Pythagoras adds a nonnegative in-span error, proving minimality. This does not assert the first n modes are the best choice among every possible set of n indices for a particular f.</details>

## Sources and scope

This original regular-boundary development uses classical Sturm–Liouville and compact spectral arguments as its benchmark. The compact positive spectral theorem required here is proved in the chapter, using Arzelà–Ascoli and the Hilbert completion already developed in Fourier Analysis. Singular endpoints, general Robin completeness and pointwise convergence for arbitrary norm data remain distinct questions. Broader spectral formulations are available in Functional Analysis.

## Summary

The weighted boundary identity gives reality, positivity and orthogonality. An explicit Green inverse is compact, positive, self-adjoint and injective. Its proved spectral argument supplies a complete family of regular Dirichlet eigenfunctions, not merely a list of formal modes. Variational ordering controls eigenvalue growth, source inversion divides by positive eigenvalues, and potential shifts explain where positivity can fail. Every expansion conclusion records its norm and boundary class.
`;export{e as default};