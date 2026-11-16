# Prove an alternating identity by cancellation

*Hard · [Original olympiad-style problems](index.md)*

For every nonnegative integer n, prove $\sum_{k=0}^n(-1)^k\binom nk\binom{2n-k}{n}=1$ by a signed finite counting argument.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

Distinguish n of a total of 2n labels, and count pairs consisting of an n-subset B and a subset A of distinguished labels outside B.

</details>

<details>
<summary>Hint 2</summary>

For fixed B, the signed sum over A cancels unless no distinguished label is outside B.

</details>

<details>
<summary>Model proof</summary>

Reverse the order of signed counting and identify the sole survivor.

1. For a fixed size k, choose A from the distinguished n labels and choose B as an n-subset avoiding A. Give the pair sign negative one to the size of A. This produces the summand.
2. Instead fix B first. The allowed A are all subsets of the distinguished labels not in B. Their signed sum is $(1-1)^r$, where r is the number of those missing labels.
3. This is zero unless r is zero. Since B has exactly n elements, r zero forces it to be the complete distinguished set, one possibility with signed sum one.
4. Thus the total is one. When n is zero the empty pair is the same unique survivor, so the edge case is included.

**Self-assessment rubric**

- Build a finite pair model with the exact binomial factors and signs.
- Sum over the same pairs in the other order.
- Prove all but one class cancels and identify that survivor.
- Retain the n=0 interpretation.

</details>
