# Construct a pair after both endpoints change

*Medium · [Foundations bridge](index.md)*

This is a NEW interval: $1/5 < r < 2/5$. Construct two different rational values inside it, EACH having denominator at most $6$ after fully simplifying. Enter the two values in either order. Both endpoints are excluded. Equivalent names for one value still count only once; this pair task does not offer none. Rational fields allow at most $80$ digits and $2,048$ characters. In the optional explanation, check the new bounds and the simplest denominators; do not assume a value from an earlier question is still permitted.

Number lines run from 0 to 1 with excluded endpoints 1/5 and 2/5; no denominator grid is imposed by the figure.

```answer
{"answer":{"kind":"fraction_permissions_with_open_reasoning","expected_constraints":{"model":"fifths_budget_six_distinct_pair"},"checker_scope":"Checks exactly two distinct normalized rational values in (1/5,2/5), each with reduced positive denominator at most 6. The complete permitted value set is {1/4,1/3}, so either order and all supported equivalent names are accepted. It does not assess the optional completeness argument or certify general transfer."}}
```

<details>
<summary>Hint 1</summary>

Use the new endpoints. List denominators $1$ through $6$, compare their fractions with the bounds, and simplify repeated forms.

</details>

<details>
<summary>Hint 2</summary>

Test the candidates with denominator $3$ and denominator $4$. Denominator $5$ supplies the excluded endpoints, while denominator $6$ can repeat a value already found.

</details>

<details>
<summary>Common pitfalls</summary>

- A previously permitted value may become an excluded endpoint after the problem changes.
- Two written fractions with the same simplest form are not a distinct pair.
- A value can be strictly interior and still fail the denominator budget.

</details>

<details>
<summary>Worked solution</summary>

Transfer the permission rules to new bounds, and count rational values once even when several denominator rows name them.

1. The complete permitted VALUE set is $\{1/4, 1/3\}$. A correct pair contains both values, in either order and in any equivalent exact writing.
2. To see that both work, use sixtieths: $1/5 = 12/60, 1/4 = 15/60, 1/3 = 20/60$ and $2/5 = 24/60$. Both selected values lie strictly between the endpoints. Their simplest denominators are $4$ and $3$, both at most $6$.
3. The denominator rows prove completeness. Denominator $1$ gives no interior value, and denominator $2$ gives none because $1/2$ is already above $2/5$. Denominator $3$ contributes $1/3$. Denominator $4$ contributes $1/4$.
4. Denominator $5$ contributes no interior value: $1/5$ and $2/5$ are the excluded endpoints. Denominator $6$ contributes $2/6$, but this is the value $1/3$ already counted. Its neighboring marks $1/6$ and $3/6$ lie outside the interval. Every denominator up to $6$ has now been checked.
5. For example, first = $2/8$ and second = $2/6$ is correct: those names simplify to $1/4$ and $1/3$. The written $8$ does not violate the budget because the rule concerns the simplest denominator.
6. The pair $1/3$ and $2/6$ is incorrect because it repeats one value. The value $3/10$ is interior but has simplest denominator 10, so it fails the budget. Either endpoint also fails the strict bounds.
7. Changing the interval changes admissibility. The earlier lower endpoint $1/3$ is now interior, while the earlier witness $2/5$ is now the excluded upper endpoint. Rechecking the current statement matters.

</details>
