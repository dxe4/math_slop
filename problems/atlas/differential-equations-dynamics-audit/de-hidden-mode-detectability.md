# Distinguish observability from detectability

*Difficulty 3 of 5 · [Differential equations, control, and long-time dynamics audit studio](index.md) · exercise 11 of 14*

Let $A=\operatorname{diag}(-1,-4)$ and $C=[1,0]$. Compute the observability matrix, decide observability and detectability, and explain what output histories cannot determine.

<details>
<summary>Hint 1</summary>

$CA=[-1,0]$

</details>

<details>
<summary>Hint 2</summary>

The second mode is absent from every output derivative

</details>

<details>
<summary>Hint 3</summary>

Detectability permits unobservable modes when they are stable

</details>

<details>
<summary>Worked solution</summary>

The observability matrix is [[1,0],[-1,0]], which has rank one, so the pair is not observable. Initial states that differ only in their second coordinate produce identical outputs for all time, and the second initial amplitude cannot be reconstructed. That hidden mode has eigenvalue -4 and decays, so every unobservable mode is stable; the pair is detectable. An observer can have estimation error converge even though it cannot recover the exact hidden initial value from data.

**Answer.** Rank is one, so the second initial coordinate is unobservable; because its eigenvalue is -4, the pair is nevertheless detectable.

</details>

*Tags: control theory, observability, detectability, hidden mode*
