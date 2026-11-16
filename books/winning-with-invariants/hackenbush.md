
# Hackenbush

Hackenbush is a partizan game played on a graph drawn on paper. Each edge is coloured either blue (Left may cut) or red (Right may cut). A move consists of cutting an edge of your colour; any edges no longer connected to the ground fall away. Despite its simple rules, Hackenbush encodes a rich number system. This chapter studies finite blue-red Hackenbush stalks and shows how they represent dyadic rational numbers.

## 5.1 The rules

A Hackenbush position is a graph with a distinguished **ground** line. Each edge is coloured blue, red, or green. In **blue-red Hackenbush**, only blue and red edges appear. Left cuts blue edges; Right cuts red edges. After a cut, any edge not connected to the ground by a path of uncut edges disappears.

The game ends when one player has no legal move. Under normal play, that player loses.

A **stalk** is a path of edges attached to the ground at one end. Stalks are the simplest Hackenbush positions and the easiest to analyze.

## 5.2 Integer stalks

A stalk of $n$ blue edges and no red edges is denoted $n$. Left can cut any blue edge, and everything above it falls. Right has no move. This is an L-position, and its value is the positive integer $n$.

Similarly, a stalk of $n$ red edges and no blue edges is $-n$, an R-position.

The empty stalk is $0 = \{ \mid \}$, a P-position.

**Theorem 7.1.** A blue stalk of length $n$ has value $n$.

**Proof.** By induction on $n$. For $n=0$, the stalk is terminal. If Left cuts edge $i$ counted from the bottom, that edge and all $n-i$ edges above it disappear, leaving the $i-1$ lower edges. By induction their values are $0,1,\ldots,n-1$ as $i$ ranges from $1$ to $n$. Thus the game is $\{0,1,\ldots,n-1\mid\}$; all but the largest Left option are dominated, leaving $\{n-1\mid\}=n$. $\square$

## 5.3 Dyadic rationals

A **dyadic rational** is a rational number of the form $m / 2^k$ where $m$ is an integer and $k$ is a nonnegative integer. Remarkably, every dyadic rational is the value of some finite blue-red Hackenbush stalk.

For a stalk with bottom red and top blue:
- Left can cut the blue edge, leaving the red edge, which is $-1$.
- Right can cut the red edge, leaving nothing, which is $0$.

So the game is $\{ -1 \mid 0 \}$. This simplifies to $-1/2$.

More generally, the **sign-expansion** construction builds every dyadic rational. The key insight is that the value of a stalk is determined by the order of blue and red edges from the ground up. A blue edge contributes positively, a red edge negatively, and the magnitude depends on the height.

## 5.4 The simplicity theorem

**Scope correction.** The finite strict-between theorem below is used with number options and every Left option strictly below every Right option. The statement is not valid for arbitrary game options under that wording. The added finite-number theorem gives the required hypothesis and proof, with a counterexample to the broader reading.

**Theorem 7.2 (Simplicity).** If $G = \{ G^{L} \mid G^{R} \}$ and there is a number $x$ such that every $G^{L} < x < $ every $G^{R}$, and no number simpler than $x$ lies strictly between the $G^{L}$ and $G^{R}$, then $G = x$.

Here "simpler" means born earlier in the recursive number construction, not belonging to an earlier denominator class. For example, $0$ is born on day $0$, $1$ on day $1$, $1/2=\{0\mid1\}$ on day $2$, and $3=\{2\mid\}$ on day $3$: the half-integer $1/2$ is simpler than the integer $3$. Use the actual birthday when applying the simplicity theorem. The retained draft PDF predates this online birthday clarification.

This theorem is the engine of Hackenbush analysis. It tells us that a stalk with options bounded by two dyadic rationals takes the simplest dyadic rational between them as its value.

## 5.5 Examples

**Example 1.** For a bottom blue edge with a top red edge, Left can cut the blue support and leave $0$; Right can cut the red edge and leave the single blue edge $1$. Hence

$$G=\{0\mid1\}=\frac12.$$

**Example 2.** Reversing the colours gives $\{-1\mid0\}=-1/2$, as computed in Section 5.3. The two orders therefore have different values.

