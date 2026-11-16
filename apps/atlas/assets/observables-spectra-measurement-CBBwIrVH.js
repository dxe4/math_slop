var e=`---
parent_id: book-two-state-quantum-mechanics
chapter_id: observables-spectra-measurement
title: "Observables, Spectra, and Ideal Measurement"
level: advanced-undergraduate
estimated_minutes: 200
license: CC BY-SA 4.0
status: draft
---

# Observables, Spectra, and Ideal Measurement

A state does not supply a list of hidden values for every possible question. Quantum theory instead pairs a preparation state with a measurement model and returns an outcome distribution. In finite dimensions, Hermitian operators, orthogonal projectors, and the spectral theorem make that rule exact.

This chapter treats ideal projective measurement. It is a mathematical model of outcome statistics and conditional state update, not a microscopic derivation of a detector. Generalized measurements and channels come in Chapter 16.

## 1. Linear operators and adjoints

An operator $A$ on $\\mathbb C^n$ is a complex matrix. Its adjoint $A^\\dagger$ is its conjugate transpose, characterized by

\\[
\\langle u\\mid Av\\rangle=\\langle A^\\dagger u\\mid v\\rangle.
\\]

An operator is Hermitian when $A=A^\\dagger$, unitary when $A^\\dagger A=I$, and positive when $\\langle v\\mid Av\\rangle\\ge0$ for every $v$. Orthogonal projectors satisfy $P=P^\\dagger=P^2$ and are positive.

If $A$ is Hermitian and $Av=av$ with nonzero $v$, then

\\[
a\\langle v\\mid v\\rangle=\\langle v\\mid Av\\rangle
=\\langle Av\\mid v\\rangle=a^*\\langle v\\mid v\\rangle,
\\]

so $a$ is real. If $Av=av$ and $Aw=bw$ with distinct eigenvalues, then $(a-b)\\langle v\\mid w\\rangle=0$; the eigenvectors are orthogonal.

## 2. The finite spectral theorem

Every Hermitian matrix has an orthonormal eigenbasis. Grouping equal eigenvalues gives

\\[
A=\\sum_a aP_a,
\\]

where $P_a$ projects onto the whole eigenspace for eigenvalue $a$. The projectors obey

\\[
P_aP_b=0\\quad(a\\ne b),
\\qquad \\sum_aP_a=I.
\\]

Degeneracy matters. Choosing one vector inside a multidimensional eigenspace is a coordinate choice; the observable outcome identifies the eigenspace unless the apparatus resolves an additional commuting observable.

**Theorem 2.1 (finite-dimensional Hermitian spectral theorem).** On a finite-dimensional complex inner-product space, a Hermitian operator has an orthonormal eigenbasis and a decomposition into mutually orthogonal real-eigenvalue projectors summing to the identity.

*Proof.* The real-valued function $R(v)=\\langle v\\mid Av\\rangle$ is continuous on the unit sphere, compact as a subset of the underlying finite-dimensional real space. Let $e$ be a unit maximizer and $\\lambda=R(e)$. For every $w\\perp e$, vary along $(e+tw)/\\|e+tw\\|$ with real $t$. Its derivative at zero is $2\\operatorname{Re}\\langle w\\mid Ae\\rangle$, which must vanish. Repeating with $iw$ shows the imaginary part vanishes too. Thus $Ae$ has no component perpendicular to $e$, so $Ae=\\lambda e$. The orthogonal complement is invariant: for $w\\perp e$, $\\langle e\\mid Aw\\rangle=\\langle Ae\\mid w\\rangle=0$. The restricted operator is still Hermitian. Induction on the dimension gives an orthonormal eigenbasis in that complement. Together with $e$ this proves the basis assertion. Group the basis vectors with equal eigenvalue; their rank-one projector sums are independent of the chosen basis within each eigenspace, by the preceding chapter's projection theorem. Their orthogonality and completeness prove the displayed spectral identities. This argument uses compactness in finite dimension and does not prove the spectral theorem for arbitrary unbounded operators.

The decomposition also proves that a Hermitian matrix is positive semidefinite exactly when all its eigenvalues are nonnegative: its quadratic form is $\\sum_a a\\|P_av\\|^2$, and an eigenvector detects any negative value. In this chapter “positive” includes zero eigenvalues; positive definite is the stronger strict inequality for every nonzero vector.

### Worked spectral decomposition

For $X=\\begin{pmatrix}0&1\\\\1&0\\end{pmatrix}$, eigenvectors are $\\lvert+\\rangle=(1,1)^\\mathsf T/\\sqrt2$ and $\\lvert-\\rangle=(1,-1)^\\mathsf T/\\sqrt2$, with eigenvalues $+1,-1$. Thus

\\[
X=\\lvert+\\rangle\\langle+\\rvert-\\lvert-\\rangle\\langle-\\rvert.
\\]

Multiplying the matrices recovers $\\begin{pmatrix}0&1\\\\1&0\\end{pmatrix}$.

### Worked example: a genuinely complex Hermitian observable

Take $A=\\begin{pmatrix}2&i\\\\-i&2\\end{pmatrix}$. Its eigenvectors $u_3=(1,-i)^\\mathsf T/\\sqrt2$ and $u_1=(1,i)^\\mathsf T/\\sqrt2$ have eigenvalues three and one. The corresponding projectors are

$$P_3=\\frac12\\begin{pmatrix}1&i\\\\-i&1\\end{pmatrix},\\qquad
P_1=\\frac12\\begin{pmatrix}1&-i\\\\i&1\\end{pmatrix}.$$

They sum to $I$, multiply to zero, and give $A=3P_3+P_1$. In preparation $|0\\rangle$, both outcomes have probability $1/2$. The expectation is two, which is not an eigenvalue, and the variance is $[(3-2)^2+(1-2)^2]/2=1$. Conditional on outcome three, normalization of $P_3|0\\rangle=(1,-i)^\\mathsf T/2$ gives $u_3$. A real transpose would conjugate none of the imaginary entries and spoil the projector calculation; the example therefore tests the complex convention as well as diagonalization.

## 3. Born probabilities

For normalized $\\lvert\\psi\\rangle$ and projective measurement $\\{P_a\\}$, the probability of outcome $a$ is

\\[
p(a)=\\langle\\psi\\rvert P_a\\lvert\\psi\\rangle
=\\lVert P_a\\psi\\rVert^2.
\\]

Positivity makes each probability nonnegative, and completeness gives

\\[
\\sum_ap(a)=\\langle\\psi\\rvert I\\lvert\\psi\\rangle=1.
\\]

In the nondegenerate case $P_a=\\lvert a\\rangle\\langle a\\rvert$, so $p(a)=|\\langle a\\mid\\psi\\rangle|^2$. Probabilities are conditional on both preparation and measurement. A state vector alone does not select which observable is measured.

### Worked measurement in two bases

Let $\\lvert\\psi\\rangle=(\\sqrt3\\lvert0\\rangle+i\\lvert1\\rangle)/2$. Measuring $Z=\\operatorname{diag}(1,-1)$ gives probabilities $3/4$ and $1/4$. Measuring $X$ gives

\\[
|\\langle+\\mid\\psi\\rangle|^2=|\\langle-\\mid\\psi\\rangle|^2=\\frac12.
\\]

The same preparation supports different distributions because the questions differ.

## 4. Expectation, variance, and moments

The expectation of $A$ is

\\[
\\langle A\\rangle_\\psi=\\langle\\psi\\rvert A\\lvert\\psi\\rangle
=\\sum_aap(a).
\\]

It is an ensemble average over repeated trials prepared and measured in the same way. It need not be a possible single-trial outcome. For $Z$, a zero expectation can arise from equal frequencies of $+1$ and $-1$; zero is not an outcome.

The variance is

\\[
(\\Delta A)^2=\\langle A^2\\rangle-\\langle A\\rangle^2
=\\sum_a(a-\\langle A\\rangle)^2p(a).
\\]

It vanishes exactly when $\\psi$ lies in one eigenspace of $A$. In a degenerate eigenspace, zero variance does not select a unique vector.

To prove that claim, write $a_*=\\langle A\\rangle$ and use Hermiticity to obtain $(\\Delta A)^2=\\|(A-a_*I)\\psi\\|^2$. A squared norm vanishes exactly when its vector is zero, giving the eigenvector equation. Alternatively the spectral sum consists of nonnegative terms, so every occupied eigenspace must have the same value $a_*$. The expectation lies between the smallest and largest eigenvalues because it is a convex combination, but its location between them need not have any single-trial meaning. Variance is intrinsic to the ideal preparation-and-observable distribution; an additional detector-error model would modify the distribution being analyzed.

## 5. Conditional state update

For the minimally resolving ideal Lüders instrument, conditional on an outcome $a$ with nonzero probability, the state update is

\\[
\\lvert\\psi\\rangle\\longmapsto
\\frac{P_a\\lvert\\psi\\rangle}{\\sqrt{\\langle\\psi\\rvert P_a\\lvert\\psi\\rangle}}.
\\]

If the outcome is ignored, the corresponding density operator update is $\\rho\\mapsto\\sum_aP_a\\rho P_a$. These are operational rules for a specified measurement instrument. They do not answer whether collapse is fundamental, effective, epistemic, relative, or emergent.

Repeated measurement of the same projectors returns the same outcome with certainty immediately after the ideal update. Real devices may be destructive, noisy, weak, or measure a nearby observable, so repeatability is an assumption to test.

### Worked example: resolving a degeneracy changes the instrument

Let $A=\\operatorname{diag}(2,2,5)$ and $\\psi=(e_1+e_2+e_3)/\\sqrt3$. The outcome two has projector $P_2=\\operatorname{diag}(1,1,0)$, probability $2/3$, and Lüders conditional vector $\\psi_2=(e_1+e_2)/\\sqrt2$. Coherence between the first two coordinates is retained because the outcome did not distinguish them.

A different apparatus may first resolve all three coordinate labels, then report only whether the value is two or five. Its reported probabilities are the same, but conditional on reporting two and forgetting the coordinate label its state is the equal random preparation of $e_1$ and $e_2$, with density matrix $\\operatorname{diag}(1/2,1/2,0)$. In contrast $|\\psi_2\\rangle\\langle\\psi_2|$ has off-diagonal entries $1/2$ in that block. Measure $B=|e_1\\rangle\\langle e_2|+|e_2\\rangle\\langle e_1|$, with zero action on $e_3$. The Lüders state gives its plus-one outcome certainly; the resolved-and-forgotten state gives plus and minus with equal probabilities. Thus even a repeatable measurement with the same coarse probabilities need not realize the Lüders instrument. The update written above is an explicitly specified minimally resolving ideal model, not a consequence of outcome probabilities alone. Chapter 16 formalizes this distinction with measurement operators.

## 6. Compatible and incompatible observables

Two Hermitian matrices in finite dimensions possess a common orthonormal eigenbasis exactly when they commute: $[A,B]=AB-BA=0$. Then a state can have simultaneous sharp values, though a generic state need not.

*Proof of the equivalence.* If $AB=BA$, each eigenspace of $A$ is invariant under $B$, because $A(Bv)=B(Av)=aBv$. The restriction of $B$ to it is Hermitian, so the proved spectral theorem gives an orthonormal eigenbasis of $B$ there. Taking these bases across all eigenspaces gives a common eigenbasis. Conversely diagonal matrices in one basis commute, and conjugating back preserves that identity. Noncommuting matrices in dimension three or more can still share some eigenvectors. For example, a diagonal $A$ and a $B$ that fixes its first basis vector but mixes its last two may share that first vector while failing to commute on the remaining plane. The theorem concerns a complete common eigenbasis, not the existence of even one joint sharp state.

For Pauli matrices

\\[
X=\\begin{pmatrix}0&1\\\\1&0\\end{pmatrix},\\quad
Y=\\begin{pmatrix}0&-i\\\\i&0\\end{pmatrix},\\quad
Z=\\begin{pmatrix}1&0\\\\0&-1\\end{pmatrix},
\\]

one finds $[X,Y]=2iZ$ and cyclic permutations. No nonzero vector is a simultaneous eigenvector of $X$ and $Z$.

Compatibility is a structural statement about the observable pair. Disturbance is a statement about an instrument. They are related in ideal models but should not be used as synonyms.

## 7. Robertson's inequality with hypotheses visible

Let $A,B$ be Hermitian matrices and define centered vectors

\\[
u=(A-\\langle A\\rangle)\\psi,
\\qquad v=(B-\\langle B\\rangle)\\psi.
\\]

Cauchy–Schwarz gives $\\Delta A\\,\\Delta B\\ge|\\langle u\\mid v\\rangle|$. The imaginary part is half the commutator expectation, so

\\[
\\Delta A\\,\\Delta B\\ge\\frac12|\\langle[A,B]\\rangle|.
\\]

The right side may vanish even when neither variance does. The inequality then supplies no positive lower bound; it does not assert simultaneous sharpness. In infinite dimensions, domain conditions must also be checked.

## 8. Functions of an observable

The spectral representation defines

\\[
f(A)=\\sum_af(a)P_a.
\\]

Thus $A^2=\\sum_aa^2P_a$ and $e^{-itA}=\\sum_ae^{-ita}P_a$. Measuring $f(A)$ can merge outcomes: if $f(a)=f(b)$, its projector is $P_a+P_b$. Functional calculus is the bridge from spectra to time evolution.

That merged outcome does not by itself require first measuring the finer observable. For $A=Z$ and $f(x)=x^2$, $f(A)=I$ has one certain outcome and its Lüders operation leaves every state unchanged. Measuring $Z$ and then forgetting the result instead removes coherence between $|0\\rangle$ and $|1\\rangle$. Applied to $|+\\rangle$, the former preserves certain plus in an immediate $X$ measurement, while the latter gives equal signs. The observable $f(A)$ and a particular laboratory procedure that produces its labels must be distinguished.

All probabilities are invariant under a consistent passive basis change: $\\psi'=U^\\dagger\\psi$ and $P'_a=U^\\dagger P_aU$ give $\\langle\\psi'|P'_a|\\psi'\\rangle=\\langle\\psi|P_a|\\psi\\rangle$. Transforming the state coordinates while leaving the measurement matrix numerically fixed generally describes a different physical question. The same consistency applies to the spectral projectors, expectations and conditional update.

## 9. Measurement audit

The projection-valued-measure theorem, unbounded moment domains, and the earlier spectral reading's twisted momentum examples continue in [Wave Functions, Operators, and Domains](wave-functions-operators-domains.md). The finite spectral proof here is complete within its matrix scope; that continuation identifies the additional self-adjoint operator theorem rather than extending this induction to an infinite basis without justification.

Before reporting a probability, name:

1. the normalized preparation state;
2. the outcome labels and projectors;
3. whether degeneracy is resolved;
4. whether the result is conditional or outcome-averaged;
5. the ensemble and independence assumptions behind estimated frequencies;
6. detector errors, leakage, or selection effects omitted by the ideal model.

## Coarse outcomes retain uncertainty inside each spectral block

Suppose an observable has distinct eigenvalues aᵢ with probabilities pᵢ,
but an instrument reports only which group of eigenvalues occurred. Within
a group of positive probability, define the conditional mean and variance
using the normalized spectral probabilities. Expanding each squared deviation
from the overall mean around that conditional mean gives the ordinary
total-variance identity: the original variance is the mean of the within-group
variances plus the variance of the group means. The cross terms vanish
because conditional deviations have zero mean in each group.

Thus coarse reporting can remove visible spread without preparing an exact
eigenvalue of the original observable. For eigenvalues minus one and one
with equal weights, reporting both as a single outcome produces a constant
reported label. Its variance is zero, while the original observable still
has variance one. A label assigned to a spectral block is a function of
the observable, with its own units and spectrum; it is not the original
observable measured more accurately.

This distinction also separates information from disturbance. A Lüders
measurement of a grouped projector may preserve coherence inside that
block, whereas resolving the individual eigenvalues and discarding their
labels can destroy it. Both procedures return the same coarse probability.
Their different state updates can be distinguished by a later observable
that probes the within-block coherence. To specify a measurement, report
the projectors defining probabilities and the instrument defining the
conditional or unread state, rather than inferring both from the displayed
outcome labels alone.

## Exercises with complete solutions

<a id="observables-spectra-measurement-ex-1"></a>

### 1. Adjoint
Find the adjoint of $A=\\begin{pmatrix}1&i\\\\2&3-i\\end{pmatrix}$.

<details>
<summary>Hint 1</summary>

Complex conjugation and transposition are both required.

</details>

<details>
<summary>Hint 2</summary>

The upper-right entry of the adjoint comes from the lower-left entry of the original matrix.

</details>

<details>
<summary>Full solution</summary>

Conjugate and transpose: $A^\\dagger=\\begin{pmatrix}1&2\\\\-i&3+i\\end{pmatrix}$.

</details>

<a id="observables-spectra-measurement-ex-2"></a>

### 2. Hermitian test
For which real $a,b$ is $\\begin{pmatrix}a&i\\\\-i&b\\end{pmatrix}$ Hermitian?

<details>
<summary>Hint 1</summary>

A Hermitian diagonal is real.

</details>

<details>
<summary>Hint 2</summary>

Compare each off-diagonal entry with the conjugate of the opposite entry.

</details>

<details>
<summary>Full solution</summary>

For all real $a,b$; the diagonal entries are real and the off-diagonal entries are conjugates.

</details>

<a id="observables-spectra-measurement-ex-3"></a>

### 3. Real eigenvalues
Reproduce the one-line proof that a Hermitian eigenvalue is real.

<details>
<summary>Hint 1</summary>

Evaluate the same quadratic expression using the eigenvector equation in either slot.

</details>

<details>
<summary>Hint 2</summary>

The scalar in the first slot is conjugated, and the eigenvector norm is nonzero.

</details>

<details>
<summary>Full solution</summary>

If $Av=\\lambda v$, then $\\langle v\\mid Av\\rangle=\\lambda\\langle v\\mid v\\rangle$ and also $\\langle v\\mid Av\\rangle=\\langle Av\\mid v\\rangle=\\lambda^*\\langle v\\mid v\\rangle$. Since $v$ is nonzero, $\\lambda=\\lambda^*$.

</details>

<a id="observables-spectra-measurement-ex-4"></a>

### 4. Pauli spectra
Find the eigenvalues of $Z$.

<details>
<summary>Hint 1</summary>

Apply the diagonal matrix to each coordinate vector.

</details>

<details>
<summary>Hint 2</summary>

Its two diagonal entries are already its two eigenvalues.

</details>

<details>
<summary>Full solution</summary>

$Z\\lvert0\\rangle=\\lvert0\\rangle$ and $Z\\lvert1\\rangle=-\\lvert1\\rangle$, so the eigenvalues are $+1,-1$ with those eigenvectors.

</details>

<a id="observables-spectra-measurement-ex-5"></a>

### 5. Spectral reconstruction
Show $\\lvert0\\rangle\\langle0\\rvert-\\lvert1\\rangle\\langle1\\rvert=Z$.

<details>
<summary>Hint 1</summary>

Form the two rank-one outer products in the coordinate basis.

</details>

<details>
<summary>Hint 2</summary>

Their difference retains the first diagonal one and the second diagonal minus one.

</details>

<details>
<summary>Full solution</summary>

The two outer products are $\\operatorname{diag}(1,0)$ and $\\operatorname{diag}(0,1)$; their difference is $\\operatorname{diag}(1,-1)$.

</details>

<a id="observables-spectra-measurement-ex-6"></a>

### 6. Born normalization
Why do complete orthogonal projectors give probabilities summing to one?

<details>
<summary>Hint 1</summary>

Use linearity to bring the sum inside one expectation.

</details>

<details>
<summary>Hint 2</summary>

Completeness makes that sum the identity, and the state has unit norm.

</details>

<details>
<summary>Full solution</summary>

$\\sum_a\\langle\\psi\\rvert P_a\\lvert\\psi\\rangle=\\langle\\psi\\rvert(\\sum_aP_a)\\lvert\\psi\\rangle=\\langle\\psi\\rvert I\\lvert\\psi\\rangle=1$.

</details>

<a id="observables-spectra-measurement-ex-7"></a>

### 7. A $Z$ distribution
Measure $Z$ in $(3\\lvert0\\rangle+4\\lvert1\\rangle)/5$.

<details>
<summary>Hint 1</summary>

The two coefficients are already normalized real amplitudes.

</details>

<details>
<summary>Hint 2</summary>

Square them separately for the two distinct projective outcomes.

</details>

<details>
<summary>Full solution</summary>

The outcomes $+1,-1$ have probabilities $9/25,16/25$.

</details>

<a id="observables-spectra-measurement-ex-8"></a>

### 8. Its expectation
Compute the expectation in Exercise 7.

<details>
<summary>Hint 1</summary>

Average the two eigenvalues using their probabilities.

</details>

<details>
<summary>Hint 2</summary>

The average need not equal one of the available eigenvalues.

</details>

<details>
<summary>Full solution</summary>

$(9/25)-(16/25)=-7/25$, which is not itself a possible outcome.

</details>

<a id="observables-spectra-measurement-ex-9"></a>

### 9. Its variance
Compute the variance in Exercise 7.

<details>
<summary>Hint 1</summary>

For this observable the square is the identity.

</details>

<details>
<summary>Hint 2</summary>

Subtract the squared expectation from one, then take the nonnegative square root for the standard deviation.

</details>

<details>
<summary>Full solution</summary>

Since $Z^2=I$, $\\langle Z^2\\rangle=1$. Therefore the variance is $1-49/625=576/625$ and $\\Delta Z=24/25$.

</details>

<a id="observables-spectra-measurement-ex-10"></a>

### 10. Zero variance
Prove a normalized $\\psi$ has zero variance for $A$ exactly when it belongs to an eigenspace.

<details>
<summary>Hint 1</summary>

Rewrite the variance as a squared vector norm.

</details>

<details>
<summary>Hint 2</summary>

A zero norm gives precisely the eigenvector equation at the expectation value.

</details>

<details>
<summary>Full solution</summary>

The variance is $\\lVert(A-\\langle A\\rangle)\\psi\\rVert^2$. It is zero exactly when $(A-\\langle A\\rangle)\\psi=0$, the eigenvector equation; in a degenerate space every vector in that eigenspace qualifies.

</details>

<a id="observables-spectra-measurement-ex-11"></a>

### 11. Lüders update
If $\\psi=(\\lvert0\\rangle+2\\lvert1\\rangle)/\\sqrt5$ and the $Z$ outcome is $+1$, find the updated state.

<details>
<summary>Hint 1</summary>

Project first and compute the outcome probability.

</details>

<details>
<summary>Hint 2</summary>

Divide the projected vector by the square root of its probability, rather than by the probability itself.

</details>

<details>
<summary>Full solution</summary>

$P_+\\psi=\\lvert0\\rangle/\\sqrt5$ with probability $1/5$; after division by $\\sqrt{1/5}$, the state is $\\lvert0\\rangle$.

</details>

<a id="observables-spectra-measurement-ex-12"></a>

### 12. Zero-probability outcome
Why is the conditional update undefined when $p(a)=0$?

<details>
<summary>Hint 1</summary>

The probability is the squared norm of the projected vector.

</details>

<details>
<summary>Hint 2</summary>

A vanishing probability means a zero vector, which has no normalized ray.

</details>

<details>
<summary>Full solution</summary>

Its numerator is zero and normalization divides by zero. The conditioning event never occurs in the ideal model.

</details>

<a id="observables-spectra-measurement-ex-13"></a>

### 13. Repeatability
Show an immediate repeat of the same projective measurement reproduces $a$ after its update.

<details>
<summary>Hint 1</summary>

The updated vector lies entirely in one projector range.

</details>

<details>
<summary>Hint 2</summary>

That projector acts as identity there; all the other orthogonal projectors act as zero.

</details>

<details>
<summary>Full solution</summary>

The updated vector lies in the range of $P_a$, so $P_a\\psi'=\\psi'$ and every orthogonal $P_b$ annihilates it. The Born probabilities are one and zero.

</details>

<a id="observables-spectra-measurement-ex-14"></a>

### 14. Commutator
Compute $[X,Z]$.

<details>
<summary>Hint 1</summary>

Matrix multiplication order matters.

</details>

<details>
<summary>Hint 2</summary>

Subtract ZX from XZ and compare the result with the defined Y matrix.

</details>

<details>
<summary>Full solution</summary>

Direct multiplication gives $XZ=\\begin{pmatrix}0&-1\\\\1&0\\end{pmatrix}$ and $ZX=\\begin{pmatrix}0&1\\\\-1&0\\end{pmatrix}$, so $[X,Z]=\\begin{pmatrix}0&-2\\\\2&0\\end{pmatrix}=-2iY$.

</details>

<a id="observables-spectra-measurement-ex-15"></a>

### 15. Common eigenvector
Can $X$ and $Z$ share a nonzero eigenvector?

<details>
<summary>Hint 1</summary>

The nondegenerate Z eigenvectors are the two coordinate directions.

</details>

<details>
<summary>Hint 2</summary>

Applying X to either one gives the other direction, rather than a multiple of itself.

</details>

<details>
<summary>Full solution</summary>

No. A $Z$ eigenvector is proportional to $\\lvert0\\rangle$ or $\\lvert1\\rangle$, and $X$ swaps these rather than multiplying either by a scalar.

</details>

<a id="observables-spectra-measurement-ex-16"></a>

### 16. Robertson bound
For $\\lvert0\\rangle$, compute the Robertson lower bound for $X,Y$.

<details>
<summary>Hint 1</summary>

Use the Pauli commutator and the Z expectation of this state.

</details>

<details>
<summary>Hint 2</summary>

The standard deviations of both transverse Pauli observables are one.

</details>

<details>
<summary>Full solution</summary>

$[X,Y]=2iZ$ and $\\langle Z\\rangle=1$, so the lower bound is one. Indeed $\\Delta X=\\Delta Y=1$.

</details>

<a id="observables-spectra-measurement-ex-17"></a>

### 17. Informative and uninformative lower bounds
For $\\lvert+\\rangle$, what bound does Robertson give for $Y,Z$? Compare it with the bound for $X,Z$.

<details>
<summary>Hint 1</summary>

For Y,Z the commutator involves X, whose expectation is one in this state.

</details>

<details>
<summary>Hint 2</summary>

For X,Z it involves Y instead; zero commutator expectation is a state-specific statement.

</details>

<details>
<summary>Full solution</summary>

$[Y,Z]=2iX$ and $\\langle X\\rangle=1$, so it gives one, saturated by $\\Delta Y=\\Delta Z=1$. For $X,Z$, however, the bound uses $\\langle Y\\rangle=0$ and is zero even though $\\Delta Z=1$.

</details>

<a id="observables-spectra-measurement-ex-18"></a>

### 18. Function of $Z$
Compute $e^{-itZ}$.

<details>
<summary>Hint 1</summary>

Apply the scalar exponential separately to the two spectral values.

</details>

<details>
<summary>Hint 2</summary>

Their signs in the exponential are opposite.

</details>

<details>
<summary>Full solution</summary>

Spectral calculus gives $\\operatorname{diag}(e^{-it},e^{it})$.

</details>

<a id="observables-spectra-measurement-ex-19"></a>

### 19. Degenerate outcome
If $A=\\operatorname{diag}(2,2,5)$, what projector represents outcome $2$?

<details>
<summary>Hint 1</summary>

The observed eigenvalue two has a two-dimensional eigenspace.

</details>

<details>
<summary>Hint 2</summary>

Sum both coordinate projectors rather than choosing one arbitrary basis vector.

</details>

<details>
<summary>Full solution</summary>

$P_2=\\operatorname{diag}(1,1,0)$. Selecting only the first coordinate would invent a distinction the observable does not make.

</details>

<a id="observables-spectra-measurement-ex-20"></a>

### 20. Instrument boundary
Does a Born probability determine the post-measurement state of every apparatus?

<details>
<summary>Hint 1</summary>

An outcome distribution specifies effects but does not specify all conditional transformations.

</details>

<details>
<summary>Hint 2</summary>

Compare the coarse Lüders and resolved-and-forgotten instruments in the worked example.

</details>

<details>
<summary>Full solution</summary>

No. Probabilities specify outcome effects, while state update depends on the measurement instrument. The Lüders rule is an additional ideal repeatability model.

</details>

## Chapter summary

Hermitian operators have real spectral values and orthogonal eigenspaces. Projectors turn a normalized state into a probability distribution, expectations and variances summarize that distribution, and a specified ideal instrument supplies conditional updates. Commutation characterizes finite-dimensional compatibility, while uncertainty inequalities require careful interpretation. The next chapter exploits the complete geometry of two-state observables.

[Previous chapter](#/item/book-two-state-quantum-mechanics?chapter=complex-state-spaces) · [Next chapter](#/item/book-two-state-quantum-mechanics?chapter=two-state-geometry) · [Book overview](#/item/book-two-state-quantum-mechanics)
`;export{e as default};