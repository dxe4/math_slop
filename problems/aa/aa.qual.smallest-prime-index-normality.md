# Use a coset action to prove a normality criterion

*Hard · [Abstract algebra problems](index.md)*

Let p be the smallest prime divisor of the finite group order $|G|$. If H has index p in G, prove H is normal. Do not assume H is a Sylow subgroup.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

The action on left cosets gives a transitive image in Sp.

</details>

<details>
<summary>Hint 2</summary>

Its order divides both \|G\| and p!, whose common prime divisors can only include p.

</details>

<details>
<summary>Model proof</summary>

A small-index permutation action has too little room for a nontrivial point stabilizer.

1. The left-coset action gives a homomorphism from G to S\_p with transitive image J. Its order divides \|G\| and p!, and transitivity forces p to divide \|J\|.
2. No prime below p divides \|G\|, and p occurs only once in p!, so these divisibility constraints give \|J\|=p. The point stabilizers in this transitive p-point image are therefore trivial.
3. The preimage of the stabilizer of coset H is H, and that stabilizer is trivial, so H is the action kernel and is normal.

**Self-assessment rubric**

- Define the transitive coset action and the two image-order divisibility constraints.
- Use the smallest-prime and factorial hypotheses to force image order p.
- Identify H with the kernel from the trivial point stabilizer.

</details>
