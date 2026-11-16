# Prove a prime-binomial congruence modulo a cube

*Hard · [Number theory](index.md)*

For prime p≥5 prove $\binom{2p-1}{p-1}\equiv1\pmod{p^3}$. Work with rational congruences whose denominators are prime to p, and prove the two harmonic congruences needed before expanding the product.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, grade or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

The inverse-square residues have the same sum as the ordinary nonzero square residues modulo p.

</details>

<details>
<summary>Hint 2</summary>

Pair k with p−k to lift the reciprocal first-moment sum from a mod-p fact to a mod-p² fact.

</details>

<details>
<summary>Model proof</summary>

Two different harmonic cancellations remove the first and second terms of a prime-sized product expansion.

1. Put H₁=Σ\_{k=1}^{p−1}1/k and H₂=Σ1/k². Inversion permutes the nonzero residues, so H₂≡Σk²=p(p−1)(2p−1)/6≡0 mod p; the denominator 6 is invertible because p≥5.
2. The pairs k,p−k give H₂≡2Σ\_{k=1}^{(p−1)/2}1/k² mod p. Hence that half-sum is zero mod p. Also 1/k+1/(p−k)=p/\[k(p−k)\]≡−p/k² mod p², so summing yields H₁≡0 mod p².
3. Write the binomial as ∏\_{k=1}^{p−1}(1+p/k). Modulo p³ its expansion is 1+pH₁+p²Σ\_{i&lt;j}1/(ij), since all higher products contain p³.
4. The second elementary sum equals (H₁²−H₂)/2 and is zero mod p. Therefore both pH₁ and the quadratic contribution vanish mod p³, leaving exactly 1. Every denominator used is a p-unit, so these rational congruences legitimately imply the integer binomial congruence.

**Self-assessment rubric**

- Uses inversion and the square-sum formula with p≥5 correctly.
- Pairs opposite residues and proves H₁ is zero modulo p².
- Retains exactly the product terms visible modulo p³.
- Uses the symmetric-sum identity and unit denominators to complete the congruence.

</details>
