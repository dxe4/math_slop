# Refute a proposed radius after moving the point

*Medium · [Real analysis](index.md)*

Keep $f(x)=\sqrt{x}$ on $D=[0,\infty )$, but move the point to $a=4$, where $f(4)=2$, and use $\varepsilon =1/2$. A learner proposes $\delta =2$. Refute that proposal by giving any exact rational input $x\in D$ with \|x−4\|&lt;2 but \|$\sqrt{x}-2$\|≥$1/2$. Enter x as your witness. The output error must be at least $1/2$; equality is enough to refute the required strict bound. In your optional explanation, check both inequalities. This task concerns one proposed radius, not discontinuity of $\sqrt{x}$.

```answer
{"answer":{"kind":"rational_interval_witness_with_open_reasoning","expected_constraints":{"minimum_exclusive":"2","maximum_inclusive":"9/4"},"checker_scope":"Checks exact membership in the mathematically derived rational-witness interval for this one fixed-tolerance task. The explanation is an unassessed draft. This does not verify a proof of continuity or uniform continuity for every positive tolerance."}}
```

<details>
<summary>Hint 1</summary>

A counterexample must satisfy the proposed input bound and fail the required output bound at the same time.

</details>

<details>
<summary>Hint 2</summary>

On nonnegative inputs, \|$\sqrt{x}-2$\|≥$1/2$ means $\sqrt{x}\leq 3/2$ or $\sqrt{x}\geq 5/2$. Compare the resulting input ranges with $|x-4|<2$.

</details>

<details>
<summary>Worked solution</summary>

Negating a universal implication requires one input that satisfies its hypothesis and fails its conclusion. Changing the center changes both boundary distances.

1. The proposed input condition $|x-4|<2$ is equivalent to $2<x<6$, entirely inside D.
2. Output failure means $\sqrt{x}\leq 3/2$ or $\sqrt{x}\geq 5/2$. Since all quantities being squared are nonnegative, this is equivalent to $x\leq 9/4$ or $x\geq 25/4$.
3. The second branch is impossible within $x<6$ because $25/4>6$. Thus the complete rational witness set is $2<x\leq 9/4$. For example $x=17/8$ and $x=9/4$ both work.
4. At $x=9/4$ the input distance is $7/4<2$ and the output error is exactly 1/2, so the strict output requirement fails. At $x=2$ the input distance equals 2, so $x=2$ is not a counterexample.
5. A failed radius does not imply discontinuity. Here every $0<\delta \leq 7/4$ works at the stated ε: the allowed output interval corresponds to $9/4<x<25/4$, whose boundary distances from $4$ are $7/4$ and $9/4$.

</details>
