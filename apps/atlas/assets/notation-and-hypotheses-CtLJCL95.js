var e=`---
parent_id: book-game-theory
chapter_id: notation-and-hypotheses
title: "Notation and Hypotheses"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Notation and Hypotheses

Notation identifies both an object and the assumptions under which it is used. A finite strategy simplex, a set of contingent plans and a distribution of private types are different objects even if all can be represented by vectors. This guide fixes the recurring conventions; a chapter's explicit local statement governs any specialised use.

## Players, actions and payoffs

N={1,…,n} is a finite nonempty player set unless a result says otherwise. A_i is a finite nonempty pure-action set. A pure profile is a=(a_i) in the Cartesian product of the A_i. The notation a_{−i} keeps every coordinate other than i's fixed. A unilateral deviation changes only player i's coordinate.

The real payoff u_i(a) represents the comparisons assumed by the model. When lotteries are used, the expected-utility representation is part of the model. A positive affine transformation α_i u_i+β_i with α_i>0 preserves a player's expected-payoff comparisons; an arbitrary strictly increasing nonlinear transformation need not preserve preferences over lotteries. Utilities are not interpersonal quantities merely because they are written in the same table.

Δ(A_i) denotes probability vectors on A_i. A mixed-strategy profile uses independent randomisation across players. Expected payoff is the finite sum of the pure payoffs weighted by products of the players' probabilities. Correlated recommendations require a joint distribution and a separate information protocol. Positive support means strictly positive probability; unused actions still appear in best-response inequalities.

## Matrix and convex geometry conventions

In a two-player zero-sum game, A is the row player's real m-by-n payoff matrix. The column player's payoff is its negative. Row and column mixtures x and y are column vectors, so the expected row payoff is xᵀAy. The row player maximises and the column player minimises. A pure column is a constraint on the row guarantee, and a pure row is a constraint on the column bound.

Vector inequalities are coordinatewise. Inner products and distances are Euclidean in the finite-dimensional existence proofs. Compactness supplies convergent subsequences and attained extrema; convexity permits mixtures and line-segment variation. Neither word can be dropped from a proof that uses the corresponding operation. Chapter 6 states feasibility, boundedness and the relevant inequality direction before invoking linear-programming duality. A free variable is not silently constrained to be nonnegative.

## Time and information

A history records past actions along an extensive-form tree. A strategy is a complete contingent plan, including instructions at histories that its own earlier choices may prevent from being reached. Perfect information concerns what a player observes when choosing; complete information concerns knowledge of the model and payoffs. The terms are not interchangeable.

In discounted repeated games, δ lies strictly between zero and one, and payoff is normalised as (1−δ)Σδᵗu_i(aᵗ). Actions are finite and stage payoffs bounded. The main repeated-game proofs assume publicly observed past actions. The public-lottery construction additionally states an observable random recommendation protocol. An unobserved mixed action does not automatically provide that public device. A punishment must itself prescribe optimal continuation play at every relevant history.

In Bayesian games, t_i is player i's private type, T_i its finite type set, and π a common prior on the product type space. Type correlation is permitted. Positive own-type marginal probabilities make the chapter's interim conditional probabilities well defined. Zero-probability joint type combinations can still occur in the specification. Conditional expectations use the information actually held at the decision time.

## Coalitions, mechanisms and rankings

A transferable-utility coalitional game assigns a real worth v(S) to each coalition S⊆N, with v(∅)=0. An allocation x has coalition total x(S)=Σ_{i∈S}x_i. Core stability requires efficiency x(N)=v(N) and every coalition inequality x(S)≥v(S). The Shapley value is an allocation rule; its axiomatic uniqueness does not by itself prove that its output lies in the core.

In quasilinear mechanisms, utility is value minus the payment charged to the agent. A negative payment is a subsidy. Dominant-strategy incentive compatibility compares reports for every fixed report profile of the other agents. Bayesian incentive compatibility averages over the conditional distribution of other types. Individual rationality, efficiency and budget balance are separate properties and must be checked separately.

The Arrow chapter uses a finite alternative set with at least three members, a finite nonempty electorate, unrestricted strict individual rankings and strict complete transitive social rankings. Its dictatorship conclusion is about aggregation of an entire order. It is not a theorem about every rule that selects a single winner.

## Population models

A symmetric two-player game uses one payoff function u(p,q)=pᵀAq for the first participant's strategy against the second's. Symmetry of the roles does not require A=Aᵀ. An evolutionarily stable strategy resists every fixed different mutant at all sufficiently small positive mutant fractions; the permitted fraction may depend on that mutant.

Replicator dynamics specifies a differential equation. Static ESS inequalities do not supply an adjustment law or a trajectory. The dynamic statements identify the solution regularity and time interval they use; long-time conclusions require forward-complete solutions. General ODE existence and uniqueness are cited separately from the scalar and payoff-gap arguments proved in the chapter.

## Sources

These conventions consolidate the definitions stated and sourced in the fifteen chapters. The [glossary and theorem finder](../back-matter/glossary-and-theorem-finder.md) points to their proofs and applications.

## Summary

Track the player or coalition that is allowed to change, the information available at that moment, and the mathematical set in which the change lies. Then check the probability, convexity, time and ranking hypotheses required by the particular theorem.
`;export{e as default};