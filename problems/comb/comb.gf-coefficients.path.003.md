# Encode two different box ranges

*Medium · [Combinatorics](index.md)*

Box A may contain $0,1,2$ identical counters and box B may contain $0,1,2,3$. Use the formal product $(1+x+x^{2}) (1+x+x^{2}+x^{3})$. How many labeled occupancy pairs have total three?

```answer
{"answer":{"kind":"integer","expected":3,"checker_scope":"Exact finite structured answer for interpret-product-as-labeled-occupancy-count; no independently authored proof or general proficiency claim."}}
```

<details>
<summary>Hint 1</summary>

An occupancy pair contributes to $x^{3}$ exactly when its occupancies sum to three.

</details>

<details>
<summary>Hint 2</summary>

List the allowed A values and determine B.

</details>

<details>
<summary>Worked solution</summary>

One polynomial per labeled box encodes the allocation count.

1. The allowed pairs are $(0,3),(1,2),(2,1)$.
2. Each contributes one $x^{3}$ term, giving coefficient and allocation count $3$.

</details>
