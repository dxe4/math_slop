# Learn what repeat inspections identify

An item is inspected twice, producing one positive and one negative reading. What is the probability that it is defective? If prevalence and inspection performance are known, Bayes's rule answers the question. If all three are unknown, even an exactly known distribution of paired readings can support very different answers.

We will construct two inspection systems with the same complete paired-reading distribution and different defect probabilities for a discordant item. We will then derive the whole compatible parameter family, compare two different third-reading experiments, and prove what an exact population distribution of three repeated readings identifies under the stated model. A finite observed sample remains uncertain even when the corresponding population model is identifiable.

Preparation: finite Bayes updating, conditional independence, expectation, variance and quadratic equations. The proof route also uses Cauchy–Schwarz. Allow about 150–180 minutes including [six practice tasks](./repeated_inspection_v1-practice.md), an unpiloted study estimate. Separate [hints](./repeated_inspection_v1-hints.md) and [worked answers](./repeated_inspection_v1-answers.md) provide starting points and complete arguments.

The existing [Bayes chapter](../../books/bayesian/01_bayes.md) correctly treats inspection performance as known in its introductory calculation and explains when repeated likelihoods may be multiplied. The [observation-process module](../../books/bayesian/adv-03_observation_process.md) already develops unknown Gaussian calibration. Here the outcome and latent state are binary, and the question is which calibration quantities repeated readings can distinguish.

> Predict first: if two systems agree on the probability of every possible pair of readings, can any number of independently inspected pairs distinguish them? Would a third positive on a new item be the same experiment as a third positive on an item already observed positive then negative?

## State the repeated inspection model

For item $i$, let $D_i=1$ mean a well-defined physical defect is present. Its state stays fixed throughout its inspections. Items have independent states $D_i\sim\operatorname{Bernoulli}(\pi)$ at fixed parameters.

Conditional on $D_i$, repeated readings $Y_{ij}\in\{0,1\}$ are independent and identically distributed:

$$\Pr(Y_{ij}=1\mid D_i=1)=s,\qquad
\Pr(Y_{ij}=1\mid D_i=0)=f.$$

Here $\pi$ is prevalence, $s$ is sensitivity and $f$ is the false-positive probability. Assume $0<\pi<1$ and $0\le f<s\le1$. The ordering declares that a positive is more likely for defective items and fixes the orientation of the two classes.

The same performance parameters apply to every item and repeat. Conditional on the item states, there is no additional item-specific propensity, copied report, shared repeat error, inspection-induced state change or instrument drift. These are substantive model assumptions. Repeating a reading at another time does not establish them.

Introduce an item's latent positive-reading propensity $\Theta_i$: it equals $s$ when $D_i=1$ and $f$ otherwise. Then

$$q=E(\Theta)=\pi s+(1-\pi)f,\qquad
m_2=E(\Theta^2)=\pi s^2+(1-\pi)f^2.$$

The full ordered pair law follows by conditioning:

$$\Pr(++ )=m_2,\qquad
\Pr(+-)=\Pr(-+)=q-m_2,\qquad
\Pr(--)=1-2q+m_2.$$

These are probabilities of individual ordered patterns. A count of exactly one positive combines the two discordant patterns and has probability $2(q-m_2)$.

## Construct two indistinguishable paired-reading systems

Consider two fully specified candidate models:

| Model | Prevalence $\pi$ | Sensitivity $s$ | False-positive probability $f$ |
| --- | ---: | ---: | ---: |
| A | $1/5$ | $4/5$ | $1/10$ |
| B | $9/25$ | $46/75$ | $3/100$ |

Both give $q=6/25$ and $m_2=17/125$. Therefore both have exactly

$$\bigl(\Pr(++),\Pr(+-),\Pr(-+),\Pr(--)\bigr)
=\frac{(17,13,13,82)}{125}.$$

If independent items produce pair-pattern counts $n_{++},n_{+-},n_{-+},n_{--}$, the likelihood at either candidate is proportional to

$$\left(\frac{17}{125}\right)^{n_{++}}
\left(\frac{13}{125}\right)^{n_{+-}+n_{-+}}
\left(\frac{82}{125}\right)^{n_{--}}.$$

