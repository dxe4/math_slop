var e=`---
parent_id: book-control-theory
matter_id: glossary-and-theorem-finder
title: "Glossary and Theorem Finder"
license: CC BY-SA 4.0
---

# Glossary and Theorem Finder

**Controllability** asks which state changes inputs can generate over a specified horizon. The [reachability reading](../control-reachability-observation.md) derives the controllability matrix, finite-horizon Gramian and minimum-energy construction. Positive definiteness and horizon assumptions belong to the inverse formula.

**Observability** asks which initial states can be distinguished from measured outputs under a known input. The [observability primary](../observability-duality.md) proves the rank, Gramian, reconstruction and detectability statements, with the complete earlier passages preserved in the integrated companion. A state can be unobservable without being unreachable, and conversely.

**State feedback** uses a measured or estimated state to choose input. **Observer error dynamics** concerns the estimation difference. The separation principle in a finite linear model relies on a block-triangular closed-loop construction; nonlinear systems and saturation need additional analysis.

**Robust stability** refers to a described perturbation family. **Small gain** is a sufficient interconnection argument under a chosen induced norm and a well-posed feedback connection. The [robust-control reading](../robust-sampled-control.md) states the norm boundary and sampled-state formulas.

**Pontryagin conditions** are necessary first-order conditions under their admissibility and regularity assumptions. **HJB** is a value equation; its verification interpretation requires a suitable solution class. **LQR** is the quadratic linear-state problem whose Riccati equation is developed in the [LQR chapter](../linear-quadratic-regulation.md).

**Recursive feasibility** means a feasible predictive controller remains feasible at its next measured state. The [MPC chapter](../sampled-data-mpc.md) proves it under exact dynamics and terminal continuation conditions. **Zero dynamics** are the internal motions remaining when a selected output is held at zero; the [nonlinear chapter](../nonlinear-control.md) shows why output stabilization can leave them unstable. **Innovation** is a measurement residual orthogonal to past information in the linear filter; the [filtering chapter](../kalman-filtering.md) distinguishes orthogonality, Gaussian independence and conditional optimality.
`;export{e as default};