# Classify linear spaces consisting only of rank-at-most-one maps

*Hard · [Linear algebra problems](index.md)*

Work over $\mathbb R$ in finite dimension; all coordinate entries are dimensionless. Let $V,W$ be real vector spaces with dimensions at least two. If a linear subspace $\mathcal S\subseteq\operatorname{Hom}(V,W)$ consists entirely of maps of rank at most one, prove either all images lie in one fixed line of W or all maps vanish on one fixed hyperplane of V. Deduce the sharp bound $\dim\mathcal S\le\max(\dim V,\dim W)$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific rubric reflection only; no automatic grading or evidence is supplied."}}
```

<details>
<summary>Hint 1</summary>

Fix a nonzero rank-one map written $u\,f$ with u a vector and f a functional.

</details>

<details>
<summary>Hint 2</summary>

The sum of two rank-one maps has rank two if their image vectors and their functionals are both independent. Use that obstruction twice.

</details>

<details>
<summary>Model proof</summary>

Linearity prevents mixed rank-one directions from coexisting freely.

1. If the subspace is zero the claim is immediate. Otherwise fix $A=u f$. Every nonzero $B=v g$ in it has rank one. If $u,v$ and $f,g$ were both independent, choose inputs with functional value pairs $(1,0)$ and $(0,1)$; then $A+B$ would have two independent outputs. Thus each B shares the image line of A or shares its functional line.
2. If some B has image not in $\mathbb Ru$, its functional must be proportional to f. If some C has functional not proportional to f, its image must lie in $\mathbb Ru$. Those two maps would again have independent image and functional directions, forcing rank two for their sum. Therefore these two departures cannot both occur.
3. Hence all maps either have image in the fixed line $\mathbb Ru$, or have functional proportional to f and therefore vanish on the fixed hyperplane $\ker f$. The first ambient map space has dimension $\dim V$; the second has dimension $\dim W$.
4. The bound follows and is sharp: all maps into a fixed output line realize dimension $\dim V$, while all maps factoring through one fixed input functional realize dimension $\dim W$. Choose the larger construction.

**Self-assessment rubric**

- Prove independence of both rank-one factors forces rank two of their sum.
- Derive the image-line or functional-line alternative relative to a fixed nonzero map.
- Exclude simultaneous departures by applying the obstruction to two different maps.
- Compute both dimension bounds and exhibit an attaining construction.

</details>
