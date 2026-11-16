# Correct pair-occurrence counting for triple overlaps

*Hard · [Computational arithmetic problems](index.md)*

How many binary strings of length $8$ contain exactly two occurrences of the consecutive pattern $\mathtt{101}$? Overlapping occurrences count separately.

```answer
{"answer":{"kind":"integer","expected":"38","checker_scope":"Only the requested exact finite algorithmic result is checked. No learner program is executed and no unrestricted written proof is automatically certified. This original draft is ineligible for checkpoint evidence pending independent human review."}}
```

<details>
<summary>Hint 1</summary>

An occurrence can start at positions $1,\ldots,6$; adjacent starts are incompatible, but starts separated by two can overlap consistently.

</details>

<details>
<summary>Hint 2</summary>

Count compatible pairs of starts, then correct for strings with three occurrences, which contribute more than one pair.

</details>

<details>
<summary>Worked solution</summary>

Factorial-moment counting handles overlap without assuming occurrence events are independent.

1. For two starts separated by $2$, there are four pairs fixing five bits, each with $2^3$ completions. Separations $3,4,5$ give respectively $3,2,1$ pairs, each fixing six bits with $2^2$ completions. The sum of pair intersections is $32+12+8+4=56$.
2. Three starts must be one of $\{1,3,5\},\{1,3,6\},\{1,4,6\},\{2,4,6\}$. Their intersection counts are $2,1,1,2$, totaling $6$.
3. Four starts are impossible because six positions cannot contain four pairwise nonadjacent starts. Thus those six completions have exactly three occurrences.
4. Each triple-occurrence string was counted three times in the pair sum. The number with exactly two is $56-3\cdot6=38$.

</details>