**Example 3.** For the bottom-to-top sequence blue, blue, red, Left can leave $0$ by cutting the bottom edge or leave $1$ by cutting the second edge. Right can cut the top red edge and leave $2$. Thus

$$G=\{0,1\mid2\}=\{1\mid2\}=\frac32,$$

where the Left option $0$ is dominated by $1$.

These examples illustrate the finite-stalk sign expansion. An initial run of blue edges gives a positive integer (an initial red run gives a negative integer). At the first colour change the new edge contributes a signed $1/2$; later edges contribute signed $1/4,1/8,\ldots$. Thus blue-red has value $1-1/2=1/2$, while blue-blue-red has value $2-1/2=3/2$.

## 5.6 The boundary of the finite theory

Every finite blue-red stalk has a dyadic rational value. The values can be arbitrarily close to zero: for example, a suitable stalk can represent $2^{-k}$ for every finite $k$. Each is nevertheless a positive real number rather than an infinitesimal.

Infinite Hackenbush and more general graphs lead to additional surreal values, but their definitions require a theory of infinite game forms that this book has not developed. We therefore make no inference about an infinite picture by extrapolating the finite sign-expansion rule.

## 5.7 Common errors

**Error: canceling opposite colours.** Even adjacent opposite colours need not cancel: bottom blue/top red is $1/2$, while the reverse order is $-1/2$. Compute the legal Left and Right options in ground-to-top order.

**Error: confusing numbers with fuzzy games.** A positive number is an L-position, so every positive-valued blue-red stalk is won by Left regardless of who starts. A green component can be fuzzy, but it is then a general game rather than an ordered positive number.

**Error: forgetting that detached edges fall.** When an edge is cut, all edges above it that are no longer connected to the ground disappear. This changes the position dramatically and must be accounted for in the analysis.

**Error: treating green edges as neutral.** In **blue-red-green Hackenbush**, green edges may be cut by either player. This is an impartial component, and its value is a Nim heap, not a number. Mixing colours requires both partizan and impartial analysis.

## A precise finite-number simplicity rule

**Correction to the scope of Section 5.4.** The elementary strict-between rule assumes numerical options, with every Left option below every Right option. Arbitrary short-game options cannot replace numbers in that statement. The form $\{\ast\mid\}$ is a counterexample to the broader reading: it has value zero by reversibility, although one is the earliest number strictly above its only Left option. The original wording is retained as context; its use here is subject to the number-form hypothesis.

**Theorem 7.3 (Finite number simplicity).** Let $G=\{L\mid R\}$ have finite sets of numerical options with every $l\in L$ below every $r\in R$. Let $x$ be an earliest-birthday number strictly between all these bounds. Then $G=x$ in the short-game order.

*Proof.* Use the comparison rule in the partizan chapter. No Left option of $G$ is at least $x$, and no Right option is at most $x$. A canonical Right option $x^R$ has earlier birthday and exceeds $x$, so it is above every $l\in L$. Since it cannot itself fit all bounds by choice of $x$, some $r\in R$ satisfies $r\le x^R$. The comparison rule therefore forbids $x^R\le G$. Together these facts give $G\le x$.

Dually, a canonical Left option $x^L$ is below every $r\in R$. It cannot fit all bounds, so some $l\in L$ satisfies $x^L\le l$. The comparison rule forbids $G\le x^L$. Along with the bound on Right options of $G$, this gives $x\le G$. Both inequalities hold, hence equality. Empty option sides impose no bound, so the argument includes integers. ∎

The canonical option of a positive integer is its preceding integer on the Left, with no Right option; negative integers have the reversed construction. A noninteger reduced dyadic $m/2^k$ has adjacent canonical options $(m-1)/2^k$ and $(m+1)/2^k$, reduced when necessary. These options are born earlier. Dyadics occur in every nonempty numerical interval, so a fitting candidate exists for finite separated bounds; among its possible birthdays there is a smallest nonnegative integer.

