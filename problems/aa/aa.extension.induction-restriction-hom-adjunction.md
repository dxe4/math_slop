# Construct Frobenius reciprocity as an explicit adjunction

*Hard · [Abstract algebra problems](index.md)*

Let $H\le G$ be finite groups, $U$ a complex $H$-module and $V$ a complex $G$-module. With $\operatorname{Ind}_H^G U=\mathbf C[G]\otimes_{\mathbf C[H]}U$, construct inverse linear isomorphisms $\operatorname{Hom}_G(\operatorname{Ind}_H^G U,V)\cong\operatorname{Hom}_H(U,\operatorname{Res}_H^G V)$. Deduce the corresponding equality of character inner products.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Evaluate a $G$-map on $1otimes u$.

</details>

<details>
<summary>Hint 2</summary>

From an $H$-map $phi$, define $gotimes umapsto gphi(u)$ and check the tensor relation explicitly.

</details>

<details>
<summary>Model proof</summary>

The tensor relation is exactly what makes evaluation and extension inverse operations.

1. If $F$ is $G$-linear, put $\phi(u)=F(1\otimes u)$. For $h\in H$, $\phi(hu)=F(h\otimes u)=h\phi(u)$, so this is an $H$-map.
2. Given such a $\phi$, define $F(g\otimes u)=g\phi(u)$ and extend linearly. The relation $gh\otimes u=g\otimes hu$ is respected because $gh\phi(u)=g\phi(hu)$; the resulting map is $G$-linear.
3. Both composites are identities by evaluation and the spanning tensors $g\otimes u$. Taking dimensions gives the character inner-product identity, using complete reducibility to identify Hom dimensions with multiplicity inner products.

**Self-assessment rubric**

- Show evaluation at the unit tensor is an H-equivariant map.
- Verify the proposed extension respects the tensor relation and is G-equivariant.
- Prove the maps are inverse and justify the resulting character identity.

</details>
