
# Diagonalization, Undecidability, and Reducibility

Undecidability is a theorem about the absence of any total correct algorithm under a formal model. It is not evidence that typical instances are hard, that no useful semi-algorithm exists, or that a particular implementation timed out. This chapter proves the core impossibility results and turns mapping reductions into a disciplined transport mechanism.

## 1. Countability and diagonal form

Finite words over a finite alphabet are countable: order them first by length, then lexicographically. Therefore machines and programs, having finite descriptions, are countable. For a nonempty finite alphabet, the word set is countably infinite, and its languages are uncountable because they correspond to infinite binary membership sequences. Hence most such languages are not decidable or even recognizable. For the empty alphabet, $\Sigma^{\ast}=\{\varepsilon\}$ has only two languages, so the uncountability conclusion does not apply.

This counting proof establishes existence but usually gives no natural example. Diagonalization constructs a language disagreeing with the $i$th machine on the $i$th encoded input.

## 2. The acceptance problem

Let

$A_{\mathrm{TM}}=\{\langle M,w\rangle: M\text{ accepts }w\}$.

It is recognizable: a universal machine simulates $M$ on $w$ and accepts if $M$ accepts. It is not decidable.

Assume decider $H$ for $A_{\mathrm{TM}}$. Build machine $D$ that on description $\langle M\rangle$ runs $H(\langle M,\langle M\rangle\rangle)$ and accepts exactly when $H$ rejects. Evaluate $D$ on $\langle D\rangle$. If $H$ says $D$ accepts itself, $D$ rejects; if $H$ says it does not, $D$ accepts. Both contradict correctness. Therefore $H$ cannot exist.

The construction needs a valid encoding and self-application, not a mystical program “knowing itself.” Its finite description is ordinary input data.

## 3. Halting and complements

The halting problem

$HALT_{\mathrm{TM}}=\{\langle M,w\rangle: M\text{ eventually halts on }w\}$

is recognizable by simulation and undecidable. Reduce $A_{\mathrm{TM}}$ to it: given $\langle M,w\rangle$, construct machine $N$ that simulates $M(w)$, halts if $M$ accepts, and loops if $M$ rejects or loops. Then $N$ halts on empty input exactly when $M$ accepts $w$.

The complement of $A_{\mathrm{TM}}$ is not recognizable. If both it and $A_{\mathrm{TM}}$ were recognizable, dovetailing would decide $A_{\mathrm{TM}}$, contradicting the theorem. Thus recognizable languages are not closed under complement.

## 4. Mapping reductions

For languages $A,B$, write $A \le_{m}  B$ when a total computable function $f$ satisfies

$x \in A \iff f(x) \in B$.

The direction reads: solve $A$ using a solver for $B$. Therefore:

- if $A \le_{m}  B$ and $B$ is decidable, then $A$ is decidable;
- if $A \le_{m}  B$ and $A$ is undecidable, then $B$ is undecidable;
- if $A \le_{m}  B$ and $B$ is recognizable, then $A$ is recognizable.

To prove target $B$ undecidable, reduce a known undecidable $A$ **to** $B$. Reversing the arrow proves nothing useful about $B$.

A reduction proof has four parts: define $f$ on every input, prove it computable and terminating, prove both directions of membership equivalence, and handle malformed encodings.

## 5. Machine-language properties

Consider $E_{\mathrm{TM}}=\{\langle M\rangle:L(M)=\varnothing\}$. Reduce $A_{\mathrm{TM}}$ to its complement. Given $\langle M,w\rangle$, construct $N$ that on any input simulates $M(w)$ and accepts if that simulation accepts. If $M$ accepts $w$, then $L(N)=\Sigma^{\ast} $; otherwise $L(N)=\varnothing$. Thus deciding emptiness would decide $A_{\mathrm{TM}}$.

Universality, finiteness, equivalence, and many other semantic properties of machine languages are undecidable. The construction wraps a fixed computation inside behavior selected by its outcome.

## 6. Rice's theorem

