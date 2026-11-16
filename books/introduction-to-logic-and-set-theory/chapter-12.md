
# Computable Functions and Turing Machines

An effective procedure is more specific than an existence proof. A well-order supplied by Choice need not come with a finite rule for finding its next point. Conversely, the impossibility of an algorithm can be proved by a short, entirely ordinary mathematical argument. Computability studies procedures through a precise finite machine model, then uses encodings to turn procedures themselves into inputs.

This chapter expands the preserved Computability and Turing Machines source. That source, its original identifier and all its solutions remain available. We develop its diagonal argument, Rice construction and hierarchy statements in detail, retaining the distinction between language properties and properties of particular computations. There is no assumption that recognizing an answer automatically decides every negative instance.

## A finite machine and its potentially infinite run

A deterministic Turing machine has finite states $Q$, a finite nonempty input alphabet $\Sigma$, a finite tape alphabet $\Gamma\supseteq\Sigma$ containing a blank $\sqcup\notin\Sigma$, a start state and distinct accept and reject states. Its partial transition table takes a nonhalting state and scanned tape symbol to a new state, written symbol and head movement left or right. Entering either designated halting state terminates the run. We treat an undefined transition as rejecting and halting; equivalently, complete the table with transitions to a reject state.

Use a tape indexed by the integers, initially containing the finite input at positions beginning at zero and blanks elsewhere. Only finitely many positions can be nonblank after any finite number of steps. A configuration records the state, head position and this finite tape information. The earlier source's notation $(q,u,v)$ records finite portions to the left and at/right of the head; omitted outer cells are blank, and equivalent blank-padded descriptions represent the same configuration. One step is completely determined by the finite table and scanned symbol.

Machines and finite inputs have finite-string encodings. Fix a concrete effective syntax for lists of states, symbols and transitions, with delimiters and numerical indices. A parser can decide whether a string is a valid machine code, and can reject invalid encodings. Pair encodings are likewise effective and uniquely parseable. The exact choice of delimiters is immaterial, provided translation between the chosen codes and the intended finite data is computable.

A universal simulator stores an encoded transition table and an encoded current configuration. At each step it finds the current state's table entry, updates the one scanned cell, and moves the head. Each of these operations searches or modifies finite strings and can itself be implemented by a Turing machine. Thus simulation for a specified finite number of steps always terminates. Unbounded simulation terminates precisely when the simulated machine halts; calling a simulation universal does not make its halting predictable.

A partial computable function on natural-number or string codes is a function whose output is produced by a machine whenever the function is defined, with divergence permitted elsewhere. A total computable function is defined on every input. The Church–Turing thesis identifies this model with the informal notion of effective calculation; that identification is a thesis about an informal concept, not a theorem proved merely by defining the machine.

## Recognition and decision

A machine recognizes a language $L\subseteq\Sigma^*$ when it accepts exactly the strings in $L$. On a nonmember it may reject or continue forever. A decider additionally halts on every input. It therefore gives a yes or no answer for every string. A recognizer only guarantees eventual positive evidence on members.

**Worked example 11.1 (Bounded and unbounded simulation).** The predicate “machine $M$ halts on $w$ within $t$ steps” is decidable: parse the input, simulate at most $t$ steps and inspect whether a halting configuration has appeared, including the initial configuration at time zero. The predicate “machine $M$ eventually halts on $w$” is recognizable by unrestricted simulation. If a halt occurs, accept. If none occurs, the recognizer continues forever. Replacing the finite bound by the word eventually changes a terminating calculation into an unbounded search; the two predicates should not be conflated.

**Lemma 11.2 (Two recognizers give a decider).** If $L$ and its complement are recognizable, then $L$ is decidable.

*Proof.* On input $w$, alternate one simulated step of each recognizer, retaining both configurations. Exactly one recognizer must eventually accept, because $w$ belongs to exactly one of the two languages. Accept if the first does and reject if the second does. Before that acceptance, a rejection by either machine need not settle the other run, so continue the dovetailing. The resulting procedure always halts with the correct answer. ∎

Dovetailing also searches countably many runs: at stage $s$, simulate one further step of the first $s$ listed inputs. Each fixed run receives arbitrarily many steps. Running the first input to completion before starting the second is not equivalent; the first might never finish.

