# Select a builder with the exact domain and endpoints

*Medium · [Set theory](index.md)*

Which builder describes exactly the roster $\{-2,0,2\}$? Choices: The integers x with -2 &lt;= x &lt;= 2 and x even.; The integers x with absolute value exactly 2.; The real numbers x with -2 &lt;= x &lt;= 2.; The even integers x with 0 &lt;= x &lt;= 2.

**Options**

1. The integers x with -2 &lt;= x &lt;= 2 and x even.
2. The integers x with absolute value exactly 2.
3. The real numbers x with -2 &lt;= x &lt;= 2.
4. The even integers x with 0 &lt;= x &lt;= 2.

```answer
{"answer":{"kind":"multiple_choice","expected":"even_bounded","checker_scope":"Exact declared finite result, ordered representation or selected statement only; no unrestricted set proof or new checkpoint objective is automatically certified."},"options":["even_bounded","absolute_two","real_interval","nonnegative_even"]}
```

<details>
<summary>Hint 1</summary>

Check whether the domain is integers or all reals.

</details>

<details>
<summary>Hint 2</summary>

Both the middle point and the negative endpoint must be retained without adding other values.

</details>

<details>
<summary>Worked solution</summary>

The right domain and predicate must jointly recover every and only listed member.

1. The bounded even-integer condition selects exactly -2,0,2.
2. The absolute-value-equals-two condition omits zero, the real interval adds infinitely many values, and the nonnegative condition omits -2.
3. Only the bounded even-integer builder is equivalent.

</details>
