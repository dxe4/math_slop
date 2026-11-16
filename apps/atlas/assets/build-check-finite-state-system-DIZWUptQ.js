var e=`---
id: recipe-build-check-finite-state-system
title: "Recipe: Build and Audit a Finite-State System"
license: CC BY-SA 4.0
---

# Recipe: Build and Audit a Finite-State System

**Before reading.** Read [Statements and Truth Tables](/resources/library:book-introduction-to-proof:statements-truth-tables/), [Graphs, Trees, and Connectivity](/resources/library:book-discrete-mathematics-proof-counting-structure:graphs-trees-connectivity/).

Use this workflow for a small parser controller, protocol, workflow, game rule, device mode, or abstracted program. The goal is an inspectable model, an exact reachability or equivalence result, and a report that does not overclaim deployment correctness.

## Deliverables

Produce:

1. a state-variable and input contract;
2. a complete transition table or successor function;
3. declared initial and bad/accepting states;
4. validation of totality or intentional nondeterminism;
5. exact reachable-state and counterexample output;
6. at least one invariant or equivalence argument;
7. adversarial boundary tests;
8. a model-to-system limitation statement.

## Step 1: write the question before the graph

Choose one claim:

- **recognition:** which finite input words should be accepted?
- **safety:** can a forbidden state be reached?
- **equivalence:** do two deterministic recognizers accept the same words?
- **response:** after request, must response eventually occur? This requires temporal and fairness choices beyond plain reachability.

Do not begin with “model the whole program.” State one observable property and the environment actions relevant to it.

## Step 2: choose state variables

State must remember exactly the past information needed for future transitions and the property. For a retry protocol:

$mode \\in \\{idle, waiting, success, failed\\}$,

$attempts \\in \\{0,1,2,3\\}$.

The Cartesian product has at most 16 combinations, but an invariant may exclude many. Record whether counters saturate, wrap, or reject overflow.

**Stop condition:** if a variable has an unbounded integer, queue, stack, or heap, the model is not finite until you prove a bound or choose an abstraction. Do not silently truncate.

## Step 3: declare initial states

Include every state the system contract permits at start. Checking only a convenient default can miss failures from recovery or partially initialized modes.

If initialization is probabilistic, finite safety usually treats every positive-probability initial outcome as possible unless the property itself is probabilistic.

## Step 4: enumerate transitions with guards

Each transition should name:

- source condition;
- event or action;
- guard;
- update;
- target state.

For recognizers, require one target for every $(state,symbol)$ pair if the machine is deterministic and total. A missing row is not automatically rejection unless you explicitly add a rejecting sink or partial-transition convention.

For concurrent systems, choose atomic steps small enough to expose relevant interleavings. A read-modify-write often needs separate read and write states.

## Step 5: validate structure

Before proving a property, check:

- state names are unique;
- every initial, accepting, and bad state is declared;
- every edge endpoint is declared;
- deterministic rows have exactly one target per symbol;
- labels and guards use declared variables;
- state encodings round-trip;
- duplicate edges have intended meaning.

Reject malformed models loudly. Treating a missing transition as false can turn a tool bug into a fake proof.

## Step 6: search reachable states

Breadth-first search from all initial states:

\`\`\`text
queue := all initial states
visited := set(initial states)
parent[initial] := none
while queue not empty:
    s := remove front
    if bad(s): return path reconstructed from parent
    for each successor t of s:
        if t not in visited:
            visited.add(t)
            parent[t] := s
            append t
return SAFE IN THIS FINITE MODEL
\`\`\`

Invariant: every visited state is reachable and every recorded parent is a valid edge. When a state is processed, all successors become visited. On finite exhaustion, induction on path length shows no reachable state was omitted.

Track counts of reachable states and inspected transitions. A safe result with zero inspected transitions may be correct for a terminal model or may expose missing edges.

## Step 7: reconstruct and minimize counterexamples

Parent pointers from BFS yield a shortest counterexample by transition count. Report state values and action labels at every step. Validate each consecutive pair against the transition relation.

A shortest trace is not always the clearest explanation. After preserving executability, collapse unchanged variables or annotate the first property-breaking transition.

## Step 8: compare deterministic automata

For DFAs $A,B$ over the same alphabet, search product pairs from $(q0_A,q0_B)$. A bad pair has opposite acceptance values. Its path symbols form a distinguishing word. Exhaustion proves equivalence.

Do not compare only state names or state counts. Remove neither unreachable states nor equivalent states unless the transformation has its own correctness argument.

## Step 9: propose and check an invariant

Even when enumeration succeeds, write a human-readable invariant. For token mutual exclusion:

> If A is critical, A owns the token; if B is critical, B owns the token; exactly one owner exists.

Check initialization, preservation under every transition, and implication of “not both critical.” The invariant explains *why* the model is safe and may scale when state enumeration does not.

If the safety property is true but not inductive, strengthen it with ownership, phase, parity, or history facts. Do not weaken the desired property merely to make preservation easy.

## Step 10: test the checker

Create small oracles:

- unsafe in zero steps because an initial state is bad;
- one-edge counterexample;
- bad state present but unreachable;
- self-loop and cycle;
- several initial states;
- malformed edge endpoint;
- equivalent automata with renamed states;
- automata disagreeing on $\\varepsilon$;
- a known shortest nonempty distinguishing word.

Tests should check the exact trace and every trace edge, not only a Boolean.

## Dependency-free JavaScript reference

\`\`\`javascript
function safety(initial, edges, bad) {
  const next = new Map();
  for (const [from, to] of edges) {
    if (!next.has(from)) next.set(from, []);
    next.get(from).push(to);
  }
  const queue = [...initial];
  const parent = new Map(initial.map((state) => [state, null]));
  for (let cursor = 0; cursor < queue.length; cursor += 1) {
    const state = queue[cursor];
    if (bad.has(state)) {
      const trace = [];
      for (let at = state; at !== null; at = parent.get(at)) trace.push(at);
      return { safe: false, trace: trace.reverse() };
    }
    for (const target of next.get(state) || []) {
      if (!parent.has(target)) {
        parent.set(target, state);
        queue.push(target);
      }
    }
  }
  return { safe: true, reachable: queue };
}
\`\`\`

This snippet assumes the model was separately validated. Production educational code should reject undeclared states and duplicate identifiers before search.

## Worked execution: a locking defect

### Worked example: reconstruct the shortest unsafe trace

Model a door controller with four states:

- $CL$: closed and locked, the only initial state;
- $CU$: closed and unlocked;
- $OU$: open and unlocked;
- $OL$: open and locked, declared bad.

The intended transitions are $CL \\xrightarrow{unlock} CU$,
$CU \\xrightarrow{lock} CL$, $CU \\xrightarrow{open} OU$, and
$OU \\xrightarrow{close} CU$. Suppose the implementation also permits
$OU \\xrightarrow{timeout} OL$. Breadth-first search processes $CL$, then
$CU$, then $OU$, and finally reaches $OL$. Parent pointers produce the
shortest counterexample

$$
CL \\xrightarrow{unlock} CU \\xrightarrow{open} OU
\\xrightarrow{timeout} OL.
$$

Every edge can be checked directly against the transition table. The trace
does more than say “unsafe”: it identifies the timeout transition as the first
step that violates the candidate invariant “locked implies closed.” Removing
that transition makes the three remaining states exhaustive, and the invariant
is then preserved by every edge. That establishes safety for this finite
transition model. It does not establish that deployed event handling matches
the atomic transitions.

## Transfer practice

### Exercise 1
<a id="build-check-finite-state-system-ex-1"></a>

Add an alarm bit that becomes true whenever an open door remains open for
two timer ticks. Choose enough state to distinguish the first and second
tick, then give a shortest trace to the alarm state. Use the intended controller
without its defective timeout edge, start at $CL$, and count each action or
tick as one transition.

<details><summary>Hint 1</summary>

A single open/closed bit cannot remember whether one tick has elapsed.

</details>
<details><summary>Hint 2</summary>

Extend the open state by an age counter capped at two; reset its age on closing.

</details>
<details><summary>Solution</summary>

Use door state $CL,CU,OU$, open-age $a\\in\\{0,1,2\\}$ and alarm bit $b$.
Closed states have $a=0$. Opening from $CU$ gives $(OU,0,b)$; closing resets
age to zero. A tick while open changes $a$ to $\\min(a+1,2)$ and latches the
alarm when that result is 2. A tick while closed leaves age zero. With no
explicit reset action the alarm stays true thereafter.

A shortest alarm trace is unlock, open, tick, tick, taking four transitions.
Both opening preparation actions are necessary from $CL$, and two distinct
open ticks are necessary to reach age two. Thus no trace of length below four
can trigger the alarm under this model. A timer rule that counts the opening
transition as a tick would be a different convention.

</details>

### Exercise 2
<a id="build-check-finite-state-system-ex-2"></a>

Change the requirement to liveness: every unlock request is eventually followed
by an unlocked state. Explain why ordinary reachability search cannot prove
this without a declared request model, fairness convention and analysis of cycles.

<details><summary>Hint 1</summary>

Reaching an unlocked state once is existential; the requirement concerns every request.

</details>
<details><summary>Hint 2</summary>

An infinite waiting cycle can avoid fulfilment even if a fulfilment path exists.

</details>
<details><summary>Solution</summary>

First specify whether a request is a separate event or the immediate unlock
transition itself. For queued requests, add a pending flag, set on request
and cleared on fulfilment. Reachability of $CU$ only shows that some finite
execution can unlock. It does not exclude a reachable cycle that keeps a
request pending forever. In a finite system an infinite avoiding execution
eventually revisits states, so cycle or strongly connected component analysis
is relevant. Declared fairness may exclude some waiting executions, but that
restriction must be explicit. If the request action itself immediately unlocks,
the response is built into that different model and needs no waiting argument.

</details>

### Exercise 3
<a id="build-check-finite-state-system-ex-3"></a>

Build DFAs over $\\{0,1\\}$ for even parity of the number of ones and for a
final zero. Find a shortest distinguishing word, including the empty word.

<details><summary>Hint 1</summary>

Specify each automaton's initial acceptance before taking a transition.

</details>
<details><summary>Hint 2</summary>

The empty word has zero ones but no final symbol.

</details>
<details><summary>Solution</summary>

The parity DFA has states even and odd, starts even, toggles on 1 and stays
on 0; only even accepts. The final-zero DFA has states Z and N, starts N,
moves to Z on 0 and N on 1; only Z accepts. Their initial product state is
$(\\mathrm{even},N)$, with different acceptance values. Hence the empty word
already distinguishes them and is shortest. If a nonempty witness were required,
neither one-letter word distinguishes them; words 10 and 11 do, with length two.

</details>

A complete response states the model convention, validates every endpoint,
shows the queue or product states visited, verifies the reported trace, and
limits the conclusion to the declared finite system.

## Step 11: state the model boundary

Finish every report with a table:

| Modeled | Assumed | Not established |
| --- | --- | --- |
| named state variables and transitions | transition implementation matches the table | absence of unmodeled memory errors |
| finite initial states | declared atomicity matches scheduling | liveness unless separately checked |
| reachability safety | environment uses listed actions | hardware, timing, or side-channel safety |

An exhaustive proof justifies “safe in this finite model.” A refinement or conformance argument is needed to transfer it to code.

## Final audit

- Can another reader reconstruct the state space without the picture?
- Are all universal and existential path quantifiers explicit?
- Does every safe result follow from exhaustive search or an inductive invariant?
- Does every unsafe result include a valid trace?
- Are bounded search and full finite search distinguished?
- Are fairness and deadlock conventions stated?
- Is the model-to-deployment gap visible in the headline conclusion?

Use the [Automata and Verification Proof Studio](#/item/visual-lab-automata-verification) as an exact reference implementation and trace viewer.
`;export{e as default};