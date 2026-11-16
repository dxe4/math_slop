# Conjugation relabels a cycle

*Medium · [Abstract algebra problems](index.md)*

Let $\sigma=(a_1\ a_2\ \cdots\ a_k)$ be a cycle and $\tau$ any permutation of the same finite set. Prove $\tau\sigma\tau^{-1}=(\tau(a_1)\ \tau(a_2)\ \cdots\ \tau(a_k))$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic correctness verdict, demonstration or checkpoint."}}
```

<details>
<summary>Hint 1</summary>

Compare the two permutations on the images of the listed cycle entries.

</details>

<details>
<summary>Hint 2</summary>

Also check a point outside that image; agreeing only on the displayed cycle is not enough.

</details>

<details>
<summary>Model proof</summary>

Compute the conjugate as a function on every type of point.

1. For $j<k$, the conjugate sends $\tau(a_j)$ first to $a_j$, then to $a_{j+1}$, then to $\tau(a_{j+1})$.
2. The same computation sends $\tau(a_k)$ to $\tau(a_1)$, completing the relabelled cycle.
3. If $x$ lies outside $\{\tau(a_1),\ldots,\tau(a_k)\}$, then $\tau^{-1}(x)$ is fixed by $\sigma$, so the conjugate fixes $x$. Thus the two permutations agree everywhere.

**Self-assessment rubric**

- Compute the action on successive relabelled cycle entries.
- Check the last entry returns to the first.
- Show every point outside the relabelled cycle is fixed.

</details>
