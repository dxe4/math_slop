# Worked answers for fitted predictive checks

Attempt [practice](./predictive_check_v1-practice.md), then use [hints](./predictive_check_v1-hints.md), before reading these calculations. Tasks 1–5 complete the core route. Task 6 is optional advanced material. Each study starts from its stated fresh fitting prior; observed datasets are not accumulated across tasks.

## 1 Predict the two reference events

Ordinary posterior replication fixes the two block lengths, draws one shared $p$ from its posterior, and draws four conditionally independent new outcomes. It allows $S^{\mathrm{rep}}$ to take any value from zero through four. Drawing a separate probability for every trial would replace this shared-parameter model.

The sufficient-total reference also fixes $S^{\mathrm{rep}}=2$ and distributes two successes uniformly among four labeled positions. It has six possible ordered strings. Under either reference the event $T^{\mathrm{rep}}\ge2$ consists of count pairs $(0,2),(2,0)$, or strings $00\mid11$ and $11\mid00$. The reference probabilities of these strings differ.

Neither tail is the probability that the model is true. Both are event probabilities conditional on the assumed model. To assess a checking rule at fixed $p$, repeatedly draw an observed four-trial dataset from that $p$, fit a posterior to that particular dataset, compute its tail, and record whether the rule flags it. More replicates from one fitted Beta$(3,3)$ posterior only estimate one dataset's tail; they do not derive the rule's repeated-data error rate.

## 2 Derive the shared-parameter predictive tail

The observed two successes and two failures give likelihood proportional to $p^2(1-p)^2$. Multiplying by the uniform prior and normalizing gives Beta$(3,3)$.

Conditional on a shared $p$, the general count probability is

$$\binom{m_1}{x}\binom{m_2}{z}p^{x+z}(1-p)^{m_1+m_2-x-z}.$$

Multiplication by $p^{a-1}(1-p)^{b-1}/B(a,b)$ and integration yield

$$\Pr(A^{\mathrm{rep}}=x,B^{\mathrm{rep}}=z\mid y)
=\binom{m_1}{x}\binom{m_2}{z}
\frac{B(a+x+z,b+m_1+m_2-x-z)}{B(a,b)}.$$

The integral of the conditional product uses one shared uncertain $p$. A product of two marginal integrals would instead average each block over an independent probability draw. For example, with Beta$(3,3)$, the marginal probability a specified block has two successes is $E(p^2)=2/7$. Multiplying this by the other block's marginal zero-success probability gives $4/49$ for $(2,0)$; the correct shared-$p$ joint probability is $E[p^2(1-p)^2]=1/21$.

For each of the two extreme pairs the count multiplicity is one. Since $B(5,5)=1/630$ and $B(3,3)=1/30$,

$$q_{\mathrm{pp}}=2\frac{1/630}{1/30}=\frac2{21}.$$

Conditional on total two, there are $\binom42=6$ equally likely arrangements. For $A^{\mathrm{rep}}=x$, their number is $\binom2x\binom2{2-x}$, giving masses $(1,4,1)/6$ at $x=0,1,2$. The two extreme allocations have total mass $2/6=1/3$.

The ordinary reference permits different totals; the conditional reference asks about allocation given the observed total. Conditioning removes the total's compatibility with the common-$p$ model and fitting prior. It does not assess all aspects of fit and does not refit a different posterior. These distinct questions explain $2/21\ne1/3$.

## 3 Derive the fitted check's entire sampling law

For $T=2$, the two strings are $11\mid00$ and $00\mid11$, with posterior Beta$(3,3)$ and fitted tail $2/21$.

For $T=1$ and $S=1$, the posterior is Beta$(2,4)$. The three predictive diagonal count pairs have total probability

$$\frac{B(2,8)+4B(4,6)+B(6,4)}{B(2,4)}=\frac{10}{21}.$$

Its complement gives weak tail $11/21$. Replacing every success by a failure maps $S=1$ to $S=3$, preserves absolute contrast, and exchanges the two Beta shapes, so the same tail applies. There are four strings with one success and four with three successes.

For $T=0$, nonnegativity makes the weak tail one. This class has six strings: the all-zero and all-one strings, plus four strings with one success in each block. The class sizes sum to $2+8+6=16$.

Writing $r=1-p$, the fixed-$p$ class probabilities are

$$\begin{aligned}
\Pr_p(q_{\mathrm{pp}}=2/21)&=2p^2r^2,\\
\Pr_p(q_{\mathrm{pp}}=11/21)&=4pr^3+4p^3r=4pr(p^2+r^2),\\
\Pr_p(q_{\mathrm{pp}}=1)&=r^4+p^4+4p^2r^2.
\end{aligned}$$

