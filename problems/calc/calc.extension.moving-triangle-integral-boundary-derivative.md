# Differentiate an expanding triangular region

*Hard · [Calculus](index.md)*

For C¹ f on a neighborhood of the relevant triangles, let $I(a)=\int_0^a\int_0^{a-x}f(x,y)\,dy\,dx$, 0&lt;a&lt;A. Prove I′(a)=∫₀ᵃf(x,a−x)dx. Explain why this is not an unweighted arc-length integral over the moving slanted edge, and apply the formula to f=e^{x+y}.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Differentiate the inner moving endpoint first; the outer endpoint contributes an inner interval of zero length.

</details>

<details>
<summary>Hint 2</summary>

The slanted edge has ds=√2dx but normal speed 1/√2.

</details>

<details>
<summary>Model proof</summary>

A moving-boundary derivative pairs boundary measure with the boundary’s normal speed.

1. Put h(a,x)=∫₀^{a−x}f(x,y)dy. The fundamental theorem gives ∂\_a h=f(x,a−x), and h(a,a)=0. Leibniz’s rule then yields I′(a)=h(a,a)+∫₀ᵃ∂\_a h dx=∫₀ᵃf(x,a−x)dx.
2. The C¹ neighborhood hypothesis makes the parameter derivatives continuous and the finite-interval differentiation valid. The fixed coordinate-axis edges do not move normally.
3. The moving line is x+y=a, with unit outward normal (1,1)/√2. Its normal velocity as a increases is 1/√2, while ds=√2dx along it. Their product is dx, explaining the displayed measure and the missing standalone √2 factor.
4. For f=e^{x+y}, the boundary value is eᵃ, so I′(a)=a eᵃ. In particular I′(1)/e=1.

**Self-assessment rubric**

- Applies both levels of Leibniz correctly and proves the outer endpoint term vanishes.
- States why differentiating this finite parameter integral is justified.
- Computes the slanted boundary speed and arc-length factor with cancellation.
- Evaluates the exponential boundary integral as a eᵃ.

</details>
