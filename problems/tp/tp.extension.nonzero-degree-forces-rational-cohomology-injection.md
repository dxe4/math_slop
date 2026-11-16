# Prove the cohomological injectivity forced by nonzero degree

*Hard · [Topology problems](index.md)*

Let f:Mⁿ→Nⁿ be a map of closed connected oriented smooth manifolds with nonzero degree. Prove $f^*:H^k(N;\mathbb Q)\to H^k(M;\mathbb Q)$ is injective for every k. Deduce no map Sⁿ→Tⁿ has nonzero degree for n≥2, and no map from an oriented genus-g surface to an oriented genus-h surface has nonzero degree when g&lt;h.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic verdict, grade or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Use Poincaré duality to pair a nonzero class α with a complementary class β.

</details>

<details>
<summary>Hint 2</summary>

Evaluate the pulled-back product on \[M\] using f\_\*\[M\]=degree(f)\[N\].

</details>

<details>
<summary>Model proof</summary>

A nonzero degree preserves every nonzero rational cohomology class through its perfect complementary pairing.

1. For nonzero α∈Hᵏ(N;Q), Poincaré duality gives β∈H^{n−k}(N;Q) with c=⟨α∪β,\[N\]⟩≠0. This uses closedness, orientability and field coefficients.
2. Naturality of products and evaluation gives ⟨f\*α∪f\*β,\[M\]⟩=⟨α∪β,f\_\*\[M\]⟩=deg(f)c≠0. Thus f\*α cannot be zero, proving injectivity in every degree.
3. For n≥2 the torus has H¹(Tⁿ;Q)=Qⁿ whereas H¹(Sⁿ;Q)=0. An injection is impossible, so every map Sⁿ→Tⁿ has degree zero.
4. For closed oriented surfaces the first rational cohomology dimensions are 2h in the target and 2g in the source. Injection requires 2h≤2g. Hence g&lt;h rules out nonzero degree. The proof bounds genus for any nonzero degree and does not claim the sharper absolute-degree bounds.

**Self-assessment rubric**

- Chooses a complementary class via rational Poincaré duality with its hypotheses.
- Uses product naturality and the fundamental-class degree identity to prove injectivity.
- Applies the injection correctly to tori and surface first cohomology dimensions.

</details>
