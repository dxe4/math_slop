# Separate forward uniqueness from invertibility of the solution map

*Hard · [Differential equations problems](index.md)*

For the continuous scalar field $F(x)=-\operatorname{sgn}(x)\sqrt{|x|}$, F(0)=0, prove there is a unique global forward solution from each initial state, it reaches zero in finite time, and the forward solution maps are not injective. Give the explicit formula and a uniqueness argument valid at zero.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Solve separately while the state has fixed nonzero sign, then join to the equilibrium.

</details>

<details>
<summary>Hint 2</summary>

The field is nonincreasing, which controls the squared distance between any two solutions.

</details>

<details>
<summary>Model proof</summary>

A unique continuous forward flow can merge trajectories when local Lipschitz invertibility fails.

1. For initial x\_0, define x(t)=sign(x\_0)\*max(sqrt(\|x\_0\|)-t/2,0)^2, with x identically zero if x\_0=0. Before extinction it solves the separated equation; at the extinction time 2\*sqrt(\|x\_0\|), its derivative tends to zero and joins the zero branch C^1. Thus it is a global forward solution.
2. F is nonincreasing on the whole line. For any two classical solutions, the derivative of their squared distance is 2\*(x-z)\*(F(x)-F(z))&lt;=0. Equal initial states therefore remain equal, proving uniqueness even at zero without a local Lipschitz assumption.
3. For any fixed t&gt;0, every initial value with \|x\_0\|&lt;=t^2/4 has already reached zero. Distinct such states have the same image, so the forward map is not injective. Finite-time merger prevents recovery of an invertible backward flow.

**Self-assessment rubric**

- Verify the explicit branch and its differentiable equilibrium join.
- Use monotonicity to prove uniqueness at every state, including zero.
- Exhibit a whole interval of initial states merged at a fixed positive time.

</details>
