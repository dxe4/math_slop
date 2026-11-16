# Use the residue-vector-space generator criterion

*Easy · [Abstract algebra problems](index.md)*

Let $R=k[x,y]_{(x,y)}$ with maximal ideal m. The residue classes of x,y form a basis of m/m^2 over k. Nakayama's generator criterion says the minimum number of generators of m is dim\_k(m/m^2). Find it.

```answer
{"answer":{"kind":"integer","expected":2,"checker_scope":"Exact requested module invariant only; no homological or Noetherian theorem is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

The two displayed classes are declared independent and spanning.

</details>

<details>
<summary>Hint 2</summary>

Count the basis, not the ambient ring variables as an unsupported heuristic.

</details>

<details>
<summary>Worked solution</summary>

Minimal local generation is measured after quotienting by the maximal-ideal multiple.

1. The given basis of m/m^2 has two members.
2. Its vector-space dimension is therefore two.
3. Nakayama's criterion gives minimum generator number two.

</details>