Their sum is $(p+r)^4=1$. At $p=1/2$, the masses are $1/8,1/2,3/8$.

Averaging the first two probabilities over a uniformly drawn truth gives

$$2B(3,3)=\frac1{15},\qquad
4B(2,4)+4B(4,2)=\frac25.$$

The final mass is $8/15$, either by integrating its three terms or subtracting the first two from one. Each study uses one true $p$ for all four observations; the fitting prior stays uniform in both ensembles.

Only the $2/21$ class meets the $1/10$ threshold. The fixed-$p$ false-alarm probability is $2p^2(1-p)^2$, which equals $1/8$ at $p=1/2$. The prior-averaged probability is $1/15$. Since $1/8>1/10$, the checking rule is not level 10% for every fixed $p$.

The posterior event probability remains correct under its stated model. Its interpretation does not assert that thresholding it has a particular repeated-sampling error bound. Likewise, averaging over a prior does not prove a bound at each fixed truth. This example refutes blanket fixed-parameter conservatism without showing that all posterior predictive diagnostics should be replaced by threshold tests.

## 4 Establish the conditional guarantee and its limit

For fixed $s$, a class with discrepancy $t_j$ has weak tail $c_j=w_1+\cdots+w_j$. Let $j_*$ be the largest index with $c_{j_*}\le\alpha$. If it exists, the event $q_{\mathrm{cond}}\le\alpha$ contains exactly classes $1,\ldots,j_*$ and has probability $c_{j_*}\le\alpha$. If it does not exist, that event has probability zero.

Under the common-$p$ iid null, all observed strings with total $s$ have probability $p^s(1-p)^{4-s}$. Given that total, they are uniform over the same arrangements as the reference. Thus

$$\Pr_p(q_{\mathrm{cond}}(Y)\le\alpha\mid S=s)\le\alpha.$$

Multiply each conditional inequality by $\Pr_p(S=s)$ and sum over attainable $s$ to obtain the unconditional fixed-$p$ inequality. The argument needs a parameter-free law after conditioning on $S$, not a parameter-free unconditional law of $T$. In fact, $\Pr_p(T=2)=2p^2(1-p)^2$ depends on $p$.

At totals zero and four, $T$ is always zero. At totals one and three, it is always one. All these cases have conditional weak tail one. At total two, $T=2$ has mass $1/3$ and tail $1/3$; $T=0$ has mass $2/3$ and tail one. Hence the only possible weak-tail values are $1/3$ and one.

A 10% conditional rule never flags a dataset in this four-trial experiment. It controls false alarms but also cannot reject any alternative at that sample size and threshold: every possible dataset produces a tail above $1/10$. Super-uniformity is the inequality $\Pr(q\le\alpha)\le\alpha$; exact uniformity would require equality for every $\alpha$, which this finite nonrandomized statistic cannot supply. At endpoint truths $p=0,1$, only the corresponding constant-total case occurs and the weak tail remains one.

## 5 Independently transfer to unequal blocks

The predeclared absolute proportion contrast is

$$\left|\frac A3-\frac B7\right|=\frac{|7A-3B|}{21}.$$

Multiplication by the positive constant 21 preserves the ordering of discrepancies. A raw count contrast would compare groups with different numbers of opportunities for successes.

For $111\mid1000000$, the observed counts are $A=3,B=1$, so $S=4$, $T=18$ and the fresh-prior posterior is Beta$(5,7)$. The ordinary predictive count law is

$$\Pr(A^{\mathrm{rep}}=x,B^{\mathrm{rep}}=z\mid y)
=\binom3x\binom7z\frac{B(5+x+z,17-x-z)}{B(5,7)}.$$

Searching each supported $x$ makes the event enumeration explicit:

| $x$ | Inequality in $z$ | Supported extreme $z$ |
| --- | --- | --- |
| $0$ | $3z\ge18$ | $6,7$ |
| $1$ | $\vert 7-3z\vert \ge18$ | none |
| $2$ | $\vert 14-3z\vert \ge18$ | none |
| $3$ | $\vert 21-3z\vert \ge18$ | $0,1$ |

The ordinary extreme count-pair probabilities are

| $(x,z)$ | Predictive probability |
| --- | ---: |
| $(0,6)$ | $\binom76 B(11,11)/B(5,7)=35/8398$ |
| $(0,7)$ | $B(12,10)/B(5,7)=11/16796$ |
| $(3,0)$ | $B(8,14)/B(5,7)=11/7752$ |
| $(3,1)$ | $\binom71 B(9,13)/B(5,7)=77/12597$ |

