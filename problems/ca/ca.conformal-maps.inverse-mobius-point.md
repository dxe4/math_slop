# Invert one Mobius value

*Medium · [Complex analysis problems](index.md)*

For $T(z)=(z-1)/(z+1)$, find the point mapped to $1/3$. The domain excludes $z=-1$.

```answer
{"answer":{"kind":"complex","expected":"2","checker_scope":"Exact requested complex value, polynomial, coefficient, radius or domain only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Cross-multiply only for a domain point, then solve the resulting linear equation.

</details>

<details>
<summary>Hint 2</summary>

Check the solution avoids the original pole.

</details>

<details>
<summary>Worked solution</summary>

A nonsingular Mobius equation gives a unique finite preimage here.

1. The equation is $(z-1)/(z+1)=1/3$, so $3z-3=z+1$.
2. Thus $2z=4$ and $z=2$.
3. This is not the pole, and $T(2)=1/3$, confirming the preimage.

</details>
