# Turn pointwise operator bounds into one common norm bound

*Hard · [Real analysis](index.md)*

Let X be a Banach space, Y a normed space, and T\_i:X to Y any family of bounded linear maps. If sup\_i\|\|T\_i x\|\| is finite for every x, prove $\sup_i||T_i||<\infty$. Use the Baire category theorem and explain how a bound on one translated ball controls the unit ball.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

The closed sets E\_n={x:sup\_i\|\|T\_i x\|\|&lt;=n} cover X.

</details>

<details>
<summary>Hint 2</summary>

Subtract the image of the ball center before rescaling a small displacement.

</details>

<details>
<summary>Model proof</summary>

Completeness converts individual bounds into a common local bound, and linearity globalizes it.

1. Each E\_n is closed as an intersection of closed inverse images, and the E\_n cover X by pointwise boundedness. Baire gives one E\_N containing an open ball B(x\_0,r). In particular x\_0 belongs to E\_N.
2. For any h with \|\|h\|\|&lt;=r/2, both x\_0+h and x\_0 are in E\_N, so \|\|T\_i h\|\|&lt;=\|\|T\_i(x\_0+h)\|\|+\|\|T\_i x\_0\|\|&lt;=2N for every i.
3. For \|\|u\|\|&lt;=1 put h=(r/2)\*u. Linearity yields \|\|T\_i u\|\|&lt;=4N/r. This bound is independent of i, so the operator norms are uniformly bounded. Completeness was used exactly in the Baire step.

**Self-assessment rubric**

- Construct the correct closed cover and obtain a translated interior ball.
- Use linearity to transfer its bound to a centered ball.
- Derive one operator norm bound valid for the full family.

</details>
