
# Mixed States, Ensembles, and State Reconstruction

Pure vectors are not enough when preparation is randomized, a subsystem is entangled with something unobserved, or experimental data do not justify a rank-one model. Density operators unify these cases at the level of observable statistics. They do not, by themselves, reveal which physical mechanism produced the mixed state.

## 1. Density-operator axioms

A density operator $\rho$ is Hermitian, positive semidefinite, and trace one. Its spectral decomposition is

$\rho=\sum_{j} \lambda_j |j\rangle\langle j|$, with $\lambda_j\geq 0$ and $\sum_{j} \lambda_j=1$.

The probability of projective outcome $a$ is $\operatorname{Tr}(\rho P_a)$, and the expectation of $A$ is $\operatorname{Tr}(\rho A)$. For $\rho=|\psi\rangle\langle \psi|$, cyclicity recovers $\langle \psi|A|\psi\rangle$.

## 2. Ensembles and nonuniqueness

The axioms exactly characterize finite mixtures of pure states. A convex sum of normalized rank-one projectors is Hermitian, has trace one, and has nonnegative quadratic form $\sum_kp_k|\langle\psi_k|v\rangle|^2$. Conversely the proved finite Hermitian spectral theorem decomposes any positive trace-one matrix into its orthonormal eigenprojectors with nonnegative weights summing to one. This proves existence of ensemble representation, not uniqueness or a claim about which ensemble a device used.

The Born expression is a probability: in the spectral ensemble $\operatorname{Tr}(\rho P_a)=\sum_j\lambda_j\|P_a j\|^2\ge0$, and summing complete projectors gives one. Moreover all rank-one projector probabilities determine $\rho$ uniquely. If $\rho,\sigma$ give the same ones, their Hermitian difference has zero quadratic form on every unit vector. In particular each of its eigenvectors has eigenvalue zero, so the difference is zero. A density operator is therefore a finite-state summary for all these measurements, although an incomplete measurement basis can fail to distinguish many different operators.

An ensemble $\{p_k,|\psi_k\rangle\}$ produces

$\rho=\sum_{k} p_k|\psi_k\rangle\langle \psi_k|$.

Different ensembles can produce the same $\rho$. Equal mixtures of the two $Z$ eigenstates and of the two $X$ eigenstates both give $I/2$. Consequently the decomposition is not generally an observable hidden label. If a preparation device records which branch occurred, the larger classical-quantum record contains more information than $\rho$ alone.

## 3. Pure and mixed criteria

### Worked example: a mixture of nonorthogonal preparations

Choose $|0\rangle$ and $|+\rangle$ with equal probabilities. Their outer-product average is

$$\rho=\frac12|0\rangle\langle0|+\frac12|+\rangle\langle+|
=\begin{pmatrix}3/4&1/4\\1/4&1/4\end{pmatrix}.$$

Its Bloch vector is $(1/2,0,1/2)$, so its eigenvalues are $(1\pm1/\sqrt2)/2$. The spectral ensemble uses two orthogonal states along the axis $(1,0,1)/\sqrt2$ with those unequal weights, rather than the original nonorthogonal preparations. Both decompositions give the same probabilities for every measurement on this system. Its purity is $(1+1/2)/2=3/4$, and its $Z$ distribution is $3/4,1/4$. Off-diagonal terms do not vanish simply because the preparation was random: coherence is relative to the declared basis, and this ensemble contains a coherent $|+\rangle$ branch. Nor can closed unitary evolution turn this state into $I/2$, because their spectra differ.

A density operator is pure exactly when $\rho^2=\rho$, equivalently $\operatorname{Tr}(\rho^2)=1$, equivalently it has rank one. For a $d$-dimensional state,

$1/d \leq \operatorname{Tr}(\rho^2) \leq 1$.

Purity is nonlinear: estimating it from finite data requires bias and uncertainty analysis. Calling every non-idempotent state “classical ignorance” is misleading because reduced states of entangled systems are mixed too.

## 4. Convex geometry

