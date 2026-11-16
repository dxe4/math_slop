# Distance to a nonempty set is Lipschitz

*Medium · [Topology problems](index.md)*

In a metric space $(X,d)$, let $A\ne\varnothing$ and define $\delta_A(x)=\inf_{a\in A}d(x,a)$. Prove $|\delta_A(x)-\delta_A(y)|\le d(x,y)$ for all $x,y\in X$. Do not assume the infimum is attained.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic correctness verdict, demonstration or checkpoint."}}
```

<details>
<summary>Hint 1</summary>

Use the triangle inequality against an arbitrary point of the set.

</details>

<details>
<summary>Hint 2</summary>

Take infima only after obtaining a bound valid for every such point, then exchange the two domain points.

</details>

<details>
<summary>Model proof</summary>

The triangle inequality transfers to infimal distances without choosing a minimizing point.

1. The infimum is finite and nonnegative: distances are nonnegative, and any fixed point of the nonempty set gives a finite upper bound.
2. For every $a\in A$, $\delta_A(x)\le d(x,a)\le d(x,y)+d(y,a)$. Taking the infimum on the right gives $\delta_A(x)\le d(x,y)+\delta_A(y)$.
3. Exchanging $x,y$ gives the reverse bound on their difference. Together these prove the absolute-value inequality, without any nearest-point assumption.

**Self-assessment rubric**

- Justify finite nonnegative infimal distances using nonemptiness.
- Use a triangle bound valid at every set point, then take an infimum.
- Exchange the points and combine the two difference inequalities.

</details>
