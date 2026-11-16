# Worked answers for fixed outcome sampling

Attempt [practice](./case_control_v1-practice.md) and consult [hints](./case_control_v1-hints.md) before these calculations. Each task is a separate probability experiment and starts from its stated prior. Tasks 1–4 complete the core route; tasks 5–6 use the optional advanced material.

## 1 Transform probabilities under outcome only selection

The rule is valid for $R\ge1$. Before normalizing, the included masses are $(6,54/R,15,45/R)/120$ in the task's order. Their sum is $(21+99/R)/120$. Thus

$$ (p_{01}^S,p_{00}^S,p_{11}^S,p_{10}^S)
=\frac{(6,54/R,15,45/R)}{21+99/R}.$$

Normalizing within each $X$ row gives

$$q_0^S=\frac{R}{R+9},\qquad q_1^S=\frac{R}{R+3}.$$

At $R=3$ the risks are $1/4$ and $1/2$; at $R=9$ they are $1/2$ and $3/4$. Both increase with $R$. The source risks are $1/10,1/4$, obtained at $R=1$. The included risk ratio is

$$\frac{q_1^S}{q_0^S}=\frac{R+9}{R+3},$$

giving $5/2,2,3/2$ at $R=1,3,9$. The two included odds are $R/9$ and $R/3$, so their ratio is exactly three for every allowed $R$. This is an algebraic selection identity without a rare-outcome approximation.

The included prevalence is

$$\pi^S=\frac{21}{21+99/R}=\frac{7R}{7R+33},$$

giving $7/40,7/18,21/32$ for the three values. At $R=9$, averaging the included risks with source characteristic weights gives $5/8$, rather than source prevalence $7/40$. The source weights are correct for averaging **source** conditional risks; the included risks describe a different conditional distribution. The known weights do not repair that mismatch. No unknown parameter was updated in this calculation.

## 2 Derive the actual fixed quota likelihood

The exact count-data probability is

$$\binom{21}{15}\binom{11}{5}a^{15}(1-a)^6b^5(1-b)^6.$$

The likelihood is proportional to the product of powers after dropping those parameter-independent coefficients. Write the Beta density as $u^{\alpha-1}(1-u)^{\beta-1}/B(\alpha,\beta)$. Multiplication by the independent priors and normalization gives

$$p(a,b,\pi\mid D)
=\frac{a^{15}(1-a)^6}{B(16,7)}
\frac{b^5(1-b)^6}{B(6,7)}
\frac{\pi(1-\pi)}{B(2,2)}.$$

The three factors are normalized densities. Thus $a\mid D\sim\operatorname{Beta}(16,7)$, $b\mid D\sim\operatorname{Beta}(6,7)$ and $\pi\mid D\sim\operatorname{Beta}(2,2)$ independently.

The design fixed the numbers of cases and controls before measuring $X$. It did not generate 32 independent source outcomes and observe 21 cases, so $\pi^{21}(1-\pi)^{11}$ is not part of this likelihood. In particular, $21/32$ is not an observed random source prevalence estimate in this experiment.

One specified ordered sequence with the same counts has probability $a^{15}(1-a)^6b^5(1-b)^6$ without binomial coefficients. It gives the same posterior because the omitted factors are parameter-independent. The difference matters for an exact event probability or evidence, not for this posterior update.

The unchanged marginal prevalence posterior relies on prior independence. A dependent prior can link possible prevalence values to values of $a,b$ favored by the likelihood. Then

$$p(\pi\mid D)\propto p(\pi)\int L(a,b)p(a,b\mid\pi)\,da\,db$$

need not equal $p(\pi)$. A likelihood independent of $\pi$ alone does not remove prior dependence.

## 3 Separate an association summary from an absolute risk

The cells are $p_{11}=\pi a$, $p_{01}=\pi(1-a)$, $p_{10}=(1-\pi)b$ and $p_{00}=(1-\pi)(1-b)$. Taking their cross-product ratio cancels $\pi(1-\pi)$:

