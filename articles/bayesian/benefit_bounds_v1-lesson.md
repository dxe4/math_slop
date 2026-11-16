# Bound the fraction who personally benefit

A randomized study finds success probabilities $p_0=2/5$ without an intervention and $p_1=3/5$ with it. The average improvement is twenty percentage points. Does this mean exactly twenty percent of people benefit? We will construct two populations with those same randomized outcome probabilities: one has twenty percent benefiting and nobody harmed; the other has sixty percent benefiting and forty percent harmed.

Both are compatible with the study. Randomization identifies the two marginal success probabilities under the assumptions below. The fraction who would succeed with the intervention and fail without it depends on their unobserved joint distribution. We can derive useful, attainable bounds without pretending that the joint distribution has been learned.

Preparation: joint and conditional probabilities, expectation and variance, and Beta–Binomial updating. The existing [causal identification bridge](../../books/bayesian/adv-04_causal.md) explains marginal intervention risks; [decision analysis](../../books/bayesian/12_decisions.md) separates expected action values from paired counterfactual outcomes. Allow about 90–120 minutes including [practice](./benefit_bounds_v1-practice.md); this is a study estimate.

> Predict before calculating: can a positive average effect coexist with harm to forty percent of the population? Would an arbitrarily large randomized study of the same kind settle the fraction who benefit?

## Specify what the randomized study observes

For a person drawn from a specified target population, let $Y_0,Y_1\in\{0,1\}$ be success under two well-defined alternatives. The outcome $1$ is desirable. Each participant has a pair $(Y_0,Y_1)$, but we observe only $Y=Y_A$ under the assigned alternative $A\in\{0,1\}$.

Participants are independent draws from **one superpopulation joint distribution** of $(Y_0,Y_1)$. The full assignment vector is independent of all participants' potential-outcome pairs, and both alternatives have positive assignment probability. We assume consistency, no interference between participants, and complete observation of the specified outcome. We condition on the assignments when writing the outcome likelihood. The study and target population share this response distribution. These assumptions remove confounding, missing outcomes, and transport from this example; a different study needs its own identification argument.

Define

$$p_a=\Pr(Y_a=1),\qquad
B=\Pr(Y_0=0,Y_1=1),\qquad H=\Pr(Y_0=1,Y_1=0).$$

$B$ is the **population fraction with the beneficial response type**, also called the probability of necessity and sufficiency in this binary setting. It is not a claim that we can name the beneficiaries. It is also different from a probability conditional on being an observed treated success. The corresponding harmful fraction is $H$. For $D=Y_1-Y_0$,

$$\delta=E(D)=p_1-p_0=B-H.$$

The average effect is a net difference. It need not equal either component separately. A population model does not reveal the unobserved potential outcome for a named person.

## Construct every compatible joint distribution

Let $q=\Pr(Y_0=1,Y_1=1)$, the mass succeeding under both alternatives. The marginal sums determine every other cell:

| Potential outcomes $(Y_0,Y_1)$ | Response type | Probability |
| --- | --- | ---: |
| $(0,0)$ | Fails under both | $1-p_0-p_1+q$ |
| $(0,1)$ | Benefits | $p_1-q$ |
| $(1,0)$ | Is harmed | $p_0-q$ |
| $(1,1)$ | Succeeds under both | $q$ |

Requiring all four cells to be nonnegative gives

$$q_L=\max(0,p_0+p_1-1)\le q\le
q_U=\min(p_0,p_1).$$

Conversely, every $q$ in this interval gives four nonnegative cells summing to one and the required marginal risks. We have described the whole compatible family, including its endpoints.

Since $B=p_1-q$, the largest $q$ gives the smallest beneficial fraction and the smallest $q$ gives the largest:

$$\boxed{L=\max(0,p_1-p_0)\le B\le
U=\min(p_1,1-p_0).}$$

