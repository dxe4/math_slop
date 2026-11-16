# Classify three unit fractions summing to one

*Hard · [Original olympiad-style problems](index.md)*

Find every unordered triple of positive integers $(a,b,c)$ satisfying $1/a+1/b+1/c=1$, and prove completeness.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

Order the denominators increasingly; the first is at most three and cannot be one.

</details>

<details>
<summary>Hint 2</summary>

For first denominator two, bound the second using the two remaining reciprocals before solving for the third.

</details>

<details>
<summary>Model proof</summary>

Use sharp ordered bounds to reduce an infinite problem to three cases.

1. Assume $a\le b\le c$. Since the reciprocal sum is at most $3/a$, $a\le3$. Also $a=1$ leaves a positive residual sum equal to zero, impossible.
2. If $a=3$, the remaining denominators are at least three. Equality in the maximum possible reciprocal sum forces $b=c=3$.
3. If $a=2$, then $1/b+1/c=1/2$. The value $b=2$ is impossible, and $2/b\ge1/2$ gives $b\le4$. Thus $b=3$ or $4$.
4. These give $c=6$ and $4$, respectively. Each triple $(3,3,3),(2,3,6),(2,4,4)$ satisfies the equation.
5. All unordered triples are those three; ordered solutions are their permutations. The positivity and ordering were used in every bound.

**Self-assessment rubric**

- Bound and exclude possible smallest denominators correctly.
- Bound the middle denominator instead of leaving an unbounded search.
- Solve and verify every remaining case with unordered convention clear.

</details>
