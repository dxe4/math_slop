
# Branching Processes

A population can have an increasing expected size while still having a substantial chance of disappearing. Expectation averages extinct families together with surviving families, and the latter can be very large. Branching processes make that distinction precise. They also reveal how the independence assumptions in a population model turn a question about an entire family tree into an equation for one number.

Preparation is [Martingales and Stopping](martingales-and-stopping.md), conditional expectation, power series with nonnegative coefficients, and monotone convergence from [Probability: Models, Bounds, and Proofs](#/books/probability-models-proofs). The extinction argument is L3. The final normalized-population calculation prepares for the L4 convergence chapter; it does not assume that every martingale preserves its expectation at a limit.

## A generation model and its information

**Definition 11.1 (Galton–Watson population).** Let $K_{n,j}$, for integers $n\ge0,j\ge1$, be independent copies of a finite, nonnegative integer-valued random variable $K$. Its probabilities are $p_k=P(K=k)$, with $\sum_{k\ge0}p_k=1$. Set $Z_0=r$, where $r$ is a fixed nonnegative integer, and define

$$Z_{n+1}=\sum_{j=1}^{Z_n}K_{n,j},$$

using zero for an empty sum. Each individual lives for one generation and is replaced by its children. State zero is absorbing. Every generation is finite almost surely, by induction: a finite sum of finite offspring counts is finite. No finite mean is needed for that assertion.

The natural information $\mathcal F_n$ records the tree through generation $n$, before the generation-$n$ individuals reproduce. Independence of the unused row $K_{n,j}$ from $\mathcal F_n$ is essential. Merely assigning the same marginal offspring distribution to every individual would not establish the conditional formulas below.

**Definition 11.2 (offspring generating function).** For $0\le s\le1$, put

$$f(s)=E[s^K]=\sum_{k\ge0}p_ks^k,$$

where $0^0=1$ in this expression. Thus $f(0)=p_0$ and $f(1)=1$. The function is continuous on $[0,1]$ by bounded convergence and is nondecreasing. It is convex because each monomial is convex there. Its left derivative at one is $m=EK$, possibly infinite, as follows by monotone convergence applied to $\sum k p_ks^{k-1}$.

We assume $m<\infty$ for statements involving expected population size. Results about iteration of $f$ do not require this assumption. If $m=0$, then $K=0$ almost surely, so a nonempty initial population dies after one reproduction step. Ratios involving $m^n$ will always exclude that case.

## Composition expresses independence

**Theorem 11.3 (generation generating functions).** Starting from one ancestor,

$$E[s^{Z_n}]=f^{\circ n}(s),\qquad0\le s\le1,$$

where the superscript means repeated composition and $f^{\circ0}(s)=s$. Starting from $r$ independent ancestral trees gives $E[s^{Z_n}]=(f^{\circ n}(s))^r$.

**Proof.** Conditional on $Z_n=z$, independence of the $z$ offspring counts gives

$$E[s^{Z_{n+1}}\mid\mathcal F_n]=f(s)^{Z_n}.$$

Taking expectations proves that the next generating function is the current one evaluated at $f(s)$. Induction from $Z_0=1$ gives the composition formula. Alternatively, condition on the first generation: every child starts an independent copy of the remaining tree. For $r$ ancestors, the population is the sum of $r$ independent copies of the one-ancestor population, so their generating functions multiply. ∎

The equality is a statement about a random tree, not just a recursive manipulation of symbols. A common environmental shock shared by all parents would prevent the multiplication inside the conditional expectation. Independence across generations is equally material: knowing the past must not reveal tomorrow's unused reproduction randomness.

**Worked example 11.4 (two generations explicitly).** Suppose $p_0=1/4$ and $p_2=3/4$. Then $f(s)=1/4+3s^2/4$. After one generation the population is zero or two. After two generations it is zero, two or four, and

$$f(f(s))=\frac14+\frac34\left(\frac14+\frac34s^2\right)^2
=\frac{19}{64}+\frac{18}{64}s^2+\frac{27}{64}s^4.$$

The coefficients sum to one. The extinction probability by generation two is $19/64$, larger than the first-generation probability $1/4$. The mean computed from this law is $(2\cdot18+4\cdot27)/64=9/4$, agreeing with $m^2=(3/2)^2$. These are different checks: total probability checks the distribution, while the mean checks one of its consequences.

## Extinction is the smallest fixed point

**Definition 11.5 (extinction).** For one initial ancestor let $E$ be the event that $Z_n=0$ for some finite $n$, and write $q=P(E)$. Since zero is absorbing, the events $\{Z_n=0\}$ increase with $n$. Their union is exactly $E$.

**Theorem 11.6 (fixed-point characterization).** Set $q_0=0$ and $q_{n+1}=f(q_n)$. Then $q_n=P(Z_n=0)$, $q_n\uparrow q$, and $q$ is the smallest solution in $[0,1]$ of $f(s)=s$. From $r$ ancestors the extinction probability is $q^r$ for $r\ge1$; from zero ancestors it is one.

**Proof.** The generating-function identity at $s=0$ gives $q_n=f^{\circ n}(0)$. Absorption makes this sequence nondecreasing and bounded by one. Probability continuity for increasing events identifies its limit with $q$. Continuity of $f$ gives $q=f(q)$. If $a\in[0,1]$ is any other fixed point, then $q_0=0\le a$, and induction using monotonicity gives $q_{n+1}=f(q_n)\le f(a)=a$. Taking limits proves minimality. For finitely many ancestral trees, extinction of the total population occurs exactly when every tree becomes extinct. Independence multiplies their extinction probabilities. ∎

Minimality cannot be discarded. The number one is always a fixed point, but it need not be the extinction probability. Iteration from zero selects the probability determined by the finite-generation events. A numerical solver returning an arbitrary root of the polynomial has not yet solved the probabilistic problem.

**Theorem 11.7 (finite-mean extinction classification).** Assume $m<\infty$ and one ancestor. If $m\le1$ and $P(K=1)\ne1$, then $q=1$. If $P(K=1)=1$, then $Z_n=1$ always and $q=0$. If $m>1$, then $q<1$; when $p_0>0$, the fixed point below one is unique and lies in $(0,1)$, while $p_0=0$ gives $q=0$.

**Proof.** If $m<1$, convexity and the supporting tangent at one give, for $0\le s<1$,

$$f(s)\ge1+m(s-1)>s.$$

Thus one is the only fixed point. If $m=1$ and reproduction is not identically one, then either the distribution is identically zero, which cannot have mean one, or it has positive mass at some $k\ge2$. On $(0,1)$ that term makes $f$ strictly convex. The tangent inequality is then strict below one, except possibly at the endpoint zero. But $p_0>0$ in this nondegenerate mean-one case: without zero offspring, mean one would force $K=1$ always. Hence zero is not a fixed point either, and $q=1$.

For $m>1$, the left derivative of $g(s)=f(s)-s$ at one is positive. Consequently $g(s)<0$ for some $s<1$ sufficiently close to one. If $p_0>0$, then $g(0)>0$, so continuity supplies a root between zero and that $s$. Strict convexity implies there cannot be three roots in $[0,1]$: a middle root would have to lie strictly below the chord joining the outer two. Thus this root and one are the only roots. If $p_0=0$, then zero is fixed and is necessarily the smallest fixed point. Finally, deterministic one-child reproduction leaves exactly one individual in every generation, proving the exceptional case directly. ∎

The critical exception matters. Saying “mean offspring at most one implies certain extinction” would be false for a perfectly persistent single line of descent. Stating that exception also explains why convexity needs a strictness argument.

**Worked example 11.8 (growth and extinction together).** Return to $p_0=1/4,p_2=3/4$. Solving $s=1/4+3s^2/4$ gives $(3s-1)(s-1)=0$. The smaller root is $q=1/3$. Starting from three ancestors gives extinction probability $1/27$. The expected population from one ancestor is $(3/2)^n$, yet one third of complete trees eventually vanish. There is no contradiction: surviving populations carry enough mass to increase the expectation. The event of extinction is not the event that the expectation tends to zero.

## Expected size, variation and total progeny

**Theorem 11.9 (first and second moments).** If $m<\infty$, then $E[Z_n]=r m^n$. If additionally $\sigma^2=\operatorname{Var}(K)<\infty$, then

$$\operatorname{Var}(Z_{n+1})=\sigma^2E[Z_n]+m^2\operatorname{Var}(Z_n).$$

**Proof.** Conditional on $\mathcal F_n$, the next population is a sum of $Z_n$ independent offspring counts. Its conditional mean is $mZ_n$ and conditional variance is $\sigma^2Z_n$. The expectation formula follows by induction. The variance identity is the conditional-variance decomposition, whose first term averages $\sigma^2Z_n$ and whose second term is the variance of $mZ_n$. All terms are finite by induction under the stated moment assumptions. ∎

For $r=1,m>0$, the normalised process $W_n=Z_n/m^n$ satisfies $E[W_{n+1}\mid\mathcal F_n]=W_n$, so it is a nonnegative mean-one martingale. Its increment variance is $\sigma^2/m^{n+2}$. Orthogonality of martingale increments therefore gives

$$\operatorname{Var}(W_n)=\frac{\sigma^2}{m^2}\sum_{j=0}^{n-1}m^{-j}.$$

When $m>1$ this stays bounded by $\sigma^2/[m(m-1)]$. The next chapter proves that an $L^2$-bounded martingale converges both almost surely and in $L^2$. If that theorem is applied here, the limit has mean one. None of this licenses the stronger assertion that survival automatically makes the normalised limit positive under every offspring law; such a result requires its own argument and moment hypotheses.

**Theorem 11.10 (subcritical total progeny).** Starting from $r\ge1$, if $m<1$, then the total number of individuals ever born, including the ancestors,

$$T=\sum_{n=0}^{\infty}Z_n,$$

has expectation $r/(1-m)$ and is finite almost surely.

**Proof.** Nonnegativity permits Tonelli's theorem:

$$ET=\sum_{n\ge0}EZ_n=r\sum_{n\ge0}m^n=\frac r{1-m}.$$

A nonnegative extended random variable with finite expectation cannot equal infinity on an event of positive probability: otherwise $E T\ge aP(T=\infty)$ for every $a>0$. Thus $T<\infty$ almost surely. ∎

**Worked example 11.11 (finite lifetime and an infinite expected total).** Let $p_0=p_2=1/2$. Here $m=1$, so extinction occurs almost surely by Theorem 11.7. Extinction means that for each sample tree some finite generation is empty; every earlier generation is finite, and therefore $T<\infty$ almost surely. Nevertheless $EZ_n=1$ for every $n$, so Tonelli gives $ET=\sum_n1=\infty$. A variable can be finite almost surely and have infinite expectation. This is also a warning against exchanging limits and expectations without a supporting bound.

## Conditional survival and model boundaries

When $0<q<1$, conditioning a tree on eventual extinction changes its offspring probabilities. Conditional on $K=k$, its $k$ child trees all die with probability $q^k$. Bayes' rule therefore gives

$$P(K=k\mid E)=\frac{p_kq^k}{q}=p_kq^{k-1}.$$

These probabilities sum to $f(q)/q=1$. Their generating function is $f(qs)/q$. The formula is meaningful only for $q>0$. It conditions on a positive-probability event and describes a different probability law; it does not say the original offspring distribution has changed after observing one small generation.

The model also separates generations from calendar time. A Galton–Watson generation counts genealogical steps, not a fixed duration. Continuous-time birth-death processes use rates and holding times instead. A branching process with immigration no longer has absorbing zero, and a process in a random common environment generally loses the independent-tree factorization. These are useful models, but their extinction equations must be derived from their own information structure.

## The offspring law conditional on eventual extinction

Suppose the process is supercritical but its extinction probability $q$ lies strictly between zero and one. If the ancestor has $k$ children, all $k$ descendant families must become extinct for the original process to do so. Independence of those families makes that probability $q^k$.

Bayes’ rule therefore gives conditional offspring probability $p_kq^{k-1}$. These numbers sum to one because the original generating function satisfies $f(q)=q$. Their generating function is $f(qs)/q$. The same factorisation shows that, conditional on extinction, descendant families remain independent and each follows this transformed law. Thus the entire conditioned process is another Galton–Watson process, rather than the original process merely observed for fewer generations.

Its mean is $f'(q)$. Strict convexity of a genuinely branching generating function and its two fixed points $q$ and one imply that the derivative at the smaller point is strictly less than the secant slope one. Under the present supercritical, positive-extinction assumptions there is positive probability of at least two children and positive probability of zero, so that strictness applies.

The transformed process is therefore subcritical. This is a precise selection effect: extinct realisations of a supercritical population are distributed as paths of a different offspring model. Estimating the original reproduction mean from extinct families alone can consequently produce a misleading conclusion about population growth.

## Total progeny can have an infinite mean without survival

Let the offspring mean equal one and assume the offspring distribution is not concentrated at one. The extinction theorem then gives extinction with probability one. Nonetheless the expected total population over all generations is infinite. To prove this, each generation has expected size one by iterated conditioning, starting from one ancestor. Tonelli's theorem permits summing these nonnegative generation sizes inside expectation, producing the divergent sum of ones. Extinction means that each realized family tree eventually ends, so its total size is finite almost surely; it does not impose integrability of that finite random variable.

This distinction is visible in a critical law assigning equal probabilities to zero and two children. Every individual has mean one child and positive offspring variance. The population dies out almost surely but its total progeny has the infinite expectation just proved. Reporting a finite observed family tree therefore provides no contradiction to an infinite model expectation. In the deterministic one-child law extinction fails, which is why the exceptional hypothesis matters.

## Exercises

### Exercise 11.1
<a id="branching-processes-ex-1"></a>

For $p_0=1/3,p_1=1/3,p_2=1/3$, calculate the mean and the extinction probability from two ancestors.

<details><summary>Hint 1</summary>

Check whether the mean-one exception applies.
</details>
<details><summary>Hint 2</summary>

The offspring law is not deterministic; use the critical classification and then independent ancestral trees.
</details>
<details><summary>Solution</summary>

The mean is $0+1/3+2/3=1$. Since $p_0>0$, reproduction is not identically one, and extinction from one ancestor has probability one. For two ancestors it is $1^2=1$. The expected population remains two in each generation despite eventual extinction.
</details>

### Exercise 11.2
<a id="branching-processes-ex-2"></a>

For $p_0=2/5,p_2=3/5$, find $q_1,q_2$ and the ultimate extinction probability.

<details><summary>Hint 1</summary>

Start the iteration at zero, not at one.
</details>
<details><summary>Hint 2</summary>

Solve $3s^2-5s+2=0$ and choose its smaller root.
</details>
<details><summary>Solution</summary>

Here $f(s)=2/5+3s^2/5$. Thus $q_1=2/5$ and $q_2=2/5+(3/5)(4/25)=62/125$. The roots are $2/3$ and one, so $q=2/3$. Finite-generation extinction probabilities approach this smaller fixed point from below.
</details>

### Exercise 11.3
<a id="branching-processes-ex-3"></a>

Suppose every individual has either one or three children, with probabilities $3/4$ and $1/4$. Find the extinction probability and explain why a mean greater than one alone does not determine it numerically.

<details><summary>Hint 1</summary>

Can a nonempty generation produce an empty generation?
</details>
<details><summary>Hint 2</summary>

Here $p_0=0$; compare with the zero-or-two law in Worked example 11.8.
</details>
<details><summary>Solution</summary>

Every individual has at least one child, so $Z_n\ge1$ for every $n$ from one ancestor and $q=0$. Its mean is $3/4+3/4=3/2$, the same as the zero-or-two example with $q=1/3$. The mean controls the critical classification but does not encode the full generating function.
</details>

### Exercise 11.4
<a id="branching-processes-ex-4"></a>

Prove that $P(Z_n>0)\le r m^n$ when the mean is finite. Deduce a bound on extinction time in the subcritical case.

<details><summary>Hint 1</summary>

A positive integer is at least one.
</details>
<details><summary>Hint 2</summary>

If $\tau=\inf\{n:Z_n=0\}$, then $\{\tau>n\}=\{Z_n>0\}$.
</details>
<details><summary>Solution</summary>

The indicator $1_{\{Z_n>0\}}$ is at most $Z_n$, so taking expectations gives the bound. Consequently $P(\tau>n)\le\min(1,r m^n)$. If $m<1$, the tail tends to zero, proving almost-sure extinction independently of the generating-function argument. Also $E\tau=\sum_{n\ge0}P(\tau>n)\le r/(1-m)$, a valid although generally nonsharp bound.
</details>

### Exercise 11.5
<a id="branching-processes-ex-5"></a>

For one ancestor with offspring mean $m=2$ and variance $\sigma^2=2$, calculate $EZ_3$ and $\operatorname{Var}(Z_3)$.

<details><summary>Hint 1</summary>

Iterate the conditional-variance recursion from variance zero at generation zero.
</details>
<details><summary>Hint 2</summary>

The means in generations zero, one and two are one, two and four.
</details>
<details><summary>Solution</summary>

The mean at generation three is eight. Write $v_n=\operatorname{Var}(Z_n)$. Then $v_0=0$, $v_1=2$, $v_2=2\cdot2+4\cdot2=12$, and $v_3=2\cdot4+4\cdot12=56$. Both offspring variation and variation in the number of parents contribute.
</details>

### Exercise 11.6
<a id="branching-processes-ex-6"></a>

With one ancestor, $m>1$ and finite offspring variance, derive the displayed formula for $\operatorname{Var}(W_n)$ using conditional increment variances.

<details><summary>Hint 1</summary>

Write $W_{n+1}-W_n=(Z_{n+1}-mZ_n)/m^{n+1}$.
</details>
<details><summary>Hint 2</summary>

Condition on $\mathcal F_n$, average $Z_n$, and use orthogonality of different martingale increments.
</details>
<details><summary>Solution</summary>

The conditional mean of the increment is zero and its conditional second moment is $\sigma^2Z_n/m^{2n+2}$. Taking expectations gives $\sigma^2/m^{n+2}$. Different increments have zero cross expectation by conditioning the later one on its past. Since $W_0=1$, summing from $n=0$ through $n=N-1$ yields $\operatorname{Var}(W_N)=(\sigma^2/m^2)\sum_{n=0}^{N-1}m^{-n}$, bounded by $\sigma^2/[m(m-1)]$.
</details>

### Exercise 11.7
<a id="branching-processes-ex-7"></a>

An offspring law has mean $3/5$. Starting with four ancestors, find the expected total progeny. Is this the expected number in a late generation?

<details><summary>Hint 1</summary>

Sum expected populations over all generations.
</details>
<details><summary>Hint 2</summary>

The total includes the four original ancestors; a single generation has mean $4(3/5)^n$.
</details>
<details><summary>Solution</summary>

The expected total is $4/(1-3/5)=10$. This counts all individuals over the entire genealogy. The expected population in generation $n$ is $4(3/5)^n$, which tends to zero. Ten is not a late-generation equilibrium population.
</details>

### Exercise 11.8
<a id="branching-processes-ex-8"></a>

For the zero-or-two law $p_0=1/4,p_2=3/4$, determine the offspring distribution conditional on eventual extinction, and its mean.

<details><summary>Hint 1</summary>

Use $q=1/3$ and $p_kq^{k-1}$.
</details>
<details><summary>Hint 2</summary>

For zero children the conditional weight is $p_0/q$; for two it is $p_2q$.
</details>
<details><summary>Solution</summary>

The conditional probabilities are $3/4$ for zero and $1/4$ for two. They sum to one and have mean $1/2$. Conditioning on the whole future extinction event favors offspring counts that make extinction more likely; it is not the same as observing one generation with no growth.
</details>

### Exercise 11.9
<a id="branching-processes-ex-9"></a>

For critical zero-or-two reproduction with equal probabilities, explain why $Z_n\to0$ almost surely but $E|Z_n-0|$ does not tend to zero.

<details><summary>Hint 1</summary>

Almost-sure extinction makes every sample population eventually zero.
</details>
<details><summary>Hint 2</summary>

The mean remains one in every generation.
</details>
<details><summary>Solution</summary>

Extinction has probability one, and after its finite extinction generation the process remains zero, so $Z_n\to0$ almost surely. Since $Z_n\ge0$ and $EZ_n=1$, however, $E|Z_n|=1$ for every $n$. There is no $L^1$ convergence to zero. This is a concrete failure of exchanging an almost-sure limit with expectation.
</details>

### Exercise 11.10
<a id="branching-processes-ex-10"></a>

At each generation independently, a common environmental coin is good with probability $3/4$. In a good generation every individual has two children; otherwise every individual has none. Starting with one ancestor, find the probability of survival through generation $n$ and of survival forever. Explain why the ordinary zero-or-two extinction answer does not apply.

<details><summary>Hint 1</summary>

Survival through generation $n$ requires every one of the first $n$ common coins to be good.
</details>
<details><summary>Hint 2</summary>

Parents in the same generation have dependent offspring counts, despite having the same marginal law as in Worked example 11.8.
</details>
<details><summary>Solution</summary>

The survival probability through generation $n$ is $(3/4)^n$, so its decreasing limit is zero and ultimate extinction has probability one. On survival $Z_n=2^n$, giving $EZ_n=(3/2)^n$. The ordinary Galton–Watson law would give extinction probability $1/3$, but its independent-parent hypothesis fails here. A shared shock cannot be replaced by independent individual reproduction with matching marginals.
</details>

## Sources

The classical model and terminology can be followed in Hao Wu's MIT [18.445 lecture notes](https://ocw.mit.edu/courses/18-445-introduction-to-stochastic-processes-spring-2015/pages/lecture-notes/), lecture 19, and Robert Gallager's [course notes](https://ocw.mit.edu/courses/6-262-discrete-stochastic-processes-spring-2011/pages/course-notes/), the countable-state Markov-chain chapter. These are primary author/instructor sources, verified for attribution. The exposition, calculations, proofs and exercises here are original; no source passage is reproduced.

## Summary

Independent ancestral trees produce composition of generating functions. Extinction is their smallest fixed point, with deterministic one-child reproduction separated from the critical extinction case. Expected growth, extinction probability, total progeny and convergence of normalised populations answer distinct questions. Continue to [Martingale Convergence and Applications](martingale-convergence-applications.md) for the convergence theorem needed by the normalised supercritical population.
