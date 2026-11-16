# Verify a finite nested De Morgan equivalence

*Medium · [Discrete mathematics](index.md)*

For Boolean variables p,q,r, how many truth assignments make $\neg[p\lor(q\land r)]$ differ from $\neg p\land(\neg q\lor\neg r)$?

```answer
{"answer":{"kind":"integer","expected":"0","checker_scope":"Exact finite truth-assignment count only; not a verdict on arbitrary logical arguments or a new checkpoint objective."}}
```

<details>
<summary>Hint 1</summary>

First negate the outer disjunction.

</details>

<details>
<summary>Hint 2</summary>

Then negate the remaining conjunction inside the resulting expression.

</details>

<details>
<summary>Worked solution</summary>

Two De Morgan transformations show the formulas agree on the whole finite truth domain.

1. The first formula equals $\neg p\land\neg(q\land r)$.
2. The inner negation equals $\neg q\lor\neg r$, yielding precisely the second formula.
3. They agree on all eight assignments, so the disagreement count is $0$.

</details>
