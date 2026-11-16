# Explain why counting possible records does not give a uniform model

*Hard · [Combinatorics](index.md)*

Two independent fair labeled dice have $36$ equally likely ordered outcomes. Prove the sum records 2 through 12 are not equally likely, by comparing sums 2 and 7. Explain the mistake in assigning probability 1/11 to every sum.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Count ordered preimages of each of the two specified sums.

</details>

<details>
<summary>Hint 2</summary>

Uniformity before forgetting information need not remain after forgetting it.

</details>

<details>
<summary>Model proof</summary>

Observation multiplicity determines the induced probability distribution.

1. Sum two occurs only for ordered pair (1,1), so its probability is one thirty-sixth.
2. Sum seven occurs for the six ordered pairs (1,6),(2,5),(3,4),(4,3),(5,2),(6,1), so its probability is one sixth.
3. The records therefore have unequal probabilities. Eleven distinct records alone do not justify a uniform eleven-outcome model; their ordered preimage sizes differ.

**Self-assessment rubric**

- Count and assign the probability of sum two under the given model.
- List the six ordered preimages of sum seven.
- Explain why distinct records need not inherit uniform probabilities.

</details>
