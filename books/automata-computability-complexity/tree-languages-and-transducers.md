
# Tree Languages, Syntax Transformations, and Transducers

Parsing produces structure, not merely acceptance. Compilers, theorem provers, query engines, and symbolic algebra systems then transform that structure. Trees make scope and nesting explicit, while ranked alphabets and tree automata recover a finite-state theory for them. Transducers add output, but useful correctness claims still require preservation theorems.

## Preparation and outcomes

Use finite automata, CFG parse trees and structural induction from the earlier chapters. All recognisability theorems here use a **finite ranked alphabet** and finite trees. The data-carrying literal and variable records in the retained folding program have additional payload semantics; that recursive program is not automatically a finite-state transducer over an infinite collection of literal or identifier labels. You will prove finite-tree subset and closure constructions, identify the role of linearity, and distinguish successful-transform preservation from a promise to accept every source tree.

## 1. Ranked trees and positions

A **ranked alphabet** assigns each symbol $f$ an arity $\operatorname{rank}(f)$. A finite $\Sigma$-tree is $f(t_1,...,t_k)$ when $\operatorname{rank}(f)=k$ and the $t_i$ are trees. Nullary symbols are leaves.

Positions are finite sequences of positive integers: $\varepsilon$ names the root and $\pi i$ the $i$th child of position $\pi$. The domain is prefix-closed and respects arities. A subtree $t|_{\pi}$, replacement $t[s]_{\pi}$, height, and size are defined recursively.

Structural induction proves $P(t)$ by showing it for every $f(t_1,...,t_k)$ from hypotheses $P(t_i)$. Unlike induction on serialized text length, it aligns directly with the constructors.

## 2. Bottom-up finite tree automata

A deterministic bottom-up tree automaton has finite states $Q$, accepting set $F$, and for every rank-$k$ symbol a transition $\delta_f:Q^k\to Q$. Its run labels each node from children upward:

$run(f(t_1,...,t_k))=\delta_f(run(t_1),...,run(t_k))$.

It accepts when the root state lies in $F$. Nondeterministic versions return possible state sets and have equal expressive power by a subset construction.

The recognized sets are **regular tree languages**. Product constructions give Boolean closure. Emptiness is a generating-state fixed point: mark states attainable at leaves, then repeatedly apply transitions; acceptance is possible exactly when an accepting state is marked.

### Example: well-typed Boolean expressions

Use ranked symbols $\mathrm{true},\mathrm{false}$ of rank zero, $\neg$ rank one, and $and$ rank two. One state $\mathrm{Bool}$ suffices when every constructor is well formed. Adding integer leaves and $plus$ creates states $\mathrm{Bool},\mathrm{Int},\mathrm{Error}$; transitions implement a finite type checker. Acceptance of non-error roots proves only this small static discipline, not evaluation correctness.

## 3. Top-down automata differ

A top-down automaton starts at the root and chooses states for children. Deterministic top-down automata are strictly weaker than nondeterministic ones because a root decision may need correlated information from separate subtrees that is unavailable before descending. Bottom-up determinism can combine completed child summaries.

This contrasts with word automata, where reversing direction does not create the same expressive asymmetry. Tree branching changes information flow.

## 4. Tree homomorphisms

A tree homomorphism maps each rank-$k$ symbol $f$ to an output tree pattern $h_f(x_1,...,x_k)$ and substitutes recursively. It is **linear** when no variable is duplicated and **nondeleting** when every variable occurs. Duplication can cause exponential output growth under nesting; deletion can discard semantically relevant subtrees.

Correctness is usually compositional. If interpretation $[\![ t]\!]$ lies in semantic domain $D$, a transformation $h$ preserves meaning when

$[\![ h(t)]\!]_{\mathrm{out}}=[\![ t]\!]_{\mathrm{in}}$

for every well-formed input. Prove it by structural induction, with one lemma per constructor pattern. Syntax equality is not the goal.

## 5. Bottom-up transducers