This explains why “simplest” is not a general instruction to choose the smallest magnitude or the smallest denominator across unrelated intervals. Zero has the earliest birthday, but it is unavailable if the bounds exclude it. A midpoint calculation is justified when the particular adjacent dyadic bounds exclude all earlier-born candidates.

## Why the finite stalk expansion works

After an initial blue run of length $n$, append its first red edge. The strongest Left option is $n-1$ and Right's option is $n$. The value is the midpoint $n-1/2$. All older Left options are dominated. Color reversal gives the negative counterpart for an initial red run.

Append a blue edge to an already mixed stalk. Cutting that edge leaves the old value, so it becomes the new largest Left option. The old Right bound remains. The new value is the midpoint of the upper half of the old interval. Appending red instead makes the old value the new smallest Right option, and selects the lower half. Every step halves the interval width.

**Proposition 7.4 (Finite stalk sign expansion).** The initial monochromatic run of length $n$ contributes $n$ if blue and $-n$ if red. The first edge of the other colour contributes its sign times $1/2$, and further edges contribute their signs times $1/4,1/8,\ldots$, with blue positive and red negative.

*Proof.* The integer values of monochromatic runs are already proved. The first colour change gives the midpoint between neighboring integers. At each later append, the new cut leaves the old value as a bound on the appropriate side. That value is strictly above older Left options and below older Right options, so it is the new extremal option on its side; the opposite bound persists. Inductively the bounds are adjacent dyadics, and their midpoint is the earliest number between them. Its displacement is half the preceding displacement. This proves the successive signed contributions. ∎

Every reduced noninteger dyadic lies between neighboring integers. Choose the corresponding initial run and first opposite edge, then repeatedly choose the upper or lower half containing the target. Midpoint subdivision reaches a target with a finite power-of-two denominator after finitely many steps. Negative targets follow by colour reversal, and the empty stalk represents zero. Thus the construction proves both evaluation and realization of all dyadics.

**Worked example (Two blue edges, then two red).** The word blue, blue, red, red has Left cuts leaving zero and one. Right's cuts leave two and three halves. Right prefers three halves, while Left prefers one, so the form reduces to $\{1\mid3/2\}=5/4$. The sign expansion gives the same answer, $2-1/2-1/4=5/4$. Cutting the first red edge removes the upper red edge as well, which is why the option is the two-blue prefix rather than an independently retained top edge.

**Worked example (Alternating four edges).** For blue, red, blue, red, Left's options are zero and one half. Right's options are one and three quarters. Domination reduces the form to $\{1/2\mid3/4\}$, with value $5/8$. Independently the expansion gives $1-1/2+1/4-1/8=5/8$. The two blue edges do not contribute two whole units: the upper one rests on a red support.

**Worked example (A negative stalk with two blue cuts).** For red, blue, blue, Left can leave minus one or minus one half, while Right can leave zero. The reduced form is $\{-1/2\mid0\}=-1/4$. Left has legal moves, but Right still wins for either starter. Left's choices leave negative numbers, and Right starting can cut the red support immediately. More blue edges than red does not determine the sign; ground-to-top order matters.

### Green edges and genuine independence

**Clarification of Section 5.7.** An entirely green finite position is impartial and has a nimber value. A green subgraph in a mixed-color position is not automatically an independent impartial component. Cutting a coloured support may remove green edges, so their move sets interact. Decomposition into a sum requires independently supported components. The green-stalk exercise assumes an all-green stalk, whose options really are player independent.

A green component can be identified with a Nim heap only after its complete impartial option structure is evaluated, not merely because one sees a green edge in the picture. In a stalk, support removal determines every follower, so the all-green length-$n$ case has options of all lengths below $n$ and Grundy number $n$. In a branching all-green graph the Grundy number need not equal the number of edges.

These are finite statements. Smaller positive dyadics do not become infinitesimal merely because a sequence tends to zero. Every fixed nonempty finite blue-red stalk has a nonzero dyadic value; an infinite picture requires a separately defined infinite-game theory rather than extrapolation from these prefix calculations.

## 5.8 Practice exercises

<a id="hackenbush-ex-1"></a>
### Exercise 5.1

Compute the value of a stalk with edges from bottom to top: red, blue.


