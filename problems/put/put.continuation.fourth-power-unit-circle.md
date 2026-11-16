# Fourth power unit circle

*Medium · [Original Putnam-style training](index.md)*

Find the minimum of $x^4+y^4$ subject to $x^2+y^2=1$ over real $x,y$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Only the exact bounded answer is checked; the argument and assumptions are not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Set $u=x^2$ and $v=y^2$, so $u+v=1$.

</details>

<details>
<summary>Hint 2</summary>

Complete the square or apply the two-term quadratic mean inequality.

</details>

<details>
<summary>Worked solution</summary>

Equality is feasible when $u=v=1/2$, so the minimum is $1/2$.

1. With $u=x^2,v=y^2$, the objective is $u^2+v^2$ for nonnegative $u+v=1$.
2. $u^2+v^2=(u+v)^2-2uv\ge1-2(1/4)=1/2$.
3. Equality is feasible when $u=v=1/2$, so the minimum is $1/2$.

</details>
