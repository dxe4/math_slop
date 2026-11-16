# Separate real completeness from rational nested intervals

*Hard · [Real analysis](index.md)*

For each n&gt;=1 let $a_n=\lfloor10^n\sqrt2\rfloor/10^n$ and b\_n=a\_n+10^(-n). Show the intervals \[a\_n,b\_n\] have rational endpoints, are nested, and have real intersection {sqrt(2)}, while their intersections with the rationals have empty common intersection. You may use irrationality of sqrt(2).

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

The floor bounds trap the root in each decimal cell.

</details>

<details>
<summary>Hint 2</summary>

The next decimal cell is contained in the previous one, and cell lengths tend to zero.

</details>

<details>
<summary>Model proof</summary>

Nested rational-endpoint intervals need not share a rational point.

1. Each endpoint is rational and the root lies between them. Write floor(10^(n+1)sqrt(2))=10 floor(10^n sqrt(2))+d with d in {0,...,9}; then the next cell lies inside the previous cell.
2. Any real point in every interval has distance at most 10^(-n) from sqrt(2) for every n, so its distance is zero. Conversely the root belongs to every interval, giving that singleton real intersection.
3. The root is irrational, so no rational belongs to all cells. Nestedness and shrinking positive lengths therefore do not repair the lack of rational completeness.

**Self-assessment rubric**

- Verify rational endpoints, containment of the root and decimal-cell nesting.
- Use shrinking lengths to identify the unique real common point.
- Use irrationality to explain the empty rational intersection.

</details>
