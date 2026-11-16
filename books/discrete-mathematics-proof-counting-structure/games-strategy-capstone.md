
# Finite Games, Strategy, and a Structural Capstone {#section-1-finite-games-strategy-and-a-structural-capstone}

A mathematical game is a laboratory for quantifiers. “There exists a winning move” means one legal choice survives **every** reply. “This strategy wins” means a rule is defined on every position the opponent can force and eventually reaches the promised outcome. Small examples invite intuition; recursive state structure turns intuition into proof.

This chapter studies finite, deterministic, perfect-information, impartial games under normal play. **Finite** means the reachable state graph has finitely many positions and no directed cycle; consequently every play ends and maximum remaining play length is defined. **Perfect information** means the full position is known. **Impartial** means legal moves depend on the position, not on player identity. **Normal play** means the player with no legal move loses. Changing any hypothesis can change the theory.

<a id="section-5-1-positions-form-a-directed-acyclic-graph"></a>
## 1. Positions form a directed acyclic graph {#section-7-1-positions-form-a-directed-acyclic-graph}

Represent each position by a vertex and each legal move by a directed edge to the resulting position. Because play always ends, no directed cycle can occur along legal play; equivalently, there is a well-founded measure that decreases with each move.

A position is a **P-position** if the previous player—the one who just moved into it—can force a win, assuming perfect play. It is an **N-position** if the next player to move can force a win.

The recursive classification is:

- a terminal position is P;
- a position is N if it has at least one move to a P-position;
- a position is P if every legal move goes to an N-position.

These rules are mutually exclusive and exhaustive for a finite game.

**Proof.** Use induction on the maximum remaining play length. Terminal positions satisfy the base. Assume all followers of a position are classified. If a P follower exists, move there; whatever the opponent does afterward is handled by the P definition, so the current position is N. If no P follower exists, every move gives the opponent an N-position, so the current player cannot force a win and the position is P. ∎

<a id="section-21-2-a-subtraction-game"></a>
## 2. A subtraction game {#section-23-2-a-subtraction-game}

Begin with a heap of $n$ tokens. A move removes $1$ or $2$; taking the last token wins. The terminal heap $0$ is P. Then $1$ and $2$ are N because each can move to $0$. Heap $3$ is P because its moves reach $2$ and $1$, both N. The pattern repeats:

$n$ is P exactly when $n\equiv0\pmod{3}$.

**Proof.** If $n$ is a multiple of $3$, removing $1$ or $2$ produces a nonmultiple. If $n$ is not a multiple of $3$, remove its residue ($1$ or $2$) to reach a multiple. The base $0$ is P, and the recursive P/N rules establish the classification by induction. ∎

The winning strategy is not “always remove two.” It is “move to a multiple of three,” which depends on the current residue.

<a id="section-31-3-strategy-is-a-quantified-rule"></a>
## 3. Strategy is a quantified rule {#section-33-3-strategy-is-a-quantified-rule}

A strategy specifies a legal move for every reachable position in which the player must act. To prove it wins, establish:

1. the recommended move is always legal;
2. it restores a target class of positions;
3. every opponent move leaves a response that restores the class;
4. termination guarantees the process reaches a terminal win.

For the subtraction game from a nonmultiple of three, the target class is the multiples of three. After the strategy moves to $3k$, an opponent removes $r\in \{1,2\}$ and the response removes $3-r$; together the pair removes three. Finiteness ensures eventual arrival at zero after the strategy’s move.

<a id="section-42-4-several-heaps-and-the-limit-of-ordinary-parity"></a>
## 4. Several heaps and the limit of ordinary parity {#section-44-4-several-heaps-and-the-limit-of-ordinary-parity}

In **Nim**, a move reduces exactly one nonempty heap by a positive amount. The P-positions are those whose heap sizes have bitwise exclusive-or (XOR) equal to zero.

For heaps $(3,4,5)$, binary forms are $011$, $100$, $101$, whose XOR is $010$, nonzero. There is a move to zero XOR: reduce heap $3$ to $1$, giving $001 XOR 100 XOR 101=000$.

The full theorem requires two facts:

1. changing one heap from a zero-XOR position always makes XOR nonzero;
2. from a nonzero-XOR position, reduce a heap at the highest set bit of the XOR to make the total XOR zero.

These facts prove the P/N recursion. Ordinary parity of the total token count is insufficient: $(1,1)$ has even total and zero XOR, while $(1,3)$ also has even total but XOR $2$.

The existing **Winning with Invariants** book develops the Nim proof and code in more detail. Here Nim illustrates that the right invariant may be algebraic rather than visually obvious.

<a id="section-57-5-sprague-grundy-values-as-a-generating-rule"></a>
## 5. Sprague–Grundy values as a generating rule {#section-59-5-sprague-grundy-values-as-a-generating-rule}

For a finite impartial normal-play position $P$, define its **Grundy value** recursively:

$$g(P)=\operatorname{mex}\{g(Q): P\to Q\}$$

