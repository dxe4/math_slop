# Decompose the six-edge permutation representation

*Medium · [Abstract algebra problems](index.md)*

For $S_4$, use conjugacy classes $1,(12),(12)(34),(123),(1234)$ with sizes $1,6,3,8,6$. Their irreducible character rows are $\mathbf1=(1,1,1,1,1)$, $\mathrm{sgn}=(1,-1,1,1,-1)$, $V=(3,1,-1,0,-1)$, $V\otimes\mathrm{sgn}=(3,-1,-1,0,1)$ and $W=(2,0,2,-1,0)$. Determine the multiplicities, in this order, in the permutation representation on the six unordered two-element subsets of $\{1,2,3,4\}$.

```answer
{"answer":{"kind":"vector","expected":["1","0","1","0","1"],"checker_scope":"Only the requested exact character invariant is checked; no written argument is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

The permutation character is the number of fixed two-element subsets.

</details>

<details>
<summary>Hint 2</summary>

Take the class-size-weighted character inner products, dividing by $24$.

</details>

<details>
<summary>Worked solution</summary>

Fixed subsets determine the character, and orthogonality extracts its multiplicities.

1. The fixed-subset counts are $(6,2,2,0,0)$: a transposition fixes its own pair and the complementary pair, and a double transposition fixes its two cycles.
2. The inner products with $\mathbf1,\mathrm{sgn},V,V\otimes\mathrm{sgn},W$ have numerators $24,0,24,0,24$, respectively.
3. Dividing by $24$ gives $[1,0,1,0,1]$. The dimensions also check: $1+3+2=6$.

</details>
