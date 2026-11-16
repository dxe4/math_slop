# Use a stated local bound without claiming optimality

*Medium · [Real analysis](index.md)*

To control $|x^2-9|$ near x=3, use only the rule delta=min(1,epsilon/7), from \|x+3\|&lt;7 whenever \|x-3\|&lt;1. For epsilon=7/10, compute this sufficient delta. No optimal radius is requested.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":10},"checker_scope":"Checks only the requested fixed numerical result, finite set or declared interval. Universal epsilon arguments, hypotheses and analytic proofs are not automatically certified, and no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

Substitute the supplied tolerance into the stated rule.

</details>

<details>
<summary>Hint 2</summary>

The auxiliary cap one and the error-based radius must both be considered.

</details>

<details>
<summary>Worked solution</summary>

A convenient sufficient radius can differ from the true largest radius.

1. For \|x-3\|&lt;1, the factor \|x+3\| is strictly below seven.
2. The given formula gives min(1,(7/10)/7)=1/10.
3. With this input radius, \|x^2-9\|=\|x-3\|\|x+3\|&lt;7/10, so the supplied rule succeeds.

</details>
