# Avoid counting two fixed-field roots as a conjugate pair

*Medium · [Abstract algebra problems](index.md)*

In F49 over F7, how many x have $Tr(x)=3$ and N(x)=5? Explain the general discriminant cases for X^2-aX+b over an odd finite field, including why a split polynomial with distinct roots contributes no element with those prescribed relative moments.

```answer
{"answer":{"kind":"integer","expected":2,"checker_scope":"Exact requested field invariant only; no separability or primitive-element proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

Every candidate has Frobenius-conjugate pair x,x^7 and satisfies the displayed quadratic.

</details>

<details>
<summary>Hint 2</summary>

Distinguish Frobenius swapping two nonrational roots from fixing two rational ones.

</details>

<details>
<summary>Worked solution</summary>

Relative moments require the Frobenius orbit, not just membership in the root set.

1. If D=a^2-4b is nonsquare, the irreducible quadratic has two roots in F\_(q^2) exchanged by Frobenius, so both have the required trace and norm. If D=0, the sole root a/2 in F\_q has relative trace twice itself and norm its square, so there is one candidate.
2. If D is a nonzero square, the distinct roots both lie in F\_q. Each has relative trace2x, which cannot equal their sum a unless the two roots coincide. Hence that case contributes zero candidates.
3. Here D=3^2-4\*5=-11=3 modulo seven. The nonzero squares modulo seven are1,2,4, so three is nonsquare. There are exactly two elements.

</details>
