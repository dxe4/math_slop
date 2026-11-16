# Construct the lattice of fixed points of a finite monotone map

*Hard · [Discrete mathematics](index.md)*

Let L be a finite complete lattice and F:L→L monotone. Prove the fixed points form a complete lattice in their inherited order, constructing the least fixed upper bound of each subset S of fixed points. Give a monotone map on $\mathcal P(\{1,2,3\})$ showing that the ambient join of two fixed points need not itself be fixed.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, grade or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

For fixed S, take the ambient meet of all upper bounds x of S satisfying F(x)≤x.

</details>

<details>
<summary>Hint 2</summary>

Show this meet p is pre-fixed and that F(p) is itself one of those admissible upper bounds; these two facts force equality.

</details>

<details>
<summary>Model proof</summary>

The correct join is built among pre-fixed upper bounds, rather than assumed equal to the original lattice join.

1. For any S⊂Fix(F), let U\_S={x∈L: every s∈S satisfies s≤x, and F(x)≤x}. The top element belongs to U\_S, so define p=meet\_L U\_S, including when S is empty. Every s∈S lies below p.
2. For each x∈U\_S, monotonicity gives F(p)≤F(x)≤x. Hence F(p)≤p. Also s=F(s)≤F(p) for every s∈S. Applying F to F(p)≤p gives F(F(p))≤F(p), so F(p) itself lies in U\_S. By the meet definition p≤F(p), and therefore p=F(p).
3. Any fixed upper bound of S belongs to U\_S and lies above p, proving p is the join of S inside Fix(F). This supplies every join, including the least fixed point from S=∅. Meets then exist as joins of the fixed lower bounds of a subset: that join remains below every member and dominates all fixed lower bounds. Thus Fix(F) is complete.
4. For the counterexample define F(A)=A∪{3} if {1,2}⊂A, and F(A)=A otherwise. It is monotone: adding elements cannot remove the triggering pair. Both {1} and {2} are fixed, but their ambient union {1,2} maps to {1,2,3}. Their join in the fixed-point lattice is {1,2,3}, not their ambient join.

**Self-assessment rubric**

- Defines a nonempty set of pre-fixed upper bounds and its ambient meet.
- Proves both F(p)≤p and F(p)∈U\_S, forcing equality.
- Proves the least-upper-bound property and constructs meets and the empty-subset case.
- Checks monotonicity and fixed points in an explicit map whose ambient join fails.

</details>
