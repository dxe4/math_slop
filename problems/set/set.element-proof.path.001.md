# Begin with the correct arbitrary object

*Medium · [Set theory](index.md)*

For arbitrary sets A and B, which argument correctly proves $A\cap B\subseteq A$? Select the mathematically correct statement from the four alternatives.

**Options**

1. Take $x\in A$; this already proves $A\cap B\subseteq A$.
2. Take arbitrary $x\in A\cap B$; then $x\in A$ by the definition of intersection.
3. Check the inclusion for the single element $x=2$ and stop.
4. Take arbitrary $x\in B$; then $x\in A$ without any further assumption.

```answer
{"answer":{"kind":"multiple_choice","expected":"take_arbitrary_xab_t","checker_scope":"Checks the selected mathematical statement among four authored alternatives under the stated hypotheses; does not assess a freely written proof."},"options":["take_xa_this_already","take_arbitrary_xab_t","check_the_inclusion","take_arbitrary_xb_th"]}
```

<details>
<summary>Hint 1</summary>

To prove a subset claim, begin with an arbitrary member of the left-hand set.

</details>

<details>
<summary>Hint 2</summary>

Unpack what membership in an intersection means.

</details>

<details>
<summary>Worked solution</summary>

An arbitrary-element argument applies to every possible member of the proposed subset.

1. Take an arbitrary $x\in A\cap B$. The intersection definition gives both $x\in A$ and $x\in B$.
2. In particular $x\in A$, which proves the inclusion. A sample element is not enough, and starting with $x\in A$ proves the wrong direction. Select the statement “Take arbitrary $x\in A\cap B$; then $x\in A$ by the definition of intersection.”.

</details>
