# Check event independence

*Easy · [Probability problems](index.md)*

Events satisfy $P(A)=1/2$, $P(B)=1/3$ and $P(A\cap B)=1/6$. Enter $1$ if $A,B$ are independent and $0$ otherwise.

```answer
{"answer":{"kind":"integer","expected":"1","checker_scope":"Checks the encoded independence decision for these two events only; the written explanation is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Recall the product criterion defining independence of two events.

</details>

<details>
<summary>Hint 2</summary>

Compute the product of the two marginal probabilities and compare it with the supplied intersection probability.

</details>

<details>
<summary>Worked solution</summary>

Compare the joint probability with the product of marginals.

1. Two events are independent exactly when $P(A\cap B)=P(A)P(B)$.
2. Here the product is $(1/2)(1/3)=1/6$, equal to the supplied intersection probability.
3. Thus these two events are independent and the requested code is $1$. This calculation makes no claim about any additional events.

The intersection equals the marginal product, so the events are independent and the code is $1$.

</details>
