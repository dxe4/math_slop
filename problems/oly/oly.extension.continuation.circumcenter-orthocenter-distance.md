# Recover a center distance from vertex vectors

*Medium · [Original olympiad-style problems](index.md)*

A triangle has sides $4,5,6$, circumcenter $O$ and orthocenter $H$. Find $OH^2$. You may use Heron\'s formula.

```answer
{"answer":{"kind":"rational","expected":{"numerator":37,"denominator":7},"checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

With $O$ as origin and vertex vectors $u,v,w$, show that $h=u+v+w$.

</details>

<details>
<summary>Hint 2</summary>

Expand $|u+v+w|^2$ using $|u|=|v|=|w|=R$ and the three squared side lengths.

</details>

<details>
<summary>Worked solution</summary>

Equal vertex norms make the sum of the vertex vectors satisfy all altitude equations.

1. For example $(h-u)\cdot(v-w)=(v+w)\cdot(v-w)=|v|^2-|w|^2=0$. Thus $h$ lies on the altitude through $u$, and likewise on the other two.
2. For every pair, $2u\cdot v=2R^2-|u-v|^2$. Consequently $OH^2=9R^2-(a^2+b^2+c^2)$.
3. Heron gives area $15\sqrt7/4$, so $R=abc/(4\Delta)=8/\sqrt7$. The result is $576/7-77=37/7$.

</details>
