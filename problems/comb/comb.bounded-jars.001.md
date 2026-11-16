# Count a small constrained allocation

*Medium · [Combinatorics](index.md)*

Place four identical counters into three labeled jars $A,B,C$. Empty jars are allowed, and no jar may hold more than two. How many allocation triples exist? You may list them.

```answer
{"answer":{"kind":"integer","expected":6,"checker_scope":"Finite exhaustive counting of bounded triples; stars-and-bars proficiency is not claimed."}}
```

<details>
<summary>Hint 1</summary>

List sorted occupancy patterns first, then account for labeled jars.

</details>

<details>
<summary>Hint 2</summary>

The only sorted patterns are $(0,2,2)$ and $(1,1,2)$.

</details>

<details>
<summary>Worked solution</summary>

A small complete case split can count constraints without advanced formulas.

1. If a jar is empty, the other two must each contain two: three positions for the empty jar.
2. If all jars are nonempty, one holds two and the others one: three positions for the jar holding two.
3. These cases are disjoint and exhaustive, so there are $3+3=6$ allocations.

Numeric controls and a complete list of the six triples provide the same mathematical information.

</details>
