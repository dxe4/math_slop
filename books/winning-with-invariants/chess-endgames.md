
# Chess Endgames

Chess endgames are the final phase of a chess game, when few pieces remain on the board. Despite the reduced material, endgames often contain the deepest tactical and strategic ideas. This chapter studies chess endgames from a combinatorial perspective, focusing on positions where the theory of zugzwang, opposition, and corresponding squares provides exact results.

## 9.1 Endgame classification

A chess endgame is typically defined as the phase after most pieces have been exchanged, leaving only kings, pawns, and perhaps a few minor or major pieces. For combinatorial analysis, we restrict attention to **pawn endgames** and **king-and-pawn endgames**, where the rules are simple enough for exact analysis.

In king-and-pawn endgames, the only pieces are kings and pawns. Pawns move forward one square (or two from their starting rank), capture diagonally, and promote to a queen, rook, bishop, or knight upon reaching the far rank. Kings move one square in any direction.

## 9.2 Zugzwang

**Zugzwang** is a position where having the move worsens a player's result compared with the same board and the other side to move. Chess results have three values—win, draw, and loss—so zugzwang does not automatically mean “the next player loses.” A side may be forced from a win to a draw, or from a draw to a loss. Any claimed example must specify a legal position, the side to move, and the result of every relevant legal move.

## 9.3 Opposition

The **opposition** is a fundamental concept in king-and-pawn endgames. Two kings are in opposition when they face each other with one square between them on a rank, file, or diagonal. The player who is **not** in control of the opposition must give way.

In a king-and-pawn endgame, the attacker tries to escort the pawn to promotion while the defender tries to capture it or reach a drawn blockade. Merely reaching the promotion square at one moment does not prove a draw: the attacking king may force the defender away. Opposition is one tool for proving which side can realize its plan.

Opposition is a geometric relation, not a result by itself. Whether taking or yielding it wins depends on pawn locations, board edges, spare tempi, and the side to move. A correct analysis follows the resulting legal king and pawn moves through promotion, capture, or a drawn terminal state.

## 9.4 Corresponding squares

In more complex endgames, the concept of **corresponding squares** generalizes opposition. Two squares correspond if occupying one forces the opponent to occupy the other to maintain the balance. A network of corresponding squares can be analyzed as a graph, where vertices are squares and edges connect corresponding squares.

The analysis of corresponding squares is a form of **retrograde analysis**: begin with fully specified positions known to be wins or draws, then work backward through legal moves. A claimed pair of corresponding squares is a theorem about that complete position, not a relationship that can be checked from two king coordinates alone.

## 9.5 Combinatorial game theory and chess

Chess is partizan and has three outcomes. Checkmate is a loss for the checkmated side, while stalemate is a draw. Repetition and move-count rules also matter. Claim-based threefold repetition and the fifty-move rule do not by themselves bound play, but the automatic fivefold-repetition and seventy-five-move rules do. A fully faithful finite state must record at least the legal board state, side to move, castling and en-passant rights, the halfmove clock, and enough history to apply repetition rules.

Removing the draw rules does not produce an acyclic graph: pieces can repeat positions. Ordinary P/N backward induction is therefore the wrong model. Exact endgame solvers use **win/draw/loss retrograde analysis**. Checkmates initialize losses for the side to move; stalemates initialize draws. A state is winning if it has a move to an opponent loss, and losing if every legal move goes to an opponent win. States not forced into either class, including sustainable cycles, are draws. With rule counters included, the same recurrence respects claimable and automatic draws.

Two distance metrics answer different questions. **DTM** counts plies to mate under optimal play. **DTZ** counts plies to the next zeroing move—a pawn move or capture—or to mate. Compatibility with a move-count draw rule depends on DTZ, the current halfmove clock, whose turn it is, and whether the draw is claimed; DTM alone is insufficient.

## 9.6 Common errors