## Halting and diagonal contradiction

Let
$$\mathrm{HALT}=\{\langle M,w\rangle:M\text{ halts on }w\}.$$
Invalid pair encodings are nonmembers by convention. The bounded-simulation argument shows HALT recognizable.

**Theorem 11.3 (Undecidability of halting).** HALT has no decider.

*Proof.* Suppose $H$ were a total decider. Construct a machine $D$ that, on a valid machine code $e$, asks $H$ about the pair $(e,e)$. If $H$ answers that the encoded machine halts on its own code, $D$ loops. If $H$ answers no, $D$ halts. On invalid codes let $D$ halt. This is a finite effective construction using the assumed decider as a subroutine. Let $d$ be the valid code of $D$. Then $D$ halts on $d$ exactly when $H$ says it does not halt there, contradicting the correctness of $H$. ∎

Self-application requires no machine that magically discovers its own source. The definition of $D$ operates on whatever code it receives. Only after its construction do we externally feed its particular code back as an input. This separates the effective construction from the mathematical argument about one input.

**Corollary 11.4.** The complement of HALT is not recognizable.

*Proof.* HALT already has a recognizer. If its complement had one too, Lemma 11.2 would supply the forbidden decider. ∎

A nonhalting run has no final rejecting configuration that announces its endlessness. The corollary does more than observe that a particular simulator fails to find negative evidence; it rules out every possible recognizer for all negative instances.

## Reductions are actual code constructions

A mapping reduction $A\le_m B$ is a total computable function $r$ with $x\in A$ if and only if $r(x)\in B$. If $B$ were decidable, computing $r$ and applying its decider would decide $A$. If $B$ were recognizable, the same composition would recognize $A$. The direction matters: reducing a difficult problem to a new one transfers an obstruction to the new problem.

**Worked example 11.5 (HALT reduces to nonemptiness).** Given $\langle M,w\rangle$, produce a machine $N_{M,w}$ whose program contains the finite constants describing $M,w$. On any input $u$, it ignores $u$, simulates $M$ on $w$, and accepts if that simulation ever halts, whether by acceptance or rejection. If the simulated run halts, $L(N_{M,w})=\Sigma^*$; otherwise it is empty. Writing the fixed simulation wrapper around the finite supplied code is an effective operation and always terminates. For invalid pair codes output a fixed empty-language machine. Thus HALT mapping-reduces to $\mathrm{NONEMPTY}_{TM}$, so nonemptiness is undecidable. It is nevertheless recognizable: dovetail $N$ on every finite input and accept when any run accepts.

**Worked example 11.6 (All strings is not recognizable).** For a valid pair $\langle M,w\rangle$, produce $N$ that on input $u$ checks whether $M(w)$ halts within $|u|$ steps. Accept if no halt is seen, and reject otherwise. This machine always halts. If $M(w)$ never halts, it accepts every string. If it halts at time $t$, every input with length at least $t$ is rejected. Because the input alphabet is nonempty, there are arbitrarily long inputs, so in that case its language is not all strings. Thus $\overline{\mathrm{HALT}}\le_m\mathrm{ALL}_{TM}$. For malformed pair inputs, which belong to the complement under our convention, output a fixed all-language machine. A recognizer for ALL would recognize the nonrecognizable complement of HALT, contradiction.

The malformed-input clause is part of making a reduction total on strings. In informal discussions one can instead declare the source domain to be valid encodings only, but the domain convention must be stated. The finite wrapper construction is not an appeal to a machine with an unspecified ability to decide the original problem; it only simulates or performs bounded simulation.

## Rice's theorem with the complementary case included

**Theorem 11.7 (Rice).** Any nontrivial property of recognizable languages has an undecidable index set of recognizing machines. Here nontrivial means that at least one recognizable language has the property and at least one does not. The property must depend only on the recognized language.

*Proof.* Let $\mathcal P$ be such a property. Suppose its index set had a decider on valid machine codes. If the empty language does not have the property, fix a machine $A$ whose recognized language does. Given a valid pair $\langle M,w\rangle$, construct $N$ that on input $u$ first simulates $M(w)$ and, only if that run halts, simulates $A(u)$, accepting exactly when $A$ accepts. If $M(w)$ halts, $N$ recognizes $L(A)$; otherwise it recognizes the empty language. The proposed property decider therefore decides halting, contradiction.

