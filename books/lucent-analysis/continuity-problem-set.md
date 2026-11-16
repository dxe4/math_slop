# Problem set C. Continuity, compactness, and extension

**Role:** independent problem set after [function limits and inverses](limits-continuity.md), [uniform continuity](uniform-continuity.md), and [the continuity recitation](continuity-recitation.md). Suggested total: 52 points. Submit a first proof before opening any hint. For each claim, state its domain and the exact assumption used. The online rubric supports self-review; a written proof still needs a mathematical reader.

## 1. A global modulus without a compact domain (8 points)

Let \(f(x)=x/(1+x^2)\) on \(\mathbb R\). Prove directly that \(|f(x)-f(y)|\leq|x-y|\) for all \(x,y\in\mathbb R\). Do not appeal to a graph or a bounded derivative.

```exercise
{"id":"analysis-pset-c-modulus","type":"written","prompt":"Problem 1: Prove a global Lipschitz estimate for f(x)=x/(1+x²) by subtracting its values at x and y. Explain why your bound is valid even when x and y have opposite signs.","hints":["Put the two fractions over one denominator and factor x−y.","Use x²+y²≥2|xy| to control |1−xy|."],"rubric":["Correctly derives f(x)−f(y)=(x−y)(1−xy)/((1+x²)(1+y²))","Shows |1−xy|≤(1+x²)(1+y²) for all real x,y","Concludes a common modulus δ=ε","Checks the sign case through absolute values rather than assuming xy≥0"],"solution":"Subtracting gives f(x)−f(y)=(x−y)(1−xy)/((1+x²)(1+y²)). The denominator is at least 1+x²+y²≥1+2|xy|≥1+|xy|≥|1−xy|. Hence |f(x)−f(y)|≤|x−y| for every real x,y, whatever the sign of xy. Thus δ=ε proves uniform continuity."}
```

## 2. A continuous inverse on an unbounded interval (8 points)

Consider \(p(x)=x^3+x\) on \(\mathbb R\). Show that \(p\) has an inverse defined on all of \(\mathbb R\), and prove \(|p^{-1}(u)-p^{-1}(v)|\leq|u-v|\). The compact-interval inverse theorem alone does not supply a global modulus; find a direct estimate.

```exercise
{"id":"analysis-pset-c-inverse","type":"written","prompt":"Problem 2: Establish surjectivity, injectivity, and the inverse Lipschitz inequality for p(x)=x³+x on R. Separate those three claims.","hints":["For a target t, choose a sufficiently large R so p(−R)<t<p(R), then use IVT.","For b>a, factor p(b)−p(a) and bound the cubic factor below by zero."],"rubric":["Uses continuity and opposite bounds for each target to prove surjectivity","Proves strict increase because b³−a³=(b−a)(a²+ab+b²)≥0","Specifies the inverse as a function R→R","Derives |p(b)−p(a)|≥|b−a| and transfers it to the inverse"],"solution":"For any t, choose R>max(1,|t|). Then p(−R)=−R³−R<t<R³+R=p(R); continuity and IVT give an x with p(x)=t. If b>a, p(b)−p(a)=(b−a)(a²+ab+b²+1)>0, since a²+ab+b²=(a+b/2)²+3b²/4≥0. Thus p is injective and has an inverse R→R. Moreover |p(b)−p(a)|=|b−a|(a²+ab+b²+1)≥|b−a|. With a=p⁻¹(u), b=p⁻¹(v), this becomes |p⁻¹(u)−p⁻¹(v)|≤|u−v|."}
```

## 3. Repair an infinite-minimum proof (10 points)

A proposed proof of Heine–Cantor says: “At every \(a\in K\), continuity gives a radius \(r_a>0\). Take \(\delta=\min_{a\in K}r_a\).” The minimum of infinitely many chosen positive radii need not exist or be positive. Give a valid proof using a finite open subcover. Specify the cover, its selected finite members, and a working common \(\delta\). Give an example showing that an arbitrary family of valid pointwise radii can have infimum zero even for a uniformly continuous function.

```exercise
{"id":"analysis-pset-c-finite-cover","type":"written","prompt":"Problem 3: Repair the infinite-minimum argument for Heine–Cantor using a finite subcover. Also give a family of valid local radii with infimum zero for a uniformly continuous function.","hints":["For target ε, choose rₐ so that |f(x)−f(a)|<ε/2 whenever |x−a|<rₐ. Cover K by balls of radius rₐ/2.","After selecting finitely many centers aᵢ, take δ less than every rₐᵢ/2; two nearby points will be close to the same selected center."],"rubric":["Identifies why the infimum of arbitrary positive radii need not be positive","Builds the open cover B(a,rₐ/2) and invokes compactness for finitely many members","Chooses δ=minᵢ rₐᵢ/2 and checks both nearby points lie in the same B(aᵢ,rₐᵢ)","Uses two ε/2 bounds to finish","Gives a concrete valid-radius family with infimum zero"],"solution":"Fix ε>0. For each a∈K, continuity supplies rₐ>0 such that x∈K and |x−a|<rₐ imply |f(x)−f(a)|<ε/2. The balls B(a,rₐ/2) cover K; choose finitely many centers a₁,…,a_m by compactness and set δ=minᵢ rₐᵢ/2>0. If x,y∈K and |x−y|<δ, choose i with |x−aᵢ|<rₐᵢ/2. Then |y−aᵢ|≤|y−x|+|x−aᵢ|<rₐᵢ, and both outputs differ from f(aᵢ) by less than ε/2. Thus |f(x)−f(y)|<ε. For f(x)=0 on K=[0,1], every positive radius is valid; choose r_a=a for a>0 and r_0=1. All are positive yet inf_a r_a=0, so the proposed infinite minimum fails even for a constant function."}
```

