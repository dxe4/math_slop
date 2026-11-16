# Stop at the error floor, not the iteration floor

*Difficulty 4 of 5 · [Numerical mathematics and certified optimization](index.md) · exercise 9 of 16*

A sparse SPD discretization is expected to have relative discretization error near `2e-4`. Preconditioned CG reports original relative residuals `1e-3`, `8e-5`, `4e-8`, `2e-11` at increasing work. Explain which evidence is needed to choose a stopping point and why the smallest residual is not automatically best.

<details>
<summary>Hint 1</summary>

Residual-to-solution error depends on conditioning

</details>

<details>
<summary>Hint 2</summary>

Algebraic error need only be safely below the full error floor

</details>

<details>
<summary>Worked solution</summary>

First specify the residual norm and scaling, confirm it is the original rather than only preconditioned residual, and estimate how the inverse operator amplifies it in the decision-relevant norm. If that analysis shows residual `8e-5` can still create solution error comparable to or above `2e-4`, continue. If residual `4e-8` makes algebraic error safely negligible compared with the discretization floor, later reduction to `2e-11` is oversolving unless a sensitive output requires it. The discretization estimate itself should be supported by mesh refinement or a theorem, not assumed. Also check CG's SPD prerequisites, stagnation, and preconditioner application. The best stop minimizes total work subject to the complete error contract; it is not the iteration with the most zeros in its residual.

**Answer.** Use original residual, conditioning, output sensitivity, and verified discretization error; stop once algebraic error is safely below the relevant floor.

</details>

*Tags: numerical-linear-algebra, krylov, stopping-criteria*
