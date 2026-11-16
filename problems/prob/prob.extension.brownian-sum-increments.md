# Combine adjacent Brownian increments

*Easy · [Probability problems](index.md)*

For standard Brownian motion, find $\operatorname{Var}((B_2-B_1)+(B_4-B_2))$.

```answer
{"answer":{"kind":"integer","expected":"3","checker_scope":"Checks this adjacent-increment sum variance only."}}
```

<details>
<summary>Hint 1</summary>

Simplify the sum before calculating its variance.

</details>

<details>
<summary>Hint 2</summary>

The shared endpoint value cancels, leaving one increment over the combined interval.

</details>

<details>
<summary>Worked solution</summary>

Telescoping gives a single Brownian increment.

1. Algebraically, $(B_2-B_1)+(B_4-B_2)=B_4-B_1$.
2. This is a standard Brownian increment over an interval of length $4-1=3$.
3. Its variance is therefore three. Equivalently, the original disjoint increments are independent with variances one and two, whose sum is three.

They telescope to the increment over $[1,4]$, of variance three.

</details>
