
# Ambiguity, Parsing Algorithms, and Grammar Normal Forms

A grammar is simultaneously a finite generator, a recursive specification, and possible input to a parser generator. Those roles are related but not identical. Transforming a grammar may preserve its language while changing parse trees; a parsing conflict may expose ambiguity or merely a limitation of one parsing strategy. This chapter keeps language, grammar, tree, and algorithm claims separate.

## Preparation and outcomes

Use CFG derivations, parse trees and stack acceptance from [Chapter 6](#/books/automata-computability-complexity/context-free-languages-and-pushdown-machines), together with finite fixed points and induction. You will prove language preservation in both directions for every normal-form step, carry the empty word through a fresh isolated start symbol, and justify chart entries as exact derivations. Parse-tree shape and interpreted associativity are additional contracts rather than automatic consequences of preserving terminal strings.

## 1. Derivations and trees

For CFG $G$, every parse tree determines one leftmost and one rightmost derivation. Conversely, a leftmost derivation determines a parse tree. Arbitrary derivations can differ only by the order in which independent nodes are expanded, so counting arbitrary derivation sequences overcounts parses.

A grammar is **ambiguous** when one terminal word has two parse trees. To prove ambiguity, exhibit the word and two trees or two distinct leftmost derivations. To prove unambiguity, establish a unique structural decomposition for every generated word. Neither several successful parser traces nor visual plausibility is enough.

The grammar $E \to  E+E | E\ast E | (E) | \mathrm{id}$ is ambiguous. A precedence grammar

$E \to  E+T | T$, $T \to  T\ast F | F$, $F \to  (E) | \mathrm{id}$

assigns `*` tighter binding than `+` and left associativity to both. A proof proceeds by showing the root form is forced by the outermost lowest-precedence operator, then inducting on subexpressions.

## 2. Useless symbols, epsilon rules, and unit rules

A variable is **generating** if it derives some terminal word and **reachable** if it occurs in a sentential form derived from $S$. Removing nongenerating variables, then unreachable variables, preserves the language. The order matters because the first removal can change reachability.

To eliminate epsilon productions, compute nullable variables and add every production obtained by optionally omitting nullable occurrences, while retaining a fresh start rule for $\varepsilon$ when required. To eliminate a unit rule $A \to  B$, compute the unit-reachability closure and copy nonunit productions from reachable variables. These transformations preserve terminal strings but can alter derivation counts and ambiguity.

The proof pattern is bidirectional simulation. Every new shortened rule expands to an old derivation using nullable variables; every old derivation can omit nullable subtrees. Stating only the construction leaves half the theorem unproved.

## 3. Chomsky normal form

A CFG is in **Chomsky normal form** (CNF) when every rule has form $A \to  BC$ or $A \to  a$, with an optional fresh-start rule $S_0 \to  \varepsilon$, and the start symbol does not occur on a right side. Convert by isolating terminals in long rules, binarizing right sides, and previously removing epsilon, unit, and useless rules.

If a CNF grammar derives a nonempty word of length $n$, every parse tree has $n$ terminal leaves and $n-1$ binary variable nodes above them. Hence its height is bounded below logarithmically and, for a repeated-variable pumping argument, long yields force repeated variables on a branch.

Normal form is a proof and algorithm interface, not a claim that the transformed grammar has the same parse trees or is a good human syntax specification.

## 4. CYK dynamic programming

For CNF grammar and word $w=a_0...a_{n-1}$, let $T[i,l]$ be the set of variables deriving substring of length $l$ beginning at $i$. Initialize $T[i,1]$ with variables having rule $A \to  a_i$. For increasing $l$, add $A$ when some split $k$, rule $A \to  BC$, $B \in T[i,k]$, and $C \in T[i+k,l-k]$.

**CYK invariant.** $A \in T[i,l]$ iff $A \Rightarrow^{\ast }  w[i:i+l]$.

Induct on $l$. CNF forces any derivation of length greater than one to begin with a binary rule, and the two subtrees induce one split. Conversely, a recorded rule and two inductively valid subderivations combine into a parse. Membership holds exactly when $S \in T[0,n]$, with $\varepsilon$ handled separately.

There are $\mathcal{O}(n^2)$ cells and $\mathcal{O}(n)$ splits per cell; a direct grammar-indexed implementation runs in $\mathcal{O}(|P|n^3)$ time. Backpointers recover one tree; storing all backpointers creates a packed parse forest rather than eagerly duplicating exponentially many trees.

## 5. Earley items

Earley parsing works directly with arbitrary CFGs. An item

$[A \to  \alpha \cdot \beta, i]$

at chart position $j$ means: $A$ began at input position $i$, $\alpha$ has matched through $j$, and $\beta$ remains. Three closure operations are:

- **predict:** if the dot precedes variable $B$, add its productions beginning at $j$;
- **scan:** if the dot precedes terminal $a_j$, advance it into chart $j+1$;
- **complete:** when a $B$ item finishes, advance items that were waiting for $B$ at its origin.

Soundness follows by interpreting each item as a partial derivation. Completeness follows by induction over a leftmost derivation aligned with consumed prefixes. Deduplicating items is essential for termination in the presence of left recursion and nullable cycles.

## 6. Predictive and shift-reduce boundaries

An LL parser chooses productions from left context and bounded lookahead while constructing a leftmost derivation. FIRST and FOLLOW sets expose prediction conflicts. Left recursion blocks the simplest recursive-descent strategy, but eliminating it may alter tree shape and associativity.

An LR parser reads left to right and constructs a rightmost derivation in reverse. Shift/reduce and reduce/reduce conflicts concern a particular grammar and parser family. An ambiguous grammar necessarily causes conflicts for deterministic exact parsing, but a conflict in a restricted table construction does not prove inherent language ambiguity.

General CFG membership is decidable; grammar ambiguity is undecidable. Therefore no universal tool can always decide whether arbitrary grammar refactoring preserved unambiguity.

## 7. Error reporting and trust

A parser implementation should distinguish malformed grammar, rejected word, resource limit, and internal failure. A generated tree is a certificate only when a small checker confirms every internal production and exact terminal yield. Acceptance without a tree may still be correct, but is harder to audit.

Normal-form conversions should output a provenance map from new variables and rules to old fragments. Tests compare languages only to a bound; the transformation proof supplies the universal guarantee.


## A complete normal-form theorem

**Theorem 7.1 (CNF with the empty word retained).** Every CFG has an equivalent finite grammar whose productions are $A\to BC$ or $A\to a$, together with $S_0\to\varepsilon$ exactly when the language contains the empty word. The start symbol $S_0$ is fresh and occurs on no right side. No other epsilon or unit production remains.

*Proof.* We give each finite transformation and both language inclusions. First add a fresh start $S_0\to S$. Because the new name occurs nowhere else, every new nonempty or empty derivation is an old derivation preceded by that one step, and every old derivation lifts in that way. Its absence from right sides is preserved by all subsequent steps.

Compute nullable variables by initially marking epsilon left sides and repeatedly marking a variable with a production all of whose right-side symbols are already marked variables. No terminal can be nullable. Every mark supplies a finite empty derivation by combining earlier ones. Conversely, induction on the height of an empty parse proves that its root is eventually marked. Thus the finite fixed point is exact.

For each production, add all right sides obtained by omitting any chosen occurrences of nullable variables. Keep the nonempty resulting right sides, remove original epsilon rules, and retain $S_0\to\varepsilon$ exactly when the old start is nullable. Every use of a shortened rule can be expanded in the old grammar: reinsert the omitted nullable occurrences and give them their empty derivations. Conversely, in an old parse for a nonempty word, remove subtrees whose complete yield is empty. At every retained variable node, the surviving children are a permitted shortened right side. Perform the pruning recursively, retaining each node whose yield is nonempty. The root of a nonempty parse is retained; a wholly empty subtree is removed only where its parent omits that nullable occurrence. Unit chains may remain at this intermediate stage and are removed in the next step. This produces a new derivation of the same nonempty word. The empty word itself is dealt with only by the isolated start rule. A fresh start on no right side ensures no other rule can use that exception as an internal empty subtree.

Next compute the reflexive-transitive closure of unit edges $A\to B$. For every pair in that closure and every nonunit production $B\to\alpha$, add $A\to\alpha$, then delete all unit productions. New productions simulate a finite unit chain followed by a nonunit step. Conversely any finite old parse can have each maximal unit chain contracted to just that copied nonunit production. The special start epsilon rule can only be copied to a variable unit-reaching $S_0$; no other variable can do so because $S_0$ appears on no right side. Thus the epsilon exception remains confined to the start.

For useless symbols, mark generating variables by the finite terminal-derivation fixed point. A successful terminal parse contains only generating variables, so deleting productions involving nongenerating variables cannot remove such a parse; no new derivation is added. Then restrict to variables reachable from the start in the remaining grammar. Every successful derivation uses only those variables, while deleting unreachable material adds no derivation. If the start is nongenerating, return a grammar with just a fresh start and no rules, which generates the empty language and already meets the stated form. In particular do not accidentally delete the required start from the grammar's variable set.

In every remaining right side of length at least two, replace terminal $a$ by a fresh helper $T_a$ with sole rule $T_a\to a$. Expanding helpers restores the old rule, and every old application can introduce those helpers, proving both directions. Length-one terminal rules are left alone. Now a long right side consists only of variables. Replace $A\to B_1\cdots B_r$, for $r\ge3$, by a binary chain $A\to B_1H_1$, $H_1\to B_2H_2$, and so on, ending $H_{r-2}\to B_{r-1}B_r$. Choose fresh helpers for that rule. Their forced chain expands to the old right side, and every old production application has that chain, so language equivalence is exact. Every construction is finite; enumerating nullable omission subsets can be large but still terminates. The resulting grammar has precisely the forms claimed. ∎

This theorem preserves terminal words, not a literal identity of old and new parse trees. Nullable omission, copied unit paths and helper nodes can change derivation counts or shape. A compiler using old parse-tree semantics needs an explicit reconstruction or abstraction map in addition to this language theorem.

## Parse shape and height

For a nonempty CNF parse, contract each terminal rule $A\to a$ to a leaf of the binary variable skeleton. That skeleton has $n$ leaves and $n-1$ binary nodes when the yield has length $n$. The full parse still includes the preterminal variable occurrences and terminal leaves; the binary-node count is not a claim that those extra nodes disappear from the literal parse tree.

A proof that long yields force deep branches uses the upper bound on leaves of a bounded-height binary tree. If every branch of the skeleton has at most $h$ binary edges, it has at most $2^h$ leaves by induction on height. Reversing that bound makes long words force repeated variable labels. Chapter 6's direct proof additionally showed how to handle epsilon and unit rules without first using this normal form.

## Complete chart obligations

**Theorem 7.2 (CYK recognition).** For the stated CNF grammar and a nonempty word, the table recurrence in Section 4 records exactly the variables deriving each indicated substring.

*Proof.* At span length one, a successful parse must use one terminal rule, since every binary rule has two nonempty child yields. This gives exactly the initial entries. For length $l>1$, any parse starts with $A\to BC$, and its two nonempty yields determine some split $1\le k<l$. Induction identifies $B,C$ in the two smaller cells, so the recurrence records $A$. Conversely every recorded rule and split has two actual subderivations by induction; joining their trees gives a derivation of the larger substring. This proves both directions at each length. The start entry on the whole word therefore decides membership. At length zero, use only the isolated start epsilon rule instead of inventing a length-zero binary split. ∎

For Earley parsing, saturate each chart with prediction and completion, including all consequences of newly discovered nullable items. A finite dotted production, origin and chart index determine an item, so there are finitely many possible items for a fixed grammar and input. Deduplication makes repeated closure terminate even under left recursion.

Soundness follows from a local item invariant: if $[A\to\alpha\mathbin{\cdot}\beta,i]$ is in chart $j$, then $\alpha\Rightarrow^*w[i:j]$. Prediction has empty $\alpha$; scanning appends a matching terminal; completion appends a completed nonterminal derivation to the waiting prefix. Thus a complete augmented-start item at the last chart certifies a full parse.

For completeness, suppose a waiting item expects $A$ at position $i$ and a finite parse tree for $A$ yields $w[i:j]$. Prediction supplies that tree's chosen production. Process its right side left to right. Each terminal is scanned, and each nonterminal child is completed by induction on the smaller child tree. Empty children complete within the same chart; least-fixed-point closure must combine waiting and completed items regardless of which arrived first. Hence the completed $A$ item appears, allowing the waiting parent to advance. Apply this tree-height argument to the augmented start. Every successful parse is therefore found. This is recognition correctness, not a claim that eagerly copying all ambiguous trees has polynomial output size.

## Worked example 1: normalising matched blocks

Begin with $S\to aSb\mid\varepsilon$. Add fresh start $T\to S$. Nullable omission and unit removal give $S\to aSb\mid ab$ and $T\to aSb\mid ab\mid\varepsilon$. Introduce $A\to a$, $B\to b$ and helper $C\to SB$. A CNF grammar is

$$S\to AC\mid AB,\qquad T\to AC\mid AB\mid\varepsilon,\qquad C\to SB,\qquad A\to a,\quad B\to b.$$

Here $T$ appears on no right side and only $T$ has an empty production. The variable $S$ derives exactly the positive matched blocks: its $AB$ alternative gives $ab$, and $AC$ with $C\to SB$ wraps a smaller block in $a,b$. Induction gives both directions. The start adds precisely the zero-block case. Thus the grammar meets the normal-form syntax and still generates exactly $a^nb^n$ for $n\ge0$.

## Worked example 2: a complete small CYK chart

Use that grammar on $aabb$, indexed zero through three. The length-one cells are $\{A\},\{A\},\{B\},\{B\}$. At length two the only nonempty cell is $T[1,2]=\{S,T\}$, since positions one and two form $ab$ and both variables have rule $AB$.

At length three, $T[1,3]=\{C\}$ because its first two letters derive $S$ and its last letter derives $B$, matching $C\to SB$. All other length-three cells are empty. The length-four cell is $T[0,4]=\{S,T\}$ via its first-letter $A$ and remaining $C$, so the start variable $T$ proves acceptance. The backpointer path uses $T\to AC$, $C\to SB$ and $S\to AB$, reconstructing the two matched pairs. Empty input is accepted separately by $T\to\varepsilon$.

## Worked example 3: preserving associativity after refactoring

For subtraction, let $E\to E-T\mid T$, where $T$ supplies integer literals. It gives the left-associated value of $8-3-1$, namely $(8-3)-1=4$. A language-equivalent recursive-descent grammar is $E\to TR$, $R\to-TR\mid\varepsilon$. Its right-recursive repetition tree does not by itself specify how to associate the operation.

Use an accumulator: start with the first term eight; after the next term update to $8-3=5$; after the last update to $5-1=4$. Induction over the processed repetition prefix proves that the accumulator is its left-associated value. Building instead a right-associated tree would produce $8-(3-1)=6$, a different semantic result despite identical accepted tokens. A normalization or parsing proof must therefore name both its language and its intended syntax-to-meaning map.

## Exercises with complete solutions

### Exercise 1 — Two parses
<a id="ambiguity-parsing-and-normal-forms-ex-1"></a>

Show $\mathrm{id}+\mathrm{id}+\mathrm{id}$ is ambiguous under $E \to  E+E | \mathrm{id}$.

<details>
<summary>Hint 1</summary>

Keep the terminal sequence fixed while changing the root split.

</details>
<details>
<summary>Hint 2</summary>

The two choices group either the first pair or the last pair.

</details>
<details>
<summary>Solution</summary>

**Solution.** The root can split after the first $\mathrm{id}$, giving $\mathrm{id}+(\mathrm{id}+\mathrm{id})$, or before the last, giving $(\mathrm{id}+\mathrm{id})+\mathrm{id}$. The different root decompositions yield different parse trees.

</details>

### Exercise 2 — Leftmost uniqueness
<a id="ambiguity-parsing-and-normal-forms-ex-2"></a>

Why does a fixed parse tree determine one leftmost derivation?

<details>
<summary>Hint 1</summary>

At each stage the leftmost unexpanded occurrence is fixed.

</details>
<details>
<summary>Hint 2</summary>

The chosen tree also fixes that occurrence’s production and children.

</details>
<details>
<summary>Solution</summary>

**Solution.** At every step the leftmost unexpanded variable occurrence is fixed by the current frontier, and its children are fixed by the tree. Repeating this forced choice determines the entire derivation.

</details>

### Exercise 3 — Generating variables
<a id="ambiguity-parsing-and-normal-forms-ex-3"></a>

Give the fixed-point algorithm for generating variables.

<details>
<summary>Hint 1</summary>

A variable is generating when one of its rules can finish using already known variables.

</details>
<details>
<summary>Hint 2</summary>

Prove exactness by induction on finite terminal-parse height.

</details>
<details>
<summary>Solution</summary>

**Solution.** Initially mark variables with a terminal-only right side. Repeatedly mark $A$ if some rule $A \to  \alpha$ has every variable in $\alpha$ marked. Finiteness ensures termination, and induction on derivation-tree height proves exactness.

</details>

### Exercise 4 — New start symbol
<a id="ambiguity-parsing-and-normal-forms-ex-4"></a>

Why introduce $S_0 \to  S$ before epsilon elimination?

<details>
<summary>Hint 1</summary>

Separate the empty-word exception from symbols used internally.

</details>
<details>
<summary>Hint 2</summary>

The new start must never appear in another right side.

</details>
<details>
<summary>Solution</summary>

**Solution.** If $S$ is nullable and appears on a right side, retaining $S \to  \varepsilon$ violates the normal-form restriction and can interact with omission. A fresh start not occurring on right sides preserves the empty word through the isolated rule $S_0 \to  \varepsilon$.

</details>

### Exercise 5 — Unit closure
<a id="ambiguity-parsing-and-normal-forms-ex-5"></a>

If $A \Rightarrow^{\ast }  B$ using only unit rules and $B \to  \alpha$ is nonunit, which rule is copied?

<details>
<summary>Hint 1</summary>

Replace a chain of single-variable productions by one direct step.

</details>
<details>
<summary>Hint 2</summary>

Copy only a nonunit right side at the end of that chain.

</details>
<details>
<summary>Solution</summary>

**Solution.** Add $A \to  \alpha$. Any use simulates the unit chain then $B \to  \alpha$; conversely every original unit chain ending in a nonunit rule is represented.

</details>

### Exercise 6 — CNF tree size
<a id="ambiguity-parsing-and-normal-forms-ex-6"></a>

How many binary branch nodes does a CNF tree for $n>0$ terminals have?

<details>
<summary>Hint 1</summary>

Use the binary skeleton with one leaf per terminal yield.

</details>
<details>
<summary>Hint 2</summary>

Split the skeleton at its root and add the two subtree counts.

</details>
<details>
<summary>Solution</summary>

**Solution.** A full binary tree with $n$ leaves has $n-1$ binary internal nodes. Induct by splitting into subtrees with $i$ and $n-i$ leaves: $(i-1)+(n-i-1)+1=n-1$.

</details>

### Exercise 7 — CYK base case
<a id="ambiguity-parsing-and-normal-forms-ex-7"></a>

Why can only rules $A \to  a_i$ populate $T[i,1]$ in CNF?

<details>
<summary>Hint 1</summary>

Every binary child yield is nonempty in this normal form.

</details>
<details>
<summary>Hint 2</summary>

A one-letter yield cannot come from two such child yields.

</details>
<details>
<summary>Solution</summary>

**Solution.** A binary rule yields at least two terminal leaves. Thus a length-one terminal yield must use a terminal production directly, and every matching terminal production supplies such a derivation.

</details>

### Exercise 8 — CYK completeness
<a id="ambiguity-parsing-and-normal-forms-ex-8"></a>

Where does the split point come from?

<details>
<summary>Hint 1</summary>

Inspect the first binary production of a successful larger parse.

</details>
<details>
<summary>Hint 2</summary>

Its two subtree yields are a prefix and suffix whose lengths sum to the span.

</details>
<details>
<summary>Solution</summary>

**Solution.** A CNF derivation of length greater than one begins $A \to  BC$. The yield of the $B$ subtree is a nonempty prefix and the $C$ yield is the remaining nonempty suffix, determining a split $k$ considered by the recurrence.

</details>

### Exercise 9 — Packed forests
<a id="ambiguity-parsing-and-normal-forms-ex-9"></a>

Why not copy one full tree for every ambiguous alternative during parsing?

<details>
<summary>Hint 1</summary>

Different full parses often share identical subspans.

</details>
<details>
<summary>Hint 2</summary>

Store alternative backpointers rather than duplicating each common subtree.

</details>
<details>
<summary>Solution</summary>

**Solution.** The number of parses can be exponential. Shared backpointer nodes store common subparses once and record alternative splits compactly; individual trees can be enumerated later if required.

</details>

### Exercise 10 — Earley origin
<a id="ambiguity-parsing-and-normal-forms-ex-10"></a>

What does the origin $i$ enable during completion?

<details>
<summary>Hint 1</summary>

Completion must locate where a constituent began.

</details>
<details>
<summary>Hint 2</summary>

Only the waiting items at that origin can consume it correctly.

</details>
<details>
<summary>Solution</summary>

**Solution.** It identifies the chart where the completed variable began. Items in chart $i$ waiting for that variable can be advanced into the current chart, preserving the exact consumed interval.

</details>

### Exercise 11 — Left recursion
<a id="ambiguity-parsing-and-normal-forms-ex-11"></a>

Why can naive recursive descent loop on $E \to  E+T | T$?

<details>
<summary>Hint 1</summary>

Follow the left-recursive production before reading a token.

</details>
<details>
<summary>Hint 2</summary>

The new call has the same unread input as the old call.

</details>
<details>
<summary>Solution</summary>

**Solution.** Expanding $E$ by its first alternative calls $E$ again before consuming input, repeating indefinitely. The language may still be deterministic and parsable after refactoring or by an LR-style method.

</details>

### Exercise 12 — Bounded comparison
<a id="ambiguity-parsing-and-normal-forms-ex-12"></a>

What does testing an original and normalized grammar through length ten prove?

<details>
<summary>Hint 1</summary>

Identify the precise finite set compared.

</details>
<details>
<summary>Hint 2</summary>

Language preservation beyond it needs both directions of the transformation proof.

</details>
<details>
<summary>Solution</summary>

**Solution.** Only equality on those finitely many words. Universal language preservation comes from the bidirectional simulation proof; bounded tests are valuable regression evidence, not its replacement.

</details>

[Book overview](#/books/automata-computability-complexity)

## Sources

The CC BY-SA 4.0 native source is Euler's *Formal Computation* chapter of the same stable name, with all twelve original exercises and solutions retained. The full normalisation and chart arguments and the three concrete worked examples are new exposition. A primary grammar reference retained in the original bibliography is Noam Chomsky, “On Certain Formal Properties of Grammars” (1959), [DOI](https://doi.org/10.1016/S0019-9958(59)90362-6). For companion teaching see [Michael Sipser's MIT lecture collection](https://www-math.mit.edu/~sipser/18404/Lectures_Fall_2020/index.html). General ambiguity undecidability is a named further computability result; the normal-form and membership proofs here do not assume an ambiguity-deciding procedure.

## Summary

Ambiguity concerns distinct trees for one word, while parser restrictions concern a stated grammar and algorithm. Nullable, unit and useless-symbol transformations preserve terminal strings through explicit two-way simulations. CNF retains epsilon only at an isolated fresh start and supports exact nonempty-span CYK induction. Earley closure handles arbitrary finite CFGs by finitely many deduplicated items and a parse-tree completeness argument. Packed forests preserve alternatives without eagerly copying every tree. Semantic associativity still requires its own mapping after language-preserving refactoring. The next chapter studies the resulting trees as finite-state objects in their own right.
