# Justify an initial-value generating-function identity formally

*Hard · [Combinatorics](index.md)*

Let real A,B define $a_0=A$, a1=B and a\_n=a\_(n-1)+a\_(n-2) for n&gt;=2. Prove coefficientwise that (1-x-x^2)F(x)=A+(B-A)x for F=sum a\_n x^n. Explain why analytic convergence is unnecessary and why division by the denominator is legitimate formally.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Compare constant and linear coefficients separately from all higher ones.

</details>

<details>
<summary>Hint 2</summary>

A formal power series with constant coefficient one has a unique formal multiplicative inverse.

</details>

<details>
<summary>Model proof</summary>

Formal coefficient identities encode recurrences without evaluating the series at a numerical point.

1. The constant coefficient on the left is a\_0=A, and its linear coefficient is a\_1-a\_0=B-A.
2. For n&gt;=2 its coefficient is a\_n-a\_(n-1)-a\_(n-2)=0 by the recurrence, proving the identity at every index.
3. These operations involve finitely many terms per coefficient, so no numerical convergence is needed. The denominator has constant term one; its inverse coefficients can be solved successively and uniquely, making the formal quotient well-defined.

**Self-assessment rubric**

- Treat the constant and linear coefficients with their distinct initial values.
- Use the recurrence to make each higher coefficient zero.
- Explain coefficientwise finiteness and the invertibility of a constant-one denominator.

</details>
