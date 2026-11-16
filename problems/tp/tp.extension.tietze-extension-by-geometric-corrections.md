# Construct a bounded Tietze extension from Urysohn separation

*Hard · [Topology problems](index.md)*

Assume Urysohn’s lemma: disjoint closed subsets of a normal space admit a continuous separator into \[0,1\]. For a closed A in a normal space X and continuous $f:A\to[-1,1]$, construct a continuous extension $F:X\to[-1,1]$. Prove uniform convergence and the exact extension property rather than citing Tietze’s theorem.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic verdict, grade or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Approximate a residual bounded by M using a correction bounded by M/3, separating its ≥M/3 and ≤−M/3 level sets.

</details>

<details>
<summary>Hint 2</summary>

The new error is at most 2M/3; iterate and sum the geometric correction bounds.

</details>

<details>
<summary>Model proof</summary>

A separator gives one controlled approximation; a uniformly convergent series removes the entire residual.

1. If a continuous residual r on A has \|r\|≤M, its sets A\_+={r≥M/3} and A\_-={r≤−M/3} are disjoint closed subsets of X because A is closed. Urysohn’s lemma gives a continuous g:X→\[−M/3,M/3\] equal to M/3 on A\_+ and −M/3 on A\_-. If either set is empty a constant separator or the same lemma with the empty closed set still applies.
2. On A\_+ the residual r−g lies between 0 and 2M/3; on A\_- it lies between −2M/3 and 0; on the remaining points \|r\|&lt;M/3 and \|g\|≤M/3. Thus \|r−g\|≤2M/3 everywhere on A.
3. Start with r\_0=f and M\_0=1. Repeatedly construct g\_n with \|g\_n\|≤M\_n/3 and residual r\_{n+1}=r\_n−g\_n\|\_A bounded by M\_{n+1}=(2/3)M\_n. The uniform bounds sum to ∑\_{n≥0}(2/3)ⁿ/3=1.
4. Therefore F=∑g\_n converges uniformly on X, and the uniform limit of continuous real-valued functions is continuous on any topological domain by the ε/3 neighborhood argument. Its absolute value is at most 1. On A the error after N corrections is at most (2/3)^N and tends to zero, so F\|\_A=f.

**Self-assessment rubric**

- Forms disjoint level sets closed in X and applies Urysohn with the correct amplitude.
- Verifies the 2M/3 error bound in all three level regions.
- Supplies summable uniform correction bounds and continuity of their uniform limit.
- Proves exact agreement on A and the final bound \|F\|≤1.

</details>
