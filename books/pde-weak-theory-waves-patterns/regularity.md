
# Elliptic Regularity and Its Boundaries

Weak existence and regularity answer different questions. A coercive equation can have a unique finite-energy solution whose slope jumps at a material interface. A smooth-coefficient problem can have a corner singularity because of its boundary geometry. This chapter proves interior second-derivative regularity by difference quotients and exhibits the failures that prevent a global or classical conclusion without additional hypotheses.

Preparation is [Sobolev spaces](sobolev-spaces.md) and [elliptic weak solutions](elliptic-parabolic-weak-theory.md). We use weak compactness of bounded Hilbert-space sequences and elementary local smoothing. The main theorem concerns a divergence-form equation with a Lipschitz diffusion matrix and a square-integrable volume load. Global boundary estimates, general Sobolev embeddings and nonquadratic integral estimates are identified explicitly as further theorem inputs.

## Interior estimates have two nested domains

Let $U$ have compact closure inside an open domain $\Omega$, and choose a slightly larger open set still compactly contained there. A cutoff supported in the larger set and equal to one on U separates interior differentiability from boundary effects. Constants in the estimate depend on this separation distance. Letting U approach the boundary can make those constants diverge; that is not a global boundary theorem.

Assume $u\in H^1_{\mathrm{loc}}(\Omega)$ solves

$$\int_\Omega A\nabla u\cdot\nabla\phi=\int_\Omega f\phi
\qquad(\phi\in C_c^\infty(\Omega)),$$

with $f\in L^2_{\mathrm{loc}}$, a bounded matrix coefficient A, and uniform ellipticity $\xi^TA(x)\xi\ge\alpha|\xi|^2$ for a positive constant. Density extends this identity to compactly supported first-Sobolev tests. For the second-derivative theorem additionally assume the coefficient has bounded weak first derivatives locally, hence a locally Lipschitz representative. No boundary data are needed for an interior statement.

The diffusion matrix need not be symmetric. Its symmetric part controls the diagonal energy, and its full operator norm controls the cross terms. Constants must therefore include both the ellipticity lower bound and the coefficient upper bound. Smoothness of f and A enters later when differentiating the equation further; uniform ellipticity by itself controls only the energy level.

## A cutoff energy bound is the first step

Choose a smooth cutoff $\eta$ between zero and one, and a real constant c. Test with $\eta^2(u-c)$. Such a test is admissible by compact support and the product rule. Expanding its gradient isolates the positive term $\int\eta^2 A\nabla u\cdot\nabla u$. The cross term contains one cutoff derivative and one factor of $u-c$. Cauchy–Schwarz followed by Young's inequality absorbs half the main energy term and leaves a multiple of $\int|\nabla\eta|^2|u-c|^2$.

The load term is bounded by $\|f\|_2\|\eta^2(u-c)\|_2$. Consequently the gradient on the inner set is controlled by the oscillation of u on the larger set and the load there. In the homogeneous case this yields the familiar Caccioppoli estimate

$$\|\nabla u\|_{L^2(B_r)}\le
\frac{C}{R-r}\|u-c\|_{L^2(B_R)}$$

for concentric interior balls. The constant depends on dimension and ellipticity bounds, not on u or c. Choosing c as the larger-ball mean measures oscillation rather than an irrelevant additive constant. With a nonzero load the additional product of its norm and the oscillation norm remains before a further Young inequality.

This local estimate does not yet produce second derivatives. It supplies control of first derivatives by lower-order information and is also useful in compactness and higher-integrability arguments. Treating it as a smoothness theorem would skip the step that estimates variations of the first derivative itself.

## Difference quotients are derivatives with a controllable shift

For coordinate direction j and nonzero small h define $\delta_hv(x)=[v(x+he_j)-v(x)]/h$. If both points and the joining segment lie in a larger interior set, the fundamental theorem for smooth approximations and Cauchy–Schwarz give a square-integrable quotient bound by the corresponding weak derivative norm on that larger set. Passing through smooth approximations proves the same bound for Sobolev functions. The shift margin is why the cutoff support must stay away from the boundary.

The discrete integration-by-parts identity is

$$\int v\,\delta_{-h}\psi=-\int\delta_hv\,\psi,$$

whenever supports make the change of variables legitimate. Its sign follows by changing variables in the shifted term, not by guessing from an ordinary derivative notation. The product rule includes a shifted coefficient: $\delta_h(Av)=A(x+he_j)\delta_hv+(\delta_hA)v$. This exact identity is essential when coefficients vary.

