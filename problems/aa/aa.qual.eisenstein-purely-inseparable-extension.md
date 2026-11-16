# Prove a prime-degree extension is inseparable by a polynomial and a valuation

*Hard · [Abstract algebra problems](index.md)*

For prime p, let $K=\mathbb F_p(t)$ with t transcendental. Prove X^p-t is irreducible over K, and show adjoining a root gives an extension of degree p with only one distinct conjugate in an algebraic closure.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

View the polynomial over the UFD Fp\[t\] and use its prime element t.

</details>

<details>
<summary>Hint 2</summary>

After adjoining one root, characteristic p makes the polynomial a pth power of a linear factor.

</details>

<details>
<summary>Model proof</summary>

Eisenstein proves the degree while the formal derivative exposes inseparability.

1. Over Fp\[t\], the polynomial is Eisenstein at t: all nonleading coefficients are divisible by t, while its constant coefficient is not divisible by t squared. Gauss lemma gives irreducibility over its fraction field K.
2. If u is a root, the extension degree is therefore p. In characteristic p, X^p-t=(X-u)^p in an algebraic closure.
3. Thus it has one distinct root with multiplicity p. The derivative is zero, and the extension is purely inseparable rather than a degree-p Galois extension.

**Self-assessment rubric**

- Check every Eisenstein condition in the correct UFD and pass to its fraction field.
- Use irreducibility to prove the exact extension degree.
- Factor in the algebraic closure and distinguish root multiplicity from the number of conjugates.

</details>
