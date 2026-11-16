# Rational intervals form a countable basis

*Medium · [Topology problems](index.md)*

Prove that the open intervals $(p,q)$ with rational endpoints $p<q$ form a countable basis for the usual topology on $\mathbb R$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic correctness verdict, demonstration or checkpoint."}}
```

<details>
<summary>Hint 1</summary>

Every neighborhood of a real point contains a smaller interval around it.

</details>

<details>
<summary>Hint 2</summary>

Use density of rational numbers to choose endpoints on opposite sides of the point, and then count rational pairs.

</details>

<details>
<summary>Model proof</summary>

Density provides a local refinement and countability controls the entire interval family.

1. Let $U$ be usual-open and $x\in U$. Choose $\varepsilon>0$ with $(x-\varepsilon,x+\varepsilon)\subseteq U$.
2. Rational density supplies $p\in(x-\varepsilon,x)$ and $q\in(x,x+\varepsilon)$, so $x\in(p,q)\subseteq U$.
3. Every member of the proposed family is open, and the local refinement shows that every usual-open set is a union of members.
4. The family is countable because it is indexed by a subset of the countable set $\mathbb Q^2$.

**Self-assessment rubric**

- Choose a small usual-open interval within an arbitrary neighborhood.
- Select rational endpoints bracketing the point within that interval.
- Conclude the union property and justify countability of the family.

</details>
