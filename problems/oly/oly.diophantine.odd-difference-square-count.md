# Count positive difference-of-square representations

*Hard · [Original olympiad-style problems](index.md)*

How many positive integer pairs $(x,y)$ with $x>y$ satisfy $x^2-y^2=2025$?

```answer
{"answer":{"kind":"integer","expected":"7","checker_scope":"Exact short answer only; the complete argument remains a worked solution, not an automatically certified proof or contest result."}}
```

<details>
<summary>Hint 1</summary>

Factor the left side into two positive integers of equal parity.

</details>

<details>
<summary>Hint 2</summary>

The right side is odd; exclude the equal-factor pair because y must be positive.

</details>

<details>
<summary>Worked solution</summary>

Factor pairs with the required parity correspond bijectively to solutions.

1. Let $u=x-y$ and $v=x+y$. Then $uv=2025=3^4\cdot5^2$ with $u<v$, and both factors are odd.
2. There are $(4+1)(2+1)=15$ positive divisors, hence $(15-1)/2=7$ strictly ordered factor pairs, excluding the square-root pair.
3. Each gives positive integers $x=(u+v)/2$, $y=(v-u)/2$, so the answer is $7$.

</details>
