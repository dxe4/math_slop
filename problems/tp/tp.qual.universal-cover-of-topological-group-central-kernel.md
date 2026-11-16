# Lift a topological group structure and prove its kernel is central

*Hard · [Topology problems](index.md)*

Let G be a connected locally path-connected semilocally simply connected Hausdorff topological group, with identity e. For its based universal cover $p:(\widetilde G,\widetilde e)\to(G,e)$, construct a topological group structure making p a homomorphism and prove ker p is discrete and central. Use lifting rather than assuming that a universal cover is already a group.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic verdict, grade or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Lift multiplication from G̃×G̃ and inversion from G̃ using simple connectedness and chosen identity values.

</details>

<details>
<summary>Hint 2</summary>

Prove the group laws by uniqueness of lifts on connected product domains; then conjugate a fixed kernel point along the connected covering space.

</details>

<details>
<summary>Model proof</summary>

Uniqueness of based lifts turns algebraic identities downstairs into identities upstairs.

1. The product G̃×G̃ is connected and simply connected. Its continuous map m∘(p×p) to G therefore has a unique lift m̃ to G̃ sending (ẽ,ẽ) to ẽ, by the based covering lifting criterion. Similarly inversion composed with p lifts to a continuous map ĩ fixing ẽ. These are candidate multiplication and inversion, and by construction p preserves them.
2. The maps x↦m̃(ẽ,x) and x↦m̃(x,ẽ) lift p and agree with the identity at ẽ, so they are the identity. On the connected triple product, the two associative composites lift the same associative product in G and agree at (ẽ,ẽ,ẽ); uniqueness of lifts proves associativity.
3. The maps x↦m̃(x,ĩ(x)) and x↦m̃(ĩ(x),x) lift the constant map e and equal ẽ at ẽ. Since G̃ is connected and a fiber of a covering is discrete, both maps are constantly ẽ. Thus ĩ gives two-sided inverses and the continuous operations make G̃ a topological group.
4. The kernel p⁻¹(e) is discrete by an evenly covered identity neighborhood. For fixed k in it, conjugation x↦xkx⁻¹ is continuous from connected G̃ into the discrete kernel, hence constant and equal to k at x=ẽ. Therefore every kernel element is central. The argument supplies a group structure before using conjugation.

**Self-assessment rubric**

- Constructs continuous based lifts of multiplication and inversion with the correct simply connected domains.
- Proves identity and associativity by uniqueness of lifts, then proves both inverse identities.
- Derives discreteness from the covering structure.
- Uses connectedness and a discrete kernel to prove all conjugates of each kernel point coincide.

</details>
