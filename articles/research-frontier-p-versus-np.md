
# P versus NP: the exact question behind “easy to check”

**Before reading.** Read [Cost, Amortization, and Lower Bounds](../books/algorithms-computation-proof-desk/cost-amortization-lower-bounds.md), [Turing machines and the Church–Turing thesis](computability-model-theory-turing-machines-thesis.md) and [Tiny Worlds, Precise Claims: Logic Before Formalism](logic-worlds-before-symbols.md). These are preparation for the ideas used below.

> **Status boundary, checked 2026-08-31.** Whether \(P=NP\) remains unsolved. This guide scopes the complexity-class question and known proof barriers. It does not present the analysis of a particular algorithm as a separation proof.

## Prerequisite route

The intended route is `logic-proofs` → `computability` →
`algorithms-complexity`. You should be comfortable with quantified statements,
binary encodings, asymptotic runtime, and deterministic algorithms. The linked
proof desk repairs reduction direction and bit-length accounting. Circuit
complexity and oracle machines are needed only for the barrier section; the
definitions below are sufficient for the core \(P\)-versus-\(NP\) question.

For the mechanics of asymptotic cost, reductions, amortization, and lower-bound claims, use the existing [Algorithms and Computation Proof Desk](#/books/algorithms-computation-proof-desk). This guide begins where that desk ends: the exact universal class equality and what would count as resolving it.

## Languages, decisions, and input length

A **decision problem** is represented by a language \(L\subseteq\{0,1\}^*\). An algorithm decides \(L\) if it accepts exactly the strings in \(L\). Runtime is measured as a function of input length \(n\), under a specified computational model.

\(P\) is the class of languages decidable by a deterministic algorithm in polynomial time. A language is in \(NP\) if membership has polynomial-size certificates verifiable in polynomial time: there are a polynomial \(p\) and polynomial-time verifier \(V\) such that

\[
x\in L
\quad\Longleftrightarrow\quad
\exists y,\ |y|\le p(|x|),\ V(x,y)=1.
\]

Every problem in \(P\) is in \(NP\): the verifier can run the polynomial-time decision algorithm and ignore the certificate. The open question is whether the reverse inclusion holds.

“NP” means nondeterministic polynomial time, not “non-polynomial.” A problem can lie outside both \(P\) and \(NP\), and a currently slow algorithm does not classify its problem outside \(P\).

## Verification example: Hamiltonian cycle

**Worked example.**

Given a graph and a proposed cyclic ordering of its vertices, check that every vertex appears exactly once and each consecutive pair, including the last-to-first pair, is an edge. This takes polynomial time in the encoded graph size. Therefore the decision problem “does this graph have a Hamiltonian cycle?” is in \(NP\).

Trying every ordering takes factorial time, but that observation is only a lower bound on one brute-force method. A proof that the problem is not in \(P\) must rule out **every** deterministic polynomial-time algorithm, including algorithms not yet imagined.

## NP-completeness concentrates the question

A polynomial-time many-one reduction from \(A\) to \(B\) is a polynomial-time computable map \(f\) satisfying

\[
x\in A\Longleftrightarrow f(x)\in B.
\]

If \(B\) has a polynomial-time decider, then so does \(A\). A language is **NP-hard** if every language in \(NP\) reduces to it, and **NP-complete** if it is NP-hard and also belongs to \(NP\).

The Cook–Levin theorem establishes that Boolean satisfiability is NP-complete. Consequently:

- a polynomial-time algorithm for any NP-complete decision problem would imply \(P=NP\);
- proving any NP-complete problem is not in \(P\) would imply \(P\ne NP\).

Reduction direction matters. Reducing SAT to a new problem transfers SAT's hardness toward the new problem. Reducing the new problem to SAT supplies a way to use a SAT solver; it does not by itself prove the new problem NP-hard.

## Decision, search, optimization, and practice

The official equality concerns decision classes. For standard self-reducible NP-complete problems, a polynomial-time decision algorithm can often be queried repeatedly to construct a witness. For SAT, tentatively fix a variable and ask whether the remaining formula is satisfiable; polynomially many such decisions recover an assignment.

Even if \(P=NP\), the polynomial might have a huge exponent or constants, input encodings still matter, and undecidable problems remain undecidable. Cryptographic consequences require precise assumptions and constructions: many widely used schemes would be threatened by efficient algorithms for associated search problems, but “all encryption instantly disappears” is not the mathematical statement of \(P=NP\).

If \(P\ne NP\), exponential time is not forced for every instance or every NP problem. Intermediate possibilities, randomized or parameterized algorithms, approximation, heuristics, structured instances, and subexponential bounds require separate analysis.

## Why known barriers are not impossibility theorems for proof

Baker, Gill, and Solovay constructed oracle worlds with \(P^A=NP^A\) and others with \(P^B\ne NP^B\). Therefore a proof technique that relativizes in the relevant sense cannot by itself settle the unrelativized question.

Razborov and Rudich formalized a “natural proofs” barrier for broad classes of circuit lower-bound arguments under stated hardness assumptions. Aaronson and Wigderson identified an algebrization barrier extending the diagnosis to many arithmetizing techniques.

These results constrain specified technique families. They do not prove \(P=NP\), prove \(P\ne NP\), or prove that humans cannot solve the problem. A proposed proof must show where it escapes the applicable hypotheses; merely naming a barrier does not invalidate unrelated reasoning.

## Known, open, and not equivalent

| Kind | Scoped statement |
| --- | --- |
| Known | \(P\subseteq NP\); SAT and many other decision languages are NP-complete; restricted computational models admit strong lower bounds; and relativization, natural proofs, and algebrization delimit formally specified technique families. |
| Open | Decide whether every language with polynomially verifiable certificates also has a deterministic polynomial-time decider. |
| Not equivalent | Exponential brute force, failure to find a fast algorithm, hardness on tested instances, an exponential lower bound for a restricted circuit model, or escaping one proof barrier does not establish \(P\ne NP\). A fast heuristic on many instances does not establish \(P=NP\). |

An equality proof may give a deterministic polynomial-time algorithm for one
NP-complete language and prove its running time in total input length. A
separation proof may exhibit a language in \(NP\setminus P\), but its lower
bound must cover the full deterministic polynomial-time model; a lower bound
for one algorithm or a weaker model is insufficient.

## A proposed-proof audit

1. Is the object a decision language with an explicit encoding?
2. Is the runtime polynomial in total bit length, not in a numeric value written in binary?
3. Does a claimed lower bound cover a computational model strong enough to imply the class separation?
4. Is a reduction's direction and yes/no preservation proved?
5. Does “no known algorithm” get substituted for “no algorithm exists”?
6. Is worst-case complexity confused with tested instances or average performance?
7. Does the argument diagonalize or use an oracle in a way covered by relativization?
8. If it claims a circuit lower bound, do uniformity and the natural-proofs assumptions match the desired conclusion?

## Checkpoints with solutions

<a id="deep-dive-research-frontier-p-versus-np-ex-1"></a>

**Exercise 1.**

**1. Why is a verifier not already a solver?**
<details>
<summary>Hint 1</summary>

A verifier is given both an instance and a proposed witness.
</details>
<details>
<summary>Hint 2</summary>

A solver receives only the instance and must determine whether some witness exists.
</details>
<details>
<summary>Solution</summary>

  
It receives both \(x\) and a candidate witness \(y\). The solver must determine whether any suitable \(y\) exists without being handed one. There may be exponentially many candidates, and the open question is whether some different polynomial-time strategy always avoids that search.

</details>

<a id="deep-dive-research-frontier-p-versus-np-ex-2"></a>

**Exercise 2.**

**2. An algorithm takes \(O(2^k n^3)\). Is the problem in \(P\)?**
<details>
<summary>Hint 1</summary>

Polynomial time is measured in the total bit length of the input.
</details>
<details>
<summary>Hint 2</summary>

Let the parameter k grow with that length and inspect the resulting power of two in the worst case.
</details>
<details>
<summary>Solution</summary>

  
Not when \(k\) can grow linearly with input length; then the bound is exponential in the worst case. It is fixed-parameter tractable with parameter \(k\), a valuable but different classification. If \(k\) is a fixed constant built into the problem, the interpretation changes.

</details>

### Further practice

**3. A paper proves an exponential lower bound for monotone circuits computing clique. Does \(P\ne NP\) follow?**  
No. General polynomial-time algorithms are not restricted to monotone circuits. The result is a genuine lower bound in its model; the missing step is a lower bound for a model that captures all polynomial-time computation relevant to the separation.

## Sources and current-status boundary

- [Clay Mathematics Institute current P versus NP page](https://www.claymath.org/millennium/p-vs-np/) — current problem overview and official-description link; accessed 2026-08-31.
- [Cook, official problem description](https://www.claymath.org/wp-content/uploads/2022/06/pvsnp.pdf) — formal definitions, completeness context, and official question; accessed 2026-08-31.
- [Clay 2025–26 Millennium lecture-series page](https://www.claymath.org/events/millennium-prize-problems-lecture-series/) — current institutional statement that only the Poincaré problem among the seven has been resolved; accessed 2026-08-31.
- [Baker, Gill, and Solovay, DOI 10.1137/0204037](https://doi.org/10.1137/0204037) — primary relativization result with oracle worlds on both sides; accessed 2026-08-31.
- [Razborov and Rudich, DOI 10.1145/195058.195134](https://doi.org/10.1145/195058.195134) — primary natural-proofs barrier; accessed 2026-08-31.
- [Aaronson and Wigderson, DOI 10.1145/1490270.1490272](https://doi.org/10.1145/1490270.1490272) — primary algebrization barrier; accessed 2026-08-31.

The three barrier papers delimit technique families under their definitions and assumptions; they are not cited as a resolution of \(P\) versus \(NP\).
