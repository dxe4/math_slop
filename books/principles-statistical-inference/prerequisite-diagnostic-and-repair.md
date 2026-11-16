
# Prerequisite Diagnostic and Repair Routes

Use this diagnostic without notes. Show reasoning, then compare with the compact answer key. A score is less useful than the pattern of missing moves.

## Probability and conditioning

1. If $P(A)=0.3$, $P(B)=0.5$, and $P(A \cap B)=0.2$, compute both conditional probabilities and decide whether $A$ and $B$ are independent.
2. Let $X_1,\dots,X_n$ be independent with mean $\mu$ and variance $\sigma^2$. Derive the mean and variance of the sample mean.
3. A diagnostic has sensitivity $0.9$, specificity $0.95$, and prevalence $0.01$. Express the positive predictive value before approximating it.
4. If $E[X^2]<\infty$, prove $E|X|<\infty$ using a named inequality.
5. State the difference between convergence in probability and almost-sure convergence. Which implication always holds?

## Distributions and likelihood

6. For $X\sim\mathrm{Binomial}(n,p)$, derive the likelihood kernel in $p$ and identify its support.
7. If $X\sim\mathrm{Normal}(\mu,\sigma^2)$ and $Y=a+bX$, give the law of $Y$, including the case $b<0$.
8. A density is proportional to $\exp\left(-\lambda x\right)$ on $x\geq 0$. Find its normalising constant and state the required condition on $\lambda$.
9. Explain why multiplying a likelihood by a positive function of the observed data does not change likelihood ratios between parameter values.
10. Give two distinct joint distributions with Bernoulli marginals of probability $1/2$, one independent and one perfectly dependent.

## Calculus and asymptotics

11. Maximise $p^x(1-p)^{n-x}$ over $[0,1]$, checking the cases $x=0$ and $x=n$.
12. Compute the gradient and Hessian of $f(\beta)=\lVert y-X \beta\rVert^2$.
13. State a condition that licenses differentiation under an integral sign. Do not answer only “smoothness.”
14. Expand $g(T_n)$ around $\theta$ to first order and identify the remainder needed by the delta method.
15. Explain why $T_n \to \theta$ in probability does not by itself provide a usable finite-sample error probability.

## Linear algebra and proof

16. Show that $v^{\mathsf T} A v\geq 0$ for every $v$ when $A=B^{\mathsf T} B$.
17. If the columns of $X$ are linearly independent, prove $X^{\mathsf T} X$ is invertible.
18. Negate: “for every parameter value, the procedure has coverage at least $0.95$.”
19. Give the logical structure of a proof that no estimator can consistently estimate an estimand when two states have the same observation law but different target values.
20. Distinguish a counterexample to a theorem from an example showing that a theorem's conclusion can occur without its hypotheses.

## Interpretation and design

21. Distinguish a population, a sampling frame, and an observed sample.
22. In a randomised trial, what probability mechanism justifies design-based inference? What does it not automatically justify?
23. Explain why a 95% confidence interval is not generally a 95% posterior credible interval.
24. Give a case where a statistically detectable effect has negligible decision value.

## Compact answer key

1. $P(A|B)=0.4$, $P(B|A)=2/3$; independence would require $0.15$, not $0.2$. 2. Linearity gives mean $\mu$; independence removes covariances, giving variance $\sigma^2/n$. 3. Bayes' rule gives $0.9(0.01)/[0.9(0.01)+0.05(0.99)]$. 4. Cauchy–Schwarz: $E|X|\leq \sqrt{E[X^2]}$. 5. Probability convergence controls $P(|X_n-X|>\epsilon)$; almost-sure convergence controls sample paths outside one null set. Almost sure implies in probability, not conversely.

6. The kernel is $p^x(1-p)^{n-x}$ for $0\leq p\leq 1$ and $x \in \{0,\dots,n\}$. 7. $Y\sim\mathrm{Normal}(a+b \mu,b^2 \sigma^2)$; the variance uses $b^2$. 8. The constant is $\lambda$, requiring $\lambda>0$. 9. Such a factor cancels in every ratio. 10. Independent fair coins provide one law; $Y=X$ with $X$ fair provides the dependent law.

11. The maximum is $x/n$ for $0<x<n$, $0$ for $x=0$, and $1$ for $x=n$. 12. $-2X^{\mathsf T}(y-X \beta)$ and $2X^{\mathsf T} X$. 13. For example, a derivative dominated by one integrable envelope in a neighbourhood, plus measurability and pointwise differentiability. 14. $g(T_n)=g(\theta)+g'(\theta)(T_n-\theta)+r_n$, with the scaled remainder negligible at the estimator's rate. 15. Convergence is an eventual statement for each tolerance, with no specified $n$, rate, or uniformity.

