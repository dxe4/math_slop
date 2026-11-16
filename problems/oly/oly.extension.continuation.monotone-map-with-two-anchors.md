# Split a monotone map at fixed values

*Medium · [Original olympiad-style problems](index.md)*

How many nondecreasing functions $f:\{1,\ldots,6\}\to\{1,2,3,4\}$ satisfy $f(2)=2$ and $f(5)=3$?

```answer
{"answer":{"kind":"integer","expected":"12","checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

The first and last values have separate two-element ranges.

</details>

<details>
<summary>Hint 2</summary>

The middle two values form a nondecreasing pair chosen from two and three.

</details>

<details>
<summary>Worked solution</summary>

Factor the count across anchored monotone blocks.

1. The first value is one or two, and the last is three or four.
2. The middle pair is $(2,2),(2,3)$ or $(3,3)$. Each choice is compatible with the anchors.
3. The independent choices give $2\cdot3\cdot2=12$ functions.

</details>
