# Use both labelled boxes

*Medium · [Probability problems](index.md)*

$3$ distinct balls may each be assigned to either of two labelled boxes. How many assignments leave neither box empty?

```answer
{"answer":{"kind":"integer","expected":"6","checker_scope":"Checks the assignment count for distinct balls and labelled boxes only."}}
```

<details>
<summary>Hint 1</summary>

It is easier to count all assignments and remove those that fail the condition.

</details>

<details>
<summary>Hint 2</summary>

An empty box forces all balls into the other box. Check whether the two excluded cases overlap.

</details>

<details>
<summary>Worked solution</summary>

Subtract all-in-one-box assignments from the full product space.

1. Each of the three distinct balls has two possible destinations, giving $2^3=8$ assignments.
2. Box one is empty only when all balls go to box two; box two is empty only when all go to box one. These are two different assignments.
3. Removing these two cases leaves $8-2=6$ assignments. Occupancy vectors alone would undercount because the balls are distinct.

There are $2^3$ assignments, of which two use only one box; $2^3-2=6$ remain.

</details>
