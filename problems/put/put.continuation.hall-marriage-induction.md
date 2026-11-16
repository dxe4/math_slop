# Hall marriage induction

*Hard · [Original Putnam-style training](index.md)*

For a finite bipartite graph with left part $L$, prove Hall’s condition $|N(S)|\ge|S|$ for every $S\subseteq L$ implies a matching covering all vertices of $L$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Induct on $|L|$, splitting according to whether a proper nonempty subset is tight.

</details>

<details>
<summary>Hint 2</summary>

If no tight proper set exists, match one chosen left vertex first and apply induction to the remainder.

</details>

<details>
<summary>Model proof</summary>

Induction matches the reduced graph; add edge $xy$. The empty and one-vertex cases start the induction, proving sufficiency.

1. Induct on $|L|$. If some nonempty proper $S\subset L$ is tight, $|N(S)|=|S|$, Hall holds on the induced graph $S\cup N(S)$. It also holds for the remaining left vertices after deleting $N(S)$: for any $T\subseteq L\setminus S$, Hall on $S\cup T$ gives $|N(T)\setminus N(S)|\ge|T|$. Inductively match both pieces and combine.
2. If no proper nonempty set is tight, every such set has at least one extra neighbor. Choose $x\in L$ and a neighbor $y$; after removing $x,y$, any remaining $T$ loses at most one neighbor, so $|N_{new}(T)|\ge|N(T)|-1\ge|T|$.
3. Induction matches the reduced graph; add edge $xy$. The empty and one-vertex cases start the induction, proving sufficiency.

**Self-assessment rubric**

- For a tight proper subset, verify Hall on both induced matching subproblems.
- When no tight subset exists, delete one matched edge and preserve Hall.
- Combine the inductive matchings or add the selected edge.

</details>
