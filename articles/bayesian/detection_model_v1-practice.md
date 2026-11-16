# Practice with imperfect recording

Write a model and name the prediction target before calculating. Use shape–rate Gamma notation. The first two tasks reduce the scaffolding; later tasks change the observation mechanism or challenge an inference. Answers are separate so that a numerical match does not replace your explanation.

## 1 Derive a changed recording likelihood

A constant true rate has Gamma$(3,2)$ prior. Over three hours each true event is independently detected with known probability $2/3$, and the detector records five events. Complete the steps: (a) write the latent-count and conditional recording distributions, (b) sum over the latent true count, (c) write the normalized rate posterior, and (d) compute mean and variance of true events in the next two hours. Explain why “five observations” does not mean five hours of exposure.

## 2 Separate two future targets

Keep task 1's posterior but remove the derivation scaffold. Find the mean, variance and zero probability for recordings during a future half-hour with detection $1/4$. Compare them with true events in that same half-hour. A colleague uses a Poisson distribution at the posterior mean true rate. Explain the missing variance term and the direction of their zero-probability error.

## 3 Reconstruct the original total

Use Gamma$(2,1)$ prior, three-hour observation, known detection $1/3$ and two recordings. Derive the posterior missing-count mass for the original window, its mean and variance, and the support and mean of the original total. Compare the total's mean with the estimate obtained by dividing the recorded count by $q$. State precisely where conditional independence was used. Do not confuse the missing count with a new three-hour count.

## 4 Explain an unidentified detector

An instrument's detection probability is unknown. Show that true-rate/detection pairs $(3,2/3)$ and $(6,1/3)$ produce the same distribution of recordings over any fixed duration. Would recording 1000 independent windows under that same model separately identify both parameters? Does a proper posterior settle that question? Describe calibration data that would add different information.

For an exact changed sensitivity case, use Gamma$(1,1)$ rate prior and equal prior masses at $q=1/2$ and $q=1$. Observe one recording in one hour. Derive the posterior candidate weights and each conditional Gamma posterior. Find the posterior mean true rate and the one-hour future true-count zero probability. Explain why assigning $q$ its posterior mean is a different approximation.

## 5 Check units and reference measures

Return to task 1. Express the true rate per minute, including its prior and posterior Gamma rates, and check that the two-hour future true-count distribution agrees in both coordinates. Then derive the task-1 posterior log density for $\eta=\log(\lambda/(1\text{ event/hour}))$. Find the unintended rate distribution produced if its Jacobian is omitted. Compare the two density modes, making clear which coordinate each uses.

## 6 Change the observation mechanism

Return to the worked lesson's known $q=1/2,T=2,y=4$ model. Now suppose an additional independent false-alarm process generates records at **known rate one per hour**. Real detections and false alarms are not labeled in the file. Derive the recorded-count likelihood. Does multiplying it by Gamma$(2,1)$ still produce a single Gamma posterior? Expand the fourth power to show the posterior is a mixture of five Gamma kernels. You need not normalize all five weights. Explain why the detection-only calculator should not be used for this changed mechanism, even if it accepts the same integers.

After a delay, reconstruct the thinning sum, give an example of equal recording likelihoods with different true rates, and distinguish uncertainty about the original total from prediction of future events. Use a new context such as missed machine pulses rather than quoting the worked numbers.
