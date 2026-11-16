# Worked answers for group selection and member selection

Attempt [practice](./informative_size_v1-practice.md) and use [hints](./informative_size_v1-hints.md) before consulting these calculations. Each task starts from its stated prior and observation; the tasks are separate experiments. Probabilities of a future success refer to a fresh binary response with the known risk for the selected member's group type.

## 1 Normalize the first acceptance

For a single attempt,

$$\rho(r)=\Pr(R\mid r)=\frac{2(1-r)}3,\qquad
\Pr(L\mid r)=r,\qquad
\Pr(S\mid r)=\frac{1-r}{3}.$$

Their sum is $2(1-r)/3+r+(1-r)/3=1$. For $r=1/4$, the triple $(R,L,S)$ is $(1/2,1/4,1/4)$; for $r=3/4$, it is $(1/6,3/4,1/12)$.

With independent attempts conditional on the persistent composition,

$$\Pr(K=k,\text{first type }L\mid r)=\rho(r)^kr,$$

$$\Pr(K=k,\text{first type }S\mid r)
=\rho(r)^k\frac{1-r}{3}.$$

Summing each geometric series gives

$$\Pr(\text{first type }L\mid r)=\frac{3r}{1+2r},\qquad
\Pr(\text{first type }S\mid r)=\frac{1-r}{1+2r}.$$

They sum to one. At $r=1/4$ they are $(1/2,1/2)$; at $r=3/4$ they are $(9/10,1/10)$. Acceptance eventually occurs since the probability of $k$ initial rejections, $\rho(r)^k$, tends to zero.

The likelihood $r$ would describe a large acceptance **on one specified attempt**. In particular it describes first accepted type $L$ with $K=0$ if the specified attempt is the first. The unlogged-type observation allows every $K\ge0$, and therefore needs its normalizing geometric sum. Multiplying the prior directly by $r$ would instead produce posterior masses $1/4,3/4$, answering the wrong observation protocol.

## 2 Update after a small group is observed

The normalized small-acceptance likelihoods are $1/2$ and $1/10$. Their prior-weighted sum is

$$\Pr(S)=\frac12\frac12+\frac12\frac1{10}=\frac3{10}.$$

The posterior masses of $(r=1/4,r=3/4)$ are

$$\left(\frac{(1/2)(1/2)}{3/10},
\frac{(1/2)(1/10)}{3/10}\right)
=\left(\frac56,\frac16\right).$$

The probability of the high-large-group composition is $1/6$. It is a posterior probability about the population hypothesis. The two future success probabilities are different quantities:

$$E[\mu_G(r)\mid S]
=\frac56\frac38+\frac16\frac58
=\frac5{12},$$

$$E[\mu_I(r)\mid S]
=\frac56\frac12+\frac16\frac7{10}
=\frac8{15}.$$

Both are smaller than their counterparts after $L$, $15/28$ and $22/35$. Observing a small accepted member favors the population with fewer large groups. Large-group members have the higher success risk, so both predicted success probabilities fall. That mechanism explains the direction before arithmetic. It does not mean that a success outcome was observed during recruitment.

## 3 Prove the target difference

For a uniform group draw in a fixed population,

$$\mu_G=E_G(\mu),\qquad
\mu_I=\frac{E_G(N\mu)}{E_G(N)}.$$

The denominator is positive. Subtraction gives

$$\mu_I-\mu_G
=\frac{E_G(N\mu)-E_G(N)E_G(\mu)}{E_G(N)}
=\frac{\operatorname{Cov}_G(N,\mu)}{E_G(N)}.$$

Different group sizes alone determine no sign. If every group has the same risk, covariance vanishes and the targets agree despite unequal sizes. More generally zero covariance suffices. Negative size–risk covariance reverses the lesson's ordering.

In the lesson, $N=1+2Z$ and $\mu=1/4+Z/2$ for a uniform group's large indicator, so covariance is $r(1-r)$. The target gaps are

$$r=1/4:\quad\frac{(1/4)(3/4)}{3/2}=\frac18,
\qquad
r=3/4:\quad\frac{(3/4)(1/4)}{5/2}=\frac3{40}.$$

Using the posterior after $L$ gives

$$\frac5{14}\frac18+\frac9{14}\frac3{40}
=\frac{13}{140}
=\frac{22}{35}-\frac{15}{28}.$$

The covariance and its denominator are calculated within each fixed candidate population before this posterior averaging. Taking a ratio of expectations after mixing the populations is a different operation.

A uniform group's large indicator has Bernoulli$(r)$ distribution because exactly a fraction $r$ of the four groups are large. That marginal statement does not make the four group types independent. Under each composition their count is fixed, so knowing three group types determines the fourth. Independent **with-replacement draws of group labels** across recruitment attempts are compatible with this fixed composition.

## 4 Compare two orders of normalization

After $L$, the persistent-population member prediction is

$$E_\pi[\mu_I(r)]
=\frac5{14}\frac12+\frac9{14}\frac7{10}
=\frac{22}{35}.$$

Here each candidate population is normalized by its own member count before being averaged. Since $E_\pi(r)=4/7$,

$$E_\pi[E_G(N)]=1+2\frac47=\frac{15}{7},\qquad
E_\pi[E_G(N\mu)]=\frac14+2\frac47=\frac{39}{28},$$

and their ratio is $Q=13/20$. The discrepancy is $13/20-22/35=3/140$.

For the changed experiment, redraw a composition independently from the posterior at **every proposal**, then use one uniform-group/three-ticket attempt. The average raw acceptance probability is $(15/7)/3=5/7$. The average raw accepted-success probability is $(39/28)/3=13/28$. Repeating this mixed proposal independently after rejections gives success probability $(13/28)/(5/7)=13/20$ at first acceptance.

