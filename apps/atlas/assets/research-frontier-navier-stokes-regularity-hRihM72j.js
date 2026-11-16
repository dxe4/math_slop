var e=`---
id: deep-dive-research-frontier-navier-stokes-regularity
title: Navier–Stokes Regularity: Energy, Scaling, and the Unclosed Gap
license: CC-BY-4.0
---

# Navier–Stokes regularity: energy, scaling, and the unclosed gap

**Before reading.** Read [Newtonian Fluids](../books/fields-fluids-continuum/newtonian-fluids.md), [What Is a PDE? Classification and Model Problems](../books/partial-differential-equations/classification-model-problems.md) and [Normed and Banach Spaces](../books/functional-analysis/normed-banach-spaces.md). These are preparation for the ideas used below.

> **Status boundary, checked 2026-08-31.** The three-dimensional Navier–Stokes existence-and-smoothness Millennium problem remains unsolved. This guide explains the formal target and selected partial results. It neither supplies nor evaluates a claimed solution.

## Prerequisite route

The intended route is \`fluid-mechanics\` → \`partial-differential-equations\` →
\`functional-analysis\`. You should be comfortable with gradients, divergence,
the Laplacian, integration by parts, and \\(L^2\\) norms. The guide derives its
one essential estimate, so a reader who lacks Sobolev-space machinery can
still follow the claim boundary: read “critical norm” as a scale-balanced
measurement and “weak solution” as an integral formulation tested against
smooth functions. Those simplifications are an on-ramp, not definitions to
reuse in a proof.

## The equation and its hypotheses

For an incompressible velocity field \\(u(x,t)\\in\\mathbb R^3\\), pressure \\(p(x,t)\\), viscosity \\(\\nu>0\\), and force \\(f\\),

\\[
\\partial_tu+(u\\cdot\\nabla)u=-\\nabla p+\\nu\\Delta u+f,
\\qquad \\nabla\\cdot u=0.
\\]

The nonlinear transport term moves momentum with the flow. Pressure enforces incompressibility, and the Laplacian dissipates small-scale variation. Smooth initial data produce a smooth solution for at least a short time. The frontier question is whether every allowed smooth three-dimensional datum continues smoothly for all time, or whether some allowed datum leads to finite-time breakdown.

The official Clay statement offers precise alternatives on \\(\\mathbb R^3\\) and the periodic three-torus. Its global-smoothness alternatives use smooth divergence-free initial velocity, positive viscosity, zero force, and the stated decay or periodic conditions. Its breakdown alternatives permit a smooth force under stated bounds. A proof about a different domain, weak-solution class, compressible model, numerical discretization, or altered forcing is not automatically a solution of that statement.

## Worked estimate: the energy budget

**Worked example.**

Assume a smooth unforced solution that is periodic or decays enough for boundary terms to vanish. Take the \\(L^2\\) inner product of the equation with \\(u\\). Incompressibility cancels transport:

\\[
\\int u\\cdot(u\\cdot\\nabla)u\\,dx
=\\int (u\\cdot\\nabla)\\frac{|u|^2}{2}\\,dx=0.
\\]

It also cancels pressure:

\\[
\\int u\\cdot\\nabla p\\,dx=-\\int p\\,\\nabla\\cdot u\\,dx=0.
\\]

Integration by parts in the viscous term gives

\\[
\\frac12\\frac d{dt}\\|u(t)\\|_2^2+\\nu\\|\\nabla u(t)\\|_2^2=0.
\\]

Thus kinetic energy does not grow and the time integral of \\(\\|\\nabla u\\|_2^2\\) is controlled. This is powerful, but it does not bound every derivative pointwise. A field can concentrate variation on smaller regions while retaining finite total energy. The open gap lies between this global weak control and the uniform regularity needed to continue a classical solution.

## Why three dimensions are critical

With zero force, the equation respects the rescaling

\\[
u_\\lambda(x,t)=\\lambda u(\\lambda x,\\lambda^2t),
\\qquad
p_\\lambda(x,t)=\\lambda^2p(\\lambda x,\\lambda^2t).
\\]

A norm that stays unchanged under this transformation is called **critical**. Scale bookkeeping reveals which estimates become stronger at smaller scales, which remain balanced, and which lose control. The energy norm is not critical in three dimensions. Vortex stretching, present in three dimensions but absent in the same form in two, creates a route by which vorticity can amplify while viscosity competes to smooth it.

Scaling is a diagnostic, not a proof of singularity. It says where an estimate must work and why a bound with the wrong scale may not close.

## Smooth, weak, suitable: do not merge the classes

A **classical solution** has enough derivatives for the equation to hold pointwise. A **weak solution** transfers derivatives to test functions and can exist with much less regularity. Leray's framework supplies global finite-energy weak solutions in three dimensions. The unresolved issues include whether the relevant weak solution is always smooth and unique under the hypotheses that would resolve the classical problem.

“A weak solution exists globally” therefore does not answer “Does every smooth datum yield a global smooth solution?” Nor does nonuniqueness in a broad weak class prove singularity of the smooth solution specified by Clay.

Suitable weak solutions satisfy an additional local energy inequality. The Caffarelli–Kohn–Nirenberg partial-regularity theorem shows, in its precise setting, that their possible singular set is very small in parabolic Hausdorff measure. “Small” is not “empty”; the Millennium target requires ruling out every singular point or constructing an allowed breakdown.

Buckmaster and Vicol proved nonuniqueness within a class of finite-kinetic-energy weak solutions. That result demonstrates flexibility at weak regularity. It does not state nonuniqueness of every weak notion, does not show that a smooth solution becomes singular, and does not settle the Clay alternatives.

## What a continuation criterion does

A continuation criterion has the form:

> if a specified norm remains finite up to time \\(T\\), then the smooth solution extends beyond \\(T\\).

Such a theorem converts breakdown into a necessary concentration scenario. It narrows the target but does not exclude that scenario. Similarly, a computation that follows a steepening vortex for many scales can reveal a mechanism and test numerics, yet finite resolution cannot certify all later scales. A numerical blow-up claim needs convergence evidence, error control, and a mathematical bridge from the discretized observable to the analytic criterion.

## Known, open, and not equivalent

| Kind | Scoped statement |
| --- | --- |
| Known | Smooth solutions exist locally for smooth allowed data; global finite-energy weak solutions exist; global smoothness is known under additional restrictions such as suitable smallness; and suitable weak solutions obey partial-regularity results. |
| Open | For arbitrary smooth divergence-free data in an official three-dimensional Clay setting, prove global smooth existence or establish one of the precisely stated breakdown alternatives. |
| Not equivalent | Energy decay, global weak existence, nonuniqueness in a broader weak class, a singular set of parabolic one-dimensional Hausdorff measure zero, regularity for small or symmetric data, and stable finite-resolution simulations do not individually settle the official problem. |

A resolution must match an official domain, data, force, decay or periodicity,
and solution class. In the smoothness direction it must close the estimate for
every allowed datum and all time. In the breakdown direction it must establish
failure of an allowed global smooth solution, not merely loss of accuracy in a
discretization or rough behavior in another weak class.

## A claim-boundary audit

For any claimed advance, ask:

1. Is the domain \\(\\mathbb R^3\\), the torus, a bounded region, or a modified model?
2. Are data smooth, small, symmetric, analytic, random, or unrestricted within the official class?
3. Is the solution classical, strong, Leray–Hopf, suitable weak, or another distributional notion?
4. Is the theorem local in time, global, conditional, or a regularity criterion?
5. Does “singular set has measure zero” get incorrectly rewritten as “no singularities”?
6. Does a computation carry a rigorous enclosure to the analytic limit, or only finite-resolution evidence?

## Checkpoints with solutions

<a id="deep-dive-research-frontier-navier-stokes-regularity-ex-1"></a>

**Exercise 1.**

**1. Why does the energy identity not solve regularity?**
<details>
<summary>Hint 1</summary>

Read exactly which norms the energy identity controls in time and space.
</details>
<details>
<summary>Hint 2</summary>

Compare those controls with the derivative or critical-norm bound a global regularity proof would need.
</details>
<details>
<summary>Solution</summary>

  
It controls \\(\\|u\\|_2\\) and an integrated \\(H^1\\)-type quantity, not all derivatives or a critical norm uniformly in time. Concentration can remain compatible with a global integral bound.

</details>

<a id="deep-dive-research-frontier-navier-stokes-regularity-ex-2"></a>

**Exercise 2.**

**2. A paper proves global smoothness for sufficiently small initial data in a critical norm. Has it solved the problem?**
<details>
<summary>Hint 1</summary>

The official question quantifies over every allowed smooth divergence-free initial datum.
</details>
<details>
<summary>Hint 2</summary>

A small-data theorem covers a restricted class; identify the unrestricted data it leaves out.
</details>
<details>
<summary>Solution</summary>

  
No. It is a major theorem for a restricted class, but the official global alternative quantifies over every allowed smooth divergence-free datum. “Small” cannot be silently deleted.

</details>

### Further practice

**3. A scheme stays stable on every tested mesh. What is established?**  
It establishes behavior of those computations under their documented discretizations and tests. Without a uniform analytic bound or verified limiting argument, it does not establish global smoothness of the continuum equation.

## Sources and current-status boundary

- [Clay Mathematics Institute current problem page](https://www.claymath.org/millennium/navier-stokes-equation/) — identifies the problem and links its official description; accessed 2026-08-31.
- [Fefferman, official problem description](https://www.claymath.org/wp-content/uploads/2022/06/navierstokes.pdf) — defines the equation, data, energy/periodic conditions, four accepted alternatives, and classical partial-results context; accessed 2026-08-31.
- [Clay 2025–26 Millennium lecture-series page](https://www.claymath.org/events/millennium-prize-problems-lecture-series/) — states that only the Poincaré problem among the seven has been resolved; accessed 2026-08-31.
- [Caffarelli, Kohn, and Nirenberg, DOI 10.1002/cpa.3160350604](https://doi.org/10.1002/cpa.3160350604) — primary partial-regularity theorem for suitable weak solutions; accessed 2026-08-31.
- [Buckmaster and Vicol, *Annals of Mathematics* 189 (2019)](https://annals.math.princeton.edu/2019/189-1/p03) — primary finite-kinetic-energy weak-solution nonuniqueness result; accessed 2026-08-31.

The CMI pages establish current official status. The research papers establish only their stated solution classes and hypotheses; none is cited as resolving the Millennium problem.

## Continue across the frontier atlas

Compare this open regularity target with the universal quantifier in the [Riemann hypothesis](#/item/deep-dive-research-frontier-riemann-hypothesis) and the computational-model quantifier in [P versus NP](#/item/deep-dive-research-frontier-p-versus-np). Then contrast a broad correspondence program in [mirror symmetry](#/item/deep-dive-research-frontier-mirror-symmetry), multiscale summaries in [topological data analysis](#/item/deep-dive-research-frontier-topological-data-analysis), conditional sparse recovery in [compressed sensing](#/item/deep-dive-research-frontier-compressed-sensing), and model/inference layers in [mathematical climate science](#/item/deep-dive-research-frontier-mathematical-climate-science). Finish with the [claim-boundary studio](#/item/exercise-research-frontiers-claim-boundary).
`;export{e as default};