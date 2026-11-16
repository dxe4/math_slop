# Evaluate a rational root sum at two nonroot inputs

*Hard · [Complex analysis problems](index.md)*

Let a run over all three roots of $P(z)=z^3-2$. Find the exact sum of 1/(a^2+1), with all roots counted once.

```answer
{"answer":{"kind":"rational","expected":{"numerator":3,"denominator":5},"checker_scope":"Exact requested multiplicity, residue or normalized scalar count only. The analytic argument and its hypotheses are a worked model rather than an automatically checked proof; no existing objective contract is expanded."}}
```

<details>
<summary>Hint 1</summary>

Split the quadratic denominator using the two imaginary unit poles.

</details>

<details>
<summary>Hint 2</summary>

For a nonroot c, sum 1/(a-c) is negative Pprime(c)/P(c).

</details>

<details>
<summary>Worked solution</summary>

Two logarithmic-derivative evaluations replace explicit cubic radicals.

1. Use 1/(a^2+1)=(1/(2i))(1/(a-i)-1/(a+i)). The values i and negative i are not roots of P.
2. At i, Pprime/P=(6-3i)/5; at negative i it is (6+3i)/5. Negating these gives the two sums over 1/(a-c).
3. Their difference is 6i/5, and multiplication by 1/(2i) gives the real rational result three fifths.

</details>
