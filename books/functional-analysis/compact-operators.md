
# Compact Operators

Bounded operators control size. Compact operators additionally turn bounded input sequences into outputs with convergent subsequences. This extra property is the infinite-dimensional substitute for some finite-dimensional arguments: compactness can convert an approximate relation into an actual vector equation. It also explains why many integral operators behave like large matrices while the identity on an infinite-dimensional space does not.

Preparation is the first eight chapters, particularly [Hilbert projection](hilbert-spaces.md), [orthonormal expansions](orthonormal-bases-riesz.md), and [operator norms](bounded-operators-duals.md). We use metric compactness, where compactness and sequential compactness agree. Compactness below concerns the norm topology unless a different topology is explicitly named.

The goals are to prove the closure and composition properties of compact operators, construct sequence and integral examples, distinguish strong from norm approximation, prove the compact-adjoint theorem, and establish the nonzero-eigenvalue mechanism behind the next spectral chapter.

## Definition and the sequence criterion

**Definition 9.1 (Compact operator).** A bounded linear map \(T:X\to Y\) is compact when the closure of the image of the closed unit ball is compact in \(Y\). Equivalently it sends every bounded sequence to a sequence with a norm-convergent subsequence.

*Proof of equivalence.* If the image unit-ball closure is compact, rescale a bounded input sequence into that ball and use sequential compactness. Conversely suppose the sequence property holds. Any sequence in the image ball has a convergent subsequence by choosing preimages in the ball. A sequence in its closure can be approximated termwise within \(1/n\) by image points; a convergent subsequence of those approximants gives a convergent subsequence with the same limit for the original sequence. Thus the closure is sequentially compact and hence compact as a metric space. ∎

The sequence property includes existence of the limit in the target. A totally bounded image whose only missing limit lies in a completion is insufficient. When \(Y\) is Banach, relative compactness is equivalent to total boundedness of the image: finitely many balls cover it at each positive scale, and completeness supplies the limits of the resulting Cauchy subsequences.

Finite-rank bounded maps are compact. Their images lie in a finite-dimensional subspace, where bounded closed sets are compact and the subspace is closed even if the ambient space is incomplete. The qualification bounded is essential: a merely algebraic finite-rank map can use an unbounded scalar functional and fail continuity.

## Operator norm closure and composition

**Theorem 9.2 (Compact ideal and norm closure).** Sums and scalar multiples of compact operators are compact. Composing a compact operator on either side with a compatible bounded operator gives a compact operator. If the target is Banach, an operator-norm limit of compact operators is compact.

*Proof.* For sums, take a bounded input sequence, select a subsequence on which the first operator converges, then a further subsequence on which the second converges. Their sum converges. A scalar multiple is immediate. For \(ST\) with compact \(T\), first extract convergence of \(Tx_n\), then use continuity of \(S\). For \(TR\) with bounded \(R\), the intermediate sequence \(Rx_n\) is bounded and compactness of \(T\) applies.

For norm closure let \(T_n\to T\), with each \(T_n\) compact. Given \(\varepsilon>0\), choose \(n\) with \(\|T-T_n\|<\varepsilon/3\). Cover the relatively compact image of the unit ball under \(T_n\) by finitely many balls of radius \(\varepsilon/3\). Every \(T\)-image lies within \(\varepsilon/3\) of a \(T_n\)-image, so these centers with radius \(\varepsilon\) cover the \(T\)-image. Thus it is totally bounded. Its closure in the Banach target is complete and totally bounded, hence compact. ∎

Norm convergence provides one approximation error for all unit inputs. Strong convergence only approximates each input separately and does not preserve compactness. The coordinate projections \(P_n\) on \(\ell^2\) are finite rank and converge strongly to the identity, which is not compact because its unit vectors have no convergent subsequence.

**Worked example 9.3 (Compact diagonal operators).** On \(\ell^2\), let \(Dx=(a_nx_n)\), where \((a_n)\) is bounded. Its norm is \(\sup|a_n|\), using coordinate estimates and unit-vector tests. If \(a_n\to0\), its truncations to the first \(N\) coordinates are finite rank, with
\[
 \|D-D_N\|=\sup_{n>N}|a_n|\longrightarrow0.
\]
Thus it is compact. Conversely if \(a_n\) does not tend to zero, choose distinct indices with \(|a_n|\ge\varepsilon>0\). Their unit-vector images are mutually orthogonal and pairwise separated by at least \(\sqrt2\varepsilon\), contradicting compactness. Hence compactness is exactly the tail condition, not just boundedness of the coefficients.

