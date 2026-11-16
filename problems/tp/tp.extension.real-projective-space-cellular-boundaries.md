# Derive integral homology of every finite real projective space

*Hard · [Topology problems](index.md)*

For n≥1 use the CW structure with one cell in each dimension 0 through n to compute $H_k(\mathbb{RP}^n;\mathbb Z)$ for every k. Derive the cellular boundary coefficient from the two hemispheres of the attaching sphere; state the top-dimensional parity separately.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic verdict, grade or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

The two lifts of the lower cell contribute degrees differing by the antipodal map on a (k−1)-sphere.

</details>

<details>
<summary>Hint 2</summary>

The boundary coefficient is 1+(−1)^k up to an overall orientation sign.

</details>

<details>
<summary>Model proof</summary>

Parity of the antipodal degree controls the alternating zero and multiplication-by-two differentials.

1. The k-cell of RPⁿ is attached by the antipodal quotient S^{k−1}→RP^{k−1}. After collapsing RP^{k−2}, its two hemispherical contributions to the (k−1)-cell have total degree 1+(−1)^k, up to the chosen orientations: the antipodal map on S^{k−1} has degree (−1)^k. Thus d\_k is multiplication by 2 for even k and zero for odd k.
2. The cellular complex is Z in degrees 0,…,n, with alternating d\_even=2 and d\_odd=0. Since multiplication by 2 is injective on Z, each even positive degree below n has zero homology. Each odd degree k&lt;n has ker d\_k=Z and im d\_{k+1}=2Z, hence H\_k=Z/2.
3. In top degree there is no incoming differential. Therefore H\_n=Z if n is odd and H\_n=0 if n is even. Also H\_0=Z by connectedness and all groups above n vanish.
4. For n=1 this gives the circle group H₁=Z, rather than Z/2: the missing incoming two-cell matters. The top Z for odd n agrees with orientability, but the computation does not assume it.

**Self-assessment rubric**

- Explains the two hemispherical contributions and the antipodal degree giving 1+(−1)^k.
- Computes kernels and images in every non-top positive degree.
- Distinguishes top degree, H₀ and out-of-range degrees, including n=1.

</details>
