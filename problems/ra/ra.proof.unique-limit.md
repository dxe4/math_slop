# A sequence has at most one limit

*Medium · [Real analysis](index.md)*

Prove directly from the definition that if a real sequence $(a_n)$ converges to both $L$ and $M$, then $L=M$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic correctness verdict, demonstration or checkpoint."}}
```

<details>
<summary>Hint 1</summary>

Suppose the two proposed limits have a positive distance.

</details>

<details>
<summary>Hint 2</summary>

Use a tolerance smaller than half that distance, and make both tail estimates hold at the same index.

</details>

<details>
<summary>Model proof</summary>

The triangle inequality makes two distinct limits incompatible with a common tail.

1. Assume $L\ne M$ and put $d=|L-M|>0$. Use tolerance $d/3$ in both convergence definitions.
2. For all sufficiently large $n$, both $|a_n-L|<d/3$ and $|a_n-M|<d/3$ hold.
3. Then $d=|L-M|\le|L-a_n|+|a_n-M|<2d/3$, a contradiction. Thus $L=M$.

**Self-assessment rubric**

- Introduce a positive separation under the assumption of distinct limits.
- Choose a tolerance and one tail where both estimates hold.
- Use the triangle inequality to obtain a strict contradiction.

</details>
