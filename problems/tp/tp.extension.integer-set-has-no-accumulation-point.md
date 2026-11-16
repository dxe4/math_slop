# Distinguish an infinite closed discrete set from a convergent sequence

*Easy · [Topology problems](index.md)*

In the usual real line, find the set of accumulation points of $\mathbb Z$. An accumulation point requires every neighborhood to meet another point of the set.

```answer
{"answer":{"kind":"set","expected":[],"checker_scope":"Only the requested finite set, interval or count in the stated topology is checked; a personal argument is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

At an integer choose an interval shorter than the spacing to its neighbors.

</details>

<details>
<summary>Hint 2</summary>

At a noninteger choose an interval missing the closed integer set.

</details>

<details>
<summary>Worked solution</summary>

Infinitude alone does not produce a finite accumulation point.

1. Each integer has a radius-below-one neighborhood meeting the integer set only at itself.
2. A noninteger lies strictly between consecutive integers and has a sufficiently small interval avoiding both endpoints and every other integer.
3. Thus no real input is an accumulation point and the requested set is empty.

</details>
