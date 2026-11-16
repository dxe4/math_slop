# Worked answers for reporting window practice

Attempt [practice](./window_consistency_v1-practice.md), using the separate [hints](./window_consistency_v1-hints.md) if needed, before revealing a worked answer. Gamma parameters below are shape and rate. Conditional allocation vectors list first-interval counts in increasing order from zero to the given total.

## 1 Finish the half-day calculation

For A, each half-count's variance is $4/2+8/4=4$, and the covariance is $8/4=2$. Thus the daily variance is $4+4+2(2)=12$. Its halves have $\operatorname{NB}(2,1/2)$ marginal laws, and its total is $\operatorname{NB}(2,1/3)$ because the full day retains one common rate.

B with independent half-day scientific cells has the same half-count marginals, but covariance zero. The common-$p$ NB convolution gives total $\operatorname{NB}(4,1/2)$ and variance eight. For C, each half's integrated intensity is Gamma$(1,1/2)$, so the half-count is $\operatorname{NB}(1,1/3)$ with mean two and variance six. Independence and shape addition give total $\operatorname{NB}(2,1/3)$ with variance twelve.

For A, conditioning independent Poisson counts on their sum at fixed rate gives Binomial$(4,1/2)$; the common rate cancels. The probabilities are $(1,4,6,4,1)/16$.

For B, writing $k=0,\ldots,4$, the product PMF divided by the total PMF is

$$\frac{\binom{k+1}{k}\binom{5-k}{4-k}(1/2)^8}
{\binom74(1/2)^8}=\frac{(k+1)(5-k)}{35}.$$

This gives $(5,8,9,8,5)/35$. For C, each half-count has geometric PMF $(1/3)(2/3)^k$. Its joint PMF on total four is $(1/9)(2/3)^4$, independent of $k$. The total PMF is five times this value, so the allocation is $(1,1,1,1,1)/5$.

The numerators sum respectively to $16,35,5$, checking normalization. Adding the probabilities at $k=0$ and $k=4$ gives $1/8,2/7,2/5$. The conditioning event is the same set of count outcomes, but probabilities conditional on it can be compared without assuming equal marginal probabilities for that event. A B model with one original scientific day shares its rate across the reporting halves, so it gives A's within-day joint and allocation laws.

## 2 Prove a merge identity rather than matching moments

Write $u_i=1-z_i$. Conditional Poisson PGFs are exponentials. A requires one Gamma integral of $\exp[-\Lambda(au_1+bu_2+cu_3)]$, giving

$$H_A=\left[\frac\beta{\beta+au_1+bu_2+cu_3}\right]^\alpha.$$

B's independent scientific rates, with $(t_1,t_2,t_3)=(a,b,c)$, give

$$H_B=\prod_{i=1}^3
\left[\frac\beta{\beta+t_i u_i}\right]^\alpha.$$

C's independent integrated intensities give

$$H_C=\prod_{i=1}^3
\left[\frac\beta{\beta+u_i}\right]^{\alpha t_i}.$$

Set $z_1=z_2=z$ and hence $u_1=u_2=u$. In A, $au+bu=(a+b)u$. In C, the first two factors have the same base, and their exponents add to $\alpha(a+b)$. These are precisely the coarse laws with lengths $(a+b,c)$, keeping the third window's argument free. The argument repeats for every finite merge.

For the reporting-reset recipe B at $a=b=h$, the merged factor is $[\beta/(\beta+hu)]^{2\alpha}$. One coarse scientific cell would instead give $[\beta/(\beta+2hu)]^\alpha$. For $u>0$ their equality would require $(\beta+hu)^2=\beta(\beta+2hu)$, contradicted by the positive term $h^2u^2$. Both still have the same mean $2h\alpha/\beta$: agreement of one derivative at $z=1$ cannot establish equality of PGFs.

For one fixed B cell reported in three pieces of lengths $s_1,s_2,s_3$, the correct joint factor is

$$\left[\frac\beta{\beta+\sum_{j=1}^3s_j(1-z_j)}\right]^\alpha.$$

Setting all three arguments equal recovers its original coarse factor with length $s_1+s_2+s_3$. Independence remains across the original scientific cells, while pieces within each cell share its rate. Consequently the original B model has coherent reporting refinement; independent redrawing at new boundaries is a different generator.

