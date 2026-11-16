# Recover an unknown positive observation from sample spread

*Hard · [Statistics and probability](index.md)*

The sample $0,0,0,a$ has a&gt;0 and sample standard deviation $2$, defined using divisor n-1. Find a.

```answer
{"answer":{"kind":"integer","expected":"4","checker_scope":"Checks only the requested result under the explicitly stated finite model or convention; does not certify a modeling assumption, causal claim or open argument."}}
```

<details>
<summary>Hint 1</summary>

Express the mean and all four deviations in terms of a.

</details>

<details>
<summary>Hint 2</summary>

Use positivity when taking the square root.

</details>

<details>
<summary>Worked solution</summary>

The squared deviations simplify before the variance equation is solved.

1. The mean is $a/4$. The squared-deviation sum is $3a^2/16+9a^2/16=3a^2/4$.
2. Dividing by three gives sample variance $a^2/4$ and, since a is positive, standard deviation $a/2$.
3. The equation $a/2=2$ yields $a=4$.

</details>