$$\operatorname{OR}=\frac{a(1-b)}{(1-a)b}.$$

For $0<a,b<1$, $a(1-b)>(1-a)b$ is equivalent to $a>b$. The posterior Beta distributions put probability one in this interior. Hence the posterior probability OR exceeds one is exactly the probability $a>b$.

Using independent posterior odds moments,

$$E(\operatorname{OR}\mid D)
=E\!\left[\frac a{1-a}\right]E\!\left[\frac{1-b}{b}\right]
=\frac{16}{6}\frac75=\frac{56}{15}.$$

The posterior parameter means are $16/23$ and $6/13$, giving OR at those means $8/3$. The observed cross-product ratio is three. The first is the expectation of the posterior OR distribution, the second applies a nonlinear function to two posterior means, and the third describes the observed table. These quantities need not agree.

Row normalization gives

$$q_0=\frac{\pi(1-a)}{\pi(1-a)+(1-\pi)(1-b)},\qquad
q_1=\frac{\pi a}{\pi a+(1-\pi)b}.$$

With $a=5/7,b=5/11$, the resulting risks are

| Source prevalence | $q_0$ | $q_1$ | OR |
| --- | ---: | ---: | ---: |
| $7/40$ | $1/10$ | $1/4$ | $3$ |
| $1/2$ | $11/32$ | $11/18$ | $3$ |

The two populations have the same $X$ probabilities within each $Y$ stratum. Their fixed-quota characteristic likelihoods are therefore identical. The data do not identify source prevalence, but an explicit proper prevalence prior and the updated $a,b$ induce a source-risk posterior. Learning $a,b$ can change that induced distribution even though its marginal prevalence prior remains unchanged. The assumptions about prevalence remain necessary to interpret absolute source risks.

For the optional integral, independence gives

$$\begin{aligned}
\Pr(a>b\mid D)
&=\int_0^1f_a(x)F_b(x)\,dx\\
&=\sum_{j=6}^{12}\binom{12}{j}
\frac{B(16+j,19-j)}{B(16,7)}
=\frac{57095}{62031}\approx0.9204.
\end{aligned}$$

For integer $u,v>0$, $B(u,v)=(u-1)!(v-1)!/(u+v-1)!$, so the seven terms can be evaluated as rational numbers. This calculation concerns an unknown association parameter, not a future job's outcome probability or an intervention effect.

## 4 Transfer to different counts and a different outcome margin

The new quota design gives

$$L(a,b,\pi)\propto a^4(1-a)^2b(1-b)^3.$$

Resetting to the original priors yields independent

$$a\mid D_4\sim\operatorname{Beta}(5,3),\qquad
b\mid D_4\sim\operatorname{Beta}(2,4),\qquad
\pi\mid D_4\sim\operatorname{Beta}(2,2).$$

The posterior mean OR is

$$E(\operatorname{OR}\mid D_4)=\frac{5}{3-1}\frac{4}{2-1}=10.$$

At parameter means $E(a)=5/8,E(b)=1/3$, the OR is

$$\frac{(5/8)/(3/8)}{(1/3)/(2/3)}=\frac{10}{3}.$$

The mean is much larger, reflecting posterior tail behavior when a small control characteristic count permits $b$ near zero. Both expectations exist because the relevant Beta shape parameters exceed one. The quota fraction $6/10=3/5$ remains a design choice and does not update $\pi$.

The independent unfiltered source sample is different: the number of delayed jobs is Binomial$(10,\pi)$. Recording only six delayed and four other outcomes gives exact probability $\binom{10}{6}\pi^6(1-\pi)^4$, or likelihood proportional to those powers. The prevalence update is

$$\pi\mid D_4,\text{unfiltered }Y\text{ data}\sim\operatorname{Beta}(8,6).$$

