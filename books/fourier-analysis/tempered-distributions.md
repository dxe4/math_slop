
# Tempered Distributions and Weak Derivatives

A point source is not an ordinary function with finite height at one point. A derivative of a jump is not obtained by ignoring the jump and differentiating only its smooth pieces. Distributions handle such objects as continuous linear measurements on test functions. Their derivatives and Fourier transforms are defined by moving the corresponding operation onto the test function, where it is justified.

The test-function space is S from [Schwartz Space and Convolution](schwartz-space-convolution.md), with seminorms pmn(φ)=sup(1+|x|)^m|φ^(n)(x)|. We use complex-linear functionals with a bilinear test pairing T(φ), not a conjugate-linear pairing. The forward transform remains φhat(ξ)=∫φ(x)e^−ixξdx. These conventions determine every sign and factor below.

Preparation is Schwartz completeness and Fourier homeomorphism, [inversion](inversion-plancherel.md), and elementary integration by parts. The measure route supplies general locally integrable functions; all explicit examples can also be treated by ordinary piecewise integrals with polynomial bounds. Weak Sobolev solution spaces are developed in the separate PDE continuation, rather than assumed from the notation used here.

## 1. Continuity means a finite seminorm bound

A tempered distribution is a continuous linear functional T:S→C. Continuity is equivalent to a bound |T(φ)|≤C max_{j≤r}pj(φ) for finitely many Schwartz seminorms. One direction is immediate. Conversely continuity at zero gives a basic neighborhood defined by finitely many seminorm bounds on which |T|<1. Rescale any nonzero test function into that neighborhood and use linearity to obtain the finite bound, with a fixed harmless factor two. If every selected seminorm vanishes, scaling by arbitrary positive numbers forces T(φ)=0.

Because the seminorm family can be enlarged, one may replace that finite maximum by C max_{n≤N}pM,n for some M,N. This is a useful sufficient form, not a claim that every distribution is bounded by the plain supremum norm. A point derivative requires derivative seminorms.

**Worked example 13.1: point measurements.** Define δa(φ)=φ(a). Its absolute value is at most p00(φ), so it is tempered. Define its jth derivative by δa^(j)(φ)=(−1)^jφ^(j)(a), bounded by p0j. These objects are specified by their action on every test function; they are not functions that are zero away from a and infinite at a.

If an ordinary locally integrable f satisfies |f(x)|≤C(1+|x|)^m, then Tf(φ)=∫fφ is tempered, bounded by a constant times pm+2,0(φ). More generally a polynomial growth bound on the relevant absolute integrals suffices. The bound guarantees absolute convergence at infinity. Smoothness alone is insufficient: e^x² cannot be integrated against every Schwartz test function, as φ=e^−x²/2 already shows.

## 2. Distributional differentiation and multiplication

