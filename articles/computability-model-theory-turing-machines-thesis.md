
# Turing machines and the Church–Turing thesis

A finite instruction table can describe a computation on inputs of arbitrarily large finite length. The table does not need a different state for every input size. It reuses a small amount of control while storing information on an extendable tape. Turing's model makes this distinction precise enough to support proofs about what algorithms can do.

This **Year 1 (L2)** article assumes finite strings, functions and elementary proof reasoning. [Introduction to Proof](#/books/introduction-to-proof) and the [sets refresher](../apps/unhurried/refresh/sets/index.html) supply preparation. We define one deterministic tape model and prove the behaviour of a tiny example. The [Turing Machines and Their Variants chapter](#/books/automata-computability-complexity/turing-machines-and-variants) gives the longer formal development.

## Specify the control and the stored information

A Turing machine has a finite set of control states and a finite tape alphabet containing a blank symbol. Its tape has cells indexed by the integers. A head reads one cell at a time. In a nonhalting state, the instruction table uses the current state and scanned symbol to determine a new state, a symbol to write and a move one cell left or right.

An input is a finite string over a specified input alphabet that excludes the blank, written from cell zero onwards, with blanks elsewhere and the head initially at zero. The alphabet and table are fixed; they do not grow with the input. The tape has no fixed length limit, but at every finite time only finitely many cells have been visited or changed. This is potentially unbounded storage, not an operation that processes infinitely many cells at once.

A **configuration** records the control state, head position and tape contents. It is much richer than the control state alone. Even a machine with two states can have arbitrarily many different configurations because the head position and stored string can vary.

Reaching a distinguished halting state ends a computation. For decision problems we can use separate accepting and rejecting halting states. A decider must halt on every permitted input and give the correct yes-or-no answer. A machine which sometimes runs forever does not meet that totality requirement.

## Worked example: add one to a unary number

Represent a nonnegative integer $n$ by a string of $n$ ones. The empty string represents zero. Consider a machine with a scanning state, a halting state and the following two instructions:

| State | Read | Write | Move | Next state |
| --- | --- | --- | --- | --- |
| scan | 1 | 1 | right | scan |
| scan | blank | 1 | right | halt |

Its output is read as the block of ones beginning at cell zero after it halts. On input three ones, it passes each of those ones unchanged, reaches the next blank and writes a fourth one.

To prove this for every unary input, use an invariant. After $k$ scanning transitions, for $0\le k\le n$, the head is at cell $k$ and the original block of $n$ ones is unchanged. Initially $k=0$, so the assertion holds. If $k<n$, the scanned symbol is one; the first transition leaves it unchanged and moves to $k+1$, preserving the assertion.

After $n$ such transitions the head sees a blank at cell $n$. The second transition writes one and halts. The output now consists of $n+1$ ones. The machine therefore computes the successor function on the stated unary domain, using exactly $n+1$ transitions. The same argument includes the empty input: it immediately sees a blank and writes the first one.

This is a correctness proof for a specified model and encoding. It does not depend on running a few sample inputs, and it does not assume that a finite state table imposes a common bound on computation time.

## Encoding lets machines become inputs

A finite alphabet and finite transition table can be represented by a finite string using a fixed effective coding scheme. Another machine can read such a description and simulate the described transitions, while also storing the simulated tape and head position. A **universal machine** carries out this simulation from a pair consisting of a program description and an input description.

Universality is a theorem about a formal simulation construction. The [Effective Functions, Encodings, and Universal Machines chapter](#/books/automata-computability-complexity/effective-functions-and-universal-machines) supplies that construction and the necessary encoding conventions. Its importance is that programs can be treated as finite data. The halting argument in the next article uses this fact without requiring an actual machine to inspect an infinite table.

Different reasonable tape conventions can be proved equivalent by explicit simulations. A model with a stay-put instruction or several tapes can be translated into a suitable single-tape model. The simulations may change time costs, so equivalence of computability does not by itself identify an efficient complexity bound.

## What the Church–Turing thesis says

The **Church–Turing thesis** identifies the informal notion of an effectively calculable procedure with the formally defined class of Turing-computable functions. The informal side means a systematic mechanical method with finite instructions, rather than an oracle that already answers the desired question.

This is not a theorem of the same form as the unary machine's correctness statement. “Any effective procedure” is not originally another precise mathematical machine definition to which a simulation proof can be applied. Equivalence theorems between specified formal models are mathematical evidence for the thesis, but should not be confused with a proof about an undefined class of all imaginable methods.

The thesis concerns which functions are computable, not how fast a computation will finish. A computable task may require impractically many steps under a particular algorithm. Conversely, a proven impossibility of computation concerns the absence of any total correct procedure in the specified formal model, not just the failure of a fast one.

## Exercises

### Exercise 1
<a id="deep-dive-computability-model-theory-turing-machines-thesis-ex-1"></a>
For the unary successor machine, state the output and transition count on inputs representing zero and four. Explain why the invariant proves termination on every permitted input, not just these two.

<details data-euler-reveal="hint"><summary>Hint 1</summary>
The machine makes one transition for each original one and another when it reaches the first blank.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
The input-length variable in the proof is an arbitrary finite nonnegative integer.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
The empty input produces one one in one transition. Four ones produce five ones in five transitions. For arbitrary finite $n$, the invariant proves that the machine reaches the blank at position $n$ after exactly $n$ scanning transitions, then halts on the next transition. Thus termination follows for all unary inputs from their finite lengths, rather than from the two particular observations.
</details>

### Exercise 2
<a id="deep-dive-computability-model-theory-turing-machines-thesis-ex-2"></a>
A learner argues that a machine with finitely many states must have a fixed running-time bound independent of input length. Use the successor machine to refute the argument and identify what the learner omitted from a configuration.

<details data-euler-reveal="hint"><summary>Hint 1</summary>
The transition table remains fixed while the unary input length varies.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
A control state is only one part of the complete instantaneous description.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
This fixed machine has running time $n+1$ on input length $n$, which has no common finite upper bound over all $n$. Finite control does not mean finitely many configurations: head position and tape contents are also recorded and can vary without a fixed size bound. Every individual unary input is finite and its computation halts, but there is no need for an infinite input or infinitely many control states to obtain unbounded running times across inputs.
</details>

## Continue into the book

Finite control and potentially unbounded storage make a precise computation model. Proofs establish the behaviour of specified machines; the Church–Turing thesis relates that formal model to an informal notion of procedure. Continue with [Turing Machines and Their Variants](#/books/automata-computability-complexity/turing-machines-and-variants) and [The halting problem](#/articles/computability-model-theory-halting-problem). [Tiny Machines, Infinite Questions](#/articles/machines-rules-verification-first) is an optional earlier viewpoint on state descriptions.
