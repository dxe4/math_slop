var e=`---
parent_id: book-fourier-analysis
chapter_id: schwartz-space-convolution
title: "Schwartz Space, Convolution and Approximation"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Schwartz Space, Convolution and Approximation

Rapidly decreasing smooth functions form a class on which differentiation, Fourier transformation, multiplication and convolution all behave well. Specifying the class precisely explains why the integrals in the preceding chapters were legitimate. Specifying its notion of convergence then lets us prove that smoothing approximates a function together with all weighted derivatives, a stronger statement than ordinary mean-square convergence.

For nonnegative integers m,n set

\\[
 p_{m,n}(f)=\\sup_{x\\in\\mathbb R}(1+|x|)^m|f^{(n)}(x)|.
\\]

The Schwartz space S consists of the smooth functions for which all these quantities are finite. Convergence in S means convergence in every one of these seminorms. This chapter proves completeness, continuity of its basic operations and approximate-identity convergence. The later distribution chapter uses these seminorms to specify continuous linear functionals. Nothing in the present argument identifies a distribution with an ordinary pointwise function.

Preparation is the [transform calculus](fourier-transform-real-line.md), [inversion and Plancherel](inversion-plancherel.md), uniform derivative convergence and elementary integration. All space integrals below converge absolutely by the displayed decay bounds. The same finite-domain calculation followed by integrable tail estimates justifies changes in integration order.

## 1. Examples and nonexamples

**Worked example 9.1: Gaussians.** Every derivative of e^−ax², a>0, is a polynomial times the same Gaussian. Multiplying by any fixed power of 1+|x| still gives a bounded function: the Gaussian beats every polynomial at infinity, as follows by taking logarithms or maximizing r^N e^−ar². Thus every polynomial times a Gaussian belongs to S. This class is stable under the explicit Fourier calculations of the preceding chapter.

**Worked example 9.2: a compact bump.** Define β(x)=exp(−1/(1−x²)) for |x|<1 and zero otherwise. Differentiating inside gives a rational polynomial factor times the same exponential. Every derivative tends to zero at each endpoint, because e^−1/t tends to zero faster than any inverse power of t as t decreases to zero. Consequently extension by zero is smooth. Its derivatives have compact support and are bounded, so β∈S. Normalizing by its positive integral gives a smooth nonnegative averaging kernel of mass one.

**Worked example 9.3: small values do not control derivatives.** The function f(x)=e^−x² sin(e^{x²}) is smooth and its values decrease faster than any inverse power. However

\\[
 f'(x)=-2xe^{-x^2}\\sin(e^{x^2})+2x\\cos(e^{x^2}).
\\]

At xj=sqrt(log(2πj)), the first term is zero and the second equals 2xj, which is unbounded. Thus f is not Schwartz. Rapid decrease of the function alone is insufficient; the definition requires every derivative. Also e^−|x| is not Schwartz because of its corner at zero, and (1+x²)^−1 is smooth but lacks sufficiently rapid value decay.

## 2. A complete space with many seminorms

Each p is subadditive and absolutely homogeneous. Together they separate functions because p00 is the supremum norm. Enumerate them as p1,p2,… and define

\\[
 d(f,g)=\\sum_{j\\ge1}2^{-j}\\min(1,p_j(f-g)).
\\]

This is a translation-invariant metric. The triangle inequality follows from min(1,a+b)≤min(1,a)+min(1,b). Its convergence is equivalent to convergence in every seminorm: one direction fixes a summand; the other first makes the metric tail small and then controls its finite initial block.

The space is complete. Suppose fj is Cauchy in every seminorm. In particular, each derivative fj^(n) converges uniformly to a continuous function gn. On a finite interval, the fundamental theorem for fj^(n) passes to the uniform limit, giving gn(x)−gn(a)=∫_a^x gn+1. Thus g0 is smooth with nth derivative gn. For fixed m,n, the Cauchy bound p_mn(fj−fk)≤ε for j,k large passes pointwise as k tends to infinity and then to the supremum, giving p_mn(fj−g0)≤ε. One fixed fj has finite seminorm, so g0 does as well. Therefore g0∈S and fj→g0 in S.

A complete metrizable vector space given by these seminorms is called a Fréchet space. The name records the structure just proved; no additional abstract theorem is needed here. A single norm such as ||f||2 cannot replace this convergence: that norm does not control point values or derivatives, as the preceding chapter's bump example demonstrated.

## 3. Elementary continuous operations

Differentiation is continuous because p_mn(f')=p_m,n+1(f). Multiplication by x is continuous by the product rule: (xf)^(n)=x f^(n)+n f^(n−1), so its weighted seminorm is bounded by p_m+1,n(f)+n p_m,n−1(f), omitting the second term when n=0. Polynomial multiplication follows by repetition.

Pointwise multiplication is a continuous bilinear operation. Leibniz's rule gives

\\[
 p_{m,n}(fg)\\le\\sum_{j=0}^n\\binom nj
 p_{m,j}(f)p_{0,n-j}(g).
\\]

The fixed finitely many seminorms on the right establish continuity at a pair of functions by expanding the difference of two products. One must allow joint control of both factors; a formula involving only the norm of one varying factor would not be a bilinear continuity proof.

Translation τyf(x)=f(x−y) satisfies p_mn(τyf)≤(1+|y|)^m p_mn(f). Moreover the fundamental theorem along the segment from x to x−y gives

\\[
 p_{m,n}(\\tau_yf-f)
 \\le |y|(1+|y|)^m p_{m,n+1}(f).
\\]

Here use 1+|x|≤(1+|x−sy|)(1+|y|) for 0≤s≤1 before taking the supremum. Thus translations are continuous in S, with a useful explicit estimate near zero. These weighted bounds are what later permit integration over a family of translated functions.

## 4. Fourier transformation is a homeomorphism

The preceding chapter proved that Fourier transformation maps S onto S. Its continuity follows from explicit seminorm bounds. Expand ξ^a ∂ξ^b fhat as a constant of modulus one times the transform of the ath derivative of x^bf. The absolute-integral bound controls it by a finite sum of integrals of |x|^j|f^(k)(x)|. Each integral is bounded by a constant times p_j+2,k(f), since ∫(1+|x|)^−2 is finite. Expanding (1+|ξ|)^m into finitely many powers yields a bound for every p_mn(fhat) by finitely many input seminorms.

The inverse is reflection of the forward transform divided by 2π. Reflection preserves these seminorms and scalar multiplication is continuous, so inversion is continuous too. Thus Fourier transformation is a linear homeomorphism of S: it preserves exactly the topology needed for all rapidly decreasing derivatives, not just a single energy norm.

If fj→f in S, transforms and all their polynomially weighted derivatives converge uniformly. This justifies many simultaneous frequency manipulations that would not follow from merely fj→f in square norm. The stronger conclusion has a stronger hypothesis, and the distinction matters when a distribution is evaluated against an approximating sequence.

## 5. Convolution and its seminorm bounds

For f,g∈S define f*g(x)=∫f(x−y)g(y)dy. Differentiating under the integral gives (f*g)^(n)=f^(n)*g. The derivative domination is uniform on compact x intervals by the bounded derivatives of f and the integrable g. Integration by parts with vanishing tails also gives f^(n)*g=f*g^(n).

Use 1+|x|≤(1+|x−y|)(1+|y|) to obtain

\\[
 p_{m,n}(f*g)
 \\le p_{m,n}(f)\\int(1+|y|)^m|g(y)|dy
 \\le C p_{m,n}(f)p_{m+2,0}(g).
\\]

The final constant is the integral of (1+|y|)^−2. This proves closure in S and continuous bilinearity of convolution. It is stronger than the single unweighted bound ||f*g||∞≤||f||∞||g||1 because it controls all spatial weights and derivatives.

Commutativity follows by substituting y↦x−y. Associativity follows from the absolutely integrable triple-product expression, first on finite boxes and then with its product tail bounds. The transform theorem gives F(f*g)=fhat ghat. Conversely F(fg)=(2π)^−1(fhat*ghat), obtained by applying inversion and the just-proved convolution identity, or by a justified double integral. The factor belongs to pointwise multiplication under the present normalization; it is absent from the forward convolution theorem.

When both factors have compact support, supp(f*g) is contained in the sum of their support sets. Indeed a nonzero integrand requires y in supp g and x−y in supp f. If x lies outside their closed compact sum, no such y exists and the integrand vanishes. This is a support statement for convolution, not for Fourier transformation.

## 6. Approximate identities in every seminorm

Let h∈S with ∫h=1 and set hε(x)=ε^−1h(x/ε), ε>0. Substitution gives

\\[
 h_\\varepsilon*f-f
 =\\int h(z)(\\tau_{\\varepsilon z}f-f)\\,dz.
\\]

The translation bound yields, for 0<ε≤1,

\\[
 p_{m,n}(h_\\varepsilon*f-f)
 \\le\\varepsilon p_{m,n+1}(f)
 \\int|h(z)|\\,|z|(1+|z|)^m dz.
\\]

The integral is finite by rapid decrease. Thus hε*f→f in S, with a separate O(ε) estimate in each fixed seminorm. The exchange of derivatives and integration is justified by the same weighted integrable majorant. Positivity of h was not needed for this convergence theorem; unit mass was needed to subtract f in the displayed identity.

If h is nonnegative, hε*f also preserves the range of bounded real f, by positive averaging. A sign-changing h can converge just as well in S while failing that range property at every fixed ε. Approximation and positivity are distinct design choices, as they were for Fejér versus sharp Fourier summation.

Higher vanishing moments improve the error. Suppose ∫z^jh(z)dz=0 for 1≤j<r. Taylor's formula with integral remainder for f^(n)(x−εz), together with the mass and moment cancellations, bounds

\\[
 p_{m,n}(h_\\varepsilon*f-f)
 \\le\\frac{\\varepsilon^r}{r!}p_{m,n+r}(f)
 \\int|h(z)|\\,|z|^r(1+|z|)^m dz.
\\]

The polynomial weight along the remainder segment is handled by the same translation inequality. A nonnegative continuous unit-mass h cannot have zero second moment: z²h≥0 and a zero integral would force h to vanish off zero, contradicting continuous positive total mass. Thus certain higher-order moment cancellations require signed kernels and give up universal range preservation.

## 7. Compact cutoffs and density inside S

Choose a smooth compactly supported cutoff χ that equals one on [−1,1]. Such a cutoff can be built from the compact bump by integration and rescaling. Let χR(x)=χ(x/R). Then χRf∈C_c∞ for f∈S, and χRf→f in S.

To prove it, use Leibniz's rule on (χR−1)f. The term with no cutoff derivative is supported where |x|≥R and its weighted supremum tends to zero by one additional decay power of f. A term with k≥1 cutoff derivatives has a factor R^−k times a bounded derivative of χ, supported in a region with |x|≥R. Its remaining weighted derivative of f again tends uniformly to zero there. There are finitely many terms for each seminorm, so their sum tends to zero.

Thus compactly supported smooth functions are dense in S in its own topology. They are not equal to all S: a Gaussian never has compact support. The cutoff approximation transfers an identity from compactly supported test functions to S only if that identity is continuous in the Schwartz seminorms. Without that continuity, density alone is insufficient. This will become the exact requirement when defining tempered distributions.

## 8. Heat flow as a continuous Schwartz evolution

For t>0, Ht is Schwartz and Ht*f belongs to S. The semigroup identity Hs*Ht=H(s+t) was proved by completing a square. The approximate-identity estimate, with spatial scale sqrt t, gives Ht*f→f in S as t decreases to zero. Thus heat evolution is continuous in every weighted derivative seminorm for Schwartz data, even at initial time.

Direct differentiation of the Gaussian gives ∂tHt=Ht''. Differentiating its convolution and integrating by parts against f gives ∂t(Ht*f)=Ht*f''. For t>0 all kernel operations are absolutely dominated on compact positive time strips. Continuity at zero applied to f'' then yields the right derivative at zero equal to f''. One may integrate the identity from a positive time δ to t and let δ decrease to zero in each seminorm, obtaining

\\[
 H_t*f-f=\\int_0^tH_s*f''\\,ds.
\\]

It follows that Ht*f=f+t f''+o(t) in S. The integral identity supplies the needed uniform small-time control; it is not obtained by differentiating an arbitrary norm limit. Diffusivity κ replaces t by κt and the generator by κ times the second derivative.

**Worked example 9.4: a whole-line resolvent.** For f∈S define u by the inverse transform of fhat(ξ)/(1+ξ²). Every derivative of the rational multiplier has polynomial bounds, so its product with fhat lies in S. Hence u∈S and −u''+u=f by the derivative and inversion rules. Uniqueness follows because (1+ξ²)uhat=0 forces uhat=0 and then u=0. The kernel e^−|x|/2 has transform 1/(1+ξ²), so u is also its convolution with f, justified by absolute integral rearrangement. Although that kernel is not smooth at zero, moving derivatives onto f and using its exponential moments gives a smooth rapidly decreasing solution.

## 9. Smooth frequency cutoffs and signed averaging

Take a real even χ∈C_c∞ equal to one near zero. The spatial cutoff theorem applied in frequency gives χ(ξ/R)fhat(ξ)→fhat in S as R grows. Continuity of inversion therefore gives

\\[
 f_R=\\mathcal F^{-1}[\\chi(\\xi/R)\\widehat f]\\longrightarrow f
 \\quad\\text{in }S.
\\]

Thus a smooth frequency cutoff recovers every Schwartz function together with every weighted spatial derivative. A sharp indicator cutoff generally has jumps at its frequency endpoints and does not even belong to S; its square-norm theorem from the previous chapter cannot be upgraded to this topology without checking additional vanishing conditions.

Let k be the inverse transform of χ. Then k∈S and the convolution theorem identifies fR=kR*f, where kR(x)=Rk(Rx). The kernel has integral one because khat(0)=χ(0)=1. Every higher moment vanishes: differentiating khat at zero gives (−i)^j∫x^jk(x)dx=χ^(j)(0)=0 for j≥1, since χ is constant near zero. Applying the moment remainder estimate with ε=1/R shows error O(R^−r) in each fixed seminorm for every fixed r, with constants depending on that r and the functions. This agrees with the rapidly decreasing frequency tails.

The kernel k cannot be nonnegative. It is real because χ is real even, and it is continuous with mass one and zero second moment. The positivity obstruction already proved therefore forces it to take a negative value somewhere. Smooth compact frequency truncation with a flat pass region has gained arbitrarily high moment cancellation at the expense of universal range preservation. This conclusion follows from exact moments, not from a plotted example or a numerical observation.

The same calculation also illustrates a limitation of informal filter language. A cutoff that “leaves low frequencies untouched” need not preserve every positive signal pointwise. It preserves a set of frequency coefficients; its spatial kernel can have negative lobes. Gaussian smoothing preserves positivity but multiplies every nonzero frequency by a number strictly smaller than one. Each construction has a precise property, and those properties should be compared using their formulas and norms.

## 10. Continuous measurements on the test-function space

Some measurements unstable in square norm are continuous on S. Evaluation at a point satisfies |f(a)|≤p00(f), and derivative evaluation satisfies |f^(j)(a)|≤p0j(f). Hence these operations pass to Schwartz-convergent sequences even though they cannot pass to arbitrary mean-square limits. The signed functional f↦(−1)^jf^(j)(0) is the prototype for the jth derivative of a point mass in the later distribution chapter. Here its continuity is already fully explained by a single seminorm.

A polynomial P of degree d also defines a continuous linear measurement f↦∫P(x)f(x)dx. Since |P(x)|≤C(1+|x|)^d, its absolute value is at most C p_d+2,0(f)∫(1+|x|)^−2dx. Thus polynomial growth is compatible with rapid decrease. This is why polynomial functions can be treated as continuous generalized measurements on this space, despite failing to lie in the square-integrable signal space themselves.

Unrestricted growth is different. The expression ∫e^x²f(x)dx is not defined for all Schwartz f: choosing f=e^−x²/2 gives a divergent positive integral. Calling a coefficient smooth does not suffice to make multiplication or integration against it a continuous operation on S. Polynomial bounds on the coefficient and its derivatives supply a useful sufficient condition; exponential growth of this kind violates it.

These examples motivate the tempered-distribution framework without assuming it. The new objects will be continuous linear measurements on S, with convergence and derivatives defined by their action on test functions. The seminorm estimates here provide concrete proof tools for those definitions. They also explain why the stronger topology was developed: it retains precisely the derivative and decay control that square norm alone cannot supply.

## Exercises

### FOURIER-SCH-E001 — A rational nonexample
Why is (1+x²)^−1 not Schwartz?
<details><summary>Hint 1</summary>Check a value seminorm with m greater than two.</details>
<details><summary>Hint 2</summary>No derivative calculation is necessary.</details>
<details><summary>Full solution</summary>The quantity (1+|x|)^3/(1+x²) grows proportionally to |x| at infinity, so p30 is infinite. Smoothness and absolute integrability do not imply rapid decrease of every polynomially weighted value.</details>

### FOURIER-SCH-E002 — Differentiation continuity
If fj→f in S, prove fj'→f' in S.
<details><summary>Hint 1</summary>Write the target seminorm in terms of the original difference.</details>
<details><summary>Hint 2</summary>Increase the derivative index by one.</details>
<details><summary>Full solution</summary>For each m,n, p_mn(fj'−f')=p_m,n+1(fj−f), which tends to zero by the definition of Schwartz convergence. Thus every target seminorm converges, proving the assertion.</details>

### FOURIER-SCH-E003 — Products
Prove that x²e^−x² is Schwartz.
<details><summary>Hint 1</summary>Start with the Gaussian example.</details>
<details><summary>Hint 2</summary>Use continuity of polynomial multiplication.</details>
<details><summary>Full solution</summary>The Gaussian belongs to S. Multiplication by x maps S into S, as shown by the product-rule seminorm bound. Applying that operation twice yields x²e^−x²∈S, with all derivative bounds included.</details>

### FOURIER-SCH-E004 — Convolution derivative
For f,g∈S, prove (f*g)'=f*g'.
<details><summary>Hint 1</summary>Differentiate first on f.</details>
<details><summary>Hint 2</summary>Integrate the y derivative by parts.</details>
<details><summary>Full solution</summary>Differentiation gives ∫f'(x−y)g(y)dy. Since the y derivative of f(x−y) is −f'(x−y), integration by parts moves that derivative to g with a second minus sign. The boundary product vanishes by rapid decrease, giving ∫f(x−y)g'(y)dy.</details>

### FOURIER-SCH-E005 — Support sum
If f is supported in [−1,2] and g in [3,4], where is f*g supported?
<details><summary>Hint 1</summary>Add the two intervals.</details>
<details><summary>Hint 2</summary>A nonzero integrand needs x=(x−y)+y in that sum.</details>
<details><summary>Full solution</summary>The support is contained in [2,6]. This is an enclosure; cancellations can make the actual support smaller. The conclusion is about convolution in space, not about the support of either Fourier transform.</details>

### FOURIER-SCH-E006 — Product transform factor
State the transform of a pointwise product fg under this book's convention.
<details><summary>Hint 1</summary>The inverse normalization introduces a factor.</details>
<details><summary>Hint 2</summary>Distinguish this from the convolution theorem.</details>
<details><summary>Full solution</summary>F(fg)=(2π)^−1(fhat*ghat). By contrast F(f*g)=fhat ghat has no prefactor. Both identities hold on S with the absolute-integral justifications proved here.</details>

### FOURIER-SCH-E007 — Approximate identity rate
For a fixed seminorm, what error order follows for hε*f with a general unit-mass Schwartz h?
<details><summary>Hint 1</summary>Use the translation estimate.</details>
<details><summary>Hint 2</summary>The first absolute moment with polynomial weight is finite.</details>
<details><summary>Full solution</summary>The error is O(ε) in every fixed p_mn, with constant p_m,n+1(f) times ∫|h(z)||z|(1+|z|)^m dz. The constant depends on the chosen seminorm and functions, so this is not one universal bound for all seminorms simultaneously.</details>

### FOURIER-SCH-E008 — Positivity obstruction
Can a continuous nonnegative mass-one kernel have zero second moment?
<details><summary>Hint 1</summary>The integrand z²h(z) is nonnegative.</details>
<details><summary>Hint 2</summary>A zero integral forces it to vanish everywhere by continuity.</details>
<details><summary>Full solution</summary>No. It would force h(z)=0 for every z≠0. Continuity then forces h(0)=0 as well, contradicting integral one. Higher cancellation of that kind requires giving up nonnegativity in this ordinary kernel class.</details>

### FOURIER-SCH-E009 — Compact cutoff
Why does the extra decay power make the undifferentiated cutoff error small?
<details><summary>Hint 1</summary>The error is supported where |x|≥R.</details>
<details><summary>Hint 2</summary>Bound the m-weighted derivative using its m+1 seminorm.</details>
<details><summary>Full solution</summary>On that region, (1+|x|)^m|f^(n)(x)|≤p_m+1,n(f)/(1+R). Multiplication by the uniformly bounded cutoff difference preserves a constant multiple of this bound, tending to zero.</details>

### FOURIER-SCH-E010 — Heat generator
For f∈S, identify the S-limit of (Ht*f−f)/t as t decreases to zero.
<details><summary>Hint 1</summary>Use the integrated heat identity.</details>
<details><summary>Hint 2</summary>The average of Hs*f'' tends to f'' in each seminorm.</details>
<details><summary>Full solution</summary>The quotient equals t^−1∫_0^tHs*f''ds. Continuity of s↦Hs*f'' at zero in every seminorm makes this average tend to f''. Thus the generator is the second derivative on this class.</details>

### FOURIER-SCH-E011 — Resolvent uniqueness
Why is a Schwartz solution of −u''+u=0 zero?
<details><summary>Hint 1</summary>Transform the equation.</details>
<details><summary>Hint 2</summary>The multiplier 1+ξ² never vanishes.</details>
<details><summary>Full solution</summary>The transform satisfies (1+ξ²)uhat=0 at every frequency, so uhat=0. Fourier inversion on S then gives u=0. This is uniqueness in the stated rapidly decreasing class, not a claim that the ODE has no nonzero solutions on the line at all.</details>

### FOURIER-SCH-E012 — Density needs continuity
Why does density of C_c∞ in S not extend an arbitrary linear functional automatically?
<details><summary>Hint 1</summary>An extension must assign the same limit for every approximating sequence.</details>
<details><summary>Hint 2</summary>Control of the functional on seminorm-small differences is required.</details>
<details><summary>Full solution</summary>Without continuity, values on two sequences converging to the same Schwartz function need not have the same limit or any limit. A seminorm continuity bound makes their difference tend to zero and supplies a well-defined extension. Density is the approximation input; continuity is what makes passage to the limit valid.</details>

## Sources and scope

This original development follows the standard Schwartz-space portion of the Stein–Shakarchi/Folland syllabus. Every topology and continuity assertion is accompanied by the finite seminorm control used in the proof. Abstract locally convex duality, general distribution products and weak PDE derivative domains are deferred to their dedicated chapters.

## Summary

Schwartz space controls all polynomially weighted derivatives and is complete in its countable seminorm topology. Fourier transformation is a homeomorphism; multiplication and convolution are continuous bilinear operations. Scaled unit-mass kernels approximate in every seminorm, moment cancellation improves rates, and compact cutoffs are dense. These facts justify the smoothing and Fourier manipulations used in classical PDE while preparing a precise test-function space for tempered distributions.
`;export{e as default};