For a proof of the purity criteria, let $\lambda_j$ be the nonnegative eigenvalues. Each lies in $[0,1]$, so $\sum\lambda_j^2\le\sum\lambda_j=1$, with equality only when every eigenvalue is zero or one. Trace one forces exactly one eigenvalue one. This is equivalent to rank one and idempotence. Cauchy–Schwarz gives $1=(\sum_j\lambda_j)^2\le d\sum_j\lambda_j^2$, with equality exactly when all eigenvalues are $1/d$. Thus the lower endpoint is uniquely the maximally mixed state; zero eigenvalues are included in the dimension count. Purity is not computed by squaring entries independently: $\operatorname{Tr}\rho^2=\sum_{j,k}|\rho_{jk}|^2$ for a Hermitian matrix, including both off-diagonal contributions.

If $\rho_1,\rho_2$ are states and $0\leq p\leq 1$, then $p \rho_1+(1-p)\rho_2$ is a state. Thus the state space is convex, and pure states are its extreme points. A probabilistic preparation mixes states along line segments.

For qubits, $\rho=(I+\mathbf r\cdot\boldsymbol\sigma)/2$, positivity is $\lVert\mathbf r\rVert\leq 1$, and unitary evolution rotates $\mathbf r$ without changing its length or spectrum. Nonunitary channels can contract, shift, or anisotropically deform the ball subject to complete positivity.

## 5. Unitary evolution and unread measurement

**Theorem 8.1 (extreme states).** A finite-dimensional density operator is an extreme point of the convex state set exactly when it is pure.

*Proof.* If $\rho$ has two positive eigenvalues $\lambda_i,\lambda_j$, choose $0<\epsilon<\min(\lambda_i,\lambda_j)$. The distinct states $\rho_\pm=\rho\pm\epsilon(|i\rangle\langle i|-|j\rangle\langle j|)$ remain positive and trace one, and $\rho=(\rho_++\rho_-)/2$. Hence a mixed state is not extreme. If a pure projector $P=|\psi\rangle\langle\psi|$ were $p\rho+(1-p)\sigma$ with $0<p<1$, every $v\perp\psi$ would have $0=p\langle v|\rho|v\rangle+(1-p)\langle v|\sigma|v\rangle$. Both terms are nonnegative, so each vanishes. Since $\langle v|\rho|v\rangle=\|\sqrt\rho v\|^2$, this implies $\rho v=0$, and similarly for $\sigma$. Both matrices have range inside the ray of $\psi$; trace one forces each to equal $P$. This proves extremality. It is a convex-decomposition statement, rather than a claim that every measurement is deterministic in a pure state.

Closed evolution is

$\rho(t)=U(t)\rho(0)U(t)^{\dagger}$,

which preserves trace, positivity, eigenvalues, and purity. An ideal projective measurement with outcome unread gives

$\rho \to \sum_{a} P_a \rho P_a$.

This removes coherence between eigenspaces. Conditional on recorded outcome $a$,

$\rho \to \dfrac{P_a\rho P_a}{\operatorname{Tr}(\rho P_a)}$.

These maps describe a chosen instrument. The same outcome probabilities can be associated with different state changes.

## 6. Partial trace preview

For a composite density operator $\rho_{AB}$, subsystem $A$ has reduced state $\rho_A=\operatorname{Tr}_B(\rho_{AB})$, defined by

$\operatorname{Tr}(\rho_A A)=\operatorname{Tr}\!\left(\rho_{AB}(A\otimes I_B)\right)$

for every local observable $A$. The Bell state $(|00\rangle+|11\rangle)/\sqrt{2}$ has $\rho_A=I/2$, even though the total state is pure. Mixedness can therefore mean entanglement with an omitted system rather than random classical preparation.

## 7. Entropy and distinguishability

For a concrete partial-trace construction in product bases, $(\rho_A)_{ij}=\sum_k(\rho_{AB})_{ik,jk}$. Its quadratic form is $\sum_k\langle v,k|\rho_{AB}|v,k\rangle\ge0$, and its trace is one. Expanding a local observable proves the defining expectation identity. That identity also proves uniqueness: if two candidate reductions have the same trace pairing with every Hermitian observable, their difference pairs with itself to give zero squared Hilbert–Schmidt norm. The definition is therefore independent of the basis used to evaluate the sum.

