var e=`---
parent_id: book-action-symmetry-mechanics
chapter_id: geometric-numerical-integration
title: "Geometric Numerical Integration"
level: advanced-undergraduate
estimated_minutes: 220
license: CC BY-SA 4.0
---

# Geometric Numerical Integration

Numerical methods for differential equations approximate continuous time by discrete steps. For Hamiltonian systems, generic methods often fail to preserve the geometric structure of phase space: energy drifts, symplectic areas distort, and long-time behavior becomes unreliable. Geometric numerical integration designs methods that respect the underlying geometry---symplecticity, reversibility, and conservation laws. This chapter surveys symplectic integrators, their backward error analysis, and applications to mechanics.

## Why geometric integration matters

Consider the harmonic oscillator $\\dot{q} = p$, $\\dot{p} = -q$ integrated with the explicit Euler method:

$$q_{n+1} = q_{n} + hp_{n}, \\qquad p_{n+1} = p_{n} - hq_{n}.$$

The method is first-order accurate, but over many steps the energy $E_{n} = (q_{n}^{2} + p_{n}^{2})/2$ grows exponentially: $E_{n} \\approx E_{0}(1 + h^{2})^{n}$. The phase portrait spirals outward.

The implicit Euler method spirals inward. Neither preserves the closed orbits of the true system.

**Definition (Symplectic integrator).** A numerical method for a Hamiltonian system is *symplectic* if the one-step map $\\Phi_{h}: (q_{n}, p_{n}) \\mapsto (q_{n+1}, p_{n+1})$ satisfies $\\Phi_{h}^{*}\\omega = \\omega$, where $\\omega = \\sum_{i}dq_{i} \\wedge dp_{i}$.

## Symplectic Euler methods

The **symplectic Euler-A** method updates momentum first, then position:

$$p_{n+1} = p_{n} - h\\frac{\\partial H}{\\partial q}(q_{n}, p_{n+1}), \\qquad q_{n+1} = q_{n} + h\\frac{\\partial H}{\\partial p}(q_{n}, p_{n+1}).$$

The **symplectic Euler-B** method updates position first:

$$q_{n+1} = q_{n} + h\\frac{\\partial H}{\\partial p}(q_{n+1}, p_{n}), \\qquad p_{n+1} = p_{n} - h\\frac{\\partial H}{\\partial q}(q_{n+1}, p_{n}).$$

Both are first-order accurate and symplectic. For separable Hamiltonians $H = T(p) + V(q)$, symplectic Euler-A reduces to:

$$p_{n+1} = p_{n} - hV'(q_{n}), \\qquad q_{n+1} = q_{n} + hT'(p_{n+1}).$$

## Worked example: harmonic oscillator with symplectic Euler

For $H = \\frac{1}{2}(p^{2} + q^{2})$, symplectic Euler-A gives:

$$p_{n+1} = p_{n} - hq_{n}, \\qquad q_{n+1} = q_{n} + hp_{n+1} = q_{n} + h(p_{n} - hq_{n}) = q_{n} + hp_{n} - h^{2}q_{n}.$$

The update matrix is

$$\\begin{pmatrix} q_{n+1} \\\\ p_{n+1} \\end{pmatrix} = \\begin{pmatrix} 1 - h^{2} & h \\\\ -h & 1 \\end{pmatrix} \\begin{pmatrix} q_{n} \\\\ p_{n} \\end{pmatrix}.$$

The determinant of this matrix is $(1 - h^{2}) \\cdot 1 - h(-h) = 1 - h^{2} + h^{2} = 1$. Area preservation (symplecticity) is verified. The eigenvalues satisfy $\\lambda^{2} - (2 - h^{2})\\lambda + 1 = 0$. For $0 < |h| < 2$, the eigenvalues form a nonreal conjugate pair with $|\\lambda| = 1$, so the orbit is stable.

## The Stormer--Verlet method

For separable Hamiltonians, the **Stormer--Verlet** (or leapfrog) method is:

$$p_{n+1/2} = p_{n} - \\frac{h}{2}V'(q_{n}),$$
$$q_{n+1} = q_{n} + hT'(p_{n+1/2}),$$
$$p_{n+1} = p_{n+1/2} - \\frac{h}{2}V'(q_{n+1}).$$

This is a second-order symplectic method. It is time-reversible and widely used in molecular dynamics and celestial mechanics.

## Worked example: double-well potential

Consider $H = \\frac{p^{2}}{2} + V(q)$ with $V(q) = \\frac{1}{4}(q^{2} - 1)^{2}$. The potential has minima at $q = \\pm 1$ and a local maximum at $q = 0$.

For initial conditions $(q,p)=(1,0.5)$, the energy is $E=0.125< V(0)=0.25$, so the particle remains in the right-hand well in the exact dynamics. A Stormer--Verlet computation can test whether a chosen step reproduces this bounded motion. Any quoted error size or step count must come from an identified run; it cannot be inferred from the method's order alone.

## Backward error analysis

A symplectic method can be described by a formal *modified* Hamiltonian locally; a suitably truncated modified flow approximates the numerical step under the hypotheses below.

**Backward-error principle.** For analytic Hamiltonians and symplectic methods on a region where the numerical trajectory remains controlled, one can truncate a formal modified Hamiltonian

$$\\tilde H_h=H+h^pH_{p+1}+h^{p+1}H_{p+2}+\\cdots$$

so that its time-$h$ flow matches the numerical step to high order. With a suitable optimal truncation and sufficiently small fixed $h$, the defect can be exponentially small over a long but finite interval. These hypotheses and time limits matter: the formal series need not converge, and the claim is not uniform for every smooth Hamiltonian.

For the symplectic Euler method applied to $H = p^{2}/(2) + V(q)$, the modified Hamiltonian is

$$\\tilde{H}_{h} = H - \\frac{h}{2}pV'(q) + O(h^{2}).$$

Under the hypotheses and finite-time bounds above, the numerical solution nearly conserves a suitably truncated $\\tilde{H}_{h}$, and $H$ stays close to its initial value. Symplecticity alone does not guarantee bounded or oscillatory energy error.

## Higher-order methods

**Composition methods:** A second-order symplectic method can be composed with itself using the Suzuki--Yoshida scheme to obtain methods of order 4, 6, etc.

**Runge--Kutta methods:** The Gauss--Legendre Runge--Kutta methods (implicit, based on collocation at Gaussian points) are symplectic. The 2-stage Gauss method is fourth-order and symplectic.

For separable Hamiltonians, **partitioned Runge--Kutta methods** and **symplectic partitioned Runge--Kutta (SPRK)** methods provide explicit higher-order symplectic integrators.

## Variable step sizes and symplecticity

Standard symplectic integrators use fixed step sizes. Variable step sizes can destroy symplecticity unless carefully constructed. One approach is to use a time-reparameterization: introduce a fictitious time variable $\\tau$ and treat the step size as a dynamical variable.

## Common errors

- **Assuming symplecticity implies energy conservation:** Symplecticity preserves the symplectic form, not necessarily the original energy. Near conservation of a truncated modified Hamiltonian needs the regularity, controlled trajectory, sufficiently small fixed step and finite-time hypotheses above; arbitrary step sizes need not give bounded energy error.
- **Ignoring implicit solves and stability hypotheses:** The general symplectic Euler-A formula is implicit in $p_{n+1}$, and Euler-B is implicit in $q_{n+1}$; they become explicit for the separable form $H=T(p)+V(q)$. Gauss--Legendre Runge--Kutta methods are A-stable for the linear test equation, but that is not unconditional stability for every nonlinear or stiff Hamiltonian. Step size, solver convergence, and problem structure still matter.
- **Ignoring time-reversibility:** Not all symplectic methods are time-reversible. Reversibility is important for long-time statistical properties.

## Practice exercises

### Exercise 1

Show that the explicit Euler method for the harmonic oscillator is not symplectic by computing the Jacobian determinant of the one-step map.

**Solution.** Explicit Euler: $q_{n+1} = q_{n} + hp_{n}$, $p_{n+1} = p_{n} - hq_{n}$. The Jacobian is $J = \\begin{pmatrix}1 & h \\\\ -h & 1\\end{pmatrix}$ with $\\det J = 1 + h^{2} \\neq 1$. Since $\\det J \\neq 1$, the method is not symplectic.

### Exercise 2

Implement the Stormer--Verlet method for the pendulum equation $\\ddot{\\theta} + \\sin\\theta = 0$ with $\\theta(0) = \\pi/2$, $\\dot{\\theta}(0) = 0$, and $h = 0.01$. Verify that the energy $E = \\dot{\\theta}^{2}/2 - \\cos\\theta$ is approximately conserved.

**Solution.** In Hamiltonian form: $\\dot{\\theta} = p$, $\\dot{p} = -\\sin\\theta$. Stormer--Verlet gives $p_{1/2}=-h/2$, $\\theta_1=\\pi/2-h^2/2$, and $p_1=-h/2-(h/2)\\cos(h^2/2)$. Expanding the exact one-step energy,

$$E_1=\\frac{p_1^2}{2}-\\cos\\theta_1=-\\frac{h^6}{24}+O(h^{10}),$$

while $E_0=0$. This particularly small first-step defect comes from the chosen initial data; global second-order convergence must be checked over a fixed time interval rather than inferred from this cancellation alone.

### Exercise 3

Prove that the Stormer--Verlet method is time-reversible: applying the method with step $-h$ to $(q_{n+1}, p_{n+1})$ yields $(q_{n}, p_{n})$.

**Solution.** The Stormer--Verlet step with $-h$ from $(q_{n+1}, p_{n+1})$: $p_{n+1/2}' = p_{n+1} + \\frac{h}{2}V'(q_{n+1}) = p_{n+1/2}$. Then $q_{n}' = q_{n+1} - hT'(p_{n+1/2}') = q_{n+1} - hT'(p_{n+1/2}) = q_{n}$. Finally, $p_{n}' = p_{n+1/2}' + \\frac{h}{2}V'(q_{n}') = p_{n+1/2} + \\frac{h}{2}V'(q_{n}) = p_{n}$.

### Exercise 4

For the symplectic Euler-A method applied to $H = p^{2}/(2m) + V(q)$, derive the modified Hamiltonian to $O(h)$.

**Solution.** The symplectic Euler-A map is $p_{n+1} = p_{n} - hV'(q_{n})$, $q_{n+1} = q_{n} + \\frac{h}{m}p_{n+1}$. Expanding in $h$ and matching with the flow of a modified Hamiltonian gives $\\tilde{H} = H - \\frac{h}{2m}pV'(q) + O(h^{2})$.

### Exercise 5

Explain why symplectic integrators are particularly important for long-time simulations of the solar system.

**Solution.** The solar system is modeled as a nearly integrable Hamiltonian system, and secular numerical energy drift can contaminate very long integrations. Symplectic methods preserve the symplectic form exactly and, under suitable step-size and regularity hypotheses, backward-error analysis relates a finite-time computation to a nearby modified Hamiltonian. This often improves long-time qualitative fidelity, but it does not guarantee that all KAM tori, resonances, or orbital boundedness of the full Solar System are preserved for billions of years.

## Connections

Geometric numerical integration preserves the mathematical structures developed throughout this book. Symplectic integrators respect the symplectic form introduced in **Symplectic Geometry** and the conservation laws derived from **Lie Groups and Symmetry**. The modified Hamiltonian of backward error analysis connects to **Perturbation Methods**, where nearby integrable systems are analyzed. In **Field Theory Action**, the need for structure-preserving discretization becomes even more critical for gauge theories.
`;export{e as default};