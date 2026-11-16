
# Tiny Machines, Infinite Questions

A ticket gate, a game character, a traffic light, and a text-search tool can all be described as **states** connected by allowed **moves**. Once the state and move rules are explicit, surprisingly large questions become mathematical:

- Can the machine ever enter an error state?
- Do two different diagrams react the same way to every possible input?
- Can a short local rule create a complicated global pattern?
- What memory is needed to recognize a pattern?

No programming experience is required. We will use tables, arrows, and careful “what must always be true?” reasoning.

## 1. A vending machine as a state table

Suppose a machine sells a 2-credit snack and accepts one-credit coins. It has states:

- $0$: no credit;
- $1$: one credit;
- `vend`: enough credit, dispense once.

On a coin, $0\to 1$ and $1\to vend$. After vending, a reset returns to $0$. The state is not the whole history; it is the information from history needed to decide what happens next.

If the machine must return change for a five-credit coin, these states are insufficient. A state model is judged relative to the questions and inputs it must handle.

## 2. Words drive machines

Let inputs be symbols $0$ and $1$. A machine for “an even number of ones” needs two states:

| Current | read 0 | read 1 |
| --- | --- | --- |
| even | even | odd |
| odd | odd | even |

Start at `even`. Each one toggles; each zero leaves parity unchanged. Mark `even` accepting. Word $1011$ visits

$$even \to odd \to odd \to even \to odd$$

so it is rejected.

Why trust the table for words longer than any we tried? After every prefix, the state name correctly records the parity of ones in that prefix. This is an **invariant**. It starts true and each row preserves it.

## 3. Same behavior, different drawings

One person names states $even,odd$; another uses $A,B$. Their machines may recognize exactly the same words. A third drawing may include an extra state that can never be reached. State names and counts alone do not decide behavior.

To compare two machines, imagine running them side by side on the same symbols. The combined state is a pair. If one side is accepting and the other rejecting, the symbols read so far form a counterexample to equivalence.

There are only finitely many pairs. Search them all. Either find a disagreement word or exhaust every reachable pair and prove none exists. This is stronger than trying thousands of examples because it covers every future input through a finite argument.

## 4. The empty word is a real input

The empty word $\epsilon$ contains no symbols. A machine processes it by remaining at its initial state. If the initial state is accepting, the machine accepts $\epsilon$.

Empty inputs uncover assumptions. A parser may accept an empty list but reject an empty expression. A universal statement about every item in an empty collection can be true even though no item exists. Explicit boundaries keep “nothing happened” from becoming “we forgot to test.”

## 5. Finite memory has limits

Could a finite machine recognize exactly the words with $n$ zeros followed by $n$ ones, for any $n$? To succeed it must remember an arbitrarily large zero count. A fixed finite state set eventually treats two different counts as the same state. Appending the number of ones that completes one count then forces a mistake on the other.

A stack supplies growing last-in-first-out memory: push for each zero, then pop for each one. Different memory models recognize different language families.

## 6. Local rules and cellular worlds

