
# Uncertainty Principles

A signal cannot be arbitrarily concentrated in both position and frequency. The meaning of concentrated must be specified: variance, support length, energy outside selected intervals and the number of nonzero discrete coordinates lead to different theorems. This chapter proves several exact versions rather than treating one informal slogan as all of them.

The convention is fhat(ξ)=∫f(x)e^−ixξdx, with Plancherel factor 1/(2π). The principal variance proof uses a nonzero Schwartz function. This ensures all moments, derivatives and integrations by parts exist with vanishing tails. The [Plancherel](inversion-plancherel.md) and [Schwartz](schwartz-space-convolution.md) chapters supply that machinery. A completed-space concentration theorem is stated in square norm, and the final theorem is finite DFT algebra.

Spatial units and angular-frequency units are reciprocal. Their variance-product constant is one half. If ordinary frequency ν=ξ/(2π) is used instead, the corresponding standard-deviation product constant is 1/(4π). The constants change with the coordinate convention; the underlying inequality does not.

## 1. Centers and variances

Normalize f so that ∫|f|²=1. Define

\[
 \mu_x=\int x|f(x)|^2dx,\qquad
 \mu_\xi=\frac1{2\pi}\int\xi|\widehat f(\xi)|^2d\xi,
\]

and variances σx²=∫(x−μx)²|f|² and σξ²=(2π)^−1∫(ξ−μξ)²|fhat|². The frequency energy divided by 2π has mass one, so both are genuinely normalized variance expressions. Raw transform energy has mass 2π instead.

Translation changes μx and modulation by e^{ibx} changes μξ, without changing the corresponding variances. Thus the inequality can be reduced to zero centers. Plancherel and the derivative rule identify σξ with the norm of f'−iμξf. With zero centers, σx=||xf||2 and σξ=||f'||2.

The normalization can be removed by dividing all expressions by ||f||2². It is cleaner to state it explicitly than to mix an unnormalized moment with a normalized variance. A function can have finite energy and infinite variance; the finite-moment theorem then does not apply as a finite numerical estimate.

## 2. The Heisenberg inequality and equality

For f∈S, integrate the derivative of x|f|² over the line. The boundary term vanishes by rapid decrease, giving

\[
 0=\|f\|_2^2+2\operatorname{Re}\int xf'(x)\overline{f(x)}dx.
\]

Cauchy–Schwarz therefore yields ||xf||2||f'||2≥||f||2²/2. Apply this after centering and modulating a normalized f to obtain

\[
 \sigma_x\sigma_\xi\ge\frac12.
\]

The proof has two possible sources of strictness: replacing the real part by absolute magnitude, and Cauchy–Schwarz. Equality requires f' to be a scalar multiple of xf after centering, and that scalar must be negative real to have exactly the required real inner product. Thus f'=−a xf with a>0. Solving the scalar ODE gives f=Cexp(−ax²/2). Conversely this Gaussian attains equality. Undoing translation and modulation gives all equality cases within the stated class: a translated Gaussian envelope times a linear phase and a constant complex factor.

**Worked example 12.1: the normalized Gaussian.** Let f_a=(a/π)^1/4e^−ax²/2, a>0. Gaussian integration gives norm one, zero centers and σx²=1/(2a). Its derivative is −axf_a, so σξ²=||f_a'||2²=a/2. The product is one half for every a. Making the envelope narrower by increasing a widens the frequency distribution; it does not improve the product.

The proof is an integration identity and a sharp Hilbert inequality. It does not refer to measurement randomness or to a numerical plot. Physical applications can interpret the two densities, but the mathematical statement has already specified exactly what is constrained.

## 3. Correlation gives a stronger inequality

Put D=−i times differentiation and X multiplication by x. After centering, define the real covariance C=Re<Xf,Df>, where the inner product is linear in its first argument. The integration identity shows Im<Xf,Df>=−1/2 for normalized f. Hence

\[
 |\langle Xf,Df\rangle|^2=C^2+\frac14.
\]

Cauchy–Schwarz now gives the stronger statement σx²σξ²−C²≥1/4. Omitting covariance recovers Heisenberg. Keeping it explains how a signal with a position-dependent phase can have a larger ordinary variance product while still attaining the stronger inequality.

**Worked example 12.2: a chirped Gaussian.** Let f=C0exp(−(a+ib)x²/2), a>0, with C0 chosen for unit norm. Its spatial density is unchanged from the unchirped Gaussian. Its derivative is −(a+ib)xf, so σx²=1/(2a), σξ²=(a²+b²)/(2a) and C=−b/(2a). Thus σx²σξ²=1/4+b²/(4a²), while subtracting C² leaves exactly 1/4. The ordinary Heisenberg equality occurs only when b=0.

