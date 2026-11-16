# Tensor product of finite cyclic modules

*Difficulty 3 of 5 · [Abstract Algebra Core Practice](index.md) · exercise 8 of 12*

Let $m,n$ be positive integers. Prove that $\mathbb{Z}/m\mathbb{Z}\otimes_{\mathbb{Z}}\mathbb{Z}/n\mathbb{Z}\cong \mathbb{Z}/\gcd(m,n)\mathbb{Z}$ by constructing an explicit bilinear map and using the universal property of the tensor product.

<details>
<summary>Hint 1</summary>

Define a map $\mathbb{Z}/m\times\mathbb{Z}/n\to\mathbb{Z}/d$ by $(a,b)\mapsto ab\bmod d$ where $d=\gcd(m,n)$.

</details>

<details>
<summary>Hint 2</summary>

Show it is well-defined and bilinear, then induce a surjective map from the tensor product.

</details>

<details>
<summary>Hint 3</summary>

Prove the tensor product has at most $d$ elements by observing $1\otimes 1$ generates it and $d(1\otimes 1)=0$.

</details>

<details>
<summary>Worked solution</summary>

Put $d=\gcd(m,n)$ and define $\beta:(\mathbb{Z}/m)\times(\mathbb{Z}/n)\to\mathbb{Z}/d$ by $\beta(\bar a,\bar b)=\overline{ab}$. This is independent of representatives: changing $a$ by $m$ or $b$ by $n$ changes the product by a multiple of $d$. Distributivity proves additivity in each variable, and for every $r\in\mathbb{Z}$, $\beta(r\bar a,\bar b)=\beta(\bar a,r\bar b)=r\beta(\bar a,\bar b)$; hence $\beta$ is balanced and bilinear over $\mathbb{Z}$. The universal property induces $\bar\beta:T=(\mathbb{Z}/m)\otimes_{\mathbb{Z}}(\mathbb{Z}/n)\to\mathbb{Z}/d$ with $\bar\beta(\bar a\otimes\bar b)=\overline{ab}$. Let $t=\bar1\otimes\bar1$. Every simple tensor equals $ab\,t$, so $t$ generates $T$. Both $mt=0$ and $nt=0$; Bézout gives $dt=0$. Thus $\bar k\mapsto kt$ defines a homomorphism $\mathbb{Z}/d\to T$. It is inverse to $\bar\beta$: each composite fixes its generator. This includes $d=1$, when both groups are zero.

**Answer.** $\mathbb{Z}/m\mathbb{Z}\otimes_{\mathbb{Z}}\mathbb{Z}/n\mathbb{Z}\cong \mathbb{Z}/\gcd(m,n)\mathbb{Z}$.

</details>

*Tags: modules, tensor-products, cyclic-modules, universal-property*
