# Interpret a ninety-percent coverage statement

*Medium · [Statistics and probability](index.md)*

A procedure satisfies $P_\theta(\theta\in I)=0.9$ under its stated sampling model for each fixed target theta. One observed interval is \[2,4\]. Which interpretation follows without a prior? Choices: The procedure covers the fixed target in ninety percent of repeated samples under the model.; Theta now has posterior probability 0.9 of lying in this observed interval.; Ninety percent of individual future observations lie in this interval.; The observed interval must contain the true target because the procedure has high coverage.

**Options**

1. The procedure covers the fixed target in ninety percent of repeated samples under the model.
2. Theta now has posterior probability 0.9 of lying in this observed interval.
3. Ninety percent of individual future observations lie in this interval.
4. The observed interval must contain the true target because the procedure has high coverage.

```answer
{"answer":{"kind":"multiple_choice","expected":"procedure_coverage","checker_scope":"Checks only the requested result under the explicitly stated finite model or convention; does not certify a modeling assumption, causal claim or open argument."},"options":["procedure_coverage","posterior_coverage","individual_prediction","observed_interval_guaranteed"]}
```

<details>
<summary>Hint 1</summary>

Identify what varies in the probability statement.

</details>

<details>
<summary>Hint 2</summary>

A fixed parameter and a random interval are different from a posterior random parameter.

</details>

<details>
<summary>Worked solution</summary>

Coverage is a repeated-sampling property of the procedure.

1. Under the stated notation theta is fixed and the data-generated interval is random.
2. The stated ninety-percent property describes repeated samples and their intervals.
3. It supplies neither a posterior probability for this realized interval nor a prediction interval for individual observations.

</details>
