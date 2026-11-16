# Choose your own radius at a square-root endpoint

*Medium · [Real analysis](index.md)*

For $f(x)=\sqrt{x}$ on $D=[0,\infty )$, consider continuity at $0$ with $\varepsilon =1/3$. Give any positive rational δ such that every $x\in D$ with \|x−0\|&lt;δ satisfies \|$\sqrt{x}-0$\|&lt;$1/3$. Enter δ as the exact rational witness. You may choose a conservative radius; the task does not require the largest one. In your optional explanation, justify all permitted x, and explain how you would refute a radius that is too large.

```answer
{"answer":{"kind":"rational_interval_witness_with_open_reasoning","expected_constraints":{"minimum_exclusive":"0","maximum_inclusive":"1/9"},"checker_scope":"Checks exact membership in the mathematically derived rational-witness interval for this one fixed-tolerance task. The explanation is an unassessed draft. This does not verify a proof of continuity or uniform continuity for every positive tolerance."}}
```

<details>
<summary>Hint 1</summary>

For a nonnegative input, compare $\sqrt{x}<1/3$ with the corresponding inequality for x.

</details>

<details>
<summary>Hint 2</summary>

Use the strict input inequality carefully: the boundary output error can equal ε only when that input is outside your chosen open neighborhood.

</details>

<details>
<summary>Worked solution</summary>

An existence statement permits many witnesses. Strict boundary inequalities determine which radii actually control every permitted input.

1. For $x\geq 0, \sqrt{x}<1/3$ is equivalent to $x<1/9$. Every rational radius with $0<\delta \leq 1/9$ therefore works: $x<\delta \leq 1/9$ implies $\sqrt{x}<1/3$.
2. The endpoint $\delta =1/9$ is allowed because the input condition is strict. For example $1/18, 1/100$ and $1/9$ are all correct witnesses.
3. If $\delta >1/9$, the permitted input $x=1/9$ has output error exactly 1/3, so that radius fails. Thus the complete set of rational witnesses is $(0,1/9]$.
4. This fixed ε task checks one witness. A proof of continuity still treats every $\varepsilon >0$; the same argument chooses any positive $\delta \leq \varepsilon ^{2}$.

</details>
