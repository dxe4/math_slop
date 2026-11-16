# Reflection pairing positive

*Medium · [Original Putnam-style training](index.md)*

Let $f:[0,1]\to(0,\infty)$ be continuous. Prove $\int_0^1 f(x)/(f(x)+f(1-x))\,dx=1/2$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Try the substitution $u=1-x$ in a second copy of the integral.

</details>

<details>
<summary>Hint 2</summary>

Compare the two resulting numerators over their common denominator.

</details>

<details>
<summary>Model proof</summary>

Adding the two expressions yields $2I=\int_0^1 1\,du=1$, hence $I=1/2$. The argument does not require $f$ itself to be symmetric.

1. The denominator is strictly positive and continuous, so the integrand is defined and integrable on $[0,1]$. Write its integral as $I$.
2. Under $u=1-x$, reversing the bounds gives $I=\int_0^1 f(1-u)/(f(u)+f(1-u))\,du$. The reflected denominator is the same.
3. Adding the two expressions yields $2I=\int_0^1 1\,du=1$, hence $I=1/2$. The argument does not require $f$ itself to be symmetric.

**Self-assessment rubric**

- Explain why the positive denominator defines an integrable function on the closed interval.
- Carry out the x↦1−x substitution with the correct limits and common denominator.
- Add reflected integrands to one and deduce the half-integral.

</details>
