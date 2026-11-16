# A gcd certificate and every linear solution

*Difficulty 2 of 5 · [Number theory and cryptography audit studio](index.md) · exercise 1 of 13*

Use Euclid's algorithm to find gcd(391,299) and a Bezout identity. Then solve $391x+299y=46$ over all integer pairs (x,y). Explain why the gcd is the exact existence obstruction.

<details>
<summary>Hint 1</summary>

Both numbers have a visible common factor, but still produce the Euclidean remainder chain

</details>

<details>
<summary>Hint 2</summary>

Multiply a Bezout identity for the gcd by two

</details>

<details>
<summary>Hint 3</summary>

All solutions differ by a multiple of (299/g,-391/g)

</details>

<details>
<summary>Worked solution</summary>

Euclid gives $391=1\cdot 299+92$, $299=3\cdot 92+23$, and $92=4\cdot 23$, so $g=23$. Back-substitution gives $23=299-3(391-299)=4\cdot 299-3\cdot 391$. Doubling yields $46=-6\cdot 391+8\cdot 299$, hence one solution is $(x,y)=(-6,8)$. If two solutions are subtracted, $391\Delta x=-299\Delta y$. Dividing by 23 gives $17\Delta x=-13\Delta y$; coprimality of 17 and 13 forces $\Delta x=13t$ and $\Delta y=-17t$. Thus every solution is $x=-6+13t$, $y=8-17t$ for t in Z. More generally $ax+by=c$ is soluble exactly when gcd(a,b) divides c: divisibility is necessary because the gcd divides the left side, and Bezout makes it sufficient.

**Answer.** $gcd=23$ with $23=4\cdot 299-3\cdot 391$; all solutions are $(x,y)=(-6+13t,8-17t)$, $t\in Z$.

</details>

*Tags: gcd, Bezout identity, linear Diophantine equation*
