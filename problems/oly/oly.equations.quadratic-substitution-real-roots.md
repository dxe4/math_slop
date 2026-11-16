# Separate substituted branches by real-root existence

*Hard · [Original olympiad-style problems](index.md)*

Find the product of all real solutions of $(x^2-3x+1)^2-(x^2-3x+1)-6=0$. Count each distinct solution once.

```answer
{"answer":{"kind":"integer","expected":"-2","checker_scope":"Exact short answer only; the complete argument remains a worked solution, not an automatically certified proof or contest result."}}
```

<details>
<summary>Hint 1</summary>

Introduce one variable for the repeated quadratic expression.

</details>

<details>
<summary>Hint 2</summary>

Not every root for the substituted variable need produce real x-values.

</details>

<details>
<summary>Worked solution</summary>

A quadratic substitution splits the quartic into two branches whose discriminants differ.

1. Set t=x^2-3x+1. Then $t^2-t-6=(t-3)(t+2)=0$.
2. The branch t=3 gives $x^2-3x-2=0$, with two distinct real roots. The branch t=-2 gives $x^2-3x+3=0$, with negative discriminant.
3. Only the first pair contributes, and its root product is $-2$.

</details>
