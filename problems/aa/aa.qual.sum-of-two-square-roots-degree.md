# Recover both generators from a primitive biquadratic element

*Medium · [Abstract algebra problems](index.md)*

Find the degree $[\mathbb Q(\sqrt2+\sqrt3):\mathbb Q]$. Prove the candidate quartic does not merely give an upper bound.

```answer
{"answer":{"kind":"integer","expected":"4","checker_scope":"Exact requested finite invariant only. Graduate algebra reasoning, classification hypotheses and proofs are supplied for personal study and are not automatically certified. This new skill does not expand any existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

The sum has a convenient reciprocal because the difference of the two radicands is one.

</details>

<details>
<summary>Hint 2</summary>

Recover both square roots from the sum and its reciprocal.

</details>

<details>
<summary>Worked solution</summary>

Recovering the original generators proves the exact degree of a candidate primitive element.

1. Put alpha=sqrt(2)+sqrt(3). Then 1/alpha=sqrt(3)-sqrt(2), so alpha-1/alpha=2sqrt(2) and alpha+1/alpha=2sqrt(3). Thus its field is the full biquadratic field.
2. The element sqrt(3) is not in Q(sqrt(2)): squaring a+b sqrt(2) would require ab=0 and then either a^2=3 or b^2=3/2, neither possible for rationals. Hence the tower degree is four.
3. Also (alpha^2-5)^2=24 gives alpha^4-10alpha^2+1=0. The exact degree argument proves this monic quartic is its minimal polynomial.

</details>
