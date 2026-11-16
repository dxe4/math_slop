# Keep the interval; change which numbers are permitted

*Medium · [Foundations bridge](index.md)*

Use the same unit interval and the strict bounds $1/3 < r < 1/2$ for EVERY row. Give one rational value meeting each row's rule, or explicitly enter none if no permitted value exists in that row. Grid N means r can be written $k/N$ with a whole-number numerator k. Budget N means the denominator after fully simplifying is at most N. Complete Grid $5$, Grid $6$, Grid $12$, Budget $4$ and Budget $6$ separately. A blank cell is unfinished; none is a mathematical claim, not a missing answer. Equivalent written fractions have the same permission. Rational fields allow at most $80$ digits and $2,048$ characters; you may add an explanation in the optional notebook.

Number lines run from 0 to 1 with excluded endpoints 1/3 and 1/2; grids: 5 equal intervals (ticks k/5, 0 ≤ k ≤ 5), 6 equal intervals (ticks k/6, 0 ≤ k ≤ 6), 12 equal intervals (ticks k/12, 0 ≤ k ≤ 12).

```answer
{"answer":{"kind":"fraction_permissions_with_open_reasoning","expected_constraints":{"model":"thirds_halves_permission_rows"},"checker_scope":"Checks every one of the five required exact rational-or-none cells against the fixed open interval (1/3,1/2) and its stated grid or reduced-denominator rule. Equivalent names preserve permission. A mathematical none claim is correct only for an exactly empty permitted finite set. All required cells are parsed before the mathematical verdict is combined. Optional writing remains unassessed."}}
```

<details>
<summary>Hint 1</summary>

Check the interval condition and the permission rule separately. A grid uses one collection of equal steps, while a budget allows all simplest denominators through its limit.

</details>

<details>
<summary>Hint 2</summary>

For grid $6$, write the endpoints as $2/6$ and $3/6$. For a budget, list denominators $1$ through the limit and check their fractions; reduce repeated written forms before counting different values.

</details>

<details>
<summary>Common pitfalls</summary>

- Grid 6 and denominator budget 6 are different rules.
- A larger grid index is not necessarily a refinement of the old grid.
- An unsimplified written denominator does not determine a number's denominator budget.

</details>

<details>
<summary>Worked solution</summary>

The same rational value can satisfy one permission rule and fail another; determine emptiness by a complete finite search.

1. Grid $5$ permits exactly $2/5$ inside the interval. The mark $1/5$ lies below $1/3$; the next mark after $2/5$ is $3/5$, already above $1/2$. Thus any equivalent writing of $2/5$ works.
2. Grid $6$ permits no value: $1/3 = 2/6$ and $1/2 = 3/6$ are consecutive marks. Enter none. Both endpoint marks themselves are excluded.
3. Grid $12$ permits exactly $5/12$, because the bounds are $4/12 < r < 6/12$. For example, $10/24$ is an equally valid writing of that same value.
4. Budget $4$ permits no value. Denominator $1$ supplies no interior number; denominator $2$ adds only the upper endpoint $1/2$; denominator $3$ adds only the lower endpoint $1/3$; for denominator $4, 1/4$ is below the interval and $2/4$ is the upper endpoint. Enter none.
5. Budget $6$ permits exactly $2/5$. Denominator $5$ adds that value; denominator $6$ has only the two excluded bounds $2/6$ and $3/6$ near this interval. The earlier denominator rows add nothing, so the finite list is complete.
6. Written denominator $10$ does not disqualify $4/10$ under budget $6$: its simplest form is $2/5$. It also lies on grid $5$. But $2/5$ is not on grid $6$, because $6$ times $2/5 = 12/5$ is not a whole number.
7. The five answers, as values or claims, are therefore $2/5$, none, $5/12$, none, $2/5$. These are not preferred input strings: equivalent exact fractions and finite decimals receive the same verdict where they name the same value.
8. Increasing a grid's subdivision count can lose a mark: grid $6$ does not contain $2/5$ even though grid $5$ does. An integer-multiple refinement preserves old marks, as $2/5 = 4/10$ shows. Increasing a denominator budget preserves every previously permitted value.
9. An empty grid or budget in this question does not make the unrestricted rational interval empty. For example, the first exercise constructs values there without those finite permission rules.

</details>
