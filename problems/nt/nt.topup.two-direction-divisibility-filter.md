# Apply divisibility in both directions

*Medium · [Number theory](index.md)*

From the candidates $\{-26,-13,0,13,26\}$ select every n satisfying both 13 divides n and n divides 26. Use integer-witness divisibility.

```answer
{"answer":{"kind":"set","expected":["-26","-13","13","26"],"checker_scope":"Exact requested finite result, set or polynomial identity only. Worked number-theoretic reasoning is not automatically certified; no new same-version checkpoint objective is introduced."}}
```

<details>
<summary>Hint 1</summary>

The two statements have different divisors.

</details>

<details>
<summary>Hint 2</summary>

Zero divides twenty-six only if twenty-six equals zero times an integer.

</details>

<details>
<summary>Worked solution</summary>

The right-hand divisibility condition rules out a candidate allowed by the left-hand one.

1. Every listed candidate is a multiple of thirteen, including zero.
2. The nonzero candidates divide twenty-six with witnesses negative one, negative two, two and one respectively.
3. Zero cannot divide twenty-six, so the answer contains exactly the four nonzero candidates.

</details>
