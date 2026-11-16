# Gauge representative versus field strength

*Difficulty 4 of 5 · [Mathematical physics audit studio](index.md) · exercise 9 of 10*

Let A be a U(1) connection one-form and $F=dA$. Under $A' = A+d\chi$, prove $F'=F$. If a charged complex field transforms $\psi'=e^{-iq\chi/\hbar}\psi$, explain why an ordinary derivative must be replaced by a covariant derivative, without committing to a hidden sign convention.

<details>
<summary>Hint 1</summary>

Use $d^2=0$

</details>

<details>
<summary>Hint 2</summary>

Differentiating the local phase creates a term proportional to dχ

</details>

<details>
<summary>Hint 3</summary>

Choose the connection sign so its transformation cancels that extra term

</details>

<details>
<summary>Worked solution</summary>

$F'=dA'=dA+d^2\chi=F$, so the curvature is independent of this local representative. Ordinary differentiation gives $d\psi'=e^{-iq\chi/\hbar}(d\psi-(iq/\hbar)d\chi\,\psi)$, introducing an extra phase-gradient term; therefore $d\psi$ does not transform like $\psi$. A covariant derivative $D=d$ plus a convention-dependent multiple of $A$ is chosen so the $A$ transformation cancels that term, yielding $D'\psi'=e^{-iq\chi/\hbar}D\psi$. The precise sign and factor depend on whether $A$ and Lie-algebra generators are written Hermitian or anti-Hermitian, so one convention must be declared as a set.

**Answer.** F is unchanged because $d^2\chi=0$; a covariant derivative adds the connection term needed to cancel the derivative of the local phase.

</details>

*Tags: gauge theory, connection, curvature, gauge covariance*
