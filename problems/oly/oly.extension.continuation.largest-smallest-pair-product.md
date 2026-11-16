# Maximize the smallest pair product

*Medium · [Original olympiad-style problems](index.md)*

For nonnegative reals $a+b+c=1$, find the greatest possible value of $\min\{ab,bc,ca\}$. Enter a rational number.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":9},"checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

The smallest of three numbers is at most their average.

</details>

<details>
<summary>Hint 2</summary>

Use the squared-difference identity to bound the sum of pair products.

</details>

<details>
<summary>Worked solution</summary>

Bound a bottleneck by a symmetric average and attain it.

1. The minimum is at most $(ab+bc+ca)/3$.
2. The identity $(a-b)^2+(b-c)^2+(c-a)^2\ge0$ gives $ab+bc+ca\le(a+b+c)^2/3=1/3$.
3. Thus the target is at most $1/9$. All variables equal one third attain it.

</details>
