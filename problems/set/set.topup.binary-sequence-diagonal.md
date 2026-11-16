# Construct a binary sequence absent from any list

*Medium · [Set theory](index.md)*

Prove the set of all functions $s:\mathbb N_0\to\{0,1\}$ is uncountable. A proposed enumeration may contain repetitions.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Let the nth listed sequence have an nth entry.

</details>

<details>
<summary>Hint 2</summary>

Flip exactly that entry in the new sequence, and compare at an arbitrary list index.

</details>

<details>
<summary>Model proof</summary>

A valid binary diagonal object avoids every listed sequence individually.

1. Suppose all binary sequences are listed as s\_0,s\_1,..., allowing repetitions. A nonempty finite countable set would also admit such a repeating list.
2. Define t(n)=1-s\_n(n), which lies in {0,1} for every nonnegative integer n.
3. For every k, t differs from s\_k at coordinate k, so t occurs nowhere on the list. This contradicts completeness and proves uncountability.

**Self-assessment rubric**

- Construct an output in the required binary sequence space.
- Prove disagreement with a completely arbitrary listed sequence.
- Explain why no listing, including a repeating one, can cover the space.

</details>
