# Find an irrational maximum by a product substitution

*Hard · [Original olympiad-style problems](index.md)*

For nonnegative $x+y=2$, the maximum of $1/(1+x^2)+1/(1+y^2)$ has form $a+b\sqrt2$. Enter $[a,b]$ and justify attainment.

```answer
{"answer":{"kind":"vector","expected":["1/2","1/2"],"checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

Use $p=xy\in[0,1]$ to write the objective as $(6-2p)/(p^2-2p+5)$.

</details>

<details>
<summary>Hint 2</summary>

The sharp candidate M satisfies $M(p^2-2p+5)-(6-2p)=M(p-(3-2\sqrt2))^2$.

</details>

<details>
<summary>Worked solution</summary>

Construct a nonnegative quadratic gap with a feasible equality product.

1. The sum constraint gives the stated rational function of p; its denominator is positive on the entire domain.
2. Put $M=(1+\sqrt2)/2$ and $p_0=3-2\sqrt2$. Direct expansion gives the gap identity in the second hint.
3. Thus the objective is at most M. The equality product is strictly between zero and one, so there are positive real x,y with sum two and product $p_0$.
4. Those are $1\pm\sqrt{1-p_0}$ and satisfy nonnegativity. They attain the bound, proving $[a,b]=[1/2,1/2]$ rather than only a supremum.

</details>
