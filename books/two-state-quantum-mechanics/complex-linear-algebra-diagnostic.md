
# Complex Linear Algebra Diagnostic

Complete this diagnostic before Chapter 1. It is not a gate: each missed item points to a repair task. Work without a calculator and write the rule that justifies each answer.

## Questions

1. Compute the conjugate, modulus squared, and inverse of $3-4i$.
2. For $u=(1,i)^{\mathsf T}$ and $v=(i,1)^{\mathsf T}$, compute $\langle u|v\rangle$ and both norms.
3. Explain why $u^{\mathsf T} u$ is not a complex norm formula.
4. Normalize $(1,1-i)^{\mathsf T}$.
5. Decide whether $\begin{pmatrix}1&i\\-i&2\end{pmatrix}$ is Hermitian.
6. Find eigenvalues and normalized eigenvectors of $X=\begin{pmatrix}0&1\\1&0\end{pmatrix}$.
7. Verify that $P=|u\rangle\langle u|$ is a projector when $u$ is normalized.
8. Show columns of a unitary matrix form an orthonormal basis.
9. Expand $(a|0\rangle+b|1\rangle) \otimes (c|0\rangle+d|1\rangle)$.
10. State the difference between a basis change and an active unitary operation.
11. For $A=A^{\dagger}$, prove an eigenvalue is real.
12. Compute $\exp\left(-itZ\right)$ from the spectral decomposition of $Z$.

## Answers and repair notes

1. Conjugate $3+4i$, squared modulus $25$, inverse $(3+4i)/25$. Repair: complex arithmetic and polar form.
2. $\langle u|v\rangle=(1,-i)(i,1)^{\mathsf T}=0$; both norms are $\sqrt{2}$. Repair: conjugate the first slot.
3. For $(1,i)$, the transpose expression gives $1+i^2=0$ despite a nonzero vector. Repair: positivity of inner products.
4. The squared norm is $1+|1-i|^2=3$; divide by $\sqrt{3}$.
5. Yes. Diagonal entries are real and off-diagonal entries are conjugates.
6. Eigenvalues $\pm 1$, eigenvectors $(1,1)^{\mathsf T}/\sqrt{2}$ and $(1,-1)^{\mathsf T}/\sqrt{2}$.
7. $P^2=|u\rangle\langle u|u\rangle\langle u|=P$ and $P^{\dagger}=P$.
8. The $(j,k)$ entry of $U^{\dagger} U=I$ is the inner product of columns $j,k$.
9. $ac|00\rangle+ad|01\rangle+bc|10\rangle+bd|11\rangle$.
10. A passive change replaces coordinates and basis consistently; an active operation changes the state relative to a fixed basis.
11. $\lambda\langle v|v\rangle=\langle v|Av\rangle=\langle Av|v\rangle=\lambda^*\langle v|v\rangle$, so $\lambda=\lambda^*$.
12. $\operatorname{diag}(\exp\left(-it\right),\exp\left(it\right))$.

## Readiness bands

- **10–12 correct:** begin Chapter 1 and use exercises for fluency.
- **7–9 correct:** begin, but repair the named topics alongside Chapters 1–2.
- **0–6 correct:** review complex numbers, matrix multiplication, eigenvectors, and orthonormal bases before continuing.

Regardless of score, revisit the diagnostic after Chapter 2 and explain every answer in full sentences. Fluency means being able to detect a missing conjugate or illegal basis change, not merely reproduce a result.
