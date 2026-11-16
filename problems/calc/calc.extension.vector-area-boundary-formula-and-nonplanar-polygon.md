# Derive a boundary formula for oriented vector area

*Hard · [Calculus](index.md)*

For an oriented piecewise-C¹ spanning surface S with induced closed boundary C, prove $\int_Sn\,dS=\frac12\oint_Cr\times dr$. Apply it to the polygon following (0,0,0),(1,0,0),(1,1,1),(0,1,0) and returning to the start. Distinguish vector area from scalar area.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Test the vector identity against an arbitrary constant vector c.

</details>

<details>
<summary>Hint 2</summary>

The field (c×r)/2 has curl c; each straight polygon edge contributes its endpoint cross product.

</details>

<details>
<summary>Model proof</summary>

Constant-curl Stokes identities determine all components of an oriented area vector from the boundary alone.

1. For constant c, put F=(c×r)/2. Its curl is c, so Stokes gives c·∫\_S n dS=∮\_C(c×r)·dr/2=c·(∮\_C r×dr)/2 by the scalar triple-product identity. Equality for all c proves the vector formula.
2. For a straight edge from p\_i to p\_{i+1}, r=p\_i+t(p\_{i+1}−p\_i) gives ∫r×dr=p\_i×p\_{i+1}. Thus the polygon vector area is half the cyclic cross-product sum.
3. Here the nonzero terms are (1,0,0)×(1,1,1)=(0,−1,1) and (1,1,1)×(0,1,0)=(−1,0,1). Their half-sum is (−1/2,−1/2,1).
4. This vector records signed projected areas and depends only on the oriented boundary. Scalar area integrates \|\|n\|\|dS=1dS and can be larger; no equality with its magnitude is asserted for an arbitrary curved spanning surface.

**Self-assessment rubric**

- Constructs the half-cross field and verifies its curl and Stokes pairing.
- Uses arbitrary c to obtain the full vector formula.
- Derives the edge cross-product rule and evaluates the specified nonplanar polygon.
- Explains why oriented vector area is not the scalar area of every spanning surface.

</details>
