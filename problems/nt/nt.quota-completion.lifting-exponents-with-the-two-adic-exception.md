# Prove lifting of exponents including the exceptional prime two

*Hard · [Number theory](index.md)*

Let a&gt;b&gt;0 and n≥1. For odd prime p with p∤ab and p\|(a−b), prove $v_p(a^n-b^n)=v_p(a-b)+v_p(n)$. For odd a,b, prove the odd-n formula v₂(aⁿ−bⁿ)=v₂(a−b), and the even-n formula v₂(aⁿ−bⁿ)=v₂(a−b)+v₂(a+b)+v₂(n)−1. Prove the valuation increments, not only divisibility.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, grade or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Separate an exponent prime to p from repeated multiplication of the exponent by p.

</details>

<details>
<summary>Hint 2</summary>

In the odd-prime binomial step identify a unique term of smallest valuation; for p=2, isolate the first squaring from later squarings.

</details>

<details>
<summary>Model proof</summary>

The first nonzero binomial term determines an exact valuation, except that the first two-adic squaring has an extra sum factor.

1. For m coprime to p, factor Aᵐ−Bᵐ=(A−B)Σ\_{j=0}^{m−1}A^{m−1−j}Bʲ. If A≡B≠0 mod p, the sum is mB^{m−1} mod p and is nonzero. Thus raising to an exponent prime to p leaves the difference valuation unchanged.
2. For odd p write A=B+h with s=v\_p(h)≥1. In (B+h)ᵖ−Bᵖ the term pB^{p−1}h has valuation s+1. The terms with 2≤j≤p−1 have valuation at least js+1≥s+2, and hᵖ has valuation ps≥s+2. Hence the total has valuation exactly s+1. Writing n=pʳm with p∤m and repeating gives the odd-prime formula.
3. If a,b and m are odd, both (aᵐ−bᵐ)/(a−b) and (aᵐ+bᵐ)/(a+b) are odd: their factorizations have an odd number of odd terms, with alternating signs in the plus case. Thus these two valuations are unchanged by m. This also proves the odd-n formula.
4. For even n=2ʳm with m odd and r≥1, put A=aᵐ,B=bᵐ. The first squaring has v₂(A²−B²)=v₂(a−b)+v₂(a+b). After it, A² and B² are both 1 mod 8; at every later squaring their sum is 2 mod 8 and contributes exactly one factor of 2.
5. There are r−1 later squarings, giving v₂(aⁿ−bⁿ)=v₂(a−b)+v₂(a+b)+r−1. Positivity and a&gt;b ensure all differences considered are nonzero, so no infinite valuation convention was used.

**Self-assessment rubric**

- Proves the quotient factor is a unit and hence its exact valuation contribution is zero.
- Shows a unique smallest binomial valuation and iterates the exponent factorization.
- Treats both difference and sum factors for an odd exponent.
- Separates the first squaring and proves every later sum has valuation exactly one.
- Keeps all valuation expressions nonzero and states each exceptional regime correctly.

</details>
