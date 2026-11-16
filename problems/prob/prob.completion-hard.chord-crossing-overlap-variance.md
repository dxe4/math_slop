# Account for shared-chord covariance

*Hard · [Probability problems](index.md)*

A uniform perfect matching of $2n$ cyclically ordered points, $n\ge3$, is drawn as $n$ chords. Let $X_n$ count unordered pairs of crossing chords. Derive exact formulas for $E X_n$ and $\operatorname{Var}(X_n)$. You may generate the same labelled matching by taking $n$ independent pairs of independent uniform points on a circle and then retaining their cyclic order; justify why this representation is uniform. Do not assume crossing indicators are all independent.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft with task-specific semantic rubric; no automatic correctness verdict or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Indicators involving four different chords are independent in the endpoint representation.

</details>

<details>
<summary>Hint 2</summary>

Condition on the endpoints of a shared chord. Express crossing probability using the length of one directed arc.

</details>

<details>
<summary>Model proof</summary>

A shared random arc creates the only nonzero covariance terms.

1. Label the chords and distinguish their two endpoints. The $2n$ iid continuous endpoints have every ordering equally likely; forgetting the labels and endpoint distinctions gives each perfect matching the same $2^n n!$ representations. Thus the prescribed representation has the required uniform matching law.
2. Given one chord, the directed clockwise arc length $U$ between its distinguished endpoints is uniform on $[0,1]$. Another chord crosses it exactly when its two endpoints lie on opposite sides, with probability $q(U)=2U(1-U)$. Therefore $P(\text{crossing})=\int_0^1q(u)\,du=1/3$ and $E X_n=\binom n2/3$.
3. Two crossing indicators with four distinct chord labels depend on disjoint endpoint families and are independent. When they share one chord, they are conditionally independent given that chord, so their joint expectation is $\int_0^1q(u)^2\,du=4(1/3-1/2+1/5)=2/15$. Their covariance is $2/15-1/9=1/45$.
4. There are $\binom n2$ individual indicators and $3\binom n3$ unordered pairs of indicators sharing a chord. Consequently $\operatorname{Var}(X_n)=\binom n2(2/9)+2\cdot3\binom n3/45=n(n-1)(n+3)/45$. The factor two comes from the covariance expansion, not from counting crossings twice.

**Self-assessment rubric**

- Justify the equivalence between iid endpoints and a uniform matching.
- Compute the shared-arc first and second crossing probabilities.
- Separate disjoint and shared-chord indicator pairs.
- Count overlapping pairs and include the covariance factor two.

</details>
