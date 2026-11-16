
# Tensor Products, Composite Systems, and Entanglement

Composite systems use tensor products. This rule allows product preparations but also entangled states with no subsystem pure-state description. Entanglement is a property relative to a chosen subsystem decomposition; it is not synonymous with correlation, nonlocal signalling, or experimental certification.

## 1. Tensor structure

If $H_A$ and $H_B$ have dimensions $d_A,d_B$, their composite has dimension $d_Ad_B$. Product basis vectors are $|j\rangle\otimes|k\rangle=|jk\rangle$. Operators local to $A$ act as $A\otimes I$, and product operators satisfy

$(A \otimes B)(C \otimes D)=AC \otimes BD$.

The tensor symbol cannot be replaced by ordinary multiplication: it records subsystem ownership.

This chapter's proofs assume finite-dimensional subsystem spaces with fixed orthonormal bases. The tensor inner product is defined on products by $\langle a\otimes b|c\otimes d\rangle=\langle a|c\rangle\langle b|d\rangle$ and extended sesquilinearly. The product basis makes it positive definite and shows that dimensions multiply. Local operators on opposite factors commute: $(A\otimes I)(I\otimes B)=A\otimes B=(I\otimes B)(A\otimes I)$. This is the mathematical expression of separately specified operations, not by itself a derivation of relativistic causality or a unique physical subsystem factorization.

## 2. Product and entangled states

A pure state is separable when $|\psi_{AB}\rangle=|a\rangle\otimes|b\rangle$. For two qubits with coefficients arranged as matrix $C=\begin{pmatrix}c_{00}&c_{01}\\c_{10}&c_{11}\end{pmatrix}$, separability is equivalent to $\det C=0$. The Bell state $(|00\rangle+|11\rangle)/\sqrt{2}$ has nonzero determinant and is entangled.

## 3. Schmidt decomposition

Every bipartite pure state has

$|\psi\rangle=\sum_{j} \sqrt{\lambda_j}|u_j\rangle|v_j\rangle$,

where $\lambda_j\geq 0$, $\sum_j\lambda_j=1$, and both vector families are orthonormal. The nonzero count is Schmidt rank. Rank one means product; larger rank means entangled.

The squared Schmidt coefficients are eigenvalues of both reduced density operators, so the subsystem entropies agree for a pure bipartite state.

## 4. Partial trace and local statistics

### Proof of Schmidt decomposition

Write a unit vector as $\sum_{ij}C_{ij}|i\rangle|j\rangle$, so $\operatorname{Tr}(CC^\dagger)=1$. Take a singular-value decomposition $C=U\Sigma V^\dagger$, supplied by finite complex linear algebra. Then

$$|\psi\rangle=\sum_s\sigma_s\left(\sum_iU_{is}|i\rangle\right)
\otimes\left(\sum_jV_{js}^*|j\rangle\right).$$

The conjugate in the second factor is essential for this coefficient-matrix convention. The two families are orthonormal by unitarity; $\lambda_s=\sigma_s^2$ are nonnegative and sum to one. Tracing either factor gives the same nonzero eigenvalue list. In this convention the matrices are $\rho_A=CC^\dagger$ and $\rho_B=C^TC^*$, not an unconjugated identification of both with $C^\dagger C$. The rank of $C$ equals the number of nonzero Schmidt terms. Rank one is exactly a factorization $C=ab^T$, equivalent to a product vector; in the nonzero two-by-two case this is exactly vanishing determinant. Singular values are unique, while bases inside equal-coefficient sectors need not be. Local unitaries act as $C\mapsto U_ACU_B^T$, preserving those singular values and hence the pure-state entanglement data.

### Worked example: the earlier three-term state

Take $\psi=(|00\rangle+|01\rangle+|10\rangle)/\sqrt3$, the unique nontrivial reduced-spectrum example in the earlier composite-system source. Its coefficient matrix is $C=\begin{pmatrix}1&1\\1&0\end{pmatrix}/\sqrt3$, of determinant $-1/3$. Hence it is entangled. Direct multiplication gives

$$\rho_A=\rho_B=\frac13\begin{pmatrix}2&1\\1&1\end{pmatrix},\qquad
\lambda_\pm=\frac{3\pm\sqrt5}{6}.$$

