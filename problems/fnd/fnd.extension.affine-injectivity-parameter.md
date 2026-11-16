# Find the parameter values that preserve injectivity

*Medium · [Foundations bridge](index.md)*

For $f_a(x)=ax+4$ from R to R, give all real a for which f\_a is injective. Return an interval or interval union.

```answer
{"answer":{"kind":"interval","expected":"(-infinity,0) U (0,infinity)","checker_scope":"Only the requested exact result in the stated domain and units is checked; the reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Compare f\_a(x)=f\_a(y) for arbitrary x,y.

</details>

<details>
<summary>Hint 2</summary>

Treat a=0 separately before dividing by a.

</details>

<details>
<summary>Worked solution</summary>

A nonzero linear coefficient separates inputs; zero collapses them.

1. If a≠0, equality ax+4=ay+4 implies a(x−y)=0 and hence x=y. Thus f\_a is injective.
2. If a=0 the rule is constant 4 and different inputs have equal outputs, so it is not injective.
3. The parameter set is (−∞,0)∪(0,∞).

</details>
