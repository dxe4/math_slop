
# Center Manifolds and Normal Forms

Linearization settles a hyperbolic equilibrium, but eigenvalues on the imaginary axis leave the decisive nonlinear terms invisible. This chapter develops a local reduction ledger: split stable, unstable, and centre directions; construct a locally invariant centre graph; compute only the jet needed for a stated conclusion; and test the reduced prediction against the full system without confusing numerical agreement with proof.

## 1. The spectral split and its boundary

Consider $z'=Az+F(z)$ on real n-space, where $F(0)=0$, $DF(0)=0$, and $F$ is sufficiently smooth near zero. After a real linear change of coordinates, write

$$x'=Bx+f(x,y),\qquad y'=Cy+g(x,y),$$

where the eigenvalues of $B$ have zero real part and those of $C$ have nonzero real part. The x-space is centre; the y-space contains stable and unstable blocks. A **local center manifold** is a graph $y=h(x)$ with $h(0)=0$, $Dh(0)=0$, locally invariant under the flow.

**Theorem 5.1 (Local center-manifold (cited finite-smoothness input)).** Fix a finite integer $r\ge2$. If the vector field is $C^r$ near the equilibrium and the stated spectral split holds, a local $C^r$ centre manifold can be chosen so that every complete solution remaining in a sufficiently small neighbourhood for all positive and negative time lies in it. The graph has the stated value and tangent at zero. The manifold need not be unique away from its Taylor jet, need not extend globally, and need not attract when unstable directions are present. The general existence and reduction theorem is an input here; the graph identities, explicit nonuniqueness, transverse estimate and normal-form calculations below are proved directly. The finite-smoothness statement does not assert an analytic graph for an analytic field.

The reduced equation is

$$x'=Bx+f(x,h(x)).$$

Local stability of the reduced equilibrium transfers to the full system when all complementary eigenvalues are strictly stable; instability of the reduced equation transfers even with stable complements. If an unstable complementary eigenvalue exists, the full equilibrium is already unstable.

## 2. The invariance equation

Differentiate $y=h(x)$ along solutions. Invariance requires

$$Dh(x)[Bx+f(x,h(x))]=Ch(x)+g(x,h(x)).$$

To compute through degree k, insert a polynomial ansatz for h, expand, and equate monomial coefficients through degree k. A residual of order $|x|^{k+1}$ determines the centre graph only to the claimed order. Substituting that jet gives a reduced vector field with a matching local truncation claim.

Example:

$$x'=x^2,\qquad y'=-y+x^2.$$

Let $h(x)=a x^2+b x^3+O(x^4)$. The invariance equation is

$$h'(x)x^2=-h(x)+x^2.$$

Comparing coefficients gives $a=1$, $b=-2$; hence $h=x^2-2x^3+O(x^4)$. The reduced equation remains $x'=x^2$: negative small states approach zero forward in time, positive ones escape the local neighbourhood. The equilibrium is unstable. The graph expansion does not predict behaviour after escape.

## 3. Approximation theorem and residual audit

The centre-manifold approximation theorem is a further cited input: for an integer order $2\le q\le r$, if a smooth polynomial graph $\phi$ satisfies $\phi(0)=D\phi(0)=0$ and its invariance residual is $O(\|x\|^q)$, then, under the preceding smoothness and spectral hypotheses on a fixed neighbourhood, a centre manifold can be chosen with $h(x)-\phi(x)=O(\|x\|^q)$. The constant is local and need not be uniform as the spectral data or parameters vary. This is an asymptotic statement, not equality. Guckenheimer and Holmes, *Nonlinear Oscillations, Dynamical Systems, and Bifurcations of Vector Fields*, supplies the general reduction framework; the explicit examples below show what its finite-order conclusions mean.

A symbolic audit reports: coordinates and parameter values; spectral gap; retained monomials; residual coefficients; discarded order; and the radius over which numerical comparison is made. A numerical audit starts initial states on the approximate graph, integrates the full and reduced systems at tolerances $\tau, \tau/4, \tau/16$, and tabulates graph defect $|y-h_k(x)|$. It must stop before either trajectory leaves the declared neighbourhood.

## 4. Normal forms and resonance

Write a system as homogeneous pieces,

$$z'=Az+F_2(z)+F_3(z)+\cdots.$$

A near-identity change $z=w+H_k(w)$ can remove degree-k terms lying in the range of the homological operator

