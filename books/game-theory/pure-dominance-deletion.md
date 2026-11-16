
# Dominance

A best response is best against specified opponents' choices. A dominant action
makes a stronger comparison across all of those choices. Keeping these
quantifiers separate is essential: an action can be sensible against one
opponent action, inferior against another, or uniformly worse than an available
alternative. Dominance identifies the last situation without requiring a
prediction of the opponents' actions.

Read [Strategic-Form Games](strategic-form-games.md). We use its finite player
sets, nonempty finite action sets, real payoff functions and notation
$a_{-i}$ for opponents' profiles. All comparisons in this chapter concern pure
actions in the stated game or restriction. Randomisation is developed in
Mixed Strategies; no claim about dominance by a mixed action is silently
included in the pure-action results below.

## State which action is compared with which

**Definition 2.1 (Strict dominance).** Player $i$'s action $b_i$ strictly
dominates their distinct action $a_i$ if

$$u_i(b_i,a_{-i})>u_i(a_i,a_{-i})
\quad\text{for every }a_{-i}\in A_{-i}.$$

The action $a_i$ is strictly dominated if such an available $b_i$ exists.
An action is strictly dominant if it strictly dominates every other action
of that player. A singleton action set has no competing action; claims of
strict superiority should identify whether this vacuous case is intended.

**Definition 2.2 (Weak dominance).** Action $b_i$ weakly dominates $a_i$
if its payoff is at least as large at every opponents' profile and strictly
larger at at least one. An action weakly dominates another only when the
specified strict comparison exists; payoff-identical actions are not weakly
dominating under this convention.

Some authors use “weakly dominant” for an action that is a best response
against every opponents' profile, allowing complete ties. To avoid a
terminology collision, this text calls that property **uniformly best**.
It states the inequalities directly whenever the distinction matters.
In particular, a strictly dominant action is uniformly best, whereas an
action weakly dominating one competitor need not dominate the others.

A best-response statement has the form “for this opponents' profile, there
exists a maximising action”. Strict dominance requires one fixed alternative
to beat a specified action at every profile. Moving the “exists” quantifier
inside the “for every” quantifier describes a different property. A player
with several locally useful actions need not have a dominant action.

**Worked example 2.3 (A uniformly inferior row).** Player 1's payoffs are

| Row / Column | Left | Middle | Right |
| --- | --- | --- | --- |
| A | $1$ | $4$ | $0$ |
| B | $2$ | $5$ | $3$ |
| C | $6$ | $1$ | $2$ |

B strictly dominates A because the three comparisons are $2>1$, $5>4$
and $3>0$. B does not dominate C: C is better against Left. C does not
dominate B: B is better against Middle. Eliminating A is justified by its
uniform inferiority to B; announcing B as the player's uniquely sensible
choice against every column would go beyond those comparisons.

## What deletion means mathematically

**Definition 2.4 (Restriction).** A restriction chooses a nonempty subset
$B_i\subseteq A_i$ for every player and restricts the original payoff
functions to the product $B=\prod_i B_i$. A deletion removes one action
from one player's current set while leaving that set nonempty.

Dominance in a restriction quantifies only over its remaining opponents'
profiles, and its dominating action must still be available in the same
restriction. It is not a statement that the payoff table itself has changed.
Shrinking opponents' sets can make a previously useful action become dominated.
Shrinking one's own set can remove a proposed dominating witness, so a proof
about deletion order must account for witnesses rather than assuming they
survive automatically.

**Proposition 2.5 (One strict deletion preserves pure equilibria).** If an
action strictly dominated by another pure action is deleted, the pure Nash
equilibria of the restricted game are exactly the original game's pure
equilibria that use surviving actions. Every original pure equilibrium uses
surviving actions in this strict-deletion case.

*Proof.* The dominated action cannot be a best response against any fixed
opponents' profile, so it cannot be used at an original pure equilibrium.
Any equilibrium using only surviving actions remains an equilibrium after
the set of possible deviations shrinks. Conversely, let a surviving profile
be an equilibrium after deletion. Its owner obtains at least the payoff of
the surviving dominating action. The removed action gives strictly less
than that dominating action against these fixed opponents. It cannot supply
a profitable additional deviation, while all other deviations were already
checked in the restricted game. Hence the profile is also an original
equilibrium. ∎