A cellular automaton places small-state cells in a row or grid. Every cell updates from a local neighborhood using the same rule. The [Cellular Automata Rule Forge](../apps/atlas/index.html#/labs?lab=visual-lab-cellular-automata) shows how an eight-case binary rule creates a full space-time pattern.

A complicated picture does not by itself prove randomness or universal computation. We can still prove facts from the transition table: a uniform all-zero row remains zero under some rules; a parity or particle count may be conserved under others; finite width forces eventual repetition because only finitely many rows exist.

## 7. Safety is a reachability question

Imagine two processes sharing one token. Only the token owner may enter a critical section. The forbidden state is “both critical.” Starting from a declared initial state, follow every allowed transition.

If the forbidden state is reached, the path is a counterexample trace. If every reachable state is exhausted without it, the finite model is safe.

The phrase “in this model” matters. A model might make an action atomic even though real code splits it into read and write steps. Missing interleavings can hide a race.

## 8. Verification is not testing with a fancy name

Testing runs selected examples. Verification establishes a formal claim from rules and assumptions. Finite exhaustive search is one verification method. Inductive invariants, types, and program logics are others.

Testing remains useful. It can find mistakes in a model checker or mismatch between model and implementation. Verification and testing answer different questions and strengthen one another.

## Worked puzzle: endings versus sightings

**Worked example.**

Machine A accepts words ending $01$. Machine B accepts words containing $01$ anywhere.

- $01$: both accept.
- $101$: both accept; it ends $01$.
- $010$: B accepts because the first two symbols are $01$; A rejects because it ends $10$.

Thus $010$ distinguishes them. No word of length below three distinguishes them: $\epsilon,0,1,00,10,11$ are rejected by both, and $01$ accepted by both.

### Why the search is complete

For deterministic finite machines \(A\) and \(B\), search pairs of states
\((q_A,q_B)\), starting from the initial pair. Reading a symbol moves both
coordinates. If exactly one coordinate is accepting, the labels along the
search path give a distinguishing word.

If every reachable pair is exhausted without such a mismatch, any future input
must revisit a pair already checked. From that pair, its remaining suffix
follows transitions that the same search also covers. Therefore no word can
distinguish the machines. With \(m\) and \(n\) states there are at most \(mn\)
pairs, so the argument is finite even though there are infinitely many words.
This is a proof because the product-state invariant covers every prefix, not
because the test list happened to be large.

## Tempting mistakes

- “Nondeterministic” does not mean random; it means several allowed next moves.
- A state named `error` is not a failure if no allowed execution can reach it.
- Ten thousand agreeing examples do not prove two machines agree on all words.
- A verified simplified model is not automatically a verified deployed system.
- A finite machine cannot gain unbounded memory just because its arrows are drawn cleverly.

## Try and explain


<a id="deep-dive-machines-rules-verification-first-ex-1"></a>

### Exercise 1

1. Design a two-state machine for binary words ending in one. Explain each state’s meaning.

<details>
<summary>Hint 1</summary>

The machine needs to remember whether the latest symbol was one, including the empty-word case.
</details>

<details>
<summary>Hint 2</summary>

Make zero lead to the rejecting state and one lead to the accepting state from either state.
</details>

<details>
<summary>Solution</summary>

Use states $q_0$ (rejecting) and $q_1$ (accepting), initially $q_0$. From either state, input 0 goes to $q_0$ and input 1 goes to $q_1$. After every prefix, the state records whether its last symbol is 1; the empty prefix is in $q_0$. Induction on input length proves the invariant, so the machine accepts exactly the words ending in one.

</details>

<a id="deep-dive-machines-rules-verification-first-ex-2"></a>

### Exercise 2

2. Add an unreachable third state. Does the language change? Why?

<details>
<summary>Hint 1</summary>

A state that can never be entered cannot affect acceptance from the declared initial state.
</details>

<details>
<summary>Hint 2</summary>

Prove inductively that all transitions from reachable states stay in the original two-state set.
</details>

<details>
<summary>Solution</summary>

The language does not change. Initially the machine is in $q_0$. Both transitions from $q_0$ and $q_1$ stay in that pair. Therefore every input prefix ends in $q_0$ or $q_1$, by induction; the third state is unreachable and its accepting status and outgoing arrows cannot affect any input's result.

</details>

### Further exercises

3. Give a shortest word accepted by “contains 00” but rejected by “ends 00.” Answer: $001$; it contains $00$ but ends $01$.
4. A model has an error state with only a self-loop and no incoming path from the initial state. Is the safety property violated? No; error is unreachable.
5. What evidence would connect a verified token model to code? A mapping from variables and atomic transitions to code behavior, plus assumptions about scheduling, runtime, and environment.

Open the [Automata and Verification Proof Studio](../apps/atlas/index.html#/labs?lab=visual-lab-automata-verification) to generate exact traces and shortest counterexamples, then continue into the first-course manuscript’s automata and model-checking chapters.
