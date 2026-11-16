# Count cyclic runs by marking one start

*Hard · [Original olympiad-style problems](index.md)*

Twelve cyclic positions are labeled, so rotations are distinct. How many binary assignments have $5$ ones and exactly $3$ cyclic runs of ones?

```answer
{"answer":{"kind":"integer","expected":"360","checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

Mark one of the three one-run starts to linearize the cyclic run data.

</details>

<details>
<summary>Hint 2</summary>

Positive one-run lengths compose five into three parts; positive zero-run lengths compose seven into three parts.

</details>

<details>
<summary>Worked solution</summary>

Use a marked-object count that stays valid for periodic words.

1. Choose the marked start position in twelve ways. The ordered positive one-run lengths have $\binom42=6$ choices and the zero-run lengths have $\binom62=15$ choices.
2. Following those runs around the fixed labeled circle reconstructs one marked assignment, and the lengths fill all twelve positions.
3. Every unmarked valid assignment has exactly three possible marked starts, including assignments with rotational symmetries because positions remain labeled.
4. Thus the unmarked count is $12\cdot6\cdot15/3=360$.

</details>