These are **sharp bounds**: every value in the interval is attained by a compatible joint distribution, through $q=p_1-B$. Sharpness includes the endpoints; it is stronger than merely proving two inequalities. The result appears as the binary PNS bound in [Tian and Pearl, section 3.2.2, equation 14](https://ftp.cs.ucla.edu/pub/stat_ser/R271.pdf). The table above supplies a direct constructive proof for this model.

The corresponding harmful fraction obeys

$$\max(0,p_0-p_1)\le H\le\min(p_0,1-p_1),\qquad H=B-\delta.$$

Benefit and harm therefore move together as we change the coupling while holding the average effect fixed.

## Work through two observationally identical populations

For $p_0=2/5,p_1=3/5$, we have $q_L=0,q_U=2/5$, giving $B\in[1/5,3/5]$ and $H\in[0,2/5]$.

| Response type | $q=2/5$ | $q=0$ |
| --- | ---: | ---: |
| Fails under both | $2/5$ | $0$ |
| Benefits | $1/5$ | $3/5$ |
| Is harmed | $0$ | $2/5$ |
| Succeeds under both | $2/5$ | $0$ |

Both columns give control success $2/5$, intervention success $3/5$, and average effect $1/5$. In the first, the twenty-point improvement comes entirely from beneficial changes. In the second, much larger beneficial and harmful fractions offset one another.

The two distributions of the individual difference $D$ also have different variances. Since $D^2=1$ precisely for benefit or harm,

$$\operatorname{Var}(D)=B+H-\delta^2.$$

The columns give respectively $4/25$ and $24/25$. This is variation in **paired individual effects** within the population. It is not the sampling variance of an estimated average treatment effect.

Parameterize the compatible family by

$$q=q_L+u(q_U-q_L),\qquad 0\le u\le1.$$

In the worked case $B=3/5-(2/5)u$ and $H=(2/5)(1-u)$. Before moving the control, predict which way benefit, harm, and the observed success rates will move. Check the four cell sums as you go.

<!-- BENEFIT_EXPLORER -->

The explorer changes a compatible **population coupling**, not an observed person's hidden outcome. Its selected positions illustrate exact members of a continuous family. The full interval and its sharpness come from the nonnegativity proof, rather than from the finite list of displayed cases.

## Prove that these data cannot distinguish the couplings

If $\Pr(A=1)=e$, the observable one-person probabilities are

$$\begin{aligned}
\Pr(A=0,Y=0)&=(1-e)(1-p_0),&
\Pr(A=0,Y=1)&=(1-e)p_0,\\
\Pr(A=1,Y=0)&=e(1-p_1),&
\Pr(A=1,Y=1)&=ep_1.
\end{aligned}$$

There is no $q$ in these expressions. Conditional on the full assignment vector, independence of participants gives the product of their arm-specific outcome probabilities. With $s_a$ successes among $n_a$ participants in arm $a$, its likelihood is proportional to

$$\mathcal L(p_0,p_1,q)
=p_0^{s_0}(1-p_0)^{n_0-s_0}
p_1^{s_1}(1-p_1)^{n_1-s_1}.$$

It contains no coupling coordinate. Every compatible $q$ has the same likelihood at fixed $p_0,p_1$. More independent participants in this same design estimate the marginal risks more precisely; they do not add a paired observation.

This argument uses the stated superpopulation likelihood. It does not assert that every fixed finite-population randomization distribution ignores the response-type counts. Nor does it promise that measuring the same person twice solves the problem: time, carryover, and versions of an intervention change the assumptions required for a repeated-outcome design.

**Retrieve:** Point to the exact step that uses random assignment, the step that uses independent participants, and the missing observation that would have been needed to see the pair directly.

## A prior over compatible couplings is an additional assumption

Suppose we choose a proper prior for $(p_0,p_1)$ and an independent proper prior $\pi_u$ for $u$. The likelihood above does not depend on $u$, so

$$\pi(p_0,p_1,u\mid\text{data})
=\pi(p_0,p_1\mid\text{data})\pi_u(u).$$

Thus the posterior for **this independently specified coordinate** remains its prior. This is a property of the chosen prior factorization and likelihood; priors that associate $u$ with the risks can update its marginal distribution through that association. A prior on four type masses need not induce the factorization used here. If the compatible interval has zero width, $u$ is redundant and $B$ is already fixed by the risks.

With the worked risks treated as known, three coupling priors give:

| Prior for $u$ | $E(u)$ | Mean beneficial fraction $E(B)$ |
| --- | ---: | ---: |
| Uniform on $[0,1]$ | $1/2$ | $2/5$ |
| Beta$(4,1)$ | $4/5$ | $7/25$ |
| Beta$(1,4)$ | $1/5$ | $13/25$ |

These different answers have identical observed-data likelihoods. Uniformity in a chosen coordinate is an assumption, not evidence of equal plausibility from randomization.

A different assumption is independence of the two potential outcomes themselves: $Y_0\perp Y_1$. It sets $q=p_0p_1=6/25$ and $B=9/25$ in the worked case. The corresponding $u=3/5$ is specific to these fixed risks: under uncertain risks, potential-outcome independence generally requires a risk-dependent $u$. Independence of **assignment and the pair**, already justified here by design, does not imply independence **within the pair**. Also, assuming no harmful response types, $Y_1\ge Y_0$ for every person, sets $H=0$ and hence $B=\delta$ when compatible. Neither of those extra assumptions follows from a positive average effect.

## Separate uncertainty about the risks from the compatible interval

Now the risks are unknown. Independently assign $p_0,p_1\sim\operatorname{Beta}(1,1)$. Observe two successes out of six controls and four out of six intervention participants. Conditioning on these arm totals gives

$$p_0\mid\text{data}\sim\operatorname{Beta}(3,5),\qquad
p_1\mid\text{data}\sim\operatorname{Beta}(5,3),$$

independently. Their means are $3/8$ and $5/8$, so $E(\delta\mid\text{data})=1/4$. Each posterior pair of risks has its own sharp interval $[L,U]$. We can report uncertainty about its two endpoints without choosing a coupling prior.

For these integer-parameter Beta distributions, polynomial integration gives

$$E(L\mid\text{data})=\frac{919}{3432},\qquad
E(U\mid\text{data})=\frac{305}{572},\qquad
E(U-L\mid\text{data})=\frac{911}{3432}.$$

These are **means of endpoint functions**. The interval between the first two numbers is not a credible interval for $B$ and has no stated posterior coverage. An identified set at fixed risks is not a probability distribution over its values.

For example, if $\overline F_a(t)=\Pr(p_a>t\mid\text{data})$, independence gives

$$E(L)=\int_0^1\overline F_1(t)[1-\overline F_0(t)]\,dt,\qquad
E(U)=\int_0^1\overline F_1(t)\overline F_{1-p_0}(t)\,dt.$$

The first identity follows by writing $(p_1-p_0)_+$ as the length of the set of $t$ satisfying $p_0<t<p_1$. The second uses the tail integral for $\min(p_1,1-p_0)$. The Beta survival functions are finite polynomials here, so the calculator evaluates both integrals using exact rational arithmetic.

Plugging posterior mean risks into the bound formula gives $[1/4,5/8]$, which differs from the endpoint expectations. Taking a nonlinear function and taking expectation need not commute.

If we additionally choose an independent coupling prior, then $B=U-u(U-L)$ gives

$$E(B\mid\text{data})
=E(U\mid\text{data})-E(u)E(U-L\mid\text{data}).$$

For the three priors in the previous table, these means are respectively $2749/6864$, $2753/8580$, and $749/1560$. The data have updated the risks. They have not updated the independent prior for $u$. A posterior distribution or credible interval for $B$ must name the extra coupling assumptions that turn risk draws into benefit draws.

## Measured baseline strata can tighten the bounds

Suppose a baseline covariate $Z$ has target weights $w_z=\Pr(Z=z)$. Assume both arms occur within every positive-weight stratum and assignment is independent of the potential-outcome pair there. The conditional risks are $p_{az}=\Pr(Y_a=1\mid Z=z)$. Applying the four-cell argument separately within each stratum gives

$$\sum_z w_z\max(0,p_{1z}-p_{0z})
\le B\le
\sum_z w_z\min(p_{1z},1-p_{0z}).$$

The bounds are sharp when each stratum's coupling is unrestricted: construct its endpoint table and mix the tables using $w_z$. Every intermediate aggregate value is attainable as well. This conditional argument is developed in [Mueller, section 3.2.2, printed pages 21–22](https://ftp.cs.ucla.edu/pub/stat_ser/r506.pdf).

Consider equally common strata with

| Baseline stratum | $p_{0z}$ | $p_{1z}$ | Conditional benefit bounds |
| --- | ---: | ---: | ---: |
| $Z=0$ | $1/10$ | $2/5$ | $[3/10,2/5]$ |
| $Z=1$ | $9/10$ | $3/5$ | $[0,1/10]$ |

Pooling gives $p_0=p_1=1/2$, average effect zero, and bounds $[0,1/2]$. Retaining the baseline strata sharpens the benefit bounds to $[3/20,1/4]$. Harm has the same aggregate bounds because $B-H=0$. Hence at least fifteen percent benefit and at least fifteen percent are harmed, even though the average effect vanishes.

Both strata-specific endpoint tables are feasible, and their weighted mixtures attain these aggregate endpoints. A global no-harm assumption is incompatible with this example: the second stratum has negative conditional average effect. Under the stated conditional-risk model, retaining baseline strata can only weakly tighten the pooled bounds; the tightening need not be strict. Conditioning on an outcome or an intervention-induced variable does not inherit the stated baseline identification assumptions.

## State which conclusion the evidence supports

For a randomly selected participant under a risk-neutral success-minus-cost objective, expected values of the separate actions use their marginal risks. A policy need not know $B$ to compare those expectations. A requirement about how many people would be helped or harmed asks for a different estimand and may remain only partially identified.

The worked randomized evidence supports a twenty-point average improvement and a sharp beneficial-fraction interval from twenty to sixty percent. It does not name beneficiaries, select a uniform distribution over the interval, or establish a variance for individual paired effects. Complete [six practice tasks](./benefit_bounds_v1-practice.md) before consulting the separate [worked answers](./benefit_bounds_v1-answers.md). After a delay, reconstruct the four-cell table from the marginal sums and explain which new evidence or assumption each further conclusion would need.

---

Printable copy: [study edition (PDF)](../../pdfs/bayesian/study-editions/benefit_bounds_v1.pdf), the lesson and practice without worked answers.
