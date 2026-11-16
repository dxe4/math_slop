var e=`---
parent_id: book-formal-computation-proof-reference
chapter_id: ambiguity-parsing-and-normal-forms
title: "Ambiguity, Parsing Algorithms, and Grammar Normal Forms"
level: advanced-undergraduate
estimated_minutes: 210
license: CC BY-SA 4.0
---

# Ambiguity, Parsing Algorithms, and Grammar Normal Forms

A grammar is simultaneously a finite generator, a recursive specification, and possible input to a parser generator. Those roles are related but not identical. Transforming a grammar may preserve its language while changing parse trees; a parsing conflict may expose ambiguity or merely a limitation of one parsing strategy. This chapter keeps language, grammar, tree, and algorithm claims separate.

## 1. Derivations and trees

For CFG $G$, every parse tree determines one leftmost and one rightmost derivation. Conversely, a leftmost derivation determines a parse tree. Arbitrary derivations can differ only by the order in which independent nodes are expanded, so counting arbitrary derivation sequences overcounts parses.

A grammar is **ambiguous** when one terminal word has two parse trees. To prove ambiguity, exhibit the word and two trees or two distinct leftmost derivations. To prove unambiguity, establish a unique structural decomposition for every generated word. Neither several successful parser traces nor visual plausibility is enough.

The grammar $E \\to  E+E | E\\ast E | (E) | \\mathrm{id}$ is ambiguous. A precedence grammar

$E \\to  E+T | T$, $T \\to  T\\ast F | F$, $F \\to  (E) | \\mathrm{id}$

assigns \`*\` tighter binding than \`+\` and left associativity to both. A proof proceeds by showing the root form is forced by the outermost lowest-precedence operator, then inducting on subexpressions.

## 2. Useless symbols, epsilon rules, and unit rules

A variable is **generating** if it derives some terminal word and **reachable** if it occurs in a sentential form derived from $S$. Removing nongenerating variables, then unreachable variables, preserves the language. The order matters because the first removal can change reachability.

To eliminate epsilon productions, compute nullable variables and add every production obtained by optionally omitting nullable occurrences, while retaining a fresh start rule for $\\varepsilon$ when required. To eliminate a unit rule $A \\to  B$, compute the unit-reachability closure and copy nonunit productions from reachable variables. These transformations preserve terminal strings but can alter derivation counts and ambiguity.

The proof pattern is bidirectional simulation. Every new shortened rule expands to an old derivation using nullable variables; every old derivation can omit nullable subtrees. Stating only the construction leaves half the theorem unproved.

## 3. Chomsky normal form

A CFG is in **Chomsky normal form** (CNF) when every rule has form $A \\to  BC$ or $A \\to  a$, with an optional fresh-start rule $S_0 \\to  \\varepsilon$, and the start symbol does not occur on a right side. Convert by isolating terminals in long rules, binarizing right sides, and previously removing epsilon, unit, and useless rules.

If a CNF grammar derives a nonempty word of length $n$, every parse tree has $n$ terminal leaves and $n-1$ binary variable nodes above them. Hence its height is bounded below logarithmically and, for a repeated-variable pumping argument, long yields force repeated variables on a branch.

Normal form is a proof and algorithm interface, not a claim that the transformed grammar has the same parse trees or is a good human syntax specification.

## 4. CYK dynamic programming

For CNF grammar and word $w=a_0...a_{n-1}$, let $T[i,l]$ be the set of variables deriving substring of length $l$ beginning at $i$. Initialize $T[i,1]$ with variables having rule $A \\to  a_i$. For increasing $l$, add $A$ when some split $k$, rule $A \\to  BC$, $B \\in T[i,k]$, and $C \\in T[i+k,l-k]$.

**CYK invariant.** $A \\in T[i,l]$ iff $A \\Rightarrow^{\\ast }  w[i:i+l]$.

Induct on $l$. CNF forces any derivation of length greater than one to begin with a binary rule, and the two subtrees induce one split. Conversely, a recorded rule and two inductively valid subderivations combine into a parse. Membership holds exactly when $S \\in T[0,n]$, with $\\varepsilon$ handled separately.

There are $\\mathcal{O}(n^2)$ cells and $\\mathcal{O}(n)$ splits per cell; a direct grammar-indexed implementation runs in $\\mathcal{O}(|P|n^3)$ time. Backpointers recover one tree; storing all backpointers creates a packed parse forest rather than eagerly duplicating exponentially many trees.

## 5. Earley items

Earley parsing works directly with arbitrary CFGs. An item

$[A \\to  \\alpha \\cdot \\beta, i]$

at chart position $j$ means: $A$ began at input position $i$, $\\alpha$ has matched through $j$, and $\\beta$ remains. Three closure operations are:

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

## Exercises with complete solutions

### 1. Two parses

Show $\\mathrm{id}+\\mathrm{id}+\\mathrm{id}$ is ambiguous under $E \\to  E+E | \\mathrm{id}$.

**Solution.** The root can split after the first $\\mathrm{id}$, giving $\\mathrm{id}+(\\mathrm{id}+\\mathrm{id})$, or before the last, giving $(\\mathrm{id}+\\mathrm{id})+\\mathrm{id}$. The different root decompositions yield different parse trees.

### 2. Leftmost uniqueness

Why does a fixed parse tree determine one leftmost derivation?

**Solution.** At every step the leftmost unexpanded variable occurrence is fixed by the current frontier, and its children are fixed by the tree. Repeating this forced choice determines the entire derivation.

### 3. Generating variables

Give the fixed-point algorithm for generating variables.

**Solution.** Initially mark variables with a terminal-only right side. Repeatedly mark $A$ if some rule $A \\to  \\alpha$ has every variable in $\\alpha$ marked. Finiteness ensures termination, and induction on derivation-tree height proves exactness.

### 4. New start symbol

Why introduce $S_0 \\to  S$ before epsilon elimination?

**Solution.** If $S$ is nullable and appears on a right side, retaining $S \\to  \\varepsilon$ violates the normal-form restriction and can interact with omission. A fresh start not occurring on right sides preserves the empty word through the isolated rule $S_0 \\to  \\varepsilon$.

### 5. Unit closure

If $A \\Rightarrow^{\\ast }  B$ using only unit rules and $B \\to  \\alpha$ is nonunit, which rule is copied?

**Solution.** Add $A \\to  \\alpha$. Any use simulates the unit chain then $B \\to  \\alpha$; conversely every original unit chain ending in a nonunit rule is represented.

### 6. CNF tree size

How many binary branch nodes does a CNF tree for $n>0$ terminals have?

**Solution.** A full binary tree with $n$ leaves has $n-1$ binary internal nodes. Induct by splitting into subtrees with $i$ and $n-i$ leaves: $(i-1)+(n-i-1)+1=n-1$.

### 7. CYK base case

Why can only rules $A \\to  a_i$ populate $T[i,1]$ in CNF?

**Solution.** A binary rule yields at least two terminal leaves. Thus a length-one terminal yield must use a terminal production directly, and every matching terminal production supplies such a derivation.

### 8. CYK completeness

Where does the split point come from?

**Solution.** A CNF derivation of length greater than one begins $A \\to  BC$. The yield of the $B$ subtree is a nonempty prefix and the $C$ yield is the remaining nonempty suffix, determining a split $k$ considered by the recurrence.

### 9. Packed forests

Why not copy one full tree for every ambiguous alternative during parsing?

**Solution.** The number of parses can be exponential. Shared backpointer nodes store common subparses once and record alternative splits compactly; individual trees can be enumerated later if required.

### 10. Earley origin

What does the origin $i$ enable during completion?

**Solution.** It identifies the chart where the completed variable began. Items in chart $i$ waiting for that variable can be advanced into the current chart, preserving the exact consumed interval.

### 11. Left recursion

Why can naive recursive descent loop on $E \\to  E+T | T$?

**Solution.** Expanding $E$ by its first alternative calls $E$ again before consuming input, repeating indefinitely. The language may still be deterministic and parsable after refactoring or by an LR-style method.

### 12. Bounded comparison

What does testing an original and normalized grammar through length ten prove?

**Solution.** Only equality on those finitely many words. Universal language preservation comes from the bidirectional simulation proof; bounded tests are valuable regression evidence, not its replacement.

[Book overview](#/item/book-formal-computation-proof-reference)
`;export{e as default};