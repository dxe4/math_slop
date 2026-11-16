# Three-event inclusion–exclusion

*Medium · [Probability problems](index.md)*

In a sample space with $20$ outcomes, $|A|=9$, $|B|=8$, $|C|=7$, $|A\cap B|=3$, $|A\cap C|=2$, $|B\cap C|=2$ and $|A\cap B\cap C|=1$. Find $|A\cup B\cup C|$.

```answer
{"answer":{"kind":"integer","expected":"18","checker_scope":"Checks the exact finite union count only; the set-counting proof is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Track how often an outcome in each possible membership class is counted.

</details>

<details>
<summary>Hint 2</summary>

After adding singleton counts and subtracting pair counts, restore the triple-intersection count once.

</details>

<details>
<summary>Worked solution</summary>

Three-event inclusion–exclusion counts every outcome in the union once.

1. The singleton counts sum to $9+8+7=24$ and the pair counts sum to $3+2+2=7$.
2. An outcome in the triple intersection has net coefficient $3-3=0$ after those operations, so add its count once.
3. The union count is $24-7+1=18$, leaving $2$ of the $20$ outcomes outside the union.

Singletons contribute $24$, pairs subtract $7$, and the triple restores $1$, giving union count $18$.

</details>
