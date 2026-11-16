# Count positive unit-fraction decompositions without a search cutoff

*Hard · [Foundations bridge](index.md)*

How many unordered pairs of positive integers a,b satisfy $1/a+1/b=1/6$? Count a=b as one pair. Give the exact count; justify completeness in your personal argument.

```answer
{"answer":{"kind":"integer","expected":5,"checker_scope":"Only the requested exact result in the stated domain and units is checked; the reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

First show a and b must exceed 6.

</details>

<details>
<summary>Hint 2</summary>

Rearrange the equation to (a−6)(b−6)=36 and count factor pairs with a≤b.

</details>

<details>
<summary>Worked solution</summary>

A reciprocal equation becomes a finite divisor-pair problem.

1. Assume a≤b to count each unordered pair once. Neither a nor b can be at most 6, because that reciprocal alone would be at least 1/6 and the other is positive.
2. Multiplication gives ab=6a+6b, or (a−6)(b−6)=36. The positive factor a−6 is at most √36=6.
3. The possible smaller factors are 1,2,3,4,6, giving (a,b)=(7,42),(8,24),(9,18),(10,15),(12,12).
4. These five pairs all satisfy the factored equation and hence the original equation. No others exist because every positive factor pair of 36 was covered.

</details>
