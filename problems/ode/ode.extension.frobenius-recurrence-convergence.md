# Promote a formal singular-point expansion to a genuine solution

*Hard · [Differential equations problems](index.md)*

For $t^2y''+ty'+(t-1)y=0$, prove the normalized Frobenius coefficients a\_0=1 and a\_n=-a\_(n-1)/(n(n+2)) give a series y=t\*sum a\_n\*t^n converging for every complex t and solving the equation. Derive a closed coefficient formula.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Factor the recurrence product into two factorials.

</details>

<details>
<summary>Hint 2</summary>

Use compact uniform convergence of the series and its derivatives before substituting.

</details>

<details>
<summary>Model proof</summary>

A factorial coefficient bound supplies the analytic justification missing from a formal recurrence.

1. Iterating the recurrence gives a\_n=(-1)^n/\[product\_(k=1)^n k\*(k+2)\]=2\*(-1)^n/\[n!\*(n+2)!\], including n=0.
2. For fixed t, the ratio of consecutive term magnitudes is \|t\|/((n+1)\*(n+3)), which tends to zero. On every compact disk the same bound is uniform, and the differentiated series also converge uniformly by their additional polynomial index factors.
3. Termwise differentiation is therefore valid. Substitution has lowest coefficient zero by the indicial root one and every later coefficient zero by the recurrence. Thus the entire function defined by the series solves the equation, with the asserted normalized leading term.

**Self-assessment rubric**

- Derive the exact factorial formula including its normalization.
- Justify convergence sufficient for termwise second differentiation.
- Use the recurrence to verify the actual analytic function, not only formal symbols.

</details>
