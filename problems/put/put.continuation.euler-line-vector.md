# Euler line vector

*Hard · [Original Putnam-style training](index.md)*

For a nondegenerate triangle with circumcenter $O$, centroid $G$, and orthocenter $H$, prove $O,G,H$ are collinear and $OG:GH=1:2$ when distinct.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Place $O$ at the origin and write vertex vectors $a,b,c$ with equal norms.

</details>

<details>
<summary>Hint 2</summary>

Show $h=a+b+c$ lies on all altitudes, then compare it with the centroid vector.

</details>

<details>
<summary>Model proof</summary>

Hence $O,G,H$ lie on one vector line, with $|OG|=|h|/3$ and $|GH|=2|h|/3$ when distinct.

1. Set $h=a+b+c$. Since $|b|=|c|$, $(h-a)\cdot(b-c)=(b+c)\cdot(b-c)=|b|^2-|c|^2=0$; thus line $Ah$ is perpendicular to $BC$. Cyclically $h$ lies on every altitude, so $h$ is the orthocenter vector.
2. The centroid vector is $g=(a+b+c)/3=h/3$, while $O$ has vector zero.
3. Hence $O,G,H$ lie on one vector line, with $|OG|=|h|/3$ and $|GH|=2|h|/3$ when distinct.

**Self-assessment rubric**

- Place the circumcenter at the origin and use equal vertex norms.
- Prove a+b+c lies on every altitude by dot products.
- Compare the centroid and orthocenter vectors to derive collinearity and ratio.

</details>
