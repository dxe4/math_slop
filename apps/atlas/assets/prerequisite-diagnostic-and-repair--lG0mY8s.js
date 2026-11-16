var e=`---
parent_id: book-partial-differential-equations
matter_id: prerequisite-diagnostic-and-repair
title: "Prerequisite Diagnostic and Repair"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Prerequisite Diagnostic and Repair

Use [ODE: A First Course](../../ode-first-course.md) through its boundary-value chapter and the Multivariable and Vector Calculus route for gradients, Laplacians, coordinate changes and integrals. The full book uses the [first six Fourier chapters](../../fourier-analysis.md), while its transform methods use Fourier chapters 7–9. The opening and heat chapters need only the derivative, integration and convergence tools explicitly named in them.

Before beginning, verify a proposed separated heat mode by differentiating it. State both initial data needed for the wave equation and explain why Laplace’s equation has no initial-time direction. Work an integration by parts with its endpoint term visible. If a boundary datum is zero at all positive times, identify the compatibility it imposes at a continuous initial corner.

For the heat chapter, distinguish continuity on a closed cylinder from continuity of derivatives at its boundary. Its maximum proof requires the former and interior second-space/first-time derivatives. Energy identities explicitly assume more endpoint regularity. The Gaussian construction can be justified by finite-domain integrals and uniform tail estimates; measure-based weak evolution is a later route.

For the transform part, derive the symbol of a second derivative and state the forward/inverse normalization. For the numerical chapter, distinguish a per-unit-time residual from a one-step defect and identify the norm in a stability statement. The regular Sturm–Liouville chapter proves its compact spectral argument internally; its completed square-norm preparation comes from Fourier Analysis.
`;export{e as default};