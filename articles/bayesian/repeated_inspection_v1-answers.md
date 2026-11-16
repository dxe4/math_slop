# Worked answers for repeated inspection practice

Attempt [practice](./repeated_inspection_v1-practice.md), using the separate [hints](./repeated_inspection_v1-hints.md) if useful, before revealing a worked answer. Probabilities for ordered patterns refer to one particular order unless a multiplicity is explicitly included.

## 1 Compare complete paired-reading likelihoods

At a fixed model,

$$P(++)=\pi s^2+(1-\pi)f^2,\quad
P(+-)=P(-+)=\pi s(1-s)+(1-\pi)f(1-f),$$

$$P(--)=\pi(1-s)^2+(1-\pi)(1-f)^2.$$

For either A or B, $q=\pi s+(1-\pi)f=6/25$ and $m_2=\pi s^2+(1-\pi)f^2=17/125$. Hence the ordered probabilities are $(17,13,13,82)/125$, with numerator sum one hundred twenty-five.

The likelihood of any independent paired-item sequence is the product of these pattern probabilities, identical in A and B. Their Bayes factor is one, including after an additional discordant item. Equal prior weights therefore remain equal; arbitrary initial odds would also remain unchanged.

For A, the defective-class weight for $+-$ is $(1/5)(4/5)(1/5)=4/125$. Divide by $13/125$ to obtain $4/13$. For B, applying the same formula gives $1334/1625$. The equal-model average is $917/1625$.

The prevalences are $1/5$ and $9/25$, which concern a randomly chosen item's state before its readings. The conditional defect probabilities concern the selected discordant item. More paired observations cannot distinguish candidates that assign the same probability to every possible paired dataset.

## 2 Remove the two-candidate restriction

Here $v=17/125-(6/25)^2=49/625$. With $\delta=s-f$,

$$q=f+\pi\delta,\qquad v=\pi(1-\pi)\delta^2.$$

Thus $\delta=\sqrt{v/[\pi(1-\pi)]}$, $f=q-\pi\delta$ and $s=q+(1-\pi)\delta$. The constraint $f\ge0$ is equivalent to

$$q^2\ge\frac{\pi v}{1-\pi}
\quad\Longleftrightarrow\quad
\pi\le\frac{q^2}{q^2+v}=\frac{36}{85}.$$

The constraint $s\le1$ similarly gives

$$ (1-q)^2\ge\frac{(1-\pi)v}{\pi}
\quad\Longleftrightarrow\quad
\pi\ge\frac{v}{(1-q)^2+v}=\frac{49}{410}.$$

All quantities squared here are nonnegative. Conversely these bounds give $f\ge0,s\le1$; the construction has $f<q<s$ and reproduces $q,v$, hence the whole pair law. This proves the interval is complete.

At prevalence $49/410$ the parameters are $s=1,f=13/95$, so $P(D=1\mid+-)=0$. At prevalence $36/85$ they are $s=17/30,f=0$, so that conditional probability is one. The denominator $q-m_2=13/125$ stays positive along the family and the numerator varies continuously. The intermediate value theorem gives every conditional value between zero and one.

With $0<f<s<1$, neither endpoint is allowed; the prevalence interval and conditional-value range are open, with the same infimum and supremum. This ambiguity persists within the single orientation $f<s$, so exchanging labels does not explain it.

Since $(q-f)(s-q)=\pi(1-\pi)(s-f)^2=v$, fixing $s>q$ gives

$$f=q-\frac{v}{s-q},\qquad
\pi=\frac{q-f}{s-f}.$$

The condition $f\ge0$ gives $s\ge q+v/q=m_2/q=17/30$; $s\le1$ supplies the other endpoint. These are exactly the same family, and rational $s$ gives rational parameters.

## 3 Change which item receives the third reading

The fresh-item $+++$ probabilities are $129/1250$ for A and $15577/187500$ for B. Since $129/1250=19350/187500$, equal prior model weights give

$$P(A\mid\text{fresh }+++)
=\frac{19350}{19350+15577}=\frac{19350}{34927}.$$

For the same item with history $+-+$, the likelihood is $\pi s^2(1-s)+(1-\pi)f^2(1-f)$. It gives $41/1250$ and $9923/187500$. Divide by the common earlier-pair probability $13/125$:

$$P(+\text{ next}\mid+-,A)=\frac{41}{130},\qquad
P(+\text{ next}\mid+-,B)=\frac{9923}{19500}.$$

These conditional predictive probabilities update the still-equal model weights to

$$P(A\mid+-+)=\frac{6150}{16073},\qquad
P(B\mid+-+)=\frac{9923}{16073}.$$

The defective-class numerator is $\pi s^2(1-s)$ in each model. Dividing by its complete-history probability gives $32/41$ for A and $245456/248075$ for B. Therefore

$$P(D=1\mid+-+)=
\frac{6150}{16073}\frac{32}{41}
+\frac{9923}{16073}\frac{245456}{248075}
=\frac{365456}{401825}.$$

The history changes the relative model likelihoods, so the earlier one-half weights are no longer appropriate. A fresh item's all-positive triple has a different conditional and joint event from a discordant item's third reading. Both candidates give positive probability to either experiment's data, so neither single triple identifies a model with certainty.

## 4 Recover a compatible exact triple law

Exchangeability and the three moments give per-pattern probabilities

$$p_3=m_3,\quad p_2=m_2-m_3,\quad
p_1=q-2m_2+m_3,\quad p_0=1-3q+3m_2-m_3.$$

For example $m_2=P(+++) +P(++-)$, and $q=P(+++)+P(++-)+P(+-+)+P(+--)$. With multiplicities $1,3,3,1$, $p_3+3p_2+3p_1+p_0=1$. These moments determine the full law only after exchangeability has been specified.

