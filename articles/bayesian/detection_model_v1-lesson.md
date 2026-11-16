# Inference when an instrument misses events

Four events appear in a two-hour recording. The instrument detects each real event with probability one half. Does the record contain four real events, eight real events, or evidence about an uncertain rate? Those are different statements. We will write the observation mechanism before updating, then distinguish the events already missed from events that might occur tomorrow.

You will derive the recorded-count likelihood, update a true event rate, predict true and recorded future counts, and explain why an unknown detection probability cannot be separated from the rate by these counts alone. Preparation: [Chapter 4](../../books/bayesian/04_continuous.md), conditional probability, summation, Gamma integrals and variance decomposition. The last section transfers the book's existing density-transformation work to this model. Allow roughly 90–120 minutes, including practice; this is a study estimate.

> Before calculating, write two predictions. Is dividing the recorded count by the detection probability a full posterior distribution? Can two different instruments and true rates produce exactly the same distribution of recordings?

## Name the process and the recording mechanism

Let $\lambda>0$ be the constant **true event rate**, measured in events per hour, and let $T$ be the observation duration in hours. The true count is latent:

$$N\mid\lambda\sim\operatorname{Poisson}(T\lambda).$$

Each real event is independently recorded with the same probability $q$. There are no false positives, duplicated events, dead time or saturation. Conditional on the true count,

$$Y\mid N,q\sim\operatorname{Binomial}(N,q).$$

We observe $Y$, not $N$. In this lesson $q$ is initially a known property of the stipulated model. A detector's reported sensitivity is not automatically known in an application; the later sensitivity analysis makes that assumption visible.

The difference between “monitor for one hour perfectly” and “monitor for two hours with independent one-half detection” matters for reconstructing the total events during the actual window. Under the constant-rate assumptions, both give the **same likelihood for the rate** when their recorded counts agree.

## Sum over what was not observed

For an integer $y\ge0$, sum over every possible true count $n\ge y$. Writing $m=n-y$ gives

$$\begin{aligned}
\Pr(Y=y\mid\lambda,q,T)
&=\sum_{m=0}^{\infty}
\frac{e^{-T\lambda}(T\lambda)^{y+m}}{(y+m)!}
\binom{y+m}{y}q^y(1-q)^m\\
&=\frac{e^{-T\lambda}(qT\lambda)^y}{y!}
\sum_{m=0}^{\infty}\frac{((1-q)T\lambda)^m}{m!}\\
&=\frac{e^{-qT\lambda}(qT\lambda)^y}{y!}.
\end{aligned}$$

