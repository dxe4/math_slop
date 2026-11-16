# Preserve both signs in a radical equation

*Medium · [Original olympiad-style problems](index.md)*

Find the real solution of $\sqrt{x+1}+\sqrt{x-1}=2$. Enter it as a rational number.

```answer
{"answer":{"kind":"rational","expected":{"numerator":5,"denominator":4},"checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

The domain is $x\ge1$. After the first squaring isolate the remaining radical.

</details>

<details>
<summary>Hint 2</summary>

The isolated radical must be nonnegative, so retain $x\le2$ before squaring again.

</details>

<details>
<summary>Worked solution</summary>

Track the domain through two reversible squarings.

1. On the domain, squaring gives $2x+2\sqrt{x^2-1}=4$, so $\sqrt{x^2-1}=2-x$ and $x\le2$.
2. Squaring that nonnegative equality gives $x^2-1=(2-x)^2$, hence $4x=5$.
3. At $x=5/4$, the original radicals are $3/2$ and $1/2$, whose sum is two. The derivation excludes every other candidate.

</details>
