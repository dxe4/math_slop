# Solve a logarithmic equation on its stated domain

*Hard · [Foundations bridge](index.md)*

For real $x>1$, solve $\log_2(x-1)+\log_2(x+1)=3$.

```answer
{"answer":{"kind":"integer","expected":"3","checker_scope":"Exact requested bounded result only. Worked reasoning is not automatically certified; this draft introduces no new checkpoint objective or eligibility."}}
```

<details>
<summary>Hint 1</summary>

Both logarithm arguments are positive on the stated domain.

</details>

<details>
<summary>Hint 2</summary>

Combine the two logarithms, convert to an exponent equation and retain only roots in the original domain.

</details>

<details>
<summary>Worked solution</summary>

The logarithm rule and the positive domain must be used together.

1. On x&gt;1 the equation is $\log_2[(x-1)(x+1)]=3$.
2. Thus $x^2-1=2^3=8$, so x=3 or x=-3.
3. Only x=3 belongs to the original domain; it indeed gives logarithm sum one plus two.

</details>
