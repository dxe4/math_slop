# See how disjoint events change a conditional probability

*Medium · [Statistics and probability](index.md)*

Events A and B are disjoint, with $P(A)=1/3$ and P(B)=1/4. Return the ordered vector (P(A\|not B),P(A)).

```answer
{"answer":{"kind":"vector","expected":["4/9","1/3"],"checker_scope":"Checks only the requested result under the explicitly stated finite model or convention; does not certify a modeling assumption, causal claim or open argument."}}
```

<details>
<summary>Hint 1</summary>

Disjointness implies A is contained in the complement of B.

</details>

<details>
<summary>Hint 2</summary>

The conditioned complement has probability three quarters.

</details>

<details>
<summary>Worked solution</summary>

Nonzero disjoint events are not independent.

1. The intersection of A with not B is A itself, with probability one third.
2. Dividing by the complement probability three quarters gives $4/9$.
3. The marginal remains $1/3$, so the vector is $(4/9,1/3)$ and conditioning changes the probability.

</details>
