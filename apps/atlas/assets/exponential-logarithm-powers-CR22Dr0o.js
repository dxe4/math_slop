var e=`---
parent_id: book-complex-analysis
chapter_id: exponential-logarithm-powers
title: "Exponential, Logarithm, Powers, and Trigonometric Functions"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Exponential, Logarithm, and Powers

The exponential is an entire function, while its inverse requires a branch. That difference is not a defect in notation: periodicity prevents one global inverse. Complex powers inherit the chosen logarithm, and identities that are automatic for positive real numbers can acquire multiples of \\(2\\pi i\\) or fail to be defined.

Preparation is [Power Series and Analytic Functions](power-series-analytic-functions.md). We construct the exponential from its series, identify its geometry, and then state every logarithmic or power expression on a specified domain. The [domain-colouring laboratory](../../visual-labs/domain-coloring-live.md) can illustrate these domains and branch changes; its colors do not replace the algebra and derivative proofs.

## The entire exponential

**Definition 4.1 (Complex exponential).** Set
\\[
 E(z)=\\sum_{n=0}^{\\infty}\\frac{z^n}{n!}.
\\]
The previous chapter proves infinite radius, holomorphy, \\(E'=E\\), and \\(E(0)=1\\). We write \\(e^z=E(z)\\) after establishing its familiar properties.

**Theorem 4.2 (Nonvanishing and addition).** For all complex \\(z,w\\),
\\[
 E(z)E(-z)=1,\\qquad E(z+w)=E(z)E(w).
\\]

**Proof.** Differentiate \\(H(z)=E(z)E(-z)\\). The chain and product rules give \\(H'=E(z)E(-z)-E(z)E(-z)=0\\). The domain is the connected plane, so the zero-derivative theorem makes \\(H\\) constant, and \\(H(0)=1\\). In particular \\(E\\) never vanishes.

For fixed \\(w\\), differentiate \\(K(z)=E(z+w)E(-z)\\); again \\(K'=0\\), so \\(K(z)=K(0)=E(w)\\). Multiplying by \\(E(z)\\) and using the first identity proves the addition law. \\(\\square\\)

On the real axis, \\(E(x)\\) equals the ordinary real exponential. Indeed the derivative in the real variable of \\(e^{-x}E(x)\\) is zero and its value at zero is one; apply the real mean-value theorem to the real and imaginary components. Thus the series construction agrees with the prior real function.

For a real \\(t\\), let \\(G(t)=\\cos t+i\\sin t\\). It satisfies \\(G'=iG\\) and \\(G\\overline G=1\\). Differentiating \\(E(it)\\overline{G(t)}\\) gives zero, so its initial value one makes \\(E(it)=G(t)\\). The addition law now yields
\\[
 E(x+iy)=e^x(\\cos y+i\\sin y),\\qquad |E(x+iy)|=e^x.
\\]
This proves Euler's formula from the analytic construction instead of making it a notation convention.

**Corollary 4.3 (Kernel and periods).** \\(E(z)=1\\) exactly when \\(z=2\\pi ik\\), \\(k\\in\\mathbb Z\\). Consequently \\(E(z)=E(w)\\) exactly when \\(z-w\\in2\\pi i\\mathbb Z\\).

**Proof.** The modulus equation forces \\(\\Re z=0\\); the sine and cosine values then force the imaginary part to be an integer multiple of \\(2\\pi\\). The second statement follows by multiplying by the nonzero inverse exponential. \\(\\square\\)

Every nonzero complex number occurs as an exponential: if \\(z=re^{i\\theta}\\), take \\(\\log r+i\\theta\\). The map is onto the punctured plane and periodic, not injective on the plane. Its derivative is everywhere nonzero, but that local condition has not removed the global repetitions.

## Logarithm as a branch on a domain

**Definition 4.4 (Logarithm branch).** A logarithm branch on a domain \\(\\Omega\\subset\\mathbb C\\setminus\\{0\\}\\) is a continuous function \\(L:\\Omega\\to\\mathbb C\\) satisfying \\(E(L(z))=z\\).

The equation forces \\(\\Re L(z)=\\log|z|\\) and makes its imaginary part a continuous argument. There is no such branch on the whole punctured plane by the argument obstruction from Chapter 1. A pointwise set of possible logarithms exists everywhere except zero; a continuous single-valued branch is a stronger object.

On the slit plane
\\[
 S=\\mathbb C\\setminus(-\\infty,0],
\\]
the principal branch is
\\[
 \\operatorname{Log}z=\\log|z|+i\\operatorname{Arg}z,
 \\qquad -\\pi<\\operatorname{Arg}z<\\pi.
\\]
This definition excludes zero and the entire nonpositive real ray. We distinguish it from the pointwise principal argument convention that can assign \\(\\pi\\) on the negative ray: an assigned endpoint value would not restore continuity across that ray.

**Theorem 4.5 (Derivative of the principal logarithm).** \\(\\operatorname{Log}\\) is holomorphic on \\(S\\), and \\((\\operatorname{Log})'(z)=1/z\\).

**Proof.** Locally away from the cut, the polar angle has a smooth inverse-trigonometric expression. Its derivatives are \\(\\theta_x=-y/(x^2+y^2)\\), \\(\\theta_y=x/(x^2+y^2)\\); these can be obtained by differentiating an appropriate local arctangent expression. The real part \\(u=\\frac12\\log(x^2+y^2)\\) has \\(u_x=x/(x^2+y^2)\\), \\(u_y=y/(x^2+y^2)\\). These continuous partials satisfy Cauchy–Riemann with \\(v=\\theta\\). The derivative is therefore \\((x-iy)/(x^2+y^2)=1/z\\). The local formulas agree with the chosen angle on overlaps, proving the claim everywhere on \\(S\\). \\(\\square\\)

The inverse identities have domains:
\\[
 E(\\operatorname{Log}z)=z\\quad(z\\in S),\\qquad
 \\operatorname{Log}(E(w))=w\\quad(-\\pi<\\Im w<\\pi).
\\]
For other \\(w\\), the second expression may differ by a period or be undefined because the image lands on the removed ray. Writing both identities without these restrictions would turn a local inverse into a false global one.

**Proposition 4.6 (All continuous logarithm branches are holomorphic).** A logarithm branch on a domain is holomorphic, has derivative \\(1/z\\), and any two such branches differ by a constant \\(2\\pi ik\\).

**Proof.** Around any point \\(a\\ne0\\), rotate a small disk so its image avoids a negative ray. The preceding principal construction, plus a fixed imaginary constant, gives a local holomorphic logarithm \\(L_0\\). For any continuous branch \\(L\\), Corollary 4.3 makes \\(L-L_0\\) a continuous function with values in \\(2\\pi i\\mathbb Z\\). On the small connected disk it is constant, so \\(L\\) is holomorphic there and \\(L'=L_0'=1/z\\). The difference of two global branches has the same discrete values and is constant on the connected domain. \\(\\square\\)

This is a local proof from explicit branches; it does not rely on an unproved complex inverse theorem. Existence of a logarithm for every nonvanishing holomorphic function on a simply connected domain will follow later from Cauchy theory.

## Complex powers and changed algebraic identities

**Definition 4.7 (Power relative to a branch).** For \\(a\\in\\mathbb C\\) and a chosen logarithm \\(L\\) on \\(\\Omega\\), define \\(z^a=\\exp(aL(z))\\) on that domain.

The chain rule gives
\\[
 \\frac d{dz}z^a=\\frac a z\\,\\exp(aL(z)).
\\]
This expression is often written \\(az^{a-1}\\), using the same branch on both powers. If \\(a\\) is an integer, adding \\(2\\pi ik\\) to the logarithm changes nothing, because \\(e^{2\\pi ika}=1\\). For noninteger \\(a\\), different logarithm choices can change the value.

The familiar product law for exponents with the same base and the same branch is valid:
\\(z^az^b=z^{a+b}\\), by the exponential addition law. Laws involving logarithms of products require a domain check and may include a period. If \\(z,w,zw\\) all lie in the principal slit domain, then
\\[
 \\operatorname{Log}z+\\operatorname{Log}w-\\operatorname{Log}(zw)
 \\in2\\pi i\\mathbb Z,
\\]
but the integer need not be zero.

For example let \\(z=w=e^{3\\pi i/4}\\). Both numbers and their product \\(-i\\) are in the principal domain. The sum of the two principal logarithms is \\(3\\pi i/2\\), while the logarithm of the product is \\(-\\pi i/2\\). Their difference is \\(2\\pi i\\). Thus a false identity can occur even when every displayed expression is individually defined.

The principal square root is \\(e^{\\operatorname{Log}z/2}\\) on \\(S\\). Its square is \\(z\\), but it does not assign a continuous value around every circuit in the punctured plane. With the preceding \\(z,w\\), multiplying the principal square roots gives the negative of the principal square root of \\(zw\\). A rule about positive real square roots cannot be transferred without checking its branch.

## Roots that can be listed explicitly

**Theorem 4.8 (All roots of a nonzero number).** For \\(n\\ge1\\) and \\(w=r(\\cos\\theta+i\\sin\\theta)\\ne0\\), the solutions of \\(z^n=w\\) are
\\[
 z_k=r^{1/n}e^{i(\\theta+2\\pi k)/n},\\qquad k=0,\\ldots,n-1.
\\]

**Proof.** Taking moduli forces \\(|z|=r^{1/n}\\). Equality of the unit factors requires \\(n\\arg z-\\theta\\in2\\pi\\mathbb Z\\), producing the listed values. Two of the \\(n\\) values coincide only if their indices differ by a multiple of \\(n\\), so they are distinct. Every integer index is congruent to one of those listed, proving completeness. \\(\\square\\)

Changing the chosen argument \\(\\theta\\) permutes the same finite set. Selecting one continuously as \\(w\\) varies is a separate branch problem. At \\(w=0\\), the only root is zero, and the formula based on \\(\\log r\\) is unavailable. The explicit root theorem does not need the fundamental theorem of algebra, which will later cover arbitrary polynomials.

## Trigonometric functions on the whole plane

Define
\\[
 \\cos z=\\frac{e^{iz}+e^{-iz}}2,\\qquad
 \\sin z=\\frac{e^{iz}-e^{-iz}}{2i}.
\\]
These are entire by the derivative rules. Direct differentiation gives \\(\\sin'=\\cos\\), \\(\\cos'=-\\sin\\). Substitution of the two expressions and cancellation gives \\(\\sin^2z+\\cos^2z=1\\). The exponential addition law similarly yields the usual addition formulas; these are algebraic identities valid for every complex input.

They are not bounded functions on the plane. For real \\(y\\),
\\[
 \\sin(iy)=i\\sinh y,\\qquad \\cos(iy)=\\cosh y.
\\]
Their growth in imaginary directions is exponential. An entire function can be bounded on the real axis and unbounded elsewhere, a point that will matter in Liouville's theorem.

The sine zeros are precisely \\(k\\pi\\), since \\(\\sin z=0\\) means \\(e^{2iz}=1\\). The cosine zeros are \\(\\pi/2+k\\pi\\), obtained from \\(e^{2iz}=-1\\). The tangent quotient is holomorphic where cosine is nonzero; naming it does not remove those denominator zeros.

## Worked example 4.1: logarithms and a square-root branch

For \\(z=1+i\\), the modulus is \\(\\sqrt2\\) and the principal argument is \\(\\pi/4\\). The principal logarithm is \\(\\frac12\\log2+i\\pi/4\\); all logarithmic values are obtained by adding \\(2\\pi ik\\).

The principal square root is \\(2^{1/4}e^{i\\pi/8}\\). Its square is \\(1+i\\), by the exponential addition law and polar representation. The other square root is its negative. The principal choice is a holomorphic function on the slit domain, while the set of two values at one point is not itself a single-valued function.

The derivative of the selected square-root branch is \\(z^{1/2}/(2z)\\), or \\(1/(2z^{1/2})\\) after using its square identity. Both expressions have the same branch and are defined away from the excluded zero and cut.

## Worked example 4.2: three roots without a global logarithm

To solve \\(z^3=-8\\), use modulus eight and an argument \\(\\pi\\). The roots are
\\[
 2e^{i\\pi/3}=1+i\\sqrt3,\\qquad
 2e^{i\\pi}=-2,\\qquad
 2e^{5\\pi i/3}=1-i\\sqrt3.
\\]
Each cube is \\(-8\\), and the root theorem proves there are no others.

The principal slit logarithm is not defined at \\(-8\\), but the polar root calculation remains valid. This is why an explicit pointwise root set should not be confused with evaluation of one particular logarithm branch. A different cut could include a neighborhood of \\(-8\\) and select a local root there.

## Worked example 4.3: the values of \\(i^i\\)

All logarithms of \\(i\\) are \\(i(\\pi/2+2\\pi k)\\). Multiplying by \\(i\\) and exponentiating gives
\\[
 \\exp\\!\\bigl(i\\,i(\\pi/2+2\\pi k)\\bigr)
 =e^{-\\pi/2-2\\pi k},\\qquad k\\in\\mathbb Z.
\\]
Thus every such power value is a positive real number, but there are infinitely many distinct values. The principal branch gives \\(e^{-\\pi/2}\\).

This calculation does not mean a single-valued branch has infinitely many values at one input. Once a branch is fixed it gives one of them. The collection arises from allowing every logarithm choice, and the infinite family reflects the noninteger exponent.

## Worked example 4.4: complex trigonometry and growth

At \\(z=iy\\), the exponential definitions give \\(\\cos(iy)=(e^{-y}+e^y)/2=\\cosh y\\) and \\(\\sin(iy)=(e^{-y}-e^y)/(2i)=i\\sinh y\\). Then \\(\\cos^2(iy)+\\sin^2(iy)=\\cosh^2y-\\sinh^2y=1\\), in agreement with the general identity.

The minus sign comes from \\(i^2=-1\\). Replacing the imaginary sine by the real number \\(\\sinh y\\) would give the wrong identity and growth interpretation. The example checks both algebra and the distinction between modulus bounds on a line and bounds on the full plane.

## Exercises

### Exercise 4.1 {#exponential-logarithm-powers-ex-exponential-kernel}

Solve exp(z)=2 using all possible values.

<details><summary>Hint 1</summary>

Use the modulus to determine the real part.

</details>
<details><summary>Hint 2</summary>

The imaginary part must give cosine one and sine zero.

</details>
<details><summary>Solution</summary>

Every solution is log2+2πik, k∈Z. The modulus equation forces the real part to be log2, and the remaining unit factor must be one. The principal real solution is only one member of this infinite set.

</details>

### Exercise 4.2 {#exponential-logarithm-powers-ex-exponential-periodicity}

Show that exp(z+w)=exp(z)exp(w) does not imply exp is injective.

<details><summary>Hint 1</summary>

Find a nonzero period.

</details>
<details><summary>Hint 2</summary>

Compare inputs zero and 2πi.

</details>
<details><summary>Solution</summary>

Both inputs have exponential one. The addition law is a homomorphism property and permits a nontrivial kernel. The kernel is exactly 2πiZ, so distinct inputs differing by such a period have the same value.

</details>

### Exercise 4.3 {#exponential-logarithm-powers-ex-principal-log-value}

Find the principal logarithm of 1-i.

<details><summary>Hint 1</summary>

Find its modulus and slit-domain argument.

</details>
<details><summary>Hint 2</summary>

The argument is -π/4.

</details>
<details><summary>Solution</summary>

The modulus is sqrt2, so Log(1-i)=(log2)/2-iπ/4. The number lies outside the removed ray, so the principal branch is defined. Other logarithms differ from this value by 2πik.

</details>

### Exercise 4.4 {#exponential-logarithm-powers-ex-principal-log-domain}

Is Log(-1) defined under the chapter's principal holomorphic branch convention?

<details><summary>Hint 1</summary>

Recall the removed ray.

</details>
<details><summary>Hint 2</summary>

Distinguish a pointwise argument value from a branch domain.

</details>
<details><summary>Solution</summary>

No. The principal holomorphic logarithm has domain C excluding the nonpositive real axis. One can list pointwise logarithms of -1 as i(π+2πk), or choose another local branch domain containing -1, but that does not put -1 into this principal branch's domain.

</details>

### Exercise 4.5 {#exponential-logarithm-powers-ex-branch-difference}

Prove two logarithm branches on a connected common domain differ by 2πik for one fixed integer.

<details><summary>Hint 1</summary>

Exponentiate their difference.

</details>
<details><summary>Hint 2</summary>

Use continuity into a discrete set.

</details>
<details><summary>Solution</summary>

Their exponentials agree, so their difference belongs to the exponential kernel 2πiZ at every point. That difference is continuous. A continuous map from a connected set to a discrete set is constant, giving one integer throughout the domain. Different components could have different integers.

</details>

### Exercise 4.6 {#exponential-logarithm-powers-ex-power-derivative}

Differentiate exp(a Log z) on the slit plane for fixed complex a.

<details><summary>Hint 1</summary>

Use the chain rule.

</details>
<details><summary>Hint 2</summary>

Log has derivative 1/z on its domain.

</details>
<details><summary>Solution</summary>

The derivative is (a/z)exp(a Log z). It can be written az^(a-1) if both powers use the same logarithm. The domain excludes zero and the cut; the formula is not a branch-independent definition for arbitrary noninteger a.

</details>

### Exercise 4.7 {#exponential-logarithm-powers-ex-fourth-roots}

List all fourth roots of 16.

<details><summary>Hint 1</summary>

The root modulus is two.

</details>
<details><summary>Hint 2</summary>

Use angles 2πk/4 for k=0,1,2,3.

</details>
<details><summary>Solution</summary>

The roots are 2,2i,-2,-2i. They are distinct and their fourth powers are 16. The polar root theorem proves completeness. A principal fourth-root branch would select one local value, rather than the entire list.

</details>

### Exercise 4.8 {#exponential-logarithm-powers-ex-log-product-failure}

Give a case where Log z+Log w differs from Log(zw), with all three expressions defined.

<details><summary>Hint 1</summary>

Use z=w=exp(3πi/4).

</details>
<details><summary>Hint 2</summary>

The product has principal argument -π/2.

</details>
<details><summary>Solution</summary>

The two separate logarithms sum to 3πi/2, while zw=-i has principal logarithm -πi/2. Their difference is 2πi. Thus the unrestricted product rule fails despite every expression lying in the slit-domain convention.

</details>

### Exercise 4.9 {#exponential-logarithm-powers-ex-sine-zeros}

Prove the zeros of complex sine are exactly kπ.

<details><summary>Hint 1</summary>

Use its exponential definition.

</details>
<details><summary>Hint 2</summary>

exp(2iz)=1 has a known complete solution set.

</details>
<details><summary>Solution</summary>

A zero satisfies exp(iz)=exp(-iz), equivalently exp(2iz)=1 because the exponential is nonzero. The kernel theorem gives 2iz=2πik, hence z=kπ. Conversely those values clearly make sine zero.

</details>

### Exercise 4.10 {#exponential-logarithm-powers-ex-imaginary-cosine}

Compute cos(2i) and explain why cosine is not bounded on C.

<details><summary>Hint 1</summary>

Use the exponential definition.

</details>
<details><summary>Hint 2</summary>

Let the imaginary input grow.

</details>
<details><summary>Solution</summary>

The value is (e^2+e^-2)/2=cosh2. More generally cos(iy)=cosh y, which tends to infinity as y→∞. Boundedness of cosine on the real axis therefore does not extend to a bound on the whole complex plane.

</details>

### Exercise 4.11 {#exponential-logarithm-powers-ex-series-log-identification}

On |z|<1, identify the logarithmic series L from Chapter3 with Log(1+z).

<details><summary>Hint 1</summary>

Their derivatives are the same.

</details>
<details><summary>Hint 2</summary>

Compare the value at zero on a connected disk.

</details>
<details><summary>Solution</summary>

Both are holomorphic on the unit disk: 1+z has positive real part there. Both derivatives are 1/(1+z), and both values at zero are zero. Their difference has identically zero derivative on the connected disk, so it is constant zero. Hence the series equals that branch.

</details>

### Exercise 4.12 {#exponential-logarithm-powers-ex-integer-power-independence}

For which exponents a is exp(aL(z)) unchanged by every logarithm choice?

<details><summary>Hint 1</summary>

Changing a branch by 2πi changes the power by exp(2πia).

</details>
<details><summary>Hint 2</summary>

Use the exponential kernel theorem for a complex a.

</details>
<details><summary>Solution</summary>

Independence under every integer branch shift requires exp(2πia)=1, equivalent to 2πia=2πik for some integer k. Hence a must be an integer. Conversely an integer exponent makes every branch multiplier one, so the usual integer power is independent of the branch.

</details>

## Worked example: a branch cut and its two boundary values

Take the principal argument in \\((-\\pi,\\pi)\\) on \\(U=\\mathbb C\\setminus(-\\infty,0]\\), and write \\(L(z)=\\log|z|+i\\operatorname{Arg}(z)\\). Fix \\(r>0\\). As points \\(z=r e^{i\\theta}\\) approach \\(-r\\) from above, \\(\\theta\\uparrow\\pi\\), so \\(L(z)\\to\\log r+i\\pi\\). Approaching from below, \\(\\theta\\downarrow-\\pi\\), so \\(L(z)\\to\\log r-i\\pi\\). The two limits differ by \\(2\\pi i\\). Neither is a contradiction to continuity of \\(L\\) on \\(U\\), because \\(-r\\) is excluded from its domain. The jump records the obstruction to extending this particular branch across the whole negative ray while keeping the same single-valued argument.

For the principal square root \\(S(z)=\\exp(L(z)/2)\\), those two limits are \\(i\\sqrt r\\) and \\(-i\\sqrt r\\). They have equal squares but cannot be pasted into one continuous value at \\(-r\\). A different cut can move the discontinuity; it cannot remove the global obstruction around zero. On a small disk avoiding zero, however, a local branch always exists, because the disk can be kept inside an angular interval of length less than \\(2\\pi\\). Thus the failure is global rather than a failure of local differentiability.

## Following a logarithm around a loop

Let \\(\\gamma(t)=r e^{2\\pi i t}\\) for \\(0\\le t\\le1\\). Along short subarcs one can choose a continuous logarithm. Starting with \\(\\log r\\) at \\(t=0\\), continuation gives \\(\\log r+2\\pi i t\\), which ends at \\(\\log r+2\\pi i\\) even though \\(\\gamma(1)=\\gamma(0)\\). A single-valued logarithm on all of \\(\\mathbb C\\setminus\\{0\\}\\) would have to return to its initial value, so this computation detects the obstruction. It is not relying on the later formal theory of analytic continuation: it is an explicit continuous lift of one circle.

The same walk changes a locally defined complex power \\(z^a=\\exp(aL(z))\\) by the multiplier \\(e^{2\\pi i a}\\). If \\(a\\) is an integer, the multiplier is one and the power is the familiar single-valued Laurent monomial. If \\(a=1/2\\), it is \\(-1\\); two circuits are needed to restore the initial square-root value. If \\(a=i\\), the multiplier is \\(e^{-2\\pi}\\), a positive real scaling rather than a rotation. This last example is a useful warning: branch changes of a complex power need not preserve its modulus.

## Worked example: solving an exponential equation completely

Solve \\(e^z=-2\\). Write \\(z=x+iy\\). The modulus equation \\(|e^z|=e^x=2\\) forces \\(x=\\log2\\). The unit complex factor must be \\(-1\\), so \\(y=(2k+1)\\pi\\) for \\(k\\in\\mathbb Z\\). Every solution is therefore
\\[
 z=\\log2+(2k+1)\\pi i,\\qquad k\\in\\mathbb Z.
\\]
Substitution checks the entire list. The infinitely many answers arise from the exact kernel of the exponential, not from an ambiguity in the positive real logarithm \\(\\log2\\). If the target were zero, there would be no answer, since \\(e^z e^{-z}=1\\) for every complex \\(z\\).

Now solve \\(z^3=-8\\) directly without choosing a global logarithm. Write \\(-8=8e^{i(\\pi+2k\\pi)}\\). Its cube roots have modulus two and arguments \\((\\pi+2k\\pi)/3\\). Modulo \\(2\\pi\\), exactly three remain: \\(2e^{i\\pi/3}\\), \\(-2\\), and \\(2e^{5i\\pi/3}\\). Each cubes to \\(-8\\). The finite root list is independent of which argument representative was first chosen, because adding \\(2\\pi\\) simply cycles the three indices. A fractional power written with one chosen branch instead selects one of these roots and must state that choice.

## Growth and zeros of trigonometric functions

The definitions \\(\\sin z=(e^{iz}-e^{-iz})/(2i)\\) and \\(\\cos z=(e^{iz}+e^{-iz})/2\\) yield
\\[
 \\sin(x+iy)=\\sin x\\cosh y+i\\cos x\\sinh y.
\\]
Consequently \\(|\\sin(x+iy)|^2=\\sin^2x+\\sinh^2y\\). A zero requires \\(y=0\\) and \\(\\sin x=0\\), hence the complex zeros of sine are precisely the integer multiples of \\(\\pi\\). Moreover, as \\(|y|\\) grows, the \\(\\sinh^2y\\) term shows exponential growth even when the real part is fixed. The familiar real inequality \\(|\\sin x|\\le1\\) is therefore a statement about the real axis, not a bound on the entire function. This computation also gives a quick check on proposed trigonometric identities: algebraic identities extend, but real-valued order and boundedness properties generally do not.

## A logarithmic derivative checks a proposed branch

Suppose \\(L\\) is holomorphic on a connected domain \\(U\\) avoiding zero and satisfies \\(e^{L(z)}=z\\). Differentiating gives \\(e^{L(z)}L'(z)=1\\), hence \\(L'(z)=1/z\\). If \\(L_1,L_2\\) are two such branches on the same connected \\(U\\), their derivative difference is zero, so \\(L_1-L_2\\) is constant. Exponentiating that constant gives one; the exponential kernel therefore makes it \\(2\\pi i k\\) for one integer \\(k\\). Branches cannot differ by a different integer at different points of a connected domain. On a disconnected set, different components can use different integers.

The derivative condition alone needs a normalization: a primitive \\(P\\) of \\(1/z\\) satisfies \\(e^{P(z)}/z\\) constant, and subtracting one logarithm of that constant makes an actual logarithm branch. This is a useful construction once global primitives are available. It also explains the loop obstruction: a global primitive of \\(1/z\\) would make every closed period zero, but a loop around zero has period \\(2\\pi i\\). The branch formula, the integral criterion, and the explicit change after one circuit are three expressions of the same global fact.

## A branch choice changes a derivative formula's domain

On the slit plane, let \\(z^a=\\exp(aL(z))\\) for the principal logarithm \\(L\\). The chain rule yields \\((z^a)'=a z^{a-1}\\) throughout that domain, with both powers using the same branch. For \\(a=1/2\\), the function is a holomorphic square root there and the derivative is \\(1/(2\\sqrt z)\\). This formula does not extend through zero, where the denominator vanishes, nor does it define a single holomorphic square root on all nonzero complex numbers. On a different slit domain another branch produces a different square root, and on an overlap the two branches may agree or differ by a sign depending on their argument choices.

The usual integer-power rule is different: \\(z^n\\) is defined algebraically for integer \\(n\\), independently of a logarithm branch wherever the expression exists. For negative \\(n\\), zero is excluded because it is a pole; for nonnegative \\(n\\), the polynomial is entire. Separating these cases prevents a branch-dependent definition from obscuring a branch-independent algebraic one. The derivative formulas look identical, but the domains and justifications are not interchangeable.

## Sources

Original exposition and exercises. Primary references are Jiří Lebl's [Guide to Cultivating Complex Analysis](https://www.jirka.org/ca/) and Stein–Shakarchi's [Complex Analysis](https://press.princeton.edu/books/hardcover/9780691113852/complex-analysis). The older Atlas Complex Functions and Analytic Continuation seed chapters remain available with their original sources and identities.

## Summary

The exponential is an entire nonvanishing homomorphism with kernel 2πiZ. A logarithm is a continuous branch on a suitable domain, automatically holomorphic with derivative 1/z. Complex powers use that branch, so product and inverse identities require explicit domains. Entire sine and cosine retain their algebraic identities while growing in imaginary directions. Next we develop contour integrals to connect these local derivatives with global domain geometry.
`;export{e as default};