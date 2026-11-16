# Separate a forced equilibrium

*Medium · [Differential equations problems](index.md)*

For $y^{\prime\prime}+y=1$, $y(0)=y^{\prime}(0)=0$, find $y(\pi)$.

```answer
{"answer":{"kind":"integer","expected":2,"checker_scope":"Requested bounded solution observation, spectrum or polynomial representation only, with the stated tolerance where applicable; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

A constant particular solution shifts the equation to a homogeneous oscillator.

</details>

<details>
<summary>Hint 2</summary>

Use both initial conditions to determine the sine and cosine contributions.

</details>

<details>
<summary>Worked solution</summary>

The equilibrium shift leaves an oscillator with specified initial displacement.

1. A general solution is $y=1+A\cos t+B\sin t$. The data give $A=-1$, $B=0$.
2. Thus $y=1-\cos t$, with $y^{\prime\prime}+y=\cos t+1-\cos t=1$ and both initial values zero.
3. At $t=\pi$, the value is $1-(-1)=2$.

</details>
