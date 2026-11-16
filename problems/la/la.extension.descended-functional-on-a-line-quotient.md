# Descend a functional and express it in quotient coordinates

*Medium · [Linear algebra problems](index.md)*

Work over $\mathbb R$ in finite dimension; all coordinate entries are dimensionless. Let $U=\operatorname{span}(1,1,1)\subset\mathbb R^3$ and $f(x,y,z)=2x-y-z$. In the quotient basis $([e_1],[e_2])$, return the coefficient vector of the induced functional on $\mathbb R^3/U$.

```answer
{"answer":{"kind":"vector","expected":["2","-1"],"checker_scope":"Only the requested exact finite object is checked; the derivation does not receive an automatic proof verdict."}}
```

<details>
<summary>Hint 1</summary>

First check that f vanishes on U.

</details>

<details>
<summary>Hint 2</summary>

Check the cosets form a basis before evaluating the descended functional on them.

</details>

<details>
<summary>Worked solution</summary>

A quotient functional exists precisely because the old functional ignores the removed direction.

1. $f(1,1,1)=0$, so adding a vector of $U$ does not change the value and the functional descends.
2. The displayed cosets are independent: a vector $(a,b,0)$ in $U$ must have its common coordinate zero, forcing $a=b=0$. They are a basis of the two-dimensional quotient.
3. The descended values on those cosets are two and minus one, giving coefficient vector $[2,-1]$.

</details>
