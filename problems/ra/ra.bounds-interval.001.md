# Separate an interval endpoint from an attained extremum

*Medium · [Real analysis](index.md)*

Let $S=[-3/2,5/2)$ as a subset of the real numbers. Give inf S, sup S, min S and max S. Use null if an extremum does not exist. You may add a reason in the optional notebook.

```answer
{"answer":{"kind":"bounds_record_with_open_reasoning","expected":{"inf":"-3/2","sup":"5/2","min":"-3/2","max":null},"checker_scope":"Checks infimum, supremum, minimum and maximum entries only. Any explanation is an unassessed draft; no automatic proof validity or proof mastery claim."}}
```

<details>
<summary>Hint 1</summary>

Square brackets include an endpoint; a parenthesis excludes it.

</details>

<details>
<summary>Hint 2</summary>

A supremum need not belong to the set, but a maximum must.

</details>

<details>
<summary>Worked solution</summary>

Bounds depend on order; extrema additionally depend on membership.

1. Every element is at least $-3/2$, and that endpoint belongs to S. Hence inf S=min $S=-3/2$.
2. Every element is less than $5/2$, while elements can be chosen arbitrarily close to $5/2$ from below. Hence sup $S=5/2$.
3. The right endpoint is absent, and each element has a larger element in the interval, so max S does not exist.

</details>
