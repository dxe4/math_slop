# Burnside double count proof

*Hard · [Original Putnam-style training](index.md)*

For a finite group $G$ acting on a finite set $X$, prove the number of orbits equals $|G|^{-1}\sum_{g\in G}|\operatorname{Fix}(g)|$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Double-count pairs $(g,x)$ with $gx=x$.

</details>

<details>
<summary>Hint 2</summary>

Use the orbit–stabilizer relation within each orbit.

</details>

<details>
<summary>Model proof</summary>

Each orbit contributes exactly $|G|$; dividing the fixed-pair count by $|G|$ gives the number of orbits.

1. Counting fixed pairs by group elements gives $\sum_{g\in G}|\operatorname{Fix}(g)|=\sum_{x\in X}|\operatorname{Stab}(x)|$.
2. For an orbit $O$, every $x\in O$ has stabilizer size $|G|/|O|$, so the orbit contributes $|O|\cdot|G|/|O|=|G|$ to the second sum.
3. Each orbit contributes exactly $|G|$; dividing the fixed-pair count by $|G|$ gives the number of orbits.

**Self-assessment rubric**

- Count stabilizing pairs by group element and by point.
- Show each orbit contributes exactly \|G\| stabilizing pairs.
- Divide the two counts to obtain Burnside’s formula.

</details>
