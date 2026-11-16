# Recover least upper bounds from a bisection intersection principle

*Hard · [Real analysis](index.md)*

Assume the Archimedean property. Prove that the real least-upper-bound property is equivalent to this principle: every nested sequence of nonempty closed bounded intervals $[a_n,b_n]$ whose lengths tend to zero has exactly one common point.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

For the forward implication take the supremum of the left endpoints.

</details>

<details>
<summary>Hint 2</summary>

For the reverse implication bisect a bracket whose lower endpoint is not an upper bound of the target set but whose upper endpoint is.

</details>

<details>
<summary>Model proof</summary>

Bisection converts order completeness into a unique shrinking intersection and back.

1. Assume least upper bounds exist. Write the intervals \[a\_n,b\_n\]. Their left endpoints form a nonempty set bounded above by every b\_n. Its supremum s satisfies a\_n&lt;=s&lt;=b\_n for each n, giving a common point. Any two common points have distance at most b\_n-a\_n for every n, so shrinking lengths force equality.
2. Conversely let A be nonempty and bounded above. Choose a lower bracket endpoint l that is not an upper bound, for example a-1 with a in A, and an upper bound u. Bisect repeatedly: if the midpoint is an upper bound replace u by it; otherwise replace l by it. The intervals stay nested, their lengths halve, each upper endpoint is an upper bound, and each lower endpoint is not.
3. Let s be the unique common point. If some a in A exceeded s, sufficiently short intervals would have upper endpoint less than a, a contradiction. Thus s is an upper bound. If c&lt;s, sufficiently short intervals have lower endpoint greater than c; since that endpoint is not an upper bound, some a in A exceeds it and hence exceeds c. Thus no c&lt;s is an upper bound, proving s=sup A.

**Self-assessment rubric**

- Construct the common point from endpoint bounds and prove uniqueness.
- Maintain both distinct upper-bound invariants through bisection.
- Prove the limiting point is an upper bound and no smaller point is one.

</details>
