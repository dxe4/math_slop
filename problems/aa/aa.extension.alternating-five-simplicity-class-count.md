# Prove simplicity through the actual alternating conjugacy classes

*Hard · [Abstract algebra problems](index.md)*

Prove A5 is simple by deriving its conjugacy class sizes $1,15,20,12,12$ and applying Lagrange's theorem to unions containing the identity. Explain why the twenty-four five-cycles split into two classes.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Compute centralizers inside A5, not just S5.

</details>

<details>
<summary>Hint 2</summary>

Organize possible normal-subgroup sizes by how many of the two size-twelve classes are included.

</details>

<details>
<summary>Model proof</summary>

Parity changes centralizer indices and makes a complete normal-union count possible.

1. The nonidentity cycle types in A5 are double transpositions, three-cycles and five-cycles, with totals fifteen, twenty and twenty-four. A three-cycle has A5 centralizer order three, giving one class of size twenty. A double transposition has S5 centralizer order eight; it includes an odd transposition centralizing it, so exactly half are even and its A5 class has size 60/4=15.
2. A five-cycle has S5 centralizer just its cyclic group of order five, entirely even. Its A5 centralizer still has order five, so each A5 class has size twelve. The twenty-four such elements therefore form two classes, accounting for every element together with the identity.
3. A normal subgroup is a union of classes including the identity. Its possible sizes are 1,16,21,36 when no size-twelve class is used; 13,28,33,48 when one is used; and 25,40,45,60 when both are used. Of these only one and sixty divide sixty. Thus A5 has no nontrivial proper normal subgroup.

**Self-assessment rubric**

- Derive the three centralizer sizes within A5 and all class totals.
- Explain the two classes from the centralizer index, not merely from a parity slogan.
- Exhaust all class-union sizes and apply the divisibility condition.

</details>
