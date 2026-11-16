# Canonical two-level ensemble

*Difficulty 4 of 5 · [Mathematical physics audit studio](index.md) · exercise 6 of 10*

A system has energies $0$ and $\varepsilon>0$ in a canonical ensemble at inverse temperature $\beta$. Compute $Z$, excited-state probability, mean energy, and the limits $\beta\to\infty$ and $\beta\to0$. State which physical preparation the canonical ensemble models.

<details>
<summary>Hint 1</summary>

$Z$ is the sum of two Boltzmann weights

</details>

<details>
<summary>Hint 2</summary>

$U=-\partial_\beta\ln Z$

</details>

<details>
<summary>Hint 3</summary>

$\beta\to\infty$ is low temperature and $\beta\to0$ is high temperature

</details>

<details>
<summary>Worked solution</summary>

The partition function is $Z=1+e^{-\beta\varepsilon}$. The excited probability is $e^{-\beta\varepsilon}/Z=1/(e^{\beta\varepsilon}+1)$, so $U=\varepsilon/(e^{\beta\varepsilon}+1)$, agreeing with $-\partial_\beta\ln Z$. As $\beta\to\infty$, excited probability and $U$ approach zero: the nondegenerate ground state dominates. As $\beta\to0$, both states approach probability $1/2$ and $U$ approaches $\varepsilon/2$. A canonical ensemble models a system weakly exchanging energy with a much larger reservoir at fixed temperature. An isolated fixed-energy preparation is microcanonical, and ensemble equivalence is not automatic for every finite or long-range system.

**Answer.** $Z=1+e^{-\beta\varepsilon}$, $p_{\mathrm{exc}}=1/(e^{\beta\varepsilon}+1)$, $U=\varepsilon/(e^{\beta\varepsilon}+1)$; limits are ground-state occupation at low $T$ and equal occupation at high $T$.

</details>

*Tags: statistical mechanics, canonical ensemble, partition function*