We also need the converse quotient criterion. If a square-integrable function has uniformly bounded difference quotients in direction j on every smaller interior set, choose a sequence of steps tending to zero. Weak compactness gives a weak quotient limit along a subsequence. Against a compact smooth test, discrete integration by parts passes to the limit and identifies the limit as the jth weak derivative. Its norm is bounded by weak lower semicontinuity. Uniqueness of distributional derivatives removes ambiguity about which subsequence supplied that derivative.

The criterion proves existence of a derivative rather than only boundedness of a suggestive numerical approximation. It is local because the quotient must be defined with a uniform shift margin. For a family of rough functions one cannot simply differentiate the original weak equation pointwise to obtain the same result; the quotient argument is what justifies that operation at the energy level.

## Interior second derivatives follow from an admissible test

Choose a cutoff as above and set $w=\delta_hu$. Use the test $-\delta_{-h}(\eta^2w)$ in the weak equation. For each fixed small h it belongs to the compactly supported energy space. Discrete integration by parts transforms the left side into

$$\int\delta_h(A\nabla u)\cdot\nabla(\eta^2w).$$

Apply the shifted product rule. The main term is the integral of $\eta^2 A(x+he_j)\nabla w\cdot\nabla w$, bounded below by $\alpha\|\eta\nabla w\|_2^2$. The cutoff cross term is bounded by a constant times $\|\eta\nabla w\|_2\|w\nabla\eta\|_2$. The coefficient-difference term is bounded using $\|\delta_hA\|_\infty\le\|\partial_jA\|_\infty$ on the local region. Its remaining factors are the original gradient and either the cutoff gradient or the weighted new gradient.

On the right, do not differentiate f. Bound its pairing with the quotient test by its square-integrable norm times the quotient norm. The first quotient bound applied to $\eta^2w$ controls the latter by its jth derivative. Expanding that derivative gives a constant times $\|w\|_2+\|\eta\nabla w\|_2$. Young's inequality absorbs all appearances of the new gradient, leaving only the old gradient, the load and the cutoff constants.

Finally the quotient bound for u controls $\|w\|_2$ by its original first-derivative norm on a slightly enlarged set. We obtain a bound on $\|\nabla\delta_hu\|_{L^2(U)}$ independent of sufficiently small h. The converse criterion applied to every first derivative yields $u\in H^2_{\mathrm{loc}}(\Omega)$ and an estimate of the form

$$\|u\|_{H^2(U)}\le C\bigl(\|u\|_{H^1(V)}+\|f\|_{L^2(V)}\bigr),
\qquad U\Subset V\Subset\Omega.$$

The constant depends on the nested regions, coefficient bounds, coefficient Lipschitz bound and ellipticity. The proof did not require derivatives of f. It did require a coefficient derivative bound: if A jumps, its difference quotients can grow as the step shrinks, exactly where this argument ceases to give a uniform estimate.

## Second weak derivatives are still not classical second derivatives

In one dimension a first-Sobolev function has a continuous representative. Applying that fact to the derivative shows that an $H^2$ function has a continuously differentiable representative with a one-half Hölder first derivative. Its second derivative is only square integrable and may jump or be unbounded. A classical twice-continuously-differentiable conclusion needs additional information about the load and coefficients.

### Worked example: a discontinuous volume load

On $(-1,1)$ set $u(x)=x_+^2/2$, where the positive part is zero for negative x and x for positive x. The function and its first derivative match continuously at zero. Its second weak derivative is the indicator of the positive half-interval: there is no point mass because the first derivative is continuous. Thus u belongs to $H^2$ and solves $-u''=-\mathbf1_{(0,1)}$ with its actual endpoint traces.

It is not twice classically differentiable at zero, because its one-sided second derivatives differ. The diffusion coefficient is as smooth as possible and the load belongs to every finite integral class, but that load is discontinuous. The interior second-derivative theorem gives exactly the correct square-integrable result without claiming a continuous second derivative.

In dimension three the Sobolev embedding theorem gives a continuous representative for a local $H^2$ function, with any Hölder exponent strictly below one half on smaller regions. In dimension two every exponent strictly below one is available. These are named embedding inputs here. In dimension four and above, $H^2$ membership alone does not imply continuity. The derivative order, integral exponent and dimension must be specified together before a pointwise conclusion is made.

## A coefficient interface defeats the Lipschitz hypothesis