Thus $Y\mid\lambda,q,T\sim\operatorname{Poisson}(qT\lambda)$. This is independent Poisson thinning, not a rule to multiply observed counts into invented complete data. [Oxford's probability notes, Theorem 7.2](https://www.stats.ox.ac.uk/~laws/msc/Probability.pdf), give the underlying thinning theorem and its proof.

Write $c=qT$ for the **effective exposure in this likelihood**. Duration and detection play different scientific roles even though only their product appears here. For multiple conditionally independent windows with known $q_i,T_i$, total observed count is added to the Gamma shape and $\sum_iq_iT_i$ to its rate. Repeated windows do not fix unknown common detection by themselves.

At $qT=0$, the recording is zero with probability one. A zero recording supplies no rate information; a positive recording contradicts this model. The calculator rejects that impossible update.

**Retrieve:** Explain why replacing $Y$ by $Y/q$ in a complete-data Poisson likelihood changes the model. Identify the variable summed out above.

## Update the true rate

Use $\lambda\sim\operatorname{Gamma}(a,b)$ in **shape–rate** form, with density proportional to $\lambda^{a-1}e^{-b\lambda}$. Here $b$ has units of hours. Multiplying by the actual recorded-count likelihood gives

$$\lambda\mid Y=y,q,T\sim\operatorname{Gamma}(A,B),\qquad A=a+y,\quad B=b+qT.$$

For $a=2$, $b=1$, $T=2$, $q=1/2$, and $y=4$,

$$\lambda\mid Y=4\sim\operatorname{Gamma}(6,2),\qquad
E(\lambda\mid Y)=3,\quad \operatorname{Var}(\lambda\mid Y)=3/2.$$

Treating all four recordings as perfectly observed over two hours would give Gamma$(6,3)$, with mean $2$. Treating $4/q=8$ as an exact true count would give Gamma$(10,3)$, with mean $10/3$. Neither is the posterior under the stipulated detection model. The first silently changes detection to one; the second treats an estimate as observed complete data.

Shape–rate conventions and the conjugate calculation are developed in [Geyer's Poisson notes](https://www.stat.umn.edu/geyer/5421/notes/poisson.html). The effective-exposure update here follows from the derived observation likelihood.

## Predict the quantity that will actually be counted

A new true count over $t$ hours has conditional law Poisson$(t\lambda)$. A new **recorded** count with detection $q_f$ instead has conditional law Poisson$(q_ft\lambda)$. In either case, let $c_f$ denote the appropriate future effective exposure. Integrating over Gamma$(A,B)$ yields

$$\Pr(K=k\mid Y)=\binom{A+k-1}{k}
\left(\frac{B}{B+c_f}\right)^A
\left(\frac{c_f}{B+c_f}\right)^k,\qquad k=0,1,\ldots.$$

This displayed binomial coefficient uses the integer-shape cases in our exact calculator; Gamma-function ratios extend the distribution to any positive shape. In the negative-binomial convention counting failures before $A$ successes, success probability is $B/(B+c_f)$.

The variance has two sources:

$$E(K\mid Y)=c_f\frac AB,\qquad
\operatorname{Var}(K\mid Y)=c_f\frac AB+c_f^2\frac A{B^2}.$$

The first term is future Poisson variability, averaged over the posterior. The second is uncertainty about the common rate. Setting the rate to its posterior mean removes the second term and gives a different predictive distribution.

For the worked posterior and one future hour:

| Prediction target | Effective exposure | Mean | Variance | Probability of zero |
| --- | ---: | ---: | ---: | ---: |
| True future events | $1$ | $3$ | $9/2$ | $(2/3)^6=64/729$ |
| Future recordings at $q_f=1/2$ | $1/2$ | $3/2$ | $15/8$ | $(4/5)^6=4096/15625$ |

Poisson$(3)$ would give zero probability $e^{-3}\approx0.0498$, below the true-count mixture's $64/729\approx0.0878$. Jensen's inequality gives the direction because $e^{-t\lambda}$ is convex in $\lambda$. A predictive count has units of events; the variance of a rate has squared rate units. Neither is interchangeable with the other.

## Explore a changed known detection assumption

Keep the same prior, four recordings, two-hour observation and one-hour future interval. Before using the controls, predict whether assuming **lower known detection** should raise or lower the posterior mean true rate. Then compare future true events with future recordings. These are four conditional sensitivity cases; changing the selection does not estimate detection from the observed count.

<!-- DETECTION_EXPLORER -->

Every displayed mass is precomputed by the exact rational calculator. The table shows $k=0,\ldots,10$ plus an explicit omitted-tail probability; it is not renormalized. With JavaScript disabled, the worked $q=1/2$ true-count case remains readable.

**Explain the pattern:** A low assumed detection probability raises the inferred true rate. But the future recorded mean under the same detector is $q(a+y)/(b+qT)$, which increases with $q$ when $b>0$. Reversing the target reverses this particular monotonic comparison. State which assumptions are fixed before interpreting a visual trend.

## Reconstruct the events already missed

Let $M=N-Y$ be the number missed **during the original window**. Expanding the joint mass of $Y$ and $M$ shows, conditional on $\lambda,q$,

$$Y\sim\operatorname{Poisson}(qT\lambda),\qquad
M\sim\operatorname{Poisson}((1-q)T\lambda),\qquad Y\perp M\mid\lambda,q.$$

The independence is conditional: after integrating over the shared uncertain rate, the two counts need not be independent. Once $Y=y$ is observed, mix the missing-count Poisson law over the updated rate. Therefore $M\mid Y=y$ has the same predictive formula with $c_f$ replaced by $(1-q)T$, and the original total is the shifted variable $N=y+M$.

In the worked case, missed exposure is $(1-1/2)2=1$ hour. Hence

$$E(M\mid Y)=3,\qquad \operatorname{Var}(M\mid Y)=9/2,\qquad
E(N\mid Y)=4+3=7.$$

The total's support begins at four. Its mean is seven, not the plug-in estimate $4/q=8$. The prior contributes information and the missing count remains random. The fact that this missing-count distribution equals the one-hour future **true** count distribution is a coincidence of their equal exposures in this example. Their meanings and their relationship to the observed four recordings differ.

## Unknown detection creates a likelihood ridge

For unknown $q$, the recording likelihood depends on $q\lambda$ alone. Pairs $(\lambda,q)=(4,1/2)$ and $(8,1/4)$ both give recorded rate two per hour, hence exactly the same distribution of recordings at every duration. More independent counts from this same mechanism can estimate the product more precisely; they cannot separately identify both factors. One count does not determine even the product's numeric value exactly.

This is a statement about the **likelihood**, not a claim that all posteriors are improper or that $q$ can never update. Proper priors with positive evidence give proper posteriors here, and priors can connect a learned product to the individual factors. The book's [observation-process chapter](../../books/bayesian/adv-03_observation_process.md) develops these distinctions. [Stan's discussion of problematic posteriors](https://mc-stan.org/docs/stan-users-guide/problematic-posteriors.html#adding-priors) illustrates related equal-likelihood ridges and regularisation in other models.

For an exactly auditable sensitivity model, let $q$ initially be $1/4$ or $3/4$ with equal probabilities, independently of $\lambda\sim\operatorname{Gamma}(2,1)$. Integrating the likelihood over the rate gives component weights proportional to

$$w_q\propto \Pr(q)\frac{(qT)^y}{(b+qT)^{a+y}}.$$

With $y=4,T=2$, normalization gives

$$w_{1/4}=\frac{15625}{74674},\qquad
w_{3/4}=\frac{59049}{74674}.$$

Conditional rate posteriors are Gamma$(6,3/2)$ and Gamma$(6,5/2)$. Their mixture has mean about $2.734789$ and variance about $1.740686$. A one-hour future true count has mean about $2.734789$, variance about $4.475475$, and zero probability about $0.114783$. Replacing the mixture by a rate fixed at its mean loses uncertainty again.

Detection's posterior weights **did change** from one half. The Gamma prior on the true rate makes four recordings more plausible under one candidate detector. That prior-mediated update does not break the likelihood ridge or establish calibration of a real detector. Moreover $q$ and $\lambda$ are dependent in the posterior, so multiplying their separate posterior means generally does not give the posterior mean recorded rate.

If independent calibration trials record how many of a known number of real events were detected, their binomial likelihood supplies information about $q$ that these counts lack. False positives, saturation, time-varying rates or dependent detection require a changed model rather than an adjustment of the same formula.

## Transfer the density to a log rate

Let $\eta=\log(\lambda/\lambda_0)$ with reference rate $\lambda_0=1$ event/hour. In the numerical hourly coordinate, $\lambda=e^\eta$ and $d\lambda/d\eta=e^\eta$. The worked posterior density with respect to $d\eta$ has log kernel

$$\log p_\eta(\eta\mid Y)=6\eta-2e^\eta+C.$$

The coefficient is six because the Jacobian contributes one more $\eta$. Merely substituting in the rate-density kernel gives $5\eta-2e^\eta$, the wrong density for this coordinate. Transforming draws with a logarithm already transports their probabilities; no extra weighting is needed. The rate-density mode is $5/2$, whereas the mode of the $\eta$ density maps back to rate $3$. Density modes depend on the coordinate's reference measure.

**Close the lesson:** Without looking back, draw a diagram linking the latent count, detection mechanism, recorded likelihood, rate posterior, future true count and reconstructed original total. Label which quantities are observed, which are latent, and where each uncertainty enters. Then attempt [practice](./detection_model_v1-practice.md) before opening [worked answers](./detection_model_v1-answers.md).

---

Printable copy: [study edition (PDF)](../../pdfs/bayesian/study-editions/detection_model_v1.pdf), the lesson and practice without worked answers.
