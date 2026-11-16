# Construct a path lift by finitely many evenly covered intervals

*Hard · [Topology problems](index.md)*

Let $p:E\to B$ be a covering map, let $\gamma:[0,1]\to B$ be continuous, and fix e₀ above γ(0). Prove there is a unique lift starting at e₀. Do not assume global path connectedness or local simple connectedness of B.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic verdict, grade or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Pull evenly covered neighborhoods back to an open cover of the compact parameter interval.

</details>

<details>
<summary>Hint 2</summary>

Subdivide finely enough that each subinterval maps into one such neighborhood; uniqueness of a sheet then propagates.

</details>

<details>
<summary>Model proof</summary>

Compactness of the parameter domain allows finitely many compatible local inverses.

1. For every t choose an evenly covered neighborhood U\_t of γ(t). Its preimages under γ cover \[0,1\]. A Lebesgue number for this interval cover gives a subdivision 0=t\_0&lt;⋯&lt;t\_N=1 such that each closed subinterval maps into an evenly covered neighborhood U\_i.
2. On the first subinterval select the sheet over U\_1 containing e₀ and compose γ with its inverse homeomorphism. At the next endpoint its value selects one sheet over U\_2. Continue finitely many times. Consecutive definitions agree at the shared endpoint, so the pasting lemma yields a continuous lift on \[0,1\].
3. If two lifts agree at some time, near that time they lie in the same sheet and hence agree by the local inverse formula. If they differ, near that time they lie in disjoint sheets above one evenly covered neighborhood and continue to differ. Their equalizer is therefore both open and closed in the interval.
4. The equalizer contains 0 and the interval is connected, so it is the whole interval. This proves uniqueness without imposing extra hypotheses on the base space.

**Self-assessment rubric**

- Obtains a finite subdivision subordinate to pulled-back evenly covered neighborhoods.
- Chooses each sheet by the preceding endpoint and pastes continuous local inverse lifts.
- Uses local sheets and connectedness of the parameter interval to prove uniqueness with only the stated assumptions.

</details>
