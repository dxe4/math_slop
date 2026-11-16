# Prove a finite-field trace is onto before counting its kernel

*Medium · [Abstract algebra problems](index.md)*

For $L=\mathbb F_{64}$ and K=F4, find the number of x in L with Tr\_(L/K)(x)=0. The trace is x+x^4+x^16.

```answer
{"answer":{"kind":"integer","expected":"16","checker_scope":"Exact requested finite invariant only. Graduate algebra reasoning, classification hypotheses and proofs are supplied for personal study and are not automatically certified. This new skill does not expand any existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

The trace map is K-linear.

</details>

<details>
<summary>Hint 2</summary>

On the subfield K, its three equal terms simplify using characteristic two.

</details>

<details>
<summary>Worked solution</summary>

A visible nonzero restriction proves surjectivity rather than assuming every trace formula is nonzero.

1. For x in F4, x^4=x and x^16=x, so the trace equals 3x=x in characteristic two. It is therefore onto K.
2. As a K-linear map from a three-dimensional space to a one-dimensional space, it has a two-dimensional kernel.
3. The kernel has 4^2=16 elements, including zero.

</details>
