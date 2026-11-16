# Derive the initial-state derivative of a flow

*Hard · [Differential equations problems](index.md)*

Let f(t,x) be C^1 on an open set containing all solution graphs for initial states near x\_0 over \[0,T\], with those graphs in one compact subset. Prove the flow derivative $J(t)=D_{x_0}x(t;x_0)$ exists and solves J'=D\_x f(t,x(t;x\_0))\*J, J(0)=I. You may use Gronwall's inequality and linear ODE existence.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

First obtain uniform continuous dependence on the initial state.

</details>

<details>
<summary>Hint 2</summary>

Write the divided difference of the integral equations using the mean-value integral for the state derivative.

</details>

<details>
<summary>Model proof</summary>

Uniform control of the linearized coefficients upgrades continuous dependence to differentiability.

1. On a compact neighborhood of the graphs, D\_x f is bounded and uniformly continuous. Gronwall applied to the two integral equations gives \|\|x(t;x\_0+h)-x(t;x\_0)\|\|&lt;=C\*\|\|h\|\| uniformly on \[0,T\], for sufficiently small h.
2. Let J solve the stated linear variational equation. The difference Delta\_h=x(t;x\_0+h)-x(t;x\_0) obeys Delta\_h(t)=h+integral\_0^t A\_h(s)\*Delta\_h(s) ds, where A\_h is the mean of D\_x f along the segment between the two states. Uniform continuous dependence makes A\_h converge uniformly to A(s)=D\_x f(s,x(s;x\_0)).
3. Subtract the equation for J(t)\*h. Boundedness of A\_h, the estimate Delta\_h=O(\|\|h\|\|), and uniform convergence A\_h to A give a remainder bounded by o(\|\|h\|\|) plus a constant times its integral. Gronwall yields sup\_t \|\|Delta\_h-J(t)\*h\|\|=o(\|\|h\|\|), proving the Frechet derivative and its variational equation.

**Self-assessment rubric**

- Obtain a compact-uniform initial-state difference bound.
- Use the integral mean derivative and justify uniform coefficient convergence.
- Control the remainder uniformly relative to the full vector increment, not just one direction.

</details>
