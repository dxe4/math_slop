# Optimize a function of a bounded product

*Hard · [Original olympiad-style problems](index.md)*

For $0\leq x\leq1$, find the maximum of $x(1-x)[1+x(1-x)]$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":5,"denominator":16},"checker_scope":"Exact short answer only; the complete argument remains a worked solution, not an automatically certified proof or contest result."}}
```

<details>
<summary>Hint 1</summary>

Use a single variable for the repeated product.

</details>

<details>
<summary>Hint 2</summary>

Bound that product by completing a square and check monotonicity of the resulting function.

</details>

<details>
<summary>Worked solution</summary>

The repeated product lies in a short interval on which the outer expression increases.

1. Let t=x(1-x)=1/4-(x-1/2)^2. Thus $0\leq t\leq1/4$.
2. The function t(1+t) is increasing for nonnegative t: its derivative is 1+2t, or its difference at two ordered t-values is positive.
3. The maximum is $(1/4)(5/4)=5/16$, attained at x=1/2.

</details>
