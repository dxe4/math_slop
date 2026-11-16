# Construct and recognize a semidirect product from a section

*Hard · [Abstract algebra problems](index.md)*

For an exact sequence 1 to N to G to Q to 1, prove a homomorphic section exists if and only if G contains a subgroup H with N intersection H trivial and NH=G. Construct the resulting $N\rtimes H$ isomorphism and specify its action.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

The image of a section supplies a candidate complement.

</details>

<details>
<summary>Hint 2</summary>

For a complement, the quotient map restricts to an isomorphism; conjugation supplies the semidirect action.

</details>

<details>
<summary>Model proof</summary>

Splitting is a structural complement condition, not a choice of arbitrary coset representatives.

1. If s:Q to G is a homomorphic section, its image H is a subgroup. An element s(q) in N has q=e, so N intersects H trivially. For g with quotient q, the element g\*s(q) inverse lies in N, proving NH=G.
2. Conversely, if H is such a complement, the restricted quotient H to Q is injective by the intersection condition and surjective by NH=G. Its inverse followed by inclusion gives a homomorphic section.
3. Because N is normal, H acts on N by conjugation alpha\_h(n)=h\*n\*h inverse. The map N semidirect H to G taking (n,h) to n\*h preserves the twisted multiplication, is onto by NH=G and injective by the trivial intersection, hence is an isomorphism.

**Self-assessment rubric**

- Prove both complement properties from the homomorphic section.
- Use the quotient restriction to recover a genuine homomorphic section.
- Specify the action and verify multiplication and bijectivity.

</details>
