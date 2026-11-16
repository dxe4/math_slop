# Build a direct-product decomposition from unique Sylow subgroups

*Hard · [Abstract algebra problems](index.md)*

For a finite group G, prove that if it has a unique Sylow subgroup for each prime divisor of \|G\|, then $G$ is the direct product of those Sylow subgroups. Prove the converse and explain why different normal Sylow factors commute.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Uniqueness makes each Sylow subgroup normal.

</details>

<details>
<summary>Hint 2</summary>

A commutator of two normal subgroups lies in their intersection, and distinct prime-power orders force that intersection trivial.

</details>

<details>
<summary>Model proof</summary>

Normal coprime factors commute and account for the whole finite order.

1. Each unique Sylow subgroup P is normal because all its conjugates are Sylow subgroups. For distinct primes p,q and x in P,y in Q, normality puts \[x,y\] in both P and Q. Their intersection has order dividing coprime powers and is trivial, so x,y commute.
2. The multiplication map from the external product of these factors to G is a homomorphism because the factors commute. Its kernel is trivial: each factor has trivial intersection with the product of the others by coprime order. Its domain has order equal to \|G\|, so it is an isomorphism.
3. Conversely in a direct product of finite p-groups for distinct primes, each coordinate p-factor is a normal Sylow subgroup. Sylow conjugacy then implies it is unique. This proves both directions.

**Self-assessment rubric**

- Use uniqueness, normality and coprime intersections to justify commutation.
- Prove injectivity and full order of the multiplication map.
- Identify the Sylow factors and justify uniqueness in the direct product.

</details>
