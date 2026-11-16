# Separate Hom and Ext sources after a coefficient change

*Medium · [Topology problems](index.md)*

Let $X$ be a connected finite CW complex with $H_1(X;\mathbb{Z})=\mathbb{Z}/4$ and $H_2(X;\mathbb{Z})=\mathbb{Z}/6$. Return \[order of H²(X;Z), dimension of H²(X;F₂)\]. Use the universal coefficient theorem; only these homology degrees matter.

```answer
{"answer":{"kind":"vector","expected":["4","2"],"checker_scope":"Only the requested exact result in the specified space, bases and coefficient conventions is checked; a personal argument is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Integrally Hom(Z/6,Z)=0 and Ext(Z/4,Z)=Z/4.

</details>

<details>
<summary>Hint 2</summary>

Over F₂, both Hom(Z/6,F₂) and Ext(Z/4,F₂) have dimension one.

</details>

<details>
<summary>Worked solution</summary>

The same cohomological degree can receive contributions from two adjacent homology degrees.

1. The integral degree-two universal coefficient sequence has left term Ext(Z/4,Z)=Z/4 and right term Hom(Z/6,Z)=0. Thus H²(X;Z)=Z/4, of order 4.
2. With F₂ coefficients in cohomology, the left Ext group is F₂/4F₂=F₂. The right Hom group is the subgroup of F₂ annihilated by 6, also F₂.
3. The sequence is an exact sequence of F₂ vector spaces, so dimensions add and dim H²(X;F₂)=2. The vector is \[4,2\]; no canonical splitting of the integral universal coefficient sequence was assumed.

</details>
