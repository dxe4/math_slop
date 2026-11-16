# Problem set F. Function sequences and exchange theorems

**Role:** independent problem set after [Recitation F](function-sequences-recitation.md). Suggested total: 70 points, 10 per problem. Attempt each without opening its hints. State the domain of every uniform estimate. Written responses are saved for self-review or instructor review; the interface does not certify a proof. The changed case after each solution is a second attempt, not an extra point requirement.

## 1. A rational boundary layer (10 points)

```exercise
{"id":"analysis-r2-psc-rational-layer","type":"written","prompt":"For n>=1 put r_n(x)=n x/(1+n x)^2 on [0,1]. Find the pointwise limit and exact supremum error. Decide uniform convergence on [0,1] and on each fixed [d,1] with d>0. Give the input that tests the worst error.","hints":["Set t=n x and maximize t/(1+t)^2 for t>=0.","For x>=d, use 1+n x>=n x."],"rubric":["Establishes pointwise zero, including x=0","Finds the maximum at x=1/n with value 1/4","Concludes nonuniform convergence on [0,1] using quantifiers","Supplies a bound tending to zero on fixed [d,1]"],"solution":"At x=0, r_n(0)=0. For fixed x>0, r_n(x)<=n x/(n x)^2=1/(n x), so r_n(x)->0. With t=n x, phi(t)=t/(1+t)^2 has derivative (1-t)/(1+t)^3, so its maximum for t>=0 is 1/4 at t=1. Since 1/n lies in [0,1], the supremum error is 1/4 for every n, and convergence is not uniform there. On fixed [d,1], r_n(x)<=1/(n x)<=1/(n d)->0 uniformly.","transfer":"Changed case: t_n(x)=x/(1+n x) on [0,1]. It also has a moving denominator. Prove or refute uniform convergence to zero and find its supremum.","transferSolution":"For fixed n, t_n is increasing because its derivative is 1/(1+n x)^2>0. Its maximum on [0,1] is t_n(1)=1/(n+1), which tends to zero. Thus t_n converges uniformly; a changing denominator alone does not produce a persistent boundary layer.","feedback":"A moving input matters only if its error stays positive independently of n."}
```

## 2. Uniform cancellation without an M-test (10 points)

```exercise
{"id":"analysis-r2-psc-alternating","type":"written","prompt":"Let S(x)=sum_(k=1)^infinity (-1)^(k-1)x^k/sqrt(k). Prove uniform convergence on [0,1] without claiming an M-test with 1/sqrt(k). Decide absolute convergence at x=1. Then decide whether the same series converges at x=-1.","hints":["For fixed x in [0,1], x^k/sqrt(k) decreases; use the alternating remainder with a bound independent of x.","At x=-1, simplify the signs before applying any convergence test."],"rubric":["Checks alternating hypotheses on [0,1] and gives uniform remainder at most 1/sqrt(N+1)","Identifies divergence of sum 1/sqrt(k), so the direct M-test is unavailable","Classifies x=1 as conditional convergence","Shows divergence at x=-1 because all terms have one sign"],"solution":"For 0<=x<=1, a_k(x)=x^k/sqrt(k) is nonnegative, decreases in k, and tends to zero. The alternating-series remainder is at most a_(N+1)(x)<=1/sqrt(N+1), independent of x. This proves uniform convergence on [0,1]. At x=1 the series converges by the alternating test but not absolutely, since sum 1/sqrt(k) diverges. At x=-1, (-1)^(k-1)(-1)^k/sqrt(k)=-1/sqrt(k), so the series diverges to minus infinity.","transfer":"Changed domain: prove uniform convergence on [-r,1] for each fixed 0<r<1, explaining why the argument for negative x differs from the alternating argument on [0,1].","transferSolution":"On [-r,0], absolute values are bounded by r^k/sqrt(k)<=r^k, so the M-test gives uniform convergence. On [0,1], the uniform alternating remainder is at most 1/sqrt(N+1). The maximum of these two tail bounds tends to zero on their union [-r,1]. At the excluded endpoint -1, the series diverges."}
```

## 3. Uniform convergence on an infinite interval (10 points)

