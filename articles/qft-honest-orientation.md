
# Quantum Field Theory: An Honest Mathematical Orientation

**Before reading.** Read [Complex State Spaces, Rays, and Amplitudes](../books/two-state-quantum-mechanics/complex-state-spaces.md), [Spacetime Invariants: Special Relativity by Geometry](spacetime-invariants.md), [Symmetry, gauge, and field-theory boundary](../books/quantum-statistical-structures/symmetry-gauge-and-field-theory-boundary.md) and [Normed and Banach Spaces](../books/functional-analysis/normed-banach-spaces.md). These are preparation for the ideas used below.

Quantum field theory is simultaneously an extraordinarily accurate calculational framework, a family of effective theories, a source of deep mathematics, and an incomplete construction problem in important four-dimensional interacting cases. This orientation explains what the standard formulas mean, which parts are rigorous in which frameworks, and why finite predictions can coexist with unresolved nonperturbative foundations.

Prerequisites are quantum mechanics, special relativity, distributions, functional analysis, Lie groups, gauge theory, and statistical mechanics. A first course in complex analysis and PDEs is strongly recommended.

## 1. Classical fields first

For a real scalar field on Minkowski spacetime with signature $(-,+,+,+)$, use natural units $c=ℏ=1$ and Lagrangian density

$$L=-(1/2)\partial_\mu\phi\partial^\mu\phi-(1/2)m^{2}\phi^{2}-V_{\mathrm{int}}(\phi)$$

Vary compactly supported perturbations and integrate by parts. Euler–Lagrange gives

$$\Box\phi-m^{2}\phi-V'_{\mathrm{int}}(\phi)=0$$

with the sign of $\Box=\partial_\mu\partial^\mu$ tied to the metric convention. Boundary terms vanish because variations have compact support or prescribed boundary data.

Noether’s theorem yields a stress-energy tensor for translations and currents for internal symmetries. Canonical tensors may need improvement or symmetrization; in curved spacetime, varying the action with respect to the metric gives a systematic stress tensor.

Before quantization, the theory still needs a spacetime, field space, action, boundary/asymptotic conditions, and a classical well-posedness claim.

## 2. Free scalar field as oscillators

A free Klein–Gordon field decomposes formally into Fourier modes, each behaving like a harmonic oscillator of frequency

$$\omega_{p}=\sqrt{|p|^{2}+m^{2}}$$

Quantization introduces creation and annihilation operators satisfying distributional commutation relations. The field has an expansion schematically

$$\phi(x)=\int[a(p)e^{-ip\cdot x}+a^\dagger(p)e^{ip\cdot x}]\,d\mu(p)$$

The expression is not an ordinary operator at each point. It is an **operator-valued distribution**: smear with a test function $f$ to obtain $\phi(f)$. Products such as $\phi(x)^{2}$ at the same point are not automatically defined.

Fock space is a direct sum of symmetrized multiparticle Hilbert spaces. For fermions, antisymmetric Fock space and canonical anticommutation relations replace the bosonic construction. Particle interpretation depends on a choice of positive frequency; in curved or time-dependent spacetime there may be no unique global vacuum or particle notion.

## 3. Correlation functions and causality

Vacuum expectation values

$$W_{n}(x₁,\ldots,x_{n})=<0|\phi(x₁)\ldots\phi(x_{n})|0>$$

are distributions. They encode the theory’s observable content under an axiomatic reconstruction program. Time-ordered correlation functions instead organize perturbative scattering.

Microcausality requires local bosonic observables at spacelike separation to commute (fermionic fields use graded relations). This prevents controllable influence outside the light cone within the local theory. Vacuum correlations can remain nonzero at spacelike separation; correlation is not signaling.

The Feynman propagator is a Green distribution selected by time ordering and boundary prescription. Retarded, advanced, and Wightman two-point functions solve related equations with different support or frequency properties. Calling all of them “the propagator” without qualification hides essential causal information.

## 4. Wick products and ultraviolet singularity

Even a free field has singular short-distance correlations. Normal ordering subtracts a chosen vacuum contraction in flat-space Fock representations, defining Wick powers. In curved spacetime or interacting theories, renormalized local composite operators require local, covariant prescriptions and finite ambiguities.

Ultraviolet divergence is not simply a computer overflow. It signals that products or integrals of distributions are not defined by naive multiplication at coincident points. A regulator changes the problem so expressions are finite; renormalization specifies how parameters and composite operators depend on that regulator while finite observables are held fixed.

Different regularizations—cutoff, dimensional, Pauli–Villars, lattice—can preserve different symmetries. A regulator is removed only after proving or calculating that renormalized quantities have a controlled limit to the claimed order or within the claimed construction.

## 5. Perturbation theory and diagrams

Split an action into free and interacting parts and expand in a coupling $g$. Wick’s theorem turns Gaussian free-field expectations into sums over contractions. Feynman diagrams index algebraic terms: vertices encode interactions, edges encode propagators, loops encode momentum integrals.

Diagrams are not pictures of hidden particle paths. Internal lines need not satisfy external on-shell relations. A process amplitude also requires external-state conventions, symmetry factors, gauge handling, regularization, renormalization conditions, and a prescription for observable probabilities.

