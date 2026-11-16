
# Cauchy Stress and Momentum Balance

## Learning purpose

This chapter introduces the Cauchy stress tensor, derives the local momentum balance from the integral statement, and examines the symmetry of stress for classical continua. You will learn to compute traction vectors, transform stress components, and recognise the physical meaning of each term in the equation of motion.

## Cauchy's theorem

Consider a body and an internal surface with unit normal $n$. Assume the contact force per unit area is a continuous local function $t(n)$ of position, time, and oriented unit normal, with $t(-n)=-t(n)$; assume body force and acceleration remain bounded as a tetrahedron shrinks. Cauchy's theorem states there exists a second-order tensor field $\sigma(x, t)$, the Cauchy stress tensor, such that

$$t(n) = \sigma n, \qquad t_{i} = \sigma_{ij} n_{j}.$$

The linear dependence on $n$ is the conclusion, not an assumption. Apply momentum balance to a tetrahedron with three coordinate faces and one oblique face. Surface forces scale like length squared while inertia and body force scale like length cubed, so the latter vanish after division by area in the shrinking limit. The oriented area-vector identity then gives $t(n)=\sum_i n_i t(e_i)$. Defining the $i$th column of $\sigma$ to be $t(e_i)$ yields $t(n)=\sigma n$.

## Linear momentum balance

The integral statement of linear momentum balance for a material region $\Omega(t)$ is

$$\frac{\mathrm{d}}{\mathrm{d}t} \int_{\Omega(t)} \rho v \, \mathrm{d}v = \int_{\partial \Omega(t)} \sigma n \, \mathrm{d}a + \int_{\Omega(t)} \rho b \, \mathrm{d}v,$$

where $b$ is the body force per unit mass (units of acceleration).

Applying the transport theorem to the left side and the divergence theorem to the surface integral gives

$$\int_{\Omega(t)} \left( \rho \frac{Dv}{Dt} - \nabla \cdot \sigma - \rho b \right) \mathrm{d}v = 0.$$

Since $\Omega(t)$ is arbitrary, the local form is

$$\rho \frac{Dv}{Dt} = \nabla \cdot \sigma + \rho b.$$

In components,

$$\rho \left( \partial_{t} v_{i} + v_{j} \frac{\partial v_{i}}{\partial x_{j}} \right) = \frac{\partial \sigma_{ij}}{\partial x_{j}} + \rho b_{i}.$$

**Units and conventions.** Stress $\sigma$ has units of pascals ($\mathrm{N}/\mathrm{m}^{2}$ or $\mathrm{kg}/(\mathrm{m} \cdot \mathrm{s}^{2})$). Body force $b$ is per unit mass. If body force were specified per unit volume, the factor $\rho$ would be omitted. In this book, Cauchy stress takes tension as positive, which is standard in solid mechanics but opposite to the convention in some fluid mechanics texts where pressure is positive in compression.

## Angular momentum and symmetry of stress

Balance of angular momentum for a classical Cauchy continuum (no couple traction or body couple) implies

$$\sigma = \sigma^{T}, \qquad \sigma_{ij} = \sigma_{ji}.$$

To see the local conclusion, subtract position crossed with the linear-momentum balance from the angular-momentum balance. With no body couple or couple traction, the remaining volume integrand is $\epsilon_{ijk}\sigma_{kj}$. Localizing gives $\epsilon_{ijk}\sigma_{kj}=0$, which is equivalent to vanishing skew part and hence $\sigma=\sigma^T$.

**Generalised continua.** Micropolar, Cosserat, and couple-stress continua enlarge the kinematics to include micro-rotation and can admit nonsymmetric force stress. The symmetry of $\sigma$ is a conclusion within the classical model class, not a universal truth for all generalised stress theories.

## Principal stresses and stress transformation

For symmetric $\sigma$, the spectral theorem guarantees real eigenvalues $\sigma_{1} \ge \sigma_{2} \ge \sigma_{3}$ (principal stresses) and an orthonormal eigenbasis (principal directions). Under an orthogonal transformation $x' = Q^{T} x$, stress transforms as

$$\sigma' = Q^{T} \sigma Q.$$

In two dimensions, the transformation formulas are

$$\sigma'_{11} = \frac{\sigma_{11} + \sigma_{22}}{2} + \frac{\sigma_{11} - \sigma_{22}}{2} \cos 2\theta + \sigma_{12} \sin 2\theta,$$
$$\sigma'_{22} = \frac{\sigma_{11} + \sigma_{22}}{2} - \frac{\sigma_{11} - \sigma_{22}}{2} \cos 2\theta - \sigma_{12} \sin 2\theta,$$
$$\sigma'_{12} = -\frac{\sigma_{11} - \sigma_{22}}{2} \sin 2\theta + \sigma_{12} \cos 2\theta.$$

