# Name the actual contradiction

*Medium · [Discrete mathematics](index.md)*

Positive integers $a,b$ have no common divisor greater than $1$. An argument derives that both are even. Enter the smallest positive integer greater than $1$ that must then divide both, contradicting the hypothesis.

```answer
{"answer":{"kind":"integer","expected":2,"checker_scope":"Checks the complete displayed exact mathematical answer under the original finite givens. Any written explanation remains separate from this bounded automatic result."}}
```

<details>
<summary>Hint 1</summary>

Use the definition of an even integer.

</details>

<details>
<summary>Hint 2</summary>

A contradiction must violate the stated common-divisor condition.

</details>

<details>
<summary>Worked solution</summary>

Identify the precise hypothesis contradicted by a derived fact.

1. Evenness gives $a=2r$ and $b=2s$ for integers $r,s$.
2. Therefore $2$ divides both $a$ and $b$.
3. Since $2>1$, this contradicts the common-divisor hypothesis; it is also the smallest possible positive integer above $1$.

</details>
