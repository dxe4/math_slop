# Construct a convergent subsequence with an actual increasing index map

*Hard · [Real analysis](index.md)*

Prove every bounded real sequence $(a_n)$ has a convergent subsequence. Use repeated interval bisection and completeness, and specify why the selected original indices can be chosen strictly increasing.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

At least one half of an interval containing infinitely many terms still contains infinitely many terms.

</details>

<details>
<summary>Hint 2</summary>

Infinite occurrence in every selected interval permits a new index beyond all earlier choices.

</details>

<details>
<summary>Model proof</summary>

Shrinking geometric localization must be paired with a valid subsequence selection.

1. Put all terms in a closed bounded interval I\_0. Bisect it and choose a closed half containing terms at infinitely many indices; at least one half does. Repeat to form nested closed intervals I\_k with lengths tending to zero and infinitely many term indices in each.
2. Completeness gives a unique common point L. Choose n\_1 with a\_(n\_1) in I\_1. Having chosen n\_(k-1), choose n\_k&gt;n\_(k-1) with a\_(n\_k) in I\_k, possible because infinitely many indices occur there.
3. Both a\_(n\_k) and L lie in I\_k, so their distance is at most its length and tends to zero. Hence these valid strictly increasing original indices define a subsequence converging to L.

**Self-assessment rubric**

- Maintain infinitely many original term indices in each chosen half.
- Construct a genuine subsequence rather than only one value per interval.
- Use completeness and interval lengths to obtain the limit.

</details>
