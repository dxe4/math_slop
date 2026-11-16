
# Logical Descriptions and the Limits of Finite Memory

A word can be viewed not only as input to a machine but as a finite mathematical structure. Positions are ordered, and unary predicates say which letter occurs at each position. Logic can then describe relationships among positions. This view exposes a precise correspondence: monadic second-order logic describes exactly the regular languages. First-order logic describes a strict, algebraically characterized fragment. Pumping and congruence arguments show what finite memory cannot express.

## Preparation and outcomes

Use automata closure and transformation proofs from Chapters 1–3 and the finite syntactic-monoid criterion of Chapter 4. Basic first-order syntax and capture avoidance are taught in [Introduction to Logic and Set Theory](#/books/introduction-to-logic-and-set-theory); the semantics needed for word formulas is specified here. You will encode a complete run as sets, construct an automaton from a formula, and identify exactly where singleton markers and the empty word matter.

**Word-domain convention.** This chapter deliberately permits the empty relational domain for the empty word. Its semantics is therefore a specialised finite-word convention, distinct from the nonempty-domain convention of the general first-order completeness theorem. An environment assigns the free first-order variables to positions and the free set variables to subsets of positions. If a word is empty and a formula has a free first-order variable, no such environment exists. A sentence has no free first-order variables and can still be evaluated: existential position quantification over no positions is false, universal position quantification is true, and set quantification ranges over the singleton power set containing the empty set. No general nonempty-domain inference is being applied to that special case.

## 1. Words as finite structures

For word $w=a_0...a_{n-1}$ over alphabet $\Sigma$, define structure

$W_w=(\{0,...,n-1\}, <, (P_a)_{a \in \Sigma})$,

where $<$ is the usual order and $P_a(i)$ holds exactly when position $i$ carries $a$. Every position satisfies exactly one letter predicate. The empty word has empty domain.

First-order variables $x,y,\ldots$ range over positions. Atomic formulas include $x=y$, $x<y$, and $P_a(x)$. Formulas are built with Boolean connectives and quantifiers $\exists x$, $\forall x$. A **sentence** has no free variables and therefore gives a yes/no property of the whole word.

For example, “some $a$ occurs before a $b$” is

$\exists x\,\exists y\;(P_a(x) \land P_b(y) \land x<y)$.

“Every $a$ is followed later by a $b$” is

$\forall x\;(P_a(x) \to \exists y\;(x<y \land P_b(y)))$.

The successor relation is definable from order:

$\operatorname{succ}(x,y) := x<y \land
\neg\exists z\;(x<z \land z<y)$.

First and last positions are likewise definable, but any formula mentioning them must handle the empty domain explicitly.

## 2. Monadic second-order logic

Monadic second-order logic (MSO) adds variables $X,Y,...$ ranging over sets of positions and atomic membership $X(x)$. “The selected positions alternate parity from the first position” can be expressed by choosing a set $X$, putting the first position in it, and requiring successor steps to toggle membership.

This ability to quantify a set lets a formula encode an entire finite automaton run. For DFA $A=(Q,\Sigma,\delta,q_0,F)$, introduce one set variable $X_q$ for each state. Intended meaning: $i \in X_q$ when the machine is in state $q$ **after reading position $i$**.

An MSO sentence asserts:

1. the $X_q$ partition the positions;
2. at the first position, its letter moves $q_0$ to the assigned state;
3. successive assigned states respect $\delta$ and the next letter;
4. the last assigned state is accepting;
5. the empty word is handled according to whether $q_0 \in F$.

There is only one deterministic run, but existentially quantifying its state sets makes the representation logical.

## 3. Büchi–Elgot–Trakhtenbrot correspondence

**Theorem 5.4.** A language of finite words is regular if and only if it is definable by an MSO sentence over order and letter predicates.

The automaton-to-logic direction is the run encoding above. The logic-to-automaton direction proceeds by induction on formulas with free variables represented as extra tracks in the alphabet.

Encode a valuation by augmenting each word position with bits indicating which first-order variable is placed there and which set variables contain it. Atomic properties such as order, equality, letter, and membership are checked by finite automata. Boolean connectives use regular closure. Existential quantification erases a valuation track, which is a homomorphic projection; the automaton nondeterministically guesses the erased track. Universal quantification follows by negation and existential quantification.

First-order variables require a validity constraint: exactly one position carries their marker. Empty-word cases and free-variable conventions must be treated explicitly. The induction constructs an automaton, but repeated projection and determinization can cause severe size growth. The theorem is about expressiveness, not a claim of cheap translation.

## 4. First-order logic is strictly weaker

First-order logic over word order, written $FO[<]$, is the fragment without set quantification. Every FO-definable language is regular, but not every regular language is FO-definable. The language “the number of $a$ symbols is even” is regular yet not definable in $FO[<]$.

The deep algebraic characterization is:

**Theorem 5.5 (McNaughton–Papert–Schützenberger).** A regular language is $FO[<]$-definable exactly when its syntactic monoid is aperiodic: for every element $s$, some $n\ge 1$ satisfies $s^n=s^{n+1}$.

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

To show $\{0^n1^n:n\ge 0\}$ is not regular, a Nerode family $0^i$ with witnesses $1^i$ is direct. To show parity is regular but not first-order, pumping cannot help because the language is regular; aperiodicity or an EF game is appropriate. Choose the theorem matching the boundary.

## 7. A small executable semantics

For finite words, direct evaluation of an FO abstract syntax tree is a trustworthy reference oracle for small cases. It is not a parser or a decision procedure for all logical equivalences. The following dependency-free JavaScript uses explicit environments and quantifier enumeration.

```js
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
    default: throw new Error(`unknown formula kind: ${formula.kind}`);
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
```

The last assertion audits vacuous truth on the empty domain. Production tools should validate the AST, reject unbound variables, cap resource use, and return structured errors; the small oracle isolates semantic content.

## 8. Project: formula oracle and automaton cross-check

**Project brief.** Extend the evaluator with implication and a derived successor constructor. Implement exhaustive word generation up to a chosen bound. For each of the following properties, build both an FO formula and a DFA, then compare their results on every generated word: contains $ab$; begins and ends with the same letter, with a deliberate empty-word convention; and has no adjacent equal letters. Include a negative test obtained by mutating one DFA transition. Report the shortest counterexample.

**Complete reference design.** Define implication as $\neg A \lor B$; define successor by $x<y$ and absence of an intermediate $z$. Generate words breadth-first so the first mismatch is shortest. The DFA runner maintains one named state and rejects malformed symbols. For each word, compare $evaluate(formula,w)$ to $accepts(dfa,w)$; return immediately on disagreement. The three properties need only finite-state histories: whether $ab$ has occurred; first and current last letter; or previous letter plus a failure sink. The mutated transition must produce a mismatch if the bound reaches a distinguishing word.

**Acceptance criteria.** Tests include $\varepsilon$, one-letter words, both alphabet symbols, and all words through length six. The report records alphabet, formula AST, DFA table, bound, number of words tested, and any counterexample. Passing bounded tests is explicitly labeled evidence, not a proof of equivalence. The proof obligation is discharged separately by a state invariant for each DFA and a structural interpretation of each formula.

## 9. Scope boundaries

- The correspondence here concerns finite words. Infinite words require omega-automata and different acceptance conditions.
- Adding arithmetic predicates to position logic changes expressive power.
- MSO quantifies sets of positions, not arbitrary sets of sets or binary relations.
- “The translation exists” does not imply manageable output size.
- Model checking a fixed finite word is not the same problem as deciding whether a sentence has some model or whether two formulas define the same language.


## A complete automaton-to-MSO construction

**Theorem 5.1 (Runs are monadically definable).** Every DFA over a finite alphabet has an MSO sentence defining exactly its language on all finite words, including the empty word.

*Proof.* Let $Empty$ abbreviate $\neg\exists x(x=x)$ and $Nonempty$ its negation. For each DFA state $q$, quantify a set $X_q$ of positions, interpreted as the state after that position's letter. Define $Part$ to say every position belongs to at least one $X_q$ and no position belongs to two distinct such sets. Define $Init$ to assert, at a first position carrying letter $a$, membership in $X_{\delta(q_0,a)}$. Define $Step$ by the finite conjunction over states and letters

$$\forall x\forall y\bigl(succ(x,y)\land X_q(x)\land P_a(y)\to X_{\delta(q,a)}(y)\bigr).$$

Define $Final$ to assert that a last position belongs to some $X_q$ with $q\in F$. If $F$ is empty, that disjunction is false. All finite conjunctions and disjunctions here are genuine finite formulas because states and alphabet are finite. First, last and successor have the order definitions given above.

On nonempty words use $\exists(X_q)_{q\in Q}(Part\land Init\land Step\land Final)$. Partition and the initial clause fix the state after the first letter. Induction over successive positions, using determinism, fixes every later state. The final clause is consequently true exactly for accepting runs. Conversely, labeling positions with the actual run satisfies the partition, initial and step clauses, and satisfies the last clause when that run accepts.

Conjoin this nonempty branch with $Nonempty$. Include $Empty$ as a separate disjunct exactly when $q_0\in F$; otherwise use falsehood for that disjunct. This gives precisely the right answer on the empty word, where there is no final position but the initial-state acceptance still matters. ∎

Without that separate branch, universal clauses about first, successor and last would all be vacuous on the empty domain and could mistakenly accept it for every machine. Nonemptiness is a semantic guard, not an arbitrary exception attached after the proof.

## A complete MSO-to-automaton construction

**Definition 5.2 (Legal annotations).** Fix finite lists $V$ of first-order variables and $U$ of set variables. The annotated alphabet consists of a letter of $\Sigma$ together with one bit per variable. A first-order bit must be one at exactly one position of the whole word. Set-variable bits are unrestricted. Such an annotation is legal when every first-order marker satisfies that singleton condition.

Each marker's validity is recognized by three states recording zero, one or multiple occurrences, accepting only one. Their finite product recognises legality. Different first-order variables may mark the same position: equality is allowed. When $V$ is empty, the empty annotation word is legal. Otherwise it is not. At an empty word every set track represents the unique subset, the empty set.

**Theorem 5.3 (Formula induction).** For every MSO formula and finite lists containing its free variables, a finite automaton accepts exactly its legal satisfying annotations. In particular every MSO sentence defines a regular word language.

*Proof.* Rename bound variables to avoid clashes, which is legitimate because formulas are finite and the variable supplies are infinite. Work throughout with a fixed annotated alphabet containing the currently considered free variables. Intersect each constructed language with its legal-annotation language.

For $P_a(x)$, a finite machine checks that the unique $x$ marker is at a position labeled $a$. For $x=y$, it checks that the two singleton markers coincide. For $x<y$, it records whether the $x$ marker has been seen and accepts exactly when the $y$ marker occurs strictly later; a position carrying both does not qualify. For $X(x)$, it checks that the set bit is one at the $x$-marked position. Each check requires only finitely many flags. Falsehood accepts no legal annotation. These are all atomic forms required for MSO over the stated signature.

When two subformulas have different free-variable lists, lift their automata to the common larger annotation alphabet by ignoring extra tracks, and intersect with legality for the larger first-order list. Then conjunction and disjunction use regular intersection and union. Negation takes complement *within legal annotations*: its language is $Valid\setminus L(\varphi)$. Ordinary complement without this restriction would incorrectly accept annotations with absent or repeated first-order markers.

For $\exists x\varphi$, add a fresh singleton marker track for $x$, lift the body's other tracks as needed and construct its legal satisfying language by induction. Project away the $x$ bit. Concretely an NFA on the remaining alphabet guesses at each position the erased bit and simulates the old automaton. Acceptance means some guessed singleton position makes the body true, exactly the quantified semantics. Even if $x$ does not occur in the body, the added marker must remain constrained to occur once. This ensures vacuous existential quantification is false on the empty domain rather than silently skipping the domain requirement.

For $\exists X\varphi$, add an unrestricted set bit and perform the same projection. Its guessed bits describe exactly one subset, and every subset has a bit assignment. On an empty word there is still one such assignment, the empty track. Universal quantifiers are obtained by negation and existential quantification, with the same legal-annotation convention. Projection preserves the remaining markers' singleton property; intersecting with their validity again is harmless.

These operations are effective finite automaton constructions and cover every formula constructor. For a sentence no variable tracks remain, and its annotations are exactly the original words. Hence its satisfying language is regular. ∎

The proof handles open formulas without pretending an empty word can name a position. It also explains why Boolean operands need a common valuation alphabet: otherwise “the same word” in the two operands could encode different assignments. Severe size growth is possible because projections introduce nondeterminism and negations can require determinisation. No efficient general translation bound follows just from the construction's existence.

## Worked example 1: adjacent letters as an order assertion

Take $\varphi=\exists x\exists y(P_a(x)\land P_b(y)\land succ(x,y))$. On $aab$, choose positions one and two, counting from zero. They carry $a,b$ and have no position between them, so the sentence is true. On $bbaa$, every $a$ is later than every $b$, so no witness pair exists; the sentence is false. On the empty word it is false because the first existential position cannot be chosen.

A DFA tracks whether the preceding letter was $a$ and whether $ab$ has already occurred, with an accepting absorbing state for the latter. Its state invariant agrees with the formula: a first entrance into the accepting state occurs exactly when a current $b$ follows a previous $a$. This establishes equivalence on every word rather than relying on bounded evaluation of the displayed examples.

## Worked example 2: state sets after each position

Use the even-ones DFA over binary words, with start and accepting state $E$ and the other state $O$. On $011$, the after-letter states are $E,O,E$, so take $X_E=\{0,2\}$ and $X_O=\{1\}$. They partition the positions. The first zero leaves the start state even; each next one toggles along the successor relation; the final position lies in the accepting set. Thus the nonempty run sentence holds.

On $01$, the forced after-letter states are $E,O$. No alternative partition can repair the rejecting last state because the initial and step conditions uniquely force them. Hence the sentence rejects. The empty word is accepted through the separate empty branch, since the start state is accepting; it does not need a fictional position carrying an initial state.

## Worked example 3: why complement is relative

On word $ab$, a single first-order variable $x$ has two legal annotations: marker bits $10$ and $01$. The formula $P_a(x)$ accepts the former and rejects the latter. Its negation accepts exactly $01$ among legal annotations. Bit strings $00$ and $11$ remain invalid; they must not be admitted merely because they fail the positive atomic check.

Projecting away $x$ from $P_a(x)$ says that some $a$ occurs, while projecting away $x$ from its legal negation says that some position is not $a$. Both are true on $ab$. Neither existential statement is true on the empty word, because no legal singleton track exists there. By duality, $\forall xP_a(x)$ is nevertheless true on the empty word. The legality convention recovers every one of these outcomes within the automata construction.

## The deeper first-order boundary used here

The aperiodic, star-free and $FO[<]$ equivalence stated in Section 4 is used as a named external theorem, with finite-word order and letter predicates exactly as specified. Its full algebraic proof is not asserted to follow from the elementary formula induction above. In a finite monoid, the per-element stabilisation condition can equivalently use one common exponent: take the maximum of the finitely many stabilising exponents, since equality of consecutive powers persists after multiplication by further powers.

For the even-$a$ language with $a$ in the alphabet, Chapter 4 computes the syntactic monoid as the two parity classes. The odd class has powers alternating between odd and identity, so no consecutive powers agree. The external characterisation therefore proves that this regular language is not first-order definable in the stated signature. Adding modular predicates or arithmetic on positions changes the signature and can change that conclusion. The EF-game paragraph gives a parallel proof intuition; no complete game strategy is needed as an unstated premise of this algebraic argument.

## Exercises with complete solutions

### Exercise 1 — First position
<a id="logic-of-regular-languages-ex-1"></a>

Write an FO formula saying $x$ is the first position.

<details>
<summary>Hint 1</summary>

First means that no earlier position exists.

</details>
<details>
<summary>Hint 2</summary>

Use order and an existential negation; free x still needs a position.

</details>
<details>
<summary>Solution</summary>

**Solution.** Use $\operatorname{first}(x) := \neg\exists y\;(y<x)$. On the empty word no position can be assigned to $x$; a sentence asserting an $a$ first position is $\exists x\;(\operatorname{first}(x) \land P_a(x))$.

</details>

### Exercise 2 — Exactly one $a$
<a id="logic-of-regular-languages-ex-2"></a>

Write an FO sentence for words containing exactly one $a$.

<details>
<summary>Hint 1</summary>

Separate an occurrence witness from uniqueness.

</details>
<details>
<summary>Hint 2</summary>

Require every other a-position to equal the chosen one.

</details>
<details>
<summary>Solution</summary>

**Solution.** $\exists x\;(P_a(x) \land \forall y\;(P_a(y) \to y=x))$. Existence supplies one occurrence and the universal clause makes every occurrence identical to it.

</details>

### Exercise 3 — Adjacent $ab$
<a id="logic-of-regular-languages-ex-3"></a>

Define “the word contains adjacent letters $ab$.”

<details>
<summary>Hint 1</summary>

Use two letter witnesses with no position between them.

</details>
<details>
<summary>Hint 2</summary>

The successor formula supplies adjacency, rather than merely earlier order.

</details>
<details>
<summary>Solution</summary>

**Solution.** $\exists x\,\exists y\;(P_a(x) \land P_b(y) \land \operatorname{succ}(x,y))$, where $\operatorname{succ}$ is the order formula from Section 1.

</details>

### Exercise 4 — Empty-domain universal
<a id="logic-of-regular-languages-ex-4"></a>

Why is $\forall x\,P_a(x)$ true on $\varepsilon$ under the stated word-structure semantics?

<details>
<summary>Hint 1</summary>

Look for a possible counterexample position.

</details>
<details>
<summary>Hint 2</summary>

There are no position assignments to check in an empty domain.

</details>
<details>
<summary>Solution</summary>

**Solution.** A universal statement is false only if some domain element violates its body. The empty domain has no counterexample, so the statement is vacuously true. If nonemptiness is intended, conjoin $\exists x\;(x=x)$.

</details>

### Exercise 5 — DFA runs as sets
<a id="logic-of-regular-languages-ex-5"></a>

Why must the MSO run encoding assert that the state sets form a partition?

<details>
<summary>Hint 1</summary>

Each consumed position has exactly one deterministic after-state.

</details>
<details>
<summary>Hint 2</summary>

Coverage and pairwise disjointness express different parts of that requirement.

</details>
<details>
<summary>Solution</summary>

**Solution.** Without coverage, some positions could have no state; without disjointness, one position could carry several incompatible states. A deterministic run assigns exactly one state after each consumed position, so both clauses are required.

</details>

### Exercise 6 — Projection and nondeterminism
<a id="logic-of-regular-languages-ex-6"></a>

Why does erasing an existentially quantified valuation track lead naturally to an NFA?

<details>
<summary>Hint 1</summary>

The erased bits are no longer part of the visible input.

</details>
<details>
<summary>Hint 2</summary>

An accepting run can guess them, while marker validity enforces a legal witness.

</details>
<details>
<summary>Solution</summary>

**Solution.** The projected input omits which positions satisfy the quantified assignment. The machine may guess those bits while reading and accept if some guessed annotation satisfies the original formula. Existential choice is exactly NFA acceptance semantics.

</details>

### Exercise 7 — FO is regular
<a id="logic-of-regular-languages-ex-7"></a>

Give the main inductive ingredients showing every FO-definable word language is regular.

<details>
<summary>Hint 1</summary>

Build machines for legal annotated atomic formulas.

</details>
<details>
<summary>Hint 2</summary>

Use relative complement and project singleton position markers at quantifiers.

</details>
<details>
<summary>Solution</summary>

**Solution.** Automata recognize atomic order, equality, and letter constraints on annotated words. Boolean connectives use product and complement closure. Existential quantification projects away an annotation track using nondeterminism; universal quantification is reduced to negation and existential quantification. Validity automata ensure first-order markers occur exactly once.

</details>

### Exercise 8 — Fixed counting
<a id="logic-of-regular-languages-ex-8"></a>

Show “the word has at least three positions” is FO-definable.

<details>
<summary>Hint 1</summary>

Use strict order to ensure different witnesses.

</details>
<details>
<summary>Hint 2</summary>

A chain of three positions is equivalent to a word of length at least three.

</details>
<details>
<summary>Solution</summary>

**Solution.** Use $\exists x\,\exists y\,\exists z\;(x<y \land y<z)$. Three strictly ordered positions are distinct, and any word of length at least three supplies them.

</details>

### Exercise 9 — Aperiodicity failure for parity
<a id="logic-of-regular-languages-ex-9"></a>

Why is the parity transition element not aperiodic?

<details>
<summary>Hint 1</summary>

Compute consecutive powers of the parity toggle.

</details>
<details>
<summary>Hint 2</summary>

They alternate between the toggle and the identity.

</details>
<details>
<summary>Solution</summary>

**Solution.** Reading one $a$ swaps even and odd states. Its powers alternate between the swap and identity. Thus no $n$ satisfies $s^n=s^{n+1}$; the two consecutive powers always differ.

</details>

### Exercise 10 — Choosing a boundary method
<a id="logic-of-regular-languages-ex-10"></a>

Why can the regular pumping lemma not prove that parity is not FO-definable?

<details>
<summary>Hint 1</summary>

The desired separation is inside the regular languages.

</details>
<details>
<summary>Hint 2</summary>

A necessary property of all regular languages cannot exclude a regular example from FO.

</details>
<details>
<summary>Solution</summary>

**Solution.** Parity is regular and therefore satisfies the pumping lemma. The desired separation lies inside the regular languages. One needs a theorem sensitive to the FO fragment, such as aperiodic syntactic monoids or EF games.

</details>

### Exercise 11 — Bounded testing
<a id="logic-of-regular-languages-ex-11"></a>

What does exhaustive agreement through length $k$ establish?

<details>
<summary>Hint 1</summary>

Identify the exact finite set that was enumerated.

</details>
<details>
<summary>Hint 2</summary>

An independent completeness bound is needed before extending that conclusion.

</details>
<details>
<summary>Solution</summary>

**Solution.** It establishes agreement on exactly the finite tested set, and may locate short counterexamples. It proves full equivalence only if an independently proved completeness bound at most $k$ applies to the representations.

</details>

### Exercise 12 — Infinite-word warning
<a id="logic-of-regular-languages-ex-12"></a>

Why does accepting at the final position not define an automaton semantics for infinite words?

<details>
<summary>Hint 1</summary>

An infinite word has no last position.

</details>
<details>
<summary>Hint 2</summary>

Its acceptance must inspect a property of the infinite run instead.

</details>
<details>
<summary>Solution</summary>

**Solution.** An infinite word has no final position. Acceptance must instead concern the infinite run, for example visiting designated states infinitely often. Such conditions lead to omega-automata and lie outside the finite-word theorem stated here.

</details>

[Book overview](#/books/automata-computability-complexity)

## Sources

The retained source is Euler's CC BY-SA 4.0 *Formal Computation* chapter of the same name, including its original evaluator code and twelve exercises. The complete annotated-word constructions and worked examples above are newly written. A primary correspondence source retained in that book's bibliography is Calvin C. Elgot, “Decision Problems of Finite Automata Design and Related Arithmetics” (1961), [DOI](https://doi.org/10.1090/S0002-9947-1961-0139530-5). For the external first-order, star-free and aperiodic characterisation, see Volker Diekert and Paul Gastin, [First-order definable languages, author-hosted text](https://www.lsv.fr/Publis/PAPERS/PDF/DG-WT08.pdf), and the McNaughton–Papert and Schützenberger primary records in the retained bibliography. These are named mathematical inputs and further reading, not claims that their full proofs are reproduced here.

## Summary

Finite words admit a specialised relational semantics with an explicit empty-word convention. MSO can encode after-letter run states, with a separate branch for empty-word acceptance. In the reverse direction, legal singleton position markers, unrestricted set tracks, relative complement and projection prove the full formula-to-automaton correspondence. The first-order fragment is narrower by the cited aperiodic characterisation; parity demonstrates the boundary. The next chapters replace finite-state histories with grammars, stacks and recursive syntax.
