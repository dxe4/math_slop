# Identify the new accumulation point of a compactification

*Easy · [Topology problems](index.md)*

Let $X=\mathbb N\cup\{\omega\}$ have isolated natural-number points and neighborhoods of omega containing omega and all but finitely many natural numbers. Find the accumulation-point set of $\mathbb N$. Use the token omega for the added point.

```answer
{"answer":{"kind":"set","expected":["omega"],"checker_scope":"Only the requested finite set, interval or count in the stated topology is checked; a personal argument is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Every natural-number point has a singleton neighborhood.

</details>

<details>
<summary>Hint 2</summary>

Every neighborhood of the added point contains infinitely many natural numbers.

</details>

<details>
<summary>Worked solution</summary>

The compactifying point captures escape from every finite subset.

1. No natural number is an accumulation point because its singleton neighborhood contains no different natural point.
2. Every neighborhood of omega contains all but finitely many natural numbers and therefore meets the subset.
3. Thus the unique accumulation point is omega, represented by the requested token.

</details>
