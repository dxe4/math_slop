
# Taylor Theory, Convexity, and Quantified Remainders

A tangent line is a local model. Taylor theory asks how much more local information higher derivatives can encode and, crucially, how large the discarded remainder can be. Convexity asks a complementary question: when does local slope information control a function globally? Together they turn calculus computations into certified approximation and optimization arguments.

The central warning is simple. A Taylor polynomial is always finite; a Taylor series is infinite. Finite differentiability can justify a finite approximation with a remainder. Even infinitely many derivatives do not automatically make the infinite series equal the function. Every approximation claim therefore needs a region, a degree, and a bound.

This chapter assumes the mean value theorem and basic derivative rules. Its convexity sections use intervals essentially: a line segment between any two domain points must stay inside the domain.

## 1. Local linearity and its error

Differentiability of \(f\) at \(a\) means

\[f(a+h)=f(a)+f'(a)h+r(h)\]

where

\(r(h)/h\to 0\) as \(h\to 0\).

The notation \(r(h)=o(h)\) records that the remainder is small relative to \(h\). This is stronger than continuity, which only says the whole change tends to zero, but weaker than a quadratic error bound.

If \(f'\) is Lipschitz near \(a\) with constant \(L\), the error becomes quantitative. By the mean value theorem, for some point \(\xi\) between \(a\) and \(a+h\),

\(f(a+h)-f(a)=f'(\xi)h\).

Therefore

\(|f(a+h)-f(a)-f'(a)h|=|f'(\xi)-f'(a)||h|\le L|h|^2\).

An integral argument later improves the constant to \(L/2\), but the essential message is already present: regularity of the derivative controls accuracy of the tangent model.

### Worked example: square root near 1

For \(f(x)=\sqrt{x}\), the tangent model at 1 is

\(T_1(x)=1+(x-1)/2\).

On \([3/4,5/4]\),

\(|f''(x)|=1/(4x^{3/2})\le 2/(3\sqrt{3})\).

Taylor's theorem below will give

\(|\sqrt{x}-T_1(x)|\le |x-1|^2/(3\sqrt{3})\).

Thus at \(x=1.04\), the error is below \(0.0016/(3\sqrt{3})<0.00031\).

## 2. Taylor's theorem with Lagrange remainder

Let \(a\) and \(x\) lie in an interval \(I\). Suppose \(f\in C^n\) on the closed segment joining them and has an \((n+1)\)st derivative at every interior point. If \(x\ne a\), then some \(\xi\) strictly between \(a\) and \(x\) satisfies

\(f(x)=\sum_{k=0}^n [f^{k}(a)/k!](x-a)^k + [f^{n+1}(\xi)/(n+1)!](x-a)^{n+1}\).

The polynomial is \(T_n\), the degree-\(n\) Taylor polynomial at \(a\); the last term is the **Lagrange remainder** \(R_n(x)\). When \(x=a\), the identity holds directly with zero remainder and no strictly intermediate point is required.

If a usable bound

\[|f^{n+1}(t)|\le M\]

holds between \(a\) and \(x\), then

\(|R_n(x)|\le M|x-a|^{n+1}/(n+1)!\).

This inequality is usually more valuable than the unknown point \(\xi\). It converts a derivative bound into an error certificate.

### The auxiliary-function mechanism

Fix \(x\ne a\) and choose a number \(A\) so that

\[F(t)=f(t)-T_n(t)-A(t-a)^{n+1}\]

satisfies \(F(x)=0\). Because \(F(a)=F'(a)=\ldots=F^{n}(a)=0\), repeated applications of Rolle's theorem produce a point \(\xi\) between \(a\) and \(x\) with \(F^{n+1}(\xi)=0\). But

\(F^{n+1}(\xi)=f^{n+1}(\xi)-(n+1)!A\).

Solving for \(A\) and using \(F(x)=0\) yields the remainder formula. Rolle's theorem, not symbolic pattern matching, is the logical engine.

## 3. Choosing a degree from an error budget

**Worked example 2 (a uniform degree certificate).**

For \(e^x\) centered at zero, every derivative is \(e^x\). On \([-1,1]\), it is bounded by \(e\), so

\(|e^x-\sum_{k=0}^n x^k/k!|\le e/(n+1)!\).

To guarantee error below \(10^{-6}\) throughout \([-1,1]\), find \(n\) with

\(e/(n+1)!<10^{-6}\).

Since \(10!=3,628,800\), the degree-9 polynomial has error below \(e/10!<7.5\times 10^{-7}\). This is a uniform guarantee across the interval.

For sine and cosine, all derivatives have absolute value at most one. On \([-r,r]\), the degree-\(n\) Taylor remainder is at most

\(r^{n+1}/(n+1)!\).

Parity often makes the first omitted nonzero term later than the general theorem records, but a rigorous bound should use a derivative order whose hypotheses and coefficient are explicit.

### Center selection

The factor \(|x-a|^{n+1}\) shows why center choice matters. To approximate on \([u,v]\) with one Taylor polynomial, the midpoint minimizes the largest distance to the center. A center near one endpoint may be convenient algebraically but produces a worse worst-case bound.

## 4. Peano remainder and what it does not quantify

If \(f\) is \(n\) times differentiable at \(a\) in an appropriate local sense, one may obtain

\(f(a+h)=\sum_{k=0}^n f^{k}(a)h^k/k!+o(h^n)\).

The **Peano remainder** states a limiting order but does not provide an explicit constant or interval. It is ideal for local asymptotic calculations. The Lagrange form is better when a numerical tolerance must be certified.

For example,

\(\log(1+h)=h-h^2/2+o(h^2)\).

Dividing by \(h\) or \(h^2\) can reveal limits, but the notation alone does not answer how small \(h\) must be to ensure six decimal places. An asymptotic statement and an error budget are different products.

## 5. Smooth does not imply analytic

A function is **real analytic at \(a\)** when it equals its Taylor series on some neighborhood of \(a\). Infinite differentiability is necessary but not sufficient.

Define

\(f(x)=e^{-1/x^2}\) for \(x\ne 0\), and \(f(0)=0\).

This function is infinitely differentiable, and every derivative at zero is zero. For \(x\ne 0\), repeated differentiation produces a polynomial in \(1/x\) times \(e^{-1/x^2}\). The exponential decays faster than every power as \(x\to 0\), so each derivative extends to zero with value zero.

The Taylor series at zero is therefore identically zero. Yet \(f(x)>0\) whenever \(x\ne 0\). The Taylor series does not recover the function on any punctured neighborhood.

The failure can be stated through remainders: for each fixed \(n\), \(f(x)=o(x^n)\) near zero, but holding \(x\ne 0\) fixed and sending the Taylor degree to infinity leaves the polynomial equal to zero forever. A limit in the spatial variable is not automatically interchangeable with a limit in degree.

## 6. Convexity begins with chords

Let \(I\subseteq R\) be an interval. A function \(f:I\to R\) is **convex** if for all \(x,y\in I\) and \(t\in [0,1]\),

\(f((1-t)x+ty)\le (1-t)f(x)+t f(y)\).

The graph lies below every chord joining two graph points. It is **strictly convex** if the inequality is strict whenever \(x\ne y\) and \(0<t<1\).

Examples include \(x^2\), \(e^x\), and \(-\log x\) on their natural interval domains. Affine functions satisfy equality and are convex but not strictly convex.

Convexity is preserved by nonnegative weighted sums. If \(f_j\) are convex and \(\alpha_j\ge 0\), then \(\sum\alpha_j f_j\) is convex. It is also preserved by pointwise suprema when the supremum is finite: taking a supremum after the chord inequality retains the same upper bound.

### Epigraph geometry

The **epigraph** of \(f\) is

\(epi(f)=\{(x,r):r\ge f(x)\}\).

The function is convex exactly when its epigraph is a convex subset of the plane. Indeed, convex combinations of points lying above the graph remain above the chord, and the chord lies above the graph. This reformulation generalizes directly to functions on vector spaces.

## 7. Jensen's inequality

The two-point definition extends to any finite convex combination.

**Finite Jensen inequality.** If \(f\) is convex, \(x_1,\ldots,x_m\in I\), \(\lambda_j\ge 0\), and \(\sum\lambda_j=1\), then

\(f(\sum\lambda_j x_j)\le \sum\lambda_j f(x_j)\).

An induction proves the claim. Separate the last weight, normalize the first \(m-1\) weights to sum to one, apply the induction hypothesis, and then apply two-point convexity.

For \(f(x)=x^2\), Jensen gives

\((\sum\lambda_jx_j)^2\le \sum\lambda_jx_j^2\).

Rearranging says a weighted variance is nonnegative. For \(f(x)=-\log x\), it yields the weighted arithmetic–geometric mean inequality after exponentiation.

Strict convexity identifies equality: when all weights are positive, equality forces all input points to agree. This turns an inequality into a uniqueness certificate.

## 8. Secant slopes increase

Let \(f\) be convex and take \(x<y<z\) in \(I\). Write \(y=(1-t)x+tz\) with \(t=(y-x)/(z-x)\). Convexity gives

\(f(y)\le (1-t)f(x)+t f(z)\).

Rearranging yields

\([f(y)-f(x)]/(y-x)\le [f(z)-f(x)]/(z-x)\le [f(z)-f(y)]/(z-y)\).

Thus secant slopes increase as their endpoints move right. Several facts follow:

- one-sided derivatives of a convex function exist at every interior point, possibly as extended real values;
- the left derivative is no larger than the right derivative;
- wherever the ordinary derivative exists, it is nondecreasing;
- a convex function is continuous on the interior of its interval domain.

The last statement is not assumed. On a compact subinterval strictly inside \(I\), neighboring secant slopes bound the function's local rate of change, giving a local Lipschitz estimate.

## 9. First-derivative characterizations

Suppose \(f\) is differentiable on an open interval \(I\). The following are equivalent:

1. \(f\) is convex;
2. \(f'\) is nondecreasing;
3. every tangent line supports the graph:
   \(f(y)\ge f(x)+f'(x)(y-x)\) for all \(x,y\in I\).

### Convexity gives supporting tangents

For \(y>x\), increasing secant slopes imply

\(f'(x)\le [f(y)-f(x)]/(y-x)\).

Rearrange. The case \(y<x\) follows similarly.

### A nondecreasing derivative gives supporting tangents

Assume directly that \(f'\) is nondecreasing. For \(y>x\), the mean value theorem gives \([f(y)-f(x)]/(y-x)=f'(c)\ge f'(x)\) for some \(c\in(x,y)\). For \(y<x\), it gives a point \(c\in(y,x)\) with the same secant slope and \(f'(c)\le f'(x)\); multiplying by the negative quantity \(y-x\) reverses the inequality. Both cases yield \(f(y)\ge f(x)+f'(x)(y-x)\).

### Supporting tangents give convexity

Let \(z=(1-t)x+ty\). Apply the supporting inequality at \(z\) to both \(x\) and \(y\):

\(f(x)\ge f(z)+f'(z)(x-z)\),

\(f(y)\ge f(z)+f'(z)(y-z)\).

Multiply by \(1-t\) and \(t\), then add. The derivative terms cancel because \((1-t)(x-z)+t(y-z)=0\), leaving the chord inequality.

The supporting-line condition globalizes a local derivative. For a general differentiable function, a tangent may cross the graph repeatedly. For a convex function, it is a global lower bound.

## 10. Second derivatives and quantified curvature

If \(f\) is twice differentiable on an interval, then

- \(f''\ge 0\) implies convexity;
- \(f''>0\) implies strict convexity;
- convexity implies \(f''\ge 0\) wherever the second derivative exists.

The first implication follows because \(f''\ge 0\) makes \(f'\) nondecreasing. Strict positivity makes \(f'\) strictly increasing, which yields strict chord inequalities.

If \(f''(x)\ge m>0\), then \(f\) is **strongly convex** with parameter \(m\). Taylor's theorem gives

\(f(y)\ge f(x)+f'(x)(y-x)+(m/2)(y-x)^2\).

If also \(f''(x)\le L\), then

\(f(y)\le f(x)+f'(x)(y-x)+(L/2)(y-x)^2\).

These two quadratic traps quantify curvature. They are fundamental in optimization: \(m\) prevents flat directions, while \(L\) limits how abruptly the slope changes.

## 11. Minima, uniqueness, and certificates

For a differentiable convex function on an open interval, a point \(x_*\) is a global minimizer exactly when \(f'(x_*)=0\). The supporting-line inequality gives

\(f(y)\ge f(x_*)+f'(x_*)(y-x_*)=f(x_*)\).

If \(f\) is strictly convex, it has at most one minimizer. If two distinct points both minimized it, strict convexity would put every interior chord point strictly below the common minimum.

Strong convexity adds a distance certificate. If \(x_*\) minimizes \(f\) and \(f''\ge m>0\), then

\(f(x)-f(x_*)\ge (m/2)|x-x_*|^2\).

Therefore an objective gap at most \(\eta\) guarantees

\(|x-x_*|\le \sqrt{2\eta/m}\).

Function accuracy becomes location accuracy, provided curvature does not vanish.

### Boundary minima

The equation \(f'=0\) is an interior condition. On \([a,b]\), a convex function may minimize at \(a\) with positive right derivative, or at \(b\) with negative left derivative. A complete optimization audit checks endpoints and domain constraints.

## 12. Classical inequalities from tangents

Convexity and concavity generate reliable inequalities without ad hoc algebra.

Since \(e^x\) is convex, its tangent at zero lies below it:

\(e^x\ge 1+x\).

Since \(\log x\) is concave on \((0,\infty)\), its tangent at 1 lies above it:

\(\log x\le x-1\).

Applying the latter to \(1/x\) or choosing other tangent points gives families of bounds. The inequality

\[\log y\le \log x+(y-x)/x\]

holds for all positive \(x,y\). It is a global statement extracted from the local derivative at \(x\) because concavity controls the tangent direction.

For \(f(x)=1/x\), convexity on \((0,\infty)\) and Jensen yield the harmonic–arithmetic mean comparison:

\(1/(\sum\lambda_jx_j)\le \sum\lambda_j(1/x_j)\).

## 13. Newton's method with a local error certificate

For a differentiable function with \(f'(x)\ne 0\), Newton's update is

\(N(x)=x-f(x)/f'(x)\).

Suppose \(r\) is a root, and on an interval containing \(x\) and \(r\) we have

\(|f''|\le M\) and \(|f'|\ge m>0\).

Taylor's theorem centered at \(x\) gives, for some intermediate \(\xi\),

\(0=f(r)=f(x)+f'(x)(r-x)+[f''(\xi)/2](r-x)^2\).

Rearranging,

\(|N(x)-r|\le [M/(2m)]|x-r|^2\).

This is a local quadratic error estimate. It does not by itself prove that the next iterate stays inside the interval or that the hypotheses persist. A convergence proof must establish an invariant region or combine Newton steps with a safeguarded bracket.

The formula also explains failure near a multiple root: \(f'\) may be small, destroying the denominator bound and slowing convergence.

## 14. Remainder audits in computation

A trustworthy approximation report should contain:

1. the expansion center and target region;
2. the exact polynomial degree;
3. the theorem used for the remainder;
4. a derivative bound on the entire segment, not only at the center;
5. the resulting worst-case mathematical error;
6. a separate account of floating-point or measurement error.

Increasing the Taylor degree reduces truncation error in exact arithmetic, but it can increase evaluation cost and rounding sensitivity. Horner's rule evaluates a polynomial with fewer operations:

\(a_0+x(a_1+x(a_2+\ldots+xa_n))\).

Analysis certifies the model error; numerical analysis must still certify the computation.

## 15. Misconceptions and boundary cases

- **Infinitely differentiable means equal to the Taylor series.** Smooth nonanalytic functions disprove this.
- **The unknown \(\xi\) makes Taylor's theorem useless.** A uniform derivative bound removes the need to locate it.
- **A small next term proves a small remainder.** That needs a theorem, such as alternating-series control or a Taylor remainder bound.
- **\(f''>0\) is necessary for strict convexity.** The function \(x^4\) is strictly convex although \(f''(0)=0\).
- **Every convex function is differentiable.** Absolute value is convex and has a corner at zero.
- **Any critical point is a global minimum.** Convexity supplies that conclusion; differentiability alone does not.
- **Newton's method always converges quadratically.** The error estimate is local and requires derivative bounds plus control of the iterates.
- **Convex means increasing.** A convex function can decrease and then increase, as \(x^2\) does.


### Worked example 3 (a global minimum from curvature)

Consider \(F(x)=x^2-4x+7\) on the whole real line. Its derivative is \(2x-4\), so the unique critical point is \(x_*=2\). The second derivative is the positive constant 2; hence strict convexity makes this critical point the unique global minimizer. The exact identity \(F(x)=3+(x-2)^2\) both verifies the minimum value 3 and supplies a quantitative certificate: an objective gap at most \(\eta\ge0\) implies \(|x-2|\le\sqrt\eta\). Thus the curvature estimate predicts exactly the error scale in this example, rather than merely locating a plausible stationary point.

## Exercises with complete solutions

### ANA-CH11-E001 — Exercise 1: Tangent-model error for a quadratic

Find the exact error of the tangent approximation to \(f(x)=x^2\) at \(a\).

<details><summary>Hint 1</summary>

Write the tangent polynomial at a explicitly.

</details>

<details><summary>Hint 2</summary>

Subtract it from x^2 and complete the square in x-a.

</details>

<details><summary>Solution</summary>

#### ANA-CH11-E001 — Solution

The tangent polynomial is \(T_1(x)=a^2+2a(x-a)\). Expanding gives
\(x^2-T_1(x)=x^2-a^2-2a(x-a)=(x-a)^2\).
Taylor's theorem agrees: \(f''=2\), so the remainder is \((2/2)(x-a)^2\).

</details>

### ANA-CH11-E002 — Exercise 2: Certify an exponential approximation

How large can the error be when \(e^{0.1}\) is approximated by \(1+0.1+0.1^2/2\)?

<details><summary>Hint 1</summary>

Identify the first omitted derivative for degree two.

</details>

<details><summary>Hint 2</summary>

Bound exp(x) throughout [0,0.1] and multiply by 0.1^3/3!.

</details>

<details><summary>Solution</summary>

#### ANA-CH11-E002 — Solution

This is degree two at zero. On \([0,0.1]\), the third derivative \(e^x\) is at most \(e^{0.1}\). Hence
\(|R_2(0.1)|\le e^{0.1}(0.1)^3/6<0.000185\).

</details>

### ANA-CH11-E003 — Exercise 3: A sine bound

Prove \(|\sin x-x|\le |x|^3/6\) for every real \(x\).

<details><summary>Hint 1</summary>

Use the degree-two Taylor polynomial of sine at zero.

</details>

<details><summary>Hint 2</summary>

Its quadratic coefficient vanishes; the third derivative has magnitude at most one on either oriented segment.

</details>

<details><summary>Solution</summary>

#### ANA-CH11-E003 — Solution

Taylor's theorem of degree two at zero gives \(\sin x=x+R_2(x)\) because the constant and quadratic coefficients vanish. The third derivative is \(-\cos\), whose absolute value is at most 1 on the segment from 0 to \(x\). Thus \(|R_2(x)|\le |x|^3/6\).

</details>

### ANA-CH11-E004 — Exercise 4: A cosine inequality

Show \(\cos x\ge 1-x^2/2\) for every real \(x\).

<details><summary>Hint 1</summary>

Subtract the proposed lower bound from cosine.

</details>

<details><summary>Hint 2</summary>

The resulting function and its first derivative vanish at zero, while its second derivative is nonnegative.

</details>

<details><summary>Solution</summary>

#### ANA-CH11-E004 — Solution

Let \(g(x)=\cos x-1+x^2/2\). Then \(g(0)=g'(0)=0\) and \(g''(x)=1-\cos x\ge 0\). Hence \(g'\) is nondecreasing, so \(g'\le 0\) to the left of zero and \(g'\ge 0\) to the right. Therefore zero is a global minimum and \(g(x)\ge 0\).

</details>

### ANA-CH11-E005 — Exercise 5: Degree selection

Find a Taylor degree guaranteeing error below \(10^{-5}\) for \(e^x\) on \([-1,1]\).

<details><summary>Hint 1</summary>

Bound every derivative of the exponential on [-1,1] by e.

</details>

<details><summary>Hint 2</summary>

Find a factorial exceeding e times 10^5; remember the remainder uses (n+1)!.

</details>

<details><summary>Solution</summary>

#### ANA-CH11-E005 — Solution

The degree-\(n\) error is at most \(e/(n+1)!\). We need \((n+1)!>e\times 10^5\). Since \(8!=40320\) is too small and \(9!=362880>271829\), \(n=8\) suffices. The degree-7 bound does not certify the tolerance by this estimate.

</details>

### ANA-CH11-E006 — Exercise 6: Midpoint center

Show the midpoint minimizes \(\max(|u-a|,|v-a|)\) over centers \(a\in [u,v]\).

<details><summary>Hint 1</summary>

Compare the two endpoint distances at the midpoint.

</details>

<details><summary>Hint 2</summary>

Their sum is at least v-u for any center, so their maximum is at least half that length.

</details>

<details><summary>Solution</summary>

#### ANA-CH11-E006 — Solution

Let \(m=(u+v)/2\). At \(m\), both distances equal \((v-u)/2\). For any \(a\), the triangle inequality gives \(v-u\le |v-a|+|a-u|\), so at least one of the two distances is at least \((v-u)/2\). Thus no center improves on the midpoint.

</details>

### ANA-CH11-E007 — Exercise 7: Smooth but invisible Taylor data

For the smooth function \(f(x)=e^{-1/x^2}\) extended by \(f(0)=0\), what is its Taylor series at zero, and why does it not represent \(f\) near zero?

<details><summary>Hint 1</summary>

Recall the values of all derivatives of the extended function at zero.

</details>

<details><summary>Hint 2</summary>

A zero Taylor series can agree only at zero because the actual function is positive elsewhere.

</details>

<details><summary>Solution</summary>

#### ANA-CH11-E007 — Solution

Every derivative at zero equals zero, so every Taylor coefficient is zero and the series is identically zero. But \(f(x)>0\) for every nonzero \(x\). Therefore the series disagrees with the function at every nearby nonzero point.

</details>

### ANA-CH11-E008 — Exercise 8: Verify convexity from the definition

Prove \(f(x)=x^2\) is convex without using derivatives.

<details><summary>Hint 1</summary>

Subtract the value on a chord from the weighted endpoint values.

</details>

<details><summary>Hint 2</summary>

Expand to obtain t(1-t)(x-y)^2.

</details>

<details><summary>Solution</summary>

#### ANA-CH11-E008 — Solution

For \(t\in [0,1]\), direct expansion gives
\((1-t)x^2+ty^2-[(1-t)x+ty]^2=t(1-t)(x-y)^2\ge 0\).
Rearranging is exactly the convexity inequality. It is strict for \(0<t<1\) and \(x\ne y\).

</details>

### ANA-CH11-E009 — Exercise 9: Nonnegative sums

If \(f\) and \(g\) are convex and \(\alpha,\beta\ge 0\), prove \(\alpha f+\beta g\) is convex.

<details><summary>Hint 1</summary>

Write the convexity inequality for each function.

</details>

<details><summary>Hint 2</summary>

Multiplying by nonnegative coefficients preserves inequality directions before addition.

</details>

<details><summary>Solution</summary>

#### ANA-CH11-E009 — Solution

Apply the chord inequality separately to \(f\) and \(g\), multiply by the nonnegative coefficients, and add. Nonnegativity preserves the inequality direction.

</details>

### ANA-CH11-E010 — Exercise 10: A supremum of affine functions

Let \(f(x)=\sup_{j\in J}(a_jx+b_j)\), assumed finite for every \(x\). Prove \(f\) is convex.

<details><summary>Hint 1</summary>

Fix one affine function from the defining family.

</details>

<details><summary>Hint 2</summary>

Its value at a convex combination is bounded by the same combination of the two suprema; then take its supremum.

</details>

<details><summary>Solution</summary>

#### ANA-CH11-E010 — Solution

For each \(j\),
\(a_j[(1-t)x+ty]+b_j=(1-t)(a_jx+b_j)+t(a_jy+b_j)\le (1-t)f(x)+tf(y)\).
Taking the supremum over \(j\) on the left gives the convexity inequality for \(f\).

</details>

### ANA-CH11-E011 — Exercise 11: Jensen and variance

Use Jensen's inequality to prove \((\sum\lambda_jx_j)^2\le \sum\lambda_jx_j^2\) for nonnegative weights summing to one.

<details><summary>Hint 1</summary>

Apply finite Jensen to the square function.

</details>

<details><summary>Hint 2</summary>

Alternatively expand the weighted sum of (x_j-mu)^2 with mu the weighted mean.

</details>

<details><summary>Solution</summary>

#### ANA-CH11-E011 — Solution

Apply finite Jensen to the convex function \(f(x)=x^2\). The left side is \(f(\sum\lambda_jx_j)\) and the right side is \(\sum\lambda_jf(x_j)\). Their difference is the weighted variance \(\sum\lambda_j(x_j-\mu)^2\), where \(\mu=\sum\lambda_jx_j\), so it is nonnegative.

</details>

### ANA-CH11-E012 — Exercise 12: Tangent inequality for the exponential

Prove \(e^x\ge 1+x\), and determine equality.

<details><summary>Hint 1</summary>

Use the supporting tangent of the exponential at zero.

</details>

<details><summary>Hint 2</summary>

Strict positivity of its second derivative gives strict convexity and identifies the equality point.

</details>

<details><summary>Solution</summary>

#### ANA-CH11-E012 — Solution

The exponential is strictly convex because its second derivative is positive. Its tangent at zero is \(1+x\), so the supporting-tangent inequality gives \(e^x\ge 1+x\). Strict convexity makes equality possible only at the tangency point \(x=0\).

</details>

### ANA-CH11-E013 — Exercise 13: A logarithm bound

Show \(\log x\le x-1\) for \(x>0\).

<details><summary>Hint 1</summary>

Determine the concavity of logarithm on its positive domain.

</details>

<details><summary>Hint 2</summary>

Its tangent at one is x-1, and a concave function lies below its tangents.

</details>

<details><summary>Solution</summary>

#### ANA-CH11-E013 — Solution

The logarithm is concave because its second derivative is \(-1/x^2<0\). A concave graph lies below each tangent line. The tangent at 1 is \(0+1(x-1)=x-1\), proving the claim, with equality only at \(x=1\).

</details>

### ANA-CH11-E014 — Exercise 14: Critical point certificate

Find and certify the global minimizer of \(f(x)=e^x-3x\).

<details><summary>Hint 1</summary>

Solve for the zero of exp(x)-3.

</details>

<details><summary>Hint 2</summary>

Strict convexity converts that critical point into the unique global minimum.

</details>

<details><summary>Solution</summary>

#### ANA-CH11-E014 — Solution

We have \(f'(x)=e^x-3\), so the only critical point is \(x_*=\log 3\). Also \(f''(x)=e^x>0\), making \(f\) strictly convex. Therefore the critical point is the unique global minimizer. Its value is \(3-3\log 3\).

</details>

### ANA-CH11-E015 — Exercise 15: A boundary minimizer

Minimize \(f(x)=e^x\) on \([0,2]\) and explain why no equation \(f'=0\) is needed.

<details><summary>Hint 1</summary>

Check the sign of the derivative across the interval.

</details>

<details><summary>Hint 2</summary>

A strictly increasing function minimizes at the left endpoint; an interior stationarity condition is unnecessary.

</details>

<details><summary>Solution</summary>

#### ANA-CH11-E015 — Solution

Since \(f'(x)=e^x>0\), the function is strictly increasing. Its minimum on the compact interval is attained at the left boundary, \(x=0\), with value 1. The zero-derivative condition applies only to interior local extrema.

</details>

### ANA-CH11-E016 — Exercise 16: Strong-convexity location bound

Suppose \(f''\ge 4\), \(x_*\) minimizes \(f\), and \(f(x)-f(x_*)\le 0.02\). Bound \(|x-x_*|\).

<details><summary>Hint 1</summary>

Use the quadratic growth estimate supplied by the lower curvature bound.

</details>

<details><summary>Hint 2</summary>

Combine 2|x-x_*|^2 with the given gap 0.02 and take a square root.

</details>

<details><summary>Solution</summary>

#### ANA-CH11-E016 — Solution

Strong convexity gives \(f(x)-f(x_*)\ge (4/2)|x-x_*|^2=2|x-x_*|^2\). Thus \(2|x-x_*|^2\le 0.02\), so \(|x-x_*|\le 0.1\).

</details>

### ANA-CH11-E017 — Exercise 17: Strict convexity without positive second derivative everywhere

Show \(x^4\) is strictly convex although its second derivative vanishes at zero.

<details><summary>Hint 1</summary>

Check strict monotonicity of the first derivative.

</details>

<details><summary>Hint 2</summary>

The second derivative may vanish at an isolated point without losing strict increase of the first derivative.

</details>

<details><summary>Solution</summary>

#### ANA-CH11-E017 — Solution

Its derivative \(4x^3\) is strictly increasing on \(R\). A differentiable function with strictly increasing derivative is strictly convex. Yet \(f''(0)=12\cdot 0^2=0\), showing \(f''>0\) everywhere is sufficient but not necessary.

</details>

### ANA-CH11-E018 — Exercise 18: Convex but nondifferentiable

Prove \(|x|\) is convex and identify its supporting slopes at zero.

<details><summary>Hint 1</summary>

Use the triangle inequality for convexity.

</details>

<details><summary>Hint 2</summary>

For a supporting line sx at zero, test separately positive and negative x to bound s from both sides.

</details>

<details><summary>Solution</summary>

#### ANA-CH11-E018 — Solution

The triangle inequality gives
\(|(1-t)x+ty|\le (1-t)|x|+t|y|\), so absolute value is convex. A line \(sx\) supports the graph at zero exactly when \(|x|\ge sx\) for all \(x\), which holds precisely for \(s\in [-1,1]\). There is no unique derivative, but there is an interval of subgradients.

</details>

### ANA-CH11-E019 — Exercise 19: One Newton error step

Suppose a root \(r\) and a point \(x\) lie in an interval where \(|f''|\le 6\) and \(|f'|\ge 2\). Bound the next Newton error in terms of the current error.

<details><summary>Hint 1</summary>

Insert the stated derivative constants into the Taylor-Newton estimate.

</details>

<details><summary>Hint 2</summary>

The coefficient is the second-derivative bound divided by twice the lower first-derivative bound.

</details>

<details><summary>Solution</summary>

#### ANA-CH11-E019 — Solution

The Taylor–Newton estimate gives
\(|N(x)-r|\le [6/(2\cdot 2)]|x-r|^2=(3/2)|x-r|^2\).
This bound is conditional on the segment and the next iterate remaining in the audited region for repeated use.

</details>

### ANA-CH11-E020 — Exercise 20: Convex equality and uniqueness

Let \(f\) be strictly convex on an interval. Prove it has at most one global minimizer.

<details><summary>Hint 1</summary>

Assume there are two distinct minimizers with equal minimum value.

</details>

<details><summary>Hint 2</summary>

Strict convexity at their midpoint produces a value strictly below that minimum.

</details>

<details><summary>Solution</summary>

#### ANA-CH11-E020 — Solution

If distinct \(x\) and \(y\) both had minimum value \(m\), strict convexity at \(t=1/2\) would give
\(f((x+y)/2)<[f(x)+f(y)]/2=m\),
contradicting minimality of \(m\).

</details>

## ANA-CH11-P001 — Project: build a certified approximation dossier

Choose one of \(e^x\), \(\sin x\), \(\log(1+x)\), or \((1+x)^\alpha\) on a compact interval inside its domain. Produce a reproducible dossier containing:

1. a chosen center and a justification for it;
2. Taylor polynomials of at least three degrees;
3. a proved derivative bound and Lagrange remainder certificate for each degree;
4. a table of actual errors at a declared mesh, kept separate from the theorem bound;
5. an analysis of floating-point evaluation using direct powers versus Horner's rule;
6. a convexity or concavity inequality derived from a supporting tangent;
7. one intentionally invalid approximation claim, followed by a diagnosis of its missing hypothesis.

The project is complete only when another reader can reproduce every number and tell which statements are exact, bounded, empirical, or heuristic.

## Chapter synthesis

Taylor's theorem is a finite identity plus a controlled remainder. Analyticity is the separate assertion that those remainders vanish as degree grows. Convexity lets derivative information escape its local origin: monotone slopes produce global supporting lines, global minima, inequality certificates, and quantitative location bounds.

The recurring proof pattern is to replace a suggestive approximation with a trap. Bound the derivative on the whole relevant segment, trap the function between tangent quadratics when curvature is controlled, and state the region on which every denominator and iterate remains safe. That is the difference between a plausible numerical answer and an analytical guarantee.

## Summary

Taylor theory supplies finite polynomial models with remainders controlled on a specified segment. A convergent or vanishing remainder needs its own argument; smoothness alone does not make a Taylor series represent its function. Convexity turns local slope information into global supporting inequalities and minimizer certificates. Strict convexity gives uniqueness, strong convexity gives location bounds, and boundary constraints require separate endpoint checks. These distinctions remain essential when approximating functions without derivative information.
