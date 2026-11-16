var e=`---
id: visual-lab-linear-information
title: "What Can the Measurements Determine?"
level: undergraduate
estimated_minutes: 90
license: CC BY-SA 4.0
---

# What can the measurements determine?

You observe two sums involving three unknown quantities. Recovering the entire input is impossible, but perhaps the quantity you actually need survives. This investigation turns that question into a test involving kernels, then explains why a recovery rule can be unique on attainable measurements while having many extensions elsewhere.

You need linear maps, kernels, spans, and substitution. [Units 1–3 of the linear algebra course](#/item/course-linear-algebra-standard) supply these prerequisites. Work over the real numbers unless another field is explicitly named. Spend about 20 minutes on predictions and the instrument, 25 on the proof, and 45 on the six tasks. Keep an initial prediction and a revised explanation; a changed answer without a reason leaves the important work unfinished.

## Guided investigation: two readings and one desired quantity

The measurement map and target are

$$
S:\\mathbb R^3\\to\\mathbb R^2,\\qquad S(x,y,z)=(x+y,y+z),
$$

$$
T_\\lambda:\\mathbb R^3\\to\\mathbb R,\\qquad T_\\lambda(x,y,z)=x+\\lambda y+z.
$$

Before computing, predict whether $T_\\lambda$ can be recovered from $S$ when $\\lambda=0,2,3$. “Recovered” means that the same rule must work for **every** input, using only the two observed readings. You may not quietly choose a convenient value for the unseen variable $y$.

Open [the live laboratory](#/labs?lab=visual-lab-linear-information). Its labeled native controls work with the keyboard, and text and tables carry the mathematical evidence. There is no animation to follow. The bounded integer controls select $\\lambda,\\mu\\in[-2,6]$, readings $u,v\\in[-4,4]$, a fiber parameter $t\\in[-3,3]$, and extension parameters $r,s\\in[-2,2]$. The proofs below allow all real values. Optional notes last for the current session; copy them if you want to keep them.

Fix observed readings $(u,v)$. Solving $S(x,y,z)=(u,v)$ gives

$$
(x,y,z)=(u-t,t,v-t),\\qquad t\\in\\mathbb R.
$$

Every member has the required readings, and every compatible input has this form by taking $t=y$. This entire line is one **fiber** of $S$. Along it,

$$
T_\\lambda(u-t,t,v-t)=u+v+(\\lambda-2)t.
$$

At $\\lambda=2$, the unseen parameter disappears: the decoder is $D(u,v)=u+v$. At every other $\\lambda$, changing $t$ changes the target without changing the readings. Checking only $t=0$ would suggest $u+v$ for every $\\lambda$; it would hide the failure completely. Compare at least two members, then use the formula to explain the whole fiber.

## A witness that no decoder can succeed

The vectors $0$ and $k=(1,-1,1)$ both have measurement $(0,0)$, but

$$T_\\lambda(0)=0,\\qquad T_\\lambda(k)=2-\\lambda.$$

If $\\lambda\\ne2$, a rule receiving $(0,0)$ cannot return both required values. This excludes every decoder using only these measurements, including a nonlinear one. A different algorithm cannot supply information absent from its input.

Solving $S(x,y,z)=0$ gives $\\ker S=\\operatorname{span}\\{k\\}$. The target is constant along every measurement fiber exactly when it vanishes on this invisible direction. Notice that $S$ has rank 2 and $T_\\lambda$ has rank 1 for **every** $\\lambda$: the coefficient of $x$ in the target is always 1. Those ranks are unchanged between successful and failed cases. The position of the kernels matters, not just their dimensions.

## The recovery criterion and its proof

Let $S:V\\to W$ and $T:V\\to Z$ be linear maps over the same field. There is a unique linear map

$$D:\\operatorname{im}S\\to Z\\quad\\text{such that}\\quad T=D\\circ S$$

if and only if

$$\\ker S\\subseteq\\ker T.$$

Here the composite uses $S$ with its output regarded as belonging to its image. No finite-dimensional hypothesis is needed for this statement.

**Necessity.** If $Sv=0$, a linear decoder gives $Tv=D(Sv)=D(0)=0$. Thus every direction erased by the measurements must also be erased by the target.

**Construction.** Suppose the kernel containment holds. For an attainable reading $w=Sv$, propose $D(w)=Tv$. A reading may have several preimages, so first prove the proposal is well-defined. If $Sv=Sv'$, then $S(v-v')=0$. The containment implies $T(v-v')=0$, hence $Tv=Tv'$. The proposed output is independent of the chosen preimage.

**Linearity.** For readings $Sv_1,Sv_2$ and scalars $a,b$,

$$
D(aSv_1+bSv_2)
=D(S(av_1+bv_2))
=T(av_1+bv_2)
=aD(Sv_1)+bD(Sv_2).
$$

**Uniqueness.** Every reading in $\\operatorname{im}S$ has the form $Sv$. Any decoder satisfying the required identity must send it to $Tv$. There is therefore no freedom on that image. The rule is determined there even if a larger ambient space contains unattainable readings.

For the guided example, $S$ is onto: $(u,0,v)$ maps to $(u,v)$. Thus its decoder at $\\lambda=2$ is unique on all of $\\mathbb R^2$. If the measurement image were a proper subspace of its codomain, uniqueness on the image would not determine values outside it.

The quotient interpretation identifies inputs that differ by a kernel vector. A target descends through that identification precisely when it gives equal answers to those inputs. Continue to [quotients and their universal property](#/item/book-linear-algebra-structure-proofs?chapter=sums-direct-sums-quotients) for the formal construction, and the [linear-map chapter](#/item/book-linear-algebra-structure-proofs?chapter=linear-maps-isomorphism-rank-nullity) for its relationship with the image.

## Assign outputs without losing input relations

A different investigation begins with only this proposed table. The second column specifies vectors in $\\mathbb R^3$; the third proposes their images in $\\mathbb R^2$.

| Label | Input | Proposed output |
| --- | --- | --- |
| $v_1$ | $(1,0,1)$ | $(1,0)$ |
| $v_2$ | $(0,1,1)$ | $(0,1)$ |
| $v_3$ | $(1,1,2)$ | $(1,\\lambda)$ |
| $v_4$ | $(2,-1,1)$ | $(\\mu,-1)$ |

For which parameters can a linear map produce all four assignments? Before requesting a certificate, discover relations among the inputs. Every linear relation must also hold among their outputs. Testing one relation may reject a proposal, but approving one is not enough unless all relations are accounted for. Task 3 asks for the complete argument and separates the span of these inputs from the surrounding three-dimensional space.

## Six exercises

Try these on paper before reading the solutions. The tasks change the measurements, target, or ambient space; reuse the method rather than copying a displayed answer.

1. **Change the measurements.** Let $M(x,y,z)=(x-y,y-z)$ and $Q_a(x,y,z)=x+ay+z$. Determine every real $a$ for which recovery is possible. Give a decoder when it is, and two indistinguishable inputs proving failure otherwise. **Hint:** first find $\\ker M$.
2. **Measure polynomials.** For $p(x)=a+bx+cx^2$, observe only $p(0)$ and $p(1)$. Can you recover the coefficient $b$? Can you recover $a$? Give a proof for each answer, keeping formal polynomials distinct from their two measured values. **Hint:** compare zero with $x^2-x$.
3. **Audit the table.** Find all relations among $v_1,v_2,v_3,v_4$ above and every compatible pair $(\\lambda,\\mu)$. Identify their span $U$ and the unique linear map $U\\to\\mathbb R^2$ when compatible. Then find every linear extension $E:\\mathbb R^3\\to\\mathbb R^2$. **Hint:** express the last two inputs in terms of the first two; use $z-x-y$ to detect departure from their span.
4. **Add a redundant reading.** Let $S'(x,y)=(x,y,x+y)$ and target $T(x,y)=x-y$. Compare $D_0(u,v,w)=u-v$ with $D_1(u,v,w)=w-2v$. Do both decode correctly? Do their different values at $(0,0,1)$ contradict uniqueness? **Hint:** determine which triples can actually be readings.
5. **Add an informative reading.** Replace the guided measurement map by $\\widehat S(x,y,z)=(x+y,y+z,y)$. Recover $T_\\lambda$ for every real $\\lambda$, then recover the full input. Explain which previously invisible direction the extra reading detects. **Hint:** call the third reading $w$ and solve for $y$ first.
6. **Test the hypothesis.** Suppose instead that a nonlinear sensor gives $N(x,y)=x^2+y^2$, and the target is $L(x,y)=x$. Only zero has reading zero. Does that fact establish recoverability? Decide using two inputs, and identify the step in the kernel proof that no longer applies. **Hint:** compare opposite points on a circle.

## Solutions

### Task 1

The zero readings require $x=y=z$, so $\\ker M=\\operatorname{span}\\{(1,1,1)\\}$. Evaluating $Q_a$ on this generator gives $2+a$. Recovery is therefore possible exactly when $a=-2$. In that case $Q_{-2}=(x-y)-(y-z)$, so the decoder sends $(u,v)$ to $u-v$. Otherwise zero and $(1,1,1)$ give the same readings but targets 0 and $2+a\\ne0$.

### Task 2

The polynomials zero and $x^2-x$ both have readings $(0,0)$, while their coefficients of $x$ are 0 and $-1$. Thus $b$ cannot be recovered. In fact the measurement kernel consists of multiples of $x^2-x$: zero readings force $a=0$ and $b=-c$. The constant coefficient is recoverable because $a=p(0)$; select the first reading. One set of measurements can determine one target while failing to determine another.

### Task 3

The first two vectors are independent, and $v_3=v_1+v_2$, $v_4=2v_1-v_2$. More completely, every relation coefficient vector is

$$
(a,b,c,d)=c(-1,-1,1,0)+d(-2,1,0,1).
$$

Indeed, substituting the last two input expressions leaves $(a+c+2d)v_1+(b+c-d)v_2=0$. Independence forces both coefficients to vanish, giving exactly the displayed relations. Their proposed outputs combine to

$$\\bigl(d(\\mu-2),\\ c(\\lambda-1)\\bigr).$$

Both coordinates vanish for every $c,d$ exactly when $\\lambda=1$ and $\\mu=2$. A failed condition gives an explicit relation that the outputs violate. When both hold, every relation is preserved, so the table is consistent.

The span is $U=\\{(x,y,x+y):x,y\\in\\mathbb R\\}$, since $xv_1+yv_2=(x,y,x+y)$. Its uniquely prescribed map is $(x,y,x+y)\\mapsto(x,y)$. Every ambient extension is

$$
E_{rs}(x,y,z)=(x,y)+(z-x-y)(r,s),\\qquad r,s\\in\\mathbb R.
$$

These maps agree with the prescribed map on $U$. To prove that the list is complete, decompose any input as

$$
(x,y,z)=(x,y,x+y)+(z-x-y)(0,0,1).
$$

An extension's value on $(0,0,1)$ is some pair $(r,s)$; linearity then forces the formula. Taking different pairs changes this value while preserving every table assignment. The map is unique on the span, but its ambient extensions are not unique.

### Task 4

Actual readings satisfy $w=u+v$, so on the measurement image $D_1=u+v-2v=u-v=D_0$. Both decode the target. The triple $(0,0,1)$ is outside that image: no input $(x,y)$ gives it. The decoders return 0 and 1 there, but uniqueness concerns attainable readings. Their restrictions to the image are the same map, exactly as the theorem requires.

### Task 5

From readings $(u,v,w)$ obtain $y=w$, $x=u-w$, and $z=v-w$. Hence the target decoder is

$$\\widehat D_\\lambda(u,v,w)=u+v+(\\lambda-2)w.$$

The same equations recover the entire input, so $\\widehat S$ has zero kernel and is onto $\\mathbb R^3$. The old invisible vector $(1,-1,1)$ now produces readings $(0,0,-1)$, which differ from the zero input's readings. The additional measurement supplies exactly the missing distinction.

### Task 6

$N(1,0)=N(-1,0)=1$, but $L(1,0)=1$ and $L(-1,0)=-1$. No decoder exists. For linear measurements, equal readings imply their input difference has zero reading because $S(v-v')=Sv-Sv'$. That identity fails for $N$: the difference here is $(2,0)$ with reading 4. The set of inputs having zero reading is not an adequate replacement for all fibers of a nonlinear sensor.

## Scope and further reading

These are exact identifiability arguments. They establish what noiseless linear measurements determine, without promising stability under measurement error. For perturbations, numerical rank, and conditioning, continue to the [stable linear algebra workflow](#/item/recipe-stable-linear-algebra-workflow). Likewise, finite tables in the instrument illustrate the proof; checking their bounded parameter choices does not prove a statement over all real inputs.

For the guided recoverable case, a useful error bound follows directly: if the two readings have errors $e_1,e_2$ with $|e_1|,|e_2|\\le\\varepsilon$, the sum decoder's target error is $e_1+e_2$, whose magnitude is at most $2\\varepsilon$. This states its assumptions and bounds the requested quantity. For $\\lambda\\ne2$, even zero measurement error leaves distinct exact targets within one fiber. Record which question you have answered before reporting a computed value.

[Axler's *Linear Algebra Done Right*, fourth edition](https://linear.axler.net/LADR4e.pdf), Exercise 3B.25 on printed page 67, asks for a related factorization using maps with a common codomain and a finite-dimensional hypothesis. Result 3.107 on printed page 102 develops the induced map from a quotient by a kernel. The direct argument here distinguishes the measurement codomain from the target codomain and constructs the uniquely determined decoder on the measurement image.
`;export{e as default};