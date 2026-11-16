# Cancel a factor with no real zeros

*Medium · [Foundations bridge](index.md)*

Simplify $(x^3+x)/(x^2+1)^2$ and state all excluded real inputs. Work over R; enter the rule in value and exclusions in excluded.

```answer
{"answer":{"kind":"rational_function","expected":"x/(x^2+1)","checker_scope":"Only the requested exact result in the stated domain and units is checked; the reasoning remains a personal draft.","domain":{"variable":"x","excluded":[]}}}
```

<details>
<summary>Hint 1</summary>

Factor x³+x as x(x²+1).

</details>

<details>
<summary>Hint 2</summary>

A real square plus one is strictly positive, so the common factor creates no real hole.

</details>

<details>
<summary>Worked solution</summary>

Not every cancelled factor excludes a real input.

1. For every real x, x²+1&gt;0. Hence the original squared denominator is nonzero on all R.
2. Factor the numerator and cancel one nonzero factor x²+1 to obtain x/(x²+1).
3. The original exclusions are empty, and the simplified denominator remains nonvanishing over R.

</details>
