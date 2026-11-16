# Use a Sylow conjugation action to rule out simplicity

*Medium · [Abstract algebra problems](index.md)*

Prove that no group of order $72$ is simple, using its action on Sylow three subgroups.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

The Sylow three count can only be one or four.

</details>

<details>
<summary>Hint 2</summary>

If it is four, simplicity would force a nontrivial homomorphism into S4 to be injective.

</details>

<details>
<summary>Model proof</summary>

A nontrivial small permutation action is incompatible with the proposed simple group order.

1. A Sylow three subgroup has order nine. Its count divides eight and is one modulo three, hence is one or four.
2. If the count is one, that subgroup is a proper nontrivial normal subgroup. If the count is four, conjugation acts transitively and nontrivially on four such subgroups.
3. Were G simple in the latter case, the action kernel would have to be trivial. That would embed a group of order seventy-two into S4 of order twenty-four, contrary to Lagrange.

**Self-assessment rubric**

- Obtain exactly the two possible numbers of Sylow three subgroups.
- Explain why the four-point action is nontrivial and what simplicity would imply.
- Use the impossible embedding or the unique-Sylow case to rule out simplicity.

</details>
