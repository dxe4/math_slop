var e=`---
parent_id: book-types-proofs-construction
chapter_id: writing-checking-proofs-lean4
title: "Writing and Checking Proofs in Lean 4"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Writing and Checking Proofs in Lean 4

Lean gives concrete syntax to many judgements studied in this book. A theorem declaration supplies an expression with a proposition as its type. An elaborator resolves omitted details and constructs a core term; the kernel checks that term against the foundational rules. Reading a proof therefore involves both the mathematical argument and the way the surface text expresses it. Learning tactic commands without understanding the resulting judgement would leave the central question unanswered.

The listings here are short **textual examples with expected results**. They require no installed toolchain to read. No successful execution transcript is claimed. Expected acceptance means that the displayed complete proof is intended to establish its displayed statement under Lean 4's core rules; exact pretty-printing can vary with the environment. The examples use core constructions rather than an imported mathematical library. If you later execute them, keep the actual toolchain and results separate from the expectations printed here.

Before beginning, reconstruct implication introduction, pair construction, sum elimination and equality transport from the earlier chapters. Read each declaration first as a mathematical statement. Identify its domain, bound variables and assumptions before looking at a tactic block. After reading the proof, explain which inference or computation each line represents. A short proof is useful only if its statement expresses the intended claim.

## Reading the judgement

\`Prop\` classifies propositions. If \`p : Prop\`, then a declaration \`h : p\` supplies evidence for that proposition. \`Nat\` is the natural-number datatype. A function domain and codomain can be data types, propositions or dependent families, subject to the universe and elimination rules of the system. Lean distinguishes logical conjunction \`p ∧ q\` from the data product \`α × β\`; their related introduction patterns do not make them the same datatype.

An arrow associates to the right, so \`p → q → p\` means \`p → (q → p)\`. A lambda \`fun hp => ...\` introduces an input. In a theorem proof that input can be a hypothesis. Named explicit parameters in parentheses appear in the declaration's type; implicit parameters in braces are often inferred at use sites. Elaboration inserts such arguments, but their mathematical dependence remains in the core term.

## Worked example 1: identity as a term

\`\`\`lean
namespace EulerTypes
theorem keep (p q : Prop) : p → q → p :=
  fun hp _hq => hp

#check keep
#eval (2 + 3 : Nat)
end EulerTypes
\`\`\`

Expected results: \`keep\` has the type taking propositions \`p,q\` and proofs of \`p,q\` to a proof of \`p\`; the numerical evaluation displays five. The theorem uses no assertion about arithmetic: its proof returns the first proof argument unchanged. The evaluation command computes a numeral and is a different kind of command from declaring a theorem.

The namespace qualifies the declared name, preventing collision with an unrelated declaration named keep. The underscore in \`_hq\` signals that the supplied proof of \`q\` is unused. Weakening permits this. It does not justify omitting \`q\` from the statement: the declaration still specifies a function accepting that input before returning its result. The printed judgement and the proof's data flow agree.

If an expected type mismatch appears when reproducing an example, inspect the elaborated goal and local context rather than guessing a longer tactic sequence. A missing hypothesis and a wrong theorem statement can both produce an unsolved goal, but they are mathematical problems of different kinds. Adding an assumption merely to make a proof work changes the theorem and must be stated as such.

## Worked example 2: conjunction in term and tactic form

\`\`\`lean
theorem eulerSwapTerm (p q : Prop) : p ∧ q → q ∧ p :=
  fun h => And.intro h.right h.left

theorem eulerSwapTactic (p q : Prop) : p ∧ q → q ∧ p := by
  intro h
  constructor
  · exact h.right
  · exact h.left
\`\`\`

Expected result: both declarations establish the displayed implication. In the term version, the input \`h\` has conjunction type. Its right field proves \`q\`; its left field proves \`p\`; \`And.intro\` constructs their conjunction in the requested order. In the tactic version, \`intro\` introduces the implication premise, \`constructor\` chooses the conjunction introduction rule, and the two bullets organise its two obligations.

Each \`exact\` supplies evidence of the current goal. It does not search for an interpretation of the informal problem; that interpretation was fixed by the statement. The tactic programme constructs a term that the kernel must accept. Its intermediate goal display is useful for understanding the derivation but is not a separate logical rule. The term proof makes the resulting evidence particularly easy to inspect.

## Disjunction and branch contexts

A proof of \`p ∨ q\` is consumed by cases. The left branch has a proof of \`p\`; the right branch has a proof of \`q\`. A hypothesis available in one branch is not automatically available in the other. When both branches are intended to prove \`r\`, each must produce that same proposition. This is exactly the common-codomain condition of sum elimination from Chapter 2.

\`\`\`lean
theorem eulerResolve (p q r : Prop)
    (hp : p → r) (hq : q → r) : p ∨ q → r := by
  intro h
  cases h with
  | inl hleft => exact hp hleft
  | inr hright => exact hq hright
\`\`\`

Expected result: the theorem has the stated type and each branch closes by the corresponding implication. Notice that \`hp\` and \`hq\` are parameters of the theorem. The declaration does not construct them from nothing. Removing them would ask for a generally invalid inference from a disjunction to an arbitrary proposition. Tracking the outer context prevents a valid conditional proof from being misreported as an unconditional theorem.

## Definitional equality and rewriting

\`rfl\` constructs reflexivity when the two sides are definitionally equal. It can therefore prove an equality whose sides are different printed expressions but reduce to the same expression. It does not invoke arbitrary mathematical identities. \`rw\` uses a supplied propositional equality to replace matching expressions in a goal or hypothesis, with direction determined by the chosen lemma. Rewriting is justified by equality elimination, not by a textual change that ignores types or binding.

For concrete naturals, \`example : (2 + 3 : Nat) = 5 := by rfl\` is expected to close by computation. With variable expressions, an identity such as commutativity usually requires a theorem. Which side of an operation computes with zero depends on its actual recursive definition. The mathematical fact that addition is commutative does not make both zero equations definitionally equal under every chosen implementation.

## Worked example 3: an explicitly defined addition

\`\`\`lean
namespace EulerTypes
def addL : Nat → Nat → Nat
  | 0, n => n
  | Nat.succ m, n => Nat.succ (addL m n)

theorem addL_zero (m : Nat) : addL m 0 = m := by
  induction m with
  | zero => rfl
  | succ m ih => exact congrArg Nat.succ ih

#eval addL 2 3
end EulerTypes
\`\`\`

Expected results: evaluation displays five and the theorem states the right-zero law for this locally defined operation. Its recursion is on the **first** argument. At zero the equation reduces to reflexivity. At a successor, the induction hypothesis says \`addL m 0 = m\`; applying \`Nat.succ\` to both sides gives the successor goal after unfolding one defining equation. \`congrArg\` expresses that functions preserve equality.

This example deliberately supplies its own operation so that its computation equations are visible. It does not silently assume the recursion direction of Lean's built-in addition. Induction follows the data constructor and provides the recursive correctness hypothesis. A case split alone would expose a predecessor but would not automatically prove the property at that predecessor. The distinction mirrors the recursion and induction principles in the preceding chapter.

## Axiom dependence and the intended statement

A declaration can be accepted relative to axioms in its environment. Commands such as \`#print axioms\` can report dependencies of a named declaration; their actual output should be recorded if the examples are executed in a particular environment. Reading such a report requires knowing what each reported principle means. Absence of an unexpected axiom in a small example does not establish correctness of its external interpretation or the execution stack.

An unfinished proof placeholder does not supply the intended mathematical argument. In a teaching draft it should remain visibly unfinished rather than be presented as a complete theorem. The solutions below contain full short proofs, and the exercises ask the reader to reconstruct them before revealing a solution. Study completion checkmarks still record study rather than evidence of an unseen independent proof attempt.

A theorem about a predicate named sorted proves whatever that definition states. If the definition accidentally means only “the list has a length”, a perfect proof of it cannot establish ordering. Reviewing the statement and definitions is therefore mathematical work independent of kernel checking. The trust-map chapter distinguishes that specification task from elaboration and execution assumptions in detail.

## Worked example 4: diagnosing a missing premise

Consider a request to prove \`p ∨ q → p\` for arbitrary propositions. In a left branch a proof of \`p\` is available, but the right branch contains only a proof of \`q\`. A longer search for tactics cannot make that missing mathematical implication generally valid. Taking \`p\` to be false and \`q\` to be true gives a direct Boolean counterexample to the proposed rule.

A valid repaired statement is \`(p ∨ q) → (q → p) → p\`: it explicitly supplies the missing implication for the right branch. A proof first introduces the two hypotheses, then performs cases on the disjunction. The left branch returns its existing proof; the right applies the supplied implication. The extra premise changes the theorem and must remain visible in its type. A silent alteration of the statement would not complete the original mathematical request.

This example distinguishes three common situations. A correct theorem can need a different proof. An incorrectly stated theorem can need a corrected specification. A true informal assertion can also have been represented by the wrong formal definitions. Reading the goal and context locates which question is being asked; tactic syntax alone does not settle it. Expected failures should therefore be explained as mathematical mismatches rather than presented as mysterious software behaviour.

## Congruence as another short derivation

\`\`\`lean
theorem eulerCongruence (α β : Type) (f : α → β)
    (x y : α) (h : x = y) : f x = f y := by
  cases h
  rfl
\`\`\`

Expected result: the theorem is accepted at the displayed type. Cases on equality reduces the proof to the reflexive endpoint case. Then the two function applications are the same expression, so reflexivity closes the goal. The procedure expresses the derived congruence operation from the identity chapter. It does not require function extensionality, whose input and conclusion concern pointwise equality of two functions rather than applying one function to equal inputs.

The theorem's parameters tell a reader exactly what it assumes. It accepts a function, two inputs and a proof relating them. It returns an equality between their outputs, not an assertion that the function is injective or that the inputs can be recovered from equal outputs. Those reversed claims require different hypotheses. Reading the arrows in their declared direction is as important in a formal listing as in a handwritten proof.

When documenting an actual checked development, distinguish a diagnostic command's output from the theorem's mathematical content. A type display helps identify the declaration; an axiom report helps identify its dependencies; a completed elaboration provides a core expression for checking. None of these substitutes for stating the intended input/output relation. The point of these small examples is to make that relation understandable before much larger libraries and automation obscure the local steps.

## A reversed equality statement needs a new hypothesis

The congruence example maps equal inputs to equal outputs of a fixed function. Its converse is false without an injectivity assumption. A concrete counterexample uses the constant function on natural numbers returning zero. Inputs zero and one have equal outputs, since both outputs reduce to zero. The inputs themselves are distinct by the disjointness of the zero and successor constructors. Thus a proposed theorem recovering arbitrary input equality from output equality fails even though its surface syntax differs from congruence only by reversing an implication.

An injectivity hypothesis supplies exactly the missing direction. Its type says that for every pair of inputs, equality of their outputs implies equality of those inputs. Given that hypothesis and a particular output equality, instantiate the universal inputs and apply the resulting implication. The proof uses the supplied hypothesis; it does not derive injectivity from the function's existence. A declaration that adds this hypothesis is a valid strengthening of the assumptions, while proving a different theorem from the unsupported converse.

This analysis can be performed before writing tactics. First identify the function domain, then inspect whether the argument supplies input equality or output equality. If the required direction is backward, ask which premise permits it. The constant-function counterexample explains why additional automation cannot repair the missing premise. A tactic may find a theorem only after elaboration has introduced assumptions, imported axioms or specialised values that change the actual judgement; those dependencies should remain visible.

The same discipline applies to local variables inferred by an elaborator. A printed proof fragment may omit the function's domain or the parameters of an injectivity hypothesis, but the complete declaration must determine them. Reading the full type prevents mistaking a specialisation to an injective constructor for a theorem about every function. This is a mathematical statement audit, not an execution report: no Lean command is run or certified by the example, and the chapter's expected-result labels remain expectations.

## Exercises

Each exercise gives a Lean statement. The expected outcome of a complete solution is acceptance of that statement, not a claimed command run. Give the mathematical derivation before consulting the term or tactics.

### Exercise 1
<a id="writing-checking-proofs-lean4-ex-1"></a>
Complete \`example (p : Prop) : p → p := ...\` using a term.

<details><summary>Hint 1</summary>

Introduce the implication's input.

</details>
<details><summary>Hint 2</summary>

Return exactly that supplied proof.

</details>
<details><summary>Solution</summary>

Use \`fun hp => hp\`. Under the local assumption \`hp : p\`, the variable rule proves the goal \`p\`. Lambda abstraction discharges it, giving \`p → p\`. Expected result: the completed example is accepted at the displayed implication. No classical principle, arithmetic theorem or automation is required. The proof constructs a method for reusing supplied evidence rather than constructing a proof of arbitrary \`p\` from no assumptions.

</details>

### Exercise 2
<a id="writing-checking-proofs-lean4-ex-2"></a>
Complete \`example (p q : Prop) : p → q → p ∧ q := ...\`.

<details><summary>Hint 1</summary>

Accept both proof arguments before building the result.

</details>
<details><summary>Hint 2</summary>

The constructor is \`And.intro\`.

</details>
<details><summary>Solution</summary>

Use \`fun hp hq => And.intro hp hq\`. The first input has type \`p\`, the second type \`q\`, and conjunction introduction combines them in that order. Expected result: the declared implication is accepted. A tactic version would use two introductions, then \`constructor\`, followed by the two exact hypotheses. Both presentations express the same sequence of inference rules; neither claims a proof of the conjunction without its two premises.

</details>

### Exercise 3
<a id="writing-checking-proofs-lean4-ex-3"></a>
Complete \`example (p q : Prop) : p ∧ q → p := ...\` and identify the eliminated connective.

<details><summary>Hint 1</summary>

The input supplies both fields.

</details>
<details><summary>Hint 2</summary>

Choose its left proof field.

</details>
<details><summary>Solution</summary>

Use \`fun h => h.left\`. This is conjunction elimination: a proof of \`p ∧ q\` contains a proof of \`p\` in its left field. Expected result: the implication is accepted. This does not use disjunction elimination, where a left-side proof is not available in the right branch. Naming the connective explains why an apparently similar projection from \`p ∨ q\` would not have the same type.

</details>

### Exercise 4
<a id="writing-checking-proofs-lean4-ex-4"></a>
Complete \`example (p q : Prop) : p → p ∨ q := ...\` using the left introduction rule.

<details><summary>Hint 1</summary>

The input is enough for one tagged alternative.

</details>
<details><summary>Hint 2</summary>

Use \`Or.inl\` on that proof.

</details>
<details><summary>Solution</summary>

Use \`fun hp => Or.inl hp\`. The expected result type tells elaboration the other proposition \`q\`; the constructor supplies the left tag and its \`p\` payload. Expected result: the implication is accepted. No proof of \`q\` is required for disjunction introduction. A consumer must nevertheless account for both possible tags when supplied an arbitrary proof of the disjunction, as in the worked resolution example.

</details>

### Exercise 5
<a id="writing-checking-proofs-lean4-ex-5"></a>
Complete \`example (p q : Prop) : p ∨ q → q ∨ p := by ...\` by cases.

<details><summary>Hint 1</summary>

Introduce the disjunction and split its constructors.

</details>
<details><summary>Hint 2</summary>

Exchange which output tag carries the same payload.

</details>
<details><summary>Solution</summary>

After \`intro h\`, use \`cases h with\`, followed by branch \`| inl hp => exact Or.inr hp\` and branch \`| inr hq => exact Or.inl hq\`. Both branches prove \`q ∨ p\`. Expected result: the example is accepted with both branches closed. Returning the bare payload would generally give different types in the two branches; the output tags and common disjunction type are what make the case analysis valid.

</details>

### Exercise 6
<a id="writing-checking-proofs-lean4-ex-6"></a>
Complete \`example (p : Prop) : False → p := ...\`. Explain why the theorem supplies no closed proof of \`False\`.

<details><summary>Hint 1</summary>

The input has the empty proposition type.

</details>
<details><summary>Hint 2</summary>

Use its eliminator \`False.elim\`.

</details>
<details><summary>Solution</summary>

Use \`fun h => False.elim h\`. Expected result: the implication is accepted. Under \`h : False\`, empty elimination produces the requested proposition, and lambda abstraction records that assumption as an input. There is no constructor returning \`h\` from nothing. A theorem of this implication type is therefore consistent with the absence of a closed proof of falsehood; its conditional context is essential to its interpretation.

</details>

### Exercise 7
<a id="writing-checking-proofs-lean4-ex-7"></a>
Complete \`example (p q : Prop) : (p → q) → (¬ q → ¬ p) := ...\` using an explicit term.

<details><summary>Hint 1</summary>

Negation is a function to \`False\`.

</details>
<details><summary>Hint 2</summary>

Compose the implication with the supplied refutation.

</details>
<details><summary>Solution</summary>

Use \`fun hpq hnq hp => hnq (hpq hp)\`. First \`hpq hp\` proves \`q\`; applying \`hnq\` derives \`False\`. Discharging \`hp\` constructs \`¬ p\`, then the remaining abstractions yield the requested implication. Expected result: the example is accepted constructively. This is contraposition in its valid direction, with every argument's role visible. The converse direction would need additional assumptions in intuitionistic logic.

</details>

### Exercise 8
<a id="writing-checking-proofs-lean4-ex-8"></a>
Complete \`example (α : Type) (x y : α) (h : x = y) : y = x := ...\` and explain the equality principle used.

<details><summary>Hint 1</summary>

Equality admits symmetry.

</details>
<details><summary>Hint 2</summary>

The supplied proof has a symmetry operation.

</details>
<details><summary>Solution</summary>

Use \`h.symm\`, or the tactic body \`by cases h; rfl\`. The latter reduces the equality proof to the reflexive case, where both sides are the same value and reflexivity closes the goal. Expected result: the reversed equality is accepted. The proof does not claim that two arbitrary inputs are definitionally equal; it uses the supplied propositional equality and its eliminator to justify the reversal.

</details>

### Exercise 9
<a id="writing-checking-proofs-lean4-ex-9"></a>
Inside namespace \`EulerTypes\`, complete \`example (n : Nat) : addL 0 n = n := ...\`. Compare it with the proved right-zero law.

<details><summary>Hint 1</summary>

Look at the first defining equation of \`addL\`.

</details>
<details><summary>Hint 2</summary>

The left side computes without knowing \`n\`.

</details>
<details><summary>Solution</summary>

Use \`rfl\`. Expected result: the example closes by definitional equality, since \`addL 0 n\` unfolds directly to \`n\`. In contrast, \`addL n 0\` cannot choose its defining equation while \`n\` remains an unknown variable; the worked theorem establishes its equality by induction. Both laws are mathematically true, but only one is direct computation for this deliberately chosen recursion direction. This illustrates why a proof should name its operation rather than rely on arithmetic notation alone.

</details>

### Exercise 10
<a id="writing-checking-proofs-lean4-ex-10"></a>
Complete \`def eulerIdType (α : Type u) (x : α) : α := ...\` after \`universe u\`. Explain what changes when this definition is instantiated at different universe levels.

<details><summary>Hint 1</summary>

The body receives an element of the desired result type.

</details>
<details><summary>Hint 2</summary>

Return that element; the universe parameter remains in the declaration.

</details>
<details><summary>Solution</summary>

Use \`x\`. Expected result: the universe-polymorphic identity declaration is accepted. Each instantiation supplies a permitted level and a type at that level, followed by an element. The construction's body is unchanged, but its universe constraints are still checked at each use. This does not introduce a single self-containing universe. It is a family of well-typed declarations parameterised over levels, as discussed in the universe chapter.

</details>

## Summary and official references

A Lean theorem is an exact judgement under declarations and axioms. Terms display evidence directly; tactic blocks construct terms through goals. Conjunction, disjunction and equality retain their mathematical introduction and elimination requirements. Reflexivity uses computation, while induction and rewriting supply proofs beyond direct reduction. Expected outputs describe what examples are intended to do; actual executions and their environments must be recorded separately if undertaken.

The official [Propositions and Proofs](https://docs.lean-lang.org/theorem_proving_in_lean4/Propositions-and-Proofs/), [Inductive Types](https://docs.lean-lang.org/theorem_proving_in_lean4/Inductive-Types/) and [Induction and Recursion](https://leanprover.github.io/theorem_proving_in_lean4/Induction-and-Recursion/) chapters of *Theorem Proving in Lean 4* give the language conventions used here. The mathematical examples and exercise sequence are written for this book. The trust-map chapter continues from these local judgements to libraries, axioms, kernels and the interpretation of a checked theorem.
`;export{e as default};