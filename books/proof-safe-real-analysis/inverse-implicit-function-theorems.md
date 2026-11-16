
# Inverse and Implicit Function Theorems

An invertible matrix solves a linear equation uniquely and controls how solution changes depend on data changes. For a nonlinear map, an invertible derivative suggests the same behavior close to one point. The inverse function theorem turns that suggestion into a theorem: sufficiently near the point, the nonlinear map has a continuously differentiable inverse. The implicit function theorem then solves a system of constraints for a chosen group of variables.

The required preparation is [Differentiation in Euclidean Space](differentiation-in-r-n.md), including operator norms, the chain rule and the mean-value inequality, and [Fixed Points and Complete Metric Spaces](fixed-points-and-complete-spaces.md), including the contraction theorem with invariance. Basic matrix inverses and block multiplication are also required. We prove the local theorems using those tools, retaining the neighbourhood, uniqueness and regularity conclusions separately.

All vector spaces in this chapter are finite-dimensional real Euclidean spaces of positive dimension, and all differentiability domains are open. A local inverse is not a global inverse. “Unique solution” always refers to the neighbourhood specified in the theorem, not every solution elsewhere in the domain.

## Stable invertibility of a linear map

**Lemma 21.1 (Neumann series).** If a square matrix $E$ has operator norm $\|E\|<1$, then $I-E$ is invertible and
$$(I-E)^{-1}=\sum_{j=0}^{\infty}E^j,\qquad \|(I-E)^{-1}\|\le\frac1{1-\|E\|}.$$

*Proof.* The norm of the $j$th term is at most $\|E\|^j$. The geometric tail bound makes the partial sums Cauchy in the finite-dimensional matrix space, which is complete entry by entry. Let their limit be $B$. The identity $(I-E)\sum_{j=0}^{N}E^j=I-E^{N+1}$ holds in either multiplication order. Passing to the limit gives $(I-E)B=B(I-E)=I$. The sum of the termwise norm bounds gives the stated estimate. ∎

**Corollary 21.2 (Invertibility is open).** If $A$ is invertible and $\|A^{-1}(B-A)\|<1$, then $B$ is invertible. Inversion is continuous on the invertible matrices.

*Proof.* Write $A^{-1}B=I+A^{-1}(B-A)$ and apply Lemma 21.1 with the negative of the perturbation. For continuity, when $B$ is close enough to $A$, this argument bounds $\|B^{-1}\|$, for example by $2\|A^{-1}\|$. Then
$$B^{-1}-A^{-1}=B^{-1}(A-B)A^{-1}$$
gives $\|B^{-1}-A^{-1}\|\le2\|A^{-1}\|^2\|A-B\|$, tending to zero. ∎

The order of the factors is part of the statement. General matrix products cannot be reordered. This perturbation result will keep derivatives invertible in a whole small neighbourhood, not merely at the base point where invertibility was first checked.

**Worked Example 21.3 (A certified perturbation radius).** Let $A=\operatorname{diag}(2,1/2)$, whose inverse has norm two. If $\|B-A\|\le1/8$, then $\|A^{-1}(B-A)\|\le1/4<1$, so $B$ is invertible and
$$\|B^{-1}\|\le\frac{\|A^{-1}\|}{1-1/4}=\frac83.$$
This is a sufficient neighbourhood, not a claim that every matrix outside it is singular. It supplies a quantitative guarantee robust to all perturbations within the stated norm bound.

## Construct the inverse by a contraction

**Theorem 21.4 (Inverse function theorem).** Let $F:U\subseteq\mathbb R^n\to\mathbb R^n$ be $C^1$, with $U$ open. If $a\in U$ and $DF(a)$ is invertible, there are open neighbourhoods $W$ of $a$ and $V$ of $F(a)$ such that $F:W\to V$ is bijective and its inverse $g:V\to W$ is $C^1$. At every $y\in V$,
$$Dg(y)=[DF(g(y))]^{-1}.$$

