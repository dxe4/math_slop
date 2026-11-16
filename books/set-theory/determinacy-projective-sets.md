
# Determinacy and Projective Sets

A payoff set specifies which infinite plays a player wins. Determinacy asks for one strategy that succeeds against every legal opponent response, not merely one successful play. Open payoffs have a complete transfinite attractor proof. Arbitrary payoffs can be undetermined under Choice. A perfect-set game then shows how a determinacy hypothesis can impose regularity on sets of reals.

The elementary game arguments can be carried out in ZF with fixed natural-number codes. Whenever Choice is used, especially in the undetermined-game construction, it is stated explicitly. Full AD is incompatible with AC, so a theorem under AD is not silently a theorem in the ZFC setting of the preceding chapters. Projective determinacy restricts the payoff class and is a different, compatible-with-Choice hypothesis.

## Strategies quantify over all responses

In G(A), players I and II alternately choose natural numbers. Their completed play x belongs to Baire space. Player I wins exactly when x∈A. A strategy for I assigns a next move to every even-length finite history; one for II assigns it to every odd-length history. A strategy is winning when **every** play following it has the corresponding winning outcome, regardless of the other player's choices.

A successful play witnesses only that one sequence lies in A or its complement. It does not establish a strategy. Conversely two winning strategies for opposite players cannot coexist: following both recursively produces one play, which would have to lie both inside and outside A. Determinacy therefore means exactly one player has a winning strategy, when one exists at all.

The tree of finite histories is countable and has its usual prefix relation. Games on countable arenas or with finite-string moves can be coded by naturals. Specify illegal moves to lose for the player making them, and specify how a finite terminated play is continued if an infinite-play representation is needed. These conventions are part of a faithful translation, particularly when an open target condition is introduced.

## Open payoff as finite evidence

A set A is open in Baire space when each x∈A has some finite prefix s whose entire cylinder lies in A. Let U be the set of those immediately winning prefixes. Then a play belongs to A exactly when it eventually reaches U. Thus I's objective in an open game is a reachability target, while II tries to avoid that target forever.

Define W₀=U. At a successor stage add every I-position with some successor already in the previous W, and every II-position with all successors already in it; retain previous members. At limit ordinals take unions. This monotone construction eventually stabilizes. For example, carry it out through the Hartogs ordinal of the countable position set. If every successor stage were strict, choose the first newly added history in a fixed natural-number enumeration at each stage. Those distinct choices would inject that Hartogs ordinal into the positions, contrary to its definition. Once two consecutive stages agree, the defining operator keeps them equal thereafter.

Assign every member of the stable W its least entry stage, its rank. Initial targets have rank zero, and new members enter at successor stages because limits are unions. An I-position of positive rank has a successor of smaller rank; a II-position of positive rank has every successor of smaller rank.

**Theorem 12.1 (Open determinacy).** Every open payoff game on natural moves is determined.

*Proof.* If the initial position lies in W, let I always choose the first successor of smaller rank until the target is reached; at target or unreachable histories give the strategy the default move zero. Every opponent move before the target also lowers rank by the II-position rule. An infinite target-free play would therefore give an infinite descending ordinal sequence, impossible. Every play following this strategy reaches U after finitely many moves and belongs to A, so I wins.

If the initial position lies outside W, an I-move cannot enter W, because such a position would have been added. At a II-position outside W some successor is outside W, since otherwise the stable-set rule would add it. Let II choose the first such successor, with default zero on other histories. Every play following that strategy remains outside W and hence avoids U. Since A is open, a play avoiding all U-prefixes is outside A. Thus II wins. ∎

All choices are least natural moves or least coded positions. No arbitrary simultaneous Choice principle was needed for these strategies. The proof uses transfinite ranks because infinitely branching positions can require entry stages beyond every finite depth. A finite search bound would prove only its own bounded approximation.

Closed determinacy follows by applying the same attractor argument to the complement, with the target player and the opponent exchanged. The target player need not be the one making the first move; the two successor rules simply exchange roles. Complementing a closed payoff gives an open one, so one player has the required strategy.

## What is imported for Borel and projective games

Borel determinacy says that every Borel payoff is determined in ZFC. The open/closed proof above is its elementary beginning, not a proof of the whole theorem. Arbitrary countable Boolean combinations cannot be handled by merely selecting independently winning strategies for their pieces, because one move can affect several objectives incompatibly. Martin's Borel theorem is a deep cited result here.

Projective determinacy, PD, asserts determinacy for every boldface projective payoff, allowing real parameters in the definitions. The projective classes are built from Borel sets by finitely many projections and complements as in Chapter 11. PD therefore extends the Borel conclusion but does not quantify over arbitrary sets of reals. The cited large-cardinal implication from infinitely many Woodin cardinals supplies PD; that implication and the deeper measure/category regularity consequences are not proved by the attractor construction.