These are the equations of Mohr's circle in the $(\sigma_{n}, \tau)$ plane.

**Example 5.1: plane stress.** Let

$$\sigma = \begin{pmatrix} 90 & 25 \\ 25 & 30 \end{pmatrix} \, \mathrm{MPa}.$$

The mean stress is $\sigma_{m} = (90 + 30)/2 = 60 \, \mathrm{MPa}$. The circle radius is $R = \sqrt{30^{2} + 25^{2}} = \sqrt{1525} \approx 39.05 \, \mathrm{MPa}$. The principal stresses are

$$\sigma_{1,2} = 60 \pm \sqrt{1525} \approx 99.05, \; 20.95 \, \mathrm{MPa}.$$

The major principal direction satisfies

$$\tan 2\theta_{p} = \frac{2 \cdot 25}{90 - 30} = \frac{50}{60} = \frac{5}{6},$$

so $\theta_{p} = \frac{1}{2} \arctan(5/6) \approx 19.9^{\circ}$. The trace $90 + 30 = 120$ and determinant $90 \cdot 30 - 25^{2} = 2075$ agree with $\sigma_{1} + \sigma_{2} = 120$ and $\sigma_{1} \sigma_{2} = 2075$.

## The shrinking-body argument needs a local contact model

Cauchy's theorem concerns a classical continuum whose contact force on an oriented surface element is determined by its position, time and unit normal. Assume that traction depends continuously on position and normal near the point, and that density, acceleration and body force are bounded there. There are no concentrated edge forces or surface couples in this model. These hypotheses make surface force scale like area and inertia/body force like volume as a test body shrinks.

The action-reaction property can itself be recovered by a thin pillbox. Take opposite faces normal to n with linear size h and separation of order h squared. Their areas are of order h squared, the side areas of order h cubed and the volume of still higher order. Divide momentum balance by a main-face area and shrink h. Continuity identifies the two limiting tractions at the same point, while side and volume terms disappear, proving $t(n)+t(-n)=0$.

For a unit normal with positive components, choose a tetrahedron with that oblique face and three negative coordinate faces. The vector-area identity gives coordinate-face area equal to the corresponding normal component times oblique area. Divide its momentum balance by oblique area. The volume contribution vanishes as the tetrahedron shrinks, and continuity replaces the face averages by their point values. Using the pillbox sign relation gives $t(n)=\sum_i n_i t(e_i)$.

For an arbitrary normal choose coordinate faces with the signs matching its octant. Their positive areas are the absolute normal components times oblique area, and their oriented tractions recover the signed coefficients through action-reaction. Normals with a zero component follow by continuity. Defining the coordinate-traction columns therefore produces one linear map for every oriented normal, which is the claimed stress tensor.

The proof derives linearity rather than assuming it. Its conclusion also specifies which constitutive information is still missing: balance represents contact forces by a tensor but does not determine that tensor from strain, strain rate, temperature or history. Elasticity and viscosity are later material laws. A continuum with independent couples or edge forces changes the surface model and can require higher-order stresses.

## Local momentum follows after mass cancellation

Apply mass-weighted transport to the vector v in a material region. Its rate is the integral of density times material acceleration because continuity cancels the density derivative terms. Transform the traction integral by the tensor divergence theorem, using exactly the row-divergence convention fixed in the tensor primer. Localizing on every material subregion gives the smooth local equation already stated.

The same equation has conservative form

$$\partial_t(\rho v)+\operatorname{div}(\rho v\otimes v)
=\operatorname{div}\sigma+\rho b,$$

where the tensor with components $\rho v_iv_j$ carries momentum by material motion. Product expansion shows equivalence to the acceleration form when continuity holds and fields are smooth. Across a shock, the conservative distributional equation remains the primary balance; multiplying discontinuous quantities through a nonconservative derivative can be undefined or miss a jump term.

At an interface moving with normal speed s and without singular surface momentum, the jump balance is $[\rho v(v\cdot n-s)-\sigma n]=0$. It combines advected momentum relative to the moving interface with traction. A material interface with zero relative mass flux has continuous traction in that model. A shock with nonzero mass transfer does not generally have equal traction alone; its momentum flux must also be included.

## Angular momentum fixes the skew part in the classical model

