# A finite-volume conservation proof

*Difficulty 5 of 5 · [Numerical mathematics and certified optimization](index.md) · exercise 12 of 16*

Cells satisfy `dU_i/dt = F_(i-1/2)-F_(i+1/2)+S_i`, using exactly the same stored interior face flux in both neighboring equations. Prove the global balance after summing cells, then diagnose what changes if each neighbor recomputes a slightly different floating-point flux.

<details>
<summary>Hint 1</summary>

Write the sum and telescope interior faces

</details>

<details>
<summary>Hint 2</summary>

Shared storage makes cancellation algebraic at the discrete level

</details>

<details>
<summary>Worked solution</summary>

Summing from i=1 to N gives `d/dt sum U_i = sum F_(i-1/2)-sum F_(i+1/2)+sum S_i`. Every interior flux appears once with minus sign as the right, outgoing flux of the cell to its left and once with plus sign as the left, incoming flux of the cell to its right. Because the same stored number is used, these terms cancel exactly in the discrete arithmetic expression, leaving `F_(1/2)-F_(N+1/2)+sum S_i`: change equals boundary inflow minus boundary outflow plus sources. If neighboring cells independently recompute a nominally identical flux, rounding or branch choices can give `F_left != F_right`; cancellation leaves a spurious interior source equal to their difference. A conservation test should therefore sum the actual update and compare it with stored boundary fluxes and sources, while time-integration and rounding effects are reported separately.

**Answer.** Interior shared fluxes telescope, leaving boundary flux plus sources; independently rounded copies can create a spurious noncancelling source.

</details>

*Tags: pde-numerics, finite-volume, conservation, proof*
