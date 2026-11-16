# Count an unordered reciprocal equation

*Hard · [Original olympiad-style problems](index.md)*

How many positive integer pairs $(x,y)$ with $x\leq y$ satisfy $1/x+1/y=1/12$?

```answer
{"answer":{"kind":"integer","expected":"8","checker_scope":"Exact short answer only; the complete argument remains a worked solution, not an automatically certified proof or contest result."}}
```

<details>
<summary>Hint 1</summary>

Clear denominators and complete a product by adding a constant.

</details>

<details>
<summary>Hint 2</summary>

The transformed factors are positive, and their order follows the original coordinate order.

</details>

<details>
<summary>Worked solution</summary>

A shifted factorization converts the reciprocal equation into a divisor-pair count.

1. Clearing denominators yields $xy=12x+12y$, hence $(x-12)(y-12)=144$. The original equation forces x and y both strictly greater than twelve.
2. Write $d=x-12\leq y-12=144/d$. Thus d is a positive divisor of 144 no greater than twelve.
3. The possibilities are $1,2,3,4,6,8,9,12$, giving $8$ unordered pairs.

</details>
