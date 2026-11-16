# Parameterize strict integer partitions

*Hard · [Original olympiad-style problems](index.md)*

How many positive integer triples $(a,b,c)$ satisfy $a<b<c$ and $a+b+c=12$? Their displayed order is fixed by the inequalities.

```answer
{"answer":{"kind":"integer","expected":"7","checker_scope":"Exact short answer only; the complete argument remains a worked solution, not an automatically certified proof or contest result."}}
```

<details>
<summary>Hint 1</summary>

Use positive increments to encode both strict inequalities.

</details>

<details>
<summary>Hint 2</summary>

After fixing the smallest part, count the remaining increment that still leaves the last one positive.

</details>

<details>
<summary>Worked solution</summary>

Positive gaps turn strict partitions into a short bounded linear count.

1. Write a=i, b=i+j and c=i+j+k with positive i,j,k. The sum equation is $3i+2j+k=12$.
2. For i=1, j can be 1 through 4; for i=2, j can be 1 through 2; for i=3, only j=1 works. Larger i cannot work.
3. The total number is $4+2+1=7$.

</details>
