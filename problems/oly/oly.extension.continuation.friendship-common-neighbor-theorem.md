# Prove a universal friend from unique common neighbors

*Hard · [Original olympiad-style problems](index.md)*

A finite simple graph on at least $3$ vertices has exactly one common neighbor for every pair of distinct vertices. Prove it has a vertex adjacent to all others. You may use the spectral theorem for a real symmetric matrix.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

Nonadjacent vertices have equal degree: map each neighbor of one to its unique common neighbor with the other.

</details>

<details>
<summary>Hint 2</summary>

If there were no universal vertex, show the complement is connected and hence the graph regular. Its adjacency matrix square then has every off-diagonal entry one.

</details>

<details>
<summary>Model proof</summary>

Combine a graph injection, complement structure and an integer spectral obstruction.

1. For nonadjacent u,v, send each x in the neighborhood of u to the unique common neighbor of x and v. This lies in the neighborhood of v. Two distinct x with the same image would have both u and that image as common neighbors, impossible since u is not adjacent to v. Thus the map is injective, and reversing roles proves equal degrees.
2. If the complement were disconnected, any complement component with at least two vertices would leave at most one vertex outside: two vertices within it have every outside vertex as a common original neighbor. That outside singleton would be universal. If all components were singletons the original graph would be complete and also have a universal vertex.
3. So under a no-universal assumption the complement is connected. Along its edges original degrees are equal by the first step, forcing regular degree r, with $r\ge2$.
4. For adjacency matrix A, the common-neighbor hypothesis gives $A^2=J+(r-1)I$. Row sums yield $n=r^2-r+1$. On the all-ones vector A has eigenvalue r; on its orthogonal complement the eigenvalues are positive or negative $\sqrt{r-1}$.
5. The zero trace gives $r+k\sqrt{r-1}=0$ for an integer k. Since r is positive, k is nonzero and the square root is rational, hence an integer t. Then t divides r, while $r=t^2+1$, forcing t one.
6. Thus r is two and n three, making the graph a triangle with universal vertices, a contradiction. Therefore the asserted universal vertex exists.

**Self-assessment rubric**

- Prove equal degrees for nonadjacent vertices with an actually injective map.
- Exclude a disconnected complement under the no-universal assumption.
- Derive regularity and the exact adjacency-square identity.
- Use trace and the rational square-root argument to reach the contradiction.

</details>