where $\operatorname{mex}$ is the least nonnegative integer not in the set. Terminal positions have value $0$ because $\operatorname{mex}(\varnothing)=0$. A position is P exactly when its Grundy value is zero.

For the remove-1-or-2 game, the values repeat $0,1,2,0,1,2,\ldots$. The P positions are again multiples of three.

The deeper Sprague–Grundy theorem says a disjoint sum of impartial games behaves like Nim heaps whose sizes are the component Grundy values, combined by XOR. This seed states the theorem as a continuation point rather than proving its full disjoint-sum induction.

<a id="section-69-6-symmetry-strategies-need-a-fixed-response"></a>
## 6. Symmetry strategies need a fixed response {#section-71-6-symmetry-strategies-need-a-fixed-response}

A common idea is to mirror the opponent’s move. A valid symmetry strategy needs:

- an involution of the position (applying it twice returns the original);
- no legal move fixed in a way that prevents a distinct reply, unless that fixed move is handled separately;
- preservation of legality after the opponent moves;
- noninterference between the move and its mirror;
- termination.

On a board symmetric through a center, an opponent may play at the unique center and destroy a naive “respond with the mirror” rule because the mirror is the same occupied location. Strategy proofs must audit fixed points.

<a id="section-81-7-strategy-stealing-proves-existence-but-may-hide-the-m"></a>
## 7. Strategy stealing proves existence but may hide the move {#section-83-7-strategy-stealing-proves-existence-but-may-hide-the-m}

A **strategy-stealing argument** often assumes the second player has a winning strategy, lets the first player make a harmless extra move, and then simulates the alleged second-player strategy to derive a contradiction.

This architecture requires monotonicity: having an extra move or occupied site must never hurt the simulating player. It also may prove only that a first-player winning strategy exists, without identifying the opening move or an efficient procedure.

Therefore “strategy stealing” is not a universal answer for symmetric games. The exact rules, draw possibility, harmlessness of an extra move, and finite termination must be checked.

<a id="section-89-8-mis-re-play-changes-terminal-logic"></a>
## 8. Misère play changes terminal logic {#section-91-8-mis-re-play-changes-terminal-logic}

Under **misère play**, making the last move loses. The terminal position is now N under the convention that the player with no move wins. This reverses base data and can alter patterns near the boundary or throughout the game.

For a one-heap remove-1-or-2 game under misère play, heap $1$ is P: the only move takes the last token and loses. Heap $2$ is N by removing one and leaving the P heap $1$. Heap $3$ is N by removing two and leaving $1$. Heap $4$ is P because moves reach $3$ or $2$, both N. The P positions are $n\equiv1\pmod{3}$, not multiples of three.

Reusing a normal-play invariant without changing the terminal classification is a common error.

<a id="section-97-9-exact-state-experiments"></a>
## 9. Exact state experiments {#section-99-9-exact-state-experiments}

For a bounded finite game, an exact table can compute P/N or Grundy values from terminal states upward. Such a table is valuable when:

- testing a conjectured period;
- locating a smallest counterexample to a greedy strategy;
- checking that every state has been classified;
- comparing normal and misère boundaries.

But a table through $n=1000$ does not prove eventual periodicity. A proof must show why the recurrence state relevant to future values repeats or why a modular classification propagates.

<a id="section-108-dm-ch08-p001-structural-capstone-one-finite-system-many"></a>
## DM-CH08-P001 — Structural capstone: one finite system, many lenses {#section-110-dm-ch08-p001-structural-capstone-one-finite-system-many}

Choose one system with at most eight basic elements. Good examples include a small graph, a family of subsets, a take-away game, or an incidence structure. Produce the following portfolio:

1. **Set specification:** ground set, allowed objects, and equality convention.
2. **Relation audit:** define one relation; test reflexivity, symmetry, antisymmetry, and transitivity with proofs or counterexamples.
3. **Counting model:** count a meaningful family by a bijection, disjoint decomposition, recurrence, or inclusion–exclusion.
4. **Graph model:** define adjacency and prove one connectivity, tree, coloring, or matching claim.
5. **Extremal question:** maximize or minimize a quantity; give both a construction and an upper-bound argument on the chosen size.
6. **Game or move system:** define terminal states, a decreasing measure, and a P/N classification for all bounded states.
7. **Experiment boundary:** enumerate exact small instances and state precisely what the enumeration does and does not prove.
8. **Counterexample:** include one tempting false generalization and its smallest known failure.

The capstone is complete only when representations agree. If the counted objects differ from the graph vertices or the move relation permits an unmodeled state, repair the specification rather than smoothing over the mismatch.

<a id="section-123-11-independence-preview-for-the-advanced-route"></a>
## 11. Independence preview for the advanced route {#section-125-11-independence-preview-for-the-advanced-route}

Many games ask for compatible moves; many graph problems ask for compatible vertices or edges. A hereditary family of compatible subsets is an **independence system**. Heredity says every subset of a feasible set remains feasible.

