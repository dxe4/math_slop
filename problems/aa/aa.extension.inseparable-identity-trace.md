# Reduce the extension degree in the base characteristic

*Easy · [Abstract algebra problems](index.md)*

Let K=F3(t) and L=K(u), where u^3=t and \[L:K\]=3. The trace of1 is the trace of the identity K-linear map on L. Find $Tr_{L/K}(1)$.

```answer
{"answer":{"kind":"integer","expected":0,"checker_scope":"Exact requested field invariant only; no separability or primitive-element proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

The identity matrix has one diagonal entry for each basis vector.

</details>

<details>
<summary>Hint 2</summary>

Its integer trace is read in characteristic three.

</details>

<details>
<summary>Worked solution</summary>

A trace value lies in the base field, so the characteristic matters.

1. The identity acts on a three-dimensional K-vector space.
2. Its matrix trace is1+1+1.
3. This is zero in characteristic three.

</details>
