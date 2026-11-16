var e=`---
parent_id: book-partial-differential-equations
matter_id: glossary-and-theorem-finder
title: "Glossary and Theorem Finder"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Glossary and Theorem Finder

**Classical solution:** a function satisfying the PDE pointwise with all stated derivatives and domain conditions.

**Principal part:** the highest-order derivative terms. The two-variable classification chapter fixes the mixed-derivative factor two explicitly.

**Dirichlet data:** boundary values. **Neumann data:** outward normal derivatives, with their geometric signs.

**Parabolic boundary:** the initial slice and lateral boundary; it excludes the final interior slice of a forward heat cylinder.

**Subsolution:** for the heat chapter, a continuous parabolic-closure function with interior regularity and u_t minus kappa times the Laplacian nonpositive.

**Comparison principle:** ordering of source and parabolic-boundary values propagates to the whole classical cylinder. Taking differences gives uniqueness and explicit uniform stability estimates.

**Heat kernel:** the positive mass-one Gaussian solving whole-space heat for positive time. Its approximate-identity proof distinguishes pointwise initial recovery from the uniform result for uniformly continuous data.

**Well-posedness:** existence, uniqueness and continuous dependence in specified spaces. One verified formula establishes none of those three universal assertions by itself.

**Noncharacteristic data:** an initial curve transverse to the characteristic vector field. Chapter 2 proves local construction through an invertible flow chart.

**Rankine–Hugoniot:** speed times the state jump equals the flux jump. Chapter 3 proves it for finite smooth pieces and constructs explicit admissible shocks and rarefactions.

**Mean value, Harnack and boundary barrier:** chapter 4 proves harmonic averages and their converse, maximum/comparison, interior Harnack, Liouville and the interior-ball derivative lemma.

**Green and Poisson kernels:** chapter 5 fixes singular flux and normal signs, constructs ball kernels and proves continuous boundary-data existence. Volume representation is distinguished from arbitrary rough-source classical existence.

**Cone energy:** chapter 7 proves finite propagation and local uniqueness for waves. Fixed, free and absorbing boundaries have distinct fluxes.

**Separation and completeness:** chapter 8 justifies selected series by coefficient estimates and product Fejér density; chapter 9 proves the full regular weighted Dirichlet expansion, its variational characterization and nodal count.

**Multiplier compatibility:** chapter 10 proves heat/wave/resolvent construction and identifies zero-frequency moments and real resonances obstructing Schwartz inversion.

**Duhamel:** chapter 11 integrates causal source responses, proves pulse limits and relates damped heat to an elliptic resolvent.

**Consistency, stability and positivity:** chapter 12 proves distinct finite-difference statements, including a norm-stable positivity counterexample, strict-Courant energy and a discrete elliptic barrier.
`;export{e as default};