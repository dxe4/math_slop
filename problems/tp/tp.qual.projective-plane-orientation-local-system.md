# Compute twisted homology with the orientation local system

*Hard · [Topology problems](index.md)*

Let O be the integral orientation local system on RP², in which the nontrivial element g of π₁=Z/2 acts on Z by −1. Compute every $H_k(\mathbb{RP}^2;O)$ from the universal-cover cellular complex, and compare its top group with untwisted integral homology. Explain the resulting twisted fundamental class.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic verdict, grade or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

The universal cellular maps are g−1 in degree 1 and 1+g in degree 2.

</details>

<details>
<summary>Hint 2</summary>

Apply the sign representation, rather than the trivial representation, to obtain the twisted coefficient differentials.

</details>

<details>
<summary>Model proof</summary>

A sign local system compensates for orientation reversal along the nontrivial loop.

1. With one cell in each of degrees 0,1,2, the universal-cover cellular boundaries over Z\[Z/2\] are d₁=g−1 and d₂=1+g, after compatible choices of lifted orientations. The degree-two boundary records the two consecutive lifts of the projective attaching loop.
2. Tensoring with the orientation module substitutes g=−1. The twisted complex becomes Z in degree 2 mapping by 0 to Z in degree 1 mapping by −2 to Z in degree 0.
3. Thus H₂(RP²;O)=Z, H₁=0 and H₀=Z/2; all higher groups vanish. With trivial coefficients g=1 instead gives d₂=2,d₁=0 and top group H₂(RP²;Z)=0.
4. The generator of twisted H₂ is the orientation-local-system fundamental class. Its local orientation signs transform by −1 around the nontrivial loop, exactly compensating for the manifold’s orientation reversal. Ordinary integral orientability fails, but twisted top homology survives.

**Self-assessment rubric**

- Derives or explains the universal cellular boundary elements g−1 and 1+g.
- Applies the orientation representation to both differentials with the correct signs.
- Computes all twisted groups, including the nontrivial H₀ coinvariants.
- Explains why twisted top homology survives while untwisted integral top homology vanishes.

</details>
