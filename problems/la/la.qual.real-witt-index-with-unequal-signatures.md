# Separate positive index from isotropic index

*Medium · [Linear algebra problems](index.md)*

On $\mathbb R^5$ let $q=x_1^2+x_2^2-x_3^2-x_4^2-x_5^2$. Return \[largest dimension of a positive-definite subspace, largest dimension of a totally isotropic subspace\]. The associated bilinear form is the diagonal polarization of q.

```answer
{"answer":{"kind":"vector","expected":["2","2"],"checker_scope":"Only the requested finite invariant or rational coordinate result is checked; form classification and reasoning are not automatically certified."}}
```

<details>
<summary>Hint 1</summary>

Projection onto the two positive coordinates is injective on either kind of subspace.

</details>

<details>
<summary>Hint 2</summary>

The positive coordinate plane gives one lower bound; pair two positive directions with two negative directions for the other.

</details>

<details>
<summary>Worked solution</summary>

The same coordinate projection gives two bounds with different attaining subspaces.

1. A positive-definite subspace has no nonzero vector with both positive coordinates zero. Thus its dimension is at most two, attained by $\operatorname{span}(e_1,e_2)$.
2. A totally isotropic subspace also projects injectively onto those coordinates: a vector in its projection kernel has $q=-x_3^2-x_4^2-x_5^2=0$ and is zero.
3. The span of $e_1+e_3$ and $e_2+e_4$ is totally isotropic and has dimension two, giving the ordered pair $[2,2]$.

</details>
