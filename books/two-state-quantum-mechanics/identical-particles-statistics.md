
# Identical Particles and Quantum Statistics

Identical quantum particles are not assigned persistent observable labels. Permuting formal tensor factors must leave physical predictions unchanged. In three spatial dimensions, ordinary bosonic and fermionic sectors realize symmetric and antisymmetric exchange behavior; lower-dimensional and field-theoretic settings broaden the story.

## 1. Exchange operator

For two single-particle states, define $\Pi|a\rangle|b\rangle=|b\rangle|a\rangle$. It is unitary, Hermitian, and satisfies $\Pi^2=I$, so its eigenvalues are $\pm 1$. Symmetrizers are

$P_{+}=(I+\Pi)/2$, $P_{-}=(I-\Pi)/2$.

Bosonic states lie in the symmetric sector, fermionic states in the antisymmetric sector.

The one-particle space includes every retained internal degree of freedom, such as spin. The tensor slots are mathematical arguments of a wave function, not observable name tags attached to identical objects. An allowed observable in the fixed identical-particle model commutes with the permutation action, so the sign of a fermionic vector under exchange does not change its expectation. Selecting ordinary bosonic or fermionic sectors is a physical statistics assumption; permutation algebra by itself is not the relativistic spin-statistics theorem.

For $N\ge2$, let $U_\pi$ permute the tensor factors according to $U_\pi(v_1\otimes\cdots\otimes v_N)=v_{\pi^{-1}(1)}\otimes\cdots\otimes v_{\pi^{-1}(N)}$. Then $U_\pi U_\sigma=U_{\pi\sigma}$ and $U_\pi^\dagger=U_{\pi^{-1}}$. The group averages

$$S_N=\frac1{N!}\sum_\pi U_\pi,\qquad A_N=\frac1{N!}\sum_\pi\operatorname{sgn}(\pi)U_\pi$$

are orthogonal projections onto the totally symmetric and antisymmetric subspaces. To prove idempotence, group each double sum by $\tau=\pi\sigma$: there are $N!$ pairs for each $\tau$, and signs multiply to $\operatorname{sgn}\tau$. Taking adjoints just replaces each permutation by its inverse, leaving the sums unchanged. Their product is zero because even and odd permutations are equally numerous. For $N\ge3$, these two projections need not sum to the identity on the entire labeled tensor space; other permutation representations exist mathematically. The ordinary sector choice is therefore stated explicitly rather than deduced from a false two-projector completeness assertion for every $N$.

## 2. Two-particle states

For orthonormal orbitals $u,v$, normalized states are

$(|u\rangle|v\rangle \pm |v\rangle|u\rangle)/\sqrt{2}$.

If $u=v$, the antisymmetric combination vanishes. This is the Pauli exclusion statement for identical fermions occupying all the same one-particle quantum numbers.

## 3. Slater determinants and permanents

### Worked example: overlapping orbitals need different normalization

Let $u,v$ be normalized with overlap $s=\langle u|v\rangle$. The two product-vector norms are one and their cross inner product is $|s|^2$. Therefore

$$\|u\otimes v\pm v\otimes u\|^2=2(1\pm|s|^2).$$

Divide by $\sqrt{2(1+|s|^2)}$ for bosons, and by $\sqrt{2(1-|s|^2)}$ for fermions when $|s|<1$. The simple $\sqrt2$ factor requires orthogonality. If $v$ is a phase multiple of $u$, the antisymmetric numerator is zero and cannot be normalized, while the symmetric state reduces to the doubly occupied orbital up to phase. This proves exclusion for the full one-particle state rather than only for one spatial coordinate.

For orthogonal $u,v$, either exchange sign gives the same normalized one-particle reduction $(|u\rangle\langle u|+|v\rangle\langle v|)/2$. The cross terms disappear under tracing because the omitted orbitals are orthogonal. Thus identical one-particle marginals do not reveal the exchange sign; two-particle correlations carry that difference. This is another reason to distinguish a subsystem statistical summary from a uniquely labeled microscopic assignment.

An $N$-fermion state built from orthonormal orbitals is a normalized Slater determinant. Repeating a column makes it zero. Bosonic symmetrization uses a permanent-like sum and permits repeated orbitals.

