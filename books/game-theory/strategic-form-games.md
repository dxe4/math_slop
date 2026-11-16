
# Strategic-Form Games

Two travellers choose a route before learning which route the other will take.
Two firms choose prices, two committees choose meeting days, or several people
choose how much effort to contribute to a shared task. Each person's outcome
depends on the combination of choices. A strategic-form game records who
chooses, which choices are available, and how each person ranks the resulting
profiles. That record is a mathematical model. It does not by itself supply
a prediction, a fairness judgement, or an explanation of how people reach
an outcome.

The preparation is [Introduction to Proof](#/books/introduction-to-proof)
and the counting and finite-probability chapters of
[Discrete Mathematics](#/books/discrete-mathematics-proof-counting-structure).
This L3 book later uses linear algebra and elementary calculus at the point
of need. This first chapter needs only finite sets, functions, inequalities
and careful quantifiers. It teaches deterministic pure choices first;
probability distributions over choices are developed in Mixed Strategies.
The distinction matters when interpreting payoff transformations.

## Specify the model before solving it

**Definition 1.1 (Finite strategic-form game).** A finite strategic-form
game consists of a finite player set $N=\{1,\ldots,n\}$ with $n\ge2$,
a nonempty finite pure-action set $A_i$ for every player $i$, and a real-valued
payoff function

$$u_i:A\longrightarrow\mathbb R,\qquad
A=\prod_{j\in N}A_j.$$

An action profile $a=(a_1,\ldots,a_n)\in A$ specifies one action for
every player. Player $i$ prefers a profile with a larger value of $u_i$
to one with a smaller value; equal values represent indifference within
this model. The tuple of payoff functions is as important as the action sets.
Changing either can create a different game even if the story retains the
same names.

The term action is convenient for a one-stage simultaneous-choice model.
In a strategic representation of a sequential game, a pure strategy is instead
a complete contingent plan, specifying an action at every information set
where that player could choose. That plan can include situations never reached
under the eventual profile. Extensive Form later develops this representation.
A two-by-two table should not be assumed to capture an arbitrary sequential
interaction merely because two visible moves occurred.

Write $a_{-i}$ for the actions of every player other than $i$, so a profile
can be denoted $(a_i,a_{-i})$. This notation does not delete an opponent's
payoff or make their action irrelevant. It separates the coordinate that
player $i$ can change from the coordinates held fixed in a unilateral
comparison. Payoff functions may depend on all coordinates.

An explicit model should also say what players know, whether communication
or binding commitments are possible, and whether the available actions have
been chosen before an uncertain event is observed. These assumptions may
motivate a particular strategic-form description, even though the bare triple
records only action sets and payoffs. If players have different information
about unknown types, Bayesian Games supplies a richer model later in the book.

## Read a matrix as an indexed payoff function

For two players, put player 1's actions in rows and player 2's in columns.
Each cell contains an ordered pair: player 1's payoff first, player 2's
second. A row action chooses a complete row only after the column choice
is supplied; a player cannot pick an arbitrary cell while controlling just
one coordinate.

**Worked example 1.2 (Route congestion).** Each of two travellers chooses
Upper or Lower. Upper takes two minutes if used alone and six if both use
it; Lower takes four minutes regardless. Let payoffs be negative travel times,
so higher is better:

| Player 1 / Player 2 | Upper | Lower |
| --- | --- | --- |
| Upper | $(-6,-6)$ | $(-2,-4)$ |
| Lower | $(-4,-2)$ | $(-4,-4)$ |

At the profile (Upper, Lower), player 1 gets $-2$ and player 2 gets $-4$.
If player 1 alone switches to Lower, the new profile is (Lower, Lower),
and player 1 gets $-4$, which is worse. If player 2 alone switches to
Upper, the new profile is (Upper, Upper), and player 2 gets $-6$,
also worse. At (Upper, Upper), either player can improve by switching
to Lower, from $-6$ to $-4$.

The negative signs encode the stated preference to minimise time. They do
not mean travel time is physically negative. Minimising a nonnegative cost
$c_i$ is equivalent to maximising the payoff $u_i=-c_i$.
The action called Upper does not always have payoff minus two; its value
depends on congestion, hence on the other coordinate of the profile.

In this example, summing travel times has a clear physical interpretation
because both use the same minute unit and each is counted once. In an arbitrary
utility table, adding two players' numerical utilities need not have an
invariant welfare meaning. The individual preference representation does not
automatically provide an agreed interpersonal comparison scale.

## A unilateral comparison fixes everyone else

**Definition 1.3 (Pure best response).** Fix opponents' actions $a_{-i}$.
A pure best response of player $i$ is an action $b_i\in A_i$ such that

$$u_i(b_i,a_{-i})\ge u_i(c_i,a_{-i})
\quad\text{for every }c_i\in A_i.$$

There may be several best responses. The term means maximal payoff given
those particular fixed opponents' actions, not one action guaranteed best
against every possible choice. Nor does it claim the opponents will actually
choose the profile used in the comparison.

**Proposition 1.4 (Existence at a fixed pure profile).** In a finite strategic-form
game, every player has at least one pure best response to every fixed pure
opponents' profile.

*Proof.* The action set $A_i$ is nonempty and finite. Therefore its finite
nonempty set of real payoff values against the fixed $a_{-i}$ has a maximum.
Any action attaining that maximum satisfies every inequality in the definition.
There is no assertion here that a collection of such responses can be selected
so that they all respond to one another simultaneously. ∎

To find a row player's best responses in a matrix, fix a column and compare
first coordinates down that column. To find a column player's responses,
fix a row and compare second coordinates along it. Comparing both coordinates
inside a cell answers a different question, because those are two different
players' preference numbers.

A profile where every player's chosen action is a best response to the others
is called a pure Nash equilibrium. Nash Equilibrium gives the full treatment
later. Here the phrase provides a concise way to describe the unilateral
comparisons just made; it is not a synonym for any desirable or observed
outcome. The route example has two such profiles, (Upper, Lower) and
(Lower, Upper). The matrix alone does not choose which traveller gets the
faster route.

## Individual comparisons and joint improvement differ

**Worked example 1.5 (A common-payoff coordination problem).** Two groups
choose Tuesday or Thursday for a joint meeting. Matching on Tuesday gives
both payoff three, matching on Thursday gives both payoff two, and mismatching
gives both zero:

| Player 1 / Player 2 | Tuesday | Thursday |
| --- | --- | --- |
| Tuesday | $(3,3)$ | $(0,0)$ |
| Thursday | $(0,0)$ | $(2,2)$ |

At (Thursday, Thursday), neither group improves by switching alone: it would
cause mismatch. Both would prefer (Tuesday, Tuesday), but reaching it requires
coordinating two choices rather than a unilateral deviation. The two matching
profiles both satisfy the best-response condition, while only Tuesday gives
the larger common payoff. If binding advance communication were introduced,
that would be additional structure rather than a prediction obtained from
the table alone.

**Definition 1.6 (Pareto comparison).** A profile $b$ Pareto-dominates a
profile $a$ if $u_i(b)\ge u_i(a)$ for every player and the inequality
is strict for at least one player. A profile is Pareto-efficient among the
specified profiles if no available profile Pareto-dominates it.

This is a comparison of outcomes using each player's own ranking. It does
not ask whether a dominating profile is reachable by one player's move, and
it does not compare gains across different players. In the coordination
example, Tuesday matching Pareto-dominates Thursday matching, even though
Thursday matching resists unilateral improvement.

**Worked example 1.7 (The prisoner's-dilemma payoff pattern).** Each player
chooses Cooperate or Defect:

| Player 1 / Player 2 | Cooperate | Defect |
| --- | --- | --- |
| Cooperate | $(3,3)$ | $(0,5)$ |
| Defect | $(5,0)$ | $(1,1)$ |

Against Cooperate, Defect gives five rather than three. Against Defect, it
gives one rather than zero. The same strict comparison holds for player 2,
so (Defect, Defect) is the only mutual pure best-response profile. Nevertheless
(Cooperate, Cooperate) gives both three rather than one, and Pareto-dominates
it. Dominance develops the action comparison formally in the next chapter.
The conclusion concerns this specified table and one-stage deviation concept;
it is not a universal assertion about cooperation in repeated or binding-contract
models.

## Payoff representations have limits

**Proposition 1.8 (Strictly increasing transformations for pure comparisons).**
Replace player $i$'s payoffs by $v_i(a)=f_i(u_i(a))$, where $f_i$
is strictly increasing on the payoff values. Every pure best-response comparison
and every Pareto comparison is preserved when each player is transformed
independently this way.

*Proof.* Strict increase preserves and reflects $x>y$, $x=y$ and
$x\ge y$ among the values in question. Apply this to each comparison
against a fixed opponents' profile for best responses, and to each player's
comparison between two complete profiles for Pareto dominance. The relevant
inequalities therefore hold before transformation exactly when they hold after. ∎

This statement is deliberately about pure comparisons. Once payoffs are used
as utilities evaluated in expectation under randomisation, an arbitrary increasing
transformation need not preserve a preference between lotteries. Positive affine
changes $v_i=\alpha_i u_i+\beta_i$ with $\alpha_i>0$ do preserve
expected-payoff comparisons, because the expected transformed value is the same
positive scaling plus constant applied to the expected original value. Mixed
Strategies proves and uses the corresponding finite-sum statement.

For a simple warning, compare a certain payoff two with a lottery giving
zero or three with equal probabilities. Its expected original payoff is
$1.5$, below two. Squaring these nonnegative outcomes gives expected value
$4.5$, above the square four of the certain outcome. Squaring preserves the
order of the individual nonnegative outcomes but changes this lottery comparison.
The expectation model therefore needs the stronger utility interpretation.

## Finite does not mean a pure equilibrium exists

Consider two players choosing Heads or Tails, with player 1 receiving one
when the choices match and minus one otherwise; player 2 receives the opposite.
At every matching profile, player 2 can switch and improve from minus one
to one. At every mismatching profile, player 1 can switch and improve likewise.
There is no mutual pure best-response profile, although Proposition 1.4 gives
a best response to every fixed pure opponent action. The quantifiers differ:
responses exist after fixing an opponent, but no fixed point of the two
response requirements exists in these pure action sets.

This example motivates mixed strategies without establishing their properties
in advance. A finite action profile list is useful for checking the given
pure comparisons; it cannot prove a theorem about probability distributions
that have not yet been defined. Later existence results will state the
compactness, continuity and convexity hypotheses they use.

## Exercises

### Exercise 1.1
<a id="strategic-form-games-ex-1"></a>

A three-player game has action-set sizes two, three and four. How many pure
profiles are there, and why is their number not nine?

<details><summary>Hint 1</summary>

A profile specifies one action for each player simultaneously.

</details>
<details><summary>Hint 2</summary>

Apply the product rule for independent coordinate choices.

</details>
<details><summary>Solution</summary>

There are $2\times3\times4=24$ profiles. The sum nine counts all
individual action labels with their player identities, whereas a profile is
a tuple selecting one label from every set. Those are different collections.

</details>

### Exercise 1.2
<a id="strategic-form-games-ex-2"></a>

In the route game, list player 1's payoff at every profile and find their
best response to each fixed action of player 2.

<details><summary>Hint 1</summary>

Read only the first coordinate for player 1.

</details>
<details><summary>Hint 2</summary>

Fix a column before comparing rows.

</details>
<details><summary>Solution</summary>

The first payoffs at (Upper, Upper), (Upper, Lower), (Lower, Upper),
(Lower, Lower) are $-6,-2,-4,-4$. Against Upper, Lower is better
since $-4>-6$. Against Lower, Upper is better since $-2>-4$.
There is no one pure action best against both fixed opponent choices.

</details>

### Exercise 1.3
<a id="strategic-form-games-ex-3"></a>

Verify both mutual pure best-response profiles of the route game and show
why the two remaining profiles fail.

<details><summary>Hint 1</summary>

Check deviations by one player at a time.

</details>
<details><summary>Hint 2</summary>

At both equal-route profiles, a traveller can improve by moving to the other route.

</details>
<details><summary>Solution</summary>

At (Upper, Lower), switching alone changes player 1 from $-2$ to
$-4$ and player 2 from $-4$ to $-6$; neither improves. The reversed
profile has the symmetric checks. At (Upper, Upper), switching to Lower
improves either player's payoff from $-6$ to $-4$. At (Lower, Lower),
switching to Upper improves either from $-4$ to $-2$. Thus exactly
the two asymmetric profiles satisfy the condition.

</details>

### Exercise 1.4
<a id="strategic-form-games-ex-4"></a>

In the meeting game, explain how Thursday matching can resist unilateral
improvement while being Pareto-dominated.

<details><summary>Hint 1</summary>

A unilateral switch creates mismatch.

</details>
<details><summary>Hint 2</summary>

Pareto comparison can compare two profiles differing in both coordinates.

</details>
<details><summary>Solution</summary>

From Thursday matching, either unilateral switch gives the switching group
zero instead of two, so neither improves. Switching both choices gives
Tuesday matching with three for each, strictly improving both payoffs.
The unilateral and Pareto criteria quantify over different changes.

</details>

### Exercise 1.5
<a id="strategic-form-games-ex-5"></a>

Replace every payoff of player 1 in the route game by twice that payoff
plus ten. Find their transformed best responses.

<details><summary>Hint 1</summary>

The scaling factor is positive.

</details>
<details><summary>Hint 2</summary>

The transformed first payoffs are obtained cell by cell.

</details>
<details><summary>Solution</summary>

The transformed first payoffs are $-2,6,2,2$ in the previous profile
order. Against Upper, Lower gives two rather than minus two; against Lower,
Upper gives six rather than two. Best responses are unchanged, illustrating
the order-preservation proposition.

</details>

### Exercise 1.6
<a id="strategic-form-games-ex-6"></a>

Why is multiplying a player's payoff by minus one not covered by
Proposition 1.8? Give a two-value counterexample to preservation.

<details><summary>Hint 1</summary>

The hypothesis requires a strictly increasing transformation.

</details>
<details><summary>Hint 2</summary>

Compare the original preference between one and three.

</details>
<details><summary>Solution</summary>

Negation is decreasing. An action giving three is preferred to one giving
one, but after negation minus one is preferred to minus three. The ranking
reverses. A negative scaling therefore generally changes best responses.

</details>

### Exercise 1.7
<a id="strategic-form-games-ex-7"></a>

Prove directly that the matching-pennies game described in the chapter has
no pure mutual best-response profile.

<details><summary>Hint 1</summary>

Every profile is either a match or a mismatch.

</details>
<details><summary>Hint 2</summary>

In each case identify the player currently receiving minus one.

</details>
<details><summary>Solution</summary>

If actions match, player 2 receives minus one and changes action to make
a mismatch, receiving one. If actions mismatch, player 1 changes action to
make a match and improves from minus one to one. These exhaustive cases
exclude every pure profile. Individual best-response existence does not
supply a simultaneous fixed profile.

</details>

### Exercise 1.8
<a id="strategic-form-games-ex-8"></a>

Give a finite game in which a player has more than one best response to
the same fixed opponent action.

<details><summary>Hint 1</summary>

The definition allows equality of maximum payoffs.

</details>
<details><summary>Hint 2</summary>

Two row actions may have identical first-coordinate payoffs in a column.

</details>
<details><summary>Solution</summary>

Let both players have two actions and every payoff pair be $(0,0)$.
Against either fixed column, both row actions attain the maximum zero,
so both are best responses. Finiteness ensures existence, not uniqueness;
all four profiles are mutual pure best responses in this example.

</details>

### Exercise 1.9
<a id="strategic-form-games-ex-9"></a>

Explain why adding the players' utility numbers is not invariant under
independent positive affine changes of their payoffs.

<details><summary>Hint 1</summary>

Each player's scale can change separately while preserving their own rankings.

</details>
<details><summary>Hint 2</summary>

Compare profiles with original payoff pairs $(4,0)$ and $(0,3)$.

</details>
<details><summary>Solution</summary>

Originally the sums are four and three, ranking the first profile higher.
Multiply only player 2's utilities by two, a permitted positive affine
change for individual expected-payoff comparisons. The pairs become $(4,0)$
and $(0,6)$, reversing the sum ranking. A welfare interpretation of the
sum therefore requires additional interpersonal scale assumptions.

</details>

### Exercise 1.10
<a id="strategic-form-games-ex-10"></a>

Compare a certain payoff two with a lottery giving zero or three equally
likely. Repeat after squaring each outcome. What limitation does this show?

<details><summary>Hint 1</summary>

Average the two lottery outcomes, rather than squaring their average.

</details>
<details><summary>Hint 2</summary>

The squared lottery has outcomes zero and nine.

</details>
<details><summary>Solution</summary>

The original lottery has mean $1.5<2$, so expected original utility
prefers certainty. The transformed lottery has mean $4.5>4$, exceeding
the squared certain payoff. Squaring is increasing on these nonnegative
outcomes and preserves their pure rankings, but not this lottery preference.
Arbitrary increasing transformations are therefore insufficient for preserving
expected-utility comparisons.

</details>

## Summary and next connection

A finite strategic-form game specifies nonempty action sets and one real
payoff function per player on complete profiles. Best responses fix opponents'
coordinates, while Pareto comparisons can change an entire profile. Matrix
entries, signs and units must preserve the intended preferences. Pure ordinal
transformations and expected-utility transformations have different scopes.
The next chapter formalises dominance, including what its quantifiers justify
when actions are removed.
