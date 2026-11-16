# Invert a circle without inverting its center alone

*Medium · [Original olympiad-style problems](index.md)*

Under inversion $X\mapsto X/|X|^2$ about the unit circle centered at the origin, the circle with center $(5,0)$ and radius $3$ maps to another circle. Give $[h,\rho]$, its center coordinate and radius, so the new center is $(h,0)$.

```answer
{"answer":{"kind":"vector","expected":["5/16","3/16"],"checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

Substitute $x=u/(u^2+v^2)$ and $y=v/(u^2+v^2)$ into $(x-5)^2+y^2=9$.

</details>

<details>
<summary>Hint 2</summary>

After multiplying out, complete the square in the new coordinates.

</details>

<details>
<summary>Worked solution</summary>

The image of a circle is determined by its full equation, not the image of its original center.

1. The original equation is $x^2+y^2-10x+16=0$. Because the original circle avoids the inversion center, all its points have images and the inverse substitution is valid.
2. Writing $s=u^2+v^2>0$, substitution gives $1/s-10u/s+16=0$, or $16(u^2+v^2)-10u+1=0$.
3. Completion of the square gives $(u-5/16)^2+v^2=9/256$. The resulting circle avoids the origin too, so the equation represents the full image, with $h=5/16$ and $\rho=3/16$.

</details>
