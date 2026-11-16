# Estimate unseen population members from matched samples

Three members of a closed population are identified, tagged and returned. A second sample contains three distinct members, one of whom has a tag. The overlap tells us something about the unknown population size. It does not reveal how many members were never recorded, and its interpretation depends on how complete samples were selected.

We will enumerate exact likelihoods, update a declared finite prior, and predict what an independent audit might find. Then we will change the overlap, the sampling mechanism and the prior support. One changed example lowers the estimated total population while raising the estimated number still unseen: these are different targets.

Preparation: combinations, conditional probability, Bayes's rule on a finite set, expectation and variance. Allow about 120–150 minutes including [six practice tasks](./capture_recapture_v1-practice.md), an unpiloted study estimate. Separate [hints](./capture_recapture_v1-hints.md) and [worked answers](./capture_recapture_v1-answers.md) support progressively less scaffolded work.

The existing finite-population investigation E01 knows its population register and predicts missing outcomes. Here population size and unrecorded membership are unknown. The [detection investigation](./detection_model_v1-lesson.md) models a Poisson event rate with incomplete recording; here we match identities across fixed-size samples of existing members. These are distinct observation models.

> Predict first: should more overlap suggest fewer members? Must it also suggest fewer members remain unseen? If tagged members are favored in the second sample, can the same likelihood still be used?

## Declare the population and the sample protocol

Let $N$ be an unknown integer population size. Before any capture, stipulate the illustrative proper prior

$$\Pr(N=v)=\frac14,\qquad v\in\{5,6,7,8\}.$$

These bounds express prior belief for this teaching example. Eight is not a known physical capacity and is not an upper bound learned from the overlap. Later we will compare a different proper prior extending to twelve.

The population is closed throughout: no births, deaths, arrivals, departures or replacement members. Each member has an arbitrary unique identifier used only for matching records. Identifiers are not consecutive serial numbers that reveal $N$, and there is no known complete register. Recognition is perfect, with no lost identifiers, lost tags or false identity matches.

Take a first **fixed-size uniform subset** of three distinct members, record their identifiers, tag them and return all three. Take a second uniform subset of three distinct members, independently of the first subset given $N$. Return them as well. Within each sample there is no replacement; between samples the same member can appear again. The fixed sample counts do not supply a separate binomial capture-count likelihood.

Uniform means every complete subset of the specified size is equally probable. Equal marginal inclusion probabilities alone would not guarantee this: choosing uniformly among adjacent pairs $\{1,2\},\{2,3\},\{3,4\},\{4,1\}$ gives each of four members inclusion probability one half but makes two of the six possible pairs impossible. Our likelihood requires the declared uniform-subset design.

Let $m=3$ be the first sample size, $n=3$ the second sample size, and $R$ their overlap. Tags have no effect on the baseline second-sample selection. We observe $R=1$.

## Count subsets to derive the likelihood

Given $N$ and the first tagged set, there are $\binom Nn$ equally likely second subsets. A subset with exactly $r$ tagged members can be formed by choosing $r$ of the $m$ tagged members and $n-r$ of the $N-m$ others. Therefore

$$\Pr(R=r\mid N,m,n)
=\frac{\binom mr\binom{N-m}{n-r}}{\binom Nn}.$$

