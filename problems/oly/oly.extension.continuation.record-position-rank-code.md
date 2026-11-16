# Count prescribed records through a rank code

*Hard · [Original olympiad-style problems](index.md)*

How many permutations of $1,\ldots,8$ have left-to-right maxima exactly at positions one, four and seven? A record is larger than every earlier entry.

```answer
{"answer":{"kind":"integer","expected":"280","checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

Encode each entry by its rank among the entries seen up to that position.

</details>

<details>
<summary>Hint 2</summary>

This rank code is bijective: reconstruct backward by selecting the prescribed-ranked remaining label.

</details>

<details>
<summary>Worked solution</summary>

Use a prefix-rank bijection that makes record positions independent choices.

1. For position i, let its rank among its prefix be $r_i\in\{1,\ldots,i\}$. Such rank sequences correspond bijectively to permutations: working backward, choose the $r_i$th smallest remaining label and remove it.
2. A record occurs exactly when $r_i=i$. Thus the three prescribed positions have one rank choice each.
3. At every other position i there are i minus one choices. For positions two, three, five, six and eight these are $1,2,4,5,7$.
4. The independent rank choices give $1\cdot2\cdot4\cdot5\cdot7=280$ permutations. The bijection proves this is not an unjustified probabilistic independence assumption.

</details>
