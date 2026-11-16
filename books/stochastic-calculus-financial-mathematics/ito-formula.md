
# Itô’s Formula

The second derivative in stochastic calculus is not an informal repair to the ordinary chain rule. It is the limit of Taylor's quadratic term under the variation law proved earlier. We prove the time-dependent scalar formula with local integrability, derive the product rule, and use explicit moment bounds before calling a drift-free process a true martingale.

**L4 preparation.** Use [Quadratic Variation](brownian-motion-quadratic-variation.md), [The Itô Integral](ito-integral.md), conditional expectation, Taylor's theorem and Gronwall's inequality. Let $B$ be Brownian relative to the usual filtration. The continuous adapted process is specified by
$$X_t=X_0+\int_0^t b_sds+\int_0^t\sigma_s dB_s,$$
with predictable coefficients and $\int_0^T(|b_s|+\sigma_s^2)ds<\infty$ almost surely on every finite horizon. The initial variable is finite and measurable at time zero. No square-integrable moment of that initial value is needed for the localized identity.

## The statement and what the notation means

For $f\in C^{1,2}([0,\infty)\times\mathbb R)$, with the time derivative interpreted one-sided at zero, the formula is
$$f(t,X_t)=f(0,X_0)+\int_0^t(f_t+b_sf_x+\tfrac12\sigma_s^2f_{xx})(s,X_s)ds+\int_0^t f_x(s,X_s)\sigma_s dB_s.$$
The identity holds simultaneously in time for continuous versions, after localization where necessary. The stochastic term is initially a continuous local martingale. Its mean is not automatically zero at a terminal time; finite expected energy is one sufficient condition for that stronger conclusion.

The compact notation for the differential is a summary of this integral identity. It does not introduce an ordinary Brownian derivative or multiply actual infinitesimals. Similarly, the familiar squared-differential rule records a quadratic-variation limit, whose mode of convergence and allowed integrands have already been specified. The proof below makes that connection explicit.

## A fourth-moment estimate without circular use of the formula

For a bounded predictable integrand with magnitude at most $K$ over an interval of length $h$, its integral has fourth moment at most $3K^4h^2$. For an elementary integrand, expand the fourth power after adding one Brownian increment. Conditional odd terms vanish, and the two surviving new contributions are six times the previous squared sum times the squared coefficient and interval length, and three times the fourth coefficient power and squared interval length. The earlier partial second moment is at most $K^2$ times elapsed time. Summing gives the claimed bound, since twice the sum of earlier elapsed time times the next interval length plus the sum of squared lengths equals $h^2$.

A general bounded predictable integrand is approximated by elementary ones truncated at the same bound. The truncation is Lipschitz and preserves convergence in the energy norm. Square-mean convergence gives an almost-sure subsequence of terminal values, and Fatou passes the fourth-moment upper bound to the limit. Thus this estimate is available before applying Itô's formula to a fourth power. It will control the centered quadratic Taylor sums.

## Proof first for bounded coefficients and derivatives

Fix a finite horizon. Suppose first that the coefficients and the required derivatives of $f$ are bounded, with the second spatial derivative uniformly continuous. Write $X=A+M$ apart from its initial value, with $A$ the drift integral and $M$ the stochastic integral. Taylor-expand the spatial change on each deterministic partition interval at its left endpoint. The time change can be written as the ordinary integral of $f_t$ while holding the later spatial value fixed. Summing gives a first derivative term, half the weighted squared increments and a remainder.

The time terms converge to the integral of $f_t(s,X_s)$ by uniform continuity on the compact path range. The drift first-derivative terms converge by ordinary dominated integration. The stochastic first-derivative sums are integrals of left-step approximations to $f_x(s,X_s)\sigma_s$. Continuity of the path and the derivatives gives convergence of these integrands in expected energy by bounded convergence. Isometry therefore supplies the required stochastic-integral limit.

In the quadratic term the drift squares disappear by finite variation, and the cross products with martingale increments disappear by Cauchy–Schwarz and boundedness in probability of the martingale quadratic sums. Bounded weights do not change these conclusions. For the martingale squares, use the preceding chapter's bracket identity: each increment square minus its accumulated energy has conditional mean zero at the interval's start. Multiplying by the bounded left-endpoint second derivative preserves that property, making different intervals orthogonal.

The fourth-moment estimate bounds the second moment of each centered weighted term by a constant times the squared interval length. The same bound applies to the accumulated-energy square since the diffusion coefficient is bounded. Summing gives a total upper bound proportional to the mesh, tending to zero. The uncentered weighted energy sums converge to the integral of $f_{xx}(s,X_s)\sigma_s^2$ by dominated integration. This proves the quadratic limit without assuming a weighted variation law for arbitrary anticipative weights.

