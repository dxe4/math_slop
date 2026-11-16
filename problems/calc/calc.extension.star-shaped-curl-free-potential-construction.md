# Construct a potential by integrating along radial segments

*Hard · [Calculus](index.md)*

Let U⊂R³ be open and star-shaped with respect to 0, and F∈C¹(U) satisfy curl F=0. Prove that $\phi(x)=\int_0^1F(tx)\cdot x\,dt$ has gradient F. Justify differentiating the parameter integral and derive its endpoint term.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Differentiate the integrand with respect to one coordinate x\_j.

</details>

<details>
<summary>Hint 2</summary>

Curl-free symmetry turns its sum into the t-derivative of tF\_j(tx).

</details>

<details>
<summary>Model proof</summary>

A star-shaped domain supplies a common radial family of paths and converts local symmetry into a global potential.

1. For fixed x the segment {tx:0≤t≤1} is compact in U. Openness supplies a neighborhood of x whose radial segments stay in U, with continuous bounded integrand derivatives. Thus coordinate differentiation under this finite t integral is valid.
2. It gives ∂\_jφ=∫₀¹\[F\_j(tx)+tΣ\_i x\_i∂\_jF\_i(tx)\]dt. Curl F=0 means ∂\_jF\_i=∂\_iF\_j.
3. The integrand becomes F\_j(tx)+t(d/dt)F\_j(tx)=d\[tF\_j(tx)\]/dt. Its integral is F\_j(x)−lim\_{t→0}tF\_j(tx)=F\_j(x), since F is continuous near zero.
4. This holds for each component, so ∇φ=F on U. Star-shapedness was used to keep every radial segment in the field’s domain, not to assert any field value at excluded holes.

**Self-assessment rubric**

- Uses compact radial segments and openness to justify local differentiation under the integral.
- Includes the direct x\_j term as well as derivatives of F(tx).
- Converts mixed component derivatives to a t derivative using curl-free symmetry.
- Evaluates the endpoint term, including its vanishing at t=0, to obtain every gradient component.

</details>
