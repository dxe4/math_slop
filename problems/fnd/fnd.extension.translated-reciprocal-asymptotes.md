# Identify the two shifts in a reciprocal graph

*Medium · [Foundations bridge](index.md)*

For $g(x)=1/(x-2)-3$, return \[vertical asymptote x-coordinate, horizontal asymptote y-coordinate\]. Use the usual real graph.

```answer
{"answer":{"kind":"vector","expected":["2","-3"],"checker_scope":"Only the requested exact result in the stated domain and units is checked; the reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Find where the reciprocal denominator tends to zero.

</details>

<details>
<summary>Hint 2</summary>

For large positive or negative inputs, the reciprocal term tends to zero and leaves the outside constant.

</details>

<details>
<summary>Worked solution</summary>

Inside and outside shifts relocate different asymptotes.

1. The denominator vanishes at x=2 and no cancellation removes it, giving vertical asymptote x=2.
2. As \|x\| grows, 1/(x−2) tends to zero, so g(x) approaches −3.
3. The asymptote coordinate vector is \[2,−3\].

</details>