The preceding elliptic chapter constructed a continuous piecewise-affine solution across a jump from diffusion coefficient one to two. Its flux is continuous but its slope is not. Its second distributional derivative contains a point mass, so it is not globally $H^2$. On either side of the interface it is perfectly smooth. This example is consistent with interior regularity because the coefficient fails the Lipschitz hypothesis at the interface.

It also suggests the right replacement: piecewise regularity plus a transmission condition. On smooth subdomains with smooth coefficients one may estimate derivatives within each material, while the interface condition matches the conormal flux. A theorem of that kind includes interface geometry and data regularity; it cannot be inferred merely by applying an interior estimate across a discontinuous coefficient.

In numerical approximation this distinction changes which norms and spaces are natural. A mesh aligned to a material interface can represent a continuous kink efficiently while a globally smooth approximation class may struggle. The continuous weak theorem certifies the energy solution, whereas a higher-order rate needs a piecewise approximation result matching its actual regularity. A visually smooth numerical curve does not restore the missing global derivative.

## Smooth coefficients do not cure a reentrant corner

### Worked example: a sector singularity

Take a planar sector with opening angle $\omega$ strictly between $\pi$ and $2\pi$, and write $p=\pi/\omega$, so p lies strictly between one half and one. The harmonic function $r^p\sin(p\theta)$ vanishes on both radial edges. Multiply it by a smooth radial cutoff equal to one near the vertex and zero before the outer circular boundary. The resulting function has zero boundary trace on the truncated sector.

Near the vertex its gradient has magnitude proportional to $r^{p-1}$. Integrating its square against the polar area factor gives an integral proportional to $\int_0^\epsilon r^{2p-1}dr$, which is finite. Cutting out a smaller disk changes this energy by a quantity tending to zero, including the derivative of the inner cutoff. Thus the function belongs to the zero-boundary first-Sobolev space, not merely a formal pointwise boundary class.

Its Hessian has magnitude comparable to $r^{p-2}$, with a nonzero coefficient since p is neither zero nor one. The squared Hessian integral contains $\int_0^\epsilon r^{2p-3}dr$, which diverges because p is less than one. Hence it does not belong to $H^2$ near the vertex. The source $-\Delta u$ is supported only in the cutoff annulus, where all factors are smooth, and is square integrable. It is the boundary corner, not a rough interior source or coefficient, that defeats global second-derivative regularity.

There is no hidden point source at the vertex in the domain's interior: the vertex is a boundary point. Compactly supported interior tests stay away from it. Extending the distributional identity to all zero-boundary energy tests follows by density and the bounded weak form. Coercivity therefore identifies this singular function as the unique weak solution for its smooth-annulus load.

A standard global theorem, stated as an input, gives $H^2$ regularity for a zero-Dirichlet uniformly elliptic divergence-form problem on a bounded $C^{1,1}$ domain with Lipschitz coefficients and square-integrable load. Its estimate includes a domain constant. The reentrant sector does not satisfy that boundary hypothesis. Some less regular special domains, including suitable convex polygons, admit additional results, but they require their own geometric arguments.

## The whole-space constant-coefficient estimate explains the derivative count

For the equation $(1-\Delta)u=f$ on all of Euclidean space with f square integrable, the Fourier transform gives $\widehat u=\widehat f/(1+|\xi|^2)$. Plancherel's theorem identifies the squared second-Sobolev norm with the integral of $(1+|\xi|^2)^2|\widehat u|^2$, up to the chosen equivalent norm convention. Hence the solution gains exactly two derivatives in that weighted norm.

This calculation is a complete estimate once the Fourier isometry and weak-derivative multiplier identities are supplied. It is not a proof for arbitrary boundary conditions or variable coefficients: extending a boundary solution by zero can introduce boundary distributions, and a variable coefficient no longer commutes with Fourier multiplication. Cutoffs and coefficient perturbations are the additional tools needed to localize the principle.

### Worked example: high-frequency forcing

On $(0,\pi)$ with zero endpoints let $f_n=\sin(nx)$ and $u_n=\sin(nx)/n^2$. The load norms stay constant, the solution norms shrink quadratically and the gradient norms shrink linearly. The second-derivative norms stay constant. Third-derivative norms grow linearly with n. Thus a square-integrable load bound supports a uniform second-derivative bound in this smooth one-dimensional setting but no uniform third-derivative bound.

Each individual solution is smooth, so this is a statement about estimates across a family rather than differentiability of a fixed example. It shows why a claimed higher-order rate cannot have a constant depending only on a lower-order load norm. Derivatives of the data, or a stronger approximation structure, must enter the corresponding constant.

