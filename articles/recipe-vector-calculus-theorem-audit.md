
# Choose and Verify a Vector Calculus Theorem

**Before reading.** Read [Functions, Domains, and Graphs](#/books/algebra-and-functions/functions-domain-graphs) and [Calculus](#/books/calculus).

Vector calculus offers four striking conversions: paths become endpoints, circulation becomes curl, flux becomes divergence, and a boundary integral becomes an interior integral. Most mistakes are not differentiation mistakes. They come from choosing the wrong quantity, losing orientation, crossing a singularity, or invoking a theorem on a domain that violates its hypotheses.

This recipe is a decision and verification workflow for line integrals, surface integrals, Green’s theorem, Stokes’ theorem, and the divergence theorem.

## Step 1 — Name the geometric object and measurement

Let a curve be parametrized by $r(t)$ for $a\le t\le b$.

- A scalar line integral is $\int_C f\,ds = \int_{a}^{b} f(r(t))\lVert r'(t)\rVert\,dt$. It measures weighted length and does not change when orientation reverses.
- A work or circulation integral is $\int _C F\cdot dr = \int_{a}^{b}F(r(t))\cdot r'(t)dt$. It measures the component of a vector field along motion and changes sign when orientation reverses.

For an oriented surface parametrized by $r(u,v)$, flux is

$\int \int _S F\cdot n dS = \int \int F(r(u,v))\cdot (r_u\times r_v) du dv$,

when the cross product points in the chosen orientation. Swapping $u$ and $v$ reverses the cross product and the flux.

Before calculating, write a sentence: “I am measuring work along an oriented curve,” or “I am measuring outward flux through a closed surface.” This prevents the common substitution of $ds$ for $dr$, or a scalar area integral for flux.

Units are another check. If $F$ is force and $dr$ is displacement, $F\cdot dr$ has energy units. If $F$ is velocity and $n dS$ is oriented area, flux has volume per time. Curl has “field per length” units and divergence has “outflow per volume” units.

## Step 2 — Match the boundary to its interior theorem

Use the smallest theorem that exactly matches the geometry.

### Fundamental theorem for line integrals

If $\varphi$ is continuously differentiable on an open set containing a piecewise smooth curve $C$ from $A$ to $B$, then

$\int _C \nabla \varphi \cdot dr = \varphi (B)-\varphi (A)$.

Such a field is **conservative**. The integral is independent of path, and every closed-loop integral is zero.

Conversely, on an open connected domain, path independence implies the field is a gradient. For a continuously differentiable vector field on a simply connected open domain, $\operatorname{curl} F=0$ is a sufficient condition for conservativeness. Without a domain condition, zero curl can miss circulation trapped around a hole.

### Green’s theorem in the plane

Let $D$ be a bounded planar region with positively oriented piecewise smooth boundary $C$, and let $P,Q$ have continuous first partial derivatives on an open set containing $D$ and its boundary. Then

$∮_C P dx+Q dy = ∬_D (\partial Q/\partial x-\partial P/\partial y)dA$.

Positive orientation means the region stays to the left while traversing each boundary component: the outer boundary is counterclockwise and boundaries of holes are clockwise.

The flux form is

$∮_C P dy-Q dx = ∬_D (\partial P/\partial x+\partial Q/\partial y)dA$.

### Stokes’ theorem

Let $S$ be an oriented piecewise smooth surface with compatible oriented boundary $\partial S$, and let $F$ be continuously differentiable on an open set containing $S$. Then

$∮_{\partial S} F\cdot dr = ∬_S (curl F)\cdot n dS$.

The right-hand rule connects the normal to boundary direction: with the thumb along the chosen normal, curled fingers give positive traversal.

### Divergence theorem

Let $V$ be a bounded solid with piecewise smooth closed boundary $\partial V$, oriented outward, and let $F$ be continuously differentiable on an open set containing $V$ and its boundary. Then

$∬_{\partial V}F\cdot n dS = ∭_V div F dV$.

The theorem applies to a closed surface. If a surface is open, include the missing caps and subtract their flux, or use a direct parametrization.

## Step 3 — Audit the domain before differentiating

Mark where the field is undefined. A singularity excluded from the curve but enclosed by it can invalidate an interior theorem because the field is not continuously differentiable throughout the required region.

**The hole counterexample.** On $R^{2}\setminus \{(0,0)\}$, define

$F(x,y)=(-y/(x^{2}+y^{2}), x/(x^{2}+y^{2}))$.

Its scalar curl $\partial Q/\partial x-\partial P/\partial y$ is zero wherever the field is defined. On the unit circle $r(t)=(\cos t,\sin t)$, however,

$F(r(t))=(-\sin t,\cos t)=r'(t)$,

so

$∮F\cdot dr=\int_{0}^{2\pi }1 dt=2\pi$.

There is no contradiction with Green’s theorem: the field is undefined at the origin inside the disk. Nor does zero curl imply a global potential on this punctured, non-simply-connected domain.

This example is the standard alarm. If a computation says “curl zero, therefore integral zero,” inspect the holes and singularities before accepting it.

## Step 4 — Set orientation explicitly

Write one of these before setting bounds:

- “counterclockwise as viewed from above”;
- “normal with positive $z$ component”;
- “outward from the solid”;
- “boundary orientation induced by the chosen normal.”

For a planar graph $z=g(x,y)$ with upward orientation, the vector area element is

$(-g_x,-g_y,1)dA$.

It is intentionally not normalized; its magnitude already contains the surface-area scaling. If the problem asks for a unit normal separately, normalize it, but do not then forget the factor $dS$.

For a closed surface split into pieces, check that every normal points outward. Shared internal faces cancel when adjacent regions are combined because their outward normals oppose.

## Step 5 — Choose the cheaper side and preserve hypotheses

The theorems give equality, not an obligation to use one side. Compare complexity:

- If endpoints and a potential are simple, use the line-integral theorem.
- If the planar boundary has several awkward segments but curl is constant, use Green.
- If many surfaces share a simple boundary, Stokes lets you choose the easiest spanning surface, provided the field is smooth on it.
- If a closed surface is complicated but divergence is simple, use the divergence theorem.

**Worked example (Circulation).** For $F=(-y,x)$ around the unit circle counterclockwise, the scalar curl is $1-(-1)=2$. Green’s theorem gives

$∮F\cdot dr=∬_{unit disk}2 dA=2\pi$.

Directly, $F(r(t))=r'(t)$ and the same value follows. Unlike the hole field, this polynomial field is smooth on the entire disk.

**Worked flux.** Let $F(x,y,z)=(x,y,z)$ and let $S$ be the unit sphere with outward normal. Since $div F=3$, the divergence theorem gives

$∬_S F\cdot n dS = ∭_{unit ball}3 dV = 3(4\pi /3)=4\pi$.

On the unit sphere, $n=(x,y,z)$ and $F\cdot n=1$, so direct integration also gives its area $4\pi$. The two views cross-check orientation and scale.

## Step 6 — Run consistency checks

After computing, test:

1. **Orientation:** reversing the path or normal should negate work, circulation, or flux.
2. **Units:** boundary and interior sides must share dimensions.
3. **Symmetry:** odd contributions over symmetric regions may cancel; outward radial fields should give plausible flux signs.
4. **Local meaning:** positive divergence predicts net outward flux from small volumes; curl aligned with a normal predicts positive circulation under its induced orientation.
5. **A simple special case:** constant fields have zero divergence and curl. Their flux through any closed surface is zero, although flux through one open face need not be.

Do not interpret $\operatorname{curl} F=0$ as “the field does not rotate” at a singular point where curl is undefined. Do not interpret $div F=0$ as “the field is zero”; incompressible flow can be fast and curved while having no local net expansion.

## Accessible visual and tactile model

Imagine a flexible soap film spanning a wire loop. Stokes’ theorem says circulation along the wire can be computed from curl passing through any smooth film spanning that same oriented loop, as long as no field singularity pierces the chosen film. Turning the film changes its local normals and areas, but not the total.

For a nonvisual or tactile version, trace an oriented loop with one finger while pointing a thumb as the chosen normal. Then use a table listing each boundary segment, its direction, induced normal convention, and contribution. For divergence, picture or feel a closed box: outward arrows through opposite faces cancel for a constant field, while a radial field has outward contributions on every face.

## Misconceptions and repairs

- **“Curl zero means conservative everywhere.”** Add simply connectedness or establish path independence directly.
- **“A singularity not on the curve is irrelevant.”** Interior theorems require smoothness throughout the spanned region.
- **“All line integrals ignore direction.”** Only scalar $ds$ integrals do; $F\cdot dr$ changes sign.
- **“Stokes requires the surface named in the problem.”** Any compatible spanning surface is allowed if hypotheses hold.
- **“The divergence theorem works on an open sheet.”** Close it and account for caps, or integrate directly.
- **“A unit normal is the same as vector area.”** Parametric cross products contain both direction and area scaling.
- **“Zero divergence means zero boundary flux through each piece.”** It guarantees zero total flux through a closed boundary.

## Exercises with hints and complete solutions

### Exercise 1: Potential or parametrization?
<a id="vector-calculus-theorem-audit-ex-1"></a>

Compute the work of $F=(2x,2y)$ along any smooth path from $(1,0)$ to $(2,3)$.

<details><summary>Hint 1</summary>

Recognize the gradient of a familiar scalar function.

</details>
<details><summary>Hint 2</summary>

Use its endpoint difference rather than an arbitrary path parametrization.

</details>
<details><summary>Solution</summary>

Since $F=\nabla \varphi$ for $\varphi =x^{2}+y^{2}$, the fundamental theorem gives $\varphi (2,3)-\varphi (1,0)=13-1=12$. Path details are irrelevant.

</details>

### Exercise 2: Orientation check
<a id="vector-calculus-theorem-audit-ex-2"></a>

If $∮_C P dx+Q dy=5$ for a counterclockwise curve, what is the integral around the same curve clockwise?

<details><summary>Hint 1</summary>

The vector line element changes sign when traversal reverses.

</details>
<details><summary>Hint 2</summary>

The geometric trace stays the same while orientation changes.

</details>
<details><summary>Solution</summary>

Reversing orientation negates $dr$, so the value is $-5$.

</details>

### Exercise 3: Use Green for area
<a id="vector-calculus-theorem-audit-ex-3"></a>

Show that the positively oriented boundary $C$ of a suitable planar region $D$ satisfies $area(D)=∮_C x dy$.

<details><summary>Hint 1</summary>

Choose a vector field whose planar scalar curl equals one.

</details>
<details><summary>Hint 2</summary>

Check the boundary orientation required by Green's theorem.

</details>
<details><summary>Solution</summary>

Choose $P=0$ and $Q=x$. Then $\partial Q/\partial x-\partial P/\partial y=1$, so Green’s theorem gives $∮x dy=∬_D1dA=area(D)$.

</details>

### Exercise 4: Close a surface
<a id="vector-calculus-theorem-audit-ex-4"></a>

Let $F=(0,0,z)$ and consider the side plus top of the unit cylinder $0\le z\le 2$, omitting the bottom. Find outward flux.

<details><summary>Hint 1</summary>

Temporarily close the missing bottom and use the divergence.

</details>
<details><summary>Hint 2</summary>

Compute the added bottom's contribution before subtracting it.

</details>
<details><summary>Solution</summary>

Close it with the bottom. Since $div F=1$, total closed flux is the cylinder volume $2\pi$. The bottom has outward normal $(0,0,-1)$ and $z=0$, so its flux is zero. Therefore the requested flux is $2\pi$. Directly, the side contributes zero and the top contributes $2$ times area $\pi$.

</details>

### Exercise 5: Stokes on an easier surface
<a id="vector-calculus-theorem-audit-ex-5"></a>

Suppose $C$ is the circle $x^{2}+y^{2}=1$ at $z=4$, counterclockwise viewed from above, and $F=(-y,x,z^{2})$. Find its circulation.

<details><summary>Hint 1</summary>

Use the horizontal disk and the upward normal.

</details>
<details><summary>Hint 2</summary>

The horizontal rotation gives a constant vertical curl.

</details>
<details><summary>Solution</summary>

Span $C$ with the horizontal disk and upward normal. $\operatorname{curl} F=(0,0,2)$, so Stokes gives $∬2dA=2\pi$. The $z^{2}$ component contributes nothing along the horizontal boundary.

</details>

### Exercise 6: Find the invalid hypothesis
<a id="vector-calculus-theorem-audit-ex-6"></a>

A student applies Green’s theorem to the hole field over the unit disk and concludes its unit-circle circulation is zero. State the exact failure.

<details><summary>Hint 1</summary>

Locate the hole field's singularity relative to the filled region.

</details>
<details><summary>Hint 2</summary>

The theorem requires regularity on the region, not just its boundary curve.

</details>
<details><summary>Solution</summary>

The components are not continuously differentiable on any open set containing the closed disk because the field is undefined at the origin. Green’s theorem therefore does not apply to that region.

</details>

## Connections and next steps

This recipe connects first vector calculus to differential geometry. In the language of differential forms, the fundamental theorem, Green, Stokes, and divergence theorem are instances of one generalized Stokes theorem: integration of a derivative over a region equals integration over its boundary.

For applications, continue to conservation laws in fluid mechanics and electromagnetism. For computation, pair each theorem with a mesh-based laboratory that compares boundary quadrature against interior divergence or curl, then studies how discretization error and singularities affect the equality.
