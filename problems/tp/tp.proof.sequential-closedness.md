# Closed sets and convergent sequences in a metric space

*Hard · [Topology problems](index.md)*

For a subset $F$ of a metric space $(X,d)$, prove that $F$ is closed if and only if every sequence of points of $F$ that converges in $X$ has its limit in $F$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic correctness verdict, demonstration or checkpoint."}}
```

<details>
<summary>Hint 1</summary>

For the forward direction, use a ball in the open complement to rule out a limit outside the set.

</details>

<details>
<summary>Hint 2</summary>

If the set is not closed, pick a point in its closure but outside it and choose a set point in each shrinking ball.

</details>

<details>
<summary>Model proof</summary>

Metric balls convert a missing closure point into a sequence witnessing failure of sequential closedness.

1. Assume $F$ is closed and a sequence in $F$ converges to $x\notin F$. The open complement contains some ball $B(x,r)$, $r>0$.
2. Convergence places all sufficiently late sequence terms in that ball, contradicting their membership in $F$. Thus a limit must lie in $F$.
3. Conversely, if $F$ is not closed, choose $x\in\overline F\setminus F$. Each ball $B(x,1/n)$ meets $F$, so select $x_n\in F$ with $d(x_n,x)<1/n$.
4. The distance bound implies $x_n\to x$ in $X$, but $x\notin F$, contradicting the assumed sequential property.
5. Both directions prove the equivalence; the shrinking-ball construction is where the metric assumption is used.

**Self-assessment rubric**

- Use an open complementary ball and convergence to prove the forward direction.
- Choose a closure point outside the set if closedness fails.
- Construct set points with distances tending to zero.
- Use the resulting sequence to prove the converse and identify the metric hypothesis.

</details>