Let $g(x)=x^2-ax+b$ have roots $f,s$. Because $\Theta$ takes one of these roots,

$$m_2=aq-b,\qquad m_3=am_2-bq.$$

Substitute $b=aq-m_2$ into the second equation to obtain $m_3=a(m_2-q^2)+qm_2$. Thus

$$a=\frac{m_3-qm_2}{v},\qquad
b=aq-m_2=\frac{qm_3-m_2^2}{v}.$$

The roots are $(a\mp\sqrt{a^2-4b})/2$ and their ordered labels fix $f<s$. Matching $q=f+\pi(s-f)$ then fixes $\pi$. This proves uniqueness when the roots and weight are admissible and $v>0$.

At the task's moments, $a=9/10$ and $b=2/25$. The root discriminant is $49/100$, so the roots are $1/10,4/5$ and $\pi=(6/25-1/10)/(4/5-1/10)=1/5$. This recovers A.

The calculation uses an exactly specified population triple law. One observed triple is one random pattern and does not supply that population law. In finite inference, calibration uncertainty remains and must be represented. The proof also supplies no general identification theorem for unrestricted distributions of item propensities.

## 5 Prove feasibility and examine the boundaries

For $\Theta\in[0,1]$, Cauchy–Schwarz gives

$$[E(\sqrt{\Theta}\,\Theta^{3/2})]^2
\le E(\Theta)E(\Theta^3),$$

$$[E(\sqrt{1-\Theta}\,\Theta\sqrt{1-\Theta})]^2
\le E(1-\Theta)E[\Theta^2(1-\Theta)].$$

These are $m_2^2\le q m_3$ and $(q-m_2)^2\le(1-q)(m_2-m_3)$, proving the two bounds. Also $m_2\le q$ and $v>0$ imply $0<v\le q(1-q)$. Their difference is $U-L=v(q-m_2)/[q(1-q)]\ge0$.

For sufficiency use the inverse polynomial. Substitution gives

$$g(q)=-v<0,\quad
g(0)=\frac{q(m_3-L)}v\ge0,\quad
g(1)=\frac{(1-q)(U-m_3)}v\ge0.$$

Consequently its roots satisfy $0\le f<q<s\le1$, and $\pi=(q-f)/(s-f)$ is strictly between zero and one. Its mean is $q$. Averaging the root recurrence yields $E(\Theta^2)=aq-b=m_2$ and $E(\Theta^3)=am_2-bq=m_3$. Thus a valid model attains every third moment between the bounds and reproduces every exchangeable triple cell. This is the meaning of sharp feasibility.

For the worked pair, $L=289/3750$ and $U=1446/11875$. For the changed moments $q=1/2,m_2=3/8,m_3=5/16$, $v=1/8$, $a=1$ and $b=1/8$. Therefore

$$f=\frac{2-\sqrt2}{4},\qquad
s=\frac{2+\sqrt2}{4},\qquad
\pi=\frac12.$$

The roots are distinct and interior, and the parameters are exact even though the rates are irrational. Its central third moment is zero. More generally $a-2q=\mu_3/v$ and $g(q)=-v$ imply

$$a^2-4b=(\mu_3/v)^2+4v>0.$$

A zero $\mu_3$ with $v>0$ therefore gives symmetric roots about $q$ and prevalence one half, not coincident roots.

In contrast $v=\pi(1-\pi)(s-f)^2=0$ contradicts the current assumptions. In an enlarged closure, coincident rates or a zero class weight can represent the same observations in different ways; the division-by-$v$ inverse cannot identify them.

At $v=q(1-q)$, $m_2=q$ and both third-moment bounds equal $q$. The polynomial is $x^2-x$, giving $f=0,s=1,\pi=q$. Its two classes remain distinct and both have positive weight. Since $q-m_2=0$, a discordant pair has probability zero and its conditional defect probability is undefined.

The proof establishes uniqueness among the stipulated two-point propensity models. It supplies no general uniqueness result for unrestricted mixing distributions and does not establish that physical defects explain all within-item associations.

## 6 Distinguish a population restriction from finite sampling

The total probability is $(75+3(61)+3(43)+613)/1000=1$. Its moments are

$$q=\frac{75+2(61)+43}{1000}=\frac6{25},\quad
m_2=\frac{75+61}{1000}=\frac{17}{125},\quad
m_3=\frac{75}{1000}=\frac3{40}.$$

Thus its pair law is $(17,13,13,82)/125$, but

$$L-m_3=\frac{289}{3750}-\frac3{40}=\frac{31}{15000}>0.$$

Its inverse coefficient is

$$b=\frac{qm_3-m_2^2}{v}=-\frac{31}{4900}.$$

Negative root product means one root is negative and the other positive; the negative root cannot be a reading probability. The exact population law violates the necessary moment bound and cannot arise from the declared two-class conditional-independence model.

As finite empirical counts, however, the data have positive multinomial probability under both A and B. In each model $0<\pi<1$ and $0<f<s<1$, so every ordered triple probability is positive. The multinomial coefficient and all category-probability factors for these 1,000 counts are positive. Random frequencies are not required to lie exactly on the population model's moment region.

An inadmissible empirical moment inverse therefore need not equal a constrained maximum-likelihood solution. It does not imply zero sample likelihood. No constrained fit or model-checking decision is supplied by this inversion alone. Ordinary finite-sample fluctuations must be distinguished from an asserted exact population law.

An extra item effect can make readings dependent even after conditioning on $D$; an inspection-induced state change violates stable $D$; repeat-specific performance violates the identical-rate assumption. Those changes require different joint likelihoods. The published two-test/two-population design instead adds populations with different prevalences and imposes cross-population invariance; it is not the one-population repeated-reading experiment proved here.
