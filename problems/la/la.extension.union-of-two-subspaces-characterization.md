# Prove when a union remains a subspace

*Medium · [Linear algebra problems](index.md)*

Work over $\mathbb R$. Coordinates are dimensionless and ordered as stated. For subspaces $U,W$ of a real vector space, prove $U\cup W$ is a subspace if and only if one of $U,W$ contains the other.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

The containment direction makes the union equal to one known subspace.

</details>

<details>
<summary>Hint 2</summary>

If neither containment holds, add a vector belonging only to each side.

</details>

<details>
<summary>Model proof</summary>

A single mixed sum detects the missing nesting condition.

1. If one subspace contains the other, the union is the larger subspace and is closed under vector operations.
2. Otherwise choose $u\in U\setminus W$ and $w\in W\setminus U$. If $u+w\in U$, subtracting $u$ would put $w$ in $U$, a contradiction.
3. If $u+w\in W$, subtracting $w$ would put $u$ in $W$. Thus the sum is outside the union, which is not a subspace.

**Self-assessment rubric**

- Explain why containment makes the union a subspace.
- Choose vectors witnessing both failures of containment.
- Exclude the mixed sum from each subspace by subtraction.

</details>
