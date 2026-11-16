# Classify a subdirect product through isomorphic quotients

*Hard · [Abstract algebra problems](index.md)*

Let H be a subgroup of G times K whose two coordinate projections are surjective. Put N={g:(g,1) in H} and M={k:(1,k) in H}. Prove N,M are normal and there is an isomorphism $phi:G/N\to K/M$ with H={(g,k):phi(gN)=kM}. Prove conversely that this construction gives a subdirect subgroup for every such isomorphism.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Use lifts in H to conjugate the two coordinate kernels.

</details>

<details>
<summary>Hint 2</summary>

For g choose any lift (g,k) and send its coset to kM; check every choice.

</details>

<details>
<summary>Model proof</summary>

Subdirect coupling is completely encoded by an identification of quotient groups.

1. For g\_0 in G choose a lift (g\_0,k\_0) in H. Conjugating (n,1) by it shows N normal in G; the same argument proves M normal in K.
2. Define phi(gN)=kM for a lift (g,k) in H. Two lifts differ in the second coordinate by an element of M, and changing g by N may be achieved by multiplying by (n,1), so the map is well-defined. Multiplication in H makes it a homomorphism. Projection surjectivity makes it onto, and if k belongs to M then multiplication by (1,k inverse) shows g belongs to N, giving a trivial kernel.
3. Every pair in H satisfies the quotient relation. Conversely, if phi(gN)=kM, choose a lift (g,k') in H. Then (k')^(-1)\*k belongs to M, and multiplying (g,k') by (1,(k')^(-1)\*k) in H gives (g,k). Thus the fiber formula is exact.
4. Given normal N,M and an isomorphism phi, the displayed fiber set is a subgroup because quotient maps and phi respect products and inverses. For any g choose k representing phi(gN); for any k choose g representing its inverse image. Hence both projections are surjective.

**Self-assessment rubric**

- Use surjective lifts to prove both coordinate kernels normal.
- Check choices, multiplication, surjectivity and injectivity of the quotient map.
- Prove the relation characterizes all pairs, not only a containing subgroup.
- Verify subgroup structure and both surjective projections in the reverse construction.

</details>
