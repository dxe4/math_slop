# Audit the standard symplectic form

*Difficulty 4 of 5 · [Topology and modern geometry](index.md) · exercise 6 of 8*

On $\mathbb{R}^4$ with coordinates $(q_1,p_1,q_2,p_2)$, let $\omega=dq_1\wedge dp_1+dq_2\wedge dp_2$. Prove $\omega$ is closed and nondegenerate. Explain why calling it a Riemannian metric would be incorrect.

<details>
<summary>Hint 1</summary>

Exterior derivatives of coordinate one-forms vanish

</details>

<details>
<summary>Hint 2</summary>

Test a vector v against coordinate basis vectors

</details>

<details>
<summary>Hint 3</summary>

A metric is symmetric and positive definite; a symplectic form is alternating

</details>

<details>
<summary>Worked solution</summary>

Because $d(dq_i)=d(dp_i)=0$ and $d$ obeys the graded product rule, $d\omega=0$. Write $v=a_1\partial_{q_1}+b_1\partial_{p_1}+a_2\partial_{q_2}+b_2\partial_{p_2}$. If $\omega(v,w)=0$ for every $w$, test $w=\partial_{p_1}$ to get $a_1=0$, $w=\partial_{q_1}$ to get $-b_1=0$, and similarly $w=\partial_{p_2}$ and $w=\partial_{q_2}$ to get $a_2=b_2=0$. Thus $v=0$ and $\omega$ is nondegenerate. It is alternating, so $\omega(v,v)=0$ for every $v$; a Riemannian metric is symmetric and satisfies $g(v,v)>0$ for nonzero $v$. The structures answer different geometric questions.

**Answer.** $d\omega=0$ and testing against the four coordinate directions forces every vector in its kernel to vanish; $\omega$ is alternating, not a positive-definite symmetric metric.

</details>

*Tags: symplectic form, nondegenerate, differential form*
