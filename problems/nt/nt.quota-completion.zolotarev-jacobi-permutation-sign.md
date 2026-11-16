# Derive a Jacobi symbol from a residue permutation sign

*Hard · [Number theory](index.md)*

For odd n≥3 and gcd(a,n)=1, let σ\_a permute all residues mod n by multiplication by a. Prove $\operatorname{sgn}(\sigma_a)=(a/n)$, where the right side is the Jacobi symbol. You may use Euler criterion at an odd prime and the alternating Vandermonde identity. Prove the prime-power and CRT steps rather than assuming multiplicativity in n.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, grade or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

At a prime compare the Vandermonde product before and after applying the residue permutation.

</details>

<details>
<summary>Hint 2</summary>

For pᵏ reduce to blocks of p points over residues mod p^{k−1}; the within-block maps are multiplication by a followed by translations.

</details>

<details>
<summary>Model proof</summary>

An arithmetic character emerges from permutation orientation at primes, then survives odd fiber and Cartesian-product decompositions.

1. For n=p prime use V=∏\_{0≤i&lt;j&lt;p}(j−i), a nonzero element of F\_p. Permuting its arguments gives sign(σ\_a)V, while multiplying all p arguments by a gives a^{p(p−1)/2}V. By Fermat and Euler criterion this factor is a^{(p−1)/2}≡(a/p). Since p is odd, the two possible integer signs are distinguished mod p, proving the prime case.
2. For modulus pᵏ, label each residue r+p^{k−1}t with r mod p^{k−1} and t mod p. Multiplication permutes the base r-blocks by σ\_a modulo p^{k−1}. A block-permutation sign is its base sign raised to p, hence unchanged because p is odd.
3. Within each block the t map is t↦at+c\_r mod p. Every translation has sign +1: a nonzero translation is a p-cycle, and p is odd. Thus each block contributes sign (a/p), and the odd number p^{k−1} of blocks has total internal sign (a/p). Induction gives sign modulo pᵏ equal to (a/p)ᵏ.
4. For coprime odd u,v, CRT conjugates the residue permutation to σ\_a on Z/u times σ\_a on Z/v. The sign of this product permutation is sign(σ\_u)^v sign(σ\_v)^u, because each factor acts on that many disjoint copies. Both exponents are odd, so the signs multiply.
5. Combining the prime-power factors gives ∏\_{pᵏ∥n}(a/p)ᵏ, exactly the Jacobi symbol. All uses of multiplication assume gcd(a,n)=1 so the maps really are permutations.

**Self-assessment rubric**

- Uses the nonzero Vandermonde and Euler criterion to identify the prime permutation sign.
- Tracks block permutation and affine within-block signs at an odd prime power.
- Derives the Cartesian-product sign with its odd multiplicities.
- Combines all prime-power factors with the precise Jacobi definition and unit hypothesis.

</details>