## Continuous kernels produce compact maps

**Worked example 9.4 (An integral operator on continuous functions).** Let \(k\) be continuous on \([0,1]^2\), and define
\[
 (Tf)(s)=\int_0^1 k(s,t)f(t)dt
 \quad\text{on }C([0,1]).
\]
It is bounded by \(\|k\|_\infty\|f\|_\infty\). For the unit ball of inputs,
\[
 |Tf(s)-Tf(r)|\le\sup_{t\in[0,1]}|k(s,t)-k(r,t)|.
\]
Uniform continuity of the kernel gives equicontinuity of the entire output family, and its uniform bound is already established. The [Arzelà–Ascoli theorem in Real Analysis](../proof-safe-real-analysis/function-spaces-and-equicontinuity.md) makes its closure compact in the uniform norm. Therefore \(T\) is compact.

There is also a finite-rank construction. Subdivide the \(t\)-interval finely and replace \(k(s,t)\) on each subinterval by \(k(s,t_j)\). The resulting operator is a finite sum of continuous output functions multiplied by integral functionals on the input. Uniform kernel error bounds operator-norm error, so these finite-rank maps converge to \(T\). The approximating kernel need not be continuous in \(t\); its piecewise definition still gives a valid finite Riemann integral and a continuous output in \(s\).

A kernel singular on the diagonal needs a separate estimate and is not covered by this example. Compactness also depends on the input and output norms. The same formal integral on a different function space requires its own boundedness and compactness proof.

## Compactness and weak convergence

**Proposition 9.5 (Weak inputs, strong compact outputs).** If \(x_n\to x\) weakly and \(T\) is compact, then \(Tx_n\to Tx\) in norm.

*Proof.* Weakly convergent sequences are norm bounded by the uniform boundedness argument in chapter 6. If norm convergence of outputs failed, some subsequence would stay at least a fixed \(\varepsilon>0\) from \(Tx\). Compactness gives a further subsequence converging in norm to \(y\). Every target functional satisfies \(\phi(Tx_n)=(T^*\phi)(x_n)\to\phi(Tx)\), so the norm limit has \(\phi(y)=\phi(Tx)\) for all \(\phi\). Hahn–Banach separation forces \(y=Tx\), contradicting that fixed distance. ∎

This property is sometimes called complete continuity. The converse is not asserted for arbitrary Banach domains: bounded sequences need not have weakly convergent subsequences there. On Hilbert domains the bounded-sequence weak-subsequence argument from chapter 8 makes the converse valid, because one can first extract a weakly convergent input subsequence.

**Worked example 9.6 (Compactness kills orthonormal tails).** In a Hilbert space an orthonormal sequence converges weakly to zero, so a compact operator sends it to a norm-null sequence. For a diagonal map from Worked example 9.3, the output norms are \(|a_n|\), recovering the necessary tail condition immediately. For the identity the norms remain one, showing its failure of compactness without any spectral calculation.

## The dual of a compact operator

**Theorem 9.7 (Schauder compact-adjoint theorem).** Let \(X\) be normed and \(Y\) Banach. A bounded operator \(T:X\to Y\) is compact if and only if its dual operator \(T^*:Y^*\to X^*\) is compact.

*Proof of the forward implication.* Let \((\phi_n)\) lie in the target dual unit ball, and let \(K\) be the compact closure of \(T(B_X)\). The restrictions \(\phi_n|_K\) are uniformly bounded and equicontinuous: \(|\phi_n(y)-\phi_n(z)|\le\|y-z\|\). By Arzelà–Ascoli on the compact metric set \(K\), some subsequence converges uniformly there. This makes the corresponding \(T^*\phi_n\) Cauchy in \(X^*\), because
\[
 \|T^*(\phi_n-\phi_m)\|
 =\sup_{x\in B_X}|(\phi_n-\phi_m)(Tx)|
 \le\sup_{y\in K}|\phi_n(y)-\phi_m(y)|.
\]
The dual is Banach, so the subsequence converges in its norm. The sequence criterion proves compactness of \(T^*\).