16. $v^{\mathsf T} B^{\mathsf T} Bv=\lVert Bv\rVert^2\geq 0$. 17. If $X^{\mathsf T} Xv=0$, then $0=v^{\mathsf T} X^{\mathsf T} Xv=\lVert Xv\rVert^2$; full column rank gives $v=0$. 18. There exists a parameter value with coverage below $0.95$. 19. Equal observation laws force every estimator to have the same distribution under both states; convergence to two separated constants is impossible. 20. The first violates the stated conclusion while satisfying every hypothesis; the second concerns necessity and does not refute sufficiency.

21. The population defines target units, the frame is the operational list or mechanism that can be sampled, and the sample is the realised subset. 22. The assignment distribution justifies comparisons over hypothetical reassignments; it does not by itself establish measurement validity, no interference, compliance, or transport. 23. Coverage concerns repeated random sets with a fixed parameter; posterior credibility is conditional probability under a prior–likelihood joint model. 24. Any sufficiently large study can detect an effect smaller than the cost, measurement resolution, or practically relevant threshold.

## Repair routes

If Questions 1–10 were unstable, complete the probability shelf through conditional probability, random variables, joint distributions, expectation, and convergence. Re-derive results from definitions rather than memorising distribution tables.

If Questions 11–15 were unstable, repair differentiation, constrained maxima, Taylor expansion, and limits. The likelihood and asymptotics chapters need these moves; the opening chapters can be studied while repairing them.

If Questions 16–20 were unstable, review vector spaces, quadratic forms, rank, quantifiers, contradiction, and equivalence relations. Regression can wait; experiment and identification chapters provide good proof practice now.

If Questions 21–24 were unstable, begin with Chapters 1–3 and write one-sentence interpretations for every symbol. Interpretation is not a softer prerequisite than algebra. It determines whether the algebra answers the question.

Revisit the diagnostic after Chapters 5, 13, and 20. Improvement should appear as more explicit probability spaces, hypotheses, and target statements—not only faster calculation.

## I-DIM-REPAIR: check the dimensions before differentiating

This supplementary repair keeps the original 24 questions and their numbering. It is preparation practice, not an extra diagnostic score.

**Task.** Let $n,p$ be positive integers, $X\in\mathbb R^{n\times p}$, $\beta\in\mathbb R^p$ and $y\in\mathbb R^n$. Give the dimensions of the fitted vector, residual, least-squares gradient and Hessian. Then use

$$X=\begin{pmatrix}1&0\\1&1\\1&2\\1&3\end{pmatrix},\qquad \beta=\begin{pmatrix}2\\3\end{pmatrix},\qquad y=\begin{pmatrix}2\\4\\9\\10\end{pmatrix}$$

to calculate all four objects. Explain why $X^{\mathsf T}\beta$ is not an alternative fitted vector for these dimensions, and why full column rank does not give this rectangular $X$ a two-sided inverse.

**Complete worked repair.** Regard vectors as columns. The product $X\beta$ has shape $(n\times p)(p\times1)=n\times1$, so $r=y-X\beta$ is an $n$-vector. For $f(\beta)=r^{\mathsf T}r$, differentiating with respect to the $p$ coordinates of $\beta$ gives

$$\nabla f=-2X^{\mathsf T}r\in\mathbb R^p,\qquad \nabla^2f=2X^{\mathsf T}X\in\mathbb R^{p\times p}.$$

Here $n=4,p=2$ and row multiplication gives

$$X\beta=\begin{pmatrix}2\\5\\8\\11\end{pmatrix},\qquad r=\begin{pmatrix}0\\-1\\1\\-1\end{pmatrix}.$$

The first coordinate of $X^{\mathsf T}r$ is $0-1+1-1=-1$; the second is $0-1+2-3=-2$. Also $\sum_{i=0}^3i=6$ and $\sum_{i=0}^3i^2=14$. Therefore

$$\nabla f=\begin{pmatrix}2\\4\end{pmatrix},\qquad \nabla^2f=2\begin{pmatrix}4&6\\6&14\end{pmatrix}=\begin{pmatrix}8&12\\12&28\end{pmatrix}.$$

The attempted $X^{\mathsf T}\beta$ has shapes $(2\times4)(2\times1)$, whose inner dimensions differ. The two columns of $X$ are independent, so $X^{\mathsf T}X$ is invertible, as in Question 17; however, $X$ is $4\times2$ and cannot have a two-sided inverse. Its fitted values lie in a two-dimensional subspace of $\mathbb R^4$. Before applying a matrix identity, write each map's domain and codomain and check its inner dimensions.