Finally the spatial Taylor remainder is bounded by a modulus of continuity of the second derivative at the maximum path increment, times the full squared-increment sum. The first factor tends to zero almost surely. The second is bounded in probability by the established quadratic limits and finite-variation estimates. Their product tends to zero in probability. Passing to the limit in the telescoping equality proves the formula at each fixed time. Countably many rational times and continuity give the simultaneous process identity.

## Removing the artificial boundedness assumptions

Stop first when the accumulated integral of $|b|+\sigma^2$ reaches an integer bound. The stopped expected variation and energy are finite. Truncate the two coefficients pointwise at increasing bounds, retaining predictability, and define the corresponding approximating integral processes with the same initial variable. The drift differences tend to zero in expected integrated absolute value; the diffusion differences tend to zero in expected energy. The martingale maximal inequality then gives uniform convergence in probability of the approximating processes to the stopped process.

For a compactly supported spatial cutoff of $f$, its derivatives are bounded on the fixed time horizon. The first drift term passes to the limit using its coefficient's integrated absolute convergence and bounded continuous derivative factors. The stochastic term passes by energy convergence. In the latter argument, a derivative difference bounded by a fixed constant converges in measure against the finite weighted measure with density $\sigma^2$; boundedness makes its squared weighted integral tend to zero. The second-derivative drift term is handled by the corresponding integrated-square convergence of the diffusion coefficients. The time term follows from uniform convergence in probability on the compact horizon. Taking an almost-sure subsequence when needed and then using uniqueness of probability limits proves the whole approximation passage.

Remove the spatial cutoff by stopping before the continuous path leaves its agreement interval. Evaluate the already established continuous identity at that stopping time. On the stopped path the cutoff derivatives equal the original derivatives, so the identities coincide. A continuous path is bounded on each finite horizon, and its accumulated variation and energy are finite there almost surely. Increasing both stopping bounds therefore exhausts the horizon. Repeating for integer horizons proves the fully local statement without requiring pointwise bounded diffusion coefficients or a global moment bound on the initial value.

## Product and discount rules

Apply the square formula to $X+Y$, $X$ and $Y$ and subtract. For two scalar Itô processes driven by the same Brownian motion, polarization gives
$$d(XY)=X\,dY+Y\,dX+\sigma_X\sigma_Ydt.$$
For several independent drivers, the last coefficient is the sum of the products of corresponding diffusion coefficients. The cross terms follow from the independent-driver covariation argument, so this extension does not assume every pair of noises is independent when they share a component.

A continuous finite-variation discount factor has zero covariation with these processes. If $D_t=\exp(-\int_0^tr_sds)$ with locally integrable adapted rate, ordinary calculus gives $dD=-rDdt$. The product rule consequently adds only that drift term to $D\,dX$, without a diffusion correction from $D$. A discount symbol alone does not make the resulting product a martingale; its remaining drift and integrability still need analysis.

## A local generator calculation

Suppose the coefficients are continuous functions of the state and the initial state is the deterministic point $x$. Stop before leaving a fixed bounded neighborhood of $x$. For a twice continuously differentiable spatial function, the stochastic coefficient in the stopped formula is bounded, so its expectation is zero. The expected stopped increment is therefore the expected time integral of
$$\mathcal L f(y)=b(y)f'(y)+\tfrac12\sigma(y)^2f''(y).$$
Divide by a small positive horizon. Path continuity and the strictly positive exit time make the integrand converge almost surely to its value at $x$, and local boundedness permits dominated convergence. The expected stopped increment divided by the horizon consequently tends to $\mathcal Lf(x)$. This proves the local infinitesimal generator interpretation. Removing the stop for an unbounded function needs additional growth and integrability estimates, just as taking the expectation of an arbitrary local martingale does. The later PDE connection will use precisely this expected-change mechanism rather than an informal replacement of a random differential by its mean.

## Worked example 1: a time-dependent polynomial martingale

Take $f(t,x)=x^3-3tx$ and $X=B$. Its time derivative is minus three times the state, while half its second spatial derivative is plus three times the state. The drift cancels. Thus
$$B_t^3-3tB_t=3\int_0^t(B_s^2-s)dB_s.$$
The integrand has finite expected energy on every finite horizon because normal fourth moments are finite. Explicitly its expected squared coefficient is $18s^2$, so the terminal variance is $6T^3$ and the mean is zero. This is a true square-integrable martingale, not merely a formal drift cancellation. Its compensator differs from the process obtained by subtracting the ordinary time integral of three times Brownian position from the cubic; both can be martingales without being equal.

## Worked example 2: the lognormal price model

For deterministic positive $s_0$ define $S_t=s_0\exp((\mu-\sigma^2/2)t+\sigma B_t)$. The exponential formula verifies directly that $dS=\mu Sdt+\sigma S dB$. It also proves strict positivity at every finite time. Conversely, for a positive solution the logarithm formula, stopped away from zero and infinity, gives $d\log S=(\mu-\sigma^2/2)dt+\sigma dB$. The half-variance correction is essential in both directions.

