# Stokes's theorem: one edge, many spanning surfaces

Primary companion: [Multivariable and Vector Calculus](#/books/calculus-multivariable), Euler’s L2–L3 book. Keep its chapter sequence for the main reading route and use this lesson for the stated investigation or proof connection.

**Learning outcomes:** derive the boundary orientation induced by a chosen normal, compare circulation with curl flux, check smoothness across an entire spanning surface, and choose among Green, Gauss, and Stokes for a mixed problem.

## The theorem with its orientation clause

Let \(S\) be a compact oriented, piecewise smooth surface with a piecewise smooth boundary \(C\), and let \(\mathbf F\) have continuous first partial derivatives on an open neighborhood of \(S\). Stokes's theorem states

$$
\oint_{C=\partial S}\mathbf F\cdot d\mathbf r
=\iint_S(\nabla\times\mathbf F)\cdot\mathbf n\,dS.
$$

The boundary orientation is **induced** by the surface normal. For an upward-oriented graph, the boundary travels counterclockwise as viewed from above. Reversing the normal reverses the induced boundary direction and both sides' signs. The right-hand rule is a mnemonic for this compatibility, but parameter derivatives supply the calculation. A field defined only near the boundary might be unsuitable: the theorem requires smoothness on a neighborhood of the **whole chosen surface**.

### Why the patch identity is true

Take one regular \(C^2\) patch \(\mathbf r(u,v)\) on a simple planar parameter region \(D\), covered once and oriented by \(\mathbf r_u\times\mathbf r_v\). Write \(\mathbf F=(P,Q,T)\), with \(C^1\) components near the patch. A displacement along its boundary is \(d\mathbf r=\mathbf r_u\,du+\mathbf r_v\,dv\). Therefore the pulled-back work form is \(A\,du+B\,dv\), where

$$
A(u,v)=\mathbf F(\mathbf r(u,v))\cdot\mathbf r_u,\qquad
B(u,v)=\mathbf F(\mathbf r(u,v))\cdot\mathbf r_v.
$$

The parameter boundary must be traversed counterclockwise in the \((u,v)\)-plane. This is the positive orientation for planar Green and induces the surface boundary orientation for \(\mathbf r_u\times\mathbf r_v\). Green gives

$$
\oint_{\partial S}\mathbf F\cdot d\mathbf r
=\oint_{\partial D}A\,du+B\,dv
=\iint_D(B_u-A_v)\,du\,dv.
$$

Apply the product and chain rules. For example,
\(B_u=D\mathbf F(\mathbf r)\mathbf r_u\cdot\mathbf r_v+\mathbf F(\mathbf r)\cdot\mathbf r_{vu}\);
the analogous expression for \(A_v\) contains
\(D\mathbf F(\mathbf r)\mathbf r_v\cdot\mathbf r_u+\mathbf F(\mathbf r)\cdot\mathbf r_{uv}\).
The mixed second-derivative terms cancel because \(\mathbf r_{uv}=\mathbf r_{vu}\). Grouping the remaining terms by the three coordinate minors gives

$$
B_u-A_v
=(T_y-Q_z)(y_u z_v-z_u y_v)
 +(P_z-T_x)(z_u x_v-x_u z_v)
 +(Q_x-P_y)(x_u y_v-y_u x_v)
=(\nabla\times\mathbf F)(\mathbf r)\cdot(\mathbf r_u\times\mathbf r_v).
$$

This proves Stokes for the stated single patch under the planar Green hypotheses. A finite collection of compatible patches gives the same identity after summing: each internal edge is traversed twice in opposite directions and cancels. Covering every general piecewise smooth oriented surface by suitable patches, with careful treatment of overlaps and edges, is the further geometric step in the general theorem. The algebra above is a full proof for the patch setting, not a claim that the general geometric decomposition has been proved here.

### Investigation: follow the seam twice

The figure below is a flat parameter-domain model of two compatible surface patches. Both rectangles are traversed counterclockwise. Before moving the split \(s\), trace the blue left boundary and the amber right boundary, and predict the direction each assigns to their common vertical edge. The two seam arrows are offset and shortened slightly so both can be seen; mathematically they traverse the **same full** segment \(x=s\). Use “Show full-size diagram” on a narrow screen to inspect the arrowheads. The new `arrow` scene-language statement lets an author change the split or redraw the patch paths without editing Rust.

```mathviz
scene "Two patches share one edge with opposite directions";
domain -0.25 3.25;
range -0.18 1.18;
coordinates equal;
param s = 1.5 from 0.4 to 2.6;
arrow left_bottom from (0,0) to (s,0) color blue;
arrow left_seam_up from (s-0.06,0.12) to (s-0.06,0.88) color blue;
arrow left_top from (s,1) to (0,1) color blue;
arrow left_outer from (0,1) to (0,0) color blue;
arrow right_bottom from (s,0) to (3,0) color amber;
arrow right_outer from (3,0) to (3,1) color amber;
arrow right_top from (3,1) to (s,1) color amber;
arrow right_seam_down from (s+0.06,0.88) to (s+0.06,0.12) color amber;
segment seam from (s,0) to (s,1) color violet;
```

**Explore.** Move \(s\) while keeping the outer rectangle fixed. The left patch climbs the seam and the right patch descends it; only the partition changes. For a continuous pulled-back form \(A\,du+B\,dv\), let \(I_s=\int_0^1 B(s,v)\,dv\). The left seam contributes \(+I_s\). Parameterizing the right seam by \(v=1-t\) gives \(-I_s\), so their sum is zero for every \(0<s<3\). This is an equality of line integrals, not a judgment from arrow pixels. Of the eight directed patch edges, the two internal copies cancel; the remaining six pieces combine into the counterclockwise boundary of the original rectangle. On a curved surface, compatible parametrizations and induced orientations play the same role; the drawing alone does not establish that every general surface can be decomposed this way.

**Explain.** For \(\mathbf F=(-y/2,x/2)\) on this flat rectangle, the upward seam integral is \(s/2\), and the downward one is \(-s/2\). Green's theorem gives circulation \(s\) around the left patch and \(3-s\) around the right, hence \(3\) around the outer boundary. The agreement follows from Green and cancellation, while the adjustable picture helps keep the signs straight. If only the right patch orientation is reversed, its seam direction matches the left; the two patches no longer form a compatible oriented decomposition and the boundary sum is not the original outer loop.

```exercise
{"id":"calc3-stokes-seam-cancellation","type":"written","prompt":"On [0,3]×[0,1] split at s=2, orient both pieces counterclockwise and use F=(−y/2,x/2). Parameterize the shared edge in each piece's direction and compute its two line integrals. Find each patch circulation and their sum. Explain what fails if you reverse only the right patch's orientation.","hints":["The left seam is (2,t), 0≤t≤1; the right seam can be (2,1−t).","The planar curl Q_x−P_y is one. Green gives each patch's area as its circulation."],"rubric":["Gives opposite seam parametrizations","Computes seam contributions +1 and −1","Computes left and right circulations 2 and 1","Obtains outer circulation 3 and identifies the shared-edge cancellation","Explains that reversing only the right orientation makes shared-edge directions agree and changes the induced outer boundary"],"solution":"For the left patch use c_L(t)=(2,t), 0≤t≤1. Then F(c_L)=(-t/2,1), c_L'=(0,1), so its integral is +1. For the right patch use c_R(t)=(2,1−t); its derivative is (0,−1) and its integral is −1. Both patches have scalar curl one, so their counterclockwise circulations are their areas 2 and 1. The shared contributions cancel and their sum 3 is the counterclockwise outer circulation. Reversing only the right patch reverses its entire boundary: the right seam would go upward, so the internal terms would add instead of cancel, and the remaining outer edges would not all have a common counterclockwise orientation.","transfer":"Keep both pieces counterclockwise but replace F by (−y,x). At an arbitrary split 0<s<3, compute the two seam contributions and both patch circulations. Identify which statements depend on this particular field and which follow from compatible orientation for every C¹ field.","transferSolution":"On the upward seam x=s, F·dr=s dv, so the left contribution is +s and the right is −s. The scalar curl is 1−(−1)=2; Green gives patch circulations 2s and 2(3−s), summing to 6. The numerical values s, 2s, and 6 depend on F. Opposite seam directions and cancellation of the same line integral depend only on compatible orientation, assuming the field is defined and sufficiently smooth on the shared edge and patches."}
```

For a flat upward disk \(\mathbf r(x,y)=(x,y,c)\), the cross product is \(\mathbf k\), and the last displayed identity reduces to \(Q_x-P_y\), Green's circulation integrand. This is why planar Green and Stokes have the same sign convention. If the parameter order is swapped, the cross product and induced boundary direction both reverse.

## Compute one circulation on two surfaces

Let \(\mathbf F=(-y/2,x/2,0)\). Its curl is \((0,0,1)\). Let \(C\) be the unit circle in \(z=0\), traversed counterclockwise viewed from above. Directly \(\mathbf c(t)=(\cos t,\sin t,0)\), \(0\leq t\leq2\pi\), gives \(\mathbf F(\mathbf c)\cdot\mathbf c'=1/2\), so circulation is \(\pi\).

First span \(C\) with the flat unit disk oriented upward. Curl flux is \(\iint_D1\,dA=\pi\). Next span it with the curved cap \(S: z=1-x^2-y^2\) over the same unit disk, also oriented upward. Its area vector is \((2x,2y,1)\,dx\,dy\). Curl dot area vector is again one, so flux is \(\pi\). The two surfaces have different actual areas: the curved cap's area is larger. The theorem integrates the **normal component** of curl, not its magnitude times surface area.

For any smooth upward graph \(z=f(x,y)\) over the same disk with \(f=0\) on its rim and a regular surface, the same field gives curl flux \(\pi\), because \((0,0,1)\cdot(-f_x,-f_y,1)=1\). This is a developed statement about this field and graph class; it is not a license to replace every surface without checking that the new surface shares exactly the same oriented boundary and lies inside the field's smooth domain.

### A curved cap where the curl changes across the surface

The preceding constant curl made the sloping components of the normal invisible. To see them matter, let \(\mathbf F=(-yz,xz,0)\), and take the upward cap \(S:z=2-x^2-y^2\) over \(x^2+y^2\le1\). The rim is at height \(1\) and, from above, runs counterclockwise. First compute the boundary integral directly. With \(\mathbf c(t)=(\cos t,\sin t,1)\),

$$
\mathbf F(\mathbf c(t))=(-\sin t,\cos t,0),\qquad
\mathbf c'(t)=(-\sin t,\cos t,0),
$$

so the integrand is \(1\) and the circulation is \(2\pi\). Now compute
\(\nabla\times\mathbf F=(-x,-y,2z)\). The upward area vector is
\((2x,2y,1)\,dx\,dy\), giving

$$
(\nabla\times\mathbf F)(x,y,2-r^2)\cdot(2x,2y,1)
=-2r^2+2(2-r^2)=4-4r^2.
$$

Its disk integral is \(2\pi\int_0^1(4-4r^2)r\,dr=2\pi\), as required. On the flat disk at \(z=1\), the same oriented rim gives curl flux \(\iint_D2\,dA=2\pi\). The two integrands are different; Stokes equates their totals because the surfaces share the oriented boundary and the field is smooth throughout.

There is a useful near miss. Lower the cap to \(z=1-r^2\), keeping its upward orientation. Its rim is now at \(z=0\), where \(\mathbf F\) vanishes, so the circulation is zero. The curl-flux density becomes \(2-4r^2\): it is positive near the center, negative near the rim, and integrates to zero. Nonzero local curl need not produce nonzero net circulation. The rim itself changed, so this is **not** a second spanning surface for the previous height-one boundary.

```exercise
{"id":"calc3-stokes-orientation-choice","type":"choice","prompt":"For the upward cap \\(z=2-x^2-y^2\\) over the unit disk and \\(\\mathbf F=(-yz,xz,0)\\), which boundary parameterization is compatible with curl flux?","options":[{"label":"\\(\\mathbf c(t)=(\\cos t,-\\sin t,1)\\), \\(0\\le t\\le2\\pi\\).","correct":false,"feedback":"This is clockwise from above and is compatible with the downward normal."},{"label":"\\(\\mathbf c(t)=(\\cos t,\\sin t,1)\\), \\(0\\le t\\le2\\pi\\).","correct":true,"feedback":"Yes. From above this traverses the rim counterclockwise and is induced by the upward normal."},{"label":"\\(\\mathbf c(t)=(\\cos t,\\sin t,0)\\), \\(0\\le t\\le2\\pi\\).","correct":false,"feedback":"This curve has the wrong height. The cap's rim is at z=1."}],"hints":["Evaluate the cap height at r=1, then determine the viewing direction of the chosen normal."]}
```

```exercise
{"id":"calc3-stokes-surfaces","type":"written","prompt":"Use F=(−y/2,x/2,0) and the unit circle in z=0. Compute circulation directly and curl flux through both the upward flat disk and upward paraboloid z=1−x²−y². Why does the curved surface's larger scalar area not change the flux? What happens if you reverse only its normal but keep the original counterclockwise boundary direction?","hints":["The curl is (0,0,1); use the upward graph area vector rather than scalar dS.","A reversed surface normal induces a reversed boundary orientation. Keeping only one reversal breaks the theorem's orientation clause."],"rubric":["Direct parameterized circulation equals π","Flat disk curl flux equals π","Paraboloid curl flux equals π from area vector (2x,2y,1)","Distinguishes scalar area from vertical projected flux","Explains that reversing only the normal yields −π on the right but retains +π on the left, so orientations no longer match"],"solution":"On c(t)=(cos t,sin t,0), F(c)=(-sin t/2,cos t/2,0) and c'=(-sin t,cos t,0), giving integrand 1/2 and integral π. Curl F=(0,0,1). The upward disk flux is its area π. The upward paraboloid area vector is (2x,2y,1)dxdy, so the dot product with curl is 1 and its flux is π. Scalar surface area measures tilted area and is larger, but curl flux measures its vertical projection. Reversing only the paraboloid normal gives −π while the boundary is still counterclockwise; Stokes would require the boundary traversal to reverse too."}
```

## The choice of spanning surface can expose a hole

Extend the planar punctured field from the Green lesson to three dimensions by \(\mathbf G=(-y/(x^2+y^2),x/(x^2+y^2),0)\), defined away from the entire \(z\)-axis. Its curl is zero wherever defined. A horizontal unit circle centered on the axis still has circulation \(2\pi\). The flat spanning disk intersects the missing axis, so Stokes cannot be used there. Could a compact smooth oriented surface lying wholly in the field's domain have exactly that circle as its boundary? If it did, Stokes would give zero circulation, contradicting the direct integral. No such oriented spanning surface exists **within that punctured domain**. This is the three-dimensional version of the planar hole; the obstruction is geometric and topological, not a defective curl computation.

This also explains a useful distinction. For an off-axis small loop, a small flat disk avoids the axis, so Stokes gives zero. For a loop encircling the axis, a picture of a soap film might appear to span it, but any compact smooth oriented surface with that loop as its entire boundary must meet the forbidden axis or leave the domain. A valid theorem proof cannot quietly change the domain to make a drawing convenient.

## Which theorem helps?

Ask first what is being integrated: tangent work on a closed **curve**, normal flow through a **closed surface**, or normal curl flow across an **open surface**. For a planar closed curve, Green turns work into a planar curl integral, assuming its filled region is valid. For a three-dimensional closed surface, Gauss turns flux into divergence over a solid. For an oriented open surface with boundary, Stokes turns curl flux into boundary work. They are connected by orientation and cancellation, but the geometry in each statement is different. A theorem that gives an easy answer on a smooth domain can become unusable when the field is singular inside the required region.

**Transfer:** Let \(C\) be the ellipse \(x^2/4+y^2/9=1\) in \(z=0\), counterclockwise from above, and \(\mathbf F=(-y/2,x/2,z)\). Predict the circulation from area, justify it using an appropriate surface and orientation, then parameterize the ellipse and verify directly. Finally replace \(\mathbf F\) by \(\mathbf G\) above, centered on the same axis. Explain why its circulation and the theorem's available surfaces change. A correct answer uses the transformed ellipse's area \(6\pi\) in the first case and domain reasoning in the second.

<details><summary>Public model: ellipse circulation and the punctured domain</summary>

First use \(\mathbf F=(-y/2,x/2,z)\). It is smooth on all of \(\mathbb R^3\), with \(\nabla\times\mathbf F=(0,0,1)\). The flat elliptical disk \(D:x^2/4+y^2/9\le1,\ z=0\), oriented upward, induces the stated counterclockwise boundary. The map \((u,v)\mapsto(2u,3v,0)\) from the unit disk has area factor \(6\), so \(D\) has area \(6\pi\). Stokes gives

$$
\oint_C\mathbf F\cdot d\mathbf r
=\iint_D(0,0,1)\cdot\mathbf k\,dA
=6\pi.
$$

For the direct check use \(\mathbf c(t)=(2\cos t,3\sin t,0)\), \(0\le t\le2\pi\). Then

$$
\mathbf c'=(-2\sin t,3\cos t,0),\qquad
\mathbf F(\mathbf c)=(-3\sin t/2,\cos t,0),
$$

so \(\mathbf F(\mathbf c)\cdot\mathbf c'=3\sin^2t+3\cos^2t=3\), again giving \(6\pi\). Clockwise traversal gives \(-6\pi\) and requires the downward surface orientation. Reversing only the normal while keeping the original traversal breaks the required compatibility.

For the actual field in the preceding section,

$$
\mathbf G=\left(-\frac{y}{x^2+y^2},\frac{x}{x^2+y^2},0\right),
\qquad
U=\mathbb R^3\setminus\{(0,0,z):z\in\mathbb R\},
$$

the same ellipse avoids the missing axis. Put \(d(t)=4\cos^2t+9\sin^2t>0\). Direct substitution gives

$$
\mathbf G(\mathbf c)\cdot\mathbf c'
=\frac{6}{4\cos^2t+9\sin^2t}.
$$

The four quadrant integrals are equal. On the first quadrant, set \(u=\tan t\); then

$$
\oint_C\mathbf G\cdot d\mathbf r
=4\int_0^{\pi/2}\frac{6\,dt}{4\cos^2t+9\sin^2t}
=4\int_0^\infty\frac{6\,du}{4+9u^2}
=4\left[\arctan\left(\frac{3u}{2}\right)\right]_0^\infty
=2\pi.
$$

This circulation is not the ellipse's area. Reversing traversal gives \(-2\pi\). Although \(\nabla\times\mathbf G=0\) on \(U\), the flat elliptical disk meets the forbidden axis. More generally, if a compact oriented piecewise smooth surface \(S\subset U\) had exactly \(C\) as its entire induced boundary, Stokes would give \(\oint_C\mathbf G\cdot d\mathbf r=0\), contradicting the direct \(2\pi\). No such spanning surface is available within \(U\) under these hypotheses.

Surfaces with additional boundary are different: the planar annulus between this ellipse and a smaller concentric scaled ellipse avoids the axis. Its upward orientation gives an outer counterclockwise and inner clockwise boundary; their circulations are \(2\pi\) and \(-2\pi\), summing to zero as Stokes requires. A noncompact exterior surface is outside the compact-surface theorem stated here and needs its own outer-boundary argument. Changing the field's domain or dropping a boundary component cannot justify a zero answer for the original ellipse.

</details>

```exercise
{"id":"calc3-stokes-independent","type":"written","prompt":"Let \\(S\\) be the upward graph \\(z=2-x^2-y^2\\) over the unit disk. For \\(\\mathbf W=(0,xz,0)\\), find curl flux across \\(S\\). Independently parameterize its boundary and compute circulation. A classmate uses the flat disk at \\(z=0\\); why does that check fail?","hints":["Compute ∇×W before substituting z=2−r².","On the rim z=1, W=(0,x,0); the flat comparison disk must share that height-one rim."],"rubric":["Finds curl W=(−x,0,z)","Uses the upward area vector (2x,2y,1) and obtains flux π","Computes boundary circulation π from cos²t","Rejects z=0 disk because it has a different boundary","Checks smoothness and compatible orientation"],"solution":"The polynomial field is smooth near \\(S\\), and \\(\\nabla\\times\\mathbf W=(-x,0,z)\\). On the graph its dot product with the upward vector area \\((2x,2y,1)\\,dA\\) is \\(-2x^2+2-r^2\\). Since \\(\\int_Dx^2\\,dA=\\pi/4\\) and \\(\\int_Dr^2\\,dA=\\pi/2\\), flux is \\(-\\pi/2+2\\pi-\\pi/2=\\pi\\). The counterclockwise boundary is \\(\\mathbf c(t)=(\\cos t,\\sin t,1)\\). There \\(\\mathbf W(\\mathbf c)=(0,\\cos t,0)\\) and \\(\\mathbf W(\\mathbf c)\\cdot\\mathbf c'=\\cos^2t\\), whose integral is \\(\\pi\\). A disk at \\(z=0\\) has a different boundary; the valid flat spanning disk is at \\(z=1\\).","transfer":"Changed case: lower S to z=1−x²−y² and use the same W. Predict and compute the new circulation directly and by curl flux; identify what changed geometrically.","transferSolution":"The new rim is at \\(z=0\\), so \\(\\mathbf W=0\\) along it and circulation is zero. The upward curl-flux density becomes \\(-2x^2+1-r^2\\), whose integral is \\(-\\pi/2+\\pi-\\pi/2=0\\). The field stayed fixed, but the boundary curve moved, so Stokes equates a new pair of integrals."}
```


## Optional clinic: local normals and global orientation

This optional untimed session is outside the published route budget; its timing and independent marking remain uncalibrated. It asks whether a surface admits **any** global continuous normal. First write a prediction, then inspect a diagram, calculate, and revise your explanation. The cases have a fixed integer number of half-twists. The controls never interpolate between integers. A regular parameter rectangle, its geometric image, and its directed boundary are separate objects.

Fix \(0<w<1\), a positive integer \(k\), and put
\[
\begin{gathered}
\gamma=k/2,\qquad C=\cos(\gamma\theta),\\
S=\sin(\gamma\theta),\qquad \rho=1+vC,\\
R_k(\theta,v)=(x,y,z),\\
x=\rho\cos\theta,\quad y=\rho\sin\theta,\quad z=vS,\\
0\le\theta\le2\pi,\qquad -w\le v\le w.
\end{gathered}
\]
The formula extends to all real \(\theta\). Its image is a ribbon around the radius-one center circle. The diagrams below show an unwrapped parameter domain or declared normal components in a rotating frame. They are not three-dimensional surface renderings.

Use the rotating orthonormal basis
\[
\begin{gathered}
e_r(\theta)=(\cos\theta,\sin\theta,0),\\
e_\theta(\theta)=(-\sin\theta,\cos\theta,0),\\
e_z=(0,0,1).
\end{gathered}
\]
The prime denotes differentiation with respect to \(\theta\), so \(e_r'=e_\theta\). All three basis vectors return to themselves after one full turn.

### Saved investigation: local patches and one physical normal

```visual-story
{
  "id": "intrinsic-ribbon-orientation",
  "title": "Can these local normals define one surface orientation?",
  "prompt": "Check local regularity, the identified seam and the directed boundary separately. The diagrams are parameter or rotating-frame schematics, not three-dimensional ribbon renderings.",
  "stages": [
    {
      "title": "Check a regular patch at its identified seam",
      "body": "Use the fixed half-twist case \\(k=1\\) and \\(0<w<1\\). Write \\(t=\\theta/(2\\pi)\\), \\(C=\\cos(\\theta/2)\\), \\(S=\\sin(\\theta/2)\\) and \\(\\rho=1+vC\\). The ribbon coordinates are\n\\[\n\\begin{gathered}\nx=\\rho\\cos\\theta,\\\\\ny=\\rho\\sin\\theta,\\quad z=vS,\\\\\n|v|\\le w.\n\\end{gathered}\n\\]\nThe picture is the **parameter rectangle** with horizontal coordinate \\(t\\) and vertical coordinate \\(v\\). Its four arrows give its counterclockwise boundary. The two marked points are candidate seam partners to check from the coordinates: right parameter \\(v=wh\\), left parameter \\(-v\\). The control \\(t\\) probes local regularity in the readouts; it does not move those two seam points. Width stays strictly positive and below one.",
      "question": "Calculate the cross product and a positive lower bound for its length throughout the rectangle. Identify exactly which left and right edge points coincide in space. Does local regularity settle whether one continuous physical normal exists?",
      "checkpoint": {
        "hint": "In the cylindrical orthonormal frame, R_theta has azimuthal component rho. Compute the entire cross product, then evaluate the coordinates at theta=0 and theta=2pi.",
        "explanation": "With \\(\\gamma=1/2\\), differentiation gives\n\\[\n\\begin{aligned}\nR_\\theta\\times R_v\n&=\\rho(S e_r-C e_z)\\\\\n&\\quad+\\gamma v e_\\theta.\n\\end{aligned}\n\\]\nConsequently\n\\[\n\\begin{aligned}\n\\|R_\\theta\\times R_v\\|^2\n&=\\rho^2+\\gamma^2v^2\\\\\n&\\ge(1-w)^2>0.\n\\end{aligned}\n\\]\nEvery local patch is regular. The cross product's azimuthal component is \\(\\gamma v\\); the positive quantity \\(\\rho\\) is the azimuthal component of \\(R_\\theta\\).\n\nAt the two parameter ends,\n\\[\n\\begin{gathered}\nR_1(0,v)=(1+v,0,0),\\\\\nR_1(2\\pi,v)=(1-v,0,0),\\\\\nR_1(2\\pi,v)=R_1(0,-v).\n\\end{gathered}\n\\]\nThus a right-edge point is identified with the **opposite** left-edge parameter. These edge copies are not two physical boundary components. A local cross product does not yet tell us whether its sign can be chosen consistently after this identification. The general embedding proof below also rules out any other repeated coverage.",
        "criteria": [
          "Calculates the full cross product and positive bound.",
          "Matches right v with left minus v.",
          "Separates local regularity from a global normal.",
          "Uses the stated parameter coordinates for the diagram."
        ]
      },
      "scene": "scene \"A parameter rectangle with a reversing seam\";\ndomain -0.2 1.2; range -1 1; coordinates equal;\nparam w=0.5 from 0.1 to 0.8;\nparam t=0.5 from 0 to 1;\nparam h=0.5 from -1 to 1;\nlet v=w*h; let rho=1+v*cos(pi*t);\narrow lower_edge from (0,-w) to (1,-w) color blue;\narrow right_cut from (1,-w) to (1,w) color amber;\narrow upper_edge from (1,w) to (0,w) color blue;\narrow left_cut from (0,w) to (0,-w) color amber;\npoint right_seam_point=(1,v) color teal;\npoint left_seam_partner=(0,-v) color teal;\nmeasure local_radius=rho;\nmeasure local_normal_squared=rho^2+v^2/4;\nmeasure global_positive_bound_squared=(1-w)^2;\nmeasure selected_source_v=v;\nmeasure right_seam_image_radius=1-v;\nmeasure left_seam_partner_v=-v;",
      "focus": [
        "arrow-right_cut",
        "arrow-left_cut",
        "point-right_seam_point",
        "point-left_seam_partner"
      ]
    },
    {
      "title": "Prove that every continuous normal choice fails",
      "body": "An orientation is a continuous **unit normal on physical points**. On the centre circle \\(v=0\\), the computed unit normal for a fixed integer \\(k\\) is\n\\[\n\\begin{gathered}\nN_k(\\theta)=S e_r-C e_z,\\\\\nC=\\cos(k\\theta/2),\\\\\nS=\\sin(k\\theta/2).\n\\end{gathered}\n\\]\nThe diagram shows its radial and vertical **components in the rotating frame**: horizontal means \\(e_r(\\theta)\\), vertical means \\(e_z\\). It is not a projection of the ribbon. The frame returns to itself at \\(2\\pi\\), making the endpoint comparison physical. Blue is the fixed case \\(k=1\\); amber is the separate fixed case \\(k=2\\). Only progress \\(t=\\theta/(2\\pi)\\) varies. There is no continuous twist-count control. The last two readouts are exact endpoint certificates, independent of current progress.",
      "question": "Compare both endpoint normals. Why does the k=1 reversal rule out every continuous choice, rather than only this computed choice? Prove that k=2 really admits a global normal using the full cross product, not only the centre circle.",
      "checkpoint": {
        "hint": "Any unit normal along the centre circle is sigma(theta) times the computed normal, where sigma is a continuous function taking only the values minus one and plus one. For k=2, inspect the full seam at every v.",
        "explanation": "At the same physical starting and returning centre point,\n\\[\nN_k(2\\pi)=(-1)^kN_k(0).\n\\]\nFor \\(k=1\\), the endpoint vectors differ by length two; their squared mismatch is exactly four. Suppose another continuous physical unit normal \\(n\\) existed. Put \\(p(\\theta)=R_1(\\theta,0)\\) and define\n\\[\n\\begin{aligned}\n\\sigma(\\theta)&=n(p(\\theta))\\cdot N_1(\\theta),\\\\\n\\sigma(\\theta)&\\in\\{-1,1\\}.\n\\end{aligned}\n\\]\nBoth vectors are unit normals to the same regular tangent plane. Therefore \\(n(p(\\theta))=\\sigma(\\theta)N_1(\\theta)\\). Continuity and the intermediate value theorem force \\(\\sigma\\) to be constant. Returning to the same physical point would then return the opposite \\(n\\), a contradiction. Changing the overall sign cannot repair this.\n\nFor \\(k=2\\), the seam identifies \\(v\\) with the same \\(v\\). The **full** cross product agrees across it and never vanishes. Normalizing that vector supplies a global continuous unit normal; its endpoint mismatch is exactly zero. The proof applies to every even positive integer, while the contradiction applies to every odd one.\n\nThe ribbon image is compact in both cases. Compactness does not supply the missing orientation. Scalar area remains meaningful even when a global oriented flux is unavailable.",
        "criteria": [
          "Compares normals at one physical point.",
          "Uses a continuous sign to exclude every choice.",
          "Checks the full even-case cross product at the seam.",
          "Distinguishes the frame schematic from the surface."
        ]
      },
      "scene": "scene \"Normal components in a rotating radial and vertical frame\";\ndomain -1.3 1.3; range -1.3 1.3; coordinates equal;\nparam t=0.5 from 0 to 1;\nlet odd_r=sin(pi*t); let odd_z=-cos(pi*t);\nlet even_r=sin(2*pi*t); let even_z=-cos(2*pi*t);\nsegment radial_axis from (-1.1,0) to (1.1,0) color violet;\nsegment vertical_axis from (0,-1.1) to (0,1.1) color violet;\narrow odd_normal from (0,0) to (odd_r,odd_z) color blue;\narrow even_normal from (0,0) to (even_r,even_z) color amber;\npoint initial_normal=(0,-1) color teal;\npoint odd_return=(0,1) color rose;\nmeasure odd_radial_component=odd_r; measure odd_vertical_component=odd_z;\nmeasure even_radial_component=even_r; measure even_vertical_component=even_z;\nmeasure odd_endpoint_mismatch_squared=4; measure even_endpoint_mismatch_squared=0;",
      "focus": [
        "arrow-odd_normal",
        "arrow-even_normal",
        "point-initial_normal",
        "point-odd_return"
      ]
    },
    {
      "title": "Identify the directed curve before using Stokes",
      "body": "Keep \\(k=1\\) and use \\(F=(-y/2,x/2,0)\\), smooth on all of space. Its curl is \\(e_z\\). The left schematic is the counterclockwise parameter rectangle; the right shows the two long edges of the **physical boundary**, both traversed with increasing \\(\\theta\\). The right arrows are joined by the seam identification in space: upper end to lower start, then lower end to upper start. Neither drawing is a three-dimensional ribbon.\n\nEach forward long edge has work \\(L=\\pi(1+w^2/2)\\). The readouts distinguish the exact rectangle identity from the chosen physical boundary work. The physical curve has one component; it has no orientation induced by a global ribbon normal.",
      "question": "A classmate computes zero from the parameter rectangle and 2pi+pi*w^2 around the ribbon boundary. Has Stokes failed? Specify all four rectangle-edge directions and the physical boundary traversal. Explain why both calculations are valid and why they concern different directed curves.",
      "checkpoint": {
        "hint": "For any path with x=rho*cos(theta), y=rho*sin(theta), F·dr=rho^2*dtheta/2. The odd ribbon's physical boundary is R_1(theta,w) with theta from zero to four pi. Inspect the two cut images as directed segments.",
        "explanation": "The pullback is \\(A\\,d\\theta+B\\,dv\\), where\n\\[\nA=\\rho^2/2,\\qquad B=0.\n\\]\nThe rectangle travels along lower edge \\(+\\theta\\), right cut \\(+v\\), upper edge \\(-\\theta\\), left cut \\(-v\\). Its two long works are \\(+L\\) and \\(-L\\). Both cut works happen to be zero for this field, so its total is zero. Proper Green on that rectangle gives the same value:\n\\[\n\\begin{gathered}\n\\iint -\\rho C\\,d\\theta\\,dv\\\\\n=-2w\\int_0^{2\\pi}\\cos(\\theta/2)\\,d\\theta\\\\\n=0.\n\\end{gathered}\n\\]\nThis is a valid parameter identity.\n\nThe chosen physical boundary is\n\\[\n\\begin{gathered}\nC_1(\\theta)=R_1(\\theta,w),\\\\\n0\\le\\theta\\le4\\pi.\n\\end{gathered}\n\\]\nIts second half is the lower edge with increasing \\(\\theta\\), by the seam identity. Positive radius rules out extra repetitions; the two halves cover the one physical boundary exactly once. Put \\(h(\\theta)=1+w\\cos(\\theta/2)\\). Directly,\n\\[\n\\begin{aligned}\n\\oint_{C_1}F\\cdot dr\n&=\\tfrac12\\int_0^{4\\pi}h(\\theta)^2\\,d\\theta\\\\\n&=2\\pi+\\pi w^2.\n\\end{aligned}\n\\]\nFor the rectangle, both cut edges map from outer radius \\(1+w\\) to inner radius \\(1-w\\). They do not cancel as directed curves, even though their work is zero for this particular field. Its upper long edge also has the reverse of the chosen physical direction.\n\nThe numbers concern different directed curves. The ribbon has no global continuous normal, so the oriented-surface Stokes theorem does not identify its physical boundary work with that signed parameter integral. This is not a theorem counterexample. Another orientable spanning surface might permit Stokes; none is ruled out here.",
        "criteria": [
          "States all four rectangle-edge directions.",
          "Shows the physical boundary is traversed once.",
          "Distinguishes valid Green from a global flux.",
          "Identifies the missing orientation hypothesis."
        ]
      },
      "scene": "scene \"Different directed boundaries of one parameterized ribbon\";\ndomain -0.3 2.9; range -1 1; coordinates equal;\nparam w=0.5 from 0.1 to 0.8;\narrow rectangle_lower from (0,-w) to (1,-w) color blue;\narrow rectangle_right_cut from (1,-w) to (1,w) color amber;\narrow rectangle_upper from (1,w) to (0,w) color blue;\narrow rectangle_left_cut from (0,w) to (0,-w) color amber;\narrow physical_upper_forward from (1.6,w) to (2.6,w) color teal;\narrow physical_lower_forward from (1.6,-w) to (2.6,-w) color teal;\nmeasure forward_long_edge_work=pi*(1+w^2/2);\nmeasure parameter_rectangle_work=0;\nmeasure chosen_physical_boundary_work=pi*(2+w^2);\nmeasure physical_minus_rectangle=pi*(2+w^2);\nmeasure default_cut_edge_work=0;\nmeasure physical_boundary_components=1;",
      "focus": [
        "arrow-rectangle_upper",
        "arrow-rectangle_right_cut",
        "arrow-physical_upper_forward",
        "arrow-physical_lower_forward"
      ]
    }
  ]
}
```

### Why these are embedded ribbons

In the orthonormal cylindrical frame, differentiation gives
\[
\begin{aligned}
R_\theta
&=-\gamma vS e_r+\rho e_\theta\\
&\quad+\gamma vC e_z,\\
R_v&=C e_r+S e_z.
\end{aligned}
\]
Taking the cross product gives the expression used in the investigation:
\[
\begin{aligned}
R_\theta\times R_v
&=\rho(S e_r-C e_z)\\
&\quad+\gamma v e_\theta,\\
\|R_\theta\times R_v\|^2
&=\rho^2+\gamma^2v^2.
\end{aligned}
\]
Since \(\rho\ge1-w>0\), this vector never vanishes. This is a local regularity proof, including all source edges.

There is also a global injectivity argument. Positive radius makes the polar angle of the first two coordinates recover \(\theta\) modulo \(2\pi\). For \(0\le\theta<2\pi\), coinciding image points therefore have the same \(\theta\). At that angle their radial displacement and height form \(v(C,S)\); because \(C^2+S^2=1\), these determine \(v\). The only repeated points of the closed rectangle are its matched seam edges:
\[
R_k(2\pi,v)=R_k(0,(-1)^k v).
\]
There are no other collisions, including for larger even integers. The image is an embedded ribbon after these seam copies are identified; the closed rectangle is not injective at that seam.

Local smoothness across the join follows from the identity
\[
R_k(\theta+2\pi,(-1)^k v)=R_k(\theta,v).
\]
A small interval of negative and positive \(\theta\) provides one regular chart across the cut; at a physical boundary point use the corresponding half-neighborhood in \(v\). This proves the join is smooth, rather than deducing a global embedding from a nonzero cross product alone. The image is compact because it is the continuous image of the compact parameter rectangle.

For odd \(k\), the two long edges join into the one physical boundary traversed by \(R_k(\theta,w)\), \(0\le\theta\le4\pi\). The second half equals the other edge with increasing angle. Positive radius and \(w>0\) show this curve has no additional repetitions. For even \(k\), each long edge closes after \(2\pi\), giving two separate components. The proof that odd ribbons have no continuous unit normal, and even ribbons do, is the continuous-sign and full-seam argument in Stage 2. Scalar area uses the norm of the cross product and remains defined in either case.

### Why the finite theorem needs compactness

The punctured-domain argument earlier in this lesson concerns a **compact oriented surface whose entire boundary is the stated circle**. The qualifications matter. For the smooth field
\[
V=\left(-\frac{y}{x^2+y^2},
\frac{x}{x^2+y^2},0\right)
\]
off the \(z\)-axis, the noncompact exterior plane
\[
E=\{(x,y,0):x^2+y^2\ge1\}
\]
avoids the axis and has the unit circle as its sole physical boundary. Give it the downward normal; that induces counterclockwise direction on the inner circle, whose work is \(2\pi\). Its existence explains why the unqualified no-surface claim would be too strong.

On the compact annulus \(E_R=\{z=0,\ 1\le r\le R\}\), \(R>1\), the same downward orientation induces inner work \(+2\pi\) and outer work \(-2\pi\). Their total is zero, agreeing with zero curl. Increasing \(R\) does not make the outer work vanish. The finite compact theorem cannot silently discard that contribution at infinity. Additional boundary components likewise must be included. The argument does not address a nonorientable filling; no further topology or improper-surface theorem is being assumed.

### Unary notebook: which direction did you integrate?

For \(k=1\), the forward long-edge primitives below have derivatives
\[
\begin{gathered}
P'(\theta)=\tfrac12(1+w\cos(\theta/2))^2,\\
M'(\theta)=\tfrac12(1-w\cos(\theta/2))^2.
\end{gathered}
\]
Predict seven scalar outputs: upper-forward work; lower-forward work; their oriented rectangle difference; the chosen physical boundary work; its closed formula; their discrepancy; and the exact theoretical rectangle value. The sine evaluations use floating arithmetic and can leave a tiny discrepancy at an exact trigonometric zero. The identities above prove the exact values; a numerical residue does not refute them.

```notebook
param w=0.5 from 0.1 to 0.8;
let a=(2+w^2)/4;
let b=2*w;
let c=w^2/4;
fn P(x)=a*x+b*sin(x/2)+c*sin(x);
fn M(x)=a*x-b*sin(x/2)+c*sin(x);
let u=P(2*pi)-P(0);
let l=M(2*pi)-M(0);
let rectangle=l-u;
let physical=P(4*pi)-P(0);
let expected=pi*(2+w^2);
let exact_rectangle=0;
show u;
show l;
show rectangle;
show physical;
show expected;
show physical-expected;
show exact_rectangle;
```

For the authored direction, the two forward works equal
\[
L=\pi(1+w^2/2).
\]
The rectangle has exact work zero, while the once-traversed physical boundary has work \(2L\). The notebook's final zero is the proved reference value, rather than a subtraction of floating approximations.

**Direction edit.** Reverse the chosen physical boundary while keeping the parameter rectangle's orientation. Before running, replace **both** lines
```text
let physical=P(4*pi)-P(0);
let expected=pi*(2+w^2);
```
by
```text
let physical=P(0)-P(4*pi);
let expected=-pi*(2+w^2);
```
Keep all seven output commands unchanged. Explain which values reverse and why the rectangle's value does not. What does changing only the first line make the discrepancy compare?

<details>
<summary>Direction-edit hint</summary>

An integral reverses sign when its own curve direction reverses. The rectangle is a different directed curve. The two forward long-edge integrals in the first two outputs also retain their original directions.

</details>

<details>
<summary>Direction-edit model reasoning</summary>

The first three outputs retain their meanings and values. The physical work becomes \(-(2\pi+\pi w^2)\); its expected formula must reverse as well. Their discrepancy is still mathematically zero, subject to floating evaluation. The final exact rectangle value stays zero. If only the physical line is changed, the discrepancy instead becomes
\[
-2(2\pi+\pi w^2),
\]
because it compares a reversed curve with the old positive reference. That is a mismatched comparison, not a failure of a calculus identity. Neither this edit nor zero rectangle work creates a continuous normal on the odd ribbon.

</details>

### Independent written task: change the twist and then the field

The next cases have no twist-count slider. Derive the seam and physical boundary before applying a theorem. The changed gradient field in the transfer is not evaluated by the default scene or notebook.

```exercise
{
  "id": "calc3-ribbon-parity-independent",
  "type": "written",
  "prompt": "Fix \\(0<w<1\\) and use the ribbon \\(R_k\\) from the clinic, but work with the two integer cases \\(k=2\\) and \\(k=3\\) without a twist-count control. For each case derive the seam identification, decide whether a global continuous unit normal exists, and count its physical boundary components. Justify each claimed once-only boundary traversal. For \\(k=2\\), orient by \\(R_\\theta\\times R_v\\), give the induced direction on each component, and compute their total work for \\(F=(-y/2,x/2,0)\\). For \\(k=3\\), prove the obstruction using every possible continuous normal choice and state precisely why Stokes is unavailable on this ribbon. State the compactness and full-boundary conditions involved; do not infer the answer from a drawing.",
  "hints": [
    "Positive rho determines theta modulo 2pi; at a fixed angle, v(C,S) determines v. Evaluate C and S at the seam for k=2 and k=3.",
    "For the odd case, write another unit normal as a continuous sign times the computed centre-circle normal. For the even case, check the full cross product, not only one loop.",
    "Both forward long-edge integrals for F equal pi*(1+w^2/2). Determine whether their physical induced directions agree or oppose before adding them."
  ],
  "rubric": [
    "Derives both changed seam identifications.",
    "Builds the full even-case normal across the seam.",
    "Uses a continuous sign to exclude odd-case normals.",
    "Counts and orients the physical boundary components.",
    "Justifies once-only traversal using positive radius.",
    "States compactness and the full-boundary conditions.",
    "Separates local regularity from a global normal."
  ],
  "solution": "For \\(k=2\\), \\(R_2(2\\pi,v)=R_2(0,v)\\). The nonzero full cross product agrees across this seam, so its normalization defines a global continuous unit normal. Each edge \\(v=\\pm w\\) closes as \\(\\theta\\) runs from \\(0\\) to \\(2\\pi\\). Positive radius makes azimuth determine \\(\\theta\\) modulo \\(2\\pi\\), and the unit vector \\((C,S)\\) then determines \\(v\\); hence each edge is traversed once and the two components are disjoint. The induced boundary runs forward on \\(v=-w\\) and backward on \\(v=+w\\). Each forward work is \\(L=\\pi(1+w^2/2)\\), so the induced total is \\(L-L=0\\). The ribbon is compact, oriented, and the boundary integral includes **both** components. Summing compatible finite patches, or using the parameter rectangle with cancelling cut copies, gives the corresponding Stokes identity.\n\nFor \\(k=3\\), the seam instead identifies \\(v\\) with \\(-v\\). The physical boundary is the extended curve \\(R_3(\\theta,w)\\), \\(0\\le\\theta\\le4\\pi\\): the second half is exactly the opposite long edge with increasing angle. The halves have no interior repetitions by the same positive-radius argument, and the two physical edges are distinct because \\(w>0\\). It therefore traverses one component once.\n\nAlong the centre circle the computed unit normal reverses at the identified point. Any other continuous unit normal would be \\(\\sigma(\\theta)N_3(\\theta)\\), with a continuous \\(\\sigma\\) taking only the values \\(+1,-1\\). The intermediate value theorem forces that sign to be constant, contradicting return to the same physical normal. All local patches remain regular; the compact ribbon lacks a global orientation. Stokes cannot use that ribbon as an oriented spanning surface. This does not rule out another orientable spanning surface for its boundary. No repeated circulation computation is needed to establish this theorem decision.",
  "transfer": "Changed field, outside the default controls: take the half-twist ribbon \\(k=1\\), now with \\(w=1/3\\), and \\(G=(x,0,0)\\). Compute work along all four counterclockwise parameter-rectangle edges in their order, then around the once-traversed physical boundary \\(R_1(\\theta,w)\\), \\(0\\le\\theta\\le4\\pi\\). Explain what number results if the two cut edges are discarded, why it is spurious, and why zero physical work does not establish a global normal.",
  "transferSolution": "Use \\(G=\\nabla(x^2/2)\\). On each edge, work is the final value of \\(x^2/2\\) minus its initial value. For general \\(w\\), the counterclockwise rectangle has lower work \\(+2w\\), right-cut work \\(-2w\\), upper-reverse work \\(+2w\\), and left-cut work \\(-2w\\). At \\(w=1/3\\), these are \\(+2/3,-2/3,+2/3,-2/3\\), summing to zero.\n\nBoth cut images run from outer radius \\(1+w\\) to inner radius \\(1-w\\). They are distinct directed copies and their work is nonzero for this changed field. Discarding them leaves \\(4w=4/3\\), which is not the rectangle boundary work.\n\nThe chosen physical boundary uses the upper edge forward, with work \\(-2w\\), then the lower edge forward, with work \\(+2w\\). Thus its work is \\(-2/3+2/3=0\\), also following directly from the global potential on a closed once-traversed curve. Its long-edge directions differ from the rectangle's. The continuous-normal obstruction depends on the ribbon geometry and is unchanged by replacing the field. A zero work value for this field cannot supply the missing orientation."
}
```

The continuous-normal definition and Möbius example are discussed in [OpenStax Calculus Volume 3, section 6.6](https://openstax.org/books/calculus-volume-3/pages/6-6-surface-integrals), while [section 6.7](https://openstax.org/books/calculus-volume-3/pages/6-7-stokes-theorem) states the oriented-surface hypothesis. [Denis Auroux's MIT 18.02 Lecture 32](https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/8a71f5e4a22283440a0cfedb9e874469_18_022007L32.pdf) discusses the Möbius obstruction and the possibility of choosing another orientable spanning surface. [Oliver Knill's Harvard Math 22a exhibit](https://legacy-www.math.harvard.edu/~knill/teaching/math22a2018/exhibits/moebius/index.html) uses the standard ribbon parameterization and Mathematica to calculate a local normal and scalar area; a computable local vector still needs the seam check. The explicit regularity, embedding, sign proofs and changed tasks here are independently developed.
