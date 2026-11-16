# Prove inverse-image identities including empty families

*Hard · [Set theory](index.md)*

For any function $f:X\to Y$ and family of subsets B\_i of Y indexed by a set I, prove that preimage preserves indexed unions and intersections. For an empty I use intersection Y in the codomain and intersection X in the domain. No inverse function is assumed.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

For an arbitrary x in X, union membership uses an existential index and intersection membership uses a universal index.

</details>

<details>
<summary>Hint 2</summary>

Check the empty-family conventions separately so that the ambient sets stay explicit.

</details>

<details>
<summary>Model proof</summary>

Preimage transports membership statements without requiring any inverse map.

1. For x in X, f(x) is in the union of the B\_i exactly when some i has f(x) in B\_i. This is equivalent to x belonging to some preimage, proving the union identity.
2. Likewise f(x) lies in every B\_i exactly when x lies in every preimage, proving the intersection identity.
3. When I is empty the union identity says f inverse of the empty set is empty. The intersection identity says f inverse of Y is X, agreeing with the stated domain-dependent conventions.
4. Only membership in target sets was used; f need not be injective, surjective or invertible.

**Self-assessment rubric**

- Work with an arbitrary domain element and the definition of preimage.
- Use existential indices for unions and universal indices for intersections.
- Check both empty-family cases with the correct source and target universes.

</details>
