# Use zero cancellation and a strip lower bound to identify sine

*Hard · [Complex analysis problems](index.md)*

Let an entire f vanish at every integer, satisfy $f(z+1)=-f(z)$ and \|f(z)\|&lt;=C\*exp(pi\*\|Im z\|) for a constant C, and have f'(0)=pi. Prove f(z)=sin(pi\*z).

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Divide by sin(pi\*z) and remove the integer singularities.

</details>

<details>
<summary>Hint 2</summary>

Away from a horizontal middle strip, use \|sin(pi\*(x+iy))\|&gt;=sinh(pi\*\|y\|).

</details>

<details>
<summary>Model proof</summary>

Antiperiodicity and the sharp vertical growth scale force a bounded entire quotient.

1. The quotient h=f/sin(pi\*z) extends holomorphically through each integer, since the denominator has a simple zero and the numerator vanishes there. The two sign changes make h 1-periodic.
2. For \|Im z\|&gt;=1, the bound \|sin(pi\*z)\|&gt;=sinh(pi\*\|Im z\|) bounds h uniformly by C\*exp(pi\*\|Im z\|)/sinh(pi\*\|Im z\|). On the remaining compact middle part of a width-one strip, the entire extension is bounded.
3. Periodicity makes h bounded everywhere, so Liouville makes it constant. At zero its removable value is fprime(0)/pi=1. Thus h=1 and f=sin(pi\*z).

**Self-assessment rubric**

- Cancel zeros correctly and verify the quotient's periodicity.
- Use the sine lower bound to control both infinite strip tails.
- Apply Liouville and determine the constant from the derivative at zero.

</details>
