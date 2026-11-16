# Count normal and nonnormal coset classes separately

*Medium · [Abstract algebra problems](index.md)*

In $G=C_7\rtimes C_3$ with generators r,s satisfying r^7=s^3=e and s\*r\*s^(-1)=r^2, find the total number of conjugacy classes.

```answer
{"answer":{"kind":"integer","expected":5,"checker_scope":"Exact requested finite extension observation only; no splitting or classification proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

The six nonidentity powers of r split into orbits under multiplication by two modulo seven.

</details>

<details>
<summary>Hint 2</summary>

A nonidentity element outside &lt;r&gt; has centralizer of order three.

</details>

<details>
<summary>Worked solution</summary>

A semidirect action determines two different conjugacy-size regimes.

1. Conjugating powers of r multiplies their exponents by two; its two nonzero exponent orbits are {1,2,4} and {3,6,5}. Along with the identity, this gives three classes inside &lt;r&gt;.
2. For s, a normal element r^a commutes with it only if 2a=a modulo seven, hence a=0. Its centralizer is &lt;s&gt;, order three; every element of the cosets &lt;r&gt;s and &lt;r&gt;s^2 is conjugate within its own coset by a suitable power of r, giving one class of size seven in each.
3. The classes are therefore one identity class, two size-three classes and two size-seven classes, totaling five and accounting for all twenty-one elements.

</details>
