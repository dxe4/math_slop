# Prove degree classifies based sphere self-maps in dimension at least two

*Hard · [Topology problems](index.md)*

For n≥2 prove that based homotopy classes $[S^n,S^n]_*\to\mathbb Z$ given by degree form a bijection. You may use the Hurewicz theorem in the form that an (n−1)-connected CW complex has π\_n≅H\_n for n≥2. Supply the connectivity justification and explain how negative, zero and positive integers are realized.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic verdict, grade or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Use cellular approximation to show π\_i(Sⁿ)=0 for i&lt;n.

</details>

<details>
<summary>Hint 2</summary>

Under Hurewicz, the based homotopy class of a map is sent to the image of the fundamental class, which is its degree.

</details>

<details>
<summary>Model proof</summary>

For a sphere, the first nonzero homotopy group is already detected exactly by its orientation class.

1. Sⁿ has a CW structure with only a zero-cell and an n-cell. For i&lt;n, cellular approximation sends a based map Sⁱ→Sⁿ into the i-skeleton, which is just the basepoint. Thus Sⁿ is (n−1)-connected.
2. By the stated Hurewicz theorem the homomorphism π\_n(Sⁿ)→H\_n(Sⁿ;Z)=Z is an isomorphism. By the definition and naturality of this homomorphism it sends a based map f to f\_\*\[Sⁿ\]=deg(f)\[Sⁿ\]. Thus degree is exactly this isomorphism.
3. Every positive integer d is realized by pinching the domain sphere to a wedge of d oriented spheres and mapping each sphere by the orientation-preserving identity before folding to the target. Reversing an orientation gives the negative integers, and the constant map realizes zero.
4. Injectivity follows from the Hurewicz isomorphism: equal degrees give equal elements of π\_n(Sⁿ), hence based homotopic maps. Realization proves surjectivity. The n≥2 hypothesis is what permits the stated simply connected Hurewicz argument.

**Self-assessment rubric**

- Uses cellular approximation correctly to establish (n−1)-connectedness.
- Identifies the Hurewicz map with degree and invokes its precise connectivity range.
- Constructs representatives of every integer and concludes uniqueness up to based homotopy.

</details>
