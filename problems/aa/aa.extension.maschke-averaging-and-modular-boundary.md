# Prove semisimplicity and exhibit the characteristic obstruction

*Hard · [Abstract algebra problems](index.md)*

Let $G$ be finite and let $k$ be a field with $\operatorname{char}k\nmid|G|$. Prove every subrepresentation of a finite-dimensional $kG$-module has an invariant complement. Then in characteristic $p$, construct a two-dimensional representation of $C_p$ with an invariant line having no invariant complement.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Average a linear projection onto the subrepresentation.

</details>

<details>
<summary>Hint 2</summary>

For the boundary case let a generator act by a nontrivial unipotent Jordan block.

</details>

<details>
<summary>Model proof</summary>

Averaging splits submodules precisely when division by the group order is available.

1. For $W\subseteq V$, choose an arbitrary linear projection $P:V\to W$ that is the identity on $W$. The average $P_G=|G|^{-1}\sum_g gPg^{-1}$ is equivariant, has image in $W$ and restricts to the identity on $W$. Thus $V=W\oplus\ker P_G$.
2. In characteristic $p$, let a generator of $C_p$ act by $T=\begin{pmatrix}1&1\\0&1\end{pmatrix}$. Since $(T-I)^2=0$, $T^p=I$. The line $ke_1$ is invariant.
3. An invariant complementary line would be spanned by $(a,b)$ with $b\ne0$. Since $T$ has only eigenvalue one, invariance would require $T(a,b)=(a,b)$, forcing $b=0$. This contradiction establishes the obstruction.

**Self-assessment rubric**

- Construct an equivariant projection and prove its kernel is a complement.
- Verify the unipotent matrix defines a representation in characteristic p.
- Rule out an invariant complementary line rather than merely observing averaging fails.

</details>
