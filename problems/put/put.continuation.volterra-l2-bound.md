# Volterra l2 bound

*Hard · [Original Putnam-style training](index.md)*

For $f\in L^2[0,1]$ and $F(x)=\int_0^x f(t)dt$, prove $\int_0^1F(x)^2dx\le\frac12\int_0^1 f(t)^2dt$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Apply Cauchy–Schwarz on each interval $[0,x]$.

</details>

<details>
<summary>Hint 2</summary>

Reverse the order in the resulting nonnegative double integral.

</details>

<details>
<summary>Model proof</summary>

Because $0\le1-t^2\le1$, this is at most $\frac12\int_0^1f(t)^2dt$, as required.

1. For each $x$, Cauchy–Schwarz gives $|F(x)|^2\le x\int_0^x f(t)^2dt$. The primitive exists since $L^2[0,1]\subset L^1[0,1]$.
2. Integrating and using Tonelli yields $\int_0^1F(x)^2dx\le\int_0^1f(t)^2(\int_t^1x\,dx)dt=\frac12\int_0^1(1-t^2)f(t)^2dt$.
3. Because $0\le1-t^2\le1$, this is at most $\frac12\int_0^1f(t)^2dt$, as required.

**Self-assessment rubric**

- Apply Cauchy–Schwarz on \[0,x\] under the L² assumption.
- Reverse the nonnegative integral to obtain the weight (1−t²)/2.
- Bound that weight by 1/2 and state the L² result.

</details>