Perturbative series in QFT often are asymptotic rather than convergent. Truncation can still be predictive when the first omitted terms are controlled for a small effective coupling. Nonperturbative effects can scale like $e^{-1/g^{2}}$ and vanish to every order of a power series.

A loop order is not the same as experimental accuracy: large logarithms, thresholds, infrared behavior, and parameter uncertainty can rearrange importance.

## 6. Renormalization group and effective theory

Couplings depend on a scale $\mu$ used to define renormalized quantities. A beta function

$$\beta(g)=\mu dg/d\mu$$

describes this running. Physical observables should not depend on the arbitrary renormalization scale when computed exactly; residual scale dependence at finite perturbative order estimates one source of truncation uncertainty, not all uncertainty.

Wilsonian renormalization integrates out short-distance degrees of freedom and generates every operator allowed by symmetries. Operators are classified as relevant, marginal, or irrelevant near a fixed point by scaling dimensions, modified by quantum corrections.

An effective field theory is organized as an expansion in $E/\Lambda$, where $\Lambda$ is a breakdown scale. Nonrenormalizable interactions can be predictive at low energy with finitely many coefficients needed to a chosen accuracy. “Nonrenormalizable” does not mean useless; it means new counterterms enter at higher orders and the theory is not expected to define arbitrary high-energy behavior by itself.

Every EFT prediction should name power counting, symmetry, matching or calibration, truncation order, and the regime $E≪\Lambda$.

## 7. Gauge fields and constraints

Gauge redundancy makes the kinetic operator noninvertible before gauge fixing. In perturbative path-integral calculations, Faddeev–Popov determinants and ghost fields account for gauge-orbit volume in suitable local gauges. Ghosts are bookkeeping fields with statistics chosen by the determinant; they are not external physical particles.

BRST symmetry packages gauge invariance after gauge fixing. Physical states or observables are described through a cohomological condition in perturbative settings. An anomaly occurs when a classical symmetry cannot be maintained in the quantum theory. Gauge anomalies threaten consistency and must cancel in a viable gauge theory; global or trace anomalies have different interpretations.

Gauge fixing can be globally obstructed, and nonperturbative Gribov copies complicate a single representative per orbit. Boundary symmetries, Wilson loops, topological sectors, and large gauge transformations contain information invisible in a purely local gauge-fixed expansion.

## 8. Scattering and infrared boundaries

The LSZ reduction framework relates time-ordered correlation functions to scattering amplitudes when asymptotic particle states exist and satisfy spectral assumptions. Stable massive particles fit this picture most cleanly.

Massless gauge theories have infrared divergences. Idealized amplitudes for fixed numbers of charged particles can be ill-defined; inclusive observables, detector resolution, dressed states, or factorization methods handle physically unavoidable soft radiation. A finite ultraviolet-renormalized diagram is not automatically an infrared-safe observable.

Confining theories do not have colored quarks and gluons as asymptotic states. Perturbative partons remain useful at high energy through factorization, but translating them into hadron-level observables introduces nonperturbative inputs and controlled factorization assumptions.

Cross sections require flux factors, phase-space measures, spin/color averages, cuts representing measurement, and uncertainty propagation. An invariant amplitude alone is not yet an experimental prediction.

## 9. Euclidean and Lorentzian path integrals

The formal Lorentzian expression

$$Z=\int D\phi e^{iS[\phi]}$$

is oscillatory and is generally not a countably additive measure on a simple function space. It is a generator of perturbation theory or a heuristic unless a construction specifies more.

After Wick rotation in favorable settings, a Euclidean weight $e^{-S_{E}}$ resembles probability. For finite lattices it can define an ordinary finite-dimensional integral. Taking infinite-volume and continuum limits is a separate mathematical problem.

Osterwalder–Schrader reflection positivity and other axioms allow suitable Euclidean correlation functions to reconstruct a unitary Lorentzian theory. An arbitrary Euclidean model does not automatically satisfy them. Wick rotation can also be obstructed by curved spacetimes, nonequilibrium settings, singularities, or analytic structure.

## 10. Rigorous frameworks answer different questions

**Wightman axioms** formulate fields as operator-valued distributions with Poincaré covariance, spectral positivity, vacuum, and locality. Reconstruction connects suitable correlation functions to a Hilbert-space theory.

**Algebraic QFT** assigns algebras of observables to spacetime regions, emphasizing locality, covariance, and states on algebras. It can discuss superselection sectors and curved spacetimes without choosing one fundamental field coordinate.

**Constructive QFT** proves existence of interacting models, largely in lower spacetime dimensions, through controlled measures, operator methods, or cluster expansions.

**Lattice field theory** defines a regulated system with finite spacing and often finite volume. Monte Carlo estimates Euclidean observables with sampling error and autocorrelation. Continuum extrapolation, finite-volume error, renormalization, and sign problems remain.

**Perturbative algebraic QFT** constructs interacting observables as formal power series while controlling locality and renormalization, but a formal series is not necessarily a nonperturbative numerical function.

No one framework makes every desired theory, observable, and computation equally transparent.