Antisymmetry creates exchange correlations even without an interaction potential. It does not by itself imply a classical repulsive force. Symmetry and dynamics are separate.

For orthonormal orbitals $u_1,\ldots,u_N$, the Slater vector is $(N!)^{-1/2}\sum_\pi\operatorname{sgn}(\pi)U_\pi(u_1\otimes\cdots\otimes u_N)$. Its $N!$ product terms are mutually orthogonal, proving normalization. Interchanging two slots reverses the sign by relabeling permutations. A repeated orbital makes paired terms cancel, equivalently making two determinant columns equal.

With nonorthogonal orbitals, the same scaled determinant has squared norm $\det G$, where $G_{ij}=\langle u_i|u_j\rangle$. Expand the squared sum; regrouping by the relative permutation produces the determinant formula $\sum_\tau\operatorname{sgn}(\tau)\prod_iG_{i,\tau(i)}$. It is positive exactly when the orbitals are linearly independent, by the Gram determinant criterion. An additional factor $(\det G)^{-1/2}$ is then needed for unit norm. The corresponding bosonic sum has plus signs and a permanent rather than a determinant; repeated orbitals are allowed but change combinatorial normalization.

## 4. Occupation-number language

For an orthonormal Slater determinant the normalized one-body reduction is $\rho^{(1)}=N^{-1}\sum_{i=1}^N|u_i\rangle\langle u_i|$. In tracing the permutation expansion, orthogonality cancels unequal assignments in the omitted slots; each occupied orbital appears equally often in the retained slot. This matrix has trace one, while the occupation matrix $N\rho^{(1)}$ has trace $N$ and eigenvalue one on each occupied mode. Mixing those two normalization conventions can falsely turn a valid fermionic state into an apparent exclusion violation.

A permutation-invariant one-body observable is $\sum_{j=1}^N A^{(j)}$, and its expectation is $N\operatorname{Tr}(\rho^{(1)}A)$. It does not measure the identity of one named particle. For $N$ bosons all in the same normalized orbital, the corresponding normalized reduction is instead the pure projector $|u\rangle\langle u|$, and the same total-observable formula gives $N\langle u|A|u\rangle$. Thus the trace and interpretation of the reduced operator must be declared alongside exchange symmetry and mode occupation.

Fock states record occupation numbers $|n_1,n_2,\dots\rangle$. Bosonic occupations are nonnegative integers; fermionic occupations are zero or one per mode. Creation and annihilation operators obey commutators for bosons and anticommutators for fermions.

Particle number may be fixed in nonrelativistic models. In quantum field theory, creation and annihilation acquire a deeper role and particle number need not be conserved.

## 5. Spin and spatial symmetry

For $d$ orthonormal modes and fixed $N$, a bosonic occupation basis has $\binom{N+d-1}{N}$ states: distributing $N$ indistinguishable occupancies among $d$ modes is the stars-and-bars count. Fermionic occupation states correspond to $N$-element subsets of modes and number $\binom dN$, or zero if $N>d$. These are dimensions of the selected sectors, not extra labels for individual particles. Summing all fermionic sectors gives dimension $2^d$.

On bosonic finite-occupation vectors, $a_j|\ldots,n_j,\ldots\rangle=\sqrt{n_j}|\ldots,n_j-1,\ldots\rangle$ and creation has coefficient $\sqrt{n_j+1}$. Successive action gives $[a_j,a_k^\dagger]=\delta_{jk}I$. With unrestricted particle number these are unbounded operators and require their finite-occupation core and closures. A fixed-$N$ space is not invariant under a creation operator: it maps into the next number sector.

For fermions, fix an ordering of modes. An annihilator has the sign $(-1)^{\sum_{i<j}n_i}$ when removing an occupied $j$ and gives zero when it is empty; creation uses the same sign and gives zero when already occupied. Exchanging the order of two mode operations supplies the minus sign, proving $\{f_j,f_k^\dagger\}=\delta_{jk}I$ and $\{f_j,f_k\}=0$. A single mode has matrices $f=\begin{pmatrix}0&1\\0&0\end{pmatrix}$ and $f^\dagger=\begin{pmatrix}0&0\\1&0\end{pmatrix}$ on empty/occupied states, so $f^2=0$ and the anticommutator is identity. This finite anticommutator algebra does not contradict the impossibility of a finite canonical **commutator**. In both cases the number operator sums the occupations.

