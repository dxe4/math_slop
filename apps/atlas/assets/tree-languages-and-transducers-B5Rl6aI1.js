var e=`---
parent_id: book-formal-computation-proof-reference
chapter_id: tree-languages-and-transducers
title: "Tree Languages, Syntax Transformations, and Transducers"
level: advanced-undergraduate
estimated_minutes: 230
license: CC BY-SA 4.0
---

# Tree Languages, Syntax Transformations, and Transducers

Parsing produces structure, not merely acceptance. Compilers, theorem provers, query engines, and symbolic algebra systems then transform that structure. Trees make scope and nesting explicit, while ranked alphabets and tree automata recover a finite-state theory for them. Transducers add output, but useful correctness claims still require preservation theorems.

## 1. Ranked trees and positions

A **ranked alphabet** assigns each symbol $f$ an arity $\\operatorname{rank}(f)$. A finite $\\Sigma$-tree is $f(t_1,...,t_k)$ when $\\operatorname{rank}(f)=k$ and the $t_i$ are trees. Nullary symbols are leaves.

Positions are finite sequences of positive integers: $\\varepsilon$ names the root and $\\pi i$ the $i$th child of position $\\pi$. The domain is prefix-closed and respects arities. A subtree $t|_{\\pi}$, replacement $t[s]_{\\pi}$, height, and size are defined recursively.

Structural induction proves $P(t)$ by showing it for every $f(t_1,...,t_k)$ from hypotheses $P(t_i)$. Unlike induction on serialized text length, it aligns directly with the constructors.

## 2. Bottom-up finite tree automata

A deterministic bottom-up tree automaton has finite states $Q$, accepting set $F$, and for every rank-$k$ symbol a transition $\\delta_f:Q^k\\to Q$. Its run labels each node from children upward:

$run(f(t_1,...,t_k))=\\delta_f(run(t_1),...,run(t_k))$.

It accepts when the root state lies in $F$. Nondeterministic versions return possible state sets and have equal expressive power by a subset construction.

The recognized sets are **regular tree languages**. Product constructions give Boolean closure. Emptiness is a generating-state fixed point: mark states attainable at leaves, then repeatedly apply transitions; acceptance is possible exactly when an accepting state is marked.

### Example: well-typed Boolean expressions

Use ranked symbols $\\mathrm{true},\\mathrm{false}$ of rank zero, $\\neg$ rank one, and $and$ rank two. One state $\\mathrm{Bool}$ suffices when every constructor is well formed. Adding integer leaves and $plus$ creates states $\\mathrm{Bool},\\mathrm{Int},\\mathrm{Error}$; transitions implement a finite type checker. Acceptance of non-error roots proves only this small static discipline, not evaluation correctness.

## 3. Top-down automata differ

A top-down automaton starts at the root and chooses states for children. Deterministic top-down automata are strictly weaker than nondeterministic ones because a root decision may need correlated information from separate subtrees that is unavailable before descending. Bottom-up determinism can combine completed child summaries.

This contrasts with word automata, where reversing direction does not create the same expressive asymmetry. Tree branching changes information flow.

## 4. Tree homomorphisms

A tree homomorphism maps each rank-$k$ symbol $f$ to an output tree pattern $h_f(x_1,...,x_k)$ and substitutes recursively. It is **linear** when no variable is duplicated and **nondeleting** when every variable occurs. Duplication can cause exponential output growth under nesting; deletion can discard semantically relevant subtrees.

Correctness is usually compositional. If interpretation $[\\![ t]\\!]$ lies in semantic domain $D$, a transformation $h$ preserves meaning when

$[\\![ h(t)]\\!]_{\\mathrm{out}}=[\\![ t]\\!]_{\\mathrm{in}}$

for every well-formed input. Prove it by structural induction, with one lemma per constructor pattern. Syntax equality is not the goal.

## 5. Bottom-up transducers

A deterministic bottom-up tree transducer associates output construction with state transitions. Each input node consumes child states and child outputs, then returns a new state and output tree. A top-down transducer instead expands an output pattern while recursively invoking states on selected input children.

Important dimensions are deterministic versus nondeterministic, linear versus copying, deleting versus nondeleting, and total versus partial. “Tree transducer” alone does not specify expressiveness or termination behavior.

### Constant folding

For expression constructors $num(n)$, $add(x,y)$, and $var(name)$, return a pair $(known,value-or-tree)$. Two known numeric children fold to one numeral; otherwise rebuild the node. The invariant is semantic preservation under every variable environment. Integer overflow, effects, exceptions, and floating-point reassociation can invalidate a seemingly obvious fold, so the source language's numeric semantics are part of the contract.

## 6. Dependency-free reference transformer

On finite acyclic ASTs whose depth fits the runtime's recursion budget, this JavaScript function validates the supported constructors while folding exact safe-integer additions. Cyclic objects and unbounded nesting lie outside that input contract. Unsupported or malformed nodes, including additions whose result is not a safe integer, return typed transformation errors rather than being silently copied. Those errors express rejection by this transformer; they need not equal the source language's runtime behavior unless the source semantics declares the same error class.

\`\`\`js
function fold(node) {
  if (!node || typeof node !== "object") return { ok: false, error: "node must be an object" };
  if (node.kind === "num") {
    if (!Number.isSafeInteger(node.value)) return { ok: false, error: "unsafe integer literal" };
    return { ok: true, tree: node, constant: node.value };
  }
  if (node.kind === "var") {
    if (typeof node.name !== "string") return { ok: false, error: "invalid variable" };
    return { ok: true, tree: node, constant: null };
  }
  if (node.kind !== "add") return { ok: false, error: \`unknown kind: \${node.kind}\` };
  const left = fold(node.left); if (!left.ok) return left;
  const right = fold(node.right); if (!right.ok) return right;
  if (left.constant !== null && right.constant !== null) {
    const value = left.constant + right.constant;
    if (!Number.isSafeInteger(value)) return { ok: false, error: "addition overflow" };
    return { ok: true, tree: { kind: "num", value }, constant: value };
  }
  return { ok: true, tree: { kind: "add", left: left.tree, right: right.tree }, constant: null };
}

console.assert(fold({ kind: "add", left: { kind: "num", value: 2 },
  right: { kind: "num", value: 3 } }).tree.value === 5);
console.assert(fold({ kind: "mystery" }).ok === false);
\`\`\`

## 7. Project: verified syntax-rewrite pipeline

**Brief.** Extend the AST with multiplication and negation. Implement a validator, evaluator with explicit environments, bottom-up constant folder, and node counter. Generate all well-formed trees through a chosen size over two variables and small literals. Check that folding preserves evaluation for several environments and never increases node count. Inject one deliberately unsound rewrite, such as $0\\ast x \\to  0$ when evaluation can throw for unbound $x$, and recover a smallest counterexample.

**Complete reference design.** Every operation returns $\\{ok,value\\}$ or $\\{ok:\\mathrm{false},\\mathrm{error}\\}$. Define semantic equivalence to include both successful values and error classes. The folder recurses first, folds only when required child values are literal and safe, and otherwise rebuilds. Enumerate trees by increasing size with canonical serialization for deduplication. Compare original and transformed results for every environment; breadth by size makes the first failure minimal in node count.

**Acceptance criteria.** Document grammar, integer model, error semantics, environment set, enumeration bound, case count, and counterexamples. Supply structural proofs of totality on validated trees, semantic preservation of each rewrite, and nonincrease of size. Enumeration is regression evidence; the induction proves the unbounded theorem.

## 8. Syntax with binding

Trees with variable binders introduce alpha-equivalence and capture. Substituting a tree for a variable is not plain textual replacement: bound variables may need fresh renaming. De Bruijn indices, locally nameless representations, or freshness disciplines make the obligation explicit.

A transformation preserving raw tree shape may still change meaning by capture. Later lambda-calculus chapters will prove a substitution lemma under a fixed representation.

## 9. Boundaries and certificates

- A parse tree certifies a grammar derivation, not program behavior.
- A type-state tree automaton checks only properties encoded by finite states.
- Copying transducers can grow output exponentially.
- Constant folding depends on numeric and error semantics.
- Equality modulo alpha-renaming differs from literal tree equality.
- Tests of generated trees do not replace structural induction.

## Exercises with complete solutions

### 1. Tree positions

List positions of $f(a,g(b,c))$ for binary $f,g$ and nullary $a,b,c$.

**Solution.** Positions are $\\varepsilon$ for $f$, $1$ for $a$, $2$ for $g$, $21$ for $b$, and $22$ for $c$.

### 2. Size recurrence

Prove $\\operatorname{size}(f(t_1,\\ldots,t_k))=1+\\sum_{i=1}^{k}\\operatorname{size}(t_i)$ counts nodes.

**Solution.** The root contributes one and child domains are disjoint once prefixed by their child indices. Structural induction confirms each child recurrence counts exactly its subtree.

### 3. Bottom-up run uniqueness

Why is a deterministic bottom-up run unique?

**Solution.** Leaves receive their states from nullary transitions. Inductively, once child states are unique, the transition function returns exactly one parent state.

### 4. Emptiness fixed point

Why does marking attainable states terminate?

**Solution.** At most $|Q|$ states can be newly marked. Every pass either adds a state or reaches a fixed point, so at most $|Q|$ productive additions occur.

### 5. Product states

How does intersection of two regular tree languages work?

**Solution.** Pair child states and apply both component transitions at each node. Accept a root pair exactly when both components accept. Structural induction shows the pair records both original runs.

### 6. Copying growth

Give a homomorphism with exponential output growth.

**Solution.** Map unary $f(x)$ to binary $g(x,x)$ and leaf $a$ to $a$. Input $f^n(a)$ produces a full binary tree with $2^n$ leaves, exponential in input depth and size.

### 7. Nondeleting

What does nondeleting guarantee?

**Solution.** Every input child variable appears at least once in the output pattern, so no entire child subtree is discarded. It does not guarantee one occurrence or preserve order.

### 8. Folding induction

State the induction step for addition.

**Solution.** Assume folded children have the same meanings as originals. If both are safe literals and their sum is also a safe integer, folding to that exact sum preserves meaning. If their sum is outside the safe-integer range, the transform returns its declared overflow rejection. Otherwise rebuilding $add$ from meaning-preserving children preserves the result. The semantic theorem is therefore relative to the stated safe-integer source contract and the transform's rejection policy.

### 9. Overflow boundary

Why does safe-integer validation belong to correctness?

**Solution.** JavaScript numbers cannot exactly represent every integer. Without the bound, the folded literal may differ from the intended exact sum, invalidating semantic preservation.

### 10. Error-preserving rewrite

Why can $0\\ast x \\to  0$ be unsound?

**Solution.** Under eager evaluation, evaluating $x$ may raise an unbound-variable error or another effect before multiplication. The rewritten constant skips that behavior.

### 11. Alpha-equivalence

Are $\\lambda x.x$ and $\\lambda y.y$ equal syntax trees?

**Solution.** Not literally if names are stored, but they are alpha-equivalent because consistent renaming of the bound variable preserves binding structure and meaning.

### 12. Minimal counterexample

Why enumerate trees by increasing size in the project?

**Solution.** The first failing tree then has minimum node count among enumerated candidates, producing a smaller and more diagnostic counterexample. It remains bounded evidence.

[Book overview](#/item/book-formal-computation-proof-reference)
`;export{e as default};