# Why displacement current preserves charge

*Difficulty 4 of 5 · [Mathematical physics audit studio](index.md) · exercise 2 of 10*

Using SI equations $\nabla \times B=\mu_0J+\mu_0\varepsilon_0\partial E/\partial t$ and $\nabla \cdot E=\rho/\varepsilon_0$, derive local charge conservation. Explain what contradiction appears in a time-dependent problem if the displacement-current term is deleted.

<details>
<summary>Hint 1</summary>

The divergence of any curl is zero

</details>

<details>
<summary>Hint 2</summary>

Differentiate Gauss's law with respect to time

</details>

<details>
<summary>Hint 3</summary>

Compare with ∇·J

</details>

<details>
<summary>Worked solution</summary>

Take divergence of Ampere-Maxwell: $0=\mu_0\nabla \cdot J+\mu_0\varepsilon_0\partial t(\nabla \cdot E)$. Gauss's law gives $\varepsilon_0\partial t(\nabla \cdot E)=\partial t\rho$, so division by μ₀ yields $\partial t\rho+\nabla \cdot J=0$. Integrating over a fixed region says charge accumulation equals minus outward current flux. Without displacement current, divergence of the curl equation would force $\nabla \cdot J=0$ for every situation. Combined with continuity this would force $\partial t\rho=0$, contradicting charging capacitors and other time-dependent charge densities. The added term restores compatibility; material media still require clear free/bound source conventions.

**Answer.** Divergence gives $\partial t\rho+\nabla \cdot J=0$; omitting displacement current would incorrectly force time-independent charge density whenever Ampere's law is used.

</details>

*Tags: electromagnetism, Maxwell equations, charge conservation*