```exercise
{"id":"analysis-r2-psc-improper-tail","type":"written","prompt":"On [0,infinity) define b_n(x)=exp(-x/n)/n. Prove b_n->0 uniformly. Compute each improper integral exactly and explain why this does not violate the finite-interval interchange theorem. Also calculate the limit of integral_0^B b_n for one fixed B>0.","hints":["The exponential is at most 1 on nonnegative inputs.","Use u=x/n for the improper integral; keep B fixed in the final limit."],"rubric":["Finds supremum 1/n and proves uniform convergence","Computes integral_0^infinity b_n=1","Shows integral_0^B b_n=1-exp(-B/n)->0 for fixed B","Explains the missing uniform tail control or infinite length"],"solution":"For x>=0, 0<b_n(x)<=1/n, with equality at zero, so b_n->0 uniformly. Substituting u=x/n gives integral_0^infinity b_n(x)dx=integral_0^infinity exp(-u)du=1. On [0,B], the integral is 1-exp(-B/n), which tends to zero for fixed B, in accord with finite-interval uniform interchange. The mass moves farther right as n grows: integral_B^infinity b_n=exp(-B/n), whose supremum over n is 1. There is no uniform small tail beyond one B, so the improper-integral exchange is unjustified.","transfer":"Changed amplitude: c_n(x)=exp(-x/n)/n^2 on [0,infinity). Determine the uniform limit and limit of its improper integrals; identify exactly which calculation changes.","transferSolution":"The supremum is 1/n^2, so c_n->0 uniformly. Substitution u=x/n gives integral_0^infinity c_n=(1/n)integral_0^infinity exp(-u)du=1/n->0. The extra factor 1/n offsets the growing width. Equality of integrals with the limit is true here, but it is established by the explicit calculation, not by uniform convergence alone."}
```

## 4. A spike that escapes every fixed window (10 points)

The next figure shows one member of a sequence, not its limiting behavior. Before moving \(n\), predict separately what a fixed compact window sees, what the global supremum sees, and what the total triangular area does. This is an integer-indexed sequence, so the control uses \(k=\lfloor n\rfloor\): a noninteger slider position selects the preceding integer member rather than inventing an interpolated family. The support is centered at \(k\), its half-width is \(1/k^3\), and its height is \(k\). Exact authored segments pass through both support endpoints and the peak; no sampling grid has to happen to hit the narrow triangle.

```mathviz
scene "A narrow spike escapes to the right";
domain 0 12;
range -0.5 10.5;
param n = 2 from 2 to 10;
let k = floor(n);
let left = k-1/k^3;
let right = k+1/k^3;
segment rising_side from (left,0) to (k,k) color rose;
segment falling_side from (k,k) to (right,0) color rose;
point peak = (k,k) color amber;
measure original_view_index = k;
measure center = k;
measure half_width = 1/k^3;
measure exact_integral = 1/k^2;
```

The original coordinates make the support hard to see for large indices because that narrowing is the mathematical phenomenon. The two figures have independent \(n\) controls: changing one does not change the other, so compare their separately labeled index readouts deliberately. The rescaled coordinates
\[
u=k^3(x-k),\qquad v=f_k(x)/k
\]
send every member to the same triangle through \((-1,0),(0,1),(1,0)\). The second view makes that exact normalization visible; it does not claim the original supports have a fixed width.

```mathviz
scene "Normalized spike in u and v coordinates";
domain -1.2 1.2;
range -0.2 1.2;
param n = 2 from 2 to 10;
let k = floor(n);
segment rising_side from (-1,0) to (0,1) color rose;
segment falling_side from (0,1) to (1,0) color rose;
point normalized_peak = (0,1) color amber;
measure normalized_view_index = k;
measure original_x_half_width = 1/k^3;
measure original_y_height = k;
measure normalized_u_half_width = 1;
measure normalized_v_peak_height = 1;
```

The two visuals separate location, height, area, and normalized shape. The problem asks you to turn each into a quantified argument and then apply the uniform-tail theorem from the preceding chapter. It is independent theorem verification of supplied conclusions: the exact readout and normalized view support inspection, but the learner must still prove the support, area, and tail statements.

