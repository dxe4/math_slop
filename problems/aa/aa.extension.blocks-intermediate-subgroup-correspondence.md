# Classify blocks through point-stabilizer inclusions

*Hard · [Abstract algebra problems](index.md)*

Let G act transitively on Omega with more than one point, and let H stabilize omega. A nonempty block B has every translate equal to B or disjoint from B. Prove blocks containing omega correspond to subgroups $H\le K\le G$ by B=K\*omega and K=setwise stabilizer of B. Deduce the action is primitive exactly when H is maximal proper.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

An element fixing omega makes its translate of a block intersect that block.

</details>

<details>
<summary>Hint 2</summary>

For the converse, an intersection of two subgroup-orbit translates forces the translating element back into K.

</details>

<details>
<summary>Model proof</summary>

Transitive block structure is exactly the intermediate-subgroup lattice.

1. Given a block B containing omega, its setwise stabilizer K contains H because hB intersects B at omega for h in H. Certainly K\*omega is contained in B. If beta lies in B, transitivity gives g\*omega=beta; then gB intersects B at beta, so gB=B and g belongs to K. Hence B=K\*omega.
2. Conversely let H&lt;=K&lt;=G. If g\*(K\*omega) intersects K\*omega, there are k\_1,k\_2 in K with g\*k\_1\*omega=k\_2\*omega. Thus k\_2 inverse\*g\*k\_1 belongs to H, so g belongs to K and g\*(K\*omega)=K\*omega. Otherwise the translates are disjoint. Its setwise stabilizer is exactly K by the same argument.
3. These constructions are inverse. The singleton block corresponds to H and the whole set to G. Therefore absence of all other blocks, namely primitivity, is equivalent to H being a maximal proper subgroup.

**Self-assessment rubric**

- Prove containment and equality for the orbit of the setwise stabilizer.
- Use a translate intersection to recover the translating element in K.
- Identify the two trivial blocks and make the correspondence exact.

</details>
