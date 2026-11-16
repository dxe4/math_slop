# Move a supplied point under a graph translation

*Easy · [Foundations bridge](index.md)*

The graph of f contains (−1,4). For $g(x)=f(x-3)+2$, return the corresponding translated graph point \[x,y\].

```answer
{"answer":{"kind":"vector","expected":["2","6"],"checker_scope":"Only the requested exact result in the stated domain and units is checked; the reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Choose x so x−3 equals the old input.

</details>

<details>
<summary>Hint 2</summary>

Then apply the outside vertical addition to the old output.

</details>

<details>
<summary>Worked solution</summary>

Inside and outside changes act on different coordinates.

1. To reuse input −1 solve x−3=−1, giving x=2.
2. The output becomes 4+2=6.
3. The translated point is \[2,6\].

</details>
