# Find a common existential witness

*Easy · [Foundations bridge](index.md)*

Let $D=\{0,1,2\}$. Return every y in D for which $y\geq x$ for every x in D.

```answer
{"answer":{"kind":"finite_integer_set","expected":[2],"checker_scope":"Checks only the exact stated structured result; explanation quality and general proof mastery are not assessed."}}
```

<details>
<summary>Hint 1</summary>

The same y must work for every x.

</details>

<details>
<summary>Hint 2</summary>

In particular, it must work when x is the largest member of D.

</details>

<details>
<summary>Worked solution</summary>

A common witness must satisfy all the universal requirements simultaneously.

1. Any qualifying y must be at least two, because $x=2$ is allowed.
2. Within D, only $y=2$ meets this condition, and it also works for $x=0$ and $x=1$. Return $\{2\}$.

</details>
