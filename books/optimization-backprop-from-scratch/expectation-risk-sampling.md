
# Expectation, Empirical Risk, and Sampling Boundaries

## Purpose and scope

Least squares in the previous chapter projected one recorded target vector. Learning language often moves quickly from that finite problem to “expected risk,” “unbiased gradients,” or “random batches.” Those phrases are meaningful only after a probability law and sampling mechanism are named.

This chapter develops exactly the finite expectation identities needed for optimization. It does not replace probability theory: measure-theoretic expectation, modes of convergence, concentration, stochastic processes, and inference belong in [Probability: Models and Proofs](#/books/probability-models-proofs) and the statistical-learning volume. Here the contract is deliberately narrower:

- distinguish a deterministic average from an expectation under a named law;
- derive empirical risk and conditional group averages;
- prove when a mini-batch gradient is unbiased for a finite-data gradient;
- handle unequal sampling probabilities and weights without changing the estimand silently;
- identify dependence, leakage, and distribution shift as boundaries, not footnotes.

No independence or generalization claim follows merely from writing an expectation symbol.

## Averages and expectations are different objects

For fixed numbers $a_{1},\ldots ,a_{n}$, their arithmetic mean

$\overline{a}=(1/n)\sum_{i=1}^n a_{i}$

is deterministic. If a random index $I$ is uniform on $\{1,\ldots ,n\}$, then $a_{I}$ is a random variable and

$\mathbb{E}[a_{I}]=\sum_{i} P(I=i)a_{i}=(1/n)\sum_{i} a_{i}=\overline{a}$.

The values coincide, but the statements differ. The first computes a property of a fixed list. The second averages possible outcomes under the declared index law. If $P(I=i)=p_{i}$, then

$\mathbb{E}[a_{I}]=\sum_{i} p_{i} a_{i}$,

which generally is not the unweighted mean.

For a finite outcome space $\Omega =\{\omega _{1},\ldots,\omega _{m}\}$ with probabilities $p_{j}\ge 0$ summing to 1, expectation is the weighted sum

$\mathbb{E}[Z]=\sum_{j} p_{j} Z(\omega _{j})$.

Linearity follows directly:

$\mathbb{E}[aZ+bW]=\sum_{j} p_{j}[aZ(\omega _{j})+bW(\omega _{j})]=a\mathbb{E}[Z]+b\mathbb{E}[W]$.

Linearity does not require independence. Independence becomes relevant for products, variances, repeated sampling, and other claims.

### Worked finite law

Suppose a deployment case is of type $A$ with probability $0.8$ and type $B$ with probability $0.2$. A rule has losses $1$ and $9$ on those types. Its expected loss is

$0.8\cdot 1+0.2\cdot 9=2.6$.

A validation file containing one case of each type has unweighted mean loss $(1+9)/2=5$. Neither number is a correction to the other. They answer questions about different weighting laws. To estimate deployment risk from that deliberately balanced file, one would need justified population weights and a sampling account.

## Population risk, empirical risk, and estimands

Let $Z=(X,Y)$ denote a case under a named law $P$, and let $f_\theta$ be a rule with parameter $\theta$. Population risk is

$R_{P}(\theta )=\mathbb{E}_{Z\sim P}[\ell (f_\theta (X),Y)]$,

when the expectation exists. For a fixed dataset $S=(z_{1},…,z_{n})$, empirical risk is

$\widehat{R}_{S}(\theta )=(1/n)\sum_{i} \ell _{i}(\theta )$,

where $\ell _{i}(\theta )=\ell (f_\theta (x_{i}),y_{i})$.

Once $S$ is observed and frozen, $\widehat{R}_{S}$ is a deterministic function of $\theta$. Randomness may enter because the data were sampled, the optimizer samples indices, the initialization is random, or arithmetic is nondeterministic. Those sources should not be collapsed into one vague “stochastic” label.

An **estimand** is the precise mathematical target. Examples include:

- average loss over the recorded rows;
- average loss for a future case under $P$;
- an average giving each person equal weight despite unequal visits;
- a time-discounted operational cost;
- worst-group loss over declared groups.

Changing row weights, deduplicating, balancing classes, or sampling cases unequally can change the estimand. A computational convenience is not automatically a scientific justification.

## Conditional averages on a finite partition

Suppose cases have a group label $G$ in a finite set. For a group $g$ with positive probability,

$\mathbb{E}[L \lvert G=g]=\sum_{l} l P(L=l \rvert G=g)$

in a finite discrete model. The total expectation identity is

$\mathbb{E}[L]=\sum_{g} P(G=g)\mathbb{E}[L | G=g]$.

For a fixed table, the analogous identity decomposes the overall mean into group means:

$(1/n)\sum_{i} l_{i}=\sum_{g}(n_{g}/n)[(1/n_{g})\sum_{i\colon G_{i}=g}l_{i}]$.

### Worked decomposition

Group A has losses $1,2,3$; Group B has loss $10$. Group means are $2$ and $10$. The row-weighted overall mean is

$(\frac{3}{4})\cdot 2+(\frac{1}{4})\cdot 10=4$.

Giving groups equal weight would instead produce $(2+10)/2=6$. Equal-row and equal-group risk are different estimands. Reporting only the overall mean can also hide the large loss in Group B, although one row is too little evidence for a stable population claim.

Conditional summaries describe association under the observed or modeled law. They do not by themselves identify what would happen under an intervention on the group or a feature.

## The full empirical gradient

Assume each per-case loss $\ell _{i}:\mathbb{R}^d\to \mathbb{R}$ is differentiable. For the mean empirical risk,

$\widehat{R}(\theta )=(1/n)\sum_{i}\ell _{i}(\theta )$,

linearity of differentiation over the finite sum gives

$g(\theta )=\nabla \widehat{R}(\theta )=(1/n)\sum_{i} g_{i}(\theta )$,

where $g_{i}(\theta )=\nabla \ell _{i}(\theta )$.

The denominator is part of the algorithm contract. If an implementation sums losses, its gradient is $n$ times the gradient of the mean. A learning rate tuned for mean reduction generally cannot be copied unchanged to sum reduction or to a last batch of different size.

### Worked regression gradient

For scalar linear regression $f_{w}(x)=wx$ with half-squared loss

$\ell _{i}(w)=(\frac{1}{2})(wx_{i}-y_{i})^{2}$,

the per-case gradient is

$g_{i}(w)=(wx_{i}-y_{i})x_{i}$.

With cases $(x,y)=(1,1),(2,2),(3,2)$ and $w=1$, gradients are $0,0,3$. The full mean gradient is $1$. A batch containing only the first two cases returns zero, while a batch containing the third returns a positive value. A noisy batch gradient can differ greatly from the full gradient without being incorrectly implemented.

## Uniform mini-batches with replacement

Let $I_{1},\ldots ,I_{b}$ be independent uniform indices from $\{1,\ldots ,n\}$. Define the batch-gradient mean

$g_{B}(\theta )=(1/b)\sum_{k=1}^b g_{I_{k}}(\theta )$.

Conditioning on the current fixed parameter $\theta$, linearity gives

$\mathbb{E}[g_{B}(\theta ) \lvert \theta ]=(1/b)\sum_{k} \mathbb{E}[g_{I_{k}}(\theta ) \rvert \theta ]$

$=(1/b)\sum_{k} (1/n)\sum_{i} g_{i}(\theta )=g(\theta )$.

Thus the batch mean is an unbiased estimator of the full empirical gradient. The conditional phrase matters: during optimization, $\theta _{t}$ depends on earlier batches. Given the current state, a newly sampled independent batch has the identity above.

For scalar gradients with finite variance, independence also gives

$\operatorname{Var}(g_{B} \lvert \theta )=\operatorname{Var}(g_{I} \rvert \theta )/b$.

For vector gradients, the covariance matrix scales by $1/b$. This is a variance statement about the sampling scheme, not a guarantee that one realized batch points downhill for the full objective.

### Exact enumeration

Let per-case scalar gradients be $(0,3,6)$ and choose a batch of size two with replacement. There are nine equally likely ordered pairs. The batch means include $0,1.5,3,1.5,3,4.5,3,4.5,6$. Their mean is $3$, equal to the full gradient $(0+3+6)/3$.

## Uniform mini-batches without replacement

Now let $B$ be a uniformly chosen subset of $b$ distinct indices, and define

$g_{B}=(1/b)\sum_{i\in B}g_{i}$.

Introduce indicators $J_{i}=1[i\in B]$. Symmetry gives $\mathbb{E}[J_{i}]=b/n$, so

$\mathbb{E}[g_{B}]=(1/b)\sum_{i} \mathbb{E}[J_{i}]g_{i}=(1/b)\sum_{i}(b/n)g_{i}=g$.

Unbiasedness remains true. The selected terms are not independent, however. Their negative dependence changes the covariance; importing the with-replacement variance formula is wrong. Moreover, shuffling once and processing every batch in an epoch creates a sequence whose later batches depend on earlier membership.

An epoch average may equal the full gradient when all per-case gradients are evaluated at the same fixed $\theta$. In actual stochastic optimization, $\theta$ changes after each batch, so the average of sequential update directions is not generally the gradient at either the epoch's start or end.

## Unequal sampling and importance correction

Suppose one index $I$ is sampled with probabilities $p_{i}>0$. The naive gradient $g_{I}$ has expectation $\sum_{i} p_{i} g_{i}$, which targets a $p$-weighted objective rather than the uniform row mean.

To estimate the uniform full gradient, use the Horvitz–Thompson-style correction

$G=g_{I}/(np_{I})$.

Then

$\mathbb{E}[G]=\sum_{i} p_{i}[g_{i}/(np_{i})]=(1/n)\sum_{i} g_{i}=g$.

For a batch of independent draws, average these corrected terms. Positivity is essential: if $p_{i}=0$, no weighting can recover a missing row's contribution. Very small $p_{i}$ can produce enormous weights and high variance.

### Worked unequal sampler

Let gradients be $g_{1}=2$, $g_{2}=8$, while the sampler uses $p_{1}=\frac{3}{4}$, $p_{2}=\frac{1}{4}$. The naive expected gradient is $(\frac{3}{4})2+(\frac{1}{4})8=3.5$, but the uniform full gradient is $5$. Corrected values are

$2/[2(\frac{3}{4})]=\frac{4}{3}$ and $8/[2(\frac{1}{4})]=16$.

Their expectation is $(\frac{3}{4})(\frac{4}{3})+(\frac{1}{4})(16)=1+4=5$. The estimator is unbiased yet variable. Unbiasedness alone is not an efficiency guarantee.

If the desired objective itself uses declared weights $a_{i}$, normalized risk is

$R_{a}(\theta )=[\sum_{i} a_{i}\ell _{i}(\theta )]/[\sum_{i} a_{i}]$.

Sampling and objective weights must be combined deliberately. A convenient sampler can be corrected to target $R_{a}$; silently applying both class weights and oversampling may double-count a reweighting.

## Random batches, reproducibility, and state

A reference sampler should make its state explicit:

```text
function uniform_batch(seed_state, n, b):
    require n > 0 and b > 0
    indices = new length-b integer array
    for k in 0..b-1:
        seed_state, u = next_uniform(seed_state)
        indices[k] = floor(n * u)
    return seed_state, indices
```

The precise pseudo-random generator can be replaced, but a reproducible record needs the algorithm/version, initial state or seed, sampling-with/without-replacement rule, order, batch size, handling of the final batch, and worker partition. “Seed 7” is incomplete if other state or nondeterministic kernels affect the trace.

To test a sampler, use small exact frequencies, range checks, deterministic replay, and—in addition to statistical smoke tests—direct code inspection of the mapping from random bits to indices. A finite frequency test cannot prove uniformity.

## Dependence changes the effective unit

Rows may share a person, device, household, location, time interval, or upstream event. If repeated visits from one person are sampled as if they were unrelated people, the row mean is still a valid arithmetic mean of rows, but its interpretation and uncertainty differ from a person-level estimand.

Consider two people. Person A has ten recorded visits, each with loss 1; Person B has one visit with loss 9. The visit-weighted mean is

$(10\cdot 1+1\cdot 9)/11=\frac{19}{11}\approx 1.73$.

The equal-person mean of person-level averages is $(1+9)/2=5$. Neither is universally correct. The observational unit in the learning contract decides which one answers the intended question.

Dependence also affects splitting. If visits from the same person occur in both train and test, the evaluation may address prediction of new visits for partly known people. It does not automatically address prediction for unseen people. For time-ordered deployment, random row splitting can let later regimes inform earlier evaluation.

## Missingness, selection, and shift

An observed sample can differ from the intended population because inclusion depends on features, outcomes, time, or actions. Let $S=1$ indicate that a case is recorded. Empirical risk on observed cases describes the conditional distribution given $S=1$, not automatically the unconditional target population.

Inverse-probability weights can correct some selection mechanisms only when inclusion probabilities are justified, positive, and tied to a defensible model or design. The algebraic identity does not validate those assumptions. Extreme weights amplify noise and model error.

Similarly, if training cases follow $P_{\mathrm{train}}$ while deployment follows $P_{\mathrm{deploy}}$, then

$E_{P_{\mathrm{train}}}[\ell ]$ and $E_{P_{\mathrm{deploy}}}[\ell ]$

are different risks. Held-out rows sampled from the training regime do not by themselves reveal deployment performance under shift. A density-ratio formula, when one exists, transfers expectations only under support and modeling assumptions that must be stated.

## Optimization evidence versus statistical evidence

The following implications are invalid without additional assumptions:

- an unbiased batch gradient does not imply a low-variance gradient;
- decreasing empirical risk does not imply decreasing population risk;
- an independent random split does not imply the rows are independent units;
- a large sample does not repair leakage or target mismatch;
- a conditional association does not identify an intervention effect;
- repeating random seeds does not quantify uncertainty about population shift.

Optimization asks whether an algorithm approximately minimizes a declared objective. Statistical learning asks what the fitted rule says beyond the observed objective. Causal and decision analyses ask further questions. Keeping these layers separate is a strength, not a limitation.

## Exercises

1. A fixed list has losses $2,5,11$. Compute its mean and express the same number as an expectation under a uniform random index.
2. Under index probabilities $(\frac{1}{2},\frac{1}{3},\frac{1}{6})$, compute the expected loss for values $(2,5,11)$. Is it the row mean?
3. Prove linearity of finite expectation for vector-valued random variables coordinate by coordinate.
4. Groups A and B contain respectively four losses with mean 3 and two losses with mean 9. Compute the row-weighted overall mean and the equal-group mean.
5. For per-case gradients $(1,-2,7)$, compute the full mean gradient and enumerate the expected gradient of one uniform sampled case.
6. Enumerate all size-two ordered batches with replacement from gradients $(0,4)$ and verify unbiasedness of the batch mean.
7. Choose one element uniformly without replacement from $(2,5,8,9)$. Use indicators to show its expectation equals the full mean. What changes for a subset of size three?
8. An implementation uses a sum loss on a batch of size 32, then the final batch has size 5. Explain the step-scale inconsistency and give two repairs.
9. Gradients are $(3,12)$ and sampling probabilities are $(0.8,0.2)$. Find the naive expected gradient and both corrected values targeting the uniform mean.
10. A desired objective weights three rows by $(1,1,4)$. Write its normalized gradient. If rows are sampled uniformly, give an unbiased one-draw estimator.
11. Ten visits from one person have loss 0 and one visit from another has loss 11. Compare visit-weighted and equal-person averages.
12. Give a concrete example in which an unbiased stochastic gradient has very high variance. Explain why unbiasedness is insufficient.
13. A model is tuned after looking at losses on 50 random seeds of the same test set. Identify the information-flow problem even though the optimizer batches were independently sampled.
14. State one additional assumption needed for each move: empirical-to-population, association-to-causation, and predicted probability-to-action.
15. Let independent one-case gradients have mean $\mu$ and covariance $\Sigma$. Prove that the mean of a batch of size $b$ has covariance $\Sigma/b$. Name one reason this formula can fail in an implementation.
16. Importance sampling targets the uniform mean of gradients $g_{i}$ using draw probabilities $p_{i}$. Show that every index with $g_{i}$ potentially nonzero must have $p_{i}>0$, and derive the second moment of the estimator $g_{I}/(np_{I})$.

## Full solutions

1. The mean is $(2+5+11)/3=6$. If $I$ is uniform on $\{1,2,3\}$ and $a=(2,5,11)$, then $\mathbb{E}[a_{I}]=(\frac{1}{3})2+(\frac{1}{3})5+(\frac{1}{3})11=6$.
2. The expectation is $(\frac{1}{2})2+(\frac{1}{3})5+(\frac{1}{6})11=1+\frac{5}{3}+\frac{11}{6}=\frac{9}{2}=4.5$. The row mean is 6, so they differ.
3. Let $Z,W\in \mathbb{R}^d$. For coordinate $j$, finite scalar linearity gives $\mathbb{E}[aZ_{j}+bW_{j}]=a\mathbb{E}[Z_{j}]+b\mathbb{E}[W_{j}]$. Since this holds for every coordinate, $\mathbb{E}[aZ+bW]=a\mathbb{E}[Z]+b\mathbb{E}[W]$ as vectors. No independence is used.
4. There are six rows, so the row-weighted mean is $(4\cdot 3+2\cdot 9)/6=5$. The equal-group mean is $(3+9)/2=6$. The difference comes from whether rows or groups receive equal mass.
5. The full gradient is $(1-2+7)/3=2$. A uniform one-case gradient takes each listed value with probability $\frac{1}{3}$, so its expectation is also 2.
6. Ordered batches are $(0,0),(0,4),(4,0),(4,4)$, with means $0,2,2,4$. Their expectation is $(0+2+2+4)/4=2$, equal to the full mean $(0+4)/2$.
7. For one selection, indicators satisfy $\mathbb{E}[J_{i}]=\frac{1}{4}$, so $\mathbb{E}[\sum_{i}J_{i}a_{i}]=\sum_{i}(\frac{1}{4})a_{i}=6$. For a size-three subset, $\mathbb{E}[J_{i}]=\frac{3}{4}$, and the batch mean has expectation $(\frac{1}{3})\sum_{i}(\frac{3}{4})a_{i}=(\frac{1}{4})\sum_{i} a_{i}=6$. The selected terms are dependent.
8. A sum gradient typically scales with the number of rows, so the last update is about $\frac{5}{32}$ of a full-batch update when per-case magnitudes are comparable. Repair by using the mean in every batch, or scale the learning rate/accumulation so each update represents a declared common denominator. The chosen treatment of a partial final batch must be recorded.
9. The naive expectation is $0.8\cdot 3+0.2\cdot 12=4.8$; the uniform mean is $7.5$. Corrected outcomes $g_{i}/(2p_{i})$ are $3/1.6=1.875$ and $12/0.4=30$. Their expectation is $0.8\cdot 1.875+0.2\cdot 30=7.5$.
10. The normalized gradient is $(g_{1}+g_{2}+4g_{3})/6$. Under uniform sampling with $P(I=i)=\frac{1}{3}$, use $G=(3a_{I}/6)g_{I}=(a_{I}/2)g_{I}$; its expectation is $(\frac{1}{3})\sum_{i}(a_{i}/2)g_{i}=(\frac{1}{6})\sum_{i} a_{i}g_{i}$.
11. The visit-weighted mean is $(10\cdot 0+1\cdot 11)/11=1$. The equal-person mean is $(0+11)/2=5.5$. The correct report depends on whether a visit or a person receives one unit of target mass.
12. Let a one-case gradient be 0 with probability $0.999$ and 1,000 with probability $0.001$. Its expectation is 1, but most draws are 0 and rare draws are enormous; its variance is $0.999(0-1)^{2}+0.001(1000-1)^{2}=999$. An unbiased update can therefore be erratic and require batching, clipping under a changed objective/algorithm, or a better sampler.
13. The test result influences model or procedure selection across seeds, so the test set has become development data. Independent optimizer batches do not block that outer information path. Freeze the resulting protocol and use new untouched evaluation data, or disclose the adaptive evaluation.
14. Empirical-to-population needs a sampling/generalization model connecting observed cases to the target law. Association-to-causation needs an intervention-identification design or assumptions such as justified exchangeability and consistency. Probability-to-action needs a loss, utility, or constraint model and a decision threshold/policy.
15. For $\overline{G}=b^{-1}\sum_{j}G_{j}$, independence makes cross-covariances zero, so $\operatorname{Cov}(\overline{G})=b^{-2}\sum_{j} \operatorname{Cov}(G_{j})=\Sigma/b$. Sampling without replacement, correlated augmentations, clustered rows, shared randomness, or state-dependent sequential sampling can introduce nonzero covariance terms; then the simple $1/b$ law is not the declared model.
16. If some $p_{i}=0$, that index is never observed and its contribution $g_{i}/n$ cannot appear in the estimator's expectation unless it is known to be zero and handled separately. With full support, $\mathbb{E} \lVert g_{I}/(np_{I})\rVert^{2}=\sum_{i} p_{i} \lVert g_{i}\rVert^{2}/(n^{2}p_{i}^{2})=n^{-2}\sum_{i} \lVert g_{i}\rVert^{2}/p_{i}$. Small probabilities on large gradients can therefore make the estimator unbiased but extremely variable.

## Project checkpoint and forward links

Construct a tiny finite empirical-risk problem with at least two groups and unequal per-case gradients. Implement uniform and unequal one-index samplers with explicit state, enumerate their exact expectations, and verify the importance correction. Report both equal-row and equal-group risks and state which estimand your optimizer targets. Do not make a population claim from the enumeration.

Chapters 5–9 now treat derivatives of the executed finite objective. Chapter 13 will return to stochastic optimization dynamics. Population guarantees remain the responsibility of the probability and statistical-learning routes named at the start of this chapter.
