# Worked answers for matched capture practice

Attempt [practice](./capture_recapture_v1-practice.md), using the separate [hints](./capture_recapture_v1-hints.md) if needed, before revealing a worked answer. Posterior vectors list candidate population sizes in increasing order. “Unseen” means absent from the two recorded identifier lists.

## 1 Count subsets and update the population prior

There are $\binom N3$ second subsets. Those with overlap $r$ number $\binom3r\binom{N-3}{3-r}$. Both category counts must be feasible, so $\max(0,6-N)\le r\le3$. These categories partition all size-three subsets, establishing that their probabilities sum to one.

At overlap one, the likelihood is

$$L_N=\frac{3\binom{N-3}{2}}{\binom N3},$$

giving $(3/10,9/20,18/35,15/28)$ for $N=5,6,7,8$. Their sum is $9/5$. Multiplying by prior mass one quarter gives evidence $9/20$. Normalization yields

$$p_N=(1/6,1/4,2/7,25/84).$$

Using common denominator eighty-four, these are $(14,21,24,25)/84$, whose numerators sum to eighty-four. The moments are

$$E(N)=\frac{5(14)+6(21)+7(24)+8(25)}{84}=\frac{47}{7},$$

$$E(N^2)=\frac{25(14)+36(21)+49(24)+64(25)}{84}
=\frac{647}{14},$$

$$\operatorname{Var}(N)=\frac{647}{14}-\left(\frac{47}{7}\right)^2
=\frac{111}{98}.$$

The last two posterior masses sum to $2/7+25/84=7/12$. The known union contains $3+3-1=5$ distinct members, so the data establish $N\ge5$ under perfect matching and closure. The upper endpoint eight entered through the declared prior. The posterior mean summarizes integer-valued uncertainty and need not itself be an integer.

## 2 Change the overlap and the target quantity

For overlap two the likelihood is

$$L_N=\frac{\binom32\binom{N-3}{1}}{\binom N3}
=\left(\frac35,\frac9{20},\frac{12}{35},\frac{15}{56}\right)_N.$$

With common denominator two hundred eighty the likelihood weights are $(168,126,96,75)/280$. Their sum is $465/280=93/56$, so prior predictive evidence is $93/224$. Normalizing gives

$$p_N=\frac{(56,42,32,25)}{155}.$$

The first two moments are $E(N)=956/155$ and $E(N^2)=6080/155$. Therefore

$$\operatorname{Var}(N)=\frac{6080}{155}
-\left(\frac{956}{155}\right)^2=\frac{28464}{24025}.$$

The known union has four members, so $E(U)=956/155-4=336/155$. In the overlap-one analysis $E(U)=47/7-5=12/7$. The total mean changed by $-593/1085$, but the union changed by minus one. The unseen mean therefore changed by $492/1085>0$.

The observed categories are now two seen in both lists, one first-only and one second-only. A second-only member is already recorded and must not be counted unseen. The data's union bound is $N\ge4$; the retained exclusion of $N=4$ comes from the prior, not the overlap.

## 3 Forecast the independent audit

At overlap one the recorded union size is five. Given $N$, a size-three audit with $k$ previously unrecorded members can be selected in $\binom{N-5}{k}\binom5{3-k}$ ways. Divide by all $\binom N3$ audit subsets.

| $N$ | $\Pr(K=0\mid N)$ | $\Pr(K=1\mid N)$ | $\Pr(K=2\mid N)$ | $\Pr(K=3\mid N)$ |
| ---: | ---: | ---: | ---: | ---: |
| $5$ | $1$ | $0$ | $0$ | $0$ |
| $6$ | $1/2$ | $1/2$ | $0$ | $0$ |
| $7$ | $2/7$ | $4/7$ | $1/7$ | $0$ |
| $8$ | $5/28$ | $15/28$ | $15/56$ | $1/56$ |

Weight each row by the posterior $(1/6,1/4,2/7,25/84)$. The four resulting probabilities are

$$\Pr(K=k\mid A,B)=\frac{(2006,2106,567,25)_k}{4704}.$$

Their numerators sum to $4704$. Hence

$$\Pr(K\ge1)=1-\frac{2006}{4704}=\frac{1349}{2352},$$

$$E(K)=\frac{2106+2(567)+3(25)}{4704}
=\frac{1105}{1568}.$$

For an independent mean check,

$$E(1/N)=\frac1{30}+\frac1{24}+\frac2{49}+\frac{25}{672}
=\frac{3599}{23520},$$

so $3[1-5E(1/N)]=1105/1568$. In contrast, substituting the mean population into the conditional-mean expression gives $3[1-5/(47/7)]=36/47$. These differ because averaging $1/N$ and taking the reciprocal of a mean are different operations.

A hypergeometric population size must be an integer. The correct predictive distribution mixes valid integer-population PMFs rather than treating the posterior mean as a physical population. Untagged members include those already recorded in the second list only; they do not all qualify for $K$. Population closure also excludes a new-arrival interpretation.

## 4 Specify a biased sampler before selecting a distribution

Keep $N$ and the tagged set fixed throughout rejection. Let $c_N=\binom N3$. The single-attempt probability of proposing a particular set $S$ and accepting it is $2^{r(S)-3}/c_N$. Its total acceptance probability is

$$a_N=\frac1{8c_N}\sum_j\binom3j\binom{N-3}{3-j}2^j
=\frac{Z_N}{8c_N}>0.$$

Unrecorded repeated rejection contributes a geometric sum. Thus

$$\Pr(S\text{ accepted eventually}\mid N)
=\sum_{\ell=0}^{\infty}(1-a_N)^\ell
\frac{2^{r(S)-3}}{c_N}
=\frac{2^{r(S)}}{Z_N}.$$

