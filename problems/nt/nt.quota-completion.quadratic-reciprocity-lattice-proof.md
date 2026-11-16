# Prove quadratic reciprocity by a rectangle partition

*Hard · [Number theory](index.md)*

For distinct odd primes p,q prove $(p/q)(q/p)=(-1)^{((p-1)/2)((q-1)/2)}$. You may use Gauss lemma, but derive the floor-sum parity bridge and the lattice-point identity used in the proof.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, grade or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

For odd a, compare the sum of residues ai mod p with their signed representatives to connect Gauss parity to Σ⌊ai/p⌋.

</details>

<details>
<summary>Hint 2</summary>

Partition the rectangle 1≤i≤(p−1)/2,1≤j≤(q−1)/2 by the line qi=pj; distinct primes put no lattice point on the line.

</details>

<details>
<summary>Model proof</summary>

Two character signs are complementary counts of lattice points below and above one rational line.

1. Let P=(p−1)/2 and let a be odd and prime to p. Write ai=p k\_i+r\_i for 1≤i≤P, and s\_i=min(r\_i,p−r\_i). Their sum differs from Σr\_i by m odd multiples of p modulo 2, so Σr\_i≡Σs\_i+m mod 2. Since a,p are odd and the s\_i permute 1,…,P, summing ai=p k\_i+r\_i modulo 2 gives Σk\_i≡m mod 2.
2. Gauss lemma therefore gives (a/p)=(−1)^{Σ\_{i=1}^P⌊ai/p⌋}. Apply it with a=q and, in the other direction, with a=p.
3. In the P-by-Q rectangle, Q=(q−1)/2, the sum A=Σ\_i⌊qi/p⌋ counts points with pj&lt;qi; its values do not exceed Q because i&lt;p/2. Likewise B=Σ\_j⌊pj/q⌋ counts points with qi&lt;pj.
4. No equality qi=pj is possible within these ranges, since p and q are distinct primes. Every rectangle point is counted exactly once, so A+B=PQ.
5. Multiplying the two character formulas gives (q/p)(p/q)=(−1)^{A+B}=(−1)^{PQ}, proving the reciprocity law with the indicated prime and parity hypotheses.

**Self-assessment rubric**

- Derives the floor-sum parity from signed residues and oddness, rather than quoting it.
- Explains the two floor sums as complementary counts within the exact finite rectangle.
- Uses distinct primality to rule out equality on the separating line.
- Combines both Gauss formulas with the correct reciprocity sign.

</details>
