# Bound a difference from two magnitudes

*Medium · [Real analysis](index.md)*

Real numbers x,y satisfy \|x\|=9/5 and \|y\|=2/5. Give the sharp lower and upper bounds for \|x−y\| over all choices of the signs of x and y. Enter lower and upper.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"lower":"7/5","upper":"11/5"},"checker_scope":"Checks numerical sharp bounds for this finite sign case. Proof construction is not assessed."}}
```

<details>
<summary>Hint 1</summary>

The reverse triangle inequality gives $||x|-|y||\leq |x-y|$.

</details>

<details>
<summary>Hint 2</summary>

The ordinary triangle inequality gives $|x-y|\leq |x|+|y|$. Check both sign configurations for attainment.

</details>

<details>
<summary>Worked solution</summary>

The reverse and ordinary triangle inequalities control the same distance from opposite sides.

1. The lower estimate is $|9/5-2/5|=7/5$, and the upper estimate is $9/5+2/5=11/5$.
2. Equal signs attain $7/5$, for example $x=9/5,y=2/5$.
3. Opposite signs attain $11/5$, for example $x=9/5,y=-2/5$. Thus both bounds are sharp.

</details>
