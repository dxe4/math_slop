# Control an unbounded sector by a strictly slower angular growth exponent

*Hard · [Complex analysis problems](index.md)*

Let f be holomorphic in the sector $|\arg z|<\pi/4$ and continuous on its closure, including zero. Suppose \|f\|&lt;=1 on both boundary rays and \|f(z)\|&lt;=C\*exp(C\*\|z\|^rho) in the sector, with C&gt;0 and 0&lt;=rho&lt;2. Prove \|f\|&lt;=1 throughout the sector.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Choose an exponent beta strictly between rho and two.

</details>

<details>
<summary>Hint 2</summary>

Damp f by exp(-epsilon\*z^beta), using the branch whose argument lies in the sector.

</details>

<details>
<summary>Model proof</summary>

A positive angular cosine makes the damping dominate on large circular arcs.

1. Choose rho&lt;beta&lt;2. On this sector choose z^beta with argument beta\*arg z. Its real part is at least c\*\|z\|^beta, where c=cos(beta\*pi/4)&gt;0.
2. For epsilon&gt;0 set g=f\*exp(-epsilon\*z^beta). On the rays \|g\|&lt;=1, and on a circular arc of radius R its modulus is at most C\*exp(C\*R^rho-epsilon\*c\*R^beta), which is at most one for all sufficiently large R.
3. Apply the maximum-modulus principle on the bounded sector cut off at such an R. If desired exclude a small circle about zero first: continuity and \|f(0)\|&lt;=1 let its boundary bound tend to one as that circle shrinks. Thus \|g\|&lt;=1 everywhere. For a fixed interior point let epsilon decrease to zero to obtain \|f\|&lt;=1.

**Self-assessment rubric**

- Choose a branch and an exponent giving a strictly positive uniform cosine.
- Show damping dominates the specified growth on arbitrarily large arcs.
- Apply the bounded-domain maximum principle and justify both limiting steps.

</details>