The $a,b$ posteriors stay Beta$(5,3)$ and Beta$(2,4)$ because the additional record contains only $Y$ and its likelihood depends only on $\pi$. All three posterior coordinates remain independent under the stated independent priors and independent sampling designs. The source population parameters persist across both datasets; a fresh prevalence parameter is not drawn for the unfiltered sample.

The numerical fraction $3/5$ appears in both designs. In the quota audit it was fixed before sampling; in the unfiltered sample it is the result of ten random source outcomes. Their equal numerical values do not make their likelihood contributions interchangeable.

## 5 Optional compatible priors and the full odds ratio law

A unit-parameter Dirichlet table has independent retrospective coordinates $a,b\sim\operatorname{Beta}(1,1)$ and $\pi\sim\operatorname{Beta}(2,2)$. Grouping the same prior table by $X$ gives independent $q_0,q_1\sim\operatorname{Beta}(1,1)$, also independent of the source $X$ margin. The formal prospective likelihood then yields independent $Q_0\sim\operatorname{Beta}(7,7)$ and $Q_1\sim\operatorname{Beta}(16,6)$.

Take independent rate-one Gamma variables with the stated shapes. The disjoint column pairs give independent

$$A=\frac{G_{11}}{G_{11}+G_{01}}\sim\operatorname{Beta}(16,7),\qquad
B=\frac{G_{10}}{G_{10}+G_{00}}\sim\operatorname{Beta}(6,7).$$

The disjoint row pairs give independent

$$Q_0=\frac{G_{01}}{G_{01}+G_{00}}\sim\operatorname{Beta}(7,7),\qquad
Q_1=\frac{G_{11}}{G_{11}+G_{10}}\sim\operatorname{Beta}(16,6).$$

Simplifying each odds produces

$$\frac{A}{1-A}\frac{1-B}{B}
=\frac{G_{11}}{G_{01}}\frac{G_{00}}{G_{10}}
=\frac{Q_1}{1-Q_1}\frac{1-Q_0}{Q_0}.$$

The equality holds for every positive quadruple. Consequently the actual retrospective OR and formal prospective OR have the same distribution, not just the same mean. The Gamma construction couples the two pairs to prove that marginal identity; it does not assert that all four constructed Beta variables are mutually independent.

The normalized quadruple has Dirichlet$(7,7,6,16)$ law and prevalence

$$\frac{G_{01}+G_{11}}{G_{00}+G_{01}+G_{10}+G_{11}}
\sim\operatorname{Beta}(23,13).$$

That is the outcome-margin law from a joint-table update, not the actual fixed-quota prevalence posterior Beta$(2,2)$. Generate a separate independent Beta$(2,2)$ prevalence alongside $A,B$ to obtain the actual posterior in the core parameterization. The induced actual source risks need not have the formal prospective $Q_0,Q_1$ laws.

With independent **formal prospective** half priors only, the posterior shapes are $Q_0\sim\operatorname{Beta}(13/2,13/2)$ and $Q_1\sim\operatorname{Beta}(31/2,11/2)$. Therefore

$$E(\operatorname{OR})
=\frac{31/2}{11/2-1}\frac{13/2}{13/2-1}
=\frac{31}{9}\frac{13}{11}
=\frac{403}{99}\ne\frac{56}{15}.$$

The unequal means prove these two OR laws differ. This mismatch compares half priors in one calculation with the core uniform retrospective priors in the other. A common Dirichlet$(1/2,1/2,1/2,1/2)$ prior instead induces half priors for both retrospective $a,b$ and prospective $q_0,q_1$, with prevalence prior Beta$(1,1)$. Its retrospective posterior has $a\sim\operatorname{Beta}(31/2,13/2)$ and $b\sim\operatorname{Beta}(11/2,13/2)$. Its mean OR is also $403/99$, and a shared Gamma construction with shapes $(13/2,13/2,11/2,31/2)$ proves equality of the full OR laws for that different common prior.

Byrne and Dawid's theorem 2 gives a sufficient framework through a strong hyper Markov joint prior and the coordinate priors it induces. It is not an if-and-only-if claim. Neither that theorem nor this coupling equates full posteriors for every population parameter.

