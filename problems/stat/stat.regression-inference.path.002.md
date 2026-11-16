# Identify dependence in repeated measurements

*Medium · [Statistics and probability](index.md)*

Ten measurements are taken on each person, and errors within a person are known to be positively correlated. An analyst applies ordinary independent-error regression standard errors while treating all rows as independent. Which limitation follows? Select the mathematically correct statement from the four alternatives.

**Options**

1. Positive within-person correlation proves a zero slope.
2. The stated independent-error standard-error justification fails; the dependence must be accounted for in inference.
3. Repeated measurements automatically make the population sample representative.
4. Accounting for within-person dependence always requires discarding all but one measurement.

```answer
{"answer":{"kind":"multiple_choice","expected":"the_stated_independe","checker_scope":"Checks the selected mathematical statement among four authored alternatives under the stated hypotheses; does not assess a freely written proof."},"options":["positive_within_pers","the_stated_independe","repeated_measurement","accounting_for_withi"]}
```

<details>
<summary>Hint 1</summary>

The scenario explicitly gives dependence between errors from one person.

</details>

<details>
<summary>Hint 2</summary>

A count of rows is not a count of independent units.

</details>

<details>
<summary>Worked solution</summary>

An inferential formula must match the error dependence of the observed units.

1. Within-person error correlation contradicts the independence assumption of the stated formula.
2. Inference must reflect the dependence structure; the statement “The stated independent-error standard-error justification fails; the dependence must be accounted for in inference.” states this specific limitation.

</details>