$$\mathcal L_AH=DH(w)Aw-AH(w).$$

Terms outside that range are **resonant** and remain in the normal form. In complex diagonal coordinates, a monomial $w^m e_j$ is resonant when $m \cdot \lambda=\lambda_j$. Normal form depends on allowed coordinate class, truncation order, parameters, and symmetries. A finite normal form is locally conjugate only up to a remainder; it is not the original global system.

For the scalar equation $x'=\mu x+a x^2+b x^3+\dots$, parameter-dependent coordinate changes and rescalings reveal saddle-node, transcritical, and pitchfork forms only after their nondegeneracy and symmetry hypotheses are checked. Similar phase portraits do not establish the same physical mechanism.

## 5. Hopf amplitude and phase

For a simple conjugate pair crossing the imaginary axis transversely, with no other imaginary spectrum, centre reduction gives a planar system. A smooth normal-form calculation yields polar equations

$$r'=\alpha(\mu)r+l_1r^3+O(r^5+|\mu|r^3),\qquad\theta'=\omega_0+O(|\mu|+r^2).$$

Here $\alpha(0)=0$, $\alpha'(0)\neq0$, and the first Lyapunov coefficient $l_1$ must be nonzero for the generic Hopf conclusion. Solving the leading radial equation gives $r^2=-\alpha/l_1$ on the side where this is positive. If $l_1=0$, higher order decides; if another imaginary eigenvalue is present, a two-dimensional reduction is insufficient.

## 6. Parameter-dependent manifolds

Append $\mu'=0$ and treat parameters as centre variables. The resulting centre manifold can organise bifurcation calculations, but uniformity must be established over the parameter range. A transformation singular at $\mu=0$ cannot justify a bifurcation there. Coordinate changes also transform observables: amplitude in normal-form coordinates need not equal a measured physical displacement.

## 7. Numerical verification recipe

For a proposed reduced model:

1. compute eigenvalues with scaling and report distance from the imaginary axis;
2. evaluate the invariance residual on nested radii $\rho, \rho/2, \rho/4$;
3. verify that residual ratios approach $2^q$ for an order-q defect;
4. compare full and reduced trajectories only until exit from the local ball;
5. refine time tolerance and the polynomial order separately;
6. perturb transverse to the graph and check the predicted stable or unstable rate;
7. state that finite tests do not prove existence, uniqueness, or the normal-form coefficient.

Near a small spectral gap, graph coefficients can be large and the useful neighbourhood tiny. Floating-point eigenvalue classification is evidence relative to perturbation scale, not an exact spectral theorem.

## 8. A nonunique family that can be checked exactly

Nonuniqueness of the centre graph is a real mathematical phenomenon, rather than an uncertainty in numerical coefficient fitting. Consider the smooth decoupled system

$$x'=-x^3,\qquad y'=-y.$$

Its centre space is the horizontal axis and its stable space is vertical. The zero graph is plainly invariant. For any fixed real constant, define a graph away from zero by multiplying $\exp[-1/(2x^2)]$ by that constant, and define its value at zero to be zero. The resulting function is smooth, and every derivative at zero vanishes. To see smoothness, each derivative away from zero is the same exponential times a polynomial in the reciprocal of the coordinate. The exponential tends to zero faster than every such polynomial grows. Induction gives the derivatives and their continuous zero extensions.

For nonzero coordinate, differentiating the graph gives its value divided by the cube of the coordinate. Multiplying by the centre velocity therefore gives minus the graph value, exactly the stable velocity required by the invariance equation. Tangency and invariance hold, so every member of this family is a local centre manifold. Different constants give different graphs while all their Taylor coefficients at zero agree. One may even choose different constants on the two sides of zero and still obtain a smooth graph.

This example has three implications. First, solving the invariance equation as a power series need not select a unique exact manifold. Second, agreement of every finite Taylor jet need not imply equality of smooth functions. Third, a smooth centre graph need not be analytic, because a nonzero flat function has zero Taylor series. No contradiction with uniqueness of ODE solutions occurs: the graphs use different initial points away from the equilibrium, and their trajectories need not remain in the local chart for all negative time.

The complete system is easy to solve. The centre coordinate is its initial value divided by the square root of one plus twice its squared initial value times elapsed time; the stable coordinate decays exponentially. Both approach zero forward in time. Stability can be proved directly from these formulas. The example therefore supports the reduction theorem while displaying exactly why the graph representing the reduction is not a uniquely identified physical object.

