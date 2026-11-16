# Locate an even number in its enumeration

*Easy · [Set theory](index.md)*

Let $N_{0}$={$0,1,2$,…} and E={$0,2,4$,…}. The enumeration f:$N_{0}\to E$ is $f(n)=2n$. At which index n does $14$ occur? 

```answer
{"answer":{"kind":"integer","expected":7,"checker_scope":"Exact stated finite structured answer only; explanations and general infinite claims are not automatically proof-checked."}}
```

<details>
<summary>Hint 1</summary>

Solve $2n=14$.

</details>

<details>
<summary>Hint 2</summary>

Indexing starts at zero, but $14$ is still reached by the integer solving that equation.

</details>

<details>
<summary>Worked solution</summary>

An inverse index formula helps show every target is reached.

1. The equation $2n=14$ gives $n=7$.
2. Checking $f(7)=2\times 7=14$ confirms the requested index.

</details>
