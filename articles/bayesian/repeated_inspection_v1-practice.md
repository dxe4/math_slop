# Practice with repeated binary inspections

Use independent items with stable $D\sim\operatorname{Bernoulli}(\pi)$ and conditionally independent identical readings, with sensitivity $s$ and false-positive probability $f$. Assume $0<\pi<1$ and $0\le f<s\le1$. Each model's parameters apply to all items. Attempt each task before using its separate [hint](./repeated_inspection_v1-hints.md) or [worked answer](./repeated_inspection_v1-answers.md).

## 1 Compare complete paired-reading likelihoods

Model A has $(\pi,s,f)=(1/5,4/5,1/10)$ and B has $(9/25,46/75,3/100)$. Derive all four ordered pair probabilities in each model. Check their sum and show that the likelihood ratio is one for every dataset of independently inspected pairs.

Start with prior probability one half on each complete model. Derive their posterior weights after any such paired dataset and after an additional item gives $+-$, provided no other information is supplied. Calculate that item's defect probability within each model and after model averaging. Distinguish each answer from prevalence. Would a larger paired dataset select between A and B?

## 2 Remove the two-candidate restriction

Suppose the exact pair law gives $q=6/25$ and $m_2=17/125$. Derive $v$ and the equations for $s,f$ in terms of a proposed $\pi$ and positive gap $\delta=s-f$.

Derive the complete feasible prevalence interval by enforcing both $f\ge0$ and $s\le1$. Show that every prevalence in it constructs a valid model with this same pair law. Compute both endpoint systems and their defect probabilities conditional on $+-$. Explain why every intermediate conditional probability is attainable.

What changes under the stronger restriction $0<f<s<1$? Has the orientation $f<s$ already resolved label swapping, and does that resolve the remaining ambiguity? Finally derive the rational parameterization using $s$ and its feasible interval.

## 3 Change which item receives the third reading

After paired data have left A and B equally weighted, first consider a fresh independent item observed $+++$. Derive both model likelihoods and the updated probability of model A.

Now consider a different experiment: the same previously discordant item gives a third positive, so its history is $+-+$. Derive each complete-history probability, divide by the common $+-$ probability to obtain each third-positive predictive probability, and update the model weights. Derive the item's defect probability within each model and average using the updated weights.

Explain why neither the fresh-item likelihood nor the old one-half model weights can be substituted into that last calculation. Does either single triple determine the calibration model with certainty?

## 4 Recover a compatible exact triple law

For an exact exchangeable population law of three readings, derive the probability of each ordered pattern from $q,m_2,m_3$. State the pattern multiplicities and verify normalization.

Write the root polynomial $g(x)=(x-f)(x-s)$ and derive the moment recurrence. Solve for its coefficients $a,b$ when $v>0$, then derive the ordered roots and prevalence. Explain why this establishes uniqueness within the stated two-class model.

For $q=6/25,m_2=17/125,m_3=129/1250$, compute $a,b$, recover the parameters and check which candidate model results. Why is this an identification statement about an exact population law rather than a claim that one observed triple has calibrated the instrument?

## 5 Prove feasibility and examine the boundaries

Prove the necessary third-moment bounds

$$\frac{m_2^2}{q}\le m_3\le
m_2-\frac{(q-m_2)^2}{1-q}$$

for $0<q<1$, $0<v=m_2-q^2\le q(1-q)$. Prove sufficiency by evaluating the inverse polynomial at $0,q,1$, locating its roots and checking the moment recurrence. Explain what “sharp” means here.

Evaluate the bounds for the worked pair law. Then change the exact moments to $q=1/2,m_2=3/8,m_3=5/16$. Derive the parameters exactly, allowing square roots, and explain why prevalence one half is nondegenerate.

Distinguish $\mu_3=0$ with $v>0$ from $v=0$. Finally derive the model at $v=q(1-q)$ and say whether the discordant-item conditional probability exists there. Does the three-moment proof identify an arbitrary latent propensity distribution?

## 6 Distinguish a population restriction from finite sampling

An exact exchangeable population law assigns each ordered triple with three, two, one or zero positives probability $(75,61,43,613)/1000$, respectively, with multiplicities $1,3,3,1$. Check normalization, derive its $q,m_2,m_3$ and show that its pair law is the worked pair law.

Compute the gap below the admissible third-moment lower bound and the inverse polynomial's constant term. Prove that this exact population law cannot arise from the stated conditional-independence model.

Now treat those same numerators as empirical counts for 1,000 independent items, rather than as exact population probabilities. Explain why this finite dataset has positive probability under A and B. Does an inadmissible inverse automatically equal a maximum-likelihood estimate or prove a finite dataset impossible?

Explain which assumptions would fail if repeat readings share an additional item effect beyond $D$, if the inspection changes the defect state, or if performance differs by repeat. Keep these model questions separate from ordinary empirical frequency variation and from the published two-test/two-population design.
