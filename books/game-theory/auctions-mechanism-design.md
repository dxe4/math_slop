
# Auctions and Mechanism Design

Mechanism design chooses rules while anticipating strategic responses. An allocation that maximizes reported value need not make truthful reports attractive. A payment rule can change incentives even when the physical allocation is unchanged. The mathematical problem is therefore to state the information, deviations, allocation, and transfers together.

This chapter proves truthfulness of the second-price auction, derives a first-price equilibrium in a stated continuous-value model, and gives the Groves and revelation arguments. Preparation is Bayesian incentives, expected utility, and elementary single-variable calculus. The continuous auction example is verified directly; it is not an application of the earlier finite-type existence theorem.

## 1. Rules, values, and incentive requirements

**Definition 13.1 (Quasilinear private-value mechanism).** Player $i$ has a private type determining a value function $v_i(a)$ over outcomes $a$. A mechanism takes messages and selects an outcome and payments $p_i$ made by the players. Utility is $v_i(a)-p_i$. Private values mean the outcome's value for player $i$ depends on that player's type, rather than directly on opponents' private types.

Risk neutrality is relevant when outcome or payment lotteries are averaged. Transferability and the quasilinear form are assumptions; they should not be inferred from arbitrary preference rankings. A mechanism also needs a tie rule and an outside option where those affect its definition.

**Definition 13.2 (DSIC and BIC).** A direct mechanism asks players to report types. It is dominant-strategy incentive compatible, or DSIC, when truthful reporting maximizes each player's utility for every fixed report profile of others. It is Bayesian incentive compatible, or BIC, when truth maximizes each positive-probability type's interim expected utility given the stated beliefs and truthful reports by others.

DSIC implies BIC in any compatible prior model by averaging its pointwise inequalities. The converse need not hold: an interim inequality averages over opponents rather than protecting against each report separately.

Efficiency, individual rationality, and budget balance are distinct. Efficiency maximizes the specified total surplus. Individual rationality compares a participant's utility to the outside option. Exact budget balance makes collected payments equal the mechanism's stated cost; weak budget balance permits a surplus but no deficit. None is part of the definition of incentive compatibility.

## 2. A second-price auction and all tie cases

There are $n\ge2$ bidders for one indivisible object. Bidder $i$ values winning at $v_i\ge0$ and losing at zero. Bids are nonnegative real numbers. The highest bidder wins, with a fixed exogenous priority for ties. The winner pays the highest other bid; every loser pays zero.

**Theorem 13.3 (Second-price truthfulness).** Bidding $b_i=v_i$ is a weakly dominant strategy for every bidder.

**Proof.** Fix all other bids and let $m$ be their maximum. Any winning bid pays $m$, and any losing bid pays zero.

If $v_i>m$, truthful bidding wins and gives $v_i-m>0$. Every other winning bid gives the same utility, while losing gives less. If $v_i<m$, truthful bidding loses and gives zero; a winning bid would give $v_i-m<0$, while other losing bids give zero. If $v_i=m$, winning and losing both give utility zero, including whichever tie outcome the rule selects. Thus no alternative bid improves utility in any case. ∎

Truthful play is therefore a Nash equilibrium and allocates the object to a highest-value bidder. With nonnegative values it is also individually rational: a truthful winner pays no more than its value, and a loser has utility zero.

The dominance is weak. For particular opponents' bids, many reports can produce the same utility. Consequently DSIC does not imply that truthful reporting is the unique Nash behavior under arbitrary weakly dominated strategies.

**Worked example 13.4 (Truthful allocation and another equilibrium).** Let values be ten and five. Truthful bids give the object to the first bidder at price five. Now consider bids zero and eleven. The second bidder wins at price zero, obtaining utility five. The first bidder cannot profit by overbidding eleven, since winning would cost eleven, more than its value ten. Any lower bid loses. The second bidder already obtains its full value at zero price and cannot improve it. Thus this is also a Nash equilibrium, with an inefficient allocation.

This example does not contradict weak dominance: the second bidder's overbid is weakly dominated by truth but can still be a best response to the specific opposing zero bid. The distinction between dominant-strategy recommendations and the full Nash set matters.

