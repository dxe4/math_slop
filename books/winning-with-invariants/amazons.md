
# Amazons

Amazons is a strategic board game invented by Walter Zamkauskas in 1988. Each player controls several queen-like pieces that move any number of squares in a straight line (horizontally, vertically, or diagonally), after which they shoot an arrow that also travels any number of squares in a straight line. The arrow lands on a square, which becomes permanently blocked. The last player to move wins. This chapter introduces Amazons, analyzes small positions, and explores its surprising connection to combinatorial game theory through region decomposition.

## 7.1 Rules and initial position

The standard starting position is on a $10 \times 10$ board. White (Left) has four amazons at squares $(a,4)$, $(d,1)$, $(g,1)$, $(j,4)$. Black (Right) has four amazons at $(a,7)$, $(d,10)$, $(g,10)$, $(j,7)$. In our notation, White is Left and Black is Right.

A move consists of two phases:

1. **Move the amazon.** Choose one of your amazons and move it like a chess queen to any empty square along an open rank, file, or diagonal.
2. **Shoot an arrow.** From the amazon's new square, shoot an arrow to any empty square along an open rank, file, or diagonal. That square becomes blocked for the rest of the game.

The amazon cannot jump over blocked squares or other amazons. The arrow cannot jump either. After the arrow lands, the turn passes to the opponent.

The game ends when one player has no legal move. Under normal play, that player loses.

## 7.2 Amazons as a combinatorial game

Amazons is finite: each move blocks at least one square, and the board has finitely many squares. It is partizan: White moves only White amazons, Black moves only Black amazons. It is normal play: the last player to move wins.

The remarkable feature of Amazons is that moves tend to **split the board** into independent regions. When an amazon moves and shoots, the arrow often separates the board into disconnected areas. Amazons in one region cannot interact with amazons in another. The game then becomes the disjoint sum of the subgames in each region.

This decomposition makes Amazons amenable to combinatorial game theory. Each region is analyzed separately, and the results are combined using the theory of partizan sums.

## 7.3 Small regions

Consider a single White amazon in an empty rectangular region with no Black amazons. The amazon can move anywhere and shoot anywhere, but after the move and shot, the region may split.

**Example.** A $2 \times 2$ region with one White amazon in a corner. The amazon can move to any of the other three squares. If it moves to the diagonally opposite corner, it can shoot back to its starting square, blocking one corner and leaving a $1 \times 2$ or $2 \times 1$ region. The analysis depends on the exact geometry.

For a region with White amazons and no Black amazons, Right has no local move. Its short-game value is a nonnegative integer: by induction, the value is one more than the largest value of a White option, hence the maximum length of a White-only play path. This integer is neither the region's temperature nor its atomic weight; those terms denote different game invariants.

## 7.4 Decomposition and sums

When the board splits into regions $R_1, R_2, \dots, R_k$, the overall position is the disjoint sum $R_1 + R_2 + \cdots + R_k$. Each region contains some White amazons and some Black amazons, and the players move only within their region.

If a region contains amazons of only one colour, that region is a **free move** for that colour: the player can make moves there until the region is exhausted, while the opponent cannot move there at all. Such regions contribute pure numbers to the sum.

If a region contains amazons of both colours, the analysis is more subtle. The region is a genuine partizan game, and its value must be computed by examining the options.

## 7.5 Computational challenges

The number of legal Amazons states grows rapidly with board size, and the generalized $n\times n$ decision problem is PSPACE-complete. For the fixed standard $10\times10$ board, this book supplies neither an exhaustive state count nor a proof about the limits of current solvers. Practical programs therefore combine exact search where their declared resource budget permits it with methods such as:

- **Region decomposition:** identify independent regions and analyze them separately.
- **Hashing and transposition tables:** store previously computed region values.
- **Heuristic evaluation:** estimate the value of a position when exact analysis exceeds the chosen resource budget.
- **Monte Carlo tree search:** sample moves and use statistical methods to estimate the best move.

