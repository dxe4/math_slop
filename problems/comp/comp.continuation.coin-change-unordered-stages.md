# Count unordered change without counting coin order

*Medium · [Computational arithmetic problems](index.md)*

How many multisets of coins of denominations $1,3,4$ have total value $12$? Each denomination is available without limit, and different orders of the same coins are not distinct.

```answer
{"answer":{"kind":"integer","expected":"11","checker_scope":"Only the requested exact finite algorithmic result is checked. No learner program is executed and no unrestricted written proof is automatically certified. This original draft is ineligible for checkpoint evidence pending independent human review."}}
```

<details>
<summary>Hint 1</summary>

Process one denomination at a time, or fix the number of $4$-coins first.

</details>

<details>
<summary>Hint 2</summary>

Once the counts of $4$- and $3$-coins are chosen, the number of $1$-coins is forced.

</details>

<details>
<summary>Worked solution</summary>

Denomination-stage counting avoids the ordered-composition recurrence.

1. Write the coin counts as $a+3b+4c=12$ with $a,b,c\ge0$. The possible $c$ are $0,1,2,3$.
2. For those four values, the allowed $b$ counts are respectively $5,3,2,1$, because $0\le b\le\lfloor(12-4c)/3\rfloor$.
3. Every such pair $(b,c)$ forces exactly one nonnegative $a$, and unique coin counts represent unique multisets.
4. Therefore the count is $5+3+2+1=11$.

</details>
