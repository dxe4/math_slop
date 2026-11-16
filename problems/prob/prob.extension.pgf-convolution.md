# Multiply generating polynomials

*Medium · [Probability problems](index.md)*

Let $X,Y$ be independent nonnegative integer-valued variables with finite supports. Define $G_X(s)=E[s^X]$ and $G_Y(s)=E[s^Y]$, using $s^0=1$ even at $s=0$. Prove $G_{X+Y}(s)=G_X(s)G_Y(s)$ for $0\le s\le1$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or graded objective evidence."}}
```

<details>
<summary>Hint 1</summary>

Expand the expectation as a finite sum over all possible value pairs.

</details>

<details>
<summary>Hint 2</summary>

Independence factors each joint probability; separate the two finite sums after using the exponent rule.

</details>

<details>
<summary>Model proof</summary>

Factor the finite joint-law sum using independence.

1. Write $p_i=P(X=i)$ and $q_j=P(Y=j)$ over their finite supports. Then $G_{X+Y}(s)=\sum_i\sum_j s^{i+j}P(X=i,Y=j)$.
2. Independence gives $P(X=i,Y=j)=p_iq_j$, while $s^{i+j}=s^is^j$, including $s=0$ with the stipulated convention.
3. The finite double sum factors as $(\sum_i s^ip_i)(\sum_j s^jq_j)=G_X(s)G_Y(s)$. Finite support makes all sums polynomials, so no infinite-series interchange or convergence assumption is needed.

The finite joint-law sum factors by independence, giving $G_{X+Y}=G_XG_Y$.

**Self-assessment rubric**

- Expand the generating polynomial using the finite joint support.
- Use independence to factor joint masses and factor the powers correctly.
- Separate the finite sums and identify the two generating polynomials, including the zero convention.

</details>
