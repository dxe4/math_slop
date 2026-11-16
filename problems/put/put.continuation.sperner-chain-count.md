# Sperner chain count

*Hard · [Original Putnam-style training](index.md)*

Prove every antichain $\mathcal A$ of subsets of an $n$-element set has size at most $\binom n{\lfloor n/2\rfloor}$, and show equality is attainable.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Count maximal chains in the Boolean lattice.

</details>

<details>
<summary>Hint 2</summary>

Each chain contains at most one member of an antichain.

</details>

<details>
<summary>Model proof</summary>

Therefore $|\mathcal A|\le M$. The entire middle layer consists of incomparable equal-size sets and has size $M$, attaining equality.

1. There are $n!$ maximal chains. A fixed $k$-element subset lies in $k!(n-k)!$ of them, so counting chain–antichain incidences gives $\sum_{S\in\mathcal A}k_S!(n-k_S)!\le n!$.
2. Dividing by $n!$ yields $\sum_{S\in\mathcal A}1/\binom n{|S|}\le1$. Since each binomial coefficient is at most $M=\binom n{\lfloor n/2\rfloor}$, the left side is at least $|\mathcal A|/M$.
3. Therefore $|\mathcal A|\le M$. The entire middle layer consists of incomparable equal-size sets and has size $M$, attaining equality.

**Self-assessment rubric**

- Count maximal chains and chains through each k-set.
- Use antichain property to derive the LYM sum bound.
- Bound cardinality by the largest binomial layer and exhibit equality.

</details>
