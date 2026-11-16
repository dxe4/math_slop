
# Verified Computation, Randomness, and Codes

<!-- euler-course-route -->

## Current course route

This is an Outline seminar in a selected theme. Use its [course page](#/courses/atlas-mathematics-computer-science-advanced) for the preparation courses, then attempt the mathematical investigations below. A general graduate chapter syllabus has not yet been assigned.

Preparation courses: [Automata, computability and complexity](#/courses/course-automata-complexity) · [Linear algebra II](#/courses/atlas-linear-algebra-standard) · [Discrete mathematics](#/courses/atlas-discrete-mathematics-structures).

The earlier mathematical explanations, proofs, assignments and complete solutions remain below with their original task identities. Their first-attempt, comparison and correction requirements still apply when you choose that earlier work. Existing notes and study marks keep their original scope.

A well-typed program can compute the wrong function. A correct interpreter can
be given the wrong probability law. A lossless source code can be damaged by a
channel, and an error-correcting decoder can silently choose the wrong message
outside its correction radius. This course follows those connections through
one completely specified finite pipeline and the native work that explains
each layer.

The selected scope is verification, coding, randomized algorithms and language
foundations. The existing [CS core](#/courses/atlas-mathematics-computer-science-standard)
supplies algorithms, recognizers, invariants and its own complete source work.
This continuation assigns the sources below and COMP-P/C/R; it does not replace
that core or require a staged course not yet adopted. The working books retain
their edition labels and imported-metatheorem boundaries. Full selected study
time is unknown. There is no invented hour allowance, credit or awarded grade.

Bring finite sets/functions, elementary integer arithmetic and the core's
algorithmic reasoning. For the software work, use basic JavaScript functions,
arrays, recursion and JSON, and a terminal capable of invoking Node. If those
operations are unfamiliar, first read and run the core course's complete
**CS-QUEUE** and **CS-SYSTEM-A** references with their documented examples.
Their array/state/validation explanations are the local repair; no framework
or package installation is needed. Boolean values and numeric bits remain
distinct in the new interpreter, even though the JSON tape uses 0 and 1.

## Preparation: finite laws, proofs and assertions

Before the source roster, attempt COMP-D1–D12 and compare the adjacent complete
models. Repair a missing skill before relying on the corresponding later step.

1. **COMP-D1, weighted probability.** Eight tapes have weights
   \((27,9,9,3,9,3,3,1)\). What normalizer gives probabilities? Are the tapes
   equiprobable? **Model:** their sum is 64, so divide each weight by 64.
   They are not equiprobable; counting successful rows without their weights
   changes the question. Repair by adding nonnegative masses and normalizing.
2. **COMP-D2, independence.** Two fair bits are copied to make the three-bit
   tape \((b_0,b_1,b_0)\). Give its four tapes and explain why three fair
   marginals do not imply three independent bits. **Model:** 000, 010, 101,
   111 each have probability \(1/4\); 001 has probability zero rather than
   \(1/8\). Independence requires the joint probability of every specified
   combination to factor, not just fair marginals.
3. **COMP-D3, conditioning.** Under that copied-bit law, find
   \(P(b_2=1\mid b_0=b_1=0)\). May a conditional be formed on tape prefix
   001? **Model:** the first conditional is zero because the last bit is
   forced to zero. The event 001 has zero mass; its ordinary ratio conditional
   is undefined. A zero-mass branch must be omitted, not given a fictional coin.
4. **COMP-D4, expectation.** If \(Y\) has weights \((4,2,1,1)\) on labels
   \(0,1,2,3\), find \(E[Y]\). **Model:**
   \((0\cdot4+1\cdot2+2\cdot1+3\cdot1)/8=7/8\).
   Linearity follows by distributing the finite weighted sum; it needs no
   independence between the summands. Product probabilities do need their
   stated independence assumptions.
5. **COMP-D5, conditional expectation.** An event splits into positive-mass
   branches of conditional weights \(3/4,1/4\), with means \(u,v\). What is
   the parent mean? **Model:** \(3u/4+v/4\), a convex combination. At least
   one supported branch has mean at least that value. It is not necessarily
   \((u+v)/2\). If one branch has zero mass, use the other branch alone.
6. **COMP-D6, logarithms and units.** Compute \(-\log_2(1/8)\) and the entropy
   of \((1/2,1/4,1/8,1/8)\). **Model:** surprise is 3 bits; entropy is
   \(1/2+1/2+3/8+3/8=7/4\) bits. Use
   \(\log_2(ab)=\log_2a+\log_2b\) only for positive arguments. A zero
   probability contributes zero to entropy by the limiting convention;
   do not ask a floating logarithm to evaluate \(0\log0\).
7. **COMP-D7, support.** Let \(P=(1/2,1/4,1/8,1/8)\) and
   \(R=(1/2,1/4,0,1/4)\). Find \(D(R\Vert P)\) and
   \(D(P\Vert R)\). **Model:** the former is
   \((1/4)\log_2 2=1/4\) bit; the latter is infinite because P gives
   positive mass to a symbol R forbids. Zero generating masses contribute
   zero. A positive generating mass with zero reference mass gives infinity.
8. **COMP-D8, structural induction.** Expressions are literals, bit reads,
   and \(if\ c\ then\ u\ else\ v\). What are the induction cases?
   **Model:** prove a property for every literal and valid bit read. For an
   if-node assume the property for all three strict subexpressions, then
   prove it for the parent using the typing rule and the chosen branch.
   Testing the three supplied cases is not this universal proof.
9. **COMP-D9, typing and assertions.** Why reject a natural-number condition
   or branches with different types? Does type Nat imply output zero?
   **Model:** an if-condition must be Bool and both branch types must agree.
   Nat only constrains the result's kind; it does not establish the functional
   postcondition. Repair by writing separate typing and input/output judgments.
10. **COMP-D10, Hoare direction.** What precondition lets \(x:=x+1\) establish
    \(x>5\)? Does a partial triple prove termination? **Model:** substitute
    before the assignment: \(x+1>5\), equivalently \(x>4\). A partial triple
    says only that terminating executions satisfy the postcondition. For a
    general while-loop, a decreasing natural variant also needs a terminating
    body premise at each continuing state; partial preservation/decrease can
    both hold vacuously for a divergent body.
11. **COMP-D11, binary linear algebra.** Compute addition in \(\mathbb F_2\)
    and the syndrome of error \((1,0,0)^T\) for
    \(H=\begin{pmatrix}1&0&1\\0&1&1\end{pmatrix}\).
    **Model:** addition is XOR, so \(1+1=0\); the syndrome is the first
    column, \((1,0)^T\). A syndrome is a vector, not a real-number sum.
12. **COMP-D12, a correction guarantee.** Why can distance three correct one
    error but not promise correction of two? **Model:** radius-one Hamming
    balls about distinct codewords are disjoint, since otherwise the triangle
    inequality would give distance at most two. Two errors can move closer
    to a different codeword. A known message count does not detect every such
    substitution.

For probability repairs read the finite examples in [Probability Models and
Proofs](../books/probability-models-proofs/counting-conditioning-and-bayes.md),
then its [joint-law chapter](../books/probability-models-proofs/joint-laws-conditioning-and-dependence.md).
For syntax, induction and assertions use **A1–A3, B1–B3, C1–C3 and F1–F3**
of the formal-computation book's registered **Prerequisite Diagnostic and
Repair Routes**, each with its adjacent Answer. The source roster then teaches
the missing semantics and proof rules. The binary field and repetition proof
used here are supplied explicitly; no general finite-field course is assumed.

## Required native work and complete keys

Attempt every assigned question before comparing its own full public key.
These are exact selections, not requests to finish entire books.

| Group | Required questions and teaching | Complete feedback address |
| --- | --- | --- |
| COMP-S1 | [Small-Step, Big-Step, and Trace Semantics](../books/formal-computation-proof-reference/small-step-and-big-step-semantics.md), sections 1–9 and Exercises 1–12 | Same chapter, **Exercises with complete solutions**, each numbered Solution immediately follows its question |
| COMP-S2 | [Lambda Calculus, Type Safety, and Proof Terms](#/books/formal-computation-proof-reference), sections 1–9 and Exercises 1–12 | Same chapter, adjacent complete Solutions, including capture avoidance, substitution typing and occurs check |
| COMP-S3 | [Hoare Logic, Weakest Preconditions, and Total Correctness](../books/formal-computation-proof-reference/hoare-logic-and-total-correctness.md), sections 1–9 and Exercises 1–12 | Same chapter, adjacent complete Solutions; retain the total-body premise in section 4 and relative-completeness boundary |
| COMP-S4 | [Randomized Computation, Approximation, and Promise Boundaries](#/books/formal-computation-proof-reference), sections 1–8 and Exercises 1–12; then MAX3SAT-A and MAX3SAT-B's four requests | Same chapter, adjacent Solutions, **MAX3SAT-A — Worked conditional expectations**, **MAX3SAT-B key — Complete branch and optimum evidence**, **MAX3SAT feedback — Criteria, repairs, and exact reference** |
| COMP-I1 | [Surprise](../apps/unhurried/articles/information-theory-surprise/index.html), [Entropy](../apps/unhurried/articles/information-theory-entropy/index.html), [Joint entropy](../apps/unhurried/articles/information-theory-joint-entropy/index.html), [Mutual information](../apps/unhurried/articles/information-theory-mutual-information/index.html): Exercises 1–2 on each | Each article's native practice section, **Fully worked answer to exercise 1/2** |
| COMP-I2 | [Prefix codes](../apps/unhurried/articles/information-theory-prefix-code/index.html) Exercises 1–2; [Huffman coding](../apps/unhurried/articles/information-theory-huffman/index.html) Exercises 1–5 | Adjacent native answers, including Huffman's **Change the distribution, dependence and protocol** answers 3–5 |
| COMP-I3 | [Noisy channel](../apps/unhurried/articles/information-theory-noisy-channel/index.html) Exercises 1–2; [KL divergence](../apps/unhurried/articles/information-theory-kl-divergence/index.html) Exercises 1–3; [Information estimation](../apps/unhurried/articles/information-theory-information-estimation/index.html) Exercises 1–4 | Adjacent complete native answers, including KL's changed nonuniform-reference task and estimation's changed source and pairing tasks |
| COMP-CODE | [Algebraic Coding Theory](../books/finite-algebra-computation/algebraic-coding-theory.md): definitions through Hamming codes, then **Practice Exercise 1** only | Same chapter, Exercise 1 Solution: Hamming(2,2) has codewords 000 and 111 and the displayed parity-check matrix |

The nine information articles are the actual **Discrete entropy and source
coding** course (`information-theory-deep`); the direct links above address
the individual native readings. Their finite-law/framing assumptions remain
part of each question. The MAX3SAT reference already provides exact expectation,
deterministic construction and exhaustive finite comparison for A/B. It does
**not** implement the separate seeded-sampling brief in its original section 9.
That sampling brief is additional and is not assigned here. Execute the public
MAX3SAT listing on its two supplied inputs and retain both output records;
the bounded reference admits 3–4 variables, 1–16 clauses and three distinct
variables per clause. Its own validation/reference contract remains in force.

COMP-S2's general lambda metatheory remains under its stated proof boundaries.
The finite typed fragment below has its own complete induction arguments; it
does not turn an outline of strong normalization for a richer calculus into
a new proof of that theorem.

## COMP-P, COMP-C and COMP-R: one compiler-to-channel pipeline

Use the following complete input. Tapes are in lexicographic order 000 through
111. Each row's nonnegative integer weights specifies its **entire** source
law after division by their sum. No sampler or implicit fair-coin assumption
is used by the supplied software. P is primary; C changes the independent
coin bias; R is later public reconstruction with a dependent source.

<!-- computing-advanced-input:start -->
```json
{
  "bits": 3,
  "program": ["if", ["bit", 0], ["nat", 0], ["if", ["bit", 1], ["nat", 1], ["if", ["bit", 2], ["nat", 2], ["nat", 3]]]],
  "cases": [
    {"id": "COMP-P", "weights": [1,1,1,1,1,1,1,1], "message": [0,1,2,3,0], "flips": [1]},
    {"id": "COMP-C", "weights": [27,9,9,3,9,3,3,1], "message": [0,1,2,3,0], "flips": [0,4]},
    {"id": "COMP-R", "weights": [1,0,1,0,0,1,0,1], "message": [0,1,3,0], "flips": [0,1]}
  ]
}
```
<!-- computing-advanced-input:end -->

The language has Nat literals 0–255, Bool literals, bounded input-bit reads
and typed conditionals. The if-condition has type Bool; both branches have the
same type. This program returns Nat. Bit 1 means true. Evaluation observes
conditions in order and evaluates only the selected branch. It returns the
number \(Z(b)\) of initial zeroes before the first 1, or three on 000.

For **each** P/C/R row, submit all six requests, then compare the public models:

1. Derive the typing judgment and exact semantics. Prove total correctness of
   `out := program` with precondition “three bound Boolean inputs” and
   postcondition \(out=Z(b)\). State the compiler simulation invariant and
   prove it by expression structure. Give the bytecode and all eight results.
2. Derive the output law from the actual tape weights and its expectation.
   Compare the supported conditional means for successive bit prefixes.
   Choose a maximum-mean supported branch, tie to 0, until a tape is fixed.
   Prove the conditional-expectation guarantee. Explain why R's last choice
   cannot be modeled by a fresh fair bit.
3. Construct the deterministic Huffman tree for **positive-weight outputs**.
   Sort nodes by weight, then by their smallest symbol; take the first two as
   left/right children, coded 0/1. Give the full dictionary, Kraft sum, mean
   length and entropy. Prove optimality here by classifying full trees with
   three/four leaves; do not rely only on a program claiming “Huffman”.
4. Encode and decode the supplied output message, then protect each payload
   bit with repetition 000/111. Flip exactly the listed zero-based channel
   positions and majority-decode each aligned triple before prefix decoding.
   Retain successes and R's intentional failure. Prove the distance-three
   correction guarantee and give the parity-check syndrome explanation.
5. Relate P's dictionary to the C and R laws through KL divergence. Compute
   \(D(C\Vert P)\), \(D(R\Vert P)\), \(D(P\Vert R)\), the cost of using
   P's dictionary under C, and the effect of grouping outputs as 01 | 23.
   Check **every active conditional block** before making an equality claim.
6. Execute the complete reference below, retaining its actual JSON output and
   runtime version. Compare interpreter and VM on all eight tapes, exact
   histograms/branch fractions, codec round trips, channel failures, first
   mutant witness and malformed-input refusals. Run an independently derived
   check, for example the coefficient/distance/closed-form checks described
   below. Record implementation disagreements and repair them. Hand-derived
   tables support the mathematical argument but do not complete this software
   obligation.

## Complete models: semantics, verification and random choices

The typing proof reads inward-out: bit reads are Bool, every leaf is Nat,
so all three if-nodes are Nat. A condition reading only a valid bound bit is
defined. The AST is finite and every recursive evaluation visits a strict
subexpression. Structural induction proves termination and preservation of
the result type; case analysis on the first true bit proves the stronger
functional postcondition. A well-typed mutant returning 2 on 000 refutes that
postcondition: type safety alone cannot find the wrong literal.

An independent relational specification is: \(0\le out\le3\), every input
bit before index \(out\) is zero, and either \(out=3\) or the bit at that
index is one. These conditions uniquely characterize the result without
restating the program's nested if-expression.

For compilation, maintain this invariant: starting at an expression's first
instruction with stack \(S\), its compiled code ends at the common successor
with stack \(S\) followed by exactly its semantic value. Literals/reads push
that value. For an if, the condition induction supplies one Bool; JF pops it
and selects exactly the semantic branch; that branch induction supplies one
result and J skips the other branch. Every patched target goes forward to a
branch or the common successor. This proves the invariant and termination
for every well-typed tree in the specified fragment. The implementation caps
are separate resource limits; they do not prove the code implements the rules.

The concrete compiled instructions are:

<!-- computing-advanced-model:start -->
```json
{
  "bytecode": [["R",0],["JF",4],["N",0],["J",13],["R",1],["JF",8],["N",1],["J",13],["R",2],["JF",12],["N",2],["J",13],["N",3],["HALT"]],
  "values": [3,2,1,1,0,0,0,0],
  "vmSteps": [8,9,7,7,5,5,5,5],
  "rows": [
    {"id":"COMP-P","histogram":[4,2,1,1],"total":8,"mean":"7/8","branches":[["7/4","0"],["5/2","1"],["3","2"]],"chosen":"000","codes":{"0":"0","1":"10","2":"110","3":"111"},"length":"7/4","entropy":"7/4","payload":"0101101110","recovered":"0101101110","decoded":[0,1,2,3,0]},
    {"id":"COMP-C","histogram":[16,12,9,27],"total":64,"mean":"111/64","branches":[["37/16","0"],["11/4","1"],["3","2"]],"chosen":"000","codes":{"0":"10","1":"111","2":"110","3":"0"},"length":"61/32","entropy":"(296-111*log2(3))/64","payload":"10111110010","recovered":"10111110010","decoded":[0,1,2,3,0]},
    {"id":"COMP-R","histogram":[2,1,0,1],"total":4,"mean":"1","branches":[["2","0"],["3","1"],["3",null]],"chosen":"000","codes":{"0":"0","1":"10","3":"11"},"length":"3/2","entropy":"3/2","payload":"010110","recovered":"110110","decoded":[3,0,3,0]}
  ],
  "kl": {"CtoP":"(111*log2(3)-148)/64","RtoP":"1/4","PtoR":"infinity","PcodeUnderC":"37/16","coarseRtoP":"0","hiddenRtoP":"1/4"}
}
```
<!-- computing-advanced-model:end -->

Each histogram is an integer sum of the specified tape weights, not a count of
samples. For P, independent fair bits give probabilities
\((1/2,1/4,1/8,1/8)\); for C, independent bits with zero probability 3/4 give
\((1/4,3/16,9/64,27/64)\). R copies the first bit to the last: all three
marginals are fair, yet the law is supported only on 000, 010, 101, 111.
Its output law is \((1/2,1/4,0,1/4)\). The means in the model follow by
weighting labels 0–3, giving \(7/8,111/64,1\).

For the first zero branch, P's mean is \(1+1/2+1/4=7/4\), C's is
\(1+3/4+9/16=37/16\), and R's is 2. Prefix 00 yields respectively
\(5/2,11/4,3\). The full branch table is printed above; null means zero
conditional mass, not mean zero. A parent mean is the weighted average of
the supported child means. Choosing a supported child at least that average
preserves a lower bound inductively. The last supported tape 000 scores 3
in every case, exceeding each initial mean. This is exact derandomization,
not empirical sampling or a claim about an unknown real source.

The universal postcondition is proved for all eight tapes, including R's
zero-mass tape 001, on which the program returns 2. R's source dictionary
omits 2 only under its known source-law contract. Encoding 2 with it is
explicitly refused. The prefix codec recovers the **output message**, not
the original tape: this program maps several tapes to the same output.

## Complete models: compression, error correction and support

P merges weights 1+1=2, then 2+2=4, then 4+4=8. C merges 9+12=21,
16+21=37, 27+37=64. R merges 1+1=2, then 2+2=4. The fixed smallest-symbol
tie policy produces exactly the dictionaries printed in the model. Their
Kraft sums are one. Mean weighted lengths are \(14/8=7/4\),
\((27+32+36+27)/64=61/32\), and \(6/4=3/2\) bits per output symbol.

There are at least two positive symbols in each case. With positive weights,
an optimal prefix tree has no unary internal node: suppressing one shortens
its descendants. A full four-leaf binary tree has depths either (2,2,2,2)
or a permutation of (1,2,3,3). Swapping larger weights to shallower depths
cannot increase cost. P's best comb costs 7/4 rather than 2; C's costs 61/32
rather than 2. A full three-leaf tree has depths (1,2,2), with the largest
weight shallow, proving R's optimum. This finite classification is also an
independent oracle for the greedy implementation. It does not prove a theorem
for arbitrary alphabet sizes.

P and R are dyadic, so their mean lengths equal their entropies. For C,
\(H(C)=(296-111\log_2 3)/64\), approximately 1.876081 bits, below
61/32=1.90625. Entropy, expected payload and an individual finite-file length
are different quantities. The printed messages have payload lengths 10, 11,
6; the repetition layer transmits 30, 33, 18 bits. The receiver knows the
dictionary, block alignment and output-symbol count. Sending that information
would add costs not included in these payload figures.

The channel code is the binary linear [3,1,3] repetition code, generated by
\((1,1,1)^T\) with parity-check matrix
\(H=\begin{pmatrix}1&0&1\\0&1&1\end{pmatrix}\). Its two words 000 and
111 have distance three. The syndromes for an error in positions 0,1,2 are
respectively (1,0), (0,1), (1,1), so one error can be located; equivalently,
majority decoding corrects it. Apply that proof independently to each aligned
triple. P's one flip and C's two flips in different triples recover their
payloads. R flips two bits of its first triple, turning 000 into 110; the
syndrome matches a single error at position 2, and majority chooses 1. Its
recovered prefix string is 110110, decoded as 11|0|11|0, or [3,0,3,0]. The
count is still four. No one-error-per-triple guarantee applies, and a correct
count is not a checksum or authenticity guarantee.
The benchmark knows which errors it injected and can label R outside the
guarantee. A receiver ordinarily lacks that error-position list; the syndrome
and frame count cannot diagnose every two-error corruption.

Using P's dictionary under C costs
\(16/64+24/64+27/64+81/64=37/16\) bits per output. Because P is dyadic,
its lengths are exactly \(-\log_2P_i\), and distributing the finite sum gives
\(L_P(C)-H(C)=D(C\Vert P)=(111\log_2 3-148)/64\).
The saving from C's own optimal dictionary is \(37/16-61/32=13/32\), not
exactly this KL: C's own prefix code also has a positive entropy gap.

For R versus P, \(D(R\Vert P)=1/4\) bit and \(D(P\Vert R)=\infty\).
Group labels as {0,1} | {2,3}. Both coarse laws are (3/4,1/4), so coarse KL
is zero. In the first block both conditionals are (2/3,1/3), but in the second
R is (0,1) and P is (1/2,1/2). That block has conditional KL one, weighted
by R's 1/4 block mass, recovering the discarded 1/4. Inspecting only the
matching first block would falsely certify no loss. These forward divergences
are finite and their active conditionals exist. Reverse infinity labels do
not justify subtracting infinity or applying a finite-divergence equality
criterion to undefined conditionals.

## Complete executable reference and limits

Save the following listing as `computing-reference.mjs` and the input block as
`computing-input.json`. Run `node computing-reference.mjs < computing-input.json`
with Node.js 20.19 or newer; no packages, browser, network or application
database are used. Retain stdout, runtime version and any stderr. This is a
required execution for the selected software work. Public code and outputs
can reveal later answers, so declare previous openings and outside help.

The reference accepts at most 16 KiB of UTF-8 JSON; 1–8 input bits; an AST of
at most 64 nodes/depth 16; at most three cases; integer weights 0–1024;
2–16 positive output symbols; messages of 1–64 symbols; dictionaries of
nonempty words at most 16 bits; payloads at most 1024 bits; at most 16 distinct
channel flips. Compiler code is capped at 193 instructions and VM execution
at 256 steps. Invalid input or exhausted fuel throws and produces a nonzero
exit. These limits are part of this small implementation, not complexity
results for unrestricted programs or codecs.

The code compares an AST interpreter with its compiled VM on **all tapes**,
including zero-mass tapes, and computes source statistics only with their
actual weights. It uses exact bounded integer sums and reduced rational
strings for means, branch means and expected lengths. It does not approximate
logarithms, implement a random-number generator or claim to measure a source.
The reference's own rejection/mutant checks supplement the mathematical
arguments; they do not verify the JavaScript runtime or all possible software.

```js
// computing-advanced-reference:start
import { readSync } from 'node:fs';
import assert from 'node:assert/strict';

function requireThat(ok, message) { if (!ok) throw new TypeError(message); }
function integer(x, low, high) { return Number.isSafeInteger(x) && x >= low && x <= high; }
function exactKeys(object, keys) {
  requireThat(object !== null && typeof object === 'object' && !Array.isArray(object), 'object required');
  requireThat(Object.keys(object).sort().join(',') === [...keys].sort().join(','), 'unexpected object fields');
}
function fraction(n, d = 1) {
  let a = BigInt(n), b = BigInt(d);
  requireThat(b > 0n, 'positive denominator required');
  function gcd(x, y) { return y === 0n ? x : gcd(y, x % y); }
  const g = gcd(a < 0n ? -a : a, b); a /= g; b /= g;
  return b === 1n ? String(a) : String(a) + '/' + String(b);
}
function typeOf(tree, bits) {
  requireThat(integer(bits, 1, 8), 'bit count');
  let nodes = 0;
  const seen = new Set();
  function visit(e, depth) {
    requireThat(Array.isArray(e) && !seen.has(e), 'AST must be a tree'); seen.add(e);
    requireThat(++nodes <= 64 && depth <= 16, 'AST resource limit');
    if (e[0] === 'nat') { requireThat(e.length === 2 && integer(e[1], 0, 255), 'Nat literal'); return 'Nat'; }
    if (e[0] === 'bool') { requireThat(e.length === 2 && typeof e[1] === 'boolean', 'Bool literal'); return 'Bool'; }
    if (e[0] === 'bit') { requireThat(e.length === 2 && integer(e[1], 0, bits - 1), 'bound bit read'); return 'Bool'; }
    requireThat(e[0] === 'if' && e.length === 4, 'expression constructor');
    requireThat(visit(e[1], depth + 1) === 'Bool', 'Boolean condition');
    const left = visit(e[2], depth + 1), right = visit(e[3], depth + 1);
    requireThat(left === right, 'branch types'); return left;
  }
  return visit(tree, 1);
}
function checkTape(tape, bits) { requireThat(Array.isArray(tape) && tape.length === bits && tape.every(x => x === 0 || x === 1), 'Boolean tape'); }
function interpret(tree, tape) {
  typeOf(tree, tape.length); checkTape(tape, tape.length);
  function go(e) {
    if (e[0] === 'nat' || e[0] === 'bool') return e[1];
    if (e[0] === 'bit') return tape[e[1]] === 1;
    return go(e[1]) ? go(e[2]) : go(e[3]);
  }
  return go(tree);
}
function compile(tree, bits) {
  typeOf(tree, bits);
  const code = [];
  function emit(e) {
    if (e[0] === 'nat') { code.push(['N', e[1]]); return; }
    if (e[0] === 'bool') { code.push(['B', e[1]]); return; }
    if (e[0] === 'bit') { code.push(['R', e[1]]); return; }
    emit(e[1]); const jf = code.push(['JF', 0]) - 1;
    emit(e[2]); const jump = code.push(['J', 0]) - 1;
    code[jf][1] = code.length; emit(e[3]); code[jump][1] = code.length;
  }
  emit(tree); code.push(['HALT']); requireThat(code.length <= 193, 'code size'); return code;
}
function machine(code, tape, fuel = 256) {
  checkTape(tape, tape.length);
  requireThat(Array.isArray(code) && code.length > 0 && code.length <= 193 && integer(fuel, 1, 256), 'VM limits');
  for (const row of code) {
    requireThat(Array.isArray(row), 'instruction');
    const [op, arg] = row;
    if (op === 'HALT') requireThat(row.length === 1, 'HALT arity');
    else {
      requireThat(row.length === 2, 'instruction arity');
      if (op === 'N') requireThat(integer(arg, 0, 255), 'VM Nat');
      else if (op === 'B') requireThat(typeof arg === 'boolean', 'VM Bool');
      else if (op === 'R') requireThat(integer(arg, 0, tape.length - 1), 'VM bit');
      else requireThat((op === 'J' || op === 'JF') && integer(arg, 0, code.length - 1), 'VM opcode/target');
    }
  }
  const stack = []; let pc = 0;
  for (let steps = 1; steps <= fuel; steps++) {
    requireThat(integer(pc, 0, code.length - 1), 'VM pc');
    const [op, arg] = code[pc++];
    if (op === 'HALT') { requireThat(stack.length === 1, 'VM final stack'); return { value: stack[0], steps }; }
    if (op === 'N' || op === 'B') stack.push(arg);
    else if (op === 'R') stack.push(tape[arg] === 1);
    else if (op === 'J') pc = arg;
    else { const condition = stack.pop(); requireThat(typeof condition === 'boolean', 'VM condition'); if (!condition) pc = arg; }
    requireThat(stack.length <= 64, 'VM stack limit');
  }
  throw new RangeError('VM fuel exhausted');
}
function dictionary(histogram) {
  const queue = histogram.flatMap((weight, symbol) => weight > 0 ? [{ weight, min: symbol, symbol }] : []);
  requireThat(queue.length >= 2 && queue.length <= 16, 'positive alphabet must have 2–16 symbols');
  while (queue.length > 1) {
    queue.sort((a, b) => a.weight - b.weight || a.min - b.min);
    const left = queue.shift(), right = queue.shift();
    queue.push({ weight: left.weight + right.weight, min: Math.min(left.min, right.min), left, right });
  }
  const result = Object.create(null);
  function walk(node, word) { if (Object.hasOwn(node, 'symbol')) result[node.symbol] = word; else { walk(node.left, word + '0'); walk(node.right, word + '1'); } }
  walk(queue[0], ''); return result;
}
function checkDictionary(dict) {
  requireThat(dict !== null && typeof dict === 'object' && !Array.isArray(dict), 'dictionary');
  const entries = Object.entries(dict);
  requireThat(entries.length >= 2 && entries.length <= 16, 'dictionary size');
  for (const [symbol, word] of entries) requireThat(/^(0|[1-9][0-9]*)$/.test(symbol) && integer(Number(symbol), 0, 255) && typeof word === 'string' && /^[01]{1,16}$/.test(word), 'dictionary entry');
  for (let i = 0; i < entries.length; i++) for (let j = 0; j < entries.length; j++) if (i !== j) requireThat(!entries[j][1].startsWith(entries[i][1]), 'non-prefix dictionary');
  return entries;
}
function encode(dict, message) {
  checkDictionary(dict); requireThat(Array.isArray(message) && integer(message.length, 1, 64), 'message size');
  const word = message.map(symbol => { requireThat(integer(symbol, 0, 255) && Object.hasOwn(dict, symbol), 'unsupported symbol'); return dict[symbol]; }).join('');
  requireThat(word.length <= 1024, 'payload size'); return word;
}
function decode(dict, payload, count) {
  const entries = checkDictionary(dict);
  requireThat(typeof payload === 'string' && /^[01]{1,1024}$/.test(payload) && integer(count, 1, 64), 'payload/count');
  const result = []; let pending = '';
  for (const bit of payload) {
    pending += bit; const found = entries.find(([, word]) => word === pending);
    if (found) { result.push(Number(found[0])); pending = ''; requireThat(result.length <= count, 'too many symbols'); }
    else requireThat(entries.some(([, word]) => word.startsWith(pending)), 'invalid prefix');
  }
  requireThat(pending === '' && result.length === count, 'truncated payload or wrong count'); return result;
}
function channel(payload, flips) {
  requireThat(typeof payload === 'string' && /^[01]{1,1024}$/.test(payload), 'channel payload');
  const sent = [...payload].map(bit => bit.repeat(3)).join('');
  requireThat(Array.isArray(flips) && flips.length <= 16 && new Set(flips).size === flips.length && flips.every(i => integer(i, 0, sent.length - 1)), 'flip positions');
  const received = [...sent]; for (const i of flips) received[i] = received[i] === '0' ? '1' : '0';
  let recovered = ''; for (let i = 0; i < received.length; i += 3) recovered += Number(received[i]) + Number(received[i + 1]) + Number(received[i + 2]) >= 2 ? '1' : '0';
  return { transmittedBits: sent.length, received: received.join(''), recovered };
}
function analyze(input) {
  exactKeys(input, ['bits', 'program', 'cases']); requireThat(integer(input.bits, 1, 8), 'bit count');
  requireThat(typeOf(input.program, input.bits) === 'Nat', 'pipeline result type');
  requireThat(Array.isArray(input.cases) && integer(input.cases.length, 1, 3), 'case count');
  const code = compile(input.program, input.bits), tapes = Array.from({ length: 2 ** input.bits }, (_, i) => i.toString(2).padStart(input.bits, '0'));
  const observations = tapes.map(tape => { const values = [...tape].map(Number), ast = interpret(input.program, values), vm = machine(code, values); assert.equal(vm.value, ast); return { tape, value: ast, steps: vm.steps }; });
  const ids = new Set();
  const reports = input.cases.map(item => {
    exactKeys(item, ['id', 'weights', 'message', 'flips']);
    requireThat(typeof item.id === 'string' && /^COMP-[PCR]$/.test(item.id) && !ids.has(item.id), 'case identity'); ids.add(item.id);
    requireThat(Array.isArray(item.weights) && item.weights.length === tapes.length && item.weights.every(w => integer(w, 0, 1024)), 'source weights');
    const total = item.weights.reduce((a, b) => a + b, 0); requireThat(total > 0, 'positive source mass');
    const histogram = Array(Math.max(...observations.map(row => row.value)) + 1).fill(0);
    observations.forEach((row, i) => { histogram[row.value] += item.weights[i]; });
    const mean = fraction(histogram.reduce((s, w, label) => s + w * label, 0), total);
    function conditional(prefix) { let mass = 0, score = 0; observations.forEach((row, i) => { if (row.tape.startsWith(prefix)) { mass += item.weights[i]; score += item.weights[i] * row.value; } }); return mass ? { mass, score, mean: fraction(score, mass) } : null; }
    let prefix = ''; const branches = [];
    for (let i = 0; i < input.bits; i++) {
      const zero = conditional(prefix + '0'), one = conditional(prefix + '1'); branches.push([zero?.mean ?? null, one?.mean ?? null]);
      requireThat(zero || one, 'unsupported prefix');
      const choice = !one || (zero && zero.score * one.mass >= one.score * zero.mass) ? '0' : '1'; prefix += choice;
    }
    const codes = dictionary(histogram), length = fraction(histogram.reduce((s, w, label) => s + w * (codes[label]?.length ?? 0), 0), total);
    const payload = encode(codes, item.message); assert.deepEqual(decode(codes, payload, item.message.length), item.message);
    const transmission = channel(payload, item.flips), decoded = decode(codes, transmission.recovered, item.message.length);
    return { id: item.id, histogram, total, mean, branches, chosen: prefix, codes, length, payload, ...transmission, decoded };
  });
  return { bytecode: code, observations, reports };
}
function selfChecks(input) {
  const bad = [() => typeOf(['if', ['nat', 0], ['nat', 1], ['nat', 2]], 3), () => typeOf(['bit', 3], 3), () => interpret(['bit', 1], [0]), () => machine([['J', 0]], [0, 0, 0]), () => encode({ 0: '0', 1: '01' }, [0]), () => decode({ 0: '0', 1: '10', 3: '11' }, '1', 1), () => encode({ 0: '0', 1: '10', 3: '11' }, [2])];
  for (const check of bad) assert.throws(check);
  const mutant = JSON.parse(JSON.stringify(input.program));
  function change(e) { if (e[0] === 'nat' && e[1] === 3) e[1] = 2; else if (e[0] === 'if') e.slice(1).forEach(change); }
  change(mutant);
  const witness = Array.from({ length: 2 ** input.bits }, (_, i) => i.toString(2).padStart(input.bits, '0')).find(tape => interpret(mutant, [...tape].map(Number)) !== interpret(input.program, [...tape].map(Number)));
  return { rejected: bad.length, firstMutantWitness: witness ?? null };
}
try {
  const buffer = Buffer.alloc(16385); let length = 0;
  while (length < buffer.length) { const read = readSync(0, buffer, length, buffer.length - length, null); if (read === 0) break; length += read; }
  requireThat(length <= 16384, 'input byte limit');
  const input = JSON.parse(new TextDecoder('utf-8', { fatal: true }).decode(buffer.subarray(0, length)));
  const report = analyze(input); console.log(JSON.stringify({ ...report, checks: selfChecks(input) }));
} catch (error) { console.error(error.name + ': ' + error.message); process.exitCode = 1; }
// computing-advanced-reference:end
```

The expected self-check record has seven refusals and first mutant witness
000. The instruction listing, eight values and step counts, exact row models
and channel results above are the complete expected comparison. For an
independent check use the closed form “index of first 1, else 3”, direct
weighted sums and prefix conditioning, exhaustive three/four-leaf tree shapes,
and the syndrome decoder rather than copying the reference's branch/compiler,
Huffman and majority implementations.

## Comparison, repairs and retained work

Keep a dated first response, comparison record and revised response for every
source group, diagnostic repair and COMP-P/C/R portfolio. For example retain
`2026-11-04-COMP-P-first.txt`, `...-comparison.txt`, `...-revised.txt`, the
actual program input/output and runtime version. Preserve the first file
before opening more help. In comparison identify the first unsupported step,
the source/model used and the repair; retain the revised derivation and the
earlier versions. Shared reading notes are mutable and do not preserve the
whole worksheet or execution trail. A current export is a snapshot, not an
automatically immutable sequence of attempts. Public models, declared help
and client dates cannot establish unseen work or a verified delay.

The descriptive completion criteria are: a typed total input/output contract;
structural proof and compiler simulation; actual bounded interpreter/VM runs
and refusals; exact supported probability and derandomization; prefix-code
optimality/framing and repetition-code correction/failure; KL/support and
source/model-to-runtime limits. There is no new score or grade. Repair an
unweighted C average, a fabricated R branch, a code for an omitted symbol,
an unsupported two-error guarantee, a claim that compression recovers the
input tape, or a software obligation replaced by a printed hand calculation.

The resulting evidence concerns the specified finite laws, typed fragment,
compiler/VM and channel model. General language metatheory, cryptographic
security, specialist concurrent systems, arbitrary-source estimation and
capacity-achieving channel codes require further teaching. No new programme
stage, shared-writing task, learner schema, whole-book release or specialist
qualification is created by this standalone course.
