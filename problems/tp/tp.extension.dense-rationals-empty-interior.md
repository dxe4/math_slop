# Find interior separately from closure

*Easy · [Topology problems](index.md)*

In the usual topology on $\mathbb R$, find $\operatorname{int}(\mathbb Q)$ as a point set. Use {} for the empty set.

```answer
{"answer":{"kind":"set","expected":[],"checker_scope":"Only the requested finite set, interval or count in the stated topology is checked; a personal argument is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

An interior rational would need a whole real interval contained in the rationals.

</details>

<details>
<summary>Hint 2</summary>

Every nonempty real open interval contains an irrational.

</details>

<details>
<summary>Worked solution</summary>

Density of a set does not make it open.

1. Every neighborhood of any rational contains irrational points.
2. Consequently no rational has an open neighborhood lying inside $\mathbb Q$.
3. The interior is empty, even though the rational closure is the entire line.

</details>
