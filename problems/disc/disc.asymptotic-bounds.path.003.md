# Choose fixed tail witnesses

*Medium · [Discrete mathematics](index.md)*

For $T(n)=5n+7$ and $g(n)=n$ on positive integers, fix $C=6$. Find the smallest positive integer $N$ such that $T(n)\leq Cg(n)$ for every integer $n\geq N$.

```answer
{"answer":{"kind":"integer","expected":7,"checker_scope":"Checks the complete displayed exact mathematical answer under the original finite givens. Any written explanation remains separate from this bounded automatic result."}}
```

<details>
<summary>Hint 1</summary>

Substitute the fixed multiplier into the inequality.

</details>

<details>
<summary>Hint 2</summary>

The threshold must include every later integer and must not include a failing boundary value.

</details>

<details>
<summary>Worked solution</summary>

A whole-tail bound requires a threshold justified for all later indices.

1. The inequality is $5n+7\leq6n$.
2. It is equivalent to $n\geq7$, so every integer from $7$ onward works.
3. At $n=6$ it fails, so the smallest threshold is $N=7$, giving the valid pair $(C,N)=(6,7)$.

</details>
