
# Strongly Continuous Semigroups and Evolution

A time-independent differential equation should evolve in stages: moving first for one duration and then another should agree with moving for their sum. A semigroup encodes that rule. In infinite dimensions the infinitesimal rate can be unbounded, even when every finite-time evolution map is bounded and varies continuously on each fixed state. The generator's domain records which initial states have an actual instantaneous derivative.

Preparation is [Uniform Boundedness](uniform-boundedness.md), [bounded operator series](bounded-operators-duals.md), and [closed unbounded operators](unbounded-operators.md). We work on a Banach space. The development proves generator density and closedness, the Laplace resolvent formula, uniqueness, and the contraction form of the Hille–Yosida generation theorem. Bounded, diagonal and transport examples distinguish strong continuity from operator-norm continuity.

## Evolution maps and a uniform growth estimate

**Definition 16.1 (Strongly continuous semigroup).** A family \(T(t)\), \(t\ge0\), of bounded operators satisfies \(T(0)=I\), \(T(t+s)=T(t)T(s)\), and continuity of \(t\mapsto T(t)x\) for every fixed \(x\). It is a contraction semigroup when \(\|T(t)\|\le1\).

The continuity is on individual vectors. Replacing it by \(\|T(t)-I\|\to0\) would exclude important diffusion and transport examples. The semigroup law makes the operators commute with one another, but it does not make them commute with an arbitrary unrelated operator.

**Proposition 16.2 (Exponential bound).** A strongly continuous semigroup satisfies \(\|T(t)\|\le Me^{\omega t}\) for some \(M\ge1\), \(\omega\ge0\).

*Proof.* For each input, its continuous orbit on \([0,1]\) is bounded. Uniform boundedness therefore gives \(M=\sup_{0\le t\le1}\|T(t)\|<\infty\), increased to one if necessary. Write \(t=n+s\) with integer \(n\ge0\), \(0\le s<1\). The semigroup law gives \(\|T(t)\|\le M^{n+1}\le Me^{t\log M}\). Thus take \(\omega=\log M\). ∎

This estimate uses completeness of the input Banach space through uniform boundedness. It provides control on all states after pointwise continuity supplied control for each state separately. A sharper concrete growth rate can be negative, but the existence statement only needs some finite rate.

## Generators and integrated orbit vectors

**Definition 16.3 (Generator).** Its domain consists of states for which the right derivative
\[
 Ax=\lim_{h\downarrow0}\frac{T(h)x-x}{h}
\]
exists in norm. The generator is the linear operator \(A:D(A)\to X\).

For \(x\in D(A)\), semigroup composition gives \(T(t)x\in D(A)\) and \(AT(t)x=T(t)Ax\). The orbit is differentiable, with derivative \(T(t)Ax\). Right quotients follow directly; left quotients at positive time use \(T(t-h)(T(h)x-x)/h\), strong continuity and the local common bound. Integrating yields
\[
 T(t)x-x=\int_0^tT(s)Ax\,ds.
\]
All finite integrals here are Banach-valued Riemann integrals of continuous functions, whose existence follows from uniform approximation by step sums and completeness. Their norm is at most the integral of the norm, by passing the finite triangle inequality to the limit.

**Theorem 16.4 (Dense, closed generator).** The generator domain is dense, and the generator is closed.

*Proof.* For any \(x\), let \(S_tx=\int_0^tT(s)x\,ds\). The semigroup law gives
\[
 T(h)S_tx-S_tx=\int_t^{t+h}T(s)x\,ds-\int_0^hT(s)x\,ds.
\]
Dividing by \(h\) and taking the limit shows \(S_tx\in D(A)\), with \(AS_tx=T(t)x-x\). The averages \(S_tx/t\) tend to \(x\) by continuity at zero, proving density.

If \(x_n\to x\) and \(Ax_n\to y\), pass to limits in the integrated orbit identity. The common finite-time bound controls the integral error, giving \(T(t)x-x=\int_0^tT(s)y\,ds\). Divide by \(t\) and let it decrease to zero. The right side tends to \(y\), so \(x\in D(A)\) and \(Ax=y\). This is closedness. ∎

