# Count discontinuities by disjoint vertical jump intervals

*Hard · [Real analysis](index.md)*

Let f:\[a,b\] to R be nondecreasing, with a&lt;b. Prove f has at most countably many discontinuities in $(a,b)$. Your argument must account for the value f(c), not only its one-sided limits.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Use supremum and infimum to obtain the one-sided limits at an interior point.

</details>

<details>
<summary>Hint 2</summary>

Assign a different rational number to each nonempty vertical jump interval.

</details>

<details>
<summary>Model proof</summary>

Monotonicity orders disjoint jump ranges and confines the actual point value between its sides.

1. For each c in (a,b), the finite one-sided limits are f(c-)=sup\_(x&lt;c) f(x) and f(c+)=inf\_(x&gt;c) f(x). Monotonicity gives f(c-)&lt;=f(c)&lt;=f(c+). Thus f is continuous at c exactly when the two one-sided values coincide; a discontinuity has positive jump f(c+)-f(c-).
2. For c&lt;d, monotonicity implies f(c+)&lt;=f(d-). Therefore the open vertical intervals (f(c-),f(c+)) belonging to different discontinuities are pairwise disjoint.
3. Enumerate the rationals and label each positive jump by the first rational lying inside its interval. Density supplies a label and disjointness makes labels distinct, so the discontinuity set injects into a countable set.

**Self-assessment rubric**

- Derive both one-sided limits and trap the actual point value.
- Prove positive jump intervals for different points are disjoint.
- Construct an injective rational labeling rather than merely choosing unspecified labels.

</details>
