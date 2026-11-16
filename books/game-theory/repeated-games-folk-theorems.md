
# Repeated Games and Folk Theorems

Repetition changes the strategy space. A strategy can condition today's action on yesterday's observed actions, so future incentives may support outcomes that are not equilibria of the stage game. The conclusion depends on how future payoffs are valued, what players observe, and whether the promised continuation is itself credible.

This chapter proves discounted Nash-reversion results under exact monitoring and punishment assumptions. It also explains a folk-type extension with public randomisation. It does not claim that every feasible individually rational payoff is supported without further hypotheses. Preparation is finite stage games, mixed Nash equilibrium, and subgame perfection.

## 1. Histories, strategies, and discounted payoffs

**Definition 10.1 (Discounted repeated finite game).** Fix a finite stage game with action profiles $a\in A=\prod_i A_i$ and real payoffs $u_i(a)$. At stages $t=0,1,\ldots$, players act simultaneously. After a stage its complete action profile is publicly observed. A strategy specifies an action distribution after every finite public history. Private randomisations are independent conditional on history unless a public device is explicitly introduced.

For a common discount factor $0<\delta<1$, the normalized payoff is
$$
U_i=(1-\delta)\sum_{t=0}^\infty\delta^t u_i(a^t).
$$
Finite stage payoffs are bounded, so the series converges absolutely for every play. The normalization makes constant stage payoff $c$ have repeated payoff $c$.

A finite history begins a continuation game with the same future discount pattern. Subgame perfection requires equilibrium behavior after every such public history, including histories inconsistent with prescribed play. A threat that is unattractive when its time comes can fail this requirement even if it deters an opening deviation in a written calculation.

Perfect monitoring here means observing the actual action profile, not merely a noisy signal or one's own payoff. Changing the observation rule can prevent detection or make histories observationally indistinguishable. The proofs below cannot be transferred to imperfect monitoring by retaining the same words “punish a deviation.”

## 2. Why finite-horizon repetition can unravel

**Theorem 10.2 (Finite repetition with a unique stage equilibrium).** In a fixed finite number of repetitions of a finite complete-information stage game with a unique Nash equilibrium, every subgame-perfect equilibrium plays that stage equilibrium after every history at every stage. Strategies use the usual independent behavioral randomisation.

**Proof.** In the last stage, continuation payoffs are absent, so every subgame-perfect continuation must be the unique stage equilibrium. Its expected payoff vector is independent of earlier actions. One stage earlier, choosing a current action therefore changes only current payoffs: the subsequent equilibrium payoff vector is fixed. The current profile must again be the unique stage equilibrium. Induct backward through the finite horizon. This argument applies after every public history, including histories not reached by an equilibrium path. ∎

