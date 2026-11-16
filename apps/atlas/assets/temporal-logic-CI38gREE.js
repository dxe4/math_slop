var e=`---
parent_id: book-logic-foundations-proof-reference
chapter_id: temporal-logic
title: "Temporal Logic"
level: advanced-undergraduate
estimated_minutes: 200
license: CC BY-SA 4.0
---

# Temporal Logic

Temporal logic is a branch of modal logic specialized to reasoning about time. It is widely used in computer science for specifying and verifying the behavior of systems over time. This chapter introduces linear and branching time logics, their semantics over transition systems, and the model-checking problem.

## Linear temporal logic (LTL)

**Definition 20.1 (LTL syntax).** LTL formulas over a set of atomic propositions $AP$ are:
- Every $p \\in AP$ is a formula.
- If $\\varphi, \\psi$ are formulas, so are $\\neg \\varphi$, $(\\varphi \\to \\psi)$, $\\mathsf{X} \\varphi$, and $(\\varphi \\, \\mathsf{U} \\, \\psi)$.

The operators are: $\\mathsf{X}$ (next), $\\mathsf{U}$ (until). Derived operators include $\\mathsf{F} \\varphi = \\top \\, \\mathsf{U} \\, \\varphi$ (eventually) and $\\mathsf{G} \\varphi = \\neg \\mathsf{F} \\neg \\varphi$ (always).

**Definition 20.2 (transition system).** A *transition system* is a tuple $\\mathcal{T} = (S, \\to, L)$ where $S$ is a set of states, $\\to \\subseteq S \\times S$ is a transition relation, and $L: S \\to \\mathcal{P}(AP)$ labels each state with the propositions true there.

Throughout this chapter the transition relation is **serial**: every state has a successor, so every finite path extends to an infinite one. A finite implementation may enforce this convention by adding a self-loop to each deadlock state.

**Definition 20.3 (path).** A *path* $\\pi = s_0 s_1 s_2 \\dots$ is an infinite sequence of states with $s_i \\to s_{i+1}$ for all $i$. We write $\\pi^i$ for the suffix starting at $s_i$.

**Definition 20.4 (LTL semantics).** For a path $\\pi$:
- $\\pi \\models p$ iff $p \\in L(s_0)$.
- $\\pi \\models \\neg \\varphi$ iff $\\pi \\not\\models \\varphi$.
- $\\pi \\models (\\varphi \\to \\psi)$ iff $\\pi \\not\\models \\varphi$ or $\\pi \\models \\psi$.
- $\\pi \\models \\mathsf{X} \\varphi$ iff $\\pi^1 \\models \\varphi$.
- $\\pi \\models (\\varphi \\, \\mathsf{U} \\, \\psi)$ iff there exists $j \\geq 0$ such that $\\pi^j \\models \\psi$ and for all $0 \\leq k < j$, $\\pi^k \\models \\varphi$.

**Definition 20.5 (satisfaction in a system).** $\\mathcal{T}, s \\models \\varphi$ iff $\\pi \\models \\varphi$ for every path $\\pi$ starting at $s$.

## Computation tree logic (CTL)

**Definition 20.6 (CTL syntax).** CTL formulas are:
- Every $p \\in AP$ is a formula.
- If $\\varphi, \\psi$ are formulas, so are $\\neg \\varphi$, $(\\varphi \\to \\psi)$.
- If $\\varphi, \\psi$ are **state formulas**, so are $\\mathsf{EX} \\varphi$, $\\mathsf{EG} \\varphi$, and $\\mathsf{E}[\\varphi \\, \\mathsf{U} \\, \\psi]$.

Here $\\mathsf{E}$ means “there exists a path” and $\\mathsf{A}$ means “for all paths.” CTL requires every temporal operator to be immediately preceded by a path quantifier.

**Definition 20.7 (CTL semantics).** For a state $s$:
- $\\mathcal{T}, s \\models \\mathsf{EX} \\varphi$ iff there exists $s \\to s'$ with $\\mathcal{T}, s' \\models \\varphi$.
- $\\mathcal{T}, s \\models \\mathsf{EG} \\varphi$ iff there exists a path $s = s_0 s_1 \\dots$ with $\\mathcal{T}, s_i \\models \\varphi$ for all $i$.
- $\\mathcal{T}, s \\models \\mathsf{E}[\\varphi \\, \\mathsf{U} \\, \\psi]$ iff there exists a path $s = s_0 s_1 \\dots$ and $j \\geq 0$ with $\\mathcal{T}, s_j \\models \\psi$ and $\\mathcal{T}, s_k \\models \\varphi$ for all $k < j$.

## Expressive power: LTL vs. CTL

**Theorem 20.8.** Neither LTL nor CTL subsumes the other.

- CTL can express $\\mathsf{AG} \\mathsf{EF} p$ (on every path, it is always possible to reach $p$). This is not expressible in LTL.
- LTL can express $\\mathsf{F} \\mathsf{G} p$ (eventually $p$ holds forever). This is not expressible in CTL.

CTL* unifies both by allowing path quantifiers and linear temporal operators to mix freely.

These are expressibility theorems, not consequences of how the formulas look. Exercise 2 supplies trace-equivalent systems for the CTL-over-LTL separation. The converse separation for $\\mathsf F\\mathsf Gp$ requires the standard family/game argument and is cited to a model-checking text rather than reconstructed here.

## Model checking

**Definition 20.9 (model-checking problem).** Given a finite transition system $\\mathcal{T}$, a state $s$, and a formula $\\varphi$, determine whether $\\mathcal{T}, s \\models \\varphi$.

**Theorem 20.10.** CTL model checking is in PTIME.

**Proof sketch.** Label every state with the subformulas of $\\varphi$ it satisfies, working from atomic propositions upward. For $\\mathsf{EX}\\varphi$, label states with a successor satisfying $\\varphi$. For $\\mathsf{EG}\\varphi$, restrict to the subgraph induced by $\\varphi$-states, find its cyclic strongly connected components (including a singleton only when it has a self-loop), and take all $\\varphi$-states that can reach one through $\\varphi$-states. For $\\mathsf{E}[\\varphi\\,\\mathsf U\\,\\psi]$, compute the least predecessor fixpoint. Each step is polynomial in $|\\mathcal T|$ and $|\\varphi|$.

**Theorem 20.11.** LTL model checking is PSPACE-complete.

**Proof sketch.** A Büchi automaton for $\\neg\\varphi$ may have exponentially many states, but an accepting lasso in its product with $\\mathcal T$ can be searched on the fly while storing only the current tableau state, a transition-system state, and polynomial-size counters. Savitch's theorem (or nondeterministic polynomial-space search) gives the PSPACE upper bound without materializing the exponential automaton. Hardness follows from a standard PSPACE reduction. Exponential construction time alone would not establish a polynomial-space bound.

## Common errors

**Error: omitting path quantifiers in CTL.** Writing $\\mathsf{F} p$ without $\\mathsf{E}$ or $\\mathsf{A}$ is not a CTL formula. Every temporal operator must be paired with a path quantifier.

**Error: assuming LTL and CTL are equivalent.** They have incomparable expressive power. Choosing the right logic for a specification task requires understanding what each can express.

**Error: confusing fairness constraints with the logic itself.** Fairness (e.g., “every process gets infinitely many turns”) is often needed in practice but is not part of the basic LTL or CTL semantics. It is handled by restricting to fair paths.

## Practice exercises

**Exercise 1.** Using a clock proposition $e$ intended to mark exactly the even positions, express in LTL both the clock behavior and “$p$ holds at every even position.”

**Solution.** Use

$$e\\ \\land\\ \\mathsf G\\bigl(\\mathsf X e\\leftrightarrow\\neg e\\bigr)\\ \\land\\ \\mathsf G(e\\to p).$$

The first two conjuncts initialize and alternate the clock; the last requires $p$ at clock-marked positions while leaving odd positions unconstrained. A formula that forces $p$ itself to repeat every two steps would incorrectly forbid legitimate changes at odd positions.

**Exercise 2.** Show that $\\mathsf{AG} \\mathsf{EF} p$ is not expressible in LTL.

**Solution.** Use two trace-equivalent pointed systems. System A has states $a,p$, labels only $p$ with proposition $p$, and edges $a\\to a$, $a\\to p$, $p\\to p$. System B has states $b,g,d,p$, again labels only $p$, and edges $b\\to g,d,p$, $g\\to g,p$, $d\\to d$, and $p\\to p$. From either initial state the traces are exactly $\\neg p^\\omega$ and, for each $n\\geq1$, $n$ copies of $\\neg p$ followed by $p^\\omega$. Hence every LTL state formula (under universal-path semantics) agrees at $a$ and $b$. But $\\mathsf{AG}\\mathsf{EF}p$ holds at $a$, whereas it fails at $b$ because the reachable dead branch $d$ can never reach $p$.

![Two trace-equivalent transition systems. In A, every reachable state can reach the p-state. In B, a reachable dead-loop state d cannot reach p.](figures/ltl-branching-counterexample.svg)

The diagram uses blue for the only state satisfying $p$ and red for the dead-loop state $d$; the labels and edges carry the same information without relying on color. Both initial states generate exactly the trace set stated in the solution, while the extra branch through $d$ changes the CTL reachability property.

**Exercise 3.** Write a CTL formula expressing: “Whenever $p$ holds, $q$ holds at the next state on some path.”

**Solution.** $\\mathsf{AG}(p \\to \\mathsf{EX} q)$.

**Exercise 4.** Prove that $\\mathsf{E}[\\top \\, \\mathsf{U} \\, \\varphi]$ is equivalent to $\\mathsf{EF} \\varphi$ in CTL.

**Solution.** $\\mathsf{E}[\\top \\, \\mathsf{U} \\, \\varphi]$ means there exists a path where eventually $\\varphi$ holds, with no restriction before (since $\\top$ always holds). This is exactly the definition of $\\mathsf{EF} \\varphi$.

**Exercise 5.** Explain why LTL model checking is harder than CTL model checking.

**Solution.** In combined complexity, CTL's state-subformula fixpoints run in polynomial time, while LTL's path formulas require an implicit exponential tableau/Büchi search and give PSPACE-completeness. The comparison is about worst-case input where the formula varies; for a fixed LTL formula, model checking is polynomial in the transition-system size.

## Looking backward and forward

This chapter specialized the modal logic framework from “Modal Logic” to temporal reasoning. The model-checking algorithms connect to computability and complexity theory. The next chapter, “Linear Logic”, introduces a resource-sensitive logic where formulas represent consumable resources rather than static truths.
`;export{e as default};