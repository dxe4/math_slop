# Detect a threshold chosen too late

*Medium · [Real analysis](index.md)*

A proposed convergence argument says: given $\varepsilon >0$, take an arbitrary positive integer n, then set $N=n+1$; since $n\geq N$ is false, the implication $n\geq N \Rightarrow  |a_{n}-L|<\varepsilon$ is true. What is the decisive problem? Select the mathematically correct statement from the four alternatives.

**Options**

1. N improperly depends on n.
2. All thresholds must equal $1$.
3. An implication with false premise must be false.
4. The only problem is that every convergence threshold must be a real number that is not an integer.

```answer
{"answer":{"kind":"multiple_choice","expected":"n_improperly_depends","checker_scope":"Checks the selected mathematical statement among four authored alternatives under the stated hypotheses; does not assess a freely written proof."},"options":["n_improperly_depends","all_thresholds_must","an_implication_with","the_only_problem_is"]}
```

<details>
<summary>Hint 1</summary>

A true implication with a false premise gives no estimate on any actual tail here.

</details>

<details>
<summary>Hint 2</summary>

Compare the order of choices with: for every ε, there exists N, for every $n\geq N$.

</details>

<details>
<summary>Worked solution</summary>

Vacuous implications cannot replace a uniformly chosen tail threshold.

1. The proposed N is different for each n and is chosen only after n is supplied.
2. The required definition instead chooses one N and then verifies the estimate for every $n\geq N$.
3. Thus A identifies the error. A false premise makes an implication true, but that logical fact does not supply the missing quantifier structure.

</details>
