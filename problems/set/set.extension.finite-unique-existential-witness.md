# Distinguish exactly one witness from at least one witness

*Easy · [Set theory](index.md)*

Let $D=\{0,1,2,3\}$ and let P(x,y) mean x+y is even. For how many x in D is there exactly one y in D satisfying P(x,y)?

```answer
{"answer":{"kind":"integer","expected":0,"checker_scope":"Exact finite witness or truth count only; no proof or automatic expansion of legacy required objectives is supplied."}}
```

<details>
<summary>Hint 1</summary>

An even x needs an even y, and an odd x needs an odd y.

</details>

<details>
<summary>Hint 2</summary>

Count the witnesses before applying the phrase exactly one.

</details>

<details>
<summary>Worked solution</summary>

Existence and unique existence are different quantifier conditions.

1. For x even, the satisfying y values are zero and two.
2. For x odd, the satisfying y values are one and three.
3. Every x therefore has two witnesses, so zero values have exactly one witness.

</details>
