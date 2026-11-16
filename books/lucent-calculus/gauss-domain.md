# Gauss's theorem: sources, sinks, and closed surfaces

Primary companion: [Multivariable and Vector Calculus](#/books/calculus-multivariable), Euler’s L2–L3 book. Keep its chapter sequence for the main reading route and use this lesson for the stated investigation or proof connection.

**Learning outcomes:** decide whether a surface is closed and outward oriented, compare direct flux with a divergence integral, and identify a singularity that prevents a tempting use of the theorem.

## Why an interior derivative controls boundary flow

For a bounded solid \(E\) with a piecewise smooth closed boundary \(\partial E\), oriented by the **outward** unit normal, and a field \(\mathbf F=(P,Q,R)\) with continuous first partial derivatives on an open neighborhood of the closed solid, the divergence theorem states

$$
\iint_{\partial E}\mathbf F\cdot\mathbf n\,dS
=\iiint_E\left(P_x+Q_y+R_z\right)dV.
$$

On a rectangular box \([a,b]\times[c,d]\times[e,f]\), the \(x=b\) face has normal \(+\mathbf i\), and the \(x=a\) face has normal \(-\mathbf i\). Together they contribute

$$
\int_c^d\int_e^f\bigl[P(b,y,z)-P(a,y,z)\bigr]\,dz\,dy
=\int_c^d\int_e^f\int_a^b P_x(x,y,z)\,dx\,dz\,dy.
$$

The equality is the one-variable FTC applied at each fixed \((y,z)\). The other two face pairs contribute the corresponding integrals of \(Q_y\) and \(R_z\). Adding these three *exact* identities proves the theorem for a box, including a field whose components vary over every face. It also explains why each derivative is paired with the two faces normal to its coordinate direction.

There is a curved version of the \(P_x\) calculation that shows what a graph normal contributes. Let
\(E=\{(x,y,z):(y,z)\in D,\ a(y,z)\le x\le b(y,z)\}\), with smooth \(a,b\) and a piecewise smooth \(D\). On the \(x=b\) graph, parameterize by \((y,z)\): its outward vector area is \((1,-b_y,-b_z)\,dy\,dz\). On \(x=a\), it is \((-1,a_y,a_z)\,dy\,dz\). The remaining side is swept along the \(x\)-direction, so its normal has zero \(x\)-component. The **\(P\mathbf i\) part alone** therefore contributes

$$
\iint_D\bigl[P(b(y,z),y,z)-P(a(y,z),y,z)\bigr]\,dy\,dz
=\iiint_E P_x\,dV.
$$

When a solid admits analogous descriptions in all three directions, the three component arguments prove Gauss there. For a general piecewise smooth solid, compatible finite subdivisions make internal face fluxes cancel. Justifying a limiting subdivision for every allowed boundary is a further geometric argument; the box and coordinate-simple proofs above establish their stated cases, while the full theorem is being used as a stated result for broader domains. This is the three-dimensional version of the planar flux form of Green's theorem.

**Hypothesis check before computation.** The surface must be the *entire* closed boundary, each component must have the outward normal of the solid, and the field must be \(C^1\) on an open set containing the **closed solid**, including any material between boundary components. A field smooth only on the boundary is not enough. A hole is part of the geometry; its wall has a normal pointing into the cavity.

### A sphere as a double check

For \(\mathbf F=(x,y,z)\), divergence is three. On a ball of radius \(R>0\), the theorem gives outward flux \(3(4\pi R^3/3)=4\pi R^3\). Directly on the sphere, \(\mathbf n=(x,y,z)/R\) and \(\mathbf F\cdot\mathbf n=R\). Sphere area is \(4\pi R^2\), again giving \(4\pi R^3\). The integrand's units make sense: a field with units of speed times surface area gives volume per time, while divergence has units of inverse time times volume.

For the capped cylinder in the preceding lesson, the side and top fluxes total \(3\pi a^2h\). That matches divergence three times its volume. If a student integrates only over the side and gets \(2\pi a^2h\), the theorem has not failed: the side is an **open** surface. Closing it adds the cap contributions with their outward normals.

### Trace an entire curved boundary before using Gauss

The solid in this investigation lies above \(z=cr^2\) and below \(z=H\). Before moving any control, name **both** boundary patches and predict their outward normals. Move the selected column from the center to the rim, then change the top height. The projected disk, radial section, and oblique solid all use the same Rust-calculated geometry.

```investigation
paraboloid-solid
```

For \(\mathbf F=(x,y,z)\), \(\nabla\cdot\mathbf F=3\). The exact volume from cylindrical integration is \(V=\pi H^2/(2c)\), so Gauss gives total outward flux \(3\pi H^2/(2c)\). Directly, the top disk at \(z=H\) contributes \(H\pi R^2=\pi H^2/c\); the lower bowl contributes \(c\int_Dr^2dA=\pi H^2/(2c)\). Their sum agrees. The lower outward vector area is \((2cx,2cy,-1)\,dA\), not the upward graph vector. A graph drawing that omits the top disk would calculate a different, open-surface quantity.

**Changed-field check.** Add a constant upward field \((0,0,k)\). Its divergence is zero. The top flux rises by \(k\pi R^2\), while the lower bowl flux falls by the same amount: integrate the vertical component of its outward vector area over the projection. Make this cancellation explicit before applying Gauss to an unseen field; the default readouts describe \(\mathbf F=(x,y,z)\) only.

### A variable field on a box, checked face by face

Let \(E=[0,1]^3\) and \(\mathbf G=(x^2,yz,z^2)\). Its divergence is \(2x+z+2z=2x+3z\), so the volume integral is \(1+3/2=5/2\). Direct calculation reaches the same answer for three different reasons. The \(x=1\) face contributes \(1\) while \(x=0\) contributes zero. The \(y=1\) face contributes \(\int_0^1\int_0^1 z\,dx\,dz=1/2\), and \(y=0\) contributes zero. The \(z=1\) face contributes \(1\), and \(z=0\) contributes zero. The sum is \(5/2\). No single face need have constant flux density; the FTC calculation organizes all six.

### A curved solid: decide whether to close it

Let \(E\) lie between \(z=0\) and \(z=1-x^2-y^2\) over the unit disk, and take \(\mathbf G=(x,y,z^2)\). The top is an upward, outward graph; its bottom disk has downward, outward normal. Here \(\nabla\cdot\mathbf G=2+2z\). Writing \(h=1-r^2\), integrate in \(z\) first:

$$
\iiint_E(2+2z)\,dV
=2\pi\int_0^1(2h+h^2)r\,dr
=\pi\int_0^1\bigl[2(1-u)+(1-u)^2\bigr]\,du
=\frac{4\pi}{3},\quad u=r^2.
$$

On the bottom, \(z=0\), so the \(z^2\) component and bottom flux vanish. Directly on the top, \(\mathbf G(x,y,h)\cdot(2x,2y,1)=2r^2+h^2=1+r^4\). Its integral is \(2\pi\int_0^1(1+r^4)r\,dr=4\pi/3\). The planar integrands \(2h+h^2\) and \(2r^2+h^2\) differ point by point; their *integrals* agree because the theorem relates the volume and the **closed** boundary, not because the integrands are interchangeable. If the bottom field had nonzero normal component, it would have to be subtracted to recover top flux.

```exercise
{"id":"calc3-gauss-method","type":"choice","prompt":"For the upper graph \\(z=1-x^2-y^2\\) with \\(\\mathbf G=(x,y,z^2)\\), which use of the divergence theorem gives its upward flux?","options":[{"label":"Apply the theorem directly to the open upper graph.","correct":false,"feedback":"The graph alone is not the complete boundary of a solid."},{"label":"Close the graph with its bottom disk, compute total outward flux, then remove the bottom flux.","correct":true,"feedback":"Yes. The theorem applies to the closed boundary. Here the bottom flux happens to be zero, but it must be checked."},{"label":"Integrate divergence over the projected disk.","correct":false,"feedback":"Divergence is a volume density. The projected disk lacks the height of the solid."}],"hints":["List every boundary patch of the solid before using a closed-surface theorem."]}
```

## Guided path: a hemisphere and a missing disk

Work through the next three saved steps in order. Let \(H\) be the **upper hemispherical surface** \(x^2+y^2+z^2=1,\ z\ge0\), oriented outward from the upper half-ball, and let \(\mathbf W=(x^2,y^2,z^2)\). Unlike the preceding paraboloid, this graph has a vertical tangent at its rim, so use the smooth sphere geometry or a suitable patch rather than pretending its graph derivative stays finite there.

**Step 1 — choose a legal region and orientation.** The field is polynomial and hence \(C^1\) on a neighborhood of the upper half-ball. Decide what must be added to \(H\) for a divergence calculation.

```exercise
{"id":"calc-r3-gauss-path-region","type":"choice","prompt":"To find outward flux through the upper hemisphere \\(H\\) for \\(\\mathbf W=(x^2,y^2,z^2)\\), which theorem setup is valid?","options":[{"label":"Use the whole unit ball but keep only its upper half in the final flux.","correct":false,"feedback":"Whole-ball flux does not by itself isolate the upper half. The lower hemisphere is another nontrivial boundary piece."},{"label":"Apply Gauss to H alone because the equatorial circle has zero area.","correct":false,"feedback":"The missing disk has positive area. A boundary circle of zero area does not make an open hemisphere a closed surface."},{"label":"Add the unit disk at z=0 with downward normal, apply Gauss to the upper half-ball, then account for disk flux.","correct":true,"feedback":"Correct. The disk closes the half-ball; its outward normal is −k and its W-flux is zero because z=0."}],"hints":["Draw the upper half-ball and list its two boundary surfaces."]}
```

**Step 2 — calculate the decisive quantity.** Symmetry removes two terms from the divergence integral. Record the coefficient \(c\) in \(\iint_H\mathbf W\cdot\mathbf n\,dS=c\pi\); this check evaluates the number, not a proof of your setup.

```exercise
{"id":"calc-r3-gauss-path-coefficient","type":"numeric","prompt":"For the upper hemisphere and \\(\\mathbf W=(x^2,y^2,z^2)\\), enter \\(c\\) when its outward flux is \\(c\\pi\\).","answer":0.5,"tolerance":0,"hints":["div W=2x+2y+2z. Which terms vanish by symmetry on the upper half-ball?","In cylindrical coordinates integrate 2z from z=0 to √(1−r²), then integrate over the unit disk."],"feedbackCorrect":"Yes. The disk flux is zero and \\(\\int_D(1-r^2)\\,dA=\\pi/2\\). Now justify the symmetry and orientation in writing.","feedbackIncorrect":"Check that 2x and 2y integrate to zero by symmetry, and that \\(\\int_0^{\\sqrt{1-r^2}}2z\\,dz=1-r^2\\). Divide the final flux by π."}
```

**Step 3 — assemble and independently check.** Write the argument before opening the model. A numerical pass in Step 2 cannot verify a theorem hypothesis or an orientation.

```exercise
{"id":"calc-r3-gauss-path-synthesis","type":"written","prompt":"For the upper hemisphere \\(H\\) and \\(\\mathbf W=(x^2,y^2,z^2)\\), justify outward flux using Gauss on the half-ball and check it directly on \\(H\\). Explain why Gauss cannot be applied to \\(H\\) alone.","hints":["On the unit sphere, the outward unit normal is (x,y,z), so W·n=x³+y³+z³.","For the direct check, symmetry removes the x³ and y³ terms; use spherical coordinates or project z³dS to the unit disk."],"rubric":["Identifies the closed half-ball boundary and downward disk normal","Checks polynomial-field smoothness and disk flux zero","Computes volume integral π/2 with symmetry and a correct Jacobian","Computes direct hemisphere flux π/2 with outward normal","Explains why the open hemisphere alone does not satisfy Gauss"],"solution":"The polynomial field is \\(C^1\\) near the closed upper half-ball \\(E\\). Its boundary is \\(H\\) plus the disk \\(D\\) at \\(z=0\\); on \\(D\\), \\(\\mathbf n=-\\mathbf k\\) and \\(\\mathbf W\\cdot\\mathbf n=-z^2=0\\). Since \\(\\nabla\\cdot\\mathbf W=2x+2y+2z\\), symmetry removes the \\(x,y\\) terms. Integrating \\(2z\\) from \\(0\\) to \\(\\sqrt{1-r^2}\\) leaves \\(1-r^2\\), so total outward flux is \\(2\\pi\\int_0^1(1-r^2)r\\,dr=\\pi/2\\). Thus \\(H\\) has flux \\(\\pi/2\\). Directly on the unit sphere, \\(\\mathbf n=(x,y,z)\\), so \\(\\mathbf W\\cdot\\mathbf n=x^3+y^3+z^3\\); symmetry removes the first two terms. Spherical coordinates give \\(\\int_0^{2\\pi}\\int_0^{\\pi/2}\\cos^3\\phi\\sin\\phi\\,d\\phi\\,d\\theta=\\pi/2\\). The open surface \\(H\\) alone is not a closed boundary.","transfer":"Changed case: replace W by (x²,y²,z²+1). Find the hemisphere and disk fluxes separately. Does the total flux change?","transferSolution":"The divergence is unchanged, so total outward flux is \\(\\pi/2\\). On \\(D\\), the normal is \\(-\\mathbf k\\), and the new vertical component is \\(1\\), giving disk flux \\(-\\pi\\). The constant vertical field adds \\(+\\pi\\) through \\(H\\), making hemisphere flux \\(3\\pi/2\\). These changes cancel in the closed-boundary total."}
```

```exercise
{"id":"calc3-gauss-cap","type":"choice","prompt":"For F=(x,y,z) on a radius-a, height-h cylinder, which direct pieces are needed to compare with divergence 3 times the volume?","options":[{"label":"The side and both disks, with outward normals on each.","correct":true,"feedback":"Correct. The closed boundary includes three patches; the bottom contribution happens to be zero for this field but still belongs to the surface."},{"label":"Only the side, because it has the nonzero radial field component.","correct":false,"feedback":"The top also contributes z=h. A closed-surface theorem cannot be applied to the side alone."},{"label":"Only the top and bottom, because their normals are constant.","correct":false,"feedback":"The side contributes radial flux, and omitting it changes the physical and mathematical quantity."}],"hints":["List every patch of the boundary before deciding which happens to have zero flux."]}
```

## A field can be smooth on a shell and singular inside its cavity

Take the inverse-square radial field

$$
\mathbf H(x,y,z)=\frac{(x,y,z)}{(x^2+y^2+z^2)^{3/2}},\qquad (x,y,z)\ne(0,0,0).
$$

Writing \(r=\sqrt{x^2+y^2+z^2}\), direct differentiation gives \(\nabla\cdot\mathbf H=3r^{-3}-3r^2r^{-5}=0\) for \(r>0\). On an outward radius-\(R\) sphere, \(\mathbf H\cdot\mathbf n=R^{-2}\), so flux is \(4\pi\), independent of \(R\). The sphere itself contains no singular point, but the **ball it encloses does**. Applying Gauss to that ball and declaring zero flux uses the theorem where its smoothness hypothesis fails.

For a spherical shell \(\varepsilon\leq r\leq R\), the theorem is valid. The outer sphere contributes \(4\pi\); the inner sphere's outward normal *for the shell* points toward the origin and contributes \(-4\pi\). Total flux is zero, agreeing with zero divergence throughout the shell. Sending \(\varepsilon\to0\) cannot discard the inner flux: the area shrinks as \(\varepsilon^2\) while field magnitude grows as \(\varepsilon^{-2}\). A limiting “point source” model needs additional theory; it is not a smooth-field counterexample to Gauss.

```exercise
{"id":"calc3-gauss-hole","type":"written","prompt":"For H=r_vec/r³ and the shell 1≤r≤2, calculate flux through each boundary component with the shell's outward orientation. Explain why divergence zero on the shell is consistent with both answers and why Gauss cannot be applied to the radius-two ball.","hints":["At radius r, H·radial_unit=1/r² and the area is 4πr².","Outward from the shell on its inner boundary means toward its missing center."],"rubric":["Computes outer flux 4π","Computes inner flux −4π using the correct orientation","Explains their cancellation with divergence zero on the shell","Identifies the field's failure at the origin within the ball","Does not claim that a small inner sphere contributes negligible flux"],"solution":"The outer radius-two sphere has H·n=1/4 and area 16π, giving 4π. On the radius-one inner sphere, the shell's outward normal is minus the radial unit vector, so its flux is −4π. Their sum is zero, matching the shell's divergence integral. The radius-two ball contains the origin, where H is undefined, so the C¹-neighborhood hypothesis fails and Gauss cannot be used on that ball."}
```

## Boundary and orientation first, calculation second

When a surface is supplied as a graph, inspect whether it is just a cap, the entire boundary, or one member of a patchwise closed surface. Every edge shared by two patches appears with opposing boundary orientations. When a region has a cavity, the cavity wall's outward normal points **into the hole**. A physically upward-looking normal is not automatically the outward normal of a closed solid: on a lower graph it may point into the solid.

**Transfer:** A tank is bounded above by \(z=2-x^2-y^2\), below by \(z=0\), where \(x^2+y^2\leq2\). In the field \(\mathbf F=(x,y,2z)\), find total outward flux using divergence, then compute the bottom flux directly. Infer the top flux and independently verify it from the upward graph formula. The disk radius is \(\sqrt2\), and the top graph meets the bottom along its rim; omitting either fact changes the answer.

<details><summary>Public model: closed-tank flux by divergence and direct integration</summary>

The solid is

$$
E=\{0\le r\le\sqrt2,\ 0\le\theta\le2\pi,\ 0\le z\le2-r^2\}.
$$

Its boundary consists of the top graph and bottom disk. They meet at \(r=\sqrt2,z=0\), so there is no vertical side of positive height. The top outward orientation is upward; the bottom outward normal is \(-\mathbf k\). Both pieces are needed for the closed boundary. The polynomial field is \(C^1\) on a neighborhood of the whole solid.

Here \(\nabla\cdot\mathbf F=1+1+2=4\), and

$$
V(E)=2\pi\int_0^{\sqrt2}(2-r^2)r\,dr
=2\pi\left[r^2-\frac{r^4}{4}\right]_0^{\sqrt2}
=2\pi.
$$

Gauss therefore gives total outward flux \(4V(E)=8\pi\). On the bottom \(z=0\),

$$
\mathbf F(x,y,0)\cdot(-\mathbf k)=(x,y,0)\cdot(0,0,-1)=0,
$$

so the bottom flux is zero and the top flux must be \(8\pi\).

For an independent top calculation, use \(f=2-x^2-y^2\) and the upward vector area \((2x,2y,1)\,dA\). On that graph,

$$
\mathbf F(x,y,f)\cdot(2x,2y,1)
=2x^2+2y^2+2(2-x^2-y^2)=4.
$$

The projected disk has area \(2\pi\), giving direct top flux \(4(2\pi)=8\pi\), as required. Applying Gauss to the top alone would omit the closed-boundary hypothesis, even though this particular bottom contribution happens to vanish.

</details>

```exercise
{"id":"calc3-gauss-independent","type":"written","prompt":"The solid \\(E\\) is \\(0\\le z\\le1-x^2-y^2\\) over the unit disk. For \\(\\mathbf V=(x^2,y^2,z)\\), find total outward flux by a volume integral, then top flux by computing the bottom contribution separately. Check the top by its graph area vector. Why is the top alone invalid for Gauss?","hints":["The divergence is 2x+2y+1; symmetry removes two volume terms.","At z=0, V has no vertical component. On the top, use (2x,2y,1)dA."],"rubric":["Checks C¹ regularity and closed outward boundary","Computes total outward flux as π/2","Finds bottom flux zero with downward normal","Checks top directly and uses symmetry for odd terms","States why the top graph alone is open"],"solution":"The polynomial field is \\(C^1\\) near \\(E\\), and the top plus bottom form a piecewise smooth closed outward boundary. Its divergence is \\(2x+2y+1\\). Odd \\(x,y\\) terms integrate to zero by symmetry; the volume is \\(2\\pi\\int_0^1(1-r^2)r\\,dr=\\pi/2\\). Total outward flux is therefore \\(\\pi/2\\). The bottom normal is \\(-\\mathbf k\\), and \\(\\mathbf V\\cdot(-\\mathbf k)=0\\) there, so top flux is \\(\\pi/2\\). Directly on the top, \\(\\mathbf V\\cdot(2x,2y,1)=2x^3+2y^3+(1-r^2)\\); odd terms vanish and \\(\\int_D(1-r^2)\\,dA=\\pi/2\\). The top alone is open and does not enclose \\(E\\).","transfer":"Changed case: replace V by (x²,y²,z+1) on the same E. Find top and bottom fluxes and total flux; explain why the volume integral is unchanged.","transferSolution":"The divergence stays \\(2x+2y+1\\), so total flux stays \\(\\pi/2\\). The new bottom downward flux is \\(-\\pi\\). The added constant vertical field crosses the upward top with flux \\(+\\pi\\), so top flux becomes \\(3\\pi/2\\). The two additions cancel in the closed-boundary total."}
```
