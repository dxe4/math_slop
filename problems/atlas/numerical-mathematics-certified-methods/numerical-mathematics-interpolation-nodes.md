# Lebesgue amplification and node choice

*Difficulty 3 of 5 · [Numerical mathematics and certified optimization](index.md) · exercise 5 of 16*

An interpolant is written `p(x)=sum y_i ell_i(x)`. If every stored datum changes by at most epsilon, prove that the interpolant changes by at most `epsilon Lambda(x)`, where `Lambda(x)=sum |ell_i(x)|`. Explain how this separates node conditioning from stable evaluation.

<details>
<summary>Hint 1</summary>

Write the perturbed interpolant and subtract

</details>

<details>
<summary>Hint 2</summary>

Apply the triangle inequality

</details>

<details>
<summary>Worked solution</summary>

Let perturbed values be `y_i+delta_i`, with `|delta_i|<=epsilon`. Linearity of interpolation in the data gives `p_tilde(x)-p(x)=sum delta_i ell_i(x)`. Therefore `|p_tilde-p|<=sum |delta_i||ell_i(x)|<=epsilon sum |ell_i(x)|=epsilon Lambda(x)`. The maximum of Lambda over the interval is a normwise condition number for the interpolation map from node values to the polynomial function. It depends on node locations: equally spaced high-degree nodes can yield large amplification, while Chebyshev-like nodes control it. A barycentric formula can evaluate the polynomial stably for the chosen nodes, but it cannot reduce the underlying Lambda of that interpolation problem. Conversely, good nodes still need a stable evaluation algorithm.

**Answer.** Triangle inequality gives `|delta p(x)|<=epsilon Lambda(x)`; Lambda measures node-dependent problem sensitivity, not evaluation stability.

</details>

*Tags: interpolation-approximation, conditioning, lebesgue-function*