The characteristic polynomial is $\lambda^2-\lambda+1/9$, so the eigenvalues sum to one and multiply to $1/9$. They are the squared Schmidt coefficients. The entropy is $-\lambda_+\ln\lambda_+-\lambda_-\ln\lambda_-$, approximately $0.381$ nats, strictly between zero and $\ln2$. For explicit Schmidt vectors choose real orthonormal $a_+,a_-$ diagonalizing the symmetric $C$. Its eigenvalues are $(1+\sqrt5)/(2\sqrt3)$ and $(1-\sqrt5)/(2\sqrt3)$. Thus $\psi=\sqrt{\lambda_+}|a_+a_+\rangle-\sqrt{\lambda_-}|a_-a_-\rangle$; absorb the minus sign into the second subsystem vector to obtain the positive-coefficient Schmidt convention. Normalization and entanglement are independent of that phase choice.

The reduced state $\rho_A=\operatorname{Tr}_B(\rho_{AB})$ is characterized by

$\operatorname{Tr}(\rho_A A)=\operatorname{Tr}\!\left(\rho_{AB}(A\otimes I)\right)$.

For the Bell state, both reductions equal $I/2$. Local results are random, while joint outcomes in the same computational basis are perfectly correlated. Correlation does not allow a party to choose the random outcome.

## 5. Mixed-state separability

The partial trace can be evaluated in any orthonormal basis of $B$: $\rho_A=\sum_k(I\otimes\langle k|)\rho_{AB}(I\otimes|k\rangle)$. Replacing that basis by unitary combinations produces a double sum whose coefficient is $\sum_r V_{jr}^*V_{kr}=\delta_{jk}$, leaving the same operator. Equivalently the local-expectation characterization determines it uniquely, as proved in the mixed-state chapter. In infinite dimensions a corresponding formula requires trace-class hypotheses and convergence; the finite calculation is not permission to rearrange arbitrary infinite sums.

### Worked example: Bell coherence versus classical correlation

The Bell projector expands into the two diagonal terms $|00\rangle\langle00|$, $|11\rangle\langle11|$ and two cross terms $|00\rangle\langle11|$, $|11\rangle\langle00|$, all with coefficient one half. Its partial trace kills the cross terms through orthogonal overlaps on the omitted factor, giving $I/2$ on either side. The incoherent state $\rho_c=(|00\rangle\langle00|+|11\rangle\langle11|)/2$ has exactly the same marginals and the same joint computational-basis outcomes.

They differ for $X\otimes X$: this operator swaps $|00\rangle$ and $|11\rangle$, so its expectation is one in the Bell state and zero in $\rho_c$. In joint $X$ measurements the Bell state gives matching signs only, each with probability one half; $\rho_c$ gives all four pairs equally. Thus matching marginals and perfect correlation in one setting do not determine the full joint state or certify entanglement. The interference-sensitive setting detects information that the single computational-basis record discarded.

A mixed state is separable if

$\rho_{AB}=\sum_k p_k\rho_A^{(k)}\otimes\rho_B^{(k)}$.

Otherwise it is entangled. A mixed state can be correlated yet separable. Deciding separability is harder than checking whether a pure vector factors. Reduced-state mixedness certifies entanglement only when the global state is known to be pure.

## 6. Local operations

Local unitary operations preserve Schmidt coefficients and entanglement. A local measurement can update conditional states and, with classical communication, support protocols such as teleportation. Any local trace-preserving channel, including an outcome-averaged instrument, leaves the distant reduced state unchanged; conditioning on a selected local outcome need not. This is the no-signalling structure, not instantaneous causal influence.

## 7. Experimental boundary

The earlier composite reading's CHSH sign convention, classical bound and attainable quantum value continue in [Quantum Information, Bell Tests, and No-Signalling](quantum-information-bell.md), with full local and quantum proofs. For general Hilbert spaces the tensor product is the completion of the algebraic tensor product in the product inner product; the matrix Schmidt proof here is restricted to the declared finite-dimensional setting. Trace-class and convergence qualifications are needed before extending the partial-trace sums to infinite systems.

### Worked example: teleportation and the required record

Let an input qubit be $|\chi\rangle_A=\alpha|0\rangle+\beta|1\rangle$, $|\alpha|^2+|\beta|^2=1$, and let $B,C$ share $|\Phi^+\rangle$. Alice controls $A,B$, while the recipient controls $C$. Define $\Phi^\pm=(|00\rangle\pm|11\rangle)/\sqrt2$ and $\Psi^\pm=(|01\rangle\pm|10\rangle)/\sqrt2$. Expanding all four product terms gives the exact identity