Grouping the sets by their tag count yields Fisher's PMF

$$\Pr_F(R=r\mid N)=
\frac{\binom3r\binom{N-3}{3-r}2^r}
{\sum_j\binom3j\binom{N-3}{3-j}2^j}.$$

For example, at $N=6$ the unnormalized overlap weights for $r=0,1,2,3$ are $(1,18,36,8)$, summing to sixty-three, so $\Pr_F(R=1\mid N=6)=2/7$.

The overlap-one likelihoods at $N=5,6,7,8$ are $(3/19,2/7,3/8,10/23)$. At common denominator $24472$ their numerators are $(3864,6992,9177,10640)$. They sum to $30673$, so the original uniform prior gives

$$p_N=\frac{(3864,6992,9177,10640)}{30673},\qquad
E(N)=\frac{210631}{30673}.$$

For the sequential weighted protocol, write T for tagged and U for untagged. At $N=6$,

$$\Pr(\mathrm{TUU})=\frac69\frac37\frac26=\frac2{21},$$

$$\Pr(\mathrm{UTU})=\frac39\frac68\frac26=\frac1{12},$$

$$\Pr(\mathrm{UUT})=\frac39\frac28\frac67=\frac1{14}.$$

Their sum is $1/4$, proving that this Wallenius probability differs from Fisher's $2/7$. Remaining individual weights change after every sequential draw.

SciPy uses total population, tagged count, sample size and odds: Fisher$(6,3,3,2)$ or Wallenius$(6,3,3,2)$ in their respective distribution objects. Wolfram's corresponding distribution arguments are sample size, tagged count, total population and odds: FisherHypergeometricDistribution$[3,3,6,2]$ and WalleniusHypergeometricDistribution$[3,3,6,2]$. Parameter order and mechanism both matter.

If the rejection count $J=\ell$ were recorded, its probability would contribute $(1-a_N)^\ell a_N$, in addition to the accepted-set conditional likelihood. Because $a_N$ depends on $N$, discarding that recorded information would change the declared analysis. Drawing a fresh $N$ after each rejection would instead favor populations according to their acceptance probabilities, changing the distribution of the population underlying the eventual accepted set.

The third audit remains uniform by stipulation. Given its own size, $N$ and the recorded union, it retains the ordinary hypergeometric PMF. A changed second-stage likelihood changes posterior weights for the audit mixture; it does not silently change the audit protocol.

## 5 Change the prior support and test what the data learned

The unchanged overlap-one likelihood is $3\binom{N-3}{2}/\binom N3$. For $N=5,\ldots,12$ its values are proportional to

$$w=(924,1386,1584,1650,1650,1617,1568,1512).$$

In fact the likelihood vector is $w/3080$. The uniform wider prior has mass one eighth, and the weights sum to $11891$, giving evidence $11891/24640$ and posterior $w/11891$.

The posterior mean is

$$E(N)=\frac{\sum_{N=5}^{12}Nw_N}{11891}
=\frac{103636}{11891}.$$

The weighted second-moment numerator is $\sum N^2w_N=959018$. Thus

$$\operatorname{Var}(N)=\frac{959018}{11891}
-\left(\frac{103636}{11891}\right)^2
=\frac{663262542}{141395881}.$$

The weights above eight sum to $6347$, so $\Pr(N>8)=6347/11891=577/1081$. To condition on $N\le8$, divide the first four weights by their sum $5544$. This gives

$$\frac{(924,1386,1584,1650)}{5544}
=\left(\frac16,\frac14,\frac27,\frac{25}{84}\right),$$

exactly the narrower posterior. The identity follows because both priors give the same relative weights to their common support points and use the same likelihood. It does not justify excluding the remaining points.

If eight were a known physical capacity, $N>8$ would be ruled out by external population information. In this lesson it is ruled out only in one illustrative prior. The likelihood remains positive at larger $N$, so the overlap does not establish that cap. Reported unseen-member estimates should therefore identify both prior support and the complete-sample selection mechanism, and examine reasonable alternatives.

## 6 Transfer to a changed second sample size

For a uniform second sample of two with one tagged member,

$$L_N=\frac{\binom31\binom{N-3}{1}}{\binom N2}
=\left(\frac35,\frac35,\frac47,\frac{15}{28}\right)_N.$$

At common denominator one hundred forty, the weights are $(84,84,80,75)$. Their sum is $323$, so the original uniform prior gives evidence $323/560$ and posterior

$$p_N=\frac{(84,84,80,75)}{323}.$$

Its moments are $E(N)=2084/323$ and $E(N^2)=13844/323$, giving

$$\operatorname{Var}(N)=\frac{13844}{323}
-\left(\frac{2084}{323}\right)^2
=\frac{128556}{104329}.$$

The known union is $3+2-1=4$, so $E(U)=2084/323-4=792/323$. The size-three likelihood counts a different collection of subsets and would not describe this experiment.

Membership changes would require a model connecting distinct time-specific populations and their overlaps. Tag loss or identity error would require an observation model for missed or false matches. Unequal or dependent capture mechanisms would require likelihoods matching those mechanisms; equal marginal inclusion probabilities do not by themselves imply uniform complete subsets, as the lesson's adjacent-pair design shows.

More flexible unobserved individual heterogeneity can make unseen-population conclusions depend strongly on restrictions on that heterogeneity. Link's examples compare observed positive capture-frequency distributions under a different heterogeneous model; they do not prove equality of every full finite-$N$ likelihood or failure of every capture–recapture design. The stipulated closed, accurately matched uniform-subset experiment supplies information under its stated assumptions. Whether those assumptions describe real records is a further scientific question.
