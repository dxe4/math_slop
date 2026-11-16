# Hints for repeated inspection practice

Attempt [practice](./repeated_inspection_v1-practice.md) before opening a hint. Complete arguments are on the separate [worked answers](./repeated_inspection_v1-answers.md) page.

## 1 Compare complete paired-reading likelihoods

Condition each ordered pattern on the item's defect state and add the two class contributions. For a discordant item's defect probability, retain only the defective-class contribution in the numerator and the whole discordant probability in the denominator. Model posterior odds equal prior odds times the model likelihood ratio.

## 2 Remove the two-candidate restriction

Use $v=\pi(1-\pi)\delta^2$ and $q=f+\pi\delta$. Squaring the nonnegative constraints for $f\ge0$ and $s\le1$ produces opposite bounds on prevalence. At an endpoint with $s=1$, a defective item cannot give a negative; at one with $f=0$, a sound item cannot give a positive.

## 3 Change which item receives the third reading

A fresh all-positive triple has likelihood $\pi s^3+(1-\pi)f^3$. The same discordant item's third positive instead gives powers $s^2(1-s)$ and $f^2(1-f)$. For sequential model updating, divide its complete-history probability by its earlier pair probability. Updating the item's latent state and updating the common model are both required.

## 4 Recover a compatible exact triple law

If $f,s$ are the roots of $x^2-ax+b$, the latent propensity satisfies $\Theta^2=a\Theta-b$. Multiply once more by $\Theta$ and average. The resulting two linear equations determine $a,b$ when $v>0$. Recover the mixture weight by matching the mean after ordering the roots.

## 5 Prove feasibility and examine the boundaries

For the lower bound apply Cauchy–Schwarz to $\sqrt{\Theta}$ and $\Theta^{3/2}$; for the upper use $\sqrt{1-\Theta}$ and $\Theta\sqrt{1-\Theta}$. For sufficiency, the monic quadratic is negative at $q$ and nonnegative at both endpoints. Its root recurrence checks moment matching. A zero central third moment need not make the root separation zero.

## 6 Distinguish a population restriction from finite sampling

For each ordered pattern, account for the number of positions in which its positives occur. The pair-positive probability is the sum of $+++$ and $++-$ probabilities. A negative inverse root cannot be a probability. For empirical counts, ask whether each category has positive probability under a candidate model, rather than requiring its random sample frequencies to equal its population probabilities.
