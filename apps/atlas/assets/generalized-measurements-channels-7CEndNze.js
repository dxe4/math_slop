var e=`---
parent_id: book-two-state-quantum-mechanics
chapter_id: generalized-measurements-channels
title: "Generalized Measurements and Quantum Channels"
level: advanced-undergraduate
estimated_minutes: 225
license: CC BY-SA 4.0
status: draft
---

# Generalized Measurements and Quantum Channels

Projective measurements are only one ideal instrument. General measurements use positive effects for outcome probabilities and completely positive maps for state change. Quantum channels describe the most general deterministic evolution compatible with adjoining an untouched ancillary system.

## 1. POVMs

The density-operator, ensemble and purity prerequisites are proved in [Mixed States and Ensembles](mixed-states-ensembles.md). The earlier statistical measurement source's three antipodal decompositions of $I/2$ are all instances of the same calculation: equal mixtures of the two eigenprojectors of any Pauli axis give $I/2$. In particular the $Y$ eigenstates $(|0\\rangle\\pm i|1\\rangle)/\\sqrt2$ cancel their imaginary off-diagonal terms. No measurement on this system alone distinguishes those ensemble choices; extra preparation records enlarge the specified state.

A positive-operator-valued measure with finite outcomes is a collection $\\{E_y\\}$ satisfying $E_y\\geq 0$ and $\\sum_{y} E_y=I$. In state $\\rho$,

$p(y)=\\operatorname{Tr}(\\rho E_y)$.

Effects need not be projectors or mutually orthogonal. A POVM specifies probabilities, not post-measurement states.

## 2. Instruments and Kraus operators

An instrument may be represented by operators $M_{y,a}$ with

$\\sum_{y,a} M_{y,a}^{\\dagger} M_{y,a}=I$.

Outcome $y$ has unnormalized state $\\sum_{a} M_{y,a}\\rho M_{y,a}^{\\dagger}$ and effect $E_y=\\sum_{a} M_{y,a}^{\\dagger} M_{y,a}$. Dividing by its trace gives the conditional state when probability is nonzero.

Different instruments can share the same effects and probabilities while disturbing states differently.

For a positive finite effect, a square root exists by the spectral theorem, and $E_y\\le I$ follows from completeness. The pairing is nonnegative because $\\rho^{1/2}E_y\\rho^{1/2}$ is positive, and summing gives probability one. A branch map is linear on **unnormalized** density operators, completely positive, and trace nonincreasing. Its normalized conditional output depends nonlinearly on the input through division by the probability, and is undefined at zero probability. Conditioning is not a linear deterministic evolution.

### Worked example: one unsharp POVM, different instruments

Take $E_0=\\operatorname{diag}(2/3,1/3)$, $E_1=I-E_0$. They are positive and complete but not idempotent. In $\\rho=(I+rZ)/2$, $p_0=(3+r)/6$, preserving the earlier statistical source's noisy-measurement example. In particular $|0\\rangle$ gives $2/3,1/3$.

One instrument uses $M_0=\\sqrt{E_0}$, $M_1=\\sqrt{E_1}$. Another uses $\\widetilde M_0=X\\sqrt{E_0}$, $\\widetilde M_1=\\sqrt{E_1}$. Unitary output multiplication leaves $M_y^\\dagger M_y$ unchanged, so their outcome statistics agree for every state. On input $|0\\rangle$, the first leaves the conditional state $|0\\rangle$ for either outcome; the second gives $|1\\rangle$ for outcome zero and $|0\\rangle$ for outcome one. The unread outputs are respectively $|0\\rangle\\langle0|$ and $\\operatorname{diag}(1/3,2/3)$. Calibrating the POVM's probabilities alone therefore cannot determine its instrument's disturbance.

## 3. Quantum channels

A channel $\\Phi$ is linear, trace preserving, and completely positive. In finite dimensions it has a Kraus form

$\\Phi(\\rho)=\\sum_{a} K_a \\rho K_a^{\\dagger}$, $\\sum_{a} K_a^{\\dagger} K_a=I$.

Positivity alone is insufficient because a map applied to one part of an entangled state must remain positive. Complete positivity requires $\\Phi\\otimes\\operatorname{id}_n$ to be positive for every ancillary dimension $n$, where $\\operatorname{id}_n$ is the identity map on ancillary operators.

### Finite Kraus theorem through the Choi matrix

Let input dimension be $d$, output dimension $m$, and $\\Phi$ complex linear. Define $|\\Omega\\rangle=\\sum_{i=1}^d|i\\rangle|i\\rangle$ without normalization and

$$J_\\Phi=(\\Phi\\otimes\\operatorname{id}_d)(|\\Omega\\rangle\\langle\\Omega|)
=\\sum_{ij}\\Phi(|i\\rangle\\langle j|)\\otimes|i\\rangle\\langle j|.$$

Complete positivity implies $J_\\Phi\\ge0$. Conversely write a positive $J_\\Phi$ as $\\sum_a|v_a\\rangle\\langle v_a|$ by its finite spectral decomposition, absorbing square roots of eigenvalues into the vectors. Reshape $v_a=\\sum_{\\mu i}(K_a)_{\\mu i}|\\mu\\rangle|i\\rangle$. Entry comparison gives

$$\\langle\\mu|\\Phi(|i\\rangle\\langle j|)|\\nu\\rangle=\\sum_a(K_a)_{\\mu i}(K_a)_{\\nu j}^*.$$

The matrix units span the inputs, so $\\Phi(X)=\\sum_aK_aXK_a^\\dagger$. This is completely positive for every ancilla, since each summand of $(\\Phi\\otimes\\operatorname{id})(R)$ is a conjugation of $R\\ge0$. Cyclicity gives $\\operatorname{Tr}\\Phi(X)=\\operatorname{Tr}[X\\sum_aK_a^\\dagger K_a]$, so trace preservation for every matrix is equivalent to $\\sum_aK_a^\\dagger K_a=I$. This proves the finite representation, including necessity; Choi rank bounds the needed number by $md$.

Replacing $K_a$ by $L_b=\\sum_aV_{ba}K_a$, $V^\\dagger V=I$, leaves the channel unchanged by expansion of the sum. Thus a chosen Kraus index is not a uniquely determined environmental event. Interpreting it as a recorded outcome requires an explicit environment and instrument.

### Worked example: positivity is weaker than complete positivity

Transposition preserves a density matrix's nonnegative spectrum and trace. Yet applying $T(\\rho)=\\rho^T$ to one half of the Bell projector gives

$$\\frac12\\begin{pmatrix}1&0&0&0\\\\0&0&1&0\\\\0&1&0&0\\\\0&0&0&1\\end{pmatrix}.$$

The middle block has symmetric and antisymmetric eigenvectors with eigenvalues $1/2,-1/2$; the other two eigenvalues are $1/2$. A singlet projector would receive negative expectation. Thus a positive trace-preserving map on isolated inputs need not be a physical deterministic local channel on arbitrary entangled inputs. This preserves the earlier source's explicit counterexample. Antiunitary conjugation of state vectors in a symmetry statement is not a completely positive operation applicable to one unknown subsystem.

## 4. Standard qubit channels

For $0\\leq p\\leq1$, the bit-flip channel is $(1-p)\\rho+pX\\rho X$. The phase-flip channel replaces $X$ by $Z$. Depolarizing noise can be written $\\Phi(\\rho)=(1-q)\\rho+qI/2$, $0\\le q\\le1$, under a convex-replacement convention; other parameterizations exist.

Amplitude damping with $0\\leq\\gamma\\leq1$ has

$K_0=\\begin{pmatrix}1&0\\\\0&\\sqrt{1-\\gamma}\\end{pmatrix}$, $K_1=\\begin{pmatrix}0&\\sqrt{\\gamma}\\\\0&0\\end{pmatrix}$.

It sends excited population toward the ground state and is not unital. These are phenomenological or derived effective models only within stated regimes.

### Worked example: two depolarizing conventions

The earlier statistical source uses

$$\\mathcal D_p(\\rho)=(1-p)\\rho+\\frac p3(X\\rho X+Y\\rho Y+Z\\rho Z),\\quad0\\le p\\le1.$$

Its Kraus operators $\\sqrt{1-p}I$, $\\sqrt{p/3}X$, $\\sqrt{p/3}Y$, $\\sqrt{p/3}Z$ have adjoint products summing to identity. This proves both channel requirements. Pauli conjugation gives $\\mathbf r\\mapsto(1-4p/3)\\mathbf r$, so the center is fixed. Complete depolarization is at $p=3/4$; $p=1$ reverses and shortens the vector by three instead.

The convex-replacement convention of Section 4 instead uses $q$ in $(1-q)\\rho+qI/2$, with $q=4p/3$ on the common parameter range. A noise parameter cannot be converted without its defining formula. More generally $\\Phi_\\lambda(\\rho)=\\lambda\\rho+(1-\\lambda)I/2$ is positive on isolated qubits exactly for $-1\\le\\lambda\\le1$, but CP only for $-1/3\\le\\lambda\\le1$. Its normalized Choi state is $\\lambda|\\Phi^+\\rangle\\langle\\Phi^+|+(1-\\lambda)I/4$, with eigenvalues $(1+3\\lambda)/4$ and three copies of $(1-\\lambda)/4$. The proved Choi criterion gives the exact interval, and these are the four Pauli Kraus weights. Positivity of the Bloch image is therefore a weaker condition than validity with an ancilla.

## 5. Stinespring picture

Every finite-dimensional channel can be realized by adjoining an environment in a fixed state, applying a joint unitary, and tracing out the environment. The dilation is not unique. A Kraus label need not correspond to an objectively observed environmental event unless a measurement model says so.

The finite dilation can be constructed from the Kraus operators. Set $V|\\psi\\rangle=\\sum_aK_a|\\psi\\rangle\\otimes|a\\rangle_E$. Completeness makes $V^\\dagger V=I$, so this is an isometry, and tracing $V\\rho V^\\dagger$ over $E$ recovers the channel. For equal input and output system dimensions, extend its action on the subspace $\\mathcal H\\otimes|0\\rangle_E$ to a full unitary by completing orthonormal bases. With different dimensions the isometry statement is the direct result; padding permits a unitary realization on a sufficiently large space. Neither construction selects a unique microscopic environment.

### Worked example: damping as an isometry and an affine map

For the two stated damping operators, direct multiplication gives

$$\\begin{pmatrix}a&c\\\\c^*&1-a\\end{pmatrix}\\longmapsto
\\begin{pmatrix}a+\\gamma(1-a)&\\sqrt{1-\\gamma}\\,c\\\\\\sqrt{1-\\gamma}\\,c^*&(1-\\gamma)(1-a)\\end{pmatrix}.$$

The Bloch map is $(r_x,r_y,r_z)\\mapsto(\\sqrt{1-\\gamma}r_x,\\sqrt{1-\\gamma}r_y,\\gamma+(1-\\gamma)r_z)$. At $\\gamma=1$ every input becomes the ground projector; at $\\gamma=0$ the channel is identity. Applied to $I/2$, it gives diagonal entries $(1+\\gamma)/2,(1-\\gamma)/2$. Thus it is nonunital for positive damping and cannot be a convex mixture of unitary channels, all of which fix the identity.

An explicit environment isometry is $|0\\rangle\\mapsto|0,0\\rangle$ and $|1\\rangle\\mapsto\\sqrt{1-\\gamma}|1,0\\rangle+\\sqrt\\gamma|0,1\\rangle$. These images are orthonormal. Complete it by rotating the orthogonal single-excitation input in the opposite direction and fixing $|1,1\\rangle$; tracing the initially empty environment yields precisely the Kraus pair. This proves one realization, not its physical uniqueness. For a pure input with excited population $1-a$, the output determinant is $\\gamma(1-\\gamma)(1-a)^2$, showing intermediate mixedness despite global unitary evolution of the larger system. Complete damping can then purify the system by transferring its information to the environment. Entropy need not increase under every channel; unital and nonunital hypotheses matter.

## 6. Channel geometry and composition

The Heisenberg dual of a Kraus channel is $\\Phi^*(A)=\\sum_aK_a^\\dagger AK_a$, determined by $\\operatorname{Tr}[\\Phi(\\rho)A]=\\operatorname{Tr}[\\rho\\Phi^*(A)]$. Trace preservation is exactly $\\Phi^*(I)=I$. This is different from the channel being unital, $\\Phi(I)=I$. Damping preserves the identity in its Heisenberg dual but does not fix the maximally mixed Schrödinger state. The two identities refer to maps in opposite directions and cannot be interchanged.

A deterministic channel also contracts trace distance. For Hermitian $\\Delta=\\rho-\\sigma=\\Delta_+-\\Delta_-$, positivity and trace preservation imply

$$\\|\\Phi(\\Delta)\\|_1\\le\\|\\Phi(\\Delta_+)\\|_1+\\|\\Phi(\\Delta_-)\\|_1
=\\operatorname{Tr}\\Delta_++\\operatorname{Tr}\\Delta_-=\\|\\Delta\\|_1.$$

Here a positive matrix's trace norm equals its trace. Thus no fixed deterministic channel can improve optimal equal-prior one-copy discrimination of two input states; Chapter 8's decision formula converts the inequality into that statement. A selected conditional branch may appear to increase distinguishability because it is not trace preserving and normalization is nonlinear. Its success probability and discarded branches must be included in a complete protocol. The contraction proof itself only needs positivity and trace preservation on these isolated inputs; complete positivity remains necessary for consistent action with arbitrary ancillas.

Qubit channels act affinely on Bloch vectors, $r \\to T r+t$, for a real matrix $T$ and real vector $t$. Unitary channels are rotations; unital noise fixes the center; amplitude damping shifts it. Channels compose in time order. A convex mixture of channels is a channel, but not every channel is a mixture of unitaries.

## 7. Process evidence boundary

Process tomography assumes input preparations, measurement calibration, dimension, and stationarity. Complete positivity may be imposed during estimation. A fitted channel summarizes observed input-output behavior; it does not uniquely identify environmental dynamics, memory, or microscopic noise.

## Measure-and-prepare channels destroy entanglement with every reference

A channel of the form Φ(ρ)=Σⱼtr(Mⱼρ)τⱼ first measures a POVM and
then prepares a state τⱼ according to the outcome. Positivity and
unit trace of the prepared states, together with the POVM sum
identity, give a trace-preserving physical map. More strongly, apply
it to one factor of any bipartite state ω. The result is
$$ (\\Phi\\otimes I)(\\omega)
=\\sum_j\\tau_j\\otimes
\\operatorname{tr}_A[(M_j\\otimes I)\\omega].$$
Each second-factor operator is positive: cyclicity within the partial
trace rewrites it using √Mⱼ on both sides of ω. Its trace is
a nonnegative outcome probability, and these traces sum to one.
After normalizing nonzero terms, the output is explicitly a convex
combination of product states. It is separable for every reference
dimension and every input. Such a channel is called entanglement
breaking.

Complete computational-basis dephasing is an example: its outcome
states are the same basis projectors as its measurement effects.
Applied to half of a Bell pair, it leaves classical basis
correlations but removes the coherent off-diagonal pair terms.
The result can still correlate outcomes strongly in one basis;
those correlations are not evidence that reference entanglement
survived the channel.

The POVM alone does not determine this property. Take two effects
both equal to half the identity. One instrument uses the identity
operator divided by √2 in each branch; ignoring its fair-coin
record gives the identity channel. Another instrument returns a
fixed basis state for each coin outcome, independently of the
input. Ignoring its record gives a replacement channel. Both
POVMs have the same state-independent outcome probabilities, while
the first preserves reference entanglement and the second destroys
it. Their state-transforming instruments differ.

This example also explains why a channel's properties require more
than a few output probability tables. Testing the map on one
input or in one basis can miss coherence or reference effects.
The finite Choi construction above supplies a complete linear
representation when all required matrix entries are specified.
For a proposed measure-and-prepare formula, the displayed separable
output is a direct structural proof instead of a numerical inference
from sample inputs.

Its Heisenberg dual makes the information loss explicit:
Φ†(A)=Σⱼtr(τⱼA)Mⱼ. Every later observable is pulled back to a
linear combination of the measured effects. Inputs that agree on
all those effect probabilities therefore agree on every output
expectation, even when they differed in other initial coherences.
The identity pulls back to the identity because each prepared
state has unit trace. This verifies trace preservation through
the dual convention and identifies precisely which input data
the channel retains.

The converse characterization of all entanglement-breaking finite-dimensional
channels through measure-and-prepare representations is a further
theorem, not required for the implication proved here. The local
proof already identifies a useful class and its physical mechanism.
It keeps separate three pieces of a measurement model: probabilities,
conditional states and the channel after the outcome is ignored.

## Averaging unitary channels differs from averaging their matrices

An equal mixture of identity evolution and Z
conjugation is the qubit dephasing channel. Its
Kraus operators are I/√2 and Z/√2, whose
adjoint products sum to the identity. Averaging
the unitary matrices first instead gives (I+Z)/2,
the projector onto the zero state. Conjugation by
that single matrix has trace equal to the
input zero-state probability and is generally
not trace preserving.

The second operation is a possible selected
measurement branch; the first is an unconditional
random choice. Their missing or retained cross
terms reflect different physical records. A coherent
superposition of operations requires a specified
control system and its measurement, not a numerical
average of matrix entries. This example prevents
one common channel-construction error while using
the same two unitaries. Check the Kraus sum
identity and the interpretation of any discarded
outcome before treating an algebraic matrix
combination as deterministic quantum evolution.

## Exercises with complete solutions

<a id="generalized-measurements-channels-ex-1"></a>

### 1. Probability positivity
Why is $\\operatorname{Tr}(\\rho E)\\geq 0$ for positive $\\rho,E$?

<details>
<summary>Hint 1</summary>

Use the positive square root of rho to form a positive conjugated matrix.

</details>

<details>
<summary>Hint 2</summary>

Trace cyclicity returns the original scalar pairing.

</details>

<details>
<summary>Full solution</summary>

Write $\\rho^{1/2}E \\rho^{1/2}$ positive; its trace is nonnegative and cyclicity gives $\\operatorname{Tr}(\\rho E)$.

</details>

<a id="generalized-measurements-channels-ex-2"></a>

### 2. Probability sum
Show POVM probabilities sum to one.

<details>
<summary>Hint 1</summary>

Move the sum of effects inside the trace.

</details>

<details>
<summary>Hint 2</summary>

Their completeness gives the identity and the input trace is one.

</details>

<details>
<summary>Full solution</summary>

$\\sum_{y} \\operatorname{Tr}(\\rho E_y)=\\operatorname{Tr}(\\rho I)=1$.

</details>

<a id="generalized-measurements-channels-ex-3"></a>

### 3. Projective special case
When is a POVM a projective measurement?

<details>
<summary>Hint 1</summary>

Compare the effects with the spectral projections of an ideal observable.

</details>

<details>
<summary>Hint 2</summary>

Idempotence and mutual orthogonality are additional conditions beyond positivity.

</details>

<details>
<summary>Full solution</summary>

When its effects are mutually orthogonal projectors summing to identity.

</details>

<a id="generalized-measurements-channels-ex-4"></a>

### 4. Effect from instrument
Derive $p(y)=\\operatorname{Tr}(\\rho E_y)$.

<details>
<summary>Hint 1</summary>

Trace the complete unnormalized branch.

</details>

<details>
<summary>Hint 2</summary>

Cyclicity moves each adjoint operator next to its matching instrument operator.

</details>

<details>
<summary>Full solution</summary>

Trace the unnormalized output and use cyclicity to move each $M^{\\dagger} M$ beside $\\rho$.

</details>

<a id="generalized-measurements-channels-ex-5"></a>

### 5. Conditional denominator
What is it?

<details>
<summary>Hint 1</summary>

The trace of the branch is its probability.

</details>

<details>
<summary>Hint 2</summary>

The conditional normalized output exists only when that number is positive.

</details>

<details>
<summary>Full solution</summary>

The outcome probability $p(y)$; conditioning is undefined if it is zero.

</details>

<a id="generalized-measurements-channels-ex-6"></a>

### 6. Kraus trace preservation
Why does $\\sum K_a^{\\dagger} K_a=I$ preserve trace?

<details>
<summary>Hint 1</summary>

Write the trace of the Kraus sum and move each adjoint to the input side.

</details>

<details>
<summary>Hint 2</summary>

Use the completeness sum equal to identity.

</details>

<details>
<summary>Full solution</summary>

Cyclicity gives $\\operatorname{Tr} \\Phi(\\rho)=\\operatorname{Tr}[\\rho \\sum K_a^{\\dagger} K_a]=\\operatorname{Tr} \\rho$.

</details>

<a id="generalized-measurements-channels-ex-7"></a>

### 7. Unitary channel
Give its one-Kraus representation.

<details>
<summary>Hint 1</summary>

A deterministic unitary map needs one conjugation term.

</details>

<details>
<summary>Hint 2</summary>

Its single adjoint product is identity.

</details>

<details>
<summary>Full solution</summary>

$K=U$, with $U^{\\dagger} U=I$.

</details>

<a id="generalized-measurements-channels-ex-8"></a>

### 8. Bit flip
Apply it to $|0\\rangle\\langle 0|$.

<details>
<summary>Hint 1</summary>

The identity branch preserves the first basis projector and X swaps it.

</details>

<details>
<summary>Hint 2</summary>

Weight those two outputs by their specified classical probabilities.

</details>

<details>
<summary>Full solution</summary>

The output is $(1-p)|0\\rangle\\langle 0|+p|1\\rangle\\langle 1|$.

</details>

<a id="generalized-measurements-channels-ex-9"></a>

### 9. Phase flip
Apply it to $|+\\rangle\\langle +|$.

<details>
<summary>Hint 1</summary>

Z sends the plus X eigenstate to the minus X eigenstate.

</details>

<details>
<summary>Hint 2</summary>

Average those two pure projectors using the channel weights.

</details>

<details>
<summary>Full solution</summary>

Since $Z|+\\rangle=|-\\rangle$, the output is $(1-p)|+\\rangle\\langle +|+p|-\\rangle\\langle -|$.

</details>

<a id="generalized-measurements-channels-ex-10"></a>

### 10. Depolarizing center
What happens to $I/2$?

<details>
<summary>Hint 1</summary>

Identity and Pauli conjugations fix the maximally mixed state.

</details>

<details>
<summary>Hint 2</summary>

The convex-replacement formula also gives the center directly.

</details>

<details>
<summary>Full solution</summary>

It remains $I/2$, so the channel is unital.

</details>

<a id="generalized-measurements-channels-ex-11"></a>

### 11. Damping completeness
Verify the two damping Kraus operators are trace preserving.

<details>
<summary>Hint 1</summary>

Compute both adjoint products as diagonal matrices.

</details>

<details>
<summary>Hint 2</summary>

Their second diagonal contributions add to one.

</details>

<details>
<summary>Full solution</summary>

$K_0^{\\dagger} K_0=\\operatorname{diag}(1,1-\\gamma)$ and $K_1^{\\dagger} K_1=\\operatorname{diag}(0,\\gamma)$; their sum is $I$.

</details>

<a id="generalized-measurements-channels-ex-12"></a>

### 12. Excited damping
Apply damping to $|1\\rangle\\langle 1|$.

<details>
<summary>Hint 1</summary>

Apply each Kraus operator to the excited basis vector.

</details>

<details>
<summary>Hint 2</summary>

One branch remains excited and the other produces the ground state.

</details>

<details>
<summary>Full solution</summary>

It becomes $(1-\\gamma)|1\\rangle\\langle 1|+\\gamma|0\\rangle\\langle 0|$.

</details>

<a id="generalized-measurements-channels-ex-13"></a>

### 13. Ground damping
Apply it to $|0\\rangle\\langle 0|$.

<details>
<summary>Hint 1</summary>

The jump Kraus operator kills the ground vector.

</details>

<details>
<summary>Hint 2</summary>

The no-jump operator leaves it unchanged.

</details>

<details>
<summary>Full solution</summary>

It remains the ground state.

</details>

<a id="generalized-measurements-channels-ex-14"></a>

### 14. Unital test
Does amplitude damping preserve $I/2$ for $\\gamma>0$?

<details>
<summary>Hint 1</summary>

Insert equal input populations in the explicit output formula.

</details>

<details>
<summary>Hint 2</summary>

The affine Bloch shift is nonzero when gamma is positive.

</details>

<details>
<summary>Full solution</summary>

No. Ground population increases, so it is not unital.

</details>

<a id="generalized-measurements-channels-ex-15"></a>

### 15. Complete positivity motivation
Why test an ancilla?

<details>
<summary>Hint 1</summary>

Test a local map on half of a possibly entangled preparation.

</details>

<details>
<summary>Hint 2</summary>

The transpose counterexample passes positivity on isolated states but fails that larger test.

</details>

<details>
<summary>Full solution</summary>

A subsystem may be entangled with an untouched system; local evolution must not turn a valid joint state nonpositive.

</details>

<a id="generalized-measurements-channels-ex-16"></a>

### 16. Kraus uniqueness
Is a Kraus representation unique?

<details>
<summary>Hint 1</summary>

Expand a new family obtained by isometric mixing of the old Kraus operators.

</details>

<details>
<summary>Hint 2</summary>

The coefficient sum reduces to the identity in Kraus-label space.

</details>

<details>
<summary>Full solution</summary>

No. Isometric mixing of Kraus operators can represent the same channel.

</details>

<a id="generalized-measurements-channels-ex-17"></a>

### 17. Dilation uniqueness
Is the environment model unique?

<details>
<summary>Hint 1</summary>

A reduced input-output map does not record all environmental degrees of freedom.

</details>

<details>
<summary>Hint 2</summary>

Changing an environment basis or adding unused ancillary dimensions can leave the channel identical.

</details>

<details>
<summary>Full solution</summary>

No. Many dilations give the same reduced channel.

</details>

<a id="generalized-measurements-channels-ex-18"></a>

### 18. Composition
If $\\Phi$ acts before $\\Psi$, what is the result?

<details>
<summary>Hint 1</summary>

Apply the earlier channel to the input first.

</details>

<details>
<summary>Hint 2</summary>

Composition writes the later map outside the earlier map.

</details>

<details>
<summary>Full solution</summary>

$\\Psi(\\Phi(\\rho))$; order matters.

</details>

<a id="generalized-measurements-channels-ex-19"></a>

### 19. Channel mixture
Why is $p\\Phi+(1-p)\\Psi$ a channel?

<details>
<summary>Hint 1</summary>

Combine the Kraus families with square roots of the mixing weights.

</details>

<details>
<summary>Hint 2</summary>

Their completeness sums give pI plus one-minus-p times I.

</details>

<details>
<summary>Full solution</summary>

Linearity, complete positivity, and trace preservation are retained by convex combinations.

</details>

<a id="generalized-measurements-channels-ex-20"></a>

### 20. Tomography scope
Does a fitted channel prove memoryless microscopic noise?

<details>
<summary>Hint 1</summary>

A single fitted family of input-output experiments does not specify temporal correlations.

</details>

<details>
<summary>Hint 2</summary>

Memorylessness is an additional multi-time modeling assumption beyond finite complete positivity.

</details>

<details>
<summary>Full solution</summary>

No. It is an effective input-output description under stationarity and preparation-measurement assumptions; memory requires separate tests.

</details>

## Chapter summary

POVM effects specify generalized outcome probabilities, instruments specify conditional state change, and completely positive trace-preserving maps specify deterministic quantum evolution. Kraus and dilation descriptions are nonunique, so mathematical representation must not be mistaken for a uniquely identified mechanism.

[Previous chapter](#/item/book-two-state-quantum-mechanics?chapter=identical-particles-statistics) · [Book overview](#/item/book-two-state-quantum-mechanics)
`;export{e as default};