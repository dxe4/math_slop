# Ignore finitely many edited sequence terms

*Easy · [Calculus](index.md)*

A real sequence a\_n tends to 3. A new sequence b\_n agrees with a\_n for every n≥21 but has arbitrary real first twenty terms. Find $\lim b_n$.

```answer
{"answer":{"kind":"integer","expected":3,"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Convergence is a condition on every sufficiently late term.

</details>

<details>
<summary>Hint 2</summary>

The edited terms all precede a fixed index.

</details>

<details>
<summary>Worked solution</summary>

Finite initial changes do not affect a sequence limit.

1. For any tolerance, a\_n is sufficiently close to 3 beyond some index N.
2. For n≥max(N,21), b\_n=a\_n and has the same closeness.
3. Hence b\_n also tends to 3.

</details>
