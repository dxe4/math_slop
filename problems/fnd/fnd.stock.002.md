# Track books leaving and returning

*Easy · [Foundations bridge](index.md)*

A reading shelf has $26$ books. Eight are borrowed, then five are returned to the shelf. How many books are now on the shelf?

```answer
{"answer":{"kind":"integer","expected":23,"checker_scope":"Checks the stated exact structured answer only; explanation quality is not assessed."}}
```

<details>
<summary>Hint 1</summary>

Borrowing removes books from the shelf; returning adds books.

</details>

<details>
<summary>Hint 2</summary>

Find the count after borrowing before handling the return.

</details>

<details>
<summary>Worked solution</summary>

The meaning of each action determines its arithmetic sign.

1. After borrowing, the shelf has $26 - 8 = 18$ books.
2. The return adds five, giving $18 + 5 = 23$ books.

</details>
