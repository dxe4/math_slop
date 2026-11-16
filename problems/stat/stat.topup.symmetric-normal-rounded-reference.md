# Use a rounded normal reference with an explicit tolerance

*Medium · [Statistics and probability](index.md)*

For a standard normal Z, a supplied rounded entry is $\Phi(1.5)\approx0.9332$. Use symmetry to approximate P(\|Z\|&lt;=1.5). Give a decimal; the accepted absolute tolerance around the displayed-reference result is 0.0002. The rounded entry is not an exact normal probability.

```answer
{"answer":{"kind":"numeric_tolerance","expected":"0.8664","checker_scope":"Checks only the requested result under the explicitly stated finite model or convention; does not certify a modeling assumption, causal claim or open argument.","absolute_tolerance":"1/5000"}}
```

<details>
<summary>Hint 1</summary>

Symmetry gives Phi(-1.5)=1-Phi(1.5).

</details>

<details>
<summary>Hint 2</summary>

Subtract the lower cumulative probability from the upper one.

</details>

<details>
<summary>Worked solution</summary>

The symmetric central area is twice the positive cumulative area minus one.

1. The supplied rounded entry gives lower cumulative probability approximately $1-0.9332=0.0668$.
2. The central area is approximately $0.9332-0.0668=0.8664$.
3. This is an approximation from the displayed reference, with the stated absolute answer tolerance; it is not an exact symbolic normal integral.

</details>