### Worked example: a pure pair with a mixed marginal

Let $|\Psi\rangle=\sqrt p\,|00\rangle+\sqrt{1-p}\,|11\rangle$, $0<p<1$. Its total projector has trace-square one. In the partial trace, the cross terms contain $\langle1|0\rangle$ on the omitted factor and vanish, leaving $\rho_A=\operatorname{diag}(p,1-p)$. Its purity is $p^2+(1-p)^2<1$, with minimum $1/2$ at equal coefficients. The marginal has entropy $-p\log p-(1-p)\log(1-p)>0$, although the total state has entropy zero.

A unitary on the omitted factor leaves every local $A$ expectation unchanged because $(I\otimes V)^\dagger(A\otimes I)(I\otimes V)=A\otimes I$. By uniqueness it leaves the reduced state unchanged. Conditioning on a recorded outcome on that factor is different and can change the conditional ensemble assigned to $A$. The unconditioned marginal alone cannot reveal that branch record. Entanglement-induced mixedness and randomized preparation can be locally indistinguishable without being the same global physical state.

The von Neumann entropy is

$S(\rho)=-\operatorname{Tr}(\rho \log \rho)=-\sum_{j} \lambda_j \log \lambda_j$,

with $0 \log 0$ interpreted as zero. It vanishes for pure states and is maximized by $I/d$. The logarithm base sets units. Entropy is invariant under unitary evolution.

Trace distance $D(\rho,\sigma)=\tfrac12\lVert\rho-\sigma\rVert_1$ quantifies optimal one-shot distinguishability under ideal measurements. Fidelity quantifies overlap with conventions that must be stated. Neither is a device-independent laboratory guarantee without preparation and detector models.

## 8. Tomography and physical estimation

The entropy bounds follow from eigenvalues. Nonnegativity uses $\lambda_j\le1$, and zero entropy requires a single eigenvalue one. The function $f(x)=-x\log x$, continuously extended at zero, is strictly concave. Finite Jensen gives $S(\rho)/d\le f(1/d)$, so $S\le\log d$, with equality only for equal eigenvalues. This proves the maximum and pure-state minimum; matrix-entropy concavity under arbitrary noncommuting mixtures is a separate theorem, not a consequence established here merely by scalar eigenvalue concavity.

For distinguishability, specify equal prior probabilities for $\rho,\sigma$, one ideal binary measurement, and a best decision rule. Write $\Delta=\rho-\sigma=\Delta_+-\Delta_-$ with positive parts on orthogonal eigenspaces. Its zero trace implies $\operatorname{Tr}\Delta_+=\operatorname{Tr}\Delta_-=D$. For every effect $0\le E\le I$, $\operatorname{Tr}(E\Delta)\le\operatorname{Tr}\Delta_+=D$, attained by the positive-eigenspace projector. Guessing $\rho$ on that outcome and $\sigma$ on the other gives

$$p_{\rm success}=\tfrac12[1+D(\rho,\sigma)].$$

This proves the finite equal-prior decision formula and its attainability by a projective measurement. Different priors change the weighted decision operator; multiple copies or restricted apparatus define different optimization problems.

### Worked example: the best axis for distinguishing two states

Take $\rho=|0\rangle\langle0|$ and $\sigma=|+\rangle\langle+|$. Their Bloch difference is $(-1,0,1)$, so $\Delta=(-X+Z)/2$ has eigenvalues $\pm1/\sqrt2$. Its trace norm is $\sqrt2$, giving $D=1/\sqrt2$ and $p_{\rm success}=(1+1/\sqrt2)/2$. The optimal positive projector measures along $(-1,0,1)/\sqrt2$ and assigns plus to $\rho$. A $Z$ measurement with that decision rule instead succeeds with probability $[1+1/2]/2=3/4$, strictly lower. Distinct nonorthogonal pure states admit useful but imperfect discrimination in one copy. For general qubits the same eigenvalue calculation gives $D=|\mathbf r-\mathbf s|/2$, a distance between density operators rather than a reconstruction of preparation mechanisms.