```exercise
{"id":"analysis-r2-psc-local-uniform-tail","type":"written","prompt":"For integers n≥2 define f_n(x)=n max(1−n³|x−n|,0) on [0,∞). Prove: (i) f_n eventually vanishes on every fixed [0,A]; (ii) convergence to zero is not uniform on [0,∞); (iii) ∫₀^∞f_n=1/n²; and (iv) the absolute tails are uniformly small, using the explicit bound sup_n ∫_B^∞f_n≤1/(B−1)² for B≥2. Conclude from the uniform-tail theorem that the improper integrals converge to the integral of the limit.","hints":["Write the support exactly as [n−1/n³,n+1/n³]; for a fixed A, choose n beyond A+1.","Use the area of a triangle rather than searching for an antiderivative.","For B≥2, functions with n≤B−1 have no tail beyond B; for the remaining indices compare the tail with the whole integral."],"rubric":["Proves eventual vanishing and hence uniform convergence on each fixed compact interval","Uses ||f_n||∞=n to disprove global uniform convergence","Computes the triangular area 1/n² exactly","Proves the stated uniform absolute-tail bound with both index cases","Checks every hypothesis of the uniform-tail theorem and identifies the zero limit"],"solution":"The support is [n−1/n³,n+1/n³]. Given A, every n>A+1 has n−1/n³>A, so f_n is identically zero on [0,A]; this is stronger than local uniform convergence to zero. Globally, ||f_n||∞=f_n(n)=n, so there is no uniform convergence. The graph is a triangle of height n and base 2/n³, hence ∫₀^∞f_n=(1/2)(2/n³)n=1/n². Fix B≥2. If n≤B−1, then n+1/n³≤n+1≤B, so ∫_B^∞f_n=0. If n>B−1, its tail is at most its whole integral 1/n²<1/(B−1)². Therefore sup_n∫_B^∞|f_n|≤1/(B−1)²→0. Each f_n is continuous with an improper integral, convergence is uniform on every [0,A], and the absolute tails are uniform. The theorem applies: the zero limit is absolutely improperly integrable and ∫f_n=1/n²→0=∫0.","transfer":"Changed amplitude: define g_n(x)=n³ max(1−n³|x−n|,0). Determine which parts of the proof survive, compute every improper integral, and use a quantified tail argument to identify exactly why the uniform-tail theorem no longer applies.","transferSolution":"The support is unchanged, so g_n eventually vanishes on every fixed compact interval and converges there uniformly to zero. Its height is n³ and its triangular area is (1/2)(2/n³)n³=1 for every n. For any B choose an integer n>B+1. Then the entire support lies beyond B, so ∫_B^∞|g_n|=1. Thus sup_n∫_B^∞|g_n|≥1 for every B: uniform absolute-tail control fails. The local hypothesis survives, but the missing uniform tail permits the unit mass to escape to infinity, and the integrals do not converge to the zero limit's integral."}
```

## 5. A derivative series with an anchor (10 points)

```exercise
{"id":"analysis-r2-psc-differentiated-series","type":"written","prompt":"On R consider F(x)=sum_(k=1)^infinity sin(kx)/k^3. Prove that F is differentiable and give a justified formula for F'(x). Identify the one-point convergence and the uniform derivative estimate required by the theorem; do not infer differentiability solely from uniform convergence of F's series.","hints":["Apply the differentiation theorem to partial sums on an arbitrary finite interval.","Differentiate one summand, then compare its absolute value with 1/k^2."],"rubric":["Checks convergence of partial sums at an anchor such as x=0","Shows derivative series has summable uniform majorant 1/k^2","Applies the differentiation theorem on finite intervals to all real x","States F'(x)=sum cos(kx)/k^2 and distinguishes the original series bound"],"solution":"Let F_N(x)=sum_(k=1)^N sin(kx)/k^3. At x=0, F_N(0)=0 for every N, so the anchor values converge. The derivatives are F_N'(x)=sum_(k=1)^N cos(kx)/k^2, and |cos(kx)/k^2|<=1/k^2 on all of R. The M-test makes the derivative series uniformly convergent on any finite interval. The differentiation theorem therefore makes F_N converge uniformly there to a differentiable F with F'(x)=sum_(k=1)^infinity cos(kx)/k^2. Since every real x belongs to some finite interval, the formula holds everywhere. Uniform convergence of the original series by 1/k^3 alone would not justify the derivative conclusion.","transfer":"Changed coefficients: for G(x)=sum_(k=1)^infinity sin(kx)/k^2, explain precisely why this same theorem-and-M-test argument stops. Do not claim from that failure alone that G is nondifferentiable.","transferSolution":"The formal derivative series is sum cos(kx)/k. Its natural uniform majorant 1/k is not summable, and at x=0 its partial sums are harmonic and diverge. Thus the derivative series does not converge uniformly on any interval containing zero, so the stated differentiation theorem cannot be applied there. Failure of this method alone would not classify differentiability elsewhere."}
```

## 6. A double limit at a missing endpoint (10 points)