An orbit is a classical solution of \(u'=Au\) when the initial state belongs to the domain. For arbitrary initial data the continuous orbit still exists, but its derivative at zero need not. The finite-time evolution cannot be identified with an everywhere-defined unbounded derivative.

## Resolvents from the Laplace transform

**Theorem 16.5 (Laplace resolvent).** If \(\|T(t)\|\le Me^{\omega t}\) and \(\operatorname{Re}\lambda>\omega\), then
\[
 R_\lambda x=\int_0^\infty e^{-\lambda t}T(t)x\,dt
\]
is the bounded inverse of \(\lambda I-A\), with norm at most \(M/(\operatorname{Re}\lambda-\omega)\).

*Proof.* The exponential majorant makes the improper integral norm Cauchy and gives the bound. Changing variables yields
\[
 T(h)R_\lambda x=e^{\lambda h}\left(R_\lambda x-
 \int_0^h e^{-\lambda s}T(s)x\,ds\right).
\]
Its difference quotient at zero tends to \(\lambda R_\lambda x-x\), so the integral lies in the generator domain and \((\lambda-A)R_\lambda=I\). For \(x\in D(A)\), differentiate \(e^{-\lambda t}T(t)x\), integrate, and use its decay at infinity. This gives \(R_\lambda(\lambda-A)x=x\), the other inverse identity. ∎

The two product identities include their domains. The inverse maps the whole ambient space into \(D(A)\); the reverse product is initially asserted on that domain. We use \((\lambda I-A)^{-1}\) here, the standard semigroup sign convention, rather than the \((A-\lambda I)^{-1}\) notation of the preceding operator chapter.

**Theorem 16.6 (Generator uniqueness).** Two strongly continuous semigroups with the same generator coincide.

*Proof.* For \(x\) in the common dense generator domain and fixed \(t\), differentiate \(s\mapsto S(t-s)T(s)x\), \(0<s<t\). Domain invariance and the generator derivative formulas make the two terms cancel. The product rule follows by splitting the increment and using local operator bounds for the varying input. Hence the expression is constant, giving \(S(t)x=T(t)x\). Density and boundedness at each fixed time extend equality to every input. ∎

## The contraction generation theorem

**Theorem 16.7 (Hille–Yosida, contraction form).** A densely defined closed operator generates a contraction semigroup exactly when every real \(\lambda>0\) belongs to its resolvent and
\[
 \|(\lambda I-A)^{-1}\|\le1/\lambda.
\]

*Proof of necessity.* Theorem 16.4 supplies the closed dense domain. The Laplace formula with \(M=1\), \(\omega=0\) gives the required resolvents and bounds.

For sufficiency let \(R_n=(nI-A)^{-1}\), \(B_n=nR_n\), and \(A_n=n(B_n-I)\). Then \(\|B_n\|\le1\), and the bounded operator exponential
\[
 T_n(t)=e^{tA_n}=e^{-nt}e^{ntB_n}
\]
has norm at most one. The exponential series converges in operator norm by its factorial majorant and differentiates termwise on bounded time intervals by the corresponding derivative majorant. Resolvent identities show the \(R_n\), hence \(A_n\), commute: multiplying the two inverse equations gives \(R_n-R_m=(m-n)R_nR_m\).

For \(x\in D(A)\), \(B_nx-x=R_nAx\), so \(B_nx\to x\). The contraction bound and density extend that convergence to every vector. Also \(A_nx=B_nAx\to Ax\) on the generator domain. Commutation and differentiation of \(T_n(t-s)T_m(s)x\) give
\[
 \|T_n(t)x-T_m(t)x\|\le t\|(A_n-A_m)x\|.
\]
Thus the approximants are uniformly Cauchy on compact time intervals for domain inputs. Density and the common contraction bound give the same conclusion for all inputs. Completeness yields bounded linear limits \(T(t)\), still contractions.

Uniform convergence of each continuous orbit on compact intervals gives strong continuity. Passing the semigroup identity to limits gives the semigroup law: split the product error using the uniform norm bound and convergence at the fixed limiting input. The initial map remains identity.

Let \(G\) be its generator. For \(x\in D(A)\), pass to limits in
\(T_n(t)x-x=\int_0^tT_n(s)A_nx\,ds\). Uniform convergence on compact intervals and \(A_nx\to Ax\) give \(T(t)x-x=\int_0^tT(s)Ax\,ds\). Dividing at zero shows \(G\) extends \(A\). For any positive \(\lambda\), both operators have inverses for \(\lambda\) minus the operator: the assumed one for \(A\), the Laplace one for \(G\). Since \(G\) extends \(A\), its injectivity forces the two resolvents to agree on every input. Their ranges are their respective domains, so those domains are equal and \(G=A\). Uniqueness follows from Theorem 16.6. ∎

The bounded \(A_n\) are Yosida approximants. The theorem constructs evolution from resolvent information; it does not merely assign a formal power series to an unbounded operator. A general exponentially bounded generation theorem uses a different family of resolvent-power bounds. Only the contraction form has been asserted and proved here.

## Three models with different regularity

**Worked example 16.8 (A bounded generator).** For bounded \(B\), the norm-convergent series \(e^{tB}\) defines a semigroup with generator \(B\) on all of \(X\). Absolute convergence permits multiplying and regrouping series; the finite binomial theorem combines terms into \(e^{(t+s)B}\). Its norm is at most \(e^{t\|B\|}\), and derivative series converge uniformly on compact intervals. In this case even operator-norm continuity at zero holds. The construction uses boundedness of \(B\) in every estimate.

**Worked example 16.9 (Diagonal diffusion and an unbounded generator).** On \(\ell^2\), set \((T(t)x)_n=e^{-n^2t}x_n\). It is a contraction semigroup. Strong continuity follows first on finite sequences, then on arbitrary vectors by a common contraction bound and small square tails. Its generator is
\[
 (Ax)_n=-n^2x_n,\qquad D(A)=\{x:\sum n^4|x_n|^2<\infty\}.
\]
Necessity follows from coordinate limits of any existing derivative. For sufficiency the quotient coefficients tend to \(-n^2\) and have modulus at most \(n^2\), using \(1-e^{-u}\le u\). A finite-head and uniformly summable-tail estimate proves convergence in square norm. Yet \(\|T(t)-I\|=1\) for every positive \(t\), since high-coordinate factors approach zero. Strong continuity does not imply norm continuity.

**Worked example 16.10 (Transport by translation).** On \(C_0(\mathbb R)\), let \(T(t)f(s)=f(s+t)\). These are isometries and form a semigroup. Every continuous function vanishing at infinity is uniformly continuous: use uniform continuity on a large compact interval and small tails outside it. Hence translations converge uniformly to the input as \(t\to0\), proving strong continuity. The generator is differentiation on the domain of continuously differentiable functions with both \(f,f'\) vanishing at infinity.

If \(f'\) lies in that space, its uniform continuity and the fundamental theorem make the difference quotients converge uniformly to \(f'\). Conversely a uniform quotient limit \(g\) is continuous and vanishes at infinity. Telescoping along fine equal subdivisions of an interval turns the uniform difference-quotient estimate into \(f(b)-f(a)=\int_a^bg(s)ds\); the fundamental theorem then gives \(f'=g\). Thus the stated domain is exact. The associated classical equation is \(u_t=u_s\), with its sign fixed by the chosen translation direction.

## Inhomogeneous evolution and the Duhamel formula

For continuous forcing, the expression
\[
 u(t)=T(t)x_0+\int_0^tT(t-s)f(s)ds
\]
defines a continuous mild solution. The word mild distinguishes the integral description from a claim that every value lies in the generator domain. Additional regularity supplies a classical derivative.

If \(x_0\in D(A)\) and \(f\) is continuously differentiable, the formula is classical and satisfies \(u'=Au+f\). To prove this, write \(S_tx=\int_0^tT(s)xds\), for which \(AS_tx=T(t)x-x\), and expand the forcing by its fundamental theorem. Interchanging continuous integrals on the finite triangle gives
\[
 v(t):=\int_0^tT(t-s)f(s)ds
 =S_tf(0)+\int_0^tS_{t-r}f'(r)dr.
\]
Both the integrand and its image under \(A\) are continuous. Graph-norm completeness therefore puts this integral in the domain and permits \(A\) to pass inside. It gives
\[
 Av(t)=T(t)f(0)-f(t)+\int_0^tT(t-r)f'(r)dr.
\]
Differentiating the equivalent expression \(\int_0^tT(s)f(t-s)ds\) gives the same right side plus \(f(t)\), proving the equation. The homogeneous term is classical by domain membership.

Uniqueness among classical solutions follows by differentiating \(T(t-s)u(s)\) and integrating, which recovers the displayed variation-of-constants formula. The argument uses actual domain and derivative hypotheses. In PDE applications, establishing those hypotheses and identifying the generator is mathematical work separate from plotting an evolution.

## An energy criterion for contraction generation

In a Hilbert space the resolvent condition can be checked through an energy inequality and one surjectivity statement. A densely defined operator is dissipative when \(\operatorname{Re}\langle Ax,x\rangle\le0\) on its domain.

**Theorem 16.11 (Hilbert maximal dissipativity criterion).** A densely defined closed dissipative operator generates a contraction semigroup if \(\lambda_0I-A\) is onto for one positive real \(\lambda_0\). Conversely every contraction generator is dissipative and has that surjectivity property.

*Proof.* For any positive \(\lambda\), dissipativity and Cauchy–Schwarz give
\[
 \lambda\|x\|^2\le\operatorname{Re}\langle(\lambda-A)x,x\rangle
 \le\|(\lambda-A)x\|\|x\|.
\]
Thus the shifted map is injective and any inverse has norm at most \(1/\lambda\). Let \(S\) be the positive parameters for which it is onto. This set is nonempty by assumption and open by the Neumann perturbation argument for the resolvent.

It is closed relative to the positive line too. If \(\lambda_n\in S\) tend to \(\lambda>0\), their inverse norms are eventually bounded by \(2/\lambda\). The resolvent identity makes the inverses Cauchy in operator norm, since their difference norm is at most \(|\lambda_n-\lambda_m|4/\lambda^2\). Let their limit be \(R\). For each \(y\), closedness of \(A\) applied to \(x_n=R_{\lambda_n}y\) and \(Ax_n=\lambda_nx_n-y\) gives \(Ry\in D(A)\) and \((\lambda-A)Ry=y\). The injectivity bound makes it the full inverse. Hence \(S\) is relatively closed. Connectedness forces \(S=(0,\infty)\), and Theorem 16.7 applies.

Conversely the Laplace theorem gives positive surjectivity for a contraction generator. For domain vectors, differentiate \(\|T(t)x\|^2\le\|x\|^2\) at zero to obtain \(2\operatorname{Re}\langle Ax,x\rangle\le0\), proving dissipativity. ∎

For the diagonal diffusion generator, the energy is \(\langle Ax,x\rangle=-\sum n^2|x_n|^2\le0\). For any positive \(\lambda\), diagonal division by \(\lambda+n^2\) is bounded and maps every input into the domain, since \(n^2/(\lambda+n^2)\le1\). Thus the criterion establishes contraction evolution directly from the operator and its domain, independently of guessing the exponential formula.

In PDE problems the energy estimate alone gives only dissipativity. Surjectivity of a shifted boundary problem is the additional maximality step. Omitting it would confuse a symmetric or dissipative restriction with the full generator, exactly the domain issue illustrated in chapter 13. The criterion identifies the two pieces that a rigorous evolution argument must actually establish.

## Bounded perturbations of a generator

A bounded additional operator can be added to a generator without changing its domain. Here is a direct proof. Suppose T(t) is a strongly continuous semigroup on a Banach space X, with generator A and bound ||T(t)||≤M e^ωt. Let B be a bounded operator on X. Define W0(t)=T(t) and recursively

\[
 W_{n+1}(t)x=\int_0^tT(t-s)B W_n(s)x\,ds.
\]

For each x the integrands are strongly continuous, so these are Banach-valued Riemann integrals. Induction gives

\[
 \|W_n(t)\|\le M^{n+1}e^{\omega t}
 \frac{\|B\|^n t^n}{n!}.
\]

Indeed insert the bound in the recursion, cancel the two exponential time factors to e^ωt and integrate s^n/n!. The series W(t)=Σn≥0Wn(t) therefore converges in operator norm uniformly on every bounded time interval. Its bound is M exp((ω+M||B||)t). Strong continuity follows from that uniform sum and the individual strong continuity; at zero the terms beyond W0 have norm O(t).

The sum satisfies the Volterra identity W(t)x=T(t)x+∫_0^tT(t−s)BW(s)x ds. Its continuous solution is unique for each initial x. Subtract two solutions and iterate the same integral estimate n times on a bounded time interval; the resulting factorial denominator makes their difference zero. Equivalently a Gronwall argument applies after absorbing e^ωt.

For fixed r≥0, split the source integral for W(t+r)x at time r and use the semigroup law for T. The result is W(t+r)x=T(t)W(r)x+∫_0^tT(t−s)BW(s+r)x ds. The function W(t)W(r)x satisfies that same integral equation with the same initial vector W(r)x. Uniqueness gives W(t+r)=W(t)W(r). Thus W is itself a strongly continuous semigroup, not merely a family solving separate integral equations.

Let C be its generator. The Volterra identity yields

\[
 \frac{W(t)x-T(t)x}{t}\longrightarrow Bx
\]

for every x, because strong continuity and local uniform bounds make the integrand average tend to Bx. If x belongs to D(A), this proves x belongs to D(C) and Cx=Ax+Bx. Conversely if x belongs to D(C), subtract that same average to show the difference quotient for T(t)x has limit Cx−Bx. Hence x belongs to D(A). Both domain inclusions are proved: D(C)=D(A), with C=A+B there.

For example a bounded multiplication potential can be added to an already constructed diffusion generator on a suitable Banach or Hilbert state space. The theorem preserves the original generator domain, but identifying that domain with a particular Sobolev boundary class still requires its own PDE argument. No such identification follows from boundedness of the potential alone.

The growth bound obtained is sufficient rather than sharp. If B=−αI with α>0 and T is contractive, the exact perturbed semigroup is e^−αtT(t), which decays, whereas the general estimate using ||B|| only sees a possible exponential increase. Additional dissipativity can improve it. The perturbation theorem supplies existence and domain control even when that extra sign structure is unavailable or when B does not commute with A.

## Exercises

### Exercise 16.1 {#semigroups-ex-1}

Derive a common finite-time operator bound from strong continuity.

<details><summary>Hint 1</summary>
Each fixed orbit is bounded on the compact time interval.
</details>
<details><summary>Hint 2</summary>
Apply uniform boundedness on the Banach input space.
</details>
<details><summary>Solution</summary>
For each \(x\), continuity makes \(\sup_{0\le t\le T}\|T(t)x\|\) finite. The family of bounded operators indexed by that interval is pointwise bounded, so Banach–Steinhaus gives \(\sup_{0\le t\le T}\|T(t)\|<\infty\). The constant is common to all unit inputs, unlike the initial orbit-specific bounds.
</details>

### Exercise 16.2 {#semigroups-ex-2}

Show integrated orbit averages approximate every input by generator-domain vectors.

<details><summary>Hint 1</summary>
Use \(S_tx/t\) and the established domain identity.
</details>
<details><summary>Hint 2</summary>
Bound the average difference by the largest orbit difference near zero.
</details>
<details><summary>Solution</summary>
Theorem 16.4 puts \(S_tx\) and hence its scalar multiple in the domain. Moreover \(\|S_tx/t-x\|\le\sup_{0\le s\le t}\|T(s)x-x\|\to0\). Thus the generator domain is dense, even when most ambient vectors have no derivative at zero themselves.
</details>

### Exercise 16.3 {#semigroups-ex-3}

Prove the generator is closed using the integrated identity.

<details><summary>Hint 1</summary>
Assume both input and generator output converge.
</details>
<details><summary>Hint 2</summary>
Pass to the integral limit, then divide by time at zero.
</details>
<details><summary>Solution</summary>
If \(x_n\to x\), \(Ax_n\to y\), the local operator bound passes \(T(t)x_n-x_n=\int_0^tT(s)Ax_n ds\) to \(T(t)x-x=\int_0^tT(s)y ds\). Dividing by \(t\) and using continuity at zero makes the quotient tend to \(y\). Hence \(x\) belongs to the domain and \(Ax=y\), exactly graph closedness.
</details>

### Exercise 16.4 {#semigroups-ex-4}

For a contraction semigroup, bound its positive-real resolvent and explain why its range is the generator domain.

<details><summary>Hint 1</summary>
Integrate the scalar exponential majorant.
</details>
<details><summary>Hint 2</summary>
Use both inverse identities from the Laplace theorem.
</details>
<details><summary>Solution</summary>
The integral norm is at most \(\int_0^\infty e^{-\lambda t}dt=1/\lambda\). The difference-quotient calculation puts its range in the domain, while \(R_\lambda(\lambda-A)x=x\) for domain vectors shows every such vector is attained. Thus the range is exactly \(D(A)\), not merely a subset claimed from a formal integral.
</details>

### Exercise 16.5 {#semigroups-ex-5}

Why is the exponential of a Yosida approximant a contraction?

<details><summary>Hint 1</summary>
Write \(A_n=n(B_n-I)\), with \(\|B_n\|\le1\).
</details>
<details><summary>Hint 2</summary>
Estimate the two commuting exponential factors separately.
</details>
<details><summary>Solution</summary>
We have \(e^{tA_n}=e^{-nt}e^{ntB_n}\), and the bounded exponential series gives \(\|e^{ntB_n}\|\le e^{nt\|B_n\|}\le e^{nt}\). Multiplying yields norm at most one. The special decomposition retains a sharp bound that the crude estimate \(e^{t\|A_n\|}\) would lose.
</details>

### Exercise 16.6 {#semigroups-ex-6}

Show \(A_nx\to Ax\) on \(D(A)\) in the generation proof.

<details><summary>Hint 1</summary>
First prove \(B_n\to I\) strongly using density and its common norm bound.
</details>
<details><summary>Hint 2</summary>
Use \(A_nx=B_nAx\).
</details>
<details><summary>Solution</summary>
For domain vectors, \(B_nx-x=R_nAx\) has norm at most \(\|Ax\|/n\). Density and \(\|B_n\|\le1\) extend convergence to every vector. For fixed \(x\in D(A)\), the vector \(Ax\) is an ambient vector, so \(B_nAx\to Ax\). The resolvent identity on the domain gives \(A_nx=B_nAx\), proving the claim.
</details>

### Exercise 16.7 {#semigroups-ex-7}

In the diffusion example, decide whether \(x_n=1/n^2\) belongs to the generator domain.

<details><summary>Hint 1</summary>
The domain uses fourth-power weights in its square sum.
</details>
<details><summary>Hint 2</summary>
Compute \(n^4|x_n|^2\).
</details>
<details><summary>Solution</summary>
The sequence is in \(\ell^2\), but the weighted terms equal one, whose sum diverges. Thus it is outside the generator domain, and its orbit need not have a norm derivative at zero. For every positive time the exponential damping gives stronger tail decay, a separate regularization property of this particular semigroup.
</details>

### Exercise 16.8 {#semigroups-ex-8}

Prove the diagonal diffusion semigroup is not operator-norm continuous at zero.

<details><summary>Hint 1</summary>
Its difference from identity is diagonal.
</details>
<details><summary>Hint 2</summary>
At any fixed positive time, high-coordinate damping tends to zero.
</details>
<details><summary>Solution</summary>
The difference coefficients are \(e^{-n^2t}-1\). Their absolute values are below one and tend to one as \(n\to\infty\), so their supremum is one. Hence \(\|T(t)-I\|=1\) for every \(t>0\). Strong convergence at each fixed input survives because its square tail is small, but unit inputs can shift to higher coordinates as time changes.
</details>

### Exercise 16.9 {#semigroups-ex-9}

Find the generator and domain of \(T(t)=e^{-t}I\).

<details><summary>Hint 1</summary>
Its difference quotient is a scalar quotient times the input.
</details>
<details><summary>Hint 2</summary>
The scalar quotient tends to minus one.
</details>
<details><summary>Solution</summary>
For every input, \((T(h)x-x)/h=[(e^{-h}-1)/h]x\to-x\). Thus the generator is \(-I\) on the whole Banach space. It is bounded, the semigroup is contractive and norm continuous, and its positive resolvent is \((\lambda+1)^{-1}I\), consistent with the Laplace estimate.
</details>

### Exercise 16.10 {#semigroups-ex-10}

For constant forcing \(b\) and initial \(x_0\in D(A)\), prove \(u(t)=T(t)x_0+S_tb\) is classical.

<details><summary>Hint 1</summary>
Use \(AS_tb=T(t)b-b\).
</details>
<details><summary>Hint 2</summary>
Differentiate the finite integral defining \(S_tb\).
</details>
<details><summary>Solution</summary>
Both terms lie in the domain. Differentiation gives \(u'=T(t)Ax_0+T(t)b\). Applying the generator gives \(Au=T(t)Ax_0+T(t)b-b\), so \(u'=Au+b\), with the correct initial value. No domain membership of the forcing vector itself is needed because its integrated orbit is in the domain.
</details>

### Exercise 16.11 {#semigroups-ex-11}

Why does a mild solution formula not automatically give a classical derivative?

<details><summary>Hint 1</summary>
The generator is defined only on its dense domain.
</details>
<details><summary>Hint 2</summary>
Continuity of an orbit does not make its initial difference quotient converge.
</details>
<details><summary>Solution</summary>
The integral formula yields ambient continuous vectors, but it has not necessarily put each vector in \(D(A)\). Even the homogeneous orbit of an initial vector outside that domain lacks a norm derivative at zero. Additional initial and forcing regularity is required to justify applying \(A\) and differentiating. The classical Duhamel proof states exactly such conditions rather than treating the formula as an automatic derivative theorem.
</details>

### Exercise 16.12 {#semigroups-ex-12}

Explain why showing a constructed semigroup generator merely extends \(A\) is insufficient in Hille–Yosida, and how resolvents prove equality.

<details><summary>Hint 1</summary>
An extension can have a larger domain.
</details>
<details><summary>Hint 2</summary>
Equal resolvents have equal ranges, which are the operator domains.
</details>
<details><summary>Solution</summary>
The integrated limit identity initially gives only \(A\subseteq G\). For a positive parameter, take any input and its \(A\)-resolvent preimage. Because \(G\) extends \(A\), that vector also solves the \(G\) resolvent equation. Injectivity of \(\lambda-G\) makes it the unique \(G\)-resolvent preimage. Thus both resolvents agree everywhere. Their ranges are their domains, so those domains coincide, and the already established agreement of values proves \(A=G\).
</details>

## Sources and continuation

This is original exposition and supported exercise development. The local source lineage is the Quarto semigroups chapter, with Banach and operator foundations proved earlier here. Conway and Brezis are syllabus benchmarks. The contraction generation theorem has a full Yosida-approximation proof; no more general growth-bound version is claimed without its stronger resolvent conditions.

The commissioned L4 continuation is *PDE: Weak Theory, Waves and Patterns* in roadmap task 13.F24, especially its evolution-equation treatment. Until that book is registered, the existing weak elliptic/parabolic reading supplies a retained local continuation with its own preparation. Identifying a PDE generator, boundary domain and energy estimate belongs to that PDE work; this abstract chapter does not supply those facts by a formal analogy.

## Summary

Strong continuity and uniform boundedness control evolution maps, while the generator domain identifies differentiable states. Integrated orbit vectors prove domain density and closedness, and Laplace integration constructs resolvents. The contraction Hille–Yosida theorem reverses that logic through bounded Yosida approximants. Concrete diffusion and transport show why an unbounded generator can coexist with bounded continuous evolution. Duhamel's formula then separates mild integral evolution from classical solutions with explicit regularity.
