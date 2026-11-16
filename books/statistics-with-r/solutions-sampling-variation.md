
# Solutions: Sampling Variation

These solutions use the same conventions as the chapter. The literal synthetic fixtures are original Math Atlas material: `R08-POP-v1` is `c(2, 4, 6, 8)` points keyed by vector position, and `R08-E06-POP-v1` is `c(1, 3, 7)` points keyed by position. Version 1 of each has no missing values or exclusions. The probability tables are declared models, not empirical evidence. The literal values in this document are their canonical provenance.

Every code block below runs in document order in a fresh R process. The opening block creates the fixtures and the tolerance used later.

```r
population_points <- c(2, 4, 6, 8)
exercise_population <- c(1, 3, 7)
det_tol <- function(expected) 1e-10 + 1e-8 * abs(expected)

stopifnot(identical(length(population_points), 4L))
stopifnot(identical(length(exercise_population), 3L))
stopifnot(!anyNA(population_points), !anyNA(exercise_population))
```

## R-08-E01

Name the physical sectors $A_1,A_2,B,C$. Then

$$
\Omega=\{A_1,A_2,B,C\},
$$

and fairness assigns probability $1/4$ to each. The event “label $A$” is $\{A_1,A_2\}$, so its probability is $2/4=1/2$. Its complement has probability $1-1/2=1/2$. The event “label $B$ or $C$” is $\{B,C\}$ and also has probability $1/2$.

The display $\{A,B,C\}$ loses the fact that two different physical outcomes share label $A$. Giving those three labels probability $1/3$ each would contradict the spinner's four equal sectors. Equally likely refers to the physical outcomes supplied by the mechanism, not merely to distinct printed labels.

## R-08-E02

The probabilities are nonnegative and sum to $0.2+0.5+0.3=1$, so they define a distribution. The mean is

$$
\mu=(-1)(0.2)+2(0.5)+5(0.3)=2.3\text{ cm}.
$$

The weighted squared distances give

$$
\operatorname{Var}(X)
=(-1-2.3)^2(0.2)+(2-2.3)^2(0.5)+(5-2.3)^2(0.3)
=4.41\text{ cm}^2.
$$

Therefore $\operatorname{SD}(X)=\sqrt{4.41}=2.1$ cm. Variance has squared units; the mean and SD have the original unit.

```r
x_values <- c(-1, 2, 5)
x_probability <- c(0.2, 0.5, 0.3)
x_mean <- sum(x_values * x_probability)
x_variance <- sum((x_values - x_mean)^2 * x_probability)
x_sd <- sqrt(x_variance)

stopifnot(abs(sum(x_probability) - 1) <= det_tol(1))
stopifnot(abs(x_mean - 2.3) <= det_tol(2.3))
stopifnot(abs(x_variance - 4.41) <= det_tol(4.41))
stopifnot(abs(x_sd - 2.1) <= det_tol(2.1))
c(mean_cm = x_mean, variance_cm_squared = x_variance, sd_cm = x_sd)
```

Using the unweighted `mean(x_values)` or `var(x_values)` would answer a different question by treating the three listed values as equally weighted observations.

## R-08-E03

Each indicator has $E(I_i)=p=0.2$ and variance $p(1-p)=0.16$. Expectations add, so

$$E(X)=E(I_1)+E(I_2)+E(I_3)=3(0.2)=0.6.$$

The indicators are independent, so centered cross terms have expectation zero. Therefore

$$\operatorname{Var}(X)=3(0.16)=0.48.$$

Exactly one success can occur in positions 1, 2, or 3. Each corresponding sequence has probability $0.2(0.8)^2$, hence

$$\Pr(X=1)=3(0.2)(0.8)^2=0.384.$$

The multiplier 3 counts mutually exclusive sequences. It would be invalid without the identical $p$ values, and the product inside each sequence uses independence.

