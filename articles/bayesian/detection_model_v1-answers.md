# Worked answers for imperfect recording

Attempt each task before revealing its answer. A correct number earns an explanation only when the latent process, actual likelihood and requested target are also identified.

## 1 Changed recording likelihood

Write $N\mid\lambda\sim\operatorname{Poisson}(3\lambda)$ and $Y\mid N\sim\operatorname{Binomial}(N,2/3)$. Summing $\Pr(N=n\mid\lambda)\Pr(Y=5\mid N=n)$ over $n\ge5$ gives $Y\mid\lambda\sim\operatorname{Poisson}(2\lambda)$. Thus $\lambda\mid Y\sim\operatorname{Gamma}(8,4)$, with normalized density $4^8\lambda^7e^{-4\lambda}/\Gamma(8)$.

The posterior rate mean is $2$ and variance $1/2$. A future true count over two hours has mean $4$ and variance $4+4(1/2)=6$. The observed count adds to shape; known detection times duration adds to rate. A file count is not an exposure measurement. The estimate $5/(3q)=5/2$ is not the posterior mean because it omits the prior's contribution.

## 2 Two future targets

The future recording exposure is $(1/4)(1/2)=1/8$. Mean is $(1/8)2=1/4$, variance is $1/4+(1/8)^2(1/2)=33/128$, and zero probability is $(4/(4+1/8))^8=(32/33)^8$.

For future true events, exposure is $1/2$, mean is $1$, variance is $1+(1/2)^2(1/2)=9/8$, and zero probability is $(8/9)^8$. A fixed-rate Poisson prediction drops $c_f^2\operatorname{Var}(\lambda\mid Y)$. Its zero probability is too small for positive exposure and nonzero posterior variance, because averaging the strictly convex exponential exceeds evaluating it at the posterior mean. Detection uncertainty is not an extra unknown here: the detection probability is stipulated as known.

## 3 Original total

The rate posterior is Gamma$(4,2)$. The missed exposure is $(1-1/3)3=2$ hours. Thus

$$\Pr(M=m\mid Y=2)=\binom{m+3}{m}(1/2)^4(1/2)^m,\quad m=0,1,\ldots.$$

Mean missed count is $2(4/2)=4$; its variance is $4+2^2(4/2^2)=8$. The original total is $N=2+M$, supported on $2,3,\ldots$, with mean six and variance eight. Dividing the observed count by detection also gives six in this changed example: equality of means here is coincidental and does not make the plug-in value a distribution or reveal the actual total. It differs from the worked lesson, whose posterior mean total is seven versus estimate eight.

We used $M\perp Y\mid\lambda,q$ to retain the Poisson$((1-q)T\lambda)$ law for missing events after conditioning on a given rate and observed recording. We then integrated over the **updated** rate. Unconditional independence was neither assumed nor valid in general. A future true three-hour count instead has mean six and variance fifteen; it is not the original missing count.

## 4 Unknown detector

Both pairs have $q\lambda=2$, giving Poisson$(2T)$ recordings at duration $T$. The entire joint likelihood of 1000 independent windows still depends only on $q\lambda$. More data can sharpen that product without separating its factors. A proper posterior is a probability distribution under a chosen prior; propriety is not separate likelihood identification. Independent trials with a known number of real events and the number detected supply a binomial calibration likelihood for $q$.

For the changed finite sensitivity model, integrated evidences are proportional to $q/(1+q)^2$: at $q=1/2$ this is $2/9$, and at $q=1$ it is $1/4$. With equal incoming masses, posterior weights are $8/17$ and $9/17$. Conditional rate posteriors are Gamma$(2,3/2)$ and Gamma$(2,2)$. The mixture mean is

$$\frac8{17}\frac43+\frac9{17}\cdot1=\frac{59}{51}.$$

The future true-count zero probability is

$$\frac8{17}(3/5)^2+\frac9{17}(2/3)^2=\frac{172}{425}.$$

Detection updates through the assumed independent prior on the true rate; the equal-likelihood argument remains true. The posterior is a mixture, not the conditional posterior obtained by inserting the mean of $q$. In particular, nonlinear functions of $q$ and posterior dependence prevent that substitution from preserving all predictions.

## 5 Units and reference measures

For $r=\lambda/60$ events/minute, Gamma$(a,b)$ for the hourly numerical rate becomes Gamma$(a,60b)$ for the minute rate, including the density Jacobian $60$. The prior is Gamma$(3,120)$ and posterior Gamma$(8,240)$. The future duration is 120 minutes, so $B/(B+t)=240/360=2/3$, the same as $4/(4+2)$ in hours; the entire negative-binomial law agrees.

The posterior log density with respect to $d\eta$ is $8\eta-4e^\eta+C$. Omitting the Jacobian yields $7\eta-4e^\eta$, which, when mapped back to rate, corresponds to Gamma$(7,4)$ rather than Gamma$(8,4)$. The intended hourly rate-density mode is $7/4$; the mode of its $\eta$ density is $\log2$, mapping to rate two. Modes maximize density relative to different measures, so they need not transform as probability quantiles do.

## 6 False alarms

Given the true rate, real detections are Poisson$(\lambda)$ over two hours and independent false alarms are Poisson$(2)$. Therefore $Y\mid\lambda\sim\operatorname{Poisson}(\lambda+2)$, and the likelihood for four unlabeled records is $e^{-(\lambda+2)}(\lambda+2)^4/4!$.

Multiplying by the prior gives kernel $\lambda e^{-2\lambda}(\lambda+2)^4$. The expansion is

$$\sum_{j=0}^4\binom4j2^{4-j}\lambda^{j+1}e^{-2\lambda}.$$

Each term is a Gamma$(j+2,2)$ kernel. To turn these into normalized mixture densities, weights are proportional to $\binom4j2^{4-j}\Gamma(j+2)/2^{j+2}$; raw polynomial coefficients alone are not the normalized mixture weights. No single Gamma kernel describes the result. The original calculator assumes no false positives, so its Gamma$(6,2)$ answer solves the previous model, not this new one. Fitting precisely the wrong likelihood is still the wrong inference.
