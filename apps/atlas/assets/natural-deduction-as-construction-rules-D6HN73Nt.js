var e=`---
parent_id: book-types-proofs-construction
chapter_id: natural-deduction-as-construction-rules
title: "Natural deduction as construction rules"
level: advanced-undergraduate
estimated_minutes: 180
license: CC BY-SA 4.0
---

# Natural deduction as construction rules

This chapter formalizes the BHK reading of Chapter 1 as a system of natural deduction. Each connective receives an introduction rule, which explains how to build evidence for it, and an elimination rule, which explains how to use evidence for it. The chosen rules express the BHK specification in a particular formal presentation. We present the rules, derive several theorems, and identify common misapplications.

## The structure of natural deduction

A natural deduction proof is a tree. Leaves are assumptions or axioms. Internal nodes are rule applications. The root is the conclusion. An assumption may be discharged by a rule, meaning it is no longer available below that point.

We write proofs in sequent style: $\\Gamma \\vdash t : A$ means that term $t$ is evidence for $A$ under assumptions $\\Gamma$.

## Implication

**Introduction.** To establish $\\Gamma \\vdash \\lambda x.\\, t : A \\to B$, we require a derivation of $\\Gamma, x : A \\vdash t : B$. The assumption $x : A$ is discharged.

$$\\frac{\\Gamma, x : A \\vdash t : B}{\\Gamma \\vdash \\lambda x.\\, t : A \\to B}\\;({\\to}I)$$

**Elimination.** Given $\\Gamma \\vdash f : A \\to B$ and $\\Gamma \\vdash u : A$, we obtain $\\Gamma \\vdash f\\,u : B$.

$$\\frac{\\Gamma \\vdash f : A \\to B \\quad \\Gamma \\vdash u : A}{\\Gamma \\vdash f\\,u : B}\\;({\\to}E)$$

The introduction rule packages a derivation depending on $x$; the elimination rule applies the package to evidence $u$.

## Conjunction

**Introduction.** Given $\\Gamma \\vdash a : A$ and $\\Gamma \\vdash b : B$, form $\\Gamma \\vdash (a, b) : A \\times B$.

$$\\frac{\\Gamma \\vdash a : A \\quad \\Gamma \\vdash b : B}{\\Gamma \\vdash (a, b) : A \\times B}\\;({\\times}I)$$

**Elimination.** From $\\Gamma \\vdash p : A \\times B$, project $\\Gamma \\vdash \\pi_1(p) : A$ or $\\Gamma \\vdash \\pi_2(p) : B$.

$$\\frac{\\Gamma \\vdash p : A \\times B}{\\Gamma \\vdash \\pi_1(p) : A}\\;({\\times}E_1) \\qquad \\frac{\\Gamma \\vdash p : A \\times B}{\\Gamma \\vdash \\pi_2(p) : B}\\;({\\times}E_2)$$

## Disjunction

**Introduction.** Inject evidence into the left or right side.

$$\\frac{\\Gamma \\vdash a : A}{\\Gamma \\vdash \\operatorname{inl}(a) : A + B}\\;({+}I_1) \\qquad \\frac{\\Gamma \\vdash b : B}{\\Gamma \\vdash \\operatorname{inr}(b) : A + B}\\;({+}I_2)$$

**Elimination.** Case analysis: if $s : A + B$, and we can derive $C$ from $A$ and from $B$, then we have $C$.

$$\\frac{\\Gamma \\vdash s : A + B \\quad \\Gamma, x : A \\vdash t : C \\quad \\Gamma, y : B \\vdash u : C}{\\Gamma \\vdash \\operatorname{case}(s; x.\\, t; y.\\, u) : C}\\;({+}E)$$

Both branches must yield the same type $C$. The assumptions $x : A$ and $y : B$ are discharged in their respective branches.

## The empty proposition

The empty proposition $\\bot$ has no introduction rule. Its elimination rule says that from contradiction, anything follows:

$$\\frac{\\Gamma \\vdash e : \\bot}{\\Gamma \\vdash \\operatorname{abort}(e) : A}\\;({\\bot}E)$$

This is ex falso quodlibet. There is no closed constructor for $\\bot$ in this core, but a contradiction assumption may occur in an open context. Empty elimination uses that assumption and records the dependence; it does not manufacture an unconditional contradiction.

## Worked example: a full derivation

We derive $A \\to (B \\to C) \\vdash (A \\times B) \\to C$.

1. Assume $f : A \\to (B \\to C)$.
2. To show $(A \\times B) \\to C$, assume $p : A \\times B$.
3. From $p$, obtain $\\pi_1(p) : A$ by \${\\times}E_1$.
4. From $p$, obtain $\\pi_2(p) : B$ by \${\\times}E_2$.
5. Apply $f$ to $\\pi_1(p)$, obtaining $f(\\pi_1(p)) : B \\to C$ by \${\\to}E$.
6. Apply $f(\\pi_1(p))$ to $\\pi_2(p)$, obtaining $f(\\pi_1(p))(\\pi_2(p)) : C$ by \${\\to}E$.
7. Discharge $p$ by \${\\to}I$, yielding $\\lambda p.\\, f(\\pi_1(p))(\\pi_2(p)) : (A \\times B) \\to C$.
8. Discharge $f$ by \${\\to}I$, yielding the final term.

The term is

$$\\lambda f.\\, \\lambda p.\\, f(\\pi_1(p))(\\pi_2(p)).$$

This is the uncurrying function. Its data flow is explicit: the pair is decomposed, and the components are fed to $f$ in order.

## Common errors

**Error: undischarged assumptions.** A proof tree that uses an assumption not present in the context and not discharged by an introduction rule is invalid. Always check that every leaf assumption is either in the initial context or discharged by a rule above the root.

**Error: mismatched types in case analysis.** In \${+}E$, both branches must produce the same type $C$. A common mistake is to return evidence for $A$ in the left branch and evidence for $B$ in the right branch when $A \\neq B$.

**Error: confusing introduction and elimination.** Introducing a connective builds evidence; eliminating it consumes evidence. Applying \${\\to}I$ when \${\\to}E$ is needed, or vice versa, produces ill-typed or invalid proofs.

## Assumption names and structural discipline

A context records which evidence can be used, with distinct names for its declarations. The names matter when the same proposition appears more than once: $x:A,y:A$ contains two declared inputs even though their types agree. In the intuitionistic calculus here an input may be used twice or not used. Linearity later changes that discipline. Neither policy is an unmentioned property of the printed arrow; it belongs to the chosen rules for contexts.

**Weakening** allows an unused fresh assumption. If a derivation uses context $\\Gamma$, adding $z:B$ does not invalidate it. To justify this, induct on its tree. Every original assumption is still present at a leaf. At an internal rule, the induction hypothesis supplies the enlarged premises; rename a discharged binder if it conflicts with $z$, then apply the same rule. Implication and disjunction discharge their own fresh labels, not the newly added one. All introduction, application, pairing, projection and empty-elimination rules therefore remain valid.

**Contraction** permits repeated use of one assumption. In a term, $(x,x)$ uses $x:A$ twice and constructs $A\\times A$. The same context serves both premises of pair introduction. This explains why merely counting printed assumptions and conclusions is not a sound resource argument in this calculus. Exchange of independent declarations changes their order without changing their availability. Dependent contexts later need more care because a later declaration's type can mention an earlier variable.

These structural choices explain an important distinction: discharging a label does not destroy the argument supplied to its resulting function. It removes a free assumption from the outer judgement and binds its uses inside the function. An application subsequently supplies the evidence that those bound occurrences need. The proof tree and its term therefore preserve dependencies even when the final conclusion is short.

## Worked example 2: distributing evidence

Construct $A\\times(B+C)\\to(A\\times B)+(A\\times C)$. Assume $p:A\\times(B+C)$ and obtain $a=\\pi_1(p):A$ and $s=\\pi_2(p):B+C$. Analyse $s$. In the left branch, fresh $b:B$ permits $(a,b):A\\times B$ and hence $\\operatorname{inl}(a,b):(A\\times B)+(A\\times C)$. In the right branch, fresh $c:C$ permits the corresponding right injection of $(a,c)$. Both branches reach the same sum type. Discharge the branch labels through case elimination, then discharge $p$ through arrow introduction.

The resulting term is
$$\\lambda p.\\operatorname{case}(\\pi_2(p);b.\\operatorname{inl}(\\pi_1(p),b);c.\\operatorname{inr}(\\pi_1(p),c)).$$
The projection $\\pi_1(p)$ can appear in both written branches because it is available in the shared outer context. Only one branch is selected on a concrete tagged input. No proof of $B$ escapes from the left branch to justify anything in the right branch; the shared result type is precisely what makes the conditional dependence valid.

## Worked example 3: a false elimination proposal

Suppose someone proposes a rule taking $A+B$ directly to $A$. Use ordinary Boolean truth values as a simple soundness model for the existing rules. Interpret products as conjunction, sums as disjunction, arrows as material implication, and zero as false. Every context-preserving rule sends true premises under true assumptions to a true conclusion. Arrow introduction expresses that the conclusion follows whenever its discharged premise is true. Case elimination is valid because a true disjunction has at least one true side and each branch supplies the same true conclusion under that side. Induction on a proof tree therefore proves this truth-preservation property for the whole calculus.

Now assign $A$ false and $B$ true. The assumption $A+B$ is true and the proposed conclusion $A$ is false. The derived soundness property excludes a derivation of that inference in the stated calculus. This countermodel does not prove that every classically valid formula has a constructive derivation: Boolean semantics is sufficient to refute this particular invalid rule, but it cannot separate excluded middle from constructive logic. Different semantic questions need different models.

## Substitution is composition of derivations

Suppose $\\Gamma,x:A\\vdash t:B$ and $\\Gamma\\vdash u:A$. Replacing the free occurrences of the first derivation's assumption label $x$ by the second derivation should give $\\Gamma\\vdash t[u/x]:B$. This is the substitution lemma expressed as composition of proofs. It does not allow inserting a proof under incompatible assumptions; both displayed contexts are part of its hypothesis.

The proof is induction on the derivation of $t$. A leaf using $x$ is replaced by the supplied derivation of $u$. Any other assumption leaf is unchanged. At function application, apply induction to both premises and use application again. Pairing and projections proceed similarly. For implication introduction, rename the bound variable fresh for $u$, apply induction to the body, then reintroduce the implication. Sum introduction uses induction on its payload. For sum elimination, freshen both branch labels, apply induction to the scrutinee and the two branches, then reapply case elimination. Empty elimination applies induction to the contradiction premise. These cases exhaust the constructors being used.

This argument explains why capture avoidance is logical rather than cosmetic. If a branch binder captured a free variable of $u$, the inserted proof would begin depending on a new assumption that its original derivation did not have. Renaming prevents that accidental change of evidence. It also explains the computational beta rule: introducing an implication from a derivation depending on $x$, then immediately applying it to $u$, simplifies to exactly this substitution.

## Reading a complete proof tree

Audit a proposed derivation from its leaves towards its root. Name each assumption and locate its discharge, if any. At every elimination, identify the connective being used and the evidence it requires. At a case split, check both local contexts and the common result type. Finally distinguish an open judgement under named hypotheses from a closed implication obtained by discharging them. Both can be valid but answer different stated requests.

For example, under $f:A\\to B,g:B\\to C$, the term $\\lambda x.g(fx)$ proves $A\\to C$. Discharging $f$ and $g$ further produces a closed theorem with two additional arrow domains. Keeping those intermediate judgements visible avoids treating assumptions as automatically established facts. Later chapters use precisely this bookkeeping when a large proof assistant context contains axioms, parameters and imported declarations.

## Detours as explicit tree substitutions

Suppose a derivation under $x:A$ constructs $t:B$, then implication introduction gives $\\lambda x.t:A\\to B$. If it is immediately eliminated using $u:A$, the composite term is $(\\lambda x.t)u$. Its simplified derivation substitutes the proof of $u$ at every leaf labelled $x$. Repeated uses of that label duplicate the supplied proof tree, as allowed by the current structural rules. An unused label makes the supplied proof unnecessary for the simplified term. These possibilities explain why a termination proof cannot simply count a beta contraction as always making the printed term shorter.

There are corresponding detours for the other connectives. Projecting the first component of an introduced pair $(a,b)$ leaves $a$. Analysing an introduced left injection selects the left derivation and substitutes its payload for that branch's assumption. Both simplifications preserve the outer context and result type, by the same substitution reasoning. They remove a local construction/use detour; a larger tree may still contain others.

This local account does not alone prove that repeatedly removing detours must terminate in every order. Substitution can create further redexes or duplicate existing ones. Chapter 4 supplies the stronger reducibility argument. Separating the local correctness of one simplification from global termination keeps two different metatheorems visible: preservation of the judgement and impossibility of an infinite sequence.

## A nested case proof and its exact equations

Consider reassociating a three-way alternative. The input type is (A+B)+C and the desired output A+(B+C). Assume one input s. Its outer case has a left assumption u:A+B and a right assumption c:C. In the left case, split u again. An a:A produces the outer left injection. A b:B first produces a left injection into B+C, then a right injection into A+(B+C). In the outer right case, c first produces a right injection into B+C and then a right injection into the complete output.

All three terminal branches have the same final type. The two inner assumptions are discharged by the inner case, whose conclusion is available under the outer left assumption. The outer case then discharges its two assumptions, and arrow introduction discharges s. This constructs the required function with no assumption that one of A, B or C has already been proved. It transforms supplied tagged evidence rather than selecting an arbitrary true disjunct.

There is also a reverse construction. For an input of A+(B+C), the left branch a maps to the left injection of the left injection of a, now in (A+B)+C. The right branch is itself split: b maps to the left injection of the right injection of b, while c maps to the outer right injection. Again every terminal branch reaches one common type before its local assumptions are discharged.

On the three possible nested constructor forms, composing these two functions returns the original tagged evidence. For a left-left input, the two selected cases return its A-payload under the same left-left tags. For a left-right input, they return its B-payload under those left-right tags. For an outer-right input they return its C-payload with the outer-right tag. These are explicit case and substitution reductions, so no classical truth-value argument is needed.

Two arrows in opposite directions alone would not prove that arbitrary types are isomorphic. The composite equations matter. Even here the constructor computations do not assert that a neutral open sum variable is definitionally identical to an expanded case expression in a calculus lacking a sum eta law. One can state the equalities in an appropriate extensional or propositional equality theory later. The present result is exactly the pair of derivations and their reductions on the displayed constructors. This distinction is useful whenever a proof assistant separates definitional reduction from a separately proved equality.

The example also illustrates why the shape of a derivation carries information that a truth table omits. Both association patterns have the same three truth possibilities, but the functions specify where every tag and payload goes. A reader can reconstruct their input requirements, their case-local hypotheses and their output data from the proof tree. That is the construction-level content of this natural-deduction presentation.

## Practice exercises

### Exercise 1
<a id="natural-deduction-as-construction-rules-ex-1"></a>
Give a natural deduction derivation of $A \\times B \\vdash B \\times A$ with explicit term.


<details><summary>Hint 1</summary>

Project both fields under one pair assumption.

</details>
<details><summary>Hint 2</summary>

Introduce the output pair in the opposite order.

</details>
<details><summary>Solution</summary>

Assume $p : A \\times B$. By \${\\times}E_2$, $\\pi_2(p) : B$. By \${\\times}E_1$, $\\pi_1(p) : A$. By \${\\times}I$, $(\\pi_2(p), \\pi_1(p)) : B \\times A$. Discharge $p$ by \${\\to}I$:

$$\\lambda p.\\, (\\pi_2(p), \\pi_1(p)) : (A \\times B) \\to (B \\times A).$$

</details>

### Exercise 2
<a id="natural-deduction-as-construction-rules-ex-2"></a>
Derive $A \\to B, B \\to C \\vdash A \\to C$ with explicit term.


<details><summary>Hint 1</summary>

Assume an A input while keeping both function assumptions.

</details>
<details><summary>Hint 2</summary>

Apply the two functions in the type-compatible order.

</details>
<details><summary>Solution</summary>

Assume $f : A \\to B$ and $g : B \\to C$. To show $A \\to C$, assume $x : A$. Then $f(x) : B$ by \${\\to}E$, and $g(f(x)) : C$ by \${\\to}E$. Discharge $x$, then $f$ and $g$:

$$\\lambda f.\\, \\lambda g.\\, \\lambda x.\\, g(f(x)) : (A \\to B) \\to (B \\to C) \\to (A \\to C).$$

</details>

### Exercise 3
<a id="natural-deduction-as-construction-rules-ex-3"></a>
Show that $A + B \\to C$ is equivalent to $(A \\to C) \\times (B \\to C)$ by giving both directions.


<details><summary>Hint 1</summary>

For one direction, feed each injection to the supplied function.

</details>
<details><summary>Hint 2</summary>

For the reverse direction, case-analyse a sum using the two component functions.

</details>
<details><summary>Solution</summary>

Forward: assume $h : A + B \\to C$. Define $f = \\lambda a.\\, h(\\operatorname{inl}(a)) : A \\to C$ and $g = \\lambda b.\\, h(\\operatorname{inr}(b)) : B \\to C$. Then $(f, g) : (A \\to C) \\times (B \\to C)$.

Backward: assume $(f, g) : (A \\to C) \\times (B \\to C)$. Define $h = \\lambda s.\\, \\operatorname{case}(s; x.\\, f(x); y.\\, g(y)) : A + B \\to C$.

</details>

### Exercise 4
<a id="natural-deduction-as-construction-rules-ex-4"></a>
Explain why the following is invalid: from $\\vdash A \\lor B$, derive $\\vdash A$.


<details><summary>Hint 1</summary>

Sum elimination must justify one common conclusion in both branches.

</details>
<details><summary>Hint 2</summary>

The right branch supplies B evidence, not A evidence.

</details>
<details><summary>Solution</summary>

The elimination rule for disjunction requires a common type $C$ derivable from both $A$ and $B$. Taking $C = A$ fails in the right branch, where $y : B$ does not yield $A$ without additional assumptions. This is the constructive distinction between knowing $A \\lor B$ and knowing which side holds.

</details>

### Exercise 5
<a id="natural-deduction-as-construction-rules-ex-5"></a>
Give a derivation of $A\\to A\\times A$ and identify the structural permission it uses.

<details><summary>Hint 1</summary>

Start with one assumption of type $A$.

</details>
<details><summary>Hint 2</summary>

The two pair-introduction premises may use the same context.

</details>
<details><summary>Solution</summary>

Under $x:A$, the variable rule supplies $x:A$ for both premises of pair introduction, giving $(x,x):A\\times A$. Discharge $x$ to obtain $\\lambda x.(x,x):A\\to A\\times A$. The repeated use is allowed by the intuitionistic structural discipline, often described through contraction. In a linear system with an arbitrary resource type $A$, this derivation would need a duplication permission that is absent by default. The current theorem therefore records a choice of logic as well as its formula.

</details>

### Exercise 6
<a id="natural-deduction-as-construction-rules-ex-6"></a>
Construct $A+B\\to B+A$, showing the result type in both branches.

<details><summary>Hint 1</summary>

Eliminate the input sum by cases.

</details>
<details><summary>Hint 2</summary>

Each payload is injected into the opposite side of the output sum.

</details>
<details><summary>Solution</summary>

Use $\\lambda s.\\operatorname{case}(s;x.\\operatorname{inr}(x);y.\\operatorname{inl}(y))$. In the left branch $x:A$ gives the right injection into $B+A$. In the right branch $y:B$ gives the left injection into the same type $B+A$. Case elimination therefore has a single codomain and discharges both branch labels. The final lambda discharges the original sum input. Merely returning $x$ or $y$ without tags would not make the branch result types match.

</details>

### Exercise 7
<a id="natural-deduction-as-construction-rules-ex-7"></a>
Explain why $x:A\\vdash\\lambda y.x:B\\to A$ is open, and state its fully discharged closed counterpart.

<details><summary>Hint 1</summary>

One variable is bound by the written lambda and one remains free.

</details>
<details><summary>Hint 2</summary>

Discharge the remaining assumption with an outer lambda.

</details>
<details><summary>Solution</summary>

The term binds $y:B$ but still refers freely to the assumption $x:A$. Its judgement is valid under that context, not with an empty context. Adding an outer abstraction yields $\\vdash\\lambda x.\\lambda y.x:A\\to B\\to A$. The new outer arrow records the input needed to produce the original constant function. Ignoring the context would incorrectly claim a closed construction of $A$ from no assumptions whenever a $B$ input was later supplied.

</details>

### Exercise 8
<a id="natural-deduction-as-construction-rules-ex-8"></a>
Use a Boolean valuation to refute a proposed rule from $A\\to B$ to $B\\to A$. Explain what the countermodel establishes.

<details><summary>Hint 1</summary>

Make the original premise vacuously true.

</details>
<details><summary>Hint 2</summary>

Let $A$ be false and $B$ true.

</details>
<details><summary>Solution</summary>

With $A$ false and $B$ true, $A\\to B$ is true, whereas $B\\to A$ is false. Truth preservation of every existing rule, proved by induction on derivations, therefore forbids deriving this inference in the calculus. The argument refutes the general reversal rule. It does not assert that no particular pair of propositions can have implications in both directions; additional hypotheses or special propositions may support that stronger relation.

</details>

### Exercise 9
<a id="natural-deduction-as-construction-rules-ex-9"></a>
For $\\Gamma,x:A\\vdash t:B$ and $\\Gamma\\vdash u:A$, describe the substitution proof's case when $t$ is a sum elimination. State the renaming requirement.

<details><summary>Hint 1</summary>

There are three immediate typing subderivations.

</details>
<details><summary>Hint 2</summary>

Both branch binders must be fresh for the inserted term.

</details>
<details><summary>Solution</summary>

Write the term as $\\operatorname{case}(s;a.r;b.q)$. Rename $a,b$ so that neither is $x$ nor free in $u$. Induction replaces $x$ in the scrutinee and both branch derivations, preserving the branch types and their respective extra assumptions. Reapply sum elimination with its common result type. Without freshening, substitution could bind an originally free variable of $u$ in one branch and change its assumptions. The case explains both the tree-composition and capture-avoidance parts of the lemma.

</details>

### Exercise 10
<a id="natural-deduction-as-construction-rules-ex-10"></a>
Derive $(A\\to0)\\to(A\\to B)$ and explain why the derivation does not produce an unconditional proof of $B$.

<details><summary>Hint 1</summary>

Assume a refutation and then an $A$ input.

</details>
<details><summary>Hint 2</summary>

Apply empty elimination to the resulting contradiction.

</details>
<details><summary>Solution</summary>

Under $n:A\\to0$ and $a:A$, application gives $na:0$. Empty elimination gives $\\operatorname{abort}_B(na):B$. Discharge $a$, then $n$, obtaining $\\lambda n.\\lambda a.\\operatorname{abort}_B(na)$. The closed conclusion has two arrow domains recording both inputs; it is not a term of bare type $B$. The inner contradiction arises only under the jointly impossible assumptions. Empty elimination is a valid rule without supplying any closed constructor of the empty type.

</details>

## Chapter summary

Natural deduction formalizes the BHK reading as introduction and elimination rules. Implication introduction packages derivations; elimination applies them. Conjunction forms pairs and projects them. Disjunction injects tags and eliminates by case analysis. The empty proposition has no introduction rule and serves as a source of contradiction.

**Backward pointers:** This chapter builds directly on Chapter 1, "The Brouwer–Heyting–Kolmogorov reading," which supplied the evidence interpretation.

**Forward pointers:** Chapter 3, "Simply typed lambda calculus," gives the term language whose typing rules are exactly these natural deduction rules. Chapter 5, "Curry–Howard: precise scope," explains the correspondence systematically.
`;export{e as default};