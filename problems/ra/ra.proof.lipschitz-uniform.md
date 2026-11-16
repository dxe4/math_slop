# Lipschitz continuity is uniform

*Medium · [Real analysis](index.md)*

Let $D\subseteq\mathbb R$ and suppose $|f(x)-f(y)|\le K|x-y|$ for all $x,y\in D$, where $K\ge0$ is fixed. Prove that $f$ is uniformly continuous on $D$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic correctness verdict, demonstration or checkpoint."}}
```

<details>
<summary>Hint 1</summary>

The same distance threshold must work at every pair of domain points.

</details>

<details>
<summary>Hint 2</summary>

Choose a positive threshold using the global Lipschitz constant, and avoid dividing by a possibly zero constant.

</details>

<details>
<summary>Model proof</summary>

A global linear error bound supplies a point-independent continuity threshold.

1. Fix $\varepsilon>0$ and choose $\delta=\varepsilon/(K+1)>0$. This depends on the tolerance and the fixed constant only.
2. For any $x,y\in D$ with $|x-y|<\delta$, the Lipschitz condition gives $|f(x)-f(y)|\le K|x-y|$.
3. If $K>0$, this is less than $K\varepsilon/(K+1)<\varepsilon$; if $K=0$, the error is zero. Thus the same $\delta$ works for all pairs, proving uniform continuity.

**Self-assessment rubric**

- Choose a positive threshold independent of the domain points.
- Handle a possible zero Lipschitz constant correctly.
- Establish the tolerance estimate for every sufficiently close pair.

</details>
