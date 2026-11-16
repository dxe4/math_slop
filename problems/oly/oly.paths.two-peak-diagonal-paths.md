# Count diagonal paths with exactly two peaks

*Hard · [Original olympiad-style problems](index.md)*

How many paths from $(0,0)$ to $(5,5)$ using east E and north N steps never go above y=x and have exactly two occurrences of an E immediately followed by an N?

```answer
{"answer":{"kind":"integer","expected":"10","checker_scope":"Exact short answer only; the complete argument remains a worked solution, not an automatically certified proof or contest result."}}
```

<details>
<summary>Hint 1</summary>

Two such peaks force two nonempty runs of E and two nonempty runs of N.

</details>

<details>
<summary>Hint 2</summary>

Parameterize the first run lengths and impose the diagonal condition after the first N-run.

</details>

<details>
<summary>Worked solution</summary>

Run lengths encode the peak count and turn the barrier into a simple inequality.

1. Every allowed two-peak word has form $E^aN^bE^{5-a}N^{5-b}$ with $1\leq a,b\leq4$. A path satisfying the barrier must start E and end N.
2. The first N-run must leave y no greater than x, giving b&lt;=a. After the final E-run, x=5, so the remaining N-run cannot cross above the endpoint diagonal.
3. The count is $\sum_{a=1}^4a=1+2+3+4=10$.

</details>
