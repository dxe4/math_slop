# Average a supplied martingale identity

*Easy · [Probability problems](index.md)*

An integrable variable $M_1$ satisfies $E[M_1\mid\mathcal F_0]=M_0$ almost surely, where $M_0=4$ almost surely. Find $E[M_1]$.

```answer
{"answer":{"kind":"integer","expected":"4","checker_scope":"Checks the unconditional mean implied by the supplied one-step identity only."}}
```

<details>
<summary>Hint 1</summary>

Take expectations of both sides of the given conditional identity.

</details>

<details>
<summary>Hint 2</summary>

The tower property turns the expectation of a conditional expectation into the ordinary expectation.

</details>

<details>
<summary>Worked solution</summary>

Average the given conditional mean.

1. The conditional identity says $E[M_1\mid\mathcal F_0]=4$ almost surely.
2. Since $M_1$ is integrable, the tower property gives $E[M_1]=E[E[M_1\mid\mathcal F_0]]$.
3. The expectation of the constant four is four, so $E[M_1]=4$. Only the stated one-step identity is needed.

The tower property gives ordinary mean four.

</details>
