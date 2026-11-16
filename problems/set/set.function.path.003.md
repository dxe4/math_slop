# An input cannot be forgotten

*Easy · [Set theory](index.md)*

Let $D=\{p,q,r\}$, $C=\{1,2\}$, and $R=\{(p,1),(q,2)\}$, with no other pairs. A relation is total when every input in $D$ has at least one output, and single\_valued when each input has at most one output. Enter the set of all these properties that hold. Both are needed for a function on all of $D$.

```answer
{"answer":{"kind":"set","expected":"{single_valued}","checker_scope":"Checks the complete displayed exact mathematical answer under the original finite givens. Any written explanation remains separate from this bounded automatic result."}}
```

<details>
<summary>Hint 1</summary>

Include every declared domain element when checking totality.

</details>

<details>
<summary>Hint 2</summary>

Having no output differs from having two outputs.

</details>

<details>
<summary>Worked solution</summary>

A function must cover its whole declared domain exactly once.

1. The input $r$ has no output, so total fails.
2. No input has more than one output, so single\_valued holds.
3. The requested set is $\{\mathrm{single\_valued}\}$. The missing value at $r$ prevents a function on all of $D$.

</details>
