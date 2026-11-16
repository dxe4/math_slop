# Measure two-sided local variation rather than a nonexistent limit

*Easy · [Real analysis](index.md)*

Let f(0)=0 and $f(x)=\sin(1/x)$ for x nonzero. Its oscillation at zero is the infimum over delta&gt;0 of the supremum of \|f(u)-f(v)\| for \|u\|,\|v\|&lt;delta. Find this oscillation.

```answer
{"answer":{"kind":"integer","expected":2,"checker_scope":"Exact requested local variation or sufficient modulus only; no full continuity argument is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

The range is always contained in \[-1,1\].

</details>

<details>
<summary>Hint 2</summary>

Arbitrarily close to zero the function takes both extreme values.

</details>

<details>
<summary>Worked solution</summary>

Oscillation records persistent local variation even when no limit exists.

1. Every difference is at most two because the function values lie in \[-1,1\].
2. For every delta&gt;0, reciprocal phases pi/2+2\*pi\*k and 3\*pi/2+2\*pi\*k give points inside that neighborhood for large k, with values one and negative one.
3. Thus every neighborhood has supremum difference two, so the oscillation is two.

</details>
