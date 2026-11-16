var e=`---
parent_id: book-game-theory
chapter_id: extensive-form-backward-induction
title: "Extensive Form and Backward Induction"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Extensive Form and Backward Induction

A matrix lists complete plans and their payoffs, but it can hide when choices are made and what each player observes. A game tree makes those features explicit. In a finite game of perfect information, every decision maker knows the whole preceding history. We can solve the last decisions first, then propagate their consequences backward. This procedure produces a complete contingent strategy, including choices at nodes that its own play never reaches.

Required preparation is finite trees and induction from Discrete Mathematics, and strategic-form equilibrium from [Nash Equilibrium](./nash-equilibrium.md). We use exact real terminal payoffs as mathematical data. No numerical simulation or differential equation is involved. The next chapter defines [Subgame-Perfect Equilibrium](./subgame-perfect-equilibrium.md) and explains precisely which additional restrictions backward induction enforces.

## Histories and decision nodes

**Definition 8.1 (Finite perfect-information tree).** A game consists of a finite rooted tree of histories. Terminal histories have no children and carry a payoff vector in $\\mathbb R^n$. Every nonterminal history $h$ is assigned a player $P(h)$ and a finite nonempty set of available actions, each leading to one child. At every decision node its player observes the exact history.

A history can be represented as the sequence of actions from the root. Prefixes are earlier histories. Finiteness implies every path ends after a bounded number of actions. The model here has no chance nodes and no simultaneous or hidden choices. These restrictions make the proof elementary; extensions must explicitly state probabilities and information sets.

Perfect information is different from complete information about payoffs. Knowing all earlier actions does not logically imply knowing everyone's preferences or private type. In this chapter the whole tree and its payoff functions are specified to the players. Bayesian games later model uncertainty about those data.

Terminal payoff is not necessarily a win-or-lose label. A bargaining outcome may benefit both participants; an investment tree may impose different costs on different players. At each decision node the controlling player maximizes their own coordinate of the continuation payoff vector, not the sum and not automatically player one's coordinate.

## Complete strategies

**Definition 8.2 (Pure strategy on a tree).** A pure strategy for player $i$ specifies an available action at every node controlled by $i$. A strategy profile assigns such a plan to every player. Starting at the root and following these instructions determines one terminal history.

The instructions at unreached nodes remain part of the strategy. They determine what would happen after a deviation and are essential to equilibrium comparisons. A plan saying only what happens along the selected path is incomplete whenever a player might have to act after another choice.

For a player controlling several nodes, their pure-strategy set is the product of available action sets at all those nodes. If two unreached nodes each offer two actions, there are four possible instructions across them, even though at most one may occur along a play. A large strategic-form matrix can therefore arise from a small tree.

Converting the tree to strategic form means using these complete plans as actions and the induced terminal payoffs as payoff functions. Nash equilibrium then permits a player to change their whole plan. It does not automatically require optimal behavior after every history, because some instructions are payoff-irrelevant when that history is never reached.

## The backward algorithm

At a terminal node store its given payoff vector. At an interior node, suppose every child already has a stored continuation vector. The controlling player chooses a child maximizing their own coordinate. Store that child's full vector and record the chosen action. Process nodes in decreasing distance from the leaves, or equivalently by induction on remaining tree height.

A tie may be resolved by any maximizing choice. It is part of the resulting strategy specification. The vectors matter: selecting a child by player two's payoff may change player one's continuation value and hence player one's earlier decision. Keeping only the moving player's maximum would lose the information needed above the node.

**Theorem 8.3 (Backward-induction continuation property).** Every finite perfect-information game defined above has a pure strategy profile whose restriction to the subtree after every history is a Nash equilibrium of that continuation game. Every profile constructed by the backward algorithm has this property.

*Proof.* Induct on subtree height. A terminal subtree has no decisions and satisfies the condition. At a nonterminal root, choose a continuation equilibrium in each child subtree by induction. Let its owner select a child maximizing their own continuation payoff.

A different player cannot change the root action. Their unilateral deviation affects only play inside the selected child, where the continuation equilibrium prevents improvement. The root owner may change the root action and their later instructions. In any chosen child, however, its continuation equilibrium implies that changing later own instructions cannot earn more than that child's assigned payoff against the others' fixed instructions. The selected child already maximizes those payoffs. Thus the owner cannot improve either. The profile is an equilibrium at the root, and all child restrictions have the property by induction. ∎

This argument permits a deviation changing several instructions, not merely the immediate action. That is why it establishes a Nash condition for complete plans. The proof also explains which hypotheses do the work: finite height supplies induction, perfect information makes every node a well-defined continuation game, and finite nonempty actions ensure a maximizing child exists.

## Entry and noncredible threats

**Worked example 8.4 (Entry into a market).** An entrant chooses Out or In. Out ends with payoffs $(0,2)$. After In, an incumbent chooses Fight, giving $(-1,-1)$, or Accommodate, giving $(1,1)$. At the last node the incumbent prefers one to minus one, so backward induction specifies Accommodate.

The entrant consequently compares Out payoff zero with In payoff one and enters. The complete profile is (In, Accommodate). Notice that the incumbent's choice is specified even when discussing the alternative entrant action Out; it is a contingency of the strategy, not an instruction erased from the game.

The strategic form also has the Nash equilibrium (Out, Fight). Given Fight, the entrant prefers zero outside to minus one inside. Given Out, the incumbent's two instructions lead to the same actual payoff two, so neither improves by changing. Yet after entry has actually happened, fighting is worse for the incumbent. The threat supports a strategic-form equilibrium only because its irrational contingency is not reached. The next chapter formalizes this distinction with subgames.

## More than two players and general payoffs

**Worked example 8.5 (Three players, three different objectives).** Player one chooses Stop, ending at $(2,0,0)$, or Continue. After Continue, player two chooses L, ending at $(0,3,1)$, or R. After R, player three chooses X with payoff $(4,1,2)$ or Y with payoff $(1,4,0)$.

Player three chooses X because their own payoff two exceeds zero. At player two's node, L gives three while the R continuation gives one, so player two chooses L. Player one then chooses Stop because two exceeds the Continue payoff zero.

The realized outcome is Stop, but the full profile also says L after Continue and X after R. Maximizing player one's coordinate throughout would wrongly choose R at player two's node. Maximizing total payoff would answer another planning problem. The algorithm must use the owner assigned to each node and propagate the whole payoff vector.

## Ties and multiple solutions

**Worked example 8.6 (A later tie changes the earlier choice).** Player one may Stop for $(1,0)$ or Continue to player two. Player two chooses L giving $(0,1)$ or R giving $(2,1)$. Player two is indifferent: both yield one.

If the selected tie-breaking action is L, player one stops because one exceeds zero. If it is R, player one continues because two exceeds one. Both complete profiles arise by backward induction and satisfy the theorem. The algorithm therefore need not produce a unique outcome. An arbitrary hidden tie rule can select one answer, but it cannot be promoted into a theorem that the game has only that answer.

When payoffs are estimated, ties and near-ties require particular care. An exact equality in the model may be a substantive indifference assumption or an artifact of rounding. A robust conclusion needs a positive decision margin against every alternative at the relevant nodes. The finite theorem remains true with ties, but uniqueness and sensitivity are separate issues.

## Information sets and the limit of the method

Suppose a second player chooses after the first acts but does not observe the first action. Drawing the second player's two possible nodes separately does not give them permission to choose a different action at each. Those indistinguishable histories belong to one information set and require the same instruction. Treating each as a separate perfect-information decision would give the player information they do not have.

A simultaneous matrix game can be drawn as a tree only by representing that lack of observation. The first player moves on paper, but the second player's information set joins the nodes following the first player's alternatives. Backward induction at those individual nodes is invalid because the second player cannot condition on which was reached.

Thus chronological order alone does not justify the perfect-information algorithm. The observation structure matters. The theorem applies to the actual game, not to a drawing that accidentally reveals hidden actions.

## Relation to finite win-or-lose games

The book *Winning with Invariants* studies terminating normal-play games where a player unable to move loses. Assigning terminal winner payoffs one and zero makes them special finite perfect-information games when the complete position and turn are observed. Backward induction then classifies winners.

That connection does not make general payoff games impartial. Different players may have different feasible actions, more than two players may participate, and preferences need not be opposites. Sprague–Grundy theory requires the additional impartial normal-play structure; it cannot replace a general terminal-payoff analysis.

A decreasing measure can establish the finite-height assumption for a rules-based game without first listing every node. In a placement game each move may occupy more cells; in a take-away game the pile decreases. If rules allow repetition, the tree of histories can be infinite even when the set of board configurations is finite. A repetition or draw rule must then be included in the state and payoff model.

## What a solution should report

A useful backward-induction solution reports terminal payoffs, decision ownership, every selected continuation action and the induced path. It should identify ties and any conventions used to select among them. Merely displaying the root outcome does not reveal whether unreached contingencies were optimized correctly.

The proof is conditional on the written model. It does not claim that real decision makers reason through every contingency, trust the payoff table or believe that others will do so. Those are behavioral and informational questions. The mathematical result says that a finite perfect-information tree always admits the indicated continuation-optimal plans.

The next chapter shows that this stronger continuation requirement is subgame perfection, proves a finite one-shot deviation principle, and compares it with Nash equilibrium in complete plans. The distinction is already visible in the entry example: a stable root outcome may rely on a threat that would be abandoned once its decision node is reached.

## A carefully specified chance extension

The principal theorem used a deterministic tree. A finite perfect-information tree can also include chance nodes whose outgoing edges have given nonnegative probabilities summing to one. Assume every chance realization is observed before later decisions and that players evaluate terminal payoff lotteries by expectation.

Backward evaluation then averages the child payoff vectors at a chance node and still maximizes the owner's coordinate at a player node. A player cannot choose a different chance probability merely by deviating; it is part of the rule. The outcome from a strategy profile is now an expected payoff vector and a distribution of terminal histories, rather than necessarily one terminal path.

The existence proof extends by the same finite-height induction. At a chance root, continuation equilibria in every child prevent a unilateral gain conditionally in each child. Their fixed probability-weighted average therefore cannot improve either. At a player root, the maximizing-child argument is unchanged, using the expected vectors supplied below. This establishes a pure contingent equilibrium after every continuation node in this finite observed-chance setting.

Zero-probability branches still have specified continuation strategies if equilibrium is required in every subtree. Their choices do not affect the expected payoff from the original chance root, but the subgame condition evaluates those continuations in their own right. This is analogous to off-path decisions after a player deviation, although the reason for nonoccurrence differs.

The information assumption remains essential. If a chance event selects an unobserved type or hidden action, subsequent decision nodes may belong to one information set. Averaging a chance vector and then optimizing separately at indistinguishable nodes would give a player forbidden conditioning power. Bayesian or imperfect-information analysis is then required.

This extension is not used to broaden the next chapter's stated one-shot theorem without explanation. That theorem is proved for its finite deterministic perfect-information domain. The chance discussion identifies the extra probability and observation assumptions needed for a related result, rather than treating the word random as a harmless annotation on any tree.

## Exercises

<a id="extensive-form-backward-induction-ex-1"></a>
### Exercise 8.1

A root owner chooses terminal payoff vectors $(2,5)$ and $(3,0)$. Which is selected when player one owns the node, and when player two owns it?

<details>
<summary>Hint 1</summary>

Use the owner's coordinate.

</details>

<details>
<summary>Hint 2</summary>

The full vector is propagated after selection.

</details>

<details>
<summary>Solution</summary>

Player one chooses $(3,0)$ because three exceeds two. Player two chooses $(2,5)$ because five exceeds zero. There is no single correct choice without node ownership. Maximizing the sum would happen to select the first vector but would not implement player one's incentives.

</details>

<a id="extensive-form-backward-induction-ex-2"></a>
### Exercise 8.2

List the incumbent's strategic-form actions in the entry example even when the entrant stays out.

<details>
<summary>Hint 1</summary>

A strategy specifies contingencies.

</details>

<details>
<summary>Hint 2</summary>

The unreached decision still has two available instructions.

</details>

<details>
<summary>Solution</summary>

The incumbent has strategies Fight and Accommodate, each specifying what to do after In. Out means that instruction is not executed, not that it is absent from the strategy. Its presence is needed to evaluate an entrant deviation to In and to distinguish Nash from continuation-optimal play.

</details>

<a id="extensive-form-backward-induction-ex-3"></a>
### Exercise 8.3

Verify that (Out,Fight) is a Nash equilibrium in the entry tree.

<details>
<summary>Hint 1</summary>

Hold the incumbent's instruction fixed when the entrant deviates.

</details>

<details>
<summary>Hint 2</summary>

Then hold Out fixed when the incumbent changes instructions.

</details>

<details>
<summary>Solution</summary>

Given Fight, entry gives minus one instead of zero, so the entrant does not improve. Given Out, either incumbent instruction leads to payoff two, so changing it does not improve. Both unilateral conditions hold. The profile still fails continuation optimality because after In the incumbent would prefer Accommodate.

</details>

<a id="extensive-form-backward-induction-ex-4"></a>
### Exercise 8.4

Why must backward induction retain a full payoff vector rather than only the owner's maximum?

<details>
<summary>Hint 1</summary>

An earlier node can belong to another player.

</details>

<details>
<summary>Hint 2</summary>

That player needs their own coordinate of the selected continuation.

</details>

<details>
<summary>Solution</summary>

A later decision selects a terminal outcome using its owner's payoff, but an earlier owner compares their own payoff at that outcome with alternatives. Storing only the later owner's number discards the needed earlier-player coordinate. The three-player example explicitly uses different coordinates at successive nodes.

</details>

<a id="extensive-form-backward-induction-ex-5"></a>
### Exercise 8.5

In the tie example, list both backward-induction outcomes.

<details>
<summary>Hint 1</summary>

Player two's two options both pay one.

</details>

<details>
<summary>Hint 2</summary>

Propagate each tie choice to player one's comparison.

</details>

<details>
<summary>Solution</summary>

Choosing L after Continue makes player one choose Stop, yielding $(1,0)$. Choosing R makes player one choose Continue, yielding $(2,1)$. Both continuation choices maximize player two's payoff. Hence both profiles satisfy backward induction and uniqueness is not implied.

</details>

<a id="extensive-form-backward-induction-ex-6"></a>
### Exercise 8.6

A player controls two nodes with respectively two and three actions. How many pure plans specify both nodes?

<details>
<summary>Hint 1</summary>

A plan chooses one instruction at each node.

</details>

<details>
<summary>Hint 2</summary>

Use the product rule even if the nodes cannot both be reached.

</details>

<details>
<summary>Solution</summary>

There are six plans, the product of two and three. Each gives a complete instruction for either contingency. Counting only the actions on a realized path would omit strategic alternatives and would not define the full strategic form.

</details>

<a id="extensive-form-backward-induction-ex-7"></a>
### Exercise 8.7

Explain why finite board configurations do not imply a finite history tree.

<details>
<summary>Hint 1</summary>

A configuration may repeat.

</details>

<details>
<summary>Hint 2</summary>

Different repetitions are different histories.

</details>

<details>
<summary>Solution</summary>

If moves permit cycling, the same board can recur after arbitrarily many steps, producing an unbounded sequence of histories. A finite configuration set therefore need not give finite remaining play. A stopping or repetition rule must be specified before applying finite-height backward induction.

</details>

<a id="extensive-form-backward-induction-ex-8"></a>
### Exercise 8.8

Can backward induction be applied separately to two decision nodes the player cannot distinguish?

<details>
<summary>Hint 1</summary>

An information set requires one common instruction.

</details>

<details>
<summary>Hint 2</summary>

Separate optimization may choose different actions at those nodes.

</details>

<details>
<summary>Solution</summary>

Not in general. The player cannot condition on the hidden history, so independent nodewise choices may be infeasible. One must represent their information set and solve the corresponding strategic choices. The perfect-information theorem assumes each decision node is observed exactly.

</details>

<a id="extensive-form-backward-induction-ex-9"></a>
### Exercise 8.9

Why is a deviation changing several future instructions covered by Theorem8.3?

<details>
<summary>Hint 1</summary>

Use equilibrium in the child subtree.

</details>

<details>
<summary>Hint 2</summary>

Then compare the root owner's possible children.

</details>

<details>
<summary>Solution</summary>

Within every child, the induction hypothesis prevents improvement through any unilateral change of later instructions. The root owner therefore cannot exceed that child's assigned continuation payoff by changing the rest of their plan. The chosen child maximizes those bounds, so changing both the root action and later instructions cannot improve.

</details>

<a id="extensive-form-backward-induction-ex-10"></a>
### Exercise 8.10

Describe a backward-induction solution with exact ties honestly.

<details>
<summary>Hint 1</summary>

Report all maximizing actions or a declared selection rule.

</details>

<details>
<summary>Hint 2</summary>

Separate existence from uniqueness.

</details>

<details>
<summary>Solution</summary>

One may report the set of maximizing continuations at each tied node, or choose a stated tie rule and give the resulting complete profile. The conclusion should say that this is a backward-induction solution, not the unique solution unless additional arguments exclude alternatives. Payoff perturbations may select different tied branches.

</details>

## Sources

Osborne and Rubinstein, [*A Course in Game Theory*](https://www.economics.utoronto.ca/osborne/cgt/index.html), is the primary reference route for extensive forms and finite perfect-information reasoning. All tree examples and the finite continuation proof here are developed explicitly from the stated rules.

## Summary

A perfect-information tree records histories, decision owners and terminal payoffs. A strategy is a complete contingent plan. Backward induction selects an own-payoff-maximizing continuation at each node and produces equilibrium after every history, including unreached ones. Ties can create different outcomes, and hidden information or unbounded repetition invalidates the simple nodewise argument. Subgame perfection next names and studies the continuation requirement.
`;export{e as default};