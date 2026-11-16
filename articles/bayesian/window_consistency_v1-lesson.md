# Keep the scientific model when reporting windows change

A service records four events on an average day, with daily variance twelve. Three different Gamma–Poisson constructions reproduce that daily count distribution. If the same day is reported as two half-days, those constructions predict different dependence, different allocations of a known daily total, and sometimes a different distribution for the total itself.

We will hold the one-day scientific target fixed, split its reporting interval, and derive the complete joint distributions. The key question is which latent quantities remain shared when a boundary moves. A change in a spreadsheet's row boundaries need not mean that the physical environment has reset.

Preparation: conditional probability, Gamma–Poisson updating, expectation and variance. Probability generating functions are introduced below. Allow about 120–150 minutes including [six practice tasks](./window_consistency_v1-practice.md); this is an unpiloted study estimate. Separate [hints](./window_consistency_v1-hints.md) give starting points, and [worked answers](./window_consistency_v1-answers.md) supply complete arguments.

The existing [prediction chapter](../../books/bayesian/03_prediction.md) already explains dependence through a shared uncertain parameter. The [count regression chapter](../../books/bayesian/08_glm.md) correctly defines independent window multipliers for its scientific observations and warns that they do not automatically specify arbitrary splitting and merging. Calibration investigation E04 already distinguishes sums of independent equal-unit counts from a shared Gamma rate. This investigation develops the reporting-window question left open by those warnings.

> Predict first: after a quiet first half-day, should the second half-day become quieter in your forecast? If the daily total is known to be four, must its division between equal halves be binomial? State which latent quantity your answer holds fixed.

## Specify three different latent constructions

Time is measured in days. Throughout, Gamma uses positive **shape and rate** parameters $\alpha,\beta$, with support $\lambda>0$:

$$f(\lambda)=\frac{\beta^\alpha}{\Gamma(\alpha)}
\lambda^{\alpha-1}e^{-\beta\lambda},\qquad
E(\lambda)=\frac\alpha\beta,\quad
\operatorname{Var}(\lambda)=\frac\alpha{\beta^2}.$$

For a nonnegative count, write $\operatorname{NB}(r,p)$ for the convention

$$\Pr(Y=k)=\frac{(r)_k}{k!}p^r(1-p)^k,
\qquad (r)_k=\frac{\Gamma(r+k)}{\Gamma(r)},\quad (r)_0=1.$$

Thus its mean is $r(1-p)/p$ and variance is $r(1-p)/p^2$. Real positive $r$ is allowed; an integer number of successes is one interpretation, not a restriction on the distribution.

Let disjoint intervals have positive lengths $t_1,\ldots,t_d$, with total length $T=\sum_i t_i$. The hyperparameters $\alpha,\beta$ are known in this investigation. Their uncertainty would add another layer.

