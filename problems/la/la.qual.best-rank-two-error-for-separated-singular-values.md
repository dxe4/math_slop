# Prove a low-rank approximation error is sharp

*Medium · [Linear algebra problems](index.md)*

For $A=\operatorname{diag}(5,3,1)$ over $\mathbb R$, find the minimum squared Frobenius error $\|A-B\|_F^2$ among matrices B of rank at most two.

```answer
{"answer":{"kind":"integer","expected":1,"checker_scope":"Only the requested finite invariant or rational coordinate result is checked; form classification and reasoning are not automatically certified."}}
```

<details>
<summary>Hint 1</summary>

The truncated diagonal matrix gives an upper bound.

</details>

<details>
<summary>Hint 2</summary>

Any rank-at-most-two B has a unit kernel vector, on which the error is at least the least stretching of A.

</details>

<details>
<summary>Worked solution</summary>

An explicit approximation and a universal kernel bound meet.

1. Choose $B=\operatorname{diag}(5,3,0)$; the squared Frobenius error is one.
2. For any allowable B choose a unit v in its kernel. Then $\|(A-B)v\|=\|Av\|\ge1$.
3. The Frobenius norm dominates the induced Euclidean norm, so its squared error is at least one. This proves the candidate attains the exact minimum.

</details>
