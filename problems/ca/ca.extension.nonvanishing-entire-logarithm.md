# Construct a global logarithm from a derivative primitive

*Hard · [Complex analysis problems](index.md)*

Prove that every nonvanishing entire function $f$ can be written as exp(g) for an entire g. State precisely where the topology of the whole plane is used.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

The quotient f'/f is entire because f has no zeros.

</details>

<details>
<summary>Hint 2</summary>

A primitive of this quotient makes a certain product have derivative zero.

</details>

<details>
<summary>Model proof</summary>

Simple connectivity removes the global logarithmic period obstruction.

1. The function fprime/f is entire. Since the plane is simply connected, it has an entire primitive G, which may be normalized by G(0)=0.
2. Differentiating f\*exp(-G) gives zero, so this product is the nonzero constant f(0).
3. Choose any complex number c with exp(c)=f(0). Then g=G+c is entire and exp(g)=f. The primitive step is where simple connectivity is used; on a punctured plane the function z shows the obstruction.

**Self-assessment rubric**

- Use nonvanishing to define the derivative quotient everywhere.
- Invoke simple connectivity at the precise primitive step.
- Recover f with a correctly chosen additive logarithmic constant.

</details>
