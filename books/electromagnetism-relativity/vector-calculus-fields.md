
# Vector Calculus for Fields

A source law compares what happens inside a region with what crosses its boundary. An electric charge can be detected by flux through a surrounding surface, while circulation around a loop records a different aspect of a field. These are geometric measurements with orientations, domains and units. Their differential expressions become useful only after those features are fixed.

This chapter reviews the tools developed in [vector fields and line integrals](../../apps/calculus/index.html#chapter/25) and [Green, Stokes and divergence theorems](../../apps/calculus/index.html#chapter/26). Our focus here is the additional care electromagnetic sources require: punctured domains, boundary data and singular charge distributions. We prove the local potential construction and the point-source divergence identity rather than treating them as interchangeable slogans about conservative fields.

We use right-handed spatial coordinates and the [SI conventions](notation-conventions.md). Unless a singular source is explicitly introduced, a field is continuously differentiable on an open region containing every point to which the calculation is applied. When a second derivative is exchanged with another derivative, the relevant potential is twice continuously differentiable. A formula that is smooth outside a charge is not automatically smooth through that charge.

## Local operators and what they measure

For a scalar function $f$ and vector field $V$, the Cartesian definitions are

$$
(\nabla f)_i=\partial_i f,\qquad
\nabla\cdot V=\sum_i\partial_iV_i,\qquad
(\nabla\times V)_i=\epsilon_{ijk}\partial_jV_k.
$$

The gradient pairs with a displacement to give the first-order change of a scalar. Divergence measures signed outward flux per unit volume. Curl measures oriented circulation per unit area, with the surface normal specifying which circulation is positive. These interpretations explain why the three operators have different output types; replacing a dot product by a cross product changes the geometric measurement.

Each spatial derivative contributes one inverse length unit. If a potential has volt units, its gradient has volts per metre. If a magnetic vector potential has tesla-metre units, its curl has teslas. Inserting an unexplained coordinate scale into an operator changes the physical formula, even when a dimensionless graph still looks plausible. Cartesian formulas also cannot be transferred unchanged to cylindrical components, whose unit vectors vary with position.

For a twice continuously differentiable scalar, the curl of its gradient vanishes. In components, each term contains an antisymmetric coefficient multiplying a symmetric pair of mixed partial derivatives. The terms therefore cancel in pairs. The same reasoning gives zero divergence of a curl. These are pointwise identities wherever the stated smoothness holds:

$$\nabla\times\nabla f=0,\qquad \nabla\cdot(\nabla\times A)=0.$$

The word “wherever” carries real content. It does not permit a delta source at an excluded point to be discarded. Nor does the first identity assert that every curl-free field is globally a gradient on every open set. The implication from a potential to zero curl is local; the reverse implication also depends on the domain.

Another identity used throughout the book is

$$\nabla\cdot(U\times V)=V\cdot(\nabla\times U)-U\cdot(\nabla\times V).$$

For continuously differentiable fields, expand the left side as $\partial_i(\epsilon_{ijk}U_jV_k)$. The product rule gives one term differentiating $U$ and another differentiating $V$. Cyclic permutation of the indices in the first term identifies the curl of $U$ dotted with $V$; swapping the two relevant indices in the second contributes the minus sign. This proves the identity without assuming either field is constant. Later it converts the two curl equations into an energy flux balance.

## Integral statements and localization

Let a bounded region have piecewise smooth boundary, and let the field be continuously differentiable on a neighborhood of its closure. The divergence theorem equates outward boundary flux to the volume integral of divergence. For an oriented smooth surface with piecewise smooth boundary, Stokes' theorem equates boundary circulation to surface flux of curl. We use these established integral theorems with their regularity and orientation hypotheses; their full constructions are in the linked Calculus chapters.

For a disk with upward normal, the positive boundary direction is counterclockwise when viewed from above. For a region with a hole, the outer boundary and the hole boundary run in opposite senses. The outward normal to a removed spherical cavity points toward that cavity's center, not away from it. These signs follow from the orientation of the region being integrated; they are not optional conventions chosen separately for each boundary component.

A continuous local balance can be recovered from all sufficiently small region balances. Suppose the integral of a continuous function over every small ball contained in an open region is zero. If the function were positive at one point, continuity would make it positive and bounded away from zero on a smaller ball, giving a positive integral. A negative value leads to the same contradiction with reversed signs. The function must therefore vanish at every point.

This localization argument is what turns an integral source law into a differential source law under smoothness. Without continuity, the correct conclusion may hold only almost everywhere or in a weak sense. The hypotheses select the mathematical interpretation. Maxwell equations stated for smooth vacuum fields and Maxwell equations stated for ideal point charges use related laws, but they do not use identical pointwise regularity claims.

For example, charge in a fixed region is the volume integral of charge density. Outward current flux removes charge from that region. If density and current are sufficiently regular, differentiating the fixed-domain integral and applying the divergence theorem gives

$$\partial_t\rho+\nabla\cdot J=0.$$

The derivative may pass under the integral when the density and time derivative have the needed continuity and integrable control. A moving integration boundary would require an additional transport term. We keep the boundary fixed in this derivation, so a later moving-material model cannot simply reuse it without accounting for that motion.

## A potential theorem with an explicit domain

An open region is star-shaped about a point if the entire segment from that point to any region point stays in the region. Translate the center to the origin. Suppose $E$ is continuously differentiable there and has zero curl. Define

$$\phi(x)=-\int_0^1 E(tx)\cdot x\,dt.$$

We claim that $E=-\nabla\phi$. The formula integrates the field along the radial segment, and the minus sign agrees with the electric-potential convention. For each fixed observation point, that segment lies in the open domain. A small neighborhood of the segment supplies compact control of the derivatives, so differentiation under this finite integral is justified locally.

Differentiate with respect to the coordinate indexed by $j$. The product rule gives

$$
\partial_j\phi(x)=-\int_0^1\left[E_j(tx)+t\sum_i x_i\partial_jE_i(tx)\right]dt.
$$

Zero curl is equivalent in these coordinates to $\partial_jE_i=\partial_iE_j$. Thus the bracket becomes the derivative with respect to the segment parameter of $tE_j(tx)$. Integrating that derivative gives $-E_j(x)$; the lower endpoint vanishes because the field is regular at the star center. This proves the claim in every coordinate.

The proof explains why the hypotheses matter. It uses the complete radial segment, so an excluded origin invalidates this particular construction. It exchanges derivatives using continuous differentiability. It also gives a global single-valued function, not merely a local angle coordinate with a branch cut. Other domain conditions can establish global potential theorems, but zero curl alone does not name any of them.

If two scalar potentials give the same field on a connected open region, their difference has zero gradient and is constant. To see this, along any sufficiently short line segment inside the region the chain rule gives zero change. A polygonal path inside a connected open subset of Euclidean space then connects any two points through such segments. Different connected components can have different constants; connectedness cannot be removed from that conclusion.

## Worked example: flux of a linear field

Let $V=(\alpha x,\beta y,\gamma z)$ and consider the rectangular box with coordinate bounds $|x|\le a$, $|y|\le b$, $|z|\le d$, where the three half-lengths are positive. The constants carry whatever units make all components consistent. We calculate the complete outward flux in two ways.

On the positive horizontal-coordinate face, the normal component is $\alpha a$. Its area is $4bd$. On the opposite face the field component is $-\alpha a$, but the outward normal also changes sign, so the normal component is again $\alpha a$. The pair contributes $8\alpha abd$. The other two face pairs contribute the analogous expressions with their own coefficients. Total flux is therefore $8abd(\alpha+\beta+\gamma)$.

The divergence is the constant $\alpha+\beta+\gamma$, and the box volume is $8abd$. Its volume integral gives exactly the same result. This agreement also covers negative coefficients: a sufficiently compressive component contributes inward rather than outward flux. The calculation did not take absolute values of signed normal components, which would have measured a different quantity.

A field value being large on a face is not enough to determine the flux; it is the normal component multiplied by oriented area that enters. This distinction will matter when magnetic fields run tangent to a closed surface: a nonzero field can have zero net outward flux without vanishing anywhere.

## Worked example: circulation in a punctured plane

On the plane with the origin removed, consider

$$V=\frac{\kappa}{2\pi}\frac{(-y,x)}{x^2+y^2}.$$

A direct differentiation shows zero scalar curl at every domain point. On a positively oriented circle of radius $R$, however, the field is tangent with magnitude and sign $\kappa/(2\pi R)$. Its circulation is $\kappa$. If a global single-valued potential existed, the fundamental theorem for line integrals would make this closed-loop circulation zero. Thus no such potential exists when the parameter is nonzero.

There is no contradiction with Stokes' theorem. The disk spanning that circle contains the excluded origin, where the field is undefined. Stokes cannot be applied to that disk with a smooth-field hypothesis. Apply it instead to the annulus between radii $\varepsilon$ and $R$. The outer circle contributes $\kappa$ and the clockwise inner circle contributes $-\kappa$, so their sum is zero, agreeing with the zero curl on the annulus.

One can write a local angular potential on a region that excludes a ray, but going once around the missing point changes the angle by a full turn. Calling that multivalued expression an ordinary global scalar potential would erase the obstruction rather than solve it. In electromagnetic induction, related circulation measurements can surround an excluded flux-carrying region; the full time-dependent law and the entire physical domain determine the interpretation.

## Singular sources and a distributional divergence

The field $G=x/|x|^3$ is locally integrable in three dimensions, even at the origin: its magnitude behaves like inverse radius squared and the spherical volume element contributes radius squared. Its ordinary divergence is zero away from the origin. Yet its outward flux through every centered sphere is $4\pi$. The correct global statement is

$$\nabla\cdot G=4\pi\delta_0.$$

Here a distribution is understood through its action on smooth compactly supported test functions. The delta at the origin acts by returning the test function's value there. The weak divergence of a locally integrable field acts as minus the integral of the field dotted with the test function's gradient. These definitions encode integration by parts without requiring a pointwise field value at the singularity.

To prove the identity, remove a ball of radius $\varepsilon$ from a large region containing the test function's support. Outside that small ball the ordinary divergence vanishes. Apply the divergence theorem to the product of the test function and the field. The outer boundary contributes zero because the test function vanishes there. The inner boundary has normal pointing toward the removed ball's center, so its normal field component is negative inverse radius squared.

Consequently minus the volume integral of $G\cdot\nabla\psi$ over the punctured region equals the integral of $\psi(\varepsilon n)$ over the unit sphere. As the small radius tends to zero, continuity makes this converge to $4\pi\psi(0)$. The omitted volume integral tends to zero because the field is locally integrable and the test gradient is bounded. This proves the distributional divergence identity with the correct sign.

Multiplying by the Coulomb coefficient therefore produces a point charge in the global source equation. It does not assign a finite field value or a finite self-energy at that point. Weak equations preserve the missing source information; they do not automatically regularize every nonlinear expression built from a singular field.

## Worked example: replace a point by a charged ball

Let a ball of radius $a>0$ carry total charge $q$ uniformly throughout its volume. The charge density inside is $3q/(4\pi a^3)$ and is zero outside. The spherically symmetric electric field suggested by the enclosed-charge law is

$$
E(r)=\begin{cases}
q\,x/(4\pi\varepsilon_0a^3),&r<a,\\
q\,x/(4\pi\varepsilon_0r^3),&r>a.
\end{cases}
$$

Inside, divergence is the constant density divided by the vacuum permittivity. Outside, it is zero. At the surface the two radial field values agree, so there is no jump in the normal field and no additional delta sheet of charge. The volume density has a step, but the field itself remains continuous. These are different kinds of discontinuity.

The flux through a smaller centered sphere measures only the charge within that smaller sphere, which grows as the cube of its radius. Beyond the charged ball, the full charge is enclosed and the flux stays constant. At the center the interior field is zero and smooth. This is a different model from a point charge, even though the exterior formulas agree.

As the ball radius decreases at fixed total charge, the density becomes increasingly concentrated and the exterior field remains unchanged at every fixed nonzero point once that point is outside the ball. The associated source distributions approach a delta charge: averaging a continuous test function over the small charged ball approaches its value at the center. This specifies the sense in which the extended source approaches the point-source model without asserting uniform field convergence through the origin.

## Boundary data and the next step

Divergence and curl provide interior information, but they need not determine a field without boundary or asymptotic data. A constant vector field has zero divergence and zero curl and can be added to another field without changing either local quantity. The potential then changes by a linear function, not just a constant. Conditions at a boundary or at infinity distinguish those physically different fields.

Electrostatics will turn this observation into a uniqueness theorem for a specified boundary-value problem. The proof will use an energy integral, with regularity sufficient for integration by parts. For unbounded domains, decay conditions replace some boundary terms. For multiply connected domains, circulation information may also be required. We keep these choices visible rather than treating a local differential equation as a complete specification of an experiment.

## Exercises

### Exercise 1: a potential and its units {#em-vector-potential-units}

Let $\phi=\alpha(x^2+y^2)/2+\beta z$, with $\alpha$ in volts per square metre and $\beta$ in volts per metre. Find the electric field, its divergence and its curl, and state their units.

**Hint 1.** Apply the electric convention before computing the other operators.

**Hint 2.** Only the first two field components vary with their corresponding coordinate.

**Solution.** Differentiation and the potential minus sign give $E=(-\alpha x,-\alpha y,-\beta)$. Each component has volts per metre. Divergence is $-2\alpha$, in volts per square metre, and curl is zero because the components have no cross-coordinate derivatives. The sign of the density that would produce this divergence is therefore opposite the sign of the parameter when the vacuum source law is used. The constant vertical field contributes no divergence but is physically present. This illustrates why a divergence measurement alone cannot reconstruct the entire field.

### Exercise 2: a magnetic vector potential {#em-vector-uniform-magnetic-potential}

For constant $B_0$, take $A=(B_0/2)(-y,x,0)$ on all of space. Find its curl and divergence and explain why its units are tesla-metres if the resulting magnetic field is measured in teslas.

**Hint 1.** The only potentially nonzero curl component differentiates the first two entries.

**Hint 2.** Both of those derivatives contribute with the same sign to the third curl component.

**Solution.** The third curl component is $\partial_xA_y-\partial_yA_x=B_0/2-(-B_0/2)=B_0$; the other components vanish. Thus the magnetic field is uniform and vertical. Each same-coordinate derivative in the divergence is zero, so this potential also has zero divergence. Its components multiply a magnetic induction scale by a position coordinate, giving tesla-metre units. Taking a curl removes the length factor. Smoothness is global here, so the identity that a curl has zero divergence applies throughout space, including the origin.

### Exercise 3: locate a forbidden theorem application {#em-vector-punctured-flux}

The Coulomb field of charge $q$ is defined away from the origin. Its classical divergence is zero there. Explain precisely why applying the divergence theorem to a solid ball to infer zero flux is invalid, and repair the calculation with a punctured ball.

**Hint 1.** The theorem needs a regular field on a neighborhood of the complete integration region.

**Hint 2.** A punctured region has an inner boundary with the opposite radial normal.

**Solution.** The solid ball contains a point at which the field is undefined and unbounded, so the smooth-field divergence theorem does not apply to that region. Remove a smaller centered ball. On the remaining annulus the field is smooth and has zero divergence. Its outer flux is $q/\varepsilon_0$, while its inner-boundary flux is $-q/\varepsilon_0$ because the normal points inward radially. Their sum is zero, exactly as the theorem requires. Passing to a distribution on the full ball restores the point charge, rather than discarding the inner boundary while retaining a zero source integral.

### Exercise 4: uniqueness of a potential {#em-vector-connected-potential-constant}

Prove that two continuously differentiable scalar potentials giving the same electric field differ by a constant on each connected component of their open domain. Explain why one constant for a disconnected domain is not forced.

**Hint 1.** Subtract the potentials and use its zero gradient along short segments.

**Hint 2.** Open connected subsets of Euclidean space are polygonally connected.

**Solution.** Let the potential difference be $h$. Equal electric fields give zero gradient of $h$. Along any line segment lying in the domain, the chain rule makes the derivative of its restriction zero, so the restriction is constant. Polygonal connectedness links any two points of one connected component by finitely many such segments; the same constant propagates along that path. Different components have no connecting path within the domain. For example, define the potential difference to be zero on one open ball and one on a disjoint open ball. Its gradient vanishes everywhere on this disconnected union, yet there is no common constant value.

### Exercise 5: a general circulation contour {#em-vector-vortex-general-contour}

For the punctured-plane field in the worked example, let a simple piecewise smooth closed curve enclose the origin and have positive orientation. Prove its circulation is $\kappa$, without assuming the curve is a circle.

**Hint 1.** Choose a sufficiently small centered circle entirely inside the curve.

**Hint 2.** Apply the planar curl theorem to the region between the two boundaries.

**Solution.** Because the origin is interior to the curve, a sufficiently small closed disk about it lies inside the bounded enclosed region. Remove that disk. The resulting region has no singularity, and the field has zero curl on a neighborhood of its closure. Green's circulation theorem says the sum of the outer circulation and the clockwise inner circulation is zero. The inner circulation is the negative of the circular value calculated earlier, namely $-\kappa$. Hence the outer circulation is $\kappa$. The simplicity and orientation conditions avoid an unspecified winding multiplicity; a general self-intersecting contour would require that additional accounting.

### Exercise 6: radial divergence {#em-vector-radial-divergence}

For $r>0$, let $V=f(r)\hat r$, where $f$ is continuously differentiable on an interval of positive radii. Derive its divergence and identify every such field with zero divergence on that annular region.

**Hint 1.** Write the Cartesian components as $f(r)x_i/r$.

**Hint 2.** Differentiate using $\partial_ir=x_i/r$ and sum the three components.

**Solution.** Put $g(r)=f(r)/r$, so the field components are $g(r)x_i$. Their summed derivatives are $rg'(r)+3g(r)$, which simplify to $f'(r)+2f(r)/r=r^{-2}(r^2f(r))'$. Zero divergence is therefore equivalent to constant $r^2f(r)$ on the given connected radial interval. The field must have the inverse-square form $f(r)=C/r^2$ there. This classifies the source-free radial fields only away from the origin; a nonzero coefficient still has nonzero spherical flux and cannot be extended as a regular source-free field through the center.

### Exercise 7: an open charge reservoir {#em-vector-decaying-ball-charge}

Inside a fixed ball of radius $R$, suppose $\rho(t)=\rho_0e^{-\lambda t}$ is spatially uniform, with $\lambda>0$, and $J=(\lambda\rho(t)/3)x$. Verify continuity inside and calculate the outward current in terms of the charge in the ball. Interpret the boundary as open to an exterior reservoir.

**Hint 1.** Time differentiation of the density gives $-\lambda\rho$.

**Hint 2.** The divergence of the position vector is three, and the boundary flux is constant over each spherical shell.

**Solution.** The density derivative is $-\lambda\rho$, while divergence of the current is $\lambda\rho$, so their sum vanishes. The enclosed charge is the density times the ball volume. On the boundary, the outward current density is $\lambda\rho R/3$. Multiplying by the sphere area gives $\lambda\rho(4\pi R^3/3)$, exactly the rate $\lambda Q$ lost by the reservoir. The model does not describe charge annihilation: it prescribes transport across an open boundary. A global model would also need an exterior current and charge distribution consistent with that transported charge.

### Exercise 8: construct a global polynomial potential {#em-vector-polynomial-primitive}

On all of space, let $E=(2xy,x^2,0)$. Prove it is curl-free and find a scalar potential in the convention of this book. Explain why this example has no topological obstruction.

**Hint 1.** Compare the two relevant mixed component derivatives.

**Hint 2.** Integrate the negative first component with respect to the first coordinate, then fit the other components.

**Solution.** The third curl component is $2x-2x=0$, and the other two vanish because there is no dependence on the third coordinate. Integrating the negative first component gives a candidate $\phi=-x^2y+h(y,z)$. Matching the second component forces the first derivative of the extra function with respect to its first argument to vanish, and matching the third forces its remaining derivative to vanish. Thus the extra function is a constant. The polynomial potential is globally defined on all of space, which is star-shaped, so the constructive potential theorem applies without an excluded point, a branch cut or a missing circulation condition.

### Exercise 9: a sheet source from a field jump {#em-vector-sheet-divergence}

Let $E$ be the constant vector $E_-$ below the plane $z=0$ and the constant vector $E_+$ above it. Derive its distributional divergence and the surface charge density required by the vacuum Gauss law. Values assigned on the plane itself do not affect the distribution.

**Hint 1.** Write the field using the step function of the vertical coordinate.

**Hint 2.** The distributional derivative of that step is a delta supported on the plane.

**Solution.** Write $E=E_-+H(z)(E_+-E_-)$. Only the vertical derivative of the vertical component contributes to divergence, giving $(E_{+z}-E_{-z})\delta(z)$. One can derive the same result directly by integrating against a compactly supported test function and integrating in the vertical coordinate on the two half-spaces; the boundary terms combine to the stated jump. The vacuum source law therefore requires surface charge density $\sigma=\varepsilon_0(E_{+z}-E_{-z})$, with upward interface normal. Tangential jumps do not contribute to this divergence, although other Maxwell equations can constrain them. The statement identifies one source law without claiming that every pair of constant half-space fields is a complete static solution.

### Exercise 10: boundary data restore uniqueness {#em-vector-div-curl-boundary-uniqueness}

Two sufficiently smooth fields on the closure of a ball have equal divergence, equal curl and equal outward normal component on the sphere. Prove they agree everywhere. Also show why the normal-component condition cannot simply be omitted.

**Hint 1.** The difference is curl-free on a star-shaped domain, so write it as a gradient using the theorem proved above.

**Hint 2.** Integrate the divergence of the potential times its gradient and use both the harmonic equation and the normal boundary condition.

**Solution.** Let the difference be the gradient of a scalar $u$, choosing its sign for convenience. Equal divergences imply zero Laplacian of $u$, and equal normal components imply zero normal derivative on the boundary. Assume the smoothness needed for the potential and Green identity up to that boundary. Integrating $\nabla\cdot(u\nabla u)=|\nabla u|^2+u\nabla^2u$ gives the volume integral of the squared gradient equal to a boundary integral of $u$ times its normal derivative. Both that boundary term and the Laplacian term vanish. The nonnegative continuous squared gradient therefore vanishes everywhere, proving the original fields equal. Without the boundary condition, distinct constant vector fields already have equal zero divergence and curl. This counterexample explains exactly which missing data the uniqueness proof used.
