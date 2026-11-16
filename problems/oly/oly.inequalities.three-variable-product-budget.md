# Prove a product maximum is attained

*Medium · [Original olympiad-style problems](index.md)*

Nonnegative reals a,b,c satisfy $a+b+c=6$. Find the maximum of abc.

```answer
{"answer":{"kind":"integer","expected":"8","checker_scope":"Exact short answer only; the complete argument remains a worked solution, not an automatically certified proof or contest result."}}
```

<details>
<summary>Hint 1</summary>

Compare their arithmetic mean with their geometric mean.

</details>

<details>
<summary>Hint 2</summary>

The equality case needs all three coordinates equal.

</details>

<details>
<summary>Worked solution</summary>

AM-GM gives a global bound and an admissible equality configuration.

1. AM-GM yields $abc\leq[(a+b+c)/3]^3=2^3$.
2. The point a=b=c=2 meets the nonnegative sum constraint.
3. It attains abc=8, so the maximum is $8$.

</details>
