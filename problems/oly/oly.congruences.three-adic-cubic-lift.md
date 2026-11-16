# Track exact valuation under cubing

*Hard · [Original olympiad-style problems](index.md)*

Find the greatest $e\geq0$ such that $3^e$ divides $2^{3^8}+1$.

```answer
{"answer":{"kind":"integer","expected":"9","checker_scope":"Exact short answer only; the complete argument remains a worked solution, not an automatically certified proof or contest result."}}
```

<details>
<summary>Hint 1</summary>

Use the factorization of a sum of cubes eight times.

</details>

<details>
<summary>Hint 2</summary>

When x is minus one modulo three, determine the exact power of three in the other cubic factor.

</details>

<details>
<summary>Worked solution</summary>

Each cubic step adds exactly one factor of three.

1. If $x\equiv-1\pmod3$, write $x=-1+3k$. Then $x^2-x+1=3-9k+9k^2$ is divisible by three but not nine.
2. Since $x^3+1=(x+1)(x^2-x+1)$, cubing such an x increases the valuation of x+1 by exactly one.
3. Starting with $2+1=3$ of valuation one and cubing eight times gives valuation $1+8=9$.

</details>