Take the angular-momentum balance about a fixed origin, with contact moment only position crossed with traction and body moment only position crossed with body force. Mass-weighted transport gives the local acceleration moment; the cross product of velocity with itself contributes zero. Subtract position crossed with the linear-momentum equation.

In components, applying the divergence theorem to $\varepsilon_{ijk}x_j\sigma_{k\ell}$ leaves the extra derivative term $\varepsilon_{i\ell k}\sigma_{k\ell}$. Its integral must vanish on every subregion. Localization therefore forces that axial contraction to be zero. For the first component this is equality of the two off-diagonal entries with indices two and three; cyclic permutations give the other pairs. Hence the skew part is zero and the stress is symmetric.

This is a consequence of angular momentum with the specified contact and body moments. If a body couple or couple traction is added, it supplies terms that can balance a nonzero skew stress. If a spatially concentrated force makes the boundedness hypotheses fail at a point, the local shrinking-body proof also needs qualification there. Neither extension contradicts the ordinary theorem inside its stated domain.

### Example 5.2: a nonsymmetric force stress needs another moment

In a plane set the only nonzero entry of stress to $\sigma_{12}=\tau$. The traction representation is still a perfectly valid linear map of normals and the divergence can vanish when tau is constant. Linear momentum alone therefore does not rule it out as a homogeneous stress field.

Its opposite off-diagonal entry is zero, so the angular contraction is nonzero. The classical no-couple angular-momentum balance fails. A symmetric shear with both entries equal to tau has no such residual. This example shows why solving only the force equation cannot replace the separate moment balance, even for a constant tensor and a body at rest.

## Normal and shear traction have invariant meanings

For a unit normal n, the scalar normal stress is $n\cdot\sigma n$. The normal vector part of traction is that scalar times n, and its tangential part is the remaining vector. Their orthogonality gives squared shear magnitude as $|\sigma n|^2-(n\cdot\sigma n)^2$. These expressions are invariant under a simultaneous rotation of the tensor and the normal, although their component entries change.

For symmetric stress, expand n in principal axes. The normal stress is a weighted average of principal stresses with weights equal to squared directional components. It therefore lies between the smallest and largest principal values. The squared shear magnitude is the variance of those same principal values under those weights.

Let the extreme values be m and M. The inequality $(\lambda-m)(M-\lambda)\ge0$ for every principal value bounds that variance by $(M-\overline\lambda)(\overline\lambda-m)$, which is at most $(M-m)^2/4$. Equal squared components along the extreme principal directions attain the upper bound. Thus the maximum shear traction magnitude is half the largest principal-stress difference. This is a geometric theorem; choosing it as a material yield criterion is a further constitutive assumption.

### Example 5.3: hydrostatic pressure can have no shear traction

For stress $-pI$, traction is $-pn$ on every plane. Its normal scalar is minus p and its tangential component zero, independently of plane orientation. All principal values coincide, so the maximum-shear formula also gives zero. Positive p represents compression under the tension-positive convention.

If p varies spatially, its stress divergence is minus its gradient. A fluid at rest under constant gravity therefore needs a pressure gradient, as the earlier exercise derives. A spatially uniform pressure changes boundary traction without producing an interior force-density gradient. Boundary loading and local divergence are related through balance but are not identical quantities.

## Reference stress is a different two-point tensor

Transform a traction surface integral with the smooth motion and Nanson's area relation. The reference force per reference area is $PN$, with first Piola stress

$$P=J(\sigma\circ\chi)F^{-T}.$$

The spatial and material indices belong to different spaces. The Piola divergence transformation applied row by row gives $\operatorname{Div}P=J(\operatorname{div}\sigma)\circ\chi$. Reference mass conservation converts momentum to the material equation $\rho_0\ddot\chi=\operatorname{Div}P+\rho_0 b\circ\chi$. This is the same physical balance in reference coordinates.

Cauchy stress symmetry does not generally make P symmetric. Instead $PF^T=J\sigma$ is symmetric. Writing $P=P^T$ would equate a map between two tangent spaces to an inappropriate same-space transpose condition and can impose a false material restriction. The distinction is one reason the tensor primer labels spatial and material indices separately.

### Example 5.4: a symmetric Cauchy stress gives nonsymmetric Piola stress

Take $F=\operatorname{diag}(2,1,1)$ and a Cauchy stress with planar off-diagonal entries both tau and otherwise zero. Its Jacobian is two. Multiplying by the inverse transpose gives planar Piola entries $P_{12}=2\tau$ and $P_{21}=\tau$. They differ, although the spatial stress is symmetric and satisfies the ordinary angular constraint.