$$|\chi\rangle_A|\Phi^+\rangle_{BC}=\tfrac12\left[
|\Phi^+\rangle_{AB}|\chi\rangle_C+
|\Phi^-\rangle_{AB}Z|\chi\rangle_C+
|\Psi^+\rangle_{AB}X|\chi\rangle_C+
|\Psi^-\rangle_{AB}XZ|\chi\rangle_C\right].$$

The four Bell outcomes each have probability one quarter, independent of the input. Conditional on the outcome the recipient's state is one of these four unitary images; applying $I,Z,X,$ or $ZX$ respectively recovers the input ray. The two classical outcome bits specify that correction, not the complex amplitudes $\alpha,\beta$.

Before receiving the record the recipient must average all branches. The density operator is $[\rho+Z\rho Z+X\rho X+XZ\rho ZX]/4=I/2$, since the Pauli conjugations cancel all three Bloch components. Thus the protocol does not make the unknown input available remotely before the classical communication. Alice's input is consumed by her joint measurement, so no second untouched copy survives this derivation. The calculation assumes a shared maximally entangled resource, an exact Bell instrument, compatible local bases and accurate corrections. It proves the ideal state-transfer identity; it neither identifies a hardware implementation nor asserts its fidelity. The entangled resource and the classical record play distinct roles, and both must be included in the protocol's claim.

Entanglement preservation is specifically a **local** unitary statement. A global controlled-NOT, defined on basis vectors by $|a,b\rangle\mapsto|a,a\mathbin\oplus b\rangle$, sends $|\Phi^+\rangle$ to $(|00\rangle+|10\rangle)/\sqrt2=|+\rangle|0\rangle$, a product state. It can do so because it couples the two factors and changes their joint preparation, while local unitary multiplication leaves the coefficient matrix's singular values fixed. Merely choosing an entangled coordinate basis is not the same physical action: a consistent passive change also transforms the local observable algebras. The subsystem definition remains part of what an entanglement statement means.

For an explicit no-signalling proof, write an arbitrary local trace-preserving channel on $B$ as $\mathcal E_B(\sigma)=\sum_kK_k\sigma K_k^\dagger$, $\sum_kK_k^\dagger K_k=I$. For every local $A$, cyclicity gives

$$\operatorname{Tr}\left[\sum_k(I\otimes K_k)\rho_{AB}(I\otimes K_k^\dagger)(A\otimes I)\right]
=\operatorname{Tr}[\rho_{AB}(A\otimes\sum_kK_k^\dagger K_k)]
=\operatorname{Tr}[\rho_{AB}(A\otimes I)].$$

Uniqueness of the reduced state proves it unchanged. The finite Kraus representation is developed in Chapter 16; the displayed proof states exactly the input it needs. On a Bell pair, recording a $Z$ outcome on $B$ conditions $A$ to $|0\rangle$ or $|1\rangle$, but each occurs randomly and the average is still $I/2$. Choosing an $X$ measurement produces a different conditional ensemble with the same average. Sorting the remote data by that outcome requires the classical record. An operation's conditional branch is not trace preserving by itself and is not covered by the unconditioned theorem.

### Worked example: a witness and an exact noise threshold

For any normalized product vector, $|\langle\Phi^+|a\otimes b\rangle|^2=|a_0b_0+a_1b_1|^2/2\le1/2$ by Cauchy–Schwarz. Convexity extends this bound to every separable mixed state. Hence Bell fidelity above one half certifies entanglement under the trusted Hilbert-space and measurement model.

For $\rho_p=p|\Phi^+\rangle\langle\Phi^+|+(1-p)I/4$, $0\le p\le1$, the fidelity is $(1+3p)/4$, so $p>1/3$ is detected. The threshold is exact for this family: at $p=1/3$, use the equal mixture of three separable axis-correlated states $\rho_X=(I+X\otimes X)/4$, $\rho_Y=(I-Y\otimes Y)/4$, $\rho_Z=(I+Z\otimes Z)/4$. Each is the equal mixture of the corresponding two product eigenstates, with opposite $Y$ signs and matching $X,Z$ signs. Their average equals $\rho_{1/3}$ by the Bell Pauli expansion. For smaller $p$, write $\rho_p=3p\rho_{1/3}+(1-3p)I/4$, still separable. Thus this calculation proves both sides of the family boundary without treating every mixed-state entanglement decision as equally easy. The witness requires trusted measurement of the Bell projector or its Pauli correlations; it is not a device-independent certification.

