# Construct a conditional kernel from a joint density

*Medium · [Probability problems](index.md)*

Let $(S,\Sigma,\mu)$ and $(T,\mathcal T,\nu)$ be sigma-finite measure spaces, choose $x_0\in S$, and let $(X,Y)$ have joint density $f\ge0$ with respect to $\mu\otimes\nu$, with $\int f=1$. Put $m(y)=\int_S f(x,y)\,\mu(dx)$ and $B=\{y:0<m(y)<\infty\}$. Define $K(y,A)=m(y)^{-1}\int_A f(x,y)\,\mu(dx)$ on $B$, and $K(y,A)=1_A(x_0)$ outside $B$. Prove that $K$ is a probability kernel and that for every bounded $(\Sigma\otimes\mathcal T)$-measurable $h$, $\int_S h(x,Y)K(Y,dx)$ is a version of $E[h(X,Y)\mid\sigma(Y)]$. Explain why the exceptional definition changes no conditional law almost surely.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific rubric reflection only; no automatic correctness verdict, required graded slot or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Use Tonelli first to identify the marginal law of $Y$ and to locate the sets where its density is zero or infinite.

</details>

<details>
<summary>Hint 2</summary>

Verify measurability and normalization separately. For the conditional identity, test an event $\{Y\in D\}$ and compare the two iterated integrals, including their exceptional sets.

</details>

<details>
<summary>Model proof</summary>

A conditional density is a normalized slice only on positive finite marginal slices; a genuine kernel needs a definition everywhere.

1. Tonelli makes $m$ measurable and gives $\int_Tm\,d\nu=1$, so $m$ is finite $\nu$-almost everywhere and the marginal law is $P_Y(D)=\int_Dm\,d\nu$. The set $\{m=0\}$ has zero marginal mass, and the $\nu$-null set $\{m=\infty\}$ also has zero marginal mass. Thus $P_Y(B)=1$.
2. For $y\in B$, normalized integration against $f(\cdot,y)\mu$ is a probability measure on $\Sigma$; outside $B$ the chosen Dirac measure is a probability measure. For every $A$, Tonelli gives measurability of its slice integral, and multiplication by $1_B/m$ together with the exceptional constant makes $y\mapsto K(y,A)$ measurable. This proves the kernel properties.
3. For bounded $h$, the function $g(y)=\int h(x,y)K(y,dx)$ is measurable: on $B$ use signed Tonelli on its density numerator, and off $B$ it is the measurable section $h(x_0,y)$. It is bounded by the bound for $h$. For $D\in\mathcal T$, $E[g(Y)1_{\{Y\in D\}}]=\int_{D\cap B}\int_Sh(x,y)f(x,y)\,\mu(dx)\nu(dy)=E[h(X,Y)1_{\{Y\in D\}}]$. The omitted slices have zero joint mass. This is the defining conditional identity, and modifications outside $B$ are $P_Y$-null.

**Self-assessment rubric**

- Identify the marginal measure and show the positive finite slice set has full marginal mass.
- Prove probability normalization and measurable dependence on $y$, including the exceptional definition.
- Justify measurability/integrability for bounded joint $h$ and verify all $\sigma(Y)$ event tests by Fubini.

</details>