The sign of C follows from the specified phase and inner-product convention. Changing a Fourier sign or replacing the phase by its conjugate changes that covariance sign, but not its square or either variance. This is why a proof should state the convention rather than importing a remembered commutator constant without checking it.

## 4. A compact signal cannot also have compact spectrum

A separate uncertainty statement uses support rather than variance. Suppose f∈S has support in [−R,R]. Its transform extends to every complex z by F(z)=∫_{−R}^Rf(x)e^−ixzdx. Expanding the exponential about any real ξ0 gives

\[
 F(z)=\sum_{n\ge0}\frac{F^{(n)}(\xi_0)}{n!}(z-\xi_0)^n.
\]

The series converges absolutely for every z: the nth integral coefficient is bounded by ||f||1R^n, and the resulting exponential majorant justifies termwise integration. No complex identity theorem is needed beyond this explicitly convergent power series.

If fhat were also compactly supported, it would vanish on some open real interval. At a point ξ0 in that interval all its real derivatives would be zero. The displayed entire Taylor series would then vanish everywhere, so fhat=0. Fourier inversion gives f=0. Therefore no nonzero Schwartz function has compact support in both domains.

A compactly supported smooth bump has transform decaying faster than any power, but never identically zero outside a finite frequency band. Conversely a nonzero smooth compactly supported frequency bump inverts to a Schwartz function with spatial tails. Small tails and zero tails are distinct hypotheses. This theorem is stronger than a mere lower bound on a product of two finite support lengths, but applies to exact support rather than approximate concentration.

## 5. Quantitative concentration in two intervals

Let f have unit completed square norm. Let E and F be finite intervals in position and angular frequency, with lengths |E| and |F|. Define PE by restricting in position to E and QF by restricting the transform to F and inverting. These are orthogonal projections in the completed space, using the indicator multipliers established in the inversion chapter.

The frequency restriction has a continuous inverse representative and Cauchy–Schwarz gives |QFf(x)|≤sqrt(|F|/(2π))||f||2. Integrating its square over E gives

\[
 \|P_EQ_F\|\le\sqrt{\frac{|E||F|}{2\pi}}.
\]

Suppose the missing energies are bounded by ||(I−PE)f||2≤εx and ||(I−QF)f||2≤εξ. Then f−PEQFf=(f−PEf)+PE(f−QFf), so ||PEQFf||2≥1−εx−εξ. If their sum is below one, combining the two estimates yields

\[
 |E||F|\ge2\pi(1-\varepsilon_x-\varepsilon_\xi)^2.
\]

This is a deterministic concentration bound. The epsilons are norms of omitted components, not omitted energy squares; confusing them would change the expression. It is not claimed sharp for every interval pair. The estimate also remains meaningful when exact supports are unavailable but energy tails have actual bounds.

Finite-interval restrictions in this argument can be built by smooth cutoff approximation in the completion. For the point bound, the finite frequency interval makes an L2 element integrable by Cauchy–Schwarz; inverse approximation then converges uniformly, just as in the sampling chapter. Thus no point evaluation of an unrestricted L2 element has been assumed.

## 6. A discrete support-product theorem

For a nonzero vector x of length N, let s be the number of nonzero entries and t the number of nonzero unscaled forward DFT coefficients Xk. Each coefficient obeys |Xk|≤sqrt s||x||2 by Cauchy–Schwarz over the s nonzero inputs. Finite Parseval says Σ|Xk|²=N||x||2². Summing only the t nonzero outputs gives

\[
 N\|x\|_2^2\le st\|x\|_2^2,
 \qquad st\ge N.
\]

Cancellation may create many frequency zeros, but it cannot create more than this product bound allows. This theorem concerns exact zeros. A thresholded numerical support would need an error-dependent concentration statement instead.

**Worked example 12.3: a lattice comb attains equality.** Write N=ab. Set xj=1 when j is one of 0,b,2b,…,(a−1)b, and zero otherwise. Its DFT is Σ_{r=0}^{a−1}e^−2πirk/a, equal to a when a divides k and zero otherwise by the finite root sum. Thus s=a,t=b and st=N. A single impulse and a constant vector are the endpoint cases. The algebraic spacing is exactly what permits simultaneous sparsity here.

The finite product theorem is not a statement that every integer pair with product N occurs for every prescribed signal. It supplies a universal lower bound and an explicit family attaining it. Other uncertainty inequalities on special finite groups can be sharper, but need their own hypotheses and proofs.

## 7. A discontinuous pulse has infinite frequency variance

