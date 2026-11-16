# A many-entry Euclidean process

*Medium · [Original olympiad-style problems](index.md)*

Start with the three entries $84,126,210$. Whenever two positive entries are unequal, replace the larger by their difference, leaving all other entries fixed. Prove that every maximal legal sequence ends with three equal entries, and give their common value.

```answer
{"answer":{"kind":"integer","expected":"42","checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

The positive integer sum decreases at every move, so infinite play is impossible.

</details>

<details>
<summary>Hint 2</summary>

The gcd of all three entries is unchanged by replacing one entry with its difference from another.

</details>

<details>
<summary>Worked solution</summary>

A decreasing measure proves termination, while a separate invariant identifies the terminal state.

1. If $a>b>0$, replacing $a$ by $a-b$ keeps it positive and decreases the total sum by $b\ge1$. Therefore every legal sequence is finite, with length bounded by the initial sum.
2. A terminal state cannot contain unequal positive entries, so all three entries equal some $d>0$. Conversely such a state admits no legal move.
3. The identity $\gcd(a,b,c)=\gcd(a-b,b,c)$ shows that the gcd is invariant. Initially it is $42$; at a terminal equal triple it is $d$. Hence every maximal sequence ends at $(42,42,42)$, independently of choices.

</details>
