# Score bernoulli

*Easy · [Statistics and probability](index.md)*

One Bernoulli outcome is $x=1$, giving log likelihood $\ell(p)=\log p$ for $0<p<1$, where $\log$ denotes the natural logarithm. What is the score $\ell'(p)$ at $p=1/2$?

```answer
{"answer":{"kind":"integer","expected":"2","checker_scope":"Checks only the requested exact finite answer under the stated model; it does not certify the reasoning or modeling assumptions."}}
```

<details>
<summary>Hint 1</summary>

The score is a derivative with respect to the parameter, not with respect to the data.

</details>

<details>
<summary>Hint 2</summary>

Differentiate the natural logarithm before substituting the parameter value.

</details>

<details>
<summary>Worked solution</summary>

Differentiate the log likelihood in the interior of the parameter space.

1. For the success observation the likelihood is $L(p)=p$.
2. The score is $\ell'(p)=d(\log p)/dp=1/p$.
3. At $p=1/2$ the score is $2$. It is the score for this observed success, not its expectation over both possible outcomes.

</details>
