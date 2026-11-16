# Classify entire injections by their singularity at infinity

*Hard · [Complex analysis problems](index.md)*

Prove that every injective entire function $f:\mathbb C\to\mathbb C$ has the form f(z)=a\*z+b with a nonzero. You may use Casorati-Weierstrass, the holomorphic inverse-function theorem and the classification of isolated singularities.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Injectivity gives a local inverse near any finite image point.

</details>

<details>
<summary>Hint 2</summary>

An essential singularity at infinity would return arbitrarily close images from arbitrarily distant points.

</details>

<details>
<summary>Model proof</summary>

A local inverse prevents an essential singularity at infinity, leaving a polynomial.

1. An injective holomorphic function has nonzero derivative: a first nonzero local Taylor term of degree at least two would give local multiple preimages. In particular, f has an inverse branch on a neighborhood V of f(0), with inverse image in a bounded neighborhood U of zero.
2. If infinity were essential, Casorati-Weierstrass would produce points outside every bounded set whose images lie in V. Each such image also has its preimage in U, contradicting injectivity. If infinity were removable, f would be bounded outside a disk and hence everywhere, so Liouville would make it constant.
3. Therefore infinity is a pole and f is a polynomial. A polynomial of degree at least two has a derivative zero by the fundamental theorem of algebra, contradicting local injectivity. Thus its degree is one with nonzero slope.

**Self-assessment rubric**

- Justify nonvanishing derivative and a bounded local inverse neighborhood.
- Exclude essential and removable behavior at infinity.
- Reduce a polynomial injection to degree one.

</details>
