# Derive vanishing at a Jacobson ideal from Artin-Rees and Nakayama

*Hard · [Abstract algebra problems](index.md)*

Let R be Noetherian and M finitely generated. For an ideal I put $K=\bigcap_{n\ge0}I^nM$. Prove K=IK and some element of1+I annihilates K. Deduce K=0 when I is contained in J(R). State where each finiteness assumption enters.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

The intersection K is a finitely generated submodule.

</details>

<details>
<summary>Hint 2</summary>

Apply Artin-Rees to K itself, then the determinant trick.

</details>

<details>
<summary>Model proof</summary>

The intersection becomes an ideal-divisible finite module before radical units force zero.

1. Noetherianity and finite generation of M make every submodule finite, so K is finitely generated. Artin-Rees applied to K gives I^nM intersect K=I^(n-k)(I^kM intersect K) for n&gt;=k.
2. Since K lies in every I^nM, both intersections in that identity are K. At n=k+1 this gives K=IK.
3. Express finitely many generators of K as I-linear combinations of themselves. The adjugate determinant trick gives an annihilator det(Id-A) in1+I. If I is contained in J(R), this annihilator is a unit, hence K=0. The finite generator set is essential to that determinant step.

**Self-assessment rubric**

- Justify K is finitely generated before applying finite-module tools.
- Use containment in all powers to derive exactly K=IK.
- Construct the1+I annihilator and apply the Jacobson hypothesis only at the final step.

</details>