**Error: treating stalemate as a win.** In chess, stalemate is a draw, not a win for the player who cannot move. In normal-play combinatorial game theory, a player with no move loses. The discrepancy means that chess endgame analysis must sometimes treat stalemate as a special case.

**Error: treating “mate in 17” as enough for the fifty-move rule.** The unit may be moves or plies, the halfmove clock may already be near its threshold, and the forced line may not contain a zeroing move before a claim becomes available. DTM and DTZ must be interpreted with the starting state.

**Error: defining zugzwang only as forced loss.** In zugzwang every legal move worsens the mover's game-theoretic result relative to having no obligation to move; the change may be win to draw or draw to loss. It need not make every move an immediate loss.

**Error: confusing opposition with direct confrontation.** Opposition requires kings to be on the same rank, file, or diagonal with one square between. Diagonal opposition is often overlooked but is equally important.

## 9.7 Practice exercises

### Exercise 9.1

Why is opposition alone insufficient to classify a king-and-pawn ending?

**Solution.** Opposition states only a relation between the kings. Moving the same king pair to a different file, adding a pawn tempo, or changing the side to move can change whether the attacker penetrates, the pawn promotes, or stalemate occurs. A result requires the full legal position and a move analysis, not the king geometry alone. $\square$

### Exercise 9.2

Give a legal king-and-rook-pawn ending where the extra pawn cannot win because of the corner blockade and stalemate resource. Explain why the example is not, by itself, zugzwang.

**Solution.** Put White's king on $h6$, White's pawn on $h7$, and Black's king on $h8$, with White to move (FEN `7k/7P/7K/8/8/8/8/8 w - - 0 1`). The position is legal: the kings are two ranks apart and Black is not in check. The pawn cannot advance because $h8$ is occupied. White cannot play $Kg7$ because that would move next to the black king. Moves away from the pawn do not dislodge the corner king; in particular, $Kg6$ is immediate stalemate because $g7$ is controlled by White's king and $g8$ by the pawn. Black can keep the corner while the pawn remains protected, so White cannot force promotion. The result is a draw. With Black to move the starting position is already stalemate, also a draw, so switching the side to move does not worsen the result; this example is a stalemate blockade, not zugzwang. $\square$

### Exercise 9.3

Explain why classifying stalemate as a terminal normal-play loss gives the wrong chess result.

**Solution.** Normal play declares a player with no move the loser. Chess declares a player who has no legal move and is not in check stalemated, hence drawn. Replacing stalemate by a P-position changes a draw into a loss and can reverse predecessor classifications. A chess solver therefore needs W/D/L values. $\square$

### Exercise 9.4

In a rook endgame, why is the concept of corresponding squares less useful than in king-and-pawn endgames?

**Solution.** Rooks have long-range mobility, so many more squares and tactical replies can matter than in a bare king-and-pawn pattern. Checks, forks, and changes of checking distance can make a static corresponding-square table unwieldy. Selected positions can still be proved manually; for material and rules covered by a tablebase, a database is often used to obtain exact W/D/L and distance information under its stated conventions. $\square$

### Exercise 9.5

A tablebase reports a forced mate at DTM $17$. Explain why this alone does not show that the win survives the fifty-move rule. What additional data are needed?

**Solution.** First determine whether $17$ means plies or full moves. Then inspect the starting halfmove clock and DTZ: the number of plies before the next pawn move, capture, or mate. A claim may become available once the relevant no-zeroing threshold is reached, possibly before mate even when DTM is small. One also needs the side to move and the optimal line under the rule-aware metric, because a DTM-optimal line need not minimize DTZ. $\square$

## 9.8 Looking forward

Chess endgames illustrate both the power and the limits of combinatorial game theory. Simple positions yield to exact analysis, but the full game remains too complex for complete classification. In the final chapter, **Algorithmic Game Solving**, we turn to the computational side: algorithms that solve finite games, construct optimal strategies, and verify mathematical claims. The tools of this chapter—zugzwang, opposition, and corresponding squares—are special cases of the general algorithms we will study next.
