# Recognize a valid product error estimate

*Medium · [Real analysis](index.md)*

Let $a_{n}\to A$ and $b_{n}\to B$, and suppose $|b_{n}|\leq M$ at the index in question. Which estimate follows? Select the mathematically correct statement from the four alternatives.

**Options**

1. $|a_n b_n-AB|\leq M|a_{n}-A|+|A||b_{n}-B|$.
2. $|a_n b_n-AB|\leq |a_{n}-A||b_{n}-B|$ in every case.
3. $|a_n b_n-AB|=|a_{n}-A|+|b_{n}-B|$ in every case.
4. $|a_n b_n-AB|\leq M|a_{n}-A|+|B||b_{n}-B|$ under the stated bound on $b_{n}$ alone.

```answer
{"answer":{"kind":"multiple_choice","expected":"a_nb_nab_m","checker_scope":"Checks the selected mathematical statement among four authored alternatives under the stated hypotheses; does not assess a freely written proof."},"options":["a_nb_nab_m","a_nb_nab_a","nb_in_every_case","on_b_n_alone"]}
```

<details>
<summary>Hint 1</summary>

Add and subtract A $b_{n}$ inside the difference.

</details>

<details>
<summary>Hint 2</summary>

Apply the triangle inequality and then the bound on $|b_{n}|$.

</details>

<details>
<summary>Worked solution</summary>

A product limit is justified by controlling both errors and a bounded factor.

1. The identity is a\_nb\_n−AB=($a_{n}-A$)$b_{n}+A(b_{n}-B)$.
2. Taking absolute values gives an upper bound $|a_{n}-A||b_{n}|+|A||b_{n}-B|\leq M|a_{n}-A|+|A||b_{n}-B|$.

</details>
