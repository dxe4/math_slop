# Read the composition from right to left

*Easy · [Set theory](index.md)*

Let f:$\{1,2\}\to \{3,4\}$ have $f(1)=4, f(2)=3$. Let g:$\{3,4\}\to \{7,9\}$ have $g(3)=9, g(4)=7$. Find (g∘f)$(2)$.

```answer
{"answer":{"kind":"integer","expected":9,"checker_scope":"Exact stated finite structured answer only; explanations and general infinite claims are not automatically proof-checked."}}
```

<details>
<summary>Hint 1</summary>

Apply f to the input $2$ before applying g.

</details>

<details>
<summary>Hint 2</summary>

The output of f becomes the input of g.

</details>

<details>
<summary>Worked solution</summary>

Composition passes one map’s output into the next map.

1. First $f(2)=3$.
2. Then g(3)=9, so (g∘f)$(2)=9$.

</details>
