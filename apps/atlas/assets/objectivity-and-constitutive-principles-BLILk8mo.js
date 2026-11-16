var e=`---
parent_id: book-fields-fluids-continuum
chapter_id: objectivity-and-constitutive-principles
title: "Objectivity and Constitutive Principles"
level: graduate
estimated_minutes: 210
license: CC BY-SA 4.0
---

# Objectivity and Constitutive Principles

## Learning purpose

This chapter introduces the principle of frame indifference (objectivity), which requires that constitutive laws produce the same physical predictions under rigid changes of observer. You will learn to test candidate constitutive relations for objectivity and to construct admissible strain measures for finite deformations.

## Motivation: observer transformations

Consider two observers related by a time-dependent rigid motion:

$$x^{*} = c(t) + Q(t) x,$$

where $c(t)$ is a translation and $Q(t)$ is a proper orthogonal tensor ($Q^{T} Q = I$, $\\det Q = 1$). A constitutive law is objective (frame-indifferent) if the stress measured by the starred observer is related to the stress measured by the unstarred observer by the same rotation:

$$\\sigma^{*} = Q \\sigma Q^{T}.$$

This means the material response is intrinsic; it does not depend on the observer's frame of reference.

## Objective and non-objective quantities

Under the transformation $x^{*} = c(t) + Q(t) x$:

- **Scalars** like temperature and density are objective: $T^{*} = T$, $\\rho^{*} = \\rho$.
- **Vectors** like normal vectors transform as $n^{*} = Q n$.
- **Second-order tensors** like stress transform as $\\sigma^{*} = Q \\sigma Q^{T}$.
- **Velocity** is not objective: $v^{*} = \\dot{c} + \\dot{Q} x + Q v$.
- **Velocity gradient** is not objective: $L^{*} = \\dot{Q} Q^{T} + Q L Q^{T}$.

However, the rate of deformation $D$ is objective:

$$D^{*} = Q D Q^{T},$$

because the skew-symmetric part $\\dot{Q} Q^{T}$ cancels. The spin tensor $W$ is not objective.

**Consequence.** Uncompensated dependence on the skew part of $L$ is not objective, because $L^{*}$ contains the additive term $\\dot Q Q^T$. Dependence written using $L$ can still be objective when the function discards that term: for example, $\\sigma=2\\mu\\operatorname{sym}L=2\\mu D$ transforms properly. A proposed law must therefore be tested under the full transformation rather than rejected merely because its argument is written as $L$.

## Finite strain measures

The small-strain tensor $\\varepsilon = \\frac{1}{2}(\\nabla u + (\\nabla u)^{T})$ is invariant under infinitesimal rigid motions but not adequate for arbitrary finite rotations. For finite elasticity, objective strain measures include:

- **Right Cauchy–Green tensor:** $C = F^{T} F$, unchanged by superposed spatial rotations because $F^{*} = Q F$ implies $C^{*} = F^{T} Q^{T} Q F = C$.
- **Left Cauchy–Green tensor:** $B = F F^{T}$, which transforms as $B^{*} = Q B Q^{T}$ (objective as a tensor).
- **Green–Lagrange strain:** $E = \\frac{1}{2}(C - I)$, also invariant under superposed rotations.

## Constitutive audit checklist

When proposing a constitutive law, verify:

1. **Frame indifference:** Does the law transform correctly under rigid observer changes?
2. **Material symmetry:** What is the symmetry group of the material (isotropic, transversely isotropic, orthotropic, etc.)?
3. **Energy or dissipation inequality:** Does the law satisfy the Clausius–Duhem inequality?
4. **Dimensional consistency:** Are all terms dimensionally homogeneous?
5. **Regime validity:** For what range of strains, strain rates, or temperatures was the law derived?
6. **Stability conditions:** Does the law preserve ellipticity, hyperbolicity, or other stability requirements?
7. **Experimental basis:** What measurements were used to identify the material parameters?

**Common error.** Calibrating a constitutive law in one loading path and assuming it applies to all paths. A linear elastic model fit to uniaxial tension data may fail in shear or multiaxial loading if the material is actually anisotropic.

## Deriving the observer law exposes the additive spin

Differentiate the observer relation along a particle. Translation contributes its time derivative, rotation contributes its derivative applied to the old position, and particle motion contributes the rotated old velocity. To take the new spatial gradient, use $x=Q^T(x^*-c)$ at the fixed time. The chain rule then gives the stated velocity-gradient transformation.

Differentiating $QQ^T=I$ shows that $\\Omega=\\dot Q Q^T$ is skew. Taking symmetric and skew parts therefore proves the two transformation laws for D and W separately. Translation has disappeared from both gradients, whereas a rotating observer contributes an arbitrary instantaneous skew matrix to W. At a selected time one can choose Q equal to identity while keeping its derivative nonzero, so that additive term cannot be dismissed as only a change of coordinate entries.

Acceleration has additional observer terms as well. Objectivity of a constitutive stress does not say that the raw acceleration has the same rotation-only law under a time-dependent rotating observer. The complete momentum equation includes the corresponding inertial-force transformation when described in such a frame. Constitutive frame indifference is a restriction on material response, not an assertion that every kinematic quantity transforms in the same way.

### Example 7.1: passing a rigid-spin check is insufficient

Consider the symmetric extra stress $\\beta|D|^2|W|^2D$, with a nonzero scalar coefficient. It vanishes in pure rigid spin because D is zero, so observing its behaviour only in that motion would not reveal a problem. At a state with nonzero D and W equal to zero, it also vanishes.

Now choose a rotating observer with Q identity at that instant and nonzero additive spin Omega. D is unchanged at the instant, but the new formula produces $\\beta|D|^2|\\Omega|^2D$, generally nonzero. The required transformed old stress was zero. Thus the law fails the full observer condition despite being symmetric and giving zero stress for pure rigid spin. Those two simpler checks do not establish objectivity.

By contrast the map $2\\mu\\operatorname{sym}L$ uses L as its written argument but discards precisely the additive skew part. It satisfies the transformation law for scalar objective mu. Objectivity concerns how the complete function transforms, rather than whether an intermediate variable's name appears in its notation.

## Material symmetry acts on the other side of a deformation

A spatial observer rotation changes F to QF, leaving reference material directions fixed. A material symmetry compares F with FH for a fixed reference rotation H belonging to the material's symmetry group. These two actions have different geometric meanings. Objectivity uses all proper spatial rotations; isotropy is the additional assertion that every proper reference rotation is a material symmetry.

A material can be objective and strongly anisotropic. If it contains a preferred reference unit direction $a_0$, an energy depending on $|Fa_0|$ is unchanged by spatial rotations because they preserve current vector lengths. It need not be unchanged when a reference rotation moves $a_0$ relative to F. Passive changes of reference axes rotate the components of both F and the structural direction; that coordinate covariance is different from physically comparing two deformations while holding the material structure fixed.

### Example 7.2: an objective fiber energy

Take reference-volume energy $k(|Fa_0|^2-1)^2/2$ with positive k. Under QF its scalar argument is unchanged, proving objectivity directly. Its Piola derivative is $2k(|Fa_0|^2-1)(Fa_0)\\otimes a_0$. Multiplication by $F^T$ gives a scalar multiple of $(Fa_0)\\otimes(Fa_0)$, symmetric as the objective-energy argument predicts.

A reference rotation preserving the line spanned by $a_0$ leaves the energy unchanged; a general reference rotation need not. The model is therefore not isotropic. Also, this fiber-only energy has unpenalized deformation directions and is not a positive full three-dimensional elastic stiffness by itself. Objectivity, material symmetry and stability remain separate even in this explicit energy formula.

## Objective elastic energies factor through the right stretch

Suppose a reference energy is defined on invertible positive-determinant F and is invariant under every proper left rotation. Polar decomposition gives F equal to RU with U the positive square root of C. Rotate by the inverse of R to obtain energy at F equal to energy at U. Defining a scalar function of C by its positive square root therefore represents the energy as a function of $F^TF$.

Conversely every scalar function of that right tensor is unchanged by left rotations. This proves the representation at the level of functions on the positive definite cone. A differentiable constitutive derivative still needs the corresponding smoothness of the chosen scalar function; the geometric factorisation does not supply it automatically for a merely continuous energy.

If isotropy is also imposed, the scalar function is invariant under orthogonal conjugacy of C. The spectral theorem shows that its value depends only on the unordered positive eigenvalues. Their elementary symmetric invariants are trace, half the difference of squared trace and trace of the square, and determinant. Those three quantities determine the unordered roots of their characteristic polynomial, so they can parameterise the energy pointwise.

At repeated eigenvalues, choosing ordered eigenvectors or differentiating a branch of ordered roots can be nonsmooth. A smooth invariant energy can still be well behaved there; a coordinate representation by individual eigenvectors is what can become singular. Derivative formulas should therefore use an appropriately smooth invariant representation rather than assuming a globally smooth set of principal directions.

## Isotropic linear symmetric response has two coefficients

Let a linear map from symmetric tensors to symmetric tensors commute with every proper rotation. For a diagonal input, conjugation by the three half-turns about coordinate axes leaves the input fixed while reversing selected off-diagonal output entries. The output must consequently be diagonal. Rotations permuting the coordinate axes then force the matrix mapping diagonal entries to diagonal entries to have one common diagonal coefficient and one common off-diagonal coefficient.

Thus on a diagonal input the ith output entry is a fixed multiple of its ith input entry plus a fixed multiple of the total trace. Every symmetric input can be diagonalised by a proper orthogonal matrix, and equivariance rotates this same formula back. Therefore the whole map is a linear combination of the input itself and its trace times identity. Writing the coefficients as $2\\mu$ and lambda gives the familiar isotropic elastic or viscous form, depending on whether the input is strain or strain rate.

This is a representation theorem with explicit assumptions: linearity, symmetric input/output and full rotational symmetry. A nonlinear isotropic map can involve further scalar functions of invariants and powers of the input. An anisotropic linear map generally has more independent coefficients. Thermodynamic positivity of the two coefficients' shear and volumetric combinations is an additional condition, as the preceding chapter proved for viscosity.

## A time derivative must account for the rotating axes

For an objective spatial stress, differentiate $\\sigma^*=Q\\sigma Q^T$ along the particle. Besides the rotated material derivative, the result contains $\\Omega\\sigma^*-\\sigma^*\\Omega$. The ordinary material derivative of the components is therefore not itself objective. A rate equation equating that raw derivative to an objective tensor can fail under observer rotation even when its instantaneous stress relation looks reasonable.

Define the Jaumann rate $\\dot\\sigma+\\sigma W-W\\sigma$. Insert the observer laws for the stress derivative and W. The added Omega terms cancel pairwise, leaving exactly Q times the old rate times $Q^T$. This proves covariance of that rate. Other objective rates use different transports, so objectivity alone does not choose one universally correct rate model.

### Example 7.3: stress rotating rigidly with its material

Let a rigid motion have rotation R(t), spin $W=\\dot R R^T$, and stress $\\sigma(t)=R(t)\\sigma_0R(t)^T$. Differentiation gives $\\dot\\sigma=W\\sigma-\\sigma W$. Its Jaumann rate is zero. The ordinary component derivative is generally nonzero, even though the stress is unchanged when measured in axes rotating with the material.

If the initial stress is spherical, the commutator vanishes and both rates are zero. An anisotropic initial stress makes the difference visible. The calculation illustrates transport of an existing tensor, rather than a complete constitutive law for how a deforming solid should develop stress. Adding an objective rate to an equation still leaves its energy integrability and calibration to be established.

## Constitutive memory also needs transformed histories

A history-dependent law observes a sequence of deformations or rates, not just their current value. A time-dependent observer rotation changes each time in that history differently. Comparing tensors at two times therefore needs a declared transport to a common frame or a relative deformation measure; simply summing old spatial component arrays can mix incompatible orientations.

Internal variables introduce another layer. A scalar damage variable can remain unchanged under observer rotation, while a preferred spatial direction rotates and a reference structural tensor follows its own material transformation. Their evolution equations and their contributions to free energy must transform consistently. Labelling the final stress objective does not fix an inconsistent internal-variable equation upstream.

The present chapter supplies the transformation calculations that make such questions precise. Full viscoelastic, plastic or damage evolution is a separate constitutive model with its own existence, dissipation and measurement assumptions. The linear-elastic and Newtonian chapters use simpler state/rate classes whose restrictions can be proved directly.

## Summary and connections

Objectivity requires that constitutive laws depend only on objective quantities. The rate of deformation $D$ is objective, but the velocity gradient $L$ and spin $W$ are not. Finite strain measures like $C$ and $E$ are invariant under superposed rigid rotations.

In the previous chapter, *Energy and Thermodynamic Restrictions*, we saw that thermodynamics constrains constitutive laws. In the next chapter, *Linear Elasticity*, we apply these principles to construct the simplest nontrivial constitutive law for solids.

## Exercises

### Exercise 1
Show that the spin tensor $W$ is not objective by computing $W^{*}$ under $x^{*} = c(t) + Q(t) x$.

<details><summary>Hint 1</summary>

Take the skew part of the full transformed velocity gradient.

</details>

<details><summary>Hint 2</summary>

The observer spin adds independently of the old material spin.

</details>

<details><summary>Full solution</summary>

**Solution.** We have $L^{*} = \\dot{Q} Q^{T} + Q L Q^{T}$. The symmetric part is $D^{*} = Q D Q^{T}$ because $\\dot{Q} Q^{T}$ is skew-symmetric. The skew-symmetric part is $W^{*} = \\dot{Q} Q^{T} + Q W Q^{T}$. Since $\\dot{Q} Q^{T} \\neq 0$ in general, $W^{*} \\neq Q W Q^{T}$, so $W$ is not objective.

</details>

### Exercise 2
Verify that the right Cauchy–Green tensor $C = F^{T} F$ is invariant under $F^{*} = Q F$.

<details><summary>Hint 1</summary>

Insert the transformed deformation gradient into both factors.

</details>

<details><summary>Hint 2</summary>

Orthogonality cancels the middle spatial rotation.

</details>

<details><summary>Full solution</summary>

**Solution.** $C^{*} = (F^{*})^{T} F^{*} = F^{T} Q^{T} Q F = F^{T} F = C$, since $Q^{T} Q = I$.

</details>

### Exercise 3
A proposed constitutive law for a fluid is $\\sigma = -p I + \\mu (\\nabla v + (\\nabla v)^{T}) + \\alpha W$. Show this violates objectivity unless $\\alpha = 0$.

<details><summary>Hint 1</summary>

Transform each term of the proposed stress separately.

</details>

<details><summary>Hint 2</summary>

Only the spin term retains an uncancelled additive observer contribution.

</details>

<details><summary>Full solution</summary>

**Solution.** Under a change of observer, $W^{*} = \\dot{Q} Q^{T} + Q W Q^{T}$. For objectivity we need $\\sigma^{*} = Q \\sigma Q^{T}$. The term $\\alpha W^{*}$ contributes $\\alpha \\dot{Q} Q^{T}$ plus $\\alpha Q W Q^{T}$. The extra term $\\alpha \\dot{Q} Q^{T}$ cannot be canceled by any other term, so objectivity requires $\\alpha = 0$.

</details>

### Exercise 4

Show that $\\dot Q Q^T$ is skew for a differentiable orthogonal rotation.

<details><summary>Hint 1</summary>

Differentiate $QQ^T=I$.

</details>
<details><summary>Hint 2</summary>

The second product-rule term is the transpose of the first.

</details>
<details><summary>Full solution</summary>

Differentiation gives $\\dot QQ^T+Q\\dot Q^T=0$. Hence the first matrix plus its transpose is zero, which is exactly skew symmetry. This is why the additive observer term disappears from the symmetric velocity gradient but remains in spin.

</details>

### Exercise 5

Disprove objectivity of $|D|^2|W|^2D$ at a state with nonzero D and zero W.

<details><summary>Hint 1</summary>

Choose Q equal to identity at the instant but choose nonzero instantaneous observer spin.

</details>
<details><summary>Hint 2</summary>

The original stress is zero while its recomputed starred formula is generally not.

</details>
<details><summary>Full solution</summary>

At that instant D stays D and starred W equals the chosen nonzero skew spin Omega. The formula becomes $|D|^2|\\Omega|^2D$, while rotating the old zero stress still gives zero. Thus full frame indifference fails. Vanishing in pure rigid spin did not suffice, because the decisive state has nonzero deformation rate.

</details>

### Exercise 6

For the fiber energy, prove objectivity and identify a sufficient material symmetry of its preferred direction.

<details><summary>Hint 1</summary>

A spatial rotation preserves the length of $Fa_0$.

</details>
<details><summary>Hint 2</summary>

A reference rotation taking the preferred vector to itself or its negative preserves its squared stretch.

</details>
<details><summary>Full solution</summary>

Replacing F by QF leaves $|Fa_0|^2$ unchanged, so the energy is objective. Replacing F by FH also preserves it whenever $Ha_0=\\pm a_0$. A general H can change the preferred-direction stretch, so objectivity does not imply full material isotropy. Passive reference-axis changes must transform the structural direction's components as well.

</details>

### Exercise 7

Prove that an objective energy on positive-determinant deformations can be written as a function of C.

<details><summary>Hint 1</summary>

Use the unique positive polar stretch.

</details>
<details><summary>Hint 2</summary>

Remove the left rotation by frame indifference.

</details>
<details><summary>Full solution</summary>

Write F as RU and rotate by $R^T$, giving energy at F equal to energy at U. Since $U=C^{1/2}$, define the scalar function at C by that value. Conversely a function of $F^TF$ is unchanged by a left proper rotation. This pointwise factorisation does not dispense with smoothness hypotheses when a constitutive derivative is taken.

</details>

### Exercise 8

Explain why rotational equivariance reduces a linear symmetric-tensor response to two scalar coefficients.

<details><summary>Hint 1</summary>

Half-turn symmetries force a diagonal input to have diagonal output.

</details>
<details><summary>Hint 2</summary>

Axis permutations and diagonalisation then determine the whole map.

</details>
<details><summary>Full solution</summary>

The diagonal-entry map has a common self coefficient and a common cross coefficient because coordinate permutations must commute with it. Thus its output is a multiple of the input diagonal plus another multiple of its trace. Every symmetric tensor is a proper rotation of a diagonal one, so equivariance gives the same combination of D and trace times identity for all inputs. Nonlinearity or material anisotropy removes the two-coefficient conclusion.

</details>

### Exercise 9

For a rigidly rotating stress, compute its ordinary derivative and its Jaumann rate.

<details><summary>Hint 1</summary>

Differentiate the rotated initial stress on both sides.

</details>
<details><summary>Hint 2</summary>

Insert spin as rotation derivative times inverse rotation.

</details>
<details><summary>Full solution</summary>

The derivative is $W\\sigma-\\sigma W$. Adding $\\sigma W-W\\sigma$ makes the Jaumann rate zero. The ordinary derivative can be nonzero for anisotropic stress, so it is not an objective zero-rate statement. A zero Jaumann rate in this rigid example does not choose the correct material evolution during a general deforming process.

</details>

### Exercise 10

Repair: “The proposed stress law is objective, so it is stable and experimentally justified.”

<details><summary>Hint 1</summary>

Objectivity checks observer transformation only.

</details>
<details><summary>Hint 2</summary>

An objective energy can still have negative or missing stiffness directions.

</details>
<details><summary>Full solution</summary>

State that the law has the correct observer covariance under its declared transformation assumptions. Dissipation, positive stiffness or another stability condition, existence of the resulting PDE and agreement with measurements require separate evidence or theorems. The objective fiber-only energy lacks full stiffness, and the previous chapter's reversible negative-stiffness model shows another distinct failure. Transformation consistency does not establish those missing properties.

</details>
`;export{e as default};