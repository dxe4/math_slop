# Recognize a split cyclic algebra by its norm parameter

*Hard · [Abstract algebra problems](index.md)*

Let $L/K$ be cyclic Galois of degree $n$ with generator $\sigma$, and let $b\in K^\times$. The cyclic algebra $A$ is the $K$-vector space $\bigoplus_{i=0}^{n-1}Lu^i$ with $u\ell=\sigma(\ell)u$ and $u^n=b$. Prove $A\cong M_n(K)$ if and only if $b=N_{L/K}(c)$ for some $c\in L^\times$. You may use independence of field automorphisms.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

For a norm parameter, act on the $K$-space $L$ by multiplication and by $T(x)=csigma(x)$.

</details>

<details>
<summary>Hint 2</summary>

Conversely restrict a split algebra's natural $n$-dimensional module to $L$ and use its one-dimensional $L$-space structure.

</details>

<details>
<summary>Model proof</summary>

The twisting operator becomes a semilinear map on a one-dimensional field module.

1. If $b=N(c)$, send $\ell$ to multiplication by $\ell$ on $L$ and $u$ to $T=m_c\sigma$. These operators satisfy $Tm_\ell=m_{\sigma(\ell)}T$ and $T^n=bI$, giving a homomorphism $A\to\operatorname{End}_K(L)$.
2. An operator relation $\sum_i m_{\ell_i}T^i=0$ is a relation among the distinct automorphisms $\sigma^i$, with each extra partial-norm factor nonzero. Independence forces all $\ell_i=0$. The map is injective and hence bijective because both algebras have dimension $n^2$.
3. Conversely suppose $A\cong\operatorname{End}_K(W)$ with $\dim_K W=n$. The embedded field $L$ makes $W$ one-dimensional over $L$. In an $L$-basis the action of $u$ is $x\mapsto c\sigma(x)$ for some nonzero $c$, since $u$ is invertible and satisfies the twisting relation. Its $n$th power is multiplication by $N(c)$ and also by $b$, proving the norm condition.

**Self-assessment rubric**

- Construct the twisting operator and check both cyclic algebra relations.
- Prove the operator representation injective before invoking equal dimensions.
- Use the one-dimensional L-module structure to recover the norm parameter.

</details>
