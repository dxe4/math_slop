# Separate connectedness from path connectedness in the deleted comb

*Hard · [Topology problems](index.md)*

In the Euclidean subspace $C=((0,1]\times\{0\})\cup\bigcup_{n\ge1}(\{1/n\}\times[0,1])\cup(\{0\}\times(0,1])$, prove that C is connected but has exactly two path components. A path is a continuous map from the usual closed unit interval.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic verdict, grade or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

First use the horizontal base and positive teeth as one connected set, then take its closure inside C.

</details>

<details>
<summary>Hint 2</summary>

For a purported path leaving the vertical axis, examine the connected time interval on which its height stays positive; its horizontal coordinate then lies in a totally disconnected set.

</details>

<details>
<summary>Model proof</summary>

Closure can join a connected set without supplying a path to its new points.

1. Let B be the horizontal base together with all teeth at x=1/n. Every point of B can travel down its tooth to the base and along the base, so B is path connected. Every point (0,y) with 0&lt;y≤1 is the limit of (1/n,y) in B. Thus C is the closure of B relative to C, and the closure-of-a-connected-set theorem makes C connected.
2. The set V={0}×(0,1\] is path connected, as is B, and they partition C. Suppose a path γ starts in V. Let J be the connected component containing time 0 of the relatively open set of times with positive height. While t∈J, its horizontal coordinate belongs to S={0}∪{1/n:n≥1}. Every connected subset of S is a singleton: between two distinct real values in S there is a missing real value that separates them. Hence the horizontal coordinate on J is constantly zero.
3. If J had a right endpoint b≤1 outside J, continuity would give γ(b)=(0,0), which is absent from C. Therefore the positive-height time component cannot terminate before the end of the path; if it includes the final time, the final horizontal coordinate remains zero as well.
4. No path from V can reach B. Since each of these two sets is path connected, they are exactly the two path components, although their union C is connected.

**Self-assessment rubric**

- Shows the positive teeth and base are path connected and dense in C.
- Uses connected time intervals and the total disconnectedness of S to force horizontal coordinate zero.
- Uses continuity and the missing origin to rule out exiting that interval and identifies both path components.

</details>
