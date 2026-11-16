# Green's theorem: the boundary remembers the interior

Primary companion: [Multivariable and Vector Calculus](#/books/calculus-multivariable), Euler’s L2–L3 book. Keep its chapter sequence for the main reading route and use this lesson for the stated investigation or proof connection.

Work through the prediction and evidence before uncovering the argument. The field and region hypotheses matter as much as the final integral.

## A local rotation added over an entire region

For a positively oriented (counterclockwise) piecewise smooth simple boundary \(C=\partial D\), with \(P,Q\) continuously differentiable on an open neighborhood of the closed, bounded region \(D\), Green's circulation theorem says

$$
\oint_C P\,dx+Q\,dy
=\iint_D\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right)dA.
$$

The quantity inside is planar scalar curl. The theorem connects a total boundary motion with interior local rotation; it does not assert that the field moves **along** the boundary. On a rectangle \([a,b]\times[c,d]\), the horizontal boundary integrals combine into \(\int_a^b[P(x,c)-P(x,d)]dx=-\iint_D P_y\,dA\) by the FTC. The vertical sides similarly give \(\iint_DQ_x\,dA\). For a region assembled from small pieces, internal edge integrals cancel in opposite directions. A full proof for general piecewise smooth regions makes the limiting partition and boundary regularity precise; this calculation explains why the signs and orientation in the theorem are forced.

If \(D\) has a hole, its **positive boundary orientation** keeps the region on the left as you traverse it: outer boundary counterclockwise, each inner boundary clockwise. Green's theorem then sums integrals around *all* components. Applying the simply connected-looking formula only to the outer loop silently fills the hole with points that may not belong to the domain.

## Derive the two halves before combining them

For an \(x\)-simple region

\[
D=\{(x,y):a\le x\le b,\ g_1(x)\le y\le g_2(x)\},
\]

assume the boundary pieces are regular enough to integrate and \(P_y\) is continuous. The lower boundary is traversed from left to right; the upper boundary is traversed from right to left. Any vertical closing pieces contribute zero to \(\int P\,dx\). Therefore

\[
\oint_{\partial D}P\,dx
=\int_a^b P(x,g_1(x))\,dx-\int_a^bP(x,g_2(x))\,dx
=-\int_a^b\int_{g_1(x)}^{g_2(x)}P_y(x,y)\,dy\,dx.
\]

The last equality is the one-variable fundamental theorem of calculus applied on each vertical slice, followed by Fubini's theorem. Notice why the sign is negative: a positive \(P_y\) makes the value of \(P\) on the top edge larger, while that edge is traversed backward.

For a \(y\)-simple region, written \(D=\{(x,y):c\le y\le d,\ h_1(y)\le x\le h_2(y)\}\), the right boundary travels upward and the left boundary downward; any horizontal closing pieces have \(dy=0\). By the same argument,

\[
\oint_{\partial D}Q\,dy
=\int_c^d[Q(h_2(y),y)-Q(h_1(y),y)]\,dy
=\iint_D Q_x\,dA.
\]

If \(D\) admits both descriptions, adding the two identities proves Green's formula directly. For a region assembled from such pieces, each shared edge is traversed twice in opposite directions, so its two line integrals cancel. This is the geometric heart of the general theorem. Corners, multiple boundary components, and the limiting passage from a finite decomposition require the stated piecewise-smooth hypotheses; “many tiny rectangles cancel” alone is an intuition, not a complete proof for every region.

### A worked sign check on a rectangle

Take \(D=[0,2]\times[0,1]\) and \(P(x,y)=-y,\ Q(x,y)=x\). Then \(Q_x-P_y=1-(-1)=2\), so Green predicts \(2\cdot\operatorname{area}(D)=4\). Traversing counterclockwise, the bottom and left integrals vanish. On the right edge \(x=2\) and \(y\) rises from 0 to 1, so \(\int Q\,dy=2\). On the top edge \(y=1\) and \(x\) decreases from 2 to 0, so \(\int P\,dx=\int_2^0(-1)\,dx=2\). Their sum is 4. If the top edge were traversed left-to-right, its contribution would be \(-2\), revealing an orientation mistake before any theorem is applied.

## Predict before moving the loop

Compare \(\mathbf F=(-y/2,x/2)\) with \(\mathbf G=(-y/(x^2+y^2),x/(x^2+y^2))\). Choose a radius, predict how the counterclockwise circulation changes if the radius doubles, and record a reason. Then switch fields and reverse orientation. The readout shows the actual **parameterized integral**, while arrows are normalized for legibility and therefore do not encode vector magnitude. Do not infer speed or work from arrow length.

```investigation
circulation-hole
```

The first field has \(Q_x-P_y=1\) everywhere. On the circle \(\mathbf c(t)=(r\cos t,r\sin t)\), the dot product \(\mathbf F(\mathbf c)\cdot\mathbf c'=r^2/2\), hence circulation \(\pi r^2\). Green gives the same result from unit curl over a disk of area \(\pi r^2\). The second field has curl zero where it is defined, while \(\mathbf G(\mathbf c)\cdot\mathbf c'=1\), hence circulation \(2\pi\) for **every** positive radius. Doubling radius changes the first result by a factor of four and leaves the second unchanged. Reversing either path negates its signed result.

