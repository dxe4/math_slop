# Count balanced words with both prefix and height restrictions

*Hard · [Computational arithmetic problems](index.md)*

How many balanced parenthesis strings of length $12$ have every prefix balance between $0$ and $3$ inclusive? Here an opening parenthesis increases balance by $1$ and a closing parenthesis decreases it by $1$.

```answer
{"answer":{"kind":"integer","expected":"89","checker_scope":"Only the requested exact finite algorithmic result is checked. No learner program is executed and no unrestricted written proof is automatically certified. This original draft is ineligible for checkpoint evidence pending independent human review."}}
```

<details>
<summary>Hint 1</summary>

Track the current balance, discarding moves that cross either permitted boundary.

</details>

<details>
<summary>Hint 2</summary>

At the final length only balance zero is accepted; a positive final balance is not a balanced string.

</details>

<details>
<summary>Worked solution</summary>

A bounded walk transfer enforces the entire prefix condition rather than just equal symbol counts.

1. Let the state vector count prefixes at balances $0,1,2,3$, beginning at $[1,0,0,0]$. One symbol sends $[a,b,c,d]$ to $[b,a+c,b+d,c]$.
2. The even-length vectors at lengths $2,4,6$ are $[1,0,1,0]$, $[2,0,3,0]$ and $[5,0,8,0]$.
3. Lengths $8,10,12$ give $[13,0,21,0]$, $[34,0,55,0]$ and $[89,0,144,0]$.
4. Only the first component has final balance zero, so the count is $89$. The other final states are discarded even though they obey the prefix height bound.

</details>