<details><summary>Hint 1</summary>

Cutting the upper edge leaves the lower one; cutting the support removes everything.

</details>

<details><summary>Hint 2</summary>

Write the surviving prefix values as Left and Right options.

</details>

<details><summary>Solution</summary>

**Solution.** Left can cut the top blue edge, leaving the red edge of value $-1$. Right can cut the supporting red edge, after which everything falls, leaving $0$. Hence $G=\{-1\mid0\}=-1/2$. $\square$

</details>

<a id="hackenbush-ex-2"></a>
### Exercise 5.2

Compute the value of a stalk with edges from bottom to top: blue, red, red.


<details><summary>Hint 1</summary>

List both Right cuts separately.

</details>

<details><summary>Hint 2</summary>

Right prefers the smaller numerical option.

</details>

<details><summary>Solution</summary>

**Solution.** Left can cut the supporting blue edge, leaving $0$. Right can cut the middle red edge, leaving the blue edge of value $1$, or cut the top red edge, leaving the blue-red stalk of value $1/2$. For Right the option $1$ is dominated by $1/2$, so $G=\{0\mid1/2\}=1/4$. Equivalently, sign expansion gives $1-1/2-1/4=1/4$. $\square$

</details>

<a id="hackenbush-ex-3"></a>
### Exercise 5.3

Prove that a stalk of $n$ blue edges has value $n$ by induction, carefully handling the case where Left cuts a non-bottom edge.


<details><summary>Hint 1</summary>

Cutting edge i leaves i minus one lower edges.

</details>

<details><summary>Hint 2</summary>

Apply induction to every remaining length, not only the bottom cut.

</details>

<details><summary>Solution</summary>

**Solution.** For $n = 0$, the stalk is terminal with value $0$. Assume true for all $k < n$. In a stalk of $n$ blue edges, if Left cuts the $i$-th edge from the bottom ($1 \leq i \leq n$), the top $n - i$ edges fall, leaving a stalk of $i - 1$ blue edges. By the induction hypothesis, this has value $i - 1$. So Left's options are $\{ 0, 1, \dots, n - 1 \}$. Right has no options. The game is $\{ 0, 1, \dots, n - 1 \mid \}$. Removing dominated options leaves $\{ n - 1 \mid \}$, which is the integer $n$. $\square$

</details>

<a id="hackenbush-ex-4"></a>
### Exercise 5.4

Explain why a nonempty green Hackenbush stalk (edges cuttable by either player) is not a number but a Nim heap.


<details><summary>Hint 1</summary>

Both players can reach every smaller length.

</details>

<details><summary>Hint 2</summary>

Apply mex and distinguish a nonzero nimber's N-outcome from numerical sign.

</details>

<details><summary>Solution</summary>

**Solution.** A green stalk is impartial: both players have the same options. For a stalk of length $n$, cutting edge $i$ from the bottom leaves lengths $0,1,\ldots,n-1$ as options. Induction and the mex rule therefore give Grundy number $n$, so its value is the nimber $\ast n$. Every short normal-play game lies in Conway's universe, and $0$ is both impartial and a number. The relevant distinction is the number condition: every Left option must be strictly less than every Right option. When $n>0$, the identical nonempty Left and Right option sets contain the same option on both sides, and that option cannot be strictly less than itself. Thus $\ast n$ is not a number for $n>0$. $\square$

</details>

<a id="hackenbush-ex-5"></a>
### Exercise 5.5

Draw two Hackenbush positions: a positive-number stalk, which must be L, and a green position, which is N. Explain why “positive” and “N-position” cannot be conflated.


<details><summary>Hint 1</summary>

Compare one blue edge with one green edge.

</details>

<details><summary>Hint 2</summary>

One favors Left's identity; the other favors whoever starts.

</details>

<details><summary>Solution</summary>

**Solution.** A single blue edge is the number $1>0$ and is L: Left has the only move. A single green edge is $\ast=\{0\mid0\}$ and is N: either player wins by cutting it. Star is fuzzy with $0$, not a positive number. Thus sign in the game order and first-player advantage are different notions. $\square$

