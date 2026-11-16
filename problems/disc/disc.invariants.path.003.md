# Flip two coins per move

*Medium · [Discrete mathematics](index.md)*

Three coins start all tails. Each move flips exactly two distinct coins. Enter the complete set of possible head counts after any finite number of moves, allowing zero moves.

```answer
{"answer":{"kind":"finite_integer_set","expected":[0,2],"checker_scope":"Checks the complete displayed exact mathematical answer under the original finite givens. Any written explanation remains separate from this bounded automatic result."}}
```

<details>
<summary>Hint 1</summary>

Check what a two-coin flip does to the parity of the head count.

</details>

<details>
<summary>Hint 2</summary>

Show that every count you retain is actually reachable, rather than using parity only as a necessary condition.

</details>

<details>
<summary>Worked solution</summary>

An invariant restricts reachability; explicit moves establish the remaining possibilities.

1. Each move changes the head count by $-2$, $0$, or $2$, so its parity stays even.
2. Among counts from $0$ through $3$, only $0$ and $2$ are even.
3. Zero moves gives $0$ heads and one move gives $2$ heads. Thus exactly $\{0,2\}$ occur, and all three coins cannot become heads.

</details>
