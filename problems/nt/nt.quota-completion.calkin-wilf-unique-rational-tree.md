# Prove a binary tree enumerates every positive rational once

*Hard · [Number theory](index.md)*

Start at 1/1 and give each reduced positive node a/b the ordered children a/(a+b) and (a+b)/b. Prove every positive reduced rational occurs exactly once. Then prove the sum of numerators, and separately denominators, on depth n is $3^n$, where the root has depth zero.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, grade or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Find the uniquely possible parent of p/q according to whether p&lt;q or p&gt;q.

</details>

<details>
<summary>Hint 2</summary>

The parent lowers p+q; for level sums, add the two children of one node before summing across the level.

</details>

<details>
<summary>Model proof</summary>

A decreasing arithmetic parent map proves both completeness and uniqueness of an infinite enumeration.

1. Coprimality is preserved by both children because gcd(a,a+b)=gcd(a+b,b)=gcd(a,b). Every generated node is a positive reduced fraction; a left child is less than one and a right child greater than one.
2. For any reduced p/q≠1, if p&lt;q its only possible parent is p/(q−p); if p&gt;q it is (p−q)/q. These parents stay positive and reduced and strictly lower p+q. The descent must end at equal numerator and denominator, which reducedness makes 1/1.
3. Reversing that unique finite descent gives a path from the root to p/q. Since at every step the side and parent are forced, no second path can give the same rational; a return to the root is excluded by strict increase of numerator-plus-denominator along a child step.
4. Let N\_n,D\_n be the numerator and denominator sums at depth n. The two children of a/b contribute 2a+b to numerators and a+2b to denominators. Hence N\_{n+1}=2N\_n+D\_n and D\_{n+1}=N\_n+2D\_n. Starting with N₀=D₀=1, induction gives N\_n=D\_n=3ⁿ.

**Self-assessment rubric**

- Checks positivity, coprimality and left/right separation.
- Constructs the unique parent and proves its descent terminates at 1/1.
- Proves both reachability and uniqueness, not merely that no fraction is lost by one step.
- Derives and solves the coupled level-sum recurrences with the root index convention.

</details>
