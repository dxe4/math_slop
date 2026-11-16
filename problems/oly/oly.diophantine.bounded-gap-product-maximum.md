# Optimize a product with a forced parity

*Hard · [Original olympiad-style problems](index.md)*

Positive integers $a,b$ satisfy $(a-b)^2=49$ and $a+b\leq100$. Find the maximum of $ab$.

```answer
{"answer":{"kind":"integer","expected":"2438","checker_scope":"Exact short answer only; the complete argument remains a worked solution, not an automatically certified proof or contest result."}}
```

<details>
<summary>Hint 1</summary>

The difference is odd, so the sum must have a particular parity.

</details>

<details>
<summary>Hint 2</summary>

Express the product using the sum and difference squares.

</details>

<details>
<summary>Worked solution</summary>

The parity restriction matters at the upper endpoint of the allowed sum.

1. The absolute difference is seven, so a and b have opposite parity and their sum is odd.
2. Writing $s=a+b$ gives $ab=(s^2-49)/4$, which increases for positive s. The largest allowed odd s is 99.
3. The maximum is $(99^2-49)/4=2438$, attained by a=53 and b=46.

</details>