**Worked example 13.5 (A third-price change breaks the proof).** Suppose instead the highest of three bidders pays the third-highest bid. A bidder of value six faces bids seven and two. Truthful bidding six loses and gives zero. Bidding eight wins but pays two, giving utility four. Hence truth is not dominant in this changed auction. The second-price proof depended on comparing the winning payment to the threshold needed to win, not merely on the name “sealed bid.”

## 3. First-price bidding under a stated distribution

In a first-price auction the winner pays its own bid. Truthful bidding is generally not dominant because a winner can sometimes lower its payment while still winning.

Assume $n\ge2$ risk-neutral bidders with independent values uniform on $[0,1]$, no reserve, and independent private information. Consider the increasing bid rule
$$
\beta(v)=\alpha v,\qquad \alpha=\frac{n-1}{n}.
$$
Tie events between independent continuous opponents have probability zero. A tie rule is still fixed to define every realized profile.

**Theorem 13.6 (Uniform private-value first-price equilibrium).** The stated symmetric bidding rule is a Bayesian equilibrium of this continuous-value model.

**Proof.** Fix value $v\in[0,1]$ and suppose all other bidders use $\beta$. For a bid $0\le b\le\alpha$, an opponent bids below $b$ exactly when its value is below $b/\alpha$. Independence makes the winning probability $(b/\alpha)^{n-1}$. The expected utility is
$$
U(b)=(v-b)(b/\alpha)^{n-1}.
$$
For $b>0$ its derivative has the sign of
$$
(n-1)v-nb,
$$
because the remaining factor $b^{n-2}/\alpha^{n-1}$ is nonnegative. Thus on $[0,\alpha]$ utility increases up to $b=\alpha v$ and decreases afterward, with the endpoint cases handled directly. For $v=0$, bidding zero gives zero while positive winning bids give nonpositive utility.

A bid $b>\alpha$ wins surely and gives $v-b<v-\alpha=U(\alpha)$, so it cannot improve on the maximum within the interval. Negative bids are excluded. Hence every type's best response includes $b=\alpha v$, proving Bayesian equilibrium. ∎

The proof uses independence to multiply winning probabilities, uniformity to obtain the linear distribution, and risk-neutral quasilinear utility to use $(v-b)$ times the winning probability. Different value distributions, correlations, common values, reserves, or risk attitudes require a new analysis.

**Worked example 13.7 (Three bidders and a type calculation).** With three bidders, $\alpha=2/3$. A bidder of value $3/4$ bids $1/2$. Its winning probability is $(3/4)^2=9/16$, and conditional winning utility is $3/4-1/2=1/4$, giving expected utility $9/64$. More generally its equilibrium expected utility is $v^n/n$, because $v-\alpha v=v/n$ and winning probability is $v^{n-1}$.

## 4. An exact revenue comparison in this model

Under the first-price equilibrium, a bidder of type $v$ contributes expected payment $\alpha v^n$: it bids $\alpha v$ and wins with probability $v^{n-1}$. Integrating and summing over bidders gives expected revenue
$$
n\int_0^1\alpha v^n\,dv
=\frac{n-1}{n+1}.
$$

Under truthful second-price bidding with the same independent uniform values, revenue is the second-highest value $Y$. Its distribution satisfies
$$
\Pr(Y\le s)=s^n+n(1-s)s^{n-1}\quad(0\le s\le1),
$$
because at most one value can exceed $s$. Differentiating gives density $n(n-1)s^{n-2}(1-s)$. Therefore
$$
\mathbb EY=n(n-1)\int_0^1s^{n-1}(1-s)\,ds
=\frac{n-1}{n+1}.
$$

These matching revenues have been proved for this specific distribution and equilibrium model. They are not a theorem that every auction or every equilibrium raises the same amount. In particular the inefficient second-price Nash example above is not the truthful outcome used in the calculation.

## 5. Groves payments align a general objective

Let the outcome set $A$ be finite and nonempty, and let a fixed public cost be $c(a)$. Reports are value functions $\widehat v_i(a)$. Choose an outcome
$$
a^*\in\arg\max_{a\in A}\left[\sum_i\widehat v_i(a)-c(a)\right],
$$
using a specified tie rule. For any functions $h_i$ depending only on others' reports, charge
$$
p_i=h_i(\widehat v_{-i})
-\left[\sum_{j\ne i}\widehat v_j(a^*)-c(a^*)\right].
$$