Multiplying P by $F^T$ recovers planar off-diagonal entries both $2\tau$, as required. The reference force areas have been rescaled differently in the two coordinate directions; that geometry is what makes the raw reference array nonsymmetric. No couple stress has been introduced by changing descriptions.

## Weak forces retain the boundary convention

Multiply smooth momentum balance by a compactly supported vector test and integrate. The divergence term becomes minus the integral of stress double-contracted with its gradient. This pairing continues to make sense for square-integrable stress and a one-derivative test even when a classical pointwise stress divergence does not. Boundary traction requires an appropriate weak normal trace or a separately prescribed weak boundary functional.

An equilibrium stress is also not unique merely because its divergence and one collection of tractions are known: constitutive closure and displacement compatibility supply further information. Conversely, a displacement-based elasticity theorem depends on a positive material energy and boundary anchoring, rather than on Cauchy's representation alone. Those analytic distinctions connect this physical balance chapter to the weak-PDE and elasticity routes without merging their hypotheses.

## Summary and connections

This chapter derived the local momentum balance $\rho Dv/Dt = \nabla \cdot \sigma + \rho b$ from the integral statement, established the symmetry of Cauchy stress for classical continua, and examined principal stresses and transformation rules.

In the previous chapter, *Conservation of Mass*, we derived the continuity equation. In the next chapter, *Energy and Thermodynamic Restrictions*, we apply the transport theorem once more to derive the energy balance and introduce the entropy inequality.

## Exercises

### Exercise 1
For the stress tensor $\sigma = \begin{pmatrix} 50 & 30 & 0 \\ 30 & 20 & 0 \\ 0 & 0 & 10 \end{pmatrix} \, \mathrm{MPa}$, find the traction on a plane with normal $n = (1, 1, 1)/\sqrt{3}$. Decompose the traction into normal and shear components.

<details><summary>Hint 1</summary>

Multiply the stress matrix by the declared unit normal.

</details>

<details><summary>Hint 2</summary>

Project the resulting traction onto the normal and subtract to get its tangential part.

</details>

<details><summary>Full solution</summary>

**Solution.** The traction is $t = \sigma n = (80, 50, 10)/\sqrt{3} \, \mathrm{MPa}$. The normal component is $t_{n} = (t \cdot n) n = (140/3)(1, 1, 1)/\sqrt{3} \, \mathrm{MPa}$. The shear component is $t_{s} = t - t_{n} = (100, 10, -110)/(3\sqrt{3}) \, \mathrm{MPa}$. The shear magnitude is $|t_{s}| = \sqrt{100^{2} + 10^{2} + 110^{2}}/(3\sqrt{3}) = \sqrt{22200}/(3\sqrt{3}) = 10\sqrt{74}/3 \approx 28.67 \, \mathrm{MPa}$.

</details>

### Exercise 2
Show that for isotropic pressure $\sigma = -p I$, the momentum balance reduces to $\rho Dv/Dt = -\nabla p + \rho b$.

<details><summary>Hint 1</summary>

Write isotropic stress with the Kronecker identity.

</details>

<details><summary>Hint 2</summary>

Its row divergence is minus the pressure gradient.

</details>

<details><summary>Full solution</summary>

**Solution.** Since $\sigma_{ij} = -p \delta_{ij}$, we have $\partial \sigma_{ij} / \partial x_{j} = -\partial p / \partial x_{i} = -(\nabla p)_{i}$. Substituting into $\rho Dv_{i}/Dt = \partial \sigma_{ij}/\partial x_{j} + \rho b_{i}$ gives the result.

</details>

### Exercise 3
A fluid at rest in a gravitational field $b = -g e_{3}$ has stress $\sigma = -p(z) I$. Find $p(z)$ given $p(0) = p_{0}$.

<details><summary>Hint 1</summary>

Set acceleration to zero in the momentum equation.

</details>

<details><summary>Hint 2</summary>

The body force is per mass, so gravity enters multiplied by density.

</details>

<details><summary>Full solution</summary>

**Solution.** With $v = 0$, the momentum balance gives $0 = -\nabla p - \rho g e_{3}$. Thus $\partial p / \partial x_{1} = \partial p / \partial x_{2} = 0$ and $\partial p / \partial z = -\rho g$. For constant $\rho$, integration yields $p(z) = p_{0} - \rho g z$. The pressure increases linearly with depth.

</details>

### Exercise 4

Explain why the tetrahedron's volume force disappears after normalisation by an oblique-face area, and identify a hypothesis preventing that conclusion from failing.

