# Use cyclic trace for unequal matrix sizes

*Easy · [Linear algebra problems](index.md)*

Work over $\mathbb R$. Vectors are columns and all entries are dimensionless. Let $A$ be $2\times3$ and $B$ be $3\times2$, with $\operatorname{tr}(AB)=5$. Using $\operatorname{tr}(AB)=\operatorname{tr}(BA)$, find the trace of the $3\times3$ matrix $BA$.

```answer
{"answer":{"kind":"integer","expected":5,"checker_scope":"Only the requested exact finite answer is checked; the mathematical derivation is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Both products are square, even though they have different sizes.

</details>

<details>
<summary>Hint 2</summary>

The supplied trace identity does not assert equality of the two matrices.

</details>

<details>
<summary>Worked solution</summary>

Apply a scalar identity while respecting different matrix dimensions.

1. $AB$ is two-by-two and $BA$ is three-by-three, so both traces are defined.
2. The trace identity follows by exchanging the finite sums of terms $a_{ij}b_{ji}$.
3. The given trace five is therefore also the trace of $BA$.

</details>
