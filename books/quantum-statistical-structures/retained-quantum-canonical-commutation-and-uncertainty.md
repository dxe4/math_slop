
# Canonical commutation and uncertainty

## The uncertainty principle as an inequality

One of the most celebrated results in quantum mechanics is the uncertainty principle: certain pairs of observables cannot simultaneously have sharp values in any state. This chapter derives the principle rigorously from the Cauchy–Schwarz inequality, distinguishes the Robertson and Schrödinger forms, and explains the domain requirements that are often omitted in heuristic treatments. We also prove that the canonical commutation relation $[X,P] = i\hbar I$ cannot be satisfied by bounded operators.

## The Robertson uncertainty relation

Let $A$ and $B$ be self-adjoint operators on a Hilbert space $\mathcal{H}$. For a normalized state $|\psi\rangle \in D(A) \cap D(B)$, define the centered operators

$$\widetilde{A} = A - \langle A\rangle I, \qquad \widetilde{B} = B - \langle B\rangle I,$$

where $\langle A\rangle = \langle\psi|A|\psi\rangle$. The variances are defined on this domain by

$$\operatorname{Var}(A)=\|\widetilde A\psi\|^2,\qquad \operatorname{Var}(B)=\|\widetilde B\psi\|^2.$$

Writing them as $\langle\psi|\widetilde A^2|\psi\rangle$ and $\langle\psi|\widetilde B^2|\psi\rangle$ requires the stronger square-operator domains.

Applying the Cauchy–Schwarz inequality to $\widetilde{A}|\psi\rangle$ and $\widetilde{B}|\psi\rangle$ gives

$$\operatorname{Var}(A)\operatorname{Var}(B) \geq \bigl|\langle\widetilde{A}\psi|\widetilde{B}\psi\rangle\bigr|^{2}.$$

Let $z=\langle\widetilde A\psi|\widetilde B\psi\rangle$. Without forming either operator product, $|z|^2=(\operatorname{Re}z)^2+(\operatorname{Im}z)^2$. Therefore Cauchy--Schwarz already yields the weak Schrödinger form

$$\operatorname{Var}(A)\operatorname{Var}(B)\ge (\operatorname{Re}z)^2+(\operatorname{Im}z)^2.$$

Dropping the nonnegative anticommutator term yields the **weak Robertson form**:

$$\operatorname{Var}(A)\operatorname{Var}(B) \geq \bigl|\operatorname{Im}\langle A\psi|B\psi\rangle\bigr|^{2}.$$

If additionally $|\psi\rangle \in D(AB) \cap D(BA)$, then $2i\operatorname{Im}z=\langle\psi|[A,B]|\psi\rangle$, and we obtain the familiar **Robertson uncertainty relation**:

$$\operatorname{Var}(A)\operatorname{Var}(B) \geq \frac{1}{4}\bigl|\langle\psi|[A,B]|\psi\rangle\bigr|^{2}.$$

## The Schrödinger form

Under the same product-domain hypothesis, $2\operatorname{Re}z=\langle\psi|\{\widetilde A,\widetilde B\}|\psi\rangle$. Retaining this term gives the stronger **Schrödinger uncertainty relation**:

$$\operatorname{Var}(A)\operatorname{Var}(B) \geq \frac{1}{4}\bigl|\langle\psi|[A,B]|\psi\rangle\bigr|^{2} + \frac{1}{4}\bigl|\langle\psi|\{\widetilde{A},\widetilde{B}\}|\psi\rangle\bigr|^{2}.$$

For position and momentum, parity symmetry alone does not force this covariance to vanish: the even chirped Gaussian $e^{-(a-ib)x^2}$ with $a>0$ and $b\ne0$ is a counterexample. The term does vanish for a centered real Gaussian with suitable decay, which is the case used below.

## Position and momentum

On $L^{2}(\mathbb{R})$, the position operator $(X\psi)(x) = x\psi(x)$ and momentum operator $(P\psi)(x) = -i\hbar\psi'(x)$ are self-adjoint on suitable domains. On the Schwartz space $\mathcal{S}(\mathbb{R})$, which is dense and contained in both domains,

$$[X,P]\psi = XP\psi - PX\psi = -i\hbar x\psi'(x) + i\hbar\frac{d}{dx}(x\psi(x)) = i\hbar\psi(x).$$

Thus $[X,P] = i\hbar I$ on $\mathcal{S}(\mathbb{R})$. The Robertson relation gives

$$\Delta X\,\Delta P \geq \frac{\hbar}{2},$$

where $\Delta A = \sqrt{\operatorname{Var}(A)}$.

