# How many mutually balanced vectors?

*Hard · [Linear algebra problems](index.md)*

Find the largest integer $n$ for which vectors $v_1,\ldots,v_n\in\mathbb R^3$ can satisfy $v_i\cdot v_i=3$ for every $i$ and $v_i\cdot v_j=-1$ whenever $i\ne j$.

```answer
{"answer":{"kind":"integer","expected":4,"checker_scope":"Exact stated finite-dimensional answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

The squared norm of a sum cannot be negative. Expand it using the prescribed pairwise products.

</details>

<details>
<summary>Hint 2</summary>

A sharp upper bound still needs a configuration that attains it; sign patterns of three coordinates may help.

</details>

<details>
<summary>Worked solution</summary>

Use positivity for an upper bound, then exhibit a sharp finite configuration.

1. Expand the squared norm of $s=\sum_i v_i$: $\|s\|^2=3n+2\binom n2(-1)=n(4-n)$.
2. This quantity is nonnegative, so any positive feasible $n$ satisfies $n\le4$.
3. Consider $(1,1,1)$, $(1,-1,-1)$, $(-1,1,-1)$ and $(-1,-1,1)$.
4. Each has squared norm $3$. Any two agree in one coordinate and disagree in two, so their dot product is $1-1-1=-1$.
5. These four vectors attain the bound. The largest value is $4$.

</details>
