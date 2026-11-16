# Prove Takagi factorization through a real fixed-space construction

*Hard · [Linear algebra problems](index.md)*

For a complex symmetric matrix $S=S^T$, prove $S=UDU^T$ with U unitary and D diagonal nonnegative. Use $\langle x,y\rangle=x^*y$ and the antilinear map $Kx=S\overline x$. Preparation: the Hermitian spectral theorem and real Gram-Schmidt.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific semantic rubric reflection only. No automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

The square of K is the positive Hermitian matrix $SS^*$, and its real-eigenvalue spaces are K-invariant.

</details>

<details>
<summary>Hint 2</summary>

On a positive eigenspace divide K by the corresponding singular value to obtain an antilinear isometric involution. Its fixed vectors form a real space spanning the complex eigenspace.

</details>

<details>
<summary>Model proof</summary>

Antilinear symmetry supplies singular vectors with the phase alignment required for congruence.

1. Because $S=S^T$, one has $K^2=S\overline S=SS^*$. Also $\langle Kx,y\rangle=\langle Ky,x\rangle$, as both use the symmetric matrix $S^*$. Consequently $\|Kx\|^2=\langle K^2x,x\rangle$.
2. On the eigenspace E of $K^2$ for $\sigma^2>0$, K preserves E and $C=K/\sigma$ is an antilinear norm isometry with $C^2=I$. Complex polarization makes it antiunitary.
3. Its fixed real subspace spans E: every z equals $(z+Cz)/2+i(z-Cz)/(2i)$, with both parenthesized real components fixed. Pairings of fixed vectors are real by antiunitarity. Real Gram-Schmidt therefore supplies an orthonormal basis of E consisting of fixed vectors, each satisfying $K u=\sigma u$.
4. On the zero eigenspace the norm identity gives K zero, so choose any orthonormal basis there. Combine all these bases of the mutually orthogonal Hermitian eigenspaces into a unitary U and put their corresponding nonnegative sigma values in D.
5. The column identities are $S\overline U=UD$. Since $\overline U U^T=I$, multiplication on the right gives $S=UDU^T$, including all zero singular values.

**Self-assessment rubric**

- Establish the positive square and the symmetry/norm identities for K.
- Prove the positive-eigenspace normalization is an antiunitary involution.
- Construct the real fixed-space decomposition and an orthonormal fixed basis.
- Handle the singular zero eigenspace without dividing by zero.
- Assemble the columns and obtain the congruence factorization with correct conjugation.

</details>
