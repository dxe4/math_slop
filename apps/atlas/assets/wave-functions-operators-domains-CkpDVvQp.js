var e=`---
parent_id: book-two-state-quantum-mechanics
chapter_id: wave-functions-operators-domains
title: "Wave Functions, Operators, and Domains"
level: advanced-undergraduate
estimated_minutes: 230
license: CC BY-SA 4.0
status: draft
---

# Wave Functions, Operators, and Domains

Wave mechanics replaces finite columns by square-integrable complex functions. This enlarges the state space and introduces a new obligation: an unbounded operator is not determined by its differential formula alone. Its domain and boundary conditions are part of the operator. Ignoring them can turn a symmetric expression into a false claim of self-adjointness.

## 1. The Hilbert space $L^2$

For an interval or region $\\Omega$, $L^2(\\Omega)$ consists of measurable complex functions with finite integral $\\int_\\Omega |\\psi(x)|^2\\,dx$. Functions differing only on a measure-zero set represent the same vector. The inner product is

$$
\\langle \\phi|\\psi\\rangle=\\int_\\Omega \\phi(x)^*\\psi(x)\\,dx.
$$

Completeness means every Cauchy sequence in this norm converges to an $L^2$ equivalence class. Normalization makes $|\\psi(x)|^2$ a probability density for ideal position measurement in the model. A density has units inverse length in one dimension, so $\\psi$ has units inverse square-root length.

## 2. Wave functions and bases

An orthonormal basis $\\{u_n\\}$ permits coefficients $c_n=\\langle u_n|\\psi\\rangle$ and, in the Hilbert-space sense,

$$
\\psi=\\sum_n c_n u_n, \\qquad \\sum_n |c_n|^2=\\|\\psi\\|^2.
$$

Convergence in $L^2$ does not automatically imply pointwise or uniform convergence. Evaluating a generic $L^2$ equivalence class at one point is not intrinsically defined. Smooth wave functions are convenient representatives, but the state space is larger.

## 3. Operators need domains

An operator is a pair $(A,D(A))$, where $D(A)$ is a linear subspace on which $A\\psi$ is defined and belongs to the Hilbert space. Multiplication by $x$ has domain $\\{\\psi\\in L^2:x\\psi\\in L^2\\}$ on the real line. The momentum expression $-i\\hbar\\,d/dx$ requires weak differentiability and boundary conditions.

An operator is symmetric when $\\langle\\phi|A\\psi\\rangle=\\langle A\\phi|\\psi\\rangle$ for all domain vectors. It is self-adjoint when it equals its adjoint, including equality of domains. Self-adjointness supplies real spectral measures and unitary evolution; symmetry alone may not.

We require a dense domain when defining an adjoint. A vector $\\phi$ belongs to $D(A^\\dagger)$ if there is $g\\in L^2$ with $\\langle\\phi|A\\psi\\rangle=\\langle g|\\psi\\rangle$ for every $\\psi\\in D(A)$; then $A^\\dagger\\phi=g$. Density makes $g$ unique. Symmetry says $D(A)\\subset D(A^\\dagger)$ and the actions agree there, whereas self-adjointness requires equality. The spectral-measure and unitary-evolution results for general self-adjoint operators are cited functional-analysis inputs, not consequences of a single boundary integration.

For example the maximal position operator is self-adjoint. If $\\phi\\in D(Q^\\dagger)$ with image $g$, testing the adjoint identity against compactly supported smooth functions gives $g=x\\phi$ as distributions and hence almost everywhere. Since $g\\in L^2$, this forces $\\phi\\in D(Q)$. Conversely $x\\phi\\in L^2$ gives the adjoint identity directly by multiplication. Thus the domains agree. A real multiplication formula with an unnecessarily restricted domain could instead be merely symmetric; the word maximal in this construction matters.

### Worked example: normalization does not supply every moment

The real function $\\psi(x)=1/[\\sqrt2(1+|x|)]$ on $\\mathbb R$ has norm squared $2\\int_0^\\infty(1+x)^{-2}dx/2=1$. But $\\|Q\\psi\\|^2=\\int x^2/[2(1+|x|)^2]dx$ diverges because its integrand tends to $1/2$ at each infinity. Therefore it is a legitimate Hilbert-space state outside the position operator domain and with infinite position second moment. Its first absolute moment diverges too; assigning a zero mean by a symmetric principal-value cancellation would not be an ordinary expectation.

Its weak first derivative is $-\\operatorname{sign}(x)/[\\sqrt2(1+|x|)^2]$, which is square integrable. Continuity at the corner prevents a point mass in that first derivative. Thus it belongs to the real-line momentum domain described below, despite not belonging to $D(Q)$. Domains depend on the operator, not just on whether the state is normalized or has a visually mild corner. The [Sobolev opening](../pde-weak-theory-waves-patterns/sobolev-spaces.md) develops the weak-derivative distinction used here.

## 4. Integration by parts exposes boundaries

On $[0,L]$, take $P=-i\\hbar\\,d/dx$. For sufficiently regular functions,

$$
\\langle\\phi|P\\psi\\rangle-\\langle P\\phi|\\psi\\rangle
=-i\\hbar\\,[\\phi(x)^*\\psi(x)]_0^L.
$$

The boundary form must vanish on the chosen domain. Periodic conditions $\\psi(L)=\\psi(0)$ yield one self-adjoint realization; endpoint-zero conditions make the first derivative symmetric on a smaller domain but do not automatically make it self-adjoint. Different admissible boundary conditions define different physics and spectra.

For $H=-(\\hbar^2/2m)d^2/dx^2+V$, integration by parts produces a boundary form involving $\\phi^*\\psi'-\\phi'^*\\psi$. Dirichlet, Neumann, periodic, and Robin conditions can each define distinct self-adjoint problems in appropriate settings.

### Worked example: a symmetric momentum that is not self-adjoint

Take $L>0$, $\\hbar>0$, and $D(P_0)=H_0^1(0,L)$, with $P_0\\psi=-i\\hbar\\psi'$. The boundary form vanishes, so this densely defined operator is symmetric. To find its adjoint, use compactly supported tests in the definition: they force $P_0^\\dagger\\phi=-i\\hbar\\phi'$ weakly and $\\phi\\in H^1(0,L)$. For every such $\\phi$ the boundary term is zero because the tested $\\psi$ vanishes at both ends. Thus

$$D(P_0^\\dagger)=H^1(0,L),\\qquad D(P_0)=H_0^1(0,L).$$

These domains are not equal: a nonzero constant is in the first and not the second. This is an explicit self-adjointness failure, rather than a warning based only on terminology. The formal differential action agrees where both are defined, yet a spectral observable cannot be assigned to this restricted symmetric operator merely by noting the action is real in expectation. This issue concerns the first derivative; the Dirichlet **second** derivative has a different boundary form and can be self-adjoint.

For a bounded real potential $V$ and $m>0$, the Dirichlet Hamiltonian on $H^2(0,L)\\cap H_0^1(0,L)$ is indeed self-adjoint. In the adjoint calculation, compact tests give a distributional second derivative in $L^2$, hence an $H^2$ representative: integrate that derivative twice and the remainder has zero second distributional derivative, so is affine. The second-order boundary form must then vanish against all zero-endpoint $\\psi$ with independently variable endpoint slopes, forcing $\\phi(0)=\\phi(L)=0$. This identifies the adjoint domain with the original one. Boundedness and reality of $V$ are the stated conditions used here; singular potentials need additional analysis.

### Worked example: a family of self-adjoint ring momenta

Instead set $D(P_\\theta)=\\{\\psi\\in H^1(0,L):\\psi(L)=e^{i\\theta}\\psi(0)\\}$, with real $\\theta$ modulo $2\\pi$. The common endpoint phase cancels in the boundary form. Conversely a vector in the adjoint domain is $H^1$ by compact testing; arbitrary allowed $\\psi(0)$ then forces $\\phi(L)^*e^{i\\theta}=\\phi(0)^*$, or precisely the same twisted boundary condition. Thus $P_\\theta$ is self-adjoint.

Solving $-i\\hbar\\psi'=p\\psi$ and enforcing the twist gives the normalized eigenfunctions and values

$$u_n(x)=L^{-1/2}e^{i(2\\pi n+\\theta)x/L},\\qquad p_n=\\frac\\hbar L(2\\pi n+\\theta),\\quad n\\in\\mathbb Z.$$

They form a complete orthonormal basis because multiplication by $e^{i\\theta x/L}$ is unitary and carries the usual complete periodic Fourier basis to this one. Fourier completeness is the named analysis input, rather than a conclusion from pairwise orthogonality alone. Periodic $\\theta=0$ includes zero momentum, while $\\theta=\\pi$ does not. For $H=P_\\theta^2/(2m)$, both the function and its derivative have the same twist in its $H^2$ domain. The differential formula is unchanged while the domain changes the spectrum; no electromagnetic flux interpretation is asserted without a separate physical model.

## 5. Position and momentum

On the real line, position acts as $(Q\\psi)(x)=x\\psi(x)$ and momentum formally as $(P\\psi)(x)=-i\\hbar\\psi'(x)$. On a common suitable core,

$$
[Q,P]\\psi=i\\hbar\\psi.
$$

The qualifier matters: neither operator is everywhere defined, and products require membership in nested domains. The Fourier transform exchanges position and momentum representations under a specified normalization.

On $\\mathbb R$ the self-adjoint momentum domain is $H^1(\\mathbb R)$. Under the unitary Fourier transform, whose Plancherel theorem is an analysis input, this realization is multiplication by $\\hbar k$ with maximal domain $k\\widehat\\psi\\in L^2$. The multiplication-operator adjoint argument above proves self-adjointness and makes the derivative domain explicit. On the common Schwartz core, multiplication and differentiation preserve rapid decay, so both $QP$ and $PQ$ are defined and the product rule proves their commutator. A formal commutator equation does not extend their products to every normalized $L^2$ vector.

### Worked example: a domain-safe Gaussian packet

At an initial time take $\\sigma>0$ and

$$\\psi(x)=(2\\pi\\sigma^2)^{-1/4}\\exp\\left[-\\frac{(x-x_0)^2}{4\\sigma^2}+\\frac{ip_0x}{\\hbar}\\right].$$

Its squared modulus is a normalized Gaussian with mean $x_0$ and variance $\\sigma^2$. Differentiation gives $P\\psi=[p_0+i\\hbar(x-x_0)/(2\\sigma^2)]\\psi$. Gaussian odd-moment cancellation yields $\\langle P\\rangle=p_0$, and the squared norm of $(P-p_0)\\psi$ is $\\hbar^2/(4\\sigma^2)$. Therefore $\\Delta Q\\Delta P=\\hbar/2$. The Gaussian is Schwartz, so the operator products and finite moments required by this uncertainty calculation are available. Its current is $(p_0/m)|\\psi|^2$, since the real envelope derivative contributes no imaginary part. This specifies the packet at one time; free evolution generally also spreads its width. A normalized envelope with a plane-wave phase is not thereby a rigidly translating exact solution for all times.

## 6. Schrödinger equation and probability current

For real $V(x,t)$,

$$
i\\hbar\\,\\partial_t\\psi=-\\frac{\\hbar^2}{2m}\\partial_x^2\\psi+V\\psi.
$$

Combining this equation with its conjugate yields

$$
\\partial_t|\\psi|^2+\\partial_x j=0,
$$

where $j=(\\hbar/m)\\operatorname{Im}(\\psi^*\\partial_x\\psi)$. Integrating over a region converts local conservation into a boundary-flux statement. Global norm conservation requires appropriate behavior at boundaries or infinity.

To derive it, multiply Schrödinger's equation by $\\psi^*$ and its conjugate by $\\psi$. Solving for the two time derivatives and adding cancels the real potential terms, leaving $\\partial_t|\\psi|^2=i\\hbar(\\psi^*\\psi''-\\psi\\psi''^*)/(2m)$. The bracket is $\\partial_x(\\psi^*\\psi'-\\psi\\psi'^*)$, yielding minus the divergence of the stated real current. Smooth solutions justify this pointwise; energy-space solutions require a weak or approximation argument. Dirichlet endpoints give zero individual current, while periodic or common twisted function-and-derivative conditions give matching endpoint currents and zero net flux. If a complex effective potential is deliberately used, the equation instead has source $2\\operatorname{Im}V\\,|\\psi|^2/\\hbar$. A negative imaginary part absorbs norm; its physical interpretation belongs to that effective open model, not to a closed self-adjoint Hamiltonian.

## 7. Generalized eigenfunctions

The general self-adjoint spectral theorem, cited here, assigns a projection-valued measure $P_A$ to a densely defined self-adjoint operator, with $A=\\int\\lambda\\,dP_A(\\lambda)$ on its domain. For every normalized $\\psi$, $\\mu_\\psi(B)=\\langle\\psi|P_A(B)|\\psi\\rangle$ is an ordinary probability measure on Borel outcome sets. The domain is exactly $\\int\\lambda^2d\\mu_\\psi<\\infty$. On it the second moment is $\\|A\\psi\\|^2$ and the variance is $\\int(\\lambda-\\langle A\\rangle)^2d\\mu_\\psi\\ge0$. Writing this moment as the literal operator expression $\\langle\\psi,A^2\\psi\\rangle$ requires the stronger $D(A^2)$ condition, corresponding to a finite fourth spectral moment. This preserves the earlier spectral reading's quadratic-form distinction; a finite variance does not require applying the squared operator as a Hilbert-space vector.

A merely symmetric operator still cannot have a nonreal eigenvalue: the eigenvector identity makes $\\lambda\\|\\psi\\|^2=\\langle\\psi,A\\psi\\rangle$ real. Its possible failure is a lack of a self-adjoint spectral resolution or nonreal spectral points other than eigenvalues, rather than a nonreal ordinary eigenvector. Conversely finite matrices have no continuous spectrum: injectivity of $A-\\lambda I$ already implies surjectivity in finite dimension. Continuous spectrum is defined through operator range and invertibility properties; it need not contain an interval. These distinctions become essential in scattering rather than being terminology inferred from a plot.

For the centered Gaussian of the earlier uncertainty reading, use the momentum transform convention $\\widetilde\\psi(p)=(2\\pi\\hbar)^{-1/2}\\int e^{-ipx/\\hbar}\\psi(x)dx$. If $\\psi=(2\\pi\\sigma^2)^{-1/4}e^{-x^2/(4\\sigma^2)}$, Gaussian integration gives $\\widetilde\\psi=(2\\sigma^2/(\\pi\\hbar^2))^{1/4}e^{-\\sigma^2p^2/\\hbar^2}$. Its momentum variance is $\\hbar^2/(4\\sigma^2)$, exactly the derivative-domain calculation above. The transform is a unitary change of representation, with its normalization and momentum measure stated explicitly.

Plane waves $e^{ikx}$ are not in $L^2(\\mathbb{R})$, yet they organize the continuous momentum spectrum. They are generalized eigenfunctions normalized with delta distributions, not physical normalized states by themselves. Wave packets, spectral measures, or rigged Hilbert spaces make their use precise.

Similarly, writing $|x\\rangle$ is useful notation for a generalized position eigenstate. It should not be called a normalizable vector in ordinary $L^2$.

## 8. Physical and mathematical boundary ledger

A spatial model must name its region, measure, Hilbert space, operator domains, boundary conditions, potential regularity, units, and preparation. A hard wall is an idealized boundary, not a material derivation. Singular potentials and point interactions may need self-adjoint extension theory. Relativistic, spin, many-body, and field degrees of freedom are absent unless added.

## Exercises with complete solutions

<a id="wave-functions-operators-domains-ex-1"></a>

### 1. Normalization
Normalize $\\psi(x)=C$ on $[0,L]$.

<details>
<summary>Hint 1</summary>

Integrate the constant squared modulus over the interval.

</details>

<details>
<summary>Hint 2</summary>

A common complex phase is arbitrary after fixing the magnitude.

</details>

<details>
<summary>Full solution</summary>

$1=|C|^2L$, so choose $C=1/\\sqrt L$ up to global phase.

</details>

<a id="wave-functions-operators-domains-ex-2"></a>

### 2. Wave-function units
What units does a one-dimensional normalized wave function have?

<details>
<summary>Hint 1</summary>

Probability is a dimensionless integral of density against length.

</details>

<details>
<summary>Hint 2</summary>

The wave function is the square root of that density dimension.

</details>

<details>
<summary>Full solution</summary>

Since $|\\psi|^2\\,dx$ is dimensionless, $\\psi$ has units $\\mathrm{length}^{-1/2}$.

</details>

<a id="wave-functions-operators-domains-ex-3"></a>

### 3. Orthogonality
Show $\\sqrt{2/L}\\sin(n\\pi x/L)$ are mutually orthonormal for positive integers $n$.

<details>
<summary>Hint 1</summary>

Use the product-to-sum trigonometric identity.

</details>

<details>
<summary>Hint 2</summary>

The diagonal squared-sine integral is half the interval length.

</details>

<details>
<summary>Full solution</summary>

Product-to-sum integration gives zero for unequal indices and $L/2$ for equal indices; the prefactor makes the norm one.

</details>

<a id="wave-functions-operators-domains-ex-4"></a>

### 4. Almost-everywhere equality
Do functions that differ at one point represent different $L^2$ vectors?

<details>
<summary>Hint 1</summary>

The Hilbert norm is an integral modulo sets of measure zero.

</details>

<details>
<summary>Hint 2</summary>

Changing one point changes no Lebesgue integral.

</details>

<details>
<summary>Full solution</summary>

No. Their squared difference integrates to zero because a point has measure zero.

</details>

<a id="wave-functions-operators-domains-ex-5"></a>

### 5. Point evaluation
Why is $\\psi(0)$ not defined for every $L^2$ state?

<details>
<summary>Hint 1</summary>

An arbitrary representative can be modified at one point without changing its class.

</details>

<details>
<summary>Hint 2</summary>

A trace or continuous representative needs additional regularity beyond L2.

</details>

<details>
<summary>Full solution</summary>

An $L^2$ vector is an equivalence class under almost-everywhere equality, and representatives may take arbitrary values at one point.

</details>

<a id="wave-functions-operators-domains-ex-6"></a>

### 6. Position domain
Why is $Q$ not defined on all of $L^2(\\mathbb{R})$?

<details>
<summary>Hint 1</summary>

The operator output must still belong to the Hilbert space.

</details>

<details>
<summary>Hint 2</summary>

Use the explicit normalized tail in the worked example, whose multiplied tail is not square integrable.

</details>

<details>
<summary>Full solution</summary>

Some square-integrable $\\psi$ have $x\\psi$ not square-integrable, so the image would leave the Hilbert space.

</details>

<a id="wave-functions-operators-domains-ex-7"></a>

### 7. Boundary form
Derive the first-derivative boundary term.

<details>
<summary>Hint 1</summary>

Apply integration by parts to the derivative on psi.

</details>

<details>
<summary>Hint 2</summary>

Keep the sign of i when taking the conjugate derivative in the adjoint expression.

</details>

<details>
<summary>Full solution</summary>

Integrate $-i\\hbar\\int\\phi^*\\psi'\\,dx$; integration by parts gives $-i\\hbar[\\phi^*\\psi]+i\\hbar\\int\\phi'^*\\psi\\,dx$, and the integral is $\\langle P\\phi|\\psi\\rangle$.

</details>

<a id="wave-functions-operators-domains-ex-8"></a>

### 8. Periodic cancellation
Why does the momentum boundary form vanish for common periodic conditions?

<details>
<summary>Hint 1</summary>

Evaluate the same endpoint product at both ends.

</details>

<details>
<summary>Hint 2</summary>

The common periodic values make their difference zero.

</details>

<details>
<summary>Full solution</summary>

If both functions have equal endpoint values, $\\phi(L)^*\\psi(L)-\\phi(0)^*\\psi(0)=0$.

</details>

<a id="wave-functions-operators-domains-ex-9"></a>

### 9. Dirichlet Laplacian
Show the second-derivative boundary form vanishes when both functions and their endpoint values vanish.

<details>
<summary>Hint 1</summary>

Write the full second-order endpoint pairing.

</details>

<details>
<summary>Hint 2</summary>

Each term has either a vanishing function value or its conjugate; derivatives themselves need not vanish.

</details>

<details>
<summary>Full solution</summary>

Every term $\\phi^*\\psi'-\\phi'^*\\psi$ at each endpoint contains a vanishing function factor.

</details>

<a id="wave-functions-operators-domains-ex-10"></a>

### 10. Formal commutator
Compute $[Q,P]\\psi$ on a smooth compactly supported function.

<details>
<summary>Hint 1</summary>

Differentiate the product x times psi in PQ.

</details>

<details>
<summary>Hint 2</summary>

Subtract the x times derivative term appearing in QP.

</details>

<details>
<summary>Full solution</summary>

$QP\\psi=-i\\hbar x\\psi'$, while $PQ\\psi=-i\\hbar(\\psi+x\\psi')$; subtraction gives $i\\hbar\\psi$.

</details>

<a id="wave-functions-operators-domains-ex-11"></a>

### 11. Current of a real stationary function
What is $j$ if $\\psi$ is real up to a constant global phase?

<details>
<summary>Hint 1</summary>

A constant global phase cancels between the wave function and its conjugate.

</details>

<details>
<summary>Hint 2</summary>

The remaining envelope product is real.

</details>

<details>
<summary>Full solution</summary>

$\\psi^*\\psi'$ is real, so its imaginary part and the current vanish.

</details>

<a id="wave-functions-operators-domains-ex-12"></a>

### 12. Plane-wave current
For $\\psi=Ae^{ikx}$, compute the formal current.

<details>
<summary>Hint 1</summary>

Differentiate the exponential before multiplying by its conjugate.

</details>

<details>
<summary>Hint 2</summary>

The imaginary part is k times the constant squared amplitude.

</details>

<details>
<summary>Full solution</summary>

$\\psi^*\\psi'=ik|A|^2$, so $j=\\hbar k|A|^2/m$.

</details>

<a id="wave-functions-operators-domains-ex-13"></a>

### 13. Plane-wave norm
Why is the plane wave not normalized on $\\mathbb{R}$?

<details>
<summary>Hint 1</summary>

Its squared magnitude is a nonzero constant.

</details>

<details>
<summary>Hint 2</summary>

The real line has infinite length.

</details>

<details>
<summary>Full solution</summary>

Its modulus is constant, so its squared norm is $|A|^2\\int_{\\mathbb{R}}dx$, which diverges unless $A=0$.

</details>

<a id="wave-functions-operators-domains-ex-14"></a>

### 14. Continuity equation
What does integrating it over $[a,b]$ yield?

<details>
<summary>Hint 1</summary>

Integrate the spatial divergence over the finite interval.

</details>

<details>
<summary>Hint 2</summary>

The minus sign puts the left-end current in the incoming position.

</details>

<details>
<summary>Full solution</summary>

$\\frac{d}{dt}\\int_a^b|\\psi|^2\\,dx=j(a)-j(b)$: probability changes by incoming minus outgoing flux.

</details>

<a id="wave-functions-operators-domains-ex-15"></a>

### 15. Real potential
Where is reality of $V$ used in deriving local conservation?

<details>
<summary>Hint 1</summary>

Compare the two potential terms after conjugation.

</details>

<details>
<summary>Hint 2</summary>

An imaginary potential part leaves the source term derived in the text.

</details>

<details>
<summary>Full solution</summary>

Potential terms in the equation and its conjugate cancel only when multiplication by $V$ is Hermitian, in particular for real $V$.

</details>

<a id="wave-functions-operators-domains-ex-16"></a>

### 16. Symmetric versus self-adjoint
Why does a vanishing boundary form not finish a self-adjointness proof?

<details>
<summary>Hint 1</summary>

Symmetry tests two vectors from the original domain.

</details>

<details>
<summary>Hint 2</summary>

The adjoint may admit additional vectors, as the zero-endpoint momentum example shows.

</details>

<details>
<summary>Full solution</summary>

It proves symmetry on the chosen domain; self-adjointness additionally requires the adjoint domain to be exactly the same.

</details>

<a id="wave-functions-operators-domains-ex-17"></a>

### 17. Different walls
Do Dirichlet and Neumann conditions define the same Hamiltonian?

<details>
<summary>Hint 1</summary>

An unbounded operator includes its domain in its identity.

</details>

<details>
<summary>Hint 2</summary>

Different boundary spaces can even change whether zero is an eigenvalue.

</details>

<details>
<summary>Full solution</summary>

No. They are different operator domains and generally have different spectra and eigenfunctions.

</details>

<a id="wave-functions-operators-domains-ex-18"></a>

### 18. Expansion convergence
Does an $L^2$ basis expansion guarantee pointwise convergence everywhere?

<details>
<summary>Hint 1</summary>

The basis theorem asserts convergence in the Hilbert norm.

</details>

<details>
<summary>Hint 2</summary>

Pointwise evaluation is not a continuous functional on general L2.

</details>

<details>
<summary>Full solution</summary>

No. It guarantees norm convergence; pointwise convergence requires additional hypotheses.

</details>

<a id="wave-functions-operators-domains-ex-19"></a>

### 19. Delta ket
Is $|x\\rangle$ an ordinary normalized $L^2$ vector?

<details>
<summary>Hint 1</summary>

An ordinary position eigenvector would concentrate its norm on a measure-zero point.

</details>

<details>
<summary>Hint 2</summary>

The delta ket instead belongs to a generalized spectral description.

</details>

<details>
<summary>Full solution</summary>

No. It is generalized notation associated with the continuous spectral representation.

</details>

<a id="wave-functions-operators-domains-ex-20"></a>

### 20. Hard-wall boundary
Is a Dirichlet endpoint a microscopic model of a material wall?

<details>
<summary>Hint 1</summary>

The boundary condition is one declared idealization of the spatial dynamics.

</details>

<details>
<summary>Hint 2</summary>

Its physical adequacy depends on the energy scale, wall structure and omitted degrees of freedom.

</details>

<details>
<summary>Full solution</summary>

No. It is an ideal boundary condition whose adequacy must be tested for the energy and length regime.

</details>

## Project: domain and discretization audit

Discretize $-d^2/dx^2$ on $[0,L]$ under Dirichlet, Neumann, and periodic boundary rules without external libraries. Tabulate the first eigenvalues and compare them with analytic predictions. Halve the grid spacing, report convergence and matrix-symmetry residuals, and explain which discrete boundary rows encode each operator domain. Provide all spectra in a text table. Do not claim the finite matrix proves self-adjointness of the continuum operator.

## Chapter summary

Wave mechanics lives in $L^2$, where convergence is norm-based and point values require representatives. Differential formulas become observables only after domains and boundary conditions are supplied. Probability conservation is a local flux law, and continuous-spectrum eigenfunctions are generalized objects. These distinctions govern every boundary-value model that follows.

[Previous chapter](#/item/book-two-state-quantum-mechanics?chapter=mixed-states-ensembles) · [Next chapter](#/item/book-two-state-quantum-mechanics?chapter=one-dimensional-bound-states) · [Book overview](#/item/book-two-state-quantum-mechanics)
`;export{e as default};