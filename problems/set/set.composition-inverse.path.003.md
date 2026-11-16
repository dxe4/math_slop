# Overlapping domains are not enough

*Medium · [Set theory](index.md)*

Let $f:\{a,b\}\to\{1,2\}$ have $f(a)=1$, $f(b)=2$. Let $g:\{2,3\}\to\{p,q\}$ have $g(2)=p$, $g(3)=q$. With these exact domains, enter the set of all inputs in $\{a,b\}$ at which $g\circ f$ is undefined.

```answer
{"answer":{"kind":"set","expected":"{a}","checker_scope":"Checks the complete displayed exact mathematical answer under the original finite givens. Any written explanation remains separate from this bounded automatic result."}}
```

<details>
<summary>Hint 1</summary>

A composite can apply its second map only when the first output lies in that map’s domain.

</details>

<details>
<summary>Hint 2</summary>

Check the intermediate value for each input; overlap of the two intermediate sets alone is insufficient.

</details>

<details>
<summary>Worked solution</summary>

Composition requires matching intermediate values with the exact next domain.

1. At $a$, the first output is $f(a)=1$, outside the domain $\{2,3\}$ of $g$.
2. At $b$, the output $f(b)=2$ lies in that domain, and the composite equals $p$.
3. Thus exactly $\{a\}$ fails, so the composite is not defined on all of $\{a,b\}$.

</details>
