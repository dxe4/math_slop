# A signed distance sum for the circumcenter

*Hard · [Original olympiad-style problems](index.md)*

For triangle $ABC$ with circumcenter $O$, let $d_a$ be the signed distance from $O$ to line $BC$, positive on the side containing $A$; define $d_b,d_c$ cyclically. Prove $d_a+d_b+d_c=R+r$. The triangle may be obtuse.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

Show $d_a=R\cos A$, with the sign changing when $A$ is obtuse.

</details>

<details>
<summary>Hint 2</summary>

Prove $\cos A+\cos B+\cos C=1+4\sin(A/2)\sin(B/2)\sin(C/2)$ and $r=4R\sin(A/2)\sin(B/2)\sin(C/2)$.

</details>

<details>
<summary>Model proof</summary>

The signed geometry matches a half-angle identity valid for every nondegenerate triangle.

1. The perpendicular from the circumcenter to chord $BC$ bisects it. The right-triangle chord relation gives the distance magnitude $R|\cos A|$; the center is on the $A$ side of the chord exactly when $A<90^\circ$. Thus the signed value is $R\cos A$, including zero at a right angle.
2. Put $u=A/2,v=B/2,w=C/2$, so $u+v+w=90^\circ$. The identity $\cos A+\cos B=2\sin w\cos(u-v)$ and $\cos C=1-2\sin^2w$ yield the sum $1+2\sin w[\cos(u-v)-\sin w]$. Since $\sin w=\cos(u+v)$, the bracket equals $2\sin u\sin v$.
3. From area $\Delta=rs=abc/(4R)$ and $\sin(A/2)^2=(s-b)(s-c)/(bc)$ cyclically, the product of the positive half-angle sines is $(s-a)(s-b)(s-c)/(abc)=\Delta^2/(sabc)=r/(4R)$.
4. Multiplying the cosine identity by $R$ now gives $d_a+d_b+d_c=R+r$. Unsigned distances would fail in the obtuse case, which is why the side convention is essential.

**Self-assessment rubric**

- Identify the sign and magnitude of each circumcenter-to-side distance.
- Derive the cosine-sum identity from the three half-angles.
- Connect the half-angle product to r/(4R) through area identities.
- Retain the signed convention rather than silently taking absolute values.

</details>
