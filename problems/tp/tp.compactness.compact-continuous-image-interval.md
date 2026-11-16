# Find the image of a compact interval

*Easy · [Topology problems](index.md)*

Find the exact image of the compact interval $[1,2]$ under the map $f(x)=1/x$. Enter an interval.

```answer
{"answer":{"kind":"interval","expected":"[1/2, 1]","checker_scope":"Exact finite set, interval, distance or count requested in the stated topology only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The map is continuous on the whole domain and decreases there.

</details>

<details>
<summary>Hint 2</summary>

Evaluate the endpoints in their image order, preserving inclusion.

</details>

<details>
<summary>Worked solution</summary>

A continuous monotone map takes this interval onto the interval between its endpoint values.

1. The values decrease from $f(1)=1$ to $f(2)=1/2$.
2. Continuity gives every intermediate value, and both endpoint values occur.
3. The exact image is $[1/2,1]$, a compact interval.

</details>
