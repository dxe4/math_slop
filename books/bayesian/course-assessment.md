# Midcourse assessment

Attempt after week 6. Suggested time: 75 minutes. Total: 40 marks, contributing 20% of the course grade. Use a calculator and the course formula reference, but explain every step. Programming is unnecessary. The marking key is below so self-study learners can obtain immediate feedback. This mixed document is answer-bearing: a learner export must extract only the four question blocks. The stable tutor IDs remain `mid.Q1` through `mid.Q4`; the questions and 40-mark weighting are unchanged. The expanded core adds depth, but optional supplemental practice does not increase this timed assessment’s scope.

## Questions

**Q1 — Evidence and populations (8 marks).** A defect occurs in 1% of items. A detector signals with probability 0.8 for defective items and 0.1 for sound items. Calculate the probability of a defect given a signal (4 marks). Explain why sensitivity is not that posterior probability (2 marks). State one reason the model could be inappropriate for a preselected sample (2 marks).

**Q2 — Posterior and prediction (12 marks).** Use a Beta(2,3) prior and observe 8 successes in 10 trials. Derive the posterior (4 marks). Give its mean and the probability of success on one next trial (2 marks). Calculate the mean and variance of the next five-trial count (4 marks). Explain the difference between a credible interval for the parameter and an interval for the future count (2 marks).

**Q3 — Monte Carlo precision (8 marks).** A parameter has posterior SD 2. Four chains provide 8,000 stored draws, but effective sample size for the mean is 400. Estimate the mean's MCSE (3 marks). How much ESS is needed to halve it (2 marks)? Explain why the parameter's posterior SD does not halve (3 marks).

**Q4 — Model review (12 marks).** An analyst reports a posterior probability of 0.997 from a fit with R-hat 1.06, bulk ESS 90, and 25 divergences. The prior predictive distribution gives implausibly enormous outcomes. Identify two distinct classes of problems (4 marks). Give three concrete corrective steps (6 marks). Explain why a longer chain alone is insufficient (2 marks).

## Marking key

**Q1:** joint signal-and-defect mass 0.008; sound signal mass 0.099; total 0.107; posterior $0.008/0.107\approx0.07477$. Award one mark for each. Sensitivity conditions on defect; the posterior conditions on signal (2). Preselection may change base rates or detector performance, invalidating transfer of the supplied probabilities (2).

**Q2:** multiply $\theta^{2-1}(1-\theta)^{3-1}$ by $\theta^8(1-\theta)^2$ to get Beta(10,5), with correct exponents and identification (4). Mean and next-trial probability are $10/15=2/3$, the latter by averaging a Bernoulli probability over the posterior (1 each). For the future count K, use one shared posterior probability for all five trials: $E(K)=5E(\theta)=10/3$ (1); $\operatorname{Var}(K)=5E[\theta(1-\theta)]+25\operatorname{Var}(\theta)=25/24+25/72=25/18\approx1.3889$ (2), with the shared-parameter uncertainty explanation (1). Parameter interval concerns an unknown probability on [0,1]; count interval concerns integer outcomes 0–5 and incorporates binomial variation (2).

**Q3:** MCSE $2/\sqrt{400}=0.1$ (3). Halving requires four times ESS, 1,600 (2), not merely twice as many stored draws. The estimate assumes a reliable mean-specific ESS and adequate exploration; it does not repair biased exploration. More simulation approximates the same posterior more accurately; scientific uncertainty requires new information or changed assumptions (3).

**Q4:** computation/exploration is unreliable (2), and the prior/model has questionable observable implications (2). Valid steps include check units and likelihood coding, calibrate proper priors with prior prediction, standardise/reparameterise, simplify and simulate known cases, rerun independent chains and reassess diagnostics (2 each for three justified steps). Longer sampling can reduce ordinary Monte Carlo error but cannot repair an implausible model or necessarily resolve divergent geometry (2).

Mark methods and interpretations separately. On Q1, a correct denominator setup with an arithmetic slip retains setup credit; confusing sensitivity and posterior loses the conditioning marks. On Q2, carry a mistaken shape into later arithmetic without repeatedly penalising the same local error, but independently assess whether the predictive variance includes both layers. A plug-in binomial variance cannot earn the full predictive calculation marks. On Q3, accept a labelled approximation with explicit ESS assumptions. On Q4, any three distinct, justified corrective steps can earn full step credit; repeating “run longer” in three forms cannot. A defensible alternative model is acceptable if its assumptions and checking plan are stated. Give partial credit for correct methods with arithmetic slips. Do not give full credit for listing diagnostic thresholds without explaining their implications. Revisit chapters 1–3 below 60% on Q1–2 and chapters 5–6 below 60% on Q3–4.


## Alignment and revision after feedback

| Stable ID | Core objectives assessed | Evidence to revisit | Optional targeted practice | Remediation |
|---|---|---|---|---|
| mid.Q1 | L01.O1–O3; transfer in L01.O5 | Conditioning population, weighted evidence, population transfer | extra.1.1, extra.1.3, extra.1.4 | Rebuild the frequency table in [Bayesian updating](./01_bayes.md); use [conditioning](./appendix-01_probability.md) before another detector example |
| mid.Q2 | L02.O1–O2, L03.O1–O2; derivation in L03.O4 | Posterior kernel, shared probability, predictive variance and interval target | extra.2.1, extra.3.1, extra.3.2 | Work the beta integral in [calculus](./appendix-02_calculus.md), then label parameter and outcome draws in [prediction](./03_prediction.md) |
| mid.Q3 | L05.O1–O2; precision in L05.O4–O5 | Scientific spread versus mean MCSE, effective simulation effort | extra.5.1, extra.5.4 | Recalculate effort for a different estimand in [Monte Carlo](./05_monte_carlo.md) and [numerics](./appendix-04_numerics.md) |
| mid.Q4 | L06.O1–O2; validation in L06.O5 | Computational failure versus implausible observable predictions | extra.6.2, extra.6.4 | Separate geometry and predictive checks in [HMC](./06_hmc.md); state what each proposed repair can change |

These objective tags describe alignment, not new required assessment IDs. Reattempt a missed reasoning step before reading the key; use a fresh supplemental problem to check transfer after feedback. Record whether a solution or hint was used. Instructor judgement and learner explanation remain necessary: a numerical score alone does not certify mastery.
