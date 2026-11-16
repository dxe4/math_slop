# Identify the support cut out by maximal presentation minors

*Hard · [Abstract algebra problems](index.md)*

Let $R^m\xrightarrow{A}R^n\to M\to0$ be a finite presentation over a commutative ring, n&gt;=1. Let J be the ideal of n-by-n minors, zero if m&lt;n. Prove J is contained in Ann(M) and sqrt(J)=sqrt(Ann(M)). Use localization and residue-field ranks; do not assume A is minimal.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

An adjugate makes each full-size minor kill the cokernel.

</details>

<details>
<summary>Hint 2</summary>

At a prime, M localizes to zero exactly when the reduced matrix has full row rank.

</details>

<details>
<summary>Model proof</summary>

Determinantal annihilation and local rank detect the same closed support.

1. For each n-column square submatrix B of A, adjugate multiplication shows det(B) times every basis vector of R^n lies in the image of B, hence in the image of A. Thus every generating minor kills the cokernel and J is contained in Ann(M). If m&lt;n the first claim is automatic.
2. At a prime P, M\_P=0 exactly when A\_P is surjective. This is equivalent to its reduction over the residue field having row rank n: one direction is immediate, while the other gives a minor outside P and an invertible square submatrix locally, forcing surjectivity. Thus M\_P=0 exactly when J is not contained in P.
3. Since M is finitely generated, Supp(M)=V(Ann(M)); the local rank criterion gives the same set V(J). Equal sets of containing primes give equal radicals by the prime-intersection theorem applied to the quotient ideals. Hence the radicals agree.

**Self-assessment rubric**

- Show each determinant kills the full cokernel, including the undersized case.
- Prove both directions of the residue-field rank criterion.
- Use finite generation and prime correspondence to conclude radical equality.

</details>
