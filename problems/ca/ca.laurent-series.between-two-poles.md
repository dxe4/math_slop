# Choose opposite expansions between two poles

*Hard · [Complex analysis problems](index.md)*

In the annulus $1<|z|<2$, find the constant coefficient in the Laurent expansion about zero of $1/((z-1)(z-2))$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":-1,"denominator":2},"checker_scope":"Exact requested complex value, polynomial, coefficient, radius or domain only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Separate the two simple fractions before expanding.

</details>

<details>
<summary>Hint 2</summary>

The stated annulus is exterior to one pole radius and interior to the other, so the two fractions need different geometric forms.

</details>

<details>
<summary>Worked solution</summary>

The annulus selects one negative-power expansion and one nonnegative-power expansion.

1. Partial fractions give $1/((z-1)(z-2))=-1/(z-1)+1/(z-2)$.
2. For $|z|>1$, the first term is $-\sum_{n\ge0}z^{-n-1}$ and has no constant coefficient.
3. For $|z|<2$, the second is $-(1/2)/(1-z/2)=-\sum_{n\ge0}z^n/2^{n+1}$.
4. Only the second series contributes a constant, namely $-1/2$.

</details>
