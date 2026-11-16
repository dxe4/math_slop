# Worked answers for competing first failure practice

Attempt [practice](./competing_events_v1-practice.md), using the separate [hints](./competing_events_v1-hints.md) as needed, before revealing a worked answer. All Gamma distributions use shape and rate. Actual incidence always refers to the first exit from the working state.

## 1 Derive the state probabilities before learning hazards

Subtracting $S(t)$ from the short-interval equation and dividing by $h$ gives $S'(t)=-(\lambda_1+\lambda_2)S(t)$. Likewise $F_j(t+h)-F_j(t)=S(t)\lambda_jh+o(h)$, so $F_j'(t)=\lambda_jS(t)$. Their solutions are

$$S(t)=e^{-(\lambda_1+\lambda_2)t},\qquad
F_j(t)=\frac{\lambda_j}{\lambda_1+\lambda_2}
[1-e^{-(\lambda_1+\lambda_2)t}].$$

The sum of derivatives is zero and the initial sum is one, proving $S+F_1+F_2=1$. All three values are nonnegative. The cause-$j$ hazard conditions on still working, meaning no previous failure of either cause. A controller-failed machine is no longer in that conditioning group.

With hazards $(0.1,0.2)$ and horizon five,

$$S(5)=e^{-1.5},\quad
F_1(5)=\frac13(1-e^{-1.5})\approx0.2589566133.$$

The bearing-only net risk is $1-e^{-0.5}\approx0.3934693403$. When the controller hazard alone changes to $0.05$, actual bearing-first incidence becomes $(2/3)(1-e^{-0.75})\approx0.3517556315$. Fewer competing exits leave more machines working long enough for bearing-first exits even though the conditional bearing rate is unchanged. This compares stipulated generators; a real redesign's effect on the bearing mechanism has not been supplied by the calculation.

## 2 Construct the likelihood and retain the correct risk set

Writing $R=\lambda_1+\lambda_2$, the four hazard-dependent contributions are

$$\lambda_1e^{-R},\quad
\lambda_2e^{-2R},\quad
e^{-R},\quad
\lambda_2e^{-2R}.$$

Their product is $\lambda_1\lambda_2^2e^{-6R}$: one bearing event, two controller events and six machine-weeks of working exposure. Independent Gamma$(1,2)$ priors give independent posteriors

$$\lambda_1\mid D\sim\operatorname{Gamma}(2,8),\qquad
\lambda_2\mid D\sim\operatorname{Gamma}(3,8).$$

For bearing fitting, the binary event vector is $(1,0,0,0)$. Retaining all observed times produces $\lambda_1e^{-6\lambda_1}$, the correct bearing factor. The controller exits end membership in the working risk set at their times; zero means no bearing event at that exit in this binary representation. It does not assert an independent administrative-censoring mechanism for those exits, a later latent bearing lifetime, or a removal intervention.

Deleting both controller-failed records retains only the first and third machines, with one bearing event and exposure two. That analyst obtains Gamma$(2,4)$ for the bearing hazard, losing four machine-weeks during which those controller-failed machines were still bearing-event-free.

Deleting only the administratively censored record retains exposure five and the original event counts, giving Gamma$(2,7)$ and Gamma$(3,7)$. The discarded censored machine supplied one informative working week. Keeping a machine in the first-exit risk set after controller failure would instead add time during which it could not have a bearing-first exit in this model.

## 3 Average over a common-rate posterior

Let $a_1=2,a_2=3,b=8$ and $A=a_1+a_2=5$. The inverse map is $\lambda_1=RQ,\lambda_2=R(1-Q)$ on $R>0$, $0<Q<1$. Its absolute Jacobian determinant is

$$\left|\det
\begin{pmatrix}Q&R\\1-Q&-R\end{pmatrix}\right|=R.$$

The transformed normalized joint density is

$$\frac{b^A}{\Gamma(a_1)\Gamma(a_2)}
R^{A-1}e^{-bR}Q^{a_1-1}(1-Q)^{a_2-1}.$$

Multiply and divide by $\Gamma(A)$. The $R$ factor becomes the normalized Gamma$(A,b)$ density, and the $Q$ factor becomes the Beta$(a_1,a_2)$ density because $B(a_1,a_2)=\Gamma(a_1)\Gamma(a_2)/\Gamma(A)$. Separate supports and factorization establish independence.

