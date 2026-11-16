# Select the cards that can falsify a conditional rule

*Medium · [Foundations bridge](index.md)*

Each card has a letter on one side and an integer on the other. Four cards show $A,D,4,7$ respectively. To decide whether these cards obey “if a card has a vowel, its number is even,” which shown cards must be turned? Return labels from {A,D,4,7}; do not turn cards that cannot reveal a violation.

```answer
{"answer":{"kind":"set","expected":["A","7"],"checker_scope":"Only the requested exact result in the stated domain and units is checked; the reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

A violation needs a vowel paired with an odd number.

</details>

<details>
<summary>Hint 2</summary>

Check which visible sides leave that prohibited pairing possible.

</details>

<details>
<summary>Worked solution</summary>

Testing an implication requires searching for its true-premise, false-conclusion case.

1. The A card must be checked because its hidden number could be odd. The 7 card must be checked because its hidden letter could be a vowel.
2. The D card cannot violate a rule imposed only on vowels. The 4 card has an even number, so either hidden letter is consistent with the rule.
3. Thus exactly A and 7 must be turned, giving the label set {A,7}.

</details>
