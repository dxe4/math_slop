# Prove finite primary decomposition through irreducible ideals

*Hard · [Abstract algebra problems](index.md)*

Prove every proper ideal in a commutative Noetherian ring $R$ is a finite intersection of primary ideals. Use Noetherian induction to obtain irreducible ideals, then prove an irreducible ideal is primary using stabilization of colon ideals.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

A maximal counterexample to finite irreducible decomposition cannot itself split into two larger ideals.

</details>

<details>
<summary>Hint 2</summary>

If ab is in Q but a is not, stabilize(Q:b^n) and test(Q+(a)) intersect(Q+(b^n)).

</details>

<details>
<summary>Model proof</summary>

Ascending-chain stabilization converts irreducibility into the power condition for primary ideals.

1. If some ideal had no finite irreducible decomposition, choose a maximal such ideal by the ascending-chain condition. It cannot be irreducible, so it is J intersect K with both strictly larger. Maximality gives finite irreducible decompositions of J,K, whose combined intersection contradicts the choice. Thus every ideal has such a finite decomposition.
2. Let Q be a proper irreducible ideal and suppose ab belongs to Q while a does not. If no power of b lies in Q, choose n&gt;=1 with(Q:b^n)=(Q:b^(n+1)), by Noetherianity. We claim Q=(Q+(a)) intersect(Q+(b^n)).
3. For x=q+r\*a=q'+s\*b^n in that intersection, multiplying the first expression by b puts b\*x in Q. The second then gives s\*b^(n+1) in Q, so stabilization implies s\*b^n in Q and x in Q. Both larger ideals are strict by a not in Q and b^n not in Q, contradicting irreducibility. Hence some power of b lies in Q; this is primaryness. The finite irreducible decomposition is therefore a finite primary decomposition.

**Self-assessment rubric**

- Produce a finite irreducible decomposition without presupposing primaryness.
- Choose the exact stabilized colon equality.
- Prove the claimed intersection equality and use both strict containments.

</details>