*Proof.* Put $A=[DF(a)]^{-1}$ and choose $0<q<1$, for example $q=1/2$. Continuity of $DF$ lets us choose $r>0$ with the closed Euclidean ball $K=\overline B(a,r)$ contained in $U$ and
$$\|I-A DF(x)\|\le q\qquad(x\in K).$$
The closed ball is complete and convex. For a prospective target $y$, define
$$T_y(x)=x+A(y-F(x)).$$
Its derivative in $x$ is $I-A DF(x)$. The mean-value inequality on segments in $K$ gives
$$\|T_y(x)-T_y(z)\|\le q\|x-z\|.$$
Set $\delta=(1-q)r/(2\|A\|)$ and $V=B(F(a),\delta)$. For $y\in V$ and $x\in K$,
$$\|T_y(x)-a\|\le\|T_y(x)-T_y(a)\|+\|A(y-F(a))\|< qr+(1-q)r/2<r.$$
Thus $T_y$ maps $K$ into itself and is a contraction there. Banach's theorem supplies a unique fixed point $g(y)\in K$. The fixed-point equation is $A(y-F(g(y)))=0$, equivalent to $F(g(y))=y$ because $A$ is invertible. Moreover
$$\|g(y)-a\|\le q\|g(y)-a\|+\|A(y-F(a))\|,$$
so $\|g(y)-a\|<r/2$.

For two targets, subtract their fixed-point equations and use contraction in the input:
$$\|g(y)-g(w)\|\le q\|g(y)-g(w)\|+\|A\|\|y-w\|.$$
Hence $g$ is Lipschitz, with constant $\|A\|/(1-q)$. Also $F$ is injective on $K$. Indeed, the derivative bound applied to $x\mapsto x-AF(x)$ gives
$$\|(x-z)-A(F(x)-F(z))\|\le q\|x-z\|.$$
If the outputs agree, $(1-q)\|x-z\|\le0$, forcing $x=z$.

Now define $W=F^{-1}(V)\cap B(a,r)$. This set is open, contains $a$, and every $y\in V$ has its preimage $g(y)\in B(a,r/2)\subset W$. Conversely, every point of $W$ maps into $V$. The injectivity already proved gives a bijection $F:W\to V$ with inverse $g$.

For every $x\in K$, the matrix $A DF(x)$ differs from $I$ in norm by at most $q<1$. Lemma 21.1 makes it invertible and therefore makes $DF(x)$ invertible. Fix $y\in V$, put $x=g(y)$, and let $k\to0$ with $y+k\in V$. Write $h=g(y+k)-g(y)$. The Lipschitz estimate gives $\|h\|=O(\|k\|)$ and hence $h\to0$. Differentiability of $F$ yields
$$k=F(x+h)-F(x)=DF(x)h+o(\|h\|).$$
Multiply by the fixed inverse $[DF(x)]^{-1}$. Since $\|h\|=O(\|k\|)$, the resulting remainder is $o(\|k\|)$, giving
$$h=[DF(x)]^{-1}k+o(\|k\|).$$
Thus $g$ is differentiable with the announced derivative. Finally $DF$ is continuous, $g$ is continuous, and inversion is continuous by Corollary 21.2, so $Dg$ is continuous. ∎

The proof separates the obligations often compressed into “solve by iteration”. A derivative bound establishes contraction, a target-radius estimate establishes invariance, completeness gives a fixed point, and injectivity supplies uniqueness in the declared source neighbourhood. The inverse derivative formula comes only after existence and continuity have been proved; formally differentiating a presumed inverse would not establish either of them.

The ball $V$ is an explicit target neighbourhood from the proof, but $W$ need not itself be a ball. It is a preimage intersection selected so that the restricted map is onto exactly $V$. This avoids the unsupported assertion that an arbitrary small source ball must map onto a ball.

**Worked Example 21.5 (A nonlinear map with a controlled inverse).** Let
$$F(x,y)=(x+x^3,y+2y^3).$$
At the origin its derivative is the identity. Everywhere its Jacobian is diagonal with entries $1+3x^2$ and $1+6y^2$, so it is invertible. The theorem gives a $C^1$ inverse near every point. At a point whose preimage is $(x,y)$, the derivative of that inverse is
$$\operatorname{diag}\left(\frac1{1+3x^2},\frac1{1+6y^2}\right).$$
For this particular map one can prove global bijectivity separately: each scalar component is strictly increasing by its positive derivative and has limits of opposite unbounded sign at the two ends. The intermediate value theorem gives surjectivity onto each real coordinate. The global conclusion uses that extra argument, rather than following from local invertibility alone.

