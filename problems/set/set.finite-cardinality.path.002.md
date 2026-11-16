# Why the word finite matters

*Medium · [Set theory](index.md)*

A finite set $A$ has five members and $B$ is a proper subset of $A$. What is the greatest possible number of members of $B$? Enter an integer.

```answer
{"answer":{"kind":"integer","expected":4,"checker_scope":"Checks the complete displayed exact mathematical answer under the original finite givens. Any written explanation remains separate from this bounded automatic result."}}
```

<details>
<summary>Hint 1</summary>

Proper containment excludes equality.

</details>

<details>
<summary>Hint 2</summary>

Show that the upper bound can be attained by a suitable proper subset.

</details>

<details>
<summary>Worked solution</summary>

Proper subsets of a finite set have strictly smaller cardinality.

1. A subset of a five-member finite set has at most five members.
2. A five-member subset would equal $A$, so properness requires at most four.
3. Removing exactly one member produces a four-member proper subset. Thus the greatest possible size is $4$, and no proper subset is bijective with $A$.

</details>
