# Place an adjacent pair of heads

*Medium · [Probability problems](index.md)*

$5$ independent fair coin tosses are made. Find the probability of exactly two heads, with those two heads adjacent.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":8},"checker_scope":"Exact answer for the stated probability model only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Once the adjacent pair location is chosen, every other toss must be a tail.

</details>

<details>
<summary>Hint 2</summary>

Count valid starting positions of a two-place block in a five-place sequence.

</details>

<details>
<summary>Worked solution</summary>

Exactly two heads makes each adjacent-pair location one complete outcome.

1. There are $2^5=32$ equally likely toss sequences.
2. The head pair can start at positions $1,2,3,4$, giving four distinct favorable sequences.
3. The probability is $4/32=1/8$.

</details>
