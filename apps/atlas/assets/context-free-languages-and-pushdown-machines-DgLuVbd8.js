var e=`---
parent_id: book-formal-computation-proof-reference
chapter_id: context-free-languages-and-pushdown-machines
title: "Context-Free Languages and Pushdown Machines"
level: advanced-undergraduate
estimated_minutes: 220
license: CC BY-SA 4.0
---

# Context-Free Languages and Pushdown Machines

Finite automata compress every prefix into one of finitely many residuals. Nested syntax and unbounded matching demand a different memory discipline: a stack. Context-free grammars describe recursive generation; pushdown automata describe stack-controlled recognition. This chapter proves their expressive equivalence, develops exact derivation and run semantics, and marks closure and decidability boundaries without treating a parser as a proof by itself.

## 1. Grammars and derivations

A **context-free grammar** (CFG) is $G=(V,\\Sigma,P,S)$, where $V$ is a finite set of variables, $\\Sigma$ a finite terminal alphabet disjoint from $V$, $P$ a finite set of productions $A \\to  \\alpha$ with $A \\in V$ and $\\alpha \\in (V \\cup \\Sigma)^{\\ast}$, and $S \\in V$ the start variable.

For strings $x,y$ over variables and terminals, define one-step derivation

$xAy \\Rightarrow  x \\alpha y$ when $A \\to  \\alpha$ is a production.

Its reflexive transitive closure is $\\Rightarrow^{\\ast } $. The generated language is

$L(G)={w \\in \\Sigma^{\\ast} : S \\Rightarrow^{\\ast }  w}$.

“Context-free” means the replaced variable does not depend on its neighbors. It does not mean the language has no constraints or that parsing is effortless.

A **leftmost derivation** always replaces the leftmost remaining variable; a rightmost derivation uses the rightmost. Every completed derivation can be rearranged into either form without changing its parse tree, because expansions at distinct variable occurrences commute.

## 2. Parse trees and ambiguity

A parse tree has root $S$. Each internal node labeled $A$ has children spelling the right side of one chosen production $A \\to  \\alpha$; terminal leaves, read left to right, form the yield. Epsilon productions contribute no terminal symbol.

Parse trees correspond to equivalence classes of derivations that differ only in the order of expanding independent nodes. A grammar is **ambiguous** if some word has two distinct parse trees (equivalently, two distinct leftmost derivations). A language is **inherently ambiguous** if every CFG generating it is ambiguous. Grammar ambiguity and language ambiguity are different claims.

For arithmetic expressions, the grammar $E \\to  E+E | E\\ast E | \\mathrm{id}$ is ambiguous: $\\mathrm{id}+\\mathrm{id}\\ast \\mathrm{id}$ has trees with \`+\` or \`*\` at the root. Separating precedence levels into expression, term, and factor variables can remove this ambiguity.

## 3. Pushdown automata

A nondeterministic pushdown automaton (PDA) has finite control states, an input alphabet, a stack alphabet with bottom marker, transitions, initial state, and accepting states. A transition may inspect the next input symbol or consume epsilon, inspect the top stack symbol, change state, and replace the top by a finite stack string.

A **configuration** records $(state, unread input, stack)$. The one-step relation on configurations is induced by transitions. Acceptance by final state means there exists a finite run consuming all input and ending in an accepting state. Acceptance by empty stack is an equivalent convention for nondeterministic PDAs after standard transformations, but mixing conventions mid-proof is unsafe.

Nondeterminism is existential choice. A failed branch does not reject if another branch accepts. Epsilon cycles require care in implementations: a naive simulator can fail to terminate even though the mathematical reachability question has a finite accepting witness.

### Example: balanced delimiters

For one delimiter type, push on \`(\`, pop on \`)\`, reject a pop at the bottom marker, and accept after all input exactly when only the bottom marker remains. The invariant is: after every prefix that has not underflowed, stack height above the marker equals unmatched opening delimiters. This proves both safety (no premature close) and final balance.

## 4. From grammars to pushdown machines

Given CFG $G$, construct a PDA that stores the current sentential-form suffix on its stack. Begin with $S$. It has two kinds of move:

1. if variable $A$ is on top, nondeterministically replace it by the right side of any production $A \\to  \\alpha$ (pushed in an orientation consistent with the chosen stack convention);
2. if terminal $a$ is on top and the next input symbol is $a$, pop it and consume the input.

Accept when input and stack are both exhausted.

**Simulation invariant.** From stack content $\\gamma$ and unread input $u$, an accepting continuation exists exactly when $\\gamma \\Rightarrow^{\\ast }  u$ under the leftmost-expansion convention encoded by the stack orientation.

If the grammar derives $w$, select productions matching a leftmost derivation and consume terminals when exposed. Conversely, every variable-replacement move is a production and every terminal-consumption move verifies the yield, so an accepting run records a derivation of the input.

## 5. From pushdown machines to grammars

The reverse construction is more technical. First convert final-state acceptance to empty-stack acceptance. Add a fresh bottom marker and start state; its initialization epsilon move enters the old start state with the old initial stack symbol above the fresh marker. Preserve the old transitions; from each old accepting state add an epsilon move to a fresh drain state, where epsilon moves pop every old stack symbol and finally the fresh marker. Acceptance still requires all input to have been consumed, so entering the drain early cannot create a spurious accepting run. Conversely, an old accepting run can enter the drain after its input ends and empty the stack. Now normalize transitions so each changes stack height in controlled steps and use variables

$[p A q]$

meaning: strings that can take the machine from state $p$ with $A$ on top to state $q$ after removing that occurrence of $A$, without disturbing the lower stack.

Productions mirror transitions. A pop transition contributes a terminal or epsilon production. A push of new symbols is decomposed through intermediate control states, generating concatenations of variables that summarize the subcomputations removing those symbols.

**Meaning invariant.** $[p A q] \\Rightarrow^{\\ast }  w$ if and only if the PDA has a computation labeled $w$ that begins in state $p$ with top $A$, ends in state $q$ after that $A$ and all material pushed above it have been removed, and leaves the lower stack unchanged.

Induction on derivation proves one direction; induction on the nested structure or length of a normalized computation proves the other. The grammar start variable summarizes removal of the fresh bottom marker from the fresh start state to the designated drain-completion state. The construction is finite because state and stack alphabets are finite.

Together with Section 4, this proves: a language is context-free exactly when some nondeterministic PDA accepts it.

## 6. Dyck languages are the nesting core

The Dyck language $D_k$ consists of correctly balanced words over $k$ kinds of opening and closing delimiters with proper nesting. A PDA pushes delimiter type on an opening and must pop the matching type on a close.

For $k=1$, balance plus no negative prefix sum characterizes membership. For $k>1$, counts alone are insufficient: $([)]$ has matching totals but crosses the required last-in-first-out order. The stack stores the unmatched opening sequence, not just its length.

The Chomsky–Schützenberger perspective says every context-free language can be obtained from a Dyck language intersected with a regular language and then transformed homomorphically. This identifies nested matching plus finite control as the structural core; a full proof belongs after grammar normal forms.

## 7. Closure constructions

Context-free languages are closed under union, concatenation, and star by direct grammar constructions with fresh start variables. They are closed under homomorphism, inverse homomorphism, and intersection with a regular language.

For intersection with regular $R$, run a PDA for $L$ and DFA for $R$ in product control. The PDA stack is unchanged; finite control stores the state pair. Acceptance requires both components. Therefore $L \\cap R$ is context-free.

They are not closed under general intersection or complement. The failure of intersection has a direct witness. Concretely, languages

$\\{a^i b^j c^k : i=j\\}$ and $\\{a^i b^j c^k : j=k\\}$

are context-free, but their intersection is $\\{a^n b^n c^n\\}$, which is not. Failure of complement closure then follows indirectly: if context-free languages were closed under complement, their existing union closure and De Morgan's law would force intersection closure.

## 8. Pumping lemma for context-free languages

For every context-free language $L$, some $p$ exists such that any $w \\in L$ with $|w|\\ge p$ decomposes as

$w=uvxyz$,

with $|vxy|\\le p$, $|vy|>0$, and $uv^ixy^iz \\in L$ for all $i\\ge 0$.

In a sufficiently tall parse tree in binary normal form, a root-to-leaf path repeats a variable. The upper occurrence derives a context containing the lower occurrence; repeating or deleting that nested derivation pumps two regions $v,y$ together.

For a non-context-freeness proof, the adversarial order is: receive $p$, choose $w$, handle every legal decomposition, then choose $i$. The lemma is necessary, not sufficient. Ogden's lemma can force pumping to touch marked positions and is stronger for some examples.

### Proof sketch for $\\{a^n b^n c^n\\}$

Choose $a^p b^p c^p$. Since $|vxy|\\le p$, the window cannot include all three symbol blocks. Pumping changes counts in at most two blocks while the untouched third remains $p$, or disrupts block order. Because at least one of $v,y$ is nonempty, choosing $i=0$ or $2$ makes the three counts unequal. Every legal split fails, contradicting the lemma.

## 9. Decision boundaries

For CFGs, membership, emptiness, and finiteness are decidable. General equivalence, inclusion, universality, and ambiguity are undecidable. Deterministic context-free languages have stronger closure and algorithmic properties than arbitrary context-free languages, but not every CFL is deterministic.

Membership algorithms include dynamic programming after normalization. Their existence does not make every grammar suitable for predictive parsing. LL and LR conditions describe useful deterministic parsing subclasses and conflicts relative to an algorithm; they do not redefine context-freeness.

## 10. Proof and implementation audit

- State whether a derivation is unrestricted, leftmost, or rightmost.
- Distinguish a derivation sequence from its parse tree.
- Fix stack orientation, acceptance convention, and epsilon behavior.
- PDA branches are existential, not probabilistic.
- A grammar-to-parser tool can reject a grammar class even when the language is context-free.
- Balanced counts do not guarantee properly nested types.
- Pumping arguments must handle every permitted decomposition.
- Closure under regular intersection does not imply closure under arbitrary context-free intersection.

## Exercises with complete solutions

### 1. A grammar for equal blocks

Give a CFG for $\\{a^n b^n:n\\ge 0\\}$ and prove it correct.

**Solution.** Use $S \\to  aSb | \\varepsilon$. Each recursive step adds one $a$ at the left and one $b$ at the right, so every derived word has equal blocks. Conversely, $n$ recursive steps followed by epsilon derives $a^n b^n$; induction on $n$ proves completeness.

### 2. Leftmost derivation

With $S \\to  AB$, $A \\to  aA | \\varepsilon$, $B \\to  bB | \\varepsilon$, give a leftmost derivation of $aab$.

**Solution.** $S \\Rightarrow  AB \\Rightarrow  aAB \\Rightarrow  aaAB \\Rightarrow  aaB \\Rightarrow  aabB \\Rightarrow  aab$. At every step the leftmost remaining variable is expanded.

### 3. Ambiguous expression

Give two parse structures for $\\mathrm{id}+\\mathrm{id}\\ast \\mathrm{id}$ under $E \\to  E+E | E\\ast E | \\mathrm{id}$.

**Solution.** One root uses $E \\to  E+E$, yielding $\\mathrm{id} + (\\mathrm{id}\\ast \\mathrm{id})$. The other root uses $E \\to  E\\ast E$, yielding $(\\mathrm{id}+\\mathrm{id}) \\ast  \\mathrm{id}$. Distinct root productions give distinct parse trees for the same word.

### 4. Stack invariant

Prove the one-type parenthesis PDA rejects every prefix with more closes than opens.

**Solution.** By induction, stack height above bottom equals opens minus closes for every prefix processed without underflow. If a prefix has more closes, the first point where the difference would become negative requires popping the bottom marker, for which no valid transition exists. Thus no accepting run processes that prefix.

### 5. Counts versus nesting

Why is $([)]$ not in the two-type Dyck language despite balanced counts?

**Solution.** After \`(\` then $[$, the stack top records $[$. The next symbol \`)\` must match \`(\`, which lies below $[$, so the required top match fails. Last-in-first-out nesting is violated.

### 6. Grammar-to-PDA soundness

Why can an accepting run of the standard constructed PDA not invent a terminal word outside the grammar language?

**Solution.** Every stack replacement of a variable is licensed by an actual production. Terminal moves only compare and consume the exposed terminal. Reading the chosen replacements in order therefore gives a grammar derivation whose terminal yield is exactly the consumed input.

### 7. The summary variable

Interpret $[p A q]$ in the PDA-to-CFG construction.

**Solution.** It generates exactly labels of computations beginning in control state $p$ with $A$ on top and ending in $q$ after removing that $A$ and all stack material introduced above it, while leaving the lower stack unchanged. This interface makes nested subcomputations compositional.

### 8. Regular intersection

Explain why producting a PDA with a DFA does not require two stacks.

**Solution.** The DFA has finite memory, so its current state can be paired with the PDA's finite control state. Each input-consuming PDA move updates the DFA component; epsilon PDA moves leave it fixed. The original single stack remains sufficient.

### 9. A nonclosure consequence

Show that closure under complement plus closure under union would imply closure under intersection.

**Solution.** De Morgan gives $L \\cap K = complement(complement(L) \\cup complement(K))$. If CFLs were closed under complement and union, the right side would always be context-free, contradicting the known failure of intersection closure.

### 10. Pumping window

For $a^p b^p c^p$, why can a substring of length at most $p$ not contain all three symbol types?

**Solution.** To touch both an $a$ and a $c$, the substring must cross the entire intervening block of $p$ $b$ symbols and include at least one symbol on each side, giving length at least $p+2$. Therefore a length-$p$ window touches at most two blocks.

### 11. Empty-language decision

Describe a finite test for CFG emptiness.

**Solution.** Mark variables that can derive terminal words. Initially mark any variable with a terminal-only right side, including epsilon. Repeatedly mark $A$ if some production $A \\to  \\alpha$ has every variable in $\\alpha$ already marked. The process stabilizes because $V$ is finite. The language is nonempty exactly when $S$ is marked.

### 12. Parser boundary

Why does an LL parser conflict not prove that the language is not context-free?

**Solution.** It proves that the presented grammar, under the chosen lookahead and parsing method, does not meet that deterministic subclass's conditions. Another CFG or a more general parsing algorithm may recognize the same context-free language.

[Book overview](#/item/book-formal-computation-proof-reference)
`;export{e as default};