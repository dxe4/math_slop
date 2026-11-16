# Update two hypothesis weights

*Medium · [Statistics and probability](index.md)*

Mutually exclusive, exhaustive hypotheses A and B have priors $1/4$ and $3/4$. For the observed evidence E, likelihoods are P(E given A)=3/4 and P(E given B)=1/4. Find P(A given E).

| Given information | Value |
| --- | --- |
| hypotheses form partition | true |
| priors | {"A":"1/4","B":"3/4"} |
| likelihoods | {"A":"3/4","B":"1/4"} |
| target | A |

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Checks the requested exact quantities under the stated conventions and model. It does not certify an inferential assumption or assess an open explanation."}}
```

<details>
<summary>Hint 1</summary>

Multiply each prior by its own likelihood.

</details>

<details>
<summary>Hint 2</summary>

Divide A’s product by the sum of both products.

</details>

<details>
<summary>Worked solution</summary>

The likelihood must be combined with the prior before normalization.

1. The products are($1/4$)$(3/4)=3/16$ and($3/4$)$(1/4)=3/16$.
2. Their sum is 3/8, so the posterior of A is($3/16$)/$(3/8)=1/2$.

</details>