Linear inversion reconstructs matrix coefficients from an informationally complete set of measured expectations. Sampling noise can make the result nonpositive. Constrained maximum likelihood or Bayesian methods enforce physicality but introduce a statistical model and may introduce bias.

A tomography report should include settings, counts, calibration, estimator, uncertainty, positivity treatment, drift checks, and the assumed Hilbert-space dimension. Reconstructing a matrix precisely inside the wrong dimension is not reliable state knowledge.

## 9. Common errors

- Confusing a density matrix with one privileged ensemble decomposition.
- Squaring matrix entries rather than computing $\rho^2$ or eigenvalues.
- Using $\operatorname{Tr}(\rho^2)<1$ as proof of classical noise rather than generic mixedness.
- Evolving a density operator as $U \rho$ instead of $U \rho U^{\dagger}$.
- Forgetting the denominator in conditional updates.
- Treating entropy as ignorance of a pre-existing pure state in every interpretation.
- Reporting tomography without finite-sample or model-dimension uncertainty.

## Unread projective measurement is an orthogonal projection on matrices

Let Φ(X)=ΣᵢPᵢXPᵢ for mutually orthogonal projectors summing to the identity.
View matrices as an inner-product space with the Hilbert–Schmidt pairing
tr(X†Y). Orthogonality of the projectors gives Φ²=Φ. Cyclicity of trace
also gives tr(X†Φ(Y))=tr(Φ(X)†Y), so Φ is self-adjoint for this pairing.
It is therefore an orthogonal projection on the space of block-diagonal
matrices, rather than a unitary transformation of that matrix space.

Apply the Pythagorean identity to a Hermitian state:
$$\operatorname{tr}(\rho^2)-\operatorname{tr}(\Phi(\rho)^2)
=\|\rho-\Phi(\rho)\|_{\rm HS}^2\ge0.$$
The discarded part consists of coherence between the measured blocks.
Thus an unread projective measurement cannot increase purity, and it
preserves purity exactly when the state was already block diagonal for
that measurement. This equality condition includes every state commuting
with all the projectors, including mixed states. Purity preservation does
not imply that the initial state was pure.

For a qubit measured in the Z basis, Φ removes the two off-diagonal
entries. An equal coherent superposition becomes the maximally mixed state
after the result is ignored, whereas a classical equal mixture in the
same basis is unchanged. These preparations had the same Z probabilities
beforehand, but the first contained coherence visible to another measurement.
The purity calculation records precisely the matrix part that was lost.

Conditional measurement has a different conclusion. If an outcome is
retained, the normalized block PᵢρPᵢ divided by its probability can have
higher purity than ρ. A mixed qubit can yield a pure eigenstate after
a rank-one outcome. There is no contradiction: conditioning selects a
subensemble and divides by a probability, while the unread map sums
all branches linearly. Averaging conditional purities is also not the
same as taking the purity of their averaged state because purity is
quadratic.

This proof should not be extended to every quantum channel by analogy.
Amplitude damping, for example, can take a mixed state toward a pure
ground state. The orthogonal-projection argument uses the specific unread
projective map. It establishes a precise statement about dephasing and
its equality case without assuming an entropy theorem or identifying
mixedness with classical ignorance about one preferred ensemble. The
same density operator still has many ensemble decompositions, all with
the same purity and the same probabilities for future system-only
measurements.

## Mixing has an exact purity deficit

For two density operators ρ and σ, expand the trace square
of their convex mixture with weight p. Cyclicity of trace
combines the two cross products, even when the matrices
do not commute. Rearranging gives purity of the mixture
equal to the weighted average purities minus
p(1−p) times the squared Hilbert–Schmidt distance between
ρ and σ. The deficit is nonnegative and is strictly
positive when the preparations differ and both weights
are nonzero.