For the reverse implication, apply the proved direction to \(T^*\), making \(T^{**}\) compact. The canonical embeddings satisfy \(T^{**}J_X=J_YT\), as evaluation on a target functional verifies. Thus every bounded input sequence has a subsequence whose canonical output images converge in \(Y^{**}\). We must ensure the limit lies in \(J_Y(Y)\), which need not be closed if \(Y\) is incomplete. The original compact-adjoint hypothesis still yields total boundedness of \(T(B_X)\) by the norm identity and finite dual approximation, but target completeness would then be needed for a limit in \(Y\).

Accordingly the reverse implication in this general form requires \(Y\) Banach. Under that hypothesis \(J_Y(Y)\) is closed, and the convergent canonical images have a limit there. Isometry gives convergence of the actual outputs in \(Y\), proving compactness. ∎

The theorem will be used below for Banach spaces, including Hilbert spaces. The proof has made the target-completeness condition visible instead of dropping it during the bidual argument. More generally one can formulate compactness into a completion, but that is a different target statement. In Hilbert spaces, Riesz transfers the same compactness result to the Hilbert adjoint.

## Finite-rank approximation in a Hilbert target

**Proposition 9.7a (Hilbert finite-rank approximation).** If the target \(K\) is Hilbert, a bounded \(T:X\to K\) is compact exactly when it is an operator-norm limit of bounded finite-rank operators.

*Proof.* The norm-closure theorem proves one direction. Conversely suppose \(T\) is compact. Given \(\varepsilon>0\), cover the compact closure of its unit-ball image by finitely many balls of radius \(\varepsilon\), with centers \(y_1,\ldots,y_m\). Let \(F\) be their finite-dimensional span and \(P_F\) the orthogonal projection. For every unit-ball input, some center lies within \(\varepsilon\) of its output. Best approximation therefore gives
\[
 \|Tx-P_FTx\|=\operatorname{dist}(Tx,F)<\varepsilon.
\]
Taking the supremum gives \(\|T-P_FT\|\le\varepsilon\). The approximant \(P_FT\) has finite rank and is bounded. Choosing tolerances tending to zero constructs the required sequence. ∎

The net is chosen in the output set, and projection onto its center span makes that net useful for a linear approximation. No claim that a bounded input ball is compact was made. The Hilbert projection has norm at most one and supplies exact best approximation; a general Banach target need not offer such projections with controlled norm. Consequently this argument does not prove a universal finite-rank approximation theorem for compact operators between arbitrary Banach spaces.

For computation this distinction matters. A selected matrix or mesh can approximate an operator on many inputs without a proved operator-norm error. Here the finite covering controls every unit-ball output, and the projection minimizes the residual for each one. The resulting uniform error is what licenses passage from finite-rank models to compact operators. Spectral decompositions in the next chapter will give more explicit approximants when self-adjointness supplies preferred directions.

## Nonzero spectral points of compact maps

For a Banach endomorphism \(T\), a scalar \(\lambda\) is an eigenvalue if \(Tx=\lambda x\) for some nonzero vector. The spectrum consists of scalars for which \(\lambda I-T\) fails to have a bounded two-sided inverse. Eigenvalues are therefore spectral points, but the converse for arbitrary bounded operators is false.

**Lemma 9.8 (Injectivity gives a lower bound).** If \(T\) is compact on a Banach space and \(I-T\) is injective, then \(\|(I-T)x\|\ge c\|x\|\) for some \(c>0\), and its range is closed.

*Proof.* Otherwise choose unit vectors \(x_n\) with \((I-T)x_n\to0\). Compactness gives a subsequence \(Tx_n\to y\). The identity \(x_n=(I-T)x_n+Tx_n\) then gives \(x_n\to y\), with \(\|y\|=1\). Continuity yields \((I-T)y=0\), contradicting injectivity. The lower-bound closed-range proposition from chapter 5 gives the range conclusion. ∎