A multinomial coefficient is common to both if counts rather than a specified sequence are the recorded data. The likelihood ratio is one for every paired-item dataset. More paired items can estimate their common pair law more precisely; they cannot distinguish these two candidates.

Put proper prior probability one half on each complete model, with one model governing all items. Any independent paired-item dataset leaves these model probabilities at one half. More generally, any specified initial odds between A and B remain unchanged by this experiment.

Nevertheless, the latent defect probabilities for an item observed $+-$ differ:

$$\Pr(D=1\mid+-,M)
=\frac{\pi s(1-s)}{q-m_2}.$$

Model A gives $4/13$; model B gives $1334/1625$. With equal model probabilities, the model-averaged defect probability is

$$\frac12\frac4{13}+\frac12\frac{1334}{1625}
=\frac{917}{1625}.$$

These are probabilities conditional on that item's readings, not population prevalences. Their differences persist even with unlimited paired-item observations under this design. The unchanged-model-weight conclusion concerns this declared prior on observationally equivalent models; it does not assert that every marginal coordinate of every more general calibration prior remains unchanged.

## Derive the full family compatible with the pair law

The variance of the two-point propensity distribution is

$$v=m_2-q^2=\pi(1-\pi)(s-f)^2.$$

For the worked pair law, $v=49/625>0$. Let $\delta=s-f>0$. Solving the mean and variance equations at a proposed prevalence gives

$$\delta=\sqrt{\frac{v}{\pi(1-\pi)}},\qquad
f=q-\pi\delta,\qquad
s=q+(1-\pi)\delta.$$

The probability constraints give a sharp prevalence interval. Squaring the nonnegative inequalities $f\ge0$ and $s\le1$ yields respectively

$$\pi\le\frac{q^2}{q^2+v},\qquad
\pi\ge\frac{v}{(1-q)^2+v}.$$

Conversely these inequalities make the constructed $f,s$ lie in $[0,1]$, with the required mean, variance and orientation. Thus precisely

$$\frac{49}{410}\le\pi\le\frac{36}{85}$$

is possible under this exact pair law. This is a set of compatible population parameters, not a confidence or credible interval derived from finite data.

Its endpoint systems are

$$\left(\pi,s,f\right)=\left(\frac{49}{410},1,\frac{13}{95}\right),
\qquad
\left(\frac{36}{85},\frac{17}{30},0\right).$$

At the first endpoint a defective item cannot produce a discordant pair, so its discordant-item defect probability is zero. At the second, a sound item cannot produce a positive, so that probability is one. Both endpoints have positive probability for a discordant pair. Continuity through the family attains every intermediate conditional defect probability.

If the stronger restrictions $0<f<s<1$ are imposed, both prevalence endpoints are excluded. The conditional defect probabilities then range over $(0,1)$, with infimum zero and supremum one. The ambiguity remains after the orientation $f<s$ has already removed simple label swapping.

A rational parameterization is also useful for exact examples. Choose

$$\frac{17}{30}\le s\le1,\qquad
f=q-\frac{v}{s-q},\qquad
\pi=\frac{q-f}{s-f}.$$

Here $(q-f)(s-q)=v$. Rational $s$ gives rational $f,\pi$ in this family. General inversions of moment data can instead have irrational roots; exact mathematics does not always mean a fraction.

## Compare a fresh item's triple with a same-item follow-up

After paired data have left A and B equally weighted, consider **a fresh independent item** receiving three inspections and producing $+++$. Its model likelihood is

$$\Pr(+++\mid M)=\pi s^3+(1-\pi)f^3.$$

The two likelihoods are

$$\Pr(+++\mid A)=\frac{129}{1250},\qquad
\Pr(+++\mid B)=\frac{15577}{187500}.$$

Bayes updating now gives

$$\Pr(A\mid\text{fresh }+++)=\frac{19350}{34927}.$$

The paired-data equivalence did not extend to triple data. Both candidates still have positive likelihood; a single observed triple does not determine the calibration.

Now run a different experiment: take **the same item already observed $+-$**, and obtain a third positive. Its ordered complete history is $+-+$, not $+++$. Under a candidate model,

$$\Pr(+-+\mid M)=\pi s^2(1-s)+(1-\pi)f^2(1-f).$$

