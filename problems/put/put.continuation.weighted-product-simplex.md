# Weighted product simplex

*Medium · [Original Putnam-style training](index.md)*

For $x,y\ge0$ with $x+y=1$, find the maximum of $x^2y$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":4,"denominator":27},"checker_scope":"Only the exact bounded answer is checked; the argument and assumptions are not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Substitute $y=1-x$ and differentiate on $[0,1]$.

</details>

<details>
<summary>Hint 2</summary>

Compare interior critical points with both endpoints.

</details>

<details>
<summary>Worked solution</summary>

At $x=2/3$, $y=1/3$ and $x^2y=4/27$, the maximum.

1. Write $F(x)=x^2(1-x)$ on $[0,1]$, with derivative $F^{\prime}(x)=x(2-3x)$.
2. The only interior critical point is $x=2/3$; both endpoints have value zero.
3. At $x=2/3$, $y=1/3$ and $x^2y=4/27$, the maximum.

</details>
