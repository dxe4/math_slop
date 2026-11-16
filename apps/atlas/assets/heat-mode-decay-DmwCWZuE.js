var e=`---
id: visual-lab-heat-mode-decay
title: "Heat modes lose amplitude at different rates"
license: CC BY-SA 4.0
---

# Heat modes lose amplitude at different rates

How does mode number change diffusion decay with zero endpoint values?

Choose a sine-mode number, positive diffusivity and nonnegative time. The display samples a single exact classical solution on the interval from zero to pi. It shows symbolic decay rates beside approximate exponential and sine values. Reset restores the native starting mode, diffusivity and time.

## What to notice

For integer $k>0$, $u(x,t)=e^{-\\kappa k^2t}\\sin(kx)$ satisfies $u_t=\\kappa u_{xx}$ and zero endpoint values. Differentiating this finite formula verifies both the equation and boundary conditions. Its amplitude decays at rate $\\kappa k^2$; its squared integral norm decays at twice that rate. Increasing frequency therefore changes the time scale quadratically.

## Worked example

At diffusivity one and mode two, the amplitude is $e^{-4t}$ and the ratio of squared norms to its initial value is $e^{-8t}$. The amplitude reaches $e^{-1}$ at time one quarter. Mode one under the same conditions takes time one. Neither conclusion requires a numerical approximation to a general PDE solution.

## Scope

This is an analytic mode sampled for display, rather than a numerical PDE solver. It has zero forcing and homogeneous Dirichlet endpoints on the stated interval. Arbitrary initial data, rough solutions and other boundaries need separate existence, convergence and regularity arguments. The separation-of-variables chapter states those hypotheses.

## Preparation and continuation

- [Classification model problems](/resources/library%3Abook-partial-differential-equations%3Aclassification-model-problems/)
- [Separation of variables](/resources/library%3Abook-partial-differential-equations%3Aseparation-of-variables/)

The interactive controls, reset and data table use the shared Euler Lab frame. Read marks and saved notes remain personal study records.
`;export{e as default};