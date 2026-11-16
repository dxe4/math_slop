# Count line contributions through a center

*Hard · [Original olympiad-style problems](index.md)*

The integers $1$ through $9$ are arranged in a $3\times3$ square so that every row, every column and both main diagonals have the same sum. What number must occupy the center?

```answer
{"answer":{"kind":"integer","expected":"5","checker_scope":"Exact short answer only; the complete argument remains a worked solution, not an automatically certified proof or contest result."}}
```

<details>
<summary>Hint 1</summary>

First obtain the common line sum from all three rows.

</details>

<details>
<summary>Hint 2</summary>

Add the four lines passing through the center and count how often each square is included.

</details>

<details>
<summary>Worked solution</summary>

Overlapping line sums determine the center without reconstructing the arrangement.

1. The total of the nine entries is 45, so each row and therefore each required line sums to 15.
2. The middle row, middle column and two diagonals have combined sum 60. They count every noncenter entry once and the center c four times, giving $45+3c=60$.
3. Thus c=5. Such an arrangement exists, for example rows (8,1,6), (3,5,7), (4,9,2).

</details>
