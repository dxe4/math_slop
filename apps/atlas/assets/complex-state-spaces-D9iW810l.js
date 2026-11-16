var e=`---
parent_id: book-two-state-quantum-mechanics
chapter_id: complex-state-spaces
title: "Complex State Spaces, Rays, and Amplitudes"
level: advanced-undergraduate
estimated_minutes: 190
license: CC BY-SA 4.0
status: draft
---

# Complex State Spaces, Rays, and Amplitudes

Quantum mechanics begins with a mathematical choice: an isolated system is assigned a complex Hilbert space, and a pure state is represented by a unit vector up to global phase. This chapter makes that sentence computational. It also marks its scope. The formalism predicts probabilities conditional on a preparation and a measurement model; it does not by itself identify which laboratory device realizes either one.

The required linear algebra is precise but modest: complex numbers, conjugation, column vectors, matrix multiplication, eigenvectors, and finite sums. We derive every inner-product fact used below. Infinite-dimensional completeness and operator domains enter in Chapter 9, not silently here.

## 1. Complex numbers carry magnitude and phase

Write $z=x+iy$, with conjugate $z^*=x-iy$ and squared modulus $|z|^2=z^*z=x^2+y^2$. If $z$ is nonzero, then $z=|z|\\exp(i\\phi)$ for an angle $\\phi$ defined modulo $2\\pi$. Multiplication adds phases; addition can reinforce or cancel.

That last fact is the seed of interference. The amplitudes $1/2$ and $-1/2$ sum to zero even though each has nonzero magnitude. Quantum alternatives that lead to the same recorded outcome combine as complex amplitudes before a squared magnitude is taken. Mutually exclusive classical alternatives combine as probabilities. Which rule applies depends on the experimental distinction being modeled.

## 2. Complex inner-product spaces

For column vectors $u,v$ in $\\mathbb C^n$, define

\\[
\\langle u\\mid v\\rangle=\\sum_j u_j^*v_j.
\\]

The conjugation on the first vector is essential. It gives conjugate symmetry $\\langle u\\mid v\\rangle=\\langle v\\mid u\\rangle^*$, linearity in the second slot, conjugate linearity in the first, and positivity $\\langle v\\mid v\\rangle\\ge 0$, with equality only for $v=0$. The norm is $\\lVert v\\rVert=\\sqrt{\\langle v\\mid v\\rangle}$.

Two vectors are orthogonal when their inner product is zero. A list $e_1,\\ldots,e_n$ is orthonormal when $\\langle e_j\\mid e_k\\rangle$ is one for $j=k$ and zero otherwise. In an orthonormal basis,

\\[
\\lvert\\psi\\rangle=\\sum_j c_j\\lvert e_j\\rangle,
\\qquad c_j=\\langle e_j\\mid\\psi\\rangle.
\\]

Taking the inner product with itself proves Parseval's finite-dimensional identity $\\lVert\\psi\\rVert^2=\\sum_j|c_j|^2$.

**Theorem 1.1 (Cauchy–Schwarz and the triangle inequality).** In this inner product, $|\\langle u\\mid v\\rangle|\\le\\|u\\|\\|v\\|$ and $\\|u+v\\|\\le\\|u\\|+\\|v\\|$.

*Proof.* For $u\\ne0$ write $v=\\alpha u+w$, with $\\alpha=\\langle u\\mid v\\rangle/\\|u\\|^2$. Then $\\langle u\\mid w\\rangle=0$, so $\\|v\\|^2=|\\alpha|^2\\|u\\|^2+\\|w\\|^2\\ge |\\langle u\\mid v\\rangle|^2/\\|u\\|^2$. This proves Cauchy–Schwarz; the case $u=0$ is immediate. Equality with $u\\ne0$ occurs exactly when $w=0$, or $v$ is proportional to $u$. Expanding $\\|u+v\\|^2$ gives $\\|u\\|^2+\\|v\\|^2+2\\operatorname{Re}\\langle u\\mid v\\rangle$, at most $(\\|u\\|+\\|v\\|)^2$. Taking nonnegative square roots proves the triangle inequality. The equality condition is crucial when deciding whether two normalized state representatives define the same ray.

An orthonormal basis exists by finite Gram–Schmidt. Given independent $v_1,\\ldots,v_n$, normalize $v_1$; at each later stage subtract $\\sum_{j<k}e_j\\langle e_j\\mid v_k\\rangle$ from $v_k$. The residual is orthogonal to the earlier vectors and cannot vanish without contradicting independence. Normalize it to obtain $e_k$. This constructs a full basis, with no infinite-series convergence involved. Finite-dimensional completeness follows as well: a Cauchy sequence has Cauchy scalar coordinates, each converges in $\\mathbb C$, and the finite sum of squared coordinate differences tends to zero.

### Worked example: conjugation prevents nonsense

For $v=(1,i)^\\mathsf T$, the correct norm squared is $1\\cdot1+(-i)i=2$. Omitting conjugation gives $1+i^2=0$, which would assign zero length to a nonzero vector. Normalize by dividing by $\\sqrt2$.

## 3. The state postulate and its boundary

A pure state is represented by a normalized nonzero vector $\\lvert\\psi\\rangle$ with $\\langle\\psi\\mid\\psi\\rangle=1$. If $\\lvert\\psi\\rangle$ represents a physical state, then so does $e^{i\\chi}\\lvert\\psi\\rangle$ for every real $\\chi$. More exactly, the physical pure state is a **ray**: a one-dimensional complex subspace. Normalized vectors are convenient representatives.

The phase multiplying the whole vector is global and unobservable in closed-system predictions. Relative phase is not. In the basis $\\lvert0\\rangle,\\lvert1\\rangle$, the states

\\[
\\lvert+\\rangle=\\frac{\\lvert0\\rangle+\\lvert1\\rangle}{\\sqrt2}
\\quad\\text{and}\\quad
\\lvert-\\rangle=\\frac{\\lvert0\\rangle-\\lvert1\\rangle}{\\sqrt2}
\\]

have identical coefficient magnitudes but are orthogonal. A measurement in a different basis can distinguish them perfectly.

The state postulate is not a claim that a microscopic system literally contains a classical wave vector. It is the mathematical object used to calculate outcome distributions. Connecting a ray to a preparation procedure requires physical modeling and empirical calibration.

For normalized vectors, Cauchy–Schwarz implies $0\\le|\\langle\\psi\\mid\\phi\\rangle|^2\\le1$. Equality to one holds exactly when the vectors differ by a unit-modulus scalar, hence represent the same ray. Equality to zero means orthogonality. Intermediate values describe distinct nonorthogonal rays; “different state” does not mean “orthogonal state.” If $\\phi=e^{i\\chi}\\psi$, every overlap amplitude gains the same phase, and every projection norm is unchanged. Conversely the rank-one projector $P_\\psi=\\psi\\psi^\\dagger$ has range precisely the ray, so equality of these projectors implies equality of rays. This gives a representative-independent mathematical object without introducing statistical mixtures yet.

## 4. Basis changes do not change the state

The ray construction is a genuine equivalence relation on nonzero vectors. Reflexivity uses scalar one; symmetry uses the inverse of a nonzero multiplier; transitivity uses the product of two nonzero multipliers. Passing to unit representatives restricts that multiplier to modulus one. This supplies the projective-space quotient used in the earlier *Pure states are rays* reading without confusing the full nonzero ray with only its unit circle. For the explicit phase family $\\psi_\\theta=(|0\\rangle+e^{i\\theta}|1\\rangle)/\\sqrt2$, its overlap with $|+\\rangle$ is $(1+e^{i\\theta})/2$, whose squared magnitude is $\\cos^2(\\theta/2)$. Thus the family leaves the computational-basis probabilities fixed while changing the ray except at $\\theta\\equiv0\\pmod{2\\pi}$. The two-stage interference calculation below operationalizes precisely this preserved example.

Let $f_k=\\sum_jU_{jk}e_j$, where the columns of $U$ form an orthonormal basis. Then $U^\\dagger U=I$; such a matrix is **unitary**. Coordinates change by $c'=U^\\dagger c$. Consequently

\\[
\\lVert c'\\rVert^2=c^\\dagger UU^\\dagger c=\\lVert c\\rVert^2.
\\]

A basis is a coordinate choice, not an additional physical state. Confusing an active operation $\\lvert\\psi\\rangle\\mapsto U\\lvert\\psi\\rangle$ with a passive coordinate change produces sign and adjoint errors. State which one is intended.

Because $U$ is square, $U^\\dagger U=I$ makes it injective, hence invertible in finite dimensions; its inverse is $U^\\dagger$, so $UU^\\dagger=I$ too. This justifies the norm calculation above. If $E$ is the matrix of old basis columns, the abstract vector is $Ec=EUc'$, which proves $c'=U^\\dagger c$ by cancellation. An active operation in the fixed basis instead gives new physical coordinates $Uc$. The same numerical matrix can therefore appear in different roles, but the coordinate formula is not determined until its role is named.

### Worked basis change

Define $\\lvert+\\rangle,\\lvert-\\rangle$ as above and let $\\lvert\\psi\\rangle=(\\sqrt3\\lvert0\\rangle+i\\lvert1\\rangle)/2$. Then

\\[
\\langle+\\mid\\psi\\rangle=\\frac{\\sqrt3+i}{2\\sqrt2},
\\qquad
\\langle-\\mid\\psi\\rangle=\\frac{\\sqrt3-i}{2\\sqrt2}.
\\]

Each squared magnitude is $1/2$. Their sum is one, as Parseval requires.

The original $0,1$ coefficient magnitudes squared are $3/4,1/4$, so the two coordinate lists differ while describing one unchanged vector. The passive change does not physically randomize an experiment. To turn either list into probabilities one must specify the corresponding basis measurement; the following chapter states that measurement postulate explicitly. A passive relabeling of both state and measurement leaves all predictions unchanged.

## 5. Superposition is linear structure, not ignorance

If $\\lvert\\psi\\rangle$ and $\\lvert\\phi\\rangle$ are vectors, then $a\\lvert\\psi\\rangle+b\\lvert\\phi\\rangle$ is another vector, and it is a state after normalization when nonzero. The coefficients are amplitudes. A coherent superposition retains relative phase. A classical random choice between preparations is instead represented by a density operator, developed in Chapter 8.

One measurement basis may fail to distinguish the two descriptions. The pure state $\\lvert+\\rangle$ and an equal random preparation of $\\lvert0\\rangle$ or $\\lvert1\\rangle$ both give probabilities $1/2,1/2$ in the $\\{\\lvert0\\rangle,\\lvert1\\rangle\\}$ basis. In the $\\{\\lvert+\\rangle,\\lvert-\\rangle\\}$ basis, the pure state gives $+$ certainly, while the mixture remains random. Agreement for one question is not equality of states.

## 6. Orthogonal projection and subspaces

For a normalized vector $\\lvert u\\rangle$, define $P_u=\\lvert u\\rangle\\langle u\\rvert$. Then

\\[
P_u\\lvert v\\rangle=\\langle u\\mid v\\rangle\\lvert u\\rangle.
\\]

Direct multiplication gives $P_u^2=P_u$ and $P_u^\\dagger=P_u$. For an orthonormal family spanning subspace $S$, the orthogonal projector is $P_S=\\sum_j\\lvert u_j\\rangle\\langle u_j\\rvert$. It is independent of which orthonormal basis of $S$ is chosen.

The decomposition $\\lvert v\\rangle=P_S\\lvert v\\rangle+(I-P_S)\\lvert v\\rangle$ has orthogonal terms, so

\\[
\\lVert v\\rVert^2=\\lVert P_Sv\\rVert^2+\\lVert(I-P_S)v\\rVert^2.
\\]

This Pythagorean identity later becomes normalization of a complete projective measurement.

**Theorem 1.2 (Projection in finite dimension).** $P_Sv$ is the unique closest vector to $v$ in $S$.

*Proof.* For any $s\\in S$, write $v-s=(v-P_Sv)+(P_Sv-s)$. The first term is perpendicular to $S$ and the second lies in $S$, so $\\|v-s\\|^2=\\|v-P_Sv\\|^2+\\|P_Sv-s\\|^2$. This is minimized uniquely at $s=P_Sv$. In particular two orthonormal bases of $S$ give the same projection, since both constructions satisfy this characterization. The projector is self-adjoint and idempotent because its orthonormal rank-one terms multiply as $P_jP_k=\\delta_{jk}P_j$. Conversely a self-adjoint idempotent is the orthogonal projector onto its range: it is the identity there, and $\\langle Px,(I-P)y\\rangle=\\langle x,P(I-P)y\\rangle=0$.

### Worked example: nonorthogonal vectors do not form a projector sum

Let $u_1=(1,0,1)^\\mathsf T/\\sqrt2$ and $u_2=(0,1,1)^\\mathsf T/\\sqrt2$. They are independent unit vectors but $\\langle u_1\\mid u_2\\rangle=1/2$. The tempting sum $Q=P_{u_1}+P_{u_2}$ sends $u_1$ to $u_1+u_2/2$, so it is not the identity on their span and cannot be its projector.

Their span is the plane $z=x+y$, with unit normal $n=(-1,-1,1)^\\mathsf T/\\sqrt3$. Hence the correct projector is $P=I-nn^\\dagger$. For $v=(0,0,1)^\\mathsf T$ it gives $Pv=(1,1,2)^\\mathsf T/3$ and residual $v-Pv=(-1,-1,1)^\\mathsf T/3$. Their squared norms are $2/3$ and $1/3$, adding to one, and their inner product is zero. The sum-over-vectors formula requires orthonormality; mere normalization of each spanning vector is insufficient. The least-distance theorem supplies an independent reason this corrected projection is the right one.

## Worked example: relative phase through two basis-mixing operations

Fix a basis and let $H=2^{-1/2}\\begin{pmatrix}1&1\\\\1&-1\\end{pmatrix}$, $D_\\phi=\\operatorname{diag}(1,e^{i\\phi})$. Both are unitary, and here both denote active operations. Starting from $|0\\rangle$, the sequence gives

$$HD_\\phi H|0\\rangle=\\frac{1+e^{i\\phi}}2|0\\rangle+\\frac{1-e^{i\\phi}}2|1\\rangle.$$

The squared output amplitudes are $\\cos^2(\\phi/2)$ and $\\sin^2(\\phi/2)$, using $|1\\pm e^{i\\phi}|^2=2\\pm2\\cos\\phi$. At zero phase the vector returns to $|0\\rangle$; at $\\phi=\\pi$ it becomes $|1\\rangle$. Immediately after the middle operation, however, both component magnitudes are $1/\\sqrt2$ for every phase. The final mixing operation converts relative phase into different basis amplitudes. Multiplying the entire input by $e^{i\\chi}$ multiplies the entire output by the same scalar and changes neither magnitude. This is a normalized algebraic model of interference; identifying specific beam splitters, phase plates or pulses requires an apparatus model. No claim about a device follows from the matrix names alone.

## 7. Tensor products announce composite systems

If systems $A$ and $B$ have state spaces $\\mathcal H_A$ and $\\mathcal H_B$, the composite space is $\\mathcal H_A\\otimes\\mathcal H_B$. Basis vectors combine as $\\lvert j\\rangle\\otimes\\lvert k\\rangle$, abbreviated $\\lvert jk\\rangle$. Dimensions multiply. A pair of two-state systems has four basis vectors, not two.

Product states have the form $\\lvert a\\rangle\\otimes\\lvert b\\rangle$. Not every vector does. The normalized vector

\\[
\\frac{\\lvert00\\rangle+\\lvert11\\rangle}{\\sqrt2}
\\]

cannot be factored into two single-system vectors; it is entangled. We postpone its operational consequences until Chapter 14. Here it serves as a warning: “each subsystem has its own pure state” is not a general law.

## 8. Preparation ledger

For every calculation, record:

1. the state space and chosen basis;
2. the normalized state or preparation ensemble;
3. which phases are conventional and which are relative;
4. the observable or outcome projectors to be applied later;
5. whether neglected degrees of freedom could invalidate the model.

For a two-level truncation, the final item matters. Strong driving, near resonance with a discarded level, leakage, or environmental coupling can make $\\mathbb C^2$ inadequate. Exact algebra inside an inadequate model is not an exact physical prediction.

## 9. Common errors

- Using a transpose instead of a conjugate transpose.
- Treating amplitudes as probabilities before alternatives have been combined.
- Normalizing probabilities while leaving the state vector unnormalized.
- Calling two vectors different when they differ only by global phase.
- Calling a basis change a physical time evolution without specifying an active map.
- Assuming a composite pure state factors into subsystem pure states.
- Presenting the Hilbert-space postulate as an explanation of a preparation device.

## Coordinates in an overlapping basis need a Gram metric

Take basis vectors e₁=(1,0) and e₂=(1,1)/√2. They are normalized
and independent, but not orthogonal. A coordinate vector with entries
one divided by √2 and one divided by √2 does not produce a
normalized physical vector: expanding the squared norm gives one plus
one divided by √2. The cross term records the overlap of the
basis vectors. In general coefficients c have physical norm squared
c†Gc, where G contains all basis inner products, rather than c†c.

This distinction is separate from choosing nonorthogonal preparations
as possible signals. Their rank-one projectors do not describe
mutually exclusive outcomes of an orthonormal-basis measurement and
need not sum to the identity. Coordinate expansion coefficients
and measurement amplitudes coincide in the familiar orthonormal
case, which can hide the hypotheses. A Gram matrix restores
the coordinate metric; a valid measurement still needs its own
complete effect or projector specification. Neither can be inferred
from normalization of the individual basis vectors alone.

## Exercises with complete solutions

<a id="complex-state-spaces-ex-1"></a>

### 1. Conjugation and modulus
Compute $(2-3i)^*$, $|2-3i|^2$, and its inverse.

<details>
<summary>Hint 1</summary>

Reverse the sign of the imaginary part to form the conjugate.

</details>

<details>
<summary>Hint 2</summary>

Multiply numerator and denominator by that conjugate to find the inverse.

</details>

<details>
<summary>Full solution</summary>

The conjugate is $2+3i$, the squared modulus is $4+9=13$, and the inverse is $(2+3i)/13$ because $(2-3i)(2+3i)=13$.

</details>

<a id="complex-state-spaces-ex-2"></a>

### 2. Normalize a state
Normalize $(1,1+i)^\\mathsf T$.

<details>
<summary>Hint 1</summary>

Add the squared magnitudes of the two components.

</details>

<details>
<summary>Hint 2</summary>

Divide every component by the same positive square root of that sum.

</details>

<details>
<summary>Full solution</summary>

Its norm squared is $1+|1+i|^2=3$, so the normalized vector is $(1,1+i)^\\mathsf T/\\sqrt3$.

</details>

<a id="complex-state-spaces-ex-3"></a>

### 3. Detect a bad inner product
Why cannot $u^\\mathsf T v$ be the standard complex inner product?

<details>
<summary>Hint 1</summary>

Test the proposed expression on a nonzero vector containing an imaginary component.

</details>

<details>
<summary>Hint 2</summary>

An inner product must give a strictly positive real squared norm for every nonzero vector.

</details>

<details>
<summary>Full solution</summary>

It need not be positive: for $u=(1,i)^\\mathsf T$, $u^\\mathsf T u=1+i^2=0$ although $u$ is nonzero. Conjugation repairs positivity.

</details>

<a id="complex-state-spaces-ex-4"></a>

### 4. Orthogonality
Find a normalized vector orthogonal to $(1,i)^\\mathsf T/\\sqrt2$.

<details>
<summary>Hint 1</summary>

Write the conjugate row of the given vector before solving the orthogonality equation.

</details>

<details>
<summary>Hint 2</summary>

A vector proportional to (i,1) has the required cancellation; normalize it afterward.

</details>

<details>
<summary>Full solution</summary>

Take $(i,1)^\\mathsf T/\\sqrt2$. The inner product is $(1,-i)(i,1)^\\mathsf T/2=(i-i)/2=0$.

</details>

<a id="complex-state-spaces-ex-5"></a>

### 5. Global phase
Show that $\\langle e_j\\rvert e^{i\\chi}\\lvert\\psi\\rangle$ and $\\langle e_j\\mid\\psi\\rangle$ give the same squared magnitude.

<details>
<summary>Hint 1</summary>

The inner product is linear in its second slot.

</details>

<details>
<summary>Hint 2</summary>

The global multiplier has modulus one and therefore disappears after taking a squared modulus.

</details>

<details>
<summary>Full solution</summary>

The first amplitude is $e^{i\\chi}\\langle e_j\\mid\\psi\\rangle$. Since the multiplier has modulus one, its squared magnitude is unchanged.

</details>

<a id="complex-state-spaces-ex-6"></a>

### 6. Relative phase
Show that $\\lvert+\\rangle$ and $\\lvert-\\rangle$ are orthogonal.

<details>
<summary>Hint 1</summary>

Write the two coefficient columns in the same orthonormal basis.

</details>

<details>
<summary>Hint 2</summary>

The two diagonal products are one half and minus one half.

</details>

<details>
<summary>Full solution</summary>

Their inner product is $(1-1)/2=0$. The minus sign is a relative phase and changes the ray.

</details>

<a id="complex-state-spaces-ex-7"></a>

### 7. Parseval in two dimensions
If $u,v$ are an orthonormal basis, prove $|\\langle u\\mid\\psi\\rangle|^2+|\\langle v\\mid\\psi\\rangle|^2=1$ for normalized $\\psi$.

<details>
<summary>Hint 1</summary>

Expand the vector in the full orthonormal basis.

</details>

<details>
<summary>Hint 2</summary>

Take the squared norm and cancel cross terms using orthogonality.

</details>

<details>
<summary>Full solution</summary>

Expand $\\psi=\\langle u\\mid\\psi\\rangle u+\\langle v\\mid\\psi\\rangle v$; orthogonality removes cross terms when taking the norm squared, leaving the stated sum.

</details>

<a id="complex-state-spaces-ex-8"></a>

### 8. Unit-vector parameterization
Verify that $\\cos(\\theta/2)\\lvert0\\rangle+e^{i\\phi}\\sin(\\theta/2)\\lvert1\\rangle$ is normalized.

<details>
<summary>Hint 1</summary>

The complex exponential has unit magnitude for a real angle.

</details>

<details>
<summary>Hint 2</summary>

The two squared real trigonometric magnitudes add to one.

</details>

<details>
<summary>Full solution</summary>

The squared norm is $\\cos^2(\\theta/2)+|e^{i\\phi}|^2\\sin^2(\\theta/2)=1$.

</details>

<a id="complex-state-spaces-ex-9"></a>

### 9. Passive coordinate change
If basis columns form $U$, why are new coordinates $U^\\dagger c$?

<details>
<summary>Hint 1</summary>

Express the old coordinate column as the new basis matrix times the new coordinates.

</details>

<details>
<summary>Hint 2</summary>

Use the unitary inverse on the left; do not apply an active operation to the physical state.

</details>

<details>
<summary>Full solution</summary>

The physical vector satisfies $c=Uc'$. Multiplying by $U^\\dagger$ and using $U^\\dagger U=I$ gives $c'=U^\\dagger c$.

</details>

<a id="complex-state-spaces-ex-10"></a>

### 10. A unitary matrix
Verify $H=\\frac1{\\sqrt2}\\begin{pmatrix}1&1\\\\1&-1\\end{pmatrix}$ is unitary.

<details>
<summary>Hint 1</summary>

Check the inner products of its two columns.

</details>

<details>
<summary>Hint 2</summary>

For a square matrix, orthonormal columns imply that its conjugate transpose is its inverse.

</details>

<details>
<summary>Full solution</summary>

It is real symmetric and its columns have unit norm and zero inner product, so $H^\\dagger H=I$.

</details>

<a id="complex-state-spaces-ex-11"></a>

### 11. Projection
For normalized $u$, prove $P_u^2=P_u$.

<details>
<summary>Hint 1</summary>

Multiply the two rank-one outer products in their stated order.

</details>

<details>
<summary>Hint 2</summary>

The middle scalar is the inner product of the normalized vector with itself.

</details>

<details>
<summary>Full solution</summary>

$P_u^2=\\lvert u\\rangle\\langle u\\mid u\\rangle\\langle u\\rvert=\\lvert u\\rangle\\langle u\\rvert=P_u$ because $\\langle u\\mid u\\rangle=1$.

</details>

<a id="complex-state-spaces-ex-12"></a>

### 12. Project a vector
Project $(1,0)^\\mathsf T$ onto the span of $(1,1)^\\mathsf T/\\sqrt2$.

<details>
<summary>Hint 1</summary>

First find the overlap coefficient with the unit spanning vector.

</details>

<details>
<summary>Hint 2</summary>

Multiply that coefficient by the spanning vector; the result is not itself generally normalized.

</details>

<details>
<summary>Full solution</summary>

The coefficient is $1/\\sqrt2$, so the projection is $\\tfrac12(1,1)^\\mathsf T$.

</details>

<a id="complex-state-spaces-ex-13"></a>

### 13. Pythagorean decomposition
Show $P_uv$ is orthogonal to $(I-P_u)v$.

<details>
<summary>Hint 1</summary>

Move the self-adjoint projection into the second slot.

</details>

<details>
<summary>Hint 2</summary>

Its product with the complementary projection is zero by idempotence.

</details>

<details>
<summary>Full solution</summary>

Their inner product is $\\langle v\\rvert P_u(I-P_u)\\lvert v\\rangle$. Since $P_u-P_u^2=0$, it vanishes.

</details>

<a id="complex-state-spaces-ex-14"></a>

### 14. Same basis probabilities
Give two non-equivalent pure states with equal $0,1$ probabilities.

<details>
<summary>Hint 1</summary>

Keep both component magnitudes fixed and change their relative phase.

</details>

<details>
<summary>Hint 2</summary>

Compare the ratios of the second coefficient to the first; a global phase leaves that ratio unchanged.

</details>

<details>
<summary>Full solution</summary>

$\\lvert+\\rangle$ and $(\\lvert0\\rangle+i\\lvert1\\rangle)/\\sqrt2$ both give halves. They are not global-phase multiples because their component ratios are $1$ and $i$.

</details>

<a id="complex-state-spaces-ex-15"></a>

### 15. Destructive interference
Compute the sum of amplitudes $1/\\sqrt2$ and $-1/\\sqrt2$.

<details>
<summary>Hint 1</summary>

Combine indistinguishable-path amplitudes before forming a probability.

</details>

<details>
<summary>Hint 2</summary>

The two real amplitudes have equal magnitude and opposite sign.

</details>

<details>
<summary>Full solution</summary>

The sum is zero, hence the probability associated with that combined amplitude is zero. Squaring first would incorrectly give a total of one.

</details>

<a id="complex-state-spaces-ex-16"></a>

### 16. Tensor dimension
How many complex coordinates describe a vector in $\\mathbb C^3\\otimes\\mathbb C^4$?

<details>
<summary>Hint 1</summary>

Use all pairs of basis labels.

</details>

<details>
<summary>Hint 2</summary>

The dimension of a finite tensor product is the product of the two dimensions.

</details>

<details>
<summary>Full solution</summary>

The tensor-product dimension is $3\\cdot4=12$.

</details>

<a id="complex-state-spaces-ex-17"></a>

### 17. Expand a product
Expand $(\\lvert0\\rangle+\\lvert1\\rangle)\\otimes(\\lvert0\\rangle-\\lvert1\\rangle)/2$.

<details>
<summary>Hint 1</summary>

Distribute each term in the first factor across both terms in the second.

</details>

<details>
<summary>Hint 2</summary>

Keep the common factor one half and retain the signs of the second factor.

</details>

<details>
<summary>Full solution</summary>

Distributivity gives $(\\lvert00\\rangle-\\lvert01\\rangle+\\lvert10\\rangle-\\lvert11\\rangle)/2$, which is normalized.

</details>

<a id="complex-state-spaces-ex-18"></a>

### 18. Nonfactorization check
Why can $(\\lvert00\\rangle+\\lvert11\\rangle)/\\sqrt2$ not equal $(a\\lvert0\\rangle+b\\lvert1\\rangle)\\otimes(c\\lvert0\\rangle+d\\lvert1\\rangle)$?

<details>
<summary>Hint 1</summary>

Compare the four product coefficients ac, ad, bc and bd.

</details>

<details>
<summary>Hint 2</summary>

The two nonzero diagonal coefficients force all four factors nonzero, contradicting the zero off-diagonal coefficients.

</details>

<details>
<summary>Full solution</summary>

Coefficients would require $ac$ and $bd$ nonzero but $ad=bc=0$. Nonzero $ac$ forces $a,c$ nonzero, so $ad=0$ gives $d=0$; then $bd=0$, contradicting its required nonzero value.

</details>

<a id="complex-state-spaces-ex-19"></a>

### 19. Truncation boundary
Name one reason a two-state model can fail despite correct normalization.

<details>
<summary>Hint 1</summary>

Normalization is an internal algebraic requirement, not proof that the chosen space contains all populated levels.

</details>

<details>
<summary>Hint 2</summary>

Consider a physical drive that excites a state omitted from the two-dimensional truncation.

</details>

<details>
<summary>Full solution</summary>

A drive can populate a neglected third energy level. Normalization within $\\mathbb C^2$ then hides leakage rather than describing it.

</details>

<a id="complex-state-spaces-ex-20"></a>

### 20. State equality audit
Are $(1,i)^\\mathsf T/\\sqrt2$ and $(i,-1)^\\mathsf T/\\sqrt2$ physically distinct pure states?

<details>
<summary>Hint 1</summary>

Multiply the first vector by a unit-modulus complex scalar.

</details>

<details>
<summary>Hint 2</summary>

The multiplier i turns both components into those of the second vector.

</details>

<details>
<summary>Full solution</summary>

No. Multiplying the first by $i$ gives $(i,-1)^\\mathsf T/\\sqrt2$, so they represent the same ray.

</details>

## Chapter summary

Finite quantum state spaces are complex inner-product spaces. Normalized vectors represent rays; relative phase, orthogonality, projection, unitary basis changes, and tensor products are the essential structures. None of these removes the need to specify a preparation and a model boundary. The next chapter adds observables and turns amplitudes into outcome probabilities.

[Next chapter](#/item/book-two-state-quantum-mechanics?chapter=observables-spectra-measurement) · [Book overview](#/item/book-two-state-quantum-mechanics)
`;export{e as default};