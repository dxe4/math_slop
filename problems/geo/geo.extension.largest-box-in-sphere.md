# Maximize an enclosed rectangular box volume

*Hard · [Geometry and trigonometry problems](index.md)*

A closed ball has radius $3$. A rectangular box, of arbitrary position and orientation, lies wholly inside it. Its maximum volume is $q\sqrt3$. Find $q$ and justify attainment.

```answer
{"answer":{"kind":"integer","expected":"24","checker_scope":"The exact requested finite result only; a correct entry does not certify a geometric argument or award reviewed evidence."}}
```

<details>
<summary>Hint 1</summary>

Every body diagonal joins two ball points and therefore has length at most $6$.

</details>

<details>
<summary>Hint 2</summary>

Apply AM-GM to the squares of the three positive edge lengths.

</details>

<details>
<summary>Worked solution</summary>

Bound all box dimensions through a body diagonal.

1. If box edge lengths are $a,b,c>0$, a body diagonal has length $\sqrt{a^2+b^2+c^2}$. Containment implies $a^2+b^2+c^2\le36$.
2. AM-GM gives $a^2b^2c^2\le((a^2+b^2+c^2)/3)^3\le12^3$.
3. Taking positive square roots yields $abc\le24\sqrt3$. Degenerate boxes have zero volume and do not increase this bound.
4. A cube centered at the ball center with edge $2\sqrt3$ has all vertex distances $\sqrt3(2\sqrt3)/2=3$. The convex ball contains their entire convex hull, so this cube is feasible and attains the bound.
5. Therefore $q=24$. The bound allows every orientation and does not assume the original box was centered.

</details>