## 4. Values known only on rational inputs (10 points)

Let \(D=\mathbb Q\cap[0,1]\) and \(g(q)=q(1-q)\). Prove that \(g\) has a unique continuous extension to \([0,1]\) and identify it. Then change the rule to \(h(q)=0\) when \(q<\sqrt{1/2}\) and \(h(q)=1\) when \(q>\sqrt{1/2}\). Does the new rule extend continuously? Justify your answer without treating finite samples as evidence.

```exercise
{"id":"analysis-pset-c-dense-set","type":"written","prompt":"Problem 4: Analyze the extensions of g(q)=q(1−q) and the step rule h across the irrational threshold sqrt(1/2), both defined on rational q in [0,1].","hints":["Factor g(p)−g(q) before estimating; note 0≤p,q≤1.","Use rational sequences from both sides of the irrational threshold."],"rubric":["Proves |g(p)−g(q)|≤|p−q| on D","Identifies the unique extension G(x)=x(1−x)","Constructs or invokes rational sequences tending to sqrt(1/2) from both sides","Shows the step outputs have incompatible limits and no continuous extension exists"],"solution":"For p,q∈D, g(p)−g(q)=(p−q)(1−p−q). Since p+q∈[0,2], |1−p−q|≤1. Thus g is 1-Lipschitz and has a unique continuous extension. The polynomial G(x)=x(1−x) agrees on D, so it is that extension. The threshold α=sqrt(1/2) is irrational and lies in (0,1). Density of Q provides rational sequences p_n<α and q_n>α both tending to α. Their h-values stay 0 and 1, so no continuous extension at α exists."}
```

## 5. A composition limit with a hidden exceptional value (8 points)

Let \(g(t)=0\) at \(t=0\) and \(g(t)=1\) otherwise. For \(x\ne0\), set \(h(x)=x\sin(1/x)\), and set \(h(0)=0\). Determine whether \(\lim_{x\to0}g(h(x))\) exists. State why the facts \(h(x)\to0\) and \(\lim_{t\to0}g(t)=1\) do not settle it.

```exercise
{"id":"analysis-pset-c-composition","type":"written","prompt":"Problem 5: Decide whether g(h(x)) has a limit at zero for h(x)=x sin(1/x), h(0)=0, g(0)=0, g(t)=1 otherwise. Produce two explicit punctured input sequences.","hints":["At xₙ=1/(nπ), sin(1/xₙ)=0.","At yₙ=1/(π/2+2πn), sin(1/yₙ)=1 and h(yₙ)≠0."],"rubric":["Shows h(x)→0 using |h(x)|≤|x|","Gives two legal sequences approaching zero","Computes composite outputs 0 and 1 on those sequences","Explains that h reaches the exceptional point infinitely often, so the punctured limit of g cannot be composed mechanically"],"solution":"The bound |h(x)|≤|x| gives h(x)→0. For n≥1, xₙ=1/(nπ) tends to zero and h(xₙ)=0, so g(h(xₙ))=0. Also yₙ=1/(π/2+2πn) tends to zero and h(yₙ)=yₙ≠0, so g(h(yₙ))=1. The two output subsequences have different limits. The punctured limit of g at zero says nothing about g(0), while h hits zero at punctured inputs arbitrarily near the origin."}
```

## 6. The same domain, two kinds of output (8 points)

Set \(D=\{1/n:n\in\mathbb N,\ n\geq1\}\). On \(D\), let \(u(1/n)=(-1)^n/n\) and \(v(1/n)=(-1)^n\). Decide which functions are uniformly continuous. You may use the extension theorem and Heine–Cantor, but identify the closure of \(D\) and check continuity at its added point.

```exercise
{"id":"analysis-pset-c-discrete-domain","type":"written","prompt":"Problem 6: Classify uniform continuity of u(1/n)=(-1)^n/n and v(1/n)=(-1)^n on D={1/n:n≥1}. Show each decisive sequence or extension step.","hints":["The closure adds only zero; each original domain point is isolated.","Compare neighboring even and odd terms as their input gap shrinks."],"rubric":["Identifies closure D∪{0} and compactness","Extends u by u(0)=0 and proves continuity at zero","Uses Heine–Cantor to conclude u uniformly continuous on D","Shows |1/(2n)−1/(2n+1)|→0 while v-output gap is 2, so v is not uniformly continuous"],"solution":"The closure K=D∪{0} is closed and bounded, hence compact. Define U(0)=0 and U(1/n)=(-1)^n/n. Each 1/n is isolated in K, and |U(1/n)|=1/n→0, so U is continuous at zero and therefore on K. Heine–Cantor makes U uniformly continuous; its restriction u is too. For v, take x_n=1/(2n) and y_n=1/(2n+1). Their distance tends to zero, but |v(x_n)−v(y_n)|=2 for all n. The paired-sequence criterion rules out uniform continuity, and no continuous value at zero can repair the oscillation."}
```

**Delayed check, 48 hours later.** Solve Problems 3 and 6 from the statement alone. For Problem 3, make a diagram of the half-radius cover and the two estimates to a common center. For Problem 6, describe the domain's accumulation structure before using a theorem.
