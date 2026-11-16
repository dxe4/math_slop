# Finish a one-to-one matching

*Easy · [Set theory](index.md)*

To demonstrate equal finite sizes, pair {a,b,c,d} bijectively with $\{1,2,3,4\}$. The pairs $a\to 2, b\to 4, c\to 1$ are fixed. Which number must be paired with d?

```answer
{"answer":{"kind":"integer","expected":3,"checker_scope":"Exact stated finite structured answer only; explanations and general infinite claims are not automatically proof-checked."}}
```

<details>
<summary>Hint 1</summary>

A bijective matching must use every object on both sides exactly once.

</details>

<details>
<summary>Hint 2</summary>

Only one number remains unused on the right.

</details>

<details>
<summary>Worked solution</summary>

A complete bijective matching witnesses equal finite cardinality.

1. The numbers already matched are $2,4,1$, leaving $3$.
2. Pair d with $3$; every object on each side is now matched exactly once.

</details>
