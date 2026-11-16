# Log product basel series

*Hard · [Original Putnam-style training](index.md)*

Prove $\int_0^1\log x\,\log(1-x)\,dx=2-\sum_{n=1}^\infty1/n^2$, without assuming a numerical value for the square-reciprocal series.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Expand $-\log(1-x)$ as a nonnegative power series on $0<x<1$.

</details>

<details>
<summary>Hint 2</summary>

Integrate $x^n(-\log x)$ and telescope a partial fraction.

</details>

<details>
<summary>Model proof</summary>

The identity $1/[n(n+1)^2]=1/n-1/(n+1)-1/(n+1)^2$ makes partial sums tend to $1-(\sum_{k=2}^\infty1/k^2)=2-\sum_{k=1}^\infty1/k^2$.

1. For $0<x<1$, $-\log(1-x)=\sum_{n=1}^\infty x^n/n$, and $-\log x\ge0$. Tonelli gives the integral as $\sum_{n=1}^\infty n^{-1}\int_0^1x^n(-\log x)dx$.
2. Integration by parts gives $\int_0^1x^n(-\log x)dx=1/(n+1)^2$, so the value is $\sum_{n=1}^\infty1/[n(n+1)^2]$.
3. The identity $1/[n(n+1)^2]=1/n-1/(n+1)-1/(n+1)^2$ makes partial sums tend to $1-(\sum_{k=2}^\infty1/k^2)=2-\sum_{k=1}^\infty1/k^2$.

**Self-assessment rubric**

- Expand −log(1−x) and justify exchanging sum and integral by nonnegative terms.
- Evaluate the x^n(−log x) moment with its endpoint limit.
- Decompose the resulting summand and identify 2−Σ1/n².

</details>
