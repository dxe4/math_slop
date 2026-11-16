# Frullani exponential difference

*Hard · [Original Putnam-style training](index.md)*

For $0<a<b$, prove $\int_0^\infty(e^{-ax}-e^{-bx})/x\,dx=\log(b/a)$, including convergence at $x=0$ and infinity.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Express the numerator divided by $x$ as an integral over a parameter $t$.

</details>

<details>
<summary>Hint 2</summary>

Use Tonelli on the nonnegative two-variable integrand before integrating in $x$.

</details>

<details>
<summary>Model proof</summary>

The inner $x$ integral is $1/t$ for $t>0$, so the result is $\int_a^b dt/t=\log b-\log a=\log(b/a)$.

1. For $x>0$, $\int_a^b e^{-tx}dt=(e^{-ax}-e^{-bx})/x\ge0$. Near zero the quotient tends to $b-a$, and at infinity it is bounded by $e^{-ax}/x$, so the improper integral converges.
2. Tonelli applies to $e^{-tx}\ge0$ on $[a,b]\times[0,\infty)$ and gives $\int_0^\infty\int_a^b e^{-tx}dt\,dx=\int_a^b\int_0^\infty e^{-tx}dx\,dt$.
3. The inner $x$ integral is $1/t$ for $t>0$, so the result is $\int_a^b dt/t=\log b-\log a=\log(b/a)$.

**Self-assessment rubric**

- Justify behavior at zero and infinity for 0&lt;a&lt;b.
- Represent the quotient by the nonnegative parameter integral and exchange integrations using Tonelli.
- Evaluate the resulting reciprocal-parameter integral as log(b/a).

</details>
