var e=`---
id: course-calculus-analysis-specialist
title: "Measure, Operators, Frequencies, and Holomorphic Continuation"
level: graduate
estimated_minutes: null
license: CC BY-SA 4.0
---

# Measure, Operators, Frequencies, and Holomorphic Continuation

<!-- euler-course-route -->

## Current course route

This is an Outline seminar in a selected theme. Use its [course page](/courses/atlas-calculus-analysis-specialist/) for the preparation courses, then attempt the mathematical investigations below. A general graduate chapter syllabus has not yet been assigned.

Preparation courses: [Complex analysis](/courses/atlas-calculus-analysis-advanced/) · [Measure and integration](/courses/course-measure-integration/) · [Functional analysis](/courses/course-functional-analysis/).

The earlier mathematical explanations, proofs, assignments and complete solutions remain below with their original task identities. Their first-attempt, comparison and correction requirements still apply when you choose that earlier work. Existing notes and study marks keep their original scope.

An integral can define a vector, a measurement of that vector, or a frequency coefficient. A holomorphic function can give both a contour integral and a boundary vector. Passing between these descriptions is useful only when the space, measure, normalization, domain and convergence theorem travel with the formula.

This course joins **measure/integration, functional, harmonic and complex analysis**. It supplies the proof bridges left open by the selected native gateways, follows them through sustained operator, transform and continuation theory, and requires both proof portfolios and two executable laboratories. A topic map does not replace these tasks. The study time depends on the selected reading, attempts and corrections; native component estimates and the graduate-path map's 600-hour figure retain their original scopes. They are not a total for this course.

All models and software references are public. Keep actual help, prior exposure and revisions; an opened key makes subsequent work public reconstruction. This graduate beta course offers no grade, qualification, observed learning result or calibrated workload. The licence above covers the newly authored text and reference code; linked works retain their attribution and terms.

## ANA-SP-ENTRY — Preparation, order and exact public keys

Complete [Real and Complex Analysis: Limits, Domains, and Measure](#/item/course-calculus-analysis-advanced): its required A–F real/metric/measure/complex selection, ANA-ADV-T01–T05 proofs, Q01–Q12 and complete P001/C001/R001 work. In particular bring holomorphic-only Goursat, disk primitives, continuous-homotopy chord proofs, Cauchy/Taylor/identity, finite-pole contours, metric compactness, MCT/Fatou/DCT and their failed-hypothesis examples. A remembered calculation is not a substitute for those arguments.

For inner-product conventions, use [Inner products and orthogonal decomposition](#/item/book-linear-algebra-structure-proofs?chapter=inner-products-orthogonal-decomposition), Sections 1–6 and Exercises 1–4, 11, 13, 17 with full Solutions. Read [Adjoints](#/item/book-linear-algebra-structure-proofs?chapter=adjoints-unitary-positive-operators), Sections 1–7 and Exercises 1–6, 14–16; and [finite-dimensional spectral theorems](#/item/book-linear-algebra-structure-proofs?chapter=finite-dimensional-spectral-theorems), Sections 1–2 and Exercises 4–6, 21. These finite-dimensional results do not assert infinite-dimensional compactness. We use inner products **linear in the first slot**.

For the polar calculation of the Gaussian integral, repair only the needed change of variables in [Lucent's double integrals](/lucent/web/#/course/calculus/double-integrals), “Polar coordinates change area as well as position”, calc3-polar-patch with its inline solution, and Exercises 6–8 with Full solutions. The polar change-of-variables theorem for proper smooth regions is the named calculus input; improper tails below are justified separately. No unbounded-operator or PDE course is silently assumed.

Follow this required route. Every listed exercise has its adjacent public solution; retain an attempt before comparison and repair the earliest missing hypothesis.

| Stage | Native selection and complete keys | Join supplied here |
| --- | --- | --- |
| M. Measure and integration | [Measure and Lebesgue Integration](#/item/course-measure-lebesgue-integration), Modules 1–6, all eight Exercises/Answers and its five-item capstone. In [Proof-Safe Real Analysis](#/item/book-proof-safe-real-analysis), outer-measure-and-measurability Sections 1–13 and ANA-CH16-E001–E018; lebesgue-integration Sections 1–17 and ANA-CH17-E001–E020; measure-convergence-theorems Sections 1–13 and ANA-CH18-E001–E020, each with its named Solution | Carathéodory closure, measurable intervals, product integration, density and Radon–Nikodym proofs; fixed capstone models below |
| F. Function spaces and operators | lp-and-banach-spaces Sections 1–14 and all ANA-CH19-E001–E020/Solutions; [Hilbert/Fourier geometry](#/item/deep-dive-hilbert-fourier-geometry), all six Exercises/Answers | General projection/Riesz, signed reduction and finite-p duality, Hahn–Banach, Baire/UBP/open mapping/closed graph, weak convergence and compactness |
| H. Frequencies | fourier-approximation-and-density Sections 1–14 and all ANA-CH21-E001–E020/Solutions | Continuous/smooth density and translation bridge; full real-line inversion/Plancherel and multiplier arguments |
| C. Complex continuation | [Complex functions](#/item/book-functions-equations-proof?chapter=complex-functions), its FTA proof and all five Exercises/Solutions; [Analytic continuation](#/item/book-functions-equations-proof?chapter=analytic-continuation), all five Exercises/Solutions, including the dyadic-root natural-boundary proof | Annular Cauchy/Laurent theory, singularities, argument principle/Rouché and a genuine monodromy proof |
| L. Required software | ANA-CH19-P001 phase-diagram project and ANA-CH21-P001 convergence-mode laboratory, using the complete bounded reference and comparison below | Numerical norms with two discarded-region bounds; smooth/jump raw/Fejér work, quadrature audit, overshoot height/width, coefficient decay and aliasing |
| S. Synthesis | All ANA-SP-Q checkpoints and all fields of ANA-SP-P001/C001/R001, with complete models below | Joined proofs, changed hypotheses, software outputs, refusal/repair and a public work trail |

The native Lp inequalities/completeness and finite Fourier projection/Fejér proofs are substantive assigned work. The native general projection/Riesz and compact spectral statements, Lp duality outline and real-line transform preview alone do not supply the proofs below. The [graduate analysis path](#/path/graduate-analysis-path) remains orientation; its map is not assigned as a proved theorem or a 600-hour course. The two native projects remain software work: hand arithmetic supplements their execution and does not waive it.

## ANA-SP-M1 — From outer measure to a complete measurable space

An outer measure $m^*$ on $X$ is zero on the empty set, monotone and countably subadditive. Define $E$ measurable when every $A\\subseteq X$ satisfies

$$m^*(A)=m^*(A\\cap E)+m^*(A\\setminus E).$$

Subadditivity always supplies the inequality from left to right. We prove the other direction instead of assuming that all subsets are measurable.

**ANA-SP-T01 — Carathéodory theorem for an outer measure.** The measurable sets form a sigma-algebra, and $m^*$ restricted to them is a complete measure.

**Proof.** The empty set and complements are immediate. If $E,F$ are measurable, split $A$ first by $E$, then split the piece outside $E$ by $F$. The resulting lower bound is

$$m^*(A)\\ge m^*(A\\cap E)+m^*((A\\setminus E)\\cap F)+m^*(A\\setminus(E\\cup F)).$$

The first two terms dominate $m^*(A\\cap(E\\cup F))$ by subadditivity; hence finite unions are measurable. Complements give finite intersections and differences. For disjoint measurable $E_j$, repeated splitting gives, for every $n$,

$$m^*(A)\\ge\\sum_{j=1}^n m^*(A\\cap E_j)+m^*(A\\setminus\\bigcup_{j\\ge1}E_j).$$

Let $n$ increase. The sum dominates $m^*(A\\cap\\bigcup E_j)$ by countable subadditivity, so the union is measurable. Arbitrary countable unions reduce to disjoint ones by subtracting the preceding finite union. This argument uses monotonicity of numerical partial sums, not a continuity theorem for arbitrary outer-measure sets.

For disjoint measurable $E_j$, apply the finite splitting inequality with $A=\\bigcup E_j$, then let $n$ increase. It gives $m^*(\\bigcup E_j)\\ge\\sum m^*(E_j)$; outer subadditivity gives the reverse inequality, including infinite values. Finally, if $N$ has outer measure zero, every subset $B\\subseteq N$ is null. Since $m^*(A\\cap B)=0$ and $m^*(A\\setminus B)\\le m^*(A)$, the splitting criterion holds; thus every such subset is measurable. This proves completeness. $\\square$

For the native length outer measure, half-lines really are measurable. One useful intermediate fact is additivity for positively separated sets: if $\\operatorname{dist}(E,F)>0$, refine any interval cover into smaller intervals that cannot hit both sets, at an arbitrarily small extra total-length budget. Grouping these intervals gives $m^*(E\\cup F)\\ge m^*(E)+m^*(F)$ after the budget tends to zero. The reverse inequality is subadditivity. The refinement is obtained by subdividing each covering interval and slightly overlapping its subintervals, with additional budgets summing to the chosen tolerance.

To split $A$ at $c$, separate $A\\cap(-\\infty,c-\\varepsilon]$ from $A\\cap(c,\\infty)$. The omitted strip has outer length at most $\\varepsilon$, so when $m^*(A)<\\infty$,

$$m^*(A)\\ge m^*(A\\cap(-\\infty,c])+m^*(A\\cap(c,\\infty))-\\varepsilon.$$

Let $\\varepsilon\\downarrow0$. If $m^*(A)=\\infty$, subadditivity already forces the split sum to be infinite, giving equality as well. Half-lines and hence intervals and Borel sets are measurable. The native interval-cover proof gives their usual lengths. T01 then supplies the complete Lebesgue space, including null subsets. It does not make the Vitali set measurable.

## ANA-SP-M2 — Product integration without a hidden rectangle limit

We explicitly take **existence of the standard sigma-finite product measure** as a foundational measure-construction input: it is defined on the product sigma-algebra and agrees with products on measurable rectangles, with $0\\cdot\\infty=0$. We now prove the extension of the integral identity. Arbitrary measurable sets need not be increasing limits of finite rectangle unions.

**ANA-SP-T02 — Pi-lambda lemma and Tonelli.** A lambda-system contains $X$, is closed under complements and disjoint countable unions. A pi-system is closed under finite intersections. The smallest lambda-system containing a pi-system is its generated sigma-algebra.

**Proof of the lemma.** Let $D$ be that smallest lambda-system. For $A$ in the generating pi-system, the sets $B$ for which $A\\cap B\\in D$ form a lambda-system containing the generators: relative differences of nested members belong to a lambda-system, which verifies the complement step inside $A$. Thus $A\\cap B\\in D$ for every $B\\in D$. Now fix such a $B$ and repeat with the roles exchanged. Minimality shows $D$ is closed under intersections of its own members. Intersections plus complements give finite unions and differences; disjointizing a countable union proves sigma-closure. $\\square$

First suppose both measures are finite. Let $D$ consist of product-measurable sets $E$ whose sections are measurable, whose section-measure function $x\\mapsto\\nu(E_x)$ is measurable, and for which

$$ (\\mu\\times\\nu)(E)=\\int\\nu(E_x)\\,d\\mu(x).$$

Rectangles belong to $D$. Finite total measure permits subtraction from the whole product for complements; disjoint countable unions follow from countable additivity on sections and MCT. Thus $D$ is a lambda-system. The pi-lambda lemma proves the identity for every product-measurable indicator. Finite nonnegative linear combinations and then canonical monotone simple approximations prove it for all nonnegative measurable functions, with infinite values allowed. Reversing the roles proves the other order.

For sigma-finite measures partition each factor into countably many disjoint finite-measure pieces. Apply the finite result on every product piece and sum using MCT. This also proves measurability of the section integrals. These are actual proofs of Tonelli from the stated product-measure input.

For measurable real or complex $f$ with $\\int|f|<\\infty$, Tonelli applied to $|f|$ first proves absolute slice-integrability outside null sets in each factor. Apply the nonnegative theorem to positive/negative parts of real and imaginary components, then subtract finite integrals. This proves Fubini with both orders agreeing. Without nonnegativity or absolute integrability this subtraction can be meaningless; the native signed counterexamples retain that boundary.

## ANA-SP-F1 — Hilbert projection and representing vectors

The native Riesz–Fischer proof makes $L^2$ complete. The following theorem concerns **every** Hilbert space, not only a finite-dimensional span.

**ANA-SP-T03 — Projection.** For a closed linear subspace $M$ of a Hilbert space $H$, each $x$ has a unique nearest $m\\in M$, characterized by $x-m\\perp M$.

**Proof.** Put $d=\\inf_{u\\in M}\\|x-u\\|$ and choose $u_n$ with $\\|x-u_n\\|^2\\to d^2$. The parallelogram identity gives

$$\\|u_n-u_k\\|^2=2\\|x-u_n\\|^2+2\\|x-u_k\\|^2-4\\left\\|x-\\frac{u_n+u_k}{2}\\right\\|^2\\longrightarrow0,$$

because the last norm is at least $d$. Completeness and closedness supply $m\\in M$ attaining $d$. For $v\\in M$, minimality of $\\|x-m-tv\\|^2$ for real $t$ makes its linear coefficient vanish; replacing $v$ by $iv$ in the complex case gives both parts of $\\langle x-m,v\\rangle=0$. Pythagoras then gives $\\|x-u\\|^2=d^2+\\|m-u\\|^2$, proving uniqueness. Orthogonal decomposition also proves that $P_M$ is linear, self-adjoint, idempotent and contractive; its norm is 1 when $M\\ne\\{0\\}$, and 0 otherwise. A dense nonclosed finite-support subspace of $\\ell^2$ shows why closedness cannot be dropped. $\\square$

**ANA-SP-T04 — Hilbert Riesz representation.** Each bounded linear $T:H\\to\\mathbb C$ has a unique $g\\in H$ with $T(x)=\\langle x,g\\rangle$ and $\\|T\\|=\\|g\\|$; use real scalars in the real version.

**Proof.** For $T=0$ take $g=0$. Otherwise $K=\\ker T$ is closed. Choose $x$ with $T(x)\\ne0$, project onto $K$ and put $v=(x-P_Kx)/T(x)$, so $v\\perp K$ and $T(v)=1$. Since $y-T(y)v\\in K$, orthogonality yields $\\langle y,v\\rangle=T(y)\\|v\\|^2$. Hence $g=v/\\|v\\|^2$ represents $T$. Cauchy–Schwarz gives $\\|T\\|\\le\\|g\\|$, and the unit vector $g/\\|g\\|$ gives equality. Two representing vectors differ by a vector orthogonal to every vector, hence vanish. The first-slot-linear convention explains why a scalar in the second slot is conjugated; the normalization $T(v)=1$ avoids an ambiguous phase. $\\square$

## ANA-SP-M3 — Radon–Nikodym and the signed reduction

**ANA-SP-T05 — Positive Radon–Nikodym in the sigma-finite setting.** If positive measures $\\mu,\\nu$ are sigma-finite and $\\nu\\ll\\mu$, then $\\nu(E)=\\int_E h\\,d\\mu$ for a nonnegative measurable density, unique up to $\\mu$-null equality.

**Proof for finite measures.** Let $\\lambda=\\mu+\\nu$. The real functional $T(u)=\\int u\\,d\\nu$ on $L^2(\\lambda)$ is well-defined and bounded, since

$$|T(u)|\\le\\nu(X)^{1/2}\\left(\\int|u|^2d\\nu\\right)^{1/2}\\le\\nu(X)^{1/2}\\|u\\|_{L^2(\\lambda)}.$$

T04 supplies a real $g$ with $\\nu(E)=\\int_Eg\\,d\\lambda$ for every measurable $E$. Testing the negative level sets of $g$ proves $g\\ge0$ almost everywhere. Since $\\mu(E)=\\int_E(1-g)d\\lambda$, the same argument gives $g\\le1$. Let $A=\\{g=1\\}$. Then $\\mu(A)=0$, so absolute continuity gives $\\nu(A)=0$ and therefore $\\lambda(A)=0$.

Set $h=g/(1-g)$ outside that null set and set it to zero there. The density identity for $\\mu$ extends from indicators to nonnegative functions by simple approximation and MCT. Thus

$$\\int_Eh\\,d\\mu=\\int_E h(1-g)\\,d\\lambda=\\int_Eg\\,d\\lambda=\\nu(E).$$

This also proves integrability when $\\nu$ is finite. If two densities differ, some positive level set of their difference, restricted to a finite-measure piece, would have different integrals; hence they agree almost everywhere.

For sigma-finite $\\mu,\\nu$, intersect their respective finite-measure exhaustions and disjointize to obtain a common countable partition into pieces finite for **both** measures. Apply the finite proof on each piece and patch the densities. Countable additivity/MCT proves the global identity; local uniqueness gives global uniqueness. A point mass versus Lebesgue measure fails absolute continuity and is not repaired by calling its mass an ordinary density. $\\square$

To represent a real signed measure we need another theorem, not Hahn–Banach. Suppose $\\eta$ is countably additive and has finite total variation, meaning the sums $\\sum_j|\\eta(E_j)|$ over finite measurable partitions are bounded. This gives a finite lower bound $\\beta=\\inf_E\\eta(E)$ and continuity on increasing/decreasing set sequences: on disjoint pieces the series of absolute masses converges.

**ANA-SP-T06 — Hahn/Jordan reduction for finite variation.** Choose $E_n$ with $\\eta(E_n)\\le\\beta+2^{-n}$. For $U_n=\\bigcup_{k\\ge n}E_k$, successive finite unions satisfy

$$\\eta\\left(\\bigcup_{k=n}^mE_k\\right)\\le\\beta+\\sum_{k=n}^m2^{-k}.$$

Indeed each added difference has mass at most $\\eta(E_k)-\\beta$, because its intersection with the preceding union has mass at least $\\beta$. Continuity passes to $U_n$. For $N=\\bigcap_nU_n$, continuity again gives $\\eta(N)=\\beta$. Every measurable subset of $N$ has nonpositive mass, since removing a positive one would beat the infimum. Every measurable subset of $P=X\\setminus N$ has nonnegative mass, since adding a negative one to $N$ would do the same. Thus $\\eta^+(E)=\\eta(E\\cap P)$ and $\\eta^-(E)=-\\eta(E\\cap N)$ are finite positive measures with $\\eta=\\eta^+-\\eta^-$. If $\\eta\\ll\\mu$, both parts are absolutely continuous, so T05 supplies their densities. Real and imaginary parts give the complex version. This proof supplies the signed reduction used next; it is not confused with extension of linear functionals. $\\square$

## ANA-SP-F2 — The full finite-p dual and its endpoint

**ANA-SP-T07 — Lp duality.** On a sigma-finite measure space, for $1\\le p<\\infty$ and conjugate $q$, every bounded linear functional has the form $T(f)=\\int fh\\,d\\mu$ with $h\\in L^q$, uniquely almost everywhere, and $\\|T\\|=\\|h\\|_q$. For complex scalars this is a bilinear density convention; the Hilbert representing vector is $\\overline h$.

**Proof.** First let $\\mu(X)<\\infty$. Define $\\eta(E)=T(1_E)$. Countable additivity follows since indicators of the tails of a disjoint union tend to zero in $L^p$. Null sets give zero, so $\\eta\\ll\\mu$. For a finite partition choose signs, or conjugate phases in the complex case, so that

$$\\sum_j|\\eta(E_j)|=T\\left(\\sum_j\\operatorname{phase}_j1_{E_j}\\right)\\le\\|T\\|\\mu(X)^{1/p}.$$

Thus the real/imaginary signed measures have finite variation. T06 and T05 give an integrable density $h$. Equality $T(f)=\\int fh$ first holds for simple bounded functions.

If $1<p<\\infty$, test with $f_M=\\overline{\\operatorname{sgn}h}|h|^{q-1}1_{\\{|h|\\le M\\}}$, where the sign at zero is zero. This bounded measurable test is a limit of simple bounded tests, so the identity holds by finite-measure norm approximation and dominated convergence. Put $A_M=\\int_{|h|\\le M}|h|^q$. Boundedness gives $A_M\\le\\|T\\|A_M^{1/p}$, whence $A_M^{1/q}\\le\\|T\\|$ when $A_M>0$. MCT gives $h\\in L^q$ with norm at most $\\|T\\|$. For $p=1$, testing the conjugate phase on $\\{|h|>\\|T\\|+\\varepsilon\\}$ forces that set to be null, so $h\\in L^\\infty$. Hölder gives the opposite operator bound and extends representation from simple functions to all of $L^p$ by their native proved density. Uniqueness follows by indicator/phase tests.

For sigma-finite $\\mu$, restrict to increasing finite-measure sets. Their local densities agree on overlaps by uniqueness. Patching gives $h$; the local norm bounds and MCT (or the essential bound for $q=\\infty$) give the global bound. Density of simple functions supported on sets of finite measure and continuity finish the representation. Zero measure gives the zero space and zero functional. $\\square$

The endpoint $L^\\infty$ is different. After proving Hahn–Banach below, extend the norm-one limit functional on the convergent sequences $c\\subset\\ell^\\infty$ to a norm-one functional $L$ on all of $\\ell^\\infty$. It has $L(e_n)=0$ for every coordinate vector but $L(1,1,\\ldots)=1$. If it were pairing with an $\\ell^1$ sequence, each coordinate of that sequence would be zero, contradicting the latter equality. This proves a genuine endpoint obstruction on counting measure. No shift invariance is asserted for this extension.

## ANA-SP-F3 — Extension, completeness and operator theorems

**ANA-SP-T08 — Hahn–Banach.** If a real linear functional $f$ on a subspace $M$ is dominated by a finite sublinear function $p$, it extends to the whole real vector space with the same domination. For a bounded real or complex functional on a normed space the extension can preserve its norm.

**Proof.** For $x_0\\notin M$, an extension $F(m+tx_0)=f(m)+tc$ is possible precisely when

$$\\sup_{m\\in M}\\{f(m)-p(m-x_0)\\}\\le c\\le
\\inf_{n\\in M}\\{p(n+x_0)-f(n)\\}.$$

Every expression on the left is at most every expression on the right: use $f(m+n)\\le p(m+n)\\le p(m-x_0)+p(n+x_0)$. Taking $m=n=0$ also bounds the two ends by finite numbers, so real completeness supplies a $c$. Positive and negative $t$, after division by $|t|$, verify domination. Order all dominated extensions by inclusion. The union along a chain is again a consistent linear dominated extension. **Zorn's lemma is the explicitly used choice principle**: it gives a maximal extension; the one-dimensional step forces its domain to be the whole space.

For real norm preservation take $p(x)=\\|f\\|\\|x\\|$. For complex $f$, extend its real part to a real $F$ with $|F(x)|\\le\\|f\\|\\|x\\|$ and put $\\Phi(x)=F(x)-iF(ix)$. Real linearity and $\\Phi(ix)=i\\Phi(x)$ prove complex linearity; on $M$ it equals $f$. Choose a unit scalar $\\alpha$ making $\\alpha\\Phi(x)$ nonnegative real. Then $|\\Phi(x)|=F(\\alpha x)\\le\\|f\\|\\|x\\|$, proving norm preservation. This also justifies the endpoint example above. $\\square$

For $x\\ne0$, extend the functional $ax\\mapsto a\\|x\\|$ on its one-dimensional span. Thus some norm-one functional takes value $\\|x\\|$ at $x$. If $x_n$ converges weakly to $x$ (every bounded functional converges on it), this functional gives $\\|x\\|\\le\\liminf\\|x_n\\|$. Weak convergence therefore does not generally imply norm convergence: an orthonormal sequence is weakly zero by Bessel but has norm one.

**ANA-SP-T09 — Baire and uniform boundedness.** In a complete metric space, a countable intersection of open dense sets is dense. Consequently, a pointwise bounded family of bounded linear maps from a Banach space to a normed space has uniformly bounded operator norms.

**Proof.** Inside any nonempty open set choose a closed ball of positive radius contained also in the first dense open set. Inside its interior intersect the next dense open set and choose a smaller closed ball, with radius at most $2^{-2}$, and repeat with radii at most $2^{-n}$. The centers form a Cauchy sequence; completeness supplies a limit in every closed ball and hence in every chosen open set. This proves density. Equivalently, if a complete space is a countable union of closed sets, one has nonempty interior.

For operators let $E_m=\\{x:\\sup_T\\|Tx\\|\\le m\\}$. They are closed and their union is the domain by pointwise boundedness. Some $E_m$ contains a ball $B(x_0,r)$. For each unit $x$, both $x_0\\pm(r/2)x$ lie in it, so $r\\|Tx\\|\\le2m$. Hence $\\sup_T\\|T\\|\\le2m/r$. Completeness is real work: on the incomplete finite-support space $c_{00}$ with its $\\ell^2$ norm, $T_n(x)=nx_n$ is bounded for each $n$ and pointwise bounded as a family, yet $\\|T_n\\|=n$. $\\square$

**ANA-SP-T10 — Open mapping and closed graph.** A bounded surjective linear map between Banach spaces is open. A linear map defined on all of one Banach space and valued in another is bounded if its graph is closed.

**Proof.** For a surjection $T:X\\to Y$, the closed sets $\\overline{T(nB_X)}$ cover $Y$. Baire gives a ball in one of them. Subtracting two approximating images and scaling gives a $\\delta>0$ with $B_Y(0,\\delta)\\subseteq\\overline{T(B_X)}$. If $\\|y\\|<\\delta/2$, choose $\\|x_1\\|<1/2$ with $\\|y-Tx_1\\|<\\delta/4$. Successively choose $\\|x_j\\|<2^{-j}$ reducing the residual below $\\delta/2^{j+1}$. The series converges in $X$, has norm less than one, and boundedness of $T$ gives $Tx=y$. Thus $B_Y(0,\\delta/2)\\subseteq T(B_X)$; scaling/translating proves openness and a bounded inverse for a bounded bijection.

For closed graph, the graph is a Banach space in the product norm $\\|(x,y)\\|=\\|x\\|+\\|y\\|$. Its projection to $X$ is a bounded bijection, so its inverse is bounded by the first result. Composing that inverse with projection to $Y$ proves boundedness of the original map. An unbounded operator on a proper dense domain does not satisfy the “defined on all of $X$” hypothesis; this theorem does not erase domains. $\\square$

Neumann inversion has an equally concrete completeness proof. Bounded operators into a Banach space are complete in operator norm: an operator-Cauchy sequence converges pointwise, its limit is linear, and the uniform Cauchy estimate passes to that limit in operator norm. If $T$ is bounded on a Banach space and $\\|T\\|\\le q<1$, then $\\sum_{j\\ge0}T^j$ converges in operator norm because its tails are bounded by a scalar geometric series. Multiplying finite partial sums by $I-T$ and passing to the limit gives a two-sided inverse with norm at most $(1-q)^{-1}$ and truncation error at most $q^{N+1}/(1-q)$. At the boundary $T=I$ no inverse exists; a finite geometric identity alone does not prove convergence at norm one.

## ANA-SP-H1 — Density and translation supply the missing bridge

We use Lebesgue measure on the line and normalized arc measure $d\\theta/(2\\pi)$ on the circle. The native simple-function approximation is already proved for $1\\le p<\\infty$. Here is the topological bridge it needs.

For a finite-measure measurable set $E$, first choose $E_R=E\\cap[-R,R]$ with $\\mu(E\\setminus E_R)<\\eta$. The interval-cover definition gives a bounded open $U\\supset E_R$ with $\\mu(U\\setminus E_R)$ arbitrarily small: intersect an open cover approximation with $(-R-1,R+1)$. Applying outer approximation to $[-R,R]\\setminus E_R$ and taking its complement inside that closed interval gives a compact $K\\subset E_R$ with arbitrarily small lost measure. Arrange $\\mu(U\\setminus K)<\\eta$. We do not require a bounded set to contain the unbounded tail of $E$. The continuous function

$$\\phi(x)=\\frac{\\operatorname{dist}(x,U^c)}{\\operatorname{dist}(x,U^c)+\\operatorname{dist}(x,K)}$$

is between zero and one, equals one on $K$, zero outside $U$, and has compact support. The denominator is positive because the two closed sets are disjoint and $K$ is compact. Empty $K$ can be handled by the zero function. The error is supported in $(E\\setminus E_R)\\cup(U\\setminus K)$, so $\\|1_E-\\phi\\|_p^p\\le\\mu(E\\setminus E_R)+\\mu(U\\setminus K)<2\\eta$. Choosing $\\eta$ arbitrarily small and using simple approximation proves $C_c(\\mathbb R)$ dense in $L^p(\\mathbb R)$. The same argument with periodic distance/short arcs proves continuous periodic density on the circle, including its normalization factor. This supplies the input to the native Fejér-to-Parseval proof.

Translations are continuous in $L^p$: first use uniform continuity and compact support for $C_c$ functions, then approximate a general $f$ by such a $g$ and use the isometry of translation to bound $\\|\\tau_h f-f\\|_p\\le2\\|f-g\\|_p+\\|\\tau_hg-g\\|_p$. The periodic proof is identical. This is a norm statement, not uniform continuity of an arbitrary measurable representative.

Smooth density can also be proved. Let $\\rho(x)=C\\exp[-1/(1-x^2)]$ on $|x|<1$, zero outside, with $C$ chosen so its integral is one. It is smooth across the endpoints: every derivative is an exponential times a rational power of $1-x^2$, and $t^{-m}e^{-1/t}\\to0$ follows from the exponential series lower bound. For $\\rho_\\varepsilon(x)=\\varepsilon^{-1}\\rho(x/\\varepsilon)$, differentiation under the finite supported integral makes $g*\\rho_\\varepsilon$ smooth and compactly supported when $g\\in C_c$. Its uniform error tends to zero by uniform continuity, with all supports in one fixed compact interval for $\\varepsilon\\le1$. Therefore $C_c^\\infty$ and hence the Schwartz class are dense in $L^2$; this is not an unexplained “dense test class”.

On the circle, positive normalized kernels concentrating at zero satisfy

$$\\|f*K_n-f\\|_p\\le\\int K_n(t)\\|\\tau_tf-f\\|_p\\,\\frac{dt}{2\\pi}\\longrightarrow0$$

by translation continuity and a near/far split. The integral inequality follows first for finite simple sums by Minkowski, then by approximation/Fubini; alternatively apply Jensen to the convex function $|\\cdot|^p$ and integrate for the same conclusion. The native Fejér kernels therefore converge in $L^p$, not just for continuous functions. Their positivity/unit mass also give $\\|\\sigma_Nf\\|_\\infty\\le\\|f\\|_\\infty$. Raw partial sums are different operators.

## ANA-SP-H2 — Fourier inversion and Plancherel on the line

Use the convention

$$\\widehat f(\\xi)=\\int_{\\mathbb R}f(x)e^{-ix\\xi}dx,\\qquad
f(x)=\\frac1{2\\pi}\\int_{\\mathbb R}\\widehat f(\\xi)e^{ix\\xi}d\\xi.$$

The Schwartz class consists of smooth functions for which every $x^j f^{(k)}(x)$ is bounded. These estimates make the needed functions and derivatives integrable. Differentiating under the integral multiplies by powers of $-ix$; integration by parts multiplies the transform by powers of $i\\xi$, with zero boundary terms. Applying both operations shows $\\widehat f$ is Schwartz. Each interchange has an integrable rapidly decaying envelope; no pointwise transform formula is asserted for an arbitrary $L^2$ representative.

The Gaussian normalization follows without assuming Fourier inversion. Tonelli and polar change of variables on proper disks, followed by MCT, give

$$\\left(\\int_{\\mathbb R}e^{-x^2}dx\\right)^2
=\\int_{\\mathbb R^2}e^{-(x^2+y^2)}dxdy
=2\\pi\\int_0^\\infty re^{-r^2}dr=\\pi.$$

The one-dimensional integral is positive, so it equals $\\sqrt\\pi$. Define $G_\\varepsilon(x)=(4\\pi\\varepsilon)^{-1/2}e^{-x^2/(4\\varepsilon)}$. Its integral is one. Differentiating its transform in $\\xi$ and using $G_\\varepsilon'=-xG_\\varepsilon/(2\\varepsilon)$ gives the ODE $\\widehat G_\\varepsilon'=-2\\varepsilon\\xi\\widehat G_\\varepsilon$, with initial value one. Thus $\\widehat G_\\varepsilon=e^{-\\varepsilon\\xi^2}$. For the inverse identity use this same result on $G_{1/(4\\varepsilon)}(\\xi)=\\sqrt{\\varepsilon/\\pi}e^{-\\varepsilon\\xi^2}$ at frequency $-x$: its transform is $e^{-x^2/(4\\varepsilon)}$. Multiplying by $\\sqrt{\\pi/\\varepsilon}/(2\\pi)$ gives $G_\\varepsilon(x)$ directly.

**ANA-SP-T11 — Inversion on Schwartz functions.** Fubini, justified by $f\\in L^1$ and Gaussian integrability, gives

$$\\frac1{2\\pi}\\int\\widehat f(\\xi)e^{-\\varepsilon\\xi^2}e^{ix\\xi}d\\xi=(f*G_\\varepsilon)(x).$$

The right side converges uniformly to $f$: use uniform continuity in a small translation neighborhood and the Gaussian tail outside it. The left side tends to the stated inverse integral by DCT, since $\\widehat f\\in L^1$. This proves inversion, including its $2\\pi$ factor, without presupposing a unitary transform. $\\square$

**ANA-SP-T12 — Plancherel and extension.** Insert the inverse formula for $g$ in $\\int f\\overline g$ and use Fubini, now justified by $\\|f\\|_1\\|\\widehat g\\|_1<\\infty$. Then

$$\\int f\\overline g\\,dx=\\frac1{2\\pi}\\int\\widehat f\\,\\overline{\\widehat g}\\,d\\xi.$$

Taking $g=f$ gives an isometry from $L^2(dx)$ into $L^2(d\\xi/(2\\pi))$ on a dense class. Completeness gives a unique isometric extension. It is onto: inversion maps Schwartz functions back to Schwartz functions (the inverse is a scaled reflected forward transform), so the range contains a dense class; an isometric image of a complete space is closed. This proves unitarity between the **named measures**, not a missing-factor slogan. The extended transform of a general $L^2$ element is an equivalence class; the original integral need not converge absolutely at each frequency. $\\square$

For $m\\in L^\\infty(d\\xi)$, multiplication by $m$ is bounded on frequency $L^2$ with norm at most $\\|m\\|_\\infty$. Finite-measure subsets of level sets near the essential supremum, normalized as indicators, prove equality. Conjugating by Plancherel therefore gives a bounded Fourier multiplier of that same norm. The heat multipliers $m_t(\\xi)=e^{-t\\xi^2}$, $t\\ge0$, compose by addition of $t$ and are contractions; DCT applied to $|(e^{-t\\xi^2}-1)\\widehat f|^2$ proves strong continuity at zero. For $t>0$ the kernel is $G_t$ on the dense class and then by bounded extension.

Real-line heat is not compact. On an interval where $m_t\\ge c>0$, choose infinitely many disjoint positive-measure subsets and their normalized indicators. Their multiplier images have disjoint supports and mutual distance at least $c\\sqrt2$. Plancherel transfers the obstruction to physical space. Decay of a multiplier at infinity alone does not make multiplication compact on a nonatomic continuum.

## ANA-SP-H3 — Circle Poisson operators and a contrasting compactness theorem

On normalized circle $L^2$, define $T_\\rho$ by multiplying coefficient $n$ by $\\rho^{|n|}$ for $0\\le\\rho<1$; at $\\rho=0$ retain only the constant mode. The geometric series sums its kernel to

$$P_\\rho(t)=\\frac{1-\\rho^2}{1-2\\rho\\cos t+\\rho^2}.$$

It is positive, normalized, and has the stated Fourier coefficients, so convolution realizes the same operator. Parseval shows contraction, self-adjointness and positivity, with norm one because constants are fixed. Also $T_\\rho T_\\sigma=T_{\\rho\\sigma}$. Dominated convergence of the coefficient-square sum proves $T_\\rho f\\to f$ in $L^2$ as $\\rho\\uparrow1$.

**ANA-SP-T13 — Compactness and its boundary.** Truncation to $|n|\\le N$ has finite rank, and the operator-norm error is exactly $\\rho^{N+1}$ for $0<\\rho<1$, by Parseval and testing the next basis vector. A norm limit of finite-rank operators is compact: for a bounded sequence choose successive subsequences converging under each finite-rank approximation, take a diagonal subsequence, and use the uniform operator-norm error to make its true images Cauchy. Completeness supplies the image limit. Thus $T_\\rho$ is compact for $0\\le\\rho<1$.

Define $T_1=I$ by coefficients; the pointwise kernel formula at $\\rho=1$ is not used. Identity is not compact on this infinite-dimensional space, as the orthonormal modes show. If $\\rho>1$, their image norms $\\rho^{|n|}$ are unbounded, so this multiplier is not a bounded operator on full $L^2$, even if one special smooth input still has a convergent formula. These facts are a proved compact diagonal family, not a claim to have proved the full compact-self-adjoint spectral theorem stated in the native overview. $\\square$

## ANA-SP-C1 — Annular Cauchy and Laurent expansions

**ANA-SP-T14 — Annular Cauchy formula.** Let $f$ be holomorphic on $r<|z|<R$. If $r<s<|z|<t<R$, with both circles counterclockwise, then

$$f(z)=\\frac1{2\\pi i}\\int_{|\\zeta|=t}\\frac{f(\\zeta)}{\\zeta-z}d\\zeta-
\\frac1{2\\pi i}\\int_{|\\zeta|=s}\\frac{f(\\zeta)}{\\zeta-z}d\\zeta.$$

**Proof of the boundary step.** Remove a small closed disk about $z$ between the two circles. Replace each of the three circular boundaries by sufficiently fine inscribed polygons. Compact separation from the excluded center and from the edges of the original annulus keeps these polygons and the remaining region inside the holomorphy domain of $f(\\zeta)/(\\zeta-z)$. Each circular subarc and its chord lie in a common primitive disk; their integrals are equal, not merely numerically close. The finite polygonal region with its two holes can be triangulated, using the same explicitly named elementary finite planar triangulation fact as the prerequisite. Sum Goursat over the triangles: internal edges cancel and the outer integral equals the two inner integrals. The small-circle integral tends to $2\\pi i f(z)$ by the continuity remainder estimate already proved in ANA-ADV-T04. This proves the displayed formula for curved boundaries without assuming an arbitrary homology theorem. $\\square$

On the outer circle expand $(\\zeta-z)^{-1}=\\sum_{n\\ge0}z^n\\zeta^{-n-1}$; on the inner circle expand $(\\zeta-z)^{-1}=-\\sum_{j\\ge0}\\zeta^jz^{-j-1}$. Both are uniformly convergent geometric series on their respective integration circles, locally uniformly for $z$ in a smaller closed subannulus. Integration therefore gives

$$f(z)=\\sum_{n\\in\\mathbb Z}a_nz^n,\\qquad
a_n=\\frac1{2\\pi i}\\int_{|\\zeta|=u} f(\\zeta)\\zeta^{-n-1}d\\zeta,$$

for any $r<u<R$. The coefficient integral is independent of $u$, by the same annular zero-boundary argument applied to its holomorphic integrand. On each compact subannulus choose inner and outer radii strictly beyond it; geometric bounds prove uniform absolute convergence of the two series. Termwise integration around a circle recovers each coefficient, proving uniqueness. This supplies the Laurent theorem, rather than asserting a formal two-sided series.

## ANA-SP-C2 — Singularities, residues and zero counting

**ANA-SP-T15 — Classification and Casorati.** At an isolated singularity taken as zero, no negative Laurent terms means a removable singularity; finitely many, with highest order $m\\ge1$, means a pole of order $m$; infinitely many means an essential singularity. If $f$ is bounded near the puncture, the coefficient bound $|a_{-k}|\\le M(s)s^k$ and $s\\downarrow0$ make every negative coefficient zero, proving removability. Conversely a removable extension has only its Taylor terms. A pole is $z^{-m}$ times a holomorphic function nonzero at zero, so its finite principal part follows by Taylor; the converse follows by multiplying the Laurent series by $z^m$.

At an essential singularity the image of every punctured neighborhood is dense in $\\mathbb C$. Indeed, if it missed a disk $B(w,\\varepsilon)$, then $g=1/(f-w)$ would be bounded there and extend across zero. If $g(0)\\ne0$, $f=w+1/g$ would be removable. If $g(0)=0$, the Taylor/identity theorem gives a finite zero order (it cannot be identically zero), so $f$ would have a pole. Both contradict essentiality. This proves density, not Picard's stronger value-distribution theorem. $\\square$

The residue is the coefficient $a_{-1}$, regardless of whether the principal part is finite. Termwise circle integration gives $\\int_{|z|=u}f(z)dz=2\\pi i a_{-1}$. Finite boundary sums follow by removing disks and using the polygon/primitive proof, with each small-circle integral given by that coefficient. This genuinely extends the finite-pole prerequisite to isolated essential singularities in a bounded finite-puncture region.

**ANA-SP-T16 — Argument principle and Rouché.** Suppose a meromorphic $f$ is defined on a neighborhood of the closed unit disk and has no zero or pole on its boundary. Zeros and poles inside are finite in number, counted with multiplicity. Locally at a zero or pole, write $f(z)=(z-a)^m u(z)$ with integer $m$ and holomorphic nonzero $u$. Then

$$f'/f=\\frac m{z-a}+u'/u.$$

Its residue is $m$, positive for a zero and negative for a pole. The finite contour theorem applied to $f'/f$ yields

$$\\frac1{2\\pi i}\\int_{|z|=1}\\frac{f'(z)}{f(z)}dz
=N_{\\mathrm{zeros}}-N_{\\mathrm{poles}}.$$

The left side is also the winding index of the contour $f(e^{it})$ about zero by the chain rule. Finiteness follows from isolated zeros/poles and compactness, choosing a slightly larger disk in the given neighborhood. The constant nonzero case has zero count. A zero on the boundary invalidates $f'/f$ there; it need not invalidate the ordinary integral of $f$.

For holomorphic $f,g$ near the closed disk with $|g|<|f|$ on the circle, $f+ug$ is nonzero there for every real $u\\in[0,1]$. Its winding index is an integer and varies continuously in $u$: compactness gives a positive boundary separation and hence continuity of the parameter integral. An integer-valued continuous function on an interval is constant. The argument principle therefore gives the same number of zeros for $f$ and $f+g$. This proves Rouché with its strict boundary hypothesis. For $z^m+\\varepsilon$ with $0<\\varepsilon<1$, compare with $z^m$ to obtain $m$ interior zeros. For $\\varepsilon>1$, compare with the constant to obtain none. At $\\varepsilon=1$, direct algebra gives $m$ roots on the unit circle and zero strictly inside; the Rouché/log-derivative contour hypotheses fail even though the polynomial itself remains holomorphic and integrable. $\\square$

## ANA-SP-C3 — Continuation along paths and monodromy

A holomorphic **germ** at a point identifies functions agreeing on a neighborhood of that point. Continuation along a continuous path is given by local holomorphic representatives on a finite chain of disks covering consecutive closed subpaths, with equal germs at transitions. Smaller disks/refinement put each transition in an open overlap. Identity on the connected intersection of two disks makes continuation along a fixed path unique: refine two chains to a common partition and propagate their initial agreement across each overlap.

**ANA-SP-T17 — Homotopy invariance of a continuable germ.** Fix an initial germ at $a$ in an open connected $U$. Assume it can be continued along **every path in $U$ starting at $a$**. For two paths with the same endpoints that are homotopic with endpoints fixed in $U$, their terminal germs agree.

**Proof.** For a fixed path in the homotopy choose one finite continuation chain. Each closed subpath is compactly inside its disk, and each transition lies in a small neighborhood on which the neighboring representatives agree. There is therefore a positive uniform perturbation tolerance for this particular finite chain: a sufficiently uniformly close path with the same endpoints uses the same representatives and transition neighborhoods, and has the same terminal germ. A continuous homotopy on the compact square is uniformly continuous, so paths at sufficiently nearby homotopy parameters are that close. The terminal germ as a function of the homotopy parameter is locally constant. The interval is connected, hence it is constant. This uses a finite chain at each fixed path; it does not invent one global continuation radius throughout $U$. Existence for the homotopy's paths comes from the stated all-path assumption. $\\square$

On a simply connected domain the terminal germ is consequently independent of the path. The elementary path fact used here is that paths with the same endpoints differ by their concatenated closed loop; a contraction of that loop gives a relative-endpoint homotopy after cancelling a path followed by its reverse. If a contraction moves its basepoint, follow that basepoint track outward and back to keep it fixed. These cancellations/reparametrizations are continuous. Define the global value by a terminal germ; on a small final disk it agrees with its local representative, so it is holomorphic. This is the monodromy corollary. **Simple connectivity gives independence, not the existence of continuation along every path.**

A logarithm germ near 1 continues along paths avoiding zero using local primitives of $1/z$ and the initial value. Along a once-around circle its change is $2\\pi i$; winding $k$ gives $2\\pi i k$. The induced square-root germ $e^{L/2}$ changes by $(-1)^k$. Thus two turns can return the root while the logarithm still changes by $4\\pi i$. A path through zero is refused for this continuation. The native series $\\sum z^{2^n}$ has the unit circle as a natural boundary by its complete dyadic-root proof; topology cannot create the missing all-path existence hypothesis. General Riemann mapping, Riemann surfaces and stronger pointwise Fourier theorems are further study, not consequences of these arguments.

## ANA-SP-JOIN — Boundary vectors and holomorphic projections

The nonnegative Fourier modes form a closed subspace $H^2\\subset L^2$ on the circle: each negative coefficient is a continuous functional, so the common kernel is closed. T03 and Fourier completeness give its projection $P_+$. For a coefficient sequence $(c_n)_{n\\ge0}\\in\\ell^2$, the series $F(z)=\\sum c_nz^n$ converges uniformly on each smaller disk by Cauchy–Schwarz, with

$$|F(z)|\\le\\left(\\sum|c_n|^2\\right)^{1/2}(1-|z|^2)^{-1/2}.$$

The derivative series is locally uniformly convergent by the same argument with $n|z|^{n-1}$, proving holomorphy. This interior evaluation is bounded in the Hardy norm. Boundary point evaluation on full $L^2$ remains undefined on equivalence classes; these are different assertions.

For a general $f\\in L^2$ on the circle, expansion of $(\\zeta-z)^{-1}$ uniformly on $|\\zeta|=1$, $|z|<1$, gives

$$\\frac1{2\\pi i}\\int_{|\\zeta|=1}\\frac{f(\\zeta)}{\\zeta-z}d\\zeta
=\\sum_{n\\ge0}\\widehat f(n)z^n.$$

The integral here uses a chosen measurable circle trace and is independent of its null-set changes. Its value is the analytic projection, not necessarily the value of a meromorphic formula inside the disk. An interior pole in that formula prevents naive application of the disk Cauchy formula. The mixed portfolios make this difference explicit.

## ANA-SP-CHECK — Twenty mixed checkpoints with complete models

Attempt before comparing. A failed condition requires a changed statement or a refusal, not a citation to a theorem whose hypotheses fail.

**ANA-SP-Q01.** Where does T01 handle infinite outer measure without subtracting infinity? **Model:** the disjoint-union proof uses lower bounds by finite partial sums and the unchanged remainder, then their extended nonnegative limit. Countable subadditivity supplies the other inequality. It never cancels an infinite quantity. For half-lines, if outer measure of A is infinite, subadditivity forces the split sum infinite too; the finite case alone uses the epsilon strip subtraction.

**ANA-SP-Q02.** Why not approximate an arbitrary product-measurable set by increasing finite rectangle unions? **Model:** that assertion is false in general. T02 instead forms the lambda-system of indicators with measurable sections and the integration identity, proves complement closure in the finite setting and disjoint closure by MCT, then applies the proved pi-lambda lemma. Sigma-finite patching and simple approximation follow. Product-measure existence remains a named construction input.

**ANA-SP-Q03.** Give an unattained projection infimum. **Model:** for x=(2^-n) indexed n>=1 in ell2, its finite truncations belong to c00 and their squared tail distance is sum(n>k)4^-n=4^-k/3. The infimum is zero but x is not finite support, so no point of c00 attains it. The closed-subspace projection proof uses completeness plus closedness at exactly that limiting step.

**ANA-SP-Q04.** Audit conjugation in T04. **Model:** with first-slot linearity, <x,cg>=conjugate(c)<x,g>. Normalizing v so T(v)=1 gives g=v/||v||² without an extra phase. In the bilinear Lp formula T(f)=integral f h, its Hilbert representing vector is conjugate(h), not h. Test f_M with the conjugate phase of h to make f_M h nonnegative.

**ANA-SP-Q05.** Can a point mass have a Lebesgue density? **Model:** no. Its mass on a singleton is one although that singleton has Lebesgue measure zero. Absolute continuity fails. In T05 the condition eliminates the set {g=1} for lambda=mu+nu; without it h=g/(1-g) would not yield the requested ordinary density there.

**ANA-SP-Q06.** Separate Hahn/Jordan from Hahn–Banach. **Model:** T06 decomposes a finite-variation signed measure into positive and negative restrictions by attaining its infimum through tail unions. T08 extends a linear functional dominated by a sublinear bound using a one-dimensional extension and Zorn's lemma. One does not imply the other merely because both names contain Hahn. The signed reduction plus positive RN, not a label, supplies the Lp density.

**ANA-SP-Q07.** Why is the truncated duality test legitimate before h is known to be in Lq? **Model:** on finite measure, |h|^(q-1)1(|h|<=M) is bounded. It can be approximated by bounded simple functions; h is already L1 from finite RN, so dominated convergence establishes the pairing identity on that test. A_M<=||T||A_M^(1/p) bounds the truncated q integral; MCT then proves Lq membership. Zero A_M needs no division.

**ANA-SP-Q08.** Prove the infinity endpoint is larger on counting measure. **Model:** the limit functional on convergent sequences is bounded norm one. Its Hahn–Banach extension vanishes on every coordinate vector and takes one on the constant sequence. An ell1 representing sequence would therefore have every coordinate zero but pair to one with the constants, a contradiction. No shift invariance or uniqueness of the extension was proved.

**ANA-SP-Q09.** What fails for T_n(x)=n x_n on c00? **Model:** each operator is bounded with norm n, and for each finite-support x only finitely many outputs are nonzero, so the family is pointwise bounded. The domain is incomplete in ell2 norm. On complete ell2, x_n=n^-3/4 is square-summable but n x_n=n^1/4 is unbounded, so pointwise boundedness fails there instead.

**ANA-SP-Q10.** Does closed graph make every differential operator bounded? **Model:** no. The theorem requires an operator defined on all of a Banach domain with that domain norm, valued in a Banach space. A derivative on a proper dense differentiability domain does not satisfy that condition. The proof passes through the Banach graph and a bounded inverse to its projection; it cannot discard domain information.

**ANA-SP-Q11.** Why does the density proof exclude infinity? **Model:** the cutoff error is supported on a small-measure set and its finite-p norm is bounded by a power of that measure. A jump still has essential-supremum error at least half its height against every continuous approximation across it. On the line, constant one also stays distance at least one from every compactly supported function. Small exceptional measure does not control supremum error.

**ANA-SP-Q12.** State Plancherel with units of measure intact. **Model:** for the forward integral with no factor, integral|hat f|² dxi=2pi integral|f|² dx. The isometry is from L2(dx) to L2(dxi/(2pi)), or after a 1/sqrt(2pi) rescaling to ordinary L2(dxi). Gaussian regularization first proves Schwartz inversion, Fubini gives the pairing identity, and smooth density plus completeness/onto proves extension.

**ANA-SP-Q13.** Why do decaying frequency weights fail to make real-line heat compact? **Model:** real-line multiplication by a nonzero multiplier bounded below on a positive-measure interval has infinitely many separated images of normalized disjoint indicators. Circle Poisson instead has countably discrete weights tending to zero, with finite-rank truncation error rho^(N+1); it is compact for rho<1. At rho=1 it is identity and noncompact; rho>1 is unbounded on the full circle space.

**ANA-SP-Q14.** Expand 1/(z-a) on both sides of its pole, 0<a<1. **Model:** for |z|<a it is -sum(n>=0)z^n/a^(n+1); for |z|>a it is sum(k>=1)a^(k-1)z^-k. Both are geometric, and their domains differ. A formal coefficient list without its annulus cannot identify a Laurent expansion or authorize crossing the pole.

**ANA-SP-Q15.** Classify exp(1/z) and integrate it around a small positive circle. **Model:** its Laurent series has infinitely many negative terms, so zero is essential. Its residue is the coefficient of z^-1, namely one, giving integral2pi*i. Casorati says every punctured-neighborhood image is dense; that theorem does not itself assert Picard's stronger omission statement.

**ANA-SP-Q16.** Audit z^4+1 on the unit circle. **Model:** its four roots exp(i(pi/4+k*pi/2)), k=0,1,2,3, lie on the circle and none strictly inside. Its ordinary contour integral exists (and equals zero), while (z^4+1)'/(z^4+1) has boundary poles and its ordinary argument-principle contour is refused. Non-strict Rouché inequality cannot repair the failed boundary condition.

**ANA-SP-Q17.** Count interior zeros of z^3+2 without numerical roots. **Model:** on |z|=1, |z^3|=1<2. Compare with the nonzero constant2 by Rouché to get zero interior roots. Direct algebra gives root moduli2^(1/3)>1, independently confirming the count. Comparing in the wrong direction with z^3 would violate the strict inequality.

**ANA-SP-Q18.** Does simple connectivity guarantee continuation exists? **Model:** no. T17 assumes continuation along every path in the domain and proves independence under homotopy. Its finite-chain perturbation argument only compares already available continuations. The native dyadic-power series has dense singularities on the unit circle, so its lack of continuation across them is not repaired by drawing a simply connected larger region.

**ANA-SP-Q19.** For f(z)=1/(1-a z)+b/(z-a), what is its interior Cauchy transform at z=a? **Model:** expansion of the boundary kernel gives P+f(z)=1/(1-a z), hence the value at a is1/(1-a²). Equivalently the integrand at z=a has the simple residue1/(1-a²) from its first term and residue zero from b/(zeta-a)². The undefined meromorphic value f(a) is never evaluated. For z!=a the extra residue b/(a-z) cancels f's interior-pole term.

**ANA-SP-Q20.** What does a certified software table establish? **Model:** analytical tail/quadrature bounds and outward arithmetic enclosures can certify a particular finite calculation. A grid maximum alone is not a continuum supremum; the derivative and mesh bound must be added. A labelled finite Gibbs lobe is not a sampled proof of its asymptotic limit. Unsupported Math-library error assumptions are not interval certificates. The reference below encloses pi, roots and trigonometric evaluations explicitly.

## ANA-SP-SYNTHESIS — Fixed primary, changed and later-return tasks

For each row use normalized circle measure mu=dtheta/(2pi), 0<a<1, and the actual meromorphic boundary trace

$$f(z)=\\frac1{1-az}+\\frac b{z-a},\\quad |z|=1.$$

Let C=||f||2², w=|f|²/C and nu(E)=integral_E w dmu. The gamma column instead specifies g(x)=x^-gamma on (0,1), with g_n=min(n,g), for the native five-item measure capstone. Do not confuse the two measure spaces.

| Form | a | b | rho | N | tau | m | epsilon | gamma | Log path |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ANA-SP-P001 | 1/2 | 1/3 | 1/2 | 2 | 1/2 | 2 | 1/4 | 1/4 | winding1 |
| ANA-SP-C001 | 1/3 | 2 | 2/3 | 3 | 1/3 | 3 | 2 | 1/3 | winding-2 |
| ANA-SP-R001 | 2/3 | 1 | 1 | 4 | 1 | 4 | 1 | 1 | through-zero |

For the logarithm start with the germ of Log near1. Winding paths are the indicated repeated oriented unit circles. The return path is the straight segment from1 to-1, which passes through zero. Polynomial work concerns z^m+epsilon on the unit disk. Neumann work concerns I-tau*T_rho. The Lp project has its own parameters:

| Form | alpha | beta | Requested p |
| --- | --- | --- | --- |
| ANA-SP-P001 | 1/4 | 3/4 | 2 |
| ANA-SP-C001 | 0 | 2 | 2 |
| ANA-SP-R001 | 1/2 | 1/2 | 2 |

### ANA-SP-FIELDS — Twelve required fields for every portfolio

1. Complete the measure course's five capstone items for g_n: space, limit, theorem ledger, exact integral/limit, changed failure and representative/class distinction.
2. Prove the Lp phase region for x^-alpha(1+x)^-beta, including both equality divergences and the separate infinity criterion. Classify the requested norm and use the numerical reference only for finite integrable requests.
3. Derive C and the RN probability density, null-set equivalence and any norm-equivalence/lower-bound restriction. Reconstruct positive RN and explain the signed/duality extension.
4. Compute every positive/negative Laurent/Fourier coefficient, Hardy projection and residual norm; evaluate its analytic Cauchy transform at a without evaluating f(a).
5. Prove the applicable circle multiplier properties, compactness or its failure, the full-space rho>1 refusal, and the Neumann inverse/boundary. Contrast real-line heat.
6. Compute exact raw and Fejér degree-N squared errors from the coefficients, state convergence modes and a failed stronger pointwise/supremum inference.
7. Reconstruct line Fourier inversion/Plancherel, its normalization, density input and multiplier extension; keep pointwise integrals distinct from the L2 extension.
8. State the actual Laurent annulus, zeros and poles, residue integral of f and valid or refused argument-principle count; handle cancellations/degenerate parameters honestly.
9. Solve the polynomial and germ-continuation tasks, including the changed Rouché comparison and return refusals. Distinguish direct boundary root counts from a refused contour theorem.
10. Reconstruct the assigned general proof set: P T01/T03/T14; C T05–T08/T11–T12; R T02/T09–T10/T15–T17. All other theory and checkpoints remain required, not optional citations.
11. Execute both complete bounded laboratories below, retain their printed inputs/outputs, verify the displayed analytic/quadrature/rounding certificates, and report every required error/overshoot/decay/aliasing field. A hand-only rewrite does not complete this field.
12. Repair the earliest unjustified claim, keep its first/comparison/corrected versions and help/exposure, and give a theorem/import/finite-software/unsupported-stronger-claim ledger.

### ANA-SP-COMMON — Exact derivations used in all three complete keys

On a<|z|<1/a, geometric series give coefficients c_n=a^n for n>=0 and c_-k=b a^(k-1) for k>=1. Their two disjoint square sums give

$$C=\\frac{1+b^2}{1-a^2},\\quad \\|P_+f\\|_2^2=\\frac1{1-a^2},\\quad
\\|f-P_+f\\|_2^2=\\frac{b^2}{1-a^2}.$$

The analytic Cauchy transform is1/(1-az). For rho<=1 its Poisson norm squared is (1+b²rho²)/(1-a²rho²). Raw degree-N residual and Fejér bias satisfy

$$E_N=\\frac{a^{2N}(a^2+b^2)}{1-a^2},\\qquad
E_N^{Fejer}=E_N+\\frac{a^2+b^2}{(N+1)^2}\\sum_{k=1}^Nk^2a^{2k-2}.$$

These are exact squared errors under normalized measure. The numerator of f is (1-ab)z+(b-a); a zero is (a-b)/(1-ab) when the denominator is nonzero. If b=0 the apparent interior pole cancels, and if ab=1 this zero formula is refused and the remaining constant numerator is inspected directly. In the selected rows b!=0 and ab!=1.

For 0<gamma<1, split at x=n^(-1/gamma) to obtain

$$\\int_0^1g_n=\\frac1{1-\\gamma}-\\frac\\gamma{1-\\gamma}n^{-(1-\\gamma)/\\gamma}.$$

For gamma=1 it is1+log n. MCT applies in all three rows, with an infinite limit allowed. The nearby changed sequence n*1_(0,1/n) instead tends pointwise to zero with integral one; a common integrable envelope cannot exist. Modifying a null point changes representatives, not the Lebesgue integrals or finite-p classes when they exist.

The Lp phase conditions are alpha*p<1 and (alpha+beta)*p>1 for finite p>=1, by comparison at zero and infinity. Equality gives the divergent logarithmic integral. For infinity they are alpha<=0 and alpha+beta>=0: these conditions bound both ends and continuity bounds the remaining compact interval. The constant case alpha=beta=0 belongs to infinity but no finite p. These criteria cover arbitrary real alpha,beta, not only the listed tests.

### ANA-SP-P001 — Complete primary model

1. On (0,1) with Lebesgue measure, g_n=min(n,x^-1/4) increases pointwise to x^-1/4. Its exact integral is4/3-(1/3)n^-3, tending to4/3. MCT applies by nonnegativity/monotonicity; DCT also applies with the integrable limit envelope. The changed spike has pointwise limit0 but integral1, so copying DCT would fail its envelope condition. Endpoint/null modifications do not affect the integral or Lp class; this supplies all five capstone items.
2. Near zero the p-power behaves as x^-p/4 and at infinity as x^-p. Thus precisely1<p<4 is allowed among finite p>=1, and p=infinity fails near zero. At p=1 the tail diverges logarithmically; at p=4 the singular end does. At p=2 substitute x=t²: integral f²=integral_0^infinity 2(1+t²)^-3/2 dt=2, with primitive2t/sqrt(1+t²), so the norm is sqrt2. The required code computes its truncated norm with both discarded-end bounds; it must not substitute a finite cutoff for a divergent boundary norm.
3. C=40/27, so w=(27/40)|f|² is nonnegative with integral1. The only numerator zero is1/5, off the unit circle, so w is positive there. A conservative bound is8/135<=w<=24/5: numerator modulus is at least2/3 and denominator modulus at most9/4, while |f|<=(1+b)/(1-a)=8/3 gives the upper bound after normalization. Hence mu and nu have the same null sets and their L2 norms are equivalent with square-root constants from these bounds. T05 supplies the general RN proof; T06–T07 explain signed measures, the phase test and sigma-finite duality rather than treating a density formula as a universal representation proof.
4. Coefficients are(1/2)^n for n>=0 and (1/3)(1/2)^(k-1) at n=-k. The Hardy projection is1/(1-z/2), with squared norm4/3 and residual4/27. The original trace has negative modes and is not a disk Hardy boundary function. Its analytic Cauchy transform at a=1/2 is4/3. In the contour calculation the double-pole term has zero residue; the undefined f(1/2) is never used.
5. T_(1/2) is a positive self-adjoint norm-one compact circle operator, with finite-rank error(1/2)^(J+1). The applied trace has squared norm148/135. I-(1/2)T_(1/2) has inverse norm2, attained on constants, and Neumann tail(1/2)^(J+1)/(1-1/2). Identity at rho=1 is noncompact, and rho>1 is unbounded on all modes. Real-line heat remains noncompact because its nonzero multiplier acts on a continuum of frequency directions.
6. At N=2 the raw squared error is13/432. The weighted finite bias is13/162, giving Fejér squared error143/1296. The finite bias comes from tapering even retained modes; Fejér is not identical to raw projection. Increasing raw degrees converges in L2 by density; Fejér has the separate continuous-uniform and finite-p norm theorems. A generic L2 conclusion alone does not certify all point values or a grid supremum.
7. Gaussian normalization is obtained by Tonelli/proper polar integration and MCT, not an assumed Fourier inverse. Its transform ODE gives e^-epsilon*xi²; regularization then gives Schwartz inversion. Fubini proves the pairing formula with1/(2pi), and proved smooth density extends it onto L2(dxi/(2pi)). The multiplier norm is its essential supremum by normalized indicator tests. Retain these hypotheses and the first-slot/bilinear density distinction when comparing the circle's normalized coefficient formulas.
8. The Laurent annulus is1/2<|z|<2. The poles are1/2 and2; only the first is inside the unit circle. The numerator zero1/5 is also inside, so the argument-principle count is1-1=0. The residue of f at1/2 is1/3, giving ordinary integral2pi*i/3. The zero count concerns f'/f and is a different integral. Finite geometric expansions and coefficient uniqueness justify the annulus, not a numerical contour drawing.
9. z²+1/4 has roots plus/minus i/2, two inside, in agreement with comparing to z² by strict Rouché. A once-around logarithm continuation changes by2pi*i and the root germ changes sign. Local primitives justify continuation avoiding zero; all-path existence and simply connected homotopy independence are distinct. A natural boundary is an existence failure rather than a branch choice.
10. For T01 use finite splitting, disjoint partial sums and outer subadditivity, keeping infinity uncancelled; null subsets prove completeness. For T03 the parallelogram identity makes a minimizing sequence Cauchy, closedness retains its limit, and quadratic variations prove orthogonality/uniqueness. For T14 replace separated circle arcs by equal primitive chords, sum Goursat on a polygonal region with holes, shrink the small circle, then expand the two boundary kernels uniformly. These complete proof models are in their named theorem sections; each stated step must appear in the submitted reconstruction.
11. Execute all three norm configurations and all three Fourier degrees/grids below, not only a favorable output. Check that the singular p2 integral2 lies in the reported enclosure, with near and tail bounds retained. For the smooth/jump comparison report raw and Fejér errors separately, the two lobe roots/height/width, coefficient decay and the endpoint-grid alias witness. The code's outward arithmetic encloses rounding; the analytic derivative estimates audit quadrature and off-grid claims. Exact identities here supply the public mathematical comparisons for those outputs.
12. A first claim that the Cauchy transform equals the meromorphic f throughout the disk must be repaired at the missing interior holomorphy hypothesis. Preserve that first line beside the corrected Hardy projection and the finite contour calculation. Distinguish proved theorems, the product-measure/Zorn/polar inputs, exact finite arithmetic, certified numerical intervals and an unsupported stronger pointwise claim. Keep dated first/comparison/corrected work and actual key/reference exposure; none certifies a grade or unseen transfer.

### ANA-SP-C001 — Complete changed model

1. On the same Lebesgue interval, g_n=min(n,x^-1/3) increases to x^-1/3 and has integral3/2-(1/2)n^-2, tending to3/2. MCT and the integrable DCT envelope both apply. The changed spike again has integral1 and pointwise limit0, so its missing envelope must be recorded. A null-point alteration changes the chosen representative, not its integrals/classes. The space, limit, theorem ledger, direct integral, changed failure and representative distinction satisfy the capstone requirements.
2. Here alpha=0,beta=2. Near zero there is no singularity, and tail integrability requires2p>1; therefore every finite p>=1 is admitted. Infinity is admitted with essential supremum1, approached near zero. The requested p2 integral is integral(1+x)^-4 dx=1/3, norm1/sqrt3; p1 integral is1. The software's changed smooth comparison actually computes both through t=x/(1+x) on the full compactified interval, with zero discarded regions and its stated midpoint error. These benign endpoints do not erase the divergent equalities in the general phase diagram.
3. C=45/8, so w=(8/45)|f|² integrates to1. Its zero-5 is off the unit circle. Conservative bounds1/10<=w<=18/5 follow from numerator minimum4/3, denominator maximum16/9 and |f|<=9/2. Thus the two measures are equivalent and their L2 norms have two-sided bounds. For general densities reconstruct lambda=mu+nu,0<=g<=1, absolute continuity excluding g=1, and h=g/(1-g); finite-variation signed reduction and truncated conjugate-phase tests then give full finite-p duality. A finite numerical density alone proves none of that general theorem.
4. The coefficients are(1/3)^n at n>=0 and2(1/3)^(k-1) at n=-k. Projection is1/(1-z/3), with norm squared9/8 and residual9/2. Its Cauchy transform at a=1/3 equals9/8, not undefined f(1/3). Away from that coalesced point the extra residue2/(1/3-z) cancels the interior-pole term; at the point the b/(zeta-a)² term has zero residue. Negative modes prevent calling the original trace holomorphic on the whole disk.
5. T_(2/3) is compact with norm-one positive self-adjoint multiplier; finite-rank error(2/3)^(J+1). Its applied squared norm is225/77. I-(1/3)T_(2/3) has inverse norm3/2 on the constant mode and Neumann error(1/3)^(J+1)/(1-1/3). The full-space rho>1 test must still use unbounded images of basis modes rather than this one rational trace. Real heat is a bounded strongly continuous semigroup with a different, noncompact frequency geometry.
6. N=3 gives raw squared error37/5832. Retained taper bias259/648 gives Fejér squared error296/729. The coefficient sum is a geometric calculation plus the finite weighted sum of k²a^(2k-2), not a grid fit. L2 convergence, Fejér uniform convergence for continuous representatives, and a deliberate aliasing failure answer different questions. The smooth polynomial's nonzero retained modes remain tapered for every finite N.
7. Retain the line transform forward integral and inverse1/(2pi). Schwartz differentiation/integration by parts are dominated by rapid-decay envelopes. The Gaussian calculation proves regularized inversion, then DCT removes the regularizer; Fubini yields Parseval and smooth density/closed isometric range proves onto. Multipliers are defined through this extension, not by assuming a pointwise Fourier integral for every L2 function. This is the same full proof as T11–T12 with the correct measure normalization, not an imported preview.
8. The Laurent annulus is1/3<|z|<3. The pole1/3 is inside; the pole3 and numerator zero-5 are outside. Hence the log-derivative count is0-1=-1. The ordinary integral of f is4pi*i because its interior residue is2. A negative winding here records the pole count and does not mean the contour orientation was reversed. The coefficient formula for a zero has valid denominator1-ab=1/3.
9. For z³+2 compare to the constant2, since1<2 on the boundary. There are zero interior roots; their moduli are2^(1/3)>1. Comparing to z³ would use the inequality backwards. Two clockwise logarithm turns give change-4pi*i; the root germ returns with factor1 although the logarithm did not return. These are defined continuations along paths avoiding zero, not permission to cross a singularity or a natural boundary.
10. T05's full proof uses the newly proved Hilbert Riesz theorem, then indicator tests and density transfer; sigma-finite patching must be common finite pieces. T06 attains the signed infimum by decreasing tail unions; T07 uses the bounded truncated phase test before proving Lq membership. T08's one-dimensional upper/lower bounds and Zorn supply extension, with a separate complexification. T11–T12 require the Gaussian ODE, approximate identity, Fubini and proved density before extension. The complete arguments in those sections are the public model and must be reconstructed with those dependencies, rather than treating their names as proofs.
11. Run the same complete two labs with their declared configurations and compare all outputs, including the changed smooth norm integrals1 and1/3. Record when a strict root sign was certified and when a bound includes analytical, quadrature and rounding contributions. A phase-table equality failure must be labelled divergent rather than hidden by a finite truncation. The square-wave report must retain height and width as defined below, with continuum versus grid errors and the separate endpoint alias grid named.
12. Repair a copied positive-degree winding count by finding the changed zero at-5 and checking which singularities are inside; preserve the correct residue integral separately. A correct norm or code table does not validate a wrong contour theorem. Keep theorem/input/software/refusal rows and dated first/comparison/corrected work with declared public exposure. This beta course does not turn self-review or a successful rerun into a qualification, retained mastery or a pointwise reconstruction theorem.

### ANA-SP-R001 — Complete later-return model

At another sitting close the earlier models and reconstruct all twelve fields. Declare previous exposure; the public return has no enforced delay or claim to be unseen.

1. g_n=min(n,1/x) is nonnegative, measurable and increasing to1/x on(0,1). Its integral is1+log n, so MCT gives infinity, legitimately. There is no integrable common envelope for this nonintegrable pointwise limit; DCT is refused. The nearby spike has a different limit0 and integral1 and fails interchange for its missing envelope. The space, infinite limit, theorem audit, direct calculation and null-representative distinction must all be retained rather than copying the two finite earlier answers.
2. The phase conditions for alpha=beta=1/2 are p/2<1 and p>1, namely1<p<2. At the requested p2 the singular end is logarithmically divergent, so its norm is infinite; the software must refuse a finite full-norm report even though any central cutoff is finite. Infinity fails near zero. At p1 the tail is another equality divergence. The general constant case still belongs to infinity only; these equality cases test the actual theorem, not a plot's appearance.
3. C=18/5 and w=(5/18)|f|² is a probability density with0<=w<=10. Its only boundary zero is-1, a null point, and w>0 almost everywhere, so nu and mu still have the same null sets. There is no positive essential lower bound: continuity makes w arbitrarily small on positive-length arcs near-1. Normalized indicators of those arcs have mu-L2 norm1 and nu-L2 norm tending to0. Thus equivalent measures do not by themselves give equivalent L2 norms. This is a changed weight condition, not a failure of RN or of ignoring a single null point.
4. Coefficients are(2/3)^n and(2/3)^(k-1) on the two mode sides. Projection is1/(1-2z/3), with squared norm9/5 and residual9/5. Its analytic Cauchy transform at a=2/3 equals9/5, while the meromorphic f(a) is undefined. The boundary zero at-1 does not invalidate these L2/Fourier/projection facts. The local value is an interior Hardy evaluation with its proved kernel bound, not boundary point evaluation on full L2.
5. rho=1 defines T1=I by coefficients; it is norm-one, positive and self-adjoint but noncompact. The applied squared norm remains18/5. With tau=1, I-tau*T1=0 has no inverse, so the Neumann claim is refused at its strict norm boundary. The limiting pointwise kernel expression is not used at rho=1. Modes also show rho>1 unbounded. Real-line heat at positive time is still noncompact for its separate nonatomic-frequency reason, and strong continuity does not imply compactness.
6. N=4 gives raw squared error3328/32805, taper bias11297/32805 and Fejér squared error325/729. The density's boundary zero does not change these coefficient-square identities. Retain the distinction between this smooth rational trace and the laboratory's jump example: exact L2 error is not a claim that a jump's raw uniform error vanishes. A grid match can also be an alias, as the required separate witness shows.
7. Rebuild the Gaussian normalization/ODE, Schwartz inversion and Parseval before extending by smooth density. The L2 transform remains a class-valued isometry for the named measures. A multiplier can be bounded and strongly continuous without being compact; the infinite disjoint frequency directions disprove real heat compactness. This argument retains completeness/density and the essential-supremum norm tests even though the circle parameter has reached its endpoint.
8. The Laurent annulus is2/3<|z|<3/2. The pole2/3 is inside and3/2 outside; numerator zero-1 lies ON the unit circle. The ordinary f integral exists and equals2pi*i by residue1. The argument-principle integral of f'/f is refused because of that boundary zero. There is no valid ordinary zero-minus-pole count on this contour from that theorem, and neither a half-residue nor a changed contour may be silently substituted.
9. z^4+1 has four boundary roots and zero strictly inside by direct algebra. Its ordinary polynomial integral exists and is zero, but the strict Rouché/log-derivative contour test is refused. The specified logarithm path1 to-1 crosses zero, so continuation along this path is refused; neither a logarithm change nor a root-sign factor is assigned. Choosing an upper or lower detour would create a different path and must be stated as new work.
10. Reconstruct T02 with the named product-measure input, finite pi-lambda proof and sigma-finite patch. T09–T10 need completeness and all-domain conditions; c00 and proper derivative domains give explicit failures. T15's bounded reciprocal proof gives Casorati, while T16 needs no boundary zeros and T17 needs all-path continuation plus a fixed-endpoint homotopy. Its finite-chain perturbation proves independence rather than existence. The full models in the theorem sections supply every step; preserving these changed failed hypotheses is part of this return.
11. Execute the full numerical labs and retain the phase routine's divergent p2 refusal for this row. Check the finite singular/smooth reference enclosures instead of inventing a finite value for the divergent return. Report every Fourier grid/method/error field, signed overshoot root brackets, height/width, coefficient decay and alias witness with the stated independent certificates. A computation that cannot certify a sign must stop or report unresolved; it cannot replace that sign by an interval midpoint guess.
12. Repair a first claim that every zero-free-inside picture authorizes the argument principle: the boundary is part of its hypotheses. Preserve the valid ordinary f integral and projection beside the refused log derivative, the valid RN equivalence beside failed norm equivalence, and identity beside failed compactness/Neumann inversion. Record exact models, code/help and dated first/comparison/corrected files. No sampled grid, source aggregation, remembered proof or public rerun establishes an unqualified theorem, observed learning outcome or verified delay.

### ANA-SP-OUTPUTS — Exact finite comparisons

| Form | Norm squared C | Projection squared | Residual squared | Poisson squared | Raw error squared | Fejer error squared | Numerator zero | Log derivative count | Residue of f |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ANA-SP-P001 | 40/27 | 4/3 | 4/27 | 148/135 | 13/432 | 143/1296 | 1/5 | 0 | 1/3 |
| ANA-SP-C001 | 45/8 | 9/8 | 9/2 | 225/77 | 37/5832 | 296/729 | -5 | -1 | 2 |
| ANA-SP-R001 | 18/5 | 9/5 | 9/5 | 18/5 | 3328/32805 | 325/729 | -1 | refuse | 1 |

| Form | Capstone integral limit | Requested Lp norm squared | Polynomial interior zeros | Polynomial boundary zeros | Log change / (2 pi i) | Root factor |
| --- | --- | --- | --- | --- | --- | --- |
| ANA-SP-P001 | 4/3 | 2 | 2 | 0 | 1 | -1 |
| ANA-SP-C001 | 3/2 | 1/3 | 0 | 0 | -2 | 1 |
| ANA-SP-R001 | +infinity | +infinity | 0 | 4 | refuse | refuse |

## ANA-SP-LABS — Required executable work and mathematical comparison

Run the public reference below in a standard JavaScript environment with BigInt support. It needs no packages, network, personal data or project imports. Keep the input object and returned exact endpoint strings. Every packed interval has integer endpoints divided by the returned common scale $2^{96}$; decimal rendering is optional and is not the certificate. The code performs actual quadrature, reconstruction, discrete coefficient estimation and signed root bracketing. Its finite tables supplement the general proofs rather than replacing them.

### ANA-SP-LP-LAB — Phase diagram and computed norm enclosures

The phase routine accepts exact rational alpha,beta and p>=1 or infinity. It applies both strict finite-p thresholds and the separate non-strict infinity thresholds. Include the three portfolio rows plus the constant case and both divergent equalities below. The finite table samples do not replace the preceding proof for arbitrary real parameters.

| Phase case | alpha | beta | p | Required status |
| --- | --- | --- | --- | --- |
| singular-p2 | 1/4 | 3/4 | 2 | finite |
| smooth-p2 | 0 | 2 | 2 | finite |
| return-boundary | 1/2 | 1/2 | 2 | divergent |
| singular-tail-equality | 1/4 | 3/4 | 1 | divergent |
| singular-origin-equality | 1/4 | 3/4 | 4 | divergent |
| constant-infinity | 0 | 0 | infinity | bounded |
| constant-finite | 0 | 0 | 2 | divergent |
| bounded-infinity | -1 | 1 | infinity | bounded |
| singular-infinity | 1/4 | 3/4 | infinity | unbounded |
| growing-infinity | -1 | 0 | infinity | unbounded |

For the singular finite p2 norm, set x=t². The transformed integrand is $g(t)=2(1+t^2)^{-3/2}$, with $|g''(t)|\\le36$ for t>=0 (differentiate to get $6(4t^2-1)/(1+t^2)^{7/2}$ and bound its two terms). On [a,b], the composite midpoint error is at most $36(b-a)^3/(24K^2)$; Taylor's theorem on each cell proves this by integrating its quadratic remainder. The omitted original regions x<epsilon=a² and x>T=b² have p-power integral at most2sqrt(epsilon)=2a and1/T respectively. The exact whole squared norm is2. The returned full interval adds these nonnegative discarded-region bounds and the central quadrature bound to the outward-enclosed actual midpoint sum; its square root is an actual norm enclosure.

| Norm row | t lower | t upper | Midpoint panels |
| --- | --- | --- | --- |
| LP-A | 1/16 | 4 | 64 |
| LP-B | 1/32 | 8 | 512 |
| LP-C | 1/64 | 16 | 4096 |

For the additional smooth norms of(1+x)^-2, substitute t=x/(1+x) on the **whole** interval(0,infinity). The integrand becomes(1-t)^(2p-2) on[0,1], with continuous endpoint extension. There are no discarded regions in this compactification. At p1 it is the constant1 and midpoint integration is exact; at p2 it is(1-t)² with second derivative2 and midpoint bound1/(12K²). The code computes both, reporting p-power integrals and the actual norms1 and1/sqrt3 as enclosures. These are additional computed norms, not mere symbolic phase rows.

| Smooth norm row | p | Midpoint panels |
| --- | --- | --- |
| SM-1 | 1 | 64 |
| SM-2 | 2 | 64 |

### ANA-SP-FOURIER-LAB — Smooth and jump reconstruction, width and aliasing

Use the smooth periodic cos x and the square wave q(x)=sign(sin x), assigning zero at its jumps. Its sine coefficients are4/(pi*n) for positive odd n and zero for even n. To justify the reconstruction without relying on an unproved pointwise slogan, sum the radially damped odd series as the imaginary part of half the logarithm of(1+re^(ix))/(1-re^(ix)); it tends to pi/4 for0<x<pi. Summation by parts bounds the remaining odd tail by1/((2m+1)|sin x|), uniformly also in the radial damping. It therefore identifies the ordinary odd series and gives, for N=2m-1 and distance at least delta from jumps,

$$|q(x)-S_Nq(x)|\\le\\frac4{\\pi(N+2)\\sin\\delta}.$$

Take delta=pi/4. The Fejér near region is exactly constant, so its far-mass estimate gives error at most2/((N+1)sin²(delta/2)). The code also supplies a usually sharper continuum certificate: an endpoint-grid maximum on the two closed away intervals plus B*pi/M, where B bounds the derivative and the mesh spacing is2pi/M. Both interval endpoints are included. A sampled maximum by itself is labelled only as sampled.

| Fourier row | Degree N | Midpoint quadrature grid M | delta / pi |
| --- | --- | --- | --- |
| FT-A | 1 | 32 | 1/4 |
| FT-B | 3 | 128 | 1/4 |
| FT-C | 7 | 512 | 1/4 |

For a reconstruction v, put A=sum of its absolute sine coefficients and B=sum of their frequency-weighted absolute values. On either constant piece of q, the derivative of|v-q|² is at most D=2(A+1)B. The even **midpoint** grid has jumps at cell boundaries. Its normalized squared-error quadrature differs from the true squared L2 error by at most D*pi/(2M), since each cell's integrated distance from its midpoint is h²/4. The independent exact errors are

$$1-\\frac8{\\pi^2}\\sum_{\\substack{1\\le n\\le N\\\\n\\ odd}}\\frac1{n^2}
\\quad\\text{and}\\quad
1-\\frac8{\\pi^2}\\sum_{\\substack{1\\le n\\le N\\\\n\\ odd}}\\frac{2w_n-w_n^2}{n^2},
\\qquad w_n=1-\\frac n{N+1}.$$

The code returns both squared errors and their square-root L2 enclosures. For smooth cos the raw error is zero at these degrees; Fejér still has uniform error1/(N+1) and squared L2 error1/[2(N+1)²]. Retaining a mode does not remove its taper bias.

Define the **first-lobe overshoot height** as S_(2m-1)q(pi/(2m))-1. Its derivative is2sin(2mx)/(pi*sin x), positive before that peak and negative until pi/m. For m=1,2,4 the code certifies a positive peak and values below1 at0 and pi/m. It then brackets the unique two roots of S=1 on those monotone pieces. **Width** means the distance between these two roots; its returned enclosure includes both root brackets and pi uncertainty. These are named finite-lobe quantities, not sampled global maxima or a numerical proof of the Gibbs limiting constant. Fejér has no overshoot above1 by positivity, so its overshoot height/width are zero.

The alias demonstration uses a separate **endpoint** grid theta_j=2pi*j/M with M=8. It samples cos((M+1)x), computes its discrete coefficient at frequency1 and reconstructs the low-frequency pair. The samples alias cos x, though the functions differ at x=pi/M. On a midpoint grid the same n+M shift would introduce a minus sign; that identity is not copied onto the shifted quadrature grid. Report the estimated coefficient, sample reconstruction agreement and off-grid discrepancy with their interval enclosures.

### ANA-SP-INTERVAL — Why the arithmetic enclosures are certificates

All internal endpoints are integers on one dyadic grid. Addition/subtraction are exact at that scale; multiplication and division use outward floor/ceil, including negative quotients. Division refuses intervals containing zero. Square-root endpoints come from exact integer square roots of endpoint*scale, with an upward step if a square is not exact.

For pi, use Machin's identity16atan(1/5)-4atan(1/239). If theta=atan(1/5), phi=atan(1/239), then tan(4theta)=120/119 and tan(4theta-phi)=1. Also0<4theta-phi<pi/2: phi<theta and theta<pi/8, the latter from tan(pi/8)=sqrt2-1>1/5. Thus the angle is pi/4, fixing the branch. Alternating arctangent series with forty terms and their next-term remainder enclose the identity. Every Fourier argument is a rational multiple of pi, reduced modulo2 **before** interval multiplication. Sine uses its Taylor polynomial through degree48 (the degree48 coefficient is zero), with remainder at most4^49/49! on|x|<4. Interval arithmetic encloses polynomial rounding as well as this analytic remainder; cosine is a rational phase shift.

Bisection uses only strict interval signs. An enclosure straddling zero triggers refusal, never a midpoint-sign guess. The signed endpoint brackets, derivative monotonicity, quadrature bound, discarded regions and rounding enclosures have separate fields. No error guarantee for Math.sin, Math.PI or a floating square root is assumed.

### ANA-SP-REFERENCE — Complete bounded public JavaScript

Pass arrays transcribed from the phase/norm/smooth/Fourier tables as phase, norm, smooth and fourier; use aliasM:8. The oracle reads these actual tables and passes the same input contract. The reference accepts only the stated finite grid/degree limits; it is a worked laboratory, not a general-purpose validated-numerics library.

\`\`\`javascript
function analysisLabs(spec) {
  'use strict';
  const need=(yes,message)=>{if(!yes)throw new Error(message);};
  for(const[key,limit]of[['phase',16],['norm',3],['smooth',2],['fourier',3]])need(Array.isArray(spec[key])&&spec[key].length>=1&&spec[key].length<=limit,'bounded input rows');
  const SCALE=1n<<96n;
  const floor=(n,d)=>{need(d!==0n,'zero divisor');if(d<0n){n=-n;d=-d;}const v=n/d;return n<0n&&n%d!==0n?v-1n:v;};
  const ceil=(n,d)=>-floor(-n,d);
  const gcd=(a,b)=>{a=a<0n?-a:a;b=b<0n?-b:b;while(b)[a,b]=[b,a%b];return a;};
  const rat=(v)=>{let n,d;if(v&&typeof v==='object'&&'n'in v){n=BigInt(v.n);d=BigInt(v.d);}else{const text=String(v);need(/^-?\\d+(?:\\/-?\\d+)?$/.test(text),'exact rational literal');let[a,b='1']=text.split('/');n=BigInt(a);d=BigInt(b);}need(d!==0n,'rational denominator');if(d<0n){n=-n;d=-d;}const g=gcd(n,d);return{n:n/g,d:d/g};};
  const ra=(x,y)=>{x=rat(x);y=rat(y);return rat({n:x.n*y.d+y.n*x.d,d:x.d*y.d});};
  const rm=(x,y)=>{x=rat(x);y=rat(y);return rat({n:x.n*y.n,d:x.d*y.d});};
  const rd=(x,y)=>{x=rat(x);y=rat(y);need(y.n!==0n,'rational division');return rat({n:x.n*y.d,d:x.d*y.n});};
  const rs=(x,y)=>ra(x,rm(-1,y));
  const rlt=(x,y)=>{x=rat(x);y=rat(y);return x.n*y.d<y.n*x.d;};
  const rtext=x=>{x=rat(x);return x.d===1n?String(x.n):\`\${x.n}/\${x.d}\`;};
  const I=(l,h=l)=>{need(l<=h,'ordered interval');return{l,h};};
  const R=v=>{const x=rat(v);return I(floor(x.n*SCALE,x.d),ceil(x.n*SCALE,x.d));};
  const Z=R(0),O=R(1);
  const add=(x,y)=>I(x.l+y.l,x.h+y.h),neg=x=>I(-x.h,-x.l),sub=(x,y)=>add(x,neg(y));
  const min=xs=>xs.reduce((a,b)=>a<b?a:b),max=xs=>xs.reduce((a,b)=>a>b?a:b);
  const mul=(x,y)=>{const p=[x.l*y.l,x.l*y.h,x.h*y.l,x.h*y.h];return I(floor(min(p),SCALE),ceil(max(p),SCALE));};
  const div=(x,y)=>{need(y.h<0n||y.l>0n,'interval divisor contains zero');if(y.h<0n)return div(neg(x),neg(y));const ns=[x.l*SCALE,x.h*SCALE],ds=[y.l,y.h];return I(min(ns.flatMap(n=>ds.map(d=>floor(n,d)))),max(ns.flatMap(n=>ds.map(d=>ceil(n,d)))));};
  const abs=x=>x.l>=0n?x:x.h<=0n?neg(x):I(0n,max([-x.l,x.h]));
  const square=x=>{const y=mul(x,x);return x.l<=0n&&x.h>=0n?I(0n,y.h):y;};
  const pow=(x,n)=>{need(Number.isInteger(n)&&n>=0,'nonnegative power');let v=O;while(n){if(n%2)v=mul(v,x);n=Math.floor(n/2);if(n)x=mul(x,x);}return v;};
  const isqrt=n=>{need(n>=0n,'nonnegative square root');if(n<2n)return n;let x=1n<<BigInt((n.toString(2).length+1)>>1);for(;;){const y=(x+n/x)/2n;if(y>=x)return x;x=y;}};
  const sqrt=x=>{need(x.l>=0n,'square root interval');const l=isqrt(x.l*SCALE),n=x.h*SCALE,h=isqrt(n);return I(l,h*h===n?h:h+1n);};
  const nonnegative=x=>{need(x.h>=0n,'nonnegative enclosure');return I(x.l<0n?0n:x.l,x.h);};
  const pack=x=>({lo:String(x.l),hi:String(x.h)});
  const atan=value=>{const x=R(value),x2=square(x);let power=x,total=Z;for(let k=0;k<40;k++){const term=div(power,R(2*k+1));total=k%2?sub(total,term):add(total,term);power=mul(power,x2);}const tail=div(power,R(81));return I(total.l-tail.h,total.h+tail.h);};
  const pi=sub(mul(R(16),atan('1/5')),mul(R(4),atan('1/239')));
  need(pi.l>3n*SCALE&&pi.h<4n*SCALE,'pi enclosure');
  let factorial49=1n;for(let j=2n;j<=49n;j++)factorial49*=j;
  const sineRemainder=R(rat({n:4n**49n,d:factorial49}));
  const phase=value=>{let q=rat(value),n=q.n%(2n*q.d);if(n>q.d)n-=2n*q.d;if(n< -q.d)n+=2n*q.d;return{n,d:q.d};};
  const sinpi=value=>{const q=phase(value);if(q.n===0n||q.n===q.d||q.n===-q.d)return Z;if(2n*q.n===q.d)return O;if(2n*q.n===-q.d)return neg(O);const x=mul(pi,R(q)),x2=square(x);let term=x,total=x;for(let k=1;k<=23;k++){term=neg(div(mul(term,x2),R((2*k)*(2*k+1))));total=add(total,term);}return I(total.l-sineRemainder.h,total.h+sineRemainder.h);};
  const cospi=value=>sinpi(ra(value,'1/2'));
  const validPanels=n=>need(Number.isInteger(n)&&n>=1&&n<=4096,'bounded panel count');
  const midpoint=(a,b,K,fn)=>{validPanels(K);const width=sub(b,a),h=div(width,R(K));let total=Z;for(let j=0;j<K;j++)total=add(total,fn(add(a,mul(h,R(\`\${2*j+1}/2\`)))));return mul(h,total);};
  const phaseRows=spec.phase.map(row=>{const a=rat(row.alpha),b=rat(row.beta);let status;if(row.p==='infinity')status=!rlt(0,a)&&!rlt(ra(a,b),0)?'bounded':'unbounded';else{const p=rat(row.p);need(!rlt(p,1),'p at least one');status=rlt(rm(a,p),1)&&rlt(1,rm(ra(a,b),p))?'finite':'divergent';}return{id:row.id,status};});
  const normRows=spec.norm.map(row=>{const a=R(row.lower),b=R(row.upper),K=row.panels;need(a.l>0n&&a.h<b.l&&b.l>=SCALE,'singular truncation endpoints');const central=midpoint(a,b,K,t=>{const base=add(O,square(t));return div(R(2),mul(base,sqrt(base)));});const error=div(mul(R(36),pow(sub(b,a),3)),R(24*K*K)),near=mul(R(2),a),tail=div(O,square(b));const whole=I(max([0n,central.l-error.h]),central.h+error.h+near.h+tail.h);return{id:row.id,central:pack(central),quadratureBound:pack(error),nearBound:pack(near),tailBound:pack(tail),powerIntegral:pack(whole),norm:pack(sqrt(whole))};});
  const smoothRows=spec.smooth.map(row=>{need(row.p===1||row.p===2,'selected smooth norm');const central=midpoint(Z,O,row.panels,t=>row.p===1?O:square(sub(O,t)));const error=row.p===1?Z:div(O,R(12*row.panels*row.panels));const whole=I(max([0n,central.l-error.h]),central.h+error.h);return{id:row.id,p:row.p,central:pack(central),quadratureBound:pack(error),nearBound:pack(Z),tailBound:pack(Z),powerIntegral:pack(whole),norm:pack(row.p===1?whole:sqrt(whole)),endpointPolicy:'full compactification'};});
  const weight=(n,N,fejer)=>fejer?R(\`\${N+1-n}/\${N+1}\`):O;
  const wave=(N,fejer,theta)=>{let total=Z;for(let n=1;n<=N;n+=2){const coefficient=mul(div(R(4),mul(pi,R(n))),weight(n,N,fejer));total=add(total,mul(coefficient,sinpi(rm(n,theta))));}return total;};
  const gridError=(M,fn,target)=>{let total=Z;for(let j=0;j<M;j++){const theta=rat(\`\${2*j+1-M}/\${M}\`);total=add(total,square(sub(fn(theta),target(theta))));}return div(total,R(M));};
  const signTarget=theta=>rlt(theta,0)?neg(O):rlt(0,theta)?O:Z;
  const sign=x=>x.l>0n?1:x.h<0n?-1:0;
  const bisect=(fn,left,right)=>{let l=rat(left),h=rat(right),sl=sign(fn(l)),sh=sign(fn(h));need(sl*sh===-1,'strict root endpoint signs');for(let j=0;j<40;j++){const m=rd(ra(l,h),2),sm=sign(fn(m));need(sm!==0,'unresolved root sign');if(sm===sl){l=m;sl=sm;}else{h=m;sh=sm;}}return{l,h,sl,sh};};
  const rootRecord=root=>({lo:rtext(root.l),hi:rtext(root.h),leftSign:root.sl,rightSign:root.sh});
  const fourierRows=spec.fourier.map(row=>{
    const N=row.N,M=row.M;need([1,3,7].includes(N),'declared Fourier degrees');need(Number.isInteger(M)&&M>=8&&M<=512&&M%8===0&&M>2*N,'jump-aligned grid and no reconstruction alias');need(rtext(row.delta)==='1/4','declared away region');
    const report=fejer=>{
      let A=Z,B=Z,energySum=Z;const decay=[];
      for(let n=1;n<=N;n+=2){const w=weight(n,N,fejer),bn=mul(div(R(4),mul(pi,R(n))),w);A=add(A,bn);B=add(B,mul(R(n),bn));energySum=add(energySum,div(sub(mul(R(2),w),square(w)),R(n*n)));}
      const exact=nonnegative(sub(O,mul(div(R(8),square(pi)),energySum)));
      const grid=nonnegative(gridError(M,theta=>wave(N,fejer,theta),signTarget));
      const D=mul(R(2),mul(add(A,O),B)),quadrature=div(mul(D,pi),R(2*M));
      const audit=I(max([0n,grid.l-quadrature.h]),grid.h+quadrature.h);
      let maxLow=0n,maxHigh=0n;
      for(let j=0;j<=M;j++){const theta=rat(\`\${2*j-M}/\${M}\`),magnitude=theta.n<0n?{n:-theta.n,d:theta.d}:theta;if(!rlt(magnitude,'1/4')&&!rlt('3/4',magnitude)){const e=abs(sub(wave(N,fejer,theta),signTarget(theta)));if(e.l>maxLow)maxLow=e.l;if(e.h>maxHigh)maxHigh=e.h;}}
      const mesh=div(mul(B,pi),R(M));
      const analytic=fejer?div(R(2),mul(R(N+1),square(sinpi('1/8')))):div(R(4),mul(mul(pi,R(N+2)),sinpi('1/4')));
      for(let n=1;n<=N+4;n++){const c=n%2?div(R(4),mul(pi,R(n))):Z;decay.push({n,sineCoefficient:pack(c),nTimesMagnitude:pack(mul(R(n),c))});}
      return{method:fejer?'Fejer':'raw',squaredL2:pack(exact),L2:pack(sqrt(exact)),gridSquaredError:pack(grid),gridL2:pack(sqrt(grid)),quadratureBound:pack(quadrature),quadratureIntegralEnclosure:pack(audit),sampledAwayMaximum:pack(I(maxLow,maxHigh)),continuumAwayEnclosure:pack(I(maxLow,maxHigh+mesh.h)),analyticAwayEnclosure:pack(I(0n,analytic.h)),coefficientPolicy:'original square-wave coefficients; method determines reconstruction weights',coefficientDecay:decay};
    };
    const m=(N+1)/2,peak=rat(\`1/\${2*m}\`),rightEnd=rat(\`1/\${m}\`),rootFn=theta=>sub(wave(N,false,theta),O);
    need(sign(rootFn(peak))===1&&sign(rootFn(0))===-1&&sign(rootFn(rightEnd))===-1,'certified first-lobe endpoints');
    const left=bisect(rootFn,0,peak),right=bisect(rootFn,peak,rightEnd);
    const width=mul(pi,I(R(rs(right.l,left.h)).l,R(rs(right.h,left.l)).h));
    const smoothReport=fejer=>{const w=weight(1,N,fejer),amplitude=sub(O,w),exact=div(square(amplitude),R(2)),grid=nonnegative(gridError(M,theta=>mul(w,cospi(theta)),cospi)),bound=div(mul(mul(R(2),square(amplitude)),pi),R(2*M));return{method:fejer?'Fejer':'raw',uniformError:pack(amplitude),squaredL2:pack(exact),L2:pack(sqrt(nonnegative(exact))),gridSquaredError:pack(grid),gridL2:pack(sqrt(grid)),quadratureBound:pack(bound),quadratureIntegralEnclosure:pack(I(max([0n,grid.l-bound.h]),grid.h+bound.h))};};
    return{id:row.id,N,M,gridPolicy:'midpoint; jumps at cell boundaries',awayRegion:'pi/4 to3pi/4 and its negative',smooth:[smoothReport(false),smoothReport(true)],jump:[report(false),report(true)],firstLobe:{peakPhase:rtext(peak),height:pack(rootFn(peak)),left:rootRecord(left),right:rootRecord(right),width:pack(width)},fejerOvershoot:{height:pack(Z),width:pack(Z)}};
  });
  const M=spec.aliasM;need(M===8,'declared alias endpoint grid');
  let re=Z,im=Z;const samples=[];
  for(let j=0;j<M;j++){const theta=rat(\`\${2*j}/\${M}\`),high=cospi(rm(M+1,theta)),low=cospi(theta);samples.push({phase:rtext(theta),high:pack(high),low:pack(low)});re=add(re,mul(high,cospi(theta)));im=sub(im,mul(high,sinpi(theta)));}
  re=div(re,R(M));im=div(im,R(M));
  const reconstruct=theta=>mul(R(2),sub(mul(re,cospi(theta)),mul(im,sinpi(theta))));
  const sampleResiduals=samples.map(row=>{const theta=rat(row.phase);return pack(sub(reconstruct(theta),cospi(rm(M+1,theta))));});
  const off=rat(\`1/\${M}\`),offResidual=sub(reconstruct(off),cospi(rm(M+1,off)));
  return{scale:String(SCALE),pi:pack(pi),phase:phaseRows,norm:normRows,smoothNorm:smoothRows,fourier:fourierRows,alias:{M,gridPolicy:'endpoint2pi*j/M',trueHighFrequency:M+1,estimatedFrequency:1,coefficientReal:pack(re),coefficientImag:pack(im),samples,sampleResiduals,offGridPhase:rtext(off),offGridResidual:pack(offResidual)}};
}
\`\`\`

The input records have fields phase:{id,alpha,beta,p}, norm:{id,lower,upper,panels}, smooth:{id,p,panels}, fourier:{id,N,M,delta}, plus aliasM:8. Use exact rational strings for noninteger quantities and the literal string infinity. The table labels supply id. The three norm rows use t rather than x endpoints as labelled; their discarded bounds are nevertheless for the original x integral. The smooth rows use full compactification, with no omitted tails.

### ANA-SP-LAB-KEY — Complete comparison and repair criteria

The phase statuses must match all ten printed rows, including the constant/equality and both infinity-failure cases. Every singular power-integral interval must contain2 and every returned norm interval must contain sqrt2; shrinking the displayed width by omitting positive tails is an error. Each smooth p1 interval contains1; its p2 power interval contains1/3 and norm interval contains1/sqrt3. The outward square-root rule gives an exact rational endpoint comparison by squaring, so an assumed decimal square root is unnecessary.

For the square wave the independent formula above gives the true squared L2 error; it must lie in the direct midpoint sum plus/minus the quadrature bound. The smooth raw exact error is zero, its Fejér error is1/[2(N+1)²]. Grid squared error and its square root are separate outputs. Away from jumps every point is within pi/M of a sampled away-grid point in the same closed component, so the derivative*mesh addition is required. The analytic tail/kernel bound is an independent continuum upper bound. Do not reinterpret either finite-grid maximum as the exact supremum.

For each degree, the returned left lobe root has strictly negative/positive signed endpoints, and the right root positive/negative endpoints, in their derivative-certified monotone subintervals. The width encloses right-root minus left-root times pi; the height encloses the actual peak minus1. Degree1 has peak height4/pi-1; degree3 has8sqrt2/(3pi)-1; degree7 has(4/pi)[(8/7)sin(pi/8)+(8/15)sin(3pi/8)]-1. These exact expressions are separate comparisons for the interval peak evaluations. Fejér's zero overshoot follows from positivity even if a grid missed a raw peak.

The endpoint alias DFT coefficient at1 encloses real1/2 and imaginary0. Its low-frequency reconstruction agrees with the high-frequency samples within the outward intervals, while the off-grid residual encloses2cos(pi/8)>0. The true continuous frequency1 coefficient of cos9x is zero. Report both statements; matching eight samples does not reconstruct a general function. The midpoint quadrature grid is a different declared grid and has not been used to assert the endpoint identity.

The reference's finite lobe/grid limits and arithmetic scheme are part of its worked scope. A user extension needs fresh certificate bounds and verification. If a sign, denominator, sample/grid condition or divergent-norm request fails its check, preserve that refusal. The software does not validate stronger convergence, asymptotic Gibbs constants, arbitrary interval-library correctness, learner mastery or source theorem proofs.

## ANA-SP-RECORDS — Revision, boundaries and continuation

For each theorem, checkpoint and portfolio field use complete, revise or missing with the actual supporting line. Repair in dependency order: measurable space before integration, completeness before minimizers, density before Fourier extension, domain before a contour theorem, and an arithmetic enclosure before a signed numerical claim. A correct endpoint table with an invalid theorem or unexecuted required laboratory needs revision.

Keep dated first, comparison and corrected worksheets; exact source/task versions, code inputs/outputs, models/help opened and the reason for a consequential change. The [worksheet portfolio guide](/guide/learner-records/#keep-a-worksheet-portfolio) describes recovery boundaries: a shared reading note is one mutable string, notebook backup does not automatically contain separate learner files or native stores, and each existing export retains its scope. This course adds no immutable history, graded Practice attempt, verified delay or shared writing contract.

The proved construction includes T01's measurable sigma-algebra, T02's product integral extension, general projection/Riesz, positive and signed RN reduction, finite-p duality, Banach machinery, density, line inversion/Plancherel, the explicit Poisson operator family, Laurent/singularity/argument/continuation theory and their fixed models. Product-measure existence, Zorn's lemma, proper polar change of variables and finite planar triangulation are named inputs. Full unbounded spectral theory, Carleson's pointwise theorem, Riemann mapping, surfaces and research-level generalizations remain additional study; no imported overview or bounded program is counted as their proof. Stop after the required native work, all checkpoints, three full portfolios, both executed laboratories and recorded repairs. No whole-book qualification, human approval, observed teaching effect or calibrated workload is asserted.
`;export{e as default};