
# Finite Automata and Regular Languages

A finite automaton remembers only one state from a fixed finite set. That restriction is strong enough for lexical patterns, communication protocols, and hardware controllers, yet weak enough to support exact equivalence and minimization algorithms.

## Preparation and outcomes

The required preparation is finite sets, functions, relations, induction and elementary graph reachability from [Mathematics for Computer Science](#/books/algorithms-computation-proof-desk). This chapter begins with finite machines rather than presupposing monoid theory. You will build a total transition table, prove a state invariant and use a repeated-state argument with its full quantifier order. The later equivalence chapter supplies the complete canonical-state and minimisation proofs; the constructions recalled here introduce their purpose.

Words are finite throughout. An alphabet may be empty, in which case its only word is the empty word. A DFA still has a nonempty finite state set because it has an initial state. These conventions distinguish an empty alphabet, an empty word, an empty language and a machine accepting only the empty word.

## 1. Words and languages

Fix a finite alphabet $\Sigma$. A word is a finite sequence of symbols; $\varepsilon$ is the empty word. $\Sigma^{\ast}$ is the set of all finite words. A language is any subset $L\subseteq\Sigma^{\ast}$.

Concatenation is ordered: if $u=ab$ and $v=ba$, then $uv=abba$. For languages, $AB=\{uv:u\in A,v\in B\}$. Kleene star $A*$ contains concatenations of zero or more words from $A$, including $\varepsilon$.

## 2. Deterministic finite automata

A DFA is $(Q,\Sigma,\delta,q_0,F)$, where $Q$ is finite, $\delta:Q\times \Sigma\to Q$ total, $q_0$ initial, and $F\subseteq Q$ accepting. Extend transitions to words:

$\delta*(q,\varepsilon)=q$,

$\delta*(q,wa)=\delta(\delta*(q,w),a)$.

The language recognized is $\{w:\delta*(q0,w)\in F\}$.

**Example: even number of ones.** Use states $\mathit{even},\mathit{odd}$; reading zero keeps state, reading one toggles. Start and accept at $\mathit{even}$. Induction on prefix length proves the current state records parity of ones read.

## 3. Nondeterminism is set evolution

An NFA transition maps a state and symbol to a set of states and may include epsilon moves. A word is accepted if at least one possible run ends accepting. This is existential branching, not probability.

The subset construction makes a DFA whose states are subsets of NFA states. On a symbol, take all symbol successors, then epsilon closure. The invariant is exact:

> After prefix $w$, the DFA subset equals precisely the NFA states reachable by some run labeled $w$.

Therefore the two machines accept the same language. The deterministic machine may have exponentially many reachable subsets, so expressive equivalence does not imply equal representation size.

## 4. Regular expressions and closure

Regular expressions build languages from empty language, $\varepsilon$, and symbols using union, concatenation, and star. Thompson-style construction turns an expression into an epsilon-NFA. State elimination or algebraic equations turn a finite automaton back into an expression. Thus regular expressions, NFAs, and DFAs describe the same class of regular languages.

Regular languages are closed under union and intersection by product automata. For DFAs $A,B$, product state $(p,q)$ tracks both runs. Accept pairs according to the desired Boolean combination. Complement flips accepting states only after ensuring the DFA transition is total.

## 5. Product automata as counterexample search

To test DFA equivalence, build a product and mark pairs where exactly one component accepts. The machines differ exactly when such a disagreement state is reachable from the initial pair. Breadth-first search returns a shortest distinguishing word by storing parent pairs and edge symbols.

This is more informative than testing a fixed list of words. If no disagreement pair is reachable, induction on words proves equivalence for all inputs. If one is reachable, the recovered word is an exact counterexample.

## 6. Minimization by distinguishability

States $p,q$ are equivalent when every suffix leads both to acceptance or both to rejection. Initially, accepting and rejecting states are distinguishable by empty suffix. Refine blocks whenever some symbol sends two states to different blocks. At stability, each block represents one residual language.

Merging equivalent states yields a minimum-state DFA after unreachable states are removed. The result is unique up to state renaming. “Looks similar” is not the criterion; indistinguishability by all suffixes is.

## 7. Myhill–Nerode theorem

For language $L$, define $x\sim _{L} y$ when for every suffix $z$, $xz\in L$ exactly when $yz\in L$. This is a right-congruence equivalence relation. $L$ is regular exactly when it has finitely many equivalence classes.

If a DFA recognizes $L$, prefixes reaching the same state are equivalent, so there are finitely many classes. Conversely, take classes as states and transition $[x]$ on symbol $a$ to $[xa]$; right congruence makes this well-defined.

To prove $\{0^n1^n:n\ge 0\}$ nonregular, prefixes $0^i$ and $0^j$ for $i<j$ are distinguished by suffix $1^i$: the first completes a member, the second does not. Infinitely many classes rule out a DFA.

## 8. Pumping lemma with correct quantifiers

If $L$ is regular, there exists pumping length $p$ such that every $w\in L$ with $\lvert w\rvert\ge p$ can be written $w=xyz$ with $\lvert xy\rvert\le p$, $\lvert y\rvert>0$, and $xy^iz\in L$ for every $i\ge 0$.

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

On zero: $q0\to q1$, $q1\to q1$, $q2\to q1$. On one: $q0\to q0$, $q1\to q2$, $q2\to q0$. The invariant identifies each state’s suffix meaning, immediately proving acceptance exactly for words ending $01$.

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


## The complete finite-run argument

**Definition 1.1 (Run).** For a word $w=a_1\cdots a_m$, the run from state $q$ is the sequence $q_0,\ldots,q_m$ with $q_0=q$ and $q_i=\delta(q_{i-1},a_i)$. Totality gives existence at every step, and determinism gives uniqueness. An accepting run from the designated initial state ends in $F$; intermediate visits to $F$ do not themselves accept a longer word.

**Theorem 1.2 (Prefix invariant).** The state after a prefix $u$ is $\delta^*(q,u)$, and $\delta^*(q,uv)=\delta^*(\delta^*(q,u),v)$ for every suffix $v$.

*Proof.* The empty suffix makes both sides the state after $u$. If the assertion holds for $v$, appending a letter applies the same transition to the equal states on both sides. Induction on suffix length proves the identity. The corresponding prefix assertion follows directly from the recursive definition of the run. ∎

A streaming implementation needs only a state variable for this invariant. It must also reject input symbols outside its declared alphabet or give them an explicit interpretation. Quietly ignoring an unsupported symbol recognises a different language. For fixed explicit tables, a word of length $m$ uses $m$ transition lookups; a statement about bits, decoding or table-query costs needs the corresponding representation model.

**Theorem 1.3 (Subset construction, including epsilon).** Let an epsilon-NFA have initial set $I$, accepting set $F$ and transition relations labeled by letters or $\varepsilon$. Write $C(S)$ for all states reachable from $S$ by zero or more epsilon moves. Start a DFA in $C(I)$ and define

$$D(S,a)=C\left(\bigcup_{q\in S}\Delta(q,a)\right).$$

After $w$ its state is exactly the NFA endpoints of finite runs consuming $w$.

*Proof.* For the empty word, precisely epsilon-labelled paths are permitted, giving $C(I)$. A run consuming $wa$ first consumes $w$, may take epsilon moves, consumes its final letter $a$, and then may take epsilon moves again. The prefix endpoint set is already epsilon-closed by induction, so the displayed union and closure describe exactly its possible endpoints. Conversely every endpoint in that union-and-closure has a run obtained by concatenating those finite pieces. The subset accepts exactly when it intersects $F$, which is equivalent to existence of an accepting NFA run. ∎

The empty subset is a legitimate rejecting state and loops to itself. Thus even an NFA with missing transitions produces a complete DFA. Epsilon cycles add possible finite reachability but do not turn existential acceptance into probability or require an accepting infinite run.

## A full pumping theorem

**Theorem 1.4 (Regular pumping lemma).** For every regular language $L$, there is an integer $p\ge1$ such that every $w\in L$ with $|w|\ge p$ has a decomposition $w=xyz$ satisfying $|xy|\le p$, $|y|>0$, and $xy^iz\in L$ for every integer $i\ge0$.

*Proof.* Choose a recognizing DFA and put $p=|Q|$. Its run on an eligible word visits $p+1$ states before and after the first $p$ letters. Two of these states coincide, at indices $r<s\le p$. Let $x$ be the first $r$ letters, $y$ the next $s-r$ letters and $z$ the rest. Then $y$ is nonempty, $|xy|=s\le p$, and reading $y$ loops at the state after $x$. The action law shows that reading any number $i$ of copies of $y$, including zero, leaves that state unchanged before reading $z$. The original accepting final state is therefore reached for every $i$. ∎

The decomposition depends on the word; the exponent is universally quantified after that decomposition has been chosen. Negating the conclusion requires a bad exponent for every permitted decomposition of a carefully chosen long language word. The pumping length need not be the least possible one, and it does not claim that every split of every long word works.

## Worked example 1: a machine for containing eleven

Over $\{0,1\}$ use states $N,P,A$: no occurrence of $11$ and no pending final one; no occurrence of $11$ and a pending final one; and an occurrence already seen. Start at $N$ and accept only $A$.

| State | Read $0$ | Read $1$ |
|---|---|---|
| $N$ | $N$ | $P$ |
| $P$ | $N$ | $A$ |
| $A$ | $A$ | $A$ |

Initially the empty prefix has the meaning of $N$. Appending zero clears a pending one without creating $11$. Appending one to $N$ creates a pending one, and appending one to $P$ completes the pattern. Once seen, an occurrence cannot be erased by later letters, justifying the absorbing state. These cases prove the state meanings by induction. The run on $1011$ is $N,P,N,P,A$, so it accepts; on $101$ it ends at $P$ and rejects. The invariant proves the assertion for every binary word, not only these traces.

## Worked example 2: binary remainders

Interpret the empty word as zero and allow leading zeroes. Let $\operatorname{value}(wb)=2\operatorname{value}(w)+b$. A three-state DFA keeps the remainder modulo three, starts at zero and accepts zero. Its rows are

| Remainder | Read $0$ | Read $1$ |
|---|---|---|
| 0 | 0 | 1 |
| 1 | 2 | 0 |
| 2 | 1 | 2 |

The invariant is $\mathit{state}=\operatorname{value}(\mathit{prefix})\bmod3$. It holds initially and is preserved because replacing a number by an equal residue does not change the residue of twice that number plus the next bit. The word $110$ follows $0,1,0,0$, corresponding to value six, and is accepted. The word $101$ follows $0,1,2,2$, corresponding to five, and is rejected. If a numeral format forbids the empty word or leading zeroes, add a finite format condition; the remainder calculation alone does not enforce that separate convention.

## Worked example 3: every legal split is defeated

Assume $L=\{0^n1^n:n\ge0\}$ were regular and receive its pumping length $p$. Choose $w=0^p1^p$, which belongs to $L$ and has length at least $p$. For any allowed split with $|xy|\le p$ and nonempty $y$, the substring $y$ consists entirely of zeroes, say $y=0^k$ for $1\le k\le p$. Pumping with exponent zero gives $0^{p-k}1^p$, whose block counts differ. It is not in $L$. This handles every allowed decomposition and contradicts the lemma. Choosing just one convenient split would not have supplied this universal step.

## Why the pumping property is not sufficient

There are nonregular languages satisfying precisely the regular pumping property. Over $\{a,b,c\}$, consider

$$K=\{a^i b^j c^k:i,j,k\ge0\text{ and }(i=0\text{ or }j=k)\}.$$

Every nonempty word pumps with length one by choosing its first letter as $y$ and $x=\varepsilon$. If there is an $a$, pumping it preserves equal $b,c$ counts when some $a$ remains, while deleting the only $a$ enters the unrestricted $i=0$ case. If there is no $a$, pumping the first $b$ or $c$ keeps that unrestricted case and preserves block order. All nonnegative exponents therefore work.

Nevertheless $K$ is nonregular. If a finite DFA recognized it, two prefixes $ab^r,ab^s$ with $r<s$ would reach one state by finiteness. Appending $c^r$ must then produce the same acceptance result. But $ab^rc^r$ belongs and $ab^sc^r$ does not. This is impossible. Thus the pumping property by itself cannot be reversed into a regularity proof; a machine or an equivalent sufficient criterion is required.

## Practice with solutions

### Exercise 1
<a id="finite-automata-regular-languages-ex-1"></a>

Give a complete DFA over the binary alphabet for words containing $11$, and justify its states.

<details>
<summary>Hint 1</summary>

Track whether a final one is waiting to be paired.

</details>
<details>
<summary>Hint 2</summary>

Once the pattern occurs, later input cannot undo it.

</details>
<details>
<summary>Solution</summary>

1. **Give a DFA for strings containing $11$.** Track no pending one, one pending one, and already seen $11$; the last state accepts and is absorbing.

The complete three-row table and induction in Worked example 1 provide both construction and correctness. Every input prefix lies in exactly one of its three semantic cases, and the sole accepting case is exactly pattern occurrence.

</details>

### Exercise 2
<a id="finite-automata-regular-languages-ex-2"></a>

Why is the product used for comparing two finite DFAs over a common finite alphabet finite?

<details>
<summary>Hint 1</summary>

Its vertices are ordered pairs of component states.

</details>
<details>
<summary>Hint 2</summary>

Count pairs before counting outgoing transitions.

</details>
<details>
<summary>Solution</summary>

2. **Why is the product finite?** It has at most $\lvert Q_{A}\rvert\lvert Q_{B}\rvert$ state pairs and the common alphabet gives finitely many outgoing edges.

The product has at most $|Q_A||Q_B|$ vertices and at most $|\Sigma||Q_A||Q_B|$ labeled edges. Both quantities are finite. Reachability therefore terminates when a visited set prevents reprocessing a pair.

</details>

### Exercise 3
<a id="finite-automata-regular-languages-ex-3"></a>

What does a shortest distinguishing word certify, and why does product BFS find one?

<details>
<summary>Hint 1</summary>

Its acceptance disagreement and its shortestness are separate facts.

</details>
<details>
<summary>Hint 2</summary>

Each product edge consumes exactly one letter.

</details>
<details>
<summary>Solution</summary>

3. **What does a shortest counterexample certify?** Its run ends at opposite acceptance; BFS discovery depth proves no shorter word distinguishes the machines.

Running both machines checks disagreement. BFS processes increasing edge distances, including a possible initial disagreement at length zero, so its first bad pair has no shorter reaching word. Parent labels reconstruct exactly that word.

</details>

### Exercise 4
<a id="finite-automata-regular-languages-ex-4"></a>

Why can a DFA recognize binary values divisible by three, allowing leading zeroes and interpreting the empty word as zero?

<details>
<summary>Hint 1</summary>

Appending a bit doubles the old value before adding that bit.

</details>
<details>
<summary>Hint 2</summary>

Keep only the remainder needed by the final divisibility test.

</details>
<details>
<summary>Solution</summary>

4. **Why can a DFA recognize binary divisibility by three?** Keep the remainder; reading $b$ changes $r$ to $(2r+b) \bmod 3$.

Worked example 2 supplies the full table and invariant. The accepting remainder is zero. The empty-word convention and format requirements are distinct from the modular arithmetic, so a different numeral format needs an additional finite check.

</details>

### Exercise 5
<a id="finite-automata-regular-languages-ex-5"></a>

Must every state-symbol transition of a DFA be defined, and how does one repair a partially specified rejecting-run convention?

<details>
<summary>Hint 1</summary>

Use the total-function requirement in the definition.

</details>
<details>
<summary>Hint 2</summary>

One new nonaccepting state can absorb every formerly missing move.

</details>
<details>
<summary>Solution</summary>

5. **Must a DFA transition be defined for every state-symbol pair?** Under the standard definition yes; omitted transitions can be completed with a rejecting sink.

Defined runs remain unchanged. A run encountering a missing transition enters the sink and stays nonaccepting on all later symbols, exactly preserving rejection-on-undefined semantics. Complementing is then safe only after completion.

</details>

### Exercise 6
<a id="finite-automata-regular-languages-ex-6"></a>

Which state is reached on the empty word, and when is that word accepted?

<details>
<summary>Hint 1</summary>

No input symbol is processed.

</details>
<details>
<summary>Hint 2</summary>

Acceptance still depends on the final state, even for a zero-step run.

</details>
<details>
<summary>Solution</summary>

6. **What state is reached on the empty word?** The initial state, because the extended transition performs zero symbol steps.

The extended-transition base equation gives $\delta^*(q_0,\varepsilon)=q_0$. Thus the empty word is accepted exactly when $q_0\in F$. Having no transitions to perform is not by itself acceptance or rejection.

</details>

### Exercise 7
<a id="finite-automata-regular-languages-ex-7"></a>

How does an epsilon-NFA process one new input symbol from its current possible-state set?

<details>
<summary>Hint 1</summary>

The set must include epsilon reachability before the consumed symbol.

</details>
<details>
<summary>Hint 2</summary>

Union symbol successors and close under epsilon again.

</details>
<details>
<summary>Solution</summary>

7. **How does an NFA process one symbol?** Take the union of all matching successors from its current state set, including declared epsilon closure as appropriate.

For an epsilon-closed set $S$, use $C(\bigcup_{q\in S}\Delta(q,a))$. A possible run can take any finite epsilon prefix, one matching symbol move and a finite epsilon suffix. The formula includes exactly those paths, even when cycles exist.

</details>

### Exercise 8
<a id="finite-automata-regular-languages-ex-8"></a>

Prove why subset construction preserves the language of an epsilon-NFA.

<details>
<summary>Hint 1</summary>

Prove an exact endpoint-set statement after every prefix.

</details>
<details>
<summary>Hint 2</summary>

Use epsilon closure for the base and a one-symbol decomposition for the step.

</details>
<details>
<summary>Solution</summary>

8. **Why does subset construction preserve language?** Its invariant says the DFA subset after $w$ is exactly the set of NFA states reachable on $w$; acceptance conditions then coincide.

Theorem 1.3 proves both directions of that invariant. Intersecting its endpoint set with the accepting states is equivalent to existence of an accepting run, so the acceptance predicates coincide on every word.

</details>

### Exercise 9
<a id="finite-automata-regular-languages-ex-9"></a>

Can determinisation produce exponentially many states, and does its upper bound require them all to be reachable?

<details>
<summary>Hint 1</summary>

A possible-state set is a subset of the NFA states.

</details>
<details>
<summary>Hint 2</summary>

Count all subsets, then distinguish that bound from actual exploration.

</details>
<details>
<summary>Solution</summary>

9. **Can determinization create exponentially many states?** Yes, up to $2^{\lvert Q\rvert}$ subsets, although many may be unreachable.

An $n$-element state set has $2^n$ subsets. This gives a worst-case representation upper bound, not a guarantee that every subset appears. Constructing only reachable subsets can save work on a particular machine, while some language families still require exponential deterministic size.

</details>

### Exercise 10
<a id="finite-automata-regular-languages-ex-10"></a>

Describe and prove the product-DFA construction for union.

<details>
<summary>Hint 1</summary>

Track both deterministic runs on the same word.

</details>
<details>
<summary>Hint 2</summary>

Choose acceptance by a Boolean condition on the two final states.

</details>
<details>
<summary>Solution</summary>

10. **How does union closure work?** A product DFA tracks both component states and accepts when either component accepts.

Take paired initial states and paired transitions; accept a pair when either component accepts. Induction on word length gives the pair of original run states, so union acceptance holds exactly when at least one original language contains the word.

</details>

### Exercise 11
<a id="finite-automata-regular-languages-ex-11"></a>

Describe and prove complement closure, including its totality requirement.

<details>
<summary>Hint 1</summary>

Every word needs one defined deterministic run.

</details>
<details>
<summary>Hint 2</summary>

Complement is relative to the fixed alphabet.

</details>
<details>
<summary>Solution</summary>

11. **How does complement closure work?** For a complete DFA, swap accepting and rejecting states; completeness is essential so every word has a run.

Keep a complete DFA and replace $F$ by $Q\setminus F$. Each word still has the same unique final state, and exactly one of the old and new accepting sets contains it. If a run could be undefined, flipping marks alone would not make that originally rejected word accepted.

</details>

### Exercise 12
<a id="finite-automata-regular-languages-ex-12"></a>

Define Myhill–Nerode equivalence of prefixes and explain the role of the empty suffix.

<details>
<summary>Hint 1</summary>

Compare all possible future membership decisions.

</details>
<details>
<summary>Hint 2</summary>

The empty continuation also tests current membership.

</details>
<details>
<summary>Solution</summary>

12. **What are Myhill–Nerode equivalent prefixes?** Prefixes $x,y$ for which every suffix $z$ makes $xz$ and $yz$ agree on language membership.

Use $x\sim_L y$ iff $xz\in L\leftrightarrow yz\in L$ for every suffix $z$. Taking $z=\varepsilon$ shows that equivalent prefixes agree on membership already. Other suffixes test every future continuation. Chapter 3 proves the full finite-index theorem locally.

</details>

### Exercise 13
<a id="finite-automata-regular-languages-ex-13"></a>

Why must pairwise distinguishable prefixes reach different states in any recognizing DFA?

<details>
<summary>Hint 1</summary>

Assume two such prefixes reached the same state.

</details>
<details>
<summary>Hint 2</summary>

Apply a suffix that distinguishes those two prefixes.

</details>
<details>
<summary>Solution</summary>

13. **How does distinguishability prove a state lower bound?** Pairwise distinguishable prefixes must reach different states in any DFA, or one state would give identical future behavior.

Determinism and the action law would give identical final states after that suffix, hence identical acceptance. Distinguishability requires opposite answers, a contradiction. Consequently any finite family of pairwise distinguishable prefixes supplies the corresponding state lower bound.

</details>

### Exercise 14
<a id="finite-automata-regular-languages-ex-14"></a>

State all quantifiers and side conditions of the regular pumping lemma.

<details>
<summary>Hint 1</summary>

The machine supplies one pumping length before the word is chosen.

</details>
<details>
<summary>Hint 2</summary>

The split is existential, but every nonnegative exponent must work.

</details>
<details>
<summary>Solution</summary>

14. **State pumping quantifiers.** There exists $p$ such that every language word of length at least $p$ has a legal split pumpable for every $i\ge 0$.

Theorem 1.4 has order $\exists p\ge1\ \forall w\in L$ of length at least $p$, $\exists x,y,z$, $\forall i\ge0$, with $w=xyz$, $|xy|\le p$, $|y|>0$ and $xy^iz\in L$. The choice of split may depend on the word, while the same split must work for all exponents.

</details>

### Exercise 15
<a id="finite-automata-regular-languages-ex-15"></a>

Why does satisfaction of the regular pumping property not by itself prove regularity?

<details>
<summary>Hint 1</summary>

A necessary condition need not be sufficient.

</details>
<details>
<summary>Hint 2</summary>

Use the explicitly analysed language $K$ above.

</details>
<details>
<summary>Solution</summary>

15. **Why can pumping not usually prove regularity?** Satisfying a necessary pumping property does not supply a finite automaton or show the property sufficient.

That language has pumping length one but cannot be recognized by any finite DFA, by its distinguishable-prefix argument. It therefore supplies an actual counterexample to the reversed implication, rather than only a warning about proof technique.

</details>

### Exercise 16
<a id="finite-automata-regular-languages-ex-16"></a>

What evidence should support a reachable-DFA minimality claim?

<details>
<summary>Hint 1</summary>

Show which states can actually occur.

</details>
<details>
<summary>Hint 2</summary>

Distinguish every different proposed quotient state by a suffix.

</details>
<details>
<summary>Solution</summary>

16. **What belongs in a minimality certificate?** Reachability evidence, stable equivalence blocks, and a distinguishing suffix for every pair of distinct blocks.

Supply reaching words for the retained states, a stable quotient mapping compatible with every transition and acceptance, and suffix witnesses separating each pair of different quotient blocks. Stability proves language preservation, while the witnesses prove that no recognizing DFA can merge those histories. Chapter 3 proves these implications in full.

</details>

[Book overview](#/books/automata-computability-complexity)

## Sources

This chapter expands the CC BY-SA 4.0 Euler chapter of the same stable name in *Mathematics for Computer Science*, preserving its constructions and all sixteen original practice items. The additional proofs, tables, examples and staged help are newly written. A primary companion is [Michael Sipser's MIT Theory of Computation lecture collection](https://www-math.mit.edu/~sipser/18404/Lectures_Fall_2020/index.html). The proofs here are independent exposition; no lecture prose or PDF has been copied.

## Summary

A complete DFA has one defined run on every word, and a state invariant explains what that finite memory means. Epsilon-NFA subset states record every possible endpoint without introducing probability. A repeated state proves the pumping lemma with an existential split that works for all exponents; nonregularity must defeat every allowed split. The pumping property is necessary but not sufficient, as an explicit counterexample shows. The next chapter constructs equivalent expressions and automata and proves closure through effective finite transformations.
