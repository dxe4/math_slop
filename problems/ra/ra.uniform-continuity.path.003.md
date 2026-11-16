# Bound a quadratic on a bounded domain

*Easy · [Real analysis](index.md)*

For $f(x)=x^{2}$ on $[0,3]$, use $|x^{2}-y^{2}|\leq 6|x-y|$. At $\varepsilon =1/5$, compute the prescribed sufficient radius $\delta =\varepsilon /6$. The task does not ask for the largest possible radius.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":30},"checker_scope":"Checks only the requested structured calculation or statement recognition. Open reasoning is unassessed, and correctness does not certify an unrestricted proof or mastery of the complete skill."}}
```

<details>
<summary>Hint 1</summary>

Factor $x^{2}-y^{2}$ and use $|x+y|\leq 6$ on the stated domain.

</details>

<details>
<summary>Hint 2</summary>

Substitute $\varepsilon =1/5$ into the prescribed recipe.

</details>

<details>
<summary>Worked solution</summary>

A domain bound turns a variable factor into a uniform constant.

1. For $x,y\in [0,3], |x^{2}-y^{2}|=|x-y||x+y|\leq 6|x-y|$.
2. The recipe $\delta =(1/5)/6=1/30$ therefore gives output distance &lt;$1/5$ whenever input distance is &lt;δ.

</details>