This identity explains convexity of purity and identifies
its equality case directly. It does not imply that one
particular ensemble decomposition is physically privileged;
different ensembles with the same averaged operator have
the same final purity. Keeping a preparation label gives
a different joint classical-record/system state. Discarding
that label produces the mixture considered here. A later
conditional selection can increase the purity of a retained
subensemble without contradicting this unconditional mixing
identity, because its normalization and information differ.

## Exercises with complete solutions

<a id="mixed-states-ensembles-ex-1"></a>

### 1. Pure projector
Show $|\psi\rangle\langle \psi|$ has trace one for normalized $\psi$.

<details>
<summary>Hint 1</summary>

Evaluate the diagonal entries of the outer product in any orthonormal basis.

</details>

<details>
<summary>Hint 2</summary>

Their sum is the squared norm of the normalized vector.

</details>

<details>
<summary>Full solution</summary>

In any orthonormal basis, the trace is $\sum_{j} |\langle e_j|\psi\rangle|^2=1$ by Parseval.

</details>

<a id="mixed-states-ensembles-ex-2"></a>

### 2. Born trace
Show $\operatorname{Tr}(|\psi\rangle\langle \psi|A)=\langle \psi|A|\psi\rangle$.

<details>
<summary>Hint 1</summary>

Expand the trace in an orthonormal basis if the rectangular outer-product cyclicity is unfamiliar.

</details>

<details>
<summary>Hint 2</summary>

The sum of basis projectors is identity, leaving the scalar quadratic expression.

</details>

<details>
<summary>Full solution</summary>

Cyclicity of the finite trace gives $\operatorname{Tr}(|\psi\rangle\langle \psi|A)=\operatorname{Tr}(\langle \psi|A|\psi\rangle)$, the scalar expectation.

</details>

<a id="mixed-states-ensembles-ex-3"></a>

### 3. Convex positivity
Why is $p \rho+(1-p)\sigma$ positive?

<details>
<summary>Hint 1</summary>

Test the proposed matrix against an arbitrary vector.

</details>

<details>
<summary>Hint 2</summary>

A convex combination of nonnegative quadratic forms is nonnegative.

</details>

<details>
<summary>Full solution</summary>

Its quadratic form is $p\langle v|\rho|v\rangle+(1-p)\langle v|\sigma|v\rangle$, a nonnegative combination.

</details>

<a id="mixed-states-ensembles-ex-4"></a>

### 4. Equal $Z$ mixture
Compute the equal mixture of $|0\rangle,|1\rangle$.

<details>
<summary>Hint 1</summary>

Write each coordinate-state projector as a diagonal matrix.

</details>

<details>
<summary>Hint 2</summary>

Weight the two projectors equally.

</details>

<details>
<summary>Full solution</summary>

It is $(1/2)\operatorname{diag}(1,0)+(1/2)\operatorname{diag}(0,1)=I/2$.

</details>

<a id="mixed-states-ensembles-ex-5"></a>

### 5. Equal $X$ mixture
Show equal $|+\rangle,|-\rangle$ also gives $I/2$.

<details>
<summary>Hint 1</summary>

Form both X-eigenstate outer products.

</details>

<details>
<summary>Hint 2</summary>

Their off-diagonal signs are opposite and cancel in the average.

</details>

<details>
<summary>Full solution</summary>

Their off-diagonal entries cancel and diagonal entries add to halves.

</details>

<a id="mixed-states-ensembles-ex-6"></a>

### 6. Pure-state idempotence
Prove $\rho^2=\rho$ for $\rho=|\psi\rangle\langle \psi|$.

<details>
<summary>Hint 1</summary>

Multiply the two outer products in their stated order.

</details>

<details>
<summary>Hint 2</summary>

The middle scalar is the norm squared of the state.

</details>

<details>
<summary>Full solution</summary>

$\rho^2=|\psi\rangle\langle \psi|\psi\rangle\langle \psi|=|\psi\rangle\langle \psi|$ because the norm is one.

</details>

