# Combine a restricted base-seven tail with a divisibility filter

*Medium · [Computational arithmetic problems](index.md)*

How many four-digit base-$7$ integers are divisible by $6$ if each of the last three digits belongs to $\{0,1,2\}$ and those three digits are not all equal? Leading zeros are forbidden.

```answer
{"answer":{"kind":"integer","expected":"24","checker_scope":"Only the requested exact finite algorithmic result is checked. No learner program is executed and no unrestricted written proof is automatically certified. This original draft is ineligible for checkpoint evidence pending independent human review."}}
```

<details>
<summary>Hint 1</summary>

Reduce the place values modulo $6$ before considering the allowed leading digit.

</details>

<details>
<summary>Hint 2</summary>

Count the permitted tails after removing the constant ones, then inspect how the six nonzero leading digits cover residues.

</details>

<details>
<summary>Worked solution</summary>

A restricted-tail enumeration and a complete leading-residue system implement two separate filters.

1. Because $7\equiv1\pmod6$, the represented integer is congruent to its digit sum modulo $6$.
2. There are $3^3=27$ tails using only $0,1,2$; removing $000,111,222$ leaves $24$ permitted tails.
3. For each tail, the leading digits $1,2,3,4,5,6$ represent every residue modulo $6$ exactly once, so precisely one makes the whole digit sum divisible by $6$.
4. Every permitted tail therefore supplies one valid nonzero leading digit, giving exactly $24$ integers. The restricted-tail condition prevents replacing this by a count of all multiples in one integer interval.

</details>
