# Explain bias after random invitations

*Hard · [Statistics and probability](index.md)*

A population of $100$ people contains fifty Yes and fifty No responses to a fixed question. Twenty invitations are a simple random sample without replacement. Every invited Yes person replies, and every invited No person does not. Conditional on receiving at least one reply, determine the respondent Yes proportion and compare it with the population proportion. Explain why random invitations alone do not ensure representative respondents.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Separate the invitation mechanism from the response mechanism.

</details>

<details>
<summary>Hint 2</summary>

Under the supplied rule, which response category can appear among replies?

</details>

<details>
<summary>Model proof</summary>

Selective response can undo the representativeness of the initial invitation design.

1. The population Yes proportion is one half, and the initial invitations have a symmetric random design.
2. The response rule removes every invited No person and retains every invited Yes person. Conditional on a nonempty response set, all respondents are Yes, so their Yes proportion is one.
3. The respondent fraction therefore differs from the population fraction. This explicit response-dependent example disproves any guarantee based on random invitations alone; it does not claim all nonresponse causes bias.

**Self-assessment rubric**

- Separate random invitation from the stipulated selective response.
- State the nonempty-response condition and derive respondent proportion one.
- Compare with one half and explain precisely which guarantee fails.

</details>