The composition acceptance probabilities are $1/2$ and $5/6$. Consequently its accepted composition weights are

$$\frac{(5/14)(1/2)}{5/7}=\frac14,\qquad
\frac{(9/14)(5/6)}{5/7}=\frac34.$$

Weighting their uniform-member risks by these values gives $(1/4)(1/2)+(3/4)(7/10)=13/20$. More readily accepted populations become more prevalent among accepted proposals.

Drawing a composition once per **complete future recruitment run**, and retaining it through rejected attempts, instead gives $22/35$. Each fixed population eventually accepts with probability one, so the posterior composition weights across completed runs remain $5/14,9/14$. The difference is when the population is redrawn, not an approximate computation of an unchanged experiment. No finite random-denominator expectation has been replaced by a ratio of expected totals without specifying a different protocol.

## 5 Use a recorded rejection history

The event now records $R,R,L$ on the first three attempts. Each rejection has probability $\rho(r)=2(1-r)/3$, while a raw large acceptance has probability $r$. Therefore

$$\Pr(RRL\mid r)=\left[\frac{2(1-r)}3\right]^2r.$$

The two likelihoods are $1/16$ and $1/48$. The evidence is $(1/2)(1/16+1/48)=1/24$, and the posterior masses are $3/4,1/4$. Thus

$$E[\mu_G(r)\mid RRL]
=\frac34\frac38+\frac14\frac58=\frac7{16},$$

$$E[\mu_I(r)\mid RRL]
=\frac34\frac12+\frac14\frac7{10}=\frac{11}{20}.$$

These are below the corresponding unlogged-$L$ predictions. The two recorded rejections favor the population with more small groups, because only small-group proposals reject. That extra information reverses the posterior preference between the two compositions compared with observing only $L$.

The expression $\rho(r)^2\Pr(\text{first type }L\mid r)$ incorrectly combines the specified two initial rejections with a likelihood already summed over any number of rejections. The full logged event uses the raw third-attempt probability $r$.

For a correct sequential update, first condition on unlogged first type $L$. The additional observation $K=2$ has conditional likelihood

$$\Pr(K=2\mid\text{first type }L,r)
=\frac{\rho(r)^2r}{r/[1-\rho(r)]}
=\rho(r)^2[1-\rho(r)].$$

It is $1/8$ at $r=1/4$ and $5/216$ at $r=3/4$. Multiplying the lesson's $L$-posterior masses $5/14,9/14$ by these factors, then normalizing, recovers $3/4,1/4$. A sequential calculation must condition the second likelihood on what was already used in the first.

## 6 Change both size and the logged observation

With two tickets, a small group rejects with probability one half and accepts with probability one half. A large group accepts both tickets. The raw attempt probabilities become

$$\Pr(R\mid r)=\frac{1-r}{2},\quad
\Pr(S\mid r)=\frac{1-r}{2},\quad
\Pr(L\mid r)=r.$$

The logged event $RS$ has likelihood $[(1-r)/2]^2$. Its values are $9/64$ and $1/64$, evidence $5/64$, and posterior masses $9/10,1/10$. The posterior mean of $r$ is $3/10$.

The group target remains $\mu_G(r)=1/4+r/2$, because the type-specific risks and group fractions have not changed. Hence

$$E[\mu_G(r)\mid RS]=\frac14+\frac12\frac3{10}=\frac25.$$

The member target changes because a large group now has size two:

$$\mu_I^{(2)}(r)
=\frac{(1-r)(1)(1/4)+r(2)(3/4)}{(1-r)(1)+2r}
=\frac{1+5r}{4(1+r)}.$$

Its values at the two compositions are $9/20$ and $19/28$. Their posterior average is

$$E[\mu_I^{(2)}(r)\mid RS]
=\frac9{10}\frac9{20}+\frac1{10}\frac{19}{28}
=\frac{331}{700}.$$

Within each population, the probability that a uniform member belongs to a large group is $2r/(1+r)$. Its two values are $2/5$ and $6/7$, so the posterior-predictive large-membership probability is

$$\frac9{10}\frac25+\frac1{10}\frac67=\frac{78}{175}.$$

This is a membership prediction, not a success prediction. Combining it with risks gives $1/4+(1/2)(78/175)=331/700$, a useful independent check on the success calculation.

For the posterior ratio, the group-mean member count is $1+r$, and the group-mean risk-weighted member count is $(1+5r)/4$. Thus

$$\frac{E[(1+5r)/4\mid RS]}{E[1+r\mid RS]}
=\frac{5/8}{13/10}=\frac{25}{52}.$$

Multiplying numerator and denominator by four gives the same ratio of posterior expected population totals. It differs from $331/700$.

To obtain $25/52$ as an exact probability, redraw the composition from this posterior independently on each proposal, then use the new two-ticket rule. Its average per-attempt acceptance probability is $(13/10)/2=13/20$, and its average accepted-success probability is $(5/8)/2=5/16$. Their ratio is $25/52$. The accepted composition weights become $45/52,7/52$, which also yield this probability by averaging $9/20,19/28$. Retaining the same unknown composition throughout the run gives the earlier member prediction instead.

A two-member large group with success risk $3/4$ has an expected $3/2$ successes if both members receive one fresh trial under that mean model. An expectation need not be an integer. The realized number would be an integer, and its full joint distribution would require assumptions about dependence between outcomes. Neither the recruitment likelihood nor these single-member predictions treats $3/4$ as an already realized fraction of two binary labels.