Claiming entanglement from data requires an entanglement witness, tomography with assumptions, or a device-independent inequality under stated loophole conditions. A density matrix reconstructed under a trusted dimension and calibration model is not device-independent evidence.

## Conditional filtering changes a marginal without sending a signal

Start with a Bell pair and apply a two-outcome local instrument to
the first qubit. Its success operator is diagonal with entries √p
and one, where zero≤p≤one. The failure operator is diagonal with
entries √(1−p) and zero. Their adjoint products sum to the identity,
so ignoring the outcome gives a trace-preserving local operation.
Conditional on success, the unnormalized pair is
$(\sqrt p|00\rangle+|11\rangle)/\sqrt2$. Its probability is (1+p)/2,
and the normalized second-qubit marginal has diagonal entries p/(1+p)
and one divided by 1+p. Conditional on failure, the second qubit
is in the zero state and the probability is (1−p)/2.

Weighting those two conditional marginals by their probabilities gives
the original maximally mixed second-qubit state. Thus the second
observer's statistics change after learning which branch occurred,
but remain unchanged without that record. At p=0 the two conditional
states are distinct pure basis states, making the distinction especially
clear. The conditional prediction uses information transmitted through
the branch record; it is not a signal supplied by the local
quantum operation alone.

Filtering can also increase the entanglement of a selected branch.
For a normalized pure state α|00⟩+β|11⟩ with real α≥β>0, choose
the success operator with diagonal entries β/α and one. Its
successful output is proportional to a Bell pair, with probability
2β². The other branch is a product state. This does not contradict
the restrictions on deterministic local manipulation: selection discards
some preparations, and the success probability is part of the resource
accounting. Reporting only the quality of the retained state would
hide that cost.

Both calculations use the tensor-factor interpretation of the two
observers and a complete instrument. A single success operator is
trace decreasing, so it cannot be inserted into the trace-preserving
no-signalling proof by itself. Its normalization depends on the
input state, which is precisely why conditional updating is nonlinear
as a map on normalized density operators. The full sum over branches
is linear and preserves trace.

When interpreting a postselected experiment, provide the success and
failure probabilities as well as the conditional states. If the
selection rule depends on measurement settings, additional care is
needed before using the retained data in a Bell inequality. The
information chapter gives a finite local example in which setting-dependent
selection alone creates an apparent violation. Conditional entanglement,
unconditional local statistics and the communication needed to identify
a subensemble are distinct quantities, even when they arise from
the same pair preparation.

## Invertible local filtering preserves pure Schmidt rank

Write a pure bipartite state as a coefficient matrix
C in product bases. Local linear operations A and
B change it to AC Bᵀ before normalization. If
both operators are invertible, multiplication preserves
matrix rank, so the Schmidt rank is unchanged.
An entangled pure state cannot become a product
through such a successful invertible local filter,
although its Schmidt probabilities can change substantially.

A singular filter can reduce rank by removing
a component, provided its success probability is
nonzero. This does not contradict the earlier
conditional concentration example: changing entanglement
amount and changing the number of nonzero Schmidt
terms are different questions. Normalization rescales
all remaining coefficients and does not restore
a removed matrix direction. The full instrument
still includes other outcomes, whose probabilities
must be kept when comparing resources or local
unconditional statistics. Rank is a useful algebraic
invariant here, not a complete measure of every
operational entanglement cost.

## Exercises with complete solutions

<a id="tensor-products-entanglement-ex-1"></a>

### 1. Dimension
Find $\dim(\mathbb C^2\otimes\mathbb C^3)$.

<details>
<summary>Hint 1</summary>

Use all pairs of subsystem basis labels.

</details>

<details>
<summary>Hint 2</summary>

Tensor dimensions multiply rather than add.

</details>

<details>
<summary>Full solution</summary>

$2\cdot3=6$.

</details>

<a id="tensor-products-entanglement-ex-2"></a>

### 2. Local action
Compute $(X \otimes I)|00\rangle$.

<details>
<summary>Hint 1</summary>

The first factor operation acts on the first label alone.

</details>

<details>
<summary>Hint 2</summary>

The other factor is identity.

</details>

<details>
<summary>Full solution</summary>

It flips the first qubit, giving $|10\rangle$.

</details>

<a id="tensor-products-entanglement-ex-3"></a>

