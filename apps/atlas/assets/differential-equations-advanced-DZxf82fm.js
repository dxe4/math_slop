var e=`---
id: course-differential-equations-advanced
title: "Boundary Problems, Weak Fields, and Verified Approximation"
level: advanced-undergraduate
estimated_minutes: null
license: CC BY-SA 4.0
---

# Boundary Problems, Weak Fields, and Verified Approximation

<!-- euler-course-route -->

## Current course route

This is an Outline seminar in a selected theme. Use its [course page](/courses/atlas-differential-equations-advanced/) for the preparation courses, then attempt the mathematical investigations below. A general graduate chapter syllabus has not yet been assigned.

Preparation courses: [Ordinary differential equations](/courses/atlas-differential-equations-dynamics-standard/) · [Real analysis](/courses/course-lucent-analysis/) · [Linear algebra II](/courses/atlas-linear-algebra-standard/).

The earlier mathematical explanations, proofs, assignments and complete solutions remain below with their original task identities. Their first-attempt, comparison and correction requirements still apply when you choose that earlier work. Existing notes and study marks keep their original scope.

A differential expression is not yet an operator: the domain, boundary data,
solution space and norm determine what existence, uniqueness and stability
mean. This advanced course joins boundary problems, Fourier methods, weak
fields, variation and numerical validation. It assumes the selected ODE core
and develops a genuine weak field portfolio. The existing smooth finite-mode
string work remains a classical model; it does not supply Sobolev existence
theory. Full selected study time is unknown. No workload, grade or credit is
inferred from the linked working books' estimates.

## Preparation and the required source sequence

Bring integration, derivatives, integration by parts, norms and inner products,
linear systems and elementary real-analysis proofs. Before invoking fixed
points, read [uniform function spaces](#/item/book-proof-safe-real-analysis?chapter=function-spaces-and-equicontinuity),
§§1–2, and [Banach/Picard](#/item/book-proof-safe-real-analysis?chapter=fixed-points-and-complete-spaces),
§§1–3,8–9. Attempt **ANA-CH20-E003, E011 and E012**, with their complete named
solutions. The ready key is: $(0,1)$ is incomplete for $x\\mapsto x/2$;
with Lipschitz constant 5, vector-field bound 4 and radius 1 require both
$5h<1$ and $4h\\le1$ (for example $h=1/10$). A small contraction factor
alone does not establish a self-map. A uniformly Cauchy path sequence has a
uniform continuous limit, and a closed initial-value ball retains its limit.

If these arguments are unfamiliar, use the [real-analysis prerequisite
diagnostic](#/item/book-proof-safe-real-analysis?section=front%3Aprerequisite-diagnostic-and-repair)
**D1–D4, E1–E2**, each with adjacent answer, and repair quantifiers,
closed spaces, convergence and metrics before relying on them. Review Taylor
remainder and integration by parts in the [numerical-error prerequisite
diagnostic](#/item/book-numerical-mathematics-error-algorithms?section=front%3Aprerequisite-diagnostic-and-repair)
**5–7**, with its Answer/Repair paragraphs. The Fourier step assumes
the standard completeness of the sine basis in $L^2(0,1)$; it is imported with
that norm meaning, not claimed from a few plotted modes.

All following groups are required, in order. Numbers belong to the exact linked
chapter. Every named question has complete adjacent feedback; do not replace it
by a similarly numbered question from another chapter. **Software preparation.** Use Node.js 20.19 or newer, basic JavaScript functions/arrays and JSON, and a terminal running a POSIX shell such as bash or zsh. For JavaScript repair read the [CS core's CS-QUEUE and CS-SYSTEM-A complete references](#/item/course-mathematics-computer-science-standard); they explain the arrays, state and validation used here. The listing has no exports: run it as an entry module. In a learner-owned folder, save the JavaScript fence as \`de-field-reference.mjs\` and the entire canonical JSON fence as \`de-field-input.json\`, both UTF-8 files without fence markers. Open a terminal in that folder; run \`node --version > de-field-node-version.txt\`, then \`node --check de-field-reference.mjs\` (success has no output), then \`node de-field-reference.mjs < de-field-input.json > de-field-output.json 2> de-field-errors.txt\`. The input is one JSON object; successful stdout is one JSON object with \`rows\`, \`neumannBad\`, \`R\`, \`Rbad\`, \`count:7\` and \`total:37\`, and stderr is empty. Retain the input, program, version, output and any failure. If opening a terminal, saving those files or using \`<\`, \`>\` and \`2>\` is unfamiliar, first obtain local setup help and practise those operations, then complete the syntax check and full run; reading a table does not complete this software preparation. No packages are required.

| Group | Required teaching and questions | Complete feedback and repair |
| --- | --- | --- |
| DE-A01: IVP and BVP contracts | [Models, Well-Posedness, and Continuation](#/item/book-differential-equations-verified-dynamics?chapter=models-wellposedness), questions **5. Contraction interval**, **6. Self-map radius**, **8. Domain escape without norm blow-up**; [Boundary Values, Parameters, and Global Continuation](#/item/book-differential-equations-verified-dynamics?chapter=boundary-value-continuation), **Exercises 1–9** | Adjacent Solutions distinguish local/global existence, continuation, resonance, Green-function signs and ill-conditioned shooting |
| DE-A02: variation and boundaries | [Variational Structure and Direct Methods](#/item/book-differential-equations-verified-dynamics?chapter=variational-direct-methods), **4. Free endpoint**, **6. Quadratic energy**, **7. Direct proof of Exercise 6**, **20. Claim repair**; [Boundaries, Modes, and Stationary Paths](#/item/deep-dive-pde-fourier-variational-structure), **Practice 1–4** | Complete keys retain the boundary variation and the difference between stationarity, minimum, uniqueness and existence |
| DE-A03: weak theory | [Elliptic and Parabolic Weak Theory](#/item/book-differential-equations-verified-dynamics?chapter=elliptic-parabolic-weak-theory), §§1–8 and **Exercises 1–20**; the four bridge questions below | Adjacent complete Solutions plus the bridge's complete models; distinguish weak derivatives, traces, compatibility, coercivity, regularity and nonlinear limit passage |
| DE-A04: Fourier and evolution | [PDE Boundaries, Energy, and Fourier Structure](#/item/book-differential-equations-verified-dynamics?chapter=pde-energy-fourier), §§5–11 and **Worked Problems 1–5**; the heat/discrete-energy questions below | Native complete Solutions and the two energy proofs below; a norm limit need not be pointwise or uniform |
| DE-A05: approximation and validation | [Numerical PDE Validation](#/item/book-differential-equations-verified-dynamics?chapter=numerical-pde-validation), **Exercises 1–20**; the full P/C/R field portfolio and bounded reference below | All native complete Solutions, every field model and numerical output's exact comparison; residual, field error and physical validation remain distinct |

The native weak-PDE chapter imports **Lax–Milgram** for a bounded coercive form
on a real Hilbert space. Its parabolic Galerkin existence section is an
architecture, not a supplied compactness proof. General trace/extension and
nonlinear existence results are not established by this route. The bridge
proves the specific norm, point-load and variational facts used below, and the
three fields have direct constructions or complete compatibility arguments.

## Four weak-space bridge questions and complete models

**1. What does a point load mean?** On $(0,1)$ define $H^1$ by $u,u'\\in L^2$,
where $\\int u\\phi'=-\\int u'\\phi$ for every smooth compactly supported test
$\\phi$, with $\\|u\\|_{H^1}^2=\\|u\\|_2^2+\\|u'\\|_2^2$ and the corresponding
real inner product. Explain point evaluation, completeness and boundary traces.

**Model.** In one dimension an $H^1$ class has a unique absolutely continuous
representative after fixing equality almost everywhere. This standard
one-dimensional identification and completeness of $L^2$ are imported here.
They are not properties of arbitrary $L^2$ representatives. The identity
$v(x)=\\int_0^1v(y)dy+\\int_0^1[v(x)-v(y)]dy$ gives
$|v(x)|\\le\\|v\\|_2+\\|v'\\|_2\\le\\sqrt2\\|v\\|_{H^1}$.
Thus point values, including endpoint traces, are bounded functionals on this
representative. If $v_n$ is Cauchy in $H^1$, its functions and derivatives
converge in $L^2$ to $v,g$. Cauchy–Schwarz passes the weak-derivative identity
to the limit for every test function; $g=v'$ and convergence is in $H^1$.
This proves Hilbert completeness from the stated $L^2$ completeness.

**2. Which spaces remove the kernel?** Define
$V_D=\\{v\\in H^1:v(0)=v(1)=0\\}$ and
$V_N=\\{v\\in H^1:\\int_0^1v=0\\}$. Prove their closedness and suitable
Poincaré/coercivity bounds.

**Model.** Kernels of the bounded trace/mean functionals are closed, hence
these are Hilbert subspaces. For $v\\in V_D$,
$|v(x)|^2=|\\int_0^xv'|^2\\le x\\|v'\\|_2^2$; integration gives
$\\|v\\|_2^2\\le\\|v'\\|_2^2/2$. For $v\\in V_N$, the identity in Question 1
gives $|v(x)|\\le\\|v'\\|_2$, so $\\|v\\|_2^2\\le\\|v'\\|_2^2$.
For $a(u,v)=\\int u'v'$, continuity holds with constant 1 in $H^1$, and
$$a(v,v)\\ge\\tfrac23\\|v\\|_{H^1}^2\\quad(V_D),\\qquad
a(v,v)\\ge\\tfrac12\\|v\\|_{H^1}^2\\quad(V_N).$$
Without the boundary or mean restriction, nonzero constants defeat coercivity.
On disconnected domains, Neumann compatibility and gauges are needed on every
component; one global mean condition need not remove all constant modes.

**3. Does energy prove existence?** Apply Lax–Milgram and a direct minimizer
identity to $F_P(v)=v(1/2)$ on $V_D$ and
$F_C(v)=v(1/2)-\\int v$ on $V_N$.

**Model.** On $V_D$, $|F_P(v)|\\le\\|v'\\|_2/\\sqrt2$ by integration from
zero to $1/2$. On $V_N$, $|F_C(v)|=|v(1/2)|\\le\\|v'\\|_2$.
Thus both loads are bounded on their Hilbert spaces and the proved form bounds
meet the imported theorem's hypotheses. There is a unique weak solution in
each space. These are functionals in the appropriate dual space; the Dirac
load is not an $L^2$ function. Once $a(u,v)=F(v)$ is verified directly,
$$J(u+w)-J(u)=\\tfrac12a(w,w),\\qquad J(v)=\\tfrac12a(v,v)-F(v),$$
proves unique global minimization on the chosen space. It constructs no new
general existence theorem. If two data functionals differ by $G$, testing the
difference equation gives $\\|u_1-u_2\\|_{H^1}\\le\\|G\\|_{V^*}/\\alpha$ with
the corresponding coercivity constant $\\alpha$.

**4. What convergence is needed?** Why may weak limits not pass through a
quadratic term? Does Céa's lemma alone establish an $h^p$ rate?

**Model.** In $L^2(0,1)$, $v_n=\\sin(2\\pi nx)$ converges weakly to zero,
while $\\|v_n\\|_2^2=1/2$. Fourier orthogonality/Bessel's inequality makes its
coefficients against every fixed $L^2$ test tend to zero. But
$v_n^2=[1-\\cos(4\\pi nx)]/2$ converges weakly to $1/2$, not zero. This is an
$L^2$ example; its $H^1$ norms are unbounded, so it does not refute a bounded
$H^1$ compactness theorem. For symmetric positive forms, Galerkin
orthogonality gives exact best approximation in the energy norm. Céa in an
$H^1$ norm gives a quasi-optimality factor, not a rate without approximation
and regularity estimates. The field models below derive their actual errors.

## Evolution and discrete-energy questions with full proofs

For two heat solutions with the same fixed load and boundary data, let $w$
be their difference. Derive continuous dependence, and compare backward Euler.

**Continuous model.** For smooth solutions, testing $w_t-w_{xx}=0$ with $w$
and retaining boundary terms gives
$\\tfrac12d\\|w\\|_2^2/dt+\\|w'\\|_2^2=0$ under zero Dirichlet or zero Neumann
flux. In the Dirichlet case the bridge's bound yields
$\\|w(t)\\|_2^2\\le e^{-4t}\\|w(0)\\|_2^2$. In the Neumann case the mean is
preserved; only the mean-zero difference satisfies the bound, giving the
coarse rate $e^{-2t}$. A constant difference does not decay. These nonsharp
rates are proved from our stated inequalities. In the full weak class
$w\\in L^2(0,T;V)$, $w_t\\in L^2(0,T;V^*)$, the duality chain rule and
$L^2$-continuous representative justify this testing; that standard energy
theorem is imported, and the displayed identity is not itself an existence proof.

**Discrete model.** With SPD mass matrix $M$ and positive-semidefinite
stiffness $K$, differences satisfy
$(M+\\Delta tK)E^{n+1}=ME^n$. Taking its product with $2E^{n+1}$ proves
$$\\|E^{n+1}\\|_M^2-\\|E^n\\|_M^2+\\|E^{n+1}-E^n\\|_M^2
+2\\Delta t(E^{n+1})^TKE^{n+1}=0.$$
This proves nonincrease for exact solves and $\\Delta t>0$; an inexact solve
adds a residual-work term. It does not prove accuracy for arbitrarily large
steps. As a concrete explicit-method failure, the periodic alternating mode
at $r=\\Delta t/h^2=3/5$ has multiplier $1-4r=-7/5$, so it grows while heat
damps. The condition $r\\le1/2$ is a sufficient positivity/maximum-norm CFL;
we do not assert it is the sharp spectral threshold on every finite Dirichlet grid.

An exact two-coordinate check uses $M=\\operatorname{diag}(2,1)$,
$K=\\begin{pmatrix}1&-1\\\\-1&1\\end{pmatrix}$, $\\Delta t=1/2$,
$E^0=(1,0)^T$ and $E^1=(6/7,2/7)^T$. The identity's three nonzero terms
are $-22/49$, $6/49$ and $16/49$, summing to zero. These data are retained
in the canonical record so the arithmetic can be checked separately.

## Field portfolio: primary, changed and return questions

All problems use the dimensionless interval $(0,1)$ and the stated real weak
spaces. Keep each case's boundary operator and functional with its solution.
The canonical data also bound the complete reference program below.

\`\`\`json
{
  "family": "DE-ADV-FIELD-v1",
  "point": "1/2",
  "P": {"boundary":"dirichlet","delta":"1","constant":"0","meshes":[3,4,5,9]},
  "C": {"boundary":"neumann","delta":"1","constant":"-1","mean":"0","meshes":[2,4,8],"badConstant":"0"},
  "R": {"boundary":"dirichlet","reactionPiSquared":"1","forcing":[0,1,0],"badForcing":[1,1,0],"gaugeMode":1},
  "energy": {"M":[["2","0"],["0","1"]],"K":[["1","-1"],["-1","1"]],"dt":"1/2","initial":["1","0"],"next":["6/7","2/7"],"energyChange":"-22/49","incrementEnergy":"6/49","dissipation":"16/49","explicitRatio":"3/5","alternatingMultiplier":"-7/5"}
}
\`\`\`

For **P**, solve $-u''=\\delta_{1/2}$ with zero Dirichlet data. The meaning is
$\\int u'v'=v(1/2)$ for every $v\\in V_D$. Construct the solution, prove the
weak identity, uniqueness, variational minimum and stability hypotheses, and
decide whether it is classical. Assemble conforming continuous piecewise-linear
finite elements on the four stated meshes, with exact point loads. Give full
matrix/load/solution for N=3 and N=4, residuals, nodal and uniform field error,
and squared energy-norm error. Explain the difference between aligned and
unaligned meshes rather than inferring an order from exact nodal values.

For **C**, change to $-u''=\\delta_{1/2}-1$ with zero outward derivative and
mean zero. First test the compatibility condition on the full Neumann test
space $H^1$. Show why retaining the unbalanced load $\\delta_{1/2}$ would give
no solution. Construct the balanced field and its minimum, then assemble the
three even meshes with the mean gauge. Give N=2 and N=4 coefficient vectors,
mass-weighted means, residuals and exact errors. Do not let a bordered linear
system silently project an incompatible source into a different problem.

For **R**, return to zero Dirichlet data but change the operator to
$-u''-\\pi^2u$. The compatible forcing is $\\sin(2\\pi x)$; the adverse forcing
adds $\\sin(\\pi x)$. Test the first sine mode, classify **all** weak solutions
or prove nonexistence, and apply the gauge $\\int u\\sin(\\pi x)=0$. Use the
first three sine modes for Galerkin work and state which exact normalization
is used. A finite-element matrix's numerical rank is not a proof that the
continuous operator is or is not resonant.

For each case retain: (1) domain/boundary/space/load contract; (2) preparation
and imported theorem ledger; (3) construction and weak verification; (4)
existence/uniqueness or incompatibility argument; (5) energy/variation and
stability meaning; (6) complete discrete model and reference output with
arithmetic/residual limits; (7) one rejected stronger claim and repair; (8)
first, comparison and revised versions with help/exposure declared.

## Complete primary model: a point load and a missing kink

The field is
$$u_P(x)=\\begin{cases}x/2,&0\\le x\\le1/2,\\\\(1-x)/2,&1/2\\le x\\le1.\\end{cases}$$
It is continuous with square-integrable weak derivative $1/2$ on the left,
$-1/2$ on the right. Splitting the integral shows
$\\int u_P'v'=[v(1/2)-v(0)]/2-[v(1)-v(1/2)]/2=v(1/2)$.
Its derivative jumps by -1: the equation is true weakly/distributionally, not
as an everywhere classical second derivative. The bridge's coercivity gives
uniqueness, and the direct variational identity gives
$\\int|u_P'|^2=1/4$, $J(u_P)=-1/8$. Also $\\int u_P^2=1/48$.

Use nodal hats $\\phi_i$ and $K_{ij}=\\int\\phi_j'\\phi_i'$;
the local stiffness is $N\\begin{pmatrix}1&-1\\\\-1&1\\end{pmatrix}$ and
$F_i=\\phi_i(1/2)$. Eliminate both boundary nodes. Galerkin orthogonality holds
because the exact field satisfies the same test equations. Moreover the
derivative of its nodal interpolant is the cell average of $u_P'$, so its
error is derivative-orthogonal to every piecewise-linear test. Thus
$u_h=I_hu_P$ exactly, with the original zero traces.

| Case | N | Interior load | Interior coefficients U | Residual infinity norm |
| --- | --- | --- | --- | --- |
| P | 3 | 1/2,1/2 | 1/6,1/6 | 0 |
| P | 4 | 0,1,0 | 1/8,1/4,1/8 | 0 |

For N=3, $K=\\begin{pmatrix}6&-3\\\\-3&6\\end{pmatrix}$; for N=4,
$K=\\begin{pmatrix}8&-4&0\\\\-4&8&-4\\\\0&-4&8\\end{pmatrix}$.
Even meshes contain the kink and represent the field exactly. On odd meshes,
the central cell straddles the kink, its interpolant is flat there, and the
missing peak has height $h/4$. All other cells are exact. Direct integration
therefore gives maximum field error $h/4$, squared energy error $h/4$ and
squared $L^2$ error $h^3/48$. **Nodal error is zero** despite nonzero field
error. This is not second-order smooth-solution behavior.

| Case | N | Maximum nodal error | Maximum field error | Squared energy error | Squared L2 error |
| --- | --- | --- | --- | --- | --- |
| P | 3 | 0 | 1/12 | 1/12 | 1/1296 |
| P | 4 | 0 | 0 | 0 | 0 |
| P | 5 | 0 | 1/20 | 1/20 | 1/6000 |
| P | 9 | 0 | 1/36 | 1/36 | 1/34992 |

The energy norm on the odd sequence is $\\sqrt h/2$, and uniform error is
$h/4$. These rates are derived, not inferred from a zero algebraic residual.
The load's limited regularity and mesh alignment explain the changed rates.

## Complete changed model: compatibility before a gauge

For the convention $g=\\partial_nu$, Neumann compatibility is
$F(1)=\\int f+\\int_{\\partial\\Omega}g=0$. Here $g=0$ and
$F(1)=1-1=0$. If the constant term were zero, testing with 1 would give
$0=1$, so no weak solution exists. This is a compatibility theorem, not a
failed numerical solver. A physical outward flux $-u'n$ has the opposite sign
convention and must be translated explicitly.

The balanced solution is
$$u_C(x)=x^2/2-(x-1/2)_+-1/24.$$
Its derivative is $x$ on the left and $x-1$ on the right, with zero outward
derivative at both endpoints. Its mean is $1/6-1/8-1/24=0$. Integration by
parts on the two halves gives $\\int u_C'v'=v(1/2)-\\int v$ for **all**
$v\\in H^1$. Constants are the full kernel: uniqueness holds only after a
gauge such as mean zero. On $V_N$ the proved coercivity and direct construction
agree with imported Lax–Milgram. Here $\\int|u_C'|^2=1/12$ and $J(u_C)=-1/24$.

Retain all N+1 hats. Their stiffness rows sum to zero, and their load is
$F_i=\\phi_i(1/2)-\\int\\phi_i$. Define $m_i=\\int\\phi_i$, with endpoint
weights $h/2$ and interior weights $h$. Reject incompatible loads before
solving the bordered system
$$\\begin{pmatrix}K&m\\\\m^T&0\\end{pmatrix}\\binom{U}{\\gamma}=\\binom{F}{0}.$$
For compatible data, summing the first block gives $\\gamma=0$ because
$\\sum_i m_i=1$. A nonzero multiplier would instead signal projection of an
incompatible load, not a solution of the original Neumann problem.

On aligned even meshes, derivative orthogonality again gives $I_hu_C$ up to
a constant. Its mean is **$h^2/12$**, not zero: on every smooth cell,
$I_hu_C-u_C=t(h-t)/2$ for local coordinate $0\\le t\\le h$.
Hence $u_h=I_hu_C-h^2/12$. Subtracting this constant changes nodal errors and
the mean, while leaving derivative error unchanged.

| Case | N | Full load | Full coefficients U | Integral uh | Multiplier gamma |
| --- | --- | --- | --- | --- | --- |
| C | 2 | -1/4,1/2,-1/4 | -1/16,1/16,-1/16 | 0 | 0 |
| C | 4 | -1/8,-1/4,3/4,-1/4,-1/8 | -3/64,-1/64,5/64,-1/64,-3/64 | 0 | 0 |

For N=2, $K=\\begin{pmatrix}2&-2&0\\\\-2&4&-2\\\\0&-2&2\\end{pmatrix}$,
$m=(1/4,1/2,1/4)^T$. For N=4 use endpoint diagonals 4, interior diagonals 8,
adjacent entries -4 and $m=(1/8,1/4,1/4,1/4,1/8)^T$.
Each original matrix residual is zero. On each cell,
$u_h-u_C=t(h-t)/2-h^2/12$ ranges from $-h^2/12$ to $h^2/24$.
Thus the maximum nodal and field errors are both $h^2/12$;
squared energy error is $h^2/12$ and squared $L^2$ error is $h^4/720$.

| Case | N | Maximum nodal error | Maximum field error | Squared energy error | Squared L2 error |
| --- | --- | --- | --- | --- | --- | --- |
| C | 2 | 1/48 | 1/48 | 1/48 | 1/11520 |
| C | 4 | 1/192 | 1/192 | 1/192 | 1/184320 |
| C | 8 | 1/768 | 1/768 | 1/768 | 1/2949120 |

For an independent piecewise-polynomial witness, the coefficient order below
is constant, x, x². Each polynomial applies on the indicated side of 1/2.
Continuity, derivative jumps, boundary data and exact integration check the
weak functional without evaluating a Dirac mass as an ordinary function.

| Case | Side | Constant coefficient | Linear coefficient | Quadratic coefficient |
| --- | --- | --- | --- | --- |
| P | left | 0 | 1/2 | 0 |
| P | right | 1/2 | -1/2 | 0 |
| C | left | -1/24 | 0 | 1/2 |
| C | right | 11/24 | -1 | 1/2 |

| Case | Exact derivative energy | Exact load applied to u | Minimum J |
| --- | --- | --- | --- |
| P | 1/4 | 1/4 | -1/8 |
| C | 1/12 | 1/12 | -1/24 |

## Complete return model: a resonant operator

Use $a_R(u,v)=\\int u'v'-\\pi^2\\int uv$ on $V_D$. Its value on
$\\phi_1=\\sin(\\pi x)$ is zero, so it is not coercive on the full space.
Testing any weak equation against $\\phi_1$ gives $F(\\phi_1)=0$.
For the adverse forcing $\\sin(\\pi x)+\\sin(2\\pi x)$, orthogonality makes
$F(\\phi_1)=1/2$, so there is **no weak solution**.

For compatible forcing $\\sin(2\\pi x)$,
$$u_R(x)=\\frac{\\sin(2\\pi x)}{3\\pi^2}+c\\sin(\\pi x),\\qquad c\\in\\mathbb R.$$
Substitution/integration by parts verifies every field. To prove these are all
weak solutions, subtract the displayed particular solution and test against
each sine mode. For n≥2, $(n^2-1)\\pi^2\\int w\\sin(n\\pi x)=0$.
Imported $L^2$ sine completeness leaves only the first mode. This argument
does not infer completeness from a finite Galerkin matrix. Orthogonality gauge
$\\int u_R\\sin(\\pi x)=0$ gives c=0. The energy form is semidefinite by the
Dirichlet spectral/Poincaré theorem; it is not positive definite on the full
space. All these solutions have $a_R(u_R,u_R)=1/(6\\pi^2)$ and
$J_R(u_R)=-1/(12\\pi^2)$. With adverse forcing the functional is unbounded
below along the kernel direction. A coercivity theorem cannot be used after
silently discarding that kernel.

For Galerkin work use unnormalized modes $\\sin(n\\pi x)$ with squared norm
1/2. The stiffness is diagonal with entries $(n^2-1)\\pi^2/2$ and the load
is half the Fourier forcing coefficient. Let $z_n=\\pi^2U_n$ to avoid any
floating approximation to π in this finite algebraic check:

| Mode n | Eigenvalue divided by pi^2 | Compatible forcing coefficient | z_n with first-mode gauge | Adverse forcing coefficient |
| --- | --- | --- | --- | --- |
| 1 | 0 | 0 | 0 | 1 |
| 2 | 3 | 1 | 1/3 | 1 |
| 3 | 8 | 0 | 0 | 0 |

The normalized equations are $(n^2-1)z_n=f_n$. The adverse first row is
$0=1$, while the compatible first row needs the gauge. The two-mode compatible
solution is already the exact field here because no omitted mode is forced;
this does not establish a general spectral convergence rate. A piecewise-linear
matrix $K-\\pi^2M$ need not be exactly singular at the continuous resonance.
Its finite precision rank cannot replace the operator/kernel argument.

## Complete bounded reference for the selected software work

Save the following as a JavaScript module and pass the canonical JSON above
on standard input. It assembles and solves P/C finite-element equations,
checks compatibility **before** the C gauge solve, computes residuals and
field/energy errors, and checks the scaled R mode equations. It uses only
Node's standard input/output. This complete reference is public comparison
support; it has not been executed merely because it is printed here.

The ceiling is seven FEM solves, at most ten unknowns per solve and forty
unknowns summed across solves, plus two three-mode compatibility checks.
Only the printed meshes and fixed point/forcing/boundary family are accepted.
The linear algebra uses binary64 partial pivoting, a pivot refusal threshold
$10^{-14}$ and a reported residual target $10^{-12}$. Those are bounded
implementation diagnostics, not outward interval certificates. Mathematical
exactness comes from the rational and symbolic proofs above. Keep actual
stdout, Node version, input and any failure separately if running it.

\`\`\`javascript
import { readFileSync } from 'node:fs';
const data = JSON.parse(readFileSync(0, 'utf8'));
const rational = s => {
  if (typeof s !== 'string' || !/^-?\\d+(\\/\\d+)?$/.test(s)) throw Error('rational input');
  const [p,q='1']=s.split('/'); if (+q===0) throw Error('zero denominator');
  return +p/+q;
};
if (data.family!=='DE-ADV-FIELD-v1' || rational(data.point)!==0.5 ||
    data.P.boundary!=='dirichlet' || data.C.boundary!=='neumann' ||
    data.R.boundary!=='dirichlet' || rational(data.P.delta)!==1 ||
    rational(data.C.delta)!==1 || rational(data.P.constant)!==0 ||
    rational(data.C.constant)!==-1 || rational(data.C.mean)!==0 ||
    rational(data.C.badConstant)!==0 || rational(data.R.reactionPiSquared)!==1 ||
    data.R.gaugeMode!==1 || JSON.stringify(data.P.meshes)!=='[3,4,5,9]' ||
    JSON.stringify(data.C.meshes)!=='[2,4,8]' ||
    JSON.stringify(data.R.forcing)!=='[0,1,0]' ||
    JSON.stringify(data.R.badForcing)!=='[1,1,0]') throw Error('unsupported family');
let count=0, total=0;
function solve(A,b) {
  const n=A.length; if (++count>7 || n>10 || (total+=n)>40) throw Error('budget');
  const t=A.map((r,i)=>[...r,b[i]]);
  for(let k=0;k<n;k++) {
    let p=k; for(let i=k+1;i<n;i++) if(Math.abs(t[i][k])>Math.abs(t[p][k])) p=i;
    if(Math.abs(t[p][k])<1e-14) throw Error('pivot refusal');
    [t[k],t[p]]=[t[p],t[k]];
    for(let i=k+1;i<n;i++) { const q=t[i][k]/t[k][k];
      for(let j=k;j<=n;j++) t[i][j]-=q*t[k][j]; }
  }
  const x=Array(n).fill(0);
  for(let i=n-1;i>=0;i--) { let s=t[i][n];
    for(let j=i+1;j<n;j++) s-=t[i][j]*x[j]; x[i]=s/t[i][i]; }
  return x;
}
const exact=(which,x)=>which==='P'?Math.min(x,1-x)/2:x*x/2-Math.max(0,x-0.5)-1/24;
const hat=(i,N,x)=>Math.max(0,1-Math.abs(N*x-i));
const maxabs=v=>Math.max(0,...v.map(Math.abs));
function run(which,N) {
  const h=1/N, K=Array.from({length:N+1},()=>Array(N+1).fill(0));
  for(let e=0;e<N;e++) { K[e][e]+=N; K[e+1][e+1]+=N; K[e][e+1]-=N; K[e+1][e]-=N; }
  const mass=Array.from({length:N+1},(_,i)=>(i===0||i===N)?h/2:h);
  const load=mass.map((m,i)=>hat(i,N,0.5)+(which==='C'?-m:0));
  let U, gamma=0;
  if(which==='P') {
    const z=solve(K.slice(1,-1).map(r=>r.slice(1,-1)),load.slice(1,-1)); U=[0,...z,0];
  } else {
    if(Math.abs(load.reduce((s,x)=>s+x,0))>1e-12) throw Error('incompatible Neumann load');
    const A=K.map((r,i)=>[...r,mass[i]]); A.push([...mass,0]);
    const z=solve(A,[...load,0]); gamma=z.pop(); U=z;
  }
  const residual=maxabs(K.map((r,i)=>r.reduce((s,a,j)=>s+a*U[j],0)-load[i]).filter((_,i)=>which==='C'||(i>0&&i<N)));
  const mean=U.reduce((s,u,i)=>s+u*mass[i],0);
  let field=0, energy=0;
  for(let e=0;e<N;e++) {
    const a=e*h,b=(e+1)*h,slope=(U[e+1]-U[e])/h;
    const cuts=[a,...(a<0.5&&0.5<b?[0.5]:[]),b];
    for(let j=0;j+1<cuts.length;j++) {
      const l=cuts[j],r=cuts[j+1],left=(l+r)/2<0.5;
      const m=which==='P'?0:1, c=which==='P'?(left?0.5:-0.5):(left?0:-1);
      const d=c-slope;
      energy+=m*m*(r*r*r-l*l*l)/3+m*d*(r*r-l*l)+d*d*(r-l);
      const candidates=[l,r]; if(m!==0) { const critical=(slope-c)/m;
        if(l<critical&&critical<r) candidates.push(critical); }
      for(const x of candidates) field=Math.max(field,Math.abs(U[e]+slope*(x-a)-exact(which,x)));
    }
  }
  if(residual>1e-12 || (which==='C'&&(Math.abs(mean)>1e-12||Math.abs(gamma)>1e-12))) throw Error('residual/gauge check');
  return {case:which,N,U,load,residual,mean,gamma,nodal:maxabs(U.map((u,i)=>u-exact(which,i*h))),field,energySq:energy};
}
const rows=[...data.P.meshes.map(N=>run('P',N)),...data.C.meshes.map(N=>run('C',N))];
const neumannBad={status:1+rational(data.C.badConstant)===0?'compatible':'incompatible',balance:1+rational(data.C.badConstant)};
function spectral(f) {
  if(f[0]!==0) return {status:'incompatible',normalizedFirstModeDefect:f[0]};
  return {status:'gauge-fixed',z:f.map((a,i)=>i===0?0:a/((i+1)**2-1))};
}
console.log(JSON.stringify({rows,neumannBad,R:spectral(data.R.forcing),Rbad:spectral(data.R.badForcing),count,total}));
\`\`\`

The error integral splits every cell at the point load and integrates the
piecewise polynomial derivative error. Field maxima include endpoints, the
kink and interior critical points. Keep this diagnostic's actual residual;
do not change it to zero because the exact public table has zero residuals.
Its compatibility check prevents a gauge multiplier from concealing wrong
data. Replaying it tests a finite implementation, not every mesh or PDE.

## Claim matrix, repair and retained work

| Claim | Required witness/check | Result and limit |
| --- | --- | --- |
| Weak primary existence/uniqueness | Tent construction, split integration, bounded point functional, proved coercivity | One solution in V_D; not C1 and not an L2 body-force problem |
| Changed compatibility and gauge | Test 1 before solving; exact balanced field; zero weighted mean | Balanced C has one mean-zero solution; unbalanced C has none |
| Resonant return | First-mode test, full sine coefficients and gauge | Compatible R has a one-dimensional family; gauge selects one; adverse R has none |
| Variational conclusion | J(u+w)-J(u)=a(w,w)/2 with the actual space | P/C unique minima; R retains a kernel and cannot inherit their coercivity |
| Numerical approximation | Correct load/stiffness, exact tables and field/energy comparisons | P nodal exactness does not erase its kink error; C requires its constant gauge shift |
| Implementation evidence | Actual reference stdout, original residual, compatibility and gauge checks | Seven bounded binary64 solves are finite verification evidence, not interval proof or physical validation |

Model/boundary/space inputs feed weak verification and compatibility; those
feed uniqueness/variation with the stated theorem hypotheses. Mesh, basis,
load integration, constraints and arithmetic feed numerical claims separately.
Use the native completed solutions to repair the first unsupported step.
Missing traces, a discarded boundary term, a projected incompatible load,
undeclared norm, wrong gauge or stationary-but-noncoercive functional must be
repaired before treating the portfolio as complete.

Keep dated external **first**, **comparison** and **revised** files for every
source group and each P/C/R field. Retain the original attempt, source version,
public models/help already seen, exact failed claim, support used and corrected
argument. Keep actual program input/output/version with the software response.
A mutable note, reading mark or current export does not automatically preserve
these worksheets. These are not new registered writing tasks or learner grades.
R is a later public reconstruction without verified delay or unseen-work claims.
The route does not release whole working books, prove general nonlinear weak
existence/regularity or complete every PDE, stochastic/delay or specialist route.
`;export{e as default};