**Worked Example 21.6 (Local inverses without a global inverse).** Define
$$F(x,y)=(e^x\cos y,e^x\sin y).$$
Its Jacobian determinant is $e^{2x}>0$, so the inverse theorem applies at every point. Nevertheless $F(x,y+2\pi)=F(x,y)$, so it is not globally injective. In a sufficiently short angular neighbourhood, an inverse has first coordinate $\log\sqrt{u^2+v^2}$ and a locally chosen continuous angle as second coordinate. The theorem guarantees that local choice; it does not create a single unrestricted angle branch around the punctured plane.

## Solve constraints for selected variables

**Theorem 21.7 (Implicit function theorem).** Let $H:U\subseteq\mathbb R^n\times\mathbb R^m\to\mathbb R^m$ be $C^1$ on an open set. Suppose $H(a,b)=0$ and the linear map $D_yH(a,b):\mathbb R^m\to\mathbb R^m$ is invertible. Then there are open neighbourhoods $X$ of $a$, $Y$ of $b$, and a $C^1$ function $\phi:X\to Y$ such that
$$H(x,y)=0\quad\Longleftrightarrow\quad y=\phi(x)\qquad((x,y)\in X\times Y).$$
Its derivative is
$$D\phi(x)=-[D_yH(x,\phi(x))]^{-1}D_xH(x,\phi(x)).$$

*Proof.* Define $\Phi(x,y)=(x,H(x,y))$. Its derivative at $(a,b)$ is the block matrix
$$D\Phi(a,b)=\begin{pmatrix}I&0\\D_xH(a,b)&D_yH(a,b)\end{pmatrix}.$$
Given an output $(u,v)$, the corresponding linear equation first gives the input's first component $u$, then solves $D_yH$ for the second. Thus this matrix is invertible. The inverse function theorem supplies a local $C^1$ inverse $\Psi$ on an open neighbourhood of $(a,0)$.

Because $\Phi$ preserves the first component, its inverse has the form $\Psi(x,z)=(x,\psi(x,z))$. Choose product neighbourhoods around the base points inside the source and target neighbourhoods of this inverse theorem. Shrink the $x$ neighbourhood if necessary so that $(x,0)$ stays in the target and $\psi(x,0)$ stays in the chosen $y$ neighbourhood; continuity and $\psi(a,0)=b$ permit this. Also choose $X\times Y$ inside the source neighbourhood where $\Phi$ is injective. Define $\phi(x)=\psi(x,0)$.

The inverse identity gives $H(x,\phi(x))=0$. Conversely, if $(x,y)\in X\times Y$ satisfies the equation, $\Phi(x,y)=(x,0)$, whose unique inverse in the source neighbourhood is $(x,\phi(x))$. Therefore $y=\phi(x)$. The map is $C^1$ as a restriction of $\psi$.

By continuity, shrink the product neighbourhoods so that $D_yH$ remains invertible there, using Corollary 21.2. Differentiate $H(x,\phi(x))=0$ with the chain rule:
$$D_xH(x,\phi(x))+D_yH(x,\phi(x))D\phi(x)=0.$$
Multiplication by the invertible $y$ derivative gives the formula. ∎

This theorem chooses which variables are solved for. The derivative block in those variables must be invertible. A failure of that block may mean that another coordinate choice works, or that the solution set folds or branches; it does not have one universal interpretation.

**Worked Example 21.8 (The graph direction can fail while the curve remains regular).** Let $H(x,y)=x^2+y^2-4$. At $(0,2)$, $H=0$ and $D_yH=4$, so near that point the circle is uniquely a graph $y=\phi(x)$ with
$$\phi'(x)=-x/\phi(x).$$
At $(2,0)$, the same $y$ block is zero, so that graph theorem does not apply. But $D_xH=4$, and solving for $x$ as a function of $y$ works. The circle itself has not become singular merely because one projection is a poor coordinate chart. In contrast, $H(x,y)=y^2-x$ at the origin has zero $y$ derivative and two nearby $y$ branches for positive $x$, illustrating an actual failure of single-valued solving in that direction.

## Sensitivity, limitations and links to systems

For a parameter-dependent constraint $H(p,y)=0$, the derivative formula separates the change in forcing from the inverse of the solver derivative. A large norm of $[D_yH]^{-1}$ amplifies a small forcing derivative. This is a local sensitivity estimate; an approximation by its linear term still needs a remainder bound before it becomes a finite error guarantee.

