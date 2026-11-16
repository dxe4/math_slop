# Track the order of a pointwise threshold

*Medium · [Real analysis](index.md)*

Which dependency rule belongs to pointwise convergence $f_{n}\to f$ on D? Select the mathematically correct statement from the four alternatives.

**Options**

1. N may depend on the later arbitrary index n.
2. For each fixed x and $\varepsilon >0, N$ may depend on x and ε, but not on the later $n\geq N$.
3. One N must work for every x and every $\varepsilon >0$ simultaneously.
4. For each $\varepsilon >0$, one N must work simultaneously for every x in D.

```answer
{"answer":{"kind":"multiple_choice","expected":"for_each_fixed_x","checker_scope":"Checks the selected mathematical statement among four authored alternatives under the stated hypotheses; does not assess a freely written proof."},"options":["n_may_depend_on","for_each_fixed_x","one_n_must_work","for_each_0_one"]}
```

<details>
<summary>Hint 1</summary>

Pointwise convergence fixes x before requesting the threshold.

</details>

<details>
<summary>Hint 2</summary>

The subsequent estimate must hold for every later index.

</details>

<details>
<summary>Worked solution</summary>

Pointwise convergence permits input-dependent thresholds.

1. The quantifier order is ∀$x\in D$ ∀$\varepsilon >0$ ∃N ∀$n\geq N$.
2. Thus x and ε can determine N, while the later arbitrary n cannot. B records exactly that dependence.

</details>
