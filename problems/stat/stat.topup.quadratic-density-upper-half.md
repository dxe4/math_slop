# Integrate a normalized nonlinear density

*Medium · [Statistics and probability](index.md)*

A continuous variable has density $f(x)=3x^2$ on \[0,1\] and zero elsewhere. Find P(X&gt;=1/2). You may use the antiderivative x^3.

```answer
{"answer":{"kind":"rational","expected":{"numerator":7,"denominator":8},"checker_scope":"Checks only the requested result under the explicitly stated finite model or convention; does not certify a modeling assumption, causal claim or open argument."}}
```

<details>
<summary>Hint 1</summary>

A probability is an area under the density over the event interval.

</details>

<details>
<summary>Hint 2</summary>

Evaluate the antiderivative at one and one half.

</details>

<details>
<summary>Worked solution</summary>

The normalized density assigns event probability by integration.

1. The density is nonnegative and its total integral is one.
2. The event probability is $[x^3]_{1/2}^{1}=1-1/8$.
3. Thus the probability is seven eighths; including or excluding the single endpoint has no effect.

</details>
