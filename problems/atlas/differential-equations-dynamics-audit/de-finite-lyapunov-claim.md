# Place a positive finite-time exponent on the evidence ladder

*Difficulty 4 of 5 · [Differential equations, control, and long-time dynamics audit studio](index.md) · exercise 13 of 14*

A simulation reports a largest tangent-growth average 0.12 over 50,000 steps. List the checks needed before calling it a positive Lyapunov exponent, and name three properties that the positive estimate would still not establish.

<details>
<summary>Hint 1</summary>

Vary transient, horizon, step, precision, and tangent renormalization

</details>

<details>
<summary>Hint 2</summary>

An asymptotic exponent is a limit along a declared orbit or measure

</details>

<details>
<summary>Hint 3</summary>

Chaos, ergodicity, mixing, and a physical measure are separate

</details>

<details>
<summary>Worked solution</summary>

The immediate result is a positive finite-time numerical average under one method, precision, initial state, time unit, and transient rule. Audit the variational equation or derivative implementation, QR or renormalization scheme, discarded transient, horizon convergence, integrator step and tolerance, floating-point precision, and several initial states. If these stabilize, they support but need not prove a positive asymptotic exponent. Even a genuine positive exponent does not by itself establish topological transitivity or a chosen definition of chaos, ergodicity, mixing, a unique physical invariant measure, or robust persistence under perturbation.

**Answer.** It is finite-time numerical evidence until convergence and refinement are audited; it does not alone prove chaos, ergodicity, mixing, or a physical measure.

</details>

*Tags: chaos, Lyapunov exponent, numerical evidence, claim boundary*
