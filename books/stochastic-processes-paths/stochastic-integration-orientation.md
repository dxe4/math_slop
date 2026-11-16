
# The Ito Integral

## Motivation: why ordinary calculus fails

In Chapter 13, "Brownian Motion," we saw that Brownian paths have nonzero quadratic variation: $\sum (B_{t_{i}} - B_{t_{i-1}})^{2} \to t$. For continuous functions of bounded variation, this sum converges to $0$ as the mesh tends to zero. (A discontinuous bounded-variation function can have nonzero squared jumps.) Brownian motion's nonzero quadratic variation means that second-order terms cannot be neglected.

This L4 chapter constructs the square-integrable Ito integral by isometry and proves the Brownian C2 chain rule below. The general locally integrable Ito-process formula is stated with its localisation hypotheses. Preparation is Brownian increments, conditional expectation, completeness of L2 and the martingale maximal inequality; existence of an SDE is a later topic rather than a prerequisite for defining the integral.

## The Itô integral for step processes

Let $(B_t)_{t\ge0}$ be standard Brownian motion with natural filtration $(\mathcal F_t)_{t\ge0}$. A process $(H_t)_{t\ge0}$ is **simple predictable** if there are times $0=t_0<\cdots<t_n=T$ and bounded $\mathcal F_{t_k}$-measurable random variables $\xi_k$ such that
$$H_t=\xi_k\quad\text{for }t\in(t_k,t_{k+1}],$$
with endpoint values assigned separately if needed.

The **Itô integral** of $H$ with respect to $B$ is
$$\int_{0}^{T} H_t\,dB_t=\sum_{k=0}^{n-1}\xi_k(B_{t_{k+1}}-B_{t_k}).$$

**Why past information?** The coefficient $\xi_k$ is known at time $t_k$, before $B_{t_{k+1}}-B_{t_k}$ is realized. This predictability is what makes the integral process a martingale. Coefficients depending on a right endpoint or midpoint can anticipate the increment and generally lose that property.

## The Itô isometry

**Theorem 15.3 (Itô isometry).** For a simple process $H$,
$$\mathbb{E}\left[\left(\int_{0}^{T} H_{t} \, dB_{t}\right)^{2}\right] = \mathbb{E}\left[\int_{0}^{T} H_{t}^{2} \, dt\right].$$

**Proof.** Expand the square:
$$\mathbb{E}\left[\left(\sum_{k} \xi_k \Delta B_{k}\right)^{2}\right] = \sum_{k} \mathbb{E}[\xi_k^{2} (\Delta B_{k})^{2}] + 2 \sum_{j < k} \mathbb{E}[\xi_j \xi_k \Delta B_{j} \Delta B_{k}].$$

For $j<k$, $\xi_j\xi_k\Delta B_j$ is $\mathcal F_{t_k}$-measurable and $\mathbb E[\Delta B_k\mid\mathcal F_{t_k}]=0$, so the cross terms vanish. Also $\xi_k^2$ is $\mathcal F_{t_k}$-measurable and $\mathbb E[(\Delta B_k)^2\mid\mathcal F_{t_k}]=t_{k+1}-t_k$. Therefore
$$\mathbb E[\xi_k^2(\Delta B_k)^2]=\mathbb E[\xi_k^2](t_{k+1}-t_k)=\mathbb E\left[\int_{t_k}^{t_{k+1}}H_t^2\,dt\right].$$
Summing over $k$ gives the result.

**Extension.** The Itô isometry shows that the map $H \mapsto \int H \, dB$ is an isometry from simple processes (with $L^{2}$ norm $\mathbb{E}[\int H^{2} dt]^{1/2}$) into $L^{2}(\mathbb{P})$. By density, it extends to all **predictable** processes with $\mathbb{E}[\int_{0}^{T} H_{t}^{2} dt] < \infty$.

## Itô's formula

For ordinary calculus, if $f \in C^{2}$ and $x(t)$ is differentiable,
$$df(x(t)) = f'(x(t)) x'(t) dt.$$

For Brownian motion, the chain rule acquires a second-order correction:

