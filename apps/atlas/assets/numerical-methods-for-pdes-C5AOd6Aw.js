var e=`---
parent_id: book-fields-fluids-continuum
chapter_id: numerical-methods-for-pdes
title: "Numerical Methods for PDEs"
level: graduate
estimated_minutes: 270
license: CC BY-SA 4.0
---

# Numerical Methods for PDEs

## Learning purpose

This chapter introduces finite difference, finite element, and finite volume methods for the PDEs of continuum mechanics. You will learn to formulate discrete equations, analyze stability, and verify numerical solutions against exact solutions.

## Finite difference methods

For the 1D heat equation $u_{t} = \\kappa u_{xx}$ on a uniform grid $x_{j} = j \\Delta x$, $t^{n} = n \\Delta t$, the explicit forward-time centered-space (FTCS) scheme is

$$\\frac{u_{j}^{n+1} - u_{j}^{n}}{\\Delta t} = \\kappa \\frac{u_{j+1}^{n} - 2u_{j}^{n} + u_{j-1}^{n}}{\\Delta x^{2}}.$$

Von Neumann stability analysis shows this scheme is stable only if the Fourier number satisfies

$$Fo = \\frac{\\kappa \\Delta t}{\\Delta x^{2}} \\le \\frac{1}{2}.$$

This is a severe restriction: halving $\\Delta x$ requires dividing $\\Delta t$ by four.

The implicit backward-time centered-space (BTCS) scheme is unconditionally stable:

$$\\frac{u_{j}^{n+1} - u_{j}^{n}}{\\Delta t} = \\kappa \\frac{u_{j+1}^{n+1} - 2u_{j}^{n+1} + u_{j-1}^{n+1}}{\\Delta x^{2}}.$$

At each time step, a tridiagonal linear system must be solved. The Crank--Nicolson scheme averages explicit and implicit evaluations and is second-order accurate in time and unconditionally stable.

## Finite element methods

For the Poisson equation $-\\Delta u = f$ in $\\Omega$ with $u = 0$ on $\\partial \\Omega$, the weak form is: find $u \\in H_{0}^{1}(\\Omega)$ such that

$$\\int_{\\Omega} \\nabla u \\cdot \\nabla v \\, \\mathrm{d}x = \\int_{\\Omega} f v \\, \\mathrm{d}x \\quad \\text{for all } v \\in H_{0}^{1}(\\Omega).$$

Here $H^1(\\Omega)$ consists of square-integrable functions with square-integrable first weak derivatives, and $H_0^1(\\Omega)$ consists of those with zero boundary trace. The preceding weak-form chapter explains these as working spaces; the analysis of traces and existence lies beyond this volume.

The Galerkin approximation uses a finite-dimensional subspace $V_{h} \\subset H_{0}^{1}(\\Omega)$, typically piecewise polynomials on a mesh. The discrete problem is: find $u_{h} \\in V_{h}$ such that

$$\\int_{\\Omega} \\nabla u_{h} \\cdot \\nabla v_{h} \\, \\mathrm{d}x = \\int_{\\Omega} f v_{h} \\, \\mathrm{d}x \\quad \\text{for all } v_{h} \\in V_{h}.$$

With Lagrange basis functions $\\{\\phi_{i}\\}$, the stiffness matrix has entries $K_{ij} = \\int_{\\Omega} \\nabla \\phi_{i} \\cdot \\nabla \\phi_{j} \\, \\mathrm{d}x$ and the load vector has entries $F_{i} = \\int_{\\Omega} f \\phi_{i} \\, \\mathrm{d}x$. The system $K u = F$ is symmetric positive definite for this elliptic problem.

## Finite volume methods

For a conservation law $\\partial_{t} u + \\partial_{x} F(u) = 0$, the finite volume method evolves cell averages:

$$\\frac{\\mathrm{d}\\bar{u}_{j}}{\\mathrm{d}t} = -\\frac{1}{\\Delta x}\\bigl( F_{j+1/2} - F_{j-1/2} \\bigr),$$

where $F_{j+1/2}$ is a numerical flux computed from the neighboring cell values. The Lax--Friedrichs flux is

$$F_{j+1/2} = \\frac{1}{2}\\bigl( F(u_{j}) + F(u_{j+1}) \\bigr) - \\frac{\\alpha}{2}(u_{j+1} - u_{j}),$$

where $\\alpha \\ge \\max |F'(u)|$ is a stabilization parameter. This flux is dissipative and smears discontinuities; higher-resolution fluxes (e.g., Godunov, Roe) use characteristic information.

## Verification by manufactured solutions

To verify a numerical code, choose a smooth function $u_{\\mathrm{exact}}$, compute the source term $f$ that makes it satisfy the PDE, and compare the numerical solution to $u_{\\mathrm{exact}}$. For the Poisson equation, if $u_{\\mathrm{exact}} = \\sin(\\pi x) \\sin(\\pi y)$ on $[0, 1]^{2}$, then $f = 2\\pi^{2} \\sin(\\pi x) \\sin(\\pi y)$. The $L^{2}$ error should converge at the theoretical rate (second-order for linear elements).

## Summary and connections

This chapter introduced finite difference, finite element, and finite volume methods, with stability analysis and verification procedures. These numerical tools are essential for solving the complex PDEs of continuum mechanics when exact solutions are unavailable.

In the previous chapter, *Acoustics and Elastic Wave Propagation*, we studied analytical wave solutions. This chapter concludes the book's progression from kinematics and balance laws through constitutive theory to computational methods.

## Exercises

### Exercise 1
For the FTCS scheme applied to $u_{t} = \\kappa u_{xx}$, perform von Neumann stability analysis and derive the condition $Fo \\le 1/2$.

**Solution.** Substitute $u_{j}^{n} = \\xi^{n} e^{i k j \\Delta x}$. The amplification factor is $\\xi = 1 - 4Fo \\sin^{2}(k \\Delta x/2)$. Stability requires $|\\xi| \\le 1$ for all $k$. The worst case is $\\sin^{2} = 1$, giving $|1 - 4Fo| \\le 1$, which implies $Fo \\le 1/2$.

### Exercise 2
For linear finite elements on a uniform 1D mesh with spacing $h$, show that the stiffness matrix for $-u'' = f$ with $u(0) = u(1) = 0$ is tridiagonal with $2/h$ on the diagonal and $-1/h$ on the off-diagonals.

**Solution.** The interior hat function $\\phi_i$ has derivative $1/h$ on the element $[x_{i-1},x_i]$, derivative $-1/h$ on $[x_i,x_{i+1}]$, and zero elsewhere. Hence

$$K_{ii}=\\int(\\phi_i')^2\\,dx=\\frac{1}{h^2}h+\\frac{1}{h^2}h=\\frac{2}{h}.$$

Adjacent hats overlap on one element and have opposite derivatives there, so $K_{i,i+1}=(-1/h)(1/h)h=-1/h$. Nonadjacent hats have disjoint interiors, giving zero entries.

### Exercise 3
Solve the 1D Poisson equation $-u'' = \\pi^{2} \\sin(\\pi x)$ on $[0, 1]$ with $u(0) = u(1) = 0$ using the finite difference method with $N = 4$ interior points. Compare to the exact solution $u(x) = \\sin(\\pi x)$.

**Solution.** With $h=\\Delta x=1/5$, the discrete equations are

$$\\frac{-u_{j-1}+2u_j-u_{j+1}}{h^2}=\\pi^2\\sin(\\pi j/5),\\qquad j=1,\\ldots,4.$$

The sampled sine vector is an eigenvector of the tridiagonal difference operator with eigenvalue $\\lambda_h=4h^{-2}\\sin^2(\\pi h/2)\\approx9.5491503$. Thus

$$u_j=\\frac{\\pi^2}{\\lambda_h}\\sin(\\pi j/5),$$

and $\\pi^2/\\lambda_h\\approx1.0335584$. The numerical values are approximately $(0.607510,0.982972,0.982972,0.607510)$, compared with exact samples $(0.587785,0.951057,0.951057,0.587785)$. This exhibits the expected second-order error without claiming that the samples themselves solve the discrete equations.
`;export{e as default};