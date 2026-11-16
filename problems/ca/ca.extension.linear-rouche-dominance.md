# Choose the correct dominant term on a unit circle

*Medium · [Complex analysis problems](index.md)*

How many zeros of $z^5+3z+1$ lie in \|z\|&lt;1, counted with multiplicity?

```answer
{"answer":{"kind":"integer","expected":"1","checker_scope":"Exact requested zero, winding or normalized scalar count only. The analytic argument and its hypotheses are a worked model rather than an automatically checked proof; no existing objective contract is expanded."}}
```

<details>
<summary>Hint 1</summary>

The largest-degree term need not dominate on this radius.

</details>

<details>
<summary>Hint 2</summary>

Try the linear term and bound the other two together.

</details>

<details>
<summary>Worked solution</summary>

Rouche comparison uses boundary magnitudes, not polynomial degree alone.

1. On \|z\|=1, the linear term has modulus three while \|z^5+1\| is at most two.
2. The strict Rouche inequality makes the polynomial and 3z have the same interior zero count and excludes boundary zeros.
3. The comparison function 3z has exactly one zero there, so the answer is one.

</details>
