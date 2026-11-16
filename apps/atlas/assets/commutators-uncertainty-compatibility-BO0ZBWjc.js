var e=`---
parent_id: book-two-state-quantum-mechanics
chapter_id: commutators-uncertainty-compatibility
title: "Commutators, Compatibility, and Uncertainty"
level: advanced-undergraduate
estimated_minutes: 210
license: CC BY-SA 4.0
status: draft
---

# Commutators, Compatibility, and Uncertainty

Uncertainty is a family of mathematical and operational statements, not one slogan. Preparation uncertainty concerns the spreads of two distributions in one state. Measurement disturbance concerns how an instrument changes later statistics. Parameter-estimation uncertainty concerns finite data. This chapter proves the finite-dimensional preparation relations and marks where the other questions begin.

## 1. Commutator algebra

Define \\([A,B]=AB-BA\\) and \\(\\{A,B\\}=AB+BA\\). Commutators are bilinear, antisymmetric, and satisfy

\\[
[A,BC]=[A,B]C+B[A,C],
\\]

\\[
[A,[B,C]]+[B,[C,A]]+[C,[A,B]]=0.
\\]

The product rule makes commutators behave like derivatives. The Jacobi identity organizes nested generators and is central to symmetry algebra.

These are associative-matrix identities, with no measurement assumptions. Expanding the product-rule right side gives $(AB-BA)C+B(AC-CA)=ABC-BCA$, its left side. For Jacobi, the first double bracket is $ABC-ACB-BCA+CBA$; cyclically adding the other two expressions cancels all six triple-product orderings in pairs. If $A,B$ are Hermitian, $[A,B]^\\dagger=-[A,B]$, so its expectation is purely imaginary. In contrast the anticommutator is Hermitian. Confusing these adjoint types can replace a real lower bound by an invalid complex comparison.

## 2. Compatibility theorem

Two Hermitian matrices are simultaneously diagonalizable by a unitary matrix exactly when they commute. One direction is immediate for diagonal matrices. Conversely, if \\([A,B]=0\\), then \\(B\\) preserves each eigenspace of \\(A\\); diagonalize the Hermitian restriction of \\(B\\) inside every such space.

Degeneracy is why merely sharing one eigenvector is insufficient. Compatibility requires a complete common eigenbasis. A commuting pair may still have broad distributions in a state that is not a common eigenvector.

## 3. Centered observables and covariance

Let \\(A'=A-\\langle A\\rangle I\\) and \\(B'=B-\\langle B\\rangle I\\). Then

\\[
(\\Delta A)^2=\\langle A'^2\\rangle,
\\qquad \\operatorname{Cov}_{\\mathrm{sym}}(A,B)=\\frac12\\langle\\{A',B'\\}\\rangle.
\\]

For Hermitian \\(A,B\\), the expectation \\(\\langle A'B'\\rangle\\) can be complex. Its real part is the symmetric covariance; its imaginary part is \\((1/2i)\\langle[A,B]\\rangle\\).

## 4. Robertson and Schrödinger inequalities

Cauchy–Schwarz applied to \\(A'\\lvert\\psi\\rangle\\) and \\(B'\\lvert\\psi\\rangle\\) yields

\\[
(\\Delta A)^2(\\Delta B)^2\\geq\\left|\\langle A'B'\\rangle\\right|^2.
\\]

Separating real and imaginary parts gives the stronger Schrödinger relation

\\[
(\\Delta A)^2(\\Delta B)^2\\geq
\\operatorname{Cov}_{\\mathrm{sym}}(A,B)^2+\\frac14\\left|\\langle[A,B]\\rangle\\right|^2.
\\]

Dropping the covariance term gives Robertson:

\\[
\\Delta A\\,\\Delta B\\geq\\frac12\\left|\\langle[A,B]\\rangle\\right|.
\\]

Equality in Cauchy–Schwarz requires \\(A'\\lvert\\psi\\rangle\\) and \\(B'\\lvert\\psi\\rangle\\) to be complex-linearly dependent. Equality conditions are state and observable dependent.

## 5. Qubit uncertainty geometry

Here are the full hypotheses and equality distinctions behind the displayed inequalities. Let $\\psi$ have unit norm and let $A,B$ be finite Hermitian matrices. Their expectations are real, so $A',B'$ are Hermitian. With $u=A'\\psi$, $v=B'\\psi$, their squared norms are the two variances. Put $z=\\langle u|v\\rangle=\\langle A'B'\\rangle$. Conjugate symmetry gives $z^*=\\langle B'A'\\rangle$, so $\\operatorname{Re}z=\\langle\\{A',B'\\}\\rangle/2$ and $\\operatorname{Im}z=\\langle[A,B]\\rangle/(2i)$. Cauchy–Schwarz bounds $|z|^2$ by the product of the two squared norms. Splitting $|z|^2$ into its real and imaginary squares proves Schrödinger, and discarding the nonnegative covariance square proves Robertson. This explicitly derives the constants, reality and signs rather than importing a heuristic tradeoff.

If neither centered vector is zero, equality in Schrödinger holds exactly when $u=\\lambda v$ for a complex scalar. If either is zero the norm inequality is already an equality. To saturate Robertson as well, the symmetric covariance must vanish. A state saturating the stronger inequality need not saturate the weaker one. The same bounds hold for a mixed density matrix $\\rho$: replace $u,v$ by matrices $A'\\sqrt\\rho,B'\\sqrt\\rho$ in the Hilbert–Schmidt inner product $\\operatorname{Tr}(M^\\dagger N)$. Cyclicity gives the same means, variances and ordered product expectation $\\operatorname{Tr}(\\rho A'B')$. The positive square root exists by the finite spectral theorem. Thus mixed states require no unproved appeal to a pure-state vector for the whole preparation.

For unit axes \\(\\mathbf a,\\mathbf b\\) and state Bloch vector \\(\\mathbf r\\),

\\[
\\Delta(\\mathbf a\\cdot\\boldsymbol\\sigma)^2=1-(\\mathbf a\\cdot\\mathbf r)^2,
\\]

\\[
[\\mathbf a\\cdot\\boldsymbol\\sigma,\\mathbf b\\cdot\\boldsymbol\\sigma]
=2i(\\mathbf a\\times\\mathbf b)\\cdot\\boldsymbol\\sigma.
\\]

Thus Robertson becomes

\\[
\\sqrt{1-(\\mathbf a\\cdot\\mathbf r)^2}\\sqrt{1-(\\mathbf b\\cdot\\mathbf r)^2}
\\geq\\left|(\\mathbf a\\times\\mathbf b)\\cdot\\mathbf r\\right|.
\\]

For \\(X,Z\\) in \\(\\lvert0\\rangle\\), the left side is zero because \\(\\Delta Z=0\\), and the right side is zero because \\(\\langle Y\\rangle=0\\). The bound is true but uninformative about \\(\\Delta X=1\\). A zero lower bound never certifies simultaneous sharpness.

## 6. Sum and entropic uncertainty

### Worked example: covariance rescues a zero commutator bound

Take the pure Bloch vector $\\mathbf r=(1/\\sqrt2,0,1/\\sqrt2)$ and observables $A=X$, $B=Z$. Both variances are $1/2$, so their standard-deviation product is $1/2$. Robertson's right side is $|r_y|=0$, even though neither observable is sharp. The symmetric anticommutator of $X,Z$ is zero, but centering subtracts their mean product: $\\operatorname{Cov}_{\\rm sym}=-r_xr_z=-1/2$. Schrödinger therefore gives a squared product lower bound $1/4$, exactly the actual product of variances. Omitting the centering correction would miss the entire informative term.

In fact for unit axes $\\mathbf a,\\mathbf b$ the difference between the two sides of the squared Schrödinger relation is

$$[1-(\\mathbf a\\cdot\\mathbf r)^2][1-(\\mathbf b\\cdot\\mathbf r)^2]
-[\\mathbf a\\cdot\\mathbf b-(\\mathbf a\\cdot\\mathbf r)(\\mathbf b\\cdot\\mathbf r)]^2
-[(\\mathbf a\\times\\mathbf b)\\cdot\\mathbf r]^2
=[1-(\\mathbf a\\cdot\\mathbf b)^2](1-|\\mathbf r|^2).$$

To check it, choose coordinates $\\mathbf a=e_1$, $\\mathbf b=ze_1+\\sqrt{1-z^2}e_2$ for nonparallel axes and expand; for parallel axes both sides vanish directly. Positivity is exactly the Bloch ball condition. Every pure qubit saturates the stronger relation for any two axes because its centered vectors lie in the one-dimensional complex space perpendicular to $\\psi$. Mixed states need not do so.

### Worked example: a strict mixed-state inequality

For $\\rho=(I+sZ)/2$, $|s|<1$, and $X,Y$, both variances equal one, their covariance is zero, and the commutator lower bound is $|s|$. The squared Schrödinger gap is $1-s^2>0$. At the pure endpoints $s=\\pm1$ it closes. At $s=0$, both distributions are maximally random despite a zero commutator expectation. Their three-Pauli variance sum is $3-s^2$, illustrating that mixing can increase this aggregate uncertainty. No apparatus disturbance is part of this calculation; it describes separately measured distributions on repeated copies of the same preparation.

Product bounds can become trivial. A variance-sum identity for Pauli observables is often clearer. For a pure qubit,

\\[
(\\Delta X)^2+(\\Delta Y)^2+(\\Delta Z)^2=3-\\lVert\\mathbf r\\rVert^2=2.
\\]

For mixed states the sum is at least two and at most three.

Uncertainty can also be expressed using Shannon entropies of measurement outcomes. For two orthonormal bases with maximum overlap \\(c=\\max_{j,k}|\\langle a_j\\vert b_k\\rangle|\\), a standard finite-dimensional bound is

\\[
H(A)+H(B)\\geq-2\\log c.
\\]

The logarithm base fixes the information unit. This relation addresses distributions, not mechanical disturbance.

The displayed general basis bound is the finite-dimensional Maassen–Uffink theorem, cited here rather than proved by Cauchy–Schwarz alone. Its assumptions are two complete orthonormal rank-one measurement bases and their Shannon outcome entropies; degenerate observables or arbitrary positive-operator measurements need their own formulation. The qubit $X,Z$ special case admits an elementary check in bits. Write $h(x)=H_2((1+x)/2)$. Integrating the power series for its derivative gives

$$h(x)=1-\\frac1{\\ln2}\\sum_{k\\ge1}\\frac{x^{2k}}{2k(2k-1)}\\ge1-x^2,\\qquad |x|\\le1.$$

The coefficients sum to $\\ln2$ by taking the continuous endpoint value $h(1)=0$; positivity permits passage to the limit. Since $x^{2k}\\le x^2$, the inequality follows. Thus $H(X)+H(Z)\\ge2-r_x^2-r_z^2\\ge1$, matching the theorem's $c=1/\\sqrt2$. Equality occurs for an $X$ or $Z$ eigenstate. This proof covers the stated binary case without claiming the general interpolation theorem has been established.

## 7. Sequential measurement is a different question

Suppose an ideal \\(A\\) measurement is performed and its outcome ignored. The state becomes \\(\\sum_a P_a\\rho P_a\\). A later \\(B\\) distribution is computed from that new state. This disturbance depends on the instrument, not only on \\([A,B]\\).

Noncommutation signals that no projective instrument can generally preserve all statistics of both sharp observables, but real disturbance relations must name the instrument, error measure, and input class. Robertson alone does not quantify apparatus error.

### Worked example: exact sequential disturbance for an ideal instrument

For a qubit axis $\\mathbf n$, let $N=\\mathbf n\\cdot\\boldsymbol\\sigma$ and $P_\\pm=(I\\pm N)/2$. The unread Lüders update is

$$\\rho'=P_+\\rho P_++P_-\\rho P_-=\\tfrac12(\\rho+N\\rho N).$$

The Pauli identity gives its Bloch vector $\\mathbf r'=(\\mathbf n\\cdot\\mathbf r)\\mathbf n$. A later axis $\\mathbf b$ has expectation $(\\mathbf b\\cdot\\mathbf n)(\\mathbf n\\cdot\\mathbf r)$, compared with the original $\\mathbf b\\cdot\\mathbf r$. For this instrument to preserve that later distribution for every initial Bloch vector requires $\\mathbf b=(\\mathbf b\\cdot\\mathbf n)\\mathbf n$, meaning parallel or antiparallel axes, exactly the commuting case. A particular state can be undisturbed even for noncommuting axes: the center $\\mathbf r=0$ remains unchanged. For $\\mathbf r=e_x$, an unread $Z$ measurement instead sends it to zero, changing a later certain-plus $X$ outcome to equal signs. The conclusion is a specified channel calculation, not a universal numerical bound on the error of every measuring apparatus.

## 8. Canonical variables and domain warning

The formal relation \\([Q,P]=i\\hbar I\\) cannot hold for finite matrices because the trace of every finite commutator is zero while \\(\\operatorname{Tr}(i\\hbar I)\\) is nonzero. Position and momentum therefore require infinite-dimensional, unbounded operators. Their domains, products, and boundary terms matter.

The familiar \\(\\Delta Q\\,\\Delta P\\geq\\hbar/2\\) holds for states in suitable common domains. Chapter 9 will build that setting. Using the formula for arbitrary formal functions without checking finite moments and domains is not justified.

## 9. Common claim failures

The earlier canonical-uncertainty reading distinguishes weak uncertainty forms from literal operator products. For self-adjoint $A,B$ and normalized $\\psi\\in D(A)\\cap D(B)$, the centered vectors exist and Cauchy–Schwarz gives $\\Delta A^2\\Delta B^2\\ge|\\langle A'\\psi|B'\\psi\\rangle|^2$. No $AB\\psi$ is needed. Dropping its real square gives the weak Robertson bound $\\Delta A\\Delta B\\ge|\\operatorname{Im}\\langle A\\psi|B\\psi\\rangle|$. Identifying that imaginary part with a commutator expectation requires additionally $\\psi\\in D(AB)\\cap D(BA)$. Variances remain squared norms; expressions with $A^2\\psi$ require their separate square domains. This is the precise unbounded continuation of the proved finite-matrix argument.

### Preserved worked example: parity does not remove covariance

Let $\\psi=C\\exp[-(a-ib)x^2]$, $a>0$, real $b$, and $C=(2a/\\pi)^{1/4}$. It is an even Schwartz function. Its position variance is $1/(4a)$, while $P\\psi=2\\hbar(b+ia)x\\psi$ gives zero mean momentum and variance $\\hbar^2(a^2+b^2)/a$. The symmetric covariance is the real part of $\\langle Q\\psi|P\\psi\\rangle$, namely $\\hbar b/(2a)$. Thus

$$\\Delta Q^2\\Delta P^2=\\frac{\\hbar^2}{4}+\\frac{\\hbar^2b^2}{4a^2}.$$

Schrödinger is saturated, but Robertson is strict when $b\\ne0$. Even parity alone does not imply zero position-momentum covariance; the spatially varying phase supplies it. The unchirped $b=0$ case is the minimum-product real Gaussian. Similarly the earlier pure-qubit example $\\mathbf r=(1,1,1)/\\sqrt3$ gives $\\operatorname{Var}X\\operatorname{Var}Y=4/9$, Robertson term $1/3$, and covariance contribution $1/9$, again exactly saturating the stronger relation. Both corrected examples are retained without conflating complex linear dependence with the additional zero-covariance requirement for Robertson equality.

### Why no bounded canonical pair exists in any dimension

The finite trace obstruction has a dimension-independent strengthening. Suppose bounded operators $C,D$ on a nonzero Hilbert space satisfy $[C,D]=I$. The commutator product rule gives $[C,D^n]=nD^{n-1}$. No power $D^n$ can vanish: if it did, the same identity would force $D^{n-1}=0$ and repeated descent would force $I=0$. Taking norms therefore yields

$$n\\|D^{n-1}\\|\\le2\\|C\\|\\|D^n\\|\\le2\\|C\\|\\|D\\|\\|D^{n-1}\\|,$$

so $n\\le2\\|C\\|\\|D\\|$ for every positive integer, impossible. Rescaling a proposed bounded $Q,P$ with $[Q,P]=i\\hbar I$ to $C=Q$, $D=P/(i\\hbar)$ gives this contradiction. Unlike a finite trace argument, this proof applies on any Hilbert space and uses boundedness essentially. Unbounded position and momentum escape it because these global operator-norm inequalities and unrestricted product identities are unavailable. A numerical truncation can reproduce selected matrix elements, but never an exact bounded canonical pair.

- “Noncommuting observables can never both be known” suppresses state, protocol, and meaning of known.
- “Measurement always creates the uncertainty” confuses preparation spread with disturbance.
- “The uncertainty principle is experimental imperfection” ignores exact state-dependent distribution bounds.
- A zero commutator expectation is confused with a zero commutator.
- Standard deviations are reported when second moments do not exist.
- A finite-sample confidence interval is called a quantum uncertainty without a statistical model.

## Bounded observables give robust uncertainty comparisons

Uncertainty estimates inherit errors in the prepared state. In finite
dimension let ρ and σ be density operators and let A be Hermitian
with operator norm at most M. Put δ=‖ρ−σ‖₁. Spectrally decompose the
Hermitian difference into signed eigenvalues and normalized eigenvectors.
Each diagonal expectation of A has absolute value at most M, so summing
the signed contributions proves
$$|\\operatorname{tr}(A\\rho)-\\operatorname{tr}(A\\sigma)|\\le M\\delta.$$
Applying the same argument to A² bounds the second-moment difference by
M²δ. The two means each have magnitude at most M, so the difference
of their squares is at most 2M²δ. Consequently the two variances differ
by at most 3M²δ. This bound is conservative but explicit and needs
no common eigenbasis for the states and observable.

It follows that a certified state-distance bound can be propagated to
the variance terms in a finite-dimensional uncertainty calculation. A small
reported commutator expectation alone provides no such robustness statement:
that expectation can vanish in a particular state while both variances
remain large. Conversely a small variance in one observable does not
bound the variance of every incompatible observable independently of scale.
The operator norms and the specified state enter the comparison.

The boundedness hypothesis is essential to this simple estimate. In an
infinite-dimensional system, a tiny probability placed at a very high
energy can change an energy moment substantially while the density operators
remain close in trace norm. Controlling unbounded-observable uncertainty
therefore needs moment or domain information in addition to state distance.
This is the statistical counterpart of keeping the weak-product domain
hypotheses visible in the uncertainty proofs above.

## Correlated fluctuations can cancel in a sum

Expanding the centered square proves that the variance of A+B
equals the two individual variances plus twice their symmetrized
covariance. This remains true for noncommuting Hermitian observables;
replacing the covariance by an unsymmetrized complex product would
not give a real variance identity.

For a qubit polarized along the direction halfway between X
and Y, both individual means are one divided by √2 and
both variances are one half. Their symmetrized product
expectation is zero because the Pauli anticommutator vanishes.
The covariance is therefore minus one half, and the variance
of X+Y is zero. The state is an eigenstate of that
sum with eigenvalue √2, despite having fluctuating individual
X and Y results.

There is no assignment of simultaneously measured classical
X and Y values in this argument. It compares three
different observable preparations and their moment formulas.
The cancellation illustrates why covariance is part of
uncertainty geometry and why separate standard deviations
do not determine the fluctuation of every linear combination.

## Exercises with complete solutions

<a id="commutators-uncertainty-compatibility-ex-1"></a>

### 1. Antisymmetry
Show \\([B,A]=-[A,B]\\).

<details>
<summary>Hint 1</summary>

Reverse the two terms in the definition.

</details>

<details>
<summary>Hint 2</summary>

Factoring out minus one gives the commutator in the original order.

</details>

<details>
<summary>Full solution</summary>

\\(BA-AB=-(AB-BA)\\) directly.

</details>

<a id="commutators-uncertainty-compatibility-ex-2"></a>

### 2. Product rule
Prove \\([A,BC]=[A,B]C+B[A,C]\\).

<details>
<summary>Hint 1</summary>

Expand both commutators on the proposed right side.

</details>

<details>
<summary>Hint 2</summary>

The two intermediate BAC terms cancel.

</details>

<details>
<summary>Full solution</summary>

Expand the right side: \\((AB-BA)C+B(AC-CA)=ABC-BCA\\).

</details>

<a id="commutators-uncertainty-compatibility-ex-3"></a>

### 3. Identity
Compute \\([A,I]\\).

<details>
<summary>Hint 1</summary>

The identity changes neither left nor right multiplication.

</details>

<details>
<summary>Hint 2</summary>

Subtract the two identical matrices.

</details>

<details>
<summary>Full solution</summary>

It is \\(AI-IA=A-A=0\\).

</details>

<a id="commutators-uncertainty-compatibility-ex-4"></a>

### 4. Pauli relation
Compute \\([X,Y]\\).

<details>
<summary>Hint 1</summary>

Use the ordered Pauli products rather than treating the matrices as scalars.

</details>

<details>
<summary>Hint 2</summary>

Reversing X and Y reverses the sign of iZ.

</details>

<details>
<summary>Full solution</summary>

\\(XY=iZ\\) and \\(YX=-iZ\\), so \\([X,Y]=2iZ\\).

</details>

<a id="commutators-uncertainty-compatibility-ex-5"></a>

### 5. Common eigenbasis
Why do diagonal matrices commute?

<details>
<summary>Hint 1</summary>

Only diagonal entries can be nonzero in either product.

</details>

<details>
<summary>Hint 2</summary>

Each surviving product is a product of two scalar diagonal values.

</details>

<details>
<summary>Full solution</summary>

Their products multiply corresponding diagonal entries, and scalar multiplication commutes entrywise.

</details>

<a id="commutators-uncertainty-compatibility-ex-6"></a>

### 6. Degenerate preservation
If \\([A,B]=0\\) and \\(Av=av\\), show \\(Bv\\) remains in the \\(a\\) eigenspace.

<details>
<summary>Hint 1</summary>

Commute A past B before acting on the eigenvector.

</details>

<details>
<summary>Hint 2</summary>

The result is still multiplied by the same scalar eigenvalue; a zero result is allowed.

</details>

<details>
<summary>Full solution</summary>

\\(A(Bv)=B(Av)=aBv\\).

</details>

<a id="commutators-uncertainty-compatibility-ex-7"></a>

### 7. Centered expectation
Show \\(\\langle A'\\rangle=0\\).

<details>
<summary>Hint 1</summary>

Take the expectation of each term in the centered definition.

</details>

<details>
<summary>Hint 2</summary>

A normalized state has identity expectation one.

</details>

<details>
<summary>Full solution</summary>

\\(\\langle A-\\langle A\\rangle I\\rangle=\\langle A\\rangle-\\langle A\\rangle\\langle I\\rangle=0\\) for a normalized state.

</details>

<a id="commutators-uncertainty-compatibility-ex-8"></a>

### 8. Variance as a norm
Show \\(\\Delta A=\\lVert A'\\lvert\\psi\\rangle\\rVert\\).

<details>
<summary>Hint 1</summary>

Form the squared norm of the centered vector.

</details>

<details>
<summary>Hint 2</summary>

Its adjoint product reduces to the centered observable squared by Hermiticity.

</details>

<details>
<summary>Full solution</summary>

Its squared norm is \\(\\langle\\psi\\rvert A'^\\dagger A'\\lvert\\psi\\rangle=\\langle A'^2\\rangle\\) because \\(A'\\) is Hermitian.

</details>

<a id="commutators-uncertainty-compatibility-ex-9"></a>

### 9. Robertson for Pauli axes
Find the bound for \\(X,Y\\) in \\(\\lvert0\\rangle\\).

<details>
<summary>Hint 1</summary>

The commutator is two i Z.

</details>

<details>
<summary>Hint 2</summary>

The north-pole state has unit Z expectation and unit transverse deviations.

</details>

<details>
<summary>Full solution</summary>

\\(\\langle[X,Y]\\rangle=2i\\langle Z\\rangle=2i\\), so \\(\\Delta X\\,\\Delta Y\\geq1\\); both deviations equal one.

</details>

<a id="commutators-uncertainty-compatibility-ex-10"></a>

### 10. Trivial bound
Find Robertson's bound for \\(X,Z\\) in \\(\\lvert0\\rangle\\).

<details>
<summary>Hint 1</summary>

The X,Z commutator involves Y.

</details>

<details>
<summary>Hint 2</summary>

Its zero expectation in this state does not imply both centered vectors vanish.

</details>

<details>
<summary>Full solution</summary>

\\([X,Z]=-2iY\\) and \\(\\langle Y\\rangle=0\\), so the lower bound is zero, although \\(\\Delta X=1\\).

</details>

<a id="commutators-uncertainty-compatibility-ex-11"></a>

### 11. Eigenstate variance
If \\(A\\lvert\\psi\\rangle=a\\lvert\\psi\\rangle\\), find \\(\\Delta A\\).

<details>
<summary>Hint 1</summary>

The first two moments are the eigenvalue and its square.

</details>

<details>
<summary>Hint 2</summary>

Subtract the squared first moment from the second moment.

</details>

<details>
<summary>Full solution</summary>

Both \\(\\langle A^2\\rangle=a^2\\) and \\(\\langle A\\rangle^2=a^2\\), so it is zero.

</details>

<a id="commutators-uncertainty-compatibility-ex-12"></a>

### 12. Covariance
For \\(\\lvert0\\rangle\\), compute the symmetric covariance of \\(X,Y\\).

<details>
<summary>Hint 1</summary>

Both individual transverse means vanish in the north-pole state.

</details>

<details>
<summary>Hint 2</summary>

The Pauli anticommutator of X and Y is zero.

</details>

<details>
<summary>Full solution</summary>

Both means vanish and \\(\\{X,Y\\}=0\\), so the covariance is zero.

</details>

<a id="commutators-uncertainty-compatibility-ex-13"></a>

### 13. Pauli variance
For Bloch vector \\(\\mathbf r\\), derive \\((\\Delta X)^2=1-r_x^2\\).

<details>
<summary>Hint 1</summary>

The square of X is identity in every state.

</details>

<details>
<summary>Hint 2</summary>

Its first moment is exactly the x Bloch coordinate.

</details>

<details>
<summary>Full solution</summary>

Since \\(X^2=I\\), \\(\\langle X^2\\rangle=1\\), while \\(\\langle X\\rangle=r_x\\).

</details>

<a id="commutators-uncertainty-compatibility-ex-14"></a>

### 14. Variance sum
Find \\((\\Delta X)^2+(\\Delta Y)^2+(\\Delta Z)^2\\) for \\(I/2\\).

<details>
<summary>Hint 1</summary>

The center of the Bloch ball has three zero Pauli expectations.

</details>

<details>
<summary>Hint 2</summary>

Each Pauli second moment is one.

</details>

<details>
<summary>Full solution</summary>

Its Bloch vector is zero, so each variance is one and the sum is three.

</details>

<a id="commutators-uncertainty-compatibility-ex-15"></a>

### 15. Pure-state variance sum
Prove the sum equals two for pure qubits.

<details>
<summary>Hint 1</summary>

Add the three variance formulas componentwise.

</details>

<details>
<summary>Hint 2</summary>

Purity places the Bloch vector on the unit sphere.

</details>

<details>
<summary>Full solution</summary>

It is \\(3-(r_x^2+r_y^2+r_z^2)=3-1=2\\).

</details>

<a id="commutators-uncertainty-compatibility-ex-16"></a>

### 16. Entropic units
What changes if entropy uses logarithm base two rather than natural logs?

<details>
<summary>Hint 1</summary>

Changing the logarithm base multiplies every logarithm by one constant.

</details>

<details>
<summary>Hint 2</summary>

The entropy and the overlap lower bound must use the same base.

</details>

<details>
<summary>Full solution</summary>

Entropy is measured in bits rather than nats, and both sides of the bound scale by \\(1/\\ln2\\).

</details>

<a id="commutators-uncertainty-compatibility-ex-17"></a>

### 17. Unread \\(Z\\) measurement
What happens to \\(\\lvert+\\rangle\\langle+\\rvert\\) after an ideal \\(Z\\) measurement whose outcome is ignored?

<details>
<summary>Hint 1</summary>

Apply both coordinate projectors and add the resulting outer products.

</details>

<details>
<summary>Hint 2</summary>

The unread update removes the relative-phase off-diagonal entries in the Z basis.

</details>

<details>
<summary>Full solution</summary>

Off-diagonal terms are removed, leaving \\(I/2\\); the later \\(X\\) outcome becomes random.

</details>

<a id="commutators-uncertainty-compatibility-ex-18"></a>

### 18. Trace obstruction
Why can finite matrices not satisfy \\([Q,P]=i\\hbar I\\)?

<details>
<summary>Hint 1</summary>

Take the trace of each side of the proposed canonical relation.

</details>

<details>
<summary>Hint 2</summary>

Cyclicity annihilates the commutator trace, while the identity has positive dimension.

</details>

<details>
<summary>Full solution</summary>

Cyclicity gives \\(\\operatorname{Tr}(QP-PQ)=0\\), while \\(\\operatorname{Tr}(i\\hbar I)=i\\hbar n\\) in dimension \\(n>0\\).

</details>

<a id="commutators-uncertainty-compatibility-ex-19"></a>

### 19. Statistical boundary
Is the standard error of an estimated mean equal to \\(\\Delta A\\)?

<details>
<summary>Hint 1</summary>

Distinguish the distribution of one trial from the distribution of an average.

</details>

<details>
<summary>Hint 2</summary>

Independent identically distributed trials reduce the mean variance by a factor N.

</details>

<details>
<summary>Full solution</summary>

No. For independent trials it is approximately \\(\\Delta A/\\sqrt N\\); it describes estimator sampling, whereas \\(\\Delta A\\) describes one-trial outcome spread.

</details>

<a id="commutators-uncertainty-compatibility-ex-20"></a>

### 20. Compatibility scope
If \\([A,B]=0\\), must every state give sharp values of both?

<details>
<summary>Hint 1</summary>

The theorem supplies a basis of joint eigenvectors.

</details>

<details>
<summary>Hint 2</summary>

A state need not be one member of that basis; a superposition can occupy different eigenvalues.

</details>

<details>
<summary>Full solution</summary>

No. Commutation supplies a common eigenbasis, but a superposition of its basis vectors has nonzero spreads.

</details>

## Chapter summary

Commutators encode simultaneous diagonalization, dynamics, and generator algebra. Robertson is the commutator-only shadow of a stronger covariance relation; qubit geometry and entropy give complementary bounds. Preparation spread, sequential disturbance, and statistical estimation are distinct claims. Canonical position and momentum require the domain-aware infinite-dimensional setting still to come.

[Previous chapter](#/item/book-two-state-quantum-mechanics?chapter=pictures-generators-propagators) · [Next chapter](#/item/book-two-state-quantum-mechanics?chapter=symmetries-angular-momentum-spin) · [Book overview](#/item/book-two-state-quantum-mechanics)
`;export{e as default};