Full AD asserts determinacy for every A⊆Baire. It is studied in ZF settings, often in inner models with specified additional choice principles. Neither PD nor Borel determinacy may be substituted for AD when the payoff is an arbitrary set selected by an unrestricted well ordering.

## A full undetermined-game construction under Choice

**Theorem 12.2.** In ZFC there is a payoff set A for which neither player has a winning strategy.

*Proof.* The set of each player's strategies has cardinal continuum: it is the set of functions from a countably infinite collection of finite histories into omega. Code these functions by real sequences. Well order and list both strategy sets in continuum many positions, allowing repetitions if convenient.

Every fixed I-strategy is compatible with continuum many plays. The opponent can choose an arbitrary sequence of its own moves; recursion then determines the other moves, and different opponent sequences give different complete plays. The same statement holds for a fixed II-strategy.

At stage α below the initial continuum cardinal, choose a fresh play xₐ compatible with the αth I-strategy, and a different fresh play yₐ compatible with the αth II-strategy. Avoid every play chosen earlier and use a fixed well order of all plays to make each choice. Fewer than continuum many plays have been used: the earlier index ordinal has smaller cardinality, and doubling an infinite smaller cardinal does not reach continuum. No regularity of the continuum is needed for this individual-stage bound. Each compatible-play collection has continuum size, so both choices exist.

Set A={yₐ:α below continuum}. Every I-strategy has its chosen xₐ outside A, because all selected plays were distinct. Thus it is not winning. Every II-strategy has its chosen yₐ in A, so it is not winning either. This proves the theorem. ∎

The construction supplies no Borel or projective complexity bound for A. It must not be presented as a counterexample to Borel determinacy or to PD. Its unrestricted well order and diagonal selections are precisely where the Choice-based argument leaves the definable payoff classes.

The same proof shows in ZF that AD forbids a well ordering of the reals. Such a well order would also well order all strategy codes and provide the least fresh compatible-play choices used above; no further global Choice is needed once those real codes are well orderable. Therefore AD contradicts AC, which would supply that well ordering. This is a direct game-theoretic incompatibility proof, independent of the separate nonmeasurable-set argument.

## The perfect-set game

For A⊆Baire, consider this game. At each round I offers two incompatible finite extensions of the currently selected prefix, each strictly longer than it. II chooses one. The selected strings increase in length and determine one infinite real. I wins when that real belongs to A. Finite strings and offers are coded by natural moves; illegal offers or choices lose for their actor. AD applies to this coded payoff game.

If I has a winning strategy, all sequences of binary II-choices produce reals in A. Distinct binary branches first choose incompatible strings and hence different reals. Common long branch prefixes force common long real prefixes, so the map from Cantor space into A is continuous. Its image is closed and has no isolated points, by the same binary diagonal-subsequence and late-splitting arguments proved in Chapter 11. Thus A contains a perfect subset.

The reverse outcome gives an equally important countability proof.

**Lemma 12.3.** If II has a winning strategy in the perfect-set game, then A is countable.

*Proof.* Fix x∈A. Starting from the empty prefix, attempt to play against that II-strategy while keeping every selected prefix compatible with x. At each history, if some legal offer makes the strategy choose an extension along x, take the first such offer in a fixed enumeration. If this could continue forever, growing prefix lengths would produce exactly x, defeating the winning II-strategy. Therefore the attempt reaches a finite history h at which no offer produces a selected extension along x. Call h a blocking history for x.

At most one real extending the current prefix can be blocked at one h. If distinct x,y were both blocked there, choose finite incompatible extensions along them and offer that pair. Whichever one II's strategy selected would be compatible with one of x,y, contradicting that real's blocking property. There are only countably many finite histories. Assign each x its first blocking history under the fixed attempt procedure; the preceding uniqueness makes this assignment injective into a countable set. Thus A is countable. ∎

**Theorem 12.4.** AD implies every set of Baire reals has the perfect-set property.

*Proof.* The perfect-set game is determined by AD. An I-win supplies a perfect subset and a II-win supplies countability by Lemma 12.3. These are the two required alternatives. ∎

This proves one determinacy-to-regularity implication in full. It does not prove the Lebesgue measure or Baire-property consequences of AD, whose games and envelope arguments differ. The earlier source correctly records those as deeper specialist theorems.

## Restricting the argument to projective sets

If A is projective, the coded perfect-set game's payoff is projective. On legal plays the map sending the sequence of offers and choices to the selected real is continuous: a finite real prefix is fixed after a finite number of rounds. Extend this map after a first illegal move by retaining its last legal selected prefix and filling the rest with zeros. This gives a continuous total map as well: late illegality does not change already selected digits, and first-illegal histories determine their completed default output. Illegal-play winner outcomes are determined by finite histories and form Borel cases. Projective classes are closed under continuous preimages and these Borel Boolean combinations, as follows inductively from their Borel/projection/complement definitions; witness coordinates are retained when taking a preimage of a projection.

