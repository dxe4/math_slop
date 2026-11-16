var e=`---
parent_id: book-electromagnetism-relativity
chapter_id: covariant-electrodynamics
title: "Covariant Electrodynamics"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Covariant Electrodynamics

Electric and magnetic fields change when an inertial observer changes. Their separate components therefore cannot be invariant descriptions of the electromagnetic state. An antisymmetric spacetime tensor organizes them into one object, while four-current organizes charge and transport into another. Maxwell's equations then take a compact form whose component expansion reproduces the SI equations already derived.

The conventions are essential. We use temporal coordinate equal to light speed times time, metric signs $(+,-,-,-)$, and the passive positive-axis boost of chapter seven. Greek indices run over four coordinates and spatial indices over three. Repeated upper-lower indices are summed. Raising or lowering a spatial index changes its sign. We retain the vacuum equations with total microscopic sources; macroscopic material decomposition is postponed to its dedicated chapter.

## Four-current and conserved charge

Define four-current as $J^\\mu=(c\\rho,J)$. Its four-divergence is charge-density time derivative plus ordinary current divergence, so conservation is the scalar equation $\\partial_\\mu J^\\mu=0$. The quantities must transform together. A positive-axis boost gives

$$\\rho'=\\gamma(\\rho-vJ_x/c^2),\\qquad J'_x=\\gamma(J_x-v\\rho),\\qquad J'_y=J_y,\\quad J'_z=J_z.$$

For charge at rest in one frame, a moving observer measures a changed density and a transport current in the opposite direction to that observer's boost. This agrees with changed simultaneous spatial volume. The transformation is not a statement that a fixed laboratory volume contains invariant charge at different times; that volume samples a different set of worldlines.

For a compact conserved source, total charge is invariant when evaluated on complete spacelike slices with the appropriate flux measure. Write it as the four-current flux divided by light speed. On a constant-time slice the temporal normal makes this the ordinary density integral. The four-dimensional divergence theorem shows the result unchanged between two complete slices when no unaccounted current crosses their connecting boundary. Lorentz covariance then makes the same geometric flux independent of inertial coordinate choice.

Support and boundary conditions matter in that statement. An infinite charged wire has no finite total charge to compare. A finite observation box can gain charge by transport through its sides. One cannot infer that its density integral is an invariant just by calling charge a scalar; it is the complete conserved flux construction that supplies the invariant total.

## Build the field tensor from potentials

Take four-potential $A^\\mu=(\\phi/c,A)$ and define

$$F^{\\mu\\nu}=\\partial^\\mu A^\\nu-\\partial^\\nu A^\\mu.$$

With the derivative convention fixed in the front matter, its electric entries are negative electric field divided by light speed in the top row and positive in the first column. Its spatial block contains negative the cross-product coefficient of magnetic induction. Explicitly,

$$F^{\\mu\\nu}=\\begin{pmatrix}
0&-E_x/c&-E_y/c&-E_z/c\\\\
E_x/c&0&-B_z&B_y\\\\
E_y/c&B_z&0&-B_x\\\\
E_z/c&-B_y&B_x&0
\\end{pmatrix}.$$

Every component has tesla units. Antisymmetry leaves six independent entries, exactly the two spatial field triples. Lowering both indices reverses the electric entries but leaves the spatial block unchanged. Those changes must be included before contracting indices or defining a dual tensor.

The physical gauge transformation has covariant form $A^\\mu\\mapsto A^\\mu-\\partial^\\mu\\chi$. Its spatial part adds the ordinary gradient because raising the derivative's spatial index introduced a minus sign. The resulting tensor change vanishes by commutation of second derivatives. This checks the four-dimensional notation against the earlier physical gauge convention rather than choosing an unrelated sign for compactness.

## Recover every Maxwell equation

The sourced equation is

$$\\partial_\\mu F^{\\mu\\nu}=\\mu_0J^\\nu.$$

For a temporal free index, the left side is electric divergence divided by light speed. The right side is vacuum permeability times light speed times charge density. Multiplying through gives the electric Gauss law because the vacuum constants have the established product. For a spatial free index, the time derivative contributes negative electric time derivative divided by squared light speed, while the spatial terms give magnetic curl. The result is exactly Ampere–Maxwell.

The remaining equations follow from the potential's antisymmetric derivative identity,

$$\\partial_\\lambda F_{\\mu\\nu}+\\partial_\\mu F_{\\nu\\lambda}+\\partial_\\nu F_{\\lambda\\mu}=0.$$

Expand each lower-index tensor in potential derivatives. Every second derivative appears twice with opposite signs, proving the identity for twice continuously differentiable potentials. Three spatial indices give zero magnetic divergence. One temporal and two spatial indices give Faraday's law with its negative magnetic time derivative. This is often called the Bianchi identity; here it is a proved flat-coordinate derivative identity.

A tensor formulation of the homogeneous equation also uses a dual. Define the orientation symbol by $\\epsilon^{0123}=1$ and set

$$\\widetilde F^{\\mu\\nu}=\\tfrac12\\epsilon^{\\mu\\nu\\alpha\\beta}F_{\\alpha\\beta}.$$

With this explicit convention its top-row entries are negative magnetic induction, while its spatial block is positive the cross-product coefficient of electric field divided by light speed. Thus $\\partial_\\mu\\widetilde F^{\\mu\\nu}=0$ reproduces the same two homogeneous laws. The lower orientation symbol has the opposite temporal sign after metric lowering. Declaring this prevents mixing a numerical permutation symbol with a differently normalized volume tensor.

Taking divergence of the sourced equation gives zero on its left because the pair of derivatives is symmetric and the field tensor is antisymmetric. Source continuity follows. As before, this is a compatibility condition for prescribed current; the compact tensor notation does not make an arbitrary nonconserved source admissible.

## Transform fields with one tensor law

Under a Lorentz transformation the tensor changes with one Lorentz matrix for each upper index. For a positive-axis boost, multiply the displayed field matrix by those two factors and read off its new entries. Parallel electric and magnetic components are unchanged. The transverse components satisfy

$$E'_\\perp=\\gamma(E+v\\times B)_\\perp,\\qquad
B'_\\perp=\\gamma(B-v\\times E/c^2)_\\perp.$$

For example, the second electric component is the normalization times its old value minus speed times the third magnetic component. That sign follows from the declared passive boost. A source using an active transformation or opposite field-tensor definition can display a different-looking formula while describing the same physics after complete translation.

The two contracted scalars are

$$F^{\\mu\\nu}F_{\\mu\\nu}=2(B^2-E^2/c^2),\\qquad
F^{\\mu\\nu}\\widetilde F_{\\mu\\nu}=-4E\\cdot B/c.$$

To derive the first, the two electric appearances acquire the negative lowering sign, while the antisymmetric spatial pairs each contribute the corresponding magnetic square twice. For the second, perform the same count using the declared dual components. Scalar contraction then proves invariance of the magnetic-minus-electric square combination and the electric-magnetic dot product.

These invariants give immediate impossibility statements. A nonzero electric-magnetic dot product prevents any observer from seeing either field vanish. When the fields are perpendicular, their relative squared magnitudes decide whether an electric-only or magnetic-only frame can exist. A nonzero field with both contracted invariants zero cannot be made to vanish by an invertible Lorentz transformation.

## Worked example: moving charged plates

Two ideal infinite charged planes at rest have a uniform electric field between them and zero magnetic field. Let that electric field point along the second axis. An observer moves along the first axis with speed $v$. The transformed field has electric magnitude multiplied by the normalization factor and a magnetic component along the negative third axis of magnitude that factor times speed times the original electric magnitude divided by squared light speed.

The new observer also sees surface transport currents: charges on both planes move opposite the boost, with opposite signed surface charges. Those currents produce the magnetic field in that description. The changed electric density and magnetic current are therefore compatible parts of one transformed source-field system, not competing explanations.

The electric-dominant invariant remains the negative original electric square divided by squared light speed. Explicitly, the magnetic correction subtracts the velocity-square fraction from the amplified electric square, leaving the original value after normalization. The dot invariant stays zero.

The planes are an infinite idealization, so no finite total-charge integral is claimed. Surface density refers to simultaneous area in each frame; charge-current and area transformations must use that frame consistently. For a finite apparatus, edges and the external source of the plate charge supply additional fields, which transform by the same tensor law.

## Worked example: remove one field when the invariants permit

Suppose nonzero perpendicular fields have electric magnitude greater than light speed times magnetic magnitude. Choose a boost velocity

$$v=\\frac{c^2E\\times B}{|E|^2}.$$

Its speed is below light speed. It is perpendicular to both fields, and the vector triple-product identity gives velocity crossed with electric field equal to squared light speed times magnetic induction. The transformed magnetic field therefore vanishes. The remaining electric magnitude is the positive square root fixed by the invariant.

For the opposite magnitude inequality, choose velocity equal to electric field crossed with magnetic induction divided by magnetic magnitude squared. Then electric field plus velocity crossed with magnetic induction vanishes, and the transformed field is magnetic only. Again the speed condition is precisely the required invariant sign.

At equality of magnitudes, these candidate boosts reach the forbidden light-speed endpoint. No finite boost removes a nonzero null field: removing one field would make the zero square invariant remove the other too, contradicting invertibility. This is a field classification statement. A travelling plane wave is an important null-field example, but the local invariants alone do not prove a global travelling-wave dependence.

## Four-force and rest-mass preservation

The external electromagnetic force becomes

$$\\frac{dp^\\mu}{d\\tau}=qF^{\\mu\\nu}u_\\nu.$$

In the particle's temporal component, the lowered spatial velocity signs give charge times normalization times electric work divided by light speed. In the spatial components they produce charge times normalization times the ordinary Lorentz force. Dividing by the proper-to-coordinate-time factor recovers both the relativistic energy rate and momentum rate of the previous chapter.

Contracting with four-velocity gives zero because a symmetric velocity product contracts an antisymmetric tensor. Thus this external force preserves the particle's fixed rest mass. If an effective body changes internal energy, its complete four-force need not have this purely antisymmetric form with constant mass. The compact particle equation retains exactly the external-field and fixed-mass assumptions used to derive it.

## Stress-energy and its divergence

The vacuum electromagnetic stress-energy tensor in our conventions is

$$T^{\\mu\\nu}=\\frac1{\\mu_0}\\left(-F^{\\mu\\alpha}F^\\nu{}_{\\alpha}+\\tfrac14\\eta^{\\mu\\nu}F^{\\alpha\\beta}F_{\\alpha\\beta}\\right).$$

Component expansion gives energy density in its temporal diagonal entry, energy flux divided by light speed in its temporal-spatial entries, and negative Maxwell stress in its spatial block. The tensor is symmetric, and its full metric trace vanishes in four spacetime dimensions. The spatial minus sign agrees with the momentum-flux convention already established.

We derive its source balance explicitly. Apply the product rule. Differentiating the first field factor produces negative the current contracted with the second field factor, by Maxwell's sourced equation. The other derivative terms cancel by the Bianchi identity. To see the coefficient, multiply that identity by the antisymmetric field tensor and relabel the two dummy indices in its last term. The first and last products become equal, while the middle term is negative one half the derivative of the scalar field contraction. Thus

$$F^{\\mu\\alpha}\\partial_\\mu F^\\nu{}_{\\alpha}=\\tfrac14\\partial^\\nu(F^{\\alpha\\beta}F_{\\alpha\\beta}).$$

Substitution leaves

$$\\partial_\\mu T^{\\mu\\nu}=-F^{\\nu\\lambda}J_\\lambda.$$

Its temporal equation, multiplied by light speed, is Poynting's theorem. Its spatial equations are the Maxwell-stress momentum balances. The right side is negative the force-density four-vector delivered to matter. Adding a compatible material stress-energy equation cancels that exchange for a complete closed system.

This derivation assumes the products and derivatives exist in the stated regular class. Multiplying singular point-charge fields at their support is not licensed by writing them inside a tensor. A smooth extended-source model or an explicitly justified regularization is needed before such a self-energy or self-force calculation is meaningful.

## Worked example: wave energy under a boost

For a plane wave propagating along the positive boost direction, let $D=\\gamma(1-\\beta)$. Both transverse field amplitudes acquire factor $D$, and frequency acquires the same factor. Local wave energy density and forward momentum flux therefore acquire factor $D^2$.

The energy of a localized longitudinal pulse per unit transverse area scales differently because its simultaneous longitudinal width also changes. Write its profile coordinate as $x-ct$. The inverse boost makes that coordinate $D(x'-ct')$, so its new width is the old width divided by $D$. Integrating the transformed density over that new simultaneous slice gives pulse energy per area multiplied by only $D$.

This agrees with the null total four-momentum transformation, which gives the Doppler factor for energy. There is no contradiction between a squared factor for a local density and a single factor for an integrated energy. They compare different mathematical quantities and different simultaneous integration slices.

The plane-fronted pulse remains an idealization with finite energy per area rather than finite total transverse energy. For a fully localized beam, one integrates the complete transformed stress-energy flux on a spacelike slice, including its actual transverse and angular structure. The simple factor above uses its one-direction plane geometry.

## Exercises

### Exercise 1: read the source equation in components {#em-covariant-maxwell-components}

Using the displayed field matrix, expand the temporal and first spatial components of the sourced tensor equation. Recover both the SI coefficients and the magnetic-curl sign.

**Hint 1.** The time derivative is ordinary time derivative divided by light speed.

**Hint 2.** In the first spatial column, the top entry is negative the first electric component divided by light speed.

**Solution.** The temporal equation is electric divergence divided by light speed equal to vacuum permeability times light speed times charge density. Multiplication gives the electric Gauss coefficient because vacuum permeability times squared light speed is inverse vacuum permittivity. The first spatial equation contains negative the first electric time derivative divided by squared light speed, plus the first component of magnetic curl, equal to vacuum permeability times first current component. Rearrangement is Ampere–Maxwell. This direct expansion is the reliable sign check before using any compact tensor identity from a different convention.

### Exercise 2: covariant gauge sign {#em-covariant-gauge-translation}

Translate $A^\\mu\\mapsto A^\\mu-\\partial^\\mu\\chi$ into the physical scalar and vector potential changes. Prove the field tensor stays unchanged.

**Hint 1.** The raised spatial derivative is negative ordinary gradient.

**Hint 2.** The tensor change is a difference of commuting second derivatives.

**Solution.** The temporal potential changes by negative time derivative of the gauge function divided by light speed, so the scalar potential changes by its negative time derivative. The spatial vector potential gains the ordinary gradient. The tensor change is negative the first mixed derivative plus the same derivative with indices reversed, which vanishes under twice continuous differentiability. Thus the covariant and physical gauge conventions agree. Omitting the raising sign would reverse the spatial change and destroy that agreement unless the entire tensor convention were also changed.

### Exercise 3: dual components {#em-covariant-dual-components}

Derive the temporal-spatial and spatial components of the dual tensor from its definition. Verify its zero divergence reproduces magnetic Gauss and Faraday laws.

**Hint 1.** Insert the lowered electric and magnetic entries into the orientation-symbol contraction.

**Hint 2.** The temporal dual column contains positive magnetic components, while its top row has their negatives.

**Solution.** The temporal-spatial upper entries are negative magnetic induction. The spatial upper entries are the positive spatial orientation symbol contracted with electric field divided by light speed. The temporal divergence equation is therefore zero ordinary magnetic divergence. A spatial divergence equation contains negative magnetic time derivative divided by light speed minus electric curl divided by light speed. Setting it to zero gives Faraday with its correct minus sign. The result depends on the explicitly chosen upper orientation symbol; importing another dual convention without translating it can reverse the apparent signs while leaving the underlying homogeneous equations equivalent.

### Exercise 4: invariant field classes {#em-covariant-perpendicular-field-classes}

For perpendicular nonzero electric and magnetic fields, classify when an inertial frame can make one field vanish. Explain the limiting equal-magnitude case and why a nonzero dot invariant rules out either elimination.

**Hint 1.** Use the two explicit boost choices from the worked example.

**Hint 2.** A vanishing field would force the dot invariant to vanish in every frame.

**Solution.** If electric magnitude exceeds light speed times magnetic magnitude, the boost proportional to electric crossed with magnetic field divided by electric square has subluminal magnitude and removes the magnetic field. If the inequality reverses, the alternate boost divided by magnetic square removes the electric field. At equality the required candidate speed reaches light speed, and a zero square invariant would force both fields to vanish if either did, impossible for a nonzero tensor under an invertible map. A nonzero electric-magnetic dot product is invariant, so it prevents either field from vanishing in any frame regardless of the square invariant's sign.

### Exercise 5: four-force orthogonality {#em-covariant-force-orthogonality}

Prove the electromagnetic four-force is orthogonal to the particle four-velocity. Recover the ordinary energy-work equation from its temporal component and state the fixed-mass implication.

**Hint 1.** A symmetric product of velocity components contracts to zero with an antisymmetric tensor.

**Hint 2.** Lowering the spatial velocity components introduces their negatives.

**Solution.** The contraction is charge times the lowered velocity pair contracted with the field tensor. Interchanging the two dummy indices negates the tensor but not the product, so the scalar equals its own negative and vanishes. The temporal force component is charge times normalization times electric field dotted with velocity divided by light speed. Dividing by the proper-time conversion recovers mechanical energy rate equal to electric power. Orthogonality preserves the constant massive mass shell. A model with changing internal rest energy requires an additional force contribution or a different effective-body description, not the same conclusion without its hypotheses.

### Exercise 6: charge on complete slices {#em-covariant-charge-slice-invariance}

Explain how four-current conservation proves equal total charge on two complete spacelike slices for a localized source. State the needed connecting-boundary condition and give a reason the same argument fails for an arbitrary fixed laboratory subvolume.

**Hint 1.** Apply the four-dimensional divergence theorem to the region between the slices.

**Hint 2.** The flux through any additional timelike boundary must be included.

**Solution.** Integrating zero four-divergence gives the difference of the two oriented slice fluxes plus connecting-boundary flux equal to zero. For complete slices of a sufficiently localized source, a distant connecting boundary carries no unaccounted current, so the two fluxes agree. Dividing by light speed gives equal total charge, and covariance makes the value independent of inertial coordinates. A finite laboratory subvolume can have current through its timelike sides; omitting that flux would assert false charge constancy. Infinite uniform sources may also lack a finite total charge, so the localized total-charge statement has no direct numerical application there.

### Exercise 7: trace and isotropic radiation {#em-covariant-trace-isotropic-pressure}

Prove the electromagnetic stress-energy trace vanishes. If an averaged vacuum radiation state is spatially isotropic with energy density $u$ and equal diagonal momentum flux $p$, derive its pressure relation. State why one plane wave is different.

**Hint 1.** The metric contraction of the first tensor term equals negative the scalar field contraction, and the second has four equal trace contributions.

**Hint 2.** Isotropy makes the spatial stress-energy block proportional to the identity.

**Solution.** The two contracted terms cancel exactly, giving zero four-trace. For an isotropic averaged tensor the trace is energy density minus three times the common spatial momentum flux, so pressure is one third energy density. A single directed plane wave is anisotropic: its forward momentum flux equals its energy density, with different transverse entries. The isotropic relation therefore requires the stated angular averaging or ensemble model, not merely the existence of radiation. The trace identity is local classical vacuum structure; material stress-energy generally adds other terms.

### Exercise 8: density versus pulse energy {#em-covariant-wave-density-integral}

A plane-fronted pulse propagates along a boost direction. Explain why local energy density transforms with the square of its Doppler factor while its integrated energy per transverse area transforms with only one factor.

**Hint 1.** Both field amplitudes acquire the Doppler factor.

**Hint 2.** The profile coordinate acquires that factor, so a simultaneous profile width acquires its reciprocal.

**Solution.** Energy density is quadratic in electric and magnetic amplitudes, giving the squared factor. Under the inverse coordinate map the profile argument is the Doppler factor times the new retarded longitudinal coordinate, making the pulse width smaller or larger by the reciprocal factor. Integration multiplies density by that width and leaves one net factor. This agrees with total null four-momentum transformation. Comparing a density at one event with an integral on a transformed simultaneity slice without accounting for its volume element would incorrectly suggest contradictory energy laws.

### Exercise 9: the Bianchi contraction {#em-covariant-bianchi-energy-identity}

Derive the contracted Bianchi identity used in the stress-energy divergence proof. Explain why its coefficient is one quarter rather than one half.

**Hint 1.** Multiply the lower-index cyclic identity by the upper antisymmetric field tensor.

**Hint 2.** Relabel the first and last dummy indices to make two derivative products equal; the middle product differentiates a quadratic scalar.

**Solution.** The first and third contracted terms become equal after swapping their dummy indices and using both antisymmetries. The middle term is negative one half the derivative of the field tensor's scalar square, since differentiation of that square supplies two equal factors. Thus twice the first derivative product equals one half that scalar derivative. Dividing gives the one-quarter coefficient. Raising the remaining free index then yields precisely the form used in the chapter. This explicit count is needed to cancel the trace term in stress-energy; a one-half coefficient would fail the energy balance.

### Exercise 10: fields measured by an observer {#em-covariant-observer-fields}

Let a future unit four-velocity $w$ satisfy $w\\cdot w=c^2$. Define $e^\\mu=F^{\\mu\\nu}w_\\nu$ and $b^\\mu=\\widetilde F^{\\mu\\nu}w_\\nu/c$. Prove both are orthogonal to that observer and identify them in its rest frame. Explain how this makes observer dependence compatible with covariance.

**Hint 1.** Contract each antisymmetric tensor with two copies of the same observer velocity.

**Hint 2.** In the rest frame the velocity has only its positive temporal component.

**Solution.** Each observer contraction vanishes by antisymmetry, so both measured-field vectors lie in the observer's spatial orthogonal subspace. In its rest frame their temporal components vanish, while their spatial components are exactly electric field and magnetic induction with the normalization and signs defined here. They transform as four-vectors when both tensor and observer are transformed. Changing the observer while keeping the physical tensor fixed changes the measured decomposition, which is the electric-magnetic mixing already computed. Covariance says the relationship between tensor, observer and measurements is invariantly defined; it does not require every observer to assign the same three electric components.
`;export{e as default};