var e=`---
parent_id: book-formal-computation-proof-reference
matter_id: notation-machine-model-and-status-conventions
title: "Notation, Machine Models, and Status Conventions"
license: CC BY-SA 4.0
---

# Notation, Machine Models, and Status Conventions {#section-1-notation-machine-models-and-status-conventions}

<a id="section-1-words-and-languages"></a>
## Words and languages {#section-3-words-and-languages}

- $\\Sigma,\\Gamma$: finite alphabets unless stated otherwise.
- $\\varepsilon$: empty word; $\\Sigma^{\\ast} $: all finite words including $\\varepsilon$; $\\Sigma^{+}$: nonempty words.
- $|w|$: word length. Concatenation is juxtaposition and ordered.
- $L,K$: languages, meaning subsets of a word set; no decidability assumption is implicit.
- $x^{-1}L=\\{z:xz \\in L\\}$: left residual, not group inversion.
- $~_L$: Nerode right congruence; $congruent_L$: syntactic two-sided congruence.
- $[\\![ R]\\!]$: semantics of representation or phrase $R$; brackets do not imply executability.

<a id="section-11-machines-and-transitions"></a>
## Machines and transitions {#section-13-machines-and-transitions}

- $\\delta$: one-symbol DFA transition; $\\delta^{\\ast} $: extended word transition.
- \`->\`: one operational or transition-system step; $\\to^{\\ast } $: reflexive transitive closure.
- $\\Downarrow$: terminating big-step evaluation; $\\Uparrow$: divergence when explicitly defined.
- $A_{\\mathrm{TM}}$, $HALT_{\\mathrm{TM}}$: encoded machine problems; angle brackets denote an effective tuple/description encoding.
- A DFA is finite, deterministic, and complete. Partial tables require a declared completion policy.
- Nondeterministic acceptance is existential over runs. Probability appears only when random coins and their distribution are supplied.
- Turing-machine variants are interchangeable for computability only after simulation. Exact and fine-grained time bounds remain model-sensitive.

<a id="section-21-complexity"></a>
## Complexity {#section-23-complexity}

- Input size means encoded length $n$, never an unencoded numeric magnitude by default.
- $TIME(t)$, $SPACE(s)$: deterministic worst-case decision classes under the chapter model.
- $P$, $NP$, $PSPACE$, $EXPTIME$: standard unions over polynomial or exponential bounds.
- $A \\le_{m}  B$: total computable many-one reduction; $A \\le_{p}  B$: polynomial-time many-one reduction.
- A reduction arrow points from the problem being solved to the problem used as an oracle-free target translation.
- $\\operatorname{OPT}(I)$: optimum over feasible solutions. Approximation convention and objective direction are restated locally.
- Randomized probability fixes the input before sampling fresh coins unless an interactive adversary is specified.

<a id="section-31-semantics-and-logic"></a>
## Semantics and logic {#section-33-semantics-and-logic}

- $\\sigma$: store/state; $h$: finite heap; $\\sigma[x \\mapsto  v]$: functional update.
- $\\{P\\}c{Q}$: partial-correctness Hoare triple unless labeled total.
- $emp$, $x\\mapsto v$, $P\\ast Q$, $P-\\ast Q$: empty heap, singleton points-to, separating conjunction, and separating implication.
- $\\sqsubseteq$: information order; $\\bot$: least information/divergence; $\\operatorname{lub}$: least upper bound.
- $\\mu X.F(X)$, $\\nu X.F(X)$: least and greatest fixed points of monotone functionals.
- $X,F,G,U$: next, eventually, always, and strong until in LTL.
- $A,E$: universal and existential path quantifiers in CTL.
- $\\operatorname{Pre}_{\\exists}$, $\\operatorname{Pre}_{\\forall}$: existential and universal predecessor transformers.

<a id="section-42-binding-and-types"></a>
## Binding and types {#section-44-binding-and-types}

- $\\lambda x.t$: abstraction; application associates left; arrows associate right.
- $[s/x]t$: capture-avoiding substitution of $s$ for free $x$.
- $\\Gamma \\vdash  t:A$: term $t$ has type $A$ under context $\\Gamma$.
- Equality of named syntax is distinct from alpha-equivalence, beta reduction, denotational equality, contextual equivalence, bisimulation, and refinement. Every theorem names the relevant relation.

<a id="section-49-evidence-vocabulary"></a>
## Evidence vocabulary {#section-51-evidence-vocabulary}

- **Witness/model:** positive object checked against a relation.
- **Counterexample:** object refuting a universal claim within the model.
- **Certificate:** compact evidence accepted by a declared checker.
- **Invariant:** property preserved across specified transitions.
- **Simulation/refinement:** relation transferring observations between systems.
- **Validation:** evidence that the formal model fits an intended external use.
- **Reproducible artifact:** identical bytes from declared inputs and toolchain; this does not prove the mathematical claim.

<a id="section-59-status-vocabulary"></a>
<a id="section-61-status-vocabulary"></a>

## Ambiguity policy {#section-71-ambiguity-policy}

When a symbol could mean multiple things, the chapter restates it. In particular, $F$ may mean accepting states, a formula, or a functional; $X$ may mean next-time or a set variable; \`*\` may mean Kleene star, multiplication, or separating conjunction. Type and surrounding definition decide, never typography alone.

Malformed encodings, partial transitions, empty structures, deadlocks, overflow, timeouts, solver $unknown$, and out-of-promise inputs receive explicit policies. Silent coercion is not a mathematical convention.
`;export{e as default};