## 9. Why transverse stability requires a spectral sign

Suppose the complementary variable is scalar, its linear coefficient is minus a positive constant, and a continuously differentiable invariant graph has been chosen. Define the transverse error as the actual complementary coordinate minus the graph evaluated at the actual centre coordinate. Differentiate this error along a full-system solution and subtract the graph's invariance equation. The result is

$$
e'=-\lambda e+
g(x,h(x)+e)-g(x,h(x))
-Dh(x)\bigl[f(x,h(x)+e)-f(x,h(x))\bigr].
$$

The fundamental theorem of calculus on the transverse segment writes the last two differences as a scalar coefficient times the error. Because the nonlinear derivatives vanish at the equilibrium and the graph is tangent to the centre space, that coefficient can be made uniformly smaller in magnitude than half the stable rate by restricting the neighbourhood. As long as the trajectory and the relevant segment remain there, the error equation has the form $e'=(-\lambda+a(t))e$ with $|a(t)|\le\lambda/2$. Its integrating factor gives exponential transverse decay at least at half the original rate.

The neighbourhood and the exit qualification are essential. The estimate does not prevent the centre coordinate from leaving the chart. In the earlier example with positive quadratic centre velocity, an arbitrarily small positive centre start eventually exits, even while the transverse error contracts. Fast convergence toward an invariant graph is compatible with instability along that graph.

For a vector complement, negative real parts do not imply that its Euclidean norm decreases at every instant. One uses an adapted Lyapunov metric or a semigroup estimate and controls the nonlinear Lipschitz perturbation in that metric. This is the same nonnormal distinction encountered in linear systems. If the complement instead has an unstable direction, the full equilibrium is unstable regardless of a stable centre reduction. Merely calling the complementary variables fast does not give their spectral sign or justify eliminating them.

## 10. Deriving the homological equation rather than guessing it

Let the vector field have enough derivatives for a Taylor expansion through degree $k$ with a controlled next-order remainder. Suppose lower-order changes have already been made and consider a degree-$k$ homogeneous coordinate correction. Differentiating $z=w+H_k(w)$ gives $(I+DH_k(w))w'$ on the left. At the retained order, multiplying the derivative of the correction by a nonlinear term produces only higher degree. The linear contribution on the right is $Aw+AH_k(w)$. Rearranging the degree-$k$ terms therefore gives the transformed nonlinearity as the old nonlinearity minus the homological operator applied to the correction.

The coordinate map is locally invertible because its derivative at zero is the identity. The inverse function theorem supplies a sufficiently small neighbourhood; a polynomial expression written on all of space does not guarantee a globally invertible transformation. The changed equation and the original one describe equivalent local trajectories only where that map and its inverse exist.

If the linear matrix is diagonal over the complex numbers, differentiate a monomial correction component by component. Acting with the linear velocity multiplies the monomial by the sum of its exponents times the corresponding eigenvalues, while subtracting the output linear action removes the target eigenvalue. Thus the scalar divisor is precisely the resonance expression stated above. When it is nonzero, divide by it to remove that monomial at this order. When it is zero, that coordinate correction cannot change the coefficient. For real vector fields, conjugate monomials and their corrections must be paired so that the final transformation is real.

Small nonzero divisors can make coordinate coefficients large. Formal removability then says little about the size of the useful chart. At finite order there are finitely many coefficients to estimate, but an infinite analytic normalisation may encounter a separate convergence problem. A finite smooth normal form should not be advertised as a convergent global series.

**Worked example: a nonresonant coupling disappears exactly.** Consider $x'=x$ and $y'=3y+x^2$. Set $v=y+x^2$. Differentiation gives $v'=3y+x^2+2x^2=3v$, while the first equation stays unchanged. The transformation is globally invertible here because its inverse is explicitly $y=v-x^2$. This special exact cancellation is stronger than the generic finite-order statement, and its proof is the displayed derivative identity.

**Worked example: the resonant coupling leaves a time factor.** Change the second linear rate to two. The same attempted quadratic correction has zero divisor and cannot remove the quadratic forcing. Solving along $x(t)=e^tx_0$ gives $y(t)=e^{2t}(y_0+x_0^2t)$. The extra time factor is a direct manifestation of resonance. A correction involving $x^2\log|x|$ can cancel the term away from zero, but it is not twice continuously differentiable at zero. Allowing such a singular change would change the coordinate class of the claim. The smoothness restriction is therefore mathematical content, not a stylistic preference.

