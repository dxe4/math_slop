var e=`---
parent_id: book-automata-computability-complexity
chapter_id: context-free-languages-and-pushdown-machines
title: "Context-Free Languages and Pushdown Machines"
level: advanced-undergraduate
estimated_minutes: 220
license: CC BY-SA 4.0
---

# Context-Free Languages and Pushdown Machines

Finite automata compress every prefix into one of finitely many residuals. Nested syntax and unbounded matching demand a different memory discipline: a stack. Context-free grammars describe recursive generation; pushdown automata describe stack-controlled recognition. This chapter proves their expressive equivalence, develops exact derivation and run semantics, and marks closure and decidability boundaries without treating a parser as a proof by itself.

## Preparation and outcomes

Use finite words, induction, nondeterministic acceptance and graph reachability from the preceding chapters. A stack is an unbounded finite string at each configuration, not a second input tape. You will prove grammar–PDA equivalence through explicit finite productions, distinguish a parse from an expansion order, and apply the context-free pumping quantifiers correctly. The normal-form chapter follows this one, so the complete pumping proof below is given directly for arbitrary CFGs rather than depending on a later conversion.

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


## Exact productions for the reverse simulation

Fix stack orientation with the top at the left. A transition $(p,a,A)\\mapsto(r,B_1\\cdots B_k)$ consumes $a\\in\\Sigma\\cup\\{\\varepsilon\\}$ and replaces the top symbol $A$ by that finite string. No transition is enabled on an empty stack. A summary computation for $[pAq]$ begins at $(p,w,A\\gamma)$ and ends at $(q,\\varepsilon,\\gamma)$ while never inspecting or changing the suffix $\\gamma$; the final step is its first exposure of that suffix. This is the precise untouched-lower-stack condition.

**Theorem 6.1 (PDA summaries generate exactly their labels).** For each such transition and every choice of intermediate states $s_1,\\ldots,s_{k-1}$, add, when $k>0$,

$$[pAq]\\to a[s_0B_1s_1]\\cdots[s_{k-1}B_ks_k],\\qquad s_0=r,\\ s_k=q.$$

For $k=1$ the right side is $a[rB_1q]$. For a pop, $k=0$, add only $[pAr]\\to a$. An epsilon label is omitted as a terminal symbol. These finite productions generate precisely the summary computations.

*Proof.* For grammar-to-run soundness, induct on a finite derivation tree. A pop production is the corresponding transition itself. In another production, first perform its leading transition. The induction hypotheses give runs removing $B_1,\\ldots,B_k$ in that order through the named intermediate states. Their lower suffixes remain untouched, so the runs concatenate into a valid summary removing the original top occurrence and all its replacement material.

Conversely, take a finite summary computation and inspect its first transition. A pop ends the summary immediately, with control state $r$, giving its pop production. Otherwise the replacement symbols occur in fixed stack order. Since the lower suffix is first exposed at the end, each $B_i$ and anything pushed above it must be removed before $B_{i+1}$ can be touched. Split the run at the first exposures of those successive suffixes. This gives intermediate states and shorter summary computations, each eligible for induction on run length. Their grammar derivations combine with the production displayed above. All input labels concatenate in the same order, proving completeness. ∎

There are finitely many variables and productions because the state set, stack alphabet and transition list are finite, and each transition pushes a fixed finite number of symbols. This formula also handles long pushes directly; height-normalising the machine is an alternative, not a missing infinite construction.

To recognize a final-state PDA's language, use the fresh-marker initialisation and drain construction of Section 5. Give its last marker-pop a designated completion state $q_e$. The grammar's start rule is $S_G\\to[sZq_e]$, where $s$ and $Z$ are the new initial state and marker. The summary theorem identifies its words exactly with empty-stack accepting runs. Consuming all input is retained throughout; draining early with unread input cannot accept. Combined with the grammar-to-PDA simulation, this proves the full expressive equivalence.

## The remaining homomorphism closure constructions

For a homomorphic image, rename grammar variables away from the target alphabet and replace every terminal letter in every production by its finite image word, possibly empty. Induction on a production tree shows its new yield is the image of its old yield. Conversely each new production has an originating old production; choosing those origins throughout a finite new parse reconstructs an old parse whose image is that yield. Thus the image language is context-free, including erasing homomorphisms.

For inverse image, take a final-state PDA for the target language with a permanent extra bottom marker. Add a finite control buffer whose possible values are suffixes of the finitely many words $h(a)$. When empty, it may consume a source letter and load its image without changing the simulated stack. It then simulates a target input move by consuming the buffer's next symbol through a real epsilon move; target epsilon moves remain available and do not consume the buffer. It loads another source letter only when the buffer is empty. Accept only when the real input and buffer are exhausted and the target control is accepting. The permanent marker permits buffer loading even when the old stack portion is empty, while old transitions remain disabled on that empty portion as before. Reading a source word therefore simulates exactly runs on its image, in both directions. The buffer is finite, so this is another PDA, proving inverse-image closure by the established PDA–CFG theorem.

## A full pumping proof without normal form

**Theorem 6.2 (Context-free pumping lemma).** For every CFL $L$, an integer $p\\ge1$ exists such that every $w\\in L$ with $|w|\\ge p$ has $w=uvxyz$, $|vxy|\\le p$, $|vy|>0$, and $uv^ixy^iz\\in L$ for every integer $i\\ge0$.

*Proof.* Fix a CFG with $k\\ge1$ variables. Let $b$ be at least two and at least the length of every production right side. Put $p=b^{k+1}$. For an eligible word choose a complete parse tree with the smallest total node count among all its parses. Such a minimum exists because the set of node counts is a nonempty set of natural numbers.

A parse tree whose longest chain of variable nodes has length at most $h$ has at most $b^h$ terminal leaves: it has branching at most $b$ and at most $h$ edges to a terminal leaf. Thus a yield of length at least $p>b^k$ requires a variable chain of length at least $k+1$. Choose a longest such chain and inspect its last $k+1$ variable nodes. Two have the same variable label $A$. The subtree at the upper occurrence has variable height at most $k+1$: otherwise a longer downward branch would contradict the choice of the longest chain. Its terminal yield therefore has length at most $p$.

Let the lower $A$ yield $x$, and let the rest of the upper subtree yield $v$ to its left and $y$ to its right. Write the whole word as $uvxyz$, where $u,z$ lie outside the upper subtree. The tree witnesses $S\\Rightarrow^*uAz$, $A\\Rightarrow^*vAy$ and $A\\Rightarrow^*x$. If both $v,y$ were empty, replacing the upper subtree by the lower subtree, whose root has the same label, would preserve the word and strictly reduce its node count. This contradicts minimality. Hence $|vy|>0$, while the upper-yield bound gives $|vxy|\\le p$.

Repeat the finite derivation $A\\Rightarrow^*vAy$ any number $i$ of times and then use $A\\Rightarrow^*x$. This yields $v^ixy^i$, with $i=0$ obtained by using the lower derivation directly. In the outside context it gives $uv^ixy^iz\\in L$ for every $i\\ge0$. This proves all bounds and the quantified claim, even if the original grammar had unit or epsilon productions. ∎

The minimum-tree argument is what excludes an unproductive repeated-variable loop. Merely finding a repeated label in a grammar with epsilon rules would not by itself show that either pumped region is nonempty.

For $\\{a^n b^n c^n:n\\ge0\\}$, assume context-freeness and choose $a^pb^pc^p$. Any length-at-most-$p$ substring cannot contain both an $a$ and a $c$, because it would include all $p$ intervening $b$ symbols and two extra symbols. Thus the pumping window touches at most two blocks. Deleting $v,y$ reduces at least one symbol count and leaves an untouched third count equal to $p$. The three counts become unequal. This handles every legal decomposition with exponent zero, proving the language is not context-free.

## Worked example 1: a nested word and its stack heights

For $S\\to(S)S\\mid\\varepsilon$, a leftmost derivation is

$$S\\Rightarrow(S)S\\Rightarrow((S)S)S\\Rightarrow(()S)S\\Rightarrow(())S\\Rightarrow(())(S)S\\Rightarrow(())()S\\Rightarrow(())().$$

For the corresponding one-type delimiter PDA, the heights above bottom along $(())()$ are $0,1,2,1,0,1,0$. Every prefix is nonnegative and the final height is zero, so it accepts. The matching first close of the initial opener separates an inside balanced word from a following balanced word. Induction on that decomposition proves grammar completeness; induction on productions proves every generated word has the required prefix and final balances. Equal total counts alone would not justify those prefix conditions.

## Worked example 2: a phase boundary is needed

A PDA for $a^nb^n$ starts in a push phase, putting one $A$ on the stack for each $a$. It may switch by epsilon to a pop phase, where each $b$ removes one $A$ and no $a$ transition exists. It accepts only after consuming all input and returning to bottom. The empty word uses an immediate phase switch with no pushes.

On $aabb$, two pushes give $AAZ$; after the switch the two $b$ symbols leave $AZ$ and then $Z$. Acceptance follows. On $abab$, after consuming the first $b$ in the pop phase the next $a$ has no valid move, so no run accepts. Delaying the switch cannot help because the push phase has no input-consuming $b$ move. Thus the phase condition enforces block order as well as equal counts.

## Worked example 3: one summary production in action

Suppose a PDA has exactly the relevant moves $(p,a,A)\\mapsto(r,BC)$, $(r,b,B)\\mapsto(s,\\varepsilon)$ and $(s,c,C)\\mapsto(q,\\varepsilon)$. Starting with stack $A\\gamma$, it reads $a$ to reach $BC\\gamma$, reads $b$ to reach $C\\gamma$, and reads $c$ to expose $\\gamma$ in state $q$. The suffix has never been inspected.

The grammar records this as $[pAq]\\to a[rBs][sCq]$, with $[rBs]\\to b$ and $[sCq]\\to c$. Hence $[pAq]\\Rightarrow^*abc$. Conversely any derivation using these three rules reconstructs those exact stack steps. The intermediate state $s$ is not a decorative index: it makes the two nested summaries join into one valid control-state history.


## Companion constructions: Grammars, Stacks, Parsing, and Syntax Trees

Finite automata recognize patterns with bounded memory. Nested structure needs memory that can grow with input. Context-free grammars describe recursive syntax; pushdown automata operationalize one stack; parsers turn strings into trees whose structure can be interpreted or verified.

## 1. Context-free grammars

A CFG has terminals $\\Sigma$, nonterminals $V$, start symbol $S$, and productions $A\\to \\alpha$ where $A$ is one nonterminal and $\\alpha$ is a string of terminals and nonterminals. A derivation repeatedly replaces a nonterminal using a production.

Balanced parentheses are generated by

$S\\to \\varepsilon \\mid (S)S$.

Every derivation produces balanced structure: the first recursive component lies inside a matched pair and the second follows it. Conversely, every nonempty balanced word splits at the matching close of its first open parenthesis, supporting induction on length.

## 2. Parse trees carry more than membership

A parse tree records which productions generated the string. Its leaves spell the input; internal nodes name syntactic categories. Two trees for one string reveal ambiguity.

Grammar $E\\to E+E \\lvert E*E \\rvert n$ parses $n+n*n$ as either addition at the root or multiplication at the root. If multiplication should bind tighter, use layers:

$E\\to E+T \\mid T$,

$T\\to T*F \\mid F$,

$F\\to n \\mid (E)$.

Associativity and precedence are mathematical choices encoded by grammar structure, not post-hoc typography.

## 3. Pushdown automata

A pushdown automaton combines finite control with a stack. Transitions may inspect input, top stack symbol, and state, then change state and replace the stack top.

For balanced parentheses, push on $($ and pop on $)$. Reject an attempted pop from empty, and accept at end only with empty stack. The invariant is that stack height equals unmatched opens in the prefix. It proves both soundness and completeness for the language.

One stack handles nested last-in-first-out obligations. Languages requiring two independent unbounded counters, such as $\\{a^n b^n c^n\\}$, exceed context-free power.

## 4. Top-down parsing and left recursion

A recursive-descent parser creates one function per nonterminal. It is transparent when the next token determines the production. Direct left recursion such as $E\\to E+T \\mid T$ calls \`parseE\` before consuming input and does not terminate naively.

Rewrite it as

$E\\to T E'$,

$E'\\to+T E' \\mid \\varepsilon$.

The new grammar expresses repetition after an initial term. A parser should return both syntax tree and remaining input, or a structured error location. Merely returning true loses the artifact needed by later phases.

## 5. FIRST and FOLLOW reasoning

$FIRST(\\alpha)$ contains terminals that can begin strings derived from $\\alpha$, plus epsilon if $\\alpha$ can vanish. $FOLLOW(A)$ contains terminals that can immediately follow nonterminal $A$ in a sentential form, plus end marker when appropriate.

An LL(1) table chooses a production from one lookahead token. Competing productions for $A$ must have disjoint FIRST sets; if one derives epsilon, its selection via FOLLOW must not conflict. These are sufficient table-construction conditions for the method, not a definition of all deterministic context-free languages.

## 6. Bottom-up parsing and viable prefixes

A shift-reduce parser alternates shifting input symbols onto a stack and reducing a recognized production right side to its left nonterminal. LR methods encode viable prefixes in finite parser states while the stack carries unbounded nesting.

A shift/reduce conflict means the current grammar and lookahead information do not uniquely prescribe the chosen parser action. It may signal ambiguity, insufficient lookahead, or a grammar outside that parser subclass. A precedence declaration resolves a policy; it should not hide that a different tree was possible under the raw grammar.

## 7. Dynamic programming for general CFG membership

For a grammar in a suitable binary normal form, CYK-style parsing fills table $T[i,j]$ with nonterminals deriving substring positions $i..j$. For length one, insert variables producing that terminal. For longer spans, try split $k$ and production $A\\to BC$; add $A$ when $B\\in T[i,k]$ and $C\\in T[k+1,j]$.

The invariant is exact derivability for each completed span length. With fixed grammar, the straightforward algorithm is cubic in input length. Recording backpointers reconstructs parse trees; storing only membership does not.

## 8. Syntax-directed semantics

Once parsing produces an abstract syntax tree, an evaluator can be defined structurally. For arithmetic expressions:

$eval(Number n)=n$,

\`eval(Add l r)=eval(l)+eval(r)\`.

Variables require an environment. Division, overflow, and effects require a more explicit result or state relation. A type checker can reject operations on incompatible syntax before evaluation.

Concrete syntax includes punctuation and precedence. Abstract syntax retains semantic structure. Conflating raw text with meaning makes transformations such as renaming or optimization unsafe.

## 9. Parsing is not validation of intent

A JSON parser may prove that input has valid syntax but not that a field names an existing topic, a number lies in range, or records obey cross-field invariants. Those are semantic validation obligations.

Security-sensitive parsers also need resource limits. A grammar can accept a deeply nested input that exhausts recursion or a highly ambiguous input that creates too many parse trees. Correct language recognition does not imply robust resource behavior.

## Worked audit: postfix evaluation

For tokens that are numbers or binary operators, keep a value stack. On a number, push it. On an operator, require at least two values, pop right then left, compute $left op right$, and push the result.

Invariant after a valid prefix: the stack contains values of exactly those completed subexpressions not yet consumed by a later operator, in order. A complete well-formed expression ends with one value. Empty pop detects an operator with too few operands; more than one final value detects extra operands.

## Worked chart: $aabb$

For grammar $S \\to a S b \\mid \\varepsilon$, derive $aabb$ by $S \\Rightarrow aSb \\Rightarrow aaSbb \\Rightarrow aabb$. The parse tree records two nested uses of the recursive production. A recognizer must also reject $abab$: equal counts alone are insufficient because every derivable word places all $a$ symbols before all $b$ symbols. This contrast shows why a grammar specifies structure, not a bag of token counts.

## Ambiguity and precedence repair

The grammar $E \\to E+E \\lvert E*E \\rvert id$ gives $id+id*id$ two trees. A layered grammar repairs the intended precedence: $E \\to E+T \\mid T$, $T \\to T*F \\mid F$, $F \\to id \\mid (E)$. These left-recursive rules already select left associativity for repeated \`+\` and \`*\`. A transformation for naive recursive descent must preserve that abstract-syntax convention, usually by accumulating a left fold. Grammar-language equivalence and preservation of the intended tree interpretation both need proof.

## Error reporting as a contract

A parser may reject at the first impossible token, report the farthest chart position, or recover and continue. Recovery inserts or deletes hypothetical tokens and therefore creates a tree not literally derived from the input. Diagnostics must distinguish the original token stream, recovery edits, and resulting tree; otherwise later semantic analysis may appear to validate malformed source.

## Common errors

- Saying a grammar is ambiguous because one derivation is long; ambiguity requires two distinct parse trees for one word.
- Treating leftmost versus rightmost derivations of the same tree as ambiguity.
- Running naive recursive descent on left recursion.
- Reporting parser acceptance while discarding the intended syntax tree.
- Assuming every context-free grammar has an LL(1) parser.
- Treating syntactic validity as semantic safety.


## Exercises with complete solutions

### Exercise 1 — A grammar for equal blocks
<a id="context-free-languages-and-pushdown-machines-ex-1"></a>

Give a CFG for $\\{a^n b^n:n\\ge 0\\}$ and prove it correct.

<details>
<summary>Hint 1</summary>

Each recursive rule adds matched outside letters.

</details>
<details>
<summary>Hint 2</summary>

Prove soundness on derivations and completeness on the chosen block length.

</details>
<details>
<summary>Solution</summary>

**Solution.** Use $S \\to  aSb | \\varepsilon$. Each recursive step adds one $a$ at the left and one $b$ at the right, so every derived word has equal blocks. Conversely, $n$ recursive steps followed by epsilon derives $a^n b^n$; induction on $n$ proves completeness.

</details>

### Exercise 2 — Leftmost derivation
<a id="context-free-languages-and-pushdown-machines-ex-2"></a>

With $S \\to  AB$, $A \\to  aA | \\varepsilon$, $B \\to  bB | \\varepsilon$, give a leftmost derivation of $aab$.

<details>
<summary>Hint 1</summary>

Always expand the first remaining variable.

</details>
<details>
<summary>Hint 2</summary>

Finish both A occurrences before beginning the B expansion.

</details>
<details>
<summary>Solution</summary>

**Solution.** $S \\Rightarrow  AB \\Rightarrow  aAB \\Rightarrow  aaAB \\Rightarrow  aaB \\Rightarrow  aabB \\Rightarrow  aab$. At every step the leftmost remaining variable is expanded.

</details>

### Exercise 3 — Ambiguous expression
<a id="context-free-languages-and-pushdown-machines-ex-3"></a>

Give two parse structures for $\\mathrm{id}+\\mathrm{id}\\ast \\mathrm{id}$ under $E \\to  E+E | E\\ast E | \\mathrm{id}$.

<details>
<summary>Hint 1</summary>

Choose different root operators for the same token sequence.

</details>
<details>
<summary>Hint 2</summary>

Keep terminal yield fixed while changing the grouped subtrees.

</details>
<details>
<summary>Solution</summary>

**Solution.** One root uses $E \\to  E+E$, yielding $\\mathrm{id} + (\\mathrm{id}\\ast \\mathrm{id})$. The other root uses $E \\to  E\\ast E$, yielding $(\\mathrm{id}+\\mathrm{id}) \\ast  \\mathrm{id}$. Distinct root productions give distinct parse trees for the same word.

</details>

### Exercise 4 — Stack invariant
<a id="context-free-languages-and-pushdown-machines-ex-4"></a>

Prove the one-type parenthesis PDA rejects every prefix with more closes than opens.

<details>
<summary>Hint 1</summary>

Track opens minus closes before any underflow.

</details>
<details>
<summary>Hint 2</summary>

The first negative balance would require popping the bottom marker.

</details>
<details>
<summary>Solution</summary>

**Solution.** By induction, stack height above bottom equals opens minus closes for every prefix processed without underflow. If a prefix has more closes, the first point where the difference would become negative requires popping the bottom marker, for which no valid transition exists. Thus no accepting run processes that prefix.

</details>

### Exercise 5 — Counts versus nesting
<a id="context-free-languages-and-pushdown-machines-ex-5"></a>

Why is $([)]$ not in the two-type Dyck language despite balanced counts?

<details>
<summary>Hint 1</summary>

The top opener must match the next closer.

</details>
<details>
<summary>Hint 2</summary>

Compare the order of the two unmatched opener types.

</details>
<details>
<summary>Solution</summary>

**Solution.** After \`(\` then $[$, the stack top records $[$. The next symbol \`)\` must match \`(\`, which lies below $[$, so the required top match fails. Last-in-first-out nesting is violated.

</details>

### Exercise 6 — Grammar-to-PDA soundness
<a id="context-free-languages-and-pushdown-machines-ex-6"></a>

Why can an accepting run of the standard constructed PDA not invent a terminal word outside the grammar language?

<details>
<summary>Hint 1</summary>

Record each variable replacement as an actual grammar production.

</details>
<details>
<summary>Hint 2</summary>

Consumed terminals must match the exposed stack frontier exactly.

</details>
<details>
<summary>Solution</summary>

**Solution.** Every stack replacement of a variable is licensed by an actual production. Terminal moves only compare and consume the exposed terminal. Reading the chosen replacements in order therefore gives a grammar derivation whose terminal yield is exactly the consumed input.

</details>

### Exercise 7 — The summary variable
<a id="context-free-languages-and-pushdown-machines-ex-7"></a>

Interpret $[p A q]$ in the PDA-to-CFG construction.

<details>
<summary>Hint 1</summary>

Fix an arbitrary suffix of stack that must remain untouched.

</details>
<details>
<summary>Hint 2</summary>

The summary ends at its first exposure after removing A and all replacement material.

</details>
<details>
<summary>Solution</summary>

**Solution.** It generates exactly labels of computations beginning in control state $p$ with $A$ on top and ending in $q$ after removing that $A$ and all stack material introduced above it, while leaving the lower stack unchanged. This interface makes nested subcomputations compositional.

</details>

### Exercise 8 — Regular intersection
<a id="context-free-languages-and-pushdown-machines-ex-8"></a>

Explain why producting a PDA with a DFA does not require two stacks.

<details>
<summary>Hint 1</summary>

The second machine has only finitely many control states.

</details>
<details>
<summary>Hint 2</summary>

Update its component only when an input symbol is consumed.

</details>
<details>
<summary>Solution</summary>

**Solution.** The DFA has finite memory, so its current state can be paired with the PDA's finite control state. Each input-consuming PDA move updates the DFA component; epsilon PDA moves leave it fixed. The original single stack remains sufficient.

</details>

### Exercise 9 — A nonclosure consequence
<a id="context-free-languages-and-pushdown-machines-ex-9"></a>

Show that closure under complement plus closure under union would imply closure under intersection.

<details>
<summary>Hint 1</summary>

Apply De Morgan to a proposed intersection.

</details>
<details>
<summary>Hint 2</summary>

Use the proved union closure and the nonclosure witness.

</details>
<details>
<summary>Solution</summary>

**Solution.** De Morgan gives $L \\cap K = complement(complement(L) \\cup complement(K))$. If CFLs were closed under complement and union, the right side would always be context-free, contradicting the known failure of intersection closure.

</details>

### Exercise 10 — Pumping window
<a id="context-free-languages-and-pushdown-machines-ex-10"></a>

For $a^p b^p c^p$, why can a substring of length at most $p$ not contain all three symbol types?

<details>
<summary>Hint 1</summary>

A window touching a and c includes the entire b block.

</details>
<details>
<summary>Hint 2</summary>

Count the extra endpoint symbols in addition to those p b symbols.

</details>
<details>
<summary>Solution</summary>

**Solution.** To touch both an $a$ and a $c$, the substring must cross the entire intervening block of $p$ $b$ symbols and include at least one symbol on each side, giving length at least $p+2$. Therefore a length-$p$ window touches at most two blocks.

</details>

### Exercise 11 — Empty-language decision
<a id="context-free-languages-and-pushdown-machines-ex-11"></a>

Describe a finite test for CFG emptiness.

<details>
<summary>Hint 1</summary>

Mark variables with a finite terminal derivation.

</details>
<details>
<summary>Hint 2</summary>

Iterate production dependencies to the least fixed point.

</details>
<details>
<summary>Solution</summary>

**Solution.** Mark variables that can derive terminal words. Initially mark any variable with a terminal-only right side, including epsilon. Repeatedly mark $A$ if some production $A \\to  \\alpha$ has every variable in $\\alpha$ already marked. The process stabilizes because $V$ is finite. The language is nonempty exactly when $S$ is marked.

</details>

### Exercise 12 — Parser boundary
<a id="context-free-languages-and-pushdown-machines-ex-12"></a>

Why does an LL parser conflict not prove that the language is not context-free?

<details>
<summary>Hint 1</summary>

An LL restriction concerns a presented grammar and lookahead method.

</details>
<details>
<summary>Hint 2</summary>

Context-freeness permits other grammars and more general parsers.

</details>
<details>
<summary>Solution</summary>

**Solution.** It proves that the presented grammar, under the chosen lookahead and parsing method, does not meet that deterministic subclass's conditions. Another CFG or a more general parsing algorithm may recognize the same context-free language.

</details>

### Exercise 13
<a id="context-free-languages-and-pushdown-machines-ex-13"></a>

Give a grammar for $\\{a^nb^n:n\\ge0\\}$ and explain both directions of its language claim.

<details>
<summary>Hint 1</summary>

An outside pair can enclose a smaller valid block word.

</details>
<details>
<summary>Hint 2</summary>

Use epsilon as the base and n recursive choices for completeness.

</details>
<details>
<summary>Solution</summary>

1. **Give a grammar for $a^n b^n$.** $S\\to \\varepsilon \\mid aSb$; every recursive step adds one matched outer pair, and induction proves exactly the desired words.

The recursive production adds exactly one letter at each opposite end, so induction on its use proves soundness. Conversely n uses followed by epsilon generate the prescribed word, including n=0.

</details>

### Exercise 14
<a id="context-free-languages-and-pushdown-machines-ex-14"></a>

Why can one stack recognize properly balanced nesting of a fixed finite collection of delimiter types?

<details>
<summary>Hint 1</summary>

Keep the unmatched opener sequence, not only its size.

</details>
<details>
<summary>Hint 2</summary>

The next close must match the most recent unmatched opener.

</details>
<details>
<summary>Solution</summary>

2. **Why can a stack recognize balanced nesting?** Its top remembers the most recent unmatched opener, enforcing last-in-first-out closure.

On each opener push its type; on each closer pop only a matching top. Induction gives exactly the unmatched opener sequence for every successfully processed prefix. Rejecting a mismatch or underflow and requiring bottom at the end therefore proves both directions of proper nesting.

</details>

### Exercise 15
<a id="context-free-languages-and-pushdown-machines-ex-15"></a>

Which information is needed to reconstruct a parse from a successful CYK chart?

<details>
<summary>Hint 1</summary>

Membership sets alone do not identify how a span was obtained.

</details>
<details>
<summary>Hint 2</summary>

Record the rule and split that justify each chosen entry.

</details>
<details>
<summary>Solution</summary>

3. **What data reconstructs a CYK parse?** Backpointers recording the production, split position, and child nonterminals for each successful cell.

A terminal entry records its production. A binary entry records its production, split and two child variables. Recursive recovery decreases span length, and each recorded witness gives a valid production tree with the exact substring yield. Multiple witnesses can instead be retained as a shared parse forest.

</details>

### Exercise 16
<a id="context-free-languages-and-pushdown-machines-ex-16"></a>

Why do postfix expressions with number tokens and binary operators determine a tree without precedence rules, and how are malformed inputs detected?

<details>
<summary>Hint 1</summary>

Each operator consumes the most recently completed two expressions.

</details>
<details>
<summary>Hint 2</summary>

Check underflow and the number of final stack items.

</details>
<details>
<summary>Solution</summary>

4. **Why does postfix avoid precedence ambiguity?** Each operator follows its operands, so stack evaluation fixes the tree without precedence rules.

The ordered stack records completed subtrees. A number pushes one; a binary operator uniquely selects the last two, in left-right order, and replaces them by their operator tree. Thus a valid final singleton has a uniquely determined tree. Underflow or a nonsingleton final stack rejects malformed input; unary operators would require a separately specified arity.

</details>

### Exercise 17
<a id="context-free-languages-and-pushdown-machines-ex-17"></a>

Derive $aabb$ using $S\\to aSb\\mid\\varepsilon$.

<details>
<summary>Hint 1</summary>

Expose two matching outer pairs.

</details>
<details>
<summary>Hint 2</summary>

Use the epsilon production only after the required pair count.

</details>
<details>
<summary>Solution</summary>

5. **Derive $aabb$ in the chapter grammar.** $S\\Rightarrow aSb\\Rightarrow aaSbb\\Rightarrow aabb$ using epsilon last.

There are two a symbols and two b symbols, so two recursive productions followed by epsilon give the required terminal word. The nested parse records exactly those two pairs and no additional terminal symbols.

</details>

### Exercise 18
<a id="context-free-languages-and-pushdown-machines-ex-18"></a>

Why is $abab$ not generated by $S\\to aSb\\mid\\varepsilon$ despite equal letter counts?

<details>
<summary>Hint 1</summary>

Prove a stronger block-form invariant on derivations.

</details>
<details>
<summary>Hint 2</summary>

Every recursive step places its new a before every existing letter.

</details>
<details>
<summary>Solution</summary>

6. **Why is $abab$ rejected?** The production nests an $a$ before and a $b$ after the recursive word, so every derived word has one contiguous $a$ block then one $b$ block.

Induction shows each terminal yield is a block of a symbols followed by a block of equally many b symbols. The word abab has an a after a b, so it violates that necessary form. Count equality alone omits the grammar’s order constraint.

</details>

### Exercise 19
<a id="context-free-languages-and-pushdown-machines-ex-19"></a>

What precisely makes a CFG ambiguous, and why are different expansion orders alone insufficient?

<details>
<summary>Hint 1</summary>

Compare trees or leftmost derivations of the same word.

</details>
<details>
<summary>Hint 2</summary>

Expanding independent nodes in another order can leave the tree unchanged.

</details>
<details>
<summary>Solution</summary>

7. **What makes a grammar ambiguous?** At least one terminal word has two distinct parse trees, equivalently two distinct leftmost derivations.

Ambiguity requires at least two different production trees with identical terminal yield. A fixed tree determines one leftmost derivation, so two distinct leftmost derivations certify it. Two arbitrary derivations that merely permute independent expansions do not.

</details>

### Exercise 20
<a id="context-free-languages-and-pushdown-machines-ex-20"></a>

Show ambiguity of $E\\to E+E\\mid id$ by supplying two structures for $id+id+id$.

<details>
<summary>Hint 1</summary>

Choose different root splits.

</details>
<details>
<summary>Hint 2</summary>

One structure groups the first addition and the other the last.

</details>
<details>
<summary>Solution</summary>

8. **Show ambiguity of $E\\to E+E\\mid id$.** $id+id+id$ groups as $(id+id)+id$ or $id+(id+id)$, giving distinct trees.

Both bracketings use the same three terminal id leaves and two plus operators. Their root subtrees have different numbers of leaves, so the trees are distinct and cannot be only a change in expansion order. The grammar therefore has an ambiguous word.

</details>

### Exercise 21
<a id="context-free-languages-and-pushdown-machines-ex-21"></a>

Why can naive recursive descent diverge on $E\\to E+T\\mid T$?

<details>
<summary>Hint 1</summary>

Follow its first production choice before any token is consumed.

</details>
<details>
<summary>Hint 2</summary>

The new call receives the same unread input.

</details>
<details>
<summary>Solution</summary>

9. **Why does left recursion break naive recursive descent?** Expanding $E$ immediately calls the same procedure without consuming input, causing nontermination.

Choosing the left-recursive alternative calls parseE again with no smaller input or structural argument. Repeating that choice creates an infinite call chain. This is a failure of that parser strategy, not a proof that the grammar’s language is undecidable or non-context-free.

</details>

### Exercise 22
<a id="context-free-languages-and-pushdown-machines-ex-22"></a>

What terminals and nullable information do FIRST sets record for a grammar symbol or sequence?

<details>
<summary>Hint 1</summary>

Inspect the beginnings of all derivable terminal strings.

</details>
<details>
<summary>Hint 2</summary>

Include epsilon when the whole sequence can vanish.

</details>
<details>
<summary>Solution</summary>

10. **What do FIRST sets approximate?** Terminals that can begin strings derived from a symbol or sequence, including nullable effects.

The intended FIRST set is exactly the possible initial terminals together with epsilon for nullability. Computing it uses production dependencies until a finite fixed point. A particular analysis can overapproximate, but the mathematical definition is not merely a sample of observed prefixes.

</details>

### Exercise 23
<a id="context-free-languages-and-pushdown-machines-ex-23"></a>

What does FOLLOW information mean, and how does it help choose a nullable production?

<details>
<summary>Hint 1</summary>

Look to the right of a nonterminal occurrence in a derivable sentential form.

</details>
<details>
<summary>Hint 2</summary>

The end marker is relevant when no later input symbol remains.

</details>
<details>
<summary>Solution</summary>

11. **What is FOLLOW used for?** It identifies tokens that may legally follow a nonterminal, guiding nullable-production choices and recovery.

FOLLOW identifies possible immediately following terminals, with the declared end marker where appropriate. When a production vanishes, those tokens can select the empty alternative in a predictive table, provided the required disjointness conditions hold. Conflicts concern that method and grammar, not all possible recognisers.

</details>

### Exercise 24
<a id="context-free-languages-and-pushdown-machines-ex-24"></a>

Why is a nondeterministic PDA strictly more expressive than a DFA?

<details>
<summary>Hint 1</summary>

One stack can remember an arbitrary matching count.

</details>
<details>
<summary>Hint 2</summary>

Use a context-free example already proved nonregular.

</details>
<details>
<summary>Solution</summary>

12. **Why is a PDA more powerful than a DFA?** Its unbounded stack can remember arbitrary nesting depth, though only in last-in-first-out form.

Every DFA can be simulated by a PDA that keeps its bottom marker unchanged and uses only the finite control. The grammar and PDA for a^n b^n recognize that language. Its nonregularity was proved in Chapter 1 by pumping every legal split. Hence it belongs to PDA power but not DFA power, establishing strictness rather than merely the fact that one model has a larger-looking memory device.

</details>

### Exercise 25
<a id="context-free-languages-and-pushdown-machines-ex-25"></a>

What grammar and empty-word assumptions must be fixed before applying the binary CYK recurrence?

<details>
<summary>Hint 1</summary>

The nonempty recurrence splits into two nonempty subspans.

</details>
<details>
<summary>Hint 2</summary>

A retained empty word belongs to a separate start rule.

</details>
<details>
<summary>Solution</summary>

13. **What does CYK require first?** A grammar in the required binary normal form or a proved equivalent conversion, plus an explicit empty-word policy.

Use the specified CNF form, with binary variable productions and terminal productions, no other epsilon or unit rules, and a fresh start absent from right sides. Decide epsilon separately by its start rule. A language-preserving conversion is proved in Chapter 7; applying the binary table to an arbitrary unconverted grammar would omit valid derivations.

</details>

### Exercise 26
<a id="context-free-languages-and-pushdown-machines-ex-26"></a>

Why retain source-token spans in parse or syntax-tree records?

<details>
<summary>Hint 1</summary>

A later phase needs to connect an error to the original input.

</details>
<details>
<summary>Hint 2</summary>

Recovery-created syntax may not come from one literal source interval.

</details>
<details>
<summary>Solution</summary>

14. **Why retain source spans in syntax trees?** Semantic errors and recovery reports can point back to the exact token region that produced a node.

Spans let diagnostics identify the token region supporting a node and let a tree checker compare its yield with the intended input region. Recovery insertions or deletions need their own provenance, so a synthetic node is not presented as if it were literally derived from unchanged source tokens.

</details>

### Exercise 27
<a id="context-free-languages-and-pushdown-machines-ex-27"></a>

Does successful parsing prove that a program meets its intended behavior? Explain the remaining obligations.

<details>
<summary>Hint 1</summary>

Parsing establishes only a grammar-derived structure.

</details>
<details>
<summary>Hint 2</summary>

Separate names, types, effects and functional requirements.

</details>
<details>
<summary>Solution</summary>

15. **Does successful parsing prove program intent?** No. Parsing proves grammatical structure; name resolution, typing, contracts, and domain requirements remain.

A well-formed syntax tree can still refer to an unbound variable, divide by zero, violate a type rule or implement the wrong specification. Each semantic phase needs its own judgement and proof or explicit rejection. Syntax recognition is a necessary interface condition for those phases, not their conclusion.

</details>

### Exercise 28
<a id="context-free-languages-and-pushdown-machines-ex-28"></a>

What should an error-recovery parser report about its edits and resulting tree?

<details>
<summary>Hint 1</summary>

The recovered stream can differ from the original one.

</details>
<details>
<summary>Hint 2</summary>

Keep the original tokens and the synthetic repair distinguishable.

</details>
<details>
<summary>Solution</summary>

16. **What must recovery report?** Original tokens, inserted/deleted edits, recovery position, and the status of the resulting provisional tree.

Report the unchanged input record, repair position, inserted or deleted tokens and a provisional-tree status. A tree derived from the repaired stream is not a certificate that the original malformed stream belonged to the grammar language. Later diagnostics must retain that distinction.

</details>

## Project: auditable expression parser

Implement a dependency-free tokenizer and parser for integers, parentheses, addition, and multiplication. Publish the grammar, precedence and associativity rules, token spans, and structured error format. Return a syntax tree and write an independent tree checker that reconstructs the token yield and validates node arities. Include at least 30 cases covering empty input, nested parentheses, missing operands, extra tokens, and long left-associated chains. Prove termination by remaining-token or stack measure and prove that every accepted tree derives its token stream.

[Previous chapter](#/item/book-automata-computability-complexity?chapter=logic-of-regular-languages) · [Book overview](#/item/book-automata-computability-complexity)

[Book overview](#/item/book-automata-computability-complexity)

## Sources

The CC BY-SA 4.0 native seeds are the *Formal Computation* chapter of the same name and the entire *Mathematics for Computer Science* chapter “Grammars, Stacks, Parsing, and Syntax Trees”. Their mathematical exposition, projects and original twelve plus sixteen exercise items are retained. The explicit summary productions, direct minimum-tree pumping proof and worked examples are new exposition. Primary companion teaching material is [Michael Sipser's MIT lecture collection](https://www-math.mit.edu/~sipser/18404/Lectures_Fall_2020/index.html). The retained formal bibliography records Noam Chomsky, “On Certain Formal Properties of Grammars” (1959), [DOI](https://doi.org/10.1016/S0019-9958(59)90362-6). The Chomsky–Schützenberger representation mentioned above is a named further theorem, not a hidden premise of the equivalence or pumping proofs supplied here.

## Summary

A CFG generates terminal yields through finite production trees, while a PDA recognises them through existential stack runs. The exact summary-variable construction proves their equivalence with a fixed stack orientation and acceptance convention. A minimum-node parse supplies a full context-free pumping proof without a forward normal-form assumption. Delimiter and block examples show why counts, nesting and phase order are different requirements. The retained parser constructions connect those facts to syntax trees and diagnostics. The next chapter proves normal-form transformations and chart-parsing correctness in detail.
`;export{e as default};