**Proposition 9.9 (Nonzero eigenspaces are finite dimensional).** If \(T\) is compact and \(\lambda\ne0\), the eigenspace \(E_\lambda\) is finite dimensional.

*Proof.* It is a closed subspace as a kernel. On it \(T=\lambda I\), so compactness of \(T\) would make its unit ball compact after rescaling by \(1/\lambda\). Riesz's unit-ball criterion then forces finite dimension. ∎

The full Fredholm alternative, proved in chapter 11, upgrades the injective lower-bound argument into an invertibility-or-eigenvalue alternative. The next chapter uses self-adjointness to construct the eigenvectors directly and obtain a complete orthogonal description.

## A compact inclusion and a Volterra operator

On the finite interval [0,L], give C1 the norm ||f||∞+||f'||∞. Its unit ball is uniformly bounded and uniformly Lipschitz: the fundamental theorem bounds |f(t)−f(s)| by |t−s|. Arzelà–Ascoli therefore makes the inclusion C1→C compact. The input space's own unit ball is not compact in the C1 norm. For example the functions sin(nt)/n on [0,2π] have bounded C1 norms, while their derivatives cos(nt) have pairwise square distance sqrt(2π), hence uniform distance at least one. No C1-convergent subsequence exists.

This shows how compactness depends on the output topology. An operation can send a bounded family into a compact set after weakening the norm, while the same family remains separated in its original norm. A compact embedding is not a claim that its entire infinite-dimensional input ball is compact there.

Define Jf(t)=∫_0^t f(s)ds. It maps C[0,L] boundedly into C1, since ||Jf||∞≤L||f||∞ and ||(Jf)'||∞=||f||∞. Composing with the compact inclusion proves J:C→C compact. Its integral kernel is an indicator of the triangle s≤t, which is discontinuous on the diagonal. Thus the earlier continuous-kernel theorem cannot simply be applied as written; the compact inclusion supplies a different complete proof.

Repeated integration gives J to the nth power with kernel (t−s)^{n−1}/(n−1)! on that triangle. This follows by induction and finite triangular integration. Integrating its nonnegative kernel shows ||J^n||≤L^n/n!, and the constant function one attains equality at t=L. Consequently the series Σz^nJ^n converges in operator norm for every complex z, by the scalar exponential series. Telescoping its finite partial products with I−zJ and passing to the limit proves that it is the inverse of I−zJ.

Therefore the complex spectrum of J consists only of zero: every nonzero λ has inverse (λI−J)^−1=λ^−1Σ(J/λ)^n. Zero is spectral because J is not onto C: every image vanishes at zero and is differentiable. Yet J is injective by the fundamental theorem. Compact operators can consequently have zero as a spectral point without a zero eigenvector, and a nonzero compact map need not have a nonzero eigenvalue. Self-adjoint compact spectral theory has additional geometry and cannot be applied to this Banach-space Volterra map merely because both are compact.

This example joins all three themes: compactness from a stronger-to-weaker inclusion, exact power estimates from an integral formula, and a spectral conclusion from a convergent operator series. None requires compactness of the original unit ball or a finite-dimensional matrix representation.

## Exercises

### Exercise 9.1 {#compact-operators-ex-1}

Prove a bounded finite-rank operator is compact.

<details><summary>Hint 1</summary>
Its output ball lies in a finite-dimensional subspace.
</details>
<details><summary>Hint 2</summary>
That subspace is closed and has compact closed bounded sets.
</details>
<details><summary>Solution</summary>
The image of the unit ball is bounded and lies in the finite-dimensional range. Its closure remains there because finite-dimensional subspaces are closed. This closure is closed and bounded in that subspace and hence compact by finite-dimensional norm equivalence and Heine–Borel. Thus the operator is compact. The boundedness premise is needed to bound the image.
</details>

### Exercise 9.2 {#compact-operators-ex-2}

Is the diagonal map with coefficients \(a_n=(-1)^n/n\) compact on \(\ell^2\)? Find its approximation error after truncation at \(N\).

<details><summary>Hint 1</summary>
Use the tail-supremum norm formula.
</details>
<details><summary>Hint 2</summary>
The largest omitted coefficient modulus occurs at \(N+1\).
</details>
<details><summary>Solution</summary>
The coefficients tend to zero, so the map is compact. The finite-rank truncation error is \(\sup_{n>N}1/n=1/(N+1)\). The sign oscillation does not affect this operator norm or compactness, though it changes the signs of the corresponding real eigenvalues.
</details>

