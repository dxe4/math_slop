var e=`---
id: deep-dive-pde-heat-wave-laplace-equations
title: "Heat, wave and Laplace equations"
license: CC BY-SA 4.0
---

# Heat, wave and Laplace equations

An equation containing second derivatives can describe a spreading temperature, an oscillating string or a stationary potential. The derivatives look related, but the associated questions require different data. A formula becomes a PDE problem only after its domain, time direction and initial or boundary conditions have been stated.

This **Years 2–3 (L3)** article assumes ordinary differentiation and partial derivatives, with preparation in [Continuity, Derivatives, and Hypothesis Audits](/books/proof-safe-real-analysis/continuity-differentiation/) and [A compass that points uphill](/articles/multi-gradient-compass/). We compare three classical models and verify simple solutions. The fuller [Classification and Model Problems chapter](/books/partial-differential-equations/classification-model-problems/) owns the longer course treatment.

## The unknown depends on several variables

For a function $u(x,t)$, the symbol $u_t$ means its partial derivative with respect to time, and $u_{xx}$ its second partial derivative with respect to position. The other variable is held fixed when taking each partial derivative. In several spatial dimensions the Laplacian is the sum of second derivatives in the spatial coordinates, written $\\Delta u$.

Our one-dimensional heat and wave models, with fixed positive constants $\\kappa$ and $c$, are

$$u_t=\\kappa u_{xx},\\qquad u_{tt}=c^2u_{xx}.$$

For a stationary two-dimensional function $w(x,y)$, Laplace's equation is

$$\\Delta w=w_{xx}+w_{yy}=0.$$

A classical solution has the derivatives appearing in the equation and satisfies it at every point of the stated open domain. An equation by itself does not say which particular solution is intended. Even the zero function solves all three homogeneous models.

## Match the data to the question

For forward heat flow on a bounded interval, specify one initial temperature profile and suitable values or fluxes at the spatial endpoints as time passes. The first time derivative evolves that initial state. With positive diffusivity, spatial oscillations in the simple modes below decay.

A wave problem needs both initial displacement and initial velocity, as well as boundary conditions when the spatial domain is bounded. Two time derivatives leave room for two independent initial profiles. A string released from rest and one given an initial push need not follow the same motion even if their initial shapes agree.

A Laplace problem has no time variable. A typical bounded-domain problem specifies the stationary value on the whole spatial boundary. These are Dirichlet data. Prescribing a normal derivative instead gives a different problem with its own compatibility and uniqueness questions.

| Model | Relation | Typical bounded-domain data |
| --- | --- | --- |
| Heat | $u_t=\\kappa\\Delta u$ | One initial profile and lateral spatial boundary data |
| Wave | $u_{tt}=c^2\\Delta u$ | Initial displacement, initial velocity and spatial boundary data |
| Laplace | $\\Delta w=0$ | A spatial boundary condition for a stationary unknown |

The table describes typical problem formulations, not an existence theorem for every imaginable datum or domain. Continuity also imposes corner compatibility: if a heat solution is continuously zero on an endpoint for all times, its initial profile must have value zero at that endpoint.

## Worked example: the same shape, different time laws

On $0<x<\\pi$, take the spatial shape $\\sin x$ with zero endpoint values. The function

$$h(x,t)=e^{-\\kappa t}\\sin x$$

satisfies the heat equation because $h_t=-\\kappa h$ and $h_{xx}=-h$. It begins with profile $\\sin x$ and its amplitude decays exponentially.

The wave function

$$v(x,t)=\\cos(ct)\\sin x$$

has $v_{tt}=-c^2v$ and $v_{xx}=-v$, so it satisfies the wave equation. It begins with the same profile but has initial velocity zero. Its amplitude oscillates rather than following the heat decay law.

More generally, $(\\cos(ct)+A\\sin(ct))\\sin x$ solves the same wave equation and has the same initial displacement for every real $A$. Its initial velocity is $Ac\\sin x$. This family proves directly that displacement alone cannot determine the wave solution: the unspecified velocity leaves a real parameter free.

The calculations verify solutions with particular data. They do not prove that every possible initial profile has a solution in the same classical regularity class. The heat comparison argument in the next article proves uniqueness in its stated class, which is another distinct claim.

## A stationary calculation

For $w(x,y)=x^2-y^2$, the second derivatives are two and minus two, so their sum is zero. Thus $w$ is harmonic on the plane, including the square $(-1,1)^2$.

On its vertical sides, the boundary values are $1-y^2$; on its horizontal sides, they are $x^2-1$. These formulas agree at the four corners. They describe boundary values for this particular equilibrium, with no initial time slice to prescribe. A label such as “second order” does not by itself make this a time-evolution problem.

In physical units the constants also differ: wave speed has units length per time, while diffusivity has units length squared per time. The two coefficients cannot be interchanged merely because both equations contain a spatial Laplacian.

## What the three-way distinction helps us ask

The heat model asks how initial and boundary values control future temperatures. The wave model asks how two initial profiles propagate or oscillate. The Laplace model asks for a stationary spatial balance with boundary information. Each route still needs separate existence, uniqueness and stability theorems in specified function spaces.

The earlier [Change, Motion, and Patterns Before the Machinery](/articles/differential-equations-first-encounter/) offers an intuitive entry, while [Boundaries, Modes, and Stationary Paths in Differential Equations](/articles/pde-fourier-variational-structure/) is a later companion with broader preparation. Neither replaces the hypotheses of a particular classical problem.

## Exercises

### Exercise 1
<a id="deep-dive-pde-heat-wave-laplace-equations-ex-1"></a>
Which of $p(x,y)=x^2-y^2$ and $q(x,y)=x^2+y^2$ is harmonic on the plane? Give a derivative argument valid at every point, rather than checking selected values.

<details data-euler-reveal="hint"><summary>Hint 1</summary>
Take the second derivative in each spatial coordinate separately.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Harmonicity requires the sum to vanish as a function on the whole domain.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
For $p$, the second derivatives are $p_{xx}=2$ and $p_{yy}=-2$, so $\\Delta p=0$ everywhere. For $q$, both second derivatives equal two, so $\\Delta q=4$ everywhere and it is not harmonic. The derivative identities hold for arbitrary real coordinates and therefore prove the domain-wide assertions.
</details>

### Exercise 2
<a id="deep-dive-pde-heat-wave-laplace-equations-ex-2"></a>
For $c>0$, let $u(x,t)=(a\\cos(ct)+b\\sin(ct))\\sin x$. Which choices of $a,b$ give initial displacement $\\sin x$ and initial velocity $2c\\sin x$? Why would the first condition alone be insufficient?

<details data-euler-reveal="hint"><summary>Hint 1</summary>
Evaluate the function and its first time derivative at zero.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
The cosine coefficient controls displacement, while the sine coefficient controls velocity for this family.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
At zero, $u(x,0)=a\\sin x$, so $a=1$. Differentiating gives $u_t(x,0)=bc\\sin x$, so $b=2$ because $c>0$. If only displacement were given, $a$ would be fixed but $b$ could be any real number. These different choices produce solutions with different initial velocities and hence different later values.
</details>

## Continue into the book

Read the equation together with its unknown, domain and data. Similar derivative symbols do not make diffusion, propagation and equilibrium interchangeable. Continue with [Classification and Model Problems](/books/partial-differential-equations/classification-model-problems/) and [The heat equation and the maximum principle](/articles/pde-heat-maximum-principle/) for a precise bound on forward heat flow.
`;export{e as default};