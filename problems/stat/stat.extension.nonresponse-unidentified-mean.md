# Nonresponse unidentified mean

*Medium · [Statistics and probability](index.md)*

A finite population has $4$ outcomes in $[0,1]$. Two observed outcomes are $0$ and $1$; the other two are unobserved, with no restriction on how response depends on outcomes. Prove that the set of possible population means is exactly $[1/4,3/4]$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Introduce two variables for the missing outcomes and express the mean using them.

</details>

<details>
<summary>Hint 2</summary>

After obtaining bounds, construct a feasible missing-value pair for any proposed mean between the bounds.

</details>

<details>
<summary>Model proof</summary>

Sharp identification requires both a bound and attainability of every value in the asserted set.

1. Writing the missing values as $u,v\in[0,1]$ gives population mean $m=(1+u+v)/4$.
2. The constraints imply $0\le u+v\le2$, hence $1/4\le m\le3/4$.
3. For any $m$ in that interval, choose $u=v=(4m-1)/2$. These values lie in $[0,1]$ and give exactly that mean.
4. Thus every value in the interval is feasible and none outside it is. Unrestricted response supplies no additional restriction to narrow the identified set.

**Self-assessment rubric**

- Express the population mean using two bounded missing outcomes.
- Derive both endpoint inequalities from the missing-outcome restrictions.
- Construct feasible completions for every mean in the asserted interval.
- Explain why the response rule adds no identifying constraint.

</details>