For identical fermions the total state must be antisymmetric. A two-spin singlet is antisymmetric in spin, so its spatial factor must be symmetric; triplet spin states are symmetric, requiring an antisymmetric spatial factor. This bookkeeping assumes the particles are identical and all degrees of freedom are included.

## 6. Statistics boundary

### Worked example: two noninteracting fermions in a well

Take two identical spin-half fermions in the same one-dimensional Dirichlet well, ignoring their interaction. The spatial levels have $E_n=n^2E_1$. Both can occupy the first spatial orbital if their total spin is the singlet: the symmetric spatial factor $\phi_1(x_1)\phi_1(x_2)$ times the antisymmetric spin vector is a valid total fermion state. Its energy is $2E_1$. Opposite spin labels make the two complete one-particle modes distinct, so exclusion is respected.

If both spins are constrained up, the spin factor is symmetric and the spatial factor must be antisymmetric. The lowest available pair is then $(\phi_1(x_1)\phi_2(x_2)-\phi_2(x_1)\phi_1(x_2))/\sqrt2$, with energy $E_1+E_2=5E_1$. The difference $3E_1$ arises from the admissible state space, with no new repulsive potential added. Real electrons also interact, and their well and spin constraints need physical modeling; this calculation isolates the exchange effect rather than attributing every observed energy shift to it.

### Worked example: two-mode exchange interference

Let two identical bosons occupy input modes $a,b$, one in each, with no distinguishing internal record. A balanced real mode transformation may be written $a^\dagger=(c^\dagger+d^\dagger)/\sqrt2$, $b^\dagger=(c^\dagger-d^\dagger)/\sqrt2$. The input is already normalized. Bosonic commutation cancels the two mixed terms:

$$a^\dagger b^\dagger|\mathrm{vac}\rangle=\tfrac12[(c^\dagger)^2-(d^\dagger)^2]|\mathrm{vac}\rangle
=\frac{|2,0\rangle-|0,2\rangle}{\sqrt2}.$$

Both particles exit together in either output mode, with equal probabilities, and coincidence $|1,1\rangle$ is absent. For identical fermions in the same internal state, the squared creation terms vanish and anticommutation instead leaves $-c^\dagger d^\dagger|\mathrm{vac}\rangle$: one occupies each output mode. For distinguishable internal states the cancellation need not occur because the two alternatives retain a record of their distinction. Therefore a coincidence prediction needs mode overlap and internal-state assumptions as well as the nominal beam-splitting matrix. The exchange algebra predicts the ideal interference; it does not validate a real source's indistinguishability or detector efficiency.

The spin-statistics theorem connecting integer spin to bosons and half-integer spin to fermions belongs to relativistic quantum field theory under locality, positivity, and other assumptions. It is not derived from nonrelativistic exchange algebra alone. In two dimensions, braid statistics can support anyonic behavior.

## A mixed particle-label reduction need not mean usable entanglement

Take a normalized Slater determinant built from N orthonormal one-particle
orbitals. The full antisymmetric vector is pure. Trace out all
but one tensor label in its first-quantized expression. Orthogonality
makes all cross terms with different remaining orbital labels vanish,
and symmetry gives each occupied orbital the same weight. The
trace-one reduction is therefore
$$\rho^{(1)}=\frac1N\sum_{i=1}^N|\phi_i\rangle\langle\phi_i|.$$
Its purity is one divided by N, although the original determinant
contains no correlations beyond the required antisymmetrization of
those orbitals. The trace-N one-body density matrix instead has
unit occupation eigenvalues on the same occupied space. These are
different normalizations of related data, and their purities should
not be compared as though both were normalized system states.

