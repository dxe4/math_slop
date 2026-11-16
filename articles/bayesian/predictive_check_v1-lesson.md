# What does a predictive-check tail probability guarantee?

Four binary outcomes are recorded in two blocks: $11\mid00$. A fitted model assigns probability $2/21$ to a new block contrast at least this large. Does that mean the model has probability $2/21$ of being true? Does using this number as a 10% test guarantee a false-alarm rate of at most 10%?

We will answer both questions by counting finite probability spaces. The new operation is to **fit the model separately to every possible observed dataset**, calculate each fitted predictive tail, and then derive the sampling distribution of that tail. This distinguishes the probability of a replicated event from a repeated-sampling guarantee about a checking rule.

Core preparation: conditional probability, combinations and Beta–Binomial updating. The [Beta–Binomial chapter](../../books/bayesian/02_beta_binomial.md) and [prediction chapter](../../books/bayesian/03_prediction.md) provide the updating and prediction background. The [model-checking chapter](../../books/bayesian/10_model_checking.md) already introduces posterior predictive checks and their generally nonuniform tail probabilities. Here we derive an entire finite sampling law. You may use the supplied Beta-function identity without deriving an integral; optional task 6 adds continuous uniform randomization. No MCMC is needed. The learning sequence is unpiloted.

> Predict first: ordinary replication lets the total number of successes change. Conditional replication keeps that total fixed. Should those two experiments assign the same probability to an extreme block contrast? What would have to be repeated to assess a nominal 10% checking rule?

## Declare the blocks and discrepancy before seeing outcomes

Before collecting data, fix two labeled blocks of two trials each. Under the model, all four outcomes are conditionally independent Bernoulli$(p)$ observations with **one shared** probability $p$. Use the proper fitting prior

$$p\sim\operatorname{Beta}(1,1).$$

The block sizes are prospective numbers of trials, not quotas for successes and failures. There is no selection or stopping rule. Define in advance

$$A=Y_1+Y_2,\qquad B=Y_3+Y_4,\qquad S=A+B,\qquad T=|A-B|.$$

$T$ measures a contrast between these specific blocks. We do not search for a partition or discrepancy after inspecting the outcomes. The common-$p$ iid model predicts a distribution for this contrast; a surprising contrast could suggest block heterogeneity or dependence, but does not identify a unique cause or replacement model.

Now observe $y=11\mid00$. Then $A=2$, $B=0$, $S=2$, $T=2$, and

$$p\mid y\sim\operatorname{Beta}(3,3).$$

The fitting prior is part of the procedure. Later, when we assess that procedure at a fixed true value $p=1/2$, we still fit every dataset using Beta$(1,1)$. We do not replace the fitting prior with knowledge of that truth.

## Work one posterior predictive check

An ordinary posterior predictive replicate uses the same fixed block sizes. Draw one $p$ from Beta$(3,3)$, then draw all four new outcomes independently conditional on that **same draw**. Drawing a separate $p$ for each trial would define a different replicate distribution.

More generally, let the block sizes be $m_1,m_2$ and the posterior be Beta$(a,b)$. For replicate counts $x,z$, conditional probability and posterior averaging give

$$\begin{aligned}
&\Pr(A^{\mathrm{rep}}=x,B^{\mathrm{rep}}=z\mid y)\\
&\quad=\binom{m_1}{x}\binom{m_2}{z}
\frac{B(a+x+z,b+m_1+m_2-x-z)}{B(a,b)}.
\end{aligned}$$

Here

$$B(u,v)=\int_0^1p^{u-1}(1-p)^{v-1}\,dp,
\qquad B(u,v)=\frac{(u-1)!(v-1)!}{(u+v-1)!}$$

for positive integers $u,v$. The binomial coefficients count ordered strings giving each pair of block counts. The blocks are independent conditional on $p$; after averaging over a shared uncertain $p$, they are generally dependent.

For our observed posterior Beta$(3,3)$, the joint predictive table is

| $A^{\mathrm{rep}}$ | $B^{\mathrm{rep}}=0$ | $B^{\mathrm{rep}}=1$ | $B^{\mathrm{rep}}=2$ |
| --- | ---: | ---: | ---: |
| $0$ | $5/42$ | $5/42$ | $1/21$ |
| $1$ | $5/42$ | $4/21$ | $5/42$ |
| $2$ | $1/21$ | $5/42$ | $5/42$ |

Use a **weak upper tail**, including equality:

$$q_{\mathrm{pp}}(y)=\Pr(T^{\mathrm{rep}}\ge T(y)\mid y).$$

Since $T(y)=2$, only replicate count pairs $(0,2)$ and $(2,0)$ qualify. Thus

$$q_{\mathrm{pp}}(11\mid00)
=2\frac{B(5,5)}{B(3,3)}=\frac2{21}.$$

