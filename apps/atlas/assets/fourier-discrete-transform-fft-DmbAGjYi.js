var e=`---
id: deep-dive-fourier-discrete-transform-fft
title: "The discrete transform and the FFT"
license: CC BY-SA 4.0
---

# The discrete transform and the FFT

A discrete Fourier transform rewrites a finite vector as a combination of finite oscillatory patterns. A fast Fourier transform computes exactly that same change of coordinates with fewer arithmetic operations. The distinction matters: choosing a faster calculation does not change the frequencies that a sample grid can distinguish.

This **Year 1 (L2)** article assumes complex arithmetic, finite sums and the idea of a coefficient from [Fourier coefficients](/articles/fourier-coefficients/). No infinite-series theorem is needed. We derive inversion, calculate a small transform and explain the radix-two recursion. The primary [Discrete Fourier Transform and Radix-Two FFT chapter](/books/fourier-analysis/discrete-fourier-transform-fft/) supplies the longer development and convolution applications.

## Fix the finite convention

Let $N\\ge1$ and let $x=(x_0,\\ldots,x_{N-1})$ be a complex vector. Put $\\omega_N=e^{-2\\pi i/N}$. Our forward transform is unscaled:

$$X_k=\\sum_{j=0}^{N-1}x_j\\omega_N^{jk},\\qquad0\\le k<N.$$

The inverse has positive exponential sign and a factor $1/N$:

$$x_j=\\frac1N\\sum_{k=0}^{N-1}X_k\\omega_N^{-jk}.$$

These signs and factors belong together. Other conventions exist, but importing one formula from a differently normalized convention changes the result.

The key finite identity is

$$\\sum_{k=0}^{N-1}\\omega_N^{km}=
\\begin{cases}N,&N\\mid m,\\\\0,&N\\nmid m.\\end{cases}$$

If $N\\mid m$, every term is one. Otherwise the geometric sum has numerator $1-(\\omega_N^m)^N=0$ and nonzero denominator $1-\\omega_N^m$. This proves the identity for all integer $m$.

To prove inversion, insert the defining formula for $X_k$ into the proposed inverse. The coefficient of $x_r$ becomes $N^{-1}\\sum_k\\omega_N^{k(r-j)}$. It is one when $r=j$ and zero otherwise, because both indices lie between zero and $N-1$. The finite sums therefore recover precisely $x_j$. There is no limiting argument.

## Worked example: four values become four coefficients

For $x=(1,0,-1,0)$, take $N=4$ and $\\omega_4=-i$. The transform is

$$X=(0,2,0,2).$$

Indeed the zeroth sum is $1-1=0$. At frequency one the nonzero terms give $1+(-1)(-i)^2=2$. At frequency two they give $1+(-1)(-i)^4=0$, and frequency three again gives two.

Inverting at index one gives

$$x_1=\\frac14(2i+2(-i))=0,$$

while index two gives $(2(-1)+2(-1))/4=-1$. The other two entries follow in the same way. The samples are those of $\\cos t$ at $t=2\\pi j/4$. Its normalized coefficients are $X_1/4=X_3/4=1/2$, matching the two complex modes of a cosine. The raw DFT values two are not amplitude-two cosine coefficients.

As a normalization check within the mathematics, finite orthogonality also gives

$$\\sum_j|x_j|^2=\\frac1N\\sum_k|X_k|^2.$$

For this vector, the two sides are $2$ and $(4+4)/4$. This identity follows by expanding the squared transform and summing: all cross-coordinate terms vanish by the same root sum.

## Why a butterfly saves work

Suppose $N=2M$. Separate even and odd input positions. Let $E_k$ be the length-$M$ transform of $(x_0,x_2,\\ldots)$, and $O_k$ the transform of $(x_1,x_3,\\ldots)$. Since $\\omega_N^2=\\omega_M$, the defining sum becomes

$$X_k=E_k+\\omega_N^kO_k,\\qquad
X_{k+M}=E_k-\\omega_N^kO_k,
\\qquad0\\le k<M.$$

The second formula follows because $\\omega_N^M=-1$, while $E$ and $O$ repeat after $M$ in their frequency index. One multiplication supplies a pair of outputs. This pair is called a butterfly.

When $N=2^m$, repeat the split until the transforms have length one, where the transform is just its input. Induction through the displayed identities proves that this recursive algorithm produces the original DFT. Each of the $m$ levels uses $N/2$ butterflies, so the arithmetic count is proportional to $N\\log_2N$, rather than the quadratic count of evaluating every defining sum separately.

This is an exact-arithmetic operation count. It is neither an observed runtime nor a rounding-error guarantee. A length not equal to a power of two needs a different factorization or a separate treatment of the remaining odd lengths. Padding changes the transform length and its frequency grid.

## Invertible samples need not identify the original function

Suppose the vector came from $x_j=f(2\\pi j/N)$. Integer frequencies differing by $N$ agree on every sample:

$$e^{i(k+N)2\\pi j/N}=e^{ik2\\pi j/N}.$$

For instance, the constant function one and $\\cos(Nt)$ both give the all-ones sample vector. The transform distinguishes every finite vector perfectly and still cannot tell these two functions apart. This is aliasing, caused by the sampling map before a transform algorithm is selected.

One can derive a coefficient alias-sum formula if an absolutely convergent Fourier expansion is already available. Arbitrary formal infinite expansions cannot simply be inserted into point evaluations. The primary chapter states and proves that stronger identity with its hypothesis; our finite example requires none of it.

For real input, the coefficient at the negative frequency index is the complex conjugate of the positive-index coefficient, with indices read modulo the sample count. Conjugating the finite sum proves this directly: the real input stays fixed while the exponent changes sign. No convergence interchange is involved.

For four samples, cosine gives $(1,0,-1,0)$ and sine gives $(0,1,0,-1)$. Their frequency-one coefficients are respectively two and minus twice the imaginary unit; frequency three gives the conjugates. Both remaining coefficients are zero. Thus distinct sample vectors have identical transform magnitudes. The invertible transform preserves phase as well as magnitude; discarding phase is a separate information-losing operation. It is unrelated to whether the transform was computed by direct summation or butterflies. A faster computation of the same coefficients cannot reverse information deliberately removed afterwards.

## Exercises

### Exercise 1
<a id="deep-dive-fourier-discrete-transform-fft-ex-1"></a>
For arbitrary complex $a,b$, compute the two-point DFT of $(a,b)$ and recover $(a,b)$ by the stated inverse.

<details><summary>Hint 1</summary>
Here $\\omega_2=-1$, so there are only a sum and a difference.
</details>
<details><summary>Hint 2</summary>
The inverse factor is one half, even though the forward transform has no factor.
</details>
<details><summary>Solution</summary>
The forward output is $X_0=a+b$, $X_1=a-b$. The inverse yields $(X_0+X_1)/2=a$ and $(X_0-X_1)/2=b$. Thus the same sum/difference pattern can invert this length-two transform only when the inverse scaling is included. Applying the unscaled transform twice would give $(2a,2b)$ instead.
</details>

### Exercise 2
<a id="deep-dive-fourier-discrete-transform-fft-ex-2"></a>
On the four-point grid $t_j=2\\pi j/4$, compare the samples of $e^{it}$ and $e^{5it}$. Compute their common DFT and explain what information inversion recovers.

<details><summary>Hint 1</summary>
The extra factor is $e^{4it_j}=e^{2\\pi ij}$.
</details>
<details><summary>Hint 2</summary>
For the sampled first mode, the $k$th transform is the root sum with exponent $j(1-k)$.
</details>
<details><summary>Solution</summary>
Both sample vectors are $(1,i,-1,-i)$ because the extra factor is one. The transform sum is four when $k=1$ and zero for $k=0,2,3$, so the common DFT is $(0,4,0,0)$. Inversion exactly recovers the common four-entry vector. It cannot decide whether the original function had frequency one, frequency five or another congruent frequency, because those functions were already identical on the grid. A faster FFT does not restore this missing sampling information.
</details>

Continue to the primary [finite-transform chapter](/books/fourier-analysis/discrete-fourier-transform-fft/). [Convergence and Gibbs](/articles/fourier-convergence-gibbs/) concerns a different issue: what happens when continuous Fourier expansions are truncated near a jump.

*Source provenance: original Euler orientation exposition and exercises, using the convention and finite identities of the source-owned Fourier Analysis chapter. CC BY-SA 4.0. Draft; no independent review is claimed.*
`;export{e as default};