It would be wrong to apply Green to \(\mathbf G\) on the full disk: \(\mathbf G\) is undefined at the enclosed origin, so it has no continuously differentiable extension to an open neighborhood of that closed disk. That is the precise missing hypothesis. On an annulus \(\varepsilon\leq r\leq R\), the field is smooth and curl zero. Its outer integral is \(2\pi\), its **clockwise** inner integral is \(-2\pi\), and their sum is zero, as Green requires. The inner boundary does not become negligible as \(\varepsilon\to0\): its length tends to zero while the field's magnitude grows like \(1/\varepsilon\).

```exercise
{"id":"calc3-green-hole","type":"written","prompt":"For G on the annulus 1≤sqrt(x²+y²)≤3, write both boundary parametrizations with their induced orientations and compute each integral. Then identify the exact failed hypothesis if a classmate uses the outer circle alone and obtains zero.","hints":["The region must stay to your left; the inner boundary therefore travels clockwise.","For any counterclockwise radius-r circle, G(c)·c′=1 for 0≤t≤2π."],"rubric":["Gives outer c(t)=(3 cos t,3 sin t) with t increasing","Gives an inner clockwise parameterization such as (cos t,−sin t)","Computes outer 2π and inner −2π","States that G is undefined at the origin, which lies in the filled outer disk","Explains why Green on the annulus gives zero only after both components are included"],"solution":"Parametrize the outer boundary by (3 cos t,3 sin t), 0≤t≤2π; its integral is 2π. Parametrize the inner boundary by (cos t,−sin t), 0≤t≤2π; the reversed traversal makes its integral −2π. Green on the annulus gives 0, agreeing with curl G=0 there. Green on the radius-three disk cannot be used because G is undefined at the origin and lacks the required smoothness on a neighborhood of that disk."}
```

## A useful consequence: area from the boundary alone

Set \(P=-y/2\) and \(Q=x/2\). The curl is one, so Green's theorem gives the **signed area formula**

\[
\operatorname{area}(D)
=\frac12\oint_{\partial D}(x\,dy-y\,dx)
\]

when the boundary is positively oriented. The sign reverses when the same boundary is traversed clockwise. This is useful for a region whose boundary is easy to parametrize even when its interior is awkward to integrate directly.

For an ellipse \(x=a\cos t,\ y=b\sin t\), \(0\le t\le2\pi\), with \(a,b>0\), the integrand becomes \(x\,dy-y\,dx=ab(\cos^2t+\sin^2t)\,dt=ab\,dt\). Thus the enclosed area is \(\pi ab\). The orientation is counterclockwise because the path begins at \((a,0)\) and initially moves upward.

For a polygon with vertices \(p_i=(x_i,y_i)\) in traversal order and \(p_{m+1}=p_1\), parametrize each edge linearly. On edge \(i\), the integral of \(x\,dy-y\,dx\) is \(x_i y_{i+1}-y_i x_{i+1}\). Summing gives

\[
A_{\mathrm{signed}}=\frac12\sum_{i=1}^{m}
(x_i y_{i+1}-y_i x_{i+1}).
\]

The familiar shoelace formula is therefore a boundary-integral formula. Its absolute value is the geometric area for a simple polygon. For self-intersecting paths it computes an algebraic area with winding and cancellation, so taking an absolute value need not give the area of the entire drawn union.

### Visual laboratory: change a vertex and watch orientation

The arrows traverse the triangle \((0,0)\to(3,0)\to(u,h)\to(0,0)\). Before changing either control, predict the signed area. Then move \(u\) while holding \(h\) fixed: why does the area remain unchanged?

```mathviz
scene "A directed triangle and signed area";
domain -1 4;
range -3 4;
param u = 1 from -0.5 to 3.5;
param h = 2 from -2 to 3;
arrow base from (0,0) to (3,0) color blue;
arrow rising from (3,0) to (u,h) color amber;
arrow closing from (u,h) to (0,0) color teal;
point peak = (u,h) color rose;
```

**Explain.** The shoelace sum is \(3h\), so the signed area is \(3h/2\), independent of \(u\). A horizontal move of the peak changes the slant but not the base or signed height. When \(h<0\), the arrows traverse clockwise and the signed area is negative; the ordinary area is \(3|h|/2\). At \(h=0\) the triangle degenerates, so the simple-region hypothesis of Green's theorem no longer applies, even though the algebraic formula still evaluates to zero.

**Transfer.** Edit the base endpoint from \((3,0)\) to \((b,0)\) with a new positive parameter \(b\), then derive \(A_{\mathrm{signed}}=bh/2\) from the line integral. Explain why changing the peak's horizontal coordinate still has no effect.

## Flux is another orientation question

For \(\mathbf F=(P,Q)\) and a counterclockwise plane curve, its outward unit normal times \(ds\) is \((dy,-dx)\), so outward flux is \(\oint_C P\,dy-Q\,dx\). Applying the circulation form of Green to the rotated pair \((-Q,P)\) gives