Despite these challenges, Amazons has been a testbed for combinatorial game theory. The decomposition into independent regions is so effective that endgame positions with many empty squares can sometimes be solved exactly.

## 7.6 Common errors

**Error: treating Amazons as impartial.** White and Black have different pieces and different move options. The Sprague–Grundy theorem does not apply to the whole game, though it may apply to individual symmetric regions.

**Error: ignoring the arrow's blocking effect.** The arrow permanently removes a square from play. This is what drives the game toward termination and creates decomposition. A player who forgets to account for blocked squares will misevaluate the position.

**Error: assuming all regions are independent.** Two regions are independent only if no amazon in one region can ever reach a square in the other. This depends on the pattern of blocked squares, not just the current positions of amazons.

**Error: confusing temperature with value.** A hot region (many moves available) does not necessarily favor the player who moves there first. The value of a region depends on the relative options of Left and Right, not just the number of moves.

## 7.7 Practice exercises

### Exercise 7.1

A $3 \times 3$ region contains one White amazon in the centre and no Black amazons. How many moves can White make before the region is exhausted?

**Solution.** The maximum is $8$. Each move permanently blocks one square, while the amazon occupies one unblocked square, so at most eight of the nine squares can receive arrows. The bound is attained by this one-based sequence, written “new amazon square; arrow square”:

$$
\begin{aligned}
(1,1);(1,2),\quad &(2,1);(1,1),\quad (2,2);(1,3),\quad (2,1);(2,2),\\
(3,1);(2,1),\quad &(3,2);(2,3),\quad (3,1);(3,3),\quad (3,2);(3,1).
\end{aligned}
$$

The amazon starts at $(2,2)$. Every move and arrow follows an unobstructed queen line, and the eight arrows occupy every square except the amazon's final square. Thus the upper bound and witness agree. $\square$

### Exercise 7.2

Explain why a region with only White amazons and no Black amazons is not a P-position.

**Solution.** Assume the isolated region is not exhausted. If White starts, White has a move and can continue until making the final local move. If Black starts, Black has no local move and loses immediately. White therefore wins regardless of who starts: the region is L. An exhausted region is $0$ and is P. $\square$

### Exercise 7.3

Suppose a position decomposes into two regions: one with value $1$ (favors White) and one with value $-1$ (favors Black). What is the outcome class of the sum?

**Solution.** The sum is $1 + (-1) = 0$, which is a P-position. The first player loses with optimal play: whichever player moves first must move in one region, and the opponent responds in the other to restore balance. $\square$

### Exercise 7.4

Why does the arrow shot make Amazons acyclic? Contrast this with chess after repetition and automatic move-count rules are omitted.

**Solution.** Each Amazons move permanently blocks one previously empty square, so the number of unblocked squares strictly decreases; no position can recur. A chess board position can recur if repetition and automatic move-count rules are omitted. Under standard FIDE rules, automatic fivefold repetition and the seventy-five-move rule bound legal play, but the underlying board-state graph still contains cycles unless the rule history is included in the state. $\square$

### Exercise 7.5

In a sum of two Amazons regions, one is a free region for White with value $2$, and the other is a symmetric region with value $\ast = \{ 0 \mid 0 \}$. Determine the outcome class.

**Solution.** The sum is $2 + \ast$. If White moves first, White can move in the $2$ region to $1 + \ast$, or in the $\ast$ region to $2 + 0 = 2$. Moving to $2$ is winning for White. If Black moves first, Black can move in the $\ast$ region to $2 + 0 = 2$, which is winning for White (L-position). So White wins no matter who starts: the sum is L. $\square$

## 7.8 Looking forward

Amazons demonstrates how geometric decomposition and combinatorial game theory combine to analyze complex partizan games. In the next chapter, **Go and Combinatorics**, we turn to one of the oldest and deepest games. Go's territory scoring, capture rules, and endgame decomposition have inspired a rich mathematical literature, including connections to temperature theory, infinitesimals, and the surreal numbers introduced in Chapter 5.
