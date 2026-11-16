# Construct uniform convergence outside a small exceptional set

*Hard · [Real analysis](index.md)*

On a measure space with μ(X)&lt;∞, measurable finite real functions f\_n and f satisfy f\_n→f almost everywhere. Prove that for every ε&gt;0 there is measurable E with $\mu(E)<\varepsilon$ such that convergence is uniform on X∖E. Give an infinite-measure counterexample. You may use continuity of measure from above for finite-measure sets.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, grade or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

For each accuracy 1/m, form the decreasing sets on which some sufficiently late error is still at least 1/m.

</details>

<details>
<summary>Hint 2</summary>

Choose one tail index for each accuracy with a summable exceptional-set budget.

</details>

<details>
<summary>Model proof</summary>

Finite total measure turns pointwise eventual accuracy into a common tail outside a controlled union.

1. Discard the null set where convergence fails, including it in the final exceptional set. For m≥1 set E\_{m,N}=∪\_{n≥N}{\|f\_n−f\|≥1/m}. As N increases these sets decrease, and their intersection is null by almost-everywhere convergence.
2. Each set has finite measure because μ(X)&lt;∞. Continuity from above gives μ(E\_{m,N})→0. Choose N\_m with μ(E\_{m,N\_m})&lt;ε·2^{−m−1}.
3. Let E be the union of those chosen sets and the null failure set. Its measure is at most ε/2&lt;ε. For x∉E and every n≥N\_m, \|f\_n(x)−f(x)\|&lt;1/m. Given any tolerance, choose m first and then its single N\_m; this is uniform convergence on X∖E.
4. For failure on infinite measure, take X=N with counting measure and f\_n(k)=1 if k=n and zero otherwise. It converges pointwise to zero. Any set of measure less than 1/2 is empty, however, and sup\_k\|f\_n(k)\|=1 for every n. Thus the same conclusion for all ε fails without finite measure.

**Self-assessment rubric**

- Defines measurable late-error sets and identifies their null intersections.
- Uses finite total measure in the exact continuity-from-above step.
- Chooses indices under a summable budget and proves the uniform quantifier order outside E.
- Verifies pointwise convergence and failure of the small-exception uniform claim for a concrete infinite space.

</details>
