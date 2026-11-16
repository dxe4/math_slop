# Prove a necessary degree condition with multiplicities

*Medium · [Discrete mathematics](index.md)*

Prove that every vertex has even degree in a finite undirected multigraph admitting a closed route that uses each edge occurrence exactly once. Allow loops, with their usual $2$ degree incidences.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof and rubric reflection only; no automatic correctness verdict or automatic required objective slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

At a vertex, pair arrival and departure incidences along the closed route.

</details>

<details>
<summary>Hint 2</summary>

The starting point also has a matched final arrival and initial departure.

</details>

<details>
<summary>Model proof</summary>

A closed edge-covering route partitions every incidence count into pairs.

1. Every time the route visits a vertex, an arriving incidence is paired with a departing incidence. A loop supplies both incidences within one step.
2. At the starting vertex the last arrival pairs with the initial departure, so it has no unpaired endpoint incidence.
3. All edge occurrences are used once, so all degree incidences are included in these pairs. Every degree is therefore even, including zero at any isolated vertex.

**Self-assessment rubric**

- Pair arrivals and departures without losing loop incidences.
- Handle the starting/ending vertex using closedness.
- Use exact edge coverage to account for every incidence.

</details>
