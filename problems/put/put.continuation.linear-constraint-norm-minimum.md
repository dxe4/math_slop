# Linear constraint norm minimum

*Medium · [Original Putnam-style training](index.md)*

Find the minimum of $x^2+y^2$ over real $x,y$ satisfying $x+2y=1$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":5},"checker_scope":"Only the exact bounded answer is checked; the argument and assumptions are not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Apply Cauchy–Schwarz to $(x,y)$ and $(1,2)$.

</details>

<details>
<summary>Hint 2</summary>

Find the proportional equality case.

</details>

<details>
<summary>Worked solution</summary>

Equality occurs when $(x,y)$ is proportional to $(1,2)$, namely $(1/5,2/5)$, so the minimum is $1/5$.

1. Cauchy–Schwarz gives $(x+2y)^2\le(x^2+y^2)(1^2+2^2)=5(x^2+y^2)$.
2. The constraint therefore forces $x^2+y^2\ge1/5$.
3. Equality occurs when $(x,y)$ is proportional to $(1,2)$, namely $(1/5,2/5)$, so the minimum is $1/5$.

</details>
