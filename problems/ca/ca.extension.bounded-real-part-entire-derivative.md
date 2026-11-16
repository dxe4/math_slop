# Use an exponential to turn a real-part bound into a modulus bound

*Easy · [Complex analysis problems](index.md)*

An entire function f satisfies $\operatorname{Re}f(z)\le3$ on the whole plane. Find f'(0). You may use Liouville's theorem.

```answer
{"answer":{"kind":"integer","expected":0,"checker_scope":"Exact requested consequence or bound only; the analytic justification remains a worked model rather than an automatically checked proof."}}
```

<details>
<summary>Hint 1</summary>

The modulus of exp(f) depends only on Re f.

</details>

<details>
<summary>Hint 2</summary>

Differentiate after applying Liouville.

</details>

<details>
<summary>Worked solution</summary>

A bounded real part forces constancy through a nonvanishing exponential.

1. The entire function exp(f) has modulus exp(Re f)&lt;=e^3.
2. Liouville's theorem makes exp(f) constant.
3. Its derivative is exp(f)\*fprime; the exponential never vanishes, so fprime is zero everywhere and fprime(0)=0.

</details>