This is a valid posterior probability of a specified replicated event, conditional on the model and observed data. It is **not** a posterior probability that the model is true. A posterior model probability would require a model-comparison specification that we have not supplied. [Gelman (2013), section 3](https://sites.stat.columbia.edu/gelman/research/published/ppc_understand3.pdf), distinguishes predictive probabilities from statistics with a uniform sampling distribution.

## Hold the sufficient total fixed

A different reference experiment keeps $S^{\mathrm{rep}}=S(y)=2$. Under the common-$p$ iid model, each ordered four-trial string with two successes has the same probability $p^2(1-p)^2$. After conditioning on the total, that factor cancels. The six arrangements are equally likely for every $0<p<1$.

Counting how many successes fall in the first block gives

$$\Pr(A^{\mathrm{rep}}=x\mid S^{\mathrm{rep}}=s)
=\frac{\binom2x\binom2{s-x}}{\binom4s},$$

over attainable $x$ with $0\le x\le2$ and $0\le s-x\le2$. At $s=2$, the masses at $x=0,1,2$ are $1/6,2/3,1/6$. The conditional discrepancy is $|2x-s|$, so

$$q_{\mathrm{cond}}(11\mid00)
=\Pr(|2A^{\mathrm{rep}}-2|\ge2\mid S^{\mathrm{rep}}=2)
=\frac13.$$

Both $2/21$ and $1/3$ are correct. They refer to different replication experiments. The conditional reference asks about the allocation of a **given** total between the blocks. It deliberately removes the total count's compatibility with the fitted model and prior from this question. It cannot detect every kind of model or prior problem.

This conditional law can also be obtained by conditioning the ordinary posterior predictive distribution on $S^{\mathrm{rep}}=s$: its Beta factor depends only on $s$ and cancels across arrangements. No different posterior is fitted. Conditioning the reference does not turn the actual prospective sampling design into a fixed-success-quota design.

This is sufficient-statistic conditioning, described as a similar p-value in [Bayarri and Berger (2000), equation 3](https://sta702-f23.github.io/website/reading/Bayarri-Berger-2000.pdf). It is a special case of their general $U$-conditional predictive framework, rather than an implementation of their particular conditional-MLE or partial-posterior construction. Although the conditional contrast law is free of $p$ after fixing $S$, the unconditional distribution of $T$ does depend on $p$; $T$ is not an unconditional ancillary statistic.

<!-- EXPLORER -->

The explorer covers only this original two-by-two design and its nine observed count pairs. For each pair, predict its posterior and the two tails before inspecting the tables. A selected fixed true $p\in\{1/4,1/2,3/4\}$ changes the repeated-data reference, while the fitting prior stays Beta$(1,1)$. The three-and-seven transfer in task 5 is outside these controls.

## Refit every possible observed dataset

We now ask about a procedure applied repeatedly to new observed data, not about more replicates from the one Beta$(3,3)$ posterior. For each of the sixteen ordered observed strings:

1. Compute its own $S$ and $T$.
2. Fit its own posterior Beta$(S+1,5-S)$.
3. Compute its own ordinary predictive weak tail at its observed $T$.

There are three resulting tail values. If $T=0$, the weak tail is one. If $T=2$, the only observed strings are $11\mid00$ and $00\mid11$, and their tail is $2/21$. If $T=1$, then $S=1$ or $S=3$. For $S=1$, use Beta$(2,4)$ and subtract the three equal-count predictive events:

$$q_{\mathrm{pp}}
=1-\frac{B(2,8)+4B(4,6)+B(6,4)}{B(2,4)}
=\frac{11}{21}.$$

Success–failure symmetry gives the same value for $S=3$. Write $r=1-p$. Counting the observed strings gives the complete fixed-$p$ sampling law:

| Fitted $q_{\mathrm{pp}}$ | Observed class | Probability at fixed $p$ |
| --- | --- | --- |
| $2/21$ | $T=2$: two strings | $2p^2r^2$ |
| $11/21$ | $T=1$: eight strings | $4pr(p^2+r^2)$ |
| $1$ | $T=0$: six strings | $p^4+r^4+4p^2r^2$ |

The sixteen strings are equally likely only at $p=1/2$. At other fixed values, use the appropriate $p^Sr^{4-S}$ weights.

There are also two distinct ways to average repeated studies:

| Fitted $q_{\mathrm{pp}}$ | Fixed truth $p=1/2$ | Draw truth $p\sim\operatorname{Beta}(1,1)$, then data |
| --- | ---: | ---: |
| $2/21$ | $1/8$ | $1/15$ |
| $11/21$ | $1/2$ | $2/5$ |
| $1$ | $3/8$ | $8/15$ |

The right column integrates the fixed-$p$ probabilities over the uniform prior. In that experiment, one true $p$ is drawn per study and shared by its four observed outcomes. Each study is still fitted with the original prior. Averaging over truths is not the same as repeatedly observing data at one fixed truth.

Because $2/21<1/10<11/21$, the rule “flag when $q_{\mathrm{pp}}\le1/10$” flags with probability $1/8$ at fixed $p=1/2$, and $1/15$ in the prior-and-data experiment. The first is greater than 10%, so this rule is not a level-10% test for every $p$. Neither calculation contradicts the posterior probability of the declared replication event.

Always name the experiment and property when discussing calibration. This example separates a posterior event probability, a fixed-parameter false-alarm bound, and prior-averaged behavior. It does not support a blanket claim that posterior predictive tails are invalid, always conservative at each fixed parameter, or suitable for automatic threshold decisions.

## Prove the conditional weak-tail guarantee

For any attainable observed total $s$, list the distinct conditional discrepancy values from largest to smallest as $t_1>\cdots>t_k$, with positive probabilities $w_1,\ldots,w_k$. Let

$$c_0=0,\qquad c_j=\sum_{i=1}^jw_i.$$

An observation with discrepancy $t_j$ has conditional weak-tail value $c_j$. For any $0\le\alpha\le1$, the event $q_{\mathrm{cond}}\le\alpha$ includes an initial sequence of these classes. Its probability is the last included cumulative mass, at most $\alpha$; if no class qualifies, it is zero. Hence

$$\Pr_p(q_{\mathrm{cond}}(Y)\le\alpha\mid S=s)\le\alpha.$$

Under the iid null, the observed allocation given $S=s$ has exactly this reference law. Averaging the inequality over $S$ gives

$$\Pr_p(q_{\mathrm{cond}}(Y)\le\alpha)\le\alpha$$

for every fixed $p$. At $p=0$ or $1$, only a degenerate total is attainable and its weak tail is one, so the same inequality holds. This property is called **super-uniformity**. Equality for every $\alpha$ is generally impossible for a nonrandomized statistic on a finite sample space. See Fithian's Berkeley notes on [conditional testing](https://stat210a.berkeley.edu/fall-2025/reader/testing-nuisance.html#conditional-testing) and [super-uniformity](https://stat210a.berkeley.edu/fall-2025/reader/testing-interpretation.html#super-uniformity).

Here the smallest conditional weak tail is $1/3$. Consequently a 10% conditional rule never flags any four-trial dataset. Its error control does not make it informative at that threshold. Validity and power are different properties.

## Optional advanced: separate ties from posterior fitting

A strict upper tail uses $>$; a weak upper tail uses $\ge$ and includes the tie mass. For a finite reference distribution, define a randomized tail using an independent $U\sim\operatorname{Uniform}(0,1)$:

$$q^*=\Pr(T^{\mathrm{rep}}>T)+U\Pr(T^{\mathrm{rep}}=T).$$

For the sufficient-total conditional reference, an observation in class $j$ fills the interval $[c_{j-1},c_j]$ uniformly. That interval has length $w_j$, exactly its class probability, so the mixture is Uniform$(0,1)$ conditional on every attainable $S$. This yields exact uniformity at every fixed $p$ as well. $U$ must be independent of the data and resampled in the repeated experiment. When the conditional statistic is constant, $q^*=U$: perfect uniformity can contain no information about fit.

Now instead randomize ties in the **ordinary fitted** predictive reference:

$$q^*_{\mathrm{pp}}
=\Pr(T^{\mathrm{rep}}>T(Y)\mid Y)
+U\Pr(T^{\mathrm{rep}}=T(Y)\mid Y).$$

The reference distribution now changes with the observed dataset. The interval's length need not equal that observed class's repeated-sampling probability. The preceding uniform-mixture proof does not apply. Task 6 derives the resulting false-alarm probabilities and shows that removing ties does not generally restore fixed-$p$ uniformity. Randomization is an analytical device here, not a recommendation for routine decisions.

## Reconstruct and transfer

Use [practice](./predictive_check_v1-practice.md), then separate [hints](./predictive_check_v1-hints.md) and [worked answers](./predictive_check_v1-answers.md). Tasks 1–2 reconstruct the worked reference experiments. Task 3 fades the scaffolding while deriving the fitted check's whole sampling law. Task 4 completes the conditional argument. Task 5 independently changes both block sizes and the discrepancy's denominators; its finished answer is outside the explorer. Task 6 is optional advanced material.

After a delay, explain from memory what is held fixed in each reference, what is refitted across repeated datasets, and which guarantee each probability calculation establishes. The derivations here are local finite constructions; [sources](./predictive_check_v1-sources.md) identifies the broader primary frameworks and an optional Wolfram Language check recipe.

---

Printable copy: [study edition (PDF)](../../pdfs/bayesian/study-editions/predictive_check_v1.pdf), the lesson and practice without worked answers.
