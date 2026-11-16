# List the fourth roots of unity

*Medium · [Complex analysis problems](index.md)*

List the four solutions of $z^4=1$ in increasing argument order $0,\pi/2,\pi,3\pi/2$. Enter a four-row matrix whose rows are $[\operatorname{Re}z,\operatorname{Im}z]$.

```answer
{"answer":{"kind":"matrix","expected":[[1,0],[0,1],[-1,0],[0,-1]],"checker_scope":"Exact requested complex value, polynomial, coordinate list or count only; personal reasoning is not automatically graded.","rows":4,"columns":2}}
```

<details>
<summary>Hint 1</summary>

The roots have unit modulus and equally spaced arguments.

</details>

<details>
<summary>Hint 2</summary>

Follow the declared angle ordering instead of choosing an arbitrary root order.

</details>

<details>
<summary>Worked solution</summary>

Polar root extraction supplies every root once in the requested order.

1. The arguments are $2\pi k/4$ for $k=0,1,2,3$.
2. The corresponding complex numbers are $1,i,-1,-i$.
3. The coordinate rows are $[1,0]$, $[0,1]$, $[-1,0]$, $[0,-1]$.

</details>
