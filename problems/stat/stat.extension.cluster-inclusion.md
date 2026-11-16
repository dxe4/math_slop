# Cluster inclusion

*Easy · [Statistics and probability](index.md)*

One of $5$ equal-size classrooms is selected uniformly, and every pupil in it is observed. What is the inclusion probability of a specified pupil in the population?

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":5},"checker_scope":"Checks only the requested exact finite answer under the stated model; it does not certify the reasoning or modeling assumptions."}}
```

<details>
<summary>Hint 1</summary>

Express pupil inclusion as an event about their classroom.

</details>

<details>
<summary>Hint 2</summary>

Use the classroom draw; there is no second pupil-level subsampling stage.

</details>

<details>
<summary>Worked solution</summary>

A pupil is included exactly when their own cluster is selected.

1. The specified pupil belongs to one fixed classroom.
2. That classroom is selected with probability $1/5$.
3. Therefore the pupil inclusion probability is $1/5$. Pupil indicators are dependent: classmates are included together.

</details>
