# Compute a gluing homology group from its specified inclusion map

*Medium · [Topology problems](index.md)*

A closed connected three-manifold Y is obtained by gluing two solid tori along their boundary, with connected collar overlap T². In chosen bases the Mayer–Vietoris map $H_1(T^2;\mathbb Z)\to H_1(U;\mathbb Z)\oplus H_1(V;\mathbb Z)$ is $\begin{pmatrix}1&0\\1&5\end{pmatrix}$, including its sign convention. Return \[order of H₁(Y;Z), rank H₂(Y;Z)\].

```answer
{"answer":{"kind":"vector","expected":["5","0"],"checker_scope":"Only the requested exact result in the specified space, bases and coefficient conventions is checked; a personal argument is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The preceding H₂ groups of both solid tori vanish.

</details>

<details>
<summary>Hint 2</summary>

The overlap H₀ map is injective because all three spaces are connected; then use kernel and cokernel of the displayed matrix.

</details>

<details>
<summary>Worked solution</summary>

The gluing slopes enter homology through the inclusion matrix, not through a picture alone.

1. The relevant exact sequence has 0→H₂(Y)→Z²→Z²→H₁(Y)→Z→Z². The last map is injective, sending the connected overlap generator to the two connected-piece generators with opposite signs.
2. The given matrix has determinant 5, so its kernel over Z is zero. Its entry gcd is 1, so its cokernel is cyclic of order 5.
3. Exactness yields H₂(Y)=0 and H₁(Y)=Z/5. Therefore the requested vector is \[5,0\]. No convention for naming a particular lens space is needed.

</details>
