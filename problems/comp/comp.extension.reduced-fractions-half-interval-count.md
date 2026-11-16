# Use a reflection pairing after an exact totient total

*Medium · [Computational arithmetic problems](index.md)*

How many reduced fractions a/b satisfy $0<a/b<1/2$ and 1&lt;=b&lt;=10, with b positive? You may use the totient sum through ten, which is 32. Count distinct rational values.

```answer
{"answer":{"kind":"integer","expected":"15","checker_scope":"Exact requested integer, rational or finite coefficient vector only. The stated theorem or model is part of the supplied mathematics; no learner program or unrestricted proof is run or certified. This new skill does not expand an existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

The Farey sequence lists each reduced value once.

</details>

<details>
<summary>Hint 2</summary>

Pair interior fractions by x-&gt;1-x, separating the fixed midpoint.

</details>

<details>
<summary>Worked solution</summary>

A finite rational reflection converts a half-interval count into a corrected total.

1. The Farey sequence of order ten has thirty-three entries, since its length is one plus the supplied totient sum.
2. After removing zero and one there are thirty-one interior entries. The reflection x to one minus x pairs opposite sides of one half, with only the midpoint one half fixed.
3. Removing that midpoint leaves thirty entries split equally, so fifteen lie strictly below one half.

</details>