PD therefore suffices to determine this game for projective A and the same proof gives projective perfect-set properties. This includes the additional hypothesis missing from a blanket ZFC claim about coanalytic perfect sets. Analytic sets already have a ZFC perfect-set theorem from their closed projections, so invoking PD for that smaller class would be unnecessary.

In contrast, the arbitrary diagonal A of Theorem 12.2 was not shown projective. PD can coexist with AC because it does not include that uncontrolled payoff. Full AD includes it when a well ordering is present and yields the contradiction. A regularity argument must name both its payoff complexity and its determinacy assumption.

## Worked example 1: an open target and a closed constraint

Let A be the plays containing a zero somewhere. It is open: the finite prefix ending at the first zero already ensures membership. I can choose zero as its first move and wins. For the closed payoff saying that every even-position move is zero, I can again win by choosing zero at each of its turns; one nonzero even-position move is a finite witness of failure, so its complement is open.

These two simple strategies use different payoff forms but both quantify over every opponent response. Producing one all-zero play would not by itself justify either strategy claim. The rule must specify what I does at every history where it moves.

## Worked example 2: a transfinite entry rank

Consider a countable arena where II first chooses a natural n, after which a forced chain of n moves reaches I's target. All remaining moves on that chain have one legal successor. The target has rank zero, the chain positions have their finite distances as ranks, and the initial II-position enters the attractor at omega+1 because its successor ranks are unbounded among the naturals.

Every play reaches the target in finite time, but there is no one finite bound on the time across all choices of n. This is why a winning open-game rank can be transfinite. The arena is infinitely branching at its root, so it does not contradict the finite-branching compactness argument from Ramsey theory.

## Worked example 3: II avoids a countable payoff

Let A be listed as a₀,a₁,…, with repetitions allowed. In the perfect-set game, at round n at most one of I's two incompatible strings can be a prefix of aₙ. II chooses the other, using either if neither agrees. The final real differs from aₙ for every n and therefore is outside A.

This is an explicit winning II-strategy for a countable payoff. It complements Lemma 12.3: under determinacy, a winning II outcome certifies the countable side, while the concrete strategy here uses a supplied enumeration to avoid each listed real. It does not furnish an enumeration for an arbitrary set merely because a finite sample looks countable.

## Exercises with complete solutions

### 1. Winning versus possible {#determinacy-projective-sets-ex-1}

Why can two players not both have winning strategies?

<details><summary>Hint 1</summary>

Follow both prescribed moves recursively.

</details>
<details><summary>Hint 2</summary>

The resulting one play has exactly one payoff membership value.

</details>
<details><summary>Solution</summary>

Their strategies jointly determine a complete play. The I-winning claim would put it in A, while the II-winning claim would put it outside A. This is impossible. A play compatible with one strategy can still exist without that strategy winning; the quantifier over all responses is essential.

</details>

### 2. The stable complement {#determinacy-projective-sets-ex-2}

Why can II keep a play outside the open attractor when it starts there?

<details><summary>Hint 1</summary>

Inspect the two predecessor rules at stationarity.

</details>
<details><summary>Hint 2</summary>

An I-position has no successor inside; a II-position has some successor outside.

</details>
<details><summary>Solution</summary>

Otherwise the stable operator would have added the position. At II-turns choose a first outside successor; at I-turns every possible move remains outside. Induction on finite prefixes keeps the play outside U. Openness then says its infinite result is outside A, so II wins.

</details>

### 3. Why ranks terminate a play {#determinacy-projective-sets-ex-3}

What prevents a target-free play following the rank strategy from continuing forever?

<details><summary>Hint 1</summary>

Every move, including the opponent's, lowers the rank.

</details>
<details><summary>Hint 2</summary>

Ordinals admit no infinite strict descending sequence.

</details>
<details><summary>Solution</summary>

At positive I-rank the strategy picks a smaller-ranked child; at positive II-rank all children are smaller. An infinite target-free play would therefore produce an infinite strict ordinal descent. The well ordering of ordinals forbids it, so some finite prefix reaches rank zero and the target.

</details>

### 4. A singular continuum {#determinacy-projective-sets-ex-4}

Does the diagonal undetermined-game proof require the continuum to be regular?

<details><summary>Hint 1</summary>

At stage α only its own earlier selected plays are excluded.

</details>
<details><summary>Hint 2</summary>

For every α below an initial cardinal, |α| is strictly smaller.

</details>
<details><summary>Solution</summary>

No. At one stage the forbidden collection has size at most twice |α| plus a finite amount, still below continuum. Each compatible-play set has full continuum size. This leaves a fresh play at every individual stage without taking a supremum of all earlier cardinal bounds and declaring it smaller. Thus singularity would not invalidate the argument.

