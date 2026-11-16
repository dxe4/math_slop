# Decode a bit word in its declared ground-set order

*Medium · [Combinatorics](index.md)*

The ground set has ordered elements $(a,b,c,d,e,f,g,h)$. Decode membership word 10100110, where one means included. Return the subset as a set of labels.

```answer
{"answer":{"kind":"set","expected":["a","c","f","g"],"checker_scope":"Exact finite count, coefficient, set or declared representation only. Worked counting arguments and recurrence derivations are not automatically proof-checked; no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

Align every bit with its one-based position in the declared order.

</details>

<details>
<summary>Hint 2</summary>

Include only positions carrying one, without reversing the word.

</details>

<details>
<summary>Worked solution</summary>

A fixed position convention makes a membership word unambiguous.

1. The one bits occur in positions one, three, six and seven.
2. Those positions correspond to a,c,f,g in the supplied ground-set order.
3. Thus the encoded subset is $\{a,c,f,g\}$.

</details>