**Theorem 11.1 (Rice's).** Every nontrivial extensional property of recognizable languages is undecidable from a Turing-machine description. Extensional means it depends only on $L(M)$, not syntax or runtime. Nontrivial means some recognizable language has it and some does not.

Suppose first that the empty language does not have the property, and choose a recognizable witness language $A$ that does. Given $\langle M,w\rangle$, construct $N$ that, on input $y$, simulates $M(w)$ and begins recognizing $A$ on $y$ only after $M(w)$ accepts. Then $L(N)=\varnothing$ if $M(w)$ never accepts and $L(N)=A$ if it does. A decider for the property would therefore decide $A_{TM}$. If the empty language has the property, apply the same construction to the complementary nontrivial property “does not have the property.” This proves the theorem without requiring a machine to change previously accepted words.

Rice's theorem does not cover syntactic questions such as “does this description contain ten states?” or all operational questions such as a fixed bounded step count. It also does not say the property is unrecognizable; recognizability needs separate analysis.

## 7. Post correspondence

An instance of the Post correspondence problem is a finite list of pairs $(u_i,v_i)$. Ask whether some nonempty index sequence makes concatenated tops and bottoms equal. PCP is recognizable by enumerating finite sequences and checking equality. Its undecidability is an external theorem cited from Post, not proved by the following history outline.

**Cited theorem and proof outline, not a complete tile construction.** The history construction encodes successive configurations as strings and uses tiles to enforce local step consistency. A matching sequence exists exactly when an accepting computation exists. This is a bridge from machine behavior to combinatorial word equations and then to grammar and logic undecidability results.

## 8. Fixed parameters and bounded variants

Many undecidable questions become decidable under a finite bound. “Does $M$ halt within $t$ steps?” is decidable by simulation for exactly $t$ steps. “Does a PCP instance have a match of length at most $k$?” is finite search. When the bound is part of binary input, complexity may still be high, but decidability changes.

Do not infer an unbounded solution by repeatedly increasing a timeout: members may eventually be found, while nonmembers never receive a conclusive stage.

## 9. Reduction audit

- Identify source and target languages before constructing anything.
- Make the transformer total, including malformed inputs.
- Prove $\text{yes} \to \text{yes}$ and $\text{no} \to \text{no}$, not merely one implication.
- Distinguish many-one, Turing, polynomial-time, and approximation reductions.
- An undecidable superclass may contain decidable restricted fragments.
- Undecidable does not mean random, paradoxical, or impossible to approximate in practice.


## Make the diagonal language explicit

Choose a length-lexicographic enumeration $w_0,w_1,\ldots$ of words over a finite nonempty alphabet, and an effective enumeration $M_0,M_1,\ldots$ of all recognizers, including a specified default for malformed descriptions. Define
$$D=\{w_i:M_i\text{ does not accept }w_i\}.$$
Here not accept includes both rejection and divergence. If a recognizer $M_j$ recognized $D$, then $w_j\in D$ would hold exactly when $M_j$ did not accept $w_j$, while recognition would make it equivalent to acceptance. Either case contradicts the other. Therefore $D$ is not recognizable.

This is a definition of a language, not an algorithm deciding its membership. In contrast its complement is recognizable: given $w$, compute its index $i$ in the effective word enumeration, simulate $M_i(w)$ and accept if it accepts. Thus diagonalization supplies an explicitly specified nonrecognizable language rather than only an uncountability argument. It relies on a shared enumeration of words and machines; the indices need not be unique descriptions of distinct functions.

The self-application proof of acceptance can likewise be made a total finite code construction. On a valid program code $e$, the hypothetical decider is queried about $(e,e)$ and its Boolean answer is reversed. On malformed strings give the new machine a fixed outcome. The description of this wrapper is finite even though the supposed decider is impossible. Its contradiction is obtained only by asking about the wrapper's own valid code. No unspecified reflection primitive has been assumed.

## Rice's complementary case and malformed data

The language version of Rice's theorem above treats recognizable languages, not running time, number of states or every operational event. Its reduction can be total on all input strings. If the source is $A_{TM}$, malformed machine-input pairs are nonmembers. When the property excludes the empty language, map such pairs to a fixed empty-language recognizer; otherwise run the proof for the complementary property and reverse a hypothetical property decider. The fixed positive witness language is chosen once from the nontriviality assumption, not rediscovered by an algorithm for each source input.

The wrapper waits for acceptance, not merely any halt. If the simulated source rejects, the wrapper accepts nothing and its language remains empty. This gives both directions of the reduction. Waiting for a generic halt instead would reduce HALT, which is also undecidable, but would no longer prove the stated equivalence with $A_{TM}$. Naming which event is awaited prevents one reduction proof from silently changing its source language.

A property can be undecidable yet recognizable: nonemptiness is the standard example below. Rice's theorem alone therefore cannot be strengthened to say every nontrivial language property is unrecognizable. That would contradict a direct dovetailing construction.

## Worked example 1: nonemptiness has positive evidence

Let $N_{M,w}$ ignore its own input, simulate $M(w)$ and accept if that simulation accepts. Its language is all words if $M$ accepts $w$, and empty if $M$ rejects or diverges. Writing the finite constants $M,w$ into this fixed wrapper is a terminating computable transformation. It reduces $A_{TM}$ to NONEMPTY, proving NONEMPTY undecidable.

Nevertheless NONEMPTY is recognizable. Enumerate all words and dovetail their runs on the supplied machine; accept the machine code when any run accepts. An accepting run has finite index and time, so is found. No false positive is possible when the language is empty. For EMPTY, the very same wrapper gives $\overline{A_{TM}}\le_m\mathrm{EMPTY}$, because its language is empty exactly when the source does not accept. On invalid source pairs use an empty-language machine, consistently with the complement convention. Since $\overline{A_{TM}}$ is not recognizable, EMPTY is not recognizable. The two index sets are both undecidable but have different recognition status.

## Worked example 2: equivalent syntax can have different halting behaviour

One machine rejects every input immediately; another loops on every input. Both recognize the empty language, but only the first halts on the empty input. Thus a property asking whether a given run halts is not determined by the recognized language. On the partial-output-function convention where rejecting runs are converted to divergence, the two can also compute the same nowhere-defined partial function after normalization, while their original operational traces still differ.

For a purely syntactic property, add unreachable states to a recognizer. Acceptance behavior is unchanged, but the state count changes. Counting states is decidable from a finite valid code. These examples give concrete failures of extensionality; they do not claim that every non-language property is decidable. A fixed-input halting property remains undecidable by the appropriate wrapper reduction, even though this language version of Rice does not cover it.

## Worked example 3: solve and refute small correspondence instances

Take tiles $(a,ab)$ and $(ba,a)$. The nonempty index sequence $1,2$ has top $a\,ba=aba$ and bottom $ab\,a=aba$, so it is a solution. Neither singleton sequence is a solution, as its two displayed words differ. A recognizer enumerating sequences by increasing length eventually reaches $1,2$ and accepts. There is no need to predict a useful search length in advance for a positive witness.

For the one-tile instance $(a,aa)$, any nonempty sequence consists of $k\ge1$ copies. Its top has length $k$ and bottom length $2k$, so equality is impossible. This is a complete negative proof for that instance, using an invariant valid for every sequence. It is stronger than searching the first million lengths and finding no match. The general cited undecidability theorem coexists with easy positive and negative instances; it excludes a total decision procedure for the entire unrestricted family, not every individual mathematical argument.

The standard PCP theorem imports a particular finite-alphabet tile model and requires a nonempty index sequence. Allowing the empty sequence would make every instance trivially positive and change the problem. Bounded sequence length makes finite search decide the bounded version. Its bound and encoding then determine a complexity problem different from unbounded PCP. These domain restrictions are part of the theorem statement, rather than implementation details that can be omitted from a reduction.


## A many-one map is not an oracle conversation

The same map witnessing $A\le_m B$ also witnesses $\overline A\le_m\overline B$, because negating the membership equivalence negates both sides without changing the computed string. This does not mean $A$ and its complement have a many-one reduction to each other. The target language has changed too. A reduction theorem must preserve its named source and target, rather than only the shape of an arrow.

A Turing reduction instead permits a machine to ask an exact membership oracle about the target and use the answer in subsequent computation. One query and answer reversal always decide the complement from an oracle for the original language. Thus a language and its complement are equivalent for that oracle reduction. That fact does not provide a positive witness for a negative oracle answer.

For a concrete separation of these notions, HALT is recognizable and undecidable, while its complement is not recognizable: if it were, two dovetailed recognizers would decide HALT. Consequently $\overline{HALT}\not\le_m HALT$, since otherwise composing the total transformer with the HALT recognizer would recognize the complement. Nevertheless an exact HALT oracle decides its complement by one query and reversal. The argument proves the claimed nonreduction from an established recognition obstruction; it does not assume every pair of undecidable problems is interchangeable.

Even the existence of a reduction from an easy language supplies no upper bound for its destination. The empty language maps to HALT by constantly outputting one known looping machine-input pair. Both sides of its equivalence are then false on every source input, so this is a valid total reduction from a decidable language to an undecidable one. Hardness conclusions therefore use a difficult source and an assumed solver for the target; they cannot be reversed merely because a map exists. These examples explain why naming the reduction type and direction is mathematical content rather than formatting.

## Exercises with complete solutions

### Exercise 1: Countable machines
<a id="undecidability-and-reducibility-ex-1"></a>

Why are machine descriptions countable?

<details>
<summary>Hint 1</summary>

Machine tables are finite strings.

</details>
<details>
<summary>Hint 2</summary>

Enumerate length first, skipping or assigning defaults to invalid codes.

</details>
<details>
<summary>Solution</summary>

They are finite words over a finite alphabet. Length-lexicographic order enumerates every such word; invalid descriptions can be skipped or assigned defaults.

</details>

### Exercise 2: Uncountable languages
<a id="undecidability-and-reducibility-ex-2"></a>

Why are languages over $\{0,1\}$ uncountable?

<details>
<summary>Hint 1</summary>

Represent membership of each successive word by one bit.

</details>
<details>
<summary>Hint 2</summary>

A diagonal bit sequence escapes every proposed list.

</details>
<details>
<summary>Solution</summary>

Enumerate words $w_0,w_1,...$. Each language determines an infinite bit sequence by membership. Cantor's diagonal argument shows the set of infinite bit sequences is uncountable.

This requires a nonempty alphabet so that there are infinitely many words. The empty alphabet yields only the empty word and two possible languages, as the chapter explicitly separates. Countability of descriptions therefore cannot by itself be applied to that degenerate input universe.

</details>

### Exercise 3: Recognizing acceptance
<a id="undecidability-and-reducibility-ex-3"></a>

Construct a recognizer for $A_{\mathrm{TM}}$.

<details>
<summary>Hint 1</summary>

A positive input has a finite accepting trace.

</details>
<details>
<summary>Hint 2</summary>

A rejecting or looping simulation must never cause acceptance.

</details>
<details>
<summary>Solution</summary>

Parse $\langle M,w\rangle$, simulate $M$ on $w$, accept if it enters accept, reject if it explicitly rejects, and otherwise continue. Members are eventually accepted.

</details>

### Exercise 4: Diagonal contradiction
<a id="undecidability-and-reducibility-ex-4"></a>

If $D$ accepts exactly when $H$ says its input machine does not accept itself, what happens on $\langle D\rangle$?

<details>
<summary>Hint 1</summary>

Apply the definition to the wrapper's own valid code.

</details>
<details>
<summary>Hint 2</summary>

Either answer makes the behavior opposite.

</details>
<details>
<summary>Solution</summary>

$D$ accepts iff $H$ says $D$ does not accept, while correctness of $H$ says the opposite equivalence. Either Boolean outcome contradicts itself.

</details>

### Exercise 5: Reduction direction
<a id="undecidability-and-reducibility-ex-5"></a>

To prove new problem $B$ undecidable using $A_{\mathrm{TM}}$, which direction is required?

<details>
<summary>Hint 1</summary>

A target decider should solve the known impossible source.

</details>
<details>
<summary>Hint 2</summary>

Put the known hard problem on the left of the reduction arrow.

</details>
<details>
<summary>Solution</summary>

Prove $A_{\mathrm{TM}}\le_m B$. A decider for $B$ composed with the reduction would decide $A_{\mathrm{TM}}$, impossible.

</details>

### Exercise 6: Transitivity
<a id="undecidability-and-reducibility-ex-6"></a>

Prove mapping reducibility is transitive.

<details>
<summary>Hint 1</summary>

Substitute the first output into the second equivalence.

</details>
<details>
<summary>Hint 2</summary>

Composition preserves both totality and the membership iff.

</details>
<details>
<summary>Solution</summary>

If $x \in A \iff f(x) \in B$ and $y \in B \iff g(y) \in C$, then $x \in A \iff g(f(x)) \in C$. Composition of total computable functions is total computable.

</details>

### Exercise 7: Complement transfer
<a id="undecidability-and-reducibility-ex-7"></a>

If $A \le_{m}  B$, prove $\overline{A} \le_{m} \overline{B}$.

<details>
<summary>Hint 1</summary>

Negate both sides of the same equivalence.

</details>
<details>
<summary>Hint 2</summary>

The transformer itself need not change.

</details>
<details>
<summary>Solution</summary>

The same $f$ works because $x \notin A$ iff $f(x) \notin B$. Total computability is unchanged.

</details>

### Exercise 8: Empty-language wrapper
<a id="undecidability-and-reducibility-ex-8"></a>

In Section 5, what is $L(N)$ if $M(w)$ loops?

<details>
<summary>Hint 1</summary>

The wrapper only starts accepting after a source acceptance.

</details>
<details>
<summary>Hint 2</summary>

A waiting run accepts no input if that event never comes.

</details>
<details>
<summary>Solution</summary>

On every input, $N$ waits forever for $M(w)$ to accept, so it accepts no input. Therefore $L(N)=\varnothing$.

</details>

### Exercise 9: Rice boundary
<a id="undecidability-and-reducibility-ex-9"></a>

Does Rice's theorem prove “has at most twenty states” undecidable?

<details>
<summary>Hint 1</summary>

Different descriptions can recognize the same language.

</details>
<details>
<summary>Hint 2</summary>

State counting inspects finite syntax.

</details>
<details>
<summary>Solution</summary>

No. That is a decidable syntactic property of the finite description and can differ between machines recognizing the same language, so it is not extensional.

</details>

### Exercise 10: Bounded halting
<a id="undecidability-and-reducibility-ex-10"></a>

Why is halting within $t$ steps decidable?

<details>
<summary>Hint 1</summary>

Use a finite step counter.

</details>
<details>
<summary>Hint 2</summary>

Inspect the initial configuration too when the bound is zero.

</details>
<details>
<summary>Solution</summary>

Simulate exactly $t$ transitions or until halting. Both cases finish after a finite prescribed amount of work.

The time-zero case includes a machine whose initial state already halts. For a general bound, inspect the start and each of the at most $t$ resulting transitions. If no halt appears, answer that the bounded predicate is false; this does not answer whether the same run eventually halts later.

</details>

### Exercise 11: PCP recognition
<a id="undecidability-and-reducibility-ex-11"></a>

Why is PCP recognizable?

<details>
<summary>Hint 1</summary>

Each candidate sequence has finite computable concatenations.

</details>
<details>
<summary>Hint 2</summary>

A positive solution occurs at one finite place in the enumeration.

</details>
<details>
<summary>Solution</summary>

Enumerate all nonempty finite index sequences by length, concatenate their top and bottom strings, and accept when equal. Any solution appears at a finite stage.

</details>

### Exercise 12: Timeout logic
<a id="undecidability-and-reducibility-ex-12"></a>

Why can increasing timeouts recognize halting but not decide it?

<details>
<summary>Hint 1</summary>

Every finite failure is compatible with a later halt.

</details>
<details>
<summary>Hint 2</summary>

A recognizer needs eventual positive evidence, while a decider also needs a final negative answer.

</details>
<details>
<summary>Solution</summary>

A halting run eventually lies within some timeout and is found. A nonhalting run fails every finite timeout, but no particular failure proves that all later bounds fail, so rejection never becomes conclusive.

</details>

[Book overview](#/books/formal-computation-proof-reference)


## Sources

The preserved Undecidability source supplies the original diagonal and Rice proofs, PCP outline and twelve complete solutions; all remain in this expanded text. Rice's primary paper is [“Classes of Recursively Enumerable Sets and Their Decision Problems”](https://doi.org/10.1090/S0002-9947-1953-0053041-6), 1953. PCP undecidability is an explicitly cited external input from Emil L. Post, [“A Variant of a Recursively Unsolvable Problem”](https://www.ams.org/journals/bull/1946-52-04/S0002-9904-1946-08555-9/S0002-9904-1946-08555-9.pdf), 1946. The history paragraph is an outline, not a claimed full tile proof. Sipser's *Introduction to the Theory of Computation* is the benchmark for the surrounding computability theory.

## Summary

Diagonalization proves concrete nonrecognizability and undecidability statements. Total mapping reductions preserve both positive and negative instances, with malformed inputs assigned explicitly. Rice applies to nontrivial extensional language properties and does not determine recognition status by itself. NONEMPTY, EMPTY and the correspondence examples separate positive search, negative proof and the cited general PCP obstruction. A finite timeout or bounded search always concerns a smaller predicate than the unbounded decision problem.
