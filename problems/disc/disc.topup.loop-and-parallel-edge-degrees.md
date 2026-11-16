# Count loops and parallel incidences correctly

*Hard · [Discrete mathematics](index.md)*

An undirected multigraph on $A,B,C$ has one loop at A, two distinct parallel AB edges, one BC edge and one AC edge. A loop contributes two to degree. Enter the degree vector in order A,B,C.

```answer
{"answer":{"kind":"vector","expected":["5","3","2"],"checker_scope":"Exact requested finite observation or declared representation only. The worked explanation is not automatically certified; no new checkpoint objective or eligibility is introduced."}}
```

<details>
<summary>Hint 1</summary>

Parallel edges are separate edge occurrences.

</details>

<details>
<summary>Hint 2</summary>

Count the loop twice at A and each ordinary edge once at each endpoint.

</details>

<details>
<summary>Worked solution</summary>

Multigraph degree is an incidence count with stated loop multiplicity.

1. A has two incidences from the loop, two from the parallel AB edges and one from AC, giving degree five.
2. B has the two AB incidences and one BC incidence, giving three. C has BC and AC, giving two.
3. The ordered vector is (5,3,2), whose sum ten equals twice the five edge occurrences.

</details>
