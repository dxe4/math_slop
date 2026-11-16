# Ptolemy inequality complex

*Hard · [Original Putnam-style training](index.md)*

For any four planar points $A,B,C,D$, prove $AC\cdot BD\le AB\cdot CD+AD\cdot BC$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Identify planar points with complex numbers $a,b,c,d$.

</details>

<details>
<summary>Hint 2</summary>

Use an algebraic identity among the three products of complex differences, then triangle inequality.

</details>

<details>
<summary>Model proof</summary>

Using $|a-c|=AC$ and likewise for the other distances yields $AC\cdot BD\le AB\cdot CD+AD\cdot BC$.

1. For complex coordinates, direct expansion gives $(a-c)(b-d)=(a-b)(c-d)+(a-d)(b-c)$.
2. Take complex absolute values and apply the triangle inequality to the right-hand side.
3. Using $|a-c|=AC$ and likewise for the other distances yields $AC\cdot BD\le AB\cdot CD+AD\cdot BC$.

**Self-assessment rubric**

- Establish the complex algebra identity among the four point differences.
- Apply the modulus triangle inequality to its two right-side products.
- Translate complex moduli into the stated Euclidean distances.

</details>
