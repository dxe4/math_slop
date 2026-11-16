# Evaluate a residue map only at a unit denominator

*Easy · [Abstract algebra problems](index.md)*

In the local ring Q\[x\]\_(x), the residue map to Q sends f/g to f(0)/g(0), where g(0) is nonzero. Find the residue of $(x^2+2)/(x+1)$.

```answer
{"answer":{"kind":"integer","expected":2,"checker_scope":"Exact requested localized invariant only; no local-to-global theorem is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

The denominator is allowed because its constant value is one.

</details>

<details>
<summary>Hint 2</summary>

Apply the given residue formula.

</details>

<details>
<summary>Worked solution</summary>

Localization at a point supports a well-defined scalar residue.

1. At zero the numerator has value two.
2. The denominator has value one and is therefore a local unit.
3. The residue is2/1=2.

</details>
