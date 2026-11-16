# Color every attachment of a unique cycle

*Medium · [Original olympiad-style problems](index.md)*

A connected simple graph on $8$ vertices has exactly one cycle, of length $5$. How many proper colorings with three labeled colors does it have?

```answer
{"answer":{"kind":"integer","expected":"240","checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

Every vertex outside the cycle belongs to a tree attached to it.

</details>

<details>
<summary>Hint 2</summary>

Color the five-cycle first, then add each tree vertex after its parent.

</details>

<details>
<summary>Worked solution</summary>

Separate the cyclic constraint from free tree extensions.

1. The three off-cycle vertices each have two color choices once their parent is colored, giving an extension factor of eight.
2. The five-cycle has thirty three-colorings. For a fixed first color, let same and different endpoint counts start as one and zero; extending updates them to different and twice same plus different. At length five the different count is ten, so closing the cycle gives three times ten.
3. Thus the full count is $30\cdot8=240$, independent of the shapes of the attached trees. No additional cycle can occur under the hypothesis.

</details>
