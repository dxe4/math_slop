var e=`---
parent_id: book-applied-modeling-proof-reference
chapter_id: games-equilibria-response
title: "Games, Equilibria, and Strategic Response"
level: advanced-undergraduate
estimated_minutes: 95
license: CC BY-SA 4.0
status: draft
---

# Games, Equilibria, and Strategic Response

## Why interaction changes a model

When a forecast or rule changes what other decision makers do, their response belongs inside the model. Game theory supplies exact language for such interaction. It does not assert that people know the game, optimize perfectly, coordinate on a particular equilibrium, or value only the recorded payoffs. We will distinguish an equilibrium calculation from an empirical model of behavior and from a judgment about welfare.

A finite strategic-form game has players $i=1,\\dots,n$, nonempty finite action sets $A_i$, and payoff functions $u_i(a_1,\\dots,a_n)$. **Definition (mixed strategy).** A mixed strategy $\\sigma_i$ is a distribution on $A_i$. A Nash equilibrium is a profile $\\sigma*$ at which no player improves expected payoff by changing only their own strategy.

## Best responses and mixed equilibrium

For a two-player matrix game, each player's best-response correspondence maps the opponent's mixture to their payoff-maximizing mixtures. A pure equilibrium is a cell from which neither player benefits by a unilateral deviation. With the row player choosing a row and the column player choosing a column, hold the column fixed and compare the row player's payoffs **down that column**; hold the row fixed and compare the column player's payoffs **across that row**.

### Matching pennies

Player 1 earns $+1$ when actions match and $-1$ otherwise; player 2 earns the negative. No cell is stable. If player 2 chooses heads with probability $q$, player 1's payoff is $2q-1$ from heads and $1-2q$ from tails. Both actions can receive positive probability only when $q=1/2$; symmetry gives $p=1/2$. The equilibrium value is zero. These probabilities make an opponent indifferent. They are not frequency predictions unless an additional learning, population, or repeated-play model supports that interpretation.

In a $2x2$ game, an interior mixed equilibrium is found by making each player indifferent. Boundary solutions must also be checked: calculated probabilities outside $[0,1]$ signal that no fully mixed equilibrium exists under those payoffs.

## Existence, multiplicity, and selection

**Theorem.** Every finite game has a mixed Nash equilibrium.

**Proof.** Let $S=\\prod_i\\Delta(A_i)$ be the product of mixed-strategy simplices. Write $U_i(\\sigma)$ for expected payoff under independent mixed strategies, and $U_i(a,\\sigma_{-i})$ for the payoff when player $i$ chooses pure action $a$. Define the positive deviation gain and its sum by

$$
g_{ia}(\\sigma)=\\max\\{0,U_i(a,\\sigma_{-i})-U_i(\\sigma)\\},
\\qquad G_i(\\sigma)=\\sum_{a\\in A_i}g_{ia}(\\sigma).
$$

The map with coordinates

$$
T_{ia}(\\sigma)=\\frac{\\sigma_i(a)+g_{ia}(\\sigma)}{1+G_i(\\sigma)}
$$

is continuous: finite-game expected payoffs are polynomials in the strategy probabilities, the maximum is continuous, and the denominator is at least $1$. Each coordinate is nonnegative and each player's coordinates sum to $1$, so $T$ maps the nonempty compact convex set $S$ into itself. Brouwer gives a fixed point $\\sigma^*$.

At that fixed point, $g_{ia}(\\sigma^*)=G_i(\\sigma^*)\\sigma_i^*(a)$. If $G_i(\\sigma^*)>0$, every action with $\\sigma_i^*(a)>0$ would have strictly positive deviation gain, and hence $U_i(a,\\sigma_{-i}^*)-U_i(\\sigma^*)>0$. This contradicts

$$
\\sum_{a\\in A_i}\\sigma_i^*(a)\\bigl[U_i(a,\\sigma_{-i}^*)-U_i(\\sigma^*)\\bigr]=0,
$$

which follows from the definition of expected payoff. Thus $G_i(\\sigma^*)=0$ for every player. No pure deviation improves payoff; because a mixed deviation is a convex combination of pure deviations, none of those improves it either. This is Nash equilibrium.

Existence does not give uniqueness, an efficient algorithm, stability, or a selection prediction. In a coordination game with payoff 2 to both at $(A,A)$, payoff 1 at $(B,B)$, and zero off diagonal, both coordinated cells are equilibria. Which appears can depend on communication, conventions, learning, risk, or history. The higher-payoff equilibrium need not be reached.

Best-response dynamics can cycle. Fictitious play, replicator dynamics, logit response, and reinforcement learning are different dynamical assumptions, each with its own convergence conditions. Observed convergence under one update rule is not a theorem about another.

<a id="section-25-zero-sum-games-and-minimax-certificates"></a>
<a id="section-27-zero-sum-games-and-minimax-certificates"></a>
## Zero-sum games and minimax certificates

For a two-player zero-sum matrix $A$, the row player chooses $p$ and guarantees $\\min_j p^{\\mathsf T} A e_j$; the column player limits payoff by choosing $q$. Von Neumann's theorem states

$\\max_p \\min_q p^{\\mathsf T} A q = \\min_q \\max_p p^{\\mathsf T} A q$.

This is linear-program duality. A candidate row mixture with guarantee $v$ and column mixture with upper bound $v$ form a certificate. The value is robust against any opponent strategy within the written game. It says nothing about cooperation, omitted actions, bounded rationality, changing payoffs, or externalities.

<a id="section-33-worked-asymmetric-zero-sum-game"></a>
<a id="section-35-worked-asymmetric-zero-sum-game"></a>
### Worked asymmetric zero-sum game

For row payoff $\\begin{pmatrix}2&-1\\\\-2&3\\end{pmatrix}$, let row 1 have probability $p$. Payoffs against columns are $4p-2$ and $3-4p$; equality gives $p=5/8$ and value $1/2$. If column 1 has probability $q$, row payoffs are $3q-1$ and $3-5q$; equality gives $q=1/2$. These mixtures provide lower and upper guarantees of $1/2$.

<a id="section-37-congestion-potential-and-feedback"></a>
<a id="section-39-congestion-potential-and-feedback"></a>
## Congestion, potential, and feedback

In a nonatomic routing game, a Wardrop equilibrium assigns positive flow only to routes of minimum experienced latency. System-optimal routing minimizes total travel time; it need not equal user equilibrium. Consider unit demand split between a constant-latency route $l_1(x)=1$ and a congestion route $l_2(x)=x$. Wardrop places all flow on route 2, where both route latencies equal 1. Total latency is 1. A system planner minimizes $(1-x)*1+x*x$, giving $x=1/2$ and total $3/4$. The ratio $4/3$ is conditional on this demand and latency model.

Congestion games admit a potential function whose unilateral changes match payoff changes, giving pure-equilibrium existence in finite cases. Potential descent is a mathematical property; real users may lack information, face switching costs, or respond strategically to recommendations. Publishing a route can change demand, making a fixed-demand forecast policy-dependent.

<a id="section-43-mechanisms-repeated-interaction-and-values"></a>
<a id="section-45-mechanisms-repeated-interaction-and-values"></a>
## Mechanisms, repeated interaction, and values

Mechanism design chooses rules while anticipating strategic reports or actions. Dominant-strategy incentive compatibility, Bayesian incentive compatibility, individual rationality, budget balance, efficiency, privacy, and distributional aims are distinct requirements and can conflict. A theorem can establish compatibility or impossibility under formal preferences and information. It cannot infer preferences or authorize a value trade-off.

Repeated games enlarge the strategy space: an action can depend on history. Discounted future consequences can support outcomes not equilibria of the one-shot game. Such folk-theorem possibilities are broad rather than predictive; monitoring, discounting, communication, and off-path behavior must be specified.

<a id="section-49-common-errors"></a>
<a id="section-51-common-errors"></a>
## Common errors

- Equating equilibrium with fairness, social optimality, or moral approval.
- Reporting one equilibrium without testing multiplicity or selection sensitivity.
- Treating equilibrium mixtures as observed frequencies without a behavioral bridge.
- Applying minimax guarantees after omitting opponent actions.
- Holding demand fixed when the recommendation changes participation.
- Calling a payment rule incentive compatible without naming the information model and deviation class.

<a id="section-58-worked-example-equilibrium-is-not-a-welfare-instruction"></a>
<a id="section-60-worked-example-equilibrium-is-not-a-welfare-instruction"></a>
## Worked example: equilibrium is not a welfare instruction

Consider a coordination game with payoff $(4,4)$ at $(A,A)$, $(2,2)$ at $(B,B)$ and $(0,0)$ at either mismatch. Both diagonal profiles are Nash equilibria: against $A$, choosing $A$ yields four rather than zero; against $B$, choosing $B$ yields two rather than zero. Their total payoffs differ, eight versus four. The definition does not select the higher total.

For an interior mixed equilibrium let the opponent choose $A$ with probability $q$. The expected payoffs from $A$ and $B$ are $4q$ and $2(1-q)$, equal only at $q=1/3$. The same calculation for the other player gives both mixing probabilities equal to one third. Against that mixture each pure action has payoff $4/3$, so neither player benefits by a unilateral mixture change. This supplies a third equilibrium rather than a reason to expect any particular selection in repeated play.

These are introductory equilibrium calculations for a modeling application. The [matrix-games chapter](../linear-programming-optimisation/matrix-games-linear-programming.md) continues the zero-sum calculation. General existence theory, learning dynamics and mechanism design require a separate treatment. A model of actual coordination additionally needs information, communication and adjustment assumptions.

The [strategic-form games introduction](../game-theory/strategic-form-games.md) supplies further finite-model setup. Its broader Game Theory book remains Outline; the linked chapter does not imply that its later equilibrium and mechanism-design treatments are already available.

<a id="section-68-dominance-can-involve-a-mixture-rather-than-one-pure-ac"></a>
<a id="section-70-dominance-can-involve-a-mixture-rather-than-one-pure-ac"></a>
## Dominance can involve a mixture rather than one pure action

Because expected payoff is affine in a player's own mixture, a pure action strictly worse than another available mixture against every opponent pure action can receive no positive probability in a Nash equilibrium. Against any opponent mixture, averaging the strict inequalities preserves strict superiority. Moving positive probability from the dominated action to the dominating mixture would then improve payoff, contradicting the best-response condition.

For example, suppose one player's three action payoff rows against two opponent actions are $(3,0)$, $(0,3)$, and $(1,1)$. Neither of the first two rows strictly dominates the third: each has a zero in one column. Their equal mixture yields $(1.5,1.5)$ and strictly dominates the third. The third action therefore cannot be used in equilibrium. This is a statement about the given numerical payoffs and action set; an omitted cost or unavailable randomisation could change the model.

Strict and weak dominance must be distinguished. Replacing a weakly dominated action may preserve some equilibria while deleting others that use indifference. A deletion procedure should state the dominance notion and the order of deletion. Calling an action irrational merely because another action ties it in some cases imports a selection assumption beyond the strict-improvement argument.

<a id="section-76-a-congestion-toll-can-align-two-objectives-under-a-spec"></a>
<a id="section-78-a-congestion-toll-can-align-two-objectives-under-a-spec"></a>
## A congestion toll can align two objectives under a specified model

In the earlier two-route nonatomic example, let the congestion route carry flow $x$ and have latency $x$. Its contribution to total travel time is $x^2$, whose marginal social cost is $2x$. Each individual experiences only latency $x$. Charging an additional toll equal to $x$, measured in the same cost units, makes its perceived cost $2x$. The constant route has perceived cost one. An interior Wardrop split then satisfies $2x=1$, giving the system-optimal split one half on each route.

The derivation assumes a unit mass of infinitesimal users, common valuation of tolls and time, a fixed demand, and the stated latency functions. Toll payments are transfers in a total-travel-time objective; adding them to social loss without specifying where the money goes would change that objective. Distributional consequences can also differ even when total time falls. A toll that is efficient under identical users may impose unequal burdens when users have different incomes, constraints, or access to alternatives.

Thus an equilibrium calculation can help design a rule, but its implementation needs a declared population and valuation model. If the toll changes total demand or causes travellers to use routes outside the network, the fixed-demand calculation is no longer the whole policy analysis.

<a id="section-84-finite-potential-arguments-prove-termination-only-for-s"></a>
<a id="section-86-finite-potential-arguments-prove-termination-only-for-s"></a>
## Finite potential arguments prove termination only for strict moves

In a finite game with an exact potential, every unilateral strict payoff improvement strictly increases that potential. There are finitely many action profiles, so a path of strict improvements cannot return to an earlier profile and must stop. At a stopping profile no unilateral strict improvement is available, which is exactly a pure Nash equilibrium.

This short proof does not cover simultaneous updates, indifferent moves, or approximate improvements. Simultaneous users may react to the same old congestion signal and overshoot together. Indifferent moves can revisit profiles without changing the potential. A behavioural dynamics claim must specify who updates, when information is observed, and what counts as an improvement. The existence of a potential supplies a precise conditional argument; it does not establish convergence for every plausible adaptation rule.

<a id="section-90-exercises"></a>
<a id="section-92-exercises"></a>
## Exercises

<a id="complete-solutions"></a>

<a id="section-94-exercise-1"></a>
<a id="section-96-exercise-1"></a>
### Exercise 1
<a id="games-equilibria-response-ex-1"></a>

Derive the matching-pennies equilibrium by indifference.

<details>
<summary>Hint 1</summary>

Make each player indifferent between actions in the opponent mixture.

</details>
<details>
<summary>Hint 2</summary>

A fully mixed candidate must also have probabilities in the unit interval.

</details>
<details>
<summary>Full solution</summary>

If player 2 uses heads with probability $q$, player 1's two pure payoffs are $2q-1$ and $1-2q$, equal only at $q=1/2$. Symmetry gives the other probability $1/2$; each player is indifferent, so neither can profitably deviate.

</details>

<a id="section-118-exercise-2"></a>
<a id="section-120-exercise-2"></a>
### Exercise 2
<a id="games-equilibria-response-ex-2"></a>

Find all pure equilibria in the coordination game described above.

<details>
<summary>Hint 1</summary>

Mark mutual best responses in the payoff table.

</details>
<details>
<summary>Hint 2</summary>

A pure equilibrium has no profitable unilateral deviation for either player.

</details>
<details>
<summary>Full solution</summary>

$(A,A)$ and $(B,B)$ are pure equilibria because unilateral deviation changes the deviator's payoff from 2 or 1 to zero. Neither off-diagonal cell is stable because either player can coordinate and improve.

</details>

<a id="section-142-exercise-3"></a>
<a id="section-144-exercise-3"></a>
### Exercise 3
<a id="games-equilibria-response-ex-3"></a>

For the coordination game, find its interior mixed equilibrium.

<details>
<summary>Hint 1</summary>

Set each player expected payoff from the two pure actions equal.

</details>
<details>
<summary>Hint 2</summary>

Compute the opponent probability, then verify neither player prefers a pure deviation.

</details>
<details>
<summary>Full solution</summary>

Let the opponent choose $A$ with probability $q$. Payoff from $A$ is $2q$; from $B$ it is $1-q$. Indifference gives $q=1/3$. By symmetry both mix with probability $1/3$ on $A$.

</details>

<a id="section-166-exercise-4"></a>
<a id="section-168-exercise-4"></a>
### Exercise 4
<a id="games-equilibria-response-ex-4"></a>

Give a finite game with a strictly dominant action for each player and identify its equilibrium.

<details>
<summary>Hint 1</summary>

Choose a strict payoff advantage independent of the opponent action.

</details>
<details>
<summary>Hint 2</summary>

The intersection of the two dominant choices supplies the equilibrium.

</details>
<details>
<summary>Full solution</summary>

In the prisoner's-dilemma payoffs $(C,C)=(2,2)$, $(D,C)=(3,0)$, $(C,D)=(0,3)$, $(D,D)=(1,1)$, action $D$ strictly dominates $C$ for each player. The unique equilibrium is $(D,D)$.

</details>

<a id="section-190-exercise-5"></a>
<a id="section-192-exercise-5"></a>
### Exercise 5
<a id="games-equilibria-response-ex-5"></a>

Explain why a calculated mixing probability of 1.4 cannot define a fully mixed equilibrium.

<details>
<summary>Hint 1</summary>

A probability outside the simplex is an invalid mixture.

</details>
<details>
<summary>Hint 2</summary>

Reconsider its proposed support and check boundary candidates instead.

</details>
<details>
<summary>Full solution</summary>

Mixed-strategy coordinates must lie in $[0,1]$ and sum to one. An indifference solution outside the simplex means the assumed interior support is inconsistent; inspect boundary best responses instead.

</details>

<a id="section-214-exercise-6"></a>
<a id="section-216-exercise-6"></a>
### Exercise 6
<a id="games-equilibria-response-ex-6"></a>

Verify the row player's $p=5/8$ guarantee in the worked zero-sum game.

<details>
<summary>Hint 1</summary>

Compute the row mixture payoff against each pure column.

</details>
<details>
<summary>Hint 2</summary>

The minimum of these values is a lower guarantee against every mixture.

</details>
<details>
<summary>Full solution</summary>

Against column 1, expected row payoff is $(5/8)2+(3/8)(-2)=1/2$. Against column 2 it is $(5/8)(-1)+(3/8)3=1/2$. Any column mixture therefore yields $1/2$.

</details>

<a id="section-238-exercise-7"></a>
<a id="section-240-exercise-7"></a>
### Exercise 7
<a id="games-equilibria-response-ex-7"></a>

Verify the column player's $q=1/2$ upper bound and hence certify the value.

<details>
<summary>Hint 1</summary>

Compute the column mixture payoff for each pure row.

</details>
<details>
<summary>Hint 2</summary>

Matching the upper and lower guarantees certifies the value.

</details>
<details>
<summary>Full solution</summary>

With column 1 probability $1/2$, row 1 earns $(2-1)/2=1/2$ and row 2 earns $(-2+3)/2=1/2$. No row mixture exceeds $1/2$. Together with solution 6, minimax value is exactly $1/2$.

</details>

<a id="section-262-exercise-8"></a>
<a id="section-264-exercise-8"></a>
### Exercise 8
<a id="games-equilibria-response-ex-8"></a>

Formulate the row player's maximin problem as a linear program.

<details>
<summary>Hint 1</summary>

Introduce a scalar guaranteed value below the payoff against every column.

</details>
<details>
<summary>Hint 2</summary>

Constrain the row probabilities to be nonnegative and sum to one.

</details>
<details>
<summary>Full solution</summary>

Choose $p_i\\geq 0$ and guarantee $v$; maximize $v$ subject to $\\sum_{i} p_i=1$ and $\\sum_{i} p_i A_ij\\geq v$ for every column $j$. Each constraint protects against one pure opponent action, hence all mixtures.

</details>

<a id="section-286-exercise-9"></a>
<a id="section-288-exercise-9"></a>
### Exercise 9
<a id="games-equilibria-response-ex-9"></a>

Give a coordination game with two equilibria having different total welfare, and explain why existence does not select one.

<details>
<summary>Hint 1</summary>

Vary the two coordination payoffs while retaining strict mutual best responses.

</details>
<details>
<summary>Hint 2</summary>

Different equilibrium totals do not add a selection mechanism.

</details>
<details>
<summary>Full solution</summary>

The chapter game has total welfare 4 at $(A,A)$ and 2 at $(B,B)$. Both satisfy unilateral stability. Existence identifies neither learning history nor coordination convention, so it does not predict selection.

</details>

<a id="section-310-exercise-10"></a>
<a id="section-312-exercise-10"></a>
### Exercise 10
<a id="games-equilibria-response-ex-10"></a>

Construct a best-response cycle in rock--paper--scissors under sequential pure best responses.

<details>
<summary>Hint 1</summary>

Use the cyclic dominance order of the three actions.

</details>
<details>
<summary>Hint 2</summary>

Specify which player updates and which current action is observed.

</details>
<details>
<summary>Full solution</summary>

If row plays rock, column best-responds paper; row best-responds scissors; column best-responds rock; the pattern repeats. Pure sequential best response cycles rather than converges.

</details>

<a id="section-334-exercise-11"></a>
<a id="section-336-exercise-11"></a>
### Exercise 11
<a id="games-equilibria-response-ex-11"></a>

Derive the Wardrop flow in the two-route example.

<details>
<summary>Hint 1</summary>

Equalise used-route latency and preserve total demand.

</details>
<details>
<summary>Hint 2</summary>

Unused routes must not offer a strictly lower latency.

</details>
<details>
<summary>Full solution</summary>

If congestion-route flow is $x<1$, its latency $x<1$ is below the constant route's latency, so users switch toward it. Thus equilibrium has $x=1$, where both latencies are 1.

</details>

<a id="section-358-exercise-12"></a>
<a id="section-360-exercise-12"></a>
### Exercise 12
<a id="games-equilibria-response-ex-12"></a>

Derive the system-optimal flow and its total latency.

<details>
<summary>Hint 1</summary>

Minimise total flow-weighted latency, not a single user latency.

</details>
<details>
<summary>Hint 2</summary>

Differentiate the total objective subject to the demand constraint.

</details>
<details>
<summary>Full solution</summary>

Total latency is $T(x)=x^2+(1-x)$. Since $T'(x)=2x-1$, the convex minimum is $x=1/2$; $T=1/4+1/2=3/4$.

</details>

<a id="section-382-exercise-13"></a>
<a id="section-384-exercise-13"></a>
### Exercise 13
<a id="games-equilibria-response-ex-13"></a>

Compute the price of anarchy for that example and state its modeling scope.

<details>
<summary>Hint 1</summary>

Divide equilibrium total latency by optimal total latency.

</details>
<details>
<summary>Hint 2</summary>

The result is conditional on the stated demand and latency functions.

</details>
<details>
<summary>Full solution</summary>

The ratio is $1/(3/4)=4/3$. It is conditional on unit nonatomic demand, these latency functions, perfect route choice, and the stated welfare metric; it is not a universal congestion number.

</details>

<a id="section-406-exercise-14"></a>
<a id="section-408-exercise-14"></a>
### Exercise 14
<a id="games-equilibria-response-ex-14"></a>

Explain how navigation advice can violate fixed-demand and fixed-latency assumptions.

<details>
<summary>Hint 1</summary>

Ask whether users change routes or trip timing after advice.

</details>
<details>
<summary>Hint 2</summary>

The intervention can alter the very latency and demand inputs held fixed by the calculation.

</details>
<details>
<summary>Full solution</summary>

Advice can induce trips, suppress trips, or divert users, changing demand. Loads then change latency, and compliance may depend on the recommendation. A policy-responsive demand and behavior model is needed.

</details>

<a id="section-430-exercise-15"></a>
<a id="section-432-exercise-15"></a>
### Exercise 15
<a id="games-equilibria-response-ex-15"></a>

Distinguish dominant-strategy and Nash incentive requirements.

<details>
<summary>Hint 1</summary>

Compare the quantifiers over opponent actions.

</details>
<details>
<summary>Hint 2</summary>

Dominance is uniform over them; Nash optimality is evaluated at the equilibrium opponent strategy.

</details>
<details>
<summary>Full solution</summary>

Dominant-strategy truthfulness requires the designated action to be optimal for every action profile of others. Nash incentive compatibility requires optimality only given the equilibrium strategies or beliefs; it is weaker and more context-dependent.

</details>

<a id="section-454-exercise-16"></a>
<a id="section-456-exercise-16"></a>
### Exercise 16
<a id="games-equilibria-response-ex-16"></a>

Show that adding the same constant to all of one player's payoffs preserves best responses.

<details>
<summary>Hint 1</summary>

Compare differences of the player payoffs under two own actions.

</details>
<details>
<summary>Hint 2</summary>

The added constant cancels in every such difference.

</details>
<details>
<summary>Full solution</summary>

Every expected payoff from every own action increases by that same constant, so payoff differences between actions are unchanged. Best-response sets and Nash equilibria therefore remain unchanged.

</details>

<a id="section-478-exercise-17"></a>
<a id="section-480-exercise-17"></a>
### Exercise 17
<a id="games-equilibria-response-ex-17"></a>

Diagnose the statement “the model has a unique Nash equilibrium, so users will learn it.”

<details>
<summary>Hint 1</summary>

Separate existence of a static solution from a dynamic learning rule.

</details>
<details>
<summary>Hint 2</summary>

Uniqueness alone says nothing about convergence of an unspecified update process.

</details>
<details>
<summary>Full solution</summary>

Uniqueness is a static property. Learning requires an update rule, information, exploration, and convergence theorem; some dynamics can cycle or settle elsewhere under misspecification. The conclusion does not follow.

</details>

<a id="section-502-exercise-18"></a>
<a id="section-504-exercise-18"></a>
### Exercise 18
<a id="games-equilibria-response-ex-18"></a>

Design a sensitivity audit for a game whose payoffs are estimated with intervals.

<details>
<summary>Hint 1</summary>

Perturb payoffs and track best-response inequalities.

</details>
<details>
<summary>Hint 2</summary>

Report support changes and action margins, not just one equilibrium decimal expansion.

</details>
<details>
<summary>Full solution</summary>

Specify payoff intervals and correlations; enumerate or sample admissible matrices; recompute equilibrium sets, values, welfare, and best-response margins; report equilibria that persist, appear, or disappear; and separate sampling uncertainty from structural uncertainty about players and actions.

</details>

<a id="section-526-project"></a>
<a id="section-528-project"></a>
## Project

Build a two-player application with at least three actions each and an explicit payoff-evidence ledger. Enumerate pure equilibria, compute all supported $2x2$ mixed candidates, and formulate one zero-sum benchmark with matching lower and upper certificates. Then perturb each estimated payoff over a declared interval, map equilibrium appearance and best-response margins, and compare individual equilibrium with a separately defined system objective. Add one behavioral update rule and demonstrate either convergence or a cycle without treating it as universal. Finish with a strategic-response paragraph naming who observes what, how recommendations change the state, and which claims are mathematical, behavioral, empirical, or normative.

<a id="section-530-summary"></a>
<a id="section-532-summary"></a>
## Summary

Equilibrium is a mutual best-response condition. It does not supply a learning rule, a welfare ranking or a behavioral prediction. The game-theory book develops those mathematical extensions; biological mechanisms next return to explicit state and observation models.
`;export{e as default};