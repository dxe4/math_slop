# Use a sharp root inequality to recover a coefficient

*Medium · [Original olympiad-style problems](index.md)*

A monic quartic has four positive real roots counted with multiplicity. Their sum is four and their product one. Find the coefficient of $x^2$.

```answer
{"answer":{"kind":"integer","expected":"6","checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

Compare the root arithmetic mean and geometric mean.

</details>

<details>
<summary>Hint 2</summary>

The supplied values force equality, so all roots coincide.

</details>

<details>
<summary>Worked solution</summary>

Turn the equality case of AM-GM into polynomial rigidity.

1. AM-GM gives product at most the fourth power of the root mean, which here is one.
2. The product attains that bound, so every positive root equals the mean one.
3. The polynomial is $(x-1)^4$, whose quadratic coefficient is six.

</details>