If $H(p,y)=y+y^3-p$, the derivative in $y$ is $1+3y^2\ge1$, and the implicit solution has $dy/dp=1/(1+3y^2)$. The slope is at most one in magnitude. Existence on all real parameters can be proved by scalar monotonicity and end behavior, while the implicit theorem proves the local $C^1$ structure wherever a solution is known. Again the local and global arguments complement one another.

The hypothesis of an invertible derivative is sufficient, not necessary for a continuous inverse. The map $x\mapsto x^3$ is globally bijective, but its inverse cube root is not differentiable at zero. The inverse theorem correctly makes no $C^1$ inverse claim there because the derivative is zero. Conversely, a nonsingular derivative everywhere does not guarantee global injectivity, as Example 21.6 shows.

The theorems also do not remove constraints' original domains. A logarithm appearing in $H$ still needs a positive argument throughout the chosen neighbourhood; a denominator must stay nonzero. Openness of the legal domain and continuity allow a sufficiently small neighbourhood when the base point is legal. Starting from an undefined formula is not repaired by a nonsingular-looking symbolic Jacobian.

## Tangent vectors to a regular constraint

The implicit graph also identifies exactly the tangent directions of its level set. In the theorem's coordinates, let the base point be \((a,b)\) and the local solution be \(y=\phi(x)\). Differentiating a differentiable curve on the level set gives \(DH(a,b)(v,w)=0\) for its velocity. Since the solved-variable block is invertible, this equation forces \(w=D\phi(a)v\). Conversely each such vector is realized by the curve \(t\mapsto(a+tv,\phi(a+tv))\) for sufficiently small \(t\). Thus the tangent vectors are exactly the kernel of the constraint derivative, rather than just a collection of plausible directions.

For the unit circle constraint at \((0,1)\), solving for the second coordinate gives a horizontal tangent. At \((1,0)\) that coordinate choice fails, but solving for the first coordinate gives a vertical tangent. The curve itself remains regular; the failing derivative block only says that one graph direction is unsuitable. In contrast the zero set of \(x^2+y^2\) is a singleton near the origin, where the gradient vanishes. Treating its derivative kernel, the whole plane, as a curve tangent would be unjustified. The regularity hypothesis is what connects the linear kernel to actual nearby solution curves.

## Exercises

### ANA-CH27-E001 — Exercise 1: geometric inverse
<a id="ANA-CH27-E001"></a>

For a square matrix $E$ with $\|E\|\le1/3$, bound the error after truncating $(I-E)^{-1}$ at $I+E+\cdots+E^N$.

<details>
<summary>Hint 1</summary>

The omitted terms begin at power $N+1$.

</details>
<details>
<summary>Hint 2</summary>

Sum the geometric norm bound for the tail.

</details>
<details>
<summary>Solution</summary>

The error norm is at most $\sum_{j=N+1}^\infty\|E\|^j\le(1/3)^{N+1}/(1-1/3)=\tfrac32\,3^{-(N+1)}$. The estimate is valid in operator norm and follows from convergence of the Neumann series, not from entrywise cancellation.

</details>

### ANA-CH27-E002 — Exercise 2: a perturbation guarantee
<a id="ANA-CH27-E002"></a>

Suppose $A$ is invertible with $\|A^{-1}\|\le5$ and $\|B-A\|\le1/20$. Prove $B$ is invertible and bound its inverse norm.

<details>
<summary>Hint 1</summary>

Estimate $\|A^{-1}(B-A)\|$ by the product of the two bounds.

</details>
<details>
<summary>Hint 2</summary>

Use the geometric inverse estimate with perturbation norm at most $1/4$.

</details>
<details>
<summary>Solution</summary>

The perturbation norm is at most $5/20=1/4$. Since $B=A[I+A^{-1}(B-A)]$, the bracket is invertible and $\|B^{-1}\|\le5/(1-1/4)=20/3$. The conclusion is guaranteed for every perturbation satisfying the specified bound.

</details>

### ANA-CH27-E003 — Exercise 3: invariance is a separate check
<a id="ANA-CH27-E003"></a>

For $T_y(x)=x+A(y-F(x))$, derive the ball-invariance estimate from the inverse-theorem proof. Explain why knowing contraction alone would not suffice.

<details>
<summary>Hint 1</summary>

Insert and subtract $T_y(a)$ when estimating distance from $a$.

</details>
<details>
<summary>Hint 2</summary>

The remaining center displacement is $A(y-F(a))$.

