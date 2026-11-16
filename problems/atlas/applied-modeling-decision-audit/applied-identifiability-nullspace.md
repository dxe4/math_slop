# Identify only what the observation map can see

*Difficulty 3 of 5 · [Applied modeling and decision audit studio](index.md) · exercise 3 of 12*

Measurements obey $y=A\theta$ with $A=\begin{bmatrix}1&1\\2&2\end{bmatrix}$. Find the null space, state which parameter combination is identifiable, and explain what ridge regularization contributes when it returns a unique estimate.

<details>
<summary>Hint 1</summary>

The second row repeats the first direction

</details>

<details>
<summary>Hint 2</summary>

Solve $v1+v2=0$

</details>

<details>
<summary>Hint 3</summary>

A penalty selects among equal-fit points

</details>

<details>
<summary>Worked solution</summary>

The null space consists of $v=t(1,-1)$, because both rows annihilate that vector. Data determine $\theta_1+\theta_2$, since ideal observations are $(s,2s)$, but they cannot separate the components. Ridge minimization adds $\lambda(\theta_1^2+\theta_2^2)$ and, for a compatible sum $s$, selects the minimum-norm pair $(s/2,s/2)$. That uniqueness partly comes from the penalty's symmetry preference, not new measurement information. More precise repeats of the same rows do not remove the structural null direction.

**Answer.** $\ker A=\operatorname{span}\{(1,-1)\}$; only $\theta_1+\theta_2$ is identified, while ridge selects the equal minimum-norm split by assumption.

</details>

*Tags: inverse problem, identifiability, null space, regularization*
