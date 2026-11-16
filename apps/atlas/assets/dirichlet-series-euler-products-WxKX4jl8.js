var e=`---
parent_id: book-algebraic-analytic-number-theory
chapter_id: dirichlet-series-euler-products
title: "Dirichlet Series, Euler Products, and Convergence Contracts"
level: graduate
estimated_minutes: 245
license: CC BY-SA 4.0
---

# Dirichlet Series, Euler Products, and Convergence Contracts {#section-1-dirichlet-series-euler-products-and-convergence-contrac}

Dirichlet series turn multiplicative coefficients into analytic functions. Euler products expose primes, but only inside a region where rearrangement is justified. Analytic continuation may extend the resulting function; it does not make the original series converge at new points.

This chapter assumes arithmetic convolution, complex absolute convergence, and elementary calculus. Afterward you should be able to derive Euler products, multiply Dirichlet series safely, distinguish convergence from continuation, and state the zeta-function zero questions without converting conjectures into facts.

This supported primary adaptation preserves the earlier Euler mathematical text,
including its explicit theorem-import boundaries. The [exact retained seed](retained-seeds/dirichlet-series-euler-products.md)
keeps the original parent metadata and exercise wording. Current primary exercises
add specific staged hints and solution reveals; the old book and its learner
identities remain separate and addressable.

Numbered chapter references inside preserved passages use the original book’s
numbering. Current semantic links identify the preparation and continuation.
The current proved continuations are [Zeta and Theta](zeta-continuation-functional-equation.md) and [Newman’s PNT](prime-number-theorem-newman.md).

<a id="section-15-1-dirichlet-series"></a>
## 1. Dirichlet series {#section-17-1-dirichlet-series}

Given arithmetic $a(n)$, its Dirichlet series is

$D_{a}(s)=\\sum_{n\\ge 1}a(n)n^{-s}$, $s=\\sigma+it$.

Absolute convergence at $s$ means $\\sum \\lvert a(n)\\rvert n^{-\\sigma}$ converges. If it converges absolutely at $\\sigma_{0}$, it does so for every $\\sigma>\\sigma_{0}$, defining a right half-plane. The infimum boundary is the abscissa of absolute convergence.

For $a(n)=1$, the series is the Riemann zeta function

$\\zeta(s)=\\sum n^{-s}$, initially for $\\sigma>1$.

Integral comparison proves convergence there and divergence at real $s=1$.

<a id="section-29-2-products-encode-convolution"></a>
## 2. Products encode convolution {#section-31-2-products-encode-convolution}

If $D_{a},D_{b}$ converge absolutely, their product can be rearranged:

$D_{a}(s)D_{b}(s)=\\sum_{m,n}a(m)b(n)(mn)^{-s}=\\sum_{k} (a*b)(k)k^{-s}$.

Thus Dirichlet convolution becomes ordinary multiplication of series. For example,

\\[\\zeta(s)^{2}=\\sum \\tau(n)n^{-s}\\]

for $\\sigma>1$, and

$\\zeta(s)\\sum \\mu(n)n^{-s}=1$.

Therefore $\\sum \\mu(n)n^{-s}=1/\\zeta(s)$ in the absolute-convergence region.

<a id="section-45-3-euler-products"></a>
## 3. Euler products {#section-47-3-euler-products}

If $a$ is multiplicative and its series converges absolutely, unique factorization gives

$D_{a}(s)=\\prod_{p} (1+a(p)p^{-s}+a(p^{2})p^{-2s}+\\ldots)$.

For $a=1$, each local series is geometric:

$\\zeta(s)=\\prod_{p}(1-p^{-s})^{-1}$, $\\sigma>1$.

A rigorous proof first takes a finite prime product, whose expansion sums integers supported on those primes, then lets the prime bound grow and uses absolute convergence. Writing the infinite product before this limit hides the central justification.

<a id="section-57-4-logarithms-and-prime-powers"></a>
## 4. Logarithms and prime powers {#section-59-4-logarithms-and-prime-powers}

For real $s>1$,

$\\log \\zeta(s)=\\sum_{p} \\sum_{k\\ge 1} 1/(k p^{ks})$.

The $k\\ge 2$ part stays bounded as $s\\to 1+$, because it is dominated by $\\sum_{p} \\sum_{k\\ge 2}p^{-k}$. Hence divergence of $\\zeta(s)$ near one forces divergence of $\\sum_{p} p^{-s}$ and ultimately proves infinitely many primes.

Termwise logarithms require choosing a region with nonzero factors and absolute convergence. For complex $s$, branch choices need additional care; real $s>1$ avoids it.

<a id="section-67-5-standard-coefficient-series"></a>
## 5. Standard coefficient series {#section-69-5-standard-coefficient-series}

For $\\sigma$ large enough:

- $\\sum \\sigma_{k}(n)n^{-s}=\\zeta(s)\\zeta(s-k)$;
- $\\sum \\varphi(n)n^{-s}=\\zeta(s-1)/\\zeta(s)$;
- $\\sum \\mu(n)n^{-s}=1/\\zeta(s)$;
- $\\sum \\Lambda(n)n^{-s}=-\\zeta'(s)/\\zeta(s)$.

The first three follow from convolution identities. The last follows by logarithmically differentiating the Euler product; $\\Lambda(p^k)=\\log p$ and is zero otherwise.

Every formula carries an initial half-plane. For example, the totient series is absolutely convergent for $\\sigma>2$, even though the quotient may later extend farther.

<a id="section-80-6-analytic-continuation"></a>
## 6. Analytic continuation {#section-82-6-analytic-continuation}

The zeta function has a unique meromorphic continuation to the complex plane, with a simple pole at $s=1$; it is analytic elsewhere. Its functional equation relates $s$ and $1-s$. These are theorems constructing an extended function agreeing with the series on $\\sigma>1$.

At $s=-1$, the original series $1+2+3+\\ldots$ diverges. The continued value $\\zeta(-1)=-1/12$ is not its ordinary sum. Any use of regularization must name the method.

<a id="section-86-7-zeros-and-status"></a>
## 7. Zeros and status {#section-88-7-zeros-and-status}

The functional equation produces trivial zeros at negative even integers. Nontrivial zeros lie in $0<\\sigma<1$; symmetry reflects them across the real axis and the line $\\sigma=1/2$.

The prime number theorem is equivalent to nonvanishing on the line $\\sigma=1$. The Riemann hypothesis asserts every nontrivial zero has real part $1/2$; it remains open. Computation verifying many zeros does not prove the universal claim.

<a id="section-92-8-tauberian-boundary"></a>
## 8. Tauberian boundary {#section-94-8-tauberian-boundary}

Singular behavior of a Dirichlet series suggests coefficient asymptotics, but reversing this transform is not automatic. Tauberian theorems add positivity or boundary hypotheses. A pole alone, without the theorem's conditions, is not permission to read off a summatory main term.

<a id="section-96-9-summation-by-parts-and-conditional-convergence"></a>
## 9. Summation by parts and conditional convergence {#section-98-9-summation-by-parts-and-conditional-convergence}

Let $A(x)=\\sum_{n\\le x}a(n)$. For integers $M<N$, discrete partial summation gives

$\\sum_{M<n\\le N}a(n)n^{-s}=A(N)N^{-s}-A(M)M^{-s}+s\\int_{M}^{N}A(t)t^{-s-1}\\,dt$,

with the usual step-function interpretation. If $A(t)=\\mathcal{O}(t^\\theta)$, then the integral and boundary term converge as $N\\to \\infty$ whenever $\\operatorname{Re}(s)>\\theta$.

This result can extend ordinary convergence left of absolute convergence because cancellation makes $A(t)$ smaller than the sum of absolute coefficients. For a nonprincipal Dirichlet character, periodicity and zero sum over a period give $A(t)=\\mathcal{O}(1)$, so its $L$-series converges for real $s>0$, although absolute convergence still begins at $s>1$.

<a id="section-106-worked-example-an-alternating-dirichlet-series"></a>
### Worked example: an alternating Dirichlet series {#section-108-worked-example-an-alternating-dirichlet-series}

Take $a(n)=(-1)^{n-1}$. Its partial sums are zero or one, hence bounded. The Dirichlet series converges for real $s>0$. For $s>1$, separate odd and even terms absolutely:

$\\sum (-1)^{n-1}n^{-s}=(1-2^{1-s})\\zeta(s)$.

The left side remains finite as $s\\to 1+$; the zero of $1-2^{1-s}$ cancels the zeta pole, giving the familiar limit $\\log 2$. This is a cancellation statement, not absolute convergence of the harmonic series.

<a id="section-114-10-uniqueness-of-dirichlet-coefficients"></a>
## 10. Uniqueness of Dirichlet coefficients {#section-116-10-uniqueness-of-dirichlet-coefficients}

Suppose two absolutely convergent Dirichlet series agree on a real half-line. Subtract them and let $m$ be the least index with nonzero coefficient $c(m)$. Multiply by $m^s$:

$0=c(m)+\\sum_{n>m}c(n)(m/n)^s$.

As real $s\\to \\infty$, the tail tends to zero by dominated convergence inside a stricter half-plane, forcing $c(m)=0$, contradiction. Therefore the coefficients are unique.

This theorem explains why identities between Dirichlet series can yield arithmetic-function identities after convergence has been established. Without a common convergence region, equality of continued functions alone needs additional justification before coefficients are compared.

<a id="section-124-11-more-euler-products-from-local-restrictions"></a>
## 11. More Euler products from local restrictions {#section-126-11-more-euler-products-from-local-restrictions}

The squarefree indicator is $\\mu(n)^{2}$. At each prime, allowed exponents are zero and one, so

$\\sum \\mu(n)^{2} n^{-s}=\\prod_{p}(1+p^{-s})$.

Since $1+x=(1-x^{2})/(1-x)$,

\\[\\prod_{p}(1+p^{-s})=\\zeta(s)/\\zeta(2s)\\]

for $\\operatorname{Re}(s)>1$.

Similarly, the indicator of perfect squares has series $\\zeta(2s)$, because squares have even prime exponents. Their convolution has series $\\zeta(s)$: every positive integer decomposes uniquely as a square times a squarefree integer. This analytic identity is exactly the squarefree-kernel decomposition from valuations.

<a id="section-138-worked-example-a-density-calculation"></a>
### Worked example: a density calculation {#section-140-worked-example-a-density-calculation}

The quotient $\\zeta(s)/\\zeta(2s)$ has a simple pole at one with residue $1/\\zeta(2)=6/\\pi^{2}$. A suitable Tauberian argument—or the elementary Möbius calculation in the summation chapter—then gives squarefree density $6/\\pi^{2}$. The pole suggests the constant; the coefficient theorem supplies the proof.

<a id="section-142-12-perron-and-mellin-bridges"></a>
## 12. Perron and Mellin bridges {#section-144-12-perron-and-mellin-bridges}

Formally, the discontinuous cutoff $1_{n\\le x}$ can be represented by a vertical complex integral of $(x/n)^s/s$. This leads to Perron's formula, expressing a summatory function in terms of its Dirichlet series. Shifting the integration line encounters poles whose residues create main terms; zeros and remaining integrals govern errors.

A rigorous use must specify truncation height, whether $x$ is an integer, coefficient growth, the starting absolute-convergence line, bounds on horizontal segments, and singularities crossed. The slogan “move the contour and collect residues” is proof architecture, not a complete estimate.

An elementary analogue is Mellin summation: integrals of $A(x)x^{-s-1}$ encode a Dirichlet series through partial summation. Transform and coefficient sides are linked, but moving in either direction requires convergence or a Tauberian hypothesis.

<a id="section-150-13-local-factor-diagnostics"></a>
## 13. Local-factor diagnostics {#section-152-13-local-factor-diagnostics}

Before trusting an Euler product, test three layers.

1. **Coefficient layer:** expand one prime factor and identify allowed exponents.
2. **Multiplicativity layer:** verify coefficients multiply across coprime prime powers.
3. **Analysis layer:** name the region where the infinite expansion is absolutely convergent.

For instance, writing $\\prod_{p}(1+p^{-s})$ and calling it the series of primes is a coefficient error: the expansion selects arbitrary finite sets of distinct primes, hence squarefree integers. Calling the same product valid at $s=1$ without a limiting theorem is an analysis error. These two mistakes have different repairs.

<a id="section-160-14-differentiation-and-logarithmic-derivatives"></a>
## 14. Differentiation and logarithmic derivatives {#section-162-14-differentiation-and-logarithmic-derivatives}

On every closed half-plane strictly to the right of the abscissa of absolute convergence, a Dirichlet series may be differentiated term by term:

$D_{a}'(s)=-\\sum_{n\\ge 1}a(n)(\\log n)n^{-s}$.

The extra logarithm is controlled because $\\log n=\\mathcal{O}(n^\\varepsilon)$ for every positive $\\varepsilon$; compact subsets remain to the right of the convergence boundary after choosing a small margin.

If $D_{a}$ has an Euler product and no zeros in the region, its logarithmic derivative separates prime powers. For zeta,

\\[-\\zeta'(s)/\\zeta(s)=\\sum_{p} \\sum_{k\\ge 1}(\\log p)p^{-ks}\\]

$=\\sum_{n\\ge 1}\\Lambda(n)n^{-s}$.

The coefficient is $\\log p$ at every positive power of $p$, not $k\\log p$. Applying $-d/ds$ to $-\\log(1-p^{-s})$ produces $(\\log p)p^{-s}/(1-p^{-s})$, whose geometric expansion repeats the same $\\log p$.

<a id="section-176-worked-example-a-coefficient-audit"></a>
### Worked example: a coefficient audit {#section-178-worked-example-a-coefficient-audit}

At $n=8=2^{3}$, the coefficient is $\\Lambda(8)=\\log 2$. At $n=12$, which is not a prime power, it is zero. This sparse weighting is why $\\psi(x)$ packages primes and prime powers naturally.

Logarithmic differentiation is invalid across a zero and requires a branch-compatible logarithm. In prime-number-theorem arguments, proving a zero-free boundary is therefore structural, not a technical afterthought.

<a id="section-182-15-liouville-s-arithmetic-function-and-parity-of-factor"></a>
## 15. Liouville's arithmetic function and parity of factors {#section-184-15-liouville-s-arithmetic-function-and-parity-of-factor}

To avoid confusion with Carmichael's exponent, write $\\lambda_{L}(n)=(-1)^\\Omega(n)$, where $\\Omega$ counts prime factors with multiplicity. This function is completely multiplicative. At one prime its local series is

$1-p^{-s}+p^{-2s}-p^{-3s}+\\ldots=(1+p^{-s})^{-1}$.

Therefore, for $\\operatorname{Re}(s)>1$,

\\[\\sum_{n\\ge 1}\\lambda_{L}(n)n^{-s}=\\prod_{p}(1+p^{-s})^{-1}.\\]

$=\\zeta(2s)/\\zeta(s)$.

The last equality uses $1+x=(1-x^{2})/(1-x)$. It is the reciprocal of the squarefree Euler product from Section 11 in the appropriate local sense.

<a id="section-196-worked-example-a-coefficient-audit"></a>
### Worked example: a coefficient audit {#section-198-worked-example-a-coefficient-audit}

At $12=2^{2}*3$, $\\Omega(12)=3$, so $\\lambda_{L}(12)=-1$. Expanding the quotient's local factors chooses exponent two at $2$ with sign positive and exponent one at $3$ with sign negative, producing the same coefficient.

The signs encode parity of the total number of prime factors. Broad sieve methods have difficulty detecting this parity sharply—the analytic identity does not make the coefficient summatory function easy to control. A compact Euler product can expose structure while leaving cancellation estimates deep.

<a id="section-202-16-abscissae-and-coefficient-growth"></a>
## 16. Abscissae and coefficient growth {#section-204-16-abscissae-and-coefficient-growth}

Three convergence boundaries can differ: ordinary convergence, uniform convergence on right half-planes, and absolute convergence. For a general Dirichlet series, conditional cancellation may move ordinary convergence left, but only by a bounded-width phenomenon under standard coefficient growth.

An elementary sufficient condition comes from coefficients. If $a(n)=\\mathcal{O}(n^\\theta)$, then

\\[\\sum \\lvert a(n)\\rvert n^{-\\sigma}\\]

is dominated by a p-series for $\\sigma>\\theta+1$. This bound is safe, rarely sharp. If instead the partial sums satisfy $A(x)=\\mathcal{O}(x^\\beta)$, partial summation gives ordinary convergence for $\\sigma>\\beta$.

<a id="section-212-worked-comparison"></a>
### Worked comparison {#section-214-worked-comparison}

For $a(n)=\\mu(n)$, the pointwise bound gives absolute convergence only for $\\sigma>1$. A hypothetical strong cancellation estimate for $M(x)=\\sum_{n\\le x}\\mu(n)$ would push ordinary convergence of $1/\\zeta(s)$ left. In fact, statements about how far it can be pushed are tied to zero-free regions of zeta; coefficient cancellation and analytic zeros encode the same difficulty from different sides.

For $a(n)=\\tau(n)$, the elementary bound $\\tau(n)=\\mathcal{O}(n^\\varepsilon)$ for every fixed $\\varepsilon>0$ yields absolute convergence for $\\sigma>1+\\varepsilon$; the exact identity $\\zeta(s)^{2}$ shows the true absolute boundary is $\\sigma>1$.

<a id="section-218-17-finite-truncations-and-certified-tails"></a>
## 17. Finite truncations and certified tails {#section-220-17-finite-truncations-and-certified-tails}

A numerical Dirichlet-series value needs a tail bound. If $\\lvert a(n)\\rvert\\le C n^\\theta$ and $\\sigma>\\theta+1$, then

\\[\\left\\lvert\\sum_{n>N}a(n)n^{-s}\\right\\rvert\\le C\\sum_{n>N}n^{\\theta-\\sigma}.\\]

\\[\\le C N^{\\theta+1-\\sigma}/(\\sigma-\\theta-1)\\]

by integral comparison. The certificate records $C,\\theta,\\sigma,N$; printed digits without it are only floating output.

Near a convergence boundary, this bound deteriorates and cancellation-aware methods may be necessary. Analytic continuation can evaluate the function elsewhere, but a truncation of the original series still requires convergence in its own right.

<a id="section-230-exercises-with-complete-solutions"></a>
## 18. A convergence margin pays for uniformity and derivatives {#section-543-18-a-convergence-margin-pays-for-uniformity-and-derivat}

Write $n^{-s}=\\exp(-s\\log n)$, using the ordinary real logarithm of the positive integer n. Each term is an entire function of s; the question is whether its infinite sum preserves analyticity. Pointwise convergence alone does not justify exchanging a limit with a derivative.

Suppose $\\sum |a(n)|n^{-\\sigma_0}<\\infty$. For every $\\operatorname{Re}s\\ge\\sigma_0$, the nth term has modulus at most $|a(n)|n^{-\\sigma_0}$. The tail of this numerical majorant is independent of the imaginary part. The Weierstrass test therefore gives uniform convergence on that closed half-plane. In particular every compact subset strictly inside the half-plane of absolute convergence has such a majorant.

For an integer derivative order $j\\ge0$ and a margin $\\delta>0$, the function $y^j e^{-\\delta y}$ is bounded for $y\\ge0$. Substituting $y=\\log n$ shows $(\\log n)^j n^{-\\delta}\\le C_{j,\\delta}$. Consequently
\\[
|a(n)|(\\log n)^j n^{-\\sigma_0-\\delta}
\\le C_{j,\\delta}|a(n)|n^{-\\sigma_0}.
\\]
All derivative series converge uniformly with this extra margin. The complex-analysis theorem that a locally uniform limit of holomorphic functions is holomorphic, together with termwise differentiation on compact subsets, now gives
\\[
D_a^{(j)}(s)=\\sum_{n\\ge1}a(n)(-\\log n)^j n^{-s}.
\\]
That theorem is the explicit analytic input; the displayed majorant verifies its convergence hypotheses.

A closed half-plane in this argument must lie to the right of an actual absolute-convergence point. Taking the boundary infimum and pretending the numerical majorant converges there would be an extra claim. For zeta, every half-plane $\\sigma\\ge1+\\delta$ works, while the real point one still has the divergent harmonic series.

Coefficient growth gives a convenient sufficient domain. If $|a(n)|\\le Cn^\\theta$, comparison with $\\sum n^{-(\\sigma-\\theta)}$ gives absolute convergence for $\\sigma>\\theta+1$. This estimate uses no cancellation and need not locate the exact boundary.

For example the square indicator has coefficients zero or one, so this test safely gives $\\sigma>1$. Directly, however, its series is $\\sum_{m\\ge1}m^{-2s}$, absolutely convergent exactly for $\\sigma>1/2$. At the real endpoint one half it becomes the harmonic series in m. The sparse support, which a pointwise bound discarded, halves the true threshold.

For a certified truncation with the growth bound, set $\\eta=\\sigma-\\theta-1>0$. The absolute tail after N is at most $CN^{-\\eta}/\\eta$. To make it at most $\\varepsilon$, a sufficient choice is $N\\ge(C/(\\eta\\varepsilon))^{1/\\eta}$. When $\\eta$ is small this can be enormous. A convergence theorem and an efficient evaluation method are different deliverables.

<a id="section-566-19-cancellation-gives-a-different-kind-of-uniform-contr"></a>
## 19. Cancellation gives a different kind of uniform control {#section-568-19-cancellation-gives-a-different-kind-of-uniform-contr}

Let $A(t)=\\sum_{n\\le t}a(n)$ and suppose $|A(t)|\\le Ct^\\beta$ for $t\\ge1$. For integers $N>M\\ge1$, partial summation gives
\\[
\\sum_{M<n\\le N}a(n)n^{-s}
=A(N)N^{-s}-A(M)M^{-s}
+s\\int_M^N A(t)t^{-s-1}\\,dt.
\\]
If $\\sigma>\\beta$, the integral converges at infinity and the first boundary term tends to zero. Its absolute integral bound is
$C|s|M^{\\beta-\\sigma}/(\\sigma-\\beta)$.
Thus the limiting tail is at most
\\[
C M^{\\beta-\\sigma}\\left(1+\\frac{|s|}{\\sigma-\\beta}\\right).
\\]

On a compact set K with $\\sigma\\ge\\beta+\\delta$ and $|s|\\le R$, this is at most $C(1+R/\\delta)M^{-\\delta}$. It tends uniformly to zero, proving locally uniform ordinary convergence in $\\sigma>\\beta$. The same holomorphic-limit theorem applies there even when the series of absolute values diverges.

The word “compact” matters. The bound contains $|s|$ and does not prove uniform convergence over every imaginary height in an unbounded half-plane. Absolute convergence supplied a height-independent majorant; cancellation through partial sums supplies a different estimate. One must not substitute one conclusion for the other.

For a nonprincipal character modulo a fixed positive integer q, the sum over a complete period is zero. A partial sum contains whole periods plus at most q remaining terms of modulus at most one, so $|A(t)|\\le q$. The argument therefore gives ordinary, locally uniform convergence for complex $\\sigma>0$, not only for positive real s. The character-theoretic zero-sum fact belongs to Chapter 16; the analytic implication is proved here.

This estimate alone says nothing about nonvanishing at s=1. A convergent sum can equal zero. Similarly, multiplying two conditionally convergent series still needs a separate justification; one cannot import the absolutely convergent double-series rearrangement merely because both limiting functions are holomorphic.

The transform relation is also exact in an appropriate domain. If $\\sigma>\\max(\\beta,0)$, letting N tend to infinity in the finite partial-summation formula from one upward gives
\\[
D_a(s)=s\\int_1^\\infty A(t)t^{-s-1}\\,dt.
\\]
The step function includes the term at one. For an integer cutoff X, its tail form is
\\[
D_a(s)-\\sum_{n\\le X}a(n)n^{-s}
=-A(X)X^{-s}+s\\int_X^\\infty A(t)t^{-s-1}\\,dt.
\\]
The boundary term is part of the identity: dropping it can change even a finite example. Convergence of the integral follows from the stated bound, rather than from an informal inversion of a transform.

<a id="section-600-20-euler-product-foundation-for-zeta-and-character-l-se"></a>
## 20. Euler-product foundation for zeta and character L-series {#section-602-20-euler-product-foundation-for-zeta-and-character-l-se}

Here is the domain lemma used by the analytic route through Chapter 16. Let $\\chi$ be a completely multiplicative arithmetic function with $\\chi(1)=1$ and $|\\chi(n)|\\le1$. A Dirichlet character, extended by zero on nonunits, satisfies these hypotheses. For $\\sigma>1$ define
\\[
L(s,\\chi)=\\sum_{n\\ge1}\\chi(n)n^{-s},\\qquad
\\mathcal L_\\chi(s)=\\sum_p\\sum_{k\\ge1}\\frac{\\chi(p)^k}{k p^{ks}}.
\\]
Both series converge absolutely and locally uniformly there. Indeed the first is bounded by zeta's absolute series, while the second has the majorant
\\[
\\sum_p\\frac{p^{-\\sigma}}{1-p^{-\\sigma}}
\\le \\frac{1}{1-2^{-\\sigma}}\\sum_{n\\ge2}n^{-\\sigma}.
\\]
A fixed margin above one makes this estimate uniform on compact sets.

For finitely many primes, geometric expansion gives the sum over integers supported on those primes. Every integer omitted after all primes at most Y have been included is greater than Y. The difference from the full series is therefore bounded by $\\sum_{n>Y}n^{-\\sigma}$, uniformly with a fixed convergence margin. This proves
\\[
L(s,\\chi)=\\prod_p(1-\\chi(p)p^{-s})^{-1}
\\]
as an actual limit, rather than a formal use of factorization.

For $|z|<1$, the power series $h(z)=\\sum_{k\\ge1}z^k/k$ satisfies $h'(z)=1/(1-z)$ and $h(0)=0$. Differentiating $(1-z)e^{h(z)}$ shows it is the constant one. Thus $e^{h(z)}=(1-z)^{-1}$ without choosing an arbitrary numerical logarithm.

Apply this to each finite prime product and then take limits. Absolute convergence of the double series gives
\\[
\\exp\\mathcal L_\\chi(s)=L(s,\\chi)\\ne0\\qquad(\\sigma>1).
\\]
This proves nonvanishing from a finite holomorphic logarithm. A limit of nonzero finite products alone would not suffice, since such a limit might be zero.

Moreover $\\mathcal L_\\chi(\\sigma)\\to0$ as real $\\sigma\\to+\\infty$, by the same majorant and dominated convergence, first choosing any fixed $\\sigma_0>1$. This normalizes the logarithm: two holomorphic logarithms on this connected half-plane differ by a constant multiple of $2\\pi i$, and only the normalized one has this limit.

Taking $\\chi(n)=1$ gives zeta and its logarithm. For a complex character, $\\mathcal L_\\chi$ and L can be complex even at real s>1. The convergent prime-power series defines the compatible logarithm; a real input is not permission to replace it by a real logarithm or to switch principal values independently at each point.

The higher prime-power remainder stays bounded as real $\\sigma\\downarrow1$:
\\[
\\sum_p\\sum_{k\\ge2}\\left|\\frac{\\chi(p)^k}{k p^{k\\sigma}}\\right|
\\le\\sum_p\\frac{p^{-2}}{1-p^{-1}}
\\le2\\sum_{n\\ge2}n^{-2}<\\infty.
\\]
This conclusion does not bound the first-prime sum by itself.

A separate conditional bridge is useful at one. If L extends holomorphically to a neighborhood of one and $L(1,\\chi)\\ne0$, shrink to a disk on which it is nonzero. A holomorphic logarithm H exists on that disk by the local logarithm theorem. On its connected overlap with $\\sigma>1$, $\\mathcal L_\\chi-H$ is a constant multiple of $2\\pi i$. Hence the normalized logarithm has a finite limit along the real approach to one. Existence and nonvanishing of that boundary value must be established separately; the half-plane Euler product has not proved Dirichlet's deep nonvanishing theorem.

<a id="section-642-21-a-general-euler-product-need-not-have-the-same-nonze"></a>
## 21. A general Euler product need not have the same nonzero region {#section-644-21-a-general-euler-product-need-not-have-the-same-nonze}

For multiplicative a, the local factor is $F_p(s)=1+\\sum_{j\\ge1}a(p^j)p^{-js}$. It is geometric only when the prime-power coefficients have the corresponding completely multiplicative form. Even absolute convergence of the full series does not prevent one local factor from vanishing.

For a concrete example set $a(1)=1$, $a(2)=-2$, and $a(n)=0$ otherwise. This is multiplicative: two coprime nonidentity inputs cannot both have a nonzero coefficient. Its Dirichlet series is the finite expression $1-2^{1-s}$, with the same single nontrivial local factor. At s=1 it is zero, although there is no infinite-series convergence problem at all.

A useful sufficient nonzero-product test on a region is that every factor is holomorphic and nonzero, and $\\sum_p|F_p(s)-1|$ converges locally uniformly. On a compact neighborhood the tail factors are uniformly within one half of one. Their local logarithm series then obey $|\\log(1+u)|\\le2|u|$, so the tail is the exponential of a convergent holomorphic sum. The remaining finite product is nonzero.

This is a local argument. A single global logarithm additionally needs appropriate topology, for example a simply connected zero-free region. Pointwise nonvanishing on a region containing loops is not itself a choice of a global logarithm.

Coefficient growth also changes the initial half-plane. Completely multiplicative coefficients $a(n)=n^b$ give $\\zeta(s-b)$ initially for $\\sigma>b+1$; they do not inherit the domain $\\sigma>1$ when b is positive. Each identity must retain its own convergence condition before products, derivatives or inverses are taken.

Logarithmic derivatives should be checked for sign as well as convergence. For one zeta factor,
\\[
\\frac{d}{ds}\\{-\\log(1-p^{-s})\\}
=-\\frac{(\\log p)p^{-s}}{1-p^{-s}}.
\\]
Applying $-d/ds$ produces the positive prime-power terms of $-\\zeta'/\\zeta$. A missing minus sign here would reverse every von Mangoldt coefficient, even though the final formula might have been copied correctly.

<a id="section-661-22-a-bounded-perron-statement-with-an-explicit-endpoint"></a>
## 22. A bounded Perron statement with an explicit endpoint rule {#section-663-22-a-bounded-perron-statement-with-an-explicit-endpoint}

Fix a noninteger real x>0, a real $c>\\max(0,\\sigma_a)$ where the Dirichlet series converges absolutely, and T>0. Then one safe truncated statement is
\\[
\\left|\\sum_{n<x}a(n)-\\frac{1}{2\\pi i}
\\int_{c-iT}^{c+iT}D_a(s)\\frac{x^s}{s}\\,ds\\right|
\\le\\frac{2x^c}{\\pi T}
\\sum_{n\\ge1}\\frac{|a(n)|n^{-c}}{|\\log(x/n)|}.
\\]
For this fixed noninteger x the numerical sum on the right is finite: only finitely many integers lie near x, none makes the denominator zero, and away from that neighborhood the denominator is bounded below. Absolute convergence controls the remaining tail.

The analytic input is the standard vertical cutoff kernel: for y>0, y≠1 and c>0, the symmetric infinite-height integral of $y^s/s$ equals one for y>1 and zero for y<1. This follows from the residue theorem applied to the appropriate closing contour; it is the explicit complex-analysis Perron kernel being imported here.

The stated error constant can be checked directly. Put v=log y. On the upper tail, integration by parts bounds
\\[
\\left|\\int_T^\\infty\\frac{e^{itv}}{c+it}\\,dt\\right|
\\le\\frac1{|v|}\\left(\\frac1T+\\int_T^\\infty\\frac{dt}{t^2}\\right)
=\\frac{2}{T|v|}.
\\]
The lower tail obeys the same bound. Multiplication by $y^c/(2\\pi)$ gives $2y^c/(\\pi T|\\log y|)$. For finite T the absolute Dirichlet majorant permits interchange with the bounded vertical integral. Sum the kernel errors with weights a(n) to obtain the displayed inequality.

As a finite check, take a(n)=1 for n=1,2,3 and zero otherwise, x=5/2, and c=1. The cutoff sum is exactly two. The bound consists of three explicit positive terms divided by T, so increasing T forces the integral to two without a conjecture about coefficients. If x were an integer, the limiting kernel would assign the boundary coefficient weight one half; the noninteger hypothesis avoids that different endpoint convention.

This is an inversion formula with a stated truncation error, not a contour-shift theorem. Moving the line farther left still requires continuation, bounds on all added boundary segments and a list of the poles crossed. A formal residue calculation without those estimates does not establish a PNT error term.

Continuation has the same boundary: uniqueness extends the function agreeing with its series in the initial domain, while ordinary summation remains governed by convergence of the original terms. Neither the Perron kernel nor a continued zeta value changes the divergent positive-integer series into an ordinary sum.

<a id="section-688-exercises-analytic-convergence-extensions"></a>

## Summary

<a id="section-540-chapter-summary"></a>
Dirichlet series translate convolution into multiplication and multiplicativity into Euler products. Absolute convergence licenses every initial rearrangement. Continuation, functional equations, zeros, and Tauberian conclusions are later analytic theorems, not retroactive convergence. The prime number theorem is an established theorem imported here; this chapter describes its analytic proof architecture rather than supplying a complete proof. The Riemann hypothesis remains open.
<a id="section-541-18-a-convergence-margin-pays-for-uniformity-and-derivat"></a>

<a id="section-742-summary-and-next-connection"></a>
Absolute convergence licenses Dirichlet convolution, finite-to-infinite Euler
products and normalized logarithms. A positive real-part margin controls
derivatives and explicit tails; a truncated Perron identity additionally
tracks its boundary convention and kernel error. None of these operations
automatically transfers beyond its stated domain. The actual new chapter
[Zeta: Continuation and Functional Equation](zeta-continuation-functional-equation.md)
now proves the previously named continuation and reflection inputs by theta
methods. The later prime-number-theorem chapter will supply its separate
zero-free boundary and Tauberian proofs.

## Exercises {#section-232-exercises-with-complete-solutions}

### Exercise 1: Absolute convergence {#dirichlet-series-euler-products-ex-1}

Where does $\\sum n^{2} n^{-s}$ converge absolutely?

<details>
<summary>Hint 1</summary>
Take absolute values and write the terms as a real power of n.
</details>
<details>
<summary>Hint 2</summary>
The positive reciprocal-power series converges exactly when its exponent exceeds one.
</details>
<details>
<summary>Solution</summary>
Its absolute terms are $n^{2-\\sigma}$, a p-series converging exactly when $\\sigma-2>1$, so $\\sigma>3$.
</details>

### Exercise 2: Alternating boundary {#dirichlet-series-euler-products-ex-2}

Does absolute convergence of $\\sum (-1)^{n-1}n^{-s}$ hold at real $s=1$?

<details>
<summary>Hint 1</summary>
Absolute values remove the alternating sign.
</details>
<details>
<summary>Hint 2</summary>
At exponent one the resulting series is harmonic, regardless of alternating cancellation.
</details>
<details>
<summary>Solution</summary>
No; absolute values give the harmonic series. Conditional convergence is a separate statement.
</details>

### Exercise 3: Convolution product {#dirichlet-series-euler-products-ex-3}

What coefficient occurs in $\\zeta(s)^{2}$ at $n=12$?

<details>
<summary>Hint 1</summary>
The coefficient in a product is Dirichlet convolution.
</details>
<details>
<summary>Hint 2</summary>
Count the divisors of twelve: one, two, three, four, six and twelve.
</details>
<details>
<summary>Solution</summary>
It is $(1*1)(12)=\\tau(12)=6$.
</details>

### Exercise 4: Möbius inverse {#dirichlet-series-euler-products-ex-4}

Why is the product of the zeta and Möbius series one?

<details>
<summary>Hint 1</summary>
Use the Möbius convolution identity.
</details>
<details>
<summary>Hint 2</summary>
The identity arithmetic function is one at input one and zero elsewhere, so its series is one.
</details>
<details>
<summary>Solution</summary>
Coefficients convolve to $1*\\mu=\\varepsilon$, whose Dirichlet series is the single term one. Absolute convergence justifies multiplication.
</details>

### Exercise 5: Finite Euler product {#dirichlet-series-euler-products-ex-5}

Expand the zeta factors for primes $2,3$.

<details>
<summary>Hint 1</summary>
Expand both local geometric series before multiplying them.
</details>
<details>
<summary>Hint 2</summary>
The two nonnegative exponents label exactly the integers whose prime factors lie in this two-prime set.
</details>
<details>
<summary>Solution</summary>
$(1-2^{-s})^{-1}(1-3^{-s})^{-1}=\\sum_{a,b\\ge 0}(2^{a}3^{b})^{-s}$, summing exactly integers with no other prime factors.
</details>

### Exercise 6: Totient series {#dirichlet-series-euler-products-ex-6}

Derive $\\sum_{n\\ge 1}\\varphi(n)n^{-s}=\\zeta(s-1)/\\zeta(s)$.

<details>
<summary>Hint 1</summary>
The identity function is the convolution of the constant-one function and the totient.
</details>
<details>
<summary>Hint 2</summary>
Translate convolution into multiplication on an absolute-convergence half-plane before dividing by zeta.
</details>
<details>
<summary>Solution</summary>
The identity $id_{1}=1*\\varphi$ gives $\\zeta(s-1)=\\zeta(s)D_{\\varphi}(s)$ in absolute convergence; then divide by the nonzero zeta function there.
</details>

### Exercise 7: Divisor-power series {#dirichlet-series-euler-products-ex-7}

Derive the series for $\\sigma_{k}$.

<details>
<summary>Hint 1</summary>
The divisor-power function is the convolution of one with the k-th power function.
</details>
<details>
<summary>Hint 2</summary>
The latter has Dirichlet series zeta evaluated at s minus k.
</details>
<details>
<summary>Solution</summary>
Since $\\sigma_{k}=1*id_{k}$, its series is $\\zeta(s)\\zeta(s-k)$ where both converge absolutely.
</details>

### Exercise 8: Von Mangoldt values {#dirichlet-series-euler-products-ex-8}

Compute $\\Lambda(8),\\Lambda(12),\\Lambda(25)$.

<details>
<summary>Hint 1</summary>
The von Mangoldt function is supported on prime powers.
</details>
<details>
<summary>Hint 2</summary>
Eight and twenty-five are prime powers, whereas twelve has two different prime divisors.
</details>
<details>
<summary>Solution</summary>
They are $\\log 2,0,\\log 5$: only prime powers receive a nonzero value.
</details>

### Exercise 9: Higher prime powers {#dirichlet-series-euler-products-ex-9}

Why is $\\sum_{p} \\sum_{k\\ge 2}1/(k p^{ks})$ bounded for real $s\\ge 1$?

<details>
<summary>Hint 1</summary>
Sum the prime-power geometric tail after dropping the harmless reciprocal k factor.
</details>
<details>
<summary>Hint 2</summary>
Its denominator stays bounded away from zero for every prime when real s is at least one.
</details>
<details>
<summary>Solution</summary>
Drop $1/k$ and bound by $\\sum_{p} p^{-2}/(1-p^{-1})$, which is at most a constant times $\\sum_{n} n^{-2}$ after handling $p=2$; it converges.
</details>

### Exercise 10: Infinitely many primes {#dirichlet-series-euler-products-ex-10}

Explain how the Euler product reproves infinitude.

<details>
<summary>Hint 1</summary>
Assume the Euler product had only finitely many local factors.
</details>
<details>
<summary>Hint 2</summary>
At real s approaching one those finitely many factors remain bounded, unlike the positive zeta series.
</details>
<details>
<summary>Solution</summary>
If there were finitely many primes, the finite product would remain bounded as real $s\\to 1+$; but $\\zeta(s)$ diverges there. Contradiction.
</details>

### Exercise 11: Continuation distinction {#dirichlet-series-euler-products-ex-11}

What does $\\zeta(-1)=-1/12$ mean?

<details>
<summary>Hint 1</summary>
Separate a continued analytic function from its original sum representation.
</details>
<details>
<summary>Hint 2</summary>
At negative one the original positive summands do not even tend to zero.
</details>
<details>
<summary>Solution</summary>
It is the value of the meromorphic continuation at $-1$. It is not the ordinary sum of the divergent positive-integer series.
</details>

### Exercise 12: Pole versus series {#dirichlet-series-euler-products-ex-12}

Does the zeta series converge at $s=1$ because continuation exists nearby?

<details>
<summary>Hint 1</summary>
Inspect the original terms at one and the known local pole separately.
</details>
<details>
<summary>Hint 2</summary>
The harmonic series diverges; continuation does not change that series.
</details>
<details>
<summary>Solution</summary>
No. The harmonic series diverges, and the continued function actually has a pole at one.
</details>

### Exercise 13: Trivial zero {#dirichlet-series-euler-products-ex-13}

Give one trivial zeta zero.

<details>
<summary>Hint 1</summary>
Use the functional equation established in the new primary chapter four.
</details>
<details>
<summary>Hint 2</summary>
A reciprocal-gamma zero at a negative even integer gives the required example.
</details>
<details>
<summary>Solution</summary>
$s=-2$ is a trivial zero; so are all negative even integers.
</details>

### Exercise 14: Symmetry {#dirichlet-series-euler-products-ex-14}

If $\\rho$ is a nontrivial zero, which companions are forced?

<details>
<summary>Hint 1</summary>
Apply conjugation and the completed reflection identity.
</details>
<details>
<summary>Hint 2</summary>
Close the resulting point set under both transformations and allow repeated partners.
</details>
<details>
<summary>Solution</summary>
Complex conjugation and the functional equation force $\\overline{\\rho}$, $1-\\rho$, and $1-\\overline{\\rho}$, with coincidences possible on symmetry lines.
</details>

### Exercise 15: RH status {#dirichlet-series-euler-products-ex-15}

What remains unproved in the Riemann hypothesis?

<details>
<summary>Hint 1</summary>
State the universal location assertion rather than a finite numerical observation.
</details>
<details>
<summary>Hint 2</summary>
Checking any finite range still leaves all higher zeros outside that range unresolved.
</details>
<details>
<summary>Solution</summary>
The universal assertion that every nontrivial zero has real part exactly one half. Finite computation cannot settle all zeros.
</details>

### Exercise 16: Logarithm boundary {#dirichlet-series-euler-products-ex-16}

Why is taking logarithms of a conditionally convergent Euler product unsafe?

<details>
<summary>Hint 1</summary>
A logarithm expansion requires control of both local branches and the infinite tail.
</details>
<details>
<summary>Hint 2</summary>
Conditional convergence alone does not license regrouping or termwise logarithm manipulations.
</details>
<details>
<summary>Solution</summary>
Reordering and termwise logarithm expansion may change or destroy convergence. Absolute convergence supplies the needed control; outside it, analytic continuation or a separate theorem is required.
</details>

### Exercise 17: Tauberian caution {#dirichlet-series-euler-products-ex-17}

Why does a pole not automatically prove a coefficient asymptotic?

<details>
<summary>Hint 1</summary>
A transform identity is not automatically an inversion theorem for its coefficients.
</details>
<details>
<summary>Hint 2</summary>
Identify the needed sign and boundary hypotheses before applying a Tauberian conclusion.
</details>
<details>
<summary>Solution</summary>
Transform inversion can be spoiled by cancellation or boundary behavior. Tauberian conclusions require extra hypotheses such as nonnegative coefficients and controlled continuation.
</details>

### Exercise 18: Domain audit {#dirichlet-series-euler-products-ex-18}

State a safe initial domain for all four standard series formulas in Section 5 simultaneously when $k=2$.

<details>
<summary>Hint 1</summary>
List the rightmost shifted zeta argument in the four formulas.
</details>
<details>
<summary>Hint 2</summary>
At k equal to two, requiring real part of s minus two greater than one is sufficient for every displayed product.
</details>
<details>
<summary>Solution</summary>
$\\sigma>3$ makes $\\zeta(s-2)$ and every coefficient series absolutely convergent; it is a safe common half-plane, though individual formulas may start farther left.
</details>

<a id="section-538-chapter-summary"></a>

<a id="section-690-exercises-analytic-convergence-extensions"></a>
### -Infinity. NTP-17-E19. Spend a convergence margin {#section-694-ntp-17-e19-spend-a-convergence-margin}

Assume $|a(n)|\\le n^2$ and consider the series at $s=4+7i$. Give a sufficient N for the absolute tail after N to be at most $10^{-3}$. Explain why the imaginary part does not enter that certificate, and why differentiating the series still needs a margin.


<details>
<summary>Hint 1</summary>
Use the explicit coefficient-growth tail estimate with theta equal to two.
</details>
<details>
<summary>Hint 2</summary>
The real-part margin is one, giving tail at most reciprocal N; imaginary powers have modulus one.
</details>

<a id="section-706-ntp-17-e20-find-the-zero-before-taking-a-logarithm"></a>
### -Infinity. NTP-17-E20. Find the zero before taking a logarithm {#section-708-ntp-17-e20-find-the-zero-before-taking-a-logarithm}

For the multiplicative function supported on one and two in Section 21, locate its zeros in the complex plane. Can its entire Dirichlet series have a holomorphic logarithm on the whole plane? Explain why absolute convergence has not supplied nonvanishing.


<details>
<summary>Hint 1</summary>
Set the finite Euler factor equal to zero before trying to choose a logarithm.
</details>
<details>
<summary>Hint 2</summary>
The complex exponential equals one at integer multiples of two pi i; a holomorphic exponential cannot have a zero.
</details>

<a id="section-720-solutions-analytic-convergence-extensions"></a>

## Solutions: Analytic convergence extensions {#section-722-solutions-analytic-convergence-extensions}

<a id="section-722-ntp-17-e19-spend-a-convergence-margin-solution"></a>
### NTP-17-E19. Spend a convergence margin — solution {#section-724-ntp-17-e19-spend-a-convergence-margin-solution}

<details>
<summary>Solution</summary>
Here C=1, theta=2 and sigma=4, so eta=1 and the tail is at most 1/N. Thus any integer N at least one thousand suffices. The factor $n^{-7i}$ has modulus one and does not change the absolute majorant. Derivatives introduce powers of log n; a positive margin, for instance comparing the derivative at sigma four to an absolute-convergence point strictly between three and four, absorbs them by the proved bound.
</details>

<a id="section-729-ntp-17-e20-find-the-zero-before-taking-a-logarithm-solu"></a>
### NTP-17-E20. Find the zero before taking a logarithm — solution {#section-731-ntp-17-e20-find-the-zero-before-taking-a-logarithm-solu}

<details>
<summary>Solution</summary>
The zero equation is $\\exp((1-s)\\log2)=1$, so $(1-s)\\log2=2\\pi i k$ for an integer k. Thus the zeros are $s=1-2\\pi i k/\\log2$. An exponential of a holomorphic function never vanishes, so there is no holomorphic logarithm on the whole plane. The finite series converges everywhere; its local factor can still be zero.
</details>

<a id="section-736-references-analytic-inputs-and-theorem-boundaries"></a>

## Sources: Analytic inputs and theorem boundaries {#section-738-references-analytic-inputs-and-theorem-boundaries}

The convergence estimates, Euler-product limits, normalized logarithm and bounded kernel-error calculation are derived above. The holomorphic-limit, local-logarithm and residue theorems are explicit complex-analysis inputs. Initial zeta and character domains agree with [NIST DLMF 27.4](https://dlmf.nist.gov/27.4) and [DLMF 25.15](https://dlmf.nist.gov/25.15). The imported vertical cutoff kernel is stated in [Yum-Tong Siu's Harvard notes on Perron's formula](https://legacy-www.math.harvard.edu/archive/213b_spring_05/perron_formula_without_error_estimate.pdf). Meromorphic continuation, the functional equation, the zero-free line and Tauberian PNT argument remain the named deeper inputs of the original chapter, not consequences of the bounded calculations.

<a id="section-740-summary-and-next-connection"></a>
`;export{e as default};