</details>
<details>
<summary>Solution</summary>

For $x\in\overline B(a,r)$, $\|T_y(x)-a\|\le q\|x-a\|+\|A\|\|y-F(a)\|$. Taking target distance below $(1-q)r/(2\|A\|)$ makes this less than $qr+(1-q)r/2<r$. Thus the map stays in the complete ball. A contraction estimate only compares outputs of two inputs; it does not prevent both outputs from lying outside the declared domain, so invariance is independently required.

</details>

### ANA-CH27-E004 — Exercise 4: inverse Lipschitz control
<a id="ANA-CH27-E004"></a>

If the inverse construction has $q=1/3$ and $\|A\|=2$, find a Lipschitz bound for $g$ and the source-error bound for a target perturbation of size at most $0.004$ within $V$.

<details>
<summary>Hint 1</summary>

Rearrange $(1-q)\|g(y)-g(w)\|\le\|A\|\|y-w\|$.

</details>
<details>
<summary>Hint 2</summary>

Both targets must stay in the theorem's target neighbourhood.

</details>
<details>
<summary>Solution</summary>

The bound is $2/(1-1/3)=3$. Thus permitted targets at distance at most $0.004$ have inverse images at distance at most $0.012$. This is a finite Lipschitz guarantee, distinct from a first-order approximation at one target point.

</details>

### ANA-CH27-E005 — Exercise 5: inverse derivative
<a id="ANA-CH27-E005"></a>

For $F(x,y)=(x+x^3,y+2y^3)$, find the inverse derivative at $F(1,1)$.

<details>
<summary>Hint 1</summary>

Evaluate the original Jacobian at the preimage $(1,1)$.

</details>
<details>
<summary>Hint 2</summary>

The matrix is diagonal, so invert its two nonzero entries.

</details>
<details>
<summary>Solution</summary>

At $(1,1)$ the Jacobian is $\operatorname{diag}(4,7)$ and the target point is $(2,3)$. Therefore the inverse derivative at $(2,3)$ is $\operatorname{diag}(1/4,1/7)$. The theorem evaluates $DF$ at the preimage of the target, not at the target coordinates themselves.

</details>

### ANA-CH27-E006 — Exercise 6: local and global
<a id="ANA-CH27-E006"></a>

For $F(x,y)=(e^x\cos y,e^x\sin y)$, calculate the determinant and give two different inputs with the same output. What exactly does the inverse theorem still guarantee?

<details>
<summary>Hint 1</summary>

The two Jacobian columns are $e^x(\cos y,\sin y)$ and $e^x(-\sin y,\cos y)$.

</details>
<details>
<summary>Hint 2</summary>

Shift the angle by one full turn.

</details>
<details>
<summary>Solution</summary>

The determinant is $e^{2x}(\cos^2y+\sin^2y)=e^{2x}>0$. The inputs $(0,0)$ and $(0,2\pi)$ both map to $(1,0)$. Thus no global inverse exists on all of $\mathbb R^2$, but each point has an open source neighbourhood on which the map is bijective onto an open target neighbourhood with $C^1$ inverse.

</details>

### ANA-CH27-E007 — Exercise 7: a singular derivative need not destroy bijectivity
<a id="ANA-CH27-E007"></a>

Show that $f(x)=x^3$ is bijective on $\mathbb R$ but its inverse is not differentiable at zero. Explain the scope of the inverse theorem.

<details>
<summary>Hint 1</summary>

Strict increase and unbounded end behavior give bijectivity.

</details>
<details>
<summary>Hint 2</summary>

The cube-root difference quotient at zero has magnitude $|h|^{-2/3}$.

</details>
<details>
<summary>Solution</summary>

The cubic is strictly increasing and takes every real value by continuity and its two unbounded ends, so its inverse is the real cube root. At zero the inverse quotient is $h^{1/3}/h=|h|^{-2/3}$ for nonzero real $h$, diverging as $h\to0$. Thus no finite derivative exists there. The theorem is a sufficient condition for a $C^1$ local inverse; failure of its invertible-derivative hypothesis is not a proof that no continuous inverse exists.

</details>

### ANA-CH27-E008 — Exercise 8: implicit slope
<a id="ANA-CH27-E008"></a>

Use the implicit theorem for $H(x,y)=x^2+y^2-4$ at $(0,2)$ and find the local slope there. Explain the alternative graph direction at $(2,0)$.