The feasible range is $\max(0,m+n-N)\le r\le\min(m,n)$; outside it the probability is zero. Summing the numerator over all feasible $r$ counts every size-$n$ subset once, so the PMF normalizes. This is the hypergeometric law, derived here from the experimental design. [Downey's mark-and-recapture chapter, sections 15.1–15.2](https://allendowney.github.io/ThinkBayes2/chap15.html) develops the same likelihood-to-population-size update.

For the observed overlap one, the likelihood values are

| Candidate $N$ | $5$ | $6$ | $7$ | $8$ |
| --- | ---: | ---: | ---: | ---: |
| $\Pr(R=1\mid N)$ | $3/10$ | $9/20$ | $18/35$ | $15/28$ |

For example, at $N=6$, choose one of three tagged members and two of three untagged members: $3(3)/20=9/20$. A likelihood is a probability of the recorded overlap at a particular $N$; it is not yet a probability distribution over $N$.

## Normalize the posterior over population size

For prior masses $\pi_v$ at candidate population sizes $v$, finite Bayes updating gives

$$p_v=\Pr(N=v\mid R=r)=
\frac{\pi_v\Pr(R=r\mid N=v)}
{\sum_w\pi_w\Pr(R=r\mid N=w)}.$$

Under the stipulated uniform prior and overlap one, the prior predictive probability of that observation is $9/20$. Dividing prior-times-likelihood by this evidence gives

| Candidate $N$ | $5$ | $6$ | $7$ | $8$ |
| --- | ---: | ---: | ---: | ---: |
| Posterior probability $p_N$ | $1/6$ | $1/4$ | $2/7$ | $25/84$ |

These masses sum to one. Their exact summaries are

$$E(N\mid R=1)=\frac{47}{7},\qquad
\operatorname{Var}(N\mid R=1)=\frac{111}{98},\qquad
\Pr(N\ge7\mid R=1)=\frac7{12}.$$

The mean $47/7$ is a summary of integer possibilities, not a possible population size. The posterior still assigns zero probability above eight because the declared prior did so. The overlap does not establish that exclusion.

## Separate total size from the number not yet recorded

Let $A$ and $B$ be the two recorded identifier sets. Their union size is known exactly:

$$u=|A\cup B|=m+n-R.$$

At overlap one, $u=5$. Thus the number not recorded in either sample is $U=N-5$, with posterior mean $12/7$. This is a count of existing population members, not new arrivals or an event rate.

The recorded categories are:

| Identifier category | Both samples | First only | Second only | Neither sample |
| --- | ---: | ---: | ---: | ---: |
| Count for overlap one | $1$ | $2$ | $2$ | $N-5$ |

Now change only the observed overlap to $R=2$, retaining the same protocol and the same previously declared prior. The posterior over $N=5,6,7,8$ becomes

$$\frac{(56,42,32,25)}{155},\qquad
E(N\mid R=2)=\frac{956}{155},\qquad
\operatorname{Var}(N\mid R=2)=\frac{28464}{24025}.$$

The estimated total falls, but the known union falls from five to four. Therefore the posterior expected number not in either recorded sample rises:

$$E(U\mid R=2)=\frac{956}{155}-4=\frac{336}{155}
>\frac{12}{7}.$$

More recapture means fewer distinct identities were recorded. Subtracting the changed union resolves the apparent contradiction. In this changed case the data permit a population as small as four; the retained lower support endpoint five is also a prior restriction.

## Predict a genuinely new audit

After the two recorded samples, take a third, independent **uniform audit subset of three distinct existing members**, conditional on $N$ and the past sets. Let $K$ count audit members whose identifiers are absent from both recorded samples.

“Previously unseen” here means not in the recorded union. It does not mean merely untagged: under overlap one, the two second-only members have no first-sample tag but are already recorded. It also does not mean newly arrived; population closure remains in force.

Given $N$ and union size $u$, exactly $N-u$ members qualify. Uniform audit sampling gives

$$\Pr(K=k\mid N,A,B)
=\frac{\binom{N-u}{k}\binom u{3-k}}{\binom N3}.$$

The past identities affect this probability through $u$ under the declared uniform audit. Average the **whole** conditional PMF over the population posterior:

$$\Pr(K=k\mid A,B)=
\sum_N p_N
\frac{\binom{N-u}{k}\binom u{3-k}}{\binom N3}.$$

For the original uniform experiment with overlap one, the exact predictive PMF is

| Audit count $K$ | $0$ | $1$ | $2$ | $3$ |
| --- | ---: | ---: | ---: | ---: |
| Predictive probability | $2006/4704$ | $2106/4704$ | $567/4704$ | $25/4704$ |

The row sums to one, and

$$\Pr(K\ge1\mid A,B)=\frac{1349}{2352},\qquad
E(K\mid A,B)=\frac{1105}{1568}.$$

Conditional expectation provides another check:

$$E(K\mid A,B)=\sum_Np_N\frac{3(N-u)}N
=3[1-uE(1/N\mid A,B)].$$

Substituting the posterior mean $47/7$ into that conditional-mean formula would give $36/47$, which is different. Substituting it into a hypergeometric PMF would also violate the requirement for an integer population size. Posterior averaging and a summary-value substitution are different operations.

## Compare the declared offline cases

The explorer compares eight exact cases: overlap one or two, uniform or Fisher-weighted second sampling, and prior support $5$ through $8$ or $5$ through $12$. Each case uses a proper prior and the stated observed overlap. The third audit remains uniform in every case; its protocol is not silently changed with the second capture.

<!-- EXPLORER -->

## Change the second-sample mechanism explicitly

Suppose second-stage sampling now favors tagged members. Saying “tag weight two” does not by itself specify a complete-sample distribution. We will define a particular fixed-size **accepted-batch** experiment.

Keep the same physical population and first tagged set throughout the following attempts:

1. Propose a uniform size-three subset without replacement.
2. Count its tagged members, $r$, and accept the whole proposed subset with probability $2^{r-3}$.
3. If rejected, return every proposed member and independently propose another subset from that same population. Stop at the first accepted proposal.

Only identifiers in the accepted batch and its overlap are recorded for analysis. Rejected sets, rejection counts, elapsed attempt times and other proposal information are unrecorded. No new $N$ is drawn during rejection: this is one closed population. First-sample tags are retained, and all accepted members are returned before a later audit.

For a particular proposed subset $S$, let $r(S)$ be its tag count. The probability of proposing it and accepting that attempt is $\binom N3^{-1}2^{r(S)-3}$. Conditioning on acceptance normalizes these weights. Summing over any number of unrecorded rejected attempts gives the same accepted-set law:

$$\Pr(S\text{ is the accepted set}\mid N)
=\frac{2^{r(S)}}{Z_N},$$

$$Z_N=\sum_j\binom3j\binom{N-3}{3-j}2^j.$$

The sum includes only feasible $j$. Consequently

$$\Pr_F(R=r\mid N)=
\frac{\binom3r\binom{N-3}{3-r}2^r}{Z_N}.$$

This is Fisher's noncentral hypergeometric law with odds parameter $\omega=2$. At $\omega=1$ its subset weights become uniform and the ordinary hypergeometric law returns. The [SciPy Fisher documentation](https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.nchypergeom_fisher.html) gives this normalized weighted PMF; the rejection construction above specifies an actual experiment that realizes it.

At overlap one its likelihoods for $N=5,6,7,8$ are $(3/19,2/7,3/8,10/23)$. The same uniform prior therefore gives posterior

$$\Pr_F(N\mid R=1)=
\frac{(3864,6992,9177,10640)}{30673},\qquad
E_F(N\mid R=1)=\frac{210631}{30673}.$$

The observation is unchanged, but its likelihood has changed. The main uniform-sampling posterior cannot simply be reused.

The per-attempt acceptance probability is $a_N=Z_N/[8\binom N3]$, which depends on $N$. Recording how many proposals were rejected would supply extra information and require a different likelihood. Drawing a fresh $N$ from its prior on each rejected attempt would also define a different hierarchical experiment.

## Distinguish accepted batches from sequential weighted draws

A second plausible biased protocol draws exactly three members one at a time without replacement, each time choosing an individual in proportion to its remaining weight. Give tagged individuals weight two and others weight one. This sequential protocol has the Wallenius noncentral hypergeometric distribution, rather than the Fisher distribution above. [Fog's Biased Urn Theory, sections 2–6](https://cran.r-project.org/web/packages/BiasedUrn/vignettes/UrnTheory.pdf) distinguishes these sampling mechanisms.

At $N=6$, with three tagged and three untagged members, exactly one tagged draw can occur in the orders tagged–untagged–untagged, untagged–tagged–untagged, or untagged–untagged–tagged. Their probabilities are

$$\frac{2}{21},\qquad\frac1{12},\qquad\frac1{14}.$$

They sum to $1/4$. Fisher's accepted-batch probability is $2/7$. The ordinary uniform-sampling probability is $9/20$. The same informal weight ratio therefore does not justify choosing a distribution without specifying how samples were selected.

Software uses different parameter orders. For our total size $N$, tagged count $m$, second sample size $n$ and tagged-to-untagged odds $\omega$:

| Distribution | SciPy parameter order | Wolfram Language parameter order |
| --- | --- | --- |
| Uniform hypergeometric | hypergeom$(N,m,n)$ | HypergeometricDistribution$[n,m,N]$ |
| Fisher | nchypergeom_fisher$(N,m,n,\omega)$ | FisherHypergeometricDistribution$[n,m,N,\omega]$ |
| Wallenius | nchypergeom_wallenius$(N,m,n,\omega)$ | WalleniusHypergeometricDistribution$[n,m,N,\omega]$ |

The [Wolfram Fisher](https://reference.wolfram.com/language/ref/FisherHypergeometricDistribution.html) and [Wolfram Wallenius](https://reference.wolfram.com/language/ref/WalleniusHypergeometricDistribution.html) references document these distinct functions. Matching a software name and its arguments follows the sampling derivation; it does not replace it.

## Examine the prior support instead of learning a cap by assertion

Return to uniform sampling and overlap one. Compare a second illustrative prior declared before sampling:

$$\Pr(N=v)=\frac18,\qquad v\in\{5,6,\ldots,12\}.$$

This differs from the first prior; it is not a numerical refinement of the same probability model. The likelihood is unchanged. Its posterior for $N=5,\ldots,12$ is

$$\frac{(924,1386,1584,1650,1650,1617,1568,1512)}{11891}.$$

Now

$$E(N\mid R=1)=\frac{103636}{11891},\qquad
\operatorname{Var}(N\mid R=1)=\frac{663262542}{141395881},$$

$$\Pr(N>8\mid R=1)=\frac{577}{1081}.$$

More than half the posterior mass lies above the earlier prior's endpoint. The data did not learn a cap of eight. Conditioning this wider posterior on $N\le8$ exactly recovers the narrower posterior: within that subset the two priors assigned equal relative masses, and Bayes's rule multiplies those masses by the same likelihoods.

Both priors are proper. Properness does not make a support choice empirically established. Posterior conclusions about unseen members should be reported with the prior support and sampling mechanism that produced them.

## Keep the limits of the observation model visible

The exact calculation depends on closed membership, accurate matches and the specified complete-subset design. If some individuals are persistently easier to capture, if tagging changes behavior, or if members enter and leave, these likelihoods need not describe the records. A good fit to one overlap count cannot establish all those assumptions.

[Link's heterogeneous-detection study](https://museucienciesjournals.cat/en/abc/issue/27-1-2004-abc/individual-heterogeneity-and-identifiability-in-capture-recapture-models.pdf), especially its closed-population examples, shows why observed positive capture frequencies can leave the unseen fraction sensitive to restrictions on individual detection heterogeneity. Its model is different from our stipulated uniform-subset experiment; it is not a proof that every capture–recapture design fails.

The lesson's numbers describe synthetic experiments under declared priors and protocols. Complete [practice](./capture_recapture_v1-practice.md), then return after a delay and reconstruct the subset-counting likelihood, the recorded union and the audit mixture. Explain which additional information would be required before applying the calculation to real records.

---

Printable copy: [study edition (PDF)](../../pdfs/bayesian/study-editions/capture_recapture_v1.pdf), the lesson and practice without worked answers.
