# Derive harmonic sphere and ball means from divergence

*Hard · [Calculus](index.md)*

Let u be C² on a neighborhood of the closed radius-R ball centered at a and satisfy $\Delta u=0$. Prove every centered sphere and ball average of u equals u(a), deriving the result from the divergence theorem rather than a complex-analytic formula.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Differentiate the spherical average written over the fixed unit sphere.

</details>

<details>
<summary>Hint 2</summary>

Its derivative is total normal derivative flux divided by 4πr², and harmonicity makes that flux zero.

</details>

<details>
<summary>Model proof</summary>

The divergence theorem shows a sphere average is independent of radius, then continuity identifies its limiting value.

1. For 0&lt;r&lt;R set A(r)=(1/4π)∫\_{S²}u(a+rω)dΩ. The compact angular domain and C² regularity justify differentiation: A′(r)=(1/4π)∫\_{S²}∇u(a+rω)·ωdΩ.
2. Rescaling surface area gives A′(r)=(1/(4πr²))∫\_{\|x−a\|=r}∂\_n u dS. Divergence makes the numerator ∫\_{\|x−a\|≤r}Δu dV=0, so A is constant.
3. Continuity at a gives A(r)→u(a) as r→0, uniformly in direction; hence all sphere averages equal u(a), also at r=R by continuity.
4. Radial integration gives ∫\_{B\_r}u dV=∫₀ʳ4πs²u(a)ds=(4πr³/3)u(a). Dividing by ball volume proves the ball-average statement.

**Self-assessment rubric**

- Differentiates on the fixed angular domain with its normalization.
- Converts to normal flux and uses divergence and Δu=0.
- Uses continuity to identify the constant average with u(a).
- Integrates the spherical result with the correct radial volume factor.

</details>
