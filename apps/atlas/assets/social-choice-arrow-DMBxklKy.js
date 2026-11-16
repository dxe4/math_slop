var e=`---
parent_id: book-game-theory
chapter_id: social-choice-arrow
title: "Social Choice and Arrow's Theorem"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Social Choice and Arrow's Theorem

Collective choice begins with a different problem from equilibrium. Given each person's ranking of alternatives, can a rule produce a coherent social ranking while respecting unanimous comparisons and treating each pair independently of other comparisons? Arrow's theorem gives an exact obstruction. It does not say that every decision rule is useless, that majority choice always fails, or that society must in practice appoint a dictator. It identifies incompatible requirements on a specified universal ranking rule.

Preparation is strict orders, finite sets, quantifiers and proof by contradiction from Introduction to Proof and Discrete Mathematics. Payoff matrices are not needed for the main proof. The result here is proved completely for finite nonempty voter sets and finite alternative sets of at least three elements, with strict individual and social orders. Allowing social ties, restricting the domain or asking only for a selected winner defines a different theorem.

## Rankings and aggregation

**Definition 14.1 (Strict linear order).** A strict ranking on a finite alternative set $X$ is irreflexive and transitive, and for any distinct $x,y$ exactly one of $x\\succ y$ or $y\\succ x$ holds. A preference profile gives one such ranking $\\succ_i$ for every voter $i$ in a finite nonempty set $N$.

**Definition 14.2 (Social welfare function).** A social welfare function $F$ assigns a strict linear social order $\\succ$ to every profile of strict individual orders on $X$. Unrestricted domain means every such profile is admitted.

The name welfare function is historical: the output is an ordinal ranking, not a numerical sum of utilities. The rule may distinguish voters or alternatives unless an axiom prevents it. In particular, anonymity and neutrality are not assumed in the theorem below.

**Definition 14.3 (Pareto and IIA).** Pareto unanimity says that if every voter ranks $x$ above $y$, society ranks $x$ above $y$. Independence of irrelevant alternatives, abbreviated IIA, says that if two profiles give each voter the same comparison between $x$ and $y$, their social comparison between $x$ and $y$ is the same.

IIA compares profiles on a fixed alternative set. It does not directly describe deleting an alternative from a ballot or changing a feasible menu. The other alternatives' locations may change in ways consistent with each voter's strict order, while the pairwise comparison under consideration is held fixed.

**Definition 14.4 (Dictator).** Voter $d$ is a dictator if, at every profile and for every distinct pair, $x\\succ_d y$ implies $x\\succ y$. The rule then reproduces that voter's whole ranking, regardless of other voters.

## A majority cycle

**Worked example 14.5 (Three individually coherent rankings).** Take three voters with rankings $a\\succ b\\succ c$, $b\\succ c\\succ a$ and $c\\succ a\\succ b$. Voters one and three prefer a to b; voters one and two prefer b to c; voters two and three prefer c to a. Pairwise majority therefore yields $a\\succ b\\succ c\\succ a$.

Every individual ranking is transitive. The cycle appears through aggregation, not through an irrational ballot. Pairwise majority respects unanimous comparisons and bases each pair only on voters' comparisons of that pair. It fails the requirement that the social result always be transitive. This supplies one example of failure, while Arrow's theorem shows why replacing majority by another universal nondictatorial ranking rule cannot preserve all the other requirements.

## Decisive coalitions

Fix a set $S$ of voters. For an ordered pair $(x,y)$, consider a polarized profile where exactly the voters in $S$ prefer x to y and all others prefer y to x. IIA makes society's answer identical at every profile with that pairwise pattern.

**Definition 14.6 (Polarized and strong decisiveness).** Coalition $S$ is polarized-decisive for $x$ over $y$ if society ranks x above y at the polarized pattern just described. It is strongly decisive for that pair if whenever every voter in $S$ ranks x above y, society does too, regardless of outsiders. It is strongly decisive if this holds for every ordered pair.

Strong decisiveness implies polarized decisiveness, but the converse needs proof. We will derive it from Pareto, IIA and transitivity. This step is where a careless proof can accidentally assume neutrality, meaning that the same rule handles all alternative names identically. No such assumption will be used.

**Lemma 14.7 (Transfer to a third alternative).** If $S$ is polarized-decisive for x over y, then it is strongly decisive for x over every third alternative z.

*Proof.* Start with any profile where every voter in $S$ prefers x to z; outsiders' x-versus-z comparisons are arbitrary. Construct another profile as follows. Voters in $S$ rank $x\\succ y\\succ z$. Every outsider puts y above both x and z, preserving that outsider's original comparison of x with z. Thus outsiders use either $y\\succ x\\succ z$ or $y\\succ z\\succ x$.

The x-versus-y pattern is polarized in favor of $S$, so society has $x\\succ y$. Everyone has $y\\succ z$, so Pareto gives $y\\succ z$. Social transitivity yields $x\\succ z$. Since every voter's x-versus-z comparison was preserved, IIA transfers that answer to the arbitrary original profile. Hence $S$ is strongly decisive for x over z. All other alternatives can be appended in any fixed order, so unrestricted domain permits the construction. ∎

Apply the lemma once more with the roles of y and z exchanged. Strong decisiveness for x over z implies polarized decisiveness for that pair, so the same lemma gives strong decisiveness for x over y. Thus a polarized victory already becomes strong for the original pair as well as every pair with first alternative x.

**Lemma 14.8 (Transfer of the first alternative).** Under the same hypotheses, $S$ is strongly decisive for every ordered pair.

*Proof.* We have strong decisiveness for x over every other alternative. Take distinct y and z, both different from x, and an arbitrary profile where $S$ unanimously prefers y to z. Construct a profile with voters in $S$ ranking $y\\succ x\\succ z$. Outsiders put x below both y and z while preserving their original y-versus-z comparison. Every voter then has $y\\succ x$, so Pareto gives $y\\succ x$ socially. Strong decisiveness for x over z gives $x\\succ z$, since voters in $S$ rank that way. Transitivity gives $y\\succ z$, and IIA transfers the result to the arbitrary original profile.

This proves every pair with neither endpoint x. To obtain y over x, choose a third z. We have strong, hence polarized, decisiveness for y over z. Lemma14.7 transfers it to strong decisiveness for y over x. Together with the pairs already established, this covers every ordered pair. With exactly three alternatives the same argument uses their one available third alternative; no fourth name is needed. ∎

These two lemmas establish the cross-pair property rather than assuming it. The constructions use only unrestricted individual strict orders, pairwise IIA, unanimous comparisons and social transitivity. Voter identities and alternative names are never symmetrized as an extra axiom.

## A smallest coalition must be a single voter

The full voter set is polarized-decisive for every pair by Pareto. The empty coalition is polarized-decisive for no pair, because its polarized profile has everyone preferring the opposite comparison, again invoking Pareto. Since the voter set is finite, there is a nonempty polarized-decisive coalition of minimum cardinality across all ordered pairs.

**Lemma 14.9 (Minimal coalition).** Such a smallest coalition has one voter.

*Proof.* Let $S$ be a smallest coalition, polarized-decisive for x over y. Suppose it has at least two voters, and split it into nonempty proper parts $C,D$. Choose a third alternative z and construct the following rankings on the triple:
\\[
\\begin{array}{c|c}
C&x\\succ y\\succ z\\\\
D&z\\succ x\\succ y\\\\
N\\setminus S&y\\succ z\\succ x.
\\end{array}
\\]
Exactly $S$ prefers x to y, so social $x\\succ y$ follows from its polarized decisiveness.

Exactly $D$ prefers z to y. Coalition $D$ is smaller than $S$, so minimality says it is not polarized-decisive for z over y. By IIA, all profiles with this polarized comparison pattern have the same social answer. Since society always gives a strict complete order, that answer must be $y\\succ z$, not $z\\succ y$.

Transitivity now gives $x\\succ z$. In the constructed profile exactly $C$ prefers x to z; everyone else prefers z to x. Thus the polarized pattern for $C$ wins that pair. By IIA, $C$ is polarized-decisive for x over z. But $C$ is also smaller than $S$, contradicting minimality. Therefore $S$ must be a singleton. ∎

The strict completeness of the social order is used visibly in the middle step. Not winning z over y forces y over z because ties are unavailable. A proof for weak social orders needs a modified argument; it cannot simply reuse that sentence without checking its hypotheses.

**Theorem 14.10 (Finite Arrow theorem).** Let $X$ be finite with at least three alternatives and $N$ finite and nonempty. Every function from all profiles of strict individual linear orders to strict transitive complete social orders satisfying Pareto unanimity and IIA has a dictator.

*Proof.* Choose the smallest polarized-decisive coalition as above. Lemma14.9 makes it a singleton $\\{d\\}$. Lemmas14.7–14.8 make this singleton strongly decisive for every ordered pair. Thus whenever d ranks x above y, society does so, at every profile. This is precisely dictatorship. For a single voter the argument starts with that singleton and requires no split. ∎

Adding a requirement of no dictator therefore makes the other requirements jointly impossible. The theorem does not secretly assume anonymity, neutrality or a separate winner-selection resoluteness axiom. Its output is a strict ranking by explicit hypothesis. The cross-pair decisiveness used in the proof is derived.

## A scoring rule's different compromise

**Worked example 14.11 (Borda violates IIA without a tie).** Give two points for first place, one for second and zero for third. With two voters, consider profile P: $a\\succ c\\succ b$ and $b\\succ a\\succ c$. Scores are a:three, b:two, c:one, so a ranks above b.

Now use profile Q: $a\\succ b\\succ c$ and $b\\succ c\\succ a$. Scores are a:two, b:three, c:one, so b ranks above a. Voter one's a-versus-b comparison is unchanged, and so is voter two's opposite comparison. Yet society reverses that pair.

No tie-breaking convention affects these strict score comparisons. A fixed tie rule can make a scoring procedure output a strict ranking at other profiles, but cannot repair this IIA violation. The example shows a meaningful alternative trade-off: a scoring rule can use information about positions relative to other alternatives, precisely the dependence IIA forbids.

**Worked example 14.12 (A dictatorship satisfies the other requirements).** Fix voter two and always output that voter's ranking. Since their input is a strict transitive complete order, so is the social output. If everyone prefers x to y, voter two does, giving Pareto. If every voter's x-versus-y comparison stays fixed between profiles, voter two's does, giving IIA.

Thus the theorem is not claiming that Pareto and IIA are individually inconsistent with transitivity. It says that under unrestricted domain they force this kind of concentration of power. The no-dictator requirement is a desirable additional condition that creates the impossibility.

## What changes when hypotheses change

With only two alternatives, odd-voter majority gives a strict social ranking, Pareto and IIA without dictatorship when there are at least three voters. Transitivity imposes no triple condition because there is no triple. The third alternative is essential in both transfer lemmas and in the minimal-coalition construction.

Dropping Pareto allows a fixed social ranking independent of all ballots. It is transitive and satisfies IIA but ignores unanimous contrary wishes. Dropping transitivity allows pairwise majority cycles. Dropping IIA permits scoring rules such as Borda. Restricting admissible preference profiles can also avoid the theorem; single-peaked domains are an important continuation, but their positive results require their own precise domain assumptions.

Arrow concerns aggregation of rankings, not directly strategic manipulation of a selected winner. A theorem about strategy-proof voting rules is a separate statement with a different domain and conclusion. Nor does the proof determine which axiom a practical institution ought to relax. That decision depends on information, values and the intended use of the collective output.

The constructive lesson is to state what the rule returns and what comparisons it must respect. Once these are explicit, an impossibility result is a map of constraints rather than a reason to abandon design. The proof's minimal coalition identifies how transitive pairwise consistency converts a local decisive pattern into universal dictatorial authority.

## Exercises

<a id="social-choice-arrow-ex-1"></a>
### Exercise 14.1

Check all three pairwise majorities in Worked example14.5.

<details>
<summary>Hint 1</summary>

List the two supporting voters for each pair.

</details>

<details>
<summary>Hint 2</summary>

Each individual order is transitive even though the aggregate cycle is not.

</details>

<details>
<summary>Solution</summary>

Voters one and three support a over b, voters one and two support b over c, and voters two and three support c over a. Each comparison wins two to one. The resulting cycle contradicts social transitivity, not individual transitivity. This shows exactly which Arrow requirement pairwise majority violates on unrestricted profiles.

</details>

<a id="social-choice-arrow-ex-2"></a>
### Exercise 14.2

Why does IIA make one polarized victory sufficient to define polarized decisiveness?

<details>
<summary>Hint 1</summary>

The coalition fixes every voter's comparison of the selected pair.

</details>

<details>
<summary>Hint 2</summary>

Other alternatives may move without changing that pattern.

</details>

<details>
<summary>Solution</summary>

Every profile with exactly S preferring x to y has the same individual binary comparisons. IIA therefore gives the same social answer at all of them. If one such profile ranks x above y socially, every such profile does. This is not neutrality across different pairs; it is consistency for one fixed pair.

</details>

<a id="social-choice-arrow-ex-3"></a>
### Exercise 14.3

Explain where Pareto enters Lemma14.7.

<details>
<summary>Hint 1</summary>

Inspect the placement of y relative to z.

</details>

<details>
<summary>Hint 2</summary>

Every voter is assigned the same y-versus-z comparison.

</details>

<details>
<summary>Solution</summary>

The constructed profile puts y above z for both coalition members and outsiders. Pareto gives social y above z. Combined with polarized x above y, transitivity yields x above z. Without the unanimous comparison, the transfer step would lack its second social inequality.

</details>

<a id="social-choice-arrow-ex-4"></a>
### Exercise 14.4

Why can the transfer profile preserve arbitrary outsider x-versus-z comparisons?

<details>
<summary>Hint 1</summary>

Place y above both alternatives.

</details>

<details>
<summary>Hint 2</summary>

Use either order of the lower pair.

</details>

<details>
<summary>Solution</summary>

An outsider initially preferring x to z is assigned y above x above z; one preferring z to x is assigned y above z above x. Both preserve the relevant binary comparison while placing y above each. Unrestricted domain admits both strict orders, enabling IIA to transfer the final comparison back.

</details>

<a id="social-choice-arrow-ex-5"></a>
### Exercise 14.5

In the minimal-coalition profile, identify the supporters of x over y, z over y and x over z.

<details>
<summary>Hint 1</summary>

Read each of the three voter groups separately.

</details>

<details>
<summary>Hint 2</summary>

The three supporting sets are different.

</details>

<details>
<summary>Solution</summary>

For x over y, C and D support it and outsiders oppose, giving S. For z over y, only D supports it. For x over z, only C supports it. This exact bookkeeping yields the contradiction: S's polarized victory and D's failure force a smaller polarized victory for C.

</details>

<a id="social-choice-arrow-ex-6"></a>
### Exercise 14.6

Where is strict social completeness used in the proof?

<details>
<summary>Hint 1</summary>

Failure of D to win z over y must imply the reverse.

</details>

<details>
<summary>Hint 2</summary>

A social tie would create a third possibility.

</details>

<details>
<summary>Solution</summary>

In Lemma14.9, D is not polarized-decisive for z over y. IIA fixes the social answer for that pattern, and the strict complete output leaves only y over z as the alternative. If ties were allowed, not obtaining z over y would not automatically give y over z. A weak-order version requires additional reasoning.

</details>

<a id="social-choice-arrow-ex-7"></a>
### Exercise 14.7

Verify the Borda scores in the two profiles and the IIA violation.

<details>
<summary>Hint 1</summary>

Assign scores two, one and zero.

</details>

<details>
<summary>Hint 2</summary>

Compare a and b voter by voter before comparing social scores.

</details>

<details>
<summary>Solution</summary>

In P, a scores two plus one, b zero plus two, and c one plus zero, giving three,two,one. In Q, a scores two plus zero, b one plus two, and c zero plus one, giving two,three,one. Each voter's a-versus-b comparison is unchanged, but the social comparison reverses, violating IIA without a tie.

</details>

<a id="social-choice-arrow-ex-8"></a>
### Exercise 14.8

Give a rule satisfying strict transitivity and IIA but failing Pareto.

<details>
<summary>Hint 1</summary>

Ignore every ballot.

</details>

<details>
<summary>Hint 2</summary>

Choose a fixed ranking with some unanimous profile opposing it.

</details>

<details>
<summary>Solution</summary>

Always output a fixed strict ranking, for example a above b above c. It is transitive and its pairwise answers never change, so IIA holds. At a profile where everyone ranks b above a, its a-above-b output violates Pareto. Thus unanimity is an independent substantive assumption.

</details>

<a id="social-choice-arrow-ex-9"></a>
### Exercise 14.9

Explain why odd majority with two alternatives does not contradict the theorem.

<details>
<summary>Hint 1</summary>

Check the alternative-set hypothesis.

</details>

<details>
<summary>Hint 2</summary>

There is no third alternative for the transfer construction.

</details>

<details>
<summary>Solution</summary>

The theorem assumes at least three alternatives. With only two, an odd number of voters gives a strict majority comparison, which automatically forms a transitive ranking. With at least three voters no individual always determines it. The missing third alternative blocks the proof's transfer and split constructions.

</details>

<a id="social-choice-arrow-ex-10"></a>
### Exercise 14.10

Does Arrow's theorem assume neutrality or prove dictatorship only after assuming it?

<details>
<summary>Hint 1</summary>

Review the two transfer lemmas.

</details>

<details>
<summary>Hint 2</summary>

Their profile constructions derive cross-pair decisiveness.

</details>

<details>
<summary>Solution</summary>

Neutrality is not assumed. Starting from one polarized pair victory, the proof uses unrestricted profiles, Pareto, IIA and transitivity to establish strong decisiveness for other pairs. A smallest coalition then becomes a singleton and hence a dictator. Adding neutrality secretly would weaken the proof's claim, so its absence matters.

</details>

## Sources

For primary proof context, John Geanakoplos's [*Three Brief Proofs of Arrow's Impossibility Theorem*](https://cowles.yale.edu/node/145476), Cowles Foundation, discusses decisive and pivotal-voter approaches and the role of derived neutrality. The chapter gives its own complete strict-order finite coalition proof; no anonymity or neutrality assumption is added.

## Summary

Unrestricted strict preferences, Pareto unanimity, IIA and a strict transitive complete social ranking force dictatorship on a finite nonempty electorate with at least three alternatives. Transfer lemmas derive decisiveness across pairs, and a smallest decisive coalition must be a singleton. Majority and Borda illustrate different failed axioms. The theorem maps requirements for ranking rules rather than selecting the practical compromise society should make.
`;export{e as default};