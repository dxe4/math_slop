# Separate a nearby root cluster from a distant root

*Medium · [Complex analysis problems](index.md)*

How many zeros of $P(z)=(z-2)^3(z+1)+1/10$ lie in \|z-2\|&lt;1/2, counted with multiplicity?

```answer
{"answer":{"kind":"integer","expected":"3","checker_scope":"Exact requested zero, winding or normalized scalar count only. The analytic argument and its hypotheses are a worked model rather than an automatically checked proof; no existing objective contract is expanded."}}
```

<details>
<summary>Hint 1</summary>

Compare with the factored polynomial before the constant perturbation.

</details>

<details>
<summary>Hint 2</summary>

Use a reverse triangle bound to keep the distant factor away from zero.

</details>

<details>
<summary>Worked solution</summary>

A local disk can isolate a multiplicity cluster under a small perturbation.

1. On the boundary, \|z+1\|=\|3+(z-2)\| is at least five halves, so \|(z-2)^3(z+1)\| is at least (1/8)(5/2)=5/16.
2. This strictly exceeds the perturbation magnitude one tenth. Rouche therefore preserves the base polynomial zero count in the disk.
3. Its root at two has multiplicity three and its root at negative one is outside the disk. Thus the perturbed count is three.

</details>
