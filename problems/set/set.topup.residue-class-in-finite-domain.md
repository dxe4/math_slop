# Intersect an equivalence class with its actual domain

*Medium · [Set theory](index.md)*

On $U=\{0,1,\ldots,8\}$ define x\~y when x and y have the same remainder modulo three. Find the equivalence class of five inside U.

```answer
{"answer":{"kind":"set","expected":"{2, 5, 8}","checker_scope":"Exact declared bounded result, explicit interval description or selected statement only; no unrestricted set proof or new checkpoint objective is automatically certified."}}
```

<details>
<summary>Hint 1</summary>

The class consists of all allowed values congruent to five.

</details>

<details>
<summary>Hint 2</summary>

The explicit finite domain restricts how far the residue progression extends.

</details>

<details>
<summary>Worked solution</summary>

Equivalence classes are subsets of the declared domain, not unrestricted integer residue classes.

1. Five has remainder two on division by three.
2. The values in U of that remainder are two,five,eight.
3. The class is $\{2,5,8\}$.

</details>