Matroids add exchange: if independent $I,J$ satisfy $|I|<|J|$, some element of $J\setminus I$ augments $I$. Stable vertex sets of the path $a-b-c$ violate exchange: $\{b\}$ is smaller than $\{a,c\}$, but neither endpoint can be added to $\{b\}$. This explains why “take the heaviest legal move” can fail. The complementary advanced book develops matroid rank, circuits, duality, and the precise greedy theorem.

<a id="section-129-12-common-errors"></a>
## 12. Common errors {#section-131-12-common-errors}

- Forgetting to prove game finiteness before recursive classification.
- Calling one successful line of play a strategy.
- Confusing “some move to P” with “every move to P.”
- Using an invariant that fails to separate initial and target states.
- Mirroring without checking fixed moves and interference.
- Treating strategy stealing as constructive.
- Carrying normal-play base cases into misère play.
- Inferring a period from a finite table without a propagation proof.

<a id="section-140-13-exercises-with-worked-solutions"></a>
## 13. Exercises with worked solutions {#section-142-13-exercises-with-worked-solutions}

<a id="section-142-dm-ch08-e001-subtraction-by-1-or-3"></a>
### DM-CH08-E001 — subtraction by 1 or 3 {#section-144-dm-ch08-e001-subtraction-by-1-or-3}

Classify P-positions when a move removes $1$ or $3$ tokens under normal play.

<a id="section-146-dm-ch08-e001-solution"></a>
#### DM-CH08-E001 — Solution {#section-148-dm-ch08-e001-solution}

Starting from $0$ as P: $1$ is N; $2$ can move only to $1$, so it is P; $3$ can move to $2$ or $0$, so N; $4$ can move to $3$ or $1$, both N, so P. The pattern is P exactly for even $n$. From even $n$, subtracting $1$ or $3$ reaches odd. From odd $n$, subtract $1$ to reach even. Induction establishes the classification.

<a id="section-150-dm-ch08-e002-distinguish-a-play-from-a-strategy"></a>
### DM-CH08-E002 — distinguish a play from a strategy {#section-152-dm-ch08-e002-distinguish-a-play-from-a-strategy}

A player wins one sample play by always removing two in the remove-1-or-2 game. Explain why this is not a winning strategy from every N-position.

<a id="section-154-dm-ch08-e002-solution"></a>
#### DM-CH08-E002 — Solution {#section-156-dm-ch08-e002-solution}

From heap $1$, the position is N but removing two is illegal. From heap $4$, removing two leaves $2$, an N-position for the opponent; the correct move removes one to leave $3$, a P-position. A strategy must prescribe legal winning moves for every reachable position, not repeat one action.

<a id="section-158-dm-ch08-e003-smallest-greedy-independence-failure"></a>
### DM-CH08-E003 — smallest greedy independence failure {#section-160-dm-ch08-e003-smallest-greedy-independence-failure}

On path $a-b-c$, assign weights $w(a)=3$, $w(b)=5$, $w(c)=3$. Compare descending-weight greedy stable-set selection with the optimum.

<a id="section-162-dm-ch08-e003-solution"></a>
#### DM-CH08-E003 — Solution {#section-164-dm-ch08-e003-solution}

Greedy takes $b$ first and then rejects both endpoints because each is adjacent to $b$, total $5$. The set $\{a,c\}$ is stable and has total $6$, so greedy is suboptimal. The exchange failure between $\{b\}$ and $\{a,c\}$ explains the obstruction structurally.

<a id="section-166-dm-ch08-e004-capstone-boundary-statement"></a>
### DM-CH08-E004 — capstone boundary statement {#section-168-dm-ch08-e004-capstone-boundary-statement}

An exhaustive program checks every graph through seven vertices and finds a proposed inequality true. Write an honest conclusion.

<a id="section-170-dm-ch08-e004-solution"></a>
#### DM-CH08-E004 — Solution {#section-172-dm-ch08-e004-solution}

“The inequality holds for every graph in the explicitly enumerated labeled or isomorphism-reduced collection through seven vertices, under the program’s graph convention and exact checks.” It does not establish the inequality for eight or more vertices. The report should also state how graph generation, duplicates, and property calculations were verified.

<a id="section-174-chapter-summary"></a>
## Chapter summary {#section-176-chapter-summary}

Finite impartial games are directed well-founded state graphs. P/N recursion converts the quantifiers of winning play into induction, invariants compress strategy, and Grundy values encode disjoint structure. Symmetry and strategy stealing require explicit hypotheses, while misère play shows how a changed terminal rule propagates backward. The capstone closes the first-course seed by requiring one structure to withstand set, relation, counting, graph, extremal, game, and experiment audits.

<a id="section-178-source-and-verification-note"></a>
## Sources {#section-180-source-and-verification-note}

The references identify modern combinatorial-game treatments. An exact theorem or page locator for the finite normal-play impartial Sprague–Grundy statement is unspecified here; the theorem name makes no claim about priority.
