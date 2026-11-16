# Practice with fixed outcome sampling

Tasks 1–4 form the core route. Tasks 5–6 are optional advanced extensions with their prerequisites stated separately. Start each task from its specified prior and data; the tasks do not accumulate observations. Try a calculation before opening the separate [hints](./case_control_v1-hints.md) or [worked answers](./case_control_v1-answers.md).

## 1 Transform probabilities under outcome only selection

Use the known source probabilities $(p_{01},p_{00},p_{11},p_{10})=(6,54,15,45)/120$. Include delayed jobs with probability one and other jobs with probability $1/R$, independently of $X$ conditional on $Y$. Before calculating, predict what changes as $R$ rises from one to three to nine.

Derive the included joint distribution for general $R>0$ for which the stated inclusion probabilities are valid, and the two included risks. Evaluate them at $R=3$ and $R=9$. Calculate the source and included risk ratios and odds ratios. Explain why the common multiplier cancels in the odds ratio but not in the risks. Is any rare-outcome approximation needed?

At $R=9$, calculate included outcome prevalence. Explain why averaging the included conditional risks with the known source $X$ weights $1/2,1/2$ still fails to recover the source prevalence. Use the explorer only after making your predictions. Treat all numbers in this task as known probability masses, not observed counts.

## 2 Derive the actual fixed quota likelihood

Leave the known source table behind. A separate study fixes 21 cases and 11 controls before sampling. It observes $X=1$ for 15 cases and five controls. Conditional on $a=\Pr(X=1\mid Y=1)$ and $b=\Pr(X=1\mid Y=0)$, observations are independent within and between strata, using a with-replacement or superpopulation model.

Use independent $a,b\sim\operatorname{Beta}(1,1)$ and $\pi=\Pr(Y=1)\sim\operatorname{Beta}(2,2)$. Write the exact probability of the two observed **counts**, and then the likelihood up to a parameter-independent factor. Derive the normalized posterior distributions and their independence. Explain why the observed table does not supply a factor $\pi^{21}(1-\pi)^{11}$.

What changes in the exact event probability if the audit instead retains one specified ordered characteristic sequence with the same counts? What changes in the posterior? Would the unchanged prevalence conclusion hold for every prior that couples $\pi$ with $a,b$?

## 3 Separate an association summary from an absolute risk

Use the posterior from task 2. Write the four source cell probabilities in terms of $(a,b,\pi)$ and derive

$$\operatorname{OR}=\frac{a(1-b)}{(1-a)b}.$$

Explain why $\operatorname{OR}>1$ is exactly the event $a>b$. Use the Beta odds-moment identities in the lesson to calculate the posterior mean OR. Separately evaluate OR at the posterior means of $a,b$, and compare both with the observed cross-product ratio three. Name what each summary means.

Derive $q_0=\Pr(Y=1\mid X=0)$ and $q_1=\Pr(Y=1\mid X=1)$ in terms of $(a,b,\pi)$. At $a=5/7,b=5/11$, compare risks for $\pi=7/40$ and $\pi=1/2$. Why do these two populations have the same fixed-quota likelihood? Explain how an explicit prevalence prior can still give a Bayesian posterior for source risks, and why this does not mean the quota fraction estimates prevalence.

**Optional exact integration.** For $b\sim\operatorname{Beta}(6,7)$, use

$$F_b(x)=\sum_{j=6}^{12}\binom{12}{j}x^j(1-x)^{12-j}.$$

Integrate $F_b(x)$ against the Beta$(16,7)$ density of $a$. Express the answer as seven Beta-function ratios and verify $\Pr(\operatorname{OR}>1\mid D)=57095/62031$. The core interpretation does not require deriving this finite-sum identity.

## 4 Transfer to different counts and a different outcome margin

Start from the original independent priors, without using the task 2 posterior. A new audit fixes **six cases and four controls**. Four of the cases and one of the controls have $X=1$. Reconstruct the sampling likelihood and posterior from this new story. Calculate the posterior mean odds ratio and OR evaluated at posterior means. Does the requested case fraction $3/5$ update source prevalence?

