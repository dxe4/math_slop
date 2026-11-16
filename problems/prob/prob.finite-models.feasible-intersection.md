# Find every feasible event intersection

*Hard · [Probability problems](index.md)*

Across all probability spaces with events satisfying $P(A)=2/3$ and $P(B)=3/4$, find the complete interval of possible values of $P(A\cap B)$.

```answer
{"answer":{"kind":"interval","expected":"[5/12, 2/3]","checker_scope":"Exact answer for the stated probability model only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

An intersection cannot exceed either event, and its union cannot have probability greater than one.

</details>

<details>
<summary>Hint 2</summary>

To show every allowed value is possible, assign masses to the four disjoint regions determined by the events.

</details>

<details>
<summary>Worked solution</summary>

Nonnegativity of all four region masses is both necessary and sufficient.

1. Write $t=P(A\cap B)$. The intersection bounds give $t\le\min(2/3,3/4)=2/3$.
2. From $P(A\cup B)=2/3+3/4-t\le1$, we get $t\ge5/12$.
3. For any $t$ in that interval, assign masses $t$, $2/3-t$, $3/4-t$ and $t-5/12$ to the four regions.
4. These masses are nonnegative and sum to one, so a four-point probability model realizes that value.
5. Therefore the exact feasible interval is $[5/12,2/3]$, including both endpoints.

</details>
