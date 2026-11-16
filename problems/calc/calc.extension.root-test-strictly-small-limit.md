# Read a strict root-test conclusion

*Easy · [Calculus](index.md)*

If $\limsup |a_n|^{1/n}=1/2$, what does the root test imply? Return {absolute\_convergence} or {divergence}.

```answer
{"answer":{"kind":"set","expected":["absolute_convergence"],"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

The limsup is strictly below one.

</details>

<details>
<summary>Hint 2</summary>

Compare late absolute terms with a geometric sequence of ratio between 1/2 and 1.

</details>

<details>
<summary>Worked solution</summary>

A strict root bound supplies geometric domination.

1. Choose q with 1/2&lt;q&lt;1.
2. Eventually \|a\_n\|≤qⁿ, and Σqⁿ converges.
3. Thus the series is absolutely convergent; return {absolute\_convergence}.

</details>
