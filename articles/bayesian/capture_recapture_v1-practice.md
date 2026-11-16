# Practice with matched captures and unseen members

Use a closed population with arbitrary identifiers used only for matching, perfect recognition and no lost tags. The original prior, declared before sampling, is uniform on $N=5,6,7,8$; its endpoints are illustrative prior restrictions. Unless a task changes the protocol, each sample is a uniform fixed-size subset, members are returned between samples, and complete subsets are independent given $N$. Attempt each task before its separate [hint](./capture_recapture_v1-hints.md) or [worked answer](./capture_recapture_v1-answers.md).

## 1 Count subsets and update the population prior

The first three distinct members are tagged and returned. The second sample contains three distinct members with overlap $R=1$.

For a given $N$, count all possible second subsets and those with one tagged member. Derive the feasible overlap range and prove that summing the overlap PMF gives one. Evaluate the likelihood at every prior-supported $N$.

Compute the prior predictive probability of $R=1$ and normalize the posterior. Calculate its mean, variance and probability $N\ge7$. Identify the number of distinct identifiers known so far. Which lower population bound follows from those identities, and where did the upper endpoint eight enter the analysis? Why does a posterior mean that is not an integer cause no contradiction?

## 2 Change the overlap and the target quantity

Keep the original prior and sampling protocol, but observe $R=2$. Derive all likelihoods and posterior masses from scratch. Compute the posterior mean and variance of $N$, the known union size, and the posterior expected number $U$ not in either recorded sample.

Compare both $E(N)$ and $E(U)$ with the overlap-one analysis. Explain how the total-population estimate can decrease while the unseen-member estimate increases. Are members seen only in the second sample “unseen” for this target? Is the retained prior restriction $N\ge5$ implied by an observed union of four?

## 3 Forecast the independent audit

Return to the original uniform experiment and $R=1$. A third audit takes an independent uniform subset of three distinct existing members. Let $K$ count identifiers absent from both earlier recorded samples.

Given $N$, derive the full conditional PMF of $K$ by counting subsets. Write its values at $N=5,6,7,8$ and average over the posterior to obtain the four predictive probabilities. Check normalization, compute $\Pr(K\ge1)$ and $E(K)$, and verify the mean independently using the conditional-mean formula.

Compare that mean with substituting $E(N)=47/7$ into $3(N-5)/N$. Explain why substituting a noninteger posterior mean into the hypergeometric PMF is not a valid conditional population model. Distinguish this audit's count from the number untagged and from the number of new arrivals.

## 4 Specify a biased sampler before selecting a distribution

Keep one physical population and its first three tags fixed. Repeatedly propose a uniform size-three subset; accept the whole subset with probability $2^{r-3}$ if it contains $r$ tags. Return all rejected members and redraw from the same population. Only the accepted batch and its overlap are recorded; rejected proposals and their count are unrecorded.

Derive the probability of an accepted subset and the overlap PMF. Show why it is Fisher's noncentral hypergeometric law with odds two. At observed overlap one, derive its likelihoods and posterior masses over the original prior support, and calculate $E(N)$.

Now change to sequential sampling of exactly three members without replacement, each draw proportional to the remaining individual weights, with tagged weight two and untagged weight one. At $N=6$ enumerate the three tag/untagged orders that produce one tag and prove their total probability is $1/4$, rather than Fisher's $2/7$. Identify the corresponding distribution and the SciPy and Wolfram parameter orders.

Why would recording the number of rejected proposals change the first likelihood? Why would redrawing $N$ from its prior after each rejection describe a different experiment? If the independent third audit is still explicitly uniform, should its conditional hypergeometric PMF be replaced with Fisher's law?

## 5 Change the prior support and test what the data learned

Return to uniform second sampling and overlap one. Compare a new prior, also declared before sampling, uniform on $N=5,\ldots,12$. Keep the likelihood unchanged.

Derive its eight posterior masses, mean, variance and probability $N>8$. Condition the wider posterior on $N\le8$ and prove that the original narrower posterior is recovered exactly. Explain why this identity does not establish that the narrower support is correct.

Which conclusion would follow if eight were a genuinely known physical capacity? Why is that different from the illustrative prior assumption used here? State what this sensitivity calculation demonstrates about reporting posterior estimates for unrecorded members.

## 6 Transfer to a changed second sample size

Use the original prior on $N=5,6,7,8$ and a uniform first sample of three tagged members, but take a uniform second sample of **two** distinct members and observe overlap one. No other part of the protocol changes.

Derive the likelihoods, prior predictive probability, posterior masses, posterior mean and variance of $N$. Find the known union size and expected number not in either sample. Explain why reusing the original size-three likelihood would describe the wrong experiment.

Finally identify which parts of the analysis would need revision if population membership changed between lists, tags were lost, or individual catchability differed from the stipulated subset design. Do equal individual inclusion probabilities alone establish uniformity over complete subsets? Explain why a more flexible heterogeneous-detection model and its identifiability questions are different from a proof that every matched-capture experiment is uninformative.
