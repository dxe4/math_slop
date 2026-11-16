var e=`---
parent_id: book-game-theory
chapter_id: nash-equilibrium
title: "Nash Equilibrium and Unilateral Stability"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Nash Equilibrium and Unilateral Stability

An equilibrium is a profile of mutually compatible incentives. Each player's choice is optimal against the choices made by the others. This is a conditional stability statement, rather than a claim that an outcome is fair, efficient or reached by a particular learning process. The distinction becomes important as soon as a game has several equilibria or none in pure actions.

Read [Strategic-Form Games](./strategic-form-games.md) and [Dominance and Rationalisability](./dominance-and-rationalisability.md) first. This chapter uses finite probability distributions as a preliminary language; [Mixed Strategies](./mixed-strategies.md) supplies the full geometry and support calculations. The general finite existence proof belongs to [Fixed Points and Equilibrium Existence](./fixed-points-equilibrium-existence.md), so existence is not inferred here from a few examples.

## The equilibrium condition

**Definition 3.1 (Pure Nash equilibrium).** A profile $a^*$ is a pure Nash equilibrium if, for every player $i$ and every $b_i\\in A_i$,
\\[
u_i(a_i^*,a_{-i}^*)\\ge u_i(b_i,a_{-i}^*).
\\]
It is strict if the inequality is strict for every different own action.

Each comparison changes only one coordinate. A coalition might benefit by changing several coordinates even when no individual benefits alone. Nor does the condition compare the equilibrium with every other complete profile. It compares each current payoff with the payoffs from unilateral alternatives, keeping the other coordinates fixed.

A pure equilibrium can be described as an intersection of best responses: $a_i^*\\in BR_i(a_{-i}^*)$ for all players. Since these sets are correspondences, ties matter. A profile with tied alternatives may be an equilibrium even if the player has no unique best action. Excluding ties changes the concept from Nash equilibrium to strict equilibrium.

**Worked example 3.2 (A unique but inefficient equilibrium).** In the dilemma with mutual cooperation $(2,2)$, mutual defection $(1,1)$ and unilateral defection payoffs $(3,0)$ or $(0,3)$, D strictly dominates C for each player. Thus $(D,D)$ is an equilibrium, and no other pure profile is one.

There is also no equilibrium assigning positive probability to C. Against any opponent distribution, D has a strictly positive advantage: it gains one in either opponent state. A player using C with positive probability can improve by transferring that probability to D. Hence the equilibrium is unique even among mixed profiles. Mutual cooperation nevertheless gives both players more. The strategic condition and Pareto comparison coexist without contradiction.

## A finite search for pure equilibria

For a two-player matrix, mark the largest row-player payoff in each column, including every tie. Separately mark the largest column-player payoff in each row. A cell marked for both is an equilibrium. Holding the correct coordinate fixed is indispensable: maximizing the sum of the pair or selecting the largest entry anywhere in the table answers neither player's deviation problem.

For more players the same definition works, but a two-dimensional picture becomes less convenient. One may enumerate complete profiles and, for each player, inspect every alternative own action. The number of profiles is the product of action-set sizes. A short definition therefore need not yield a small computational problem.

The absence of marked cells does not mean players have no available choices. It means no deterministic profile simultaneously satisfies all conditions. Allowing probability distributions changes the strategy space and can restore existence.

**Worked example 3.3 (Matching pennies has no pure equilibrium).** Each player chooses H or T. Player one receives one if the actions match and minus one otherwise; player two receives the negative. At a matching cell player two improves by switching. At a mismatching cell player one improves by switching. Thus every pure cell has a profitable unilateral deviation.

Suppose each chooses H with probability one half independently. Against that opponent mixture, either pure action gives expected payoff zero. Any mixture of the two actions also gives zero. Neither player can improve by a unilateral change, so this profile is a mixed equilibrium. It does not say the same outcomes alternate in a deterministic schedule or that an opponent observes a realized coin before choosing.

## Mixed profiles and their support

**Definition 3.4 (Mixed Nash equilibrium).** A mixed strategy is a probability distribution on a player's finite action set. A mixed profile uses independent distributions $\\sigma_1,\\ldots,\\sigma_n$. It is a Nash equilibrium if no player increases expected payoff by replacing only their own distribution.

Expected utility is evaluated using the product distribution. Dependence between recommendations is a different object, studied as correlation later. Independence is therefore a structural condition, not merely a convenient way to multiply probabilities.

**Theorem 3.5 (Support best-response criterion).** A mixed profile is a Nash equilibrium exactly when every pure action used with positive probability by each player maximizes that player's payoff against the opponents' mixed profile. Unused actions may tie, but may not earn more.

*Proof.* Fix opponents. The payoff of any own mixture is a weighted average of its pure-action payoffs. Hence its maximum is the largest pure-action payoff. If a mixture puts positive weight on a strictly inferior action, its weighted average is strictly below that maximum; transferring that weight to a maximizing action improves payoff. Conversely, if every supported action attains the maximum, the mixture attains it and no pure or mixed deviation can exceed it. Apply this argument to every player. ∎

The theorem explains why an interior mixture makes its supported pure actions indifferent. It also explains why indifference alone is insufficient. A third unused action may earn more, and calculated probabilities may lie outside the probability simplex. Both feasibility and all excluded-action inequalities are required.

A pure profile is a mixed profile concentrated at one action per player. Thus mixed equilibrium extends the pure notion rather than replacing its definition. A game may have pure equilibria, additional interior mixed equilibria, continua of equilibria or a unique fully mixed equilibrium.

**Worked example 3.6 (All equilibria in a two-convention game).** Let the coordination payoffs be two to both at $(A,A)$, one to both at $(B,B)$ and zero off diagonal. The two pure coordinated profiles are equilibria. To find an equilibrium with both actions used, let player two choose A with probability $q$. Player one's payoff from A is $2q$, and from B is $1-q$. Equality requires $q=1/3$. Symmetrically player one's A probability must be $p=1/3$.

At those probabilities both players' supported actions give $2/3$, so the support criterion verifies equilibrium. If one player is pure, the other's unique best response is the same pure action, giving one of the coordinated profiles. Hence these three are all equilibria. The mixed equilibrium has lower expected payoff for both than either coordinated equilibrium, but the equilibrium conditions alone do not select among them.

## Existence and what it does not imply

**Theorem 3.7 (Finite mixed existence, proved later).** Every finite strategic-form game has at least one mixed Nash equilibrium.

The fixed-point chapter proves this result using finite-dimensional compactness, Brouwer's theorem and a continuous improvement map. It is stated here to place the examples in context. Its hypotheses include finite nonempty action sets and expected-payoff mixing. It does not guarantee a pure equilibrium, uniqueness, a simple formula or convergence of best-response dynamics.

A pure best-response process can cycle. In matching pennies, after one player matches, the other wants to mismatch, after which the first wants to match again. To call this a dynamic model one must specify the updating order. The equilibrium distribution remains a valid static object even when a chosen deterministic update rule cycles.

Equilibrium selection needs further structure. Communication, a convention, risk, learning, past observations or a refinement may favor one equilibrium. None follows from existence alone. Conversely a behavioral process that converges in one example has not proved global equilibrium convergence for all finite games.

## A class with pure existence

**Definition 3.8 (Exact potential).** A finite game has an exact potential $\\Phi$ if for every unilateral action change,
\\[
u_i(b_i,a_{-i})-u_i(a_i,a_{-i})
=\\Phi(b_i,a_{-i})-\\Phi(a_i,a_{-i}).
\\]
The potential is one scalar on complete profiles, and its changes match each deviator's payoff changes.

**Theorem 3.9 (Potential maximum).** Every finite exact-potential game has a pure Nash equilibrium. Every path of strictly profitable unilateral changes terminates.

*Proof.* A finite set of potential values has a maximum. At a maximizing profile, a profitable unilateral deviation would increase the potential by the same positive amount, contradicting maximality. Thus the profile is an equilibrium. Along a strictly profitable path the potential strictly increases, so no profile repeats. Since there are finitely many profiles, the path must stop. ∎

The potential need not equal total welfare. It is an incentive bookkeeping function. Its maximum proves existence without asserting that an arbitrary equilibrium maximizes it globally. A process allowing indifferent changes may cycle on a level set; the termination statement requires strictly profitable changes.

Common-interest games, in which all players have the same payoff function, have that function as an exact potential. Other games admit a potential even when individual payoffs differ. Establishing the difference identity, rather than simply drawing a scalar landscape, is what makes the theorem applicable.

## Strictness and robustness

A strict pure equilibrium has a positive margin against every alternative own action. Because there are finitely many comparisons, their minimum is positive. This gives a simple perturbation guarantee.

**Proposition 3.10 (Persistence of a strict equilibrium).** Suppose every unilateral payoff loss at a strict pure equilibrium is at least $\\delta>0$. If every individual payoff entry changes by less than $\\delta/2$, the same profile remains a strict equilibrium.

*Proof.* Each relevant difference uses two entries of the same player's payoff function. Its change in absolute value is less than $\\delta$. An old difference at least $\\delta$ therefore remains positive. Every alternative action is still strictly worse. ∎

A weak equilibrium can disappear under arbitrarily small perturbation of a tie. That observation does not make all weak equilibria uninteresting; mixed equilibria necessarily involve support ties. It says that robustness questions need explicit perturbation classes and margins, rather than an informal assertion that an equilibrium seems stable.

Finally distinguish Nash stability from dynamical stability. The former excludes profitable unilateral deviations at the profile. The latter concerns trajectories of a particular update rule near a point. [Evolutionary Games](./evolutionary-games.md) introduces a different stability criterion and a specified population differential equation. A Nash calculation alone supplies neither convergence nor resistance to all population mutations.

## Approximate equilibria and payoff certificates

**Definition 3.11 (Regret and approximate equilibrium).** At a mixed profile $\\sigma$, player i's unilateral regret is the largest pure-deviation payoff minus their current expected payoff. An $\\epsilon$-equilibrium has every regret at most $\\epsilon$, where $\\epsilon\\ge0$. The support argument shows that pure deviations suffice for this maximum.

Regret is never negative, because the current own mixture is an average of pure payoffs and cannot exceed their maximum. Exact Nash equilibrium means zero regret for every player. Approximation therefore measures an incentive gap in the same utility units as the game, rather than geometric distance between probability vectors.

**Proposition 3.12 (Payoff-error transfer).** Suppose two games on the same action sets differ by at most $\\eta$ in every payoff entry. If a profile is an $\\epsilon$-equilibrium of one, it is an $(\\epsilon+2\\eta)$-equilibrium of the other.

*Proof.* The expected payoff of any fixed profile or unilateral mixed deviation changes by at most $\\eta$, since it is a probability-weighted average of entry changes. A deviation gain subtracts the profile payoff from the deviation payoff, so its change is at most $2\\eta$. If every old gain was at most $\\epsilon$, every new gain is at most $\\epsilon+2\\eta$. ∎

This statement is useful when a model uses estimated utilities or rounded entries. It does not claim that an exact equilibrium of the estimated game is close in strategy space to an exact equilibrium of the unknown game. Equilibrium sets can move discontinuously near degeneracies even while every fixed profile's regret changes little.

A numerical report should therefore distinguish three questions: whether the reported probabilities form a valid distribution, whether its deviation gains are small in the written game, and whether the written payoff estimates accurately describe the intended interaction. A small residual in one indifference equation establishes none of the other two.

Approximation is also not scale-free. Multiplying all of one player's payoffs by a positive constant preserves exact equilibrium, but multiplies that player's regret and the associated tolerance. A claim that an equilibrium is accurate to a stated epsilon should specify payoff normalization. Different players can use different tolerances if their utility units are not comparable.

Finally, a profile with tiny regret is a static approximate incentive certificate. It does not establish that a learning process reaches it, that a real participant is insensitive to that payoff gain or that the outcome is socially close to optimal. Each interpretation needs its own link between the mathematical tolerance and the applied question.

## Exercises

<a id="nash-equilibrium-ex-1"></a>
### Exercise 3.1

Find all pure equilibria when both players receive one for matching A or B and zero otherwise.

<details>
<summary>Hint 1</summary>

Mark best replies against each action.

</details>

<details>
<summary>Hint 2</summary>

Both matching cells satisfy the two conditions.

</details>

<details>
<summary>Solution</summary>

Exactly $(A,A)$ and $(B,B)$ are pure equilibria. Against either opponent action matching yields one and mismatching zero. Each off-diagonal cell admits a profitable matching deviation. The calculation does not yet enumerate mixed equilibria, which require expected-payoff comparisons.

</details>

<a id="nash-equilibrium-ex-2"></a>
### Exercise 3.2

Prove that strictly dominant actions for all players give a unique mixed equilibrium.

<details>
<summary>Hint 1</summary>

Each dominant action beats every other action at every opponent profile.

</details>

<details>
<summary>Hint 2</summary>

Average the strict comparisons under any opponent mixture.

</details>

<details>
<summary>Solution</summary>

The dominant action remains uniquely best against every mixed opponent profile, since every payoff difference is a positive weighted average. Hence each equilibrium assigns it probability one. The profile of dominant actions is itself mutually best responding, so it is the unique mixed equilibrium.

</details>

<a id="nash-equilibrium-ex-3"></a>
### Exercise 3.3

In matching pennies, calculate player one's pure payoffs when the opponent uses H with probability $q$.

<details>
<summary>Hint 1</summary>

Separate matching and mismatching probabilities.

</details>

<details>
<summary>Hint 2</summary>

Set the two affine payoffs equal for an interior mixture.

</details>

<details>
<summary>Solution</summary>

H gives $q-(1-q)=2q-1$, while T gives $(1-q)-q=1-2q$. They are equal only at $q=1/2$. Above that threshold H is uniquely best and below it T is uniquely best. An equilibrium using both actions therefore requires the opponent's half mixture.

</details>

<a id="nash-equilibrium-ex-4"></a>
### Exercise 3.4

Why can an unsupported action tie the supported ones at equilibrium?

<details>
<summary>Hint 1</summary>

A tie offers no strict improvement.

</details>

<details>
<summary>Hint 2</summary>

Use a game where all payoffs are zero.

</details>

<details>
<summary>Solution</summary>

If all actions give zero, every mixture is a best response, including one assigning zero probability to some tied actions. The support criterion requires supported actions to maximize and excluded actions not to exceed the maximum. It does not require strict inferiority of excluded actions.

</details>

<a id="nash-equilibrium-ex-5"></a>
### Exercise 3.5

Check the expected payoff in the coordination game's interior equilibrium.

<details>
<summary>Hint 1</summary>

Use probability one third on A for each player.

</details>

<details>
<summary>Hint 2</summary>

Compute either pure-action payoff or average over matching outcomes.

</details>

<details>
<summary>Solution</summary>

Each pure action against the opponent gives $2/3$. Equivalently $(A,A)$ occurs with probability $1/9$ and contributes $2/9$, while $(B,B)$ occurs with probability $4/9$ and contributes $4/9$. Total expected payoff is $2/3$ for each player. Off-diagonal outcomes contribute zero.

</details>

<a id="nash-equilibrium-ex-6"></a>
### Exercise 3.6

Show that an equilibrium need not be Pareto efficient.

<details>
<summary>Hint 1</summary>

Use the worked dilemma.

</details>

<details>
<summary>Hint 2</summary>

Compare complete profiles rather than unilateral deviations.

</details>

<details>
<summary>Solution</summary>

Mutual defection is the unique equilibrium because defection is strictly dominant. Mutual cooperation gives both players two instead of one and therefore Pareto dominates it. No contradiction arises because reaching cooperation requires both choices to change, while Nash stability checks only one player's change at a time.

</details>

<a id="nash-equilibrium-ex-7"></a>
### Exercise 3.7

Prove pure existence in a common-interest finite game.

<details>
<summary>Hint 1</summary>

Use the shared payoff as a potential.

</details>

<details>
<summary>Hint 2</summary>

Choose a global maximum on the finite profile set.

</details>

<details>
<summary>Solution</summary>

Let every player have payoff $v(a)$ and choose a profile maximizing $v$. Any profitable unilateral change would produce a larger $v$, contradicting maximality. Thus nobody has a profitable deviation and the profile is a pure equilibrium. Other equilibria may have lower common payoff.

</details>

<a id="nash-equilibrium-ex-8"></a>
### Exercise 3.8

Does potential-game termination still follow if indifferent unilateral changes are allowed?

<details>
<summary>Hint 1</summary>

Strict increase was used to exclude revisits.

</details>

<details>
<summary>Hint 2</summary>

A constant-payoff game permits every indifferent move.

</details>

<details>
<summary>Solution</summary>

No. With two actions and all payoffs constant, players may alternate between profiles indefinitely while remaining indifferent. The potential is constant and the game still has equilibria. The proved termination result applies only to strictly profitable changes, not to arbitrary best-response moves including ties.

</details>

<a id="nash-equilibrium-ex-9"></a>
### Exercise 3.9

A strict equilibrium has margin one. What uniform entrywise perturbation bound preserves strictness?

<details>
<summary>Hint 1</summary>

A payoff difference contains two entries.

</details>

<details>
<summary>Hint 2</summary>

Keep their combined possible change below one.

</details>

<details>
<summary>Solution</summary>

If every payoff entry changes in absolute value by less than one half, each deviation comparison changes by less than one and its original positive margin remains. Thus the profile stays strict. A non-strict bound of one half is insufficient for strictness because opposing changes could create a tie.

</details>

<a id="nash-equilibrium-ex-10"></a>
### Exercise 3.10

Explain why mixed existence does not prove convergence of best responses.

<details>
<summary>Hint 1</summary>

Existence concerns a fixed profile.

</details>

<details>
<summary>Hint 2</summary>

Dynamics require an update rule and trajectory analysis.

</details>

<details>
<summary>Solution</summary>

A fixed-point theorem establishes a distribution profile satisfying mutual optimality. It says nothing about whether sequential or simultaneous adjustments approach it. Matching-pennies best responses can cycle even though the half-half equilibrium exists. A convergence conclusion needs a separately specified dynamic and theorem.

</details>

## Sources

Osborne and Rubinstein, [*A Course in Game Theory*](https://www.economics.utoronto.ca/osborne/cgt/index.html), supplies the primary text route for Nash equilibrium and support reasoning. The general existence proof is given in this book's fixed-point chapter. The potential and perturbation arguments here are complete finite proofs.

## Summary

Nash equilibrium requires every player's strategy to be optimal against the others. Pure equilibria may fail to exist; mixed support conditions reduce deviations to pure-action comparisons. Existence, efficiency, selection, robustness and dynamical convergence are separate questions. Finite potential games provide a useful pure-existence theorem, while the next chapter develops the full mixed-strategy calculations.
`;export{e as default};