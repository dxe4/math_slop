# Prove rigidity from two interior fixed points

*Hard · [Complex analysis problems](index.md)*

Prove that a holomorphic self-map of the unit disk $|z|<1$ with two distinct interior fixed points must be the identity map.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Conjugate by a disk automorphism sending one fixed point to zero.

</details>

<details>
<summary>Hint 2</summary>

The second fixed point becomes a nonzero equality point in Schwarz's lemma.

</details>

<details>
<summary>Model proof</summary>

An interior equality point forces the normalized rotation to be trivial.

1. Let a and b be distinct fixed points and let phi be a disk automorphism sending a to zero. Then g=phi composed with f composed with inverse(phi) is a disk self-map fixing zero and the nonzero point c=phi(b).
2. Schwarz's lemma gives \|g(z)\|&lt;=\|z\|. Since g(c)=c, its equality case gives g(z)=lambda\*z with \|lambda\|=1.
3. The nonzero fixed point implies lambda=1. Thus g is the identity and conjugating back proves f is the identity.

**Self-assessment rubric**

- Normalize one fixed point while retaining the other as a nonzero interior point.
- Invoke and correctly apply the equality case of Schwarz's lemma.
- Use the second fixed point to force the rotation factor to one.

</details>
