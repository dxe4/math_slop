# Derive the one-dimensional Mackey irreducibility criterion

*Hard · [Abstract algebra problems](index.md)*

Let $H\le G$ be finite and $\lambda:H\to\mathbf C^\times$ a linear character. Prove $\operatorname{Ind}_H^G\lambda$ is irreducible if and only if for each $g\notin H$, the characters $h\mapsto\lambda(h)$ and $h\mapsto\lambda(g^{-1}hg)$ differ on $H\cap gHg^{-1}$. Derive the double-coset Hom formula rather than assuming the criterion. You may use Frobenius reciprocity and complete reducibility.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Decompose $mathbf C[G]$ as a sum of the subspaces supported on double cosets $HgH$.

</details>

<details>
<summary>Hint 2</summary>

Restrict the induced module to $H$, identify each piece as induction from $Hcap gHg^{-1}$, and compute its Hom against $lambda$.

</details>

<details>
<summary>Model proof</summary>

Double-coset pieces count self-intertwiners, with the identity piece contributing exactly one.

1. For representatives $g$ of $H\backslash G/H$, write $J_g=H\cap gHg^{-1}$ and $\lambda^g(h)=\lambda(g^{-1}hg)$. The map $h\otimes z\mapsto hg\otimes z$ identifies the $HgH$-supported summand of the restricted induced module with $\operatorname{Ind}_{J_g}^H\lambda^g$; the balancing relation follows from $jg=g(g^{-1}jg)$.
2. Frobenius reciprocity, applied to each double-coset summand, yields $\dim\operatorname{End}_G(\operatorname{Ind}_H^G\lambda)=\sum_{HgH}\dim\operatorname{Hom}_{J_g}(\lambda|_{J_g},\lambda^g)$. For linear characters each summand is one if they agree and zero otherwise. The identity coset contributes one.
3. A completely reducible representation is irreducible exactly when its endomorphism algebra has dimension one, since that dimension is the sum of squared constituent multiplicities. Hence every other double-coset summand must vanish. Replacing a representative by $h_1gh_2$ does not change the agreement condition, giving precisely the criterion for every $g\notin H$.

**Self-assessment rubric**

- Construct and balance the restricted module's individual double-coset summands.
- Derive the self-intertwiner sum and calculate the contribution of each pair of linear characters.
- Use complete reducibility and representative invariance to obtain both directions of the criterion.

</details>
