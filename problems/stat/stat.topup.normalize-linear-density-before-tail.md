# Find a density constant before an event probability

*Medium · [Statistics and probability](index.md)*

A density is $f(x)=cx$ on \[0,2\] and zero elsewhere, with c&gt;0. Return c and probability for the event X&gt;1.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"c":"1/2","probability":"3/4"},"checker_scope":"Checks only the requested result under the explicitly stated finite model or convention; does not certify a modeling assumption, causal claim or open argument."}}
```

<details>
<summary>Hint 1</summary>

Normalize the total area on the full support first.

</details>

<details>
<summary>Hint 2</summary>

Then integrate the normalized density only from one to two.

</details>

<details>
<summary>Worked solution</summary>

The normalization constant must be fixed before the tail area is meaningful.

1. The full integral is $c[x^2/2]_0^2=2c$, so normalization requires $c=1/2$.
2. The event integral is $[x^2/4]_1^2$.
3. Its value is $1-1/4=3/4$, giving c one half and probability three quarters.

</details>
