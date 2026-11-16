# Read the outgoing set of a composed relation

*Hard · [Discrete mathematics](index.md)*

On $\{1,2,3,4\}$ let $R=\{(1,2),(2,3),(2,4),(3,1),(4,4)\}$. Define (x,z) in S when some y satisfies (x,y) in R and (y,z) in R. Find {z:(1,z) is in S}.

```answer
{"answer":{"kind":"set","expected":"{3, 4}","checker_scope":"Exact requested finite observation or declared representation only. The worked explanation is not automatically certified; no new checkpoint objective or eligibility is introduced."}}
```

<details>
<summary>Hint 1</summary>

Exactly two directed R steps are required.

</details>

<details>
<summary>Hint 2</summary>

The first step from one has only one possible endpoint; now inspect that endpoint row.

</details>

<details>
<summary>Worked solution</summary>

Composition follows directed arrows in order rather than ignoring their orientation.

1. The only first R step from one goes to two.
2. From two the possible second steps go to three and four.
3. Therefore the outgoing set of one under S is $\{3,4\}$.

</details>
