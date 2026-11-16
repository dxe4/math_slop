# Evaluate a supplied exponential-Markov parameter

*Medium · [Probability problems](index.md)*

A real variable has moment-generating function $E[e^{tX}]=\exp(2(e^t-1))$ for every real $t$. At the supplied choice $t=\log2$, exponential Markov gives $P(X\ge4)\le e^2/d$ for a positive integer $d$. Find $d$; no parameter optimisation is requested.

```answer
{"answer":{"kind":"integer","expected":"16","checker_scope":"Checks the denominator obtained by evaluating the specified parameter bound only; it does not grade optimisation or the exact tail probability."}}
```

<details>
<summary>Hint 1</summary>

For positive $t$, exponential Markov uses $e^{-4t}E[e^{tX}]$.

</details>

<details>
<summary>Hint 2</summary>

Substitute the specified logarithmic parameter, then write the negative threshold exponential as an integer reciprocal.

</details>

<details>
<summary>Worked solution</summary>

Evaluate the exponential-moment bound at the given parameter.

1. For $t=\log2>0$, monotonicity of exponentiation and Markov give $P(X\ge4)\le e^{-4t}\exp(2(e^t-1))$.
2. At this supplied value, $e^t=2$, so the moment factor is $\exp(2(2-1))=e^2$.
3. The threshold factor is $e^{-4\log2}=2^{-4}=1/16$. Thus the displayed bound is $e^2/16$ and the requested denominator is sixteen. The task evaluates a fixed parameter rather than proving its optimality.

The evaluated bound is $e^2/16$, so the requested denominator is sixteen.

</details>
