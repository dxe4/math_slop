
# Complex analysis

<!-- euler-course-route -->

## Current course route

Follow the [current chapter syllabus](#/courses/atlas-calculus-analysis-advanced), based on [Complex Analysis](#/books/complex-analysis). Its chapters, exercises and preparation links form the present course route.

Preparation courses: [Real analysis](#/courses/course-lucent-analysis).

The earlier mathematical explanations, proofs, assignments and complete solutions remain below with their original task identities. Their first-attempt, comparison and correction requirements still apply when you choose that earlier work. Existing notes and study marks keep their original scope.

Why can a contour move across one region but not another? Why can a pointwise limit pass through one integral but fail in another? The answer requires more than a correct calculation: identify the space, its completeness or compactness, the domain on which a function is holomorphic, and the exact control available for a limiting process.

This course develops complex analysis after real analysis. The earlier real-analysis and measure selections below retain their own preparation and exercise requirements; they remain available as a longer study route. The new complex development below proves Goursat's triangle theorem assuming holomorphy alone, then derives primitives, homotopy invariance, Cauchy's formula and its consequences. It does not obtain that theorem by assuming continuous first partials or continuity of the complex derivative.

The CC BY-SA licence above covers this newly authored course text. Linked native readings retain their own attribution and terms; linking them does not relicense those works.

All written models are public. Attempt, compare and revise; a previously opened answer makes later work public reconstruction. Use the public solutions for comparison and correction. Its **study time depends on the selected reading, attempts and corrections**. The original 180-hour real route, 600-minute restricted complex route and 260-minute compact measure page describe their own authored scopes; adding them does not estimate this joined work.

## Preparation and entry repair

Bring single-variable calculus and series, inequalities, complex arithmetic and polar form, elementary two-variable derivatives, parametrized line integrals, and proof writing with quantifiers, induction, arbitrary objects and counterexamples. Repair proof language in [Lucent's proof bridge](#/books/lucent-analysis/proof-bridge) and its [logic refresher](#/books/lucent-refresher/logic-proof). Use the [Algebra and Functions course](#/courses/atlas-algebra-functions-standard) for domains, inequalities, powers and logarithms. Stage C's required older complex route, including Checkpoint 6 and its capstone, requires Green's circulation theorem for disks and punctured disks/annuli: the real components have continuous first partials on an open neighborhood of the closed region, and positive boundary orientation is outer counterclockwise with inner boundaries clockwise. If this prerequisite needs repair, read [Lucent's Green's theorem, orientation, and holes](#/books/lucent-calculus/green-circulation-holes), “A local rotation added over an entire region”, “Derive the two halves before combining them” and “Predict before moving the loop”; complete the written calc3-green-hole task and Problems 2, 4 and 6, comparing its adjacent solution/rubric and “Worked solutions to the problems”. That source derives sliceable cases and treats the general piecewise-smooth theorem as a stated input; this course does not claim a new general proof of Green's theorem. Green's theorem is **not a hypothesis of Goursat's theorem proved here**.

Before continuing, answer these five questions, then use this feedback.

1. Negate “for every positive tolerance there is one index that works for every later index.” **Key:** some positive tolerance defeats every proposed threshold at some later index. The later index may depend on the threshold; the threshold cannot depend on that later index.
2. Does every bounded subset of a metric space have compact closure? **Key:** no. In an infinite-dimensional Hilbert space the unit vectors have mutual distance \(\sqrt2\), hence no convergent subsequence. In the plane, boundedness plus closedness does give compactness, proved below by coordinates.
3. Does a complex derivative at one point imply holomorphy near it? **Key:** no. The function \(\overline z^{\,2}\) has derivative zero at zero, since \(|\overline h^2/h|=|h|\to0\), but at nonzero points its quotient has incompatible axis limits.
4. Can one bounded constant dominate every function on an infinite-measure domain for DCT? **Key:** a constant need not be integrable there; DCT requires one integrable envelope and almost-everywhere convergence.
5. Why is \(\int_\gamma dz/z\) unavailable when a path crosses zero? **Key:** the ordinary parameter integrand is undefined at that crossing. A principal value or indentation is a different construction.

Repair a missed definition or theorem before using it. Programming is optional for this course's supplied portfolios: exact formulas and hand tables constitute complete calculations. Original programming tasks outside the selection retain their own requirements.

## Required source and key roster

Follow A–F in order. The source work remains in its native reader. For each selected written problem retain a first response, any help or model exposure, and a corrected response identifying the first unjustified step.

| Stage | Required work | Exact public feedback and dependency |
| --- | --- | --- |
| A. Real proof course | Follow all Units A–F of [Lucent's 180-hour proof route](#/books/lucent-analysis/proof-course-route), including its stated prerequisite order and required written products | The native file is Lucent’s real-analysis proof route. Each assigned written block supplies a solution, rubric and, where present, a separate transferSolution. Those are public comparisons, with the native draft/help policy |
| A1. Written sets and real cumulative work | [Foundations problem set](#/books/lucent-analysis/foundations-problem-set): Problems 1 and 3–5 first, then 2/6 after topology; [limits set](#/books/lucent-analysis/limits-problem-set), [continuity set](#/books/lucent-analysis/continuity-problem-set), [differentiation set](#/books/lucent-analysis/differentiation-problem-set), [integration set](#/books/lucent-analysis/integration-problem-set), [function-sequence set](#/books/lucent-analysis/function-sequences-problem-set), and [structure set](#/books/lucent-analysis/structure-problem-set): all numbered problems and printed changed forms | Corresponding files 14,16,21,23,25,27,39 in [Lucent’s analysis chapters](#/books/lucent-analysis) contain the complete inline solution and transferSolution fields. Follow the route's deferrals instead of using compactness or exchange theorems before they are taught |
| A2. Mixed real and metric forms | Route D6.1–D6.3; [foundations examination](#/books/lucent-analysis/analysis-i-synthesis), [real-functions examination](#/books/lucent-analysis/analysis-ii-synthesis), [continuation examination](#/books/lucent-analysis/analysis-iii-synthesis), and their printed transfers | Files 40-foundations-synthesis.md, 41-core-synthesis.md and 42-continuation-synthesis.md contain complete models. The optional energy-family extension in 42 remains optional. The [completeness public return](#/books/lucent-analysis/euler-study-units) has its own root-bisection model, rational failure and changed nested-interval model |
| B. Measure bridge | Read Modules 1–6 of [Measure and Lebesgue Integration](#/courses/atlas-measure-lebesgue-integration), attempt all eight “Exercises with worked answers”, then reconstruct the MCT/Fatou/DCT arguments in the linked [convergence chapter](#/books/proof-safe-real-analysis), Sections 2,4,5 | The compact course has eight adjacent Answers and a repair map. Read [outer measure](#/books/proof-safe-real-analysis), Sections 1–8, and [Lebesgue integration](#/books/proof-safe-real-analysis), Sections 1–9, before the convergence proofs. We use the standard constructed Lebesgue measure; the full Carathéodory sigma-algebra/construction theorem is an explicit imported foundational result, not a proof supplied by this course |
| C. Complex preparation | Read the eight articles and complete all twelve checkpoints, mixed practice and capstone in [From holomorphic functions to selected contour theorems](#/courses/complex-analysis-deep) | Native content/courses/complex-analysis-deep.html in Maths, Unhurried has each Key, Worked mixed solution and Model solution. Its Green/C¹ disk proof and imported general theorems retain those boundaries. Stages D–E below supply the holomorphic-only proof progression that this older route deferred |
| D. Holomorphic-only theory | Reconstruct every proof in the next four sections, then complete ANA-ADV-Q01–Q12 | Full checkpoint models are adjacent below. Keep the metric compactness and curve regularity used in the proofs visible |
| E. Mixed synthesis | Complete ANA-ADV-P001, ANA-ADV-C001 and, at another sitting, ANA-ADV-R001; each has eight required deliverables | All three complete models, exact tables and common repair criteria are below. The changed form changes a pole, coefficient and concentration exponent; the return changes the measure conclusion, not only the numbers |
| F. Revisions and stopping point | Rework failed checkpoints; preserve a proof-dependency ledger, first/comparison/corrected files and actual help/exposure | Existing native drafts, shared notes and learner-owned files have separate recovery/export scopes. Public comparison and a self-reported study mark are not proof verification, an enforced delay or unseen work |

The real route already develops completeness, compactness, continuity, derivatives, Riemann integration, uniform limits, contractions and Bernstein approximation. Do that work: the new complex material is not a substitute for it. The measure bridge adds measurable functions, null sets and controlled integration. All imported foundational facts are named where used.

## Goursat's triangle theorem without derivative continuity

A contour is a piecewise continuously differentiable path with finitely many pieces. Its integral is the ordinary parameter integral of \(f(\gamma(t))\gamma'(t)\). Reversing orientation negates it, concatenation adds it, and
\[
\left|\int_\gamma f(z)\,dz\right|\le \operatorname{length}(\gamma)\sup_\gamma|f|.
\]
These follow directly from the real parameter integral. A holomorphic function means complex differentiable at every point of an open domain. Differentiability implies continuity; it does not initially give continuity or boundedness of \(f'\).

**ANA-ADV-T01 — Triangle theorem.** If a closed triangle \(T\) and a neighborhood of it lie in the open domain \(U\) of a holomorphic \(f\), then \(\int_{\partial T}f=0\), with positive boundary orientation.

**Complete proof.** A degenerate collinear triangle has cancelling directed segments, so its integral is zero. Otherwise write \(I(T)=\int_{\partial T}f\), \(d=\operatorname{diam}T>0\), \(p=\operatorname{perimeter}T>0\). Joining the midpoints divides \(T\) into four triangles with disjoint interiors; internal edges cancel in their positive boundary sum. Choose one child with \(|I(T_1)|\ge |I(T)|/4\), and repeat. The nested compact triangles \(T_n\) have diameter \(d/2^n\), perimeter \(p/2^n\), and
\[
|I(T)|\le4^n|I(T_n)|.
\]
Nested compactness supplies a point \(z_0\) in their intersection; shrinking diameters make it unique. One elementary justification chooses \(z_n\in T_n\), observes \(|z_m-z_n|\le d/2^n\) for \(m\ge n\), uses completeness of the plane, then closedness of each triangle. At \(z_0\), differentiability gives
\[
f(z)=f(z_0)+f'(z_0)(z-z_0)+(z-z_0)\eta(z),\qquad \eta(z)\to0.
\]
Define the last remainder to be zero at \(z_0\). Given \(\varepsilon>0\), for all sufficiently large \(n\), \(|\eta(z)|\le\varepsilon\) on \(T_n\setminus\{z_0\}\). Constant and affine terms integrate to zero around a triangle: their primitives are respectively \(f(z_0)z\) and \(f'(z_0)(z-z_0)^2/2\), whose endpoint differences cancel. Thus
\[
|I(T_n)|\le\varepsilon(d/2^n)(p/2^n),\qquad
|I(T)|\le\varepsilon dp.
\]
The last estimate holds for every positive \(\varepsilon\), hence \(I(T)=0\). Only differentiability at the limiting point was used in the final estimate; there was no compact-set bound on \(f'\), no Green theorem and no C¹ assumption. \(\square\)

**Subdivision example used for checking the proof.** Take triangle vertices \(0,2,2i\) with that positive orientation. Its four positively oriented children are \((0,1,i)\), \((1,2,1+i)\), \((i,1+i,2i)\), and \((1,1+i,i)\). Every internal edge appears in both directions. Each child's diameter/perimeter are half the parent's; \(4\cdot(1/2)\cdot(1/2)=1\) is the cancellation of constants in the estimate, not a numerical proof of Goursat.

## Local primitives and continuous homotopies

**ANA-ADV-T02 — Primitive on a disk.** Let \(D\subset U\) be an open disk, \(b\in D\), and \(f\) holomorphic on \(U\). Define \(F(z)\) by integrating \(f\) on the straight segment from \(b\) to \(z\). For \(z,z+h\in D\) sufficiently close, the triangle lies in the convex disk, so T01 gives
\[
F(z+h)-F(z)=\int_{[z,z+h]}f(w)\,dw
=h\int_0^1f(z+th)\,dt.
\]
After division by \(h\ne0\), the difference from \(f(z)\) is bounded by \(\sup_{0\le t\le1}|f(z+th)-f(z)|\to0\), by continuity at \(z\). Therefore \(F'=f\). The chain rule along each C¹ path piece now gives \(\int_\gamma f=F(\gamma(1))-F(\gamma(0))\) for any contour lying in this disk. The differentiability of \(F\) was proved, rather than assumed from a moving endpoint.

**ANA-ADV-T03 — Homotopy invariance.** Suppose \(H:[0,1]^2\to U\) is continuous, \(H(s,0)=a\), \(H(s,1)=b\), and the two boundary paths \(\gamma_0(t)=H(0,t)\), \(\gamma_1(t)=H(1,t)\) are contours. If \(f\) is holomorphic on \(U\), their integrals agree. No smoothness of the intermediate paths of \(H\) is required.

**Complete grid proof.** The compact image \(K\) is covered by finitely many disks \(B(c_j,r_j/2)\) whose larger disks \(B(c_j,r_j)\) lie in \(U\) and have primitives from T02. Put \(\lambda=\min_jr_j/2>0\). Any nonempty subset of \(K\) of diameter less than \(\lambda\) lies in one larger disk: choose a point in a half-radius disk and use the triangle inequality. Uniform continuity of \(H\) supplies a rectangular grid fine enough that each closed cell image has that diameter bound.

Map the vertices and join neighboring images by straight segments. Every four-edge cell polygon lies in one primitive disk, so its integral is zero by endpoint cancellation; the possibly curved cell images are not integrated. Sum over cells: opposite internal straight segments cancel. On the two horizontal sides the images are constant \(a\) and \(b\), so their segments have zero integral. On either remaining boundary, each original subarc \(\gamma_k\) and its replacement chord lie in a common primitive disk. Their integrals equal the same primitive difference. Consequently the surviving polygonal boundary sum is exactly \(\int_{\gamma_0}f-\int_{\gamma_1}f=0\).

For a continuous homotopy through closed loops, \(H(s,0)=H(s,1)\) may move with \(s\). Then the two connecting polygonal sides are identical with opposite orientations and still cancel. This proves the closed-loop version too. The argument never assigns an integral to an arbitrary continuous grid image. \(\square\)

Call \(U\) simply connected here when it is open, path connected, and every continuous closed loop contracts in \(U\). An open connected plane set is polygonally connected: points reachable from one point by polygonal paths form a nonempty subset both open and relatively closed. On a simply connected domain, T03 makes every contour integral zero; path integrals between fixed endpoints are therefore independent of the polygonal path. They define a global primitive, whose derivative is checked locally by T02. This conclusion uses the stated contraction property, not a slogan about whether a picture “has holes”.

**Domains with holes.** In an annulus \(r<|z|<R\), circles of different radii are homotopic there by interpolating the positive radius. A holomorphic function on that annulus has equal integrals on those counterclockwise circles; the positively oriented boundary of the annular region is outer counterclockwise **minus** inner counterclockwise. Neither integral must vanish: \(1/z\) gives \(2\pi i\) on both. It has no global primitive and its once-around loop cannot contract there, since T03 would equate that integral with zero.

There is a useful finite-boundary version. A polygonal region with finitely many disjoint polygonal holes can be triangulated into finitely many triangles without crossing its holes. We explicitly use this elementary finite planar triangulation fact; it is not the general homology form of Cauchy's theorem. If \(f\) is holomorphic on a neighborhood of the region and all its boundaries, sum T01 over that triangulation. Internal edges cancel, leaving outer counterclockwise integral equal to the sum over the hole boundaries taken counterclockwise. A singularity in the remaining region invalidates this argument. For curved contours use a justified homotopy in their actual domain, as in the circle proof next; we do not silently replace an arbitrary contour by a Jordan boundary or assert arbitrary homological deformation.

## Cauchy's formula for holomorphic functions and its consequences

**ANA-ADV-T04 — Cauchy's circle formula.** Let \(f\) be holomorphic on an open neighborhood of the closed disk \(|z-c|\le R\), \(R>0\). If \(|a-c|<R\), then
\[
f(a)=\frac1{2\pi i}\int_{|z-c|=R}\frac{f(z)}{z-a}\,dz,
\]
with the circle counterclockwise.

**Proof without a removable-singularity shortcut.** Choose \(0<\epsilon<R-|a-c|\). For \(s\in[0,1]\), let \(c_s=(1-s)c+sa\), \(R_s=(1-s)R+s\epsilon\). The circles \(c_s+R_se^{it}\) stay in the closed disk and avoid \(a\), because
\[
|c_s-c|+R_s\le R,\qquad
R_s-|c_s-a|=(1-s)(R-|a-c|)+s\epsilon>0.
\]
T03 applies to \(f(z)/(z-a)\) on the punctured neighborhood. Thus its outer-circle integral equals its counterclockwise integral on \(|z-a|=\epsilon\). The constant part \(f(a)/(z-a)\) integrates to \(2\pi i f(a)\). The remainder has modulus at most \(2\pi\sup_{|z-a|=\epsilon}|f(z)-f(a)|\to0\). Letting \(\epsilon\downarrow0\) proves the formula. We did not assume that \([f(z)-f(a)]/(z-a)\) was already holomorphic across \(a\). \(\square\)

**Derivatives and Taylor's theorem.** On a smaller disk the contour remains a positive distance from \(a\). The difference quotient of \(1/(z-a)\) converges uniformly on that fixed circle to \(1/(z-a)^2\): subtract the two rational expressions and bound the remaining factor by the positive separation. This permits the parameter derivative through its finite-length integral. Iterating the same argument gives
\[
f^{(k)}(a)=\frac{k!}{2\pi i}\int_{|z-c|=R}\frac{f(z)}{(z-a)^{k+1}}\,dz.
\]
This proves existence and continuity of successive derivatives; they were not hypotheses of T01.

For \(|z-c|\le r<R\), expand the kernel by the finite geometric identity. The exact remainder after degree \(N\ge0\) gives
\[
f(z)=\sum_{k=0}^N A_k(z-c)^k+\mathcal R_N(z),\quad
A_k=\frac1{2\pi i}\int_{|\zeta-c|=R}\frac{f(\zeta)}{(\zeta-c)^{k+1}}\,d\zeta,
\]
\[
|\mathcal R_N(z)|\le\frac{MR}{R-r}(r/R)^{N+1},\qquad
M=\max_{|\zeta-c|=R}|f(\zeta)|.
\]
Indeed the kernel remainder is \((z-c)^{N+1}/[(\zeta-c)^{N+1}(\zeta-z)]\), and the circle length is \(2\pi R\). The bound tends to zero uniformly on each smaller closed disk. Also \(A_k=f^{(k)}(c)/k!\); hence a holomorphic function is locally represented by its Taylor series.

**Identity theorem proved from this expansion.** If a Taylor series is not identically zero, choose its first nonzero coefficient \(A_m\). Factoring \((z-c)^m\) leaves a continuous factor nonzero near \(c\); zeros are isolated there. Thus an accumulating sequence of distinct zeros with an interior accumulation point forces all coefficients at that point to vanish and the function to vanish in a neighborhood. In a connected domain, the set of points having a zero neighborhood is open. It is relatively closed: at a closure point either it already contains a neighborhood or distinct zeros accumulate there, giving one by the preceding argument. Connectedness makes that nonempty set the whole domain. Equality of two holomorphic functions follows by applying this to their difference.

The maximum principle follows too: an interior local maximum of \(|f|\) and the circle mean formula force equality in the triangle bound, so all nearby circle values have the same value; then identity extends constancy on a connected domain. The equality step uses continuity: if a continuous boundary value had a different phase or strictly smaller modulus on an arc, the average's modulus would be strictly smaller. Bounded entire functions are constant since Cauchy's bound \(|f'(a)|\le M/R\) holds for every radius \(R\), so \(f'=0\); path primitives or local constancy then yield constancy.

## Finite poles, winding and a broader contour theorem

For a contour \(\gamma\) avoiding \(a\), define \(\operatorname{Ind}(\gamma,a)=(2\pi i)^{-1}\int_\gamma dz/(z-a)\). A closed contour has integer index. To justify that assertion, cover its normalized directions by small open half-circle arcs and subdivide the compact parameter interval so each subarc stays in one such arc. Choose a continuous angle there and adjust successive choices by multiples of \(2\pi\) at their common endpoints. This constructs a continuous angle \(\theta(t)\) along the whole path, piecewise C¹ whenever the path is C¹. Writing \(\gamma-a=\rho e^{i\theta}\) gives \(\gamma'/(\gamma-a)=\rho'/\rho+i\theta'\). Its integral is \(i(\theta(1)-\theta(0))=2\pi i k\), since the endpoints agree and \(\rho(1)=\rho(0)>0\). This proves the integer statement without assuming every closed path is a simple boundary.

**ANA-ADV-T05 — Finite-pole residue consequence.** Suppose \(U\) is open and \(f\) is holomorphic on \(U\setminus\{a_1,\ldots,a_m\}\), with a pole of finite order at each listed point. Let \(\gamma\) be a closed contour in the punctured domain which is null-homotopic in \(U\) (the contraction may cross the listed poles). Then
\[
\int_\gamma f(z)\,dz
=2\pi i\sum_{j=1}^m\operatorname{Ind}(\gamma,a_j)\operatorname{Res}(f,a_j).
\]
**Proof.** At a pole of order \(m_j\), write \(f(z)=h_j(z)/(z-a_j)^{m_j}\), where \(h_j\) is holomorphic near \(a_j\) and \(h_j(a_j)\ne0\). Taylor's theorem for \(h_j\) gives a finite principal part \(P_j(z)=\sum_{k=1}^{m_j}b_{j,-k}(z-a_j)^{-k}\); the difference extends holomorphically across \(a_j\), as follows directly by dividing the convergent Taylor tail. Thus \(g=f-\sum P_j\) extends holomorphically to all of \(U\). By T03, \(\int_\gamma g=0\). Terms with \(k\ge2\) have global primitive \(-(k-1)^{-1}(z-a_j)^{-(k-1)}\) off their pole, so their contour integrals vanish. The \(k=1\) terms give the index formula. No general Laurent theorem, unproved removal claim or arbitrary homology theorem was needed.

For a counterclockwise circle centered at zero, \(\operatorname{Ind}=1\) for a point strictly inside and 0 for a point strictly outside. The inside case follows from T04 applied to the constant function 1; the outside case has a primitive locally patched on the whole disk by T02. A point **on** the circle makes the integrand singular and is refused. Traversal multiplicity and reversed orientation multiply the index, rather than merely asking whether a drawing “looks enclosing”.

## Twelve mixed checkpoints with full models

Attempt all twelve before comparing the models. Each answer must state its hypotheses.

**ANA-ADV-Q01.** In T01, explain why four midpoint children suffice even if \(f'\) is not continuous. **Model:** cancellation gives \(I(T)=\sum I(T_j)\), so a child has modulus at least \(|I(T)|/4\). Diameters and perimeters halve, leaving the error at most \(\varepsilon dp/4^n\). Only the derivative at the common limiting point enters the expansion. A compact-set maximum of \(|f'|\) is neither supplied nor used.

**ANA-ADV-Q02.** Prove the disk primitive's derivative, rather than differentiating an endpoint informally. **Model:** the triangle identity gives \(F(z+h)-F(z)=h\int_0^1 f(z+th)dt\). The divided error is bounded by the supremum of \(|f(w)-f(z)|\) in a shrinking disk, which tends to zero by continuity. Thus \(F'=f\).

**ANA-ADV-Q03.** A student integrates the image of every line in a continuous homotopy. Repair the proof. **Model:** those images need not be rectifiable. Use compact primitive disks and a uniform grid; integrate straight chords between mapped vertices. Each cell sum is zero, internal chords cancel, and only the two actual contour subarcs are replaced by equal primitive differences. Constant or matching end sides cancel.

**ANA-ADV-Q04.** Compare \(\int dz/z\) on circles of radii 1 and 3 in \(\mathbb C\setminus\{0\}\). Can either shrink to a point there? **Model:** direct parameterization gives \(2\pi i\) for both counterclockwise circles; interpolating positive radii is a valid homotopy. A contraction would, by T03, equate this with the constant loop's zero integral, impossible.

**ANA-ADV-Q05.** Why does the proof of T04 work for an off-center interior \(a\)? **Model:** for the displayed circle homotopy, \(R_s-|c_s-a|=(1-s)(R-|a-c|)+s\epsilon>0\); it avoids \(a\) and stays in the original closed disk. The inner remainder bound is \(2\pi\sup|f(z)-f(a)|\), which tends to zero without a derivative bound.

**ANA-ADV-Q06.** State a uniform degree-\(N\) Taylor remainder bound on \(|z-c|\le R/2\). **Model:** put \(r=R/2\) in the proved bound to obtain \(2M\,2^{-(N+1)}=M2^{-N}\). At \(N=2\) this is \(M/4\). The fixed enclosing disk must have a holomorphic neighborhood.

**ANA-ADV-Q07.** Why is agreement on a sequence sufficient only when its accumulation point is interior? **Model:** isolated-zero factorization from Taylor's theorem rules out accumulating distinct zeros inside a nonzero holomorphic germ. A boundary accumulation does not force its Taylor coefficients at an interior point to vanish. For example \(\sin(\pi/z)\) is holomorphic on the punctured plane and vanishes at \(1/n\); its accumulation point zero is outside that domain.

**ANA-ADV-Q08.** Is \(A=\{z:1<|z|<4\}\) complete or totally bounded in Euclidean distance? **Model:** it is totally bounded as a bounded planar set, by a finite grid. The real sequence \(1+3/(n+1)\) lies in \(A\), is Cauchy, and tends to the excluded point 1, so \(A\) is not complete and cannot be compact. Its closure is closed and bounded; coordinate subsequences prove compactness and coordinate Cauchy completeness proves completeness.

**ANA-ADV-Q09.** On \((0,1)\), compare \(n1_{(0,1/n)}\) with \(1_{[0,n]}e^{-x}\) on \([0,\infty)\). **Model:** the first converges pointwise to zero but has integral 1, excluding an integrable common envelope by DCT. The second increases nonnegatively to \(e^{-x}\) and has integral \(1-e^{-n}\to1\); MCT applies, or DCT with the single envelope \(e^{-x}\). These conclusions concern Lebesgue integrals and null modifications do not change them.

**ANA-ADV-Q10.** Prove plane completeness and compactness of a closed bounded annulus without applying a real-line theorem unchanged. **Model:** a complex Cauchy sequence has Cauchy real and imaginary coordinates, hence a complex limit by completeness of \(\mathbb R\); the modulus inequalities pass to the limit. For a sequence in the annulus, select a convergent real-coordinate subsequence and then a convergent imaginary-coordinate subsequence by real Bolzano–Weierstrass. The resulting complex subsequence converges, and closedness retains it. Sequential compactness equals compactness in a metric space, as proved in Lucent's metric-compactness lesson.

**ANA-ADV-Q11.** On the principal slit plane, use \(z=w=e^{3\pi i/4}\) to audit \(\operatorname{Log}(zw)=\operatorname{Log}z+\operatorname{Log}w\). **Model:** all three inputs lie off the nonpositive real ray. Their log magnitudes are zero; the sum on the right is \(3\pi i/2\), while \(zw=-i\) has principal logarithm \(-\pi i/2\). The discrepancy is \(2\pi i\). Input membership alone does not ensure chosen arguments add inside \((-\pi,\pi)\).

**ANA-ADV-Q12.** Why cannot one apply T05 to \(f(z)=1/[z(z-2)]\) on the circle \(|z|=2\)? **Model:** \(z=2\) is a pole on the contour, so there is no ordinary contour integral of the stated kind. Excluding that parameter or inventing half a residue changes the problem. If the radius is 3, both poles are strictly inside and residues \(-1/2,1/2\) cancel, giving zero; if the radius is 1, only zero is inside, giving \(-\pi i\).

## Supplied cumulative family and required deliverables

The following are three distinct public forms, not a reserved assessment pool. For every form use its row in this **task input table**; \(n\) always ranges over positive integers.

| Form | a | R | rho | b | alpha | theta/pi |
| --- | --- | --- | --- | --- | --- | --- |
| ANA-ADV-P001 | 2 | 4 | 1 | 3 | 1 | 3/4 |
| ANA-ADV-C001 | -3 | 5 | 1 | -2 | 3/2 | 2/3 |
| ANA-ADV-R001 | 3 | 6 | 2 | 1/2 | 2 | 4/5 |

Define
\[
K=\{z:\rho\le|z|\le R\},\quad A=\{z:\rho<|z|<R\},\quad
F(z)=\frac1{z-a}+\frac b z,\quad G(z)=\frac1{z-a},
\]
\[
u_{n,\alpha}(x)=\frac{n^\alpha x}{1+n^2x^2}\quad(0\le x\le1).
\]
The contour \(\Gamma_R(t)=Re^{it}\), \(0\le t\le2\pi\), is counterclockwise; \(\Gamma_\rho\) has the same convention. All pole positions and radii are exact; refuse an ordinary integral if a pole lies on its contour.

For **each** form submit eight connected deliverables:

1. Prove that \(K\) is complete and compact, and that \(A\) is totally bounded but not complete. Give the explicit Cauchy witness \(\rho+(R-\rho)/(n+1)\), its limit, and a finite-grid covering argument.
2. Classify pointwise and uniform convergence of \(u_{n,\alpha}\), deriving its exact supremum and a moving witness. Compute the value at \(n=4,x=1/4\).
3. Derive its exact integral, select an appropriate measure theorem, and state a failed competing hypothesis. Treat a possibly infinite limiting integral honestly.
4. Reconstruct the full Goursat proof and the continuous-homotopy chord argument; identify where completeness, compactness and holomorphy enter. Do not substitute the earlier C¹ Green proof.
5. Find \(\int_{\Gamma_R}F\), \(\int_{\Gamma_\rho}F\) and their difference, stating the domain and why an annular zero-boundary argument for \(F\) would fail. Explain the extra small hole needed around \(a\).
6. For \(G\) on the closed \(\rho\)-disk, compute the first three Taylor coefficients, \(G'(0)\), exact boundary maximum \(M\), the Cauchy derivative bound, and a uniform degree-two remainder certificate on \(|z|\le\rho/2\). Distinguish the generic bound from the exact rational remainder.
7. For \(z=w=e^{i\theta}\), compute both principal-log expressions and their discrepancy. Prove there is no continuous single-valued logarithm on \(A\).
8. Preserve the hypotheses/claim ledger and a corrected proof: say which conclusions are metric, holomorphic, measure-theoretic, finite calculations or imported foundational facts; explain one changed-domain or dropped-hypothesis failure.

### Common calculations proved before the three models

For \(t=nx\), \(t/(1+t^2)\le1/2\), with equality at \(t=1\). Hence
\[
\sup_{0\le x\le1}u_{n,\alpha}(x)=\tfrac12 n^{\alpha-1},\quad x=1/n.
\]
At fixed \(x>0\), rewrite the expression as \(n^{\alpha-2}x/(x^2+n^{-2})\). Thus the pointwise limit is zero for \(\alpha<2\), is \(1/x\) for \(\alpha=2\), and diverges for \(\alpha>2\); the value at zero is always zero. Uniform convergence to zero occurs exactly for \(\alpha<1\); at \(\alpha=2\) the noncontinuous pointwise limit also excludes uniform convergence.

Direct substitution \(v=1+n^2x^2\) gives
\[
\int_0^1u_{n,\alpha}(x)\,dx=\tfrac12 n^{\alpha-2}\log(1+n^2).
\]
For \(0<\alpha<2\), \(u_{n,\alpha}(x)=x^{1-\alpha}t^\alpha/(1+t^2)\le x^{1-\alpha}\) for \(x>0\): if \(t\le1\), \(t^\alpha\le1\), and if \(t\ge1\), \(t^\alpha\le t^2\). That envelope is integrable on \((0,1)\) exactly when \(\alpha<2\). It gives DCT for the two selected subcritical forms. At \(\alpha=2\), \(u_{n,2}\) increases pointwise to \(1/x\) off zero, so MCT gives the infinite integral. No finite envelope can make DCT apply there.

The pole \(a\) lies outside the \(\rho\)-disk and inside the \(R\)-circle in all three input rows. T05 therefore gives, in units of \(2\pi i\),
\[
\int_{\Gamma_R}F/(2\pi i)=1+b,\quad
\int_{\Gamma_\rho}F/(2\pi i)=b,\quad
(\int_{\Gamma_R}F-\int_{\Gamma_\rho}F)/(2\pi i)=1.
\]
The difference is not zero because \(a\) is a pole in the intervening annular region. Removing a sufficiently small disk about \(a\) makes the boundary identity legitimate, with its new inner counterclockwise integral \(2\pi i\). These computations use separate valid disk/residue arguments; the original annulus is not a holomorphy domain of \(F\).

For \(G\), coefficients \(A_k=-a^{-(k+1)}\), \(G'(0)=-a^{-2}\), and \(M=1/(|a|-\rho)\). Reverse triangle inequality gives the bound, with equality at the boundary point directed toward \(a\). Cauchy's estimate is \(|G'(0)|\le M/\rho\). The exact degree-two tail is
\[
G(z)-(A_0+A_1z+A_2z^2)=-\frac{(z/a)^3}{a(1-z/a)}.
\]
On \(|z|\le r=\rho/2\), its modulus is at most \(r^3/[|a|^3(|a|-r)]\). The generic Taylor theorem proved above gives the also-valid certificate \(M/4\), usually looser. Neither is an estimate of numerical rounding.

### ANA-ADV-P001 — Complete primary model

1. Here \(K=\{1\le|z|\le4\}\). Coordinate completeness and closedness prove completeness. Coordinate Bolzano–Weierstrass plus the retained modulus inequalities prove sequential compactness, hence compactness. A finite square grid on \([-4,4]^2\), with width \(h<\varepsilon/\sqrt2\), gives a finite \(\varepsilon\)-net for \(K\) by choosing a \(K\)-point from each square meeting \(K\). For its open annulus \(A\), choose an \(A\)-point from each square meeting \(A\); the same mesh estimate gives centers in the space being covered. The sequence \(1+3/(n+1)\) lies in the open annulus and tends to excluded 1, proving noncompleteness and noncompactness.
2. With \(\alpha=1\), pointwise convergence is zero, including \(x=0\), but the exact supremum is \(1/2\) at \(x=1/n\). Thus convergence is not uniform. At \(n=4,x=1/4\), the value is \(1/2\).
3. The direct integral is \(\log(1+n^2)/(2n)\). The single envelope \(1/2\) is integrable on \([0,1]\), so DCT proves the integral tends to zero. This agrees with the formula; uniform convergence is unnecessary. A plot or finite list of sample points cannot replace the shared-index definition it fails.
4. For the supplied triangle \(d=2\sqrt2\), \(p=4+2\sqrt2\). Each selected \(T_n\) has those lengths divided by \(2^n\). Cancellation, the derivative expansion at the unique common point and the contour bound give \(|I(T)|\le\varepsilon(2\sqrt2)(4+2\sqrt2)\), hence zero for every holomorphic function on its neighborhood. For a continuous deformation use the compact primitive-ball grid and integrate chords; the true boundary arcs equal their chord integrals by local primitives. There is no derivative-continuity step.
5. \(F=1/(z-2)+3/z\). The outer integral is \(8\pi i\), the inner is \(6\pi i\), and their difference is \(2\pi i\). The singularity at 2 lies in the annular region \(1<|z|<4\). A disk of radius \(1/2\) about 2 lies wholly inside it and avoids zero; removing it yields the correct three-boundary domain. Its extra counterclockwise integral is \(2\pi i\), since only the residue 1 is enclosed.
6. \(G'(0)=-1/4\), and the first coefficients are \(-1/2,-1/4,-1/8\). The boundary maximum on \(|z|=1\) is 1 at \(z=1\), so the derivative bound is 1. On \(|z|\le1/2\), the generic remainder bound is \(1/4\); the exact-tail estimate is \(1/96\), since \((1/2)^3/[2^3(2-1/2)]=1/96\).
7. With \(\theta=3\pi/4\), \(\operatorname{Log}z+\operatorname{Log}w=3\pi i/2\), while \(\operatorname{Log}(zw)=-\pi i/2\); the former minus latter is \(2\pi i\). A continuous log on the entire annulus would give along a once-around circle an angle change \(2\pi\), although the endpoints are the same point, contradicting single-valuedness. This uses the finite local angle-lift argument already proved, not merely the placement of the conventional slit.
8. The exact entries follow from the stated data; the contour conclusions additionally use holomorphy on the actual domains and winding. Coordinate compactness and continuous homotopy are metric/topological facts; DCT uses a fixed measurable space and an integrable envelope. The standard Lebesgue construction is imported. Correcting an attempted zero annular integral requires removing the pole at 2, not a smaller integration step.

### ANA-ADV-C001 — Complete changed model

Use the changed row before comparing this key; do not carry the primary pole or sign into it.

1. \(K=\{1\le|z|\le5\}\) is closed and bounded in the complete plane, and the coordinate-subsequence proof gives compactness. An occupied finite grid in \([-5,5]^2\) proves total boundedness; \(1+4/(n+1)\to1\) is a Cauchy sequence in the open annulus with no limit there.
2. Now \(\alpha=3/2\). Every fixed positive input tends to zero, and zero stays zero. The supremum is \(\sqrt n/2\), so uniform convergence to zero fails more strongly than in the primary. At \(n=4,x=1/4\) the value is 1.
3. The integral is \(\log(1+n^2)/(2\sqrt n)\). Put \(t=nx\); the proved bound \(t^{3/2}/(1+t^2)\le1\) gives \(u_{n,3/2}\le x^{-1/2}\) for \(x>0\). This common envelope has integral 2. DCT therefore gives integral limit zero despite the growing suprema. No uniform boundedness theorem for this family is available; finite pointwise limits alone still would not justify the interchange.
4. The Goursat and chord-grid proofs in deliverable 4 of the primary apply with no change of hypotheses; their full proof is T01–T03 above. In particular the derivative expansion is at one nested-triangle limit point; no bound on all derivative values is introduced by changing \(a\). State the internal-edge cancellation, nested-point existence and \(\varepsilon dp\) estimate explicitly in the reconstruction.
5. \(F=1/(z+3)-2/z\). The residue coefficients inside the outer circle are 1 and -2, so its integral is \(-2\pi i\). The inner integral is \(-4\pi i\). Their difference is \(2\pi i\); negative outer value reflects residues, not reversed orientation. The pole at -3 is in \(1<|z|<5\). Removing the disk of radius \(1/2\) about -3 supplies the extra boundary carrying residue 1.
6. Coefficients are \(1/3,-1/9,1/27\), with \(G'(0)=-1/9\). On the unit circle the exact maximum is \(1/2\), attained at \(z=-1\). Thus the derivative bound is \(1/2\). On \(|z|\le1/2\), the generic degree-two error bound is \(1/8\); the exact-tail estimate is \(1/540\).
7. For \(\theta=2\pi/3\), the log sum is \(4\pi i/3\), while the principal product log is \(-2\pi i/3\). Again the discrepancy is \(2\pi i\), although every input is in the slit domain. A once-around annular circle still forbids a global continuous logarithm by its nonzero angle increment.
8. A derivative estimate requires the disk free of poles even when a larger outer contour encloses them. The new envelope succeeds in \(L^1\) without a sup-norm bound, while the annular deformation fails precisely at -3. These are different control questions; retain the source theorem used and the first corrected step.

### ANA-ADV-R001 — Complete later-return model

At another sitting close the earlier keys, use the return row and reconstruct all eight deliverables. Declare earlier help or exposure. There is no enforced delay or claim that this public form is unseen.

1. \(K=\{2\le|z|\le6\}\) is complete and compact by the same fully stated coordinate argument: Cauchy coordinates converge and the inequalities pass to the limit; every bounded sequence has a coordinatewise convergent subsequence. A finite grid proves total boundedness. The sequence \(2+4/(n+1)\to2\) remains in the open annulus and has no limit in it.
2. Here \(\alpha=2\). At zero the limit is zero, and at every \(x>0\) it is \(1/x\), so it is not a continuous limit on \([0,1]\). The exact supremum \(n/2\) and the moving point \(1/n\) also refute uniform convergence. At \(n=4,x=1/4\) the value is 2.
3. The integral is \(\tfrac12\log(1+n^2)\to+\infty\). For each \(x>0\), write \(u_{n,2}=(1/x)\,n^2x^2/(1+n^2x^2)\); it increases with \(n\). MCT applies to these nonnegative measurable functions and permits the infinite limit \(\int_0^1dx/x=+\infty\). DCT does not: an integrable common envelope would force the nonintegrable pointwise limit to be integrable. Reporting finite convergence because the earlier two forms had it would change the theorem's hypotheses.
4. Reconstruct T01's four-child cancellation and nested compact triangle, then the one-point derivative remainder and \(\varepsilon dp\) estimate. Reconstruct T03 using finite primitive disks, uniform-continuity cells and chord cancellation, replacing only actual contour boundary arcs by primitive differences. This remains a holomorphic-only proof even though the measure conclusion has changed.
5. \(F=1/(z-3)+(1/2)/z\). Outer residue sum \(3/2\) gives \(3\pi i\); the inner residue \(1/2\) gives \(\pi i\); the difference is \(2\pi i\). The pole at 3 lies between radii 2 and 6, so the unpunctured annular identity still fails. The disk of radius \(1/2\) about 3 is contained in that annular region, and its extra counterclockwise boundary contributes \(2\pi i\).
6. Coefficients are \(-1/3,-1/9,-1/27\); \(G'(0)=-1/9\). On \(|z|=2\) the exact maximum is 1 at \(z=2\), giving the derivative bound \(1/2\). On \(|z|\le1\), the generic degree-two bound is \(1/4\), while the exact-tail estimate is \(1/54\).
7. With \(\theta=4\pi/5\), the log sum is \(8\pi i/5\) and product log is \(-2\pi i/5\), differing by \(2\pi i\). The annulus's loop again has index 1, hence cannot support a single-valued continuous logarithm. A different cut can support a branch locally; it cannot remove the full once-around obstruction.
8. Retain the three different measure outcomes alongside the identical contour-difference mechanism. The return changes integrability at the threshold; neither an exact contour answer nor a graph authorizes DCT. State the imported Lebesgue construction and finite polygonal triangulation separately from the analytic theorems proved here, and preserve the original argument beside its repair.

### Exact comparison tables for all three forms

These tables are model outputs, not inputs to the calculations.

| Form | Value at n=4,x=1/4 | Outer integral / (2 pi i) | Inner integral / (2 pi i) | Difference / (2 pi i) |
| --- | --- | --- | --- | --- |
| ANA-ADV-P001 | 1/2 | 4 | 3 | 1 |
| ANA-ADV-C001 | 1 | -1 | -2 | 1 |
| ANA-ADV-R001 | 2 | 3/2 | 1/2 | 1 |

| Form | A0 | A1 | A2 | Gprime(0) | Boundary M | Derivative bound | Generic remainder bound | Exact-tail bound |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ANA-ADV-P001 | -1/2 | -1/4 | -1/8 | -1/4 | 1 | 1 | 1/4 | 1/96 |
| ANA-ADV-C001 | 1/3 | -1/9 | 1/27 | -1/9 | 1/2 | 1/2 | 1/8 | 1/540 |
| ANA-ADV-R001 | -1/3 | -1/9 | -1/27 | -1/9 | 1 | 1/2 | 1/4 | 1/54 |

| Form | Sum of principal logs / (pi i) | Principal product log / (pi i) | Difference / (pi i) | Measure integral limit |
| --- | --- | --- | --- | --- |
| ANA-ADV-P001 | 3/2 | -1/2 | 2 | 0 |
| ANA-ADV-C001 | 4/3 | -2/3 | 2 | 0 |
| ANA-ADV-R001 | 8/5 | -2/5 | 2 | +infinity |

## Feedback, continuation and records

| First consequential error | Repair and a required check |
| --- | --- |
| Fixed-point algebra or boundedness used before existence | Return to Lucent completeness/sequences and the actual invariant-domain or Cauchy argument |
| A real-line compactness statement applied to any metric space | Reconstruct the coordinate argument here and Lucent's total-boundedness/completeness distinction; compare the missing annular boundary |
| Goursat proved using a maximum of fprime | Restore the nested-triangle one-point derivative expansion and its perimeter-times-diameter bound |
| Arbitrary continuous homotopy grid images integrated | Use primitive-disk chords and only piecewise C¹ true boundary paths; show the cancellations |
| A pole crossed in a deformation | State the actual holomorphy domain and remove the extra disk; compare the nonzero contour difference |
| Cauchy's formula justified by an unproved holomorphic extension | Use the punctured-circle homotopy and continuity remainder, then derive derivatives/Taylor in that order |
| Principal-log product laws used without an angle check | Record the three inputs and chosen arguments; reconstruct the explicit 2pi discrepancy |
| Pointwise convergence called uniform or integrable | Give the exact supremum/moving point and a separate MCT/DCT hypothesis ledger |
| An infinite MCT limit treated as DCT failure of the answer | Preserve nonnegativity and monotonicity; infinity is a legitimate MCT conclusion |
| An output table copied as its own proof | Recompute from the input row and supply all eight arguments; exact finite values do not prove global convergence theorems |

Use complete, revise or missing with a line of evidence for each deliverable. These labels and any inherited native rubric are descriptive self-review, not a learner grade. Keep dated first, comparison and corrected worksheets, exact source/task labels, help/exposure and the reason for each change. The worksheet portfolio guide explains file recovery: a shared reading note remains one mutable string, and notebook backup does not automatically include learner-owned files or separate native stores. Use the existing relevant export controls and check recovery without inventing new shared writing contracts.

Stop after the native selected work, twelve checkpoints, all three mixed portfolios and recorded revisions. Later study can develop full measure construction and signed measures/Radon–Nikodym, functional and harmonic analysis, analytic continuation, Riemann mapping and Riemann surfaces with their own prerequisites. They are not claimed complete by the contour theorems here. No component estimate, public answer opening, optional program or remembered solution establishes workload calibration, retained mastery or a whole-book release.
