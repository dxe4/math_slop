# Classify maps preserving every hyperplane

*Hard · [Linear algebra problems](index.md)*

Work over $\mathbb R$ in finite dimension; all coordinate entries are dimensionless. Let $\dim V\ge2$ and let $T:V\to V$ preserve every real linear hyperplane. Prove $T$ is a scalar multiple of the identity.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific rubric reflection only; no automatic grading or evidence is supplied."}}
```

<details>
<summary>Hint 1</summary>

Each nonzero functional defines a hyperplane; its pullback must annihilate that same hyperplane.

</details>

<details>
<summary>Hint 2</summary>

Compare the dual eigenvalue statements for two independent functionals and their sum.

</details>

<details>
<summary>Model proof</summary>

Hyperplane invariance turns every dual line into an eigenspace.

1. For nonzero $f$, invariance of $\ker f$ implies $f\circ T$ vanishes there. Its annihilator is the one-dimensional span of $f$, so $T^*f=\lambda_f f$.
2. For independent $f,g$, compare $T^*(f+g)=\lambda_f f+\lambda_g g$ with its scalar-multiple form $\lambda_{f+g}(f+g)$. Independence forces all three scalars equal. Dependent nonzero functionals already have equal scalars by linearity.
3. Thus every functional has the same scalar action, $T^*=\lambda I$. For each vector $v$, all functionals annihilate $(T-\lambda I)v$; functionals separate vectors, so that vector is zero. Hence $T=\lambda I$.

**Self-assessment rubric**

- Derive scalar dual action from invariance of each functional kernel.
- Use the sum of two independent functionals to force a common scalar.
- Transfer the common dual scalar back to the original operator.

</details>