**Theorem 13.8 (Groves truthfulness).** In the private-value quasilinear model, truthful reporting is weakly dominant under these outcome and payment rules.

**Proof.** Fix others' reports. Player $i$'s true utility from the selected outcome is
$$
v_i(a^*)+\sum_{j\ne i}\widehat v_j(a^*)-c(a^*)
-h_i(\widehat v_{-i}).
$$
The last term is independent of $i$'s report. Reporting truth makes the mechanism maximize the preceding true-value expression over all feasible outcomes. Any false report can only select another outcome in that same set, whose expression is no larger. Thus it cannot improve utility. ∎

No prior is needed. The proof uses the independence of $h_i$ from the player's own report. An own-report dependence would introduce an additional incentive term requiring separate analysis. The theorem does not establish individual rationality or budget balance for every choice of $h_i$.

A pivot choice uses
$$
h_i=\max_{a\in A}\left[\sum_{j\ne i}\widehat v_j(a)-c(a)\right].
$$
It measures the best reported surplus of the others when player $i$'s value is ignored, compared with their surplus under the actual choice. Interpreting it as literally removing a player requires a corresponding model of feasible outcomes; the fixed-outcome formula above is the one proved.

**Worked example 13.9 (Efficient truthfulness can run a deficit).** A public project costs ten and each of two participants values it at seven; not building has value and cost zero. Truthful surplus maximization builds because $7+7-10=4>0$. Ignoring either participant, the other's best surplus is $\max(0,7-10)=0$. The pivot payment of each is therefore $0-(7-10)=3$. Total revenue six is below cost ten. Each participant's utility is four, and the rule remains truthful by Theorem13.8, but it is not budget balanced. This calculation concerns the stated mechanism; it is not an impossibility proof for every possible public-project rule.

## 6. Revelation changes the representation

A mechanism may ask for bids or complex messages rather than types. Suppose it has a known equilibrium strategy mapping each type to a message or message distribution. A direct mechanism can ask for the type and simulate that equilibrium prescription.

For the Bayesian assertion below, use the finite-type common-prior model of the preceding Bayesian chapter. The continuous first-price example was verified separately and does not supply a general measure-theoretic revelation theorem.

**Theorem 13.10 (Revelation principle, stated incentive forms).** If a mechanism has a pure dominant-strategy implementation $s_i(t_i)$, its outcome and payments can be reproduced by a DSIC direct mechanism. If it has a Bayesian equilibrium in the stated prior model, a possibly randomized direct mechanism reproduces its outcome distribution and is BIC.

**Proof.** In the dominant-strategy case, the direct mechanism sends reported type $\widehat t_i$ to the original message $s_i(\widehat t_i)$ and runs the original rule. For any fixed reports of others, those reports determine some original messages. The original dominant-strategy property says $s_i(t_i)$ is at least as good as every message, including any $s_i(\widehat t_i)$. Truthful direct reporting is therefore dominant and reproduces the original truthful-type outcome.

In the Bayesian case, after reports the direct mechanism independently simulates the original equilibrium message distributions conditional on those reports, then applies the original rule. Under truthful reports it reproduces the original joint outcome and payment distribution. A type misreport substitutes one particular alternative message distribution for the equilibrium one. Such a distribution was an available unilateral deviation in the original Bayesian game. Its interim expected payoff cannot be higher. Therefore direct truth telling is BIC. The simulation retains the original type beliefs and private-randomisation assumptions. ∎

The principle does not make every desired allocation implementable. It says that once an implementation with the specified incentives exists, one can use a truthful direct representation without changing its resulting distribution. It also does not strengthen Bayesian incentives into dominant-strategy incentives.

## 7. A necessary monotonicity check

For a single-parameter direct mechanism, let $q(v)$ be the probability of receiving an object and $p(v)$ its expected payment, holding others' reports fixed.

**Proposition 13.11 (DSIC requires monotone allocation).** If truthful reporting is optimal for every nonnegative value, then $q(v)$ is nondecreasing.

**Proof.** Truthfulness for types $v,w$ gives
$$
vq(v)-p(v)\ge vq(w)-p(w),\qquad
wq(w)-p(w)\ge wq(v)-p(v).
$$
Adding cancels payments and yields $(v-w)(q(v)-q(w))\ge0$. For $v>w$, divide by $v-w>0$ to obtain $q(v)\ge q(w)$. ∎

