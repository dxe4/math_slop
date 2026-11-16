# Classify a functional equation by its fixed image

*Hard · [Original olympiad-style problems](index.md)*

How many functions f from a fixed $6$-element set to itself satisfy f(f(x))=f(x) for every x?

```answer
{"answer":{"kind":"integer","expected":"1057","checker_scope":"Exact requested finite count, sharp bound or declared move vector only. The full combinatorial argument is a worked model, not an automatically checked proof; this new skill changes no existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

Every image element must be fixed by the function.

</details>

<details>
<summary>Hint 2</summary>

After choosing the image, determine where the other elements may be sent.

</details>

<details>
<summary>Worked solution</summary>

The functional equation makes the image exactly the fixed-point set.

1. If the image has size k, each image element y=f(x) satisfies f(y)=y. Conversely any chosen nonempty k-element image fixed pointwise, with all remaining elements sent into it, satisfies the equation.
2. For a chosen image there are k^(6-k) choices for the other values, so the total is the sum of binomial(6,k)k^(6-k) for k=1 through six.
3. The six terms are 6,240,540,240,30,1, whose sum is 1057.

</details>
