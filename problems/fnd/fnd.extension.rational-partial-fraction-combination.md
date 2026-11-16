# Combine genuine partial fractions while retaining both poles

*Medium · [Foundations bridge](index.md)*

Combine $3/(x-2)+2/(x+1)$ into one rational rule and state every excluded real input from the original expression. Enter the rule in value and the original exclusions in excluded.

```answer
{"answer":{"kind":"rational_function","expected":"(5*x-1)/((x-2)*(x+1))","checker_scope":"Only the requested exact result in the stated domain and units is checked; the reasoning remains a personal draft.","domain":{"variable":"x","excluded":["-1","2"]}}}
```

<details>
<summary>Hint 1</summary>

Use the product of the two distinct linear denominators.

</details>

<details>
<summary>Hint 2</summary>

Combine the numerator terms and check whether either denominator factor cancels.

</details>

<details>
<summary>Worked solution</summary>

An exact rational identity must preserve the domain as well as the simplified rule.

1. The original denominators exclude x=2 and x=−1.
2. The combined numerator is 3(x+1)+2(x−2)=5x−1, so the rule is (5x−1)/((x−2)(x+1)).
3. The numerator is nonzero at both 2 and −1, so neither pole cancels. The excluded set remains {−1,2}.

</details>
