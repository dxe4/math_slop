# Derive a greatest lower bound from the upper-bound axiom

*Hard · [Real analysis](index.md)*

Assume the real least-upper-bound property. For a nonempty real set A bounded below, prove that its infimum exists and equals $-\sup(-A)$, where -A={-a:a in A}.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Negation changes a lower bound into an upper bound.

</details>

<details>
<summary>Hint 2</summary>

Translate both the bound property and its greatestness, not only one inequality.

</details>

<details>
<summary>Model proof</summary>

Order reversal transfers real completeness from upper bounds to lower bounds.

1. The set -A is nonempty and bounded above because a lower bound l of A gives upper bound -l of -A. Let s=sup(-A).
2. For every a in A, -a&lt;=s and hence a&gt;=-s, so -s is a lower bound of A.
3. If t is any lower bound of A, then -t is an upper bound of -A, so s&lt;=-t and t&lt;=-s. Thus -s is the greatest lower bound.

**Self-assessment rubric**

- Verify the hypotheses of the upper-bound axiom for -A.
- Show the negated supremum bounds every a from below.
- Compare every other lower bound with that value.

</details>