<a id="mixed-states-ensembles-ex-7"></a>

### 7. Mixed purity
Compute $\operatorname{Tr}((I/2)^2)$.

<details>
<summary>Hint 1</summary>

Square the matrix before taking the trace.

</details>

<details>
<summary>Hint 2</summary>

The identity has trace two in the stated space.

</details>

<details>
<summary>Full solution</summary>

$(I/2)^2=I/4$, whose two-dimensional trace is $1/2$.

</details>

<a id="mixed-states-ensembles-ex-8"></a>

### 8. Diagonal state purity
For $\rho=\operatorname{diag}(p,1-p)$, compute purity.

<details>
<summary>Hint 1</summary>

The two diagonal entries are the eigenvalues.

</details>

<details>
<summary>Hint 2</summary>

Sum their squares and inspect the two endpoint values.

</details>

<details>
<summary>Full solution</summary>

It is $p^2+(1-p)^2$, equal to one only at $p=0,1$.

</details>

<a id="mixed-states-ensembles-ex-9"></a>

### 9. Purity lower bound
Why is the minimum qubit purity $1/2$?

<details>
<summary>Hint 1</summary>

Every qubit state has two eigenvalues summing to one.

</details>

<details>
<summary>Hint 2</summary>

Complete the square in lambda squared plus one-minus-lambda squared.

</details>

<details>
<summary>Full solution</summary>

Minimize $\lambda^2+(1-\lambda)^2$ on $[0,1]$; the minimum occurs at $\lambda=1/2$.

</details>

<a id="mixed-states-ensembles-ex-10"></a>

### 10. Qubit eigenvalues
State the eigenvalues of $(I+\mathbf r\cdot\boldsymbol\sigma)/2$.

<details>
<summary>Hint 1</summary>

The Pauli-vector matrix has eigenvalues plus and minus the vector length.

</details>

<details>
<summary>Hint 2</summary>

Apply the affine half-identity transformation to those eigenvalues.

</details>

<details>
<summary>Full solution</summary>

They are $(1 \pm \lVert r\rVert)/2$.

</details>

<a id="mixed-states-ensembles-ex-11"></a>

### 11. Unitary trace
Show $\operatorname{Tr}(U\rho U^{\dagger})=\operatorname{Tr}(\rho)$.

<details>
<summary>Hint 1</summary>

Move the last unitary factor to the front under the trace.

</details>

<details>
<summary>Hint 2</summary>

Its product with U is identity.

</details>

<details>
<summary>Full solution</summary>

Cyclicity gives $\operatorname{Tr}(U\rho U^{\dagger})=\operatorname{Tr}(U^{\dagger} U \rho)=\operatorname{Tr}(\rho)$.

</details>

<a id="mixed-states-ensembles-ex-12"></a>

### 12. Unitary purity
Show unitary evolution preserves purity.

<details>
<summary>Hint 1</summary>

Cancel the adjacent adjoint and U when squaring the evolved state.

</details>

<details>
<summary>Hint 2</summary>

Then use trace invariance under conjugation.

</details>

<details>
<summary>Full solution</summary>

$(U\rho U^{\dagger})^2=U\rho^2U^{\dagger}$; cyclicity preserves its trace.

</details>

<a id="mixed-states-ensembles-ex-13"></a>

### 13. Unread $Z$ measurement
Apply unread $Z$ measurement to $\rho=\begin{pmatrix}a&c\\c^*&1-a\end{pmatrix}$.

<details>
<summary>Hint 1</summary>

The coordinate projectors retain only their matching row and column.

</details>

<details>
<summary>Hint 2</summary>

Add both projected matrices; the off-diagonal entries vanish.

</details>

<details>
<summary>Full solution</summary>

$P_0\rho P_0+P_1\rho P_1=\operatorname{diag}(a,1-a)$; coherences vanish.

</details>

<a id="mixed-states-ensembles-ex-14"></a>

### 14. Conditional update
For the preceding state, what is the state after outcome $0$ if $a>0$?

<details>
<summary>Hint 1</summary>