These probabilities are $41/1250$ for A and $9923/187500$ for B. Dividing by their common pair probability $13/125$ gives third-positive probabilities

$$\Pr(+\text{ next}\mid+-,A)=\frac{41}{130},\qquad
\Pr(+\text{ next}\mid+-,B)=\frac{9923}{19500}.$$

Updating the equal model weights with these conditional probabilities gives

$$\Pr(A\mid+-+)=\frac{6150}{16073}.$$

Within the two candidates, the same item's defect probabilities after this history are

$$\Pr(D=1\mid+-+,A)=\frac{32}{41},\qquad
\Pr(D=1\mid+-+,B)=\frac{245456}{248075}.$$

Averaging with the **updated** model weights gives

$$\Pr(D=1\mid+-+)=\frac{365456}{401825}.$$

Using the old one-half weights, or the fresh-item $+++$ likelihood, would answer a different question. State which item's latent state persists before factoring any repeated-reading likelihood.

## Explore the declared comparisons

The offline explorer displays specified model comparisons and exact moment examples. Its paired-law equality does not certify conditional independence in a real inspection process. Its population calculations and finite observations are labeled separately.

<!-- EXPLORER -->

## Recover parameters from an exact population triple law

Under the identical-repeat model, the ordered triple law is exchangeable: patterns with the same number of positives have equal probabilities. Define

$$q=\Pr(Y_1=1),\quad
m_2=\Pr(Y_1=Y_2=1),\quad
m_3=\Pr(Y_1=Y_2=Y_3=1).$$

These are **exact population probabilities**, with $m_k=E(\Theta^k)$. For an exchangeable triple, they determine each ordered-pattern probability:

| Positives in an ordered pattern | Probability of each such pattern | Number of patterns |
| --- | --- | ---: |
| $3$ | $m_3$ | $1$ |
| $2$ | $m_2-m_3$ | $3$ |
| $1$ | $q-2m_2+m_3$ | $3$ |
| $0$ | $1-3q+3m_2-m_3$ | $1$ |

The multiplicities matter when summing probabilities. The three moments alone would not describe a nonexchangeable triple law.

Suppose $v=m_2-q^2>0$. Write the monic polynomial whose two roots are $f$ and $s$:

$$g(x)=(x-f)(x-s)=x^2-ax+b.$$

Because $\Theta$ takes only these two values, $\Theta^2=a\Theta-b$ and $\Theta^3=a\Theta^2-b\Theta$. Taking expectations gives

$$m_2=aq-b,\qquad m_3=am_2-bq.$$

Solve this two-equation system:

$$a=\frac{m_3-qm_2}{v},\qquad
b=\frac{qm_3-m_2^2}{v}.$$

If the ordered roots satisfy $0\le f<q<s\le1$, recover

$$f=\frac{a-\sqrt{a^2-4b}}2,\qquad
s=\frac{a+\sqrt{a^2-4b}}2,\qquad
\pi=\frac{q-f}{s-f}.$$

Every two-class model satisfying the current assumptions and given moments must have those polynomial coefficients, then those ordered roots and that mixture weight. This proves uniqueness within the stipulated nondegenerate two-class identical-repeat model. It supplies no general identification theorem for unrestricted propensity distributions and does not validate the latent physical interpretation.

For example, $m_3=129/1250$ alongside the worked $q,m_2$ gives $a=9/10,b=2/25$, recovering model A. The alternative exact third moment $15577/187500$ recovers B. Generically the square root is irrational and should remain an exact expression if exact output is requested.

## Prove the sharp feasibility bounds before using the inverse

Not every valid exchangeable triple law belongs to this conditional-independence model. For $0<q<1$ and

$$0<v=m_2-q^2\le q(1-q),$$

the exact necessary and sufficient third-moment bounds are

$$L=\frac{m_2^2}{q}\le m_3\le
U=m_2-\frac{(q-m_2)^2}{1-q}.$$

For necessity, apply Cauchy–Schwarz to $\sqrt{\Theta}$ and $\Theta^{3/2}$, then to $\sqrt{1-\Theta}$ and $\Theta\sqrt{1-\Theta}$:

$$m_2^2\le q\,m_3,\qquad
(q-m_2)^2\le(1-q)(m_2-m_3).$$

