# Solve a functional equation by reflecting its input

*Hard · [Foundations bridge](index.md)*

A function f:R→R satisfies $f(x)+2f(-x)=3x+1$ for every real x. Find its unique polynomial rule f(x). Use x as the answer variable and retain the full real domain.

```answer
{"answer":{"kind":"expression","expected":"-3*x+1/3","checker_scope":"Only the requested exact result in the stated domain and units is checked; the reasoning remains a personal draft.","domain":{"variable":"x","excluded":[]}}}
```

<details>
<summary>Hint 1</summary>

Write the same relation with −x in place of x.

</details>

<details>
<summary>Hint 2</summary>

Eliminate f(−x) between the two equations, then verify the resulting rule in the original identity.

</details>

<details>
<summary>Worked solution</summary>

Reflecting the input creates a solvable pair of equations in two unknown output values.

1. The reflected equation is f(−x)+2f(x)=−3x+1.
2. Twice this equation minus the original gives 3f(x)=−9x+1. Thus f(x)=−3x+1/3 for every x.
3. For this rule, f(−x)=3x+1/3 and f(x)+2f(−x)=3x+1, so it indeed works on all R.
4. Elimination forced the same output at each x for any solution, proving uniqueness.

</details>
