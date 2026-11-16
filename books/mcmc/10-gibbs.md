# 10. Gibbs sampling and augmentation

Gibbs sampling replaces a difficult joint draw with draws from conditional distributions. Its basic transition is exact in the sense that it preserves the specified joint target without a numerical integration step or a Metropolis rejection. That statement is narrower than it sounds. A sequence of conditional draws can remain strongly dependent, fail to cross disconnected parts of the support, or target the wrong joint distribution if its conditioning and update order are changed carelessly.

**Learning goals.** By the end of this chapter you should be able to derive full conditionals from a proper joint target, prove the invariance of a coordinate or block update, implement systematic and random scans, calculate the mixing rate in a Gaussian example, and distinguish blocking, collapsing, and augmentation. You should also be able to inspect a proposed partially collapsed sampler as a *whole transition*, rather than approving each line merely because it resembles a conditional draw.

**Prerequisites.** Conditional probability and multivariate normals from [Chapter 2](02-probability.md), posterior propriety from [Chapter 3](03-bayesian-targets.md), invariant kernels from [Chapter 7](07-finite-chains.md), general-state convergence from [Chapter 8](08-convergence.md), and conditional Metropolis updates from [Chapter 9](09-metropolis-hastings.md) are useful. [Chapter 6](06-variance-reduction.md) develops conditional-expectation estimators, which are related to but distinct from collapsing a chain.

## 10.1 A joint target determines the conditionals

Let $X=(X_1,\ldots,X_d)$ have a **proper** target distribution $\pi$ on a product state space. For a density with respect to a product reference measure, write $x_{-i}$ for all coordinates except $x_i$. Wherever the marginal $\pi_{-i}(x_{-i})$ is finite and positive, the full conditional density is

$$
\pi_i(x_i\mid x_{-i})
=\frac{\pi(x_i,x_{-i})}{\int\pi(u,x_{-i})\,du}.
$$

Terms that do not depend on $x_i$ may be dropped while deriving the *shape* of this density; the remaining expression still needs normalization before one can sample it. A factor dropped for the $i$th conditional may depend on $x_j$ and must then appear in the $j$th conditional. A full conditional is not the marginal $\pi_i(x_i)=\int\pi(x_i,x_{-i})\,dx_{-i}$: the former retains the other coordinates as known values, whereas the latter integrates them away.

Support is part of the conditional, not an afterthought. Imagine a target supported only on a diagonal strip in the $(x,y)$ plane. At fixed $y$, a horizontal conditional draw is limited to the strip's intersection with that horizontal line. The normalization depends on $y$, and a proposed value outside the intersection has probability zero. In the extreme two-point target with mass only at $(0,0)$ and $(1,1)$, either coordinate is completely determined by the other. Its Gibbs updates cannot move at all. The geometry of conditional support can decide whether a sampler works before any autocorrelation is calculated.

Starting from a proper joint law also matters. Writing down individually normalized expressions called “$X\mid Y$” and “$Y\mid X$” does not, by itself, prove that they are compatible conditionals of one proper joint law. For example, formal conditionals $X\mid Y=y\sim N(y,1)$ and $Y\mid X=x\sim N(x,1)$ suggest a density proportional to $\exp[-(x-y)^2/2]$, which has infinite integral along the $(1,1)$ direction. The formal update is a random walk there, not a sampler for a probability distribution. Derive from the joint and check posterior propriety as in [Chapter 3](03-bayesian-targets.md).

## 10.2 Why a coordinate update is invariant

Fix coordinate $i$. A Gibbs kernel retains $x_{-i}$ and replaces $x_i$ by an exact conditional draw:

$$
K_i(x,dy)=\pi_i(dy_i\mid x_{-i})\,\delta_{x_{-i}}(dy_{-i}).
$$

Here $\delta$ denotes a point mass. If $X\sim\pi$, disintegrate its distribution into the marginal of $X_{-i}$ and the conditional of $X_i$. Updating $X_i$ gives, for fixed $x_{-i}$, an old and a new value drawn independently from the *same* conditional. The joint measure of the old and new states is

$$
\pi_{-i}(dx_{-i})\,
\pi_i(dx_i\mid x_{-i})\,
\pi_i(dy_i\mid x_{-i}),
\qquad y_{-i}=x_{-i}.
$$

The two conditional factors can be interchanged. Thus $K_i$ satisfies detailed balance and, in particular, $\pi K_i=\pi$. On the standard Borel spaces normally used for statistical models, regular conditionals exist but are defined only $\pi_{-i}$-almost everywhere. Code still needs a specified behavior at its admissible starting states and at numerical boundary cases; an abstract almost-everywhere statement is not an implementation rule.

Gibbs is also a special conditional Metropolis–Hastings proposal: propose $y_i$ from the exact $\pi_i(\cdot\mid x_{-i})$, retain $x_{-i}$, and the Hastings ratio is one wherever defined. This explains the lack of rejection. It does **not** say successive states are independent or even that the full chain can reach every part of the target. If direct conditional simulation is unavailable, a valid Metropolis transition *within* the conditional can replace $K_i$; its proposal, acceptance ratio, and support conditions then need their own proof as in [Chapter 9](09-metropolis-hastings.md).

## 10.3 The scan schedule is part of the algorithm

A systematic sweep visits coordinates in a fixed order. The critical implementation detail is that each later update conditions on values already refreshed earlier in the same sweep:

```text
Given x and full-conditional samplers:
for i = 1,...,d:
    x_i <- exact draw from pi_i(. | x_1,...,x_(i-1),x_(i+1),...,x_d)
record x after the whole sweep
```

In operator notation the sweep kernel is the ordered composition $K_1K_2\cdots K_d$ (with each operator applied in the displayed order). Because $\pi K_i=\pi$ for each update, $\pi K_1K_2\cdots K_d=\pi$. A composition of reversible kernels is generally **not** reversible; invariance follows without that extra property. The sequence recorded at sweep boundaries is a homogeneous Markov chain. If one instead records after *every* update under a fixed cycle, the transition rule changes with the coordinate phase; phase should be included in the state before treating that sequence as one homogeneous chain.

