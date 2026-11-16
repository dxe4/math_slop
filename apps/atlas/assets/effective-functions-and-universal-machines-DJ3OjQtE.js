var e=`---
parent_id: book-formal-computation-proof-reference
chapter_id: effective-functions-and-universal-machines
title: "Effective Functions, Encodings, and Universal Machines"
level: advanced-undergraduate
estimated_minutes: 220
license: CC BY-SA 4.0
---

# Effective Functions, Encodings, and Universal Machines

Computability theory asks what can be achieved by a finite mechanical procedure with unbounded time and storage. Its theorems do not depend on a favorite programming language, but that invariance must be earned through encodings and simulations. This chapter develops partial functions, Turing machines, alternative models, universal interpretation, and enumeration without confusing mathematical idealization with a claim about physical infinity.

## 1. Partial functions and divergence

A partial function $f:\\Sigma^{\\ast}  \\rightharpoonup  \\Gamma^{\\ast} $ may be undefined on some inputs. A machine **computes** $f$ when it halts with output $f(x)$ exactly for inputs in the domain and does not halt for inputs outside it. Divergence is not the same as returning a distinguished error value.

A language $L$ is **decidable** if a machine halts on every input and accepts exactly $L$. It is **recognizable** if a machine accepts exactly members but may run forever on nonmembers. A recognizer's rejection and nontermination must not be conflated in an API.

## 2. A machine contract

A deterministic single-tape Turing machine has finite states, tape alphabet with blank, input alphabet, transition function, initial state, and halting accept/reject states. One step reads the current cell, writes a symbol, moves left or right, and changes state. A configuration contains the complete finite nonblank tape content, head location, and control state.

The step relation is effective and local. A computation is its iterated trace. Multi-tape, stay-put, or two-way-infinite variants compute the same partial functions after explicit simulations. They may differ polynomially in runtime, so model equivalence at the computability level is not cost equality.

## 3. Encodings

Finite objects are encoded as words. A usable encoding is unambiguous and effectively parseable; malformed encodings receive explicit semantics. Tuples can use self-delimiting length prefixes or escaped separators. Machines themselves are finite tables and therefore encodable.

An encoding change preserves computability when translations both ways are computable on valid objects. Complexity preservation requires stronger bounds on translation time and size. A unary and binary integer encoding are computably interchangeable but exponentially different in length.

## 4. Closure and composition

Computable partial functions are closed under composition: simulate the first; if it halts, feed its output to the second. If either diverges, the composite diverges. Primitive operations on encoded words—testing empty, adding/removing a symbol, branching on a symbol—support larger routines through composition and iteration.

For languages, decidable sets are closed under Boolean operations because both deciders halt. Recognizable sets are closed under union and intersection by dovetailing simulations. Complement closure is the dividing boundary: if both $L$ and its complement are recognizable, then $L$ is decidable by running both recognizers in interleaved steps until one accepts.

## 5. Dovetailing

Running one possibly divergent computation to completion before another is unsafe. **Dovetailing** schedules stages: at stage $s$, advance each of the first $s$ simulations one step. Every individual simulation eventually receives arbitrarily many steps.

To recognize a union, alternate its recognizers on the same input and accept when either accepts. To enumerate outputs of a partial computable function over all inputs, dovetail the input computations and print outputs as they halt. Duplicates are allowed unless explicitly removed.

## 6. Universal machines

Because machine descriptions and inputs are words, a universal machine $U$ can parse pair $\\langle M,x\\rangle$ and simulate one step of $M$ at a time. Its invariant maps the encoded simulated configuration to $U$'s representation and proves each simulated step is matched by finitely many universal steps.

Universality yields an effective enumeration $M_0,M_1,...$ of machines. Invalid descriptions can denote a fixed rejecting machine. Every machine appears, perhaps more than once. This enumeration powers diagonal arguments; it does not enumerate total computable functions in a way that lets totality be decided.

## 7. Other equivalent models

Lambda calculus, partial recursive functions, register machines, and general-purpose idealized programming languages compute the same partial functions under conventional effective encodings. Proofs compile primitives and control structures between models.

The **Church–Turing thesis** is not a theorem equating a formal object with an informal phrase. It is the methodological claim that effectively calculable functions are exactly Turing-computable. Mathematical equivalence among formal models supports the thesis; no formal proof can quantify over every future informal notion without formalizing it first.

Nondeterministic Turing machines do not gain computability power: dovetail all branches and accept if one accepts. At complexity scale they may change resource classes, which Chapter 10 will measure.

## 8. Enumerators and recognizers

A language is recognizable exactly when some enumerator prints its members.

From a recognizer, dovetail it on every word and print words whose simulations accept. From an enumerator, recognize input $x$ by running the enumerator until it prints $x$; members eventually appear, while nonmembers may wait forever. For the empty language, the enumerator prints nothing.

An enumerator in strict length-lexicographic order decides its language provided it also halts after its final output when the language is finite: wait until it prints $x$, prints a later word, or terminates. The “later word” conclusion depends on the promised sorted order, and the finite-language case depends on the halting promise.

## 9. Implementation boundaries

A practical interpreter has finite memory, integer limits, timeouts, and external failures. A timeout establishes only that a run did not halt within a bound. It cannot distinguish divergence from slow termination. Sandboxing a simulated language is a security obligation separate from the mathematical universal-machine construction.

Traces help validate one simulation. Universal correctness requires a relation between simulated and host configurations plus initialization, step simulation, and halting/output lemmas.

## Exercises with complete solutions

### 1. Error versus divergence

Why is returning $\\mathrm{error}$ not the same as an undefined partial result?

**Solution.** Returning $\\mathrm{error}$ halts with an output in an enlarged codomain. Undefinedness is modeled by no halting output. A caller can observe the first result in finite time but may wait forever in the second case.

### 2. Decidable implies recognizable

Prove every decidable language is recognizable.

**Solution.** A decider already accepts members and halts rejecting nonmembers. Ignoring the stronger rejection guarantee gives a recognizer.

### 3. Complement of a decidable set

Construct its decider.

**Solution.** Run the original decider, which always halts, and swap accept and reject outcomes. Totality makes this safe.

### 4. Recognizable intersection

How can two recognizers recognize $A \\cap B$?

**Solution.** Dovetail both on the input and accept only after both have accepted. If the word is in both, both events eventually occur; otherwise at least one never accepts.

### 5. Two recognizers decide

If $L$ and its complement are recognizable, prove $L$ decidable.

**Solution.** Dovetail their recognizers. Exactly one must eventually accept for each input. Accept when the $L$ recognizer does and reject when the complement recognizer does, so the combined machine always halts correctly.

### 6. Unary versus binary

Why does computable translation not preserve polynomial complexity automatically?

**Solution.** Unary encoding of $n$ has length $n$, while binary has length about $\\log n$. A runtime polynomial in unary length may be exponential in binary length even though both translations are computable.

### 7. Invalid descriptions

Why assign them a default machine in an enumeration?

**Solution.** It makes the decoding map total without losing any valid machine. Every word then denotes some machine, simplifying universal simulation and diagonal indexing.

### 8. Dovetail fairness

Why does stage scheduling eventually finish any halting simulation?

**Solution.** A computation with index $i$ needing $t$ steps receives at least $t$ steps by sufficiently large stages after $i$; stages grow without bound and include it thereafter.

### 9. Enumerator direction

Build a recognizer from an arbitrary enumerator.

**Solution.** Run the enumerator and compare every printed word with input $x$. Accept when equal. If $x$ is in the language it eventually appears; otherwise the procedure may run forever, as recognizability permits.

### 10. Nondeterministic simulation

Why not explore one nondeterministic branch to completion?

**Solution.** That branch may be infinite while another has a finite accepting run. Dovetail all finite branch prefixes so every finite accepting computation is eventually discovered.

### 11. Universal invariant

Name the core proof obligations for a universal interpreter.

**Solution.** Valid initialization represents the simulated initial configuration; every simulated step is matched by finitely many interpreter steps; simulated halting is detected; and decoded output agrees. Malformed descriptions need a separate total policy.

### 12. Timeout evidence

What does a one-hour timeout prove?

**Solution.** Only that the concrete run under the given platform and resource policy did not produce a halting result within one hour. It proves neither mathematical divergence nor undecidability.

[Book overview](#/item/book-formal-computation-proof-reference)
`;export{e as default};