Equality holds when $\widetilde{A}|\psi\rangle$ and $\widetilde{B}|\psi\rangle$ are linearly dependent, i.e., $\widetilde{A}|\psi\rangle = -i\lambda\widetilde{B}|\psi\rangle$ for some real $\lambda$. For position and momentum this yields a Gaussian wave packet.

## No bounded canonical pair exists

Suppose $X$ and $P$ were bounded operators satisfying $[X,P] = i\hbar I$ on a finite-dimensional Hilbert space. Taking the trace of both sides gives

$$\operatorname{Tr}([X,P]) = \operatorname{Tr}(XP) - \operatorname{Tr}(PX) = 0,$$

but $\operatorname{Tr}(i\hbar I) = i\hbar d \neq 0$, a contradiction. In infinite dimensions the trace argument fails because $XP$ and $PX$ need not be trace class, but a more sophisticated argument using the spectrum shows that no bounded operators can satisfy the relation exactly on any Hilbert space.

## Common error: measurement disturbance

A widespread misconception is that the uncertainty principle describes an observer mechanically disturbing a pre-existing pair of sharp values. The inequality describes the **intrinsic spread** in an ensemble of systems prepared in the same state. It is a statement about the quantum state, not about the perturbation caused by measurement apparatus. Equality requires a specific linear-dependence condition; unchirped Gaussian wave packets realize the Robertson equality for canonical position and momentum.

## Practice exercises

### Exercise 1

Show that for any normalized $|\psi\rangle$, $\operatorname{Var}(A) = 0$ if and only if $|\psi\rangle$ is an eigenstate of $A$.

**Solution.** If $A|\psi\rangle = a|\psi\rangle$, then $\langle A\rangle = a$ and $\langle A^{2}\rangle = a^{2}$, so $\operatorname{Var}(A) = 0$. Conversely, if $\operatorname{Var}(A) = ||\widetilde{A}|\psi\rangle|^{2} = 0$, then $\widetilde{A}|\psi\rangle = 0$, so $A|\psi\rangle = \langle A\rangle|\psi\rangle$.

### Exercise 2

For a Gaussian wave packet $\psi(x) = (2\pi\sigma^{2})^{-1/4}\exp(-x^{2}/4\sigma^{2})$, compute $\Delta X$ and $\Delta P$ and verify the uncertainty equality.

**Solution.** We have $|\psi(x)|^{2} = (2\pi\sigma^{2})^{-1/2}\exp(-x^{2}/2\sigma^{2})$, a Gaussian with variance $\sigma^{2}$. Thus $(\Delta X)^{2} = \sigma^{2}$. With the convention $\widetilde\psi(p)=(2\pi\hbar)^{-1/2}\int e^{-ipx/\hbar}\psi(x)\,dx$,

$$\widetilde\psi(p)=\left(\frac{2\sigma^2}{\pi\hbar^2}\right)^{1/4}\exp\left(-\frac{\sigma^2p^2}{\hbar^2}\right).$$

Hence $|\widetilde\psi|^2$ has variance $(\Delta P)^2=\hbar^2/(4\sigma^2)$. The product is $(\Delta X)^{2}(\Delta P)^{2} = \hbar^{2}/4$, so $\Delta X\,\Delta P = \hbar/2$.

### Exercise 3

Construct a state for which the Schrödinger inequality is strictly stronger than the Robertson inequality for $\sigma_x$ and $\sigma_y$.

**Solution.** Choose the pure state whose Bloch vector is $\mathbf r=(1,1,1)/\sqrt3$; explicitly, take $|\psi\rangle=\cos(\theta/2)|0\rangle+e^{i\pi/4}\sin(\theta/2)|1\rangle$ with $\cos\theta=1/\sqrt3$. Then

$$\operatorname{Var}(\sigma_x)\operatorname{Var}(\sigma_y)=(1-r_x^2)(1-r_y^2)=\frac49.$$

The Robertson term is $r_z^2=1/3$. Since $\langle\{\widetilde\sigma_x,\widetilde\sigma_y\}\rangle=-2r_xr_y=-2/3$, the covariance contribution is $r_x^2r_y^2=1/9$. The Schrödinger bound is therefore $1/3+1/9=4/9$, strictly stronger than Robertson and saturated by this state.

## Looking backward and forward

This chapter derived the uncertainty principle from first principles, emphasizing that it is a theorem about states rather than a statement about measurement disturbance. The domain requirements are structural, not technical clutter. The next chapter, *Harmonic oscillator as an operator audit*, applies these ideas to the paradigmatic system of quantum mechanics and uses it to illustrate the full machinery of ladder operators, spectra, and partition functions.
