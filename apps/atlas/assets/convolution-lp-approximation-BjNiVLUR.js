var e=`---
parent_id: book-measure-and-integration
chapter_id: convolution-lp-approximation
title: "Convolution and Approximation in Lp"
level: graduate
license: CC BY-SA 4.0
---

# Convolution and Approximation in Lp

Convolution replaces a function value by a weighted combination of nearby translated values. It can smooth rough data, approximate an identity operation, and express an evolution equation through a kernel. These uses require different hypotheses. An integrable kernel gives norm bounds; concentration near the origin gives approximation; smoothness of the kernel gives differentiability. None of those conclusions follows from the word averaging by itself.

We work on \\(\\mathbb R^d\\) with Lebesgue measure. The [Euclidean measure chapter](lebesgue-measure-r-n.md) supplies translation and affine scaling of measure, and [Fubini–Tonelli](product-measures-fubini-tonelli.md) supplies the interchange of absolutely integrable or nonnegative expressions. Functions in \\(L^p\\) are almost everywhere classes. An integral formula is used only at inputs where it is defined, and the resulting class is independent of representative choices. The pointwise approximation result later uses Lebesgue points; the norm approximation result has a different proof.

## Translation and dense continuous functions

Define \\(\\tau_hf(x)=f(x-h)\\). Translation preserves the \\(L^p\\) norm for every \\(1\\le p\\le\\infty\\), by invariance of length and the integral change-of-measure identity. For finite \\(p\\),
\\[
 \\|\\tau_hf-f\\|_p\\longrightarrow0\\qquad(h\\to0).
\\]
Here is the density argument establishing this assertion. Continuous compactly supported functions are dense in finite \\(L^p\\): truncate a function in height and outside a bounded region, approximate it by a simple function, and use compact/open regularity to approximate each finite-measure level set by a continuous cutoff. For an indicator, the \\(p\\)-th power of the error is bounded by the measure of the compact/open gap, since the cutoff lies between zero and one. Finite sums and truncation prove the density claim.

A compactly supported continuous function is uniformly continuous on the whole space. For small translations its original and translated supports lie inside a fixed compact set, so the uniform error tending to zero also forces its finite \\(L^p\\) error to zero. For general \\(f\\), approximate it by such a function and use translation isometry on the two approximation errors. This proves translation continuity without already assuming a smoothing theorem.

For \\(L^\\infty\\) this statement fails. Translating \\(1_{[0,\\infty)}\\) on the line by any nonzero amount gives essential supremum error one. If a bounded function is uniformly continuous, its translations do converge uniformly; that is an additional regularity condition on the representative.

## Definition and Young's inequality

For measurable functions define, when the integral is absolutely convergent,
\\[
 (f*g)(x)=\\int_{\\mathbb R^d}f(y)g(x-y)\\,dy.
\\]
One can begin with Borel representatives. Every Lebesgue-measurable function has a Borel representative equal almost everywhere, by the completion argument of chapter 9. Changing either factor on a null set leaves the integral unchanged wherever absolute convergence holds, because for each fixed \\(x\\) translation and reflection preserve null sets. Thus the construction descends to the intended classes.

**Theorem 14.1 (Young).** If \\(1\\le p,q,r\\le\\infty\\) and \\(1/p+1/q=1+1/r\\), with \\(1/\\infty=0\\), then convolution defines an \\(L^r\\) class and
\\[
 \\|f*g\\|_r\\le\\|f\\|_p\\|g\\|_q.
\\]

*Proof.* First let \\(r<\\infty\\). Then \\(p,q\\le r\\) are finite. If either input norm vanishes the integral vanishes, so suppose both are positive. Factor the absolute integrand into
\\[
 (|f(y)|^p|g(x-y)|^q)^{1/r},\\quad
 |f(y)|^{1-p/r},\\quad |g(x-y)|^{1-q/r}.
\\]
Apply Hölder with reciprocal exponents \\(1/r\\), \\(1/p-1/r\\), \\(1/q-1/r\\), whose sum is one. A zero reciprocal exponent means omitting its constant-one factor. This gives
\\[
 |(f*g)(x)|^r\\le
 \\|f\\|_p^{r-p}\\|g\\|_q^{r-q}
 \\int |f(y)|^p|g(x-y)|^q\\,dy.
\\]
Tonelli makes the integral over \\(x\\) of the last expression equal to \\(\\|f\\|_p^p\\|g\\|_q^q\\). It is finite, so the original absolute convolution integral is finite almost everywhere by the same Hölder bound. Integration and an \\(r\\)-th root prove the inequality. Measurability follows from the parameter-integral theorem.

If \\(r=\\infty\\), the condition says that \\(p,q\\) are conjugate. Hölder applied directly to the translated factors bounds the absolute integral at every \\(x\\) by the product of norms, including the conjugate endpoint pair one and infinity. This proves the asserted essential supremum bound. ∎

The important special case is \\(L^1*L^p\\to L^p\\), including \\(p=\\infty\\). It gives a bounded averaging operator even when the output is not close to the original function. When the exponents are both two, the target is infinity, not two. The exponent relation must be checked rather than inferred from a vague similarity of the input spaces.

Convolution is commutative by the substitution \\(y\\mapsto x-y\\). For three \\(L^1\\) factors it is associative almost everywhere: Tonelli applied to the absolute triple integrand gives finite total integral equal to the product of the three norms, and Fubini permits the two groupings. If two factors are in \\(L^1\\) and the third in finite \\(L^p\\), associativity follows first on the dense subspace \\(L^1\\cap L^p\\) and then by the bounded operator estimates. This is an equality of classes, not an assertion that every individual integral at every exceptional input is defined.

**Worked example 14.2 (A triangle from two intervals).** On the line let \\(f=g=1_{[0,1]}\\). The convolution is the length of \\([0,1]\\cap[x-1,x]\\), so it equals \\(x\\) for \\(0\\le x\\le1\\), \\(2-x\\) for \\(1\\le x\\le2\\), and zero outside. Its integral is one and its supremum is one. The \\(L^1\\) bound is attained, while \\(L^2*L^2\\to L^\\infty\\) also gives the sharp upper bound one. It is continuous but has corners, showing that integrable kernels do not automatically make outputs infinitely differentiable.

## When the convolution is continuous and vanishes at infinity

Young's supremum bound also gives a continuity theorem. If \\(1<p<\\infty\\), \\(1/p+1/q=1\\), \\(f\\in L^p\\) and \\(g\\in L^q\\), their convolution has a representative in \\(C_0(\\mathbb R^d)\\). Indeed approximate both inputs by compactly supported continuous functions in their respective norms. The convolution of two such approximations is continuous, by uniform continuity under the integral on a compact region, and has compact support. Young's bound gives
\\[
 \\|f*g-f_n*g_n\\|_\\infty
 \\le\\|f-f_n\\|_p\\|g\\|_q+\\|f_n\\|_p\\|g-g_n\\|_q\\longrightarrow0.
\\]
Uniform limits preserve continuity and vanishing at infinity, as proved in the Radon chapter. Thus the almost everywhere convolution class has the claimed continuous representative. This conclusion is stronger than boundedness alone and uses the ability to approximate both factors in finite exponents.

At the conjugate endpoint, an \\(L^1\\) factor and an \\(L^\\infty\\) factor still give a bounded uniformly continuous convolution: translate the integrable factor and use its \\(L^1\\) translation continuity in the supremum bound. Vanishing at infinity can fail. Convolving any integrable function of nonzero integral with the constant function one produces a nonzero constant. That constant does not belong to \\(C_0\\) on Euclidean space. Replacing a finite conjugate exponent by infinity therefore preserves the bound and uniform continuity but changes the conclusion at infinity.

There is also no continuity assertion for arbitrary pairs of \\(L^1\\) functions. On the line take
\\[
 f(x)=g(x)=x^{-3/4}1_{(0,1)}(x).
\\]
Both inputs are integrable. For \\(0<x<1\\), substitution \\(y=xt\\) gives
\\[
 (f*g)(x)=x^{-1/2}\\int_0^1t^{-3/4}(1-t)^{-3/4}\\,dt.
\\]
The displayed constant is finite and positive: each endpoint singularity has exponent less than one. Consequently the convolution is essentially unbounded near zero, although Young places it in \\(L^1\\). No continuous representative on the whole line can have that behaviour, since a continuous function is bounded on a compact neighbourhood of zero. This example separates finite-integral control from continuity without using an exceptional infinite value at just one input. It is the persistent behaviour on small positive intervals that rules out continuity.

These three conclusions serve different applications. Conjugate finite exponents give a continuous function that decays at infinity; the endpoint pair gives uniform continuity without guaranteed decay; two integrable factors give an integrable class without guaranteed continuity. A kernel may be integrable in all three situations, so the regularity of the other factor must also be stated.

## Approximate identities in norm

**Definition 14.3.** A family \\((k_\\varepsilon)\\subset L^1\\), indexed by positive \\(\\varepsilon\\downarrow0\\), is an approximate identity here if
\\[
 \\int k_\\varepsilon=1,\\qquad
 \\sup_\\varepsilon\\|k_\\varepsilon\\|_1=C<\\infty,
 \\qquad
 \\int_{|y|>\\delta}|k_\\varepsilon(y)|\\,dy\\to0
 \\quad(\\delta>0).
\\]
The kernels may be signed or complex. Absolute tails and a uniform absolute norm bound are therefore explicit. If \\(k\\in L^1\\) has integral one, its rescalings \\(k_\\varepsilon(x)=\\varepsilon^{-d}k(x/\\varepsilon)\\) form such a family, by affine scaling and the integrable tail property.

**Theorem 14.4 (Norm approximation).** For \\(1\\le p<\\infty\\) and \\(f\\in L^p\\), one has \\(k_\\varepsilon*f\\to f\\) in \\(L^p\\). For bounded uniformly continuous \\(f\\), the convergence is uniform.

*Proof.* Since the kernel integral is one, the difference is the integral of \\(k_\\varepsilon(y)(\\tau_yf(x)-f(x))\\). Jensen's inequality for the probability density \\(|k_\\varepsilon|/\\|k_\\varepsilon\\|_1\\), or the triangle inequality when \\(p=1\\), gives
\\[
 \\|k_\\varepsilon*f-f\\|_p^p
 \\le C^{p-1}\\int |k_\\varepsilon(y)|\\,
 \\|\\tau_yf-f\\|_p^p\\,dy.
\\]
Tonelli justifies the integration of the nonnegative bound. For small \\(|y|\\), translation continuity makes the norm error uniformly small. Outside a fixed small ball it is bounded by \\(2^p\\|f\\|_p^p\\), while the absolute kernel tail tends to zero. Split the integral accordingly, choose the small ball first, then the family parameter. This proves norm convergence.

For a bounded uniformly continuous function, use instead the pointwise bound by the integral of \\(|k_\\varepsilon(y)|\\) times the uniform translation error. The same split, with the outside error bounded by \\(2\\|f\\|_\\infty\\), proves uniform convergence. ∎

The theorem does not give convergence for every \\(L^\\infty\\) function. Nor does it promise pointwise convergence from the three approximate-identity conditions alone. Those conditions control integrated translates in norm. A pointwise theorem needs a condition connecting kernel shape to local averages of the particular function.

**Worked example 14.5 (Smoothing a jump with a box).** Let \\(f=1_{[0,1]}\\) and \\(k_\\varepsilon=(2\\varepsilon)^{-1}1_{[-\\varepsilon,\\varepsilon]}\\), with \\(0<\\varepsilon<1/2\\). The output is one on \\([\\varepsilon,1-\\varepsilon]\\), zero outside \\([-\\varepsilon,1+\\varepsilon]\\), and linear on each transition interval. For finite \\(p\\), four half-transition integrals give
\\[
 \\|k_\\varepsilon*f-f\\|_p^p
 =\\frac{2^{2-p}\\varepsilon}{p+1}.
\\]
For example its \\(L^1\\) error is \\(\\varepsilon\\). The essential supremum error is \\(1/2\\) for every parameter, so \\(L^\\infty\\) convergence fails. Values assigned at the two jump inputs do not affect any of these norm statements.

## Smooth kernels and genuine smooth approximation

Choose the nonnegative radial function
\\[
 \\eta(x)=c_d\\exp\\left(-\\frac1{1-|x|^2}\\right)
 \\quad(|x|<1),\\qquad \\eta(x)=0\\quad(|x|\\ge1),
\\]
where the finite positive constant \\(c_d\\) makes its integral one. It is infinitely differentiable: every derivative inside the ball is an exponential times a rational expression whose possible boundary growth is a power of \\((1-|x|^2)^{-1}\\), and the exponential tends to zero faster than every such power. Thus all derivatives extend by zero at the boundary. Its rescalings \\(\\eta_\\varepsilon\\) form a positive approximate identity with support in the radius-\\(\\varepsilon\\) ball.

If \\(f\\in L^1_{\\mathrm{loc}}\\), then \\(f_\\varepsilon=\\eta_\\varepsilon*f\\) is smooth and
\\[
 D^\\alpha f_\\varepsilon=(D^\\alpha\\eta_\\varepsilon)*f.
\\]
For \\(x\\) in a fixed compact set, all the kernel supports involve \\(f\\) only on one larger compact set. Difference quotients of the smooth kernel derivatives are uniformly bounded there. Dominated convergence, with the local integral of \\(|f|\\), therefore justifies each differentiation; induction gives all orders. For \\(f\\in L^p\\), Young also yields
\\[
 \\|D^\\alpha f_\\varepsilon\\|_p
 \\le\\varepsilon^{-|\\alpha|}\\|D^\\alpha\\eta\\|_1\\|f\\|_p.
\\]
The growth of the derivative bound as the smoothing scale shrinks is expected. Norm approximation of a rough input does not promise uniformly bounded derivatives of every order.

If \\(f\\) has compact support, the smoothed support lies in that support enlarged by a radius-\\(\\varepsilon\\) ball. Hence continuous compact approximations followed by mollification show that \\(C_c^\\infty(\\mathbb R^d)\\) is dense in every finite \\(L^p\\). On an open domain \\(\\Omega\\), first truncate the input to compact subsets lying a positive distance from the complement and then choose a smaller smoothing radius. This proves density of \\(C_c^\\infty(\\Omega)\\) in \\(L^p(\\Omega)\\). No boundary extension theorem for derivatives has been used.

## Lebesgue points and pointwise smoothing

The differentiation proof in chapter 12 extends to \\(\\mathbb R^d\\) using centered axis-parallel cubes. In the finite covering selection, choose a cube of largest side length, discard intersecting cubes, and repeat. Each discarded cube is contained in the threefold enlargement of its selected cube. This gives weak maximal constant \\(3^d\\) in place of three. The density of continuous compact functions and Markov's inequality then give zero average absolute error at almost every input, exactly as in the one-dimensional proof. Balls lie inside comparable centered cubes, so the ball-average error tends to zero at those same inputs.

Since \\(\\eta\\) is bounded and supported in the unit ball, at such an input
\\[
 |\\eta_\\varepsilon*f(x)-f(x)|
 \\le\\|\\eta\\|_\\infty\\varepsilon^{-d}
 \\int_{|y|<\\varepsilon}|f(x-y)-f(x)|\\,dy\\longrightarrow0.
\\]
Thus mollifications converge at every Lebesgue point, and almost everywhere for locally integrable inputs. A nonnegative compactly supported bounded kernel satisfies the same pointwise argument when its integral is one. Positivity is not essential for this bounded-support estimate, because absolute values supply the bound; the bounded shape and scaling are what connect it to local averages.

At a jump of a one-dimensional function with finite one-sided limits, an even kernel instead tends to the average of those two limits. Half its mass lies on either side, and dominated convergence on the fixed rescaled support proves the assertion. Such an input usually is not a Lebesgue point of any assigned single value when the jump is nonzero. Almost everywhere recovery and jump averaging are compatible statements with different hypotheses.

## Weak derivatives and quantitative approximation

A locally integrable \\(g_j\\) is the weak derivative \\(D_jf\\) when \\(\\int f D_j\\phi=-\\int g_j\\phi\\) for every smooth compactly supported test function. This definition concerns integration by parts, rather than pointwise difference quotients. If \\(f,g_j\\in L^p(\\mathbb R^d)\\), then
\\[
 D_j(\\eta_\\varepsilon*f)=\\eta_\\varepsilon*g_j.
\\]
Indeed for fixed \\(x\\), the function of the integration variable \\(y\\mapsto\\eta_\\varepsilon(x-y)\\) is a permitted test. Its \\(y\\)-derivative is the negative of its \\(x\\)-derivative, and the weak identity gives the formula. Consequently both the function and its weak derivatives converge in \\(L^p\\) for finite \\(p\\). Higher weak derivatives are handled by repeating this argument.

For a smooth function, the fundamental theorem along a segment gives \\(f(x-h)-f(x)=-\\int_0^1\\nabla f(x-th)\\cdot h\\,dt\\). Jensen and translation invariance imply
\\[
 \\|\\tau_hf-f\\|_p\\le |h|\\,\\||\\nabla f|\\|_p.
\\]
For a function with first weak derivatives in \\(L^p\\), apply the smooth result to its mollifications and pass to the \\(L^p\\) limits on both sides. Applying the same probability-kernel estimate as before yields the explicit smoothing rate
\\[
 \\|\\eta_\\varepsilon*f-f\\|_p
 \\le\\varepsilon\\left(\\int|z|^p\\eta(z)\\,dz\\right)^{1/p}
 \\||\\nabla f|\\|_p
 \\le\\varepsilon\\,\\||\\nabla f|\\|_p.
\\]
These derivative identities are global statements on Euclidean space. Extending a function by zero from a domain may create a boundary distribution in its derivative, so one cannot automatically transfer the global derivative argument to that extension. Interior mollification is valid without that extra boundary assertion.

**Worked example 14.6 (Cancellation improves a smooth rate).** In one dimension, an even mollifier has first moment zero. For \\(f(x)=\\sin x\\), Taylor's theorem with \\(|f''|\\le1\\) gives
\\[
 \\|\\eta_\\varepsilon*f-f\\|_\\infty
 \\le\\frac{\\varepsilon^2}{2}\\int z^2\\eta(z)\\,dz.
\\]
The linear Taylor contribution cancels because \\(\\int z\\eta(z)\\,dz=0\\). The same argument applies to any bounded twice continuously differentiable function with bounded second derivative. The sine function is not in finite \\(L^p\\) on the line, so this is a uniform smooth-function estimate, rather than an application of the finite-norm theorem. The error improvement comes from a moment cancellation plus two derivatives.

## Exercises with hints and complete solutions

### MEASURE-CONV-E001 — Translation of a set

For \\(f=1_{[0,1]}\\) and \\(|h|\\le1\\), compute \\(\\|\\tau_hf-f\\|_p\\) for finite \\(p\\) and its essential supremum for nonzero \\(h\\).

**Hint 1.** The absolute difference is the indicator of the symmetric difference of the two intervals.

**Hint 2.** That symmetric difference has length \\(2|h|\\).

**Solution.** Its \\(p\\)-th power is again the same indicator, so the finite norm is \\((2|h|)^{1/p}\\). For nonzero \\(h\\) the difference equals one on a region of positive length, so its essential supremum is one. This gives translation continuity for every finite exponent and failure for infinity in one calculation.

### MEASURE-CONV-E002 — Young exponents

Find the Young target exponent for inputs in \\(L^{3/2}\\) and \\(L^{3/2}\\). Is the asserted target two justified by this inequality?

**Hint 1.** Insert the reciprocal exponents in the theorem's equation.

**Hint 2.** Solve for the reciprocal of the output exponent.

**Solution.** The sum of reciprocal input exponents is \\(4/3\\), so \\(1/r=1/3\\) and the target is \\(L^3\\), with norm at most the product of the two input norms. A target of two does not satisfy the exponent relation and is not supplied by this theorem. On an infinite-measure domain membership in \\(L^3\\) alone also does not imply membership in \\(L^2\\).

### MEASURE-CONV-E003 — An integral of a convolution

If \\(f,g\\in L^1\\), prove \\(\\int(f*g)=(\\int f)(\\int g)\\) for real or complex inputs.

**Hint 1.** First integrate the absolute double integrand.

**Hint 2.** Translation preserves the integral of the second factor.

**Solution.** Tonelli gives \\(\\int\\int|f(y)g(x-y)|\\,dy\\,dx=\\|f\\|_1\\|g\\|_1<\\infty\\). Fubini is therefore valid for the signed or complex integrand. The inner integral in \\(x\\) is \\(f(y)\\int g\\), and integrating in \\(y\\) yields the stated product. Absolute integrability is established before the interchange.

### MEASURE-CONV-E004 — Scaling a kernel

For \\(k\\in L^1(\\mathbb R^d)\\) of integral one, verify all three approximate-identity conditions for its rescalings.

**Hint 1.** Substitute \\(x=\\varepsilon z\\).

**Hint 2.** The outside-radius integral becomes a tail beyond \\(\\delta/\\varepsilon\\).

**Solution.** Affine scaling gives \\(\\int k_\\varepsilon=\\int k=1\\) and \\(\\|k_\\varepsilon\\|_1=\\|k\\|_1\\). The absolute tail outside \\(\\delta\\) is \\(\\int_{|z|>\\delta/\\varepsilon}|k(z)|\\,dz\\), which tends to zero by integrability. Thus all three conditions hold even if the kernel changes sign.

### MEASURE-CONV-E005 — The wrong total mass

Let \\(k\\in L^1\\) have integral zero, with its usual rescalings. Prove \\(k_\\varepsilon*f\\to0\\) in finite \\(L^p\\).

**Hint 1.** Subtract \\(f(x)\\int k_\\varepsilon\\), which is zero.

**Hint 2.** Repeat the translation-error argument, retaining the uniform absolute norm bound.

**Solution.** The convolution equals \\(\\int k_\\varepsilon(y)(f(x-y)-f(x))\\,dy\\). The Jensen/translation bound in theorem 14.4 applies with this same expression and the absolute tails of the rescaled kernel. It tends to zero in norm. The normalization integral one in an approximate identity is what makes its limit the original input rather than zero.

### MEASURE-CONV-E006 — Box smoothing error

Derive the exact finite-norm error in example 14.5, including the factor from all four half-transitions.

**Hint 1.** On \\([-\\varepsilon,0]\\) the error is \\((x+\\varepsilon)/(2\\varepsilon)\\).

**Hint 2.** Symmetry makes each of the four contributions equal.

**Solution.** One contribution to the \\(p\\)-th power is \\(\\int_0^\\varepsilon[t/(2\\varepsilon)]^pdt=\\varepsilon/[2^p(p+1)]\\). There are two sides at each of the two endpoints. Multiplying by four gives \\(2^{2-p}\\varepsilon/(p+1)\\). Taking the \\(p\\)-th root proves the norm formula, while the essential supremum remains one half.

### MEASURE-CONV-E007 — Smoothness depends on the kernel

Explain why convolution with a smooth compact kernel is smooth for locally integrable inputs, but convolution with the box kernel need not be smooth.

**Hint 1.** Differentiation is transferred to the kernel under a local integrable bound.

**Hint 2.** Use the two-interval convolution from example 14.2.

**Solution.** Each derivative of a smooth compact kernel is bounded on its compact support, and on a fixed output neighbourhood the input is needed only on a larger compact set. Dominated differentiation gives every derivative formula. The box kernel lacks those smooth derivatives. Its convolution with an interval indicator is the triangular function, which has corners and is not differentiable there. Thus integrability of a kernel is insufficient for infinite smoothness.

### MEASURE-CONV-E008 — Pointwise recovery at a Lebesgue point

For a bounded compactly supported kernel \\(k\\) of integral one and its rescalings, prove convergence at a Lebesgue point of a locally integrable function.

**Hint 1.** Enclose the support in a ball of fixed radius \\(R\\).

**Hint 2.** Bound the error by \\(\\|k\\|_\\infty\\varepsilon^{-d}\\) times the absolute local error integral over radius \\(R\\varepsilon\\).

**Solution.** After subtracting the point value using the integral-one identity, the absolute error is bounded by that expression. It is a fixed constant times the average absolute error over the radius-\\(R\\varepsilon\\) ball, which tends to zero at a Lebesgue point. Positivity is unnecessary here because the bounded absolute kernel supplies the estimate. The constant includes the fixed radius and dimension but does not depend on the shrinking parameter.

### MEASURE-CONV-E009 — Weak derivative signs

If \\(g=D_jf\\) weakly, derive \\(D_j(\\eta_\\varepsilon*f)=\\eta_\\varepsilon*g\\), tracking both minus signs.

**Hint 1.** Test the weak identity with \\(y\\mapsto\\eta_\\varepsilon(x-y)\\).

**Hint 2.** Its derivative in \\(y\\) is minus its derivative in \\(x\\).

**Solution.** The weak identity gives \\(\\int g(y)\\eta_\\varepsilon(x-y)\\,dy=-\\int f(y)D_{y_j}\\eta_\\varepsilon(x-y)\\,dy\\). Since \\(D_{y_j}\\eta_\\varepsilon(x-y)=-D_{x_j}\\eta_\\varepsilon(x-y)\\), the two minus signs cancel. Differentiating the smooth convolution in \\(x\\) gives the desired formula, with all integrals justified on the compact kernel support.

### MEASURE-CONV-E010 — A first-order rate

Prove the translation estimate for smooth inputs with gradient in finite \\(L^p\\), then explain its extension to weakly differentiable inputs.

**Hint 1.** Integrate the gradient along the segment from \\(x\\) to \\(x-h\\).

**Hint 2.** Use Jensen in the segment parameter, integrate in \\(x\\), and then use mollified approximations.

**Solution.** The segment formula gives the absolute difference at most \\(|h|\\int_0^1|\\nabla f(x-th)|dt\\). Jensen bounds its \\(p\\)-th power by \\(|h|^p\\int_0^1|\\nabla f(x-th)|^pdt\\). Tonelli and translation invariance give the estimate after an \\(p\\)-th root. For weak derivatives, mollification converges to both the function and its gradient in \\(L^p\\); apply the smooth estimate and pass to the limits, using continuity of the norms.

### MEASURE-CONV-E011 — A second-order cancellation

For an even compact mollifier on the line and bounded \\(C^2\\) input with bounded second derivative, prove the second-order uniform estimate.

**Hint 1.** Taylor-expand \\(f(x-\\varepsilon z)\\) through its linear term.

**Hint 2.** The integral of \\(z\\eta(z)\\) is zero.

**Solution.** Taylor's remainder has absolute value at most \\(\\varepsilon^2z^2\\|f''\\|_\\infty/2\\). The constant term integrates to \\(f(x)\\) and the linear term integrates to zero by evenness. Integration of the remainder gives \\(\\|\\eta_\\varepsilon*f-f\\|_\\infty\\le\\varepsilon^2\\|f''\\|_\\infty\\int z^2\\eta(z)dz/2\\). The bound is uniform in the input location because the derivative bound is uniform.

### MEASURE-CONV-E012 — Interior smoothing versus boundary derivatives

Let \\(f=1\\) on \\((0,1)\\), and extend it by zero to the line. Explain why its derivative inside the interval is zero but its extended weak derivative is not the zero function on the line.

**Hint 1.** Evaluate \\(\\int_0^1\\phi'\\) for a smooth compactly supported line test.

**Hint 2.** The boundary values remain after integration.

**Solution.** On tests supported strictly inside the interval, the integral of the derivative test is zero, so the interior weak derivative is zero. On a general line test, \\(\\int_0^1\\phi'=\\phi(1)-\\phi(0)\\). Its negative is the action of \\(\\delta_0-\\delta_1\\), so the extended distributional derivative is that boundary measure, not zero. Therefore a global weak-derivative smoothing claim cannot be justified by ignoring the boundary introduced by zero extension.

## Summary

Translation is continuous in finite \\(L^p\\), which is the mechanism behind norm convergence of approximate identities. Young's exponent relation gives the convolution bounds and the absolute-convergence justification. Smooth compact kernels provide smooth approximations and transfer weak derivatives by integration by parts. Lebesgue points give pointwise recovery under a suitable kernel shape, while even kernels average one-sided jump limits. Derivative control and moment cancellation provide quantitative rates. The exponent, test domain, normalization and kernel regularity must each match the conclusion being used.
`;export{e as default};