**Theorem 15.4 (Itô's formula, one dimension).** Let $f \in C^{2}(\mathbb{R})$ and let $(X_{t})_{t \ge 0}$ be an Itô process
$$dX_{t} = b_{t} dt + \sigma_{t} dB_{t},$$
where $b$ and $\sigma$ are progressively measurable (predictable is also sufficient) and, on every bounded interval $[0,T]$,

$$\int_0^T\bigl(|b_t|+\sigma_t^2\bigr)\,dt<\infty\quad\text{almost surely}.$$

The stochastic integral and formula are first applied after localization when only these local conditions are available. Then
$$df(X_{t}) = f'(X_{t}) dX_{t} + \frac{1}{2} f''(X_{t}) \sigma_{t}^{2} dt.$$

In integral form,
$$f(X_{t}) = f(X_{0}) + \int_{0}^{t} f'(X_{s}) dX_{s} + \frac{1}{2} \int_{0}^{t} f''(X_{s}) \sigma_{s}^{2} ds.$$

**Heuristic derivation.** Taylor expand:
$$df(X_{t}) = f'(X_{t}) dX_{t} + \frac{1}{2} f''(X_{t}) (dX_{t})^{2} + \dots$$

Now $(dX_{t})^{2} = (b_{t} dt + \sigma_{t} dB_{t})^{2} = b_{t}^{2} (dt)^{2} + 2 b_{t} \sigma_{t} dt dB_{t} + \sigma_{t}^{2} (dB_{t})^{2}$. In the Itô calculus, $(dt)^{2} = 0$, $dt dB_{t} = 0$, and $(dB_{t})^{2} = dt$. Thus $(dX_{t})^{2} = \sigma_{t}^{2} dt$, giving the correction term.

## Worked example: $f(x) = x^{2}$ and $X = B$

Apply Itô's formula to $f(B_{t}) = B_{t}^{2}$:
$$d(B_{t}^{2}) = 2 B_{t} dB_{t} + \frac{1}{2} \cdot 2 \cdot dt = 2 B_{t} dB_{t} + dt.$$

In integral form,
$$B_{t}^{2} = 2 \int_{0}^{t} B_{s} dB_{s} + t.$$

Rearranging,
$$\int_{0}^{t} B_{s} dB_{s} = \frac{1}{2} B_{t}^{2} - \frac{t}{2}.$$

This confirms that $B_{t}^{2} - t$ is a martingale, as shown in Chapter 13, "Brownian Motion." The extra $-t/2$ term comes from the quadratic variation and would be absent in ordinary calculus.

## Worked example: geometric Brownian motion

Let $S_{t} = S_{0} \exp(\mu t + \sigma B_{t})$. Apply Itô's formula to $f(x) = e^{x}$ with $X_{t} = \log S_{0} + \mu t + \sigma B_{t}$:
$$dS_{t} = S_{t} (\mu dt + \sigma dB_{t}) + \frac{1}{2} S_{t} \sigma^{2} dt = S_{t} \left(\mu + \frac{\sigma^{2}}{2}\right) dt + S_{t} \sigma dB_{t}.$$

The drift is $\mu + \sigma^{2}/2$, not $\mu$. If we want drift $\mu$, we must set the exponent to $(\mu - \sigma^{2}/2)t + \sigma B_{t}$. This is the standard form of geometric Brownian motion in finance.

## Common errors

**Error 1: Using the ordinary chain rule.** The most common mistake is to write $df(B_{t}) = f'(B_{t}) dB_{t}$ without the second-order term. This is wrong because $(dB_{t})^{2} = dt$.

**Error 2: Confusing Itô and Stratonovich integrals.** Stratonovich integration is obtained from symmetric approximations and obeys the ordinary chain rule, but it does not generally preserve the martingale property. An Itô integral of a predictable integrand satisfying $\mathbb E\int_0^T H_t^2dt<\infty$ is a martingale, and Itô's formula includes the quadratic-variation correction. For deterministic integrands the two integrals agree, so the distinction must not be stated as an absolute one.

**Error 3: Integrating anticipative processes.** In this construction the Itô integrand must be predictable, so $H_t$ uses information available strictly before the next increment. Mere adaptedness is not the general continuous-time measurability condition. Future-dependent coefficients destroy the standard martingale construction.


## Why the completion is well-defined

Let $\mathcal H^2_T$ be the closure of simple predictable processes under the norm $(E\int_0^T|H_s|^2ds)^{1/2}$. If $H^{(n)}$ is a Cauchy sequence there, the isometry says its terminal integrals are Cauchy in L2. Define the integral of the limit as their L2 limit. If two approximation sequences represent the same integrand, their difference tends to zero in the integrand norm and therefore in the integral norm. The result is independent of the selected approximations.

The process version also has a continuous martingale representative. Simple predictable Brownian integrals have continuous paths and are martingales. For two approximants, the L2 maximal inequality gives
$$
E\sup_{t\le T}\left|\int_0^t(H^{(n)}_s-H^{(m)}_s)\,dB_s\right|^2
\le4E\int_0^T|H^{(n)}_s-H^{(m)}_s|^2\,ds.
$$
Thus they converge in the L2 supremum norm. A subsequence with summable expected sup differences converges uniformly almost surely, giving a continuous version. Conditional expectation is an L2 contraction, so the martingale identity passes to the limit. Under the usual filtration, the standard density theorem identifies this completion with predictable square-integrable processes modulo equality in product measure.

This definition concerns integrands up to $dt\,dP$ null sets. Changing an integrand at one deterministic time does not affect the integral. It is not a pathwise Riemann–Stieltjes construction against every Brownian sample path.

## A rigorous Brownian chain-rule proof

First take $f\in C^2$ with bounded derivatives and uniformly continuous second derivative, as holds for a smooth compactly supported function. Taylor-expand at left endpoints along a deterministic partition $0=t_0<\cdots<t_n=T$, with $\Delta B_i=B_{t_i}-B_{t_{i-1}}$ and $\Delta t_i=t_i-t_{i-1}$:
$$
f(B_T)-f(0)
=\sum_if'(B_{t_{i-1}})\Delta B_i
+\tfrac12\sum_if''(B_{t_{i-1}})(\Delta B_i)^2+R_\pi.
$$
Continuity of Brownian paths and of $f'$ gives convergence of the left-step integrands to $f'(B_s)$ in the integrated L2 norm, by bounded convergence. The first sum therefore tends to the defined stochastic integral.

Write the quadratic term as a time Riemann sum plus
$$
\sum_if''(B_{t_{i-1}})\{(\Delta B_i)^2-\Delta t_i\}.
$$
The latter terms have conditional mean zero, are orthogonal across the partition, and have squared expectations bounded by $2\|f''\|_\infty^2(\Delta t_i)^2$. Their sum tends to zero in L2 as mesh shrinks. The time Riemann sum tends pathwise to $\int_0^Tf''(B_s)\,ds$.

The Taylor remainder is bounded by a modulus of continuity of $f''$, evaluated at the largest Brownian increment, times the quadratic-variation sum. The first factor tends almost surely to zero and the second tends in probability to $T$. Thus the remainder tends to zero in probability. Passing to the limit in the telescoping identity proves
$$
f(B_T)=f(0)+\int_0^Tf'(B_s)\,dB_s
+\tfrac12\int_0^Tf''(B_s)\,ds.
$$
For a general C2 function, choose smooth cutoffs agreeing with it on growing compact intervals and stop before Brownian motion leaves each interval. The stopped formulas agree there. Brownian continuity makes the path bounded on each fixed horizon, so these local identities exhaust that horizon almost surely. This gives the locally defined formula without assuming bounded global derivatives.

The more general Ito-process formula stated earlier follows from the analogous quadratic covariation estimates and localisation. The displayed symbolic rules are a mnemonic for those limits, rather than their proof.

## Worked example: deterministic weighting

For $H_s=s$ on $[0,T]$, the integral is a centred Gaussian variable of variance $\int_0^Ts^2ds=T^3/3$. Step approximations are finite Gaussian sums, and their L2 limits have the corresponding limiting Gaussian law. Integration by parts with the deterministic finite-variation function also gives
$$
\int_0^Ts\,dB_s=TB_T-\int_0^TB_s\,ds.
$$
The second integral is ordinary time integration. It is correlated with the endpoint, and one must not add their variances as though the two terms were independent.

## Left endpoints, right endpoints and anticipation

For $H_s=B_s$, the left sums obey the exact identity
$$
\sum_i B_{t_i}\Delta B_i
=\tfrac12\{B_T^2-\sum_i(\Delta B_i)^2\}.
$$
They converge to $(B_T^2-T)/2$. The right-endpoint sums instead equal the left sums plus the quadratic sum and converge to $(B_T^2+T)/2$. Averaging left and right gives the symmetric, or Stratonovich, value $B_T^2/2$ in this example.

The difference is a full time term, not a vanishing numerical error. Right-endpoint coefficients use information from the increment being integrated and are not the predictable left-step construction. Deterministic continuous integrands do not have that same correction, which is why one should not claim that Ito and Stratonovich integrals always differ.

The second moment of $\int_0^TB_s\,dB_s$ is $\int_0^TEB_s^2ds=T^2/2$, and its mean is zero. Its explicit quadratic expression is not Gaussian. An Ito integral with a random predictable integrand need not be Gaussian even though every driving increment is normal.

## Practice exercises

### Exercise 1
<a id="stochastic-integration-orientation-ex-1"></a>

Use Itô's formula to find the stochastic differential of $e^{B_{t}}$.

<details>
<summary>Hint 1</summary>

Write both first and second derivatives before applying the formula. For the exponential, the first and second derivatives coincide.
</details>
<details>
<summary>Hint 2</summary>

Include the quadratic-variation correction and check the integral moment condition. For the compensated exponential, compute its second moment on each finite horizon.
</details>
<details>
<summary>Solution</summary>

With $f(x) = e^{x}$, both $f'(x) = e^{x}$ and $f''(x) = e^{x}$. Thus
$$d(e^{B_{t}}) = e^{B_{t}} dB_{t} + \frac{1}{2} e^{B_{t}} dt.$$

The process $e^{B_{t}}$ has positive drift $\tfrac{1}{2} e^{B_{t}}$. To obtain a martingale, subtract the drift: $M_{t} = e^{B_{t} - t/2}$ satisfies $dM_{t} = M_{t} dB_{t}$, confirming the exponential martingale from Chapter 13, "Brownian Motion."
</details>

### Exercise 2
<a id="stochastic-integration-orientation-ex-2"></a>

Apply Itô's formula to $f(x) = x^{3}$ with $X_{t} = B_{t}$. Identify the martingale part.

<details>
<summary>Hint 1</summary>

Write both first and second derivatives before applying the formula. For the cubic, distinguish the stochastic-integral term from its time-integrated compensator.
</details>
<details>
<summary>Hint 2</summary>

Include the quadratic-variation correction and check the integral moment condition. Use the fourth Gaussian moment to establish the square-integrability of the stochastic integrand.
</details>
<details>
<summary>Solution</summary>

With $f'(x) = 3x^{2}$ and $f''(x) = 6x$,
$$d(B_{t}^{3}) = 3 B_{t}^{2} dB_{t} + 3 B_{t} dt.$$

Thus $B_t^3-3\int_0^tB_s\,ds=3\int_0^tB_s^2\,dB_s$ is a martingale on every finite time horizon. A different Hermite-polynomial martingale is $B_t^3-3tB_t$, since its differential is $3(B_t^2-t)\,dB_t$. These are two distinct martingales, not two forms of the same compensator.
</details>

### Exercise 3
<a id="stochastic-integration-orientation-ex-3"></a>

Let $X_{t} = B_{t}^{2}$. Find $dX_{t}$ and verify that $\mathbb{E}[X_{t}] = t$.

<details>
<summary>Hint 1</summary>

Write both first and second derivatives before applying the formula. For the square, the second derivative is the constant two.
</details>
<details>
<summary>Hint 2</summary>

Include the quadratic-variation correction and check the integral moment condition. Check the energy of the integrand 2B before taking expectations.
</details>
<details>
<summary>Solution</summary>

By Itô's formula with $f(x) = x^{2}$,
$$d(B_{t}^{2}) = 2 B_{t} dB_{t} + dt.$$

Taking expectations, the stochastic integral vanishes (it is a martingale with mean zero), so
$$\mathbb{E}[B_{t}^{2}] = \mathbb{E}\left[\int_{0}^{t} ds\right] = t.$$

This agrees with $\operatorname{Var}(B_{t}) = t$.
</details>


## Preparation and the exact construction being completed

This chapter is now the L4 treatment of **The Ito Integral**, while its original heading and source identity remain available. It assumes conditional expectation, measure-theoretic $L^2$ completeness, product integration and the martingale maximal inequality. The original orientation and heuristic above remain useful, but the following development supplies an actual construction for square-integrable predictable integrands. Existence of an SDE is not a prerequisite for this construction; the next chapter uses the integral to prove one such existence theorem.

We use a usual filtration relative to which $B$ is Brownian. Thus the future increment is independent of all information at its left endpoint. A filtration enlarged by future Brownian values need not have this property. All integrand equalities in the Hilbert-space construction mean equality almost everywhere for the measure $dt\,d\mathbb P$, not equality at every time on every path. Altering an integrand at one deterministic time has no effect on the integral.

**Definition 15.1 (the predictable space).** On $(0,T]\times\Omega$, let the predictable sigma-field be generated by sets $(s,t]\times A$, where $0\le s<t\le T$ and $A\in\mathcal F_s$. Adding the time-zero slice is harmless because it has zero $dt\,d\mathbb P$ measure. Let $\mathcal H_T$ be the space of predictable real processes with norm
\[
 \|H\|_{\mathcal H_T}^2=\mathbb E\int_0^T|H_s|^2\,ds<\infty,
\]
identifying processes equal almost everywhere. This is a closed measurable subspace of product $L^2$, hence complete.

Continuous adapted processes are predictable: their values on $(kT/n,(k+1)T/n]$ can be approximated by the value at $kT/n$, which is measurable at that left endpoint. The step approximations converge pointwise at each positive time by path continuity. Mere adaptedness without time measurability is insufficient. Progressively measurable square-integrable processes admit predictable representatives for $dt\,d\mathbb P$; that equivalence is an imported measurability theorem when applying the broader progressively measurable formulation of Itô's formula above.

## Density of elementary integrands and the terminal integral

The earlier density assertion can be justified in the present deterministic-grid scope. Finite linear combinations of rectangle indicators $(s,t]\times A$ are bounded simple predictable processes after refining their finitely many endpoints to one common partition. Each coefficient at a left endpoint is measurable in the corresponding sigma-field.

**Proposition 15.2 (density).** These bounded elementary processes are dense in $\mathcal H_T$.

Here is a measure-theoretic proof. If a predictable $Z\in L^2(dt\,d\mathbb P)$ is orthogonal to every rectangle indicator, define the finite signed measure
\[
 \nu(E)=\int_E Z\,dt\,d\mathbb P
\]
on the predictable sigma-field. Finiteness follows from Cauchy–Schwarz because the total product measure is $T<\infty$. It vanishes on the generating rectangles and their intersections; intersections are again rectangles of the required kind, or empty, since both events are measurable at the later of the left endpoints. The constant whole-space indicator is included. Uniqueness of finite signed measures, obtained from the pi-lambda or monotone-class theorem, gives $\nu(E)=0$ on every predictable set. Apply this to $\{Z>0\}$ and $\{Z<0\}$ to obtain $Z=0$ almost everywhere. A proper closed span would have a nonzero orthogonal complement in a Hilbert space, so the elementary span is dense. The measure uniqueness and Hilbert orthogonal-projection principles are the explicit L4 analysis tools used here.

For $H\in\mathcal H_T$, choose elementary $H^{(n)}$ converging in this norm. Isometry makes $I_T(H^{(n)})$ Cauchy in $L^2(\mathbb P)$, so it has a limit. Define $I_T(H)$ to be that limit. If another approximation is used, isometry applied to the difference shows the two limits agree. Passing norms and inner products to limits gives
\[
 \mathbb EI_T(H)=0,\qquad
 \mathbb E|I_T(H)|^2=\|H\|_{\mathcal H_T}^2,\qquad
 \mathbb E[I_T(H)I_T(K)]=\mathbb E\int_0^T H_sK_s\,ds.
\]
Linearity follows from linear elementary approximations. This is a uniquely determined continuous extension, not a proposed sequence whose convergence is left unproved.

## Constructing the whole continuous martingale

For an elementary process define its integral at every $t$ by partially integrating the current interval:
\[
 M_t=\sum_k\xi_k(B_{t\wedge t_{k+1}}-B_{t\wedge t_k}).
\]
It is continuous, adapted and a square-integrable martingale. Conditional means of its remaining increments vanish by left-endpoint measurability and Brownian independence. For elementary differences the continuous-time maximal inequality gives
\[
 \mathbb E\sup_{t\le T}|I_t(H^{(n)})-I_t(H^{(m)})|^2
 \le4\|H^{(n)}-H^{(m)}\|_{\mathcal H_T}^2.
\]
This maximal inequality follows from the discrete $L^2$ inequality on successively finer finite grids; continuity identifies the grid supremum with the full supremum, and monotone convergence completes the passage.

Choose a subsequence whose successive $\mathcal H_T$ distances have summable squares of suitably fast decay, for example distances at most $2^{-j}$. The expected sup-norm distances of its integral processes are then summable by the displayed estimate. Tonelli implies their sup-norm distances have a finite sum almost surely. The subsequence converges uniformly almost surely to a continuous process, and the full sequence converges to it in the expected squared supremum norm. At fixed times this limit equals the terminal $L^2$ construction for $H1_{(0,t]}$, so the definitions are consistent.

Adaptedness passes to fixed-time limits in a completed filtration. Conditional expectation is a contraction in $L^2$, so passing to the limit in $\mathbb E[M_t^{(n)}\mid\mathcal F_s]=M_s^{(n)}$ proves the martingale property. The resulting continuous version is unique up to indistinguishability: equality at rational times and continuity imply equality at all times outside one common null event. This is stronger than merely defining unrelated terminal random variables for each $t$.

## A direct chain-rule calculation without formal differentials

The identity for $B_t^2$ in the original worked example can be proved from this construction, without importing general Itô's formula. For a deterministic partition,
\[
 B_T^2=2\sum_k B_{t_k}(B_{t_{k+1}}-B_{t_k})
          +\sum_k(B_{t_{k+1}}-B_{t_k})^2.
\]
The left-step process $H^\pi_s=B_{t_k}$ on $(t_k,t_{k+1}]$ satisfies
\[
 \mathbb E\int_0^T|B_s-H^\pi_s|^2\,ds
 =\frac12\sum_k(t_{k+1}-t_k)^2\le T|\pi|/2.
\]
Although its coefficients are unbounded, truncating them gives bounded elementary approximations in $\mathcal H_T$, so their integrals have the same extension. Isometry makes the first sum converge in $L^2$ to $\int_0^T B_s\,dB_s$. The quadratic-variation sum converges in $L^2$ to $T$. Passing to the limit proves
\[
 \int_0^T B_s\,dB_s=(B_T^2-T)/2.
\]
Applying this at rational $T$ and using continuous versions establishes the process identity simultaneously in time. The algebra and the two controlled limits explain the second-order term.

## Worked example 15.3: a deterministic kernel and its law

Let $J_T=\int_0^T s\,dB_s$. Its integrand belongs to $\mathcal H_T$ and isometry gives $\mathbb EJ_T=0$ and variance $T^3/3$. Elementary approximations are linear combinations of independent normal increments, hence centred Gaussian. Their variances converge to $T^3/3$; convergence in $L^2$ and the corresponding characteristic functions show $J_T\sim N(0,T^3/3)$ for $T>0$.

Summation by parts on a partition gives
\[
 \sum_k t_k(B_{t_{k+1}}-B_{t_k})
 =TB_T-\sum_k B_{t_{k+1}}(t_{k+1}-t_k).
\]
Continuity makes the last sum converge pathwise to $\int_0^T B_s\,ds$. The first sum converges in probability to $J_T$, so uniqueness of probability limits identifies
\[
 J_T=TB_T-\int_0^T B_s\,ds
\]
almost surely. A deterministic bounded-variation coefficient permits this extra pathwise identity. It does not turn all predictable stochastic integrals into ordinary pathwise Riemann–Stieltjes integrals.

For example, the random predictable integrand $H_s=B_s$ gives a terminal value proportional to $B_T^2-T$, which is not Gaussian for $T>0$: it is bounded below by $-T/2$ and has positive variance. Isometry controls a second moment and does not by itself establish a normal distribution. Gaussianity of a deterministic-integrand integral needs the independent Gaussian linear-sum argument just supplied.

## Imported formula, localisation and true martingales

The original one-dimensional Itô formula is used as an imported advanced theorem for general continuous Itô processes. Its differential Taylor paragraph is explicitly heuristic. A precise integral reading is
\[
 f(X_t)=f(X_0)+\int_0^t f'(X_s)b_s\,ds
 +\int_0^t f'(X_s)\sigma_s\,dB_s
 +\frac12\int_0^t f''(X_s)\sigma_s^2\,ds.
\]
Here $X$ is a continuous adapted Itô process, $f\in C^2(\mathbb R)$, and on each bounded horizon the stated integrals of $|b|+\sigma^2$ are finite almost surely. The formula holds after localisation and hence simultaneously for all times for continuous versions. The corresponding time-dependent form for $f\in C^{1,2}$ adds $\int f_t\,ds$; it is the imported form used for exponential and deterministic-product calculations. No proof of the general formula is claimed by writing $(dB)^2=dt$.

For a predictable $H$ with only $\int_0^T H_s^2\,ds<\infty$ almost surely, define stopping times when this accumulated integral reaches integer levels, also stopping at deterministic horizons if necessary. Each stopped integrand has finite expected energy, so the preceding construction applies. Stopped integrals agree on overlap by isometry. Their consistent localisation defines a continuous local martingale. These local assumptions alone do not prove it is an integrable, expectation-preserving martingale without stopping.

A sufficient condition for a true square-integrable martingale on $[0,T]$ is $\mathbb E\int_0^T H_s^2\,ds<\infty$. In the exponential example $M_s=e^{B_s-s/2}$, $\mathbb EM_s^2=e^s$, so its energy integral is finite on every finite horizon. For the cubic example, $\mathbb E B_s^4=3s^2$ similarly proves that $\int B_s^2\,dB_s$ is a true martingale there. These moment checks, rather than the absence of a drift symbol alone, justify removing their stochastic integrals after taking expectations.

The positive initial value $S_0$ in the geometric Brownian example is assumed deterministic and strictly positive when $\log S_0$ is written. A random initial value requires time-zero measurability and the corresponding integrability for any expectation assertion. These qualifications attach hypotheses to the original calculations without changing their formulas.

## Further exercises

<a id="stochastic-integration-orientation-ex-4"></a>
### Exercise 15.4: energy of a two-step rule

For $T=2$, let $H_s=1$ on $(0,1]$ and $H_s=B_1$ on $(1,2]$. Compute the integral's mean and variance.

<details>
<summary>Hint 1</summary>

The second coefficient is known at the start of its interval.

</details>

<details>
<summary>Hint 2</summary>

Use isometry, or condition the cross term on F_1.

</details>

<details>
<summary>Solution</summary>

The integral is $I=B_1+B_1(B_2-B_1)$. Its mean is zero: the future increment is independent of $\mathcal F_1$ and centred. The energy is $\mathbb E\int_0^2H_s^2ds=1+\mathbb EB_1^2=2$, so the variance is two. Although $B_1$ is unbounded, truncation converges in the integrand norm and the construction applies. The future increment is independent of its coefficient, while the whole integral need not be Gaussian.

</details>

<a id="stochastic-integration-orientation-ex-5"></a>
### Exercise 15.5: the right-endpoint error

Compare the limits of $\sum B_{t_k}\Delta B_k$ and $\sum B_{t_{k+1}}\Delta B_k$ along deterministic vanishing-mesh partitions of $[0,T]$.

<details>
<summary>Hint 1</summary>

Subtract the two sums before passing to limits.

</details>

<details>
<summary>Hint 2</summary>

Their difference is a quadratic-variation sum.

</details>

<details>
<summary>Solution</summary>

The right-endpoint sum minus the left-endpoint sum equals $\sum(\Delta B_k)^2$, which tends to $T$ in $L^2$. The left sum tends to $(B_T^2-T)/2$, so the right sum tends to $(B_T^2+T)/2$. The right coefficient anticipates its increment and is not the predictable Itô rule used here. Equal sampling meshes do not remove this difference of limits.

</details>

<a id="stochastic-integration-orientation-ex-6"></a>
### Exercise 15.6: a covariance by isometry

For deterministic integrands on $[0,T]$, compute $\operatorname{Cov}(\int_0^T1\,dB_s,\int_0^Ts\,dB_s)$.

<details>
<summary>Hint 1</summary>

Use the bilinear form obtained by polarising isometry.

</details>

<details>
<summary>Hint 2</summary>

Integrate the product of the two deterministic coefficients.

</details>

<details>
<summary>Solution</summary>

Both integrals have mean zero, and the covariance is $\int_0^T s\,ds=T^2/2$. The first integral is $B_T$. For $T>0$, their variances are $T$ and $T^3/3$, so their correlation is $\sqrt3/2$. Their joint Gaussian law follows by approximating both with deterministic Gaussian linear sums; the covariance computation alone would not establish joint Gaussianity for random integrands.

</details>

<a id="stochastic-integration-orientation-ex-7"></a>
### Exercise 15.7: square-integrable Brownian integrands

Show $H_s=B_s$ belongs to $\mathcal H_T$ and compute the variance of its integral in two ways.

<details>
<summary>Hint 1</summary>

Use continuity and adaptedness for predictability.

</details>

<details>
<summary>Hint 2</summary>

Compare the energy integral with the fourth moment of B_T.

</details>

<details>
<summary>Solution</summary>

The process is continuous adapted and hence predictable. Its energy is $\int_0^T\mathbb EB_s^2ds=T^2/2$, finite. Isometry gives integral variance $T^2/2$. Independently the identity $I=(B_T^2-T)/2$ gives variance $(3T^2-T^2)/4=T^2/2$. This agreement checks the correction term; dropping it would already make the integral's mean incorrect.

</details>

<a id="stochastic-integration-orientation-ex-8"></a>
### Exercise 15.8: independence of the approximation

Two elementary sequences converge to the same $H$ in $\mathcal H_T$. Prove they define the same terminal integral.

<details>
<summary>Hint 1</summary>

Apply isometry to the difference of the elementary approximations.

</details>

<details>
<summary>Hint 2</summary>

Bound their difference by their two distances to H.

</details>

<details>
<summary>Solution</summary>

If the approximations are $H_n,K_n$, then $\|I_T(H_n)-I_T(K_n)\|_2=\|H_n-K_n\|_{\mathcal H_T}\le\|H_n-H\|_{\mathcal H_T}+\|K_n-H\|_{\mathcal H_T}\to0$. Each terminal sequence is Cauchy by the same isometry. Completeness supplies its limit and the vanishing difference makes those limits equal almost surely. This establishes uniqueness of the extension, not convergence of arbitrary pathwise sums.

</details>

<a id="stochastic-integration-orientation-ex-9"></a>
### Exercise 15.9: a time singularity

For deterministic $H_s=s^{-\alpha}$ on $(0,T]$, determine when the square-integrable Itô integral from zero exists in this construction.

<details>
<summary>Hint 1</summary>

Inspect the energy near zero.

</details>

<details>
<summary>Hint 2</summary>

The exponent in the energy integral is minus twice alpha.

</details>

<details>
<summary>Solution</summary>

The energy is $\int_0^T s^{-2\alpha}ds$. It is finite exactly when $\alpha<1/2$, and then equals $T^{1-2\alpha}/(1-2\alpha)$. At $\alpha=1/2$ it diverges logarithmically and above it diverges as a power. In the latter cases this deterministic integrand also has infinite accumulated squared energy on every interval starting at zero, so the chapter's locally finite-energy extension does not repair the starting-time singularity.

</details>

<a id="stochastic-integration-orientation-ex-10"></a>
### Exercise 15.10: a cubic martingale check

Verify the stochastic integral in the original cubic example is a true martingale on every finite horizon. Explain why this is stronger than a formal zero-drift calculation.

<details>
<summary>Hint 1</summary>

Compute the expected energy of 3B_s squared as an integrand.

</details>

<details>
<summary>Hint 2</summary>

Use E B_s to power four equal to 3s squared.

</details>

<details>
<summary>Solution</summary>

The integrand in $B_t^3-3\int_0^tB_sds=3\int_0^tB_s^2dB_s$ is $3B_s^2$. Its expected energy is $9\int_0^T3s^2ds=9T^3<\infty$. The integral is therefore square-integrable and a true mean-zero martingale. A local martingale with no displayed drift need not have expectation zero; the finite expected-energy calculation is the sufficient condition here.

</details>

## Looking backward and forward

Stochastic integration extends the notion of integration to integrators with unbounded variation. The Itô integral preserves the martingale property but requires a second-order correction in the chain rule.

In Chapter 13, "Brownian Motion," we established the path properties that make stochastic calculus necessary: nonzero quadratic variation and nowhere differentiability. In this chapter, we have seen how those properties manifest in the Itô formula.

The full theory of stochastic differential equations — existence, uniqueness, strong and weak solutions, and the martingale problem — requires a dedicated course. Standard references include Karatzas and Shreve, and Revuz and Yor. The claims in this chapter are rigorous for the cases considered, but the general theory goes much deeper.


The next [SDEs, Diffusions and Generators](sdes-diffusions-generators.md) chapter proves the global Lipschitz case of strong existence and pathwise uniqueness. That scoped result does not replace the broader strong/weak, boundary or martingale-problem theory named above.

## Sources

The original orientation, isometry proof, worked calculations, three questions, full answers and distinctions between the cubic compensators are preserved. Karatzas and Shreve and Revuz and Yor remain the original general references. For primary author treatments see Lawler, [Stochastic Calculus: An Introduction with Applications](https://www.math.uchicago.edu/~lawler/finbook.pdf), sections 3.2–3.4 and 4.1, and Pitman and Yor, [A Guide to Brownian Motion and Related Stochastic Processes](https://www.stat.berkeley.edu/~aldous/205B/pitman_yor_guide_bm.pdf), section 5. The general Itô formula and the progressive-to-predictable representative theorem are explicit analytical imports; the elementary isometry, density argument and completion construction are given locally.

## Additional exercises

### Exercise 15.11
<a id="stochastic-integration-orientation-ex-11"></a>

Find the variance of $\int_0^T2s\,dB_s$.

<details>
<summary>Hint 1</summary>

Use the isometry.
</details>
<details>
<summary>Hint 2</summary>

Square the deterministic integrand before integrating.
</details>
<details>
<summary>Solution</summary>

The variance is $\int_0^T4s^2ds=4T^3/3$, and the mean is zero. Because the integrand is deterministic, the integral is Gaussian. Squaring its ordinary time integral would answer a different question.
</details>

### Exercise 15.12
<a id="stochastic-integration-orientation-ex-12"></a>

Calculate the mean and variance of $\int_0^TB_s\,dB_s$.

<details>
<summary>Hint 1</summary>

Use zero-mean martingale integration and the isometry.
</details>
<details>
<summary>Hint 2</summary>

The Brownian second moment at s equals s.
</details>
<details>
<summary>Solution</summary>

The mean is zero and variance is $\int_0^Ts\,ds=T^2/2$. The identity $(B_T^2-T)/2$ gives the same result from Gaussian fourth moments. Its distribution is a centred scaled chi-square transformation rather than a centred Gaussian.
</details>

### Exercise 15.13
<a id="stochastic-integration-orientation-ex-13"></a>

Explain why a coefficient B_T used on the whole interval is not a simple predictable integrand for the natural Brownian filtration.

<details>
<summary>Hint 1</summary>

It reveals the future endpoint at time zero.
</details>
<details>
<summary>Hint 2</summary>

The interval coefficient must be known before its increment.
</details>
<details>
<summary>Solution</summary>

For the one-step interval $(0,T]$, the coefficient must be measurable at time zero. The nondegenerate variable $B_T$ is not. The formal product $B_T(B_T-B_0)=B_T^2$ has mean $T$, contradicting the zero-mean conclusion of the predictable-integral theorem. The missing hypothesis explains the discrepancy.
</details>

### Exercise 15.14
<a id="stochastic-integration-orientation-ex-14"></a>

What is the limit of right-endpoint sums for the integrand B_s?

<details>
<summary>Hint 1</summary>

Subtract the left-endpoint sum.
</details>
<details>
<summary>Hint 2</summary>

The difference is the squared-increment sum.
</details>
<details>
<summary>Solution</summary>

The limit is $(B_T^2+T)/2$, since the left sum tends to $(B_T^2-T)/2$ and quadratic variation tends to $T$. Changing the endpoint convention changes the integral. It is not an alternative approximation to the same predictable integral without a correction.
</details>

### Exercise 15.15
<a id="stochastic-integration-orientation-ex-15"></a>

Apply the Brownian chain rule to f(x)=sin(x).

<details>
<summary>Hint 1</summary>

Compute both derivatives.
</details>
<details>
<summary>Hint 2</summary>

The second derivative is minus sin(x).
</details>
<details>
<summary>Solution</summary>

The formula is $d\sin(B_t)=\cos(B_t)dB_t-\tfrac12\sin(B_t)dt$. The stochastic term is a true square-integrable martingale on bounded horizons because the cosine integrand is bounded. The drift term is the quadratic-variation correction.
</details>

### Exercise 15.16
<a id="stochastic-integration-orientation-ex-16"></a>

Why is the Ito integral well-defined independently of its simple-process approximation?

<details>
<summary>Hint 1</summary>

Compare two approximation sequences.
</details>
<details>
<summary>Hint 2</summary>

The isometry controls their integral difference.
</details>
<details>
<summary>Solution</summary>

If both sequences approach the same integrand in integrated L2, their difference tends to zero in that norm. The isometry then makes their terminal integral difference tend to zero in L2, forcing the same limit. The maximal inequality gives the corresponding process-level identification.
</details>

### Exercise 15.17
<a id="stochastic-integration-orientation-ex-17"></a>

When does a locally square-integrable integrand give only a local martingale rather than the finite-horizon theorem's square-integrable martingale?

<details>
<summary>Hint 1</summary>

Pathwise finite integral energy does not imply finite expected energy.
</details>
<details>
<summary>Hint 2</summary>

Localise before using the isometry.
</details>
<details>
<summary>Solution</summary>

If $\int_0^TH_s^2ds$ is finite almost surely but its expectation is not known finite, stop when its accumulated energy exceeds an integer. Each stopped integral has square-integrable control, giving a local martingale. Removing the stop does not by itself justify a zero ordinary expectation or a finite second moment; those need extra integrability.
</details>

## Summary

Left-endpoint information makes elementary stochastic integrals centred and isometric. Predictable-space density and $L^2$ completeness give a unique terminal extension; the maximal inequality constructs its continuous martingale version. Quadratic variation proves the square chain rule directly, while the general Itô formula is a precisely scoped imported theorem. Locally finite energy gives a local martingale; finite expected energy supplies the true square-integrable martingale needed for expectation identities. The next chapter uses this construction in a convergent Picard argument for SDEs.

Predictable step sums and the isometry define a unique L2 stochastic integral. Maximal control supplies a continuous martingale version. Taylor expansion and centred squared-increment estimates prove the Brownian C2 chain rule, while localisation handles unbounded derivatives. Endpoint conventions can change the limiting integral by quadratic variation. Random integrands need not produce Gaussian laws, and local square integrability alone does not establish a true mean-zero martingale. Continue to [SDEs, Diffusions and Generators](sdes-diffusions-generators.md).
