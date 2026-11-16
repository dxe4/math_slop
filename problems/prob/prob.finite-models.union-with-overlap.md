# Combine two overlapping events

*Easy · [Probability problems](index.md)*

Events satisfy $P(A)=1/2$, $P(B)=1/3$ and $P(A\cap B)=1/6$. Find $P(A\cup B)$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":2,"denominator":3},"checker_scope":"Exact answer for the stated probability model only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Adding the two event probabilities counts the overlap twice.

</details>

<details>
<summary>Hint 2</summary>

Remove one copy of the intersection probability.

</details>

<details>
<summary>Worked solution</summary>

Inclusion-exclusion corrects the double-counted overlap.

1. Use $P(A\cup B)=P(A)+P(B)-P(A\cap B)$.
2. The right side is $1/2+1/3-1/6$.
3. With denominator six, this is $(3+2-1)/6=2/3$.

</details>
