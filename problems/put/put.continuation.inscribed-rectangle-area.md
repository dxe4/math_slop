# Inscribed rectangle area

*Medium · [Original Putnam-style training](index.md)*

An axis-aligned rectangle has vertices $(\pm x,\pm y)$ on the unit circle, where $x,y\ge0$. Find its maximum area.

```answer
{"answer":{"kind":"integer","expected":"2","checker_scope":"Only the exact bounded answer is checked; the argument and assumptions are not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Express area in terms of $xy$ and use $x^2+y^2=1$.

</details>

<details>
<summary>Hint 2</summary>

Equality in $2xy\le x^2+y^2$ identifies the square.

</details>

<details>
<summary>Worked solution</summary>

Taking $x=y=1/\sqrt2$ attains area $2$.

1. The rectangle area is $4xy$, while each vertex condition is $x^2+y^2=1$.
2. From $(x-y)^2\ge0$, $2xy\le1$, so area is at most $2$.
3. Taking $x=y=1/\sqrt2$ attains area $2$.

</details>
