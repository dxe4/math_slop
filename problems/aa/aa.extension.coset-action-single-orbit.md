# Identify transitivity from the coset action itself

*Easy · [Abstract algebra problems](index.md)*

Let H be a subgroup of a finite group G. Under left multiplication, G acts on its left cosets G/H. How many orbits does this action on $G/H$ have?

```answer
{"answer":{"kind":"integer","expected":1,"checker_scope":"Exact requested finite action quantity only; no general action proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

Any coset gH is the translate of H.

</details>

<details>
<summary>Hint 2</summary>

Compare two arbitrary cosets using one group element.

</details>

<details>
<summary>Worked solution</summary>

The coset set is one orbit regardless of its number of elements.

1. Every coset gH is obtained by acting on H with g.
2. More generally g\_2\*g\_1 inverse takes g\_1H to g\_2H.
3. Thus all cosets lie in one orbit.

</details>
