# Practice with competing first failures

Use the observed three-state model from the [lesson](./competing_events_v1-lesson.md). Hazards are constant for a working machine at fixed parameters. Machines are conditionally independent, causes are recorded completely, and administrative observation limits are independent of the first-exit process under the stated model. Gamma parameters are shape and rate. Attempt each task before using its separate [hint](./competing_events_v1-hints.md) or [worked answer](./competing_events_v1-answers.md).

## 1 Derive the state probabilities before learning hazards

Let $S(0)=1$ and $F_1(0)=F_2(0)=0$. Use the short-interval transition probabilities $\lambda_jh+o(h)$ to finish

$$S(t+h)=S(t)[1-(\lambda_1+\lambda_2)h]+o(h),$$

and derive the differential equations for $S,F_1,F_2$. Solve them, prove that the probabilities sum to one, and identify the at-risk conditioning event in each cause-specific hazard.

At $\lambda_1=0.1,\lambda_2=0.2$ per week and horizon five weeks, compute actual bearing-first incidence and the bearing-only net risk. Change only $\lambda_2$ to $0.05$ and recalculate actual bearing-first incidence. Explain why the bearing incidence can change without a change to the bearing hazard. Does this comparison by itself establish what a physical controller redesign would do?

## 2 Construct the likelihood and retain the correct risk set

Use records $(t_i,\delta_i)=(1,1),(2,2),(1,0),(2,2)$, with status zero denoting independent administrative censoring while working. Write each record's hazard-dependent likelihood contribution, then collect the event counts and total working exposure.

Starting from independent Gamma$(1,2)$ priors, derive both posterior distributions. For bearing-hazard fitting, replace the status with $\mathbf1\{\delta_i=1\}$ while retaining all four observed times. Does this binary coding produce the correct bearing-hazard likelihood? Explain what has been represented and what has not.

A second analyst deletes both controller-failed records before fitting the bearing hazard. A third keeps all records but deletes the administratively censored record from both hazard analyses. Derive their resulting posteriors and identify the informative exposure each deletion lost. Explain why keeping machines at risk after their first controller failure would be a different mistake.

## 3 Average over a common-rate posterior

With the correct main posterior, transform $(\lambda_1,\lambda_2)$ to total hazard $R$ and bearing share $Q$. Supply the inverse transformation, supports and Jacobian. Factor the normalized density to prove the Gamma and Beta distributions and their independence.

Use this result to derive $\bar S(t),\bar F_1(t),\bar F_2(t)$ for a new machine. Evaluate all three at two weeks as exact fractions and check their sum. Compare bearing-first incidence with the value obtained by substituting posterior mean hazards into the fixed-parameter formula.

Now condition on the new machine still working at age two. Derive the two updated hazard distributions and predictive cause-specific hazards at that age. Explain why constant hazards conditional on parameters do not require constant posterior predictive hazards.

## 4 Separate actual incidence from a removal forecast

From the main posterior, derive the posterior-averaged bearing-only net risk at horizon two and compare it with actual bearing-first incidence. Prove the inequality between those quantities using their integrands, rather than their numerical values alone.

A colleague calls $9/25$ “the KM estimate of bearing incidence” and says that coding controller exits zero proves this is the actual fraction who would fail by bearing if controller failures were eliminated. Identify the two unsupported claims. State the additional invariance assumption under which a modified generator with $\lambda_2=0$ gives the bearing-only net-risk forecast.

Explain why observed cause-specific hazard fitting does not need two independent latent failure times, and why the data on first exits alone do not identify what happens after a counterfactual removal intervention.

## 5 Change one prior and rebuild the prediction

Keep the four observations and the bearing prior Gamma$(1,2)$, but change the controller prior to Gamma$(1,4)$. Derive the posterior and show exactly where the total-hazard/share factorization from task 3 fails.

Use posterior independence and Gamma Laplace transforms to derive a one-dimensional integral for each actual cumulative incidence. Prove the state probabilities sum to one by differentiating predictive survival.

At horizon two, calculate survival exactly. Evaluate bearing-first incidence by integrating

$$\frac{128000}{(u+8)^3(u+10)^3},\qquad 0\le u\le2.$$

You may derive a partial-fraction decomposition or consult the calculator after setting up the integral. Show that the result is $24000\log(25/24)-8815/9$ and derive controller-first incidence. Explain why the bearing-hazard posterior and bearing-only net risk remain unchanged while actual bearing-first incidence changes. Is the changed prior a controller intervention?

## 6 Transfer to zero failures and unequal rates

A new dataset contains no failures of either cause and total working exposure six machine-weeks; every recorded machine ends observation by independent administrative censoring. Use independent priors Gamma$(1,2)$ for bearing and Gamma$(1,4)$ for controller. This is a new dataset, not a relabeling of observed failures as censored.

Derive the posterior hazards. Without borrowing task 3's common-rate factorization, derive predictive survival and both incidence integrals for a new machine. At horizon two prove

$$\bar S(2)=\frac23,\qquad
\bar F_1(2)=1-20\log(25/24),\qquad
\bar F_2(2)=20\log(25/24)-\frac23.$$

Check positivity and normalization and compare bearing-first incidence with bearing-only net risk. Explain what zero observed failures does and does not establish about future failures. Finally describe how an unrecorded warning that triggers observation withdrawal would affect the likelihood assumptions; would more accurate numerical integration alone repair that problem?
