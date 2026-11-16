# Construct an affine action separating two transitivity notions

*Hard · [Abstract algebra problems](index.md)*

On $\mathbb F_7$, consider maps x-&gt;a x+b with a in {1,2,4} and b arbitrary. Prove they form a group transitive on unordered two-element subsets but not on ordered pairs of distinct points.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

The permitted multipliers form a subgroup of the nonzero field elements.

</details>

<details>
<summary>Hint 2</summary>

Unordered differences may change sign; ordered differences may not.

</details>

<details>
<summary>Model proof</summary>

An affine group can merge both signs of a difference without realizing every ordered difference.

1. The multiplier set {1,2,4} is closed under products and inverses modulo seven, so the affine maps form a group of order twenty-one.
2. Given an unordered pair, translation moves one endpoint to zero. Its nonzero difference is determined up to sign, and the sets plus or minus {1,2,4} cover all six nonzero field elements. Scaling and possibly choosing the other endpoint therefore send every unordered pair to {0,1}.
3. For ordered pairs, the difference of the target pair is the original difference multiplied only by {1,2,4}; square and nonsquare differences stay in two different classes. Thus the action is not transitive on ordered distinct pairs.

**Self-assessment rubric**

- Check the allowed affine maps form the stated finite group.
- Use translation, allowed scaling and sign freedom to prove two-homogeneity.
- Exhibit the difference-class invariant that blocks two-transitivity.

</details>