If the empty language does have the property, apply the preceding argument to the complementary property among recognizable languages. That property is still nontrivial, excludes the empty language, and would have a decider obtained by reversing the original decider's answers on valid codes. This again contradicts halting undecidability. ∎

Rice concerns acceptance languages, not every behavior of a machine. “Has five states” is syntactic and decidable from the code. “Halts on input zero” is not a language property either: a machine rejecting zero and one looping on zero may recognize the same empty language. A different Rice theorem for partial functions has a different extensional domain. Changing the domain of extensionality changes which properties qualify.

## Quantifier complexity of computation

A relation is $\Sigma^0_1$ if it has the form $\exists t\,R(\vec n,t)$ with computable $R$, and $\Pi^0_1$ if it has a universal form with computable matrix. More generally $\Sigma^0_{k+1}$ is existential over a $\Pi^0_k$ relation and $\Pi^0_{k+1}$ is universal over a $\Sigma^0_k$ relation. Quantifiers range over natural numbers; tuples can be combined by effective pairing. These are definitions of relations in the standard natural numbers, not assertions that a particular formal theory proves their truth.

HALT is $\Sigma^0_1$ because finite simulation is decidable. It is complete for that class under computable mapping reductions: if $x\in A\leftrightarrow\exists t\,R(x,t)$, construct a machine that searches successive $t$ and halts exactly when it finds a true instance. Its code together with a fixed input is a computable reduction. Every witness search terminates exactly in the positive case.

Let TOTAL be the indices of machines computing a total partial function on natural-number inputs. It is $\Pi^0_2$, since membership says $\forall n\exists t$ “the computation halts within $t$ steps.” It is complete for that class. For $x\in A\leftrightarrow\forall n\exists t\,R(x,n,t)$ with decidable $R$, construct a machine which on input $k$ searches witnesses successively for every $n\le k$, then halts after all are found. It halts on every $k$ exactly when every $n$ has a witness. If one witness is missing, the run on that index does not finish. This proves the claimed reduction and preserves the original source's hierarchy statement with its missing construction supplied.

## Exercises

<a id="computable-functions-turing-machines-ex1"></a>
**Exercise 11.1.** Give a recognizer for NONEMPTY, explaining why a sequential search through complete runs is insufficient.

<details>
<summary>Hint 1</summary>

List all finite input strings.

</details>
<details>
<summary>Hint 2</summary>

At stage $s$, advance each of the first $s$ simulations.

</details>
<details>
<summary>Solution</summary>

Parse the machine code, rejecting invalid ones. Enumerate its finite inputs by length and lexicographic order. At stage $s$, give one additional step to every simulation among the first $s$ inputs; accept if any simulation accepts. If the language is nonempty, an accepting input has a finite index and a finite accepting run, so eventually it has received enough steps and acceptance is found. If the language is empty, no false acceptance occurs. Sequentially waiting for the first run to terminate could get stuck on a looping input even when another input is accepted, so that alternative does not recognize the required language.

</details>

<a id="computable-functions-turing-machines-ex2"></a>
**Exercise 11.2.** Reconstruct the reduction proving ALL is not recognizable, including the case where the simulated machine halts immediately.

<details>
<summary>Hint 1</summary>

Use input length as a finite time allowance.

</details>
<details>
<summary>Hint 2</summary>

Check the initial configuration as time zero.

</details>
<details>
<summary>Solution</summary>

Given a valid pair $(M,w)$, output a decider $N$ accepting $u$ precisely when the simulation of $M(w)$ has not halted by time $|u|$. An initial halt is detected even for the empty string, so in that case $N$ rejects all inputs. More generally a halt at time $t$ makes all inputs of length at least $t$ reject; such inputs exist over a nonempty alphabet. A never-halting run makes every input accept. Invalid pairs, which are outside HALT, map to a fixed all-language machine. This is a total reduction of the complement of HALT to ALL. A recognizer for ALL would therefore recognize that complement, contradicting Corollary 11.4.

</details>

