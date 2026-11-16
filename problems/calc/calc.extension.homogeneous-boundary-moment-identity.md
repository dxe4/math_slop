# Convert a homogeneous volume moment to its boundary flux

*Hard · [Calculus](index.md)*

Let p be a homogeneous polynomial of degree k≥0 on R³ and Ω bounded with piecewise-C¹ boundary. Prove $\iiint_\Omega p\,dV=\frac1{k+3}\iint_{\partial\Omega}p(x)(x\cdot n)\,dS$. Apply it to p=\|x\|² on the unit ball. Do not assume Ω is star-shaped.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Differentiate p(tx)=tᵏp(x) at t=1.

</details>

<details>
<summary>Hint 2</summary>

Then compute the divergence of p(x)x and use the whole outward boundary.

</details>

<details>
<summary>Model proof</summary>

Homogeneity fixes the divergence factor, while the divergence theorem needs no radial parametrization of the region.

1. Differentiating the homogeneity relation gives x·∇p=kp. This is valid everywhere because p is a polynomial.
2. The product rule gives div(px)=x·∇p+3p=(k+3)p. Applying divergence and dividing by k+3&gt;0 proves the identity.
3. On the unit sphere, p=1 and x·n=1. For p=\|x\|² the degree is 2, so the interior moment is surface area 4π divided by 5, namely 4π/5.
4. The proof used only a globally smooth vector field and the outward boundary of Ω. Any holes contribute their own outward-from-Ω normals; star-shapedness or a one-to-one radial chart was not required.

**Self-assessment rubric**

- Derives x·∇p=kp from the scaling identity.
- Computes (k+3)p and obtains the boundary formula with orientation.
- Evaluates the unit-ball quadratic moment as 4π/5.
- States why the result does not require star-shapedness and includes all boundary components.

</details>
