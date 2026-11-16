# Derive an inner-disk modulus bound using a Cayley transform

*Medium · [Complex analysis problems](index.md)*

Let f be holomorphic on $|z|<2$, with f(0)=0 and Re f(z)&lt;=4. Use Schwarz's lemma after a fractional linear transformation to obtain a bound \|f(z)\|&lt;=B on \|z\|&lt;=1. Find the resulting B.

```answer
{"answer":{"kind":"integer","expected":8,"checker_scope":"Exact requested consequence or bound only; the analytic justification remains a worked model rather than an automatically checked proof."}}
```

<details>
<summary>Hint 1</summary>

The transform f/(8-f) maps the target half-plane into the closed unit disk.

</details>

<details>
<summary>Hint 2</summary>

The source disk has radius two, so normalize its radius as well.

</details>

<details>
<summary>Worked solution</summary>

A half-plane condition yields a disk condition with a usable central zero.

1. The denominator 8-f cannot vanish. Since \|8-f\|^2-\|f\|^2=64-16\*Re f&gt;=0, the function g=f/(8-f) has modulus at most one and g(0)=0.
2. Schwarz's lemma on the radius-two disk gives \|g(z)\|&lt;=\|z\|/2, hence at most one half for \|z\|&lt;=1.
3. Thus \|f\|&lt;=\|8-f\|/2&lt;=4+\|f\|/2, giving \|f\|&lt;=8.

</details>
