# Use two length labels to force a monotone subsequence

*Hard · [Combinatorics](index.md)*

Prove that every sequence of $10$ distinct real numbers contains either an increasing subsequence of length four or a decreasing subsequence of length four. A subsequence retains index order but need not be consecutive.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

At each index record the longest increasing and decreasing subsequence lengths ending there.

</details>

<details>
<summary>Hint 2</summary>

Compare labels at two ordered indices using which of their values is larger.

</details>

<details>
<summary>Model proof</summary>

A two-coordinate pigeonhole argument forces one of the two lengths to exceed three.

1. Suppose neither kind of length-four subsequence exists. At index i let Ii and Di be the longest increasing and decreasing lengths ending there; each lies in {1,2,3}.
2. For i&lt;j, distinctness gives either value\_i&lt;value\_j, forcing Ij&gt;=Ii+1, or value\_i&gt;value\_j, forcing Dj&gt;=Di+1. Thus the two-coordinate labels at i and j differ.
3. Ten indices would therefore require ten distinct pairs from a set of only nine, a contradiction. Hence one of the required subsequences exists.

**Self-assessment rubric**

- Define both ending-length labels and their bounds under the contradiction hypothesis.
- Show labels at any two indices differ using distinct input values.
- Apply the ten-versus-nine contradiction and preserve subsequence index order.

</details>