## Bootstrapping has a hypothesis at every step

With smooth coefficients and smooth load in the interior, differentiating the weak equation after the first regularity gain produces equations for first derivatives. Their right sides contain derivatives of coefficients multiplied by already controlled solution derivatives. On compact subregions all coefficient derivatives are bounded. Repeating the difference-quotient estimate therefore raises the Sobolev order step by step; taking enough steps and applying a Sobolev embedding yields interior smoothness.

This bootstrap is valid because each preceding estimate makes the next differentiated equation meaningful in its required load space. Starting from a jump coefficient breaks the coefficient-product step; starting from a merely square-integrable load breaks a step that differentiates that load. Boundary bootstrapping additionally requires boundary charts and compatible boundary data at each order. The notation of a smooth formal equation is not a substitute for those assumptions.

For a numerical error estimate, regularity is useful only when its norm is bounded in terms of known data. An assertion that the solution happens to be smooth does not quantify the large derivatives in a thin layer or near a nearly singular geometric feature. The error constant can grow even when the formal convergence power stays the same. Energy estimates, local regularity and approximation theorems should therefore be combined with their domains and constants visible.

## Exercises with staged help

### 1. Discrete integration by parts

Prove the quotient integration identity for compactly supported functions and small shifts.

<details><summary>Hint 1</summary>

Expand the quotient with negative step using its definition.

</details>
<details><summary>Hint 2</summary>

Change variables in the shifted integral before combining terms.

</details>
<details><summary>Full solution</summary>

The left side is $\int v(x)[\psi(x)-\psi(x-he_j)]/h\,dx$. In the second term put $z=x-he_j$; it becomes $\int v(z+he_j)\psi(z)/h\,dz$. Subtraction gives minus the integral of $\delta_hv$ times the test. Compact supports and the shift margin ensure both integrals lie in the domain.

</details>

### 2. The shifted product rule

Derive the product identity for a matrix A and vector v and identify the coefficient term requiring a Lipschitz bound.

<details><summary>Hint 1</summary>

Add and subtract the shifted coefficient times the unshifted vector.

</details>
<details><summary>Hint 2</summary>

The difference quotient of the coefficient must be bounded independently of the step.

</details>
<details><summary>Full solution</summary>

The numerator splits as $A(x+h)[v(x+h)-v(x)]+[A(x+h)-A(x)]v(x)$. Dividing gives the stated identity. The second term has $\delta_hA$, bounded by the local Lipschitz constant. For a jump coefficient no such uniform bound holds near the interface, so the second-derivative proof cannot absorb it with a fixed constant.

</details>

### 3. A quotient limit

Assume the quotients of v in one direction are uniformly bounded in square-integrable norm on a fixed inner region. Show how a weak limit identifies a weak derivative there.

<details><summary>Hint 1</summary>

Extract a weakly convergent subsequence along steps tending to zero.

</details>
<details><summary>Hint 2</summary>

Move each quotient to a fixed compact smooth test and pass to the limit.

</details>
<details><summary>Full solution</summary>

Weak compactness gives a limit g. Discrete integration by parts gives $\int g\phi=-\int v\partial_j\phi$ because the smooth test quotients converge uniformly to its derivative. Thus g is the weak derivative of v, with norm at most the uniform quotient bound by lower semicontinuity. The support must remain inside the region where all quotients were defined.

</details>

### 4. No classical second derivative

Verify that $x_+^2/2$ is in $H^2(-1,1)$ but is not twice classically differentiable at zero.

<details><summary>Hint 1</summary>

Its first derivative is the positive-part function.

</details>
<details><summary>Hint 2</summary>

Continuity of that first derivative removes a point mass from its weak derivative.

</details>
<details><summary>Full solution</summary>

The first weak derivative is $x_+$ and the second is the positive-half indicator, both square integrable. At zero the difference quotients of the first derivative tend to zero from the left and one from the right, so the classical second derivative fails there. Weak second differentiability and continuous classical second differentiability are distinct claims.

</details>

### 5. Sector integrability

For $r^p\sin(p\theta)$ near a planar vertex, derive the gradient and Hessian integrability conditions when their angular coefficients are nonzero.

<details><summary>Hint 1</summary>

Each derivative lowers the radial power by one.

</details>
<details><summary>Hint 2</summary>

The area measure adds a factor r to the radial integral.

</details>
<details><summary>Full solution</summary>

