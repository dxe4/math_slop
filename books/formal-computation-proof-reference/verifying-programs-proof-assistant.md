
# Verifying Programmes in a Proof Assistant

A proof assistant can represent a language, its execution relation and a specification inside one logical environment. A verification theorem then relates these definitions through an explicit proof. The difficult work includes choosing the right definitions and statement; a kernel can check an impeccably formed proof of an unintended specification. This chapter develops a deliberately small verification library whose rules can be understood without executing a toolchain.

The Lean 4 listings are **textual examples with expected outcomes**. They have not been run here. Expected acceptance describes the intended complete declarations, not a compiler transcript or a reviewed artefact. Names, assumptions and the mathematical arguments remain visible so that a reader can assess the claims independently of that expectation. For the underlying term, tactic and axiom vocabulary, use [Type Theory and Proof Assistants](#/books/types-proofs-construction), especially its Lean and trust-map chapters.

## A small language represented as data

Use a single natural-number store. Commands are skip, a state update by a total function, and sequence. This is intentionally a restricted language: there are no loops, exceptions, inputs, heaps or machine overflow. An update function is a semantic object supplied to the constructor, so this example is a deeply embedded command structure with shallow embedded primitive updates. It does not pretend to parse or verify arbitrary source text.

```lean
namespace EulerVerify
inductive Cmd where
  | skip : Cmd
  | set : (Nat → Nat) → Cmd
  | seq : Cmd → Cmd → Cmd

inductive Runs : Cmd → Nat → Nat → Prop where
  | skip (s : Nat) : Runs Cmd.skip s s
  | set (f : Nat → Nat) (s : Nat) : Runs (Cmd.set f) s (f s)
  | seq {c d : Cmd} {s m t : Nat} :
      Runs c s m → Runs d m t → Runs (Cmd.seq c d) s t
end EulerVerify
```

Expected outcome: the two inductive declarations introduce exactly the displayed constructors. `Runs` is a relation whose arguments name command, initial store and final store. Its sequence constructor accepts an intermediate store implicitly and two derivations that agree on it. A value of `Runs c s t` is therefore a finite execution tree, matching Chapter 1's big-step interpretation for this smaller language.

Functions in the set constructor are total functions in Lean's logic. They can contain nontrivial computation or depend on axioms in the surrounding environment, but this command language has no separately represented divergence outcome. A theorem about it should not be reported as verification of a general-purpose while language. To express such a language, introduce its syntax and execution rules explicitly, then prove the additional loop rules rather than reusing an inapplicable total-language argument.

## Specifications are predicates

An assertion is `Nat → Prop`. A partial-correctness specification quantifies over every execution derivation from a precondition state. The following definition makes the quantifier order and implication directions explicit.

```lean
namespace EulerVerify
def Valid (P : Nat → Prop) (c : Cmd) (Q : Nat → Prop) : Prop :=
  ∀ s t, P s → Runs c s t → Q t
end EulerVerify
```

Expected outcome: `Valid P c Q` unfolds to the displayed universal property. It does not, by its shape alone, assert that an execution exists. For this loop-free command datatype, existence can be proved separately by structural induction: skip has its constructor; update has its constructor; sequence composes the two induction results through their intermediate state. That separate theorem allows partial and total correctness to coincide here, but it would fail for arbitrary diverging loops.

Assertions can be stronger or weaker than the intended requirement. Postcondition True is easy to establish and says nothing about the result. Postcondition t=5 is a concrete functional claim. A specification about natural numbers also inherits their no-negative-value arithmetic; it is a different representation from Chapter 1's integer store. Formalisation choices belong in the explanation of the statement.

## Worked example 1: the skip rule by inversion

```lean
namespace EulerVerify
theorem valid_skip (P : Nat → Prop) : Valid P Cmd.skip P := by
  intro s t hp hrun
  cases hrun
  exact hp
end EulerVerify
```

Expected outcome: the theorem establishes the skip rule. Introducing the universally quantified stores and hypotheses exposes the execution proof. Cases on that proof can use only the skip constructor, because the relation's command index is Cmd.skip. Its indices identify the final store with the initial one. The remaining goal is exactly the existing precondition proof.

This is inversion on indexed inductive evidence. It does more than inspect an untyped trace record: impossible constructors are ruled out by the command index, and equal indices carry the final-store information into the goal. The mathematical proof is simply that skip changes nothing. Lean's dependent elimination expresses that proof without requiring a separate hand-written equality between the two stores.

## Worked example 2: assignment as a backward specification

```lean
namespace EulerVerify
theorem valid_set (f : Nat → Nat) (Q : Nat → Prop) :
    Valid (fun s => Q (f s)) (Cmd.set f) Q := by
  intro s t hp hrun
  cases hrun
  exact hp
end EulerVerify
```

Expected outcome: the update rule is accepted at the stated type. The precondition is the postcondition composed with f. Inverting the execution proof identifies t with f s, after which the precondition supplies precisely the needed result. This is the semantic form of substitution for a single-store update.

The direction matters. Starting from Q(s) does not generally imply Q(f(s)); an update can destroy the assertion. Computing Q∘f backward gives the exact states needed for this deterministic total primitive. A verification-condition generator can repeatedly use this equation, but its correctness requires a theorem connecting its generated condition to Valid. A solver accepting an unrelated formula would not establish that connection.

For f=Nat.succ and Q(t) meaning t=5, the precondition says succ(s)=5. With known initial s=4 this reduces to a concrete equality. The verification theorem concerns every execution from such a state; evaluating the update once at four would give only one computed result. In this simple deterministic primitive the result is easy, but the logical distinction remains important when composition and abstractions are added.

## Worked example 3: composition with an intermediate assertion

```lean
namespace EulerVerify
theorem valid_seq (P M Q : Nat → Prop) (c d : Cmd)
    (hc : Valid P c M) (hd : Valid M d Q) :
    Valid P (Cmd.seq c d) Q := by
  intro s t hp hrun
  cases hrun with
  | seq hfirst hsecond =>
      exact hd _ _ (hc _ _ hp hfirst) hsecond
end EulerVerify
```

Expected outcome: the sequence rule follows from its two premises. Inversion supplies an intermediate store and its two execution proofs. Applying hc to the first proof gives M there; applying hd to that result and the second proof gives Q at the final store. The underscores ask elaboration to infer store arguments already determined by those proofs. They do not add assumptions or omit an unproved mathematical step.

For two increments from zero, take P(s):s=0, M(s):s=1 and Q(s):s=2. Each update rule plus elementary equality reasoning proves its corresponding premise, and valid_seq composes them. The midpoint prevents a mistake such as evaluating both updates from the original zero state. It is exactly the intermediate state that Chapter 1's execution tree makes explicit and Chapter 4's Hoare sequence rule abstracts into an assertion.

## A total evaluator and its relation to execution

For this restricted syntax define an evaluator by structural recursion:

```lean
namespace EulerVerify
def eval : Cmd → Nat → Nat
  | Cmd.skip, s => s
  | Cmd.set f, s => f s
  | Cmd.seq c d, s => eval d (eval c s)
end EulerVerify
```

Expected outcome: eval is a total function with these equations. Recursive calls use proper subcommands, so the definition does not require a user-supplied loop variant. Termination of the meta-language definition should not be confused with proving that an arbitrary object-language loop terminates; no such loop constructor exists here.

**Theorem 11.1.** Runs c s t holds if and only if t=eval c s.

*Proof, forward.* Induct on the Runs derivation. Skip and set agree with their evaluator equations. In a sequence, the first induction hypothesis identifies the intermediate store with eval c s, and the second identifies t with eval d of that intermediate store. Substitute the first equality into the second and use the sequence evaluator equation.

*Proof, reverse.* Induct structurally on c. For skip and set, the equality identifies t with the result of the corresponding constructor. For sequence, let m=eval c s. The first induction hypothesis supplies Runs c s m by reflexivity; the second supplies Runs d m (eval d m). Compose them with Runs.seq and substitute the assumed equality for t. These cases exhaust the datatype. ∎

This complete handwritten proof gives both evaluator adequacy and result uniqueness. It also gives execution existence by choosing t=eval c s. A mechanised version should state precisely this relation rather than only compute a few sample commands. The central value is the universally quantified theorem, whose proof follows the semantic structure rather than an enumeration of inputs.

## Consequence and verification conditions

Suppose P' implies P at every store, Valid P c Q holds, and Q implies Q'. For any P' input and execution, the first implication supplies P, validity supplies Q, and the second implication supplies Q'. This proves the consequence rule with all implication directions explicit. Preconditions become stronger; postconditions become weaker.

A backward transformer for this syntax is wp(skip,Q)=Q, wp(set f,Q)=Q∘f and wp(seq c d,Q)=wp(c,wp(d,Q)). Structural induction proves Valid (wp(c,Q)) c Q using the three displayed rules. For this total deterministic syntax, Theorem 11.1 also shows that wp(c,Q)(s) is equivalent to Q(eval c s), so it is genuinely weakest. A precondition establishing Q for every execution implies it by applying the validity premise to the evaluator's execution.

An automatic routine can generate wp, but the proof above justifies what it generates. If machine-integer effects, exceptions or partial operations are added, both the command semantics and the backward transformer need corresponding cases. Reusing the old transformer with the new operations would leave a missing soundness case. Making the datatypes explicit helps such gaps become visible rather than relying on a broad informal promise about automation.

## Scaling the development without hiding the boundary

For while loops, represent terminating execution inductively and prove partial-correctness invariant rules by induction on that evidence. For total correctness, add a well-founded decrease and prove execution existence under the invariant. For heaps, include heap state and ownership assertions. For concurrency, choose an interleaving or weaker-memory model and encode its compatibility assumptions. A proof assistant can organize each extension, but it cannot supply omitted semantic choices merely because the final tactic block closes.

A source programme also needs a relationship to its embedded representation. A parser and translator can be proved correct, trusted as assumptions, or manually inspected in a small example; these are different evidence levels. If an extracted or compiled executable is used, its relation to the logical function or relation needs the compiler and runtime assumptions appropriate to that route. A theorem about eval remains a theorem about eval until those links are supplied.

Keep expected outcomes separate from actual tool output. The examples here describe intended complete proofs and provide their mathematics; no checked-environment version, successful elaboration log or axiom report is invented. Later execution can record those concrete facts without changing the meaning of the stated draft theorem. Independent statement review remains necessary even after a kernel accepts a proof.

## The backward transformer theorem without automation

The weakest-precondition equations above can be justified in both directions by one structural induction. For skip, wp(c,Q)(s) is Q(s), the same as Q(eval(c,s)). For set f, it is Q(f(s)), again the evaluator equation. For sequence, apply the first subcommand's induction statement with postcondition wp(d,Q), obtaining wp(c,wp(d,Q))(s) equivalent to wp(d,Q)(eval(c,s)). Apply the second subcommand's statement at that intermediate store to obtain Q(eval(d,eval(c,s))), the sequence evaluator result. The induction must quantify over arbitrary postconditions, because the sequence case uses a newly composed one.

Now suppose P establishes Q for every execution. Theorem 11.1 supplies an execution to eval(c,s) from each input. At a P-state, validity gives Q at that result, and the just-proved equivalence gives wp(c,Q)(s). Conversely P implying wp and the same equivalence show that every execution result, uniquely equal to eval(c,s), satisfies Q. Thus Valid P c Q is equivalent to pointwise implication P→wp(c,Q) for this language.

This is the logical justification for a verification-condition pipeline in the miniature setting. A procedure can generate the backward predicate, while an independent proof establishes the resulting implication. The generator's theorem covers all syntax constructors because the induction has a case for each. Adding a constructor without adding its semantic and transformer cases exposes precisely where the previous proof stops applying.

## What a fuelled evaluator would establish

When a while constructor is introduced, structural recursion on the loop body alone cannot evaluate repeated iterations: the recursive call executes the same while again. A fuelled interpreter instead recurses on a natural bound and returns either a result or exhausted fuel. The latter is an observation about this bounded evaluation, not a divergence result in the object language.

For a simple big-step fuel convention, let zero fuel return none. At successor fuel, skip and assignment return their ordinary results. Sequence evaluates its first component with predecessor fuel and, if successful, its second component with predecessor fuel from the intermediate store. A conditional uses predecessor fuel on its chosen branch. A false while returns the input; a true while evaluates its body and then the same while, both with predecessor fuel. This bounds derivation depth rather than total small-step transitions.

Prove soundness by induction on fuel. A returned result at successor fuel arises from one command case; each recursive returned result has a matching big-step derivation by the induction hypothesis, and the corresponding command rule combines them. The zero case returns no result and imposes no soundness obligation. Thus every successful fuelled evaluation supplies actual terminating execution evidence.

For completeness on terminating executions, first prove monotonicity of successful results in the fuel bound by induction on the smaller fuel and command cases. If one bound succeeds, every larger bound succeeds with the same result; sequence and while use the induction statements for their recursive calls. Then induct on a finite big-step derivation. Each child has a sufficient bound by induction. Choose a parent bound larger than the maximum child bound, use monotonicity to raise all children to its predecessor, and apply the evaluator equation. Every terminating derivation therefore succeeds at some finite fuel.

Neither theorem makes none at one bound mean divergence. A programme may simply need a deeper derivation. Reporting exhausted fuel as a proof of nontermination would reverse the completeness theorem's existential quantifier. This is a useful formal example of the boundary between bounded evidence and an unbounded semantic statement.

## Reviewing definitions before short proofs

The code in this chapter uses total functions as atomic updates. If f is defined as a constant zero function, a theorem that its result is zero is straightforward and correct. It does not verify the behavior of a separately written intended increment routine. A reviewer must compare that mathematical f with the intended operation, not only inspect whether valid_set was applied correctly.

Similarly, an assertion such as sorted can accidentally omit permutation preservation or array bounds. Proving it may establish ordering while permitting all inputs to be replaced by an empty array. A complete sorting specification normally relates output and input and states the representation conditions under which reads and writes are meaningful. The logical library validates exactly its supplied predicates; specification adequacy is an additional mathematical judgement.

The best small mechanisation examples expose these choices rather than bury them under automation. The execution relation, assertion type, quantifiers and constructor cases show what is covered. A successful future elaboration can add a real checking record, but it cannot retroactively add an unstated property or a missing model-to-code relation to the theorem's type.

## Exercises with complete solutions

The snippets below are read inside `namespace EulerVerify` after the declarations above. Their intended outcome is acceptance of the displayed complete theorem; that is an expectation, not a reported execution.

### 1. Identity update {#verifying-programs-proof-assistant-ex-1}

Prove `Valid P (Cmd.set (fun s => s)) P`.

<details><summary>Hint 1</summary>

Instantiate the general update theorem.

</details>
<details><summary>Hint 2</summary>

Its composed precondition reduces definitionally to P.

</details>
<details><summary>Solution</summary>

Use `exact valid_set (fun s => s) P`. The resulting precondition is `fun s => P s`, definitionally the same predicate required here. Semantically the only update execution returns its input, so the supplied P-proof remains valid.

</details>

### 2. A constant result {#verifying-programs-proof-assistant-ex-2}

Prove `Valid (fun _ => True) (Cmd.set (fun _ => 7)) (fun t => t = 7)`.

<details><summary>Hint 1</summary>

Introduce an arbitrary execution and invert it.

</details>
<details><summary>Hint 2</summary>

After inversion both sides of the equality are seven.

</details>
<details><summary>Solution</summary>

Use `by intro s t _ hrun; cases hrun; rfl`. The set execution forces t=7. Reflexivity proves the postcondition independently of the original store. The True precondition supplied no information and none was needed.

</details>

### 3. Impossible inputs {#verifying-programs-proof-assistant-ex-3}

Prove `Valid (fun _ => False) c Q` for arbitrary c,Q.

<details><summary>Hint 1</summary>

There is no proof of the precondition.

</details>
<details><summary>Hint 2</summary>

Eliminate the False hypothesis before analysing the execution.

</details>
<details><summary>Solution</summary>

Use `by intro s t hp _; exact False.elim hp`. This validity statement is vacuous because no initial store satisfies its precondition. It does not establish that c terminates or that Q holds at arbitrary inputs. Reading the precondition is essential to interpreting a verified contract.

</details>

### 4. A weak postcondition {#verifying-programs-proof-assistant-ex-4}

Prove `Valid P c (fun _ => True)`.

<details><summary>Hint 1</summary>

The goal has no condition on the final store.

</details>
<details><summary>Hint 2</summary>

Use the constructor of True.

</details>
<details><summary>Solution</summary>

Use `by intro s t _ _; exact True.intro`. It proves the stated partial-correctness property for any command. It gives no functional information; the simplicity of the proof reflects the weakness of the requested specification rather than remarkable verification power.

</details>

### 5. Sequence of skips {#verifying-programs-proof-assistant-ex-5}

Prove `Valid P (Cmd.seq Cmd.skip Cmd.skip) P` using the sequence rule.

<details><summary>Hint 1</summary>

Choose P itself as the midpoint.

</details>
<details><summary>Hint 2</summary>

Both premises are instances of valid_skip.

</details>
<details><summary>Solution</summary>

Use `exact valid_seq P P P Cmd.skip Cmd.skip (valid_skip P) (valid_skip P)`. The first skip establishes P at the intermediate store and the second preserves it. The proof uses no special execution-path enumeration and works for any assertion P.

</details>

### 6. Conjunction of postconditions {#verifying-programs-proof-assistant-ex-6}

Given `hQ : Valid P c Q` and `hR : Valid P c R`, prove `Valid P c (fun t => Q t ∧ R t)`.

<details><summary>Hint 1</summary>

Supply the same initial precondition and execution to both premises.

</details>
<details><summary>Hint 2</summary>

Build a conjunction from their conclusions.

</details>
<details><summary>Solution</summary>

Use `by intro s t hp hr; exact And.intro (hQ s t hp hr) (hR s t hp hr)`. The same execution ends at t in both applications, so the resulting proofs concern one final store. Combining claims about different executions would need a relational statement instead.

</details>

### 7. Strengthening the precondition {#verifying-programs-proof-assistant-ex-7}

Given `h : ∀ s, P' s → P s` and `hc : Valid P c Q`, prove `Valid P' c Q`.

<details><summary>Hint 1</summary>

Convert the new input proof into the premise hc expects.

</details>
<details><summary>Hint 2</summary>

Keep the execution proof unchanged.

</details>
<details><summary>Solution</summary>

Use `by intro s t hp hr; exact hc s t (h s hp) hr`. The implication direction P'→P is essential. Reversing it would allow additional inputs outside the old theorem's guarantee.

</details>

### 8. Weakening the postcondition {#verifying-programs-proof-assistant-ex-8}

Given `hc : Valid P c Q` and `h : ∀ t, Q t → Q' t`, prove `Valid P c Q'`.

<details><summary>Hint 1</summary>

First use the established command theorem.

</details>
<details><summary>Hint 2</summary>

Apply the implication at the resulting final store.

</details>
<details><summary>Solution</summary>

Use `by intro s t hp hr; exact h t (hc s t hp hr)`. The old theorem produces Q(t), and the explicit implication converts it to Q'(t). No stronger result can be inferred without another hypothesis.

</details>

### 9. Two particular updates {#verifying-programs-proof-assistant-ex-9}

Construct `Runs (Cmd.seq (Cmd.set Nat.succ) (Cmd.set Nat.succ)) 0 2`.

<details><summary>Hint 1</summary>

The intermediate store is one.

</details>
<details><summary>Hint 2</summary>

Use two set constructors as premises of Runs.seq.

</details>
<details><summary>Solution</summary>

Use `exact Runs.seq (Runs.set Nat.succ 0) (Runs.set Nat.succ 1)`. Successor of zero reduces to one and successor of one to two, so the indices agree definitionally. This is one execution certificate; a universally quantified correctness claim additionally needs a specification theorem such as valid_seq.

</details>

### 10. Reading the trusted claim {#verifying-programs-proof-assistant-ex-10}

Explain why a proof of `Valid P c Q` for this datatype does not verify a separately written C programme with a loop.

<details><summary>Hint 1</summary>

Inspect the constructors and their store domain.

</details>
<details><summary>Hint 2</summary>

Identify the missing relationship between source and model.

</details>
<details><summary>Solution</summary>

The theorem covers a command built from skip, total natural-number updates and sequence. The C programme has another syntax, arithmetic and execution semantics, and its loop is not a constructor here. One needs a representation/refinement theorem or clearly stated translation assumptions, plus a language with the required loop behavior. A kernel accepting the existing statement cannot establish an absent model-to-source link.

</details>

## Chapter summary

An embedded syntax and indexed execution relation make verification judgements explicit. Skip, update and sequence rules follow by inversion and composition; structural induction relates the total evaluator to every execution. The proof assistant organises these arguments, while language coverage, statement meaning and source-to-model correspondence remain visible obligations. Every tool outcome printed here is expected rather than reported as executed.

## Sources

The elementary Hoare and operational methods follow the semantic tradition of Winskel. Lean syntax and proof concepts are introduced in the linked Type Theory and Proof Assistants book. The command datatype, verification library and exercises here are new textual teaching examples using core Lean constructions, with no imported automation or claimed run.
