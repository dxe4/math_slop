# Pairwise independence does not suffice

*Medium · [Probability problems](index.md)*

Let $U,V$ be independent fair bits. Define $A=\{U=1\}$, $B=\{V=1\}$ and $C=\{U\ne V\}$. Prove that $A,B,C$ are pairwise independent but not mutually independent.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or graded objective evidence."}}
```

<details>
<summary>Hint 1</summary>

List the four equally likely values of $(U,V)$ and mark membership in each event.

</details>

<details>
<summary>Hint 2</summary>

Check all three pair intersections against marginal products, then check the three-event intersection separately.

</details>

<details>
<summary>Model proof</summary>

Examine the full four-outcome sample space.

1. The pairs $(0,0),(0,1),(1,0),(1,1)$ each have probability $1/4$. Event $A$ consists of the last two, $B$ of $(0,1),(1,1)$, and $C$ of $(0,1),(1,0)$, so all three marginal probabilities are $1/2$.
2. The intersections are $A\cap B=\{(1,1)\}$, $A\cap C=\{(1,0)\}$ and $B\cap C=\{(0,1)\}$. Each has probability $1/4=(1/2)(1/2)$, proving independence for each pair.
3. The triple intersection is empty because $U=V=1$ excludes $U\ne V$. Its probability zero differs from $P(A)P(B)P(C)=1/8$, so the factorisation required for mutual independence fails.

Each marginal is $1/2$ and each pair intersection has mass $1/4$, but the triple intersection is empty rather than having mass $1/8$.

**Self-assessment rubric**

- Identify the four equally likely outcomes and compute every event marginal.
- Check all three pair intersections, rather than one representative without justification.
- Show the triple intersection is empty and compare with the positive marginal product.

</details>
