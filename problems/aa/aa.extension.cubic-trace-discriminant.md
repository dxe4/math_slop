# Compute a trace pairing rather than a coefficient-extraction form

*Medium · [Abstract algebra problems](index.md)*

For L=Q(alpha), alpha^3=2, find the determinant of the trace Gram matrix $G_{ij}=\operatorname{Tr}_{L/\mathbb Q}(\alpha^{i+j})$, indexed i,j=0,1,2.

```answer
{"answer":{"kind":"integer","expected":-108,"checker_scope":"Exact requested field invariant only; no separability or primitive-element proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

The basic traces of alpha and alpha squared vanish.

</details>

<details>
<summary>Hint 2</summary>

Use alpha cubed equals two before taking higher traces.

</details>

<details>
<summary>Worked solution</summary>

The field trace form supplies the polynomial basis discriminant.

1. The traces are Tr(1)=3,Tr(alpha)=Tr(alpha^2)=0. Also Tr(alpha^3)=Tr(2)=6 and Tr(alpha^4)=Tr(2alpha)=0.
2. Thus G has rows\[3,0,0\],\[0,0,6\],\[0,6,0\].
3. Its determinant is3\*(0-36)=-108.

</details>
