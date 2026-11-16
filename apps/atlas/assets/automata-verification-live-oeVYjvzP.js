var e=`---
id: visual-lab-automata-verification
title: "Automata and Verification Proof Studio"
level: undergraduate
estimated_minutes: 150
license: CC BY-SA 4.0
---

# Automata and Verification Proof Studio

[Open the live proof studio](#/labs?lab=visual-lab-automata-verification)

This laboratory joins two exact finite arguments:

1. compare deterministic finite automata by exploring their product states;
2. check a finite transition system for reachability of a declared bad state.

Both procedures can produce a shortest counterexample. Both can prove a universal claim because the searched state space is finite and exhaustively explored. Neither proves that a deployed program matches the mathematical model.

## 1. Trace a deterministic machine

A deterministic finite automaton has a finite state set $Q$, alphabet $\\Sigma$, total transition function $\\delta$, initial state, and accepting states. On each input symbol, exactly one next state is determined.

The trace table includes the empty prefix before any input. After prefix $w$, the listed state is $\\delta^{*}(q0,w)$. This is the loop invariant of the tracer. A word is accepted exactly when the final row names an accepting state.

Try clearing the input box. The resulting word is $\\varepsilon$, not a missing test. Two machines can disagree immediately when one initial state accepts and the other does not.

## 2. Why bounded examples do not prove equivalence

Two automata are language-equivalent when they agree on every finite word. Testing all words through length ten still leaves infinitely many words untested.

The product construction converts the infinite input question into finite reachability. A product state $(p,q)$ records where the two machines are after the same prefix. For every alphabet symbol $a$, it moves to

$(delta_A(p,a), delta_B(q,a))$.

A product state is a disagreement when exactly one component accepts. If a disagreement is reachable, its path labels form a word accepted by exactly one automaton.

If no disagreement is reachable, the machines agree on every word. The proof is induction on word length: the initial product represents $\\varepsilon$; following one more symbol follows one product transition; every prefix reaches a searched pair.

## 3. Shortest distinguishing words

The engine searches product pairs breadth-first and stores a parent pair and input symbol at first discovery. Breadth-first order is nondecreasing word length, so the first disagreement gives a shortest distinguishing word.

For “ends with 01” versus “contains 01,” both machines accept $01$. The word $010$ distinguishes them: it contains $01$ but does not end with it. The trace table verifies the two final acceptance values.

The parity comparison adds an unreachable state to one automaton. State counts and labels differ, but reachable product pairs never disagree. Unreachable representation does not change the recognized language.

## 4. Safety is reachable-state exclusion

A transition system has finite states, initial states, and a transition relation. Let $Bad$ be the set of forbidden states. The safety property

$\\mathbf{AG}\\,\\neg\\,\\mathit{Bad}$

means every state on every path from every initial state avoids $Bad$. In this finite explicit setting, breadth-first reachability decides it.

The search invariant says:

- every discovered state is reachable;
- every discovered noninitial state has a recorded valid parent transition;
- after a state is processed, every one-step successor is discovered.

If a bad state is discovered, parent pointers reconstruct an executable trace. If the queue empties without a bad state, the visited set is closed under transitions and contains every initial state. Induction on path length proves every reachable state visited, so safety follows.

The search retains the first bad-state trace, which is shortest in edge count,
and continues through the remaining finite queue. Its final reachability table
therefore covers all reachable states even when a counterexample was found.
The safety notation here concerns every finite reachable prefix; completing a
deadlock with a self-loop leaves that state-safety conclusion unchanged. The
instrument does not evaluate next-time or liveness formulas on those completions.

## 5. The three protocol presets

**Guarded token.** A unique token permits A or B to enter a critical section. The bad state “both critical” exists in the declared state space but has no reachable incoming path. Exhaustive search proves the model safe.

**Missing guard.** One transition allows B to enter while A remains critical. The checker returns

$token-a \\to a-critical \\to both-critical$.

The trace is a counterexample to the safety property, not merely a red node.

**Unreachable error.** An error state has a self-loop but no path from \`start\`. Its presence does not falsify a reachability safety property. This distinguishes “there exists a syntactic state named error” from “an execution can reach error.”

## 6. What is deliberately outside the claim

The lab checks finite safety only. It does not establish:

- liveness, such as every request eventually entering;
- fairness of a scheduler;
- correctness of an abstraction from source code;
- adequacy of state variables or atomicity boundaries;
- absence of arithmetic overflow, memory faults, timing leakage, or hardware failure;
- general equivalence of nondeterministic, pushdown, or infinite-state machines.

A model can be exhaustively verified and still omit a real race. If a source operation contains separate read and write steps but the model treats it as one atomic transition, interleavings disappear from the state graph.

## 7. Accessibility and exact alternatives

The diagram is static. There is no animation or motion-only state. Reachability uses solid fill, bad states use dashed outlines, counterexample traces use thicker edges, and all meanings also appear as text.

The nonvisual route is complete:

- each automaton has a full transition table with initial and accepting markers;
- every input prefix has both machine states and acceptance values;
- every transition-system state lists its meaning, successors, reachability, and bad-state status;
- proof results state explored pair or state counts;
- counterexamples are ordered text traces.

All editing uses native text, select, range, and button controls. The range and buttons traverse prefixes by keyboard. Shared URLs contain only a bounded binary word and named presets; hostile or unknown values fall back to a valid state.

## 8. Experiments

1. Choose the parity pair. Try many words, then explain why examples are not the equivalence proof and product exhaustion is.
2. Choose the empty-word disagreement. Clear the word field and identify the initial acceptance mismatch.
3. Choose ending versus containing. Predict a shortest witness before reading the computed one. Verify no shorter word works by tracing $\\varepsilon$, $0$, $1$, $00$, $01$, $10$, and $11$.
4. Compare guarded and missing-guard protocols. Identify the exact edge that creates the safety failure.
5. Choose unreachable error. Explain why a scan for a state label “error” would give a false alarm.

## 9. From experiment to theorem

The automata proof is an instance of symmetric-difference emptiness: construct a product accepting exactly words on which the two machines disagree, then test its language for emptiness by reachability. The safety proof has the same form: construct or identify bad states and test whether any is reachable.

That shared structure—finite state, reachability, parent certificates, closure under successors—is the mathematical center of the lab. Continue with the chaptered [proof-first Mathematics for Computer Science manuscript](#/item/book-algorithms-computation-proof-desk) for regular languages, invariants, semantics, and model checking.

`;export{e as default};