```r
success_count <- 0:3
success_probability <- dbinom(success_count, size = 3, prob = 0.2)
expected_probability <- c(0.512, 0.384, 0.096, 0.008)

stopifnot(all(abs(success_probability - expected_probability) <= det_tol(expected_probability)))
stopifnot(abs(sum(success_probability) - 1) <= det_tol(1))
stopifnot(abs(sum(success_count * success_probability) - 0.6) <= det_tol(0.6))
stopifnot(abs(sum((success_count - 0.6)^2 * success_probability) - 0.48) <= det_tol(0.48))
data.frame(success_count, probability = success_probability)
```

## R-08-E04

(a) The two independent fair tosses are identically distributed as well: each is Bernoulli with $p=1/2$, and learning one result does not alter the other law.

(b) The two records are identically distributed but not independent. Once the first record is known, the duplicate is known exactly. Treating duplication as a new toss would invent variation that the mechanism did not create.

(c) The trials are independent but not identically distributed. Their success probabilities, 0.2 and 0.7, specify different Bernoulli laws.

(d) The two temperatures are identically distributed under the stated model but not independent. Positive correlation says their joint behavior does not factor into the product of their marginal laws. The phrase “same marginal distribution” alone would establish identical distributions but say nothing conclusive about independence; the supplied positive correlation resolves that question.

The common error is to treat “iid” as one vague condition. Each letter represents a distinct property that must be justified.

## R-08-E05

Write $\bar X$ for the average of 36 fills. Under the stated iid model,

$$
E(\bar X)=500\text{ g},\qquad
\operatorname{Var}(\bar X)=\frac{12^2}{36}=4\text{ g}^2,
$$

so the exact model SE is $12/\sqrt{36}=2$ g. Requiring $12/\sqrt n=1$ gives $\sqrt n=12$ and $n=144$ fills.

This is a fourfold increase from 36, illustrating the square-root law. Serial drift in the filling machine would make neighboring observations dependent and could invalidate the calculation. Other failures include changing process variance or sampling only a selected production period.

```r
fill_n <- 36L
fill_sigma_g <- 12
fill_variance_mean <- fill_sigma_g^2 / fill_n
fill_se_g <- fill_sigma_g / sqrt(fill_n)
needed_n <- (fill_sigma_g / 1)^2

stopifnot(abs(fill_variance_mean - 4) <= det_tol(4))
stopifnot(abs(fill_se_g - 2) <= det_tol(2))
stopifnot(identical(needed_n, 144))
c(variance_g_squared = fill_variance_mean, SE_g = fill_se_g, needed_n = needed_n)
```

## R-08-E06

The possible pairs and means are

| Selected values | Sample mean (points) |
|---|---:|
| 1, 3 | 2 |
| 1, 7 | 4 |
| 3, 7 | 5 |

Each pair has probability $1/3$. The mean of the sampling distribution is $(2+4+5)/3=11/3$, equal to the finite-population mean. Its variance is

$$
\frac13\left\{(2-11/3)^2+(4-11/3)^2+(5-11/3)^2\right\}=\frac{14}{9}.
$$

The population variance with denominator $N=3$ is

$$
\sigma_N^2=\frac13\left\{(1-11/3)^2+(3-11/3)^2+(7-11/3)^2\right\}=\frac{56}{9}.
$$

The theorem gives

$$
\frac{N-n}{N-1}\frac{\sigma_N^2}{n}
=\frac{1}{2}\frac{56/9}{2}=\frac{14}{9}.
$$

```r
exercise_pairs <- combn(seq_along(exercise_population), 2L)
exercise_means <- apply(
  exercise_pairs,
  2L,
  function(index) mean(exercise_population[index])
)
finite_mean <- mean(exercise_population)
finite_variance_N <- mean((exercise_population - finite_mean)^2)
sampling_variance <- mean((exercise_means - finite_mean)^2)
fpc_variance <- (3 - 2) / (3 - 1) * finite_variance_N / 2

stopifnot(identical(exercise_means, c(2, 4, 5)))
stopifnot(abs(finite_mean - 11 / 3) <= det_tol(11 / 3))
stopifnot(abs(finite_variance_N - 56 / 9) <= det_tol(56 / 9))
stopifnot(abs(sampling_variance - 14 / 9) <= det_tol(14 / 9))
stopifnot(abs(fpc_variance - sampling_variance) <= det_tol(sampling_variance))
data.frame(
  pair = apply(exercise_pairs, 2L, paste, collapse = ","),
  sample_mean_points = exercise_means
)
```

