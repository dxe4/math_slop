# Conditional growth of a square

*Medium · [Probability problems](index.md)*

Let $M$ be square-integrable and $\mathcal F$-measurable, and let $D$ be square-integrable with $E[D\mid\mathcal F]=0$ and $\operatorname{Var}(D\mid\mathcal F)=2$ almost surely. Find the constant value of $E[(M+D)^2\mid\mathcal F]-M^2$.

```answer
{"answer":{"kind":"integer","expected":"2","checker_scope":"Checks the constant conditional square-growth difference under the stated second-moment and measurability assumptions only."}}
```

<details>
<summary>Hint 1</summary>

Expand the square, distinguishing observed terms from the new increment.

</details>

<details>
<summary>Hint 2</summary>

The conditional mean kills the cross term, and zero conditional mean identifies conditional variance with the conditional second moment.

</details>

<details>
<summary>Worked solution</summary>

Only the increment's conditional second moment remains.

1. Square integrability makes $M^2,D^2$ and $MD$ integrable, with the product justified by Cauchy–Schwarz.
2. Conditional expansion gives $E[(M+D)^2\mid\mathcal F]=M^2+2M E[D\mid\mathcal F]+E[D^2\mid\mathcal F]$. The cross-term pull-out can be justified first for bounded truncations of $M$ and then by L1 convergence of their products with $D$.
3. The cross term is zero and $E[D^2\mid\mathcal F]=\operatorname{Var}(D\mid\mathcal F)+(E[D\mid\mathcal F])^2=2$. Therefore the requested difference equals two almost surely.

The centred cross term vanishes and the conditional second moment contributes two.

</details>