Define T'(φ)=−T(φ'). Differentiation is continuous on S, so T' is again continuous. Iterating gives the expected sign (−1)^j. If f is C1 with polynomially controlled values and derivative, integration by parts with vanishing boundary products proves (Tf)'=T(f'). Thus the new derivative extends the old one in its legitimate class.

Let H be the function one on x>0 and zero on x<0. It is bounded and defines a regular distribution. Its derivative is δ0, because −∫_0^∞φ'(x)dx=φ(0). The assigned value at zero has no effect. Similarly the sign function has derivative 2δ0 and |x| has second derivative 2δ0. Piecewise differentiation that reported zero for the derivative of H would have discarded the entire boundary contribution.

A smooth multiplier a defines aT by (aT)(φ)=T(aφ) whenever multiplication by a is continuous on S. Polynomial a always qualifies; more generally polynomial bounds on each derivative provide the required Leibniz estimates. Not every smooth multiplier qualifies, as the growth example above demonstrates. Directly from definitions, (xT)'=xT'+T and the ordinary product rule holds for admissible smooth multipliers.

A general product of two distributions is not supplied by these definitions. In particular δ0 squared cannot be defined by merely multiplying approximating densities and assuming the limit exists. The later example makes that failure explicit.

## 3. Fourier transformation by duality

Define the transform of T by That(φ)=T(φhat). The Fourier map is continuous on S, so this is a tempered distribution. If f is Schwartz, absolute double integration gives T(fhat)(φ)=Tf(φhat), so the definition agrees with the ordinary transform. It is not an unrelated symbolic operation.

Double transformation gives F²T=2π times reflection of T, where reflection acts by T(φ(−·)). This follows by applying the proved double-transform identity to the test function. Inversion is therefore well-defined on tempered distributions with the same factor and reflection as for Schwartz functions. In particular the transform is injective.

**Worked example 13.2: constants and point sources.** The transform of δa acts by φhat(a)=∫e^−iaξφ(ξ)dξ, so it is the regular function e^−iaξ. The transform of the constant function one is 2πδ0, because ∫φhat(x)dx=2πφ(0) by test-function inversion. These two formulas check the normalization and show why an isolated point mass corresponds to a nondecaying frequency function.

Moving derivatives through the pairing gives

\[
 \mathcal F(T')=i\xi\widehat T,\qquad
 \mathcal F(xT)=i\partial_\xi\widehat T.
\]

For the first, differentiate φhat in its spatial argument to get the transform of −iξφ, then use the negative sign in T'. For the second use the integration-by-parts identity F(φ')=ixφhat. The resulting signs agree with ordinary smooth functions. In particular δ0' transforms to iξ, and the jth derivative transforms to (iξ)^j.

## 4. Principal value and a transformed step

Define the principal-value distribution PV(1/x) by the symmetric limit of ∫_{|x|>ε}φ(x)/x dx. Near zero subtract φ(0): the odd constant cancels over a symmetric interval, and (φ(x)−φ(0))/x is bounded by a local derivative supremum. Away from zero, rapid decrease gives an integrable tail. These estimates bound the functional by finitely many seminorms, proving both existence and temperateness.

It satisfies x PV(1/x)=1, because multiplying the test function by x removes the singular denominator and the omitted short integral tends to zero. This is a distributional identity; the principal value is not an ordinary absolutely integrable function near zero.

For ε>0 the integrable function e^−εxH(x) has transform 1/(ε+iξ). As ε decreases to zero it converges to H against every Schwartz test function, by a finite-interval and rapidly decreasing tail argument. Fourier continuity in the test pairing then gives the transform limit. Split

\[
 \frac1{\varepsilon+i\xi}
 =\frac\varepsilon{\varepsilon^2+\xi^2}
 -i\frac\xi{\varepsilon^2+\xi^2}.
\]

The first kernel has mass π and concentrates at zero, giving πδ0. For the second, subtract an even smooth cutoff times φ(0) near zero; its odd contribution cancels, and the remaining quotient converges by the derivative bound near zero and Schwartz decay away. Its limit is PV(1/ξ). Hence

\[
 \widehat H=\pi\delta_0-i\operatorname{PV}(1/\xi).
\]

Multiplying by iξ gives one, consistently with H'=δ0. That derivative relation alone would determine the transform only up to a multiple of δ0; the regularization has fixed the missing constant. Division by a vanishing frequency is not automatically unique.

## 5. Point-source Green functions

**Worked example 13.3: the line Poisson source.** Put G(x)=−|x|/2. It has polynomial growth and defines a tempered distribution. Since |x|''=2δ0, one has −G''=δ0. Away from zero it is affine; the derivative jump accounts for the entire point source. G is negative and grows in magnitude at infinity, which is appropriate for this line realization with no decay condition. It is not the positive bounded-domain Dirichlet Green function from the PDE book.

For m>0, Gm=e^−m|x|/(2m) satisfies (−d²/dx²+m²)Gm=δ0. On each half-line the differential expression is zero. Its first derivative jumps by minus one at zero, so the negative second derivative contributes plus δ0, as a split integration by parts verifies. Fourier transformation gives (ξ²+m²)Gmhat=1 and hence Gmhat=1/(ξ²+m²).

The last inversion is unique among tempered distributions because multiplying by the smooth reciprocal is an admissible operation on S and on its dual. For m=0, the multiplier ξ² has zeros and uniqueness changes. Adding an affine function to G preserves −G''=δ0. Those additions are tempered; imposing another condition or quotient is needed to select one representative. The distinction matches the classical moment-compatibility discussion rather than contradicting it.

## 6. Convolution with a Schwartz function

For T tempered and f∈S define (T*f)(x)=T applied in the y variable to f(x−y). A finite seminorm bound for T and the weighted translation estimate show this is at most polynomially growing in x. Difference quotients converge in S to the corresponding translated derivatives of f, so T*f is smooth with derivatives T*f^(j). Thus smoothing a distribution gives an ordinary smooth function, though not necessarily a rapidly decreasing one.

Its transform satisfies F(T*f)=That fhat. To verify it, apply the regular distribution of that smooth polynomial-growth function to φhat. The integral of translated f times φhat is an S-valued integral: its seminorms are bounded by a polynomial in x times the rapidly decreasing φhat(x), hence integrable. Continuity moves T through the integral. Ordinary transform algebra identifies the resulting y-test function as F(fhat φ), giving exactly That(fhat φ).

The product is legitimate because fhat is Schwartz and multiplication by it is continuous on S. This proof does not define convolution of two arbitrary tempered distributions, whose tails may prevent a test-function integral. Compact support or other hypotheses can supply broader convolution operations, but must be stated.

For δa, convolution is translation f(x−a). For δa', it is f'(x−a). For the constant distribution one, it is the constant ∫f, not generally a Schwartz function. These three simple cases check both the derivative sign and the polynomial-growth conclusion.

## 7. A lattice comb and Poisson summation

The comb Ca=Σ_{n∈Z}δna is tempered for a>0, because Σ|φ(na)| is bounded by a constant times p20(φ). Applying its transform to a test function gives Σφhat(na). Poisson summation for the Schwartz function φhat yields

\[
 \widehat C_a=\frac{2\pi}a
 \sum_{k\in\mathbb Z}\delta_{2\pi k/a}.
\]

The double-transform reflection changes the sign of the lattice index, which leaves the full lattice unchanged. This is a distributional identity with exact reciprocal spacing and factor, not a claim that a lattice of point masses is an ordinary function.

Convolving the comb with a Schwartz f periodizes f, while multiplying a signal by a comb records ideal samples when that product is defined through the smooth values. The sampling chapter proves the corresponding ordinary Schwartz identities directly. Distribution notation packages them and preserves their normalization; it does not remove the bandlimit requirement for unique recovery from samples.

## 8. Convergence and an undefined product

A sequence Tj converges weakly as tempered distributions when Tj(φ) tends to T(φ) for every φ∈S. Fourier transformation preserves this convergence because φhat is again a fixed Schwartz test function. If η∈S has integral one, the densities ηε(x)=ε^−1η(x/ε) converge to δ0: substitution gives ∫η(y)φ(εy)dy→φ(0), justified by compact/tail splitting and boundedness of φ.

But ηε² need not converge to a finite distribution. Choose a real nonzero smooth compactly supported η of integral one and a nonnegative test φ equal to one near zero. For sufficiently small ε, its pairing with ηε² is ε^−1∫η², tending to infinity. Thus squaring this natural approximation to δ0 does not define δ0². Different nonlinear renormalization problems need additional structure; ordinary distribution convergence does not provide a general multiplication rule.

Similarly a distributional derivative is weaker data than a classical derivative. It records integration-by-parts identities against all tests, which include point sources and nonsmooth representatives. Concluding an actual Sobolev representative or boundary trace requires the weak-function-space theorems in the PDE continuation. The present framework supplies the exact equations such theorems interpret.

## 9. A distribution supported at one point has finite order

Say T is supported at zero when it vanishes on every Schwartz test function that vanishes on some neighborhood of zero. This agrees with testing compactly supported functions away from zero, because compact cutoffs approximate any such Schwartz function in S. The finite-seminorm continuity bound forces a strong structural conclusion: T is a finite linear combination of δ0 and its derivatives.

Choose a bound using derivatives through order N, and let χ be a smooth compact cutoff equal to one near zero. If φ and its derivatives through N vanish at zero, then Tφ=T(χ(x/ε)φ), since the removed difference vanishes near zero. Taylor's theorem and continuity of the Nth derivative give φ^(k)(x)=o(|x|^{N−k}) for k≤N near zero. In the nth derivative of the cutoff product, a term with j cutoff derivatives has factor ε^−j times o(ε^{N−n+j}), hence o(ε^{N−n}) on its shrinking support. Its polynomial weight stays bounded there. Every seminorm in the bound therefore tends to zero, so Tφ=0.

For a general φ subtract χ times its degree-N Taylor polynomial at zero. The remainder has all those vanishing derivatives. Consequently Tφ depends only on φ(0),φ'(0),…,φ^(N)(0): it is a fixed linear combination of those values, hence a finite combination of the point derivatives with their specified signs. This proves the structural assertion, including why no infinite unconstrained jet can appear in one tempered distribution supported at a point.

The coefficients are unique. Test against cutoff monomials x^jχ(x)/j!, whose derivatives at zero isolate the jth coordinate. Thus distinct finite point-derivative combinations cannot define the same distribution. Translation gives the corresponding theorem for support at any one real point.

## 10. Division by a polynomial and its homogeneous freedom

The product rule gives xδ0^(j)=−jδ0^(j−1), with zero for j=0. If x^mT=0, every test vanishing near zero can be divided smoothly by x^m and remains Schwartz, so T is supported at zero. The structural theorem writes it as a finite point-derivative combination. Multiplying that combination by x^m and using the displayed identity repeatedly shows that only derivatives of orders zero through m−1 can remain. Thus the entire homogeneous solution space is the span of δ0,…,δ0^(m−1).

For the line Poisson equation this classifies the previous ambiguity completely: two transformed solutions differ by a distribution killed by ξ², hence by a combination of δ0 and δ0'. Their inverse transforms are affine functions. Therefore the tempered solutions of −u''=δ0 are exactly −|x|/2 plus an affine function, rather than merely a list of some possible additions.

A polynomial multiplier with no real zero has a unique inverse on tempered distributions: its smooth reciprocal and every derivative have at most polynomial growth, so multiplication by the reciprocal is an admissible continuous operation on S. If real zeros occur, division needs compatibility or a selected singular inverse, and the homogeneous terms are supported at those zeros. Multiplicity determines how many point derivatives can occur, by the same local argument. This explains the role of resonant frequencies in a domain-sensitive language without pretending division at zero is ordinary scalar arithmetic.

## 11. Extending an interval function adds boundary sources

Let u∈C2[0,L] and extend it by zero outside the interval. Split integration by parts at the two endpoints. The extended distribution U has derivative u' on the open interval plus u(0)δ0−u(L)δL. Differentiating again gives

\[
 U''=u''1_{(0,L)}+u'(0)\delta_0-u'(L)\delta_L
       +u(0)\delta_0'-u(L)\delta_L'.
\]

Each term has a direct origin: value jumps create first-derivative point sources, while derivative jumps create second-derivative sources. The formula can also be checked by pairing both sides with a test function and doing two ordinary finite-interval integrations by parts, retaining every endpoint product.

Even if u has zero Dirichlet endpoint values, its normal flux terms remain. If −u''=f inside, the whole-line equation for its zero extension has the interior source f1_(0,L) together with −u'(0)δ0+u'(L)δL. Therefore transforming a zero-extended interval solution does not turn its boundary problem into a line equation with only the zero-extended interior forcing. The missing boundary data reappear as distributions. This makes precise the earlier classical warning that a whole-line transform must encode the actual boundary geometry.

## Exercises

### FOURIER-DIST-E001 — Point derivative
Compute δa'(φ).
<details><summary>Hint 1</summary>Move the derivative onto the test function.</details>
<details><summary>Hint 2</summary>Keep the minus sign.</details>
<details><summary>Full solution</summary>It is −φ'(a). Its absolute value is bounded by p01(φ), so it is a tempered distribution even though it is not an ordinary pointwise function.</details>

### FOURIER-DIST-E002 — A jump
Find the distributional derivative of 3H−2.
<details><summary>Hint 1</summary>The constant derivative is zero.</details>
<details><summary>Hint 2</summary>The jump height is three.</details>
<details><summary>Full solution</summary>The derivative is 3δ0. Differentiating only on the two open half-lines would miss the jump contribution completely.</details>

### FOURIER-DIST-E003 — Transform of a point
State the transform of δa and of δa'.
<details><summary>Hint 1</summary>Evaluate the transformed test at a.</details>
<details><summary>Hint 2</summary>Differentiation multiplies by iξ.</details>
<details><summary>Full solution</summary>The transforms are e^−iaξ and iξe^−iaξ respectively. No 2π prefactor appears in these forward formulas; the transform of the constant one is instead 2πδ0.</details>

### FOURIER-DIST-E004 — Principal-value multiplication
Prove x PV(1/x)=1.
<details><summary>Hint 1</summary>Apply the principal value to xφ(x).</details>
<details><summary>Hint 2</summary>The omitted short integral tends to zero.</details>
<details><summary>Full solution</summary>The pairing becomes lim∫_{|x|>ε}φ(x)dx=∫φ. This is the regular constant-one distribution. The cancellation is performed on test functions and does not claim absolute integrability of 1/x itself.</details>

### FOURIER-DIST-E005 — A homogeneous ambiguity
Why can a multiple of δ0 be added to the transformed step without changing its equation iξThat=1?
<details><summary>Hint 1</summary>ξδ0 vanishes on every test function.</details>
<details><summary>Hint 2</summary>Evaluation of ξφ at zero is zero.</details>
<details><summary>Full solution</summary>Since ξδ0=0, the added term is killed by the multiplier iξ. The regularization calculation fixes the actual coefficient π for the transform of H; the derivative equation alone does not.</details>

### FOURIER-DIST-E006 — Poisson sign
Verify the point-source sign for G=−|x|/2.
<details><summary>Hint 1</summary>|x|''=2δ0.</details>
<details><summary>Hint 2</summary>The spatial operator is minus the second derivative.</details>
<details><summary>Full solution</summary>G''=−δ0, so −G''=δ0. Reversing the Green sign would solve a negative unit source under the stated operator convention.</details>

### FOURIER-DIST-E007 — Resolvent jump
Compute Gm'(0+)−Gm'(0−) for Gm=e^−m|x|/(2m).
<details><summary>Hint 1</summary>The right derivative is minus one half.</details>
<details><summary>Hint 2</summary>The left derivative is plus one half.</details>
<details><summary>Full solution</summary>The jump is minus one. The distributional second derivative therefore has a minus δ0 term, and the operator −d²+m² contributes plus δ0 while its smooth half-line parts cancel.</details>

### FOURIER-DIST-E008 — Smoothing a point derivative
Find δa'*f for f∈S.
<details><summary>Hint 1</summary>Differentiate f(x−y) with respect to y.</details>
<details><summary>Hint 2</summary>The distribution derivative supplies a second minus sign.</details>
<details><summary>Full solution</summary>The result is f'(x−a). This agrees with differentiating the translated convolution δa*f and with its Fourier multiplier iξe^−iaξ.</details>

### FOURIER-DIST-E009 — Reciprocal comb
For a=2, give the transformed comb's spacing and factor.
<details><summary>Hint 1</summary>The reciprocal spacing is 2π/a.</details>
<details><summary>Hint 2</summary>The prefactor has the same numerical expression.</details>
<details><summary>Full solution</summary>The spacing is π and the identity is F(Σδ2n)=πΣδπk. The factor belongs to angular-frequency normalization, not to an unscaled finite DFT.</details>

### FOURIER-DIST-E010 — Nonlinear limit
Why does ηε→δ0 not justify ηε²→δ0²?
<details><summary>Hint 1</summary>Distribution convergence controls linear pairings.</details>
<details><summary>Hint 2</summary>The squared pairing in the example grows like 1/ε.</details>
<details><summary>Full solution</summary>Multiplication is not a general continuous operation on distributions. For a compactly supported mollifier and a test equal to one near zero, ∫ηε²φ=ε^−1∫η² diverges. Thus that natural sequence has no finite distribution limit to supply the proposed square.</details>

### FOURIER-DIST-E011 — Growth matters
Why does e^x² fail to define a regular tempered distribution by ordinary integration?
<details><summary>Hint 1</summary>Choose a Gaussian test with slower decay.</details>
<details><summary>Hint 2</summary>The product then grows exponentially.</details>
<details><summary>Full solution</summary>With φ=e^−x²/2∈S, the product is e^{x²/2}, whose integral diverges. The proposed pairing is not defined for every test, so smoothness alone cannot establish temperateness.</details>

### FOURIER-DIST-E012 — Transform continuity
If Tj→T in the test-pairing sense, prove That_j→That.
<details><summary>Hint 1</summary>Fix one Schwartz test φ.</details>
<details><summary>Hint 2</summary>Its transform is another fixed Schwartz test.</details>
<details><summary>Full solution</summary>That_j(φ)=Tj(φhat) tends to T(φhat)=That(φ) by the assumed convergence. Since this holds for every φ∈S, it is exactly the required distribution convergence.</details>

## Sources and scope

This original exposition follows the standard tempered-distribution Fourier syllabus. Dual continuity, principal value, point sources, convolution and comb identities are proved with explicit conventions. General distribution multiplication, multidimensional weak boundary theory and Sobolev regularity are not inferred from symbolic notation.

## Summary

Tempered distributions are continuous linear measurements on Schwartz tests. Moving derivatives and transforms onto those tests gives rigorous point sources and jump terms. Principal value and regularization settle a transformed step's singularity and constant; Green functions and combs retain exact signs and reciprocal scales. Smoothing is legitimate under stated hypotheses, while a divergent square-mollifier example shows why nonlinear products need additional theory.
