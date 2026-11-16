# Prove the suspension homology shift with reduced groups

*Hard · [Topology problems](index.md)*

For a nonempty CW complex X prove $\widetilde H_n(\Sigma X;\mathbb Z)\cong\widetilde H_{n-1}(X;\mathbb Z)$ for n≥1, and prove ΣX is connected. Do not assume X is connected. Define the unreduced suspension as two cones glued along X and explain open neighborhoods suitable for Mayer–Vietoris.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic verdict, grade or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Thicken the two cones slightly across the equator so the open overlap retracts to X.

</details>

<details>
<summary>Hint 2</summary>

Use reduced Mayer–Vietoris, especially at n=1 where reduced H₀(X) may be nonzero.

</details>

<details>
<summary>Model proof</summary>

The reduced sequence includes exactly the extra circles created by suspending a disconnected space.

1. View ΣX as X×\[−1,1\] with the two ends collapsed separately. Take U to be the portion below height 1/2 including the south vertex, and V the portion above height −1/2 including the north vertex. These are open in the suspension and each contracts to its cone vertex. Their overlap X×(−1/2,1/2) deformation retracts to X.
2. The reduced Mayer–Vietoris sequence has zero terms from U and V on both sides of the connecting map. It therefore gives an isomorphism H̃\_n(ΣX)→H̃\_{n−1}(X) for every n≥1, including the reduced degree-zero term when n=1.
3. For any x∈X its suspension arc joins the two cone vertices. Every point of ΣX is on such an arc, so all points lie in the same path component, even if X was disconnected. Thus H̃₀(ΣX)=0.
4. For example if X has c finite path components with no internal homology, then H̃₀(X)=Z^{c−1}, so H₁(ΣX)=Z^{c−1}. Using unreduced H₀(X) would incorrectly add one generator. The isomorphism is natural because it is the Mayer–Vietoris connecting map for these functorial cone neighborhoods.

**Self-assessment rubric**

- Specifies open contractible neighborhoods with overlap homotopy equivalent to X.
- Uses reduced Mayer–Vietoris to derive the shift including degree n=1.
- Proves connectedness without assuming connected X and explains the reduced-degree-zero role.

</details>
