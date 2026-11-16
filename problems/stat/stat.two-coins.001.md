# Build an ordered two-coin sample space

*Easy · [Statistics and probability](index.md)*

Flip a first fair coin and a second fair coin independently. Record the first result before the second, so HT and TH are different ordered outcomes. The four outcomes HH, HT, TH and TT are equally likely. What is the probability of exactly one head?

| First coin | Second coin | Ordered outcome |
| --- | --- | --- |
| H | H | HH |
| H | T | HT |
| T | H | TH |
| T | T | TT |

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Exact arithmetic for the stated finite data or explicitly specified probability model. This check does not assess a written justification or a population inference."}}
```

<details>
<summary>Hint 1</summary>

Exactly one head excludes both no heads and two heads.

</details>

<details>
<summary>Hint 2</summary>

Check the supplied four-outcome sample space and count the outcomes satisfying the event.

</details>

<details>
<summary>Worked solution</summary>

Ordered records prevent distinct equally likely outcomes from being accidentally merged.

1. The ordered outcomes with exactly one head are HT and TH.
2. Two of the four equally likely outcomes are favorable, so the probability is $2/4 = 1/2$.

</details>