Since $E(Q)=2/5$ and $E(e^{-tR})=[8/(8+t)]^5$,

$$\bar S(t)=\left(\frac8{8+t}\right)^5,\qquad
\bar F_1(t)=\frac25[1-\bar S(t)],\qquad
\bar F_2(t)=\frac35[1-\bar S(t)].$$

At horizon two these give $1024/3125$, $4202/15625$ and $6303/15625$. Rewriting survival with denominator $15625$ gives numerator $5120$; $5120+4202+6303=15625$ checks the sum.

The posterior mean hazards are $(1/4,3/8)$. Substitution gives bearing-first incidence

$$\frac25[1-e^{-5/4}]\approx0.2853980813,$$

which differs from the correctly averaged $0.268928$. The plug-in survival is $e^{-5/4}\approx0.2865047969$, also different from $0.32768$.

For a new machine known still working at age two, multiply the posterior density by $e^{-2(\lambda_1+\lambda_2)}$. The hazards become independent Gamma$(2,10)$ and Gamma$(3,10)$, giving predictive hazards $1/5$ and $3/10$ per week at that age. More generally surviving to $s$ gives means $a_j/(b_j+s)$. Each fixed parameter value still defines a constant hazard; averaging uncertain values with survival-dependent weights need not preserve that constancy.

## 4 Separate actual incidence from a removal forecast

The main posterior bearing hazard is Gamma$(2,8)$, so

$$\bar N_1(t)=1-\left(\frac8{8+t}\right)^2,\qquad
\bar N_1(2)=1-\frac{16}{25}=\frac9{25}.$$

Actual bearing-first incidence at two is $4202/15625$, whereas the net risk is $5625/15625$. Their difference is $1423/15625=0.091072$.

For positive fixed hazards and $t>0$,

$$F_1(t)=\int_0^t\lambda_1e^{-\lambda_1u}e^{-\lambda_2u}\,du
<\int_0^t\lambda_1e^{-\lambda_1u}\,du=N_1(t).$$

The integrands are strictly ordered on $0<u<t$, and independent proper Gamma posteriors put probability one on positive hazards, so the strict inequality also holds after posterior averaging. This proof compares the actual and cause-1-only targets, without treating either as an estimate from a particular nonparametric algorithm.

No KM estimator was fitted here. The fraction $9/25$ is a posterior expectation under an exponential cause-1-only calculation. Correctly coding controller exits zero for bearing-hazard fitting proves only that the bearing likelihood factor is retained with the correct working exposure.

If eliminating controller failures changes the generator to $\lambda_2=0$ while leaving the bearing transition mechanism $\lambda_1$ unchanged and preserving the other transport conditions, the modified model's bearing failure risk is $1-e^{-\lambda_1t}$ and its posterior-averaged forecast is $\bar N_1(t)$. Observed first-exit hazards do not establish that bearing invariance. The ordinary three-state analysis directly specifies transitions among observed states and requires no independent unobserved failure lifetimes. First-exit data do not reveal the counterfactual post-controller-failure path or verify what a controller intervention would change.

## 5 Change one prior and rebuild the prediction

Only the controller prior's rate changes, so the posteriors are independent Gamma$(2,8)$ and Gamma$(3,10)$. In total/share coordinates their exponential factor is

$$e^{-R[10+(8-10)Q]}=e^{-10R+2RQ}.$$

The cross term $2RQ$ obstructs the separate Gamma–Beta factorization. The original hazard coordinates remain independent, which is sufficient for a different calculation.

For Gamma$(a_j,b_j)$,

$$L_j(u)=E(e^{-u\lambda_j})=\left(\frac{b_j}{b_j+u}\right)^{a_j},
\qquad -L_j'(u)=\frac{a_j}{b_j+u}L_j(u).$$

Thus $\bar S(t)=L_1(t)L_2(t)$ and, by exchanging nonnegative integrals,

$$\bar F_j(t)=\int_0^t\frac{a_j}{b_j+u}L_1(u)L_2(u)\,du.$$

Differentiating $\bar S$ gives $-\bar S'=\bar f_1+\bar f_2$; integrating from zero proves $\bar F_1+\bar F_2=1-\bar S$. At two,