Repeated application proves the same preservation through any finite sequence
of such strict deletions. It does not imply that the reduced game must have
a pure equilibrium: matching pennies has no dominated pure actions and no
pure equilibrium. Preservation of an empty equilibrium set is still preservation.

**Worked example 2.6 (An iterative solution).** Consider

| Player 1 / Player 2 | L | R |
| --- | --- | --- |
| A | $(3,2)$ | $(1,1)$ |
| B | $(2,0)$ | $(0,3)$ |

For player 1, A strictly dominates B, so delete B. In the remaining row,
player 2 prefers L, with payoff two rather than one. Delete R in that
restriction, leaving (A,L). It is an equilibrium in the original game:
player 1 would fall from three to two by choosing B, and player 2 from
two to one by choosing R. Before B was removed, player 2 did not have a
dominant action: against B, R was better. The order of reasoning therefore
matters to the explanation even though the strict-deletion terminal sets have
the order property proved next.

## Why iterated pure strict deletion has one terminal restriction

**Proposition 2.7 (Order independence for pure strict dominance).** In a finite
game, any sequence that repeatedly deletes a pure action strictly dominated
by an available pure action, and continues until no such deletion is possible,
ends with the same action sets.

*Proof.* First establish a local joining property. Suppose two different
actions $a$ and $b$ can each be deleted from a restriction. If they belong
to different players, deleting either shrinks the opponents' possibilities
for the other comparison and does not remove its own-player witness.
Thus both deletions can be made in either order.

If they belong to the same player, let their witnesses be $c$ and $d$.
If neither witness is the other deleted action, both comparisons survive.
If $c=b$, then $b$ strictly dominates $a$, while $d$ strictly dominates
$b$. Transitivity of strict inequality makes $d$ a surviving witness
against $a$ after deleting $b$. The case $d=a$ is symmetric. Both
cross-witness cases cannot occur together, because two actions cannot each
strictly dominate the other. Therefore again both branches reach the restriction
with both actions removed.

Deletion terminates because it strictly reduces the finite total number of
actions. Prove uniqueness of terminal descendants by induction on that total.
If no deletion is possible it is immediate. Otherwise two first deletions
are either identical, where induction applies to the same smaller game,
or different. By the joining property their descendants can both reach the
restriction with both actions removed. Induction in each first-step restriction
says its terminal descendant agrees with a terminal descendant of that common
smaller restriction. Thus the two terminal descendants agree. This covers
any choices of first deletion and completes the induction. ∎

The proposition concerns pure witnesses and strict inequalities in finite
games. It is not permission to replace “strict” by “weak” or to change the
elimination rule midway without another argument. It also says the terminal
action sets agree, rather than asserting a unique surviving profile or a
unique equilibrium within them.

## Ties make weak elimination more delicate

**Worked example 2.8 (A pure equilibrium lost at a tie).** Let

| Player 1 / Player 2 | L | R |
| --- | --- | --- |
| A | $(1,1)$ | $(1,0)$ |
| B | $(1,1)$ | $(0,0)$ |

A weakly dominates B: they tie against L, but A is better against R.
Both (A,L) and (B,L) are pure equilibria. Deleting B removes the second
one, even though no player at that profile had a strictly profitable deviation.
The possibility of indifference is exactly what makes the strict-deletion
preservation statement fail in its final sentence for weak deletion.

The converse lifting argument still works for a single weak deletion with
a surviving witness: a newly surviving pure equilibrium cannot gain a profitable
deviation to an action no better than an available one. Weak deletion can
lose equilibria; it does not create a new pure equilibrium among surviving
profiles. This does not make repeated weak deletion order independent,
because ties and strict witnesses can disappear in different restrictions.

For an explicit order effect, use

| Player 1 / Player 2 | L | R |
| --- | --- | --- |
| A | $(1,1)$ | $(1,1)$ |
| B | $(1,1)$ | $(0,0)$ |

