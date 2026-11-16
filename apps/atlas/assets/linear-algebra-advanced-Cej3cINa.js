var e=`---
id: course-linear-algebra-advanced
title: "Linear Algebra: Geometry, Spectra, and Reliable Computation"
level: advanced-undergraduate
estimated_minutes: null
license: CC BY-SA 4.0
---

# Linear Algebra: Geometry, Spectra, and Reliable Computation

<!-- euler-course-route -->

## Current course route

This is an Outline seminar in a selected theme. Use its [course page](/courses/atlas-linear-algebra-advanced/) for the preparation courses, then attempt the mathematical investigations below. A general graduate chapter syllabus has not yet been assigned.

Preparation courses: [Linear algebra II](/courses/atlas-linear-algebra-standard/) · [Abstract algebra I](/courses/atlas-abstract-algebra-proof/).

The earlier mathematical explanations, proofs, assignments and complete solutions remain below with their original task identities. Their first-attempt, comparison and correction requirements still apply when you choose that earlier work. Existing notes and study marks keep their original scope.

An exact projection can be a poor numerical recipe. A small residual can conceal a large coefficient error. An operator can be self-adjoint in one geometry and nonnormal in another. This course joins inner products, spectral structure, singular values and numerical conditioning by requiring both a proof and an error certificate for the same data.

The required work is the source roster below, four mixed checkpoints and three supplied certificates. All requested data, questions and public keys are specified. The study time depends on the selected reading, attempts and corrections; component chapter estimates are provenance, not a sum or a calibrated course duration. The source books remain working editions. This course does not qualify their complete contents or their existing PDFs.

## Preparation, conventions and required source work

Use the existing [linear algebra core](#/item/course-linear-algebra-standard) or the Lucent core for systems, linear maps, kernels, bases, rank, eigenvalues and orthogonality. Before beginning, explain why a full-column-rank map is injective, why a singular system can have a nontrivial kernel, and why changing a basis changes entries without changing a map. Repair these through the proof book's [prerequisite diagnostic](#/item/book-linear-algebra-structure-proofs?section=front:prerequisite-diagnostic-and-repair). For complex inner products, repair conjugation and complex scalar arithmetic before the adjoint unit. For the Rayleigh-variation and local-convergence questions, use elementary limits, derivatives, compactness of a finite-dimensional unit sphere and big-O notation; [Calculus of Change](#/item/course-calculus-change) and the source prerequisites provide repair. Before the function-space projection in Chapter 17 Section 7, prepare elementary definite integrals of polynomials through the same calculus repair. No measure theory, infinite-dimensional spectral theorem or tensor course is assumed.

The proof book makes inner products **linear in the first slot**. Coordinates satisfy \\(\\langle x,y\\rangle_G=y^\\dagger Gx\\); the adjoint of \\(A:V\\to W\\) is \\(G_V^{-1}A^\\dagger G_W\\). In orthonormal coordinates this is \\(A^\\dagger\\); in general use the Gram formula, which can coincide with \\(A^\\dagger\\) in special cases too. In the supplied real fixtures the coefficient space has its Euclidean inner product, while observation space has the stated positive Gram matrix \\(W\\). We analyze the Euclidean SVD of **\\(C=W^{1/2}A\\)**, not an undeclared Euclidean SVD of \\(A\\).

The numerical book's [notation guide](#/item/book-matrix-computation-applications?section=front:notation-conventions) instead writes \\(\\langle x,y\\rangle=x^\\dagger y\\), linear in the second slot. Translate scalar placement when comparing proofs; the standard adjoint matrix is still \\(A^\\dagger\\). Its Exercises 2.2 and 4.2 with \\(A^TA\\) are taken over the reals here; use \\(A^\\dagger A\\) in a general complex statement. A thin \\(Q\\) has orthonormal columns, \\(Q^\\dagger Q=I\\), while \\(QQ^\\dagger\\) is a projection; it is not a square onto unitary map.

State the norm beside every condition number, residual, error and tolerance. Exact rank counts positive singular values; our numerical rank counts singular values **strictly greater than** the stated absolute cutoff \\(\\tau\\). Equality is discarded. Measurement uncertainty, input rounding, arithmetic roundoff and deliberate truncation are four separate ledger entries.

Attempt each assigned question before its adjacent full solution. Each numbered source set below is required in full; the numerical book also has [compact back-matter keys](#/item/book-matrix-computation-applications?section=back:solutions) under matching chapter/exercise labels. The adjacent keys are the primary feedback addresses.

| Order | Required reading and exact assigned source work | Feedback, connection and stopping point |
| --- | --- | --- |
| 1. Geometry and sensitivity | [Inner Products and Orthogonal Decomposition](#/item/book-linear-algebra-structure-proofs?chapter=inner-products-orthogonal-decomposition), Sections 1–13 and Exercises **1–18**, including the projection investigation; [Conditioning and Stability](#/item/book-matrix-computation-applications?chapter=conditioning-and-stability), problem conditioning, backward stability, residual/error, Exercises **2.1–2.4** | All solutions are adjacent. Connect projection/Gram equations to the distinction between problem sensitivity and algorithm quality. Complete LA-ADV-CP1. An ill-conditioned problem alone does not prove a particular algorithm behaved well: first establish its backward error |
| 2. Adjoint and algorithm | [Adjoints, Unitary Maps, and Positive Operators](#/item/book-linear-algebra-structure-proofs?chapter=adjoints-unitary-positive-operators), Sections 1–14, Exercises **1–18**; [QR, Least Squares, and SVD](#/item/book-matrix-computation-applications?chapter=qr-least-squares-svd), least squares, QR, SVD, Eckart–Young, numerical rank, Exercises **4.1–4.4** | Compare each full key. Preserve slot convention, Gram matrices, full-rank hypotheses and the positive-rank/zero distinction in the pseudoinverse norm. Complete LA-ADV-CP2 |
| 3. Spectral structure and reliability | [Finite-Dimensional Spectral Theorems](#/item/book-linear-algebra-structure-proofs?chapter=finite-dimensional-spectral-theorems), Sections 1–8, Exercises **1–22**, and the PCA/energy investigation; [Eigenvalue Computations](#/item/book-matrix-computation-applications?chapter=eigenvalue-computations), sensitivity, power/inverse/Rayleigh/QR iteration and verification, Exercises **5.1–5.4** | All keys are adjacent. Separate real normal blocks, complex normal diagonalization and nonnormal eigenvalue sensitivity. Use the corrected eigenline/sign/phase statement for power iteration. Complete LA-ADV-CP3 |
| 4. Missing hypotheses and synthesis | [Pseudospectra](#/item/book-matrix-computation-applications?chapter=pseudospectra), definitions, singular-value/resolvent relation, transient example, Exercises **10.1–10.4**; complete LA-ADV-CP4, then LA-ADV-P001, LA-ADV-P002 and LA-ADV-R001 below | Compare full keys, preserve the chosen norm and closed perturbation ball. A pseudospectral picture is not a numerical transient-growth lower bound; the source supplies a separate exact exponential example |

The pseudospectra chapter's contour-integral discussion is optional here; proving that imported formula requires complex integration. Its finite perturbation, singular-value and explicit exponential examples support all four assigned questions without that additional proof obligation.

This is **74 source questions**, two proof investigations, four four-part mixed checkpoints and the nine-deliverable primary/changed/return certificates. Counts locate work; complete arguments and feedback establish its scope. None of these selected questions requires a software run: the first investigation asks for conceptual comparison of Gram–Schmidt variants and Householder QR, and the second asks for a general PCA proof. Optional implementation or other native projects retain their own execution requirements and are not silently replaced by hand work.

Source error-clinic shorthand must remain subordinate to its hypotheses. A large condition number does not excuse an unstable computation without backward-error evidence. A numerical rank requires a cutoff; an exact rank does not. The rank-one norm-attainment statement in the adjoint chapter uses a nonzero input vector \\(b\\); if the constructed operator is zero its norm is zero and every unit vector, when the domain is nonzero, attains it. The zero-dimensional domain has no unit vector. The positive-rank pseudoinverse formula is not evaluated at a nonexistent smallest positive singular value.

## Four mixed checkpoints with complete models

Write all four answers at each checkpoint before comparison. Keep the full source solutions beside the corrected checkpoint, recording which definition, assumption or computation changed.

### LA-ADV-CP1 — The geometry chooses the projection

1. For \\(A=\\left(\\begin{smallmatrix}1&1\\\\1&-1\\\\1&0\\end{smallmatrix}\\right)\\), \\(W=\\operatorname{diag}(1,1,2)\\) and \\(b=(3,1,0)^T\\), compute the Gram system, minimizer, fit and residual.
2. Derive the weighted adjoint and projector. Is the projector Euclidean self-adjoint?
3. Prove that the minimizer is unique and the residual is optimal, rather than only checking stationarity.
4. State precisely why normal equations establish an exact identity without requiring an implementation to form \\(A^TWA\\).

**Complete model.** The weighted Gram matrix is \\(\\operatorname{diag}(4,2)\\) and \\(A^TWb=(4,2)^T\\). Thus \\(c=(1,1)^T\\), \\(Ac=(2,0,1)^T\\), \\(r=b-Ac=(1,1,-1)^T\\), \\(A^TWr=0\\), and \\(r^TWr=4\\). The adjoint is \\(A^*=A^TW\\). The projector is
\\[
P_W=A(A^TWA)^{-1}A^TW=
\\begin{pmatrix}3/4&-1/4&1/2\\\\-1/4&3/4&1/2\\\\1/4&1/4&1/2\\end{pmatrix}.
\\]
It obeys \\(P_W^2=P_W\\) and \\(P_W^TW=WP_W\\), but \\(P_W^T\\ne P_W\\). The weighted geometry, rather than an erroneous transpose test, characterizes its self-adjointness. For every \\(h\\),
\\[
\\|b-A(c+h)\\|_W^2=\\|r\\|_W^2+\\|Ah\\|_W^2
=4+4h_1^2+2h_2^2.
\\]
The cross term vanishes by \\(A^TWr=0\\); equality occurs only at \\(h=0\\). This proves existence, optimality and uniqueness. In floating point, whitening and Householder QR avoid explicitly squaring the singular-value ratio in normal equations; an algorithmic claim still needs its actual rounding/backward-error analysis.

### LA-ADV-CP2 — The same operator in two inner products

1. For \\(H_s=\\left(\\begin{smallmatrix}2&s\\\\0&1\\end{smallmatrix}\\right)\\), derive its eigenvalues/eigenvectors and decide when it is normal in the standard Euclidean geometry.
2. With \\(S_s=\\left(\\begin{smallmatrix}1&s\\\\0&1\\end{smallmatrix}\\right)\\), prove \\(G_s=S_s^TS_s\\) is positive definite and makes \\(H_s\\) self-adjoint.
3. Find the positive square root and the operator 2-norm of \\(K=\\left(\\begin{smallmatrix}5&4\\\\4&5\\end{smallmatrix}\\right)\\). Explain the uniqueness condition.
4. Give a real normal operator without a real eigenbasis. Explain what its real spectral theorem supplies.

**Complete model.** The eigenvalues are 2 and 1, with vectors \\(e_1\\) and \\((-s,1)^T\\). Products
\\[
H_s^TH_s=\\begin{pmatrix}4&2s\\\\2s&s^2+1\\end{pmatrix},\\quad
H_sH_s^T=\\begin{pmatrix}4+s^2&s\\\\s&1\\end{pmatrix}
\\]
agree exactly when \\(s=0\\). Nevertheless
\\[
G_s=\\begin{pmatrix}1&s\\\\s&s^2+1\\end{pmatrix},\\qquad
x^TG_sx=(x_1+sx_2)^2+x_2^2>0\\ (x\\ne0),
\\]
and \\(S_sH_sS_s^{-1}=\\operatorname{diag}(2,1)\\). Equivalently \\(G_sH_s=H_s^TG_s=\\left(\\begin{smallmatrix}2&2s\\\\2s&2s^2+1\\end{smallmatrix}\\right)\\). Self-adjointness depends on the specified inner product, not merely the entry array.

For \\(K\\), orthonormal vectors \\((1,1)/\\sqrt2,(1,-1)/\\sqrt2\\) have eigenvalues 9 and 1. Its unique **positive** square root is \\(\\left(\\begin{smallmatrix}2&1\\\\1&2\\end{smallmatrix}\\right)\\), since its eigenvalues are 3 and 1 and its square is \\(K\\). Its operator norm is 9 and its 2-norm condition number is 9. Other square roots without positivity are not excluded. The quarter-turn \\(J=\\left(\\begin{smallmatrix}0&-1\\\\1&0\\end{smallmatrix}\\right)\\) is orthogonal/normal, with characteristic polynomial \\(t^2+1\\); over the reals it supplies a two-dimensional rotation block, while over the complexes it has a unitary eigenbasis.

### LA-ADV-CP3 — A singular value is not a digit guarantee

1. Derive the finite perturbation bound for a square invertible \\(B\\), including its denominator and nonzero-target conditions.
2. Show that the bound can be attained and that equality at the excluded endpoint destroys its conclusion.
3. For singular values \\(2,\\sqrt2/1000\\), compare exact rank with cutoffs \\(1/100\\), \\(1/10000\\) and \\(\\sqrt2/1000\\).
4. Explain how to transform a cutoff under scaling, and distinguish matrix-data uncertainty from arithmetic roundoff.

**Complete model.** Let \\(Bx=z\\ne0\\), \\((B+E)(x+\\Delta x)=z+f\\), with a subordinate norm. From
\\[
B\\Delta x=f-Ex-E\\Delta x
\\]
and \\(\\|B^{-1}\\|\\|E\\|<1\\), moving the last bound to the left yields
\\[
\\frac{\\|\\Delta x\\|}{\\|x\\|}
\\le\\frac{\\kappa(B)(\\epsilon_B+\\epsilon_z)}
{1-\\kappa(B)\\epsilon_B},\\quad
\\epsilon_B=\\frac{\\|E\\|}{\\|B\\|},\\quad
\\epsilon_z=\\frac{\\|f\\|}{\\|z\\|},
\\quad\\kappa(B)\\epsilon_B<1.
\\]
Here \\(\\|z\\|\\le\\|B\\|\\|x\\|\\); invertibility and \\(z\\ne0\\) ensure \\(x\\ne0\\). If \\(z=0\\), use the absolute bound \\(\\|\\Delta x\\|\\le\\|B^{-1}\\|\\|f\\|/(1-\\|B^{-1}\\|\\|E\\|)\\); a relative error divided by zero is undefined.

For \\(B=I_2\\), \\(z=e_2\\), \\(E=\\operatorname{diag}(0,-a)\\), \\(f=0\\), \\(0\\le a<1\\), the solution changes from \\(e_2\\) to \\(e_2/(1-a)\\). In the infinity norm, relative error is exactly \\(a/(1-a)\\), attaining the bound. At \\(a=1\\), the new system is inconsistent: the strict denominator condition cannot be replaced by a nonstrict one.

The two positive singular values give exact rank 2; our strict policy gives numerical ranks 1, 2 and 1 at the three stated cutoffs. Multiplying the operator by a positive factor \\(q\\) requires multiplying an absolute cutoff by \\(q\\) to preserve this policy. A fixed unscaled cutoff can change rank. An input-uncertainty bound \\(\\|E\\|_2\\le\\nu<\\sigma_{\\min}\\) preserves full column rank because \\(\\|(C+E)v\\|_2\\ge(\\sigma_{\\min}-\\nu)\\|v\\|_2\\). At \\(\\nu=\\sigma_{\\min}\\), the perturbation \\(-\\sigma_{\\min}u_{\\min}v_{\\min}^*\\) can remove that mode. A declared truncation cutoff may discard a mode even when it is robust under a smaller data bound. None of these statements measures roundoff in a particular program; a heuristic \\(\\kappa u\\) without constants and a validated backward error does not establish digits.

### LA-ADV-CP4 — Eigenlines, residuals and nonnormality

1. For \\(D=\\operatorname{diag}(-2,1)\\), \\(x_0=e_1\\), give all Euclidean-normalized power iterates and their Rayleigh quotients.
2. Prove the residual-to-nearby-eigenproblem construction for any \\(v\\ne0\\).
3. Under normality, prove the resulting distance-to-spectrum bound.
4. For \\(N=\\left(\\begin{smallmatrix}0&1\\\\0&0\\end{smallmatrix}\\right)\\), \\(\\eta=1/10000\\) and \\(E=\\left(\\begin{smallmatrix}0&0\\\\\\eta&0\\end{smallmatrix}\\right)\\), compute the perturbed eigenvalues and explain why normal disks fail.

**Complete model.** \\(x_k=(-1)^ke_1\\), so the eigenline is constant and the Rayleigh quotient is always -2, but the vectors do not converge. A zero dominant eigencomponent prevents the usual conclusion; a tied largest modulus can prevent even eigenline convergence. Complex dominant eigenvalues similarly require phase alignment.

Write \\(r=Av-\\lambda v\\). Then \\(F=-rv^*/\\|v\\|_2^2\\) gives \\((A+F)v=\\lambda v\\) and \\(\\|F\\|_2=\\|r\\|_2/\\|v\\|_2\\); for \\(r=0\\), choose \\(F=0\\). For normal \\(A=U\\Lambda U^*\\),
\\[
\\|r\\|_2^2=\\sum_i|\\lambda_i-\\lambda|^2|(U^*v)_i|^2
\\ge\\operatorname{dist}(\\lambda,\\sigma(A))^2\\|v\\|_2^2.
\\]
Equality is attained when \\(v\\) has support only on eigenvalues at the minimum distance. A small eigenpair residual therefore gives a nearby eigenvalue under normality; closeness of its eigenvector additionally needs spectral separation.

\\(\\|E\\|_2=\\eta\\) and \\(\\det(tI-N-E)=t^2-\\eta\\), so the eigenvalues are \\(\\pm1/100\\), while \\(\\sigma(N)=\\{0\\}\\). Thus a perturbation of size \\(1/10000\\) can move an eigenvalue by \\(1/100\\); the radius-\\(\\eta\\) normal-disk description fails. Directly, \\(N^TN=\\operatorname{diag}(0,1)\\ne NN^T=\\operatorname{diag}(1,0)\\). A perturbation-union or small singular value describes a pseudospectrum; a specified transient amplitude still requires its own calculation. Use the source's explicit exponential for that additional claim.

## Supplied certificate family and required deliverables

All data below are authored exact rationals, not observations from a real calibration. Responses and coefficients have generic units \\(u\\); the design entries and weights are dimensionless. Positive weights specify geometry, not inverse noise variances or a probability model. Let
\\[
W=\\operatorname{diag}(1,1,2),\\quad
A_e=\\begin{pmatrix}1&e\\\\1&-e\\\\1&0\\end{pmatrix},\\quad
C_e=W^{1/2}A_e,\\quad
B_e=\\operatorname{diag}(1,e).
\\]
Use \\(\\|r\\|_W=\\sqrt{r^TWr}\\) for observation residuals, the Euclidean coefficient norm for the minimum-norm least-squares solution, the Euclidean operator norm for SVD/rank/perturbations of \\(C_e\\), and the infinity norm **only for the separate square system \\(B_ex=z\\)**. Our supplied \\(0\\le e\\le1\\) guarantees that \\(2,\\sqrt2e\\) are sorted singular values; outside this range compare their magnitudes before ordering.

| Form | e | b1 | b2 | b3 | measurement delta | square rhs d | cutoff tau | spectral s |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LA-ADV-P001 | 1 | 3 | 1 | 0 | 0 | 1/10 | 1/10 | 0 |
| LA-ADV-P002 | 1/1000 | 1 | 1 | 1 | 1/10000 | 1/10000 | 1/100 | 1 |
| LA-ADV-R001 | 0 | 2 | 0 | 1 | 0 | 1/100 | 1/10 | 2 |

For **each form** submit these nine connected deliverables before opening its full model:

1. Identify \\(A_e,b,W,C_e,B_e,z=(1,d)^T,H_s,G_s\\), the units, norms and the exact/numerical/data contracts.
2. Derive the weighted Gram matrix, adjoint and projection; solve the weighted least-squares problem, including the complete solution set and minimum-norm choice.
3. Supply a QR/SVD certificate, the positive singular values, pseudoinverse action/norm and the best rank-one approximation error.
4. State exact rank, numerical rank under the printed cutoff and its equality policy, and full versus effective condition numbers. Audit the zero operator separately.
5. Perturb the response by \\(\\Delta b=\\delta(1,-1,0)^T\\); recompute coefficients/fit/residual and certify amplification. For R001, explain why the null coefficient cannot be identified instead of dividing by zero.
6. For the square system, assess the supplied candidate \\(\\widehat x=(1,0)^T\\), with exact residual, nearby right-hand side, scaled backward error, forward error and a valid finite bound where applicable.
7. For the supplied \\(H_s,G_s\\), provide eigenvectors, standard normality, the transported-adjoint check and Euclidean eigenvalue sensitivity.
8. State which claims survive the matrix-uncertainty bound \\(\\nu=1/10000\\) on \\(C_e\\), and reproduce the specified single-rounding experiment and finite matrix-perturbation boundary. Separate all of these from a measured implementation error.
9. Complete a claim/error ledger, including a deliberate failure or degenerate case, and an algorithm choice justified by the hypotheses. Keep original and corrected work and label prior answer exposure.

### General certificate identities used in all three complete keys

For \\(e>0\\), the columns are weighted-orthogonal:
\\[
A_e^TWA_e=\\operatorname{diag}(4,2e^2),\\quad
A_e^TWb=(b_1+b_2+2b_3,\\ e(b_1-b_2))^T.
\\]
Thus
\\[
c_1=(b_1+b_2+2b_3)/4,\\qquad c_2=(b_1-b_2)/(2e).
\\]
The residual is weighted-orthogonal to both columns. For any \\(h\\), the squared objective is its minimum plus \\(4h_1^2+2e^2h_2^2\\), proving uniqueness and equality conditions. If \\(e=0\\), only \\(c_1\\) is determined; the Euclidean minimum-norm rule chooses \\(c_2=0\\). The weighted adjoint is \\(A_e^TW\\). For \\(e>0\\), the observation projector is the same \\(P_W\\) from CP1 even as the coefficient condition deteriorates: the column space is unchanged. At \\(e=0\\) it becomes the rank-one projector \\(\\mathbf1(1,1,2)/4\\). Continuity of fitted values for a particular datum does not identify a vanished coefficient direction.

Let
\\[
q_1=(1,1,\\sqrt2)^T/2,\\quad q_2=(1,-1,0)^T/\\sqrt2,\\quad
q_3=(1,1,-\\sqrt2)^T/2.
\\]
These form an orthonormal Euclidean basis. With \\(Q=(q_1,q_2)\\),
\\[
C_e=Q\\operatorname{diag}(2,\\sqrt2e),\\qquad Q^TQ=I_2.
\\]
For \\(e>0\\) this is reduced QR with positive diagonal and an SVD with \\(V=I_2\\). At \\(e=0\\), the same equality is an SVD with a zero singular value, but it is **not** a full-column-rank QR solve: its second triangular equation cannot be inverted. The pseudoinverse sends a whitened response \\(y=W^{1/2}b\\) to \\((q_1^Ty/2,q_2^Ty/(\\sqrt2e))\\) for \\(e>0\\), and to \\((q_1^Ty/2,0)\\) for \\(e=0\\). Do not call this the ordinary unweighted pseudoinverse action of \\(A_e\\) without the whitening.

For \\(e>0\\), \\(\\kappa_2(C_e)=\\sqrt2/e\\), \\(\\kappa_2(C_e^TC_e)=2/e^2\\), and \\(\\|C_e^+\\|_2=1/(\\sqrt2e)\\). The rank-one truncated SVD discards the second column, with operator and Frobenius errors both \\(\\sqrt2e\\); Eckart–Young proves optimality. At \\(e=0\\) the operator is already rank one, so that error is zero. The rank-deficient full-column solve has no finite condition number; the effective ratio on its one-dimensional resolved range is \\(2/2=1\\).

For \\(B_e\\), \\(e>0\\) and the supplied \\(0<d/e\\le1\\), the true square-system solution is \\(x=(1,d/e)^T\\). The candidate has residual \\(r=z-B_e\\widehat x=(0,d)^T\\) and exactly solves the nearby system \\(B_e\\widehat x=z-r=(1,0)^T\\). Its rhs-only relative backward error is \\(d\\), relative infinity-norm forward error is \\(d/e\\), and \\(\\kappa_\\infty(B_e)=1/e\\). The rhs-only bound \\(\\kappa_\\infty d\\) is attained.
\\[
\\eta_\\infty=\\frac{\\|r\\|_\\infty}
{\\|B_e\\|_\\infty\\|\\widehat x\\|_\\infty+\\|z\\|_\\infty}=d/2.
\\]
This is also attained as a joint normwise backward error: choose \\(E_{21}=d/2\\), all other \\(E\\) entries zero, and \\(f=(0,-d/2)^T\\). Then \\((B_e+E)\\widehat x=z+f\\) with both relative input perturbations \\(d/2\\). CP3 gives the joint bound \\((d/e)/(1-d/(2e))\\) when \\(d/(2e)<1\\). The least-squares residual of the rectangular problem has a different purpose: a nonzero **optimal** residual is not evidence that its minimizer was computed inaccurately.

### LA-ADV-P001 — Complete primary model

Retain the printed primary input row. Here is the entire finite ledger:

| Quantity | Exact primary value |
| --- | --- |
| Gram diagonal | 4, 2 |
| Minimum-norm coefficients | 1, 1 |
| Fit | 2, 0, 1 |
| Residual b minus fit | 1, 1, -1 |
| Weighted residual squared | 4 |
| Squared singular values of C | 4, 2 |
| Exact rank | 2 |
| Numerical rank at cutoff | 2 |
| Squared condition number of C | 2 |
| Squared pseudoinverse norm of C | 1/2 |
| Squared best rank-one error | 2 |
| Square-system condition infinity | 1 |
| Square-system relative forward error | 1/10 |
| Square-system rhs backward error | 1/10 |
| Square-system joint backward error | 1/20 |
| Square-system finite joint bound | 2/19 |

Deliverables 2–4 follow from the general identities and CP1; explicitly retain \\(P_W\\), \\(Q,\\Sigma,V\\), \\(A^TWr=0\\) and the objective's equality condition. The cutoff \\(1/10\\) lies below both singular values. The prescribed response perturbation is zero, so no coefficient change is inferred; under a separate budget \\(\\|\\Delta b\\|_W\\le\\xi\\), the sharp coefficient bound is \\(\\|\\Delta c\\|_2\\le\\xi/\\sqrt2\\), attained by a perturbation along \\(W^{-1/2}q_2\\). Weighted residual size 2 is the irreducible mismatch for this datum, not floating-point error.

For the square problem, \\(z=(1,1/10)^T\\), true \\(x=(1,1/10)^T\\), candidate \\((1,0)^T\\), \\(r=(0,1/10)^T\\), nearby rhs \\((1,0)^T\\). The relative error is \\(1/10\\), rhs-only backward error \\(1/10\\), and joint error \\(1/20\\). The finite joint bound is \\((1/10)/(1-1/20)=2/19\\), exceeding the actual error. CP3's different perturbation \\(E=\\operatorname{diag}(0,-1/4)\\), rhs \\(e_2\\), attains \\(1/3\\); do not confuse two different perturbation questions.

\\(H_0=\\operatorname{diag}(2,1)\\), \\(G_0=I\\), so its standard eigenbasis is orthonormal and both Euclidean simple-eigenvalue condition numbers are 1. Its real and complex spectral conclusions coincide here. The matrix uncertainty bound \\(\\nu=1/10000<\\sqrt2\\) preserves the column rank of \\(C_1\\), but does not prove any algorithm was stable. Choose whitened Householder QR for a stable full-rank least-squares implementation and SVD when rank/low-rank approximation is the actual query; do not compute a full eigendecomposition merely to fit these two columns.

### LA-ADV-P002 — Complete changed model

Before comparison, derive the entire changed certificate from its printed row. Here the baseline datum \\(b=(1,1,1)^T\\) lies in the first-column space. The changed matrix remains exact rank two, but its second mode is small.

| Quantity | Exact changed value |
| --- | --- |
| Gram diagonal | 4, 1/500000 |
| Minimum-norm coefficients | 1, 0 |
| Fit | 1, 1, 1 |
| Residual b minus fit | 0, 0, 0 |
| Weighted residual squared | 0 |
| Squared singular values of C | 4, 1/500000 |
| Exact rank | 2 |
| Numerical rank at cutoff | 1 |
| Squared condition number of C | 2000000 |
| Squared pseudoinverse norm of C | 500000 |
| Squared best rank-one error | 1/500000 |
| Square-system condition infinity | 1000 |
| Square-system relative forward error | 1/10 |
| Square-system rhs backward error | 1/10000 |
| Square-system joint backward error | 1/20000 |
| Square-system finite joint bound | 2/19 |

The exact weighted projector and baseline fit agree with the same column space as P001; the coefficient map is less well conditioned. Numerical rank 1 at \\(1/100\\) is a declared truncation policy. At \\(1/10000\\) it is 2; at the exact equality cutoff \\(\\sqrt2/1000\\) it is 1. The bound \\(\\nu=1/10000<\\sqrt2/1000\\) actually preserves exact full column rank of every allowed perturbed matrix. Thus discarding this mode at \\(1/100\\) is a coarser modelling/resolution choice, not forced by that smaller uncertainty budget.

The supplied response change is \\(\\Delta b=(1,-1,0)^T/10000\\), with \\(\\|\\Delta b\\|_W=\\sqrt2/10000\\). Refit in exact arithmetic:
\\[
b+\\Delta b=(10001/10000,9999/10000,1)^T,\\quad
c_{\\mathrm{changed}}=(1,1/10)^T.
\\]
The new fit is exactly the changed datum, so residual zero; coefficient change is \\((0,1/10)^T\\). Since \\(\\|b\\|_W=2\\) and \\(\\|c\\|_2=1\\),
\\[
\\frac{\\|\\Delta c\\|_2}{\\|c\\|_2}
=\\frac1{10}
=\\kappa_2(C_e)\\frac{\\|\\Delta b\\|_W}{\\|b\\|_W}.
\\]
The data-direction sensitivity bound is attained, even with exact arithmetic. The rank-one truncated fit instead keeps \\(c=(1,0)^T\\) and leaves residual \\((1,-1,0)^T/10000\\), with weighted squared residual \\(1/50000000\\). Its smaller coefficient is biased relative to this exact full-rank fit; it is not automatically more truthful about an unknown real process.

For the square problem, \\(z=(1,1/10000)^T\\), true solution \\((1,1/10)^T\\) and candidate \\((1,0)^T\\) give the printed backward/forward ledger. A very small residual and \\(\\eta_\\infty=1/20000\\) coexist with relative error \\(1/10\\). Conditioning explains the possible amplification; these numbers alone do not prove backward stability of an algorithm. A conditional arithmetic budget \\(\\epsilon_B,\\epsilon_z\\le\\beta\\) would give \\(2\\kappa_\\infty\\beta/(1-\\kappa_\\infty\\beta)\\) only when \\(\\kappa_\\infty\\beta<1\\); no actual program's \\(\\beta\\) is supplied.

\\(H_1=\\left(\\begin{smallmatrix}2&1\\\\0&1\\end{smallmatrix}\\right)\\) is diagonalizable but not Euclidean normal. \\(G_1=\\left(\\begin{smallmatrix}1&1\\\\1&2\\end{smallmatrix}\\right)\\) makes it self-adjoint, as CP2 verifies. Standard normalized left/right eigenvectors have overlap \\(1/\\sqrt2\\), so both Euclidean eigenvalue condition numbers are \\(\\sqrt2\\). In \\(G_1\\)-orthonormal coordinates the transformed diagonal operator is normal; that is a statement in a different norm. Applying a normal-spectrum disk bound in the original Euclidean geometry would be invalid.

### LA-ADV-R001 — Complete later-return model and degenerate audit

At a later sitting close the keys, retain the return row and reconstruct all nine deliverables. Label earlier answer exposure and any help. There is no enforced delay or unseen form. The vanished column must be handled directly.

| Quantity | Exact return value |
| --- | --- |
| Gram diagonal | 4, 0 |
| Minimum-norm coefficients | 1, 0 |
| Fit | 1, 1, 1 |
| Residual b minus fit | 1, -1, 0 |
| Weighted residual squared | 2 |
| Squared singular values of C | 4, 0 |
| Exact rank | 1 |
| Numerical rank at cutoff | 1 |
| Full-column condition number of C | infinite |
| Effective condition on resolved range | 1 |
| Squared pseudoinverse norm of C | 1/4 |
| Squared best rank-one error | 0 |

The normal equation is \\(4c_1=4\\), with no equation constraining \\(c_2\\). Every minimizer is \\((1,t)^T\\); the Euclidean coefficient norm squared is \\(1+t^2\\), uniquely minimized at \\(t=0\\). The objective is \\(2+4(c_1-1)^2\\), independent of \\(c_2\\). This proves both nonuniqueness of the least-squares fit's coefficients and uniqueness of the chosen minimum-norm coefficient vector. The fitted observation is unique. The rank-one projector is \\(\\mathbf1(1,1,2)/4\\), not the rank-two \\(P_W\\); show this distinction before carrying any formula across the limit.

The SVD identity still holds with singular values 2 and 0. The pseudoinverse inverts only 2; its norm is \\(1/2\\). The effective condition ratio on the resolved range is 1, while the lost coefficient direction prevents a finite full-column solve condition number. Do not use \\(\\sqrt2/e\\) or divide by the zero second Gram entry. There is no response perturbation in this row; changing data cannot recover the free coefficient without an additional model constraint.

The separate \\(B_0=\\operatorname{diag}(1,0)\\), \\(z=(1,1/100)^T\\) is inconsistent. The candidate's residual is \\((0,1/100)^T\\), but no true solution/relative forward error exists for this rhs and no inverse perturbation bound applies. The nearby rhs \\((1,0)^T\\) has solutions \\((1,t)^T\\), minimum-norm \\((1,0)^T\\). A small residual does not turn an inconsistent problem into a solved one.

\\(H_2=\\left(\\begin{smallmatrix}2&2\\\\0&1\\end{smallmatrix}\\right)\\) remains diagonalizable, Euclidean nonnormal, and self-adjoint for \\(G_2=\\left(\\begin{smallmatrix}1&2\\\\2&5\\end{smallmatrix}\\right)\\). Its Euclidean simple-eigenvalue condition numbers are \\(\\sqrt5\\); changing the observation design rank did not change the definition of this separate operator problem.

Under the requested matrix-uncertainty bound \\(\\|E\\|_2\\le\\nu=1/10000\\), the return's **exact** rank 1 is not preserved for all allowed matrices. \\(E=0\\) keeps rank 1, while \\(E=tq_2e_2^T\\), \\(0<t\\le\\nu\\), gives two orthogonal columns with singular values 2 and \\(t\\), hence rank 2. Its printed numerical rank 1 at cutoff \\(1/10\\) is robust: \\(\\sigma_1(C_0+E)\\ge2-\\nu>1/10\\) by testing the first unit-coordinate direction and the triangle inequality; Eckart–Young with rank-one approximant \\(C_0\\) gives \\(\\sigma_2(C_0+E)\\le\\|E\\|_2\\le\\nu<1/10\\). Thus one mode stays above the cutoff and every other mode stays below it. This does not identify a missing coefficient or give a uniform finite full-column condition bound: positive \\(t\\) can be arbitrarily small.

**Zero operator.** Replace \\(A_e\\) by the \\(3\\times2\\) zero matrix while keeping return \\(b=(2,0,1)^T\\). Every coefficient vector is a minimizer, and the Euclidean minimum-norm choice is zero. The fitted vector is zero, residual \\(b\\), weighted residual squared 6, exact/numerical rank 0 for nonnegative cutoffs, and pseudoinverse zero with norm 0. There is no positive singular value and hence no effective condition ratio. A “best rank-one approximation” means rank **at most** one: zero attains zero approximation error. No inverse accuracy guarantee is asserted.

**Zero rhs.** For an invertible \\(B_e\\) with \\(z=0\\), true \\(x=0\\). Relative rhs/forward errors are undefined; use absolute residual/error. If \\(\\widehat x=0\\), the residual is zero and the exact nearby problem is unchanged. If the scaled-backward-error denominator also vanishes, record this exact-zero case directly instead of evaluating \\(0/0\\).

## Rounding experiment, completion and repair

For the changed measurement datum, round each exact response **once** to the nearest \\(1/1000\\) before fitting. \\(10001/10000\\) and \\(9999/10000\\) both round to 1, so the stored datum becomes \\((1,1,1)^T\\). Exact fitting of that rounded input returns \\((1,0)^T\\), losing the \\(1/10\\) contrast coefficient of the unrounded datum. This declared decimal quantization is not a model of every binary floating-point library. In the changed square problem, the same rule rounds \\(d=1/10000\\) to zero; the supplied candidate then exactly solves the rounded rhs, with original-data residual \\(d\\). The data-perturbation exercise changes an exact datum; this rounding experiment changes its stored representation. Neither supplies a measured arithmetic backward error for QR/SVD software.

For a finite matrix-perturbation attainment check valid in both nonsingular forms, take \\(B_e\\), rhs \\(e_2\\) and perturb its second diagonal by \\(-e/4\\). The new solution changes from \\((0,1/e)^T\\) to \\((0,4/(3e))^T\\). In the infinity norm, \\(\\epsilon_B=e/4\\), \\(\\kappa_\\infty=1/e\\), so \\(\\kappa_\\infty\\epsilon_B=1/4\\) and relative forward error \\(1/3\\) attains the finite bound. Replacing \\(-e/4\\) by \\(-e\\) reaches the singular boundary and invalidates the denominator condition. The return \\(e=0\\) is not put through this inverse argument.

The residual/data certificates above are complete hand reproductions. Optional software comparison should report its actual inputs, arithmetic, rank cutoff, residuals, orthogonality, backward errors and disagreement with exact references. A passing oracle or copied reference output is not evidence that a learner ran a solver.

| Missing or mistaken argument | Required repair |
| --- | --- |
| Transpose used as weighted adjoint, or unweighted SVD used for a weighted fit | State both Gram matrices; whiten with \\(W^{1/2}\\); verify \\(P^TW=WP\\) and the displayed QR/SVD identities |
| Zero normal-equation residual treated as a uniqueness proof | Expand the full squared objective; state the kernel and the equality set, including return \\((1,t)\\) |
| Numerical rank substituted for exact rank | Retain strict cutoff/equality policy, noise bound and scale; use the two changed cutoffs and the zero case |
| A small residual called a small forward error or a stable algorithm | Reproduce the square-system nearby rhs, both backward errors and the finite condition bound; preserve the return's inconsistency |
| \\(\\kappa u\\) turned into guaranteed digits | Supply actual backward errors and the finite denominator hypothesis, or label the conclusion a conditional first-order estimate |
| Data sensitivity, decimal quantization and arithmetic roundoff merged | Retain separate original/perturbed/rounded data and an explicit unknown implementation-error entry |
| Every diagonalizable matrix called normal | Compare the two products for \\(H_s\\), then check self-adjointness in the transported Gram geometry |
| Power vectors required to converge despite negative/complex phase | Compare eigenlines or align phase; keep the exact \\((-1)^ke_1\\) counterexample |
| A nonnormal residual given a normal spectral-distance conclusion | Rebuild CP4's rank-one backward perturbation and nilpotent counterexample; add the missing normality/separation assumptions |

Complete all 74 source questions and two investigations, each checkpoint's four answers, and all nine deliverables in P001/P002/R001. Compare every assigned full key and retain a correction explaining the consequential change. For further public reconstruction reattempt the changed cutoff/amplification argument, return kernel/minimum-norm argument and CP4 without copying their keys; record exposure honestly.

Keep dated first, comparison and corrected files with exact task/source labels, hand tables and help used, following the [worksheet portfolio guide](/guide/learner-records/#keep-a-worksheet-portfolio). Shared reading notes remain mutable; these native course assignments add no registered writing contract, grade, immutable history or verified delay. Learner-owned files and native/Practice/tutor stores require their own existing export/recovery procedures; one shared backup does not cover all of them.

Continue to the existing finite tensor gateways after duality/quotient preparation, or to operator/numerical/representation work with its stated analysis, algebra or computational prerequisites. Infinite-dimensional projection requires closedness/completeness, and infinite-dimensional spectral theorems need additional boundedness/domain hypotheses; no finite matrix certificate silently proves them. Completion here means the selected advanced course's stated proof and numerical work, not mastery, empirical effectiveness, whole-book release or completion of the specialist curriculum.
`;export{e as default};