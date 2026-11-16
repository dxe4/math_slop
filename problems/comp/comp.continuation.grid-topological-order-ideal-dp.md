# Count topological orders by valid row-prefix states

*Hard · [Computational arithmetic problems](index.md)*

A DAG has vertices $(i,j)$ for $1\le i,j\le3$, edges $(i,j)\to(i,j+1)$ when $j<3$, and edges $(i,j)\to(i+1,j)$ when $i<3$. How many topological orders does it have?

```answer
{"answer":{"kind":"integer","expected":"42","checker_scope":"Only the requested exact finite algorithmic result is checked. No learner program is executed and no unrestricted written proof is automatically certified. This original draft is ineligible for checkpoint evidence pending independent human review."}}
```

<details>
<summary>Hint 1</summary>

An initial set in a topological order contains row prefixes whose lengths cannot increase downwards.

</details>

<details>
<summary>Hint 2</summary>

Count valid states $(a,b,c)$ with $3\ge a\ge b\ge c\ge0$ by removing one legally last chosen cell.

</details>

<details>
<summary>Worked solution</summary>

Order-ideal dynamic programming counts extensions while retaining both row and column dependencies.

1. Use state $(a,b,c)$ for chosen prefix lengths in the three rows. Valid states satisfy $3\ge a\ge b\ge c\ge0$, and $F(0,0,0)=1$.
2. For each nonzero state, sum $F$ over predecessors obtained by decreasing one positive coordinate while retaining those inequalities. At size $5$, this gives $F(3,2,0)=5$, $F(3,1,1)=6$, $F(2,2,1)=5$.
3. At size $6$, the values are $F(3,3,0)=5$, $F(3,2,1)=16$, $F(2,2,2)=5$. Hence $F(3,3,1)=21$ and $F(3,2,2)=21$.
4. The last two transitions give $F(3,3,2)=42$ and $F(3,3,3)=42$. Every legal cell sequence is exactly one topological order.

</details>
