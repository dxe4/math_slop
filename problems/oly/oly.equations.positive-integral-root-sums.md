# Use root-product arithmetic to enumerate parameters

*Medium · [Original olympiad-style problems](index.md)*

Find the sum of all integers m for which $t^2-mt+12=0$ has two positive integer roots, counted with multiplicity.

```answer
{"answer":{"kind":"integer","expected":"28","checker_scope":"Exact short answer only; the complete argument remains a worked solution, not an automatically certified proof or contest result."}}
```

<details>
<summary>Hint 1</summary>

The roots have fixed product.

</details>

<details>
<summary>Hint 2</summary>

Unordered positive factor pairs determine all possible root sums.

</details>

<details>
<summary>Worked solution</summary>

Vieta turns the parameter condition into a finite divisor-pair list.

1. If the positive integer roots are a,b, then ab=12 and m=a+b.
2. The unordered factor pairs are (1,12), (2,6) and (3,4), yielding m=13,8,7. No other factor pairs exist.
3. The sum of the allowed parameters is $13+8+7=28$.

</details>