<a id="computable-functions-turing-machines-ex3"></a>
**Exercise 11.3.** Prove that a language recognized together with its complement is decidable, allowing either recognizer to reject early.

<details>
<summary>Hint 1</summary>

Early rejection is not the same as the other recognizer accepting.

</details>
<details>
<summary>Hint 2</summary>

Stop when positive evidence appears on one side.

</details>
<details>
<summary>Solution</summary>

Simulate both recognizers step by step on the same input. If the recognizer of $L$ accepts, accept; if the recognizer of its complement accepts, reject. A rejected simulation can be left halted while the other continues. Every input belongs to exactly one side, whose recognizer must eventually accept. The other cannot accept by correctness. Therefore the combined machine always halts and gives the correct answer. Merely running the first recognizer and reversing its eventual rejection would not handle its possible infinite runs; the guaranteed positive event on one of the two sides is what supplies termination.

</details>

<a id="computable-functions-turing-machines-ex4"></a>
**Exercise 11.4.** Explain why “halts on zero” is not a property of the recognized language, and state exactly what Rice's theorem does cover.

<details>
<summary>Hint 1</summary>

Compare rejection with divergence, neither of which is acceptance.

</details>
<details>
<summary>Hint 2</summary>

Construct two recognizers of the empty language.

</details>
<details>
<summary>Solution</summary>

One machine rejects every input immediately; another loops on every input. Both recognize the empty language, but the first halts on zero and the second does not. Thus halting on zero is not invariant under equality of recognized languages. Rice's theorem covers any nontrivial class of recognizable languages and says that the codes whose acceptance languages belong to that class cannot be decided. It does not decide or classify every machine behavior. A theorem about extensional properties of partial functions would group machines differently, so invoking that version requires specifying the computed partial functions rather than silently changing the meaning of language recognition.

</details>

<a id="computable-functions-turing-machines-ex5"></a>
**Exercise 11.5.** Give the complete HALT-to-NONEMPTY mapping construction and verify total computability of the map.

<details>
<summary>Hint 1</summary>

The output machine may contain the original machine and input as fixed finite data.

</details>
<details>
<summary>Hint 2</summary>

Producing a simulator's code does not require running its eventual simulation.

</details>
<details>
<summary>Solution</summary>

Parse the input pair. If malformed, output a fixed recognizer of the empty language. Otherwise write a finite program $N$ which ignores its own input, simulates the supplied $M$ on the supplied $w$, and accepts when the simulation halts. This source-code construction always finishes because it copies finite data into a fixed wrapper. It does not wait to see whether $M(w)$ halts. If that run halts, every input of $N$ is accepted; otherwise none is. Hence the produced code belongs to NONEMPTY exactly when the original pair belongs to HALT. This verifies both directions and totality of the reduction.

</details>

<a id="computable-functions-turing-machines-ex6"></a>
**Exercise 11.6.** Why does the diagonal proof not need an algorithm that prints its own code?

<details>
<summary>Hint 1</summary>

The constructed machine takes an arbitrary code as input.

</details>
<details>
<summary>Hint 2</summary>

Self-application is performed externally after the construction.

</details>
<details>
<summary>Solution</summary>

The machine $D$ is specified by a fixed wrapper around the hypothetical decider: on input $e$, query the pair $(e,e)$ and reverse halting behavior. This instruction is meaningful for every valid code without knowing the wrapper's own code. Once $D$ exists, its finite description has some code $d$. The mathematical argument then examines the particular input $d$ and obtains a contradiction. No step inside $D$ computes or retrieves $d$. Confusing external selection of one input with an internal self-printing operation adds an unnecessary assumption to an otherwise direct diagonal construction.

</details>

<a id="computable-functions-turing-machines-ex7"></a>
**Exercise 11.7.** Apply Rice's theorem to finiteness of a recognized language and explain why it does not prove that this index set is recognizable.

<details>
<summary>Hint 1</summary>

Exhibit one finite and one infinite recognizable language.

</details>
<details>
<summary>Hint 2</summary>

Undecidability alone does not decide recognition status.

</details>
<details>
<summary>Solution</summary>

