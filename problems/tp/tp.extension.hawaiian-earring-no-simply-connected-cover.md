# Expose the local obstruction to a universal covering of the Hawaiian earring

*Hard · [Topology problems](index.md)*

Let $H=\bigcup_{n\ge1}\{(x,y):(x-1/n)^2+y^2=1/n^2\}\subset\mathbb R^2$, based at the common origin. Prove H admits no simply connected covering space. Show every neighborhood of the origin contains an essential based loop, and justify its essentiality using a retraction onto its circle.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic verdict, grade or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

A sufficiently small earring circle lies inside any prescribed origin neighborhood.

</details>

<details>
<summary>Hint 2</summary>

Collapse all the other circles to the origin to obtain a continuous retraction onto that fixed circle; then compare with an evenly covered neighborhood.

</details>

<details>
<summary>Model proof</summary>

Arbitrarily small essential loops cannot lift as closed loops inside one simply connected covering sheet.

1. Given a neighborhood U of the origin in H, choose ε&gt;0 with H∩B(0,ε)⊂U. Every circle with 2/n&lt;ε lies inside that neighborhood. Its once-around loop is based at the origin.
2. For a fixed n, define r\_n:H→C\_n to be the identity on C\_n and send every other circle to the origin. This is continuous away from the origin by the local isolation of points on a fixed circle. At the origin, a point of C\_n stays close to itself and every other point maps exactly to the origin, so the ε–δ condition also holds there. Thus r\_n is a continuous retraction.
3. If the once-around loop in C\_n were nullhomotopic in H, composing its nullhomotopy with r\_n would contract the generator of π₁(C\_n)=Z in C\_n, impossible. Hence each such small loop remains essential in H.
4. If p:E→H were a simply connected covering, choose an evenly covered origin neighborhood U and a sheet containing a point e above the origin. Every based loop in U lifts inside that sheet to a closed loop at e, by the sheet homeomorphism. It would contract in E, and its projected contraction would contract it in H. The small essential circle loop in U contradicts this.

**Self-assessment rubric**

- Places a full essential circle in every origin neighborhood.
- Verifies continuity of the collapse map, including at the common origin.
- Uses the circle retraction to prove the small loop is nontrivial in π₁(H).
- Uses an evenly covered sheet and simple connectedness to obtain the contradictory contraction.

</details>
