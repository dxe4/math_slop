# Find a canonical negative-division remainder

*Easy · [Number theory](index.md)*

Find integers $q$ and $r$ satisfying $-29=6q+r$ with $0\le r<6$.

```answer
{"answer":{"kind":"integer_pair","expected":{"q":-5,"r":1},"checker_scope":"Checks both the equality and the canonical remainder bounds."}}
```

<details>
<summary>Hint 1</summary>

Find consecutive multiples of $6$ around $-29$.

</details>

<details>
<summary>Hint 2</summary>

Use $-30$ rather than $-24$ as the lower multiple.

</details>

<details>
<summary>Worked solution</summary>

The specified remainder is nonnegative even when the dividend is negative.

1. $-30\le -29<-24$, so $q=-5$.
2. Subtract $6q=-30$ from $-29$ to obtain $r=1$; it satisfies $0\le 1<6$.

An ordered list shows $-30$, $-29$ and $-24$ and the equation $-29=6(-5)+1$.

</details>
