# Convert alternating binomial coefficients to an integral

*Hard · [Original Putnam-style training](index.md)*

Evaluate $\sum_{k=0}^{20}(-1)^k\binom{20}{k}/(k+1)$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":21},"checker_scope":"Exact requested bounded value only; a correct numerical answer does not certify the full university-level argument or a contest result."}}
```

<details>
<summary>Hint 1</summary>

Each reciprocal factor is the integral of a monomial on the unit interval.

</details>

<details>
<summary>Hint 2</summary>

The finite binomial sum then becomes a single power of one minus the integration variable.

</details>

<details>
<summary>Worked solution</summary>

Finite integration converts the alternating sum into a positive beta-type integral.

1. Use $1/(k+1)=\int_0^1x^k\,dx$. Interchanging a finite sum and integral requires no convergence assumption.
2. The binomial theorem gives the sum as $\int_0^1(1-x)^{20}\,dx$.
3. Evaluation gives $1/21$.

</details>
