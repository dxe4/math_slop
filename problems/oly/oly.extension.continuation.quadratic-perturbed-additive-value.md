# Determine a function value without assuming continuity

*Medium · [Original olympiad-style problems](index.md)*

A function $f:\mathbb R\to\mathbb R$ satisfies $f(x+y)=f(x)+f(y)+2xy$ for all real $x,y$, and $f(1)=4$. Find $f(5)$.

```answer
{"answer":{"kind":"integer","expected":"40","checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

Subtract the square function to obtain an additive function.

</details>

<details>
<summary>Hint 2</summary>

Additivity determines its integer values from its value at one, even without continuity.

</details>

<details>
<summary>Worked solution</summary>

Remove the quadratic correction and use only an integer consequence.

1. Set $g(x)=f(x)-x^2$. The identity gives $g(x+y)=g(x)+g(y)$.
2. Here $g(1)=3$, so repeated addition gives $g(5)=15$.
3. Thus $f(5)=25+15=40$. No global claim that every additive real function is linear was needed.

</details>
