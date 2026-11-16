# Compute a presentation complex’s π₂ as an augmentation ideal

*Hard · [Topology problems](index.md)*

For integer p≥2 let X be the presentation CW complex $\langle a\mid a^p\rangle$. Let G=Z/p with generator g. Compute $\pi_2(X)$ as a left Z\[G\]-module and its underlying abelian rank. Derive the universal-cover cellular boundaries, not just H₂(X).

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic verdict, grade or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

In the universal cover d₁ is multiplication by g−1 and d₂ by N=1+g+⋯+g^{p−1}.

</details>

<details>
<summary>Hint 2</summary>

Multiplying an element of Z\[G\] by N gives its augmentation times N; use Hurewicz in the simply connected universal cover.

</details>

<details>
<summary>Model proof</summary>

The base has no integral two-cycle, yet the universal cover detects nontrivial second homotopy with its full group action.

1. The presentation gives π₁(X)=G. Its universal cover has cellular C₂,C₁,C₀ each the free rank-one left Z\[G\]-module. Orient lifted edges so d₁(e₁)=(g−1)e₀. The lifted attaching path traverses the p successive translates of the edge, so d₂(e₂)=N e₁ with N=1+g+⋯+g^{p−1}. The composite is zero because (g−1)N=gᵖ−1=0.
2. For u=∑\_{j=0}^{p−1}c\_jgʲ, multiplication by N gives (∑c\_j)N. Since N is nonzero in the free abelian group Z\[G\], the kernel is precisely the augmentation ideal I={u:∑c\_j=0}. There are no three-cells, so H₂(X̃;Z)=I as a deck-action module.
3. The universal cover is simply connected, so the degree-two Hurewicz map π₂(X̃)→H₂(X̃;Z) is an isomorphism, compatible with the deck action. Covering maps induce isomorphisms on π₂, identifying π₂(X) with I as a Z\[G\]-module under the chosen left-action convention.
4. As an abelian group I is the kernel of the summation map Zᵖ→Z, and has rank p−1. In contrast, the base cellular d₂ is multiplication by p on Z and has zero kernel. Thus H₂(X)=0 does not imply π₂(X)=0.

**Self-assessment rubric**

- Derives d₁=g−1 and d₂=N from lifted cells with a consistent deck convention.
- Computes the kernel of multiplication by N exactly as the augmentation ideal.
- Uses simple connectedness and covering invariance to identify π₂ with that deck module.
- Computes rank p−1 and distinguishes it from the vanishing base H₂.

</details>
