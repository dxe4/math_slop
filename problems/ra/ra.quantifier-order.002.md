# Negate convergence to a proposed limit

*Medium · [Real analysis](index.md)*

Negate the statement: for every $\varepsilon >0$ there exists a positive integer N such that for every integer $n\geq N, |a_{n}-L|<\varepsilon$. Which is the exact negation? Select the mathematically correct statement from the four alternatives.

**Options**

1. ∃$\varepsilon >0$ ∀$N\geq 1$ ∃$n\geq N$: $|a_{n}-L|\geq \varepsilon$.
2. ∀$\varepsilon >0$ ∃$N\geq 1$ ∀$n\geq N$: $|a_{n}-L|\geq \varepsilon$.
3. ∃$\varepsilon >0$ ∃$N\geq 1$ ∀$n\geq N$: $|a_{n}-L|\geq \varepsilon$.
4. There exists $\varepsilon >0$ such that every positive N and every $n\geq N$ satisfy $|a_{n}-L|\geq \varepsilon$.

```answer
{"answer":{"kind":"multiple_choice","expected":"fixed_error_late_hit","checker_scope":"Checks the selected mathematical statement among four authored alternatives under the stated hypotheses; does not assess a freely written proof."},"options":["fixed_error_late_hit","all_errors_bad_tails","eventual_error_floor","all_error_floor"]}
```

<details>
<summary>Hint 1</summary>

Negating a universal quantifier makes it existential, and conversely.

</details>

<details>
<summary>Hint 2</summary>

The negation of a strict inequality $u<\varepsilon$ is $u\geq \varepsilon$.

</details>

<details>
<summary>Worked solution</summary>

Failure of convergence requires one tolerance that is violated arbitrarily far along.

1. Negating $\forall\varepsilon>0\;\exists N\;\forall n\geq N$ gives $\exists\varepsilon>0\;\forall N\;\exists n\geq N$.
2. The estimate fails when $|a_n-L|\geq\varepsilon$. The same fixed positive tolerance must have a counterexample arbitrarily late.
3. An entire bad tail is stronger and is not required: bad indices may be scattered among good ones.

</details>
