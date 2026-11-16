# Optimize a squared root product under two symmetric constraints

*Hard · [Original Putnam-style training](index.md)*

Five real numbers $r_1,\ldots,r_5$ satisfy $\sum r_i=0$ and $\sum r_i^2=10$. Find the maximum of $(r_1r_2r_3r_4r_5)^2$. They may be viewed as the roots of a monic real quintic.

```answer
{"answer":{"kind":"rational","expected":{"numerator":64,"denominator":3},"checker_scope":"Exact requested bounded value only; a correct numerical answer does not certify the full university-level argument or a contest result."}}
```

<details>
<summary>Hint 1</summary>

The feasible set is compact, and a positive product-square value is possible, so a maximizer with maximal value has no zero coordinate.

</details>

<details>
<summary>Hint 2</summary>

Apply Lagrange multipliers to the logarithm of the product square. Each coordinate then satisfies the same quadratic equation.

</details>

<details>
<summary>Worked solution</summary>

At an interior nonzero maximizer, the roots take only two values; their multiplicities reduce the sharp bound to four cases.

1. The hyperplane-sphere intersection is compact. A feasible nonzero configuration is two copies of sqrt(3) and three copies of -2/sqrt(3), so the maximum is positive.
2. At a maximizing point all coordinates are nonzero. The two constraint gradients are independent, and stationarity of $2\sum\log|r_i|$ gives $2/r_i=\lambda+2\mu r_i$. Thus there are at most two distinct coordinate values.
3. There cannot be only one value because the sum is zero and the squared sum is ten. Let the positive value a occur k times and negative b occur 5-k times, with 1&lt;=k&lt;=4.
4. The constraints give $a^2=2(5-k)/k$ and $b^2=2k/(5-k)$. For k=1 or 4 the product square is 1/2; for k=2 or 3 it is 64/3.
5. The nonzero configuration given at the start attains $64/3$, proving that this is the maximum.

</details>
