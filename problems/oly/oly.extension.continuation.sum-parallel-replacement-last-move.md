# An impossible endpoint detected by the last move

*Medium · [Original olympiad-style problems](index.md)*

A list contains $n\ge2$ positive real numbers. A move replaces two chosen entries $a,b$ by $a+b$ and $ab/(a+b)$. Prove that after any nonempty finite sequence of moves the entries cannot all be equal. Explain why preservation of the total product alone would not prove this.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

Compare the two outputs of the final move.

</details>

<details>
<summary>Hint 2</summary>

Their ratio is $(a+b)^2/(ab)\ge4$. A product invariant supplies only one equation, allowing many equal-product lists.

</details>

<details>
<summary>Model proof</summary>

The final operation leaves a visible inequality that an equal-entry endpoint cannot hide.

1. For positive $a,b$, the quotient of the larger output by the smaller is $(a+b)^2/(ab)$. Since $(a-b)^2\ge0$, this is at least $4$, so the two outputs are strictly unequal.
2. In a nonempty finite sequence, examine its last move. Its two unequal outputs remain in the final list, because no later move exists. Hence the final list is not constant.
3. The product of the two outputs is $ab$, so the full product is invariant. But for any positive product $K$, the constant list with every entry $K^{1/n}$ has that same product. Product preservation cannot by itself rule out that endpoint; the last-move inequality does.

**Self-assessment rubric**

- Compute the output ratio and its lower bound four.
- Apply the strict inequality to the actual last operation.
- Explain why an equal list can have the same preserved product.

</details>