## 11. Remainder order, comparison time and physical observations

Suppose a retained normal form differs from the transformed full vector field by a remainder bounded by a constant times radius to power $k+1$ in a ball of radius $\rho$. Suppose also the retained field is Lipschitz there with constant $L$. Start both equations from the same transformed point and stop at the first exit of either trajectory. Subtract their integral equations, apply the Lipschitz estimate and Gronwall, and obtain

$$
\|w(t)-\widetilde w(t)\|
\le C\rho^{k+1}\frac{e^{Lt}-1}{L}
$$

when the constant is positive; for zero Lipschitz constant the corresponding factor is elapsed time. This is a finite-time comparison under uniform remainder and domain bounds. The estimate need not stay small for long horizons, and does not prove that the two systems share all their invariant objects. A local bifurcation theorem adds structural arguments beyond finite-time trajectory closeness.

Approximate centre graphs require the same discipline. The residual approximation theorem is used at an order permitted by the vector field and graph differentiability, with a fixed neighbourhood and explicit big-O bound. Merely matching a symbolic list of coefficients does not bound the first discarded term uniformly over parameters. If a coefficient contains a reciprocal spectral gap, a shrinking gap may force the neighbourhood or error constant to change.

Observations must be transformed too. If a sensor measures the original second coordinate in the nonresonant example, its reading is the new coordinate minus the square of the first coordinate. Reporting only the new linear coordinate would omit a genuine quadratic contribution to the physical observation. A normal form simplifies evolution; it does not declare the original measurement map linear.

## 12. Parameters, degeneracy and the limits of radial pictures

Appending constant parameters as centre variables turns a family into one extended autonomous system. A finite-order coordinate change can then be chosen smoothly in a neighbourhood of the reference parameter, subject to the theorem's hypotheses. Dividing by the parameter to simplify an expression destroys that neighbourhood at the bifurcation value. Such a transformation may be valid on either punctured side while proving nothing about the transition itself.

For the exact radial equation $r'=\mu r-r^3$ with constant positive angular speed, the origin is stable for negative parameter and loses stability at zero; a positive stable radial equilibrium appears for positive parameter. The transverse derivative is minus twice the parameter, and the angular equation gives its period directly. This calculation is exact for the stated radial system. In a general Hopf normal form, higher-order terms, transformed coordinates and parameter-dependent frequency supply additional errors and coefficients that must be controlled.

If the cubic coefficient vanishes, consider instead the exact equation $r'=\mu r-r^5$. Its positive radial equilibrium, when present, scales as the fourth root rather than the square root of the parameter. Its transverse derivative is minus four times the parameter. This worked contrast shows why the nonzero cubic coefficient is required for the usual square-root claim. The same visually circular family of phase curves can obey a different scaling law at a degenerate point.

Normal-form calculations therefore end with a conditional statement: the allowed coordinate class, the retained order, the coefficient sign or degeneracy, the parameter neighbourhood and the domain of the conclusion. The graph, reduced equation, physical observable and numerical approximation are distinct objects. Keeping their relations explicit turns a formal reduction into useful local mathematics.

## Exercises with complete worked solutions

<a id="center-manifolds-normal-forms-ex-1"></a>

### 1. Identify the center space
For $A=\operatorname{diag}(0,-2,3)$, identify the centre, stable, and unstable dimensions.

<details><summary>Hint 1</summary>

Classify eigenvalues by the sign of their real parts, rather than by their magnitude.

</details>

<details><summary>Hint 2</summary>

The positive eigenvalue already decides instability of the full equilibrium.

</details>

<details><summary>Full solution</summary>

**Solution.** The zero eigenvalue supplies one centre direction, $-2$ one stable direction, and $3$ one unstable direction. Thus the dimensions are one, one, and one. The equilibrium is unstable regardless of its centre reduction because of the positive eigenvalue.

</details>

<a id="center-manifolds-normal-forms-ex-2"></a>

### 2. Tangency
Why must a graph centre manifold satisfy $Dh(0)=0$?

<details><summary>Hint 1</summary>

Write the tangent plane of a graph at its base point.

</details>

