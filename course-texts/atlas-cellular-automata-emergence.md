
# Local Rules, Global Worlds: Cellular Automata from First Principles

<!-- euler-course-route -->

## Current course route

Use the [course page](#/courses/atlas-cellular-automata-emergence) for its present preparation and available study steps. This Outline keeps its original explanations and exercises while a complete primary-book syllabus is being assigned.

A row of squares is coloured either **0** (off) or **1** (on). A clock ticks. At every tick, every square looks only at itself and its two immediate neighbours, then all squares update simultaneously. That tiny mechanism can erase every pattern, copy it unchanged, make nested triangles, move traffic, or sustain complicated interacting structures.

This course assumes only arithmetic, functions, and patience with binary notation. It develops cellular automata as mathematics and as programs: we will specify the state, decode a rule, prove properties, measure computational cost, and design experiments that can overturn a conjecture.

[Open the Cellular Automata Rule Forge](../apps/atlas/index.html#/labs?lab=visual-lab-cellular-automata) while you work. The numerical history beneath the diagram is an exact nonvisual representation of the same computation.

## 1. What exactly is the machine?

Choose a width $W$. At time $t$, the state is a binary vector

$x(t) = (x_{0}(t), x_{1}(t), \ldots , x_{W-1}(t))$, where every $x_{i}(t)$ is 0 or 1.

An **elementary cellular automaton** uses a function

$f\colon \{0,1\}^{3} \to \{0,1\}$

and updates every position by

$x_{i}(t+1) = f(x_{i-1}(t), x_{i}(t), x_{i+1}(t))$.

There are eight possible three-cell neighbourhoods: $000$, $001$, through $111$. For each, the function chooses one output bit. Therefore there are $2^{8} = 256$ elementary rules.

This definition hides two important hypotheses. Updates are **synchronous**: every new cell is computed from the old row, not from partly updated values. We must also define the edges. In a fixed-zero model, cells beyond the finite row are 0. In a wrapped model, index $-1$ means $W-1$ and index $W$ means $0$, turning the row into a ring. Two simulations with different edge models are different mathematical systems.

### A nonexample

Suppose a program scans left to right and writes each new value directly into the current array. The right-hand cells then see already-updated left neighbours. This is an asynchronous process, not the cellular automaton just defined. It may be interesting, but it does not implement our recurrence.

## 2. Eight output bits become one rule number

Treat neighbourhood $abc$ as the binary number

$q = 4a + 2b + c$.

The output for that neighbourhood is bit $q$ of a number $r$ between 0 and 255:

$f(a,b,c) = \lfloor r / 2^q\rfloor \pmod{2}$.

Rule 90 has binary form $01011010$ when written from bit 7 down to bit 0. Thus its outputs, conventionally ordered from $111$ down to $000$, are

| neighbourhood | 111 | 110 | 101 | 100 | 011 | 010 | 001 | 000 |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| next centre | 0 | 1 | 0 | 1 | 1 | 0 | 1 | 0 |

Inspecting the table reveals a simpler formula: the next cell is 1 exactly when the left and right neighbours differ. With exclusive-or $\oplus$,

$x_{i}(t+1) = x_{i-1}(t) \oplus x_{i+1}(t)$.

The centre bit is irrelevant. The decimal label is convenient storage; the table or formula is the actual rule.

## 3. An inspectable implementation

The following dependency-free JavaScript mirrors the definition. Arrays are not overwritten until a complete new row has been built.

```js
function output(rule, left, centre, right) {
  const neighbourhood = 4 * left + 2 * centre + right;
  return (rule >> neighbourhood) & 1;
}

function step(cells, rule, wrap = false) {
  const n = cells.length;
  const read = (i) => {
    if (wrap) return cells[(i + n) % n];
    return i < 0 || i >= n ? 0 : cells[i];
  };
  return cells.map((centre, i) =>
    output(rule, read(i - 1), centre, read(i + 1))
  );
}
```

### Correctness argument

Fix an index $i$. The helper `read` returns precisely the three old-state values specified by the chosen boundary model. `output` converts those values to $q$ and extracts rule bit $q$, exactly the mathematical definition of $f$. $map$ performs this once for every index while reading only the original `cells`. Hence every entry in the returned array equals the recurrence, and the entire returned row is the correct next state.

If there are $W$ cells, each step performs constant work per cell: time $Θ(W)$ and new memory $Θ(W)$. Retaining $T+1$ complete rows costs $Θ(WT)$ memory. If only the final state matters, alternate between two arrays and use $Θ(W)$ memory. Drawing cannot make this computation free; a pixel plot of every cell-time pair also has output size $Θ(WT)$.

## 4. Rule 90: prove the triangles

Start with one live cell on an otherwise zero, sufficiently wide row. Rule 90 forms a Sierpiński-like triangular pattern. The first temptation is to say, “The picture proves it is a fractal.” A picture proves very little, but algebra explains the pattern.

Work modulo 2, where addition is XOR. If $P_t(z) = \sum _{i} x_{i}(t)zⁱ$ formally records a row, the update becomes

$P_{t+1}(z) = (z + z^{-1})P_t(z)$ modulo 2.

From a single seed, $P_t(z) = (z+z^{-1})^t$. At times $t = 2^k$, all intermediate binomial coefficients are even, so modulo 2

$(z+z^{-1})^{2^k} = z^{2^k} + z^{-2^k}$.

Thus after $2^k$ steps, only two descendants survive at the extremes. Between those times, parity of binomial coefficients creates smaller copies of the whole triangle. This is a derivation, not merely pattern recognition.

An easier invariant is symmetry. If a row is symmetric about its centre, the left and right neighbourhoods at mirror positions are reversed. XOR is unchanged when its arguments are swapped, so the next row is symmetric. Induction proves every row from a centred single seed remains symmetric.

## 5. Rule 184: a conservation law

On a ring, Rule 184 can represent traffic: 1 is a car and 0 an empty road location. In one tick, a car moves one place right exactly when that place is empty. The local update can be written

$x_{i}(t+1) = x_{i}(t)x_{i+1}(t) + (1-x_{i}(t))x_{i-1}(t)$.

The first term keeps a car that is blocked by a car ahead. The second term receives a car from the left when the current site is empty. Sum over all $i$ on a ring. Relabeling indices in the second sum gives

$\sum _{i} x_{i}(t+1) = \sum _{i} [x_{i}x_{i+1} + (1-x_{i+1})x_{i}] = \sum _{i} x_{i}$.

So the number of cars is invariant. This proof uses wrapped boundaries; with fixed-zero edges, a car can leave the right side and the population can fall. Hypotheses are part of the theorem.

## 6. Emergence, prediction, and universality

“Emergence” means that useful large-scale descriptions—fronts, particles, domains, congestion—arise from repeated local interaction. It does not mean the global state is uncaused or supernatural. The next row is always exactly computable.

Exact computability does not promise a short formula for the far future. Rule 110 is capable of universal computation, but [Cook’s construction](https://arxiv.org/abs/0906.3248) uses an idealized infinite row indexed by all integers: a finite central encoding lies between repeating left and right backgrounds extending indefinitely. This imported theorem concerns that infinite model; encoded halting is undecidable in general. It is much stronger than “the plot looks complicated” and does not assert universality of a single fixed-width ring. Such a ring has only $2^W$ states, so reachability of a specified state can be decided by following its orbit until a state repeats. Allowing widths to grow can reproduce any prescribed finite space-time window when the initial rows agree throughout its light cone, but a varying-width family is different from one fixed ring. This explanations changes the model boundary, leaving the finite examples, code, and worked answers unchanged.

Do not infer universality from a handful of runs. Nor should “chaotic-looking” be used as a synonym for random. Every row is deterministic. A pseudorandom-looking central column may still contain biases or correlations and should not be treated as cryptographically random without a separate analysis.

## 7. Experiments designed to fail

Good experimental mathematics tries to break its own claims.

### Experiment A: symmetry audit

Conjecture: “Rule 90 always produces symmetric patterns.” Use a centred single seed: evidence agrees. Now use an asymmetric seed: the claim fails. Repair it to: “Rule 90 preserves reflection symmetry when the initial state and boundary conditions have that symmetry.” Prove the repaired statement by induction.

### Experiment B: disappearing traffic

Conjecture: “Rule 184 always preserves population.” On a ring, count live cells for 100 steps. Then switch to fixed boundaries and put a car near the right edge. The counterexample identifies the missing boundary hypothesis.

### Experiment C: finite observations underdetermine rules

Run an unknown rule from one seed and list the neighbourhoods that actually occur. Any unseen neighbourhood’s output could be flipped without changing the observed history. One experiment may therefore fit several rules perfectly. Design seeds that expose all eight neighbourhoods if you want to identify the rule.

### Experiment D: width and false periods

Every fixed-width binary automaton has only $2^W$ states. On a deterministic ring, some state must eventually repeat; after that, the evolution is periodic. This pigeonhole proof does **not** say the period is short. Increase $W$ and compare the first repeat time. A small simulation can create a misleading impression of universal short cycles.

## Common errors

- **Reading rule bits backwards.** State the convention: bit $q$ corresponds to binary neighbourhood $q$.
- **Updating in place.** Synchronous recurrence needs an untouched old row.
- **Leaving boundaries implicit.** Fixed, wrapped, reflected, and random edges define different systems.
- **Calling an image a proof.** A diagram suggests symmetry or conservation; induction or algebra establishes it.
- **Confusing finite with infinite lattices.** Edge effects eventually reach any fixed finite observation window.
- **Ignoring numerical representation.** Bit operations in JavaScript use 32-bit signed integers, but rules 0–255 are safely represented.

## Exercises with worked answers

### 1. Decode Rule 22

Write 22 in eight-bit binary and give outputs from $111$ through $000$.

**Answer.** $22 = 16+4+2$, so bits 4, 2, and 1 are 1. From bit 7 down to bit 0 the word is $00010110$. Therefore $100$, $010$, and $001$ produce 1; all other neighbourhoods produce 0.

### 2. Identity rule

Find the rule whose next cell always equals its current centre cell.

**Answer.** The output is 1 for neighbourhoods with centre 1: codes $010_{2}=2$, $011_{2}=3$, $110_{2}=6$, and $111_{2}=7$. The rule is $2^{2}+2^{3}+2^{6}+2^{7} = 4+8+64+128 = 204$. Rule 204 copies every state unchanged under any boundary model.

### 3. Light cone

Two initial rows agree from indices $a$ through $b$. Prove their states at time $t$ agree from $a+t$ through $b-t$, while that interval is nonempty.

**Answer.** At $t=0$ this is given. If rows agree on $[a+t,b-t]$, then each next cell from $a+t+1$ through $b-t-1$ reads three cells inside that agreement interval, so its neighbourhood and output agree. Induction completes the proof. Information travels at most one cell per tick.

### 4. Rule 90 collision

Why does a cell with two live outer neighbours become dead under Rule 90?

**Answer.** Rule 90 computes left XOR right. $1\oplus 1=0$; the two influences cancel modulo 2. The centre value is irrelevant.

### 5. Complexity change

A naive program keeps 10,001 rows of width 5,001 as ordinary one-byte values. Give the order of memory use and a rough lower bound in bytes.

**Answer.** It stores $(10,001)(5,001) \approx 50,015,001$ cells, so memory is $Θ(WT)$ and at least about 50 MB if each cell occupied one byte. Ordinary JavaScript numbers and arrays use substantially more. Bit-packing or storing only two rows changes the constant or the asymptotic retained-history cost.

### 6. A falsifiable conjecture

Form a conjecture about Rule 30 and describe evidence that could refute it.

**Answer.** Example: “From a single centred seed with fixed-zero boundaries, the left and right halves are always mirror images.” One computed asymmetric row refutes it; in fact Rule 30’s rule table is not reflection invariant. A useful conjecture names the rule, seed class, boundary model, and measurable property.

## Final task: classify a rule by proof and attempted refutation

Choose a rule other than 90, 110, 184, or 204. Use both fixed-zero and wrapped
boundaries and at least four seed families. Submit:

1. the eight-entry rule table and a tested implementation;
2. a reflection, complement, or conservation conjecture derived from the table;
3. a proof of the conjecture or the smallest counterexample you found;
4. a light-cone argument separating genuine local behavior from edge effects;
5. time and memory costs for the experiment;
6. a state-cycle audit for at least two widths;
7. a frequency table or numeric history that is equivalent to every image;
8. a final claim that specifies rule, seeds, width regime, and boundary model.

**Rubric.** Specification and code tests count for 20%; proof or minimal
counterexample for 25%; experimental design for 20%; finite-size and boundary
analysis for 20%; accessibility and reproducibility for 15%. Visual complexity
by itself is not evidence of randomness, chaos, or universality.

## Where next?

- [Fractals by Iteration](../articles/fractals-by-iteration.md) studies self-similarity, escape algorithms, and numerical boundaries.
- [Winning with Invariants](#/books/winning-with-invariants) uses finite state graphs and induction to solve games.
- Algorithms and complexity provide the language for correctness and cost.
- Dynamical systems asks which long-term behaviours survive perturbation and change of coordinates.
- Automata and formal languages connect local symbolic updates with computation and recognition.

The important habit travels further than cellular automata: specify a state, state an update, expose every boundary convention, compute examples, then ask what can actually be proved.