<details>
<summary>Hint 1</summary>

Check the derivative in the variable being solved for.

</details>
<details>
<summary>Hint 2</summary>

The derivative formula is $\phi'=-H_x/H_y$ wherever $H_y\ne0$.

</details>
<details>
<summary>Solution</summary>

At $(0,2)$, $H_y=4\ne0$, so there is a unique local $C^1$ graph $y=\phi(x)$ and $\phi'(0)=-0/4=0$. At $(2,0)$, $H_y=0$ but $H_x=4$, so the theorem instead solves $x$ as a function of $y$. The geometric equation remains regular; the viable choice of dependent variable changes.

</details>

### ANA-CH27-E009 — Exercise 9: a folded solution set
<a id="ANA-CH27-E009"></a>

For $H(x,y)=y^2-x$, show why no neighbourhood of the origin presents the entire zero set as one $C^1$ graph $y=\phi(x)$ over an open interval about zero.

<details>
<summary>Hint 1</summary>

Inspect both positive and negative small values of $x$.

</details>
<details>
<summary>Hint 2</summary>

For positive $x$ there are two nearby real roots, while for negative $x$ there are none.

</details>
<details>
<summary>Solution</summary>

Any open interval about zero includes negative $x$, where $y^2=x$ has no real solution, and positive $x$, where both $\sqrt x$ and $-\sqrt x$ are close to zero. Thus neither existence over the whole interval nor uniqueness of nearby $y$ holds. The $y$ derivative $2y$ vanishes at the origin, so the theorem makes no assertion in that graph direction. Solving instead for $x=y^2$ is perfectly valid.

</details>

### ANA-CH27-E010 — Exercise 10: parameter sensitivity
<a id="ANA-CH27-E010"></a>

For $y+y^3=p$, find $dy/dp$ at a solution and prove a global bound on that derivative along the solution branch.

<details>
<summary>Hint 1</summary>

Differentiate the constraint rather than solving the cubic explicitly.

</details>
<details>
<summary>Hint 2</summary>

The derivative in $y$ is at least one.

</details>
<details>
<summary>Solution</summary>

The implicit derivative is $dy/dp=1/(1+3y^2)$. It is positive and at most one for every real solution. The scalar function $y+y^3$ is strictly increasing and onto, so these local branches form one global solution function; its derivative bound then gives a global Lipschitz constant one by the mean value theorem. The global branch claim uses the separate monotonicity and range argument.

</details>

### ANA-CH27-E011 — Exercise 11: a two-constraint system
<a id="ANA-CH27-E011"></a>

Consider $H(p,u,v)=(u+v-p,u-v+u^2)$. At $(p,u,v)=(0,0,0)$, prove that $(u,v)$ can be solved locally as functions of $p$ and calculate their derivatives there.

<details>
<summary>Hint 1</summary>

The derivative block in $(u,v)$ is a two-by-two matrix.

</details>
<details>
<summary>Hint 2</summary>

Solve its linear system with right side $-D_pH=(1,0)^T$.

</details>
<details>
<summary>Solution</summary>

At the base point the block is $\begin{pmatrix}1&1\\1&-1\end{pmatrix}$ with determinant $-2$, hence invertible. The implicit theorem supplies unique local $C^1$ functions. Their derivative vector solves $u'+v'=1$ and $u'-v'=0$, so $u'(0)=v'(0)=1/2$. No explicit nonlinear solution formula is needed.

</details>

### ANA-CH27-E012 — Exercise 12: differentiating an identity is not an existence proof
<a id="ANA-CH27-E012"></a>

A proposed proof assumes $F(g(y))=y$ and derives $Dg=[DF(g)]^{-1}$, then declares that $g$ exists and is differentiable. Identify the circular step and state what the contraction proof establishes first.

<details>
<summary>Hint 1</summary>

The chain rule already assumes differentiability of the map being differentiated.

</details>
<details>
<summary>Hint 2</summary>

Separate a necessary formula for a presumed inverse from a construction of one.

</details>
<details>
<summary>Solution</summary>

The calculation presumes an inverse function and its differentiability in order to apply the chain rule, so it cannot prove either premise. The contraction argument first constructs a unique preimage for every target in an open neighbourhood and proves an inverse Lipschitz bound. It then uses the original function's remainder estimate to prove differentiability of that constructed inverse, after which the derivative formula is justified.

</details>

