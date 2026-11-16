# Compute the torsion cohomology class of a projective plane

*Medium · [Topology problems](index.md)*

Using $H_0(\mathbb{RP}^2;\mathbb Z)=\mathbb Z$, H₁=Z/2 and H₂=0, return \[rank H¹(RP²;Z), order of H²(RP²;Z)\]. The second group is finite; use integral cohomology throughout.

```answer
{"answer":{"kind":"vector","expected":["0","2"],"checker_scope":"Only the requested exact result in the specified space, bases and coefficient conventions is checked; a personal argument is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The universal coefficient sequence has Hom(H\_k,Z) on the right and Ext(H\_{k−1},Z) on the left.

</details>

<details>
<summary>Hint 2</summary>

Hom(Z/2,Z)=0 but Ext(Z/2,Z)=Z/2.

</details>

<details>
<summary>Worked solution</summary>

Integral cohomology torsion can occupy the degree above its homology source.

1. For degree one, Ext(H₀,Z)=0 because H₀ is free, and Hom(H₁,Z)=0 because Z has no nonzero element of order two. Therefore H¹=0.
2. For degree two, Hom(H₂,Z)=0 and Ext(H₁,Z)=Ext(Z/2,Z)=Z/2. Hence H²=Z/2 even though H₂=0.
3. The requested vector is \[0,2\]. Replacing integral coefficients with a field would change the computation and would not answer this question.

</details>