The projected numerator has only its first diagonal entry.

</details>

<details>
<summary>Hint 2</summary>

Divide by the strictly positive outcome probability a.

</details>

<details>
<summary>Full solution</summary>

$P_0\rho P_0/a=|0\rangle\langle 0|$.

</details>

<a id="mixed-states-ensembles-ex-15"></a>

### 15. Bell reduction
Find the reduced state of the first subsystem of $(|00\rangle+|11\rangle)/\sqrt{2}$.

<details>
<summary>Hint 1</summary>

Expand the total pure-state projector into four product outer products.

</details>

<details>
<summary>Hint 2</summary>

The omitted-factor trace of a cross outer product is its zero orthogonal overlap.

</details>

<details>
<summary>Full solution</summary>

Expanding the projector and tracing the second basis removes cross terms, leaving $(|0\rangle\langle 0|+|1\rangle\langle 1|)/2=I/2$.

</details>

<a id="mixed-states-ensembles-ex-16"></a>

### 16. Entropy of a pure state
Compute its von Neumann entropy.

<details>
<summary>Hint 1</summary>

A rank-one projector has one unit eigenvalue and all others zero.

</details>

<details>
<summary>Hint 2</summary>

Use the continuous convention for zero times log zero.

</details>

<details>
<summary>Full solution</summary>

Its eigenvalues are $1,0,\dots$; hence $-1 \log 1=0$, with zero-eigenvalue terms defined by continuity.

</details>

<a id="mixed-states-ensembles-ex-17"></a>

### 17. Qubit maximum entropy
Which state maximizes qubit entropy?

<details>
<summary>Hint 1</summary>

Maximize the binary entropy of the two spectral probabilities.

</details>

<details>
<summary>Hint 2</summary>

Strict concavity puts its maximum at equal eigenvalues.

</details>

<details>
<summary>Full solution</summary>

$I/2$, with equal eigenvalues. Its entropy is $\log 2$ in the chosen base.

</details>

<a id="mixed-states-ensembles-ex-18"></a>

### 18. Unitary entropy
Why is entropy invariant under unitary evolution?

<details>
<summary>Hint 1</summary>

Unitary conjugation changes eigenvectors but preserves eigenvalues.

</details>

<details>
<summary>Hint 2</summary>

The entropy formula depends only on that spectral list.

</details>

<details>
<summary>Full solution</summary>

Unitary conjugation preserves eigenvalues, and entropy depends only on them.

</details>

<a id="mixed-states-ensembles-ex-19"></a>

### 19. Unphysical inversion
Why is a reconstructed Hermitian trace-one matrix with a negative eigenvalue invalid?

<details>
<summary>Hint 1</summary>

Measure the rank-one projector onto a negative-eigenvalue eigenvector.

</details>

<details>
<summary>Hint 2</summary>

Its assigned Born probability would equal that negative eigenvalue.

</details>

<details>
<summary>Full solution</summary>

It is not positive, so some projector would receive a negative Born probability.

</details>

<a id="mixed-states-ensembles-ex-20"></a>

### 20. Mechanism boundary
Can $\rho=I/2$ reveal whether it arose from classical randomization or entanglement?

<details>
<summary>Hint 1</summary>

Every local outcome probability is a trace pairing with the same density operator.

</details>

<details>
<summary>Hint 2</summary>

A distinguishing record must contain information outside this reduced state.

</details>

<details>
<summary>Full solution</summary>

No. All local measurement statistics depend only on $\rho$; distinguishing mechanisms requires access to preparation records or the larger correlated system.

</details>

## Chapter summary

Density operators are positive trace-one matrices that represent all finite-state outcome statistics. Their ensemble decompositions are nonunique, pure states are extreme rank-one projectors, unitary motion preserves spectra, and unread measurement removes selected coherences. Mixedness, entropy, and reconstructed matrices acquire physical meaning only with a preparation, subsystem, and statistical protocol.

[Previous chapter](symmetries-angular-momentum-spin.md) · [Book overview](#/books/two-state-quantum-mechanics)
