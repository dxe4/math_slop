# Use a degree bound to justify interpolation

*Medium · [Original olympiad-style problems](index.md)*

A real polynomial $P$ of degree at most three satisfies $P(0)=1$, $P(1)=2$, $P(2)=5$ and $P(3)=10$. Find $P(4)$.

```answer
{"answer":{"kind":"integer","expected":"17","checker_scope":"Exact short answer only; the complete argument remains a worked solution, not an automatically certified proof or contest result."}}
```

<details>
<summary>Hint 1</summary>

Look for a low-degree polynomial matching all four values.

</details>

<details>
<summary>Hint 2</summary>

The difference from that candidate has four distinct roots but degree at most three.

</details>

<details>
<summary>Worked solution</summary>

The degree bound makes a matching pattern a proof rather than a guess.

1. The polynomial Q(x)=x^2+1 matches the four data.
2. The difference P-Q has degree at most three and four distinct roots 0,1,2,3, so it is identically zero.
3. Therefore P(4)=4^2+1=17.

</details>
