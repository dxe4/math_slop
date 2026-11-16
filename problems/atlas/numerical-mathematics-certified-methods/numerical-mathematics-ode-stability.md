# Stable decay, unstable Euler steps

*Difficulty 2 of 5 · [Numerical mathematics and certified optimization](index.md) · exercise 11 of 16*

For `y'=-50y`, forward Euler has multiplier `1-50h`. Classify h=`0.03` and h=`0.05` by absolute stability and describe the numerical behavior despite exact exponential decay.

<details>
<summary>Hint 1</summary>

Absolute stability requires multiplier magnitude at most one

</details>

<details>
<summary>Hint 2</summary>

Inspect both sign and magnitude

</details>

<details>
<summary>Worked solution</summary>

At `h=0.03`, the multiplier is `1-1.5=-0.5`. Its magnitude is 0.5, so Euler is absolutely stable for this mode: values alternate sign while their magnitude halves each step. The sign oscillation is a numerical artifact because the exact positive solution decays without crossing zero. At `h=0.05`, the multiplier is `1-2.5=-1.5`; its magnitude exceeds one, so numerical values alternate and grow. The continuous problem remains exponentially stable. This example distinguishes stability of the differential equation from absolute stability of the discretization, and it also shows that stable does not mean qualitatively faithful in every respect.

**Answer.** h=0.03 is stable but sign-oscillatory; h=0.05 is unstable and grows while alternating.

</details>

*Tags: ode-numerics, absolute-stability, euler-method*
