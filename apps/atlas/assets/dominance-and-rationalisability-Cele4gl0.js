var e=`---
parent_id: book-game-theory
chapter_id: dominance-and-rationalisability
title: "Dominance and Rationalisability"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Dominance and Rationalisability

Before solving simultaneous best-response equations, we can sometimes remove actions that are inferior whatever an opponent does. This reduction is useful only if its quantifiers are precise. An action worse at every opponent choice is different from one that ties at some choices. An action beaten by another pure action is different from one beaten by a lottery. These distinctions determine which equilibrium conclusions survive elimination.

Use the finite strategic-form notation of [Strategic-Form Games](./strategic-form-games.md). The probability needed for a mixture is elementary weighted averaging; [Mixed Strategies](./mixed-strategies.md) develops the general formalism. This chapter introduces rationalisability as an iterative best-response criterion in two-player finite games. Its more demanding epistemic interpretations are separated from the elementary statements proved here.

## Strict and weak comparisons

**Definition 2.1 (Pure dominance).** A pure action $b_i$ strictly dominates $a_i$ if $u_i(b_i,a_{-i})>u_i(a_i,a_{-i})$ for every opponent profile. It weakly dominates $a_i$ if every comparison is weakly greater and at least one is strict. All comparisons refer to the currently specified opponent action sets.

The universal quantifier is essential. Beating an action at one attractive cell does not dominate it. Conversely a tie at even one opponent profile prevents strict dominance, although weak dominance may still hold. Identical payoff rows do not weakly dominate one another under this definition because there is no strict comparison. Some authors use different terminology for equality; the definition fixes our convention.

**Definition 2.2 (Mixed dominance).** A probability distribution $\\mu_i$ on own pure actions strictly dominates $a_i$ if its expected payoff is strictly greater than that of $a_i$ against every pure opponent profile. Weak mixed dominance uses weak comparisons everywhere and a strict one somewhere.

Checking pure opponent profiles is sufficient for strict dominance against every opponent mixture: a finite weighted average of positive payoff differences is positive. For weak dominance, however, an opponent may assign probability zero to every profile where the inequality is strict. The averaged advantage can then vanish. This observation explains much of the difference between safe strict elimination and weak elimination.

A dominating mixture can be assumed not to use the dominated action. If it gives that action weight $\\lambda<1$, remove that common portion and normalize the remainder. Its payoff advantage is divided by $1-\\lambda$ and keeps its sign. A mixture assigning all weight to the action cannot strictly or weakly dominate it.

## Dominance as a statement about beliefs

**Proposition 2.3.** An action strictly dominated by a mixed strategy is not a best response to any distribution of opponents' profiles.

*Proof.* At every pure opponent profile the difference between the mixture's payoff and the action's payoff is positive. There are finitely many such profiles. Taking expectation under any probability distribution gives a positive sum, since some profile has positive probability. Thus the action earns less than an available mixed alternative and cannot maximize expected payoff. ∎

The opponent distribution in this proposition may correlate the actions of several opponents. The proof requires only a distribution over their joint profiles. It does not assume that each opponent randomizes independently. This is a belief comparison, which should not be confused with the independence convention used for a Nash mixed-strategy profile.

Weakly dominated actions can be best responses. If an opponent concentrates entirely on tie states, the dominated action ties its alternative. Rational behavior under that belief therefore need not exclude it. Arguments that eliminate weakly dominated actions usually embody an additional refinement or caution criterion, rather than mere expected-payoff maximization.

**Worked example 2.4 (A mixture reveals an inferior row).** Let player one's payoffs against columns L and R be U: $(3,0)$, D: $(0,3)$ and M: $(1,1)$. U does not dominate M because zero is below one against R. D does not dominate M because zero is below one against L.

Mix U and D equally. Against either column the expected payoff is $3/2$, strictly above one. Thus the mixture strictly dominates M even though no pure row does. Against a belief assigning probability $q$ to L, U earns $3q$, D earns $3(1-q)$ and M earns one. At least one of the first two is at least $3/2$, so M is never best. A method checking only pure pairwise dominance would miss this exclusion.

The dominance calculation uses a feasible lottery over the player's own actions. It does not permit averaging an opponent's favorable actions or choosing the row after seeing the column. The lottery is chosen before the opponent's realized action is known.

## Elimination and equilibrium safety

Deleting an action changes the game by restricting its feasible choices. It may also change which remaining actions dominate others because the universal comparison ranges over fewer opponent profiles. An iterated procedure should therefore state the order of deletions and the class of permitted dominators.

**Theorem 2.5 (Safety of one strict deletion).** In a finite game, delete a pure action strictly dominated by a mixture of retained own actions. Then the Nash equilibria of the reduced game, embedded with zero probability on the deleted action, are exactly the Nash equilibria of the original game.

*Proof.* First, the dominated action receives zero probability in every original equilibrium. Otherwise a player could transfer its positive probability to the dominating mixture and strictly increase expected payoff. Removing an unused action leaves all equilibrium comparisons among retained actions unchanged, so every original equilibrium remains an equilibrium of the reduced game.

Conversely, take a reduced-game equilibrium. Every retained action has payoff no greater than the equilibrium payoff against its opponents' mixture. Their dominating mixture therefore has payoff no greater than that equilibrium payoff. The deleted action earns strictly less than the mixture, so it cannot be a profitable deviation either. Other players have unchanged available deviations at this profile. Thus the embedded profile is an original-game equilibrium. ∎

This proof covers mixed equilibria, not just equilibrium cells. Repeating it at each finite deletion step gives exact preservation along an iterated strict-elimination sequence. The currently available dominator must be recorded; appealing to a mixture containing an action deleted earlier would not justify that particular step.

The theorem proves equilibrium safety, not every possible statement about elimination. In particular, order-independence is a separate claim needing its own argument. We do not infer it merely from the fact that Nash equilibria are preserved, since different reduced games can preserve the same equilibrium set.

If strict elimination leaves exactly one action per player, the resulting profile is an equilibrium: in the one-profile reduced game nobody has another action, and lifting through the deletion sequence gives equilibrium in the original game. Every original equilibrium must use those surviving actions, so it is unique. This is a useful sufficient condition for uniqueness, not a necessary one.

**Worked example 2.6 (Successive strict elimination).** Consider row actions U,D and column actions L,R, with payoffs $(2,2),(1,0)$ across the U row and $(0,1),(0,0)$ across the D row. U strictly dominates D because two exceeds zero against L and one exceeds zero against R. Delete D.

Against the remaining U row, L strictly dominates R for the column player, since two exceeds zero. Delete R. The sole surviving profile is $(U,L)$, so the theorem gives the unique equilibrium of the original game. The first deletion uses both original columns, whereas the second uses the reduced row set. Writing the actual comparisons prevents accidentally using a different game at an intermediate step.

## Why weak elimination is different

**Worked example 2.7 (Order dependence and lost equilibria).** Let the payoff matrix be
\\[
\\begin{array}{c|cc}
&L&R\\\\\\hline
T&(1,1)&(1,0)\\\\
B&(1,0)&(0,0)
\\end{array}.
\\]
T weakly dominates B: the row payoff ties at L and is larger at R. L weakly dominates R for the column player: the payoffs are equal at B and L is better at T.

Delete B first. With only T remaining, L strictly dominates R, leaving only $(T,L)$. Instead delete R first. With only L remaining, T and B give the row player the same payoff, so neither weakly dominates the other under our definition. This sequence stops with both rows.

The original game has equilibria $(T,L)$ and $(B,L)$. At $(B,L)$ the row player is indifferent between B and T, and the column player is indifferent between L and R. Hence deleting B removes an original equilibrium. The difference is exactly the tie: strict deletion cannot remove a best response, whereas weak deletion can remove a best response to a belief concentrated on tie states.

Weak elimination remains useful when the intended solution concept explicitly excludes certain tied choices, but it must not be advertised as preserving all Nash equilibria. Different deletion conventions, simultaneous removals and treatment of duplicates can produce different reduced games. Record these choices as part of the method.

## Rationalisable actions in two-player games

**Definition 2.8 (Iterated best-response sets).** Start with $R_i^0=A_i$ for each of two players. Define $R_i^{t+1}$ to consist of actions in $R_i^t$ that maximize expected payoff among actions in $R_i^t$ against at least one probability distribution supported on $R_{-i}^t$. Actions remaining after stabilization are called rationalisable under this iterative definition.

The sets decrease and are finite, so they stabilize after finitely many strict reductions. They remain nonempty: any fixed belief on a nonempty opponent set has some maximizing own action. This definition is operational. A theorem connecting it with common knowledge of rationality requires a model of beliefs and higher-order beliefs, which is beyond the elementary proof here.

Rationalisability permits different actions to be justified by different beliefs. It does not require two players' justifying beliefs to agree with the strategies actually selected. Nash equilibrium imposes that additional consistency. Consequently rationalisable actions generally form a larger set than equilibrium predictions.

For more than two players, a definition must say whether a player may hold correlated beliefs about different opponents or must use a product distribution. Those choices can matter. We restrict this presentation to two players rather than silently changing the belief class while retaining the same terminology.

The finite separation theorem establishes a useful further connection: in a two-player finite game, an action that is never a best response to any belief is strictly dominated by a mixed strategy, with the appropriate available sets. This geometric converse requires a separation or linear-programming argument; it is a continuation linked to [Linear Programming and Matrix Games](./linear-programming-matrix-games.md), not a consequence of Proposition 2.3 alone. The direction actually used in our safety proofs is proved above.

## Interpreting a reduction

An elimination transcript should identify the player, removed action, retained dominator, strict inequalities and opponent set at each step. With numerical estimates, a claimed strict margin must exceed the uncertainty admitted by the model. An equality observed after rounding does not determine weak dominance, and a tiny computed advantage does not establish a robust strict one.

Dominance is also sensitive to omitted actions. Adding an opponent action can destroy a universal inequality that held in a smaller model. Adding a feasible own lottery can reveal mixed dominance missed by pure comparisons. These are changes in the model's choice sets, not failures of arithmetic.

A final distinction concerns behavior. An action's survival says that some belief can justify it under the selected criterion. It does not say that a player will choose it, that it belongs to every equilibrium or that it maximizes social welfare. Reduction is a logically controlled simplification of incentives, not a complete theory of learning or prediction.

## Strict margins under uncertain payoff entries

A strict dominance proof can be reported as a finite certificate with a quantitative margin. Fix a proposed dominating mixture and compute its payoff difference from the target at every pure opponent profile. If the smallest difference is $\\delta>0$, the proof has more information than a collection of rounded greater-than signs.

Suppose every payoff entry is then perturbed by at most $\\eta$. The payoff of the fixed mixture at each opponent profile changes by at most $\\eta$, because its weights are nonnegative and sum to one. The target payoff also changes by at most $\\eta$. Therefore every dominance difference changes by at most $2\\eta$. When $2\\eta<\\delta$, the same mixture remains a strict dominator.

This argument does not require the estimation errors to be independent. It is a deterministic worst-case statement about a declared set of possible payoff tables. Correlations or common estimation biases may affect whether that set is realistic, but they do not invalidate the bound within it.

A weak dominance claim generally has no comparable positive margin at tied states. An arbitrarily small perturbation can reverse one equality and destroy the relation. This sensitivity is another reason not to treat weak and strict elimination as interchangeable.

For an iterated reduction, margins belong to individual steps and their current opponent sets. A large margin at the first deletion does not certify later steps automatically. Record each retained mixture and its finite inequalities separately. If the target is a robust prediction across several plausible models, check that the same transcript or an explicitly justified alternative works throughout that model class.

Even a robust elimination certificate has limited interpretation. It excludes an action from best-response behavior under the specified possible opponents and utilities. It does not prove that a human participant understands the domination argument, has access to the proposed randomization or shares the modeller's payoff assessment. Those are additional empirical premises.

## Exercises

<a id="dominance-and-rationalisability-ex-1"></a>
### Exercise 2.1

For own payoff rows A:$(4,2)$ and B:$(3,1)$, classify the dominance relation.

<details>
<summary>Hint 1</summary>

Compare both coordinates.

</details>

<details>
<summary>Hint 2</summary>

Strict means greater at every opponent choice.

</details>

<details>
<summary>Solution</summary>

A strictly dominates B because four exceeds three and two exceeds one. Thus B is never a best response to any belief over the two opponent actions and receives zero probability in equilibrium. The two comparisons, not an average of the rows, establish pure strict dominance.

</details>

<a id="dominance-and-rationalisability-ex-2"></a>
### Exercise 2.2

For A:$(2,1)$ and B:$(2,0)$, is B never a best response?

<details>
<summary>Hint 1</summary>

Identify the tie column.

</details>

<details>
<summary>Hint 2</summary>

A belief can put all probability on that column.

</details>

<details>
<summary>Solution</summary>

A weakly but not strictly dominates B. Against a belief concentrated on the first column both yield two, so B is a best response if these are the available rows. Weak dominance therefore does not imply never-best-response status and does not justify removing every equilibrium using B.

</details>

<a id="dominance-and-rationalisability-ex-3"></a>
### Exercise 2.3

Find all mixture weights on U and D that strictly dominate M in Worked example2.4.

<details>
<summary>Hint 1</summary>

Write the two expected payoffs.

</details>

<details>
<summary>Hint 2</summary>

Both must exceed one.

</details>

<details>
<summary>Solution</summary>

With U weight $p$, the mixture gives $3p$ against L and $3(1-p)$ against R. Both exceed one exactly when $1/3<p<2/3$. The equal mixture is one witness, not the only one. At either endpoint one comparison ties, so strict dominance fails.

</details>

<a id="dominance-and-rationalisability-ex-4"></a>
### Exercise 2.4

Explain why checking pure opponent profiles establishes mixed strict dominance against any opponent distribution.

<details>
<summary>Hint 1</summary>

Form the payoff difference at each profile.

</details>

<details>
<summary>Hint 2</summary>

Average positive differences with probabilities summing to one.

</details>

<details>
<summary>Solution</summary>

Every pure difference is positive. Their finite probability-weighted sum is positive because at least one weight is positive. Hence the mixture beats the action against every opponent distribution. For weak dominance some strict-profile weights may be zero, which is why the analogous strict conclusion fails.

</details>

<a id="dominance-and-rationalisability-ex-5"></a>
### Exercise 2.5

Verify both equilibria in the weak-elimination example.

<details>
<summary>Hint 1</summary>

Check each player's deviations at column L.

</details>

<details>
<summary>Hint 2</summary>

At the bottom-left cell both relevant comparisons tie.

</details>

<details>
<summary>Solution</summary>

At $(T,L)$ the row player ties B and the column player strictly prefers L. At $(B,L)$ the row player ties T and the column player ties R. Neither has a strictly profitable deviation at either profile. Therefore both are equilibria, even though T weakly dominates B.

</details>

<a id="dominance-and-rationalisability-ex-6"></a>
### Exercise 2.6

Show that a strictly dominated action cannot receive positive probability in a mixed equilibrium.

<details>
<summary>Hint 1</summary>

Replace only the probability assigned to that action.

</details>

<details>
<summary>Hint 2</summary>

Transfer it to a fixed dominating mixture.

</details>

<details>
<summary>Solution</summary>

If probability $lambda>0$ is placed on the action, replace that portion by the dominating mixture. Against equilibrium opponents this raises the conditional payoff strictly, so total payoff increases by $lambda$ times a positive number. This is a feasible unilateral deviation, contradicting equilibrium.

</details>

<a id="dominance-and-rationalisability-ex-7"></a>
### Exercise 2.7

A dominating mixture assigns positive weight to its dominated target. Show how to remove that weight.

<details>
<summary>Hint 1</summary>

Separate the target's own contribution.

</details>

<details>
<summary>Hint 2</summary>

Normalize the remaining mass.

</details>

<details>
<summary>Solution</summary>

Write the mixture as $lambda a+(1-lambda)
u$ with $lambda<1$. Its payoff difference from a is $(1-lambda)(u(
u)-u(a))$. If this is positive against every opponent action, division by the positive factor gives strict dominance by $
u$. The case $lambda=1$ cannot dominate.

</details>

<a id="dominance-and-rationalisability-ex-8"></a>
### Exercise 2.8

Why does strict elimination leaving one action per player imply a unique equilibrium?

<details>
<summary>Hint 1</summary>

The final one-profile game has an equilibrium.

</details>

<details>
<summary>Hint 2</summary>

Lift through the strict-deletion theorem and use zero support on every removed action.

</details>

<details>
<summary>Solution</summary>

The sole final profile is trivially an equilibrium because no deviations remain. Safety lifts it to the original game. Every original equilibrium assigns zero probability to each removed action at the relevant stages, so must use the final singleton actions. Thus no other equilibrium exists.

</details>

<a id="dominance-and-rationalisability-ex-9"></a>
### Exercise 2.9

Explain the difference between rationalisability and equilibrium consistency.

<details>
<summary>Hint 1</summary>

An action may be justified by some belief.

</details>

<details>
<summary>Hint 2</summary>

Different players need not use mutually compatible justifications.

</details>

<details>
<summary>Solution</summary>

Rationalisability retains actions optimal against at least one surviving-opponent belief. It does not require that this belief match the opponent's actual selected mixture. A Nash profile requires each player's belief about the other's randomization to be that very randomization. Survival therefore does not alone establish equilibrium.

</details>

<a id="dominance-and-rationalisability-ex-10"></a>
### Exercise 2.10

Can adding an opponent action destroy strict dominance? Give own payoffs.

<details>
<summary>Hint 1</summary>

Start with two rows ordered strictly at one column.

</details>

<details>
<summary>Hint 2</summary>

Add a second column reversing the comparison.

</details>

<details>
<summary>Solution</summary>

With one column, let A give two and B one, so A strictly dominates B. Add a column where A gives zero and B three. Neither pure row now dominates the other. The original universal comparison ranged over a smaller opponent set; adding a possible state changes its truth conditions.

</details>

## Sources

Osborne and Rubinstein, [*A Course in Game Theory*](https://www.economics.utoronto.ca/osborne/cgt/index.html), develops dominance, beliefs and rationalisability. The safety proof, finite examples and explicit weak-elimination comparison here are original exposition. The geometric converse between mixed dominance and never-best responses is identified as a further separation argument.

## Summary

Strict dominance excludes an action under every opponent belief and supports equilibrium-safe deletion, including mixed equilibria. Weak dominance permits ties and can remove equilibria or yield order-dependent reductions. Mixed dominators are stronger than pure pairwise comparisons. Rationalisability retains choices justified by some surviving-opponent belief, while Nash equilibrium adds mutual consistency.
`;export{e as default};