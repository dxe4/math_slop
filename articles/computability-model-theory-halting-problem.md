
# The halting problem

Some programs obviously stop; others obviously repeat forever. The halting problem asks for much more than settling those examples: can one algorithm always decide whether an arbitrary program halts on an arbitrary input? The answer is no in the Turing-machine model, and a short diagonal argument explains why.

This **Year 1 (L2)** article assumes [Turing machines and the Church–Turing thesis](#/articles/computability-model-theory-turing-machines-thesis) and proof by contradiction. [Introduction to Proof](#/books/introduction-to-proof) supplies the latter preparation. We use an effective encoding of finite programs, so a program description is a finite input string and universal simulation is available. The [Diagonalization, Undecidability, and Reducibility chapter](#/books/automata-computability-complexity/undecidability-and-reducibility) gives the fuller theory.

## State the proposed checker exactly

Suppose a program $H$ accepts a program description $e$ and an input string $w$. The proposed specification is:

- $H(e,w)$ always halts;
- it returns one exactly when program $e$ halts on input $w$;
- it returns zero exactly when program $e$ runs forever on input $w$.

The first line matters. A simulator that waits for the program to finish does not meet the specification when the simulated computation continues forever. Returning a correct answer on every terminating test case is different from being a total checker.

Validity of a finite program description can be checked syntactically. We can reject invalid descriptions by a fixed convention. The contradiction below uses only valid descriptions, so the convention for invalid strings cannot rescue the proposed checker.

## Reverse the answer on the diagonal

Assume such an $H$ exists. Construct a new program $D$ which takes a description $e$ and behaves as follows: if $e$ is invalid, halt; otherwise run $H(e,e)$. If the answer is one, enter an endless loop. If the answer is zero, halt.

This is a legitimate finite program under the assumption that $H$ is an algorithm. It uses a syntax check, a call to $H$, a conditional and either a finite halt or a fixed loop. Let $d$ be a valid description of $D$ itself, and ask what happens on input $d$.

If $H(d,d)=1$, the checker predicts that $D$ halts on $d$. But the definition of $D$ makes it loop in precisely that case. If $H(d,d)=0$, the checker predicts an endless run, but $D$ halts. Both possible answers contradict the checker's required correctness.

Since $H$ was required to halt and give one of those two answers, there is no third case. The assumed total correct checker cannot exist. This proves undecidability of the halting problem.

No machine has to discover its own source code during a run. The proof gives $D$ its own finite description as an external input. The expression $H(e,e)$ simply uses the same data string in two argument positions, which ordinary effective encodings permit.

## Simulation gives a partial kind of answer

There is still an algorithm that recognises halting pairs: simulate program $e$ on input $w$, and accept when the simulation halts. If the pair belongs to the halting set, this eventually gives a positive answer. If it does not, the simulation runs forever rather than returning a negative verdict.

A set with such a procedure is called **recognisable**. A **decidable** set has a procedure that halts on every input and correctly answers both membership and nonmembership. The halting set is recognisable but not decidable.

This distinction is about a guaranteed outcome, not merely patience. Running the simulator for longer can confirm more halting instances, but no single fixed waiting period identifies every nonhalting instance. The impossibility theorem also allows many restricted classes and individual inputs to be decided by direct mathematical arguments.

## Worked example: reduce halting to a printing question

Suppose a total algorithm $P$ decided whether a supplied program ever prints the symbol zero on a supplied input. We could use it to decide halting.

Given a program $e$ and input $w$, build a wrapper $Q$ that simulates $e$ on $w$ internally, without forwarding any of its printed output. If that simulation halts, the wrapper prints one zero and then halts. If the simulation continues forever, the wrapper never reaches its own printing instruction.

The wrapper has a finite description effectively obtainable from $e$ and $w$, using universal simulation. It prints zero exactly when $e$ halts on $w$. Applying $P$ to this wrapper on the empty input would therefore decide the original halting pair, contradicting the theorem.

The output-suppression condition is essential: otherwise a simulated program could print zero and continue forever, destroying the claimed equivalence. A reduction must preserve the exact yes-or-no question, not merely a suggestive resemblance between computations.

Thus “ever prints zero” is undecidable too. We did not repeat the diagonal construction for this new problem; we showed that a hypothetical solution would supply the already-impossible halting checker.

## What a negative result establishes

The proof concerns a total correct algorithm for all encoded program/input pairs in the specified model. It is compatible with proving that a countdown loop terminates on nonnegative integer inputs, or that an unconditional endless loop does not terminate. It is also compatible with practical analysis methods that succeed on some programs and report an unresolved case on others.

What cannot be achieved is the universal specification written at the start. A method allowed to remain silent or say “unknown” has a weaker contract. Distinguishing that contract keeps an impossibility theorem from being confused with a claim that no useful program reasoning exists.

## Exercises

### Exercise 1
<a id="deep-dive-computability-model-theory-halting-problem-ex-1"></a>
A proposed checker simulates its input program for a fixed positive number $N$ of steps. It answers “halts” if termination occurs within that period and “runs forever” otherwise. Give a counterexample for every chosen $N$.

<details data-euler-reveal="hint"><summary>Hint 1</summary>
An unobserved halt after the waiting period would invalidate the negative answer.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
A finite program can perform a prescribed finite sequence of more than $N$ steps before halting.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
For the chosen $N$, take a valid program that performs at least $N+1$ transitions and then halts, for example a finite chain of that many control transitions ending at a halting state. The checker sees no halt within its first $N$ steps and gives the false answer “runs forever”. Such a program exists for every fixed $N$, so this bounded-wait strategy cannot satisfy the universal specification.
</details>

### Exercise 2
<a id="deep-dive-computability-model-theory-halting-problem-ex-2"></a>
Suppose both the halting set and its complement had recognisers. Explain how to turn them into a total halting decider, and deduce that the complement cannot be recognisable.

<details data-euler-reveal="hint"><summary>Hint 1</summary>
One recogniser may run forever; do not run it to completion before starting the other.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Alternate one simulation step from each recogniser, keeping both configurations.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
On a given pair, simulate the two recognisers in alternating steps. Exactly one of the pair's two membership claims is true. Its recogniser must eventually accept, at which point return the corresponding yes-or-no halting answer. A recogniser never accepts a false membership claim, so the returned answer is correct; one of them eventually accepts, so the procedure always halts. This would contradict undecidability. Since the halting set already has a recogniser, its complement cannot have one.
</details>

## Continue into the book

The diagonal program defeats a universal total halting checker. Simulation still recognises positive instances, while effective reductions transfer the obstruction to other precise questions. Continue to [Effective Functions, Encodings, and Universal Machines](#/books/automata-computability-complexity/effective-functions-and-universal-machines) and [Diagonalization, Undecidability, and Reducibility](#/books/automata-computability-complexity/undecidability-and-reducibility). [The program no checker can always judge](../apps/unhurried/articles/halting-limit/index.html) is a short companion to the same diagonal idea.
