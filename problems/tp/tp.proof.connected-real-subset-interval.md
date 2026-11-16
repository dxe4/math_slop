# A connected real subset contains intermediate points

*Medium · [Topology problems](index.md)*

Let $C\subseteq\mathbb R$ be connected, and let $a,b\in C$ with $a<b$. Prove that every $t$ with $a<t<b$ lies in $C$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic correctness verdict, demonstration or checkpoint."}}
```

<details>
<summary>Hint 1</summary>

Suppose an intermediate point is missing.

</details>

<details>
<summary>Hint 2</summary>

Intersect the set with the two open rays on opposite sides of that point.

</details>

<details>
<summary>Model proof</summary>

A missing intermediate point would separate the set into left and right parts.

1. If $t\notin C$, then $C=(C\cap(-\infty,t))\cup(C\cap(t,\infty))$.
2. The two parts are disjoint and relatively open. They are nonempty because they contain $a$ and $b$ respectively.
3. This is a separation of $C$, contradicting connectedness. Thus $t\in C$.

**Self-assessment rubric**

- Assume an intermediate point is absent and write the two-part decomposition.
- Check relative openness, disjointness, coverage and both witnesses of nonemptiness.
- Apply connectedness to conclude the intermediate point must be present.

</details>
