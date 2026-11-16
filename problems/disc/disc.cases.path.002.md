# Cover every remainder modulo three

*Easy · [Discrete mathematics](index.md)*

An integer has Euclidean form $n=3q+r$ with integers $q,r$ and $0\leq r<3$. Enter the complete set of possible remainders $r$.

```answer
{"answer":{"kind":"finite_integer_set","expected":[0,1,2],"checker_scope":"Checks the complete displayed exact mathematical answer under the original finite givens. Any written explanation remains separate from this bounded automatic result."}}
```

<details>
<summary>Hint 1</summary>

Use both the integer condition and the strict upper bound.

</details>

<details>
<summary>Hint 2</summary>

A remainder equal to the divisor belongs to the next quotient instead.

</details>

<details>
<summary>Worked solution</summary>

Euclidean remainder bounds specify the case split.

1. The lower bound permits $0$.
2. The remaining integers strictly below $3$ are $1$ and $2$.
3. Thus the exhaustive, disjoint remainder cases are $\{0,1,2\}$.

</details>
