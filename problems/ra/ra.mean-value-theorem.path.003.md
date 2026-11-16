# Bound endpoint change from derivative magnitude

*Medium · [Real analysis](index.md)*

Suppose f is continuous on $[2,5]$, differentiable on $(2,5)$, and \|$f^{\prime}(x)$\|≤$3$ throughout $(2,5)$. Give the smallest uniform bound B guaranteed by these assumptions for \|$f(5)-f(2)$\|.

```answer
{"answer":{"kind":"rational","expected":{"numerator":9,"denominator":1},"checker_scope":"Checks only the requested structured calculation or statement recognition. Open reasoning is unassessed, and correctness does not certify an unrestricted proof or mastery of the complete skill."}}
```

<details>
<summary>Hint 1</summary>

The Mean Value Theorem expresses endpoint change as $f^{\prime}(c)$ times interval length.

</details>

<details>
<summary>Hint 2</summary>

A linear function of slope $3$ shows the bound cannot be improved from these assumptions alone.

</details>

<details>
<summary>Worked solution</summary>

A derivative bound controls total change over an interval.

1. The theorem gives \|$f(5)-f(2)$\|=\|$f^{\prime}(c)$\|·$3\leq 3\cdot 3=9$.
2. The example $f(x)=3x$ attains change 9, so this uniform bound is sharp.

</details>
