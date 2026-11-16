# Difference squares factor criterion

*Hard · [Original Putnam-style training](index.md)*

For positive integer $N$, prove the number of pairs $(x,y)\in\mathbb Z^2$ with $x>y\ge0$ and $x^2-y^2=N$ equals the number of divisor pairs $u v=N$ with $0<u\le v$ and $u\equiv v\pmod2$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Use $u=x-y$ and $v=x+y$.

</details>

<details>
<summary>Hint 2</summary>

Prove the inverse formulas give an exact bijection, including parity and nonnegativity.

</details>

<details>
<summary>Model proof</summary>

The two constructions are inverse, so their finite counts agree exactly.

1. Every solution gives $u=x-y>0$, $v=x+y\ge u$, $uv=N$, and $u\equiv v\pmod2$ because $u+v=2x$.
2. Conversely any such factor pair yields integers $x=(u+v)/2$, $y=(v-u)/2\ge0$ by the parity and order conditions.
3. The two constructions are inverse, so their finite counts agree exactly.

**Self-assessment rubric**

- Map each integer solution to a positive ordered same-parity factor pair.
- Recover integer x,y from such a factor pair with the stated inequalities.
- Show the two maps are inverse and therefore preserve counts.

</details>
