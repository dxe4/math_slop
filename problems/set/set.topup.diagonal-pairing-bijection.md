# Prove an explicit pairing of nonnegative integers

*Hard · [Set theory](index.md)*

On $\mathbb N_0\times\mathbb N_0$ define $\pi(a,b)=(a+b)(a+b+1)/2+b$. Prove this is a bijection onto N\_0.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Fix the diagonal sum s=a+b.

</details>

<details>
<summary>Hint 2</summary>

The outputs on successive diagonals form consecutive integer intervals; use the interval to recover both coordinates.

</details>

<details>
<summary>Model proof</summary>

Diagonal blocks establish an exact bijection without an informal infinite grid picture.

1. Write $T_s=s(s+1)/2$. On diagonal a+b=s, b runs from zero to s, and the outputs are exactly the integers from T\_s through T\_s+s.
2. The next block begins at $T_{s+1}=T_s+s+1$. Thus the blocks are disjoint, consecutive, start at zero and extend without bound.
3. Every n belongs to a unique block. Within it recover b=n-T\_s and a=s-b, both nonnegative. This yields exactly one preimage for every n.

**Self-assessment rubric**

- Compute the whole output interval on a fixed diagonal.
- Show successive intervals neither overlap nor leave gaps and reach arbitrarily high values.
- Recover a unique admissible pair from every output.

</details>