$$
\oint_C\mathbf F\cdot\mathbf n\,ds
=\iint_D(P_x+Q_y)\,dA.
$$

This is the plane divergence theorem. It measures net outward passage, not tangential circulation. For \(\mathbf V=(x,y)\) on a radius-\(r\) disk, divergence is two, so flux is \(2\pi r^2\). Directly on the circle, \(\mathbf V\cdot\mathbf n=r\), and boundary length is \(2\pi r\). A picture of arrows pointing outward suggests the sign; the calculation establishes the value.

**Failure case:** On \(D=[0,1]^2\), \(P(x,y)=x\), \(Q(x,y)=y\), curl is zero but outward flux is two. Curl and divergence answer different questions. A field can have both, neither, or one of them; the shape of a few arrows is insufficient to determine an integral.

**Transfer without theorem name:** A sensor follows the boundary of a small disk centered at \((4,0)\) in the field \(\mathbf G\). Predict its reading before computing it. State one radius that makes the disk avoid the origin and use a valid theorem there. Then place the sensor on a loop enclosing the origin and explain why the same shortcut cannot be used. The loop's location, domain, and orientation now change the mathematical answer.

## Problems: choose the theorem and audit its assumptions

1. Directly integrate \(P\,dx+Q\,dy\) around the counterclockwise unit square for \(P=y,\ Q=2x\). Check the result against Green's theorem.
2. For \(\mathbf F=(-y/2,x/2)\), compute the circulation around the positively oriented annulus \(1\le x^2+y^2\le9\) in two ways: by curl over the region and by the two boundary circles separately.
3. Compute the outward flux of \(\mathbf V=(x^2,y^2)\) through the boundary of \([0,1]^2\), first by divergence and then by the four sides. Explain why the circulation calculation would answer a different question.
4. A smooth field has scalar curl zero on an open neighborhood of a disk \(D\). What does Green's theorem say about its circulation around \(\partial D\)? Explain why the statement cannot be applied verbatim to the singular field \(\mathbf G\) on a disk enclosing the origin.
5. Use the boundary-area formula to find the area of the triangle \((0,0),(4,0),(1,3)\). Reverse the traversal and state both the new signed area and the unchanged geometric area.
6. A student computes \(\oint_C P\,dx+Q\,dy=0\) because \(Q_x-P_y=0\) everywhere *on the curve* \(C\). Identify the missing information. Give one valid field-and-curve example for which the student's conclusion is false.

<details><summary>Hints for the problems</summary>

1. Bottom and left contribute zero; track the direction of the top edge.
2. The annulus has area \(8\pi\); the inner circle is clockwise.
3. Divergence is \(2x+2y\). The outward normal on the right side is \((1,0)\).
4. Check the domain of the derivatives on the entire filled disk, not merely its boundary.
5. The determinant of the two vectors from the origin is \(4\cdot3\).
6. Use the field \(\mathbf G\) and a circle around its missing origin.

</details>

<details><summary>Worked solutions to the problems</summary>

1. Along the bottom, \(y=0\) and \(dy=0\), giving zero. Along the right, \(x=1\) and \(y\) rises from 0 to 1, giving \(\int_0^1 2\,dy=2\). Along the top, \(y=1\) and \(x\) decreases from 1 to 0, giving \(\int_1^0 1\,dx=-1\). The left contributes zero. The circulation is 1. Since \(Q_x-P_y=2-1=1\) and the square has area 1, Green agrees.
2. The curl of \(\mathbf F\) is 1, so the annular integral is \(1\cdot(9\pi-\pi)=8\pi\). The outer radius-three circle contributes \(9\pi\); the inner radius-one circle would contribute \(\pi\) counterclockwise but is traversed clockwise, hence contributes \(-\pi\). The sum is \(8\pi\).
3. By divergence, \(\iint_D(2x+2y)\,dA=1+1=2\). Directly, the left and bottom fluxes vanish because the respective nonzero components are zero there. On the right, \(\mathbf V\cdot\mathbf n=x^2=1\) and the side has length 1, giving 1; the top similarly gives 1. Circulation measures tangential work, \(\oint P\,dx+Q\,dy\), whereas flux measures normal passage.
4. Green gives zero circulation because the curl is zero throughout the disk and the smoothness hypotheses hold on a neighborhood of it. The singular \(\mathbf G\) is undefined at the origin, so a disk containing the origin violates those hypotheses even though the curl is zero at every other point and on the boundary itself.
5. The positively oriented vertices give \(\frac12(0+4\cdot3+0)=6\). Reversing them changes the signed boundary integral to \(-6\); the geometric area remains 6.
6. Knowing the curl only on \(C\) says nothing about the interior integral and does not verify smoothness there. For \(\mathbf G=(-y/(x^2+y^2),x/(x^2+y^2))\) on the unit circle, the curl is zero wherever the field is defined, including every point of the circle, yet direct parametrization gives circulation \(2\pi\). The singularity at the enclosed origin prevents applying Green on the filled disk.

</details>
