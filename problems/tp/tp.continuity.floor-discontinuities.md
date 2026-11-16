# Locate discontinuities of a floor map

*Medium · [Topology problems](index.md)*

For $f:\mathbb R\to\mathbb R$ given by $f(x)=\lfloor x\rfloor$, which points of $\{-2,-1/2,0,1/2,2\}$ are discontinuities? Enter the actual points.

```answer
{"answer":{"kind":"set","expected":[-2,0,2],"checker_scope":"Exact finite set, interval, distance or count requested in the stated topology only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Between consecutive integers the function is locally constant.

</details>

<details>
<summary>Hint 2</summary>

At an integer, compare values just to its left with its value there.

</details>

<details>
<summary>Worked solution</summary>

The floor function jumps precisely at integer points.

1. At a noninteger point, a sufficiently small neighborhood lies between two consecutive integers, where the floor value is constant.
2. At an integer $k$, the function has value $k$, while points immediately to its left have value $k-1$, so it is discontinuous.
3. The listed integer points are exactly $\{-2,0,2\}$.

</details>
