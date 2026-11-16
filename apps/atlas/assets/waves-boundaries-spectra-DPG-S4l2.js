var e=`---
id: course-waves-boundaries-spectra
title: "Waves, Boundaries, and Spectra"
level: advanced-undergraduate
estimated_minutes: 190
license: CC BY-SA 4.0
---

# Waves, Boundaries, and Spectra

<!-- euler-course-route -->

## Current course route

Use the [course page](/courses/atlas-waves-boundaries-spectra/) for its present preparation and available study steps. This Outline keeps its original explanations and exercises while a complete primary-book syllabus is being assigned.

A wave equation is local: acceleration at one point depends on curvature at that point. Yet a boundary turns this local rule into a global musical spectrum. This short course derives that connection, checks its units, solves one complete vibrating-string problem, and shows where the idealization breaks.

## 1. From a string element to a PDE

Let $u(x,t)$ be the small transverse displacement of a taut string. Position $x$ is measured in metres, time $t$ in seconds, and $u$ in metres. Assume:

- the string has constant mass per unit length \\(\\mu\\) in kilograms per metre;
- its tension $T$ in newtons is constant;
- slopes are small, so horizontal motion and the distinction between arc length and $dx$ can be neglected;
- there is no damping, forcing, or bending stiffness.

On a short element from $x$ to $x+\\Delta x$, the vertical component of tension is approximately $T u_x$. The net vertical force is therefore

\\[
T[u_x(x+\\Delta x,t)-u_x(x,t)]
\\approx T u_{xx}(x,t)\\Delta x.
\\]

The element's mass is \\(\\mu\\Delta x\\), and its transverse acceleration is
\\(u_{tt}\\). Newton's second law gives

\\[
\\mu\\Delta x\\,u_{tt}=T\\Delta x\\,u_{xx}.
\\]

After cancellation,

\\[
u_{tt}=c^2u_{xx},\\qquad c=\\sqrt{\\frac{T}{\\mu}}.
\\]

The units check is
\\([T/\\mu]=(\\mathrm{kg\\,m\\,s^{-2}})/(\\mathrm{kg\\,m^{-1}})
=\\mathrm{m^2\\,s^{-2}}\\), so \\(c\\) has units metres per second. It is the
propagation speed, not the transverse speed of a piece of string.

## 2. The equation is not the whole model

A PDE needs initial and boundary data. For a string of length $L$ fixed at both ends,

$u(0,t)=u(L,t)=0$.

An initial displacement $f(x)$ and velocity $g(x)$ specify

$u(x,0)=f(x)$ and $u_t(x,0)=g(x)$.

Compatibility matters: a classical fixed-end solution requires $f(0)=f(L)=0$, and if its velocity extends continuously to the endpoints it also requires $g(0)=g(L)=0$, because differentiating the fixed boundary values in time gives $u_t=0$ there. Still smoother solutions require further agreement between the PDE, initial data, and boundary data at the corners. Free ends instead impose approximately $u_x=0$. Replacing a value condition by a slope condition changes the allowed spectrum.

## 3. Separation of variables creates an eigenvalue problem

Seek a nonzero product solution $u(x,t)=X(x)Q(t)$. Substitution gives

$X Q'' = c^2 X'' Q$.

Where the factors are nonzero,

$Q''/(c^2 Q)=X''/X=-\\lambda$.

One side depends only on $t$, the other only on $x$; equality for every $x,t$ forces a constant. Thus

$X''+\\lambda X=0$, with $X(0)=X(L)=0$,

and

$Q''+c^2 \\lambda Q=0$.

The spatial boundary problem has nonzero solutions only for

\\[
\\lambda_n=\\left(\\frac{n\\pi}{L}\\right)^2,\\qquad
X_n(x)=\\sin\\left(\\frac{n\\pi x}{L}\\right),
\\quad n=1,2,\\ldots.
\\]

Why are other signs excluded? If $\\lambda=0$, $X$ is linear and both endpoints force $X=0$. If $\\lambda<0$, $X$ is a combination of real exponentials or hyperbolic functions, and again the two fixed conditions force the zero solution. Positive eigenvalues select sines.

Each mode oscillates at angular frequency

\\[
\\omega_n=\\frac{cn\\pi}{L},
\\]

so frequency in hertz is
\\(\\nu_n=\\omega_n/(2\\pi)=cn/(2L)\\). The integer spacing is a consequence
of a uniform ideal string and fixed ends, not a universal law of instruments.

## 4. Orthogonality lets modes coexist

For integers $m,n \\ge 1$,

\\[
\\int_0^L
\\sin\\left(\\frac{m\\pi x}{L}\\right)
\\sin\\left(\\frac{n\\pi x}{L}\\right)\\,dx
\\]

is zero when \\(m\\ne n\\) and \\(L/2\\) when \\(m=n\\). This orthogonality is
the infinite-dimensional analogue of perpendicular coordinate axes. It lets an
initial shape be resolved into independent coefficients:

\\[
f(x)=\\sum_{n=1}^{\\infty}a_n\\sin\\left(\\frac{n\\pi x}{L}\\right),
\\]

\\[
g(x)=\\sum_{n=1}^{\\infty}b_n\\sin\\left(\\frac{n\\pi x}{L}\\right),
\\]

where

\\[
a_n=\\frac{2}{L}\\int_0^L
f(x)\\sin\\left(\\frac{n\\pi x}{L}\\right)\\,dx,
\\]

\\[
b_n=\\frac{2}{L}\\int_0^L
g(x)\\sin\\left(\\frac{n\\pi x}{L}\\right)\\,dx.
\\]

The solution is

\\[
u(x,t)=\\sum_{n=1}^{\\infty}
\\left[
a_n\\cos(\\omega_n t)+\\frac{b_n}{\\omega_n}\\sin(\\omega_n t)
\\right]
\\sin\\left(\\frac{n\\pi x}{L}\\right).
\\]

Notice the units: $a_n$ has units of displacement; $b_n$ has units displacement per time; division by $\\omega_{n}$ returns displacement.

## 5. Worked example: one plucked shape

Take a one-metre string with wave speed \\(c=100\\ \\mathrm{m\\,s^{-1}}\\),
released from rest. Let its initial shape be the first mode with amplitude
\\(A=0.004\\ \\mathrm m\\):

$f(x)=A \\sin(\\pi x/L)$, $g(x)=0$.

Orthogonality gives $a_1=A$, all other $a_n=0$, and all $b_n=0$. Therefore

$u(x,t)=0.004 \\cos(100 \\pi t) \\sin(\\pi x)$ metres.

The angular frequency is \\(100\\pi\\ \\mathrm{rad\\,s^{-1}}\\); the ordinary
frequency is \\(50\\ \\mathrm{Hz}\\); the period is \\(0.020\\ \\mathrm s\\). At the
midpoint \\(x=0.5\\ \\mathrm m\\), the displacement is
\\(0.004\\cos(100\\pi t)\\ \\mathrm m\\). At each endpoint it is always zero.

The ideal energy is

\\[
E(t)=\\frac12\\int_0^L\\left(\\mu u_t^2+T u_x^2\\right)\\,dx.
\\]

Differentiate, substitute \\(\\mu u_{tt}=T u_{xx}\\), integrate the
\\(u_xu_{xt}\\) term by parts, and use fixed endpoints (hence \\(u_t=0\\)
there). The bulk terms cancel, giving \\(dE/dt=0\\). Energy alternates between
kinetic and elastic forms.

## 6. Numerical approximation and a stability scale

On grid points \\(x_j=j\\Delta x\\), approximate curvature by

\\[
u_{xx}(x_j,t)\\approx
\\frac{u_{j+1}-2u_j+u_{j-1}}{(\\Delta x)^2}.
\\]

A centred time step gives

$u_j^{k+1}=2u_j^k-u_j^{k-1}+r^2(u_{j+1}^k-2u_j^k+u_{j-1}^k)$,

where \\(r=c\\Delta t/\\Delta x\\). For this explicit one-dimensional scheme,
stability requires \\(r\\le 1\\). This is a causality-like numerical restriction:
a time step must not let the physical wave cross more than one grid interval.

Refining only \\(\\Delta t\\) does not remove spatial error, and refining only
\\(\\Delta x\\) while keeping \\(\\Delta t\\) fixed may violate stability. Compare
several joint refinements and monitor discrete energy rather than trusting a
smooth animation.

## 7. What changes for other wave systems?

The same architecture appears in acoustics, elastic solids, electromagnetic cavities, and quantum stationary states: an operator plus boundary conditions supplies eigenfunctions, and evolution assigns a frequency or decay rate to each one. Geometry enters through the spectrum. In two dimensions, rectangular membranes separate into products of sines; irregular drums need numerical eigenvalue solvers and can have repeated frequencies.

The heat equation \\(u_t=\\kappa u_{xx}\\) uses the same spatial eigenfunctions
but mode factors \\(\\exp(-\\kappa\\lambda_n t)\\). High-frequency modes decay
faster because \\(\\lambda_n\\) grows like \\(n^2\\). Wave dynamics oscillates;
diffusion smooths.

## Accessible diagram description

Imagine three panels that require no color. Panel one shows a horizontal string with both endpoints clamped and a single arch between them, labelled mode 1. Panel two has two alternating arches separated by a midpoint node, labelled mode 2. Panel three plots frequency against mode number as equally spaced dots on a rising straight line. Node positions are marked by short vertical ticks, so the structure remains legible in monochrome or through a tactile redraw.

## Failure modes and model limits

- Large slopes invalidate the small-angle force approximation and couple transverse and longitudinal motion.
- Real strings have stiffness, damping, nonuniform density, and imperfect endpoints, so overtones need not be exact integer multiples.
- Separation of variables finds a useful basis only when the operator, geometry, and conditions permit it.
- A truncated Fourier series can ring near a corner or discontinuity; adding modes does not make the pointwise overshoot disappear immediately.
- Boundary data that inject energy invalidate the fixed-boundary conservation calculation.
- A stable finite-difference computation can still be inaccurate or converge to the wrong model.

## Exercises

1. A string has \\(T=81\\ \\mathrm N\\) and
   \\(\\mu=0.01\\ \\mathrm{kg\\,m^{-1}}\\). Find \\(c\\) with units.
2. For \\(L=0.75\\ \\mathrm m\\) and \\(c=120\\ \\mathrm{m\\,s^{-1}}\\), find the
   first three ideal frequencies.
3. Verify directly that the second mode is zero at its interior node and state that node's position.
4. A released string has \\(f(x)=3\\ \\mathrm{mm}\\sin(2\\pi x/L)\\) and \\(g=0\\).
   Write \\(u(x,t)\\).
5. With \\(c=50\\ \\mathrm{m\\,s^{-1}}\\) and \\(\\Delta x=0.02\\ \\mathrm m\\), what
   is the largest stable \\(\\Delta t\\) permitted by \\(r\\le 1\\)?
6. Explain why a cosine spatial mode does not satisfy two fixed-end conditions on $[0,L]$ without adjustment.

## Worked solutions

1. \\(c=\\sqrt{81/0.01}=\\sqrt{8100}=90\\ \\mathrm{m\\,s^{-1}}\\).
2. \\(\\nu_n=cn/(2L)=120n/1.5=80n\\ \\mathrm{Hz}\\), so \\(80\\ \\mathrm{Hz}\\),
   \\(160\\ \\mathrm{Hz}\\), and \\(240\\ \\mathrm{Hz}\\).
3. $X_2(x)=\\sin(2 \\pi x/L)$ vanishes at $x=L/2$ because $\\sin(\\pi)=0$; this is the interior node.
4. Only mode 2 is present: $u=0.003 \\cos((2 \\pi c/L)t) \\sin(2 \\pi x/L)$ metres.
5. \\(\\Delta t\\le\\Delta x/c=0.02/50=0.0004\\ \\mathrm s\\).
6. A plain $\\cos(n \\pi x/L)$ equals $1$ at $x=0$, not zero. Cosines naturally fit a zero-slope condition there; fixed values select shifted combinations or sines.

## Final task: spectrum, approximation, and model discrepancy

Choose an ideal string with stated \\(L\\), \\(T\\), and \\(\\mu\\), plus either a
recorded plucked-string spectrum or a synthetic spectrum with a declared
stiffness or endpoint perturbation. Submit:

1. a derivation of \\(c\\) and the first five ideal frequencies with units;
2. one nontrivial initial shape and its first five Fourier coefficients;
3. an explicit finite-difference run at three joint refinements satisfying the
   stability condition;
4. a table of frequency error, maximum displacement error against a modal
   solution, and discrete-energy drift;
5. a comparison between ideal and observed frequencies;
6. one revised model hypothesis and one discrepancy it still cannot explain;
7. a text description carrying the same information as every plot.

**Rubric.** Derivation and boundary conditions count for 25%; modal analysis for
20%; numerical verification for 25%; discrepancy reasoning for 20%;
accessibility and reproducibility for 10%. Stability alone does not earn the
numerical credit: the refinement table must show whether error decreases.

## Connections and next steps

The derivation uses **ordinary differential equations**, **inner-product spaces**, and **Fourier methods**. Continue to **partial differential equations** for energy estimates and weak solutions, **spectral theory** for operators, and **PDE numerics** for finite-element and finite-difference approximations.
`;export{e as default};