# Apply the inner function first

*Easy · [Foundations bridge](index.md)*

Let $f(x)=x+2$ and $g(x)=3x$, with real domains. Find $f(g(4))$.

```answer
{"answer":{"kind":"integer","expected":14,"checker_scope":"Checks only the exact stated structured result; explanation quality and general proof mastery are not assessed."}}
```

<details>
<summary>Hint 1</summary>

Start with the function immediately around the input.

</details>

<details>
<summary>Hint 2</summary>

Calculate $g(4)$, then use its output as the input to f.

</details>

<details>
<summary>Worked solution</summary>

Composition passes an output into the next input.

1. $g(4) = 3 \times  4 = 12$.
2. $f(12) = 12 + 2 = 14$.

</details>