</details>

### 5. Payoff complexity {#determinacy-projective-sets-ex-5}

Why does Theorem 12.2 not contradict Borel determinacy?

<details><summary>Hint 1</summary>

The diagonal construction used an arbitrary well ordering.

</details>
<details><summary>Hint 2</summary>

It supplied no Borel code for its payoff set.

</details>
<details><summary>Solution</summary>

The chosen set is an unrestricted subset assembled to defeat every strategy. No Borel representation was established, and Borel determinacy implies it cannot be Borel. The theorem refutes universal determinacy under Choice, not determinacy for each controlled definable pointclass.

</details>

### 6. A blocking history {#determinacy-projective-sets-ex-6}

Why can one finite history block at most one target real in Lemma 12.3?

<details><summary>Hint 1</summary>

Two distinct target reals eventually have incompatible prefixes.

</details>
<details><summary>Hint 2</summary>

Offer those two prefixes together.

</details>
<details><summary>Solution</summary>

If both targets extended the current prefix and were blocked there, choose incompatible longer prefixes along them. The legal offer forces II to select one. That selected prefix is compatible with its corresponding target, contradicting that target's definition of blocking. Hence distinct targets cannot receive the same blocking history.

</details>

### 7. Countably many histories {#determinacy-projective-sets-ex-7}

How does a winning II-strategy yield an actual countability conclusion rather than merely no Cantor construction?

<details><summary>Hint 1</summary>

The attempted target-following procedure must stop for every x in A.

</details>
<details><summary>Hint 2</summary>

Assign its first blocking history and use uniqueness.

</details>
<details><summary>Solution</summary>

If the procedure did not stop it would produce x against the winning strategy. Thus every x∈A has a first blocking history. The fixed enumeration makes its attempted path definite, and one history blocks at most one x. The resulting injection into the countable finite-history set proves A countable. Failure of one candidate perfect tree alone would be a weaker statement.

</details>

### 8. Which regularity theorem? {#determinacy-projective-sets-ex-8}

Does the perfect-set game proof also establish Lebesgue measurability under AD?

<details><summary>Hint 1</summary>

Its alternatives are a Cantor embedding and countability.

</details>
<details><summary>Hint 2</summary>

No measure approximation or measurable envelope was constructed.

</details>
<details><summary>Solution</summary>

No. It proves the perfect-set property. AD's measure theorem uses additional games and a different argument, retained here as a specialist cited consequence. Topological size, category and measure are different regularity requirements and cannot be exchanged merely because all follow under some common hypothesis.

</details>

### 9. PD with Choice {#determinacy-projective-sets-ex-9}

What prevents the Choice diagonal from refuting PD?

<details><summary>Hint 1</summary>

PD quantifies only over projective payoffs.

</details>
<details><summary>Hint 2</summary>

The arbitrary diagonal set has no supplied projective complexity bound.

</details>
<details><summary>Solution</summary>

The diagonal construction ensures failure of strategies for some arbitrary payoff, but does not show that payoff is projective. Thus it lies outside the established domain of PD unless a separate definability argument proves otherwise. Full AD includes all payoffs and conflicts with a well ordering; PD is restricted and can consistently coexist with AC under its stronger consistency assumptions.

</details>

### 10. A fixed depth is insufficient {#determinacy-projective-sets-ex-10}

Why would finite attractor iteration miss the initial winner in the n-choice arena?

<details><summary>Hint 1</summary>

The opponent can choose a chain longer than any fixed finite depth.

</details>
<details><summary>Hint 2</summary>

All finite child ranks appear only together at the limit.

</details>
<details><summary>Solution</summary>

At every finite stage some longer chain successor is still absent, so the initial universal predecessor rule cannot add the II-position. At the omega union every finite chain entry is included, and the next stage adds the root, rank omega+1. Every play still terminates, but there is no uniform finite bound across choices. The transfinite theorem covers this case while a bounded graph search does not.

</details>

## Chapter summary

Open and closed games are determined by a transfinite attractor and complementary avoidance strategy. Choice supplies an unrestricted diagonal undetermined game, so full AD forbids a well ordering of the reals. The perfect-set game proves a complete determinacy-to-perfect-set implication and its projective restriction. Borel determinacy, large-cardinal PD and measure/category regularity remain precisely identified deeper inputs.

## Sources

This chapter is new exposition of elementary determinacy and projective-set themes from Jech and Kunen, connected to the retained descriptive-set source. Gale–Stewart open determinacy is proved by the attractor argument; Martin's full Borel theorem and the Woodin-cardinal implication are cited specialist results. The undetermined-game diagonal and perfect-set-game arguments are supplied in full. No strategy solver, empirical study or code is executed.
