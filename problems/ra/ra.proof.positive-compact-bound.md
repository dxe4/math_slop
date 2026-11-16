# Strict positivity on a compact interval gives a uniform bound

*Medium · [Real analysis](index.md)*

Let $f:[a,b]\to\mathbb R$ be continuous, where $a\le b$, and suppose $f(x)>0$ for every $x\in[a,b]$. Prove that some $c>0$ satisfies $f(x)\ge c$ throughout $[a,b]$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic correctness verdict, demonstration or checkpoint."}}
```

<details>
<summary>Hint 1</summary>

A positive continuous function gives a positive lower estimate near each point.

</details>

<details>
<summary>Hint 2</summary>

Use compactness to reduce the resulting local cover to finitely many estimates.

</details>

<details>
<summary>Model proof</summary>

Finitely many local positive lower bounds have a positive minimum.

1. For each $x\in[a,b]$, continuity supplies a relative neighborhood $U_x$ on which $|f(y)-f(x)|<f(x)/2$. Thus $f(y)>f(x)/2>0$ on that neighborhood.
2. The sets $U_x$ cover the compact interval. Select a finite subcover $U_{x_1},\ldots,U_{x_m}$.
3. Let $c=\min_i f(x_i)/2>0$. Every point lies in one chosen neighborhood and has value greater than its corresponding bound, hence at least $c$.

**Self-assessment rubric**

- Derive a positive local lower bound using continuity.
- Apply compactness to a cover by those relative neighborhoods.
- Take a finite positive minimum and justify its uniform validity.

</details>
