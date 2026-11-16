# Audit an epidemic invasion calculation

*Difficulty 4 of 5 · [Applied modeling and decision audit studio](index.md) · exercise 9 of 12*

For SIR equations $S'=-\beta SI/N$, $I'=\beta SI/N-\gamma I$, and $R'=\gamma I$, prove conservation and nonnegativity, then determine initial infection growth when $\beta=0.3/\text{day}$, $\gamma=0.1/\text{day}$, and $S_0/N=0.2$.

<details>
<summary>Hint 1</summary>

Add all three derivatives

</details>

<details>
<summary>Hint 2</summary>

Inspect each coordinate boundary

</details>

<details>
<summary>Hint 3</summary>

Linearize I' at the initial susceptible fraction

</details>

<details>
<summary>Worked solution</summary>

Adding equations gives $(S+I+R)'=0$, so total $N$ is conserved. At $S=0$, $S'=0$; at $I=0$, $I'=0$; at $R=0$ with nonnegative $I$, $R'=\gamma I\ge0$, so the vector field does not leave the nonnegative region. Initial infected growth rate is $\beta S_0/N-\gamma=0.3\cdot0.2-0.1=-0.04/\text{day}$. Equivalently, the effective reproduction quantity is $(\beta/\gamma)(S_0/N)=3\cdot0.2=0.6<1$, so infection declines locally. This conditional threshold does not identify a policy effect or validate homogeneous mixing.

**Answer.** Total population and nonnegativity are invariant; initial infection declines at rate 0.04/day because effective reproduction is 0.6.

</details>

*Tags: mathematical biology, epidemiology, SIR, reproduction threshold*
