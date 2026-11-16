# Count roots in a half-plane

*Medium · [Complex analysis problems](index.md)*

How many roots of $z^5=32$ lie in the open right half-plane $\operatorname{Re}z>0$?

```answer
{"answer":{"kind":"integer","expected":3,"checker_scope":"Exact requested complex value, polynomial, coordinate list or count only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Find their common modulus and equally spaced arguments.

</details>

<details>
<summary>Hint 2</summary>

Decide which root angles have strictly positive cosine.

</details>

<details>
<summary>Worked solution</summary>

Root geometry turns the half-plane condition into an angle test.

1. The five roots have modulus $2$ and arguments $2\pi k/5$, $k=0,1,2,3,4$.
2. Positive real part occurs for $k=0,1,4$, with angles equivalent to $0$ and $\pm2\pi/5$.
3. The other two roots have negative real part, so the required count is $3$.

</details>
