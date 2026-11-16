# Two-step recurrence with a nonzero correction

*Medium · [Combinatorics](index.md)*

Let b0=$2$,b1=$3$ and $b_{n}=b_{n-1}+b_{n-2}$ for $n\geq 2$. Write $B(x)=(N0+N1x)/(1+D1x+D2x^{2})$. Enter N0,N1,D1,D2.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"N0":2,"N1":1,"D1":-1,"D2":-1},"checker_scope":"Exact coefficients in a supplied normalized rational form; not a general proof checker."}}
```

<details>
<summary>Hint 1</summary>

Sum the left side as $B-2-3x$.

</details>

<details>
<summary>Hint 2</summary>

The earlier-term sums are $x(B-2)$ and x²B.

</details>

<details>
<summary>Worked solution</summary>

Boundary terms determine the numerator of a recurrence generating function.

1. The recurrence sums to $B-2-3x=x(B-2)+x$²B.
2. Thus ($1-x-x^{2}$)$B=2+x$, giving $(N0,N1,D1,D2)=(2,1,-1,-1)$.

</details>
