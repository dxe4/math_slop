var e=`---
parent_id: book-algorithms-computation-proof-desk
chapter_id: finite-automata-regular-languages
title: "Finite Automata and Regular Languages"
level: undergraduate
estimated_minutes: 135
license: CC BY-SA 4.0
---

# Finite Automata and Regular Languages

A finite automaton remembers only one state from a fixed finite set. That restriction is strong enough for lexical patterns, communication protocols, and hardware controllers, yet weak enough to support exact equivalence and minimization algorithms.

## 1. Words and languages

Fix a finite alphabet $\\Sigma$. A word is a finite sequence of symbols; $\\varepsilon$ is the empty word. $\\Sigma^{\\ast}$ is the set of all finite words. A language is any subset $L\\subseteq\\Sigma^{\\ast}$.

Concatenation is ordered: if $u=ab$ and $v=ba$, then $uv=abba$. For languages, $AB=\\{uv:u\\in A,v\\in B\\}$. Kleene star $A*$ contains concatenations of zero or more words from $A$, including $\\varepsilon$.

## 2. Deterministic finite automata

A DFA is $(Q,Sigma,\\delta,q0,F)$, where $Q$ is finite, $\\delta:Q\\times Sigma\\to Q$ total, $q0$ initial, and $F\\subseteq Q$ accepting. Extend transitions to words:

$\\delta*(q,\\varepsilon)=q$,

$\\delta*(q,wa)=\\delta(\\delta*(q,w),a)$.

The language recognized is $\\{w:\\delta*(q0,w)\\in F\\}$.

**Example: even number of ones.** Use states $even,odd$; reading zero keeps state, reading one toggles. Start and accept at $even$. Induction on prefix length proves the current state records parity of ones read.

## 3. Nondeterminism is set evolution

An NFA transition maps a state and symbol to a set of states and may include epsilon moves. A word is accepted if at least one possible run ends accepting. This is existential branching, not probability.

The subset construction makes a DFA whose states are subsets of NFA states. On a symbol, take all symbol successors, then epsilon closure. The invariant is exact:

> After prefix $w$, the DFA subset equals precisely the NFA states reachable by some run labeled $w$.

Therefore the two machines accept the same language. The deterministic machine may have exponentially many reachable subsets, so expressive equivalence does not imply equal representation size.

## 4. Regular expressions and closure

Regular expressions build languages from empty language, $\\varepsilon$, and symbols using union, concatenation, and star. Thompson-style construction turns an expression into an epsilon-NFA. State elimination or algebraic equations turn a finite automaton back into an expression. Thus regular expressions, NFAs, and DFAs describe the same class of regular languages.

Regular languages are closed under union and intersection by product automata. For DFAs $A,B$, product state $(p,q)$ tracks both runs. Accept pairs according to the desired Boolean combination. Complement flips accepting states only after ensuring the DFA transition is total.

## 5. Product automata as counterexample search

To test DFA equivalence, build a product and mark pairs where exactly one component accepts. The machines differ exactly when such a disagreement state is reachable from the initial pair. Breadth-first search returns a shortest distinguishing word by storing parent pairs and edge symbols.

This is more informative than testing a fixed list of words. If no disagreement pair is reachable, induction on words proves equivalence for all inputs. If one is reachable, the recovered word is an exact counterexample.

## 6. Minimization by distinguishability

States $p,q$ are equivalent when every suffix leads both to acceptance or both to rejection. Initially, accepting and rejecting states are distinguishable by empty suffix. Refine blocks whenever some symbol sends two states to different blocks. At stability, each block represents one residual language.

Merging equivalent states yields a minimum-state DFA after unreachable states are removed. The result is unique up to state renaming. “Looks similar” is not the criterion; indistinguishability by all suffixes is.

## 7. Myhill–Nerode theorem

For language $L$, define $x\\sim _{L} y$ when for every suffix $z$, $xz\\in L$ exactly when $yz\\in L$. This is a right-congruence equivalence relation. $L$ is regular exactly when it has finitely many equivalence classes.

If a DFA recognizes $L$, prefixes reaching the same state are equivalent, so there are finitely many classes. Conversely, take classes as states and transition $[x]$ on symbol $a$ to $[xa]$; right congruence makes this well-defined.

To prove $\\{0^n1^n:n\\ge 0\\}$ nonregular, prefixes $0^i$ and $0^j$ for $i<j$ are distinguished by suffix $1^i$: the first completes a member, the second does not. Infinitely many classes rule out a DFA.

## 8. Pumping lemma with correct quantifiers

If $L$ is regular, there exists pumping length $p$ such that every $w\\in L$ with $\\lvert w\\rvert\\ge p$ can be written $w=xyz$ with $\\lvert xy\\rvert\\le p$, $\\lvert y\\rvert>0$, and $xy^iz\\in L$ for every $i\\ge 0$.

For a nonregularity proof:

1. assume regular and receive $p$;
2. choose a strategic long word;
3. consider every allowed decomposition;
4. choose a pumping exponent that leaves the language.

Exhibiting one bad decomposition proves nothing because the lemma may choose another. Satisfying the pumping property also does not prove regularity; the property is necessary, not sufficient.

## 9. Finite-state protocols and safety

A protocol controller can be modeled by labeled transitions. Safety asks whether an error state is reachable. Liveness asks whether something desirable eventually occurs, often requiring infinite-run semantics and fairness assumptions.

Deterministic input automata and transition systems differ: a system may have several enabled environmental or scheduling moves. Nondeterminism represents alternatives. The verifier must state whether all paths or some path satisfy the property.

## Worked construction: endings $01$

Build states according to the longest suffix that is a prefix of pattern $01$:

- $q0$: no useful suffix;
- $q1$: suffix $0$;
- $q2$: suffix $01$, accepting.

On zero: $q0\\to q1$, $q1\\to q1$, $q2\\to q1$. On one: $q0\\to q0$, $q1\\to q2$, $q2\\to q0$. The invariant identifies each state’s suffix meaning, immediately proving acceptance exactly for words ending $01$.

## Worked product: equivalence and a witness

To compare DFAs $A$ and $B$, search pairs $(p,q)$ from their initial pair. A pair is bad when exactly one component accepts. Each product edge reads one common symbol. BFS either reaches a bad pair and parent pointers reconstruct a shortest distinguishing word, or exhausts all reachable pairs. In the latter case, induction on word length shows both machines reach paired states of equal acceptance on every word, so their languages agree.

## Subset construction invariant

An NFA configuration is a set of possible states. The determinized DFA uses those sets as states. After reading word $w$, its subset equals exactly the NFA states reachable by some run labeled $w$. The base is the epsilon closure of initial states; the step unions symbol successors and closes epsilon transitions. Acceptance means the subset intersects the NFA accepting set.

## Minimality certificates

Partition refinement groups states not yet distinguished by tested suffixes. When stable, states in different blocks have a distinguishing suffix, while states in one block have identical right-language behavior. A minimality report should therefore include removal of unreachable states, the final partition, and witnesses separating distinct blocks. Merely drawing fewer circles is not proof.

## Common errors

- Treating NFA branches as equally likely random runs.
- Forgetting an epsilon-NFA’s closure before and after symbol moves.
- Complementing an incomplete transition table without adding a rejecting sink.
- Calling two machines equivalent because bounded tests agree.
- Pumping a word not known to be in the language.
- Assuming a small regular expression always yields a small equivalent DFA.

## Practice with solutions

1. **Give a DFA for strings containing $11$.** Track no pending one, one pending one, and already seen $11$; the last state accepts and is absorbing.
2. **Why is the product finite?** It has at most $\\lvert Q_{A}\\rvert\\lvert Q_{B}\\rvert$ state pairs and the common alphabet gives finitely many outgoing edges.
3. **What does a shortest counterexample certify?** Its run ends at opposite acceptance; BFS discovery depth proves no shorter word distinguishes the machines.
4. **Why can a DFA recognize binary divisibility by three?** Keep the remainder; reading $b$ changes $r$ to $(2r+b) \\bmod 3$.
5. **Must a DFA transition be defined for every state-symbol pair?** Under the standard definition yes; omitted transitions can be completed with a rejecting sink.
6. **What state is reached on the empty word?** The initial state, because the extended transition performs zero symbol steps.
7. **How does an NFA process one symbol?** Take the union of all matching successors from its current state set, including declared epsilon closure as appropriate.
8. **Why does subset construction preserve language?** Its invariant says the DFA subset after $w$ is exactly the set of NFA states reachable on $w$; acceptance conditions then coincide.
9. **Can determinization create exponentially many states?** Yes, up to $2^{\\lvert Q\\rvert}$ subsets, although many may be unreachable.
10. **How does union closure work?** A product DFA tracks both component states and accepts when either component accepts.
11. **How does complement closure work?** For a complete DFA, swap accepting and rejecting states; completeness is essential so every word has a run.
12. **What are Myhill–Nerode equivalent prefixes?** Prefixes $x,y$ for which every suffix $z$ makes $xz$ and $yz$ agree on language membership.
13. **How does distinguishability prove a state lower bound?** Pairwise distinguishable prefixes must reach different states in any DFA, or one state would give identical future behavior.
14. **State pumping quantifiers.** There exists $p$ such that every language word of length at least $p$ has a legal split pumpable for every $i\\ge 0$.
15. **Why can pumping not usually prove regularity?** Satisfying a necessary pumping property does not supply a finite automaton or show the property sufficient.
16. **What belongs in a minimality certificate?** Reachability evidence, stable equivalence blocks, and a distinguishing suffix for every pair of distinct blocks.

[Book overview](#/item/book-algorithms-computation-proof-desk)
`;export{e as default};