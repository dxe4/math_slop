# Compute a conditional rearrangement through harmonic sums

*Medium · [Real analysis](index.md)*

Rearrange the alternating harmonic series by taking two unused positive terms, then one unused negative term, repeatedly. Let S be its sum. Find $S/\log2$. You may use that H\_n-log(n) tends to a finite constant, where H\_n=sum\_(k=1)^n 1/k.

```answer
{"answer":{"kind":"rational","expected":{"numerator":3,"denominator":2},"checker_scope":"Exact requested series scale or error bound only; no convergence proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

After N full blocks, the positive terms are the first 2N odd reciprocals and the negative terms are the first N even reciprocals.

</details>

<details>
<summary>Hint 2</summary>

Express this block sum through H\_(4N), H\_(2N) and H\_N.

</details>

<details>
<summary>Worked solution</summary>

Conditional rearrangement changes the relative density of positive and negative terms.

1. After N blocks the sum is H\_(4N)-(1/2)\*H\_(2N)-(1/2)\*H\_N.
2. Inserting H\_m=log m+gamma+o(1), the log N and constant terms cancel. The limit is log4-(1/2)\*log2=(3/2)\*log2.
3. The one or two extra terms in incomplete blocks tend to zero, so the full rearranged series has that same limit. Therefore S/log2=3/2.

</details>
