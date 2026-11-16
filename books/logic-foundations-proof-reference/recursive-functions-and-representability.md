
# Recursive Functions and Representability

## An algorithm, its graph and a theorem about numerals

A program can compute a natural number without its name being a term of first-order arithmetic. To reason about that computation inside a theory, encode the program and its finite run, then use a formula describing its graph. This distinction is central to diagonalisation: the substitution function is an external effective operation on codes, and its graph formula supplies the internal bridge.

The prerequisites are the [L3 logic book](#/books/introduction-to-logic-and-set-theory) and [Automata, Computability and Complexity](#/books/automata-computability-complexity), especially partial computation and universal machines. We develop the arithmetic conventions needed by the next chapter. Two standard coding results are declared explicitly as inputs below. The proofs given here establish their applications and the numeralwise closure facts actually used, without pretending that a one-paragraph coding outline proves every arithmetisation theorem.

## The effective functions

**Definition 4.1 (Primitive recursive functions).** Begin with zero functions, successor and coordinate projections on natural-number tuples. Close under composition and primitive recursion:

$$f(\vec x,0)=g(\vec x),\qquad f(\vec x,n+1)=h(\vec x,n,f(\vec x,n)).$$

Every resulting function is total. Its value is obtained by a finite number of recursive stages fixed by the supplied recursion argument. Induction on its construction proves totality: composition combines total functions, and induction on $n$ justifies each recursion stage. This is a theorem in the external mathematics, not automatically a proof of totality inside a weak arithmetic theory.

Addition and multiplication are primitive recursive, as are bounded sums, bounded products and bounded search through a supplied finite interval. A finite simulation for exactly $t$ machine steps is primitive recursive because a finite configuration has an effective code and each single step is a primitive recursive update under the chosen finite-sequence coding, extended by a harmless default on malformed codes. Bounded iteration then performs the stated finite simulation.

**Definition 4.2 (Partial recursive functions).** Add unbounded search to the effective constructions, with divergence permitted. For a total effective predicate, least search returns the least witness if one exists and is undefined otherwise. In the general minimisation convention, all earlier queried computations must terminate before the procedure can pass them. An undefined earlier value is not simply treated as a negative answer.

The distinction matters. If a computation tests candidates in order, a failure to finish at candidate zero can prevent it ever reaching a genuine witness at candidate one. Statements about existential truth alone do not describe that operational search. Normal-form coding avoids this ambiguity by making the searched certificate predicate total and primitive recursive.

**Coding input A (Kleene normal form).** Fix a standard effective numbering of machines. There is a primitive recursive predicate $T(e,\vec x,t)$ checking a complete halting-computation certificate and a primitive recursive output function $U(t)$ such that every partial recursive function has the form

$$\varphi_e(\vec x)=U(\mu t\,T(e,\vec x,t))$$

when a certificate exists, and is undefined otherwise. Here minimisation selects the least valid certificate, not an informal infinite computation. This standard theorem is a named input from computability theory; it includes the equivalence of the chosen effective machine and recursive-function presentations.

## Robinson arithmetic and its limited commitments

**Definition 4.3 ($Q$).** Robinson arithmetic is classical first-order arithmetic with identity, symbols $0,S,+,\cdot$ and the universal closures of

- $Sx\ne0$ and $Sx=Sy\to x=y$;
- $x\ne0\to\exists y(x=Sy)$;
- $x+0=x$ and $x+Sy=S(x+y)$;
- $x\cdot0=0$ and $x\cdot Sy=x\cdot y+x$.

It has no induction schema. Write $\bar n$ for the numeral $S^n0$. A proof about each fixed numeral need not combine into one proof quantified over all natural numbers inside $Q$. The natural-number structure satisfies these axioms, so any theorem of $Q$ is true there by soundness.

**Definition 4.4 (Numeralwise graph representation).** A formula $F(\vec x,y)$ represents a partial function strongly at its defined standard inputs when, whenever $f(\vec n)=m$,

$$Q\vdash\forall y\bigl(F(\overline{\vec n},y)\leftrightarrow y=\bar m\bigr).$$

Its standard interpretation must also have exactly the intended graph, including absence of outputs at undefined inputs. This does not require $Q$ to prove universal totality or universal functionality for all internal inputs. A relation is numeralwise decidable in $Q$ when every true standard instance is provable and every false standard instance has a provable negation.

**Coding input B (Primitive-recursive representation in $Q$).** Every primitive recursive function has such a graph formula, and every primitive recursive relation has a numeralwise decidable representing formula, with the intended standard interpretation. The representations can be constructed effectively from the effective descriptions. This theorem uses finite-sequence coding and representability arguments; its general construction is a named arithmetic input. Primitive recursive does not mean quantifier-free, or automatically bounded in the bare language $0,S,+,\cdot$.

Peano arithmetic proves induction and supports stronger uniform coding facts. Passing from $Q$ to PA must be stated when one needs those stronger facts. Incompleteness requires precise representational strength, not merely the appearance of multiplication somewhere in a formula.

## What can be proved from numeralwise information

**Lemma 4.5 (Composition).** Numeralwise strong graph representations are closed under composition at defined standard inputs.

*Proof.* For one intermediate value, suppose $f(n)=m$ and $g(m)=k$, represented by $F,G$. Rename bound variables and put $H(x,z)=\exists y(F(x,y)\land G(y,z))$. The representation theorem for this particular standard input gives $Q\vdash F(\bar n,y)\leftrightarrow y=\bar m$ for arbitrary $y$, and $Q\vdash G(\bar m,z)\leftrightarrow z=\bar k$ for arbitrary $z$. Equality substitution therefore gives $Q\vdash H(\bar n,z)\leftrightarrow z=\bar k$. Standard truth gives the graph of the composition. Several intermediate values are handled by a finite tuple of existential variables and the same reasoning. No global totality theorem has been used. ∎

For Rosser's comparison of proof numbers we need finite arithmetic case facts. Define

$$x<y\quad\text{as}\quad\exists z(Sz+x=y),\qquad x\le y\quad\text{as}\quad\exists z(z+x=y).$$

The placement of the difference on the left is convenient for the fixed-numeral arguments. These abbreviations have their usual standard meanings; no assertion that $Q$ proves a general linear-order theory is being made.

**Lemma 4.6 (Fixed numeral cuts).** For each standard $n$, $Q$ proves that $x<\bar n$ implies $x=\bar0\lor\cdots\lor x=\overline{n-1}$, that $x\le\bar n$ implies $x=\bar0\lor\cdots\lor x=\bar n$, and that $x\le\bar n\lor\bar n<x$. The empty strict-bound disjunction for $n=0$ is false.

*Proof.* Apply the predecessor axiom finitely many times, externally $n+1$ times, to obtain a finite case split: $x$ is one of zero through $n$, or $x=S^{n+1}u$ for some $u$. In a numeral case, its standard difference witnesses $x\le\bar n$ by a finite calculation. In the last case, $Su+\bar n=S^{n+1}u$ follows by unfolding the addition recursion exactly $n$ times, so $\bar n<x$ has witness $u$.

For the initial-segment assertion, split instead at $n$: either $x$ is below $n$ in that finite numeral list or $x=S^nu$. In the latter case an alleged $Sz+x=\bar n$ unfolds to $S^n(Sz+u)=S^n0$. Cancelling $n$ successors gives $Sz+u=0$. The predecessor split for $u$ makes this impossible: if $u=0$, it is $Sz=0$; if $u=Sv$, addition makes it a successor. Thus the remaining case is excluded. For the non-strict initial segment, split at $n+1$ successors. If $x=S^{n+1}u$, an alleged $z+x=\bar n$ unfolds to $S^{n+1}(z+u)=S^n0$, impossible by successor cancellation and the nonzero-successor axiom. This proves the stated list through $n$. These are finite formal proofs for each fixed $n$, not an application of an induction axiom inside $Q$. ∎

**Lemma 4.7 (Finite verification).** If a relation $R$ is numeralwise decidable, every true finite assertion $\forall x<\bar n\,R(x,\bar a)$ has a proof in $Q$.

*Proof.* For each $i<n$, take the proof of $R(\bar i,\bar a)$ supplied by numeralwise decidability. Under $x<\bar n$, Lemma 4.6 gives the finite equality disjunction. Each case transfers the corresponding proved instance by identity substitution. Disjunction elimination then proves $R(x,\bar a)$ and universal generalisation gives the bounded statement. The same argument applies with $\neg R$. ∎

**Lemma 4.8 (Least-witness representation).** For a primitive recursive predicate $R(x,t)$, least witness search has a numeralwise strong graph at every defined input.

*Proof.* Let $R$ also denote its representing formula and use

$$M(x,t)=R(x,t)\land\forall s<t\,\neg R(x,s).$$

If the least standard witness at input $n$ is $m$, numeralwise decidability proves $R(\bar n,\bar m)$ and Lemma 4.7 proves the finitely many earlier failures, so $Q\vdash M(\bar n,\bar m)$. For uniqueness, the fixed numeral case split places an arbitrary $t$ at one of the numerals below or equal to $m$, or above $m$. Earlier numerals contradict their verified failures; equality is the desired case; above $m$, the bounded negative clause of $M$ contradicts the verified witness at $m$. Thus $Q\vdash\forall t(M(\bar n,t)\leftrightarrow t=\bar m)$. Its standard truth is precisely least search, with no witness when none exists. ∎

Combining Coding inputs A and B with Lemmas 4.5 and 4.8 gives graph representation of partial recursive functions at all defined standard inputs. This derivation makes clear which general coding theorems are imported and which logical closure steps have just been proved.

## Syntax as effective data

Fix an injective coding of finite strings, parse trees and proof trees with effective decoding and primitive recursive constructors. Code zero is not automatically a formula; malformed codes receive explicitly defined default outputs in total syntax operations. A formula's code and the numeral denoting that code are different objects.

The numeral-construction map sends $n$ to the code of the term $S^n0$. Substitution traverses a finite formula tree, replaces only free occurrences, and renames a conflicting binder before descending. One can use binder indices or a fresh variable chosen beyond the finitely many names in the inputs. Standard finite-sequence coding makes these traversals primitive recursive. In particular the diagonal map sends a one-variable formula code $e$ to the code of that formula with $\bar e$ substituted for its designated free variable, and uses a default for inappropriate codes.

A formula representing this map is not a new arithmetic function symbol. The next chapter uses its graph with an existentially quantified output, then proves uniqueness at the one numeral actually inserted. That is the safe route from an external syntax operation to an internal fixed point.

For a computably enumerable theory, a proof record can carry a certificate for every nonlogical axiom occurrence: the enumerator code and finite stage at which that axiom appeared. Checking the finite record, including its logical rules and eigenvariable conditions, is primitive recursive. Plain axiom-set membership need not be decidable. The certificate changes proof presentation without changing which formulas have proofs: every actual axiom occurrence has a finite enumeration witness, and every checked witness really is an enumerated axiom.

## Worked example 1: a finite arithmetic proof

For addition, use graph $F(x,y,z)$ given by $z=x+y$. Unfolding $\bar2+\bar3$ three times gives $S(S(S(\bar2+0)))=\bar5$. The base equation reduces $\bar2+0$ to $\bar2$. Identity substitution then gives $Q\vdash\forall z(F(\bar2,\bar3,z)\leftrightarrow z=\bar5)$. This is a finite proof for the displayed numerals. Its existence does not assert that every intended fact about variable addition is provable in $Q$.

## Worked example 2: search can diverge

Let $R(n,t)$ say $t^2=n$, a primitive recursive decidable relation. Least search returns two at input four and is undefined at input two. For four, the arithmetic verifies failure at zero and one and success at two; Lemma 4.8 gives a unique numeralwise graph output. For two, unbounded search never finds a standard witness. The graph is empty at that input in the standard model, but the representation theorem does not by itself supply a $Q$ proof of its universally negative graph assertion. External divergence and an internal unprovability claim require different arguments.

## Worked example 3: certifying an enumerated axiom

Suppose a theory's enumerator outputs a sentence $A$ at stage $37$. A proof line invoking $A$ includes that stage and the finite enumeration trace. Checking the certificate runs a bounded simulation and compares the produced sentence code with the claimed line. No unbounded search for the stage is needed by the proof checker. If $A$ is not an axiom, no valid finite enumeration certificate exists. Thus certified proof checking is decidable even when discovering whether an arbitrary sentence ever appears in the enumerator is not.

## Exercises

### Exercise 4.1
<a id="recursive-functions-and-representability-ex-1"></a>

Define exponentiation as a primitive recursion from multiplication and prove external totality.

<details>
<summary>Hint 1</summary>

Specify the zero exponent separately.

</details>
<details>
<summary>Hint 2</summary>

Each stage uses the preceding computed value once.

</details>
<details>
<summary>Solution</summary>

Set $pow(x,0)=1$ and $pow(x,n+1)=pow(x,n)\cdot x$. The constant one and multiplication are primitive recursive, so this is a permitted primitive recursion. For every supplied $n$, induction on its finite stages gives a defined natural output. The convention includes $pow(0,0)=1$; a different domain convention would need a different statement.

</details>

### Exercise 4.2
<a id="recursive-functions-and-representability-ex-2"></a>

Explain why numeralwise representability does not mean that the represented function is an arithmetic term.

<details>
<summary>Hint 1</summary>

Compare a graph formula with a value expression.

</details>
<details>
<summary>Hint 2</summary>

An existential output variable can express computation without adding a function symbol.

</details>
<details>
<summary>Solution</summary>

A representing formula $F(x,y)$ asserts a relation between input and output. The base language contains only its declared terms built from $0,S,+,\cdot$. Naming an external function does not enlarge that term grammar. One uses $\exists y(F(x,y)\land B(y))$ rather than writing an undeclared term $B(f(x))$, unless a justified definitional extension has explicitly added it.

</details>

### Exercise 4.3
<a id="recursive-functions-and-representability-ex-3"></a>

Construct a graph formula for the composition of two represented unary functions, and state its defined-input hypothesis.

<details>
<summary>Hint 1</summary>

Name the intermediate output existentially.

</details>
<details>
<summary>Hint 2</summary>

The second computation must be defined at that intermediate value.

</details>
<details>
<summary>Solution</summary>

Use $H(x,z)=\exists y(F(x,y)\land G(y,z))$ after renaming bound variables to prevent capture. If $f(n)=m$ and $g(m)=k$, the numeralwise unique-output equivalences reduce $H(\bar n,z)$ to $z=\bar k$ inside $Q$. If either needed computation is undefined, that particular defined-input conclusion is not available. Standard graph truth still describes the partial composition.

</details>

### Exercise 4.4
<a id="recursive-functions-and-representability-ex-4"></a>

Why do the fixed-numeral case proofs in Lemma 4.6 not establish an induction schema in $Q$?

<details>
<summary>Hint 1</summary>

There is one externally constructed finite proof for each standard numeral.

</details>
<details>
<summary>Hint 2</summary>

A universal internal claim quantifies over all elements of every model.

</details>
<details>
<summary>Solution</summary>

For a specified $n$, the metatheory repeats the predecessor argument finitely many times and constructs that proof. Nothing in the construction is an axiom permitting $Q$ to infer every inductive formula for all its variable values. Nonstandard models can contain elements not covered by any fixed finite numeral list. Uniform internal induction is an additional schema, present in PA and absent from the definition of $Q$.

</details>

### Exercise 4.5
<a id="recursive-functions-and-representability-ex-5"></a>

For a numeralwise decidable predicate, explain how to prove a true bounded universal assertion with bound $\bar3$.

<details>
<summary>Hint 1</summary>

List the three possible values below the bound.

</details>
<details>
<summary>Hint 2</summary>

Transfer the three proved instances by equality in each case.

</details>
<details>
<summary>Solution</summary>

Take proofs of the predicate at zero, one and two. Lemma 4.6 proves that any $x<\bar3$ equals one of those numerals. In each disjunct equality substitution gives the predicate at $x$; disjunction elimination gives it under the bounded assumption, and generalisation yields the bounded universal. This proves the assertion from finite verified instances, not from a claim of general predicate decidability inside $Q$.

</details>

### Exercise 4.6
<a id="recursive-functions-and-representability-ex-6"></a>

Why are least-search graph uniqueness and totality different assertions?

<details>
<summary>Hint 1</summary>

A least witness is unique if it exists.

</details>
<details>
<summary>Hint 2</summary>

Some inputs may have no witness at all.

</details>
<details>
<summary>Solution</summary>

The least-witness condition prevents two distinct outputs for one input. It does not create a witness. For square-root search on natural numbers, four has least witness two, while two has none. Thus the graph can be functional and represent a genuinely partial function. Proving a unique output for each defined standard input does not assert $Q\vdash\forall x\exists yF(x,y)$.

</details>

### Exercise 4.7
<a id="recursive-functions-and-representability-ex-7"></a>

Why do certified proofs of a computably enumerable theory have the same theorems as ordinary finite proofs from its axioms?

<details>
<summary>Hint 1</summary>

A finite proof uses finitely many axiom occurrences.

</details>
<details>
<summary>Hint 2</summary>

Each actual enumerated axiom has a finite stage witness.

</details>
<details>
<summary>Solution</summary>

Attach an enumeration witness to each nonlogical axiom occurrence of an ordinary proof; finitely many such attachments produce a certified proof of the same conclusion. Conversely, erase valid certificates. Each certified occurrence was genuinely enumerated and is an allowed axiom, so the remaining record is an ordinary proof. The theorem sets coincide even if the chosen numerical proof codes differ.

</details>

### Exercise 4.8
<a id="recursive-functions-and-representability-ex-8"></a>

Explain why malformed syntax codes need a convention in the total diagonal-substitution function.

<details>
<summary>Hint 1</summary>

Not every natural number codes a suitable formula.

</details>
<details>
<summary>Hint 2</summary>

A primitive recursive function must still return an output on every input.

</details>
<details>
<summary>Solution</summary>

For a valid one-variable formula code, return its numeral-substitution code. For every other number, choose a fixed default, for example zero. Effective well-formedness checking selects the case, making the map total. The diagonal argument later uses only a valid formula code, so the default does not affect its fixed-point equation. Omitting this case would define only a partial operation while claiming primitive-recursive totality.

</details>

### Exercise 4.9
<a id="recursive-functions-and-representability-ex-9"></a>

Does a primitive recursive proof-checking relation make the theory's theorem set decidable?

<details>
<summary>Hint 1</summary>

Distinguish checking one proposed proof from searching over all proofs.

</details>
<details>
<summary>Hint 2</summary>

Unbounded existential search may fail to terminate on a negative instance.

</details>
<details>
<summary>Solution</summary>

No. Checking a supplied code is a terminating computation, while theoremhood asks whether any proof code exists. Enumeration eventually finds a code when one exists, but can search forever when none exists. Thus the theorem set is computably enumerable under the effective hypotheses; a decision procedure requires a separate argument for terminating negative answers.

</details>

### Exercise 4.10
<a id="recursive-functions-and-representability-ex-10"></a>

What is the precise role of a represented diagonal function in the next chapter's fixed-point construction?

<details>
<summary>Hint 1</summary>

Separate the external output code from the formula describing its graph.

</details>
<details>
<summary>Hint 2</summary>

Only its value at one specific numeral must be proved internally.

</details>
<details>
<summary>Solution</summary>

The external function computes the code of a formula after inserting its own code numeral. Its graph formula relates that particular input numeral to the resulting output numeral uniquely in $Q$. An existentially quantified output then allows another formula to speak about that code without adding a new function term. The fixed-point proof uses this one numeralwise unique graph value, not a universal totality assertion for all internal codes.

</details>

## Sources

The exposition and exercises are new CC BY-SA 4.0 Euler content. Coding input A is Kleene's normal-form theorem for partial recursive functions. Coding input B is the standard primitive-recursive representation theorem for Robinson arithmetic. Primary teaching treatments of representability, arithmetic derivations and fixed points appear in the [Open Logic Project complete text](https://builds.openlogicproject.org/open-logic-complete.pdf) and [Intermediate Logic: An Open Introduction](https://builds.openlogicproject.org/courses/intermediate-logic/il-screen.pdf). Their general coding constructions are explicitly named inputs here; the composition, fixed-numeral and least-search applications used above are proved in the chapter.

## Summary

Primitive recursion is externally total, whereas unbounded search can be partial. A computation can be represented by a graph formula without becoming a term of arithmetic. Numeralwise strong representation is weaker than uniform internal totality. Fixed-numeral facts in $Q$ suffice for finite proof verification and least-witness arguments without using induction inside $Q$. Certified axiom occurrences preserve an effective theory's theorems while making proof checking primitive recursive. These exact coding bridges now support capture-safe diagonalisation and the incompleteness proofs.