Now add a genuinely different source of information: independently of the audit, take **ten unfiltered iid source jobs** and record only their $Y$ values. Exactly six have $Y=1$. The same persistent $(a,b,\pi)$ applies to both datasets. Write the added likelihood and the updated marginal prevalence posterior. Explain why this random fraction supplies information that the quota fraction did not. Do the $a,b$ posterior distributions change when the extra dataset records only $Y$?

After a delay, reconstruct these two likelihoods from the designs without consulting the formulas. State what the investigator fixed and what the investigator observed in each one.

## 5 Optional compatible priors and the full odds ratio law

Preparation: Gamma and Dirichlet aggregation, Beta ratios of independent Gamma variables, and joint versus marginal distributions. Return to task 2's recorded table and the common Dirichlet$(1,1,1,1)$ source-cell prior.

Derive its independent retrospective priors for $(a,b,\pi)$ and its independent prospective priors for $(q_0,q_1)$. Under the formal prospective likelihood, obtain the posterior laws of $q_0,q_1$.

Use independent rate-one Gamma variables with shapes $(7,7,6,16)$ for $(G_{00},G_{01},G_{10},G_{11})$. Construct both pairs of Beta variables from the lesson. Prove that their two OR expressions agree for **every** positive Gamma quadruple. Explain why this proves equality of entire OR laws rather than only equality of one mean.

Does normalizing that Gamma quadruple yield the actual source-population posterior under fixed outcome quotas? Compare its induced prevalence law with the actual prevalence posterior. Explain why the formal prospective risk marginals cannot automatically be reported as actual source-risk posteriors.

Finally change **only** the formal prospective prior to independent $q_0,q_1\sim\operatorname{Beta}(1/2,1/2)$ while keeping the actual retrospective model's uniform $a,b$ priors. Calculate the new formal posterior mean OR and show it differs from the actual model's $56/15$. Would a common Dirichlet$(1/2,1/2,1/2,1/2)$ prior instead give a matching comparison between its own retrospective and prospective coordinate priors? State the scope of Byrne and Dawid's theorem 2: a sufficient framework or an if-and-only-if statement?

## 6 Optional derive a different control recruitment likelihood

Preparation: a geometric series, Beta densities and elementary integration. This study is separate from all earlier tasks and lies **outside the explorer**. Start from the original independent priors. The case record is the ordered pair $X=1$ then $X=0$. Independently propose controls with replacement, conditional on one persistent unknown $b$. On each proposal draw an independent uniform ticket from one through nine. An $X=0$ control accepts only ticket one; an $X=1$ control accepts tickets one through three. Stop at the first accepted control and record $X=1$; the rejected-proposal count is unrecorded.

Write the raw probabilities of rejection, accepted $X=0$ and accepted $X=1$ for one control proposal. Sum over every possible rejection count to derive the first-accepted-$X=1$ probability and the joint likelihood with the ordered case record. Explain why multiplying the prior by $a(1-a)b$ would change the model.

Find the evidence and normalized posterior densities. Is the control posterior Beta? Does the independent prevalence prior update? Evaluate the one-variable normalizing integrals by polynomial division or a substitution. Express the results using $\log3$.

Then compute $E(b\mid D_*)$, $E(\operatorname{OR}\mid D_*)$ and $\Pr(\operatorname{OR}>1\mid D_*)$. For the last quantity, condition on a fixed $b$, derive the case posterior survival probability, and integrate it against the control posterior density. Polynomial factorization can simplify the integrand. Can mean OR greater than one coexist with probability less than one half of exceeding one? Explain your answer using the resulting distribution.

As a separate known-population check, apply this characteristic-dependent control selection to task 1's source probability table while including every case. Calculate the included OR and compare it with three. Which condition behind the earlier cancellation has changed?
