# Use an exact derivative to transfer a contour weight

*Hard · [Complex analysis problems](index.md)*

Let $f(z)=(z^2-1)^3/z^2$ and L(z)=fprime(z)/f(z). Find (1/(2 pi i)) times the counterclockwise integral of z Lprime(z) around \|z\|=2.

```answer
{"answer":{"kind":"integer","expected":"-4","checker_scope":"Exact requested multiplicity, residue or normalized scalar count only. The analytic argument and its hypotheses are a worked model rather than an automatically checked proof; no existing objective contract is expanded."}}
```

<details>
<summary>Hint 1</summary>

Differentiate the single-valued meromorphic product zL(z), rather than introduce a global logarithm.

</details>

<details>
<summary>Hint 2</summary>

Its derivative has zero integral along the closed contour, transferring the weight to an unweighted logarithmic derivative.

</details>

<details>
<summary>Worked solution</summary>

A closed-curve derivative identity links the desired higher-pole integral to the argument principle.

1. Along a neighborhood of the contour, zL(z) is single-valued and holomorphic, and the integral of its derivative L+zLprime over the closed parametrized curve is zero. Thus the requested integral is the negative of the normalized integral of L.
2. The function f has zeros at one and negative one, each of order three, and a pole of order two at zero. Its zeros-minus-poles count inside the contour is four.
3. Therefore the desired normalized integral is negative four. No global branch of log(f) was assumed.

</details>
