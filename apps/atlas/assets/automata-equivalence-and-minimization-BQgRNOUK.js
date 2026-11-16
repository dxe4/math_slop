var e=`---
parent_id: book-formal-computation-proof-reference
chapter_id: automata-equivalence-and-minimization
title: "Automata Equivalence, Myhill–Nerode, and Minimization"
level: advanced-undergraduate
estimated_minutes: 210
license: CC BY-SA 4.0
---

# Automata Equivalence, Myhill–Nerode, and Minimization

A deterministic finite automaton is both a program with bounded memory and a finite representation of a right action on prefixes. This chapter proves the full equivalence among finite-state recognition, finite Nerode index, and finite quotients; derives exact equivalence testing; and proves that minimization produces the unique smallest reachable automaton up to renaming.

## 1. The deterministic contract

A **deterministic finite automaton** (DFA) is a tuple

$A=(Q,\\Sigma,\\delta,q_0,F)$

where $Q$ is a finite set of states, $\\Sigma$ a finite alphabet, $\\delta:Q \\times \\Sigma \\to  Q$ a **total** transition function, $q_0 \\in Q$ the initial state, and $F \\subseteq Q$ the accepting states. Extend transitions to words by

$\\delta^{\\ast} (q,\\varepsilon)=q$,

$\\delta^{\\ast} (q,wa)=\\delta(\\delta^{\\ast} (q,w),a)$.

The accepted language is $L(A)=\\{w:\\delta^{\\ast} (q_0,w) \\in F\\}$. Structural induction proves the action law

$\\delta^{\\ast} (q,uv)=\\delta^{\\ast} (\\delta^{\\ast} (q,u),v)$.

That law connects prefix processing to residual languages. A partial transition table is not a DFA under this contract. It can be completed by adding a rejecting sink and directing every missing transition to it.

### Reachability and observability

A state is **reachable** if it equals $\\delta^{\\ast} (q_0,w)$ for some word $w$. Unreachable states affect neither language nor any run from the initial state and must be removed before a minimality claim.

Two states $p,q$ are **equivalent** when for every suffix $z$,

$\\delta^{\\ast} (p,z) \\in F \\iff \\delta^{\\ast} (q,z) \\in F$.

Otherwise a suffix witnessing disagreement **distinguishes** them. Equivalent states have the same future acceptance behavior, even if their names or incoming edges differ.

## 2. Product search decides exact equivalence

Given DFAs $A$ and $B$ over the same alphabet, form the product graph on $Q_A \\times Q_B$. From $(p,q)$ on symbol $a$, move to $(\\delta_A(p,a),\\delta_B(q,a))$. A pair is a disagreement when exactly one component is accepting.

**Theorem 13.1 (Product equivalence).** $L(A)=L(B)$ if and only if no disagreement pair is reachable from $(q_A,q_B)$.

**Proof.** Induction on $w$ shows the product state after $w$ is $(\\delta_A^{\\ast}(q_A,w),\\delta_B^{\\ast}(q_B,w))$. If a disagreement is reachable by $w$, exactly one machine accepts $w$. Conversely, if the languages differ, some word produces opposite acceptance, hence reaches a disagreement.

Breadth-first search (BFS) decides reachability because the graph has at most $|Q_A||Q_B|$ vertices and $|\\Sigma|$ outgoing edges per vertex. Storing each discovered pair's parent and incoming symbol reconstructs a shortest distinguishing word. Thus the algorithm returns either a counterexample certificate or exhaustive finite coverage.

![Product-automaton breadth-first path labeled a then b ending at an accepting-rejecting disagreement pair](figures/product-equivalence-witness.svg)

*Figure 2.1. If BFS reaches $(u,v)$ by the labels $a,b$ and exactly one of
$u,v$ is accepting, the parent chain reconstructs $ab$. Running both original
DFAs on $ab$ checks the counterexample. Because BFS explores by path length,
the first reached disagreement gives a shortest distinguishing word.*

For state equivalence inside one machine, start the same search from $(p,q)$. For language inclusion $L(A) \\subseteq L(B)$, disagreement means “left accepts and right rejects.”

## 3. Nondeterminism and subset states

An epsilon-NFA has a finite state set, initial states, accepting states, and transitions to sets of states, possibly without consuming a symbol. Acceptance means **there exists** an accepting run; it is not a probability statement.

The subset construction produces a DFA whose state is an epsilon-closed subset $S$ of NFA states. On symbol $a$, take every $a$-successor of states in $S$, then epsilon-close the result. The key invariant is

> after reading $w$, the subset state is exactly the set of NFA states reachable along some path whose consumed label is $w$.

Induction on $w$ proves the invariant and therefore language equivalence. At most $2^n$ subsets exist for an $n$-state NFA, though only reachable subsets need be constructed. Equal expressiveness does not mean equal succinctness.

## 4. Myhill–Nerode theorem

For $L \\subseteq \\Sigma^{\\ast} $, recall $x ~_L y$ when every suffix gives the same membership decision.

**Theorem 13.2 (Myhill–Nerode).** The following are equivalent:

1. $L$ is recognized by a DFA;
2. $~_L$ has finite index;
3. $L$ is a union of classes of some finite-index right congruence.

Moreover, the number of Nerode classes is the number of states in a smallest reachable DFA for $L$.

**Proof that 1 implies 2.** If prefixes reach the same state of a recognizing DFA, the action law makes every suffix produce the same acceptance result. Thus equality of reached state refines Nerode equivalence. There are at most $|Q|$ classes.

**Proof that 2 implies 3.** Use the Nerode relation itself. It is a right congruence, and membership is constant on each class.

**Proof that 3 implies 1.** Let states be congruence classes, initial state $[\\varepsilon]$, transition $[x] --a-\\to  [xa]$, and accepting states the classes contained in $L$. Right congruence makes the transition well-defined. Induction gives state $[w]$ after input $w$, so acceptance is exact.

For the final claim, the Nerode-class automaton has one state per class. Any recognizing DFA maps every prefix to a state and can never merge distinct Nerode classes, so it has at least that many reachable states.

The theorem is simultaneously an expressiveness characterization, a canonical construction, and a state lower-bound technique.

## 5. Minimization by partition refinement

Start with a reachable complete DFA. The accepting and rejecting states form the initial partition because $\\varepsilon$ distinguishes states across those blocks. Repeatedly split any block whose members transition, on some symbol, into different current blocks. When no split is possible, states in the same block are equivalent.

### Why stability is enough

At termination, define the **block automaton**: from block $C$ on $a$, move to the unique block containing $\\delta(q,a)$ for $q \\in C$. Stability makes this well-defined. Induction on suffix length shows two states in one block always reach one block after the same suffix. Since every block lies entirely inside $F$ or its complement, those states agree on acceptance and are equivalent.

Every performed split is also sound. Initially, cross-block states are distinguished by $\\varepsilon$. If $p,q$ are split because $\\delta(p,a)$ and $\\delta(q,a)$ lie in blocks already known distinguishable by $z$, then $az$ distinguishes $p,q$. Thus the final blocks are exactly equivalence classes.

Naive repeated scanning is polynomial. Efficient algorithms maintain splitters and achieve $\\mathcal{O}(|\\Sigma||Q| \\log |Q|)$ time under standard table representations, but correctness rests on the invariant above rather than the optimized work queue.

## 6. Table filling and witness propagation

An alternative marks unordered pairs. Mark every accepting/rejecting pair with witness $\\varepsilon$. Then mark $(p,q)$ when some symbol $a$ leads to a marked pair $(\\delta(p,a),\\delta(q,a))$; prepend $a$ to that pair's witness. Unmarked pairs at the fixed point are equivalent.

This is a least-fixed-point computation of distinguishability. Partition refinement computes the complementary greatest stable equivalence. Their results agree, but their data structures and proof certificates differ.

### Quotient correctness

Let $\\equiv$ be state equivalence. Define $[q] --a-\\to  [\\delta(q,a)]$. If $p \\equiv q$, then $\\delta(p,a) \\equiv \\delta(q,a)$, since any distinguishing suffix for the successors would yield one prefixed by $a$ for the originals. Therefore the quotient is well-defined and accepts the same language from $[q_0]$.

## 7. Uniqueness of the minimal machine

Every reachable state $q$ of a DFA for $L$ has a residual language

$L_q=\\{z:\\delta^{\\ast} (q,z) \\in F\\}$.

In a minimal DFA, distinct states have distinct residuals; otherwise they could be merged. Reachability supplies a prefix $x$ reaching each state, and then $L_q=x^{-1}L$. Thus states correspond bijectively to the residuals of $L$.

Two minimal reachable DFAs for the same language are isomorphic: map a state reached by $x$ in the first to the state reached by $x$ in the second. Nerode equivalence makes the map independent of the chosen reaching word. It preserves the initial state, acceptance, and transitions, and residual completeness makes it bijective.

“Unique” therefore means unique up to a structure-preserving renaming, not literally the same state labels.

## 8. Complexity and certificate boundaries

The input representation matters. With explicit transition tables, product equivalence visits at most a product number of pairs. An NFA converted eagerly to a DFA may generate exponentially many subsets. Symbolic representations can avoid explicit construction but move cost into formula or data-structure operations.

A counterexample word is independently checkable by running both machines. An equivalence answer from exhaustive product search can be certified by the reachable pair set closed under transitions and containing no disagreement. A minimized table should be accompanied by a mapping from original states to quotient blocks and, for auditability, witnesses distinguishing every pair of quotient blocks.

## 9. Common proof failures

- Testing all words up to a chosen length is not equivalence unless a proven completeness bound applies.
- Complement requires a deterministic **complete** automaton.
- Minimizing before removing unreachable states can retain useless equivalence classes.
- NFA branching is existential, not random and not universal.
- Partition refinement must prove both directions: merged states agree on all suffixes, and split states have witnesses.
- State count depends on reachability from the designated initial state.

## Exercises with complete solutions

### 1. The action law

Prove $\\delta^{\\ast} (q,uv)=\\delta^{\\ast} (\\delta^{\\ast} (q,u),v)$.

**Solution.** Induct on $v$. For $\\varepsilon$, both sides equal $\\delta^{\\ast} (q,u)$. If the law holds for $v$, then $\\delta^{\\ast} (q,u(va))=\\delta(\\delta^{\\ast} (q,uv),a)=\\delta(\\delta^{\\ast} (\\delta^{\\ast} (q,u),v),a)=\\delta^{\\ast} (\\delta^{\\ast} (q,u),va)$.

### 2. Completing a partial table

Explain why adding one rejecting sink preserves the language of a partial automaton under the convention that a missing transition rejects.

**Solution.** Redirect each missing transition to a new nonaccepting state $sink$, and loop every symbol at $sink$. Runs that used only defined transitions are unchanged. A run encountering its first missing transition now enters $sink$ and can never accept, exactly matching the stated convention.

### 3. Reachability removal

Prove deleting unreachable states preserves the language.

**Solution.** Every run begins at $q_0$; induction on input length shows every state on that run is reachable. Hence no run ever visits a deleted state, and the final acceptance result for every word is unchanged.

### 4. Inclusion by product search

Which product states witness failure of $L(A) \\subseteq L(B)$?

**Solution.** Those $(p,q)$ with $p \\in F_A$ and $q \\notin F_B$. A word reaches such a pair exactly when $A$ accepts it and $B$ rejects it, which is precisely a counterexample to inclusion.

### 5. Shortest witnesses

Why does BFS parent reconstruction yield a shortest distinguishing word?

**Solution.** Each product edge consumes one symbol, so path length equals word length. BFS discovers vertices at minimum edge distance from the initial pair. The first disagreement discovered therefore has minimum reachable distance; following parents recovers a word of that length.

### 6. Parity minimization

Construct and prove minimal a DFA for binary words with even many $1$ symbols.

**Solution.** Use states $E,O$, start and accept $E$; $0$ loops and $1$ swaps states. Induction shows the state records parity. Both states are reachable, and $\\varepsilon$ distinguishes them because $E$ accepts and $O$ rejects. Hence no merge is possible and the two-state DFA is minimal.

### 7. Divisibility states

Give the transition rule for reading a binary numeral modulo $m$.

**Solution.** State $r$ records the prefix value modulo $m$. Reading bit $b$ changes value from $n$ to $2n+b$, so set $\\delta(r,b)=(2r+b) \\bmod m$. Induction on prefix length proves the invariant. Accept state $0$ if leading zeros are allowed.

### 8. Subset invariant

Prove the subset construction's invariant for epsilon-free NFAs.

**Solution.** Initially the subset is exactly the initial-state set, which is the set reachable on $\\varepsilon$. Assume $S$ is exactly the set reachable on $w$. The next subset is the union of all $a$-successors of states in $S$, exactly the endpoints of paths labeled $wa$. This proves the claim by induction.

### 9. Three Nerode classes

Prove binary words ending in $01$ have exactly three Nerode classes.

**Solution.** A three-state suffix-tracking DFA gives at most three classes: no useful suffix, suffix $0$, and suffix $01$. They are pairwise distinguishable: the $01$ class differs from the others by $\\varepsilon$; suffix $0$ differs from no useful suffix by continuation $1$. Hence at least three classes, so exactly three.

### 10. Sound splitting

If successor states on $a$ are distinguished by $z$, prove the original states are distinguished by $az$.

**Solution.** Processing $az$ first takes the $a$ transition, then processes $z$. Since the successors end with opposite acceptance on $z$, the original states end with opposite acceptance on $az$.

### 11. Quotient well-definedness

Why is $[q] --a-\\to  [\\delta(q,a)]$ independent of representative?

**Solution.** If $p$ and $q$ are equivalent but their $a$-successors were not, some $z$ would distinguish those successors. Then $az$ would distinguish $p$ and $q$, a contradiction. Thus equivalent representatives yield the same successor class.

### 12. Canonical isomorphism

Let $A,B$ be reachable minimal DFAs for the same language. Prove the map “state reached by $x$ in $A$ goes to state reached by $x$ in $B$” is well-defined.

**Solution.** If $x,y$ reach the same state in $A$, then no suffix distinguishes $x,y$, so $x ~_L y$. Because $B$ recognizes the same $L$, the states reached by $x,y$ in $B$ have identical residuals. Minimality of $B$ forbids distinct equivalent states, so those states coincide. The map is therefore independent of the reaching word.

[Book overview](#/item/book-formal-computation-proof-reference)
`;export{e as default};