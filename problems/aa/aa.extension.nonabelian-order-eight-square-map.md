# Classify the two nonabelian order-eight extensions by a quadratic refinement

*Hard · [Abstract algebra problems](index.md)*

Classify nonabelian groups of order eight using G/Z(G)=F2^2 and Z(G)=&lt;z&gt; of order two. Define $q(v)$ by the square of a lift being z^(q(v)), and b by commutators. Prove q is well-defined, q(u+v)=q(u)+q(v)+b(u,v), and the two isomorphism types are D8 and Q8, distinguished by whether q has three zeros or one.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Use the prime-cube structure theorem and the centrality of commutators.

</details>

<details>
<summary>Hint 2</summary>

Choose a quotient basis; the squares of its two lifts determine all four q values.

</details>

<details>
<summary>Model proof</summary>

The square map records the extension information that the central quotient alone loses.

1. Prime-cube structure gives Z(G)=\[G,G\]=&lt;z&gt; and elementary abelian quotient of dimension two. Changing a lift by z does not change its square, since z is central of order two, so q is well-defined. The class-two square formula gives the displayed polarization identity; its sign is irrelevant modulo two.
2. Choose basis u,v with b(u,v)=1, which is possible because a nonzero vector in the radical would lift to an additional central coset. In that basis q(a,b)=a\*b+alpha\*a+beta\*b. If alpha=beta=1, only the zero vector has q=0. In the other three cases there are three zeros, and the two nonzero zeros form a basis.
3. In the three-zero case choose lifts a,b of those two zero vectors. They are involutions with \[a,b\]=z, so ab has order four and they generate the dihedral group of order eight. In the one-zero case choose any basis lifts a,b; both squares equal z and they anticommute up to z, giving the quaternion relations and Q8. These presentations account for all eight elements, proving exactly two types and the stated distinction.

**Self-assessment rubric**

- Control lift changes and derive the square-map identity.
- Identify the nondegenerate commutator form and exhaust the two possible zero-count types.
- Recover D8 or Q8 from suitable lifts and prove the classification exhaustive.

</details>
