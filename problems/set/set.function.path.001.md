# One input cannot receive two outputs

*Easy · [Set theory](index.md)*

Let $D=\{a,b\}$, $C=\{0,1\}$, and $R=\{(a,0),(a,1),(b,0)\}$. A relation on $D\times C$ is total when every input has at least one output, and single\_valued when every input has at most one output. Enter the set of all these properties that hold for $R$. Both are needed to define a function on all of $D$.

```answer
{"answer":{"kind":"set","expected":"{total}","checker_scope":"Checks the complete displayed exact mathematical answer under the original finite givens. Any written explanation remains separate from this bounded automatic result."}}
```

<details>
<summary>Hint 1</summary>

List the outputs attached to each input.

</details>

<details>
<summary>Hint 2</summary>

Do not confuse using every codomain value with assigning at most one output to an input.

</details>

<details>
<summary>Worked solution</summary>

A total single-valued relation is a function on its stated domain.

1. The input $a$ has outputs $0,1$, while $b$ has output $0$.
2. Every input has an output, so total holds; the two outputs at $a$ violate single\_valued.
3. The property set is $\{\mathrm{total}\}$, so this relation does not define a function on all of $D$.

</details>
