
# Fourier coefficients

A Fourier coefficient answers a finite question: how much of a particular oscillation is present in a periodic function, when similarity is measured by a period integral? Computing that number does not require first proving that an infinite series reconstructs the function. Keeping those questions separate makes the first calculation both simpler and more reliable.

This **Year 1 (L2)** orientation assumes definite integrals, elementary trigonometry and complex arithmetic. [Complex numbers in polar form](#/books/precalculus/complex-numbers-polar-form) supplies the geometric notation, and [Why Complex Numbers Are Geometric](#/articles/complex-numbers) offers a companion explanation. We prove finite orthogonality and explain coefficient extraction through it. The primary [Fourier Coefficients and Orthogonal Projection chapter](#/books/fourier-analysis/fourier-approximation-and-density) develops the complete finite approximation argument.

## Choose the period and normalization

Work with period $2\pi$. For a continuous or bounded piecewise continuous periodic function $f$, define

$$\widehat f(n)=\frac1{2\pi}\int_{-\pi}^{\pi}f(x)e^{-inx}\,dx,
\qquad n\in\mathbb Z.$$

The symbol $i$ satisfies $i^2=-1$, and Euler's formula says $e^{inx}=\cos(nx)+i\sin(nx)$. Positive and negative integer frequencies are both included. The coefficient at zero is simply the average value of $f$ over one period.

The factor $1/(2\pi)$ is a convention we retain throughout. It makes the coefficient of $e^{imx}$ at its own frequency equal to one. Changing the period or normalizing the integral differently changes the formulas; a coefficient has meaning relative to those choices.

Define the inner product by

$$\langle f,g\rangle=\frac1{2\pi}\int_{-\pi}^{\pi}f(x)\overline{g(x)}\,dx.$$

Conjugation in the second slot is essential: it makes $\langle f,f\rangle$ the average of $|f|^2$. Write $\|f\|_2^2$ for that average. On piecewise continuous pointwise functions this can vanish for a function nonzero at isolated points. All finite-polynomial conclusions below remain valid; no completeness assertion about this function class is needed.

## Orthogonality extracts a coordinate

For integers $m,n$, the inner product of $e^{inx}$ and $e^{imx}$ is the normalized integral of $e^{i(n-m)x}$. When $n=m$, the integrand is one and the answer is one. Otherwise its antiderivative is $e^{i(n-m)x}/[i(n-m)]$. Its values at the two endpoints agree, so the answer is zero.

Thus these modes behave like perpendicular unit coordinate directions. If a finite polynomial is

$$p(x)=\sum_{n=-N}^N c_ne^{inx},$$

multiplying by $e^{-imx}$ and integrating kills every term except $c_m$, provided $|m|\le N$. This proves extraction directly. Outside that band, its coefficient is zero.

For a general admissible $f$, form the finite polynomial

$$S_Nf(x)=\sum_{n=-N}^N\widehat f(n)e^{inx}.$$

Every integral in this expression is already defined. Nothing in its definition asserts that $S_Nf(x)$ tends to $f(x)$ as $N$ grows.

## Worked example: a frequency band removes one oscillation

Take

$$f(x)=2+3\cos x-2\sin(2x).$$

The identities

$$\cos x=\frac{e^{ix}+e^{-ix}}2,
\qquad \sin(2x)=\frac{e^{2ix}-e^{-2ix}}{2i}$$

give the coefficients

$$\widehat f(0)=2,\quad \widehat f(1)=\widehat f(-1)=\frac32,
\quad \widehat f(2)=i,\quad \widehat f(-2)=-i.$$

All others vanish. In particular the signs of the imaginary coefficients carry the sign of the sine term; keeping only their magnitudes loses that information.

The degree-one polynomial is $S_1f=2+3\cos x$. Its residual is $-2\sin(2x)$, whose mean square is $4\cdot(1/2)=2$. That residual is perpendicular to every degree-one polynomial. If $p$ is any other such polynomial, expand the squared norm of

$$f-p=(f-S_1f)+(S_1f-p).$$

The cross terms vanish by orthogonality. Therefore

$$\|f-p\|_2^2=2+\|S_1f-p\|_2^2\ge2.$$

The selected coefficients give the best mean-square fit in that band. Equality requires $p=S_1f$: a continuous polynomial with zero square integral vanishes everywhere. This is a finite projection theorem, not a pointwise convergence theorem.

## Information in amplitude and phase

For a real function, conjugating the defining integral shows $\widehat f(-n)=\overline{\widehat f(n)}$. Opposite frequencies occur in conjugate pairs so that the sum is real. The complex coefficient contains phase as well as size.

For example, translating $f$ to $g(x)=f(x-a)$ changes its coefficient to $e^{-ina}\widehat f(n)$. Substitute $y=x-a$ in the integral: the shifted full-period integral is unchanged, and the extra exponential factor remains. Translation preserves coefficient magnitudes while changing their phases. A magnitude plot cannot generally tell where the waveform sits.

Coefficients also ignore changes at finitely many points, because the integrals ignore them. At a jump, therefore, they cannot encode which isolated value an author assigned. The [convergence article](#/articles/fourier-convergence-gibbs) explains what the neighbouring values determine instead.

An even real function gives an exact symmetry check. Split the exponential in the defining integral into cosine and sine. The product of the even function with sine is odd, so its integral vanishes and every coefficient is real. For an odd real function the cosine contribution instead vanishes, making coefficients purely imaginary and the mean zero. These are integral arguments; no infinite reconstruction theorem is being assumed.

Cosine and sine of the same frequency consequently have equal coefficient magnitudes but different phases. One is even and the other odd. Their shared magnitude information cannot distinguish them, while the signed imaginary parts retain the sine contribution. This gives a concrete reason to keep phase when using coefficients as coordinates, rather than reducing them to a list of energy sizes. Symmetry can also expose a sign error before any question about infinite-series convergence arises.

## Exercises

### Exercise 1
<a id="deep-dive-fourier-coefficients-ex-1"></a>
Find every nonzero coefficient of $g(x)=1+4\sin x$, and determine its degree-zero best mean-square approximation and squared residual error.

<details><summary>Hint 1</summary>
Write the sine as a difference of exponentials before extracting coefficients.
</details>
<details><summary>Hint 2</summary>
The mean of $\sin^2x$ over a period is one half. The degree-zero space consists of constants.
</details>
<details><summary>Solution</summary>
Since $4\sin x=-2ie^{ix}+2ie^{-ix}$, the nonzero coefficients are $\widehat g(0)=1$, $\widehat g(1)=-2i$ and $\widehat g(-1)=2i$. The degree-zero projection is the constant one. Its residual $4\sin x$ has mean square $16/2=8$. Every other constant $c$ has squared error $8+|1-c|^2$, since the sine has zero mean. Thus one is the unique best constant.
</details>

### Exercise 2
<a id="deep-dive-fourier-coefficients-ex-2"></a>
Let $h(x)=\cos(x-a)$ for real $a$. Find its coefficients and explain why the two nonzero coefficient magnitudes do not determine $a$.

<details><summary>Hint 1</summary>
Translate the coefficients of $\cos x$, rather than expanding a new integral.
</details>
<details><summary>Hint 2</summary>
For real $a$, both $e^{ia}$ and $e^{-ia}$ have modulus one.
</details>
<details><summary>Solution</summary>
The only nonzero coefficients are $\widehat h(1)=e^{-ia}/2$ and $\widehat h(-1)=e^{ia}/2$. Both have magnitude one half for every $a$. Consequently the magnitudes alone distinguish none of these translations. The complex phases retain $a$ modulo $2\pi$, which is exactly the periodic translation ambiguity of this cosine. This is loss of information from discarding phase, rather than failure of coefficient extraction.
</details>

Continue with the primary [projection chapter](#/books/fourier-analysis/fourier-approximation-and-density). The existing [From Least Squares to Fourier: Geometry in Function Space](#/articles/hilbert-fourier-geometry) places this finite geometry in a wider setting; the present argument does not assume that wider theory.

*Source provenance: original Euler orientation exposition and exercises, linked to the source-owned Fourier Analysis chapter and existing complex-number and Hilbert–Fourier companions. CC BY-SA 4.0. Draft; no independent review is claimed.*
