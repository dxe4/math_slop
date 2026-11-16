var e=`---
id: visual-lab-cellular-automata
title: "Cellular Automata Rule Forge"
level: secondary
estimated_minutes: 55
license: CC BY-SA 4.0
---

# Cellular Automata Rule Forge

One byte can describe a miniature universe. The Rule Forge turns an integer from 0 to 255 into eight local decisions, applies those decisions synchronously to a row of binary cells, and records the resulting history. It is an exact discrete experiment: every rendered square has a corresponding 0 or 1 in the numerical table.

[Launch the live Rule Forge](#/labs?lab=visual-lab-cellular-automata).

## Before touching the controls

The state at generation $t$ is a finite row of bits $x_{i}(t)$. Each new bit depends on the old left, centre, and right bits. Convert that three-bit neighbourhood to

$q = 4 left + 2 centre + right$.

If bit $q$ of the chosen rule number is 1, the new cell is live; otherwise it is dead. All cells update from the same old row. The lab displays the rule number in decimal and as an eight-bit word, and its transition table lists the mappings in the conventional $111$ to $000$ order.

The gold row is the latest state; earlier live cells are cyan. Colour is not required to interpret the experiment: filled versus empty cells encode state, while the table reports generation number, live-cell count, density, transition count, and a central 0/1 window.

## Instrument controls

- **Rule number** selects any elementary binary rule. Presets 30, 90, 110, and 184 are landmarks, not a ranking.
- **Boundary model** either supplies zero beyond both edges or wraps the row into a ring.
- **Seed controls** replace the initial row with a single cell, random cells, alternating cells, or repeated blocks.
- **Step once** performs one synchronous update. **Run** repeatedly steps, unless the operating system requests reduced motion; in that case manual stepping remains available.
- **Reset history** returns to the edited initial row without discarding it.
- **Share state** places the rule, boundary, and complete seed in the URL and copies it when clipboard access is available.

Clicking a diagram column toggles that cell in the **initial** seed and clears the computed history. With keyboard focus on the diagram, Left and Right select a column, Space or Enter toggles it, $S$ steps, $P$ runs or pauses, and $R$ resets. Editing the seed rather than a later row keeps the experiment’s causal story unambiguous.

## Investigation 1: infer Rule 90

Select Rule 90, fixed boundaries, and a single cell. Step six times. Record which of the eight neighbourhoods produce live cells. The rule table shows that $110$, $100$, $011$, and $001$ produce 1. In each case the outer two bits differ. Thus

$next = left XOR right$.

Predict the next row before stepping. If your prediction disagrees, inspect one incorrect cell’s exact three-bit neighbourhood rather than staring at the whole triangle.

Now choose an asymmetric seed. The nested triangular motifs remain, but global mirror symmetry disappears. This distinguishes a property of the update rule from a property jointly created by rule and seed.

### Check

Why does $101$ map to 0? Its outer bits are both 1, so their exclusive-or is 0. The centre 0 has no effect under Rule 90.

## Investigation 2: conservation in traffic

Choose Rule 184, wrapped boundaries, and a random seed. Record the initial live count, then step twenty times. It stays constant. Interpret a 1 as a car and 0 as an empty road location: a $10$ pair tends to become $01$, so cars travel right into gaps.

Density alone does not describe congestion. The **transition count** records how often adjacent cell values change around the row. A state $11110000$ has the same density as $10101010$, but far fewer interfaces between cars and gaps. Compare their motion.

Switch to a fixed boundary and place live cells near the right edge. Conservation may fail when cars leave the observed road. This is not a bug. The theorem “Rule 184 conserves population” needs the closed-ring hypothesis.

### Check

On a ring, every moving car leaves one location and enters one location. Blocked cars remain. No update creates or destroys a car, so the count is invariant.

## Investigation 3: identify an unknown rule

Ask a partner to choose a rule and share its state without telling you the number. Inspect several transitions. Every observed neighbourhood/output pair fixes one bit of the unknown rule. Maintain a table with eight rows and fill it as evidence appears.

A single seed may never produce all neighbourhoods. If $111$ never occurs, Rules that differ only in bit 7 are observationally indistinguishable in that run. Edit the seed to force missing triples. An alternating seed immediately supplies $010$ and $101$; blocks supply $000$, $001$, $011$, $111$, $110$, and $100$ near their edges.

This is a small example of **identifiability**: parameters can be recovered only when observations excite enough of the system.

## Investigation 4: finite rings must repeat

Choose wrapped boundaries. A width-$W$ row has exactly $2^W$ possible states. The rule gives each state one successor. Among the first $2^W+1$ states, two must be equal by the pigeonhole principle. From the first repeated state onward, determinism forces a cycle.

The argument guarantees eventual repetition but not a useful waiting time. The lab retains only recent rows for rendering, so finding a long cycle would require a separate state dictionary:

\`\`\`js
function firstRepeat(seed, rule) {
  const seen = new Map();
  let cells = seed;
  for (let t = 0; ; t += 1) {
    const key = cells.join("");
    if (seen.has(key)) return { start: seen.get(key), period: t - seen.get(key) };
    seen.set(key, t);
    cells = step(cells, rule, true);
  }
}
\`\`\`

For a width-$W$ row the worst-case dictionary holds up to $2^W$ strings of length $W$; this exhaustive method becomes impractical quickly. Floyd’s cycle-finding algorithm can detect a cycle using constant numbers of states, though it may still take exponentially many steps.

## Investigation 5: a finite light cone

Edit one seed cell and compare the two histories. After one step, only that column and its immediate neighbours can differ. After $t$ steps, differences lie at most $t$ columns away. The affected region is a cone in the space-time diagram.

This is not just an observation. Prove it by induction. At $t=0$ only the edited site differs. If differences at time $t$ are within distance $t$, a cell farther than $t+1$ reads three unchanged neighbours and must remain unchanged at $t+1$.

The light-cone bound gives a debugging technique. If editing one bit instantly changes a distant cell, the program has an indexing, shared-state, or in-place-update defect.

## Reading the measurements

For a row of width $W$:

- **live count** is $\\sum _{i} x_{i}$;
- **density** is $(1/W)\\sum _{i} x_{i}$;
- **transitions** count adjacent unequal pairs, with the edge pair included on a ring;
- the **central state** is an exact text slice, not a statistical summary.

Two states can agree on all three numerical summaries and still differ cell by cell. Summaries answer chosen questions; they are not lossless replacements for the state.

## Failure modes to test

1. Set Rule 204. Every row should equal its predecessor. If not, rule-bit indexing is wrong.
2. Set Rule 0. After one step every cell should be 0.
3. Set Rule 255. After one step every cell should be 1, even at fixed boundaries, because every neighbourhood output is 1.
4. Under wrapped Rule 170, the whole row shifts cyclically. Population and transition count should remain fixed.
5. Toggle a seed cell after many steps. The history should reset; otherwise the display joins incompatible experiments.

These are boundary and invariant tests, not merely attractive examples.

## Worked challenges

### Challenge A

Which rule computes $next = centre$?

**Answer.** Output 1 for neighbourhood codes whose middle bit is 1: 2, 3, 6, and 7. Their powers of two sum to $4+8+64+128=204$.

### Challenge B

Can a deterministic finite wrapped automaton enter a nonrepeating infinite history?

**Answer.** No. It has finitely many states. Once a state repeats, equal inputs to the deterministic rule give equal successors forever. An infinite nonrepeating history is possible only after changing assumptions, such as an infinite lattice, random updates, or an externally changing rule.

### Challenge C

Why is a chaotic-looking diagram not proof that its vertical centre sequence is a fair random bit source?

**Answer.** Visual irregularity does not establish equal frequencies, independence, unpredictability against an informed observer, or security. Each property needs a definition and evidence or proof suited to it. The automaton is deterministic and the seed may be recoverable.

## Continue the subject

[Local Rules, Global Worlds](#/item/course-cellular-automata-emergence) gives the full implementation proof, Rule 90 algebra, Rule 184 conservation derivation, complexity analysis, and worked exercises. From there, follow induction and recursion for proof patterns, dynamical systems for long-run behaviour, automata and formal languages for symbolic computation, or algorithms and complexity for limits on prediction.
`;export{e as default};