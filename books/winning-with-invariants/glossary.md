
# Glossary and Index {#section-1-glossary-and-index}

This is a retrieval aid. Compact entries cannot replace the full definitions or hypotheses in their chapters. Chapter numbers follow reading order.

<a id="section-3-glossary"></a>
## Glossary {#section-5-glossary}

**Blue-red Hackenbush.** A partizan game played on a graph grounded to a line; Left cuts blue edges, Right cuts red edges, and disconnected edges fall. Ch. 7.

**Canonical form.** The unique simplest representation of a partizan game, obtained by removing dominated options and bypassing reversible ones. Ch. 6.

**Dame.** A neutral point in Go. Its local game form depends on liberties, ko status, and scoring rules; it is not automatically $\ast$. Ch. 9.

**Disjoint sum ($G + H$).** The game in which a player chooses one component and makes a legal move there. Chs. 2, 4, 6, 8, 9.

**Dominated option.** An option that is never optimal because another option is at least as good. Ch. 6.

**Domineering.** A partizan game on a rectangular grid; Left places vertical dominoes, Right places horizontal dominoes. Ch. 8.

**Dyadic rational.** A rational number of the form $m / 2^{k}$; represented by finite blue-red Hackenbush stalks. Ch. 7.

**Grundy number ($g(P)$).** The minimum excluded value of the Grundy numbers of a position's options; $g(P) = 0$ iff $P$ is a P-position. Chs. 2, 4.

**Impartial game.** A game in which both players have the same legal moves from every position. Chs. 1, 2, 4.

**Infinitesimal game.** A nonzero game dominated in magnitude by every positive number; $\uparrow$ and $\downarrow$ are ordered examples, while $\ast$ is fuzzy with zero. Ch. 9.

**Kayles.** An impartial game in which a move knocks down one pin or two adjacent pins from a row; the row may split into independent subgames. Ch. 5.

**Left.** One named player in a partizan game, regardless of who starts; associated here with vertical and blue moves, and with Black in the abstract Go model. Chs. 6, 7, 8, 9.

**L-position.** A partizan game that Left wins no matter who moves first. Ch. 6.

**Mex ($\operatorname{mex}$).** Minimum excluded value: the smallest nonnegative integer not in a given finite set. Chs. 2, 4.

**Misère play.** The player who makes the last move loses; dramatically harder than normal play for sums of games. Ch. 5.

**Nim.** The impartial game in which a move reduces one heap of counters; solved by XOR of heap sizes. Ch. 3.

**Nim sum ($\oplus$).** Bitwise exclusive-or; the Grundy number of a disjoint sum of impartial games. Chs. 3, 4.

**Normal play.** The player who cannot move loses. Chs. 1, 2, 4.

**N-position.** A position in which the Next player to move wins. Chs. 1, 2.

**Opposition.** The geometric relation in which two kings face with one square between; its consequence depends on the complete legal position. Ch. 9.

**Partizan game.** A game in which Left and Right may have different legal moves from the same position. Chs. 6, 7, 8, 9.

**P-position.** A position in which the Previous player wins (the Next player loses with optimal play). Chs. 1, 2.

**Reversible option.** A Left option with a Right response at most the original game (or dually for Right); bypassing inserts the same-player options of the reversing response. Ch. 6.

**Right.** One named player in a partizan game, regardless of who starts; associated here with horizontal and red moves, and with White in the abstract Go model. Chs. 6, 7, 8, 9.

**R-position.** A partizan game that Right wins no matter who moves first. Ch. 6.

**Sprague–Grundy theorem.** Every finite impartial game has a Grundy number, and the Grundy number of a disjoint sum is the nim sum of the components' Grundy numbers. Chs. 2, 4.

**Star ($\ast$).** The game $\{ 0 \mid 0 \}$; the simplest nonzero impartial game, an N-position. Chs. 6, 7, 9.

**Subtraction game.** An impartial game in which a move removes a specified number of counters from a single pile. Ch. 1.

**Temperature.** For a numeric-stop switch $\{a\mid b\}$ with $a>b$, half the stop difference: $(a-b)/2$. Higher temperature means greater local urgency in the independent-switch model. Ch. 9.

**Terminal position.** A position with no legal moves; under normal play, the player to move loses. Ch. 1.

**Up ($\uparrow$).** The game $\{ 0 \mid \ast \}$; a positive infinitesimal. Ch. 9.

**Zugzwang.** A chess position where having the move worsens that side's W/D/L result relative to the same board with the other side to move. Ch. 9.

<a id="section-69-index-of-theorems-and-constructions"></a>
## Index of theorems and constructions {#section-71-index-of-theorems-and-constructions}

**P/N classification by backward induction (Ch. 1).** In a finite acyclic game, every position is uniquely P or N. Proof by induction on maximum remaining path length.

**Sprague–Grundy theorem (Chs. 2, 4).** $g(P) = \operatorname{mex}(\{g(Q) : P \to Q\})$; $g(G + H) = g(G) \oplus g(H)$. Proof by induction on path length.

**Simplicity theorem for Hackenbush (Ch. 7).** If $G = \{ G^{L} \mid G^{R} \}$ has finite numerical option sets and a dyadic rational $x$ lies strictly between all $G^{L}$ and all $G^{R}$, with no simpler dyadic rational in between, then $G = x$.

**Misère Nim theorem (Ch. 5).** If all heaps have size $1$, P iff the number of heaps is odd; otherwise, P iff the normal-play XOR is $0$.

**Domineering outcome classes (Ch. 8).** Small rectangular boards classified by case analysis and computer search; no simple closed form known.

<a id="section-81-index-of-algorithms"></a>
## Index of algorithms {#section-83-index-of-algorithms}

**Dynamic-programming subtraction solver (Ch. 1).** $O(Lm)$ time, $O(L)$ space.

**Grundy-number table (Chs. 2, 10).** Topological order plus mex; $O(|V| \cdot \text{degree})$ time.

**Nim winning move (Ch. 10).** $O(k)$ time to find a heap to reduce.

**Kayles Grundy computation (Chs. 5, 10).** $O(n^{2})$ time by dynamic programming over splits.

**Retrograde analysis (Ch. 10).** Backward induction from terminal positions; general method for finite acyclic games.
