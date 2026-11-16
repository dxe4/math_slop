var e=`---
parent_id: book-winning-with-invariants
matter_id: solutions
title: "Exercise and Project Solutions"
license: CC BY-SA 4.0
---

# Exercise and Project Solutions

The earlier consolidated keys below keep their original chapter labels. The complete current primary-route index at the end links to each question's two hints and full solution. Those local explanations include the expanded reasoning and explicit corrections.

## Chapter 1: Positions as a directed graph

**Exercise 1.1.** P-positions for move set $\\{1, 2\\}$ are multiples of $3$.
> Justification: from $3k$, moves reach $3k-1$ and $3k-2$ (N); from $3k+1$ or $3k+2$, remove the residue to reach $3k$ (P). Induction on $n$. $\\square$

**Exercise 1.2.** Winning reply from $n = 11$ in the $\\{1, 2, 3\\}$ subtraction game: remove $3$ to reach $8$.
> Justification: $11 \\equiv 3 \\pmod{4}$, so $11$ is N. Removing $3$ leaves $8 \\equiv 0 \\pmod{4}$, a P-position. $\\square$

**Exercise 1.3.** No position in a finite acyclic impartial game is both P and N.
> Justification: classify by induction on maximum remaining path length. Terminal positions are only P. At each later position, either some move reaches P (making it N) or none does (making it P). The cases are mutually exclusive. $\\square$

**Exercise 1.4.** P-positions for move set $\\{1, 3, 4\\}$ up to $n = 20$: $0, 2, 7, 9, 14, 16$.
> Justification: the pattern is periodic with period $7$ after $n = 0$; P-positions are exactly those $n$ with $n \\bmod 7 \\in \\{0, 2\\}$. Verified by recursive computation. $\\square$

**Exercise 1.5.** Test for an implementation that treats $0$ as winning: assert \`win[0] === false\` and test position $1$ with move set $\\{1\\}$.
> Justification: if $0$ is wrongly winning, then $1$ is misclassified as losing because its only move reaches a "winning" position. Boundary tests propagate through recursive algorithms. $\\square$

## Chapter 2: Impartial Games

**Exercise 2.1.** Grundy numbers for move set $\\{1, 2, 3, 4\\}$ up to $n = 12$: $0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2$.
> Justification: $g(n) = n \\bmod 5$. For $0 \\leq n < 4$, the option values are $0,\\ldots,n-1$ (empty at $n=0$), so mex gives $n$. For $n \\geq 4$, the four predecessors of $5k+r$ cover all residues except $r$, so $\\operatorname{mex}$ gives $r$. $\\square$

**Exercise 2.2.** $g(10) = 1$ and $g(11) = 2$ for move set $\\{1, 3, 4\\}$.
> Justification: continuing the table from the text, $g(8) = \\operatorname{mex}(\\{0, 3, 2\\}) = 1$; $g(9) = \\operatorname{mex}(\\{1, 2, 3\\}) = 0$; $g(10) = \\operatorname{mex}(\\{0, 0, 2\\}) = 1$; $g(11) = \\operatorname{mex}(\\{1, 1, 0\\}) = 2$. $\\square$

**Exercise 2.3.** $g(P)=1$ iff the option Grundy set contains $0$ and omits $1$.
> Justification: this is exactly the condition that the least excluded nonnegative integer be $1$. Other values such as $2$ may be present. $\\square$

**Exercise 2.4.** Grundy numbers for $A \\to B$, $A \\to C$, $B \\to D$, $C \\to D$, $D$ terminal: $g(D) = 0$, $g(B) = g(C) = 1$, $g(A) = 0$.
> Justification: $D$ is terminal, so $g(D) = 0$. Both $B$ and $C$ have only $D$ as option, so $g(B) = g(C) = \\operatorname{mex}(\\{0\\}) = 1$. Then $g(A) = \\operatorname{mex}(\\{1, 1\\}) = \\operatorname{mex}(\\{1\\}) = 0$. $\\square$

**Exercise 2.5.** The Sprague–Grundy sum formula implies the Nim theorem of Chapter 1.
> Justification: each heap of size $h$ has Grundy number $h$. By the sum formula, the combined position has Grundy number $h_1 \\oplus \\cdots \\oplus h_k$. By the Sprague–Grundy theorem, this is $0$ exactly when the position is P. $\\square$

## Chapter 3: Partizan Games

**Exercise 3.1.** $\\{ 0 \\mid \\}$ is an L-position.
> Justification: if Left moves first, Left moves to $0$ and Right has no move. If Right moves first, Right has no legal move. Left wins no matter who starts. $\\square$

**Exercise 3.2.** $G = \\{ 0 \\mid 0 \\}$ is N. This game is $\\ast$ (star).
> Justification: if Left moves first, Left moves to $0$ and Right has no move, so Left wins. If Right moves first, Right moves to $0$ and Left has no move, so Right wins. The next player wins. $\\square$

**Exercise 3.3.** An L component plus an R component can have outcome L, P, or R.
> Justification: $2+(-1)=1$ is L, $1+(-1)=0$ is P, and $1+(-2)=-1$ is R. Component outcome classes alone do not determine a sum. $\\square$

**Exercise 3.4.** Value of a blue-red-blue stalk (bottom to top) is $3/4$.
> Justification: Left can leave $0$ or the blue-red stalk $1/2$; Right can leave the bottom blue edge $1$. Hence $\\{0,1/2\\mid1\\}=\\{1/2\\mid1\\}=3/4$. $\\square$

**Exercise 3.5.** Domineering is partizan because Left and Right have different move sets.
> Justification: Left places a $2 \\times 1$ vertical domino; Right places a $1 \\times 2$ horizontal domino. From a given board, the sets of legal vertical and horizontal placements are generally different. $\\square$

## Chapter 4: Sprague–Grundy Theory

**Exercise 4.1.** $g(G + H + K) = g(G) \\oplus g(H) \\oplus g(K)$.
> Justification: by the two-game formula, $g((G + H) + K) = g(G + H) \\oplus g(K) = (g(G) \\oplus g(H)) \\oplus g(K)$. Nim sum is associative. $\\square$

**Exercise 4.2.** Kayles Grundy numbers: $g(0) = 0$, $g(1) = 1$, $g(2) = 2$, $g(3) = 3$, $g(4) = 1$, $g(5) = 4$.
> Justification: computed by dynamic programming from the recursive definition, accounting for splits. Verified by Python script (\`verify_winv_matter.py\`). $\\square$

**Exercise 4.3.** If $g(G) = g(H)$, then $G + H$ is P.
> Justification: $g(G + H) = g(G) \\oplus g(H) = g(G) \\oplus g(G) = 0$. By the Sprague–Grundy theorem, $G + H$ is P. $\\square$

**Exercise 4.4.** Smallest Nim position that is P under misère but N under normal play: $(1)$.
> Justification: under normal play, a single heap of size $1$ has Grundy number $1$, so it is N. Under misère play, the only move takes the last object and loses, so it is P. Total heap size is $1$. $\\square$

**Exercise 4.5.** Grundy number of the sum of positions $5$ and $6$ in the $\\{1, 2, 3\\}$ subtraction game is $3$.
> Justification: $g(5) = 1$, $g(6) = 2$, so $g(5 + 6) = 1 \\oplus 2 = 3$. A winning move is from the heap of size $6$ to size $5$, leaving $5 + 5$ with Grundy number $1 \\oplus 1 = 0$. $\\square$

## Chapter 5: Hackenbush

**Exercise 5.1.** Value of stalk red-blue (bottom to top) is $-1/2$.
> Justification: Left cuts the top blue and leaves $-1$; Right cuts the red support and leaves $0$. Thus $G=\\{-1\\mid0\\}=-1/2$. $\\square$

**Exercise 5.2.** Value of stalk blue-red-red is $1/4$.
> Justification: Left can leave $0$. Right can leave $1$ or $1/2$, and $1$ is dominated for Right. Thus $G=\\{0\\mid1/2\\}=1/4$. $\\square$

**Exercise 5.3.** A stalk of $n$ blue edges has value $n$.
> Justification: induction on $n$. Cutting the $i$-th edge from the bottom leaves $i - 1$ blue edges, value $i - 1$ by hypothesis. Left's options are $\\{0, 1, \\dots, n - 1\\}$. Removing dominated options leaves $\\{n - 1 \\mid \\} = n$. $\\square$

**Exercise 5.4.** A nonempty green Hackenbush stalk is a Nim heap, not a number.
> Justification: a length-$n$ green stalk has options of lengths $0,1,\\ldots,n-1$, so induction and mex give the nimber $\\ast n$. Every short game lies in Conway's universe, and $0$ is both impartial and a number. For $n>0$, however, the identical nonempty Left and Right option sets violate the number condition that every Left option be strictly less than every Right option: the same option cannot be strictly less than itself. $\\square$

**Exercise 5.5.** A positive-number stalk is L, while a single green edge is N.
> Justification: a blue edge is $1>0$ and only Left can move. A green edge is $\\ast=\\{0\\mid0\\}$, so either first player wins. Star is fuzzy with zero, not positive. $\\square$

## Chapter 6: Domineering

**Exercise 6.1.** The $1 \\times 3$ board is an R-position.
> Justification: Left has no vertical move. Right places a horizontal domino on two adjacent squares, leaving a single square. Right wins moving first; Left loses moving first. $\\square$

**Exercise 6.2.** The $2\\times2$ board is an N-position.
> Justification: Left fills a column and leaves no horizontal pair; Right fills a row and leaves no vertical pair. Either first player wins. $\\square$

**Exercise 6.3.** The $3\\times2$ board is an N-position.
> Justification: after any vertical first move, Left can answer Right's only end-row placement with the remaining vertical pair. Right wins moving first by filling the middle row; every vertical pair uses a middle-row cell, so Left then has no move. $\\square$

**Exercise 6.4.** Outcomes through $4\\times4$ do not determine the $5\\times5$ outcome.
> Justification: adding a row and column changes both move sets and can join regions. No monotonicity result was proved, so a separate strategy or exhaustive recurrence is required. $\\square$

**Exercise 6.5.** Two identical components after a move do not guarantee P in Domineering.
> Justification: Domineering is partizan. Two copies of $1 = \\{ 0 \\mid \\}$ sum to $2 = \\{ 1 \\mid \\}$, which is L, not P. The impartial symmetry argument fails. $\\square$

## Chapter 7: Amazons

**Exercise 7.1.** A center White amazon on an open $3\\times3$ region can make at most, and can attain, $8$ moves.
> Justification: each move blocks one new square, so eight arrows plus the amazon exhaust nine squares. A legal eight-move coordinate witness is given in the chapter. $\\square$

**Exercise 7.2.** A nonexhausted isolated region with only White amazons is L.
> Justification: White has a move when starting; Black has none when starting. Thus White wins regardless of who begins. An exhausted region is P. $\\square$

**Exercise 7.3.** Sum of regions with values $1$ and $-1$ is P.
> Justification: $1 + (-1) = 0$. The first player loses with optimal play: whichever player moves first must play in one region, and the opponent responds in the other to restore balance. $\\square$

**Exercise 7.4.** Amazons is acyclic because each arrow blocks a new square.
> Justification: the number of unblocked squares strictly decreases. Chess board states can cycle when draw rules are omitted; standard FIDE play is bounded by automatic fivefold-repetition and seventy-five-move rules once history is included. $\\square$

**Exercise 7.5.** Sum of a free White region ($2$) and a symmetric region ($\\ast$) is L.
> Justification: $2 + \\ast$. If White moves first, White moves in $\\ast$ to $2 + 0 = 2$ (L). If Black moves first, Black moves in $\\ast$ to $2 + 0 = 2$ (L). White wins no matter who starts. $\\square$

## Chapter 8: Go and Combinatorics

**Exercise 8.1.** For $G=\\{3\\mid1\\}$, mean $2$ and temperature $1$.
> Justification: the stops are $3$ and $1$, so $m=(3+1)/2=2$ and $t=(3-1)/2=1$. $\\square$

**Exercise 8.2.** $\\ast=\\{0\\mid0\\}$ is N, but an actual dame needs a specified legal and scoring context.
> Justification: either player moves star to terminal $0$. A dame's liberties, ko status, and score effect must be known before assigning a local game form. $\\square$

**Exercise 8.3.** $\\uparrow + \\downarrow = 0$.
> Justification: $\\uparrow = \\{ 0 \\mid \\ast \\}$ and $\\downarrow = \\{ \\ast \\mid 0 \\}$. Standard CGT proof shows every option of $\\uparrow + \\downarrow$ has a winning response, making it a P-position. Equality to $0$ follows. $\\square$

**Exercise 8.4.** For $K=\\{6\\mid2\\}$, mean $4$ and temperature $2$.
> Justification: $(6+2)/2=4$ and $(6-2)/2=2$; the stops are recovered as $4\\pm2$. $\\square$

**Exercise 8.5.** $A=\\{5\\mid1\\}$ is hotter than $B=\\{4\\mid3\\}$.
> Justification: $A$ has mean $3$ and temperature $2$; $B$ has mean $7/2$ and temperature $1/2$. In the independent-switch model, address $A$ first. $\\square$

## Chapter 9: Chess Endgames

**Exercise 9.1.** Opposition alone does not classify a king-and-pawn ending.
> Justification: pawn positions, board edges, spare tempi, and side to move determine whether geometric opposition leads to promotion, capture, or a draw. $\\square$

**Exercise 9.2.** White king $h6$, pawn $h7$, Black king $h8$, White to move is a legal rook-pawn blockade draw.
> Justification: FEN \`7k/7P/7K/8/8/8/8/8 w - - 0 1\` is legal. The pawn is blocked; $Kg7$ is illegal; moving away cannot dislodge the corner king, and $Kg6$ stalemates because White controls both escape squares. Black to move is already stalemated and also draws, so this is not a zugzwang example. $\\square$

**Exercise 9.3.** Treating stalemate as a normal-play loss gives the wrong chess result.
> Justification: chess declares no legal move without check a draw, while normal play declares no move a loss. Chess retrograde analysis needs W/D/L values. $\\square$

**Exercise 9.4.** Corresponding squares are less useful in rook endgames.
> Justification: rooks have long-range mobility, so the graph of corresponding squares is too large for manual analysis. Tactical motifs (checks, forks) disrupt static patterns. $\\square$

**Exercise 9.5.** DTM $17$ alone does not establish compatibility with the fifty-move rule.
> Justification: one needs the unit (plies or moves), starting halfmove clock, side to move, and DTZ to the next pawn move, capture, or mate. A DTM-optimal line need not be rule-optimal. $\\square$

## Chapter 10: Algorithmic Game Solving

**Exercise 10.1.** Python function for Kayles Grundy numbers (provided in chapter).
> Justification: dynamic programming computes $g(i)$ from all splits created by knocking down one or two adjacent pins. Time $O(n^2)$, space $O(n)$. $\\square$

**Exercise 10.2.** Subtraction-game solver runs in $O(Lm)$ time and $O(L)$ space.
> Justification: outer loop iterates $L$ times; inner loop over at most $m$ moves; arrays \`win\` and \`reply\` have size $L + 1$. $\\square$

**Exercise 10.3.** Retrograde analysis is proof by induction.
> Justification: terminal positions are the base case. Each iteration classifies positions whose options are already classified, matching strong induction on maximum remaining path length. $\\square$

**Exercise 10.4.** $10^6$ positions, $10$ options each: approximately $0.01$ seconds at $10^9$ ops/sec.
> Justification: the $0.01$-second estimate assumes exactly $10^7$ unit-cost operations at the stated sustained rate. Big O does not fix the count or bound mex construction, hashing, allocation, interpreter, input or memory costs; this is an idealized illustration, not a runtime guarantee. $\\square$

**Exercise 10.5.** Test for Nim solver overflow: compare to Python's \`^\` on $2^{31}, 2^{32}, 2^{33}$.
> Justification: Python uses arbitrary-precision integers. A 32-bit signed implementation would overflow. The correct XOR is $2^{31} + 2^{32} + 2^{33}$. $\\square$


## Complete primary-route solutions
<a id="primary-route-solutions"></a>

The eleven teaching chapters each supply ten supported questions. Each link opens its statement, first hint, second hint, and full solution. The original consolidated keys above remain available; the current local answers include the corrected Kayles option sets, complete rule hypotheses, and qualified algorithmic timing statements.

### 1. Positions as a directed graph

[1.1](../positions-as-a-directed-graph.md#positions-as-a-directed-graph-ex-1) · [1.2](../positions-as-a-directed-graph.md#positions-as-a-directed-graph-ex-2) · [1.3](../positions-as-a-directed-graph.md#positions-as-a-directed-graph-ex-3) · [1.4](../positions-as-a-directed-graph.md#positions-as-a-directed-graph-ex-4) · [1.5](../positions-as-a-directed-graph.md#positions-as-a-directed-graph-ex-5) · [1.6](../positions-as-a-directed-graph.md#positions-as-a-directed-graph-ex-6) · [1.7](../positions-as-a-directed-graph.md#positions-as-a-directed-graph-ex-7) · [1.8](../positions-as-a-directed-graph.md#positions-as-a-directed-graph-ex-8) · [1.9](../positions-as-a-directed-graph.md#positions-as-a-directed-graph-ex-9) · [1.10](../positions-as-a-directed-graph.md#positions-as-a-directed-graph-ex-10)

### 2. Impartial Games and Mex

[2.1](../impartial-games-and-mex.md#impartial-games-and-mex-ex-1) · [2.2](../impartial-games-and-mex.md#impartial-games-and-mex-ex-2) · [2.3](../impartial-games-and-mex.md#impartial-games-and-mex-ex-3) · [2.4](../impartial-games-and-mex.md#impartial-games-and-mex-ex-4) · [2.5](../impartial-games-and-mex.md#impartial-games-and-mex-ex-5) · [2.6](../impartial-games-and-mex.md#impartial-games-and-mex-ex-6) · [2.7](../impartial-games-and-mex.md#impartial-games-and-mex-ex-7) · [2.8](../impartial-games-and-mex.md#impartial-games-and-mex-ex-8) · [2.9](../impartial-games-and-mex.md#impartial-games-and-mex-ex-9) · [2.10](../impartial-games-and-mex.md#impartial-games-and-mex-ex-10)

### 3. Nim and Nim-Sum

[3.1](../nim-and-nim-sum.md#nim-and-nim-sum-ex-1) · [3.2](../nim-and-nim-sum.md#nim-and-nim-sum-ex-2) · [3.3](../nim-and-nim-sum.md#nim-and-nim-sum-ex-3) · [3.4](../nim-and-nim-sum.md#nim-and-nim-sum-ex-4) · [3.5](../nim-and-nim-sum.md#nim-and-nim-sum-ex-5) · [3.6](../nim-and-nim-sum.md#nim-and-nim-sum-ex-6) · [3.7](../nim-and-nim-sum.md#nim-and-nim-sum-ex-7) · [3.8](../nim-and-nim-sum.md#nim-and-nim-sum-ex-8) · [3.9](../nim-and-nim-sum.md#nim-and-nim-sum-ex-9) · [3.10](../nim-and-nim-sum.md#nim-and-nim-sum-ex-10)

### 4. Sprague–Grundy Theory

[4.1](../sprague-grundy-theory.md#sprague-grundy-theory-ex-1) · [4.2](../sprague-grundy-theory.md#sprague-grundy-theory-ex-2) · [4.3](../sprague-grundy-theory.md#sprague-grundy-theory-ex-3) · [4.4](../sprague-grundy-theory.md#sprague-grundy-theory-ex-4) · [4.5](../sprague-grundy-theory.md#sprague-grundy-theory-ex-5) · [4.6](../sprague-grundy-theory.md#sprague-grundy-theory-ex-6) · [4.7](../sprague-grundy-theory.md#sprague-grundy-theory-ex-7) · [4.8](../sprague-grundy-theory.md#sprague-grundy-theory-ex-8) · [4.9](../sprague-grundy-theory.md#sprague-grundy-theory-ex-9) · [4.10](../sprague-grundy-theory.md#sprague-grundy-theory-ex-10)

### 5. Kayles, Splitting, and Misère Play

[5.1](../kayles-splitting-misere.md#kayles-splitting-misere-ex-1) · [5.2](../kayles-splitting-misere.md#kayles-splitting-misere-ex-2) · [5.3](../kayles-splitting-misere.md#kayles-splitting-misere-ex-3) · [5.4](../kayles-splitting-misere.md#kayles-splitting-misere-ex-4) · [5.5](../kayles-splitting-misere.md#kayles-splitting-misere-ex-5) · [5.6](../kayles-splitting-misere.md#kayles-splitting-misere-ex-6) · [5.7](../kayles-splitting-misere.md#kayles-splitting-misere-ex-7) · [5.8](../kayles-splitting-misere.md#kayles-splitting-misere-ex-8) · [5.9](../kayles-splitting-misere.md#kayles-splitting-misere-ex-9) · [5.10](../kayles-splitting-misere.md#kayles-splitting-misere-ex-10)

### 6. Partizan Games

[6.1](../partizan-games.md#partizan-games-ex-1) · [6.2](../partizan-games.md#partizan-games-ex-2) · [6.3](../partizan-games.md#partizan-games-ex-3) · [6.4](../partizan-games.md#partizan-games-ex-4) · [6.5](../partizan-games.md#partizan-games-ex-5) · [6.6](../partizan-games.md#partizan-games-ex-6) · [6.7](../partizan-games.md#partizan-games-ex-7) · [6.8](../partizan-games.md#partizan-games-ex-8) · [6.9](../partizan-games.md#partizan-games-ex-9) · [6.10](../partizan-games.md#partizan-games-ex-10)

### 7. Hackenbush

[7.1](../hackenbush.md#hackenbush-ex-1) · [7.2](../hackenbush.md#hackenbush-ex-2) · [7.3](../hackenbush.md#hackenbush-ex-3) · [7.4](../hackenbush.md#hackenbush-ex-4) · [7.5](../hackenbush.md#hackenbush-ex-5) · [7.6](../hackenbush.md#hackenbush-ex-6) · [7.7](../hackenbush.md#hackenbush-ex-7) · [7.8](../hackenbush.md#hackenbush-ex-8) · [7.9](../hackenbush.md#hackenbush-ex-9) · [7.10](../hackenbush.md#hackenbush-ex-10)

### 8. Domineering

[8.1](../domineering.md#domineering-ex-1) · [8.2](../domineering.md#domineering-ex-2) · [8.3](../domineering.md#domineering-ex-3) · [8.4](../domineering.md#domineering-ex-4) · [8.5](../domineering.md#domineering-ex-5) · [8.6](../domineering.md#domineering-ex-6) · [8.7](../domineering.md#domineering-ex-7) · [8.8](../domineering.md#domineering-ex-8) · [8.9](../domineering.md#domineering-ex-9) · [8.10](../domineering.md#domineering-ex-10)

### 9. Go, Amazons, and Chess: Case Studies

[9.1](../go-amazons-chess-case-studies.md#go-amazons-chess-case-studies-ex-1) · [9.2](../go-amazons-chess-case-studies.md#go-amazons-chess-case-studies-ex-2) · [9.3](../go-amazons-chess-case-studies.md#go-amazons-chess-case-studies-ex-3) · [9.4](../go-amazons-chess-case-studies.md#go-amazons-chess-case-studies-ex-4) · [9.5](../go-amazons-chess-case-studies.md#go-amazons-chess-case-studies-ex-5) · [9.6](../go-amazons-chess-case-studies.md#go-amazons-chess-case-studies-ex-6) · [9.7](../go-amazons-chess-case-studies.md#go-amazons-chess-case-studies-ex-7) · [9.8](../go-amazons-chess-case-studies.md#go-amazons-chess-case-studies-ex-8) · [9.9](../go-amazons-chess-case-studies.md#go-amazons-chess-case-studies-ex-9) · [9.10](../go-amazons-chess-case-studies.md#go-amazons-chess-case-studies-ex-10)

### 10. Algorithmic Game Solving

[10.1](../algorithmic-game-solving.md#algorithmic-game-solving-ex-1) · [10.2](../algorithmic-game-solving.md#algorithmic-game-solving-ex-2) · [10.3](../algorithmic-game-solving.md#algorithmic-game-solving-ex-3) · [10.4](../algorithmic-game-solving.md#algorithmic-game-solving-ex-4) · [10.5](../algorithmic-game-solving.md#algorithmic-game-solving-ex-5) · [10.6](../algorithmic-game-solving.md#algorithmic-game-solving-ex-6) · [10.7](../algorithmic-game-solving.md#algorithmic-game-solving-ex-7) · [10.8](../algorithmic-game-solving.md#algorithmic-game-solving-ex-8) · [10.9](../algorithmic-game-solving.md#algorithmic-game-solving-ex-9) · [10.10](../algorithmic-game-solving.md#algorithmic-game-solving-ex-10)

### 11. Finite Games and Strategy

[11.1](../finite-games-and-strategy.md#finite-games-and-strategy-ex-1) · [11.2](../finite-games-and-strategy.md#finite-games-and-strategy-ex-2) · [11.3](../finite-games-and-strategy.md#finite-games-and-strategy-ex-3) · [11.4](../finite-games-and-strategy.md#finite-games-and-strategy-ex-4) · [11.5](../finite-games-and-strategy.md#finite-games-and-strategy-ex-5) · [11.6](../finite-games-and-strategy.md#finite-games-and-strategy-ex-6) · [11.7](../finite-games-and-strategy.md#finite-games-and-strategy-ex-7) · [11.8](../finite-games-and-strategy.md#finite-games-and-strategy-ex-8) · [11.9](../finite-games-and-strategy.md#finite-games-and-strategy-ex-9) · [11.10](../finite-games-and-strategy.md#finite-games-and-strategy-ex-10)

## Using the solutions

Attempt the question before opening either hint. After reading an answer, reconstruct the argument and identify where termination, impartiality, the terminal convention, or a number-form hypothesis is used. A winning strategy must address every legal opponent reply; a single successful line is insufficient. Finite calculations prove only their stated finite domain unless an additional induction or propagation theorem is supplied.

`;export{e as default};