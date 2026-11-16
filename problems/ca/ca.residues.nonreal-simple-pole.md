# Residue at a nonreal simple pole

*Medium · [Complex analysis problems](index.md)*

Find the residue of $1/(z^2+1)$ at $z=i$, in $a+bi$ form.

```answer
{"answer":{"kind":"complex","expected":"-1/2i","checker_scope":"Exact requested complex value, polynomial, set or normalized contour value only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Factor the denominator around the specified simple zero.

</details>

<details>
<summary>Hint 2</summary>

Cancel the vanishing factor before taking the limit.

</details>

<details>
<summary>Worked solution</summary>

The simple-pole limit evaluates the remaining nonzero denominator factor.

1. $z^2+1=(z-i)(z+i)$.
2. The residue is $\lim_{z\to i}(z-i)/(z^2+1)=1/(2i)$.
3. This equals $-i/2$.

</details>
