# Prove a bounded set has at most one center of symmetry

*Medium · [Geometry and trigonometry problems](index.md)*

Let $K$ be a nonempty bounded plane set. Prove it has at most one center of central symmetry. Use the fact that composing half-turns about $C_1,C_2$ gives translation by $2(C_2-C_1)$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only. No automatic verdict, graded evidence or checkpoint credit is awarded."}}
```

<details>
<summary>Hint 1</summary>

If both half-turns preserve $K$, their composition and all its positive iterates preserve $K$.

</details>

<details>
<summary>Hint 2</summary>

A nonzero translation produces an unbounded arithmetic sequence from any point of $K$.

</details>

<details>
<summary>Model proof</summary>

Use the supplied composition to contradict boundedness.

1. Suppose $C_1,C_2$ are both symmetry centers. The two half-turns map $K$ onto itself, so translation by $v=2(C_2-C_1)$ does as well.
2. Choose any $P\in K$. Iteration gives $P+nv\in K$ for every positive integer $n$.
3. If $v\ne0$, then $|P+nv|\ge n|v|-|P|\to\infty$, contrary to boundedness.
4. Thus $v=0$ and $C_1=C_2$. Nonemptiness supplies the point used in this argument.

**Self-assessment rubric**

- Use the stated composition to obtain an invariant translation.
- Show a nonzero translation creates an unbounded orbit inside the set.
- Use both nonemptiness and boundedness to conclude uniqueness.

</details>