A weakly dominates B, and L weakly dominates R. Delete B first: the two
remaining columns are payoff-identical for player 2, so neither weakly dominates
the other under our strict-somewhere convention. The terminal sets are
$\{A\}$ and $\{L,R\}$. Delete R first: the remaining rows tie for
player 1, so the terminal sets are $\{A,B\}$ and $\{L\}$.
Both procedures are valid and their terminal restrictions differ.

## Behavioural interpretation requires its own assumptions

Strict dominance says that a particular alternative gives a strictly larger
payoff at every specified opponents' profile. If the player evaluates a finite
lottery by expected payoff, the comparison remains strict under any probability
distribution on those profiles: every term of the payoff difference is positive,
and the weights are nonnegative and sum to one. This conclusion does not
require opponents' choices to be independent.

Iterating the behavioural argument asks more. The player must attach no
probability to opponents' eliminated actions, which invokes beliefs about
the opponents' decision making, and further rounds invoke beliefs about those
beliefs. The table and deletion algorithm establish mathematical restrictions;
the claim that real play must follow them requires the corresponding knowledge
and decision assumptions. A participant with different payoffs, misunderstood
rules or limited reasoning is not automatically described by that behavioural
model.

Keep three conclusions separate: an action is dominated in a specified
restriction; a theorem describes what deletion preserves; and a behavioural
hypothesis says why a player would avoid the action. Each has a different
warrant. The next chapter studies the mutual best-response condition directly,
including profiles that dominance alone cannot identify.

## Exercises

### Exercise 2.1
<a id="dominance-ex-1"></a>

In Example 2.3, show that C is a best response to some column even though
it is not dominant.

<details><summary>Hint 1</summary>

Fix Left and compare player 1's three numbers.

</details>
<details><summary>Hint 2</summary>

The comparison against Middle prevents a uniform dominance conclusion.

</details>
<details><summary>Solution</summary>

Against Left, C gives six, exceeding A's one and B's two, so it is
the unique best response there. Against Middle, C gives one while B gives
five. Thus C is locally best but not uniformly best, and cannot be strictly
dominant.

</details>

### Exercise 2.2
<a id="dominance-ex-2"></a>

Rows have payoffs A: $(2,2)$ and B: $(2,1)$ against two columns.
Classify the dominance relation and identify where strictness occurs.

<details><summary>Hint 1</summary>

Check each coordinate comparison, not their sum.

</details>
<details><summary>Hint 2</summary>

A tie at one opponent action excludes strict dominance.

</details>
<details><summary>Solution</summary>

A weakly dominates B: the first comparison ties at two and the second
is $2>1$. It does not strictly dominate B because strict inequality
fails at the first column. B has neither dominance relation over A.

</details>

### Exercise 2.3
<a id="dominance-ex-3"></a>

Explain why a strictly dominated pure action cannot be used at a pure
Nash equilibrium of the same restriction.

<details><summary>Hint 1</summary>

Fix the opponents' coordinates from the proposed equilibrium.

</details>
<details><summary>Hint 2</summary>

The dominating witness gives a legal strictly profitable deviation there.

</details>
<details><summary>Solution</summary>

At that fixed opponents' profile, the strict dominance inequality still
holds. Changing to the available witness increases the player's payoff,
contradicting the best-response requirement for equilibrium. The comparison
must be in the same restriction so that the witness is genuinely available.

</details>

### Exercise 2.4
<a id="dominance-ex-4"></a>

Carry out the two deletions in Example 2.6 and verify the surviving profile
against every original deviation.

<details><summary>Hint 1</summary>

First compare A and B using first-coordinate payoffs.

</details>
<details><summary>Hint 2</summary>

After deleting B, compare second-coordinate payoffs in row A.

</details>
<details><summary>Solution</summary>

A strictly dominates B because $3>2$ and $1>0$. In row A,
L beats R for player 2 because $2>1$. At (A,L), player 1's only
other original action lowers their payoff to two, and player 2's lowers
theirs to one. Thus no original profitable deviation is missing from the
reduced calculation.

</details>

### Exercise 2.5
<a id="dominance-ex-5"></a>

Can two distinct actions of the same player strictly dominate each other
in one nonempty restriction? Prove your answer.

<details><summary>Hint 1</summary>

Choose any opponents' profile in that restriction.

</details>
<details><summary>Hint 2</summary>

The two proposed strict inequalities would point in opposite directions.

