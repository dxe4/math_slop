# Nondimensionalize a forced removal model

*Difficulty 3 of 5 · [Applied modeling and decision audit studio](index.md) · exercise 1 of 12*

A concentration C with units mass per volume obeys $dC/dt=J/V-kC$, where J is mass per time, V is volume, and k is inverse time. Derive natural concentration and time scales, obtain a dimensionless equation, solve it, and state one omitted-mechanism boundary.

<details>
<summary>Hint 1</summary>

Balance source J/V against removal kC

</details>

<details>
<summary>Hint 2</summary>

Use $\tau=kt$

</details>

<details>
<summary>Hint 3</summary>

The normalized equilibrium should be one

</details>

<details>
<summary>Worked solution</summary>

The equilibrium balance $J/V=kC$ gives concentration scale $C_*=J/(kV)$, which has mass per volume. Use $c=C/C_*$ and $\tau=kt$. Since $dC/dt=C_*k\,dc/d\tau=(J/V)dc/d\tau$, substitution gives $dc/d\tau=1-c$. Its solution is $c(\tau)=1+[c(0)-1]\exp(-\tau)$. The collapse shows $k$ sets the time scale and $J/(kV)$ the level. It assumes constant volume, source, and first-order removal; saturation, mixing delay, or time-varying forcing would change the model.

**Answer.** $C_*=J/(kV)$, $\tau=kt$, $dc/d\tau=1-c$, and $c=1+[c(0)-1]e^{-\tau}$, conditional on constant well-mixed first-order dynamics.

</details>

*Tags: dimensional analysis, nondimensionalization, balance law, units*
