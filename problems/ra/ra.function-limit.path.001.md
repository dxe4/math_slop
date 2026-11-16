# Choose the sharp affine radius for one tolerance

*Medium · [Real analysis](index.md)*

For $f(x)=5x-2$ on $R, a=1$ and $L=3$, find the largest $\delta >0$ such that $0<|x-1|<\delta$ always implies \|$f(x)-3$\|&lt;$1/20$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":100},"checker_scope":"Checks only the requested structured calculation or statement recognition. Open reasoning is unassessed, and correctness does not certify an unrestricted proof or mastery of the complete skill."}}
```

<details>
<summary>Hint 1</summary>

The output distance equals $5$ times the input distance.

</details>

<details>
<summary>Hint 2</summary>

For a sharp radius divide the tolerance by $5$.

</details>

<details>
<summary>Worked solution</summary>

An affine slope converts input tolerance directly into output tolerance.

1. Since \|$f(x)-3$\|=$5$\|$x-1$\|, $\delta =1/100$ guarantees output distance &lt;$5/100=1/20$.
2. If $\delta >1/100$, choose an input distance strictly between $1/100$ and δ. Its output distance exceeds 1/20, so no larger radius works.

</details>