### ANA-CH27-E013 — Exercise 13: inverse linear algebra
<a id="ANA-CH27-E013"></a>

Show that the block map $(h,k)\mapsto(h,Bh+Ck)$ is invertible exactly when the square map $C$ is invertible, assuming $h\in\mathbb R^n$ and $k\in\mathbb R^m$.

<details>
<summary>Hint 1</summary>

Solve for $h$ before solving for $k$.

</details>
<details>
<summary>Hint 2</summary>

For the reverse direction, test vectors with first component zero to obtain injectivity of $C$.

</details>
<details>
<summary>Solution</summary>

If $C$ is invertible, the inverse sends $(u,v)$ to $(u,C^{-1}(v-Bu))$. Conversely, injectivity of the block map implies $Ck=0$ only for $k=0$, by testing $(0,k)$. A square finite-dimensional injective linear map is invertible. This is the linear algebra behind the implicit theorem's auxiliary map.

</details>

### ANA-CH27-E014 — Exercise 14: condition estimates
<a id="ANA-CH27-E014"></a>

Suppose an implicit solution satisfies $\|[D_yH]^{-1}\|\le8$ and $\|D_xH\|\le3$ throughout its graph. Bound its derivative. What additional domain information permits a pairwise Lipschitz conclusion?

<details>
<summary>Hint 1</summary>

Use submultiplicativity in the implicit derivative formula.

</details>
<details>
<summary>Hint 2</summary>

The mean-value inequality needs the whole segment between parameter inputs.

</details>
<details>
<summary>Solution</summary>

The derivative bound is $\|D\phi\|\le8\cdot3=24$. If the parameter domain is convex, or the particular segment remains inside a region where the graph and bound are valid, then $\|\phi(x)-\phi(w)\|\le24\|x-w\|$. Without control along that connecting segment, the local derivative estimate alone does not imply a global pairwise bound across separated regions.

</details>

### ANA-CH27-E015 — Exercise 15: a legal domain
<a id="ANA-CH27-E015"></a>

Let $H(p,y)=\log y+y-p$ on $\mathbb R\times(0,\infty)$. At a solution with $y=1$, find the parameter, prove local solvability for $y$, and calculate the derivative there. Explain why no neighbourhood crossing $y=0$ is part of this theorem.

<details>
<summary>Hint 1</summary>

Evaluate the equation at $y=1$ and compute $H_y$.

</details>
<details>
<summary>Hint 2</summary>

The implicit derivative uses $-H_p/H_y$, within the original open domain.

</details>
<details>
<summary>Solution</summary>

At $y=1$, the parameter is $p=1$. The derivative $H_y=1/y+1$ equals two there and $H_p=-1$, so the implicit theorem gives a unique local $C^1$ solution with derivative $1/2$. The original domain requires $y>0$; one chooses a small positive neighbourhood of one. Crossing zero would make the logarithm undefined and is outside the theorem's declared map, regardless of a formal symbolic manipulation.

</details>

## Sources and provenance

This is original exposition with original exercise development. The unchanged local seed is Quarto Real Analysis **Inverse and Implicit Function Theorems**. Primary author-text further reading is Jiří Lebl, [*Basic Analysis*, §8.5, Inverse and implicit function theorems](https://www.jirka.org/ra/html/sec_svinvfuncthm.html). The Neumann-series estimate, contraction construction, inverse regularity and implicit reduction are proved above. The Multivariable and Vector Calculus book may use these local theorems as stated results; their proof is supplied here.

For a computational companion with constrained systems and sensitivity examples, read [Multivariable and Vector Calculus, chapter 30](../../apps/calculus/index.html#chapter/30). That chapter states the local theorems; the contraction and derivative proofs are supplied here.

## Summary

A small operator-norm perturbation preserves matrix invertibility. Continuity of a nonsingular derivative therefore creates a neighbourhood where a normalized fixed-point map is a contraction. A separate invariance estimate gives preimages for a whole target ball, and the inverse's Lipschitz bound allows its derivative to be proved from the original remainder estimate. The implicit theorem applies the inverse result to a block map, solving only for variables whose derivative block is invertible. Local existence, neighbourhood uniqueness, differentiability and global behavior are distinct conclusions. The final [Counterexample Atlas and Synthesis Capstones](counterexample-atlas-and-capstones.md) collects these distinctions into hypothesis audits and proof-repair projects.
