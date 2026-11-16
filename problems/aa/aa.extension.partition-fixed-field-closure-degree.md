# Use the core to recover a normal closure

*Easy · [Abstract algebra problems](index.md)*

Let $L/K$ be Galois with group $S_4$. Let $H$ be the order-eight stabilizer of the partition $\{\{1,2\},\{3,4\}\}$, and $E=L^H$. You may use $\operatorname{core}_{S_4}(H)=V_4$. Return $[[E:K],[\widetilde E:K]]$, where $\widetilde E$ is the normal closure of $E$ inside $L$.

```answer
{"answer":{"kind":"vector","expected":["3","6"],"checker_scope":"Only the requested exact invariant is checked; no written proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

A fixed-field degree is a subgroup index.

</details>

<details>
<summary>Hint 2</summary>

The normal closure is fixed by the largest normal subgroup contained in $H$.

</details>

<details>
<summary>Worked solution</summary>

The subgroup index and core answer two different degree questions.

1. The order of $S_4$ is $24$, so $[E:K]=24/8=3$.
2. The compositum of the conjugates of $E$ is fixed by the intersection of the conjugates of $H$.
3. The given core has order $4$, hence $[\widetilde E:K]=24/4=6$.

</details>
