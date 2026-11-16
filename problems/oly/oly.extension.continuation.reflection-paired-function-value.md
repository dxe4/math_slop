# Solve a reflected functional linear system

*Medium · [Original olympiad-style problems](index.md)*

For every real $x$, a function satisfies $f(x)+2f(-x)=3x+6$. Find $f(7)$.

```answer
{"answer":{"kind":"integer","expected":"-19","checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

Write the equation again at the negative argument.

</details>

<details>
<summary>Hint 2</summary>

Eliminate the reflected value from the two equations.

</details>

<details>
<summary>Worked solution</summary>

Use the involution of the input to obtain two independent equations.

1. At the negative argument, $f(-x)+2f(x)=-3x+6$.
2. Twice this second equation minus the first gives $3f(x)=-9x+6$.
3. Thus $f(x)=-3x+2$, so $f(7)=-19$.

</details>