This is a necessary test, not a complete payment characterization in the chapter's stated generality. A proposed allocation that becomes less likely as value rises cannot be repaired into DSIC merely by renaming its transfer.

Mechanism theorems describe formal incentive properties under specified preferences and information. Welfare, participation, privacy, budget objectives, and fairness may require additional conditions. The next chapter studies a different design problem: aggregating rankings under Arrow's pairwise consistency requirements.

## Exercises

### Exercise 13.1
<a id="auctions-mechanism-design-ex-1"></a>

In a second-price auction, prove truthfulness when the bidder's value exactly equals the highest other bid.

<details>
<summary>Hint 1</summary>

**Hint.** Winning utility is value minus that same highest other bid.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The tie rule may choose either outcome.

</details>

<details>
<summary>Solution</summary>

**Solution.** If $v_i=m$, any winning bid pays $m$ and gives utility zero. Any losing bid also gives zero. Truthful bidding may win or lose according to the fixed tie rule, but either gives the same utility, and no alternative can improve it. This boundary is why the theorem states weak dominance.

</details>

### Exercise 13.2
<a id="auctions-mechanism-design-ex-2"></a>

Verify that bids $(0,11)$ form a Nash equilibrium for values $(10,5)$ under second-price rules.

<details>
<summary>Hint 1</summary>

**Hint.** The loser would have to pay eleven to become a winner.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The current winner already obtains its full value at zero price.

</details>

<details>
<summary>Solution</summary>

**Solution.** Bidder one gets zero and cannot gain by bidding above eleven, since winning would cost eleven and give utility minus one. Lower bids still lose; a tie at eleven cannot improve this comparison. Bidder two gets five, the maximum possible utility with nonnegative payments, and has no profitable deviation. Thus the profile is Nash even though the lower-value bidder wins.

</details>

### Exercise 13.3
<a id="auctions-mechanism-design-ex-3"></a>

Give the profitable deviation in the third-price example and explain which second-price argument fails.

<details>
<summary>Hint 1</summary>

**Hint.** The bidder's value is six and the other bids are seven and two.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Winning pays two under the changed rule.

</details>

<details>
<summary>Solution</summary>

**Solution.** A truthful bid six loses and gives zero. A bid eight wins and pays the third-highest bid two, giving utility four. The payment no longer equals the threshold highest opposing bid seven. Therefore the losing-when-value-below-threshold argument from the second-price proof no longer applies.

</details>

### Exercise 13.4
<a id="auctions-mechanism-design-ex-4"></a>

For two independent uniform bidders, find the first-price equilibrium bid and a value-$4/5$ bidder's expected utility.

<details>
<summary>Hint 1</summary>

**Hint.** Use $\alpha=(n-1)/n$.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The winning probability is the bidder's value in the two-bidder equilibrium.

</details>

<details>
<summary>Solution</summary>

**Solution.** With $n=2$, the bid is $v/2$, so type $4/5$ bids $2/5$. It wins with probability $4/5$ and earns conditional utility $2/5$, giving expected utility $8/25$. This also equals $v^2/2$. The calculation uses the uniform independent private-value model.

</details>

### Exercise 13.5
<a id="auctions-mechanism-design-ex-5"></a>

Why must the first-price best-response proof inspect bids above $\alpha$?

<details>
<summary>Hint 1</summary>

**Hint.** A stationary point proves optimality only in the range where the displayed winning-probability formula applies.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Above the maximum possible opponent bid, winning probability becomes one.

</details>

<details>
<summary>Solution</summary>

**Solution.** For $b>\alpha$, opponents always bid at most $\alpha$, so utility is $v-b$, not the polynomial probability expression continued outside its domain. It is strictly below $v-\alpha=U(\alpha)$. Since the optimum inside $[0,\alpha]$ is at least the boundary value, no such outside bid improves payoff. This completes the global best-response comparison.

</details>

### Exercise 13.6
<a id="auctions-mechanism-design-ex-6"></a>

Derive the equal expected revenue for three bidders in the two specified auctions.

<details>
<summary>Hint 1</summary>

