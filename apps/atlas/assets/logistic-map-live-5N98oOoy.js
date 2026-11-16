var e=`---
id: visual-lab-logistic-map
title: "The Road to Chaos"
level: advanced-undergraduate
estimated_minutes: 40
license: CC BY-SA 4.0
---

# The Road to Chaos

The logistic map is a deterministic recurrence with only one parameter:

$x_{n}₊_{1} = r x_{n}(1-x_{n})$.

Yet as $r$ changes it exhibits stable equilibria, periodic cycles, an infinite cascade of bifurcations, chaotic motion, and periodic windows inside chaos.

[Open the runnable logistic-map experiment](#/labs?lab=visual-lab-logistic-map)

## Three coordinated representations

The experiment joins three ways of reasoning.

1. The **recurrence** computes a numerical sequence.
2. The **cobweb plot** performs each iteration geometrically between the parabola $y=rx(1-x)$ and diagonal $y=x$.
3. The **bifurcation diagram** records long-run values over many choices of $r$.

The table below the graphic gives floating-point iterates. A finite clipped log-slope average describes local linearized growth along one sampled orbit; it does not certify infinite-time separation, chaos or a bifurcation. The controls restrict $2.5\\le r\\le4$ and $0.001\\le x_0\\le0.999$, inside the invariant interval $[0,1]$ for $0\\le r\\le4$.

## Fixed points and their stability

A fixed point satisfies $x=f(x)$, so

$x = rx(1-x)$.

The solutions are $x*=0$ and, when $r\\ne 0$,

$x*=(r-1)/r$.

A one-dimensional fixed point is locally attracting when $|f′(x*)|<1$. Here $f′(x)=r(1-2x)$. At the nonzero fixed point,

$f′(x*)=2-r$.

Therefore it is attracting when $|2-r|<1$, or $1<r<3$. Select the fixed-point preset at $r=2.9$. The cobweb staircase contracts toward the intersection of the curve and diagonal.

Move just beyond $r=3$. The derivative has passed through $-1$: errors reverse sign and grow instead of shrink. The fixed point loses stability and a stable two-cycle appears.

## Investigation 1 — Count the cascade

Choose the period-2 preset and then increase $r$ slowly.

- Near $r\\approx 3.45$, two attracting values split into four.
- Further right, four split into eight.
- The splits accumulate near $r\\approx 3.56995$.

This is a period-doubling route to chaos. The intervals between successive bifurcations shrink geometrically. Their ratios approach the Feigenbaum constant

$\\delta \\approx 4.6692016\\ldots$,

a number that reappears for a broad class of smooth unimodal maps. The exact logistic formula is not responsible for every detail; the shape of the nonlinearity creates a universality class.

## Investigation 2 — Sensitive dependence

Select $r=3.9$ and record several iterates from $x_{0}=0.2$. Then change the initial value to $0.201$.

At first the two sequences look close. Later they no longer predict one another. Sensitive dependence means an initial separation $\\Delta x_{0}$ typically grows approximately as

$|\\Delta x_{n}| \\approx e^{\\lambda n}|\\Delta x_{0}|$,

where $\\lambda >0$ is the Lyapunov exponent.

For an exact orbit where the limit exists, the asymptotic Lyapunov exponent is the limit as $N\\to\\infty$ of

$\\ell_N=(1/N) \\sum_{n=0}^{N-1} \\log |r(1-2x_{n})|$, with $\\lambda=\\lim_{N\\to\\infty}\\ell_N$

with the appropriate starting index after any fixed transient. Derivatives that vanish give logarithm $-\\infty$, which needs separate interpretation. The interface instead discards 400 iterates, retains 700 log-slope terms, and floors each derivative magnitude at $10^{-14}$ before taking its logarithm. It therefore reports a finite, clipped estimate, using ordinary binary floating point. The displayed sign describes only those terms. A positive finite average does not prove chaos: a repelling periodic orbit can have a positive asymptotic exponent too. A negative finite average does not prove an attracting periodic orbit, and a near-zero value does not locate a bifurcation. Refining horizons and examining exact invariant sets address different parts of these questions.

Chaos is not randomness. Both trajectories are completely determined by their initial values. The obstacle is prediction under finite precision: uncertainty is amplified.

## Investigation 3 — Find order inside chaos

The right side of the bifurcation diagram is not uniformly dusty. Look near $r\\approx 3.83$: a wide three-branch window appears. Select it directly in the diagram and inspect the cobweb.

Within this window a stable period-3 orbit is born, then undergoes its own period-doubling cascade. This is a warning against classifying a whole parameter interval from a few sample points.

The theorem “period three implies chaos” has a precise meaning: for a continuous interval map, the existence of a period-3 orbit forces periodic orbits of every period and an uncountable scrambled set. A stable period-3 attractor and chaotic invariant behaviour can coexist in the same map.

## Transients matter

The bifurcation diagram iterates each parameter many times before plotting. Those discarded values are the **transient**. Without burn-in, the diagram would mix approach paths with long-run behaviour.

This choice also hides information. How quickly a trajectory settles is scientifically meaningful, especially near a bifurcation where convergence slows. Whenever you make a long-run plot, report both the discarded transient length and retained sample length.

## Challenges

1. Derive both fixed points and the stability interval for each.
2. At $r=4$, compute the first four iterates from $x_{0}=1/2$. Why is this initial condition exceptional rather than representative of chaos?
3. Explain why a negative Lyapunov exponent is compatible with a period-4 orbit: contraction refers to nearby trajectories, not convergence to one constant.
4. In the cobweb, what geometric feature distinguishes convergence with alternating error from convergence from one side?
5. The interface rounds displayed numbers but computes with binary floating point. Describe how finite precision eventually affects a chaotic orbit.

## Check your understanding

- A bifurcation is a qualitative change in long-run behaviour as a parameter varies.
- Cobwebs reveal iteration geometry; orbit tables verify numerical detail.
- A finite positive log-slope average suggests growth along the sampled orbit; an asymptotic exponent and a stated chaos property require further hypotheses and arguments.
- Determinism does not guarantee useful long-horizon predictability.
- Periodic windows show why chaos and order are interwoven rather than separated by one clean threshold.

## Accessible route and numerical boundary

All three parameters and four presets use labelled native controls. When the canvas has focus, left and right arrows change $r$ and up and down arrows change the initial value; Shift gives the finer documented parameter comparison. The orbit table reports the first sixteen iterates and their successive changes, while the log-slope readout describes its finite sample. The bifurcation cloud discards 260 iterates and retains 80 values at each point of a finite parameter grid. It can locate behavior to investigate, but it does not certify an asymptotic exponent, chaos, or the exact boundary or period of every nearby parameter. The [logistic-map chapter](#/item/library:book-dynamical-systems-first-course:one-dimensional-maps-logistic-family) proves the strict local multiplier test and the first two-cycle; the [chaos chapter](#/item/library:book-dynamical-systems-first-course:chaos-lyapunov-exponents-horseshoe) distinguishes a finite estimate from a theorem about an invariant system.
`;export{e as default};