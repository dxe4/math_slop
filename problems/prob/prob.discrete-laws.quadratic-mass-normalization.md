# Normalize a discrete mass law

*Easy · [Probability problems](index.md)*

A random variable has $P(X=k)=ck^2$ for $k=1,2,3$, and no other possible values. Find $c$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":14},"checker_scope":"Exact answer for the stated probability model only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

All probability masses must sum to one.

</details>

<details>
<summary>Hint 2</summary>

Add the squared support values before solving for the common factor.

</details>

<details>
<summary>Worked solution</summary>

Normalization uniquely determines the shared positive factor.

1. The total probability is $c(1^2+2^2+3^2)=14c$.
2. Setting this equal to one gives $14c=1$.
3. Therefore $c=1/14$, producing nonnegative masses that sum to one.

</details>