The normal exponential moment gives mean $s_0e^{\mu t}$ and variance $s_0^2e^{2\mu t}(e^{\sigma^2t}-1)$. The median is $s_0e^{(\mu-\sigma^2/2)t}$, which need not move in the same direction as the mean. The existence and uniqueness theory will specify which solutions are covered; this calculation alone does not establish an arbitrary coefficient SDE theorem. Nor does a hypothetical constant-volatility price model establish a real asset's empirical law.

## Worked example 3: a bounded-coefficient stochastic exponential

Let $\theta$ be predictable and bounded, set $M=\int\theta dB$, and let $V=\int\theta^2ds$. Applying the formula to $Z=\exp(M-V/2)$ gives $dZ=Z\theta dB$. It is positive and initially a local martingale. To prove it is true, stop when $Z$ reaches level $N$. The stopped integrand is bounded on each finite horizon, so its expected increment is zero. Applying the square formula and taking expectations gives an inequality for the stopped second moment: it is at most one plus the squared coefficient bound times its previous time integral.

Gronwall bounds those second moments by the exponential of the squared bound times the horizon, uniformly in $N$. This supplies uniform integrability. Continuity makes the level stops eventually exceed each fixed horizon almost surely. Passing their conditional martingale identities in mean therefore proves that $Z$ is a true martingale with expectation one. Later measure-change arguments will use that normalization; positivity alone would not have supplied it.

## Exercises

### Exercise 3.1
<a id="ito-formula-ex-1"></a>

Derive the differential and second moment of $\exp(aB_t-a^2t/2)$ for fixed real $a$.

<details><summary>Hint 1</summary>

The time derivative cancels half the second spatial derivative.

</details>
<details><summary>Hint 2</summary>

Compute the second moment using the normal exponential moment.

</details>
<details><summary>Solution</summary>

The differential is $aZ_tdB_t$ with no drift. The second moment is $e^{a^2t}$, from combining the normal moment at coefficient $2a$ with the deterministic compensation. Thus the expected energy of its stochastic coefficient is finite on every finite horizon. It is a true square-integrable martingale there, consistent with the bounded-coefficient exponential proof, including the constant-one case when $a=0$.

</details>

### Exercise 3.2
<a id="ito-formula-ex-2"></a>

Show that $B_t^4-6tB_t^2+3t^2$ has zero drift and justify a true martingale on each finite horizon.

<details><summary>Hint 1</summary>

Compute the time derivative and second spatial derivative of the whole polynomial.

</details>
<details><summary>Hint 2</summary>

The remaining integrand is a polynomial with finite Gaussian moments.

</details>
<details><summary>Solution</summary>

The time derivative is $-6x^2+6t$, and half the second spatial derivative is $6x^2-6t$, so they cancel. The stochastic coefficient is $4B_t^3-12tB_t$. Its expected squared time integral is finite on every bounded horizon by Gaussian sixth and lower moments. Consequently its integral is square-integrable and the polynomial is a true martingale starting at zero. No expectation claim is based solely on writing a zero drift symbol.

</details>

### Exercise 3.3
<a id="ito-formula-ex-3"></a>

If $dX=b\,dt+\sigma\,dB$ and the discount rate is constant $r$, derive the discounted differential.

<details><summary>Hint 1</summary>

The deterministic discount has finite variation.

</details>
<details><summary>Hint 2</summary>

Use the product rule and its zero cross variation with the discount.

</details>
<details><summary>Solution</summary>

The differential of $e^{-rt}X_t$ is $e^{-rt}(b_t-rX_t)dt+e^{-rt}\sigma_t dB_t$. There is no extra quadratic term from the discount factor. The product is a local martingale only if its displayed drift vanishes, and a true martingale further requires the corresponding integrability. Discounting itself does not establish either property.

</details>

### Exercise 3.4
<a id="ito-formula-ex-4"></a>

For a positive process satisfying $dS=\mu Sdt+\sigma SdB$, identify the term lost by the ordinary logarithm chain rule.

<details><summary>Hint 1</summary>

The logarithm's second derivative is negative reciprocal square.

</details>
<details><summary>Hint 2</summary>

Multiply it by half the diffusion coefficient squared.

</details>
<details><summary>Solution</summary>

The correction is $-\sigma^2dt/2$, so $d\log S=(\mu-\sigma^2/2)dt+\sigma dB$. The ordinary rule would omit it and give the wrong log drift and hence the wrong reconstructed mean. Because logarithm is defined only on the positive half-line, the formula is first applied after stopping away from zero; positivity and continuity then exhaust each admissible finite path range.

</details>

