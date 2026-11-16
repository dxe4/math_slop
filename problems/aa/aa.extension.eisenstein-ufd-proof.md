# Prove the criterion without assuming a field reduction is already irreducible

*Hard · [Abstract algebra problems](index.md)*

Let R be a UFD, pi a prime element, and $f=a_nx^n+\cdots+a_0$ with pi not dividing a\_n, pi dividing every a\_j for j&lt;n, and pi^2 not dividing a\_0. Prove f is irreducible over the fraction field of R. State where Gauss's lemma enters.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

A nontrivial fraction-field factorization can be moved to R after content normalization.

</details>

<details>
<summary>Hint 2</summary>

Modulo pi, the factors multiply to one monomial and retain their positive degrees.

</details>

<details>
<summary>Model proof</summary>

The constant coefficient cannot absorb the two forced prime factors.

1. By Gauss's lemma, a nontrivial factorization over the fraction field would give one in R\[x\] after removing the content and an irrelevant scalar. The content is not divisible by pi because the leading coefficient is not.
2. The leading coefficients of both positive-degree factors are not divisible by pi. Their reductions keep their positive degrees and multiply to a scalar times x^n. In the polynomial ring over the fraction field of R/(pi), each reduced factor must be a monomial of positive degree.
3. Both factor constant terms are therefore divisible by pi, so their product a\_0 is divisible by pi^2, contradicting the hypothesis. Thus no such factorization exists.

**Self-assessment rubric**

- Move from fraction-field factors to integral primitive factors legitimately.
- Keep factor degrees and infer zero constant terms in the prime reduction.
- Use the contradiction at exactly the constant coefficient.

</details>
