# Describe a union with no fixed finite radius

*Hard · [Set theory](index.md)*

For each positive integer n let $U_n=(-n,n)\subset\mathbb R$. Enter $\bigcup_{n\geq1}U_n$ as an interval.

```answer
{"answer":{"kind":"interval","expected":"(-infinity, infinity)","checker_scope":"Exact declared bounded result, explicit interval description or selected statement only; no unrestricted set proof or new checkpoint objective is automatically certified."}}
```

<details>
<summary>Hint 1</summary>

Every member interval lies in the real line.

</details>

<details>
<summary>Hint 2</summary>

For an arbitrary real x, an integer radius can be chosen larger than its magnitude.

</details>

<details>
<summary>Worked solution</summary>

The radius may depend on the proposed member when proving membership in an infinite union.

1. The union contains only real numbers, since every U\_n is a real interval.
2. For any real x, choose a positive integer n&gt;\|x\|. Then -n&lt;x&lt;n, so x belongs to that member interval.
3. Thus every real x occurs, and the union is $(-\infty,\infty)$.

</details>