### Exercise 9.3 {#compact-operators-ex-3}

Show that the identity on an infinite-dimensional Banach space is not compact.

<details><summary>Hint 1</summary>
Its image unit ball is the same unit ball.
</details>
<details><summary>Hint 2</summary>
Use the separated sequence constructed by Riesz's lemma.
</details>
<details><summary>Solution</summary>
If the identity were compact, the closed unit ball would be compact. Riesz's lemma constructs unit vectors pairwise separated by more than one half in every infinite-dimensional normed space, so no subsequence can converge. That contradicts compact metric sequential compactness. Completeness does not make this separated sequence Cauchy.
</details>

### Exercise 9.4 {#compact-operators-ex-4}

Explain why strong limits of compact operators can fail to be compact.

<details><summary>Hint 1</summary>
Use finite coordinate projections on \(\ell^2\).
</details>
<details><summary>Hint 2</summary>
They converge strongly to the identity but not in norm.
</details>
<details><summary>Solution</summary>
Each coordinate projection \(P_n\) has finite rank and is compact. For any fixed \(x\in\ell^2\), its discarded square tail tends to zero, so \(P_nx\to x\). The identity is not compact, showing failure under strong convergence. The norm error \(\|I-P_n\|=1\) prevents application of the norm-closure theorem.
</details>

### Exercise 9.5 {#compact-operators-ex-5}

Prove the composite of a compact map with a bounded map is compact in either compatible order.

<details><summary>Hint 1</summary>
In one order boundedness controls intermediate input size.
</details>
<details><summary>Hint 2</summary>
In the other order continuity preserves an extracted limit.
</details>
<details><summary>Solution</summary>
For \(TR\) with compact \(T\) and bounded \(R\), a bounded input sequence becomes bounded under \(R\), then has a convergent output subsequence under \(T\). For \(ST\), first extract a convergent subsequence under \(T\), then apply continuity of \(S\) to preserve convergence. Both arguments use exact domain and target compatibility.
</details>

### Exercise 9.6 {#compact-operators-ex-6}

Let \(T\) be compact and \(x_n\to x\) weakly. Why does every norm-convergent subsequence of \(Tx_n\) have limit \(Tx\)?

<details><summary>Hint 1</summary>
Apply an arbitrary target functional to both limits.
</details>
<details><summary>Hint 2</summary>
Its composite with \(T\) is a continuous input functional.
</details>
<details><summary>Solution</summary>
If a subsequence converges in norm to \(y\), then for every target functional \(\phi\), its values converge to \(\phi(y)\). Weak input convergence also makes those values converge to \((T^*\phi)(x)=\phi(Tx)\). Thus all continuous functionals agree on \(y\) and \(Tx\); Hahn–Banach separates vectors, so \(y=Tx\). Compactness then forces convergence of the whole output sequence by the contradiction-subsequence argument.
</details>

### Exercise 9.7 {#compact-operators-ex-7}

If \(T\) is compact and boundedly invertible on a Banach space, prove that space is finite dimensional.

<details><summary>Hint 1</summary>
Compose \(T\) with its bounded inverse.
</details>
<details><summary>Hint 2</summary>
The composite identity would be compact.
</details>
<details><summary>Solution</summary>
Compactness is preserved by composition with a bounded map, so \(T^{-1}T=I\) would be compact. The compact-unit-ball criterion then makes the space finite dimensional. Thus compact operators on infinite-dimensional Banach spaces cannot have bounded two-sided inverses on the whole space.
</details>

### Exercise 9.8 {#compact-operators-ex-8}

Prove the nonzero eigenspace of a compact operator is closed before applying the finite-dimensional criterion.

<details><summary>Hint 1</summary>
It is a kernel of a bounded map.
</details>
<details><summary>Hint 2</summary>
Restrict \(T\) to that subspace, where it is scalar multiplication.
</details>
<details><summary>Solution</summary>
The eigenspace is \(\ker(T-\lambda I)\), closed because the map is continuous. Restriction of compactness to its unit ball remains valid. If \(\lambda\ne0\), the image ball under \(T\) is a scalar multiple of that unit ball, so compactness of the image makes the ball compact. Riesz's criterion forces finite dimension.
</details>

