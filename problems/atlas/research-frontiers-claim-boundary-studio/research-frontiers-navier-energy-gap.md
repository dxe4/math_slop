# Energy decay is not derivative control

*Difficulty 3 of 5 · [Research frontiers claim-boundary studio](index.md) · exercise 1 of 12*

For a smooth, periodic, unforced incompressible Navier–Stokes solution, derive the `L2` energy identity. Then evaluate the claim: `Because kinetic energy decreases, finite-time singularities are impossible.`

<details>
<summary>Hint 1</summary>

Pair the equation with the velocity and use divergence-free cancellation

</details>

<details>
<summary>Hint 2</summary>

Compare an integral norm of the field with control of high derivatives or a critical norm

</details>

<details>
<summary>Worked solution</summary>

Taking the spatial inner product with `u`, the transport term integrates to `int (u·grad)(|u|^2/2)=0` by periodicity and `div u=0`; the pressure term is `-int p div u=0`; and integration by parts gives `int u·Delta u=-||grad u||_2^2`. Hence `(1/2)d||u||_2^2/dt + nu||grad u||_2^2=0`. This controls kinetic energy and the time integral of one gradient norm. It does not uniformly bound all derivatives, vorticity concentration, or a continuation-critical norm. The proposed conclusion therefore skips the central regularity gap and does not resolve the three-dimensional problem.

**Answer.** `(1/2)d||u||_2^2/dt+nu||grad u||_2^2=0`; this global energy control does not rule out small-scale derivative concentration.

</details>

*Tags: navier-stokes-problem, energy-estimate, regularity*