Their sum is

$$q_{\mathrm{pp}}=\frac{415}{33592}.$$

For the conditional reference, distribute four successes among ten labeled positions. Then

$$\Pr(A^{\mathrm{rep}}=x\mid S^{\mathrm{rep}}=4)
=\frac{\binom3x\binom7{4-x}}{\binom{10}4},\qquad x=0,1,2,3.$$

The numerator counts are $35,105,63,7$, summing to denominator $210$. Thus

| $x$ | Conditional mass | $\vert 7x-3(4-x)\vert =\vert 10x-12\vert $ |
| --- | ---: | ---: |
| $0$ | $1/6$ | $12$ |
| $1$ | $1/2$ | $2$ |
| $2$ | $3/10$ | $8$ |
| $3$ | $1/30$ | $18$ |

Only $x=3$ meets the weak extreme threshold. Therefore $q_{\mathrm{cond}}=1/30$. The ordinary reference includes totals six, seven, three and four in its extreme event; after conditioning on total four, only $(3,1)$ remains, with a different normalization. Both probabilities answer their declared reference questions. Neither is a model-truth probability or an identification of the cause of a discrepancy.

## 6 Optional advanced: randomize ties in two different references

For the fixed conditional reference, strict-tail probability at $t_j$ is $c_{j-1}$ and tie mass is $w_j$. Given that observed class,

$$q^*_{\mathrm{cond}}=c_{j-1}+Uw_j$$

is uniform on $[c_{j-1},c_j]$. The class is observed with probability $w_j$, equal to the interval's length. The intervals tile $[0,1]$ without positive-probability overlap, so their weighted mixture has constant density one. This proves conditional exact uniformity, and averaging over $S$ proves fixed-$p$ exact uniformity. The continuous endpoints have zero probability.

At total two, the extreme class fills $[0,1/3]$ with weight $1/3$, and the balanced class fills $[1/3,1]$ with weight $2/3$. At each other total the statistic is constant, its strict tail is zero and tie mass one, so the randomized tail is just $U$. Uniformity there supplies no information about data fit. Independence and a new uniform draw per repeated study are essential to these distributional statements.

For the ordinary fitted predictive reference, the intervals and observed class weights are different:

| Observed class | Randomized predictive-tail interval | Observed mass at $p=1/2$ |
| --- | --- | ---: |
| $T=2,S=2$ | $[0,2/21]$ | $1/8$ |
| $T=1,S=1$ or $3$ | $[5/63,11/21]$ | $1/2$ |
| $T=0,S=0$ or $4$ | $[5/14,1]$ | $1/8$ |
| $T=0,S=2$ | $[4/7,1]$ | $1/4$ |

For the $T=1$ row, the strict tail is the Beta$(2,4)$ predictive probability of contrast two,

$$2\frac{B(4,6)}{B(2,4)}=\frac5{63}.$$

The weak tail is $11/21$, giving tie mass $4/9$. For $T=0$ with $S=0$, the Beta$(1,5)$ predictive diagonal mass is

$$\frac{B(1,9)+4B(3,7)+B(5,5)}{B(1,5)}=\frac9{14},$$

so its strict tail is $5/14$; total four follows by symmetry. At $S=2$, the Beta$(3,3)$ diagonal mass is $3/7$, giving strict tail $4/7$. Every weak tail at zero is one.

At threshold $1/10$, the full $T=2$ interval qualifies. The included fraction of the $T=1$ interval is

$$\frac{1/10-5/63}{11/21-5/63}=\frac{13}{280}.$$

Neither $T=0$ interval contributes. Therefore

$$\Pr_{p=1/2}(q^*_{\mathrm{pp}}\le1/10)
=\frac18+\frac12\frac{13}{280}=\frac{83}{560}.$$

Using the prior-averaged class probabilities instead gives

$$\Pr_{\mathrm{prior,data},U}(q^*_{\mathrm{pp}}\le1/10)
=\frac1{15}+\frac25\frac{13}{280}=\frac{179}{2100}.$$

The fixed-truth probability $83/560$ is greater than $1/10$, so removing ties has not restored fixed-$p$ uniformity. In the conditional proof, one fixed reference law governs both observed classes and their tail intervals after fixing $S$. In the fitted predictive calculation, each observed dataset defines its own posterior reference. Interval lengths are predictive tie probabilities, while mixture weights are repeated-data class probabilities; they do not match. This separates discreteness from the effect of posterior fitting without recommending randomized decisions.
