# Project along a specified nonorthogonal complement

*Medium · [Linear algebra problems](index.md)*

Work over $\mathbb R$. Coordinates are dimensionless and ordered as stated. Let $U=\operatorname{span}((1,1,0),(0,1,1))$ and $W=\operatorname{span}(1,0,1)$ in $\mathbb R^3$. For $v=(1,2,3)$ find its $W$ component in the direct-sum decomposition $v=u+w$, $u\in U$, $w\in W$.

```answer
{"answer":{"kind":"vector","expected":["1","0","1"],"checker_scope":"Only the requested exact finite answer is checked; explanatory reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The functional $x-y+z$ vanishes on $U$.

</details>

<details>
<summary>Hint 2</summary>

Evaluate that functional on $v$ and on a generator of $W$ to determine the component coefficient.

</details>

<details>
<summary>Worked solution</summary>

An oblique component is determined by its complementary kernel.

1. The displayed generators of $U$ are independent and satisfy $x-y+z=0$, so they span that plane.
2. The functional has value two on both $v$ and $(1,0,1)$, forcing coefficient one for the $W$ component.
3. Thus $w=(1,0,1)$ and $v-w=(0,2,2)$ lies in $U$. The complement is direct because the functional is nonzero on the generator of $W$.

</details>
