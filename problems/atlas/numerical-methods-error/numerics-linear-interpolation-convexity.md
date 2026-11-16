# Interpolate an exponential

*Difficulty 3 of 5 · [Numerical methods with error awareness](index.md) · exercise 4 of 4*

Use linear interpolation between (0,1) and (1,e) to approximate $e^{1/4}$. Give the exact interpolating expression and determine whether it overestimates or underestimates the true value.

<details>
<summary>Hint 1</summary>

At $x=1/4$, travel one quarter of the way from 1 to e

</details>

<details>
<summary>Hint 2</summary>

The function $e^x$ is strictly convex

</details>

<details>
<summary>Worked solution</summary>

The secant interpolant is $L(x)=1+x(e-1)$. Thus $L(1/4)=1+(e-1)/4=(3+e)/4\approx 1.4296$. The true value is $e^{1/4}\approx 1.2840$. Because the exponential is strictly convex, its graph lies below the chord joining two distinct points, so interior linear interpolation overestimates it. The numerical comparison agrees with that geometric prediction.

**Answer.** $(3+e)/4\approx 1.4296$, an overestimate of $e^{1/4}\approx 1.2840$.

</details>

*Tags: linear interpolation, convexity, error direction*
