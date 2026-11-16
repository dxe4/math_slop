var e=`---
parent_id: book-formal-computation-proof-reference
chapter_id: hoare-logic-and-total-correctness
title: "Hoare Logic, Weakest Preconditions, and Total Correctness"
level: graduate
estimated_minutes: 230
license: CC BY-SA 4.0
---

# Hoare Logic, Weakest Preconditions, and Total Correctness

Operational semantics says what programs do. Hoare logic organizes proofs that executions satisfy assertions. Its central discipline is modular: a command is surrounded by a precondition and postcondition, while loops expose invariants and termination exposes a decreasing variant.

## 1. Partial-correctness triples

$\\{P\\} c \\{Q\\}$ means: for every state satisfying $P$, if $c$ terminates, its final state satisfies $Q$. It does not assert termination. A total-correctness triple additionally says every such execution terminates.

Validity is relative to the operational semantics and assertion interpretation. Undefined expressions, overflow, aliasing, and exceptions must be modeled or excluded.

## 2. Core rules

Skip preserves assertions: $\\{P\\} \\mathrm{skip} \\{P\\}$. Assignment uses substitution:

$\\{Q[a/x]\\} x:=a \\{Q\\}$.

Sequence composes $\\{P\\}c_1\\{R\\}$ and $\\{R\\}c_2\\{Q\\}$. Conditional proves each branch under $P \\land b$ or $P \\land \\neg b$. Consequence strengthens preconditions and weakens postconditions using valid implications.

Assignment substitution is syntactic and capture-avoiding. It works because evaluating $Q$ after updating $x$ equals evaluating $Q[a/x]$ before the update—the substitution lemma for assertions.

## 3. Loop invariants

The partial while rule is

$\\{I \\land b\\} c \\{I\\}$

therefore $\\{I\\} while b do c \\{I \\land \\neg b\\}$.

Invariant $I$ must hold initially and be preserved by one arbitrary iteration. It need not decrease or imply exit. To prove a desired postcondition, use consequence from $I \\land \\neg b$.

For a loop summing $1..n$, an invariant might relate current accumulator to the already processed prefix and bound the index. Merely writing $sum=...$ without index bounds can be too weak to establish the final formula.

## 4. Total correctness and variants

For termination, choose integer-valued variant $V$ bounded below, usually natural-valued when the guard holds. In addition to invariant preservation, the loop rule needs a **total-correctness** premise for the body: from every state satisfying $I\\land b\\land V=k$, the body itself terminates in a state satisfying $I\\land 0\\le V<k$. Partial-correctness preservation and decrease are insufficient because both hold vacuously when the body diverges. With the total premise, no iteration diverges and no infinite descending natural sequence exists, so the loop terminates.

Lexicographic tuples and well-founded relations generalize numeric variants. A variant that sometimes decreases is insufficient; decrease must hold on every allowed continuing iteration.

## 5. Weakest preconditions

For deterministic command $c$ and postcondition $Q$, $\\operatorname{wp}(c,Q)$ characterizes exactly states from which $c$ terminates in a $Q$ state. For partial correctness, liberal precondition $\\operatorname{wlp}$ permits divergence.

Equations include:

$\\operatorname{wp}(\\mathrm{skip},Q)=Q$,

$\\operatorname{wp}(x:=a,Q)=Q[a/x]$,

$\\operatorname{wp}(c_1;c_2,Q)=\\operatorname{wp}(c_1,\\operatorname{wp}(c_2,Q))$,

and branch combination by guard. Loops require a fixed point; user-supplied invariants approximate it in proof systems.

$P \\Rightarrow  \\operatorname{wp}(c,Q)$ proves total correctness, while $P \\Rightarrow  \\operatorname{wlp}(c,Q)$ proves partial correctness under standard deterministic semantics.

## 6. Arrays, bounds, and aliasing

Array assignment needs a functional update and a precondition that index is valid. Reading outside bounds is not an arbitrary integer unless semantics says so. With references, updating through one name may affect assertions mentioning aliases. Substitution over scalar variables is insufficient; heap-aware logics appear next.

Frame conditions record what a command may modify. A postcondition about untouched variables is justified by semantics or a modifies set, not wishful locality.

## 7. Soundness and relative completeness

Soundness proves every derivable triple semantically valid, by induction on the derivation. Assignment uses the substitution lemma; while uses induction on the number of iterations in a terminating run.

Cook's relative completeness says, for expressive enough assertions and ideal reasoning about them, every semantically valid partial-correctness triple is derivable. “Relative” isolates the difficulty of proving mathematical implications in the assertion theory. It is not an automated-verification guarantee.

## 8. Verification conditions

Annotated programs generate logical obligations: precondition implies invariant; invariant and guard imply body preservation; invariant and exit imply postcondition; variants are nonnegative and decrease. An SMT solver can discharge some obligations, but soundness depends on translation, solver/theory behavior, and evidence checking.

## 9. Boundaries

- Partial correctness permits divergence.
- Invariants prove preservation; variants prove termination.
- Consequence directions matter.
- $\\operatorname{wp}$ and $\\operatorname{wlp}$ differ on nontermination.
- Heap aliasing invalidates naive scalar substitution.
- Solver success is evidence within a translation and trusted base.

## Soundness with every core rule accounted for

Work over the well-formed mathematical-integer language of Chapter 1, with total expressions and guards. Assertions are predicates on its stores. The expression substitution lemma is proved structurally: literals and other variables are unchanged, the replaced variable evaluates to the assigned expression, and each arithmetic constructor preserves the equality of its operand evaluations. An analogous structural induction on first-order assertions handles connectives and quantifiers, renaming bound logical variables first to avoid capture. Consequently, evaluating the substituted assertion in the old store is equivalent to evaluating the original assertion in the updated store.

**Theorem 4.1 (Partial-correctness soundness).** Every triple derived from the stated skip, assignment, sequence, conditional, while and consequence rules is semantically valid.

*Proof.* Induct on the Hoare derivation. Skip changes no store, so its assertion remains true. For assignment, the precondition is the substituted postcondition. The substitution lemma turns its truth before the update into the postcondition's truth afterward. For sequence, invert any terminating operational derivation into a first execution to an intermediate store and a second execution from it. The first Hoare induction hypothesis establishes the midpoint there; the second establishes the final postcondition.

For a conditional, its terminating execution selects the branch matching the guard value. The initial assertion together with that value satisfies exactly that branch's Hoare precondition. Apply the appropriate induction hypothesis to its terminating derivation. Consequence uses the first valid implication to reach the inner precondition, the inner induction hypothesis to obtain its postcondition, and the final implication to obtain the requested conclusion.

For while, the body triple is valid by the Hoare induction hypothesis. Now use a second induction on the finite terminating while derivation. A false guard returns the unchanged invariant store with the guard false. A true guard gives a terminating body execution followed by a smaller terminating while derivation. Body validity preserves the invariant at the intermediate store, and the second induction gives the invariant and false guard at final exit. Thus every terminating run from an invariant state satisfies the while postcondition. These cases exhaust the derivation rules. ∎

The two inductions have different objects: the outer induction justifies already derived proof premises, while the inner one accounts for arbitrarily many iterations in a terminating execution. Neither assumes a bound common to every input. Relative completeness is a deeper assertion-language theorem and remains a cited result under its expressiveness and oracle hypotheses; the soundness proof above does not claim to establish it.

## A full total-correctness loop argument

Suppose the invariant holds initially. Let V take values in the naturals on invariant states where the guard is true. Require that for every natural k, the body **terminates** from every state satisfying the invariant, true guard and V=k, returning an invariant state with strictly smaller nonnegative variant. The explicit termination premise rules out the vacuous-body mistake described earlier.

Prove termination from any invariant state by well-founded induction on a rank that is V when the guard is true and zero at an already false guard. If the guard is false, the loop stops immediately. If true with V=k, the total body premise supplies a returned intermediate state. If its guard is false, it exits. Otherwise its natural variant is less than k, so the induction hypothesis supplies a terminating remaining loop. Joining these derivations gives termination of the original loop. Partial-correctness soundness then supplies the exit assertion.

At k=0 the true-guard body premise could not produce a nonnegative strictly smaller value. Therefore no invariant true-guard state can have V=0 when all those premises hold. This is a consequence of the premise set, not an omitted exceptional base case. Lexicographic variants use the same argument over a stated well-founded order. Merely choosing a tuple without proving well-foundedness of its order leaves the termination argument unfinished.

## Worked example 1: summation with exact bounds

Let n be a fixed nonnegative integer. Initialise i:=1 and s:=0, then while i≤n do s:=s+i; i:=i+1. Use invariant 1≤i≤n+1 and 2s=(i−1)i. The multiplication form avoids division syntax in an integer assertion. Initially i=1 and s=0 make both sides zero, and n≥0 gives the bounds.

Under the true guard, the new sum is s+i and the new index i+1. Then 2(s+i)=(i−1)i+2i=i(i+1), precisely the required equation at the new index. The guard i≤n ensures i+1≤n+1; positivity remains. At exit the invariant bound and i>n give i=n+1, so 2s=n(n+1). Since n(n+1) is even, this is the usual summation formula.

The body is two terminating assignments. Variant n+1−i is a positive natural under the guard and decreases by one. The total loop argument therefore proves termination as well as the postcondition. When n=0, initial i=1 makes the guard false and the result zero still satisfies the formula. This boundary case is included by the precondition and does not need an invented first iteration.

## Weakest versus liberal loop equations

For postcondition Q define the predicate transformer H(X) to hold at a state when either the guard is false and Q holds there, or the guard is true and the body establishes X in the relevant correctness interpretation. For total correctness use the body's wp and choose the least fixed point: its finite approximants capture terminating loops that establish Q after finitely many body executions. A state in one such approximant has a finite witness to exit.

For partial correctness use the body's wlp and choose the greatest fixed point. Diverging executions impose no terminating-result obligation, so they can remain in every liberal approximant. For while true do skip, the total transformer has least fixed point false, while its liberal counterpart has greatest fixed point true, independently of Q. This exactly matches the semantic definitions rather than treating the two fixed-point choices as interchangeable notation.

The invariant rule proves that an invariant whose exit states imply Q is contained in the appropriate liberal guarantee. A total proof adds finite-exit evidence, usually through a variant. Computing an exact weakest predicate for arbitrary programmes can encode undecidable questions; practical annotations deliberately ask for sufficient assertions whose implications can be proved rather than claiming a universal automatic calculation.


## Earlier computing account: Hoare Logic, Invariants, and Termination

Hoare logic turns program structure into proof rules. It is not a magical guarantee generator: the user must supply meaningful specifications, loop invariants, arithmetic facts, and termination arguments.

## 1. Partial-correctness triples

$\\{P\\} C \\{Q\\}$ means: from any state satisfying $P$, if command $C$ terminates, its final state satisfies $Q$.

The assignment axiom is backward:

$\\{Q[x:=E]\\} x:=E \\{Q\\}$.

To prove $\\{y+1>0\\} x:=y+1 \\{x>0\\}$, substitute expression $y+1$ for $x$ in postcondition. Assignment changes state; substitution changes an assertion before execution.

## 2. Composition and consequence

If $\\{P\\} C1 \\{R\\}$ and $\\{R\\} C2 \\{Q\\}$, then $\\{P\\} C1;C2 \\{Q\\}$. Intermediate assertion $R$ is the interface between proofs.

The consequence rule allows strengthening a precondition and weakening a postcondition:

if $P'\\implies P$, $\\{P\\}C\\{Q\\}$, and $Q\\implies Q'$, then $\\{P'\\}C\\{Q'\\}$.

The directions matter. A stronger postcondition is harder to guarantee; a weaker precondition is harder to accept.

## 3. Conditionals

To prove an \`if\`, prove each branch under its guard:

$\\{P\\land B\\} C1 \\{Q\\}$ and $\\{P\\land \\neg B\\} C2 \\{Q\\}$.

Both must establish the same postcondition. Ignoring an “unlikely” branch leaves the universal contract unproved.

## 4. While rule

For invariant $I$, prove:

1. precondition implies $I$ before the loop;
2. $\\{I\\land B\\} C \\{I\\}$ for the body;
3. $I\\land \\neg B$ implies desired postcondition.

Then $\\{I\\} \\mathsf{while} B do C \\{I\\land \\neg B\\}$ is partially correct.

For array search through indices below $i$, a useful invariant says no earlier entry equals the target. At exit $i=n$, it proves absence. Bounds such as $0\\le i\\le n$ belong in the invariant so array accesses are justified.

## 5. Weakest preconditions

$wp(C,Q)$ is the weakest assertion sufficient to guarantee termination in a $Q$ state under a total-correctness interpretation, or a related liberal precondition for partial correctness. For assignment,

$wp(x:=E,Q)=Q[x:=E]$.

For sequential composition,

$wp(C1;C2,Q)=wp(C1,wp(C2,Q))$.

This calculational view derives verification conditions backward. Loops generally require a supplied invariant because their exact weakest precondition can encode unbounded behavior.

## 6. Total correctness

Add a variant $V$ into a well-founded order. Under invariant and guard, prove the body itself terminates, preserves $I$, keeps $V$ in its domain, and strictly decreases it from its pre-body value. A partial-correctness triple plus a decrease assertion is insufficient: both claims can hold vacuously when the body diverges.

For Euclid with positive $b$, variant $b$ decreases to $a \\bmod b$. For a worklist algorithm, “number of unprocessed items” may fail if processing creates more items; a lexicographic or global finite-state measure may be needed.

Termination can depend on arithmetic semantics. A loop decrementing an unsigned machine integer from zero wraps instead of becoming negative. The proof must match the implementation model.

## 7. Arrays and quantified assertions

To prove insertion into a sorted prefix, maintain:

- prefix before the hole is sorted;
- elements shifted right come from the original prefix;
- every shifted element exceeds the inserted key;
- indices stay within bounds.

Postconditions often quantify over all indices. Solvers may discharge linear arithmetic and array-read facts in restricted theories, but the human must choose the invariant connecting iterations.

## 8. Aliasing and frames

If two references may point to the same cell, updating one changes the other. A proof assuming disjoint arrays is invalid without an alias precondition.

Separation logic uses assertions describing disjoint pieces of memory. Its frame rule allows a command proved on one piece to preserve an unrelated disjoint piece. “Disjoint” is a mathematical ownership fact, not merely different variable names.

## 9. Procedures and recursion

A procedure contract can be assumed at recursive calls while proving the body, provided calls decrease according to a well-founded measure. This mirrors induction.

For recursive binary-tree height, precondition requires an acyclic finite tree. A cyclic pointer graph violates structural descent and can diverge. Representation invariants are part of the procedure proof.

## 10. Verification-condition pipeline

A practical verifier typically:

1. parses and resolves names;
2. elaborates annotations and control flow;
3. generates logical verification conditions;
4. submits decidable fragments to solvers;
5. reports proved obligations, countermodels, or unknown results.

A solver’s \`unknown\` is not false. A countermodel may expose a real program trace or only an abstraction/spurious model, depending on encoding. Tool outcomes need interpretation.

## Worked example 2: integer quotient by subtraction

For $a\\ge 0,b>0$, compute quotient and remainder:

\`\`\`text
q := 0; r := a
while r >= b:
    r := r-b
    q := q+1
\`\`\`

Invariant: $a=bq+r$ and $r\\ge 0$. Initialization is immediate. One step preserves equality because $b(q+1)+(r-b)=bq+r$, and guard ensures new $r\\ge 0$. At exit, $r<b$, so $0\\le r<b$ and the division specification holds. Variant $r$ decreases by positive $b$, proving termination over mathematical integers.

## Worked example 3: maximum of a nonempty prefix

For an array $A$ of length $n>0$, initialize $m:=A[0]; i:=1$, then while $i<n$, replace $m$ by $A[i]$ if larger and increment $i$. Use invariant $1\\le i\\le n$ and $m=\\max(A[0:i])$. It holds for the one-element prefix. The branch either installs the new larger element or retains the old maximum, so incrementing $i$ makes the assertion describe the enlarged prefix. At exit $i=n$, it covers the full array. Variant $n-i$ proves termination. The precondition is essential because initialization reads $A[0]$.

## Frame reasoning and modifies sets

A postcondition about one variable does not authorize changing every other variable. A $modifies \\{x,y\\}$ clause says all other locations are preserved. A frame rule carries an assertion $R$ through a command only when the command cannot modify a location on which $R$ depends. Aliasing makes this side condition substantive: if $p$ and $q$ name the same cell, changing $*p$ changes facts about $*q$.

## Verification conditions and recursion

An annotated program becomes formulas: the precondition establishes the first assertion; statements preserve successive assertions; loop variants are nonnegative and decrease; the final assertion implies the postcondition. Solver \`unknown\` leaves an obligation open. For recursion, attach a well-founded measure to the call contract, assume the contract only for smaller calls, and prove every recursive argument decreases. Assuming the contract at the same argument would be circular.

## Common errors

- Reading $\\{P\\}C\\{Q\\}$ as a statement that $C$ must terminate.
- Substituting assignment in the wrong direction.
- Giving an invariant true initially but not preserved.
- Omitting array bounds from invariants.
- Using a decreasing measure without a well-founded lower bound.
- Ignoring aliasing or integer overflow.
- Treating solver timeout as proof of falsehood.



## Exercises with complete solutions

### 1. Skip {#hoare-logic-and-total-correctness-ex-1}

Why is $\\{P\\}\\mathrm{skip}\\{P\\}$ valid?

<details><summary>Hint 1</summary>

Use the operational skip rule.

</details>

<details><summary>Hint 2</summary>

The final store equals the initial store.

</details>

<details><summary>Solution</summary>

Skip terminates without changing state, so every initial $P$ state is the same final $P$ state.

</details>

### 2. Assignment precondition {#hoare-logic-and-total-correctness-ex-2}

Find a precondition for $x:=x+1$ to establish $x>5$.

<details><summary>Hint 1</summary>

Replace post-state x by the assigned expression.

</details>

<details><summary>Hint 2</summary>

Simplify the resulting integer inequality.

</details>

<details><summary>Solution</summary>

Substitute $x+1$ for post-state $x$, obtaining $x+1>5$, equivalently $x>4$.

</details>

### 3. Sequence midpoint {#hoare-logic-and-total-correctness-ex-3}

What does assertion $R$ represent?

<details><summary>Hint 1</summary>

Track the store after c₁.

</details>

<details><summary>Hint 2</summary>

It must satisfy what c₂ requires.

</details>

<details><summary>Solution</summary>

It is both the guaranteed postcondition of the first command and required precondition of the second, allowing semantic composition.

</details>

### 4. Consequence direction {#hoare-logic-and-total-correctness-ex-4}

From $\\{P\\}c{Q}$, when may precondition become $P'$?

<details><summary>Hint 1</summary>

Compare which initial states the new claim admits.

</details>

<details><summary>Hint 2</summary>

Every new allowed input must satisfy the old precondition.

</details>

<details><summary>Solution</summary>

When $P' \\Rightarrow  P$; the new precondition is stronger and admits no state outside the old guarantee.

</details>

### 5. Loop exit {#hoare-logic-and-total-correctness-ex-5}

What follows from the partial while rule?

<details><summary>Hint 1</summary>

Combine preservation with the stopping condition.

</details>

<details><summary>Hint 2</summary>

A terminating while exits through its false guard.

</details>

<details><summary>Solution</summary>

On termination, invariant still holds and the guard is false, hence $I \\land \\neg b$.

</details>

### 6. Invariant initialization {#hoare-logic-and-total-correctness-ex-6}

Why must precondition imply $I$?

<details><summary>Hint 1</summary>

Distinguish the first guard check from later iterations.

</details>

<details><summary>Hint 2</summary>

Preservation assumes the invariant already holds.

</details>

<details><summary>Solution</summary>

Preservation covers only later iterations. Without initialization, the invariant may already be false before the first guard test.

</details>

### 7. Variant lower bound {#hoare-logic-and-total-correctness-ex-7}

Why require one?

<details><summary>Hint 1</summary>

Look for an infinite decreasing integer sequence.

</details>

<details><summary>Hint 2</summary>

A natural-number or other well-founded range excludes it.

</details>

<details><summary>Solution</summary>

Integers admit infinite descending sequences. A strictly decreasing quantity proves termination only in a well-founded range such as naturals.

</details>

### 8. Partial versus total {#hoare-logic-and-total-correctness-ex-8}

Is $\\{\\mathrm{true}\\} while \\mathrm{true} do \\mathrm{skip} {\\mathrm{false}}$ partially valid?

<details><summary>Hint 1</summary>

Inspect the implication in partial validity.

</details>

<details><summary>Hint 2</summary>

If no execution terminates, its final-state obligation is vacuous.

</details>

<details><summary>Solution</summary>

Yes, vacuously: there is no terminating execution. It is not totally valid.

</details>

### 9. $\\operatorname{wp}$ of sequence {#hoare-logic-and-total-correctness-ex-9}

Why is order nested backward?

<details><summary>Hint 1</summary>

Start with what c₂ needs.

</details>

<details><summary>Hint 2</summary>

Then calculate what c₁ needs to establish that midpoint.

</details>

<details><summary>Solution</summary>

First compute states needed before $c_2$ to reach $Q$, then states needed before $c_1$ to reach that intermediate condition.

</details>

### 10. Array bound {#hoare-logic-and-total-correctness-ex-10}

What obligation accompanies $a[i]:=v$?

<details><summary>Hint 1</summary>

Identify the allocated index range.

</details>

<details><summary>Hint 2</summary>

A value postcondition cannot repair an invalid access.

</details>

<details><summary>Solution</summary>

That $i$ lies within allocated valid indices, plus any element/value invariant. Otherwise the command may be stuck or error.

</details>

### 11. Soundness induction {#hoare-logic-and-total-correctness-ex-11}

What is the induction object?

<details><summary>Hint 1</summary>

Look at how the proof rules construct evidence.

</details>

<details><summary>Hint 2</summary>

The while case additionally inspects a finite execution tree.

</details>

<details><summary>Solution</summary>

The Hoare derivation tree. Each proof rule is shown to preserve semantic validity assuming validity of its premises.

</details>

### 12. Relative completeness {#hoare-logic-and-total-correctness-ex-12}

Why “relative”?

<details><summary>Hint 1</summary>

Separate the assertion theory from the programme logic.

</details>

<details><summary>Hint 2</summary>

True arithmetic implications are not automatically decidable.

</details>

<details><summary>Solution</summary>

It assumes all true implications in the assertion language can be proved by an oracle; ordinary mathematical theorem proving remains outside the Hoare rules.

</details>


## Earlier computing exercises

### Earlier exercise 1. Find a precondition for $x:=x+2$ to ensure $x\\ge 5$. {#hoare-logic-termination-ex-1}

<details><summary>Hint 1</summary>

Calculate the assignment preimage of the postcondition.

</details>

<details><summary>Hint 2</summary>

Use old x when substituting x+2.

</details>

<details><summary>Solution</summary>

Substitute the assigned expression: old $x+2\\ge 5$, hence old $x\\ge 3$.

</details>

### Earlier exercise 2. Why does invariant $r\\ge 0$ not prove division correctness? {#hoare-logic-termination-ex-2}

<details><summary>Hint 1</summary>

Connect the output variables to the initial dividend.

</details>

<details><summary>Hint 2</summary>

A lower bound on r alone says nothing about q.

</details>

<details><summary>Solution</summary>

It lacks $a=bq+r$, so the exit state is not connected to the original dividend.

</details>

### Earlier exercise 3. What variant proves the subtraction loop terminates? {#hoare-logic-termination-ex-3}

<details><summary>Hint 1</summary>

Use the positive divisor hypothesis.

</details>

<details><summary>Hint 2</summary>

Subtracting b decreases a nonnegative remainder.

</details>

<details><summary>Solution</summary>

$r$; under $r\\ge b>0$, it becomes the strictly smaller natural $r-b$.

</details>

### Earlier exercise 4. Why can different invariants prove one program? {#hoare-logic-termination-ex-4}

<details><summary>Hint 1</summary>

Distinguish proof choices from execution meaning.

</details>

<details><summary>Hint 2</summary>

Any adequate inductive assertion can serve.

</details>

<details><summary>Solution</summary>

Any initialized and preserved assertion strong enough at exit can work; invariants are proof artifacts, not unique semantics.

</details>

### Earlier exercise 5. Compute $wp(x:=2*x, x>10)$. {#hoare-logic-termination-ex-5}

<details><summary>Hint 1</summary>

Substitute the full assigned expression.

</details>

<details><summary>Hint 2</summary>

Then simplify the inequality in the old store.

</details>

<details><summary>Solution</summary>

Substitution gives $2*x>10$, equivalently $x>5$, in the old state.

</details>

### Earlier exercise 6. State the sequence rule. {#hoare-logic-termination-ex-6}

<details><summary>Hint 1</summary>

Choose an assertion at the intermediate store.

</details>

<details><summary>Hint 2</summary>

The first proof supplies exactly what the second proof requires.

</details>

<details><summary>Solution</summary>

From $\\{P\\}C1\\{R\\}$ and $\\{R\\}C2\\{Q\\}$, infer $\\{P\\}C1;C2\\{Q\\}$; $R$ is the exact interface.

</details>

### Earlier exercise 7. What proves a conditional? {#hoare-logic-termination-ex-7}

<details><summary>Hint 1</summary>

Split the input assertion by the guard.

</details>

<details><summary>Hint 2</summary>

Both branches need the same postcondition.

</details>

<details><summary>Solution</summary>

Prove $\\{P \\land b\\}C\\{Q\\}$ and $\\{P \\land \\neg b\\}D\\{Q\\}$ for its two branches.

</details>

### Earlier exercise 8. Why is \`true\` a poor invariant? {#hoare-logic-termination-ex-8}

<details><summary>Hint 1</summary>

Ask what true says at exit.

</details>

<details><summary>Hint 2</summary>

Preservation alone need not imply a useful result.

</details>

<details><summary>Solution</summary>

It is preserved but usually too weak to imply the desired postcondition when the loop exits.

</details>

### Earlier exercise 9. Give a summation invariant. {#hoare-logic-termination-ex-9}

<details><summary>Hint 1</summary>

Relate the accumulator to the processed prefix.

</details>

<details><summary>Hint 2</summary>

Keep the index bounds needed at exit.

</details>

<details><summary>Solution</summary>

With $i$ next and $s$ accumulated, use $s=(i-1)i/2$ and $1\\le i\\le n+1$; algebra proves preservation.

</details>

### Earlier exercise 10. Why is decreasing integer $x$ not automatically a variant? {#hoare-logic-termination-ex-10}

<details><summary>Hint 1</summary>

Integers have no universal lower bound.

</details>

<details><summary>Hint 2</summary>

Choose a well-founded range and prove membership.

</details>

<details><summary>Solution</summary>

Integers are not well founded below; one needs $x\\ge 0$ or another well-founded domain.

</details>

### Earlier exercise 11. Why require $n>0$ in the maximum loop? {#hoare-logic-termination-ex-11}

<details><summary>Hint 1</summary>

Inspect the very first read.

</details>

<details><summary>Hint 2</summary>

An empty array has no element at index zero.

</details>

<details><summary>Solution</summary>

Initialization reads $A[0]$; no later invariant repairs an invalid read.

</details>

### Earlier exercise 12. State an array-update fact. {#hoare-logic-termination-ex-12}

<details><summary>Hint 1</summary>

Use functional array update.

</details>

<details><summary>Hint 2</summary>

Separate the written index from all unequal indices.

</details>

<details><summary>Solution</summary>

After $A[i]:=v$, index $i$ contains $v$ and every $j\\ne i$ retains its old value.

</details>

### Earlier exercise 13. Why can aliasing break a frame proof? {#hoare-logic-termination-ex-13}

<details><summary>Hint 1</summary>

Different names can denote one cell.

</details>

<details><summary>Hint 2</summary>

The alleged frame may share the modified address.

</details>

<details><summary>Solution</summary>

A supposedly untouched name may denote the same cell as a modified name.

</details>

### Earlier exercise 14. What does a verification-condition generator prove alone? {#hoare-logic-termination-ex-14}

<details><summary>Hint 1</summary>

Separate formula generation from formula validity.

</details>

<details><summary>Hint 2</summary>

Also account for translation correctness.

</details>

<details><summary>Solution</summary>

Nothing until its transformation is trusted and every generated formula is established under the intended semantics.

</details>

### Earlier exercise 15. How is recursive termination justified? {#hoare-logic-termination-ex-15}

<details><summary>Hint 1</summary>

Use well-founded induction on call arguments.

</details>

<details><summary>Hint 2</summary>

Assume the contract only for strictly smaller calls.

</details>

<details><summary>Solution</summary>

Every recursive call decreases a declared well-founded measure, enabling well-founded induction.

</details>

### Earlier exercise 16. Separate partial from total correctness. {#hoare-logic-termination-ex-16}

<details><summary>Hint 1</summary>

Read the quantifier over terminating executions.

</details>

<details><summary>Hint 2</summary>

Total correctness additionally requires an execution to return.

</details>

<details><summary>Solution</summary>

Partial correctness conditions $Q$ on termination; total correctness additionally proves termination from $P$.

</details>


## Chapter summary

Hoare derivations are sound by rule induction, with a separate finite-iteration argument for while. Total correctness additionally requires terminating bodies and a well-founded variant. Complete summation, quotient and maximum arguments retain their arithmetic and bounds hypotheses; weakest and liberal preconditions use different fixed-point interpretations.

## Sources

The complete earlier computing chapter hoare-logic-termination is incorporated with its sixteen questions and solutions. Hoare’s axiomatic method, Dijkstra’s predicate-transformer tradition and Winskel provide the reading route; Cook relative completeness remains cited with its assertion-language and oracle assumptions.
`;export{e as default};