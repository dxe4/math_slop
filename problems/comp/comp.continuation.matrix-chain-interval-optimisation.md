# Optimise matrix-chain arithmetic over every split

*Hard · [Computational arithmetic problems](index.md)*

Matrices $A_1,\ldots,A_6$ have dimensions $5\times10$, $10\times3$, $3\times12$, $12\times5$, $5\times50$, $50\times6$. Multiplying a $p\times q$ matrix by a $q\times r$ matrix costs $pqr$ scalar multiplications. Find the minimum cost of computing $A_1\cdots A_6$ by parenthesisation without changing factor order.

```answer
{"answer":{"kind":"integer","expected":"2010","checker_scope":"Only the requested exact finite algorithmic result is checked. No learner program is executed and no unrestricted written proof is automatically certified. This original draft is ineligible for checkpoint evidence pending independent human review."}}
```

<details>
<summary>Hint 1</summary>

Use an interval state whose split adds the two subproblem costs and the dimensions of their resulting product.

</details>

<details>
<summary>Hint 2</summary>

The final optimal split need not be the cheapest adjacent multiplication performed first; evaluate all interval lengths.

</details>

<details>
<summary>Worked solution</summary>

An interval recurrence compares every legal multiplication tree, not just a local greedy merge.

1. With dimension list $p=[5,10,3,12,5,50,6]$, use $M(i,j)=\min_{i\le k<j}(M(i,k)+M(k+1,j)+p_{i-1}p_kp_j)$ and $M(i,i)=0$.
2. The length-two costs are $150,360,180,3000,1500$; length-three costs are $330,330,930,1860$.
3. The length-four costs are $405,2430,1770$, and length-five costs are $1655,1950$. These determine all possible final splits.
4. The five final costs are $2250,2010,2550,2055,3155$. Their minimum is $2010$, attained by splitting after $A_2$ and using the corresponding optimal subintervals.

</details>
