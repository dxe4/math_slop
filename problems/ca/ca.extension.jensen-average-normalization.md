# Use only the interior root in a logarithmic mean

*Medium · [Complex analysis problems](index.md)*

Let $P(z)=z^2-(5/2)z+1$. Find (1/(2 pi log 2)) times the integral from 0 to 2 pi of log\|P(exp(it))\| dt, using Jensen formula. Log denotes the real natural logarithm of the modulus.

```answer
{"answer":{"kind":"integer","expected":"1","checker_scope":"Exact requested zero, winding or normalized scalar count only. The analytic argument and its hypotheses are a worked model rather than an automatically checked proof; no existing objective contract is expanded."}}
```

<details>
<summary>Hint 1</summary>

Factor the quadratic and locate its roots relative to the unit circle.

</details>

<details>
<summary>Hint 2</summary>

Jensen uses the value at zero and only roots strictly inside the circle.

</details>

<details>
<summary>Worked solution</summary>

A logarithmic circle average records the interior zero contribution.

1. The roots are one half and two, and P(0)=1; neither root lies on the unit circle.
2. Jensen gives the mean (1/(2 pi)) integral log\|P(exp(it))\| equal to log\|P(0)\|+log(1/(1/2))=log 2.
3. Dividing by the stated log-two normalization gives one.

</details>
