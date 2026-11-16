# Early epidemic growth from an SIR model

*Difficulty 4 of 5 · [Applied modeling and decisions](index.md) · exercise 3 of 4*

In an SIR model, $I'=\beta SI/N-\gamma I$. With $N=1000$, $S(0)=900$, $\beta=0.3/day$, and $\gamma=0.1/day$, determine whether infections initially grow and estimate their early doubling time if S is treated as nearly constant.

<details>
<summary>Hint 1</summary>

Factor $I'=I(\beta S/N-\gamma)$

</details>

<details>
<summary>Hint 2</summary>

For early exponential growth, doubling time is ln 2 divided by the growth rate

</details>

<details>
<summary>Worked solution</summary>

Initially the per-infective growth rate is $\beta S/N-\gamma=0.3\cdot 900/1000-0.1=0.27-0.1=0.17$ per day, which is positive, so infections initially grow. Treating $S\approx 900$ for a short early interval gives $I(t)\approx I(0)e^{0.17t}$, with doubling time $\ln(2)/0.17\approx 4.08$ days. This is only an early approximation: as susceptible people are depleted or behavior changes, $S$ and possibly the parameters change, so constant exponential doubling cannot be projected indefinitely.

**Answer.** Initial growth rate 0.17/day; infections grow, with early doubling time about 4.08 days.

</details>

*Tags: SIR model, epidemiology, doubling time*