A deterministic bottom-up tree transducer associates output construction with state transitions. Each input node consumes child states and child outputs, then returns a new state and output tree. A top-down transducer instead expands an output pattern while recursively invoking states on selected input children.

Important dimensions are deterministic versus nondeterministic, linear versus copying, deleting versus nondeleting, and total versus partial. “Tree transducer” alone does not specify expressiveness or termination behavior.

### Constant folding

For expression constructors $num(n)$, $add(x,y)$, and $var(name)$, return a pair $(known,value-or-tree)$. Two known numeric children fold to one numeral; otherwise rebuild the node. The invariant is semantic preservation under every variable environment. Integer overflow, effects, exceptions, and floating-point reassociation can invalidate a seemingly obvious fold, so the source language's numeric semantics are part of the contract.

## 6. Dependency-free reference transformer

On finite acyclic ASTs whose depth fits the runtime's recursion budget, this JavaScript function validates the supported constructors while folding exact safe-integer additions. Cyclic objects and unbounded nesting lie outside that input contract. Unsupported or malformed nodes, including additions whose result is not a safe integer, return typed transformation errors rather than being silently copied. Those errors express rejection by this transformer; they need not equal the source language's runtime behavior unless the source semantics declares the same error class.

```js
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
  if (node.kind !== "add") return { ok: false, error: `unknown kind: ${node.kind}` };
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
```

## 7. Project: verified syntax-rewrite pipeline

**Brief.** Extend the AST with multiplication and negation. Implement a validator, evaluator with explicit environments, bottom-up constant folder, and node counter. Generate all well-formed trees through a chosen size over two variables and small literals. Check that folding preserves evaluation for several environments and never increases node count. Inject one deliberately unsound rewrite, such as $0\ast x \to  0$ when evaluation can throw for unbound $x$, and recover a smallest counterexample.

**Complete reference design.** Every operation returns $\{ok,value\}$ or $\{ok:\mathrm{false},\mathrm{error}\}$. Define semantic equivalence to include both successful values and error classes. The folder recurses first, folds only when required child values are literal and safe, and otherwise rebuilds. Enumerate trees by increasing size with canonical serialization for deduplication. Compare original and transformed results for every environment; breadth by size makes the first failure minimal in node count.

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


## Complete finite-tree automaton constructions

**Theorem 8.1 (Bottom-up determinisation).** A nondeterministic finite bottom-up tree automaton has an equivalent complete deterministic one.

*Proof.* Let its possible transitions on rank-$k$ symbol $f$ be tuples $(q_1,\ldots,q_k,q)$. Deterministic states are subsets of the old state set. On child subsets $S_1,\ldots,S_k$, return all $q$ for which there exist $q_i\in S_i$ with the indicated transition. At a nullary symbol this is simply its possible old leaf states. Accept a subset exactly when it intersects the old accepting set.

Structural induction proves that the subset computed at any node is precisely the set of states obtainable at that node by old runs on its subtree. In one direction an old run supplies its child states and transition; in the other, states witnessing the new transition can be combined with child runs supplied by induction. Thus root acceptance coincides. The transition is defined even when some subset is empty, returning the empty set, so the deterministic machine is complete. ∎

Products of complete deterministic tree automata pair their child summaries and apply both component transitions. Structural induction gives both original root states, so accepting both gives intersection and accepting either gives union. Replacing the accepting set by its complement gives complement relative to all finite ground trees over the fixed ranked alphabet. An incomplete table first needs a rejecting sink, just as for words.

**Theorem 8.2 (Emptiness by attainable states).** Iteratively marking nullary outputs and outputs whose child states are marked gives exactly all attainable root states.

*Proof.* Every initial mark has a one-node tree witness. Every later mark combines finite witness trees for its transition arguments into a witness for that output. Conversely, structural induction on a tree shows that all of its child run states are eventually marked and then its root state is marked. Only finitely many states can be added, so the process reaches a fixed point. The language is empty exactly when no accepting state is marked. If the ranked alphabet has no nullary symbols, there are no finite ground trees, the marking begins empty and the accepted language is empty. ∎

