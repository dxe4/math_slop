# Maximize three squared differences on a simplex

*Hard · [Original olympiad-style problems](index.md)*

Nonnegative reals satisfy $a+b+c=1$. Find the maximum of $(a-b)^2(b-c)^2(c-a)^2$ as a rational number and describe equality. 

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":108},"checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

A positive common minimum can be subtracted and the remaining variables rescaled, increasing every nonzero difference.

</details>

<details>
<summary>Hint 2</summary>

On the boundary set the two nonzero variables to t and one minus t, then use $u=t(1-t)$.

</details>

<details>
<summary>Worked solution</summary>

Push the maximum to the boundary and optimize an exact cubic.

1. The objective is continuous on a compact simplex and has a positive value at some distinct triple. At a positive maximizer all variables cannot have positive minimum m: subtracting m and dividing by $1-3m$ preserves the sum and multiplies the positive objective by $(1-3m)^{-6}>1$.
2. Thus one variable is zero. The other two sum to one; writing their product u gives $0\le u\le1/4$ and objective $u^2(1-4u)$.
3. The identity $1/108-u^2(1-4u)=(u-1/6)^2(4u+1/3)$ proves the sharp upper bound.
4. Equality requires u one sixth, giving the two other entries $(1\pm1/\sqrt3)/2$. Both are positive and sum to one, so all permutations of this boundary triple attain the bound.

</details>
