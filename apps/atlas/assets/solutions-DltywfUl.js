var e=`---
parent_id: book-stochastic-processes-paths
matter_id: solutions
title: "Exercise and Project Solutions"
license: CC BY-SA 4.0
---

# Exercise and Project Solutions

These solutions show decisive reasoning for exercises across the chapters. They are organized by chapter and preserve the claim-status conventions used throughout the book. Where chapters contain inline solutions, these entries restate them compactly.

---

## Chapter 1: Specifying a Process

### Exercise 1

Let $U\\sim\\text{Uniform}(0,1)$ and $X_n=\\lfloor2^{n+1}U\\rfloor\\bmod2$, using terminating binary expansions at dyadic rationals. Show the finite bit vectors are uniform, explain the role of the random seed $U$, and find $\\mathbb P(X_0=X_1=X_2)$.

**Solution.** If $U=0.b_1b_2\\ldots$ in binary, then $X_n=b_{n+1}$ off a null endpoint. Each length-$k$ word specifies a dyadic interval of length $2^{-k}$, so the vector of its first $k$ bits is uniform and the bits are i.i.d. Bernoulli$(1/2)$. Encoding the whole outcome in $U$ does not create dependence: every random vector is a function of its underlying sample point. The all-zero and all-one words each have probability $1/8$, giving $\\mathbb P(X_0=X_1=X_2)=1/4$.

### Exercise 2

Show $C(s,t) = e^{-|s-t|}$ is positive semidefinite on $\\mathbb{R}_{\\ge 0}$.

**Solution.** Since $e^{-|s-t|}=\\int_{-\\infty}^{\\min(s,t)}2e^{-(s-u)}e^{-(t-u)}du$, every quadratic form in the kernel is the integral of
$$2\\left(\\sum_i a_i e^{-(t_i-u)}\\mathbf1_{\\{u\\le t_i\\}}\\right)^2,$$
and is nonnegative. Duplicate times may produce zero eigenvalues, which is consistent with positive semidefiniteness.

### Exercise 3

Let $(\\mathcal{F}_{t})$ be a filtration and $X$ an integrable random variable. Define $Y_{t} = \\mathbb{E}[X \\mid \\mathcal{F}_{t}]$. Show $(Y_{t})$ is adapted and $\\mathbb{E}[Y_{t} \\mid \\mathcal{F}_{s}] = Y_{s}$ for $s \\le t$.

**Solution.** By definition of conditional expectation, $Y_{t}$ is $\\mathcal{F}_{t}$-measurable, so $(Y_{t})$ is adapted. By the tower property, since $\\mathcal{F}_{s} \\subseteq \\mathcal{F}_{t}$,
$$\\mathbb{E}[Y_{t} \\mid \\mathcal{F}_{s}] = \\mathbb{E}[\\mathbb{E}[X \\mid \\mathcal{F}_{t}] \\mid \\mathcal{F}_{s}] = \\mathbb{E}[X \\mid \\mathcal{F}_{s}] = Y_{s}.$$
Thus $(Y_{t})$ is a martingale.

---

## Chapter 2: Finite Markov Chains

### Exercise 1

For $P = \\begin{pmatrix} 0.7 & 0.3 \\\\ 0.4 & 0.6 \\end{pmatrix}$, find $\\pi$ and compute $P^{10}$.

**Solution.** Solve $\\pi P = \\pi$ with $\\pi_{0}+\\pi_{1}=1$. From $\\pi_{0} = 0.7\\pi_{0} + 0.4\\pi_{1}$ we get $0.3\\pi_{0} = 0.4\\pi_{1}$, so $\\pi_{0}/\\pi_{1} = 4/3$. Hence $\\pi = (4/7, 3/7) \\approx (0.571, 0.429)$. The eigenvalues of $P$ are $1$ and $0.3$, and $P^n=\\Pi+(0.3)^n(I-\\Pi)$, where $\\Pi$ has both rows equal to $\\pi$. Thus $P^{10}_{00}\\approx0.57143$ and $P^{10}_{01}\\approx0.42857$, matching $\\pi$ to five decimal places.

### Exercise 2

A particle on $\\{0,1,2,3,4\\}$ has reflecting boundaries: from $0$ it moves to $1$ with probability $1$; from $4$ to $3$ with probability $1$; from interior states left or right with probability $1/2$ each. Find $\\mathbb{E}_{0}[T_{4}]$.

**Solution.** Let $e(i) = \\mathbb{E}_{i}[T_{4}]$. Then $e(4)=0$ and
$$e(0) = 1 + e(1),$$
$$e(1) = 1 + \\tfrac{1}{2}e(0) + \\tfrac{1}{2}e(2),$$
$$e(2) = 1 + \\tfrac{1}{2}e(1) + \\tfrac{1}{2}e(3),$$
$$e(3) = 1 + \\tfrac{1}{2}e(2).$$
Substituting $e(0) = 1 + e(1)$ into the second equation gives $e(1) = 3 + e(2)$. Using $e(3) = 1 + 0.5e(2)$ in the third equation yields $e(2) = 3 + 0.75e(2)$, so $e(2) = 12$. Then $e(1) = 15$, $e(0) = 16$, and $e(3) = 7$.

### Exercise 3

Show that if $P$ is irreducible and $P_{ii} > 0$ for some $i$, then the chain is aperiodic.

**Solution.** Since $P_{ii} > 0$, the set $\\{n \\ge 1 : P^{n}_{ii} > 0\\}$ contains $1$. The period $d(i)$ divides every element of this set, so $d(i)=1$. In an irreducible chain all states share the same period, hence the chain is aperiodic.

---

## Chapter 3: Coupling and Convergence

### Exercise 1

Let $\\mu = \\text{Bernoulli}(1/2)$ and $\\nu = \\text{Bernoulli}(1/3)$. Construct a coupling and compute $\\|\\mu - \\nu\\|_{TV}$.

**Solution.** The total variation distance is
$$\\|\\mu - \\nu\\|_{TV} = \\tfrac{1}{2}(|1/2 - 1/3| + |1/2 - 2/3|) = \\tfrac{1}{2}(1/6 + 1/6) = 1/6.$$
For a maximal coupling, let $U \\sim \\text{Uniform}(0,1)$ and set $X = \\mathbf{1}_{\\{U \\le 1/2\\}}$, $Y = \\mathbf{1}_{\\{U \\le 1/3\\}}$. Then $X \\sim \\mu$, $Y \\sim \\nu$, and $\\mathbb{P}(X \\neq Y) = \\mathbb{P}(1/3 < U \\le 1/2) = 1/6$.

### Exercise 2

For the two-state chain $P = \\begin{pmatrix} 1-\\alpha & \\alpha \\\\ \\beta & 1-\\beta \\end{pmatrix}$ with $0 < \\alpha,\\beta < 1$, bound $\\|P^{n}(0,\\cdot) - \\pi\\|_{TV}$ using coupling.

**Solution.** Start $X_0=0$ and $Y_0\\sim\\pi$, maximally couple the transition rows while they differ, and update together after meeting. The row distance is $|1-\\alpha-\\beta|$, while $\\mathbb P(X_0\\ne Y_0)=\\alpha/(\\alpha+\\beta)$. Hence
$$\\|P^n(0,\\cdot)-\\pi\\|_{TV}\\le\\frac{\\alpha}{\\alpha+\\beta}|1-\\alpha-\\beta|^n.$$
This is the exact distance in the two-state case. For $\\alpha=\\beta=1/2$ it is zero for all $n\\ge1$.

### Exercise 3

Show the triangle inequality for total variation: $\\|\\mu - \\nu\\|_{TV} \\le \\|\\mu - \\rho\\|_{TV} + \\|\\rho - \\nu\\|_{TV}$.

**Solution.** For any event $A$,
$$|\\mu(A) - \\nu(A)| \\le |\\mu(A) - \\rho(A)| + |\\rho(A) - \\nu(A)| \\le \\|\\mu - \\rho\\|_{TV} + \\|\\rho - \\nu\\|_{TV}.$$
Taking the supremum over $A$ gives the result.

---

## Chapter 4: Poisson Processes

### Exercise 1

Let $N$ be Poisson with rate $\\lambda = 2$. Find $\\mathbb{P}(N(1)=3 \\mid N(2)=5)$.

**Solution.** By independent increments, $N(1)$ and $N(2)-N(1)$ are independent Poisson variables with mean $2$. Given $N(2)=5$, the conditional distribution of $N(1)$ is $\\text{Binomial}(5, 1/2)$, because each of the $5$ events falls independently in $[0,1]$ or $(1,2]$ with equal probability. Hence
$$\\mathbb{P}(N(1)=3 \\mid N(2)=5) = \\binom{5}{3}\\left(\\frac{1}{2}\\right)^{5} = \\frac{10}{32} = \\frac{5}{16} = 0.3125.$$

### Exercise 2

Show that the sum of independent Poisson variables $X \\sim \\text{Poisson}(\\lambda)$ and $Y \\sim \\text{Poisson}(\\mu)$ is $X+Y \\sim \\text{Poisson}(\\lambda+\\mu)$.

**Solution.** The probability generating function of $X+Y$ factors as
$$\\mathbb{E}[z^{X+Y}] = \\mathbb{E}[z^{X}]\\mathbb{E}[z^{Y}] = e^{\\lambda(z-1)}e^{\\mu(z-1)} = e^{(\\lambda+\\mu)(z-1)},$$
which is the pgf of $\\text{Poisson}(\\lambda+\\mu)$. Since the pgf determines the distribution, the claim follows.

### Exercise 3

For a Poisson process with rate $\\lambda$, find the conditional distribution of $T_{1}$ given $N(t)=1$.

**Solution.** For $0 \\le s \\le t$,
$$\\mathbb{P}(T_{1} \\le s \\mid N(t)=1) = \\frac{\\mathbb{P}(N(s)=1, N(t)-N(s)=0)}{\\mathbb{P}(N(t)=1)} = \\frac{\\lambda s e^{-\\lambda s} \\cdot e^{-\\lambda(t-s)}}{\\lambda t e^{-\\lambda t}} = \\frac{s}{t}.$$
Thus $T_{1}$ is uniformly distributed on $[0,t]$ given $N(t)=1$.

---

## Chapter 5: Renewal Processes

### Exercise 1

Let $W_{n} \\sim \\text{Exponential}(\\lambda)$. Verify directly that $U(t) = \\lambda t$ satisfies the renewal equation.

**Solution.** For exponential interarrivals, $F(t) = 1 - e^{-\\lambda t}$ and $dF(s) = \\lambda e^{-\\lambda s}\\,ds$. The renewal equation is
$$U(t) = 1 - e^{-\\lambda t} + \\int_{0}^{t} U(t-s)\\,\\lambda e^{-\\lambda s}\\,ds.$$
Substituting $U(t) = \\lambda t$ and evaluating the integral by parts gives
$$\\text{RHS} = 1 - e^{-\\lambda t} + \\lambda t(1 - e^{-\\lambda t}) - (1 - e^{-\\lambda t}(1 + \\lambda t)) = \\lambda t = U(t).$$

### Exercise 2

Assume positive i.i.d. nonarithmetic interarrivals with mean $m$, variance $\\sigma^2$, and finite third moment. State the standard renewal variance asymptotic and explain the limitation of the CLT heuristic.

**Solution.** The renewal variance theorem gives $\\operatorname{Var}(N(t))\\sim\\sigma^2t/m^3$. Inverting the CLT approximation $S_n\\approx nm+\\sigma\\sqrt n\\,Z$ suggests the same constant. Convergence in distribution does not by itself imply convergence of second moments, so the variance conclusion requires the additional moment control in the renewal theorem.

### Exercise 3

Machine parts have lifetime $\\text{Uniform}(0,10)$. Find the long-run replacement rate and the expected age of the part in service at a random inspection time in the distant future.

**Solution.** The mean lifetime is $m = 5$ days, so the long-run replacement rate is $1/m = 0.2$ per day. The expected remaining lifetime in equilibrium is $\\mathbb{E}[W^{\\mathrm{lb}}]/2 = (1/2) \\cdot (\\mathbb{E}[W^{2}]/\\mathbb{E}[W]) = (1/2) \\cdot (100/3)/5 = 10/3 \\approx 3.33$ days. By symmetry of the equilibrium renewal process, the expected age equals the expected remaining lifetime, so the expected age is also $10/3$ days.

---

## Chapter 6: Martingales and Stopping

### Exercise 1

Let $(S_{n})$ be simple symmetric random walk on $\\mathbb{Z}$ with $S_{0}=0$. Let $T = \\min\\{n : S_{n} \\in \\{-a,b\\}\\}$ for positive integers $a,b$. Show $T < \\infty$ a.s. and find $\\mathbb{E}[T]$.

**Solution.** Recurrence of simple symmetric random walk on $\\mathbb{Z}$ implies $T < \\infty$ almost surely. Apply optional stopping to the martingale $M_{n} = S_{n}^{2} - n$ at time $T \\wedge n$, then let $n \\to \\infty$:
$$\\mathbb{E}[S_{T}^{2}] = \\mathbb{E}[T].$$
Let $p = \\mathbb{P}(S_{T}=b)$. By optional stopping on $S_{n}$, we have $0 = \\mathbb{E}[S_{T}] = bp - a(1-p)$, so $p = a/(a+b)$. Therefore
$$\\mathbb{E}[S_{T}^{2}] = a^{2}\\frac{b}{a+b} + b^{2}\\frac{a}{a+b} = \\frac{ab(a+b)}{a+b} = ab.$$
Hence $\\mathbb{E}[T] = ab$.

### Exercise 2

Let $(M_{n})$ be a nonnegative martingale. Show it converges almost surely to an integrable limit.

**Solution.** This is the martingale convergence theorem. A nonnegative martingale is a nonnegative supermartingale. By Doob's upcrossing inequality, the expected number of upcrossings of any interval $[a,b]$ is finite, so the limit exists almost surely. Fatou's lemma gives $\\mathbb{E}[\\lim M_{n}] \\le \\liminf \\mathbb{E}[M_{n}] = \\mathbb{E}[M_{0}] < \\infty$.

### Exercise 3

For a fair $\\pm 1$ random walk, verify that $S_{n}^{3} - 3nS_{n}$ is a martingale.

**Solution.** Compute
$$\\mathbb{E}[S_{n+1}^{3} \\mid \\mathcal{F}_{n}] = \\mathbb{E}[(S_{n} + \\xi_{n+1})^{3} \\mid \\mathcal{F}_{n}] = S_{n}^{3} + 3S_{n}\\mathbb{E}[\\xi_{n+1}^{2}] = S_{n}^{3} + 3S_{n},$$
since $\\mathbb{E}[\\xi_{n+1}] = \\mathbb{E}[\\xi_{n+1}^{3}] = 0$ and $\\mathbb{E}[\\xi_{n+1}^{2}] = 1$. Also $\\mathbb{E}[(n+1)S_{n+1} \\mid \\mathcal{F}_{n}] = (n+1)S_{n}$. Therefore
$$\\mathbb{E}[S_{n+1}^{3} - 3(n+1)S_{n+1} \\mid \\mathcal{F}_{n}] = S_{n}^{3} + 3S_{n} - 3(n+1)S_{n} = S_{n}^{3} - 3nS_{n}.$$

---

## Chapter 7: Brownian Motion

### Exercise 1

Show that $B_{t}^{2} - t$ is a martingale with respect to the natural filtration of Brownian motion.

**Solution.** For $s < t$,
$$\\mathbb{E}[B_{t}^{2} \\mid \\mathcal{F}_{s}] = \\mathbb{E}[(B_{s} + (B_{t}-B_{s}))^{2} \\mid \\mathcal{F}_{s}] = B_{s}^{2} + 2B_{s}\\mathbb{E}[B_{t}-B_{s}] + \\mathbb{E}[(B_{t}-B_{s})^{2}] = B_{s}^{2} + (t-s).$$
Therefore $\\mathbb{E}[B_{t}^{2} - t \\mid \\mathcal{F}_{s}] = B_{s}^{2} - s$.

### Exercise 2

For an equal partition of $[0,t]$ into $n$ pieces, find the expectation of $\\sum_{i=1}^{n} (B_{t_{i}} - B_{t_{i-1}})^{2}$.

**Solution.** Each increment $B_{t_{i}} - B_{t_{i-1}}$ has variance $t/n$ and mean zero. Thus $\\mathbb{E}[(B_{t_{i}} - B_{t_{i-1}})^{2}] = t/n$. Summing $n$ terms gives $\\mathbb{E}[\\sum_{i=1}^{n} (B_{t_{i}} - B_{t_{i-1}})^{2}] = t$, consistent with the quadratic-variation limit.

### Exercise 3

Let $M_{t} = e^{\\theta B_{t} - \\theta^{2}t/2}$. Show $(M_{t})$ is a martingale.

**Solution.** For $s < t$, since $B_{t} - B_{s} \\sim \\mathcal{N}(0,t-s)$ is independent of $\\mathcal{F}_{s}$,
$$\\mathbb{E}[M_{t} \\mid \\mathcal{F}_{s}] = M_{s}\\,\\mathbb{E}[e^{\\theta(B_{t}-B_{s}) - \\theta^{2}(t-s)/2}] = M_{s}\\,e^{-\\theta^{2}(t-s)/2}\\,e^{\\theta^{2}(t-s)/2} = M_{s}.$$
This is the exponential martingale of Brownian motion.

---

## Chapter 8: Stochastic Integration Orientation

### Exercise 1

Use Itô's formula to find the stochastic differential of $e^{B_{t}}$.

**Solution.** With $f(x) = e^{x}$, we have $f'(x) = f''(x) = e^{x}$. Thus
$$d(e^{B_{t}}) = e^{B_{t}}\\,dB_{t} + \\tfrac{1}{2}e^{B_{t}}\\,dt.$$
The process $e^{B_{t}}$ has positive drift $\\tfrac{1}{2}e^{B_{t}}$. To obtain a martingale, subtract the drift: $M_{t} = e^{B_{t} - t/2}$ satisfies $dM_{t} = M_{t}\\,dB_{t}$, confirming the exponential martingale from Chapter 7.

### Exercise 2

Apply Itô's formula to $f(x) = x^{3}$ with $X_{t} = B_{t}$. Identify the martingale part.

**Solution.** With $f'(x) = 3x^{2}$ and $f''(x) = 6x$,
$$d(B_{t}^{3}) = 3B_{t}^{2}\\,dB_{t} + 3B_{t}\\,dt.$$
Thus $B_t^3-3\\int_0^tB_s\\,ds=3\\int_0^tB_s^2\\,dB_s$ is a martingale on each finite horizon. Separately, $B_t^3-3tB_t$ is another martingale, with differential $3(B_t^2-t)\\,dB_t$; the two compensators are different.

### Exercise 3

Let $X_{t} = B_{t}^{2}$. Find $dX_{t}$ and verify that $\\mathbb{E}[X_{t}] = t$.

**Solution.** By Itô's formula with $f(x) = x^{2}$,
$$d(B_{t}^{2}) = 2B_{t}\\,dB_{t} + dt.$$
Taking expectations, the stochastic integral vanishes (it is a martingale with mean zero), so
$$\\mathbb{E}[B_{t}^{2}] = \\mathbb{E}\\left[\\int_{0}^{t} ds\\right] = t,$$
which agrees with $\\operatorname{Var}(B_{t}) = t$.
`;export{e as default};