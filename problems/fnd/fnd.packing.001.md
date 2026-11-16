# Make complete packets and keep a remainder

*Easy · [Foundations bridge](index.md)*

Thirty-five stickers are packed into packets of six. Make as many complete packets as possible. Return q, the number of complete packets, and r, the number of stickers left over.

```answer
{"answer":{"kind":"integer_pair","expected":{"q":5,"r":5},"checker_scope":"Checks the stated exact structured answer only; explanation quality is not assessed."}}
```

<details>
<summary>Hint 1</summary>

A complete packet must contain exactly six stickers.

</details>

<details>
<summary>Hint 2</summary>

Compare successive multiples of six with thirty-five; the leftovers must be fewer than six.

</details>

<details>
<summary>Worked solution</summary>

A quotient counts complete groups, and the remainder is the unused amount smaller than a group.

1. Five packets use $5 \times  6 = 30$ stickers; six packets would need $36$, which is too many.
2. The leftover count is 35 − 30 = 5, so $q = 5$ and $r = 5$.

</details>