### 3. Other local action
Compute $(I \otimes X)|00\rangle$.

<details>
<summary>Hint 1</summary>

This time the operation acts only on the second label.

</details>

<details>
<summary>Hint 2</summary>

Keep the first zero unchanged.

</details>

<details>
<summary>Full solution</summary>

It gives $|01\rangle$.

</details>

<a id="tensor-products-entanglement-ex-4"></a>

### 4. Product expansion
Expand $|+\rangle|0\rangle$.

<details>
<summary>Hint 1</summary>

Distribute the first factor across its two basis terms.

</details>

<details>
<summary>Hint 2</summary>

The common normalization is one over square root two.

</details>

<details>
<summary>Full solution</summary>

$(|00\rangle+|10\rangle)/\sqrt{2}$.

</details>

<a id="tensor-products-entanglement-ex-5"></a>

### 5. Coefficient determinant
Is $(|00\rangle+|01\rangle)/\sqrt{2}$ entangled?

<details>
<summary>Hint 1</summary>

Factor out the common first-subsystem ket.

</details>

<details>
<summary>Hint 2</summary>

A rank-one coefficient matrix is another equivalent check.

</details>

<details>
<summary>Full solution</summary>

No. It factors as $|0\rangle|+\rangle$; its coefficient determinant is zero.

</details>

<a id="tensor-products-entanglement-ex-6"></a>

### 6. Bell determinant
Find the determinant for $(|00\rangle+|11\rangle)/\sqrt{2}$.

<details>
<summary>Hint 1</summary>

Arrange the four coefficients in the declared row-A, column-B convention.

</details>

<details>
<summary>Hint 2</summary>

The two nonzero diagonal entries multiply to one half.

</details>

<details>
<summary>Full solution</summary>

The coefficient matrix is $\operatorname{diag}(1/\sqrt{2},1/\sqrt{2})$, determinant $1/2$, so it is entangled.

</details>

<a id="tensor-products-entanglement-ex-7"></a>

### 7. Schmidt rank
What is the Bell-state Schmidt rank?

<details>
<summary>Hint 1</summary>

Count its nonzero reduced-state eigenvalues.

</details>

<details>
<summary>Hint 2</summary>

The Bell state has two equal Schmidt weights.

</details>

<details>
<summary>Full solution</summary>

Two.

</details>

<a id="tensor-products-entanglement-ex-8"></a>

### 8. Product Schmidt coefficients
What are they for a product pure state?

<details>
<summary>Hint 1</summary>

A product vector is already one normalized Schmidt term.

</details>

<details>
<summary>Hint 2</summary>

Any additional coefficients in a larger basis vanish.

</details>

<details>
<summary>Full solution</summary>

One coefficient equals one and the rest are zero.

</details>

<a id="tensor-products-entanglement-ex-9"></a>

### 9. Bell reduction
Compute $\rho_A$.

<details>
<summary>Hint 1</summary>

Expand the four terms of its pure-state projector.

</details>

<details>
<summary>Hint 2</summary>

Omitted-factor orthogonality removes the cross terms.

</details>

<details>
<summary>Full solution</summary>

Partial tracing removes cross terms and gives $I/2$.

</details>

<a id="tensor-products-entanglement-ex-10"></a>

### 10. Bell entropy
Find the reduced entropy in bits.

<details>
<summary>Hint 1</summary>

Use the two equal marginal eigenvalues.

</details>

<details>
<summary>Hint 2</summary>

Logarithm base two makes the maximum qubit entropy one.

</details>

<details>
<summary>Full solution</summary>

Equal eigenvalues give one bit.

</details>

<a id="tensor-products-entanglement-ex-11"></a>

### 11. Same-basis outcomes
What joint $Z$ outcomes can the Bell state produce?

<details>
<summary>Hint 1</summary>

Only the two matching computational basis amplitudes are present.

</details>

<details>
<summary>Hint 2</summary>

Their squared magnitudes are equal.

</details>

<details>
<summary>Full solution</summary>

$00$ and $11$, each with probability $1/2$.

</details>

<a id="tensor-products-entanglement-ex-12"></a>

### 12. Local randomness
What is the first party's $Z$ distribution?

<details>
<summary>Hint 1</summary>

Trace out the second subsystem or sum the joint probabilities.

</details>

<details>
<summary>Hint 2</summary>

The first marginal is maximally mixed.

</details>

<details>
<summary>Full solution</summary>

