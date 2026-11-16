var e=`---
parent_id: book-algorithms-computation-proof-desk
chapter_id: hoare-logic-termination
title: "Hoare Logic, Invariants, and Termination"
level: advanced-undergraduate
estimated_minutes: 140
license: CC BY-SA 4.0
---

# Hoare Logic, Invariants, and Termination

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

## Worked proof: integer quotient by subtraction

For $a\\ge 0,b>0$, compute quotient and remainder:

\`\`\`text
q := 0; r := a
while r >= b:
    r := r-b
    q := q+1
\`\`\`

Invariant: $a=bq+r$ and $r\\ge 0$. Initialization is immediate. One step preserves equality because $b(q+1)+(r-b)=bq+r$, and guard ensures new $r\\ge 0$. At exit, $r<b$, so $0\\le r<b$ and the division specification holds. Variant $r$ decreases by positive $b$, proving termination over mathematical integers.

## Worked proof: maximum of a nonempty prefix

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

## Practice with solutions

1. **Find a precondition for $x:=x+2$ to ensure $x\\ge 5$.** Substitute the assigned expression: old $x+2\\ge 5$, hence old $x\\ge 3$.
2. **Why does invariant $r\\ge 0$ not prove division correctness?** It lacks $a=bq+r$, so the exit state is not connected to the original dividend.
3. **What variant proves the subtraction loop terminates?** $r$; under $r\\ge b>0$, it becomes the strictly smaller natural $r-b$.
4. **Why can different invariants prove one program?** Any initialized and preserved assertion strong enough at exit can work; invariants are proof artifacts, not unique semantics.
5. **Compute $wp(x:=2*x, x>10)$.** Substitution gives $2*x>10$, equivalently $x>5$, in the old state.
6. **State the sequence rule.** From $\\{P\\}C1\\{R\\}$ and $\\{R\\}C2\\{Q\\}$, infer $\\{P\\}C1;C2\\{Q\\}$; $R$ is the exact interface.
7. **What proves a conditional?** Prove $\\{P \\land b\\}C\\{Q\\}$ and $\\{P \\land \\neg b\\}D\\{Q\\}$ for its two branches.
8. **Why is \`true\` a poor invariant?** It is preserved but usually too weak to imply the desired postcondition when the loop exits.
9. **Give a summation invariant.** With $i$ next and $s$ accumulated, use $s=(i-1)i/2$ and $1\\le i\\le n+1$; algebra proves preservation.
10. **Why is decreasing integer $x$ not automatically a variant?** Integers are not well founded below; one needs $x\\ge 0$ or another well-founded domain.
11. **Why require $n>0$ in the maximum loop?** Initialization reads $A[0]$; no later invariant repairs an invalid read.
12. **State an array-update fact.** After $A[i]:=v$, index $i$ contains $v$ and every $j\\ne i$ retains its old value.
13. **Why can aliasing break a frame proof?** A supposedly untouched name may denote the same cell as a modified name.
14. **What does a verification-condition generator prove alone?** Nothing until its transformation is trusted and every generated formula is established under the intended semantics.
15. **How is recursive termination justified?** Every recursive call decreases a declared well-founded measure, enabling well-founded induction.
16. **Separate partial from total correctness.** Partial correctness conditions $Q$ on termination; total correctness additionally proves termination from $P$.

[Previous chapter](#/item/book-algorithms-computation-proof-desk?chapter=semantics-types-specifications) · [Book overview](#/item/book-algorithms-computation-proof-desk)
`;export{e as default};