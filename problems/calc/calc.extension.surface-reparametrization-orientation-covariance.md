# Separate reparametrization from reversal of a physical surface orientation

*Hard · [Calculus](index.md)*

Let r:U→R³ be a regular one-to-one C¹ surface chart and ψ:V→U a C¹ coordinate diffeomorphism on connected V. For q=r∘ψ prove $q_s\times q_t=(\det D\psi)(r_u\times r_v)\circ\psi$. Derive invariance of scalar surface integrals and explain the sign of parametric flux when det Dψ&lt;0 versus keeping a fixed physical normal.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Expand both q derivatives as linear combinations of r\_u,r\_v.

</details>

<details>
<summary>Hint 2</summary>

Cross terms leave the signed determinant; scalar area takes its magnitude, while an induced orientation retains its sign.

</details>

<details>
<summary>Model proof</summary>

A coordinate change may reverse the chart’s induced normal without changing the underlying oriented surface when that reversal is compensated.

1. Write ψ=(u(s,t),v(s,t)). The chain rule gives q\_s=r\_u u\_s+r\_v v\_s and q\_t=r\_u u\_t+r\_v v\_t. Bilinearity and antisymmetry of cross product give q\_s×q\_t=(u\_s v\_t−v\_s u\_t)(r\_u×r\_v)∘ψ.
2. Taking norms yields \|\|q\_s×q\_t\|\|=\|det Dψ\|·\|\|(r\_u×r\_v)∘ψ\|\|. The ordinary planar change-of-variables theorem then makes ∫\_V f(q)\|\|q\_s×q\_t\|\| equal ∫\_U f(r)\|\|r\_u×r\_v\|\|, proving scalar integral invariance.
3. The determinant sign is constant because it is continuous and nonzero on connected V. A flux computed with the normal induced by q\_s×q\_t is therefore that sign times the flux induced by r\_u×r\_v. In particular an orientation-reversing coordinate map flips this chart-induced flux.
4. If the physical normal of the original oriented surface is held fixed, an orientation-reversing q chart must use −q\_s×q\_t as its oriented area vector. That compensation restores the original physical flux. Pure reparametrization and actual reversal of the chosen orientation are different operations.

**Self-assessment rubric**

- Derives the signed cross-product transformation from both coordinate derivatives.
- Uses the absolute determinant and planar change of variables correctly.
- Tracks the constant determinant sign in chart-induced oriented flux.
- Explains the compensation required to preserve a chosen physical normal.

</details>
