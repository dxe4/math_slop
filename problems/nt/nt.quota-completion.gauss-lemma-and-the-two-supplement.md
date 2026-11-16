# Prove Gauss lemma and the supplementary law for two

*Hard · [Number theory](index.md)*

For odd prime p and p∤a, let m count those least positive residues of a,2a,…,((p−1)/2)a exceeding p/2. Prove $(a/p)=(-1)^m$ and deduce (2/p)=(−1)^{(p²−1)/8}. You may use Euler criterion.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, grade or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Replace every upper-half residue r by p−r and show the resulting absolute residues permute 1,…,(p−1)/2.

</details>

<details>
<summary>Hint 2</summary>

For a=2, the upper-half condition is i&gt;p/4; separate p modulo eight.

</details>

<details>
<summary>Model proof</summary>

Pairing residues with their negatives exposes a sign through a cancellable factorial product.

1. Put P=(p−1)/2 and write r\_i as the least positive residue of ai. The numbers s\_i=min(r\_i,p−r\_i) lie in {1,…,P} and are distinct: ai≡±aj would imply i≡±j mod p, and the chosen range permits only i=j. Thus they permute that set.
2. Multiplying gives aᴾP!≡∏r\_i≡(−1)ᵐ∏s\_i=(−1)ᵐP! mod p. Since P! is a unit, aᴾ≡(−1)ᵐ. Euler criterion identifies this with (a/p), proving Gauss lemma.
3. For a=2, no residue 2i wraps past p because 1≤i≤P. Hence m=P−⌊p/4⌋. For p≡1,3,5,7 mod 8 its parity is respectively even,odd,odd,even.
4. The integer (p²−1)/8 has those same parities in the four cases. Therefore (2/p)=(−1)^{(p²−1)/8}, with every odd prime covered.

**Self-assessment rubric**

- Proves the signed representatives are a permutation with no hidden collisions.
- Tracks the sign in the product and legitimately cancels P!.
- Counts the upper-half residues for a=2.
- Checks all four odd residue classes modulo eight and obtains the stated exponent.

</details>
