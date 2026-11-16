# Translate an invariant line into a forbidden field eigenvalue

*Medium · [Abstract algebra problems](index.md)*

An F2-linear operator T on F2^2 has minimal polynomial $t^2+t+1$. How many one-dimensional T-invariant subspaces exist?

```answer
{"answer":{"kind":"integer","expected":"0","checker_scope":"Exact requested finite invariant only. Graduate algebra reasoning, classification hypotheses and proofs are supplied for personal study and are not automatically certified. This new skill does not expand any existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

A one-dimensional invariant subspace supplies an eigenvalue in the base field.

</details>

<details>
<summary>Hint 2</summary>

Check the polynomial at both field elements.

</details>

<details>
<summary>Worked solution</summary>

An irreducible minimal polynomial blocks invariant lines over the base field without blocking lines after extension.

1. If a line were invariant, a nonzero vector v on it would satisfy Tv=lambda v for lambda in F2.
2. Applying the minimal polynomial to v would require lambda^2+lambda+1=0. Neither zero nor one satisfies that equation in F2.
3. Hence there are no invariant one-dimensional base-field subspaces.

</details>
