# Choose cancellation parameters in a nested Taylor limit

*Hard · [Calculus](index.md)*

Find real a,b making $L=\lim_{x\to0}[e^{\sin x}-1-x-a x^2-b x^3]/x^4$ finite, and find L. Return \[a,b,L\], proving the lower-order cancellations are necessary.

```answer
{"answer":{"kind":"vector","expected":["1/2","0","-1/8"],"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Expand sin x only as far as required for the fourth-order exponential coefficient.

</details>

<details>
<summary>Hint 2</summary>

Track contributions from its first through fourth powers separately.

</details>

<details>
<summary>Worked solution</summary>

Nested expansions can cancel an entire intermediate order, so coefficients must be combined before the limit is taken.

1. Let u=sin x=x−x³/6+O(x⁵). In eᵘ=1+u+u²/2+u³/6+u⁴/24+O(x⁵), the needed powers are u²=x²−x⁴/3+O(x⁶), u³=x³+O(x⁵) and u⁴=x⁴+O(x⁶).
2. Combining yields e^{sin x}=1+x+x²/2+0·x³+(−1/6+1/24)x⁴+O(x⁵)=1+x+x²/2−x⁴/8+O(x⁵).
3. A finite quotient by x⁴ requires its x² coefficient 1/2−a and its x³ coefficient −b to vanish. Otherwise a negative power remains and no finite two-sided limit exists.
4. Thus a=1/2,b=0, and the remaining quotient tends to −1/8. The vector is \[1/2,0,−1/8\].

</details>
