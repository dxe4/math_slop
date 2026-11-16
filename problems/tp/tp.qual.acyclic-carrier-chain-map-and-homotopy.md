# Prove the acyclic-carrier construction and uniqueness theorem

*Hard · [Topology problems](index.md)*

Let K,L be simplicial complexes. To each simplex σ of K assign a nonempty subcomplex Φ(σ)⊂L with vanishing reduced integral homology, and assume Φ(τ)⊂Φ(σ) for every face τ of σ. Prove there is an augmentation-preserving simplicial-chain map $f:C_*(K;\mathbb Z)\to C_*(L;\mathbb Z)$ carried by Φ, meaning f(σ) lies in C\_\*(Φ(σ)). Prove any two such maps are chain homotopic by a homotopy carried by the same Φ. Work with finite chains even if the complexes are infinite.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic verdict, grade or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Choose image vertices first and extend by filling the cycle that is the already-defined image of a boundary.

</details>

<details>
<summary>Hint 2</summary>

For uniqueness, inductively fill f(σ)−g(σ)−D(∂σ); its boundary is zero by the previous homotopy identities.

</details>

<details>
<summary>Model proof</summary>

Acyclic carriers supply all required fillings while face monotonicity keeps every obstruction in the correct subcomplex.

1. Choose for each vertex v a vertex of nonempty Φ(v), defining an augmentation-preserving map in degree zero. Suppose f is defined through degree n−1 and commutes with boundaries there. For an oriented n-simplex σ, f(∂σ) is an (n−1)-cycle because ∂²=0 and lower-dimensional chain identities hold. Its support lies in Φ(σ) by face monotonicity.
2. For n=1 that zero-cycle has augmentation zero, and reduced H₀(Φ(σ))=0 supplies a filling. For n&gt;1 ordinary vanishing H\_{n−1} supplies a filling. Choose a finite n-chain f(σ) in Φ(σ) with boundary f(∂σ), extend linearly and use sign reversal for the other orientation. Induction constructs the desired chain map in every degree.
3. For two carried maps f,g seek D\_n:C\_n(K)→C\_{n+1}(L) with f−g=∂D+D∂. At a vertex f(v)−g(v) is an augmentation-zero cycle in Φ(v), so choose a filling D(v). Having defined D below dimension n, set z=f(σ)−g(σ)−D(∂σ). Its boundary vanishes because ∂D(∂σ)=f(∂σ)−g(∂σ), the lower-degree identity and ∂²=0.
4. Face monotonicity puts all terms of z in Φ(σ). Acyclicity fills z by a finite (n+1)-chain D(σ), completing the induction and the homotopy equation. Infinite complexes cause no infinite sums: each basis simplex and its boundary use finite chains, and the maps extend on the direct-sum chain groups.

**Self-assessment rubric**

- Constructs the chain map simplex by simplex with all boundary cycles supported in the carrier.
- Uses reduced H₀ and augmentation in the lowest-dimensional filling steps.
- Forms the correct homotopy obstruction and verifies it is a cycle by the previous identities.
- Completes carried fillings in all degrees without using infinite chains.

</details>
