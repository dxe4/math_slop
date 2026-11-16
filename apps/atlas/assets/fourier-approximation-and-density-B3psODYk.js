var e=`---
parent_id: book-fourier-analysis
chapter_id: fourier-approximation-and-density
title: "Fourier Coefficients and Orthogonal Projection"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Fourier Coefficients and Orthogonal Projection

Fourier coefficients can be obtained without assuming that an infinite Fourier series converges. They solve a finite approximation problem: among all trigonometric polynomials with a chosen frequency band, one particular polynomial has the smallest mean-square error. Orthogonality determines its coefficients exactly and gives a Pythagorean error identity. Infinite reconstruction is a later question requiring its own convergence theorem.

Preparation is [Real Analysis](../proof-safe-real-analysis.md), especially Riemann integration and finite sums of complex exponentials, and the basic complex-number rules. We begin with continuous periodic functions and bounded functions continuous except at finitely many jumps. All integrals in this opening treatment can be Riemann integrals. General measure-based L2 equivalence and completeness belong to the measure continuation; no such theorem is needed for finite orthogonal projection.

## Normalization before calculation

Take period \\(2\\pi\\) and use any full period, usually \\([-\\pi,\\pi]\\). Define
\\[
 \\langle f,g\\rangle=\\frac1{2\\pi}\\int_{-\\pi}^{\\pi}f(x)\\overline{g(x)}dx,
 \\qquad \\|f\\|_2^2=\\langle f,f\\rangle.
\\]
The first slot is linear and the second conjugate linear. For piecewise continuous functions this is a seminorm on actual pointwise representatives: changing finitely many isolated values does not affect the integral. On the quotient identifying zero integral-distance representatives it is a norm. The finite approximation arguments below are valid without claiming that this particular function class is complete.

**Definition 2.1 (Fourier coefficient).** With \\(e_n(x)=e^{inx}\\), for integer \\(n\\), set
\\[
 \\widehat f(n)=\\langle f,e_n\\rangle
 =\\frac1{2\\pi}\\int_{-\\pi}^{\\pi}f(x)e^{-inx}dx.
\\]
The degree-\\(N\\) symmetric partial sum is the finite polynomial
\\(S_Nf=\\sum_{n=-N}^{N}\\widehat f(n)e^{inx}\\). Writing it requires only those finitely many integrals, not an asserted infinite expansion.

**Lemma 2.2 (Exponential orthogonality).** The exponentials satisfy \\(\\langle e_n,e_m\\rangle=1\\) if \\(n=m\\), and zero otherwise.

*Proof.* The integrand is \\(e^{i(n-m)x}\\). If its integer frequency is zero the integral is \\(2\\pi\\). Otherwise an antiderivative is \\(e^{i(n-m)x}/[i(n-m)]\\); its endpoint values agree because the frequency is an integer. Dividing by \\(2\\pi\\) proves the claim. ∎

The mean coefficient \\(\\widehat f(0)\\) is the average of the signal over a period. Higher coefficients record both size and phase. Their numerical normalization is fixed here: a complex exponential of amplitude one has coefficient one at its own integer frequency. Other normalizations are possible, but mixing them changes constants in projection, Parseval and convolution formulas.

For real \\(f\\), conjugating its integral gives \\(\\widehat f(-n)=\\overline{\\widehat f(n)}\\). Writing
\\[
 a_n=\\frac1\\pi\\int f(x)\\cos(nx)dx,\\qquad
 b_n=\\frac1\\pi\\int f(x)\\sin(nx)dx
\\]
gives \\(\\widehat f(0)=a_0/2\\) and \\(\\widehat f(n)=(a_n-ib_n)/2\\) for positive \\(n\\). Thus the corresponding real polynomial is \\(a_0/2+\\sum_{n=1}^N[a_n\\cos(nx)+b_n\\sin(nx)]\\). These are finite coefficient identities and do not assert a convergence mode for an infinite series.

## Least squares with an exact error identity

Let \\(V_N\\) be the span of \\(e_n\\) for \\(|n|\\le N\\).

**Theorem 2.3 (Orthogonal projection).** For every admissible \\(f\\) and \\(p\\in V_N\\),
\\[
 \\|f-p\\|_2^2=\\|f-S_Nf\\|_2^2+\\|S_Nf-p\\|_2^2.
\\]
Consequently \\(S_Nf\\) is the unique best trigonometric polynomial in that frequency band.

*Proof.* For each allowed \\(m\\), orthogonality gives
\\(\\langle f-S_Nf,e_m\\rangle=\\widehat f(m)-\\widehat f(m)=0\\). Thus the residual is perpendicular to every member of \\(V_N\\). Split \\(f-p=(f-S_Nf)+(S_Nf-p)\\) and expand its squared norm; the two cross terms vanish. The displayed identity follows. It proves minimality. If another polynomial has equal error, its squared distance from \\(S_Nf\\) is zero. A continuous polynomial with zero square integral is zero everywhere, so the minimizing polynomial itself is unique. ∎

**Corollary 2.4 (Finite Bessel identity).** One has
\\[
 \\|f\\|_2^2=\\|f-S_Nf\\|_2^2+
 \\sum_{|n|\\le N}|\\widehat f(n)|^2,
 \\qquad \\|S_Nf\\|_2\\le\\|f\\|_2.
\\]

*Proof.* Apply the theorem with \\(p=0\\) and use orthonormality to compute the finite polynomial norm. The residual norm is nonnegative. ∎

As \\(N\\) grows the finite coefficient-square sums increase and remain bounded by \\(\\|f\\|_2^2\\), proving Bessel's inequality for the infinite numerical sum. In particular coefficients tend to zero as \\(|n|\\to\\infty\\). None of this proves equality of the infinite sum with the original energy. Equality is Parseval and requires completeness of the trigonometric system. An orthonormal family missing half the coordinate directions would obey Bessel but not recover every vector. The mean-square chapter supplies the needed density argument.

Mean-square stability is already available at the finite stage. By linearity and contraction,
\\(\\|S_Nf-S_Ng\\|_2\\le\\|f-g\\|_2\\). This does not give a common bound in the uniform norm: that different question is governed by Dirichlet kernels. The norm in an approximation statement is part of its conclusion.

## Worked coefficient calculations

**Worked example 2.5 (A finite signal and its best low-band fit).** Let \\(f(x)=1+\\cos(3x)+2\\sin(2x)\\). Its only nonzero coefficients are
\\[
 \\widehat f(0)=1,\\quad \\widehat f(3)=\\widehat f(-3)=\\tfrac12,
 \\quad \\widehat f(2)=-i,\\quad\\widehat f(-2)=i.
\\]
These follow by expressing the sine and cosine as exponentials. The degree-two best fit is \\(1+2\\sin(2x)\\). Its squared residual is the energy of \\(\\cos(3x)\\), namely one half. The total squared norm is \\(1+1/2+2=7/2\\). Every other degree-two polynomial has that same residual energy plus its squared distance from the best fit, so a different coefficient choice cannot improve the approximation.

**Worked example 2.6 (A rectangular periodic pulse).** For \\(0<a<\\pi\\), let \\(f=1\\) on \\((-a,a)\\) and zero on the rest of a period, with arbitrary finite endpoint assignments. Direct integration gives
\\[
 \\widehat f(0)=a/\\pi,\\qquad
 \\widehat f(n)=\\frac{\\sin(na)}{\\pi n}\\quad(n\\ne0).
\\]
The coefficients are real and even because the pulse is real and even. Its squared norm is \\(a/\\pi\\). Bessel therefore gives a valid inequality between that energy and the coefficient squares, without yet identifying their full sum. Changing the two jump values cannot change a coefficient, whereas later pointwise convergence will recover the jump average rather than the assigned value.

**Worked example 2.7 (The sawtooth).** Extend \\(f(x)=x\\), \\(-\\pi<x<\\pi\\), periodically. Oddness gives zero cosine coefficients and zero mean. Integration by parts yields
\\[
 b_n=\\frac2\\pi\\int_0^\\pi x\\sin(nx)dx
 =\\frac{2(-1)^{n+1}}n.
\\]
Thus \\(\\widehat f(n)=i(-1)^n/n\\) for positive \\(n\\), with conjugate values at negative indices. The function has a periodic jump at the identified endpoints, explaining the slow reciprocal-frequency decay. Computing these coefficients is not a proof of endpoint convergence or an absence of overshoot; those are the subject of the Dirichlet and Gibbs chapters.

## Translation, reflection and period changes

**Proposition 2.8 (Geometric coefficient rules).** If \\(g(x)=f(x-a)\\), periodically interpreted, then \\(\\widehat g(n)=e^{-ina}\\widehat f(n)\\). If \\(h(x)=f(-x)\\), then \\(\\widehat h(n)=\\widehat f(-n)\\).

*Proof.* Substitute \\(y=x-a\\) in the translation integral. The integrand is periodic over the shifted full interval, so it has the same period integral, and the remaining exponential factor is \\(e^{-ina}\\). For reflection substitute \\(y=-x\\), reverse the endpoints, and obtain the coefficient at negative index. ∎

Translation changes phase, not coefficient modulus. A large change in waveform location can therefore leave the energy in every frequency unchanged. A coefficient magnitude plot alone does not identify all geometric information about the signal. Reflection reverses frequency signs; for real functions that is conjugation of coefficients, not generally equality.

For a period \\(P>0\\), replace the basis by \\(e^{2\\pi inx/P}\\), the integral factor by \\(1/P\\), and integrate over any full period. The substitution \\(y=2\\pi x/P\\) reduces all orthogonality and projection statements to the convention proved above. The integer index counts cycles per period; the physical angular frequency is \\(2\\pi n/P\\). Confusing an integer mode with physical frequency can insert an erroneous factor into derivative and diffusion rates.

## Smoothness controls coefficient tails

**Theorem 2.9 (Derivative and decay rules).** If \\(f\\) is continuously differentiable and periodic with matching endpoint values, then
\\[
 \\widehat{f'}(n)=in\\widehat f(n).
\\]
Consequently \\(|\\widehat f(n)|\\le(2\\pi|n|)^{-1}\\int|f'|\\) for \\(n\\ne0\\). If two derivatives are continuous and periodic, repeating gives a reciprocal-square bound using \\(\\int|f''|\\).

*Proof.* Integrate by parts over one period. The endpoint term \\(f(x)e^{-inx}\\) cancels because both factors match there. The remaining integral is \\(in\\int f e^{-inx}\\), proving the identity. Bound the derivative coefficient by its absolute integral and divide by \\(|n|\\). Repeat with \\(f'\\) only when its endpoint values also match. ∎

For bounded piecewise continuously differentiable functions with finitely many jumps, integrate on each smooth piece. The interior endpoint terms are finite jump contributions, while the derivative integrals have finite total absolute size. Their sum still gives an \\(O(1/|n|)\\) coefficient bound. Jump discontinuities therefore naturally produce reciprocal tails; a claimed faster rate needs additional cancellation or regularity.

More precisely, when the one-sided limits and piecewise derivative are used, the identity is
\\[
 \\widehat{f'}(n)=in\\widehat f(n)-
 \\frac1{2\\pi}\\sum_j J_j e^{-inx_j},
\\]
with each periodic jump \\(J_j=f(x_j+)-f(x_j-)\\) included, including the identified endpoint when it jumps. This follows by summing the boundary terms, whose contribution at a jump is minus that jump times the exponential. Omitting those terms would falsely treat a sawtooth as a smooth periodic function.

Decay estimates control coefficient tails, but different conclusions need different sums. Reciprocal-square decay makes the Fourier series absolutely and uniformly convergent by a numerical majorant. Reciprocal decay alone does not. Identifying any resulting sum with the original function still invokes an appropriate convergence or uniqueness theorem. A bound on coefficients and a representation theorem are separate arguments.

## Correlation and two-dimensional modes

For finite trigonometric polynomials, orthogonality also gives an exact inner-product formula:
\\[
 \\langle p,q\\rangle=\\sum_n\\widehat p(n)\\overline{\\widehat q(n)}.
\\]
Both sides involve only finitely many terms, so no completeness or rearrangement theorem is hidden here. If one translates the first polynomial, its correlation with the second becomes
\\[
 \\frac1{2\\pi}\\int p(x+a)\\overline{q(x)}dx
 =\\sum_n\\widehat p(n)\\overline{\\widehat q(n)}e^{ina}.
\\]
This follows by substituting the finite expansions and integrating term by term. In particular autocorrelation uses only coefficient magnitudes squared. A translated signal has the same autocorrelation because translation changes coefficient phases and leaves those magnitudes unchanged. Thus a power-spectrum or autocorrelation description can preserve energy information while losing location information. A reconstruction from magnitudes alone is a different problem from reconstructing from the full complex coefficients.

At zero shift autocorrelation is the mean-square energy, while at another shift its modulus is at most that energy by Cauchy–Schwarz and translation preservation of the norm. For real polynomials conjugate frequency symmetry makes the autocorrelation real and even. These conclusions are statements about one full-period correlation; they do not concern a truncated time window with different edge conventions.

The same finite geometry extends to a two-dimensional periodic rectangle. On \\([-\\pi,\\pi]^2\\), use the normalized double integral and basis
\\[
 e_{m,n}(x,y)=e^{i(mx+ny)},\\qquad(m,n)\\in\\mathbb Z^2.
\\]
Repeated integration factors the inner product of two basis functions into two one-dimensional orthogonality integrals. It is one when both indices agree and zero otherwise. Therefore projection onto any finite set of frequency pairs is obtained by the corresponding normalized coefficient integrals and satisfies the same Pythagorean error identity. A rectangular frequency band and a circularly selected band are both legitimate finite subspaces, though they retain different directions and therefore different approximations.

For a smooth periodic function the partial derivative in \\(x\\) multiplies a coefficient by \\(im\\); the derivative in \\(y\\) multiplies it by \\(in\\). The Laplacian consequently multiplies it by \\(-(m^2+n^2)\\). A single two-dimensional heat mode therefore decays with factor \\(e^{-\\kappa(m^2+n^2)t}\\), while a wave mode oscillates with angular frequency \\(c\\sqrt{m^2+n^2}\\). Direct differentiation verifies these finite-mode statements. A solution assembled from infinitely many such modes additionally needs a convergence and differentiability argument, which the later PDE chapters must supply.

This is the conceptual link between coefficients and equations: an orthogonal basis is selected for geometry, and the differential operator's action on each basis vector then becomes scalar multiplication. It is useful precisely when boundary conditions and periodicity make those basis vectors admissible. A frequency formula copied from a periodic rectangle cannot automatically solve a different boundary geometry.

**Proposition 2.10 (Choosing a fixed number of allowed modes).** Fix a finite allowed frequency set and a budget of \\(m\\) complex modes. The best mean-square approximation using at most that many allowed modes retains frequencies with the \\(m\\) largest coefficient moduli and uses their original Fourier coefficients.

*Proof.* For any selected subset, finite orthogonal projection is the unique best polynomial on that subset. Its squared error is the original energy minus the sum of the retained coefficient squares. Thus minimizing the error is exactly maximizing that finite sum, achieved by selecting the largest nonnegative terms. If two selected and omitted coefficients have unequal magnitudes in the wrong order, exchanging them strictly improves the sum. Ties can give different equally good supports, though each fixed support still has its unique projection. ∎

For a real-valued approximation the support must be closed under frequency reversal and its coefficients conjugate paired. A budget counted in real sine/cosine harmonics is therefore different from a budget of individual complex modes. Stating that convention avoids selecting only one half of a real signal's required conjugate pair.

## Coefficient perturbations have an exact error cost

Finite orthogonality also quantifies inaccurate coefficients. Suppose the true complex coefficients through degree N are cn, but a reconstruction uses cn+ηn. Write T=S_Nf+q, where q=Σ|n|≤Nηn e^{inx}. The projection residual f−S_Nf is perpendicular to every retained mode, hence to q. Pythagoras and the finite mode norm give

\\[
 \\|f-T\\|_2^2=\\|f-S_Nf\\|_2^2+
 \\sum_{|n|\\le N}|\\eta_n|^2.
\\]

This is an equality, not an upper-bound model. It separates the unavoidable degree-N truncation error from the extra cost of perturbing the retained coordinates. The norm here is normalized by one over 2π, as throughout the periodic chapters. Real sine/cosine coordinates have their corresponding one-half weights; mixing those with the complex normalization would change the formula.

If each retained complex coefficient has error at most ε, the extra squared error is at most (2N+1)ε². In uniform norm the polynomial discrepancy is at most Σ|ηn|≤(2N+1)ε. The latter bound can be attained at a chosen point by aligning the coefficient phases there. Small independent-looking coefficient magnitudes therefore need not produce cancellation in a deterministic worst-case statement. A statistical noise model would be additional information.

For an input perturbation g−f with finite absolute integral, the integral definition bounds every coefficient discrepancy by (2π)^−1∫|g−f|. That is a valid common bound, but it may be conservative because orthogonality gives stronger aggregate information in square norm. Conversely finitely many sampled heights without an interpolation, smoothness or measurement model do not by themselves bound the continuous coefficient integral. The later sampling chapter gives explicit smooth signals invisible on a fixed lattice.

These identities explain a practical tradeoff without assuming any particular experiment. Raising N decreases the exact projection tail, but if the newly estimated coefficients carry uncontrolled error, the total reconstruction need not improve. A reliable argument records a tail estimate and a coordinate-error estimate separately. Fejér averaging deliberately perturbs retained coefficients by a known weight; substituting ηn=(wn−1)cn into the same equality measures that finite-degree cost exactly. Its positivity advantages come from a different property, proved in the averaging chapter.

## Transferred measure-based companion

The following original sections have moved from the Real Analysis Fourier continuation. Their Lebesgue L2 and null-equivalence formulation assumes the measure and density inputs stated in the retained text; the main elementary/completion proofs above retain their own preparation. Original section numbers are preserved.

The earlier continuation introduction is preserved here, together with all twenty ANA-CH21 exercises and its project. The remaining original sections continue in the corresponding Dirichlet, Fejér, mean-square, Gibbs, transform and discrete chapters of this book.


# Fourier Approximation, Density, and Modes of Convergence

This chapter is retained under its original identity as a Fourier-analysis continuation, outside the current classical 22-chapter route. Its measure and L2 prerequisites are developed in the retained Lebesgue and Lp chapters. All original coefficient conventions, theorem hypotheses, exercise records and solutions remain available. The new Stone–Weierstrass chapter supplies approximation on the classical route without importing this whole Fourier development.

Fourier analysis decomposes periodic functions into oscillatory modes. The formula is elegant; the convergence questions are not. A Fourier series may converge in mean square while failing pointwise at selected points. Partial sums can overshoot near a jump. Averaged partial sums behave better than raw ones. Every statement must name its mode of convergence and the regularity of the function.

This chapter builds Fourier coefficients as Hilbert-space projections, proves Bessel's inequality and best approximation, then uses convolution and Fejér kernels to establish density and reliable convergence for continuous periodic functions.

Three questions should be kept separate from the beginning:

1. **Representation:** do the coefficients determine the function as an element of a function space?
2. **Convergence:** in which sense do finite reconstructions approach the function?
3. **Stability:** how strongly can noise, truncation, or sampling error be amplified?

For \\(L^2\\) functions, values on null sets are irrelevant, so representation means equality almost everywhere. Uniform convergence, by contrast, concerns a chosen pointwise representative. Confusing these viewpoints is responsible for many apparently paradoxical Fourier examples.

## 1. Periodic functions in \\(L^2\\)

Work on \\([-\\pi,\\pi]\\) with endpoints identified. Use the normalized inner product

\\(\\langle f,g\\rangle =(1/(2\\pi))\\int _{-\\pi}^\\pi f(x)\\overline{g(x)}\\,dx\\).

Accordingly, this chapter writes

\\(\\lVert f\\rVert_2^2=(1/(2\\pi))\\int _{-\\pi}^\\pi|f(x)|^2dx\\).

When an unnormalized \\(L^1\\) integral is used, it is written explicitly as \\(\\int |f|\\); this convention prevents a hidden \\(2\\pi\\) from entering convolution and operator estimates. Functions are understood modulo equality almost everywhere in \\(L^2\\), and every translation is interpreted periodically.

Let \\(\\mathrm{i}^2=-1\\). The complex exponentials

\\(e_n(x)=e^{\\mathrm{i} n x}\\), \\(n\\in Z\\),

are orthonormal because

\\[\\langle e_n,e_m\\rangle =(1/(2\\pi))\\int e^{\\mathrm{i}(n-m)x}dx\\]

is one when \\(n=m\\) and zero otherwise.

For \\(f\\in L^2\\), define the Fourier coefficient

\\(\\widehat{f}(n)=\\langle f,e_n\\rangle =(1/(2\\pi))\\int _{-\\pi}^\\pi f(x)e^{-\\mathrm{i} n x}dx\\).

The degree-\\(N\\) partial sum is

\\(S_Nf=\\sum_{n=-N}^N \\widehat{f}(n)e_n\\).

For real functions, conjugate symmetry \\(\\widehat{f}(-n)=\\overline{\\widehat{f}(n)}\\) recovers the sine-cosine form.

More explicitly, for a real integrable function,

\\(f(x) ~ a_0/2+\\sum_{n=1}^\\infty[a_n \\cos(nx)+b_n \\sin(nx)]\\),

where

\\(a_n=(1/\\pi)\\int _{-\\pi}^\\pi f(x)\\cos(nx)dx\\),    \\(b_n=(1/\\pi)\\int _{-\\pi}^\\pi f(x)\\sin(nx)dx\\).

The relation with the complex convention is \\(\\widehat{f}(0)=a_0/2\\) and, for \\(n\\ge 1\\), \\(\\widehat{f}(n)=(a_n-\\mathrm{i}b_n)/2\\). These are identities between coefficients; the symbol \\(\\sim\\) deliberately does not assert any mode of convergence.

The normalization matters. With the inner product above, the exponentials have norm one and no extra \\(2\\pi\\) appears in Parseval. Other texts put normalization in the basis or coefficients. None of the mathematics changes, but formulas copied across conventions can be off by a factor of \\(2\\pi\\).

The coefficient is well-defined for every \\(f\\in L^2\\) because the interval has finite measure: Cauchy–Schwarz gives

\\(\\int |f|\\le (2\\pi)^{1/2}(\\int |f|^2)^{1/2}\\).

Thus \\(L^2\\subseteq L^1\\) here. That inclusion can fail on an infinite-measure domain, so this seemingly harmless step is tied to periodic finite-volume analysis.

Changing the chosen representative at either endpoint, or on any null set, does not change a coefficient. In a pointwise convergence theorem, however, the one-sided limiting values are geometric data of the representative on neighboring intervals. The theorem recovers their midpoint, not an arbitrarily assigned isolated value.

## 2. Orthogonal projection gives best approximation

Let \\(V_N=span\\{e_n:|n|\\le N\\}\\). For any trigonometric polynomial \\(p\\in V_N\\), orthogonality gives

\\[f-p=(f-S_Nf)+(S_Nf-p)\\]

with the two terms orthogonal. Therefore

\\(\\lVert f-p\\rVert_2^2=\\lVert f-S_Nf\\rVert_2^2+\\lVert S_Nf-p\\rVert_2^2\\).

Thus \\(S_Nf\\) is the unique best \\(L^2\\) approximation to \\(f\\) from \\(V_N\\).

This conclusion needs no pointwise convergence. Fourier coefficients solve a least-squares problem even when evaluating the infinite series at a point is delicate.

Here is the projection calculation explicitly. For \\(|m|\\le N\\),

\\(\\langle f-S_Nf,e_m\\rangle =\\widehat{f}(m)-\\sum_{|n|\\le N}\\widehat{f}(n)\\langle e_n,e_m\\rangle =0\\).

Linearity gives orthogonality to every \\(p\\in V_N\\). Uniqueness needs no compactness argument: if two elements both minimize the distance, the Pythagorean identity forces their difference to have norm zero. As usual in \\(L^2\\), uniqueness is up to equality almost everywhere.

The residual energies decrease because \\(V_N\\subseteq V_{N+1}\\). Therefore \\(\\lVert f-S_Nf\\rVert_2^2\\) has a limit even before completeness of the trigonometric system is known. Bessel's inequality says that the energy extracted by mutually orthogonal modes cannot exceed the total energy.

The projection is also linear and contractive in \\(L^2\\):

\\(\\lVert S_Nf\\rVert_2^2=\\sum_{|n|\\le N}|\\widehat{f}(n)|^2\\le \\lVert f\\rVert_2^2\\).

This is stability in mean square. It should not be confused with stability in the uniform norm, where the operator norms of \\(S_N\\) grow. A single approximation operator can therefore be perfectly stable in one norm and increasingly unstable in another.

## 10. Riemann–Lebesgue decay

If \\(f\\in L^1[-\\pi,\\pi]\\), then

\\(\\widehat{f}(n)\\to 0\\) as \\(|n|\\to \\infty\\).

For a step function, integrate each interval explicitly; oscillatory terms carry a factor \\(1/n\\). Approximate a general \\(L^1\\) function by step functions and use

\\(|\\widehat{f}(n)-\\widehat{g}(n)|\\le (1/(2\\pi))\\lVert f-g\\rVert_1\\).

The theorem guarantees decay but no universal rate. Smoothness produces faster decay: integration by parts gives a factor \\(1/n\\) for each controlled derivative, subject to periodic boundary matching.

Conversely, rapid coefficient decay implies regularity under summability hypotheses. Spectral decay is therefore a quantitative smoothness diagnostic, not merely a computational observation.

For example, suppose \\(f\\in L^1\\), \\(k\\) is a nonnegative integer, and \\(\\sum_{n\\in Z}(1+|n|)^k|\\widehat{f}(n)|<\\infty\\). Then the Fourier series and its termwise derivatives through order \\(k\\) converge uniformly by the Weierstrass test. Repeated use of the theorem on differentiating a uniformly convergent derivative series produces a \\(C^k\\) function \\(g\\) with those coefficients. The required \\(L^1\\) uniqueness follows because zero coefficients make every Fejér mean of \\(f-g\\) vanish, while the approximate-identity theorem gives convergence of those means to \\(f-g\\) in \\(L^1\\). Hence \\(f=g\\) almost everywhere, so \\(g\\) is a \\(C^k\\) representative of the original \\(L^1\\) class. A bare pointwise decay estimate that is not summable may be insufficient. Forward and reverse regularity principles therefore have related, but not identical, hypotheses.

If a periodic function has \\(r\\) continuous derivatives and the first \\(r-1\\) derivatives match at the endpoints, repeated integration by parts gives

\\(\\widehat{f}(n)=(\\mathrm{i}n)^{-r}\\widehat{f^{(r)}}(n)\\) for \\(n\\ne 0\\).

Riemann–Lebesgue applied to \\(f^{(r)}\\) then gives the sharper statement \\(\\widehat{f}(n)=o(|n|^{-r})\\). Boundary matching is essential: a jump introduced by periodic extension can dominate the decay even when a formula is smooth inside the interval.

Riemann–Lebesgue decay also does not guarantee pointwise reconstruction. It holds for every \\(L^1\\) function, including functions with poorly behaved raw partial sums. Coefficients tending to zero are necessary for ordinary series convergence, not sufficient for it.

## 14. Misconceptions and boundaries

- **Fourier coefficients always reconstruct pointwise.** \\(L^2\\) reconstruction is more general; pointwise convergence needs additional analysis.
- **Orthogonality proves completeness.** An orthonormal set can leave a nontrivial orthogonal complement.
- **Coefficient decay has one universal rate.** Integrability gives decay to zero; smoothness controls speed.
- **Gibbs overshoot contradicts convergence.** Its shrinking support permits \\(L^2\\) and off-jump pointwise convergence.
- **Averaged sums and partial sums are the same method.** Fejér means use a positive kernel and have stronger convergence.
- **Exact sample reconstruction proves exact function reconstruction.** Aliased frequencies agree on the grid.
- **Changing values on a null set changes Fourier coefficients.** Coefficients are integrals and ignore null modifications.


## Exercises

### Exercise 2.1 {#fourier-coefficients-orthogonality-ex-1}

Compute the Fourier coefficients of the constant function three.

<details><summary>Hint 1</summary>
The mean coefficient is its average.
</details>
<details><summary>Hint 2</summary>
Every nonzero integer exponential has zero period integral.
</details>
<details><summary>Solution</summary>
The coefficient at zero is three. For nonzero \\(n\\), the coefficient is three times the normalized integral of \\(e^{-inx}\\), which vanishes by orthogonality. Thus every partial sum is exactly the constant once the zero mode is included. This checks the chosen normalization without assuming any infinite convergence theorem.
</details>

### Exercise 2.2 {#fourier-coefficients-orthogonality-ex-2}

Find the coefficients and squared norm of \\(2\\cos(5x)\\).

<details><summary>Hint 1</summary>
It equals \\(e^{5ix}+e^{-5ix}\\).
</details>
<details><summary>Hint 2</summary>
The two basis vectors are orthogonal and each has norm one.
</details>
<details><summary>Solution</summary>
The coefficients at five and minus five are each one, and every other coefficient is zero. The squared norm is two. For degree below five the best fit is zero with residual energy two; at degree at least five the fit is exact. These statements follow from the finite projection identity.
</details>

### Exercise 2.3 {#fourier-coefficients-orthogonality-ex-3}

Show a real even function has real even Fourier coefficients.

<details><summary>Hint 1</summary>
The sine part of its coefficient integral is odd.
</details>
<details><summary>Hint 2</summary>
Combine that vanishing imaginary part with real-function conjugate symmetry.
</details>
<details><summary>Solution</summary>
The integrand \\(f(x)\\sin(nx)\\) is odd, so its symmetric integral is zero. The coefficient is therefore its real cosine integral. Real-function symmetry gives \\(\\widehat f(-n)=\\overline{\\widehat f(n)}\\), which equals the same real value. Evenness alone for a complex-valued function would not force reality.
</details>

### Exercise 2.4 {#fourier-coefficients-orthogonality-ex-4}

For \\(f=1+\\cos(3x)+2\\sin(2x)\\), find the best degree-one fit and its squared error.

<details><summary>Hint 1</summary>
Only the mean mode lies in that band.
</details>
<details><summary>Hint 2</summary>
Add the two orthogonal omitted energies.
</details>
<details><summary>Solution</summary>
The fit is the constant one. The residual contains the frequency-three cosine of energy one half and the amplitude-two frequency-two sine of energy two. Orthogonality gives total squared error \\(5/2\\). Any other degree-one polynomial adds its squared distance from one to that minimum.
</details>

### Exercise 2.5 {#fourier-coefficients-orthogonality-ex-5}

Why does orthogonality alone not prove Parseval for an infinite family?

<details><summary>Hint 1</summary>
An orthonormal family can omit an entire perpendicular subspace.
</details>
<details><summary>Hint 2</summary>
Use only even coordinate vectors in a square-summable sequence space.
</details>
<details><summary>Solution</summary>
The even coordinate vectors are orthonormal but all coefficients of the first coordinate vector vanish, while its norm is one. Bessel remains valid, but equality fails. An infinite Parseval identity requires dense span or an equivalent completeness theorem. Finite Fourier projection supplies no such density assertion by itself.
</details>

### Exercise 2.6 {#fourier-coefficients-orthogonality-ex-6}

Prove \\(\\|S_Nf-S_Ng\\|_2\\le\\|f-g\\|_2\\).

<details><summary>Hint 1</summary>
Coefficients depend linearly on the input.
</details>
<details><summary>Hint 2</summary>
Apply the finite Bessel identity to the difference.
</details>
<details><summary>Solution</summary>
Linearity gives \\(S_Nf-S_Ng=S_N(f-g)\\). The finite identity bounds the squared norm of that projection by the squared norm of its input. Taking nonnegative square roots proves the claim. The conclusion uses the normalized mean-square norm, not a uniform pointwise error norm.
</details>

### Exercise 2.7 {#fourier-coefficients-orthogonality-ex-7}

Translate \\(f(x)=\\cos x\\) by \\(a\\), and compute the phases of its two nonzero coefficients.

<details><summary>Hint 1</summary>
The original coefficients at one and minus one are one half.
</details>
<details><summary>Hint 2</summary>
Use the factor \\(e^{-ina}\\).
</details>
<details><summary>Solution</summary>
For \\(g(x)=\\cos(x-a)\\), the coefficient at one is \\(e^{-ia}/2\\), and the coefficient at minus one is \\(e^{ia}/2\\). Their moduli remain one half and they are conjugates, consistent with a real function. Reassembling gives the elementary cosine difference formula.
</details>

### Exercise 2.8 {#fourier-coefficients-orthogonality-ex-8}

For the pulse with \\(a=\\pi/2\\), identify which nonzero-index coefficients vanish.

<details><summary>Hint 1</summary>
Use \\(\\sin(n\\pi/2)/(\\pi n)\\).
</details>
<details><summary>Hint 2</summary>
The sine is zero for nonzero even integers.
</details>
<details><summary>Solution</summary>
All nonzero even-index coefficients vanish. At odd positive indices the values alternate \\(1/(\\pi n)\\) and \\(-1/(\\pi n)\\), with matching negative-index values by evenness. The zero coefficient is one half. Vanishing of selected harmonics reflects symmetry and width; it does not imply the function is a finite trigonometric polynomial.
</details>

### Exercise 2.9 {#fourier-coefficients-orthogonality-ex-9}

Why do isolated assignments at a finite set of jump points leave the coefficients unchanged?

<details><summary>Hint 1</summary>
The difference is bounded and supported on finitely many points.
</details>
<details><summary>Hint 2</summary>
Cover those points by intervals of arbitrarily small total length in a Riemann-sum argument.
</details>
<details><summary>Solution</summary>
A bounded function supported on finitely many points has integral zero: choose small intervals around those points with total length below any prescribed tolerance divided by its bound. The upper absolute sum is then arbitrarily small. Multiplication by a unit-modulus exponential preserves that support and bound, so every coefficient difference is zero. Pointwise recovery at a jump therefore cannot detect the isolated assigned value.
</details>

### Exercise 2.10 {#fourier-coefficients-orthogonality-ex-10}

Prove the derivative rule for a continuously differentiable periodic function and state its endpoint hypothesis.

<details><summary>Hint 1</summary>
Integrate the derivative against the negative exponential.
</details>
<details><summary>Hint 2</summary>
The endpoint term vanishes only with matching periodic values.
</details>
<details><summary>Solution</summary>
Integration by parts gives \\(\\int f'e^{-inx}=[fe^{-inx}]_{-\\pi}^{\\pi}+in\\int fe^{-inx}\\). Matching endpoint values and the integer exponential's matching values make the boundary term zero. Division by \\(2\\pi\\) yields \\(\\widehat{f'}(n)=in\\widehat f(n)\\). A jump at the identified endpoint instead contributes a boundary term and cannot be ignored.
</details>

### Exercise 2.11 {#fourier-coefficients-orthogonality-ex-11}

For period \\(P\\), what factor replaces \\(in\\) in the derivative coefficient rule?

<details><summary>Hint 1</summary>
Use the basis \\(e^{2\\pi inx/P}\\).
</details>
<details><summary>Hint 2</summary>
Its spatial derivative contains physical angular frequency.
</details>
<details><summary>Solution</summary>
The factor is \\(2\\pi in/P\\), with the same periodic endpoint cancellation. The coefficient normalization is \\(1/P\\) over a full period. This factor is what enters eigenvalue decay in a periodic heat equation, where a second derivative multiplies by minus the square of the physical angular frequency.
</details>

### Exercise 2.12 {#fourier-coefficients-orthogonality-ex-12}

A signal is approximated by coefficients \\(c_n\\) in the allowed band. Express its excess mean-square error above the optimum.

<details><summary>Hint 1</summary>
Use the projection Pythagorean identity.
</details>
<details><summary>Hint 2</summary>
The polynomial difference has orthogonal coefficient errors.
</details>
<details><summary>Solution</summary>
For \\(p=\\sum_{|n|\\le N}c_ne^{inx}\\), the excess is \\(\\|p-S_Nf\\|_2^2=\\sum_{|n|\\le N}|c_n-\\widehat f(n)|^2\\). Thus each squared coefficient discrepancy adds directly to the best residual. The formula quantifies finite coefficient error without assuming any infinite reconstruction theorem or treating a visual fit as evidence of optimality.
</details>

## Additional worked applications

**Worked Example 21.1 (A finite spectrum and its norm).** Let $f(x)=2+3\\cos x$ with the chapter's normalized periodic measure. Since $\\cos x=(e^{ix}+e^{-ix})/2$, its only nonzero complex coefficients are $\\widehat f(0)=2$ and $\\widehat f(1)=\\widehat f(-1)=3/2$. Their squared magnitudes sum to $4+9/4+9/4=17/2$. Direct integration gives the same norm: the cross term has zero mean and $\\cos^2x$ has mean one half, so $\\|f\\|_2^2=4+9/2=17/2$. A finite calculation therefore checks the normalization as well as orthogonality.

**Worked Example 21.2 (Averaging changes a single mode).** For $f(x)=e^{2ix}$, the raw sum $S_kf$ is zero for $k<2$ and equals $f$ for $k\\ge2$. Under $\\sigma_Nf=(N+1)^{-1}\\sum_{k=0}^{N}S_kf$, for $N\\ge2$ there are $N-1$ nonzero summands, so
$$\\sigma_Nf=\\frac{N-1}{N+1}f,\\qquad \\|\\sigma_Nf-f\\|_\\infty=\\frac2{N+1}.$$
The averaged approximation converges uniformly but is not identical to the mode at finite degree. Smoothing by averaging changes coefficients deliberately; it is not the same operation as simply increasing the raw cutoff.

**Worked Example 21.3 (A grid can miss the whole discrepancy).** On the eight equally spaced points $x_j=2\\pi j/8$, the modes $e^{3ix}$ and $e^{11ix}$ agree because their quotient is $e^{8ix_j}=1$. But at $x=\\pi/8$, that quotient is minus one, so the two complex values are separated by magnitude two. Their sampled difference is zero while their uniform difference on the circle is two. A discrete comparison needs a sampling theorem or another analytical estimate before it can certify a continuum error.


## Exercises with complete solutions

### ANA-CH21-E001 — Exercise 1: Exponential orthogonality

Compute \\(\\langle e_n,e_m\\rangle \\).


<details>
<summary>Hint 1</summary>

Insert the exponential modes into the normalized inner product.

</details>
<details>
<summary>Hint 2</summary>

Separate zero frequency difference from nonzero integer frequency difference.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH21-E001 — Solution

It equals \\((1/(2\\pi))\\int _{-\\pi}^\\pi e^{\\mathrm{i}(n-m)x}dx\\). If \\(n=m\\), the integrand is one and the value is one. Otherwise the antiderivative has equal endpoint values because \\(n-m\\) is a nonzero integer, so the integral is zero.


</details>

### ANA-CH21-E002 — Exercise 2: Constant coefficient

What is \\(\\widehat{f}(0)\\)?


<details>
<summary>Hint 1</summary>

Use the coefficient definition at index zero.

</details>
<details>
<summary>Hint 2</summary>

The exponential factor then becomes one.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH21-E002 — Solution

It is \\((1/(2\\pi))\\int f\\), the mean value of \\(f\\) over one period.


</details>

### ANA-CH21-E003 — Exercise 3: One mode

Find the complex Fourier coefficients of \\(f(x)=e^{\\mathrm{i}3x}\\).


<details>
<summary>Hint 1</summary>

Apply orthogonality to the chosen single frequency.

</details>
<details>
<summary>Hint 2</summary>

Only the matching index can have a nonzero coefficient.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH21-E003 — Solution

Orthonormality gives \\(\\widehat{f}(3)=1\\) and every other coefficient zero.


</details>

### ANA-CH21-E004 — Exercise 4: Cosine coefficients

Write \\(\\cos(2x)\\) in complex exponential form.


<details>
<summary>Hint 1</summary>

Express cosine through the two opposite complex modes.

</details>
<details>
<summary>Hint 2</summary>

Read off the coefficient multiplying each exponential.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH21-E004 — Solution

Euler's identity gives \\(\\cos(2x)=[e^{\\mathrm{i}2x}+e^{-\\mathrm{i}2x}]/2\\), so the coefficients at \\(n=\\pm 2\\) are \\(1/2\\) and all others are zero.


</details>

### ANA-CH21-E005 — Exercise 5: Best approximation

Why is \\(S_Nf\\) the unique closest element of \\(V_N\\) to \\(f\\)?


<details>
<summary>Hint 1</summary>

Subtract an arbitrary candidate polynomial through the orthogonal projection.

</details>
<details>
<summary>Hint 2</summary>

Pythagoras separates the unavoidable error from a nonnegative extra squared distance.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH21-E005 — Solution

For \\(p\\in V_N\\), Pythagoras gives \\(\\lVert f-p\\rVert^2=\\lVert f-S_Nf\\rVert^2+\\lVert S_Nf-p\\rVert^2\\). The second term is nonnegative and vanishes only when \\(p=S_Nf\\) almost everywhere.


</details>

### ANA-CH21-E006 — Exercise 6: Bessel consequence

If \\(\\lVert f\\rVert_2=4\\), bound \\(\\sum|\\widehat{f}(n)|^2\\).


<details>
<summary>Hint 1</summary>

Apply Bessel’s inequality.

</details>
<details>
<summary>Hint 2</summary>

Its upper bound is the square of the supplied norm.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH21-E006 — Solution

Bessel gives \\(\\sum|\\widehat{f}(n)|^2\\le \\lVert f\\rVert_2^2=16\\).


</details>

### ANA-CH21-E007 — Exercise 7: Coefficients vanish

Why does Bessel imply \\(\\widehat{f}(n)\\to 0\\)?


<details>
<summary>Hint 1</summary>

The coefficient squares form a summable nonnegative family.

</details>
<details>
<summary>Hint 2</summary>

Terms of a convergent nonnegative series must tend to zero.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH21-E007 — Solution

A summable family of nonnegative numbers \\(|\\widehat{f}(n)|^2\\) must have terms tending to zero. Taking square roots yields coefficient decay.


</details>

### ANA-CH21-E008 — Exercise 8: Dirichlet kernel at zero

Find \\(D_N(0)\\).


<details>
<summary>Hint 1</summary>

Use the finite exponential-sum definition rather than the ratio formula.

</details>
<details>
<summary>Hint 2</summary>

Every summand equals one at zero.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH21-E008 — Solution

From the finite sum, every exponential equals one at zero, and there are \\(2N+1\\) terms. Thus \\(D_N(0)=2N+1\\).


</details>

### ANA-CH21-E009 — Exercise 9: Jump value

A piecewise \\(C^1\\) periodic function has one-sided limits 2 and 6 at \\(x_0\\). What is the Fourier-series pointwise limit there?


<details>
<summary>Hint 1</summary>

Use the convergence theorem for a piecewise smooth jump.

</details>
<details>
<summary>Hint 2</summary>

The limiting value is determined by both one-sided limits, not the assigned point value.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH21-E009 — Solution

The Dirichlet convergence theorem gives their midpoint \\((2+6)/2=4\\), independent of the assigned value at the jump.


</details>

### ANA-CH21-E010 — Exercise 10: Fejér positivity

Why is the Fejér kernel nonnegative?


<details>
<summary>Hint 1</summary>

Inspect the squared-ratio formula and its nonnegative prefactor.

</details>
<details>
<summary>Hint 2</summary>

At apparent denominator zeros, use its continuous limiting value.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH21-E010 — Solution

Its formula is a positive scalar times a square of a real ratio, with the limiting value at multiples of \\(2\\pi\\) also nonnegative.


</details>

### ANA-CH21-E011 — Exercise 11: Approximate-identity split

In the proof of Fejér's theorem, why split the integral at a small \\(\\delta\\)?


<details>
<summary>Hint 1</summary>

Different estimates control nearby and distant kernel arguments.

</details>
<details>
<summary>Hint 2</summary>

Uniform continuity handles the near part; small kernel mass handles the far part.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH21-E011 — Solution

Uniform continuity makes \\(f(x-t)-f(x)\\) small on the near region, while concentration makes the kernel mass small on the far region. Neither estimate alone controls the entire integral.


</details>

### ANA-CH21-E012 — Exercise 12: Density

Explain why Fejér's theorem proves trigonometric polynomials are dense in continuous periodic functions.


<details>
<summary>Hint 1</summary>

Identify the algebraic type of each averaged finite sum.

</details>
<details>
<summary>Hint 2</summary>

Uniform convergence of those trigonometric polynomials gives exactly the density statement.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH21-E012 — Solution

Each \\(\\sigma_Nf\\) is a finite average of finite Fourier sums, hence a trigonometric polynomial. Fejér says these polynomials converge uniformly to every continuous periodic \\(f\\).


</details>

### ANA-CH21-E013 — Exercise 13: Uniform to \\(L^2\\)

Under the normalized measure, show \\(\\lVert h\\rVert_2\\le \\lVert h\\rVert_\\infty\\).


<details>
<summary>Hint 1</summary>

Bound the squared magnitude by its supremum square before integrating.

</details>
<details>
<summary>Hint 2</summary>

The chosen normalized measure has total mass one.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH21-E013 — Solution

Since \\(|h|^2\\le \\lVert h\\rVert_\\infty^2\\), normalized integration gives \\(\\lVert h\\rVert_2^2\\le \\lVert h\\rVert_\\infty^2\\); take square roots.


</details>

### ANA-CH21-E014 — Exercise 14: Integration-by-parts decay

If \\(f\\) is periodic \\(C^1\\), show \\(|\\widehat{f}(n)|\\le \\lVert f'\\rVert_1/(2\\pi|n|)\\) for \\(n\\ne 0\\).


<details>
<summary>Hint 1</summary>

Integrate the coefficient formula by parts.

</details>
<details>
<summary>Hint 2</summary>

Periodicity cancels the boundary contribution and the remaining exponential has modulus one.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH21-E014 — Solution

Integrate by parts. The periodic endpoint term vanishes, and
\\(\\widehat{f}(n)=(1/(2\\pi\\mathrm{i}n))\\int f'(x)e^{-\\mathrm{i} n x}\\,dx\\).
Take absolute values.


</details>

### ANA-CH21-E015 — Exercise 15: Parseval for one mode

Verify Parseval for \\(f(x)=3e^{\\mathrm{i}2x}\\).


<details>
<summary>Hint 1</summary>

Only one Fourier coefficient is present.

</details>
<details>
<summary>Hint 2</summary>

Compare its squared magnitude with the normalized integral of the constant output magnitude square.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH21-E015 — Solution

The only coefficient is \\(\\widehat{f}(2)=3\\), so the coefficient-square sum is 9. Also the normalized integral of \\(|f|^2=9\\) is 9.


</details>

### ANA-CH21-E016 — Exercise 16: Mean-square versus pointwise

Give a reason \\(L^2\\) error can vanish while a bounded overshoot remains.


<details>
<summary>Hint 1</summary>

A fixed error height can occupy a shrinking region.

</details>
<details>
<summary>Hint 2</summary>

Its squared integral is bounded by height squared times the region’s measure.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH21-E016 — Solution

If the overshoot is bounded by \\(M\\) and confined to a set of measure \\(\\delta_N\\to 0\\), its squared contribution is at most \\(M^2\\delta_N\\to 0\\). The supremum error can remain bounded away from zero.


</details>

### ANA-CH21-E017 — Exercise 17: Aliasing identity

Prove frequencies \\(n\\) and \\(n+M\\) agree at the \\(M\\) equally spaced grid points.


<details>
<summary>Hint 1</summary>

Evaluate the extra frequency factor at a grid point.

</details>
<details>
<summary>Hint 2</summary>

It becomes an integer multiple of a full complex-exponential turn.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH21-E017 — Solution

At \\(x_j=2\\pi j/M\\),
\\(e^{\\mathrm{i}(n+M)x_j}=e^{\\mathrm{i} n x_j}e^{\\mathrm{i}2\\pi j}=e^{\\mathrm{i} n x_j}\\).


</details>

### ANA-CH21-E018 — Exercise 18: Null modification

If \\(f=g\\) almost everywhere, compare their Fourier coefficients.


<details>
<summary>Hint 1</summary>

Subtract the two coefficient integrands.

</details>
<details>
<summary>Hint 2</summary>

The difference vanishes almost everywhere and the bounded exponential factor preserves that property.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH21-E018 — Solution

Their difference is zero almost everywhere, so the integral of \\((f-g)e^{-\\mathrm{i} n x}\\) is zero for every \\(n\\). Thus all coefficients agree.


</details>

### ANA-CH21-E019 — Exercise 19: Convolution coefficient

Under compatible integrability assumptions, show \\(\\widehat{f*g}(n)=\\widehat{f}(n)\\widehat{g}(n)\\).


<details>
<summary>Hint 1</summary>

Insert the normalized periodic convolution definition and justify the order exchange.

</details>
<details>
<summary>Hint 2</summary>

A shift of variables splits the exponential factor into one factor for each coefficient.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH21-E019 — Solution

Insert the convolution definition, use Fubini to swap integrals, and substitute \\(u=x-t\\). The exponential splits as \\(e^{-\\mathrm{i}n(u+t)}\\); the normalized integrals factor into the two Fourier coefficients.


</details>

### ANA-CH21-E020 — Exercise 20: Choose the reliable method

For a continuous periodic function with no additional smoothness, which has a guaranteed uniform convergence theorem: \\(S_Nf\\) or \\(\\sigma_Nf\\)?


<details>
<summary>Hint 1</summary>

Distinguish raw truncation from positive-kernel averaging.

</details>
<details>
<summary>Hint 2</summary>

Fejer’s theorem supplies the uniform guarantee for the averaged sums under continuity alone.

</details>

<details>
<summary>Solution</summary>

#### ANA-CH21-E020 — Solution

Fejér means \\(\\sigma_Nf\\) converge uniformly. Raw partial sums do not have such a guarantee for every continuous function.


</details>

## ANA-CH21-P001 — Project: build a convergence-mode laboratory

Choose one smooth periodic function and one piecewise smooth function with a jump. Compute coefficients analytically or reproducibly, then compare raw partial sums and Fejér means at increasing degrees. Report uniform error away from jumps, grid-based \\(L^2\\) error with a quadrature audit, overshoot height and width, and coefficient decay. Add a deliberately undersampled reconstruction to demonstrate aliasing. Every plot must name the summation method, sampling grid, and error mode.

## Chapter synthesis

Fourier coefficients are Hilbert-space coordinates. Orthogonality makes partial sums best mean-square approximations; density makes the coordinates complete. Convolution kernels then explain pointwise behavior: the sign-changing Dirichlet kernel is delicate, while the positive concentrating Fejér kernel gives uniform convergence for continuous functions.

No single word “converges” is adequate. State whether the claim is uniform, pointwise, almost everywhere, in measure, or in \\(L^2\\), and match the theorem to that claim before interpreting a reconstruction.

## Transferred continuation summary

Fourier coefficients depend on a fixed normalization and represent functions through orthogonal modes. Partial sums are best finite L2 approximations; positive Fejer averaging gives a stronger uniform guarantee for continuous periodic functions. Pointwise jump values, norm convergence and worst-case errors are different conclusions. Null modifications preserve coefficient integrals, while aliasing can make different modes indistinguishable on a finite grid. This retained continuation remains available for readers proceeding to the Fourier Analysis primary.

## Sources and scope

This is original exposition and supported exercise development. Local source lineage is the retained Real Analysis Fourier chapter and the Quarto Fourier introduction; the syllabus benchmarks are Stein–Shakarchi, *Fourier Analysis*, and Folland. The original mathematical sections have been transferred across this family, and all twenty ANA-CH21 exercises plus the project remain in this first part with their stable IDs. Finite projection and coefficient rules are fully proved; general L2 completeness, pointwise Dirichlet convergence and jump overshoot have their own chapters.

## Summary

Normalized exponentials are orthonormal, so Fourier coefficients solve an exact finite least-squares problem. Pythagoras proves uniqueness, coefficient energy bounds and mean-square stability before any infinite convergence claim. Phase rules record translations, and integration by parts links regularity and jumps to coefficient decay. The next chapter uses the Dirichlet kernel to determine which point values the raw partial sums actually approach.
`;export{e as default};