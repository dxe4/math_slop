# Find consecutive positive triangle legs

*Medium · [Original olympiad-style problems](index.md)*

Find the positive integer $x$ for which $x,x+1,x+2$ are the side lengths of a right triangle.

```answer
{"answer":{"kind":"integer","expected":"3","checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

The largest length must be the hypotenuse.

</details>

<details>
<summary>Hint 2</summary>

Expand Pythagoras and factor the resulting quadratic, then apply positivity.

</details>

<details>
<summary>Worked solution</summary>

Combine the order condition with an exact quadratic.

1. Pythagoras gives $x^2+(x+1)^2=(x+2)^2$.
2. Simplification gives $x^2-2x-3=(x-3)(x+1)=0$.
3. Only $x=3$ is positive; the lengths $3,4,5$ indeed form a nondegenerate right triangle.

</details>
