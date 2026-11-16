# Construct different laws with every moment identical

*Hard · [Probability problems](index.md)*

Let $f(x)=(x\sqrt{2\pi})^{-1}e^{-(\log x)^2/2}$ for $x>0$. Construct two different strictly positive densities of the form $f(x)[1\pm a\sin(b\log x)]$, with explicit $a,b>0$, having identical moments of every nonnegative integer order. Use them to construct a tight sequence whose every integer moment converges but whose laws do not converge weakly. You may use the Gaussian Fourier integral $E e^{itZ}=e^{-t^2/2}$ and exponential tilting of a Gaussian, with its completing-square justification.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft with task-specific semantic rubric; no automatic correctness verdict or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

After substituting $x=e^z$, an integer power becomes an exponential tilt of a standard Gaussian.

</details>

<details>
<summary>Hint 2</summary>

Choose the sine frequency so that every integer tilt gives a zero sine expectation. Alternate the resulting laws.

</details>

<details>
<summary>Model proof</summary>

A periodic perturbation is invisible to all integer moments of a lognormal law.

1. Take $a=1/2$ and $b=2\pi$. The factors $1\pm\tfrac12\sin(2\pi\log x)$ lie in $[1/2,3/2]$, so both candidate densities are strictly positive and all their nonnegative integer moments are finite.
2. For an integer $k\ge0$, substituting $x=e^z$ gives $\int x^kf(x)\sin(2\pi\log x)\,dx=E[e^{kZ}\sin(2\pi Z)]$. Completing the square changes the tilted Gaussian to mean $k$, so this is $e^{k^2/2}e^{-2\pi^2}\sin(2\pi k)=0$.
3. The case $k=0$ proves both densities integrate to one; every other case shows their shared $k$th moment is $e^{k^2/2}$. They are distinct because the sine is nonzero on a set of positive Lebesgue measure.
4. Alternate these two laws. The sequence is tight since it uses only two probability measures. Its moment sequence is constant at each order. Nevertheless the bounded continuous test function $h(x)=\sin(2\pi\log x)$ on $(0,\infty)$ has expectations differing by $\int f(x)\sin^2(2\pi\log x)\,dx>0$. For weak convergence on $\mathbb R$, one may instead multiply $h$ by a nonnegative continuous cutoff supported inside an interval where the sine is nonzero, giving the same strict difference and a bounded continuous extension by zero. Thus the alternating laws do not converge weakly.

**Self-assessment rubric**

- Choose valid amplitudes and prove normalisation.
- Evaluate the tilted sine integral for every nonnegative integer.
- Prove tightness and exhibit a bounded continuous test separating the subsequences.

</details>