A random-scan **step** chooses an index from fixed, state-independent weights $w_i>0$, with $\sum_iw_i=1$, then applies its conditional update:

```text
At each step:
    draw I with P(I=i) = w_i
    x_I <- exact draw from pi_I(. | x_-I)
```

Its kernel $K=\sum_iw_iK_i$ is a mixture of reversible kernels with the same target and is therefore reversible. Nonuniform weights are allowed, but a rule that changes weights with the current state is a different kernel and needs its own invariance argument. A fresh random permutation of all coordinates per sweep is another schedule: it gives exactly one update per coordinate each sweep, whereas random scan may revisit a coordinate and miss another. [He and coauthors' scan-order study](https://arxiv.org/abs/1606.03432) shows why order cannot be dismissed as a purely cosmetic choice in every model.

Compare these methods at equal computational work. One systematic sweep costs $d$ coordinate updates; one random-scan step costs one. A chart labeled “iterations” is misleading if it puts one of each on the same horizontal scale.

## 10.4 Worked example: a correlated normal

Consider a centered bivariate normal target with unit marginal variances and correlation $|\rho|<1$:

$$
\pi(x,y)\propto
\exp\left[-\frac{x^2-2\rho xy+y^2}{2(1-\rho^2)}\right].
$$

Hold $y$ fixed and complete the square in $x$: $x^2-2\rho xy+y^2=(x-\rho y)^2+(1-\rho^2)y^2$. The last term is constant as a function of $x$. Therefore

$$
X\mid Y=y\sim N(\rho y,1-\rho^2),
\qquad Y\mid X=x\sim N(\rho x,1-\rho^2).
$$

Let one sweep update $X$ and then $Y$. With independent standard normal noises $\epsilon_t,\eta_t$,

$$
X_{t+1}=\rho Y_t+\sqrt{1-\rho^2}\,\epsilon_t,
\qquad
Y_{t+1}=\rho X_{t+1}+\sqrt{1-\rho^2}\,\eta_t.
$$

Substitution eliminates the intermediate coordinate:

$$
Y_{t+1}=\rho^2Y_t+\rho\sqrt{1-\rho^2}\,\epsilon_t
             +\sqrt{1-\rho^2}\,\eta_t.
$$

This is an AR(1) recursion with coefficient $\rho^2$. Its innovation variance is $(1-\rho^2)(1+\rho^2)=1-\rho^4$, giving stationary variance one. At stationarity, the lag-$k$ correlation of the **sweep-boundary $Y$ series** is $\rho^{2k}$. Using the convention $\tau_{\mathrm{int}}=1+2\sum_{k\ge1}\operatorname{Corr}(Y_0,Y_k)$, its integrated autocorrelation time is

$$
\tau_{\mathrm{int}}=\frac{1+\rho^2}{1-\rho^2}.
$$

At $\rho=0.95$, the conditional standard deviation is $\sqrt{0.0975}\approx0.312$, the lag-one correlation is $0.9025$, and $\tau_{\mathrm{int}}\approx19.51$ sweeps. Roughly speaking, a long stationary average of $Y$ has the variance of an independent average with about $1/19.51$ as many observations; exact finite-run uncertainty and initialization require more work. At $\rho=0$, the conditional draws are independent and $\tau_{\mathrm{int}}=1$. The formula belongs to this coordinate, order, target, and unit of work. It is not a universal Gibbs rate. Strong conditional correlation makes many accepted movements trace short horizontal and vertical segments along a narrow tilted cloud.

The [original illustration](figures/10.svg) places a sequence of horizontal and vertical coordinate moves over Gaussian contours. The segments depict algorithmic transitions, not physical trajectories.

<div class="mcmc-lab" data-lab="gibbs"></div>

In the Gaussian Gibbs lab, raise the target correlation from a value near zero toward the control's maximum of $0.99$, and predict how conditional widths and movement along the long axis change. The sample-count control counts complete $X$-then-$Y$ sweeps, with two coordinate draws per sample; keep that count fixed when comparing work. The scatterplot records sweep endpoints, and the trace and reported lag-one correlation use $X$. At stationarity $X$ also has lag-$k$ correlation $\rho^{2k}$. The lab starts at $(0,0)$ and removes no warmup, so its short-run statistic need not match this stationary formula. Change the seed to see sampling variation. The display illustrates this Gaussian mechanism; it does not establish mixing for a different hierarchical model or certify convergence from a finite trace.

## 10.5 Blocks, conditional independence, and stale values

A block $B\subseteq\{1,\ldots,d\}$ updates $x_B$ jointly from $\pi(x_B\mid x_{-B})$. The invariance proof in Section 10.2 applies without change after treating $x_B$ as one coordinate. Blocking strongly coupled variables may move farther through the target, but drawing a high-dimensional block can require a matrix factorization, rejection method, or its own inner sampler. A single exact draw of the entire normal vector would be independent of the previous state, yet may be far more expensive than a coordinate update.

For a multivariate normal $N(\mu,Q^{-1})$ with positive-definite precision $Q$, partition the centered vector into $B$ and its complement. Retaining terms involving $x_B$ in the quadratic form gives

$$
-\tfrac12(x_B-\mu_B)^\mathsf{T}Q_{BB}(x_B-\mu_B)
-(x_B-\mu_B)^\mathsf{T}Q_{B,-B}(x_{-B}-\mu_{-B}).
$$

Completing the square yields conditional covariance $Q_{BB}^{-1}$ and conditional mean

$$
\mu_B-Q_{BB}^{-1}Q_{B,-B}(x_{-B}-\mu_{-B}).
$$

Positive definiteness makes the principal block $Q_{BB}$ invertible. In software one normally solves a linear system rather than forming the inverse explicitly. Conditional independence can also permit simultaneous draws of *different* coordinates given unchanged outside variables, but it must follow from a factorization of the relevant joint conditional.

The bivariate normal gives a sharp counterexample to casual parallelization. Suppose both new coordinates use the **old** pair:

$$
X_{t+1}=\rho Y_t+s\epsilon_t,
\qquad Y_{t+1}=\rho X_t+s\eta_t,
\qquad s=\sqrt{1-\rho^2}.
$$

At a stationary law, both marginal variances are one. But if its contemporaneous covariance is $c$, independence of the two innovations gives $c=\rho^2c$, hence $c=0$ for $|\rho|<1$. The intended target has covariance $\rho$, so this stale-value “parallel sweep” is wrong when $\rho\ne0$. Each displayed line uses a correct conditional *in isolation*; their simultaneous combination is not the systematic Gibbs kernel. Related blocking and collapsing comparisons appear in [Liu, Wong, and Kong (1994)](https://www2.stat.duke.edu/~scs/Courses/Stat376/Papers/ConvergeRates/GibbsSampling/LiuWongKongBiometrika1994.pdf), with performance claims tied to their stated sampling schemes and estimands.

## 10.6 Collapsing integrates a variable out of the chain

For a joint target $\pi(a,b)$, define the marginal $\pi_A(a)=\int\pi(a,b)\,db$. One may construct a Markov kernel $L$ that leaves $\pi_A$ invariant, simulate only $A$, and then draw $B\mid A$ when a joint output is needed. If $A\sim\pi_A$ and the reconstruction is exact, $\pi_A(da)\pi(db\mid a)=\pi(da,db)$. This identity is the correctness argument for the reconstructed output. If only expectations of functions of $A$ are needed, no $B$ draw is necessary.

Collapsing changes the transition state. Rao–Blackwellization, discussed in [Chapter 6](06-variance-reduction.md), instead changes an *estimator*: for instance, replacing a sampled $h(A,B)$ by $E[h(A,B)\mid A]$ while leaving the chain intact. Both operations integrate over $B$, but their computational and dependence effects are distinct. Marginalizing can reduce dependence, yet computing the marginal density or drawing its conditional may be expensive. There is no universal ranking of asymptotic error **per second** for all observables and implementations. The structured estimator and augmentation comparisons of [Liu, Wong, and Kong](https://www2.stat.duke.edu/~scs/Courses/Stat376/Papers/ConvergeRates/GibbsSampling/LiuWongKongBiometrika1994.pdf) motivate analysis of the actual scheme and quantity being estimated.

The normal example makes the ideal case tangible: its $Y$ marginal is $N(0,1)$. Drawing $Y$ directly and then $X\mid Y$ produces independent joint pairs. For a complex model, the marginal may be less tractable than either full conditional. Collapsing is a design choice made after checking both the math and the cost.

## 10.7 Partial collapse needs a whole-kernel proof

It is tempting to replace just one full conditional in a sweep by a marginal draw. The replacement may invalidate the joint target even though both individual distributions are familiar. Return to the bivariate normal. Consider this schedule:

```text
X_new <- draw from pi(X | Y_old)
Y_new <- draw from pi(Y), independently of X_new
retain (X_new, Y_new)
```

At stationarity $X_{\mathrm{new}}$ has its correct $N(0,1)$ marginal, and $Y_{\mathrm{new}}$ does too. But the final $Y$ draw is independent of $X_{\mathrm{new}}$, so the retained covariance is zero, not $\rho$. Looking only at two marginal histograms would miss this error. Reverse the operations—draw $Y_{\mathrm{new}}$ from its marginal, then $X_{\mathrm{new}}\mid Y_{\mathrm{new}}$—and every retained pair is an independent draw from $\pi$. The order matters because reconstruction must condition on the *new* value being retained.

In larger partially collapsed Gibbs schemes, marginalization, permutation of update order, and deletion of redundant draws have to be arranged so that the complete transition preserves the intended joint law. [van Dyk and Park (2008)](https://www.ma.imperial.ac.uk/~dvandyk/Research/08-jasa-pcg.pdf) analyze this issue. A useful audit is to write the distribution of the state after each line, then check the distribution at the precise point where samples are recorded. The word “conditional” on each code line is not a proof. This is especially important when the retained state includes latent variables whose joint dependence matters for posterior predictions.

### 10.7.1 When damaged dependence reaches a retained marginal

The normal example loses a joint feature while keeping both marginals correct. A later update can use that damaged dependence and give a third coordinate the wrong marginal. That output can even be independent over iterations. We will compose the complete transitions to distinguish precision around a wrong answer from sampling the target.

All three bits $X,Y,Z$ here are sampled coordinates of a separate stipulated target; $Y$ is not fixed observed mixture data. For $0<\alpha<1$, generate independent

$$
\begin{gathered}
X\sim\operatorname{Bernoulli}(\alpha),\quad
Z\sim\operatorname{Bernoulli}(1/3),\quad
E\sim\operatorname{Bernoulli}(1/4),\\
Y=X\oplus Z\oplus E.
\end{gathered}
$$

The symbol $\oplus$ is addition modulo two. The noise $E$ defines the target and is not a fourth retained coordinate. Write $p_\alpha,c,e$ for the three Bernoulli mass functions. The target mass is

$$
\pi_\alpha(x,y,z)=p_\alpha(x)c(z)e(x\oplus y\oplus z).
$$

For fixed $x,z$, the map from $E$ to $Y$ is bijective, so this is normalized and all eight masses are positive. Its reference probability is $E_{\pi_\alpha}Z=1/3$. Independence gives $\pi(X\mid Z)=\operatorname{Bernoulli}(\alpha)$. The other two conditionals follow from

$$
g(1\mid x,z):=P(Y=1\mid x,z)
=\frac14+\frac12\mathbf1\{x\ne z\}.
$$

Indeed, $W=X\oplus Y=Z\oplus E$ has probabilities $P(W=0)=7/12$ and $P(W=1)=5/12$. Therefore

$$
\begin{aligned}
r_0=P(Z=1\mid W=0)&=\frac{(1/3)(1/4)}{7/12}=\frac17,\\
r_1=P(Z=1\mid W=1)&=\frac{(1/3)(3/4)}{5/12}=\frac35.
\end{aligned}
$$

Let $\rho(w\mid u,v)=\pi(Z=w\mid X=u,Y=v)$, the Bernoulli mass with success probability $r_{u\oplus v}$. A sweep uses fresh randomness for each draw, and records its output only after all three updates. Time $t=0$ denotes an arbitrary initial state or initial law, not an assumed stationary draw. Compare

```text
good: X' | old Z;  Y' | X', old Z;  Z' | X', Y'
bad:  Y' | old X, old Z;  X' | old Z;  Z' | X', Y'
```

For old state $s=(x,y,z)$ and new state $t=(u,v,w)$, the complete kernels are

$$
\begin{aligned}
K_G(s,t)&=p_\alpha(u)g(v\mid u,z)\rho(w\mid u,v),\\
K_B(s,t)&=g(v\mid x,z)p_\alpha(u)\rho(w\mid u,v).
\end{aligned}
$$

The first two good draws reconstruct $(X,Y)\mid Z$. Consequently

$$
\begin{aligned}
\sum_s\pi_\alpha(s)K_G(s,t)
&=\pi_{\alpha,XY}(u,v)\rho(w\mid u,v)\\
&=\pi_\alpha(t).
\end{aligned}
$$

Both matrices have strictly positive entries and thus a unique stationary distribution. Positivity alone does not make that distribution the intended target. This comparison does not say that permutations of ordinary compatible full-conditional Gibbs updates change their invariant target: the reduced $X\mid Z$ draw has dropped $Y$ from its conditioning set. The ordering and reconstruction mechanism is discussed by [van Dyk and Park (2008)](https://www.ma.imperial.ac.uk/~dvandyk/Research/08-jasa-pcg.pdf), especially their Samplers 2–3 and permutation/trimming discussion. The three-bit construction and exact calculations here are separate derivations.

**Worked case: $\alpha=1/2$.** Let $\mathcal F_t$ contain the initial state, all completed states and all earlier draws. In a bad sweep, conditional on $\mathcal F_t$ and the new $Y'$, the new $X'$ is still an independent fair bit. Thus $X'\oplus Y'$ is fair, and

$$
\begin{aligned}
P(Z'=1\mid\mathcal F_t,Y')
&=\frac{r_0+r_1}{2}=\frac{13}{35},\\
P(Z'=1\mid\mathcal F_t)&=\frac{13}{35}.
\end{aligned}
$$

Iterated conditioning proves that $Z_1,Z_2,\ldots$ are iid Bernoulli$(13/35)$ from **any initial law**, at complete bad-sweep times. This statement excludes an arbitrary $Z_0$ and is stronger than zero lag-one correlation. The target is Bernoulli$(1/3)$, leaving bias $4/105$. An iid uncertainty calculation measures precision around $13/35$; more draws do not remove that bias.

The **full state is not iid**. Its next $Y$ probability is $1/4$ or $3/4$ according to the current $X\oplus Z$, and both cases have positive stationary probability. At stationarity the bad law is $q_*(x,y,z)=\rho(z\mid x,y)/4$: $X$ and $Y$ have their correct fair marginals but the wrong joint dependence. The final $Z$ update uses that dependence. Independence of one recorded function is not independence of the complete chain.

**Entry into a family is different from later recurrence.** For general $0<\alpha<1$, one complete bad sweep sends any input law $\mu$ into

$$
\begin{aligned}
q_b(x,y,z)&=p_\alpha(x)\operatorname{Bernoulli}_b(y)\rho(z\mid x,y),\\
b_1&=\frac14+\frac12P_\mu(X\ne Z).
\end{aligned}
$$

The first value depends on the initial $X,Z$ dependence, not the initial $Y$ marginal. Every entry has $b_1\in[1/4,3/4]$, and all subsequent values stay strictly interior. Under $q_b$ with $0<b<1$, direct summation gives

$$
\begin{aligned}
P(X\ne Z\mid Y=0)&=\frac17+\frac{9\alpha}{35},\\
P(X\ne Z\mid Y=1)&=\frac35+\frac{9\alpha}{35}.
\end{aligned}
$$

Only after entry may we combine these conditional probabilities to write

$$
b_{\rm next}=\frac{45+18\alpha}{140}+\frac8{35}b,
\qquad b_* = \frac{5+2\alpha}{12}.
$$

The fixed value is also the target $Y$ probability, since the target probabilities given $X=0,1$ are $5/12,7/12$. Thus $q_{b_*}$ has correct $X$ and $Y$ marginals. Nevertheless,

$$
\begin{aligned}
E_{q_b}Z&=\frac17+\frac{16}{35}\{\alpha+(1-2\alpha)b\},\\
E_{q_{b_*}}Z&=\frac13+\frac{16\alpha(1-\alpha)}{105}.
\end{aligned}
$$

For $t\ge1$ complete sweeps the full output is $q_{b_t}$, where

$$
b_t=b_*+(8/35)^{t-1}(b_1-b_*).
$$

Write $\|\nu-\eta\|_{\rm TV}=\tfrac12\sum_s|\nu(s)-\eta(s)|$. The two $Y$ components have disjoint supports and common normalized conditional laws, so

$$
\|\mu K_B^t-q_{b_*}\|_{\rm TV}
=|b_1-b_*|(8/35)^{t-1}.
$$

This is convergence to the bad stationary law. Factoring out the common $Z\mid X,Y$ conditional instead yields

$$
\begin{aligned}
\|q_b-\pi_\alpha\|_{\rm TV}
&=(1-\alpha)|b-5/12|\\
&\quad+\alpha|b-7/12|,\\
\|q_{b_*}-\pi_\alpha\|_{\rm TV}
&=\frac{\alpha(1-\alpha)}3>0.
\end{aligned}
$$

The last value is the **limiting** distance from the target, not a lower bound at every finite time. Its difference from the finite-time distance is at most the displayed distance to $q_{b_*}$, by the reverse triangle inequality. The factorized $q_b$ laws and recurrence/TV identities also extend algebraically to $b=0,1$; the conditional derivation assumes $0<b<1$ and assigns no unique conditional on a null $Y$ event. Endpoints $\alpha=0,1$ are excluded from the positive-eight-state argument.

For comparison, the good order has the $Z$ transition matrix

$$
P_{Z,G}=\begin{pmatrix}26/35&9/35\\18/35&17/35\end{pmatrix}.
$$

To derive a row, draw $W=Z_{\rm old}\oplus E$ and then $Z_{\rm new}$ from probability $r_W$. Its stationary probability of one is $1/3$, and with $p_0=P_\mu(Z=1)$,

$$
P_\mu(Z_t=1)=\frac13+(8/35)^t(p_0-1/3).
$$

The full good output at $t\ge1$ is a mixture of its two laws given old $Z$. Their TV distance is $1/2$: this is the distance between the two $(X,Y)\mid Z$ reconstruction laws, unchanged by multiplying by their common final $\rho$. Hence

$$
\|\mu K_G^t-\pi_\alpha\|_{\rm TV}
=\frac12|p_0-1/3|(8/35)^{t-1}.
$$

The correct chain can be serially dependent while the wrong chain's reported $Z$ is iid. These are different questions: what law does the complete transition preserve, and how uncertain is an estimate from its outputs?

The additive exact reference in `examples/ch10.py` constructs the target masses, derives all conditionals by summing them, and composes the two eight-state kernels over intermediate states. Its explicit finite scope is $\alpha\in\{1/2,1/3\}$ with rational arithmetic; the default report shows only the worked $\alpha=1/2$ case. Finite matrix and history checks support those cases. The all-$\alpha$ and all-time statements above rest on their displayed proofs, rather than treating a finite computation as a general certificate. No additional sampler is run.

## 10.8 Augmentation expands a target to simplify draws

Data augmentation goes in the opposite algebraic direction from collapsing. Given a target $\pi(\theta\mid y)$, construct a joint law $\pi(\theta,z\mid y)$ satisfying

$$
\int\pi(\theta,z\mid y)\,dz=\pi(\theta\mid y).
$$

One can alternate exact draws from $z\mid\theta,y$ and $\theta\mid z,y$. Each is a Gibbs update for the augmented joint law, so their composition preserves that law. Marginalizing the invariant augmented law shows that retained $\theta$ values have the desired posterior distribution at stationarity. This proof is about the model's *extended target*; it does not rely on the latent variable being physically real. Some $z$ describe unobserved scientific quantities, while others exist solely to make a conditional easy to simulate. Tanner and Wong's [data-augmentation paper](https://users.wpi.edu/~balnan/Tanner-Wong-1987.pdf) is an early statistical treatment of this computational strategy.

For a compact example, let $Z_i=x_i^\mathsf{T}\beta+\epsilon_i$ with independent $\epsilon_i\sim N(0,1)$ and observe $Y_i=\mathbf1[Z_i>0]$. Integrating $Z_i$ out gives $P(Y_i=1\mid\beta)=\Phi(x_i^\mathsf{T}\beta)$, the probit likelihood. Given $Y_i$ and $\beta$, the latent normal is truncated above or below zero; under suitable normal priors, $\beta\mid Z$ is Gaussian. This representation is associated with [Albert and Chib (1993)](https://users.wpi.edu/~balnan/Albert-Chib-1993.pdf). Drawing a truncated normal robustly in extreme tails needs numerical care, so the executable example below uses an ordinary normal augmentation instead. Adding latent dimensions can simplify each line while increasing serial dependence; correctness and efficiency are separate questions.

### 10.8a The marginal chain has additional structure

Suppress the fixed data $y$. For the exact two-block schedule $Z_{t+1}\mid\Theta_t$, then $\Theta_{t+1}\mid Z_{t+1}$, the retained parameter alone is Markov, with kernel

$$
P(\theta,d\theta')=\int\pi(dz\mid\theta)\pi(d\theta'\mid z).
$$

The old auxiliary value is discarded before use. At stationarity,

$$
\pi_\Theta(d\theta)P(\theta,d\theta')
=\int\pi_Z(dz)\pi(d\theta\mid z)\pi(d\theta'\mid z),
$$

which is symmetric in $\theta,\theta'$. Thus this marginal chain is reversible even when the joint sweep is not. Moreover, for square-integrable $h$, conditioning on the intervening $Z_{t+1}$ gives

$$
\operatorname{Cov}\{h(\Theta_t),h(\Theta_{t+1})\}
=\operatorname{Var}_{\pi_Z}\!\left(E_\pi[h(\Theta)\mid Z]\right)\ge0.
$$

The identity follows because the two parameter values are conditionally independent draws from the same distribution given that auxiliary value. These are the two-block results in [Liu, Wong, and Kong, Section 3, Lemmas 3.1–3.2](https://www2.stat.duke.edu/~scs/Courses/Stat376/Papers/ConvergeRates/GibbsSampling/LiuWongKongBiometrika1994.pdf). They require exact conditional draws and stationarity for the covariance statement. A short empirical autocorrelation can still be negative. With three or more blocks, a retained coordinate need not itself be Markov: the omitted coordinates can carry information from earlier sweeps. Exercise 7 checks the identity on a finite target.

## 10.9 Worked example: one missing normal observation

Suppose observed data are $y_1=0$ and $y_2=2$, each independently $N(\mu,1)$, while a third value $Z$ is missing. Put a $N(0,1)$ prior on $\mu$. Assume the observation process permits us to ignore the missing value in the observed-data likelihood; informative missingness would require a model for that process. The observed-data posterior follows by completing the square:

$$
\pi(\mu\mid y_{\mathrm{obs}})
\propto\exp\left[-\tfrac12\mu^2-\tfrac12(0-\mu)^2-\tfrac12(2-\mu)^2\right],
\qquad
\mu\mid y_{\mathrm{obs}}\sim N\left(\frac23,\frac13\right).
$$

More explicitly, the quadratic has precision $1+2=3$ and linear coefficient $0+2=2$, hence mean $2/3$ and variance $1/3$. Direct independent draws are available here and serve as a check on the MCMC construction.

The augmented target includes the missing value with $Z\mid\mu,y_{\mathrm{obs}}\sim N(\mu,1)$. Conditioning on a completed dataset gives posterior precision $1+3=4$ and sum of observations $2+Z$, so

$$
\mu\mid Z,y_{\mathrm{obs}}\sim N\left(\frac{2+Z}{4},\frac14\right).
$$

Draw $Z_{t+1}=\mu_t+\epsilon_t$ and then $\mu_{t+1}=(2+Z_{t+1})/4+\eta_t/2$, with independent standard normal $\epsilon_t,\eta_t$. Eliminating $Z$ gives

$$
\mu_{t+1}=\frac12+\frac14\mu_t+\frac14\epsilon_t+\frac12\eta_t.
$$

Its fixed mean solves $m=1/2+m/4$, or $m=2/3$. The innovation variance is $1/16+1/4=5/16$; dividing by $1-(1/4)^2=15/16$ gives stationary variance $1/3$. Its lag-one correlation is $1/4$, and its integrated autocorrelation time is $(1+1/4)/(1-1/4)=5/3$ for the sweep-boundary $\mu$ series. All of these match the intended posterior but expose a modest dependence cost relative to direct marginal draws. For more complicated missing-data models, the same augmentation may be worthwhile because the observed-data posterior is hard to sample directly.

The covariance identity in Section 10.8a gives an independent check: $\operatorname{Var}(Z\mid y_{\rm obs})=1+1/3=4/3$, so $\operatorname{Var}(E[\mu\mid Z,y_{\rm obs}])=(4/3)/16=1/12$. Dividing by $\operatorname{Var}(\mu\mid y_{\rm obs})=1/3$ recovers lag-one correlation $1/4$. When the latent data predict the parameter closely, this variance ratio approaches one and adjacent parameter draws become very similar.

Exercise 5 shows how augmentation can grow costly without adding observed information. With $n$ observed values, prior precision $q>0$, and $m$ missing values, the parameter's stationary variance remains $1/(q+n)$, but its sweep autocorrelation coefficient is $a=m/(q+n+m)$ and

$$
\tau_{\rm int}=\frac{1+a}{1-a}=1+\frac{2m}{q+n}.
$$

For our $q+n=3$, imputing $m=0,1,3,30$ values gives integrated autocorrelation times $1,5/3,3,21$. These are model-specific stationary calculations for the mean. Each sweep also draws $m$ latent normals, so its computational cost grows. The observed-data posterior is unchanged because integrating each missing observation's likelihood over that observation gives one under the assumed missingness model.

The reproducible [standard-library example](examples/ch10.py) simulates this chain and the direct posterior, correct and stale-value Gaussian updates, and both partial-collapse orders. It also checks the finite target in Exercise 7 and the generalized missing-data variance using exact fractions. Run `python examples/ch10.py`. Printed simulation moments and lag-one correlations are teaching checks against known answers, not convergence certificates. The random seed makes a result reproducible; it does not remove finite-run Monte Carlo error. [Chapter 13](13-mc-error.md) develops uncertainty estimates for dependent averages.

## 10.10 When a correct Gibbs kernel is still inadequate

The two-point support example from Section 10.1 has $\pi(0,0)=\pi(1,1)=1/2$. At $(0,0)$, both full conditionals are point masses at zero; at $(1,1)$, both are point masses at one. Every coordinate Gibbs update preserves $\pi$, but either starting state is absorbing. A joint block that redraws the pair from its two-state target restores communication. No number of coordinate sweeps fixes the original kernel. More generally, invariance alone is weaker than convergence from a given start. Irreducibility, aperiodicity, and appropriate general-state recurrence conditions must be established where relevant; [Chapter 8](08-convergence.md) gives those distinctions.

Even with connected support, a narrow ridge may make coordinate moves small, as in Section 10.4. Blocking can address some dependence, marginalization can remove a troublesome coordinate, and a different parameterization can change conditional geometry; see [Chapter 16](16-geometry.md). Each change needs a correct target and kernel argument. Scan order, factorization work, and conditional-simulation cost belong in the comparison. A useful design sequence is: derive a proper joint; derive and normalize its conditionals; inspect support; choose blocks and order; prove the *complete* transition invariant; then measure error for the estimand per unit of computation. Finally check initialization sensitivity and diagnostics without treating a finite diagnostic as a proof of convergence.

The same extended-target reasoning reappears for slice variables in [Chapter 11](11-slice.md), pseudo-marginal methods in [Chapter 27](27-pseudo-marginal.md), and particle methods in [Chapter 28](28-particle-mcmc.md). Applications with missing or latent data return in [Chapter 38](38-mixtures.md). These methods differ in how they introduce and update auxiliary randomness, but they share the obligation to state which joint law is invariant and which marginal is the desired answer.

## 10.11 Exercises

<div class="exercise" id="mcmc-10-gibbs-ex-1">

**1. Conditional algebra.** Starting from the bivariate normal density in Section 10.4, derive both full conditional distributions by completing the square. Explain where the term independent of the updated coordinate goes.

<details>
<summary>Solution</summary>

For fixed $y$, $x^2-2\rho xy+y^2=(x-\rho y)^2+(1-\rho^2)y^2$. The second term is constant in $x$ and enters only the normalizing factor. The remaining exponent is $-(x-\rho y)^2/[2(1-\rho^2)]$, so $X\mid Y=y\sim N(\rho y,1-\rho^2)$. Exchange $x$ and $y$ for the other conditional.

</details>

</div>

<div class="exercise" id="mcmc-10-gibbs-ex-2">

**2. Invariance without reversibility.** Let $K_X$ and $K_Y$ be exact coordinate Gibbs kernels for a joint target $\pi$. Prove that an $X$-then-$Y$ sweep preserves $\pi$. For the Gaussian example with $\rho\ne0$, show why this proof does not imply reversibility of the sweep.

<details>
<summary>Solution</summary>

Since $\pi K_X=\pi$ and $\pi K_Y=\pi$, associativity gives $\pi(K_XK_Y)=(\pi K_X)K_Y=\pi$. Under a stationary $X$-then-$Y$ sweep, $E[X_tY_{t+1}]=\rho E[X_tX_{t+1}]=\rho^3$, because $X_{t+1}=\rho Y_t+s\epsilon_t$ and $E[X_tY_t]=\rho$. But $E[Y_tX_{t+1}]=\rho$. Reversibility would make these time-reversed cross moments equal, so the sweep is not reversible when $0<|\rho|<1$.

</details>

</div>

<div class="exercise" id="mcmc-10-gibbs-ex-3">

**3. A stale parallel update.** Both coordinates of a bivariate $N(0,\Sigma)$ target are updated from the old state with independent normal noises as in Section 10.5. Find the stationary marginal variances and covariance for $|\rho|<1$.

<details>
<summary>Solution</summary>

Writing the stationary variances as $v_X,v_Y$, the recursions give $v_X=\rho^2v_Y+1-\rho^2$ and $v_Y=\rho^2v_X+1-\rho^2$. Their unique solution is $v_X=v_Y=1$. The contemporaneous covariance obeys $c=\rho^2c$ because the new noises are independent and independent of the old pair. Thus $c=0$. The stationary normal law has covariance matrix $I$, whereas the intended target has off-diagonal entry $\rho$.

</details>

</div>

<div class="exercise" id="mcmc-10-gibbs-ex-4">

**4. Disconnected support.** Let $\pi$ put probability $1/2$ on each of $(0,0)$ and $(1,1)$ and zero elsewhere. Write the full conditionals, explain what a coordinate Gibbs chain does from either point, and give one repair.

<details>
<summary>Solution</summary>

On the target support, $P(X=Y\mid Y)=1$ and $P(Y=X\mid X)=1$. Every coordinate update leaves the state unchanged, so the kernel is reducible despite being invariant. Treat $(X,Y)$ as one block and draw $(0,0)$ or $(1,1)$ with probability $1/2$ each; that block kernel reaches both states and even gives independent draws. More coordinate sweeps of the original kernel do nothing.

</details>

</div>

<div class="exercise" id="mcmc-10-gibbs-ex-5">

**5. More missing values.** Generalize Section 10.9 to $n$ observed values with sum $S$, $m$ missing values, prior $\mu\sim N(0,\tau^2)$ with $0<\tau^2<\infty$, and independent $N(\mu,1)$ observations under the same missingness assumption. Derive the full conditional for $\mu$, the coefficient of $\mu_t$ in a sweep that draws all missing values and then $\mu$, and the stationary variance and integrated autocorrelation time.

<details>
<summary>Solution</summary>

Set $q=\tau^{-2}$. Given imputed values $z_1,\ldots,z_m$, conjugacy gives $\mu\mid z,y_{\rm obs}\sim N((S+\sum_jz_j)/(q+n+m),1/(q+n+m))$. Conditional on $\mu_t$, each $z_j=\mu_t+\epsilon_j$, so substituting into the next mean gives an AR coefficient $a=m/(q+n+m)$ and intercept $S/(q+n+m)$. Its stationary mean is $S/(q+n)$, matching the observed-data posterior $N(S/(q+n),1/(q+n))$. Direct draws from that marginal are independent in this conjugate example.

Writing $D=q+n+m$, the innovation variance is $v=m/D^2+1/D=(D+m)/D^2$. Since $1-a^2=(D-m)(D+m)/D^2$, the stationary variance is $v/(1-a^2)=1/(q+n)$. Finally, $\tau_{\rm int}=(1+a)/(1-a)=1+2m/(q+n)$. The case $m=0$ reduces to independent posterior draws. For fixed $q+n$, increasing $m$ leaves the posterior variance unchanged while increasing serial dependence.

</details>

</div>

<div class="exercise" id="mcmc-10-gibbs-ex-6">

**6. A partial-collapse audit.** A program draws $X_{t+1}\sim\pi(X\mid Y_t)$, then draws $Y_{t+1}\sim\pi_Y$ independently, and stores the pair. Both stored marginals look correct for the correlated normal target. Find a joint statistic that detects the error and repair the order.

<details>
<summary>Solution</summary>

The final $Y_{t+1}$ is independent of $X_{t+1}$, so $E[X_{t+1}Y_{t+1}]=0$, whereas the target expectation is $\rho$. The sample covariance or a plot of paired draws reveals the error. Draw $Y_{t+1}\sim\pi_Y$ first and then $X_{t+1}\sim\pi(X\mid Y_{t+1})$. The stored pair then has density $\pi_Y(y)\pi(x\mid y)=\pi(x,y)$.

</details>

**Changed task: a correct first mean before a wrong limit.** For the three-bit target in Section 10.7.1, change to $\alpha=1/3$ and initialize $(X_0,Y_0,Z_0)=(0,0,0)$. Use the bad sweep and record only complete sweeps. Derive its first entry parameter $b_1$, subsequent recurrence, stationary $Y$ and $Z$ probabilities, and $E Z_t$ for $t\ge1$. Is the worked case's iid statement still justified? Compute the target TV distances at sweeps 1 and 2 and their limit. Can the first $Z$ mean be correct while the transition is wrong? Give the repaired order and its exact full-state target distance from this start.

<details>
<summary>Optional hint for the changed partial-collapse task</summary>

Write the joint law immediately after one complete bad sweep as $q_b$: the new $X$ and $Y$ are independent, and then $Z$ is drawn conditional on that pair. The first $Y$ update uses old $X_0,Z_0$; it does not use $Y_0$. Apply the recurrence only after this entry law is established. Distinguish distance to the bad stationary law from distance to the target.

</details>

<details>
<summary>Solution for the changed partial-collapse task</summary>

The all-zero start gives $b_1=1/4$. Substituting $\alpha=1/3$ into the post-entry calculation gives

$$
\begin{aligned}
b_{\rm next}&=\frac{51}{140}+\frac8{35}b,\\
b_*&=\frac{17}{36},\qquad
E_{q_b}Z=\frac{31+16b}{105}.
\end{aligned}
$$

Thus the stationary $Y$ probability $17/36$ is correct, but the stationary $Z$ probability is $347/945$ rather than $1/3$. For $t\ge1$,

$$
\begin{aligned}
b_t&=\frac{17}{36}-\frac29(8/35)^{t-1},\\
E Z_t&=\frac{347}{945}-\frac{32}{945}(8/35)^{t-1}.
\end{aligned}
$$

In particular $E Z_1=1/3$ is coincidentally correct, while $b_2=59/140$ and $E Z_2=1321/3675$. These different means already rule out identically distributed outputs from this initialization, so the worked iid argument cannot be carried over. Other initial states give first-sweep $Z$ means $1/3$ or $43/105$; the first mean depends on initialization.

The full-law calculation is more informative than that first mean:

$$
\begin{aligned}
\|q_{b_1}-\pi_{1/3}\|_{\rm TV}&=\frac29,\\
\|q_{b_2}-\pi_{1/3}\|_{\rm TV}&=\frac2{35},\\
\lim_{t\to\infty}\|q_{b_t}-\pi_{1/3}\|_{\rm TV}&=\frac2{27}.
\end{aligned}
$$

The sweep-2 distance is smaller than the limiting distance. A positive limiting error is not a uniform finite-time floor, and an initially correct mean is not invariance. Meanwhile the distance to the bad stationary law is exactly $(2/9)(8/35)^{t-1}$.

Repair the order by drawing $X'\mid Z$, then $Y'\mid X',Z$, then $Z'\mid X',Y'$. This reconstructs the required pair before using it. From the stated start $p_0=0$, so the full good output satisfies

$$
\|\mu K_G^t-\pi_{1/3}\|_{\rm TV}
=\frac16(8/35)^{t-1},\qquad t\ge1.
$$

For example its first two distances are $1/6$ and $4/105$. The repair restores the target, with the same good $Z$ matrix as in the worked case; it does not make every complete state an independent draw.

</details>

</div>

<div class="exercise" id="mcmc-10-gibbs-ex-7">

**7. A finite augmentation kernel.** Let $\Theta,Z\in\{0,1\}$ have joint probability table

$$
\begin{array}{c|cc}
 & Z=0 & Z=1\\\hline
\Theta=0 & 2/5 & 1/10\\
\Theta=1 & 1/5 & 3/10
\end{array}
$$

For the schedule $Z\mid\Theta$ then $\Theta\mid Z$, derive the transition matrix of the retained $\Theta$ chain. Check detailed balance and the covariance identity in Section 10.8a for $h(\theta)=\theta$.

<details>
<summary>Solution</summary>

The marginals are $\pi_\Theta=(1/2,1/2)$ and $\pi_Z=(3/5,2/5)$. The probabilities of $Z=1$ given $\Theta=0,1$ are $1/5,3/5$, respectively; the probabilities of $\Theta=1$ given $Z=0,1$ are $1/3,3/4$. Thus $P(0,1)=(4/5)(1/3)+(1/5)(3/4)=5/12$ and $P(1,1)=(2/5)(1/3)+(3/5)(3/4)=7/12$, giving

$$
P=\begin{pmatrix}7/12&5/12\\5/12&7/12\end{pmatrix}.
$$

Both stationary off-diagonal flows equal $(1/2)(5/12)=5/24$, so detailed balance holds. Directly, $E[\Theta_t\Theta_{t+1}]=(1/2)(7/12)=7/24$, hence the covariance is $7/24-1/4=1/24$. From conditional expectations the same answer is $(3/5)(1/3-1/2)^2+(2/5)(3/4-1/2)^2=1/24$. The lag-one correlation is $(1/24)/(1/4)=1/6$.

</details>

</div>

## 10.12 Key takeaways

- An exact full-conditional update is reversible and invariant for a proper joint target, but a whole sweep need only be invariant.
- Fixed random scan is a reversible mixture; systematic scans and random permutations are distinct schedules. Compare them at equal coordinate-update cost.
- Strong correlation or disconnected conditional support can make an acceptance-one chain slow or reducible.
- Blocking draws a group jointly, collapsing samples a marginal, and augmentation adds variables to simplify conditionals. Each changes both computation and dependence.
- In exact two-block augmentation, the retained parameter chain is reversible, with nonnegative stationary lag-one covariance for every square-integrable function of that parameter.
- Partially collapsed schedules require a proof for the retained joint state. Correct marginal histograms can hide a wrong joint law.
- Finite simulations check known quantities and reveal problems; they do not prove convergence.
