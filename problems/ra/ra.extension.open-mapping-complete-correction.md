# Upgrade a dense image-ball bound to an actual open image

*Hard · [Real analysis](index.md)*

Let T:X to Y be a bounded surjective linear map between Banach spaces. Prove $T$ is open. Use Baire to obtain an image-ball closure bound, then give the convergent correction series that removes the closure; do not stop at density.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Surjectivity covers Y by closures of images of bounded balls.

</details>

<details>
<summary>Hint 2</summary>

Differences move a Baire interior ball to zero, and geometrically shrinking corrections use completeness of X.

</details>

<details>
<summary>Model proof</summary>

The essential step is a complete-domain correction series, not only an interior point of a closure.

1. Write Y as the union over n&gt;=1 of closures of T(n\*B\_X), where B\_X is the closed unit ball; surjectivity ensures the cover. Baire gives an interior ball in one such closure. Taking differences of two nearby points in that ball and of approximating image sequences gives a ball B\_Y(0,r) contained in closure T(2n\*B\_X). Rescale to obtain some delta&gt;0 with B\_Y(0,delta) contained in closure T(B\_X).
2. For \|\|y\|\|&lt;delta/2 choose x\_1 with \|\|x\_1\|\|&lt;=1/2 and residual \|\|y-Tx\_1\|\|&lt;delta/4, using the scaled closure inclusion. Inductively choose \|\|x\_k\|\|&lt;=2^(-k) to reduce the residual below delta\*2^(-(k+1)). The series of x\_k converges in X to x with \|\|x\|\|&lt;=1, and continuity of T makes Tx=y.
3. Thus B\_Y(0,delta/2) is contained in T(B\_X). Any open neighborhood of a point x\_0 contains x\_0+s\*B\_X for some s&gt;0; its image therefore contains T(x\_0)+B\_Y(0,s\*delta/2). This proves T maps open sets to open sets. The completeness of Y supplied Baire and that of X supplied the correction-series limit.

**Self-assessment rubric**

- Derive a centered image-closure ball from the Baire cover with correct scaling.
- Construct bounded successive preimages and prove an actual exact image, not merely an approximation.
- Translate and rescale the actual ball inclusion and identify both completeness uses.

</details>
