# Derive a dyadic cosine product and its compact uniform convergence

*Hard · [Calculus](index.md)*

Prove $\prod_{k=1}^\infty\cos(x/2^k)=\sin x/x$ for every real x, with the right side continuously defined as 1 at zero. Prove the partial products converge uniformly on every bounded real interval, including intervals containing zeros of the product.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Iterate the double-angle identity for sine, then use sin u/u→1.

</details>

<details>
<summary>Hint 2</summary>

For uniform convergence use \|1−cos u\|≤u²/2 and a telescoping bound for differences of products whose factors have absolute value at most one.

</details>

<details>
<summary>Model proof</summary>

A finite trigonometric identity supplies the exact limit while summable factor errors supply uniform control.

1. Iterating sin x=2sin(x/2)cos(x/2) gives sin x=2ᴺsin(x/2ᴺ)P\_N(x), where P\_N is the first N cosine factors. For fixed x≠0 and all sufficiently large N, the denominator 2ᴺsin(x/2ᴺ) is nonzero and tends to x. Thus P\_N(x)→sin x/x, even if the numerator is zero. At x=0 every factor is one.
2. For any factors \|c\_k\|≤1, telescoping successive products gives \|∏\_{k=m+1}^nc\_k−1\|≤Σ\_{k=m+1}^n\|c\_k−1\|. Multiplying by a preceding product of absolute value at most one gives the same bound for \|P\_n−P\_m\|.
3. For \|x\|≤R, \|1−cos(x/2ᵏ)\|≤R²/(2·4ᵏ). The geometric tail of these bounds tends to zero uniformly, so the partial products are uniformly Cauchy on \[−R,R\].
4. Their uniform limit is continuous and equals the pointwise sinc value already identified. The proof never divides by an early zero cosine factor, so it covers all real x, including zeros and the origin.

**Self-assessment rubric**

- Obtains the finite sine/product identity with the correct power-of-two factor.
- Uses the small-angle limit and treats zero numerator and x=0 without invalid division.
- Derives the telescoping product-difference estimate from bounded factors.
- Uses a geometric error majorant to prove compact uniform convergence.

</details>
