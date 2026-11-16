# Prove Lucas congruence by polynomial digit factorization

*Hard · [Number theory](index.md)*

For prime p and base-p digits N=Σn\_i pⁱ,K=Σk\_i pⁱ, prove $\binom NK\equiv\prod_i\binom{n_i}{k_i}\pmod p$, with an out-of-range digit binomial equal to zero. Deduce the number of binomial coefficients in row N not divisible by p.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, grade or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Work in F\_p\[X\], where (1+X)^{pⁱ}=1+X^{pⁱ}.

</details>

<details>
<summary>Hint 2</summary>

Each factor contributes a digit strictly below p, so extracting a coefficient has no ambiguous carry choices.

</details>

<details>
<summary>Model proof</summary>

The characteristic-p power identity decomposes one large coefficient into independent digit coefficients.

1. The intermediate binomial coefficients in (1+X)ᵖ are divisible by p, so it equals 1+Xᵖ over F\_p. Iterating gives (1+X)^{pⁱ}=1+X^{pⁱ}.
2. Thus (1+X)ᴺ=∏\_i(1+X^{pⁱ})^{n\_i} in F\_p\[X\]. In each factor a selected exponent has the form e\_i pⁱ with 0≤e\_i≤n\_i&lt;p.
3. A sum Σe\_i pⁱ has those e\_i as its unique base-p digits. Therefore the Xᴷ coefficient is ∏binom(n\_i,k\_i) if every k\_i≤n\_i, and zero otherwise. This is the required congruence, including K&gt;N.
4. For 0≤k\_i≤n\_i&lt;p, the small binomial coefficient is a unit mod p because its factorials contain no p. Hence a coefficient in row N is nonzero exactly when each digit k\_i has n\_i+1 choices. The total number is ∏\_i(n\_i+1).

**Self-assessment rubric**

- Derives the characteristic-p power identity and iterates it.
- Obtains the full polynomial factorization from the digits of N.
- Uses uniqueness of base-p digits to extract the coefficient with the zero convention.
- Justifies that each permitted small binomial is a unit and counts the permitted digit choices.

</details>
