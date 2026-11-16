var e=`---
parent_id: book-two-state-quantum-mechanics
chapter_id: symmetries-angular-momentum-spin
title: "Symmetries, Angular Momentum, and Spin"
level: advanced-undergraduate
estimated_minutes: 225
license: CC BY-SA 4.0
status: draft
---

# Symmetries, Angular Momentum, and Spin

A symmetry preserves the transition probabilities or dynamics relevant to a model. Continuous symmetries have generators, generators satisfy commutator algebras, and invariance yields conservation. Quantum angular momentum makes this chain concrete while also revealing spin: angular momentum not reducible to classical orbital motion.

## 1. Transformations and rays

A unitary $U$ maps rays to rays and preserves inner products. Transition probabilities satisfy $\\lvert\\langle U\\phi\\mid U\\psi\\rangle\\rvert^2=\\lvert\\langle\\phi\\mid\\psi\\rangle\\rvert^2$. Wigner's theorem, cited here, says a bijection of complex rays preserving every transition probability is induced by a unitary or antiunitary map. Along a continuous symmetry connected to identity the unitary type applies, but representative group multiplication may hold only up to scalar phase. Spin-half rotations therefore lift to an ordinary unitary representation of $SU(2)$ while defining a projective representation of spatial $SO(3)$. The finite one-parameter generator proof in Chapter 5 concerns a chosen unitary group; it is not a proof of the full Wigner theorem.

A state symmetry and a Hamiltonian symmetry are different claims. If $UHU^\\dagger=H$, dynamics is invariant. A particular state may still change under $U$. Conversely, a state can be invariant under an operation that is not a symmetry of the Hamiltonian.

## 2. Infinitesimal generators

For $U(\\varepsilon)=e^{-i\\varepsilon G}$,

$$
UHU^\\dagger=H-i\\varepsilon[G,H]+O(\\varepsilon^2).
$$

Thus $[G,H]=0$ gives invariance and conservation for a time-independent generator. Overall constants and $\\hbar$ depend on whether the parameter is dimensional. For a rotation by dimensionless angle $\\theta$,

$$
U(\\theta)=\\exp\\left(-\\frac{i\\theta\\,\\mathbf n\\cdot\\mathbf J}{\\hbar}\\right).
$$

## 3. Angular-momentum algebra

The components obey

$$
[J_x,J_y]=i\\hbar J_z
$$

and cyclic permutations. The Casimir operator $J^2=J_x^2+J_y^2+J_z^2$ commutes with every component. Simultaneous eigenvectors may be labeled

$$
J^2\\lvert j,m\\rangle=\\hbar^2j(j+1)\\lvert j,m\\rangle,
\\qquad
J_z\\lvert j,m\\rangle=\\hbar m\\lvert j,m\\rangle.
$$

Allowed $j$ are nonnegative integers or half-integers, and $m=-j,-j+1,\\ldots,j$. These spectral facts follow from representation theory and positivity of ladder norms.

## 4. Ladder operators

Define $J_+=J_x+iJ_y$ and $J_-=J_x-iJ_y$. Then

$$
[J_z,J_+]=\\hbar J_+,
\\qquad
[J_z,J_-]=-\\hbar J_-.
$$

With normalized phases,

$$
J_+\\lvert j,m\\rangle
=\\hbar\\sqrt{(j-m)(j+m+1)}\\lvert j,m+1\\rangle,
$$

$$
J_-\\lvert j,m\\rangle
=\\hbar\\sqrt{(j+m)(j-m+1)}\\lvert j,m-1\\rangle.
$$

The coefficients vanish at the top and bottom. A formal infinite ladder would contradict positivity at one end.

### Proof of the finite angular-momentum classification

Assume explicitly that $J_x,J_y,J_z$ are Hermitian matrices on a finite-dimensional complex space, $\\hbar>0$, satisfying the three angular commutators. First the product rule shows $[J^2,J_z]=0$: the $J_x^2$ and $J_y^2$ contributions cancel as in Exercise 4. Cyclic permutations prove the other two cases. Thus $J^2$ commutes with $J_\\pm$ as well. The finite commuting spectral theorem supplies a joint unit eigenvector with $J^2$ value $\\hbar^2c$ and $J_z$ value $\\hbar m$, where $c\\ge0$ and $m$ are real. At this point the form $c=j(j+1)$ is still to be proved.

Direct multiplication gives the norm identities

$$J_-J_+=J^2-J_z^2-\\hbar J_z,\\qquad J_+J_-=J^2-J_z^2+\\hbar J_z,$$

because $J_+^\\dagger=J_-$. Consequently

$$\\|J_+v\\|^2=\\hbar^2[c-m(m+1)],\\qquad
\\|J_-v\\|^2=\\hbar^2[c-m(m-1)].$$

Whenever nonzero, these vectors keep the same $c$ and have $m$ increased or decreased by one. Repeated raising terminates because the finite Hermitian $J_z$ has only finitely many eigenvalues. Call the top value $j$. The zero raising norm proves $c=j(j+1)$. Descend until a bottom value $b$ is reached. Its zero lowering norm gives $c=b(b-1)$. Equating them yields $(j+b)(j-b+1)=0$. Since $j\\ge b$, the second factor is positive, hence $b=-j$. The number of lowering steps is the nonnegative integer $j-b=2j$. Thus $j$ is a nonnegative integer or half-integer and the chain contains precisely $m=j,j-1,\\ldots,-j$.

Normalize each descending vector and choose its phase to make its lowering coefficient positive. The norm identities give the stated square roots; adjointness fixes the raising coefficients with the same phases. Different $m$ vectors are orthogonal because $J_z$ is Hermitian. Their span is invariant under $J_z,J_+,J_-$ and hence all three components. It is irreducible: any nonzero invariant subspace has a nonzero $J_z$ component isolated by a polynomial spectral projector, and raising and lowering then generate the entire chain. The orthogonal complement is invariant by Hermiticity, so repetition decomposes the full finite representation into these ladders. Multiple copies with the same $j$ require an additional copy label; $j,m$ alone need not identify every state of a reducible system.

This proves both the spectrum and the coefficients under declared finite-dimensional hypotheses. Orbital operators are unbounded and require common invariant domains; their familiar finite-$l$ angular subspaces realize these matrices, but the domain construction is a further step in wave mechanics. Positivity of a formal expression without that domain contract is not an automatic infinite-dimensional representation proof.

### Worked example: construct spin one and its measurement

In the ordered basis $|1,1\\rangle,|1,0\\rangle,|1,-1\\rangle$, the ladder formulas give

$$J_z=\\hbar\\begin{pmatrix}1&0&0\\\\0&0&0\\\\0&0&-1\\end{pmatrix},\\quad
J_x=\\frac\\hbar{\\sqrt2}\\begin{pmatrix}0&1&0\\\\1&0&1\\\\0&1&0\\end{pmatrix},\\quad
J_y=\\frac\\hbar{\\sqrt2}\\begin{pmatrix}0&-i&0\\\\i&0&-i\\\\0&i&0\\end{pmatrix}.$$

Their raising matrix is $\\sqrt2\\hbar\\begin{pmatrix}0&1&0\\\\0&0&1\\\\0&0&0\\end{pmatrix}$, and the lowering matrix is its adjoint. The norm and commutator identities above give $J^2=2\\hbar^2I$ and the three required commutators; multiplying the displayed matrices yields the same identities. In the state $|1,0\\rangle$, $J_z$ is sharp at zero. The $J_x$ eigenvectors at $+\\hbar,-\\hbar,0$ are respectively $(1,\\sqrt2,1)^\\mathsf T/2$, $(1,-\\sqrt2,1)^\\mathsf T/2$, and $(1,0,-1)^\\mathsf T/\\sqrt2$. Their squared overlaps with the middle basis vector are $1/2,1/2,0$. Thus $J_x$ has variance $\\hbar^2$ even though $J_z$ has zero variance. Spin-one measurements have three available outcomes, although this particular preparation occupies only two of them.

## 5. Spin one-half

For $j=1/2$,

$$
J_k=\\frac{\\hbar}{2}\\sigma_k.
$$

The two basis states have $J_z$ values $\\pm\\hbar/2$, while $J^2=3\\hbar^2/4$. Spin is an intrinsic representation label. The Bloch sphere organizes spin expectation directions, but a spin-one-half particle is not modeled as a tiny rigid ball rotating in ordinary space.

A $2\\pi$ rotation gives $-I$ on spinors. This global sign is invisible for an isolated ray but can become an observable relative phase between coherently recombined paths or sectors.

## 6. Orbital angular momentum and scope

In wave mechanics, orbital angular momentum is $\\mathbf L=\\mathbf R\\times\\mathbf P$ and has integer $l$. Spin is added through tensor-product representation theory; total $\\mathbf J=\\mathbf L+\\mathbf S$. The formula presupposes domain control for position and momentum, postponed to later chapters.

Rotational invariance of a central Hamiltonian gives $[H,L_i]=0$ and degeneracy across magnetic quantum numbers. External fields can break the symmetry and split levels. Degeneracy is evidence compatible with symmetry, not by itself proof of one unique microscopic Hamiltonian.

### Worked example: a field selects one axis

On a fixed spin-$j$ ladder let $H=\\omega J_z$, with real nonzero angular frequency $\\omega$. The energies are $E_m=\\hbar\\omega m$, and a general state $\\sum_m c_m|j,m\\rangle$ evolves to $\\sum_m c_me^{-i\\omega mt}|j,m\\rangle$. Its $J_z$ probabilities stay fixed, while relative phases change transverse statistics. Because $[H,J_x]=i\\hbar\\omega J_y$, full rotational symmetry is broken; rotations about $z$ still commute with $H$. For spin half, starting at the plus $X$ ray produces Bloch vector $(\\cos\\omega t,\\sin\\omega t,0)$ and plus-$X$ probability $(1+\\cos\\omega t)/2$.

In contrast a Hamiltonian acting as a scalar $E_jI$ on this irreducible ladder is invariant under every generated rotation, and its $2j+1$ magnetic states have the same energy. A measured splitting can diagnose a broken ideal symmetry within this model, but observed energies alone do not identify the field's microscopic source or rule out other interactions. The distinction between an invariant law and a moving oriented state remains essential in both examples.

## 7. Addition preview

For two spin-one-half systems, the tensor product decomposes into a three-dimensional spin-one triplet and a one-dimensional spin-zero singlet. The singlet

$$
\\frac{\\lvert 01\\rangle-\\lvert 10\\rangle}{\\sqrt{2}}
$$

is invariant under joint rotations. This is a representation statement and an entangled-state example; Bell and no-signalling claims require a measurement protocol developed later.

### Worked example: the singlet and triplet without a table

Let total components be $J_k=S_k\\otimes I+I\\otimes S_k$, with $S_k=\\hbar\\sigma_k/2$. Operators on different factors commute, so the total components obey the same angular algebra. The total $J_z$ kills both $|01\\rangle$ and $|10\\rangle$. The total raising operator sends each to $\\hbar|00\\rangle$, so their difference is annihilated; the lowering operator similarly gives cancelling $\\hbar|11\\rangle$ terms. Thus all three total components kill the normalized singlet, and every joint rotation exponential leaves the vector itself unchanged, not merely its ray.

The orthogonal complement has basis $t_+=|00\\rangle$, $t_0=(|01\\rangle+|10\\rangle)/\\sqrt2$, $t_-=|11\\rangle$. Their magnetic values are $1,0,-1$, and total lowering gives $J_-t_+=\\sqrt2\\hbar t_0$, $J_-t_0=\\sqrt2\\hbar t_-$, $J_-t_-=0$. Hence it is precisely the spin-one ladder just constructed, with $J^2=2\\hbar^2$. This proves the four-dimensional decomposition into a triplet and a singlet directly. Invariance under applying the same rotation to both factors does not imply invariance under rotating just one factor; that is a different operation on the composite system.

## 8. Discrete and antiunitary boundaries

Parity reverses spatial position and is unitary. Time reversal is antiunitary in standard quantum theory and reverses angular momentum. Neither is generated by an ordinary continuous parameter connected to identity. Conservation-by-commutator arguments therefore apply directly only to continuous unitary symmetries.

For spin half an explicit antiunitary map is $T=iYK$, where $K$ conjugates coordinates in the $Z$ basis. It reverses each $J_k$ and has $T^2=-I$. Antilinearity is necessary: if a unitary reversed all three nonzero components, conjugating $[J_x,J_y]=i\\hbar J_z$ would leave its left side unchanged but reverse its right side. An antiunitary also reverses $i$, restoring consistency. If a Hermitian $H$ commutes with this $T$, each eigenvector $\\psi$ has a same-energy partner $T\\psi$. They are orthogonal: the antiunitary inner-product rule gives $\\langle T\\psi|T^2\\psi\\rangle=\\langle T\\psi|\\psi\\rangle$, while $T^2=-I$ makes the left side its negative. This degeneracy argument requires the specified time-reversal symmetry and square; it does not apply to a field that breaks that symmetry.

## 9. Claim audit

Always specify the transformed objects, whether the symmetry is exact or effective, the representation phase convention, and whether the claim concerns laws, Hamiltonian, state, or measured data. Experimental rotational invariance is supported only to finite precision and over tested energies and configurations.

## A spinor sign becomes relative only in a larger experiment

A full turn multiplies a spin-half state vector by minus one, while
leaving its ray unchanged. This does not mean an isolated spin measurement
can detect an overall sign. Every probability is quadratic in the state
and remains invariant. The double-cover statement concerns how a continuous
family of unitary representatives composes, rather than a new observable
attached to the sign of a single vector.

To see how a relative phase can be measured, add a two-state path
degree of freedom. Prepare an equal coherent superposition of the two
paths, with spin initially in the positive Z state. Apply a specified
rotation about Z by angle θ only in the second path. The joint
state becomes
$$\\frac{|0\\rangle+e^{-i\\theta/2}|1\\rangle}{\\sqrt2}
\\otimes|z+\\rangle.$$
A path X measurement has positive-outcome probability
$(1+\\cos(\\theta/2))/2$. At zero angle it is one; after a full turn
it is zero. The sign is now between path amplitudes, so it affects
interference. It is not an overall phase of the complete joint state.

There is an important specification hidden in the phrase apply a
rotation conditionally. A spin unitary U and minus U describe the same
isolated spin channel, but their controlled joint unitaries differ by a
path phase. The isolated channel alone therefore does not define which
controlled implementation has been performed. One must specify the continuous
physical implementation, its reference phase and its action on the other
path. Otherwise an apparently paradoxical sign comparison has silently
added information not contained in a ray transformation.

This example connects three levels of description. Rotations act on
physical directions through the ordinary rotation group. Spinors carry a
unitary representation of its double cover. Relative phases between coherent
branches belong to the full Hilbert space of the experiment, including
the reference path. Global phases disappear only after the complete
system has been named. The tensor-product chapters later provide the
formal language for that combined state and its reduced spin state.

The same reasoning explains why a mixture of paths cannot replace
their coherent superposition. Discarding the relative path coherence removes
the cross term that depends on the phase. Identical spin preparation
in each branch does not recover that term. A statement about a
spinor sign and a statement about an interference measurement are related
through a specified preparation and joint operation, not through the
rotation label alone.

## An irreducible multiplet has no preferred scalar perturbation direction

Within one spin-j irreducible space, let an operator commute
with Jz and both ladder operators. The Jz eigenvalues are
distinct inside that multiplet, so the first commutation
condition makes the operator diagonal in the ladder basis.
Commuting with a nonzero ladder transition forces the two
adjacent diagonal entries equal. Repeating along the ladder
makes every entry equal: the operator is a scalar multiple
of the identity on this irreducible space.

Thus a Hamiltonian commuting with every rotation generator
cannot split the magnetic levels of one isolated irreducible
multiplet. A field selecting an axis can split them because
it gives up the full commutation hypothesis. On a reducible
space, different multiplets or multiple copies may carry
different scalar energies and additional mixing between
equivalent copies. The elementary argument does not make
the entire Hilbert-space Hamiltonian scalar. It locates
precisely which degeneracy follows from the representation,
rather than attributing every equal energy to rotational
symmetry.

## Exercises with complete solutions

<a id="symmetries-angular-momentum-spin-ex-1"></a>

### 1. Unitary overlap
Show unitary maps preserve inner products.

<details>
<summary>Hint 1</summary>

Move the adjoint of the first U into the second slot.

</details>

<details>
<summary>Hint 2</summary>

The product of that adjoint and U is identity.

</details>

<details>
<summary>Full solution</summary>

$\\langle U\\phi\\mid U\\psi\\rangle=\\langle\\phi\\mid U^\\dagger U\\mid\\psi\\rangle=\\langle\\phi\\mid\\psi\\rangle$.

</details>

<a id="symmetries-angular-momentum-spin-ex-2"></a>

### 2. Hamiltonian invariance
If $[U,H]=0$, show $UHU^\\dagger=H$.

<details>
<summary>Hint 1</summary>

Use the given commutation relation before multiplying by the adjoint.

</details>

<details>
<summary>Hint 2</summary>

The adjacent U and its adjoint then cancel.

</details>

<details>
<summary>Full solution</summary>

$UH=HU$; multiply on the right by $U^\\dagger$ and use $UU^\\dagger=I$.

</details>

<a id="symmetries-angular-momentum-spin-ex-3"></a>

### 3. Infinitesimal invariance
What first-order condition follows from $e^{-i\\varepsilon G}He^{i\\varepsilon G}=H$?

<details>
<summary>Hint 1</summary>

Expand both exponentials through first order in the real parameter.

</details>

<details>
<summary>Hint 2</summary>

The coefficient of the parameter must vanish if invariance holds for all small parameters.

</details>

<details>
<summary>Full solution</summary>

Expanding gives $H-i\\varepsilon[G,H]+O(\\varepsilon^2)$, so $[G,H]=0$.

</details>

<a id="symmetries-angular-momentum-spin-ex-4"></a>

### 4. Casimir commutator
Show $[J^2,J_z]=0$.

<details>
<summary>Hint 1</summary>

Use the commutator product rule on each squared component.

</details>

<details>
<summary>Hint 2</summary>

The two transverse anticommutators occur with opposite signs.

</details>

<details>
<summary>Full solution</summary>

Product rules give $[J_x^2,J_z]=-i\\hbar(J_xJ_y+J_yJ_x)$ and $[J_y^2,J_z]=i\\hbar(J_yJ_x+J_xJ_y)$; they cancel, and $[J_z^2,J_z]=0$.

</details>

<a id="symmetries-angular-momentum-spin-ex-5"></a>

### 5. Raising relation
Compute $[J_z,J_+]$.

<details>
<summary>Hint 1</summary>

Insert the definition of the raising operator.

</details>

<details>
<summary>Hint 2</summary>

Use both cyclic angular commutators with their signs.

</details>

<details>
<summary>Full solution</summary>

$[J_z,J_x]+i[J_z,J_y]=i\\hbar J_y+i(-i\\hbar J_x)=\\hbar(J_x+iJ_y)=\\hbar J_+$.

</details>

<a id="symmetries-angular-momentum-spin-ex-6"></a>

### 6. Raised eigenvalue
If $J_z\\lvert j,m\\rangle=\\hbar m\\lvert j,m\\rangle$, what is the eigenvalue of $J_+\\lvert j,m\\rangle$ when nonzero?

<details>
<summary>Hint 1</summary>

Move Jz past the raising operator using its commutator.

</details>

<details>
<summary>Hint 2</summary>

The original eigenvalue and the added hbar combine into the new magnetic value.

</details>

<details>
<summary>Full solution</summary>

The commutator relation gives $J_zJ_+\\lvert j,m\\rangle=\\hbar(m+1)J_+\\lvert j,m\\rangle$.

</details>

<a id="symmetries-angular-momentum-spin-ex-7"></a>

### 7. Top state
Why does $J_+\\lvert j,j\\rangle=0$?

<details>
<summary>Hint 1</summary>

Evaluate the raising norm at the highest magnetic value.

</details>

<details>
<summary>Hint 2</summary>

A zero squared norm forces the raised vector to vanish.

</details>

<details>
<summary>Full solution</summary>

Its coefficient contains $\\sqrt{(j-j)(j+j+1)}=0$; there is no $m=j+1$ state in the irreducible representation.

</details>

<a id="symmetries-angular-momentum-spin-ex-8"></a>

### 8. Spin-half matrices
Verify $[J_x,J_y]=i\\hbar J_z$ for $J_k=\\hbar\\sigma_k/2$.

<details>
<summary>Hint 1</summary>

Pull the two scalar hbar-over-two factors out of the commutator.

</details>

<details>
<summary>Hint 2</summary>

Use the Pauli commutator from the preceding chapters.

</details>

<details>
<summary>Full solution</summary>

$[J_x,J_y]=(\\hbar^2/4)(2i\\sigma_z)=i\\hbar(\\hbar\\sigma_z/2)=i\\hbar J_z$.

</details>

<a id="symmetries-angular-momentum-spin-ex-9"></a>

### 9. Spin magnitude
Compute $J^2$ for spin one-half.

<details>
<summary>Hint 1</summary>

Each Pauli square is identity.

</details>

<details>
<summary>Hint 2</summary>

Sum all three equal squared component matrices.

</details>

<details>
<summary>Full solution</summary>

Each $J_k^2=\\hbar^2I/4$, so $J^2=3\\hbar^2I/4$, matching $j(j+1)\\hbar^2$ at $j=1/2$.

</details>

<a id="symmetries-angular-momentum-spin-ex-10"></a>

### 10. $Z$ values
What outcomes arise measuring $J_z$ on a spin-half system?

<details>
<summary>Hint 1</summary>

The Z Pauli eigenvalues are plus and minus one.

</details>

<details>
<summary>Hint 2</summary>

Multiply those values by hbar over two, retaining angular-momentum units.

</details>

<details>
<summary>Full solution</summary>

$\\pm\\hbar/2$.

</details>

<a id="symmetries-angular-momentum-spin-ex-11"></a>

### 11. Spin direction
In $\\lvert0\\rangle$, find $\\langle\\mathbf J\\rangle$.

<details>
<summary>Hint 1</summary>

The north-pole state has zero transverse Pauli expectations.

</details>

<details>
<summary>Hint 2</summary>

Scale its Bloch vector by hbar over two.

</details>

<details>
<summary>Full solution</summary>

Pauli expectations are $(0,0,1)$, so $\\langle\\mathbf J\\rangle=(0,0,\\hbar/2)$.

</details>

<a id="symmetries-angular-momentum-spin-ex-12"></a>

### 12. Rotation about $Z$
Write the spin-half rotation by angle $\\theta$ about $Z$.

<details>
<summary>Hint 1</summary>

Jz divided by hbar is Z divided by two.

</details>

<details>
<summary>Hint 2</summary>

Exponentiate its two diagonal entries separately.

</details>

<details>
<summary>Full solution</summary>

$e^{-i\\theta Z/2}=\\operatorname{diag}(e^{-i\\theta/2},e^{i\\theta/2})$.

</details>

<a id="symmetries-angular-momentum-spin-ex-13"></a>

### 13. Full rotation
Evaluate the preceding operator at $\\theta=2\\pi$.

<details>
<summary>Hint 1</summary>

At a full rotation each half-angle phase is an odd multiple of pi.

</details>

<details>
<summary>Hint 2</summary>

Both diagonal entries are the same scalar minus one.

</details>

<details>
<summary>Full solution</summary>

Both diagonal entries are $-1$, so the operator is $-I$.

</details>

<a id="symmetries-angular-momentum-spin-ex-14"></a>

### 14. Four-pi rotation
What occurs at $\\theta=4\\pi$?

<details>
<summary>Hint 1</summary>

Evaluate the same phases at twice the full rotation.

</details>

<details>
<summary>Hint 2</summary>

A spinor representative, as well as its ray, returns to itself.

</details>

<details>
<summary>Full solution</summary>

The operator returns to $I$.

</details>

<a id="symmetries-angular-momentum-spin-ex-15"></a>

### 15. Singlet normalization
Normalize $\\lvert01\\rangle-\\lvert10\\rangle$.

<details>
<summary>Hint 1</summary>

The two product basis terms are orthogonal.

</details>

<details>
<summary>Hint 2</summary>

Add their squared magnitudes before choosing a common normalization.

</details>

<details>
<summary>Full solution</summary>

The terms are orthogonal and each has squared coefficient one, so divide by $\\sqrt{2}$.

</details>

<a id="symmetries-angular-momentum-spin-ex-16"></a>

### 16. Singlet $J_z$
Show the total $J_z$ annihilates the singlet.

<details>
<summary>Hint 1</summary>

The two subsystems contribute opposite magnetic values in each term.

</details>

<details>
<summary>Hint 2</summary>

Both product vectors individually have total magnetic value zero.

</details>

<details>
<summary>Full solution</summary>

Each term has one up and one down contribution, totaling zero; linearity preserves zero for their difference.

</details>

<a id="symmetries-angular-momentum-spin-ex-17"></a>

### 17. State versus law symmetry
Can $H$ be rotation invariant while a state is not?

<details>
<summary>Hint 1</summary>

An invariant Hamiltonian can have an entire degenerate multiplet.

</details>

<details>
<summary>Hint 2</summary>

A chosen oriented member of that multiplet need not be an invariant vector.

</details>

<details>
<summary>Full solution</summary>

Yes. An eigenstate with a chosen magnetic orientation can transform to another state even though $UHU^\\dagger=H$.

</details>

<a id="symmetries-angular-momentum-spin-ex-18"></a>

### 18. Broken symmetry
Why can a $Z$-directed field split $m$ levels?

<details>
<summary>Hint 1</summary>

Compare commutation with Jz to commutation with the two transverse components.

</details>

<details>
<summary>Hint 2</summary>

The field term assigns a different scalar energy to each magnetic value.

</details>

<details>
<summary>Full solution</summary>

A term proportional to $J_z$ preserves only rotations about $Z$, not full rotational symmetry, so energies may depend on $m$.

</details>

<a id="symmetries-angular-momentum-spin-ex-19"></a>

### 19. Time reversal
Why is it not generated by $e^{-itG}$ connected to identity?

<details>
<summary>Hint 1</summary>

A finite-dimensional Hermitian exponential is complex linear and unitary.

</details>

<details>
<summary>Hint 2</summary>

Standard time reversal conjugates scalars and is antiunitary instead.

</details>

<details>
<summary>Full solution</summary>

Standard time reversal is antiunitary, whereas such exponentials are unitary continuous transformations.

</details>

<a id="symmetries-angular-momentum-spin-ex-20"></a>

### 20. Evidence boundary
Does an observed degeneracy uniquely prove rotational symmetry?

<details>
<summary>Hint 1</summary>

Several mechanisms can produce coincident spectral values.

</details>

<details>
<summary>Hint 2</summary>

A symmetry claim also concerns transformation behavior and responses to perturbations.

</details>

<details>
<summary>Full solution</summary>

No. Degeneracy may be accidental or follow from another symmetry; additional transformation and perturbation evidence is required.

</details>

## Project: reconstruct a representation

Build the spin-one matrices in the $m=1,0,-1$ basis from the ladder coefficients. Compute $J_x,J_y,J_z,J^2$; numerically or exactly audit Hermiticity, the three commutators, the Casimir value, ladder endpoints, and rotation unitarity. Provide matrices and residuals in text tables. Then compare spin one with spin one-half without calling either a classical rotating body. Clearly separate exact representation identities from floating-point evidence.

## Chapter summary

Continuous unitary symmetries have Hermitian generators, and Hamiltonian invariance produces conserved quantities. Angular momentum is organized by its commutator algebra, Casimir value, ladder structure, and irreducible label $j$. Spin one-half realizes this algebra through Pauli matrices, with a representation geometry that must not be inflated into a classical mechanism.

[Previous chapter](#/item/book-two-state-quantum-mechanics?chapter=commutators-uncertainty-compatibility) · [Next chapter](#/item/book-two-state-quantum-mechanics?chapter=mixed-states-ensembles) · [Book overview](#/item/book-two-state-quantum-mechanics)
`;export{e as default};