# State the scope of a curl-free potential test

*Easy · [Calculus](index.md)*

$F$ is $C^1$ and curl-free on a connected open planar region, with no condition ruling out holes. Do these facts alone guarantee a single-valued potential? Return {guaranteed} or {not\_guaranteed}.

```answer
{"answer":{"kind":"set","expected":["not_guaranteed"],"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Curl-free is a local differential condition.

</details>

<details>
<summary>Hint 2</summary>

A nonzero period around a hole can obstruct a global potential.

</details>

<details>
<summary>Worked solution</summary>

Connectedness alone does not replace the needed global domain condition.

1. Curl-free fields on regions with holes may have nonzero closed-curve work.
2. A single-valued potential would force every such work integral to vanish.
3. Thus a potential is {not\_guaranteed} by the stated facts alone.

</details>