For distinguishable labeled subsystems, a mixed marginal of a
global pure state diagnoses entanglement across that tensor partition.
For identical particles, the formal tensor labels do not necessarily
identify independently addressable laboratories. Exchange symmetry
constrains which labeled operations represent physical observables.
Consequently the same diagnostic cannot automatically be interpreted
as an amount of entanglement available to two separated observers.
One must first specify the accessible mode or spatial subsystems
and the allowed operations.

A single particle coherently occupying two modes illustrates the
choice. In the mode occupation basis, its vector is a superposition
of |1,0⟩ and |0,1⟩. A beam splitter mixing the modes can reveal
their relative phase. A classical mixture of the two occupations
has the same average occupation at each mode but different interference.
Thus mode coherence is meaningful even with only one particle.
Whether it functions as an entanglement resource for two observers
depends on what local operations, number-changing references and
communication are supplied. The abstract vector alone does not
settle that operational question.

This is why a claim involving identical particles should name its
partition. Correlations between commuting mode observables, antisymmetric
particle-label reductions and entanglement under a stated local
operation class answer related but different questions. The exchange
algebra and occupation formulas developed here remain exact in each
description; the interpretation of a reduction changes with the
subsystems that are actually available.

For the two fermions in the well, the occupied-orbital projector
already determines every one-body expectation through its trace
pairing with the one-body operator. Pair observables may require
the two-body state and its exchange terms. Knowing all single-particle
occupations is therefore sufficient for one declared family of
measurements, rather than a complete description of every correlation
that a many-particle experiment can probe.

## The exclusion bound applies in every normalized fermion mode

For a normalized fermionic mode, anticommutation gives
aa†+a†a=I and a²=0. Its occupation operator n=a†a
is positive and satisfies n²=n by substitution.
It is a projection, so every state's occupation
expectation lies between zero and one. A unitary
change of one-particle basis gives the same algebra
for every normalized mode, not only the original
coordinate orbitals.

Consequently the trace-N one-body density operator
of an N-fermion state has all occupation eigenvalues
at most one and total trace N. The trace-one
single-label reduction has eigenvalues at most
one divided by N. This statement survives interactions
and mixtures when particle number is fixed; a
single Slater determinant is the special case
with exactly zero-or-one occupations. Bosonic modes
obey different algebra and have no analogous upper
bound of one. The normalization and the statistics
must both be specified before comparing one-body
spectra across preparations.

## Exercises with complete solutions

<a id="identical-particles-statistics-ex-1"></a>

### 1. Exchange squared
Show $\Pi^2=I$.

<details>
<summary>Hint 1</summary>

Apply the swap to an arbitrary product basis vector twice.

</details>

<details>
<summary>Hint 2</summary>

Linearity extends that identity to the entire two-factor space.

</details>

<details>
<summary>Full solution</summary>

Swapping two factors twice returns the original tensor.

</details>

<a id="identical-particles-statistics-ex-2"></a>

### 2. Exchange adjoint
Why is $\Pi$ Hermitian?

<details>
<summary>Hint 1</summary>

The swap preserves inner products of product basis vectors.

</details>

<details>
<summary>Hint 2</summary>

Its inverse is itself, so unitarity identifies its adjoint.

</details>

<details>
<summary>Full solution</summary>

It is unitary and equals its inverse because $\Pi^2=I$; hence $\Pi^{\dagger}=\Pi$.

</details>

<a id="identical-particles-statistics-ex-3"></a>

### 3. Symmetrizer idempotence
Show $P_{+}^{2}=P_{+}$.

<details>
<summary>Hint 1</summary>

Expand the square of I plus the swap.

</details>

<details>
<summary>Hint 2</summary>

Replace the swap squared by identity.

</details>

<details>
<summary>Full solution</summary>

$(I+2\Pi+\Pi^2)/4=(I+\Pi)/2=P_{+}$.

</details>

<a id="identical-particles-statistics-ex-4"></a>

### 4. Orthogonal sectors
Show $P_{+}P_{-}=0$.

<details>
<summary>Hint 1</summary>

Multiply the plus and minus factors before dividing by four.

</details>

<details>
<summary>Hint 2</summary>

Their cross terms cancel and the squared-swap term cancels identity.

</details>

<details>
<summary>Full solution</summary>

$(I+\Pi)(I-\Pi)/4=(I-\Pi^2)/4=0$.

