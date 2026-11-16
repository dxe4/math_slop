# Prove a denominator budget is minimal

*Hard · [Foundations bridge](index.md)*

Find the least positive integer B for which a reduced rational p/q exists with $1/3<p/q<1/2$ and $1\leq q\leq B$. Give a witness and prove that every smaller budget fails.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict, checkpoint evidence or required automatic objective slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

A successful fraction provides only an upper bound for the least budget.

</details>

<details>
<summary>Hint 2</summary>

Inspect the possible integer numerators for each smaller positive denominator, keeping the inequalities strict.

</details>

<details>
<summary>Model proof</summary>

A witness and exhaustive exclusion of all smaller denominators establish minimality.

1. The reduced fraction $2/5$ lies strictly between one-third and one-half, so B=5 is possible.
2. For q=1,2,3,4 the strict numerator ranges are respectively $(1/3,1/2)$, $(2/3,1)$, $(1,3/2)$ and $(4/3,2)$. None contains an integer.
3. Thus no denominator below five works, and the least budget is B=5.

**Self-assessment rubric**

- Give a reduced admissible fraction and its denominator.
- Keep endpoints excluded when deriving numerator ranges.
- Exclude every smaller positive denominator rather than a few selected fractions.

</details>