<details><summary>Hint 2</summary>

The designated centre space is the horizontal coordinate plane in these coordinates.

</details>

<details><summary>Full solution</summary>

**Solution.** Its tangent space at the equilibrium must equal the centre eigenspace, represented by the x-coordinate plane. The tangent graph is $y=Dh(0)x$; equality with $y=0$ forces $Dh(0)=0$.

</details>

<a id="center-manifolds-normal-forms-ex-3"></a>

### 3. Compute a graph coefficient
For $x'=x^2$, $y'=-2y+x^2$, take $h=a x^2+O(x^3)$.

<details><summary>Hint 1</summary>

Compare the lowest nonzero degree on each side of the invariance equation.

</details>

<details><summary>Hint 2</summary>

The derivative of a quadratic graph times a quadratic centre velocity begins at degree three.

</details>

<details><summary>Full solution</summary>

**Solution.** The left side $h'x^2$ begins at degree three. The right side is $(-2a+1)x^2+O(x^3)$. Therefore $a=1/2$.

</details>

<a id="center-manifolds-normal-forms-ex-4"></a>

### 4. Next coefficient
Continue Exercise 3 with $h=a x^2+b x^3+O(x^4)$.

<details><summary>Hint 1</summary>

Keep the cubic contribution of the graph derivative as well as the cubic graph term.

</details>

<details><summary>Hint 2</summary>

After the quadratic coefficient is fixed, equate the two cubic coefficients.

</details>

<details><summary>Full solution</summary>

**Solution.** The left side is $2a x^3+O(x^4)$. The right is $(-2a+1)x^2-2b x^3+O(x^4)$. With $a=1/2$, $2a=-2b$, so $b=-1/2$.

</details>

<a id="center-manifolds-normal-forms-ex-5"></a>

### 5. Reduced stability
For $x'=-x^3$, $y'=-y+x^2$, classify the origin.

<details><summary>Hint 1</summary>

The centre equation is independent of the complementary coordinate.

</details>

<details><summary>Hint 2</summary>

Use the negative cubic velocity for centre stability and the strictly negative transverse eigenvalue for the transfer theorem.

</details>

<details><summary>Full solution</summary>

**Solution.** The center reduction begins $x'=-x^3$, whose Lyapunov function $x^2/2$ decreases as $-x^4$; zero is asymptotically stable on the centre manifold. The complementary eigenvalue is strictly negative, so the full equilibrium is locally asymptotically stable. The conclusion is local, not necessarily exponential.

</details>

<a id="center-manifolds-normal-forms-ex-6"></a>

### 6. Semistability
Classify $x'=x^2$ on the centre line.

<details><summary>Hint 1</summary>

Solve the scalar equation for small initial conditions of both signs.

</details>

<details><summary>Hint 2</summary>

Positive starts leave every sufficiently small fixed neighbourhood; one-sided attraction is insufficient.

</details>

<details><summary>Full solution</summary>

**Solution.** The explicit solution is $x(t)=x_0/(1-x_0t)$. Negative initial states approach zero, while positive ones leave and blow up. Hence zero is not Lyapunov stable.

</details>

<a id="center-manifolds-normal-forms-ex-7"></a>

### 7. Residual order
If $R(x)=7x^4+O(x^5)$, what ratio should $|R(r)|/|R(r/2)|$ approach?

<details><summary>Hint 1</summary>

Evaluate how a fourth power changes when its argument is halved.

</details>

<details><summary>Hint 2</summary>

Divide the two leading terms before considering the higher-order remainder.

</details>

<details><summary>Full solution</summary>

**Solution.** The leading fourth-degree term scales by $2^4$; the ratio approaches 16, provided rounding and higher terms are negligible.

</details>

<a id="center-manifolds-normal-forms-ex-8"></a>

### 8. Locality repair
Repair: “The center manifold contains every bounded orbit.”

<details><summary>Hint 1</summary>

Distinguish a bounded orbit somewhere in the domain from a complete orbit confined to one local chart.

</details>

<details><summary>Hint 2</summary>

Both positive and negative time containment occur in the local theorem statement.

</details>

<details><summary>Full solution</summary>

**Solution.** A local theorem says every complete orbit that remains in a sufficiently small neighbourhood lies in the local centre manifold. An orbit bounded elsewhere need not enter that chart or lie on its extension.

</details>

