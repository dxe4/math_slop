# Find a multiplicative invariant for merging numbers

*Hard · [Original olympiad-style problems](index.md)*

The numbers $1,2,\ldots,20$ are written on a board. Repeatedly erase two numbers a,b and write $ab+a+b$ instead, until one number remains. Find that final number.

```answer
{"answer":{"kind":"integer","expected":"51090942171709439999","checker_scope":"Exact short answer only; the complete argument remains a worked solution, not an automatically certified proof or contest result."}}
```

<details>
<summary>Hint 1</summary>

Add one to the new number and factor.

</details>

<details>
<summary>Hint 2</summary>

The product of one plus every currently written number does not change under a move.

</details>

<details>
<summary>Worked solution</summary>

A shifted product is invariant under every merge order.

1. The replacement obeys $ab+a+b+1=(a+1)(b+1)$. Thus the product of one plus all written entries is invariant.
2. Initially that product is $2\cdot3\cdots21=21!=51090942171709440000$.
3. If the final entry is N, its shifted value N+1 is that product, so $N=51090942171709439999$.

</details>
