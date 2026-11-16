var e=`---
parent_id: book-formal-computation-proof-reference
chapter_id: logic-of-regular-languages
title: "Logical Descriptions and the Limits of Finite Memory"
level: advanced-undergraduate
estimated_minutes: 240
license: CC BY-SA 4.0
---

# Logical Descriptions and the Limits of Finite Memory

A word can be viewed not only as input to a machine but as a finite mathematical structure. Positions are ordered, and unary predicates say which letter occurs at each position. Logic can then describe relationships among positions. This view exposes a precise correspondence: monadic second-order logic describes exactly the regular languages. First-order logic describes a strict, algebraically characterized fragment. Pumping and congruence arguments show what finite memory cannot express.

## 1. Words as finite structures

For word $w=a_0...a_{n-1}$ over alphabet $\\Sigma$, define structure

$W_w=(\\{0,...,n-1\\}, <, (P_a)_{a \\in \\Sigma})$,

where $<$ is the usual order and $P_a(i)$ holds exactly when position $i$ carries $a$. Every position satisfies exactly one letter predicate. The empty word has empty domain.

First-order variables $x,y,\\ldots$ range over positions. Atomic formulas include $x=y$, $x<y$, and $P_a(x)$. Formulas are built with Boolean connectives and quantifiers $\\exists x$, $\\forall x$. A **sentence** has no free variables and therefore gives a yes/no property of the whole word.

For example, “some $a$ occurs before a $b$” is

$\\exists x\\,\\exists y\\;(P_a(x) \\land P_b(y) \\land x<y)$.

“Every $a$ is followed later by a $b$” is

$\\forall x\\;(P_a(x) \\to \\exists y\\;(x<y \\land P_b(y)))$.

The successor relation is definable from order:

$\\operatorname{succ}(x,y) := x<y \\land
\\neg\\exists z\\;(x<z \\land z<y)$.

First and last positions are likewise definable, but any formula mentioning them must handle the empty domain explicitly.

## 2. Monadic second-order logic

Monadic second-order logic (MSO) adds variables $X,Y,...$ ranging over sets of positions and atomic membership $X(x)$. “The selected positions alternate parity from the first position” can be expressed by choosing a set $X$, putting the first position in it, and requiring successor steps to toggle membership.

This ability to quantify a set lets a formula encode an entire finite automaton run. For DFA $A=(Q,\\Sigma,\\delta,q_0,F)$, introduce one set variable $X_q$ for each state. Intended meaning: $i \\in X_q$ when the machine is in state $q$ **after reading position $i$**.

An MSO sentence asserts:

1. the $X_q$ partition the positions;
2. at the first position, its letter moves $q_0$ to the assigned state;
3. successive assigned states respect $\\delta$ and the next letter;
4. the last assigned state is accepting;
5. the empty word is handled according to whether $q_0 \\in F$.

There is only one deterministic run, but existentially quantifying its state sets makes the representation logical.

## 3. Büchi–Elgot–Trakhtenbrot correspondence

**Theorem 15.1.** A language of finite words is regular if and only if it is definable by an MSO sentence over order and letter predicates.

The automaton-to-logic direction is the run encoding above. The logic-to-automaton direction proceeds by induction on formulas with free variables represented as extra tracks in the alphabet.

Encode a valuation by augmenting each word position with bits indicating which first-order variable is placed there and which set variables contain it. Atomic properties such as order, equality, letter, and membership are checked by finite automata. Boolean connectives use regular closure. Existential quantification erases a valuation track, which is a homomorphic projection; the automaton nondeterministically guesses the erased track. Universal quantification follows by negation and existential quantification.

First-order variables require a validity constraint: exactly one position carries their marker. Empty-word cases and free-variable conventions must be treated explicitly. The induction constructs an automaton, but repeated projection and determinization can cause severe size growth. The theorem is about expressiveness, not a claim of cheap translation.

## 4. First-order logic is strictly weaker

First-order logic over word order, written $FO[<]$, is the fragment without set quantification. Every FO-definable language is regular, but not every regular language is FO-definable. The language “the number of $a$ symbols is even” is regular yet not definable in $FO[<]$.

The deep algebraic characterization is:

**Theorem 15.2 (McNaughton–Papert–Schützenberger).** A regular language is $FO[<]$-definable exactly when its syntactic monoid is aperiodic: for every element $s$, some $n\\ge 1$ satisfies $s^n=s^{n+1}$.

Equivalently, these are the star-free regular languages built from finite languages using Boolean operations and concatenation, without Kleene star. “Star-free” does not mean finite; complement makes unbounded properties possible.

Parity fails aperiodicity. Its syntactic monoid contains a two-element group generated by toggling parity, so powers alternate rather than stabilize. A complete proof of the characterization requires an extended induction between aperiodic monoids and logical formulas; here we use the theorem with its hypotheses visible rather than pretending the result is immediate.

## 5. Ehrenfeucht–Fraïssé proof intuition

First-order inexpressibility can also be shown by games. In an $r$-round Ehrenfeucht–Fraïssé game on two word structures, Spoiler selects a position in either word, and Duplicator responds in the other. After $r$ rounds, Duplicator wins if selected positions preserve equality, order, and letter predicates.

If Duplicator has a winning strategy for $r$ rounds, the structures satisfy the same first-order sentences of quantifier rank at most $r$. Long homogeneous or regularly repeating regions let Duplicator preserve relative order and enough surrounding room. For each fixed $r$, sufficiently long even- and odd-parity words cannot be distinguished by rank-$r$ first-order sentences, although parity membership differs. Therefore no one FO sentence defines parity.

This is not merely “FO cannot count.” FO can express any fixed threshold, such as “at least 17 positions,” using 17 variables. It cannot uniformly compute unbounded modular parity in this signature.

## 6. Finite-memory impossibility methods

Three methods serve different proof needs:

- **Nerode families** give exact state lower bounds or infinite index.
- **Pumping arguments** exploit a repeated state but rarely give exact bounds.
- **Logical/algebraic methods** separate subclasses within regular languages, such as FO from MSO.

To show $\\{0^n1^n:n\\ge 0\\}$ is not regular, a Nerode family $0^i$ with witnesses $1^i$ is direct. To show parity is regular but not first-order, pumping cannot help because the language is regular; aperiodicity or an EF game is appropriate. Choose the theorem matching the boundary.

## 7. A small executable semantics

For finite words, direct evaluation of an FO abstract syntax tree is a trustworthy reference oracle for small cases. It is not a parser or a decision procedure for all logical equivalences. The following dependency-free JavaScript uses explicit environments and quantifier enumeration.

\`\`\`js
function evaluate(formula, word, environment = {}) {
  switch (formula.kind) {
    case "letter": return word[environment[formula.variable]] === formula.value;
    case "less": return environment[formula.left] < environment[formula.right];
    case "equal": return environment[formula.left] === environment[formula.right];
    case "not": return !evaluate(formula.body, word, environment);
    case "and": return formula.items.every((item) => evaluate(item, word, environment));
    case "or": return formula.items.some((item) => evaluate(item, word, environment));
    case "exists":
      for (let position = 0; position < word.length; position += 1) {
        if (evaluate(formula.body, word, { ...environment, [formula.variable]: position })) return true;
      }
      return false;
    case "forall":
      for (let position = 0; position < word.length; position += 1) {
        if (!evaluate(formula.body, word, { ...environment, [formula.variable]: position })) return false;
      }
      return true;
    default: throw new Error(\`unknown formula kind: \${formula.kind}\`);
  }
}

const someABeforeB = {
  kind: "exists", variable: "x", body: {
    kind: "exists", variable: "y", body: {
      kind: "and", items: [
        { kind: "letter", variable: "x", value: "a" },
        { kind: "letter", variable: "y", value: "b" },
        { kind: "less", left: "x", right: "y" }
      ]
    }
  }
};

console.assert(evaluate(someABeforeB, "baab") === true);
console.assert(evaluate(someABeforeB, "bbaa") === false);
console.assert(evaluate({ kind: "forall", variable: "x", body:
  { kind: "equal", left: "x", right: "x" } }, "") === true);
\`\`\`

The last assertion audits vacuous truth on the empty domain. Production tools should validate the AST, reject unbound variables, cap resource use, and return structured errors; the small oracle isolates semantic content.

## 8. Project: formula oracle and automaton cross-check

**Project brief.** Extend the evaluator with implication and a derived successor constructor. Implement exhaustive word generation up to a chosen bound. For each of the following properties, build both an FO formula and a DFA, then compare their results on every generated word: contains $ab$; begins and ends with the same letter, with a deliberate empty-word convention; and has no adjacent equal letters. Include a negative test obtained by mutating one DFA transition. Report the shortest counterexample.

**Complete reference design.** Define implication as $\\neg A \\lor B$; define successor by $x<y$ and absence of an intermediate $z$. Generate words breadth-first so the first mismatch is shortest. The DFA runner maintains one named state and rejects malformed symbols. For each word, compare $evaluate(formula,w)$ to $accepts(dfa,w)$; return immediately on disagreement. The three properties need only finite-state histories: whether $ab$ has occurred; first and current last letter; or previous letter plus a failure sink. The mutated transition must produce a mismatch if the bound reaches a distinguishing word.

**Acceptance criteria.** Tests include $\\varepsilon$, one-letter words, both alphabet symbols, and all words through length six. The report records alphabet, formula AST, DFA table, bound, number of words tested, and any counterexample. Passing bounded tests is explicitly labeled evidence, not a proof of equivalence. The proof obligation is discharged separately by a state invariant for each DFA and a structural interpretation of each formula.

## 9. Scope boundaries

- The correspondence here concerns finite words. Infinite words require omega-automata and different acceptance conditions.
- Adding arithmetic predicates to position logic changes expressive power.
- MSO quantifies sets of positions, not arbitrary sets of sets or binary relations.
- “The translation exists” does not imply manageable output size.
- Model checking a fixed finite word is not the same problem as deciding whether a sentence has some model or whether two formulas define the same language.

## Exercises with complete solutions

### 1. First position

Write an FO formula saying $x$ is the first position.

**Solution.** Use $\\operatorname{first}(x) := \\neg\\exists y\\;(y<x)$. On the empty word no position can be assigned to $x$; a sentence asserting an $a$ first position is $\\exists x\\;(\\operatorname{first}(x) \\land P_a(x))$.

### 2. Exactly one $a$

Write an FO sentence for words containing exactly one $a$.

**Solution.** $\\exists x\\;(P_a(x) \\land \\forall y\\;(P_a(y) \\to y=x))$. Existence supplies one occurrence and the universal clause makes every occurrence identical to it.

### 3. Adjacent $ab$

Define “the word contains adjacent letters $ab$.”

**Solution.** $\\exists x\\,\\exists y\\;(P_a(x) \\land P_b(y) \\land \\operatorname{succ}(x,y))$, where $\\operatorname{succ}$ is the order formula from Section 1.

### 4. Empty-domain universal

Why is $\\forall x\\,P_a(x)$ true on $\\varepsilon$ under the stated word-structure semantics?

**Solution.** A universal statement is false only if some domain element violates its body. The empty domain has no counterexample, so the statement is vacuously true. If nonemptiness is intended, conjoin $\\exists x\\;(x=x)$.

### 5. DFA runs as sets

Why must the MSO run encoding assert that the state sets form a partition?

**Solution.** Without coverage, some positions could have no state; without disjointness, one position could carry several incompatible states. A deterministic run assigns exactly one state after each consumed position, so both clauses are required.

### 6. Projection and nondeterminism

Why does erasing an existentially quantified valuation track lead naturally to an NFA?

**Solution.** The projected input omits which positions satisfy the quantified assignment. The machine may guess those bits while reading and accept if some guessed annotation satisfies the original formula. Existential choice is exactly NFA acceptance semantics.

### 7. FO is regular

Give the main inductive ingredients showing every FO-definable word language is regular.

**Solution.** Automata recognize atomic order, equality, and letter constraints on annotated words. Boolean connectives use product and complement closure. Existential quantification projects away an annotation track using nondeterminism; universal quantification is reduced to negation and existential quantification. Validity automata ensure first-order markers occur exactly once.

### 8. Fixed counting

Show “the word has at least three positions” is FO-definable.

**Solution.** Use $\\exists x\\,\\exists y\\,\\exists z\\;(x<y \\land y<z)$. Three strictly ordered positions are distinct, and any word of length at least three supplies them.

### 9. Aperiodicity failure for parity

Why is the parity transition element not aperiodic?

**Solution.** Reading one $a$ swaps even and odd states. Its powers alternate between the swap and identity. Thus no $n$ satisfies $s^n=s^{n+1}$; the two consecutive powers always differ.

### 10. Choosing a boundary method

Why can the regular pumping lemma not prove that parity is not FO-definable?

**Solution.** Parity is regular and therefore satisfies the pumping lemma. The desired separation lies inside the regular languages. One needs a theorem sensitive to the FO fragment, such as aperiodic syntactic monoids or EF games.

### 11. Bounded testing

What does exhaustive agreement through length $k$ establish?

**Solution.** It establishes agreement on exactly the finite tested set, and may locate short counterexamples. It proves full equivalence only if an independently proved completeness bound at most $k$ applies to the representations.

### 12. Infinite-word warning

Why does accepting at the final position not define an automaton semantics for infinite words?

**Solution.** An infinite word has no final position. Acceptance must instead concern the infinite run, for example visiting designated states infinitely often. Such conditions lead to omega-automata and lie outside the finite-word theorem stated here.

[Book overview](#/item/book-formal-computation-proof-reference)
`;export{e as default};