<a id="center-manifolds-normal-forms-ex-9"></a>

### 9. Nonuniqueness
Does nonuniqueness of centre manifolds make their computed quadratic jet meaningless?

<details><summary>Hint 1</summary>

A smooth function can vanish to every finite order without vanishing identically.

</details>

<details><summary>Hint 2</summary>

Use the flat-graph example to separate exact uniqueness from agreement of the computed jet.

</details>

<details><summary>Full solution</summary>

**Solution.** No. Under the approximation theorem, manifolds share the jet determined to the available smoothness/order even though they may differ by terms flat or beyond that order. Claims must be limited to that jet.

</details>

<a id="center-manifolds-normal-forms-ex-10"></a>

### 10. Resonance test
With eigenvalues $(1,2)$, is monomial $w_1^2 e_2$ resonant?

<details><summary>Hint 1</summary>

Compute the weighted sum of the input eigenvalues for the monomial.

</details>

<details><summary>Hint 2</summary>

Two copies of the first eigenvalue must be compared with the second component eigenvalue.

</details>

<details><summary>Full solution</summary>

**Solution.** Its weighted eigenvalue is $2*1=2$, equal to the target eigenvalue for component two. It is resonant and cannot generally be removed by the degree-two homological equation.

</details>

<a id="center-manifolds-normal-forms-ex-11"></a>

### 11. A removable monomial
With the same spectrum, is $w_2^2 e_1$ resonant?

<details><summary>Hint 1</summary>

Use the same homological divisor with the component roles reversed.

</details>

<details><summary>Hint 2</summary>

The input weight is four and the output eigenvalue is one.

</details>

<details><summary>Full solution</summary>

**Solution.** Its weight is $2*2=4$, not $1$; the divisor is nonzero, so it is removable at that formal order by an allowed near-identity polynomial change.

</details>

<a id="center-manifolds-normal-forms-ex-12"></a>

### 12. Hopf side
For $r'=\mu r-r^3$, find the small cycle and its stability.

<details><summary>Hint 1</summary>

A positive constant radius solves the radial equilibrium equation.

</details>

<details><summary>Hint 2</summary>

Differentiate the radial right-hand side at that radius to decide transverse attraction.

</details>

<details><summary>Full solution</summary>

**Solution.** For $\mu>0$, $r=\sqrt{\mu}$ is a cycle. The radial derivative at it is $\mu-3\mu=-2\mu<0$, so it attracts transversely. For $\mu<0$ no positive small root exists.

</details>

<a id="center-manifolds-normal-forms-ex-13"></a>

### 13. Degenerate Hopf warning
What fails if $l_1=0$?

<details><summary>Hint 1</summary>

Identify which term supplied the generic nonzero radial balance.

</details>

<details><summary>Hint 2</summary>

A quintic term can change both the side of existence and the amplitude exponent.

</details>

<details><summary>Full solution</summary>

**Solution.** The cubic radial term does not decide existence or stability. Quintic or parameter-coupled terms may create no cycle, one cycle, or multiple cycles. The generic Hopf conclusion cannot be quoted.

</details>

<a id="center-manifolds-normal-forms-ex-14"></a>

### 14. Crossing condition
For eigenvalues $\lambda(\mu)=\mu^2 \pm i$, does a generic Hopf theorem apply at zero?

<details><summary>Hint 1</summary>

Differentiate the real part with respect to the parameter.

</details>

<details><summary>Hint 2</summary>

Touching the imaginary axis quadratically is different from crossing it transversely.

</details>

<details><summary>Full solution</summary>

**Solution.** No. The derivative of the real part at zero is zero, so transverse crossing fails. Higher-order parameter analysis is required.

</details>

<a id="center-manifolds-normal-forms-ex-15"></a>

### 15. Transverse decay
If the stable complement is $y'=-4y+O(|z|^2)$, what leading decay is expected?

<details><summary>Hint 1</summary>

First consider the linear complementary equation with the centre trajectory fixed locally.

</details>

<details><summary>Hint 2</summary>

The rate describes infinitesimal transverse decay; nonlinear locality and constants remain to be controlled.

</details>

<details><summary>Full solution</summary>

**Solution.** Infinitesimal transverse perturbations decay like $e^{-4t}$ while the solution remains local. Nonlinear terms alter constants and possibly rates slightly; this is not a global estimate.

</details>

