# Practice with fitted predictive checks

Tasks 1–5 form the core route; task 6 is optional advanced material. Try each task before opening the separate [hints](./predictive_check_v1-hints.md) or [worked answers](./predictive_check_v1-answers.md). Use the stated fresh Beta$(1,1)$ fitting prior in each study. Tasks do not accumulate data. The blocks and discrepancies are declared before observing outcomes.

## 1 Predict the two reference events

Fix two labeled blocks of two iid Bernoulli$(p)$ trials, using one shared unknown $p$ and prior Beta$(1,1)$. Observe $11\mid00$. Let $A,B$ be the block success counts, $S=A+B$ and $T=|A-B|$.

Before calculating, describe an ordinary posterior predictive replicate and a sufficient-total conditional replicate. What does each hold fixed? Can the replicated total differ from two? Must a new shared $p$ be drawn for every trial or once per whole ordinary replicate? List the count pairs satisfying $T^{\mathrm{rep}}\ge2$.

Would either tail be a posterior probability that the common-$p$ iid model is true? Describe a repeated experiment that would assess a nominal 10% checking rule. Distinguish this from drawing more replicates after fitting only the observed $11\mid00$ dataset.

## 2 Derive the shared-parameter predictive tail

Derive the posterior for task 1. For general fixed block sizes $m_1,m_2$ and posterior Beta$(a,b)$, start from the conditional joint binomial count probability and integrate over the **same** $p$ for both blocks. Include count multiplicities. Explain why multiplying two separately averaged marginal predictive probabilities gives a different joint distribution.

Evaluate the ordinary predictive weak tail for $11\mid00$ exactly. Then count the six ordered strings with total two and derive the conditional distribution of the first block's count. Evaluate its weak contrast tail. Explain why different answers can both be correct, and what information the conditional reference has deliberately removed.

## 3 Derive the fitted check's entire sampling law

Keep the original two-by-two design and fitting prior. Now consider **every possible observed** four-trial string. For each string fit Beta$(S+1,5-S)$ and calculate its predictive weak tail. Do not use Beta$(3,3)$ for all observed datasets.

Group the sixteen strings by $T=0,1,2$. The worked lesson supplies the $T=2$ case. Derive the $T=1$ tail from a representative string with $S=1$; use success–failure symmetry for $S=3$. What is the weak tail when $T=0$? Count the strings in each group and check that their counts sum to sixteen.

Write $r=1-p$. Derive the probability of each fitted-tail value for arbitrary fixed true $p$. Check that these probabilities sum to one. Evaluate the law at $p=1/2$, then average over a true $p$ drawn uniformly once per study. The fitting prior remains Beta$(1,1)$ in both ensembles.

For the rule $q_{\mathrm{pp}}\le1/10$, calculate the false-alarm probability in both ensembles. Is it a level-10% rule for every fixed $p$? Does this answer invalidate its interpretation as a posterior predictive event probability? Use the explorer only after deriving your table.

## 4 Establish the conditional guarantee and its limit

For an arbitrary attainable total $s$, order the distinct conditional discrepancy values from largest to smallest, with positive masses $w_1,\ldots,w_k$. Write $c_j=\sum_{i=1}^jw_i$. Prove that the weak-tail statistic satisfies

$$\Pr_p(q_{\mathrm{cond}}(Y)\le\alpha\mid S=s)\le\alpha.$$

Why can the reference law be used for the observed allocation under the null? Average over $S$ to obtain a fixed-$p$ guarantee. Explain why the contrast need not be unconditionally ancillary for this argument.

In the original four-trial experiment, derive every possible conditional weak-tail value. What does a 10% conditional rule do? Can an error-controlled procedure still have no power at a particular sample size and threshold? Explain the distinction between super-uniformity and exact uniformity for a finite statistic.

## 5 Independently transfer to unequal blocks

This new study is **outside the explorer**. Start afresh with Beta$(1,1)$ and one persistent common $p$. Before data collection, fix a first block of three trials, a second block of seven, and discrepancy

$$T=|7A-3B|.$$

Show that $T$ is 21 times the absolute difference in block proportions. Explain why a raw count difference would compare unequal denominators. Now observe $111\mid1000000$.

Derive the posterior and observed $S,T$. Construct the ordinary joint predictive count law from the sampling model. Identify **every** count pair $(x,z)$ satisfying $|7x-3z|\ge T(y)$ and sum their exact probabilities. Count multiplicities rather than treating the count pairs as equally probable.

Independently derive $A^{\mathrm{rep}}\mid S^{\mathrm{rep}}=S(y)$ by counting allocations. Give its support and all masses, identify the extreme event, and calculate its conditional tail. Explain why the two answers again concern different reference experiments. Do not import the original example's count-pair list or conditional weights.

After a delay, reconstruct the posterior, discrepancy and both event sets from the new design without consulting the lesson.

## 6 Optional advanced: randomize ties in two different references

Preparation: finite mixtures and a continuous uniform variable. Use an independent $U\sim\operatorname{Uniform}(0,1)$, resampled for each repeated study.

For the sufficient-total conditional reference in task 4, define strict-tail plus $U$ times tie mass. Show that class $j$ fills an interval of length $w_j$, and prove exact Uniform$(0,1)$ behavior conditional on $S=s$. What happens when the conditional discrepancy is constant? Why does uniformity alone not establish useful information or power?

Return to the original two-by-two study and instead form

$$q^*_{\mathrm{pp}}=\Pr(T^{\mathrm{rep}}>T(Y)\mid Y)
+U\Pr(T^{\mathrm{rep}}=T(Y)\mid Y).$$

Derive the strict and weak predictive tails for observed classes $T=2$, $T=1$, and $T=0$. Split the last class by $S$ when necessary. These endpoints give the interval occupied by each class's randomized tail.

At fixed truth $p=1/2$, calculate $\Pr(q^*_{\mathrm{pp}}\le1/10)$ by weighting each interval's included fraction by the observed class probability. Repeat using the prior-and-data ensemble from task 3. Does tie randomization restore fixed-$p$ uniformity? Identify precisely why the conditional uniform-mixture argument cannot be transferred to the fitted predictive reference.