<details><summary>Hint 1</summary>

Compare the powers of a shrinking linear size.

</details>
<details><summary>Hint 2</summary>

The force density and acceleration must stay bounded near the limiting point.

</details>
<details><summary>Full solution</summary>

Volume terms scale as the cube of the linear size and area terms as its square, so the normalised volume contribution tends to zero linearly. A concentrated point force or unbounded inertial density can invalidate that estimate. The theorem therefore states boundedness and a local traction model rather than using the size comparison without assumptions.

</details>

### Exercise 5

For symmetric principal stresses minus two, one and six, find the range of normal stress and maximum shear magnitude.

<details><summary>Hint 1</summary>

Normal stress is a convex combination of principal values.

</details>
<details><summary>Hint 2</summary>

Maximum shear uses half the difference between the extreme values.

</details>
<details><summary>Full solution</summary>

Normal stress lies in $[-2,6]$, with endpoints attained on the corresponding principal normals. Maximum shear magnitude is four, attained by a unit normal with equal squared components along the minus-two and six directions and no middle-direction component. These are geometric traction facts and do not specify a material failure criterion.

</details>

### Exercise 6

Give a constant stress satisfying zero divergence but failing the classical no-couple angular balance.

<details><summary>Hint 1</summary>

Use a nonsymmetric tensor with one off-diagonal entry.

</details>
<details><summary>Hint 2</summary>

Spatial constancy removes divergence without removing its skew part.

</details>
<details><summary>Full solution</summary>

Take $\sigma_{12}=1$ and every other entry zero. Its divergence vanishes, so it meets homogeneous force equilibrium with no body force. But $\sigma_{21}=0$, leaving a nonzero axial angular residual. It is incompatible with the stated classical no-couple model despite satisfying linear momentum.

</details>

### Exercise 7

For $F=\operatorname{diag}(2,1,1)$ and symmetric shear Cauchy stress with entries $\sigma_{12}=\sigma_{21}=3$, compute P and verify the correct symmetry condition.

<details><summary>Hint 1</summary>

Multiply stress on the right by the inverse transpose and multiply by J.

</details>
<details><summary>Hint 2</summary>

The product $PF^T$, rather than P alone, must be symmetric.

</details>
<details><summary>Full solution</summary>

J is two; the nonzero Piola entries are $P_{12}=6$ and $P_{21}=3$. P is nonsymmetric. Multiplying by $F^T$ gives both off-diagonal entries six, equal to the corresponding entries of $J\sigma$. This preserves classical angular momentum under the change of reference area convention.

</details>

### Exercise 8

Derive the conservative momentum form from the material acceleration form using continuity.

<details><summary>Hint 1</summary>

Expand the time derivative and the advective momentum tensor divergence.

</details>
<details><summary>Hint 2</summary>

The extra terms are velocity times the scalar continuity residual.

</details>
<details><summary>Full solution</summary>

Componentwise the left conservative expression is $\rho(\partial_tv_i+v_j\partial_jv_i)+v_i[\partial_t\rho+\partial_j(\rho v_j)]$. The bracket vanishes, leaving density times material acceleration. The expansion requires smooth products; for a discontinuity one keeps the conservative distributional balance and its interface jump condition.

</details>

### Exercise 9

For a stationary planar material interface with zero normal mass transfer and no singular surface force, what traction condition follows from momentum balance?

<details><summary>Hint 1</summary>

Use the interface momentum flux with the normal relative mass flux.

</details>
<details><summary>Hint 2</summary>

That advective contribution is zero on each side under the hypothesis.

</details>
<details><summary>Full solution</summary>

The momentum jump reduces to $[\sigma n]=0$. It states continuity of the traction vector across the interface under a common chosen normal. Outward normals for the two separate material bodies are opposite, giving equal-and-opposite contact forces. A surface tension or other singular surface force would add a term and change this condition.

</details>

### Exercise 10

State the stress term in a weak force balance for a compactly supported vector test and explain which classical derivative it avoids.

<details><summary>Hint 1</summary>

Integrate the stress divergence by parts.

</details>
<details><summary>Hint 2</summary>

Compact support removes the boundary traction term.

</details>
<details><summary>Full solution</summary>

The pairing is $-\int\sigma:\nabla\varphi$. It needs the stress and test gradient to be integrable together, such as both square integrable, without a pointwise classical divergence of stress. A noncompact boundary test would also require the traction boundary functional, so interior distributional balance alone does not prescribe boundary loading.

</details>
