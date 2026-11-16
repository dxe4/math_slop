# Read arrows leaving each object

*Easy · [Set theory](index.md)*

On $X=\{1,2,3\}$, let R={$(1,2),(1,3),(3,1)$}. Give from\_1, from\_2 and from\_3: the sets of endpoints of arrows leaving $1, 2$ and $3$ respectively.

```answer
{"answer":{"kind":"record_of_finite_sets","expected":{"from_1":[2,3],"from_2":[],"from_3":[1]},"checker_scope":"Exact stated finite structured answer only; explanations and general infinite claims are not automatically proof-checked."}}
```

<details>
<summary>Hint 1</summary>

The first coordinate of a pair is the arrow source.

</details>

<details>
<summary>Hint 2</summary>

An object may have several outgoing arrows or none; this is a relation, not necessarily a function.

</details>

<details>
<summary>Worked solution</summary>

The pair roster and outgoing-arrow table encode the same selected ordered pairs.

1. Pairs starting with $1$ lead to $2$ and $3$; no pair starts with $2$.
2. The pair starting with $3$ leads to $1$. Thus from\_1=$\{2,3\}$, from\_2={}, from\_3=$\{1\}$.

</details>
