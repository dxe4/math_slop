
# Go and Combinatorics

Go is an ancient board game with simple rules and profound strategic depth. Two players, Black and White, alternately place stones on the intersections of a grid. A group of connected stones is captured when all its adjacent empty intersections are filled by the opponent. The game normally ends after consecutive passes. This chapter explains how carefully isolated, ko-free endgame regions can be modelled as scoring games; it does not derive local values from unspecified diagrams.

## 8.1 Rules and scoring

We study Go on a $19 \times 19$ board, though smaller boards are used for analysis. A **move** is either placing a stone on an empty intersection or passing. A group of connected stones of one colour is **captured** when it has no **liberties** (adjacent empty intersections).

The game ends when both players pass consecutively. Under **area scoring** (used in China and in mathematical analysis), a player's score is the number of stones on the board plus the number of empty intersections surrounded by those stones. Under **territory scoring** (used in Japan and Korea), the score is the number of empty intersections surrounded by a player's stones plus the number of opponent stones captured.

Area and territory scoring can assign different local incentives, so every analysis below must name its convention. We use area scoring only for the rules discussion; the abstract switch examples explicitly state their terminal score from Black's perspective.

## 8.2 Go as a combinatorial game

Go is partizan: Black places black stones, White places white stones. It is not strictly normal play because the game ends by mutual agreement, not by a player being unable to move. However, in the **endgame**, when all safe territory is established and only small boundary disputes remain, the game behaves like a normal-play combinatorial game.

The key insight, due to Berlekamp and Wolfe, is that many Go endgame positions **decompose** into independent **corridors** or **regions**. Each region is a small combinatorial game, and the overall endgame is their disjoint sum. This makes exact analysis possible for positions that would otherwise be intractable.

## 8.3 From a Go diagram to a local game

A local Go value is meaningful only after four facts are fixed: the surrounding stones and liberties, the ko or repetition rule, the scoring rule, and the assumption that play outside the region does not change its legal moves. A point completely surrounded by opposing live stones is usually an illegal suicide play unless placing there captures stones. A verbal phrase such as “one empty point surrounded by Black” therefore does not specify a two-player game tree.

Once a legal local diagram is supplied, subtract any score already secured outside the region. Record every legal Black move as a Left option, every legal White move as a Right option, and each finished local line by its net score for Black. Independent regions may then be added. This reduction is conditional: ko threats, shared liberties, and unsettled life can couple regions that look geometrically separate.

## 8.4 Stops, mean, and temperature

We can study the scoring calculation without pretending that an abstract game is itself a complete Go diagram. Let

$$G=\{a\mid b\},\qquad a>b,$$

where Black (Left) can move to the terminal score $a$ and White (Right) can move to terminal score $b$, both measured from Black's perspective. This is a **switch**. Its mean and temperature are

$$m(G)=\frac{a+b}{2},\qquad t(G)=\frac{a-b}{2}.$$

Equivalently, the two stops are $m+t=a$ and $m-t=b$. The temperature measures the swing between moving first and moving second; the mean is their midpoint.

For $G=\{3\mid1\}$, the mean is $2$ and the temperature is $1$. For $H=\{5\mid4\}$, the mean is $9/2$ but the temperature is only $1/2$. Thus a region can carry a larger settled score while being less urgent. In a sum of independent switches, the basic thermographic rule is to play in a component at the greatest current temperature; applying it to Go still requires a verified local game tree.

## 8.5 Infinitesimals in Go

In short, loop-free normal-play game theory, a nonzero **infinitesimal** game $G$ satisfies $-\varepsilon<G<\varepsilon$ for every positive dyadic rational $\varepsilon$. Such a game can have mean $0$ without being the zero game; a game value of $0$ already means Conway-equivalence to zero. The example $\ast=\{0\mid0\}$ has mean $0$ but is nonzero and fuzzy with $0$: it is N, while zero is P. Zero mean alone does not imply infinitesimality; the hot switch $\{1\mid-1\}$ has mean $0$ and temperature $1$. These abstract game statements do not assign a value to an unspecified Go diagram. The retained draft PDF predates this online equality clarification.

