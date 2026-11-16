# Construct a stable invariant graph in a weighted path space

*Hard · [Differential equations problems](index.md)*

Let f,g be C^1 functions on R^2, vanish at zero with zero derivative there, and each be globally Lipschitz with constant L&lt;1/4 in the max norm. For $x'=-x+f(x,y)$, y'=y+g(x,y), prove that for every real xi there is exactly one forward trajectory with x(0)=xi and sup over t&gt;=0 of e^(t/2)\*max(\|x(t)\|,\|y(t)\|) finite. Show its initial y=h(xi) defines a Lipschitz invariant graph. Use a weighted-space contraction.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

The unstable coordinate must be solved by a future integral with a minus sign.

</details>

<details>
<summary>Hint 2</summary>

The weighted norms of the stable and unstable integral operators are at most 2L and 2L/3.

</details>

<details>
<summary>Model proof</summary>

A future boundary condition removes the unstable mode and yields a stable graph by contraction.

1. Use the complete Banach space of continuous paths z=(x,y) on \[0,infinity) with norm sup e^(t/2)\*max(\|x\|,\|y\|). For fixed xi define the operator x\_new(t)=exp(-t)\*xi+integral\_0^t exp(-(t-s))\*f(z(s)) ds and y\_new(t)=-integral\_t^infinity exp(t-s)\*g(z(s)) ds.
2. The stable integral has weighted Lipschitz norm at most 2L, and the unstable one at most 2L/3, by direct exponential integration. Since 2L&lt;1, the operator maps the space into itself and is contractive. Its unique fixed point solves the ODE by differentiation and has the specified decay. Conversely any trajectory with that weighted bound satisfies these integrals by variation of constants and the vanishing future unstable boundary term, proving uniqueness in the stated class.
3. For two values xi,eta, the path difference is bounded by \|xi-eta\|+2L times its norm, hence by \|xi-eta\|/(1-2L). Evaluation at zero makes h Lipschitz. Shifting a fixed-point trajectory forward retains a finite weighted norm; uniqueness for its new x value gives y(t)=h(x(t)), so the graph is invariant. At xi=0 the zero path is the unique fixed point, giving h(0)=0.

**Self-assessment rubric**

- Specify the complete decay space and both correctly signed integral equations.
- Prove the operator bounds, existence and uniqueness in the exact stated decay class.
- Derive Lipschitz initial dependence and use shifted-path uniqueness for invariance.

</details>
