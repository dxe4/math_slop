var e=`---
id: course-differential-equations-specialist
title: "Weak Evolution, Randomness, and Memory"
level: graduate
estimated_minutes: null
license: CC BY-SA 4.0
---

# Weak Evolution, Randomness, and Memory

<!-- euler-course-route -->

## Current course route

This is an Outline seminar in a selected theme. Use its [course page](/courses/atlas-differential-equations-specialist/) for the preparation courses, then attempt the mathematical investigations below. A general graduate chapter syllabus has not yet been assigned.

Preparation courses: [Boundary Problems, Weak Fields, and Verified Approximation](/courses/atlas-differential-equations-advanced/) · [Measure and integration](/courses/course-measure-integration/).

The earlier mathematical explanations, proofs, assignments and complete solutions remain below with their original task identities. Their first-attempt, comparison and correction requirements still apply when you choose that earlier work. Existing notes and study marks keep their original scope.

An evolving system may live in a function space, depend on a random driving process, or remember a whole history. Those changes alter its state, solution concept and theorem. This specialist course develops distribution and Sobolev analysis, complete selected nonlinear elliptic and parabolic existence proofs, invariant dynamics, stochastic equations and delay equations. The required investigations connect these strands without identifying a finite computation with a general existence or ergodic theorem. Study time depends on the selected reading, attempts and corrections.

## Preparation and ordered repairs

Complete [Boundary Problems, Weak Fields, and Verified Approximation](#/item/course-differential-equations-advanced) first. Its point-load, compatibility and resonance models are preparation; this course adds general nonlinear arguments and different investigations. Bring measure integration, conditional expectation, Hilbert spaces, weak convergence and elementary ODE theory. Do the following repairs in order, keeping an attempted answer and comparison for each.

1. In the [dynamics prerequisite diagnostic](#/item/book-differential-equations-verified-dynamics?section=front%3Aprerequisite-diagnostic-and-repair), answer **9–12,14,16–20**, each with its adjacent Answer and Repair route. Before the weak proofs, explain completeness, weak derivatives and integration by parts; before statistics, name the measure and covariance terms. The native refinement key is ratio four and suggested order two, conditional on the asymptotic regime.
2. Read [uniform function spaces](#/item/book-proof-safe-real-analysis?chapter=function-spaces-and-equicontinuity), §§1–2,5–9, and attempt **ANA-CH09-E005, E006, E008, E013, E014, E017, E018**, using their complete named solutions. A uniformly bounded family with a shared modulus on a compact interval has a uniformly convergent subsequence; boundedness alone does not. These are the compactness tools used below.
3. Read [Measure and Lebesgue Integration](#/item/course-measure-lebesgue-integration), Modules 3–5; attempt **Exercises 3,4,5,7,8**, with complete worked answers. Repair almost-everywhere equality, Fatou, dominated convergence and product integration before taking limits in energies or expectations.
4. In the [stochastic prerequisite diagnostic](#/item/book-stochastic-processes-paths?section=front%3Aprerequisite-diagnostic), answer **Questions 1–6**, comparing the complete answers. In particular decreasing expectations need an integrable upper bound, and conditional expectation uses the tower property. Read [Martingales and Stopping](#/item/book-stochastic-processes-paths?chapter=martingales-and-stopping), the definitions and **Exercises 2–3** with their complete inline solutions, before Brownian/Itô work. Nonnegative martingale convergence is almost sure; it does not automatically preserve expectations.
5. Software repair is required before the reference run. Use Node.js 20.19 or later, JavaScript arrays/functions, UTF-8 files, JSON and a terminal. The [CS core's complete queue/system references](#/item/course-mathematics-computer-science-standard) explain array state and validation. Save the sole JavaScript fence below as \`weak-evolution-reference.mjs\`, and the sole JSON fence as \`weak-evolution-input.json\`, without fence markers, in a learner-owned folder. Run \`node --version > node-version.txt\`, \`node --check weak-evolution-reference.mjs\`, then \`node weak-evolution-reference.mjs < weak-evolution-input.json > weak-evolution-output.json 2> weak-evolution-errors.txt\`. Syntax success has no output; run success has one JSON object on stdout and empty stderr. Retain actual input, program, version, output and failures. If these terminal/file operations are unfamiliar, practise them with local setup help before doing the required run. Reading the public table does not complete this assignment. No packages are required.

Hilbert-space weak subsequence compactness, weak lower semicontinuity of its norm, completeness of Lebesgue spaces, density of smooth tests, and completeness of the Dirichlet sine basis in both $L^2$ and $H_0^1$ are imported foundational results. State where each is used. The proofs below supply the additional selected nonlinear compactness and limit passage. They do not prove a general trace, extension, stochastic-PDE or arbitrary-dimensional regularity theory.

## Required native selections and complete feedback

Work these groups in order alongside the corresponding new sections. Question numbers belong to the linked chapter; each selection has its actual complete adjacent solution. Repeated preparation is a hypothesis audit, not an extra whole-book assignment.

| Group | Required source and exact work | Feedback and repair target |
| --- | --- | --- |
| WE-S01 | [Elliptic and Parabolic Weak Theory](#/item/book-differential-equations-verified-dynamics?chapter=elliptic-parabolic-weak-theory), §§1–8, **Exercises 1–20** | All twenty complete Solutions; distinguish a point mass from an L2 load, compatibility from a gauge, and energy estimates from existence |
| WE-S02 | [Variational and Direct Methods](#/item/book-differential-equations-verified-dynamics?chapter=variational-direct-methods), §§3–6, **Exercises 10–14,16,19–20** | Complete Solutions; check coercivity, closure, lower semicontinuity, stationarity and constraints separately |
| WE-S03 | [Chaos, Ergodicity, and the Logic of Long-Time Evidence](#/item/deep-dive-chaos-ergodicity-long-time), §§1–15, **Practice 1–5**; [Chaos, Symbolic Dynamics, and Entropy](#/item/book-differential-equations-verified-dynamics?chapter=chaos-symbolic-entropy), §§1–8, **Exercises 1–7,11–20** | Complete native keys; retain the actual invariant set/measure and distinguish conjugacy, exponent, entropy and mixing claims |
| WE-S04 | [Invariant Measures, Ergodic Theorems, and Dynamic Statistics](#/item/book-differential-equations-verified-dynamics?chapter=ergodic-theorems-statistics), §§1–8, **Exercises 1–20** | All complete native Solutions. Specialize **Project 19** to the exact finite counter-audit below, including its full output: multiple starts, N/2N/4N, running/block means, covariances, two batch lengths, exact-arithmetic control, invariant comparison and refusal of an inapplicable CLT |
| WE-S05 | [Brownian Motion](#/item/book-stochastic-processes-paths?chapter=brownian-motion), complete chapter and **Exercises 1–3**; [Stochastic Integration Orientation](#/item/book-stochastic-processes-paths?chapter=stochastic-integration-orientation), complete chapter and **Exercises 1–3** | All six complete inline keys; keep the two different cubic martingales distinct, use predictable integrands, and retain the Itô correction |
| WE-S06 | All questions in the new theory and the P/C/R portfolios below, including the complete bounded reference and failure controls | Complete public models below; compare only after a dated first attempt and retain every repair |

The long-time source supplies Birkhoff, Oseledets, ergodic decomposition and entropy theorems with their stated hypotheses. They remain imported, not proved by the finite reference. The models-to-long-time path (\`differential-equations-models-to-long-time\`) remains orientation. This required route supplies actual new teaching for the specialist cell's distribution/Sobolev, nonlinear-existence and stochastic/delay gaps.

## Distributions, Sobolev regularity and compactness

**WE-T01. Why is a point load a derivative?** A distribution on an open interval is a linear functional on smooth compactly supported tests, continuous when tests have a common compact support and every derivative converges uniformly. A locally integrable $u$ defines $T_u(\\phi)=\\int u\\phi$. Define $DT(\\phi)=-T(\\phi')$ and $\\delta_c(\\phi)=\\phi(c)$. The sign is forced by integration by parts. Split at a jump: if a piecewise $C^1$ function has jump $[u]_c$, then $Du=u'_{\\rm pieces}+[u]_c\\delta_c$. In particular $D|x|=\\operatorname{sign}(x)$ and $D^2|x|=2\\delta_0$. Equality of distributions is equality on every test, not agreement at sample points.

**Complete model.** To prove a locally integrable function with zero distribution is zero almost everywhere, convolve locally with compactly supported smooth approximate identities. All convolutions vanish by the test identity and converge locally in $L^1$ to the function. This uses the imported approximate-identity theorem for Lebesgue functions. Thus weak derivatives, when represented by functions, are unique almost everywhere. A distribution with zero derivative is constant: fix a test $\\rho$ with integral one. Every test $\\phi$ of integral zero is the derivative of a compactly supported smooth primitive, so $T(\\phi)=0$; subtract $(\\int\\phi)\\rho$ to obtain $T(\\phi)=C\\int\\phi$ for every test.

**WE-T02. Construct the continuous representative and Hilbert space.** Put $H^1=\\{u\\in L^2:Du\\in L^2\\}$ on $(0,1)$, and $V=H_0^1=\\{u\\in H^1:u(0)=u(1)=0\\}$. Show these statements actually have meaning.

**Complete model.** If $g=Du$, the absolutely continuous function $G(x)=\\int_0^xg(s)ds$ has weak derivative $g$. The preceding zero-derivative argument gives $u=G+C$ almost everywhere. This supplies its unique continuous representative and bounded endpoint traces. Also
$$|u(x)-u(y)|\\le\\|u'\\|_2|x-y|^{1/2},\\qquad
\\|u\\|_\\infty\\le\\|u\\|_2+\\|u'\\|_2.$$
For the second inequality subtract the mean and integrate $u(x)-u(y)$ over $y$. If $u_n$ is Cauchy in $H^1$, its functions and derivatives converge in $L^2$ to $u,g$; Cauchy–Schwarz passes $\\int u_n\\phi'=-\\int u_n'\\phi$ to the limit. Thus $g=Du$ and convergence is in $H^1$. The inner product $\\int uv+u'v'$ makes it Hilbert. Trace kernels are closed, so $V$ is Hilbert. On $V$,
$$\\|u\\|_2^2\\le\\tfrac12\\|u'\\|_2^2,\\quad \\|u\\|_\\infty\\le\\|u'\\|_2,\\quad
\\|u\\|_\\infty^2\\le2\\|u\\|_2\\|u'\\|_2.$$
The first follows from $|u(x)|^2\\le x\\|u'\\|_2^2$; the last from $u(x)^2=2\\int_0^x uu'$. These are convenient nonsharp constants. A bounded $H^1$ sequence has a uniform bound and shared one-half Hölder modulus. Arzelà–Ascoli gives a uniformly convergent subsequence on $[0,1]$, hence strongly in every finite $L^p$. Weak $H^1$ convergence alone would not justify cubing; this compactness does.

**WE-T03. Which additional derivative is legitimate? Complete model.** If $u\\in H^1$ and $-D^2u=g\\in L^2$, then $D(u'+\\int_0^xg)=0$ distributionally. Hence $u'=C-\\int_0^xg\\in H^1$, so $u\\in H^2$. This is one-dimensional interval regularity with the actual $L^2$ load. A tent has a nonzero derivative jump, and its second derivative contains a point mass; it is $H^1$ but not $H^2$. No corner-domain, rough-coefficient or higher-dimensional regularity conclusion follows from this argument.

## A complete nonlinear stationary existence theorem

**WE-T04.** For every real $F\\in V^*=H^{-1}(0,1)$ there is exactly one $u\\in V$ satisfying
$$\\int u'v'+u^3v=F(v)\\quad(v\\in V).$$
Here the dual norm uses $\\|v'\\|_2$, equivalent to the $H^1$ norm on $V$. Prove existence, uniqueness, stability and the claimed regularity, rather than treating a formal Euler equation as a solution.

**Complete proof.** Minimize
$$J(v)=\\tfrac12\\|v'\\|_2^2+\\tfrac14\\int v^4-F(v).$$
It is well defined by the proved $H^1$ embedding. Young gives $J(v)\\ge\\tfrac14\\|v'\\|_2^2-\\|F\\|_{V^*}^2$, so a minimizing sequence is bounded and the infimum finite. Weak Hilbert compactness gives a subsequence weak in $V$; its uniformly convergent further subsequence has the same weak limit. The fourth-power integral converges, $F$ is weakly continuous, and the derivative norm is weakly lower semicontinuous. The limit attains the infimum. The closed space $V$ retains zero traces. Differentiating $J(u+tv)$ is justified by bounded representatives and polynomial expansion; its derivative at zero gives the weak equation for every $v\\in V$.

For two solutions with loads $F,G$, test their difference with $w=u-z$. Since $(r^3-s^3)(r-s)\\ge0$,
$$\\|w'\\|_2^2\\le(F-G)(w)\\le\\|F-G\\|_{V^*}\\|w'\\|_2.$$
Thus uniqueness and $\\|w'\\|_2\\le\\|F-G\\|_{V^*}$ follow. Strict convexity of the gradient term proves unique minimization as well. If $F(v)=\\int fv$ with $f\\in L^2$, boundedness of $u$ gives $u^3-f\\in L^2$, so WE-T03 proves $u\\in H^2\\cap V$. For a point load plus an $L^2$ term the theorem still gives weak existence but this regularity step fails. Neither local Lipschitz ODE theory nor linear Lax–Milgram supplies this nonlinear theorem by itself. Replacing $+u^3$ by $-u^3$ removes the monotonicity and coercive quartic term; this proof no longer applies.

## A complete selected nonlinear weak evolution

**WE-T05.** Let $f\\in L^2(0,1)$ be independent of time and $u_0\\in V$. For every finite $T$ there is a unique real solution
$$u\\in L^\\infty(0,T;V)\\cap H^1(0,T;L^2),\\qquad
(u_t,v)+(u',v')+(u^3,v)=(f,v),$$
for almost every time and every $v\\in V$, with $u(0)=u_0$. Construct it fully. This is a selected one-dimensional defocusing cubic theorem, not general nonlinear weak PDE existence.

**Complete construction.** Write $e_k=\\sqrt2\\sin(k\\pi x)$, $E_N=\\operatorname{span}(e_1,\\ldots,e_N)$ and $P_N$ the $L^2$ projection. Solve the finite polynomial ODE
$$(\\dot u_N,v)+(u_N',v')+(u_N^3,v)=(f,v),\\quad v\\in E_N,\\quad u_N(0)=P_Nu_0.$$
Its vector field is locally Lipschitz. Sine density in $V$ gives $P_Nu_0\\to u_0$ in $H^1$ and $\\|(P_Nu_0)'\\|_2\\le\\|u_0'\\|_2$. The embedding then bounds their fourth-power integrals and initial energies uniformly. With $J(v)=\\|v'\\|_2^2/2+\\int v^4/4-(f,v)$, testing with $\\dot u_N$ gives
$$J(u_N(t))+\\int_0^t\\|\\dot u_N\\|_2^2=J(P_Nu_0).$$
Poincaré and Young give $J(v)\\ge\\|v'\\|_2^2/4-\\|f\\|_2^2/2$. Thus $\\sup_t\\|u_N'\\|_2\\le C$ and $\\int_0^T\\|\\dot u_N\\|_2^2\\le C$, uniformly in $N$. In each fixed finite space these bounds prevent finite-time norm escape, so its ODE continues to all finite times. This proves existence of the approximations before using compactness.

For spatial points, $|u_N(t,x)-u_N(t,y)|\\le C|x-y|^{1/2}$. For times $s,t$, Cauchy–Schwarz gives $\\|u_N(t)-u_N(s)\\|_2\\le C|t-s|^{1/2}$. Applying WE-T02's last inequality to the difference, whose derivative norm is at most $2C$, gives
$$\\|u_N(t)-u_N(s)\\|_\\infty\\le C_1|t-s|^{1/4}.$$
These bounds and the uniform sup bound give joint equicontinuity on $[0,T]\\times[0,1]$. Arzelà–Ascoli supplies a uniformly convergent subsequence $u_N\\to u$. Weak subsequences of $u_N'$ and $\\dot u_N$ in space-time $L^2$ exist. Integration against compact smooth tests identifies them as $u'$ and $u_t$. Lower semicontinuity on each time-space subinterval, or the weak-star bound in $L^\\infty(0,T;V)$, retains the stated norms. Uniform convergence makes $u_N^3\\to u^3$ uniformly. For a fixed sine test $e_j$ and smooth time test, the projected weak equation holds for every $N\\ge j$; pass each term to the limit. Finite sine sums are dense in $V$, and all terms are bounded functionals there, so the equality holds for every $v\\in V$ for almost every time. A countable dense set selects one common exceptional null set. Uniform convergence and $P_Nu_0\\to u_0$ uniformly give initial attainment and zero endpoint traces. For each fixed time t, the same uniform H1 bound lets us extract a weak subsequence of u_N(t) in V; uniform convergence identifies its limit with u(t). Thus u(t) belongs to V at every time, permitting restart there, without asserting H1 continuity in time. This identifies an actual weak solution; energy bounds alone would not.

For $w\\in H^1(0,T;L^2)$ the Hilbert identity $\\frac d{dt}\\|w\\|_2^2=2(w_t,w)$ holds almost everywhere: approximate in time by smooth convolutions, use the classical identity, and pass its integrated form using $L^2$ convergence of functions and derivatives. Such functions have an $L^2$-continuous representative. Apply it to the difference of two solutions and use monotonicity:
$$\\tfrac12\\tfrac d{dt}\\|w\\|_2^2+\\|w'\\|_2^2\\le0,\\qquad
\\|w(t)\\|_2^2\\le e^{-4t}\\|w(0)\\|_2^2.$$
Uniqueness makes constructions on overlapping finite intervals agree, giving one global solution and whole-sequence convergence. Autonomous evolution and uniqueness give a continuous contracting semigroup on its stated $V$ initial states, measured in $L^2$. The stationary WE-T04 solution for the same $L^2$ load is in $V$ and is a constant-in-time solution. Consequently every such trajectory converges to it in $L^2$ at this proved rate. This is a real long-time conclusion from dissipativity, without claiming chaos or mixing. The theorem has not covered time-dependent rough loads, arbitrary $L^2$ initial data, focusing nonlinearities, higher dimensions or stochastic forcing.

## Invariant dynamics and the mean ergodic proof

**WE-T06.** Let $T$ preserve a probability $\\mu$. On real or complex $L^2(\\mu)$ let $Ug=g\\circ T$; it is an isometry, possibly not onto. Prove convergence of $A_N=N^{-1}\\sum_{k<N}U^k$ in $L^2$ without assuming $T$ invertible.

**Complete proof.** Set $M=\\ker(I-U)$. The orthogonal complement of $\\overline{\\operatorname{ran}(I-U)}$ is $\\ker(I-U^*)$. For an isometry these fixed spaces agree: if $U^*g=g$, then $\\|Ug-g\\|^2=2\\|g\\|^2-2\\operatorname{Re}(Ug,g)=0$; conversely $Ug=g$ implies $U^*g=U^*Ug=g$. Hence
$$L^2=M\\oplus\\overline{\\operatorname{ran}(I-U)}.$$
On $M$, $A_Ng=g$. On $(I-U)h$, telescoping gives $A_N(I-U)h=(h-U^Nh)/N\\to0$. Since $\\|A_N\\|\\le1$, approximation extends this to the closed range. Thus $A_Ng$ tends to the orthogonal projection onto invariant functions. This is norm convergence, not convergence at every start and not a finite-time rate on arbitrary $g$. Under ergodicity the invariant functions are constants: their level sets are invariant, so a nonconstant invariant real function would give an invariant set of intermediate measure; apply real and imaginary parts in the complex case.

For irrational circle rotation, invariance of a square-integrable function forces its nonzero Fourier coefficients to vanish because $e^{2\\pi ik\\theta}\\ne1$ for $k\\ne0$. Fourier completeness gives ergodicity. But the first complex Fourier observable has correlation of magnitude one at every lag, so there is no mixing. For the fair two-sided Bernoulli shift, cylinder events separated by a sufficiently large shift depend on disjoint coordinates and factor exactly. Approximate measurable sets in measure by finite unions of cylinders; the error in the mixing identity is bounded by the approximation errors, so the factorization limit extends to all sets. These are different mechanisms.

For recurrence with a general measure-preserving map, let $W\\subset A$ consist of points never returning to $A$ at a positive time. The inverse images $T^{-n}W$ are pairwise disjoint: membership in two would produce a future visit to $W\\subset A$ from a point of $W$. They have equal measure by preservation, so finite total measure forces $\\mu(W)=0$. Points of $A$ with finitely many future visits eventually land in $W$; their set is contained in $\\bigcup_{n\\ge0}T^{-n}W$ and is null. Forward images need not preserve measure for a noninvertible map. Birkhoff's pointwise theorem remains imported with $g\\in L^1$ and almost-everywhere quantifiers. Oseledets needs logarithmic integrability; a CLT needs its own dependence/moment conditions. No finite cycle computation proves those results.

## Strong stochastic equations and an exact moment audit

**WE-T07. Construction.** Fix a complete probability space with a usual (complete, right-continuous) filtration and a Brownian motion whose future increments are independent of the current filtration. Let $X_0\\in L^2$ be $\\mathcal F_0$-measurable. Let deterministic $b,\\sigma:\\mathbb R\\to\\mathbb R$ be globally Lipschitz with constant $L$. There is a unique adapted continuous strong solution of
$$X_t=X_0+\\int_0^t b(X_s)ds+\\int_0^t\\sigma(X_s)dB_s$$
on every bounded interval, with $\\mathbb E\\sup_{t\\le T}|X_t|^2<\\infty$. Strong here means constructed with this given Brownian motion and initial variable; it does not mean differentiable sample paths.

**Complete proof relative to the named martingale tools.** The native simple predictable isometry extends the integral by density and $L^2$ completeness to predictable square-integrable integrands. The imported continuous martingale version and **Doob's L2 maximal inequality** say $\\mathbb E\\sup_{t\\le h}|M_t|^2\\le4\\mathbb E|M_h|^2$ for a square-integrable martingale starting at zero. They also identify a continuous modification of the Itô integral. Work in $S^2_h$, adapted continuous processes modulo indistinguishability with norm squared $\\mathbb E\\sup_{t\\le h}|X_t|^2$. It is complete: choose from a Cauchy sequence a subsequence with summable expected sup differences, giving almost-sure uniform convergence and an adapted continuous limit; the full Cauchy property gives convergence in the norm. Continuous adapted processes are predictable.

The integral right-hand side maps $S^2_h$ to itself by linear growth of $b,\\sigma$, deterministic Cauchy–Schwarz, isometry and Doob. For two inputs its squared-norm difference is at most
$$L^2(2h^2+8h)\\|X-Y\\|_{S^2_h}^2.$$
Choose $h\\le[20(1+L^2)]^{-1}$, so this factor is strictly below one. Banach's theorem gives a fixed point and uniqueness on that interval. At its end the value is square-integrable and adapted; repeat with Brownian increments and that initial value. Finitely many intervals cover any bounded $T$. This establishes existence and pathwise uniqueness in the stated class, not a general weak-solution or explosion theorem for non-Lipschitz coefficients. Banach completeness, Brownian construction, predictable density and Doob are declared dependencies, not consequences of a random-looking table.

**WE-T08. Ornstein–Uhlenbeck model.** For $dX=-aXdt+\\sqrt q\\,dB$, $a>0$, $q\\ge0$, with independent Gaussian initial value of mean $m_0$ and variance $v_0$, the integrating factor gives
$$X_t=e^{-at}X_0+\\sqrt q\\int_0^te^{-a(t-s)}dB_s,$$
$$m(t)=e^{-at}m_0,\\quad v(t)=e^{-2at}v_0+\\frac q{2a}(1-e^{-2at}).$$
Gaussianity of the deterministic-integrand integral follows by its Gaussian simple approximations and $L^2$ convergence. The Gaussian $N(0,q/(2a))$ is invariant. Coupling two solutions with the same Brownian path gives difference $e^{-at}(X_0-Y_0)$; this proves contraction and uniqueness of the invariant law among laws with finite second moment. From stationary covariance $\\frac q{2a}e^{-a|s-t|}$, the variance of $T^{-1}\\int_0^TX_sds$ equals
$$\\frac{q}{aT^2}\\left(\\frac T a-\\frac{1-e^{-aT}}{a^2}\\right)\\longrightarrow0.$$
This proves an $L^2$ time-average conclusion for this observable, not a universal almost-sure theorem or CLT. A mean-zero variance alone is not a certificate that a chosen finite sample has equilibrated.

Euler–Maruyama with independent mean-zero increments of variance $h$ has exact **discrete** moment recurrences
$$m_{n+1}=r m_n,\\quad v_{n+1}=r^2v_n+qh,\\quad r=1-ah.$$
If $|r|<1$, its invariant variance is $q/(2a-a^2h)$, which generally differs from the SDE's. At $h=2/a$, nonzero noise makes variance grow; there is no finite invariant variance. These are moment computations, not simulated Brownian observations. A separate finite sign-increment enumeration below illustrates predictability: left sums have mean zero, right sums have mean $T$, and their difference is the fixed quadratic variation. Sign walks at one mesh are not Brownian paths.

## Delay states, existence and a stability proof

**WE-T09.** For $\\tau>0$, continuous history $\\phi:[-\\tau,0]\\to\\mathbb R$ and globally Lipschitz $G:\\mathbb R^2\\to\\mathbb R$, solve $x'(t)=G(x(t),x(t-\\tau))$, $x|_{[-\\tau,0]}=\\phi$. On the first interval the delayed input is the known continuous history. Picard's ODE theorem with continuous time dependence and globally Lipschitz current state gives a unique solution; linear growth prevents escape on that bounded interval. On each next interval the delayed input is the already constructed previous piece. Induction gives a unique global continuous solution, differentiable for $t>0$ with a right derivative at zero. History/current derivatives need not match at zero. This method-of-steps theorem is for the stated finite discrete delay, not a proof for an arbitrary history functional. The state is $x_t(\\theta)=x(t+\\theta)$ in $C([-\\tau,0])$; equal present values with different histories can have different derivatives and futures.

For $x'=-ax+bx(t-\\tau)$, $a>|b|$, prove exponential decay. The upper right Dini derivative satisfies
$$D^+|x(t)|\\le-a|x(t)|+|b|\\sup_{t-\\tau\\le s\\le t}|x(s)|.$$
For $0<\\lambda$ with $\\lambda+|b|e^{\\lambda\\tau}<a$, choose $M=\\sup_{-\\tau\\le s\\le0}e^{\\lambda s}|\\phi(s)|$. The strict barrier $(M+\\epsilon)e^{-\\lambda t}$ dominates the history. At a first contact its Dini derivative would be at most $(-a+|b|e^{\\lambda\\tau})$ times the barrier, strictly below the barrier's derivative $-\\lambda$ times itself, which prevents upward crossing. Equivalently apply this argument to the first positive maximum of $e^{\\lambda t}|x(t)|$ on a truncated interval. Let $\\epsilon\\downarrow0$ to obtain $|x(t)|\\le Me^{-\\lambda t}$. The continuous strictly increasing function $\\lambda+|b|e^{\\lambda\\tau}$ starts below $a$, so there is a unique positive equality root (for $b=0$, root $a$); taking increasing strict rates also gives the root-rate bound. The result is sufficient and delay-dependent. It does not classify all characteristic roots or prove instability when the sufficient inequality fails.

**WE-T10. Complete two-interval model.** In every portfolio take $\\tau=a=1$, $b=ce^{-1}$ and history $\\phi(s)=He^{-s}$. Put $y=e^t x$. Then $y'=cy(t-1)$ and its history is constant $H$. Thus
$$y(t)=H(1+ct),\\ 0\\le t\\le1;\\qquad
 y(t)=H\\left[1+ct+\\tfrac{c^2}{2}(t-1)^2\\right],\\ 1\\le t\\le2.$$
This proves the selected solution, including the delayed derivative, not a numerical approximation. The coefficient $c^2$ comes from feeding the first interval back into the second; replacing history by the current value would give an exponential and a different equation. For $|c|\\le2$, $a>|b|$ and the common strict rate $\\lambda=1/10$ is legitimate because $1/10+2e^{-9/10}<1$; $e^{9/10}>1+9/10+(9/10)^2/2=461/200>20/9$ proves the inequality. Hence $|x(t)|\\le |H|e\\,e^{-t/10}$ is a convenient conservative bound. The transformed $y$ can grow polynomially while $x$ decays.

## Cumulative primary, changed and public-return investigations

Use the exact dimensionless interval $(0,1)$ and zero Dirichlet space $V$ for all fields. The canonical record specifies every input to the required bounded program. Each portfolio requires a field proof, an invariant-dynamics audit, an SDE/discrete-moment comparison and a delay-history proof. Complete the native Project19 counter-audit with starts **0,1,2,3**, horizons **4,8,16**, nonoverlapping block/batch lengths **2 and 4**, and lags **0–4**. Never assume these finite periodic systems are mixing.

\`\`\`json
{
  "family":"WE-SPECIALIST-v1",
  "fields":[
    {"id":"P","kind":"quadratic","A":"1","left":["2","0","0","1","-3","3","-1"],"right":["2","0","0","1","-3","3","-1"],"delta":"0"},
    {"id":"C","kind":"tent","A":"2","left":["0","0","0","8"],"right":["8","-24","24","-8"],"delta":"4"},
    {"id":"R","kind":"antisymmetric","A":"-1","left":["-6","12","0","-1","9","-33","63","-66","36","-8"],"right":["-6","12","0","-1","9","-33","63","-66","36","-8"],"delta":"0"}
  ],
  "maps":[
    {"id":"P","T":[1,0,3,2],"f":["0","2","2","4"]},
    {"id":"C","T":[1,2,3,0],"f":["0","2","2","4"]},
    {"id":"R","T":[1,2,3,0],"f":["1","-1","1","-1"]}
  ],
  "horizons":[4,8,16],"batches":[2,4],"lags":[0,1,2,3,4],
  "ou":[
    {"id":"P","a":"1","q":"2","m":"1","v":"0","h":"1/2","n":4},
    {"id":"C","a":"2","q":"1","m":"0","v":"1/4","h":"1/4","n":4},
    {"id":"R","a":"1","q":"1","m":"-1","v":"1/2","h":"1","n":3}
  ],
  "delay":[{"id":"P","H":"1","c":"1"},{"id":"C","H":"2","c":"2"},{"id":"R","H":"-1","c":"-1"}],
  "times":["0","1/2","1","3/2","2"],
  "ito":{"n":4,"h":"1/4","step":"1/2"}
}
\`\`\`

**WE-P, primary.** Construct $u=x(1-x)$, verify the printed load $f=2+u^3$ against all tests, and prove existence, uniqueness, $H^2$ regularity and global convergence of WE-T05 with $u_0=0$. Give its derivative energy, fourth-power integral, squared $L^2$ norm and minimized $J$. For map P, find the full invariant projection and explain how both starting components defeat a global-mean claim. Complete all finite statistical deliverables. Derive OU P's exact time-two law and the four-step discrete law, then compare their invariant variances. Derive the two-interval delay P and its stability bound.

**WE-C, changed.** Construct $u=2\\min(x,1-x)$ with the printed two polynomial loads and point load $4\\delta_{1/2}$. Verify its weak equation including the jump. Determine exactly which stationary/existence/regularity/evolution assertions remain justified. Replacing the point coefficient by zero is the adverse load: prove the displayed tent is no longer its solution, while WE-T04 still supplies a different unique solution. Change to map C, showing ergodicity under uniform measure but failure of mixing; audit finite covariances/batches rather than reporting independent-sample errors. Compare OU C's stationary continuous variance with its changed discrete variance, and derive the changed history response.

**WE-R, later public reconstruction.** Construct $u=-x(1-x)(1-2x)$ and derive its signed load, energy, regularity and evolution convergence with $u_0=x(1-x)$. Reconstruct the finite audit for map R, noting a nonzero observable with zero mean and persistent alternating covariance. Compare OU R's continuous moments at time three with the three-step discrete moments and the boundary step $h=2/a$. Derive the sign-changing delay R from its history, and explain why its transformed polynomial can cross zero without violating the stability bound. Reproduce the predictable/anticipative sign-walk identities. This is public return work; elapsed delay and unseen performance are not enforced or certified.

For every portfolio submit: its state/domain/boundary/probability/history contract; complete existence and regularity argument with imported hypotheses; field load verification and exact energies; full finite outputs and theorem-status ledger; continuous/discrete stochastic comparison; delay derivation and bound; one rejected stronger claim; first/comparison/revised records. Preserve real failures, including reference validation errors.

## Complete public field and dynamics models

For every field define $F(v)=\\int f_{\\rm reg}v+d\\,v(1/2)$. The piecewise integration identity
$$\\int u'v'+u^3v=\\int(-u''_{\\rm pieces}+u^3)v-[u']_{1/2}v(1/2)$$
proves the printed loads for all $v\\in V$: derive it first for smooth tests and extend by $H^1$ density and bounded traces. P/R have no derivative jump. C has slopes $2,-2$, so $-[u']=4$ and the listed cubics are $(2x)^3$ and $[2(1-x)]^3$. Omitting the point load leaves weak residual $4v(1/2)$, nonzero for a test with nonzero midpoint. WE-T04 proves all three unique stationary weak solutions and unique minima. P/R have $L^2$ loads, hence $H^2$ and WE-T05 evolution/convergence; C is $H^1$ but not $H^2$. Its dual point load is outside WE-T05's $f\\in L^2$ assumption, so that particular evolution theorem cannot be invoked. No nonexistence conclusion for other weak evolution theories follows.

Testing each stationary equation with $u$ gives $F(u)=\\int|u'|^2+\\int u^4$, hence $J(u)=-\\int|u'|^2/2-3\\int u^4/4$. For R use $p=x(1-x)(1-2x)$, $p'=1-6x+6x^2$. Direct polynomial integration gives the following exact public ledger; coefficients in the input are in ascending powers of $x$.

| Case | Derivative energy | Fourth-power integral | Squared L2 norm | Minimum J | Point load |
| --- | --- | --- | --- | --- | --- |
| P | 1/3 | 1/630 | 1/30 | -47/280 | 0 |
| C | 4 | 1/5 | 1/3 | -43/20 | 4 |
| R | 1/5 | 1/30030 | 1/210 | -801/8008 | 0 |

For example $\\int[x(1-x)]^4=4!4!/9!=1/630$ and $\\int p^4=1/30030$ by polynomial expansion; no numerical quadrature is needed. For P/R, WE-T05 yields squared $L^2$ distance from their stationary fields bounded by $e^{-4t}$ times the initial squared distance. Initial squared distances are respectively $1/30$ and $4/105$: for R, $u_0-p_{R}=x(1-x)(2-2x)$, whose square integrates to $4/105$. This statement concerns the continuous PDE with the specified initial data.

Every printed map permutes four states and preserves uniform probability. The orthogonal invariant projection is the average within each cycle. P has two cycles, and C/R one four-cycle. Their exact results are:

| Case | Invariant mean | Projection at states 0,1,2,3 | Covariances at lags 0,1,2,3,4 |
| --- | --- | --- | --- |
| P | 2 | 1,1,3,3 | 2,0,2,0,2 |
| C | 2 | 2,2,2,2 | 2,-1,0,-1,2 |
| R | 0 | 0,0,0,0 | 1,-1,1,-1,1 |

Here the covariance is **the exact invariant covariance** $\\gamma(k)=\\frac14\\sum_i(f_i-\\bar f)(f_{T^ki}-\\bar f)$, not an independent sample estimate. The executable additionally reports circular empirical covariances centered at each finite orbit's mean. For all stated N, circular empirical covariance is P: $1,-1,1,-1,1$, C: $2,-1,0,-1,2$, R: $1,-1,1,-1,1$, for each start. P's component mean removes its between-component variance; confusing the two covariances loses the very nonergodicity being audited.

This supplies the complete native Project19 counter-audit. Every horizon is a multiple of four, so horizon means equal the projection table for every start. Every length-four block has that same mean. P's length-two blocks also equal its component mean. C's length-two block means alternate: start 0 gives $1,3$; start 1 gives $2,2$; start 2 gives $3,1$; start 3 gives $2,2$, repeated through the stated horizons. R's length-two blocks are all zero. Batch estimates at lengths two and four therefore depend strongly on the observable, starting phase and chosen batch length. With the convention $\\widehat\\sigma^2_b=b\\,s_b^2$ using unbiased sample variance of the nonoverlapping batch means, C at starts 0/2 has $\\widehat\\sigma^2_2=2K/(K-1)$ where $K=N/2$, namely $4,8/3,16/7$ for N=4,8,16; C at starts1/3 has zero; every case's length-four estimate is undefined at N=4 (only one batch) and zero at N=8,16. P/R length-two estimates are also zero. These finite batch statistics do not define a valid asymptotic CLT variance here.

Every running mean at every prefix $1\\le n\\le N$ is given exactly by
$$A_n(i)=\\frac{\\lfloor n/p\\rfloor\\,p\\,c_i+\\sum_{j=0}^{(n\\bmod p)-1}f_{T^ji}}{n},$$
where $p=2$ for P and $p=4$ for C/R, and $c_i$ is its cycle mean. This formula plus the printed four values is a complete public answer for all retained prefixes, not a request to infer a limiting table from a plot. The program emits every prefix, block, empirical covariance and batch estimate. Exact rational arithmetic means the second implementation can compare every value without floating-point precision drift; no orbit integration step or stochastic standard error is hidden. All three finite models fail mixing: if $A=\\{0\\}$, $\\mu(A\\cap T^{-4n}A)=1/4\\ne1/16$. Thus Project19's initial belief of mixing is rejected, no CLT confidence interval is justified, and longer periodic runs cannot repair that hypothesis. Known invariant means and component means supply the comparison; an independent transfer discretization is unnecessary because the exact finite map is already fully enumerated. These four-state results do not replace the native irrational-rotation, shift, entropy or Lyapunov theory.

## Complete public stochastic and delay models

For all three portfolios, declare independent Gaussian Brownian-grid increments of variance h, independent of the Gaussian initial value. Both the continuous OU and discrete Euler laws are therefore Gaussian: a linear combination of independent Gaussian variables is Gaussian, with the means and variances below. The wider moment recurrence in WE-T08 does not require Gaussian increments; only these full-law conclusions do. At the stated final times, their exact and discrete moments are:

| Case | Time | Exact mean | Exact variance | Discrete mean | Discrete variance | Continuous invariant variance | Discrete invariant variance |
| --- | --- | --- | --- | --- | --- | --- | --- |
| P | 2 | exp(-2) | 1-exp(-4) | 1/16 | 85/64 | 1 | 4/3 |
| C | 1 | 0 | 1/4 | 0 | 341/1024 | 1/4 | 1/3 |
| R | 3 | -exp(-3) | 1/2 | 0 | 1 | 1/2 | 1 |

These are derived moments, not invented simulated values. C starts in the continuous invariant law, but its discretization changes that law. R has the stationary variance but nonzero mean, so it is not initially stationary. At the adverse $h=2/a$, $r=-1$ and $v_n=v_0+nqh$; if $q>0$ there is no finite invariant variance. With $q=0$ a separate deterministic analysis is needed. The code emits \`stable:false\` and \`invariantEM:null\` for the noisy boundary control; it must not divide by zero.

For the sign walk, the 16 length-four sign vectors are equiprobable, $\\Delta B=\\pm1/2$, $Q=\\sum(\\Delta B)^2=1$, and $B_0=0$. Algebraic telescoping gives left sum $L=(B_1^2-Q)/2$ and right sum $R=(B_1^2+Q)/2$. Consequently $\\mathbb EL=0$, $\\mathbb ER=1$, $\\mathbb EL^2=3/8$, and $R-L=1$ in every scenario. The code enumerates all scenarios. These predictable/anticipative finite identities illustrate the native integral convention. The stochastic integral's limit and the SDE existence proof retain their own hypotheses; this finite sign walk supplies neither Gaussian increments nor an observed sample of Brownian motion.

For delay work, the full $x(t)$ is $e^{-t}$ times the following exact transformed values. They follow directly from WE-T10, including the sign-changing R case.

| Case | y(0) | y(1/2) | y(1) | y(3/2) | y(2) |
| --- | --- | --- | --- | --- | --- |
| P | 1 | 3/2 | 2 | 21/8 | 7/2 |
| C | 2 | 4 | 6 | 9 | 14 |
| R | -1 | -1/2 | 0 | 3/8 | 1/2 |

A state variable $x(0)=H$ alone is insufficient. For example change the history to $\\widetilde\\phi(s)=He^{-s}+s$ while retaining $x(0)=H$; its value at -1 changes by -1, so the initial right derivative changes by $-b$. The original printed formula no longer solves that changed-history problem. The required software validation refuses a missing history parameter; it does not fill it silently with zero.

## Required bounded executable reference

The reference consumes the actual canonical record, integrates the printed polynomial loads against four zero-boundary polynomial tests, and reports exact rational field integrals/residuals. It fully enumerates the finite dynamics, moment recurrences, transformed delay values and sign-walk identities. Rational arithmetic is exact for these bounded inputs; exponentials in the continuous formulas remain symbolic. It does not discretize the nonlinear heat flow or generate stochastic samples. The required comparison is to the complete mathematical models above and the independent oracle, not to a second invocation of the same functions.

\`\`\`javascript
import { readFileSync } from 'node:fs';
const raw=readFileSync(0,'utf8');
if(Buffer.byteLength(raw)>20000) throw Error('input bound');
const d=JSON.parse(raw);
const gcd=(a,b)=>b?gcd(b,a%b):(a<0n?-a:a);
function Q(s){if(typeof s!=='string'||s.length>40||!(/^-?\\d+(\\/\\d+)?$/).test(s))throw Error('rational');let[a,b=1n]=s.split('/').map(BigInt);if(b===0n)throw Error('denominator');const g=gcd(a,b);return[a/g,b/g];}
const q=n=>[BigInt(n),1n], add=(a,b)=>norm(a[0]*b[1]+b[0]*a[1],a[1]*b[1]), neg=a=>[-a[0],a[1]], sub=(a,b)=>add(a,neg(b)), mul=(a,b)=>norm(a[0]*b[0],a[1]*b[1]);
function norm(a,b){if(b===0n)throw Error('zero division');if(b<0n){a=-a;b=-b;}const g=gcd(a,b);return[a/g,b/g];}
const div=(a,b)=>norm(a[0]*b[1],a[1]*b[0]), eq=(a,b)=>a[0]*b[1]===b[0]*a[1], less=(a,b)=>a[0]*b[1]<b[0]*a[1], str=a=>a[1]===1n?String(a[0]):\`\${a[0]}/\${a[1]}\`;
const sum=a=>a.reduce(add,q(0)), pow=(a,n)=>{let r=q(1);for(let i=0;i<n;i++)r=mul(r,a);return r;};
const plus=(a,b)=>Array.from({length:Math.max(a.length,b.length)},(_,i)=>add(a[i]??q(0),b[i]??q(0)));
function times(a,b){const z=Array.from({length:a.length+b.length-1},()=>q(0));a.forEach((x,i)=>b.forEach((y,j)=>z[i+j]=add(z[i+j],mul(x,y))));return z;}
const deriv=a=>a.length===1?[q(0)]:a.slice(1).map((x,i)=>mul(x,q(i+1))), val=(a,x)=>a.reduceRight((r,c)=>add(mul(r,x),c),q(0));
const integ=(a,l,r)=>sum(a.map((c,i)=>mul(div(c,q(i+1)),sub(pow(r,i+1),pow(l,i+1)))));
const array=(a,n)=>{if(!Array.isArray(a)||a.length!==n)throw Error('shape');return a;};
if(d.family!=='WE-SPECIALIST-v1')throw Error('family');
for(const k of ['fields','maps','ou','delay'])array(d[k],3).forEach((x,i)=>{if(x.id!==['P','C','R'][i])throw Error('identity');});
if(JSON.stringify(d.horizons)!=='[4,8,16]'||JSON.stringify(d.batches)!=='[2,4]'||JSON.stringify(d.lags)!=='[0,1,2,3,4]')throw Error('audit bounds');
const half=Q('1/2');
const fields=d.fields.map(z=>{
 const A=Q(z.A);let parts;
 if(z.kind==='quadratic')parts=[[q(0),A,neg(A)],[q(0),A,neg(A)]];
 else if(z.kind==='tent')parts=[[q(0),A],[A,neg(A)]];
 else if(z.kind==='antisymmetric')parts=[[q(0),A,mul(q(-3),A),mul(q(2),A)],[q(0),A,mul(q(-3),A),mul(q(2),A)]];
 else throw Error('profile');
 const loads=[z.left,z.right].map(a=>{if(!Array.isArray(a)||a.length<1||a.length>10)throw Error('load bound');return a.map(Q);});const delta=Q(z.delta);
 const intervals=[[q(0),half],[half,q(1)]];
 function integral(transform){return sum(parts.map((p,i)=>integ(transform(p),...intervals[i])));}
 const derivative=integral(p=>times(deriv(p),deriv(p))), quartic=integral(p=>times(times(p,p),times(p,p))), l2=integral(p=>times(p,p));
 const residuals=Array.from({length:4},(_,k)=>{
  const v=[...Array.from({length:k+1},()=>q(0)),q(1),q(-1)];
  const regular=sum(parts.map((p,i)=>integ(plus(plus(times(deriv(p),deriv(v)),times(times(times(p,p),p),v)),negPoly(times(loads[i],v))),...intervals[i])));
  return sub(regular,mul(delta,val(v,half)));
 });
 if(residuals.some(x=>!eq(x,q(0))))throw Error('weak residual');
 return{id:z.id,derivative:str(derivative),quartic:str(quartic),l2:str(l2),J:str(sub(neg(div(derivative,q(2))),mul(Q('3/4'),quartic))),delta:str(delta),residuals:residuals.map(str)};
});
function negPoly(a){return a.map(neg);}
const maps=d.maps.map(z=>{
 array(z.T,4);array(z.f,4);if(z.T.some(x=>!Number.isInteger(x)||x<0||x>3)||new Set(z.T).size!==4)throw Error('uniform preservation');const f=z.f.map(Q),mu=div(sum(f),q(4));
 const iterate=(i,n)=>{for(let j=0;j<n;j++)i=z.T[i];return i;};
 const projection=z.T.map((_,i)=>{let j=i,a=[];do{a.push(f[j]);j=z.T[j];}while(j!==i);return div(sum(a),q(a.length));});
 const covariance=d.lags.map(k=>div(sum(f.map((x,i)=>mul(sub(x,mu),sub(f[iterate(i,k)],mu)))),q(4)));
 const audits=d.horizons.flatMap(N=>z.T.map((_,start)=>{
  const x=Array.from({length:N},(_,k)=>f[iterate(start,k)]),mean=div(sum(x),q(N));
  const running=x.map((_,i)=>str(div(sum(x.slice(0,i+1)),q(i+1))));
  const circular=d.lags.map(k=>str(div(sum(x.map((a,i)=>mul(sub(a,mean),sub(x[(i+k)%N],mean)))),q(N))));
  const batches=d.batches.map(b=>{const means=Array.from({length:N/b},(_,j)=>div(sum(x.slice(j*b,j*b+b)),q(b)));const estimate=means.length<2?null:mul(q(b),div(sum(means.map(a=>pow(sub(a,mean),2))),q(means.length-1)));return{length:b,means:means.map(str),status:means.length<2?'insufficient-batches':'defined',estimate:estimate===null?null:str(estimate)};});
  return{N,start,mean:str(mean),running,circular,batches};
 }));return{id:z.id,mean:str(mu),projection:projection.map(str),covariance:covariance.map(str),audits};
});
function ou(z){const a=Q(z.a),noise=Q(z.q),h=Q(z.h);if(!less(q(0),a)||less(noise,q(0))||!less(q(0),h)||!Number.isInteger(z.n)||z.n<1||z.n>16)throw Error('OU domain');let m=Q(z.m),v=Q(z.v);if(less(v,q(0)))throw Error('variance');const r=sub(q(1),mul(a,h));for(let k=0;k<z.n;k++){m=mul(r,m);v=add(mul(mul(r,r),v),mul(noise,h));}const stable=less(mul(r,r),q(1));return{id:z.id,time:str(mul(h,q(z.n))),mean:str(m),variance:str(v),invariantExact:str(div(noise,mul(q(2),a))),stable,invariantEM:stable?str(div(mul(noise,h),sub(q(1),mul(r,r)))):null};}
const moments=d.ou.map(ou);
const timesInput=array(d.times,5).map(Q);if(timesInput.some(t=>less(t,q(0))||less(q(2),t)))throw Error('time bound');
const delay=d.delay.map(z=>{if(!Object.hasOwn(z,'H'))throw Error('history');const H=Q(z.H),c=Q(z.c);if(less(q(2),c)||less(c,q(-2)))throw Error('delay bound');return{id:z.id,y:timesInput.map(t=>{const s=less(t,q(1))?q(0):sub(t,q(1));return str(mul(H,add(add(q(1),mul(c,t)),div(mul(mul(c,c),mul(s,s)),q(2)))));})};});
const I=d.ito;if(I.n!==4||!eq(Q(I.h),Q('1/4'))||!eq(Q(I.step),half))throw Error('sign bound');let left=[],right=[],difference=[];
for(let mask=0;mask<16;mask++){let B=q(0),L=q(0),R=q(0);for(let k=0;k<4;k++){const inc=(mask&(1<<k))?half:neg(half);L=add(L,mul(B,inc));B=add(B,inc);R=add(R,mul(B,inc));}left.push(L);right.push(R);difference.push(sub(R,L));}
const ito={leftMean:str(div(sum(left),q(16))),rightMean:str(div(sum(right),q(16))),leftSecond:str(div(sum(left.map(a=>mul(a,a))),q(16))),differences:difference.map(str)};
const boundary=ou({...d.ou[0],h:str(div(q(2),Q(d.ou[0].a)))});
console.log(JSON.stringify({fields,maps,moments,delay,ito,boundary}));
\`\`\`

The reference rejects a duplicate destination in a uniform-measure map, a missing history, negative variance/noise, zero step, oversized input, unbounded array shapes, and a changed point-load coefficient that fails the weak residual. Retain the actual error from each required control: change C's \`delta\` to \`"0"\`; change P map T to \`[1,1,3,2]\`; remove P delay \`H\`; set P OU \`q\` to \`"-1"\`; set P OU \`h\` to \`"0"\`. Each must fail before reporting successful output. Also inspect the successful boundary-step result (\`stable:false\`, no discrete invariant variance), and the anticipative sign-sum result (mean one rather than zero). A positive right-sum mean is a deliberate mathematical failure control, not a rejected JSON record. These edits are to separate learner-owned input copies; retain the original canonical input and all outputs. The program has bounded loops and exact rational arithmetic, but it is not a proof for unbounded inputs or a security boundary for arbitrary programs.

## Review rubric, repairs and retained records

Use the same public 100-point rubric separately for WE-P, WE-C and WE-R. This is a self-review aid, not a grade, admission result or specialist qualification.

| Criterion | Points | Complete evidence and repair trigger |
| --- | --- | --- |
| Objects and hypotheses | 15 | Correct weak space/load, invariant probability, filtered SDE and full history; repair any missing domain or measure before continuing |
| Nonlinear field proof | 25 | All-test load identity, existence/uniqueness, exact energy, regularity and correct evolution applicability; a plot or formal stationarity earns no existence claim |
| Long-time dynamics | 20 | Projection, all Project19 outputs, covariance/batch conventions and explicit mixing/CLT refusal; repair a component/global mean confusion from the cycle decomposition |
| Stochastic work | 15 | Exact/discrete moments and stationary-law distinction, predictable versus right sum; repair from isometry/Itô and the moment recurrence |
| Delay work | 15 | Method-of-steps derivation, complete history, two-interval field and strict-barrier decay hypotheses; repair missing history by reconstructing the first delayed interval |
| Reproduction and records | 10 | Actual required reference run, all five failing inputs, successful boundary/anticipative controls, original/comparison/revised evidence and declared help |

A complete portfolio satisfies every criterion; the sum does not erase a missing theorem hypothesis, executable run or incompatible load. For an incorrect result, identify the earliest invalid step, name the source or new theorem used to repair it, work a changed check, then write the corrected argument. Keep numerical, analytic and model claims separate. All data here are synthetic exact mathematical inputs; no experiments, participants, timings, external validation or observations are claimed.

For each source group, WE-T question and portfolio, retain dated external **first**, **comparison** and **revised** files with the task ID, source version, original argument, public help already seen, exact discrepancy, repair and corrected conclusion. Keep the actual program/version/input/output/error files with the software work. Use the [worksheet portfolio workflow](/guide/learner-records/#keep-a-worksheet-portfolio). Shared mutable notes and study checkmarks do not preserve an immutable task history, certify delay, verify unseen work, assess mastery or replace those records. These are not new registered writing tasks. Existing course identities, native keys and learner records keep their meanings.

## Theorem and source limits

The selected nonlinear proofs are for a real one-dimensional interval, zero Dirichlet boundary and a monotone defocusing cubic. The parabolic theorem additionally uses time-independent L2 forcing and H1 initial data. The SDE theorem uses globally Lipschitz coefficients on a fixed Brownian filtered space. The delay existence theorem covers the stated discrete delay; Halanay is a sufficient stability bound. Birkhoff/Oseledets, general invariant-measure decomposition, trace/extension theory, higher-dimensional nonlinear regularity, general SPDEs, non-Lipschitz stochastic uniqueness, arbitrary history functionals and full bifurcation classifications retain their separate work. The bounded executable is required finite reproduction, not a substitute for those proofs or for physical model validation.

For independent reference on the analytic background, see John Hunter's [PDE notes, Sobolev and semilinear heat chapters](https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf), Steve Shkoller's [Introduction to Sobolev Spaces](https://www.math.ucdavis.edu/~babson/MAT200/Shktext.pdf), and Ruth Williams's [Stochastic Differential Equations course materials](https://mathweb.ucsd.edu/~williams/courses/m286notes/2005/m286notes2005.html). The arguments, bounded investigations and exact public ledgers above specify this course's actual selected scope. Successful local checks and public comparisons do not qualify entire working books or provide human teaching validation.
`;export{e as default};