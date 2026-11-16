# Prove a congruence submodule has a specified free basis

*Medium · [Abstract algebra problems](index.md)*

Let $H=\{(a,b)\in\mathbb Z^2:a\equiv b\pmod3\}$. Prove (1,1),(3,0) form a Z-basis of H, and identify Z^2/H.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Solve the congruence as an explicit integer coefficient of the proposed second basis vector.

</details>

<details>
<summary>Hint 2</summary>

A surjective difference-modulo-three homomorphism identifies the quotient.

</details>

<details>
<summary>Model proof</summary>

An explicit decomposition proves freeness and exposes the quotient map.

1. For (a,b) in H, the integer k=(a-b)/3 exists and (a,b)=b(1,1)+k(3,0), so the proposed vectors span H.
2. If u(1,1)+v(3,0)=(0,0), the second coordinate gives u=0 and then v=0, proving linear independence.
3. The map (a,b) to a-b modulo three is surjective and has kernel H, so its quotient is Z/3 by the first isomorphism theorem.

**Self-assessment rubric**

- Write every allowed lattice point with integer basis coefficients.
- Show the proposed integer basis has no nontrivial relation.
- Give the surjective map, its exact kernel and the quotient identification.

</details>
