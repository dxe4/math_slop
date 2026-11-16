# Leverage trace

*Easy · [Statistics and probability](index.md)*

A full-column-rank ordinary least-squares design has an intercept and $2$ additional coefficients. What is the sum of its hat-matrix diagonal leverages?

```answer
{"answer":{"kind":"integer","expected":"3","checker_scope":"Checks only the requested exact finite answer under the stated model; it does not certify the reasoning or modeling assumptions."}}
```

<details>
<summary>Hint 1</summary>

The hat matrix projects onto the design column space.

</details>

<details>
<summary>Hint 2</summary>

Use the trace of a projection, counting the intercept among the independent columns.

</details>

<details>
<summary>Worked solution</summary>

Sum the leverages using the dimension of the fitted subspace.

1. The design has $p=1+2=3$ independent columns.
2. The orthogonal projection $H$ onto their span has rank $p$ and trace $p$.
3. As the leverages are its diagonal entries, $\sum_i h_{ii}=\operatorname{tr}(H)=3$. This is the sum over all observations, not the leverage of each observation.

</details>
