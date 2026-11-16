# Power counting is not a construction proof

*Difficulty 5 of 5 · [Mathematical physics audit studio](index.md) · exercise 10 of 10*

In $D=4$ natural units, use the kinetic term $(\partial φ)^2$ to find the mass dimension of a scalar field. Find dimensions of couplings g4 in $g4φ^4$ and g6 in $g6φ^6$. Interpret the result as effective-field-theory power counting, then state two things it does not prove about an interacting QFT.

<details>
<summary>Hint 1</summary>

The action is dimensionless and $d^4x$ has mass dimension -4

</details>

<details>
<summary>Hint 2</summary>

A derivative has dimension 1

</details>

<details>
<summary>Hint 3</summary>

Each Lagrangian-density term must have dimension 4

</details>

<details>
<summary>Worked solution</summary>

The kinetic term has dimension 2+2[φ] and must equal 4, so $[φ]=1$. Then $[g4]+4=4$ gives $[g4]=0$, while $[g6]+6=4$ gives $[g6]=-2$. Near the free fixed point, $φ^4$ is classically marginal and $φ^6$ is irrelevant, naturally written with suppression such as $c6φ^6/Λ^2$. This organizes low-energy errors in E/Λ when matching, symmetry, and renormalization are controlled. It does not prove the perturbation series converges, and it does not construct a nonperturbative continuum theory satisfying locality, positivity/unitarity, and existence. It also does not determine coefficients without measurement or matching.

**Answer.** $[φ]=1$, $[g4]=0$, $[g6]=-2$; $φ^6$ is EFT-suppressed, but power counting proves neither perturbative convergence nor nonperturbative continuum existence.

</details>

*Tags: quantum field theory, effective field theory, power counting, rigor boundary*
