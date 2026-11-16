var e=`---
parent_id: book-winning-with-invariants
chapter_id: go-amazons-chess-case-studies
title: "Go, Amazons, and Chess: Case Studies"
level: undergraduate
license: CC BY-SA 4.0
---

# Go, Amazons, and Chess: Case Studies

A familiar board game does not automatically satisfy the hypotheses of an impartial normal-play theorem. Its legal state may include history, its players may control different pieces, and a terminal position may be a draw or carry a numerical score. The useful skill is to identify a mathematical model before choosing an invariant.

This chapter brings together the retained readings on [Amazons](amazons.md), [Go](go-and-combinatorics.md), and [chess endgames](chess-endgames.md). Those sources keep their original examples and solutions. The primary treatment here develops a few fully specified small models rather than making claims about unrestricted play. Preparation is the partizan and decomposition language of the preceding chapters.

## 1. Three questions about a proposed decomposition

A state must determine all legal options and terminal outcomes. Pieces on squares may be enough for one ruleset, while another also needs the player to move, a repetition history, or scoring information. If two records admit different legal options, they must not be identified merely because their board pictures match.

A decreasing integer measure proves termination when every move strictly reduces it and it is bounded below. Counting the number of board arrangements proves only that the visible state space is finite. A directed cycle can still support endless repetition unless rules stop it or history is incorporated.

Finally, regions form independent components only when a move in one changes no legal option or terminal interpretation in another. Physical distance is not sufficient. Long-range lines, shared liberties, ko threats, and global scoring can couple regions. A claimed sum decomposition is a theorem about the stated rules, not a visual impression.

## 2. Amazons has a monotone resource

For the finite-board model here, Left and Right control their own queen-like pieces. A move relocates one owned piece along an unobstructed rank, file, or diagonal to an empty square, then shoots an arrow from the new square along such a line to another empty square. The arrow square becomes permanently blocked. The arrow may land on the piece's newly vacated starting square if that line is open. A player with no legal complete move loses.

**Proposition 9.1 (Amazons termination).** From a position with $e$ empty, unblocked squares, every play has at most $e$ moves.

**Proof.** Relocating a piece fills its destination but empties its starting square, leaving the empty-square count unchanged. The arrow then blocks one empty square, decreasing the count by exactly one. The count is a nonnegative integer, so there can be at most $e$ complete moves. ∎

The count includes both players' moves. It supplies an upper bound, not a promise that every empty square can eventually receive an arrow. Geometry may stop a player sooner.

**Worked example 9.2 (One owned piece in a three-square corridor).** Label three collinear unblocked squares $1,2,3$, with a White piece on square one and no Black piece in the isolated region. White can move to two and shoot back to one, then move to three and shoot back to two. This is a White-only path of two moves, matching the initial empty-square bound two. A different first move, from one to three with an arrow to two, ends local play after only one move because the arrow separates the piece from square one. Thus the maximal move resource is two, although some legal choices spend it inefficiently.

A finite isolated region in which only White ever has a move is represented by a nonnegative integer. This follows inductively from the number rule: a terminal region is zero, and a region whose Left options are nonnegative integers and whose Right option set is empty has value one greater than its largest Left-option value. Equivalently its value is the maximum length of a White-only path. The analogous Black-only region has the negative integer value.

This one-sided statement does not assign integers to arbitrary mixed-colour regions. Both colours' options may produce non-number partizan values, so normal-play XOR is unavailable.

**Worked example 9.3 (Independent resources with an outcome proof).** Combine the White corridor just analysed, of value two, with an isolated Black-only two-square corridor of value minus one. In the latter region Black has one move, obtained by relocating the piece and shooting at the vacated square. White can guarantee two separate moves in the first region. If White starts, White makes the first of those moves, Black uses its only move, and White makes the last. If Black starts, Black uses its move, after which White moves and Black has none. White therefore wins whichever player starts: the sum is L, agreeing with $2+(-1)=1$.

For geometric independence, use barriers permanent under every legal future move. For example, if the unblocked movement graph joining every unobstructed queen-neighbour step has distinct components, neither a moving piece nor an arrow can cross between them. Blocking additional squares cannot create a connection. By contrast, separating regions only according to current empty squares can be unsafe if a piece later vacates a square that opens a line.

## 3. Go motivates scoring models, not automatic normal play

Capture can increase the number of empty intersections in Go. Therefore the empty-square argument from Amazons does not prove termination. A repetition rule and a passing rule must be specified. Shared liberties or external ko threats can also change which local moves are safe, preventing an independent-region model.

We can nevertheless learn from a completely specified abstract scoring model. This is not a claim that a named board diagram has the model's value. A legal diagram would need its boundary stones, liberties, repetition rule, terminal score convention, and independence assumptions checked first.

**Definition 9.4 (A one-move scoring switch).** A component $A=\\{a\\mid b\\}$, with $a>b$, is an unfinished region. If Black moves there first it finishes with score $a$ for Black; if White moves there first it finishes with score $b$ for Black. In a sum, players alternate, each move finishes one unfinished component, and the final scores add. Black maximizes the total and White minimizes it.

Define its midpoint $m=(a+b)/2$ and half-swing $t=(a-b)/2$. These describe the two terminal stops as $m+t$ and $m-t$. A larger midpoint is a larger score baseline; a larger half-swing means more depends on who addresses the component first.

**Worked example 9.5 (A hotter component need not have a larger midpoint).** Take $A=\\{5\\mid1\\}$ and $B=\\{4\\mid3\\}$. Their midpoints are three and $7/2$, while their half-swings are two and $1/2$. If Black starts in $A$, White must finish $B$, giving score $5+3=8$. If Black starts in $B$, White finishes $A$, giving $4+1=5$. Thus Black prefers $A$ despite its smaller midpoint. If White starts, White likewise chooses $A$, yielding $1+4=5$ instead of $3+5=8$.

**Proposition 9.6 (Two-switch choice).** For two switches $A=\\{a\\mid b\\}$ and $B=\\{c\\mid d\\}$ under Definition 9.4, the player to move can choose a switch of larger half-swing without worsening that player's optimal score.

**Proof.** If Black chooses $A$, the final score is $a+d$; choosing $B$ gives $c+b$. Their difference is $(a-b)-(c-d)=2(t_A-t_B)$, so the larger half-swing is preferable. White chooses between $b+c$ and $d+a$ and prefers the smaller; the same difference gives the same component choice. Equality permits either. ∎

This is a theorem for two one-move scoring switches with no extra pass or outside move. It is not a general proof that every Go player should always select the hottest-looking board region. More complex local trees, global passing incentives, and dependencies need additional arguments. Nor should the scoring braces be mistaken for an impartial mex recurrence: terminal scores are real outcomes of the model, not heap values.

## 4. Chess needs win, draw, and loss

A chess state includes the side to move and all rule information affecting future legality or termination. The same pieces with different castling rights, en-passant rights, or relevant history can have different options. A state containing history can be larger than a bare board-position record.

Stalemate is especially decisive for modelling. A player with no legal move who is not in check draws in chess, whereas under normal play having no move loses. Replacing a chess stalemate by a normal-play terminal loss can reverse classifications of its predecessors.

**Worked example 9.7 (A fully specified stalemate).** Put White's king on $g6$, White's pawn on $h7$, and Black's king on $h8$, with Black to move and no other pieces. The kings are not adjacent and Black is not currently attacked. Its candidate neighbouring squares are $g8,g7,h7$. The pawn attacks $g8$; White's king attacks $g7$ and protects the pawn on $h7$. None is a legal Black destination. Black therefore has no legal move and is not in check: this is stalemate and a draw. Merely labelling every no-move state P would assign the wrong result.

This example does not assert zugzwang. To prove zugzwang one compares the complete position's outcome with the other side to move and proves that the obligation to move worsens the relevant player's result. Opposition similarly describes a relation between kings, not an automatic win independent of pawns, board edges, and spare moves.

## 5. A finite cyclic model can still be solved

Suppose a finite directed graph includes the player to move in each state and alternates turns along edges. Some terminal states are declared wins, losses, or draws for the player to move. Every nonterminal state has an option. An infinite play is declared drawn. These explicit conventions define an abstract win/draw/loss model.

Start with known terminal wins $W$ and losses $L$. Repeatedly add a state to $W$ if some option is in $L$, and add a nonterminal state to $L$ if every option is in $W$. Terminal draws remain draws. Because the graph is finite, this process eventually stops.

**Theorem 9.8 (Residual states are draws).** At termination, every unclassified state in this model is drawn under optimal play.

**Proof.** The classified winning and losing states have the claimed strategies by induction on the round when they were added. A winning state has a move to an earlier loss; every move from a newly classified loss reaches an earlier win. These ranks decrease along the appropriate forcing play, so the strategy reaches a terminal result.

Now let $R$ contain the residual states, including terminal draws. A nonterminal state in $R$ has no option in $L$, or it would have been added to $W$. It also has an option in $R$, because otherwise every option would be in $W$ and the state would have been added to $L$. Either player can therefore keep play in $R$ whenever it is that player's turn. If the opponent instead moves into $W$, the player receiving that state can force a win. By remaining in $R$, a player can avoid losing: play either reaches a terminal draw or continues forever, which is drawn by convention. Both players have such a nonlosing strategy, so neither can force a win. ∎

This theorem needs its terminal and infinite-play conventions. A faithful chess analysis must additionally represent the relevant draw rules, rather than silently replacing them by the abstract model. With a fixed remaining-ply bound one may instead unfold play into a finite tree and declare an unfinished bound endpoint drawn; that solves a bounded model, not all unrestricted endgames.

## 6. What transfers across the cases

Amazons supplies a decreasing resource and may yield independent partizan regions. Abstract Go switches illustrate score optimisation after local rules are fixed. Chess exposes the need for draw outcomes and complete rule state. None of these conclusions follows merely from a board being finite.

The retained individual readings provide additional examples and specialist continuations. When using them, ask what a theorem actually assumes: normal play or scoring, impartial or partizan options, acyclic or cyclic state evolution, a local model or the full board. The next chapter turns such explicit mathematical specifications into algorithms.

## Exercises

### Exercise 9.1
<a id="go-amazons-chess-case-studies-ex-1"></a>

Prove the empty-square termination bound for the stated Amazons model, including the relocation phase.

<details>
<summary>Hint 1</summary>

**Hint.** Count the empty squares before the move and after each phase.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The starting square is vacated when the destination is filled.

</details>

<details>
<summary>Solution</summary>

**Solution.** Relocation fills one empty destination and creates one empty starting square, so it does not change the empty count. The arrow then permanently blocks one empty square, decreasing the count by exactly one. From $e$ initially empty squares there can be at most $e$ complete turns. The proof applies to the specified full move, not merely to the fact that the board has finitely many arrangements.

</details>

### Exercise 9.2
<a id="go-amazons-chess-case-studies-ex-2"></a>

In the three-square White-only corridor, exhibit a two-move path and a one-move path ending local play.

<details>
<summary>Hint 1</summary>

**Hint.** Use the vacated starting square as an arrow target for the longer path.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** For the shorter path, block the middle square.

</details>

<details>
<summary>Solution</summary>

**Solution.** For two moves, move $1\\to2$ and arrow to one, then $2\\to3$ and arrow to two. For one move, move $1\\to3$ and arrow to two. The remaining empty square one is then inaccessible across the blocked middle square. Thus the maximum move resource is two, although not every legal line achieves it.

</details>

### Exercise 9.3
<a id="go-amazons-chess-case-studies-ex-3"></a>

Explain why two visually separate empty areas do not necessarily form independent Amazons components.

<details>
<summary>Hint 1</summary>

**Hint.** An owned piece can later vacate a square and open a line.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Independence must hold after every legal future move, not only in the current empty-cell picture.

</details>

<details>
<summary>Solution</summary>

**Solution.** A decomposition based only on currently empty squares can ignore paths through squares occupied by pieces that may later relocate. Once such a square is vacated, a move or arrow can interact with the supposed other region. To justify a sum, use permanent barriers or prove directly that no future move changes the other region's options. Current geometric appearance alone does not prove that invariant.

</details>

### Exercise 9.4
<a id="go-amazons-chess-case-studies-ex-4"></a>

For switches $A=\\{7\\mid3\\}$, $B=\\{6\\mid5\\}$, find midpoints and half-swings and prove Black's optimal first choice in the two-switch model.

<details>
<summary>Hint 1</summary>

**Hint.** Calculate both possible final scores, not just an informal urgency label.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Black moving in one switch leaves White to finish the other.

</details>

<details>
<summary>Solution</summary>

**Solution.** The midpoints are five and $11/2$, and the half-swings are two and $1/2$. Starting in $A$ gives $7+5=12$; starting in $B$ gives $6+3=9$. Black therefore chooses $A$. This agrees with the larger half-swing despite its smaller midpoint, under the exact two-move scoring rules.

</details>

### Exercise 9.5
<a id="go-amazons-chess-case-studies-ex-5"></a>

Why does a numeric local score not justify applying the Sprague–Grundy XOR theorem to a Go endgame?

<details>
<summary>Hint 1</summary>

**Hint.** Identify the terminal convention and whether the options are impartial.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The XOR theorem concerns nonnegative mex values under normal play, not arbitrary terminal payoffs.

</details>

<details>
<summary>Solution</summary>

**Solution.** A terminal score is an evaluation for Black's scoring objective; it need not be a Grundy value or a normal-play win/loss result. Black and White generally also have different local options. Ko threats, passes, or shared liberties may prevent independence. Each issue changes a hypothesis of the XOR theorem, so numerical labels alone cannot turn the scoring model into an impartial disjoint sum.

</details>

### Exercise 9.6
<a id="go-amazons-chess-case-studies-ex-6"></a>

Verify all candidate moves in the stated $Kg6,Ph7$ versus $Kh8$ stalemate, with Black to move.

<details>
<summary>Hint 1</summary>

**Hint.** List the three neighbouring squares available at the corner.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Check attacks separately from whether the starting square is attacked.

</details>

<details>
<summary>Solution</summary>

**Solution.** Black's only neighbouring board squares are $g8,g7,h7$. The White pawn attacks $g8$, and White's king attacks $g7$ and $h7$, so every candidate is illegal. Black's current square $h8$ is attacked by neither piece. With no other Black piece, there is no legal move and no check, hence stalemate. The chess result is a draw rather than a normal-play loss.

</details>

### Exercise 9.7
<a id="go-amazons-chess-case-studies-ex-7"></a>

A finite move graph consists of two nonterminal states $A\\to B\\to A$, with alternating turns and infinite play drawn. Classify them.

<details>
<summary>Hint 1</summary>

**Hint.** Neither state is a terminal loss or has an exit to one.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Use the specified infinite-play outcome rather than acyclic P/N induction.

</details>

<details>
<summary>Solution</summary>

**Solution.** Every play alternates between the two states forever, so every play is drawn under the stated convention. The win/loss propagation starts with no terminal win or loss and classifies neither state. Both remain residual, agreeing with Theorem9.8. A finite number of states has not made the graph acyclic.

</details>

### Exercise 9.8
<a id="go-amazons-chess-case-studies-ex-8"></a>

Add an option from $A$ in the preceding graph to a terminal loss $T$ for the player receiving $T$. Classify $A,B$.

<details>
<summary>Hint 1</summary>

**Hint.** A player wins by moving to a loss for the opponent.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** After classifying $A$, inspect the sole move from $B$.

</details>

<details>
<summary>Solution</summary>

**Solution.** State $A$ is winning because it can move directly to $T$. State $B$ is losing because its only move gives the opponent the winning state $A$. Thus a cycle need not imply a drawn optimal outcome: an available forced-win exit changes the classification. The round when each state is discovered provides a decreasing rank for the forcing strategy.

</details>

### Exercise 9.9
<a id="go-amazons-chess-case-studies-ex-9"></a>

Explain why an endgame record containing only piece squares can be incomplete.

<details>
<summary>Hint 1</summary>

**Hint.** Consider two equal board pictures with different legal rights or histories.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** A complete state determines both options and terminal rules.

</details>

<details>
<summary>Solution</summary>

**Solution.** The side to move, castling and en-passant rights, and relevant repetition or move-count history can affect legal moves or draws without changing the displayed piece squares. Therefore a board-only identifier may merge mathematically different states. A solver or proof must either include the relevant information or explicitly restrict to a model in which it is fixed and irrelevant.

</details>

### Exercise 9.10
<a id="go-amazons-chess-case-studies-ex-10"></a>

Describe exactly what a finite remaining-ply bound proves about a chess-like model.

<details>
<summary>Hint 1</summary>

**Hint.** Specify the endpoint outcome at the bound.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Distinguish the bounded game tree from unlimited continuation.

</details>

<details>
<summary>Solution</summary>

**Solution.** Fix a maximum number of remaining plies and a rule declaring an unfinished endpoint drawn. Backward induction then solves that finite horizon model, with ordinary terminal outcomes checked earlier in a line. Its result does not establish an unrestricted win if that win needs more plies, and a drawn horizon result may hide a later forced win. The bound and endpoint convention are part of the theorem being proved.

</details>

## Sources

Original exposition reorganising the retained [Amazons](amazons.md), [Go](go-and-combinatorics.md), and [Chess Endgames](chess-endgames.md) readings, which remain intact. The concrete king, pawn, and stalemate rules use the primary [FIDE Laws of Chess](https://handbook.fide.com/chapter/E012023), Articles3 and5. The switch calculation is an explicitly defined abstract scoring model, not a claimed value of an unspecified Go diagram. Further combinatorial-game background is Siegel, [*Combinatorial Game Theory*](https://doi.org/10.1090/gsm/146).

## Summary

Amazons has a strictly decreasing empty-square resource, but local move counts still depend on geometry. Independent scoring switches permit an exact two-choice comparison; applying such a model to Go requires further local-rule evidence. Chess distinguishes stalemate from normal-play loss and may require cyclic win/draw/loss reasoning with complete rule history. The right invariant depends on the specified state, moves, and terminal outcomes.

`;export{e as default};