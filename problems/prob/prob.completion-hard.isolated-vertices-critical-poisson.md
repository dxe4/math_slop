# Find the critical law of isolated vertices

*Hard · [Probability problems](index.md)*

For fixed $c\in\mathbb R$, let $G_n\sim G(n,p_n)$ with $p_n=(\log n+c)/n$ for all sufficiently large $n$, and let $I_n$ count isolated vertices. Prove $I_n\Rightarrow\operatorname{Poisson}(e^{-c})$. You may use the factorial-moment criterion: for nonnegative integer-valued variables, convergence of every fixed factorial moment to $\lambda^k$ implies convergence in distribution to $\operatorname{Poisson}(\lambda)$. Derive those moments, including the correction for edges shared by selected vertices.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft with task-specific semantic rubric; no automatic correctness verdict or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Expand $(I_n)_k$ over ordered distinct vertices, not independent isolation events.

</details>

<details>
<summary>Hint 2</summary>

Count forbidden edges within the selected set and between it and its complement separately.

</details>

<details>
<summary>Model proof</summary>

Joint isolation probabilities require counting each internal edge once.

1. For $k$ specified distinct vertices, isolation forbids $k(n-k)$ cross edges and $\binom k2$ internal edges. Hence $E(I_n)_k=(n)_k(1-p_n)^{k(n-k)+\binom k2}$. Treating the $k$ degrees as independent would incorrectly count each internal edge twice.
2. For fixed $k$, $\log(n)_k=k\log n+O(1/n)$. The forbidden-edge exponent is $kn-k(k+1)/2$. Since $np_n^2=O((\log n)^2/n)\to0$, its product with $\log(1-p_n)=-p_n+O(p_n^2)$ equals $-k\log n-kc+o(1)$.
3. Adding these logarithms gives $\log E(I_n)_k=-kc+o(1)$, so $E(I_n)_k\to e^{-kc}$ for every positive integer $k$; the zeroth moment is one.
4. The stated factorial-moment criterion applies with $\lambda=e^{-c}$ and proves the claimed distributional limit. The common-edge correction vanishes asymptotically but is essential in the exact formula.

**Self-assessment rubric**

- Count the union of forbidden edges without double-counting internal edges.
- Control the quadratic logarithmic remainder at the critical scale.
- Apply the supplied criterion to every fixed factorial order.

</details>