</details>

<a id="identical-particles-statistics-ex-5"></a>

### 5. Symmetric normalization
Normalize $|u\rangle|v\rangle+|v\rangle|u\rangle$ for orthogonal orbitals.

<details>
<summary>Hint 1</summary>

Compute the cross overlap of the two product terms.

</details>

<details>
<summary>Hint 2</summary>

Orthogonality of u and v makes it zero, leaving squared norm two.

</details>

<details>
<summary>Full solution</summary>

The two terms are orthogonal, so divide by $\sqrt{2}$.

</details>

<a id="identical-particles-statistics-ex-6"></a>

### 6. Same bosonic orbital
What is the normalized state when both occupy $u$?

<details>
<summary>Hint 1</summary>

Set the two orbitals equal before normalizing.

</details>

<details>
<summary>Hint 2</summary>

A duplicated symmetrized term is still the same product ray.

</details>

<details>
<summary>Full solution</summary>

Simply $|u\rangle|u\rangle$; applying the symmetrizer produces a factor that is removed on normalization.

</details>

<a id="identical-particles-statistics-ex-7"></a>

### 7. Fermionic exclusion
Antisymmetrize $|u\rangle|u\rangle$.

<details>
<summary>Hint 1</summary>

Exchange equal full one-particle states in the two terms.

</details>

<details>
<summary>Hint 2</summary>

The subtraction cancels exactly and has no nonzero normalization.

</details>

<details>
<summary>Full solution</summary>

The two identical terms cancel, giving zero.

</details>

<a id="identical-particles-statistics-ex-8"></a>

### 8. Exchange eigenvalue
What eigenvalue has the antisymmetric state?

<details>
<summary>Hint 1</summary>

Apply the swap to both terms of the antisymmetric vector.

</details>

<details>
<summary>Hint 2</summary>

Factor the common minus sign from the reordered expression.

</details>

<details>
<summary>Full solution</summary>

$-1$.

</details>

<a id="identical-particles-statistics-ex-9"></a>

### 9. Determinant repeat
Why does a repeated orbital kill a Slater determinant?

<details>
<summary>Hint 1</summary>

A determinant changes sign on swapping equal columns.

</details>

<details>
<summary>Hint 2</summary>

The same unchanged matrix would therefore have to equal its negative.

</details>

<details>
<summary>Full solution</summary>

Two equal columns make a determinant zero.

</details>

<a id="identical-particles-statistics-ex-10"></a>

### 10. Fermion occupations
What values may one mode occupation take?

<details>
<summary>Hint 1</summary>

The creation operator squared for one fermionic mode is zero.

</details>

<details>
<summary>Hint 2</summary>

Occupation records the empty or filled status of that complete mode.

</details>

<details>
<summary>Full solution</summary>

Zero or one.

</details>

<a id="identical-particles-statistics-ex-11"></a>

### 11. Boson occupations
What values may it take?

<details>
<summary>Hint 1</summary>

The symmetric sector allows repeated copies of one mode.

</details>

<details>
<summary>Hint 2</summary>

There is no exclusion upper bound in this ideal bosonic model.

</details>

<details>
<summary>Full solution</summary>

Any nonnegative integer in the ideal mode model.

</details>

<a id="identical-particles-statistics-ex-12"></a>

### 12. Number count
How many particles are in $|2,0,3\rangle$?

<details>
<summary>Hint 1</summary>

The total number operator sums the mode occupations.

</details>

<details>
<summary>Hint 2</summary>

Empty modes contribute zero.

</details>

<details>
<summary>Full solution</summary>

$2+0+3=5$.

</details>

<a id="identical-particles-statistics-ex-13"></a>

### 13. Spin singlet exchange
What happens to $(|\uparrow\downarrow\rangle-|\downarrow\uparrow\rangle)/\sqrt{2}$ under spin exchange?

<details>
<summary>Hint 1</summary>

Exchange the two spin slots in both terms.

</details>

<details>
<summary>Hint 2</summary>

The difference reverses its sign.

</details>

<details>
<summary>Full solution</summary>

It gains a minus sign.

</details>

<a id="identical-particles-statistics-ex-14"></a>

