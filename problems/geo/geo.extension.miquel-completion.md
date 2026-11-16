# Complete a three-circle concurrence argument

*Hard · [Geometry and trigonometry problems](index.md)*

$D,E,F$ lie strictly inside $BC,CA,AB$ of a nondegenerate triangle $ABC$. Circles $AEF$ and $BFD$ meet transversely at $F$ and another point $P$. Assume $P$ is distinct from $A,B,C,D,E,F$ and no angle below has coincident defining points. Prove $C,D,E,P$ are concyclic. Use directed angles modulo $180^\circ$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only. No automatic verdict, graded evidence or checkpoint credit is awarded."}}
```

<details>
<summary>Hint 1</summary>

Compute $\angle DPE$ as $\angle DPF+\angle FPE$.

</details>

<details>
<summary>Hint 2</summary>

Transfer the two terms to the given circles, then use the side incidences.

</details>

<details>
<summary>Model proof</summary>

Add the directed angles supplied by the two known circles.

1. Because $B,F,D,P$ are concyclic, $\angle DPF=\angle DBF$. Because $A,E,F,P$ are concyclic, $\angle FPE=\angle FAE$.
2. Thus $\angle DPE=\angle DBF+\angle FAE$. The incidence relations identify $BD$ with $BC$, $BF$ with $BA$, $AF$ with $AB$, and $AE$ with $AC$.
3. Modulo $180^\circ$, the sum is the directed angle from $BC$ to $BA$ plus that from $AB$ to $AC$, which equals the angle from $BC$ to $AC$.
4. This equals $\angle DCE$ modulo $180^\circ$, since $CD$ lies on $CB$ and $CE$ on $CA$.
5. The converse directed inscribed-angle criterion gives concyclicity of $C,D,E,P$. The stated distinctness and transverse-intersection hypotheses keep both initial circles and every transferred angle defined.

**Self-assessment rubric**

- Use the correct chord angle from each known circle.
- Sum the two directed angles with consistent orientation.
- Use the given side incidences modulo 180 degrees.
- Apply the converse cyclic criterion with all four points distinct.

</details>
