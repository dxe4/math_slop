# Put the whole-tail quantifiers in order

*Easy · [Real analysis](index.md)*

A real sequence $a_{n}$ converges to the fixed real number L when every requested positive tolerance eventually controls every later term. Which statement expresses that meaning? Select the mathematically correct statement from the four alternatives.

**Options**

1. ∃N ∀$\varepsilon >0$ ∀$n\geq N$: $|a_{n}-L|<\varepsilon$.
2. ∀$\varepsilon >0$ ∃$N\geq 1$ ∀$n\geq N$: $|a_{n}-L|<\varepsilon$.
3. ∀$\varepsilon >0$ ∀$N\geq 1$ ∃$n\geq N$: $|a_{n}-L|<\varepsilon$.
4. For every positive integer n there exist $\varepsilon >0$ and $N\geq n$ with $|a_{N}-L|<\varepsilon$.

```answer
{"answer":{"kind":"multiple_choice","expected":"limit_quantifiers","checker_scope":"Checks the selected mathematical statement among four authored alternatives under the stated hypotheses; does not assess a freely written proof."},"options":["fixed_threshold","limit_quantifiers","arbitrarily_close","adaptive_tolerance"]}
```

<details>
<summary>Hint 1</summary>

Decide whether the threshold may change when a smaller tolerance is requested.

</details>

<details>
<summary>Hint 2</summary>

After choosing a threshold, the inequality must hold for every later index.

</details>

<details>
<summary>Worked solution</summary>

The order of quantifiers describes which choices may depend on earlier choices.

1. First let an arbitrary tolerance $\varepsilon>0$ be given.
2. Choose one positive integer $N$ after that tolerance, before a later index is selected.
3. The estimate must then hold for every integer $n\geq N$. The order is $\forall\varepsilon>0\;\exists N\;\forall n\geq N$.

</details>