</details>

<a id="hackenbush-ex-6"></a>
### Exercise 5.6

Evaluate blue, blue, blue, red by both options and sign expansion.

<details><summary>Hint 1</summary>

The strongest Left option is two and Right can leave three.

</details>
<details><summary>Hint 2</summary>

Find the earliest number strictly between neighboring integers two and three.

</details>
<details><summary>Solution</summary>

Left's options are zero, one and two; Right's is three. Domination gives $\{2\mid3\}=5/2$. The initial blue run contributes three and the first red edge subtracts one half, again giving $5/2$. Its positive value makes the position L, rather than merely winning for the first player.

</details>

<a id="hackenbush-ex-7"></a>
### Exercise 5.7

Evaluate blue, red, red, red and generalize to one blue followed by $k$ red edges.

<details><summary>Hint 1</summary>

Subtract the successive powers of one half.

</details>
<details><summary>Hint 2</summary>

Use the finite geometric sum through $2^{-k}$.

</details>
<details><summary>Solution</summary>

The four-edge word has value $1-1/2-1/4-1/8=1/8$. Generally the value is $1-\sum_{j=1}^k2^{-j}=2^{-k}$, including $k=0$. Every finite case is positive and L. The sequence approaches zero as $k$ increases, but no fixed member is zero or an infinitesimal.

</details>

<a id="hackenbush-ex-8"></a>
### Exercise 5.8

Explain why reversing every edge colour negates a finite stalk value.

<details><summary>Hint 1</summary>

Color exchange swaps the two players' cuts at every prefix.

</details>
<details><summary>Hint 2</summary>

Induct from the empty stalk or reverse every sign in the expansion.

</details>
<details><summary>Solution</summary>

The empty stalk stays zero. Color exchange swaps Left and Right options and recursively negates their prefixes, exactly the definition of game negation. Thus the value changes sign. Equivalently every contribution in the proved finite expansion reverses sign. This turns every positive example into its negative counterpart.

</details>

<a id="hackenbush-ex-9"></a>
### Exercise 5.9

Two independent stalks have words blue-red and red-blue. Find their sum and give a second-player strategy.

<details><summary>Hint 1</summary>

Their values are opposite halves.

</details>
<details><summary>Hint 2</summary>

Copy each cut in the color-reversed stalk.

</details>
<details><summary>Solution</summary>

The sum is $1/2-1/2=0$, with outcome P. After the first player cuts one stalk, the second makes the color-reversed corresponding cut in the other. Support removal leaves opposite remaining prefixes. The response is legal because the corresponding edge has the responder's colour. Termination ensures that the first player eventually has no move.

</details>

<a id="hackenbush-ex-10"></a>
### Exercise 5.10

A blue supporting edge has a green edge above it. Why can the green edge not be split off as an independent star?

<details><summary>Hint 1</summary>

Compare the effect of cutting the support with moving in one component of a disjoint sum.

</details>
<details><summary>Hint 2</summary>

A true component move cannot remove an edge of another component.

</details>
<details><summary>Solution</summary>

Cutting the blue support removes the green edge too, so its availability depends on a move in the coloured support. In the disjoint sum of a separate blue and green edge, cutting blue would leave green intact. Their followers differ. The supported mixed stalk therefore cannot be analyzed by adding the two isolated edge values.

</details>

## 5.9 Looking forward

Hackenbush is our first encounter with the surreal numbers, a number system that contains all real numbers, all ordinals, and infinitesimals. In the next chapter, **Domineering**, we study another partizan game with a rich mathematical structure. Unlike Hackenbush, Domineering positions do not generally reduce to numbers; instead they exhibit a wide variety of outcome classes and values, making it a fertile ground for computational exploration.


<a id="hackenbush-summary"></a>
## Summary

Finite blue-red stalks are number forms with exact dyadic values. The corrected simplicity rule requires numerical options; midpoint refinement proves the sign expansion and realizes every dyadic. Order and support matter more than colour counts. All-green stalks give nimbers, while green edges in mixed supported positions cannot be split off without independence. The Domineering chapter next applies outcome and value distinctions to board components.