## 6 Optional derive a different control recruitment likelihood

On one control proposal the probabilities are

$$\Pr(\text{accepted }X=1\mid b)=\frac b3,\qquad
\Pr(\text{accepted }X=0\mid b)=\frac{1-b}{9},\qquad
\rho(b)=\Pr(\text{rejection}\mid b)=\frac{8-2b}{9}.$$

They sum to one. For exactly $k$ rejected proposals followed by accepted $X=1$, the probability is $\rho(b)^k b/3$. Conditional on the same persistent $b$, summing all $k\ge0$ gives

$$\frac{b/3}{1-\rho(b)}=\frac{3b}{1+2b}.$$

Acceptance eventually occurs since $(1+2b)/9\ge1/9$. The two ordered cases contribute $a(1-a)$, giving exact event likelihood

$$L(a,b)=a(1-a)\frac{3b}{1+2b}.$$

No binomial coefficient two appears because the case record is ordered. The factor $b$ alone would describe an unfiltered control's characteristic. The raw accepted-$X=1$ factor $b/3$ would describe acceptance on one specified proposal. Neither is the probability of the first accepted characteristic when the failed-proposal count is unrecorded.

Put $c=2-\log3>0$. Polynomial division gives

$$\int_0^1\frac{3b}{1+2b}\,db
=\int_0^1\left(\frac32-\frac{3/2}{1+2b}\right)db
=\frac32-\frac34\log3=\frac34c.$$

The case integral is $\int_0^1a(1-a)da=1/6$, so the exact event evidence is $c/8$. The posterior is independent across

$$a\mid D_*\sim\operatorname{Beta}(2,2),\qquad
p(b\mid D_*)=\frac{4b}{c(1+2b)},\qquad
\pi\mid D_*\sim\operatorname{Beta}(2,2).$$

The control density is not Beta because of the remaining $1+2b$ denominator. The prevalence prior is unchanged under its stated independence: no random source outcome margin was observed.

For the control mean, polynomial division gives

$$\frac{b^2}{1+2b}=\frac b2-\frac14+\frac{1}{4(1+2b)},$$

so

$$E(b\mid D_*)=\frac4c\int_0^1\frac{b^2}{1+2b}\,db
=\frac{\log3}{2c}\approx0.6094.$$

The posterior $a$ odds moment is two. For the control inverse odds,

$$\begin{aligned}
E\!\left[\frac{1-b}{b}\mid D_*\right]
&=\frac4c\int_0^1\frac{1-b}{1+2b}\,db\\
&=\frac4c\left(-\frac12+\frac34\log3\right)
=\frac{3\log3-2}{c}.
\end{aligned}$$

Thus

$$E(\operatorname{OR}\mid D_*)
=\frac{2(3\log3-2)}c\approx2.8752.$$

For a fixed $b$, a Beta$(2,2)$ variable has survival probability

$$\Pr(a>b)=1-3b^2+2b^3=(1-b)^2(1+2b).$$

Multiplying by the independent posterior density of $b$ cancels $1+2b$:

$$\Pr(\operatorname{OR}>1\mid D_*)
=\frac4c\int_0^1 b(1-b)^2\,db
=\frac4c\frac1{12}
=\frac1{3c}\approx0.3698.$$

The mean gives substantial weight to a long upper tail. The probability of exceeding one counts only the posterior mass on that side of one, so the two comparisons can disagree. They are not contradictory estimates of the same summary.

For the separate known-table check, the unnormalized included cell weights become $(6,6,15,15)/120$: the $X=0$ control weight is $54/9=6$, and the $X=1$ control weight is $45/3=15$. Both included row risks are one half and the included OR is one, although the source OR is three. Selection odds are nine at $X=0$ and three at $X=1$; their ratio is $1/3$, so the included OR is $3(1/3)=1$. The outcome-only selection condition has changed.
