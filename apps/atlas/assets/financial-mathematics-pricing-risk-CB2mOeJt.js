var e=`---
id: deep-dive-financial-mathematics-pricing-risk
title: "Financial Mathematics: No-Arbitrage Pricing, Portfolios, and Model Risk"
license: CC BY-SA 4.0
---

# Financial Mathematics: No-Arbitrage Pricing, Portfolios, and Model Risk

**Before reading.** Read [Specifying a Process](../books/stochastic-processes-paths/specifying-a-process.md), [Statistical Experiments and Observation Laws](../books/principles-statistical-inference/statistical-experiments-and-observation-laws.md) and [Models and Direction Fields](../books/ode-first-course/models-direction-fields.md). These are preparation for the ideas used below.

> **Educational boundary.** This resource studies conditional mathematical models. It is not individualized investment, trading, lending, tax, accounting, or legal advice. It does not recommend an asset, portfolio, derivative, or strategy, and no toy result is a forecast or promise of performance.

Financial mathematics asks several different questions:

- How do cash flows at different dates compare under a declared interest convention?
- Which prices are mutually consistent with absence of arbitrage in an idealized market?
- Which payoff can be replicated by traded assets?
- How do portfolio moments depend on weights and covariance?
- How can a declared loss distribution be summarized and stress-tested?

These are not interchangeable. No-arbitrage pricing does not estimate physical return probabilities. Historical covariance does not establish future risk. A risk measure does not set a person's appropriate decision.

## 1. Dates, cash flows, and units

Money has currency and date. A cash flow of 100 pounds today is not the same mathematical object as 100 pounds next year. Under a deterministic effective per-period rate $r>-1$, one unit today grows to $(1+r)^{n}$ at time $n$; a time-$n$ cash flow $C_{n}$ has present value

$$PV=C_{n}/(1+r)^{n}$$

For a stream, add discounted cash flows only after aligning currency, date, and rate convention:

$$PV=\\sum_{n=0}^{N} C_{n}/(1+r)^{n}$$

### Worked annuity

**Worked example.**

Three payments of 100 arrive at ends of years 1, 2, and 3. At an effective annual rate 5%,

$$PV=100/1.05+100/1.05^{2}+100/1.05^{3}\\approx272.32$$

This is conditional on a common deterministic rate and no default. A quoted nominal annual rate compounded monthly is not an effective annual rate: if nominal rate is $j$ with 12 conversions, effective annual rate is $(1+j/12)^{12}-1$. Borrowing and lending rates may differ. Inflation changes real purchasing power. Credit risk changes promised versus received cash flow.

Continuous compounding writes accumulation $e^{rt}$, where $r$ has inverse-time units relative to the chosen time unit. Switching years to days without changing $r$ is a units error.

## 2. Arbitrage as a formal contradiction

An **arbitrage** is a self-financing combination of attainable trades that has no loss in any modeled state, a gain in at least one state, and no positive initial cost, with precise inequalities depending on market conventions. It is a mathematical inconsistency among declared prices and trading possibilities.

Arbitrage claims are only as broad as attainability. If short selling is forbidden, borrowing limited, trades indivisible, prices have bid-ask spreads, or counterparties can default, a paper portfolio may not be attainable.

## 3. One-period binomial replication

A stock costs $S_{0}=100$. One period later it is either $S_{u}=120$ or $S_{d}=80$. A risk-free cash account has zero rate for simplicity. A call with strike 100 pays

$C_{u}=20$, $C_{d}=0$.

Seek $\\Delta$ shares and cash $B$ matching the claim state by state:

$$120\\Delta+B=20$$

$$80\\Delta+B=0$$

Subtract to obtain $40\\Delta=20$, so $\\Delta=1/2$. Then $B=-40$. The replicating cost is

$$\\Delta S_{0}+B=50-40=10$$

If the call traded above 10 under the ideal assumptions, sell the call and buy the replicating portfolio; if below 10, buy the call and sell the replicating portfolio. Statewise payoffs cancel and the initial difference is captured. Therefore 10 is the unique no-arbitrage price in this complete two-state market.

### General binomial formulas

Let cash grow by $R=1+r>0$, and suppose $S_{d}<RS_{0}<S_{u}$. This inequality says the stock's down/up range straddles the cash return; otherwise the stock and cash themselves create an arbitrage in the ideal model. For claim payoffs $C_{u},C_{d}$,

$$\\Delta=(C_{u}-C_{d})/(S_{u}-S_{d})$$

$B=(S_{u}C_{d}-S_{d}C_{u})/(R(S_{u}-S_{d}))$ when $B$ denotes time-zero cash placed in the account.

Define pricing weight

$$q=(RS_{0}-S_{d})/(S_{u}-S_{d})$$

The straddling condition gives $0<q<1$, and price is

$$C_{0}=(qC_{u}+(1-q)C_{d})/R$$

The algebraic “expectation” is under a **risk-neutral pricing measure**. $q$ is determined by traded prices and replication assumptions. It need not equal the physical probability of the up state. Calling it “the chance the stock rises” is a category error.

### Physical probability affects a different calculation

If a researcher estimates physical up probability $p=0.7$, the statewise replicating cost stays 10. The estimate changes physical expected payoff $0.7\\cdot 20+0.3\\cdot 0=14$ and expected return calculations, subject to estimation error. It does not change the algebraic cost of a portfolio that matches both states.

## 4. Finite markets, completeness, and bounds

Suppose there are $m$ states and $n$ traded assets. Put state payoffs in matrix $X\\in R^{m\\times n}$ and current prices in vector $p$. A strictly positive state-price vector $\\psi\\in R^{m}$ satisfies

$$X^{T}\\psi=p$$

Under standard finite-market conventions, absence of arbitrage is equivalent to existence of such a positive linear pricing functional. This is a separating-hyperplane alternative.

A claim $c\\in R^{m}$ is replicable if $c=Xh$ for some portfolio $h$. Then its price must be $p^{T}h=\\psi^{T}c$, independent of which replicating portfolio is used under no arbitrage. If every claim is replicable, the market is complete and state prices are unique.

If a claim is not in the payoff span, no-arbitrage alone generally does not determine one price. Super-replication and sub-replication under declared constraints give upper and lower bounds. Choosing one price inside the interval needs an additional preference, calibration, risk, or institutional rule.

### Three-state incomplete example

Cash pays $(1,1,1)$ and one stock pays $(60,100,150)$. A claim paying $(0,0,50)$ cannot generally be replicated by only two payoff vectors in three-dimensional state space. A chosen probability forecast can produce an expected discounted value, but that is not uniquely forced by no arbitrage.

## 5. Multi-period trees and self-financing strategies

In a recombining binomial tree, work backward. At each node, replicate the two child payoffs using stock and cash. The hedge $\\Delta$ changes through time and state. A **self-financing** strategy changes holdings using only value already in the portfolio; it does not receive unexplained cash injections.

Discounted stock price is a martingale under the risk-neutral measure in the ideal model:

$$S_{t}/B_{t} = E_{Q}[S_{t+1}/B_{t+1} | information at t]$$

Likewise a replicable claim price is the conditional $Q$-expectation of discounted payoff. This is a valuation identity. Under the physical measure $P$, discounted stock need not be a martingale.

### Dynamic hedging boundary

A tree assumes specified price moves and trading dates. Discrete hedging leaves error when reality moves between dates or outside modeled states. Transaction costs accumulate with rebalancing. Market impact, liquidity, funding, and jumps can make a self-financing idealization inaccurate.

## 6. Continuous-time orientation

A basic diffusion model writes

$$dS_{t}=\\mu S_{t}dt+\\sigma S_{t}dW_{t}$$

Here $\\mu$ is physical drift under a chosen probability law, $\\sigma$ volatility per square-root time, and $W$ Brownian motion. It implies continuous paths and lognormal positive prices in the constant-parameter version.

For a smooth derivative value $V(t,S)$, Itô's formula gives

$$dV=(V_{t}+\\mu SV_{S}+(1/2)\\sigma^{2}S^{2}V_{SS})dt+\\sigma SV_{S}dW$$

Form a locally hedged portfolio with $\\Delta=V_{S}$ shares. In the ideal frictionless continuous-trading model, the Brownian term cancels. Absence of arbitrage forces the remaining locally riskless return to equal risk-free rate $r$, leading to Black–Scholes PDE

$$V_{t}+(1/2)\\sigma^{2}S^{2}V_{SS}+rSV_{S}-rV=0$$

Notice physical drift $\\mu$ cancels in the hedging derivation. That does not mean real expected return equals $r$; it means replication under the model removes exposure to the Brownian shock.

### Material hypotheses

The elementary derivation assumes continuous trading, no transaction costs or taxes, unlimited fractional positions and borrowing at one rate, a diffusion with continuous paths, known constant $\\sigma$ and $r$ in the basic model, and sufficient regularity. Real options exhibit volatility surfaces, jumps, discrete dividends, funding differences, counterparty credit, and liquidity constraints. Calibration can fit prices without making the model literally true.

## 7. Portfolio mean and covariance

Let random returns vector be $R\\in R^{n}$, weights $w$, mean $m=E[R]$, and covariance $\\Sigma$. Portfolio return is $R_{p}=w^{T}R$, so

$$E[R_{p}]=w^{T}m$$

$$\\operatorname{Var}(R_{p})=w^{T}\\Sigma w$$

The covariance matrix is positive semidefinite because for every $w$,

$$w^{T}\\Sigma w=\\operatorname{Var}(w^{T}R)\\ge 0$$

For two assets with standard deviations $\\sigma_{1},\\sigma_{2}$, correlation $\\rho$, and weight $w$ in asset 1,

$$\\sigma_{p}^{2}=w^{2}\\sigma_{1}^{2}+(1-w)^{2}\\sigma_{2}^{2}+2w(1-w)\\rho\\sigma_{1}\\sigma_{2}$$

### Worked two-asset calculation

Let expected returns be 4% and 8%, standard deviations 10% and 20%, correlation 0.25, and $w=0.6$. Expected return is

$0.6\\cdot 0.04+0.4\\cdot 0.08=0.056$, or 5.6% under the input convention.

Variance is

$$0.6^{2}\\cdot 0.1^{2}+0.4^{2}\\cdot 0.2^{2}+2\\cdot 0.6\\cdot 0.4\\cdot 0.25\\cdot 0.1\\cdot 0.2$$

$$=0.0036+0.0064+0.0024=0.0124$$

so standard deviation is about 11.14%.

This is scenario arithmetic from estimated moments. It is not a recommendation. Means, covariance, and correlation may shift; returns can have heavy tails; leverage and losses beyond invested capital depend on instruments and constraints.

## 8. Mean-variance frontiers and estimation risk

Mean-variance optimization might minimize $w^{T}\\Sigma w$ subject to target mean $w^{T}m=\\mu*$ and budget $1^{T}w=1$, with optional constraints. Under positive definite $\\Sigma$, the convex quadratic has a unique solution for feasible targets. With semidefinite or estimated matrices, solutions may be nonunique or unstable.

Estimated expected returns are especially noisy, so optimized weights can react violently to small changes. Sensitivity analysis, shrinkage, constraints, and out-of-sample evaluation can stabilize a procedure but do not guarantee performance. A mathematically efficient frontier is conditional on inputs and feasible set.

Short-sale, leverage, turnover, taxes, liquidity, position sizes, and liability matching change feasibility. Omitting them can produce an unattainable “optimal” portfolio.

## 9. Loss distributions and risk measures

Choose a loss convention: positive $L$ means loss over a stated horizon in a stated currency. The Value-at-Risk at level $\\alpha$ can be defined as

$$\\operatorname{VaR}_\\alpha(L)=\\inf\\{\\ell:P(L\\le \\ell)\\ge \\alpha\\}$$

It is a quantile, not maximum loss. It ignores how severe losses are beyond the cutoff.

Expected shortfall for a continuous distribution can be written

$$ES_\\alpha=E[L | L\\ge \\operatorname{VaR}_\\alpha]$$

while discrete distributions need a careful fractional-tail definition to preserve exactly $1-\\alpha$ tail mass. Equivalent quantile-integral definitions avoid ambiguity.

### Same VaR, different tail

Model A has loss 0 with probability 0.95 and loss 10 with probability 0.05. Model B has loss 0 with probability 0.95 and loss 100 with probability 0.05. Under a common lower-quantile convention, both can have 95% VaR 0, while tail severity differs by a factor of ten. A single quantile is incomplete.

Expected shortfall is coherent under standard definitions, including subadditivity, but remains conditional on the loss law. It is not a guarantee that realized loss will stay below it.

## 10. Backtesting and model risk

A quantile forecast at level $\\alpha$ should be exceeded roughly fraction $1-\\alpha$ across comparable cases if calibrated. Check:

- exceedance frequency with sampling uncertainty;
- clustering, which suggests conditional dynamics are missing;
- tail severity beyond the threshold;
- performance across regimes and positions;
- data revisions, missing prices, and stale marks.

A finite successful backtest does not prove stationarity. Selecting a model after examining the same backtest invalidates its final-test role.

Model risk includes wrong dynamics, parameters, numerical methods, calibration targets, implementation, and use outside scope. Compare alternate models, stress parameters and scenarios, track hedging residuals, and set escalation or fallback rules.

## 11. Causal and advisory boundaries

Historical association between an asset feature and return does not identify the effect of changing that feature. Market participants respond to signals and trades; deployment can alter prices. A backtested strategy is subject to selection, transaction costs, data leakage, survivorship bias, and regime shift.

Suitability depends on a person's liabilities, horizon, jurisdiction, taxes, constraints, risk capacity, goals, and alternatives—none are supplied by a toy model. Therefore this resource stops at mathematical derivation and model audit.

## 12. Practice: fully worked checks

### Check 1: no-arbitrage stock condition

<a id="deep-dive-financial-mathematics-pricing-risk-ex-1"></a>

**Exercise 1.**

With $S_{0}=100$, cash growth $R=1.05$, and stock states 80 and 120, find risk-neutral weight.


<details>
<summary>Hint 1</summary>

Equate the one-period cash-grown stock price with a weighted average of the two possible stock payoffs.
</details>
<details>
<summary>Hint 2</summary>

Solve the resulting linear equation for the state weight and check it lies strictly between zero and one.
</details>
<details>
<summary>Solution</summary>

Discounted consistency requires $q120+(1-q)80=105$, so $40q=25$ and $q=0.625$. It lies strictly between zero and one because $80<105<120$. This is a pricing weight, not physical forecast.

</details>

### Check 2: replication under nonzero rate

<a id="deep-dive-financial-mathematics-pricing-risk-ex-2"></a>

**Exercise 2.**

The claim pays 20 up and 0 down. Find its price.


<details>
<summary>Hint 1</summary>

Replicate the claim with a number of stock units and a cash position.
</details>
<details>
<summary>Hint 2</summary>

Use the difference of claim payoffs to find stock units; discount the residual cash payoff at the stated rate.
</details>
<details>
<summary>Solution</summary>

$\\Delta=(20-0)/(120-80)=0.5$. The time-one cash payoff needed is $B_{1}=-40$, so time-zero cash is $-40/1.05$. Price is $50-40/1.05\\approx11.9048$. Equivalently $(0.625\\cdot 20)/1.05\\approx11.9048$.

</details>

### Check 3: covariance validity

Can two unit-variance assets have covariance 1.2?

**Solution.** No. Correlation would be 1.2, violating Cauchy–Schwarz $|\\operatorname{Cov}|\\le \\sigma_{1}\\sigma_{2}=1$. Matrix $\\begin{pmatrix}1&1.2\\\\1.2&1\\end{pmatrix}$ has a negative eigenvalue and is not a covariance matrix.

### Check 4: VaR non-maximum

A model reports one-day 99% VaR of 5 currency units. What can be concluded?

**Solution.** Under the declared model and quantile convention, modeled probability of loss at or below 5 is at least 0.99. It does not cap the remaining tail, validate the model, extend to another horizon, or recommend a position.

### Check 5: market incompleteness

Why do two traded payoff vectors generally fail to span all claims across three states?

**Solution.** Their span has dimension at most two in $R^{3}$, so at least one payoff direction lies outside it unless additional assets or dependencies reduce the effective state space. A nonspanned claim lacks a unique replication price from those assets alone.

## 13. A finance model audit template

For any worked financial model, report:

1. currency, dates, compounding, and cash-flow sign;
2. traded assets, payoff states, and attainable strategies;
3. physical $P$ versus pricing $Q$ probabilities;
4. costs, constraints, funding, liquidity, and default assumptions;
5. parameter estimation window and uncertainty;
6. exact replication or no-arbitrage bound certificate;
7. numerical method and convergence checks;
8. out-of-sample and stress evidence;
9. tail metric convention and limitations;
10. explicit statement that the calculation is not advice.

The portfolio mode of the [Decision Systems Laboratory](#/labs?lab=visual-lab-decision-systems) exposes mean, variance, covariance contribution, and a complete weight table. The [proof/reference volume](#/item/book-applied-modeling-proof-reference?chapter=finance-pricing-risk) places finite-state pricing inside the wider theorem architecture. The [trustworthy modeling recipe](#/item/recipe-trustworthy-model-compute-validate) supplies the full model-to-decision audit.
`;export{e as default};