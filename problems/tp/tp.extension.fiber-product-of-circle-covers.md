# Count components and degrees in a fiber product of power covers

*Medium · [Topology problems](index.md)*

Let $E=\{(z,w)\in S^1\times S^1:z^4=w^6\}$ with projection (z,w)↦z⁴=w⁶ to S¹. Return \[number of components of E, covering degree on each component\]. Work over complex unit circles with their usual topology.

```answer
{"answer":{"kind":"vector","expected":["2","12"],"checker_scope":"Only the requested exact result in the specified space, bases and coefficient conventions is checked; a personal argument is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The fiber is Z/4×Z/6, and one base loop adds (1,1).

</details>

<details>
<summary>Hint 2</summary>

Count orbits and their common length under that translation.

</details>

<details>
<summary>Worked solution</summary>

A fiber product of connected covers need not remain connected.

1. Each power map is a covering, so their fiber product is a 24-sheeted covering. Its monodromy on the product fiber translates both cyclic labels by one.
2. The translation returns to its start after lcm(4,6)=12 steps. Thus every orbit has length 12 and there are 24/12=2 orbits.
3. Each orbit gives one connected component, a 12-fold circle covering. The vector is \[2,12\]. Equivalently the difference parity of the two labels distinguishes the two orbits.

</details>