For nondeterministic automata the same marking uses each allowed transition. This does not require determinisation merely to decide emptiness. Witness trees can be stored when a state is first marked; reconstructing one proves nonemptiness, while a closed marked set disjoint from acceptance proves emptiness.

## Why deterministic top-down reading loses power

**Theorem 8.3 (A strict top-down boundary).** Ordinary deterministic top-down automata with one initial state and no lookahead recognize a proper subclass of regular finite-tree languages.

*Proof of strictness.* The finite language $K=\{f(a,b),f(b,a)\}$, with binary $f$ and distinct nullary $a,b$, is regular: a bottom-up automaton records which leaf occurs and accepts exactly the two indicated root combinations, sending all other combinations to a rejecting state. Suppose a deterministic top-down automaton recognized $K$. Its initial transition on $f$ must prescribe one fixed pair of child states $(p,q)$. Acceptance of $f(a,b)$ requires $p$ to accept $a$ and $q$ to accept $b$. Acceptance of $f(b,a)$ requires $p$ to accept $b$ and $q$ to accept $a$. Then it also accepts $f(a,a)$, a contradiction.

For inclusion in regular tree languages, ordinary nondeterministic top-down runs can be read as nondeterministic bottom-up runs by reversing each local transition condition and making the allowed root states accepting. Conversely any bottom-up run can be guessed top-down: choose an accepting root state, then at each symbol choose a compatible tuple of child states. Nullary checks end the branches. The local constraints are identical, so runs correspond in both directions. Deterministic top-down automata are special cases, proving inclusion; the example proves it is strict. ∎

The restriction matters: additional regular lookahead changes the model by supplying child information before descending. The theorem does not claim that every system called a top-down processor has the same limitation.

## Homomorphism closure with its exact hypotheses

**Theorem 8.4 (Inverse images).** The inverse image of a regular tree language under any finite specified tree homomorphism is regular, including copying and deleting homomorphisms.

*Proof.* Take a complete deterministic automaton for the output language. For input symbol $f$ of rank $k$ and child states $q_1,\ldots,q_k$, evaluate its output pattern $h_f(x_1,\ldots,x_k)$ using the output automaton, treating each variable $x_i$ as a leaf already carrying state $q_i$. This finite calculation defines an input transition on the same state set. A duplicated variable is evaluated with that same state at each occurrence; a deleted variable does not affect the calculation. Structural induction gives input-root state equal to the old automaton's root state on $h(t)$. Keeping its accepting set therefore recognises exactly the inverse image. ∎

**Theorem 8.5 (Linear images).** The image of a regular tree language under a linear tree homomorphism is regular. Deletion is permitted, but copying is not included in this theorem.

*Proof.* Use a bottom-up automaton for the source and first restrict to attainable states, found by Theorem 8.2. Introduce a regular tree-grammar nonterminal $A_q$ for each state. For each source transition $f(q_1,\ldots,q_k)\to q$, add a production with left side $A_q$ and right side $h_f$ with variable $x_i$ replaced by $A_{q_i}$. Add a start choice for each accepting source state. Each nonterminal is a leaf position in a finite output pattern. These are finite regular tree-grammar rules: helper nonterminals can break a long pattern into one-symbol rules, and finite unit-rule closure removes a pattern consisting of just one nonterminal. Such rules are read directly as bottom-up transitions, so their language is recognisable.

To prove the grammar's exactness, induct on a source tree for one direction. Its child images have derivations from their child-state nonterminals; the corresponding transition production combines them into its image. For the other direction, induct on a finite output derivation. Each used child nonterminal has a source-tree witness by induction. Because the pattern is linear, each original child is requested at most once, so choose that witness as the child. For a deleted child, choose any ground witness for its designated attainable state; this is why unattainable states were excluded. The resulting input node has the required source transition and its image is precisely the derived output pattern. Applying acceptance proves equality with the claimed image language. ∎

