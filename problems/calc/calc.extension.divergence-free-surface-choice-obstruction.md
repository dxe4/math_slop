# Show why divergence-free flux need not depend only on a boundary

*Hard · [Calculus](index.md)*

On R³∖{0}, let $B=x/|x|^3$. Compare the upper unit hemisphere oriented outward and the lower unit hemisphere oriented inward, so both induce the same equatorial orientation. Prove their B-fluxes differ although div B=0, and deduce B has no global C¹ vector potential on this domain.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

The two normals pair with the radial field with opposite signs.

</details>

<details>
<summary>Hint 2</summary>

If B were curl A, Stokes would equate both fluxes to the same oriented boundary integral.

</details>

<details>
<summary>Model proof</summary>

A missing volume can obstruct a global curl potential even when local divergence vanishes.

1. Both hemispheres avoid the origin. Their radial field has unit magnitude. The outward upper flux is 2π, whereas the inward lower flux is −2π. The upper outward and lower inward orientations both induce counterclockwise traversal of the equator viewed from above.
2. Thus the flux difference is 4π despite div B=0 everywhere in the punctured domain. The closed surface formed by subtracting the second orientation is the outward unit sphere, whose enclosed ball contains the excluded origin.
3. If B=curl A for a C¹ potential throughout the punctured domain, Stokes on each hemisphere would give its flux as ∮\_C A·dr with exactly the same oriented C. Those two values would have to agree, a contradiction.
4. A divergence-free field has surface-independent flux only when the needed intervening volume or stronger global hypotheses are available. The excluded source prevents that reduction here.

**Self-assessment rubric**

- Assigns the two normals so their boundary orientations really agree.
- Computes +2π and −2π and identifies the excluded volume.
- Uses Stokes on both surfaces to contradict existence of a global potential.

</details>
