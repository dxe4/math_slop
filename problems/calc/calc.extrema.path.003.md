# Derivative signs and extrema: reason from complete sign information

*Medium · [Calculus](index.md)*

A function is continuous on $[-2,2]$, with $f^{\prime}<0$ on $(-2,0)$, $f^{\prime}>0$ on $(0,2)$, and $f(-2)=3$, $f(0)=1$, $f(2)=4$. Return the global minimum location in xmin and the global maximum location in xmax.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"xmin":"0","xmax":"2"},"checker_scope":"Checks the complete displayed exact mathematical answer under the original finite givens. Any written explanation remains separate from this bounded automatic result."}}
```

<details>
<summary>Hint 1</summary>

Use the derivative signs to locate the bottom of the two monotone pieces.

</details>

<details>
<summary>Hint 2</summary>

Compare the supplied endpoint values for the global maximum.

</details>

<details>
<summary>Worked solution</summary>

Monotonicity locates the candidates; values select the global extrema.

1. The function decreases to $0$ and increases after $0$, so the global minimum occurs at $x=0$.
2. The only possible global maxima are the two endpoints.
3. Their values are $3$ and $4$, so the global maximum occurs at $x=2$.

</details>
