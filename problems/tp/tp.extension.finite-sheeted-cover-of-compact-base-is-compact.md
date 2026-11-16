# Prove compactness ascends a finite covering

*Hard · [Topology problems](index.md)*

Let $p:E\to B$ be a surjective covering with exactly d&lt;∞ sheets over every point, and let B be compact. Prove E is compact directly from an arbitrary open cover of E. No Hausdorff hypothesis is available; do not argue that a closed subset of an unspecified ambient space must be compact.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic verdict, grade or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

At each basepoint choose one cover member around every point of its finite fiber.

</details>

<details>
<summary>Hint 2</summary>

Shrink one evenly covered base neighborhood so all d sheets over it lie in their respective chosen members, then use compactness downstairs.

</details>

<details>
<summary>Model proof</summary>

Finite fibers let one base neighborhood coordinate finitely many cover choices simultaneously.

1. Let O be any open cover of E. For b∈B choose an evenly covered neighborhood U and name its d sheets V\_1,…,V\_d. Each contains one point e\_i above b. Choose O\_i∈O containing e\_i.
2. The set (p\|\_{V\_i})(O\_i∩V\_i) is an open neighborhood of b in U. Intersect these d neighborhoods to obtain an open W\_b⊂U containing b. The inverse image of W\_b in V\_i lies inside O\_i for every i.
3. The W\_b cover B, so compactness gives finitely many W\_{b\_1},…,W\_{b\_k}. For each of those finitely many base neighborhoods retain its d chosen cover members upstairs.
4. These at most kd members cover E: each point projects into one W\_{b\_j} and lies in one of its d sheets. Thus every open cover of E has a finite subcover, with no separation assumption needed.

**Self-assessment rubric**

- Selects one open-cover member around each point of a fiber and works within a common evenly covered neighborhood.
- Intersects finitely many base neighborhoods to control all sheets at once.
- Uses a finite subcover downstairs to obtain a finite cover of the entire total space.

</details>
