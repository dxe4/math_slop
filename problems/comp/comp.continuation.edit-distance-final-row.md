# Compute a complete prefix-distance row with unit edit costs

*Medium · [Computational arithmetic problems](index.md)*

Insertion, deletion and substitution each cost $1$, and swapping is not an allowed operation. Return the edit distances from the word $\mathtt{ABCA}$ to the five prefixes $\mathtt{\varepsilon},\mathtt{A},\mathtt{AC},\mathtt{ACB},\mathtt{ACBA}$ in that order.

```answer
{"answer":{"kind":"vector","expected":["4","3","2","2","2"],"checker_scope":"Only the requested exact finite algorithmic result is checked. No learner program is executed and no unrestricted written proof is automatically certified. This original draft is ineligible for checkpoint evidence pending independent human review."}}
```

<details>
<summary>Hint 1</summary>

Use a table indexed by source and target prefix lengths, with empty-prefix boundary values.

</details>

<details>
<summary>Hint 2</summary>

At each cell compare deletion, insertion and a diagonal match or substitution; do not treat a swap as one step.

</details>

<details>
<summary>Worked solution</summary>

The prefix table retains the best way to reach each partial alignment.

1. Let $D(i,j)$ be the distance between the first $i$ source and first $j$ target letters. Use boundaries $D(i,0)=i$, $D(0,j)=j$.
2. The recurrence takes the minimum of $D(i-1,j)+1$, $D(i,j-1)+1$, and $D(i-1,j-1)+[\text{letters differ}]$.
3. For target $\mathtt{ACBA}$, the rows after source prefixes $\mathtt A$, $\mathtt{AB}$ and $\mathtt{ABC}$ are $[1,0,1,2,3]$, $[2,1,1,1,2]$ and $[3,2,1,2,2]$.
4. The final row is $[4,3,2,2,2]$. In particular a transposition cannot be charged as one edit.

</details>