### Exercise 3.5
<a id="ito-formula-ex-5"></a>

Two positive factors have proportional drifts $\mu,\nu$, proportional volatilities $\sigma,\eta$ and Brownian correlation $\rho$. Derive their product's proportional drift.

<details><summary>Hint 1</summary>

The product includes their cross variation.

</details>
<details><summary>Hint 2</summary>

Correlation multiplies the two volatility coefficients.

</details>
<details><summary>Solution</summary>

The drift is $\mu+\nu+\rho\sigma\eta$. The stochastic terms are the product times $\sigma dB+\eta dC$, and their cross variation supplies the additional drift coefficient. This is a product-of-processes identity. Calling that product a self-financing wealth process would require a separate trading construction, not just the product rule.

</details>

### Exercise 3.6
<a id="ito-formula-ex-6"></a>

Why does the square rule for a continuous finite-variation process lack a quadratic correction?

<details><summary>Hint 1</summary>

Use the telescoping square identity on a partition.

</details>
<details><summary>Hint 2</summary>

Its squared-increment sum tends to zero.

</details>
<details><summary>Solution</summary>

The exact square expansion has a left first-order sum and a squared-increment sum. For continuous finite variation the latter is bounded by maximum increment times total variation and tends to zero. Passing to the ordinary Stieltjes limit gives $d(A^2)=2A\,dA$. A jump process would retain squared jumps, so continuity cannot be dropped from this conclusion.

</details>

### Exercise 3.7
<a id="ito-formula-ex-7"></a>

Why may the proved formula not be applied directly to $f(x)=|x|$ at a Brownian zero?

<details><summary>Hint 1</summary>

Inspect the required spatial smoothness at zero.

</details>
<details><summary>Hint 2</summary>

A pointwise zero second derivative away from zero does not describe the singular corner.

</details>
<details><summary>Solution</summary>

The function is not differentiable at zero and is not twice continuously differentiable there, so the theorem's assumptions fail. Substituting an arbitrarily assigned derivative at that point does not repair Taylor's remainder proof. A correct nonsmooth extension uses additional local-time machinery; this chapter has not established it. The smooth formula therefore supplies no license to discard the corner contribution.

</details>

### Exercise 3.8
<a id="ito-formula-ex-8"></a>

A formal computation removes every drift term. Why is that insufficient to conclude an expectation remains constant?

<details><summary>Hint 1</summary>

The residual stochastic integral is initially local.

</details>
<details><summary>Hint 2</summary>

Recall the independent infinite-mean initial coefficient example.

</details>
<details><summary>Solution</summary>

Local finite energy yields a local martingale, which need not be integrable at a fixed time. The previous chapter's infinite-mean independent coefficient times Brownian motion has zero drift but infinite expected absolute value at positive times. A constant-expectation conclusion therefore needs a true-martingale criterion, such as finite expected energy or the uniform-integrability argument used for the bounded stochastic exponential.

</details>

### Exercise 3.9
<a id="ito-formula-ex-9"></a>

Explain why the fourth-moment estimate in the proof does not circularly assume Itô's formula for a fourth power.

<details><summary>Hint 1</summary>

The starting expansion is a finite elementary sum.

</details>
<details><summary>Hint 2</summary>

Conditional Gaussian second and fourth moments are already known.

</details>
<details><summary>Solution</summary>

One expands the finite sum's fourth power after each increment and conditions on the previous information. Odd conditional moments vanish and the second/fourth moments give the explicit recursion. Summing the recursion gives the bound; density and Fatou extend it to bounded predictable integrands. None of those steps invokes the stochastic chain rule being proved, so the quadratic remainder estimate is logically available beforehand.

</details>

### Exercise 3.10
<a id="ito-formula-ex-10"></a>

Why does stopping the accumulated energy not necessarily make the diffusion coefficient pointwise bounded, and how does the proof handle that issue?

<details><summary>Hint 1</summary>

An integrable square can have very high narrow spikes.

</details>
<details><summary>Hint 2</summary>

The proof separately truncates the coefficient after the energy stop.

</details>
<details><summary>Solution</summary>

A bound on the time integral of its square controls total energy, not its supremum. Predictable coefficients can remain unbounded on small time sets. The proof first obtains finite expected energy by stopping, then approximates by pointwise bounded truncations in the energy norm. The maximal inequality and weighted convergence pass the bounded-coefficient identities to the original stopped process. Thus the proof does not conflate the two different kinds of boundedness.

</details>

## Summary

Taylor expansion, conditional quadratic estimates and localization prove the time-dependent chain rule under its stated local conditions. Product and discount rules follow from covariation. Every expectation calculation still requires a true-martingale argument. The next chapter uses this calculus and the integral construction to establish stochastic-equation existence, uniqueness and the conditions behind the familiar explicit models.
