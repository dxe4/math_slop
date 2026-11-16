# Cubic newton square sum

*Medium · [Original Putnam-style training](index.md)*

Let $r_1,r_2,r_3$ be the complex roots, with multiplicity, of $x^3-2x^2-3x+1$. Find $r_1^2+r_2^2+r_3^2$.

```answer
{"answer":{"kind":"integer","expected":"10","checker_scope":"Only the exact bounded answer is checked; the argument and assumptions are not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Use the first two Vieta sums.

</details>

<details>
<summary>Hint 2</summary>

Expand $(r_1+r_2+r_3)^2$ and isolate the pair products.

</details>

<details>
<summary>Worked solution</summary>

Therefore the requested sum is $2^2-2(-3)=10$.

1. Vieta gives $r_1+r_2+r_3=2$ and $r_1r_2+r_1r_3+r_2r_3=-3$.
2. The square of the first sum is $r_1^2+r_2^2+r_3^2+2(r_1r_2+r_1r_3+r_2r_3)$.
3. Therefore the requested sum is $2^2-2(-3)=10$.

</details>
