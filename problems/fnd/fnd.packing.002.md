# Fill trays as fully as possible

*Easy · [Foundations bridge](index.md)*

Forty-seven beads are arranged in full trays of eight. Use the largest possible number of full trays. Return q, the number of full trays, and r, the leftover beads.

```answer
{"answer":{"kind":"integer_pair","expected":{"q":5,"r":7},"checker_scope":"Checks the stated exact structured answer only; explanation quality is not assessed."}}
```

<details>
<summary>Hint 1</summary>

The leftover beads cannot fill another complete tray.

</details>

<details>
<summary>Hint 2</summary>

Find the largest multiple of eight that does not exceed forty-seven.

</details>

<details>
<summary>Worked solution</summary>

Complete grouping requires both the total equation and a remainder smaller than the group size.

1. Five trays use $5 \times  8 = 40$ beads, while six trays would require $48$.
2. The leftover count is $47 - 40 = 7$, giving $q = 5$ and $r = 7$.

</details>
