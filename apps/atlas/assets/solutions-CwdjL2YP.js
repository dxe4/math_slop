var e=`---
parent_id: book-fields-fluids-continuum
matter_id: solutions
title: "Retained Earlier Exercise Solutions"
license: CC BY-SA 4.0
---

# Retained Earlier Exercise Solutions

The nineteen primary chapters each contain ten exercises with two hints and complete solutions. This compendium preserves the earlier three-per-chapter solutions, including the numerical chapter now continued in the numerical-mathematics primary. Use the chapter-local help for the expanded programme; these earlier mathematical statements and solutions remain available for continuity.

---

## Material and Spatial Descriptions

### Exercise 1
For the motion $x_{1} = X_{1} + t X_{2}$, $x_{2} = X_{2} + t X_{1}$, $x_{3} = X_{3}$, compute $F$, $J$, $v$, $L$, $D$, and $W$. Determine for which $t$ the motion is physically admissible.

**Solution.** The deformation gradient is

$$F = \\begin{pmatrix} 1 & t & 0 \\\\ t & 1 & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}, \\qquad J = \\det F = 1 - t^{2}.$$

Admissibility requires $J > 0$, so $|t| < 1$. The velocity in material form is $v = (X_{2}, X_{1}, 0)$. Inverting the motion gives $X_{1} = (x_{1} - t x_{2})/(1 - t^{2})$ and $X_{2} = (x_{2} - t x_{1})/(1 - t^{2})$, so the spatial velocity is

$$v = \\frac{1}{1 - t^{2}}\\bigl(x_{2} - t x_{1}, \\; x_{1} - t x_{2}, \\; 0\\bigr).$$

The spatial velocity gradient is

$$L = \\nabla v = \\frac{1}{1 - t^{2}}\\begin{pmatrix} -t & 1 & 0 \\\\ 1 & -t & 0 \\\\ 0 & 0 & 0 \\end{pmatrix}.$$

Since $L$ is symmetric, $D = L$ and $W = 0$. The motion is irrotational at every instant.

### Exercise 2
Show that for any motion, $\\dot{J} = J \\, \\mathrm{tr}(L) = J \\, \\nabla \\cdot v$.

**Solution.** By Jacobi's formula for the derivative of a determinant,

$$\\dot{J} = J \\, \\mathrm{tr}(F^{-1} \\dot{F}).$$

Since $\\dot{F}=LF$, we have $F^{-1}\\dot F=F^{-1}LF$, not generally $L$. Cyclicity gives $\\operatorname{tr}(F^{-1}LF)=\\operatorname{tr}(LFF^{-1})=\\operatorname{tr}L$, and hence $\\dot J=J\\operatorname{tr}L=J\\nabla\\cdot v$.

### Exercise 3
A velocity field is given by $v = (a x_{1}, -a x_{2}, 0)$ with $a > 0$ constant. Find the material motion map $\\chi(X, t)$ assuming $\\chi(X, 0) = X$. Compute $F$ and $J$ and verify the result of Exercise 2.

**Solution.** The ODEs $\\dot{x}_{1} = a x_{1}$, $\\dot{x}_{2} = -a x_{2}$, $\\dot{x}_{3} = 0$ with $x(0) = X$ have solutions $x_{1} = X_{1} e^{a t}$, $x_{2} = X_{2} e^{-a t}$, $x_{3} = X_{3}$. Thus

$$F = \\begin{pmatrix} e^{a t} & 0 & 0 \\\\ 0 & e^{-a t} & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}, \\qquad J = 1.$$

Since $\\nabla \\cdot v = a - a + 0 = 0$, we have $\\dot{J} = J \\cdot 0 = 0$, consistent with $J(t) = J(0) = 1$ for all $t$.

---

## Transport Theorem and Reynolds Transport

### Exercise 1
Let $\\Omega(t)$ be a material region and let $f(x, t) = x_{1} + t$. For the motion $x_{1} = X_{1} e^{t}$, $x_{2} = X_{2}$, $x_{3} = X_{3}$, compute both sides of the Reynolds transport theorem explicitly and verify equality.

**Solution.** The velocity is $v = (x_{1}, 0, 0)$ and $\\nabla \\cdot v = 1$. The material derivative is $Df / Dt = \\partial_{t} f + v \\cdot \\nabla f = 1 + x_{1} \\cdot 1 = 1 + x_{1}$. The integrand on the right is $Df / Dt + f \\, \\nabla \\cdot v = 1 + x_{1} + (x_{1} + t) = 1 + 2 x_{1} + t$.

For the left side, pull back: $\\hat{f} = X_{1} e^{t} + t$ and $J = e^{t}$. Then

$$\\int_{\\Omega(t)} f \\, \\mathrm{d}v = \\int_{\\Omega_{0}} (X_{1} e^{t} + t) e^{t} \\, \\mathrm{d}V = e^{2t} \\int_{\\Omega_{0}} X_{1} \\, \\mathrm{d}V + t e^{t} \\, \\mathrm{Vol}(\\Omega_{0}).$$

Differentiating with respect to $t$:

$$\\frac{\\mathrm{d}}{\\mathrm{d}t} \\int_{\\Omega(t)} f \\, \\mathrm{d}v = 2 e^{2t} \\int_{\\Omega_{0}} X_{1} \\, \\mathrm{d}V + (e^{t} + t e^{t}) \\, \\mathrm{Vol}(\\Omega_{0}).$$

The pulled-back right side is

$$\\int_{\\Omega_{0}} (1 + 2 X_{1} e^{t} + t) e^{t} \\, \\mathrm{d}V = e^{t} \\, \\mathrm{Vol}(\\Omega_{0}) + 2 e^{2t} \\int_{\\Omega_{0}} X_{1} \\, \\mathrm{d}V + t e^{t} \\, \\mathrm{Vol}(\\Omega_{0}),$$

which matches the differentiated left side.

### Exercise 2
A fixed control volume $V$ contains fluid with density $\\rho(x, t)$. Show that

$$\\frac{\\mathrm{d}}{\\mathrm{d}t} \\int_{V} \\rho \\, \\mathrm{d}v + \\int_{\\partial V} \\rho v \\cdot n \\, \\mathrm{d}a = 0$$

is equivalent to the differential continuity equation $\\partial_{t} \\rho + \\nabla \\cdot (\\rho v) = 0$.

**Solution.** Apply the divergence theorem to the surface integral: $\\int_{\\partial V} \\rho v \\cdot n \\, \\mathrm{d}a = \\int_{V} \\nabla \\cdot (\\rho v) \\, \\mathrm{d}v$. Since $V$ is fixed, the time derivative commutes with the integral. Thus

$$\\int_{V} \\bigl( \\partial_{t} \\rho + \\nabla \\cdot (\\rho v) \\bigr) \\, \\mathrm{d}v = 0.$$

Because $V$ is arbitrary, the integrand must vanish pointwise.

### Exercise 3
Consider a spherical material region of radius $R(t) = R_{0} (1 + \\alpha t)$ with uniform density $\\rho(t)$. Use the transport theorem to find how $\\rho(t)$ evolves if total mass is conserved.

**Solution.** Total mass is $M = \\rho(t) \\cdot \\frac{4}{3}\\pi R(t)^{3}$. Conservation requires $\\dot{M} = 0$. By the transport theorem,

$$0 = \\frac{\\mathrm{d}}{\\mathrm{d}t} \\int_{\\Omega(t)} \\rho \\, \\mathrm{d}v = \\int_{\\Omega(t)} \\left( \\frac{D\\rho}{Dt} + \\rho \\, \\nabla \\cdot v \\right) \\mathrm{d}v.$$

For uniform spherical expansion, $v = (\\dot{R}/R) x$ and $\\nabla \\cdot v = 3 \\dot{R}/R = 3\\alpha/(1 + \\alpha t)$. Since $D\\rho/Dt = \\dot{\\rho}$ for uniform $\\rho$, we obtain

$$\\dot{\\rho} + \\rho \\cdot \\frac{3\\alpha}{1 + \\alpha t} = 0 \\quad \\Longrightarrow \\quad \\rho(t) = \\rho_{0} (1 + \\alpha t)^{-3}.$$

This is consistent with $M = \\rho_{0} \\cdot \\frac{4}{3}\\pi R_{0}^{3}$ constant.

---

## Conservation of Mass

### Exercise 1
For steady flow in a pipe with cross-sectional areas $A_{1}$ and $A_{2}$ at two stations, show that $\\rho_{1} v_{1} A_{1} = \\rho_{2} v_{2} A_{2}$ for one-dimensional flow.

**Solution.** Integrate $\\nabla \\cdot (\\rho v) = 0$ over the pipe segment between the stations. By the divergence theorem, the flux through the lateral walls is zero (no penetration), so the net flux through the end faces vanishes: $-\\rho_{1} v_{1} A_{1} + \\rho_{2} v_{2} A_{2} = 0$.

### Exercise 2
A two-dimensional velocity field is $v = (x_{1} / (1 + t), -x_{2} / (1 + t))$. Find $\\rho(x, t)$ given $\\rho(x, 0) = \\rho_{0}$ constant.

**Solution.** We have $\\nabla \\cdot v = 1/(1 + t) - 1/(1 + t) = 0$, so the flow is incompressible. The material derivative of density is $D\\rho/Dt = \\partial_{t} \\rho + (x_{1}/(1+t)) \\partial_{1} \\rho - (x_{2}/(1+t)) \\partial_{2} \\rho = 0$. The ODEs for characteristics are $\\dot{x}_{1} = x_{1}/(1+t)$, $\\dot{x}_{2} = -x_{2}/(1+t)$, giving $x_{1} = X_{1}(1+t)$, $x_{2} = X_{2}/(1+t)$. Since $\\rho$ is constant along characteristics and $\\rho(X, 0) = \\rho_{0}$, we have $\\rho(x, t) = \\rho_{0}$ everywhere.

### Exercise 3
A shock wave moves with speed $s$ into stationary fluid of density $\\rho_{1}$. Behind the shock, the density is $\\rho_{2} > \\rho_{1}$ and the fluid moves with velocity $v_{2}$. Find $v_{2}$ in terms of $s$, $\\rho_{1}$, and $\\rho_{2}$.

**Solution.** The jump condition is $s(\\rho_{2} - \\rho_{1}) = \\rho_{2} v_{2} - \\rho_{1} \\cdot 0$. Solving,

$$v_{2} = s \\left( 1 - \\frac{\\rho_{1}}{\\rho_{2}} \\right).$$

Since $\\rho_{2} > \\rho_{1}$, the fluid behind the shock moves in the same direction as the shock, but slower than $s$.

---

## Cauchy Stress and Momentum Balance

### Exercise 1
For the stress tensor $\\sigma = \\begin{pmatrix} 50 & 30 & 0 \\\\ 30 & 20 & 0 \\\\ 0 & 0 & 10 \\end{pmatrix} \\, \\mathrm{MPa}$, find the traction on a plane with normal $n = (1, 1, 1)/\\sqrt{3}$. Decompose the traction into normal and shear components.

**Solution.** The traction is $t = \\sigma n = (80, 50, 10)/\\sqrt{3} \\, \\mathrm{MPa}$. The normal component is $t_{n} = (t \\cdot n) n = (140/3)(1, 1, 1)/\\sqrt{3} \\, \\mathrm{MPa}$. The shear component is $t_{s} = t - t_{n} = (100, 10, -110)/(3\\sqrt{3}) \\, \\mathrm{MPa}$. The shear magnitude is $|t_{s}| = \\sqrt{100^{2} + 10^{2} + 110^{2}}/(3\\sqrt{3}) = 10\\sqrt{74}/3 \\approx 28.67 \\, \\mathrm{MPa}$.

### Exercise 2
Show that for isotropic pressure $\\sigma = -p I$, the momentum balance reduces to $\\rho Dv/Dt = -\\nabla p + \\rho b$.

**Solution.** Since $\\sigma_{ij} = -p \\delta_{ij}$, we have $\\partial \\sigma_{ij} / \\partial x_{j} = -\\partial p / \\partial x_{i} = -(\\nabla p)_{i}$. Substituting into $\\rho Dv_{i}/Dt = \\partial \\sigma_{ij}/\\partial x_{j} + \\rho b_{i}$ gives the result.

### Exercise 3
A fluid at rest in a gravitational field $b = -g e_{3}$ has stress $\\sigma = -p(z) I$. Find $p(z)$ given $p(0) = p_{0}$.

**Solution.** With $v = 0$, the momentum balance gives $0 = -\\nabla p - \\rho g e_{3}$. Thus $\\partial p / \\partial x_{1} = \\partial p / \\partial x_{2} = 0$ and $\\partial p / \\partial z = -\\rho g$. For constant $\\rho$, integration yields $p(z) = p_{0} - \\rho g z$. The pressure increases linearly with depth.

---

## Energy and Thermodynamic Restrictions

### Exercise 1
For an incompressible Newtonian fluid with $\\sigma = -p I + 2\\mu D$, show that the stress power is $\\sigma : D = 2\\mu D : D \\ge 0$ when $\\mu \\ge 0$.

**Solution.** Since $D$ is traceless for incompressible flow ($\\nabla \\cdot v = 0$ implies $\\mathrm{tr}(D) = 0$), we have $I : D = 0$. Thus $\\sigma : D = (-p I + 2\\mu D) : D = 2\\mu D : D$. The tensor $D : D = D_{ij} D_{ij}$ is a sum of squares, hence nonnegative. With $\\mu \\ge 0$, the stress power is nonnegative, consistent with thermodynamic dissipation.

### Exercise 2
A rigid heat conductor has $v = 0$, constant density $\\rho>0$, $e = c T$ with constant $c > 0$, and constant conductivity $k>0$. Derive the heat equation from energy balance with Fourier conduction. For spatially varying $k$, the conduction term remains $\\nabla\\cdot(k\\nabla T)$. 

**Solution.** With $v = 0$, $D = 0$, and $q = -k \\nabla T$, the energy balance becomes $\\rho c \\partial_{t} T = \\nabla\\cdot(k\\nabla T) + \\rho r$. For constant $k$ this conduction term is $k\\Delta T$; with $r = 0$, this is the standard heat equation $\\partial_{t} T = \\alpha \\Delta T$ with thermal diffusivity $\\alpha = k/(\\rho c)$.

### Exercise 3
Show that for an isothermal elastic process with $W = \\mu \\varepsilon : \\varepsilon + (\\lambda/2)(\\mathrm{tr} \\varepsilon)^{2}$, the reduced dissipation inequality is satisfied with equality.

**Solution.** Here $W$ is energy per unit volume and the chapter's $\\psi$ is energy per unit mass, so for constant density set $\\psi=W/\\rho$. Then $\\sigma=\\partial W/\\partial\\varepsilon$, $D=\\dot\\varepsilon$, and $\\rho\\dot\\psi=\\dot W=\\sigma:D$. With fixed uniform temperature, the reduced inequality is satisfied with equality. This is reversible elastic storage within the stated small-strain, constant-density model.

---

## Objectivity and Constitutive Principles

### Exercise 1
Show that the spin tensor $W$ is not objective by computing $W^{*}$ under $x^{*} = c(t) + Q(t) x$.

**Solution.** We have $L^{*} = \\dot{Q} Q^{T} + Q L Q^{T}$. The symmetric part is $D^{*} = Q D Q^{T}$ because $\\dot{Q} Q^{T}$ is skew-symmetric. The skew-symmetric part is $W^{*} = \\dot{Q} Q^{T} + Q W Q^{T}$. Since $\\dot{Q} Q^{T} \\neq 0$ in general, $W^{*} \\neq Q W Q^{T}$, so $W$ is not objective.

### Exercise 2
Verify that the right Cauchy–Green tensor $C = F^{T} F$ is invariant under $F^{*} = Q F$.

**Solution.** $C^{*} = (F^{*})^{T} F^{*} = F^{T} Q^{T} Q F = F^{T} F = C$, since $Q^{T} Q = I$.

### Exercise 3
A proposed constitutive law for a fluid is $\\sigma = -p I + \\mu (\\nabla v + (\\nabla v)^{T}) + \\alpha W$. Show this violates objectivity unless $\\alpha = 0$.

**Solution.** Under a change of observer, $W^{*} = \\dot{Q} Q^{T} + Q W Q^{T}$. For objectivity we need $\\sigma^{*} = Q \\sigma Q^{T}$. The term $\\alpha W^{*}$ contributes $\\alpha \\dot{Q} Q^{T}$ plus $\\alpha Q W Q^{T}$. The extra term $\\alpha \\dot{Q} Q^{T}$ cannot be canceled by any other term, so objectivity requires $\\alpha = 0$.

---

## Linear Elasticity

### Exercise 1
For a uniaxial tension test with $\\sigma_{11} = \\sigma$, all other $\\sigma_{ij} = 0$, find the axial strain $\\varepsilon_{11}$ and the transverse strain $\\varepsilon_{22}$ in terms of $\\sigma$, $\\mu$, and $\\lambda$. Express the result using Young's modulus $E = \\mu(3\\lambda + 2\\mu)/(\\lambda + \\mu)$ and Poisson's ratio $\\nu = \\lambda/(2(\\lambda + \\mu))$.

**Solution.** From Hooke's law, $\\sigma_{11} = 2\\mu \\varepsilon_{11} + \\lambda(\\varepsilon_{11} + 2\\varepsilon_{22}) = \\sigma$ and $\\sigma_{22} = 2\\mu \\varepsilon_{22} + \\lambda(\\varepsilon_{11} + 2\\varepsilon_{22}) = 0$. Solving the second equation: $\\varepsilon_{22} = -\\lambda \\varepsilon_{11}/(2(\\lambda + \\mu)) = -\\nu \\varepsilon_{11}$. Substituting into the first: $\\sigma = \\varepsilon_{11}(2\\mu + \\lambda(1 - 2\\nu)) = E \\varepsilon_{11}$. Thus $\\varepsilon_{11} = \\sigma/E$ and $\\varepsilon_{22} = -\\nu \\sigma/E$.

### Exercise 2
A steel bar has $\\rho = 7850 \\, \\mathrm{kg}/\\mathrm{m}^{3}$, $\\mu = 79.3 \\, \\mathrm{GPa}$, and $\\lambda = 121 \\, \\mathrm{GPa}$. Compute $c_{P}$ and $c_{S}$ and verify $c_{P} > c_{S}$.

**Solution.** $c_{P} = \\sqrt{(\\lambda + 2\\mu)/\\rho} = \\sqrt{(121 + 158.6) \\times 10^{9} / 7850} = \\sqrt{279.6 \\times 10^{9} / 7850} \\approx \\sqrt{3.562 \\times 10^{7}} \\approx 5968 \\, \\mathrm{m}/\\mathrm{s}$. $c_{S} = \\sqrt{\\mu/\\rho} = \\sqrt{79.3 \\times 10^{9} / 7850} \\approx \\sqrt{1.010 \\times 10^{7}} \\approx 3178 \\, \\mathrm{m}/\\mathrm{s}$. Clearly $c_{P} > c_{S}$.

### Exercise 3
Show that for incompressible linear elasticity ($\\nabla \\cdot u = 0$), Navier's equations reduce to $\\rho u_{tt} = \\mu \\Delta u - \\nabla p + \\rho b$, where $p$ plays the role of a pressure Lagrange multiplier.

**Solution.** With $\\nabla \\cdot u = 0$, the term $(\\lambda + \\mu)\\nabla(\\nabla \\cdot u)$ vanishes. However, the constitutive law must be modified because $\\mathrm{tr}(\\varepsilon) = 0$ and $\\lambda$ is indeterminate. We write $\\sigma = -p I + 2\\mu \\varepsilon$, where $p$ enforces the incompressibility constraint. Then $\\nabla \\cdot \\sigma = -\\nabla p + \\mu \\Delta u$, giving the result.

---

## Newtonian Fluids

### Exercise 1
For steady incompressible plane Poiseuille flow of a constant-density fluid with constant viscosity $\\mu>0$ and no body force ($b=0$), between fixed plates $y = \\pm h$ with $h>0$, driven by a constant pressure gradient $-\\partial p/\\partial x = G>0$, solve for $u(y)$ and find the maximum velocity and wall shear stress. 

**Solution.** The equation is $\\mu u'' = -G$ with $u(\\pm h) = 0$. Integrating twice: $u(y) = -Gy^{2}/(2\\mu) + A y + B$. The boundary conditions give $B = Gh^{2}/(2\\mu)$ and $A = 0$ by symmetry. Thus

$$u(y) = \\frac{G}{2\\mu}(h^{2} - y^{2}).$$

The maximum velocity is $u_{\\max} = Gh^{2}/(2\\mu)$ at $y = 0$. The wall shear stress is $\\tau_{w} = \\mu |u'(h)| = G h$.

### Exercise 2
For a constant-density incompressible fluid with spatially constant viscosity $\\mu\\ge0$, derive the pressure Poisson equation by taking the divergence of the momentum equation.

**Solution.** Taking $\\nabla \\cdot$ of $\\rho (\\partial_{t} v + (v \\cdot \\nabla) v) = -\\nabla p + \\mu \\Delta v + \\rho b$ and using $\\nabla \\cdot v = 0$ (so $\\nabla \\cdot \\partial_{t} v = 0$ and $\\nabla \\cdot \\Delta v = 0$):

$$\\Delta p = -\\rho \\, \\nabla \\cdot ((v \\cdot \\nabla) v) + \\rho \\nabla \\cdot b.$$

The term $\\nabla \\cdot ((v \\cdot \\nabla) v) = \\partial_{i}(v_{j} \\partial_{j} v_{i}) = (\\partial_{i} v_{j})(\\partial_{j} v_{i}) + v_{j} \\partial_{j} (\\partial_{i} v_{i}) = \\mathrm{tr}(L^{2})$ since $\\nabla \\cdot v = 0$.

### Exercise 3
Show that for plane Couette flow, the kinetic energy is constant in time and the dissipation rate equals the power input from the moving upper plate.

**Solution.** For steady flow, $\\mathrm{d}K/\\mathrm{d}t = 0$. The dissipation rate is $\\int 2\\mu D : D \\, \\mathrm{d}v = \\int \\mu (u')^{2} \\, \\mathrm{d}v = \\mu (U/h)^{2} \\cdot (\\mathrm{area} \\cdot h)$. The power input from the upper plate is traction times velocity integrated over the plate: $\\int \\tau_{xy} U \\, \\mathrm{d}a = \\mu (U/h) \\cdot U \\cdot \\mathrm{area}$. These are equal.

---

## Dimensionless Regimes and Reduced Equations

### Exercise 1
Estimate the Reynolds number for blood flow in an artery of diameter $D = 2 \\, \\mathrm{cm}$ with average velocity $U = 30 \\, \\mathrm{cm}/\\mathrm{s}$. Blood has $\\rho \\approx 1060 \\, \\mathrm{kg}/\\mathrm{m}^{3}$ and $\\mu \\approx 3.5 \\times 10^{-3} \\, \\mathrm{Pa} \\cdot \\mathrm{s}$. Is Stokes flow appropriate?

**Solution.** $Re = \\rho U D / \\mu = 1060 \\cdot 0.30 \\cdot 0.02 / (3.5 \\times 10^{-3}) \\approx 1817$. This is much larger than 1, so Stokes flow is not appropriate. Inertial effects dominate.

### Exercise 2
For incompressible Stokes flow with constant density and viscosity and a conservative body force, show that the vorticity satisfies $\\Delta \\omega = 0$.

**Solution.** For constant $\\rho$ and $\\mu$, take the curl of the Stokes momentum equation $\\nabla p = \\mu \\Delta v + \\rho b$. Using $\\nabla \\times \\nabla p = 0$, $\\omega = \\nabla \\times v$, and $b=-\\nabla\\phi$, we get $0=\\mu\\Delta\\omega+\\rho\\nabla\\times b=\\mu\\Delta\\omega$, hence $\\Delta\\omega=0$.

### Exercise 3
Derive the boundary layer thickness scaling $\\delta \\sim L / \\sqrt{Re}$ by balancing inertial and viscous terms in the boundary layer equations.

**Solution.** In the boundary layer, let $x \\sim L$, $y \\sim \\delta$, $u \\sim U$, and $v \\sim U \\delta/L$ by continuity. The inertial term $u \\partial u / \\partial x \\sim U^{2}/L$. The viscous term $\\nu \\partial^{2} u / \\partial y^{2} \\sim \\nu U / \\delta^{2}$. Balancing: $U^{2}/L \\sim \\nu U / \\delta^{2}$, giving $\\delta^{2} \\sim \\nu L / U = L^{2}/Re$, so $\\delta \\sim L / \\sqrt{Re}$.

---

## Electromagnetic Field Balance

### Exercise 1
In a plane electromagnetic wave in vacuum, $E = E_{0} \\cos(k x - \\omega t) \\hat{y}$ and $B = (E_{0}/c) \\cos(k x - \\omega t) \\hat{z}$. Compute the Poynting vector and the time-averaged energy flux.

**Solution.** $S = (1/\\mu_{0}) E \\times B = (E_{0}^{2}/\\mu_{0} c) \\cos^{2}(k x - \\omega t) \\hat{x}$. The time average of $\\cos^{2}$ over one period is $1/2$, so $\\langle S \\rangle = (E_{0}^{2}/2\\mu_{0} c) \\hat{x}$. Using $c = 1/\\sqrt{\\mu_{0} \\varepsilon_{0}}$, this is also $\\langle S \\rangle = \\frac{1}{2} \\varepsilon_{0} c E_{0}^{2} \\hat{x}$.

### Exercise 2
A coaxial cable has inner radius $a$, outer radius $b$, and carries current $I$. The electric field is radial and the magnetic field is azimuthal. Show that the power transmitted is $P = V I$, where $V$ is the potential difference.

**Solution.** For $a < r < b$, $E = V/(r \\ln(b/a)) \\hat{r}$ and $B = \\mu_{0} I/(2\\pi r) \\hat{\\theta}$. The Poynting vector is $S = (V I)/(2\\pi r^{2} \\ln(b/a)) \\hat{z}$. Integrating over the annular cross section: $P = \\int_{a}^{b} S \\cdot 2\\pi r \\, \\mathrm{d}r = V I$.

### Exercise 3
Verify that for a source-free region ($\\rho_{e} = 0$, $J = 0$), Maxwell's equations imply the wave equations $\\partial_{tt} E - c^{2} \\Delta E = 0$ and $\\partial_{tt} B - c^{2} \\Delta B = 0$.

**Solution.** Take the curl of Faraday's law: $\\nabla \\times (\\nabla \\times E) = -\\partial_{t} (\\nabla \\times B) = -\\mu_{0} \\varepsilon_{0} \\partial_{tt} E$. Using $\\nabla \\times (\\nabla \\times E) = \\nabla(\\nabla \\cdot E) - \\Delta E = -\\Delta E$ (since $\\nabla \\cdot E = 0$), we get $\\Delta E = \\mu_{0} \\varepsilon_{0} \\partial_{tt} E$, or $\\partial_{tt} E - c^{2} \\Delta E = 0$. The same derivation applies to $B$.

---

## Coupled Field–Continuum Models

### Exercise 1
Show that for ideal MHD ($\\eta_{m} = 0$), the magnetic flux through any material surface is constant in time.

**Solution.** For a material surface $S(t)$ with boundary curve $C(t)$, the flux is $\\Phi = \\int_{S(t)} B \\cdot n \\, \\mathrm{d}a$. By the transport theorem for surfaces and the induction equation with $\\eta_{m} = 0$:

$$\\frac{\\mathrm{d}\\Phi}{\\mathrm{d}t} = \\int_{S} \\bigl( \\partial_{t} B + \\nabla \\times (B \\times v) \\bigr) \\cdot n \\, \\mathrm{d}a = \\int_{S} \\nabla \\times (v \\times B + B \\times v) \\cdot n \\, \\mathrm{d}a = 0.$$

### Exercise 2
Estimate the magnetic Reynolds number for liquid mercury ($\\sigma_{c} \\approx 1.04 \\times 10^{6} \\, \\mathrm{S}/\\mathrm{m}$) flowing at $U = 1 \\, \\mathrm{m}/\\mathrm{s}$ in a channel of width $L = 0.1 \\, \\mathrm{m}$.

**Solution.** $Rm = \\mu_{0} \\sigma_{c} U L = (4\\pi \\times 10^{-7}) \\cdot (1.04 \\times 10^{6}) \\cdot 1 \\cdot 0.1 \\approx 0.13$. Since $Rm < 1$, magnetic diffusion dominates over advection; the frozen-flux approximation is not valid.

### Exercise 3
For a thermoelastic solid with free energy $\\psi(\\varepsilon, T)$, derive the stress and entropy from $\\sigma = \\rho \\partial \\psi / \\partial \\varepsilon$ and $\\eta = -\\partial \\psi / \\partial T$. Show that the Clausius–Duhem inequality is satisfied if the heat flux obeys Fourier's law with $k \\ge 0$.

**Solution.** From $\\psi = \\psi(\\varepsilon, T)$, the chain rule gives $\\dot{\\psi} = (\\partial \\psi / \\partial \\varepsilon) : \\dot{\\varepsilon} + (\\partial \\psi / \\partial T) \\dot{T} = (\\sigma/\\rho) : D - \\eta \\dot{T}$. The reduced dissipation inequality becomes $\\rho(\\dot{\\psi} + \\eta \\dot{T}) - \\sigma : D + q \\cdot \\nabla T / T = q \\cdot \\nabla T / T = -k |\\nabla T|^{2}/T \\le 0$, which is satisfied for $k \\ge 0$.

---

## PDE Classification, Boundary Data, and Weak Forms

### Exercise 1
Classify the following PDEs: (a) $u_{xx} + u_{yy} = 0$, (b) $u_{t} = u_{xx}$, (c) $u_{tt} = u_{xx} + u_{yy}$, (d) $u_{tx} + u_{yy} = 0$.

**Solution.** (a) The principal matrix $\\operatorname{diag}(1,1)$ is definite: elliptic. (b) First order in $t$ and second order in $x$: parabolic. (c) In $(t,x,y)$ the principal matrix $\\operatorname{diag}(-1,1,1)$ has Lorentzian signature: hyperbolic relative to $t$. (d) In $(t,x,y)$ the principal matrix is $\\begin{pmatrix}0&1/2&0\\\\1/2&0&0\\\\0&0&1\\end{pmatrix}$, with eigenvalues $1/2,-1/2,1$. Setting $a=(t+x)/\\sqrt2$, $b=(t-x)/\\sqrt2$ gives $(u_{aa}-u_{bb})/2+u_{yy}=0$, hyperbolic relative to $b$. One cannot freeze $x$ while retaining $u_{tx}$.

### Exercise 2
Derive the weak form for the steady Stokes equations with velocity boundary conditions.

**Solution.** The Stokes equations are $-\\mu \\Delta v + \\nabla p = \\rho b$, $\\nabla \\cdot v = 0$. Multiply the momentum equation by a test function $w$ with $w = 0$ on $\\partial \\Omega$ and integrate by parts:

$$\\mu \\int_{\\Omega} \\nabla w : \\nabla v \\, \\mathrm{d}v - \\int_{\\Omega} (\\nabla \\cdot w) p \\, \\mathrm{d}v = \\int_{\\Omega} \\rho w \\cdot b \\, \\mathrm{d}v.$$

Multiply the continuity equation by a test function $q$:

$$\\int_{\\Omega} q \\, \\nabla \\cdot v \\, \\mathrm{d}v = 0.$$

The weak form seeks $(v, p) \\in V \\times Q$ such that these hold for all $(w, q) \\in V_{0} \\times Q$.

### Exercise 3
Solve the 1D heat equation $u_{t} = \\kappa u_{xx}$ on $[0, L]$ with $u(0, t) = u(L, t) = 0$ and $u(x, 0) = \\sin(\\pi x/L)$ by separation of variables.

**Solution.** Assume $u(x,t)=X(x)T(t)$ and define $-X''=\\alpha X$. The boundary conditions give $\\alpha_n=(n\\pi/L)^2$ and $X_n=\\sin(n\\pi x/L)$. Then $T'=-\\kappa\\alpha_nT$, so the temporal decay rate is $\\lambda_n=\\kappa(n\\pi/L)^2$. The initial condition matches $n=1$, so

$$u(x, t) = \\sin\\left(\\frac{\\pi x}{L}\\right) \\exp\\left(-\\frac{\\kappa \\pi^{2} t}{L^{2}}\\right).$$

---

## Viscous Flows and Exact Solutions

### Exercise 1
For steady incompressible plane Poiseuille flow with constant density $\\rho>0$, constant viscosity $\\mu>0$, no body force ($b=0$), plates $y=\\pm h$ with $h>0$, and driving pressure gradient $G=-\\partial p/\\partial x>0$, find the wall shear stress $\\tau_{w}$ and the friction factor $f = 2\\tau_{w}/(\\rho u_{m}^{2})$, where $u_{m} = Q/(2h)$ is the mean velocity. 

**Solution.** $\\tau_{w} = \\mu |u'(h)| = G h$. The mean velocity is $u_{m} = Gh^{2}/(3\\mu)$. Thus

$$f = \\frac{2 G h}{\\rho (Gh^{2}/3\\mu)^{2}} = \\frac{18\\mu^{2}}{\\rho G h^{3}} = \\frac{12}{Re_{h}},$$

where $Re_{h} = \\rho u_{m} (2h) / \\mu$. For the present Fanning convention $f=2\\tau_w/(\\rho u_m^2)$, fully developed pipe flow has $fRe_D=16$; the familiar value $64$ uses the Darcy friction factor, four times the Fanning factor.

### Exercise 2
Verify that the Hagen–Poiseuille velocity profile satisfies the Navier–Stokes equations.

**Solution.** For $v = (0, 0, u(r))$ in cylindrical coordinates, continuity is satisfied. The $r$ and $\\theta$ momentum equations reduce to $\\partial p/\\partial r = 0$ and $\\partial p/\\partial \\theta = 0$, so $p = p(z)$. The $z$-momentum equation is $\\mu (u'' + u'/r) = -G$. Substituting $u = G(a^{2} - r^{2})/(4\\mu)$: $u' = -Gr/(2\\mu)$, $u'' = -G/(2\\mu)$, so $u'' + u'/r = -G/(2\\mu) - G/(2\\mu) = -G/\\mu$. Thus $\\mu(u'' + u'/r) = -G$ as required.

### Exercise 3
For Stokes's second problem, find the fluid shear component and the plate-on-fluid traction at the wall, including their phases.

**Solution.** The fluid shear component is $\\sigma_{xy}(0,t)=-(\\sqrt{2}\\mu U/\\delta)\\cos(\\omega t+\\pi/4)$. Since the fluid's outward normal at the lower boundary is $-e_y$, the tangential traction exerted by the plate on the fluid is $t_x=-\\sigma_{xy}=(\\sqrt{2}\\mu U/\\delta)\\cos(\\omega t+\\pi/4)$, which leads the plate velocity by $45^{\\circ}$. Naming the traction direction avoids the ambiguous claim that “the wall stress lags.”

---

## Compressible Flow and Shock Waves

### Exercise 1
Compute the speed of sound in air at $T = 300 \\, \\mathrm{K}$. For air, $\\gamma = 1.4$ and $R = 287 \\, \\mathrm{J}/(\\mathrm{kg} \\cdot \\mathrm{K})$.

**Solution.** $c = \\sqrt{\\gamma R T} = \\sqrt{1.4 \\cdot 287 \\cdot 300} = \\sqrt{120540} \\approx 347 \\, \\mathrm{m}/\\mathrm{s}$.

### Exercise 2
A normal shock has upstream Mach number $Ma_{1} = 3$ in air ($\\gamma = 1.4$). Find the downstream Mach number $Ma_{2}$ and the pressure, density, and temperature ratios.

**Solution.** $Ma_{2}^{2} = (0.4 \\cdot 9 + 2)/(2.8 \\cdot 9 - 0.4) = 5.6/24.8 = 0.2258$, so $Ma_{2} \\approx 0.475$. $p_{2}/p_{1} = 1 + 2.8/2.4 \\cdot 8 = 10.33$. $\\rho_{2}/\\rho_{1} = 2.4 \\cdot 9/(0.4 \\cdot 9 + 2) = 21.6/5.6 = 3.857$. From the ideal gas law, $T_{2}/T_{1} = (p_{2}/p_{1})/(\\rho_{2}/\\rho_{1}) = 10.33/3.857 \\approx 2.68$.

### Exercise 3
Show that for a weak shock ($Ma_{1} \\to 1$), the entropy jump is third-order in the pressure jump: $[s] \\sim [p]^{3}$.

**Solution.** For an ideal gas, $s = c_{v} \\ln(p/\\rho^{\\gamma}) + \\mathrm{const}$. Expanding the Rankine--Hugoniot relations for $Ma_{1} = 1 + \\epsilon$ with $\\epsilon \\ll 1$, the pressure jump is $[p] \\sim \\epsilon$ to leading order, while the entropy jump involves cancellations at $O(\\epsilon)$ and $O(\\epsilon^{2})$, leaving $[s] \\sim \\epsilon^{3} \\sim [p]^{3}$.

---

## Acoustics and Elastic Wave Propagation

### Exercise 1
Find the fundamental frequency of an organ pipe of length $L = 2 \\, \\mathrm{m}$ open at both ends. The speed of sound in air is $c \\approx 340 \\, \\mathrm{m}/\\mathrm{s}$.

**Solution.** For an open pipe, pressure nodes at both ends give $k_{n} = n\\pi/L$ and $\\omega_{n} = n\\pi c/L$. The fundamental ($n = 1$) frequency is $f_{1} = c/(2L) = 340/4 = 85 \\, \\mathrm{Hz}$.

### Exercise 2
A steel rod ($\\rho = 7850 \\, \\mathrm{kg}/\\mathrm{m}^{3}$, $E = 200 \\, \\mathrm{GPa}$) has length $L = 1 \\, \\mathrm{m}$ and is fixed at both ends. Find the three lowest longitudinal vibration frequencies.

**Solution.** $c_{0} = \\sqrt{E/\\rho} \\approx 5050 \\, \\mathrm{m}/\\mathrm{s}$. Fixed ends require displacement nodes: $k_{n} = n\\pi/L$. Frequencies $f_{n} = n c_{0}/(2L) = n \\cdot 2525 \\, \\mathrm{Hz}$. The lowest three are $2525 \\, \\mathrm{Hz}$, $5050 \\, \\mathrm{Hz}$, and $7575 \\, \\mathrm{Hz}$.

### Exercise 3
A sound wave in air ($\\rho_{1} = 1.2 \\, \\mathrm{kg}/\\mathrm{m}^{3}$, $c_{1} = 340 \\, \\mathrm{m}/\\mathrm{s}$) hits a water surface ($\\rho_{2} = 1000 \\, \\mathrm{kg}/\\mathrm{m}^{3}$, $c_{2} = 1500 \\, \\mathrm{m}/\\mathrm{s}$). Find the reflection and transmission coefficients and the fraction of energy reflected.

**Solution.** $Z_{1} = 1.2 \\cdot 340 = 408 \\, \\mathrm{kg}/(\\mathrm{m}^{2} \\cdot \\mathrm{s})$, $Z_{2} = 1000 \\cdot 1500 = 1.5 \\times 10^{6} \\, \\mathrm{kg}/(\\mathrm{m}^{2} \\cdot \\mathrm{s})$. $R = (1.5 \\times 10^{6} - 408)/(1.5 \\times 10^{6} + 408) \\approx 0.9995$. $T \\approx 1.9995$. The energy reflection coefficient is $R^{2} \\approx 0.999$, so nearly all energy reflects.

---

## Numerical Methods for PDEs

### Exercise 1
For the FTCS scheme applied to $u_{t} = \\kappa u_{xx}$, perform von Neumann stability analysis and derive the condition $Fo \\le 1/2$.

**Solution.** Substitute $u_{j}^{n} = \\xi^{n} e^{i k j \\Delta x}$. The amplification factor is $\\xi = 1 - 4Fo \\sin^{2}(k \\Delta x/2)$. Stability requires $|\\xi| \\le 1$ for all $k$. The worst case is $\\sin^{2} = 1$, giving $|1 - 4Fo| \\le 1$, which implies $Fo \\le 1/2$.

### Exercise 2
For linear finite elements on a uniform 1D mesh with spacing $h$, show that the stiffness matrix for $-u'' = f$ with $u(0) = u(1) = 0$ is tridiagonal with $2/h$ on the diagonal and $-1/h$ on the off-diagonals.

**Solution.** The interior hat $\\phi_i$ has derivative $1/h$ on $[x_{i-1},x_i]$ and $-1/h$ on $[x_i,x_{i+1}]$. Integrating its squared derivative over those two elements gives $K_{ii}=2/h$. Adjacent hats overlap on one element with opposite derivatives, so $K_{i,i+1}=-1/h$; nonadjacent entries vanish.

### Exercise 3
Solve the 1D Poisson equation $-u'' = \\pi^{2} \\sin(\\pi x)$ on $[0, 1]$ with $u(0) = u(1) = 0$ using the finite difference method with $N = 4$ interior points. Compare to the exact solution $u(x) = \\sin(\\pi x)$.

**Solution.** With $h=1/5$, the sampled sine vector has discrete-Laplacian eigenvalue $\\lambda_h=4h^{-2}\\sin^2(\\pi h/2)\\approx9.5491503$. Hence $u_j=(\\pi^2/\\lambda_h)\\sin(\\pi j/5)$, where the scale factor is approximately $1.0335584$. The interior values are approximately $(0.607510,0.982972,0.982972,0.607510)$; the exact sampled solution is $(0.587785,0.951057,0.951057,0.587785)$.
`;export{e as default};