The empty language is finite and recognizable, while $\Sigma^*$ is infinite and recognizable over a nonempty alphabet. Finiteness depends only on the accepted language, so it is a nontrivial extensional property and Rice makes its index set undecidable. Because the empty language has the property, the proof may use the complementary infiniteness property and reverse a hypothetical decider. Nothing in Rice's conclusion supplies a recognizer or rules one out. Those stronger classification questions require separate arguments, often with quantifier complexity or appropriate reductions. It would be invalid to replace “undecidable” with “not recognizable” without that extra work.

</details>

<a id="computable-functions-turing-machines-ex8"></a>
**Exercise 11.8.** Show the language of valid machine codes with at most five states is decidable and explain its compatibility with Rice.

<details>
<summary>Hint 1</summary>

All needed information is finite syntax.

</details>
<details>
<summary>Hint 2</summary>

Extra unreachable states can change the property without changing the language.

</details>
<details>
<summary>Solution</summary>

Parse the code, rejecting malformed strings, and count its explicitly listed distinct states. Accept exactly when the count is at most five. Parsing and counting finite data terminate, so this is a decider. The property is not determined by the language: add sufficiently many unreachable states to a small machine without altering any reachable computation or accepted input. The original and enlarged machines can recognize exactly the same language while receiving different answers. Therefore the property fails Rice's extensionality hypothesis, and its decidability contradicts neither Rice nor halting undecidability.

</details>

<a id="computable-functions-turing-machines-ex9"></a>
**Exercise 11.9.** Prove every $\Sigma^0_1$ relation is recognizable using its computable witness predicate.

<details>
<summary>Hint 1</summary>

Search successive natural-number witnesses.

</details>
<details>
<summary>Hint 2</summary>

Each individual predicate calculation must terminate.

</details>
<details>
<summary>Solution</summary>

If $x\in A$ exactly when $\exists t\,R(x,t)$ and $R$ is computable, test $t=0,1,2,\ldots$ in order, accepting at the first true result. Each test terminates, so any existing witness is eventually reached and causes acceptance. If no witness exists, the machine continues searching and never accepts. This is a recognizer, not necessarily a decider. If the matrix were only recognizable rather than computable, sequential witness testing could get stuck; dovetailing would then be necessary. The stated $\Sigma^0_1$ definition avoids that issue by requiring a computable matrix.

</details>

<a id="computable-functions-turing-machines-ex10"></a>
**Exercise 11.10.** Verify the $\Pi^0_2$-hardness construction for TOTAL in both directions, including a least missing witness index.

<details>
<summary>Hint 1</summary>

On input $k$, demand witnesses only for the finitely many indices at most $k$.

</details>
<details>
<summary>Hint 2</summary>

If some witness is missing, use the least such index to describe the divergent run.

</details>
<details>
<summary>Solution</summary>

For the relation $\forall n\exists t\,R(x,n,t)$, build a machine which on input $k$ searches sequentially for a witness to $R(x,0,t)$, then to $R(x,1,t)$, through index $k$, and finally halts. If all witnesses exist, finitely many terminating searches occur on each input, so the machine is total. If a witness is missing, choose the least index $n_0$ without one. On input $n_0$, earlier searches terminate and the search for that index runs forever. Thus the machine is not total. Writing this machine from $x$ is effective and does not require knowing which case holds.

</details>

## Summary

Finite transition rules support universal simulation and bounded decision. Recognition permits negative inputs to run forever; decision does not. Diagonal self-application proves HALT undecidable, and dovetailing shows its complement is not recognizable. Explicit code wrappers transfer these obstructions through reductions. Rice concerns nontrivial properties of accepted languages. Quantified finite computation gives HALT its $\Sigma^0_1$ completeness and TOTAL its $\Pi^0_2$ completeness, preparing the arithmetisation of proof in the next chapter.

## Sources and further reading

The preserved original chapter-12 supplies the machine definitions, diagonal argument and five exercise themes, expanded here without changing that source. A. M. Turing's [original 1936 paper](https://theory.stanford.edu/~trevisan/cs172-07/turing36.pdf) is the primary historical source; its machine presentation differs from our equivalent modern convention. Rice's theorem is H. G. Rice, “Classes of recursively enumerable sets and their decision problems”, *Transactions of the American Mathematical Society* 74 (1953), 358–366. The proofs and reductions used here are given explicitly rather than left as references to encoding machinery.
