var e=`---
parent_id: book-winning-with-invariants
chapter_id: finite-games-and-strategy
title: "Finite Games and Strategy"
level: undergraduate
license: CC BY-SA 4.0
---

# Finite Games and Strategy

A winning line is a sequence of moves. A winning strategy answers a different question: what should a player do after every legal reply the opponent might choose? The distinction is a matter of quantifiers. A proof must supply choices for one player while allowing all choices of the other.

This final chapter connects the book's game calculations to a general finite strategy theorem and a small structural portfolio. It develops the game and capstone ideas of the retained [first-course reading](/books/library-book-discrete-mathematics-proof-counting-structure/games-strategy-capstone/), whose original project and solutions remain available. The preparation is finite-set reasoning, induction, directed graphs, and the preceding examples of explicit game rules.

## 1. Complete states and complete strategies

**Definition 11.1 (A finite perfect-information model).** A model consists of a finite directed acyclic graph, a player to move at every nonterminal vertex, at least one legal successor at each such vertex, and a specified terminal payoff. Both players see the full state and all previous moves. There are no chance moves or simultaneous decisions.

A state must include whatever information determines its legal moves and future payoffs. A history-dependent rule can be made state-dependent by recording the relevant history. One must then prove finiteness and acyclicity for that expanded model. These are hypotheses, not consequences of the words “board game.”

A strategy for Left specifies one legal successor at every Left-turn state under consideration. It may be defined on all such states, including ones that a particular opening choice will not reach. This complete prescription is often the cleanest convention. A strategy defined only on reachable histories is also possible, but its domain must include every history the opponent can force after the strategy's own choices.

A single successful play leaves most such alternatives unspecified. To prove a rule wins, check that its move is legal wherever required, that every opponent reply leaves its guarantee intact, and that play terminates with the desired outcome.

## 2. Backward values prove a strategy theorem

For a simple zero-sum model, let terminal payoffs belong to $\\{-1,0,1\\}$ from Left's perspective: minus one is a Left loss, zero a draw, and one a Left win. Left prefers larger values and Right smaller ones.

**Definition 11.2 (Backward value).** Assign each terminal its payoff. At a Left-turn nonterminal state $P$, set
$$
v(P)=\\max_{P\\to Q}v(Q),
$$
and at a Right-turn state set
$$
v(P)=\\min_{P\\to Q}v(Q).
$$
These extrema exist because the option sets are finite and nonempty.

**Theorem 11.3 (Finite strategy value).** Backward values exist uniquely. From a state of value $c$, Left has a strategy guaranteeing payoff at least $c$ against every Right strategy, and Right has a strategy guaranteeing payoff at most $c$ against every Left strategy. Thus optimal play has value $c$.

**Proof.** Induct on maximum remaining path length. Terminal values are given, and every nonterminal value is uniquely determined from shorter followers, so existence and uniqueness follow.

At each Left-turn state choose a successor attaining the maximum; fix any tie order. At a Right-turn state, every successor has value at least the minimum assigned to that state. Consequently, along play where Left uses the chosen rule, the backward value never decreases: Left's choices keep it equal, and arbitrary Right choices cannot reduce it. The final payoff is therefore at least the starting value. The path is finite by acyclicity.

The symmetric construction chooses a minimum-valued successor at each Right state. Along play using that strategy, arbitrary Left moves cannot increase the backward value and Right's own moves keep it equal. The final payoff is at most the initial value. These two guarantees agree when both players use their constructed strategies. ∎

The proof constructs choices at all states, not merely one path from the initial state. It also shows why a state-based strategy suffices in this complete acyclic model: the chosen optimum depends only on the current state. The theorem does not make the number of states small or make a compactly described game's full expansion efficient.

**Worked example 11.4 (A winning line inside a drawn optimal game).** Let a Left-turn root have options $A,B$, both Right-turn states. From $A$, Right can finish at payoff one or zero. From $B$, Right can finish at one or minus one. Hence $v(A)=0$, $v(B)=-1$, and the root value is $\\max(0,-1)=0$. Left can guarantee a draw by choosing $A$, and Right can then choose zero. There are sample plays ending in a Left win from either opening, but Right need not cooperate. Seeing such a line does not establish a winning strategy.

Under a decisive normal-play rule, terminal payoff depends on whose turn has no move. With no drawn terminals, the theorem yields a forced winner. With drawn terminals it can yield value zero. A zero scoring value should not be confused with a normal-play Grundy value of zero: they answer different questions under different terminal conventions.

## 3. An invariant is a strategy certificate

Suppose a player intends to hand the opponent a position in a target class $C$. A useful certificate has four parts: an opening into $C$, proof that no opponent move stays in $C$ when that matters, a legal restoring reply after every opponent move, and a decreasing measure proving termination. A numerical observation preserved only by some legal moves is insufficient.

For remove-one-or-two subtraction, the target class is the multiples of three. From a nonmultiple $n$, remove its residue modulo three. After an opponent removes $r\\in\\{1,2\\}$ from a positive multiple of three, remove $3-r$. This reply is legal: from a multiple at least three, the opponent leaves at least one or two counters respectively, exactly enough for the complement. The two moves reduce the heap by three and return to the target class.

The base case determines who takes the last counter. Under normal play this strategy leaves zero after the responding player's move. Under misère play the terminal rule is reversed; the same invariant cannot simply be reused. The preceding chapters show how a boundary change can alter the classification.

**Worked example 11.5 (Every reply from a concrete position).** Start remove-one-or-two at heap five. Remove two to leave three. If the opponent removes one, the heap becomes two and the reply removes two to reach zero. If the opponent removes two, the heap becomes one and the reply removes one. Both possible replies are covered and legal. The proof is complete for this small position. From a larger nonmultiple, the same residue argument supplies the induction rather than requiring every long play to be listed.

A good certificate can be shorter than an exhaustive game tree. The invariant compresses many opponent branches into one statement that holds for all allowed replies. This is why proving the invariant and its legality is more informative than printing a large collection of successful sample games.

## 4. Symmetry needs an available partner

**Worked example 11.6 (The fixed centre is part of the proof).** A board has five cells labelled $1,\\ldots,5$. Each move occupies any one unused cell; the last move wins. Reflect labels by $i\\mapsto6-i$. A proposed second-player mirror strategy is incomplete because a first move at cell three is its own mirror. Instead the first player occupies three, leaving pairs $(1,5)$ and $(2,4)$. After every opponent move, occupy its unused partner. The partner is distinct and available, and the first player therefore makes the last move. This agrees with the simpler count that every play has exactly five moves.

The fixed point did not disappear because the picture was symmetric. It had to be handled explicitly. Moreover the proof uses the rule that occupying one cell does not forbid its partner. If occupying a cell also blocked neighbouring cells, the same reflection could yield an illegal response and would require a new argument.

Strategy stealing is another method that needs its own hypotheses. An extra opening move must be harmless in every simulated continuation, and draws or changes in legal options must be addressed. The phrase alone does not create a winning move. The first-course reading retains that architectural discussion; the results here use explicit backward choices or response rules whose legality is visible.

## 5. Count the state model and the play model separately

Consider remove-one-or-two with states $0,\\ldots,6$. There are seven states. State one has one outgoing edge, states two through six have two each, and zero has none, so there are eleven directed edges. A state with many histories still appears once in this directed graph.

Reachability gives a partial order: say $a\\preceq b$ when $a$ is reachable from $b$. Reflexivity uses the empty path, transitivity concatenates paths, and antisymmetry follows because a nontrivial cycle is impossible. In this specific game every smaller heap is reachable by repeated single removals, so the relation is precisely the ordinary numerical order on these seven states.

**Worked example 11.7 (Counting complete plays).** Let $c(n)$ be the number of move sequences taking heap $n$ to zero by removals one or two. Put $c(0)=1$, counting the empty sequence, and $c(1)=1$. For $n\\ge2$, split sequences by their first removal to obtain
$$
c(n)=c(n-1)+c(n-2).
$$
The two classes are disjoint because their first moves differ. Thus $c(2),\\ldots,c(6)=2,3,5,8,13$. The game graph has seven vertices but thirteen complete plays from state six. Different paths can merge at the same later heap; state count and path count are different quantities.

A strategy count is different again. Under the complete-state convention, if a player has $d_1,\\ldots,d_s$ legal choices at that player's decision states, the number of complete deterministic prescriptions is $\\prod_i d_i$. This counts choices even at states not reached after the prescription's own opening. Counting only reachable reduced strategies gives another object and may give another number. Neither count is the number of legal plays.

## 6. A small structural portfolio

The retained first-course capstone asks for one finite system viewed through sets, relations, counting, graphs, extremal arguments, games, and exact examples. The subtraction model above provides a fully specified starting point.

Its ground set of states is $\\{0,\\ldots,6\\}$; equality is equality of integers. Its move relation consists of the eleven edges already described. Its reachability relation is a partial order. Complete plays are compositions into ones and twos, counted by the proved recurrence. The largest possible play length from six is six, attained by always removing one; no longer play is possible because every move removes at least one. The shortest length is three, attained by three removals of two; no shorter play can remove six counters when each move removes at most two.

The P-positions are zero, three, and six. A complete classification follows from the residue proof, and a strategy from each N-position specifies the legal move to the previous multiple. A counterexample to “always remove two” is heap four: that move leaves two, from which the opponent wins immediately. The correct move leaves three.

Each representation can be checked against the others. The path recurrence uses the same legal removals as the game graph. The decreasing measure is the same heap size used to order states. The winning response never points outside the specified state set. If an encoding instead allowed removing three, all of those claims would need to be revisited.

## 7. Conclusions should retain their scope

A finite table can verify every state in a declared finite model when all states and moves are accounted for. A universal residue theorem covers arbitrary starting heap sizes because induction proves propagation. These are different achievements. A table ending at six cannot establish a modular pattern forever merely because the first entries agree.

Likewise, an algorithm that returns a move must explain its legal inputs and why a move exists whenever promised. A position classified as losing need not admit a winning recommendation. An optimal policy for a truncated horizon need not remain optimal after the horizon is extended. These distinctions preserve the connection between a mathematical statement and the question actually answered.

The book's central habit is therefore transferable: specify a state, identify the quantifiers in a claim, expose a decreasing or well-founded structure, and justify the recommended move against all replies. Board puzzles, abstract move graphs, scoring trees, and exact finite calculations become comparable only after their hypotheses have been made explicit.

## Exercises

### Exercise 11.1
<a id="finite-games-and-strategy-ex-1"></a>

In the tree of Worked example11.4, explain why Left's existence of a path to payoff one does not prove a forced win.

<details>
<summary>Hint 1</summary>

**Hint.** Identify who chooses at $A$ and $B$.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** A strategy must tolerate the lower payoff chosen by an adversarial Right player.

</details>

<details>
<summary>Solution</summary>

**Solution.** After Left chooses $A$, Right may choose zero instead of one. After Left chooses $B$, Right may choose minus one instead of one. The root value is consequently zero, not one. A path ending at one proves only that some cooperative sequence reaches that payoff; the universal quantifier over Right's legal replies is missing.

</details>

### Exercise 11.2
<a id="finite-games-and-strategy-ex-2"></a>

Prove that a complete state-based optimum choice exists at every nonterminal vertex of the finite model.

<details>
<summary>Hint 1</summary>

**Hint.** The option set is finite and nonempty.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Use a fixed tie order among successors attaining the relevant extremum.

</details>

<details>
<summary>Solution</summary>

**Solution.** Every follower already has a value by height induction. A finite nonempty collection has a maximum and minimum, attained by at least one follower. At a Left vertex choose the first maximum-valued follower in a fixed ordering; at a Right vertex choose the first minimum-valued follower. This makes the prescription deterministic and legal at every required state. It does not require the game graph to be a tree.

</details>

### Exercise 11.3
<a id="finite-games-and-strategy-ex-3"></a>

For remove-one-or-two at heap eight, give an opening and prove the restoring response is legal after every opponent move.

<details>
<summary>Hint 1</summary>

**Hint.** Move first to the largest smaller multiple of three.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** From a positive multiple of three, complement an opponent removal $r$ by $3-r$.

</details>

<details>
<summary>Solution</summary>

**Solution.** Remove two from eight to reach six. If the opponent removes one, at least two remain, so removing two is legal; if the opponent removes two, at least one remains, so removing one is legal. The pair of moves removes three and returns to a multiple. Repeating reaches zero after the strategy's move. The proof uses every possible opponent removal rather than one sample line.

</details>

### Exercise 11.4
<a id="finite-games-and-strategy-ex-4"></a>

Under the five-cell occupancy rules, why is a second-player reflection response undefined after a first move at cell three?

<details>
<summary>Hint 1</summary>

**Hint.** The reflection sends label $i$ to $6-i$.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** A legal move must choose an unused cell.

</details>

<details>
<summary>Solution</summary>

**Solution.** Cell three is fixed by reflection. Once the first player occupies it, its reflected cell is already occupied, so the proposed reply is illegal. A symmetry proof must handle fixed moves explicitly. The first-player strategy that takes the centre before mirroring avoids this obstruction because every remaining pair has two distinct cells.

</details>

### Exercise 11.5
<a id="finite-games-and-strategy-ex-5"></a>

Prove the eleven-edge count for the state graph $0,\\ldots,6$, then count the edges for $0,\\ldots,N$ when $N\\ge1$.

<details>
<summary>Hint 1</summary>

**Hint.** Classify states according to whether one or both removals are legal.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Only state one has exactly one option.

</details>

<details>
<summary>Solution</summary>

**Solution.** State zero has no option, state one has one, and each state two through $N$ has two. Therefore the count is $1+2(N-1)=2N-1$. At $N=6$, this is eleven. The case $N=0$ is separate and gives zero edges; inserting it into the formula would incorrectly produce minus one.

</details>

### Exercise 11.6
<a id="finite-games-and-strategy-ex-6"></a>

Count the complete remove-one-or-two plays from heap seven, explaining the recurrence and its base case.

<details>
<summary>Hint 1</summary>

**Hint.** Partition by the first removal.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The empty play from zero contributes one, not zero.

</details>

<details>
<summary>Solution</summary>

**Solution.** Let $c(0)=1,c(1)=1$, and $c(n)=c(n-1)+c(n-2)$ for $n\\ge2$. A first removal of one leaves a complete play from $n-1$, and a first removal of two leaves one from $n-2$; the classes are disjoint and exhaustive. Continuing the worked values gives $c(7)=13+8=21$. This counts move sequences, not distinct visited states.

</details>

### Exercise 11.7
<a id="finite-games-and-strategy-ex-7"></a>

A player's decision states have two, two, and three legal choices. How many complete state-based deterministic strategies exist under the chapter's convention?

<details>
<summary>Hint 1</summary>

**Hint.** Specify one choice independently at each decision state.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Choices at counterfactual states are included in this convention.

</details>

<details>
<summary>Solution</summary>

**Solution.** There are $2\\cdot2\\cdot3=12$ complete prescriptions. This product includes choices at every specified state even if an opening decision makes one of them unreachable in a particular play. It is therefore not automatically the number of reduced reachable strategies or the number of paths. The counting object must be stated before applying the product rule.

</details>

### Exercise 11.8
<a id="finite-games-and-strategy-ex-8"></a>

Prove the minimum and maximum numbers of moves taking heap six to zero with removals one or two.

<details>
<summary>Hint 1</summary>

**Hint.** Use an upper and lower bound on the amount removed per move.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Then exhibit plays attaining both bounds.

</details>

<details>
<summary>Solution</summary>

**Solution.** At least three moves are necessary because each removes at most two counters; three removals of two attain that bound. At most six moves are possible because every move removes at least one counter; six removals of one attain that bound. The bounds and matching constructions prove both extrema. Merely exhibiting two plays would not rule out a shorter or longer one.

</details>

### Exercise 11.9
<a id="finite-games-and-strategy-ex-9"></a>

Why does the finite strategy theorem not prove that solving every compactly described game is computationally efficient?

<details>
<summary>Hint 1</summary>

**Hint.** Distinguish the size of a complete state graph from the size of a short rules description.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** A theorem giving backward choices can still require inspecting many states.

</details>

<details>
<summary>Solution</summary>

**Solution.** The proof assumes the finite graph and its terminal data are available and then uses its well-founded order. A small board or concise ruleset can describe an enormous number of states and edges. Expanding and inspecting that graph may therefore be expensive. Existence of an optimal strategy does not supply a polynomial bound in every possible input encoding.

</details>

### Exercise 11.10
<a id="finite-games-and-strategy-ex-10"></a>

Write a precise conclusion for a correct exhaustive classification of every reachable state from one fixed initial heap under one specified subtraction set.

<details>
<summary>Hint 1</summary>

**Hint.** Name the initial bound and the actual move set.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Keep the finite result separate from a theorem about every starting size.

</details>

<details>
<summary>Solution</summary>

**Solution.** One may conclude that every state reachable from the declared initial heap under the declared positive subtraction set has the reported outcome or value, provided the complete legal-option enumeration and recursion are correct. The result does not classify larger heaps or a different move set by itself. A universal pattern needs an inductive propagation proof or another theorem beyond the finite classification.

</details>

## Sources

Original exposition extending the retained [Finite Games, Strategy, and a Structural Capstone](/books/library-book-discrete-mathematics-proof-counting-structure/games-strategy-capstone/) source. Its original portfolio, examples, and solutions remain available. Further primary book reading is Siegel, [*Combinatorial Game Theory*](https://doi.org/10.1090/gsm/146). The finite max/min theorem and the structural calculations used here are proved in the text.

## Summary

A strategy supplies legal choices against every opponent reply; one winning path does not. Finite backward values give matching guarantees for both players, while invariants and symmetry can compress the resulting policy when their legality is proved. States, paths, and complete strategies are different counting objects. The capstone connects these distinctions to relations, recurrences, extremal bounds, and a single consistent finite move model.

`;export{e as default};