**Hint.** Substitute $n=3$ into the proved revenue formulas.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The equality concerns truthful second-price and the displayed first-price Bayesian equilibrium.

</details>

<details>
<summary>Solution</summary>

**Solution.** Both revenues are $(3-1)/(3+1)=1/2$. In first price, sum the typewise expected payments and integrate over the uniform density. In second price, integrate the second-highest-value density $6s(1-s)$, weighted by $s$. The equality does not cover every Nash profile or every value distribution.

</details>

### Exercise 13.7
<a id="auctions-mechanism-design-ex-7"></a>

Prove DSIC implies BIC in the finite prior model.

<details>
<summary>Hint 1</summary>

**Hint.** Fix a true type and average its pointwise incentive inequalities over opponents' types.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** All probability weights are nonnegative.

</details>

<details>
<summary>Solution</summary>

**Solution.** For every fixed opponents' report profile, truth gives utility at least that from any specified misreport. Under truthful opponents, weight those inequalities by the true type's conditional distribution of opponents' types and sum. The resulting interim inequality is precisely BIC. This direction needs no assumption that the reverse implication holds.

</details>

### Exercise 13.8
<a id="auctions-mechanism-design-ex-8"></a>

Recalculate the pivot payments and deficit in the two-participant public-project example.

<details>
<summary>Hint 1</summary>

**Hint.** Ignore one player's value to compute $h_i$.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Then evaluate the others' surplus at the chosen project.

</details>

<details>
<summary>Solution</summary>

**Solution.** Ignoring either player gives best surplus $\max(0,7-10)=0$. At the built project, the other participant's value minus cost is $7-10=-3$, so the payment is $0-(-3)=3$. Total payments are six, leaving deficit four against cost ten. Each true utility is $7-3=4$. Truthfulness and efficient choice do not establish budget balance for this rule.

</details>

### Exercise 13.9
<a id="auctions-mechanism-design-ex-9"></a>

Explain why the Bayesian revelation principle preserves its incentive strength instead of producing dominant strategies.

<details>
<summary>Hint 1</summary>

**Hint.** A misreport simulates one available original message distribution.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The original equilibrium comparison is interim, under specified beliefs and others' equilibrium behavior.

</details>

<details>
<summary>Solution</summary>

**Solution.** The simulated deviation cannot improve interim expected payoff because the original Bayesian equilibrium excluded that deviation against the original opponents' type-contingent strategies. It was not a pointwise comparison against every possible opposing message profile. The constructed direct mechanism is therefore BIC, without a general DSIC conclusion.

</details>

### Exercise 13.10
<a id="auctions-mechanism-design-ex-10"></a>

Use the two-type incentive inequalities to prove monotonicity of a single-parameter allocation rule.

<details>
<summary>Hint 1</summary>

**Hint.** Write truthful-versus-misreport inequalities for types $v$ and $w$.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Add them so payments cancel.

</details>

<details>
<summary>Solution</summary>

**Solution.** The inequalities $vq(v)-p(v)\ge vq(w)-p(w)$ and $wq(w)-p(w)\ge wq(v)-p(v)$ sum to $(v-w)(q(v)-q(w))\ge0$. When $v>w$, divide by the positive difference to get $q(v)\ge q(w)$. Thus a decreasing allocation probability fails this necessary DSIC condition, regardless of how the payment is described.

</details>

## Sources

Original exposition. Primary references are William Vickrey, [*Counterspeculation, Auctions, and Competitive Sealed Tenders*](https://doi.org/10.1111/j.1540-6261.1961.tb02789.x),1961, and Theodore Groves, [*Incentives in Teams*](https://ranger.uta.edu/~weems/NOTES6319/PAPERSTWO/groves.pdf),1973. Further primary book reading is Osborne and Rubinstein, [*A Course in Game Theory*](https://www.economics.utoronto.ca/osborne/cgt/). The concrete incentive, revenue, and revelation arguments used here are proved with their stated model assumptions.

## Summary

Truthfulness depends on allocation and payment rules together. Second-price bidding is weakly dominant under private values; the stated first-price equilibrium instead relies on a distribution and risk-neutral expectations. Groves payments align a reported surplus objective with individual incentives, but require separate participation and budget analysis. Revelation preserves a given implementation's incentive strength, and single-parameter DSIC imposes monotone allocation.