**A Shared rate.** Draw one $\Lambda\sim\operatorname{Gamma}(\alpha,\beta)$ for the entire period. Given that draw, use a homogeneous Poisson process: disjoint counts are independent with $Y_i\mid\Lambda\sim\operatorname{Poisson}(t_i\Lambda)$. The same rate remains in force when an interval is divided. This is a shared-rate mixture, also called a Pólya process in [Vellaisamy and Maheshwari, section 5.1](https://arxiv.org/pdf/1306.2493).

**B Rates for scientifically fixed cells.** Choose the scientific cells, such as independent production runs, before generating their outcomes. Draw independent $\Lambda_i\sim\operatorname{Gamma}(\alpha,\beta)$ across those cells and use $Y_i\mid\Lambda_i\sim\operatorname{Poisson}(t_i\Lambda_i)$. A rate can describe a homogeneous Poisson process inside its cell. If the reporting system divides that cell, its subcounts retain that cell's one rate. This fixed-cell model is valid and supports coherent reporting changes.

We will also examine a distinct **reporting-reset recipe**: redraw an independent rate whenever a new reporting row is created. Comparing this recipe on different partitions changes the latent scientific cells. The resulting change in forecasts is not a defect in a model whose original cells genuinely represent independent runs.

**C Independent integrated-intensity increments.** Let $G$ be a Gamma process: for disjoint intervals, $G(I_i)$ are independent, $G(I_i)\sim\operatorname{Gamma}(\alpha t_i,\beta)$, and increments add when intervals merge. Given $G$, count from a Poisson random measure with mean measure $G$: $Y_i\mid G\sim\operatorname{Poisson}(G(I_i))$. Equivalently, time-change a unit-rate Poisson process by $G(t)$. Here $G(I)$ is integrated intensity, not a rate to be multiplied by $t$ again. This construction permits batches of events at the same time; we will derive that implication.

The alternatives describe different scientific mechanisms. None is required merely because a fixed-window count is overdispersed.

## Match the daily law before splitting the day

Set $\alpha=2$ and $\beta=1/2$. Applied to one unsplit day, all three constructions give

$$Y_{\rm day}\sim\operatorname{NB}(2,1/3),\qquad
E(Y_{\rm day})=4,\quad\operatorname{Var}(Y_{\rm day})=12,
\quad\Pr(Y_{\rm day}=0)=1/9.$$

For example, integrating a Poisson count with mean $t\Lambda$ against its Gamma rate gives

$$\Pr(Y_t=k)=\int_0^\infty
\frac{e^{-t\lambda}(t\lambda)^k}{k!}
\frac{\beta^\alpha\lambda^{\alpha-1}e^{-\beta\lambda}}{\Gamma(\alpha)}\,d\lambda
=\frac{(\alpha)_k}{k!}
\left(\frac\beta{\beta+t}\right)^\alpha
\left(\frac t{\beta+t}\right)^k.$$

The Gamma integral evaluates the expression exactly. For C, replace the rate mixture's shape by $\alpha t$ and its exposure by one. At $t=1$ these give the same law. That equality at one duration does not establish equal joint processes or equal laws at every other duration.

Now report the same day as two halves. For A, both half-counts have mean two and variance four, but their covariance is

$$\operatorname{Cov}(Y_1,Y_2)
=\operatorname{Cov}(t_1\Lambda,t_2\Lambda)
=\frac{\alpha t_1t_2}{\beta^2}=2.$$

Total covariance justifies the first equality: conditional covariance is zero. The shared latent rate contributes the remaining covariance. Two independent Gamma rates in B remove it. In C, each half's integrated-intensity shape is one, giving a larger marginal variance instead.

| One day reported as two halves | A Shared rate | B Reset at both half-day cells | C Gamma increments |
| --- | ---: | ---: | ---: |
| Each half's mean | $2$ | $2$ | $2$ |
| Each half's variance | $4$ | $4$ | $6$ |
| Covariance between halves | $2$ | $0$ | $0$ |
| Daily sum's distribution | $\operatorname{NB}(2,1/3)$ | $\operatorname{NB}(4,1/2)$ | $\operatorname{NB}(2,1/3)$ |
| Daily sum's variance | $12$ | $8$ | $12$ |
| Probability of no event all day | $1/9$ | $1/16$ | $1/9$ |

The B column deliberately treats the two halves as independent scientific cells. If one day was the original B cell and the halves are only reporting subdivisions, its correct two-half joint law is A within that day. Its daily variance then remains twelve.

## Allocate a known total among the windows

Condition on the **same numerical event**, $Y_1+Y_2=4$, under each of the three two-cell constructions. This event has different probabilities in the B and A/C models, but the conditional comparison is well-defined in every model.

For A, Poisson splitting gives $Y_1\mid(Y_1+Y_2=4),\Lambda\sim\operatorname{Binomial}(4,1/2)$. The conditional law contains no $\Lambda$, so integrating $\Lambda$ cannot change it. For B, the independent half-counts are both $\operatorname{NB}(2,1/2)$; multiplying their PMFs and dividing by their sum's PMF gives a beta-binomial allocation with shapes $(2,2)$. For C the same calculation uses shapes $(1,1)$.

| First-half count $k$ | $0$ | $1$ | $2$ | $3$ | $4$ |
| --- | ---: | ---: | ---: | ---: | ---: |
| A Given total four | $1/16$ | $4/16$ | $6/16$ | $4/16$ | $1/16$ |
| B Given total four | $5/35$ | $8/35$ | $9/35$ | $8/35$ | $5/35$ |
| C Given total four | $1/5$ | $1/5$ | $1/5$ | $1/5$ | $1/5$ |

Each row sums to one. The probability that all four events fall in either half is respectively $1/8$, $2/7$, and $2/5$. Thus even the matching daily laws of A and C do not determine their within-day allocations.

The explorer displays bounded, precomputed exact cases. Its half-day case uses the parameters above. Its changed case uses $\alpha=3,\beta=1$ and thirds of unequal lengths, developed in practice. The displayed unconditional PMFs have integer Gamma shapes and rational inputs, so their values are rational. General noninteger-shape NB probabilities need not be rational. The general formulas below, rather than a finite table, define those distributions. The conditional allocations are finite distributions and remain rational for positive rational shapes and lengths.

<!-- EXPLORER -->

## Prove consistency with joint generating functions

The joint probability generating function is

$$H(\mathbf z)=E\left[\prod_i z_i^{Y_i}\right],\qquad 0\le z_i\le1.$$

Its coefficients are the joint count probabilities. Setting two arguments to the same $z$ gives the PGF of the corresponding sum. This tests an entire distribution, beyond matching its first two moments.

For $X\sim\operatorname{Poisson}(u)$, summing its power series gives $E(z^X)=e^{-u(1-z)}$. The Gamma integral gives $E(e^{-s\Lambda})=[\beta/(\beta+s)]^\alpha$. Applying these identities to the three latent constructions yields

$$H_A(\mathbf z)=
\left[\frac\beta{\beta+\sum_i t_i(1-z_i)}\right]^\alpha,$$

$$H_B(\mathbf z)=
\prod_i\left[\frac\beta{\beta+t_i(1-z_i)}\right]^\alpha,$$

$$H_C(\mathbf z)=
\prod_i\left[\frac\beta{\beta+1-z_i}\right]^{\alpha t_i}.$$

For A, sum the conditional Poisson exponents before performing the one Gamma integral. For B, independence supplies a product of separate integrals. For C, each integral uses shape $\alpha t_i$ and unit exposure. These steps derive the joint laws for every finite partition with positive interval lengths.

**Merge in A.** Set $z_1=z_2=z$. The terms $t_1(1-z)+t_2(1-z)$ become $(t_1+t_2)(1-z)$, exactly the coarse interval formula. Repeating this substitution permits any finite merge while retaining the same shared rate.

**Merge in C.** The two factors share a base, so their powers add: $\alpha t_1+\alpha t_2=\alpha(t_1+t_2)$. Its one-interval PGF satisfies the semigroup identity

$$H_{C,s}(z)H_{C,t}(z)=H_{C,s+t}(z),\qquad
H_{C,t}(z)=\left[\frac\beta{\beta+1-z}\right]^{\alpha t}.$$

This is a distributional proof of independent-increment aggregation. The Gamma-subordinated Poisson construction and its NB law appear in [Orsingher and Toaldo, section 4.3, equations 4.22–4.25](https://arxiv.org/pdf/1312.1498); the formulas here include our explicit shape-rate scaling.

**Keep B's scientific cells fixed.** If cell $i$ is reported in pieces $t_{i1},\ldots,t_{ir}$, its correct factor is

$$\left[\frac\beta{\beta+\sum_j t_{ij}(1-z_{ij})}\right]^\alpha.$$

Setting the pieces' arguments equal recovers the original cell factor. Products across original cells then give a coherent refined report. The pieces are dependent after their common cell rate is integrated out.

Reports can also cross the original scientific boundaries. If the original disjoint cells are $J_j$ and the disjoint reporting intervals are $I_i$, let $\ell_{ij}=|I_i\cap J_j|$. The full fixed-cell reporting PGF is

$$H_{B,\mathrm{fixed}}(\mathbf z)=\prod_j
\left[\frac\beta{\beta+\sum_i\ell_{ij}(1-z_i)}\right]^\alpha.$$

It follows by integrating each original cell's rate once. Merging reports adds their overlap lengths with every $J_j$, so it recovers exactly the corresponding coarse law even when a report crosses several scientific cells.

**Reset B at each new reporting boundary.** The new recipe replaces that one factor with a product of $r$ independent-rate factors. For two equal lengths $h$, its merged PGF is

$$\left[\frac\beta{\beta+h(1-z)}\right]^{2\alpha},$$

whereas drawing one original rate for length $2h$ gives

$$\left[\frac\beta{\beta+2h(1-z)}\right]^\alpha.$$

They differ for positive $h$ and $\alpha$. A reporting reset has changed the joint model. B's scientific cells need not be abandoned; their identities must be retained when reporting changes.

## Derive the conditional allocation for any finite partition

Let $m=\sum_i y_i$. Integrating A's joint conditional Poisson PMF gives

$$\Pr_A(\mathbf Y=\mathbf y)=
\frac{(\alpha)_m}{\prod_i y_i!}
\frac{\beta^\alpha\prod_i t_i^{y_i}}{(\beta+T)^{\alpha+m}}.$$

Divide this by the $\operatorname{NB}(\alpha,\beta/(\beta+T))$ total-count PMF. All Gamma factors cancel, leaving

$$\Pr_A(\mathbf Y=\mathbf y\mid S=m)=
\frac{m!}{\prod_i y_i!}\prod_i\left(\frac{t_i}{T}\right)^{y_i}.$$

This is multinomial allocation with fixed duration shares. It is valid for arbitrary unequal intervals.

For C, multiply the independent NB PMFs with common $p=\beta/(\beta+1)$, then divide by their $\operatorname{NB}(\alpha T,p)$ total PMF:

$$\Pr_C(\mathbf Y=\mathbf y\mid S=m)=
\frac{m!}{\prod_i y_i!}
\frac{\prod_i(\alpha t_i)_{y_i}}{(\alpha T)_m}.$$

This is the Dirichlet-multinomial law. One way to read it is to draw a random vector of allocation shares $\mathbf W\sim\operatorname{Dirichlet}(\alpha t_1,\ldots,\alpha t_d)$, then draw a multinomial allocation of $m$ using those shares. The two-window case is beta-binomial. Unlike A's fixed shares, these random shares retain within-total clustering. Normalization follows by summing the joint PMFs over the finite set of allocations of total $m$, or by the multinomial mixture representation. Merging cells adds Dirichlet shapes, agreeing with the PGF proof.

For B with **equal** cell lengths, its NB success probabilities agree. The same cancellation gives a Dirichlet-multinomial allocation with shapes $(\alpha,\ldots,\alpha)$. With unequal cell lengths, $p_i=\beta/(\beta+t_i)$ differ. There is no such common-$p$ cancellation. Instead use the finite exact expression

$$\Pr_B(\mathbf Y=\mathbf y\mid S=m)=
\frac{\displaystyle\prod_i\frac{(\alpha)_{y_i}}{y_i!}
\left(\frac{t_i}{\beta+t_i}\right)^{y_i}}
{\displaystyle\sum_{\substack{\mathbf v\ge0\\\sum_i v_i=m}}
\prod_i\frac{(\alpha)_{v_i}}{v_i!}
\left(\frac{t_i}{\beta+t_i}\right)^{v_i}}.$$

The constants $\prod_i p_i^\alpha$ cancel, even when they are irrational. Every remaining rising-factor and power is rational for positive rational $\alpha,\beta,t_i$. The denominator is a finite positive sum. Calling this unequal-window distribution beta-binomial would generally be incorrect.

## Check moments and sequential predictions against the joint laws

Total expectation, variance and covariance give the following general identities for distinct cells. B's cells here are its independent scientific cells.

| Quantity | A Shared rate | B Independent cell rates | C Gamma increments |
| --- | --- | --- | --- |
| $E(Y_i)$ | $\alpha t_i/\beta$ | $\alpha t_i/\beta$ | $\alpha t_i/\beta$ |
| $\operatorname{Var}(Y_i)$ | $\alpha t_i/\beta+\alpha t_i^2/\beta^2$ | $\alpha t_i/\beta+\alpha t_i^2/\beta^2$ | $\alpha t_i/\beta+\alpha t_i/\beta^2$ |
| $\operatorname{Cov}(Y_i,Y_j)$ | $\alpha t_it_j/\beta^2$ | $0$ | $0$ |
| $\operatorname{Var}(S)$ | $\alpha T/\beta+\alpha T^2/\beta^2$ | $\alpha T/\beta+\alpha\sum_i t_i^2/\beta^2$ | $\alpha T/\beta+\alpha T/\beta^2$ |

For A and B's marginal moments, apply $\operatorname{Var}(Y_i)=E(t_i\Lambda_i)+\operatorname{Var}(t_i\Lambda_i)$. For C replace $t_i\Lambda_i$ by $G(I_i)$, whose mean is $\alpha t_i/\beta$ and variance $\alpha t_i/\beta^2$. Summing variances and twice the covariances proves the final row. The PGFs can independently recover these moments by differentiation at $\mathbf z=\mathbf1$.

In the original half-day case, seeing zero events in the first half updates A's shared rate to $\operatorname{Gamma}(2,1)$. Its second-half predictive mean becomes one, and its probability of zero becomes $4/9$. B's independent next-cell rate does not update: its mean stays two and its zero probability stays $1/4$. C's independent next increment also does not update: its mean stays two and its zero probability stays $1/3$. For a B day that was merely divided for reporting, the shared within-day rate updates as in A.

This is information flowing through a shared latent quantity. A quiet first interval does not physically cause a quiet second interval. The posterior-predictive dependence is a consequence of the declared joint model.

## Follow a reporting reset to arbitrarily fine bins

Keep the original one-day target and divide it into $n$ equal pieces. Under the B reporting-reset recipe, each new piece draws its own independent $\operatorname{Gamma}(2,1/2)$ rate. Each count is $\operatorname{NB}(2,n/(n+2))$, so

$$S_n\sim\operatorname{NB}\left(2n,\frac n{n+2}\right),\qquad
E(S_n)=4,\quad\operatorname{Var}(S_n)=4+\frac8n,$$

$$\Pr(S_n=0)=\left(\frac n{n+2}\right)^{2n},\qquad
H_{S_n}(z)=\left[1+\frac{2(1-z)}n\right]^{-2n}.$$

Taking logarithms gives $\log H_{S_n}(z)\to-4(1-z)$, the Poisson$(4)$ PGF. A total-law change is therefore present even though the mean always stays four. Refinement makes the independently reset intensities average out.

Keeping A's shared rate gives the original daily NB law at every reporting resolution. Keeping B's original scientific day also gives that law. C keeps it by changing each increment's Gamma shape to $2/n$: its marginal variance is $12/n$, and independent increment variances sum to twelve. Some such shapes are nonintegers; their PMFs are defined by the Gamma formula above.

For this C process, writing $\operatorname{Var}(Y_t)=\mu_t+\mu_t^2/\phi_t$ gives $\phi_t=\alpha t$. That duration dependence belongs to this particular independent-increment model. It is not a demand that every NB2 regression use a Gamma process or make the same scientific assumptions.

## Interpret the Gamma process as a process with batches

Coherent increments alone do not establish that C describes the kind of events being counted. Put $q=1/(\beta+1)$. Expanding $-\log(1-qz)$ gives

$$\log H_{C,t}(z)=\alpha t\sum_{k=1}^\infty
\frac{q^k}{k}(z^k-1).$$

This is a compound Poisson PGF: a batch of size $k\ge1$ occurs at rate $\nu_k=\alpha q^k/k$. The total batch rate is $\sum_k\nu_k=\alpha\log(1+1/\beta)$. In particular, batches of size two or more have a positive rate. The interpretation agrees with [Orsingher and Toaldo, equation 4.29](https://arxiv.org/pdf/1312.1498).

Conditional on a batch occurring, its size $K$ has normalized law

$$\Pr(K=k)=\frac{q^k}{k\log(1+1/\beta)},\qquad k\ge1.$$

At $\alpha=2,\beta=1/2$, batches arrive at rate $2\log3$, with size probabilities $(2/3)^k/(k\log3)$.

For $\alpha=2,\beta=1/2$ and a short interval of length $h$,

$$\Pr_C(Y_h\ge2)=h\left(2\log3-\frac43\right)+o(h).$$

The leading probability is of order $h$. For A's finite-moment shared Gamma rate, two or more events in a sufficiently short interval have probability of order $h^2$. Its conditional homogeneous Poisson process is simple, with no simultaneous events. C can be useful when one physical arrival contributes multiple counted items, or simultaneous batches are scientifically meaningful. It does not automatically describe distinct individual event times with a diffuse intensity.

The matched one-day marginal count distribution alone cannot select between A and C. Repeated daily observations can distinguish their dependence, as the final practice task develops. The scientific unit, repeated subinterval data, dependence across intervals, and the meaning of a counted event are relevant evidence. Complete the [practice tasks](./window_consistency_v1-practice.md), then revisit the opening predictions. After a delay, reconstruct the three joint PGFs from their latent quantities and explain exactly what would be held fixed when the reporting boundaries move.

---

Printable copy: [study edition (PDF)](../../pdfs/bayesian/study-editions/window_consistency_v1.pdf), the lesson and practice without worked answers.
