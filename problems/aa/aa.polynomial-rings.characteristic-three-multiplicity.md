# Separate distinct roots from multiplicity

*Hard · [Abstract algebra problems](index.md)*

How many distinct roots does $x^6+x^3+1$ have in an algebraic closure of $\mathbb F_3$?

```answer
{"answer":{"kind":"integer","expected":1,"checker_scope":"Exact stated finite group, polynomial or field answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

Characteristic three makes cubing a sum especially simple.

</details>

<details>
<summary>Hint 2</summary>

Seek a factorization as a repeated power before counting distinct roots.

</details>

<details>
<summary>Worked solution</summary>

A high-degree polynomial can be one repeated linear factor in positive characteristic.

1. In characteristic three, $(x-1)^3=x^3-1$.
2. Squaring gives $(x-1)^6=x^6-2x^3+1=x^6+x^3+1$, because $-2=1$ in the field.
3. Thus every root is a root of the linear polynomial $x-1$, and $1$ is indeed a root.
4. There is exactly $1$ distinct root, of multiplicity six.

</details>