Uniform, because its reduced state is $I/2$.

</details>

<a id="tensor-products-entanglement-ex-13"></a>

### 13. Classical correlated state
Is $( |00\rangle\langle 00|+|11\rangle\langle 11| )/2$ separable?

<details>
<summary>Hint 1</summary>

Compare the given expression with the definition of separability.

</details>

<details>
<summary>Hint 2</summary>

Each displayed term is itself a product density operator.

</details>

<details>
<summary>Full solution</summary>

Yes. It is explicitly a mixture of two product states.

</details>

<a id="tensor-products-entanglement-ex-14"></a>

### 14. Coherence distinction
How does it differ from the Bell state?

<details>
<summary>Hint 1</summary>

Expand the Bell outer product rather than only its diagonal.

</details>

<details>
<summary>Hint 2</summary>

The two cross terms survive in the pure joint state.

</details>

<details>
<summary>Full solution</summary>

It lacks $|00\rangle\langle 11|$ and $|11\rangle\langle 00|$ coherences and has zero entanglement.

</details>

<a id="tensor-products-entanglement-ex-15"></a>

### 15. Local unitary
Can it change Schmidt coefficients?

<details>
<summary>Hint 1</summary>

Local unitaries multiply the coefficient matrix on its two sides.

</details>

<details>
<summary>Hint 2</summary>

Singular values are invariant under those unitary factors.

</details>

<details>
<summary>Full solution</summary>

No. It changes Schmidt bases but preserves the singular values.

</details>

<a id="tensor-products-entanglement-ex-16"></a>

### 16. Pure-state certification
When does a mixed reduced state certify entanglement?

<details>
<summary>Hint 1</summary>

A pure product state has pure reductions; use the Schmidt theorem for the converse.

</details>

<details>
<summary>Hint 2</summary>

For an unknown mixed global state, classical correlations can give the same marginals.

</details>

<details>
<summary>Full solution</summary>

When the total bipartite state is known to be pure.

</details>

<a id="tensor-products-entanglement-ex-17"></a>

### 17. Product expectation
For $\rho_A \otimes \rho_B$, evaluate $\langle A \otimes B\rangle$.

<details>
<summary>Hint 1</summary>

Use the product rule for tensor-operator multiplication.

</details>

<details>
<summary>Hint 2</summary>

Then factor the trace into the two subsystem traces.

</details>

<details>
<summary>Full solution</summary>

Trace factorization gives $\operatorname{Tr}(\rho_AA)\operatorname{Tr}(\rho_BB)$.

</details>

<a id="tensor-products-entanglement-ex-18"></a>

### 18. Joint versus marginal
Can equal marginals imply equal joint states?

<details>
<summary>Hint 1</summary>

Compare the Bell projector with its incoherent correlated counterpart.

</details>

<details>
<summary>Hint 2</summary>

Their marginals agree even though an X correlation distinguishes them.

</details>

<details>
<summary>Full solution</summary>

No. Many correlated and uncorrelated states share the same reductions.

</details>

<a id="tensor-products-entanglement-ex-19"></a>

### 19. No signalling
Can local outcome-averaged control select a distant result?

<details>
<summary>Hint 1</summary>

Use the completeness sum of a local trace-preserving Kraus representation.

</details>

<details>
<summary>Hint 2</summary>

Conditional selection is a different non-trace-preserving branch and needs its record.

</details>

<details>
<summary>Full solution</summary>

No. Trace-preserving local operations leave the distant reduced state unchanged.

</details>

<a id="tensor-products-entanglement-ex-20"></a>

### 20. Evidence scope
Is tomography automatically device independent?

<details>
<summary>Hint 1</summary>

A reconstructed density matrix depends on trusted inputs and measurement effects.

</details>

<details>
<summary>Hint 2</summary>

Device independence requires a separate protocol and its stated assumptions.

</details>

<details>
<summary>Full solution</summary>

No. It trusts calibration, measurement models, repeated preparation, and usually dimension.

</details>

## Chapter summary

Tensor products encode subsystem structure. Schmidt decomposition completely classifies bipartite pure-state entanglement, partial traces determine local statistics, and mixed-state separability distinguishes entanglement from ordinary correlation. Operational claims require named measurements and evidence assumptions.

[Previous chapter](scattering-resonance-continuum.md) · [Next chapter](identical-particles-statistics.md) · [Book overview](#/books/two-state-quantum-mechanics)
