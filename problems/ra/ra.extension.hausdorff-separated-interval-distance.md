# Compare both directed distances in a Hausdorff metric

*Easy · [Real analysis](index.md)*

For compact real sets define $d_H(A,B)=\max(\sup_{a\in A}\operatorname{dist}(a,B),\sup_{b\in B}\operatorname{dist}(b,A))$. Find d\_H(\[0,1\],\[2,4\]).

```answer
{"answer":{"kind":"integer","expected":3,"checker_scope":"Exact requested metric observation or finite covering count only; no completeness proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

The two directed worst distances need not agree.

</details>

<details>
<summary>Hint 2</summary>

Use the farther endpoint of each interval in its direction.

</details>

<details>
<summary>Worked solution</summary>

Hausdorff distance must control both set inclusions up to a common error.

1. From A=\[0,1\] to B=\[2,4\], the farthest point is zero, at distance two.
2. From B to A, the farthest point is four, at distance three.
3. The maximum of the two directed distances is three.

</details>
