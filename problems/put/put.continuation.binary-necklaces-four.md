# Binary necklaces four

*Medium · [Original Putnam-style training](index.md)*

How many binary strings of length $4$ are distinct up to cyclic rotation?

```answer
{"answer":{"kind":"integer","expected":"6","checker_scope":"Only the exact bounded answer is checked; the argument and assumptions are not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Use Burnside’s lemma for the four rotations.

</details>

<details>
<summary>Hint 2</summary>

Count strings fixed by rotations through zero, one, two, and three positions.

</details>

<details>
<summary>Worked solution</summary>

There are $6$ rotation classes.

1. The identity fixes all $2^4=16$ strings. A one-step or three-step rotation fixes the two constant strings; a two-step rotation fixes $2^2=4$ strings.
2. Burnside’s average is $(16+2+4+2)/4$.
3. There are $6$ rotation classes.

</details>
