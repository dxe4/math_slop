# Separate full boxes from leftovers

*Easy · [Foundations bridge](index.md)*

Fifty-two cards are packed into full boxes of seven. Use the greatest possible number of full boxes. Return q full boxes and r leftover cards.

```answer
{"answer":{"kind":"integer_pair","expected":{"q":7,"r":3},"checker_scope":"Checks only the exact stated structured result; explanation quality and general proof mastery are not assessed."}}
```

<details>
<summary>Hint 1</summary>

The cards left over must not fill another box.

</details>

<details>
<summary>Hint 2</summary>

Find the largest multiple of seven no larger than fifty-two.

</details>

<details>
<summary>Worked solution</summary>

A grouping answer needs both the total equation and the remainder bounds.

1. Seven boxes use $49$ cards; eight boxes would need $56$.
2. The remainder is 52 − 49 = 3, so $q = 7$ and $r = 3$.

</details>
