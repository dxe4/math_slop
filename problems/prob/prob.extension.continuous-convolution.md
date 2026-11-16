# Density of an independent sum

*Medium · [Probability problems](index.md)*

Let independent real variables $X,Y$ have nonnegative measurable densities $f,g$, each integrating to one. Prove that $X+Y$ has density $h(z)=\int_{\mathbb R}f(x)g(z-x)\,dx$, interpreted almost everywhere.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or graded objective evidence."}}
```

<details>
<summary>Hint 1</summary>

For a Borel set $A$, express $P(X+Y\in A)$ using the product joint density.

</details>

<details>
<summary>Hint 2</summary>

Apply the substitution $z=x+y$ for a fixed $x$, then use Tonelli's theorem. Show the resulting nonnegative function has unit integral and is finite almost everywhere.

</details>

<details>
<summary>Model proof</summary>

Identify the law on every Borel set by nonnegative integration.

1. Independence gives joint density $f(x)g(y)$. For a Borel set $A$, $P(X+Y\in A)=\int_{\mathbb R}\int_{\mathbb R}\mathbf1_A(x+y)f(x)g(y)\,dy\,dx$.
2. For each fixed $x$, substitute $z=x+y$, whose absolute derivative is one. Tonelli's theorem applies to the nonnegative measurable integrand and gives $P(X+Y\in A)=\int_A[\int_{\mathbb R}f(x)g(z-x)\,dx]\,dz$.
3. The bracketed function is nonnegative and measurable. Taking $A=\mathbb R$ shows its integral is one, so it is finite almost everywhere. Redefining it on any null set of infinite values yields an ordinary density representative without changing the law. This proves both the formula and normalisation, without assuming pointwise finiteness everywhere.

Integrating the product density along the translated fibres gives $h(z)=\int f(x)g(z-x)\,dx$, a unit-integral density almost everywhere.

**Self-assessment rubric**

- Express every Borel-set probability using the independent product density.
- Justify the translation substitution and nonnegative integration interchange.
- Prove measurability, unit integral and almost-everywhere finiteness, retaining the density's null-set freedom.

</details>