## 3 Forecast after an observed zero

A's posterior density is proportional to

$$\Lambda^{2-1}e^{-\Lambda/2}e^{-\Lambda/2}
=\Lambda^{2-1}e^{-\Lambda},$$

so $\Lambda\mid Y_1=0\sim\operatorname{Gamma}(2,1)$. The shape remains two because no event was observed; the rate becomes one after adding exposure one half. The second-half count is $\operatorname{NB}(2,2/3)$, with mean $2(1/2)/1=1$, variance $1+2(1/2)^2=3/2$, and zero probability $(2/3)^2=4/9$.

B's independent second half keeps $\Lambda_2\sim\operatorname{Gamma}(2,1/2)$. Its predictive count remains $\operatorname{NB}(2,1/2)$, with mean two, variance four and zero probability $1/4$. C's independent second increment remains Gamma$(1,1/2)$; its count remains $\operatorname{NB}(1,1/3)$, with mean two, variance six and zero probability $1/3$.

For B with one original scientific day, both reporting halves share the original day's rate, so its update and prediction agree with A. A conditional-on-total allocation gives the division after fixing $Y_1+Y_2$; the present calculation only fixes the observed $Y_1$, leaving the future daily total unknown. These are different conditioning events.

## 4 Refine the report while keeping the target fixed

Each reset cell has Gamma rate shape two and exposure $1/n$, so its count is $\operatorname{NB}(2,n/(n+2))$. The PGFs multiply to

$$H_{S_n}(z)=\left[1+\frac{2(1-z)}n\right]^{-2n}.$$

Thus $S_n\sim\operatorname{NB}(2n,n/(n+2))$, with mean four, variance $4+8/n$, and zero probability $(n/(n+2))^{2n}$.

| $n$ | Daily variance | Daily zero probability |
| ---: | ---: | ---: |
| $1$ | $12$ | $1/9$ |
| $2$ | $8$ | $1/16$ |
| $4$ | $6$ | $(2/3)^8=256/6561$ |
| $16$ | $9/2$ | $(8/9)^{32}$ |

For fixed $z\in[0,1]$, $-2n\log[1+2(1-z)/n]\to-4(1-z)$. The limiting PGF is $\exp[4(z-1)]$, continuous at one and equal to that of Poisson$(4)$, establishing convergence in distribution. In particular the zero probability tends to $e^{-4}$. A variance limit alone would leave many possible count distributions.

A retains its shared rate and hence the daily $\operatorname{NB}(2,1/3)$ law. A B model with one fixed scientific day does the same by retaining that day's rate in every reporting subcell. Data must retain the original scientific-cell identifier and exposure allocation so these subcells are not mistaken for independent new cells. In C, each piece has integrated-intensity shape $2/n$ and the common success probability $1/3$, so the shapes still sum to two. Its daily law also stays unchanged.

For general duration $t$, C has mean $\mu_t=\alpha t/\beta$ and extra variance $\alpha t/\beta^2$. Solving $\mu_t^2/\phi_t=\alpha t/\beta^2$ gives $\phi_t=\alpha t$. This follows from C's independent Gamma increments. Other mechanisms, including fixed scientific cell effects, need not share it.

## 5 Transfer to unequal thirds and changed hyperparameters

A's first interval is $\operatorname{NB}(3,3/4)$ and its second is $\operatorname{NB}(3,3/5)$. B has these same two marginal laws. C instead has $\operatorname{NB}(1,1/2)$ and $\operatorname{NB}(2,1/2)$.

For all three the interval means are $(1,2)$ and total mean is three. A and B have interval variances $(4/3,10/3)$; C's are $(2,4)$. A's covariance is $3(1/3)(2/3)=2/3$, while B and C have covariance zero. Consequently A's total variance is $4/3+10/3+4/3=6$, B's is $14/3$, and C's is six.

A and C retain total $\operatorname{NB}(3,1/2)$ with zero probability $1/8$. For B, the total PGF is the product of its two unequal-$p$ marginal PGFs; it is not generally NB. Its zero probability is

