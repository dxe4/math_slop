# Density after a positive rescaling

*Medium · [Probability problems](index.md)*

Let $X$ be uniform on $[0,2]$ and set $Y=3X$. What is the constant density value of $Y$ on the interior of its support?

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":6},"checker_scope":"Checks the constant density value almost everywhere on the transformed support only."}}
```

<details>
<summary>Hint 1</summary>

Find the image of the original support under the scale map.

</details>

<details>
<summary>Hint 2</summary>

The inverse map has derivative $1/3$. Multiply the old density evaluated at the inverse image by this Jacobian factor.

</details>

<details>
<summary>Worked solution</summary>

Rescaling the support requires the inverse-Jacobian density factor.

1. The map sends $[0,2]$ to $[0,6]$, and its inverse is $x=y/3$.
2. For $0<y<6$, $f_Y(y)=f_X(y/3)|dx/dy|=(1/2)(1/3)=1/6$.
3. The density is zero outside $[0,6]$ and integrates to $(1/6)6=1$. Endpoint density values may be assigned arbitrarily without changing the law.

The inverse Jacobian is $1/3$, so the new density is $(1/2)(1/3)=1/6$ on $[0,6]$.

</details>