Normalize the indicator of [−A,A] to unit square norm. Its spatial variance is A²/3. Its transform is a constant times sin(Aξ)/ξ. Multiplying its squared magnitude by ξ² leaves a nonzero multiple of sin²(Aξ), whose whole-line integral diverges. Thus its frequency variance is infinite.

This is not a counterexample to the finite-variance inequality. The pulse is not Schwartz and has no square-integrable classical derivative across its jumps. Its compact spatial width has been paid for by a slowly decreasing spectral tail. Smoothing its edges produces finite derivatives, but the derivative energy grows as the smoothing layer narrows. The derivative Parseval identity identifies the exact frequency-weighted quantity responsible.

A finite plotted spectrum can hide this issue by imposing a frequency cutoff. Every truncated variance is finite, but those finite values do not establish convergence as the cutoff grows. An actual tail estimate or analytic calculation is needed. The same caution applies to calling a thresholded finite DFT “compactly supported” when the continuous transform merely has small values outside a chosen display range.

## 8. The same identity is a ground-state energy bound

For a>0 expand the nonnegative square ||f'+axf||2². The cross term is twice a times the real integral already computed, so

\[
 \|f'\|_2^2+a^2\|xf\|_2^2
 =a\|f\|_2^2+\|f'+axf\|_2^2
 \ge a\|f\|_2^2.
\]

For unit norm, the sum of derivative energy and quadratic-position energy is at least a. Equality occurs exactly when f'+axf=0, giving the Gaussian. Direct differentiation of that Gaussian shows it solves (−d²/dx²+a²x²)f=af. Thus the uncertainty calculation supplies the lowest-energy bound and an attaining state for this oscillator expression, without asserting an entire oscillator spectral expansion.

Conversely let A=||xf||2² and B=||f'||2² for a centered normalized signal. The inequality B+a²A≥a holds for every a>0. Minimizing the quadratic in a, or requiring it never become negative, gives AB≥1/4. This recovers Heisenberg from a whole family of coercive energy estimates. The equality parameter is a=1/(2A), consistently with the Gaussian variance.

The centering step matters if the objective is a fixed oscillator energy around the origin. Translating the envelope or modulating its phase adds μx² and μξ² to the uncentered second moments. Those operations preserve the variance product but do not preserve that fixed-origin energy. An optimizer of one quantity need not optimize the other unless the centers are also controlled.

## 9. Amplitude is controlled by energy and variation together

A related one-dimensional inequality explains why additional derivative control stabilizes a point value. For f∈S, integrate the derivative of |f|² from minus infinity to x and also from x to plus infinity with reversed sign. Add the two absolute estimates to obtain |f(x)|²≤∫|f f'|. Cauchy–Schwarz yields

\[
 \|f\|_\infty^2\le\|f\|_2\|f'\|_2.
\]

Square norm alone gave no evaluation bound; the derivative factor supplies the missing information. This is a statement about one spatial variable and the specified decay class, not an unrestricted higher-dimensional embedding claim.

