
# Automata Equivalence, Myhill–Nerode, and Minimization

A deterministic finite automaton is both a program with bounded memory and a finite representation of a right action on prefixes. This chapter proves the full equivalence among finite-state recognition, finite Nerode index, and finite quotients; derives exact equivalence testing; and proves that minimization produces the unique smallest reachable automaton up to renaming.

## Preparation and outcomes

Use the finite-run, subset and product constructions of the first two chapters, together with equivalence relations and quotient well-definedness from [Introduction to Proof](#/books/introduction-to-proof). We define right congruence locally here, before the later monoid chapter. You will prove both directions of the finite-index theorem, compute a genuinely minimal quotient and distinguish a language-equivalence certificate from a minimality certificate. All machines are over a stated common finite alphabet, with total deterministic transitions when that description is used.

## 1. The deterministic contract

A **deterministic finite automaton** (DFA) is a tuple

$A=(Q,\Sigma,\delta,q_0,F)$

where $Q$ is a finite set of states, $\Sigma$ a finite alphabet, $\delta:Q \times \Sigma \to  Q$ a **total** transition function, $q_0 \in Q$ the initial state, and $F \subseteq Q$ the accepting states. Extend transitions to words by

$\delta^{\ast} (q,\varepsilon)=q$,

$\delta^{\ast} (q,wa)=\delta(\delta^{\ast} (q,w),a)$.

The accepted language is $L(A)=\{w:\delta^{\ast} (q_0,w) \in F\}$. Structural induction proves the action law

$\delta^{\ast} (q,uv)=\delta^{\ast} (\delta^{\ast} (q,u),v)$.

That law connects prefix processing to residual languages. A partial transition table is not a DFA under this contract. It can be completed by adding a rejecting sink and directing every missing transition to it.

### Reachability and observability

A state is **reachable** if it equals $\delta^{\ast} (q_0,w)$ for some word $w$. Unreachable states affect neither language nor any run from the initial state and must be removed before a minimality claim.

Two states $p,q$ are **equivalent** when for every suffix $z$,

$\delta^{\ast} (p,z) \in F \iff \delta^{\ast} (q,z) \in F$.

Otherwise a suffix witnessing disagreement **distinguishes** them. Equivalent states have the same future acceptance behavior, even if their names or incoming edges differ.

## 2. Product search decides exact equivalence

Given DFAs $A$ and $B$ over the same alphabet, form the product graph on $Q_A \times Q_B$. From $(p,q)$ on symbol $a$, move to $(\delta_A(p,a),\delta_B(q,a))$. A pair is a disagreement when exactly one component is accepting.

**Theorem 3.4 (Product equivalence).** $L(A)=L(B)$ if and only if no disagreement pair is reachable from $(q_A,q_B)$.

**Proof.** Induction on $w$ shows the product state after $w$ is $(\delta_A^{\ast}(q_A,w),\delta_B^{\ast}(q_B,w))$. If a disagreement is reachable by $w$, exactly one machine accepts $w$. Conversely, if the languages differ, some word produces opposite acceptance, hence reaches a disagreement.

Breadth-first search (BFS) decides reachability because the graph has at most $|Q_A||Q_B|$ vertices and $|\Sigma|$ outgoing edges per vertex. Storing each discovered pair's parent and incoming symbol reconstructs a shortest distinguishing word. Thus the algorithm returns either a counterexample certificate or exhaustive finite coverage.

![Product-automaton breadth-first path labeled a then b ending at an accepting-rejecting disagreement pair](/content/books/formal-computation-proof-reference/figures/product-equivalence-witness.svg)

*Figure 2.1. If BFS reaches $(u,v)$ by the labels $a,b$ and exactly one of
$u,v$ is accepting, the parent chain reconstructs $ab$. Running both original
DFAs on $ab$ checks the counterexample. Because BFS explores by path length,
the first reached disagreement gives a shortest distinguishing word.*

For state equivalence inside one machine, start the same search from $(p,q)$. For language inclusion $L(A) \subseteq L(B)$, disagreement means “left accepts and right rejects.”

## 3. Nondeterminism and subset states

An epsilon-NFA has a finite state set, initial states, accepting states, and transitions to sets of states, possibly without consuming a symbol. Acceptance means **there exists** an accepting run; it is not a probability statement.

The subset construction produces a DFA whose state is an epsilon-closed subset $S$ of NFA states. On symbol $a$, take every $a$-successor of states in $S$, then epsilon-close the result. The key invariant is

> after reading $w$, the subset state is exactly the set of NFA states reachable along some path whose consumed label is $w$.

Induction on $w$ proves the invariant and therefore language equivalence. At most $2^n$ subsets exist for an $n$-state NFA, though only reachable subsets need be constructed. Equal expressiveness does not mean equal succinctness.

## 4. Myhill–Nerode theorem

For $L \subseteq \Sigma^{\ast} $, recall $x \sim_L y$ when every suffix gives the same membership decision.

**Theorem 3.5 (Myhill–Nerode).** The following are equivalent:

1. $L$ is recognized by a DFA;
2. $\sim_L$ has finite index;
3. $L$ is a union of classes of some finite-index right congruence.

Moreover, the number of Nerode classes is the number of states in a smallest reachable DFA for $L$.

**Proof that 1 implies 2.** If prefixes reach the same state of a recognizing DFA, the action law makes every suffix produce the same acceptance result. Thus equality of reached state refines Nerode equivalence. There are at most $|Q|$ classes.

**Proof that 2 implies 3.** Use the Nerode relation itself. It is a right congruence, and membership is constant on each class.

**Proof that 3 implies 1.** Let states be congruence classes, initial state $[\varepsilon]$, transition $[x] --a-\to  [xa]$, and accepting states the classes contained in $L$. Right congruence makes the transition well-defined. Induction gives state $[w]$ after input $w$, so acceptance is exact.

For the final claim, the Nerode-class automaton has one state per class. Any recognizing DFA maps every prefix to a state and can never merge distinct Nerode classes, so it has at least that many reachable states.

The theorem is simultaneously an expressiveness characterization, a canonical construction, and a state lower-bound technique.

## 5. Minimization by partition refinement

Start with a reachable complete DFA. The accepting and rejecting states form the initial partition because $\varepsilon$ distinguishes states across those blocks. Repeatedly split any block whose members transition, on some symbol, into different current blocks. When no split is possible, states in the same block are equivalent.

### Why stability is enough

At termination, define the **block automaton**: from block $C$ on $a$, move to the unique block containing $\delta(q,a)$ for $q \in C$. Stability makes this well-defined. Induction on suffix length shows two states in one block always reach one block after the same suffix. Since every block lies entirely inside $F$ or its complement, those states agree on acceptance and are equivalent.

Every performed split is also sound. Initially, cross-block states are distinguished by $\varepsilon$. If $p,q$ are split because $\delta(p,a)$ and $\delta(q,a)$ lie in blocks already known distinguishable by $z$, then $az$ distinguishes $p,q$. Thus the final blocks are exactly equivalence classes.

Naive repeated scanning is polynomial. Efficient algorithms maintain splitters and achieve $\mathcal{O}(|\Sigma||Q| \log |Q|)$ time under standard table representations, but correctness rests on the invariant above rather than the optimized work queue.

## 6. Table filling and witness propagation

An alternative marks unordered pairs. Mark every accepting/rejecting pair with witness $\varepsilon$. Then mark $(p,q)$ when some symbol $a$ leads to a marked pair $(\delta(p,a),\delta(q,a))$; prepend $a$ to that pair's witness. Unmarked pairs at the fixed point are equivalent.

This is a least-fixed-point computation of distinguishability. Partition refinement computes the complementary greatest stable equivalence. Their results agree, but their data structures and proof certificates differ.

### Quotient correctness

Let $\equiv$ be state equivalence. Define $[q] --a-\to  [\delta(q,a)]$. If $p \equiv q$, then $\delta(p,a) \equiv \delta(q,a)$, since any distinguishing suffix for the successors would yield one prefixed by $a$ for the originals. Therefore the quotient is well-defined and accepts the same language from $[q_0]$.

## 7. Uniqueness of the minimal machine

Every reachable state $q$ of a DFA for $L$ has a residual language

$L_q=\{z:\delta^{\ast} (q,z) \in F\}$.

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


## Right congruence without an algebraic prerequisite

**Definition 3.1 (Right congruence and saturation).** A right congruence is an equivalence relation $E$ on words such that $xEy$ implies $(xz)E(yz)$ for every word $z$. A language is saturated by $E$ if equivalent words have the same membership status, or equivalently it is a union of $E$-classes. The index is the number of equivalence classes.

Letter stability implies suffix stability by induction on the appended suffix. This is exactly enough to define a state transition on classes. Left stability is not required. In particular the proof in this chapter does not assume that classes can be multiplied as elements of a quotient monoid.

**Lemma 3.2 (The Nerode relation).** For a language $L$, the relation $x\sim_L y$ defined by equality of all suffix membership answers is an equivalence relation, a right congruence, and saturates $L$.

*Proof.* Every suffix gives identical answers for $x$ and itself, proving reflexivity. Equality of answers is symmetric. If $x,y$ agree on every suffix and $y,t$ agree on every suffix, then $x,t$ do as well, proving transitivity. If $x\sim_L y$, a suffix $z$ after $xu,yu$ asks whether $x(uz),y(uz)$ belong to $L$; these answers agree by hypothesis. Thus right stability holds for every appended $u$. Taking the empty suffix proves membership agreement, hence saturation. ∎

Moreover any right congruence $E$ saturating $L$ refines $\sim_L$: if $xEy$, then $xzEyz$ for every $z$, and saturation makes all suffix answers agree. Thus the Nerode relation merges as much history as any such sufficient-memory relation can merge.

**Theorem 3.3 (Full Myhill–Nerode theorem).** For any language over a finite alphabet, the three conditions in Section 4 are equivalent. The number of Nerode classes is the least number of reachable states of a complete DFA for that language.

*Proof.* Given a recognizing DFA, define $xEy$ when the two prefixes reach the same state. Equality makes this an equivalence relation. The action law makes it right-stable, and final-state membership makes it saturate $L$. There are at most as many $E$-classes as reachable states. Since $E$ refines the Nerode relation, each Nerode class is a union of these classes, and there are at most that many Nerode classes. This proves regularity implies finite Nerode index.

If Nerode index is finite, Lemma 3.2 supplies a finite-index right congruence saturating $L$, proving the second-to-third implication. Conversely, take any finite-index right congruence $E$ saturating $L$. Define a machine with states $[x]_E$, start $[\varepsilon]_E$, transition $[x]_E\mapsto[xa]_E$ on $a$, and acceptance precisely for classes contained in $L$. Right stability proves independence of the representative. Saturation proves that the accepting-set definition is unambiguous. Induction on word length gives final state $[w]_E$, so acceptance is exactly membership in $L$. Every state is reachable because its own representative reaches it.

Applying this construction to Nerode equivalence gives one state per Nerode class. The first part shows that no recognizing DFA can have fewer reachable states. This proves exact minimal size, including the one-state cases of the empty and universal languages. ∎

Notice why the class-count direction matters. A machine is forbidden to put distinguishable prefixes in the same state; it is permitted to put equivalent prefixes in several states before minimisation. Equality of reached states therefore refines Nerode equivalence, rather than the reverse.

## Termination and exactness of refinement

A reachable complete DFA has finitely many states. Start with its nonempty accepting and rejecting blocks. Each genuine split increases the block count by at least one, so there can be at most $|Q|-1$ increases. When no block can be split, every transition sends an entire block into one block.

Maintain two assertions. First, states in different blocks have an actual distinguishing suffix. This is true initially using the empty word. A new separation caused by letter $a$ sends the pair to different old blocks, which already have a suffix witness $z$; the new witness is $az$. Old separations keep their witnesses. Second, at stability, states in one block agree after every suffix: induction on its length shows they remain in a common block, whose acceptance status is uniform. Thus one assertion prevents unsound merges and the other prevents unnecessary splits. Together they identify exactly the future-equivalence classes.

The quotient remains reachable because a reaching word for an original state reaches its block. Its run is the original run followed by the quotient map, by induction. Hence it recognises the same language. The exact lower bound then follows from Theorem 3.3, rather than from the informal fact that no further chosen split happens to be available.

For canonical uniqueness, let two reachable minimal machines recognize $L$. A reaching word $x$ determines the residual $x^{-1}L$. Equal reached states give equal residuals. Distinct states in a minimal machine cannot share a residual, since the well-defined future-equivalence quotient would otherwise reduce its state count. Consequently both state sets are in bijection with the same residual set. Matching residuals preserves acceptance, the start residual and letter transitions, giving a bijective DFA homomorphism. That is the exact isomorphism claim; it does not require identical state names.

## Worked example 1: a four-state machine with one redundant distinction

Take states $0,1,2,3$, initial state zero and accepting states two and three, with transitions

| State | $a$ | $b$ |
|---|---|---|
| 0 | 1 | 0 |
| 1 | 1 | 2 |
| 2 | 1 | 3 |
| 3 | 1 | 3 |

All states are reachable by $\varepsilon,a,ab,abb$. The initial partition is $\{0,1\},\{2,3\}$. Letter $b$ separates zero from one, because their successors lie in different initial blocks. The final partition is $\{0\},\{1\},\{2,3\}$. It is stable: the two accepting states both go to block one on $a$ and to their common accepting block on $b$.

The empty suffix separates the accepting block from each rejecting block. Suffix $b$ separates states zero and one. These witnesses prove a lower bound of three states, and the stable quotient gives a recognizing machine with exactly three. The original distinction between one and two trailing $b$ symbols after the relevant $a$ carried no further acceptance information.

## Worked example 2: an immediate and a nonempty disagreement

Compare an even-ones parity DFA with an odd-ones parity DFA over binary words. Their initial states already disagree in acceptance, so the shortest distinguishing word is $\varepsilon$. A product search must inspect its initial pair before extending it.

Now compare the even-ones DFA with a one-state machine accepting every binary word. The initial pair agrees, and reading zero retains agreement. Reading one sends the parity component to its rejecting state while the other component still accepts. Thus $1$ is a distinguishing word. No shorter word works because the only length-zero word was checked. The parent edge labeled one reconstructs that shortest witness, not merely an arbitrary input on which the machines differ.

## Worked example 3: exact memory for length modulo five

Let $L$ consist of binary words whose length is divisible by five. A five-state DFA stores the length remainder and advances it by one on either letter, accepting remainder zero. Induction proves the invariant and supplies an upper bound of five states.

For a lower bound use prefixes of lengths zero through four. If $i<j<5$, append $5-i$ zeroes. The prefix of length $i$ then has total length five and accepts; the other has length $5+(j-i)$, not divisible by five, and rejects. Every pair is distinguishable. Hence there are at least five residuals and the displayed machine is minimal. The chosen suffix can depend on the pair, exactly as the Nerode definition permits.

## What the certificates do and do not establish

A counterexample word needs only two deterministic runs to establish disagreement. An equivalence certificate can instead be a finite product region containing the initial pair, closed under every letter and avoiding acceptance disagreement; induction keeps every word's run inside it. Such a region proves equivalence even without claiming it is the smallest closed region.

A minimality certificate needs additional information: reaching words for the retained quotient blocks and suffixes separating different blocks. A transition-respecting quotient map proves preservation of the language but does not alone prove smallest size. These distinctions remain relevant when a symbolic representation changes the cost of reachability; the semantic obligations do not disappear merely because the state table is represented compactly.

## Exercises with complete solutions

### Exercise 1 — The action law
<a id="automata-equivalence-and-minimization-ex-1"></a>

Prove $\delta^{\ast} (q,uv)=\delta^{\ast} (\delta^{\ast} (q,u),v)$.

<details>
<summary>Hint 1</summary>

Hold the processed prefix fixed and induct over the suffix.

</details>
<details>
<summary>Hint 2</summary>

Use the recursive transition equation for its last letter.

</details>
<details>
<summary>Solution</summary>

**Solution.** Induct on $v$. For $\varepsilon$, both sides equal $\delta^{\ast} (q,u)$. If the law holds for $v$, then $\delta^{\ast} (q,u(va))=\delta(\delta^{\ast} (q,uv),a)=\delta(\delta^{\ast} (\delta^{\ast} (q,u),v),a)=\delta^{\ast} (\delta^{\ast} (q,u),va)$.

</details>

### Exercise 2 — Completing a partial table
<a id="automata-equivalence-and-minimization-ex-2"></a>

Explain why adding one rejecting sink preserves the language of a partial automaton under the convention that a missing transition rejects.

<details>
<summary>Hint 1</summary>

Compare a run before and after its first missing transition.

</details>
<details>
<summary>Hint 2</summary>

The new sink must reject and loop on every symbol.

</details>
<details>
<summary>Solution</summary>

**Solution.** Redirect each missing transition to a new nonaccepting state $\mathit{sink}$, and loop every symbol at $\mathit{sink}$. Runs that used only defined transitions are unchanged. A run encountering its first missing transition now enters $\mathit{sink}$ and can never accept, exactly matching the stated convention.

</details>

### Exercise 3 — Reachability removal
<a id="automata-equivalence-and-minimization-ex-3"></a>

Prove deleting unreachable states preserves the language.

<details>
<summary>Hint 1</summary>

Every prefix of a run is itself a reaching word.

</details>
<details>
<summary>Hint 2</summary>

Induct to show that no run enters a deleted state.

</details>
<details>
<summary>Solution</summary>

**Solution.** Every run begins at $q_0$; induction on input length shows every state on that run is reachable. Hence no run ever visits a deleted state, and the final acceptance result for every word is unchanged.

</details>

### Exercise 4 — Inclusion by product search
<a id="automata-equivalence-and-minimization-ex-4"></a>

Which product states witness failure of $L(A) \subseteq L(B)$?

<details>
<summary>Hint 1</summary>

Inclusion fails only when the left language contains a word the right omits.

</details>
<details>
<summary>Hint 2</summary>

Translate the two membership answers into the product final states.

</details>
<details>
<summary>Solution</summary>

**Solution.** Those $(p,q)$ with $p \in F_A$ and $q \notin F_B$. A word reaches such a pair exactly when $A$ accepts it and $B$ rejects it, which is precisely a counterexample to inclusion.

</details>

### Exercise 5 — Shortest witnesses
<a id="automata-equivalence-and-minimization-ex-5"></a>

Why does BFS parent reconstruction yield a shortest distinguishing word?

<details>
<summary>Hint 1</summary>

Each labeled edge adds one input letter.

</details>
<details>
<summary>Hint 2</summary>

BFS layers are minimum distances, including distance zero.

</details>
<details>
<summary>Solution</summary>

**Solution.** Each product edge consumes one symbol, so path length equals word length. BFS discovers vertices at minimum edge distance from the initial pair. The first disagreement discovered therefore has minimum reachable distance; following parents recovers a word of that length.

</details>

### Exercise 6 — Parity minimization
<a id="automata-equivalence-and-minimization-ex-6"></a>

Construct and prove minimal a DFA for binary words with even many $1$ symbols.

<details>
<summary>Hint 1</summary>

Make each state record the parity of the processed prefix.

</details>
<details>
<summary>Hint 2</summary>

Reach both states and distinguish them by the empty suffix.

</details>
<details>
<summary>Solution</summary>

**Solution.** Use states $E,O$, start and accept $E$; $0$ loops and $1$ swaps states. Induction shows the state records parity. Both states are reachable, and $\varepsilon$ distinguishes them because $E$ accepts and $O$ rejects. Hence no merge is possible and the two-state DFA is minimal.

</details>

### Exercise 7 — Divisibility states
<a id="automata-equivalence-and-minimization-ex-7"></a>

Give the transition rule for reading a binary numeral modulo $m$. Assume $m$ is a positive integer.

<details>
<summary>Hint 1</summary>

Appending a bit changes the integer value to twice its old value plus that bit.

</details>
<details>
<summary>Hint 2</summary>

Reduce this identity modulo the positive modulus.

</details>
<details>
<summary>Solution</summary>

**Solution.** State $r$ records the prefix value modulo $m$. Reading bit $b$ changes value from $n$ to $2n+b$, so set $\delta(r,b)=(2r+b) \bmod m$. Induction on prefix length proves the invariant. Accept state $0$ if leading zeros are allowed.

</details>

### Exercise 8 — Subset invariant
<a id="automata-equivalence-and-minimization-ex-8"></a>

Prove the subset construction's invariant for epsilon-free NFAs.

<details>
<summary>Hint 1</summary>

Describe all possible endpoints after a prefix.

</details>
<details>
<summary>Hint 2</summary>

The next endpoint has exactly one last symbol edge from a previous endpoint.

</details>
<details>
<summary>Solution</summary>

**Solution.** Initially the subset is exactly the initial-state set, which is the set reachable on $\varepsilon$. Assume $S$ is exactly the set reachable on $w$. The next subset is the union of all $a$-successors of states in $S$, exactly the endpoints of paths labeled $wa$. This proves the claim by induction.

</details>

### Exercise 9 — Three Nerode classes
<a id="automata-equivalence-and-minimization-ex-9"></a>

Prove binary words ending in $01$ have exactly three Nerode classes.

<details>
<summary>Hint 1</summary>

Use the suffix-history machine of Chapter 1 for the upper bound.

</details>
<details>
<summary>Hint 2</summary>

Acceptance separates the final-pattern class; continuation one separates the other two.

</details>
<details>
<summary>Solution</summary>

**Solution.** A three-state suffix-tracking DFA gives at most three classes: no useful suffix, suffix $0$, and suffix $01$. They are pairwise distinguishable: the $01$ class differs from the others by $\varepsilon$; suffix $0$ differs from no useful suffix by continuation $1$. Hence at least three classes, so exactly three.

</details>

### Exercise 10 — Sound splitting
<a id="automata-equivalence-and-minimization-ex-10"></a>

If successor states on $a$ are distinguished by $z$, prove the original states are distinguished by $az$.

<details>
<summary>Hint 1</summary>

Process the leading letter before the old witness.

</details>
<details>
<summary>Hint 2</summary>

Use the action law to identify the two successor runs.

</details>
<details>
<summary>Solution</summary>

**Solution.** Processing $az$ first takes the $a$ transition, then processes $z$. Since the successors end with opposite acceptance on $z$, the original states end with opposite acceptance on $az$.

</details>

### Exercise 11 — Quotient well-definedness
<a id="automata-equivalence-and-minimization-ex-11"></a>

Why is $[q] --a-\to  [\delta(q,a)]$ independent of representative?

<details>
<summary>Hint 1</summary>

Assume equivalent representatives led to nonequivalent successor states.

</details>
<details>
<summary>Hint 2</summary>

Prefix a successor distinguishing suffix by the chosen letter.

</details>
<details>
<summary>Solution</summary>

**Solution.** If $p$ and $q$ are equivalent but their $a$-successors were not, some $z$ would distinguish those successors. Then $az$ would distinguish $p$ and $q$, a contradiction. Thus equivalent representatives yield the same successor class.

</details>

### Exercise 12 — Canonical isomorphism
<a id="automata-equivalence-and-minimization-ex-12"></a>

Let $A,B$ be reachable minimal DFAs for the same language. Prove the map “state reached by $x$ in $A$ goes to state reached by $x$ in $B$” is well-defined.

<details>
<summary>Hint 1</summary>

Two reaching words for one state have the same future language.

</details>
<details>
<summary>Hint 2</summary>

Minimality of the other machine forbids distinct states with that same residual.

</details>
<details>
<summary>Solution</summary>

**Solution.** If $x,y$ reach the same state in $A$, then no suffix distinguishes $x,y$, so $x \sim_L y$. Because $B$ recognizes the same $L$, the states reached by $x,y$ in $B$ have identical residuals. Minimality of $B$ forbids distinct equivalent states, so those states coincide. The map is therefore independent of the reaching word.

</details>

[Book overview](#/books/automata-computability-complexity)

## Sources

The CC BY-SA 4.0 Euler source of the same chapter name in *Formal Computation: Languages, Semantics, and Verification* supplies the retained mathematics and twelve original exercises. All additional proofs, concrete examples and staged hints are newly written. For primary companion teaching material see [Michael Sipser’s MIT lecture collection](https://www-math.mit.edu/~sipser/18404/Lectures_Fall_2020/index.html). Existing author code, where present, is an inert mathematical example; no code or tests have been executed here.

## Summary

Right congruence and saturation are sufficient local conditions for a finite quotient automaton. The Nerode relation is the coarsest such memory relation and its index is the exact reachable-state minimum. Refinement terminates, stable blocks agree on every suffix and separated blocks carry witnesses. Residuals make minimal reachable machines canonical up to isomorphism. Product search supplies shortest counterexamples or a closed agreement certificate; minimality additionally needs reachability and separation evidence.
