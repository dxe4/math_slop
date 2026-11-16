# Exhibit an integral element missing from a quadratic order

*Hard · [Abstract algebra problems](index.md)*

Show the domain $\mathbb Z[\sqrt5]$ is not integrally closed in its fraction field. Give one explicit element of that fraction field satisfying a monic polynomial over the domain but not belonging to the domain.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Try an element with a half-integer constant and square-root coefficient.

</details>

<details>
<summary>Hint 2</summary>

A monic polynomial with coefficients in Z also has coefficients in the given domain.

</details>

<details>
<summary>Model proof</summary>

An order can omit algebraic integers even when its displayed generator is integral.

1. Take beta=(1+sqrt(5))/2, which lies in the fraction field Q(sqrt(5)).
2. Direct calculation gives beta^2-beta-1=0, a monic polynomial with integer coefficients, so beta is integral over the given domain.
3. If beta=m+n sqrt(5) with integers m,n, rational independence of 1,sqrt(5) would force m=n=1/2, impossible. Thus beta is missing and the domain is not integrally closed.

**Self-assessment rubric**

- Place the proposed witness in the actual fraction field.
- Verify its monic polynomial over the original domain.
- Use coefficient independence to prove it is not already in the domain.

</details>
