# Prove a prime factorial congruence by pairing

*Medium · [Original olympiad-style problems](index.md)*

Let $p$ be prime. Pair the nonzero residues modulo $p$ with their multiplicative inverses to prove $(p-1)!\equiv-1\pmod p$. Include the case $p=2$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

A residue is its own inverse exactly when its square is one.

</details>

<details>
<summary>Hint 2</summary>

For odd prime modulus, factor the difference of its square and one to identify the only unpaired residues.

</details>

<details>
<summary>Model proof</summary>

Use the supplied inverse-pair strategy and handle its fixed points.

1. Every nonzero residue has a unique inverse because the modulus is prime.
2. For odd $p$, a self-inverse residue satisfies $(x-1)(x+1)\equiv0$, so it is $1$ or $-1$. All other residues pair into products congruent to one.
3. The complete product is therefore $1\cdot(-1)=-1$ modulo $p$.
4. For $p=2$, the only nonzero residue is one, and $1\equiv-1\pmod2$, so the statement still holds.

**Self-assessment rubric**

- Use prime modulus to justify unique nonzero inverses.
- Identify every self-inverse residue with the odd-prime exception handled.
- Account for all paired residues and verify p=2 separately.

</details>