## 11. Statistical mechanics bridge

Euclidean QFT in $d$ dimensions resembles statistical mechanics in $d$ dimensions, while finite-temperature quantum theory uses imaginary time periodicity $\beta$. Bosonic fields are periodic and fermionic fields antiperiodic in imaginary time under standard thermal constructions.

Kubo–Martin–Schwinger (KMS) condition characterizes equilibrium states in operator-algebraic language. It replaces a trace formula when infinite systems lack a trace-class Gibbs density operator.

Critical phenomena and QFT share renormalization-group fixed points. Universality says long-distance critical behavior can ignore microscopic details while retaining dimension, symmetry, and relevant couplings. It does not say every material with the same rough appearance has identical exponents.

## 12. What counts as a trustworthy claim?

Label a QFT statement as one of:

1. **finite regulated identity:** exact in a lattice, cutoff, or finite-dimensional model;
2. **perturbative theorem/calculation:** correct as a formal series or through stated order;
3. **effective prediction:** controlled up to powers of a breakdown ratio and parameter uncertainty;
4. **axiomatic consequence:** follows if a model satisfying named axioms exists;
5. **nonperturbative construction:** existence and properties proved in a specified dimension and theory;
6. **numerical evidence:** finite lattice/volume/statistics with extrapolation model;
7. **conjectural bridge:** physically motivated but not established in the asserted generality.

This taxonomy prevents “physicists calculate it” and “mathematicians have not constructed it” from talking past each other.

## Worked audits

### A. Scalar dimensions

**Worked example.**

In $D$ spacetime dimensions with natural units, action is dimensionless and $d^{D}x$ has mass dimension $-D$. From $(\partial\phi)^{2}$, field dimension is $(D-2)/2$. A $\phi^{n}$ coupling has dimension $D-n(D-2)/2$. This power counting predicts relevance near the free fixed point; interactions can add anomalous dimensions.

### B. Gauge-invariant observable

The local potential component $A_\mu$ changes under gauge transformations. Abelian field strength $F=dA$ is invariant, and a closed Wilson loop is invariant under allowed single-valued gauge transformations. Boundary conditions and nonabelian conjugation qualifications must still be stated.

### C. Regulator versus renormalization

A momentum cutoff makes a divergent loop finite but introduces cutoff dependence and may break Lorentz or gauge symmetry. Counterterms and renormalization conditions absorb allowed dependence into parameters; one then checks symmetry restoration and residual suppressed cutoff effects. Merely writing a cutoff is not renormalization.

## Exercises

<a id="deep-dive-qft-honest-orientation-ex-1"></a>

### Exercise 1

1. Why must a point field $\phi(x)$ be treated carefully even in a free theory?

<details>
<summary>Hint 1</summary>

The point field is not an ordinary bounded operator at each spacetime point.
</details>

<details>
<summary>Hint 2</summary>

Recall why smearing against a test function is needed before using operator products.
</details>

<details>
<summary>Solution</summary>

The field is operator-valued distribution; only smeared fields are operators on a controlled domain, and coincident products need renormalized definitions.

</details>

<a id="deep-dive-qft-honest-orientation-ex-2"></a>

### Exercise 2

2. Distinguish a virtual internal line from an asymptotic particle.

<details>
<summary>Hint 1</summary>

A diagram’s internal line represents a term of a propagator expansion.
</details>

<details>
<summary>Hint 2</summary>

Contrast its off-shell integration variable with an asymptotic particle state used in scattering.
</details>

<details>
<summary>Solution</summary>

An internal line indexes a propagator inside an expansion and need not be on shell; an asymptotic particle corresponds to a stable state/pole and external preparation or detection under scattering assumptions.

</details>

### Further exercises

3. Explain why a finite lattice Monte Carlo error bar does not include continuum extrapolation error.
4. Give the minimum contents of a controlled EFT result.

### Answers


3. Sampling error is conditional on lattice spacing, volume, action, and algorithm. Continuum and infinite-volume limits add systematic models, scale setting, and renormalization uncertainties.
4. State the fields and symmetries, operator basis, power counting, matching/calibration, regulator and scheme as needed, truncation order, uncertainty estimate, and energy/length regime below the breakdown scale.

## Sources and framework boundaries

- [Jorgensen and Ólafsson, *Osterwalder–Schrader axioms and Wightman
  axioms*](https://arxiv.org/abs/math-ph/0001010) surveys the relationship
  between two rigorous axiomatic frameworks.
- [Thiemann, *Canonical Quantum Gravity, Constructive QFT and
  Renormalisation*](https://arxiv.org/abs/2003.13622) gives a primary account
  of one constructive and renormalization program and its stated scope.

These references support the distinction among frameworks. They do not imply
that a four-dimensional interacting gauge theory satisfying every desired
property has been constructed, or that formal perturbation series supply a
nonperturbative definition.

## Continue

Read free-field construction, distributions and microlocal analysis, perturbative renormalization, operator algebras, constructive models, lattice field theory, anomalies, scattering, and EFT as separate technical subjects. A good orientation should make the next proof or calculation possible without disguising its status.