The regular-grammar argument would fail for a duplicated variable: two separate nonterminal occurrences could derive different trees, whereas a homomorphism copying one child must copy the same tree. That missing equality constraint is a real mathematical obstruction.

## Worked example 1: copying produces a nonregular image

Let the source alphabet have unary $u$ and nullary $a$, and take all source trees $u^n(a)$. This language is regular, recognized by one accepting state. Set $h(a)=a$ and $h_u(x)=g(x,x)$ for binary $g$. Its image consists of $t_0=a$, $t_{n+1}=g(t_n,t_n)$, the perfect binary trees. Their leaf counts are $2^n$, by induction, showing exponential growth from a linear-size input chain.

The image is not regular. If a finite deterministic bottom-up automaton recognized it, two different perfect trees $t_i,t_j$ with $i<j$ would have the same root state. Since $g(t_i,t_i)=t_{i+1}$ is accepted, replacing its left child by $t_j$ would preserve the root state and acceptance. But $g(t_j,t_i)$ has children of different heights and is not any perfect tree. This contradiction proves nonregularity and shows why the linear-image hypothesis cannot be discarded.

## Worked example 2: recognising production trees

For a fixed CFG, make each production a ranked symbol whose rank is the number of symbols on its right side; terminals are nullary symbols. A production node $p:A\to X_1\cdots X_k$ is valid exactly when its ordered child summaries are $X_1,\ldots,X_k$, and then returns state $A$. A terminal leaf returns its terminal state. A mismatching combination returns an error state, and root state $S$ accepts. Epsilon productions are nullary production nodes returning their left-side variable.

Induction proves that accepted production-labelled trees are exactly the CFG's parse trees. Reading their terminal leaves gives the grammar language. For $S\to aSb\mid\varepsilon$, two recursive production nodes over the epsilon node yield $aabb$. Regularity of the tree set does not imply regularity of its yields: the flattening yield operation is not an ordinary homomorphism into the same category of ranked trees retaining its branching constructors. The tree can preserve nested structure that the terminal word omits.

## Worked example 3: successful folding and a distinct rejection case

For pure exact-integer addition, the tree $add(var(x),add(num(2),num(3)))$ folds to $add(var(x),num(5))$. Under any integer environment assigning $x$ value $r$, both evaluate to $r+5$. If missing-variable errors are included with the same eager left-to-right semantics, both also fail on a missing $x$ before producing a result. The inner rewrite has removed no variable read or other effect.

The retained program instead rejects a known constant sum outside JavaScript's safe-integer range. Exact mathematical addition could still have a value for that input. Thus transformer rejection is a declared domain boundary and is not automatically the source program's runtime error. A sound statement is partial correctness: whenever the transformer returns success on its validated finite acyclic input, its tree has the same meaning under the specified source semantics. A theorem of total successful transformation would need a stronger input domain or a different representation of large integers.

## The semantic induction for folding

On supported finite acyclic trees within the stated recursion budget, every recursive call receives a proper child subtree. For successful returns, structural induction proves meaning preservation. A numeral retains its exact value. A variable retains its name and therefore the same environment lookup. An addition receives successful meaning-preserving child transformations; if both results are literal safe integers with a safe sum, replacing them by that exact literal preserves addition. Otherwise a successful rebuild preserves constructor order and the children's meanings. Rejected recursive calls make no successful-output claim.

These are semantic facts about the retained reference transformer, not a claim that finite-state types prove arbitrary arithmetic or that code examples executed during reading. If the language gains effects, exceptions with evaluation order, binding or approximate arithmetic, the observation relation and constructor lemmas must be adjusted before transferring this proof. Raw tree equality, alpha-equivalence, semantic equality and equality of error observations remain different relations.

## Exercises with complete solutions

### Exercise 1 — Tree positions
<a id="tree-languages-and-transducers-ex-1"></a>

List positions of $f(a,g(b,c))$ for binary $f,g$ and nullary $a,b,c$.

<details>
<summary>Hint 1</summary>

Start at the root and append child indices.

</details>
<details>
<summary>Hint 2</summary>

