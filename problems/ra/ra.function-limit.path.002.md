# Apply a supplied local square estimate

*Easy · [Real analysis](index.md)*

For $f(x)=x^{2}$ at $a=2$ and target $L=4$, use $|x-2|<1 \Rightarrow  |x+2|<5$. At $\varepsilon =1/10$, compute the prescribed sufficient radius $\delta =\min (1,\varepsilon /5)$. You are asked for this recipe’s value, not the largest possible radius.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":50},"checker_scope":"Checks only the requested structured calculation or statement recognition. Open reasoning is unassessed, and correctness does not certify an unrestricted proof or mastery of the complete skill."}}
```

<details>
<summary>Hint 1</summary>

Substitute the stated tolerance into $\varepsilon /5$.

</details>

<details>
<summary>Hint 2</summary>

The recipe keeps both the local factor bound and the output-error requirement valid.

</details>

<details>
<summary>Worked solution</summary>

A local factor bound yields a sufficient, possibly nonoptimal, delta.

1. Here $\varepsilon /5=(1/10)/5=1/50$, which is less than 1, so the recipe gives $\delta =1/50$.
2. For $0<|x-2|<\delta , |x^{2}-4|=|x-2||x+2|<5\delta =1/10$.

</details>