$$\left(\frac34\right)^3\left(\frac35\right)^3
=\frac{729}{8000}.$$

Given $S=3$, A allocates according to Binomial$(3,1/3)$, producing $(8,12,6,1)/27$. C has beta-binomial shapes $(1,2)$:

$$\Pr_C(Y_1=k\mid S=3)
=\binom3k\frac{(1)_k(2)_{3-k}}{(3)_3},$$

which gives $(4,3,2,1)/10$.

B's success probabilities are $p_1=3/4$ and $p_2=3/5$, so there is no common-$p$ beta-binomial cancellation. Remove the allocation-independent factor $p_1^3p_2^3$ from its joint PMF. For $k=0,1,2,3$ the remaining weights are

$$w_k=\binom{k+2}{2}\binom{5-k}{2}
\left(\frac14\right)^k\left(\frac25\right)^{3-k}
=\left(\frac{16}{25},\frac{18}{25},\frac9{20},\frac5{32}\right)_k.$$

With denominator eight hundred these are $(512,576,360,125)/800$, summing to $1573/800$. Normalizing therefore gives

$$\Pr_B(Y_1=k\mid S=3)=\frac{(512,576,360,125)_k}{1573}.$$

This law is neither A's binomial allocation nor C's beta-binomial allocation. A Poisson-mixture total allocates binomially when the conditional rate proportions are fixed, as in A. Independent heterogeneous cell rates make those proportions random, and unequal exposures require their own calculation. B with one original scientific day would retain one shared rate across its reporting thirds, giving A's allocation instead.

## 6 Change the scientific unit and the meaning of an event

A uses one Gamma$(2,1/2)$ rate for exposure two. Its total is $\operatorname{NB}(2,1/5)$, with mean eight, variance forty and zero probability $1/25$. In B, two independent daily $\operatorname{NB}(2,1/3)$ counts add to $\operatorname{NB}(4,1/3)$, with mean eight, variance twenty-four and zero probability $1/81$. C's two-day increment has Gamma shape four, so its total has the same $\operatorname{NB}(4,1/3)$ law as B.

B and C agree on the complete joint distribution of daily counts: independent $\operatorname{NB}(2,1/3)$ variables. They disagree inside a day. Given a daily total four, B's shared within-day rate gives the binomial vector $(1,4,6,4,1)/16$ across half-days, whereas C gives the uniform vector $(1,1,1,1,1)/5$. Agreement at one scientific grid does not determine the process at a finer grid.

For C, put $q=1/(\beta+1)$. Its logarithmic PGF is

$$\log H_{C,t}(z)=\alpha t\left[-\log(1+1/\beta)-\log(1-qz)\right]
=\alpha t\sum_{k\ge1}\frac{q^k}{k}(z^k-1).$$

Hence the batch rates are $\nu_k=\alpha q^k/k$, with total rate $\alpha\log(1+1/\beta)$. In a short interval, the probability of at least one batch of size at least two is $h\sum_{k\ge2}\nu_k+o(h)$. Two separate singleton batches have probability of order $h^2$, so

$$\Pr_C(Y_h\ge2)=h\alpha\left[\log(1+1/\beta)-\frac1{\beta+1}\right]+o(h).$$

At $\alpha=2,\beta=1/2$ the coefficient is $2\log3-4/3>0$. For A,

$$\Pr_A(Y_h\ge2)=1-E[e^{-h\Lambda}(1+h\Lambda)]
=\frac{h^2}2E(\Lambda^2)+o(h^2)=12h^2+o(h^2),$$

because the Gamma second moment is twenty-four. This mixed homogeneous Poisson process has no simultaneous individual events. A fixed B cell has the same local behavior away from its scientific boundary.

C can count people arriving in a common vehicle or multiple items contributed by one physical batch. If the target is a simple process of individually timed events with diffuse intensity and no simultaneous arrivals, adding positive-rate batches changes the scientific model. Rounded timestamps that happen to coincide are a separate observation-resolution issue and do not by themselves establish physical batches. The matched one-day count distribution provides no distinction among the original unsplit constructions. Repeated subinterval counts, between-interval dependence, original run identities, event-time resolution and substantive batch information can address their different assumptions; no one of these examples proves a universally correct choice.
