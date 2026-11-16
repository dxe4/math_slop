# Recognize an ordinary bootstrap resample

*Medium · [Statistics and probability](index.md)*

The observed sample is $1,3,7$. An ordinary bootstrap resample must make three draws with replacement from these observed values. Which is valid? Select the mathematically correct statement from the four alternatives.

**Options**

1. $1,1,7$.
2. $1,2,7$.
3. $1,7$.
4. $1,3,7,7$.

```answer
{"answer":{"kind":"multiple_choice","expected":"value_1_1_7","checker_scope":"Checks the selected mathematical statement among four authored alternatives under the stated hypotheses; does not assess a freely written proof."},"options":["value_1_1_7","value_1_2_7","value_1_7","value_1_3_7_7"]}
```

<details>
<summary>Hint 1</summary>

Replacement permits a value to repeat.

</details>

<details>
<summary>Hint 2</summary>

The resample must have the original sample size and contain only observed values.

</details>

<details>
<summary>Worked solution</summary>

A bootstrap resample repeats observed cases rather than inventing values.

1. the statement “$1,1,7$.” has three values drawn from $1,3,7$ and repetition is allowed.
2. the statement “$1,2,7$.” introduces unobserved $2$ and the statement “$1,7$.” has only two draws, so only A is valid.

</details>
