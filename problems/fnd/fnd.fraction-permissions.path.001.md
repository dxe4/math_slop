# Construct two different interior values

*Medium · [Foundations bridge](index.md)*

Choose two different rational NUMBERS strictly between $1/3$ and $1/2$. Enter one in First value and one in Second value, in either order. Different written names for the same number do not count as two values. Both endpoints are excluded, and there is no prescribed pair. Use exact integers, fractions or finite decimals; each rational field allows at most $80$ digits and $2,048$ characters. You may explain both comparisons in the optional notebook.

Number lines run from 0 to 1 with excluded endpoints 1/3 and 1/2; no denominator grid is imposed by the figure.

```answer
{"answer":{"kind":"fraction_permissions_with_open_reasoning","expected_constraints":{"model":"thirds_halves_distinct_pair"},"checker_scope":"Checks exactly two distinct normalized rational values in the open interval (1/3,1/2), within the declared rational input limits. Either order and equivalent fraction or exact finite-decimal names are accepted. It does not assess the optional explanation, an unrestricted density proof or general mastery."}}
```

<details>
<summary>Hint 1</summary>

Give the endpoints a common denominator. If their grid leaves too few positions, subdivide those pieces again.

</details>

<details>
<summary>Hint 2</summary>

In twenty-fourths the endpoints are $8/24$ and $12/24$. Choose two different whole-number numerators strictly between $8$ and $12$, then check that your written fractions name different values.

</details>

<details>
<summary>Common pitfalls</summary>

- Changing a numerator and denominator by the same factor changes the written name, not the rational value.
- Strict endpoints stay excluded under every equivalent writing.

</details>

<details>
<summary>Worked solution</summary>

Construct values that satisfy the conditions; different spellings do not create different numbers.

1. The complete answer condition is $1/3$ &lt; first &lt; $1/2$ and $1/3$ &lt; second &lt; $1/2$, with first and second different as rational values. No particular midpoint or denominator is required.
2. For example, $3/8 = 9/24$ and $11/24$ both lie strictly between $8/24$ and $12/24$. Since $9/24$ is not $11/24$, the pair works, and its order can be reversed.
3. Equivalent forms are equally valid: $6/16$ and $22/48$ name the same two values as the example. But $3/8$ together with $9/24$ fails the distinct-values requirement: those two written fractions name one number.
4. An endpoint is not an interior value. For instance, $2/6$ equals the excluded endpoint $1/3$, and $3/6$ equals the excluded endpoint $1/2$.
5. There are more than two possible interior values. Once you have one, averaging it with an endpoint produces another rational still strictly inside the original interval. This is a way to construct further candidates, not a special form required by the checker.

</details>
