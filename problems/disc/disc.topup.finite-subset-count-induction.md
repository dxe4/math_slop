# Count subsets by removing one element

*Medium · [Discrete mathematics](index.md)*

Prove by induction that a finite set of n elements has exactly $2^n$ subsets, including the empty set, for every integer n&gt;=0.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required objective slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

The zero-element set is the correct base.

</details>

<details>
<summary>Hint 2</summary>

For the successor choose one element and split subsets by whether they contain it.

</details>

<details>
<summary>Model proof</summary>

The successor subsets come in two disjoint copies of the smaller power set.

1. The empty set has one subset, itself, agreeing with 2^0.
2. Assume every k-element set has 2^k subsets. From a (k+1)-element set remove one chosen element a.
3. Subsets not containing a are exactly the subsets of the remaining k elements; adjoining a gives a bijection to the subsets that do contain it. Each class has 2^k members.
4. The disjoint total is $2^k+2^k=2^{k+1}$, completing induction.

**Self-assessment rubric**

- Count the subsets of the empty set correctly.
- Give the contain/not-contain partition and its bijection.
- Apply the hypothesis only to the smaller set and combine the two classes.

</details>