Fourier inversion gives another proof with its constant visible. For b>0, apply weighted Cauchy–Schwarz to the absolute transform integral with weights b²+ξ². Since ∫(b²+ξ²)^−1dξ=π/b, Parseval gives |f(x)|²≤(b²||f||2²+||f'||2²)/(2b). Minimizing over b>0 yields exactly the same product bound. The reciprocal weight is the positive elliptic resolvent multiplier encountered in the PDE chapters.

The constant one is sharp even though a Schwartz function need not attain it. The function e^−a|x| has supremum squared one, square norm squared 1/a and derivative square norm squared a, so their norm product is one. It has a corner, but smooth rapidly decreasing approximants e^−a sqrt(x²+ε²) approach both its function and derivative in square norm, while their supremum tends to one. To justify convergence, work away from zero where it is uniform on compact intervals, bound a short interval about zero by the common derivative and value bounds, and use exponential bounds for the tails. Thus no smaller universal constant can hold on S.

This inequality and Heisenberg are related but different. One controls a pointwise height by two energy quantities; the other constrains two centered second moments of a normalized density. Their equality examples and hypotheses should therefore be kept separate.

## 10. A robust discrete concentration estimate

The support-product argument has an error-tolerant form. Use the normalized unitary DFT U, with entries of magnitude 1/sqrt N. Let E be s selected input indices and F be t selected frequency indices, and PE,QF their coordinate projections. For a unit vector x suppose ||(I−PE)x||≤ε and ||(I−QF)Ux||≤η. These are actual omitted-energy norms; selecting a display threshold without summing the omitted terms does not establish them.

For a vector supported on E, each retained output coordinate is bounded by sqrt(s/N) times its norm, by Cauchy–Schwarz. Summing over F gives ||QF U PE||≤sqrt(st/N). Meanwhile

\[
 Ux-Q_FUP_Ex=(I-Q_F)Ux+Q_FU(I-P_E)x,
\]

whose norm is at most η+ε by unitarity and projection contraction. Hence ||QF U PEx||≥1−ε−η. If the sum is below one, combining the estimates proves st≥N(1−ε−η)². Exact support is the special case ε=η=0.

The bound is deterministic and applies to any selected coordinate sets. It does not require a random signal or random noise, nor does it guarantee that one particular threshold-selection procedure finds the best sets. Its usefulness depends on correctly accounting for every omitted coordinate. The error variables are norm fractions, so squared-energy fractions must be square-rooted before substitution.

The continuous interval theorem has the same projection structure, with the normalized Fourier kernel replacing the finite unitary matrix entries. This common proof pattern explains the relationship between the two results while retaining their different normalizations: a factor 2π belongs to angular-frequency interval length, whereas N belongs to a finite grid's coordinate count.

## 11. Variance gives one concentration estimate

For a normalized signal with finite spatial variance, the energy outside |x−μx|≤R is at most σx²/R². Indeed the variance integrand there is at least R² times the energy density. The analogous frequency estimate is σξ²/S² outside a radius S around μξ, with the Plancherel normalization included. Thus known variances can supply explicit omitted-energy norms for the interval theorem after taking square roots.

These elementary tail bounds are often conservative and do not make the concentration theorem equivalent to the sharp Gaussian variance inequality. A signal with a small mass far away can have a large variance while retaining most energy in a short interval. Recording which quantity is actually known prevents an approximate-support claim from being presented as a variance measurement or vice versa.

## 12. Dilation preserves the tradeoff

For a>0 define the unitary dilation Da f(x)=sqrt a f(ax). Changing variables proves its norm is unchanged and its transform is a^−1/2 fhat(ξ/a). The spatial center and standard deviation are divided by a, while the frequency center and standard deviation are multiplied by a. Hence both the variance product and the covariance-corrected determinant remain invariant. Translation and modulation move the centers; dilation changes the two widths reciprocally.

The support-length statements scale in the same way. A spatial interval is shortened by a while its corresponding frequency interval is lengthened by a, leaving their product unchanged. The concentration error norms remain the same under the matching coordinate transformations. These facts show that the constants in the proved inequalities are compatible with physical changes of scale.

For a Gaussian, this operation moves through all positive width parameters without leaving the equality family. For a chirped Gaussian it also preserves the nonzero covariance contribution after the corresponding parameter change. Rescaling can make a narrow plot appear broad in different coordinates, but it cannot eliminate the proved joint concentration cost. A comparison of widths should therefore state the units and coordinate normalization before interpreting a numerical product.

## Exercises

### FOURIER-UNC-E001 — Ordinary frequency
Convert σxσξ≥1/2 to ordinary frequency ν=ξ/(2π).
<details><summary>Hint 1</summary>Standard deviation scales linearly under a constant coordinate factor.</details>
<details><summary>Hint 2</summary>σν=σξ/(2π).</details>
<details><summary>Full solution</summary>The inequality becomes σxσν≥1/(4π). The probability density in ν includes the corresponding Jacobian, so its normalized variance is consistent with the same signal.</details>

### FOURIER-UNC-E002 — Gaussian width
For a=4 in the normalized Gaussian example, find both variances.
<details><summary>Hint 1</summary>Use 1/(2a) and a/2.</details>
<details><summary>Hint 2</summary>Multiply before taking a square root.</details>
<details><summary>Full solution</summary>σx²=1/8 and σξ²=2. Their product is 1/4, so the standard-deviation product is one half. Both distributions remain normalized.</details>

### FOURIER-UNC-E003 — Modulation
What does multiplication by e^{ibx} do to the variance product?
<details><summary>Hint 1</summary>It shifts the transform by b.</details>
<details><summary>Hint 2</summary>A translated frequency density has the same centered variance.</details>
<details><summary>Full solution</summary>It changes the frequency center by b but leaves its centered variance unchanged. Spatial magnitude and variance also remain unchanged, so the product is preserved. Using an uncentered second moment instead would give a different number.</details>

### FOURIER-UNC-E004 — Chirp correlation
For a=2,b=2, calculate C and the squared variance product.
<details><summary>Hint 1</summary>C=−b/(2a).</details>
<details><summary>Hint 2</summary>The product is 1/4+C².</details>
<details><summary>Full solution</summary>C=−1/2 and σx²σξ²=1/2. Subtracting C²=1/4 leaves the sharp stronger value 1/4, while the ordinary variance product is strictly above its minimum.</details>

### FOURIER-UNC-E005 — Equality ODE
Solve the centered equality equation f'=−axf with a>0.
<details><summary>Hint 1</summary>Differentiate e^{ax²/2}f.</details>
<details><summary>Hint 2</summary>The resulting derivative is zero.</details>
<details><summary>Full solution</summary>One obtains f=C e^−ax²/2. Such a function is Schwartz and nonzero for C≠0. A negative a would grow and fail the finite-energy class; a=0 would give a nonzero constant, also outside it.</details>

### FOURIER-UNC-E006 — Exact support
Can a nonzero smooth compactly supported function have a transform exactly zero beyond a finite band?
<details><summary>Hint 1</summary>Its transform has an entire Taylor expansion.</details>
<details><summary>Hint 2</summary>An open zero interval makes all coefficients at its center zero.</details>
<details><summary>Full solution</summary>No. The entire expansion then vanishes everywhere, and inversion forces the original function to vanish. Rapidly decreasing tails are possible, but exact finite support in both domains is not.</details>

### FOURIER-UNC-E007 — Concentration lengths
If εx=εξ=1/10, give the interval-product lower bound.
<details><summary>Hint 1</summary>The remaining norm fraction is 4/5.</details>
<details><summary>Hint 2</summary>Square that fraction and multiply by 2π.</details>
<details><summary>Full solution</summary>|E||F|≥32π/25. The epsilons are omitted-component norms; if an omitted energy were supplied instead, its square root would enter this formula.</details>

### FOURIER-UNC-E008 — Discrete sparsity
For N=60 and s=5 nonzero samples, how small can t be under the product bound?
<details><summary>Hint 1</summary>Use st≥N.</details>
<details><summary>Hint 2</summary>t is an integer.</details>
<details><summary>Full solution</summary>t≥12. The comb construction with a=5,b=12 attains this value, so the lower bound is sharp for that pair of sizes.</details>

### FOURIER-UNC-E009 — Impulse transform
For a length-N unit impulse, find s and t.
<details><summary>Hint 1</summary>Every DFT coefficient is one.</details>
<details><summary>Hint 2</summary>Only one input coordinate is nonzero.</details>
<details><summary>Full solution</summary>s=1 and t=N, giving equality st=N. This is the most concentrated possible exact spatial support and the least concentrated possible transform support.</details>

### FOURIER-UNC-E010 — Pulse variance
Why does a rectangular pulse not have finite frequency variance?
<details><summary>Hint 1</summary>Its transform has a sine over frequency tail.</details>
<details><summary>Hint 2</summary>The variance weight cancels the denominator squared.</details>
<details><summary>Full solution</summary>After multiplication by ξ² the squared transform is a nonzero constant times sin²(Aξ), whose integral diverges. Finite energy of the transform is insufficient for its frequency-weighted second moment.</details>

### FOURIER-UNC-E011 — Where integration by parts enters
Identify the boundary expression used in the variance proof and explain why it vanishes on S.
<details><summary>Hint 1</summary>Differentiate x|f|².</details>
<details><summary>Hint 2</summary>Polynomial weights times Schwartz values tend to zero.</details>
<details><summary>Full solution</summary>The boundary term is x|f(x)|² at the two infinities. Rapid decrease makes it tend to zero at both ends. Without suitable decay, discarding it would be unjustified and the displayed sharp identity would not follow as written.</details>

### FOURIER-UNC-E012 — Different notions of concentration
Does a small spatial variance prove exact compact support?
<details><summary>Hint 1</summary>Use a narrow Gaussian.</details>
<details><summary>Hint 2</summary>Its values are nonzero at every real point.</details>
<details><summary>Full solution</summary>No. A Gaussian can have arbitrarily small spatial variance while retaining nonzero tails everywhere. Variance, energy concentration and exact support are different hypotheses, so their uncertainty conclusions should not be exchanged without proof.</details>

## Sources and scope

This original development follows the standard Fourier uncertainty syllabus. Variance proofs use Schwartz functions, the approximate interval bound uses completed projections, and discrete support uses exact DFT algebra. No entropic inequality, optimal time-band concentration theorem or thresholded numerical guarantee is inferred from these results.

## Summary

Variance uncertainty follows from integration by parts and Cauchy–Schwarz, with Gaussian equality and a covariance refinement. Exact compact support in both domains is impossible, while approximate concentration has a quantitative interval bound. Finite DFT support obeys a sharp product inequality. Pulse and modulation examples show why the norm, center, support notion and frequency convention must accompany every uncertainty claim.
