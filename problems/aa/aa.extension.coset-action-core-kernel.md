# Intersect stabilizers to find the action kernel

*Easy · [Abstract algebra problems](index.md)*

For the left action of S3 on S3/H with H=&lt;(12)&gt;, the kernel is the intersection of all conjugates of H. Find the order of this kernel $K$.

```answer
{"answer":{"kind":"integer","expected":1,"checker_scope":"Exact requested finite action quantity only; no general action proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

The conjugates are the three distinct transposition subgroups.

</details>

<details>
<summary>Hint 2</summary>

An element in the kernel must belong to all of them.

</details>

<details>
<summary>Worked solution</summary>

A stabilizer need not itself be the whole action kernel.

1. The conjugate subgroups are {e,(12)}, {e,(13)} and {e,(23)}.
2. Their only common member is the identity.
3. Thus the kernel has order one, so the action is faithful.

</details>