For a census, $n=N=3$, so the correction factor $(N-n)/(N-1)$ is zero. Every sample contains all three values and its mean is always $11/3$; there is no sampling variation.

## R-08-E07

The requested probability is the area to the left of 46 minus the area to the left of 34:

$$
\Pr(34\leq X\leq46)=F(46)-F(34)\approx0.6826895.
$$

The 0.95 quantile is approximately 49.86912: 95% of the model's area lies to its left. Because the normal model is continuous, including or excluding either endpoint does not change the area.

```r
normal_interval_probability <- pnorm(46, mean = 40, sd = 6) -
  pnorm(34, mean = 40, sd = 6)
normal_q95 <- qnorm(0.95, mean = 40, sd = 6)

stopifnot(abs(normal_interval_probability - 0.682689492137086) <= det_tol(0.682689492137086))
stopifnot(abs(normal_q95 - 49.8691217617092) <= det_tol(49.8691217617092))
stopifnot(abs(pnorm(normal_q95, 40, 6) - 0.95) <= det_tol(0.95))
c(interval_probability = normal_interval_probability, quantile_0.95 = normal_q95)
```

The iid CLT describes convergence as $n$ tends to infinity under mutual independence, a common distribution, and finite positive variance. It neither says the finite-$n$ mean is exactly normal nor specifies a universal rate. Skewness, rare events, tails, and the probability being approximated can all affect accuracy. Thus $n=30$ alone establishes no finite-sample guarantee.

## R-08-E08

The estimated Monte Carlo SE is

$$
\sqrt{0.329(1-0.329)/10000}\approx0.0046985.
$$

This is probability-scale variation in the simulated fraction across fresh simulation runs. The exact sampling SE of the size-two mean is

$$
\sqrt{\operatorname{Var}(\bar Y)}=\sqrt{5/3}\approx1.291\text{ points}.
$$

It is the spread of the statistic across fresh size-two samples from the finite population. Increasing $B$ runs the numerical approximation longer and reduces Monte Carlo SE at rate $1/\sqrt B$. It does not change the sample size $n=2$, the sampling design, or the exact sampling distribution, so it does not change the sampling SE.

```r
B_exercise <- 10000L
q_hat_exercise <- 0.329
estimated_mcse_exercise <- sqrt(q_hat_exercise * (1 - q_hat_exercise) / B_exercise)
sampling_se_exercise <- sqrt(5 / 3)

stopifnot(abs(estimated_mcse_exercise - 0.00469849976056188) <= det_tol(0.00469849976056188))
stopifnot(abs(sampling_se_exercise - 1.29099444873581) <= det_tol(1.29099444873581))
c(
  estimated_Monte_Carlo_SE = estimated_mcse_exercise,
  exact_sampling_SE_points = sampling_se_exercise
)
```

Substituting $B=10{,}000$ into $\sqrt{5/3}$, or substituting $n=2$ into the Monte Carlo formula, would mix two different repetition mechanisms.

[Return to the chapter and exercises.](sampling-variation.md)


## R-08-E09

For independent copies, the average has variance $4/16=1/4$ squared units and SE one half unit. With four copies of one underlying Z, the average equals Z for every outcome, so its variance remains one and its SE one unit. Every row has the same marginal law in both models. The difference is their joint mechanism: duplicating a record adds no independent information. A row count alone does not select the reciprocal-square-root SE formula.

## R-08-E10

Sampling SE is $6/\sqrt{36}=1$ point. Estimated Monte Carlo SE is $\sqrt{0.5(1-0.5)/2500}=0.01$ on a probability scale. Multiplying B by twenty five reduces its standard-error scale by five, to 0.002 for an assessed fraction near one half. Sampling SE stays one point because n and the population law did not change. The Monte Carlo value is a plug-in estimate, not a finite guarantee. Reducing sampling SE by five instead requires twenty five times as many independent sampled observations.

## Rights

These solutions, calculations, code, and fixtures are original Math Atlas material and do not adapt third-party exercises or solution text. They are licensed CC BY-SA 4.0 as declared in the front matter.