The second child’s own children add another index to its position.

</details>
<details>
<summary>Solution</summary>

**Solution.** Positions are $\varepsilon$ for $f$, $1$ for $a$, $2$ for $g$, $21$ for $b$, and $22$ for $c$.

</details>

### Exercise 2 — Size recurrence
<a id="tree-languages-and-transducers-ex-2"></a>

Prove $\operatorname{size}(f(t_1,\ldots,t_k))=1+\sum_{i=1}^{k}\operatorname{size}(t_i)$ counts nodes.

<details>
<summary>Hint 1</summary>

Partition nodes into the root and prefixed child domains.

</details>
<details>
<summary>Hint 2</summary>

Those prefixed domains are disjoint, even when subtrees have equal shape.

</details>
<details>
<summary>Solution</summary>

**Solution.** The root contributes one and child domains are disjoint once prefixed by their child indices. Structural induction confirms each child recurrence counts exactly its subtree.

</details>

### Exercise 3 — Bottom-up run uniqueness
<a id="tree-languages-and-transducers-ex-3"></a>

Why is a deterministic bottom-up run unique?

<details>
<summary>Hint 1</summary>

A nullary transition fixes each leaf state.

</details>
<details>
<summary>Hint 2</summary>

Apply the deterministic function to already fixed child states.

</details>
<details>
<summary>Solution</summary>

**Solution.** Leaves receive their states from nullary transitions. Inductively, once child states are unique, the transition function returns exactly one parent state.

</details>

### Exercise 4 — Emptiness fixed point
<a id="tree-languages-and-transducers-ex-4"></a>

Why does marking attainable states terminate?

<details>
<summary>Hint 1</summary>

Count how many genuinely new states may be marked.

</details>
<details>
<summary>Hint 2</summary>

A pass with no additions has reached the transition-closed fixed point.

</details>
<details>
<summary>Solution</summary>

**Solution.** At most $|Q|$ states can be newly marked. Every pass either adds a state or reaches a fixed point, so at most $|Q|$ productive additions occur.

</details>

### Exercise 5 — Product states
<a id="tree-languages-and-transducers-ex-5"></a>

How does intersection of two regular tree languages work?

<details>
<summary>Hint 1</summary>

Track both automata at every node.

</details>
<details>
<summary>Hint 2</summary>

Accept the root pair only when both components accept.

</details>
<details>
<summary>Solution</summary>

**Solution.** Pair child states and apply both component transitions at each node. Accept a root pair exactly when both components accept. Structural induction shows the pair records both original runs.

</details>

### Exercise 6 — Copying growth
<a id="tree-languages-and-transducers-ex-6"></a>

Give a homomorphism with exponential output growth.

<details>
<summary>Hint 1</summary>

Duplicate the recursively transformed child of a unary input node.

</details>
<details>
<summary>Hint 2</summary>

Count output leaves along a chain of unary nodes.

</details>
<details>
<summary>Solution</summary>

**Solution.** Map unary $f(x)$ to binary $g(x,x)$ and leaf $a$ to $a$. Input $f^n(a)$ produces a full binary tree with $2^n$ leaves, exponential in input depth and size.

</details>

### Exercise 7 — Nondeleting
<a id="tree-languages-and-transducers-ex-7"></a>

What does nondeleting guarantee?

<details>
<summary>Hint 1</summary>

Check occurrence of each child variable in the output pattern.

</details>
<details>
<summary>Hint 2</summary>

Nondeleting says at least once, whereas linear says at most once.

</details>
<details>
<summary>Solution</summary>

**Solution.** Every input child variable appears at least once in the output pattern, so no entire child subtree is discarded. It does not guarantee one occurrence or preserve order.

</details>

### Exercise 8 — Folding induction
<a id="tree-languages-and-transducers-ex-8"></a>

State the induction step for addition.

<details>
<summary>Hint 1</summary>

Use successful child transformations as induction hypotheses.

</details>
<details>
<summary>Hint 2</summary>

Separate exact safe folding, rebuilding and declared rejection.

