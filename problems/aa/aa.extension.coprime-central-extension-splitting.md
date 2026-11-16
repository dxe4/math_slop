# Average a two-cocycle to split a central extension

*Hard · [Abstract algebra problems](index.md)*

Let Q be finite and A abelian with multiplication by m=\|Q\| invertible. For a normalized central two-cocycle c prove there is h:Q to A with $c(x,y)=h(x)+h(y)-h(xy)$. Deduce every central extension of Q by A splits as a direct product, and explain the different role of centrality here.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Sum the cocycle identity over its last argument.

</details>

<details>
<summary>Hint 2</summary>

The resulting primitive is h(x)=m inverse times sum\_z c(x,z).

</details>

<details>
<summary>Model proof</summary>

An averaged two-cocycle removes the central extension's multiplication defect.

1. Put S(x)=sum\_(z in Q) c(x,z). Summing c(x,y)+c(xy,z)=c(y,z)+c(x,yz) over z, and reindexing yz, gives m\*c(x,y)+S(xy)=S(y)+S(x).
2. Let h(x)=m inverse\*S(x), legitimate by the assumed automorphism. Then c(x,y)=h(x)+h(y)-h(xy), and h(e)=0 by normalization.
3. Every central extension admits a set-theoretic section yielding such a normalized cocycle, and the coordinate change (a,x) maps to (a+h(x),x) identifies its law with the zero-cocycle direct-product law. Centrality makes the Q action on A trivial; a general noncentral extension would have a twisted cocycle equation and would split as a semidirect rather than automatically a direct product.

**Self-assessment rubric**

- Derive the averaged identity with its reindexed last argument.
- Construct and normalize h using the exact divisibility hypothesis.
- Use the correct coordinate change and distinguish central from general actions.

</details>
