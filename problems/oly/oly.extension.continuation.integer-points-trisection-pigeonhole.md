# Force two integral trisection points

*Medium · [Original olympiad-style problems](index.md)*

Ten distinct points have coordinates in $\mathbb Z^2$. Prove that some pair are endpoints of a segment whose two trisection points also have integer coordinates. Explain why nine points need not suffice.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

Record both coordinates modulo three. There are nine residue pairs.

</details>

<details>
<summary>Hint 2</summary>

For sharpness, take the nine points $(i,j)$ with $i,j\in\{0,1,2\}$.

</details>

<details>
<summary>Model proof</summary>

Coordinate residues encode exactly when both third-division points are integral.

1. There are $3^2=9$ coordinate residue classes modulo three. Among ten points, two distinct points $P,Q$ share one class, so $Q-P=3v$ for an integer vector $v$.
2. Their trisection points are $P+v$ and $P+2v$, both integral and strictly between the endpoints because $v\ne0$.
3. For nine points use the $3\times3$ array $(i,j)$ with $i,j\in\{0,1,2\}$. No two distinct points have the same coordinate residue pair. If either trisection point were integral, $(Q-P)/3$ would be integral, forcing equal residue pairs, a contradiction. Thus ten is the sharp threshold.

**Self-assessment rubric**

- Use the nine ordered coordinate residue pairs.
- Write the two actual trisection vectors and check distinct endpoints.
- Give the array and prove no pair qualifies.

</details>