Gradient square integrability requires $\int r^{2p-1}dr<\infty$, hence p positive. Hessian square integrability requires $\int r^{2p-3}dr<\infty$, hence p greater than one. At special polynomial exponents an angular coefficient can vanish, so the nonzero-coefficient qualification matters; the reentrant-sector exponent strictly between zero and one has no such cancellation.

</details>

### 6. Why an interior theorem survives a corner

Explain why the cutoff sector solution is smooth on every compact subset of the domain despite failing global $H^2$.

<details><summary>Hint 1</summary>

The singular vertex belongs to the boundary.

</details>
<details><summary>Hint 2</summary>

A compact interior subset has a positive distance from it.

</details>
<details><summary>Full solution</summary>

On such a subset the radius is bounded below by a positive number and the angular expression and cutoff are smooth. Its derivatives are bounded there. The global Hessian divergence occurs only on regions approaching the boundary vertex, where interior-estimate constants need not remain bounded. Thus local smoothness and failure of a global integral norm are compatible.

</details>

### 7. A missing interface hypothesis

An elliptic diffusion coefficient is piecewise constant with a jump, and the load is smooth. Which hypothesis of the interior $H^2$ proof fails, and what condition replaces ordinary derivative matching in the weak solution?

<details><summary>Hint 1</summary>

Inspect the coefficient difference quotient.

</details>
<details><summary>Hint 2</summary>

Integrate by parts on the two materials and retain the interface terms.

</details>
<details><summary>Full solution</summary>

The coefficient is not Lipschitz across the interface, so its quotients have no fixed essential-supremum bound there. For a continuous energy solution the interface integration terms require matching conormal flux when there is no surface source. The ordinary derivative may jump to compensate for the material coefficient. Piecewise regularity can still hold away from the interface.

</details>

### 8. Fourier gain

For $(1-\Delta)u=f$ in the whole space, show the weighted second-Sobolev Fourier norm of u equals the square-integrable Fourier norm of f.

<details><summary>Hint 1</summary>

Solve the scalar multiplier equation at each frequency.

</details>
<details><summary>Hint 2</summary>

The second-Sobolev weight cancels the squared denominator.

</details>
<details><summary>Full solution</summary>

The multiplier is $\widehat u=\widehat f/(1+|\xi|^2)$. Hence integrating $(1+|\xi|^2)^2|\widehat u|^2$ gives exactly $\int|\widehat f|^2$. Plancherel identifies this with the chosen physical norms up to the fixed Fourier normalization. Boundary and variable-coefficient problems require additional arguments because this scalar multiplier equation no longer describes them directly.

</details>

### 9. An unjustified higher-order bound

Use the sine family to disprove a uniform third-Sobolev bound depending only on the square-integrable load norm.

<details><summary>Hint 1</summary>

Differentiate the solution three times.

</details>
<details><summary>Hint 2</summary>

The load amplitude is fixed while the third derivative amplitude grows with frequency.

</details>
<details><summary>Full solution</summary>

The solution $\sin(nx)/n^2$ has third derivative $-n\cos(nx)$, with norm growing linearly in n. The load $\sin(nx)$ has constant norm. No frequency-independent constant can bound the former by the latter. Stronger data control, such as a derivative norm of the load, is needed for that estimate.

</details>

### 10. Repair a regularity claim

Repair: “Lax–Milgram gives a unique weak solution, therefore a smooth finite-element plot proves a classical solution.”

<details><summary>Hint 1</summary>

Separate existence, regularity and approximation.

</details>
<details><summary>Hint 2</summary>

List which data, coefficient and boundary conditions a regularity theorem would need.

</details>
<details><summary>Full solution</summary>

State that coercivity gives a unique energy-space solution with an energy estimate. Classical or higher-Sobolev regularity needs an applicable theorem with coefficient, load and domain hypotheses; the interface and sector examples show genuine failures. A finite-element plot is a finite-dimensional representation, whose error needs an approximation and residual argument. Its appearance alone proves neither continuous regularity nor closeness in a chosen norm.

</details>

## Sources and continuation

Evans, *Partial Differential Equations*, and Brezis, *Functional Analysis, Sobolev Spaces and Partial Differential Equations*, develop difference quotients, embeddings and boundary regularity. The interior second-derivative proof and the explicit counterexamples above are direct. The stated global $C^{1,1}$ boundary estimate and general Sobolev embeddings are named further inputs, with their role separated from the proved local theorem. Parabolic energy theory next uses this distinction between the existence space and any later smoothing conclusion.
