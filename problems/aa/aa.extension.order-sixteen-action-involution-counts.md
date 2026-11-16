# Distinguish three semidirect actions through their involutions

*Medium · [Abstract algebra problems](index.md)*

For k=7,3,5 let $G_k=\langle r,s:r^8=s^2=e,\ srs^{-1}=r^k\rangle$ be the semidirect group of order sixteen. Enter the numbers of elements of order exactly two in G\_7,G\_3,G\_5, in that order.

```answer
{"answer":{"kind":"vector","expected":["9","5","3"],"checker_scope":"Exact requested finite extension observation only; no splitting or classification proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

In the rotation subgroup only r^4 has order two.

</details>

<details>
<summary>Hint 2</summary>

For a reflection-coset element, square r^a\*s using the specified action.

</details>

<details>
<summary>Worked solution</summary>

A whole coset's element orders record the action, not only the orders of its two factors.

1. The rotation subgroup contributes exactly the involution r^4 in every case. For a coset element, (r^a\*s)^2=r^((1+k)\*a), so it is an involution exactly when (1+k)\*a=0 modulo eight; it is never the identity because it lies outside &lt;r&gt;.
2. For k=7, every one of the eight a works. For k=3, a must be even, giving four. For k=5, a must be zero or four, giving two.
3. Adding the one rotation involution gives \[9,5,3\].

</details>
