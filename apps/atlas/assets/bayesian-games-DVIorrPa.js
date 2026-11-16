var e=`---
parent_id: book-game-theory
chapter_id: bayesian-games
title: "Bayesian Games"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Bayesian Games

Players may know the rules while being uncertain about one another's information or preferences. A payoff table indexed only by actions then omits part of the model. Bayesian games add types, a probability model, and strategies that depend on what a player actually knows.

This chapter treats finite type spaces and a common prior. It proves the connection between interim incentives and a finite strategic-form game, so mixed Nash existence gives a Bayesian equilibrium. The information assumptions are explicit: a player observes its own type before acting, not the opponents' types or their current actions. Preparation is conditional finite probability and mixed strategies.

## 1. A finite common-prior model

**Definition 11.1 (Finite Bayesian game).** There are finitely many players. Player $i$ has a nonempty finite type set $T_i$ and a nonempty finite action set $A_i$. A common prior $\\pi$ is a probability distribution on $T=\\prod_iT_i$. Payoffs are real numbers $u_i(a,t)$ for each action and type profile. Nature draws $t$ from $\\pi$, player $i$ observes only $t_i$, and players then act simultaneously.

Assume every own-type marginal $\\pi_i(t_i)$ is positive. This allows the conditional distribution
$$
\\pi(t_{-i}\\mid t_i)=\\frac{\\pi(t_i,t_{-i})}{\\pi_i(t_i)}
$$
at every stated type. Joint type profiles may have probability zero. Types need not be independent.

A pure strategy is a full plan $s_i:T_i\\to A_i$. A behavioral strategy assigns a probability $\\sigma_i(a_i\\mid t_i)$ to each action at each type. Conditional on a complete type profile, private action randomisations are independent across players.

The prior is a modeling assumption shared by the players; it is not a conclusion inferred from the payoff table. Different information models may use different priors or beliefs. A conclusion proved for the common-prior finite model should not be relabelled as a theorem for every form of uncertainty.

## 2. Interim expected payoffs and equilibrium

For a type $t_i$ and pure deviation $b_i$, define
$$
U_i(b_i,\\sigma_{-i}\\mid t_i)
=\\sum_{t_{-i}}\\pi(t_{-i}\\mid t_i)
\\sum_{a_{-i}}\\left(\\prod_{j\\ne i}\\sigma_j(a_j\\mid t_j)\\right)
u_i(b_i,a_{-i},t_i,t_{-i}).
$$
The payoff of following $\\sigma_i$ is the average of these pure-action payoffs with weights $\\sigma_i(a_i\\mid t_i)$.

**Definition 11.2 (Bayesian Nash equilibrium).** A behavioral profile is a Bayesian Nash equilibrium if, for every player, every positive-probability type, and every pure action $b_i$,
$$
U_i(\\sigma\\mid t_i)\\ge U_i(b_i,\\sigma_{-i}\\mid t_i).
$$
Linearity then also excludes profitable mixed deviations at that type.

**Proposition 11.3 (Typewise support test).** A type's mixed action is optimal exactly when every positively used action maximizes its interim payoff against the opponents' strategies.

**Proof.** A mixture averages its pure-action interim payoffs. If it gives positive weight to an action below the maximum, replacing that weight by a maximizing action improves the average. Conversely a mixture supported on maximizing actions attains the maximum and cannot be improved by any alternative mixture. ∎

The expectation is conditional on what the player knows when acting. Replacing $\\pi(t_{-i}\\mid t_i)$ by the unconditional marginal can change a best response when types are correlated.

**Worked example 11.4 (Correlated types create correlated observed actions).** Let two players have types $H,L$, with prior probability one half on $(H,H)$ and one half on $(L,L)$. Each chooses $H$ or $L$, and player $i$ earns two exactly when both actions equal its own type, and zero otherwise. The pure plan “play your type” is a strict best response at each type: the other type is known from the correlation, and deviating changes payoff two to zero.

Ex ante each player's action is equally likely to be $H$ or $L$, but their actions never differ. Multiplying their unconditional action marginals would assign probability one quarter to each mismatch, incorrectly. Conditional independence of private randomisation does not imply unconditional independence after correlated types are averaged out.

## 3. Ex ante and interim deviations agree under the stated prior

An ex ante comparison averages over all of a player's possible types before its own type is known. An interim comparison conditions on the realized own type.

**Proposition 11.5 (Positive-marginal equivalence).** A strategy profile satisfies all interim best-response inequalities exactly when no player can improve its ex ante expected payoff by changing its complete contingent plan, allowing randomised plans.

**Proof.** If every type's current strategy is optimal, any alternative contingent behavior has nonpositive payoff gain at each type. The ex ante gain is the weighted sum of these gains with weights $\\pi_i(t_i)$, so it is nonpositive.

Conversely, if some type has a strictly profitable action change, alter the complete plan only at that type. Its ex ante gain is the positive conditional gain multiplied by the positive probability $\\pi_i(t_i)$, hence strictly positive. Randomised deviations are covered by linearity, or by applying the same argument to their conditional action distributions. ∎

Positivity matters for the converse. If a type has probability zero, its conditional payoff under the common prior is undefined, and changing its action has zero ex ante effect. One must remove that type or specify an additional off-path belief convention. Dividing by zero is not a belief rule.

## 4. A finite strategic-form representation

Let $S_i=A_i^{T_i}$ be the finite set of pure contingent plans. Define the ordinary finite game's payoff by
$$
\\bar u_i(s)=\\sum_{t\\in T}\\pi(t)\\,
u_i(s_1(t_1),\\ldots,s_N(t_N),t).
$$
Each player now chooses a complete plan. The type draw remains encoded in the expected payoff function.

A mixture $\\mu_i$ over complete plans induces a behavioral distribution
$$
\\sigma_i(a_i\\mid t_i)
=\\sum_{s_i:s_i(t_i)=a_i}\\mu_i(s_i).
$$
Conversely, any behavioral distribution can be implemented by a mixture over plans: use
$$
\\mu_i(s_i)=\\prod_{t_i\\in T_i}\\sigma_i(s_i(t_i)\\mid t_i).
$$
Summing over all plans confirms normalization, and summing over the coordinates other than one type recovers the required marginal.

The internal correlations between a player's prescribed actions at different types do not affect this one-shot model: only one of those types is realized. Across players, independent plan randomisation gives the same conditional action distribution as their behavioral marginals.

**Theorem 11.6 (Finite Bayesian equilibrium existence).** Every finite Bayesian game satisfying Definition11.1 and the positive-marginal convention has a behavioral Bayesian Nash equilibrium.

**Proof.** The contingent-plan game is a finite strategic-form game with nonempty action sets, so the finite mixed Nash theorem supplies a mixed equilibrium $\\mu$. Let $\\sigma$ be its induced behavioral profile. The finite sum formula for expected payoffs shows that $\\mu$ and $\\sigma$ produce the same distribution of actions conditional on each type profile.

If $\\sigma$ had a profitable interim deviation at some type, Proposition11.5 would yield a profitable ex ante change. It can be implemented in the plan game by replacing the prescribed action at that type in every sampled plan, leaving every other prescription unchanged. This contradicts the Nash property of $\\mu$. Thus all interim inequalities hold. ∎

**Worked example 11.7 (Different plan mixtures, the same behavior).** A player has two types, listed $H,L$, and actions $E,O$. Suppose it enters with probabilities $4/5$ at $H$ and $3/10$ at $L$. Independent sampling of the two plan coordinates gives probabilities
$$
\\mu(EE)=6/25,\\quad \\mu(EO)=14/25,\\quad
\\mu(OE)=3/50,\\quad \\mu(OO)=7/50.
$$
Another plan mixture is $(3/10,1/2,0,1/5)$ in that order. Both have $H$-entry marginal $4/5$ and $L$-entry marginal $3/10$. Because only one type is realized, their different counterfactual correlations cannot be observed through a single action in this model.

The strategic-form representation may be much larger than the type description: it has $|A_i|^{|T_i|}$ pure plans for a player with type-independent action set. Existence is therefore not a claim of efficient enumeration.

## 5. A complete mixed Bayesian calculation

**Worked example 11.8 (An informed entrant and an uninformed incumbent).** An entrant has type $H$ with probability $1/4$ and $L$ with probability $3/4$. It knows its type and chooses enter $E$ or stay out $O$. An incumbent, with no private type, simultaneously chooses fight $F$ or accommodate $A$.

If entry does not occur, payoffs are $(0,2)$ regardless of the incumbent's action. For type $H$, entry gives $(1,-1)$ against $F$ and $(3,1)$ against $A$. For type $L$, entry gives $(-1,2)$ against $F$ and $(1,1)$ against $A$. Coordinates are entrant, incumbent. The incumbent does not observe current entry before choosing.

Let $q$ be the incumbent's probability of fighting. Type $H$ earns $3-2q\\ge1$ from entry, so it always enters. Type $L$ earns $1-2q$, and is indifferent exactly at $q=1/2$.

Let $r$ be type $L$'s entry probability. The incumbent's payoff difference, fight minus accommodate, is
$$
\\frac14(-2)+\\frac34r(1)=-\\frac12+\\frac34r.
$$
No-entry cases contribute zero to this difference. Hence the incumbent is indifferent at $r=2/3$. We obtain a Bayesian equilibrium: $H$ enters surely, $L$ enters with probability $2/3$, and the incumbent fights with probability $1/2$. Each positive-support action has been checked using the correct information.

The total entry probability is $1/4+(3/4)(2/3)=3/4$. A later observer who sees entry would assign posterior probability $1/3$ to type $H$, by Bayes' rule. That posterior is not information the incumbent had when choosing its simultaneous action. If the incumbent instead moved after observing entry, this would be a different extensive-form signalling game.

## 6. The value of information has a precise comparison

Holding others' strategies and the underlying payoff model fixed, an additional private signal cannot lower the best achievable expected payoff: a player can ignore it. This is a decision-theoretic comparison, not an equilibrium comparison after others change their behavior.

**Proposition 11.9 (Ignoring an extra signal).** In a finite decision problem with signal $s$, action set $A$, and conditional expected payoff $f(a,s)$, the best signal-contingent payoff is at least the best payoff from one action chosen without that signal:
$$
\\sum_s p(s)\\max_a f(a,s)
\\ge\\max_a\\sum_s p(s)f(a,s).
$$

**Proof.** For every fixed action $a$, each term $\\max_b f(b,s)$ is at least $f(a,s)$. Multiply by nonnegative $p(s)$ and sum. The resulting left side is therefore at least the expected payoff of every fixed action; maximize that right side over $a$. Signal values of probability zero can be omitted. ∎

**Worked example 11.10 (A noisy binary signal).** A state is $H$ or $L$ with equal probabilities, and a correct guess earns one while a wrong guess earns zero. Without a signal, either fixed guess earns $1/2$. A symmetric signal is correct with probability $3/4$ conditional on either state. Bayes' rule then gives posterior correctness $3/4$, so following the signal earns $3/4$. Perfect revelation would give one. These comparisons keep the state distribution and payoff function fixed.

An equilibrium can respond to a changed information structure through everyone's incentives. Proposition11.9 does not say that every player's equilibrium payoff must improve when some information is revealed. It establishes the option to ignore a signal in the stated fixed decision problem.

## 7. Information, rationality, and interpretation

A Bayesian equilibrium is a collection of type-contingent best responses under specified conditional beliefs. It does not imply that types are observable to an outside analyst, that the common prior is empirically correct, or that players infer every preference parameter from data. Different priors and information partitions can produce different equilibria.

Common errors include treating a realized type as an action, using unconditional beliefs after observing one's own correlated type, checking only ex ante averages while ignoring a profitable positive-probability type deviation, and conditioning on an event that was unavailable when a decision was made. The formulas above expose each information set.

The mechanism-design chapter later uses types as private values and asks whether rules make truthful reporting a best response. Dominant-strategy truthfulness and Bayesian truthfulness quantify over different opponent behavior and beliefs. That distinction begins with the interim incentives developed here.

## Exercises

### Exercise 11.1
<a id="bayesian-games-ex-1"></a>

Write the conditional type distribution when the own-type marginal is positive, and explain why a zero marginal needs separate treatment.

<details>
<summary>Hint 1</summary>

**Hint.** Use the joint prior divided by the own-type marginal.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** A conditional probability formula cannot divide by zero.

</details>

<details>
<summary>Solution</summary>

**Solution.** For $\\pi_i(t_i)>0$, set $\\pi(t_{-i}\\mid t_i)=\\pi(t_i,t_{-i})/\\pi_i(t_i)$. The probabilities are nonnegative and sum to one over $t_{-i}$. If the marginal is zero, all corresponding joint probabilities are zero and the displayed quotient is undefined. Ex ante deviations at that type also have zero weight, so additional beliefs or removal of the type are needed for an interim requirement.

</details>

### Exercise 11.2
<a id="bayesian-games-ex-2"></a>

In Worked example11.4, compute the unconditional probability that players' actions differ under the type-following strategy.

<details>
<summary>Hint 1</summary>

**Hint.** Only type profiles $HH,LL$ have positive probability.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Conditional deterministic actions inherit the type correlation.

</details>

<details>
<summary>Solution</summary>

**Solution.** The realized action profiles are $HH$ and $LL$, each with probability one half. Thus the mismatch probability is zero. The individual action marginals are both uniform, but multiplying them would incorrectly give mismatch probability one half. Independence holds for private random coins conditional on types, not for actions after correlated types are averaged out.

</details>

### Exercise 11.3
<a id="bayesian-games-ex-3"></a>

Prove the positive-type direction from a profitable interim deviation to a profitable ex ante plan change.

<details>
<summary>Hint 1</summary>

**Hint.** Alter the action only at the identified type.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Weight the conditional gain by that type's positive marginal probability.

</details>

<details>
<summary>Solution</summary>

**Solution.** If the interim gain at $t_i$ is $\\gamma>0$, use the proposed new action there and retain the original plan at every other type. All other conditional payoffs are unchanged. The ex ante gain is therefore $\\pi_i(t_i)\\gamma>0$. This contradicts ex ante optimality and explains why positive own-type probability is part of the equivalence.

</details>

### Exercise 11.4
<a id="bayesian-games-ex-4"></a>

How many pure contingent plans exist for three types and two available actions? Explain why this is not merely two actions.

<details>
<summary>Hint 1</summary>

**Hint.** A pure plan chooses one action for each type.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The actual type is observed before the plan's prescription is implemented.

</details>

<details>
<summary>Solution</summary>

**Solution.** There are $2^3=8$ functions from the three-type set to the two-action set. The strategic-form representation chooses a whole conditional prescription, not one action used regardless of information. Only one type and its prescribed action are realized in a play, but all counterfactual prescriptions are part of the strategy.

</details>

### Exercise 11.5
<a id="bayesian-games-ex-5"></a>

Verify the first plan mixture in Worked example11.7 implements the stated behavioral probabilities.

<details>
<summary>Hint 1</summary>

**Hint.** Sum plan probabilities with an $E$ in the relevant coordinate.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Use type order $H,L$.

</details>

<details>
<summary>Solution</summary>

**Solution.** The $H$-entry probability is $6/25+14/25=4/5$. The $L$-entry probability is $6/25+3/50=12/50+3/50=3/10$. The four plan probabilities sum to one. Their correlations across the two unrealized alternative prescriptions have no additional observable effect in this one-shot type model.

</details>

### Exercise 11.6
<a id="bayesian-games-ex-6"></a>

In the entrant game, derive why type $H$ always enters and type $L$ mixes only at $q=1/2$.

<details>
<summary>Hint 1</summary>

**Hint.** Average each type's entry payoffs using the incumbent's fight probability.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Staying out gives zero.

</details>

<details>
<summary>Solution</summary>

**Solution.** Type $H$'s entry payoff is $q\\cdot1+(1-q)3=3-2q\\ge1>0$, so entry is strictly preferable for every $q\\in[0,1]$. Type $L$'s entry payoff is $q(-1)+(1-q)1=1-2q$. It is positive below one half, negative above one half, and zero at one half, the only probability allowing both entry and staying out in support.

</details>

### Exercise 11.7
<a id="bayesian-games-ex-7"></a>

Derive the incumbent's mixing condition in the entrant game.

<details>
<summary>Hint 1</summary>

**Hint.** The action difference matters only in entry cases.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Type $H$ enters surely; type $L$ enters with probability $r$.

</details>

<details>
<summary>Solution</summary>

**Solution.** Against $H$, fighting rather than accommodating changes payoff by minus two and receives prior weight one quarter. Against $L$ when entry occurs, it changes payoff by one and receives weight $3r/4$. No-entry payoffs are the same under both actions. Thus the difference is $-1/2+3r/4$, which vanishes at $r=2/3$.

</details>

### Exercise 11.8
<a id="bayesian-games-ex-8"></a>

Compute the entry probability and posterior type probability in that equilibrium, and identify who may use the posterior.

<details>
<summary>Hint 1</summary>

**Hint.** Use total probability, then Bayes' rule.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The incumbent chose simultaneously and had not yet observed entry.

</details>

<details>
<summary>Solution</summary>

**Solution.** Total entry probability is $1/4+(3/4)(2/3)=3/4$. The joint probability of type $H$ and entry is $1/4$, so a later observer seeing entry assigns posterior $H$-probability $(1/4)/(3/4)=1/3$. This posterior cannot justify the incumbent's simultaneous choice; allowing it to observe entry first changes the game's information structure.

</details>

### Exercise 11.9
<a id="bayesian-games-ex-9"></a>

Prove that the product-over-types mixture implements any finite behavioral strategy.

<details>
<summary>Hint 1</summary>

**Hint.** Sum over all complete plans except the fixed type coordinate.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Each other coordinate contributes a probability sum of one.

</details>

<details>
<summary>Solution</summary>

**Solution.** Set $\\mu_i(s_i)=\\prod_t\\sigma_i(s_i(t)\\mid t)$. Summing over every plan factors into the product of each type's action-probability sum, giving one. For the marginal prescription $s_i(t_0)=a$, factor out $\\sigma_i(a\\mid t_0)$; summing all other prescriptions again yields one. Hence the required behavioral marginal is recovered exactly.

</details>

### Exercise 11.10
<a id="bayesian-games-ex-10"></a>

State precisely what the extra-signal inequality proves and one conclusion it does not prove.

<details>
<summary>Hint 1</summary>

**Hint.** Keep opponents' strategies and the payoff model fixed.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** An optimizing player can ignore its signal, but others may react in a new equilibrium model.

</details>

<details>
<summary>Solution</summary>

**Solution.** The inequality proves that maximizing over signal-contingent actions weakly improves achievable expected payoff relative to committing to one action without that signal, for the same decision problem. It does not prove that every player's equilibrium payoff improves after public disclosure or a change in others' information. Those changes alter strategic responses and require a new equilibrium comparison.

</details>

## Sources

Original exposition. A primary historical source is John C. Harsanyi, [*Games with Incomplete Information Played by Bayesian Players, I: The Basic Model*](https://doi.org/10.1287/mnsc.14.3.159), *Management Science*14 (1967),159–182. Further primary book reading is Osborne and Rubinstein, [*A Course in Game Theory*](https://www.economics.utoronto.ca/osborne/cgt/). The finite contingent-plan equivalence and existence argument are given above rather than assumed from a label.

## Summary

Finite Bayesian games specify types, a prior, observed information, and contingent actions. Positive-probability interim incentives agree with ex ante contingent-plan optimality, and the finite Nash theorem supplies equilibrium after the strategic-form transformation. Correlated types can correlate observed actions despite independent private coins. Information and posterior calculations must respect what was known when each action was chosen.

`;export{e as default};