Also $0\le\Theta\le1$ gives $m_2\le q$, hence $v\le q(1-q)$. The interval is nonempty because

$$U-L=\frac{v(q-m_2)}{q(1-q)}\ge0.$$

For sufficiency, construct $a,b,g$ as above. Direct substitution gives

$$g(q)=-v<0,\qquad
g(0)=\frac{q(m_3-L)}v\ge0,\qquad
g(1)=\frac{(1-q)(U-m_3)}v\ge0.$$

The upward-opening quadratic must have two distinct roots, one in $[0,q)$ and one in $(q,1]$. Set them to $f,s$ and use the weight $\pi=(q-f)/(s-f)\in(0,1)$. Their root recurrence reproduces $m_2$ and $m_3$, so the constructed model matches the complete exchangeable triple law. This proves the bounds are attainable, not merely necessary inequalities.

For the worked pair law,

$$\frac{289}{3750}\le m_3\le\frac{1446}{11875}.$$

Both A's and B's third moments lie within this interval. The lower endpoint has $f=0$; the upper endpoint has $s=1$.

A zero central third moment is not a degeneracy. Put

$$\mu_3=m_3-3qm_2+2q^3.$$

Since $a-2q=\mu_3/v$ and $g(q)=-v$,

$$a^2-4b=\left(\frac{\mu_3}{v}\right)^2+4v>0.$$

Thus $\mu_3=0$ with $v>0$ still gives distinct roots and corresponds to $\pi=1/2$. In contrast, $v=0$ lies outside our assumptions $0<\pi<1,f<s$ and makes the inverse undefined. In an enlarged closure it allows nonunique class representations.

At the other boundary, $v=q(1-q)$ forces $m_2=m_3=q$ and identifies the perfect classifier $f=0,s=1,\pi=q$. This is a valid nondegenerate two-class model. Its discordant-pair probability $q-m_2$ is zero, so conditioning on a discordant item is undefined there.

## Separate an impossible population law from a possible sample

Consider an exact exchangeable population triple law in which each pattern with three, two, one or zero positives has probability respectively

$$\frac{75}{1000},\quad\frac{61}{1000},\quad
\frac{43}{1000},\quad\frac{613}{1000}.$$

The multiplicities are $1,3,3,1$, giving total probability one. Its pair law matches the worked pair law, but $m_3=3/40$ lies below $L$ by $31/15000$. The inverse polynomial has $b=-31/4900$, hence a negative root. This exact population law cannot arise from the stated two-class conditional-independence model.

Now read the same numerators as **finite empirical counts from 1,000 independently inspected items**: 75 all-positive histories, 61 of each two-positive history, 43 of each one-positive history and 613 all-negative histories. That finite dataset has positive probability under both A and B because every ordered triple has positive probability under each. Empirical frequencies need not obey exact population moment restrictions.

Inverting empirical moments can therefore give inadmissible parameters. It is not automatically a constrained maximum-likelihood fit, nor a proof that the finite dataset is impossible. The [published Formann–Böhning correction](https://academic.oup.com/biostatistics/article/9/4/777/259221) emphasizes this distinction while correcting formulas in a broader latent-class analysis of three tests.

## Keep identification within its assumptions

[Pepe and Janes](https://academic.oup.com/biostatistics/article/8/2/474/232752) discuss three-test latent-class analysis with separate performance parameters for each test; their published correction must accompany its analytic formulas. Our identical-repeat proof above is derived separately. [Hui and Walter](https://jhanley.biostat.mcgill.ca/bios601/CandH-ch0102/HuiWalter1980.pdf) study a different design: two tests in two populations with different prevalences, invariant test performance and conditional independence. These designs supply different information under different restrictions.

Repeated readings can identify model parameters from an exact compatible population triple law without establishing that conditional independence or the two-class structure describes the real mechanism. Finite samples still require inference about uncertain parameters, and an external reference or substantive calibration evidence can matter. Complete [practice](./repeated_inspection_v1-practice.md), then reconstruct the pair-compatible family and the admissibility proof after a delay. Explain precisely what a third observation adds and what its existence alone cannot establish.

---

Printable copy: [study edition (PDF)](../../pdfs/bayesian/study-editions/repeated_inspection_v1.pdf), the lesson and practice without worked answers.
