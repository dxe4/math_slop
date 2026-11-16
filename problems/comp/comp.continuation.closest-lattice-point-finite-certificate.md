# Reduce a closest-vector search to a bounded exact certificate

*Hard · [Computational arithmetic problems](index.md)*

For integers $a,b$, let $v=a(7,2)+b(2,5)$. Find the unique $v$ closest in Euclidean distance to $(16,11)$. Return $[a,b,D]$, where $D=\|v-(16,11)\|_2^2$.

```answer
{"answer":{"kind":"vector","expected":["2","1","4"],"checker_scope":"Only the requested exact finite algorithmic result is checked. No learner program is executed and no unrestricted written proof is automatically certified. This original draft is ineligible for checkpoint evidence pending independent human review."}}
```

<details>
<summary>Hint 1</summary>

Find one candidate to bound the minimum distance, then use that bound to restrict both coordinates of every competitor.

</details>

<details>
<summary>Hint 2</summary>

Apply the inverse basis formula to those coordinate ranges; the numerator of an integer coefficient must be a multiple of the determinant.

</details>

<details>
<summary>Worked solution</summary>

A candidate radius and a dual-coordinate integrality condition certify a finite closest-vector search.

1. The candidate $(a,b)=(2,1)$ gives $v=(16,9)$ and squared distance $4$. Any equally good or better point has coordinates $14\le x\le18$ and $9\le y\le13$.
2. The basis determinant is $31$, and its inverse gives $a=(5x-2y)/31$. On the bounded rectangle, the numerator lies between $44$ and $72$.
3. The only multiple of $31$ in that interval is $62$, so every such lattice point has $a=2$. Then $y=4+5b$, and the range $9\le y\le13$ forces $b=1$.
4. Therefore the candidate is the unique lattice point at distance at most $2$, proving the exact result $[2,1,4]$ and excluding every unbounded-search competitor.

</details>
