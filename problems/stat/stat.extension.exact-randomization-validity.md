# Exact randomization validity

*Hard · [Statistics and probability](index.md)*

Under a sharp null, a uniform assignment is chosen from $M\ge1$ allowed assignments. For its observed statistic $T_{\mathrm{obs}}$, define $p=M^{-1}\#\{a:T(a)\ge T_{\mathrm{obs}}\}$. Prove $P(p\le\alpha)\le\alpha$ for every $\alpha\in[0,1]$, allowing ties.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

The sharp null fixes one statistic value for each allowed assignment; order those values from largest to smallest.

</details>

<details>
<summary>Hint 2</summary>

Within a tied block every assignment has the same inclusive tail count, equal to the block’s final position.

</details>

<details>
<summary>Model proof</summary>

Inclusive ranks are conservative because a tied block is counted in full.

1. Order the fixed values as $t_{(1)}\ge\cdots\ge t_{(M)}$, breaking ties arbitrarily only to label positions.
2. For position $r$, its inclusive tail count is the final position of its tied block, hence at least $r$. Therefore $p\le\alpha$ can hold only at positions $r\le\lfloor\alpha M\rfloor$.
3. At most $\lfloor\alpha M\rfloor$ of the $M$ equally likely assignments reject, so $P(p\le\alpha)\le\lfloor\alpha M\rfloor/M\le\alpha$. Ties can reduce the rejection count, not increase it.

**Self-assessment rubric**

- Explain why the reference statistics are fixed under the sharp null.
- Compare each inclusive tail count with its position in a descending ordering, retaining ties.
- Bound the number of rejecting assignments and convert it to the claimed probability inequality.

</details>