**Worked example 10.3 (Two-stage prisoner's dilemma).** Let cooperation and defection have payoffs $(C,C)=(3,3)$, $(D,C)=(5,0)$, $(C,D)=(0,5)$, and $(D,D)=(1,1)$. Defection strictly dominates cooperation in the last stage, so the last-stage outcome after every history is $(D,D)$. In the first stage, that future payoff one is unchanged by today's action, leaving the same strict incentive to defect. A promise to cooperate tomorrow only after cooperation today is not credible at the final-stage subgame.

This theorem does not say finite repeated games never have interesting equilibria. Multiple stage equilibria can create different credible continuations. Nor does it address an uncertain stopping time or incomplete information about opponents. Those are different models rather than exceptions hidden inside its hypotheses.

## 3. Discounted one-stage deviations

The following principle justifies local incentive calculations for the infinite discounted model.

**Theorem 10.4 (One-stage deviation principle).** With finite action sets, bounded stage payoffs, discount factor strictly below one, and perfect recall of the stated public history, a strategy profile is subgame perfect if and only if no player can improve after any history by changing only that player's current-stage action distribution and then returning to the profile.

**Proof.** Necessity follows because a one-stage change is one possible unilateral deviation.

For sufficiency, suppose the local condition holds but a player has a profitable continuation deviation after some history, with expected improvement $\varepsilon>0$. Choose $M$ bounding absolute stage payoffs. Changing play only after stage $T$ can change normalized payoff by at most $2M\delta^T$. Choose $T$ large enough that this is below $\varepsilon$. The deviation truncated to return to the original profile from stage $T$ onward is still profitable.

There are finitely many action histories through stage $T$. At the last stage when the truncated strategy may differ, its continuation afterward is the original profile. The assumed one-stage condition says reverting to the original action cannot lower the deviator's payoff at any such history. Replace the last differing stage everywhere. Then do the same at the preceding stage. Backward elimination eventually removes every change, without lowering payoff, contradicting profitability over the unchanged profile.

Randomized current deviations are covered because expected payoff is affine in the player's distribution, so a profitable mixture would contain a profitable pure alternative. The tail bound and elimination work in every continuation subgame. ∎

The same proof permits an explicitly stated finite-support public random draw before each stage, observed by all players. Histories then include that draw, and the local condition is checked after each realized recommendation. The draw is not controlled by a deviating player.

## 4. Credible Nash reversion to a pure equilibrium

Fix a pure stage Nash equilibrium $p$, with payoff $w_i=u_i(p)$. Let a pure target profile $a^*$ give $v_i=u_i(a^*)>w_i$ to every player. Define
$$
g_i=\max_{b_i\in A_i}u_i(b_i,a^*_{-i}).
$$
This includes the prescribed action, so $g_i\ge v_i>w_i$.

The grim Nash-reversion profile plays $a^*$ after histories containing only $a^*$, and plays $p$ forever after any other observed action profile. Everyone can determine which state applies because monitoring is perfect.

**Theorem 10.5 (Pure target sustained by Nash reversion).** The described profile is subgame perfect exactly when
$$
v_i\ge(1-\delta)g_i+\delta w_i
\quad\text{for every }i.
$$
Equivalently,
$$
\delta\ge \max_i\frac{g_i-v_i}{g_i-w_i}.
$$

**Proof.** In a punishment subgame, the others play $p_{-i}$ at every stage regardless of later history. Since $p$ is a stage Nash equilibrium, no unilateral stage change improves $w_i$. A sequence of changes cannot improve its discounted average either. Punishment is therefore credible.

At a cooperative history, following forever yields $v_i$. A one-stage deviation gives at most $g_i$ now and triggers $w_i$ at every future stage. Its normalized value is at most $(1-\delta)g_i+\delta w_i$. If the inequalities hold, no one-stage deviation is profitable in either state, so Theorem10.4 establishes subgame perfection.

Conversely, if an inequality fails, then $g_i>v_i$ and a maximizing action differs from the prescribed action. Taking it immediately and then returning to punishment play gives precisely the larger payoff $(1-\delta)g_i+\delta w_i$. The strategy profile is not even an equilibrium of that cooperative continuation. Rearranging with positive denominator $g_i-w_i$ gives the threshold. ∎

At equality, a player may be indifferent, so the theorem supplies equilibrium rather than strict equilibrium. If a target payoff is not above the punishment payoff, the displayed ratio needs reanalysis; the theorem has explicitly excluded that case.

**Worked example 10.6 (An exact patience threshold).** In the prisoner's dilemma above, $v_i=3$, $w_i=1$, and $g_i=5$. The threshold is $(5-3)/(5-1)=1/2$. At $\delta=1/2$, cooperation and an immediate deviation both give three. At $\delta=2/5$, deviation gives $5(3/5)+1(2/5)=17/5>3$, so grim reversion fails. The threshold belongs to these exact stage payoffs and this specified punishment, not to every repeated prisoner's dilemma.

**Worked example 10.7 (An incredible punishment).** Suppose a proposed continuation in that same game orders row to defect and column to cooperate forever. At the first such punishment history, column receives zero by cooperating against defection but could obtain one by defecting. If the continuation remains in that punishment state regardless of later play, column has a profitable deviation. Naming an unpleasant outcome for a deviator is insufficient; the players executing it must have incentives to do so.

## 5. A proved folk-type result with public randomisation

Let
$$
F=\operatorname{conv}\{u(a):a\in A\}
$$
be the feasible payoff set of public lotteries over pure profiles. Fix a finite-support lottery $\lambda$ whose expected payoff vector is $v$, with $v_i>w_i$ for every player, where $p$ remains the pure stage Nash punishment.

At each cooperative stage, a public device independently draws a pure profile $a$ from $\lambda$. Everyone observes the whole recommendation before acting. Players follow it unless a past deviation has occurred, in which case they play $p$ forever. Histories include both the public draws and actual actions.

For each player define the largest temptation in a positively recommended profile,
$$
D_i=\max_{a:\lambda(a)>0}
\left[\max_{b_i}u_i(b_i,a_{-i})-u_i(a)\right]\ge0.
$$

**Theorem 10.8 (Public-lottery Nash-reversion theorem).** Every such feasible $v$ is the expected normalized payoff of a subgame-perfect equilibrium whenever
$$
\delta(v_i-w_i)\ge(1-\delta)D_i
\quad\text{for every }i.
$$
In particular some threshold below one suffices for each fixed $v$ strictly above $w$.

**Proof.** After a realized cooperative recommendation $a$, compliance gives current payoff $u_i(a)$ and expected normalized future payoff $v_i$, because future public draws are independent with the same lottery. A one-stage deviation gains at most $D_i$ currently and replaces future payoff $v_i$ by $w_i$. Thus its possible advantage is at most
$$
(1-\delta)D_i-\delta(v_i-w_i),
$$
which is nonpositive by assumption. Punishment histories are credible as before. The one-stage principle, including the observed public draws, proves subgame perfection.

Along compliant play each stage has expected payoff $v_i$. Linearity on finite partial sums and the uniformly vanishing discounted tail give expected normalized payoff $v_i$. Finally $v_i-w_i>0$, so the sufficient bound $\delta\ge D_i/(D_i+v_i-w_i)$ is strictly below one, including the case $D_i=0$. Taking the maximum over finitely many players gives a common threshold. ∎

The theorem proves a genuine family of supported outcomes, not merely one cooperative profile. It also states the extra public randomisation and the pure Nash punishment used in the construction. It does not assert that every payoff above each player's minmax level is available under arbitrary monitoring. Stronger folk theorems require further hypotheses and more elaborate credible punishments.

**Worked example 10.9 (Checking a conservative lottery threshold).** Suppose a two-player stage game has a pure Nash punishment with payoff $(1,1)$. A stated public lottery gives expected target payoff $(3,2)$, and direct inspection of every recommended profile gives temptation bounds $D_1=4,D_2=3$. The theorem requires $\delta\ge4/(4+2)=2/3$ for player one and $\delta\ge3/(3+1)=3/4$ for player two. Hence $\delta\ge3/4$ is sufficient. These numbers are a conditional certificate from the given lottery and verified temptations; they do not claim that an unspecified payoff table has such a lottery.

## 6. What the folk label must not conceal

A player's minmax level describes what opponents can force when minimizing that player's best attainable payoff. It need not equal the payoff in a stage Nash equilibrium. Replacing the credible Nash punishment by an arbitrary minmax action profile may tempt the punishers to deviate. The proof above therefore cannot simply substitute a lower number in its denominator.

Likewise, imperfect public signals may fail to identify a deviator or make innocent histories trigger punishment. Private monitoring can leave players uncertain which continuation others are using. A finite horizon has a final subgame, while the infinite discounted model has a uniformly small but nonzero tail. Each change needs its own theorem.

The stronger discounted folk-theorem literature is a cited continuation, not a conclusion proved by the preceding elementary argument. When invoking it, state its feasible-payoff, individual-rationality, monitoring, and dimension assumptions exactly. The precise Nash-reversion theorem here remains useful because every punishment and every recommendation can be checked directly.

## 7. Interpretation

Supporting a payoff means constructing an equilibrium strategy profile with that expected payoff. It does not show that players will coordinate on the strategy, believe the threat, observe actions perfectly, or agree on payoffs and discounting. Multiplicity can be enormous. The theorem describes strategic possibilities under the model, not a unique prediction.

The next chapter introduces uncertainty about players' private types. That changes the information included in a strategy and the expectation used in a best-response calculation. A threat or incentive condition is meaningful only after the information available when acting is fixed.

## Exercises

### Exercise 10.1
<a id="repeated-games-folk-theorems-ex-1"></a>

Show that a constant stage payoff $c$ has normalized discounted payoff $c$.

<details>
<summary>Hint 1</summary>

**Hint.** Use the geometric series for $0<\delta<1$.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The normalization factor is $1-\delta$.

</details>

<details>
<summary>Solution</summary>

**Solution.** The partial sums equal $(1-\delta)c(1-\delta^{T+1})/(1-\delta)=c(1-\delta^{T+1})$. Their limit is $c$, since $\delta^{T+1}\to0$. The normalization therefore preserves the stage payoff scale. At $\delta=1$, this calculation is undefined and a different average-payoff convention would be required.

</details>

### Exercise 10.2
<a id="repeated-games-folk-theorems-ex-2"></a>

Explain the backward-unravelling argument for three repetitions of the prisoner's dilemma in Worked example10.3.

<details>
<summary>Hint 1</summary>

**Hint.** Start at the final subgame after every possible history.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** A fixed future equilibrium payoff cannot reward the preceding action.

</details>

<details>
<summary>Solution</summary>

**Solution.** The third-stage dominant-action equilibrium is defection by both after every history. Thus its continuation payoff is fixed when the second-stage actions are chosen, making second-stage defection again strictly dominant. The same argument then applies to the first stage. The conclusion concerns the specified finite horizon and complete-information stage game, not every form of repeated interaction.

</details>

### Exercise 10.3
<a id="repeated-games-folk-theorems-ex-3"></a>

For payoffs $v_i=4,w_i=1,g_i=6$, find the grim Nash-reversion patience threshold.

<details>
<summary>Hint 1</summary>

**Hint.** Compare compliance with one deviation followed by punishment.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Solve $4\ge(1-\delta)6+\delta$.

</details>

<details>
<summary>Solution</summary>

**Solution.** The inequality is $4\ge6-5\delta$, giving $\delta\ge2/5$. Equivalently the ratio is $(6-4)/(6-1)=2/5$. The calculation assumes that $w_i$ is supplied by the credible pure stage Nash punishment and that the target and actual deviation gain have the stated values.

</details>

### Exercise 10.4
<a id="repeated-games-folk-theorems-ex-4"></a>

At the threshold in the preceding exercise, is cooperation necessarily a strict best response?

<details>
<summary>Hint 1</summary>

**Hint.** Evaluate the one-stage deviation payoff exactly at equality.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Equilibrium permits indifference.

</details>

<details>
<summary>Solution</summary>

**Solution.** At $\delta=2/5$, the deviation payoff is $6(3/5)+1(2/5)=4$, equal to compliance. Thus the target action may be only weakly optimal. The theorem gives subgame perfection, not strict equilibrium or robustness to arbitrary payoff perturbations. Larger discounting can strengthen this particular incentive if other assumptions remain fixed.

</details>

### Exercise 10.5
<a id="repeated-games-folk-theorems-ex-5"></a>

Why is a punishment profile required to be a stage Nash equilibrium in Theorem10.5?

<details>
<summary>Hint 1</summary>

**Hint.** Inspect the subgame after punishment has already begun.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Future punishment remains unchanged regardless of the current action.

</details>

<details>
<summary>Solution</summary>

**Solution.** In that subgame, a player faces the same punishment actions from others and cannot change the future punishment state. If the prescribed stage action were not a best response, deviating currently would improve payoff without a compensating future loss. A stage Nash punishment avoids this problem at every future history. An unpleasant but incredible profile does not satisfy the theorem.

</details>

### Exercise 10.6
<a id="repeated-games-folk-theorems-ex-6"></a>

For a public-lottery target with $v-w=(2,3)$ and temptation bounds $D=(1,6)$, find a sufficient common discount factor.

<details>
<summary>Hint 1</summary>

**Hint.** Apply $D_i/(D_i+v_i-w_i)$ player by player.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The larger threshold controls the joint incentive condition.

</details>

<details>
<summary>Solution</summary>

**Solution.** Player one's threshold is $1/(1+2)=1/3$, while player two's is $6/(6+3)=2/3$. Therefore $\delta\ge2/3$ is sufficient under the specified perfect-monitoring public-lottery Nash-reversion construction. This is a sufficient certificate, not a proof that smaller discount factors cannot support the payoff by a different equilibrium.

</details>

### Exercise 10.7
<a id="repeated-games-folk-theorems-ex-7"></a>

Explain why the public-lottery incentive condition is checked after each realized recommendation.

<details>
<summary>Hint 1</summary>

**Hint.** Players observe the recommendation before choosing their actions.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** An average payoff can hide a particularly tempting recommended action profile.

</details>

<details>
<summary>Solution</summary>

**Solution.** A player can condition a deviation on the public draw. Therefore each positively recommended profile must satisfy the local compliance comparison. Bounding the maximum current temptation $D_i$ covers all those histories. Merely comparing an unconditional average current gain could miss a recommendation at which deviation is profitable, and would not establish subgame perfection.

</details>

### Exercise 10.8
<a id="repeated-games-folk-theorems-ex-8"></a>

Prove the discounted tail bound used in the one-stage deviation principle.

<details>
<summary>Hint 1</summary>

**Hint.** Bound each possible stage-payoff difference by $2M$.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Sum the normalized geometric tail from stage $T$.

</details>

<details>
<summary>Solution</summary>

**Solution.** The absolute contribution of changed stages $t\ge T$ is at most $(1-\delta)\sum_{t=T}^\infty\delta^t 2M=2M\delta^T$. This tends to zero because $\delta<1$. Hence a profitable infinite deviation remains profitable after a sufficiently distant truncation. The finite backward elimination then uses the local no-deviation conditions.

</details>

### Exercise 10.9
<a id="repeated-games-folk-theorems-ex-9"></a>

Why does replacing $w_i$ by a player's minmax level require a new proof?

<details>
<summary>Hint 1</summary>

**Hint.** The player being punished is not the only strategic participant.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Opponents must be willing to execute the proposed minimizing actions.

</details>

<details>
<summary>Solution</summary>

**Solution.** A minmax action profile may reduce the target player's payoff but give a punisher an incentive to switch. The Nash-reversion proof uses stage Nash behavior to make every punishment continuation credible. Substituting a lower payoff number without constructing and checking the punishment strategies removes that argument. Stronger folk theorems solve this with additional hypotheses and constructions.

</details>

### Exercise 10.10
<a id="repeated-games-folk-theorems-ex-10"></a>

State three model changes under which the proved Nash-reversion result cannot simply be reused.

<details>
<summary>Hint 1</summary>

**Hint.** Review how deviations are detected and how continuation payoffs are valued.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The fixed stage game, perfect observation, and infinite discounted horizon are part of the theorem.

</details>

<details>
<summary>Solution</summary>

**Solution.** Examples include noisy or private action signals, a known finite stopping date, and changing stage payoffs or available actions. Publicly revealing recommendations rather than keeping randomisations private also changes some strategy models. Each modification can affect detection, credibility, or the continuation comparison, so its conclusion needs a separately stated theorem rather than the old threshold alone.

</details>

## Sources

Original exposition. Primary further reading is Osborne and Rubinstein, [*A Course in Game Theory*](https://www.economics.utoronto.ca/osborne/cgt/). Stronger discounted folk-theorem results are a cited continuation in Fudenberg and Maskin, [*The Folk Theorem in Repeated Games with Discounting or with Incomplete Information*](https://doi.org/10.2307/1911307), *Econometrica*54 (1986),533–554. The precise Nash-reversion and public-lottery theorems proved here keep their stronger punishment and monitoring assumptions; the more general paper is not being claimed as proved by this construction.

## Summary

Discounted repetition permits history-contingent incentives, but credible continuation play is essential. Finite backward induction, the discounted one-stage principle, pure Nash reversion, and its public-lottery extension have been proved under explicit assumptions. Stronger folk conclusions require further hypotheses and punishment arguments. Equilibrium support establishes strategic possibility, not coordination, learning, or a unique prediction.