```exercise
{"id":"analysis-r2-psc-two-orders","type":"written","prompt":"For x in (0,1] define A_n(x)=1/(1+n x). Compute lim_(x downarrow 0) lim_n A_n(x) and lim_n lim_(x downarrow 0) A_n(x). Is A_n->0 uniform on any fixed (0,r) with r>0? Name the hypothesis of the local interchange theorem that fails.","hints":["Hold x fixed before sending n to infinity, then reverse the order.","Choose x_n much smaller than 1/n, or calculate the supremum over (0,r)."],"rubric":["Computes the two iterated limits as 0 and 1 in the correct order","Shows failure of uniform convergence on every fixed punctured neighborhood","Names local uniform convergence near the endpoint as the failed condition","Separates this from uniform convergence on intervals [d,1] with fixed d>0"],"solution":"For each fixed x>0, A_n(x)->0, so lim_(x downarrow 0)lim_n A_n(x)=0. For each fixed n, A_n(x)->1 as x downarrow 0, so lim_n lim_(x downarrow 0)A_n(x)=1. On any (0,r), the supremum of A_n is 1 (unattained), and choosing x_n=1/n^2 gives A_n(x_n)=1/(1+1/n)->1. Thus convergence to zero is not uniform on a fixed punctured neighborhood of zero. On [d,1], A_n<=1/(1+n d)->0; that interval does not reach the endpoint.","transfer":"Changed numerator: B_n(x)=x/(1+n x) on (0,1]. Decide uniform convergence and calculate both iterated limits at zero using the local theorem or a direct estimate.","transferSolution":"B_n is increasing in x, so its supremum on (0,1] is 1/(n+1)->0. Thus B_n->0 uniformly on the full domain, hence on every fixed punctured neighborhood of zero. For each n, B_n(x)->0 as x downarrow zero, and the pointwise limit is zero; both iterated limits are zero, consistent with the local interchange theorem."}
```

## 7. Radius, derivative, and endpoints (10 points)

```exercise
{"id":"analysis-r2-psc-power-radius","type":"written","prompt":"For T(x)=sum_(n=1)^infinity n(x/3)^n, find the radius of convergence, derive a closed formula inside it, and justify differentiation term by term on |x|<3. Test x=3 and x=-3 separately. State the domain on which your derivative argument is uniform.","hints":["Set t=x/3 and differentiate the finite geometric identity, then pass to the limit only for |t|<1.","For |x|<=r<3, bound n^2|x|^(n-1)/3^n by a convergent numerical series."],"rubric":["Finds radius 3 and checks both endpoints by the term test","Derives T(x)=3x/(3-x)^2 for |x|<3","Provides a compact-interval majorant for the derivative series","Gives the derivative 3(3+x)/(3-x)^3 only on the justified interior"],"solution":"Put t=x/3. For |t|<1, sum_(n=1)^infinity n t^n=t/(1-t)^2, obtained by differentiating the geometric partial sums or by the identity (1-t)sum n t^n=sum t^n and taking convergent limits. Hence T(x)=3x/(3-x)^2 and R=3. At x=3 the terms are n, and at x=-3 they are n(-1)^n; neither tends to zero, so both endpoint series diverge. For fixed r<3, choose s with r<s<3. On |x|<=r, the derivative terms satisfy n^2|x|^(n-1)/3^n <=(n^2/3)(r/3)^(n-1), whose numerical sum converges (or compare with a geometric series at s/3). The derivative series therefore converges uniformly on [-r,r], and termwise differentiation gives T'(x)=3(3+x)/(3-x)^3 for |x|<3. The argument does not assert uniformity on the whole open interval.","transfer":"Changed coefficients: U(x)=sum_(n=1)^infinity (x/3)^n/n^2. Test both endpoints, then decide whether the power-series theorem permits differentiation at x=3.","transferSolution":"For |x|<=3, the terms are bounded by 1/n^2, so the M-test gives uniform convergence on [-3,3], and both endpoints converge absolutely. The differentiated series inside |x|<3 is sum_(n=1)^infinity (x/3)^(n-1)/(3n). At x=3 it becomes (1/3)sum 1/n, which diverges. The interior theorem does not permit termwise differentiation at x=3; indeed the left derivative is infinite, as the interior derivative tends to infinity and the Mean Value Theorem transfers that divergence to endpoint secant slopes."}
```

**Later retrieval:** Return to Problems 3 and 6 after the cumulative assessment. In each, identify the limiting operation whose domain changes, and state the estimate that would be needed to justify exchanging it.
