# Prove the exact image of a dual map

*Medium · [Linear algebra problems](index.md)*

Work over $\mathbb R$ in finite dimension; all coordinate entries are dimensionless. For a linear map $T:V\to W$ of finite-dimensional real spaces, prove $\operatorname{im}T^*=(\ker T)^0$. Construct the functional needed for the reverse inclusion.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific rubric reflection only; no automatic grading or evidence is supplied."}}
```

<details>
<summary>Hint 1</summary>

A pullback functional vanishes on every vector sent to zero.

</details>

<details>
<summary>Hint 2</summary>

For a functional vanishing on the kernel, define it first on the image using a chosen preimage and check independence of that choice.

</details>

<details>
<summary>Model proof</summary>

Factor through the image and then extend a functional by a basis.

1. Every $g\circ T$ vanishes on $\ker T$, proving one inclusion.
2. For $f\in(\ker T)^0$, define $h(Tv)=f(v)$. If two preimages have the same output, their difference lies in the kernel, so the value is well defined and linear.
3. Extend a basis of $\operatorname{im}T$ to a basis of $W$, assign arbitrary values, for example zero, on the added vectors, and extend $h$ to $g\in W^*$. Then $f=g\circ T=T^*g$, proving the other inclusion.

**Self-assessment rubric**

- Show every pulled-back functional kills the kernel.
- Construct and prove well-definedness of the functional on the image.
- Extend it to the codomain and verify the required pullback equality.

</details>