<a id="center-manifolds-normal-forms-ex-16"></a>

### 16. Exit-time comparison
Why stop a full/reduced comparison when either path leaves radius rho?

<details><summary>Hint 1</summary>

Locate the domain on which graph and remainder bounds were established.

</details>

<details><summary>Hint 2</summary>

An exit ends the applicability of those local bounds even if the integrator continues.

</details>

<details><summary>Full solution</summary>

**Solution.** The center graph, remainder bounds, and coordinate changes were justified only in the local chart. Beyond it, discrepancy cannot be interpreted through the local truncation theorem.

</details>

<a id="center-manifolds-normal-forms-ex-17"></a>

### 17. Coordinate amplitude
Can normal-form radius be reported directly as sensor amplitude?

<details><summary>Hint 1</summary>

A coordinate transformation also changes every observed output function.

</details>

<details><summary>Hint 2</summary>

Substitute the inverse normal-form map into the sensor map before interpreting amplitude.

</details>

<details><summary>Full solution</summary>

**Solution.** Not without transforming the observation map back through the near-identity coordinate change. Even a small quadratic change modifies amplitude at the same order as some predicted corrections.

</details>

<a id="center-manifolds-normal-forms-ex-18"></a>

### 18. Spectral uncertainty
An eigenvalue is computed as $10^{-10}$ with matrix uncertainty $10^{-6}$. Classify it.

<details><summary>Hint 1</summary>

Compare the spectral sign margin with the declared matrix uncertainty.

</details>

<details><summary>Hint 2</summary>

The displayed real part is much smaller than the perturbation scale, so its sign is unresolved.

</details>

<details><summary>Full solution</summary>

**Solution.** It cannot responsibly be classified as positive or negative from that computation. Perturbations larger than the reported real part can cross the axis; use interval/structured bounds or treat it as near-center.

</details>

<a id="center-manifolds-normal-forms-ex-19"></a>

### 19. Project: verify a center graph
For $x'=x^2$, $y'=-y+x^2$, use $h_3=x^2-2x^3$. Compute its residual and design a numerical table.

<details><summary>Hint 1</summary>

Differentiate the proposed polynomial and substitute it into the invariance residual.

</details>

<details><summary>Hint 2</summary>

Its cubic terms cancel; keep the remaining fourth-degree term before designing the radius comparison.

</details>

<details><summary>Full solution</summary>

**Solution.** $h_3'=2x-6x^2$. Thus
$R=h_3'x^2-(-h_3+x^2)=(2x^3-6x^4)-(2x^3)= -6x^4$.
At radii $r, r/2, r/4$, tabulate the maximum absolute residual and expect ratios 16. Then initialize the full system at $(x_0,h_3(x_0))$, integrate together with reduced $x'=x^2$ at three tolerances, and tabulate $|y-h_3(x)|$ until $|x|=r$. This validates scaling evidence, not exact invariance.

</details>

<a id="center-manifolds-normal-forms-ex-20"></a>

### 20. Claim audit
A simulation shows two nearby trajectories following the reduced phase portrait. What is proved?

<details><summary>Hint 1</summary>

Separate the finite observation from the theorem whose hypotheses would justify a uniform conclusion.

</details>

<details><summary>Hint 2</summary>

Agreement for two starts supplies no control of every local initial state, infinite time or an exact coefficient sign.

</details>

<details><summary>Full solution</summary>

**Solution.** Only finite, method-dependent agreement for those starts and times is observed. It does not prove existence of a centre manifold, the sign of an exact normal-form coefficient, structural stability, or behaviour outside the tested neighbourhood. Those require theorem hypotheses and error bounds.

</details>

## Chapter synthesis

Center manifolds isolate locally recurrent slow directions; invariance equations compute their jets; normal forms remove nonresonant clutter; and bifurcation coefficients decide only under explicit nondegeneracy. Every result is local. Residual scaling, time refinement, and exit rules make computations informative without promoting them to proofs.

## Dependency ledger

- Smooth local flow and spectral separation support the invariant graph.
- Stable/unstable conclusions require the signs of complementary real parts.
- Polynomial jets require corresponding differentiability.
- Normal forms depend on truncation order, coordinate class, parameters, and resonance.
- Hopf conclusions require simplicity, crossing, isolation of the pair, and a nonzero coefficient.
- Numerical tests require a declared local radius, refinement, and residual.
