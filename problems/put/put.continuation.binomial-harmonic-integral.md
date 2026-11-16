# Binomial harmonic integral

*Hard · [Original Putnam-style training](index.md)*

For every integer $n\ge1$, prove $\sum_{k=1}^{n}(-1)^{k-1}\binom nk/k=H_n$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Represent $1/k$ by $\int_0^1x^{k-1}dx$.

</details>

<details>
<summary>Hint 2</summary>

Simplify the finite binomial sum inside the integral before integrating.

</details>

<details>
<summary>Model proof</summary>

Integrating this finite geometric sum gives $\sum_{j=0}^{n-1}1/(j+1)=H_n$.

1. Termwise integration of the finite sum gives $\int_0^1[1-(1-x)^n]/x\,dx$; its apparent value at $x=0$ is removable.
2. With $y=1-x$, the integrand becomes $(1-y^n)/(1-y)=1+y+\cdots+y^{n-1}$.
3. Integrating this finite geometric sum gives $\sum_{j=0}^{n-1}1/(j+1)=H_n$.

**Self-assessment rubric**

- Convert each 1/k into a unit-interval integral and sum finitely.
- Use the binomial theorem and the removable quotient at zero.
- Integrate the geometric polynomial to recover H\_n.

</details>
