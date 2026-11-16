var e=`---
id: reader-research-frontiers-seven-lenses
title: "Research Frontiers Through Seven Lenses: What Is Known, What Is Open, and How to Begin"
license: CC-BY-4.0
---

# Research frontiers through seven lenses

Mathematical research does not begin where definitions end. It begins when a
precise question survives every easy argument. This reader develops seven such
entry points: Navier–Stokes regularity, the Riemann hypothesis, \\(P\\) versus
\\(NP\\), mirror symmetry, topological data analysis, compressed sensing, and
mathematical climate science. The goal is not to make a reader research-ready
in an afternoon. It is to make the boundary between theorem, computation,
model, conjecture, and evidence impossible to miss.

> **Status boundary, checked 2026-08-31.** The three-dimensional
> Navier–Stokes existence-and-smoothness problem, the Riemann hypothesis, and
> \\(P\\) versus \\(NP\\) remain unsolved Millennium Prize Problems. Mirror
> symmetry is a family of conjectures, constructions, and theorems rather than
> one binary open problem. Persistent homology and compressed sensing contain
> mature theorems alongside active statistical and computational research.
> Mathematical climate science studies models, inference, multiscale dynamics,
> and uncertainty; it is not one conjecture awaiting a yes/no proof. This
> reader neither claims nor evaluates a solution to any open problem.

The status statement above is based on the Clay Mathematics Institute's
current problem list and 2025–26 Millennium lecture series. Among the seven
Millennium problems, Clay lists only the Poincaré conjecture as solved. Exact
links and theorem-level sources appear at the end.

## How to read a frontier claim

Put every claim on one of five rungs.

1. **Definition or identity.** It follows from stipulated meanings or direct
   algebra. Example: an incompressible field satisfies \\(\\nabla\\cdot u=0\\).
2. **Finite calculation.** A matrix was reduced, a finite graph searched, or a
   finite list of zeros checked. It proves exactly that finite statement.
3. **Theorem with hypotheses.** The quantifiers, domain, regularity,
   probability, constants, and computational model are part of the theorem.
4. **Conditional consequence or model output.** “If RH holds…” and “under
   scenario \\(S\\), model \\(M\\) produces…” are valid conditional statements.
5. **Open question.** Neither extensive evidence nor absence of a known
   counterexample moves a universal statement to rung 3.

A frontier field can have results on all five rungs at once. The professional
habit is to ask, “Which rung is this sentence on?” before asking whether it is
impressive.

### A compact prerequisite map

| Lens | Minimum on-ramp | Deeper preparation | Central object |
|---|---|---|---|
| Navier–Stokes | vector calculus, ODEs | PDEs, Sobolev spaces, functional analysis | velocity field |
| Riemann hypothesis | series, complex numbers | complex and analytic number theory | zeta function |
| \\(P\\) versus \\(NP\\) | discrete math, algorithms | computability, circuits, proof complexity | decision language |
| mirror symmetry | linear algebra, topology | algebraic and symplectic geometry, categories | paired geometric theories |
| topological data analysis | linear algebra, graphs | homology, probability, computational geometry | filtered complex |
| compressed sensing | linear algebra, optimization | probability, harmonic analysis | sparse inverse problem |
| climate mathematics | calculus, probability, ODEs | PDEs, dynamics, inverse problems, numerics | hierarchy of models |

Missing prerequisites are not a reason to leave. In each lens, first reproduce
the toy model, then identify precisely which step requires more machinery.

## Lens I — Navier–Stokes: an estimate that does not close

For velocity \\(u(x,t)\\in\\mathbb R^3\\), pressure \\(p\\), viscosity \\(\\nu>0\\),
and force \\(f\\), the incompressible equations are

\\[
\\partial_tu+(u\\cdot\\nabla)u=-\\nabla p+\\nu\\Delta u+f,
\\qquad \\nabla\\cdot u=0.
\\]

The official Millennium problem has precise alternatives and admissible
domains; the slogan “do smooth three-dimensional solutions stay smooth?” is an
orientation, not its complete statement. One standard route constructs weak
solutions with finite energy. The unresolved gap is not whether formal
solutions can be written down, nor whether simulations run. It concerns global
regularity and uniqueness at the stated level for arbitrary admissible smooth
data in three dimensions.

### The energy calculation

Assume for the calculation a smooth periodic solution with \\(f=0\\). Take the
\\(L^2\\) inner product with \\(u\\). Periodicity and incompressibility give

\\[
\\int u\\cdot (u\\cdot\\nabla)u\\,dx
=\\frac12\\int u\\cdot\\nabla |u|^2\\,dx=0,
\\qquad
\\int u\\cdot\\nabla p\\,dx=0.
\\]

Integration by parts then yields

\\[
\\frac12\\frac{d}{dt}\\|u(t)\\|_2^2
+\\nu\\|\\nabla u(t)\\|_2^2=0.
\\]

This is a theorem for sufficiently regular solutions under the named boundary
conditions. It controls kinetic energy and the time-integrated gradient. It
does **not** directly bound every pointwise derivative for all time. The
nonlinear term cancels in the energy balance yet can transfer energy between
spatial scales. “The nonlinearity contributes zero to total energy” therefore
does not mean “the nonlinearity is harmless.”

### Worked exact flow: decaying shear

On the periodic box, let

\\[
u(x,y,z,t)=(a e^{-\\nu k^2t}\\sin(ky),0,0),\\qquad p=0.
\\]

Its divergence is zero. Because the field has only an \\(x\\)-component and is
independent of \\(x\\), \\((u\\cdot\\nabla)u=u_1\\partial_xu=0\\). Also
\\(\\Delta u=-k^2u\\), so \\(\\partial_tu=\\nu\\Delta u\\). This is an exact smooth
solution for all \\(t\\ge0\\). It teaches viscosity and cancellation. It does not
settle arbitrary three-dimensional data.

### Known, open, and often confused

- Global smoothness is known in important lower-dimensional or restricted
  settings; global finite-energy weak solutions exist in three dimensions.
- Regularity criteria say, roughly, that if specified norms remain controlled,
  then smoothness continues. A criterion identifies what would suffice; it
  does not prove the sufficient quantity stays finite.
- The open Millennium statement concerns arbitrary admissible smooth data in
  three dimensions. One exact family, any finite simulation, or a turbulence
  closure is not a universal proof.
- Numerical convergence toward a discretized or continuum model and physical
  validation against fluid data are distinct from a global regularity theorem.

### Exercise 1 — energy and amplitude

For the shear flow above on \\([0,2\\pi]^3\\) with integer \\(k\\ne0\\), compute
\\(\\|u(t)\\|_2^2\\) and verify the energy identity directly.

**Solution.** Since \\(\\int_0^{2\\pi}\\sin^2(ky)\\,dy=\\pi\\),

\\[
\\|u(t)\\|_2^2
=a^2e^{-2\\nu k^2t}(2\\pi)^2\\pi
=4\\pi^3a^2e^{-2\\nu k^2t}.
\\]

Only \\(\\partial_yu_1=ak e^{-\\nu k^2t}\\cos(ky)\\) is nonzero, so
\\(\\|\\nabla u\\|_2^2=4\\pi^3a^2k^2e^{-2\\nu k^2t}\\). Therefore

\\[
\\frac12\\frac d{dt}\\|u\\|_2^2
=-4\\pi^3\\nu a^2k^2e^{-2\\nu k^2t}
=-\\nu\\|\\nabla u\\|_2^2.
\\]

The exact decay rate grows like \\(k^2\\): viscosity damps finer scales faster.

**Backward path:** vector calculus, Fourier series, energy methods.  
**Forward path:** weak solutions, Sobolev embeddings, scaling-critical spaces,
partial regularity, verified numerics with a posteriori bounds.

## Lens II — the Riemann hypothesis: continuation before conjecture

For \\(\\operatorname{Re}s>1\\),

\\[
\\zeta(s)=\\sum_{n=1}^{\\infty}n^{-s}
=\\prod_p(1-p^{-s})^{-1}.
\\]

Absolute convergence justifies rearranging the prime product in this
half-plane. Analytic continuation extends \\(\\zeta\\) meromorphically to the
complex plane with a simple pole at \\(s=1\\). The series above does not suddenly
converge everywhere merely because the function has been continued.

The functional equation reveals trivial zeros at negative even integers and a
symmetry of nontrivial zeros in the critical strip \\(0<\\operatorname{Re}s<1\\).
The Riemann hypothesis (RH) states

\\[
\\zeta(\\rho)=0,\\quad 0<\\operatorname{Re}\\rho<1
\\quad\\Longrightarrow\\quad
\\operatorname{Re}\\rho=\\tfrac12.
\\]

The prime number theorem is proved and says \\(\\pi(x)\\sim x/\\log x\\). RH is a
strictly stronger unproved assertion that would give sharper control of error
terms in prime distribution. An equivalence “RH if and only if \\(Q\\)” does not
prove RH until \\(Q\\) itself is proved.

### Worked finite model: an Euler product truncation

At \\(s=2\\), use primes \\(2,3,5\\):

\\[
\\prod_{p\\in\\{2,3,5\\}}(1-p^{-2})^{-1}
=\\frac43\\frac98\\frac{25}{24}=\\frac{25}{16}=1.5625.
\\]

The full value is \\(\\zeta(2)=\\pi^2/6\\approx1.644934\\). The finite product is
smaller because each omitted factor is greater than one. It encodes precisely
the positive integers whose prime factors lie in \\(\\{2,3,5\\}\\); it is evidence
for understanding the product mechanism, not evidence that locates every
complex zero.

### Exercise 2 — why finite verification cannot prove RH

Suppose a certified computation proves that every nontrivial zero with
\\(|\\operatorname{Im}\\rho|\\le T\\) lies on the critical line. State exactly what
has been proved and exhibit the missing quantifier.

**Solution.** The proved statement is

\\[
\\forall\\rho\\,[\\zeta(\\rho)=0,\\ 0<\\operatorname{Re}\\rho<1,
\\ |\\operatorname{Im}\\rho|\\le T]
\\Rightarrow\\operatorname{Re}\\rho=\\tfrac12.
\\]

RH removes the bound \\(|\\operatorname{Im}\\rho|\\le T\\), quantifying over every
nontrivial zero. No matter how large finite \\(T\\) is, a zero above that height
is not covered. Certification makes the bounded statement rigorous; it does
not change its bounded quantifier into an unbounded one.

### Common misconceptions

- “The Euler product holds everywhere.” It is initially justified where it
  converges absolutely; continuation and identities beyond that region require
  separate arguments.
- “Random-matrix statistics prove RH.” Statistical analogies and matched
  correlations can guide theory, but do not locate each zero.
- “RH says primes are random.” RH is an exact zero-location claim. Randomness
  metaphors do not replace explicit formulas or quantified error bounds.

**Backward path:** complex series, residues, unique factorization.  
**Forward path:** explicit formulas, Dirichlet \\(L\\)-functions, spectral ideas,
zero-density estimates, analytic estimates conditional and unconditional on RH.

## Lens III — \\(P\\) versus \\(NP\\): quantifying over algorithms

A decision problem is a language \\(L\\subseteq\\{0,1\\}^*\\). The class \\(P\\)
contains languages decidable by deterministic polynomial-time algorithms.
A language is in \\(NP\\) if there are a polynomial \\(q\\) and polynomial-time
verifier \\(V\\) such that

\\[
x\\in L\\quad\\Longleftrightarrow\\quad
\\exists y\\ (|y|\\le q(|x|)\\ \\text{and}\\ V(x,y)=1).
\\]

Thus \\(P\\subseteq NP\\); whether equality holds remains open. “NP” does not mean
“non-polynomial.” The question is formulated for decision languages and
worst-case polynomial time under specified computational conventions.

### Worked verifier: subset sum

Input integers \\(a_1,\\ldots,a_n\\) and target \\(b\\) are written in binary. A
certificate is a bit vector \\(y\\in\\{0,1\\}^n\\). Verify
\\(\\sum_i y_ia_i=b\\) using binary arithmetic. The certificate length and
arithmetic cost are polynomial in the total bit length of the input. This shows
the decision problem belongs to \\(NP\\). Trying all \\(2^n\\) certificates only
shows one algorithm is exponential; it does not rule out every polynomial-time
algorithm.

A polynomial-time many-one reduction \\(A\\le_p B\\) maps \\(x\\) to \\(f(x)\\) with
\\(x\\in A\\iff f(x)\\in B\\). If \\(B\\) is easy, then \\(A\\) is easy. Therefore to
show a new problem \\(B\\) is NP-hard, reduce a known NP-hard problem **to**
\\(B\\), not the other way around.

### Proof barriers are scoped theorems

Relativization, natural-proofs, and algebrization results show that broad
families of familiar techniques cannot settle the question in the way one
might hope, under their precise definitions or assumptions. They do not prove
\\(P=NP\\), prove \\(P\\ne NP\\), or show the problem is forever inaccessible.
Lower bounds for restricted circuits are real theorems; a class separation
needs a lower bound strong enough for the relevant general model.

### Exercise 3 — input value versus input length

An algorithm on an integer \\(N\\) performs \\(N^2\\) operations. Is it
polynomial-time when \\(N\\) is encoded in binary? What if its input is a unary
string \\(1^N\\)?

**Solution.** A binary encoding has length \\(n=\\lfloor\\log_2N\\rfloor+1\\), so
\\(N^2\\) can be as large as roughly \\(2^{2n}\\), exponential in input length.
For unary input, the length is \\(N\\), and \\(N^2\\) is quadratic. Complexity is
measured in encoded length; changing the encoding can change the problem.

### Exercise 4 — reduction direction

You prove \\(A\\le_p\\mathrm{SAT}\\). Does NP-hardness of SAT imply that \\(A\\) is
NP-hard?

**Solution.** No. The reduction gives a SAT-based algorithm for \\(A\\), showing
that \\(A\\) is no harder than SAT under this reduction. To transfer hardness to
\\(A\\), one needs \\(\\mathrm{SAT}\\le_p A\\) (or reductions from every NP
language). For example, a trivial problem can reduce to SAT without becoming
NP-hard.

**Backward path:** logic, graph algorithms, asymptotic analysis.  
**Forward path:** circuit complexity, proof complexity, pseudorandomness,
parameterized and average-case complexity, interactive proofs.

## Lens IV — mirror symmetry: a dictionary, not identity

Mirror symmetry began as a physics-motivated duality and now names several
related mathematical programs. Roughly, a mirror pair \\((X,Y)\\) exchanges an
A-model built from symplectic geometry on one side with a B-model built from
complex or algebraic geometry on the other. The spaces are not generally
isomorphic. The claim is that suitable invariants, deformation theories, or
categories correspond.

Three formulations must be kept distinct.

- **Enumerative mirror symmetry** relates curve-counting invariants to period
  calculations and variations of complex structure in specified families.
- **Homological mirror symmetry** proposes equivalences between an appropriate
  Fukaya category and a derived category of coherent sheaves, with careful
  choices of coefficients and enhancements.
- **SYZ-type geometry** seeks dual special Lagrangian torus fibrations, usually
  with singular fibers and quantum or instanton corrections.

Theorems establish these correspondences for many specific classes. There is
no single global status switch labelled “mirror symmetry proved.”

### A toy Landau–Ginzburg calculation

Consider the holomorphic function on \\(\\mathbb C^*\\)

\\[
W(z)=z+\\frac qz,\\qquad q\\ne0.
\\]

Its critical points satisfy

\\[
W'(z)=1-\\frac q{z^2}=0,
\\]

so \\(z=\\pm\\sqrt q\\), after choosing square roots, and the critical values are
\\(W=\\pm2\\sqrt q\\). This finite calculation illustrates how a function and its
critical structure can encode geometric information on a mirror side. It is
not by itself a construction or proof of a categorical equivalence.

### Exercise 5 — nondegeneracy in the toy model

Show that both critical points of \\(W\\) are nondegenerate.

**Solution.** \\(W''(z)=2q/z^3\\). At a critical point \\(z^2=q\\),
\\(W''(z)=2/z\\), which is nonzero because \\(z\\in\\mathbb C^*\\). Hence both
critical points are nondegenerate. The statement is local and exact; drawing a
global mirror-symmetry conclusion would require additional geometric data and
theorems.

### Common misconceptions

- “Mirror” does not mean a reflected picture or isomorphic manifold.
- Agreement of one numerical invariant does not establish categorical,
  enumerative, and geometric formulations simultaneously.
- A physics derivation can be extraordinarily predictive without already being
  a proof in a specified mathematical foundation.
- Category names are not enough: objects, morphisms, gradings, coefficients,
  compactness, and equivalence notion matter.

**Backward path:** manifolds, complex analysis, homology, categories.  
**Forward path:** Gromov–Witten theory, Fukaya categories, derived categories,
toric mirrors, wall crossing, tropical and non-Archimedean geometry.

## Lens V — topological data analysis: shape depends on scale

Let \\(X\\) be a finite metric space. The Vietoris–Rips complex \\(VR_r(X)\\)
contains a simplex for each finite subset whose pairwise distances are at most
\\(r\\). As \\(r\\) increases these complexes form a filtration. Homology classes
are born and die along the filtration, producing persistence intervals or a
persistence diagram.

### Worked square

Take the four corners of a unit square in Euclidean distance.

- For \\(0\\le r<1\\), there are four vertices: \\(\\beta_0=4,\\beta_1=0\\).
- At \\(r=1\\), side edges form one cycle: \\(\\beta_0=1,\\beta_1=1\\).
- At \\(r=\\sqrt2\\), diagonals appear. Since Rips is a clique complex, all
  triangular faces also appear and fill the cycle: \\(\\beta_0=1,\\beta_1=0\\).

Thus under this threshold convention one degree-one interval is
\\([1,\\sqrt2)\\). This is an exact result for this point cloud, metric, and
filtration. It does not prove the generating population is a circle.

Stability theorems bound how persistence diagrams change when specified inputs
are perturbed in specified metrics. They do not automatically give statistical
significance, validate a scientific metric, or distinguish sampling artifacts
from latent topology. Those are additional inference problems.

### Exercise 6 — units and persistence

Multiply every coordinate in the square example by \\(c>0\\). What happens to
the interval, and which quantity is scale invariant?

**Solution.** Every Euclidean distance is multiplied by \\(c\\), so the interval
becomes \\([c,c\\sqrt2)\\). Its additive lifetime becomes
\\(c(\\sqrt2-1)\\), which is not scale invariant. The ratio death/birth remains
\\(\\sqrt2\\) because both endpoints scale equally. This does not make the ratio
universally preferable; if births can be zero or if additive error is natural,
the ratio can be unstable or undefined.

### Exercise 7 — why graph cycles are insufficient

At \\(r=\\sqrt2\\), the square's one-skeleton has many graph cycles. Why is
\\(H_1\\) nevertheless zero?

**Solution.** Homology uses the full simplicial complex, not only its graph.
Each triple of vertices is mutually adjacent and therefore spans a 2-simplex.
The boundaries of those triangular faces span the graph's cycle space, so all
one-cycles are boundaries. In the full four-vertex simplex, \\(H_1=0\\).

**Backward path:** graphs, matrices, simplicial homology.  
**Forward path:** persistence modules, stability and reconstruction theorems,
multiparameter persistence, statistical inference, scalable complexes.

## Lens VI — compressed sensing: information comes from structure

Let \\(A\\in\\mathbb R^{m\\times n}\\) with \\(m<n\\), and observe

\\[
y=Ax+e.
\\]

Since \\(A\\) has a nonzero null vector, arbitrary \\(x\\) cannot be uniquely
recovered. Compressed sensing assumes that \\(x\\) is sparse or approximately
sparse in a named representation and that \\(A\\) is compatible with that
structure. The convex program

\\[
\\min_z\\|z\\|_1\\quad\\text{subject to }Az=y
\\]

can then recover sparse vectors under nullspace, restricted-isometry, or
related hypotheses. “\\(m<n\\)” alone supplies no recovery guarantee.

### Worked affine line

Set

\\[
A=\\begin{pmatrix}1&0&1\\\\0&1&1\\end{pmatrix},
\\qquad y=\\binom11.
\\]

Every solution is \\(z(t)=(1-t,1-t,t)\\). Its \\(\\ell_1\\) objective is

\\[
g(t)=2|1-t|+|t|.
\\]

For \\(t\\le0\\), \\(g=2-3t\\); for \\(0\\le t\\le1\\), \\(g=2-t\\); and for
\\(t\\ge1\\), \\(g=3t-2\\). The unique minimum is at \\(t=1\\), selecting the
one-sparse vector \\((0,0,1)\\). This proves the claim for this matrix and datum,
not for arbitrary undersampled systems.

In noisy problems, representative bounds have the form

\\[
\\|\\widehat x-x\\|_2
\\le C_1\\varepsilon+C_2\\frac{\\sigma_k(x)_1}{\\sqrt k},
\\]

where \\(\\|e\\|_2\\le\\varepsilon\\) and \\(\\sigma_k(x)_1\\) is best \\(k\\)-term
approximation error. Noise and failure of exact sparsity are separate terms.

### Exercise 8 — a fatal sparse collision

Suppose two distinct \\(k\\)-sparse vectors \\(x_1,x_2\\) satisfy
\\(Ax_1=Ax_2\\). Prove that no decoder depending only on \\(A\\) and \\(y\\) can
recover every \\(k\\)-sparse vector exactly.

**Solution.** Feed the decoder the common datum
\\(y=Ax_1=Ax_2\\). It must return one output. If it returns \\(x_1\\), it fails
when \\(x_2\\) generated the datum; if it returns \\(x_2\\), it fails for \\(x_1\\);
any other output fails for both. Equivalently, the nonzero vector
\\(x_1-x_2\\in\\ker A\\) has support at most \\(2k\\). Preventing such sparse
null vectors is a necessary injectivity condition.

### Common misconceptions

- A small residual proves data consistency, not recovery of the unknown truth.
- Random designs work with quantified probability under a named distribution;
  “random” is not a synonym for “irregular.”
- Classical sampling and compressed sensing assume different signal classes
  and acquisition schemes. No information-theoretic limit is violated.
- The sparsifying basis, calibration error, quantization, optimization
  tolerance, and validation target belong in an applied claim.

**Backward path:** nullspaces, convexity, probability.  
**Forward path:** restricted isometries, sparse approximation, phase
transitions, matrix completion, structured measurements, learned inverse maps.

## Lens VII — climate mathematics: a hierarchy of conditional models

Climate mathematics links conservation laws, rotating stratified fluids,
radiative transfer, chemistry, stochastic processes, data assimilation,
inverse problems, bifurcations, and numerical approximation. Global Earth
system models coexist with reduced, regional, statistical, and conceptual
models. A simpler model can reveal a mechanism; it is not a miniature Earth.

The IPCC separates sources such as internal variability, model-response
uncertainty, and scenario uncertainty. Their relative contributions depend on
the variable, region, and time horizon. A model projection conditional on a
forcing scenario is not the same object as an initial-condition weather
prediction, and neither is an unconditional prophecy.

### Worked zero-dimensional energy-balance model

Let \\(T(t)\\) be a temperature anomaly and consider

\\[
C\\dot T=F-\\lambda T,
\\qquad C>0,\\quad\\lambda>0,
\\]

where \\(C\\) is effective heat capacity, \\(F\\) a constant forcing, and
\\(\\lambda\\) a linear restoring coefficient. Solving the linear ODE gives

\\[
T(t)=\\frac F\\lambda+
\\left(T(0)-\\frac F\\lambda\\right)e^{-\\lambda t/C}.
\\]

The equilibrium \\(T_*=F/\\lambda\\) is stable and the response time is
\\(\\tau=C/\\lambda\\). The model cleanly distinguishes equilibrium sensitivity
from transient adjustment. It omits spatial transport, nonlinear feedbacks,
oceans with many timescales, internal variability, and changing forcing.

### A first uncertainty propagation

For independent small uncertainties in \\(F\\) and \\(\\lambda\\), linearizing
\\(T_*=F/\\lambda\\) gives

\\[
dT_*\\approx\\frac1\\lambda\\,dF-
\\frac F{\\lambda^2}\\,d\\lambda.
\\]

Thus an approximate variance is

\\[
\\operatorname{Var}(T_*)\\approx
\\frac{\\operatorname{Var}(F)}{\\lambda^2}
+\\frac{F^2\\operatorname{Var}(\\lambda)}{\\lambda^4},
\\]

with a covariance term if the inputs are dependent. This is local propagation
inside the toy model. It does not include structural model discrepancy or
scenario uncertainty.

### Exercise 9 — time to a fraction of equilibrium

Assume \\(T(0)=0\\) and \\(F>0\\). Find the time to reach a fraction
\\(0<q<1\\) of equilibrium. What is the half-response time?

**Solution.** Here \\(T(t)=T_*(1-e^{-t/\\tau})\\), with
\\(\\tau=C/\\lambda\\). Setting \\(T(t)=qT_*\\) yields
\\(e^{-t/\\tau}=1-q\\), hence

\\[
t_q=-\\tau\\log(1-q).
\\]

For \\(q=1/2\\), \\(t_{1/2}=\\tau\\log2\\). The forcing amplitude changes the
equilibrium but not the response time in this linear constant-coefficient
model.

### Exercise 10 — a tipping toy model

Consider \\(\\dot x=\\mu-x^2\\). Find equilibria and their linear stability. What
happens as \\(\\mu\\) decreases through zero?

**Solution.** For \\(\\mu>0\\), equilibria are
\\(x_\\pm=\\pm\\sqrt\\mu\\). Since the derivative of the vector field is \\(-2x\\),
\\(x_+\\) is linearly stable and \\(x_-\\) unstable. At \\(\\mu=0\\) they collide at
zero; for \\(\\mu<0\\) there is no equilibrium. This is the saddle-node normal
form, a local mechanism for bifurcation-induced loss of an equilibrium. It does
not establish that a particular climate subsystem follows this scalar equation,
where its parameter threshold lies, or that all tipping is saddle-node
tipping. Noise-induced and rate-induced transitions are distinct mechanisms.

### Common misconceptions

- Validation against observations, convergence of a numerical scheme, and
  proof of a PDE theorem are three different achievements.
- Ensemble spread samples choices represented by the ensemble; it need not
  capture every structural uncertainty.
- Uncertainty is not ignorance without structure. Name the source, target,
  conditioning information, and representation.
- A projection under a scenario is conditional. Comparing scenarios is not the
  same as estimating internal variability under one scenario.

**Backward path:** ODEs, probability, fluid mechanics, numerical error.  
**Forward path:** geophysical fluid dynamics, stochastic parameterization,
data assimilation, detection and attribution, multiscale reduction, tipping
theory, robust decision methods.

## One method across all seven fields

The mathematical objects differ, but a responsible first research briefing can
use the same template.

1. **Write the object and quantifiers.** Is it every smooth initial datum,
   every zero, every algorithm, or a sampled signal class?
2. **State the domain and representation.** Boundary conditions, input
   encoding, coefficient field, sparsifying basis, metric, and forcing scenario
   can change the claim.
3. **Reproduce one finite example.** Keep it explicitly finite.
4. **Reconstruct one theorem.** List all hypotheses and mark where each enters
   the proof.
5. **Locate the unclosed arrow.** Energy does not imply regularity; finite
   verification does not imply a universal claim; stability does not imply
   significance; fit does not imply identification.
6. **Try to break the statement.** Test a boundary case, wrong reduction
   direction, sparse collision, rescaling, omitted covariance, or degenerate
   critical point.
7. **Record provenance and date temporal claims.** A frontier map without
   sources becomes stale invisibly.

### Capstone — a two-page frontier audit

Choose one lens and produce:

- a one-sentence claim with explicit quantifiers;
- a status label: definition, finite calculation, theorem, conditional result,
  or open question;
- a prerequisite graph with three immediate backward links;
- one worked toy model and one way it can mislead;
- one theorem with every hypothesis copied into your own notation;
- one open step that the theorem does not close;
- one reproducible computation or proof check;
- two primary sources and a dated status source;
- three bounded next questions that could be attempted without pretending to
  solve the flagship problem.

A successful audit is narrower at the end than at the beginning. Precision is
progress.

## Sources, attribution, and scope

Status was checked on 2026-08-31. These links support the claims indicated;
none is cited as authority outside its scope.

- [Clay Mathematics Institute, Millennium Prize Problems](https://www.claymath.org/millennium-problems/)
  and [2025–26 lecture series](https://www.claymath.org/events/millennium-prize-problems-lecture-series/)
  — current institutional solved/unsolved classification.
- [Fefferman, official Navier–Stokes problem description](https://www.claymath.org/wp-content/uploads/2022/05/navierstokes.pdf)
  — precise alternatives and problem setting; the energy derivation here is an
  elementary calculation under stronger smoothness assumptions.
- [Bombieri, official Riemann hypothesis description](https://www.claymath.org/wp-content/uploads/2022/05/riemann.pdf)
  — zeta function, critical zeros, and official conjecture.
- [Cook, official \\(P\\) versus \\(NP\\) description](https://www.claymath.org/wp-content/uploads/2022/06/pvsnp.pdf)
  — formal complexity question and NP-completeness context.
- [Baker, Gill, and Solovay, DOI 10.1137/0204037](https://doi.org/10.1137/0204037),
  [Razborov and Rudich, DOI 10.1145/195058.195134](https://doi.org/10.1145/195058.195134),
  and [Aaronson and Wigderson, DOI 10.1145/1490270.1490272](https://doi.org/10.1145/1490270.1490272)
  — primary sources for the relativization, natural-proofs, and algebrization
  barriers respectively, each only under its definitions and assumptions.
- [Kontsevich, *Homological Algebra of Mirror Symmetry*](https://arxiv.org/abs/alg-geom/9411018)
  and [Strominger, Yau, and Zaslow, DOI 10.1016/0550-3213(96)00434-8](https://doi.org/10.1016/0550-3213(96)00434-8)
  — foundational categorical and torus-fibration formulations, not a claim
  that every formulation is established for every space.
- [Edelsbrunner, Letscher, and Zomorodian, DOI 10.1007/s00454-002-2885-2](https://doi.org/10.1007/s00454-002-2885-2)
  and [Cohen-Steiner, Edelsbrunner, and Harer, DOI 10.1007/s00454-006-1276-5](https://doi.org/10.1007/s00454-006-1276-5)
  — persistence algorithms and a stability theorem under stated hypotheses.
- [Donoho, DOI 10.1109/TIT.2006.871582](https://doi.org/10.1109/TIT.2006.871582)
  and [Candès, Romberg, and Tao, DOI 10.1002/cpa.20124](https://doi.org/10.1002/cpa.20124)
  — foundational compressed-sensing and stable-recovery results under
  structural and measurement hypotheses.
- [IPCC AR6 Working Group I, Chapter 1](https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-1/)
  — model hierarchies, calibrated uncertainty language, and distinctions among
  internal variability, response, and scenario uncertainty. It is an assessed
  scientific source, not a proof that any one toy model is adequate.

## Continue in Math Atlas

Use the dedicated frontier guides for theorem-level expansion. Continue with:

- [Navier–Stokes Regularity: Energy, Scaling, and the Unclosed Gap](/resources/library:deep-dive-research-frontier-navier-stokes-regularity/)
- [The Riemann Hypothesis: Zeros, Primes, and Finite Evidence](/resources/library:deep-dive-research-frontier-riemann-hypothesis/)
- [P versus NP: The Exact Question Behind ‘Easy to Check’](/resources/library:deep-dive-research-frontier-p-versus-np/)
- [Mirror Symmetry: A Dictionary Between Two Geometries](/resources/library:deep-dive-research-frontier-mirror-symmetry/)
- [Topological Data Analysis: Shape Across Scale, Claims Within Scope](/resources/library:deep-dive-research-frontier-topological-data-analysis/)
- [Compressed Sensing: Recovery Requires Structure](/resources/library:deep-dive-research-frontier-compressed-sensing/)
- [Mathematical Climate Science: Models, Inference, and Conditional Futures](/resources/library:deep-dive-research-frontier-mathematical-climate-science/)

Those guides deepen individual lenses. This reader's purpose is the transferable
discipline: never let a finite calculation, a conditional model, or an analogy
silently inherit the logical force of a theorem.
`;export{e as default};