# Resolve a coupled integer-part equation

*Medium · [Original olympiad-style problems](index.md)*

Find all real $x$ satisfying $\lfloor x\rfloor+\lfloor3x\rfloor=5$. Enter the answer as an interval with rational endpoints.

```answer
{"answer":{"kind":"interval","expected":"[4/3,5/3)","checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

Write $x=k+t$ with integer $k$ and $0\le t<1$.

</details>

<details>
<summary>Hint 2</summary>

Then the sum is $4k+\lfloor3t\rfloor$, whose final term is zero, one or two.

</details>

<details>
<summary>Worked solution</summary>

Separate the integer part from its bounded fractional remainder.

1. The equation becomes $4k+j=5$ with $j\in\{0,1,2\}$. The only possibility is $k=1,j=1$.
2. The condition $\lfloor3t\rfloor=1$ is exactly $1/3\le t<2/3$.
3. Adding the integer part gives $4/3\le x<5/3$, with the upper endpoint excluded by the floor jump.

</details>
