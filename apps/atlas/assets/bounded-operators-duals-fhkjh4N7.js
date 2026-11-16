var e=`---
parent_id: book-functional-analysis
chapter_id: bounded-operators-duals
title: "Bounded Operators and Dual Spaces"
level: graduate
license: CC BY-SA 4.0
---

# Bounded Operators and Dual Spaces

A linear formula becomes useful in analysis when small input errors produce controlled output errors. The operator norm records the best global amplification bound. It turns continuous linear maps into a normed space of their own, makes composition quantitative, and lets an infinite series of operators define an actual inverse. Scalar-valued operators form the dual space, whose elements probe vectors through continuous measurements.

Read [Normed and Banach Spaces](normed-banach-spaces.md) first, including its completeness proofs for sequence spaces and its criterion for absolutely summable series. Elementary matrix multiplication explains the order of composition, but no finite-dimensional basis argument can replace the estimates here. We will distinguish domain completeness from target completeness, identify two concrete sequence-space duals, and construct inverses under a small-perturbation assumption. Hahn–Banach in the next chapter will supply general extension and separation results that are not assumed here.

## Continuity is equivalent to one homogeneous bound

**Theorem 2.1 (Boundedness criterion).** For a linear map \\(T:X\\to Y\\) between normed spaces, the following conditions are equivalent: continuity everywhere; continuity at zero; existence of \\(C<\\infty\\) with \\(\\|Tx\\|\\le C\\|x\\|\\) for every \\(x\\); and bounded image of the unit ball.

*Proof.* Everywhere continuity implies continuity at zero. If \\(T\\) is continuous at zero, some \\(\\delta>0\\) makes \\(\\|Th\\|<1\\) whenever \\(\\|h\\|<\\delta\\). For \\(x\\ne0\\), substitute \\(h=\\delta x/(2\\|x\\|)\\), giving \\(\\|Tx\\|<2\\|x\\|/\\delta\\); the same non-strict bound holds at zero. A homogeneous bound immediately bounds the unit ball. Conversely if the unit ball image has bound \\(M\\), rescaling nonzero vectors gives \\(\\|Tx\\|\\le M\\|x\\|\\). Finally such a bound yields \\(\\|Tx-Ty\\|\\le M\\|x-y\\|\\), proving continuity at every point. ∎

**Definition 2.2 (Operator space).** The vector space of bounded linear maps is \\(\\mathcal L(X,Y)\\), with norm
\\[
 \\|T\\|=\\sup_{\\|x\\|\\le1}\\|Tx\\|.
\\]
This is the smallest admissible bound in Theorem 2.1. The triangle inequality and homogeneity follow pointwise and then by taking the supremum. If the norm is zero, \\(T\\) vanishes on the unit ball and hence everywhere by rescaling, proving definiteness.

The supremum need not be attained. A bounded functional on a Banach space may have vectors whose outputs approach the norm without any unit vector attaining it. Definitions and proofs should use approximating vectors when necessary, rather than importing a finite-dimensional maximum principle.

**Proposition 2.3 (Composition bound).** For bounded \\(T:X\\to Y\\) and \\(S:Y\\to Z\\), the composite is bounded and
\\[
 \\|ST\\|\\le\\|S\\|\\|T\\|.
\\]

*Proof.* For every \\(x\\), \\(\\|S(Tx)\\|\\le\\|S\\|\\|Tx\\|\\le\\|S\\|\\|T\\|\\|x\\|\\). Take the supremum over the unit ball. ∎

Order matters: \\(ST\\) means apply \\(T\\) first. Different operator products need not commute even when both directions are defined. Most power-series identities for one operator are safe because powers of that single operator commute; identities involving unrelated operators need a separate commutation hypothesis.

## Concrete operators and exact norms

**Worked example 2.4 (Point evaluation and integration).** On \\(C([0,1])\\) with uniform norm, evaluation \\(E_a(f)=f(a)\\) satisfies \\(|E_af|\\le\\|f\\|_\\infty\\). The constant function one attains equality, so \\(\\|E_a\\|=1\\). The Riemann integral functional \\(J(f)=\\int_0^1f(t)dt\\) also has norm one: the upper bound follows from \\(|Jf|\\le\\|f\\|_\\infty\\), and the same constant function attains it.

Changing the input norm changes continuity. On \\(C^1([0,1])\\) with the supremum norm alone, differentiation at one, \\(D(f)=f'(1)\\), is unbounded: \\(f_n(x)=x^n\\) has norm one but \\(D(f_n)=n\\). With the stronger norm \\(\\|f\\|_\\infty+\\|f'\\|_\\infty\\), that functional is bounded by one. “This linear operation is continuous” is incomplete until its domain and norm have been stated.

**Worked example 2.5 (The unilateral shift).** On \\(\\ell^2\\), let \\(R(x_1,x_2,\\ldots)=(0,x_1,x_2,\\ldots)\\), and let \\(L(x_1,x_2,\\ldots)=(x_2,x_3,\\ldots)\\). The right shift preserves the square norm, so \\(\\|R\\|=1\\). The left shift cannot increase it and attains norm one at the second unit vector, so \\(\\|L\\|=1\\). We have \\(LR=I\\), while \\(RL\\) sets the first coordinate to zero and preserves the rest. Hence \\(RL\\ne I\\).

This provides a bounded operator with a left inverse that is not a two-sided inverse. Finite-dimensional rank intuition would incorrectly rule it out because it uses dimensions that no longer behave as finite integers. The formulas themselves identify which map is injective, which is surjective and why the two product orders differ.

## Completeness of operator spaces and duals

**Theorem 2.6 (Banach target gives a Banach operator space).** If \\(Y\\) is Banach and \\(X\\) is normed, then \\(\\mathcal L(X,Y)\\) is Banach. The domain \\(X\\) need not be complete.

*Proof.* Let \\((T_n)\\) be Cauchy in operator norm. For each \\(x\\), the estimate \\(\\|T_nx-T_mx\\|\\le\\|T_n-T_m\\|\\|x\\|\\) makes the output sequence Cauchy, so target completeness gives a limit \\(Tx\\in Y\\). Passing to limits in linearity proves \\(T\\) linear. A Cauchy sequence of operator norms is bounded, say \\(\\|T_n\\|\\le M\\), and taking limits gives \\(\\|Tx\\|\\le M\\|x\\|\\), proving boundedness.

Given \\(\\varepsilon>0\\), choose \\(N\\) with \\(\\|T_n-T_m\\|<\\varepsilon\\) for \\(n,m\\ge N\\). Pass \\(m\\to\\infty\\) for each fixed input, obtaining \\(\\|(T_n-T)x\\|\\le\\varepsilon\\|x\\|\\). Taking the supremum over the unit ball gives \\(\\|T_n-T\\|\\le\\varepsilon\\). Thus the sequence converges in operator norm. ∎

**Definition 2.7 (Continuous dual).** The dual \\(X^*\\) is \\(\\mathcal L(X,\\mathbb F)\\), where \\(\\mathbb F\\) is the underlying real or complex scalar field, with the operator norm. Its members are bounded linear functionals.

Since the scalar field is complete, Theorem 2.6 makes \\(X^*\\) Banach even when \\(X\\) is incomplete. This is an early example of why a theorem's completeness assumption belongs to a particular space rather than the vague statement that everything involved must be Banach.

A complex-linear functional satisfies \\(\\phi(ix)=i\\phi(x)\\). A real-linear map on the same underlying real space need not satisfy this identity. Its real part is a real functional, but recovering a complex functional from a real one requires a construction that will enter the complex Hahn–Banach theorem. Keep the scalar field fixed when describing the dual.

We have not yet proved that every nonzero vector can be detected by a bounded functional or that its norm equals a supremum over the dual unit ball. Those conclusions follow from Hahn–Banach in the next chapter. Concrete examples can be analyzed directly without using those general facts prematurely.

## Two duals identified from coordinates

**Theorem 2.8 (The dual of \\(\\ell^1\\)).** Every bounded scalar sequence \\(a=(a_n)\\) defines a bounded functional
\\[
 \\phi_a(x)=\\sum_{n=1}^{\\infty}a_nx_n\\quad(x\\in\\ell^1),
\\]
with \\(\\|\\phi_a\\|=\\|a\\|_\\infty\\). Every member of \\((\\ell^1)^*\\) arises uniquely in this way.

*Proof.* Absolute convergence and the upper bound follow from \\(\\sum|a_nx_n|\\le\\|a\\|_\\infty\\|x\\|_1\\). Testing each coordinate unit vector shows \\(\\|\\phi_a\\|\\ge|a_n|\\) for every \\(n\\); take their supremum. For an arbitrary \\(\\phi\\in(\\ell^1)^*\\), set \\(a_n=\\phi(e_n)\\). These values are bounded by \\(\\|\\phi\\|\\). Finite truncations of \\(x\\) converge in \\(\\ell^1\\), and continuity yields
\\(\\phi(x)=\\lim_N\\sum_{n\\le N}a_nx_n\\). Uniqueness follows by testing \\(e_n\\) again. ∎

**Theorem 2.9 (The dual of \\(c_0\\)).** Every \\(a\\in\\ell^1\\) defines a bounded functional on \\(c_0\\) by the same sum formula, with norm \\(\\|a\\|_1\\). Every member of \\((c_0)^*\\) arises uniquely in this way.

*Proof.* The sum converges absolutely and has modulus at most \\(\\|a\\|_1\\|x\\|_\\infty\\). For a given finite \\(N\\), choose a finitely supported unit-ball vector with coordinates \\(x_n=\\overline{a_n}/|a_n|\\) when \\(a_n\\ne0\\), and zero when it is zero, for \\(n\\le N\\). Then \\(\\phi_a(x)=\\sum_{n\\le N}|a_n|\\), showing the norm is at least each partial sum and hence at least \\(\\|a\\|_1\\).

Conversely, for \\(\\phi\\in(c_0)^*\\), put \\(a_n=\\phi(e_n)\\) and use that same finite sign choice. Boundedness gives \\(\\sum_{n\\le N}|a_n|\\le\\|\\phi\\|\\) for every \\(N\\), so \\(a\\in\\ell^1\\). Finite truncations converge in the supremum norm for every \\(x\\in c_0\\). Continuity therefore gives the sum representation. Coordinate tests prove uniqueness. ∎

For real scalars the sign choice is simply \\(\\operatorname{sgn}(a_n)\\). In the complex case conjugating the coefficient's phase makes the product nonnegative. This convention concerns a complex-linear pairing \\(\\sum a_nx_n\\); one should not silently insert a conjugation on the variable and then still call it linear.

**Worked example 2.10 (An operator norm with no maximizing vector).** Let \\(a_n=1-1/(n+1)\\) and consider its functional on \\(\\ell^1\\). Theorem 2.8 gives norm one, since \\(\\sup a_n=1\\). For any nonzero \\(x\\) with \\(\\|x\\|_1=1\\),
\\[
 |\\phi_a(x)|\\le\\sum a_n|x_n|
 =1-\\sum\\frac{|x_n|}{n+1}<1.
\\]
The strict inequality holds because some nonzero coordinate contributes a positive term. Yet \\(\\phi_a(e_n)=a_n\\to1\\). The norm is a supremum approached by unit vectors and is not attained on any unit vector. This is why the norm definition and later proofs use approximation to a supremum rather than a maximum.

## Pulling measurements back along an operator

A bounded map also acts on continuous measurements, with the direction reversed. If \\(T:X\\to Y\\), define its dual operator by
\\[
 T^*:Y^*\\to X^*,\\qquad T^*\\phi=\\phi\\circ T.
\\]
The superscript denotes this dual operation; it does not assert an inner product or a Hilbert-space adjoint, which is a later specialization.

**Proposition 2.10a (Dual operator).** The dual operator is linear and bounded with \\(\\|T^*\\|\\le\\|T\\|\\). For compatible \\(S,T\\), one has \\((ST)^*=T^*S^*\\).

*Proof.* Composition with \\(T\\) preserves addition and scalar multiplication of scalar-valued functionals. The composition estimate gives \\(\\|\\phi\\circ T\\|\\le\\|\\phi\\|\\|T\\|\\), proving boundedness and the norm inequality. For a functional \\(\\psi\\) on the final target and \\(x\\in X\\),
\\[
 [(ST)^*\\psi](x)=\\psi(S(Tx))=[T^*(S^*\\psi)](x).
\\]
Equality on every input proves the operator identity. ∎

For example let \\(T:C([0,1])\\to C([0,1])\\) send \\(f\\) to the function \\(t\\mapsto f(t^2)\\). It has norm one because the map \\(t\\mapsto t^2\\) reaches the whole interval. If \\(\\delta_a\\) is evaluation at \\(a\\), then
\\[
 T^*\\delta_a(f)=\\delta_a(Tf)=f(a^2)=\\delta_{a^2}(f).
\\]
The dual map transports a measurement on the output back to the corresponding measurement on the input. The reversed composition order follows from exactly this interpretation. Proving \\(\\|T^*\\|=\\|T\\|\\) for arbitrary normed spaces needs enough functionals to detect output norms; Hahn–Banach will supply that missing lower bound. The present upper bound does not assume it.

A second useful construction turns one functional into a vector-valued operator. Fix \\(\\phi\\in X^*\\) and \\(y\\in Y\\), and put \\(Rx=\\phi(x)y\\). Its range lies in the one-dimensional span of \\(y\\), and
\\[
 \\|R\\|=\\|\\phi\\|\\|y\\|.
\\]
The upper bound is the defining functional estimate. For the reverse bound, if \\(y\\ne0\\), take unit-ball vectors whose functional values approach \\(\\|\\phi\\|\\); their output norms approach the claimed product. If \\(y=0\\), both sides are zero. This proof works even for a functional whose norm is never attained.

Finite sums of such operators are bounded finite-rank maps, with a norm bound obtained by adding the individual products. Their role later is to approximate more complicated operators, but an approximation claim must specify operator norm, strong convergence or another topology. A sequence of finite-rank approximations can converge strongly while staying a fixed distance away in operator norm, as the coordinate projections in the uniform-boundedness chapter demonstrate. Finite-dimensional range at each stage does not make those convergence notions interchangeable.

## Operator series and inverses

For a Banach space \\(X\\), the operator space \\(\\mathcal L(X,X)\\) is complete and its composition satisfies the product estimate. This permits an infinite geometric construction in the operator norm.

**Theorem 2.11 (Neumann inverse).** If \\(B\\in\\mathcal L(X,X)\\), \\(X\\) is Banach, and \\(\\|B\\|<1\\), then \\(I-B\\) is invertible with bounded inverse
\\[
 (I-B)^{-1}=\\sum_{n=0}^{\\infty}B^n,
 \\qquad \\|(I-B)^{-1}\\|\\le\\frac1{1-\\|B\\|}.
\\]

*Proof.* The series of norms is bounded by \\(\\sum\\|B\\|^n<\\infty\\), so completeness of the operator space makes the series converge in operator norm to \\(S\\). The finite geometric identity holds in both orders:
\\[
 (I-B)\\sum_{n=0}^{N}B^n=I-B^{N+1}
 =\\left(\\sum_{n=0}^{N}B^n\\right)(I-B).
\\]
The product estimate permits passage to the limit, and \\(\\|B^{N+1}\\|\\to0\\). Thus \\((I-B)S=S(I-B)=I\\). The sum of the norm bounds gives the estimate. ∎

Both inverse identities were proved. A single identity would be insufficient, as the shift example showed. The strict norm bound is sufficient but not necessary: an operator may be invertible even when this particular geometric series does not converge.

**Corollary 2.12 (Small perturbations of an invertible operator).** If \\(A:X\\to X\\) has a bounded inverse and \\(\\|A^{-1}E\\|<1\\), then \\(A+E\\) has bounded inverse
\\[
 (A+E)^{-1}=(I+A^{-1}E)^{-1}A^{-1}.
\\]
In particular this holds whenever \\(\\|E\\|<1/\\|A^{-1}\\|\\).

*Proof.* Factor \\(A+E=A(I+A^{-1}E)\\). Apply Theorem 2.11 to \\(B=-A^{-1}E\\), then invert the product in the correct reverse order. The sufficient scalar inequality follows from the composition bound. ∎

This shows that invertible bounded operators form an open subset of the operator space. It does not prove that every bounded bijection has a bounded inverse; that is the bounded inverse theorem, requiring Banach hypotheses and the open mapping argument later. Here the bounded inverse of \\(A\\) was an assumption.

## Extending an operator from a dense domain

Let D be a dense linear subspace of a normed space X, let Y be Banach, and let T:D→Y be linear with ||Td||≤C||d|| for every d in D. Then T has a unique bounded linear extension to X, with the same operator norm. Completeness is required in the target; X need not itself be complete.

For x in X choose dn in D tending to x. The estimate ||Tdn−Tdm||≤C||dn−dm|| makes Tdn Cauchy in Y, so it has a limit. If en is another approximation to x, then ||Tdn−Ten||≤C||dn−en|| tends to zero, proving that the limit is independent of choice. Define the extension by this limit. Approximating a sum and scalar multiple proves linearity, and passing to the limit in the bound gives ||Tx||≤C||x||. The extension agrees with the original operator on D. Uniqueness follows by continuity and density.

The norm cannot decrease under restriction to D's unit ball in the limiting sense. Given x with ||x||<1, choose dn→x that eventually remain in the unit ball; then ||Tx|| is bounded by the original norm. Scaling vectors on the sphere inward and passing to the limit gives the same bound there. Together with the obvious restriction inequality this proves exact equality of the two operator norms, even if neither norm is attained at a particular vector.

Applying the theorem with X replaced by the Banach completion of D shows that every bounded map from D into a Banach target has a unique norm-preserving extension to that completion. In particular the continuous dual of a normed space and the dual of its completion are canonically isometrically the same: scalar-valued bounded functionals extend, and restriction recovers them uniquely. Completion adds vectors needed for limits without adding independent bounded scalar measurements.

The target hypothesis has a concrete obstruction. The identity on finitely supported sequences, with square norm and target still the finitely supported sequences, is bounded. It cannot extend from the domain's completion ℓ2 into that same incomplete target while agreeing on truncations: the truncations of an infinitely supported ℓ2 vector would force the image to be that vector, which is absent from the target. Extending into the target's completion instead is possible.

This result is often the final step after defining an integral transform on elementary functions. The essential work is first proving a uniform operator estimate in the norm used for completion. A sequence of plausible formulas, pointwise convergence on each elementary input or finite-dimensional computability does not replace that estimate. Once the estimate and density are known, the extension theorem supplies existence, uniqueness and its exact norm in a single controlled argument.

## Exercises

### Exercise 2.1 {#bounded-operators-duals-ex-1}

Prove that the map \\(T:\\mathbb R^2\\to\\mathbb R\\), \\(T(x,y)=3x-4y\\), has norm five for Euclidean input norm.

<details><summary>Hint 1</summary>
Use Cauchy–Schwarz for the upper bound.
</details>
<details><summary>Hint 2</summary>
Test a unit vector parallel to \\((3,-4)\\).
</details>
<details><summary>Solution</summary>
Cauchy–Schwarz gives \\(|3x-4y|\\le5\\sqrt{x^2+y^2}\\), so the norm is at most five. At \\((x,y)=(3/5,-4/5)\\), the input norm is one and the output is five. Hence the exact operator norm is five. Changing the input norm would change the maximizing geometry and possibly the value.
</details>

### Exercise 2.2 {#bounded-operators-duals-ex-2}

On \\(C([0,1])\\), find the norm of \\(T(f)=\\int_0^1t f(t)dt\\).

<details><summary>Hint 1</summary>
Bound \\(|f|\\) by its uniform norm inside the integral.
</details>
<details><summary>Hint 2</summary>
Test the constant function one.
</details>
<details><summary>Solution</summary>
We have \\(|T(f)|\\le\\|f\\|_\\infty\\int_0^1t\\,dt=\\|f\\|_\\infty/2\\). The constant one has norm one and output one half, so the operator norm is exactly one half. The nonnegative weight makes this constant an exact maximizing function rather than merely an approximating one.
</details>

### Exercise 2.3 {#bounded-operators-duals-ex-3}

Prove that a linear map between finite-dimensional normed spaces is bounded.

<details><summary>Hint 1</summary>
Write the input in a basis and bound the images of basis vectors.
</details>
<details><summary>Hint 2</summary>
Use finite-dimensional norm equivalence to control the coordinates.
</details>
<details><summary>Solution</summary>
If \\(x=\\sum a_je_j\\), then \\(\\|Tx\\|\\le\\sum|a_j|\\|Te_j\\|\\le C|a|_2\\) for a finite constant depending on the basis images. Norm equivalence gives \\(|a|_2\\le C'\\|x\\|\\), so \\(\\|Tx\\|\\le CC'\\|x\\|\\). The finite basis is essential to this argument; arbitrary linear maps on infinite-dimensional normed spaces need not be continuous.
</details>

### Exercise 2.4 {#bounded-operators-duals-ex-4}

For the left and right shifts, prove \\(LR=I\\) and \\(RL\\ne I\\), and identify their kernels.

<details><summary>Hint 1</summary>
Apply both composites to an arbitrary sequence.
</details>
<details><summary>Hint 2</summary>
The first coordinate is the only information lost by the left shift.
</details>
<details><summary>Solution</summary>
Right shifting inserts a zero and left shifting removes it, so \\(LRx=x\\). Left shifting first discards \\(x_1\\), then right shifting gives \\((0,x_2,x_3,\\ldots)\\), so \\(RL\\ne I\\). The right shift has zero kernel because all original coordinates remain. The left shift has kernel \\(\\operatorname{span}\\{e_1\\}\\). Thus a left inverse forces injectivity of the operator it follows, but need not force surjectivity.
</details>

### Exercise 2.5 {#bounded-operators-duals-ex-5}

Why can \\(X^*\\) be complete even when \\(X\\) is incomplete?

<details><summary>Hint 1</summary>
Inspect where completeness enters the operator-space proof.
</details>
<details><summary>Hint 2</summary>
The pointwise limit is taken in the scalar target.
</details>
<details><summary>Solution</summary>
An operator-norm Cauchy sequence of functionals is pointwise Cauchy at every fixed vector. Scalar completeness supplies each limit, and the uniform norm estimate makes the limit bounded and the convergence in operator norm. No limit of vectors in the input space is constructed, so input completeness is unnecessary. Taking \\(X\\) as the incomplete polynomial space with uniform norm gives a concrete case with a Banach continuous dual.
</details>

### Exercise 2.6 {#bounded-operators-duals-ex-6}

Let \\(a_n=(-1)^n\\). Determine the norm of \\(\\phi_a\\) on \\(\\ell^1\\) and explain why the same coordinate formula does not define a bounded functional on all of \\(c_0\\).

<details><summary>Hint 1</summary>
The coefficient sequence is bounded but not summable.
</details>
<details><summary>Hint 2</summary>
Use finite vectors whose signs cancel the coefficient signs.
</details>
<details><summary>Solution</summary>
On \\(\\ell^1\\) the norm is \\(\\|a\\|_\\infty=1\\). On \\(c_0\\), take the finite vector with first \\(N\\) coordinates \\((-1)^n\\) and the rest zero; its uniform norm is one while the formula gives \\(N\\). Thus no bounded extension to all of \\(c_0\\) exists with those coordinate values. The coefficient summability required by Theorem 2.9 fails.
</details>

### Exercise 2.7 {#bounded-operators-duals-ex-7}

For \\(a_n=2^{-n}\\), compute the norm of its functional on \\(c_0\\), and decide whether it attains that norm on the unit ball.

<details><summary>Hint 1</summary>
The norm is the sum of the positive coefficients.
</details>
<details><summary>Hint 2</summary>
Equality would force all coordinates to have modulus one and matching phase.
</details>
<details><summary>Solution</summary>
The norm is \\(\\sum2^{-n}=1\\). If a unit-ball input attained modulus one, equality in the bound \\(\\sum2^{-n}|x_n|\\le1\\) would require \\(|x_n|=1\\) for every \\(n\\), since every weight is positive. Such a sequence cannot tend to zero. Hence the norm is not attained in \\(c_0\\), though finite initial all-ones vectors approach it as their lengths increase.
</details>

### Exercise 2.8 {#bounded-operators-duals-ex-8}

If \\(T_n\\to T\\) and \\(S_n\\to S\\) in operator norm with compatible spaces, prove \\(S_nT_n\\to ST\\) in operator norm.

<details><summary>Hint 1</summary>
Split the difference as \\(S_n(T_n-T)+(S_n-S)T\\).
</details>
<details><summary>Hint 2</summary>
A norm-convergent operator sequence has bounded norms.
</details>
<details><summary>Solution</summary>
The product estimate gives \\(\\|S_nT_n-ST\\|\\le\\|S_n\\|\\|T_n-T\\|+\\|S_n-S\\|\\|T\\|\\). Norm convergence makes \\(\\sup_n\\|S_n\\|<\\infty\\), while both difference norms tend to zero. Therefore the displayed bound tends to zero. This proves continuity of composition in the operator norm and justifies passing finite product identities to norm limits.
</details>

### Exercise 2.9 {#bounded-operators-duals-ex-9}

On a Banach space, if \\(\\|B\\|\\le1/3\\), bound the inverse norm of \\(I-B\\) and the error after truncating its Neumann series at \\(B^N\\).

<details><summary>Hint 1</summary>
Bound the whole geometric series and then its tail.
</details>
<details><summary>Hint 2</summary>
The operator norm of \\(B^n\\) is at most \\(3^{-n}\\).
</details>
<details><summary>Solution</summary>
The inverse norm is at most \\(1/(1-1/3)=3/2\\). The tail after degree \\(N\\) has norm at most \\(\\sum_{n>N}3^{-n}=3^{-N}/2\\). Both are upper bounds; cancellation or special algebraic structure may make the actual values smaller. The convergence and inverse identity require Banach completeness in addition to the numerical bound.
</details>

### Exercise 2.10 {#bounded-operators-duals-ex-10}

If \\(A\\) has bounded inverse with \\(\\|A^{-1}\\|\\le4\\), give a sufficient perturbation bound on \\(E\\) for \\(A+E\\) to be invertible, and bound its inverse norm when \\(\\|E\\|\\le1/8\\).

<details><summary>Hint 1</summary>
Use \\(\\|A^{-1}E\\|<1\\).
</details>
<details><summary>Hint 2</summary>
Combine the Neumann estimate with the remaining factor \\(A^{-1}\\).
</details>
<details><summary>Solution</summary>
The strict bound \\(\\|E\\|<1/4\\) suffices. If \\(\\|E\\|\\le1/8\\), then \\(\\|A^{-1}E\\|\\le1/2\\), so \\(\\|(I+A^{-1}E)^{-1}\\|\\le2\\). Multiplying by the inverse of \\(A\\) gives \\(\\|(A+E)^{-1}\\|\\le8\\). The estimate keeps the product order from Corollary 2.12 and does not assume the perturbation commutes with \\(A\\).
</details>

### Exercise 2.11 {#bounded-operators-duals-ex-11}

Prove that a bounded functional on a dense subspace has at most one continuous extension to the ambient normed space.

<details><summary>Hint 1</summary>
Approximate any ambient vector by a sequence from the dense subspace.
</details>
<details><summary>Hint 2</summary>
Both extensions must have the same limit on that sequence.
</details>
<details><summary>Solution</summary>
If two continuous extensions agree on the dense subspace, choose \\(m_n\\) from it converging to any given \\(x\\). Their values at \\(m_n\\) are equal at every index. Continuity makes the two limits respectively their values at \\(x\\), forcing equality there. Since \\(x\\) was arbitrary, the extensions are identical. This is uniqueness only; existence requires its own argument or theorem.
</details>

### Exercise 2.12 {#bounded-operators-duals-ex-12}

Explain why the Neumann theorem does not prove every bounded bijection between Banach spaces has a bounded inverse.

<details><summary>Hint 1</summary>
Identify the special norm-small form in its premise.
</details>
<details><summary>Hint 2</summary>
Factoring an arbitrary map through its inverse would already assume the desired boundedness.
</details>
<details><summary>Solution</summary>
The theorem constructs an inverse for operators of the form \\(I-B\\) with \\(\\|B\\|<1\\). An arbitrary bounded bijection need not be expressible in that form with a proved small bound. The perturbation corollary starts with an already bounded inverse, so using it to establish that same premise would be circular. The general bounded inverse theorem requires the later open mapping argument and both Banach hypotheses.
</details>

## Sources and scope

This is original exposition and exercise development. The local source lineage is the Quarto Banach-pillars chapter, with sequence-space foundations supplied in the preceding chapter. Conway and Brezis are syllabus benchmarks. General separation by dual functionals is deliberately deferred to Hahn–Banach, and the bounded inverse theorem to open mapping; neither is inferred from the concrete dual representations or the small-perturbation estimate.

## Summary

The operator norm measures uniform amplification and controls composition. A Banach target makes its operator space complete, so every continuous dual is Banach. The duals of \\(\\ell^1\\) and \\(c_0\\) arise from different coefficient bounds, and operator norms need not be attained. Completeness plus a geometric norm bound constructs Neumann inverses, while general dual extension and inverse theorems require further ideas. The next chapter proves Hahn–Banach, making enough continuous functionals available to detect every vector's norm.
`;export{e as default};