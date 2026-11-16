var e=`---
id: book-two-state-quantum-mechanics
title: "Mathematical Quantum Mechanics: States, Operators, and Dynamics"
level: advanced-undergraduate
estimated_minutes: 4200
license: CC BY-SA 4.0
status: draft
---

# Mathematical Quantum Mechanics: States, Operators, and Dynamics {#section-1-mathematical-quantum-mechanics-states-operators-and-dyn}

<a id="section-1-full-volume-architecture"></a>
## Full-volume architecture {#section-3-full-volume-architecture}

This L3 book has twenty-two chapters. Entry preparation is [Linear Algebra: Structure and Proof](linear-algebra-structure-proofs.md), [Real Analysis](proof-safe-real-analysis.md), and the [first ODE course](ode-first-course.md). Each chapter has at least three worked examples and twenty exercises providing two staged hints and full solution reveals.

The book starts in finite-dimensional complex linear algebra, where every domain issue can be seen rather than hidden. Part I builds states, rays, observables, spectral projectors, ideal measurement, two-state geometry, and density operators. Part II develops unitary dynamics, pictures of motion, commutators, uncertainty, symmetries, angular momentum, spin, and mixed preparations. Part III moves carefully into wave functions, unbounded operators and domains, bound states, the oscillator, central potentials, and scattering. Part IV treats composite systems, entanglement, identical particles, generalized measurements, open systems, and information-theoretic experiments. Part V develops perturbative, variational, semiclassical, and numerical methods before a capstone on evidence and interpretive boundaries.

The local entry requirement is complex linear algebra: conjugate transpose, orthonormal bases, linear maps, eigenvalues, and matrix exponentials. The first chapter repairs these ideas explicitly. Ordinary differential equations and probability distributions are used only after the preparation, observable, and conditioning protocol have been named. Functional analysis is not assumed at entry; the infinite-dimensional chapters will introduce completeness, operator domains, self-adjointness, and spectral distinctions at the point where finite matrices stop being adequate.

<a id="section-9-reading-routes"></a>
## Reading routes {#section-11-reading-routes}

- **Finite quantum structures:** Chapters 1–8 form a self-contained route through states, measurements, two-state dynamics, uncertainty, spin, and ensembles.
- **Wave mechanics:** Complete Chapters 1–7, then follow Chapters 9–13 through operators, boundary conditions, bound states, and scattering.
- **Quantum information:** Complete Chapters 1–8, then follow Chapters 14 and 16–18.
- **Computation and control:** Chapters 1–5 support the first control project; Chapters 9, 19, and 21 add approximation and numerical error control.

The compact chapter below is retained as a desk reference to the original two-state seed. The connected manuscript chapters are the authoritative development route.

A two-state system is the smallest setting in which the mathematical architecture of quantum mechanics is visible. Complex vectors represent states, Hermitian matrices represent observables, the inner product determines probabilities, and unitary maps preserve total probability. The model describes idealized spin, polarization, and qubits, while being small enough to calculate by hand.

<a id="section-20-1-mathematical-and-physical-assumptions"></a>
## 1. Mathematical and physical assumptions {#section-22-1-mathematical-and-physical-assumptions}

Use a two-dimensional complex inner-product space with orthonormal basis vectors

\\[
|0\\rangle=\\begin{pmatrix}1\\\\0\\end{pmatrix}
\\qquad\\text{and}\\qquad
|1\\rangle=\\begin{pmatrix}0\\\\1\\end{pmatrix}.
\\]

A pure state is a normalized vector

\\[
|\\psi\\rangle=\\alpha|0\\rangle+\\beta|1\\rangle,
\\qquad |\\alpha|^2+|\\beta|^2=1.
\\]

State amplitudes are dimensionless. The model assumes a closed two-level system unless an environment or measurement is explicitly introduced. It also assumes that neglected energy levels remain dynamically irrelevant, an approximation that can fail under strong or resonant driving.

Vectors differing only by a global phase represent the same physical pure state: $|\\psi\\rangle$ and $e^{i\\chi}|\\psi\\rangle$ give identical inner-product magnitudes. Relative phase matters. Thus $(|0\\rangle+|1\\rangle)/\\sqrt{2}$ and $(|0\\rangle-|1\\rangle)/\\sqrt{2}$ are distinct, even though measuring both in the $\\{|0\\rangle,|1\\rangle\\}$ basis gives equal probabilities.

<a id="section-41-2-observables-and-the-born-rule"></a>
## 2. Observables and the Born rule {#section-43-2-observables-and-the-born-rule}

An observable is represented by a Hermitian matrix $A=A^\\dagger$. Its eigenvalues are real, and eigenvectors belonging to distinct eigenvalues can be chosen orthonormal. In the nondegenerate case, if

\\[
A=\\sum_j a_j|a_j\\rangle\\langle a_j|,
\\]

then an ideal projective measurement on $|\\psi\\rangle$ returns $a_j$ with probability

\\[
P(a_j)=|\\langle a_j|\\psi\\rangle|^2.
\\]

If an eigenvalue $a$ is degenerate, let $P_a$ project onto its entire eigenspace. The probability of that outcome is $\\|P_a|\\psi\\rangle\\|^2$, not the probability of one arbitrarily selected basis vector in the eigenspace. Conditional on a nonzero-probability outcome, the projection postulate assigns the normalized state $P_a|\\psi\\rangle/\\|P_a|\\psi\\rangle\\|$; this reduces to $|a_j\\rangle$ up to phase in the nondegenerate case. This is a model of an ideal measurement operation, not a derivation of a laboratory apparatus.

For the basis observable

\\[
Z=\\begin{pmatrix}1&0\\\\0&-1\\end{pmatrix},
\\]

the outcomes are $+1$ and $-1$, with probabilities $|\\alpha|^2$ and $|\\beta|^2$. The expectation is

\\[
\\langle Z\\rangle=\\langle\\psi|Z|\\psi\\rangle
=|\\alpha|^2-|\\beta|^2.
\\]

Expectation is an ensemble mean over identically prepared trials; it need not be an outcome available on one trial.

<a id="section-72-3-a-worked-measurement-in-two-bases"></a>
## 3. A worked measurement in two bases {#section-74-3-a-worked-measurement-in-two-bases}

Let

\\[
|\\psi\\rangle=\\frac{\\sqrt{3}}{2}|0\\rangle+\\frac{i}{2}|1\\rangle.
\\]

Normalization holds because $3/4+1/4=1$. A $Z$ measurement gives $+1$ with probability $3/4$ and $-1$ with probability $1/4$, so $\\langle Z\\rangle=1/2$.

Now measure

\\[
X=\\begin{pmatrix}0&1\\\\1&0\\end{pmatrix}.
\\]

Its normalized eigenvectors are

\\[
|+\\rangle=\\frac{|0\\rangle+|1\\rangle}{\\sqrt{2}},
\\qquad
|-\\rangle=\\frac{|0\\rangle-|1\\rangle}{\\sqrt{2}}.
\\]

The plus amplitude is

\\[
\\langle+|\\psi\\rangle=\\frac{\\sqrt{3}+i}{2\\sqrt{2}},
\\]

whose squared magnitude is $(3+1)/8=1/2$. The minus probability is also $1/2$. The relative phase invisible to the $Z$ probabilities influences other measurement directions, although this particular phase makes $\\langle X\\rangle=0$.

<a id="section-104-4-geometry-the-bloch-sphere"></a>
## 4. Geometry: the Bloch sphere {#section-106-4-geometry-the-bloch-sphere}

After removing normalization and global phase, any pure two-state vector can be written

\\[
|\\psi\\rangle=\\cos\\!\\left(\\frac{\\theta}{2}\\right)|0\\rangle
+e^{i\\phi}\\sin\\!\\left(\\frac{\\theta}{2}\\right)|1\\rangle
\\]

with $0\\leq\\theta\\leq\\pi$ and $0\\leq\\phi<2\\pi$. It corresponds to the unit vector

\\[
\\mathbf r=(\\sin\\theta\\cos\\phi,\\,\\sin\\theta\\sin\\phi,\\,\\cos\\theta).
\\]

Its components are expectations of the Pauli matrices $X$, $Y$, and $Z$. Orthogonal state vectors appear at antipodal points, not at perpendicular directions on the sphere. The sphere is a representation of state space, not a claim that a microscopic object literally points in ordinary three-dimensional space.

<a id="section-121-accessible-diagram-description"></a>
### Accessible diagram description {#section-123-accessible-diagram-description}

Picture a circle representing the visible outline of a sphere. The north pole is labelled $|0\\rangle$, the south pole $|1\\rangle$, and opposite equatorial points are labelled $|+\\rangle$ and $|-\\rangle$. An arrow from the center points to a surface point with polar angle $\\theta$ marked from the upward axis and azimuth $\\phi$ marked around the equator. A dashed rear semicircle distinguishes hidden depth; every direction also has a text label, so no color distinction is required.

<a id="section-125-5-unitary-time-evolution"></a>
## 5. Unitary time evolution {#section-127-5-unitary-time-evolution}

For a closed system with time-independent Hamiltonian $H$, the Schrödinger equation is

\\[
i\\hbar\\frac{d}{dt}|\\psi\\rangle=H|\\psi\\rangle.
\\]

$H$ has units joules, $\\hbar$ has units joule-seconds, and therefore $H/\\hbar$ has units inverse seconds. The solution is

\\[
|\\psi(t)\\rangle=U(t)|\\psi(0)\\rangle,
\\qquad U(t)=e^{-iHt/\\hbar}.
\\]

Because $H$ is Hermitian, $U$ is unitary: $U^\\dagger U=I$. Hence

\\[
\\langle\\psi(t)|\\psi(t)\\rangle
=\\langle\\psi(0)|U^\\dagger U|\\psi(0)\\rangle=1.
\\]

Probability conservation is built into the evolution.

<a id="section-149-worked-example-coherent-oscillation"></a>
### Worked example: coherent oscillation {#section-151-worked-example-coherent-oscillation}

Take

\\[
H=\\frac{\\hbar\\Omega}{2}X,
\\]

where angular frequency $\\Omega$ has units radians per second (radians are dimensionless). Since $X^2=I$, its exponential separates into even and odd powers:

\\[
U(t)=\\cos\\!\\left(\\frac{\\Omega t}{2}\\right)I
-i\\sin\\!\\left(\\frac{\\Omega t}{2}\\right)X.
\\]

Starting in $|0\\rangle$,

\\[
|\\psi(t)\\rangle=\\cos\\!\\left(\\frac{\\Omega t}{2}\\right)|0\\rangle
-i\\sin\\!\\left(\\frac{\\Omega t}{2}\\right)|1\\rangle.
\\]

Thus

\\[
P(1\\text{ at }t)=\\sin^2\\!\\left(\\frac{\\Omega t}{2}\\right).
\\]

If $\\Omega=2\\pi\\times1\\,\\mathrm{MHz}$, then the first certain transition occurs when $\\Omega t/2=\\pi/2$, so $t=\\pi/\\Omega=0.5\\,\\mu\\mathrm{s}$. The prediction assumes precisely known timing, a time-independent drive in the chosen rotating description, and no decoherence.

<a id="section-179-6-noncommuting-questions"></a>
## 6. Noncommuting questions {#section-181-6-noncommuting-questions}

Matrix multiplication gives $XZ=-ZX$. Therefore $X$ and $Z$ have no common eigenbasis and cannot both possess sharp values in one state. The variance of $A$ is

\\[
(\\Delta A)^2=\\langle A^2\\rangle-\\langle A\\rangle^2.
\\]

For $|0\\rangle$, $\\Delta Z=0$ because it is a $Z$ eigenstate. Since $X^2=I$ and $\\langle X\\rangle=0$, $\\Delta X=1$. This is not merely disturbance by a clumsy instrument: the state itself supplies a sharp distribution for one observable and a spread distribution for the other.

The general Robertson inequality

\\[
\\Delta A\\,\\Delta B\\geq\\frac12\\left|\\langle[A,B]\\rangle\\right|
\\]

follows from Cauchy–Schwarz applied to $(A-\\langle A\\rangle)|\\psi\\rangle$ and $(B-\\langle B\\rangle)|\\psi\\rangle$. A zero lower bound does not imply simultaneous sharpness; it only means this inequality is not informative for that state and pair.

<a id="section-197-7-mixtures-and-density-matrices"></a>
## 7. Mixtures and density matrices {#section-199-7-mixtures-and-density-matrices}

A classical uncertainty over preparations is represented by

\\[
\\rho=\\sum_k p_k|\\psi_k\\rangle\\langle\\psi_k|,
\\]

where $p_k\\geq0$ and $\\sum_k p_k=1$. The probability of projector $P$ is $\\operatorname{Tr}(\\rho P)$. A pure state satisfies $\\operatorname{Tr}(\\rho^2)=1$; a genuinely mixed two-state density matrix has $\\operatorname{Tr}(\\rho^2)<1$.

The equal mixture $\\rho=I/2$ is different from $|+\\rangle\\langle+|$. Both give equal $Z$ probabilities, but an $X$ measurement is random for $I/2$ and certain for $|+\\rangle$. Amplitudes combine before squaring in coherent superposition; probabilities combine after squaring in an incoherent mixture.

<a id="section-209-8-failure-modes-and-scope"></a>
## 8. Failure modes and scope {#section-211-8-failure-modes-and-scope}

- Treating amplitudes as ordinary probabilities loses interference and relative phase.
- Forgetting complex conjugation in $\\langle\\psi|$ can produce nonreal or unnormalized results.
- Confusing global and relative phase predicts false distinctions or misses real ones.
- A non-Hermitian matrix is not automatically a closed-system observable or Hamiltonian.
- “Collapse” is an operational update rule here; this chapter does not settle interpretations of quantum theory.
- A two-level truncation fails when higher levels are populated.
- Unitary evolution alone does not model noise, uncontrolled environments, or measurement records.

<a id="section-219-exercises"></a>
## Exercises {#section-221-exercises}

1. Normalize $(1,i)^{\\mathsf T}$ and find its $Z$ probabilities.
2. Show directly that $|+\\rangle$ is an eigenvector of $X$ and give the eigenvalue.
3. For $|\\psi\\rangle=\\cos(\\theta/2)|0\\rangle+\\sin(\\theta/2)|1\\rangle$, compute $\\langle Z\\rangle$.
4. Under $H=(\\hbar\\Omega/2)X$, find $P(1)$ at $t=\\pi/(2\\Omega)$ starting from $|0\\rangle$.
5. Compute $\\rho$ for an equal classical mixture of $|0\\rangle$ and $|1\\rangle$, and evaluate $\\operatorname{Tr}(\\rho^2)$.
6. Explain one experiment that distinguishes $|+\\rangle$ from the equal $0/1$ mixture.

<a id="section-228-worked-solutions"></a>
## Worked solutions {#section-230-worked-solutions}

1. The norm is $\\sqrt{2}$, so the state is $(1,i)^{\\mathsf T}/\\sqrt{2}$. Both $Z$ outcomes have probability $1/2$.
2. $X(1,1)^{\\mathsf T}/\\sqrt{2}=(1,1)^{\\mathsf T}/\\sqrt{2}$, so the eigenvalue is $+1$.
3. The probabilities are $\\cos^2(\\theta/2)$ and $\\sin^2(\\theta/2)$, hence $\\langle Z\\rangle=\\cos^2(\\theta/2)-\\sin^2(\\theta/2)=\\cos\\theta$.
4. $P(1)=\\sin^2(\\Omega t/2)=\\sin^2(\\pi/4)=1/2$.
5. $\\rho=\\tfrac12\\operatorname{diag}(1,0)+\\tfrac12\\operatorname{diag}(0,1)=I/2$. Then $\\rho^2=I/4$, so $\\operatorname{Tr}(\\rho^2)=1/2$.
6. Measure $X$: $|+\\rangle$ always yields $+1$, while $I/2$ gives $+1$ and $-1$ with equal probability over repeated preparations.

<a id="section-237-connections-and-capstone"></a>
## Connections and capstone {#section-239-connections-and-capstone}

The chapter applies **complex inner-product spaces**, **spectral theory**, **ordinary differential equations**, and **probability distributions**. It connects directly to **quantum computing**, where unitary gates act on qubits, and to **statistical mechanics**, where density operators describe ensembles. For a capstone, construct a table or accessible interactive that accepts $\\theta$, $\\phi$, and a measurement axis, then reports amplitudes, probabilities, expectation, and a plain-language geometric description; test normalization and antipodal states explicitly.
`;export{e as default};