### Exercise 9.9 {#compact-operators-ex-9}

For the integral operator of Worked example 9.4, derive a common modulus of continuity for images of the input unit ball.

<details><summary>Hint 1</summary>
Subtract the two kernel integrals at \(s\) and \(r\).
</details>
<details><summary>Hint 2</summary>
Use uniform continuity of the kernel on its compact square.
</details>
<details><summary>Solution</summary>
For \(\|f\|_\infty\le1\), the output difference is bounded by \(\int_0^1|k(s,t)-k(r,t)|dt\le\sup_t|k(s,t)-k(r,t)|\). Given any tolerance, uniform continuity of \(k\) supplies one input-distance bound making this supremum small for every \(t\). It is independent of the chosen \(f\), giving equicontinuity of the whole output family.
</details>

### Exercise 9.10 {#compact-operators-ex-10}

In the compact-adjoint proof, why does uniform convergence on the compact image set yield operator-norm convergence after pullback?

<details><summary>Hint 1</summary>
The unit-ball inputs map into that one compact set.
</details>
<details><summary>Hint 2</summary>
Compare the two defining suprema.
</details>
<details><summary>Solution</summary>
For functionals \(\phi_n,\phi_m\), the norm of \(T^*(\phi_n-\phi_m)\) is the supremum of their difference evaluated at \(Tx\) for unit-ball inputs. Those points all belong to \(K\), so the operator norm is at most the uniform difference on \(K\). Uniform Cauchy convergence on \(K\) therefore gives a Cauchy sequence in the complete space \(X^*\), yielding the needed norm limit.
</details>

### Exercise 9.11 {#compact-operators-ex-11}

Suppose \(I-T\) is injective with compact \(T\). Explain why a sequence of unit vectors with \((I-T)x_n\to0\) is impossible.

<details><summary>Hint 1</summary>
Extract convergence of the compact images.
</details>
<details><summary>Hint 2</summary>
The original vectors are image plus residual.
</details>
<details><summary>Solution</summary>
A subsequence of \(Tx_n\) converges, and \(x_n=Tx_n+(I-T)x_n\) makes that same subsequence converge to a unit vector \(x\). Continuity yields \((I-T)x=0\), contradicting injectivity. Thus an approximate null sequence of unit vectors cannot occur, which supplies the positive lower bound.
</details>

### Exercise 9.12 {#compact-operators-ex-12}

Show a compact operator on a Hilbert domain is characterized by sending weakly convergent sequences to norm-convergent output sequences.

<details><summary>Hint 1</summary>
One direction is Proposition 9.5.
</details>
<details><summary>Hint 2</summary>
For the reverse direction extract a weak subsequence from any bounded Hilbert sequence.
</details>
<details><summary>Solution</summary>
Compactness gives the stated property by Proposition 9.5. Conversely, every bounded sequence in a Hilbert space has a weakly convergent subsequence by the direct Hilbert argument of chapter 8. The assumed property makes its outputs converge in norm. Thus every bounded input sequence has a convergent output subsequence, which is compactness. The Hilbert weak-subsequence input is what makes this converse valid here.
</details>

## Sources and scope

This is original exposition and supported exercise development, using the Euler real-analysis Arzelà–Ascoli proof and the earlier functional chapters. Conway and Brezis are syllabus benchmarks. Compact-adjoint equivalence above is used with Banach targets; an incomplete-target passage is not smuggled through the canonical bidual embedding. Approximation of arbitrary Banach compact operators by finite rank is not asserted; only the specific Hilbert and kernel examples have such constructions here.

## Summary

Compactness adds subsequence control to boundedness. It survives sums, bounded composition and operator-norm limits into Banach targets, but not arbitrary strong limits. Continuous kernels and diagonal tail estimates give concrete models; compact maps turn weakly convergent inputs into norm-convergent outputs. Compact adjoints and finite nonzero eigenspaces provide the tools for the next chapter's complete self-adjoint spectral decomposition.
