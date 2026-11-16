# Recognize a cusp from unequal one-sided slopes

*Easy · [Calculus](index.md)*

At zero, $|x|$ has left derivative −1 and right derivative 1. Does its two-sided derivative exist? Return {exists} or {does\_not\_exist}.

```answer
{"answer":{"kind":"set","expected":["does_not_exist"],"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

A two-sided finite derivative requires equal one-sided limits.

</details>

<details>
<summary>Hint 2</summary>

Compare the two supplied values.

</details>

<details>
<summary>Worked solution</summary>

A corner can be continuous without differentiable slope agreement.

1. The two one-sided derivative values are −1 and 1.
2. They are unequal.
3. Thus no two-sided derivative exists, encoded by {does\_not\_exist}.

</details>
