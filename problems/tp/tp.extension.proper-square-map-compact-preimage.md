# Keep both branches of a compact preimage

*Medium · [Topology problems](index.md)*

For the usual continuous map $f:\mathbb R\to\mathbb R$, $f(x)=x^2$, find $f^{-1}([1,4])$ as a closed interval union.

```answer
{"answer":{"kind":"interval","expected":"[-2,-1] U [1,2]","checker_scope":"Only the requested finite set, interval or count in the stated topology is checked; a personal argument is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The lower bound excludes inputs near zero.

</details>

<details>
<summary>Hint 2</summary>

The square condition has both negative and positive branches.

</details>

<details>
<summary>Worked solution</summary>

Compact preimage geometry is not the image of a single monotone branch.

1. The condition is $1\le x^2\le4$, equivalently $1\le|x|\le2$.
2. Thus the negative branch is $[-2,-1]$ and the positive branch is $[1,2]$.
3. Their union is the requested compact preimage, consistent with properness of the square map.

</details>
