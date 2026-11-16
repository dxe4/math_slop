# Classify based maps of tori by equivariant straight-line homotopy

*Hard · [Topology problems](index.md)*

Prove based homotopy classes of maps $T^n\to T^m$ correspond bijectively to integer m×n matrices, via induced maps on fundamental groups. All tori are Rᵏ/Zᵏ based at zero. Construct the homotopy to the linear torus map and check it descends to the quotient.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic verdict, grade or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Lift f composed with Rⁿ→Tⁿ to a map Rⁿ→Rᵐ sending 0 to 0.

</details>

<details>
<summary>Hint 2</summary>

For z∈Zⁿ compare the lifts at x+z and x; their difference is a constant integer vector determined by the induced map.

</details>

<details>
<summary>Model proof</summary>

Equivariance of a universal lift allows a linear homotopy even when f is nonlinear.

1. For a based f, the map f∘q\_n from simply connected Rⁿ lifts to F:Rⁿ→Rᵐ with F(0)=0. For z∈Zⁿ the difference F(x+z)−F(x) is integer-valued and continuous in connected x, hence constant. Following a path from 0 to z shows this constant is A z, where A is the integer matrix of f\_\*.
2. The straight-line homotopy H̃(x,t)=(1−t)F(x)+tAx obeys H̃(x+z,t)=H̃(x,t)+Az. Since Az is integral, reducing modulo Zᵐ descends to a well-defined continuous H:Tⁿ×\[0,1\]→Tᵐ. It is based because H̃(0,t)=0, starts at f and ends at the linear map induced by A.
3. Every integer matrix A defines such a linear torus map and induces that same homomorphism of free abelian fundamental groups, proving surjectivity of the correspondence.
4. Based homotopic maps induce identical fundamental-group homomorphisms. Conversely two maps with the same matrix both have based homotopies to the same linear map. Thus the correspondence is injective as well as surjective.

**Self-assessment rubric**

- Constructs the based universal lift and proves its lattice translation law equals the induced matrix.
- Checks the straight-line homotopy is lattice-equivariant and fixes the basepoint.
- Proves both realization of every matrix and equivalence exactly when the matrices agree.

</details>