$$\bar S(2)=\frac{64}{100}\frac{1000}{1728}=\frac{10}{27}.$$

The cause-1 incidence integrand is

$$\frac{2}{u+8}\frac{64}{(u+8)^2}\frac{1000}{(u+10)^3}
=\frac{128000}{(u+8)^3(u+10)^3}.$$

To evaluate it explicitly, put $v=u+8$, so $8\le v\le10$. A partial-fraction decomposition is

$$\frac{128000}{v^3(v+2)^3}
=24000\left(\frac1v-\frac1{v+2}\right)
-24000\left(\frac1{v^2}+\frac1{(v+2)^2}\right)
+16000\left(\frac1{v^3}-\frac1{(v+2)^3}\right).$$

Multiplying both sides by $v^3(v+2)^3$ verifies the identity without numerical rounding. An antiderivative is

$$24000\log\frac v{v+2}
+\frac{24000}{v}+\frac{24000}{v+2}
-\frac{8000}{v^2}+\frac{8000}{(v+2)^2}.$$

Evaluating between eight and ten gives logarithmic term $24000\log[(10/12)/(8/10)]=24000\log(25/24)$ and rational term $-8815/9$. Therefore

$$\bar F_1(2)=24000\log(25/24)-\frac{8815}{9}
\approx0.283424041678665.$$

The cause-2 integral is

$$\bar F_2(2)=\int_0^2
\frac{192000}{(u+8)^2(u+10)^4}\,du.$$

Using the proved probability-sum identity gives

$$\bar F_2(2)=1-\frac{10}{27}-\bar F_1(2)
=\frac{26462}{27}-24000\log(25/24)
\approx0.346205587950965.$$

Both integrands are positive, confirming positivity even though the closed forms subtract large nearly equal terms. Their sum is $17/27$, complementing survival $10/27$.

The bearing posterior remains Gamma$(2,8)$, as does its two-week net risk $9/25$. Actual bearing-first incidence increases from $0.268928$ to approximately $0.2834240417$ because it also averages the competing-hazard posterior. Changing a prior is an analysis sensitivity with the same observations; it does not implement a controller intervention.

## 6 Transfer to zero failures and unequal rates

The new event counts are zero and exposure is six, so the posterior hazards are independent Gamma$(1,8)$ and Gamma$(1,10)$. The shapes stay one; the six failure-free machine-weeks still update both rates. Their Laplace transforms give

$$\bar S(t)=\frac8{8+t}\frac{10}{10+t},\qquad
\bar S(2)=\frac23.$$

The incidence integrals are

$$\bar F_1(t)=\int_0^t\frac{80}{(u+8)^2(u+10)}\,du,\qquad
\bar F_2(t)=\int_0^t\frac{80}{(u+8)(u+10)^2}\,du.$$

For the first integrand,

$$\frac{80}{(u+8)^2(u+10)}
=-\frac{20}{u+8}+\frac{40}{(u+8)^2}+\frac{20}{u+10}.$$

An antiderivative is $20\log[(u+10)/(u+8)]-40/(u+8)$. Between zero and two its value is

$$20\log\frac{12/10}{10/8}+1
=1-20\log(25/24)\approx0.183560109594897.$$

The derivative identity from task 5 also applies to these shapes. Hence

$$\bar F_2(2)=1-\frac23-\bar F_1(2)
=20\log(25/24)-\frac23\approx0.149773223738436.$$

Both are positive from their integral representations, and their sum is $1/3$. For an elementary logarithmic check, $x/(1+x)<\log(1+x)<x$ at $x=1/24$ gives $1/25<\log(25/24)<1/24$, which places $20\log(25/24)$ strictly between $4/5$ and $5/6$, and hence makes both displayed incidences positive.

The bearing-only net risk is $1-8/10=1/5$, exceeding actual bearing-first incidence. Zero observed failures supplies exposure evidence favoring lower hazards, but the proper Gamma posteriors still support positive hazards and nonzero future incidence. It does not establish absence of either failure mechanism.

If observation withdrawal is triggered by an unrecorded warning correlated with impending first exit, the independent administrative-censoring factorization need not hold. The omitted observation mechanism could then alter the hazard likelihood. Additional measured warning information, a joint observation model or a justified sensitivity analysis would address that issue; numerical integration precision alone cannot restore an incorrect observation model.
