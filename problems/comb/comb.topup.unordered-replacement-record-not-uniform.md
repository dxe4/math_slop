# Explain unequal probabilities after forgetting draw order

*Hard · [Combinatorics](index.md)*

Two independent uniform draws are made from $\{R,G,B\}$ with replacement, then their order is forgotten. Prove the six unordered color records are not equally likely, comparing RR with RG.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

There are nine equally likely ordered outcomes.

</details>

<details>
<summary>Hint 2</summary>

An unordered record with distinct colors has two ordered preimages.

</details>

<details>
<summary>Model proof</summary>

Order-forgetting merges different numbers of equally likely records.

1. RR has only the ordered preimage (R,R), so its probability is one ninth.
2. RG has preimages (R,G) and (G,R), so its probability is two ninths.
3. These probabilities differ, so treating the six unordered records as uniform is invalid under the specified draw model.

**Self-assessment rubric**

- Identify the nine equally likely ordered outcomes.
- Count one and two preimages for the two chosen records.
- Compare the induced probabilities and reject the unsupported uniform model.

</details>
