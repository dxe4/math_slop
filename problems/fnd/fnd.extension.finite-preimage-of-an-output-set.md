# Distinguish a preimage from an inverse function

*Medium · [Foundations bridge](index.md)*

A function has table f(−1)=0, f(0)=1, f(1)=0, f(3)=2 and domain {−1,0,1,3}. Return the preimage $f^{-1}(\{0,2\})$, meaning all inputs whose output lies in {0,2}; f need not be invertible.

```answer
{"answer":{"kind":"set","expected":["-1","1","3"],"checker_scope":"Only the requested exact result in the stated domain and units is checked; the reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Check each listed input against membership of its output in the target set.

</details>

<details>
<summary>Hint 2</summary>

Retain inputs, not outputs, and allow several inputs to share an output.

</details>

<details>
<summary>Worked solution</summary>

A set preimage exists for any function, including a many-to-one function.

1. Inputs −1 and 1 both have output 0, so both qualify.
2. Input 3 has output 2 and also qualifies, while input 0 has output 1 and does not.
3. The preimage is {−1,1,3}.

</details>
