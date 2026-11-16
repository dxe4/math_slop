var e=`---
parent_id: book-types-proofs-construction
chapter_id: the-brouwer-heyting-kolmogorov-reading
title: "The Brouwer–Heyting–Kolmogorov reading"
level: advanced-undergraduate
estimated_minutes: 180
license: CC BY-SA 4.0
---

# The Brouwer–Heyting–Kolmogorov reading

What does it mean to prove a proposition? The classical answer is often framed in terms of truth tables or model-theoretic satisfaction: a proof shows that a statement holds in every model satisfying the axioms. The constructive answer, developed independently by L. E. J. Brouwer, Arend Heyting, and Andrey Kolmogorov, is different. Under the BHK reading, a proof of a proposition is a piece of computational evidence. This chapter introduces that reading, explains why excluded middle is not accepted without qualification, and identifies the valid principles that remain.

## Evidence as construction

The BHK reading assigns to each logical connective a specification of what counts as evidence.

**Conjunction.** Evidence for $A \\land B$ is a pair $(a, b)$ where $a$ is evidence for $A$ and $b$ is evidence for $B$.

**Disjunction.** Evidence for $A \\lor B$ is either $\\operatorname{inl}(a)$, tagging evidence $a$ for $A$, or $\\operatorname{inr}(b)$, tagging evidence $b$ for $B$. The tag is part of the evidence.

**Implication.** Evidence for $A \\to B$ is a method (or function) that transforms any evidence for $A$ into evidence for $B$.

**Negation.** Evidence for $\\neg A$ is a method that transforms any evidence for $A$ into evidence for a contradiction. We treat $\\neg A$ as an abbreviation for $A \\to \\bot$, where $\\bot$ is the empty proposition with no evidence.

**Universal quantification.** Evidence for $\\forall x \\in X.\\, P(x)$ is a method that, given any $x \\in X$, produces evidence for $P(x)$.

**Existential quantification.** Evidence for $\\exists x \\in X.\\, P(x)$ is a pair $(w, p)$ where $w \\in X$ is a witness and $p$ is evidence for $P(w)$.

This is not a definition of truth in the classical sense. It is a specification of proof content. The same proposition may be classically true without being constructively provable, because the classical proof might not supply the computational evidence the BHK reading demands.

## Excluded middle and its limits

The law of excluded middle states $A \\lor \\neg A$ for every proposition $A$. Under the BHK reading, evidence for $A \\lor \\neg A$ must either be evidence for $A$ or a method turning evidence for $A$ into contradiction. For an arbitrary proposition, we may have no uniform way to produce either side.

For a **decidable** proposition, the situation is different. Equality of two explicitly given natural numbers is decidable: compare them digit by digit and return the appropriate tag. Thus the instance

$$\\forall m, n \\in \\mathbb{N}.\\, (m = n) \\lor \\neg(m = n)$$

is constructively valid, because the evidence is a decision procedure.

The general schema $A \\lor \\neg A$ is not accepted for arbitrary $A$. This is not a rejection of classical reasoning in all contexts; it is a refusal to assert that every proposition is decidable when no decision method is known.

## Principles that survive

Several classical principles remain valid intuitionistically.

**Double negation introduction.** $A \\to \\neg\\neg A$ is valid. Given evidence $a$ for $A$, the method $\\lambda b.\\, b(a)$ transforms any method $b : A \\to \\bot$ into contradiction.

**Contradiction elimination.** From $\\bot$, any proposition follows. The empty type has no constructors, so its eliminator handles the impossible input: $\\lambda z.\\,\\operatorname{abort}_A(z):\\bot\\to A$.

**Double-negated excluded middle.** $\\neg\\neg(A \\lor \\neg A)$ is valid. This is a theorem of intuitionistic logic, provable without assuming excluded middle itself. (The name *weak excluded middle* conventionally refers instead to $\\neg A\\lor\\neg\\neg A$, which is not a theorem of intuitionistic logic.)

The principle that does **not** survive is **double negation elimination**, $\\neg\\neg A \\to A$. Knowing that $A$ cannot be refuted is not the same as possessing evidence for $A$. The distinction is not about accepting contradictions; it is about the informational gap between "not refuted" and "proved."

## Worked example 1: evidence for currying

Consider the proposition

$$((A \\land B) \\to C) \\;\\to\\; A \\to B \\to C.$$

Under the BHK reading, evidence is a method that takes
- a method $f$ mapping pairs $(a, b)$ to evidence for $C$,
- evidence $a$ for $A$,
- evidence $b$ for $B$,

and returns evidence for $C$. The construction is

$$\\lambda f.\\, \\lambda a.\\, \\lambda b.\\, f((a, b)).$$

This is the currying isomorphism. The term builds the required evidence explicitly, and the data flow is transparent: the pair is formed, then passed to $f$.

## Common errors

**Error: conflating "not refuted" with "proved."** A student may write "we know $A$" after establishing $\\neg\\neg A$. This is invalid intuitionistically. The gap is real: there are models of intuitionistic logic where $\\neg\\neg A \\to A$ fails.

**Error: assuming all propositions are decidable.** Writing a case analysis on $A \\lor \\neg A$ without first proving decidability is a classical step that needs justification. In a constructive setting, every branch must be backed by evidence.

**Error: treating BHK as a classical semantics.** The BHK reading does not assign truth values; it assigns evidence types. Saying "$A$ is true in the BHK sense" is shorthand for "there exists evidence for $A$."

## From an informal reading to a formal calculus

BHK describes what a construction should supply. It is not by itself a complete definition of which methods count as legitimate. To obtain a precise formal system we must choose syntax, inference rules and computation rules, then prove its metatheorems. The next chapters make that choice using intuitionistic natural deduction and a typed term calculus. Different constructive foundations can agree with the connective explanations above while disagreeing about allowed principles for infinite objects.

The distinction between evidence and its specification is already familiar from algorithms. The statement that a search result has a requested property is a specification. A concrete witness together with a derivation of that property supplies evidence. A function returning a witness on each input is stronger data than a sentence asserting separately that witnesses exist, unless the chosen interpretation of the existential already includes the witnesses. This is why the representation of a proposition matters when discussing extracted programmes.

For conjunction, both fields must be present. For disjunction, the evidence carries a tag because a consumer must know which branch's assumptions are available. An untagged value that “might be an A or might be a B” is not yet evidence for either branch. For implication, a construction must act on any admissible evidence for its premise, not merely the one example encountered while writing the proof. For existential quantification, returning only an object omits the evidence that it satisfies the predicate; returning only a proof of an unnamed object's property omits the witness.

These are conditions on the selected interpretation. They do not say that an informal classical existence proof is meaningless or that every useful numerical routine must be a proof object. The point is to know which information is promised. A classical theorem can be valuable while requiring a different computational interpretation, and a constructive theorem can still have an impractically large extracted computation. Existence, computability and efficiency are separate claims.

## Worked example 2: a witness that depends on its input

Consider $\\forall n\\in\\mathbb N\\;\\exists m\\in\\mathbb N\\;(m>n)$. A construction takes $n$, returns $n+1$, and supplies the elementary proof $n<n+1$. Thus its output has two parts: a number and its property. The number depends on the supplied input. There is no single natural number that can be used as the witness for every input, since putting $n=m$ would demand $m>m$.

Changing the statement to $\\exists m\\;\\forall n\\;(m>n)$ therefore changes its content and makes it false. Swapping the quantifiers is not an optimisation of the witness function. It requests a different piece of data: a fixed witness before any input is received. The dependence is exactly what a dependent function returning a dependent pair will express later in the book. We can understand that requirement now without yet assuming the rules of dependent type theory.

A consumer of the original evidence may ask for the witness at input seven and receive eight with its proof. Asking at a second input produces a second output through the same method. An infinite table of all values need not be physically stored; a terminating procedure generating the requested entry supplies the uniformity. Conversely, an unbounded search that sometimes fails to terminate does not establish this universal specification merely because it succeeds on several displayed inputs.

## Worked example 3: a finite decision with both kinds of evidence

For natural numbers $m,n$, compare them recursively. If both are zero, return the left tag with equality. If exactly one is zero, return the right tag with a refutation of equality, using the fact that zero is not a successor. If both are successors, compare their predecessors. A positive equality result extends by applying successor to both sides. A refutation extends because an equality of successors would imply equality of their predecessors.

The recursion decreases $m+n$ by two in the last case, so it terminates. Its correctness proof follows the same cases. On success it constructs equality evidence; on failure it constructs a function that would turn any alleged equality into contradiction. The two results are not merely the strings yes and no: their logical specifications explain what a consumer is entitled to infer from each tag. This establishes the decidability instance for natural-number equality, not excluded middle for every proposition.

For example, comparison of three and five reduces to comparison of two and four, then one and three, then zero and two. The last comparison refutes equality. If an equality $3=5$ were supplied, successor injectivity would successively give $2=4$, $1=3$, and $0=2$, contradicting the distinct constructors. The negative evidence therefore has a precise response to a hypothetical positive proof. No such contradictory proof is assumed to exist.

## Using a refutation without possessing a witness

Suppose $k:(A\\to0)\\to0$. It accepts a proposed refutation of $A$ and derives contradiction. That specification does not include an element of $A$. In particular, trying to compute $k$ by supplying it an invented refutation of $A$ would require justifying that refutation first. Double negation introduction goes in the other direction: with actual $a:A$, define $k(h)=h(a)$. Its data flow is fully visible.

Similarly, the proof of double-negated excluded middle in Exercise 3 never decides $A$. It assumes a refutation of the whole disjunction, uses that assumption to construct a refutation of $A$, then feeds the right-tagged refutation back to the original assumption. The temporary hypothesis is discharged. Mistaking its intermediate right injection for an unconditional decision overlooks that it still depends on the refutation hypothesis.

The formal rules make those dependencies auditable. A variable in a context records an assumption, not a fact that can be reused after its discharge. A closed term has no remaining term assumptions, but it may still refer to declared axioms or constants in the surrounding theory. Reading a proof's type therefore requires its declaration context as well as its final formula. The trust-map chapter returns to this issue when libraries and proof assistants make the context much larger.

## A limit on uniform effective decisions

The logic book proved that no total effective procedure decides whether an arbitrary encoded machine halts on an arbitrary input. That result explains one limitation of a proposed uniform decision interpretation. If a method accepted any machine/input pair and always returned correct evidence tagged either “halts” or “does not halt”, reading its tag would decide the halting problem. Such a total effective method cannot exist. This argument uses a precise family of propositions and an effectiveness hypothesis, rather than a claim that the ordinary word truth has been redefined.

For a fixed finite bound, the corresponding question is different. Simulate the machine for that many steps, including the initial configuration when a time-zero halt is allowed. A successful halt supplies its finite trace. Failure to halt within the bound supplies evidence for the bounded negative statement, which can be checked against the same complete finite simulation. It does not supply a refutation of eventual halting. The returned tag must be read with the proposition it actually decides.

This is also a useful discipline for mathematical computing. A timeout is a statement about a run and a bound; a proof of divergence quantifies over every later stage. A witness observed in a search may settle an existential claim, while absence from a finite search need not settle its negation. BHK makes the missing information conspicuous: ask what object or refutation the negative branch actually carries, and whether its correctness argument has the required universal scope.

## Practice exercises

### Exercise 1
<a id="the-brouwer-heyting-kolmogorov-reading-ex-1"></a>
Give BHK evidence for $A \\to (B \\to A)$ and describe the data flow.


<details><summary>Hint 1</summary>

Start with the A evidence before accepting a B input.

</details>
<details><summary>Hint 2</summary>

The original A evidence remains in the outer scope.

</details>
<details><summary>Solution</summary>

The evidence is $\\lambda a.\\, \\lambda b.\\, a$. Given evidence $a$ for $A$, the outer lambda returns a method that ignores any evidence $b$ for $B$ and returns $a$. The A-evidence is stored and returned unchanged.

</details>

### Exercise 2
<a id="the-brouwer-heyting-kolmogorov-reading-ex-2"></a>
Show that $(A \\to B) \\to (\\neg B \\to \\neg A)$ is intuitionistically valid by giving explicit evidence.


<details><summary>Hint 1</summary>

Compose the implication with the refutation of its codomain.

</details>
<details><summary>Hint 2</summary>

Given A evidence, first produce B and then contradiction.

</details>
<details><summary>Solution</summary>

The evidence is $\\lambda f.\\, \\lambda g.\\, \\lambda a.\\, g(f(a))$. Given $f : A \\to B$ and $g : B \\to \\bot$ and $a : A$, we form $f(a) : B$ and apply $g$ to obtain contradiction. The composition is explicit.

</details>

### Exercise 3
<a id="the-brouwer-heyting-kolmogorov-reading-ex-3"></a>
Explain why $\\neg\\neg(A \\lor \\neg A)$ is constructively valid even though $A \\lor \\neg A$ is not.


<details><summary>Hint 1</summary>

Assume a refutation of the whole disjunction.

</details>
<details><summary>Hint 2</summary>

Use it to build a refutation of A, then form a right injection.

</details>
<details><summary>Solution</summary>

Suppose $h : (A \\lor \\neg A) \\to \\bot$. We must produce contradiction. From $h$, define $k : A \\to \\bot$ by $k(a) = h(\\operatorname{inl}(a))$. Then $\\operatorname{inr}(k) : A \\lor \\neg A$, and $h(\\operatorname{inr}(k))$ is contradiction. The key is that the right injection $\\operatorname{inr}(k)$ can be formed from the assumption that $h$ refutes disjunction, without deciding $A$.

</details>

### Exercise 4
<a id="the-brouwer-heyting-kolmogorov-reading-ex-4"></a>
Give a decidable proposition other than numeric equality, and explain the decision procedure.


<details><summary>Hint 1</summary>

Choose a property requiring only finitely many elementary comparisons.

</details>
<details><summary>Hint 2</summary>

Explain termination as well as correctness of the decision.

</details>
<details><summary>Solution</summary>

"A given finite list of natural numbers is sorted" is decidable. Compare adjacent elements; if every adjacent pair is in nondecreasing order, the list is sorted. The procedure terminates because the list is finite, and it returns a definite yes or no.

</details>

### Exercise 5
<a id="the-brouwer-heyting-kolmogorov-reading-ex-5"></a>
Give the full evidence type for “every natural number has a larger natural number”, and explain why a witness function alone needs a correctness argument.

<details><summary>Hint 1</summary>

The existential output contains both a number and a proof.

</details>
<details><summary>Hint 2</summary>

Use successor and the strict order on naturals.

</details>
<details><summary>Solution</summary>

The evidence takes $n:\\mathbb N$ and returns $(m,p)$ with $m:\\mathbb N$ and $p:n<m$. Choose $m=n+1$ and use the elementary strict-successor proof. A function returning some natural number does not automatically establish the inequality: the constant-zero function is a counterexample to that inadequate specification. The construction is complete only when its proof component justifies the returned witness for every input, rather than only for displayed cases.

</details>

### Exercise 6
<a id="the-brouwer-heyting-kolmogorov-reading-ex-6"></a>
Construct evidence for $A\\to\\neg\\neg A$ and identify exactly where the original evidence is used.

<details><summary>Hint 1</summary>

A double negation accepts a refutation as its argument.

</details>
<details><summary>Hint 2</summary>

Apply the refutation to the given evidence.

</details>
<details><summary>Solution</summary>

Use $\\lambda a:A.\\lambda h:A\\to0.ha$. Under $a:A$ and $h:A\\to0$, application gives $ha:0$. Discharge $h$ to obtain $\\neg\\neg A$, then discharge $a$. The original $a$ is passed to the hypothetical refutation. The proof never attempts the reverse task of extracting $a$ from an arbitrary double-negation term; the direction of information flow is essential.

</details>

### Exercise 7
<a id="the-brouwer-heyting-kolmogorov-reading-ex-7"></a>
Describe evidence for a universal statement over an empty domain and show why an existential statement over the same domain has no witness.

<details><summary>Hint 1</summary>

An input from the empty domain is impossible.

</details>
<details><summary>Hint 2</summary>

An existential pair would require such an input as its first field.

</details>
<details><summary>Solution</summary>

A universal construction accepts $x:0$ and uses empty elimination to produce the required result at that impossible input. It can therefore meet its specification without receiving an actual domain element. An existential construction would have to return a pair whose first field inhabits zero; no constructor can supply that field in the consistent core. Thus the universal is vacuous and the existential has no witness. Confusing them would discard the different directions in which their data flow.

</details>

### Exercise 8
<a id="the-brouwer-heyting-kolmogorov-reading-ex-8"></a>
A procedure tests a proposed divisor and returns only the divisor. What further information would supply evidence that a particular natural number is composite? Give a concrete successful case.

<details><summary>Hint 1</summary>

State the factorisation and exclude trivial factors.

</details>
<details><summary>Hint 2</summary>

Fifteen has factors three and five.

</details>
<details><summary>Solution</summary>

For $n$, one possible composite specification requests $a,b$ with $a>1$, $b>1$ and $n=ab$. For fifteen return three and five, together with the order checks and $15=3\\cdot5$. A lone integer three does not itself record the factorisation or the required bounds. A consumer can recompute those finite checks, but then the checker and its specification supply the missing warrant. The example illustrates a witness plus property rather than an unsupported label.

</details>

### Exercise 9
<a id="the-brouwer-heyting-kolmogorov-reading-ex-9"></a>
Given $s:A+B$, $f:A\\to C$ and $g:B\\to C$, construct evidence for $C$ and explain why the tag matters.

<details><summary>Hint 1</summary>

There are two possible introduction forms for the sum.

</details>
<details><summary>Hint 2</summary>

Apply the corresponding function in each branch.

</details>
<details><summary>Solution</summary>

Use $\\operatorname{case}(s;x.fx;y.gy)$. For a left tag, its payload has type $A$ and $f$ produces $C$. For a right tag, the payload has type $B$ and $g$ produces $C$. The tag authorises the corresponding premise type; without it a consumer could incorrectly apply $f$ to a $B$ payload. Both branches produce the same result type, so the construction does not need to know the chosen branch in advance.

</details>

### Exercise 10
<a id="the-brouwer-heyting-kolmogorov-reading-ex-10"></a>
Does a constructive witness automatically provide an efficient algorithm? State the additional kind of argument needed for an efficiency claim.

<details><summary>Hint 1</summary>

Compare termination with a bound on resource use.

</details>
<details><summary>Hint 2</summary>

Name the input encoding and the operation being counted.

</details>
<details><summary>Solution</summary>

No. A method can terminate on every input while taking an enormous number of steps. An efficiency claim needs a specified input encoding, a cost model and a proved resource bound as a function of input length or another declared parameter. BHK describes the information in evidence; it does not by itself establish a polynomial bound, a practical running time or an implementation's memory safety. Those are additional specifications requiring their own arguments.

</details>

## Chapter summary

The BHK reading interprets proofs as computational evidence. Conjunctions are pairs, disjunctions are tagged sums, implications are functions, and existentials carry witnesses. Excluded middle is not accepted for arbitrary propositions, but many classical principles survive, and decidable instances of excluded middle are constructively valid.

**Backward pointers:** This chapter assumes familiarity with propositional logic and basic set-theoretic language. Readers needing review should consult a first-course logic text.

**Forward pointers:** Chapter 2, "Natural deduction as construction rules," formalizes the BHK reading as a system of introduction and elimination rules. Chapter 3, "Simply typed lambda calculus," gives the computational language that corresponds to these rules via the Curry–Howard correspondence.
`;export{e as default};