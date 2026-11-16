# Compute simplicial homology after deleting one triangular face

*Medium · [Topology problems](index.md)*

Let $K$ contain every vertex and edge of a tetrahedron with vertices 0,1,2,3, but only the triangles \[0,1,2\], \[0,1,3\], \[0,2,3\]. It has no three-simplex. Return \[rank H₁(K;Z), rank H₂(K;Z)\], with each simplex oriented by increasing vertex order.

```answer
{"answer":{"kind":"vector","expected":["0","0"],"checker_scope":"Only the requested exact result in the specified space, bases and coefficient conventions is checked; a personal argument is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The omitted face \[1,2,3\] leaves a cone with apex 0 over its triangular boundary.

</details>

<details>
<summary>Hint 2</summary>

Alternatively compare the three independent triangle boundaries with the cycle rank of the complete one-skeleton.

</details>

<details>
<summary>Worked solution</summary>

Keeping the one-skeleton does not keep its cycles in homology once the three triangular disks fill them.

1. The complex is the simplicial cone from vertex 0 on the cycle with edges \[1,2\], \[1,3\], \[2,3\]. Straight-line contraction of this cone to its apex makes it contractible.
2. At chain level the one-skeleton has cycle rank 6−4+1=3. The three triangle boundaries are independent because each has its own edge opposite 0 with coefficient ±1. They therefore span the integral cycle group: solving for those opposite-edge coefficients removes every cycle.
3. Thus H₁=0 and H₂=0. The absence of a three-simplex does not create an H₂ class because the three available two-simplex boundaries are independent. The vector is \[0,0\].

</details>
