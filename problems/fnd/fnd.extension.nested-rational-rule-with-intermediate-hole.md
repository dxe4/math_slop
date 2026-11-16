# Retain an intermediate hole in a nested rational rule

*Medium · [Foundations bridge](index.md)*

Simplify $1/(2+1/x)$ over the real numbers and state every original excluded input. Enter the rule in value and the original exclusions in excluded.

```answer
{"answer":{"kind":"rational_function","expected":"x/(2*x+1)","checker_scope":"Only the requested exact result in the stated domain and units is checked; the reasoning remains a personal draft.","domain":{"variable":"x","excluded":["-1/2","0"]}}}
```

<details>
<summary>Hint 1</summary>

The inner reciprocal excludes zero before any algebra is done.

</details>

<details>
<summary>Hint 2</summary>

Rewrite the outer denominator as (2x+1)/x, and also require it not to vanish.

</details>

<details>
<summary>Worked solution</summary>

A cancellation can hide an inner-domain restriction without removing it from the original function.

1. The inner 1/x requires x≠0. The outer denominator is zero when 2+1/x=0, namely x=−1/2.
2. For all remaining inputs, the expression simplifies to x/(2x+1).
3. The simplified rule has a pole at −1/2 but would be defined at 0. Retain 0 as an original hole: the full excluded set is {−1/2,0}.

</details>