</details>
<details><summary>Solution</summary>

No. Nonempty opponents' action sets give at least one profile. At it,
mutual strict dominance would require both $u(a)>u(b)$ and $u(b)>u(a)$,
an impossibility for real numbers. This also explains why two actions
cannot be each other's strict witnesses in the joining proof.

</details>

### Exercise 2.6
<a id="dominance-ex-6"></a>

Suppose B strictly dominates A and C strictly dominates B for the same
player. Show that deleting B does not protect A from strict deletion.

<details><summary>Hint 1</summary>

Write all three payoffs at one arbitrary opponents' profile.

</details>
<details><summary>Hint 2</summary>

Use transitivity, then restore the universal quantifier.

</details>
<details><summary>Solution</summary>

For every opponents' profile, $u(C)>u(B)>u(A)$, so $u(C)>u(A)$.
C is distinct from A and B and is a surviving strict witness against A
when only B is deleted. The argument works uniformly over the current
opponents' profiles.

</details>

### Exercise 2.7
<a id="dominance-ex-7"></a>

Verify that (B,L) in Example 2.8 is an equilibrium before B is deleted.
Which best-response inequality is a tie?

<details><summary>Hint 1</summary>

Compare player 1's rows in column L.

</details>
<details><summary>Hint 2</summary>

Compare player 2's columns along row B.

</details>
<details><summary>Solution</summary>

Player 1 receives one from either row in column L, so B is a best
response through a tie. Player 2 receives one from L and zero from R
in row B, so L is strictly best. Both chosen actions are best responses,
even though B is weakly dominated in the full game.

</details>

### Exercise 2.8
<a id="dominance-ex-8"></a>

For the final weak-order-effect matrix, give both terminal restrictions
and explain why no further weak deletion is allowed under our convention.

<details><summary>Hint 1</summary>

Delete B first in one sequence and R first in the other.

</details>
<details><summary>Hint 2</summary>

A strict-somewhere comparison disappears when the corresponding opponent
action is removed.

</details>
<details><summary>Solution</summary>

Deleting B leaves row A with second payoffs one and one, so columns tie
and no weak deletion remains: sets are $\{A\},\{L,R\}$.
Deleting R leaves column L with first payoffs one and one, so rows tie:
sets are $\{A,B\},\{L\}$. Payoff identity lacks the strict comparison
required for weak dominance here.

</details>

### Exercise 2.9
<a id="dominance-ex-9"></a>

Show that strict pure dominance implies a strictly larger expected payoff
under every probability distribution on the finite opponents' profile set.

<details><summary>Hint 1</summary>

Form the expected difference between witness and dominated payoffs.

</details>
<details><summary>Hint 2</summary>

At least one probability weight is positive, and every payoff difference
is positive.

</details>
<details><summary>Solution</summary>

The difference is $\sum_{a_{-i}}p(a_{-i})[u(b_i,a_{-i})-u(a_i,a_{-i})]$.
Every term is nonnegative, and at least one is strictly positive because
the weights sum to one while each bracket is positive. Hence the total
is positive. No product or independence assumption on the weights was used.

</details>

### Exercise 2.10
<a id="dominance-ex-10"></a>

Does iterated strict deletion guarantee one surviving profile? Give a finite
counterexample and relate it to the order-independence theorem.

<details><summary>Hint 1</summary>

Consider a game with identical zero payoffs everywhere.

</details>
<details><summary>Hint 2</summary>

Order independence is a uniqueness claim about terminal restrictions,
not about the number of profiles inside one.

</details>
<details><summary>Solution</summary>

In a two-player two-action game with all payoff pairs $(0,0)$, no
strict deletion is possible. The unique terminal restriction is the full
game, containing four profiles, all pure equilibria. This satisfies order
independence while refuting uniqueness of a surviving profile.

</details>

## Summary and next connection

Dominance fixes an alternative action and compares it across all opponents'
profiles. Pure strict deletion preserves pure equilibria and has an
order-independent terminal restriction; weak deletion can lose tied equilibria
and depend on order. Mathematical deletion facts and behavioural belief
assumptions are separate. Nash equilibrium next studies mutual best responses
without assuming dominance resolves the game.
