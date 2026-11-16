# Separate a two-cycle from a longer cycle

*Hard · [Combinatorics](index.md)*

Let $D_n$ count permutations of $\{1,\ldots,n\}$ with no fixed points, with $D_0=1$. Prove $D_n=(n-1)(D_{n-1}+D_{n-2})$ for $n\ge2$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic correctness verdict, demonstration or checkpoint."}}
```

<details>
<summary>Hint 1</summary>

Fix the image of the first element and split according to whether those two elements form a two-cycle.

</details>

<details>
<summary>Hint 2</summary>

In the other case, delete the first element from its cycle by reconnecting its predecessor to its successor; justify the inverse operation.

</details>

<details>
<summary>Model proof</summary>

For each possible image of the first element, removing its cycle position yields two distinct smaller derangement classes.

1. In a derangement, the image of $1$ is some $j\ne1$, with $n-1$ choices. Fix this $j$.
2. If $j$ maps to $1$, remove the two-cycle $(1\ j)$. The remaining permutation is any derangement of the other $n-2$ elements, giving $D_{n-2}$ cases.
3. Otherwise let $k$ be the predecessor of $1$ in its cycle. Then $k\ne j$. Delete $1$ and change the arrow $k\mapsto1$ into $k\mapsto j$.
4. The resulting permutation on the other $n-1$ elements has no fixed point: the only altered image is that of $k$, and $k\ne j$.
5. Conversely, in any derangement of those $n-1$ elements, the predecessor $k$ of $j$ is not $j$. Insert $1$ between $k$ and $j$ to recover exactly one permutation in the second case. Thus this case contributes $D_{n-1}$.
6. The two cases are disjoint, and each fixed $j$ gives their sum. Multiplying by $n-1$ proves the recurrence.

**Self-assessment rubric**

- Fix and count the possible images of the first element.
- Bijection the two-cycle case with derangements on the remaining elements.
- Delete the first element without introducing a fixed point in the other case.
- Construct the inverse insertion and justify its uniqueness.
- Combine the disjoint cases and the image choices correctly.

</details>
