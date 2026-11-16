# Reach and stabilize a double integrator

*Difficulty 3 of 5 · [Differential equations, control, and long-time dynamics audit studio](index.md) · exercise 10 of 14*

For $A=\begin{bmatrix}0&1\\0&0\end{bmatrix}$ and $B=[0,1]^T$, compute the controllability matrix. With state feedback $u=-k_px-k_dv$, choose gains for desired poles -2 and -3 and state two practical conclusions that pole assignment does not support.

<details>
<summary>Hint 1</summary>

$AB=[1,0]^T$

</details>

<details>
<summary>Hint 2</summary>

The desired polynomial is $(\lambda+2)(\lambda+3)$

</details>

<details>
<summary>Hint 3</summary>

Compare coefficients with $\lambda^2+k_d\lambda+k_p$

</details>

<details>
<summary>Worked solution</summary>

The controllability matrix is $[B,AB]=\begin{bmatrix}0&1\\1&0\end{bmatrix}$, with determinant -1 and rank two. The closed-loop characteristic polynomial is $\lambda^2+k_d\lambda+k_p$. Desired poles -2 and -3 give $\lambda^2+5\lambda+6$, so $k_d=5$ and $k_p=6$. The exact ideal linear plant is asymptotically stable under these gains. The calculation does not show actuator amplitude or rate limits are respected, nor does it address measurement noise, delay, sampling, parameter uncertainty, transient amplification, or unmodeled flexible modes.

**Answer.** The pair is controllable; choose $k_p=6$ and $k_d=5$ for poles -2 and -3, subject to untested constraint and robustness boundaries.

</details>

*Tags: control theory, controllability, pole placement, feedback*
