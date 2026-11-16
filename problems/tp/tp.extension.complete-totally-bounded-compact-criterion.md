# Prove the metric compactness criterion with the finite-cover step

*Hard · [Topology problems](index.md)*

For a metric space $(X,d)$, prove compactness is equivalent to completeness and total boundedness. Total boundedness means that every positive-radius ball cover has a finite subcover. Supply the implication from convergent subsequences to an arbitrary open-cover conclusion.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic verdict, grade or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Use finite covers at scales tending to zero to extract a Cauchy subsequence.

</details>

<details>
<summary>Hint 2</summary>

If an open cover has no Lebesgue number, choose points whose shrinking balls fit in no member and then pass to a convergent subsequence.

</details>

<details>
<summary>Model proof</summary>

The finite-net condition supplies small-scale control, and completeness supplies actual limits.

1. If X is compact, the cover by radius-ε balls has a finite subcover for each ε&gt;0, so X is totally bounded. A Cauchy sequence has a cluster point by compactness: otherwise each point would have a neighborhood containing only finitely many sequence indices, and a finite subcover would contradict infinitude of the indices. A Cauchy sequence with a cluster point converges to it. Thus X is complete.
2. Conversely, suppose X is complete and totally bounded. Repeatedly choose an infinite subsequence inside one ball of radius 2⁻ᵏ, always from the preceding infinite subsequence. A diagonal selection is Cauchy because two sufficiently late selections lie in one such ball and have distance at most 2·2⁻ᵏ. Completeness gives a convergent subsequence of every sequence.
3. Let an arbitrary open cover be given. If no δ&gt;0 has every δ-ball contained in some cover member, choose x\_n such that B(x\_n,1/n) fits in none. A subsequence tends to x. Choose a cover member O containing x and r&gt;0 with B(x,r)⊂O. For large subsequence indices, d(x\_n,x)&lt;r/2 and 1/n&lt;r/2, contradicting the choice of x\_n. Hence a Lebesgue number δ exists.
4. Choose a finite δ/2-net by total boundedness. Each radius-δ ball about its centers lies in a cover member, and the smaller balls already cover X. These finitely many chosen members cover X. The empty space satisfies every condition as well.

**Self-assessment rubric**

- Derives finite nets and convergence of every Cauchy sequence from compactness.
- Extracts a Cauchy subsequence using nested infinite subsequences and explicit shrinking radii.
- Proves an arbitrary open cover has a Lebesgue number using a convergent subsequence.
- Combines that number with a finite net to obtain a finite subcover.

</details>
