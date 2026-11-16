var e=`---
parent_id: book-applied-modeling-proof-reference
chapter_id: finance-pricing-risk
title: "Financial Valuation, Portfolios, and Model Risk"
level: advanced-undergraduate
estimated_minutes: 120
license: CC BY-SA 4.0
status: draft
---

# Financial Valuation, Portfolios, and Model Risk

> This chapter teaches conditional mathematics. It is not investment, lending, tax, legal, or trading advice and does not recommend any asset or strategy.

## Separate valuation, forecasting, and action

Financial mathematics links cash flows across states and times. Three questions must remain separate: what prices avoid a modeled arbitrage, what a physical probability model forecasts, and what action fits a person's objectives and constraints. A state-price calculation is not a return forecast; a covariance calculation is not a complete risk assessment; an optimized portfolio is not a recommendation.

At deterministic effective rate $r>-1$ per period, time-$n$ cash flow $C_n$ has present value $C_n/(1+r)^n$. Nominal quoted rates, compounding frequency, continuously compounded rates, borrowing spreads, taxes, default, inflation, and currency conversion require explicit conventions. Cash flows in distinct currencies cannot be added without an exchange-rate and settlement model.

### Worked term comparison

Receiving 110 in one year has present value 100 at an effective annual rate 10%. At a continuously compounded rate $\\delta$, the factor is $\\exp\\left(-\\delta\\right)$; equality requires $\\delta=\\log(1.1)$, not $0.10$. Mixing these conventions silently creates an apparent pricing discrepancy.

## Finite markets, replication, and state prices

**Definition 15.1 (finite payoff market).** Let columns of payoff matrix $X$ be traded-asset payoffs across finitely many states, with current price vector $p$. **Definition (strictly positive state prices).** A strictly positive state-price vector $q$ satisfying $X^Tq=p$ rules out arbitrage under the declared frictionless linear-trading convention. Conversely, a finite-dimensional separation theorem produces a positive pricing functional under a suitable no-arbitrage formulation.

If claim payoff $c$ is replicated by holdings $h$, so $c=Xh$, then its no-arbitrage price is $p^Th=q^Tc$. If the claim is not attainable, no-arbitrage generally supplies a range, not a unique price. Trading constraints, transaction costs, different lending and borrowing rates, and position limits change the attainable cone and bounds.

### Binomial replication

A stock costs 100 and becomes 120 or 80. A zero-rate bond pays one. A strike-100 call pays 20 or 0. Solve

$120 \\Delta+B=20$, $80 \\Delta+B=0$.

This gives $\\Delta=1/2$, $B=-40$, and price $100\\Delta+B=10$. The normalized risk-neutral up weight is $1/2$; it reproduces discounted traded prices. A subjective 0.7 up probability does not change the statewise replication cost under these assumptions. It may matter to forecasting or utility, which are different models.

No-arbitrage is relative to the declared assets, states, trading times, admissible strategies, and enforcement. A missing state, stale quote, short-sale prohibition, default, or inability to rebalance can invalidate the simple conclusion.

## Portfolio moments and estimation risk

For random return vector $R$, weights $w$, mean $m$, and covariance $\\Sigma$,

$E[w^{\\mathsf T} R]=w^{\\mathsf T} m$, and $Var(w^{\\mathsf T} R)=w^{\\mathsf T} \\Sigma w$.

The covariance matrix is positive semidefinite because the quadratic form is a variance. For two assets, weight $w$ in the first and $1-w$ in the second gives

$w^2 \\sigma_1^2+(1-w)^2 \\sigma_2^2+2w(1-w)\\rho \\sigma_1 \\sigma_2$.

Diversification comes from imperfect co-movement, not merely from counting assets. Correlations can rise in stressed regimes; means are difficult to estimate; leverage, liquidity, nonlinear payoffs, and rebalancing alter realized losses. The formula is exact for the declared one-period random variables, while its inputs are uncertain.

### Worked minimum-variance weight

Take $\\sigma_1=0.2$, $\\sigma_2=0.1$, and $\\rho=0$. Differentiating variance $0.04w^2+0.01(1-w)^2$ gives $0.10w-0.02=0$, so $w=0.2$. Variance is $0.008$. This is a conditional minimum among fully invested unconstrained weights for the stated covariance; it says nothing about expected return, estimation error, costs, or suitability.

## Quantiles and tail summaries

For loss $L$, define $\\operatorname{VaR}_\\alpha(L)=\\inf\\{\\ell:P(L\\leq \\ell)\\geq\\alpha\\}$. It is a quantile, not a maximum loss, and is insensitive to how severe losses beyond the threshold become. Expected shortfall averages the worst $1-\\alpha$ probability mass under an explicit convention; for continuous laws it equals $E[L\\mid L\\geq \\operatorname{VaR}_\\alpha]$, while atoms require careful fractional allocation or an equivalent optimization definition.

Suppose loss is 0 with probability 0.95 and 100 with probability 0.05. Under the displayed left-quantile convention, 95% VaR is 0 while 95% expected shortfall is 100. Changing the tail loss to 1000 leaves VaR unchanged and multiplies expected shortfall by ten. Neither summary is a complete risk description.

Backtesting should examine exceedance count, clustering, and severity, with sampling uncertainty. A model can pass a marginal exceedance-frequency check while failing temporal independence or stress scenarios. Passing historical tests does not establish stationarity.

## Continuous-time boundary

Continuous-time pricing specifies a filtered probability space, asset dynamics, admissible self-financing strategies, and no-arbitrage conditions. An equivalent martingale measure changes valuation probabilities; it does not assert that physical drift equals the short rate. The basic Black--Scholes model additionally assumes frictionless continuous trading, diffusion paths, and fixed parameters. Jumps, stochastic volatility, funding differences, discrete hedging, and liquidity produce hedging error and model risk.

A hedge ratio is a derivative inside a model. Report its units, rebalance convention, transaction-cost assumptions, and sensitivity. “Delta neutral” is not “risk free”: curvature, volatility changes, jumps, basis risk, and discrete execution remain.

## Common errors and diagnostics

- Discounting with a quoted rate whose compounding convention is unstated.
- Treating a risk-neutral weight as a physical event probability.
- Assigning one price to a nonreplicable payoff without extra preferences or assumptions.
- Calling low variance low risk while ignoring tail, liquidity, horizon, and leverage.
- Reporting VaR without quantile convention, currency, horizon, conditioning set, and positions.
- Optimizing estimated means to many digits despite large estimation error.
- Describing a model hedge as guaranteed under frictions or jumps.
- Turning scenario mathematics into personal financial advice.

## Worked example: a nonreplicable payoff and a price interval

Consider three terminal states and a market containing only a bank account that costs one now and pays one in every state. There is no interest in this example. A claim pays $C=(0,1,2)$. Its payoff is not in the span of the bank payoff $(1,1,1)$, so bank trading alone cannot replicate it. Adding this claim at price $p$ creates a portfolio with terminal payoff $a+bC$ and initial cost $a+bp$.

If $p\\le0$, buying one claim and investing its nonpositive purchase cost leaves a nonnegative payoff with a strictly positive outcome in at least one state. At $p=0$ the claim itself is a zero-cost arbitrage. If $p\\ge2$, sell the claim and invest the proceeds in the bank: the terminal payoff $p-C$ is nonnegative and positive in at least one state. Thus no-arbitrage requires $0<p<2$ when every terminal state is possible.

Conversely, for each interior price there are strictly positive state weights $q_1,q_2,q_3$ summing to one with $q_2+2q_3=p$. For example choose $q_3$ strictly between $\\max(0,p-1)$ and $p/2$, set $q_2=p-2q_3$, and $q_1=1-p+q_3$. The interval is nonempty precisely for $0<p<2$. Any traded portfolio then has initial cost equal to its terminal payoff averaged by these strictly positive weights. A zero-cost portfolio cannot be nonnegative in every state and positive somewhere, because its weighted average would be positive. This proves the converse directly.

The interval consists of consistency prices within the written frictionless model, not estimates of likely cash flow or recommendations. The weights price states; the argument has not supplied physical probabilities. Additional traded assets, restrictions or preferences can narrow the interval, but each changes the model and must be stated.

## Statewise bounds can be useful without a unique price

A super-replicating portfolio pays at least the claim in every declared state. Its purchase cost is therefore an upper consistency bound for the claim price under frictionless unrestricted trading: if the claim cost more, selling it and buying the dominating portfolio would leave nonnegative terminal payoff and a strictly positive initial receipt. A sub-replicating portfolio similarly gives a lower bound. The comparison is statewise and uses no physical probabilities.

The bank-only example makes these bounds transparent. The claim with payoffs zero, one, and two is dominated by two units of bank payoff and dominates zero units. These give weak price bounds zero and two. Strict no-arbitrage excludes both endpoints because each comparison has a strict payoff advantage in at least one possible state. If some declared state is actually impossible under the model, that strictness argument must be reconsidered. The state list is part of the theorem, not a harmless display choice.

Transaction costs or trading restrictions alter the comparison. A proposed portfolio requiring a prohibited short sale is not an admissible arbitrage. Buying and selling the same instrument at different prices creates two inequalities rather than one linear price equation. The finite frictionless calculation remains a useful reference case, but its conclusion cannot be copied unchanged into a constrained market model.

## Expected shortfall handles atoms through an optimisation formula

For an integrable loss and confidence level strictly between zero and one, define expected shortfall by minimising

$$
t+\\frac{1}{1-\\alpha}\\mathbb E[(L-t)_+]
$$

over real thresholds. The right and left derivatives in the threshold are determined by the probabilities of loss strictly above, or at least as large as, that threshold. A minimum therefore occurs at an appropriate quantile. When the quantile is an atom, the formula includes only the fraction of that atom required to fill the worst tail mass. Simply conditioning on loss greater than or equal to the quantile can include too much probability and give a different number.

**Worked example: a tail atom.** Let loss be zero with probability 0.96 and one hundred with probability 0.04. At confidence 0.95, the quantile is zero. The worst five percent consists of all four percent at one hundred and one percent at zero, so expected shortfall is eighty. Conditioning on loss at least zero would instead average the whole distribution and give four. The optimisation formula gives eighty directly at threshold zero and preserves the intended tail-mass convention.

This is a mathematical risk summary for a specified loss law, horizon, currency, and position. Estimation uncertainty in rare losses can dominate the arithmetic. Reporting the loss scenarios and their assumed probabilities alongside the summary makes its conditional meaning visible and permits comparison with alternatives that have the same quantile but different tail severity.

## Exercises

<a id="complete-solutions"></a>

### Exercise 1
<a id="finance-pricing-risk-ex-1"></a>

Compute the present value of 121 received in two years at an effective annual rate of 10%.

<details>
<summary>Hint 1</summary>

Discount using the named effective annual factor for each year.

</details>
<details>
<summary>Hint 2</summary>

The same factor is applied twice; do not subtract a simple-interest percentage from the terminal amount.

</details>
<details>
<summary>Full solution</summary>

Present value is $121/(1.1)^2=100$ in the same currency units, assuming annual effective compounding and no default.

</details>

### Exercise 2
<a id="finance-pricing-risk-ex-2"></a>

Convert an effective annual rate of 10% to its equivalent continuously compounded rate.

<details>
<summary>Hint 1</summary>

Equate the one-year accumulation factors under the two conventions.

</details>
<details>
<summary>Hint 2</summary>

Take the natural logarithm of the effective annual factor.

</details>
<details>
<summary>Full solution</summary>

Solve $\\exp\\left(\\delta\\right)=1.1$, giving $\\delta=\\log(1.1)$ per year, approximately $0.09531$. The numerical rate differs because its compounding convention differs.

</details>

### Exercise 3
<a id="finance-pricing-risk-ex-3"></a>

Reproduce the binomial call replication and its price.

<details>
<summary>Hint 1</summary>

Write one payoff-matching equation in each terminal state.

</details>
<details>
<summary>Hint 2</summary>

Solve for stock holding and bank holding before evaluating their initial cost.

</details>
<details>
<summary>Full solution</summary>

Statewise equations give $\\Delta=(20-0)/(120-80)=1/2$ and $B=0-80/2=-40$. Initial cost is $100/2-40=10$.

</details>

### Exercise 4
<a id="finance-pricing-risk-ex-4"></a>

Explain why changing the subjective up probability to 0.7 does not change the replication price.

<details>
<summary>Hint 1</summary>

Inspect which inputs enter the two payoff-matching equations.

</details>
<details>
<summary>Hint 2</summary>

A subjective probability does not alter statewise equality of the replicated payoff.

</details>
<details>
<summary>Full solution</summary>

Replication matches the payoff separately in every modeled state. Its cost follows traded prices and the no-arbitrage convention, not a physical belief, provided all replication assumptions hold.

</details>

### Exercise 5
<a id="finance-pricing-risk-ex-5"></a>

In the same market, replicate a payoff of 50 in the up state and 10 in the down state.

<details>
<summary>Hint 1</summary>

Use the same stock and bank returns as in the call example.

</details>
<details>
<summary>Hint 2</summary>

Subtract the two state equations to identify the stock holding, then recover the bank holding.

</details>
<details>
<summary>Full solution</summary>

Solve $120\\Delta+B=50$, $80\\Delta+B=10$. Subtraction gives $\\Delta=1$; then $B=-70$. Initial price is $100-70=30$.

</details>

### Exercise 6
<a id="finance-pricing-risk-ex-6"></a>

Show that two different replicating portfolios for the same payoff would create an arbitrage if they had different prices.

<details>
<summary>Hint 1</summary>

Buy the cheaper replicating portfolio and sell the more expensive one.

</details>
<details>
<summary>Hint 2</summary>

The terminal payoffs cancel in every state, so compare only the initial cash flow.

</details>
<details>
<summary>Full solution</summary>

Buy the cheaper replicating portfolio and short the dearer. Initial cash flow is positive while their future payoffs cancel state by state, producing an arbitrage under frictionless unrestricted trading.

</details>

### Exercise 7
<a id="finance-pricing-risk-ex-7"></a>

Explain why incompleteness can yield a price interval rather than a unique price.

<details>
<summary>Hint 1</summary>

Count the linearly independent traded payoff directions.

</details>
<details>
<summary>Hint 2</summary>

A payoff outside their span is not pinned down by a unique replication cost.

</details>
<details>
<summary>Full solution</summary>

If no traded portfolio equals the claim payoff, replication does not pin its price. No-arbitrage restricts prices enough to avoid dominance by attainable payoffs, often leaving multiple compatible state-price vectors and hence a range.

</details>

### Exercise 8
<a id="finance-pricing-risk-ex-8"></a>

Prove every covariance matrix is positive semidefinite.

<details>
<summary>Hint 1</summary>

Pair the covariance matrix with an arbitrary deterministic vector.

</details>
<details>
<summary>Hint 2</summary>

Its quadratic form is the variance of that vector-weighted random variable.

</details>
<details>
<summary>Full solution</summary>

For any vector $w$, $w^{\\mathsf T} \\Sigma w=E[(w^{\\mathsf T}(R-E[R]))^2]\\geq 0$. Since every quadratic form is nonnegative, $\\Sigma$ is positive semidefinite.

</details>

### Exercise 9
<a id="finance-pricing-risk-ex-9"></a>

Compute portfolio variance for equal weights when $\\sigma_1=0.2$, $\\sigma_2=0.1$, and $\\rho=0$.

<details>
<summary>Hint 1</summary>

Include the squared weights and covariance cross term.

</details>
<details>
<summary>Hint 2</summary>

Uncorrelated inputs remove the cross term but do not eliminate either marginal variance.

</details>
<details>
<summary>Full solution</summary>

Variance is $(1/2)^2(0.2)^2+(1/2)^2(0.1)^2=0.0125$; standard deviation is about $0.1118$, under the stated return units and horizon.

</details>

### Exercise 10
<a id="finance-pricing-risk-ex-10"></a>

Derive the minimum-variance weight in the worked uncorrelated example.

<details>
<summary>Hint 1</summary>

Express the second asset weight as one minus the first.

</details>
<details>
<summary>Hint 2</summary>

Differentiate the resulting scalar quadratic and check the feasible weight interval.

</details>
<details>
<summary>Full solution</summary>

Differentiate $0.04w^2+0.01(1-w)^2$: the derivative is $0.10w-0.02$, so $w=0.2$. Positive second derivative proves the minimum; variance is $0.008$.

</details>

### Exercise 11
<a id="finance-pricing-risk-ex-11"></a>

Repeat exercise 9 when $\\rho=1$, and interpret the change.

<details>
<summary>Hint 1</summary>

Retain the covariance term using correlation one.

</details>
<details>
<summary>Hint 2</summary>

Perfect positive co-movement changes diversification while leaving the marginal scales fixed.

</details>
<details>
<summary>Full solution</summary>

Add covariance term $2(1/2)(1/2)(1)(0.2)(0.1)=0.01$; total variance is $0.0225$, standard deviation 0.15. Perfect positive correlation removes the uncorrelated diversification benefit.

</details>

### Exercise 12
<a id="finance-pricing-risk-ex-12"></a>

Give two loss distributions with the same 95% VaR but different 95% expected shortfall.

<details>
<summary>Hint 1</summary>

Hold the cumulative probability below the tail threshold fixed.

</details>
<details>
<summary>Hint 2</summary>

Increase the magnitude of a loss above that threshold without moving the chosen quantile.

</details>
<details>
<summary>Full solution</summary>

Distribution A has loss 0 with probability 0.95 and 10 otherwise; B has loss 0 with probability 0.95 and 100 otherwise. Both have 95% VaR zero under the stated convention, while expected shortfalls are 10 and 100.

</details>

### Exercise 13
<a id="finance-pricing-risk-ex-13"></a>

Compute 95% VaR and expected shortfall for loss 0 with probability 0.95 and 100 with probability 0.05 under the chapter convention.

<details>
<summary>Hint 1</summary>

Use the infimum definition of the quantile at the boundary atom.

</details>
<details>
<summary>Hint 2</summary>

Expected shortfall averages the worst five percent of mass, which can differ sharply from that boundary value.

</details>
<details>
<summary>Full solution</summary>

The cumulative probability at zero is 0.95, so $VaR_.95=0$. The worst 5% mass all has loss 100, so expected shortfall is 100.

</details>

### Exercise 14
<a id="finance-pricing-risk-ex-14"></a>

Explain why ten VaR exceedances in 200 days do not alone validate a daily risk model.

<details>
<summary>Hint 1</summary>

An exceedance count discards timing and severity.

</details>
<details>
<summary>Hint 2</summary>

Dependence, conditional calibration, changing positions and loss magnitudes need separate information.

</details>
<details>
<summary>Full solution</summary>

The count matches the expected 5% rate but has binomial sampling variability. It says nothing about clustering, exceedance severity, dependence, changing exposures, data leakage, or performance outside that sample.

</details>

### Exercise 15
<a id="finance-pricing-risk-ex-15"></a>

Distinguish physical probabilities, state prices, and normalized risk-neutral probabilities.

<details>
<summary>Hint 1</summary>

Write whether each object sums to one and what it prices or predicts.

</details>
<details>
<summary>Hint 2</summary>

State prices discount state-contingent payments; normalizing them uses the risk-free discount factor.

</details>
<details>
<summary>Full solution</summary>

Physical probabilities model frequencies or beliefs about states. State prices are current prices per unit payoff in each state and include discounting. Normalizing discounted state prices can produce risk-neutral probabilities that price traded payoffs; they need not equal physical probabilities.

</details>

### Exercise 16
<a id="finance-pricing-risk-ex-16"></a>

List four risks remaining after a discrete-time position is locally delta neutral.

<details>
<summary>Hint 1</summary>

Ask which sources of payoff change are omitted by a local first derivative.

</details>
<details>
<summary>Hint 2</summary>

Curvature, jumps, parameter changes, rebalancing and transaction costs can survive delta neutrality.

</details>
<details>
<summary>Full solution</summary>

Remaining risks include gamma/curvature, volatility change, jumps, basis mismatch, discrete rebalancing, transaction costs, liquidity, funding, and model-parameter error. Any four with stated mechanisms suffice.

</details>

### Exercise 17
<a id="finance-pricing-risk-ex-17"></a>

Diagnose a “minimum-risk portfolio” report that omits horizon, covariance estimation window, constraints, costs, and tail analysis.

<details>
<summary>Hint 1</summary>

Specify what is being minimised and over which admissible positions.

</details>
<details>
<summary>Hint 2</summary>

Estimation uncertainty and costs are inputs to the decision, rather than optional decimal refinements.

</details>
<details>
<summary>Full solution</summary>

“Risk” is undefined without horizon and metric. The estimate cannot be reproduced without its data window; feasibility is unknown without constraints and costs; tail and regime behavior are omitted. The result is a conditional variance calculation, not a complete or personal recommendation.

</details>

### Exercise 18
<a id="finance-pricing-risk-ex-18"></a>

Design a rolling stress audit for a two-asset covariance model without presenting its output as advice.

<details>
<summary>Hint 1</summary>

Freeze a fitting window and evaluate on later observations.

</details>
<details>
<summary>Hint 2</summary>

Track parameter instability and stress scenarios while reporting a conditional model calculation, not a recommendation.

</details>
<details>
<summary>Full solution</summary>

Fix a chronological schedule; estimate covariance only from past data; record returns, missing-data rules, and exposure conventions; evaluate held-out variance forecasts, correlations, drawdown scenarios, and regime shifts; stress each input and report weight-switch margins. Label all outputs historical scenario mathematics.

</details>


## Project

Create a finite three-state, two-period market with at least three traded securities and one contingent claim. Document cash-flow timing and compounding, test no-arbitrage by finding state prices, determine whether the claim is replicable, and provide either a statewise replication or explicit no-arbitrage bounds under declared position constraints. Separately build a two-asset physical return scenario model, compute means, covariance, VaR, and expected shortfall under stated conventions, and show how estimates and a minimum-variance weight change across rolling windows and stressed correlations. Include independently checkable tables, one failed-model scenario, and a claim ledger separating valuation identities, forecasts, estimation uncertainty, governance assumptions, and the no-advice boundary.

## Synthesis projects

Continue with the retained [synthesis projects and solution architecture](synthesis-projects-solutions.md). They combine the preceding application models and remain back matter rather than a sixteenth chapter.
`;export{e as default};