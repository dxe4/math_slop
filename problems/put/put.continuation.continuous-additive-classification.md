# Continuous additive classification

*Hard · [Original Putnam-style training](index.md)*

If $f:\mathbb R\to\mathbb R$ is additive and continuous at zero, prove $f(x)=cx$ for every real $x$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

First determine $f$ on integers and rationals.

</details>

<details>
<summary>Hint 2</summary>

Additivity moves continuity at zero to every point, permitting rational approximation.

</details>

<details>
<summary>Model proof</summary>

Choose rationals $q_n\to x$. Then $f(x)=\lim f(q_n)=\lim q_nf(1)=xf(1)$, with $c=f(1)$.

1. Additivity gives $f(0)=0$, $f(-x)=-f(x)$, and $f(q)=qf(1)$ for every rational $q$ by repeated sums and division by positive integers.
2. For $h\to0$, $f(x+h)-f(x)=f(h)\to0$, so $f$ is continuous everywhere.
3. Choose rationals $q_n\to x$. Then $f(x)=\lim f(q_n)=\lim q_nf(1)=xf(1)$, with $c=f(1)$.

**Self-assessment rubric**

- Derive additive values on integers and rationals.
- Show continuity at zero implies continuity everywhere.
- Use rational density to obtain f(x)=xf(1) for every real x.

</details>
