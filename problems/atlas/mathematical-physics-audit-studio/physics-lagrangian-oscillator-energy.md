# Action, motion, and energy of an oscillator

*Difficulty 3 of 5 · [Mathematical physics audit studio](index.md) · exercise 1 of 10*

For $L(q,\dot q)=m\dot q^2/2-kq^2/2$ with $m>0$ and $k>0$, derive the Euler-Lagrange equation, derive the conserved energy from time-translation invariance, and check every term's SI units. State the endpoint condition used in the variation.

<details>
<summary>Hint 1</summary>

Compute $d(\partial L/\partial\dot q)/dt-\partial L/\partial q$

</details>

<details>
<summary>Hint 2</summary>

For an autonomous Lagrangian use $E=\dot q\,\partial L/\partial\dot q-L$

</details>

<details>
<summary>Hint 3</summary>

Variations vanish at the two time endpoints

</details>

<details>
<summary>Worked solution</summary>

We have $\partial L/\partial\dot q=m\dot q$ and $\partial L/\partial q=-kq$, so Euler-Lagrange gives $m\ddot q+kq=0$. Because $L$ has no explicit time dependence, $E=\dot q(m\dot q)-L=m\dot q^2/2+kq^2/2$. Along a solution, $dE/dt=\dot q(m\ddot q+kq)=0$. Mass times velocity squared has units $\mathrm{kg\,m^2/s^2}=\mathrm{J}$. Since $k$ has units $\mathrm{N/m}=\mathrm{kg/s^2}$, $kq^2$ also has units $\mathrm{kg\,m^2/s^2}$. The derivation varies paths with $\delta q=0$ at the initial and final times, so the integration-by-parts boundary term vanishes. Stationary action is not being asserted to be a global minimum.

**Answer.** $m\ddot q+kq=0$ and $E=m\dot q^2/2+kq^2/2$ is conserved; both energy terms are joules, with fixed-endpoint variations.

</details>

*Tags: classical mechanics, Euler-Lagrange, Noether energy, units*