</details>
<details>
<summary>Solution</summary>

**Solution.** Assume folded children have the same meanings as originals. If both are safe literals and their sum is also a safe integer, folding to that exact sum preserves meaning. If their sum is outside the safe-integer range, the transform returns its declared overflow rejection. Otherwise rebuilding $add$ from meaning-preserving children preserves the result. The semantic theorem is therefore relative to the stated safe-integer source contract and the transform's rejection policy.

</details>

### Exercise 9 — Overflow boundary
<a id="tree-languages-and-transducers-ex-9"></a>

Why does safe-integer validation belong to correctness?

<details>
<summary>Hint 1</summary>

The host number representation has a finite exact-integer range.

</details>
<details>
<summary>Hint 2</summary>

A mathematical sum outside it need not be exactly representable as a literal.

</details>
<details>
<summary>Solution</summary>

**Solution.** JavaScript numbers cannot exactly represent every integer. Without the bound, the folded literal may differ from the intended exact sum, invalidating semantic preservation.

</details>

### Exercise 10 — Error-preserving rewrite
<a id="tree-languages-and-transducers-ex-10"></a>

Why can $0\ast x \to  0$ be unsound?

<details>
<summary>Hint 1</summary>

Specify what evaluating the discarded child can observe.

</details>
<details>
<summary>Hint 2</summary>

Eager missing-variable errors survive multiplication by zero in the source.

</details>
<details>
<summary>Solution</summary>

**Solution.** Under eager evaluation, evaluating $x$ may raise an unbound-variable error or another effect before multiplication. The rewritten constant skips that behavior.

</details>

### Exercise 11 — Alpha-equivalence
<a id="tree-languages-and-transducers-ex-11"></a>

Are $\lambda x.x$ and $\lambda y.y$ equal syntax trees?

<details>
<summary>Hint 1</summary>

Literal names are stored in the syntax tree.

</details>
<details>
<summary>Hint 2</summary>

Consistently renaming a binder preserves binding without preserving those bytes.

</details>
<details>
<summary>Solution</summary>

**Solution.** Not literally if names are stored, but they are alpha-equivalent because consistent renaming of the bound variable preserves binding structure and meaning.

</details>

### Exercise 12 — Minimal counterexample
<a id="tree-languages-and-transducers-ex-12"></a>

Why enumerate trees by increasing size in the project?

<details>
<summary>Hint 1</summary>

Choose the order on candidate size before enumeration.

</details>
<details>
<summary>Hint 2</summary>

The first failure is minimal only among candidates actually covered.

</details>
<details>
<summary>Solution</summary>

**Solution.** The first failing tree then has minimum node count among enumerated candidates, producing a smaller and more diagnostic counterexample. It remains bounded evidence.

</details>

[Book overview](#/books/automata-computability-complexity)

## Sources

The native CC BY-SA 4.0 source is Euler's *Formal Computation* chapter of the same name, retaining its original transformer code, project, examples and twelve solutions. The finite-tree proofs, image counterexample and additional worked cases are new exposition. The primary monograph is Hubert Comon and coauthors, *Tree Automata Techniques and Applications*, available through its [author publication record](https://move.lis-lab.fr/publications) and [HAL record hal-03367725](https://inria.hal.science/hal-03367725); the retained formal bibliography records the authors' edition link as well. The recognisability results here explicitly distinguish arbitrary inverse homomorphisms from linear direct images. No unrestricted copying-image closure or inspection of an unavailable PDF is claimed.

## Summary

Finite ranked trees support bottom-up determinisation, Boolean closure and attainable-state emptiness proofs. Ordinary deterministic top-down reading has a strict information limitation. Inverse homomorphisms preserve recognisability even with copying, while direct-image closure requires linearity; perfect binary trees give a concrete copying counterexample. Production trees can be regular while their yields are context-free. Recursive constant folding requires its own arithmetic and observation semantics, with successful preservation distinguished from rejection. The next part moves from these finite descriptions to general machines and effective computation.
