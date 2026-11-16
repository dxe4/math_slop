# Prove termination without any natural-valued decreasing rank

*Hard · [Discrete mathematics](index.md)*

States are (m,n)∈N². If n&gt;0, the only move is (m,n)→(m,n−1). If n=0&lt;m, a move chooses any K∈N and sends (m,0)→(m−1,K); (0,0) stops. Prove every run terminates, but from (1,0) run lengths have no finite uniform bound. Prove no map $R:\mathbb N^2\to\mathbb N$ can strictly decrease on every allowed move.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, grade or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

The first coordinate can drop only finitely many times, and between drops the second coordinate counts down.

</details>

<details>
<summary>Hint 2</summary>

A strictly decreasing natural rank bounds the remaining length by its current value, contradicting arbitrarily large reset choices from one fixed state.

</details>

<details>
<summary>Model proof</summary>

Well-founded lexicographic behavior can have unbounded finite branches and require more than a natural-valued universal ranking.

1. Starting from (m₀,n₀), there are at most m₀ reset moves because each reduces the first coordinate by one. Between resets, the second coordinate decreases by one per step from its chosen finite value, so that phase is finite. A finite number of finite phases terminates at (0,0).
2. From (1,0), choose any K on the first move to reach (0,K), then make exactly K countdown moves. The length is K+1, unbounded over choices even though each individual run is finite.
3. Suppose a natural-valued strict rank R existed. Along the K-step countdown, R(0,K)≥K because the last rank is nonnegative and each strict integer drop is at least one.
4. The allowed reset from (1,0) would require R(1,0)&gt;R(0,K)≥K for every K. No fixed natural number has this property. Hence no such rank exists; the termination proof instead uses the lexicographic pair structure.

**Self-assessment rubric**

- Bounds reset count and proves each intervening countdown phase finite.
- Constructs arbitrarily long runs from the single fixed state (1,0).
- Derives R(0,K)≥K from strict natural-number decreases.
- Uses every reset choice to contradict a finite value of R(1,0), rather than only ruling out a linear rank.

</details>