The abstract game $\ast=\{0\mid0\}$ is symmetric but not zero: either player can move to $0$, so it is an N-position. A real dame point should not automatically be labelled $\ast$; its local score depends on the surrounding chains, legality, scoring convention, and whether filling it changes either territory count.

More complex infinitesimals, such as $\uparrow = \{ 0 \mid \ast \}$ and $\downarrow = \{ \ast \mid 0 \}$, also arise in Go endgames. These are positive and negative infinitesimals, respectively. They satisfy $\uparrow + \downarrow = 0$ and $n \cdot \uparrow < 1/2^{k}$ for any integers $n$ and $k$.

## 8.6 Common errors

**Error: treating Go as an impartial game.** Black and White have different stones and different objectives. The Sprague–Grundy theorem does not apply to the whole game.

**Error: saying that an area-scoring pass automatically costs a point.** Area score counts stones plus surrounded empty points. Filling a point inside one's own secure territory can replace one territory point by one stone and leave the total unchanged. The effect of a pass depends on the position, pass rules, and scoring convention.

**Error: ignoring ko.** A **ko** is a situation where a single stone could be captured and recaptured indefinitely. The rules forbid immediate recapture, creating a temporary barrier to analysis. Ko fights introduce cycles and complicate the normal-play model.

**Error: assuming all endgame positions decompose.** While many do, some endgame positions involve **seki**: mutual life where neither player can capture the other. Seki positions are local standoffs that do not decompose cleanly.

## 8.7 Practice exercises

### Exercise 8.1

For the abstract switch $G=\{3\mid1\}$, find the terminal score for each possible first player, then compute mean and temperature.

**Solution.** Black moves to score $3$; White moves to score $1$ from Black's perspective. Thus $m=(3+1)/2=2$ and $t=(3-1)/2=1$. $\square$

### Exercise 8.2

Explain why $\ast=\{0\mid0\}$ is N rather than P, and why this does not by itself classify an actual dame point.

**Solution.** Either player can move from $\ast$ to terminal $0$, leaving the opponent without a move, so the next player wins. A dame description omits liberties, ko status, and the scoring effect; those data are needed before its local game form can be identified. $\square$

### Exercise 8.3

Show that $\uparrow + \downarrow = 0$.

**Solution.** Negation recursively swaps Left and Right options and negates them. Since $-\ast=\ast$,

$$-\uparrow=-\{0\mid\ast\}=\{-\ast\mid0\}=\{\ast\mid0\}=\downarrow.$$

Every short game plus its negative equals zero by the copycat strategy. Therefore $\uparrow+\downarrow=\uparrow+(-\uparrow)=0$. $\square$

### Exercise 8.4

Compute the mean and temperature of the switch $K=\{6\mid2\}$, and recover its two stops from your answer.

**Solution.** The mean is $(6+2)/2=4$ and the temperature is $(6-2)/2=2$. Hence $m+t=6$ and $m-t=2$, the original Left and Right stops. $\square$

### Exercise 8.5

An abstract endgame is the sum of independent switches $A=\{5\mid1\}$ and $B=\{4\mid3\}$. Compute each mean and temperature. Which component is hotter?

**Solution.** For $A$, $m_A=(5+1)/2=3$ and $t_A=(5-1)/2=2$. For $B$, $m_B=(4+3)/2=7/2$ and $t_B=(4-3)/2=1/2$. Component $A$ is hotter even though $B$ has the larger mean. Under the independent-switch model, Black should address $A$ first. $\square$

## 8.8 Looking forward

Go endgame theory is one of the most successful applications of combinatorial game theory to a real-world game. In the next chapter, **Chess Endgames**, we turn to another classic. Unlike Go, chess endgames are not typically decomposed into independent regions, but they do exhibit a rich structure of forced wins, draws, and zugzwang positions that can be analyzed with combinatorial methods.