### 14. Triplet exchange
What symmetry has $(|\uparrow\downarrow\rangle+|\downarrow\uparrow\rangle)/\sqrt{2}$?

<details>
<summary>Hint 1</summary>

Exchange the two spin slots in the sum.

</details>

<details>
<summary>Hint 2</summary>

The two terms merely interchange places.

</details>

<details>
<summary>Full solution</summary>

It is symmetric.

</details>

<a id="identical-particles-statistics-ex-15"></a>

### 15. Fermion singlet space
What symmetry must its spatial factor have?

<details>
<summary>Hint 1</summary>

Multiply the spin and spatial exchange eigenvalues.

</details>

<details>
<summary>Hint 2</summary>

Their total must be minus one for the stated fermion sector.

</details>

<details>
<summary>Full solution</summary>

Symmetric, so spin antisymmetry times spatial symmetry is total antisymmetry.

</details>

<a id="identical-particles-statistics-ex-16"></a>

### 16. Fermion triplet space
What symmetry must its spatial factor have?

<details>
<summary>Hint 1</summary>

The triplet contributes plus one under spin exchange.

</details>

<details>
<summary>Hint 2</summary>

The spatial factor must supply the missing minus sign.

</details>

<details>
<summary>Full solution</summary>

Antisymmetric.

</details>

<a id="identical-particles-statistics-ex-17"></a>

### 17. Exchange force
Does antisymmetry imply a new fundamental repulsive potential?

<details>
<summary>Hint 1</summary>

The antisymmetric subspace changes allowed wave functions.

</details>

<details>
<summary>Hint 2</summary>

A force law would be an additional Hamiltonian term, absent from the noninteracting example.

</details>

<details>
<summary>Full solution</summary>

No. It constrains state structure and correlations; it is not an added classical force law.

</details>

<a id="identical-particles-statistics-ex-18"></a>

### 18. Distinguishable particles
Must their state be exchange symmetric?

<details>
<summary>Hint 1</summary>

The physical subsystem labels are part of the model.

</details>

<details>
<summary>Hint 2</summary>

Interchanging distinguishable assignments need not represent the same physical preparation.

</details>

<details>
<summary>Full solution</summary>

No. If physical labels distinguish the subsystems, swapping labels describes a different assignment.

</details>

<a id="identical-particles-statistics-ex-19"></a>

### 19. Spin-statistics proof
Can nonrelativistic symmetrization alone prove half-integer particles are fermions?

<details>
<summary>Hint 1</summary>

Permutation algebra can define either sector without referring to relativistic fields.

</details>

<details>
<summary>Hint 2</summary>

The theorem linking spin and statistics needs its locality, positivity and relativistic assumptions.

</details>

<details>
<summary>Full solution</summary>

No. That connection needs the relativistic spin-statistics theorem and its assumptions.

</details>

<a id="identical-particles-statistics-ex-20"></a>

### 20. Two-dimensional boundary
Are bosons and fermions the only exchange possibilities in two dimensions?

<details>
<summary>Hint 1</summary>

Exchange paths depend on spatial configuration-space topology.

</details>

<details>
<summary>Hint 2</summary>

The two-dimensional braid group is different from merely assigning a sign to a permutation.

</details>

<details>
<summary>Full solution</summary>

No. Braid topology can support anyonic statistics.

</details>

## Project: symmetry-resolved state builder

Write a dependency-free exact or floating-point tool that accepts two or three labeled one-particle vectors and constructs normalized symmetric and antisymmetric tensors. Report norms, exchange eigenvalue residuals, repeated-orbital behavior, and one-particle reductions in text tables. Compare orthogonal and overlapping orbitals, and distinguish numerical residuals from the physical assumption that particles are identical.

## Chapter summary

Exchange symmetry selects bosonic and fermionic sectors, Slater determinants encode exclusion, and occupation numbers replace fictitious persistent particle labels. Exchange correlations are structural rather than an added force, and the spin-statistics connection requires relativistic field-theory hypotheses.

[Previous chapter](tensor-products-entanglement.md) · [Next chapter](generalized-measurements-channels.md) · [Book overview](#/books/two-state-quantum-mechanics)
