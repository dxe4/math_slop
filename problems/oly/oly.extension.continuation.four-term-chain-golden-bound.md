# Find the sharp norm bound of a four-term chain

*Hard · [Original olympiad-style problems](index.md)*

Reals satisfy $x^2+y^2+z^2+w^2=1$. The maximum of $xy+yz+zw$ is $a+b\sqrt5$. Enter $[a,b]$ and describe an attaining vector.

```answer
{"answer":{"kind":"vector","expected":["1/4","1/4"],"checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

Try a positive constant phi satisfying $\phi-1/\phi=1$.

</details>

<details>
<summary>Hint 2</summary>

Complete squares at the two end variables and leave a square of the difference between the middle variables.

</details>

<details>
<summary>Worked solution</summary>

Discover a weighted sum of squares with a zero mode.

1. Let $\phi=(1+\sqrt5)/2$. The exact identity is $\phi(x^2+y^2+z^2+w^2)-2(xy+yz+zw)=\phi(x-y/\phi)^2+\phi(w-z/\phi)^2+(y-z)^2$.
2. The right side is nonnegative, giving maximum at most $\phi/2=(1+\sqrt5)/4$.
3. Equality requires $y=z$, $x=w=y/\phi$. A nonzero vector proportional to $(1,\phi,\phi,1)$ can be normalized to squared norm one and meets all these conditions.
4. Thus the bound is attained, and its two positive coefficients are both one fourth. Negating the whole equality vector also preserves the objective.

</details>
