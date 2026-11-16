var e=`---
parent_id: book-proof-safe-real-analysis
matter_id: glossary-and-theorem-index
title: "Glossary and Theorem Finder"
license: CC BY-SA 4.0
---

# Glossary and Theorem Finder {#section-1-glossary-and-theorem-finder}

<a id="section-1-additions-in-the-current-classical-route"></a>
## Additions in the current classical route {#section-3-additions-in-the-current-classical-route}

- **Bounded variation:** the supremum of sums of absolute increments over finite increasing partitions is finite. The [variation chapter](#/item/book-proof-safe-real-analysis?chapter=bounded-variation-stieltjes) proves interval additivity and normalized Jordan decomposition.
- **Riemann–Stieltjes integral:** the mesh limit of sums of sampled integrand values times integrator increments, under the chapter's explicit arbitrary-tag convention. Continuous integrands and BV integrators give an existence theorem.
- **Uniformly dense algebra:** every continuous target has an arbitrarily accurate uniform approximant in the algebra. The [approximation chapter](#/item/book-proof-safe-real-analysis?chapter=stone-weierstrass-approximation) proves Bernstein–Weierstrass and the real Stone–Weierstrass theorem.
- **Baire space:** a space in which each countable intersection of open dense sets is dense. The [category chapter](#/item/book-proof-safe-real-analysis?chapter=baire-category) proves the complete-metric theorem and uniform boundedness.
- **Total derivative:** one linear map whose remainder is smaller in relative magnitude than the input displacement in every direction at once. The [Euclidean chapter](#/item/book-proof-safe-real-analysis?chapter=differentiation-in-r-n) distinguishes this from directional tests.
- **Local inverse and implicit graph:** the [local inversion chapter](#/item/book-proof-safe-real-analysis?chapter=inverse-implicit-function-theorems) constructs neighbourhood bijections and unique local constraint solutions using contractions.

The earlier glossary remains below. Its measure and Fourier entries refer to retained continuation resources rather than required chapters of the current classical route.

This back matter is a retrieval aid, not a substitute for theorem statements in context. A glossary entry gives the book’s working meaning; the theorem finder names the hypotheses that are most often lost in memory. Except for the current-route fixed-point and complete-space references (Chapter 18), chapter numbers in this retained glossary follow the earlier edition; measure and Fourier locators are historical continuation locators. Use the named current-route chapters above for new topics. Before applying a result, return to the chapter and verify domains, endpoint conventions, measurability, and convergence modes.

<a id="section-14-glossary"></a>
## Glossary {#section-16-glossary}

<a id="section-16-a"></a>
### A {#section-18-a}

**Absolute continuity.** A function \\(F:[a,b]\\to R\\) is absolutely continuous when, for every \\(\\varepsilon>0\\), there is \\(\\delta>0\\) such that every finite disjoint collection of intervals \\((a_k,b_k)\\) with total length below \\(\\delta\\) satisfies \\(\\sum |F(b_k)-F(a_k)|<\\varepsilon\\). It is stronger than uniform continuity and is the right regularity for recovering \\(F\\) by integrating \\(F'\\). Chapter 13.

**Absolute convergence.** A series \\(\\sum a_n\\) is absolutely convergent when \\(\\sum |a_n|\\) converges. Absolute convergence permits rearrangement without changing the sum; conditional convergence does not. Chapter 4.

**Almost everywhere (a.e.).** A property holds almost everywhere when the set on which it fails is measurable and has measure zero. It does not mean “at all but finitely many points” or “with high probability” unless a separate setting makes those phrases equivalent. Chapters 16–19.

**Analytic function.** A real function is analytic near a point when it agrees there with a convergent power series. Infinite differentiability alone is insufficient. Chapter 15.

**Archimedean property.** For every real \\(x\\), some natural number exceeds \\(x\\). Equivalently, positive reciprocals \\(1/n\\) can be made smaller than any positive tolerance. Chapter 2.

**Arzela–Ascoli mechanism.** On a compact domain, equicontinuity plus pointwise relative compactness yields subsequential uniform convergence. For real-valued families, uniform boundedness supplies pointwise relative compactness. Chapter 9.

<a id="section-30-b"></a>
### B {#section-32-b}

**Banach space.** A normed vector space complete in the metric induced by its norm. Completeness allows convergent-series and fixed-point arguments to land inside the space. Current Chapter 18; retained normed-space continuation.

**Bolzano–Weierstrass property.** Every bounded sequence in finite-dimensional Euclidean space has a convergent subsequence. On the real line it is a form of sequential compactness for closed bounded sets. Chapter 6.

**Boundary.** The set of points every neighborhood of which meets both a set and its complement. A boundary point may belong to the set or not. Chapter 5.

**Bounded convergence.** A phrase requiring care: uniform boundedness plus pointwise convergence is not enough on every measure space for convergence of integrals. On a finite-measure space, a common finite bound provides an integrable dominator. Chapter 18.

<a id="section-40-c"></a>
### C {#section-42-c}

**Cauchy sequence.** A sequence whose sufficiently late terms are uniformly close to one another: \\(\\forall \\varepsilon>0 \\exists N \\forall m,n\\ge N\\), the distance is below \\(\\varepsilon\\). It need not name a candidate limit. Chapters 3 and 18.

**Closed set.** A set whose complement is open; in metric spaces, equivalently a set containing every limit of a convergent sequence from the set. Closedness is relative to an ambient space. Chapter 5.

**Compact set.** A set for which every open cover has a finite subcover. In metric spaces this is equivalent to sequential compactness. In \\(R^n\\), it is equivalent to closedness and boundedness. Chapter 6.

**Complete metric space.** A metric space in which every Cauchy sequence converges to a point of the space. A subset of a complete metric space is complete precisely when it is closed. Chapters 5 and 18.

**Conditional convergence.** Convergence of \\(\\sum a_n\\) without convergence of \\(\\sum |a_n|\\). Rearrangements can change the sum or destroy convergence. Chapter 4.

**Connected set.** A set not expressible as the union of two disjoint nonempty relatively open subsets. Connected subsets of \\(R\\) are exactly intervals. Chapter 7.

**Continuity at a point.** For every requested output tolerance there is an input neighborhood, centered at the point, whose points in the domain map within that tolerance. Sequential continuity is equivalent in metric spaces. Chapter 8.

**Contraction.** A map \\(T\\) for which \\(d(Tx,Ty)\\le q d(x,y)\\) for one constant \\(0\\le q<1\\). The strict uniform factor and completeness of the invariant domain power the contraction theorem. Chapter 18.

**Convex function.** A function whose value at a convex combination is at most the same convex combination of its endpoint values. For differentiable functions on intervals, monotonicity of the derivative is equivalent to convexity. Chapter 11.

**Cover.** A collection of sets whose union contains the target set. An open cover uses sets open in the relevant topology. Compactness extracts a finite subcover; it does not say the original cover was finite. Chapter 6.

<a id="section-62-d"></a>
### D {#section-64-d}

**Dense subset.** A subset whose closure is the whole ambient space; equivalently, every nonempty open set meets it. The rationals are dense in the reals despite being countable and measure zero. Chapters 2, 5, and 21.

**Derivative.** The limit of the difference quotient when it exists as a finite number. Differentiability implies continuity, but continuity does not imply differentiability. Chapter 10.

**Dominating function.** In dominated convergence, one integrable function \\(g\\) satisfying \\(|f_n|\\le g\\) almost everywhere for every \\(n\\). An envelope that changes with \\(n\\) does not meet the hypothesis. Chapter 18.

<a id="section-70-e"></a>
### E {#section-72-e}

**Equicontinuity.** A family-level continuity condition in which one neighborhood size works for every function in the family at the given point. Uniform equicontinuity asks for choices independent of both function and point. Chapter 9.

**Essential supremum.** The smallest extended bound holding almost everywhere. It ignores changes on null sets and defines the \\(L^\\infty\\) norm. Chapter 19.

**Extended real number.** An element of \\([-\\infty,\\infty]\\). Extended values make monotone limits convenient, but indeterminate expressions retain explicit restrictions. Chapters 2 and 17.

<a id="section-78-f"></a>
### F {#section-80-f}

**Fatou’s lemma.** For nonnegative measurable functions, the integral of the pointwise lower limit is at most the lower limit of the integrals. It supplies a one-sided conclusion without domination. Chapter 18.

**Fejer mean.** The average of the first Fourier partial sums. For continuous periodic functions it converges uniformly, avoiding the uncontrolled oscillation of raw partial sums. Chapter 21.

**Fixed point.** A point \\(x\\) satisfying \\(T(x)=x\\). Existence and uniqueness depend on hypotheses about the map and space; a numerical iterate near itself is only residual evidence. Chapter 18.

**Fourier coefficient.** The inner product of a periodic integrable function with a trigonometric basis function, under the chapter’s normalization. Coefficient decay and series convergence are different questions. Chapter 21.

<a id="section-88-h"></a>
### H {#section-90-h}

**Heine–Borel property.** In finite-dimensional Euclidean space, a set is compact exactly when it is closed and bounded. The equivalence fails in many infinite-dimensional normed spaces. Chapter 6.

**Holder inequality.** For conjugate exponents \\(p,q\\), \\(\\int |fg|\\le \\lVert f\\rVert_p\\lVert g\\rVert_q\\). It includes the \\(p=1,q=\\infty\\) endpoint and supports dual estimates. Chapter 19.

<a id="section-94-i"></a>
### I {#section-96-i}

**Infimum.** The greatest lower bound of a set. It need not be a member; if it is a member it is the minimum. Chapter 1.

**Interior.** The set of points possessing a neighborhood contained in the set. Interior depends on the ambient topology. Chapter 5.

**Intermediate value property.** A function has this property when every value between two output values occurs along the relevant connected domain. Continuous images of connected sets are connected. Chapter 7.

<a id="section-102-l"></a>
### L {#section-104-l}

**Lebesgue integral.** An integral built first for nonnegative simple functions, then nonnegative measurable functions by monotone approximation, and then signed integrable functions through positive and negative parts. Chapters 17–18.

**Lebesgue measurable set.** A set satisfying the Caratheodory splitting criterion for outer measure. Such sets form a sigma-algebra on which outer measure is countably additive. Chapter 16.

**Limit inferior and limit superior.** Tail quantities obtained from increasing tail infima and decreasing tail suprema. They record persistent lower and upper behavior and agree exactly when a bounded real sequence converges. Chapter 3.

**Lipschitz function.** A map satisfying \\(d(f(x),f(y))\\le L d(x,y)\\) for one finite constant \\(L\\). Lipschitz maps are uniformly continuous. A contraction has \\(L<1\\). Chapters 8 and 18.

**Lower sum.** For a bounded function on an interval and a partition, the sum of subinterval lengths times corresponding infima. Riemann integrability occurs when upper and lower approximations can be made arbitrarily close. Chapter 12.

<a id="section-114-m"></a>
### M {#section-116-m}

**Measurable function.** A function whose inverse images of suitable measurable target sets are measurable. For real-valued functions, it suffices to test rays such as \\(\\{f>a\\}\\). Chapter 17.

**Measure zero.** A set coverable by intervals whose total length is arbitrarily small, in the real-line construction. Countable sets have measure zero, but dense sets can have measure zero. Chapter 16.

**Metric.** A nonnegative, symmetric distance that vanishes exactly on equal points and satisfies the triangle inequality. Different metrics can induce the same topology while giving different quantitative estimates. Chapter 5.

**Minkowski inequality.** The triangle inequality for \\(L^p\\): \\(\\lVert f+g\\rVert_p\\le \\lVert f\\rVert_p+\\lVert g\\rVert_p\\) for \\(1\\le p\\le \\infty\\). Chapter 19.

**Monotone convergence theorem.** For a pointwise increasing sequence of nonnegative measurable functions, the integral of the limit equals the increasing limit of the integrals, allowing infinite values. Chapter 18.

<a id="section-126-n"></a>
### N {#section-128-n}

**Null set.** A measurable set of measure zero. Completeness of a measure means every subset of a null measurable set is measurable. Chapter 16.

**Norm.** A function measuring vector size that is definite, absolutely homogeneous, and subadditive. Every norm induces a metric; not every metric arises from a norm. Chapter 19.

<a id="section-132-o"></a>
### O {#section-134-o}

**Open set.** A set containing a neighborhood of each of its points. The empty set and whole space are open; arbitrary unions and finite intersections of open sets are open. Chapter 5.

**Outer measure.** A set function defined on all subsets, with empty-set value zero, monotonicity, and countable subadditivity. It need not be additive on every pair of sets. Chapter 16.

<a id="section-138-p"></a>
### P {#section-140-p}

**Pointwise convergence.** For each fixed point \\(x\\), the scalar sequence \\(f_n(x)\\) converges. The index required for a given accuracy may depend on \\(x\\). Chapter 14.

**Power series.** A series \\(\\sum a_n(x-c)^n\\) with a radius inside which it converges absolutely and uniformly on smaller closed subintervals. Endpoint behavior must be checked separately. Chapter 15.

<a id="section-144-r"></a>
### R {#section-146-r}

**Radius of convergence.** The threshold \\(R\\) for a power series: absolute convergence for \\(|x-c|<R\\) and divergence for \\(|x-c|>R\\), with endpoints undecided by the radius alone. Chapter 15.

**Rearrangement.** A permutation of the terms of a series. Absolute convergence preserves the sum; conditional convergence can permit different behavior. Chapter 4.

**Riemann integrable.** A bounded function whose upper and lower Darboux integrals agree, equivalently whose upper-minus-lower sums can be made arbitrarily small. Chapter 12.

<a id="section-152-s"></a>
### S {#section-154-s}

**Sigma-algebra.** A collection of subsets containing the empty set and closed under complements and countable unions; it is therefore closed under countable intersections. Chapter 16.

**Simple function.** A measurable function taking finitely many values, often written as a finite sum of coefficients times indicator functions. It is the first layer in the Lebesgue integral. Chapter 17.

**Subsequence.** A sequence obtained by composing with a strictly increasing sequence of indices. Every subsequence of a convergent sequence has the same limit. Chapter 3.

**Supremum.** The least upper bound. Completeness of \\(R\\) guarantees it for every nonempty real set bounded above. Chapter 1.

<a id="section-162-u"></a>
### U {#section-164-u}

**Uniform continuity.** Continuity with a delta choice independent of the point in the domain. Continuous functions on compact metric spaces are uniformly continuous. Chapter 8.

**Uniform convergence.** Convergence with an index choice independent of the point: \\(\\sup_x |f_n(x)-f(x)|\\to 0\\) when finite. It preserves continuity and, with suitable hypotheses, integrals and derivatives. Chapter 14.

**Uniform integrability.** A family-level condition preventing integral mass from concentrating on small sets or escaping through large values. It is discussed as a boundary mechanism, not developed in full generality. Chapters 18 and 22.

**Upper sum.** For a bounded function and partition, the sum of subinterval lengths times corresponding suprema. Chapter 12.

<a id="section-172-theorem-finder-by-mechanism"></a>
## Theorem finder by mechanism {#section-174-theorem-finder-by-mechanism}

<a id="section-174-completeness-and-order"></a>
### Completeness and order {#section-176-completeness-and-order}

**Least-upper-bound property (Chapter 1).** Every nonempty subset of \\(R\\) bounded above has a real supremum. Check both nonemptiness and the existence of an upper bound.

**Monotone convergence for sequences (Chapters 1 and 3).** An increasing sequence bounded above converges to its supremum; a decreasing sequence bounded below converges to its infimum. Monotonicity without boundedness is insufficient.

**Nested interval theorem (Chapter 1).** A nested sequence of nonempty closed bounded intervals whose lengths tend to zero has exactly one common point. Closedness and shrinking length perform different jobs.

**Archimedean and density results (Chapter 2).** Natural numbers eventually exceed every real; between distinct reals lies a rational and an irrational. Density does not imply completeness.

**Cauchy criterion in \\(R\\) (Chapter 3).** A real sequence converges exactly when it is Cauchy. The reverse direction uses completeness of the ambient number system.

<a id="section-186-series"></a>
### Series {#section-188-series}

**Cauchy criterion for series (Chapter 4).** A series converges exactly when every sufficiently late finite block has arbitrarily small sum. Control must hold for all endpoints of the block.

**Comparison tests (Chapter 4).** Eventual domination by a convergent nonnegative series gives convergence; eventual domination below by a divergent nonnegative series gives divergence. Sign conditions matter.

**Ratio and root tests (Chapter 4).** A limiting upper ratio/root below one gives absolute convergence; a limiting lower value above one gives divergence. The boundary value one is inconclusive.

**Alternating-series estimate (Chapter 4).** Decreasing nonnegative terms tending to zero give convergence and an error bounded by the first omitted term. Every adjective is a hypothesis.

**Rearrangement theorem for absolute convergence (Chapter 4).** Every rearrangement of an absolutely convergent series has the same sum. Do not export this conclusion to conditional series.

<a id="section-198-metric-topology-and-compactness"></a>
### Metric topology and compactness {#section-200-metric-topology-and-compactness}

**Sequential characterization of closed sets (Chapter 5).** In a metric space, a set is closed exactly when it contains limits of its convergent sequences. The limit is taken in the ambient space.

**Closed subsets of complete spaces (Chapter 5).** A subset of a complete metric space is complete under the induced metric exactly when it is closed.

**Compactness equivalences in metric spaces (Chapter 6).** Open-cover compactness, sequential compactness, and complete plus totally bounded agree. The equivalence is not asserted for arbitrary topological spaces.

**Heine–Borel in finite dimensions (Chapter 6).** A subset of \\(R^n\\) is compact exactly when closed and bounded. Bounded closed balls need not be compact in infinite-dimensional normed spaces.

**Continuous image of compact is compact (Chapters 6 and 8).** Continuity and compactness imply preservation of compactness; for a nonempty real-valued image, this yields boundedness and attainment of extrema.

**Extreme value theorem (Chapter 8).** A continuous real-valued function on a nonempty compact domain attains both maximum and minimum.

<a id="section-212-connectedness-and-continuity"></a>
### Connectedness and continuity {#section-214-connectedness-and-continuity}

**Connected subsets of \\(R\\) (Chapter 7).** A subset of the real line is connected exactly when it is an interval in the order-convex sense.

**Continuous image of connected is connected (Chapter 7).** The image must be taken under a continuous map; the conclusion concerns connectedness in the codomain.

**Intermediate value theorem (Chapter 7).** A continuous real function on an interval takes every value between two of its values. For root existence, verify a sign change and continuity on the entire interval.

**Sequential criterion for continuity (Chapter 8).** Between metric spaces, continuity at \\(a\\) is equivalent to preserving the limits of all sequences converging to \\(a\\).

**Heine–Cantor theorem (Chapter 8).** A continuous map on a compact metric space is uniformly continuous. Compactness belongs to the domain.

**Extension from a dense set (Chapter 8).** A uniformly continuous map from a dense subset into a complete codomain extends uniquely and continuously to the closure. Completeness ensures Cauchy image sequences land.

**Arzela–Ascoli (Chapter 9).** An equicontinuous uniformly bounded sequence of real-valued continuous functions on a compact metric space has a uniformly convergent subsequence. Variants require their own pointwise compactness hypotheses.

<a id="section-228-differentiation-and-convexity"></a>
### Differentiation and convexity {#section-230-differentiation-and-convexity}

**Differentiability implies continuity (Chapter 10).** Differentiability at a point forces continuity there; no converse is claimed.

**Rolle and mean value theorems (Chapter 10).** Continuity on the closed interval and differentiability on the open interval yield an interior point with the secant slope. Endpoint differentiability is not required; interior gaps are not allowed.

**Darboux property for derivatives (Chapter 10).** Derivatives have the intermediate value property even when discontinuous. Not every intermediate-value function is a derivative without further work.

**Taylor theorem (Chapter 11).** The differentiability assumptions and remainder form determine the conclusion. An asymptotic remainder and a numerical error bound are not interchangeable.

**Supporting-line characterization of convexity (Chapter 11).** A differentiable function on an interval is convex exactly when it lies above each tangent line; equivalently its derivative is nondecreasing.

<a id="section-240-riemann-integration-and-the-fundamental-theorem"></a>
### Riemann integration and the fundamental theorem {#section-242-riemann-integration-and-the-fundamental-theorem}

**Darboux criterion (Chapter 12).** A bounded function on \\([a,b]\\) is Riemann integrable exactly when partitions make upper-minus-lower sums arbitrarily small.

**Continuous functions are Riemann integrable (Chapter 12).** Continuity on a compact interval gives uniform continuity, which controls oscillation on fine subintervals.

**Monotone functions are Riemann integrable (Chapter 12).** Bounded monotonicity on a compact interval controls the total oscillation despite possible discontinuities.

**Fundamental theorem, accumulation direction (Chapter 13).** If \\(f\\) is continuous, \\(F(x)=\\int _a^x f\\) is differentiable and \\(F'=f\\).

**Fundamental theorem, evaluation direction (Chapter 13).** If \\(F\\) is differentiable with suitably integrable derivative in the stated version, the integral of \\(F'\\) recovers endpoint change. The strongest Lebesgue version uses absolute continuity.

**Absolute-continuity characterization (Chapter 13).** On a compact interval, \\(F\\) is absolutely continuous exactly when it has an integrable derivative almost everywhere and \\(F(x)=F(a)+\\int _a^x F'\\).

<a id="section-254-function-limits-and-power-series"></a>
### Function limits and power series {#section-256-function-limits-and-power-series}

**Uniform limit theorem (Chapter 14).** A uniform limit of continuous functions is continuous. Pointwise convergence alone is insufficient.

**Uniform integration theorem (Chapter 14).** Uniform convergence of Riemann-integrable functions on a compact interval permits passing the limit through the integral.

**Differentiated-limit theorem (Chapter 14).** Convergence at one anchor point plus uniform convergence of derivatives, under the chapter’s interval hypotheses, yields uniform convergence to a differentiable limit with the expected derivative.

**Power-series radius theorem (Chapter 15).** A power series converges absolutely inside and diverges outside its radius; it converges uniformly on every smaller closed interval. Endpoints require separate tests.

**Termwise power-series operations (Chapter 15).** Inside the radius, differentiation and integration may be performed term by term, with the same radius before endpoint analysis.

<a id="section-266-measure-and-integration"></a>
### Measure and integration {#section-268-measure-and-integration}

**Caratheodory measurability theorem (Chapter 16).** Sets that split outer measure additively form a sigma-algebra, and the outer measure restricts to a complete measure there.

**Continuity of measure (Chapter 16).** For increasing measurable sets, measure of the union is the limit of measures. For decreasing sets, a finite-measure starting set is required to identify the measure of the intersection with the limit.

**Simple approximation (Chapter 17).** Every nonnegative measurable function is the increasing pointwise limit of nonnegative measurable simple functions.

**Monotone convergence (Chapter 18).** Increasing nonnegative measurable functions permit exchange of limit and integral, including infinite values.

**Fatou’s lemma (Chapter 18).** Nonnegative measurable functions give a lower-semicontinuity inequality. Applying it to shifted functions is a standard route to dominated convergence.

**Dominated convergence (Chapter 18).** Almost-everywhere convergence plus one integrable absolute dominator yields integrability of the limit and convergence in \\(L^1\\) and of integrals.

<a id="section-280-normed-spaces-fixed-points-and-approximation"></a>
### Normed spaces, fixed points, and approximation {#section-282-normed-spaces-fixed-points-and-approximation}

**Holder and Minkowski inequalities (Chapter 19).** Holder controls products in conjugate spaces; Minkowski gives the \\(L^p\\) triangle inequality. Both require \\(p\\ge 1\\) in the normed-space form used here.

**Completeness of \\(L^p\\) (Chapter 19).** For \\(1\\le p\\le \\infty\\), \\(L^p\\) is a Banach space after identifying functions equal almost everywhere.

**Contraction mapping theorem (Chapter 18).** A contraction from a nonempty complete metric space to itself has a unique fixed point; iterates converge with explicit geometric error estimates. Invariance, completeness, and \\(q<1\\) are separate checks.

**Trigonometric approximation (Chapter 21).** Every continuous periodic function can be uniformly approximated by trigonometric polynomials through its Fejér means. The distinct algebraic-polynomial Weierstrass theorem on compact intervals is not proved in this volume.

**Fejer convergence (Chapter 21).** Cesaro means of Fourier partial sums converge uniformly to a continuous periodic function. Raw partial sums require different regularity conclusions.

<a id="section-292-fast-hypothesis-audit"></a>
## Fast hypothesis audit {#section-294-fast-hypothesis-audit}

Before using a theorem, ask in order:

1. What are the objects and ambient spaces?
2. Is the claim pointwise, uniform, norm, integral, or almost-everywhere?
3. Where is compactness, completeness, boundedness, sign, or measurability used?
4. Does one control work for the whole family, or does it change with the index?
5. Is an endpoint, null set, or missing boundary point exceptional?
6. Does the conclusion assert existence, uniqueness, approximation, or an error rate?

If the theorem still seems applicable after those six questions, return to its full statement and match each hypothesis explicitly.
`;export{e as default};