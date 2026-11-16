# State what resampling cannot repair automatically

*Medium · [Statistics and probability](index.md)*

A voluntary-response survey misses many groups. An analyst bootstraps its responses and claims this guarantees a representative population interval. Which assessment is correct? Select the mathematically correct statement from the four alternatives.

**Options**

1. Any number of bootstrap resamples guarantees removal of selection bias.
2. Bootstrapping repeats the observed response distribution and does not automatically repair selection bias or guarantee population coverage.
3. Bootstrap intervals are always intervals for every individual’s future response.
4. Resampling automatically creates new responses from groups missing in the observed sample.

```answer
{"answer":{"kind":"multiple_choice","expected":"bootstrapping_repeat","checker_scope":"Checks the selected mathematical statement among four authored alternatives under the stated hypotheses; does not assess a freely written proof."},"options":["any_number_of_bootst","bootstrapping_repeat","bootstrap_intervals","resampling_automatic"]}
```

<details>
<summary>Hint 1</summary>

Resampling uses only cases already observed.

</details>

<details>
<summary>Hint 2</summary>

Consider whether missing population groups become represented just by repeating existing responses.

</details>

<details>
<summary>Worked solution</summary>

Resampling addresses variability under a model, not every flaw in how data were collected.

1. The bootstrap draws from the biased observed sample, not directly from missing groups.
2. It can describe variability within that resampling model but does not guarantee a representative interval; the statement “Bootstrapping repeats the observed response distribution and does not automatically repair selection bias or guarantee population coverage.” states the limitation.

</details>
